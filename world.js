(()=>{var wa="186";var Oh=0,cl=1,zh=2;var vr=1,Hh=2,ts=3,Si=0,xn=1,nn=2,wi=0,ns=1,Yn=2,ll=3,hl=4,kh=5;var _r=100,Gh=101,Vh=102,Wh=103,Xh=104,qh=200,Yh=201,Zh=202,Jh=203,ul=204,dl=205,$h=206,Kh=207,Qh=208,jh=209,eu=210,tu=211,nu=212,iu=213,ru=214,zo=0,Ho=1,ko=2,Gr=3,Go=4,Vo=5,Wo=6,Xo=7,ba=0,su=1,ou=2,ai=0,fl=1,pl=2,ml=3,Js=4,gl=5,xl=6,yl=7;var vl=300,tr=301,Mr=302,Ta=303,Aa=304,$s=306,Vr=1e3,pi=1001,qo=1002,bn=1003,au=1004;var Ks=1005;var gn=1006,Ra=1007;var nr=1008;var kn=1009,_l=1010,Ml=1011,is=1012,Ca=1013,ci=1014,Kn=1015,Bn=1016,Pa=1017,Ia=1018,rs=1020,El=35902,Sl=35899,wl=1021,bl=1022,Qn=1023,mi=1026,ir=1027,ss=1028,La=1029,rr=1030,Na=1031;var Da=1033,Qs=33776,js=33777,eo=33778,to=33779,Ua=35840,Fa=35841,Ba=35842,Oa=35843,za=36196,Ha=37492,ka=37496,Ga=37488,Va=37489,no=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,Ja=37812,$a=37813,Ka=37814,Qa=37815,ja=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,sc=36492,oc=36494,ac=36495,cc=36283,lc=36284,io=36285,hc=36286;var Ts=2300,Yo=2301,Bo=2302,Kc=2303,Qc=2400,jc=2401,el=2402;var cu=3200;var ro=0,lu=1,Bi="",Sn="srgb",As="srgb-linear",Rs="linear",Vt="srgb";var Oo=7680;var hu=519,uu=512,du=513,fu=514,uc=515,pu=516,mu=517,dc=518,gu=519,xu=35044,Tl=35048;var Al="300 es",si=2e3,Wr=2001;function Id(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ld(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yu(){let i=Cs("canvas");return i.style.display="block",i}var ih={},Xr=null;function Rl(...i){let e="THREE."+i.shift();Xr?Xr("log",e,...i):console.log(e,...i)}function vu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function lt(...i){i=vu(i);let e="THREE."+i.shift();if(Xr)Xr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=vu(i);let e="THREE."+i.shift();if(Xr)Xr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hr(...i){let e=i.join(" ");e in ih||(ih[e]=!0,lt(...i))}function _u(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Mu={[zo]:Ho,[ko]:Wo,[Go]:Xo,[Gr]:Vo,[Ho]:zo,[Wo]:ko,[Xo]:Go,[Vo]:Gr},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=1234567,Es=Math.PI/180,ur=180/Math.PI;function os(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function Cl(i,e){return(i%e+e)%e}function Nd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Dd(i,e,t){return i!==e?(t-i)/(e-i):0}function Ss(i,e,t){return(1-t)*i+t*e}function Ud(i,e,t,n){return Ss(i,e,1-Math.exp(-t*n))}function Fd(i,e=1){return e-Math.abs(Cl(i,e*2)-e)}function Bd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Od(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hd(i,e){return i+Math.random()*(e-i)}function kd(i){return i*(.5-Math.random())}function Gd(i){i!==void 0&&(rh=i);let e=rh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vd(i){return i*Es}function Wd(i){return i*ur}function Xd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zd(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),d=o((e+n)/2),p=s((e-n)/2),u=o((e-n)/2),h=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*d,c*p,c*u,a*l);break;case"YZY":i.set(c*u,a*d,c*p,a*l);break;case"ZXZ":i.set(c*p,c*u,a*d,a*l);break;case"XZX":i.set(a*d,c*m,c*h,a*l);break;case"YXY":i.set(c*h,a*d,c*m,a*l);break;case"ZYZ":i.set(c*m,c*h,a*d,a*l);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pl={DEG2RAD:Es,RAD2DEG:ur,generateUUID:os,clamp:At,euclideanModulo:Cl,mapLinear:Nd,inverseLerp:Dd,lerp:Ss,damp:Ud,pingpong:Fd,smoothstep:Bd,smootherstep:Od,randInt:zd,randFloat:Hd,randFloatSpread:kd,seededRandom:Gd,degToRad:Vd,radToDeg:Wd,isPowerOfTwo:Xd,ceilPowerOfTwo:qd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:Zd,normalize:Un,denormalize:Hr},Fl=class Fl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fl.prototype.isVector2=!0;var Ze=Fl,ht=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],d=n[r+2],p=n[r+3],u=s[o+0],h=s[o+1],m=s[o+2],M=s[o+3];if(p!==M||c!==u||l!==h||d!==m){let x=c*u+l*h+d*m+p*M;x<0&&(u=-u,h=-h,m=-m,M=-M,x=-x);let f=1-a;if(x<.9995){let E=Math.acos(x),R=Math.sin(E);f=Math.sin(f*E)/R,a=Math.sin(a*E)/R,c=c*f+u*a,l=l*f+h*a,d=d*f+m*a,p=p*f+M*a}else{c=c*f+u*a,l=l*f+h*a,d=d*f+m*a,p=p*f+M*a;let E=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=E,l*=E,d*=E,p*=E}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],d=n[r+3],p=s[o],u=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+d*p+c*h-l*u,e[t+1]=c*m+d*u+l*p-a*h,e[t+2]=l*m+d*h+a*u-c*p,e[t+3]=d*m-a*p-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(r/2),p=a(s/2),u=c(n/2),h=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=u*d*p+l*h*m,this._y=l*h*p-u*d*m,this._z=l*d*m+u*h*p,this._w=l*d*p-u*h*m;break;case"YXZ":this._x=u*d*p+l*h*m,this._y=l*h*p-u*d*m,this._z=l*d*m-u*h*p,this._w=l*d*p+u*h*m;break;case"ZXY":this._x=u*d*p-l*h*m,this._y=l*h*p+u*d*m,this._z=l*d*m+u*h*p,this._w=l*d*p-u*h*m;break;case"ZYX":this._x=u*d*p-l*h*m,this._y=l*h*p+u*d*m,this._z=l*d*m-u*h*p,this._w=l*d*p+u*h*m;break;case"YZX":this._x=u*d*p+l*h*m,this._y=l*h*p+u*d*m,this._z=l*d*m-u*h*p,this._w=l*d*p-u*h*m;break;case"XZY":this._x=u*d*p-l*h*m,this._y=l*h*p-u*d*m,this._z=l*d*m+u*h*p,this._w=l*d*p+u*h*m;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],p=t[10],u=n+a+p;if(u>0){let h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(n>a&&n>p){let h=2*Math.sqrt(1+n-a-p);this._w=(d-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>p){let h=2*Math.sqrt(1+a-n-p);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+d)/h}else{let h=2*Math.sqrt(1+p-n-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-r*a,this._w=o*d-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bl=class Bl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),d=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+c*l+o*p-a*d,this.y=n+c*d+a*l-s*p,this.z=r+c*p+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bl.prototype.isVector3=!0;var B=Bl,Tc=new B,sh=new ht,Ol=class Ol{constructor(e,t,n,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],p=n[7],u=n[2],h=n[5],m=n[8],M=r[0],x=r[3],f=r[6],E=r[1],R=r[4],w=r[7],S=r[2],T=r[5],U=r[8];return s[0]=o*M+a*E+c*S,s[3]=o*x+a*R+c*T,s[6]=o*f+a*w+c*U,s[1]=l*M+d*E+p*S,s[4]=l*x+d*R+p*T,s[7]=l*f+d*w+p*U,s[2]=u*M+h*E+m*S,s[5]=u*x+h*R+m*T,s[8]=u*f+h*w+m*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*s*d+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],p=d*o-a*l,u=a*c-d*s,h=l*s-o*c,m=t*p+n*u+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return e[0]=p*M,e[1]=(r*l-d*n)*M,e[2]=(a*n-r*o)*M,e[3]=u*M,e[4]=(d*t-r*c)*M,e[5]=(r*s-a*t)*M,e[6]=h*M,e[7]=(n*c-l*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ac.makeScale(e,t)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ac.makeRotation(-e)),this}translate(e,t){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ol.prototype.isMatrix3=!0;var _t=Ol,Ac=new _t,oh=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){let i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Vt&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(r.r=kr(r.r),r.g=kr(r.g),r.b=kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bi?Rs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:e,whitePoint:n,transfer:Rs,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:n,transfer:Vt,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}var Nt=Jd();function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Tr,Zo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=Cs("canvas")),Tr.width=e.width,Tr.height=e.height;let r=Tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$d=0,qr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rc(r[o].image)):s.push(Rc(r[o]))}else s=Rc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Rc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}var Kd=0,Cc=new B,Fn=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,r=pi,s=gn,o=nr,a=Qn,c=kn,l=i.DEFAULT_ANISOTROPY,d=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=os(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=vl;Fn.DEFAULT_ANISOTROPY=1;var zl=class zl{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],d=c[4],p=c[8],u=c[1],h=c[5],m=c[9],M=c[2],x=c[6],f=c[10];if(Math.abs(d-u)<.01&&Math.abs(p-M)<.01&&Math.abs(m-x)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+M)<.1&&Math.abs(m+x)<.1&&Math.abs(l+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,w=(h+1)/2,S=(f+1)/2,T=(d+u)/4,U=(p+M)/4,_=(m+x)/4;return R>w&&R>S?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=T/n,s=U/n):w>S?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=T/r,s=_/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=U/s,r=_/s),this.set(n,r,s,t),this}let E=Math.sqrt((x-m)*(x-m)+(p-M)*(p-M)+(u-d)*(u-d));return Math.abs(E)<.001&&(E=1),this.x=(x-m)/E,this.y=(p-M)/E,this.z=(u-d)/E,this.w=Math.acos((l+h+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zl.prototype.isVector4=!0;var Wt=zl,Jo=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Fn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new qr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ps=class extends Fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends Fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sa=class Sa{constructor(e,t,n,r,s,o,a,c,l,d,p,u,h,m,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,d,p,u,h,m,M,x)}set(e,t,n,r,s,o,a,c,l,d,p,u,h,m,M,x){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=m,f[11]=M,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let u=o*d,h=o*p,m=a*d,M=a*p;t[0]=c*d,t[4]=-c*p,t[8]=l,t[1]=h+m*l,t[5]=u-M*l,t[9]=-a*c,t[2]=M-u*l,t[6]=m+h*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*d,h=c*p,m=l*d,M=l*p;t[0]=u+M*a,t[4]=m*a-h,t[8]=o*l,t[1]=o*p,t[5]=o*d,t[9]=-a,t[2]=h*a-m,t[6]=M+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*d,h=c*p,m=l*d,M=l*p;t[0]=u-M*a,t[4]=-o*p,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*d,t[9]=M-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*d,h=o*p,m=a*d,M=a*p;t[0]=c*d,t[4]=m*l-h,t[8]=u*l+M,t[1]=c*p,t[5]=M*l+u,t[9]=h*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,h=o*l,m=a*c,M=a*l;t[0]=c*d,t[4]=M-u*p,t[8]=m*p+h,t[1]=p,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=h*p+m,t[10]=u-M*p}else if(e.order==="XZY"){let u=o*c,h=o*l,m=a*c,M=a*l;t[0]=c*d,t[4]=-p,t[8]=l*d,t[1]=u*p+M,t[5]=o*d,t[9]=h*p-m,t[2]=m*p-h,t[6]=a*d,t[10]=M*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qd,e,jd)}lookAt(e,t,n){let r=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Xi.crossVectors(n,Vn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Xi.crossVectors(n,Vn)),Xi.normalize(),fo.crossVectors(Vn,Xi),r[0]=Xi.x,r[4]=fo.x,r[8]=Vn.x,r[1]=Xi.y,r[5]=fo.y,r[9]=Vn.y,r[2]=Xi.z,r[6]=fo.z,r[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],p=n[5],u=n[9],h=n[13],m=n[2],M=n[6],x=n[10],f=n[14],E=n[3],R=n[7],w=n[11],S=n[15],T=r[0],U=r[4],_=r[8],O=r[12],W=r[1],k=r[5],V=r[9],z=r[13],A=r[2],D=r[6],J=r[10],$=r[14],he=r[3],te=r[7],re=r[11],xe=r[15];return s[0]=o*T+a*W+c*A+l*he,s[4]=o*U+a*k+c*D+l*te,s[8]=o*_+a*V+c*J+l*re,s[12]=o*O+a*z+c*$+l*xe,s[1]=d*T+p*W+u*A+h*he,s[5]=d*U+p*k+u*D+h*te,s[9]=d*_+p*V+u*J+h*re,s[13]=d*O+p*z+u*$+h*xe,s[2]=m*T+M*W+x*A+f*he,s[6]=m*U+M*k+x*D+f*te,s[10]=m*_+M*V+x*J+f*re,s[14]=m*O+M*z+x*$+f*xe,s[3]=E*T+R*W+w*A+S*he,s[7]=E*U+R*k+w*D+S*te,s[11]=E*_+R*V+w*J+S*re,s[15]=E*O+R*z+w*$+S*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],p=e[6],u=e[10],h=e[14],m=e[3],M=e[7],x=e[11],f=e[15],E=c*h-l*u,R=a*h-l*p,w=a*u-c*p,S=o*h-l*d,T=o*u-c*d,U=o*p-a*d;return t*(M*E-x*R+f*w)-n*(m*E-x*S+f*T)+r*(m*R-M*S+f*U)-s*(m*w-M*T+x*U)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-n*(s*d-a*c)+r*(s*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],p=e[9],u=e[10],h=e[11],m=e[12],M=e[13],x=e[14],f=e[15],E=t*a-n*o,R=t*c-r*o,w=t*l-s*o,S=n*c-r*a,T=n*l-s*a,U=r*l-s*c,_=d*M-p*m,O=d*x-u*m,W=d*f-h*m,k=p*x-u*M,V=p*f-h*M,z=u*f-h*x,A=E*z-R*V+w*k+S*W-T*O+U*_;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=(a*z-c*V+l*k)*D,e[1]=(r*V-n*z-s*k)*D,e[2]=(M*U-x*T+f*S)*D,e[3]=(u*T-p*U-h*S)*D,e[4]=(c*W-o*z-l*O)*D,e[5]=(t*z-r*W+s*O)*D,e[6]=(x*w-m*U-f*R)*D,e[7]=(d*U-u*w+h*R)*D,e[8]=(o*V-a*W+l*_)*D,e[9]=(n*W-t*V-s*_)*D,e[10]=(m*T-M*w+f*E)*D,e[11]=(p*w-d*T-h*E)*D,e[12]=(a*O-o*k-c*_)*D,e[13]=(t*k-n*O+r*_)*D,e[14]=(M*R-m*S-x*E)*D,e[15]=(d*S-p*R+u*E)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+n,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,p=a+a,u=s*l,h=s*d,m=s*p,M=o*d,x=o*p,f=a*p,E=c*l,R=c*d,w=c*p,S=n.x,T=n.y,U=n.z;return r[0]=(1-(M+f))*S,r[1]=(h+w)*S,r[2]=(m-R)*S,r[3]=0,r[4]=(h-w)*T,r[5]=(1-(u+f))*T,r[6]=(x+E)*T,r[7]=0,r[8]=(m+R)*U,r[9]=(x-E)*U,r[10]=(1-(u+M))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Ar.set(r[0],r[1],r[2]).length(),a=Ar.set(r[4],r[5],r[6]).length(),c=Ar.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ni.copy(this);let l=1/o,d=1/a,p=1/c;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=d,ni.elements[5]*=d,ni.elements[6]*=d,ni.elements[8]*=p,ni.elements[9]*=p,ni.elements[10]*=p,t.setFromRotationMatrix(ni),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,r,s,o,a=si,c=!1){let l=this.elements,d=2*s/(t-e),p=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),m,M;if(c)m=s/(o-s),M=o*s/(o-s);else if(a===si)m=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Wr)m=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=si,c=!1){let l=this.elements,d=2/(t-e),p=2/(n-r),u=-(t+e)/(t-e),h=-(n+r)/(n-r),m,M;if(c)m=1/(o-s),M=o/(o-s);else if(a===si)m=-2/(o-s),M=-(o+s)/(o-s);else if(a===Wr)m=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Sa.prototype.isMatrix4=!0;var it=Sa,Ar=new B,ni=new it,Qd=new B(0,0,0),jd=new B(1,1,1),Xi=new B,fo=new B,Vn=new B,ch=new it,lh=new ht,tn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],p=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ef=0,hh=new B,Rr=new ht,Pi=new it,po=new B,ms=new B,tf=new B,nf=new ht,uh=new B(1,0,0),dh=new B(0,1,0),fh=new B(0,0,1),ph={type:"added"},rf={type:"removed"},Cr={type:"childadded",child:null},Pc={type:"childremoved",child:null},pn=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new tn,n=new ht,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new _t}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(dh,e)}rotateZ(e){return this.rotateOnAxis(fh,e)}translateOnAxis(e,t){return hh.copy(e).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(dh,e)}translateZ(e){return this.translateOnAxis(fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?po.copy(e):po.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ms,po,this.up):Pi.lookAt(po,ms,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(Pi),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ph),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rf),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ph),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),p=o(e.shapes),u=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new B(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sf={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let M of e.hand.values()){let x=t.getJointPose(M,n),f=this._getHandJoint(l,M);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}let d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,m=.005;l.inputState.pinching&&u>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sf)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Ic(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Nt.workingColorSpace){if(e=Cl(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ic(o,s,e+1/3),this.g=Ic(o,s,e),this.b=Ic(o,s,e-1/3)}return Nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){let n=Eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Nt.workingToColorSpace(In.copy(this),e),Math.round(At(In.r*255,0,255))*65536+Math.round(At(In.g*255,0,255))*256+Math.round(At(In.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(In.copy(this),t);let n=In.r,r=In.g,s=In.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=d<=.5?p/(o+a):p/(2-o-a),o){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Sn){Nt.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,r=In.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(mo);let n=Ss(qi.h,mo.h,t),r=Ss(qi.s,mo.s,t),s=Ss(qi.l,mo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new ke;ke.NAMES=Eu;var Is=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var dr=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new B,Ii=new B,Lc=new B,Li=new B,Pr=new B,Ir=new B,mh=new B,Nc=new B,Dc=new B,Uc=new B,Fc=new Wt,Bc=new Wt,Oc=new Wt,$i=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ii.subVectors(e,t),r.cross(ii);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ii.subVectors(r,t),Ii.subVectors(n,t),Lc.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Ii),c=ii.dot(Lc),l=Ii.dot(Ii),d=Ii.dot(Lc),p=o*l-a*a;if(p===0)return s.set(0,0,0),null;let u=1/p,h=(l*c-a*d)*u,m=(o*d-a*c)*u;return s.set(1-h-m,m,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Li.x),c.addScaledVector(o,Li.y),c.addScaledVector(a,Li.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Fc.setScalar(0),Bc.setScalar(0),Oc.setScalar(0),Fc.fromBufferAttribute(e,t),Bc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fc,s.x),o.addScaledVector(Bc,s.y),o.addScaledVector(Oc,s.z),o}static isFrontFacing(e,t,n,r){return ii.subVectors(n,t),Ii.subVectors(e,t),ii.cross(Ii).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ii.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Pr.subVectors(r,n),Ir.subVectors(s,n),Nc.subVectors(e,n);let c=Pr.dot(Nc),l=Ir.dot(Nc);if(c<=0&&l<=0)return t.copy(n);Dc.subVectors(e,r);let d=Pr.dot(Dc),p=Ir.dot(Dc);if(d>=0&&p<=d)return t.copy(r);let u=c*p-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Pr,o);Uc.subVectors(e,s);let h=Pr.dot(Uc),m=Ir.dot(Uc);if(m>=0&&h<=m)return t.copy(s);let M=h*l-c*m;if(M<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Ir,a);let x=d*m-h*p;if(x<=0&&p-d>=0&&h-m>=0)return mh.subVectors(s,r),a=(p-d)/(p-d+(h-m)),t.copy(r).addScaledVector(mh,a);let f=1/(x+M+u);return o=M*f,a=u*f,t.copy(n).addScaledVector(Pr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),xo.subVectors(this.max,gs),Lr.subVectors(e.a,gs),Nr.subVectors(e.b,gs),Dr.subVectors(e.c,gs),Yi.subVectors(Nr,Lr),Zi.subVectors(Dr,Nr),or.subVectors(Lr,Dr);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-or.z,or.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,or.z,0,-or.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-or.y,or.x,0];return!zc(t,Lr,Nr,Dr,xo)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,Lr,Nr,Dr,xo))?!1:(yo.crossVectors(Yi,Zi),t=[yo.x,yo.y,yo.z],zc(t,Lr,Nr,Dr,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ni=[new B,new B,new B,new B,new B,new B,new B,new B],ri=new B,go=new xi,Lr=new B,Nr=new B,Dr=new B,Yi=new B,Zi=new B,or=new B,gs=new B,xo=new B,yo=new B,ar=new B;function zc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ar.fromArray(i,s);let a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),c=e.dot(ar),l=t.dot(ar),d=n.dot(ar);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var Ui=of();function of(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,d=0;for(;!(l&8388608);)l<<=1,d-=8388608;l&=-8388609,d+=947912704,s[c]=l|d}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function af(i){Math.abs(i)>65504&&lt("DataUtils.toHalfFloat(): Value out of range."),i=At(i,-65504,65504),Ui.floatView[0]=i;let e=Ui.uint32View[0],t=e>>23&511;return Ui.baseTable[t]+((e&8388607)>>Ui.shiftTable[t])}function cf(i){let e=i>>10;return Ui.uint32View[0]=Ui.mantissaTable[Ui.offsetTable[e]+(i&1023)]+Ui.exponentTable[e],Ui.floatView[0]}var Ls=class{static toHalfFloat(e){return af(e)}static fromHalfFloat(e){return cf(e)}},dn=new B,vo=new Ze,lf=0,Gt=class extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xu,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ns=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ds=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},hf=new xi,xs=new B,Hc=new B,yi=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);let t=xs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(Hc)),this.expandByPoint(xs.copy(e.center).sub(Hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},uf=0,Jn=new it,kc=new pn,Ur=new B,Wn=new xi,ys=new xi,En=new B,Lt=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?Ds:Ns)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new _t().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(Wn.min,ys.min),Wn.expandByPoint(En),En.addVectors(Wn.max,ys.max),Wn.expandByPoint(En)):(Wn.expandByPoint(ys.min),Wn.expandByPoint(ys.max))}Wn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)En.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(En));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)En.fromBufferAttribute(a,l),c&&(Ur.fromBufferAttribute(e,l),En.add(Ur)),r=Math.max(r,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new B,c[_]=new B;let l=new B,d=new B,p=new B,u=new Ze,h=new Ze,m=new Ze,M=new B,x=new B;function f(_,O,W){l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,O),p.fromBufferAttribute(n,W),u.fromBufferAttribute(s,_),h.fromBufferAttribute(s,O),m.fromBufferAttribute(s,W),d.sub(l),p.sub(l),h.sub(u),m.sub(u);let k=1/(h.x*m.y-m.x*h.y);isFinite(k)&&(M.copy(d).multiplyScalar(m.y).addScaledVector(p,-h.y).multiplyScalar(k),x.copy(p).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(k),a[_].add(M),a[O].add(M),a[W].add(M),c[_].add(x),c[O].add(x),c[W].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let _=0,O=E.length;_<O;++_){let W=E[_],k=W.start,V=W.count;for(let z=k,A=k+V;z<A;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let R=new B,w=new B,S=new B,T=new B;function U(_){S.fromBufferAttribute(r,_),T.copy(S);let O=a[_];R.copy(O),R.sub(S.multiplyScalar(S.dot(O))).normalize(),w.crossVectors(T,O);let k=w.dot(c[_])<0?-1:1;o.setXYZW(_,R.x,R.y,R.z,k)}for(let _=0,O=E.length;_<O;++_){let W=E[_],k=W.start,V=W.count;for(let z=k,A=k+V;z<A;z+=3)U(e.getX(z+0)),U(e.getX(z+1)),U(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);let r=new B,s=new B,o=new B,a=new B,c=new B,l=new B,d=new B,p=new B;if(e)for(let u=0,h=e.count;u<h;u+=3){let m=e.getX(u+0),M=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,x),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,x),a.add(d),c.add(d),l.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,p=a.normalized,u=new l.constructor(c.length*d),h=0,m=0;for(let M=0,x=c.length;M<x;M++){a.isInterleavedBufferAttribute?h=c[M]*a.data.stride+a.offset:h=c[M]*d;for(let f=0;f<d;f++)u[m++]=l[h++]}return new Gt(u,d,p)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let d=0,p=l.length;d<p;d++){let u=l[d],h=e(u,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let p=0,u=l.length;p<u;p++){let h=l[p];d.push(h.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let d=r[l];this.setAttribute(l,d.clone(t))}let s=e.morphAttributes;for(let l in s){let d=[],p=s[l];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gc=new B,df=new B,ff=new _t,Xn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gc.subVectors(n,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Gc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ff.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pf=0,oi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=os(),this.name="",this.type="Material",this.blending=ns,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Di=new B,Vc=new B,_o=new B,Mo=new B,fr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vc.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),Mo.copy(this.origin).sub(Vc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(_o),a=Mo.dot(this.direction),c=-Mo.dot(_o),l=Mo.lengthSq(),d=Math.abs(1-o*o),p,u,h,m;if(d>0)if(p=o*c-a,u=o*a-c,m=s*d,p>=0)if(u>=-m)if(u<=m){let M=1/d;p*=M,u*=M,h=p*(p+o*u+2*a)+u*(o*p+u+2*c)+l}else u=s,p=Math.max(0,-(o*u+a)),h=-p*p+u*(u+2*c)+l;else u=-s,p=Math.max(0,-(o*u+a)),h=-p*p+u*(u+2*c)+l;else u<=-m?(p=Math.max(0,-(-o*s+a)),u=p>0?-s:Math.min(Math.max(-s,-c),s),h=-p*p+u*(u+2*c)+l):u<=m?(p=0,u=Math.min(Math.max(-s,-c),s),h=u*(u+2*c)+l):(p=Math.max(0,-(o*s+a)),u=p>0?s:Math.min(Math.max(-s,-c),s),h=-p*p+u*(u+2*c)+l);else u=o>0?-s:s,p=Math.max(0,-(o*u+a)),h=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Vc).addScaledVector(_o,u),h}intersectSphere(e,t){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),r=Di.dot(Di)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,r,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,p=e.x-o.x,u=e.y-o.y,h=e.z-o.z,m=t.x-o.x,M=t.y-o.y,x=t.z-o.z,f=n.x-o.x,E=n.y-o.y,R=n.z-o.z,w=Math.abs(c),S=Math.abs(l),T=Math.abs(d),U,_,O,W,k,V,z,A,D,J,$,he;if(w>=S&&w>=T?(O=c,V=p,D=m,he=f,c>=0?(U=l,_=d,W=u,k=h,z=M,A=x,J=E,$=R):(U=d,_=l,W=h,k=u,z=x,A=M,J=R,$=E)):S>=T?(O=l,V=u,D=M,he=E,l>=0?(U=d,_=c,W=h,k=p,z=x,A=m,J=R,$=f):(U=c,_=d,W=p,k=h,z=m,A=x,J=f,$=R)):(O=d,V=h,D=x,he=R,d>=0?(U=c,_=l,W=p,k=u,z=m,A=M,J=f,$=E):(U=l,_=c,W=u,k=p,z=M,A=m,J=E,$=f)),O===0)return null;let te=U/O,re=_/O,xe=1/O,Be=W-te*V,Ae=k-re*V,Je=z-te*D,Ee=A-re*D,qe=J-te*he,ue=$-re*he,le=qe*Ee-ue*Je,Te=Be*ue-Ae*qe,et=Je*Ae-Ee*Be;if(r){if(le<0||Te<0||et<0)return null}else if((le<0||Te<0||et<0)&&(le>0||Te>0||et>0))return null;let ze=le+Te+et;if(ze===0)return null;let ct=xe*(le*V+Te*D+et*he);return(ze>0?ct<0:ct>0)?null:this.at(ct/ze,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gh=new it,cr=new fr,Eo=new yi,xh=new B,So=new B,wo=new B,bo=new B,Wc=new B,To=new B,yh=new B,Ao=new B,je=class extends pn{constructor(e=new Lt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){To.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let d=a[c],p=s[c];d!==0&&(Wc.fromBufferAttribute(p,e),o?To.addScaledVector(Wc,d):To.addScaledVector(Wc.sub(t),d))}t.add(To)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Eo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Eo,xh)===null||cr.origin.distanceToSquared(xh)>(e.far-e.near)**2))&&(gh.copy(s).invert(),cr.copy(e.ray).applyMatrix4(gh),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,u=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){let x=u[m],f=o[x.materialIndex],E=Math.max(x.start,h.start),R=Math.min(a.count,Math.min(x.start+x.count,h.start+h.count));for(let w=E,S=R;w<S;w+=3){let T=a.getX(w),U=a.getX(w+1),_=a.getX(w+2);r=Ro(this,f,e,n,l,d,p,T,U,_),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let m=Math.max(0,h.start),M=Math.min(a.count,h.start+h.count);for(let x=m,f=M;x<f;x+=3){let E=a.getX(x),R=a.getX(x+1),w=a.getX(x+2);r=Ro(this,o,e,n,l,d,p,E,R,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){let x=u[m],f=o[x.materialIndex],E=Math.max(x.start,h.start),R=Math.min(c.count,Math.min(x.start+x.count,h.start+h.count));for(let w=E,S=R;w<S;w+=3){let T=w,U=w+1,_=w+2;r=Ro(this,f,e,n,l,d,p,T,U,_),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let m=Math.max(0,h.start),M=Math.min(c.count,h.start+h.count);for(let x=m,f=M;x<f;x+=3){let E=x,R=x+1,w=x+2;r=Ro(this,o,e,n,l,d,p,E,R,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function mf(i,e,t,n,r,s,o,a){let c;if(e.side===xn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Si,a),c===null)return null;Ao.copy(a),Ao.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ao);return l<t.near||l>t.far?null:{distance:l,point:Ao.clone(),object:i}}function Ro(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,So),i.getVertexPosition(c,wo),i.getVertexPosition(l,bo);let d=mf(i,e,t,n,So,wo,bo,yh);if(d){let p=new B;$i.getBarycoord(yh,So,wo,bo,p),r&&(d.uv=$i.getInterpolatedAttribute(r,a,c,l,p,new Ze)),s&&(d.uv1=$i.getInterpolatedAttribute(s,a,c,l,p,new Ze)),o&&(d.normal=$i.getInterpolatedAttribute(o,a,c,l,p,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new B,materialIndex:0};$i.getNormal(So,wo,bo,u.normal),d.face=u,d.barycoord=p}return d}var pr=class extends Fn{constructor(e=null,t=1,n=1,r,s,o,a,c,l=bn,d=bn,p,u){super(null,o,a,c,l,d,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class extends Gt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fr=new it,vh=new it,Co=[],_h=new xi,gf=new it,vs=new je,_s=new yi,Rn=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,gf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),_h.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(_h)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),_s.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(_s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),e.ray.intersectsSphere(_s)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Fr),vh.multiplyMatrices(n,Fr),vs.matrixWorld=vh,vs.raycast(e,Co);for(let o=0,a=Co.length;o<a;o++){let c=Co[o];c.instanceId=s,c.object=this,t.push(c)}Co.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(r*this.count),r,this.count,ss,Kn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;return s[c]=a,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lr=new yi,xf=new Ze(.5,.5),Po=new B,Jr=class{constructor(e=new Xn,t=new Xn,n=new Xn,r=new Xn,s=new Xn,o=new Xn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],p=s[5],u=s[6],h=s[7],m=s[8],M=s[9],x=s[10],f=s[11],E=s[12],R=s[13],w=s[14],S=s[15];if(r[0].setComponents(l-o,h-d,f-m,S-E).normalize(),r[1].setComponents(l+o,h+d,f+m,S+E).normalize(),r[2].setComponents(l+a,h+p,f+M,S+R).normalize(),r[3].setComponents(l-a,h-p,f-M,S-R).normalize(),n)r[4].setComponents(c,u,x,w).normalize(),r[5].setComponents(l-c,h-u,f-x,S-w).normalize();else if(r[4].setComponents(l-c,h-u,f-x,S-w).normalize(),t===si)r[5].setComponents(l+c,h+u,f+x,S+w).normalize();else if(t===Wr)r[5].setComponents(c,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);let t=xf.distanceTo(e.center);return lr.radius=.7071067811865476+t,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $r=class extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ko=new B,Qo=new B,Mh=new it,Ms=new fr,Io=new yi,Xc=new B,Eh=new B,Kr=class extends pn{constructor(e=new Lt,t=new $r){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ko.fromBufferAttribute(t,r-1),Qo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ko.distanceTo(Qo);e.setAttribute("lineDistance",new ut(n,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;Mh.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Mh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let M=h,x=m-1;M<x;M+=l){let f=d.getX(M),E=d.getX(M+1),R=Lo(this,e,Ms,c,f,E,M);R&&t.push(R)}if(this.isLineLoop){let M=d.getX(m-1),x=d.getX(h),f=Lo(this,e,Ms,c,M,x,m-1);f&&t.push(f)}}else{let h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let M=h,x=m-1;M<x;M+=l){let f=Lo(this,e,Ms,c,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){let M=Lo(this,e,Ms,c,m-1,h,m-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Lo(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Ko.fromBufferAttribute(a,r),Qo.fromBufferAttribute(a,s),t.distanceSqToSegment(Ko,Qo,Xc,Eh)>n)return;Xc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Xc);if(!(l<e.near||l>e.far))return{distance:l,point:Eh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Sh=new B,wh=new B,Us=class extends Kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Sh.fromBufferAttribute(t,r),wh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Sh.distanceTo(wh);e.setAttribute("lineDistance",new ut(n,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jo=class extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bh=new it,tl=new fr,No=new yi,Do=new B,$n=class extends pn{constructor(e=new Lt,t=new jo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),No.radius+=s,e.ray.intersectsSphere(No)===!1)return;bh.copy(r).invert(),tl.copy(e.ray).applyMatrix4(bh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,p=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let m=u,M=h;m<M;m++){let x=l.getX(m);Do.fromBufferAttribute(p,x),Th(Do,x,c,r,e,t,this)}}else{let u=Math.max(0,o.start),h=Math.min(p.count,o.start+o.count);for(let m=u,M=h;m<M;m++)Do.fromBufferAttribute(p,m),Th(Do,m,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Th(i,e,t,n,r,s,o){let a=tl.distanceSqToPoint(i);if(a<t){let c=new B;tl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fs=class extends Fn{constructor(e=[],t=tr,n,r,s,o,a,c,l,d){super(e,t,n,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zn=class extends Fn{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends Fn{constructor(e,t,n=ci,r,s,o,a=bn,c=bn,l,d=mi,p=1){if(d!==mi&&d!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,r,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ea=class extends _i{constructor(e,t=ci,n=tr,r,s,o=bn,a=bn,c,l=mi){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bs=class extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Le=class i extends Lt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],d=[],p=[],u=0,h=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(p,2));function m(M,x,f,E,R,w,S,T,U,_,O){let W=w/U,k=S/_,V=w/2,z=S/2,A=T/2,D=U+1,J=_+1,$=0,he=0,te=new B;for(let re=0;re<J;re++){let xe=re*k-z;for(let Be=0;Be<D;Be++){let Ae=Be*W-V;te[M]=Ae*E,te[x]=xe*R,te[f]=A,l.push(te.x,te.y,te.z),te[M]=0,te[x]=0,te[f]=T>0?1:-1,d.push(te.x,te.y,te.z),p.push(Be/U),p.push(1-re/_),$+=1}}for(let re=0;re<_;re++)for(let xe=0;xe<U;xe++){let Be=u+xe+D*re,Ae=u+xe+D*(re+1),Je=u+(xe+1)+D*(re+1),Ee=u+(xe+1)+D*re;c.push(Be,Ae,Ee),c.push(Ae,Je,Ee),he+=6}a.addGroup(h,he,O),h+=he,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var mr=class i extends Lt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],c=[],l=new B,d=new Ze;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let h=n+p/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fe=class i extends Lt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let d=[],p=[],u=[],h=[],m=0,M=[],x=n/2,f=0;E(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function E(){let w=new B,S=new B,T=0,U=(t-e)/n;for(let _=0;_<=s;_++){let O=[],W=_/s,k=W*(t-e)+e;for(let V=0;V<=r;V++){let z=V/r,A=z*c+a,D=Math.sin(A),J=Math.cos(A);S.x=k*D,S.y=-W*n+x,S.z=k*J,p.push(S.x,S.y,S.z),w.set(D,U,J).normalize(),u.push(w.x,w.y,w.z),h.push(z,1-W),O.push(m++)}M.push(O)}for(let _=0;_<r;_++)for(let O=0;O<s;O++){let W=M[O][_],k=M[O+1][_],V=M[O+1][_+1],z=M[O][_+1];(e>0||O!==0)&&(d.push(W,k,z),T+=3),(t>0||O!==s-1)&&(d.push(k,V,z),T+=3)}l.addGroup(f,T,0),f+=T}function R(w){let S=m,T=new Ze,U=new B,_=0,O=w===!0?e:t,W=w===!0?1:-1;for(let V=1;V<=r;V++)p.push(0,x*W,0),u.push(0,W,0),h.push(.5,.5),m++;let k=m;for(let V=0;V<=r;V++){let A=V/r*c+a,D=Math.cos(A),J=Math.sin(A);U.x=O*J,U.y=x*W,U.z=O*D,p.push(U.x,U.y,U.z),u.push(0,W,0),T.x=D*.5+.5,T.y=J*.5*W+.5,h.push(T.x,T.y),m++}for(let V=0;V<r;V++){let z=S+V,A=k+V;w===!0?d.push(A,A+1,z):d.push(A+1,A,z),_+=3}l.addGroup(f,_,w===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qt=class i extends Fe{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class i extends Lt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),d(),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(s.slice(),3)),this.setAttribute("uv",new ut(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let R=new B,w=new B,S=new B;for(let T=0;T<t.length;T+=3)h(t[T+0],R),h(t[T+1],w),h(t[T+2],S),c(R,w,S,E)}function c(E,R,w,S){let T=S+1,U=[];for(let _=0;_<=T;_++){U[_]=[];let O=E.clone().lerp(w,_/T),W=R.clone().lerp(w,_/T),k=T-_;for(let V=0;V<=k;V++)V===0&&_===T?U[_][V]=O:U[_][V]=O.clone().lerp(W,V/k)}for(let _=0;_<T;_++)for(let O=0;O<2*(T-_)-1;O++){let W=Math.floor(O/2);O%2===0?(u(U[_][W+1]),u(U[_+1][W]),u(U[_][W])):(u(U[_][W+1]),u(U[_+1][W+1]),u(U[_+1][W]))}}function l(E){let R=new B;for(let w=0;w<s.length;w+=3)R.x=s[w+0],R.y=s[w+1],R.z=s[w+2],R.normalize().multiplyScalar(E),s[w+0]=R.x,s[w+1]=R.y,s[w+2]=R.z}function d(){let E=new B;for(let R=0;R<s.length;R+=3){E.x=s[R+0],E.y=s[R+1],E.z=s[R+2];let w=x(E)/2/Math.PI+.5,S=f(E)/Math.PI+.5;o.push(w,1-S)}m(),p()}function p(){for(let E=0;E<o.length;E+=6){let R=o[E+0],w=o[E+2],S=o[E+4],T=Math.max(R,w,S),U=Math.min(R,w,S);T>.9&&U<.1&&(R<.2&&(o[E+0]+=1),w<.2&&(o[E+2]+=1),S<.2&&(o[E+4]+=1))}}function u(E){s.push(E.x,E.y,E.z)}function h(E,R){let w=E*3;R.x=e[w+0],R.y=e[w+1],R.z=e[w+2]}function m(){let E=new B,R=new B,w=new B,S=new B,T=new Ze,U=new Ze,_=new Ze;for(let O=0,W=0;O<s.length;O+=9,W+=6){E.set(s[O+0],s[O+1],s[O+2]),R.set(s[O+3],s[O+4],s[O+5]),w.set(s[O+6],s[O+7],s[O+8]),T.set(o[W+0],o[W+1]),U.set(o[W+2],o[W+3]),_.set(o[W+4],o[W+5]),S.copy(E).add(R).add(w).divideScalar(3);let k=x(S);M(T,W+0,E,k),M(U,W+2,R,k),M(_,W+4,w,k)}}function M(E,R,w,S){S<0&&E.x===1&&(o[R]=E.x-1),w.x===0&&w.z===0&&(o[R]=S/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let d=n[r],u=n[r+1]-d,h=(o-d)/u;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Ze:new B);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],s=[],o=[],a=new B,c=new it;for(let h=0;h<=e;h++){let m=h/e;r[h]=this.getTangentAt(m,new B)}s[0]=new B,o[0]=new B;let l=Number.MAX_VALUE,d=Math.abs(r[0].x),p=Math.abs(r[0].y),u=Math.abs(r[0].z);d<=l&&(l=d,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(At(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(c.makeRotationAxis(a,m))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(At(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],h*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Os=class extends Hn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ze){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=c-this.aX,h=l-this.aY;c=u*d-h*p+this.aX,l=u*p+h*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},na=class extends Os{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Il(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,p){let u=(o-s)/l-(a-s)/(l+d)+(a-o)/d,h=(a-o)/d-(c-o)/(d+p)+(c-a)/p;u*=d,h*=d,r(o,a,u,h)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Ah=new B,Rh=new B,qc=new Il,Yc=new Il,Zc=new Il,Qr=class extends Hn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=r[(a-1)%s]:(Rh.subVectors(r[0],r[1]).add(r[0]),l=Rh);let p=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Ah.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Ah),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(p),h),M=Math.pow(p.distanceToSquared(u),h),x=Math.pow(u.distanceToSquared(d),h);M<1e-4&&(M=1),m<1e-4&&(m=M),x<1e-4&&(x=M),qc.initNonuniformCatmullRom(l.x,p.x,u.x,d.x,m,M,x),Yc.initNonuniformCatmullRom(l.y,p.y,u.y,d.y,m,M,x),Zc.initNonuniformCatmullRom(l.z,p.z,u.z,d.z,m,M,x)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(l.x,p.x,u.x,d.x,this.tension),Yc.initCatmullRom(l.y,p.y,u.y,d.y,this.tension),Zc.initCatmullRom(l.z,p.z,u.z,d.z,this.tension));return n.set(qc.calc(c),Yc.calc(c),Zc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ch(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function yf(i,e){let t=1-i;return t*t*e}function vf(i,e){return 2*(1-i)*i*e}function _f(i,e){return i*i*e}function ws(i,e,t,n){return yf(i,e)+vf(i,t)+_f(i,n)}function Mf(i,e){let t=1-i;return t*t*t*e}function Ef(i,e){let t=1-i;return 3*t*t*i*e}function Sf(i,e){return 3*(1-i)*i*i*e}function wf(i,e){return i*i*i*e}function bs(i,e,t,n,r){return Mf(i,e)+Ef(i,t)+Sf(i,n)+wf(i,r)}var ia=class extends Hn{constructor(e=new Ze,t=new Ze,n=new Ze,r=new Ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ze){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(bs(e,r.x,s.x,o.x,a.x),bs(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jr=class extends Hn{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(bs(e,r.x,s.x,o.x,a.x),bs(e,r.y,s.y,o.y,a.y),bs(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends Hn{constructor(e=new Ze,t=new Ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ze){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Hn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Hn{constructor(e=new Ze,t=new Ze,n=new Ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ze){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ws(e,r.x,s.x,o.x),ws(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gr=class extends Hn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ws(e,r.x,s.x,o.x),ws(e,r.y,s.y,o.y),ws(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ze){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],d=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(Ch(a,c.x,l.x,d.x,p.x),Ch(a,c.y,l.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Ze().fromArray(r))}return this}},bf=Object.freeze({__proto__:null,ArcCurve:na,CatmullRomCurve3:Qr,CubicBezierCurve:ia,CubicBezierCurve3:jr,EllipseCurve:Os,LineCurve:ra,LineCurve3:sa,QuadraticBezierCurve:oa,QuadraticBezierCurve3:gr,SplineCurve:aa});var xr=class i extends ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},zs=class i extends Lt{constructor(e=[new Ze(0,-.5),new Ze(.5,0),new Ze(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=At(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],d=1/t,p=new B,u=new Ze,h=new B,m=new B,M=new B,x=0,f=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,h.x=f*1,h.y=-x,h.z=f*0,M.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:c.push(M.x,M.y,M.z);break;default:x=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,h.x=f*1,h.y=-x,h.z=f*0,m.copy(h),h.x+=M.x,h.y+=M.y,h.z+=M.z,h.normalize(),c.push(h.x,h.y,h.z),M.copy(m)}for(let E=0;E<=t;E++){let R=n+E*d*r,w=Math.sin(R),S=Math.cos(R);for(let T=0;T<=e.length-1;T++){p.x=e[T].x*w,p.y=e[T].y,p.z=e[T].x*S,o.push(p.x,p.y,p.z),u.x=E/t,u.y=T/(e.length-1),a.push(u.x,u.y);let U=c[3*T+0]*w,_=c[3*T+1],O=c[3*T+0]*S;l.push(U,_,O)}}for(let E=0;E<t;E++)for(let R=0;R<e.length-1;R++){let w=R+E*e.length,S=w,T=w+e.length,U=w+e.length+1,_=w+1;s.push(S,T,_),s.push(U,_,T)}this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var xt=class i extends Lt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,d=c+1,p=e/a,u=t/c,h=[],m=[],M=[],x=[];for(let f=0;f<d;f++){let E=f*u-o;for(let R=0;R<l;R++){let w=R*p-s;m.push(w,-E,0),M.push(0,0,1),x.push(R/a),x.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){let R=E+l*f,w=E+l*(f+1),S=E+1+l*(f+1),T=E+1+l*f;h.push(R,w,T),h.push(w,S,T)}this.setIndex(h),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(M,3)),this.setAttribute("uv",new ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Hs=class i extends Lt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],d=[],p=e,u=(t-e)/r,h=new B,m=new Ze;for(let M=0;M<=r;M++){for(let x=0;x<=n;x++){let f=s+x/n*o;h.x=p*Math.cos(f),h.y=p*Math.sin(f),c.push(h.x,h.y,h.z),l.push(0,0,1),m.x=(h.x/t+1)/2,m.y=(h.y/t+1)/2,d.push(m.x,m.y)}p+=u}for(let M=0;M<r;M++){let x=M*(n+1);for(let f=0;f<n;f++){let E=f+x,R=E,w=E+n+1,S=E+n+2,T=E+1;a.push(R,w,T),a.push(w,S,T)}}this.setIndex(a),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Dt=class i extends Lt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],p=new B,u=new B,h=[],m=[],M=[],x=[];for(let f=0;f<=n;f++){let E=[],R=f/n,w=o+R*a,S=e*Math.cos(w),T=Math.sqrt(e*e-S*S),U=0;f===0&&o===0?U=.5/t:f===n&&c===Math.PI&&(U=-.5/t);for(let _=0;_<=t;_++){let O=_/t,W=r+O*s;p.x=-T*Math.cos(W),p.y=S,p.z=T*Math.sin(W),m.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),x.push(O+U,1-R),E.push(l++)}d.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){let R=d[f][E+1],w=d[f][E],S=d[f+1][E],T=d[f+1][E+1];(f!==0||o>0)&&h.push(R,w,T),(f!==n-1||c<Math.PI)&&h.push(w,S,T)}this.setIndex(h),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(M,3)),this.setAttribute("uv",new ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tn=class i extends Lt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),r=Math.floor(r);let c=[],l=[],d=[],p=[],u=new B,h=new B,m=new B;for(let M=0;M<=n;M++){let x=o+M/n*a;for(let f=0;f<=r;f++){let E=f/r*s;h.x=(e+t*Math.cos(x))*Math.cos(E),h.y=(e+t*Math.cos(x))*Math.sin(E),h.z=t*Math.sin(x),l.push(h.x,h.y,h.z),u.x=e*Math.cos(E),u.y=e*Math.sin(E),m.subVectors(h,u).normalize(),d.push(m.x,m.y,m.z),p.push(f/r),p.push(M/n)}}for(let M=1;M<=n;M++)for(let x=1;x<=r;x++){let f=(r+1)*M+x-1,E=(r+1)*(M-1)+x-1,R=(r+1)*(M-1)+x,w=(r+1)*M+x;c.push(f,E,w),c.push(E,R,w)}this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Mi=class i extends Lt{constructor(e=new gr(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,c=new B,l=new Ze,d=new B,p=[],u=[],h=[],m=[];M(),this.setIndex(m),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function M(){for(let R=0;R<t;R++)x(R);x(s===!1?t:0),E(),f()}function x(R){d=e.getPointAt(R/t,d);let w=o.normals[R],S=o.binormals[R];for(let T=0;T<=r;T++){let U=T/r*Math.PI*2,_=Math.sin(U),O=-Math.cos(U);c.x=O*w.x+_*S.x,c.y=O*w.y+_*S.y,c.z=O*w.z+_*S.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,p.push(a.x,a.y,a.z)}}function f(){for(let R=1;R<=t;R++)for(let w=1;w<=r;w++){let S=(r+1)*(R-1)+(w-1),T=(r+1)*R+(w-1),U=(r+1)*R+w,_=(r+1)*(R-1)+w;m.push(S,T,_),m.push(T,U,_)}}function E(){for(let R=0;R<=t;R++)for(let w=0;w<=r;w++)l.x=R/t,l.y=w/r,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new bf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Ph(r))r.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ph(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Nn(i){let e={};for(let t=0;t<i.length;t++){let n=Er(i[t]);for(let r in n)e[r]=n[r]}return e}function Ph(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ll(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}var so={clone:Er,merge:Nn},Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ut=class extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=Tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[n].value=new B().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Wt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new _t().fromArray(r.value);break;case"m4":this.uniforms[n].value=new it().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ca=class extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ks=class extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var mn=class extends oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=ba,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},la=class extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ha=class extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Br(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends Ki{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case jc:s=e,a=2*t-n;break;case el:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case jc:o=e,c=2*n-t;break;case el:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,h=this._weightNext,m=(n-t)/(r-t),M=m*m,x=M*m,f=-u*x+2*u*M-u*m,E=(1+u)*x+(-1.5-2*u)*M+(-.5+u)*m+1,R=(-1-h)*x+(1.5+h)*M+.5*m,w=h*x-h*M;for(let S=0;S!==a;++S)s[S]=f*o[d+S]+E*o[l+S]+R*o[c+S]+w*o[p+S];return s}},da=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(r-t),p=1-d;for(let u=0;u!==a;++u)s[u]=o[l+u]*p+o[c+u]*d;return s}},fa=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},pa=class extends Ki{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,p=this.outTangents;if(!d||!p){let m=(n-t)/(r-t),M=1-m;for(let x=0;x!==a;++x)s[x]=o[l+x]*M+o[c+x]*m;return s}let u=a*2,h=e-1;for(let m=0;m!==a;++m){let M=o[l+m],x=o[c+m],f=h*u+m*2,E=p[f],R=p[f+1],w=e*u+m*2,S=d[w],T=d[w+1],U=Pf(n,t,E,S,r);s[m]=Su(U,M,R,T,x)}return s}};function Su(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function Cf(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function Pf(i,e,t,n,r){let s=(i-e)/(r-e);for(let o=0;o<8;o++){let a=Su(s,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let c=Cf(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}var qn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Br(t,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Br(e.times,Array),values:Br(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Jc(e.settings)&&(n.settings={inTangents:Br(e.settings.inTangents,Array),outTangents:Br(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ts:t=this.InterpolantFactoryMethodDiscrete;break;case Yo:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break;case Kc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return lt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Jc(this.settings)&&(Ih(this.settings.inTangents,e),Ih(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(pt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){pt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){pt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Ld(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){pt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Bo,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(r)c=!0;else{let p=a*n,u=p-n,h=p+n;for(let m=0;m!==n;++m){let M=t[p+m];if(M!==t[u+m]||M!==t[h+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,u=o*n;for(let h=0;h!==n;++h)t[u+h]=t[p+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Jc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ih(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Yo;var Qi=class extends qn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ts;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends qn{constructor(e,t,n,r){super(e,t,n,r)}};ma.prototype.ValueTypeName="color";var ga=class extends qn{constructor(e,t,n,r){super(e,t,n,r)}};ga.prototype.ValueTypeName="number";var xa=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let d=l+a;l!==d;l+=4)ht.slerpFlat(s,0,o,l-a,o,l,c);return s}},Gs=class extends qn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends qn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ts;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends qn{constructor(e,t,n,r){super(e,t,n,r)}};ya.prototype.ValueTypeName="vector";var va=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return l.push(d,p),this},this.removeHandler=function(d){let p=l.indexOf(d);return p!==-1&&l.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=l.length;p<u;p+=2){let h=l[p],m=l[p+1];if(h.global&&(h.lastIndex=0),h.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wu=new va,_a=class{constructor(e){this.manager=e!==void 0?e:wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_a.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Vs=class extends yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},$c=new it,Lh=new B,Nh=new B,es=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lh),Nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix($c,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Wr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uo=new B,Fo=new ht,fi=new B,Ws=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uo,Fo,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Uo,Fo,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new B,Dh=new Ze,Uh=new Ze,wn=class extends Ws{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Dh,Uh),t.subVectors(Uh,Dh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},nl=class extends es{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ur*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xs=class extends yr{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new nl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},il=class extends es{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}},Ei=class extends yr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new il}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},er=class extends Ws{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rl=class extends es{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new rl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ys=class extends Lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Or=-90,zr=1,Ma=class extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wn(Or,zr,e,t);r.layers=this.layers,this.add(r);let s=new wn(Or,zr,e,t);s.layers=this.layers,this.add(s);let o=new wn(Or,zr,e,t);o.layers=this.layers,this.add(o);let a=new wn(Or,zr,e,t);a.layers=this.layers,this.add(a);let c=new wn(Or,zr,e,t);c.layers=this.layers,this.add(c);let l=new wn(Or,zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ea=class extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Nl="\\[\\]\\.:\\/",If=new RegExp("["+Nl+"]","g"),Dl="[^"+Nl+"]",Lf="[^"+Nl.replace("\\.","")+"]",Nf=/((?:WC+[\/:])*)/.source.replace("WC",Dl),Df=/(WCOD+)?/.source.replace("WCOD",Lf),Uf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),Ff=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),Bf=new RegExp("^"+Nf+Df+Uf+Ff+"$"),Of=["material","materials","bones","map"],sl=class{constructor(e,t,n){let r=n||Kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(If,"")}static parseTrackName(e){let t=Bf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Of.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;pt("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Kt.Composite=sl;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xx=new Float32Array(1);var Fh=new it,Zs=class{constructor(e,t,n=0,r=1/0){this.ray=new fr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fh),this}intersectObject(e,t=!0,n=[]){return ol(e,this,n,t),n.sort(Bh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ol(e[r],this,n,t);return n.sort(Bh),n}};function Bh(i,e){return i.distance-e.distance}function ol(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)ol(s[o],e,t,!0)}}var Hl=class Hl{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Hl.prototype.isMatrix2=!0;var al=Hl;function Ul(i,e,t,n){let r=zf(n);switch(t){case wl:return i*e;case ss:return i*e/r.components*r.byteLength;case La:return i*e/r.components*r.byteLength;case rr:return i*e*2/r.components*r.byteLength;case Na:return i*e*2/r.components*r.byteLength;case bl:return i*e*3/r.components*r.byteLength;case Qn:return i*e*4/r.components*r.byteLength;case Da:return i*e*4/r.components*r.byteLength;case Qs:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Oa:return Math.max(i,16)*Math.max(e,8)/4;case Ua:case Ba:return Math.max(i,8)*Math.max(e,8)/2;case za:case Ha:case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case no:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sc:case oc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cc:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case io:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zf(i){switch(i){case kn:case _l:return{byteLength:1,components:1};case is:case Ml:case Bn:return{byteLength:2,components:1};case Pa:case Ia:return{byteLength:2,components:4};case ci:case Ca:case Kn:return{byteLength:4,components:1};case El:case Sl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window!="undefined"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);function qu(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Hf(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let d=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,d);else{p.sort((h,m)=>h.start-m.start);let u=0;for(let h=1;h<p.length;h++){let m=p[u],M=p[h];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,p[u]=M)}p.length=u+1;for(let h=0,m=p.length;h<m;h++){let M=p[h];i.bufferSubData(l,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,Vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
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
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
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
#endif`,$f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e0=`#ifdef USE_IRIDESCENCE
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
#endif`,t0=`#ifdef USE_BUMPMAP
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,h0=`#define PI 3.141592653589793
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
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d0=`vec3 transformedNormal = objectNormal;
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
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
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
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,N0=`#ifdef USE_ENVMAP
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
#endif`,D0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
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
#endif`,z0=`uniform sampler2D dfgLUT;
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
}`,H0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
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
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K0=`#if defined( USE_POINTS_UV )
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
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
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
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tp=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gp=`uniform sampler2D t2D;
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Jp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#define LAMBERT
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
}`,rm=`#define LAMBERT
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
}`,sm=`#define MATCAP
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
}`,om=`#define MATCAP
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
}`,am=`#define NORMAL
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
}`,cm=`#define NORMAL
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
}`,lm=`#define PHONG
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
}`,hm=`#define PHONG
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
}`,um=`#define STANDARD
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
}`,dm=`#define STANDARD
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
}`,fm=`#define TOON
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
}`,pm=`#define TOON
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
}`,mm=`uniform float size;
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
}`,gm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,ym=`uniform vec3 color;
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
}`,vm=`uniform float rotation;
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
}`,_m=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:kf,alphahash_pars_fragment:Gf,alphamap_fragment:Vf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:$f,begin_vertex:Kf,beginnormal_vertex:Qf,bsdfs:jf,iridescence_fragment:e0,bumpmap_pars_fragment:t0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:s0,color_fragment:o0,color_pars_fragment:a0,color_pars_vertex:c0,color_vertex:l0,common:h0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:d0,displacementmap_pars_vertex:f0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:x0,colorspace_pars_fragment:y0,envmap_fragment:v0,envmap_common_pars_fragment:_0,envmap_pars_fragment:M0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:N0,envmap_vertex:S0,fog_vertex:w0,fog_pars_vertex:b0,fog_fragment:T0,fog_pars_fragment:A0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:I0,lights_pars_begin:L0,lights_toon_fragment:D0,lights_toon_pars_fragment:U0,lights_phong_fragment:F0,lights_phong_pars_fragment:B0,lights_physical_fragment:O0,lights_physical_pars_fragment:z0,lights_fragment_begin:H0,lights_fragment_maps:k0,lights_fragment_end:G0,lightprobes_pars_fragment:V0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:Z0,map_pars_fragment:J0,map_particle_fragment:$0,map_particle_pars_fragment:K0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:j0,morphinstance_vertex:ep,morphcolor_vertex:tp,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:rp,normal_fragment_begin:sp,normal_fragment_maps:op,normal_pars_fragment:ap,normal_pars_vertex:cp,normal_vertex:lp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:xp,project_vertex:yp,dithering_fragment:vp,dithering_pars_fragment:_p,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:wp,shadowmap_vertex:bp,shadowmask_pars_fragment:Tp,skinbase_vertex:Ap,skinning_pars_vertex:Rp,skinning_vertex:Cp,skinnormal_vertex:Pp,specularmap_fragment:Ip,specularmap_pars_fragment:Lp,tonemapping_fragment:Np,tonemapping_pars_fragment:Dp,transmission_fragment:Up,transmission_pars_fragment:Fp,uv_pars_fragment:Bp,uv_pars_vertex:Op,uv_vertex:zp,worldpos_vertex:Hp,background_vert:kp,background_frag:Gp,backgroundCube_vert:Vp,backgroundCube_frag:Wp,cube_vert:Xp,cube_frag:qp,depth_vert:Yp,depth_frag:Zp,distance_vert:Jp,distance_frag:$p,equirect_vert:Kp,equirect_frag:Qp,linedashed_vert:jp,linedashed_frag:em,meshbasic_vert:tm,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:rm,meshmatcap_vert:sm,meshmatcap_frag:om,meshnormal_vert:am,meshnormal_frag:cm,meshphong_vert:lm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:dm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:xm,shadow_frag:ym,sprite_vert:vm,sprite_frag:_m},We={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Ti={basic:{uniforms:Nn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Nn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Nn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Nn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Nn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new ke(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Nn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Nn([We.points,We.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Nn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Nn([We.common,We.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Nn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Nn([We.sprite,We.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:Nn([We.common,We.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:Nn([We.lights,We.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Ti.physical={uniforms:Nn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};var fc={r:0,b:0,g:0},Mm=new it,Yu=new _t;Yu.set(-1,0,0,0,1,0,0,0,1);function Em(i,e,t,n,r,s){let o=new ke(0),a=r===!0?0:1,c,l,d=null,p=0,u=null;function h(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let w=E.backgroundBlurriness>0;R=e.get(R,w)}return R}function m(E){let R=!1,w=h(E);w===null?x(o,a):w&&w.isColor&&(x(w,1),R=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(E,R){let w=h(R);w&&(w.isCubeTexture||w.mapping===$s)?(l===void 0&&(l=new je(new Le(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Er(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(R.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yu),l.material.toneMapped=Nt.getTransfer(w.colorSpace)!==Vt,(d!==w||p!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,p=w.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new je(new xt(2,2),new Ut({name:"BackgroundMaterial",uniforms:Er(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Nt.getTransfer(w.colorSpace)!==Vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||p!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,p=w.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function x(E,R){E.getRGB(fc,Ll(i)),t.buffers.color.setClear(fc.r,fc.g,fc.b,R,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,R=1){o.set(E),a=R,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,x(o,a)},render:m,addToRenderList:M,dispose:f}}function Sm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(k,V,z,A,D){let J=!1,$=p(k,A,z,V);s!==$&&(s=$,l(s.object)),J=h(k,A,z,D),J&&m(k,A,z,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,w(k,V,z,A),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(k){return i.bindVertexArray(k)}function d(k){return i.deleteVertexArray(k)}function p(k,V,z,A){let D=A.wireframe===!0,J=n[V.id];J===void 0&&(J={},n[V.id]=J);let $=k.isInstancedMesh===!0?k.id:0,he=J[$];he===void 0&&(he={},J[$]=he);let te=he[z.id];te===void 0&&(te={},he[z.id]=te);let re=te[D];return re===void 0&&(re=u(c()),te[D]=re),re}function u(k){let V=[],z=[],A=[];for(let D=0;D<t;D++)V[D]=0,z[D]=0,A[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:z,attributeDivisors:A,object:k,attributes:{},index:null}}function h(k,V,z,A){let D=s.attributes,J=V.attributes,$=0,he=z.getAttributes();for(let te in he)if(he[te].location>=0){let xe=D[te],Be=J[te];if(Be===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(Be=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(Be=k.instanceColor)),xe===void 0||xe.attribute!==Be||Be&&xe.data!==Be.data)return!0;$++}return s.attributesNum!==$||s.index!==A}function m(k,V,z,A){let D={},J=V.attributes,$=0,he=z.getAttributes();for(let te in he)if(he[te].location>=0){let xe=J[te];xe===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(xe=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(xe=k.instanceColor));let Be={};Be.attribute=xe,xe&&xe.data&&(Be.data=xe.data),D[te]=Be,$++}s.attributes=D,s.attributesNum=$,s.index=A}function M(){let k=s.newAttributes;for(let V=0,z=k.length;V<z;V++)k[V]=0}function x(k){f(k,0)}function f(k,V){let z=s.newAttributes,A=s.enabledAttributes,D=s.attributeDivisors;z[k]=1,A[k]===0&&(i.enableVertexAttribArray(k),A[k]=1),D[k]!==V&&(i.vertexAttribDivisor(k,V),D[k]=V)}function E(){let k=s.newAttributes,V=s.enabledAttributes;for(let z=0,A=V.length;z<A;z++)V[z]!==k[z]&&(i.disableVertexAttribArray(z),V[z]=0)}function R(k,V,z,A,D,J,$){$===!0?i.vertexAttribIPointer(k,V,z,D,J):i.vertexAttribPointer(k,V,z,A,D,J)}function w(k,V,z,A){M();let D=A.attributes,J=z.getAttributes(),$=V.defaultAttributeValues;for(let he in J){let te=J[he];if(te.location>=0){let re=D[he];if(re===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(re=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(re=k.instanceColor)),re!==void 0){let xe=re.normalized,Be=re.itemSize,Ae=e.get(re);if(Ae===void 0)continue;let Je=Ae.buffer,Ee=Ae.type,qe=Ae.bytesPerElement,ue=Ee===i.INT||Ee===i.UNSIGNED_INT||re.gpuType===Ca;if(re.isInterleavedBufferAttribute){let le=re.data,Te=le.stride,et=re.offset;if(le.isInstancedInterleavedBuffer){for(let ze=0;ze<te.locationSize;ze++)f(te.location+ze,le.meshPerAttribute);k.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ze=0;ze<te.locationSize;ze++)x(te.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ze=0;ze<te.locationSize;ze++)R(te.location+ze,Be/te.locationSize,Ee,xe,Te*qe,(et+Be/te.locationSize*ze)*qe,ue)}else{if(re.isInstancedBufferAttribute){for(let le=0;le<te.locationSize;le++)f(te.location+le,re.meshPerAttribute);k.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let le=0;le<te.locationSize;le++)x(te.location+le);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let le=0;le<te.locationSize;le++)R(te.location+le,Be/te.locationSize,Ee,xe,Be*qe,Be/te.locationSize*le*qe,ue)}}else if($!==void 0){let xe=$[he];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(te.location,xe);break;case 3:i.vertexAttrib3fv(te.location,xe);break;case 4:i.vertexAttrib4fv(te.location,xe);break;default:i.vertexAttrib1fv(te.location,xe)}}}}E()}function S(){O();for(let k in n){let V=n[k];for(let z in V){let A=V[z];for(let D in A){let J=A[D];for(let $ in J)d(J[$].object),delete J[$];delete A[D]}}delete n[k]}}function T(k){if(n[k.id]===void 0)return;let V=n[k.id];for(let z in V){let A=V[z];for(let D in A){let J=A[D];for(let $ in J)d(J[$].object),delete J[$];delete A[D]}}delete n[k.id]}function U(k){for(let V in n){let z=n[V];for(let A in z){let D=z[A];if(D[k.id]===void 0)continue;let J=D[k.id];for(let $ in J)d(J[$].object),delete J[$];delete D[k.id]}}}function _(k){for(let V in n){let z=n[V],A=k.isInstancedMesh===!0?k.id:0,D=z[A];if(D!==void 0){for(let J in D){let $=D[J];for(let he in $)d($[he].object),delete $[he];delete D[J]}delete z[A],Object.keys(z).length===0&&delete n[V]}}}function O(){W(),o=!0,s!==r&&(s=r,l(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:x,disableUnusedAttributes:E}}function wm(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let h=0;h<d;h++)u+=l[h];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function bm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(U){return!(U!==Qn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let _=U===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==kn&&U!==Kn&&!_&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(lt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:w,maxSamples:S,samples:T}}function Tm(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Xn,a=new _t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let h=p.length!==0||u||n!==0||r;return r=u,n=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,h){let m=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,f=i.get(p);if(!r||m===null||m.length===0||s&&!x)s?d(null):l();else{let E=s?0:n,R=E*4,w=f.clippingState||null;c.value=w,w=d(m,u,R,h);for(let S=0;S!==R;++S)w[S]=t[S];f.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,h,m){let M=p!==null?p.length:0,x=null;if(M!==0){if(x=c.value,m!==!0||x===null){let f=h+M*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(x===null||x.length<f)&&(x=new Float32Array(f));for(let R=0,w=h;R!==M;++R,w+=4)o.copy(p[R]).applyMatrix4(E,a),o.normal.toArray(x,w),x[w+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}var cs=4,Am=6,Rm=20,Cm=256,oo=new er,bu=new ke,kl=null,Gl=0,Vl=0,Wl=!1,Pm=new B,Sr=new B,mc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=Pm}=s;kl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,Gl,Vl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Bn,format:Qn,colorSpace:As,depthBuffer:!1},r=Tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Im(s)),this._blurMaterial=Nm(s,e,t),this._ggxMaterial=Lm(s,e,t)}return r}_compileMaterial(e){let t=new je(new Lt,e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,r,s){let c=new wn(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,h=p.toneMapping;p.getClearColor(bu),p.toneMapping=ai,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new Le,new an({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,x=M.material,f=!1,E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,f=!0):(x.color.copy(bu),f=!0);for(let R=0;R<6;R++){let w=R%3;w===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[R],s.y,s.z)):w===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[R]));let S=this._cubeSize;as(r,w*S,R>2?S:0,S,S),p.setRenderTarget(r),f&&p.render(M,c),p.render(e,c)}p.toneMapping=h,p.autoClear=u,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===tr||e.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;as(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,oo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-d*d),u=l*1.25,h=p*u,{_lodMax:m}=this,M=this._sizeLods[n],x=3*M*(n>m-cs?n-m+cs:0),f=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=m-t,as(s,x,f,3*M,2*M),r.setRenderTarget(s),r.render(a,oo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,as(e,x,f,3*M,2*M),r.setRenderTarget(e),r.render(a,oo)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[r];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[r],p=3*d*(r>this._lodMax-cs?r-this._lodMax+cs:0),u=4*(this._cubeSize-d);as(t,p,u,3*d,2*d),o.setRenderTarget(t),o.render(c,oo)}};function Im(i){let e=[],t=[],n=i,r=i-cs+1+Am;for(let s=0;s<r;s++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,l=1+a,d=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,u=6,h=3,m=new Float32Array(h*u*p),M=new Float32Array(h*u*p);for(let f=0;f<p;f++){let E=f%3*2/3-1,R=f>2?0:-1,w=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];m.set(w,h*u*f);for(let S=0;S<u;S++){let T=d[S*2]*2-1,U=d[S*2+1]*2-1;f===0?Sr.set(1,U,T):f===1?Sr.set(-T,1,-U):f===2?Sr.set(-T,U,1):f===3?Sr.set(-1,U,-T):f===4?Sr.set(-T,-1,U):Sr.set(T,U,-1),Sr.toArray(M,(f*u+S)*h)}}let x=new Lt;x.setAttribute("position",new Gt(m,h)),x.setAttribute("outputDirection",new Gt(M,h)),t.push(new je(x,null)),n>cs&&n--}return{lodMeshes:t,sizeLods:e}}function Tu(i,e,t){let n=new Ln(i,e,t);return n.texture.mapping=$s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Lm(i,e,t){return new Ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Nm(i,e,t){return new Ut({name:"SphericalGaussianBlur",defines:{SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Au(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ru(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gc=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Le(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:wi});s.uniforms.tEquirect.value=t;let o=new je(r,s),a=t.minFilter;return t.minFilter===nr&&(t.minFilter=gn),new Ma(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function Dm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,h=!1){return u==null?null:h?o(u):s(u)}function s(u){if(u&&u.isTexture){let h=u.mapping;if(h===Ta||h===Aa)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let M=new gc(m.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",l),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let h=u.mapping,m=h===Ta||h===Aa,M=h===tr||h===Mr;if(m||M){let x=t.get(u),f=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new mc(i)),x=m?n.fromEquirectangular(u,x):n.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),x.texture;if(x!==void 0)return x.texture;{let E=u.image;return m&&E&&E.height>0||M&&E&&c(E)?(n===null&&(n=new mc(i)),x=m?n.fromEquirectangular(u):n.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),u.addEventListener("dispose",d),x.texture):null}}}return u}function a(u,h){return h===Ta?u.mapping=tr:h===Aa&&(u.mapping=Mr),u}function c(u){let h=0,m=6;for(let M=0;M<m;M++)u[M]!==void 0&&h++;return h===m}function l(u){let h=u.target;h.removeEventListener("dispose",l);let m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(u){let h=u.target;h.removeEventListener("dispose",d);let m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function Um(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&hr("WebGLRenderer: "+n+" extension not supported."),r}}}function Fm(i,e,t,n){let r={},s=new WeakMap;function o(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];let h=s.get(u);h&&(e.remove(h),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(p,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(p){let u=p.attributes;for(let h in u)e.update(u[h],i.ARRAY_BUFFER)}function l(p){let u=[],h=p.index,m=p.attributes.position,M=0;if(m===void 0)return;if(h!==null){let E=h.array;M=h.version;for(let R=0,w=E.length;R<w;R+=3){let S=E[R+0],T=E[R+1],U=E[R+2];u.push(S,T,T,U,U,S)}}else{let E=m.array;M=m.version;for(let R=0,w=E.length/3-1;R<w;R+=3){let S=R+0,T=R+1,U=R+2;u.push(S,T,T,U,U,S)}}let x=new(m.count>=65535?Ds:Ns)(u,1);x.version=M;let f=s.get(p);f&&e.remove(f),s.set(p,x)}function d(p){let u=s.get(p);if(u){let h=p.index;h!==null&&u.version<h.version&&l(p)}else l(p);return s.get(p)}return{get:a,update:c,getWireframeAttribute:d}}function Bm(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,u){i.drawElements(n,u,s,p*o),t.update(u,n,1)}function l(p,u,h){h!==0&&(i.drawElementsInstanced(n,u,s,p*o,h),t.update(u,n,h))}function d(p,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,p,0,h);let M=0;for(let x=0;x<h;x++)M+=u[x];t.update(M,n,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Om(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function zm(i,e,t){let n=new WeakMap,r=new Wt;function s(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0,u=n.get(a);if(u===void 0||u.count!==p){let O=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],R=0;h===!0&&(R=1),m===!0&&(R=2),M===!0&&(R=3);let w=a.attributes.position.count*R,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let T=new Float32Array(w*S*4*p),U=new Ps(T,w,S,p);U.type=Kn,U.needsUpdate=!0;let _=R*4;for(let W=0;W<p;W++){let k=x[W],V=f[W],z=E[W],A=w*S*4*W;for(let D=0;D<k.count;D++){let J=D*_;h===!0&&(r.fromBufferAttribute(k,D),T[A+J+0]=r.x,T[A+J+1]=r.y,T[A+J+2]=r.z,T[A+J+3]=0),m===!0&&(r.fromBufferAttribute(V,D),T[A+J+4]=r.x,T[A+J+5]=r.y,T[A+J+6]=r.z,T[A+J+7]=0),M===!0&&(r.fromBufferAttribute(z,D),T[A+J+8]=r.x,T[A+J+9]=r.y,T[A+J+10]=r.z,T[A+J+11]=z.itemSize===4?r.w:1)}}u={count:p,texture:U,size:new Ze(w,S)},n.set(a,u),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let h=0;for(let M=0;M<l.length;M++)h+=l[M];let m=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Hm(i,e,t,n,r){let s=new WeakMap;function o(l){let d=r.render.frame,p=l.geometry,u=e.get(l,p);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function a(){s=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var km={[fl]:"LINEAR_TONE_MAPPING",[pl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[Js]:"ACES_FILMIC_TONE_MAPPING",[xl]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[gl]:"CUSTOM_TONE_MAPPING"};function Gm(i,e,t,n,r,s){let o=new Ln(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Lt;l.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ut([0,2,0,0,2,0],2));let d=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new je(l,d),u=new er(-1,1,1,-1,0,1),h=null,m=null,M=!1,x,f=null,E=[],R=!1;this.setSize=function(w,S){o.setSize(w,S),a!==null&&a.setSize(w,S),c!==null&&c.setSize(w,S);for(let T=0;T<E.length;T++){let U=E[T];U.setSize&&U.setSize(w,S)}},this.setEffects=function(w){E=w,R=E.length>0&&E[0].isRenderPass===!0;let S=o.width,T=o.height;E.length>0&&a===null&&(a=new Ln(S,T,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),c=new Ln(S,T,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<E.length;U++){let _=E[U];_.setSize&&_.setSize(S,T)}},this.begin=function(w,S){if(M||w.toneMapping===ai&&E.length===0)return!1;if(f=S,S!==null){let T=S.width,U=S.height;(o.width!==T||o.height!==U)&&this.setSize(T,U)}return R===!1&&w.setRenderTarget(o),x=w.toneMapping,w.toneMapping=ai,!0},this.hasRenderPass=function(){return R},this.end=function(w,S){w.toneMapping=x,M=!0;let T=o,U=a;for(let _=0;_<E.length;_++){let O=E[_];O.enabled!==!1&&(O.render(w,U,T,S),O.needsSwap!==!1&&(T=U,U=U===a?c:a))}if(h!==w.outputColorSpace||m!==w.toneMapping){h=w.outputColorSpace,m=w.toneMapping,d.defines={},Nt.getTransfer(h)===Vt&&(d.defines.SRGB_TRANSFER="");let _=km[m];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(f),w.render(p,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var Zu=new Fn,Yl=new _i(1,1),Ju=new Ps,$u=new $o,Ku=new Fs,Cu=[],Pu=[],Iu=new Float32Array(16),Lu=new Float32Array(9),Nu=new Float32Array(4);function hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Cu[r];if(s===void 0&&(s=new Float32Array(r),Cu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function yn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vc(i,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;Nu.set(n),i.uniformMatrix2fv(this.addr,!1,Nu),vn(t,n)}}function Zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;Lu.set(n),i.uniformMatrix3fv(this.addr,!1,Lu),vn(t,n)}}function Jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;Iu.set(n),i.uniformMatrix4fv(this.addr,!1,Iu),vn(t,n)}}function $m(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function eg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function rg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=t.isReversedDepthBuffer()?dc:uc,s=Yl):s=Zu,t.setTexture2D(e||s,r)}function sg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||$u,r)}function og(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ku,r)}function ag(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ju,r)}function cg(i){switch(i){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return Qm;case 35669:case 35673:return jm;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}function lg(i,e){i.uniform1fv(this.addr,e)}function hg(i,e){let t=hs(e,this.size,2);i.uniform2fv(this.addr,t)}function ug(i,e){let t=hs(e,this.size,3);i.uniform3fv(this.addr,t)}function dg(i,e){let t=hs(e,this.size,4);i.uniform4fv(this.addr,t)}function fg(i,e){let t=hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pg(i,e){let t=hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mg(i,e){let t=hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gg(i,e){i.uniform1iv(this.addr,e)}function xg(i,e){i.uniform2iv(this.addr,e)}function yg(i,e){i.uniform3iv(this.addr,e)}function vg(i,e){i.uniform4iv(this.addr,e)}function _g(i,e){i.uniform1uiv(this.addr,e)}function Mg(i,e){i.uniform2uiv(this.addr,e)}function Eg(i,e){i.uniform3uiv(this.addr,e)}function Sg(i,e){i.uniform4uiv(this.addr,e)}function wg(i,e,t){let n=this.cache,r=e.length,s=vc(t,r);yn(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Yl:o=Zu;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function bg(i,e,t){let n=this.cache,r=e.length,s=vc(t,r);yn(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$u,s[o])}function Tg(i,e,t){let n=this.cache,r=e.length,s=vc(t,r);yn(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ku,s[o])}function Ag(i,e,t){let n=this.cache,r=e.length,s=vc(t,r);yn(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ju,s[o])}function Rg(i){switch(i){case 5126:return lg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return xg;case 35668:case 35672:return yg;case 35669:case 35673:return vg;case 5125:return _g;case 36294:return Mg;case 36295:return Eg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}var Zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cg(t.type)}},Jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rg(t.type)}},$l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Xl=/(\w+)(\])?(\[|\.)?/g;function Du(i,e){i.seq.push(e),i.map[e.id]=e}function Cg(i,e,t){let n=i.name,r=n.length;for(Xl.lastIndex=0;;){let s=Xl.exec(n),o=Xl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Du(t,l===void 0?new Zl(a,i,e):new Jl(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new $l(a),Du(t,p)),t=p}}}var ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Cg(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Uu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pg=37297,Ig=0;function Lg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Fu=new _t;function Ng(i){Nt._getMatrix(Fu,Nt.workingColorSpace,i);let e=`mat3( ${Fu.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(i)){case Rs:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Lg(i.getShaderSource(e),a)}else return s}function Dg(i,e){let t=Ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ug={[fl]:"Linear",[pl]:"Reinhard",[ml]:"Cineon",[Js]:"ACESFilmic",[xl]:"AgX",[yl]:"Neutral",[gl]:"Custom"};function Fg(i,e){let t=Ug[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pc=new B;function Bg(){Nt.getLuminanceCoefficients(pc);let i=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function zg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function co(i){return i!==""}function Ou(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(i){return i.replace(kg,Vg)}var Gg=new Map;function Vg(i,e){let t=Rt[e];if(t===void 0){let n=Gg.get(e);if(n!==void 0)t=Rt[n],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kl(t)}var Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(i){return i.replace(Wg,Xg)}function Xg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ku(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var qg={[vr]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function Yg(i){return qg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zg={[tr]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE_UV"};function Jg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $g={[Mr]:"ENVMAP_MODE_REFRACTION"};function Kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qg={[ba]:"ENVMAP_BLENDING_MULTIPLY",[su]:"ENVMAP_BLENDING_MIX",[ou]:"ENVMAP_BLENDING_ADD"};function jg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qg[i.combine]||"ENVMAP_BLENDING_NONE"}function ex(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tx(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Yg(t),l=Jg(t),d=Kg(t),p=jg(t),u=ex(t),h=Og(t),m=zg(s),M=r.createProgram(),x,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(co).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(co).join(`
`),f.length>0&&(f+=`
`)):(x=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),f=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Rt.tonemapping_pars_fragment:"",t.toneMapping!==ai?Fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,Dg("linearToOutputTexel",t.outputColorSpace),Bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=Kl(o),o=Ou(o,t),o=zu(o,t),a=Kl(a),a=Ou(a,t),a=zu(a,t),o=Hu(o),a=Hu(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=E+x+o,w=E+f+a,S=Uu(r,r.VERTEX_SHADER,R),T=Uu(r,r.FRAGMENT_SHADER,w);r.attachShader(M,S),r.attachShader(M,T),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function U(k){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(M)||"",z=r.getShaderInfoLog(S)||"",A=r.getShaderInfoLog(T)||"",D=V.trim(),J=z.trim(),$=A.trim(),he=!0,te=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,S,T);else{let re=Bu(r,S,"vertex"),xe=Bu(r,T,"fragment");pt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+D+`
`+re+`
`+xe)}else D!==""?lt("WebGLProgram: Program Info Log:",D):(J===""||$==="")&&(te=!1);te&&(k.diagnostics={runnable:he,programLog:D,vertexShader:{log:J,prefix:x},fragmentShader:{log:$,prefix:f}})}r.deleteShader(S),r.deleteShader(T),_=new ls(r,M),O=Hg(r,M)}let _;this.getUniforms=function(){return _===void 0&&U(this),_};let O;this.getAttributes=function(){return O===void 0&&U(this),O};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(M,Pg)),W},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ig++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=T,this}var nx=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jl(e),t.set(e,n)),n}},jl=class{constructor(e){this.id=nx++,this.code=e,this.usedTimes=0}};function ix(i){return i===rr||i===no||i===io}function rx(i,e,t,n,r,s){let o=new Yr,a=new Ql,c=new Set,l=[],d=new Map,p=n.logarithmicDepthBuffer,u=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,O,W,k,V,z){let A=k.fog,D=V.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?k.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,he=e.get(_.envMap||J,$),te=he&&he.mapping===$s?he.image.height:null,re=h[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&lt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let xe=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Be=xe!==void 0?xe.length:0,Ae=0;D.morphAttributes.position!==void 0&&(Ae=1),D.morphAttributes.normal!==void 0&&(Ae=2),D.morphAttributes.color!==void 0&&(Ae=3);let Je,Ee,qe,ue;if(re){let nt=Ti[re];Je=nt.vertexShader,Ee=nt.fragmentShader}else{Je=_.vertexShader,Ee=_.fragmentShader;let nt=a.getVertexShaderStage(_),Pt=a.getFragmentShaderStage(_);a.update(_,nt,Pt),qe=nt.id,ue=Pt.id}let le=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),et=V.isInstancedMesh===!0,ze=V.isBatchedMesh===!0,ct=!!_.map,Mt=!!_.matcap,st=!!he,tt=!!_.aoMap,Ft=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,wt=!!_.normalMap,Ht=!!_.displacementMap,Et=!!_.emissiveMap,at=!!_.metalnessMap,se=!!_.roughnessMap,H=_.anisotropy>0,be=_.clearcoat>0,fe=_.dispersion>0,I=_.retroreflectivity>0,v=_.iridescence>0,Z=_.sheen>0,ee=_.transmission>0,oe=H&&!!_.anisotropyMap,ae=be&&!!_.clearcoatMap,de=be&&!!_.clearcoatNormalMap,Q=be&&!!_.clearcoatRoughnessMap,ne=v&&!!_.iridescenceMap,ce=v&&!!_.iridescenceThicknessMap,ye=Z&&!!_.sheenColorMap,me=Z&&!!_.sheenRoughnessMap,ve=!!_.specularMap,_e=!!_.specularColorMap,Pe=!!_.specularIntensityMap,Se=ee&&!!_.transmissionMap,K=ee&&!!_.thicknessMap,we=!!_.gradientMap,pe=!!_.alphaMap,De=_.alphaTest>0,Ue=!!_.alphaHash,Me=!!_.extensions,$e=ai;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&($e=i.toneMapping);let Ye={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:Je,fragmentShader:Ee,defines:_.defines,customVertexShaderID:qe,customFragmentShaderID:ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ze,batchingColor:ze&&V._colorsTexture!==null,instancing:et,instancingColor:et&&V.instanceColor!==null,instancingMorph:et&&V.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ct,matcap:Mt,envMap:st,envMapMode:st&&he.mapping,envMapCubeUVHeight:te,aoMap:tt,lightMap:Ft,bumpMap:mt,normalMap:wt,displacementMap:Ht,emissiveMap:Et,normalMapObjectSpace:wt&&_.normalMapType===lu,normalMapTangentSpace:wt&&_.normalMapType===ro,packedNormalMap:wt&&_.normalMapType===ro&&ix(_.normalMap.format),metalnessMap:at,roughnessMap:se,anisotropy:H,anisotropyMap:oe,clearcoat:be,clearcoatMap:ae,clearcoatNormalMap:de,clearcoatRoughnessMap:Q,dispersion:fe,retroreflection:I,iridescence:v,iridescenceMap:ne,iridescenceThicknessMap:ce,sheen:Z,sheenColorMap:ye,sheenRoughnessMap:me,specularMap:ve,specularColorMap:_e,specularIntensityMap:Pe,transmission:ee,transmissionMap:Se,thicknessMap:K,gradientMap:we,opaque:_.transparent===!1&&_.blending===ns&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Ue,combine:_.combine,mapUv:ct&&m(_.map.channel),aoMapUv:tt&&m(_.aoMap.channel),lightMapUv:Ft&&m(_.lightMap.channel),bumpMapUv:mt&&m(_.bumpMap.channel),normalMapUv:wt&&m(_.normalMap.channel),displacementMapUv:Ht&&m(_.displacementMap.channel),emissiveMapUv:Et&&m(_.emissiveMap.channel),metalnessMapUv:at&&m(_.metalnessMap.channel),roughnessMapUv:se&&m(_.roughnessMap.channel),anisotropyMapUv:oe&&m(_.anisotropyMap.channel),clearcoatMapUv:ae&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(_.sheenRoughnessMap.channel),specularMapUv:ve&&m(_.specularMap.channel),specularColorMapUv:_e&&m(_.specularColorMap.channel),specularIntensityMapUv:Pe&&m(_.specularIntensityMap.channel),transmissionMapUv:Se&&m(_.transmissionMap.channel),thicknessMapUv:K&&m(_.thicknessMap.channel),alphaMapUv:pe&&m(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(wt||H),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!D.attributes.uv&&(ct||pe),fog:!!A,useFog:_.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&wt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Te,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Ae,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:ct&&_.map.isVideoTexture===!0&&Nt.getTransfer(_.map.colorSpace)===Vt,decodeVideoTextureEmissive:Et&&_.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(_.emissiveMap.colorSpace)===Vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nn,flipSided:_.side===xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&_.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function x(_){let O=[];if(_.shaderID?O.push(_.shaderID):(O.push(_.customVertexShaderID),O.push(_.customFragmentShaderID)),_.defines!==void 0)for(let W in _.defines)O.push(W),O.push(_.defines[W]);return _.isRawShaderMaterial===!1&&(f(O,_),E(O,_),O.push(i.outputColorSpace)),O.push(_.customProgramCacheKey),O.join()}function f(_,O){_.push(O.precision),_.push(O.outputColorSpace),_.push(O.envMapMode),_.push(O.envMapCubeUVHeight),_.push(O.mapUv),_.push(O.alphaMapUv),_.push(O.lightMapUv),_.push(O.aoMapUv),_.push(O.bumpMapUv),_.push(O.normalMapUv),_.push(O.displacementMapUv),_.push(O.emissiveMapUv),_.push(O.metalnessMapUv),_.push(O.roughnessMapUv),_.push(O.anisotropyMapUv),_.push(O.clearcoatMapUv),_.push(O.clearcoatNormalMapUv),_.push(O.clearcoatRoughnessMapUv),_.push(O.iridescenceMapUv),_.push(O.iridescenceThicknessMapUv),_.push(O.sheenColorMapUv),_.push(O.sheenRoughnessMapUv),_.push(O.specularMapUv),_.push(O.specularColorMapUv),_.push(O.specularIntensityMapUv),_.push(O.transmissionMapUv),_.push(O.thicknessMapUv),_.push(O.combine),_.push(O.fogExp2),_.push(O.sizeAttenuation),_.push(O.morphTargetsCount),_.push(O.morphAttributeCount),_.push(O.numSunLights),_.push(O.numDirLights),_.push(O.numPointLights),_.push(O.numSpotLights),_.push(O.numSpotLightMaps),_.push(O.numHemiLights),_.push(O.numRectAreaLights),_.push(O.numSunLightShadows),_.push(O.numDirLightShadows),_.push(O.numPointLightShadows),_.push(O.numSpotLightShadows),_.push(O.numSpotLightShadowsWithMaps),_.push(O.numLightProbes),_.push(O.shadowMapType),_.push(O.toneMapping),_.push(O.numClippingPlanes),_.push(O.numClipIntersection),_.push(O.depthPacking)}function E(_,O){o.disableAll(),O.instancing&&o.enable(0),O.instancingColor&&o.enable(1),O.instancingMorph&&o.enable(2),O.matcap&&o.enable(3),O.envMap&&o.enable(4),O.normalMapObjectSpace&&o.enable(5),O.normalMapTangentSpace&&o.enable(6),O.clearcoat&&o.enable(7),O.iridescence&&o.enable(8),O.alphaTest&&o.enable(9),O.vertexColors&&o.enable(10),O.vertexAlphas&&o.enable(11),O.vertexUv1s&&o.enable(12),O.vertexUv2s&&o.enable(13),O.vertexUv3s&&o.enable(14),O.vertexTangents&&o.enable(15),O.anisotropy&&o.enable(16),O.alphaHash&&o.enable(17),O.batching&&o.enable(18),O.dispersion&&o.enable(19),O.retroreflection&&o.enable(24),O.batchingColor&&o.enable(20),O.gradientMap&&o.enable(21),O.packedNormalMap&&o.enable(22),O.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),O.fog&&o.enable(0),O.useFog&&o.enable(1),O.flatShading&&o.enable(2),O.logarithmicDepthBuffer&&o.enable(3),O.reversedDepthBuffer&&o.enable(4),O.skinning&&o.enable(5),O.morphTargets&&o.enable(6),O.morphNormals&&o.enable(7),O.morphColors&&o.enable(8),O.premultipliedAlpha&&o.enable(9),O.shadowMapEnabled&&o.enable(10),O.doubleSided&&o.enable(11),O.flipSided&&o.enable(12),O.useDepthPacking&&o.enable(13),O.dithering&&o.enable(14),O.transmission&&o.enable(15),O.sheen&&o.enable(16),O.opaque&&o.enable(17),O.pointsUvs&&o.enable(18),O.decodeVideoTexture&&o.enable(19),O.decodeVideoTextureEmissive&&o.enable(20),O.alphaToCoverage&&o.enable(21),O.numLightProbeGrids>0&&o.enable(22),O.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function R(_){let O=h[_.type],W;if(O){let k=Ti[O];W=so.clone(k.uniforms)}else W=_.uniforms;return W}function w(_,O){let W=d.get(O);return W!==void 0?++W.usedTimes:(W=new tx(i,O,_,r),l.push(W),d.set(O,W)),W}function S(_){if(--_.usedTimes===0){let O=l.indexOf(_);l[O]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function U(){a.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:R,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:U}}function sx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ox(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vu(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function a(u,h,m,M,x,f){let E=i[e];return E===void 0?(E={id:u.id,object:u,geometry:h,material:m,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:x,group:f},i[e]=E):(E.id=u.id,E.object=u,E.geometry=h,E.material=m,E.materialVariant=o(u),E.groupOrder=M,E.renderOrder=u.renderOrder,E.z=x,E.group=f),e++,E}function c(u,h,m,M,x,f,E){E.reversedDepth===!0&&(x=-x);let R=a(u,h,m,M,x,f);m.transmission>0?n.push(R):m.transparent===!0?r.push(R):t.push(R)}function l(u,h,m,M,x,f){let E=a(u,h,m,M,x,f);m.transmission>0?n.unshift(E):m.transparent===!0?r.unshift(E):t.unshift(E)}function d(u,h){t.length>1&&t.sort(u||ox),n.length>1&&n.sort(h||Gu),r.length>1&&r.sort(h||Gu)}function p(){for(let u=e,h=i.length;u<h;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:p,sort:d}}function ax(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Vu,i.set(n,[o])):r>=s.length?(o=new Vu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new ke};break;case"SpotLight":t={position:new B,direction:new B,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function lx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hx=0;function ux(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dx(i){let e=new cx,t=lx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let r=new B,s=new it,o=new it;function a(l){let d=0,p=0,u=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let h=0,m=0,M=0,x=0,f=0,E=0,R=0,w=0,S=0,T=0,U=0,_=0,O=0,W=0;l.sort(ux);for(let V=0,z=l.length;V<z;V++){let A=l[V],D=A.color,J=A.intensity,$=A.distance,he=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===rr?he=A.shadow.map.texture:he=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)d+=D.r*J,p+=D.g*J,u+=D.b*J;else if(A.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(A.sh.coefficients[te],J);W++}else if(A.isSunLight){let te=e.get(A);if(te.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let re=A.shadow,xe=t.get(A);xe.shadowIntensity=re.intensity,xe.shadowBias=re.bias,xe.shadowNormalBias=re.normalBias,xe.shadowRadius=re.radius,xe.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[m]=xe,n.sunShadowMap[m]=he;let Be=re.getViewportCount();for(let Ae=0;Ae<Be;Ae++)n.sunShadowMatrix[M+Ae]=re.getMatrix(Ae),n.sunShadowCascade[M+Ae]=re._cascadeData[Ae];M+=Be,m++}n.sun[h]=te,h++}else if(A.isDirectionalLight){let te=e.get(A);if(te.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let re=A.shadow,xe=t.get(A);xe.shadowIntensity=re.intensity,xe.shadowBias=re.bias,xe.shadowNormalBias=re.normalBias,xe.shadowRadius=re.radius,xe.shadowMapSize=re.mapSize,n.directionalShadow[x]=xe,n.directionalShadowMap[x]=he,n.directionalShadowMatrix[x]=A.shadow.matrix,S++}n.directional[x]=te,x++}else if(A.isSpotLight){let te=e.get(A);te.position.setFromMatrixPosition(A.matrixWorld),te.color.copy(D).multiplyScalar(J),te.distance=$,te.coneCos=Math.cos(A.angle),te.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),te.decay=A.decay,n.spot[E]=te;let re=A.shadow;if(A.map&&(n.spotLightMap[_]=A.map,_++,re.updateMatrices(A),A.castShadow&&O++),n.spotLightMatrix[E]=re.matrix,A.castShadow){let xe=t.get(A);xe.shadowIntensity=re.intensity,xe.shadowBias=re.bias,xe.shadowNormalBias=re.normalBias,xe.shadowRadius=re.radius,xe.shadowMapSize=re.mapSize,n.spotShadow[E]=xe,n.spotShadowMap[E]=he,U++}E++}else if(A.isRectAreaLight){let te=e.get(A);te.color.copy(D).multiplyScalar(J),te.halfWidth.set(A.width*.5,0,0),te.halfHeight.set(0,A.height*.5,0),n.rectArea[R]=te,R++}else if(A.isPointLight){let te=e.get(A);if(te.color.copy(A.color).multiplyScalar(A.intensity),te.distance=A.distance,te.decay=A.decay,A.castShadow){let re=A.shadow,xe=t.get(A);xe.shadowIntensity=re.intensity,xe.shadowBias=re.bias,xe.shadowNormalBias=re.normalBias,xe.shadowRadius=re.radius,xe.shadowMapSize=re.mapSize,xe.shadowCameraNear=re.camera.near,xe.shadowCameraFar=re.camera.far,n.pointShadow[f]=xe,n.pointShadowMap[f]=he,n.pointShadowMatrix[f]=A.shadow.matrix,T++}n.point[f]=te,f++}else if(A.isHemisphereLight){let te=e.get(A);te.skyColor.copy(A.color).multiplyScalar(J),te.groundColor.copy(A.groundColor).multiplyScalar(J),n.hemi[w]=te,w++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;let k=n.hash;(k.sunLength!==h||k.directionalLength!==x||k.pointLength!==f||k.spotLength!==E||k.rectAreaLength!==R||k.hemiLength!==w||k.numSunShadows!==m||k.numDirectionalShadows!==S||k.numPointShadows!==T||k.numSpotShadows!==U||k.numSpotMaps!==_||k.numLightProbes!==W)&&(n.sun.length=h,n.directional.length=x,n.spot.length=E,n.rectArea.length=R,n.point.length=f,n.hemi.length=w,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+_-O,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=W,k.sunLength=h,k.directionalLength=x,k.pointLength=f,k.spotLength=E,k.rectAreaLength=R,k.hemiLength=w,k.numSunShadows=m,k.numDirectionalShadows=S,k.numPointShadows=T,k.numSpotShadows=U,k.numSpotMaps=_,k.numLightProbes=W,n.version=hx++)}function c(l,d){let p=0,u=0,h=0,m=0,M=0,x=0,f=d.matrixWorldInverse;for(let E=0,R=l.length;E<R;E++){let w=l[E];if(w.isSunLight){let S=n.sun[p];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(f),p++}else if(w.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),u++}else if(w.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),m++}else if(w.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),o.identity(),s.copy(w.matrixWorld),s.premultiply(f),o.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),M++}else if(w.isPointLight){let S=n.point[h];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),h++}else if(w.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(f),x++}}}return{setup:a,setupView:c,state:n}}function Wu(i){let e=new dx(i),t=[],n=[],r=[];function s(u){p.camera=u,t.length=0,n.length=0,r.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:l,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function fx(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Wu(i),e.set(r,[a])):s>=o.length?(a=new Wu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`,gx=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],xx=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Xu=new it,ao=new B,ql=new B;function yx(i,e,t){let n=new Jr,r=new Ze,s=new Ze,o=new Wt,a=new la,c=new ha,l={},d=t.maxTextureSize,p={[Si]:xn,[xn]:Si,[nn]:nn},u=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:px,fragmentShader:mx}),h=u.clone();h.defines.HORIZONTAL_PASS=1;let m=new Lt;m.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new je(m,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vr;let f=this.type;this.render=function(T,U,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===Hh&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vr);let O=i.getRenderTarget(),W=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),V=i.state;V.setBlending(wi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let z=f!==this.type;z&&U.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(D=>D.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,D=T.length;A<D;A++){let J=T[A],$=J.shadow;if($===void 0){lt("WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let he=$.getFrameExtents();r.multiply(he),s.copy($.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/he.x),r.x=s.x*he.x,$.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/he.y),r.y=s.y*he.y,$.mapSize.y=s.y));let te=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=te,$.map===null||z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ts){if(J.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ln(r.x,r.y,{format:rr,type:Bn,minFilter:gn,magFilter:gn,generateMipmaps:!1}),$.map.texture.name=J.name+".shadowMap",$.map.depthTexture=new _i(r.x,r.y,Kn),$.map.depthTexture.name=J.name+".shadowMapDepth",$.map.depthTexture.format=mi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=bn,$.map.depthTexture.magFilter=bn}else J.isPointLight?($.map=new gc(r.x),$.map.depthTexture=new ea(r.x,ci)):($.map=new Ln(r.x,r.y),$.map.depthTexture=new _i(r.x,r.y,ci)),$.map.depthTexture.name=J.name+".shadowMap",$.map.depthTexture.format=mi,this.type===vr?($.map.depthTexture.compareFunction=te?dc:uc,$.map.depthTexture.minFilter=gn,$.map.depthTexture.magFilter=gn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=bn,$.map.depthTexture.magFilter=bn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);let re=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();J.isPointLight!==!0&&$.updateMatrices(J,_);for(let xe=0;xe<re;xe++){let Be=$.getCamera(xe);if(J.isPointLight){let Ae=$.camera,Je=$.matrix,Ee=J.distance||Ae.far;Ee!==Ae.far&&(Ae.far=Ee,Ae.updateProjectionMatrix()),ao.setFromMatrixPosition(J.matrixWorld),Ae.position.copy(ao),ql.copy(Ae.position),ql.add(gx[xe]),Ae.up.copy(xx[xe]),Ae.lookAt(ql),Ae.updateMatrixWorld(),Je.makeTranslation(-ao.x,-ao.y,-ao.z),Xu.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Xu,Ae.coordinateSystem,Ae.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,xe),i.clear();else{xe===0&&(i.setRenderTarget($.map),i.clear());let Ae=$.getViewport(xe);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),V.viewport(o)}n=$.getFrustum(xe),w(U,_,Be,J,this.type)}$.isPointLightShadow!==!0&&this.type===ts&&E($,_),$.needsUpdate=!1}f=this.type,x.needsUpdate=!1,i.setRenderTarget(O,W,k)};function E(T,U){let _=e.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ln(r.x,r.y,{format:rr,type:Bn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(U,null,_,u,M,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(U,null,_,h,M,null)}function R(T,U,_,O){let W=null,k=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)W=k;else if(W=_.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let V=W.uuid,z=U.uuid,A=l[V];A===void 0&&(A={},l[V]=A);let D=A[z];D===void 0&&(D=W.clone(),A[z]=D,U.addEventListener("dispose",S)),W=D}if(W.visible=U.visible,W.wireframe=U.wireframe,O===ts?W.side=U.shadowSide!==null?U.shadowSide:U.side:W.side=U.shadowSide!==null?U.shadowSide:p[U.side],W.alphaMap=U.alphaMap,W.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,W.map=U.map,W.clipShadows=U.clipShadows,W.clippingPlanes=U.clippingPlanes,W.clipIntersection=U.clipIntersection,W.displacementMap=U.displacementMap,W.displacementScale=U.displacementScale,W.displacementBias=U.displacementBias,W.wireframeLinewidth=U.wireframeLinewidth,W.linewidth=U.linewidth,_.isPointLight===!0&&W.isMeshDistanceMaterial===!0){let V=i.properties.get(W);V.light=_}return W}function w(T,U,_,O,W){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&W===ts)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let z=e.update(T),A=T.material;if(Array.isArray(A)){let D=z.groups;for(let J=0,$=D.length;J<$;J++){let he=D[J],te=A[he.materialIndex];if(te&&te.visible){let re=R(T,te,O,W);T.onBeforeShadow(i,T,U,_,z,re,he),i.renderBufferDirect(_,null,z,re,T,he),T.onAfterShadow(i,T,U,_,z,re,he)}}}else if(A.visible){let D=R(T,A,O,W);T.onBeforeShadow(i,T,U,_,z,D,null),i.renderBufferDirect(_,null,z,D,T,null),T.onAfterShadow(i,T,U,_,z,D,null)}}let V=T.children;for(let z=0,A=V.length;z<A;z++)w(V[z],U,_,O,W)}function S(T){T.target.removeEventListener("dispose",S);for(let _ in l){let O=l[_],W=T.target.uuid;W in O&&(O[W].dispose(),delete O[W])}}}function vx(i,e){function t(){let K=!1,we=new Wt,pe=null,De=new Wt(0,0,0,0);return{setMask:function(Ue){pe!==Ue&&!K&&(i.colorMask(Ue,Ue,Ue,Ue),pe=Ue)},setLocked:function(Ue){K=Ue},setClear:function(Ue,Me,$e,Ye,nt){nt===!0&&(Ue*=Ye,Me*=Ye,$e*=Ye),we.set(Ue,Me,$e,Ye),De.equals(we)===!1&&(i.clearColor(Ue,Me,$e,Ye),De.copy(we))},reset:function(){K=!1,pe=null,De.set(-1,0,0,0)}}}function n(){let K=!1,we=!1,pe=null,De=null,Ue=null;return{setReversed:function(Me){if(we!==Me){let $e=e.get("EXT_clip_control");Me?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),we=Me;let Ye=Ue;Ue=null,this.setClear(Ye)}},getReversed:function(){return we},setTest:function(Me){Me?le(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Me){pe!==Me&&!K&&(i.depthMask(Me),pe=Me)},setFunc:function(Me){if(we&&(Me=Mu[Me]),De!==Me){switch(Me){case zo:i.depthFunc(i.NEVER);break;case Ho:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case Gr:i.depthFunc(i.LEQUAL);break;case Go:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=Me}},setLocked:function(Me){K=Me},setClear:function(Me){Ue!==Me&&(Ue=Me,we&&(Me=1-Me),i.clearDepth(Me))},reset:function(){K=!1,pe=null,De=null,Ue=null,we=!1}}}function r(){let K=!1,we=null,pe=null,De=null,Ue=null,Me=null,$e=null,Ye=null,nt=null;return{setTest:function(Pt){K||(Pt?le(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Pt){we!==Pt&&!K&&(i.stencilMask(Pt),we=Pt)},setFunc:function(Pt,rn,on){(pe!==Pt||De!==rn||Ue!==on)&&(i.stencilFunc(Pt,rn,on),pe=Pt,De=rn,Ue=on)},setOp:function(Pt,rn,on){(Me!==Pt||$e!==rn||Ye!==on)&&(i.stencilOp(Pt,rn,on),Me=Pt,$e=rn,Ye=on)},setLocked:function(Pt){K=Pt},setClear:function(Pt){nt!==Pt&&(i.clearStencil(Pt),nt=Pt)},reset:function(){K=!1,we=null,pe=null,De=null,Ue=null,Me=null,$e=null,Ye=null,nt=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,d={},p={},u={},h=new WeakMap,m=[],M=null,x=!1,f=null,E=null,R=null,w=null,S=null,T=null,U=null,_=new ke(0,0,0),O=0,W=!1,k=null,V=null,z=null,A=null,D=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,he=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=he>=1):te.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=he>=2);let re=null,xe={},Be=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Je=new Wt().fromArray(Be),Ee=new Wt().fromArray(Ae);function qe(K,we,pe,De){let Ue=new Uint8Array(4),Me=i.createTexture();i.bindTexture(K,Me),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<pe;$e++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(we+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Me}let ue={};ue[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(Gr),mt(!1),wt(cl),le(i.CULL_FACE),tt(wi);function le(K){d[K]!==!0&&(i.enable(K),d[K]=!0)}function Te(K){d[K]!==!1&&(i.disable(K),d[K]=!1)}function et(K,we){return u[K]!==we?(i.bindFramebuffer(K,we),u[K]=we,K===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),K===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function ze(K,we){let pe=m,De=!1;if(K){pe=h.get(we),pe===void 0&&(pe=[],h.set(we,pe));let Ue=K.textures;if(pe.length!==Ue.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,$e=Ue.length;Me<$e;Me++)pe[Me]=i.COLOR_ATTACHMENT0+Me;pe.length=Ue.length,De=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,De=!0);De&&i.drawBuffers(pe)}function ct(K){return M!==K?(i.useProgram(K),M=K,!0):!1}let Mt={[_r]:i.FUNC_ADD,[Gh]:i.FUNC_SUBTRACT,[Vh]:i.FUNC_REVERSE_SUBTRACT};Mt[Wh]=i.MIN,Mt[Xh]=i.MAX;let st={[qh]:i.ZERO,[Yh]:i.ONE,[Zh]:i.SRC_COLOR,[ul]:i.SRC_ALPHA,[eu]:i.SRC_ALPHA_SATURATE,[Qh]:i.DST_COLOR,[$h]:i.DST_ALPHA,[Jh]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Kh]:i.ONE_MINUS_DST_ALPHA,[tu]:i.CONSTANT_COLOR,[nu]:i.ONE_MINUS_CONSTANT_COLOR,[iu]:i.CONSTANT_ALPHA,[ru]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(K,we,pe,De,Ue,Me,$e,Ye,nt,Pt){if(K===wi){x===!0&&(Te(i.BLEND),x=!1);return}if(x===!1&&(le(i.BLEND),x=!0),K!==kh){if(K!==f||Pt!==W){if((E!==_r||S!==_r)&&(i.blendEquation(i.FUNC_ADD),E=_r,S=_r),Pt)switch(K){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yn:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",K);break}else switch(K){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ll:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",K);break}R=null,w=null,T=null,U=null,_.set(0,0,0),O=0,f=K,W=Pt}return}Ue=Ue||we,Me=Me||pe,$e=$e||De,(we!==E||Ue!==S)&&(i.blendEquationSeparate(Mt[we],Mt[Ue]),E=we,S=Ue),(pe!==R||De!==w||Me!==T||$e!==U)&&(i.blendFuncSeparate(st[pe],st[De],st[Me],st[$e]),R=pe,w=De,T=Me,U=$e),(Ye.equals(_)===!1||nt!==O)&&(i.blendColor(Ye.r,Ye.g,Ye.b,nt),_.copy(Ye),O=nt),f=K,W=!1}function Ft(K,we){K.side===nn?Te(i.CULL_FACE):le(i.CULL_FACE);let pe=K.side===xn;we&&(pe=!pe),mt(pe),K.blending===ns&&K.transparent===!1?tt(wi):tt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),s.setMask(K.colorWrite);let De=K.stencilWrite;a.setTest(De),De&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Et(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(K){k!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),k=K)}function wt(K){K!==Oh?(le(i.CULL_FACE),K!==V&&(K===cl?i.cullFace(i.BACK):K===zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),V=K}function Ht(K){K!==z&&($&&i.lineWidth(K),z=K)}function Et(K,we,pe){K?(le(i.POLYGON_OFFSET_FILL),(A!==we||D!==pe)&&(A=we,D=pe,o.getReversed()&&(we=-we),i.polygonOffset(we,pe))):Te(i.POLYGON_OFFSET_FILL)}function at(K){K?le(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function se(K){K===void 0&&(K=i.TEXTURE0+J-1),re!==K&&(i.activeTexture(K),re=K)}function H(K,we,pe){pe===void 0&&(re===null?pe=i.TEXTURE0+J-1:pe=re);let De=xe[pe];De===void 0&&(De={type:void 0,texture:void 0},xe[pe]=De),(De.type!==K||De.texture!==we)&&(re!==pe&&(i.activeTexture(pe),re=pe),i.bindTexture(K,we||ue[K]),De.type=K,De.texture=we)}function be(){let K=xe[re];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(K){pt("WebGLState:",K)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(K){pt("WebGLState:",K)}}function v(){try{i.texSubImage2D(...arguments)}catch(K){pt("WebGLState:",K)}}function Z(){try{i.texSubImage3D(...arguments)}catch(K){pt("WebGLState:",K)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(K){pt("WebGLState:",K)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(K){pt("WebGLState:",K)}}function ae(){try{i.texStorage2D(...arguments)}catch(K){pt("WebGLState:",K)}}function de(){try{i.texStorage3D(...arguments)}catch(K){pt("WebGLState:",K)}}function Q(){try{i.texImage2D(...arguments)}catch(K){pt("WebGLState:",K)}}function ne(){try{i.texImage3D(...arguments)}catch(K){pt("WebGLState:",K)}}function ce(K){return p[K]!==void 0?p[K]:i.getParameter(K)}function ye(K,we){p[K]!==we&&(i.pixelStorei(K,we),p[K]=we)}function me(K){Je.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Je.copy(K))}function ve(K){Ee.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Ee.copy(K))}function _e(K,we){let pe=l.get(we);pe===void 0&&(pe=new WeakMap,l.set(we,pe));let De=pe.get(K);De===void 0&&(De=i.getUniformBlockIndex(we,K.name),pe.set(K,De))}function Pe(K,we){let De=l.get(we).get(K);c.get(we)!==De&&(i.uniformBlockBinding(we,De,K.__bindingPointIndex),c.set(we,De))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},re=null,xe={},u={},h=new WeakMap,m=[],M=null,x=!1,f=null,E=null,R=null,w=null,S=null,T=null,U=null,_=new ke(0,0,0),O=0,W=!1,k=null,V=null,z=null,A=null,D=null,Je.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Te,bindFramebuffer:et,drawBuffers:ze,useProgram:ct,setBlending:tt,setMaterial:Ft,setFlipSided:mt,setCullFace:wt,setLineWidth:Ht,setPolygonOffset:Et,setScissorTest:at,activeTexture:se,bindTexture:H,unbindTexture:be,compressedTexImage2D:fe,compressedTexImage3D:I,texImage2D:Q,texImage3D:ne,pixelStorei:ye,getParameter:ce,updateUBOMapping:_e,uniformBlockBinding:Pe,texStorage2D:ae,texStorage3D:de,texSubImage2D:v,texSubImage3D:Z,compressedTexSubImage2D:ee,compressedTexSubImage3D:oe,scissor:me,viewport:ve,reset:Se}}function _x(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,d=new WeakMap,p=new Set,u,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,v){return m?new OffscreenCanvas(I,v):Cs("canvas")}function x(I,v,Z){let ee=1,oe=fe(I);if((oe.width>Z||oe.height>Z)&&(ee=Z/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let ae=Math.floor(ee*oe.width),de=Math.floor(ee*oe.height);u===void 0&&(u=M(ae,de));let Q=v?M(ae,de):u;return Q.width=ae,Q.height=de,Q.getContext("2d").drawImage(I,0,0,ae,de),lt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ae+"x"+de+")."),Q}else return"data"in I&&lt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function f(I){return I.generateMipmaps}function E(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(I,v,Z,ee,oe,ae=!1){if(I!==null){if(i[I]!==void 0)return i[I];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de;ee&&(de=e.get("EXT_texture_norm16"),de||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===i.RED&&(Z===i.FLOAT&&(Q=i.R32F),Z===i.HALF_FLOAT&&(Q=i.R16F),Z===i.UNSIGNED_BYTE&&(Q=i.R8),Z===i.UNSIGNED_SHORT&&de&&(Q=de.R16_EXT),Z===i.SHORT&&de&&(Q=de.R16_SNORM_EXT)),v===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.R8UI),Z===i.UNSIGNED_SHORT&&(Q=i.R16UI),Z===i.UNSIGNED_INT&&(Q=i.R32UI),Z===i.BYTE&&(Q=i.R8I),Z===i.SHORT&&(Q=i.R16I),Z===i.INT&&(Q=i.R32I)),v===i.RG&&(Z===i.FLOAT&&(Q=i.RG32F),Z===i.HALF_FLOAT&&(Q=i.RG16F),Z===i.UNSIGNED_BYTE&&(Q=i.RG8),Z===i.UNSIGNED_SHORT&&de&&(Q=de.RG16_EXT),Z===i.SHORT&&de&&(Q=de.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),Z===i.UNSIGNED_INT&&(Q=i.RG32UI),Z===i.BYTE&&(Q=i.RG8I),Z===i.SHORT&&(Q=i.RG16I),Z===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),Z===i.UNSIGNED_INT&&(Q=i.RGB32UI),Z===i.BYTE&&(Q=i.RGB8I),Z===i.SHORT&&(Q=i.RGB16I),Z===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),Z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),Z===i.BYTE&&(Q=i.RGBA8I),Z===i.SHORT&&(Q=i.RGBA16I),Z===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(Z===i.UNSIGNED_SHORT&&de&&(Q=de.RGB16_EXT),Z===i.SHORT&&de&&(Q=de.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){let ne=ae?Rs:Nt.getTransfer(oe);Z===i.FLOAT&&(Q=i.RGBA32F),Z===i.HALF_FLOAT&&(Q=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(Q=ne===Vt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&de&&(Q=de.RGBA16_EXT),Z===i.SHORT&&de&&(Q=de.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(I,v){let Z;return I?v===null||v===ci||v===rs?Z=i.DEPTH24_STENCIL8:v===Kn?Z=i.DEPTH32F_STENCIL8:v===is&&(Z=i.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ci||v===rs?Z=i.DEPTH_COMPONENT24:v===Kn?Z=i.DEPTH_COMPONENT32F:v===is&&(Z=i.DEPTH_COMPONENT16),Z}function T(I,v){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==bn&&I.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function U(I){let v=I.target;v.removeEventListener("dispose",U),O(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&p.delete(v)}function _(I){let v=I.target;v.removeEventListener("dispose",_),k(v)}function O(I){let v=n.get(I);if(v.__webglInit===void 0)return;let Z=I.source,ee=h.get(Z);if(ee){let oe=ee[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&W(I),Object.keys(ee).length===0&&h.delete(Z)}n.remove(I)}function W(I){let v=n.get(I);i.deleteTexture(v.__webglTexture);let Z=I.source,ee=h.get(Z);delete ee[v.__cacheKey],o.memory.textures--}function k(I){let v=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let oe=0;oe<v.__webglFramebuffer[ee].length;oe++)i.deleteFramebuffer(v.__webglFramebuffer[ee][oe]);else i.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[ee]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=I.textures;for(let ee=0,oe=Z.length;ee<oe;ee++){let ae=n.get(Z[ee]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(Z[ee])}n.remove(I)}let V=0;function z(){V=0}function A(){return V}function D(I){V=I}function J(){let I=V;return I>=r.maxTextures&&lt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+r.maxTextures),V+=1,I}function $(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function he(I,v){let Z=n.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){let ee=I.image;if(ee===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Z,I,v);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+v)}function te(I,v){let Z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Te(Z,I,v);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+v)}function re(I,v){let Z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Te(Z,I,v);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+v)}function xe(I,v){let Z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){et(Z,I,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+v)}let Be={[Vr]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},Ae={[bn]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[nr]:i.LINEAR_MIPMAP_LINEAR},Je={[uu]:i.NEVER,[gu]:i.ALWAYS,[du]:i.LESS,[uc]:i.LEQUAL,[fu]:i.EQUAL,[dc]:i.GEQUAL,[pu]:i.GREATER,[mu]:i.NOTEQUAL};function Ee(I,v){if(v.type===Kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===Ra||v.magFilter===Ks||v.magFilter===nr||v.minFilter===gn||v.minFilter===Ra||v.minFilter===Ks||v.minFilter===nr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Be[v.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Be[v.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Be[v.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Ae[v.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Ae[v.minFilter]),v.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Je[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bn||v.minFilter!==Ks&&v.minFilter!==nr||v.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function qe(I,v){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",U));let ee=v.source,oe=h.get(ee);oe===void 0&&(oe={},h.set(ee,oe));let ae=$(v);if(ae!==I.__cacheKey){oe[ae]===void 0&&(oe[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),oe[ae].usedTimes++;let de=oe[I.__cacheKey];de!==void 0&&(oe[I.__cacheKey].usedTimes--,de.usedTimes===0&&W(v)),I.__cacheKey=ae,I.__webglTexture=oe[ae].texture}return Z}function ue(I,v,Z){return Math.floor(Math.floor(I/Z)/v)}function le(I,v,Z,ee){let ae=I.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Z,ee,v.data);else{ae.sort((ye,me)=>ye.start-me.start);let de=0;for(let ye=1;ye<ae.length;ye++){let me=ae[de],ve=ae[ye],_e=me.start+me.count,Pe=ue(ve.start,v.width,4),Se=ue(me.start,v.width,4);ve.start<=_e+1&&Pe===Se&&ue(ve.start+ve.count-1,v.width,4)===Pe?me.count=Math.max(me.count,ve.start+ve.count-me.start):(++de,ae[de]=ve)}ae.length=de+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ye=0,me=ae.length;ye<me;ye++){let ve=ae[ye],_e=Math.floor(ve.start/4),Pe=Math.ceil(ve.count/4),Se=_e%v.width,K=Math.floor(_e/v.width),we=Pe,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,Se,K,we,pe,Z,ee,v.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function Te(I,v,Z){let ee=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=i.TEXTURE_3D);let oe=qe(I,v),ae=v.source;t.bindTexture(ee,I.__webglTexture,i.TEXTURE0+Z);let de=n.get(ae);if(ae.version!==de.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let pe=Nt.getPrimaries(Nt.workingColorSpace),De=v.colorSpace===Bi?null:Nt.getPrimaries(v.colorSpace),Ue=v.colorSpace===Bi||pe===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ne=x(v.image,!1,r.maxTextureSize);ne=be(v,ne);let ce=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),me=w(v.internalFormat,ce,ye,v.normalized,v.colorSpace,v.isVideoTexture);Ee(ee,v);let ve,_e=v.mipmaps,Pe=v.isVideoTexture!==!0,Se=de.__version===void 0||oe===!0,K=ae.dataReady,we=T(v,ne);if(v.isDepthTexture)me=S(v.format===ir,v.type),Se&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,me,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,me,ne.width,ne.height,0,ce,ye,null));else if(v.isDataTexture)if(_e.length>0){Pe&&Se&&t.texStorage2D(i.TEXTURE_2D,we,me,_e[0].width,_e[0].height);for(let pe=0,De=_e.length;pe<De;pe++)ve=_e[pe],Pe?K&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ve.width,ve.height,ce,ye,ve.data):t.texImage2D(i.TEXTURE_2D,pe,me,ve.width,ve.height,0,ce,ye,ve.data);v.generateMipmaps=!1}else Pe?(Se&&t.texStorage2D(i.TEXTURE_2D,we,me,ne.width,ne.height),K&&le(v,ne,ce,ye)):t.texImage2D(i.TEXTURE_2D,0,me,ne.width,ne.height,0,ce,ye,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,me,_e[0].width,_e[0].height,ne.depth);for(let pe=0,De=_e.length;pe<De;pe++)if(ve=_e[pe],v.format!==Qn)if(ce!==null)if(Pe){if(K)if(v.layerUpdates.size>0){let Ue=Ul(ve.width,ve.height,v.format,v.type);for(let Me of v.layerUpdates){let $e=ve.data.subarray(Me*Ue/ve.data.BYTES_PER_ELEMENT,(Me+1)*Ue/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Me,ve.width,ve.height,1,ce,$e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,ne.depth,ce,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,me,ve.width,ve.height,ne.depth,0,ve.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,ne.depth,ce,ye,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,me,ve.width,ve.height,ne.depth,0,ce,ye,ve.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Pe&&Se&&t.texStorage2D(i.TEXTURE_2D,we,me,_e[0].width,_e[0].height);for(let pe=0,De=_e.length;pe<De;pe++)ve=_e[pe],v.format!==Qn?ce!==null?Pe?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,ve.width,ve.height,ce,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,me,ve.width,ve.height,0,ve.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?K&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ve.width,ve.height,ce,ye,ve.data):t.texImage2D(i.TEXTURE_2D,pe,me,ve.width,ve.height,0,ce,ye,ve.data)}else if(v.isDataArrayTexture)if(Pe){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,me,ne.width,ne.height,ne.depth),K)if(v.layerUpdates.size>0){let pe=Ul(ne.width,ne.height,v.format,v.type);for(let De of v.layerUpdates){let Ue=ne.data.subarray(De*pe/ne.data.BYTES_PER_ELEMENT,(De+1)*pe/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,ne.width,ne.height,1,ce,ye,Ue)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ce,ye,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ne.width,ne.height,ne.depth,0,ce,ye,ne.data);else if(v.isData3DTexture)Pe?(Se&&t.texStorage3D(i.TEXTURE_3D,we,me,ne.width,ne.height,ne.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ce,ye,ne.data)):t.texImage3D(i.TEXTURE_3D,0,me,ne.width,ne.height,ne.depth,0,ce,ye,ne.data);else if(v.isFramebufferTexture){if(Se)if(Pe)t.texStorage2D(i.TEXTURE_2D,we,me,ne.width,ne.height);else{let pe=ne.width,De=ne.height;for(let Ue=0;Ue<we;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,me,pe,De,0,ce,ye,null),pe>>=1,De>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ne.parentNode!==pe){pe.appendChild(ne),p.add(v),pe.onpaint=De=>{let Ue=De.changedElements;for(let Me of p)Ue.includes(Me.image)&&(Me.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Ue=i.RGBA,Me=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ue,Me,$e,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_e.length>0){if(Pe&&Se){let pe=fe(_e[0]);t.texStorage2D(i.TEXTURE_2D,we,me,pe.width,pe.height)}for(let pe=0,De=_e.length;pe<De;pe++)ve=_e[pe],Pe?K&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ce,ye,ve):t.texImage2D(i.TEXTURE_2D,pe,me,ce,ye,ve);v.generateMipmaps=!1}else if(Pe){if(Se){let pe=fe(ne);t.texStorage2D(i.TEXTURE_2D,we,me,pe.width,pe.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,ye,ne)}else t.texImage2D(i.TEXTURE_2D,0,me,ce,ye,ne);f(v)&&E(ee),de.__version=ae.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function et(I,v,Z){if(v.image.length!==6)return;let ee=qe(I,v),oe=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Z);let ae=n.get(oe);if(oe.version!==ae.__version||ee===!0){t.activeTexture(i.TEXTURE0+Z);let de=Nt.getPrimaries(Nt.workingColorSpace),Q=v.colorSpace===Bi?null:Nt.getPrimaries(v.colorSpace),ne=v.colorSpace===Bi||de===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ce=v.isCompressedTexture||v.image[0].isCompressedTexture,ye=v.image[0]&&v.image[0].isDataTexture,me=[];for(let Me=0;Me<6;Me++)!ce&&!ye?me[Me]=x(v.image[Me],!0,r.maxCubemapSize):me[Me]=ye?v.image[Me].image:v.image[Me],me[Me]=be(v,me[Me]);let ve=me[0],_e=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type),Se=w(v.internalFormat,_e,Pe,v.normalized,v.colorSpace),K=v.isVideoTexture!==!0,we=ae.__version===void 0||ee===!0,pe=oe.dataReady,De=T(v,ve);Ee(i.TEXTURE_CUBE_MAP,v);let Ue;if(ce){K&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Se,ve.width,ve.height);for(let Me=0;Me<6;Me++){Ue=me[Me].mipmaps;for(let $e=0;$e<Ue.length;$e++){let Ye=Ue[$e];v.format!==Qn?_e!==null?K?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,$e,0,0,Ye.width,Ye.height,_e,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,$e,Se,Ye.width,Ye.height,0,Ye.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,$e,0,0,Ye.width,Ye.height,_e,Pe,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,$e,Se,Ye.width,Ye.height,0,_e,Pe,Ye.data)}}}else{if(Ue=v.mipmaps,K&&we){Ue.length>0&&De++;let Me=fe(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Se,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(ye){K?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,me[Me].width,me[Me].height,_e,Pe,me[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Se,me[Me].width,me[Me].height,0,_e,Pe,me[Me].data);for(let $e=0;$e<Ue.length;$e++){let nt=Ue[$e].image[Me].image;K?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,$e+1,0,0,nt.width,nt.height,_e,Pe,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,$e+1,Se,nt.width,nt.height,0,_e,Pe,nt.data)}}else{K?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,_e,Pe,me[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Se,_e,Pe,me[Me]);for(let $e=0;$e<Ue.length;$e++){let Ye=Ue[$e];K?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,$e+1,0,0,_e,Pe,Ye.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,$e+1,Se,_e,Pe,Ye.image[Me])}}}f(v)&&E(i.TEXTURE_CUBE_MAP),ae.__version=oe.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function ze(I,v,Z,ee,oe,ae){let de=s.convert(Z.format,Z.colorSpace),Q=s.convert(Z.type),ne=w(Z.internalFormat,de,Q,Z.normalized,Z.colorSpace),ce=n.get(v),ye=n.get(Z);if(ye.__renderTarget=v,!ce.__hasExternalTextures){let me=Math.max(1,v.width>>ae),ve=Math.max(1,v.height>>ae);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ae,ne,me,ve,v.depth,0,de,Q,null):t.texImage2D(oe,ae,ne,me,ve,0,de,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,oe,ye.__webglTexture,0,at(v)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,oe,ye.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(I,v,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),v.depthBuffer){let ee=v.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,ae=S(v.stencilBuffer,oe),de=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;se(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(v),ae,v.width,v.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(v),ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ae,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,I)}else{let ee=v.textures;for(let oe=0;oe<ee.length;oe++){let ae=ee[oe],de=s.convert(ae.format,ae.colorSpace),Q=s.convert(ae.type),ne=w(ae.internalFormat,de,Q,ae.normalized,ae.colorSpace);se(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(v),ne,v.width,v.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(v),ne,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(I,v,Z){let ee=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(v.depthTexture);if(oe.__renderTarget=v,(!oe.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ee){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,v.depthTexture.addEventListener("dispose",U)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,v.depthTexture);let ce=s.convert(v.depthTexture.format),ye=s.convert(v.depthTexture.type),me;v.depthTexture.format===mi?me=i.DEPTH_COMPONENT24:v.depthTexture.format===ir&&(me=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,me,v.width,v.height,0,ce,ye,null)}}else he(v.depthTexture,0);let ae=oe.__webglTexture,de=at(v),Q=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ne=v.depthTexture.format===ir?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===mi)se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,ae,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,ae,0);else if(v.depthTexture.format===ir)se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,ae,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(I){let v=n.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let ee=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ee){let oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=ee}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(Z)for(let ee=0;ee<6;ee++)Mt(v.__webglFramebuffer[ee],I,ee);else{let ee=I.texture.mipmaps;ee&&ee.length>0?Mt(v.__webglFramebuffer[0],I,0):Mt(v.__webglFramebuffer,I,0)}else if(Z){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]===void 0)v.__webglDepthbuffer[ee]=i.createRenderbuffer(),ct(v.__webglDepthbuffer[ee],I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ae)}}else{let ee=I.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ct(v.__webglDepthbuffer,I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(I,v,Z){let ee=n.get(I);v!==void 0&&ze(ee.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&st(I)}function Ft(I){let v=I.texture,Z=n.get(I),ee=n.get(v);I.addEventListener("dispose",_);let oe=I.textures,ae=I.isWebGLCubeRenderTarget===!0,de=oe.length>1;if(de||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=v.version,o.memory.textures++),ae){Z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[Q]=[];for(let ne=0;ne<v.mipmaps.length;ne++)Z.__webglFramebuffer[Q][ne]=i.createFramebuffer()}else Z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)Z.__webglFramebuffer[Q]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(de)for(let Q=0,ne=oe.length;Q<ne;Q++){let ce=n.get(oe[Q]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&se(I)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Q=0;Q<oe.length;Q++){let ne=oe[Q];Z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Q]);let ce=s.convert(ne.format,ne.colorSpace),ye=s.convert(ne.type),me=w(ne.internalFormat,ce,ye,ne.normalized,ne.colorSpace,I.isXRRenderTarget===!0),ve=at(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,me,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)ze(Z.__webglFramebuffer[Q][ne],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else ze(Z.__webglFramebuffer[Q],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);f(v)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let Q=0,ne=oe.length;Q<ne;Q++){let ce=oe[Q],ye=n.get(ce),me=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,ye.__webglTexture),Ee(me,ce),ze(Z.__webglFramebuffer,I,ce,i.COLOR_ATTACHMENT0+Q,me,0),f(ce)&&E(me)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,ee.__webglTexture),Ee(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)ze(Z.__webglFramebuffer[ne],I,v,i.COLOR_ATTACHMENT0,Q,ne);else ze(Z.__webglFramebuffer,I,v,i.COLOR_ATTACHMENT0,Q,0);f(v)&&E(Q),t.unbindTexture()}I.depthBuffer&&st(I)}function mt(I){let v=I.textures;for(let Z=0,ee=v.length;Z<ee;Z++){let oe=v[Z];if(f(oe)){let ae=R(I),de=n.get(oe).__webglTexture;t.bindTexture(ae,de),E(ae),t.unbindTexture()}}}let wt=[],Ht=[];function Et(I){if(I.samples>0){if(se(I)===!1){let v=I.textures,Z=I.width,ee=I.height,oe=i.COLOR_BUFFER_BIT,ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(I),Q=v.length>1;if(Q)for(let ce=0;ce<v.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let ne=I.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ce=0;ce<v.length;ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let ye=n.get(v[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,oe,i.NEAREST),c===!0&&(wt.length=0,Ht.length=0,wt.push(i.COLOR_ATTACHMENT0+ce),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(wt.push(ae),Ht.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ce=0;ce<v.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let ye=n.get(v[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let v=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function at(I){return Math.min(r.maxSamples,I.samples)}function se(I){let v=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(I){let v=o.render.frame;d.get(I)!==v&&(d.set(I,v),I.update())}function be(I,v){let Z=I.colorSpace,ee=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==As&&Z!==Bi&&(Nt.getTransfer(Z)===Vt?(ee!==Qn||oe!==kn)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",Z)),v}function fe(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=z,this.getTextureUnits=A,this.setTextureUnits=D,this.setTexture2D=he,this.setTexture2DArray=te,this.setTexture3D=re,this.setTextureCube=xe,this.rebindTextures=tt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Mx(i,e){function t(n,r=Bi){let s,o=Nt.getTransfer(r);if(n===kn)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_l)return i.BYTE;if(n===Ml)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===wl)return i.ALPHA;if(n===bl)return i.RGB;if(n===Qn)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===ss)return i.RED;if(n===La)return i.RED_INTEGER;if(n===rr)return i.RG;if(n===Na)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===Qs||n===js||n===eo||n===to)if(o===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Ba||n===Oa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Ha||n===ka||n===Ga||n===Va||n===no||n===Wa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===za||n===Ha)return o===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ka)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return s.COMPRESSED_R11_EAC;if(n===Va)return s.COMPRESSED_SIGNED_R11_EAC;if(n===no)return s.COMPRESSED_RG11_EAC;if(n===Wa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===ec||n===tc||n===nc||n===ic||n===rc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xa)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===oc||n===ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===sc)return o===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===lc||n===io||n===hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===cc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ut({vertexShader:Ex,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new xt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends gi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,p=null,u=null,h=null,m=null,M=typeof XRWebGLBinding!="undefined",x=new eh,f={},E=t.getContextAttributes(),R=null,w=null,S=[],T=[],U=new Ze,_=null,O=null,W=new wn;W.viewport=new Wt;let k=new wn;k.viewport=new Wt;let V=[W,k],z=new Ea,A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let le=S[ue];return le===void 0&&(le=new Zr,S[ue]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ue){let le=S[ue];return le===void 0&&(le=new Zr,S[ue]=le),le.getGripSpace()},this.getHand=function(ue){let le=S[ue];return le===void 0&&(le=new Zr,S[ue]=le),le.getHandSpace()};function J(ue){let le=T.indexOf(ue.inputSource);if(le===-1)return;let Te=S[le];Te!==void 0&&(Te.update(ue.inputSource,ue.frame,l||o),Te.dispatchEvent({type:ue.type,data:ue.inputSource}))}function $(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",he);for(let ue=0;ue<S.length;ue++){let le=T[ue];le!==null&&(T[ue]=null,S[ue].disconnect(le))}A=null,D=null,x.reset();for(let ue in f)delete f[ue];if(e.setRenderTarget(R),h=null,u=null,p=null,r=null,w=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(U.width,U.height,!1),O!==null){let ue=O.camera;ue.fov=O.fov,ue.zoom=O.zoom,ue.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){s=ue,n.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){a=ue,n.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ue){l=ue},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ue){if(r=ue,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",$),r.addEventListener("inputsourceschange",he),E.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,et=null,ze=null;E.depth&&(ze=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=E.stencil?ir:mi,et=E.stencil?rs:ci);let ct={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(ct),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new Ln(u.textureWidth,u.textureHeight,{format:Qn,type:kn,depthTexture:new _i(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Te={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new Ln(h.framebufferWidth,h.framebufferHeight,{format:Qn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function he(ue){for(let le=0;le<ue.removed.length;le++){let Te=ue.removed[le],et=T.indexOf(Te);et>=0&&(T[et]=null,S[et].disconnect(Te))}for(let le=0;le<ue.added.length;le++){let Te=ue.added[le],et=T.indexOf(Te);if(et===-1){for(let ct=0;ct<S.length;ct++)if(ct>=T.length){T.push(Te),et=ct;break}else if(T[ct]===null){T[ct]=Te,et=ct;break}if(et===-1)break}let ze=S[et];ze&&ze.connect(Te)}}let te=new B,re=new B;function xe(ue,le,Te){te.setFromMatrixPosition(le.matrixWorld),re.setFromMatrixPosition(Te.matrixWorld);let et=te.distanceTo(re),ze=le.projectionMatrix.elements,ct=Te.projectionMatrix.elements,Mt=ze[14]/(ze[10]-1),st=ze[14]/(ze[10]+1),tt=(ze[9]+1)/ze[5],Ft=(ze[9]-1)/ze[5],mt=(ze[8]-1)/ze[0],wt=(ct[8]+1)/ct[0],Ht=Mt*mt,Et=Mt*wt,at=et/(-mt+wt),se=at*-mt;if(le.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(se),ue.translateZ(at),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),ze[10]===-1)ue.projectionMatrix.copy(le.projectionMatrix),ue.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let H=Mt+at,be=st+at,fe=Ht-se,I=Et+(et-se),v=tt*st/be*H,Z=Ft*st/be*H;ue.projectionMatrix.makePerspective(fe,I,v,Z,H,be),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function Be(ue,le){le===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(le.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(r===null)return;let le=ue.near,Te=ue.far;x.texture!==null&&(x.depthNear>0&&(le=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),z.near=k.near=W.near=le,z.far=k.far=W.far=Te,(A!==z.near||D!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),A=z.near,D=z.far),z.layers.mask=ue.layers.mask|6,W.layers.mask=z.layers.mask&-5,k.layers.mask=z.layers.mask&-3;let et=ue.parent,ze=z.cameras;Be(z,et);for(let ct=0;ct<ze.length;ct++)Be(ze[ct],et);ze.length===2?xe(z,W,k):z.projectionMatrix.copy(W.projectionMatrix),O===null&&ue.isPerspectiveCamera&&(O={camera:ue,fov:ue.fov,zoom:ue.zoom}),Ae(ue,z,et)};function Ae(ue,le,Te){Te===null?ue.matrix.copy(le.matrixWorld):(ue.matrix.copy(Te.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(le.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(le.projectionMatrix),ue.projectionMatrixInverse.copy(le.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=ur*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(ue){c=ue,u!==null&&(u.fixedFoveation=ue),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ue)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(ue){return f[ue]};let Je=null;function Ee(ue,le){if(d=le.getViewerPose(l||o),m=le,d!==null){let Te=d.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let et=!1;Te.length!==z.cameras.length&&(z.cameras.length=0,et=!0);for(let st=0;st<Te.length;st++){let tt=Te[st],Ft=null;if(h!==null)Ft=h.getViewport(tt);else{let wt=p.getViewSubImage(u,tt);Ft=wt.viewport,st===0&&(e.setRenderTargetTextures(w,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(w))}let mt=V[st];mt===void 0&&(mt=new wn,mt.layers.enable(st),mt.viewport=new Wt,V[st]=mt),mt.matrix.fromArray(tt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(tt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),st===0&&(z.matrix.copy(mt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),et===!0&&z.cameras.push(mt)}let ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let st=p.getDepthInformation(Te[0]);st&&st.isValid&&st.texture&&x.init(st,r.renderState)}if(ze&&ze.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let st=0;st<Te.length;st++){let tt=Te[st].camera;if(tt){let Ft=f[tt];Ft||(Ft=new Bs,f[tt]=Ft);let mt=p.getCameraImage(tt);Ft.sourceTexture=mt}}}}for(let Te=0;Te<S.length;Te++){let et=T[Te],ze=S[Te];et!==null&&ze!==void 0&&ze.update(et,le,l||o)}Je&&Je(ue,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}let qe=new qu;qe.setAnimationLoop(Ee),this.setAnimationLoop=function(ue){Je=ue},this.dispose=function(){}}},wx=new it,Qu=new _t;Qu.set(-1,0,0,0,1,0,0,0,1);function bx(i,e){function t(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function n(x,f){f.color.getRGB(x.fogColor.value,Ll(i)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,E,R,w){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(x,f):f.isMeshLambertMaterial?(s(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(x,f),p(x,f)):f.isMeshPhongMaterial?(s(x,f),d(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(x,f),u(x,f),f.isMeshPhysicalMaterial&&h(x,f,w)):f.isMeshMatcapMaterial?(s(x,f),m(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),M(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(o(x,f),f.isLineDashedMaterial&&a(x,f)):f.isPointsMaterial?c(x,f,E,R):f.isSpriteMaterial?l(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,t(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===xn&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,t(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===xn&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,t(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,t(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);let E=e.get(f),R=E.envMap,w=E.envMapRotation;R&&(x.envMap.value=R,x.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(w)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Qu),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,x.aoMapTransform))}function o(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform))}function a(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function c(x,f,E,R){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*E,x.scale.value=R*.5,f.map&&(x.map.value=f.map,t(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function l(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function d(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function u(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function h(x,f,E){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xn&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.retroreflectivity>0&&(x.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,f){f.matcap&&(x.matcap.value=f.matcap)}function M(x,f){let E=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Tx(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let T=S.program;n.uniformBlockBinding(w,T)}function l(w,S){let T=r[w.id];T===void 0&&(x(w),T=d(w),r[w.id]=T,w.addEventListener("dispose",E));let U=S.program;n.updateUBOMapping(w,U);let _=e.render.frame;s[w.id]!==_&&(u(w),s[w.id]=_)}function d(w){let S=p();w.__bindingPointIndex=S;let T=i.createBuffer(),U=w.__size,_=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function p(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let S=r[w.id],T=w.uniforms,U=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,O=T.length;_<O;_++){let W=T[_];if(Array.isArray(W))for(let k=0,V=W.length;k<V;k++)h(W[k],_,k,U);else h(W,_,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(w,S,T,U){if(M(w,S,T,U)===!0){let _=w.__offset,O=w.value;if(Array.isArray(O)){let W=0;for(let k=0;k<O.length;k++){let V=O[k],z=f(V);m(V,w.__data,W),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(O,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,w.__data)}}function m(w,S,T){typeof w=="number"||typeof w=="boolean"?S[0]=w:w.isMatrix3?(S[0]=w.elements[0],S[1]=w.elements[1],S[2]=w.elements[2],S[3]=0,S[4]=w.elements[3],S[5]=w.elements[4],S[6]=w.elements[5],S[7]=0,S[8]=w.elements[6],S[9]=w.elements[7],S[10]=w.elements[8],S[11]=0):ArrayBuffer.isView(w)?S.set(new w.constructor(w.buffer,w.byteOffset,S.length)):w.toArray(S,T)}function M(w,S,T,U){let _=w.value,O=S+"_"+T;if(U[O]===void 0)return typeof _=="number"||typeof _=="boolean"?U[O]=_:ArrayBuffer.isView(_)?U[O]=_.slice():U[O]=_.clone(),!0;{let W=U[O];if(typeof _=="number"||typeof _=="boolean"){if(W!==_)return U[O]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(W.equals(_)===!1)return W.copy(_),!0}}return!1}function x(w){let S=w.uniforms,T=0,U=16;for(let O=0,W=S.length;O<W;O++){let k=Array.isArray(S[O])?S[O]:[S[O]];for(let V=0,z=k.length;V<z;V++){let A=k[V],D=Array.isArray(A.value)?A.value:[A.value];for(let J=0,$=D.length;J<$;J++){let he=D[J],te=f(he),re=T%U,xe=re%te.boundary,Be=re+xe;T+=xe,Be!==0&&U-Be<te.storage&&(T+=U-Be),A.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,T+=te.storage}}}let _=T%U;return _>0&&(T+=U-_),w.__size=T,w.__cache={},this}function f(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(S.boundary=16,S.storage=w.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",w),S}function E(w){let S=w.target;S.removeEventListener("dispose",E);let T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function R(){for(let w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:R}}var Ax=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function Rx(){return bi===null&&(bi=new pr(Ax,16,16,rr,Bn),bi.name="DFG_LUT",bi.minFilter=gn,bi.magFilter=gn,bi.wrapS=pi,bi.wrapT=pi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var xc=class{constructor(e={}){let{canvas:t=yu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=kn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let M=h,x=new Set([Da,Na,La]),f=new Set([kn,ci,is,rs,Pa,Ia]),E=new Uint32Array(4),R=new Int32Array(4),w=new B,S=null,T=null,U=[],_=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let W=this,k=!1,V=null,z=null,A=null,D=null;this._outputColorSpace=Sn;let J=0,$=0,he=null,te=-1,re=null,xe=new Wt,Be=new Wt,Ae=null,Je=new ke(0),Ee=0,qe=t.width,ue=t.height,le=1,Te=null,et=null,ze=new Wt(0,0,qe,ue),ct=new Wt(0,0,qe,ue),Mt=!1,st=new Jr,tt=!1,Ft=!1,mt=new it,wt=new B,Ht=new Wt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function se(){return he===null?le:1}let H=n;function be(y,P){return t.getContext(y,P)}let fe,I,v,Z,ee,oe,ae,de,Q,ne,ce,ye,me,ve,_e,Pe,Se,K,we,pe,De,Ue,Me;try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wa}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",rn,!1),H===null){let P="webgl2";if(H=be(P,y),H===null)throw be(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(y){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),pt("WebGLRenderer: "+y.message),y}function $e(){fe=new Um(H),fe.init(),De=new Mx(H,fe),I=new bm(H,fe,e,De),v=new vx(H,fe),I.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),z=H.createFramebuffer(),A=H.createFramebuffer(),D=H.createFramebuffer(),Z=new Om(H),ee=new sx,oe=new _x(H,fe,v,ee,I,De,Z),ae=new Dm(W),de=new Hf(H),Ue=new Sm(H,de),Q=new Fm(H,de,Z,Ue),ne=new Hm(H,Q,de,Ue,Z),K=new zm(H,I,oe),_e=new Tm(ee),ce=new rx(W,ae,fe,I,Ue,_e),ye=new bx(W,ee),me=new ax,ve=new fx(fe),Se=new Em(W,ae,v,ne,m,c),Pe=new yx(W,ne,I),Me=new Tx(H,Z,I,v),we=new wm(H,fe,Z),pe=new Bm(H,fe,Z),Z.programs=ce.programs,W.capabilities=I,W.extensions=fe,W.properties=ee,W.renderLists=me,W.shadowMap=Pe,W.state=v,W.info=Z}M!==kn&&(O=new Gm(M,t.width,t.height,a,r,s));let Ye=new th(W,H);this.xr=Ye,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let y=fe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=fe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(y){y!==void 0&&(le=y,this.setSize(qe,ue,!1))},this.getSize=function(y){return y.set(qe,ue)},this.setSize=function(y,P,G=!0){if(Ye.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=y,ue=P,t.width=Math.floor(y*le),t.height=Math.floor(P*le),G===!0&&(t.style.width=y+"px",t.style.height=P+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(qe*le,ue*le).floor()},this.setDrawingBufferSize=function(y,P,G){qe=y,ue=P,le=G,t.width=Math.floor(y*G),t.height=Math.floor(P*G),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(M===kn){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(xe)},this.getViewport=function(y){return y.copy(ze)},this.setViewport=function(y,P,G,X){y.isVector4?ze.set(y.x,y.y,y.z,y.w):ze.set(y,P,G,X),v.viewport(xe.copy(ze).multiplyScalar(le).round())},this.getScissor=function(y){return y.copy(ct)},this.setScissor=function(y,P,G,X){y.isVector4?ct.set(y.x,y.y,y.z,y.w):ct.set(y,P,G,X),v.scissor(Be.copy(ct).multiplyScalar(le).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(y){v.setScissorTest(Mt=y)},this.setOpaqueSort=function(y){Te=y},this.setTransparentSort=function(y){et=y},this.getClearColor=function(y){return y.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,G=!0){let X=0;if(y){let Y=!1;if(he!==null){let ge=he.texture.format;Y=x.has(ge)}if(Y){let ge=he.texture.type,Ce=f.has(ge),Re=Se.getClearColor(),Ie=Se.getClearAlpha(),Oe=Re.r,rt=Re.g,ot=Re.b;Ce?(E[0]=Oe,E[1]=rt,E[2]=ot,E[3]=Ie,H.clearBufferuiv(H.COLOR,0,E)):(R[0]=Oe,R[1]=rt,R[2]=ot,R[3]=Ie,H.clearBufferiv(H.COLOR,0,R))}else X|=H.COLOR_BUFFER_BIT}P&&(X|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),V=y},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Se.dispose(),me.dispose(),ve.dispose(),ee.dispose(),ae.dispose(),ne.dispose(),Ue.dispose(),Me.dispose(),ce.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",un),Ye.removeEventListener("sessionend",qt),_n.stop()};function nt(y){y.preventDefault(),Rl("WebGLRenderer: Context Lost."),k=!0}function Pt(){Rl("WebGLRenderer: Context Restored."),k=!1;let y=Z.autoReset,P=Pe.enabled,G=Pe.autoUpdate,X=Pe.needsUpdate,Y=Pe.type;$e(),Z.autoReset=y,Pe.enabled=P,Pe.autoUpdate=G,Pe.needsUpdate=X,Pe.type=Y}function rn(y){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function on(y){let P=y.target;P.removeEventListener("dispose",on),sn(P)}function sn(y){ie(y),ee.remove(y)}function ie(y){let P=ee.get(y).programs;P!==void 0&&(P.forEach(function(G){ce.releaseProgram(G)}),y.isShaderMaterial&&ce.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,G,X,Y,ge){P===null&&(P=Et);let Ce=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Re=b(y,P,G,X,Y);v.setMaterial(X,Ce);let Ie=G.index,Oe=1;if(X.wireframe===!0){if(Ie=Q.getWireframeAttribute(G),Ie===void 0)return;Oe=2}let rt=G.drawRange,ot=G.attributes.position,Ve=rt.start*Oe,gt=(rt.start+rt.count)*Oe;ge!==null&&(Ve=Math.max(Ve,ge.start*Oe),gt=Math.min(gt,(ge.start+ge.count)*Oe)),Ie!==null?(Ve=Math.max(Ve,0),gt=Math.min(gt,Ie.count)):ot!=null&&(Ve=Math.max(Ve,0),gt=Math.min(gt,ot.count));let Ke=gt-Ve;if(Ke<0||Ke===1/0)return;Ue.setup(Y,X,Re,G,Ie);let vt,St=we;if(Ie!==null&&(vt=de.get(Ie),St=pe,St.setIndex(vt)),Y.isMesh)X.wireframe===!0?(v.setLineWidth(X.wireframeLinewidth*se()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(Y.isLine){let ln=X.linewidth;ln===void 0&&(ln=1),v.setLineWidth(ln*se()),Y.isLineSegments?St.setMode(H.LINES):Y.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else Y.isPoints?St.setMode(H.POINTS):Y.isSprite&&St.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let ln=Y._multiDrawStarts,Qe=Y._multiDrawCounts,An=Y._multiDrawCount,Bt=Ie?de.get(Ie).bytesPerElement:1,On=ee.get(X).currentProgram.getUniforms();for(let Dn=0;Dn<An;Dn++)On.setValue(H,"_gl_DrawID",Dn),St.render(ln[Dn]/Bt,Qe[Dn])}else if(Y.isInstancedMesh)St.renderInstances(Ve,Ke,Y.count);else if(G.isInstancedBufferGeometry){let ln=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Qe=Math.min(G.instanceCount,ln);St.renderInstances(Ve,Ke,Qe)}else St.render(Ve,Ke)};function Ge(y,P,G,X){V!==null&&y.isNodeMaterial&&V.setObject(X,y),tt===!0&&_e.setState(y,G,!1),y.transparent===!0&&y.side===nn&&y.forceSinglePass===!1?(y.side=xn,y.needsUpdate=!0,Gn(y,P,X),y.side=Si,y.needsUpdate=!0,Gn(y,P,X),y.side=nn):Gn(y,P,X)}this.compile=function(y,P,G=null){G===null&&(G=y),V!==null&&V.renderStart(y,P,G),T=ve.get(G),T.init(P),_.push(T),G.traverseVisible(function(Y){Y.isLight&&Y.layers.test(P.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),y!==G&&y.traverseVisible(function(Y){Y.isLight&&Y.layers.test(P.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),Ft=this.localClippingEnabled,tt=_e.init(this.clippingPlanes,Ft),tt===!0&&_e.setGlobalState(this.clippingPlanes,P),V!==null&&Pe.render(T.state.shadowsArray,G,P);let X=new Set;return y.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ge=Y.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){let Re=ge[Ce];Ge(Re,G,P,Y),X.add(Re)}else Ge(ge,G,P,Y),X.add(ge)}),T=_.pop(),V!==null&&V.renderEnd(),X},this.compileAsync=function(y,P,G=null){let X=this.compile(y,P,G);return new Promise(Y=>{function ge(){if(X.forEach(function(Ce){let Ie=ee.get(Ce).currentProgram;(Ie===void 0||Ie.isReady())&&X.delete(Ce)}),X.size===0){Y(y);return}setTimeout(ge,10)}fe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let He=null;function yt(y){He&&He(y)}function un(){_n.stop()}function qt(){_n.start()}let _n=new qu;_n.setAnimationLoop(yt),typeof self!="undefined"&&_n.setContext(self),this.setAnimationLoop=function(y){He=y,Ye.setAnimationLoop(y),y===null?_n.stop():_n.start()},Ye.addEventListener("sessionstart",un),Ye.addEventListener("sessionend",qt),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;V!==null&&V.renderStart(y,P);let G=Ye.enabled===!0&&Ye.isPresenting===!0,X=O!==null&&(he===null||G)&&O.begin(W,he);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(P),P=Ye.getCamera()),y.isScene===!0&&y.onBeforeRender(W,y,P,he),T=ve.get(y,_.length),T.init(P),T.state.textureUnits=oe.getTextureUnits(),_.push(T),mt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),st.setFromProjectionMatrix(mt,si,P.reversedDepth),Ft=this.localClippingEnabled,tt=_e.init(this.clippingPlanes,Ft),S=me.get(y,U.length),S.init(),U.push(S),Ye.enabled===!0&&Ye.isPresenting===!0){let Ce=W.xr.getDepthSensingMesh();Ce!==null&&It(Ce,P,-1/0,W.sortObjects)}It(y,P,0,W.sortObjects),S.finish(),V!==null&&V.updateLights(T.state.lightsArray),W.sortObjects===!0&&S.sort(Te,et),at=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,at&&Se.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&_e.beginShadows();let Y=T.state.shadowsArray;if(Pe.render(Y,y,P),tt===!0&&_e.endShadows(),(X&&O.hasRenderPass())===!1){let Ce=S.opaque,Re=S.transmissive;if(T.setupLights(),P.isArrayCamera){let Ie=P.cameras;if(Re.length>0)for(let Oe=0,rt=Ie.length;Oe<rt;Oe++){let ot=Ie[Oe];ti(Ce,Re,y,ot)}at&&Se.render(y);for(let Oe=0,rt=Ie.length;Oe<rt;Oe++){let ot=Ie[Oe];ui(S,y,ot,ot.viewport)}}else Re.length>0&&ti(Ce,Re,y,P),at&&Se.render(y),ui(S,y,P)}he!==null&&$===0&&(oe.updateMultisampleRenderTarget(he),oe.updateRenderTargetMipmap(he)),X&&O.end(W),y.isScene===!0&&y.onAfterRender(W,y,P),Ue.resetDefaultState(),te=-1,re=null,_.pop(),_.length>0?(T=_[_.length-1],oe.setTextureUnits(T.state.textureUnits),tt===!0&&_e.setGlobalState(W.clippingPlanes,T.state.camera)):T=null,U.pop(),U.length>0?S=U[U.length-1]:S=null,V!==null&&V.renderEnd()};function It(y,P,G,X){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(st)){X&&Ht.setFromMatrixPosition(y.matrixWorld).applyMatrix4(mt);let Ce=ne.update(y),Re=y.material;Re.visible&&S.push(y,Ce,Re,G,Ht.z,null,P)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(st))){let Ce=ne.update(y),Re=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ht.copy(y.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ht.copy(Ce.boundingSphere.center)),Ht.applyMatrix4(y.matrixWorld).applyMatrix4(mt)),Array.isArray(Re)){let Ie=Ce.groups;for(let Oe=0,rt=Ie.length;Oe<rt;Oe++){let ot=Ie[Oe],Ve=Re[ot.materialIndex];Ve&&Ve.visible&&S.push(y,Ce,Ve,G,Ht.z,ot,P)}}else Re.visible&&S.push(y,Ce,Re,G,Ht.z,null,P)}}let ge=y.children;for(let Ce=0,Re=ge.length;Ce<Re;Ce++)It(ge[Ce],P,G,X)}function ui(y,P,G,X){let{opaque:Y,transmissive:ge,transparent:Ce}=y;T.setupLightsView(G),tt===!0&&_e.setGlobalState(W.clippingPlanes,G),X&&v.viewport(xe.copy(X)),Y.length>0&&Mn(Y,P,G),ge.length>0&&Mn(ge,P,G),Ce.length>0&&Mn(Ce,P,G),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ti(y,P,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let Ve=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Ln(1,1,{generateMipmaps:!0,type:Ve?Bn:kn,minFilter:nr,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}let ge=T.state.transmissionRenderTarget[X.id],Ce=X.viewport||xe;ge.setSize(Ce.z*W.transmissionResolutionScale,Ce.w*W.transmissionResolutionScale);let Re=W.getRenderTarget(),Ie=W.getActiveCubeFace(),Oe=W.getActiveMipmapLevel();W.setRenderTarget(ge),W.getClearColor(Je),Ee=W.getClearAlpha(),Ee<1&&W.setClearColor(16777215,.5),W.clear(),at&&Se.render(G);let rt=W.toneMapping;W.toneMapping=ai;let ot=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),tt===!0&&_e.setGlobalState(W.clippingPlanes,X),Mn(y,G,X),oe.updateMultisampleRenderTarget(ge),oe.updateRenderTargetMipmap(ge),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let gt=0,Ke=P.length;gt<Ke;gt++){let vt=P[gt],{object:St,geometry:ln,material:Qe,group:An}=vt;if(Qe.side===nn&&St.layers.test(X.layers)){let Bt=Qe.side;Qe.side=xn,Qe.needsUpdate=!0,di(St,G,X,ln,Qe,An),Qe.side=Bt,Qe.needsUpdate=!0,Ve=!0}}Ve===!0&&(oe.updateMultisampleRenderTarget(ge),oe.updateRenderTargetMipmap(ge))}W.setRenderTarget(Re,Ie,Oe),W.setClearColor(Je,Ee),ot!==void 0&&(X.viewport=ot),W.toneMapping=rt}function Mn(y,P,G){let X=P.isScene===!0?P.overrideMaterial:null;for(let Y=0,ge=y.length;Y<ge;Y++){let Ce=y[Y],{object:Re,geometry:Ie,group:Oe}=Ce,rt=Ce.material;rt.allowOverride===!0&&X!==null&&(rt=X),Re.layers.test(G.layers)&&di(Re,P,G,Ie,rt,Oe)}}function di(y,P,G,X,Y,ge){V!==null&&Y.isNodeMaterial&&V.setObject(y,Y),y.onBeforeRender(W,P,G,X,Y,ge),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Y.onBeforeRender(W,P,G,X,y,ge),Y.transparent===!0&&Y.side===nn&&Y.forceSinglePass===!1?(Y.side=xn,Y.needsUpdate=!0,W.renderBufferDirect(G,P,X,Y,y,ge),Y.side=Si,Y.needsUpdate=!0,W.renderBufferDirect(G,P,X,Y,y,ge),Y.side=nn):W.renderBufferDirect(G,P,X,Y,y,ge),y.onAfterRender(W,P,G,X,Y,ge)}function Gn(y,P,G){P.isScene!==!0&&(P=Et);let X=ee.get(y),Y=T.state.lights,ge=T.state.shadowsArray,Ce=Y.state.version,Re=ce.getParameters(y,Y.state,ge,P,G,T.state.lightProbeGridArray),Ie=ce.getProgramCacheKey(Re),Oe=X.programs;X.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,X.fog=P.fog;let rt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;X.envMap=ae.get(y.envMap||X.environment,rt),X.envMapRotation=X.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Oe===void 0&&(y.addEventListener("dispose",on),Oe=new Map,X.programs=Oe);let ot=Oe.get(Ie);if(ot!==void 0){if(X.currentProgram===ot&&X.lightsStateVersion===Ce)return q(y,Re),ot}else Re.uniforms=ce.getUniforms(y),V!==null&&y.isNodeMaterial&&V.build(y,G,Re),y.onBeforeCompile(Re,W),ot=ce.acquireProgram(Re,Ie),Oe.set(Ie,ot),X.uniforms=Re.uniforms;let Ve=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ve.clippingPlanes=_e.uniform),q(y,Re),X.needsLights=F(y),X.lightsStateVersion=Ce,X.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.sunLights.value=Y.state.sun,Ve.sunLightShadows.value=Y.state.sunShadow,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ve.sunShadowCascade.value=Y.state.sunShadowCascade,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=ot,X.uniformsList=null,ot}function L(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=ls.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function q(y,P){let G=ee.get(y);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function g(y,P){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;w.setFromMatrixPosition(P.matrixWorld);for(let G=0,X=y.length;G<X;G++){let Y=y[G];if(Y.texture!==null&&Y.boundingBox.containsPoint(w))return Y}return null}function b(y,P,G,X,Y){P.isScene!==!0&&(P=Et),oe.resetTextureUnits();let ge=P.fog,Ce=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?P.environment:null,Re=he===null?W.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Nt.workingColorSpace,Ie=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Oe=ae.get(X.envMap||Ce,Ie),rt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ot=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ve=!!G.morphAttributes.position,gt=!!G.morphAttributes.normal,Ke=!!G.morphAttributes.color,vt=ai;X.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(vt=W.toneMapping);let St=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ln=St!==void 0?St.length:0,Qe=ee.get(X),An=T.state.lights;if(tt===!0&&(Ft===!0||y!==re)){let $t=y===re&&X.id===te;_e.setState(X,y,$t)}let Bt=!1;X.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==An.state.version||Qe.outputColorSpace!==Re||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isBatchedMesh&&Qe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Qe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qe.instancingMorph===!1&&Y.morphTexture!==null||Qe.envMap!==Oe||X.fog===!0&&Qe.fog!==ge||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==_e.numPlanes||Qe.numIntersection!==_e.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==ot||Qe.morphTargets!==Ve||Qe.morphNormals!==gt||Qe.morphColors!==Ke||Qe.toneMapping!==vt||Qe.morphTargetsCount!==ln||!!Qe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Bt=!0):(Bt=!0,Qe.__version=X.version);let On=Qe.currentProgram;Bt===!0&&(On=Gn(X,P,Y),V&&X.isNodeMaterial&&V.onUpdateProgram(X,On,Qe));let Dn=!1,Zn=!1,Ci=!1,kt=On.getUniforms(),en=Qe.uniforms;if(v.useProgram(On.program)&&(Dn=!0,Zn=!0,Ci=!0),X.id!==te&&(te=X.id,Zn=!0),Qe.needsLights){let $t=g(T.state.lightProbeGridArray,Y);Qe.lightProbeGrid!==$t&&(Qe.lightProbeGrid=$t,Zn=!0)}if(Dn||re!==y){v.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),kt.setValue(H,"projectionMatrix",y.projectionMatrix),kt.setValue(H,"viewMatrix",y.matrixWorldInverse);let Wi=kt.map.cameraPosition;Wi!==void 0&&Wi.setValue(H,wt.setFromMatrixPosition(y.matrixWorld)),I.logarithmicDepthBuffer&&kt.setValue(H,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&kt.setValue(H,"isOrthographic",y.isOrthographicCamera===!0),re!==y&&(re=y,Zn=!0,Ci=!0)}if(Qe.needsLights&&(An.state.sunShadowMap.length>0&&kt.setValue(H,"sunShadowMap",An.state.sunShadowMap,oe),An.state.directionalShadowMap.length>0&&kt.setValue(H,"directionalShadowMap",An.state.directionalShadowMap,oe),An.state.spotShadowMap.length>0&&kt.setValue(H,"spotShadowMap",An.state.spotShadowMap,oe),An.state.pointShadowMap.length>0&&kt.setValue(H,"pointShadowMap",An.state.pointShadowMap,oe)),Y.isSkinnedMesh){kt.setOptional(H,Y,"bindMatrix"),kt.setOptional(H,Y,"bindMatrixInverse");let $t=Y.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),kt.setValue(H,"boneTexture",$t.boneTexture,oe))}Y.isBatchedMesh&&(kt.setOptional(H,Y,"batchingTexture"),kt.setValue(H,"batchingTexture",Y._matricesTexture,oe),kt.setOptional(H,Y,"batchingIdTexture"),kt.setValue(H,"batchingIdTexture",Y._indirectTexture,oe),kt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&kt.setValue(H,"batchingColorTexture",Y._colorsTexture,oe));let Vi=G.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&K.update(Y,G,On),(Zn||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,kt.setValue(H,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&P.environment!==null&&(en.envMapIntensity.value=P.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Rx()),Zn){if(kt.setValue(H,"toneMappingExposure",W.toneMappingExposure),Qe.needsLights&&C(en,Ci),ge&&X.fog===!0&&ye.refreshFogUniforms(en,ge),ye.refreshMaterialUniforms(en,X,le,ue,T.state.transmissionRenderTarget[y.id]),Qe.needsLights&&Qe.lightProbeGrid){let $t=Qe.lightProbeGrid;en.probesSH.value=$t.texture,en.probesMin.value.copy($t.boundingBox.min),en.probesMax.value.copy($t.boundingBox.max),en.probesResolution.value.copy($t.resolution)}ls.upload(H,L(Qe),en,oe)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ls.upload(H,L(Qe),en,oe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&kt.setValue(H,"center",Y.center),kt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),kt.setValue(H,"normalMatrix",Y.normalMatrix),kt.setValue(H,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let $t=X.uniformsGroups;for(let Wi=0,br=$t.length;Wi<br;Wi++){let nh=$t[Wi];Me.update(nh,On),Me.bind(nh,On)}}return On}function C(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function F(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(y,P,G){let X=ee.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ee.get(y.texture).__webglTexture=P,ee.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let G=ee.get(y);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,G=0){he=y,J=P,$=G;let X=null,Y=!1,ge=!1;if(y){let Re=ee.get(y);if(Re.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,Re.__webglFramebuffer),xe.copy(y.viewport),Be.copy(y.scissor),Ae=y.scissorTest,v.viewport(xe),v.scissor(Be),v.setScissorTest(Ae),te=-1;return}else if(Re.__webglFramebuffer===void 0)oe.setupRenderTarget(y);else if(Re.__hasExternalTextures)oe.rebindTextures(y,ee.get(y.texture).__webglTexture,ee.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let rt=y.depthTexture;if(Re.__boundDepthTexture!==rt){if(rt!==null&&ee.has(rt)&&(y.width!==rt.image.width||y.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(y)}}let Ie=y.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ge=!0);let Oe=ee.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[P])?X=Oe[P][G]:X=Oe[P],Y=!0):y.samples>0&&oe.useMultisampledRTT(y)===!1?X=ee.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[G]:X=Oe,xe.copy(y.viewport),Be.copy(y.scissor),Ae=y.scissorTest}else xe.copy(ze).multiplyScalar(le).floor(),Be.copy(ct).multiplyScalar(le).floor(),Ae=Mt;if(G!==0&&(X=z),v.bindFramebuffer(H.FRAMEBUFFER,X)&&v.drawBuffers(y,X),v.viewport(xe),v.scissor(Be),v.setScissorTest(Ae),Y){let Re=ee.get(y.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+P,Re.__webglTexture,G)}else if(ge){let Re=P;for(let Ie=0;Ie<y.textures.length;Ie++){let Oe=ee.get(y.textures[Ie]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,G,Re)}}else if(y!==null&&G!==0){let Re=ee.get(y.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Re.__webglTexture,G)}te=-1};function j(y){let P=ee.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=I.textureFormatReadable(y.format),P.__typeReadable=I.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,G,X,Y,ge,Ce,Re=0){if(!(y&&y.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){v.bindFramebuffer(H.FRAMEBUFFER,Ie);try{let Oe=y.textures[Re],rt=Oe.format,ot=Oe.type;y.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Re);let Ve=j(Oe);if(Ve.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-X&&G>=0&&G<=y.height-Y&&H.readPixels(P,G,X,Y,De.convert(rt),De.convert(ot),ge)}finally{let Oe=he!==null?ee.get(he).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(y,P,G,X,Y,ge,Ce,Re=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(P>=0&&P<=y.width-X&&G>=0&&G<=y.height-Y){v.bindFramebuffer(H.FRAMEBUFFER,Ie);let Oe=y.textures[Re],rt=Oe.format,ot=Oe.type;y.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Re);let Ve=j(Oe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,gt),H.bufferData(H.PIXEL_PACK_BUFFER,ge.byteLength,H.STREAM_READ),H.readPixels(P,G,X,Y,De.convert(rt),De.convert(ot),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ke=he!==null?ee.get(he).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Ke);let vt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _u(H,vt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,gt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ge),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(gt),H.deleteSync(vt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,G=0){let X=Math.pow(2,-G),Y=Math.floor(y.image.width*X),ge=Math.floor(y.image.height*X),Ce=P!==null?P.x:0,Re=P!==null?P.y:0;oe.setTexture2D(y,0),H.copyTexSubImage2D(H.TEXTURE_2D,G,0,0,Ce,Re,Y,ge),v.unbindTexture()},this.copyTextureToTexture=function(y,P,G=null,X=null,Y=0,ge=0){let Ce,Re,Ie,Oe,rt,ot,Ve,gt,Ke,vt=y.isCompressedTexture?y.mipmaps[ge]:y.image;if(G!==null)Ce=G.max.x-G.min.x,Re=G.max.y-G.min.y,Ie=G.isBox3?G.max.z-G.min.z:1,Oe=G.min.x,rt=G.min.y,ot=G.isBox3?G.min.z:0;else{let en=Math.pow(2,-Y);Ce=Math.floor(vt.width*en),Re=Math.floor(vt.height*en),y.isDataArrayTexture?Ie=vt.depth:y.isData3DTexture?Ie=Math.floor(vt.depth*en):Ie=1,Oe=0,rt=0,ot=0}X!==null?(Ve=X.x,gt=X.y,Ke=X.z):(Ve=0,gt=0,Ke=0);let St=De.convert(P.format),ln=De.convert(P.type),Qe;P.isData3DTexture?(oe.setTexture3D(P,0),Qe=H.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(oe.setTexture2DArray(P,0),Qe=H.TEXTURE_2D_ARRAY):(oe.setTexture2D(P,0),Qe=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,P.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,P.unpackAlignment);let An=v.getParameter(H.UNPACK_ROW_LENGTH),Bt=v.getParameter(H.UNPACK_IMAGE_HEIGHT),On=v.getParameter(H.UNPACK_SKIP_PIXELS),Dn=v.getParameter(H.UNPACK_SKIP_ROWS),Zn=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Oe),v.pixelStorei(H.UNPACK_SKIP_ROWS,rt),v.pixelStorei(H.UNPACK_SKIP_IMAGES,ot);let Ci=y.isDataArrayTexture||y.isData3DTexture,kt=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let en=ee.get(y),Vi=ee.get(P),$t=ee.get(en.__renderTarget),Wi=ee.get(Vi.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,$t.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let br=0;br<Ie;br++)Ci&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ee.get(y).__webglTexture,Y,ot+br),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ee.get(P).__webglTexture,ge,Ke+br)),H.blitFramebuffer(Oe,rt,Ce,Re,Ve,gt,Ce,Re,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||y.isRenderTargetTexture||ee.has(y)){let en=ee.get(y),Vi=ee.get(P);v.bindFramebuffer(H.READ_FRAMEBUFFER,A),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,D);for(let $t=0;$t<Ie;$t++)Ci?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,Y,ot+$t):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,Y),kt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vi.__webglTexture,ge,Ke+$t):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Vi.__webglTexture,ge),Y!==0?H.blitFramebuffer(Oe,rt,Ce,Re,Ve,gt,Ce,Re,H.COLOR_BUFFER_BIT,H.NEAREST):kt?H.copyTexSubImage3D(Qe,ge,Ve,gt,Ke+$t,Oe,rt,Ce,Re):H.copyTexSubImage2D(Qe,ge,Ve,gt,Oe,rt,Ce,Re);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else kt?y.isDataTexture||y.isData3DTexture?H.texSubImage3D(Qe,ge,Ve,gt,Ke,Ce,Re,Ie,St,ln,vt.data):P.isCompressedArrayTexture?H.compressedTexSubImage3D(Qe,ge,Ve,gt,Ke,Ce,Re,Ie,St,vt.data):H.texSubImage3D(Qe,ge,Ve,gt,Ke,Ce,Re,Ie,St,ln,vt):y.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ge,Ve,gt,Ce,Re,St,ln,vt.data):y.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ge,Ve,gt,vt.width,vt.height,St,vt.data):H.texSubImage2D(H.TEXTURE_2D,ge,Ve,gt,Ce,Re,St,ln,vt);v.pixelStorei(H.UNPACK_ROW_LENGTH,An),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt),v.pixelStorei(H.UNPACK_SKIP_PIXELS,On),v.pixelStorei(H.UNPACK_SKIP_ROWS,Dn),v.pixelStorei(H.UNPACK_SKIP_IMAGES,Zn),ge===0&&P.generateMipmaps&&H.generateMipmap(Qe),v.unbindTexture()},this.initRenderTarget=function(y){ee.get(y).__webglFramebuffer===void 0&&oe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?oe.setTextureCube(y,0):y.isData3DTexture?oe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?oe.setTexture2DArray(y,0):oe.setTexture2D(y,0),v.unbindTexture()},this.resetState=function(){J=0,$=0,he=null,v.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}};var ds=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},sr=(i,e,t)=>{let n=Math.sin(i*127.1+e*269.5+t*311.7)*43758.5453;return n-Math.floor(n)},zt=(i,e,t)=>{let n=Math.floor(i),r=Math.floor(e),s=Math.floor(t),o=i-n,a=e-r,c=t-s,l=o*o*(3-2*o),d=a*a*(3-2*a),p=c*c*(3-2*c),u=(h,m,M)=>h+(m-h)*M;return u(u(u(sr(n,r,s),sr(n+1,r,s),l),u(sr(n,r+1,s),sr(n+1,r+1,s),l),d),u(u(sr(n,r,s+1),sr(n+1,r,s+1),l),u(sr(n,r+1,s+1),sr(n+1,r+1,s+1),l),d),p)},us={plain:0,woodX:1,woodZ:2,woodY:3,stone:4,plaster:5,fabric:6,metal:7,leather:8,logX:9,logZ:10,paper:11,shingle:12},Yt=(i,e)=>(e.kind=i,e),Ot=class{constructor(){this.p=[],this.n=[],this.c=[],this.t=[],this.k=[]}clear(){this.p.length=this.n.length=this.c.length=this.t.length=this.k.length=0}add(e,{m:t=null,color:n=()=>[1,1,1],tip:r=()=>0,flat:s=!1,normal:o=null,flip:a=!1,mat:c=null}={}){var M;let l=e.index?e.toNonIndexed():e.clone();if(t&&l.applyMatrix4(t),(s||!l.attributes.normal)&&l.computeVertexNormals(),a){for(let f of["position","normal","uv"]){let E=l.attributes[f];if(!E)continue;let R=E.array,w=E.itemSize;for(let S=0;S<E.count;S+=3)for(let T=0;T<w;T++){let U=R[(S+1)*w+T];R[(S+1)*w+T]=R[(S+2)*w+T],R[(S+2)*w+T]=U}}let x=l.attributes.normal.array;for(let f=0;f<x.length;f++)x[f]=-x[f]}let d=l.attributes.position,p=l.attributes.normal,u=c;if(u===null){let x=n.kind||"plain";if(x==="wood"||x==="log"){l.computeBoundingBox();let f=new B;l.boundingBox.getSize(f);let E=f.x>=f.y&&f.x>=f.z?"X":f.z>=f.y?"Z":"Y";u=x==="log"?E==="Z"?us.logZ:us.logX:us["wood"+E]}else u=(M=us[x])!=null?M:0}let h=new B,m=new B;for(let x=0;x<d.count;x++){h.fromBufferAttribute(d,x),m.fromBufferAttribute(p,x),o&&o(h,m,x);let f=n(h,m,x);this.p.push(h.x,h.y,h.z),this.n.push(m.x,m.y,m.z),this.c.push(f[0],f[1],f[2]),this.t.push(r(h,m)),this.k.push(u)}return this}tris(e,t,n=()=>0,r=null){var s;for(let o=0;o<e.length;o+=3){let a=new B(...e[o]),c=new B(...e[o+1]),l=new B(...e[o+2]),d=r?r.clone():new B().subVectors(l,c).cross(new B().subVectors(a,c)).normalize(),p=(s=us[t.kind])!=null?s:t.kind==="wood"?us.woodY:0;[a,c,l].forEach(u=>{let h=t(u);this.p.push(u.x,u.y,u.z),this.n.push(d.x,d.y,d.z),this.c.push(h[0],h[1],h[2]),this.t.push(n(u)),this.k.push(p)})}return this}geometry(){let e=new Lt;return e.setAttribute("position",new ut(this.p,3)),e.setAttribute("normal",new ut(this.n,3)),e.setAttribute("color",new ut(this.c,3)),e.setAttribute("aTip",new ut(this.t,1)),e.setAttribute("aMat",new ut(this.k,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}},Ne=(i,e,t,n=.02,r=2)=>{let s=2*r+1,o=new Le(1,1,1,s,s,s),a=[i/2,e/2,t/2],c=Math.min(n,i/2-1e-4,e/2-1e-4,t/2-1e-4),l=o.attributes.position,d=o.attributes.normal,p=[0,0,0],u=[0,0,0];for(let h=0;h<l.count;h++){for(let S=0;S<3;S++){let T=Math.round((l.getComponent(h,S)+.5)*s),U=a[S];p[S]=T<=r?-U+c*(T/r):T>=s-r?U-c*((s-T)/r):0,T>r&&T<s-r&&(p[S]=0),u[S]=Math.max(-(U-c),Math.min(U-c,p[S]))}let m=p[0]-u[0],M=p[1]-u[1],x=p[2]-u[2],f=d.getX(h),E=d.getY(h),R=d.getZ(h);Math.abs(f)>.5&&(m=Math.sign(f)*Math.max(Math.abs(m),1e-6)),Math.abs(E)>.5&&(M=Math.sign(E)*Math.max(Math.abs(M),1e-6)),Math.abs(R)>.5&&(x=Math.sign(R)*Math.max(Math.abs(x),1e-6));let w=Math.hypot(m,M,x)||1;l.setXYZ(h,u[0]+m/w*c,u[1]+M/w*c,u[2]+x/w*c),d.setXYZ(h,m/w,M/w,x/w)}return o},Zt=(i,e=10)=>new zs(i.map(([t,n])=>new Ze(Math.max(5e-4,t),n)),e),N=(i=0,e=0,t=0,n=0,r=0,s=0,o=1,a=o,c=o)=>new it().compose(new B(i,e,t),new ht().setFromEuler(new tn(n,r,s,"YXZ")),new B(o,a,c)),hn=(i,e,{sway:t=0,side:n=Si,color:r=16777215,snowBias:s=0,sink:o=0,softBack:a=!1,crisp:c=!1,snowMask:l=!1,grain:d=0,rich:p=!1,indoor:u=!1,tree:h=!1}={})=>{let m=new mn({vertexColors:!0,side:n,color:r});if(m.onBeforeCompile=M=>{Object.assign(M.uniforms,i,{uShow:e}),M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
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
        ${o?`transformed.y -= (1.0 - uShow) * ${o.toFixed(1)};`:"transformed *= uShow;"}`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uSnowC, uMossC; varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;
        // wood grain + fine speckle, so surfaces feel like real material up close
        float gH(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float gN(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(gH(i), gH(i + vec3(1, 0, 0)), f.x), mix(gH(i + vec3(0, 1, 0)), gH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(gH(i + vec3(0, 0, 1)), gH(i + vec3(1, 0, 1)), f.x), mix(gH(i + vec3(0, 1, 1)), gH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
        float grainH(vec3 p) { return gN(vec3(p.x * 1.3 + p.z * 0.4, p.y * 24.0, p.z * 1.3)) * 0.65 + gN(p * 11.0) * 0.35; }
        ${p?Cx:""}
        varying float vMat; varying vec3 vObjN;
        float gRichH = 0.0; float gAO = 1.0; float gBounce = 0.0;
        ${h?`uniform float uFall, uBloom, uLush; varying float vHash; varying float vLeaf;
        vec3 autumn(float h) {
          return h < 0.25 ? vec3(0.86, 0.42, 0.1) : h < 0.5 ? vec3(0.72, 0.16, 0.08) : h < 0.75 ? vec3(0.92, 0.7, 0.16) : vec3(0.55, 0.3, 0.12);
        }`:""}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        ${a?`#ifdef DOUBLE_SIDED
 normal *= faceDirection;
 #endif`:""}
        ${p?`{
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
        ${p?"gRichH = richSurface(int(vMat + 0.5), vObj, vObjN, diffuseColor.rgb);":d?"diffuseColor.rgb *= 0.84 + 0.3 * grainH(vObj);":""}
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
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC * 0.96, ${c?"smoothstep(0.42, 0.56, vTipA) * 0.95":"clamp(vTipA, 0.0, 0.9)"});`)},u){let M=m.onBeforeCompile;m.onBeforeCompile=x=>{M(x),x.fragmentShader=x.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= 0.62 * gAO;
        reflectedLight.indirectDiffuse += diffuseColor.rgb * gBounce * 0.42;
        reflectedLight.directDiffuse *= mix(1.0, gAO, 0.7);`)}}return m},Cx=`
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
`;function ju({group:i,U:e,beams:t,halos:n,dust:r}){let o={uTime:e.uTime,uBeam:{value:0},uBeamC:{value:new ke(1,.9,.72)},uHalo:{value:1},uDust:{value:0}},a=(p,u,h,m=1.18)=>{let M=new B(...u).normalize().multiplyScalar(h),x=p.map(T=>new B(...T)),f=x.reduce((T,U)=>T.add(U),new B).multiplyScalar(.25),E=x.map(T=>T.clone().sub(f).multiplyScalar(m).add(f).add(M)),R=[],w=[];for(let T=0;T<4;T++){let U=(T+1)%4;[[x[T],0,0],[x[U],1,0],[E[U],1,1],[x[T],0,0],[E[U],1,1],[E[T],0,1]].forEach(([O,W,k])=>{R.push(O.x,O.y,O.z),w.push(T+W,k)})}let S=new Lt;return S.setAttribute("position",new ut(R,3)),S.setAttribute("uv",new ut(w,2)),S.computeVertexNormals(),S},c=p=>new Ut({uniforms:{...o,uK:{value:p}},transparent:!0,depthWrite:!1,side:nn,blending:Yn,vertexShader:`
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
      }`});t.forEach(p=>{let u=new je(a(p.rect,p.dir,p.len,p.spread),c(p.k||1));u.renderOrder=3,u.frustumCulled=!1,i.add(u)});let l=(()=>{let p=new Lt,u=n.length,h=new Float32Array(u*3),m=new Float32Array(u*3),M=new Float32Array(u),x=new Float32Array(u);n.forEach((E,R)=>{h.set(E.p,R*3),m.set(E.color||[1,.75,.45],R*3),M[R]=E.size,x[R]=E.flicker||0}),p.setAttribute("position",new Gt(h,3)),p.setAttribute("aCol",new Gt(m,3)),p.setAttribute("aSize",new Gt(M,1)),p.setAttribute("aFl",new Gt(x,1));let f=new $n(p,new Ut({uniforms:o,transparent:!0,depthWrite:!1,blending:Yn,vertexShader:`
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
        }`}));return f.frustumCulled=!1,f.renderOrder=4,i.add(f),f})(),d=(()=>{let p=[],u=[];r.forEach(({box:[M,x,f,E,R,w],n:S})=>{for(let T=0;T<S;T++)p.push(M+Math.random()*(x-M),f+Math.random()*(E-f),R+Math.random()*(w-R)),u.push(Math.random())});let h=new Lt;h.setAttribute("position",new ut(p,3)),h.setAttribute("aSeed",new ut(u,1));let m=new $n(h,new Ut({uniforms:o,transparent:!0,depthWrite:!1,blending:Yn,vertexShader:`
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
        void main() { float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(1.0, 0.88, 0.7) * smoothstep(1.0, 0.0, d) * vA * 0.5, 1.0); }`}));return m.frustumCulled=!1,m.renderOrder=4,i.add(m),m})();return{update({day:p,beamColor:u,on:h}){o.uBeam.value=h?.05+p*.32:0,u&&o.uBeamC.value.copy(u),o.uHalo.value=h?1:0,o.uDust.value=h?.5+p*.5:0,l.visible=d.visible=h}}}var Xt={x0:-6.5,x1:6.5,z0:-9.5,z1:2.4,floor:-6.6,mezz:-3.4,ceil:-.3},ft={back:-7.6,left:-4.8,right:1.6,slab:.3},Xe={x0:1.95,x1:3,top:2.2,bottom:-1.3},Oi=i=>{let e=(Xe.top-Math.min(Xe.top,Math.max(Xe.bottom,i)))/(Xe.top-Xe.bottom);return .12+(Xt.mezz-.12)*e},Ai={x:.55,z:-.4,r:1.05,turns:1.25},Jt={x0:.55,x1:ft.right,z0:-1.45,z1:-.4},zi={x0:-.95,x1:.95,y0:Xt.floor+.55,y1:Xt.floor+2.62,depth:.42},Tt={x0:-10,x1:10,z0:Xt.z0-11,z1:Xt.z0-zi.depth,y0:Xt.floor-.6,y1:-.55},_c=Xt.mezz-Xt.floor,jn=Math.PI*2,id=(i,e)=>[(Math.atan2(e-Ai.z,i-Ai.x)%jn+jn)%jn,Math.hypot(i-Ai.x,e-Ai.z)],rd=i=>{let e=[];for(let t=0;t<2;t++){let n=(i+jn*t)/(jn*Ai.turns);n<=1&&e.push(Xt.mezz-n*_c)}return e},Hi=(i,e,[t,n,r,s],o=0)=>i>t+o&&i<n-o&&e>r+o&&e<s-o,bt=Xt,Px=[[bt.x0,bt.x1,bt.z0,ft.back],[bt.x0,ft.left,bt.z0,bt.z1],[ft.right,bt.x1,bt.z0,bt.z1],[Jt.x0,Jt.x1,Jt.z0,Jt.z1]],wr=.45,ed=[[bt.x0+wr,bt.x1-wr,bt.z0+wr,ft.back],[bt.x0+wr,ft.left,bt.z0+wr,bt.z1],[ft.right,bt.x1-wr,bt.z0+wr,bt.z1],[Jt.x0,ft.right+.4,Jt.z0,.1]],sd=[[ft.left,ft.back],[ft.right,ft.back],[ft.left,-2.6],[ft.right,-4.4]],Ix=[[-.97,.97,-8.47,-7.53],[-.32,.32,-9.25,-8.5],[-2.95,-.65,-1.9,-.9],[-2.45,-1.15,-3.12,-2.38],[-4.5,-3.5,-3.4,-2.4],[-3.4,-3,-1.1,-.7],[4.15,4.65,1.35,1.85],[-6.5,-5.7,1.4,2.4],...sd.map(([i,e])=>[i-.14,i+.14,e-.14,e+.14])],Lx=[[3.15,4.05,-5.05,-4.15],[3.15,4.05,-3.35,-2.45],[3.35,4.05,-4.1,-3.4],[5.25,5.95,-9.1,-8.3]],jt=.42,td=["#6e2d2a","#2f4a3a","#2a3550","#5a3d26","#7a5a2a","#4a4a4e","#3d2e44","#5e5040","#283c3c","#704030"];function od(i,e,t,n){if(!Hi(i,e,[bt.x0,bt.x1,bt.z0,bt.z1],t))return!0;let[r,s]=id(i,e);if(s<Ai.r+.1){let o=rd(r).find(c=>Math.abs(c-n)<.9),a=Hi(i,e,[Jt.x0,Jt.x1,Jt.z0,Jt.z1])&&n>bt.mezz-.25;if(o!==void 0&&!a){if(s<.1+t*.6)return!0;if(s<Ai.r-.12)return!1;let c=(bt.mezz-o)/_c;return c<.1?!ed.some(l=>Hi(i,e,l,t)):c>.9?nd(i,e,t,!0,r,s):!0}}return n>bt.mezz-.35?!ed.some(o=>Hi(i,e,o,t))||i>Xe.x0-t&&i<Xe.x1+t&&e>Xe.bottom-t&&e<Xe.top+.3&&(Oi(e)>n+.5||e>Xe.bottom+.25&&(i<Xe.x0+t||i>Xe.x1-t))?!0:Lx.some(o=>Hi(i,e,o,-t)):nd(i,e,t,!1,r,s)}function nd(i,e,t,n,r,s){return!!(!Hi(i,e,[bt.x0+.52,bt.x1-.52,bt.z0+.52,bt.z1-.05],t)||Ix.some(o=>Hi(i,e,o,-t))||s<.1+t||!n&&s<Ai.r+.1&&!(r>Math.PI/2-.1&&r<Math.PI+.3))}function ad(i,e){let t=[];if(!Hi(i,e,[bt.x0,bt.x1,bt.z0,bt.z1]))return t;t.push(bt.floor),Px.some(s=>Hi(i,e,s,-.05))&&t.push(bt.mezz);let[n,r]=id(i,e);return r<Ai.r+.08&&r>.04&&t.push(...rd(n)),t}function cd({group:i,mats:e,camera:t,U:n}){let{inn:r}=e,s=bt.floor,o=bt.mezz,a=bt.ceil,c=bt.x0,l=bt.x1,d=bt.z0,p=bt.z1,u=o-ft.slab,h=new Ot,m=new Ot,M=(g,b,C)=>zt(g,b,C),x=(g,b=0)=>Yt("wood",C=>{let F=g*(.86+M(C.x*3,C.y*9,C.z*3)*.28),j=M(C.x*.6,C.y*2,C.z*.6);return[F*(1.04+j*.08+b),F*(.7+j*.04),F*(.47-j*.05-b*.5)]}),f=x(.25),E=x(.35),R=x(.47),w=x(.38,.12),S=(g,b,C,F)=>F?Yt(F,()=>[g,b,C]):()=>[g,b,C],T=Yt("stone",g=>{let b=.42+M(g.x*4,g.y*4,g.z*4)*.22;return[b,b*.96,b*.9]}),U=Yt("plaster",g=>{let b=.7+M(g.x*2,g.y*2,g.z*2)*.07;return[b,b*.95,b*.86]}),_=S(.07,.07,.075,"metal"),O=S(.68,.53,.28,"metal"),W=Yt("leather",g=>{let b=.15+M(g.x*9,g.y*9,g.z*9)*.03;return[b*1.15,b*.6,b*.4]}),k=S(1,.86,.62),V=new B(0,1,0),z=(g,b,C,F=0)=>new it().compose(new B(g,b,C),new ht().setFromAxisAngle(V,F),new B(1,1,1)),A=(g,b,C,F,j=h)=>j.add(b,{m:g.clone().multiply(C),color:F}),D=(g,b,C)=>new Le(g,b,C),J=([g,b,C,F],j,y)=>{for(let P=g,G=0;P<b-.01;P+=.18,G++){let X=Math.min(.18,b-P),Y=G*7%5*.55;for(let ge=C-Y,Ce=0;ge<F;ge+=2.4,Ce++){let Re=Math.max(ge,C),Ie=Math.min(ge+2.4,F);if(Ie-Re<.05)continue;let Oe=y*(.9+(G*7+Ce*3)%5*.035);h.add(D(X-.004,.04,Ie-Re-.004),{m:N(P+X/2,j-.02,(Re+Ie)/2),color:Yt("wood",rt=>{let ot=Oe*(.88+M(rt.x*3,0,rt.z*.8)*.24);return[ot*1.08,ot*.72,ot*.47]})})}}};J([c,l,d,p],s,.3),[[c,l,d,ft.back],[c,ft.left,ft.back,p],[ft.right,l,ft.back,p],[Jt.x0,Jt.x1,Jt.z0,Jt.z1]].forEach(([g,b,C,F])=>{J([g,b,C,F],o,.36),h.add(D(b-g,o-.04-u-.01,F-C),{m:N((g+b)/2,(o-.04+u+.01)/2,(C+F)/2),color:f}),h.add(new xt(b-g,F-C),{m:N((g+b)/2,u+.005,(C+F)/2,Math.PI/2,0,0),color:U})}),[[ft.left,ft.right,ft.back,"x"],[ft.back,p,ft.left,"z"],[ft.back,Jt.z0,ft.right,"z"],[Jt.z1,p,ft.right,"z"],[Jt.x0,Jt.x1,Jt.z0,"x"]].forEach(([g,b,C,F])=>{let j=b-g,y=(g+b)/2;[[o-.04,.06,.05],[o-.17,.035,.03],[u+.03,.06,.05]].forEach(([P,G,X])=>{h.add(Ne(F==="x"?j+.06:X*2,G,F==="x"?X*2:j+.06,.012,1),{m:F==="x"?N(y,P,C):N(C,P,y),color:w})})});for(let g=c+.7;g<l;g+=1.3)h.add(D(.1,.12,ft.back-d),{m:N(g,u-.06,(d+ft.back)/2),color:E});for(let g=ft.back+.9;g<p;g+=1.3)h.add(D(ft.left-c,.12,.1),{m:N((c+ft.left)/2,u-.06,g),color:E}),h.add(D(l-ft.right,.12,.1),{m:N((ft.right+l)/2,u-.06,g),color:E});let te=(g,b)=>{m.add(new Fe(.075,.075,.01,16),{m:N(g,u-.003,b),color:S(1,.92,.76)}),h.add(new Tn(.088,.012,4,18),{m:N(g,u-.004,b,Math.PI/2,0,0),color:S(.8,.78,.72,"metal")})};[-5.35,-3,-.9,.9,3,5.35].forEach(g=>te(g,-8.55)),[-6,-3.4,-.8,1.6].forEach(g=>{te(-5.45,g),te(2.7,g),te(5,g)}),sd.forEach(([g,b])=>{h.add(Ne(.2,u-s,.2,.025,1),{m:N(g,(u+s)/2,b),color:w}),h.add(Ne(.28,.32,.28,.02,1),{m:N(g,s+.16,b),color:E}),h.add(Ne(.3,.06,.3,.02,1),{m:N(g,s+.34,b),color:R}),h.add(Ne(.3,.08,.3,.02,1),{m:N(g,u-.16,b),color:R}),h.add(Ne(.26,.1,.26,.02,1),{m:N(g,u-.06,b),color:E})});let re=Zt([[.026,0],[.026,.05],[.017,.07],[.015,.16],[.03,.3],[.033,.36],[.019,.44],[.014,.58],[.021,.68],[.026,.72],[.016,.76],[.023,.79],[.023,.81]],6),xe=(g,b,C)=>{h.add(Ne(.11,.96,.11,.015,1),{m:N(g,C+.48,b),color:w}),h.add(Ne(.15,.045,.15,.015,1),{m:N(g,C+.98,b),color:f}),h.add(new Dt(.05,10,7),{m:N(g,C+1.04,b),color:w})},Be=(g,b,C,F,j)=>{let y=Math.hypot(C-g,F-b),P=Math.atan2(C-g,F-b),G=(g+C)/2,X=(b+F)/2;h.add(Ne(.075,.06,y,.022,1),{m:N(G,j+.93,X,0,P,0),color:w}),h.add(D(.05,.05,y),{m:N(G,j+.065,X,0,P,0),color:E});let Y=Math.max(1,Math.round(y/.14));for(let ge=1;ge<Y;ge++){let Ce=ge/Y;h.add(re,{m:N(g+(C-g)*Ce,j+.09,b+(F-b)*Ce),color:R})}xe(g,b,j),xe(C,F,j)},Ae=.05;Be(ft.left-Ae,ft.back-Ae,ft.right+Ae,ft.back-Ae,o),Be(ft.left-Ae,ft.back-Ae,ft.left-Ae,p-.06,o),Be(ft.right+Ae,ft.back-Ae,ft.right+Ae,Jt.z0,o),Be(ft.right+Ae,.12,ft.right+Ae,p-.06,o),Be(Jt.x0+.04,Jt.z0+.04,ft.right+Ae,Jt.z0+.04,o),Be(Jt.x0+.04,Jt.z0+.04,Jt.x0+.04,Jt.z1-.12,o);{let g=Ai,b=16,C=jn*g.turns/(b+1);for(let j=0;j<b;j++){let y=(j+1)/(b+1),P=o-y*_c,G=y*jn*g.turns,X=G-C*.5-.04,Y=G+C*.5+.04;h.add(new Fe(g.r,g.r,.055,7,1,!1,Math.PI/2-Y,Y-X),{m:N(g.x,P-.028,g.z),color:w}),h.add(new Fe(g.r-.04,g.r-.04,.03,7,1,!1,Math.PI/2-Y+.02,Y-X-.04),{m:N(g.x,P-.07,g.z),color:f}),[G-C*.25,G+C*.25].forEach(ge=>h.add(re,{m:N(g.x+Math.cos(ge)*(g.r-.06),P,g.z+Math.sin(ge)*(g.r-.06),0,0,0,1,1.07,1),color:R}))}class F extends Hn{constructor(y,P){super(),this.r=y,this.dy=P}getPoint(y,P=new B){let G=y*jn*g.turns;return P.set(g.x+Math.cos(G)*this.r,o-y*_c+this.dy,g.z+Math.sin(G)*this.r)}}h.add(new Mi(new F(g.r-.06,.92),150,.03,6),{color:w}),h.add(new Mi(new F(g.r-.02,-.1),150,.045,6),{color:f}),h.add(new Fe(.07,.07,o+.9-s,12),{m:N(g.x,(o+.9+s)/2,g.z),color:w}),h.add(Zt([[.15,0],[.15,.04],[.1,.07],[.08,.14],[.07,.16]],12),{m:N(g.x,s,g.z),color:f}),h.add(Zt([[.07,0],[.09,.03],[.05,.08],[.06,.14],[.03,.2],[0,.23]],12),{m:N(g.x,o+.9,g.z),color:w})}{let b=(Xe.top-Xe.bottom)/12,C=(Xe.x0+Xe.x1)/2,F=Xe.x1-Xe.x0-.04;for(let P=0;P<12;P++){let G=Xe.top-P*b,X=G-b,Y=Oi(G-b*.5);h.add(Ne(F,.05,b+.04,.012,1),{m:N(C,Y-.025,(X+G)/2),color:R}),h.add(D(F,Math.abs(Oi(G)-Oi(X)),.03),{m:N(C,(Oi(G)+Y)/2,G-.01),color:f})}let j=Math.hypot(Xe.top-Xe.bottom,.12-o),y=Math.atan2(.12-o,Xe.top-Xe.bottom);[Xe.x0,Xe.x1].forEach(P=>{h.add(D(.05,.28,j),{m:N(P,(.12+o)/2-.1,(Xe.top+Xe.bottom)/2,y,0,0),color:E}),h.add(Ne(.06,.06,j,.02,1),{m:N(P,(.12+o)/2+.85,(Xe.top+Xe.bottom)/2,y,0,0),color:w});for(let X=1;X<12;X+=1){let Y=Xe.top-X*b;h.add(re,{m:N(P,Oi(Y),Y,0,0,0,1,1.03,1),color:R})}let G=[[P,o,Xe.bottom+.3],[P,o,Xe.top],[P,Oi(Xe.top)-.15,Xe.top]];h.tris([...G,G[0],G[2],G[1]],E)})}let Je=(g,b)=>g>Xe.x0-.05&&g<Xe.x1+.05&&b>Xe.bottom-.05&&b<Xe.top+.2;for(let g=c;g<l-.01;g+=.5)for(let b=d;b<p-.01;b+=.5)Je(g+.25,b+.25)||h.add(new xt(.5,.5),{m:N(g+.25,a,b+.25,Math.PI/2,0,0),color:U});for(let g=d+1.2;g<p;g+=1.8)(g>Xe.bottom-.1&&g<Xe.top+.2?[[c,Xe.x0-.05],[Xe.x1+.05,l]]:[[c,l]]).forEach(([C,F])=>h.add(Ne(F-C,.22,.2,.02,1),{m:N((C+F)/2,a-.11,g),color:f}));let Ee={x:-1.8,z:-2.75,y:-2.75};h.add(Zt([[.42,0],[.4,-.03],[.3,-.05],[.18,-.07],[.08,-.1],[0,-.1]],24),{m:N(Ee.x,a,Ee.z),color:U});let qe=Yt("wood",g=>{let b=.34+M(g.x*2,g.y*6,g.z*2)*.08;return[b*1.06,b*.74,b*.5]});[["z",d,c,l,1],["z",p,c,l,-1],["x",c,d,p,1],["x",l,d,p,-1]].forEach(([g,b,C,F,j])=>{let y=g==="z"&&b===d?zi:null,P=[];for(let G=C;G<F-.01;G+=.6)P.push(G);P.push(F),y&&(P.push(y.x0,y.x1),P.sort((G,X)=>G-X));for(let G=0;G<P.length-1;G++){let X=P[G],Y=P[G+1]-X;if(Y<.005)continue;let ge=X+Y/2,Ce=(Re,Ie,Oe)=>h.add(new xt(Y,Ie-Re),{m:g==="z"?N(ge,(Re+Ie)/2,b,0,j>0?0:Math.PI,0):N(b,(Re+Ie)/2,ge,0,j>0?Math.PI/2:-Math.PI/2,0),color:Oe});y&&ge>y.x0&&ge<y.x1?(Ce(s,y.y0,T),Ce(y.y1,a,qe)):(Ce(s,s+.9,T),Ce(s+.9,a,qe))}[[s+.9,.06,.05],[s+.06,.12,.03],[a-.07,.14,.09],[a-.17,.05,.05]].forEach(([G,X,Y])=>{(y&&G>y.y0&&G<y.y1?[[C,y.x0-.2],[y.x1+.2,F]]:[[C,F]]).forEach(([Ce,Re])=>{let Ie=Re-Ce,Oe=(Ce+Re)/2;h.add(Ne(g==="z"?Ie:Y,X,g==="z"?Y:Ie,.015,1),{m:g==="z"?N(Oe,G,b+j*Y/2):N(b+j*Y/2,G,Oe),color:E})})})});for(let g=ft.left+.15;g<ft.right-.6;g+=1.07)h.add(Ne(.9,.62,.035,.012,1),{m:N(g+.45,s+.48,p-.02),color:w}),h.add(Ne(.7,.44,.02,.02,1),{m:N(g+.45,s+.48,p-.04),color:E}),h.add(Ne(.9,2.4,.03,.012,1),{m:N(g+.45,u+1.6,p-.02),color:w}),h.add(Ne(.72,2.2,.02,.02,1),{m:N(g+.45,u+1.6,p-.04),color:E});{let g=zi.x0,b=zi.x1,C=zi.y0,F=zi.y1,j=d+.02,y=zi.depth;h.add(new xt(y,F-C),{m:N(g,(C+F)/2,d-y/2,0,Math.PI/2,0),color:T}),h.add(new xt(y,F-C),{m:N(b,(C+F)/2,d-y/2,0,-Math.PI/2,0),color:T}),h.add(new xt(b-g,y),{m:N(0,F,d-y/2,Math.PI/2,0,0),color:T}),h.add(new xt(b-g,y),{m:N(0,C,d-y/2,-Math.PI/2,0,0),color:T});let P=new je(new xt(b-g,F-C),new an({color:13623530,transparent:!0,opacity:.07,depthWrite:!1}));P.position.set(0,(C+F)/2,j+.03),P.renderOrder=2,i.add(P);let G=(X,Y,ge,Ce,Re=.05)=>h.add(Ne(X,Y,Re,.008,1),{m:N(ge,Ce,j+.05),color:R});for(let X=1;X<3;X++)G(.035,F-C,g+X*(b-g)/3,(C+F)/2);for(let X=1;X<5;X++)G(b-g,.035,0,C+X*(F-C)/5);G(.06,F-C,0,(C+F)/2,.07),[-1,1].forEach(X=>h.add(Ne(.14,F-C+.2,.1,.015,1),{m:N(X*(b+.06),(C+F)/2,j+.05),color:w})),h.add(Ne(b-g+.4,.16,.12,.015,1),{m:N(0,F+.08,j+.06),color:w}),h.add(Ne(b-g+.5,.05,.18,.015,1),{m:N(0,F+.18,j+.09),color:E}),h.add(Ne(b-g+.46,.05,.28,.02,1),{m:N(0,C-.02,j+.14),color:R}),h.add(Ne(b-g+.3,.12,.05,.015,1),{m:N(0,C-.11,j+.04),color:w}),[-1,1].forEach(X=>{let Y=X*(b+.33);[[.36,.04,0,F-.02],[.36,.04,0,C+.02],[.04,F-C,-.16,(C+F)/2],[.04,F-C,.16,(C+F)/2],[.36,.04,0,(C+F)/2]].forEach(([ge,Ce,Re,Ie])=>h.add(Ne(ge,Ce,.035,.008,1),{m:N(Y+Re,Ie,j+.03),color:R}));for(let ge=C+.08;ge<F-.06;ge+=.075)Math.abs(ge-(C+F)/2)>.05&&h.add(D(.3,.05,.008),{m:N(Y,ge,j+.03,-.6,0,0),color:E});[C+.3,F-.3].forEach(ge=>h.add(D(.03,.06,.02),{m:N(Y-X*.18,ge,j+.05),color:_}))})}let ue=[],le=(g,b,C,F)=>ue.push({x:g,z:b,ry:C,w:F,base:s,h:2.8,rows:4,rowY0:.86,rowH:.48,cab:.78,pref:[1,2,0,3]}),Te=(g,b,C,F)=>ue.push({x:g,z:b,ry:C,w:F,base:o,h:2.88,rows:5,rowY0:.16,rowH:.5,cab:0,pref:[2,3,1,0,4]});[-2.25,-3.95,2.25,3.95,-5.65,5.65].forEach(g=>le(g,d+jt/2,0,1.7)),[-8,-6,-4,-2,0].forEach(g=>le(c+jt/2,g,Math.PI/2,2)),[-8,-6,-4,-2,0].forEach(g=>le(l-jt/2,g,-Math.PI/2,2)),[-1,1,-3,3,-5,5].forEach(g=>Te(g,d+jt/2,0,2)),[-8,-6,-4,-2,0].forEach(g=>Te(c+jt/2,g,Math.PI/2,2)),[-8,-6,-4,-2,0].forEach(g=>Te(l-jt/2,g,-Math.PI/2,2));let et=ue.map((g,b)=>b),ze=g=>z(g.x,g.base,g.z,g.ry),ct=(g,b,C,F)=>new B(b,C,F).applyMatrix4(ze(g));ue.forEach(g=>{let b=ze(g),C=g.w/2,F=g.rowY0+g.rows*g.rowH,j=(y,P,G)=>A(b,y,P,G);j(D(g.w,g.h-g.cab,.03),N(0,(g.h+g.cab)/2,-jt/2+.015),f),[-1,1].forEach(y=>j(Ne(.06,g.h,jt+.02,.012,1),N(y*(C-.03),g.h/2,.01),E));for(let y=0;y<=g.rows;y++)j(D(g.w-.1,.03,jt-.03),N(0,g.rowY0+y*g.rowH-.015,0),E);for(let y=0;y<g.rows;y++)j(Ne(g.w-.1,.04,.022,.008,1),N(0,g.rowY0+y*g.rowH+.005,jt/2-.006),R);if(j(D(g.w-.1,g.h-F-.06,.03),N(0,(F+g.h-.06)/2,jt/2-.03),w),j(Ne(g.w+.04,.06,jt+.05,.015,1),N(0,g.h-.03,.02),f),j(Ne(g.w+.1,.04,jt+.1,.015,1),N(0,g.h+.01,.04),E),g.cab){j(Ne(g.w,g.cab-.12,jt+.1,.01,1),N(0,.1+(g.cab-.12)/2,.05),E),j(D(g.w-.04,.1,jt+.06),N(0,.05,.03),f),j(Ne(g.w+.04,.045,jt+.16,.014,1),N(0,g.cab-.02,.06),R);let y=(g.w-.12)/2;[-1,1].forEach(P=>{let G=P*(y/2+.015);j(Ne(y-.02,g.cab-.26,.03,.006,1),N(G,.11+(g.cab-.2)/2,jt/2+.11),w),j(Ne(y-.16,g.cab-.42,.02,.02,1),N(G,.11+(g.cab-.2)/2,jt/2+.13),R),j(new Dt(.018,8,6),N(P*.05,.11+(g.cab-.2)/2+.06,jt/2+.15),O)})}else j(Ne(g.w,g.rowY0-.02,jt+.04,.008,1),N(0,(g.rowY0-.02)/2,.02),f)}),h.add(new Fe(.015,.015,12.2,6),{m:N(0,o+2.55,d+jt+.05,0,0,Math.PI/2),color:O});{let C=d+jt+.55;[-.22,.22].forEach(F=>h.add(Ne(.05,2.7,.06,.012,1),{m:N(5.6+F,o+1.33,C-.26,-.2,0,0),color:R}));for(let F=0;F<8;F++){let j=.25+F*.31;h.add(new Fe(.018,.018,.44,6),{m:N(5.6,o+j,C-j*Math.tan(.2)*.98,0,0,Math.PI/2),color:R})}[-.22,.22].forEach(F=>h.add(new Tn(.03,.008,4,10),{m:N(5.6+F,o+2.58,d+jt+.08,0,Math.PI/2,0),color:O}))}{let g=z(0,s,-8);A(g,Ne(1.9,.06,.9,.022,2),N(0,.77,0),w),A(g,D(1.2,.004,.55),N(0,.802,.02),Yt("leather",()=>[.15,.24,.17])),[-1,1].forEach(b=>{A(g,Ne(.5,.66,.82,.012,1),N(b*.65,.41,0),E),A(g,Ne(.54,.08,.86,.015,1),N(b*.65,.04,0),f);for(let C=0;C<3;C++){let F=.2+C*.19;A(g,Ne(.42,.16,.03,.008,1),N(b*.65,F,-.42),w),A(g,Ne(.12,.018,.02,.008,1),N(b*.65,F+.02,-.445),O)}A(g,Ne(.4,.5,.03,.01,1),N(b*.65,.42,.42),w),A(g,Ne(.3,.38,.02,.015,1),N(b*.65,.42,.44),R)}),A(g,Ne(.76,.11,.03,.008,1),N(0,.68,-.42),w),A(g,Ne(.14,.018,.02,.008,1),N(0,.69,-.445),O),A(g,D(.8,.55,.02),N(0,.45,.38),E),A(g,new Fe(.1,.12,.03,16),N(.6,.815,.1),O),A(g,new Fe(.012,.012,.3,6),N(.6,.97,.1),O),A(g,new Dt(1,16,8,0,jn,0,Math.PI/2),N(.6,1.1,.02,0,0,0,.22,.09,.1),S(.12,.34,.2,"metal")),A(g,new Fe(.03,.03,.12,8),N(.6,1.08,.02,0,0,Math.PI/2),k,m),[[.16,.05,[.4,.14,.12]],[.2,.045,[.17,.25,.2]],[.18,.04,[.5,.4,.25]]].forEach(([b,C,F],j)=>A(g,Ne(b*1.4,C,b,.008,1),N(-.62,.8+.025+j*.045,.12,0,j*.2-.2,0),S(...F,"leather"))),A(g,Zt([[.03,0],[.035,.02],[.03,.05],[.012,.06],[.012,.07]],10),N(-.25,.8,.22),S(.1,.12,.16,"metal")),A(g,new Fe(.004,.004,.16,5),N(-.1,.81,.05,0,.5,Math.PI/2),S(.1,.1,.1)),A(g,D(.3,.003,.4),N(.05,.806,-.02,0,-.12,0),S(.9,.87,.78,"paper")),A(g,D(.3,.003,.4),N(.12,.809,0,0,.1,0),S(.92,.9,.82,"paper"))}{let g=z(0,s,-8.88),b=Yt("fabric",F=>Math.sin(F.x*40)*Math.sin(F.y*40+F.z*30)>.35?[.74,.68,.5]:[.42,.48,.38]),C=Zt([[.018,0],[.024,.04],[.018,.12],[.028,.24],[.022,.36],[.026,.42],[.026,.44]],8);[[-.21,.19],[.21,.19]].forEach(([F,j])=>A(g,C,N(F,0,j),f)),[[-.21,-.19],[.21,-.19]].forEach(([F,j])=>A(g,Ne(.045,.98,.045,.01,1),N(F,.49,j-.02,-.08,0,0),f)),A(g,Ne(.5,.06,.46,.015,1),N(0,.44,0),f),A(g,Ne(.48,.1,.44,.04,2),N(0,.51,.01),b),A(g,Ne(.4,.46,.06,.03,2),N(0,.82,-.2,-.08,0,0),b),A(g,Ne(.46,.05,.05,.015,1),N(0,1.06,-.23,-.08,0,0),f)}{let g=z(-1.8,s,-1.4,Math.PI);A(g,Ne(2.2,.32,.86,.05,2),N(0,.28,0),W),[-1,0,1].forEach(b=>A(g,Ne(.62,.14,.64,.05,2),N(b*.63,.5,.08),W)),A(g,Ne(2.2,.5,.22,.07,2),N(0,.67,-.33),W);for(let b=0;b<3;b++)for(let C=-.9+b%2*.09;C<=.9;C+=.18)A(g,new Dt(.012,6,4),N(C,.6+b*.09,-.218),S(.12,.06,.04,"leather"));[-1,1].forEach(b=>{A(g,Ne(.2,.36,.86,.04,2),N(b*1,.5,0),W),A(g,new Fe(.13,.13,.88,16),N(b*1.03,.68,0,Math.PI/2,0,0),W),[-1,1].forEach(C=>A(g,Zt([[.04,0],[.05,.04],[.035,.09],[.045,.12]],10),N(b*.98,0,C*.36),f)),A(g,Ne(.42,.4,.12,.07,2),N(b*.66,.74,-.15,-.3,b*.25,b*.1),b>0?Yt("fabric",C=>Math.sin(C.x*50)>.6?[.72,.58,.3]:[.56,.42,.22]):S(.36,.42,.32,"fabric"))})}{let g=z(-1.8,s,-2.75),b=Zt([[.025,0],[.032,.03],[.022,.1],[.034,.2],[.026,.3],[.03,.38],[.03,.4]],8);A(g,Ne(1.2,.05,.66,.02,2),N(0,.43,0),w),A(g,Ne(1.08,.08,.54,.01,1),N(0,.37,0),E),A(g,Ne(1,.025,.48,.01,1),N(0,.12,0),E),[[-.52,-.25],[.52,-.25],[-.52,.25],[.52,.25]].forEach(([C,F])=>A(g,b,N(C,0,F),f)),[-1,1].forEach(C=>{A(g,Ne(.2,.012,.28,.004,1),N(C*.1+.1,.462,.05,0,.15,C*.08),S(.9,.87,.78,"paper")),A(g,Ne(.21,.008,.29,.004,1),N(C*.1+.1,.455,.05,0,.15,C*.08),S(.42,.14,.12,"leather"))}),A(g,Zt([[0,0],[.09,0],[.11,.025],[.1,.03]],16),N(-.32,.455,-.1),O),A(g,Ne(.24,.05,.17,.008,1),N(-.2,.18,.05,0,.3,0),S(.3,.33,.4,"leather"))}{let g=z(-4,s,-2.9,Math.PI/2);A(g,Ne(.86,.36,.8,.05,2),N(0,.3,0),W),A(g,Ne(.56,.14,.6,.05,2),N(0,.53,.08),W),A(g,Ne(.86,.48,.2,.07,2),N(0,.7,-.3,-.1,0,0),W),[-1,1].forEach(b=>{A(g,Ne(.17,.42,.8,.06,2),N(b*.36,.56,0),W),[-1,1].forEach(C=>A(g,Zt([[.035,0],[.045,.04],[.03,.08],[.04,.12]],10),N(b*.36,0,C*.32),f))})}h.add(Zt([[.16,0],[.16,.02],[.1,.05],[.04,.09],[.02,.12]],16),{m:N(-3.2,s,-.9),color:O}),h.add(new Fe(.014,.014,1.45,6),{m:N(-3.2,s+.82,-.9),color:O}),h.add(new Fe(.16,.25,.3,20,1,!0),{m:N(-3.2,s+1.6,-.9),color:Yt("fabric",C=>{let F=.82+Math.sin(Math.atan2(C.z- -.9,C.x- -3.2)*20)*.04;return[F,F*.9,F*.72]})}),m.add(new Dt(.06,10,8),{m:N(-3.2,s+1.52,-.9),color:k});{let C=s+1;h.add(new Dt(.28,28,18),{m:N(4.4,C,1.6,.4,0,.2),color:F=>M(F.x*9+3,F.y*9,F.z*9)>.55?[.66,.56,.36]:[.24,.36,.42]}),h.add(new Tn(.31,.012,6,36),{m:N(4.4,C,1.6,0,Math.PI/2,.2),color:O}),h.add(new Tn(.33,.016,6,36),{m:N(4.4,C-.02,1.6,Math.PI/2,0,0),color:w}),h.add(Zt([[.2,0],[.2,.03],[.07,.08],[.05,.3],[.08,.42],[.04,.55],[.06,.7],[.03,.72]],12),{m:N(4.4,s,1.6),color:w})}{let g=z(-6.1,s,1.9,Math.PI/2);A(g,Ne(.56,.32,.38,.02,1),N(0,.16,0),f),A(g,Ne(.46,1.4,.3,.02,1),N(0,1,0),w),A(g,Ne(.3,1,.02,.02,1),N(0,1,.155),E),A(g,Ne(.56,.56,.36,.02,1),N(0,1.98,0),w),A(g,new Fe(.28,.28,.36,18,1,!1,-Math.PI/2,Math.PI),N(0,2.26,0,Math.PI/2,0,0,1,1,.5),f),A(g,new Fe(.19,.19,.02,28),N(0,1.98,.18,Math.PI/2,0,0),S(.9,.86,.76,"paper")),A(g,new Tn(.2,.012,6,28),N(0,1.98,.19),O),A(g,D(.012,.13,.006),N(0,2.02,.195,0,0,.6),S(.08,.08,.08)),A(g,D(.012,.16,.006),N(0,2.04,.197,0,0,-.3),S(.08,.08,.08)),A(g,new Fe(.06,.06,.012,16),N(0,.7,.13,Math.PI/2,0,0),O)}{for(let b=a-.12,C=0;b>Ee.y+.8;b-=.085,C++)h.add(new Tn(.03,.007,4,8),{m:N(Ee.x,b,Ee.z,0,C%2*Math.PI/2,0,1,1.4,1),color:_});h.add(Zt([[0,-.28],[.035,-.22],[.05,-.12],[.03,-.02],[.07,.04],[.05,.12],[.022,.3],[.04,.45],[.02,.6],[.016,.8],[0,.82]],12),{m:N(Ee.x,Ee.y,Ee.z),color:_});let g=(b,C,F,j)=>{h.add(new Tn(b,.02,6,48),{m:N(Ee.x,C,Ee.z,Math.PI/2,0,0),color:_});for(let y=0;y<F;y++){let P=y/F*jn+(j?0:.3),G=Ee.x+Math.cos(P)*b,X=Ee.z+Math.sin(P)*b,Y=new jr(new B(Ee.x,C+.1,Ee.z),new B(Ee.x+Math.cos(P)*b*.3,C-.18,Ee.z+Math.sin(P)*b*.3),new B(Ee.x+Math.cos(P)*b*.8,C-.12,Ee.z+Math.sin(P)*b*.8),new B(G,C,X));h.add(new Mi(Y,12,.012,5),{color:_}),h.add(Zt([[0,0],[.03,0],[.045,.035],[.04,.05]],10),{m:N(G,C+.01,X),color:_}),h.add(new Fe(.017,.017,.12,8),{m:N(G,C+.11,X),color:S(.9,.86,.76,"paper")}),m.add(new Dt(.02,8,6),{m:N(G,C+.2,X,0,0,0,1,1.9,1),color:k})}};g(.82,Ee.y,8,!0),g(.42,Ee.y+.4,6,!1);for(let b=0;b<4;b++){let C=b/4*jn+Math.PI/4,F=new gr(new B(Ee.x+Math.cos(C)*.82,Ee.y,Ee.z+Math.sin(C)*.82),new B(Ee.x+Math.cos(C)*.7,Ee.y+.5,Ee.z+Math.sin(C)*.7),new B(Ee.x,Ee.y+.78,Ee.z));h.add(new Mi(F,12,.009,4),{color:_})}}{let g=Yt("fabric",C=>{let F=.84+M(C.x*7,C.y*7,C.z*7)*.05;return[F,F*.97,F*.9]}),b=C=>{let F=z(3.6,o,C,-Math.PI/2);A(F,Ne(.8,.3,.78,.06,2),N(0,.3,0),g),A(F,Ne(.56,.13,.6,.05,2),N(0,.5,.07),g),A(F,Ne(.8,.62,.2,.08,2),N(0,.76,-.3,-.12,0,0),g),[-1,1].forEach(j=>{A(F,Ne(.14,.38,.76,.06,2),N(j*.34,.54,0),g),[-1,1].forEach(y=>A(F,Zt([[.02,0],[.03,.05],[.022,.1],[.03,.15]],8),N(j*.33,0,y*.32),f))}),A(F,Ne(.38,.36,.1,.06,2),N(0,.72,-.15,-.25,0,0),S(.34,.4,.5,"fabric"))};b(-4.6),b(-2.9),h.add(new Fe(.3,.3,.035,24),{m:N(3.7,o+.58,-3.75),color:w}),h.add(Zt([[.17,0],[.17,.02],[.06,.06],[.035,.2],[.05,.35],[.03,.5],[.06,.56]],12),{m:N(3.7,o,-3.75),color:f}),h.add(Zt([[0,0],[.05,0],[.07,.06],[.05,.16],[.02,.2],[.025,.24]],12),{m:N(3.75,o+.6,-3.65),color:S(.6,.66,.66)}),[[0,[.5,.2,.16]],[.04,[.2,.3,.34]]].forEach(([C,F],j)=>h.add(Ne(.22,.04,.16,.006,1),{m:N(3.6,o+.62+C,-3.88,0,j*.4,0),color:S(...F,"leather")}))}let Mt=(g,b,C,F,j,y=!1)=>{let P=document.createElement("canvas");P.width=g,P.height=b,C(P.getContext("2d"),g,b);let G=new zn(P);G.colorSpace=Sn,G.anisotropy=8;let X=new mn({map:G,color:12103848,alphaTest:y?.5:0,side:nn}),Y=new je(F,X);return Y.applyMatrix4(j),Y.receiveShadow=!0,i.add(Y),Y},st=7,tt=()=>(st=st*16807%2147483647,st/2147483647),Ft=g=>(b,C,F)=>{let j=Math.round(C*.035);b.clearRect(0,0,C,F);for(let Ke=2;Ke<F-2;Ke+=3)b.fillStyle=Ke%2?"#e9dfc8":"#d7cbb0",b.fillRect(0,Ke,j+2,1.6),b.fillRect(C-j-2,Ke,j+2,1.6);let y=j,P=C-2*j,G=(Ke,vt)=>{b.fillStyle=vt,b.fillRect(y+Ke,Ke,P-Ke*2,F-Ke*2)};G(0,g.border),G(F*.035,g.cream),G(F*.045,g.border2),G(F*.115,g.cream),G(F*.125,g.field),b.fillStyle=g.accent;let X=F*.08,Y=F*.06,ge=(Ke,vt,St)=>{b.beginPath(),b.moveTo(Ke,vt-St),b.lineTo(Ke+St,vt),b.lineTo(Ke,vt+St),b.lineTo(Ke-St,vt),b.closePath(),b.fill()};for(let Ke=y+X;Ke<y+P-X;Ke+=Y)ge(Ke,X,Y*.3),ge(Ke,F-X,Y*.3);for(let Ke=X+Y;Ke<F-X;Ke+=Y)ge(y+X,Ke,Y*.3),ge(y+P-X,Ke,Y*.3);let Ce=y+F*.125,Re=F*.125,Ie=P-F*.25,Oe=F*.75;b.save(),b.beginPath(),b.rect(Ce,Re,Ie,Oe),b.clip();for(let Ke=Re+10,vt=0;Ke<Re+Oe;Ke+=F*.055,vt++)for(let St=Ce+8+vt%2*F*.04;St<Ce+Ie;St+=F*.08)b.fillStyle=g.motif,ge(St,Ke,F*.012),b.fillStyle=g.accent,b.fillRect(St-1,Ke-1,2,2);let rt=y+P/2,ot=F/2,Ve=(Ke,vt,St,ln,Qe)=>{Qe.forEach((An,Bt)=>{let On=St*(1-Bt*.2);b.fillStyle=An,b.beginPath();for(let Dn=0;Dn<=64;Dn++){let Zn=Dn/64*jn,Ci=On*(1+.14*Math.cos(Zn*8)),kt=Ke+Math.cos(Zn)*Ci*ln,en=vt+Math.sin(Zn)*Ci;Dn?b.lineTo(kt,en):b.moveTo(kt,en)}b.fill()})};[[Ce,Re],[Ce+Ie,Re],[Ce,Re+Oe],[Ce+Ie,Re+Oe]].forEach(([Ke,vt])=>Ve(Ke,vt,F*.2,1.3,[g.medal,g.cream,g.medal])),b.restore(),[-1,1].forEach(Ke=>{b.fillStyle=g.medal,ge(rt+Ke*F*.42,ot,F*.08),b.fillStyle=g.cream,ge(rt+Ke*F*.42,ot,F*.04)}),Ve(rt,ot,F*.3,1.45,[g.cream,g.medal,g.field,g.accent,g.medal]);for(let Ke=0;Ke<C*F*.05;Ke++){let vt=y+tt()*P,St=tt()*F;b.fillStyle=tt()<.5?"rgba(0,0,0,0.12)":"rgba(255,240,210,0.08)",b.fillRect(vt,St,1.5,1.5)}let gt=b.createRadialGradient(rt,ot,0,rt,ot,P*.4);gt.addColorStop(0,"rgba(255,240,220,0.1)"),gt.addColorStop(1,"rgba(255,240,220,0)"),b.fillStyle=gt,b.fillRect(y,0,P,F)},mt=(g,b,C,F,j,y,P=s)=>{let G=new xt(C*1.07,F);Mt(1024,Math.round(1024*F/(C*1.07)),Ft(y),G,new it().compose(new B(g,P+.006,b),new ht().setFromEuler(new tn(-Math.PI/2,j,0,"YXZ")),new B(1,1,1)),!0)};mt(0,-6.5,3.2,2,0,{border:"#2a2440",border2:"#6a1d1c",cream:"#d8c7a0",field:"#7a201c",accent:"#c58f42",motif:"#4a1612",medal:"#22305a"}),mt(-1.9,-2.6,3.9,2.8,0,{border:"#6d1f1c",border2:"#1f2d4a",cream:"#d6c49a",field:"#1d2a46",accent:"#b07a3a",motif:"#2c3d5e",medal:"#7b2420"}),mt(3.9,-3.75,2.2,3,Math.PI/2,{border:"#5c3a22",border2:"#8a2e22",cream:"#e0d2ae",field:"#9a3a26",accent:"#d6a24c",motif:"#6a2416",medal:"#2b3a52"},o);{let F=s+2.05,j=p-.06;Mt(512,333,(P,G,X)=>{let Y=P.createLinearGradient(0,0,0,X*.6);Y.addColorStop(0,"#6f87a0"),Y.addColorStop(1,"#e3c9a0"),P.fillStyle=Y,P.fillRect(0,0,G,X);let ge=(Re,Ie,Oe,rt)=>{P.fillStyle=Oe,P.beginPath(),P.moveTo(0,X);for(let ot=0;ot<=G;ot+=4)P.lineTo(ot,Re+Math.sin(ot*rt+Re)*Ie+Math.sin(ot*rt*2.7)*Ie*.4);P.lineTo(G,X),P.fill()};ge(X*.5,14,"#56677a",.012),ge(X*.6,10,"#47584a",.02),P.fillStyle="#9fb2b8",P.fillRect(0,X*.7,G,X*.08),ge(X*.8,6,"#2f3a2a",.03);for(let Re=0;Re<26;Re++){let Ie=tt()*G,Oe=X*(.62+tt()*.2),rt=20+tt()*40;P.fillStyle="#1f2a1e",P.beginPath(),P.moveTo(Ie,Oe-rt),P.lineTo(Ie+rt*.25,Oe),P.lineTo(Ie-rt*.25,Oe),P.fill()}for(let Re=0;Re<6e3;Re++)P.fillStyle=`rgba(${tt()<.5?"0,0,0":"255,240,210"},0.05)`,P.fillRect(tt()*G,tt()*X,2,1);let Ce=P.createRadialGradient(G/2,X/2,X*.3,G/2,X/2,G*.7);Ce.addColorStop(0,"rgba(0,0,0,0)"),Ce.addColorStop(1,"rgba(40,20,0,0.35)"),P.fillStyle=Ce,P.fillRect(0,0,G,X)},new xt(2,1.3),N(-1.8,F,j,0,Math.PI,0));let y=S(.72,.56,.26,"metal");[[2+.2,.12,0,1.3/2+.06],[2+.2,.12,0,-1.3/2-.06],[.12,1.3,-2/2-.06,0],[.12,1.3,2/2+.06,0]].forEach(([P,G,X,Y])=>h.add(Ne(P,G,.06,.025,2),{m:N(-1.8+X,F+Y,j+.01),color:y})),[-1,1].forEach(P=>{let G=-1.8+P*1.5,X=s+2.25;h.add(Ne(.1,.22,.03,.02,1),{m:N(G,X,p-.02),color:O}),h.add(new Fe(.008,.008,.18,5),{m:N(G,X+.02,p-.1,Math.PI/2,0,0),color:O}),h.add(new Fe(.06,.09,.13,14,1,!0),{m:N(G,X+.16,p-.19),color:S(.9,.84,.7,"fabric")}),m.add(new Dt(.03,8,6),{m:N(G,X+.12,p-.19),color:k})})}let wt=new je(h.geometry(),r);wt.receiveShadow=!0,wt.castShadow=!0,wt.layers.enable(5);let Ht=new je(m.geometry(),new an({vertexColors:!0,toneMapped:!1}));i.add(wt,Ht);let Et=new Ei(16761466,0,90,1.2);Et.position.set(Ee.x,Ee.y-.45,Ee.z),i.add(Et),Et.castShadow=!0,Et.shadow.autoUpdate=!1,Et.shadow.mapSize.set(512,512),Et.shadow.camera.near=.5,Et.shadow.camera.far=90,Et.shadow.bias=-.003,Et.shadow.normalBias=.25,Et.shadow.camera.layers.set(5),Et.shadow.needsUpdate=!0;let at=new Ei(16766112,0,70,1.2);at.position.set(-.8,s+2,-4.6),i.add(at);let se={set intensity(g){Et.intensity=g*1.2,at.intensity=g*.75},get intensity(){return Et.intensity/1.25}},H=(()=>{let g=new Ot,b=C=>{let F=.9+M(C.x*40,C.y*40,C.z*40)*.2;return[F,F,F]};return[-1,1].forEach(C=>g.add(new Le(.1,1,1),{m:N(C*.45,0,0),color:b,tip:()=>1})),g.add(new Le(1,1,.08),{m:N(0,0,.47),color:b,tip:()=>1}),g.add(new Le(.82,.94,.94),{m:N(0,0,-.04),color:C=>{let F=.86+Math.sin(C.x*140)*.04;return[F,F*.96,F*.86]},tip:()=>0}),[.3,-.3,.36,-.36].forEach(C=>g.add(new Le(1.01,.025,.02),{m:N(0,C,.515),color:S(.78,.62,.3),tip:()=>0})),g.add(new Le(.7,.16,.01),{m:N(0,.1,.516),color:S(.12,.1,.08),tip:()=>0}),g.geometry()})(),be=new mn({vertexColors:!0});be.onBeforeCompile=g=>{g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
attribute float aTip;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
        #ifdef USE_COLOR
          vColor.rgb *= color;
        #endif
        #ifdef USE_INSTANCING_COLOR
          vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, aTip);
        #endif`)};let fe=null,I=[],v=[],Z="",ee=new it,oe=new ht,ae=new B,de=new B,Q=[],ne=g=>{let b=2166136261;for(let C=0;C<g.length;C++)b=Math.imul(b^g.charCodeAt(C),16777619);return(b>>>0)%1e4/1e4},ce=(g,b)=>window.MEOW_I18N?window.MEOW_I18N.t(g):b,ye=g=>{let b=document.createElement("canvas");b.width=256,b.height=64;let C=b.getContext("2d"),F=C.createLinearGradient(0,0,0,64);F.addColorStop(0,"#d9b968"),F.addColorStop(1,"#8c6a2c"),C.fillStyle=F,C.fillRect(0,0,256,64),C.strokeStyle="rgba(60,40,10,.8)",C.lineWidth=4,C.strokeRect(4,4,248,56),C.fillStyle="#2a1c08",C.font='600 30px "Josefin Sans", system-ui, sans-serif',C.textAlign="center",C.textBaseline="middle";let j=g;for(;C.measureText(j).width>228&&j.length>2;)j=j.slice(0,-2)+"\u2026";C.fillText(j,128,34);let y=new zn(b);return y.colorSpace=Sn,y.anisotropy=4,y},me=new Ot,ve=(g,b,C)=>{let F=Math.floor(C*5),j=g.rowY0+b*g.rowH,y=(X,Y,ge)=>ct(g,X,Y,ge),P=(X,Y,ge,Ce,Re=1,Ie=1,Oe=1)=>{let rt=y(Y,ge,.02);me.add(X,{m:new it().compose(rt,new ht().setFromAxisAngle(new B(0,1,0),g.ry),new B(Re,Ie,Oe)),color:Ce})},G=(C*1.3%1-.5)*1;F===0?(P(new Fe(.06,.09,.26,12),G,j+.13,S(.55,.6,.58)),P(new Dt(.07,10,8),G+.3,j+.07,S(.7,.55,.35))):F===1?(P(new Le(.3,.16,.22),G,j+.08,x(.5)),P(new Le(.3,.02,.22),G,j+.165,S(.62,.5,.28,"metal"))):F===2?(P(new Dt(.06,10,8),G,j+.07,S(.25,.24,.24),1,1.2,.9),P(new Dt(.04,10,8),G,j+.17,S(.25,.24,.24)),[-1,1].forEach(X=>P(new Qt(.015,.035,4),G+X*.022,j+.215,S(.25,.24,.24)))):F===3?(P(new Fe(.05,.05,.02,12),G,j+.01,S(.62,.5,.28,"metal")),P(new Fe(.02,.02,.14,8),G,j+.09,S(.88,.84,.74,"paper"))):(P(new Le(.02,.24,.18),G,j+.12,x(.4)),P(new xt(.14,.18),G+.012,j+.12,S(.75,.72,.62)))},_e=null,Pe=()=>{fe&&(i.remove(fe),fe.dispose()),I.forEach(P=>{i.remove(P),P.material.map.dispose(),P.material.dispose()}),_e&&(i.remove(_e),_e.geometry.dispose()),I=[],Q.length=0;let g=30,b=[],C=new Map;v.forEach(P=>{let G=(P.tag||"").trim();C.has(G)||(C.set(G,[]),b.push(G)),C.get(G).push(P)});let F=[];b.forEach(P=>{let G=C.get(P);for(let X=0;X<G.length;X+=g)F.push({tag:P,list:G.slice(X,X+g),first:X===0})});let j=[];et.forEach(P=>ue[P].pref.forEach(G=>j.push([ue[P],G])));let y=new Set;F.forEach((P,G)=>{let X=j[G];if(!X)return;let[Y,ge]=X;y.add(Y.x+","+Y.z+","+ge);let Ce=Y.rowY0+ge*Y.rowH,Re=P.list.map(Ve=>({t:.035+ne(Ve.url)*.04,h:.24+ne(Ve.url+"h")*.11,d:.17+ne(Ve.title||"x")*.05})),Ie=Re.reduce((Ve,gt)=>Ve+gt.t+.004,0),Oe=Y.w-.16,rt=Ie>Oe?Oe/Ie:1,ot=-Y.w/2+.08;if(P.list.forEach((Ve,gt)=>{let Ke=Re[gt],vt=Ke.t*rt,St=ct(Y,ot+vt/2,Ce+Ke.h/2+.002,-jt/2+.03+Ke.d/2),ln=new ht().setFromAxisAngle(new B(0,1,0),Y.ry);Q.push({link:Ve,tag:P.tag,home:{p:St,q:ln,s:new B(vt,Ke.h,Ke.d)},cur:{p:St.clone(),q:ln.clone()},state:"shelf",from:null,t0:0,color:td[Math.floor(ne(Ve.url+"c")*td.length)]}),ot+=vt+.004}),P.first){let Ve=new an({map:ye("#"+(P.tag||ce("untagged","no tag"))),toneMapped:!1}),gt=new je(new xt(.34,.085),Ve);gt.position.copy(ct(Y,0,Ce+.006,jt/2+.006)),gt.quaternion.setFromAxisAngle(new B(0,1,0),Y.ry),gt.position.y-=.035,gt.userData.tag=P.tag,i.add(gt),I.push(gt)}}),me.clear(),j.forEach(([P,G],X)=>{if(y.has(P.x+","+P.z+","+G))return;let Y=ne("o"+X);Y<.55&&ve(P,G,Y/.55)}),_e=new je(me.geometry(),r),i.add(_e),fe=new Rn(H,be,Math.max(1,Q.length)),fe.count=Q.length,fe.frustumCulled=!1,Q.forEach((P,G)=>{ee.compose(P.home.p,P.home.q,P.home.s),fe.setMatrixAt(G,ee),fe.setColorAt(G,new ke(P.color))}),fe.instanceColor&&(fe.instanceColor.needsUpdate=!0),i.add(fe)},Se={mode:"idle",open:-1,openT0:0,closing:!1,ring:null,ringT0:0,hover:null},K=document.createElement("div");K.className="book-tip",document.body.appendChild(K);let we=document.createElement("div");we.className="book-page",we.innerHTML='<div class="bp-left"><small class="bp-tag"></small><strong class="bp-title"></strong><span class="bp-host"></span><em class="bp-go"></em></div><div class="bp-right"><img alt=""><span class="bp-wait"></span></div>',document.body.appendChild(we);let pe=we.querySelector("img"),De=we.querySelector(".bp-wait"),Ue=g=>{try{return new URL(g).hostname.replace(/^www\./,"")}catch{return g}},Me=(g,b)=>"https://s.wordpress.com/mshots/v1/"+encodeURIComponent(g)+"?w=800&h=600"+(b?"&r="+b:""),$e=0,Ye=g=>{clearTimeout($e),pe.classList.remove("ready"),De.textContent=ce("loadingPreview","\u2026");let b=0,C=()=>{pe.onload=()=>{pe.classList.add("ready"),De.textContent="",pe.naturalWidth<600&&b<3&&(b++,$e=setTimeout(C,2500))},pe.onerror=()=>{De.textContent=ce("noPreview","No preview")},pe.src=Me(g,b)};C()},nt=(()=>{let g=new fn,b=new mn({color:7220522}),C=new an({color:15722192}),F=new fn,j=new fn,y=new Le(1,1.32,.03).translate(-.5,0,0),P=new Le(1,1.32,.03).translate(.5,0,0),G=new Le(.96,1.26,.06).translate(-.49,0,.045),X=new Le(.96,1.26,.06).translate(.49,0,.045);return F.add(new je(y,b),new je(G,C)),j.add(new je(P,b),new je(X,C)),g.add(F,j),g.visible=!1,i.parent.add(g),{g,left:F,right:j,leather:b}})(),Pt=.16,rn=(g,b,C)=>{let F=Q[g];b.copy(F.cur.p).applyMatrix4(i.matrixWorld),i.getWorldQuaternion(C).multiply(F.cur.q)},on=(g,b,C,F=0)=>{b.set(0,F,-g).applyQuaternion(t.quaternion).add(t.position),C.copy(t.quaternion)},sn=g=>g<.5?4*g*g*g:1-Math.pow(-2*g+2,3)/2,ie=(g,b)=>{Se.open>=0&&Ge(b),Se.open=g,Se.openT0=b,Se.closing=!1;let C=Q[g];C.state="out",nt.leather.color.set(C.color),we.querySelector(".bp-tag").textContent="#"+(C.tag||ce("untagged","no tag")),we.querySelector(".bp-title").textContent=C.link.title,we.querySelector(".bp-host").textContent=Ue(C.link.url),we.querySelector(".bp-go").textContent=ce("bookGo","Click the book to visit \u2197"),Ye(C.link.url),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!0);let F=new B,j=new ht;rn(g,F,j),Se.openFrom={p:F,q:j}},Ge=g=>{Se.open<0||Se.closing||(Se.closing=!0,Se.openT0=g,we.classList.remove("show"),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!1))},He=(g,b)=>{if(Se.ring===g){yt(b);return}Se.ring!==null&&yt(b),Se.ring=g,Se.ringT0=b;let C=0;Q.forEach((F,j)=>{F.tag===g&&(F.ringI=C++,F.state!=="out"&&(F.state="toRing",F.fromSc=F.sc||1,F.from={p:F.cur.p.clone(),q:F.cur.q.clone()},F.t0=b+F.ringI*45))}),Se.ringN=C,window.MEOW_SOUND&&window.MEOW_SOUND.whoosh&&window.MEOW_SOUND.whoosh()},yt=g=>{Se.ring!==null&&(Q.forEach(b=>{b.tag===Se.ring&&(b.state==="ring"||b.state==="toRing")&&(b.state="toShelf",b.fromSc=b.sc||1,b.from={p:b.cur.p.clone(),q:b.cur.q.clone()},b.t0=g+(b.ringI||0)*30)}),Se.ring=null)},un=new ht,qt=new ht,_n=new B,It=new B,ui=(g,b,C,F)=>{let j=Math.max(1,Se.ringN),y=Math.max(15,j*1.3),P=g.ringI/j*Math.PI*2+b*.12;_n.set(t.position.x+Math.cos(P)*y,t.position.y-.4+Math.sin(b*1.3+g.ringI)*.25,t.position.z+Math.sin(P)*y);let G=Math.atan2(t.position.x-_n.x,t.position.z-_n.z);return qt.setFromEuler(new tn(0,G-Math.PI/2,Math.sin(b*.9+g.ringI)*.08)),It.copy(_n),i.worldToLocal(It),C.copy(It),i.getWorldQuaternion(un).invert(),F.copy(un).multiply(qt),C},ti=2.2,Mn=(g,b)=>{if(!fe)return;let C=!1,F=new B,j=new ht;if(Q.forEach((y,P)=>{if(y.state==="shelf")return;let G=1;if(y.state==="out"){de.set(0,0,0),ee.compose(y.cur.p,y.cur.q,de),fe.setMatrixAt(P,ee),C=!0;return}if(y.state==="ring")ui(y,g,y.cur.p,y.cur.q),G=ti;else{let X=Math.max(0,Math.min(1,(b-y.t0)/900)),Y=sn(X),ge=y.state==="toRing"?ui(y,g,F,j):y.home.p,Ce=y.state==="toRing"?j:y.home.q;y.cur.p.copy(y.from.p).lerp(ge,Y),y.cur.p.y+=Math.sin(Math.PI*Y)*.4*(y.state==="toRing"?1:.6),y.cur.q.copy(y.from.q).slerp(Ce,Y);let Re=y.fromSc||1;G=Re+((y.state==="toRing"?ti:1)-Re)*Y,X>=1&&(y.state==="toRing"?y.state="ring":(y.state="shelf",y.cur.p.copy(y.home.p),y.cur.q.copy(y.home.q),G=1))}de.copy(y.home.s).multiplyScalar(G),ee.compose(y.cur.p,y.cur.q,de),fe.setMatrixAt(P,ee),C=!0,y.sc=G}),C&&(fe.instanceMatrix.needsUpdate=!0,fe.boundingSphere=null),Se.open>=0){let y=Q[Se.open],P=Math.min(1,(b-Se.openT0)/(Se.closing?700:1100)),G=new B,X=new ht;on(4.2,G,X,-.15);let Y,ge;Se.closing?(Y=1-sn(Math.max(0,(P-.35)/.65)),ge=1-sn(Math.min(1,P/.45))):(Y=sn(Math.min(1,P/.6)),ge=sn(Math.max(0,(P-.45)/.55)));let Ce=Se.openFrom;nt.g.position.copy(Ce.p).lerp(G,Y),nt.g.quaternion.copy(Ce.q).slerp(X,Y);let Re=(y.sc||1)*di,Ie=new B(y.home.s.z*Re,y.home.s.y*Re/1.32,y.home.s.z*Re),Oe=new B(1.6,1.6,1.6);nt.g.scale.copy(Ie).lerp(Oe,Y),nt.left.rotation.y=Math.PI*(1-ge)*.999,nt.right.rotation.y=0,nt.g.visible=!0,!Se.closing&&P>=1?(L(nt.g,we),we.classList.add("show")):Se.closing||we.classList.remove("show"),Se.closing&&P>=1&&(nt.g.visible=!1,y.state=Se.ring===y.tag?"toRing":"toShelf",y.from={p:new B,q:new ht},y.from.p.copy(nt.g.position),i.worldToLocal(y.from.p),i.getWorldQuaternion(un).invert(),y.from.q.copy(un).multiply(nt.g.quaternion),y.t0=b,y.fromSc=1,Se.open=-1,Se.closing=!1)}},di=4.5,Gn=new B,L=(g,b)=>{let C=1e9,F=1e9,j=-1e9,y=-1e9;[[-.97,.63],[.97,.63],[-.97,-.63],[.97,-.63]].forEach(([P,G])=>{Gn.set(P,G,.08).applyMatrix4(g.matrixWorld).project(t);let X=(Gn.x*.5+.5)*innerWidth,Y=(-Gn.y*.5+.5)*innerHeight;C=Math.min(C,X),j=Math.max(j,X),F=Math.min(F,Y),y=Math.max(y,Y)}),b.style.left=C+"px",b.style.top=F+"px",b.style.width=j-C+"px",b.style.height=y-F+"px"},q=g=>{if(!fe)return null;if(Se.open>=0&&nt.g.visible&&g.intersectObject(nt.g,!0)[0])return{type:"open"};let b=g.intersectObject(fe,!1)[0],C=I.length?g.intersectObjects(I,!1)[0]:null;return C&&(!b||C.distance<b.distance)&&C.distance<40?{type:"label",tag:C.object.userData.tag}:b&&b.distance<45&&Q[b.instanceId]&&Q[b.instanceId].state!=="out"?{type:"book",i:b.instanceId}:null};return{sync(){let g=window.MEOW_LINKS_DATA||[],b=g.map(C=>C.url+"|"+C.tag+"|"+C.title).join(`
`);b!==Z&&(Z=b,v=g.slice(),Se.open=-1,Se.ring=null,nt.g.visible=!1,we.classList.remove("show"),Pe())},update:Mn,get busy(){return Se.open>=0||Se.ring!==null},hover(g,b){var j,y;let C=b?q(g):null,F=C?C.type+((y=(j=C.i)!=null?j:C.tag)!=null?y:""):"";if(F===Se.hoverKey)return!!C;if(Se.hoverKey=F,!C||C.type==="open")return K.classList.remove("show"),!!C;if(C.type==="book"){let P=Q[C.i];K.innerHTML="";let G=document.createElement("strong");G.textContent=P.link.title;let X=document.createElement("small");X.textContent="#"+(P.tag||ce("untagged","no tag"))+" \xB7 "+Ue(P.link.url),K.append(G,X)}else{let P=Q.filter(Y=>Y.tag===C.tag).length;K.innerHTML="";let G=document.createElement("strong");G.textContent="#"+(C.tag||ce("untagged","no tag"))+"  \xB7  "+P;let X=document.createElement("small");X.textContent=Se.ring===C.tag?ce("tagBack","Click: put them back"):ce("tagRing","Click: books fly around you"),K.append(G,X)}return K.classList.add("show"),!0},click(g,b){let C=q(g);if(Se.open>=0&&!Se.closing){if(C&&C.type==="open"){let F=Q[Se.open];return window.open(F.link.url,"_blank","noopener"),!0}if(Ge(b),!C||C.type==="open")return!0}return C?C.type==="label"?(He(C.tag,b),!0):C.type==="book"?(ie(C.i,b),!0):!1:Se.ring!==null?(yt(b),!0):!1},back(g){return Se.open>=0&&!Se.closing?(Ge(g),!0):Se.ring!==null?(yt(g),!0):!1},_open(g){ie(g,performance.now())},_ring(g){He(g,performance.now())},get _n(){return Q.length},shadowLight:Et,glowSpots:{CH:Ee,SLAB:u,F:s,MZ:o,Z0:d,Z1:p,C:a},reset(g){Se.open>=0&&Ge(g),Se.ring!==null&&yt(g),K.classList.remove("show"),Se.hoverKey=""},lampLight:se}}var dt={x:112,z:-119,y:4.5,yaw:-Math.PI/2,S:4.5};function ld({scene:i,shared:e,U:t,camera:n}){let r=dt.S,s=6.4,o=5,a=.17,c=.3145,l=8,d=2.62,p=1.9,u=-1.95,h=-.75,m=2.05,M=o/2+2.6,x=11,f={x:1.7,z:-2},E=new Ot,R=new Ot,w=new Ot,S=new Ot,T=(L,q,g)=>zt(L,q,g),U=(L,q=1)=>Yt("wood",g=>{let b=L*(.88+T(g.x*3,g.y*9,g.z*3)*.24)*q,C=T(g.x*.7,g.y*2,g.z*.7);return[b*(1.02+C*.06),b*(.79+C*.03),b*(.56-C*.04)]}),_=L=>Yt("log",(q,g)=>{if(L==="x"?Math.abs(g.x)>.9:Math.abs(g.z)>.9){let j=L==="x"?Math.hypot(q.y%1,q.z):Math.hypot(q.y%1,q.x),y=.68+Math.sin(j*90)*.04;return[y*1.02,y*.86,y*.66]}let C=.5+T(q.x*2.5,q.y*8,q.z*2.5)*.2+Math.sin((L==="x"?q.x:q.z)*23)*.015,F=T(Math.floor(q.y/.31)*3.7,L==="x"?1:2,.5);return F<.25?[C*.95,C*.82,C*.68]:F>.75?[C*1.08,C*.8,C*.52]:[C,C*.79,C*.58]}),O=Yt("stone",L=>{let q=.45+T(L.x*5,L.y*5,L.z*5)*.25,g=T(L.x*2,L.y*2,L.z*2);return[q*(.96+g*.08),q*.95,q*(.9+(1-g)*.08)]}),W=(L,q,g,b)=>b?Yt(b,()=>[L,q,g]):()=>[L,q,g],k=(L,q,g)=>Yt("metal",()=>[L,q,g]),V=L=>Yt("fabric",L),z=(L,q,g)=>new Le(L,q,g),A=Math.PI*2,D=(L,q)=>g=>(L==="z"?(g.z-q)*Math.sign(q):(g.x-q)*Math.sign(q))>0?1:0,J={front:[[u,h,0,m],[.75,1.95,.95,1.95]],back:[],left:[],right:[[-.3,.9,.95,1.95]]},$=(L,q,g,b)=>{let C=[[L,q]];return b.forEach(([F,j,y,P])=>{if(!(y<g+a-.02&&P>g-a+.02))return;let G=[];C.forEach(([X,Y])=>{j<=X||F>=Y?G.push([X,Y]):(F>X&&G.push([X,F]),j<Y&&G.push([j,Y]))}),C=G}),C};for(let L=0;L<l;L++){let q=a+L*c,g=a+c/2+L*c;[["front",o/2],["back",-o/2]].forEach(([b,C])=>{$(-s/2-.3,s/2+.3,q,J[b]).forEach(([F,j])=>{E.add(new Fe(a,a*.97,j-F,16,1),{m:N((F+j)/2,q,C,0,0,Math.PI/2),color:_("x"),tip:D("z",C)})})}),g+a<d+.12&&[["left",-s/2],["right",s/2]].forEach(([b,C])=>{$(-o/2-.3,o/2+.3,g,J[b]).forEach(([F,j])=>{E.add(new Fe(a,a*.97,j-F,16,1),{m:N(C,g,(F+j)/2,Math.PI/2,0,0),color:_("z"),tip:D("x",C)})})})}for(let L=0;L<4;L++){let q=L<2?s:o,g=L<2?L?-o/2:o/2:L===2?-s/2:s/2;for(let b=-q/2-.2;b<q/2+.2;b+=.42){if(L===0&&b>u-.2&&b<h)continue;let C=.38+T(b,L,0)*.08,F=.16+T(b,L,3)*.08,j=L<2?N(b+.2,-.02+F/2-.06,g,0,(T(b,L,5)-.5)*.2,0,C,F,.42):N(g,-.02+F/2-.06,b+.2,0,(T(b,L,5)-.5)*.2,0,.42,F,C);E.add(new Le(1,1,1),{m:j,color:O,tip:()=>1})}}E.add(new Le(h-u+.1,.08,.42),{m:N((u+h)/2,.06,o/2),color:U(.5),tip:()=>0}),[-1,1].forEach(L=>{let q=L*o/2,g=[-s/2-.05,d,q],b=[s/2+.05,d,q],C=[0,d+p,q],F=Yt("wood",j=>{let y=.48+T(j.x*9,0,L)*.1,P=Math.abs((j.x+10)%.24-.12)<.012?.75:1;return[y*P,y*.8*P,y*.6*P]});E.tris(L>0?[g,b,C]:[b,g,C],F,()=>0),R.tris(L>0?[b,g,C]:[g,b,C],j=>{let y=F(j);return[y[0]*.85,y[1]*.85,y[2]*.85]})});let he=s/2+.6,te=p+.45,re=Math.atan2(te,he),xe=Math.hypot(he,te);[-1,1].forEach(L=>{E.add(new Le(xe,.1,o+1.3,3,1,6),{m:N(L*he/2,d+p-te/2+.02,0,0,0,-L*re),color:U(.36),tip:(g,b)=>b.y>0?1:0});let q=9;for(let g=0;g<q;g++){let b=g/q,C=xe/q+.12,F=L*(he*(b+.5/q)),j=d+p-te*(b+.5/q)+.1;E.add(new Le(C,.045,o+1.3,1,1,10),{m:N(F,j,0,0,0,-L*(re+.05)),color:Yt("shingle",y=>{let P=Math.floor((y.z+5)*3.3),G=.3+T(P,g,L)*.12+g%2*.02;return[G*1.02,G*.9,G*.8]}),tip:()=>1})}E.add(new Le(.05,.22,o+1.35),{m:N(L*(he+.02),d+p-te-.02,0),color:U(.45),tip:()=>0}),[-1,1].forEach(g=>E.add(new Le(xe+.1,.22,.05),{m:N(L*he/2,d+p-te/2+.02,g*(o/2+.66),0,0,-L*re),color:U(.45),tip:()=>0}))}),E.add(new Le(.34,.16,o+1.4),{m:N(0,d+p+.12,0,0,0,Math.PI/4),color:U(.32),tip:()=>1});for(let L=0;L<8;L++)E.add(new Le(.86+L%2*.04,.3,.86+(L+1)%2*.04),{m:N(f.x,d+.15+L*.3,f.z,0,(T(L,1,1)-.5)*.08,0),color:O,tip:()=>1});E.add(new Le(1.05,.08,1.05),{m:N(f.x,d+.15+8*.3-.06,f.z),color:O,tip:()=>1});let Be=new B(f.x,d+.2+8*.3,f.z),Ae=(()=>{let L=new xt(.32,1.15,16,12),q=L.attributes.position;for(let g=0;g<q.count;g++){let b=q.getX(g),C=q.getY(g),F=Math.exp(-((C+.12)**2)*18);q.setXYZ(g,b*(1-F*.45)+F*.05,C,Math.sin((b+.16)*58)*(.02+F*.015)+.02)}return L.computeVertexNormals(),L})(),Je=(L,q,g)=>{let b=g==="front"?0:Math.PI/2,C=(X,Y,ge)=>g==="front"?[L+X,q+Y,o/2+ge]:[s/2+ge,q+Y,L-X],F=(X,Y,ge,Ce,Re,Ie,Oe,rt,ot=0)=>{let[Ve,gt,Ke]=C(Re,Ie,Oe);X.add(new Le(Y,ge,Ce),{m:N(Ve,gt,Ke,0,b,0),color:rt,tip:()=>ot})},j=U(.55);F(E,1.32,.09,.4,0,.53,0,j),F(E,1.32,.09,.4,0,-.53,0,j),F(E,.09,1.1,.4,-.62,0,0,j),F(E,.09,1.1,.4,.62,0,0,j),F(E,.05,1,.06,0,0,0,j),F(E,1.2,.05,.06,0,0,0,j),F(E,1.45,.06,.3,0,-.6,.2,j,1),[-1,1].forEach(X=>F(E,.55,1.05,.04,X*.98,0,.27,Y=>{let ge=.42+T(Y.x*9,Y.y*2,Y.z*9)*.1,Ce=Math.abs((Y.y+5)%.14-.07)<.012?.75:1;return[ge*.9*Ce,ge*.95*Ce,ge*.92*Ce]}));let[y,P,G]=C(0,0,0);S.add(new xt(1.2,1),{m:N(y,P,G,0,b,0),color:W(1,1,1)}),S.add(new xt(1.2,1),{m:N(y,P,G,0,b+Math.PI,0),color:W(1,1,1)}),[-1,1].forEach(X=>{let[Y,ge,Ce]=C(X*.78,.02,-.24),Re=V(Ie=>{let Oe=.8+T(Ie.x*30,Ie.y*4,Ie.z*30)*.06;return[Oe,Oe*.95,Oe*.85]});[!1,!0].forEach(Ie=>R.add(Ae,{m:N(Y,ge,Ce,0,b+Math.PI,0),color:Re,flip:Ie}))}),F(R,1.9,.03,.03,0,.62,-.24,W(.3,.25,.2))};Je(1.35,1.45,"front"),Je(.3,1.45,"right"),[[u-.05,.08],[h+.05,.08]].forEach(([L,q])=>E.add(new Le(q,m,.42),{m:N(L,m/2,o/2),color:U(.55),tip:()=>0})),E.add(new Le(h-u+.3,.12,.44),{m:N((u+h)/2,m+.05,o/2),color:U(.55),tip:()=>1});for(let L=0;L<11;L++){let q=-3.25+L*.6+.3;E.add(new Le(.57,.08,2.2),{m:N(q,.16,o/2+1.25,0,(T(L,2,2)-.5)*.01,0),color:U(.52+L%3*.04),tip:()=>1})}E.add(new Le(6.65,.14,.08),{m:N(.05,.1,o/2+2.36),color:U(.45),tip:()=>0});for(let L=-3.28;L<3.38;L+=.12)E.add(new Le(.1,1.3,.03),{m:N(L+.05,-.55,o/2+2.38),color:U(.36+L*37%3*.01),tip:()=>0});[-3.3,3.4].forEach(L=>{for(let q=o/2+.2;q<o/2+2.38;q+=.12)E.add(new Le(.03,1.3,.1),{m:N(L,-.55,q+.05),color:U(.36),tip:()=>0})}),E.add(new Le(1.4,.07,.3),{m:N((u+h)/2,.05,o/2+2.55),color:U(.5),tip:()=>1});let Ee=-3.4,qe=.6;E.add(new Le(qe-Ee,.08,2.55,4,1,4),{m:N((Ee+qe)/2,2.32,o/2+1.3,-.12,0,0),color:(L,q)=>{let g=(q.y<0?.62:.32)+T(L.x*3,0,L.z*9)*.1;return q.y<0?[g,g*.8,g*.6]:[g,g*.93,g*.88]},tip:(L,q)=>q.y>0?1:0}),[Ee+.25,qe-.25].forEach(L=>{E.add(new Le(.14,2.2,.14),{m:N(L,1.1,o/2+2.2),color:U(.5),tip:()=>0}),E.add(new Le(.08,.7,.08),{m:N(L,1.95,o/2+1.95,.75,0,0),color:U(.5),tip:()=>0})}),E.add(new Le(qe-Ee,.14,.14),{m:N((Ee+qe)/2,2.12,o/2+2.2),color:U(.45),tip:()=>1}),E.add(new Le(1.4,.06,.4),{m:N(1.45,.47,o/2+.48),color:U(.55),tip:()=>1}),[[.85],[2.05]].forEach(([L])=>E.add(new Le(.06,.3,.36),{m:N(L,.32,o/2+.48),color:U(.45),tip:()=>0})),E.add(new Le(.04,.04,.3),{m:N(-.5,2,o/2+.3),color:k(.15,.15,.15),tip:()=>0}),E.add(new Le(.2,.04,.2),{m:N(-.5,1.98,o/2+.42),color:k(.15,.15,.15),tip:()=>1}),w.add(new Le(.15,.22,.15),{m:N(-.5,1.84,o/2+.42),color:W(1,1,1)}),E.add(new Fe(.32,.29,.85,14),{m:N(s/2+.55,.42,o/2-.45),color:L=>{let q=.45+Math.sin(Math.atan2(L.z,L.x)*14)*.03;return[q,q*.8,q*.6]},tip:(L,q)=>q.y>.5?1:0}),[.12,.72].forEach(L=>E.add(new Fe(.33,.33,.04,14,1,!0),{m:N(s/2+.55,L,o/2-.45),color:k(.2,.2,.21),tip:()=>0}));for(let L=0;L<4;L++)for(let q=0;q<9-L;q++){let g=-1.6+q*.19+L*.09,b=.11+L*.18;E.add(new Fe(.09+T(q,L,1)*.03,.1,.7,7),{m:N(-s/2-.58,b,g,0,0,Math.PI/2),color:(C,F)=>Math.abs(F.x)>.9?[.74,.6,.42]:U(.45)(C),tip:()=>1})}E.add(new Fe(.3,.34,.5,10),{m:N(-s/2-1.4,.25,1.4),color:(L,q)=>q.y>.5?[.7,.58,.42]:U(.45)(L),tip:(L,q)=>q.y>.5?1:0}),E.add(new Fe(.025,.03,.75,6),{m:N(-s/2-1.3,.75,1.4,0,0,-.55),color:U(.62),tip:()=>0}),E.add(new Le(.2,.12,.03),{m:N(-s/2-1.48,.52,1.4,0,0,-.55),color:k(.35,.36,.38),tip:()=>0});for(let L=0;L<x/.5;L++)E.add(new Le(1.8,.08,.44),{m:N(-1.3+(L*7%5-2)*.01,.2-L*.012,M+L*.5,0,(L*3%5-2)*.012,0),color:U(.5+L*11%9/60),tip:()=>1});for(let L=0;L<=x/2.2;L++)[-1,1].forEach(q=>{E.add(new Fe(.09,.09,2.6,6),{m:N(-1.3+q*.85,-1.1-L*.03,M+L*2.2),color:U(.36),tip:()=>0})});[-1,1].forEach(L=>{E.add(new Fe(.06,.06,1.3,6),{m:N(-1.3+L*.85,.85,M+x-.4),color:U(.36),tip:()=>0}),w.add(new Le(.16,.2,.16),{m:N(-1.3+L*.85,1.6,M+x-.4),color:W(1,1,1)})});for(let L=0;L<l-1;L++){let q=a+L*c+c/2;[["front",o/2],["back",-o/2]].forEach(([g,b])=>$(-s/2+.05,s/2-.05,q,J[g]).forEach(([C,F])=>{E.add(new Le(F-C,.035,.02),{m:N((C+F)/2,q,b+Math.sign(b)*(a-.03)),color:j=>{let y=.72+T(j.x*9,j.y*30,0)*.12;return[y,y*.95,y*.86]},tip:()=>1})})),[["left",-s/2],["right",s/2]].forEach(([g,b])=>$(-o/2+.05,o/2-.05,q+c/2,J[g]).forEach(([C,F])=>{E.add(new Le(.02,.035,F-C),{m:N(b+Math.sign(b)*(a-.03),q+c/2,(C+F)/2),color:j=>{let y=.72+T(0,j.y*30,j.z*9)*.12;return[y,y*.95,y*.86]},tip:()=>1})}))}[-1,1].forEach(L=>E.add(new Fe(.06,.06,o+1.3,8,1,!0,0,Math.PI),{m:N(L*(he+.06),d+p-te-.14,0,Math.PI/2,0,L>0?Math.PI:0),color:k(.4,.4,.42),tip:()=>0})),E.add(new Fe(.035,.035,d+p-te-.2,8),{m:N(s/2+.6,(d+p-te)/2+.4,o/2-.45-.05),color:k(.4,.4,.42),tip:()=>0}),E.add(new Fe(.015,.02,.7,6),{m:N(0,d+p+.5,-1.4),color:k(.18,.18,.19),tip:()=>0}),E.add(new Le(.02,.02,.5),{m:N(0,d+p+.62,-1.4),color:k(.18,.18,.19),tip:()=>0}),E.add(new Qt(.05,.1,4),{m:N(0,d+p+.62,-1.15,Math.PI/2,0,0),color:k(.18,.18,.19),tip:()=>0});{let L=(q,g,b,C,F=1,j=1,y=1,P=0)=>E.add(q,{m:N(0,d+p+.88+b,-1.4+C,0,Math.PI/2,P,F,j,y),color:k(.16,.16,.17),tip:()=>0});L(new Le(.28,.13,.02),0,0,0),L(new Le(.11,.1,.02),0,.11,-.13),[-1,1].forEach(q=>L(new Qt(.03,.06,3),0,.19,-.13+q*.035)),L(new Le(.03,.2,.02),0,.12,.16,1,1,1,.4)}let ue=(L,q,g)=>{let b=new it().compose(new B(L,.82,q),new ht().setFromAxisAngle(new B(0,1,0),g),new B(1,1,1));E.add(new Le(1.3,.2,.24),{m:b.clone().multiply(N(0,0,.12)),color:U(.45),tip:()=>0}),E.add(new Le(1.24,.02,.2),{m:b.clone().multiply(N(0,.09,.12)),color:()=>[.25,.18,.12],tip:()=>1});let C=[[.75,.3,.3],[.85,.7,.35],[.75,.62,.8],[.9,.88,.85]];for(let F=0;F<9;F++){let j=-.55+F*.14,y=.1+T(F,L,1)*.1;E.add(new Fe(.006,.006,y,4),{m:b.clone().multiply(N(j,.1+y/2,.12+(F%2-.5)*.08)),color:()=>[.3,.42,.24],tip:()=>0}),E.add(new Dt(.03,6,5),{m:b.clone().multiply(N(j,.1+y,.12+(F%2-.5)*.08)),color:()=>C[F%4],tip:()=>0})}};ue(1.35,o/2+.2,0),ue(s/2+.2,-.3,Math.PI/2),E.add(new Le(1,.015,.6),{m:N((u+h)/2,.205,o/2+.55),color:V(L=>Math.floor((L.x+9)*12)%2?[.42,.33,.22]:[.5,.4,.27]),tip:()=>1}),E.add(new Fe(.015,.015,1.2,6),{m:N(u-.3,.8,o/2+.25,.08,0,.12),color:U(.6),tip:()=>0}),E.add(new Qt(.12,.3,8),{m:N(u-.24,.32,o/2+.24),color:()=>[.68,.58,.36],tip:()=>0}),[[-2.9,0],[-2.75,.32]].forEach(([L,q],g)=>{E.add(new Le(.48,.32,.4),{m:N(L,.36+q,o/2+1.9,0,g*.3,0),color:b=>{let C=.55+(Math.abs((b.y+9)*9%1-.5)<.1?-.1:0)+T(b.x*9,b.y,b.z*9)*.08;return[C,C*.84,C*.62]},tip:(b,C)=>C.y>.5?1:0})}),E.add(new Fe(.05,.06,1.7,8),{m:N(qe+.6,.85,o/2+2.9),color:U(.4),tip:()=>0}),E.add(new Le(.2,.05,.2),{m:N(qe+.6,1.72,o/2+2.9),color:k(.15,.15,.15),tip:()=>1}),w.add(new Le(.15,.2,.15),{m:N(qe+.6,1.84,o/2+2.9),color:()=>[1,1,1]}),E.add(new Qt(.15,.12,4),{m:N(qe+.6,2,o/2+2.9,0,Math.PI/4,0),color:k(.15,.15,.15),tip:()=>1});for(let L=0;L<6;L++){let q=(u+h)/2-1.6-L*.65+Math.sin(L*1.7)*.2,g=o/2+2.9+L*.35;E.add(new Fe(.28+T(L,3,3)*.1,.3,.06,9),{m:N(q,0,g,0,L,0,1,1,.8),color:O,tip:()=>1})}let le=s/2-a,Te=o/2-a;for(let L=-le,q=0;L<le-.01;L+=.2,q++){let g=Yt("wood",F=>{let j=(.5+q%4*.025)*(.92+T(F.x*4,0,F.z*1.2)*.16)*(Math.abs((F.z+9+q*.37)%1.6-.8)<.01?.7:1);return[j,j*.8,j*.6]}),b=L+.1;(b>Xe.x0&&b<Xe.x1?[[-Te-.05,Xe.bottom],[Xe.top,Te+.05]]:[[-Te-.05,Te+.05]]).forEach(([F,j])=>{j-F>.02&&R.add(new Le(.195,.06,j-F),{m:N(b,.09,(F+j)/2),color:g})})}for(let L=Xe.bottom;L<=1.5;L+=.55)R.add(new Le(.05,.9,.05),{m:N(Xe.x0-.02,.57,L),color:U(.5)});R.add(new Le(.07,.06,1.5-Xe.bottom+.05),{m:N(Xe.x0-.02,1.04,(Xe.bottom+1.5)/2),color:U(.55)}),R.add(new Le(Xe.x1-Xe.x0+.05,.06,.07),{m:N((Xe.x0+Xe.x1)/2,1.04,Xe.bottom-.02),color:U(.55)}),[Xe.x0+.5,Xe.x1-.03].forEach(L=>R.add(new Le(.05,.9,.05),{m:N(L,.57,Xe.bottom-.02),color:U(.5)})),R.add(new Le(.03,.16,.36),{m:N(Xe.x0-.05,.86,1.5),color:U(.62)}),R.add(new Fe(.17,.17,.04,24),{m:N(-.4,1.8,Te-.03,Math.PI/2,0,0),color:U(.45)}),R.add(new Fe(.14,.14,.01,24),{m:N(-.4,1.8,Te-.055,Math.PI/2,0,0),color:Yt("paper",()=>[.9,.87,.8])}),R.add(new Le(.008,.1,.006),{m:N(-.4,1.83,Te-.065,0,0,.5),color:()=>[.1,.1,.1]}),R.add(new Le(.008,.12,.006),{m:N(-.4,1.84,Te-.066,0,0,-1.9),color:()=>[.1,.1,.1]}),R.add(new Fe(.015,.015,1.5,6),{m:N(f.x,1.62,-Te+.62,0,0,Math.PI/2),color:k(.2,.2,.2)}),[-.5,-.1,.35].forEach((L,q)=>{R.add(new Fe(.1-q*.015,.08-q*.012,.13,12),{m:N(f.x+L,1.42,-Te+.64),color:k(.62,.36,.22)}),R.add(new Fe(.008,.008,.14,4),{m:N(f.x+L,1.55,-Te+.64),color:k(.2,.2,.2)})}),R.add(new Dt(.12,12,8),{m:N(f.x-.7,.31,-Te+.75,0,0,0,1,.8,1),color:k(.2,.2,.22)}),R.add(new Fe(.015,.03,.12,6),{m:N(f.x-.58,.36,-Te+.75,0,0,-.9),color:k(.2,.2,.22)}),[[-.6,.14],[-.5,.2],[.55,.1]].forEach(([L,q])=>R.add(new Fe(.025,.025,q,8),{m:N(f.x+L,1.52+q/2,-Te+.4),color:()=>[.9,.86,.76]})),[[.1,[.4,.2,.18]],[.16,[.24,.3,.36]],[.21,[.5,.45,.32]]].forEach(([L,q])=>R.add(new Le(.05,.22,.16),{m:N(f.x+L,1.63,-Te+.4),color:()=>q})),[-1.1,1.1].forEach(L=>R.add(new Le(s-.2,.2,.2),{m:N(0,d-.02,L),color:U(.42)})),R.add(new Le(.2,.22,o+.2),{m:N(0,d+p-.2,0),color:U(.42)}),[-1,1].forEach(L=>[-1.8,0,1.8].forEach(q=>R.add(new Le(xe-.6,.14,.1),{m:N(L*(he-.3)/2,d+p-te*.47-.1,q,0,0,-L*re),color:U(.4)})));let et=f;R.add(new Le(1.95,.12,1),{m:N(et.x,.17,-Te+.5),color:O}),[-1,1].forEach(L=>R.add(new Le(.36,1.25,.7),{m:N(et.x+L*.76,.85,-Te+.35),color:O})),R.add(new Le(1.2,1.25,.2),{m:N(et.x,.85,-Te+.1),color:L=>{let q=O(L);return[q[0]*.45,q[1]*.42,q[2]*.4]}}),R.add(new Le(2,.16,.42),{m:N(et.x,1.44,-Te+.4),color:U(.42)});for(let L=0;L<4;L++)R.add(new Le(1.3-L*.04,.3,.55),{m:N(et.x,1.67+L*.3,-Te+.27),color:O});[[-.2,.3],[.15,-.25],[0,.05]].forEach(([L,q])=>R.add(new Fe(.07,.08,.7,7),{m:N(et.x+L*.4,.3,-Te+.42,0,q,Math.PI/2),color:(g,b)=>Math.abs(b.x)>.8?[.2,.15,.1]:[.18,.13,.1]})),w.add(new Le(.9,.05,.45),{m:N(et.x,.25,-Te+.42),color:W(1,.62,.3)}),R.add(new Fe(.28,.24,.32,10,1,!0),{m:N(et.x-1.25,.28,-Te+.35),color:U(.5)});for(let L=0;L<5;L++)R.add(new Fe(.05,.05,.55,6),{m:N(et.x-1.25+(L-2)*.08,.42+L%2*.04,-Te+.35,.2*(L-2),0,Math.PI/2+.1),color:U(.5)});let ze=[],ct=11,Mt=()=>(ct=ct*16807%2147483647,ct/2147483647),st=(L,q,g,b,C,F=!1)=>{let j=document.createElement("canvas");j.width=L,j.height=q,g(j.getContext("2d"),L,q);let y=new zn(j);y.colorSpace=Sn,y.anisotropy=8;let P=new je(b,new mn({map:y,color:12432296,alphaTest:F?.5:0}));return P.applyMatrix4(C),P.receiveShadow=!0,ze.push(P),P},tt=(L,q,g,b=.05)=>{for(let C=0;C<q*g*b;C++)L.fillStyle=Mt()<.5?"rgba(0,0,0,0.12)":"rgba(255,245,225,0.09)",L.fillRect(Mt()*q,Mt()*g,1.5,1.5)},Ft=L=>(q,g,b)=>{q.clearRect(0,0,g,b);let C=16,F=(b/2-2)/C;for(let j=0;j<C;j++){let y=g/2-2-j*F,P=b/2-2-j*F;q.fillStyle=L[(j*5+j%3)%L.length],q.beginPath(),q.ellipse(g/2,b/2,Math.max(y,1),Math.max(P,1),0,0,A),q.fill(),q.strokeStyle="rgba(0,0,0,0.22)",q.lineWidth=1.2;let G=Math.PI*(y+P),X=Math.floor(G/7);for(let Y=0;Y<X;Y++){let ge=Y/X*A,Ce=g/2+Math.cos(ge)*(y-F/2),Re=b/2+Math.sin(ge)*(P-F/2),Ie=(j%2?1:-1)*F*.35;q.beginPath(),q.moveTo(Ce-Math.sin(ge)*Ie-Math.cos(ge)*F*.4,Re+Math.cos(ge)*Ie-Math.sin(ge)*F*.4),q.lineTo(Ce+Math.sin(ge)*Ie+Math.cos(ge)*F*.4,Re-Math.cos(ge)*Ie+Math.sin(ge)*F*.4),q.stroke()}}q.globalCompositeOperation="source-atop",tt(q,g,b,.03),q.globalCompositeOperation="source-over"},mt=(L,q,g)=>{L.clearRect(0,0,q,g);let b=14,C=["#7d3b2e","#c7b48c","#3e5363","#a5622f","#e0d4b6","#5b6b4b"];for(let F=2;F<g-2;F+=4)L.fillStyle="#ddd2b8",L.fillRect(0,F,b+1,2),L.fillRect(q-b-1,F,b+1,2);for(let F=b,j=0;F<q-b;j++){let y=6+Math.floor(Mt()*14);L.fillStyle=C[j%C.length],L.fillRect(F,0,Math.min(y,q-b-F),g),F+=y}for(let F=0;F<g;F+=3)L.fillStyle="rgba(0,0,0,0.1)",L.fillRect(b,F,q-2*b,1);tt(L,q,g,.04)},wt=(L,q,g)=>{let b=["#8b2f2a","#c9b98e","#3f566a","#6d7f52","#b36a35","#e6dcc4","#5a3d52","#a44b3e"],j=q/10,y=g/7;for(let P=0;P<10;P++)for(let G=0;G<7;G++)if(L.fillStyle=b[Math.floor(Mt()*b.length)],L.fillRect(P*j,G*y,j,y),Mt()<.5&&(L.fillStyle=b[Math.floor(Mt()*b.length)],L.beginPath(),L.moveTo(P*j,G*y),L.lineTo(P*j+j,G*y+y),L.lineTo(P*j,G*y+y),L.fill()),Mt()<.3){L.fillStyle="rgba(255,255,255,0.18)";for(let X=0;X<6;X++)L.fillRect(P*j+Mt()*j,G*y+Mt()*y,3,3)}L.strokeStyle="rgba(250,240,220,0.55)",L.setLineDash([4,4]),L.lineWidth=1.2;for(let P=0;P<=10;P++)L.beginPath(),L.moveTo(P*j+3,0),L.lineTo(P*j+3,g),L.stroke();for(let P=0;P<=7;P++)L.beginPath(),L.moveTo(0,P*y+3),L.lineTo(q,P*y+3),L.stroke();L.setLineDash([]),tt(L,q,g,.02)},Ht=(L,q,g,b=0)=>new it().compose(new B(L,q,g),new ht().setFromEuler(new tn(-Math.PI/2,b,0,"YXZ")),new B(1,1,1));st(768,512,Ft(["#7a3a2c","#b78d5c","#4a5a66","#d8c8a4","#8a5a3a","#5d6a4c","#9e4632"]),new xt(2.4,1.6),Ht(.55,.124,.5),!0),st(512,320,mt,new xt(1,.62),Ht(-1.95,.124,-.85),!0),st(512,256,mt,new xt(.9,.45),Ht((u+h)/2,.124,Te-.45),!0);let Et=-le+.02,at=Et+1.95,se=-Te+.02,H=se+1,be=(Et+at)/2,fe=(se+H)/2,I=L=>Zt([[.045,0],[.045,.1],[.032,.13],[.03,L*.4],[.048,L*.47],[.032,L*.55],[.028,L-.12],[.042,L-.08],[.02,L-.05],[.032,L-.02],[0,L]],10);[[Et+.05,se+.05,1.05],[Et+.05,H-.05,1.05],[at-.05,se+.05,.72],[at-.05,H-.05,.72]].forEach(([L,q,g])=>R.add(I(g),{m:N(L,.12,q),color:U(.45)})),[[Et+.05,.95,.3],[at-.05,.68,.18]].forEach(([L,q,g])=>{R.add(Ne(.06,.08,H-se-.1,.02,1),{m:N(L,q,fe),color:U(.5)}),R.add(Ne(.05,.06,H-se-.1,.015,1),{m:N(L,q-g,fe),color:U(.5)});for(let b=se+.16;b<H-.1;b+=.11)R.add(new Fe(.012,.012,g,6),{m:N(L,q-g/2,b),color:U(.48)})}),[se+.05,H-.05].forEach(L=>R.add(Ne(at-Et-.1,.14,.05,.015,1),{m:N(be,.36,L),color:U(.45)})),R.add(z(at-Et-.1,.04,H-se-.1),{m:N(be,.33,fe),color:U(.4)}),R.add(Ne(at-Et-.12,.17,H-se-.08,.06,2),{m:N(be,.48,fe),color:W(.88,.86,.8,"fabric")}),st(512,360,wt,Ne(1.4,.035,H-se+.06,.015,1),N(at-.75,.585,fe+.02)),st(512,120,wt,Ne(1.4,.26,.025,.01,1),N(at-.75,.46,H+.03)),R.add(Ne(.4,.06,H-se-.06,.025,2),{m:N(at-.24,.62,fe),color:V(L=>Math.sin(L.z*60)>.5?[.32,.2,.18]:[.5,.24,.2])}),[[fe-.22,.1],[fe+.2,-.12]].forEach(([L,q])=>R.add(Ne(.34,.12,.42,.06,2),{m:N(Et+.3,.63,L,0,q,.25),color:W(.93,.91,.87,"fabric")}));{let L=at+.45,q=se+.25;R.add(Ne(.7,.36,.42,.02,1),{m:N(L,.31,q),color:U(.5)}),R.add(new Fe(.21,.21,.7,16,1,!1,-Math.PI/2,Math.PI),{m:N(L,.49,q,0,0,Math.PI/2,1,1,.45),color:U(.52)}),[-.24,0,.24].forEach(g=>R.add(new Fe(.215,.215,.035,16,1,!0,-Math.PI/2,Math.PI),{m:N(L+g,.49,q,0,0,Math.PI/2,1,1,.46),color:k(.2,.2,.21)})),[-.24,0,.24].forEach(g=>R.add(z(.035,.36,.43),{m:N(L+g,.31,q),color:k(.2,.2,.21)})),R.add(Ne(.1,.12,.02,.01,1),{m:N(L,.44,q+.22),color:k(.55,.45,.25)}),[-1,1].forEach(g=>R.add(new Tn(.04,.008,4,10,Math.PI),{m:N(L+g*.36,.38,q,0,Math.PI/2,Math.PI),color:k(.2,.2,.21)}))}let v={x:.9,z:.6};R.add(Ne(1.3,.055,.85,.02,2),{m:N(v.x,.885,v.z),color:U(.55)}),R.add(Ne(1.12,.09,.68,.01,1),{m:N(v.x,.81,v.z),color:U(.46)});let Z=Zt([[.03,0],[.036,.04],[.026,.12],[.04,.3],[.03,.48],[.036,.56],[.034,.64],[.034,.7]],8);[[-.56,-.34],[.56,-.34],[-.56,.34],[.56,.34]].forEach(([L,q])=>R.add(Z,{m:N(v.x+L,.12,v.z+q),color:U(.45)}));let ee=Zt([[.016,0],[.02,.05],[.015,.16],[.022,.28],[.018,.4],[.02,.44]],6);[-1,1].forEach(L=>{let q=new it().compose(new B(v.x,.12,v.z+L*.68),new ht().setFromAxisAngle(new B(0,1,0),L<0?0:Math.PI),new B(1,1,1)),g=(b,C,F)=>R.add(b,{m:q.clone().multiply(C),color:F});g(Ne(.44,.045,.42,.02,2),N(0,.46,0),U(.52)),[[-.17,-.15],[.17,-.15],[-.17,.15],[.17,.15]].forEach(([b,C])=>g(ee,N(b*1.08,0,C*1.08,C*.4,0,-b*.4),U(.45))),g(new Fe(.01,.01,.36,6),N(0,.16,0,0,0,Math.PI/2),U(.45));for(let b=-2;b<=2;b++){let C=b*.075,F=.31-Math.sqrt(.25-C*C);g(new Fe(.009,.011,.5,6),N(C,.73,F-.01,-.08,0,0),U(.5))}g(new Tn(.5,.022,6,16,.9),N(0,.98,.31-.02,-Math.PI/2,0,Math.PI/2-.45),U(.52))}),R.add(Zt([[0,0],[.07,0],[.075,.02],[.05,.05],[.055,.09],[.03,.1]],12),{m:N(v.x+.35,.91,v.z-.15),color:k(.6,.47,.25)}),S.add(Zt([[.03,0],[.06,.06],[.065,.12],[.035,.22],[.03,.28]],12),{m:N(v.x+.35,1.01,v.z-.15),color:W(1,1,1)}),w.add(new Dt(.018,8,6),{m:N(v.x+.35,1.07,v.z-.15,0,0,0,1,2,1),color:W(1,1,1)}),R.add(Zt([[.04,0],[.045,.01],[.042,.1],[.046,.105]],12),{m:N(v.x-.3,.91,v.z+.2),color:W(.75,.73,.7,"paper")}),R.add(new Tn(.025,.007,5,10),{m:N(v.x-.25,.965,v.z+.2,0,0,Math.PI/2),color:W(.75,.73,.7,"paper")}),R.add(Ne(.22,.04,.3,.008,1),{m:N(v.x-.25,.93,v.z-.2,0,.3,0),color:W(.3,.36,.42,"leather")}),R.add(Zt([[0,0],[.08,0],[.14,.04],[.165,.075],[.155,.08]],16),{m:N(v.x+.05,.91,v.z+.15),color:U(.5)}),[[0,0],[.07,.05],[-.06,.05],[0,-.07]].forEach(([L,q],g)=>R.add(new Dt(.055,10,7),{m:N(v.x+.05+L,.99+(g===3?.04:0),v.z+.15+q),color:W(.66,.66,.65)}));{let L=new it().compose(new B(.05,.12,-1),new ht().setFromAxisAngle(new B(0,1,0),2.12),new B(1,1,1)),q=(g,b,C)=>R.add(g,{m:L.clone().multiply(b),color:C});[-1,1].forEach(g=>{let b=[];for(let C=-.36;C<=.361;C+=.06)b.push(new B(g*.22,.03+.75-Math.sqrt(.5625-C*C),C));q(new Mi(new Qr(b),16,.02,5),N(),U(.42)),q(new Fe(.018,.02,.4,6),N(g*.22,.2,.18),U(.45)),q(new Fe(.018,.02,.95,6),N(g*.22,.5,-.2,-.18,0,0),U(.45)),q(Ne(.05,.03,.5,.012,1),N(g*.25,.62,0),U(.52))}),q(Ne(.48,.045,.44,.02,2),N(0,.4,0),U(.5)),q(Ne(.42,.05,.4,.025,2),N(0,.44,.01),V(()=>[.5,.24,.2]));for(let g=0;g<4;g++)q(Ne(.4,.07,.015,.006,1),N(0,.58+g*.12,-.25-g*.02,-.18,0,0),U(.5));q(Ne(.36,.34,.03,.015,1),N(.03,.82,-.3,-.18,0,.05),V(g=>Math.sin(g.y*90)>0?[.66,.6,.48]:[.58,.52,.4])),q(Ne(.38,.05,.08,.02,1),N(.03,1,-.33,0,0,.05),V(()=>[.62,.56,.44]))}{let L=new it().compose(new B(-le,.12,-.45),new ht().setFromAxisAngle(new B(0,1,0),Math.PI/2),new B(1,1,1)),q=(g,b,C,F=R)=>F.add(g,{m:L.clone().multiply(b),color:C});q(Ne(1.5,.74,.52,.012,1),N(0,.45,.27),U(.46)),q(z(1.46,.08,.46),N(0,.04,.24),U(.3)),[-.49,0,.49].forEach((g,b)=>{q(Ne(.45,.6,.03,.008,1),N(g,.46,.54),U(.52)),q(Ne(.31,.44,.02,.015,1),N(g,.46,.56),U(.44)),q(new Dt(.016,8,6),N(g+(b===1?0:g<0?.17:-.17),.62,.575),k(.2,.2,.21))}),q(Ne(1.56,.06,.6,.015,2),N(0,.85,.3),Yt("wood",g=>{let b=.58+(Math.abs(g.x*12.5%1)<.06?-.08:0)+T(g.x*9,g.y,g.z*3)*.08;return[b*1.04,b*.8,b*.56]})),q(Zt([[0,-.13],[.12,-.12],[.19,-.06],[.21,0],[.225,.01]],18),N(-.35,.99,.3),W(.9,.9,.86,"metal")),q(new Tn(.222,.01,5,24),N(-.35,1,.3,Math.PI/2,0,0),W(.15,.2,.36,"metal")),q(new Fe(.045,.05,.42,10),N(-.35,1.08,.06),k(.16,.16,.17)),q(new Fe(.02,.025,.2,8),N(-.35,1.22,.16,Math.PI/2-.3,0,0),k(.16,.16,.17)),q(new Fe(.012,.012,.42,6),N(-.35,1.38,0,.9,0,0),k(.16,.16,.17)),q(Ne(.42,.03,.28,.01,1),N(.35,.895,.32,0,.15,0),U(.62)),q(Ne(.28,.12,.14,.06,2),N(.33,.97,.32,0,.1,0),Yt("plain",g=>g.y>.99?[.62,.38,.18]:[.75,.55,.3])),q(Ne(.2,.01,.03,.004,1),N(.55,.915,.42,0,-.3,0),k(.7,.7,.72)),q(Ne(.9,.03,.16,.008,1),N(.1,1.52,.08),U(.48)),q(Ne(.9,.025,.02,.006,1),N(.1,1.6,.15),U(.48)),[-.22,.02,.26].forEach((g,b)=>q(new Fe(.12,.12,.015,20),N(g,1.66,.06,Math.PI/2-.15,0,0),b===1?W(.82,.84,.86,"metal"):W(.86,.84,.78,"plaster"))),[.42,.52].forEach(g=>q(Zt([[0,0],[.035,0],[.04,.09],[.042,.095]],10),N(g,1.535,.08),W(.3,.4,.5,"plaster"))),q(new Fe(.015,.015,1.4,6),N(0,2.05,.25,0,0,Math.PI/2),U(.4)),[-.55,-.3,-.05,.2,.45].forEach((g,b)=>{q(new Fe(.002,.002,.14,3),N(g,1.97,.25),W(.5,.45,.35)),q(new Qt(.06+b%2*.02,.26,7),N(g,1.78,.25,Math.PI,b,0),b%3===0?W(.42,.46,.28,"fabric"):b%3===1?W(.55,.5,.32,"fabric"):W(.5,.36,.42,"fabric"))})}[1.35,1.75].forEach(L=>{R.add(new Le(.26,.04,1.3),{m:N(-le+.14,L,.9),color:U(.5)}),R.add(new Le(.04,.16,.04),{m:N(-le+.04,L-.1,.35),color:U(.4)}),R.add(new Le(.04,.16,.04),{m:N(-le+.04,L-.1,1.45),color:U(.4)})}),[[.4,.08,.16,[.62,.66,.66]],[.6,.06,.12,[.6,.58,.5]],[.78,.07,.2,[.55,.6,.62]]].forEach(([L,q,g,b])=>{R.add(new Fe(q,q,g,10),{m:N(-le+.14,1.37+g/2,L),color:W(...b)}),R.add(new Fe(q*.8,q*.8,.03,10),{m:N(-le+.14,1.38+g,L),color:W(.45,.35,.25)})}),[[1,.24,[.45,.22,.2]],[1.06,.2,[.25,.32,.36]],[1.12,.26,[.4,.38,.28]],[1.18,.22,[.6,.55,.45]],[1.26,.19,[.3,.3,.32]]].forEach(([L,q,g],b)=>{R.add(new Le(.18,q,.05),{m:N(-le+.14,1.77+q/2,L,b===4?.25:0,0,0),color:W(...g)})}),R.add(new Fe(.015,.015,.12,5),{m:N(-2.6,1.7,Te-.06,Math.PI/2,0,0),color:U(.4)}),R.add(new Le(.42,.85,.12),{m:N(-2.6,1.25,Te-.1),color:V(L=>{let q=.32+T(L.x*9,L.y*9,0)*.04;return[q*.85,q,q*.9]})}),[-2.7,-2.48].forEach(L=>{R.add(new Le(.11,.26,.13),{m:N(L,.25,Te-.2),color:W(.2,.16,.13)}),R.add(new Le(.11,.07,.26),{m:N(L,.155,Te-.26),color:W(.2,.16,.13)})}),R.add(new Le(.5,.38,.03),{m:N(-.25,1.6,-Te+.02),color:U(.4)}),R.add(new xt(.4,.28),{m:N(-.25,1.6,-Te+.04),color:L=>L.y>1.6?[.7,.72,.74]:[.4,.45,.4]});let oe=new Ot,ae=h-u-.04;for(let L=0;L<5;L++)oe.add(new Le(ae/5-.008,m-.04,.06),{m:N(.02+ae/10+L*ae/5,(m-.04)/2,0),color:U(.5+L%2*.04),tip:()=>0});[.35,m-.4].forEach(L=>oe.add(new Le(ae-.1,.12,.04),{m:N(.02+ae/2,L,-.05),color:U(.46),tip:()=>0})),oe.add(new Le(.1,Math.hypot(ae-.2,m-.95),.04),{m:N(.02+ae/2,m/2-.02,-.05,0,0,Math.atan2(ae-.2,m-.95)),color:U(.46),tip:()=>0}),[.06,-.08].forEach(L=>oe.add(new Fe(.02,.02,.14,6),{m:N(ae-.1,1,L),color:k(.18,.18,.19),tip:()=>0})),[.3,m-.3].forEach(L=>oe.add(new Le(.4,.05,.075),{m:N(.22,L,0),color:k(.18,.18,.19),tip:()=>0}));let de=new Ot;de.add(new Dt(1,14,6,0,Math.PI*2,Math.PI/2,Math.PI/2),{m:N(0,0,0,0,0,0,1.25,.42,.5),color:L=>L.y>-.05?[.55,.4,.28]:[.4,.3,.22],tip:()=>1}),de.add(new Le(.16,.05,.9),{m:N(.1,-.08,0),color:W(.5,.4,.3),tip:()=>1}),de.add(new Le(.16,.05,.75),{m:N(-.6,-.08,0),color:W(.5,.4,.3),tip:()=>1}),de.add(new Fe(.025,.025,2.2,5),{m:N(.2,0,.1,0,.3,1.45),color:W(.55,.45,.32),tip:()=>0});let Q={value:1},ne=hn({...e,uFrost:{value:0}},Q,{color:13812656,snowMask:!0,snowBias:.12,grain:.022,rich:!0}),ce=hn({...e,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0}},Q,{color:14865600,grain:.018,rich:!0,indoor:!0}),ye=hn({...e,uFrost:{value:0}},Q,{color:13812656,snowMask:!0,side:nn,rich:!0,grain:.02}),me=new an({color:1315860}),ve=new an({color:11122624,transparent:!0,opacity:.16,depthWrite:!1}),_e=new fn;_e.position.set(dt.x,dt.y,dt.z),_e.rotation.y=dt.yaw,_e.scale.setScalar(r);let Pe=new je(E.geometry(),ne);Pe.castShadow=!0,Pe.receiveShadow=!0;let Se=new je(R.geometry(),ce);Se.receiveShadow=!0,Se.castShadow=!0;let K=new je(w.geometry(),me),we=new je(S.geometry(),ve);we.renderOrder=2;let pe=new je(oe.geometry(),ne);pe.castShadow=!0;let De=new fn;De.position.set(u+.02,.1,o/2),De.add(pe);let Ue=new je(de.geometry(),ye);Ue.castShadow=!0,Ue.position.set(.9,0,M+x-2.5),Ue.rotation.y=.12;let Me=new an({color:16752704,transparent:!0,opacity:.85,blending:Yn,depthWrite:!1}),$e=[[-.18,.28],[.12,.34],[0,.42],[.25,.22]].map(([L,q])=>{let g=new je(new Qt(.09,1,7,1,!0).translate(0,.5,0),Me);return g.position.set(f.x+L,.3,-Te+.42),g.userData.h=q,_e.add(g),g});_e.add(Pe,Se,K,we,De,Ue),ze.forEach(L=>_e.add(L)),i.add(_e),_e.updateMatrixWorld(!0);let Ye=cd({group:_e,mats:{inn:ce,glow:me},camera:n,U:t}),nt=new Ei(16752728,0,46,1.4);nt.position.copy(new B(f.x,.9,-Te+1.1)).applyAxisAngle(new B(0,1,0),dt.yaw).multiplyScalar(r).add(_e.position),i.add(nt),nt.castShadow=!0,nt.shadow.autoUpdate=!1,nt.shadow.mapSize.set(512,512),nt.shadow.camera.near=.5,nt.shadow.camera.far=46,nt.shadow.bias=-.003,nt.shadow.normalBias=.2,nt.shadow.camera.layers.set(5),nt.shadow.needsUpdate=!0,[Pe,Se,pe].forEach(L=>L.layers.enable(5));let Pt=(()=>{let L=Ye.glowSpots,q=Math.PI*2,g=[{p:[f.x,.45,-Te+.45],size:1.7,color:[1,.5,.2],flicker:1},{p:[.9+.35,1.07,.6-.15],size:.5,color:[1,.7,.4],flicker:1}];for(let C=0;C<8;C++){let F=C/8*q;g.push({p:[L.CH.x+Math.cos(F)*.82,L.CH.y+.2,L.CH.z+Math.sin(F)*.82],size:.32,color:[1,.72,.4],flicker:1})}for(let C=0;C<6;C++){let F=C/6*q+.3;g.push({p:[L.CH.x+Math.cos(F)*.42,L.CH.y+.6,L.CH.z+Math.sin(F)*.42],size:.3,color:[1,.72,.4],flicker:1})}g.push({p:[-3.2,L.F+1.52,-.9],size:.9,color:[1,.78,.5]},{p:[.6,L.F+1.06,-7.98],size:.5,color:[.9,.95,.7]}),[-1,1].forEach(C=>g.push({p:[-1.8+C*1.5,L.F+2.37,L.Z1-.19],size:.6,color:[1,.75,.45]})),[-5.35,-3,-.9,.9,3,5.35].forEach(C=>g.push({p:[C,L.SLAB-.02,-8.55],size:.36,color:[1,.88,.7]})),[-6,-3.4,-.8,1.6].forEach(C=>[-5.45,2.7,5].forEach(F=>g.push({p:[F,L.SLAB-.02,C],size:.36,color:[1,.88,.7]})));let b=(C,F)=>[C,F];return ju({group:_e,U:t,beams:[{rect:[[-.95,L.F+2.62,L.Z0+.04],[.95,L.F+2.62,L.Z0+.04],[.95,L.F+.55,L.Z0+.04],[-.95,L.F+.55,L.Z0+.04]],dir:[.1,-.5,1],len:6.5,k:1.2},{rect:[[.75,1.95,o/2-.2],[1.95,1.95,o/2-.2],[1.95,.95,o/2-.2],[.75,.95,o/2-.2]],dir:[-.25,-.55,-1],len:3.2,k:1},{rect:[[s/2-.2,1.95,-.3],[s/2-.2,1.95,.9],[s/2-.2,.95,.9],[s/2-.2,.95,-.3]],dir:[-1,-.5,.15],len:3,k:.8}],halos:g,dust:[{box:[-4.6,1.4,L.F+.3,L.C-.5,-9.2,2.2],n:520},{box:[-2.9,2.9,.3,2.5,-2.2,2.2],n:170}]})})(),rn=nt.position.clone(),on=(()=>{let q=new Lt,g=new Float32Array(90*3),b=new Float32Array(90);for(let j=0;j<90;j++)b[j]=j/90;q.setAttribute("position",new Gt(g,3)),q.setAttribute("aSeed",new Gt(b,1));let C=new Ut({transparent:!0,depthWrite:!1,uniforms:{uTime:t.uTime,uOpacity:{value:0},uColor:{value:new ke(13224393)},uSize:{value:70}},vertexShader:`
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
        }`}),F=new $n(q,C);return F.frustumCulled=!1,F.position.copy(_e.localToWorld(Be.clone())),i.add(F),F})(),sn=(L,q)=>{let g=(L-dt.x)/r,b=(q-dt.z)/r,C=Math.cos(dt.yaw),F=Math.sin(dt.yaw);return[g*C-b*F,g*F+b*C]},ie=(L,q)=>{let g=Math.cos(dt.yaw),b=Math.sin(dt.yaw);return[dt.x+(L*g+q*b)*r,dt.z+(-L*b+q*g)*r]},Ge=[[-s/2-.3,s/2+.3,-o/2-a,-o/2+a],[-s/2-a,-s/2+a,-o/2-.3,o/2+.3],[s/2-a,s/2+a,-o/2-.3,o/2+.3],[-s/2-.3,u,o/2-a,o/2+a],[h,s/2+.3,o/2-a,o/2+a],[Et,at,se,H],[at+.08,at+.82,se,se+.5],[v.x-.65,v.x+.65,v.z-.43,v.z+.43],[v.x-.25,v.x+.25,v.z-.95,v.z-.45],[v.x-.25,v.x+.25,v.z+.45,v.z+.95],[et.x-1,et.x+1,-Te-.1,-Te+1],[et.x-1.55,et.x-.95,-Te,-Te+.65],[-le,-le+.3,.25,1.55],[-le,-le+.62,-1.22,.32],[-.3,.4,-1.4,-.65],[.8,2.15,o/2+.26,o/2+.7],[-s/2-.95,-s/2-.2,-1.75,0],[s/2+.2,s/2+.9,o/2-.8,o/2-.1],[-s/2-1.75,-s/2-1.05,1.05,1.75],[Ee+.15,Ee+.35,o/2+2.1,o/2+2.3],[qe-.35,qe-.15,o/2+2.1,o/2+2.3]];Ge.push([Xe.x0-.07,Xe.x0+.02,Xe.bottom-.05,1.5],[Xe.x0,Xe.x1,Xe.bottom-.09,Xe.bottom],[-3.2,-2.5,o/2+1.65,o/2+2.15],[qe+.5,qe+.7,o/2+2.8,o/2+3]);let He=[u,h,o/2-.1,o/2+.1],yt=[u-.06,u+.08,o/2-ae-.05,o/2],un=(L,q,[g,b,C,F],j)=>L>g-j&&L<b+j&&q>C-j&&q<F+j,qt={open:!1,a:0,from:0,t0:-1e9},_n=ie((u+h)/2,o/2),It=L=>(L-dt.y)/r,ui=L=>L>-.7?"ground":L<-3.2?"study":"stairs",ti=(L,q)=>L>Xe.x0&&L<Xe.x1&&q>Xe.bottom&&q<Xe.top,Mn=(L,q)=>L>Xt.x0&&L<Xt.x1&&q>Xt.z0&&q<Xt.z1,di=(L,q)=>L>-s/2+a-.05&&L<s/2-a+.05&&q>-o/2+a&&q<o/2+a+.05,Gn=(L,q,g,b)=>{let C=[ie(L,g),ie(q,g),ie(L,b),ie(q,b)];return[Math.min(...C.map(F=>F[0])),Math.max(...C.map(F=>F[0])),Math.min(...C.map(F=>F[1])),Math.max(...C.map(F=>F[1]))]};return{group:_e,study:Ye,holeBox:Gn(-s/2+a,s/2-a,-o/2+a,o/2-a),studyBox:Gn(Xt.x0-.3,Xt.x1+.3,Xt.z0-.3,Xt.z1+.3),blocked(L,q,g,b){let[C,F]=sn(L,q);if(Math.abs(C)>Xt.x1+3||F<Xt.z0-3||F>o/2+4)return!1;let j=.17+g/r,y=It(b),P=ui(y);if(P==="stairs")return C<Xe.x0+j||C>Xe.x1-j||F>Xe.top+.05;if(P==="study")return od(C,F,j,y);if(Math.abs(C)>s/2+3||F<-o/2-3)return!1;for(let G of Ge)if(un(C,F,G,j))return!0;return!!(qt.a<.5?un(C,F,He,j):un(C,F,yt,j*.6))},inside(L,q,g){let[b,C]=sn(L,q);return Math.abs(b)<s/2&&Math.abs(C)<o/2||Mn(b,C)&&It(g)<-1},floors(L,q,g){let[b,C]=sn(L,q),F=j=>dt.y+j*r;ti(b,C)?g.push({y:F(Oi(C)),under:!0}):di(b,C)&&g.push({y:F(.12),under:!0});for(let j of ad(b,C))g.push({y:F(j),under:!0});return b>-3.3&&b<3.4&&C>=o/2+a+.05&&C<o/2+2.4&&g.push({y:F(.2),under:!1}),b>-2.25&&b<-.35&&C>M-.3&&C<M+x&&g.push({y:F(.24-(C-M)*.024),under:!1}),g},door:{mesh:pe,near(L,q){return Math.hypot(L-_n[0],q-_n[1])<13},get open(){return qt.open},canToggle(L,q){if(!qt.open)return!0;let[g,b]=sn(L,q);return!un(g,b,[u-.1,h+.1,o/2-ae-.1,o/2+.25],.17)},toggle(L){return qt.open=!qt.open,qt.from=qt.a,qt.t0=L,qt.open}},update(L,q,g,b,C){let F=L.pCabin,j=F>.01;if(j&&(this.syncT>g-1500||(this.syncT=g,Ye.sync()),Ye.update(q,g)),Ye.lampLight.intensity=j?120*(.96+.04*Math.sin(q*3.1)):0,j&&C!==void 0){let[Y,ge]=sn(n.position.x,n.position.z),Ce=It(C);Ce>-.7&&Math.abs(Y)<s/2+1&&Math.abs(ge)<o/2+1&&(this.shF=(this.shF||0)+1)%3===0&&(nt.shadow.needsUpdate=!0),Ce<-3&&Mn(Y,ge)&&!(this.shL>g-2500)&&(this.shL=g,Ye.shadowLight.shadow.needsUpdate=!0)}Pt.update({on:j,day:Math.max(0,Math.min(1,L.light||.6))*(1-Math.min(1,L.pGlow)*.85),beamColor:L.lightC}),_e.visible=j,on.visible=j&&F>.5,_e.scale.setScalar(r*Math.max(.001,F));let y=Math.min(1,(g-qt.t0)/900),P=qt.open?1-Math.pow(1-y,3)*Math.cos(y*3.2):1-Math.pow(1-y,4);qt.a=qt.from+((qt.open?1:0)-qt.from)*P,De.rotation.y=qt.a*1.72;let G=Math.min(1,L.pGlow),X=.86+.08*Math.sin(q*9.1+Math.sin(q*2.7)*2)+.06*Math.sin(q*23.3);me.color.setRGB(.07,.07,.075).lerp(new ke(1.3,.8,.42),G*X),$e.forEach((Y,ge)=>{let Ce=Y.userData.h*(.75+.35*Math.sin(q*(7+ge*1.7)+ge*2)*Math.sin(q*(3.1+ge)));Y.scale.set(1,Math.max(.05,Ce*G),1),Y.visible=G>.05}),Me.opacity=.75*G,nt.intensity=G*F*220*X,nt.position.set(rn.x+Math.sin(q*5.3)*.15,rn.y+Math.sin(q*7.1)*.1,rn.z),on.material.uniforms.uColor.value.copy(L.fog).multiplyScalar(1.1).addScalar(.05),on.material.uniforms.uOpacity.value=Math.min(F,.35+G*.5),Ue.position.y=(b+.9+Math.sin(q*.9)*.15-dt.y)/r,Ue.rotation.z=Math.sin(q*.7)*.03}}}var li=(i,e)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},Mc=(i,e)=>{let t=Math.floor(i),n=Math.floor(e),r=i-t,s=e-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=li(t,n),l=li(t+1,n),d=li(t,n+1),p=li(t+1,n+1);return c+(l-c)*o+(d-c)*a+(c-l-d+p)*o*a},Gi=(i,e,t=5)=>{let n=0,r=.5,s=1;for(let o=0;o<t;o++)n+=r*Mc(i*s,e*s),s*=2.03,r*=.5;return n},Nx=(i,e)=>{let t=0,n=.5,r=1;for(let s=0;s<5;s++)t+=n*(1-Math.abs(Mc(i*r,e*r)*2-1)),r*=2.1,n*=.5;return t},ki=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},cn=(i,e)=>{let t=Math.hypot(i*.75,e+20),n=ki(55,240,t),r=(Gi(i*.006+3,e*.006+7)-.45)*46*(.25+n);r+=Math.pow(ki(120,650,-e),1.3)*Nx(i*.0028,e*.0028)*260,r+=ki(160,520,Math.abs(i))*Gi(i*.004,e*.004+11)*130,r-=(1-n)*9,r+=(Gi(i*.035+17,e*.035+5,2)-.5)*3.2*(.3+n);{let d=Math.min(1,Math.max(0,((i-205)*-113+(e- -130)*14)/12965)),p=Math.hypot(i-(205+-113*d),e-(-130+14*d)),u=ki(48,12,p)*ki(1.04,.9,d),h=4.6+(Gi(i*.05,e*.05,2)-.5)*1.6-d*.6;u>0&&(r=r+(Math.max(r,h)-r)*u)}let s=Math.hypot(i-dt.x,e-dt.z);s<44&&(r+=(dt.y-.12-r)*ki(44,22,s));{let o=(e-dt.z)/dt.S,a=-(i-dt.x)/dt.S,c=Math.max(Math.min(Xt.x0,Tt.x0)-o,o-Math.max(Xt.x1,Tt.x1),0),l=Math.max(Tt.z0-a,a-Xt.z1,0),d=Math.hypot(c,l)*dt.S;d<16&&(r=Math.max(r,r+(dt.y-.12-r)*ki(16,5,d)))}return r};function hd(i){let e={uLow:{value:new ke},uHigh:{value:new ke},uSnow:{value:new ke},uSnowLine:{value:100},uSand:{value:0},uHole:{value:new Wt(1e9,1e9,1e9,1e9)},uWaterY:{value:0},uWaterC:{value:new ke(7172984)}},t=new xt(2200,1800,300,245);t.rotateX(-Math.PI/2),t.translate(0,0,-400);let n=t.attributes.position;for(let o=0;o<n.count;o++)n.setY(o,cn(n.getX(o),n.getZ(o)));t.computeVertexNormals();let r=new mn({color:16777215});r.onBeforeCompile=o=>{Object.assign(o.uniforms,e),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying float vH; varying float vSlope; varying vec2 vXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vSlope = 1.0 - normal.y; vXZ = position.xz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uLow, uHigh, uSnow, uWaterC; uniform float uSnowLine, uSand, uWaterY; uniform vec4 uHole; varying float vH; varying float vSlope; varying vec2 vXZ;
        float th(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float tn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(th(i), th(i + vec2(1, 0)), f.x), mix(th(i + vec2(0, 1)), th(i + vec2(1, 1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        if (vXZ.x > uHole.x && vXZ.x < uHole.y && vXZ.y > uHole.z && vXZ.y < uHole.w) discard;
        vec3 land = mix(uLow, uHigh, smoothstep(-5.0, 120.0, vH));
        float snow = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH) * (1.0 - smoothstep(0.35, 0.7, vSlope));
        float d1 = tn(vXZ * 0.08), d2 = tn(vXZ * 0.45), d3 = tn(vXZ * 2.2);
        land *= 0.82 + 0.22 * d1 + 0.12 * d2 + 0.08 * d3;
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
        #include <opaque_fragment>`)};let s=new je(t,r);return s.receiveShadow=!0,i.add(s),{mesh:s,TU:e}}function ud(i,e){let t={x0:-700,z0:-800,w:1400,d:1300},n=448,r=416,s=(()=>{let d=new Uint16Array(n*r);for(let u=0;u<r;u++)for(let h=0;h<n;h++)d[u*n+h]=Ls.toHalfFloat(cn(t.x0+(h+.5)/n*t.w,t.z0+(u+.5)/r*t.d));let p=new pr(d,n,r,ss,Bn);return p.minFilter=p.magFilter=gn,p.needsUpdate=!0,p})(),o=(()=>{let d=document.createElement("canvas");d.width=d.height=256;let p=d.getContext("2d"),u=p.createImageData(256,256);for(let m=0;m<256;m++)for(let M=0;M<256;M++){let x=Gi(M/22,m/7,4),f=Gi(M/22+.6,m/7,4),E=Gi(M/22,m/7+.6,4),R=(m*256+M)*4;u.data[R]=128+(x-f)*300,u.data[R+1]=128+(x-E)*300,u.data[R+2]=255,u.data[R+3]=255}p.putImageData(u,0,0);let h=new zn(d);return h.wrapS=h.wrapT=Vr,h.repeat.set(60,60),h})(),a=new ks({color:7829367,roughness:.3,metalness:.35,normalMap:o,normalScale:new Ze(.35,.35),transparent:!0}),c={uStudy:{value:new Wt(1e9,1e9,1e9,1e9)},tShore:{value:s},uShore:{value:new Wt(t.x0,t.z0,t.w,t.d)},uLevel:{value:0},uTime:e.uTime};a.onBeforeCompile=d=>{Object.assign(d.uniforms,c),d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vWXZ; uniform vec4 uStudy, uShore; uniform sampler2D tShore; uniform float uLevel, uTime;
        float wh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float wn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(wh(i), wh(i + vec2(1, 0)), f.x), mix(wh(i + vec2(0, 1)), wh(i + vec2(1, 1)), f.x), f.y); }`).replace("#include <clipping_planes_fragment>",`if (vWXZ.x > uStudy.x && vWXZ.x < uStudy.y && vWXZ.y > uStudy.z && vWXZ.y < uStudy.w) discard;
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
        }`)};let l=new je(new xt(4e3,4e3).rotateX(-Math.PI/2),a);return i.add(l),l.renderOrder=1,{mesh:l,mat:a,tex:o,WU:c}}function dd(i,e){Object.assign(e,{uTop:{value:new ke},uHorizon:{value:new ke},uBottom:{value:new ke},uSunColor:{value:new ke},uSunDir:{value:new B(0,.2,-1)},uSunSize:{value:0},uStars:{value:0},uAurora:{value:0},uAur1:{value:new ke},uAur2:{value:new ke}});let t=new je(new Dt(1400,48,24),new Ut({uniforms:e,side:xn,depthWrite:!1,fog:!1,vertexShader:`
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
        }`}));return t.frustumCulled=!1,i.add(t),t}var hi=(i,e)=>i+Math.random()*(e-i);function fd(i,e,t){let r=new Lt;{let m=new Float32Array(15600),M=new Float32Array(2600*2);for(let x=0;x<2600;x++){let f=hi(-90,90),E=hi(0,70),R=hi(-140,40);m.set([f,E,R,f,E,R],x*6),M[x*2+1]=1}r.setAttribute("position",new Gt(m,3)),r.setAttribute("aEnd",new Gt(M,1))}let s=new Ut({transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new ke(14672870)}},vertexShader:`
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
      }`}),o=new Us(r,s);o.frustumCulled=!1,i.add(o);let a=(m,M,x,f,E)=>{let R=new Lt,w=new Float32Array(m*3),S=new Float32Array(m);for(let _=0;_<m;_++)w.set([hi(-M[0],M[0]),hi(M[1],M[2]),hi(M[3],M[4])],_*3),S[_]=Math.random();R.setAttribute("position",new Gt(w,3)),R.setAttribute("aSeed",new Gt(S,1));let T=new Ut({transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new ke(f)},uSize:{value:E*t}},vertexShader:x,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5));
          gl_FragColor = vec4(uColor, a * uOpacity * vA);
          #include <colorspace_fragment>
        }`}),U=new $n(R,T);return U.frustumCulled=!1,i.add(U),U},c=a(3200,[110,0,70,-160,40],`
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
    }`,14275248,5),p=(()=>{let m=document.createElement("canvas");m.width=256,m.height=128;let M=m.getContext("2d"),x=M.createRadialGradient(128,64,0,128,64,128);return x.addColorStop(0,"rgba(255,255,255,0.9)"),x.addColorStop(.5,"rgba(255,255,255,0.35)"),x.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=x,M.fillRect(0,0,256,128),new zn(m)})(),u=Array.from({length:9},(m,M)=>{let x=new an({map:p,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),f=new je(new xt(hi(380,620),hi(70,120)),x);return f.position.set(hi(-400,400),hi(8,45),-60-M*70),f.userData.v=hi(1.2,3.2)*(Math.random()<.5?-1:1),i.add(f),f}),h=(m,M)=>{m.material.uniforms.uOpacity.value=M,m.visible=M>.01};return{get rainAmount(){return s.uniforms.uOpacity.value},update(m,M,x,f,E,R,w){h(o,m.rain*R),h(c,m.snow*R),h(l,m.leaves*R),h(d,m.fire),o.position.set(M.x,M.y-20,M.z),c.position.copy(o.position),l.position.copy(o.position),d.position.set(x.x*.3,E,f.z-90),u.forEach(S=>{S.position.x+=S.userData.v*w,S.position.x>520?S.position.x=-520:S.position.x<-520&&(S.position.x=520),S.lookAt(M.x,S.position.y,M.z);let T=Math.hypot(S.position.x-M.x,S.position.z-M.z);S.material.opacity=m.mist*.5*ki(12,80,T)*R,S.material.color.copy(m.fog),S.visible=S.material.opacity>.003})}}}var Ec=null,Dx=()=>{if(Ec)return Ec;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.75)"),t.addColorStop(.7,"rgba(255,255,255,0.25)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ec=new zn(i),Ec};function lo(i,e,t,n=.45){let r=new xt(1,1).rotateX(-Math.PI/2),s=new an({color:0,alphaMap:Dx(),transparent:!0,depthWrite:!1,opacity:n,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),o=new Rn(r,s,Math.max(1,t.length)),a=new it,c=new ht,l=new ht,d=new B(0,1,0),p=new B,u=new B,h=new B;return t.forEach((m,M)=>{let f=e(m.x,m.z);p.set(e(m.x-2,m.z)-e(m.x+2,m.z),2*2,e(m.x,m.z-2)-e(m.x,m.z+2)).normalize(),c.setFromUnitVectors(d,p).multiply(l.setFromAxisAngle(d,m.yaw||0)),u.set(m.x,f+.12,m.z),h.set(m.sx,1,m.sz),o.setMatrixAt(M,a.compose(u,c,h))}),o.count=t.length,o.computeBoundingSphere(),o.renderOrder=0,i.add(o),{mesh:o,set(m){s.opacity=n*m,o.visible=m>.01}}}var pd={rain:[1,1,1,1,1,1,.65,0,0,1,0,0,.75],frost:[1,1,0,.85,.7,1,.25,1,0,0,1,.55,0],mist:[1,1,1,1,1,1,.35,0,0,0,0,0,1],snow:[1,1,0,.3,.45,1,.6,0,0,0,1,1,0],night:[1,1,.9,1,1,1,1,0,0,0,0,0,.5],aurora:[1,1,0,.6,.6,1,1,1,0,0,.8,.75,0],ocean:[1,0,0,.7,0,0,0,0,1,0,0,0,.3],spring:[1,1,1,1,1,1,.3,0,0,0,0,0,.5],summer:[1,1,.8,1,.7,1,.2,0,0,0,0,0,.2],fall:[1,1,.6,.8,.9,1,.5,0,0,0,0,0,.4]},Sc=["pRocks","pLogs","pFerns","pGrass","pReeds","pCabin","pGlow","pStones","pStacks","pRipples","pFrost","pSnowCover","pMoss"];function md({scene:i,heightAt:e,U:t,snowColor:n,clear:r=[]}){let s=ds(20260707),o=(se,H)=>se+s()*(H-se),a={uTime:t.uTime,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0},uSnowC:n,uMossC:{value:new ke("#4f6a3c")}},c={};Sc.forEach(se=>{c[se]={value:0}});let l=["leaves","flowers","hives","creek"];l.forEach(se=>{c[se]={value:0}});let d=[],p=[],u=[],h=(se,H)=>Math.hypot(e(se+2,H)-e(se-2,H),e(se,H+2)-e(se,H-2))/(2*2),m=(se,H,be,fe=1)=>{let v=e(se-2,H)-e(se+2,H),Z=e(se,H-2)-e(se,H+2),ee=new B(v*fe,2*2,Z*fe).normalize();return new ht().setFromUnitVectors(new B(0,1,0),ee).multiply(new ht().setFromAxisAngle(new B(0,1,0),be))},M=(se,H)=>!r.some(be=>Math.hypot(be.x-se,be.z-H)<be.r),x=(se,H,{cast:be=!1,receive:fe=!0}={})=>(se.castShadow=be,se.receiveShadow=fe,i.add(se),d.push([se,H]),se),f=160,E=[],R=se=>{let H=new B(1,0,0).applyQuaternion(se);return Math.atan2(-H.z,H.x)},w=(se,H,be,fe)=>{let I=se.map(v=>{let[Z,ee]=be(v.s);return{x:v.p.x,z:v.p.z,sx:Z,sz:ee,yaw:R(v.q)}});E.push({key:H,b:lo(i,e,I,fe)})},S=(se,H,be,fe,I)=>{let v=new Map;be.forEach(ee=>{let oe=Math.floor(ee.p.x/f)+","+Math.floor(ee.p.z/f);v.has(oe)||v.set(oe,[]),v.get(oe).push(ee)});let Z=new it;v.forEach(ee=>{let oe=new Rn(se,H,ee.length);ee.forEach((ae,de)=>{Z.compose(ae.p,ae.q,ae.s),oe.setMatrixAt(de,Z)}),oe.computeBoundingSphere(),x(oe,fe,I)})},T=(se,H,be,fe)=>{let I=null,v=1e9;for(let Z=0;Z<900;Z++){let ee=s()*Math.PI*2,oe=Math.sqrt(s())*be,ae=se+Math.cos(ee)*oe,de=H+Math.sin(ee)*oe;fe(ae,de)&&oe<v&&(v=oe,I={x:ae,z:de})}return I||{x:se,z:H}},U={x:dt.x,z:dt.z};u.push({x:U.x,z:U.z,r:34});let _=T(-95,-258,50,(se,H)=>{let be=e(se,H);return be>9&&be<32&&h(se,H)<.16});u.push({x:_.x,z:_.z,r:30});let O=(se,H)=>{let be=new xr(1,H),fe=be.attributes.position,I=new B;for(let v=0;v<fe.count;v++){I.fromBufferAttribute(fe,v);let Z=1+(zt(I.x*1.6+se,I.y*1.6,I.z*1.6)-.5)*.55+(zt(I.x*4+se,I.y*4,I.z*4)-.5)*.14;I.multiplyScalar(Z),I.y=I.y<-.25?-.25+(I.y+.25)*.2:I.y,I.y*=.72,I.x*=1.12,fe.setXYZ(v,I.x,I.y,I.z)}return new Ot().add(be,{flat:!0,color:v=>{let Z=.5+zt(v.x*3+se,v.y*3,v.z*3)*.28+v.y*.12;return[Z,Z*.99,Z*.95]}}).geometry()},W=hn(a,c.pRocks,{color:9277328,snowBias:.05}),k=[[],[],[]],V=[],z=(se,H,be,fe,I)=>{let v=e(se,H),Z=new B(be*o(.8,1.25),be*o(.6,1.1),be*o(.8,1.2));fe.push({p:new B(se,v-be*.12,H),q:m(se,H,s()*6.28,.6),s:Z}),I&&p.push({x:se,z:H,r:be*1.05+1.2,key:"pRocks",top:v-be*.12+Z.y*.82,rt:be*.75})};for(let se=0,H=0;se<260&&H<2e4;H++){let be=o(-560,560),fe=o(-560,230),I=e(be,fe);if(I<-1.5||I>75)continue;let Z=s()<.25?o(4,9):o(1.2,3.4);u.some(ee=>Math.hypot(ee.x-be,ee.z-fe)<ee.r+Z)||!M(be,fe)||(z(be,fe,Z,k[se%3],Z>2.2),se++)}for(let se=0,H=0;se<70&&H<9e3;H++){let be=o(-260,260),fe=o(-260,160),I=e(be,fe);I<-1.2||I>1.5||u.some(v=>Math.hypot(v.x-be,v.z-fe)<v.r)||!M(be,fe)||(z(be,fe,o(1.5,5),k[se%3],!0),se++)}for(let se=0,H=0;se<700&&H<2e4;H++){let be=o(-480,480),fe=o(-480,200),I=e(be,fe);I<-.6||I>70||!M(be,fe)||u.some(v=>Math.hypot(v.x-be,v.z-fe)<v.r)||(z(be,fe,o(.35,1),V,!1),se++)}k.forEach((se,H)=>S(O(H*17.3,2),W,se,"pRocks",{cast:!0})),w(k.flat(),"pRocks",se=>[se.x*3,se.z*3],.5),S(O(5.1,1),W,V,"pRocks");let A=se=>{let H=.42+zt(se.x*9,se.y*2,se.z*2)*.22+Math.sin(Math.atan2(se.z,se.y)*9)*.04;return[H*1,H*.82,H*.66]},D=(()=>{let se=new Ot,H=new Fe(1,.9,1,12,5,!0),be=H.attributes.position,fe=new B;for(let v=0;v<be.count;v++){fe.fromBufferAttribute(be,v);let Z=1+(zt(fe.x*3,fe.y*6,fe.z*3)-.5)*.18;be.setXYZ(v,fe.x*Z,fe.y,fe.z*Z)}H.computeVertexNormals(),se.add(H,{m:N(0,0,0,0,0,Math.PI/2),color:A});let I=v=>{let Z=Math.hypot(v.y,v.z),ee=.62+Math.sin(Z*26)*.05-Z*.12;return[ee*1.05,ee*.9,ee*.72]};return se.add(new mr(.88,12),{m:N(.5,0,0,0,Math.PI/2,0),color:I}),se.add(new mr(.98,12),{m:N(-.5,0,0,0,-Math.PI/2,0),color:I}),se.add(new Fe(.12,.2,.9,6,1),{m:N(.15,.55,.3,.5,0,-.5,1,1,1),color:A}),se.geometry()})(),J=(()=>{let se=new Ot,H=new Fe(.85,1,1,12,3,!0),be=H.attributes.position,fe=new B;for(let I=0;I<be.count;I++){fe.fromBufferAttribute(be,I);let v=Math.atan2(fe.z,fe.x),Z=fe.y<-.3?1+.35*Math.pow(Math.max(0,Math.sin(v*5)),2):1,ee=fe.y>.45?(zt(fe.x*4,0,fe.z*4)-.5)*.3:0;be.setXYZ(I,fe.x*Z,fe.y+ee,fe.z*Z)}return H.computeVertexNormals(),se.add(H,{m:N(0,.5,0),color:I=>A(I)}),se.add(new mr(.85,12),{m:N(0,.98,0,-Math.PI/2,0,0),color:I=>{let v=Math.hypot(I.x,I.z),Z=.6+Math.sin(v*22)*.05;return[Z*1.05,Z*.9,Z*.7]}}),se.geometry()})(),$=hn(a,c.pLogs,{color:12036506}),he=(()=>{let se=new Ot,H=Z=>{let ee=new Le(1,1,1,3,5,2),oe=ee.attributes.position,ae=new B;for(let de=0;de<oe.count;de++){ae.fromBufferAttribute(oe,de);let Q=1-(ae.y+.5)*.3,ne=1+(zt(ae.x*3+Z,ae.y*3,ae.z*3)-.5)*.35,ce=ae.y>.35?1-(ae.y-.35)*1.2*Math.hypot(ae.x,ae.z):1;oe.setXYZ(de,ae.x*Q*ne*ce,ae.y+(ae.y>.4?(zt(ae.x*5,Z,ae.z*5)-.5)*.15:0),ae.z*Q*ne*ce)}return ee},be=Z=>ee=>{let oe=.5+zt(ee.x*2+Z,ee.y*2,ee.z*2)*.22;return[oe*.97,oe,oe*.98]},fe=11,I=15;for(let Z=0;Z<fe;Z++){let ee=Z/fe*Math.PI*2+o(-.06,.06),oe=Math.cos(ee)*I,ae=Math.sin(ee)*I,de=o(5,9.5),Q=Z===4?.35:o(-.06,.06),ne=e(_.x+oe,_.z+ae)-e(_.x,_.z);se.add(H(Z*3.7),{m:N(oe,ne+de/2-.6,ae,Q,-ee+Math.PI/2,o(-.05,.05),o(2.2,3.2),de,o(1,1.5)),flat:!0,color:be(Z)}),p.push({x:_.x+oe,z:_.z+ae,r:3.6,key:"pStones"})}se.add(H(40),{m:N(3,.4,-2,.1,.7,Math.PI/2-.05,2.6,7,1.4),flat:!0,color:be(40)}),se.add(H(50),{m:N(-2,.5,2.5,0,.3,0,4.5,1.5,2.6),flat:!0,color:be(50)}),p.push({x:_.x+3,z:_.z-2,r:4.5,key:"pStones"},{x:_.x-2,z:_.z+2.5,r:4,key:"pStones"});let v=new je(se.geometry(),hn(a,c.pStones,{color:10132636}));return v.position.set(_.x,e(_.x,_.z),_.z),x(v,"pStones",{cast:!0})})(),te=(se,H)=>{let be=new Fe(H?.85:.5,1.15,1,12,10,!1),fe=be.attributes.position,I=new B;for(let v=0;v<fe.count;v++){I.fromBufferAttribute(fe,v);let Z=I.y+.5,ee=1+(zt(I.x*2+se,I.y*5,I.z*2)-.5)*.6+Math.sin(I.y*26+se)*.04;!H&&Z>.55&&(ee*=1-(zt(se,I.y*3,1)-.3)*.5);let oe=I.y>.49&&!H?(zt(I.x*3+se,0,I.z*3)-.5)*.25:0,ae=H?0:Z*Z*.18*Math.sin(se);fe.setXYZ(v,I.x*ee+ae,I.y+oe,I.z*ee)}return be},re=new Ot,xe={x:132,z:-178};[[-125,-135,9,70],[-150,-95,5,36],[-170,-70,7,48],[-82,-215,8,95],[52,-255,10,58],[72,-240,4.5,30],[195,-105,6,40],[-30,-300,9,80],[xe.x,xe.z,30,22]].forEach(([se,H,be,fe],I,v)=>{let Z=I===v.length-1,ee=11+fe*.5-.1;re.add(te(I*9.1,Z),{m:N(se,ee-fe/2-8,H,0,I,0,be,fe+16,be*o(.8,1.1)),flat:!0,color:oe=>{let ae=.42+zt(oe.x*.2,oe.y*.6,oe.z*.2)*.24,de=oe.y>ee-1.5?.12:0;return[ae-de*.4,ae+de*.3,ae*.95-de*.3]}}),p.push({x:se,z:H,r:be*1.2+1.5,key:"pStacks"})});{let H=new B(xe.x,21.9,xe.z),be=new Fe(2.6,3.8,26,16,8,!1);re.add(be,{m:N(H.x,H.y+13,H.z),color:fe=>Math.floor((fe.y-21.9)/6.5)%2?[.55,.22,.2]:[.92,.91,.88]}),re.add(new Fe(4,4,.5,16),{m:N(H.x,H.y+26.2,H.z),color:()=>[.2,.2,.22]}),re.add(new Fe(2,2,.6,12),{m:N(H.x,H.y+26.7,H.z),color:()=>[.2,.2,.22]}),re.add(new Qt(2.6,2.6,12),{m:N(H.x,H.y+31.3,H.z),color:()=>[.25,.23,.24]}),re.add(new Le(7,4,5),{m:N(H.x+7,H.y+2,H.z+3),color:()=>[.85,.84,.8]}),re.add(new Qt(5,2.6,4),{m:N(H.x+7,H.y+5.3,H.z+3,0,Math.PI/4,0,1,1,.75),color:()=>[.45,.25,.22]})}x(new je(re.geometry(),hn(a,c.pStacks,{color:11051942,sink:140})),"pStacks");let Be=new B(xe.x,11+22*.5-.1+28.5,xe.z),Ae=new je(new Fe(1.8,1.8,3.2,12),new an({color:16769712,fog:!1}));Ae.position.copy(Be),x(Ae,"pStacks",{receive:!1});let Je=new fn;Je.position.copy(Be);let Ee=new Ut({transparent:!0,depthWrite:!1,blending:Yn,side:nn,fog:!1,uniforms:{uOpacity:{value:0}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uOpacity; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float t = clamp(-vY, 0.0, 1.0); float facing = abs(dot(normalize(vN), normalize(vV))); float a = pow(1.0 - t, 2.2) * smoothstep(0.0, 0.03, t) * pow(facing, 1.6); gl_FragColor = vec4(vec3(1.0, 0.9, 0.72) * a * uOpacity, 1.0); }"});[0,Math.PI].forEach(se=>{let H=new je(new Qt(1,1,20,1,!0).translate(0,-.5,0),Ee);H.rotation.set(Math.PI/2,0,0),H.scale.set(8,230,8);let be=new fn;be.rotation.y=se,be.add(H),H.position.z=0,Je.add(be)}),i.add(Je);let qe=(se,H,be,fe,I,v)=>{let Z=new Ot,ee=[];for(let ae=0;ae<se;ae++){let de=ae/se*Math.PI*2+s()*.7,Q=o(H,be),ne=o(.15,.55),ce=s()*fe,ye=Math.cos(de)*ce,me=Math.sin(de)*ce,ve=Math.cos(de)*ne,_e=Math.sin(de)*ne,Pe=-Math.sin(de)*I,Se=Math.cos(de)*I,K=[ye+ve*Q*.35,Q*.55,me+_e*Q*.35],we=[ye+ve*Q,Q*.92,me+_e*Q];ee.push([ye-Pe,0,me-Se],[ye+Pe,0,me+Se],[K[0]+Pe*.6,K[1],K[2]+Se*.6]),ee.push([ye-Pe,0,me-Se],[K[0]+Pe*.6,K[1],K[2]+Se*.6],[K[0]-Pe*.6,K[1],K[2]-Se*.6]),ee.push([K[0]-Pe*.6,K[1],K[2]-Se*.6],[K[0]+Pe*.6,K[1],K[2]+Se*.6],we)}let oe=be;return Z.tris(ee,ae=>{let de=ae.y/oe;return[v[0]*(.55+.6*de),v[1]*(.55+.6*de),v[2]*(.55+.6*de)]},ae=>Math.pow(ae.y/oe,1.5),new B(0,1,0)),Z},ue=qe(11,.9,1.8,.55,.07,[.48,.6,.3]).geometry(),le=qe(9,3.2,5.5,.5,.06,[.6,.66,.42]);[[.15,.1],[-.2,.25],[.05,-.3]].forEach(([se,H],be)=>{let fe=4.6+be*.5;le.add(new Fe(.03,.03,fe,4),{m:N(se,fe/2,H),color:()=>[.5,.52,.35],tip:()=>.3}),le.add(new Fe(.11,.11,.7,6),{m:N(se,fe+.2,H),color:()=>[.36,.26,.18],tip:()=>.6})});let Te=le.geometry(),et=(()=>{let se=new Ot,H=[],be=8;for(let fe=0;fe<be;fe++){let I=fe/be*Math.PI*2+s()*.5,v=o(1.6,2.3),Z=o(.7,1.1),ee=[Math.cos(I),Math.sin(I)],oe=[-Math.sin(I),Math.cos(I)],ae=Q=>[ee[0]*v*Q,Z*Math.sin(Q*Math.PI*.75)-.25*Q*Q,ee[1]*v*Q],de=9;for(let Q=0;Q<de;Q++){let ne=Q/de,ce=(Q+1)/de,ye=(ne+ce)/2,me=ae(ne),ve=ae(ce),_e=ae(ye),Pe=.34*Math.sin(Math.PI*Math.min(1,ye*1.1))*(1-ye*.4)+.03,Se=oe[0]*Pe,K=oe[1]*Pe;H.push(me,ve,[_e[0]+Se,_e[1]-.06,_e[2]+K]),H.push(me,[_e[0]-Se,_e[1]-.06,_e[2]-K],ve)}}return se.tris(H,fe=>{let I=Math.hypot(fe.x,fe.z)/2.3;return[.36+I*.22,.52+I*.26,.26+I*.12]},fe=>Math.hypot(fe.x,fe.z)/2.3,new B(0,1,0)),se.geometry()})(),ze=[],ct=(se,H)=>{let be=hn(a,c[se],{sway:H,side:nn,color:16777215,snowBias:-1,softBack:!0});return ze.push(be),be},Mt=null,st=null,tt=null,Ft=(se,H,be)=>{let fe=(()=>{let Q=new Ot,ne=new Dt(1,14,7,0,Math.PI*2,0,Math.PI/2),ce=ne.attributes.position,ye=new B;for(let ve=0;ve<ce.count;ve++){ye.fromBufferAttribute(ce,ve);let _e=1+(zt(ye.x*3,ye.y*3,ye.z*3)-.5)*.4;ce.setXYZ(ve,ye.x*_e,ye.y*.32*_e,ye.z*_e)}ne.computeVertexNormals();let me=[[.86,.42,.1],[.72,.18,.08],[.92,.68,.16],[.55,.3,.12]];Q.add(ne,{color:ve=>{let _e=me[Math.floor(zt(ve.x*6,ve.y*6,ve.z*6)*3.99)],Pe=.7+zt(ve.x*20,0,ve.z*20)*.5;return[_e[0]*Pe,_e[1]*Pe,_e[2]*Pe]}});for(let ve=0;ve<26;ve++){let _e=s()*6.28,Pe=Math.sqrt(s())*1.15,Se=me[ve%4];Q.add(new xt(.16,.1),{m:N(Math.cos(_e)*Pe,.33*(1-Pe*Pe*.6)+.02,Math.sin(_e)*Pe,-Math.PI/2+o(-.4,.4),s()*6,0),color:()=>Se})}return Q.geometry()})(),I=[];for(let Q=0;I.length<320&&Q<6e3;Q++){let ne=se[Math.floor(s()*se.length)];if(!ne)break;let ce=s()*6.28,ye=o(2,9),me=ne.p.x+Math.cos(ce)*ye,ve=ne.p.z+Math.sin(ce)*ye,_e=e(me,ve);if(_e<1||_e>70||H(me,ve))continue;let Pe=o(1.4,3.2);I.push({p:new B(me,_e-.1,ve),q:m(me,ve,s()*6.28,.8),s:new B(Pe,Pe*o(.8,1.3),Pe*o(.7,1.1))})}S(fe,hn(a,c.leaves,{side:nn,softBack:!0,snowBias:-1}),I,"leaves");let v=(Q,ne)=>{let ce=new Ot;for(let ye=0;ye<6;ye++){let me=s()*6.28,ve=s()*.5,_e=Math.cos(me)*ve,Pe=Math.sin(me)*ve,Se=o(.35,.7);ce.add(new Fe(.012,.016,Se,4).translate(0,Se/2,0),{m:N(_e,0,Pe),color:()=>[.32,.5,.24],tip:()=>0});for(let K=0;K<5;K++){let we=K/5*6.28+me;ce.add(new Dt(.06,6,4),{m:N(_e+Math.cos(we)*.06,Se,Pe+Math.sin(we)*.06,0,-we,0,1.3,.3,.7),color:()=>Q,tip:()=>1})}ce.add(new Dt(.035,6,4),{m:N(_e,Se+.015,Pe),color:()=>ne,tip:()=>1}),ce.add(new xt(.14,.05),{m:N(_e+.04,Se*.4,Pe,0,me,.5),color:()=>[.34,.55,.26],tip:()=>0})}return ce.geometry()},Z=hn(a,c.flowers,{sway:.08,side:nn,softBack:!0,snowBias:-1});[[[.92,.45,.62],[.95,.85,.3]],[[.96,.84,.25],[.7,.45,.15]],[[.72,.68,.95],[.98,.95,.6]],[[.98,.97,.95],[.95,.8,.25]]].forEach(([Q,ne],ce)=>{let ye=[];for(let me=0;ye.length<520&&me<3e4;me++){let ve=o(-420,420),_e=o(-420,190),Pe=e(ve,_e);if(Pe<1||Pe>55||H(ve,_e)||!M(ve,_e)||be(ve,_e,3)||zt(ve*.025+ce*3,1,_e*.025)<.5)continue;let Se=o(1.6,2.6);ye.push({p:new B(ve,Pe-.05,_e),q:m(ve,_e,s()*6.28,.5),s:new B(Se,Se,Se)})}S(v(Q,ne),Z,ye,"flowers")});let ee=(()=>{let Q=new Ot,ne=Yt("wood",ye=>{let me=.5+zt(ye.x*6,ye.y*6,ye.z*6)*.12;return[me,me*.8,me*.58]});[[-.22,-.18],[.22,-.18],[-.22,.18],[.22,.18]].forEach(([ye,me])=>Q.add(new Le(.06,.4,.06),{m:N(ye,.2,me),color:ne})),Q.add(new Le(.58,.06,.5),{m:N(0,.42,0),color:ne});let ce=[[.92,.9,.84],[.86,.82,.62],[.78,.86,.84]];for(let ye=0;ye<3;ye++)Q.add(new Le(.5,.24,.44),{m:N(0,.57+ye*.245,0),color:()=>ce[ye]});return Q.add(new Le(.56,.05,.5),{m:N(0,1.3,0),color:()=>[.6,.58,.55]}),[-1,1].forEach(ye=>Q.add(new Le(.34,.03,.54),{m:N(ye*.14,1.38,0,0,0,-ye*.5),color:()=>[.45,.42,.4]})),Q.add(new Le(.22,.03,.02),{m:N(0,.49,.225),color:()=>[.08,.06,.05]}),Q.add(new Le(.3,.02,.1),{m:N(0,.46,.27,.25,0,0),color:ne}),Q.geometry()})(),oe=[],ae=[];[[-5.6,-.6],[-5.6,.9],[-5.6,2.4]].forEach(([Q,ne])=>{let ce=dt.x-ne*dt.S,ye=dt.z+Q*dt.S,me=e(ce,ye);oe.push({p:new B(ce,me,ye),q:new ht().setFromAxisAngle(new B(0,1,0),Math.PI+.1),s:new B(dt.S,dt.S,dt.S)}),p.push({x:ce,z:ye,r:2.8,key:"hives"}),ae.push(ce,me+4.5,ye)}),S(ee,hn(a,c.hives,{rich:!0,grain:.02}),oe,"hives",{cast:!0}),w(oe,"hives",()=>[dt.S*1.2,dt.S*1.1],.4);{let ne=new Lt,ce=new Float32Array(60*3),ye=new Float32Array(60);for(let ve=0;ve<60;ve++){let _e=ve%3;ce.set([ae[_e*3],ae[_e*3+1],ae[_e*3+2]],ve*3),ye[ve]=s()}ne.setAttribute("position",new Gt(ce,3)),ne.setAttribute("aSeed",new Gt(ye,1));let me=new Ut({transparent:!0,depthWrite:!1,uniforms:{uTime:t.uTime,uOpacity:{value:0}},vertexShader:`uniform float uTime; attribute float aSeed; varying float vB;
          void main() {
            float t = uTime * (1.2 + aSeed) + aSeed * 40.0;
            vec3 p = position + vec3(sin(t * 1.3) * (1.5 + aSeed * 4.0), sin(t * 2.1) * 1.2 + cos(t * 0.7) * 1.5, cos(t * 1.1) * (1.5 + aSeed * 4.0));
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = 26.0 / -mv.z; vB = aSeed;
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`uniform float uOpacity; varying float vB;
          void main() { vec2 q = gl_PointCoord - 0.5; float d = length(q); if (d > 0.5) discard;
            vec3 c = mix(vec3(0.12, 0.1, 0.06), vec3(0.95, 0.75, 0.2), step(0.0, sin(q.x * 30.0)));
            gl_FragColor = vec4(c, uOpacity * smoothstep(0.5, 0.35, d)); }`});tt=new $n(ne,me),tt.frustumCulled=!1,i.add(tt)}let de=[];{let Q=-275,ne=-30,ce=1,ye=0;for(let me=0;me<260;me++){let ve=e(Q,ne);if(de.push([Q,ne]),ve<-.6)break;let _e=2,Pe=e(Q+_e,ne)-e(Q-_e,ne),Se=e(Q,ne+_e)-e(Q,ne-_e),K=Math.hypot(-Q,-20-ne)||1,we=ce*.7-Pe*.6+-Q/K*.25+(zt(me*.1,3,1)-.5)*.5,pe=ye*.7-Se*.6+(-20-ne)/K*.25+(zt(me*.1,7,2)-.5)*.5,De=Math.hypot(we,pe)||1;ce=we/De,ye=pe/De,Q+=ce*4,ne+=ye*4}}if(de.length>4){let Q=[],ne=[],ce=[],ye=0;de.forEach(([ve,_e],Pe)=>{let[Se,K]=de[Math.max(0,Pe-1)],[we,pe]=de[Math.min(de.length-1,Pe+1)],De=we-Se,Ue=pe-K,Me=Math.hypot(De,Ue)||1;De/=Me,Ue/=Me;let $e=3+3.6*Math.min(1,Pe/25)+Math.sin(Pe*.4)*.8,Ye=ve-Ue*$e,nt=_e+De*$e,Pt=ve+Ue*$e,rn=_e-De*$e,on=Math.max(e(Ye,nt),e(Pt,rn),e(ve,_e))+.32;if(Pe&&(ye+=Math.hypot(ve-de[Pe-1][0],_e-de[Pe-1][1])),Q.push(Ye,on,nt,Pt,on,rn),ne.push(0,ye/10,1,ye/10),Pe){let sn=(Pe-1)*2;ce.push(sn,sn+1,sn+2,sn+1,sn+3,sn+2)}});let me=new Lt;me.setAttribute("position",new ut(Q,3)),me.setAttribute("uv",new ut(ne,2)),me.setIndex(ce),st=new Ut({transparent:!0,depthWrite:!1,fog:!0,side:nn,uniforms:so.merge([We.fog,{uOpacity:{value:0},uColor:{value:new ke(6985126)}}]),vertexShader:["varying vec2 vUv;","#include <fog_pars_vertex>","void main() {","  vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;","  #include <fog_vertex>","}"].join(`
`),fragmentShader:["uniform float uTime, uOpacity; uniform vec3 uColor; varying vec2 vUv;","#include <fog_pars_fragment>","float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }","float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }","void main() {","  float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);","  float flow = n(vec2(vUv.x * 5.0, vUv.y * 6.0 - uTime * 1.6)) * 0.6 + n(vec2(vUv.x * 11.0, vUv.y * 14.0 - uTime * 2.4)) * 0.4;","  float foam = smoothstep(0.8, 0.95, flow) * 0.45;","  vec3 col = mix(uColor * (0.55 + 0.25 * flow), vec3(0.85, 0.92, 0.93), foam) * mix(0.75, 1.0, edge);","  gl_FragColor = vec4(col, uOpacity * (0.35 + 0.55 * edge));","  #include <colorspace_fragment>","  #include <fog_fragment>","}"].join(`
`)}),st.uniforms.uTime=t.uTime,Mt=new je(me,st),Mt.renderOrder=1,x(Mt,"creek",{receive:!1}),mt=de}},mt=null,wt=40,Ht=new Map,Et=()=>{Ht.clear(),p.forEach(se=>{let H=se.r+2;for(let be=Math.floor((se.x-H)/wt);be<=Math.floor((se.x+H)/wt);be++)for(let fe=Math.floor((se.z-H)/wt);fe<=Math.floor((se.z+H)/wt);fe++){let I=be+","+fe;Ht.has(I)||Ht.set(I,[]),Ht.get(I).push(se)}})},at=(se,H)=>Ht.get(Math.floor(se/wt)+","+Math.floor(H/wt))||[];return{shared:a,show:c,groups:d,solids:p,zones:u,cabinAt:U,circleAt:_,inClearing(se,H){return u.some(be=>Math.hypot(be.x-se,be.z-H)<be.r)},blocks(se,H,be,fe,I){for(let v of at(se,H)){if(fe[v.key]<.5||v.top!==void 0&&I>=v.top-.7)continue;let Z=v.x-se,ee=v.z-H,oe=v.r+be;if(Z*Z+ee*ee<oe*oe)return!0}return!1},tops(se,H,be,fe){for(let I of at(se,H)){if(I.top===void 0||be[I.key]<.5)continue;let v=I.x-se,Z=I.z-H;v*v+Z*Z<I.rt*I.rt&&fe.push(I.top)}return fe},plant(se,H=0){let be=(ae,de,Q)=>se.some(ne=>{let ce=ne.p.x-ae,ye=ne.p.z-de;return ce*ce+ye*ye<Q*Q}),fe=(ae,de,Q=0)=>u.some(ne=>Math.hypot(ne.x-ae,ne.z-de)<ne.r+Q),I=[],v=[];for(let ae=0,de=0;ae<70&&de<8e3;de++){let Q=se[Math.floor(s()*se.length)];if(!Q)break;let ne=s()*6.28,ce=o(7,20),ye=Q.p.x+Math.cos(ne)*ce,me=Q.p.z+Math.sin(ne)*ce,ve=e(ye,me);if(ve<1.5||ve>68||fe(ye,me,10))continue;let _e=o(9,18),Pe=o(.8,1.4),Se=s()*6.28,K=Math.cos(Se)*_e/2,we=-Math.sin(Se)*_e/2;if(be(ye,me,6)||be(ye+K,me+we,4)||be(ye-K,me-we,4))continue;let pe=e(ye+K,me+we),De=e(ye-K,me-we),Ue=new ht().setFromEuler(new tn(s()*6.28,Se,Math.atan2(pe-De,_e),"YZX"));I.push({p:new B(ye,(pe+De)/2+Pe*.55,me),q:Ue,s:new B(_e,Pe,Pe)});for(let Me=-.5;Me<=.5;Me+=.125)p.push({x:ye+K*2*Me,z:me+we*2*Me,r:Pe+1.6,key:"pLogs",top:(pe+De)/2+Pe*.55+(pe-De)*Me+Pe,rt:Pe*1.1});ae++}for(let ae=0,de=0;ae<90&&de<8e3;de++){let Q=se[Math.floor(s()*se.length)];if(!Q)break;let ne=s()*6.28,ce=o(6,16),ye=Q.p.x+Math.cos(ne)*ce,me=Q.p.z+Math.sin(ne)*ce,ve=e(ye,me);if(ve<1.5||ve>70||be(ye,me,5)||fe(ye,me))continue;let _e=o(.9,1.7),Pe=o(1.4,3.2);v.push({p:new B(ye,ve-.4,me),q:m(ye,me,s()*6.28,.4),s:new B(_e,Pe,_e)}),p.push({x:ye,z:me,r:_e+1.3,key:"pLogs",top:ve-.4+Pe,rt:_e*.85}),ae++}S(D,$,I,"pLogs",{cast:!0}),S(J,$,v,"pLogs",{cast:!0}),w(I,"pLogs",ae=>[ae.x*1.2,ae.y*3.4],.45),w(v,"pLogs",ae=>[ae.x*3.2,ae.z*3.2],.45);let Z=[];for(let ae=0;Z.length<5200&&ae<6e4;ae++){let de=o(-470,470),Q=o(-470,210),ne=e(de,Q);if(ne<H+.6||ne>66||!M(de,Q)||fe(de,Q)||zt(de*.03,0,Q*.03)<.42)continue;let ce=o(1.2,2.6);Z.push({p:new B(de,ne-.15,Q),q:m(de,Q,s()*6.28,.5),s:new B(ce,ce*o(.8,1.3),ce)})}S(ue,ct("pGrass",.05),Z,"pGrass");let ee=[];for(let ae=0;ee.length<1100&&ae<2e4;ae++){let de=se[Math.floor(s()*se.length)];if(!de)break;let Q=s()*6.28,ne=o(2.5,13),ce=de.p.x+Math.cos(Q)*ne,ye=de.p.z+Math.sin(Q)*ne,me=e(ce,ye);if(me<1||me>70||fe(ce,ye))continue;let ve=o(1.6,3.4);ee.push({p:new B(ce,me-.1,ye),q:m(ce,ye,s()*6.28,.5),s:new B(ve,ve*o(.8,1.1),ve)})}S(et,ct("pFerns",.03),ee,"pFerns");let oe=[];for(let ae=0;oe.length<700&&ae<9e4;ae++){let de=o(-280,280),Q=o(-280,170),ne=e(de,Q);if(ne<-1.4||ne>1.2||!M(de,Q)||fe(de,Q,-6)||zt(de*.05,3,Q*.05)<.4)continue;let ce=o(1.1,1.9);oe.push({p:new B(de,ne-.2,Q),q:new ht().setFromAxisAngle(new B(0,1,0),s()*6.28),s:new B(ce,ce*o(.8,1.2),ce)})}S(Te,ct("pReeds",.012),oe,"pReeds"),Ft(se,fe,be),Et()},update(se,H,be,fe){for(let I of Sc)c[I].value=se[I];E.forEach(({key:I,b:v})=>v.set(se[I]||0)),ze.forEach(I=>{I.color.copy(se.low).multiplyScalar(1.7),I.color.r=Math.min(1.1,I.color.r),I.color.g=Math.min(1.1,I.color.g),I.color.b=Math.min(1.1,I.color.b)});for(let I of l)c[I].value=se[I]||0;Mt&&(st.uniforms.uOpacity.value=Math.min(1,(se.creek||0)*1.2),st.uniforms.uColor.value.copy(se.waterC).lerp(new ke(.32,.52,.56),.5)),tt&&(tt.material.uniforms.uOpacity.value=se.hives||0,tt.visible=(se.hives||0)>.05),a.uSnowCover.value=se.pSnowCover,a.uMoss.value=se.pMoss,a.uFrost.value=se.pFrost;for(let[I,v]of d)I.visible=se[v]>.01;Ae.material.color.setRGB(1.6,1.4,1.05),Ae.position.y=Be.y-(1-se.pStacks)*140,Je.position.y=Ae.position.y,Je.rotation.y=H*.45,Je.visible=se.pStacks>.5,Ee.uniforms.uOpacity.value=Math.max(0,se.pStacks-.5)*.5}}}function gd(i,e){let n=new Ys().copy(new xt(1,1).rotateX(-Math.PI/2)),r=new Float32Array(320*3);for(let a=0;a<320;a++)r[a*3]=Math.random()*120-60,r[a*3+1]=Math.random(),r[a*3+2]=Math.random()*120-60;n.setAttribute("aOff",new vi(r,3)),n.instanceCount=320;let s=new Ut({transparent:!0,depthWrite:!1,fog:!0,uniforms:so.merge([We.fog,{uOpacity:{value:0},uCam:{value:new B},uWater:{value:0}}]),vertexShader:`
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
      }`});s.uniforms.uTime=e.uTime;let o=new je(n,s);return o.frustumCulled=!1,i.add(o),{update(a,c,l){s.uniforms.uOpacity.value=a,s.uniforms.uCam.value.copy(c),s.uniforms.uWater.value=l,o.visible=a>.01}}}function xd(i,e){let n=new xt(1,1).rotateX(-Math.PI/2),r=new vi(new Float32Array(90).fill(-1e5),1);r.setUsage(Tl),n.setAttribute("aBorn",r);let s=new Ut({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uTime:e.uTime,uColor:{value:new ke(7240328)},uShow:{value:0}},vertexShader:`
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
      }`}),o=new Rn(n,s,90);o.frustumCulled=!1;let a=new it;a.makeScale(0,0,0);for(let h=0;h<90;h++)o.setMatrixAt(h,a);i.add(o);let c=0,l=1,d=new ht,p=new B(1.15,1,2.3),u=new B;return{mesh:o,place(h,m,M,x,f){l=-l,u.set(h+Math.cos(x)*.9*l,m+.45,M-Math.sin(x)*.9*l),d.setFromUnitVectors(new B(0,1,0),f).multiply(new ht().setFromAxisAngle(new B(0,1,0),x)),a.compose(u,d,p),o.setMatrixAt(c,a),o.instanceMatrix.needsUpdate=!0,r.array[c]=e.uTime.value,r.needsUpdate=!0,c=(c+1)%90},update(h){s.uniforms.uShow.value=h,o.visible=h>.01}}}var Ct=(i,e,t)=>new B(i,e,t),yd={rain:{sat:0,skyTop:"#8f959a",skyHorizon:"#c6c9cb",skyBottom:"#8a8f93",fog:"#b7bbbe",fogDensity:.0042,low:"#6c7175",high:"#878c90",snowC:"#c9cccf",snowLine:170,water:0,waterC:"#6d7378",waterRough:.18,sunC:"#000000",sunDir:Ct(0,.3,-1),sunSize:0,lightC:"#e8e8e8",light:.55,lightDir:Ct(.3,.6,.2),hemiSky:"#cfd2d4",hemiGround:"#55595c",hemi:.95,treeC:"#3f4447",trees:.75,rain:1,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.55,fishy:1,cam:Ct(0,13,105),look:Ct(0,9,0)},frost:{sat:0,skyTop:"#d7d9db",skyHorizon:"#eceded",skyBottom:"#cfd1d3",fog:"#e3e4e5",fogDensity:.0068,low:"#a9adb0",high:"#c3c6c8",snowC:"#eeeff0",snowLine:90,water:0,waterC:"#b4b8bb",waterRough:.4,sunC:"#000000",sunDir:Ct(0,.3,-1),sunSize:0,lightC:"#ffffff",light:.45,lightDir:Ct(-.3,.8,.3),hemiSky:"#f0f0f0",hemiGround:"#8d9093",hemi:1.1,treeC:"#6f7477",trees:.35,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:Ct(0,34,140),look:Ct(0,16,-20)},mist:{sat:.55,skyTop:"#93a4b1",skyHorizon:"#d6dcdf",skyBottom:"#a9b5bd",fog:"#ccd4d8",fogDensity:.0047,low:"#56645c",high:"#77858d",snowC:"#e5e9eb",snowLine:95,water:0,waterC:"#7a8c95",waterRough:.22,sunC:"#efe7da",sunDir:Ct(.5,.35,-1),sunSize:.0016,lightC:"#f2ece2",light:.85,lightDir:Ct(.5,.6,-.4),hemiSky:"#d5dde2",hemiGround:"#4d5650",hemi:.8,treeC:"#34433b",trees:.95,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:Ct(-38,22,112),look:Ct(0,20,-40)},snow:{sat:.6,skyTop:"#a3afba",skyHorizon:"#e1e5e8",skyBottom:"#c9d1d7",fog:"#dde2e6",fogDensity:.0045,low:"#e7ebee",high:"#f2f4f6",snowC:"#fbfcfd",snowLine:-20,water:.5,waterC:"#c3ccd2",waterRough:.75,sunC:"#e9e6e0",sunDir:Ct(-.4,.3,-1),sunSize:.0014,lightC:"#f4f1ec",light:.7,lightDir:Ct(-.4,.5,.3),hemiSky:"#eef2f5",hemiGround:"#8a96a0",hemi:.95,treeC:"#36443f",trees:1,rain:0,snow:1,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.45,cam:Ct(24,11,78),look:Ct(0,12,-10)},night:{sat:.45,skyTop:"#04060d",skyHorizon:"#1a2238",skyBottom:"#0a0e18",fog:"#111727",fogDensity:.0032,low:"#3a4352",high:"#4a5262",snowC:"#8a93a3",snowLine:160,water:0,waterC:"#0e1421",waterRough:.1,sunC:"#d8d4c6",sunDir:Ct(-.45,.32,-1),sunSize:.0022,lightC:"#93a0bf",light:.16,lightDir:Ct(-.45,.5,-.6),hemiSky:"#26304a",hemiGround:"#07090f",hemi:.16,treeC:"#2c3a33",trees:.85,rain:0,snow:0,fire:.85,stars:1,aurora:0,aur1:"#000000",aur2:"#000000",mist:.25,dof:.6,cam:Ct(0,10,92),look:Ct(0,16,-40)},aurora:{sat:.65,skyTop:"#03060a",skyHorizon:"#122029",skyBottom:"#070c10",fog:"#0d161b",fogDensity:.0034,low:"#3b464c",high:"#4c575e",snowC:"#a9b5bb",snowLine:55,water:0,waterC:"#0c1418",waterRough:.08,sunC:"#000000",sunDir:Ct(0,.3,-1),sunSize:0,lightC:"#8fb1aa",light:.14,lightDir:Ct(.2,.6,-.8),hemiSky:"#1f3a3a",hemiGround:"#05080a",hemi:.18,treeC:"#2a3833",trees:.6,rain:0,snow:.22,fire:0,stars:.75,aurora:1,aur1:"#57e0a4",aur2:"#a77de0",mist:.15,dof:.3,cam:Ct(30,15,102),look:Ct(0,34,-80)},ocean:{sat:.7,skyTop:"#4a4e68",skyHorizon:"#d4a28b",skyBottom:"#7c6670",fog:"#c29d90",fogDensity:.0026,low:"#4a4652",high:"#5d5765",snowC:"#a69aa3",snowLine:200,water:11,waterC:"#585d77",waterRough:.14,sunC:"#ecd0b2",sunDir:Ct(0,.17,-1),sunSize:.0045,lightC:"#efcfb4",light:.95,lightDir:Ct(0,.2,-1),hemiSky:"#c9a6a0",hemiGround:"#3c3a4a",hemi:.7,treeC:"#2f2c35",trees:0,rain:0,snow:0,fire:0,stars:.15,aurora:0,aur1:"#000000",aur2:"#000000",mist:.35,cam:Ct(0,7,125),look:Ct(0,9,0)},spring:{sat:.78,skyTop:"#86acd2",skyHorizon:"#e4eef1",skyBottom:"#c9d8de",fog:"#dbe6e8",fogDensity:.0031,low:"#6e8f55",high:"#8ea478",snowC:"#eef2f2",snowLine:150,water:0,waterC:"#6a95a6",waterRough:.18,sunC:"#fff2d6",sunDir:Ct(.4,.42,-1),sunSize:.0018,lightC:"#fff3df",light:1,lightDir:Ct(.4,.7,-.3),hemiSky:"#dde9f1",hemiGround:"#5a6c48",hemi:.9,treeC:"#4a7342",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.2,cam:Ct(-20,12,100),look:Ct(0,12,-20),bloom:1,flowers:1,hives:1,creek:1,fishy:.3},summer:{sat:.92,skyTop:"#3f86cf",skyHorizon:"#cde6f4",skyBottom:"#93c4d6",fog:"#cbe2ec",fogDensity:.0021,low:"#5a8e42",high:"#7ba158",snowC:"#f2f4f4",snowLine:210,water:0,waterC:"#21b2b4",waterRough:.05,sunC:"#fff5d8",sunDir:Ct(.2,.62,-1),sunSize:.0026,lightC:"#fff6e4",light:1.35,lightDir:Ct(.3,.85,-.3),hemiSky:"#cbe6ff",hemiGround:"#4a6a38",hemi:.95,treeC:"#3d8a38",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:0,cam:Ct(10,11,110),look:Ct(0,10,-10),lush:1,fruitCol:1,sand:1,creek:.7,flowers:.45,fishy:.4},fall:{sat:.82,skyTop:"#7a93ab",skyHorizon:"#ead7bd",skyBottom:"#b8a38c",fog:"#d8c6ad",fogDensity:.0036,low:"#7d6b44",high:"#92805b",snowC:"#efece6",snowLine:175,water:0,waterC:"#5c7380",waterRough:.2,sunC:"#ffd7a4",sunDir:Ct(-.5,.24,-1),sunSize:.002,lightC:"#ffdaa8",light:.95,lightDir:Ct(-.5,.5,-.4),hemiSky:"#e5d4bd",hemiGround:"#5a4a34",hemi:.85,treeC:"#4c5a3a",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.3,cam:Ct(-30,14,105),look:Ct(0,12,-30),fall:1,bare:.4,leaves:1,creek:.5}},Ux={fall:0,bare:0,bloom:0,lush:0,leaves:0,flowers:0,hives:0,creek:0,fishy:0,sand:0,fruitCol:0,dof:1},ei={};for(let i in yd)ei[i]={...Ux,...yd[i]},Sc.forEach((e,t)=>{ei[i][e]=pd[i][t]});var vd=Object.keys(ei),_d=["skyTop","skyHorizon","skyBottom","fog","low","high","snowC","waterC","sunC","lightC","hemiSky","hemiGround","treeC","aur1","aur2"],Md=["sunDir","lightDir","cam","look"],fs=i=>{let e={};for(let t in i)e[t]=_d.includes(t)?new ke(i[t]):Md.includes(t)?i[t].clone():i[t];return e},Fx=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Ed(i){let e=ei[i]?i:"rain",t=fs(ei[e]),n=fs(ei[e]),r=fs(ei[e]),s=0,o=1;return{cur:t,get name(){return e},go(a,c,l){ei[a]||(a="rain"),e=a,n=fs(t),r=fs(ei[a]),s=l,o=Math.max(1,c)},offsetHome(a,c){t.cam.add(a),t.look.add(c),n=fs(t)},step(a){let c=Math.min(1,(a-s)/o),l=Fx(c);for(let d in r)_d.includes(d)||Md.includes(d)?t[d].copy(n[d]).lerp(r[d],l):t[d]=n[d]+(r[d]-n[d])*l;return c}}}var Bx=ds(4071),Ri=(i,e)=>i+Bx()*(e-i),wc=40;function Sd({scene:i,shared:e,isClearing:t}){let n=(()=>{let k=new Ot,V=new Fe(.05,.16,2.9,8,5,!0).translate(0,1.45,0);{let D=V.attributes.position,J=new B;for(let $=0;$<D.count;$++){J.fromBufferAttribute(D,$);let he=Math.atan2(J.z,J.x),te=J.y<.4?1+(.4-J.y)*2.6*(.55+.45*Math.max(0,Math.sin(he*4+1))):1;D.setXYZ($,J.x*te+Math.sin(J.y*1.7)*.03,J.y,J.z*te)}}k.add(V,{color:D=>{let J=.42+.16*Mc(D.y*7,Math.atan2(D.z,D.x)*2.5);return[J*1.35,J*.98,J*.72]},normal:(D,J)=>J.set(D.x,.12,D.z).normalize()});let z=6,A=0;for(let D=0;D<z;D++){let J=D/(z-1),$=1.1-J*.8,he=1.02-J*.42,te=.5+J*2.5,re=5+D%3,xe=D*1.93,Be=(Ee,qe)=>{let ue=Ee.attributes.position,le=new B;for(let Te=0;Te<ue.count;Te++){le.fromBufferAttribute(ue,Te);let et=Math.hypot(le.x,le.z);if(et<.001)continue;let ze=Math.atan2(le.z,le.x),ct=Math.pow(.5+.5*Math.sin(ze*re+xe),2),Mt=.82+.32*ct+.06*Math.sin(ze*17+D*3)+.04*Math.sin(ze*31+D),st=et/$;ue.setXYZ(Te,le.x*Mt,le.y-(.1+.16*ct)*$*st*st-(qe?.02:0),le.z*Mt)}},Ae=new Qt($,he,14,3,!0);Be(Ae,!1),Ae.translate(0,te+he/2,0),k.add(Ae,{mat:13,color:Ee=>{let qe=(Ee.y-te)/he,le=.55+.5*Math.min(1,Math.hypot(Ee.x,Ee.z)/$)+.22*qe+.08*(li(Ee.x*9.1,Ee.z*7.3+Ee.y)-.5)+D*.03;return[le*.98,le,le*.94]},normal:(Ee,qe)=>{let ue=Math.hypot(Ee.x,Ee.z);qe.set(Ee.x,ue*.55+.32,Ee.z).normalize()},tip:Ee=>{let qe=(Ee.y-te)/he,ue=Math.atan2(Ee.z,Ee.x),le=.5+.5*Math.sin(ue*re+xe);return Math.min(1,Math.max(0,(qe-.08)*1.5)*(.45+.55*le)+.25*li(Ee.x*5.3,Ee.z*4.1))}});let Je=new Qt($*.97,he*.38,14,1,!0);Be(Je,!0),Je.translate(0,te+he*.19-.02,0),k.add(Je,{mat:13,flip:!0,color:Ee=>{let ue=.42+.3*Math.min(1,Math.hypot(Ee.x,Ee.z)/$);return[ue*.95,ue,ue*.9]},normal:(Ee,qe)=>qe.set(Ee.x*.3,-1,Ee.z*.3).normalize()}),A=te+he}return k.add(new Qt(.05,.5,5,1,!0).translate(0,A+.18,0),{mat:13,color:()=>[1,1.02,.95],tip:()=>.7}),k.geometry()})(),r={value:1},s={uFall:{value:0},uBloom:{value:0},uLush:{value:0},uBare:{value:0}},o=hn({...e,...s,uMoss:{value:0},uFrost:e.uSnowCover},r,{sway:.022,color:3358771,snowBias:-.3,crisp:!0,tree:!0}),a=1400,c=[],l=new Rn(n,o,a);{let k=new it,V=new ht,z=new B,A=new B,D=new ke,J=0,$=0;for(;J<a&&$++<6e4;){let te=Ri(-650,650),re=Ri(-700,260),xe=cn(te,re);if(xe<3||xe>85||Gi(te*.02,re*.02,3)<.42||t(te,re))continue;let Be=Ri(2,4.6);A.set(te,xe-.4,re),z.set(Be*Ri(.8,.95),Be*Ri(1.5,2.1),Be*Ri(.8,.95)),V.setFromAxisAngle(new B(0,1,0),Ri(0,Math.PI*2));let Ae=Ri(.82,1.12);D.setRGB(Ae,Ae*Ri(.97,1.03),Ae*Ri(.94,1)),c.push({p:A.clone(),s:z.clone(),q:V.clone(),c:D.clone()}),k.compose(A,V,z),l.setColorAt(J,D),l.setMatrixAt(J++,k)}l.count=J;let he=new Float32Array(a);for(let te=0;te<a;te++)he[te]=li(te*1.37,9.1);n.setAttribute("aHash",new vi(he,1))}l.castShadow=!0,l.receiveShadow=!0,i.add(l);let d=new Map;c.forEach((k,V)=>{let z=Math.floor(k.p.x/wc)+","+Math.floor(k.p.z/wc);d.has(z)||d.set(z,[]),d.get(z).push(V)});let p=(k,V,z)=>{let A=Math.floor(k/wc),D=Math.floor(V/wc);for(let J=-1;J<=1;J++)for(let $=-1;$<=1;$++){let he=d.get(A+J+","+(D+$));if(he){for(let te of he)if(z(te))return!0}}return!1},u=(()=>{let k=new Ot,V=(z,A)=>li(z*3.17+A,z*1.91-A*2.3);for(let z=0;z<14;z++){let A=z%5,D=A/5,J=1.1-D*.8,$=.5+D*2.5,he=z*2.39996+V(z,1)*.6,te=J*(.62+.28*V(z,2)),re=Math.cos(he)*te,xe=Math.sin(he)*te,Be=.14+.16*V(z,3),Ae=.11+.05*V(z,4),Je=$-.2*J*(te/J)*(te/J);k.add(new Fe(.006,.008,Be,4,1),{m:new it().makeTranslation(re,Je-Be/2,xe),color:()=>[.35,.33,.3]});let Ee=new Dt(Ae,10,7),qe=Ee.attributes.position;for(let le=0;le<qe.count;le++){let Te=qe.getY(le);qe.setY(le,(Te<0?Te*1.25:Te)*.5)}Ee.computeVertexNormals();let ue=.6+.18*V(z,5);k.add(Ee,{m:new it().makeTranslation(re,Je-Be-Ae*.5,xe),color:le=>{let Te=.85+.25*Math.max(0,le.y-(Je-Be-Ae*.5))/Ae;return[ue*Te,ue*Te,ue*Te*.98]}})}return k.geometry()})(),h={uFruitCol:{value:0}},m=hn({...e,uMoss:{value:0},uFrost:{value:0}},r,{sway:.022,color:14211288});{let k=m.onBeforeCompile;m.onBeforeCompile=V=>{k(V),Object.assign(V.uniforms,h),V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
uniform float uFruitCol;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
          #ifdef USE_COLOR
            vColor.rgb *= color;
          #endif
          #ifdef USE_INSTANCING_COLOR
            vColor.rgb *= mix(vec3(1.0), instanceColor.rgb * 1.5, uFruitCol);
          #endif`)}}let M=new Rn(u,m,l.count),x=c.map((k,V)=>li(V*.37,5.1)<.5);{let k=new it,V=new it().makeScale(0,0,0),z=[13123630,14710826,14266416,10271290,12070954];c.forEach((A,D)=>{M.setMatrixAt(D,x[D]?k.compose(A.p,A.q,A.s):V),M.setColorAt(D,new ke(z[D%z.length]))}),M.computeBoundingSphere()}M.castShadow=!0,i.add(M);let f=(()=>{let k=new Ot,V=(z,A,D,J,$)=>k.add(new Fe($*.35,$,D,5).translate(0,D/2,0),{m:new it().compose(new B(0,z,0),new ht().setFromEuler(new tn(0,A,J,"YXZ")),new B(1,1,1)),color:()=>[.36,.28,.22]});for(let z=0;z<16;z++){let A=.55+z*.17,D=(1-z/18)*.9+.12;V(A,z*2.4,D,1.1+z%3*.12,.03),V(A+.05,z*2.4+.9,D*.6,.8,.02)}return k.geometry()})(),E={value:0},R=new Rn(f,hn({...e,uMoss:{value:0},uFrost:{value:0}},E,{sway:.018,color:12101784}),l.count);{let k=new it().makeScale(0,0,0),V=new it;c.forEach((z,A)=>R.setMatrixAt(A,li(A*1.37,9.1)<.45?V.compose(z.p,z.q,z.s):k)),R.computeBoundingSphere()}R.castShadow=!0,i.add(R);let w=new ke(2.6,2.6,2.4),S=-1,T=new Map,U=new ht,_=new tn,O=new it,W=()=>l.visible&&r.value>.5;return{mesh:l,fruits:M,base:c,geo:n,mat:o,get solid(){return W()},blocks(k,V,z=0){return W()?p(k,V,A=>{let D=c[A],J=D.p.x-k,$=D.p.z-V,he=D.s.x*.75+1.2+z;return J*J+$*$<he*he}):!1},countNear(k,V,z){let A=0;return W()?(p(k,V,D=>{let J=c[D].p.x-k,$=c[D].p.z-V;return J*J+$*$<z*z&&A++,!1}),A):0},pick(k){if(!W())return-1;let V=k.intersectObjects([l,M],!1)[0];return V?V.instanceId:-1},hover(k){return k===S?!1:(S>=0&&c[S]&&l.setColorAt(S,c[S].c),S=k,k>=0&&l.setColorAt(k,w),l.instanceColor.needsUpdate=!0,!0)},get hovered(){return S},shake(k,V){T.set(k,V)},update(k,V){o.color.copy(k.treeC),r.value=k.trees,l.visible=M.visible=k.trees>.01,s.uFall.value=k.fall,s.uBloom.value=k.bloom,s.uLush.value=k.lush,s.uBare.value=k.bare,h.uFruitCol.value=k.fruitCol,E.value=Math.min(1,k.bare*2.5)*k.trees,R.visible=E.value>.01,T.size&&(T.forEach((z,A)=>{let D=(V-z)/1e3,J=c[A];if(!J){T.delete(A);return}let $=D>2.6?0:Math.sin(D*15)*Math.exp(-D*2.1)*.17;_.set($*.6,0,$),U.setFromEuler(_).multiply(J.q),O.compose(J.p,U,J.s),l.setMatrixAt(A,O),x[A]&&M.setMatrixAt(A,O),D>2.6&&T.delete(A)}),l.instanceMatrix.needsUpdate=!0,M.instanceMatrix.needsUpdate=!0)}}}var bc=.6*dt.S,Ox=70;function wd({trees:i,props:e,cabin:t,scenes:n,water:r}){let s=[],o=[],a=(l,d)=>{let p=cn(l,d);for(let u=0;u<6.28;u+=1.57)p=Math.max(p,cn(l+Math.cos(u)*4,d+Math.sin(u)*4));return Math.max(p,r.position.y)},c=()=>n.cur.pCabin>.5;return{groundAt:a,floor(l,d,p){s.length=0,o.length=0,c()&&t.floors(l,d,o),o.some(x=>x.under)||(s.push(a(l,d)),e.tops(l,d,n.cur,s));let h=-1/0,m=!1,M=(x,f)=>{x<=p+bc&&x>h&&(h=x,m=f)};if(s.forEach(x=>M(x,!1)),o.forEach(x=>M(x.y,!0)),h===-1/0){let x=1/0;s.forEach(f=>{Math.abs(f-p)<x&&(x=Math.abs(f-p),h=f,m=!1)}),o.forEach(f=>{Math.abs(f.y-p)<x&&(x=Math.abs(f.y-p),h=f.y,m=!0)})}return{y:h,built:m}},blocked(l,d,p,u=0){return!(Math.abs(l)<820&&d>-900&&d<420)||c()&&t.blocked(l,d,u,p)?!0:c()&&t.inside(l,d,p)?!1:cn(l,d)>Ox||i.blocks(l,d,u)?!0:e.blocks(l,d,u,n.cur,p)},inside(l,d,p){return c()&&p!==void 0&&t.inside(l,d,p)}}}var ps=7.5,ho=24,zx=2.4,Hx=44,kx=15.5,Gx=-1.1,Vx=.9,Wx=.35,uo=i=>(i=Math.min(1,Math.max(0,i)),i*i*i*(i*(i*6-15)+10));function bd({physics:i,trees:e}){let t={mode:"home",x:0,z:0,feet:0,vy:0,air:!1,vx:0,vz:0,yaw:0,pitch:0,yawTo:0,pitchTo:0,eyeY:0,roll:0,bob:{phase:0,amp:0,run:0,lastStep:0},tw:null},n=new tn(0,0,0,"YXZ"),r=(h,m,M=0)=>(n.set(m,h,M,"YXZ"),new ht().setFromEuler(n)),s=(h,m)=>Math.atan2(-h,-m),o=(h,...m)=>{let M=window.MEOW_SOUND;M&&M[h]&&M[h](...m)},a=(h,m)=>{let M=cn(t.x,t.z);return i.floor(t.x,t.z,t.feet).built?"wood":M<m.position.y+.6?"water":h.name==="snow"||M>h.cur.snowLine-6?"snow":"grass"},c=(h,m,M)=>!e.blocks(h,m,M+.001)&&!i.blocked(h,m,i.groundAt(h,m),M),l=(h,m,M,x)=>{let f=new B(0,0,-1).applyQuaternion(m);f.y=0,f.normalize();let E=Math.atan2(f.z,f.x),R=h.x,w=h.z,S=[];for(let k=-.7;k<=.701;k+=.05)for(let V=70;V<=380;V+=10){let z=E+k,A=R+Math.cos(z)*V,D=w+Math.sin(z)*V,J=cn(A,D);if(J<x+1.5||J>64)continue;let $=(e.solid?Math.min(e.countNear(A,D,40),22)*2:30)-Math.abs(k)*34-V*.045;S.push({x:A,z:D,d:V,score:$})}S.sort((k,V)=>V.score-k.score);let T=null;for(let k of S.slice(0,120)){if(!c(k.x,k.z,4))continue;let V=(R-k.x)/k.d,z=(w-k.z)/k.d,A=!0;for(let D=2;D<70&&A;D+=2.5)A=c(k.x+V*D,k.z+z*D,1.5);for(let D=3;D<30&&A;D+=3)A=c(k.x-V*D,k.z-z*D,1);if(A){T=k;break}}T||(T=S.slice(0,200).find(k=>c(k.x,k.z,2))||null),T||(T={x:R+f.x*60,z:w+f.z*60,d:60});let U=i.floor(T.x,T.z,i.groundAt(T.x,T.z)).y,_=s(f.x,f.z),W=s(T.x-R,T.z-w)-_;W=Math.atan2(Math.sin(W),Math.cos(W)),t.tw={kind:"enter",t0:performance.now(),dur:M?2300+T.d*5.2:700,from:h.clone(),fromQ:m.clone(),to:new B(T.x,U+ps,T.z),yaw0:_,yaw1:_+W,lift:M?9+T.d*.02:0},t.mode="enter",t.vx=t.vz=0},d=(h,m,M)=>{t.tw={kind:"leave",t0:performance.now(),dur:M?1800:1,from:h.clone(),fromQ:m.clone()},t.mode="leave",t.vx=t.vz=0,t.vy=0,t.air=!1},p=(h,m)=>{if(i.blocked(h,m,t.feet))return!1;t.x=h,t.z=m;let M=i.floor(t.x,t.z,t.feet).y;return t.air||(M>=t.feet-bc?t.feet=M:(t.air=!0,t.vy=0)),!0},u=(h,m,M,x,f)=>{let E=-Math.sin(t.yaw),R=-Math.cos(t.yaw),w=(m.has("KeyW")||m.has("ArrowUp")?1:0)-(m.has("KeyS")||m.has("ArrowDown")?1:0),S=(m.has("KeyD")||m.has("ArrowRight")?1:0)-(m.has("KeyA")||m.has("ArrowLeft")?1:0),T=m.has("ShiftLeft")||m.has("ShiftRight"),U=E*w-R*S,_=R*w+E*S,O=Math.hypot(U,_),W=ho*(T?zx:1);O>0&&(U=U/O*W,_=_/O*W);let k=1-Math.pow(1-(O>0?.08:.12),h*60);t.vx+=(U-t.vx)*k,t.vz+=(_-t.vz)*k;let V=Math.hypot(t.vx,t.vz)*h,z=Math.max(1,Math.ceil(V/Wx));for(let te=0;te<z;te++){let re=t.vx*h/z,xe=t.vz*h/z;if(!p(t.x+re,t.z+xe)){if(p(t.x+re,t.z)){t.vz*=.5;continue}if(p(t.x,t.z+xe)){t.vx*=.5;continue}t.vx*=.3,t.vz*=.3;break}}if(t.air){t.vy-=Hx*h,t.feet+=t.vy*h;let te=i.floor(t.x,t.z,Math.max(t.feet,t.feet-t.vy*h)).y;if(t.feet<=te){if(t.feet=te,t.air=!1,t.vy<-8){t.bob.amp=Math.min(1.4,t.bob.amp+.5);let re=a(x,f);o("step",re,1.5),setTimeout(()=>o("step",re,1.1),70)}t.vy=0}}else{let te=i.floor(t.x,t.z,t.feet).y;te>t.feet-bc?t.feet=te:(t.air=!0,t.vy=0)}let A=t.feet+ps;t.air?t.eyeY=A:(t.eyeY+=(A-t.eyeY)*(1-Math.exp(-h*16)),t.eyeY=Math.min(A+1.5,Math.max(A-1.5,t.eyeY)));let D=M?1-Math.pow(1-.12,h*60):1;t.yaw+=(t.yawTo-t.yaw)*D,t.pitch+=(t.pitchTo-t.pitch)*D;let J=t.bob,$=Math.hypot(t.vx,t.vz);J.run+=((T?1:0)-J.run)*(1-Math.pow(.9,h*60)),J.amp+=(Math.min(1.2,$/ho)-J.amp)*(1-Math.pow(.88,h*60)),J.phase+=Math.PI*2*(.95+.5*J.run)*Math.min(1,$/ho+.15)*h*($>.3?1:.4);let he=Math.floor(J.phase/Math.PI);return he!==J.lastStep&&(J.lastStep=he,$>ho*.25&&!t.air)?(o("step",a(x,f),Math.min(1.5,$/ho)),!0):!1};return{state:t,get mode(){return t.mode},get walking(){return t.mode==="walk"},get out(){return t.mode!=="home"},get gliding(){return t.mode==="enter"||t.mode==="leave"},enter:l,leave:d,look(h,m,M){t.yawTo-=h*M,t.pitchTo=Math.max(Gx,Math.min(Vx,t.pitchTo-m*M*.8))},turn(h){t.yawTo+=h},jump(){return t.mode!=="walk"||t.air?!1:(t.vy=kx,t.air=!0,!0)},place(h,m,M){t.x=h,t.z=m,t.feet=M!==void 0?M:i.floor(h,m,i.groundAt(h,m)).y,t.feet=i.floor(h,m,t.feet).y,t.eyeY=t.feet+ps,t.vx=t.vz=t.vy=0,t.air=!1,t.mode!=="walk"&&(t.mode="walk",t.tw=null)},face(h,m=0){t.yaw=t.yawTo=h,t.pitch=t.pitchTo=m},update(h,m,M,x,f,E,R,w){let S=!1;if(t.mode==="walk"&&(S=u(h,M,f,E,R)),t.mode==="home")return w.pos.copy(x.pos),w.q.copy(x.q),w.roll=0,S;if(t.mode==="enter"){let _=t.tw,O=Math.min(1,(m-_.t0)/_.dur),W=uo(O);w.pos.lerpVectors(_.from,_.to,W);let k=uo((O-.3)/.7);w.pos.y=_.from.y+(_.to.y-_.from.y)*k+_.lift*Math.pow(Math.sin(Math.PI*Math.min(1,O*1.15)),1.4),w.pos.y=Math.max(w.pos.y,Math.max(cn(w.pos.x,w.pos.z),R.position.y)+4);let V=uo(O/.55),z=_.yaw0+(_.yaw1-_.yaw0)*V,A=-.07*Math.sin(Math.PI*O)*(1-O*.5),D=r(z,A,(_.yaw1-_.yaw0)*.22*Math.sin(Math.PI*Math.min(1,O*1.3)));return w.q.copy(_.fromQ).slerp(D,uo(O/.35)),w.roll=0,O>=1&&(t.mode="walk",t.tw=null,t.x=_.to.x,t.z=_.to.z,t.feet=_.to.y-ps,t.eyeY=_.to.y,t.air=!1,t.yaw=t.yawTo=_.yaw1,t.pitch=t.pitchTo=0,this.justLanded=!0),S}if(t.mode==="leave"){let _=t.tw,O=Math.min(1,(m-_.t0)/_.dur),W=uo(O);return w.pos.lerpVectors(_.from,x.pos,W),w.pos.y+=Math.sin(Math.PI*W)*6,w.q.copy(_.fromQ).slerp(x.q,W),w.roll=0,O>=1&&(t.mode="home",t.tw=null),S}w.pos.set(t.x,t.eyeY,t.z);let T=0,U=t.bob;if(U.amp>.001&&f){let _=Math.sin(U.phase),O=Math.sin(U.phase*2),W=U.amp*(1+U.run*.8);w.pos.y+=-Math.abs(_)*.32*W+.16*W;let k=_*.16*W;w.pos.x+=Math.cos(t.yaw)*k,w.pos.z-=Math.sin(t.yaw)*k,T=_*.006*W+O*.0015*W}return w.q.copy(r(t.yaw,t.pitch,T)),w.roll=T,S}}}function Td(i){let e=new Ln(4,4,{type:Bn,depthBuffer:!0});e.depthTexture=new _i(4,4);let t={tScene:{value:e.texture},tDepth:{value:e.depthTexture},uRes:{value:new Ze(4,4)},uTime:i.uTime,uBlur:{value:3},uBand:{value:.22},uFocusY:{value:.47},uPull:{value:0},uAberr:{value:.006},uSat:{value:0},uGrain:{value:.022},uVig:{value:.32},uFlicker:{value:.01},uNear:{value:.5},uFar:{value:3e3},uIndoor:{value:0},uBlurIn:{value:4.5}},n=new dr,r=new er(-1,1,1,-1,0,1);return n.add(new je(new xt(2,2),new Ut({uniforms:t,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
      }`}))),{LU:t,resize(s,o){e.setSize(s,o),t.uRes.value.set(s,o)},render(s,o,a){t.uNear.value=a.near,t.uFar.value=a.far,s.setRenderTarget(e),s.render(o,a),s.setRenderTarget(null),s.render(n,r)}}}var Ad=(i,e,t)=>{if(t<0)return 0;if(i==="torch")return e?t<.04?.55:t<.08?.12:t<.16?.12+(t-.08)/.08*.88:1:Math.max(0,1-t/.12);if(e){if(t<.12)return t/.12*.35;if(t<.24)return .35-(t-.12)/.12*.2;if(t<.7){let n=(t-.24)/.46;return .15+(1-Math.pow(1-n,3))*.85}return 1}return Math.max(0,1-Math.pow(t/.5,.8))};function Rd(i,e){let t=new Xs(16772829,0,280,Pl.degToRad(32),.7,1.35);t.castShadow=!0,t.shadow.autoUpdate=!1,t.shadow.needsUpdate=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.near=.5,t.shadow.camera.far=280,t.shadow.bias=-.0012,t.shadow.normalBias=.06,i.add(t,t.target);let n=new Ei(16753498,0,120,1.25);i.add(n);let r=new Ut({transparent:!0,depthWrite:!1,side:xn,blending:Yn,fog:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new ke(16773340)}},vertexShader:`
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
      }`}),s=new je(new Qt(1,1,40,1,!0).translate(0,-.5,0).rotateX(-Math.PI/2),r);s.frustumCulled=!1,s.renderOrder=5,i.add(s);let o={state:"off",torch:{on:!1,since:-1e9},lamp:{on:!1,since:-1e9},aim:new B(0,0,-1),swing:0,swingV:0,swingZ:0,swingZV:0,lastVX:0,lastVZ:0,shadowTick:0},a=new B,c=new B,l=new B,d=new B,p=(u,...h)=>{let m=window.MEOW_SOUND;m&&m[u]&&m[u](...h)};return{get state(){return o.state},toggle(u){o.state==="off"?(o.state="torch",o.torch.on=!0,o.torch.since=u,p("click",!0)):o.state==="torch"?(o.state="lamp",o.torch.on=!1,o.torch.since=u,o.lamp.on=!0,o.lamp.since=u+120,p("click",!1),setTimeout(()=>p("ignite"),120)):(o.state="off",o.lamp.on=!1,o.lamp.since=u,p("puff")),p("fire",o.state==="lamp"),dispatchEvent(new CustomEvent("meow:light",{detail:{state:o.state}}))},off(u){o.state!=="off"&&(o.state="off",o.torch.on=o.lamp.on=!1,o.torch.since=o.lamp.since=u,p("fire",!1))},update(u,h,m,M,{fog:x,rain:f,bob:E,vx:R,vz:w,motionFull:S}){u.updateMatrixWorld(),a.set(0,0,-1).applyQuaternion(u.quaternion),c.set(1,0,0).applyQuaternion(u.quaternion),l.set(0,1,0).applyQuaternion(u.quaternion);let T=1-Math.pow(1-.16,M*60),U=(h-o.torch.since)/1e3,_=Ad("torch",o.torch.on,U)*(o.torch.on&&U>.16?.985+.015*Math.sin(m*40)*Math.sin(m*7):1);if(_>.001){let A=S?E.amp:0;t.position.copy(u.position).addScaledVector(c,.75).addScaledVector(l,-.6-Math.sin(E.phase)*.05*A).addScaledVector(a,.4),d.copy(a),S&&(d.addScaledVector(c,Math.sin(m*1.7)*.004+Math.sin(m*4.3)*.002+Math.sin(E.phase)*.01*A),d.addScaledVector(l,Math.sin(m*2.1+1)*.004+Math.sin(E.phase*2)*.008*A)),o.aim.lerp(d.normalize(),S?T:1).normalize(),t.target.position.copy(t.position).addScaledVector(o.aim,40);let D=90,J=Math.tan(t.angle)*D;s.position.copy(t.position),s.lookAt(t.target.position),s.scale.set(J,J,D),(o.shadowTick=(o.shadowTick+1)%2)===0&&(t.shadow.needsUpdate=!0)}else o.aim.copy(a);t.intensity=_*520,r.uniforms.uOpacity.value=_*(.018+.03*x+.035*f),s.visible=_>.01;let O=(h-o.lamp.since)/1e3,W=o.lamp.on&&O>.7?.88+.07*Math.sin(m*9.3+Math.sin(m*3.1)*2)+.04*Math.sin(m*23.7)+.02*Math.sin(m*41):1,k=Ad("lamp",o.lamp.on,O)*W;if(S){let A=(R-o.lastVX)/Math.max(M,.001),D=(w-o.lastVZ)/Math.max(M,.001),J=-(A*a.z-D*a.x)*.0012,$=-(A*a.x+D*a.z)*.0012;o.swingV+=(-o.swing*14-o.swingV*1.8+J)*M,o.swing+=o.swingV*M,o.swingZV+=(-o.swingZ*14-o.swingZV*1.8+$+Math.sin(E.phase*2)*.6*E.amp)*M,o.swingZ+=o.swingZV*M}o.lastVX=R,o.lastVZ=w,n.position.copy(u.position).addScaledVector(c,1.1+Math.sin(o.swing)*1.4).addScaledVector(l,-2.4+(1-Math.cos(o.swing))*1.4).addScaledVector(a,2.2+Math.sin(o.swingZ)*1),S&&o.lamp.on&&(n.position.y+=Math.sin(m*6.1)*.03),n.intensity=k*900;let V=document.documentElement,z=Math.max(_,k);return V.classList.toggle("light-on",z>.05),V.classList.toggle("lamp-on",k>.05),z},busy(u){return u-Math.max(o.torch.since,o.lamp.since)<1200}}}function Cd({scene:i,camera:e,heightAt:t,water:n}){let r=(z,A,D)=>window.MEOW_I18N?window.MEOW_I18N.t(z,D):A,s=(z,...A)=>{let D=window.MEOW_SOUND;D&&D[z]&&D[z](...A)},o=(()=>{let z=new Ot,A=new Dt(1,18,12);return z.add(A,{m:N(0,0,0,0,0,0,1,.36,.28),color:D=>{let J=D.y>.05?.55:.85,$=Math.sin(D.x*30)*Math.sin(D.z*40)>.6&&D.y>0?.8:1;return[J*.78*$,J*.84*$,J*.8*$]}}),z.add(new Qt(.3,.45,4),{m:N(-1.05,0,0,0,0,Math.PI/2,1,1,.25),color:()=>[.42,.46,.44]}),z.add(new Qt(.16,.4,4),{m:N(.05,.38,0,0,0,-.4,1,1,.2),color:()=>[.42,.46,.44]}),[-1,1].forEach(D=>{z.add(new Dt(.07,8,6),{m:N(.72,.08,D*.17),color:()=>[.95,.95,.92]}),z.add(new Dt(.04,8,6),{m:N(.76,.085,D*.21),color:()=>[.05,.05,.05]})}),z.add(new Tn(.07,.025,6,12),{m:N(.99,-.02,0,0,Math.PI/2,0),color:()=>[.35,.22,.24]}),z.geometry()})(),a=new mn({vertexColors:!0}),c=5,l=1.6,d=Array.from({length:c},(z,A)=>{let D=new je(o,a);D.visible=!1,D.scale.setScalar(l),i.add(D);let J=new je(new Hs(.85,1,32).rotateX(-Math.PI/2),new an({color:15265520,transparent:!0,opacity:0,depthWrite:!1}));return J.visible=!1,i.add(J),{m:D,ring:J,next:performance.now()+1500+A*1700,t0:0,x:0,z:0,yaw:0,on:!1}}),p=(z,A,D,J)=>{d.forEach($=>{if(!$.on){if($.m.visible=!1,z<.05||J||A<$.next){$.ring.visible=$.ring.visible&&A-$.t0<2600;return}for(let Je=0;Je<8;Je++){let Ee=Math.random()*Math.PI*2,qe=16+Math.random()*60,ue=e.position.x+Math.cos(Ee)*qe,le=e.position.z+Math.sin(Ee)*qe;if(t(ue,le)<D-1.5){$.x=ue,$.z=le,$.yaw=Math.random()*6.28,$.on=!0,$.t0=A;break}}$.next=A+(2500+Math.random()*6e3)/Math.max(.2,z),$.on&&Math.hypot($.x-e.position.x,$.z-e.position.z)<45&&setTimeout(()=>s("plop",.6),250)}if(!$.on)return;let he=(A-$.t0)/1e3,te=he<.35?he/.35:he<.9?1:Math.max(0,1-(he-.9)/.45),re=te*te*(3-2*te);$.m.visible=!0,$.m.position.set($.x,D-1.2*l+re*1.45*l,$.z),$.m.rotation.set(0,$.yaw,1.05-(he>.9?(he-.9)*1.6:0));let xe=he>.4&&he<.85?1+.12*Math.sin((he-.4)*40):1;$.m.scale.set(l,l*xe,l),$.ring.visible=!0,$.ring.position.set($.x,D+.05,$.z);let Be=Math.max(0,he-.2),Ae=.6+Be*2.4;$.ring.scale.setScalar(Ae),$.ring.material.opacity=Math.max(0,.55-Be*.22),he>1.4&&($.on=!1,$.m.visible=!1)})};i.add(e);let u=new fn;{let z=new mn({color:7031342}),A=new mn({color:2236962}),D=new je(new Fe(.012,.035,2.4,6).translate(0,1.2,0),z),J=new je(new Fe(.045,.045,.35,8).translate(0,.18,0),A),$=new je(new Fe(.08,.08,.06,12),A);$.rotation.z=Math.PI/2,$.position.set(.06,.42,0),u.add(D,J,$),u.position.set(.55,-.85,-.9),u.rotation.set(-.95,0,-.25),u.visible=!1,e.add(u)}let h=new B(0,2.4,0),m=new fn;{let z=new je(new Dt(.16,10,8,0,Math.PI*2,0,Math.PI/2),new mn({color:14173230,emissive:4198408})),A=new je(new Dt(.16,10,8,0,Math.PI*2,Math.PI/2,Math.PI/2),new mn({color:15921386})),D=new je(new Fe(.015,.015,.3,5).translate(0,.22,0),new mn({color:14173230}));m.add(z,A,D),m.scale.setScalar(2.2),m.visible=!1,i.add(m)}let M=16,x=new Lt;x.setAttribute("position",new Gt(new Float32Array(M*3),3));let f=new Kr(x,new $r({color:15263968,transparent:!0,opacity:.7}));f.frustumCulled=!1,f.visible=!1,i.add(f);let E=new je(o,a);E.visible=!1,i.add(E);let R=document.createElement("div");R.className="fish-hint",document.body.appendChild(R);let w=(z,A)=>{R.textContent=z||"",R.classList.toggle("show",!!z),R.classList.toggle("hot",!!A)},S={mode:"idle",t0:0,from:new B,to:new B,biteAt:0,aim:null,catchFrom:new B},T=0;try{T=+(localStorage.getItem("meow.fish")||0)}catch{}let U=new B,_=new B,O=new Xn(new B(0,1,0),0),W=(z,A)=>{O.constant=-A;let D=z.ray.intersectPlane(O,new B);if(!D)return null;let J=D.distanceTo(e.position);return J>70||J<6||t(D.x,D.z)>A-.6?null:D},k=z=>{let A=document.getElementById("toast");A&&(A.textContent=z,A.classList.add("show"),clearTimeout(k.t),k.t=setTimeout(()=>A.classList.remove("show"),3200))},V=()=>{S.mode="idle",u.visible=!1,m.visible=!1,f.visible=!1};return{get busy(){return S.mode!=="idle"},reset(){V(),E.visible=!1,w("")},key(z){return S.mode==="idle"?S.aim?(S.mode="cast",S.t0=z,S.to.copy(S.aim),u.visible=!0,f.visible=!0,m.visible=!0,s("cast"),!0):!1:S.mode==="bite"?this.strike(z):S.mode==="wait"||S.mode==="cast"?(s("reel"),V(),!0):!1},click(z){return S.mode==="bite"?this.strike(z):!1},strike(z){S.mode="catch",S.t0=z,S.catchFrom.copy(m.position),m.visible=!1,s("splash",!0);let A=r("fishNames","Trout|Perch|Carp|Pike|Bass|Catfish").split("|"),D=A[Math.floor(Math.random()*A.length)],J=18+Math.floor(Math.random()*40);T++;try{localStorage.setItem("meow.fish",String(T))}catch{}return E.scale.setScalar(.6+(J-18)/60),setTimeout(()=>k("\u{1F41F} "+r("fishCaught","You caught a {name}! {cm} cm \xB7 {n} so far",{name:D,cm:J,n:T})),700),!0},update(z,A,{active:D,ray:J,waterY:$,amount:he,indoor:te}){if(p(he,z,$,te),S.aim=D&&!te&&S.mode==="idle"&&J?W(J,$):null,e.updateMatrixWorld(),U.copy(h).applyMatrix4(u.matrixWorld),S.mode==="cast"){let re=Math.min(1,(z-S.t0)/800);m.position.lerpVectors(U,S.to,re),m.position.y+=Math.sin(Math.PI*re)*8,re>=1&&(S.mode="wait",S.biteAt=z+3e3+Math.random()*7e3,s("plop",.8))}else if(S.mode==="wait")m.position.set(S.to.x,$+Math.sin(A*2.2)*.06,S.to.z),z>S.biteAt&&(S.mode="bite",S.t0=z,s("splash",!1)),e.position.distanceTo(S.to)>80&&(V(),k(r("fishSnap","The line snapped")));else if(S.mode==="bite"){let re=(z-S.t0)/1e3;m.position.set(S.to.x+Math.sin(re*20)*.08,$-.25-Math.abs(Math.sin(re*9))*.45,S.to.z),re>1.5&&(S.mode="wait",S.biteAt=z+2500+Math.random()*6e3,k(r("fishAway","It got away\u2026")))}else if(S.mode==="catch"){let re=Math.min(1,(z-S.t0)/1100);_.set(0,-.4,-3.2).applyQuaternion(e.quaternion).add(e.position),E.visible=!0,E.position.lerpVectors(S.catchFrom,_,re),E.position.y+=Math.sin(Math.PI*re)*6,E.rotation.set(Math.sin(A*18)*.4,A*4,Math.PI/2*(1-re)),re>=1&&(E.visible=!1,V())}if(f.visible){let re=x.attributes.position;for(let xe=0;xe<M;xe++){let Be=xe/(M-1);_.lerpVectors(U,m.visible?m.position:S.catchFrom,Be),_.y-=Math.sin(Math.PI*Be)*(S.mode==="bite"?.2:1.2),re.setXYZ(xe,_.x,_.y,_.z)}re.needsUpdate=!0,u.rotation.x=-.95+(S.mode==="bite"?Math.sin(A*30)*.05-.15:0)}D?S.mode==="bite"?w(r("fishBite","A bite! Click now!"),!0):S.mode==="wait"||S.mode==="cast"?w(r("fishWait","Waiting for a bite\u2026 \xB7 R reel in")):S.aim?w(r("fishCast","R  cast the line")):w(""):w("")}}}function Pd({group:i,U:e,trees:t,shared:n}){let r=ds(7177),s=(V,z)=>V+r()*(z-V),o=Xt.floor,a={value:1},c=Tt.z1-Tt.z0,l=(V,z)=>{let A=Math.min(1,Math.max(0,(Tt.z1-z)/c));return o+.12+A*A*1.5+(zt(V*.55,1.3,z*.55)-.5)*.45*(.3+A)+Math.min(1.2,Math.abs(V)*.08)*A},d=(()=>{let V=new xt(Tt.x1-Tt.x0,c+.4,70,40).rotateX(-Math.PI/2);V.translate((Tt.x0+Tt.x1)/2,0,(Tt.z0+Tt.z1)/2+.2);let z=V.attributes.position;for(let A=0;A<z.count;A++)z.setY(A,l(z.getX(A),z.getZ(A)));return V.computeVertexNormals(),new Ot().add(V,{color:A=>{let D=.82+zt(A.x*2.2,0,A.z*2.2)*.25+zt(A.x*9,3,A.z*9)*.08;return[D*.95,D,D*.88]},tip:()=>1}).geometry()})(),p=hn({...n,uFrost:{value:0}},a,{color:16777215,snowBias:-.2}),u=new je(d,p);u.receiveShadow=!0,i.add(u);let h=[];for(let V=0,z=0;V<18&&z<400;z++){let A=s(Tt.x0+.8,Tt.x1-.8),D=s(Tt.z0+.8,Tt.z1-2.2);if(Tt.z1-D<4.5&&Math.abs(A)<2.2||h.some(re=>Math.hypot(re.x-A,re.z-D)<1.6))continue;let $=l(A,D)-.15,he=(Tt.y1-.25-$)/(3.75*1.8),te=Math.min(he,s(.42,.78));te<.25||(h.push({x:A,z:D,base:$,k:te}),V++)}let m=new Rn(t.geo,t.mat,h.length);{let V=new it,z=new ht,A=new B(0,1,0);h.forEach((D,J)=>{m.setMatrixAt(J,V.compose(new B(D.x,D.base,D.z),z.setFromAxisAngle(A,r()*6.28),new B(D.k*s(.8,.95),D.k*s(1.6,1.9),D.k*s(.8,.95))));let $=s(.85,1.1);m.setColorAt(J,new ke($,$*s(.97,1.03),$*s(.94,1)))})}i.add(m);let M=(()=>{let V=[];for(let z=0;z<9;z++){let A=z/9*Math.PI*2+r()*.7,D=s(.18,.42),J=s(.1,.4),$=r()*.08,he=.016,te=Math.cos(A)*$,re=Math.sin(A)*$,xe=Math.cos(A)*J,Be=Math.sin(A)*J,Ae=-Math.sin(A)*he,Je=Math.cos(A)*he,Ee=[te+xe*D*.35,D*.55,re+Be*D*.35],qe=[te+xe*D,D*.92,re+Be*D];V.push([te-Ae,0,re-Je],[te+Ae,0,re+Je],[Ee[0]+Ae*.6,Ee[1],Ee[2]+Je*.6]),V.push([te-Ae,0,re-Je],[Ee[0]+Ae*.6,Ee[1],Ee[2]+Je*.6],[Ee[0]-Ae*.6,Ee[1],Ee[2]-Je*.6]),V.push([Ee[0]-Ae*.6,Ee[1],Ee[2]-Je*.6],[Ee[0]+Ae*.6,Ee[1],Ee[2]+Je*.6],qe)}return new Ot().tris(V,z=>{let A=z.y/.42;return[.48*(.55+.6*A),.6*(.55+.6*A),.3*(.55+.6*A)]},z=>Math.pow(z.y/.42,1.5),new B(0,1,0)).geometry()})(),x=hn(n,a,{sway:.4,side:nn,color:16777215,snowBias:-1,softBack:!0}),f=[];for(let V=0;V<160;V++){let z=s(Tt.x0+.3,Tt.x1-.3),A=s(Tt.z0+.3,Tt.z1-.1);zt(z*.8,7,A*.8)<.38||f.push([z,l(z,A)-.02,A,s(.7,1.5)])}let E=new Rn(M,x,f.length);{let V=new it,z=new ht,A=new B(0,1,0);f.forEach(([D,J,$,he],te)=>E.setMatrixAt(te,V.compose(new B(D,J,$),z.setFromAxisAngle(A,r()*6.28),new B(he,he*s(.8,1.3),he))))}i.add(E);let R=new Ot;for(let V=0;V<6;V++){let z=new xr(1,1),A=z.attributes.position,D=new B,J=V*3.1;for(let re=0;re<A.count;re++)D.fromBufferAttribute(A,re),D.multiplyScalar(1+(zt(D.x*1.6+J,D.y*1.6,D.z*1.6)-.5)*.5),D.y=Math.max(-.3,D.y)*.7,A.setXYZ(re,D.x,D.y,D.z);let $=s(Tt.x0+1,Tt.x1-1),he=s(Tt.z0+1,Tt.z1-1.5),te=s(.18,.45);R.add(z,{m:N($,l($,he)+te*.05,he,0,r()*6,0,te*1.2,te,te),flat:!0,color:re=>{let xe=.5+zt(re.x*4+J,re.y*4,re.z*4)*.25;return[xe,xe*.99,xe*.95]}})}i.add(new je(R.geometry(),hn({...n,uFrost:{value:0}},a,{color:9277328,snowBias:.05})));let w={uHill:{value:new ke},uHaze:{value:new ke}},S=new Ut({uniforms:{...e,...w},fog:!1,vertexShader:`
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
      }`}),T=Tt.x1-Tt.x0,U=Tt.y1-Tt.y0,_=(Tt.x0+Tt.x1)/2,O=(Tt.y0+Tt.y1)/2,W=(Tt.z0+Tt.z1)/2;[[new xt(T,U),N(_,O,Tt.z0)],[new xt(c,U),N(Tt.x0,O,W,0,Math.PI/2,0)],[new xt(c,U),N(Tt.x1,O,W,0,-Math.PI/2,0)],[new xt(T,c),N(_,Tt.y1,W,Math.PI/2,0,0)]].forEach(([V,z])=>{let A=new je(V,S);A.applyMatrix4(z),i.add(A)});let k=new ke;return{update(V){k.copy(V.low).multiplyScalar(1.45),p.color.copy(k),x.color.copy(V.low).multiplyScalar(1.7),w.uHill.value.copy(V.snowLine<60?V.snowC:V.low).multiplyScalar(.85),w.uHaze.value.copy(V.fog),m.visible=V.trees>.01}}}(()=>{"use strict";let i=document.getElementById("bg");if(!i)return;let e=document.documentElement,t;try{t=new xc({canvas:i,antialias:!0,powerPreference:"low-power"})}catch{e.classList.add("no-webgl"),window.MEOW_BG={scenes:[],setScene(Ge){e.setAttribute("data-scene",Ge)},setMotion(){},start(){},home(){},enter(){},focus(){},pan(){},pulse(){},toggleLight(){}};return}t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=Js,t.shadowMap.enabled=!0,t.shadowMap.type=vr;let n=new dr,r=new wn(50,1,.5,3e3);n.add(r);let s={uTime:{value:0}},o=performance.now(),a=dd(n,s),c=new Vs(16777215,4473924,1),l=new qs(16777215,1);n.add(c,l,l.target),n.fog=new Is(13421772,.004);let d=hd(n),p=ud(n,s),u=[[0,105],[0,140],[-38,112],[24,78],[0,92],[30,102],[0,125]].map(([ie,Ge])=>({x:ie,z:Ge,r:42})),h=md({scene:n,heightAt:cn,U:s,snowColor:d.TU.uSnow,clear:u}),m=Sd({scene:n,shared:h.shared,isClearing:(ie,Ge)=>h.inClearing(ie,Ge)});h.plant(m.base,0);let M=lo(n,cn,m.base.map(ie=>({x:ie.p.x,z:ie.p.z,sx:ie.s.x*3.4,sz:ie.s.z*3.4})),.32),x=lo(n,cn,[{x:dt.x,z:dt.z,sx:8.6*dt.S,sz:7.4*dt.S,yaw:dt.yaw}],.4),f=ld({scene:n,shared:h.shared,U:s,camera:r}),E=f.study,R=Pd({group:f.group,U:s,trees:m,shared:h.shared}),w=gd(n,s),S=xd(n,s),T=fd(n,s,t.getPixelRatio()),U=Cd({scene:n,camera:r,heightAt:cn,water:p.mesh}),_=Rd(n,s),O=Td(s),W=window.MEOW_STATE,k=W&&W.motion==="reduced"?"reduced":"full",V=()=>k==="full",z=Ed(W&&ei[W.scene]?W.scene:"rain"),A=wd({trees:m,props:h,cabin:f,scenes:z,water:p.mesh}),D=bd({physics:A,trees:m}),J=!1,$=0,he=1,te=1,re=0,xe=0,Be=0,Ae={focus:0,focusTo:0,pan:0,panTo:0,pulse:0},Je={x:0,y:0,sx:0,sy:0},Ee=new Set,qe=new Wt(1e9,1e9,1e9,1e9),ue={pos:new B,q:new ht,roll:0},le={pos:new B,q:new ht},Te=new it,et=new B(0,1,0),ze=new B,ct=new B,Mt=(ie,Ge)=>window.MEOW_I18N?window.MEOW_I18N.t(ie):Ge,st=()=>Math.max(.2,Math.min(2.5,window.MEOW_STATE&&Number(window.MEOW_STATE.sens)||1)),tt=()=>!J||e.classList.contains("locked")||Ae.focusTo>0,Ft=()=>!!document.querySelector(".modal:not([hidden])"),mt=ie=>ie&&(/INPUT|TEXTAREA|SELECT/.test(ie.tagName)||ie.isContentEditable),wt=ie=>ie&&ie.closest&&ie.closest(".sidebar, .modal, .gallery, .top, .composer, .tools, .tree-card, .home-btn, .backdrop, .walk-hint, input, button, a, label"),Ht=ie=>{let Ge=z.cur,He=V()?1:0;Je.sx+=(Je.x-Je.sx)*.035,Je.sy+=(Je.y-Je.sy)*.035,le.pos.set(Ge.cam.x+(Math.sin(ie*.05)*3+Je.sx*6)*He,Ge.cam.y+Be+(Math.sin(ie*.07)*.8-Je.sy*2.5)*He,Ge.cam.z),ze.copy(Ge.look),ze.x+=Je.sx*3*He;let yt=Ae.focus;(yt>5e-4||Math.abs(Ae.pan)>5e-4)&&(ct.copy(Ge.look).sub(Ge.cam).normalize(),le.pos.addScaledVector(ct,yt*34),le.pos.y-=yt*4-Ae.pulse*2,le.pos.x+=Ae.pan*10*yt,ze.x+=Ae.pan*38*yt,ze.y-=yt*3),Te.lookAt(le.pos,ze,et),le.q.setFromRotationMatrix(Te)},Et=(ie,Ge)=>{let He=z.cur;s.uTop.value.copy(He.skyTop),s.uHorizon.value.copy(He.skyHorizon),s.uBottom.value.copy(He.skyBottom),s.uSunColor.value.copy(He.sunC),s.uSunDir.value.copy(He.sunDir).normalize(),s.uSunSize.value=He.sunSize,s.uStars.value=He.stars,s.uAurora.value=He.aurora,s.uAur1.value.copy(He.aur1),s.uAur2.value.copy(He.aur2),n.fog.color.copy(He.fog),n.fog.density=He.fogDensity*(1+Ae.focus*.35)*(1-.85*re),He.pCabin>.5?(d.TU.uHole.value.set(...f.holeBox),p.WU.uStudy.value.set(...f.studyBox)):(d.TU.uHole.value.copy(qe),p.WU.uStudy.value.copy(qe)),d.TU.uLow.value.copy(He.low),d.TU.uHigh.value.copy(He.high),d.TU.uSnow.value.copy(He.snowC),d.TU.uSnowLine.value=He.snowLine,d.TU.uSand.value=He.sand,p.mesh.position.y=He.water,p.mat.color.copy(He.waterC),p.mat.roughness=He.waterRough,p.WU.uLevel.value=He.water,d.TU.uWaterY.value=He.water,d.TU.uWaterC.value.copy(He.waterC),p.tex.offset.set(ie*.004,ie*.006),l.color.copy(He.lightC),l.intensity=He.light*2.2,l.position.copy(He.lightDir).multiplyScalar(300),c.color.copy(He.hemiSky),c.groundColor.copy(He.hemiGround),c.intensity=He.hemi*1.6,m.update(He,Ge),M.set(He.trees),x.set(He.pCabin),R.update(He),h.update(He,ie),f.update(He,ie,Ge,He.water,D.walking?D.state.feet:void 0)},at=()=>!!document.pointerLockElement,se=0,H=()=>{if(!(at()||!i.requestPointerLock||se>0))try{let ie=i.requestPointerLock();ie&&ie.catch&&ie.catch(()=>{se++})}catch{se++}},be=()=>{at()&&document.exitPointerLock&&(window.MEOW_UNLOCK_REASON="self",document.exitPointerLock())};document.addEventListener("pointerlockerror",()=>{se++});let fe=document.createElement("div");fe.className="aim-dot",document.body.appendChild(fe);let I=()=>[innerWidth/2,innerHeight/2],v=ie=>{e.classList.contains("exploring")!==ie&&e.classList.toggle("exploring",ie)},Z=()=>{!J||tt()||D.mode!=="home"||(D.enter(r.position,r.quaternion,V(),p.mesh.position.y),v(!0))},ee=()=>{be(),E.reset(performance.now()),U.reset(),Ee.clear(),(D.mode==="walk"||D.mode==="enter")&&D.leave(r.position,r.quaternion,V()),m.hover(-1),e.classList.remove("on-tree","on-book"),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"leave"}}))},oe=()=>{!D.out||tt()||E.back(performance.now())||ee()};document.addEventListener("pointerlockchange",()=>{if(e.classList.toggle("pl",at()),!at()){let ie=window.MEOW_UNLOCK_REASON;window.MEOW_UNLOCK_REASON="",ie||setTimeout(()=>{document.hasFocus()&&!document.hidden&&oe()},80),ce.pending=!0}});let ae=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"];addEventListener("keydown",ie=>{if(mt(ie.target)||ie.metaKey||ie.ctrlKey||ie.altKey||Ft())return;let Ge=performance.now();if(ae.includes(ie.code)){if(tt())return;ie.code.startsWith("Shift")||ie.preventDefault(),Ee.add(ie.code),D.mode==="home"&&!ie.code.startsWith("Shift")&&Z();return}if(ie.code==="KeyF"&&!ie.repeat&&J&&!e.classList.contains("locked")){ie.preventDefault(),_.toggle(Ge);return}if(!(tt()||!D.walking)){if(ie.code==="Space"){ie.preventDefault(),ie.repeat||D.jump();return}if(ie.code==="KeyR"&&!ie.repeat){U.key(Ge)&&ie.preventDefault();return}ie.code==="KeyE"&&!ie.repeat&&z.cur.pCabin>.5&&f.door.near(r.position.x,r.position.z)&&_e()}}),addEventListener("keyup",ie=>Ee.delete(ie.code)),addEventListener("blur",()=>{Ee.clear(),we.inside=!1}),addEventListener("keydown",ie=>{if(ie.key!=="Escape"||!D.out||mt(ie.target)||Ft())return;let Ge=document.getElementById("treeCard");Ge&&!Ge.hidden&&Ge.classList.contains("show")||oe()},!0);let de=new Zs;de.far=900;let Q=new Ze,ne=(ie,Ge)=>(Q.set(ie/innerWidth*2-1,-(Ge/innerHeight)*2+1),de.setFromCamera(Q,r),de),ce={x:0,y:0,pending:!1,tick:0},ye=()=>at()?I():[ce.x,ce.y],me=document.createElement("div");me.className="act-hint",me.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v6" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 9h5.5V3.4A6 6 0 0 0 6.5 9z" fill="currentColor"/></svg><span></span>',document.body.appendChild(me);let ve=(ie,Ge)=>{if(!D.walking||z.cur.pCabin<.5||!f.door.near(r.position.x,r.position.z))return!1;let He=ne(ie,Ge).intersectObject(f.door.mesh,!1)[0];return!!He&&He.distance<26},_e=()=>{if(!f.door.canToggle(r.position.x,r.position.z))return!1;let ie=f.door.toggle(performance.now());return window.MEOW_SOUND&&window.MEOW_SOUND.door&&window.MEOW_SOUND.door(ie),!0},Pe=ie=>{m.hover(ie)&&(e.classList.toggle("on-tree",ie>=0),dispatchEvent(new CustomEvent("meow:tree",{detail:ie>=0?{type:"hover",id:ie,x:ce.x,y:ce.y}:{type:"leave"}})))},Se=!1,K=()=>{if(++ce.tick%3&&!ce.pending)return;ce.pending=!1;let[ie,Ge]=ye(),He=D.walking&&!tt(),yt=He&&ve(ie,Ge);yt!==Se&&(Se=yt,me.classList.toggle("show",yt)),yt&&(me.querySelector("span").textContent=f.door.open?Mt("doorClose","Click to close the door"):Mt("doorOpen","Click to open the door")),e.classList.toggle("on-book",E.hover(ne(ie,Ge),He&&z.cur.pCabin>.5&&re>.5));let un=!tt()&&re<.5&&!D.gliding&&(D.walking||we.inside&&!we.ui);at()&&(ce.x=ie,ce.y=Ge),Pe(un?m.pick(ne(ie,Ge)):-1)},we={x:-1,y:-1,inside:!1,ui:!1},pe=null,De=null;addEventListener("pointerdown",ie=>{if(tt()||wt(ie.target)||D.gliding)return;if(ie.button===2||ie.pointerType==="touch"&&ie.button===0)pe={x:ie.clientX,y:ie.clientY,lx:ie.clientX,ly:ie.clientY,moved:!1,touch:ie.pointerType==="touch"},ie.preventDefault();else if(ie.button===0){if(D.walking&&!at()&&ie.pointerType==="mouse"&&!se&&i.requestPointerLock){H(),De=null,ie.preventDefault(),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}));return}De={x:ie.clientX,y:ie.clientY},ie.preventDefault()}}),addEventListener("contextmenu",ie=>{J&&!wt(ie.target)&&!e.classList.contains("locked")&&ie.preventDefault()}),addEventListener("pointermove",ie=>{if(Je.x=ie.clientX/innerWidth*2-1,Je.y=ie.clientY/innerHeight*2-1,pe){Math.hypot(ie.clientX-pe.x,ie.clientY-pe.y)>5&&(pe.moved=!0),D.walking&&D.look(ie.clientX-pe.lx,ie.clientY-pe.ly,.0035),pe.lx=ie.clientX,pe.ly=ie.clientY,e.classList.add("looking");return}if(at()){D.walking&&!tt()&&D.look(ie.movementX,ie.movementY,.0024*st());return}we.x=ie.clientX,we.y=ie.clientY,we.inside=!0,we.ui=!!wt(ie.target),D.walking&&!tt()&&!we.ui&&ie.pointerType!=="touch"&&(ie.movementX||ie.movementY)&&D.look(ie.movementX,ie.movementY,.0028*st()),ce.x=ie.clientX,ce.y=ie.clientY,ce.pending=!0},{passive:!0}),document.addEventListener("mouseleave",()=>{we.inside=!1,ce.pending=!0}),addEventListener("pointerup",ie=>{let Ge=!1;if(pe?(Ge=pe.touch&&!pe.moved,pe=null,e.classList.remove("looking")):De&&ie.button===0&&(Ge=at()||Math.hypot(ie.clientX-De.x,ie.clientY-De.y)<8),De=null,!Ge)return;let[He,yt]=at()?I():[ie.clientX,ie.clientY],un=performance.now();if(D.walking&&U.click(un)||D.walking&&z.cur.pCabin>.5&&re>.5&&E.click(ne(He,yt),un))return;if(ve(He,yt)){_e();return}let qt=m.hovered>=0?m.hovered:re<.5?m.pick(ne(He,yt)):-1;qt>=0?(m.shake(qt,un),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"click",id:qt,x:He,y:yt}}))):dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}))});let Ue=()=>{let ie=innerWidth,Ge=innerHeight;t.setSize(ie,Ge,!1);let He=t.getDrawingBufferSize(new Ze);O.resize(He.x,He.y),r.aspect=ie/Ge,r.updateProjectionMatrix()};addEventListener("resize",()=>{clearTimeout(Ue.t),Ue.t=setTimeout(Ue,120)});let Me={last:0,sum:0,n:0,level:0,since:0},$e=[Math.min(window.devicePixelRatio||1,1.5),1.1,.85,.7],Ye=ie=>{Me.since||(Me.since=ie);let Ge=ie-(Me.last||ie);if(Me.last=ie,!(ie-Me.since<5e3||Ge>250||document.hidden)&&(Me.sum+=Ge,Me.n++,Me.n>=90)){let He=Me.sum/Me.n;Me.sum=Me.n=0,He>30&&Me.level<$e.length-1&&$e[Me.level+1]<t.getPixelRatio()&&(Me.level++,t.setPixelRatio($e[Me.level]),Ue())}},nt=0,Pt=ie=>{let Ge=Math.min(.1,Math.max(.001,(ie-(nt||ie))/1e3));nt=ie;let He=(ie-o)/1e3;s.uTime.value=He;let yt=z.step(ie);Be=V()&&yt<1?Math.sin(Math.PI*yt)*9:0;let un=V()?1-Math.pow(1-.035,Ge*60):1;Ae.focus+=(Ae.focusTo-Ae.focus)*un,Ae.pan+=(Ae.panTo-Ae.pan)*(V()?1-Math.pow(.95,Ge*60):1),Ae.pulse*=Math.pow(.94,Ge*60),he+=(te-he)*.04,Ht(He);let qt=D.update(Ge,ie,Ee,le,V(),z,p.mesh,ue);D.justLanded&&(D.justLanded=!1,H()),D.mode==="home"&&v(!1),r.position.copy(ue.pos),r.quaternion.copy(ue.q);let _n=(innerWidth<700?62:50)-(D.mode==="home"?Ae.focus*6-Ae.pulse*1.5:0);if(Math.abs(r.fov-_n)>.01&&(r.fov=_n,r.updateProjectionMatrix()),a.position.copy(r.position),!at()&&D.walking&&we.inside&&!we.ui&&!pe&&!tt()&&V()&&we.y>innerHeight*.15&&we.y<innerHeight*.85){let q=Math.max(30,innerWidth*.04);we.x>innerWidth-q?D.turn(-1.1*Ge*(we.x-(innerWidth-q))/q):we.x>=0&&we.x<q&&D.turn(1.1*Ge*(q-we.x)/q)}let It=D.state,ui=D.walking&&A.inside(It.x,It.z,It.feet);re+=((ui?1:0)-re)*(1-Math.pow(.88,Ge*60)),xe+=((D.out?1:0)-xe)*(1-Math.pow(.97,Ge*60)),D.walking&&z.cur.pCabin<.6&&f.inside(It.x,It.z,It.feet)&&ee(),Et(He,ie);let ti=1-re;if(T.update(z.cur,r.position,z.cur.look,z.cur.cam,p.mesh.position.y,ti,Ge),w.update(z.cur.pRipples*ti,r.position,p.mesh.position.y),S.update(Math.min(1,Math.max(0,(100-z.cur.snowLine)/80))*ti),qt&&!ui){let q=cn(It.x,It.z);if(q>p.mesh.position.y+.6&&(z.name==="snow"||q>z.cur.snowLine+4)&&!A.floor(It.x,It.z,It.feet).built){let b=new B(cn(It.x-1.5,It.z)-cn(It.x+1.5,It.z),3,cn(It.x,It.z-1.5)-cn(It.x,It.z+1.5)).normalize();S.place(It.x,q,It.z,Math.atan2(-It.vx,-It.vz),b)}}_.update(r,ie,He,Ge,{fog:Math.min(1.6,n.fog.density/.004),rain:T.rainAmount,bob:It.bob,vx:It.vx,vz:It.vz,motionFull:V()});{let[q,g]=ye();U.update(ie,He,{active:D.walking&&!tt(),ray:D.walking?ne(q,g):null,waterY:p.mesh.position.y,amount:z.cur.fishy,indoor:re>.5})}K();let Mn=O.LU,di=t.getPixelRatio(),Gn=V()&&yt<1?Math.sin(Math.PI*(yt<.5?4*yt*yt*yt:1-Math.pow(-2*yt+2,3)/2))*6:0,L=V()?Math.max(0,1-(ie-$)/3600):0;Mn.uBlur.value=2.6*di*(1+Ae.focus*2.6)*(1-xe*.7)*z.cur.dof,Mn.uBand.value=.22-Ae.focus*.1+xe*.12,Mn.uPull.value=(Gn+Math.pow(L,1.6)*18+Ae.pulse*3)*di,Mn.uFlicker.value=V()?.012:0,Mn.uIndoor.value=V()?re:0,Mn.uBlurIn.value=4.5*di,Mn.uVig.value=.32+re*.16,Mn.uSat.value=z.cur.sat+(Math.max(z.cur.sat,.8)-z.cur.sat)*re,t.toneMappingExposure=he,O.render(t,n,r)},rn=ie=>{requestAnimationFrame(rn),!(!J||document.hidden)&&(Pt(ie),Ye(ie))},on=()=>e.getAttribute("data-theme")==="dark"?.62:1;new MutationObserver(()=>{te=on()}).observe(e,{attributes:!0,attributeFilter:["data-theme"]});let sn=(ie,Ge)=>{z.go(ie,V()?Ge:1,performance.now()),e.setAttribute("data-scene",z.name),J&&dispatchEvent(new CustomEvent("meow:shot",{detail:{name:z.name,dur:V()?Ge:1}}))};e.setAttribute("data-scene",z.name),window.MEOW_BG={scenes:vd,setScene(ie){if(ei[ie]||(ie="rain"),!(ie===z.name&&J)){if(!J){z.go(ie,1,performance.now()),e.setAttribute("data-scene",ie);return}sn(ie,3200)}},setMotion(ie){k=ie==="reduced"?"reduced":"full"},focus(ie){Ae.focusTo=ie?1:0,ie&&D.out&&ee()},pan(ie){Ae.panTo=Math.max(-1,Math.min(1,ie||0))},pulse(){V()&&(Ae.pulse=1)},toggleLight(){_.toggle(performance.now())},enter(){Z()},home(){ee()},start(){if(J)return;J=!0,te=he=on(),Ue();let ie=z.name;z.go(ie,1,-1e9),z.step(performance.now()),V()&&z.offsetHome(new B(0,120,230),new B(0,30,0)),$=performance.now(),sn(ie,4200),i.classList.add("on")},_standAt(ie,Ge,He){let yt=He==="study"?dt.y+Xt.floor*dt.S:He==="mezz"?dt.y+Xt.mezz*dt.S:1e5;D.place(ie,Ge,A.floor(ie,Ge,yt).y),v(!0)},_look(ie,Ge,He=0){let yt=D.state;D.face(Math.atan2(-(ie-yt.x),-(Ge-yt.z)),He)},_pos(){let ie=D.state;return{x:ie.x,z:ie.z,feet:ie.feet,mode:D.mode,cx:r.position.x,cy:r.position.y,cz:r.position.z,yaw:ie.yaw,pitch:ie.pitch,indoor:re}},_toggleDoor(){f.door.toggle(performance.now())},_aimDoor(ie,Ge){let yt=ne(ie,Ge).intersectObject(f.door.mesh,!1)[0];return{hit:!!yt,d:yt?yt.distance:-1,walking:D.walking,busy:tt(),hover:[ce.x,ce.y],ok:ve(ie,Ge)}},get _trees(){return m},get _keys(){return[...Ee]},get _study(){return E},get _cabin(){return f},get _physics(){return A},get _player(){return D},get _cur(){return z.cur},_nearTree(ie,Ge=16){let He=m.base[ie%m.base.length];He&&this._standAt(He.p.x,He.p.z+Ge)}};{let ie=document.querySelector(".walk-hint");ie&&ie.addEventListener("click",()=>Z())}requestAnimationFrame(rn),window.MEOW_READY&&window.MEOW_STATE&&window.MEOW_READY.then(()=>window.MEOW_BG.start())})();})();
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
