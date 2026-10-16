(()=>{var ba="186";var $h=0,ul=1,Kh=2;var Wr=1,wa=2,$s=3,bi=0,Pn=1,Xn=2,wi=0,Ks=1,Oi=2,dl=3,fl=4,Qh=5;var _s=100,jh=101,tu=102,eu=103,nu=104,iu=200,su=201,ru=202,ou=203,pl=204,ml=205,au=206,cu=207,lu=208,hu=209,uu=210,du=211,fu=212,pu=213,mu=214,Vo=0,Wo=1,Xo=2,Hs=3,qo=4,Yo=5,Zo=6,Jo=7,Ta=0,gu=1,xu=2,fi=0,gl=1,xl=2,_l=3,Xr=4,yl=5,vl=6,Ml=7;var Sl=300,ns=301,ys=302,Aa=303,Ra=304,qr=306,Gs=1e3,_i=1001,$o=1002,Rn=1003,_u=1004;var Yr=1005;var Ln=1006,Ca=1007;var is=1008;var Yn=1009,El=1010,bl=1011,Qs=1012,Pa=1013,pi=1014,ii=1015,ti=1016,Ia=1017,La=1018,js=1020,wl=35902,Tl=35899,Al=1021,Rl=1022,si=1023,yi=1026,ss=1027,Da=1028,Na=1029,rs=1030,Ua=1031;var Fa=1033,Zr=33776,Jr=33777,$r=33778,Kr=33779,Oa=35840,Ba=35841,za=35842,Ha=35843,Ga=36196,ka=37492,Va=37496,Wa=37488,Xa=37489,Qr=37490,qa=37491,Ya=37808,Za=37809,Ja=37810,$a=37811,Ka=37812,Qa=37813,ja=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,ac=36492,cc=36494,lc=36495,hc=36283,uc=36284,jr=36285,dc=36286;var Mr=2300,Ko=2301,Go=2302,tl=2303,el=2400,nl=2401,il=2402;var yu=3200;var to=0,vu=1,Bi="",Vn="srgb",Sr="srgb-linear",Er="linear",Ke="srgb";var ko=7680;var Mu=519,Su=512,Eu=513,bu=514,fc=515,wu=516,Tu=517,pc=518,Au=519,Ru=35044,Cl=35048;var Pl="300 es",hi=2e3,ks=2001;function bd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cu(){let i=br("canvas");return i.style.display="block",i}var _h={},Vs=null;function Il(...i){let t="THREE."+i.shift();Vs?Vs("log",t,...i):console.log(t,...i)}function Pu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=Pu(i);let t="THREE."+i.shift();if(Vs)Vs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function be(...i){i=Pu(i);let t="THREE."+i.shift();if(Vs)Vs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ds(...i){let t=i.join(" ");t in _h||(_h[t]=!0,Me(...i))}function Iu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Lu={[Vo]:Wo,[Xo]:Zo,[qo]:Jo,[Hs]:Yo,[Wo]:Vo,[Zo]:Xo,[Jo]:qo,[Yo]:Hs},vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yh=1234567,yr=Math.PI/180,fs=180/Math.PI;function tr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[e&63|128]+Un[e>>8&255]+"-"+Un[e>>16&255]+Un[e>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function Ll(i,t){return(i%t+t)%t}function Td(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ad(i,t,e){return i!==t?(e-i)/(t-i):0}function vr(i,t,e){return(1-e)*i+e*t}function Rd(i,t,e,n){return vr(i,t,1-Math.exp(-e*n))}function Cd(i,t=1){return t-Math.abs(Ll(i,t*2)-t)}function Pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ld(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dd(i,t){return i+Math.random()*(t-i)}function Nd(i){return i*(.5-Math.random())}function Ud(i){i!==void 0&&(yh=i);let t=yh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fd(i){return i*yr}function Od(i){return i*fs}function Bd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),m=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*x,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*x,a*c);break;case"ZYZ":i.set(l*x,l*m,a*u,a*c);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Dl={DEG2RAD:yr,RAD2DEG:fs,generateUUID:tr,clamp:He,euclideanModulo:Ll,mapLinear:Td,inverseLerp:Ad,lerp:vr,damp:Rd,pingpong:Cd,smoothstep:Pd,smootherstep:Id,randInt:Ld,randFloat:Dd,randFloatSpread:Nd,seededRandom:Ud,degToRad:Fd,radToDeg:Od,isPowerOfTwo:Bd,ceilPowerOfTwo:zd,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:Gd,normalize:kn,denormalize:Bs},Bl=class Bl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=He(this.x,t.x,e.x),this.y=He(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=He(this.x,t,e),this.y=He(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bl.prototype.isVector2=!0;var Re=Bl,Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],m=r[o+1],x=r[o+2],b=r[o+3];if(f!==b||l!==h||c!==m||u!==x){let p=l*h+c*m+u*x+f*b;p<0&&(h=-h,m=-m,x=-x,b=-b,p=-p);let d=1-a;if(p<.9995){let y=Math.acos(p),C=Math.sin(y);d=Math.sin(d*y)/C,a=Math.sin(a*y)/C,l=l*d+h*a,c=c*d+m*a,u=u*d+x*a,f=f*d+b*a}else{l=l*d+h*a,c=c*d+m*a,u=u*d+x*a,f=f*d+b*a;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],m=r[o+2],x=r[o+3];return t[e]=a*x+u*f+l*m-c*h,t[e+1]=l*x+u*h+c*f-a*m,t[e+2]=c*x+u*m+a*h-l*f,t[e+3]=u*x-a*f-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zl=class zl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=He(this.x,t.x,e.x),this.y=He(this.y,t.y,e.y),this.z=He(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=He(this.x,t,e),this.y=He(this.y,t,e),this.z=He(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lc.copy(this).projectOnVector(t),this.sub(Lc)}reflect(t){return this.sub(Lc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zl.prototype.isVector3=!0;var I=zl,Lc=new I,vh=new Ge,Hl=class Hl{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],x=n[8],b=s[0],p=s[3],d=s[6],y=s[1],C=s[4],M=s[7],A=s[2],T=s[5],P=s[8];return r[0]=o*b+a*y+l*A,r[3]=o*p+a*C+l*T,r[6]=o*d+a*M+l*P,r[1]=c*b+u*y+f*A,r[4]=c*p+u*C+f*T,r[7]=c*d+u*M+f*P,r[2]=h*b+m*y+x*A,r[5]=h*p+m*C+x*T,r[8]=h*d+m*M+x*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,m=c*r-o*l,x=e*f+n*h+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return t[0]=f*b,t[1]=(s*c-u*n)*b,t[2]=(a*n-s*o)*b,t[3]=h*b,t[4]=(u*e-s*l)*b,t[5]=(s*r-a*e)*b,t[6]=m*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dc.makeScale(t,e)),this}rotate(t){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dc.makeRotation(-t)),this}translate(t,e){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hl.prototype.isMatrix3=!0;var Pe=Hl,Dc=new Pe,Mh=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kd(){let i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ke&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ke&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?Er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:t,whitePoint:n,transfer:Er,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:t,whitePoint:n,transfer:Ke,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),i}var ze=kd();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bs,Qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bs===void 0&&(bs=br("canvas")),bs.width=t.width,bs.height=t.height;let s=bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vd=0,Ws=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nc(s[o].image)):r.push(Nc(s[o]))}else r=Nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}var Wd=0,Uc=new I,Wn=class i extends vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_i,s=_i,r=Ln,o=is,a=si,l=Yn,c=i.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=tr(),this.name="",this.source=new Ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Sl;Wn.DEFAULT_ANISOTROPY=1;var Gl=class Gl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],b=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,M=(m+1)/2,A=(d+1)/2,T=(u+h)/4,P=(f+b)/4,_=(x+p)/4;return C>M&&C>A?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=T/n,r=P/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=_/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-x)*(p-x)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(f-b)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=He(this.x,t.x,e.x),this.y=He(this.y,t.y,e.y),this.z=He(this.z,t.z,e.z),this.w=He(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=He(this.x,t,e),this.y=He(this.y,t,e),this.z=He(this.z,t,e),this.w=He(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gl.prototype.isVector4=!0;var nn=Gl,jo=class extends vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new nn(0,0,t,e),this.scissorTest=!1,this.viewport=new nn(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Wn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ws(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wr=class extends Wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ta=class extends Wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ea=class Ea{constructor(t,e,n,s,r,o,a,l,c,u,f,h,m,x,b,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,m,x,b,p)}set(t,e,n,s,r,o,a,l,c,u,f,h,m,x,b,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=x,d[11]=b,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ea().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),o=1/ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,m=o*f,x=a*u,b=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+x*c,e[5]=h-b*c,e[9]=-a*l,e[2]=b-h*c,e[6]=x+m*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,m=l*f,x=c*u,b=c*f;e[0]=h+b*a,e[4]=x*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-x,e[6]=b+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,m=l*f,x=c*u,b=c*f;e[0]=h-b*a,e[4]=-o*f,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*u,e[9]=b-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,m=o*f,x=a*u,b=a*f;e[0]=l*u,e[4]=x*c-m,e[8]=h*c+b,e[1]=l*f,e[5]=b*c+h,e[9]=m*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,m=o*c,x=a*l,b=a*c;e[0]=l*u,e[4]=b-h*f,e[8]=x*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*f+x,e[10]=h-b*f}else if(t.order==="XZY"){let h=o*l,m=o*c,x=a*l,b=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+b,e[5]=o*u,e[9]=m*f-x,e[2]=x*f-m,e[6]=a*u,e[10]=b*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xd,t,qd)}lookAt(t,e,n){let s=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Vi.crossVectors(n,Kn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Vi.crossVectors(n,Kn)),Vi.normalize(),xo.crossVectors(Kn,Vi),s[0]=Vi.x,s[4]=xo.x,s[8]=Kn.x,s[1]=Vi.y,s[5]=xo.y,s[9]=Kn.y,s[2]=Vi.z,s[6]=xo.z,s[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],x=n[2],b=n[6],p=n[10],d=n[14],y=n[3],C=n[7],M=n[11],A=n[15],T=s[0],P=s[4],_=s[8],R=s[12],L=s[1],k=s[5],B=s[9],it=s[13],X=s[2],J=s[6],Q=s[10],et=s[14],Tt=s[3],ft=s[7],Et=s[11],At=s[15];return r[0]=o*T+a*L+l*X+c*Tt,r[4]=o*P+a*k+l*J+c*ft,r[8]=o*_+a*B+l*Q+c*Et,r[12]=o*R+a*it+l*et+c*At,r[1]=u*T+f*L+h*X+m*Tt,r[5]=u*P+f*k+h*J+m*ft,r[9]=u*_+f*B+h*Q+m*Et,r[13]=u*R+f*it+h*et+m*At,r[2]=x*T+b*L+p*X+d*Tt,r[6]=x*P+b*k+p*J+d*ft,r[10]=x*_+b*B+p*Q+d*Et,r[14]=x*R+b*it+p*et+d*At,r[3]=y*T+C*L+M*X+A*Tt,r[7]=y*P+C*k+M*J+A*ft,r[11]=y*_+C*B+M*Q+A*Et,r[15]=y*R+C*it+M*et+A*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],m=t[14],x=t[3],b=t[7],p=t[11],d=t[15],y=l*m-c*h,C=a*m-c*f,M=a*h-l*f,A=o*m-c*u,T=o*h-l*u,P=o*f-a*u;return e*(b*y-p*C+d*M)-n*(x*y-p*A+d*T)+s*(x*C-b*A+d*P)-r*(x*M-b*T+p*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],m=t[11],x=t[12],b=t[13],p=t[14],d=t[15],y=e*a-n*o,C=e*l-s*o,M=e*c-r*o,A=n*l-s*a,T=n*c-r*a,P=s*c-r*l,_=u*b-f*x,R=u*p-h*x,L=u*d-m*x,k=f*p-h*b,B=f*d-m*b,it=h*d-m*p,X=y*it-C*B+M*k+A*L-T*R+P*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/X;return t[0]=(a*it-l*B+c*k)*J,t[1]=(s*B-n*it-r*k)*J,t[2]=(b*P-p*T+d*A)*J,t[3]=(h*T-f*P-m*A)*J,t[4]=(l*L-o*it-c*R)*J,t[5]=(e*it-s*L+r*R)*J,t[6]=(p*M-x*P-d*C)*J,t[7]=(u*P-h*M+m*C)*J,t[8]=(o*B-a*L+c*_)*J,t[9]=(n*L-e*B-r*_)*J,t[10]=(x*T-b*M+d*y)*J,t[11]=(f*M-u*T-m*y)*J,t[12]=(a*R-o*k-l*_)*J,t[13]=(e*k-n*R+s*_)*J,t[14]=(b*C-x*A-p*y)*J,t[15]=(u*A-f*C+h*y)*J,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,m=r*u,x=r*f,b=o*u,p=o*f,d=a*f,y=l*c,C=l*u,M=l*f,A=n.x,T=n.y,P=n.z;return s[0]=(1-(b+d))*A,s[1]=(m+M)*A,s[2]=(x-C)*A,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(h+d))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(x+C)*P,s[9]=(p-y)*P,s[10]=(1-(h+b))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ws.set(s[0],s[1],s[2]).length(),a=ws.set(s[4],s[5],s[6]).length(),l=ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let c=1/o,u=1/a,f=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=hi,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),m=(n+s)/(n-s),x,b;if(l)x=r/(o-r),b=o*r/(o-r);else if(a===hi)x=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===ks)x=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=hi,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),m=-(n+s)/(n-s),x,b;if(l)x=1/(o-r),b=o/(o-r);else if(a===hi)x=-2/(o-r),b=-(o+r)/(o-r);else if(a===ks)x=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ea.prototype.isMatrix4=!0;var Ae=Ea,ws=new I,oi=new Ae,Xd=new I(0,0,0),qd=new I(1,1,1),Vi=new I,xo=new I,Kn=new I,Eh=new Ae,bh=new Ge,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yd=0,wh=new I,Ts=new Ge,Pi=new Ae,_o=new I,dr=new I,Zd=new I,Jd=new Ge,Th=new I(1,0,0),Ah=new I(0,1,0),Rh=new I(0,0,1),Ch={type:"added"},$d={type:"removed"},As={type:"childadded",child:null},Fc={type:"childremoved",child:null},_n=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Cn,n=new Ge,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Pe}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(Th,t)}rotateY(t){return this.rotateOnAxis(Ah,t)}rotateZ(t){return this.rotateOnAxis(Rh,t)}translateOnAxis(t,e){return wh.copy(t).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Th,t)}translateY(t){return this.translateOnAxis(Ah,t)}translateZ(t){return this.translateOnAxis(Rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_o.copy(t):_o.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(dr,_o,this.up):Pi.lookAt(_o,dr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(Pi),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ch),As.child=t,this.dispatchEvent(As),As.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($d),Fc.child=t,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ch),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new I(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kd={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let p=e.getJointPose(b,n),d=this._getHandJoint(c,b);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var he=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ze.workingColorSpace){return this.r=t,this.g=e,this.b=n,ze.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ze.workingColorSpace){if(t=Ll(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Oc(o,r,t+1/3),this.g=Oc(o,r,t),this.b=Oc(o,r,t-1/3)}return ze.colorSpaceToWorking(this,s),this}setStyle(t,e=Vn){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Vn){let n=Du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vn){return ze.workingToColorSpace(Fn.copy(this),t),Math.round(He(Fn.r*255,0,255))*65536+Math.round(He(Fn.g*255,0,255))*256+Math.round(He(Fn.b*255,0,255))}getHexString(t=Vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ze.workingColorSpace){ze.workingToColorSpace(Fn.copy(this),e);let n=Fn.r,s=Fn.g,r=Fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ze.workingColorSpace){return ze.workingToColorSpace(Fn.copy(this),e),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Vn){ze.workingToColorSpace(Fn.copy(this),t);let e=Fn.r,n=Fn.g,s=Fn.b;return t!==Vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(yo);let n=vr(Wi.h,yo.h,e),s=vr(Wi.s,yo.s,e),r=vr(Wi.l,yo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new he;he.NAMES=Du;var Tr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ys=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new I,Ii=new I,Bc=new I,Li=new I,Rs=new I,Cs=new I,Ph=new I,zc=new I,Hc=new I,Gc=new I,kc=new nn,Vc=new nn,Wc=new nn,Zi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ai.subVectors(s,e),Ii.subVectors(n,e),Bc.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Ii),l=ai.dot(Bc),c=Ii.dot(Ii),u=Ii.dot(Bc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,m=(c*l-a*u)*h,x=(o*u-a*l)*h;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return kc.setScalar(0),Vc.setScalar(0),Wc.setScalar(0),kc.fromBufferAttribute(t,e),Vc.fromBufferAttribute(t,n),Wc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(kc,r.x),o.addScaledVector(Vc,r.y),o.addScaledVector(Wc,r.z),o}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),Ii.subVectors(t,e),ai.cross(Ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ai.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Rs.subVectors(s,n),Cs.subVectors(r,n),zc.subVectors(t,n);let l=Rs.dot(zc),c=Cs.dot(zc);if(l<=0&&c<=0)return e.copy(n);Hc.subVectors(t,s);let u=Rs.dot(Hc),f=Cs.dot(Hc);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Rs,o);Gc.subVectors(t,r);let m=Rs.dot(Gc),x=Cs.dot(Gc);if(x>=0&&m<=x)return e.copy(r);let b=m*c-l*x;if(b<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Cs,a);let p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return Ph.subVectors(r,s),a=(f-u)/(f-u+(m-x)),e.copy(s).addScaledVector(Ph,a);let d=1/(p+b+h);return o=b*d,a=h*d,e.copy(n).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Mo.subVectors(this.max,fr),Ps.subVectors(t.a,fr),Is.subVectors(t.b,fr),Ls.subVectors(t.c,fr),Xi.subVectors(Is,Ps),qi.subVectors(Ls,Is),cs.subVectors(Ps,Ls);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-cs.z,cs.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,cs.z,0,-cs.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-cs.y,cs.x,0];return!Xc(e,Ps,Is,Ls,Mo)||(e=[1,0,0,0,1,0,0,0,1],!Xc(e,Ps,Is,Ls,Mo))?!1:(So.crossVectors(Xi,qi),e=[So.x,So.y,So.z],Xc(e,Ps,Is,Ls,Mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new I,new I,new I,new I,new I,new I,new I,new I],ci=new I,vo=new Mi,Ps=new I,Is=new I,Ls=new I,Xi=new I,qi=new I,cs=new I,fr=new I,Mo=new I,So=new I,ls=new I;function Xc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ls.fromArray(i,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),u=n.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var xn=new I,Eo=new Re,Qd=0,dn=class extends vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ru,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix3(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array),s=kn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array),s=kn(s,this.array),r=kn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ar=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rr=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xe=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},jd=new Mi,pr=new I,qc=new I,Si=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(qc)),this.expandByPoint(pr.copy(t.center).sub(qc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},tf=0,ni=new Ae,Yc=new _n,Ds=new I,Qn=new Mi,mr=new Mi,Tn=new I,on=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bd(t)?Rr:Ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,n){return ni.makeTranslation(t,e,n),this.applyMatrix4(ni),this}scale(t,e,n){return ni.makeScale(t,e,n),this.applyMatrix4(ni),this}lookAt(t){return Yc.lookAt(t),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tn.addVectors(Qn.min,mr.min),Qn.expandByPoint(Tn),Tn.addVectors(Qn.max,mr.max),Qn.expandByPoint(Tn)):(Qn.expandByPoint(mr.min),Qn.expandByPoint(mr.max))}Qn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Tn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tn.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),Tn.add(Ds)),s=Math.max(s,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new I,l[_]=new I;let c=new I,u=new I,f=new I,h=new Re,m=new Re,x=new Re,b=new I,p=new I;function d(_,R,L){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,L),h.fromBufferAttribute(r,_),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,L),u.sub(c),f.sub(c),m.sub(h),x.sub(h);let k=1/(m.x*x.y-x.x*m.y);isFinite(k)&&(b.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(k),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(k),a[_].add(b),a[R].add(b),a[L].add(b),l[_].add(p),l[R].add(p),l[L].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,R=y.length;_<R;++_){let L=y[_],k=L.start,B=L.count;for(let it=k,X=k+B;it<X;it+=3)d(t.getX(it+0),t.getX(it+1),t.getX(it+2))}let C=new I,M=new I,A=new I,T=new I;function P(_){A.fromBufferAttribute(s,_),T.copy(A);let R=a[_];C.copy(R),C.sub(A.multiplyScalar(A.dot(R))).normalize(),M.crossVectors(T,R);let k=M.dot(l[_])<0?-1:1;o.setXYZW(_,C.x,C.y,C.z,k)}for(let _=0,R=y.length;_<R;++_){let L=y[_],k=L.start,B=L.count;for(let it=k,X=k+B;it<X;it+=3)P(t.getX(it+0)),P(t.getX(it+1)),P(t.getX(it+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,f=new I;if(t)for(let h=0,m=t.count;h<m;h+=3){let x=t.getX(h+0),b=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),m=0,x=0;for(let b=0,p=l.length;b<p;b++){a.isInterleavedBufferAttribute?m=l[b]*a.data.stride+a.offset:m=l[b]*u;for(let d=0;d<u;d++)h[x++]=c[m++]}return new dn(h,u,f)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zc=new I,ef=new I,nf=new Pe,li=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Zc.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Zc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nf.getNormalMatrix(t),s=this.coplanarPoint(Zc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},sf=0,ui=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Ks,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new he().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ni=new I,Jc=new I,bo=new I,wo=new I,ps=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jc.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),wo.copy(this.origin).sub(Jc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=wo.dot(this.direction),l=-wo.dot(bo),c=wo.lengthSq(),u=Math.abs(1-o*o),f,h,m,x;if(u>0)if(f=o*l-a,h=o*a-l,x=r*u,f>=0)if(h>=-x)if(h<=x){let b=1/u;f*=b,h*=b,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Jc).addScaledVector(bo,h),m}intersectSphere(t,e){if(t.radius<0)return null;Ni.subVectors(t.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,m=t.z-o.z,x=e.x-o.x,b=e.y-o.y,p=e.z-o.z,d=n.x-o.x,y=n.y-o.y,C=n.z-o.z,M=Math.abs(l),A=Math.abs(c),T=Math.abs(u),P,_,R,L,k,B,it,X,J,Q,et,Tt;if(M>=A&&M>=T?(R=l,B=f,J=x,Tt=d,l>=0?(P=c,_=u,L=h,k=m,it=b,X=p,Q=y,et=C):(P=u,_=c,L=m,k=h,it=p,X=b,Q=C,et=y)):A>=T?(R=c,B=h,J=b,Tt=y,c>=0?(P=u,_=l,L=m,k=f,it=p,X=x,Q=C,et=d):(P=l,_=u,L=f,k=m,it=x,X=p,Q=d,et=C)):(R=u,B=m,J=p,Tt=C,u>=0?(P=l,_=c,L=f,k=h,it=x,X=b,Q=d,et=y):(P=c,_=l,L=h,k=f,it=b,X=x,Q=y,et=d)),R===0)return null;let ft=P/R,Et=_/R,At=1/R,se=L-ft*B,Bt=k-Et*B,_e=it-ft*J,xe=X-Et*J,$t=Q-ft*Tt,ct=et-Et*Tt,_t=$t*xe-ct*_e,yt=se*ct-Bt*$t,Y=_e*Bt-xe*se;if(s){if(_t<0||yt<0||Y<0)return null}else if((_t<0||yt<0||Y<0)&&(_t>0||yt>0||Y>0))return null;let V=_t+yt+Y;if(V===0)return null;let mt=At*(_t*B+yt*J+Y*Tt);return(V>0?mt<0:mt>0)?null:this.at(mt/V,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ih=new Ae,hs=new ps,To=new Si,Lh=new I,Ao=new I,Ro=new I,Co=new I,$c=new I,Po=new I,Dh=new I,Io=new I,Ie=class extends _n{constructor(t=new on,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&($c.fromBufferAttribute(f,t),o?Po.addScaledVector($c,u):Po.addScaledVector($c.sub(e),u))}e.add(Po)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(To.containsPoint(hs.origin)===!1&&(hs.intersectSphere(To,Lh)===null||hs.origin.distanceToSquared(Lh)>(t.far-t.near)**2))&&(Ih.copy(r).invert(),hs.copy(t.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=h.length;x<b;x++){let p=h[x],d=o[p.materialIndex],y=Math.max(p.start,m.start),C=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,A=C;M<A;M+=3){let T=a.getX(M),P=a.getX(M+1),_=a.getX(M+2);s=Lo(this,d,t,n,c,u,f,T,P,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let p=x,d=b;p<d;p+=3){let y=a.getX(p),C=a.getX(p+1),M=a.getX(p+2);s=Lo(this,o,t,n,c,u,f,y,C,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,b=h.length;x<b;x++){let p=h[x],d=o[p.materialIndex],y=Math.max(p.start,m.start),C=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,A=C;M<A;M+=3){let T=M,P=M+1,_=M+2;s=Lo(this,d,t,n,c,u,f,T,P,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let p=x,d=b;p<d;p+=3){let y=p,C=p+1,M=p+2;s=Lo(this,o,t,n,c,u,f,y,C,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function rf(i,t,e,n,s,r,o,a){let l;if(t.side===Pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===bi,a),l===null)return null;Io.copy(a),Io.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Io);return c<e.near||c>e.far?null:{distance:c,point:Io.clone(),object:i}}function Lo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ao),i.getVertexPosition(l,Ro),i.getVertexPosition(c,Co);let u=rf(i,t,e,n,Ao,Ro,Co,Dh);if(u){let f=new I;Zi.getBarycoord(Dh,Ao,Ro,Co,f),s&&(u.uv=Zi.getInterpolatedAttribute(s,a,l,c,f,new Re)),r&&(u.uv1=Zi.getInterpolatedAttribute(r,a,l,c,f,new Re)),o&&(u.normal=Zi.getInterpolatedAttribute(o,a,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new I,materialIndex:0};Zi.getNormal(Ao,Ro,Co,h.normal),u.face=h,u.barycoord=f}return u}var Cr=class extends Wn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Rn,u=Rn,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class extends dn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ns=new Ae,Nh=new Ae,Do=[],Uh=new Mi,of=new Ae,gr=new Ie,xr=new Si,di=class extends Ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,of)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),Uh.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Uh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),xr.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),Nh.multiplyMatrices(n,Ns),gr.matrixWorld=Nh,gr.raycast(t,Do);for(let o=0,a=Do.length;o<a;o++){let l=Do[o];l.instanceId=r,l.object=this,e.push(l)}Do.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cr(new Float32Array(s*this.count),s,this.count,Da,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new Si,af=new Re(.5,.5),No=new I,Zs=class{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],m=r[7],x=r[8],b=r[9],p=r[10],d=r[11],y=r[12],C=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-o,m-u,d-x,A-y).normalize(),s[1].setComponents(c+o,m+u,d+x,A+y).normalize(),s[2].setComponents(c+a,m+f,d+b,A+C).normalize(),s[3].setComponents(c-a,m-f,d-b,A-C).normalize(),n)s[4].setComponents(l,h,p,M).normalize(),s[5].setComponents(c-l,m-h,d-p,A-M).normalize();else if(s[4].setComponents(c-l,m-h,d-p,A-M).normalize(),e===hi)s[5].setComponents(c+l,m+h,d+p,A+M).normalize();else if(e===ks)s[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);let e=af.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(No.x=s.normal.x>0?t.max.x:t.min.x,No.y=s.normal.y>0?t.max.y:t.min.y,No.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ea=class extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},na=new I,ia=new I,Fh=new Ae,_r=new ps,Uo=new Si,Kc=new I,Oh=new I,sa=class extends _n{constructor(t=new on,e=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)na.fromBufferAttribute(e,s-1),ia.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=na.distanceTo(ia);t.setAttribute("lineDistance",new Xe(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,t.ray.intersectsSphere(Uo)===!1)return;Fh.copy(s).invert(),_r.copy(t.ray).applyMatrix4(Fh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let b=m,p=x-1;b<p;b+=c){let d=u.getX(b),y=u.getX(b+1),C=Fo(this,t,_r,l,d,y,b);C&&e.push(C)}if(this.isLineLoop){let b=u.getX(x-1),p=u.getX(m),d=Fo(this,t,_r,l,b,p,x-1);d&&e.push(d)}}else{let m=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let b=m,p=x-1;b<p;b+=c){let d=Fo(this,t,_r,l,b,b+1,b);d&&e.push(d)}if(this.isLineLoop){let b=Fo(this,t,_r,l,x-1,m,x-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(na.fromBufferAttribute(a,s),ia.fromBufferAttribute(a,r),e.distanceSqToSegment(na,ia,Kc,Oh)>n)return;Kc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Kc);if(!(c<t.near||c>t.far))return{distance:c,point:Oh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Bh=new I,zh=new I,Pr=class extends sa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Bh.fromBufferAttribute(e,s),zh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bh.distanceTo(zh);t.setAttribute("lineDistance",new Xe(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ra=class extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hh=new Ae,sl=new ps,Oo=new Si,Bo=new I,ms=class extends _n{constructor(t=new on,e=new ra){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,t.ray.intersectsSphere(Oo)===!1)return;Hh.copy(s).invert(),sl.copy(t.ray).applyMatrix4(Hh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=h,b=m;x<b;x++){let p=c.getX(x);Bo.fromBufferAttribute(f,p),Gh(Bo,p,l,s,t,e,this)}}else{let h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=h,b=m;x<b;x++)Bo.fromBufferAttribute(f,x),Gh(Bo,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gh(i,t,e,n,s,r,o){let a=sl.distanceSqToPoint(i);if(a<e){let l=new I;sl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ir=class extends Wn{constructor(t=[],e=ns,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$i=class extends Wn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ki=class extends Wn{constructor(t,e,n=pi,s,r,o,a=Rn,l=Rn,c,u=yi,f=1){if(u!==yi&&u!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oa=class extends Ki{constructor(t,e=pi,n=ns,s,r,o=Rn,a=Rn,l,c=yi){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lr=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dt=class i extends on{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,m=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(f,2));function x(b,p,d,y,C,M,A,T,P,_,R){let L=M/P,k=A/_,B=M/2,it=A/2,X=T/2,J=P+1,Q=_+1,et=0,Tt=0,ft=new I;for(let Et=0;Et<Q;Et++){let At=Et*k-it;for(let se=0;se<J;se++){let Bt=se*L-B;ft[b]=Bt*y,ft[p]=At*C,ft[d]=X,c.push(ft.x,ft.y,ft.z),ft[b]=0,ft[p]=0,ft[d]=T>0?1:-1,u.push(ft.x,ft.y,ft.z),f.push(se/P),f.push(1-Et/_),et+=1}}for(let Et=0;Et<_;Et++)for(let At=0;At<P;At++){let se=h+At+J*Et,Bt=h+At+J*(Et+1),_e=h+(At+1)+J*(Et+1),xe=h+(At+1)+J*Et;l.push(se,Bt,xe),l.push(Bt,_e,xe),Tt+=6}a.addGroup(m,Tt,R),m+=Tt,h+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var gs=class i extends on{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,u=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let m=n+f/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},re=class i extends on{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],m=[],x=0,b=[],p=n/2,d=0;y(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new Xe(f,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(m,2));function y(){let M=new I,A=new I,T=0,P=(e-t)/n;for(let _=0;_<=r;_++){let R=[],L=_/r,k=L*(e-t)+t;for(let B=0;B<=s;B++){let it=B/s,X=it*l+a,J=Math.sin(X),Q=Math.cos(X);A.x=k*J,A.y=-L*n+p,A.z=k*Q,f.push(A.x,A.y,A.z),M.set(J,P,Q).normalize(),h.push(M.x,M.y,M.z),m.push(it,1-L),R.push(x++)}b.push(R)}for(let _=0;_<s;_++)for(let R=0;R<r;R++){let L=b[R][_],k=b[R+1][_],B=b[R+1][_+1],it=b[R][_+1];(t>0||R!==0)&&(u.push(L,k,it),T+=3),(e>0||R!==r-1)&&(u.push(k,B,it),T+=3)}c.addGroup(d,T,0),d+=T}function C(M){let A=x,T=new Re,P=new I,_=0,R=M===!0?t:e,L=M===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,p*L,0),h.push(0,L,0),m.push(.5,.5),x++;let k=x;for(let B=0;B<=s;B++){let X=B/s*l+a,J=Math.cos(X),Q=Math.sin(X);P.x=R*Q,P.y=p*L,P.z=R*J,f.push(P.x,P.y,P.z),h.push(0,L,0),T.x=J*.5+.5,T.y=Q*.5*L+.5,m.push(T.x,T.y),x++}for(let B=0;B<s;B++){let it=A+B,X=k+B;M===!0?u.push(X,X+1,it):u.push(X+1,X,it),_+=3}c.addGroup(d,_,M===!0?1:2),d+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fn=class i extends re{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},aa=class i extends on{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let C=new I,M=new I,A=new I;for(let T=0;T<e.length;T+=3)m(e[T+0],C),m(e[T+1],M),m(e[T+2],A),l(C,M,A,y)}function l(y,C,M,A){let T=A+1,P=[];for(let _=0;_<=T;_++){P[_]=[];let R=y.clone().lerp(M,_/T),L=C.clone().lerp(M,_/T),k=T-_;for(let B=0;B<=k;B++)B===0&&_===T?P[_][B]=R:P[_][B]=R.clone().lerp(L,B/k)}for(let _=0;_<T;_++)for(let R=0;R<2*(T-_)-1;R++){let L=Math.floor(R/2);R%2===0?(h(P[_][L+1]),h(P[_+1][L]),h(P[_][L])):(h(P[_][L+1]),h(P[_+1][L+1]),h(P[_+1][L]))}}function c(y){let C=new I;for(let M=0;M<r.length;M+=3)C.x=r[M+0],C.y=r[M+1],C.z=r[M+2],C.normalize().multiplyScalar(y),r[M+0]=C.x,r[M+1]=C.y,r[M+2]=C.z}function u(){let y=new I;for(let C=0;C<r.length;C+=3){y.x=r[C+0],y.y=r[C+1],y.z=r[C+2];let M=p(y)/2/Math.PI+.5,A=d(y)/Math.PI+.5;o.push(M,1-A)}x(),f()}function f(){for(let y=0;y<o.length;y+=6){let C=o[y+0],M=o[y+2],A=o[y+4],T=Math.max(C,M,A),P=Math.min(C,M,A);T>.9&&P<.1&&(C<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function m(y,C){let M=y*3;C.x=t[M+0],C.y=t[M+1],C.z=t[M+2]}function x(){let y=new I,C=new I,M=new I,A=new I,T=new Re,P=new Re,_=new Re;for(let R=0,L=0;R<r.length;R+=9,L+=6){y.set(r[R+0],r[R+1],r[R+2]),C.set(r[R+3],r[R+4],r[R+5]),M.set(r[R+6],r[R+7],r[R+8]),T.set(o[L+0],o[L+1]),P.set(o[L+2],o[L+3]),_.set(o[L+4],o[L+5]),A.copy(y).add(C).add(M).divideScalar(3);let k=p(A);b(T,L+0,y,k),b(P,L+2,C,k),b(_,L+4,M,k)}}function b(y,C,M,A){A<0&&y.x===1&&(o[C]=y.x-1),M.x===0&&M.z===0&&(o[C]=A/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Dr=class i extends aa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var un=class i extends on{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,m=[],x=[],b=[],p=[];for(let d=0;d<u;d++){let y=d*h-o;for(let C=0;C<c;C++){let M=C*f-r;x.push(M,-y,0),b.push(0,0,1),p.push(C/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){let C=y+c*d,M=y+c*(d+1),A=y+1+c*(d+1),T=y+1+c*d;m.push(C,M,T),m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var pn=class i extends on{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new I,h=new I,m=[],x=[],b=[],p=[];for(let d=0;d<=n;d++){let y=[],C=d/n,M=o+C*a,A=t*Math.cos(M),T=Math.sqrt(t*t-A*A),P=0;d===0&&o===0?P=.5/e:d===n&&l===Math.PI&&(P=-.5/e);for(let _=0;_<=e;_++){let R=_/e,L=s+R*r;f.x=-T*Math.cos(L),f.y=A,f.z=T*Math.sin(L),x.push(f.x,f.y,f.z),h.copy(f).normalize(),b.push(h.x,h.y,h.z),p.push(R+P,1-C),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){let C=u[d][y+1],M=u[d][y],A=u[d+1][y],T=u[d+1][y+1];(d!==0||o>0)&&m.push(C,M,T),(d!==n-1||l<Math.PI)&&m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Nr=class i extends on{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new I,m=new I,x=new I;for(let b=0;b<=n;b++){let p=o+b/n*a;for(let d=0;d<=s;d++){let y=d/s*r;m.x=(t+e*Math.cos(p))*Math.cos(y),m.y=(t+e*Math.cos(p))*Math.sin(y),m.z=e*Math.sin(p),c.push(m.x,m.y,m.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),x.subVectors(m,h).normalize(),u.push(x.x,x.y,x.z),f.push(d/s),f.push(b/n)}}for(let b=1;b<=n;b++)for(let p=1;p<=s;p++){let d=(s+1)*b+p-1,y=(s+1)*(b-1)+p-1,C=(s+1)*(b-1)+p,M=(s+1)*b+p;l.push(d,y,M),l.push(y,C,M)}this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(kh(s))s.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(kh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function zn(i){let t={};for(let e=0;e<i.length;e++){let n=vs(i[e]);for(let s in n)t[s]=n[s]}return t}function kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}var mc={clone:vs,merge:zn},lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new he().setHex(s.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new nn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ca=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ur=class extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ei=class extends ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},la=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ha=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Us(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Qc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends Qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:el,endingEnd:el}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nl:r=t,a=2*e-n;break;case il:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nl:o=t,l=2*n-e;break;case il:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),b=x*x,p=b*x,d=-h*p+2*h*b-h*x,y=(1+h)*p+(-1.5-2*h)*b+(-.5+h)*x+1,C=(-1-m)*p+(1.5+m)*b+.5*x,M=m*p-m*b;for(let A=0;A!==a;++A)r[A]=d*o[u+A]+y*o[c+A]+C*o[l+A]+M*o[f+A];return r}},da=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},fa=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pa=class extends Qi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let x=(n-e)/(s-e),b=1-x;for(let p=0;p!==a;++p)r[p]=o[c+p]*b+o[l+p]*x;return r}let h=a*2,m=t-1;for(let x=0;x!==a;++x){let b=o[c+x],p=o[l+x],d=m*h+x*2,y=f[d],C=f[d+1],M=t*h+x*2,A=u[M],T=u[M+1],P=df(n,e,y,A,s);r[x]=Nu(P,b,C,T,p)}return r}};function Nu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function uf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function df(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Nu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=uf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Us(e,this.TimeBufferType),this.values=Us(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Us(t.times,Array),values:Us(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Qc(t.settings)&&(n.settings={inTangents:Us(t.settings.inTangents,Array),outTangents:Us(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case Ko:e=this.InterpolantFactoryMethodLinear;break;case Go:e=this.InterpolantFactoryMethodSmooth;break;case tl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return Go;case this.InterpolantFactoryMethodBezier:return tl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Qc(this.settings)&&(Vh(this.settings.inTangents,t),Vh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(be("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(be("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){be("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){be("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&wd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){be("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Go,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,h=f-n,m=f+n;for(let x=0;x!==n;++x){let b=e[f+x];if(b!==e[h+x]||b!==e[m+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let m=0;m!==n;++m)e[h+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Qc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Ko;var ji=class extends jn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Mr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="color";var ga=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="number";var xa=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Ge.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fr=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}};Fr.prototype.ValueTypeName="quaternion";Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends jn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Mr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="vector";var ya=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Uu=new ya,va=class{constructor(t){this.manager=t!==void 0?t:Uu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var xs=class extends _n{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Or=class extends xs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},jc=new Ae,Wh=new I,Xh=new I,Js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(jc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ks||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(jc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},zo=new I,Ho=new Ge,xi=new I,Br=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zo,Ho,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Ho,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(zo,Ho,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Ho,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new I,qh=new Re,Yh=new Re,An=class extends Br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,qh,Yh),e.subVectors(Yh,qh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rl=class extends Js{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=fs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},zr=class extends xs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},ol=class extends Js{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}},Fi=class extends xs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ol}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},es=class extends Br{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},al=class extends Js{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new al}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Gr=class extends on{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fs=-90,Os=1,Ma=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new An(Fs,Os,t,e);s.layers=this.layers,this.add(s);let r=new An(Fs,Os,t,e);r.layers=this.layers,this.add(r);let o=new An(Fs,Os,t,e);o.layers=this.layers,this.add(o);let a=new An(Fs,Os,t,e);a.layers=this.layers,this.add(a);let l=new An(Fs,Os,t,e);l.layers=this.layers,this.add(l);let c=new An(Fs,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Sa=class extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ul="\\[\\]\\.:\\/",ff=new RegExp("["+Ul+"]","g"),Fl="[^"+Ul+"]",pf="[^"+Ul.replace("\\.","")+"]",mf=/((?:WC+[\/:])*)/.source.replace("WC",Fl),gf=/(WCOD+)?/.source.replace("WCOD",pf),xf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),_f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),yf=new RegExp("^"+mf+gf+xf+_f+"$"),vf=["material","materials","bones","map"],cl=class{constructor(t,e,n){let s=n||rn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},rn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ff,"")}static parseTrackName(t){let e=yf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;be("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=cl;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fx=new Float32Array(1);var Zh=new Ae,kr=class{constructor(t,e,n=0,s=1/0){this.ray=new ps(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):be("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zh),this}intersectObject(t,e=!0,n=[]){return ll(t,this,n,e),n.sort(Jh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ll(t[s],this,n,e);return n.sort(Jh),n}};function Jh(i,t){return i.distance-t.distance}function ll(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ll(r[o],t,e,!0)}}var Vr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Me("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var kl=class kl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};kl.prototype.isMatrix2=!0;var hl=kl;function Ol(i,t,e,n){let s=Mf(n);switch(e){case Al:return i*t;case Da:return i*t/s.components*s.byteLength;case Na:return i*t/s.components*s.byteLength;case rs:return i*t*2/s.components*s.byteLength;case Ua:return i*t*2/s.components*s.byteLength;case Rl:return i*t*3/s.components*s.byteLength;case si:return i*t*4/s.components*s.byteLength;case Fa:return i*t*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $r:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case ka:case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:case Qr:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ac:case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jr:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mf(i){switch(i){case Yn:case El:return{byteLength:1,components:1};case Qs:case bl:case ti:return{byteLength:2,components:1};case Ia:case La:return{byteLength:2,components:4};case pi:case Pa:case ii:return{byteLength:4,components:1};case wl:case Tl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window!="undefined"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);function id(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sf(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<f.length;m++){let x=f[h],b=f[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++h,f[h]=b)}f.length=h+1;for(let m=0,x=f.length;m<x;m++){let b=f[m];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bf=`#ifdef USE_ALPHAHASH
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
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cf=`#ifdef USE_AOMAP
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
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
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
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
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
#endif`,Of=`#ifdef USE_BUMPMAP
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qf=`#define PI 3.141592653589793
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
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ep=`#ifdef USE_ENVMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
}`,Sp=`
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
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
}`,P0=`#if DEPTH_PACKING == 3200
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
}`,I0=`#define DISTANCE
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
}`,L0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,G0=`#define MATCAP
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
}`,k0=`#define MATCAP
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
}`,V0=`#define NORMAL
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
}`,W0=`#define NORMAL
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
}`,X0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,Y0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,$0=`#define TOON
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
}`,K0=`uniform float size;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,tm=`uniform vec3 color;
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
}`,em=`uniform float rotation;
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
}`,nm=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Ef,alphahash_pars_fragment:bf,alphamap_fragment:wf,alphamap_pars_fragment:Tf,alphatest_fragment:Af,alphatest_pars_fragment:Rf,aomap_fragment:Cf,aomap_pars_fragment:Pf,batching_pars_vertex:If,batching_vertex:Lf,begin_vertex:Df,beginnormal_vertex:Nf,bsdfs:Uf,iridescence_fragment:Ff,bumpmap_pars_fragment:Of,clipping_planes_fragment:Bf,clipping_planes_pars_fragment:zf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:Gf,color_fragment:kf,color_pars_fragment:Vf,color_pars_vertex:Wf,color_vertex:Xf,common:qf,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Jf,displacementmap_vertex:$f,emissivemap_fragment:Kf,emissivemap_pars_fragment:Qf,colorspace_fragment:jf,colorspace_pars_fragment:tp,envmap_fragment:ep,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:sp,envmap_physical_pars_fragment:mp,envmap_vertex:rp,fog_vertex:op,fog_pars_vertex:ap,fog_fragment:cp,fog_pars_fragment:lp,gradientmap_pars_fragment:hp,lightmap_pars_fragment:up,lights_lambert_fragment:dp,lights_lambert_pars_fragment:fp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:xp,lights_phong_fragment:_p,lights_phong_pars_fragment:yp,lights_physical_fragment:vp,lights_physical_pars_fragment:Mp,lights_fragment_begin:Sp,lights_fragment_maps:Ep,lights_fragment_end:bp,lightprobes_pars_fragment:wp,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Ip,map_particle_fragment:Lp,map_particle_pars_fragment:Dp,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Up,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Bp,morphtarget_pars_vertex:zp,morphtarget_vertex:Hp,normal_fragment_begin:Gp,normal_fragment_maps:kp,normal_pars_fragment:Vp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:$p,opaque_fragment:Kp,packing:Qp,premultiplied_alpha_fragment:jp,project_vertex:t0,dithering_fragment:e0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:o0,shadowmap_vertex:a0,shadowmask_pars_fragment:c0,skinbase_vertex:l0,skinning_pars_vertex:h0,skinning_vertex:u0,skinnormal_vertex:d0,specularmap_fragment:f0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:x0,transmission_pars_fragment:_0,uv_pars_fragment:y0,uv_pars_vertex:v0,uv_vertex:M0,worldpos_vertex:S0,background_vert:E0,background_frag:b0,backgroundCube_vert:w0,backgroundCube_frag:T0,cube_vert:A0,cube_frag:R0,depth_vert:C0,depth_frag:P0,distance_vert:I0,distance_frag:L0,equirect_vert:D0,equirect_frag:N0,linedashed_vert:U0,linedashed_frag:F0,meshbasic_vert:O0,meshbasic_frag:B0,meshlambert_vert:z0,meshlambert_frag:H0,meshmatcap_vert:G0,meshmatcap_frag:k0,meshnormal_vert:V0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:q0,meshphysical_vert:Y0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:$0,points_vert:K0,points_frag:Q0,shadow_vert:j0,shadow_frag:tm,sprite_vert:em,sprite_frag:nm},jt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Ai={basic:{uniforms:zn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zn([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zn([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new he(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zn([jt.points,jt.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zn([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zn([jt.common,jt.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zn([jt.sprite,jt.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:zn([jt.common,jt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:zn([jt.lights,jt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Ai.physical={uniforms:zn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var gc={r:0,b:0,g:0},im=new Ae,sd=new Pe;sd.set(-1,0,0,0,1,0,0,0,1);function sm(i,t,e,n,s,r){let o=new he(0),a=s===!0?0:1,l,c,u=null,f=0,h=null;function m(y){let C=y.isScene===!0?y.background:null;if(C&&C.isTexture){let M=y.backgroundBlurriness>0;C=t.get(C,M)}return C}function x(y){let C=!1,M=m(y);M===null?p(o,a):M&&M.isColor&&(p(M,1),C=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,C){let M=m(C);M&&(M.isCubeTexture||M.mapping===qr)?(c===void 0&&(c=new Ie(new dt(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:vs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(im.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sd),c.material.toneMapped=ze.getTransfer(M.colorSpace)!==Ke,(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ie(new un(2,2),new an({name:"BackgroundMaterial",uniforms:vs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=ze.getTransfer(M.colorSpace)!==Ke,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,C){y.getRGB(gc,Nl(i)),e.buffers.color.setClear(gc.r,gc.g,gc.b,C,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,C=1){o.set(y),a=C,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:x,addToRenderList:b,dispose:d}}function rm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(k,B,it,X,J){let Q=!1,et=f(k,X,it,B);r!==et&&(r=et,c(r.object)),Q=m(k,X,it,J),Q&&x(k,X,it,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(k,B,it,X),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(k){return i.bindVertexArray(k)}function u(k){return i.deleteVertexArray(k)}function f(k,B,it,X){let J=X.wireframe===!0,Q=n[B.id];Q===void 0&&(Q={},n[B.id]=Q);let et=k.isInstancedMesh===!0?k.id:0,Tt=Q[et];Tt===void 0&&(Tt={},Q[et]=Tt);let ft=Tt[it.id];ft===void 0&&(ft={},Tt[it.id]=ft);let Et=ft[J];return Et===void 0&&(Et=h(l()),ft[J]=Et),Et}function h(k){let B=[],it=[],X=[];for(let J=0;J<e;J++)B[J]=0,it[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:it,attributeDivisors:X,object:k,attributes:{},index:null}}function m(k,B,it,X){let J=r.attributes,Q=B.attributes,et=0,Tt=it.getAttributes();for(let ft in Tt)if(Tt[ft].location>=0){let At=J[ft],se=Q[ft];if(se===void 0&&(ft==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),ft==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),At===void 0||At.attribute!==se||se&&At.data!==se.data)return!0;et++}return r.attributesNum!==et||r.index!==X}function x(k,B,it,X){let J={},Q=B.attributes,et=0,Tt=it.getAttributes();for(let ft in Tt)if(Tt[ft].location>=0){let At=Q[ft];At===void 0&&(ft==="instanceMatrix"&&k.instanceMatrix&&(At=k.instanceMatrix),ft==="instanceColor"&&k.instanceColor&&(At=k.instanceColor));let se={};se.attribute=At,At&&At.data&&(se.data=At.data),J[ft]=se,et++}r.attributes=J,r.attributesNum=et,r.index=X}function b(){let k=r.newAttributes;for(let B=0,it=k.length;B<it;B++)k[B]=0}function p(k){d(k,0)}function d(k,B){let it=r.newAttributes,X=r.enabledAttributes,J=r.attributeDivisors;it[k]=1,X[k]===0&&(i.enableVertexAttribArray(k),X[k]=1),J[k]!==B&&(i.vertexAttribDivisor(k,B),J[k]=B)}function y(){let k=r.newAttributes,B=r.enabledAttributes;for(let it=0,X=B.length;it<X;it++)B[it]!==k[it]&&(i.disableVertexAttribArray(it),B[it]=0)}function C(k,B,it,X,J,Q,et){et===!0?i.vertexAttribIPointer(k,B,it,J,Q):i.vertexAttribPointer(k,B,it,X,J,Q)}function M(k,B,it,X){b();let J=X.attributes,Q=it.getAttributes(),et=B.defaultAttributeValues;for(let Tt in Q){let ft=Q[Tt];if(ft.location>=0){let Et=J[Tt];if(Et===void 0&&(Tt==="instanceMatrix"&&k.instanceMatrix&&(Et=k.instanceMatrix),Tt==="instanceColor"&&k.instanceColor&&(Et=k.instanceColor)),Et!==void 0){let At=Et.normalized,se=Et.itemSize,Bt=t.get(Et);if(Bt===void 0)continue;let _e=Bt.buffer,xe=Bt.type,$t=Bt.bytesPerElement,ct=xe===i.INT||xe===i.UNSIGNED_INT||Et.gpuType===Pa;if(Et.isInterleavedBufferAttribute){let _t=Et.data,yt=_t.stride,Y=Et.offset;if(_t.isInstancedInterleavedBuffer){for(let V=0;V<ft.locationSize;V++)d(ft.location+V,_t.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let V=0;V<ft.locationSize;V++)p(ft.location+V);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let V=0;V<ft.locationSize;V++)C(ft.location+V,se/ft.locationSize,xe,At,yt*$t,(Y+se/ft.locationSize*V)*$t,ct)}else{if(Et.isInstancedBufferAttribute){for(let _t=0;_t<ft.locationSize;_t++)d(ft.location+_t,Et.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let _t=0;_t<ft.locationSize;_t++)p(ft.location+_t);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let _t=0;_t<ft.locationSize;_t++)C(ft.location+_t,se/ft.locationSize,xe,At,se*$t,se/ft.locationSize*_t*$t,ct)}}else if(et!==void 0){let At=et[Tt];if(At!==void 0)switch(At.length){case 2:i.vertexAttrib2fv(ft.location,At);break;case 3:i.vertexAttrib3fv(ft.location,At);break;case 4:i.vertexAttrib4fv(ft.location,At);break;default:i.vertexAttrib1fv(ft.location,At)}}}}y()}function A(){R();for(let k in n){let B=n[k];for(let it in B){let X=B[it];for(let J in X){let Q=X[J];for(let et in Q)u(Q[et].object),delete Q[et];delete X[J]}}delete n[k]}}function T(k){if(n[k.id]===void 0)return;let B=n[k.id];for(let it in B){let X=B[it];for(let J in X){let Q=X[J];for(let et in Q)u(Q[et].object),delete Q[et];delete X[J]}}delete n[k.id]}function P(k){for(let B in n){let it=n[B];for(let X in it){let J=it[X];if(J[k.id]===void 0)continue;let Q=J[k.id];for(let et in Q)u(Q[et].object),delete Q[et];delete J[k.id]}}}function _(k){for(let B in n){let it=n[B],X=k.isInstancedMesh===!0?k.id:0,J=it[X];if(J!==void 0){for(let Q in J){let et=J[Q];for(let Tt in et)u(et[Tt].object),delete et[Tt];delete J[Q]}delete it[X],Object.keys(it).length===0&&delete n[B]}}}function R(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:p,disableUnusedAttributes:y}}function om(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function am(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==si&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let _=P===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Yn&&P!==ii&&!_&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Me("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:M,maxSamples:A,samples:T}}function cm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new li,a=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let m=f.length!==0||h||n!==0||s;return s=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){let x=f.clippingPlanes,b=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?u(null):c();else{let y=r?0:n,C=y*4,M=d.clippingState||null;l.value=M,M=u(x,h,C,m);for(let A=0;A!==C;++A)M[A]=e[A];d.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,m,x){let b=f!==null?f.length:0,p=null;if(b!==0){if(p=l.value,x!==!0||p===null){let d=m+b*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let C=0,M=m;C!==b;++C,M+=4)o.copy(f[C]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,p}}var nr=4,lm=6,hm=20,um=256,eo=new es,Fu=new he,Vl=null,Wl=0,Xl=0,ql=!1,dm=new I,Ms=new I,_c=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=dm}=r;Vl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vl,Wl,Xl),this._renderer.xr.enabled=ql,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ti,format:si,colorSpace:Sr,depthBuffer:!1},s=Ou(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fm(r)),this._blurMaterial=mm(r,t,e),this._ggxMaterial=pm(r,t,e)}return s}_compileMaterial(t){let e=new Ie(new on,t);this._renderer.compile(e,eo)}_sceneToCubeUV(t,e,n,s,r){let l=new An(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(Fu),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new dt,new Bn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,p=b.material,d=!1,y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,d=!0):(p.color.copy(Fu),d=!0);for(let C=0;C<6;C++){let M=C%3;M===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[C],r.y,r.z)):M===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[C]));let A=this._cubeSize;er(s,M*A,C>2?A:0,A,A),f.setRenderTarget(s),d&&f.render(b,l),f.render(t,l)}f.toneMapping=m,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ns||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,eo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,m=f*h,{_lodMax:x}=this,b=this._sizeLods[n],p=3*b*(n>x-nr?n-x+nr:0),d=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=x-e,er(r,p,d,3*b,2*b),s.setRenderTarget(r),s.render(a,eo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,er(t,p,d,3*b,2*b),s.setRenderTarget(t),s.render(a,eo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-nr?s-this._lodMax+nr:0),h=4*(this._cubeSize-u);er(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(l,eo)}};function fm(i){let t=[],e=[],n=i,s=i-nr+1+lm;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,m=3,x=new Float32Array(m*h*f),b=new Float32Array(m*h*f);for(let d=0;d<f;d++){let y=d%3*2/3-1,C=d>2?0:-1,M=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];x.set(M,m*h*d);for(let A=0;A<h;A++){let T=u[A*2]*2-1,P=u[A*2+1]*2-1;d===0?Ms.set(1,P,T):d===1?Ms.set(-T,1,-P):d===2?Ms.set(-T,P,1):d===3?Ms.set(-1,P,-T):d===4?Ms.set(-T,-1,P):Ms.set(T,P,-1),Ms.toArray(b,(d*h+A)*m)}}let p=new on;p.setAttribute("position",new dn(x,m)),p.setAttribute("outputDirection",new dn(b,m)),e.push(new Ie(p,null)),n>nr&&n--}return{lodMeshes:e,sizeLods:t}}function Ou(i,t,e){let n=new On(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pm(i,t,e){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:um,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function mm(i,t,e){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:hm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Bu(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function zu(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Mc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yc=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dt(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:wi});r.uniforms.tEquirect.value=e;let o=new Ie(s,r),a=e.minFilter;return e.minFilter===is&&(e.minFilter=Ln),new Ma(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function gm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===Aa||m===Ra)if(t.has(h)){let x=t.get(h).texture;return a(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let b=new yc(x.height);return b.fromEquirectangularTexture(i,h),t.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let m=h.mapping,x=m===Aa||m===Ra,b=m===ns||m===ys;if(x||b){let p=e.get(h),d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new _c(i)),p=x?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let y=h.image;return x&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new _c(i)),p=x?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,m){return m===Aa?h.mapping=ns:m===Ra&&(h.mapping=ys),h}function l(h){let m=0,x=6;for(let b=0;b<x;b++)h[b]!==void 0&&m++;return m===x}function c(h){let m=h.target;m.removeEventListener("dispose",c);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function xm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ds("WebGLRenderer: "+n+" extension not supported."),s}}}function _m(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete s[h.id];let m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let m in h)t.update(h[m],i.ARRAY_BUFFER)}function c(f){let h=[],m=f.index,x=f.attributes.position,b=0;if(x===void 0)return;if(m!==null){let y=m.array;b=m.version;for(let C=0,M=y.length;C<M;C+=3){let A=y[C+0],T=y[C+1],P=y[C+2];h.push(A,T,T,P,P,A)}}else{let y=x.array;b=x.version;for(let C=0,M=y.length/3-1;C<M;C+=3){let A=C+0,T=C+1,P=C+2;h.push(A,T,T,P,P,A)}}let p=new(x.count>=65535?Rr:Ar)(h,1);p.version=b;let d=r.get(f);d&&t.remove(d),r.set(f,p)}function u(f){let h=r.get(f);if(h){let m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ym(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function c(f,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,f*o,m),e.update(h,n,m))}function u(f,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,m);let b=0;for(let p=0;p<m;p++)b+=h[p];e.update(b,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function vm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:be("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mm(i,t,e){let n=new WeakMap,s=new nn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let R=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],C=0;m===!0&&(C=1),x===!0&&(C=2),b===!0&&(C=3);let M=a.attributes.position.count*C,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*A*4*f),P=new wr(T,M,A,f);P.type=ii,P.needsUpdate=!0;let _=C*4;for(let L=0;L<f;L++){let k=p[L],B=d[L],it=y[L],X=M*A*4*L;for(let J=0;J<k.count;J++){let Q=J*_;m===!0&&(s.fromBufferAttribute(k,J),T[X+Q+0]=s.x,T[X+Q+1]=s.y,T[X+Q+2]=s.z,T[X+Q+3]=0),x===!0&&(s.fromBufferAttribute(B,J),T[X+Q+4]=s.x,T[X+Q+5]=s.y,T[X+Q+6]=s.z,T[X+Q+7]=0),b===!0&&(s.fromBufferAttribute(it,J),T[X+Q+8]=s.x,T[X+Q+9]=s.y,T[X+Q+10]=s.z,T[X+Q+11]=it.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new Re(M,A)},n.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Sm(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Em={[gl]:"LINEAR_TONE_MAPPING",[xl]:"REINHARD_TONE_MAPPING",[_l]:"CINEON_TONE_MAPPING",[Xr]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[Ml]:"NEUTRAL_TONE_MAPPING",[yl]:"CUSTOM_TONE_MAPPING"};function bm(i,t,e,n,s,r){let o=new On(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new on;c.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let u=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ie(c,u),h=new es(-1,1,1,-1,0,1),m=null,x=null,b=!1,p,d=null,y=[],C=!1;this.setSize=function(M,A){o.setSize(M,A),a!==null&&a.setSize(M,A),l!==null&&l.setSize(M,A);for(let T=0;T<y.length;T++){let P=y[T];P.setSize&&P.setSize(M,A)}},this.setEffects=function(M){y=M,C=y.length>0&&y[0].isRenderPass===!0;let A=o.width,T=o.height;y.length>0&&a===null&&(a=new On(A,T,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new On(A,T,{type:ti,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<y.length;P++){let _=y[P];_.setSize&&_.setSize(A,T)}},this.begin=function(M,A){if(b||M.toneMapping===fi&&y.length===0)return!1;if(d=A,A!==null){let T=A.width,P=A.height;(o.width!==T||o.height!==P)&&this.setSize(T,P)}return C===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=fi,!0},this.hasRenderPass=function(){return C},this.end=function(M,A){M.toneMapping=p,b=!0;let T=o,P=a;for(let _=0;_<y.length;_++){let R=y[_];R.enabled!==!1&&(R.render(M,P,T,A),R.needsSwap!==!1&&(T=P,P=P===a?l:a))}if(m!==M.outputColorSpace||x!==M.toneMapping){m=M.outputColorSpace,x=M.toneMapping,u.defines={},ze.getTransfer(m)===Ke&&(u.defines.SRGB_TRANSFER="");let _=Em[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(d),M.render(f,h),d=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var rd=new Wn,Jl=new Ki(1,1),od=new wr,ad=new ta,cd=new Ir,Hu=[],Gu=[],ku=new Float32Array(16),Vu=new Float32Array(9),Wu=new Float32Array(4);function sr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Sn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function En(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sc(i,t){let e=Gu[t];e===void 0&&(e=new Int32Array(t),Gu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;i.uniform2fv(this.addr,t),En(e,t)}}function Am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Sn(e,t))return;i.uniform3fv(this.addr,t),En(e,t)}}function Rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;i.uniform4fv(this.addr,t),En(e,t)}}function Cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),En(e,t)}else{if(Sn(e,n))return;Wu.set(n),i.uniformMatrix2fv(this.addr,!1,Wu),En(e,n)}}function Pm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),En(e,t)}else{if(Sn(e,n))return;Vu.set(n),i.uniformMatrix3fv(this.addr,!1,Vu),En(e,n)}}function Im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),En(e,t)}else{if(Sn(e,n))return;ku.set(n),i.uniformMatrix4fv(this.addr,!1,ku),En(e,n)}}function Lm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;i.uniform2iv(this.addr,t),En(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;i.uniform3iv(this.addr,t),En(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;i.uniform4iv(this.addr,t),En(e,t)}}function Fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;i.uniform2uiv(this.addr,t),En(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;i.uniform3uiv(this.addr,t),En(e,t)}}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;i.uniform4uiv(this.addr,t),En(e,t)}}function Hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jl.compareFunction=e.isReversedDepthBuffer()?pc:fc,r=Jl):r=rd,e.setTexture2D(t||r,s)}function Gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ad,s)}function km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cd,s)}function Vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||od,s)}function Wm(i){switch(i){case 5126:return wm;case 35664:return Tm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Im;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Nm;case 35669:case 35673:return Um;case 5125:return Fm;case 36294:return Om;case 36295:return Bm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Vm}}function Xm(i,t){i.uniform1fv(this.addr,t)}function qm(i,t){let e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ym(i,t){let e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function Zm(i,t){let e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function Jm(i,t){let e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $m(i,t){let e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Km(i,t){let e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qm(i,t){i.uniform1iv(this.addr,t)}function jm(i,t){i.uniform2iv(this.addr,t)}function tg(i,t){i.uniform3iv(this.addr,t)}function eg(i,t){i.uniform4iv(this.addr,t)}function ng(i,t){i.uniform1uiv(this.addr,t)}function ig(i,t){i.uniform2uiv(this.addr,t)}function sg(i,t){i.uniform3uiv(this.addr,t)}function rg(i,t){i.uniform4uiv(this.addr,t)}function og(i,t,e){let n=this.cache,s=t.length,r=Sc(e,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Jl:o=rd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function ag(i,t,e){let n=this.cache,s=t.length,r=Sc(e,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ad,r[o])}function cg(i,t,e){let n=this.cache,s=t.length,r=Sc(e,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cd,r[o])}function lg(i,t,e){let n=this.cache,s=t.length,r=Sc(e,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||od,r[o])}function hg(i){switch(i){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return Zm;case 35674:return Jm;case 35675:return $m;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return lg}}var $l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wm(e.type)}},Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hg(e.type)}},Ql=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Yl=/(\w+)(\])?(\[|\.)?/g;function Xu(i,t){i.seq.push(t),i.map[t.id]=t}function ug(i,t,e){let n=i.name,s=n.length;for(Yl.lastIndex=0;;){let r=Yl.exec(n),o=Yl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xu(e,c===void 0?new $l(a,i,t):new Kl(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Ql(a),Xu(e,f)),e=f}}}var ir=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ug(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function qu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var dg=37297,fg=0;function pg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Yu=new Pe;function mg(i){ze._getMatrix(Yu,ze.workingColorSpace,i);let t=`mat3( ${Yu.elements.map(e=>e.toFixed(4))} )`;switch(ze.getTransfer(i)){case Er:return[t,"LinearTransferOETF"];case Ke:return[t,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+pg(i.getShaderSource(t),a)}else return r}function gg(i,t){let e=mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var xg={[gl]:"Linear",[xl]:"Reinhard",[_l]:"Cineon",[Xr]:"ACESFilmic",[vl]:"AgX",[Ml]:"Neutral",[yl]:"Custom"};function _g(i,t){let e=xg[t];return e===void 0?(Me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xc=new I;function yg(){ze.getLuminanceCoefficients(xc);let i=xc.x.toFixed(4),t=xc.y.toFixed(4),e=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function Mg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function io(i){return i!==""}function Ju(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $u(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(Eg,wg)}var bg=new Map;function wg(i,t){let e=Ue[t];if(e===void 0){let n=bg.get(t);if(n!==void 0)e=Ue[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return jl(e)}var Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(i){return i.replace(Tg,Ag)}function Ag(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Rg={[Wr]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function Cg(i){return Rg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Pg={[ns]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE_UV"};function Ig(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Pg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Lg={[ys]:"ENVMAP_MODE_REFRACTION"};function Dg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ng={[Ta]:"ENVMAP_BLENDING_MULTIPLY",[gu]:"ENVMAP_BLENDING_MIX",[xu]:"ENVMAP_BLENDING_ADD"};function Ug(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ng[i.combine]||"ENVMAP_BLENDING_NONE"}function Fg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Og(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Cg(e),c=Ig(e),u=Dg(e),f=Ug(e),h=Fg(e),m=vg(e),x=Mg(r),b=s.createProgram(),p,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(io).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(io).join(`
`),d.length>0&&(d+=`
`)):(p=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),d=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Ue.tonemapping_pars_fragment:"",e.toneMapping!==fi?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(io).join(`
`)),o=jl(o),o=Ju(o,e),o=$u(o,e),a=jl(a),a=Ju(a,e),a=$u(a,e),o=Ku(o),a=Ku(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=y+p+o,M=y+d+a,A=qu(s,s.VERTEX_SHADER,C),T=qu(s,s.FRAGMENT_SHADER,M);s.attachShader(b,A),s.attachShader(b,T),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function P(k){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(b)||"",it=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(T)||"",J=B.trim(),Q=it.trim(),et=X.trim(),Tt=!0,ft=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,A,T);else{let Et=Zu(s,A,"vertex"),At=Zu(s,T,"fragment");be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+Et+`
`+At)}else J!==""?Me("WebGLProgram: Program Info Log:",J):(Q===""||et==="")&&(ft=!1);ft&&(k.diagnostics={runnable:Tt,programLog:J,vertexShader:{log:Q,prefix:p},fragmentShader:{log:et,prefix:d}})}s.deleteShader(A),s.deleteShader(T),_=new ir(s,b),R=Sg(s,b)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(b,dg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fg++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=T,this}var Bg=0,th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new eh(t),e.set(t,n)),n}},eh=class{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}};function zg(i){return i===rs||i===Qr||i===jr}function Hg(i,t,e,n,s,r){let o=new Xs,a=new th,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,R,L,k,B,it){let X=k.fog,J=B.geometry,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?k.environment:null,et=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Tt=t.get(_.envMap||Q,et),ft=Tt&&Tt.mapping===qr?Tt.image.height:null,Et=m[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Me("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let At=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,se=At!==void 0?At.length:0,Bt=0;J.morphAttributes.position!==void 0&&(Bt=1),J.morphAttributes.normal!==void 0&&(Bt=2),J.morphAttributes.color!==void 0&&(Bt=3);let _e,xe,$t,ct;if(Et){let Z=Ai[Et];_e=Z.vertexShader,xe=Z.fragmentShader}else{_e=_.vertexShader,xe=_.fragmentShader;let Z=a.getVertexShaderStage(_),pt=a.getFragmentShaderStage(_);a.update(_,Z,pt),$t=Z.id,ct=pt.id}let _t=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Y=B.isInstancedMesh===!0,V=B.isBatchedMesh===!0,mt=!!_.map,Mt=!!_.matcap,gt=!!Tt,rt=!!_.aoMap,It=!!_.lightMap,Rt=!!_.bumpMap&&_.wireframe===!1,Yt=!!_.normalMap,xt=!!_.displacementMap,Ct=!!_.emissiveMap,Dt=!!_.metalnessMap,le=!!_.roughnessMap,F=_.anisotropy>0,pe=_.clearcoat>0,Kt=_.dispersion>0,w=_.retroreflectivity>0,g=_.iridescence>0,H=_.sheen>0,$=_.transmission>0,tt=F&&!!_.anisotropyMap,Nt=pe&&!!_.clearcoatMap,Lt=pe&&!!_.clearcoatNormalMap,st=pe&&!!_.clearcoatRoughnessMap,lt=g&&!!_.iridescenceMap,Pt=g&&!!_.iridescenceThicknessMap,ee=H&&!!_.sheenColorMap,Gt=H&&!!_.sheenRoughnessMap,Vt=!!_.specularMap,ae=!!_.specularColorMap,ne=!!_.specularIntensityMap,Ee=$&&!!_.transmissionMap,G=$&&!!_.thicknessMap,kt=!!_.gradientMap,St=!!_.alphaMap,D=_.alphaTest>0,Ft=!!_.alphaHash,ut=!!_.extensions,N=fi;_.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(N=i.toneMapping);let U={shaderID:Et,shaderType:_.type,shaderName:_.name,vertexShader:_e,fragmentShader:xe,defines:_.defines,customVertexShaderID:$t,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:V,batchingColor:V&&B._colorsTexture!==null,instancing:Y,instancingColor:Y&&B.instanceColor!==null,instancingMorph:Y&&B.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:mt,matcap:Mt,envMap:gt,envMapMode:gt&&Tt.mapping,envMapCubeUVHeight:ft,aoMap:rt,lightMap:It,bumpMap:Rt,normalMap:Yt,displacementMap:xt,emissiveMap:Ct,normalMapObjectSpace:Yt&&_.normalMapType===vu,normalMapTangentSpace:Yt&&_.normalMapType===to,packedNormalMap:Yt&&_.normalMapType===to&&zg(_.normalMap.format),metalnessMap:Dt,roughnessMap:le,anisotropy:F,anisotropyMap:tt,clearcoat:pe,clearcoatMap:Nt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:st,dispersion:Kt,retroreflection:w,iridescence:g,iridescenceMap:lt,iridescenceThicknessMap:Pt,sheen:H,sheenColorMap:ee,sheenRoughnessMap:Gt,specularMap:Vt,specularColorMap:ae,specularIntensityMap:ne,transmission:$,transmissionMap:Ee,thicknessMap:G,gradientMap:kt,opaque:_.transparent===!1&&_.blending===Ks&&_.alphaToCoverage===!1,alphaMap:St,alphaTest:D,alphaHash:Ft,combine:_.combine,mapUv:mt&&x(_.map.channel),aoMapUv:rt&&x(_.aoMap.channel),lightMapUv:It&&x(_.lightMap.channel),bumpMapUv:Rt&&x(_.bumpMap.channel),normalMapUv:Yt&&x(_.normalMap.channel),displacementMapUv:xt&&x(_.displacementMap.channel),emissiveMapUv:Ct&&x(_.emissiveMap.channel),metalnessMapUv:Dt&&x(_.metalnessMap.channel),roughnessMapUv:le&&x(_.roughnessMap.channel),anisotropyMapUv:tt&&x(_.anisotropyMap.channel),clearcoatMapUv:Nt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&x(_.sheenRoughnessMap.channel),specularMapUv:Vt&&x(_.specularMap.channel),specularColorMapUv:ae&&x(_.specularColorMap.channel),specularIntensityMapUv:ne&&x(_.specularIntensityMap.channel),transmissionMapUv:Ee&&x(_.transmissionMap.channel),thicknessMapUv:G&&x(_.thicknessMap.channel),alphaMapUv:St&&x(_.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Yt||F),vertexNormals:!!J.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(mt||St),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||J.attributes.normal===void 0&&Yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:yt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Bt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:it.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:N,decodeVideoTexture:mt&&_.map.isVideoTexture===!0&&ze.getTransfer(_.map.colorSpace)===Ke,decodeVideoTextureEmissive:Ct&&_.emissiveMap.isVideoTexture===!0&&ze.getTransfer(_.emissiveMap.colorSpace)===Ke,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xn,flipSided:_.side===Pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ut&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&_.extensions.multiDraw===!0||V)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return U.vertexUv1s=l.has(1),U.vertexUv2s=l.has(2),U.vertexUv3s=l.has(3),l.clear(),U}function p(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)R.push(L),R.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(d(R,_),y(R,_),R.push(i.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function d(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function y(_,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function C(_){let R=m[_.type],L;if(R){let k=Ai[R];L=mc.clone(k.uniforms)}else L=_.uniforms;return L}function M(_,R){let L=u.get(R);return L!==void 0?++L.usedTimes:(L=new Og(i,R,_,s),c.push(L),u.set(R,L)),L}function A(_){if(--_.usedTimes===0){let R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function P(){a.dispose()}return{getParameters:b,getProgramCacheKey:p,getUniforms:C,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:P}}function Gg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function kg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ju(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function td(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,x,b,p,d){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:m,material:x,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:p,group:d},i[t]=y):(y.id=h.id,y.object=h,y.geometry=m,y.material=x,y.materialVariant=o(h),y.groupOrder=b,y.renderOrder=h.renderOrder,y.z=p,y.group=d),t++,y}function l(h,m,x,b,p,d,y){y.reversedDepth===!0&&(p=-p);let C=a(h,m,x,b,p,d);x.transmission>0?n.push(C):x.transparent===!0?s.push(C):e.push(C)}function c(h,m,x,b,p,d){let y=a(h,m,x,b,p,d);x.transmission>0?n.unshift(y):x.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,m){e.length>1&&e.sort(h||kg),n.length>1&&n.sort(m||ju),s.length>1&&s.sort(m||ju)}function f(){for(let h=t,m=i.length;h<m;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Vg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new td,i.set(n,[o])):s>=r.length?(o=new td,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new he};break;case"SpotLight":e={position:new I,direction:new I,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Xg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var qg=0;function Yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zg(i){let t=new Wg,e=Xg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ae,o=new Ae;function a(c){let u=0,f=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let m=0,x=0,b=0,p=0,d=0,y=0,C=0,M=0,A=0,T=0,P=0,_=0,R=0,L=0;c.sort(Yg);for(let B=0,it=c.length;B<it;B++){let X=c[B],J=X.color,Q=X.intensity,et=X.distance,Tt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===rs?Tt=X.shadow.map.texture:Tt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)u+=J.r*Q,f+=J.g*Q,h+=J.b*Q;else if(X.isLightProbe){for(let ft=0;ft<9;ft++)n.probe[ft].addScaledVector(X.sh.coefficients[ft],Q);L++}else if(X.isSunLight){let ft=t.get(X);if(ft.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let Et=X.shadow,At=e.get(X);At.shadowIntensity=Et.intensity,At.shadowBias=Et.bias,At.shadowNormalBias=Et.normalBias,At.shadowRadius=Et.radius,At.shadowMapSize.copy(Et.mapSize).multiply(Et.getFrameExtents()),n.sunShadow[x]=At,n.sunShadowMap[x]=Tt;let se=Et.getViewportCount();for(let Bt=0;Bt<se;Bt++)n.sunShadowMatrix[b+Bt]=Et.getMatrix(Bt),n.sunShadowCascade[b+Bt]=Et._cascadeData[Bt];b+=se,x++}n.sun[m]=ft,m++}else if(X.isDirectionalLight){let ft=t.get(X);if(ft.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let Et=X.shadow,At=e.get(X);At.shadowIntensity=Et.intensity,At.shadowBias=Et.bias,At.shadowNormalBias=Et.normalBias,At.shadowRadius=Et.radius,At.shadowMapSize=Et.mapSize,n.directionalShadow[p]=At,n.directionalShadowMap[p]=Tt,n.directionalShadowMatrix[p]=X.shadow.matrix,A++}n.directional[p]=ft,p++}else if(X.isSpotLight){let ft=t.get(X);ft.position.setFromMatrixPosition(X.matrixWorld),ft.color.copy(J).multiplyScalar(Q),ft.distance=et,ft.coneCos=Math.cos(X.angle),ft.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ft.decay=X.decay,n.spot[y]=ft;let Et=X.shadow;if(X.map&&(n.spotLightMap[_]=X.map,_++,Et.updateMatrices(X),X.castShadow&&R++),n.spotLightMatrix[y]=Et.matrix,X.castShadow){let At=e.get(X);At.shadowIntensity=Et.intensity,At.shadowBias=Et.bias,At.shadowNormalBias=Et.normalBias,At.shadowRadius=Et.radius,At.shadowMapSize=Et.mapSize,n.spotShadow[y]=At,n.spotShadowMap[y]=Tt,P++}y++}else if(X.isRectAreaLight){let ft=t.get(X);ft.color.copy(J).multiplyScalar(Q),ft.halfWidth.set(X.width*.5,0,0),ft.halfHeight.set(0,X.height*.5,0),n.rectArea[C]=ft,C++}else if(X.isPointLight){let ft=t.get(X);if(ft.color.copy(X.color).multiplyScalar(X.intensity),ft.distance=X.distance,ft.decay=X.decay,X.castShadow){let Et=X.shadow,At=e.get(X);At.shadowIntensity=Et.intensity,At.shadowBias=Et.bias,At.shadowNormalBias=Et.normalBias,At.shadowRadius=Et.radius,At.shadowMapSize=Et.mapSize,At.shadowCameraNear=Et.camera.near,At.shadowCameraFar=Et.camera.far,n.pointShadow[d]=At,n.pointShadowMap[d]=Tt,n.pointShadowMatrix[d]=X.shadow.matrix,T++}n.point[d]=ft,d++}else if(X.isHemisphereLight){let ft=t.get(X);ft.skyColor.copy(X.color).multiplyScalar(Q),ft.groundColor.copy(X.groundColor).multiplyScalar(Q),n.hemi[M]=ft,M++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=jt.LTC_FLOAT_1,n.rectAreaLTC2=jt.LTC_FLOAT_2):(n.rectAreaLTC1=jt.LTC_HALF_1,n.rectAreaLTC2=jt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let k=n.hash;(k.sunLength!==m||k.directionalLength!==p||k.pointLength!==d||k.spotLength!==y||k.rectAreaLength!==C||k.hemiLength!==M||k.numSunShadows!==x||k.numDirectionalShadows!==A||k.numPointShadows!==T||k.numSpotShadows!==P||k.numSpotMaps!==_||k.numLightProbes!==L)&&(n.sun.length=m,n.directional.length=p,n.spot.length=y,n.rectArea.length=C,n.point.length=d,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-R,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,k.sunLength=m,k.directionalLength=p,k.pointLength=d,k.spotLength=y,k.rectAreaLength=C,k.hemiLength=M,k.numSunShadows=x,k.numDirectionalShadows=A,k.numPointShadows=T,k.numSpotShadows=P,k.numSpotMaps=_,k.numLightProbes=L,n.version=qg++)}function l(c,u){let f=0,h=0,m=0,x=0,b=0,p=0,d=u.matrixWorldInverse;for(let y=0,C=c.length;y<C;y++){let M=c[y];if(M.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(d),f++}else if(M.isDirectionalLight){let A=n.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),h++}else if(M.isSpotLight){let A=n.spot[x];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),x++}else if(M.isRectAreaLight){let A=n.rectArea[b];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(d),o.identity(),r.copy(M.matrixWorld),r.premultiply(d),o.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),b++}else if(M.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(d),p++}}}return{setup:a,setupView:l,state:n}}function ed(i){let t=new Zg(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Jg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ed(i),t.set(s,[a])):r>=o.length?(a=new ed(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
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
}`,Qg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],jg=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],nd=new Ae,no=new I,Zl=new I;function tx(i,t,e){let n=new Zs,s=new Re,r=new Re,o=new nn,a=new la,l=new ha,c={},u=e.maxTextureSize,f={[bi]:Pn,[Pn]:bi,[Xn]:Xn},h=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:$g,fragmentShader:Kg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let x=new on;x.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ie(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wr;let d=this.type;this.render=function(T,P,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===wa&&(Me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wr);let R=i.getRenderTarget(),L=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),B=i.state;B.setBlending(wi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let it=d!==this.type;it&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(J=>J.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,J=T.length;X<J;X++){let Q=T[X],et=Q.shadow;if(et===void 0){Me("WebGLShadowMap:",Q,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);let Tt=et.getFrameExtents();s.multiply(Tt),r.copy(et.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Tt.x),s.x=r.x*Tt.x,et.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Tt.y),s.y=r.y*Tt.y,et.mapSize.y=r.y));let ft=i.state.buffers.depth.getReversed();if(et.camera._reversedDepth=ft,et.map===null||it===!0){if(et.map!==null&&(et.map.depthTexture!==null&&(et.map.depthTexture.dispose(),et.map.depthTexture=null),et.map.dispose()),this.type===$s){if(Q.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}et.map=new On(s.x,s.y,{format:rs,type:ti,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),et.map.texture.name=Q.name+".shadowMap",et.map.depthTexture=new Ki(s.x,s.y,ii),et.map.depthTexture.name=Q.name+".shadowMapDepth",et.map.depthTexture.format=yi,et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=Rn,et.map.depthTexture.magFilter=Rn}else Q.isPointLight?(et.map=new yc(s.x),et.map.depthTexture=new oa(s.x,pi)):(et.map=new On(s.x,s.y),et.map.depthTexture=new Ki(s.x,s.y,pi)),et.map.depthTexture.name=Q.name+".shadowMap",et.map.depthTexture.format=yi,this.type===Wr?(et.map.depthTexture.compareFunction=ft?pc:fc,et.map.depthTexture.minFilter=Ln,et.map.depthTexture.magFilter=Ln):(et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=Rn,et.map.depthTexture.magFilter=Rn);et.camera.updateProjectionMatrix()}et.map.isWebGLCubeRenderTarget!==!0&&(et.map.width!==s.x||et.map.height!==s.y)&&et.map.setSize(s.x,s.y);let Et=et.map.isWebGLCubeRenderTarget?6:et.getViewportCount();Q.isPointLight!==!0&&et.updateMatrices(Q,_);for(let At=0;At<Et;At++){let se=et.getCamera(At);if(Q.isPointLight){let Bt=et.camera,_e=et.matrix,xe=Q.distance||Bt.far;xe!==Bt.far&&(Bt.far=xe,Bt.updateProjectionMatrix()),no.setFromMatrixPosition(Q.matrixWorld),Bt.position.copy(no),Zl.copy(Bt.position),Zl.add(Qg[At]),Bt.up.copy(jg[At]),Bt.lookAt(Zl),Bt.updateMatrixWorld(),_e.makeTranslation(-no.x,-no.y,-no.z),nd.multiplyMatrices(Bt.projectionMatrix,Bt.matrixWorldInverse),et._frustum.setFromProjectionMatrix(nd,Bt.coordinateSystem,Bt.reversedDepth)}if(et.map.isWebGLCubeRenderTarget)i.setRenderTarget(et.map,At),i.clear();else{At===0&&(i.setRenderTarget(et.map),i.clear());let Bt=et.getViewport(At);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),B.viewport(o)}n=et.getFrustum(At),M(P,_,se,Q,this.type)}et.isPointLightShadow!==!0&&this.type===$s&&y(et,_),et.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(R,L,k)};function y(T,P){let _=t.update(b);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new On(s.x,s.y,{format:rs,type:ti}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,_,h,b,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,_,m,b,null)}function C(T,P,_,R){let L=null,k=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)L=k;else if(L=_.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=L.uuid,it=P.uuid,X=c[B];X===void 0&&(X={},c[B]=X);let J=X[it];J===void 0&&(J=L.clone(),X[it]=J,P.addEventListener("dispose",A)),L=J}if(L.visible=P.visible,L.wireframe=P.wireframe,R===$s?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:f[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let B=i.properties.get(L);B.light=_}return L}function M(T,P,_,R,L){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===$s)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let it=t.update(T),X=T.material;if(Array.isArray(X)){let J=it.groups;for(let Q=0,et=J.length;Q<et;Q++){let Tt=J[Q],ft=X[Tt.materialIndex];if(ft&&ft.visible){let Et=C(T,ft,R,L);T.onBeforeShadow(i,T,P,_,it,Et,Tt),i.renderBufferDirect(_,null,it,Et,T,Tt),T.onAfterShadow(i,T,P,_,it,Et,Tt)}}}else if(X.visible){let J=C(T,X,R,L);T.onBeforeShadow(i,T,P,_,it,J,null),i.renderBufferDirect(_,null,it,J,T,null),T.onAfterShadow(i,T,P,_,it,J,null)}}let B=T.children;for(let it=0,X=B.length;it<X;it++)M(B[it],P,_,R,L)}function A(T){T.target.removeEventListener("dispose",A);for(let _ in c){let R=c[_],L=T.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function ex(i,t){function e(){let G=!1,kt=new nn,St=null,D=new nn(0,0,0,0);return{setMask:function(Ft){St!==Ft&&!G&&(i.colorMask(Ft,Ft,Ft,Ft),St=Ft)},setLocked:function(Ft){G=Ft},setClear:function(Ft,ut,N,U,Z){Z===!0&&(Ft*=U,ut*=U,N*=U),kt.set(Ft,ut,N,U),D.equals(kt)===!1&&(i.clearColor(Ft,ut,N,U),D.copy(kt))},reset:function(){G=!1,St=null,D.set(-1,0,0,0)}}}function n(){let G=!1,kt=!1,St=null,D=null,Ft=null;return{setReversed:function(ut){if(kt!==ut){let N=t.get("EXT_clip_control");ut?N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT):N.clipControlEXT(N.LOWER_LEFT_EXT,N.NEGATIVE_ONE_TO_ONE_EXT),kt=ut;let U=Ft;Ft=null,this.setClear(U)}},getReversed:function(){return kt},setTest:function(ut){ut?_t(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(ut){St!==ut&&!G&&(i.depthMask(ut),St=ut)},setFunc:function(ut){if(kt&&(ut=Lu[ut]),D!==ut){switch(ut){case Vo:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case Yo:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case Jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}D=ut}},setLocked:function(ut){G=ut},setClear:function(ut){Ft!==ut&&(Ft=ut,kt&&(ut=1-ut),i.clearDepth(ut))},reset:function(){G=!1,St=null,D=null,Ft=null,kt=!1}}}function s(){let G=!1,kt=null,St=null,D=null,Ft=null,ut=null,N=null,U=null,Z=null;return{setTest:function(pt){G||(pt?_t(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(pt){kt!==pt&&!G&&(i.stencilMask(pt),kt=pt)},setFunc:function(pt,Wt,at){(St!==pt||D!==Wt||Ft!==at)&&(i.stencilFunc(pt,Wt,at),St=pt,D=Wt,Ft=at)},setOp:function(pt,Wt,at){(ut!==pt||N!==Wt||U!==at)&&(i.stencilOp(pt,Wt,at),ut=pt,N=Wt,U=at)},setLocked:function(pt){G=pt},setClear:function(pt){Z!==pt&&(i.clearStencil(pt),Z=pt)},reset:function(){G=!1,kt=null,St=null,D=null,Ft=null,ut=null,N=null,U=null,Z=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},m=new WeakMap,x=[],b=null,p=!1,d=null,y=null,C=null,M=null,A=null,T=null,P=null,_=new he(0,0,0),R=0,L=!1,k=null,B=null,it=null,X=null,J=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,Tt=0,ft=i.getParameter(i.VERSION);ft.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(ft)[1]),et=Tt>=1):ft.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),et=Tt>=2);let Et=null,At={},se=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),_e=new nn().fromArray(se),xe=new nn().fromArray(Bt);function $t(G,kt,St,D){let Ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(G,ut),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let N=0;N<St;N++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(kt,0,i.RGBA,1,1,D,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(kt+N,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return ut}let ct={};ct[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(i.DEPTH_TEST),o.setFunc(Hs),Rt(!1),Yt(ul),_t(i.CULL_FACE),rt(wi);function _t(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function yt(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Y(G,kt){return h[G]!==kt?(i.bindFramebuffer(G,kt),h[G]=kt,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=kt),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=kt),!0):!1}function V(G,kt){let St=x,D=!1;if(G){St=m.get(kt),St===void 0&&(St=[],m.set(kt,St));let Ft=G.textures;if(St.length!==Ft.length||St[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,N=Ft.length;ut<N;ut++)St[ut]=i.COLOR_ATTACHMENT0+ut;St.length=Ft.length,D=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,D=!0);D&&i.drawBuffers(St)}function mt(G){return b!==G?(i.useProgram(G),b=G,!0):!1}let Mt={[_s]:i.FUNC_ADD,[jh]:i.FUNC_SUBTRACT,[tu]:i.FUNC_REVERSE_SUBTRACT};Mt[eu]=i.MIN,Mt[nu]=i.MAX;let gt={[iu]:i.ZERO,[su]:i.ONE,[ru]:i.SRC_COLOR,[pl]:i.SRC_ALPHA,[uu]:i.SRC_ALPHA_SATURATE,[lu]:i.DST_COLOR,[au]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[ml]:i.ONE_MINUS_SRC_ALPHA,[hu]:i.ONE_MINUS_DST_COLOR,[cu]:i.ONE_MINUS_DST_ALPHA,[du]:i.CONSTANT_COLOR,[fu]:i.ONE_MINUS_CONSTANT_COLOR,[pu]:i.CONSTANT_ALPHA,[mu]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(G,kt,St,D,Ft,ut,N,U,Z,pt){if(G===wi){p===!0&&(yt(i.BLEND),p=!1);return}if(p===!1&&(_t(i.BLEND),p=!0),G!==Qh){if(G!==d||pt!==L){if((y!==_s||A!==_s)&&(i.blendEquation(i.FUNC_ADD),y=_s,A=_s),pt)switch(G){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:be("WebGLState: Invalid blending: ",G);break}else switch(G){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dl:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fl:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",G);break}C=null,M=null,T=null,P=null,_.set(0,0,0),R=0,d=G,L=pt}return}Ft=Ft||kt,ut=ut||St,N=N||D,(kt!==y||Ft!==A)&&(i.blendEquationSeparate(Mt[kt],Mt[Ft]),y=kt,A=Ft),(St!==C||D!==M||ut!==T||N!==P)&&(i.blendFuncSeparate(gt[St],gt[D],gt[ut],gt[N]),C=St,M=D,T=ut,P=N),(U.equals(_)===!1||Z!==R)&&(i.blendColor(U.r,U.g,U.b,Z),_.copy(U),R=Z),d=G,L=!1}function It(G,kt){G.side===Xn?yt(i.CULL_FACE):_t(i.CULL_FACE);let St=G.side===Pn;kt&&(St=!St),Rt(St),G.blending===Ks&&G.transparent===!1?rt(wi):rt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let D=G.stencilWrite;a.setTest(D),D&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ct(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(G){k!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),k=G)}function Yt(G){G!==$h?(_t(i.CULL_FACE),G!==B&&(G===ul?i.cullFace(i.BACK):G===Kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),B=G}function xt(G){G!==it&&(et&&i.lineWidth(G),it=G)}function Ct(G,kt,St){G?(_t(i.POLYGON_OFFSET_FILL),(X!==kt||J!==St)&&(X=kt,J=St,o.getReversed()&&(kt=-kt),i.polygonOffset(kt,St))):yt(i.POLYGON_OFFSET_FILL)}function Dt(G){G?_t(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function le(G){G===void 0&&(G=i.TEXTURE0+Q-1),Et!==G&&(i.activeTexture(G),Et=G)}function F(G,kt,St){St===void 0&&(Et===null?St=i.TEXTURE0+Q-1:St=Et);let D=At[St];D===void 0&&(D={type:void 0,texture:void 0},At[St]=D),(D.type!==G||D.texture!==kt)&&(Et!==St&&(i.activeTexture(St),Et=St),i.bindTexture(G,kt||ct[G]),D.type=G,D.texture=kt)}function pe(){let G=At[Et];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(G){be("WebGLState:",G)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(G){be("WebGLState:",G)}}function g(){try{i.texSubImage2D(...arguments)}catch(G){be("WebGLState:",G)}}function H(){try{i.texSubImage3D(...arguments)}catch(G){be("WebGLState:",G)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(G){be("WebGLState:",G)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(G){be("WebGLState:",G)}}function Nt(){try{i.texStorage2D(...arguments)}catch(G){be("WebGLState:",G)}}function Lt(){try{i.texStorage3D(...arguments)}catch(G){be("WebGLState:",G)}}function st(){try{i.texImage2D(...arguments)}catch(G){be("WebGLState:",G)}}function lt(){try{i.texImage3D(...arguments)}catch(G){be("WebGLState:",G)}}function Pt(G){return f[G]!==void 0?f[G]:i.getParameter(G)}function ee(G,kt){f[G]!==kt&&(i.pixelStorei(G,kt),f[G]=kt)}function Gt(G){_e.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),_e.copy(G))}function Vt(G){xe.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),xe.copy(G))}function ae(G,kt){let St=c.get(kt);St===void 0&&(St=new WeakMap,c.set(kt,St));let D=St.get(G);D===void 0&&(D=i.getUniformBlockIndex(kt,G.name),St.set(G,D))}function ne(G,kt){let D=c.get(kt).get(G);l.get(kt)!==D&&(i.uniformBlockBinding(kt,D,G.__bindingPointIndex),l.set(kt,D))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Et=null,At={},h={},m=new WeakMap,x=[],b=null,p=!1,d=null,y=null,C=null,M=null,A=null,T=null,P=null,_=new he(0,0,0),R=0,L=!1,k=null,B=null,it=null,X=null,J=null,_e.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:yt,bindFramebuffer:Y,drawBuffers:V,useProgram:mt,setBlending:rt,setMaterial:It,setFlipSided:Rt,setCullFace:Yt,setLineWidth:xt,setPolygonOffset:Ct,setScissorTest:Dt,activeTexture:le,bindTexture:F,unbindTexture:pe,compressedTexImage2D:Kt,compressedTexImage3D:w,texImage2D:st,texImage3D:lt,pixelStorei:ee,getParameter:Pt,updateUBOMapping:ae,uniformBlockBinding:ne,texStorage2D:Nt,texStorage3D:Lt,texSubImage2D:g,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:tt,scissor:Gt,viewport:Vt,reset:Ee}}function nx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,u=new WeakMap,f=new Set,h,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,g){return x?new OffscreenCanvas(w,g):br("canvas")}function p(w,g,H){let $=1,tt=Kt(w);if((tt.width>H||tt.height>H)&&($=H/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let Nt=Math.floor($*tt.width),Lt=Math.floor($*tt.height);h===void 0&&(h=b(Nt,Lt));let st=g?b(Nt,Lt):h;return st.width=Nt,st.height=Lt,st.getContext("2d").drawImage(w,0,0,Nt,Lt),Me("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Nt+"x"+Lt+")."),st}else return"data"in w&&Me("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function d(w){return w.generateMipmaps}function y(w){i.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,g,H,$,tt,Nt=!1){if(w!==null){if(i[w]!==void 0)return i[w];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Lt;$&&(Lt=t.get("EXT_texture_norm16"),Lt||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=g;if(g===i.RED&&(H===i.FLOAT&&(st=i.R32F),H===i.HALF_FLOAT&&(st=i.R16F),H===i.UNSIGNED_BYTE&&(st=i.R8),H===i.UNSIGNED_SHORT&&Lt&&(st=Lt.R16_EXT),H===i.SHORT&&Lt&&(st=Lt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(st=i.R8UI),H===i.UNSIGNED_SHORT&&(st=i.R16UI),H===i.UNSIGNED_INT&&(st=i.R32UI),H===i.BYTE&&(st=i.R8I),H===i.SHORT&&(st=i.R16I),H===i.INT&&(st=i.R32I)),g===i.RG&&(H===i.FLOAT&&(st=i.RG32F),H===i.HALF_FLOAT&&(st=i.RG16F),H===i.UNSIGNED_BYTE&&(st=i.RG8),H===i.UNSIGNED_SHORT&&Lt&&(st=Lt.RG16_EXT),H===i.SHORT&&Lt&&(st=Lt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(st=i.RG8UI),H===i.UNSIGNED_SHORT&&(st=i.RG16UI),H===i.UNSIGNED_INT&&(st=i.RG32UI),H===i.BYTE&&(st=i.RG8I),H===i.SHORT&&(st=i.RG16I),H===i.INT&&(st=i.RG32I)),g===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(st=i.RGB8UI),H===i.UNSIGNED_SHORT&&(st=i.RGB16UI),H===i.UNSIGNED_INT&&(st=i.RGB32UI),H===i.BYTE&&(st=i.RGB8I),H===i.SHORT&&(st=i.RGB16I),H===i.INT&&(st=i.RGB32I)),g===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),H===i.UNSIGNED_INT&&(st=i.RGBA32UI),H===i.BYTE&&(st=i.RGBA8I),H===i.SHORT&&(st=i.RGBA16I),H===i.INT&&(st=i.RGBA32I)),g===i.RGB&&(H===i.UNSIGNED_SHORT&&Lt&&(st=Lt.RGB16_EXT),H===i.SHORT&&Lt&&(st=Lt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),g===i.RGBA){let lt=Nt?Er:ze.getTransfer(tt);H===i.FLOAT&&(st=i.RGBA32F),H===i.HALF_FLOAT&&(st=i.RGBA16F),H===i.UNSIGNED_BYTE&&(st=lt===Ke?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&Lt&&(st=Lt.RGBA16_EXT),H===i.SHORT&&Lt&&(st=Lt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function A(w,g){let H;return w?g===null||g===pi||g===js?H=i.DEPTH24_STENCIL8:g===ii?H=i.DEPTH32F_STENCIL8:g===Qs&&(H=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===pi||g===js?H=i.DEPTH_COMPONENT24:g===ii?H=i.DEPTH_COMPONENT32F:g===Qs&&(H=i.DEPTH_COMPONENT16),H}function T(w,g){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rn&&w.minFilter!==Ln?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function P(w){let g=w.target;g.removeEventListener("dispose",P),R(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function _(w){let g=w.target;g.removeEventListener("dispose",_),k(g)}function R(w){let g=n.get(w);if(g.__webglInit===void 0)return;let H=w.source,$=m.get(H);if($){let tt=$[g.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(w),Object.keys($).length===0&&m.delete(H)}n.remove(w)}function L(w){let g=n.get(w);i.deleteTexture(g.__webglTexture);let H=w.source,$=m.get(H);delete $[g.__cacheKey],o.memory.textures--}function k(w){let g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let tt=0;tt<g.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(g.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)i.deleteFramebuffer(g.__webglFramebuffer[$]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let H=w.textures;for(let $=0,tt=H.length;$<tt;$++){let Nt=n.get(H[$]);Nt.__webglTexture&&(i.deleteTexture(Nt.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(w)}let B=0;function it(){B=0}function X(){return B}function J(w){B=w}function Q(){let w=B;return w>=s.maxTextures&&Me("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,w}function et(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function Tt(w,g){let H=n.get(w);if(w.isVideoTexture&&F(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){let $=w.image;if($===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(H,w,g);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+g)}function ft(w,g){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){yt(H,w,g);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+g)}function Et(w,g){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){yt(H,w,g);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+g)}function At(w,g){let H=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&H.__version!==w.version){Y(H,w,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+g)}let se={[Gs]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[$o]:i.MIRRORED_REPEAT},Bt={[Rn]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},_e={[Su]:i.NEVER,[Au]:i.ALWAYS,[Eu]:i.LESS,[fc]:i.LEQUAL,[bu]:i.EQUAL,[pc]:i.GEQUAL,[wu]:i.GREATER,[Tu]:i.NOTEQUAL};function xe(w,g){if(g.type===ii&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ln||g.magFilter===Ca||g.magFilter===Yr||g.magFilter===is||g.minFilter===Ln||g.minFilter===Ca||g.minFilter===Yr||g.minFilter===is)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,se[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,se[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,se[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Bt[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Bt[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rn||g.minFilter!==Yr&&g.minFilter!==is||g.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function $t(w,g){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",P));let $=g.source,tt=m.get($);tt===void 0&&(tt={},m.set($,tt));let Nt=et(g);if(Nt!==w.__cacheKey){tt[Nt]===void 0&&(tt[Nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),tt[Nt].usedTimes++;let Lt=tt[w.__cacheKey];Lt!==void 0&&(tt[w.__cacheKey].usedTimes--,Lt.usedTimes===0&&L(g)),w.__cacheKey=Nt,w.__webglTexture=tt[Nt].texture}return H}function ct(w,g,H){return Math.floor(Math.floor(w/H)/g)}function _t(w,g,H,$){let Nt=w.updateRanges;if(Nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,H,$,g.data);else{Nt.sort((ee,Gt)=>ee.start-Gt.start);let Lt=0;for(let ee=1;ee<Nt.length;ee++){let Gt=Nt[Lt],Vt=Nt[ee],ae=Gt.start+Gt.count,ne=ct(Vt.start,g.width,4),Ee=ct(Gt.start,g.width,4);Vt.start<=ae+1&&ne===Ee&&ct(Vt.start+Vt.count-1,g.width,4)===ne?Gt.count=Math.max(Gt.count,Vt.start+Vt.count-Gt.start):(++Lt,Nt[Lt]=Vt)}Nt.length=Lt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ee=0,Gt=Nt.length;ee<Gt;ee++){let Vt=Nt[ee],ae=Math.floor(Vt.start/4),ne=Math.ceil(Vt.count/4),Ee=ae%g.width,G=Math.floor(ae/g.width),kt=ne,St=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,Ee,G,kt,St,H,$,g.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function yt(w,g,H){let $=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=i.TEXTURE_3D);let tt=$t(w,g),Nt=g.source;e.bindTexture($,w.__webglTexture,i.TEXTURE0+H);let Lt=n.get(Nt);if(Nt.version!==Lt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap!="undefined"&&g.image instanceof ImageBitmap)===!1){let St=ze.getPrimaries(ze.workingColorSpace),D=g.colorSpace===Bi?null:ze.getPrimaries(g.colorSpace),Ft=g.colorSpace===Bi||St===D?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let lt=p(g.image,!1,s.maxTextureSize);lt=pe(g,lt);let Pt=r.convert(g.format,g.colorSpace),ee=r.convert(g.type),Gt=M(g.internalFormat,Pt,ee,g.normalized,g.colorSpace,g.isVideoTexture);xe($,g);let Vt,ae=g.mipmaps,ne=g.isVideoTexture!==!0,Ee=Lt.__version===void 0||tt===!0,G=Nt.dataReady,kt=T(g,lt);if(g.isDepthTexture)Gt=A(g.format===ss,g.type),Ee&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Gt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,lt.width,lt.height,0,Pt,ee,null));else if(g.isDataTexture)if(ae.length>0){ne&&Ee&&e.texStorage2D(i.TEXTURE_2D,kt,Gt,ae[0].width,ae[0].height);for(let St=0,D=ae.length;St<D;St++)Vt=ae[St],ne?G&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Pt,ee,Vt.data):e.texImage2D(i.TEXTURE_2D,St,Gt,Vt.width,Vt.height,0,Pt,ee,Vt.data);g.generateMipmaps=!1}else ne?(Ee&&e.texStorage2D(i.TEXTURE_2D,kt,Gt,lt.width,lt.height),G&&_t(g,lt,Pt,ee)):e.texImage2D(i.TEXTURE_2D,0,Gt,lt.width,lt.height,0,Pt,ee,lt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ne&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,Gt,ae[0].width,ae[0].height,lt.depth);for(let St=0,D=ae.length;St<D;St++)if(Vt=ae[St],g.format!==si)if(Pt!==null)if(ne){if(G)if(g.layerUpdates.size>0){let Ft=Ol(Vt.width,Vt.height,g.format,g.type);for(let ut of g.layerUpdates){let N=Vt.data.subarray(ut*Ft/Vt.data.BYTES_PER_ELEMENT,(ut+1)*Ft/Vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,ut,Vt.width,Vt.height,1,Pt,N)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Vt.width,Vt.height,lt.depth,Pt,Vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Gt,Vt.width,Vt.height,lt.depth,0,Vt.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Vt.width,Vt.height,lt.depth,Pt,ee,Vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,Gt,Vt.width,Vt.height,lt.depth,0,Pt,ee,Vt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{ne&&Ee&&e.texStorage2D(i.TEXTURE_2D,kt,Gt,ae[0].width,ae[0].height);for(let St=0,D=ae.length;St<D;St++)Vt=ae[St],g.format!==si?Pt!==null?ne?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Pt,Vt.data):e.compressedTexImage2D(i.TEXTURE_2D,St,Gt,Vt.width,Vt.height,0,Vt.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?G&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Pt,ee,Vt.data):e.texImage2D(i.TEXTURE_2D,St,Gt,Vt.width,Vt.height,0,Pt,ee,Vt.data)}else if(g.isDataArrayTexture)if(ne){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,Gt,lt.width,lt.height,lt.depth),G)if(g.layerUpdates.size>0){let St=Ol(lt.width,lt.height,g.format,g.type);for(let D of g.layerUpdates){let Ft=lt.data.subarray(D*St/lt.data.BYTES_PER_ELEMENT,(D+1)*St/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,D,lt.width,lt.height,1,Pt,ee,Ft)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Pt,ee,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,lt.width,lt.height,lt.depth,0,Pt,ee,lt.data);else if(g.isData3DTexture)ne?(Ee&&e.texStorage3D(i.TEXTURE_3D,kt,Gt,lt.width,lt.height,lt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Pt,ee,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,lt.width,lt.height,lt.depth,0,Pt,ee,lt.data);else if(g.isFramebufferTexture){if(Ee)if(ne)e.texStorage2D(i.TEXTURE_2D,kt,Gt,lt.width,lt.height);else{let St=lt.width,D=lt.height;for(let Ft=0;Ft<kt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Gt,St,D,0,Pt,ee,null),St>>=1,D>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let St=i.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),lt.parentNode!==St){St.appendChild(lt),f.add(g),St.onpaint=D=>{let Ft=D.changedElements;for(let ut of f)Ft.includes(ut.image)&&(ut.needsUpdate=!0)},St.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{let Ft=i.RGBA,ut=i.RGBA,N=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ft,ut,N,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(ne&&Ee){let St=Kt(ae[0]);e.texStorage2D(i.TEXTURE_2D,kt,Gt,St.width,St.height)}for(let St=0,D=ae.length;St<D;St++)Vt=ae[St],ne?G&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Pt,ee,Vt):e.texImage2D(i.TEXTURE_2D,St,Gt,Pt,ee,Vt);g.generateMipmaps=!1}else if(ne){if(Ee){let St=Kt(lt);e.texStorage2D(i.TEXTURE_2D,kt,Gt,St.width,St.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,ee,lt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Pt,ee,lt);d(g)&&y($),Lt.__version=Nt.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Y(w,g,H){if(g.image.length!==6)return;let $=$t(w,g),tt=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);let Nt=n.get(tt);if(tt.version!==Nt.__version||$===!0){e.activeTexture(i.TEXTURE0+H);let Lt=ze.getPrimaries(ze.workingColorSpace),st=g.colorSpace===Bi?null:ze.getPrimaries(g.colorSpace),lt=g.colorSpace===Bi||Lt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Pt=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,Gt=[];for(let ut=0;ut<6;ut++)!Pt&&!ee?Gt[ut]=p(g.image[ut],!0,s.maxCubemapSize):Gt[ut]=ee?g.image[ut].image:g.image[ut],Gt[ut]=pe(g,Gt[ut]);let Vt=Gt[0],ae=r.convert(g.format,g.colorSpace),ne=r.convert(g.type),Ee=M(g.internalFormat,ae,ne,g.normalized,g.colorSpace),G=g.isVideoTexture!==!0,kt=Nt.__version===void 0||$===!0,St=tt.dataReady,D=T(g,Vt);xe(i.TEXTURE_CUBE_MAP,g);let Ft;if(Pt){G&&kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,D,Ee,Vt.width,Vt.height);for(let ut=0;ut<6;ut++){Ft=Gt[ut].mipmaps;for(let N=0;N<Ft.length;N++){let U=Ft[N];g.format!==si?ae!==null?G?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,N,0,0,U.width,U.height,ae,U.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,N,Ee,U.width,U.height,0,U.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,N,0,0,U.width,U.height,ae,ne,U.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,N,Ee,U.width,U.height,0,ae,ne,U.data)}}}else{if(Ft=g.mipmaps,G&&kt){Ft.length>0&&D++;let ut=Kt(Gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,D,Ee,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(ee){G?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Gt[ut].width,Gt[ut].height,ae,ne,Gt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ee,Gt[ut].width,Gt[ut].height,0,ae,ne,Gt[ut].data);for(let N=0;N<Ft.length;N++){let Z=Ft[N].image[ut].image;G?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,N+1,0,0,Z.width,Z.height,ae,ne,Z.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,N+1,Ee,Z.width,Z.height,0,ae,ne,Z.data)}}else{G?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ae,ne,Gt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ee,ae,ne,Gt[ut]);for(let N=0;N<Ft.length;N++){let U=Ft[N];G?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,N+1,0,0,ae,ne,U.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,N+1,Ee,ae,ne,U.image[ut])}}}d(g)&&y(i.TEXTURE_CUBE_MAP),Nt.__version=tt.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function V(w,g,H,$,tt,Nt){let Lt=r.convert(H.format,H.colorSpace),st=r.convert(H.type),lt=M(H.internalFormat,Lt,st,H.normalized,H.colorSpace),Pt=n.get(g),ee=n.get(H);if(ee.__renderTarget=g,!Pt.__hasExternalTextures){let Gt=Math.max(1,g.width>>Nt),Vt=Math.max(1,g.height>>Nt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Nt,lt,Gt,Vt,g.depth,0,Lt,st,null):e.texImage2D(tt,Nt,lt,Gt,Vt,0,Lt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),le(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,ee.__webglTexture,0,Dt(g)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,ee.__webglTexture,Nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(w,g,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){let $=g.depthTexture,tt=$&&$.isDepthTexture?$.type:null,Nt=A(g.stencilBuffer,tt),Lt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;le(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(g),Nt,g.width,g.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(g),Nt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,w)}else{let $=g.textures;for(let tt=0;tt<$.length;tt++){let Nt=$[tt],Lt=r.convert(Nt.format,Nt.colorSpace),st=r.convert(Nt.type),lt=M(Nt.internalFormat,Lt,st,Nt.normalized,Nt.colorSpace);le(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(g),lt,g.width,g.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(g),lt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,lt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(w,g,H){let $=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(g.depthTexture);if(tt.__renderTarget=g,(!tt.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),xe(i.TEXTURE_CUBE_MAP,g.depthTexture);let Pt=r.convert(g.depthTexture.format),ee=r.convert(g.depthTexture.type),Gt;g.depthTexture.format===yi?Gt=i.DEPTH_COMPONENT24:g.depthTexture.format===ss&&(Gt=i.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Gt,g.width,g.height,0,Pt,ee,null)}}else Tt(g.depthTexture,0);let Nt=tt.__webglTexture,Lt=Dt(g),st=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,lt=g.depthTexture.format===ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===yi)le(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,Nt,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,Nt,0);else if(g.depthTexture.format===ss)le(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,Nt,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,Nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(w){let g=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){let tt=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),g.__depthDisposeCallback=tt}g.__boundDepthTexture=$}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)Mt(g.__webglFramebuffer[$],w,$);else{let $=w.texture.mipmaps;$&&$.length>0?Mt(g.__webglFramebuffer[0],w,0):Mt(g.__webglFramebuffer,w,0)}else if(H){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=i.createRenderbuffer(),mt(g.__webglDepthbuffer[$],w,!1);else{let tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=g.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Nt)}}else{let $=w.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),mt(g.__webglDepthbuffer,w,!1);else{let tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(w,g,H){let $=n.get(w);g!==void 0&&V($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&gt(w)}function It(w){let g=w.texture,H=n.get(w),$=n.get(g);w.addEventListener("dispose",_);let tt=w.textures,Nt=w.isWebGLCubeRenderTarget===!0,Lt=tt.length>1;if(Lt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=g.version,o.memory.textures++),Nt){H.__webglFramebuffer=[];for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer[st]=[];for(let lt=0;lt<g.mipmaps.length;lt++)H.__webglFramebuffer[st][lt]=i.createFramebuffer()}else H.__webglFramebuffer[st]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)H.__webglFramebuffer[st]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let st=0,lt=tt.length;st<lt;st++){let Pt=n.get(tt[st]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&le(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let st=0;st<tt.length;st++){let lt=tt[st];H.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[st]);let Pt=r.convert(lt.format,lt.colorSpace),ee=r.convert(lt.type),Gt=M(lt.internalFormat,Pt,ee,lt.normalized,lt.colorSpace,w.isXRRenderTarget===!0),Vt=Dt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Gt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,H.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Nt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),xe(i.TEXTURE_CUBE_MAP,g);for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0)for(let lt=0;lt<g.mipmaps.length;lt++)V(H.__webglFramebuffer[st][lt],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,lt);else V(H.__webglFramebuffer[st],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);d(g)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let st=0,lt=tt.length;st<lt;st++){let Pt=tt[st],ee=n.get(Pt),Gt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Gt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Gt,ee.__webglTexture),xe(Gt,Pt),V(H.__webglFramebuffer,w,Pt,i.COLOR_ATTACHMENT0+st,Gt,0),d(Pt)&&y(Gt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(st=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,$.__webglTexture),xe(st,g),g.mipmaps&&g.mipmaps.length>0)for(let lt=0;lt<g.mipmaps.length;lt++)V(H.__webglFramebuffer[lt],w,g,i.COLOR_ATTACHMENT0,st,lt);else V(H.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,st,0);d(g)&&y(st),e.unbindTexture()}w.depthBuffer&&gt(w)}function Rt(w){let g=w.textures;for(let H=0,$=g.length;H<$;H++){let tt=g[H];if(d(tt)){let Nt=C(w),Lt=n.get(tt).__webglTexture;e.bindTexture(Nt,Lt),y(Nt),e.unbindTexture()}}}let Yt=[],xt=[];function Ct(w){if(w.samples>0){if(le(w)===!1){let g=w.textures,H=w.width,$=w.height,tt=i.COLOR_BUFFER_BIT,Nt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(w),st=g.length>1;if(st)for(let Pt=0;Pt<g.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);let lt=w.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Pt=0;Pt<g.length;Pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Pt]);let ee=n.get(g[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,tt,i.NEAREST),l===!0&&(Yt.length=0,xt.length=0,Yt.push(i.COLOR_ATTACHMENT0+Pt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Yt.push(Nt),xt.push(Nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let Pt=0;Pt<g.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Pt]);let ee=n.get(g[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Dt(w){return Math.min(s.maxSamples,w.samples)}function le(w){let g=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function F(w){let g=o.render.frame;u.get(w)!==g&&(u.set(w,g),w.update())}function pe(w,g){let H=w.colorSpace,$=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Sr&&H!==Bi&&(ze.getTransfer(H)===Ke?($!==si||tt!==Yn)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",H)),g}function Kt(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=it,this.getTextureUnits=X,this.setTextureUnits=J,this.setTexture2D=Tt,this.setTexture2DArray=ft,this.setTexture3D=Et,this.setTextureCube=At,this.rebindTextures=rt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=V,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ix(i,t){function e(n,s=Bi){let r,o=ze.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===bl)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===Rl)return i.RGB;if(n===si)return i.RGBA;if(n===yi)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===Da)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Fa)return i.RGBA_INTEGER;if(n===Zr||n===Jr||n===$r||n===Kr)if(o===Ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===za||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===ka||n===Va||n===Wa||n===Xa||n===Qr||n===qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===ka)return o===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wa)return r.COMPRESSED_R11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qr)return r.COMPRESSED_RG11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ya)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===cc||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return o===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===uc||n===jr||n===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends vi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null,b=typeof XRWebGLBinding!="undefined",p=new nh,d={},y=e.getContextAttributes(),C=null,M=null,A=[],T=[],P=new Re,_=null,R=null,L=new An;L.viewport=new nn;let k=new An;k.viewport=new nn;let B=[L,k],it=new Sa,X=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let _t=A[ct];return _t===void 0&&(_t=new qs,A[ct]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(ct){let _t=A[ct];return _t===void 0&&(_t=new qs,A[ct]=_t),_t.getGripSpace()},this.getHand=function(ct){let _t=A[ct];return _t===void 0&&(_t=new qs,A[ct]=_t),_t.getHandSpace()};function Q(ct){let _t=T.indexOf(ct.inputSource);if(_t===-1)return;let yt=A[_t];yt!==void 0&&(yt.update(ct.inputSource,ct.frame,c||o),yt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function et(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",Tt);for(let ct=0;ct<A.length;ct++){let _t=T[ct];_t!==null&&(T[ct]=null,A[ct].disconnect(_t))}X=null,J=null,p.reset();for(let ct in d)delete d[ct];if(t.setRenderTarget(C),m=null,h=null,f=null,s=null,M=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),R!==null){let ct=R.camera;ct.fov=R.fov,ct.zoom=R.zoom,ct.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ct){c=ct},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",et),s.addEventListener("inputsourceschange",Tt),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Y=null,V=null;y.depth&&(V=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=y.stencil?ss:yi,Y=y.stencil?js:pi);let mt={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(mt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new On(h.textureWidth,h.textureHeight,{format:si,type:Yn,depthTexture:new Ki(h.textureWidth,h.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new On(m.framebufferWidth,m.framebufferHeight,{format:si,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Tt(ct){for(let _t=0;_t<ct.removed.length;_t++){let yt=ct.removed[_t],Y=T.indexOf(yt);Y>=0&&(T[Y]=null,A[Y].disconnect(yt))}for(let _t=0;_t<ct.added.length;_t++){let yt=ct.added[_t],Y=T.indexOf(yt);if(Y===-1){for(let mt=0;mt<A.length;mt++)if(mt>=T.length){T.push(yt),Y=mt;break}else if(T[mt]===null){T[mt]=yt,Y=mt;break}if(Y===-1)break}let V=A[Y];V&&V.connect(yt)}}let ft=new I,Et=new I;function At(ct,_t,yt){ft.setFromMatrixPosition(_t.matrixWorld),Et.setFromMatrixPosition(yt.matrixWorld);let Y=ft.distanceTo(Et),V=_t.projectionMatrix.elements,mt=yt.projectionMatrix.elements,Mt=V[14]/(V[10]-1),gt=V[14]/(V[10]+1),rt=(V[9]+1)/V[5],It=(V[9]-1)/V[5],Rt=(V[8]-1)/V[0],Yt=(mt[8]+1)/mt[0],xt=Mt*Rt,Ct=Mt*Yt,Dt=Y/(-Rt+Yt),le=Dt*-Rt;if(_t.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(le),ct.translateZ(Dt),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),V[10]===-1)ct.projectionMatrix.copy(_t.projectionMatrix),ct.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{let F=Mt+Dt,pe=gt+Dt,Kt=xt-le,w=Ct+(Y-le),g=rt*gt/pe*F,H=It*gt/pe*F;ct.projectionMatrix.makePerspective(Kt,w,g,H,F,pe),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function se(ct,_t){_t===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(_t.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let _t=ct.near,yt=ct.far;p.texture!==null&&(p.depthNear>0&&(_t=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),it.near=k.near=L.near=_t,it.far=k.far=L.far=yt,(X!==it.near||J!==it.far)&&(s.updateRenderState({depthNear:it.near,depthFar:it.far}),X=it.near,J=it.far),it.layers.mask=ct.layers.mask|6,L.layers.mask=it.layers.mask&-5,k.layers.mask=it.layers.mask&-3;let Y=ct.parent,V=it.cameras;se(it,Y);for(let mt=0;mt<V.length;mt++)se(V[mt],Y);V.length===2?At(it,L,k):it.projectionMatrix.copy(L.projectionMatrix),R===null&&ct.isPerspectiveCamera&&(R={camera:ct,fov:ct.fov,zoom:ct.zoom}),Bt(ct,it,Y)};function Bt(ct,_t,yt){yt===null?ct.matrix.copy(_t.matrixWorld):(ct.matrix.copy(yt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(_t.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(_t.projectionMatrix),ct.projectionMatrixInverse.copy(_t.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=fs*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ct){l=ct,h!==null&&(h.fixedFoveation=ct),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ct)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(it)},this.getCameraTexture=function(ct){return d[ct]};let _e=null;function xe(ct,_t){if(u=_t.getViewerPose(c||o),x=_t,u!==null){let yt=u.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let Y=!1;yt.length!==it.cameras.length&&(it.cameras.length=0,Y=!0);for(let gt=0;gt<yt.length;gt++){let rt=yt[gt],It=null;if(m!==null)It=m.getViewport(rt);else{let Yt=f.getViewSubImage(h,rt);It=Yt.viewport,gt===0&&(t.setRenderTargetTextures(M,Yt.colorTexture,Yt.depthStencilTexture),t.setRenderTarget(M))}let Rt=B[gt];Rt===void 0&&(Rt=new An,Rt.layers.enable(gt),Rt.viewport=new nn,B[gt]=Rt),Rt.matrix.fromArray(rt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(rt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(It.x,It.y,It.width,It.height),gt===0&&(it.matrix.copy(Rt.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),Y===!0&&it.cameras.push(Rt)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let gt=f.getDepthInformation(yt[0]);gt&&gt.isValid&&gt.texture&&p.init(gt,s.renderState)}if(V&&V.includes("camera-access")&&b){t.state.unbindTexture(),f=n.getBinding();for(let gt=0;gt<yt.length;gt++){let rt=yt[gt].camera;if(rt){let It=d[rt];It||(It=new Lr,d[rt]=It);let Rt=f.getCameraImage(rt);It.sourceTexture=Rt}}}}for(let yt=0;yt<A.length;yt++){let Y=T[yt],V=A[yt];Y!==null&&V!==void 0&&V.update(Y,_t,c||o)}_e&&_e(ct,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),x=null}let $t=new id;$t.setAnimationLoop(xe),this.setAnimationLoop=function(ct){_e=ct},this.dispose=function(){}}},ox=new Ae,ld=new Pe;ld.set(-1,0,0,0,1,0,0,0,1);function ax(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Nl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,C,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),b(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,y,C):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Pn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Pn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y=t.get(d),C=y.envMap,M=y.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ld),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,C){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=C*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function b(p,d){let y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){let T=A.program;n.uniformBlockBinding(M,T)}function c(M,A){let T=s[M.id];T===void 0&&(p(M),T=u(M),s[M.id]=T,M.addEventListener("dispose",y));let P=A.program;n.updateUBOMapping(M,P);let _=t.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function u(M){let A=f();M.__bindingPointIndex=A;let T=i.createBuffer(),P=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,T),T}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let A=s[M.id],T=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,R=T.length;_<R;_++){let L=T[_];if(Array.isArray(L))for(let k=0,B=L.length;k<B;k++)m(L[k],_,k,P);else m(L,_,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,A,T,P){if(b(M,A,T,P)===!0){let _=M.__offset,R=M.value;if(Array.isArray(R)){let L=0;for(let k=0;k<R.length;k++){let B=R[k],it=d(B);x(B,M.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=it.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(R,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function x(M,A,T){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,T)}function b(M,A,T,P){let _=M.value,R=A+"_"+T;if(P[R]===void 0)return typeof _=="number"||typeof _=="boolean"?P[R]=_:ArrayBuffer.isView(_)?P[R]=_.slice():P[R]=_.clone(),!0;{let L=P[R];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return P[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function p(M){let A=M.uniforms,T=0,P=16;for(let R=0,L=A.length;R<L;R++){let k=Array.isArray(A[R])?A[R]:[A[R]];for(let B=0,it=k.length;B<it;B++){let X=k[B],J=Array.isArray(X.value)?X.value:[X.value];for(let Q=0,et=J.length;Q<et;Q++){let Tt=J[Q],ft=d(Tt),Et=T%P,At=Et%ft.boundary,se=Et+At;T+=At,se!==0&&P-se<ft.storage&&(T+=P-se),X.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=ft.storage}}}let _=T%P;return _>0&&(T+=P-_),M.__size=T,M.__cache={},this}function d(M){let A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",M),A}function y(M){let A=M.target;A.removeEventListener("dispose",y);let T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function C(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:C}}var lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function hx(){return Ti===null&&(Ti=new Cr(lx,16,16,rs,ti),Ti.name="DFG_LUT",Ti.minFilter=Ln,Ti.magFilter=Ln,Ti.wrapS=_i,Ti.wrapT=_i,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var vc=class{constructor(t={}){let{canvas:e=Cu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Yn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let b=m,p=new Set([Fa,Ua,Na]),d=new Set([Yn,pi,Qs,js,Ia,La]),y=new Uint32Array(4),C=new Int32Array(4),M=new I,A=null,T=null,P=[],_=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,k=!1,B=null,it=null,X=null,J=null;this._outputColorSpace=Vn;let Q=0,et=0,Tt=null,ft=-1,Et=null,At=new nn,se=new nn,Bt=null,_e=new he(0),xe=0,$t=e.width,ct=e.height,_t=1,yt=null,Y=null,V=new nn(0,0,$t,ct),mt=new nn(0,0,$t,ct),Mt=!1,gt=new Zs,rt=!1,It=!1,Rt=new Ae,Yt=new I,xt=new nn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function le(){return Tt===null?_t:1}let F=n;function pe(v,W){return e.getContext(v,W)}let Kt,w,g,H,$,tt,Nt,Lt,st,lt,Pt,ee,Gt,Vt,ae,ne,Ee,G,kt,St,D,Ft,ut;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ba}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",Wt,!1),F===null){let W="webgl2";if(F=pe(W,v),F===null)throw pe(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}N()}catch(v){throw e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),be("WebGLRenderer: "+v.message),v}function N(){Kt=new xm(F),Kt.init(),D=new ix(F,Kt),w=new am(F,Kt,t,D),g=new ex(F,Kt),w.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),it=F.createFramebuffer(),X=F.createFramebuffer(),J=F.createFramebuffer(),H=new vm(F),$=new Gg,tt=new nx(F,Kt,g,$,w,D,H),Nt=new gm(L),Lt=new Sf(F),Ft=new rm(F,Lt),st=new _m(F,Lt,H,Ft),lt=new Sm(F,st,Lt,Ft,H),G=new Mm(F,w,tt),ae=new cm($),Pt=new Hg(L,Nt,Kt,w,Ft,ae),ee=new ax(L,$),Gt=new Vg,Vt=new Jg(Kt),Ee=new sm(L,Nt,g,lt,x,l),ne=new tx(L,lt,w),ut=new cx(F,H,w,g),kt=new om(F,Kt,H),St=new ym(F,Kt,H),H.programs=Pt.programs,L.capabilities=w,L.extensions=Kt,L.properties=$,L.renderLists=Gt,L.shadowMap=ne,L.state=g,L.info=H}b!==Yn&&(R=new bm(b,e.width,e.height,a,s,r));let U=new ih(L,F);this.xr=U,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let v=Kt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Kt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(v){v!==void 0&&(_t=v,this.setSize($t,ct,!1))},this.getSize=function(v){return v.set($t,ct)},this.setSize=function(v,W,ht=!0){if(U.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=v,ct=W,e.width=Math.floor(v*_t),e.height=Math.floor(W*_t),ht===!0&&(e.style.width=v+"px",e.style.height=W+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,v,W)},this.getDrawingBufferSize=function(v){return v.set($t*_t,ct*_t).floor()},this.setDrawingBufferSize=function(v,W,ht){$t=v,ct=W,_t=ht,e.width=Math.floor(v*ht),e.height=Math.floor(W*ht),this.setViewport(0,0,v,W)},this.setEffects=function(v){if(b===Yn){be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let W=0;W<v.length;W++)if(v[W].isOutputPass===!0){Me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(At)},this.getViewport=function(v){return v.copy(V)},this.setViewport=function(v,W,ht,j){v.isVector4?V.set(v.x,v.y,v.z,v.w):V.set(v,W,ht,j),g.viewport(At.copy(V).multiplyScalar(_t).round())},this.getScissor=function(v){return v.copy(mt)},this.setScissor=function(v,W,ht,j){v.isVector4?mt.set(v.x,v.y,v.z,v.w):mt.set(v,W,ht,j),g.scissor(se.copy(mt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(v){g.setScissorTest(Mt=v)},this.setOpaqueSort=function(v){yt=v},this.setTransparentSort=function(v){Y=v},this.getClearColor=function(v){return v.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(v=!0,W=!0,ht=!0){let j=0;if(v){let nt=!1;if(Tt!==null){let Qt=Tt.texture.format;nt=p.has(Qt)}if(nt){let Qt=Tt.texture.type,ie=d.has(Qt),Jt=Ee.getClearColor(),te=Ee.getClearAlpha(),ue=Jt.r,Ce=Jt.g,Ne=Jt.b;ie?(y[0]=ue,y[1]=Ce,y[2]=Ne,y[3]=te,F.clearBufferuiv(F.COLOR,0,y)):(C[0]=ue,C[1]=Ce,C[2]=Ne,C[3]=te,F.clearBufferiv(F.COLOR,0,C))}else j|=F.COLOR_BUFFER_BIT}W&&(j|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),B=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),Ee.dispose(),Gt.dispose(),Vt.dispose(),$.dispose(),Nt.dispose(),lt.dispose(),Ft.dispose(),ut.dispose(),Pt.dispose(),U.dispose(),U.removeEventListener("sessionstart",bt),U.removeEventListener("sessionend",wt),Ut.stop()};function Z(v){v.preventDefault(),Il("WebGLRenderer: Context Lost."),k=!0}function pt(){Il("WebGLRenderer: Context Restored."),k=!1;let v=H.autoReset,W=ne.enabled,ht=ne.autoUpdate,j=ne.needsUpdate,nt=ne.type;N(),H.autoReset=v,ne.enabled=W,ne.autoUpdate=ht,ne.needsUpdate=j,ne.type=nt}function Wt(v){be("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function at(v){let W=v.target;W.removeEventListener("dispose",at),zt(W)}function zt(v){E(v),$.remove(v)}function E(v){let W=$.get(v).programs;W!==void 0&&(W.forEach(function(ht){Pt.releaseProgram(ht)}),v.isShaderMaterial&&Pt.releaseShaderCache(v))}this.renderBufferDirect=function(v,W,ht,j,nt,Qt){W===null&&(W=Ct);let ie=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Jt=Es(v,W,ht,j,nt);g.setMaterial(j,ie);let te=ht.index,ue=1;if(j.wireframe===!0){if(te=st.getWireframeAttribute(ht),te===void 0)return;ue=2}let Ce=ht.drawRange,Ne=ht.attributes.position,de=Ce.start*ue,Ye=(Ce.start+Ce.count)*ue;Qt!==null&&(de=Math.max(de,Qt.start*ue),Ye=Math.min(Ye,(Qt.start+Qt.count)*ue)),te!==null?(de=Math.max(de,0),Ye=Math.min(Ye,te.count)):Ne!=null&&(de=Math.max(de,0),Ye=Math.min(Ye,Ne.count));let ln=Ye-de;if(ln<0||ln===1/0)return;Ft.setup(nt,j,Jt,ht,te);let tn,Ze=kt;if(te!==null&&(tn=Lt.get(te),Ze=St,Ze.setIndex(tn)),nt.isMesh)j.wireframe===!0?(g.setLineWidth(j.wireframeLinewidth*le()),Ze.setMode(F.LINES)):Ze.setMode(F.TRIANGLES);else if(nt.isLine){let hn=j.linewidth;hn===void 0&&(hn=1),g.setLineWidth(hn*le()),nt.isLineSegments?Ze.setMode(F.LINES):nt.isLineLoop?Ze.setMode(F.LINE_LOOP):Ze.setMode(F.LINE_STRIP)}else nt.isPoints?Ze.setMode(F.POINTS):nt.isSprite&&Ze.setMode(F.TRIANGLES);if(nt.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))Ze.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let hn=nt._multiDrawStarts,ce=nt._multiDrawCounts,bn=nt._multiDrawCount,Be=te?Lt.get(te).bytesPerElement:1,Hn=$.get(j).currentProgram.getUniforms();for(let $n=0;$n<bn;$n++)Hn.setValue(F,"_gl_DrawID",$n),Ze.render(hn[$n]/Be,ce[$n])}else if(nt.isInstancedMesh)Ze.renderInstances(de,ln,nt.count);else if(ht.isInstancedBufferGeometry){let hn=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,ce=Math.min(ht.instanceCount,hn);Ze.renderInstances(de,ln,ce)}else Ze.render(de,ln)};function O(v,W,ht,j){B!==null&&v.isNodeMaterial&&B.setObject(j,v),rt===!0&&ae.setState(v,ht,!1),v.transparent===!0&&v.side===Xn&&v.forceSinglePass===!1?(v.side=Pn,v.needsUpdate=!0,je(v,W,j),v.side=bi,v.needsUpdate=!0,je(v,W,j),v.side=Xn):je(v,W,j)}this.compile=function(v,W,ht=null){ht===null&&(ht=v),B!==null&&B.renderStart(v,W,ht),T=Vt.get(ht),T.init(W),_.push(T),ht.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(T.pushLight(nt),nt.castShadow&&T.pushShadow(nt))}),v!==ht&&v.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(T.pushLight(nt),nt.castShadow&&T.pushShadow(nt))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),It=this.localClippingEnabled,rt=ae.init(this.clippingPlanes,It),rt===!0&&ae.setGlobalState(this.clippingPlanes,W),B!==null&&ne.render(T.state.shadowsArray,ht,W);let j=new Set;return v.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Qt=nt.material;if(Qt)if(Array.isArray(Qt))for(let ie=0;ie<Qt.length;ie++){let Jt=Qt[ie];O(Jt,ht,W,nt),j.add(Jt)}else O(Qt,ht,W,nt),j.add(Qt)}),T=_.pop(),B!==null&&B.renderEnd(),j},this.compileAsync=function(v,W,ht=null){let j=this.compile(v,W,ht);return new Promise(nt=>{function Qt(){if(j.forEach(function(ie){let te=$.get(ie).currentProgram;(te===void 0||te.isReady())&&j.delete(ie)}),j.size===0){nt(v);return}setTimeout(Qt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Qt():setTimeout(Qt,10)})};let K=null;function vt(v){K&&K(v)}function bt(){Ut.stop()}function wt(){Ut.start()}let Ut=new id;Ut.setAnimationLoop(vt),typeof self!="undefined"&&Ut.setContext(self),this.setAnimationLoop=function(v){K=v,U.setAnimationLoop(v),v===null?Ut.stop():Ut.start()},U.addEventListener("sessionstart",bt),U.addEventListener("sessionend",wt),this.render=function(v,W){if(W!==void 0&&W.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;B!==null&&B.renderStart(v,W);let ht=U.enabled===!0&&U.isPresenting===!0,j=R!==null&&(Tt===null||ht)&&R.begin(L,Tt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(U.cameraAutoUpdate===!0&&U.updateCamera(W),W=U.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,W,Tt),T=Vt.get(v,_.length),T.init(W),T.state.textureUnits=tt.getTextureUnits(),_.push(T),Rt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),gt.setFromProjectionMatrix(Rt,hi,W.reversedDepth),It=this.localClippingEnabled,rt=ae.init(this.clippingPlanes,It),A=Gt.get(v,P.length),A.init(),P.push(A),U.enabled===!0&&U.isPresenting===!0){let ie=L.xr.getDepthSensingMesh();ie!==null&&fe(ie,W,-1/0,L.sortObjects)}fe(v,W,0,L.sortObjects),A.finish(),B!==null&&B.updateLights(T.state.lightsArray),L.sortObjects===!0&&A.sort(yt,Y),Dt=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Dt&&Ee.addToRenderList(A,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&ae.beginShadows();let nt=T.state.shadowsArray;if(ne.render(nt,v,W),rt===!0&&ae.endShadows(),(j&&R.hasRenderPass())===!1){let ie=A.opaque,Jt=A.transmissive;if(T.setupLights(),W.isArrayCamera){let te=W.cameras;if(Jt.length>0)for(let ue=0,Ce=te.length;ue<Ce;ue++){let Ne=te[ue];$e(ie,Jt,v,Ne)}Dt&&Ee.render(v);for(let ue=0,Ce=te.length;ue<Ce;ue++){let Ne=te[ue];we(A,v,Ne,Ne.viewport)}}else Jt.length>0&&$e(ie,Jt,v,W),Dt&&Ee.render(v),we(A,v,W)}Tt!==null&&et===0&&(tt.updateMultisampleRenderTarget(Tt),tt.updateRenderTargetMipmap(Tt)),j&&R.end(L),v.isScene===!0&&v.onAfterRender(L,v,W),Ft.resetDefaultState(),ft=-1,Et=null,_.pop(),_.length>0?(T=_[_.length-1],tt.setTextureUnits(T.state.textureUnits),rt===!0&&ae.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,B!==null&&B.renderEnd()};function fe(v,W,ht,j){if(v.visible===!1)return;if(v.layers.test(W.layers)){if(v.isGroup)ht=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(W);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(gt)){j&&xt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Rt);let ie=lt.update(v),Jt=v.material;Jt.visible&&A.push(v,ie,Jt,ht,xt.z,null,W)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(gt))){let ie=lt.update(v),Jt=v.material;if(j&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),xt.copy(v.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),xt.copy(ie.boundingSphere.center)),xt.applyMatrix4(v.matrixWorld).applyMatrix4(Rt)),Array.isArray(Jt)){let te=ie.groups;for(let ue=0,Ce=te.length;ue<Ce;ue++){let Ne=te[ue],de=Jt[Ne.materialIndex];de&&de.visible&&A.push(v,ie,de,ht,xt.z,Ne,W)}}else Jt.visible&&A.push(v,ie,Jt,ht,xt.z,null,W)}}let Qt=v.children;for(let ie=0,Jt=Qt.length;ie<Jt;ie++)fe(Qt[ie],W,ht,j)}function we(v,W,ht,j){let{opaque:nt,transmissive:Qt,transparent:ie}=v;T.setupLightsView(ht),rt===!0&&ae.setGlobalState(L.clippingPlanes,ht),j&&g.viewport(At.copy(j)),nt.length>0&&Oe(nt,W,ht),Qt.length>0&&Oe(Qt,W,ht),ie.length>0&&Oe(ie,W,ht),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function $e(v,W,ht,j){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){let de=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new On(1,1,{generateMipmaps:!0,type:de?ti:Yn,minFilter:is,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let Qt=T.state.transmissionRenderTarget[j.id],ie=j.viewport||At;Qt.setSize(ie.z*L.transmissionResolutionScale,ie.w*L.transmissionResolutionScale);let Jt=L.getRenderTarget(),te=L.getActiveCubeFace(),ue=L.getActiveMipmapLevel();L.setRenderTarget(Qt),L.getClearColor(_e),xe=L.getClearAlpha(),xe<1&&L.setClearColor(16777215,.5),L.clear(),Dt&&Ee.render(ht);let Ce=L.toneMapping;L.toneMapping=fi;let Ne=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),rt===!0&&ae.setGlobalState(L.clippingPlanes,j),Oe(v,ht,j),tt.updateMultisampleRenderTarget(Qt),tt.updateRenderTargetMipmap(Qt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ye=0,ln=W.length;Ye<ln;Ye++){let tn=W[Ye],{object:Ze,geometry:hn,material:ce,group:bn}=tn;if(ce.side===Xn&&Ze.layers.test(j.layers)){let Be=ce.side;ce.side=Pn,ce.needsUpdate=!0,De(Ze,ht,j,hn,ce,bn),ce.side=Be,ce.needsUpdate=!0,de=!0}}de===!0&&(tt.updateMultisampleRenderTarget(Qt),tt.updateRenderTargetMipmap(Qt))}L.setRenderTarget(Jt,te,ue),L.setClearColor(_e,xe),Ne!==void 0&&(j.viewport=Ne),L.toneMapping=Ce}function Oe(v,W,ht){let j=W.isScene===!0?W.overrideMaterial:null;for(let nt=0,Qt=v.length;nt<Qt;nt++){let ie=v[nt],{object:Jt,geometry:te,group:ue}=ie,Ce=ie.material;Ce.allowOverride===!0&&j!==null&&(Ce=j),Jt.layers.test(ht.layers)&&De(Jt,W,ht,te,Ce,ue)}}function De(v,W,ht,j,nt,Qt){B!==null&&nt.isNodeMaterial&&B.setObject(v,nt),v.onBeforeRender(L,W,ht,j,nt,Qt),v.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),nt.onBeforeRender(L,W,ht,j,v,Qt),nt.transparent===!0&&nt.side===Xn&&nt.forceSinglePass===!1?(nt.side=Pn,nt.needsUpdate=!0,L.renderBufferDirect(ht,W,j,nt,v,Qt),nt.side=bi,nt.needsUpdate=!0,L.renderBufferDirect(ht,W,j,nt,v,Qt),nt.side=Xn):L.renderBufferDirect(ht,W,j,nt,v,Qt),v.onAfterRender(L,W,ht,j,nt,Qt)}function je(v,W,ht){W.isScene!==!0&&(W=Ct);let j=$.get(v),nt=T.state.lights,Qt=T.state.shadowsArray,ie=nt.state.version,Jt=Pt.getParameters(v,nt.state,Qt,W,ht,T.state.lightProbeGridArray),te=Pt.getProgramCacheKey(Jt),ue=j.programs;j.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;let Ce=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;j.envMap=Nt.get(v.envMap||j.environment,Ce),j.envMapRotation=j.environment!==null&&v.envMap===null?W.environmentRotation:v.envMapRotation,ue===void 0&&(v.addEventListener("dispose",at),ue=new Map,j.programs=ue);let Ne=ue.get(te);if(Ne!==void 0){if(j.currentProgram===Ne&&j.lightsStateVersion===ie)return mi(v,Jt),Ne}else Jt.uniforms=Pt.getUniforms(v),B!==null&&v.isNodeMaterial&&B.build(v,ht,Jt),v.onBeforeCompile(Jt,L),Ne=Pt.acquireProgram(Jt,te),ue.set(te,Ne),j.uniforms=Jt.uniforms;let de=j.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(de.clippingPlanes=ae.uniform),mi(v,Jt),j.needsLights=ar(v),j.lightsStateVersion=ie,j.needsLights&&(de.ambientLightColor.value=nt.state.ambient,de.lightProbe.value=nt.state.probe,de.sunLights.value=nt.state.sun,de.sunLightShadows.value=nt.state.sunShadow,de.directionalLights.value=nt.state.directional,de.directionalLightShadows.value=nt.state.directionalShadow,de.spotLights.value=nt.state.spot,de.spotLightShadows.value=nt.state.spotShadow,de.rectAreaLights.value=nt.state.rectArea,de.ltc_1.value=nt.state.rectAreaLTC1,de.ltc_2.value=nt.state.rectAreaLTC2,de.pointLights.value=nt.state.point,de.pointLightShadows.value=nt.state.pointShadow,de.hemisphereLights.value=nt.state.hemi,de.sunShadowMatrix.value=nt.state.sunShadowMatrix,de.sunShadowCascade.value=nt.state.sunShadowCascade,de.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,de.spotLightMatrix.value=nt.state.spotLightMatrix,de.spotLightMap.value=nt.state.spotLightMap,de.pointShadowMatrix.value=nt.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=Ne,j.uniformsList=null,Ne}function qn(v){if(v.uniformsList===null){let W=v.currentProgram.getUniforms();v.uniformsList=ir.seqWithValue(W.seq,v.uniforms)}return v.uniformsList}function mi(v,W){let ht=$.get(v);ht.outputColorSpace=W.outputColorSpace,ht.batching=W.batching,ht.batchingColor=W.batchingColor,ht.instancing=W.instancing,ht.instancingColor=W.instancingColor,ht.instancingMorph=W.instancingMorph,ht.skinning=W.skinning,ht.morphTargets=W.morphTargets,ht.morphNormals=W.morphNormals,ht.morphColors=W.morphColors,ht.morphTargetsCount=W.morphTargetsCount,ht.numClippingPlanes=W.numClippingPlanes,ht.numIntersection=W.numClipIntersection,ht.vertexAlphas=W.vertexAlphas,ht.vertexTangents=W.vertexTangents,ht.toneMapping=W.toneMapping}function gi(v,W){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(W.matrixWorld);for(let ht=0,j=v.length;ht<j;ht++){let nt=v[ht];if(nt.texture!==null&&nt.boundingBox.containsPoint(M))return nt}return null}function Es(v,W,ht,j,nt){W.isScene!==!0&&(W=Ct),tt.resetTextureUnits();let Qt=W.fog,ie=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,Jt=Tt===null?L.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:ze.workingColorSpace,te=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,ue=Nt.get(j.envMap||ie,te),Ce=j.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,Ne=!!ht.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),de=!!ht.morphAttributes.position,Ye=!!ht.morphAttributes.normal,ln=!!ht.morphAttributes.color,tn=fi;j.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(tn=L.toneMapping);let Ze=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,hn=Ze!==void 0?Ze.length:0,ce=$.get(j),bn=T.state.lights;if(rt===!0&&(It===!0||v!==Et)){let qe=v===Et&&j.id===ft;ae.setState(j,v,qe)}let Be=!1;j.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==bn.state.version||ce.outputColorSpace!==Jt||nt.isBatchedMesh&&ce.batching===!1||!nt.isBatchedMesh&&ce.batching===!0||nt.isBatchedMesh&&ce.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&ce.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&ce.instancing===!1||!nt.isInstancedMesh&&ce.instancing===!0||nt.isSkinnedMesh&&ce.skinning===!1||!nt.isSkinnedMesh&&ce.skinning===!0||nt.isInstancedMesh&&ce.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&ce.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&ce.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&ce.instancingMorph===!1&&nt.morphTexture!==null||ce.envMap!==ue||j.fog===!0&&ce.fog!==Qt||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==ae.numPlanes||ce.numIntersection!==ae.numIntersection)||ce.vertexAlphas!==Ce||ce.vertexTangents!==Ne||ce.morphTargets!==de||ce.morphNormals!==Ye||ce.morphColors!==ln||ce.toneMapping!==tn||ce.morphTargetsCount!==hn||!!ce.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Be=!0):(Be=!0,ce.__version=j.version);let Hn=ce.currentProgram;Be===!0&&(Hn=je(j,W,nt),B&&j.isNodeMaterial&&B.onUpdateProgram(j,Hn,ce));let $n=!1,ri=!1,Hi=!1,Le=Hn.getUniforms(),en=ce.uniforms;if(g.useProgram(Hn.program)&&($n=!0,ri=!0,Hi=!0),j.id!==ft&&(ft=j.id,ri=!0),ce.needsLights){let qe=gi(T.state.lightProbeGridArray,nt);ce.lightProbeGrid!==qe&&(ce.lightProbeGrid=qe,ri=!0)}if($n||Et!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Le.setValue(F,"projectionMatrix",v.projectionMatrix),Le.setValue(F,"viewMatrix",v.matrixWorldInverse);let Gn=Le.map.cameraPosition;Gn!==void 0&&Gn.setValue(F,Yt.setFromMatrixPosition(v.matrixWorld)),w.logarithmicDepthBuffer&&Le.setValue(F,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Le.setValue(F,"isOrthographic",v.isOrthographicCamera===!0),Et!==v&&(Et=v,ri=!0,Hi=!0)}if(ce.needsLights&&(bn.state.sunShadowMap.length>0&&Le.setValue(F,"sunShadowMap",bn.state.sunShadowMap,tt),bn.state.directionalShadowMap.length>0&&Le.setValue(F,"directionalShadowMap",bn.state.directionalShadowMap,tt),bn.state.spotShadowMap.length>0&&Le.setValue(F,"spotShadowMap",bn.state.spotShadowMap,tt),bn.state.pointShadowMap.length>0&&Le.setValue(F,"pointShadowMap",bn.state.pointShadowMap,tt)),nt.isSkinnedMesh){Le.setOptional(F,nt,"bindMatrix"),Le.setOptional(F,nt,"bindMatrixInverse");let qe=nt.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Le.setValue(F,"boneTexture",qe.boneTexture,tt))}nt.isBatchedMesh&&(Le.setOptional(F,nt,"batchingTexture"),Le.setValue(F,"batchingTexture",nt._matricesTexture,tt),Le.setOptional(F,nt,"batchingIdTexture"),Le.setValue(F,"batchingIdTexture",nt._indirectTexture,tt),Le.setOptional(F,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Le.setValue(F,"batchingColorTexture",nt._colorsTexture,tt));let ke=ht.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&G.update(nt,ht,Hn),(ri||ce.receiveShadow!==nt.receiveShadow)&&(ce.receiveShadow=nt.receiveShadow,Le.setValue(F,"receiveShadow",nt.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(en.envMapIntensity.value=W.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=hx()),ri){if(Le.setValue(F,"toneMappingExposure",L.toneMappingExposure),ce.needsLights&&os(en,Hi),Qt&&j.fog===!0&&ee.refreshFogUniforms(en,Qt),ee.refreshMaterialUniforms(en,j,_t,ct,T.state.transmissionRenderTarget[v.id]),ce.needsLights&&ce.lightProbeGrid){let qe=ce.lightProbeGrid;en.probesSH.value=qe.texture,en.probesMin.value.copy(qe.boundingBox.min),en.probesMax.value.copy(qe.boundingBox.max),en.probesResolution.value.copy(qe.resolution)}ir.upload(F,qn(ce),en,tt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ir.upload(F,qn(ce),en,tt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Le.setValue(F,"center",nt.center),Le.setValue(F,"modelViewMatrix",nt.modelViewMatrix),Le.setValue(F,"normalMatrix",nt.normalMatrix),Le.setValue(F,"modelMatrix",nt.matrixWorld),j.uniformsGroups!==void 0){let qe=j.uniformsGroups;for(let Gn=0,Ri=qe.length;Gn<Ri;Gn++){let oo=qe[Gn];ut.update(oo,Hn),ut.bind(oo,Hn)}}return Hn}function os(v,W){v.ambientLightColor.needsUpdate=W,v.lightProbe.needsUpdate=W,v.sunLights.needsUpdate=W,v.sunLightShadows.needsUpdate=W,v.directionalLights.needsUpdate=W,v.directionalLightShadows.needsUpdate=W,v.pointLights.needsUpdate=W,v.pointLightShadows.needsUpdate=W,v.spotLights.needsUpdate=W,v.spotLightShadows.needsUpdate=W,v.rectAreaLights.needsUpdate=W,v.hemisphereLights.needsUpdate=W}function ar(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(v,W,ht){let j=$.get(v);j.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),$.get(v.texture).__webglTexture=W,$.get(v.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ht,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,W){let ht=$.get(v);ht.__webglFramebuffer=W,ht.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(v,W=0,ht=0){Tt=v,Q=W,et=ht;let j=null,nt=!1,Qt=!1;if(v){let Jt=$.get(v);if(Jt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(F.FRAMEBUFFER,Jt.__webglFramebuffer),At.copy(v.viewport),se.copy(v.scissor),Bt=v.scissorTest,g.viewport(At),g.scissor(se),g.setScissorTest(Bt),ft=-1;return}else if(Jt.__webglFramebuffer===void 0)tt.setupRenderTarget(v);else if(Jt.__hasExternalTextures)tt.rebindTextures(v,$.get(v.texture).__webglTexture,$.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ce=v.depthTexture;if(Jt.__boundDepthTexture!==Ce){if(Ce!==null&&$.has(Ce)&&(v.width!==Ce.image.width||v.height!==Ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(v)}}let te=v.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Qt=!0);let ue=$.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ue[W])?j=ue[W][ht]:j=ue[W],nt=!0):v.samples>0&&tt.useMultisampledRTT(v)===!1?j=$.get(v).__webglMultisampledFramebuffer:Array.isArray(ue)?j=ue[ht]:j=ue,At.copy(v.viewport),se.copy(v.scissor),Bt=v.scissorTest}else At.copy(V).multiplyScalar(_t).floor(),se.copy(mt).multiplyScalar(_t).floor(),Bt=Mt;if(ht!==0&&(j=it),g.bindFramebuffer(F.FRAMEBUFFER,j)&&g.drawBuffers(v,j),g.viewport(At),g.scissor(se),g.setScissorTest(Bt),nt){let Jt=$.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Jt.__webglTexture,ht)}else if(Qt){let Jt=W;for(let te=0;te<v.textures.length;te++){let ue=$.get(v.textures[te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+te,ue.__webglTexture,ht,Jt)}}else if(v!==null&&ht!==0){let Jt=$.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Jt.__webglTexture,ht)}ft=-1};function Dn(v){let W=$.get(v);return(W.__readFormat!==v.format||W.__readType!==v.type)&&(W.__readFormat=v.format,W.__readType=v.type,W.__formatReadable=w.textureFormatReadable(v.format),W.__typeReadable=w.textureTypeReadable(v.type)),W}this.readRenderTargetPixels=function(v,W,ht,j,nt,Qt,ie,Jt=0){if(!(v&&v.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=$.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ie!==void 0&&(te=te[ie]),te){g.bindFramebuffer(F.FRAMEBUFFER,te);try{let ue=v.textures[Jt],Ce=ue.format,Ne=ue.type;v.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Jt);let de=Dn(ue);if(de.__formatReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(de.__typeReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=v.width-j&&ht>=0&&ht<=v.height-nt&&F.readPixels(W,ht,j,nt,D.convert(Ce),D.convert(Ne),Qt)}finally{let ue=Tt!==null?$.get(Tt).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(v,W,ht,j,nt,Qt,ie,Jt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=$.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ie!==void 0&&(te=te[ie]),te)if(W>=0&&W<=v.width-j&&ht>=0&&ht<=v.height-nt){g.bindFramebuffer(F.FRAMEBUFFER,te);let ue=v.textures[Jt],Ce=ue.format,Ne=ue.type;v.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Jt);let de=Dn(ue);if(de.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(de.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ye),F.bufferData(F.PIXEL_PACK_BUFFER,Qt.byteLength,F.STREAM_READ),F.readPixels(W,ht,j,nt,D.convert(Ce),D.convert(Ne),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let ln=Tt!==null?$.get(Tt).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,ln);let tn=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Iu(F,tn,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ye),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Qt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ye),F.deleteSync(tn),Qt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,W=null,ht=0){let j=Math.pow(2,-ht),nt=Math.floor(v.image.width*j),Qt=Math.floor(v.image.height*j),ie=W!==null?W.x:0,Jt=W!==null?W.y:0;tt.setTexture2D(v,0),F.copyTexSubImage2D(F.TEXTURE_2D,ht,0,0,ie,Jt,nt,Qt),g.unbindTexture()},this.copyTextureToTexture=function(v,W,ht=null,j=null,nt=0,Qt=0){let ie,Jt,te,ue,Ce,Ne,de,Ye,ln,tn=v.isCompressedTexture?v.mipmaps[Qt]:v.image;if(ht!==null)ie=ht.max.x-ht.min.x,Jt=ht.max.y-ht.min.y,te=ht.isBox3?ht.max.z-ht.min.z:1,ue=ht.min.x,Ce=ht.min.y,Ne=ht.isBox3?ht.min.z:0;else{let en=Math.pow(2,-nt);ie=Math.floor(tn.width*en),Jt=Math.floor(tn.height*en),v.isDataArrayTexture?te=tn.depth:v.isData3DTexture?te=Math.floor(tn.depth*en):te=1,ue=0,Ce=0,Ne=0}j!==null?(de=j.x,Ye=j.y,ln=j.z):(de=0,Ye=0,ln=0);let Ze=D.convert(W.format),hn=D.convert(W.type),ce;W.isData3DTexture?(tt.setTexture3D(W,0),ce=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(tt.setTexture2DArray(W,0),ce=F.TEXTURE_2D_ARRAY):(tt.setTexture2D(W,0),ce=F.TEXTURE_2D),g.activeTexture(F.TEXTURE0),g.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);let bn=g.getParameter(F.UNPACK_ROW_LENGTH),Be=g.getParameter(F.UNPACK_IMAGE_HEIGHT),Hn=g.getParameter(F.UNPACK_SKIP_PIXELS),$n=g.getParameter(F.UNPACK_SKIP_ROWS),ri=g.getParameter(F.UNPACK_SKIP_IMAGES);g.pixelStorei(F.UNPACK_ROW_LENGTH,tn.width),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tn.height),g.pixelStorei(F.UNPACK_SKIP_PIXELS,ue),g.pixelStorei(F.UNPACK_SKIP_ROWS,Ce),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Ne);let Hi=v.isDataArrayTexture||v.isData3DTexture,Le=W.isDataArrayTexture||W.isData3DTexture;if(v.isDepthTexture){let en=$.get(v),ke=$.get(W),qe=$.get(en.__renderTarget),Gn=$.get(ke.__renderTarget);g.bindFramebuffer(F.READ_FRAMEBUFFER,qe.__webglFramebuffer),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Ri=0;Ri<te;Ri++)Hi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(v).__webglTexture,nt,Ne+Ri),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(W).__webglTexture,Qt,ln+Ri)),F.blitFramebuffer(ue,Ce,ie,Jt,de,Ye,ie,Jt,F.DEPTH_BUFFER_BIT,F.NEAREST);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(nt!==0||v.isRenderTargetTexture||$.has(v)){let en=$.get(v),ke=$.get(W);g.bindFramebuffer(F.READ_FRAMEBUFFER,X),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,J);for(let qe=0;qe<te;qe++)Hi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,nt,Ne+qe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,nt),Le?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.__webglTexture,Qt,ln+qe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,Qt),nt!==0?F.blitFramebuffer(ue,Ce,ie,Jt,de,Ye,ie,Jt,F.COLOR_BUFFER_BIT,F.NEAREST):Le?F.copyTexSubImage3D(ce,Qt,de,Ye,ln+qe,ue,Ce,ie,Jt):F.copyTexSubImage2D(ce,Qt,de,Ye,ue,Ce,ie,Jt);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Le?v.isDataTexture||v.isData3DTexture?F.texSubImage3D(ce,Qt,de,Ye,ln,ie,Jt,te,Ze,hn,tn.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(ce,Qt,de,Ye,ln,ie,Jt,te,Ze,tn.data):F.texSubImage3D(ce,Qt,de,Ye,ln,ie,Jt,te,Ze,hn,tn):v.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Qt,de,Ye,ie,Jt,Ze,hn,tn.data):v.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Qt,de,Ye,tn.width,tn.height,Ze,tn.data):F.texSubImage2D(F.TEXTURE_2D,Qt,de,Ye,ie,Jt,Ze,hn,tn);g.pixelStorei(F.UNPACK_ROW_LENGTH,bn),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Be),g.pixelStorei(F.UNPACK_SKIP_PIXELS,Hn),g.pixelStorei(F.UNPACK_SKIP_ROWS,$n),g.pixelStorei(F.UNPACK_SKIP_IMAGES,ri),Qt===0&&W.generateMipmaps&&F.generateMipmap(ce),g.unbindTexture()},this.initRenderTarget=function(v){$.get(v).__webglFramebuffer===void 0&&tt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?tt.setTextureCube(v,0):v.isData3DTexture?tt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?tt.setTexture2DArray(v,0):tt.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){Q=0,et=0,Tt=null,g.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(t),e.unpackColorSpace=ze._getUnpackColorSpace()}};var hd=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},zi=(i,t,e)=>{let n=Math.sin(i*127.1+t*269.5+e*311.7)*43758.5453;return n-Math.floor(n)},yn=(i,t,e)=>{let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),o=i-n,a=t-s,l=e-r,c=o*o*(3-2*o),u=a*a*(3-2*a),f=l*l*(3-2*l),h=(m,x,b)=>m+(x-m)*b;return h(h(h(zi(n,s,r),zi(n+1,s,r),c),h(zi(n,s+1,r),zi(n+1,s+1,r),c),u),h(h(zi(n,s,r+1),zi(n+1,s,r+1),c),h(zi(n,s+1,r+1),zi(n+1,s+1,r+1),c),u),f)},rr={plain:0,woodX:1,woodZ:2,woodY:3,stone:4,plaster:5,fabric:6,metal:7,leather:8,logX:9,logZ:10,paper:11,shingle:12},vn=(i,t)=>(t.kind=i,t),cn=class{constructor(){this.p=[],this.n=[],this.c=[],this.t=[],this.k=[]}clear(){this.p.length=this.n.length=this.c.length=this.t.length=this.k.length=0}add(t,{m:e=null,color:n=()=>[1,1,1],tip:s=()=>0,flat:r=!1,normal:o=null,flip:a=!1,mat:l=null}={}){var b;let c=t.index?t.toNonIndexed():t.clone();if(e&&c.applyMatrix4(e),(r||!c.attributes.normal)&&c.computeVertexNormals(),a){for(let d of["position","normal","uv"]){let y=c.attributes[d];if(!y)continue;let C=y.array,M=y.itemSize;for(let A=0;A<y.count;A+=3)for(let T=0;T<M;T++){let P=C[(A+1)*M+T];C[(A+1)*M+T]=C[(A+2)*M+T],C[(A+2)*M+T]=P}}let p=c.attributes.normal.array;for(let d=0;d<p.length;d++)p[d]=-p[d]}let u=c.attributes.position,f=c.attributes.normal,h=l;if(h===null){let p=n.kind||"plain";if(p==="wood"||p==="log"){c.computeBoundingBox();let d=new I;c.boundingBox.getSize(d);let y=d.x>=d.y&&d.x>=d.z?"X":d.z>=d.y?"Z":"Y";h=p==="log"?y==="Z"?rr.logZ:rr.logX:rr["wood"+y]}else h=(b=rr[p])!=null?b:0}let m=new I,x=new I;for(let p=0;p<u.count;p++){m.fromBufferAttribute(u,p),x.fromBufferAttribute(f,p),o&&o(m,x,p);let d=n(m,x,p);this.p.push(m.x,m.y,m.z),this.n.push(x.x,x.y,x.z),this.c.push(d[0],d[1],d[2]),this.t.push(s(m,x)),this.k.push(h)}return this}tris(t,e,n=()=>0,s=null){var r;for(let o=0;o<t.length;o+=3){let a=new I(...t[o]),l=new I(...t[o+1]),c=new I(...t[o+2]),u=s?s.clone():new I().subVectors(c,l).cross(new I().subVectors(a,l)).normalize(),f=(r=rr[e.kind])!=null?r:e.kind==="wood"?rr.woodY:0;[a,l,c].forEach(h=>{let m=e(h);this.p.push(h.x,h.y,h.z),this.n.push(u.x,u.y,u.z),this.c.push(m[0],m[1],m[2]),this.t.push(n(h)),this.k.push(f)})}return this}geometry(){let t=new on;return t.setAttribute("position",new Xe(this.p,3)),t.setAttribute("normal",new Xe(this.n,3)),t.setAttribute("color",new Xe(this.c,3)),t.setAttribute("aTip",new Xe(this.t,1)),t.setAttribute("aMat",new Xe(this.k,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},z=(i=0,t=0,e=0,n=0,s=0,r=0,o=1,a=o,l=o)=>new Ae().compose(new I(i,t,e),new Ge().setFromEuler(new Cn(n,s,r,"YXZ")),new I(o,a,l)),ei=(i,t,{sway:e=0,side:n=bi,color:s=16777215,snowBias:r=0,sink:o=0,softBack:a=!1,crisp:l=!1,snowMask:c=!1,grain:u=0,rich:f=!1,indoor:h=!1}={})=>{let m=new Ei({vertexColors:!0,side:n,color:s});if(m.onBeforeCompile=x=>{Object.assign(x.uniforms,i,{uShow:t}),x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
        uniform float uShow, uTime, uSnowCover, uMoss, uFrost;
        attribute float aTip; attribute float aMat;
        varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj; varying float vMat; varying vec3 vObjN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
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
        ${c?"vSnowA *= aTip;":""}
        vMossA = uMoss * smoothstep(0.0, 0.8, cWN.y) * (0.6 + 0.4 * patchy)${c?" * aTip":""};
        vTipA = aTip * uFrost;
        ${e?`float sd = cIP.x * 0.071 + cIP.z * 0.053;
        float sw = (sin(uTime * 1.3 + sd) + 0.45 * sin(uTime * 3.1 + sd * 1.7)) * ${e.toFixed(4)} * position.y * position.y;
        transformed.x += sw; transformed.z += sw * 0.7;`:""}
        ${o?`transformed.y -= (1.0 - uShow) * ${o.toFixed(1)};`:"transformed *= uShow;"}`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uSnowC, uMossC; varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;
        // wood grain + fine speckle, so surfaces feel like real material up close
        float gH(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float gN(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(gH(i), gH(i + vec3(1, 0, 0)), f.x), mix(gH(i + vec3(0, 1, 0)), gH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(gH(i + vec3(0, 0, 1)), gH(i + vec3(1, 0, 1)), f.x), mix(gH(i + vec3(0, 1, 1)), gH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
        float grainH(vec3 p) { return gN(vec3(p.x * 1.3 + p.z * 0.4, p.y * 24.0, p.z * 1.3)) * 0.65 + gN(p * 11.0) * 0.35; }
        ${f?ux:""}
        varying float vMat; varying vec3 vObjN;
        float gRichH = 0.0; float gAO = 1.0;`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        ${a?`#ifdef DOUBLE_SIDED
 normal *= faceDirection;
 #endif`:""}
        ${f?`{
          vec2 dHdxy = vec2(dFdx(gRichH), dFdy(gRichH)) * ${(u||.02).toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          normal = normalize(abs(fDet) * normal - vGrad);
        }`:u?`{
          float gh = grainH(vObj);
          vec2 dHdxy = vec2(dFdx(gh), dFdy(gh)) * ${u.toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          normal = normalize(abs(fDet) * normal - vGrad);
        }`:""}`).replace("#include <color_fragment>",`#include <color_fragment>
        ${f?"gRichH = richSurface(int(vMat + 0.5), vObj, vObjN, diffuseColor.rgb);":u?"diffuseColor.rgb *= 0.84 + 0.3 * grainH(vObj);":""}
        ${h?`{
          // soft shadow in the corners: near the floor, under the ceiling, along the walls
          bool low = vObj.y < -1.0;
          float fy = low ? vObj.y + 3.5 : vObj.y - 0.12, cy = low ? -0.3 - vObj.y : 2.62 - vObj.y;
          vec2 ext = low ? vec2(6.5, 6.0) : vec2(3.03, 2.33);
          vec2 cen = low ? vec2(0.0, -3.55) : vec2(0.0, 0.0);
          vec2 dw = ext - abs(vObj.xz - cen);
          float inside = step(0.0, min(dw.x, dw.y)) * step(-0.05, fy) * step(-0.05, cy);
          float ao = mix(0.55, 1.0, smoothstep(0.0, 0.6, fy)) * mix(0.75, 1.0, smoothstep(0.0, 0.45, cy)) * mix(0.72, 1.0, smoothstep(0.0, 0.5, min(dw.x, dw.y)));
          gAO = mix(1.0, ao, inside);
        }`:""}
        diffuseColor.rgb = mix(diffuseColor.rgb, uMossC * (0.7 + 0.3 * diffuseColor.g), clamp(vMossA, 0.0, 0.8));
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC, clamp(vSnowA * 1.5 - 0.2, 0.0, 1.0));
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC * 0.96, ${l?"smoothstep(0.42, 0.56, vTipA) * 0.95":"clamp(vTipA, 0.0, 0.9)"});`)},h){let x=m.onBeforeCompile;m.onBeforeCompile=b=>{x(b),b.fragmentShader=b.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= 0.62 * gAO;
        reflectedLight.directDiffuse *= mix(1.0, gAO, 0.7);`)}}return m},ux=`
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
`;var qt={x0:-6.5,x1:6.5,z0:-9.5,z1:2.4,floor:-3.5,ceil:-.3},oe={x0:1.95,x1:3,top:2.2,bottom:-1.3},Ss=i=>{let t=(oe.top-Math.min(oe.top,Math.max(oe.bottom,i)))/(oe.top-oe.bottom);return .12+(qt.floor-.12)*t},Zn=2,ro=2.75,Jn=.42,Ec=.5,or=.14,ud=5,dx=[2,3,1,4,0],dd=["#6e2d2a","#2f4a3a","#2a3550","#5a3d26","#7a5a2a","#4a4a4e","#3d2e44","#5e5040","#283c3c","#704030"];function fd({group:i,mats:t,camera:e,U:n}){let{inn:s,glow:r}=t,o=qt.floor,a=qt.ceil,l=a-o,c=new cn,u=new cn,f=(N,U,Z)=>yn(N,U,Z),h=N=>vn("wood",U=>{let Z=N*(.86+f(U.x*3,U.y*9,U.z*3)*.28),pt=f(U.x*.6,U.y*2,U.z*.6);return[Z*(1+pt*.08),Z*(.74+pt*.04),Z*(.52-pt*.05)]}),m=h(.34),x=h(.46),b=h(.6),p=(N,U,Z,pt)=>pt?vn(pt,()=>[N,U,Z]):()=>[N,U,Z],d=vn("stone",N=>{let U=.42+f(N.x*4,N.y*4,N.z*4)*.22;return[U,U*.96,U*.9]}),y=qt.x1-qt.x0,C=qt.z1-qt.z0,M=(qt.x0+qt.x1)/2,A=(qt.z0+qt.z1)/2;for(let N=qt.x0,U=0;N<qt.x1-.01;N+=.22,U++){let Z=U%3*.9;for(let pt=qt.z0-Z,Wt=0;pt<qt.z1;pt+=2.7,Wt++){let at=Math.max(pt,qt.z0),zt=Math.min(pt+2.7,qt.z1);zt-at<.05||c.add(new dt(.215,.05,zt-at-.006),{m:z(N+.11,o-.025,(at+zt)/2),color:vn("wood",E=>{let O=(.36+(U*7+Wt*3)%5*.018)*(.88+f(E.x*3,0,E.z*.8)*.24);return[O*1.04,O*.74,O*.5]})})}}let T=(N,U)=>N>oe.x0-.05&&N<oe.x1+.05&&U>oe.bottom-.05&&U<oe.top+.2;for(let N=qt.x0;N<qt.x1-.01;N+=.5)for(let U=qt.z0;U<qt.z1-.01;U+=.5)T(N+.25,U+.25)||c.add(new un(.5,.5),{m:z(N+.25,a,U+.25,Math.PI/2,0,0),color:vn("plaster",Z=>{let pt=.62+f(Z.x*2,0,Z.z*2)*.08;return[pt,pt*.95,pt*.86]})});for(let N=qt.z0+1.2;N<qt.z1;N+=1.8)(N>oe.bottom-.1&&N<oe.top+.2?[[qt.x0,oe.x0-.05],[oe.x1+.05,qt.x1]]:[[qt.x0,qt.x1]]).forEach(([Z,pt])=>c.add(new dt(pt-Z,.22,.2),{m:z((Z+pt)/2,a-.11,N),color:m}));[["z",qt.z0,qt.x0,qt.x1,1],["z",qt.z1,qt.x0,qt.x1,-1],["x",qt.x0,qt.z0,qt.z1,1],["x",qt.x1,qt.z0,qt.z1,-1]].forEach(([N,U,Z,pt,Wt])=>{for(let E=Z;E<pt-.01;E+=.6){let O=Math.min(.6,pt-E),K=E+O/2,vt=(bt,wt,Ut,fe=0)=>{let we=new un(O,wt-bt),$e=N==="z"?z(K,(bt+wt)/2,U+Wt*fe,0,Wt>0?0:Math.PI,0):z(U+Wt*fe,(bt+wt)/2,K,0,Wt>0?Math.PI/2:-Math.PI/2,0);c.add(we,{m:$e,color:Ut})};vt(o,o+1,d),vt(o+1,a,vn("wood",bt=>{let wt=.33+f(bt.x*2,bt.y*6,bt.z*2)*.08+(Math.abs(((bt.x+bt.z)*1.67+50)%1-.5)<.02?-.06:0);return[wt*1.02,wt*.76,wt*.54]}))}let at=pt-Z,zt=(Z+pt)/2;[[o+1,.06,.05],[o+.06,.12,.03]].forEach(([E,O,K])=>{c.add(new dt(N==="z"?at:K,O,N==="z"?K:at),{m:N==="z"?z(zt,E,U+Wt*K/2):z(U+Wt*K/2,E,zt),color:x})})});let _=12,R=(oe.top-oe.bottom)/_;for(let N=0;N<_;N++){let U=oe.top-N*R,Z=U-R,pt=Ss(U-R*.5);c.add(new dt(oe.x1-oe.x0-.04,.05,R+.03),{m:z((oe.x0+oe.x1)/2,pt-.025,(Z+U)/2),color:b}),c.add(new dt(oe.x1-oe.x0-.04,Math.abs(Ss(U)-Ss(Z)),.03),{m:z((oe.x0+oe.x1)/2,(Ss(U)+pt)/2,U-.01),color:m})}let L=Math.hypot(oe.top-oe.bottom,.12-o),k=Math.atan2(.12-o,oe.top-oe.bottom);[oe.x0,oe.x1].forEach(N=>{c.add(new dt(.05,.28,L),{m:z(N,(.12+o)/2-.1,(oe.top+oe.bottom)/2,k,0,0),color:x}),c.add(new dt(.06,.06,L),{m:z(N,(.12+o)/2+.85,(oe.top+oe.bottom)/2,k,0,0),color:b});for(let U=1;U<_;U+=2){let Z=oe.top-U*R;c.add(new dt(.035,.85,.035),{m:z(N,Ss(Z)+.42,Z),color:x})}}),c.add(new dt(.03,2.6,3),{m:z(oe.x0-.02,o+1,.9),color:m}),c.add(new dt(.6,1.4,.03),{m:z(oe.x0-.04,o+.72,.5,0,Math.PI/2,0),color:x});let B=[];for(let N=0;N<6;N++)B.push({x:qt.x0+.5+Zn/2+N*(Zn+0),z:qt.z0+Jn/2,ry:0});for(let N=0;N<4;N++)B.push({x:qt.x0+Jn/2,z:qt.z0+1+Zn/2+N*Zn,ry:Math.PI/2});for(let N=0;N<4;N++)B.push({x:qt.x1-Jn/2,z:qt.z0+1+Zn/2+N*Zn,ry:-Math.PI/2});let it=[2,3,1,4,0,5,6,7,8,9,10,11,12,13],X=N=>new Ae().compose(new I(N.x,o,N.z),new Ge().setFromAxisAngle(new I(0,1,0),N.ry),new I(1,1,1)),J=(N,U,Z,pt)=>new I(U,Z,pt).applyMatrix4(X(N));B.forEach(N=>{let U=X(N),Z=(pt,Wt,at)=>c.add(pt,{m:U.clone().multiply(Wt),color:at});Z(new dt(Zn,ro,.03),z(0,ro/2,-Jn/2+.015),m),[-1,1].forEach(pt=>Z(new dt(.05,ro,Jn),z(pt*(Zn/2-.025),ro/2,0),x));for(let pt=0;pt<=ud;pt++)Z(new dt(Zn-.08,.035,Jn-.03),z(0,or+pt*Ec-.0175,.01),x);Z(new dt(Zn+.08,.12,Jn+.06),z(0,ro+.02,.02),m),Z(new dt(Zn,or,Jn+.02),z(0,or/2,.01),m);for(let pt=0;pt<ud;pt++)Z(new dt(Zn-.08,.04,.02),z(0,or+pt*Ec+.005,Jn/2-.005),b)}),c.add(new re(.015,.015,12,6),{m:z(0,o+2.55,qt.z0+Jn+.04,0,0,Math.PI/2),color:p(.62,.5,.28,"metal")});{[-.22,.22].forEach(Z=>c.add(new dt(.05,2.75,.06),{m:z(4.6+Z,o+1.36,qt.z0+Jn+.42,-.22,0,0),color:b}));for(let Z=0;Z<8;Z++){let pt=.25+Z*.32;c.add(new re(.018,.018,.44,6),{m:z(4.6,o+pt,qt.z0+Jn+.42+(1.36-pt)*Math.tan(.22)*.98,0,0,Math.PI/2),color:b})}}c.add(new dt(5.2,.012,3.8),{m:z(-.4,o+.006,-4.6),color:vn("fabric",N=>{let U=Math.abs(N.x+.4),Z=Math.abs(N.z+4.6);if(U>2.45||Z>1.75)return[.3,.16,.13];if(U>2.25||Z>1.55)return[.62,.5,.3];let pt=Math.sin(U*6)*Math.sin(Z*6);return pt>.4?[.55,.2,.17]:pt<-.4?[.2,.25,.3]:[.42,.18,.15]})});let Q={x:-.4,z:-2.6};c.add(new dt(1.9,.07,.95),{m:z(Q.x,o+.78,Q.z),color:b}),[-1,1].forEach(N=>{c.add(new dt(.5,.74,.88),{m:z(Q.x+N*.68,o+.37,Q.z),color:x});for(let U=0;U<3;U++)c.add(new dt(.44,.2,.02),{m:z(Q.x+N*.68,o+.15+U*.23,Q.z-.45),color:b}),c.add(new dt(.08,.02,.03),{m:z(Q.x+N*.68,o+.17+U*.23,Q.z-.47),color:p(.62,.5,.28,"metal")})}),c.add(new dt(.5,.012,.36),{m:z(Q.x-.15,o+.82,Q.z-.05,0,.15,0),color:p(.9,.87,.78,"paper")}),c.add(new re(.006,.006,.16,5),{m:z(Q.x+.15,o+.825,Q.z,0,.6,Math.PI/2),color:p(.12,.12,.13)}),c.add(new re(.07,.09,.03,12),{m:z(Q.x+.62,o+.83,Q.z+.2),color:p(.62,.5,.28,"metal")}),c.add(new re(.01,.01,.34,6),{m:z(Q.x+.62,o+1,Q.z+.2),color:p(.62,.5,.28,"metal")}),c.add(new re(.06,.14,.12,14,1,!0),{m:z(Q.x+.62,o+1.18,Q.z+.12,.5,0,0),color:p(.18,.36,.26,"metal")}),u.add(new pn(.035,8,6),{m:z(Q.x+.62,o+1.14,Q.z+.1),color:p(1,1,1)}),c.add(new dt(.5,.06,.48),{m:z(Q.x,o+.48,Q.z+.75),color:p(.32,.16,.12,"leather")}),c.add(new dt(.5,.6,.06),{m:z(Q.x,o+.82,Q.z+1),color:p(.32,.16,.12,"leather")}),[[-.2,.55],[.2,.55],[-.2,.95],[.2,.95]].forEach(([N,U])=>c.add(new dt(.04,.46,.04),{m:z(Q.x+N,o+.23,Q.z+U),color:m}));let et=(N,U,Z)=>{let pt=new Ae().compose(new I(N,o,U),new Ge().setFromAxisAngle(new I(0,1,0),Z),new I(1,1,1)),Wt=vn("leather",zt=>{let E=.34+f(zt.x*12,zt.y*12,zt.z*12)*.06;return[E,E*.52,E*.38]}),at=(zt,E)=>c.add(zt,{m:pt.clone().multiply(E),color:Wt});at(new dt(.85,.42,.8),z(0,.25,0)),at(new dt(.85,.65,.2),z(0,.72,-.32,-.12,0,0)),[-1,1].forEach(zt=>at(new dt(.16,.3,.8),z(zt*.42,.58,0))),at(new dt(.62,.1,.6),z(0,.5,.06))};et(-3.6,-5.2,.55),et(-1,-6.4,-.35),c.add(new re(.32,.32,.04,20),{m:z(-2.4,o+.58,-6),color:b}),c.add(new re(.04,.05,.56,8),{m:z(-2.4,o+.29,-6),color:m}),c.add(new re(.2,.22,.03,16),{m:z(-2.4,o+.015,-6),color:m}),c.add(new re(.04,.035,.1,10),{m:z(-2.3,o+.65,-5.95),color:p(.8,.78,.74)}),c.add(new re(.15,.17,.03,14),{m:z(-4.6,o+.015,-6.4),color:m}),c.add(new re(.015,.015,1.6,6),{m:z(-4.6,o+.8,-6.4),color:p(.62,.5,.28,"metal")}),c.add(new re(.16,.24,.26,16,1,!0),{m:z(-4.6,o+1.68,-6.4),color:p(.85,.78,.62,"fabric")}),u.add(new pn(.06,8,6),{m:z(-4.6,o+1.62,-6.4),color:p(1,1,1)}),c.add(new pn(.28,20,14),{m:z(1.2,o+1.05,-4,.4,0,.2),color:N=>f(N.x*9+3,N.y*9,N.z*9)>.55?[.62,.55,.38]:[.3,.42,.46]}),c.add(new Nr(.31,.012,6,32),{m:z(1.2,o+1.05,-4,0,Math.PI/2,.2),color:p(.62,.5,.28,"metal")}),c.add(new re(.03,.06,.75,8),{m:z(1.2,o+.38,-4),color:m}),[0,2.1,4.2].forEach(N=>c.add(new dt(.04,.03,.4),{m:z(1.2+Math.sin(N)*.17,o+.03,-4+Math.cos(N)*.17,0,N,0),color:m})),c.add(new dt(.55,2.1,.35),{m:z(-5.8,o+1.05,1.9),color:m}),c.add(new re(.2,.2,.02,24),{m:z(-5.8,o+1.7,1.72,Math.PI/2,0,0),color:p(.88,.84,.74,"paper")}),c.add(new dt(.01,.13,.01),{m:z(-5.8,o+1.74,1.71,0,0,.6),color:p(.1,.1,.1)}),c.add(new dt(.01,.17,.01),{m:z(-5.8,o+1.76,1.71,0,0,-.2),color:p(.1,.1,.1)}),[[-2.5,-4.5],[1.5,-6.5],[-.4,-2.6]].forEach(([N,U])=>{c.add(new re(.006,.006,.9,4),{m:z(N,a-.45,U),color:p(.1,.1,.1)}),c.add(new fn(.22,.2,16,1,!0),{m:z(N,a-.95,U),color:p(.3,.32,.28)}),u.add(new pn(.07,10,8),{m:z(N,a-1.03,U),color:p(1,1,1)})}),[[Q.x-.75,Q.z+.3],[Q.x-.62,Q.z+.32]].forEach(([N,U],Z)=>{c.add(new re(.025,.025,.12+Z*.05,8),{m:z(N,o+.81+(.12+Z*.05)/2,U),color:p(.88,.84,.74,"paper")}),u.add(new pn(.014,6,4),{m:z(N,o+.83+.12+Z*.05,U,0,0,0,1,1.8,1),color:p(1,1,1)})});let Tt=new Ie(c.geometry(),s);Tt.receiveShadow=!0;let ft=new Ie(u.geometry(),r);i.add(Tt,ft);let Et=new Fi(16756848,0,40,1.3);Et.position.set(-1,a-1.1,-4.5),i.add(Et);let At=(()=>{let N=new cn,U=Z=>{let pt=.9+f(Z.x*40,Z.y*40,Z.z*40)*.2;return[pt,pt,pt]};return[-1,1].forEach(Z=>N.add(new dt(.1,1,1),{m:z(Z*.45,0,0),color:U,tip:()=>1})),N.add(new dt(1,1,.08),{m:z(0,0,.47),color:U,tip:()=>1}),N.add(new dt(.82,.94,.94),{m:z(0,0,-.04),color:Z=>{let pt=.86+Math.sin(Z.x*140)*.04;return[pt,pt*.96,pt*.86]},tip:()=>0}),[.3,-.3,.36,-.36].forEach(Z=>N.add(new dt(1.01,.025,.02),{m:z(0,Z,.515),color:p(.78,.62,.3),tip:()=>0})),N.add(new dt(.7,.16,.01),{m:z(0,.1,.516),color:p(.12,.1,.08),tip:()=>0}),N.geometry()})(),se=new Ei({vertexColors:!0});se.onBeforeCompile=N=>{N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
attribute float aTip;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
        #ifdef USE_COLOR
          vColor.rgb *= color;
        #endif
        #ifdef USE_INSTANCING_COLOR
          vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, aTip);
        #endif`)};let Bt=null,_e=[],xe=[],$t="",ct=new Ae,_t=new Ge,yt=new I,Y=new I,V=[],mt=N=>{let U=2166136261;for(let Z=0;Z<N.length;Z++)U=Math.imul(U^N.charCodeAt(Z),16777619);return(U>>>0)%1e4/1e4},Mt=(N,U)=>window.MEOW_I18N?window.MEOW_I18N.t(N):U,gt=N=>{let U=document.createElement("canvas");U.width=256,U.height=64;let Z=U.getContext("2d"),pt=Z.createLinearGradient(0,0,0,64);pt.addColorStop(0,"#d9b968"),pt.addColorStop(1,"#8c6a2c"),Z.fillStyle=pt,Z.fillRect(0,0,256,64),Z.strokeStyle="rgba(60,40,10,.8)",Z.lineWidth=4,Z.strokeRect(4,4,248,56),Z.fillStyle="#2a1c08",Z.font='600 30px "Josefin Sans", system-ui, sans-serif',Z.textAlign="center",Z.textBaseline="middle";let Wt=N;for(;Z.measureText(Wt).width>228&&Wt.length>2;)Wt=Wt.slice(0,-2)+"\u2026";Z.fillText(Wt,128,34);let at=new $i(U);return at.colorSpace=Vn,at.anisotropy=4,at},rt=new cn,It=(N,U,Z)=>{let pt=Math.floor(Z*5),Wt=or+U*Ec,at=(O,K,vt)=>J(N,O,K,vt),zt=(O,K,vt,bt,wt=1,Ut=1,fe=1)=>{let we=at(K,vt,.02);rt.add(O,{m:new Ae().compose(we,new Ge().setFromAxisAngle(new I(0,1,0),N.ry),new I(wt,Ut,fe)),color:bt})},E=(Z*1.3%1-.5)*1;pt===0?(zt(new re(.06,.09,.26,12),E,Wt+.13,p(.55,.6,.58)),zt(new pn(.07,10,8),E+.3,Wt+.07,p(.7,.55,.35))):pt===1?(zt(new dt(.3,.16,.22),E,Wt+.08,h(.5)),zt(new dt(.3,.02,.22),E,Wt+.165,p(.62,.5,.28,"metal"))):pt===2?(zt(new pn(.06,10,8),E,Wt+.07,p(.25,.24,.24),1,1.2,.9),zt(new pn(.04,10,8),E,Wt+.17,p(.25,.24,.24)),[-1,1].forEach(O=>zt(new fn(.015,.035,4),E+O*.022,Wt+.215,p(.25,.24,.24)))):pt===3?(zt(new re(.05,.05,.02,12),E,Wt+.01,p(.62,.5,.28,"metal")),zt(new re(.02,.02,.14,8),E,Wt+.09,p(.88,.84,.74,"paper"))):(zt(new dt(.02,.24,.18),E,Wt+.12,h(.4)),zt(new un(.14,.18),E+.012,Wt+.12,p(.75,.72,.62)))},Rt=null,Yt=()=>{Bt&&(i.remove(Bt),Bt.dispose()),_e.forEach(zt=>{i.remove(zt),zt.material.map.dispose(),zt.material.dispose()}),Rt&&(i.remove(Rt),Rt.geometry.dispose()),_e=[],V.length=0;let N=30,U=[],Z=new Map;xe.forEach(zt=>{let E=(zt.tag||"").trim();Z.has(E)||(Z.set(E,[]),U.push(E)),Z.get(E).push(zt)});let pt=[];U.forEach(zt=>{let E=Z.get(zt);for(let O=0;O<E.length;O+=N)pt.push({tag:zt,list:E.slice(O,O+N),first:O===0})});let Wt=[];it.forEach(zt=>dx.forEach(E=>Wt.push([B[zt],E])));let at=new Set;pt.forEach((zt,E)=>{let O=Wt[E];if(!O)return;let[K,vt]=O;at.add(K.x+","+K.z+","+vt);let bt=or+vt*Ec,wt=zt.list.map(Oe=>({t:.035+mt(Oe.url)*.04,h:.24+mt(Oe.url+"h")*.11,d:.17+mt(Oe.title||"x")*.05})),Ut=wt.reduce((Oe,De)=>Oe+De.t+.004,0),fe=Zn-.16,we=Ut>fe?fe/Ut:1,$e=-Zn/2+.08;if(zt.list.forEach((Oe,De)=>{let je=wt[De],qn=je.t*we,mi=J(K,$e+qn/2,bt+je.h/2+.002,-Jn/2+.03+je.d/2),gi=new Ge().setFromAxisAngle(new I(0,1,0),K.ry);V.push({link:Oe,tag:zt.tag,home:{p:mi,q:gi,s:new I(qn,je.h,je.d)},cur:{p:mi.clone(),q:gi.clone()},state:"shelf",from:null,t0:0,color:dd[Math.floor(mt(Oe.url+"c")*dd.length)]}),$e+=qn+.004}),zt.first){let Oe=new Bn({map:gt("#"+(zt.tag||Mt("untagged","no tag"))),toneMapped:!1}),De=new Ie(new un(.34,.085),Oe);De.position.copy(J(K,0,bt+.006,Jn/2+.006)),De.quaternion.setFromAxisAngle(new I(0,1,0),K.ry),De.position.y-=.035,De.userData.tag=zt.tag,i.add(De),_e.push(De)}}),rt.clear(),Wt.forEach(([zt,E],O)=>{if(at.has(zt.x+","+zt.z+","+E))return;let K=mt("o"+O);K<.55&&It(zt,E,K/.55)}),Rt=new Ie(rt.geometry(),s),i.add(Rt),Bt=new di(At,se,Math.max(1,V.length)),Bt.count=V.length,Bt.frustumCulled=!1,V.forEach((zt,E)=>{ct.compose(zt.home.p,zt.home.q,zt.home.s),Bt.setMatrixAt(E,ct),Bt.setColorAt(E,new he(zt.color))}),Bt.instanceColor&&(Bt.instanceColor.needsUpdate=!0),i.add(Bt)},xt={mode:"idle",open:-1,openT0:0,closing:!1,ring:null,ringT0:0,hover:null},Ct=document.createElement("div");Ct.className="book-tip",document.body.appendChild(Ct);let Dt=document.createElement("div");Dt.className="book-page",Dt.innerHTML='<div class="bp-left"><small class="bp-tag"></small><strong class="bp-title"></strong><span class="bp-host"></span><em class="bp-go"></em></div><div class="bp-right"><img alt=""><span class="bp-wait"></span></div>',document.body.appendChild(Dt);let le=Dt.querySelector("img"),F=Dt.querySelector(".bp-wait"),pe=N=>{try{return new URL(N).hostname.replace(/^www\./,"")}catch{return N}},Kt=(N,U)=>"https://s.wordpress.com/mshots/v1/"+encodeURIComponent(N)+"?w=800&h=600"+(U?"&r="+U:""),w=0,g=N=>{clearTimeout(w),le.classList.remove("ready"),F.textContent=Mt("loadingPreview","\u2026");let U=0,Z=()=>{le.onload=()=>{le.classList.add("ready"),F.textContent="",le.naturalWidth<600&&U<3&&(U++,w=setTimeout(Z,2500))},le.onerror=()=>{F.textContent=Mt("noPreview","No preview")},le.src=Kt(N,U)};Z()},H=(()=>{let N=new In,U=new Ei({color:7220522}),Z=new Bn({color:15722192}),pt=new In,Wt=new In,at=new dt(1,1.32,.03).translate(-.5,0,0),zt=new dt(1,1.32,.03).translate(.5,0,0),E=new dt(.96,1.26,.06).translate(-.49,0,.045),O=new dt(.96,1.26,.06).translate(.49,0,.045);return pt.add(new Ie(at,U),new Ie(E,Z)),Wt.add(new Ie(zt,U),new Ie(O,Z)),N.add(pt,Wt),N.visible=!1,i.parent.add(N),{g:N,left:pt,right:Wt,leather:U}})(),$=.16,tt=(N,U,Z)=>{let pt=V[N];U.copy(pt.cur.p).applyMatrix4(i.matrixWorld),i.getWorldQuaternion(Z).multiply(pt.cur.q)},Nt=(N,U,Z,pt=0)=>{U.set(0,pt,-N).applyQuaternion(e.quaternion).add(e.position),Z.copy(e.quaternion)},Lt=N=>N<.5?4*N*N*N:1-Math.pow(-2*N+2,3)/2,st=(N,U)=>{xt.open>=0&&lt(U),xt.open=N,xt.openT0=U,xt.closing=!1;let Z=V[N];Z.state="out",H.leather.color.set(Z.color),Dt.querySelector(".bp-tag").textContent="#"+(Z.tag||Mt("untagged","no tag")),Dt.querySelector(".bp-title").textContent=Z.link.title,Dt.querySelector(".bp-host").textContent=pe(Z.link.url),Dt.querySelector(".bp-go").textContent=Mt("bookGo","Click the book to visit \u2197"),g(Z.link.url),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!0);let pt=new I,Wt=new Ge;tt(N,pt,Wt),xt.openFrom={p:pt,q:Wt}},lt=N=>{xt.open<0||xt.closing||(xt.closing=!0,xt.openT0=N,Dt.classList.remove("show"),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!1))},Pt=(N,U)=>{if(xt.ring===N){ee(U);return}xt.ring!==null&&ee(U),xt.ring=N,xt.ringT0=U;let Z=0;V.forEach((pt,Wt)=>{pt.tag===N&&(pt.ringI=Z++,pt.state!=="out"&&(pt.state="toRing",pt.fromSc=pt.sc||1,pt.from={p:pt.cur.p.clone(),q:pt.cur.q.clone()},pt.t0=U+pt.ringI*45))}),xt.ringN=Z,window.MEOW_SOUND&&window.MEOW_SOUND.whoosh&&window.MEOW_SOUND.whoosh()},ee=N=>{xt.ring!==null&&(V.forEach(U=>{U.tag===xt.ring&&(U.state==="ring"||U.state==="toRing")&&(U.state="toShelf",U.fromSc=U.sc||1,U.from={p:U.cur.p.clone(),q:U.cur.q.clone()},U.t0=N+(U.ringI||0)*30)}),xt.ring=null)},Gt=new Ge,Vt=new Ge,ae=new I,ne=new I,Ee=(N,U,Z,pt)=>{let Wt=Math.max(1,xt.ringN),at=Math.max(15,Wt*1.3),zt=N.ringI/Wt*Math.PI*2+U*.12;ae.set(e.position.x+Math.cos(zt)*at,e.position.y-.4+Math.sin(U*1.3+N.ringI)*.25,e.position.z+Math.sin(zt)*at);let E=Math.atan2(e.position.x-ae.x,e.position.z-ae.z);return Vt.setFromEuler(new Cn(0,E-Math.PI/2,Math.sin(U*.9+N.ringI)*.08)),ne.copy(ae),i.worldToLocal(ne),Z.copy(ne),i.getWorldQuaternion(Gt).invert(),pt.copy(Gt).multiply(Vt),Z},G=2.2,kt=(N,U)=>{if(!Bt)return;let Z=!1,pt=new I,Wt=new Ge;if(V.forEach((at,zt)=>{if(at.state==="shelf")return;let E=1;if(at.state==="out"){Y.set(0,0,0),ct.compose(at.cur.p,at.cur.q,Y),Bt.setMatrixAt(zt,ct),Z=!0;return}if(at.state==="ring")Ee(at,N,at.cur.p,at.cur.q),E=G;else{let O=Math.max(0,Math.min(1,(U-at.t0)/900)),K=Lt(O),vt=at.state==="toRing"?Ee(at,N,pt,Wt):at.home.p,bt=at.state==="toRing"?Wt:at.home.q;at.cur.p.copy(at.from.p).lerp(vt,K),at.cur.p.y+=Math.sin(Math.PI*K)*.4*(at.state==="toRing"?1:.6),at.cur.q.copy(at.from.q).slerp(bt,K);let wt=at.fromSc||1;E=wt+((at.state==="toRing"?G:1)-wt)*K,O>=1&&(at.state==="toRing"?at.state="ring":(at.state="shelf",at.cur.p.copy(at.home.p),at.cur.q.copy(at.home.q),E=1))}Y.copy(at.home.s).multiplyScalar(E),ct.compose(at.cur.p,at.cur.q,Y),Bt.setMatrixAt(zt,ct),Z=!0,at.sc=E}),Z&&(Bt.instanceMatrix.needsUpdate=!0,Bt.boundingSphere=null),xt.open>=0){let at=V[xt.open],zt=Math.min(1,(U-xt.openT0)/(xt.closing?700:1100)),E=new I,O=new Ge;Nt(4.2,E,O,-.15);let K,vt;xt.closing?(K=1-Lt(Math.max(0,(zt-.35)/.65)),vt=1-Lt(Math.min(1,zt/.45))):(K=Lt(Math.min(1,zt/.6)),vt=Lt(Math.max(0,(zt-.45)/.55)));let bt=xt.openFrom;H.g.position.copy(bt.p).lerp(E,K),H.g.quaternion.copy(bt.q).slerp(O,K);let wt=(at.sc||1)*St,Ut=new I(at.home.s.z*wt,at.home.s.y*wt/1.32,at.home.s.z*wt),fe=new I(1.6,1.6,1.6);H.g.scale.copy(Ut).lerp(fe,K),H.left.rotation.y=Math.PI*(1-vt)*.999,H.right.rotation.y=0,H.g.visible=!0,!xt.closing&&zt>=1?(Ft(H.g,Dt),Dt.classList.add("show")):xt.closing||Dt.classList.remove("show"),xt.closing&&zt>=1&&(H.g.visible=!1,at.state=xt.ring===at.tag?"toRing":"toShelf",at.from={p:new I,q:new Ge},at.from.p.copy(H.g.position),i.worldToLocal(at.from.p),i.getWorldQuaternion(Gt).invert(),at.from.q.copy(Gt).multiply(H.g.quaternion),at.t0=U,at.fromSc=1,xt.open=-1,xt.closing=!1)}},St=4.5,D=new I,Ft=(N,U)=>{let Z=1e9,pt=1e9,Wt=-1e9,at=-1e9;[[-.97,.63],[.97,.63],[-.97,-.63],[.97,-.63]].forEach(([zt,E])=>{D.set(zt,E,.08).applyMatrix4(N.matrixWorld).project(e);let O=(D.x*.5+.5)*innerWidth,K=(-D.y*.5+.5)*innerHeight;Z=Math.min(Z,O),Wt=Math.max(Wt,O),pt=Math.min(pt,K),at=Math.max(at,K)}),U.style.left=Z+"px",U.style.top=pt+"px",U.style.width=Wt-Z+"px",U.style.height=at-pt+"px"},ut=N=>{if(!Bt)return null;if(xt.open>=0&&H.g.visible&&N.intersectObject(H.g,!0)[0])return{type:"open"};let U=N.intersectObject(Bt,!1)[0],Z=_e.length?N.intersectObjects(_e,!1)[0]:null;return Z&&(!U||Z.distance<U.distance)&&Z.distance<40?{type:"label",tag:Z.object.userData.tag}:U&&U.distance<45&&V[U.instanceId]&&V[U.instanceId].state!=="out"?{type:"book",i:U.instanceId}:null};return{sync(){let N=window.MEOW_LINKS_DATA||[],U=N.map(Z=>Z.url+"|"+Z.tag+"|"+Z.title).join(`
`);U!==$t&&($t=U,xe=N.slice(),xt.open=-1,xt.ring=null,H.g.visible=!1,Dt.classList.remove("show"),Yt())},update:kt,get busy(){return xt.open>=0||xt.ring!==null},hover(N,U){var Wt,at;let Z=U?ut(N):null,pt=Z?Z.type+((at=(Wt=Z.i)!=null?Wt:Z.tag)!=null?at:""):"";if(pt===xt.hoverKey)return!!Z;if(xt.hoverKey=pt,!Z||Z.type==="open")return Ct.classList.remove("show"),!!Z;if(Z.type==="book"){let zt=V[Z.i];Ct.innerHTML="";let E=document.createElement("strong");E.textContent=zt.link.title;let O=document.createElement("small");O.textContent="#"+(zt.tag||Mt("untagged","no tag"))+" \xB7 "+pe(zt.link.url),Ct.append(E,O)}else{let zt=V.filter(K=>K.tag===Z.tag).length;Ct.innerHTML="";let E=document.createElement("strong");E.textContent="#"+(Z.tag||Mt("untagged","no tag"))+"  \xB7  "+zt;let O=document.createElement("small");O.textContent=xt.ring===Z.tag?Mt("tagBack","Click: put them back"):Mt("tagRing","Click: books fly around you"),Ct.append(E,O)}return Ct.classList.add("show"),!0},click(N,U){let Z=ut(N);if(xt.open>=0&&!xt.closing){if(Z&&Z.type==="open"){let pt=V[xt.open];return window.open(pt.link.url,"_blank","noopener"),!0}if(lt(U),!Z||Z.type==="open")return!0}return Z?Z.type==="label"?(Pt(Z.tag,U),!0):Z.type==="book"?(st(Z.i,U),!0):!1:xt.ring!==null?(ee(U),!0):!1},back(N){return xt.open>=0&&!xt.closing?(lt(N),!0):xt.ring!==null?(ee(N),!0):!1},_open(N){st(N,performance.now())},_ring(N){Pt(N,performance.now())},get _n(){return V.length},reset(N){xt.open>=0&&lt(N),xt.ring!==null&&ee(N),Ct.classList.remove("show"),xt.hoverKey=""},lampLight:Et}}var Je={x:112,z:-119,y:4.5,yaw:-Math.PI/2,S:4.5};function pd({scene:i,shared:t,U:e,camera:n}){let s=Je.S,r=6.4,o=5,a=.17,l=.3145,c=8,u=2.62,f=1.9,h=-1.95,m=-.75,x=2.05,b=o/2+2.6,p=11,d={x:1.7,z:-2},y=new cn,C=new cn,M=new cn,A=new cn,T=(E,O,K)=>yn(E,O,K),P=(E,O=1)=>vn("wood",K=>{let vt=E*(.88+T(K.x*3,K.y*9,K.z*3)*.24)*O,bt=T(K.x*.7,K.y*2,K.z*.7);return[vt*(1.02+bt*.06),vt*(.79+bt*.03),vt*(.56-bt*.04)]}),_=E=>vn("log",(O,K)=>{if(E==="x"?Math.abs(K.x)>.9:Math.abs(K.z)>.9){let Ut=E==="x"?Math.hypot(O.y%1,O.z):Math.hypot(O.y%1,O.x),fe=.68+Math.sin(Ut*90)*.04;return[fe*1.02,fe*.86,fe*.66]}let bt=.5+T(O.x*2.5,O.y*8,O.z*2.5)*.2+Math.sin((E==="x"?O.x:O.z)*23)*.015,wt=T(Math.floor(O.y/.31)*3.7,E==="x"?1:2,.5);return wt<.25?[bt*.95,bt*.82,bt*.68]:wt>.75?[bt*1.08,bt*.8,bt*.52]:[bt,bt*.79,bt*.58]}),R=vn("stone",E=>{let O=.45+T(E.x*5,E.y*5,E.z*5)*.25,K=T(E.x*2,E.y*2,E.z*2);return[O*(.96+K*.08),O*.95,O*(.9+(1-K)*.08)]}),L=(E,O,K,vt)=>vt?vn(vt,()=>[E,O,K]):()=>[E,O,K],k=(E,O,K)=>vn("metal",()=>[E,O,K]),B=E=>vn("fabric",E),it=(E,O)=>K=>(E==="z"?(K.z-O)*Math.sign(O):(K.x-O)*Math.sign(O))>0?1:0,X={front:[[h,m,0,x],[.75,1.95,.95,1.95]],back:[],left:[],right:[[-.3,.9,.95,1.95]]},J=(E,O,K,vt)=>{let bt=[[E,O]];return vt.forEach(([wt,Ut,fe,we])=>{if(!(fe<K+a-.02&&we>K-a+.02))return;let $e=[];bt.forEach(([Oe,De])=>{Ut<=Oe||wt>=De?$e.push([Oe,De]):(wt>Oe&&$e.push([Oe,wt]),Ut<De&&$e.push([Ut,De]))}),bt=$e}),bt};for(let E=0;E<c;E++){let O=a+E*l,K=a+l/2+E*l;[["front",o/2],["back",-o/2]].forEach(([vt,bt])=>{J(-r/2-.3,r/2+.3,O,X[vt]).forEach(([wt,Ut])=>{y.add(new re(a,a*.97,Ut-wt,16,1),{m:z((wt+Ut)/2,O,bt,0,0,Math.PI/2),color:_("x"),tip:it("z",bt)})})}),K+a<u+.12&&[["left",-r/2],["right",r/2]].forEach(([vt,bt])=>{J(-o/2-.3,o/2+.3,K,X[vt]).forEach(([wt,Ut])=>{y.add(new re(a,a*.97,Ut-wt,16,1),{m:z(bt,K,(wt+Ut)/2,Math.PI/2,0,0),color:_("z"),tip:it("x",bt)})})})}for(let E=0;E<4;E++){let O=E<2?r:o,K=E<2?E?-o/2:o/2:E===2?-r/2:r/2;for(let vt=-O/2-.2;vt<O/2+.2;vt+=.42){if(E===0&&vt>h-.2&&vt<m)continue;let bt=.38+T(vt,E,0)*.08,wt=.16+T(vt,E,3)*.08,Ut=E<2?z(vt+.2,-.02+wt/2-.06,K,0,(T(vt,E,5)-.5)*.2,0,bt,wt,.42):z(K,-.02+wt/2-.06,vt+.2,0,(T(vt,E,5)-.5)*.2,0,.42,wt,bt);y.add(new dt(1,1,1),{m:Ut,color:R,tip:()=>1})}}y.add(new dt(m-h+.1,.08,.42),{m:z((h+m)/2,.06,o/2),color:P(.5),tip:()=>0}),[-1,1].forEach(E=>{let O=E*o/2,K=[-r/2-.05,u,O],vt=[r/2+.05,u,O],bt=[0,u+f,O],wt=vn("wood",Ut=>{let fe=.48+T(Ut.x*9,0,E)*.1,we=Math.abs((Ut.x+10)%.24-.12)<.012?.75:1;return[fe*we,fe*.8*we,fe*.6*we]});y.tris(E>0?[K,vt,bt]:[vt,K,bt],wt,()=>0),C.tris(E>0?[vt,K,bt]:[K,vt,bt],Ut=>{let fe=wt(Ut);return[fe[0]*.85,fe[1]*.85,fe[2]*.85]})});let Q=r/2+.6,et=f+.45,Tt=Math.atan2(et,Q),ft=Math.hypot(Q,et);[-1,1].forEach(E=>{y.add(new dt(ft,.1,o+1.3,3,1,6),{m:z(E*Q/2,u+f-et/2+.02,0,0,0,-E*Tt),color:P(.36),tip:(K,vt)=>vt.y>0?1:0});let O=9;for(let K=0;K<O;K++){let vt=K/O,bt=ft/O+.12,wt=E*(Q*(vt+.5/O)),Ut=u+f-et*(vt+.5/O)+.1;y.add(new dt(bt,.045,o+1.3,1,1,10),{m:z(wt,Ut,0,0,0,-E*(Tt+.05)),color:vn("shingle",fe=>{let we=Math.floor((fe.z+5)*3.3),$e=.3+T(we,K,E)*.12+K%2*.02;return[$e*1.02,$e*.9,$e*.8]}),tip:()=>1})}y.add(new dt(.05,.22,o+1.35),{m:z(E*(Q+.02),u+f-et-.02,0),color:P(.45),tip:()=>0}),[-1,1].forEach(K=>y.add(new dt(ft+.1,.22,.05),{m:z(E*Q/2,u+f-et/2+.02,K*(o/2+.66),0,0,-E*Tt),color:P(.45),tip:()=>0}))}),y.add(new dt(.34,.16,o+1.4),{m:z(0,u+f+.12,0,0,0,Math.PI/4),color:P(.32),tip:()=>1});for(let E=0;E<8;E++)y.add(new dt(.86+E%2*.04,.3,.86+(E+1)%2*.04),{m:z(d.x,u+.15+E*.3,d.z,0,(T(E,1,1)-.5)*.08,0),color:R,tip:()=>1});y.add(new dt(1.05,.08,1.05),{m:z(d.x,u+.15+8*.3-.06,d.z),color:R,tip:()=>1});let Et=new I(d.x,u+.2+8*.3,d.z),At=(E,O,K)=>{let vt=K==="front"?0:Math.PI/2,bt=(Oe,De,je)=>K==="front"?[E+Oe,O+De,o/2+je]:[r/2+je,O+De,E-Oe],wt=(Oe,De,je,qn,mi,gi,Es,os,ar=0)=>{let[Dn,v,W]=bt(mi,gi,Es);Oe.add(new dt(De,je,qn),{m:z(Dn,v,W,0,vt,0),color:os,tip:()=>ar})},Ut=P(.55);wt(y,1.32,.09,.4,0,.53,0,Ut),wt(y,1.32,.09,.4,0,-.53,0,Ut),wt(y,.09,1.1,.4,-.62,0,0,Ut),wt(y,.09,1.1,.4,.62,0,0,Ut),wt(y,.05,1,.06,0,0,0,Ut),wt(y,1.2,.05,.06,0,0,0,Ut),wt(y,1.45,.06,.3,0,-.6,.2,Ut,1),[-1,1].forEach(Oe=>wt(y,.55,1.05,.04,Oe*.98,0,.27,De=>{let je=.42+T(De.x*9,De.y*2,De.z*9)*.1,qn=Math.abs((De.y+5)%.14-.07)<.012?.75:1;return[je*.9*qn,je*.95*qn,je*.92*qn]}));let[fe,we,$e]=bt(0,0,0);A.add(new un(1.2,1),{m:z(fe,we,$e,0,vt,0),color:L(1,1,1)}),A.add(new un(1.2,1),{m:z(fe,we,$e,0,vt+Math.PI,0),color:L(1,1,1)}),[-1,1].forEach(Oe=>wt(C,.3,1.15,.03,Oe*.78,.02,-.24,De=>{let je=.78+Math.sin(De.x*60+De.z*60)*.04;return[je,je*.95,je*.86]})),wt(C,1.9,.03,.03,0,.62,-.24,L(.3,.25,.2))};At(1.35,1.45,"front"),At(.3,1.45,"right"),[[h-.05,.08],[m+.05,.08]].forEach(([E,O])=>y.add(new dt(O,x,.42),{m:z(E,x/2,o/2),color:P(.55),tip:()=>0})),y.add(new dt(m-h+.3,.12,.44),{m:z((h+m)/2,x+.05,o/2),color:P(.55),tip:()=>1});for(let E=0;E<11;E++){let O=-3.25+E*.6+.3;y.add(new dt(.57,.08,2.2),{m:z(O,.16,o/2+1.25,0,(T(E,2,2)-.5)*.01,0),color:P(.52+E%3*.04),tip:()=>1})}y.add(new dt(6.65,.14,.08),{m:z(.05,.1,o/2+2.36),color:P(.45),tip:()=>0}),y.add(new dt(1.4,.07,.3),{m:z((h+m)/2,.05,o/2+2.55),color:P(.5),tip:()=>1});let se=-3.4,Bt=.6;y.add(new dt(Bt-se,.08,2.55,4,1,4),{m:z((se+Bt)/2,2.32,o/2+1.3,-.12,0,0),color:(E,O)=>{let K=(O.y<0?.62:.32)+T(E.x*3,0,E.z*9)*.1;return O.y<0?[K,K*.8,K*.6]:[K,K*.93,K*.88]},tip:(E,O)=>O.y>0?1:0}),[se+.25,Bt-.25].forEach(E=>{y.add(new dt(.14,2.2,.14),{m:z(E,1.1,o/2+2.2),color:P(.5),tip:()=>0}),y.add(new dt(.08,.7,.08),{m:z(E,1.95,o/2+1.95,.75,0,0),color:P(.5),tip:()=>0})}),y.add(new dt(Bt-se,.14,.14),{m:z((se+Bt)/2,2.12,o/2+2.2),color:P(.45),tip:()=>1}),y.add(new dt(1.4,.06,.4),{m:z(1.45,.47,o/2+.48),color:P(.55),tip:()=>1}),[[.85],[2.05]].forEach(([E])=>y.add(new dt(.06,.3,.36),{m:z(E,.32,o/2+.48),color:P(.45),tip:()=>0})),y.add(new dt(.04,.04,.3),{m:z(-.5,2,o/2+.3),color:k(.15,.15,.15),tip:()=>0}),y.add(new dt(.2,.04,.2),{m:z(-.5,1.98,o/2+.42),color:k(.15,.15,.15),tip:()=>1}),M.add(new dt(.15,.22,.15),{m:z(-.5,1.84,o/2+.42),color:L(1,1,1)}),y.add(new re(.32,.29,.85,14),{m:z(r/2+.55,.42,o/2-.45),color:E=>{let O=.45+Math.sin(Math.atan2(E.z,E.x)*14)*.03;return[O,O*.8,O*.6]},tip:(E,O)=>O.y>.5?1:0}),[.12,.72].forEach(E=>y.add(new re(.33,.33,.04,14,1,!0),{m:z(r/2+.55,E,o/2-.45),color:k(.2,.2,.21),tip:()=>0}));for(let E=0;E<4;E++)for(let O=0;O<9-E;O++){let K=-1.6+O*.19+E*.09,vt=.11+E*.18;y.add(new re(.09+T(O,E,1)*.03,.1,.7,7),{m:z(-r/2-.58,vt,K,0,0,Math.PI/2),color:(bt,wt)=>Math.abs(wt.x)>.9?[.74,.6,.42]:P(.45)(bt),tip:()=>1})}y.add(new re(.3,.34,.5,10),{m:z(-r/2-1.4,.25,1.4),color:(E,O)=>O.y>.5?[.7,.58,.42]:P(.45)(E),tip:(E,O)=>O.y>.5?1:0}),y.add(new re(.025,.03,.75,6),{m:z(-r/2-1.3,.75,1.4,0,0,-.55),color:P(.62),tip:()=>0}),y.add(new dt(.2,.12,.03),{m:z(-r/2-1.48,.52,1.4,0,0,-.55),color:k(.35,.36,.38),tip:()=>0});for(let E=0;E<p/.5;E++)y.add(new dt(1.8,.08,.44),{m:z(-1.3+(E*7%5-2)*.01,.2-E*.012,b+E*.5,0,(E*3%5-2)*.012,0),color:P(.5+E*11%9/60),tip:()=>1});for(let E=0;E<=p/2.2;E++)[-1,1].forEach(O=>{y.add(new re(.09,.09,2.6,6),{m:z(-1.3+O*.85,-1.1-E*.03,b+E*2.2),color:P(.36),tip:()=>0})});[-1,1].forEach(E=>{y.add(new re(.06,.06,1.3,6),{m:z(-1.3+E*.85,.85,b+p-.4),color:P(.36),tip:()=>0}),M.add(new dt(.16,.2,.16),{m:z(-1.3+E*.85,1.6,b+p-.4),color:L(1,1,1)})});for(let E=0;E<c-1;E++){let O=a+E*l+l/2;[["front",o/2],["back",-o/2]].forEach(([K,vt])=>J(-r/2+.05,r/2-.05,O,X[K]).forEach(([bt,wt])=>{y.add(new dt(wt-bt,.035,.02),{m:z((bt+wt)/2,O,vt+Math.sign(vt)*(a-.03)),color:Ut=>{let fe=.72+T(Ut.x*9,Ut.y*30,0)*.12;return[fe,fe*.95,fe*.86]},tip:()=>1})})),[["left",-r/2],["right",r/2]].forEach(([K,vt])=>J(-o/2+.05,o/2-.05,O+l/2,X[K]).forEach(([bt,wt])=>{y.add(new dt(.02,.035,wt-bt),{m:z(vt+Math.sign(vt)*(a-.03),O+l/2,(bt+wt)/2),color:Ut=>{let fe=.72+T(0,Ut.y*30,Ut.z*9)*.12;return[fe,fe*.95,fe*.86]},tip:()=>1})}))}[-1,1].forEach(E=>y.add(new re(.06,.06,o+1.3,8,1,!0,0,Math.PI),{m:z(E*(Q+.06),u+f-et-.14,0,Math.PI/2,0,E>0?Math.PI:0),color:k(.4,.4,.42),tip:()=>0})),y.add(new re(.035,.035,u+f-et-.2,8),{m:z(r/2+.6,(u+f-et)/2+.4,o/2-.45-.05),color:k(.4,.4,.42),tip:()=>0}),y.add(new re(.015,.02,.7,6),{m:z(0,u+f+.5,-1.4),color:k(.18,.18,.19),tip:()=>0}),y.add(new dt(.02,.02,.5),{m:z(0,u+f+.62,-1.4),color:k(.18,.18,.19),tip:()=>0}),y.add(new fn(.05,.1,4),{m:z(0,u+f+.62,-1.15,Math.PI/2,0,0),color:k(.18,.18,.19),tip:()=>0});{let E=(O,K,vt,bt,wt=1,Ut=1,fe=1,we=0)=>y.add(O,{m:z(0,u+f+.88+vt,-1.4+bt,0,Math.PI/2,we,wt,Ut,fe),color:k(.16,.16,.17),tip:()=>0});E(new dt(.28,.13,.02),0,0,0),E(new dt(.11,.1,.02),0,.11,-.13),[-1,1].forEach(O=>E(new fn(.03,.06,3),0,.19,-.13+O*.035)),E(new dt(.03,.2,.02),0,.12,.16,1,1,1,.4)}let _e=(E,O,K)=>{let vt=new Ae().compose(new I(E,.82,O),new Ge().setFromAxisAngle(new I(0,1,0),K),new I(1,1,1));y.add(new dt(1.3,.2,.24),{m:vt.clone().multiply(z(0,0,.12)),color:P(.45),tip:()=>0}),y.add(new dt(1.24,.02,.2),{m:vt.clone().multiply(z(0,.09,.12)),color:()=>[.25,.18,.12],tip:()=>1});let bt=[[.75,.3,.3],[.85,.7,.35],[.75,.62,.8],[.9,.88,.85]];for(let wt=0;wt<9;wt++){let Ut=-.55+wt*.14,fe=.1+T(wt,E,1)*.1;y.add(new re(.006,.006,fe,4),{m:vt.clone().multiply(z(Ut,.1+fe/2,.12+(wt%2-.5)*.08)),color:()=>[.3,.42,.24],tip:()=>0}),y.add(new pn(.03,6,5),{m:vt.clone().multiply(z(Ut,.1+fe,.12+(wt%2-.5)*.08)),color:()=>bt[wt%4],tip:()=>0})}};_e(1.35,o/2+.2,0),_e(r/2+.2,-.3,Math.PI/2),y.add(new dt(1,.015,.6),{m:z((h+m)/2,.205,o/2+.55),color:B(E=>Math.floor((E.x+9)*12)%2?[.42,.33,.22]:[.5,.4,.27]),tip:()=>1}),y.add(new re(.015,.015,1.2,6),{m:z(h-.3,.8,o/2+.25,.08,0,.12),color:P(.6),tip:()=>0}),y.add(new fn(.12,.3,8),{m:z(h-.24,.32,o/2+.24),color:()=>[.68,.58,.36],tip:()=>0}),[[-2.9,0],[-2.75,.32]].forEach(([E,O],K)=>{y.add(new dt(.48,.32,.4),{m:z(E,.36+O,o/2+1.9,0,K*.3,0),color:vt=>{let bt=.55+(Math.abs((vt.y+9)*9%1-.5)<.1?-.1:0)+T(vt.x*9,vt.y,vt.z*9)*.08;return[bt,bt*.84,bt*.62]},tip:(vt,bt)=>bt.y>.5?1:0})}),y.add(new re(.05,.06,1.7,8),{m:z(Bt+.6,.85,o/2+2.9),color:P(.4),tip:()=>0}),y.add(new dt(.2,.05,.2),{m:z(Bt+.6,1.72,o/2+2.9),color:k(.15,.15,.15),tip:()=>1}),M.add(new dt(.15,.2,.15),{m:z(Bt+.6,1.84,o/2+2.9),color:()=>[1,1,1]}),y.add(new fn(.15,.12,4),{m:z(Bt+.6,2,o/2+2.9,0,Math.PI/4,0),color:k(.15,.15,.15),tip:()=>1});for(let E=0;E<6;E++){let O=(h+m)/2-1.6-E*.65+Math.sin(E*1.7)*.2,K=o/2+2.9+E*.35;y.add(new re(.28+T(E,3,3)*.1,.3,.06,9),{m:z(O,0,K,0,E,0,1,1,.8),color:R,tip:()=>1})}let xe=r/2-a,$t=o/2-a;for(let E=-xe,O=0;E<xe-.01;E+=.2,O++){let K=vn("wood",wt=>{let Ut=(.5+O%4*.025)*(.92+T(wt.x*4,0,wt.z*1.2)*.16)*(Math.abs((wt.z+9+O*.37)%1.6-.8)<.01?.7:1);return[Ut,Ut*.8,Ut*.6]}),vt=E+.1;(vt>oe.x0&&vt<oe.x1?[[-$t-.05,oe.bottom],[oe.top,$t+.05]]:[[-$t-.05,$t+.05]]).forEach(([wt,Ut])=>{Ut-wt>.02&&C.add(new dt(.195,.06,Ut-wt),{m:z(vt,.09,(wt+Ut)/2),color:K})})}for(let E=oe.bottom;E<=1.5;E+=.55)C.add(new dt(.05,.9,.05),{m:z(oe.x0-.02,.57,E),color:P(.5)});C.add(new dt(.07,.06,1.5-oe.bottom+.05),{m:z(oe.x0-.02,1.04,(oe.bottom+1.5)/2),color:P(.55)}),C.add(new dt(oe.x1-oe.x0+.05,.06,.07),{m:z((oe.x0+oe.x1)/2,1.04,oe.bottom-.02),color:P(.55)}),[oe.x0+.5,oe.x1-.03].forEach(E=>C.add(new dt(.05,.9,.05),{m:z(E,.57,oe.bottom-.02),color:P(.5)})),C.add(new dt(.03,.16,.36),{m:z(oe.x0-.05,.86,1.5),color:P(.62)}),C.add(new re(.17,.17,.04,24),{m:z(-.4,1.8,$t-.03,Math.PI/2,0,0),color:P(.45)}),C.add(new re(.14,.14,.01,24),{m:z(-.4,1.8,$t-.055,Math.PI/2,0,0),color:vn("paper",()=>[.9,.87,.8])}),C.add(new dt(.008,.1,.006),{m:z(-.4,1.83,$t-.065,0,0,.5),color:()=>[.1,.1,.1]}),C.add(new dt(.008,.12,.006),{m:z(-.4,1.84,$t-.066,0,0,-1.9),color:()=>[.1,.1,.1]}),C.add(new re(.015,.015,1.5,6),{m:z(d.x,1.62,-$t+.62,0,0,Math.PI/2),color:k(.2,.2,.2)}),[-.5,-.1,.35].forEach((E,O)=>{C.add(new re(.1-O*.015,.08-O*.012,.13,12),{m:z(d.x+E,1.42,-$t+.64),color:k(.62,.36,.22)}),C.add(new re(.008,.008,.14,4),{m:z(d.x+E,1.55,-$t+.64),color:k(.2,.2,.2)})}),C.add(new pn(.12,12,8),{m:z(d.x-.7,.31,-$t+.75,0,0,0,1,.8,1),color:k(.2,.2,.22)}),C.add(new re(.015,.03,.12,6),{m:z(d.x-.58,.36,-$t+.75,0,0,-.9),color:k(.2,.2,.22)}),[[-.6,.14],[-.5,.2],[.55,.1]].forEach(([E,O])=>C.add(new re(.025,.025,O,8),{m:z(d.x+E,1.52+O/2,-$t+.4),color:()=>[.9,.86,.76]})),[[.1,[.4,.2,.18]],[.16,[.24,.3,.36]],[.21,[.5,.45,.32]]].forEach(([E,O])=>C.add(new dt(.05,.22,.16),{m:z(d.x+E,1.63,-$t+.4),color:()=>O})),C.add(new dt(.9,.012,.6),{m:z(-2,.126,-.85),color:B(E=>Math.floor((E.x+3)*8)%2?[.62,.56,.46]:[.4,.42,.38])}),C.add(new dt(2.3,.014,1.55),{m:z(.55,.127,.5),color:B(E=>{let O=Math.floor(Math.abs(E.x-.55)/.17)%3;return Math.abs(E.x-.55)>1.05||Math.abs(E.z-.5)>.68?[.32,.2,.17]:O===0?[.58,.26,.2]:O===1?[.8,.7,.52]:[.28,.36,.38]})}),[-1.1,1.1].forEach(E=>C.add(new dt(r-.2,.2,.2),{m:z(0,u-.02,E),color:P(.42)})),C.add(new dt(.2,.22,o+.2),{m:z(0,u+f-.2,0),color:P(.42)}),[-1,1].forEach(E=>[-1.8,0,1.8].forEach(O=>C.add(new dt(ft-.6,.14,.1),{m:z(E*(Q-.3)/2,u+f-et*.47-.1,O,0,0,-E*Tt),color:P(.4)})));let ct=d;C.add(new dt(1.95,.12,1),{m:z(ct.x,.17,-$t+.5),color:R}),[-1,1].forEach(E=>C.add(new dt(.36,1.25,.7),{m:z(ct.x+E*.76,.85,-$t+.35),color:R})),C.add(new dt(1.2,1.25,.2),{m:z(ct.x,.85,-$t+.1),color:E=>{let O=R(E);return[O[0]*.45,O[1]*.42,O[2]*.4]}}),C.add(new dt(2,.16,.42),{m:z(ct.x,1.44,-$t+.4),color:P(.42)});for(let E=0;E<4;E++)C.add(new dt(1.3-E*.04,.3,.55),{m:z(ct.x,1.67+E*.3,-$t+.27),color:R});[[-.2,.3],[.15,-.25],[0,.05]].forEach(([E,O])=>C.add(new re(.07,.08,.7,7),{m:z(ct.x+E*.4,.3,-$t+.42,0,O,Math.PI/2),color:(K,vt)=>Math.abs(vt.x)>.8?[.2,.15,.1]:[.18,.13,.1]})),M.add(new dt(.9,.05,.45),{m:z(ct.x,.25,-$t+.42),color:L(1,.62,.3)}),C.add(new re(.28,.24,.32,10,1,!0),{m:z(ct.x-1.25,.28,-$t+.35),color:P(.5)});for(let E=0;E<5;E++)C.add(new re(.05,.05,.55,6),{m:z(ct.x-1.25+(E-2)*.08,.42+E%2*.04,-$t+.35,.2*(E-2),0,Math.PI/2+.1),color:P(.5)});let _t=-xe+.02,yt=_t+1.95,Y=-$t+.02,V=Y+1,mt=(_t+yt)/2,Mt=(Y+V)/2;[[_t+.05,Y+.05,.9],[_t+.05,V-.05,.9],[yt-.05,Y+.05,.6],[yt-.05,V-.05,.6]].forEach(([E,O,K])=>C.add(new dt(.09,K,.09),{m:z(E,.12+K/2,O),color:P(.45)})),C.add(new dt(.06,.45,V-Y-.1),{m:z(_t+.05,.75,Mt),color:P(.5)}),C.add(new dt(yt-_t,.12,V-Y),{m:z(mt,.36,Mt),color:P(.45)}),C.add(new dt(yt-_t-.1,.16,V-Y-.08),{m:z(mt,.5,Mt),color:L(.86,.84,.78,"fabric")}),C.add(new dt(1.3,.05,V-Y+.04),{m:z(yt-.68,.6,Mt),color:B(E=>{let O=(Math.floor(E.x*6)+Math.floor(E.z*6))%2;return Math.abs(E.x*6%1-.5)<.06||Math.abs(E.z*6%1-.5)<.06?[.82,.74,.5]:O?[.48,.18,.16]:[.36,.2,.2]})}),C.add(new dt(.08,.25,V-Y+.04),{m:z(yt-.03,.5,Mt),color:L(.46,.2,.18,"fabric")});let gt=new pn(1,12,8);C.add(gt,{m:z(_t+.32,.64,Mt,0,0,0,.2,.08,.36),color:L(.92,.9,.86,"fabric")}),C.add(new dt(.7,.42,.42),{m:z(yt+.45,.33,Y+.25),color:P(.5)}),C.add(new dt(.72,.05,.44),{m:z(yt+.45,.4,Y+.25),color:k(.25,.25,.26)});let rt={x:.9,z:.6};C.add(new dt(1.3,.06,.85),{m:z(rt.x,.88,rt.z),color:P(.55)}),[[-.58,-.36],[.58,-.36],[-.58,.36],[.58,.36]].forEach(([E,O])=>C.add(new dt(.07,.73,.07),{m:z(rt.x+E,.48,rt.z+O),color:P(.45)})),[-1,1].forEach(E=>{let O=rt.z+E*.68;C.add(new dt(.44,.05,.42),{m:z(rt.x,.58,O),color:P(.5)}),[[-.18,-.17],[.18,-.17],[-.18,.17],[.18,.17]].forEach(([K,vt])=>C.add(new dt(.045,.46,.045),{m:z(rt.x+K,.35,O+vt),color:P(.45)})),C.add(new dt(.44,.5,.04),{m:z(rt.x,.85,O+E*.2),color:P(.5)})}),M.add(new dt(.12,.16,.12),{m:z(rt.x+.35,1,rt.z-.15),color:L(1,1,1)}),C.add(new dt(.16,.03,.16),{m:z(rt.x+.35,.92,rt.z-.15),color:k(.15,.15,.15)}),C.add(new dt(.14,.03,.14),{m:z(rt.x+.35,1.09,rt.z-.15),color:k(.15,.15,.15)}),C.add(new re(.045,.04,.1,10),{m:z(rt.x-.3,.96,rt.z+.2),color:L(.75,.73,.7,"paper")}),C.add(new dt(.22,.04,.3),{m:z(rt.x-.25,.93,rt.z-.2,0,.3,0),color:L(.3,.36,.42)}),C.add(new re(.16,.1,.07,14,1,!0),{m:z(rt.x+.05,.95,rt.z+.15),color:P(.5)}),[[0,0],[.07,.05],[-.06,.05],[0,-.07]].forEach(([E,O],K)=>C.add(new pn(.055,10,7),{m:z(rt.x+.05+E,.99+(K===3?.04:0),rt.z+.15+O),color:L(.66,.66,.65)})),[1.35,1.75].forEach(E=>{C.add(new dt(.26,.04,1.3),{m:z(-xe+.14,E,.9),color:P(.5)}),C.add(new dt(.04,.16,.04),{m:z(-xe+.04,E-.1,.35),color:P(.4)}),C.add(new dt(.04,.16,.04),{m:z(-xe+.04,E-.1,1.45),color:P(.4)})}),[[.4,.08,.16,[.62,.66,.66]],[.6,.06,.12,[.6,.58,.5]],[.78,.07,.2,[.55,.6,.62]]].forEach(([E,O,K,vt])=>{C.add(new re(O,O,K,10),{m:z(-xe+.14,1.37+K/2,E),color:L(...vt)}),C.add(new re(O*.8,O*.8,.03,10),{m:z(-xe+.14,1.38+K,E),color:L(.45,.35,.25)})}),[[1,.24,[.45,.22,.2]],[1.06,.2,[.25,.32,.36]],[1.12,.26,[.4,.38,.28]],[1.18,.22,[.6,.55,.45]],[1.26,.19,[.3,.3,.32]]].forEach(([E,O,K],vt)=>{C.add(new dt(.18,O,.05),{m:z(-xe+.14,1.77+O/2,E,vt===4?.25:0,0,0),color:L(...K)})}),C.add(new re(.015,.015,.12,5),{m:z(-2.6,1.7,$t-.06,Math.PI/2,0,0),color:P(.4)}),C.add(new dt(.42,.85,.12),{m:z(-2.6,1.25,$t-.1),color:B(E=>{let O=.32+T(E.x*9,E.y*9,0)*.04;return[O*.85,O,O*.9]})}),[-2.7,-2.48].forEach(E=>{C.add(new dt(.11,.26,.13),{m:z(E,.25,$t-.2),color:L(.2,.16,.13)}),C.add(new dt(.11,.07,.26),{m:z(E,.155,$t-.26),color:L(.2,.16,.13)})}),C.add(new dt(.5,.38,.03),{m:z(-.25,1.6,-$t+.02),color:P(.4)}),C.add(new un(.4,.28),{m:z(-.25,1.6,-$t+.04),color:E=>E.y>1.6?[.7,.72,.74]:[.4,.45,.4]});let It=new cn,Rt=m-h-.04;for(let E=0;E<5;E++)It.add(new dt(Rt/5-.008,x-.04,.06),{m:z(.02+Rt/10+E*Rt/5,(x-.04)/2,0),color:P(.5+E%2*.04),tip:()=>0});[.35,x-.4].forEach(E=>It.add(new dt(Rt-.1,.12,.04),{m:z(.02+Rt/2,E,-.05),color:P(.46),tip:()=>0})),It.add(new dt(.1,Math.hypot(Rt-.2,x-.95),.04),{m:z(.02+Rt/2,x/2-.02,-.05,0,0,Math.atan2(Rt-.2,x-.95)),color:P(.46),tip:()=>0}),[.06,-.08].forEach(E=>It.add(new re(.02,.02,.14,6),{m:z(Rt-.1,1,E),color:k(.18,.18,.19),tip:()=>0})),[.3,x-.3].forEach(E=>It.add(new dt(.4,.05,.075),{m:z(.22,E,0),color:k(.18,.18,.19),tip:()=>0}));let Yt=new cn;Yt.add(new pn(1,14,6,0,Math.PI*2,Math.PI/2,Math.PI/2),{m:z(0,0,0,0,0,0,1.25,.42,.5),color:E=>E.y>-.05?[.55,.4,.28]:[.4,.3,.22],tip:()=>1}),Yt.add(new dt(.16,.05,.9),{m:z(.1,-.08,0),color:L(.5,.4,.3),tip:()=>1}),Yt.add(new dt(.16,.05,.75),{m:z(-.6,-.08,0),color:L(.5,.4,.3),tip:()=>1}),Yt.add(new re(.025,.025,2.2,5),{m:z(.2,0,.1,0,.3,1.45),color:L(.55,.45,.32),tip:()=>0});let xt={value:1},Ct=ei({...t,uFrost:{value:0}},xt,{color:13812656,snowMask:!0,snowBias:.12,grain:.022,rich:!0}),Dt=ei({...t,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0}},xt,{color:14865600,grain:.018,rich:!0,indoor:!0}),le=ei({...t,uFrost:{value:0}},xt,{color:13812656,snowMask:!0,side:Xn,rich:!0,grain:.02}),F=new Bn({color:1315860}),pe=new Bn({color:11122624,transparent:!0,opacity:.16,depthWrite:!1}),Kt=new In;Kt.position.set(Je.x,Je.y,Je.z),Kt.rotation.y=Je.yaw,Kt.scale.setScalar(s);let w=new Ie(y.geometry(),Ct);w.castShadow=!0,w.receiveShadow=!0;let g=new Ie(C.geometry(),Dt);g.receiveShadow=!0;let H=new Ie(M.geometry(),F),$=new Ie(A.geometry(),pe);$.renderOrder=2;let tt=new Ie(It.geometry(),Ct);tt.castShadow=!0;let Nt=new In;Nt.position.set(h+.02,.1,o/2),Nt.add(tt);let Lt=new Ie(Yt.geometry(),le);Lt.castShadow=!0,Lt.position.set(.9,0,b+p-2.5),Lt.rotation.y=.12;let st=new Bn({color:16752704,transparent:!0,opacity:.85,blending:Oi,depthWrite:!1}),lt=[[-.18,.28],[.12,.34],[0,.42],[.25,.22]].map(([E,O])=>{let K=new Ie(new fn(.09,1,7,1,!0).translate(0,.5,0),st);return K.position.set(d.x+E,.3,-$t+.42),K.userData.h=O,Kt.add(K),K});Kt.add(w,g,H,$,Nt,Lt),i.add(Kt),Kt.updateMatrixWorld(!0);let Pt=fd({group:Kt,mats:{inn:Dt,glow:F},camera:n,U:e}),ee=new Fi(16752728,0,46,1.4);ee.position.copy(new I(d.x,.9,-$t+1.1)).applyAxisAngle(new I(0,1,0),Je.yaw).multiplyScalar(s).add(Kt.position),i.add(ee);let Gt=ee.position.clone(),Vt=(()=>{let O=new on,K=new Float32Array(90*3),vt=new Float32Array(90);for(let Ut=0;Ut<90;Ut++)vt[Ut]=Ut/90;O.setAttribute("position",new dn(K,3)),O.setAttribute("aSeed",new dn(vt,1));let bt=new an({transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new he(13224393)},uSize:{value:70}},vertexShader:`
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
        }`}),wt=new ms(O,bt);return wt.frustumCulled=!1,wt.position.copy(Kt.localToWorld(Et.clone())),i.add(wt),wt})(),ae=(E,O)=>{let K=(E-Je.x)/s,vt=(O-Je.z)/s,bt=Math.cos(Je.yaw),wt=Math.sin(Je.yaw);return[K*bt-vt*wt,K*wt+vt*bt]},ne=(E,O)=>{let K=Math.cos(Je.yaw),vt=Math.sin(Je.yaw);return[Je.x+(E*K+O*vt)*s,Je.z+(-E*vt+O*K)*s]},Ee=[[-r/2-.3,r/2+.3,-o/2-a,-o/2+a],[-r/2-a,-r/2+a,-o/2-.3,o/2+.3],[r/2-a,r/2+a,-o/2-.3,o/2+.3],[-r/2-.3,h,o/2-a,o/2+a],[m,r/2+.3,o/2-a,o/2+a],[_t,yt,Y,V],[yt+.08,yt+.82,Y,Y+.5],[rt.x-.65,rt.x+.65,rt.z-.43,rt.z+.43],[rt.x-.25,rt.x+.25,rt.z-.95,rt.z-.45],[rt.x-.25,rt.x+.25,rt.z+.45,rt.z+.95],[ct.x-1,ct.x+1,-$t-.1,-$t+1],[ct.x-1.55,ct.x-.95,-$t,-$t+.65],[-xe,-xe+.3,.25,1.55],[.8,2.15,o/2+.26,o/2+.7],[-r/2-.95,-r/2-.2,-1.75,0],[r/2+.2,r/2+.9,o/2-.8,o/2-.1],[-r/2-1.75,-r/2-1.05,1.05,1.75],[se+.15,se+.35,o/2+2.1,o/2+2.3],[Bt-.35,Bt-.15,o/2+2.1,o/2+2.3]];Ee.push([oe.x0-.07,oe.x0+.02,oe.bottom-.05,1.5],[oe.x0,oe.x1,oe.bottom-.09,oe.bottom],[-3.2,-2.5,o/2+1.65,o/2+2.15],[Bt+.5,Bt+.7,o/2+2.8,o/2+3]);let G={x:-.4,z:-2.6},kt=[[qt.x0-1,qt.x1+1,qt.z0-1,qt.z0+.45],[qt.x0-1,qt.x0+.45,qt.z0-1,qt.z1+1],[qt.x1-.45,qt.x1+1,qt.z0-1,qt.z1+1],[qt.x0-1,qt.x1+1,qt.z1-.02,qt.z1+1],[oe.x0-.06,oe.x1+.06,-.6,qt.z1],[G.x-.95,G.x+.95,G.z-.48,G.z+.48],[G.x-.27,G.x+.27,G.z+.5,G.z+1.05],[-4.1,-3.1,-5.7,-4.7],[-1.5,-.5,-6.9,-5.9],[-2.75,-2.05,-6.35,-5.65],[-4.8,-4.4,-6.6,-6.2],[.86,1.54,-4.34,-3.66],[-6.1,-5.5,1.7,2.4],[4.25,4.95,qt.z0+.42,qt.z0+1]],St=[h,m,o/2-.1,o/2+.1],D=[h-.06,h+.08,o/2-Rt-.05,o/2],Ft=(E,O,[K,vt,bt,wt],Ut)=>E>K-Ut&&E<vt+Ut&&O>bt-Ut&&O<wt+Ut,ut={open:!1,a:0,from:0,t0:-1e9},N=ne((h+m)/2,o/2),U=E=>E.feet===void 0?1e9:(E.feet-Je.y)/s,Z=E=>E>-.7?"ground":E<-3.2?"study":"stairs",pt=(E,O)=>E>oe.x0&&E<oe.x1&&O>oe.bottom&&O<oe.top,Wt=(E,O)=>E>qt.x0&&E<qt.x1&&O>qt.z0&&O<qt.z1,at=(E,O)=>E>-r/2+a-.05&&E<r/2-a+.05&&O>-o/2+a&&O<o/2+a+.05,zt=(E,O,K,vt)=>{let bt=[ne(E,K),ne(O,K),ne(E,vt),ne(O,vt)];return[Math.min(...bt.map(wt=>wt[0])),Math.max(...bt.map(wt=>wt[0])),Math.min(...bt.map(wt=>wt[1])),Math.max(...bt.map(wt=>wt[1]))]};return{group:Kt,study:Pt,feet:void 0,holeBox:zt(-r/2+a,r/2-a,-o/2+a,o/2-a),studyBox:zt(qt.x0-.3,qt.x1+.3,qt.z0-.3,qt.z1+.3),blocked(E,O,K=0){let[vt,bt]=ae(E,O);if(Math.abs(vt)>qt.x1+3||bt<qt.z0-3||bt>o/2+4)return!1;let wt=.17+K/s,Ut=Z(U(this));if(Ut==="stairs")return vt<oe.x0+wt||vt>oe.x1-wt||bt>oe.top+.05;if(Ut==="study"){if(!Wt(vt,bt))return!0;for(let fe of kt)if(Ft(vt,bt,fe,wt))return!0;return!1}if(Math.abs(vt)>r/2+3||bt<-o/2-3)return!1;for(let fe of Ee)if(Ft(vt,bt,fe,wt))return!0;return!!(ut.a<.5?Ft(vt,bt,St,wt):Ft(vt,bt,D,wt*.6))},inside(E,O){let[K,vt]=ae(E,O);return Math.abs(K)<r/2&&Math.abs(vt)<o/2||Wt(K,vt)&&U(this)<-1},floorAt(E,O){let[K,vt]=ae(E,O),bt=we=>Je.y+we*s,wt=U(this),Ut=[];if(pt(K,vt)?Ut.push([Ss(vt),!0]):at(K,vt)&&Ut.push([.12,!0]),Wt(K,vt)&&Ut.push([qt.floor,!0]),K>-3.3&&K<3.4&&vt>=o/2+a+.05&&vt<o/2+2.4&&Ut.push([.2,!1]),K>-2.25&&K<-.35&&vt>b-.3&&vt<b+p&&Ut.push([.24-(vt-b)*.024,!1]),!Ut.length)return null;let fe=null;for(let we of Ut)we[0]<=wt+.6&&(!fe||we[0]>fe[0])&&(fe=we);return fe||(fe=Ut.reduce((we,$e)=>$e[0]<we[0]?$e:we)),{y:bt(fe[0]),under:fe[1]}},door:{mesh:tt,near(E,O){return Math.hypot(E-N[0],O-N[1])<13},get open(){return ut.open},canToggle(E,O){if(!ut.open)return!0;let[K,vt]=ae(E,O);return!Ft(K,vt,[h-.1,m+.1,o/2-Rt-.1,o/2+.25],.17)},toggle(E){return ut.open=!ut.open,ut.from=ut.a,ut.t0=E,ut.open}},update(E,O,K,vt){let bt=E.pCabin,wt=bt>.01;wt&&(this.syncT>K-1500||(this.syncT=K,Pt.sync()),Pt.update(O,K)),Pt.lampLight.intensity=wt?120*(.96+.04*Math.sin(O*3.1)):0,Kt.visible=wt,Vt.visible=wt&&bt>.5,Kt.scale.setScalar(s*Math.max(.001,bt));let Ut=Math.min(1,(K-ut.t0)/900),fe=ut.open?1-Math.pow(1-Ut,3)*Math.cos(Ut*3.2):1-Math.pow(1-Ut,4);ut.a=ut.from+((ut.open?1:0)-ut.from)*fe,Nt.rotation.y=ut.a*1.72;let we=Math.min(1,E.pGlow),$e=.86+.08*Math.sin(O*9.1+Math.sin(O*2.7)*2)+.06*Math.sin(O*23.3);F.color.setRGB(.07,.07,.075).lerp(new he(1.3,.8,.42),we*$e),lt.forEach((Oe,De)=>{let je=Oe.userData.h*(.75+.35*Math.sin(O*(7+De*1.7)+De*2)*Math.sin(O*(3.1+De)));Oe.scale.set(1,Math.max(.05,je*we),1),Oe.visible=we>.05}),st.opacity=.75*we,ee.intensity=we*bt*220*$e,ee.position.set(Gt.x+Math.sin(O*5.3)*.15,Gt.y+Math.sin(O*7.1)*.1,Gt.z),Vt.material.uniforms.uColor.value.copy(E.fog).multiplyScalar(1.1).addScalar(.05),Vt.material.uniforms.uOpacity.value=Math.min(bt,.35+we*.5),Lt.position.y=(vt+.9+Math.sin(O*.9)*.15-Je.y)/s,Lt.rotation.z=Math.sin(O*.7)*.03}}}var md={rain:[1,1,1,1,1,1,.65,0,0,1,0,0,.75],frost:[1,1,0,.85,.7,1,.25,1,0,0,1,.55,0],mist:[1,1,1,1,1,1,.35,0,0,0,0,0,1],snow:[1,1,0,.3,.45,1,.6,0,0,0,1,1,0],night:[1,1,.9,1,1,1,1,0,0,0,0,0,.5],aurora:[1,1,0,.6,.6,1,1,1,0,0,.8,.75,0],ocean:[1,0,0,.7,0,0,0,0,1,0,0,0,.3]},bc=["pRocks","pLogs","pFerns","pGrass","pReeds","pCabin","pGlow","pStones","pStacks","pRipples","pFrost","pSnowCover","pMoss"];function gd({scene:i,heightAt:t,U:e,snowColor:n,clear:s=[],camera:r}){let o=hd(20260707),a=(Y,V)=>Y+o()*(V-Y),l={uTime:e.uTime,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0},uSnowC:n,uMossC:{value:new he("#4f6a3c")}},c={};bc.forEach(Y=>{c[Y]={value:0}});let u=[],f=[],h=[],m=(Y,V)=>Math.hypot(t(Y+2,V)-t(Y-2,V),t(Y,V+2)-t(Y,V-2))/(2*2),x=(Y,V,mt,Mt=1)=>{let rt=t(Y-2,V)-t(Y+2,V),It=t(Y,V-2)-t(Y,V+2),Rt=new I(rt*Mt,2*2,It*Mt).normalize();return new Ge().setFromUnitVectors(new I(0,1,0),Rt).multiply(new Ge().setFromAxisAngle(new I(0,1,0),mt))},b=(Y,V)=>!s.some(mt=>Math.hypot(mt.x-Y,mt.z-V)<mt.r),p=(Y,V,{cast:mt=!1,receive:Mt=!0}={})=>(Y.castShadow=mt,Y.receiveShadow=Mt,i.add(Y),u.push([Y,V]),Y),d=160,y=(Y,V,mt,Mt,gt)=>{let rt=new Map;mt.forEach(Rt=>{let Yt=Math.floor(Rt.p.x/d)+","+Math.floor(Rt.p.z/d);rt.has(Yt)||rt.set(Yt,[]),rt.get(Yt).push(Rt)});let It=new Ae;rt.forEach(Rt=>{let Yt=new di(Y,V,Rt.length);Rt.forEach((xt,Ct)=>{It.compose(xt.p,xt.q,xt.s),Yt.setMatrixAt(Ct,It)}),Yt.computeBoundingSphere(),p(Yt,Mt,gt)})},C=(Y,V,mt,Mt)=>{let gt=null,rt=1e9;for(let It=0;It<900;It++){let Rt=o()*Math.PI*2,Yt=Math.sqrt(o())*mt,xt=Y+Math.cos(Rt)*Yt,Ct=V+Math.sin(Rt)*Yt;Mt(xt,Ct)&&Yt<rt&&(rt=Yt,gt={x:xt,z:Ct})}return gt||{x:Y,z:V}},M={x:Je.x,z:Je.z};h.push({x:M.x,z:M.z,r:34});let A=C(-95,-258,50,(Y,V)=>{let mt=t(Y,V);return mt>9&&mt<32&&m(Y,V)<.16});h.push({x:A.x,z:A.z,r:30});let T=(Y,V)=>{let mt=new Dr(1,V),Mt=mt.attributes.position,gt=new I;for(let rt=0;rt<Mt.count;rt++){gt.fromBufferAttribute(Mt,rt);let It=1+(yn(gt.x*1.6+Y,gt.y*1.6,gt.z*1.6)-.5)*.55+(yn(gt.x*4+Y,gt.y*4,gt.z*4)-.5)*.14;gt.multiplyScalar(It),gt.y=gt.y<-.25?-.25+(gt.y+.25)*.2:gt.y,gt.y*=.72,gt.x*=1.12,Mt.setXYZ(rt,gt.x,gt.y,gt.z)}return new cn().add(mt,{flat:!0,color:rt=>{let It=.5+yn(rt.x*3+Y,rt.y*3,rt.z*3)*.28+rt.y*.12;return[It,It*.99,It*.95]}}).geometry()},P=ei(l,c.pRocks,{color:9277328,snowBias:.05}),_=[[],[],[]],R=[],L=(Y,V,mt,Mt,gt)=>{let rt=t(Y,V),It=new I(mt*a(.8,1.25),mt*a(.6,1.1),mt*a(.8,1.2));Mt.push({p:new I(Y,rt-mt*.12,V),q:x(Y,V,o()*6.28,.6),s:It}),gt&&f.push({x:Y,z:V,r:mt*1.05+1.2,key:"pRocks",top:rt-mt*.12+It.y*.82,rt:mt*.75})};for(let Y=0,V=0;Y<260&&V<2e4;V++){let mt=a(-560,560),Mt=a(-560,230),gt=t(mt,Mt);if(gt<-1.5||gt>75)continue;let It=o()<.25?a(4,9):a(1.2,3.4);h.some(Rt=>Math.hypot(Rt.x-mt,Rt.z-Mt)<Rt.r+It)||!b(mt,Mt)||(L(mt,Mt,It,_[Y%3],It>2.2),Y++)}for(let Y=0,V=0;Y<70&&V<9e3;V++){let mt=a(-260,260),Mt=a(-260,160),gt=t(mt,Mt);gt<-1.2||gt>1.5||h.some(rt=>Math.hypot(rt.x-mt,rt.z-Mt)<rt.r)||!b(mt,Mt)||(L(mt,Mt,a(1.5,5),_[Y%3],!0),Y++)}for(let Y=0,V=0;Y<700&&V<2e4;V++){let mt=a(-480,480),Mt=a(-480,200),gt=t(mt,Mt);gt<-.6||gt>70||!b(mt,Mt)||h.some(rt=>Math.hypot(rt.x-mt,rt.z-Mt)<rt.r)||(L(mt,Mt,a(.35,1),R,!1),Y++)}_.forEach((Y,V)=>y(T(V*17.3,2),P,Y,"pRocks",{cast:!0})),y(T(5.1,1),P,R,"pRocks");let k=Y=>{let V=.42+yn(Y.x*9,Y.y*2,Y.z*2)*.22+Math.sin(Math.atan2(Y.z,Y.y)*9)*.04;return[V*1,V*.82,V*.66]},B=(()=>{let Y=new cn,V=new re(1,.9,1,12,5,!0),mt=V.attributes.position,Mt=new I;for(let rt=0;rt<mt.count;rt++){Mt.fromBufferAttribute(mt,rt);let It=1+(yn(Mt.x*3,Mt.y*6,Mt.z*3)-.5)*.18;mt.setXYZ(rt,Mt.x*It,Mt.y,Mt.z*It)}V.computeVertexNormals(),Y.add(V,{m:z(0,0,0,0,0,Math.PI/2),color:k});let gt=rt=>{let It=Math.hypot(rt.y,rt.z),Rt=.62+Math.sin(It*26)*.05-It*.12;return[Rt*1.05,Rt*.9,Rt*.72]};return Y.add(new gs(.88,12),{m:z(.5,0,0,0,Math.PI/2,0),color:gt}),Y.add(new gs(.98,12),{m:z(-.5,0,0,0,-Math.PI/2,0),color:gt}),Y.add(new re(.12,.2,.9,6,1),{m:z(.15,.55,.3,.5,0,-.5,1,1,1),color:k}),Y.geometry()})(),it=(()=>{let Y=new cn,V=new re(.85,1,1,12,3,!0),mt=V.attributes.position,Mt=new I;for(let gt=0;gt<mt.count;gt++){Mt.fromBufferAttribute(mt,gt);let rt=Math.atan2(Mt.z,Mt.x),It=Mt.y<-.3?1+.35*Math.pow(Math.max(0,Math.sin(rt*5)),2):1,Rt=Mt.y>.45?(yn(Mt.x*4,0,Mt.z*4)-.5)*.3:0;mt.setXYZ(gt,Mt.x*It,Mt.y+Rt,Mt.z*It)}return V.computeVertexNormals(),Y.add(V,{m:z(0,.5,0),color:gt=>k(gt)}),Y.add(new gs(.85,12),{m:z(0,.98,0,-Math.PI/2,0,0),color:gt=>{let rt=Math.hypot(gt.x,gt.z),It=.6+Math.sin(rt*22)*.05;return[It*1.05,It*.9,It*.7]}}),Y.geometry()})(),X=ei(l,c.pLogs,{color:12036506}),J=pd({scene:i,shared:l,U:e,camera:r}),Q=(()=>{let Y=new cn,V=It=>{let Rt=new dt(1,1,1,3,5,2),Yt=Rt.attributes.position,xt=new I;for(let Ct=0;Ct<Yt.count;Ct++){xt.fromBufferAttribute(Yt,Ct);let Dt=1-(xt.y+.5)*.3,le=1+(yn(xt.x*3+It,xt.y*3,xt.z*3)-.5)*.35,F=xt.y>.35?1-(xt.y-.35)*1.2*Math.hypot(xt.x,xt.z):1;Yt.setXYZ(Ct,xt.x*Dt*le*F,xt.y+(xt.y>.4?(yn(xt.x*5,It,xt.z*5)-.5)*.15:0),xt.z*Dt*le*F)}return Rt},mt=It=>Rt=>{let Yt=.5+yn(Rt.x*2+It,Rt.y*2,Rt.z*2)*.22;return[Yt*.97,Yt,Yt*.98]},Mt=11,gt=15;for(let It=0;It<Mt;It++){let Rt=It/Mt*Math.PI*2+a(-.06,.06),Yt=Math.cos(Rt)*gt,xt=Math.sin(Rt)*gt,Ct=a(5,9.5),Dt=It===4?.35:a(-.06,.06),le=t(A.x+Yt,A.z+xt)-t(A.x,A.z);Y.add(V(It*3.7),{m:z(Yt,le+Ct/2-.6,xt,Dt,-Rt+Math.PI/2,a(-.05,.05),a(2.2,3.2),Ct,a(1,1.5)),flat:!0,color:mt(It)}),f.push({x:A.x+Yt,z:A.z+xt,r:3.6,key:"pStones"})}Y.add(V(40),{m:z(3,.4,-2,.1,.7,Math.PI/2-.05,2.6,7,1.4),flat:!0,color:mt(40)}),Y.add(V(50),{m:z(-2,.5,2.5,0,.3,0,4.5,1.5,2.6),flat:!0,color:mt(50)}),f.push({x:A.x+3,z:A.z-2,r:4.5,key:"pStones"},{x:A.x-2,z:A.z+2.5,r:4,key:"pStones"});let rt=new Ie(Y.geometry(),ei(l,c.pStones,{color:10132636}));return rt.position.set(A.x,t(A.x,A.z),A.z),p(rt,"pStones",{cast:!0})})(),et=(Y,V)=>{let mt=new re(V?.85:.5,1.15,1,12,10,!1),Mt=mt.attributes.position,gt=new I;for(let rt=0;rt<Mt.count;rt++){gt.fromBufferAttribute(Mt,rt);let It=gt.y+.5,Rt=1+(yn(gt.x*2+Y,gt.y*5,gt.z*2)-.5)*.6+Math.sin(gt.y*26+Y)*.04;!V&&It>.55&&(Rt*=1-(yn(Y,gt.y*3,1)-.3)*.5);let Yt=gt.y>.49&&!V?(yn(gt.x*3+Y,0,gt.z*3)-.5)*.25:0,xt=V?0:It*It*.18*Math.sin(Y);Mt.setXYZ(rt,gt.x*Rt+xt,gt.y+Yt,gt.z*Rt)}return mt},Tt=new cn,ft={x:132,z:-178};[[-125,-135,9,70],[-150,-95,5,36],[-170,-70,7,48],[-82,-215,8,95],[52,-255,10,58],[72,-240,4.5,30],[195,-105,6,40],[-30,-300,9,80],[ft.x,ft.z,30,22]].forEach(([Y,V,mt,Mt],gt,rt)=>{let It=gt===rt.length-1,Rt=11+Mt*.5-.1;Tt.add(et(gt*9.1,It),{m:z(Y,Rt-Mt/2-8,V,0,gt,0,mt,Mt+16,mt*a(.8,1.1)),flat:!0,color:Yt=>{let xt=.42+yn(Yt.x*.2,Yt.y*.6,Yt.z*.2)*.24,Ct=Yt.y>Rt-1.5?.12:0;return[xt-Ct*.4,xt+Ct*.3,xt*.95-Ct*.3]}}),f.push({x:Y,z:V,r:mt*1.2+1.5,key:"pStacks"})});{let V=new I(ft.x,21.9,ft.z),mt=new re(2.6,3.8,26,16,8,!1);Tt.add(mt,{m:z(V.x,V.y+13,V.z),color:Mt=>Math.floor((Mt.y-21.9)/6.5)%2?[.55,.22,.2]:[.92,.91,.88]}),Tt.add(new re(4,4,.5,16),{m:z(V.x,V.y+26.2,V.z),color:()=>[.2,.2,.22]}),Tt.add(new re(2,2,.6,12),{m:z(V.x,V.y+26.7,V.z),color:()=>[.2,.2,.22]}),Tt.add(new fn(2.6,2.6,12),{m:z(V.x,V.y+31.3,V.z),color:()=>[.25,.23,.24]}),Tt.add(new dt(7,4,5),{m:z(V.x+7,V.y+2,V.z+3),color:()=>[.85,.84,.8]}),Tt.add(new fn(5,2.6,4),{m:z(V.x+7,V.y+5.3,V.z+3,0,Math.PI/4,0,1,1,.75),color:()=>[.45,.25,.22]})}p(new Ie(Tt.geometry(),ei(l,c.pStacks,{color:11051942,sink:140})),"pStacks");let Et=new I(ft.x,11+22*.5-.1+28.5,ft.z),At=new Ie(new re(1.8,1.8,3.2,12),new Bn({color:16769712,fog:!1}));At.position.copy(Et),p(At,"pStacks",{receive:!1});let se=new In;se.position.copy(Et);let Bt=new an({transparent:!0,depthWrite:!1,blending:Oi,side:Xn,fog:!1,uniforms:{uOpacity:{value:0}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uOpacity; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float t = clamp(-vY, 0.0, 1.0); float facing = abs(dot(normalize(vN), normalize(vV))); float a = pow(1.0 - t, 2.2) * smoothstep(0.0, 0.03, t) * pow(facing, 1.6); gl_FragColor = vec4(vec3(1.0, 0.9, 0.72) * a * uOpacity, 1.0); }"});[0,Math.PI].forEach(Y=>{let V=new Ie(new fn(1,1,20,1,!0).translate(0,-.5,0),Bt);V.rotation.set(Math.PI/2,0,0),V.scale.set(8,230,8);let mt=new In;mt.rotation.y=Y,mt.add(V),V.position.z=0,se.add(mt)}),i.add(se);let _e=(Y,V,mt,Mt,gt,rt)=>{let It=new cn,Rt=[];for(let xt=0;xt<Y;xt++){let Ct=xt/Y*Math.PI*2+o()*.7,Dt=a(V,mt),le=a(.15,.55),F=o()*Mt,pe=Math.cos(Ct)*F,Kt=Math.sin(Ct)*F,w=Math.cos(Ct)*le,g=Math.sin(Ct)*le,H=-Math.sin(Ct)*gt,$=Math.cos(Ct)*gt,tt=[pe+w*Dt*.35,Dt*.55,Kt+g*Dt*.35],Nt=[pe+w*Dt,Dt*.92,Kt+g*Dt];Rt.push([pe-H,0,Kt-$],[pe+H,0,Kt+$],[tt[0]+H*.6,tt[1],tt[2]+$*.6]),Rt.push([pe-H,0,Kt-$],[tt[0]+H*.6,tt[1],tt[2]+$*.6],[tt[0]-H*.6,tt[1],tt[2]-$*.6]),Rt.push([tt[0]-H*.6,tt[1],tt[2]-$*.6],[tt[0]+H*.6,tt[1],tt[2]+$*.6],Nt)}let Yt=mt;return It.tris(Rt,xt=>{let Ct=xt.y/Yt;return[rt[0]*(.55+.6*Ct),rt[1]*(.55+.6*Ct),rt[2]*(.55+.6*Ct)]},xt=>Math.pow(xt.y/Yt,1.5),new I(0,1,0)),It},xe=_e(11,.9,1.8,.55,.07,[.62,.72,.42]).geometry(),$t=_e(9,3.2,5.5,.5,.06,[.6,.66,.42]);[[.15,.1],[-.2,.25],[.05,-.3]].forEach(([Y,V],mt)=>{let Mt=4.6+mt*.5;$t.add(new re(.03,.03,Mt,4),{m:z(Y,Mt/2,V),color:()=>[.5,.52,.35],tip:()=>.3}),$t.add(new re(.11,.11,.7,6),{m:z(Y,Mt+.2,V),color:()=>[.36,.26,.18],tip:()=>.6})});let ct=$t.geometry(),_t=(()=>{let Y=new cn,V=[],mt=8;for(let Mt=0;Mt<mt;Mt++){let gt=Mt/mt*Math.PI*2+o()*.5,rt=a(1.6,2.3),It=a(.7,1.1),Rt=[Math.cos(gt),Math.sin(gt)],Yt=[-Math.sin(gt),Math.cos(gt)],xt=Dt=>[Rt[0]*rt*Dt,It*Math.sin(Dt*Math.PI*.75)-.25*Dt*Dt,Rt[1]*rt*Dt],Ct=9;for(let Dt=0;Dt<Ct;Dt++){let le=Dt/Ct,F=(Dt+1)/Ct,pe=(le+F)/2,Kt=xt(le),w=xt(F),g=xt(pe),H=.34*Math.sin(Math.PI*Math.min(1,pe*1.1))*(1-pe*.4)+.03,$=Yt[0]*H,tt=Yt[1]*H;V.push(Kt,w,[g[0]+$,g[1]-.06,g[2]+tt]),V.push(Kt,[g[0]-$,g[1]-.06,g[2]-tt],w)}}return Y.tris(V,Mt=>{let gt=Math.hypot(Mt.x,Mt.z)/2.3;return[.6+gt*.3,.74+gt*.32,.42+gt*.16]},Mt=>Math.hypot(Mt.x,Mt.z)/2.3,new I(0,1,0)),Y.geometry()})(),yt=(Y,V)=>ei(l,c[Y],{sway:V,side:Xn,color:16777215,snowBias:-1,softBack:!0});return{shared:l,show:c,groups:u,solids:f,zones:h,cabinAt:M,circleAt:A,cabin:J,blockedAt(Y,V,mt,Mt,gt){for(let rt of f){if(Mt[rt.key]<.5||rt.top!==void 0&&gt!==void 0&&gt>=rt.top-.7)continue;let It=rt.x-Y,Rt=rt.z-V,Yt=rt.r+mt;if(It*It+Rt*Rt<Yt*Yt)return!0}return Mt.pCabin>.5&&J.blocked(Y,V,mt)},solidTop(Y,V,mt,Mt){let gt=-1/0;for(let rt of f){if(rt.top===void 0||Mt[rt.key]<.5||rt.top<=gt||mt<rt.top-1.2)continue;let It=rt.x-Y,Rt=rt.z-V;It*It+Rt*Rt<rt.rt*rt.rt&&(gt=rt.top)}return gt},floorAt(Y,V,mt){return mt.pCabin>.5?J.floorAt(Y,V):null},plant(Y,V=0){let mt=(xt,Ct,Dt)=>Y.some(le=>{let F=le.p.x-xt,pe=le.p.z-Ct;return F*F+pe*pe<Dt*Dt}),Mt=(xt,Ct,Dt=0)=>h.some(le=>Math.hypot(le.x-xt,le.z-Ct)<le.r+Dt),gt=[],rt=[];for(let xt=0,Ct=0;xt<70&&Ct<8e3;Ct++){let Dt=Y[Math.floor(o()*Y.length)];if(!Dt)break;let le=o()*6.28,F=a(7,20),pe=Dt.p.x+Math.cos(le)*F,Kt=Dt.p.z+Math.sin(le)*F,w=t(pe,Kt);if(w<1.5||w>68||Mt(pe,Kt,10))continue;let g=a(9,18),H=a(.8,1.4),$=o()*6.28,tt=Math.cos($)*g/2,Nt=-Math.sin($)*g/2;if(mt(pe,Kt,6)||mt(pe+tt,Kt+Nt,4)||mt(pe-tt,Kt-Nt,4))continue;let Lt=t(pe+tt,Kt+Nt),st=t(pe-tt,Kt-Nt),lt=new Ge().setFromEuler(new Cn(o()*6.28,$,Math.atan2(Lt-st,g),"YZX"));gt.push({p:new I(pe,(Lt+st)/2+H*.55,Kt),q:lt,s:new I(g,H,H)});for(let Pt=-.5;Pt<=.5;Pt+=.125)f.push({x:pe+tt*2*Pt,z:Kt+Nt*2*Pt,r:H+1.6,key:"pLogs",top:(Lt+st)/2+H*.55+(Lt-st)*Pt+H,rt:H*1.1});xt++}for(let xt=0,Ct=0;xt<90&&Ct<8e3;Ct++){let Dt=Y[Math.floor(o()*Y.length)];if(!Dt)break;let le=o()*6.28,F=a(6,16),pe=Dt.p.x+Math.cos(le)*F,Kt=Dt.p.z+Math.sin(le)*F,w=t(pe,Kt);if(w<1.5||w>70||mt(pe,Kt,5)||Mt(pe,Kt))continue;let g=a(.9,1.7),H=a(1.4,3.2);rt.push({p:new I(pe,w-.4,Kt),q:x(pe,Kt,o()*6.28,.4),s:new I(g,H,g)}),f.push({x:pe,z:Kt,r:g+1.3,key:"pLogs",top:w-.4+H,rt:g*.85}),xt++}y(B,X,gt,"pLogs",{cast:!0}),y(it,X,rt,"pLogs",{cast:!0});let It=[];for(let xt=0;It.length<5200&&xt<6e4;xt++){let Ct=a(-470,470),Dt=a(-470,210),le=t(Ct,Dt);if(le<V+.6||le>66||!b(Ct,Dt)||Mt(Ct,Dt)||yn(Ct*.03,0,Dt*.03)<.42)continue;let F=a(1.2,2.6);It.push({p:new I(Ct,le-.15,Dt),q:x(Ct,Dt,o()*6.28,.5),s:new I(F,F*a(.8,1.3),F)})}y(xe,yt("pGrass",.05),It,"pGrass");let Rt=[];for(let xt=0;Rt.length<1100&&xt<2e4;xt++){let Ct=Y[Math.floor(o()*Y.length)];if(!Ct)break;let Dt=o()*6.28,le=a(2.5,13),F=Ct.p.x+Math.cos(Dt)*le,pe=Ct.p.z+Math.sin(Dt)*le,Kt=t(F,pe);if(Kt<1||Kt>70||Mt(F,pe))continue;let w=a(1.6,3.4);Rt.push({p:new I(F,Kt-.1,pe),q:x(F,pe,o()*6.28,.5),s:new I(w,w*a(.8,1.1),w)})}y(_t,yt("pFerns",.03),Rt,"pFerns");let Yt=[];for(let xt=0;Yt.length<700&&xt<9e4;xt++){let Ct=a(-280,280),Dt=a(-280,170),le=t(Ct,Dt);if(le<-1.4||le>1.2||!b(Ct,Dt)||Mt(Ct,Dt,-6)||yn(Ct*.05,3,Dt*.05)<.4)continue;let F=a(1.1,1.9);Yt.push({p:new I(Ct,le-.2,Dt),q:new Ge().setFromAxisAngle(new I(0,1,0),o()*6.28),s:new I(F,F*a(.8,1.2),F)})}y(ct,yt("pReeds",.012),Yt,"pReeds")},update(Y,V,mt,Mt){for(let gt of bc)c[gt].value=Y[gt];l.uSnowCover.value=Y.pSnowCover,l.uMoss.value=Y.pMoss,l.uFrost.value=Y.pFrost;for(let[gt,rt]of u)gt.visible=Y[rt]>.01;J.update(Y,V,performance.now(),Mt),At.material.color.setRGB(1.6,1.4,1.05),At.position.y=Et.y-(1-Y.pStacks)*140,se.position.y=At.position.y,se.rotation.y=V*.45,se.visible=Y.pStacks>.5,Bt.uniforms.uOpacity.value=Math.max(0,Y.pStacks-.5)*.5},blocked(Y,V){return h.some(mt=>Math.hypot(mt.x-Y,mt.z-V)<mt.r)}}}function xd(i,t){let n=new Gr().copy(new un(1,1).rotateX(-Math.PI/2)),s=new Float32Array(320*3);for(let a=0;a<320;a++)s[a*3]=Math.random()*120-60,s[a*3+1]=Math.random(),s[a*3+2]=Math.random()*120-60;n.setAttribute("aOff",new Ji(s,3)),n.instanceCount=320;let r=new an({transparent:!0,depthWrite:!1,fog:!0,uniforms:mc.merge([jt.fog,{uOpacity:{value:0},uCam:{value:new I},uWater:{value:0}}]),vertexShader:`
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
      }`});r.uniforms.uTime=t.uTime;let o=new Ie(n,r);return o.frustumCulled=!1,i.add(o),{update(a,l,c){r.uniforms.uOpacity.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uWater.value=c,o.visible=a>.01}}}function _d(i,t){let n=new un(1,1).rotateX(-Math.PI/2),s=new Ji(new Float32Array(90).fill(-1e5),1);s.setUsage(Cl),n.setAttribute("aBorn",s);let r=new an({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uTime:t.uTime,uColor:{value:new he(7240328)},uShow:{value:0}},vertexShader:`
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
      }`}),o=new di(n,r,90);o.frustumCulled=!1;let a=new Ae;a.makeScale(0,0,0);for(let m=0;m<90;m++)o.setMatrixAt(m,a);i.add(o);let l=0,c=1,u=new Ge,f=new I(1.15,1,2.3),h=new I;return{mesh:o,place(m,x,b,p,d){c=-c,h.set(m+Math.cos(p)*.9*c,x+.45,b-Math.sin(p)*.9*c),u.setFromUnitVectors(new I(0,1,0),d).multiply(new Ge().setFromAxisAngle(new I(0,1,0),p)),a.compose(h,u,f),o.setMatrixAt(l,a),o.instanceMatrix.needsUpdate=!0,s.array[l]=t.uTime.value,s.needsUpdate=!0,l=(l+1)%90},update(m){r.uniforms.uShow.value=m,o.visible=m>.01}}}(()=>{"use strict";let i=document.getElementById("bg");if(!i)return;let t;try{t=new vc({canvas:i,antialias:!0,powerPreference:"low-power"})}catch{document.documentElement.classList.add("no-webgl"),window.MEOW_BG={scenes:[],setScene(q){document.documentElement.setAttribute("data-scene",q)},setMotion(){},start(){}};return}t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=Xr,t.shadowMap.enabled=!0,t.shadowMap.type=wa,t.toneMappingExposure=1;let e=new Ys,n=new An(50,1,.5,3e3),s=new Vr,r=(S,q)=>{let ot=Math.sin(S*127.1+q*311.7)*43758.5453;return ot-Math.floor(ot)},o=(S,q)=>{let ot=Math.floor(S),Ht=Math.floor(q),Ot=S-ot,Xt=q-Ht,me=Ot*Ot*(3-2*Ot),Se=Xt*Xt*(3-2*Xt),Te=r(ot,Ht),ge=r(ot+1,Ht),ve=r(ot,Ht+1),ye=r(ot+1,Ht+1);return Te+(ge-Te)*me+(ve-Te)*Se+(Te-ge-ve+ye)*me*Se},a=(S,q,ot=5)=>{let Ht=0,Ot=.5,Xt=1;for(let me=0;me<ot;me++)Ht+=Ot*o(S*Xt,q*Xt),Xt*=2.03,Ot*=.5;return Ht},l=(S,q)=>{let ot=0,Ht=.5,Ot=1;for(let Xt=0;Xt<5;Xt++)ot+=Ht*(1-Math.abs(o(S*Ot,q*Ot)*2-1)),Ot*=2.1,Ht*=.5;return ot},c=(S,q,ot)=>{let Ht=Math.min(1,Math.max(0,(ot-S)/(q-S)));return Ht*Ht*(3-2*Ht)},u=(S,q)=>S+Math.random()*(q-S),f=(S,q)=>{let ot=Math.hypot(S*.75,q+20),Ht=c(55,240,ot),Ot=(a(S*.006+3,q*.006+7)-.45)*46*(.25+Ht);Ot+=Math.pow(c(120,650,-q),1.3)*l(S*.0028,q*.0028)*260,Ot+=c(160,520,Math.abs(S))*a(S*.004,q*.004+11)*130,Ot-=(1-Ht)*9,Ot+=(a(S*.035+17,q*.035+5,2)-.5)*3.2*(.3+Ht);{let ve=Math.min(1,Math.max(0,((S-205)*-113+(q- -130)*14)/12965)),ye=Math.hypot(S-(205+-113*ve),q-(-130+14*ve)),Ve=c(34,12,ye)*c(1.04,.9,ve),sn=4.6+(a(S*.05,q*.05,2)-.5)*1.6-ve*.6;Ve>0&&(Ot=Ot+(Math.max(Ot,sn)-Ot)*Ve)}let Xt=Math.hypot(S-Je.x,q-Je.z);Xt<36&&(Ot+=(Je.y-.12-Ot)*c(36,24,Xt));{let me=(q-Je.z)/Je.S,Se=-(S-Je.x)/Je.S,Te=Math.max(qt.x0-me,me-qt.x1,0),ge=Math.max(qt.z0-Se,Se-qt.z1,0),ve=Math.hypot(Te,ge)*Je.S;ve<16&&(Ot=Math.max(Ot,Ot+(Je.y-.12-Ot)*c(16,5,ve)))}return Ot},h={uTime:{value:0},uTop:{value:new he},uHorizon:{value:new he},uBottom:{value:new he},uSunColor:{value:new he},uSunDir:{value:new I(0,.2,-1)},uSunSize:{value:0},uStars:{value:0},uAurora:{value:0},uAur1:{value:new he},uAur2:{value:new he}},m=new Ie(new pn(1400,48,24),new an({uniforms:h,side:Pn,depthWrite:!1,fog:!1,vertexShader:`
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
          // aurora ribbons
          if (uAurora > 0.001) {
            float a = 0.0;
            for (int i = 0; i < 3; i++) {
              float fi = float(i);
              float band = 0.30 + fi * 0.07 + sin(d.x * 2.6 + fi * 1.9 + uTime * 0.04 * (fi + 1.0)) * 0.07;
              float w = exp(-pow((h - band) * 13.0, 2.0));
              float curtain = 0.55 + 0.45 * sin(d.x * 22.0 + uTime * 0.25 + fi * 2.0);
              a += w * curtain * (1.0 - fi * 0.25);
            }
            col += mix(uAur1, uAur2, clamp(d.x * 0.6 + 0.5, 0.0, 1.0)) * a * uAurora * smoothstep(0.1, -0.6, d.z);
          }
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));e.add(m);let x=new Or(16777215,4473924,1),b=new Hr(16777215,1);e.add(x,b,b.target),e.fog=new Tr(13421772,.004);let p={uLow:{value:new he},uHigh:{value:new he},uSnow:{value:new he},uSnowLine:{value:100},uHole:{value:new nn(1e9,1e9,1e9,1e9)}},d=new nn(1e9,1e9,1e9,1e9),y=new un(2200,1800,300,245);y.rotateX(-Math.PI/2),y.translate(0,0,-400);{let S=y.attributes.position;for(let q=0;q<S.count;q++)S.setY(q,f(S.getX(q),S.getZ(q)));y.computeVertexNormals()}let C=new Ei({color:16777215});C.onBeforeCompile=S=>{Object.assign(S.uniforms,p),S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
varying float vH; varying float vSlope; varying vec2 vXZ;`).replace("#include <common>","#include <common>").replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vSlope = 1.0 - normal.y; vXZ = position.xz;`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uLow, uHigh, uSnow; uniform float uSnowLine; uniform vec4 uHole; varying float vH; varying float vSlope; varying vec2 vXZ;
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
        #include <opaque_fragment>`)};let M=new Ie(y,C);M.receiveShadow=!0,e.add(M);let A=(()=>{let S=document.createElement("canvas");S.width=S.height=256;let q=S.getContext("2d"),ot=q.createImageData(256,256);for(let Ot=0;Ot<256;Ot++)for(let Xt=0;Xt<256;Xt++){let me=a(Xt/22,Ot/7,4),Se=a(Xt/22+.6,Ot/7,4),Te=a(Xt/22,Ot/7+.6,4),ge=(Ot*256+Xt)*4;ot.data[ge]=128+(me-Se)*300,ot.data[ge+1]=128+(me-Te)*300,ot.data[ge+2]=255,ot.data[ge+3]=255}q.putImageData(ot,0,0);let Ht=new $i(S);return Ht.wrapS=Ht.wrapT=Gs,Ht.repeat.set(60,60),Ht})(),T=new Ur({color:7829367,roughness:.3,metalness:.35,normalMap:A,normalScale:new Re(.35,.35)}),P={uStudy:{value:new nn(1e9,1e9,1e9,1e9)}};T.onBeforeCompile=S=>{Object.assign(S.uniforms,P),S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ; uniform vec4 uStudy;`).replace("#include <clipping_planes_fragment>",`if (vWXZ.x > uStudy.x && vWXZ.x < uStudy.y && vWXZ.y > uStudy.z && vWXZ.y < uStudy.w) discard;
#include <clipping_planes_fragment>`)};let _=new Ie(new un(4e3,4e3).rotateX(-Math.PI/2),T);e.add(_);let R={uTree:{value:1},uTime:h.uTime},L=(()=>{let S=new cn,q=new re(.05,.16,2.9,8,5,!0).translate(0,1.45,0);{let Ot=q.attributes.position,Xt=new I;for(let me=0;me<Ot.count;me++){Xt.fromBufferAttribute(Ot,me);let Se=Math.atan2(Xt.z,Xt.x),Te=Xt.y<.4?1+(.4-Xt.y)*2.6*(.55+.45*Math.max(0,Math.sin(Se*4+1))):1,ge=Math.sin(Xt.y*1.7)*.03;Ot.setXYZ(me,Xt.x*Te+ge,Xt.y,Xt.z*Te)}}S.add(q,{color:Ot=>{let Xt=.42+.16*o(Ot.y*7,Math.atan2(Ot.z,Ot.x)*2.5);return[Xt*1.35,Xt*.98,Xt*.72]},normal:(Ot,Xt)=>Xt.set(Ot.x,.12,Ot.z).normalize()});let ot=6,Ht=0;for(let Ot=0;Ot<ot;Ot++){let Xt=Ot/(ot-1),me=1.1-Xt*.8,Se=1.02-Xt*.42,Te=.5+Xt*2.5,ge=5+Ot%3,ve=Ot*1.93,ye=(Zt,Fe)=>{let Qe=Zt.attributes.position,We=new I;for(let mn=0;mn<Qe.count;mn++){We.fromBufferAttribute(Qe,mn);let gn=Math.hypot(We.x,We.z);if(gn<.001)continue;let Mn=Math.atan2(We.z,We.x),wn=Math.pow(.5+.5*Math.sin(Mn*ge+ve),2),Ci=.82+.32*wn+.06*Math.sin(Mn*17+Ot*3)+.04*Math.sin(Mn*31+Ot),hr=gn/me,co=(.1+.16*wn)*me*hr*hr;Qe.setXYZ(mn,We.x*Ci,We.y-co-(Fe?.02:0),We.z*Ci)}},Ve=new fn(me,Se,14,3,!0);ye(Ve,!1),Ve.translate(0,Te+Se/2,0),S.add(Ve,{color:Zt=>{let Fe=(Zt.y-Te)/Se,We=.55+.5*Math.min(1,Math.hypot(Zt.x,Zt.z)/me)+.22*Fe+.08*(r(Zt.x*9.1,Zt.z*7.3+Zt.y)-.5)+Ot*.03;return[We*.98,We,We*.94]},normal:(Zt,Fe)=>{let Qe=Math.hypot(Zt.x,Zt.z);Fe.set(Zt.x,Qe*.55+.32,Zt.z).normalize()},tip:Zt=>{let Fe=(Zt.y-Te)/Se,Qe=Math.atan2(Zt.z,Zt.x),We=.5+.5*Math.sin(Qe*ge+ve);return Math.min(1,Math.max(0,(Fe-.08)*1.5)*(.45+.55*We)+.25*r(Zt.x*5.3,Zt.z*4.1))}});let sn=new fn(me*.97,Se*.38,14,1,!0);ye(sn,!0),sn.translate(0,Te+Se*.19-.02,0),S.add(sn,{flip:!0,color:Zt=>{let Qe=.42+.3*Math.min(1,Math.hypot(Zt.x,Zt.z)/me);return[Qe*.95,Qe,Qe*.9]},normal:(Zt,Fe)=>Fe.set(Zt.x*.3,-1,Zt.z*.3).normalize()}),Ht=Te+Se}return S.add(new fn(.05,.5,5,1,!0).translate(0,Ht+.18,0),{color:()=>[1,1.02,.95],tip:()=>.7}),S.geometry()})(),k=[[0,105],[0,140],[-38,112],[24,78],[0,92],[30,102],[0,125]].map(([S,q])=>({x:S,z:q,r:42})),B=gd({scene:e,heightAt:f,U:h,snowColor:p.uSnow,clear:k,camera:n}),it=ei({...B.shared,uMoss:{value:0},uFrost:B.shared.uSnowCover},R.uTree,{sway:.022,color:3358771,snowBias:-.3,crisp:!0}),X=1400,J=[],Q=new he(1,1,1),et=new di(L,it,X);{let S=new Ae,q=new Ge,ot=new I,Ht=new I,Ot=new he,Xt=0,me=0;for(;Xt<X&&me++<6e4;){let Se=u(-650,650),Te=u(-700,260),ge=f(Se,Te);if(ge<3||ge>85||a(Se*.02,Te*.02,3)<.42||B.blocked(Se,Te))continue;let ve=u(2,4.6);Ht.set(Se,ge-.4,Te),ot.set(ve*u(.8,.95),ve*u(1.5,2.1),ve*u(.8,.95)),q.setFromAxisAngle(new I(0,1,0),u(0,Math.PI*2));let ye=u(.82,1.12);Ot.setRGB(ye,ye*u(.97,1.03),ye*u(.94,1)),J.push({p:Ht.clone(),s:ot.clone(),q:q.clone(),c:Ot.clone()}),S.compose(Ht,q,ot),et.setColorAt(Xt,Ot),et.setMatrixAt(Xt++,S)}et.count=Xt}et.castShadow=!0,et.receiveShadow=!0,e.add(et),B.plant(J,0);let Tt=(()=>{let S=new cn,q=(ot,Ht)=>r(ot*3.17+Ht,ot*1.91-Ht*2.3);for(let ot=0;ot<14;ot++){let Ht=ot%5,Ot=Ht/5,Xt=1.1-Ot*.8,me=.5+Ot*2.5,Se=ot*2.39996+q(ot,1)*.6,Te=Xt*(.62+.28*q(ot,2)),ge=Math.cos(Se)*Te,ve=Math.sin(Se)*Te,ye=.14+.16*q(ot,3),Ve=.11+.05*q(ot,4),sn=me-.2*Xt*(Te/Xt)*(Te/Xt);S.add(new re(.006,.008,ye,4,1),{m:new Ae().makeTranslation(ge,sn-ye/2,ve),color:()=>[.35,.33,.3]});let Zt=new pn(Ve,10,7),Fe=Zt.attributes.position;for(let We=0;We<Fe.count;We++){let mn=Fe.getY(We);Fe.setY(We,(mn<0?mn*1.25:mn)*.5)}Zt.computeVertexNormals();let Qe=.6+.18*q(ot,5);S.add(Zt,{m:new Ae().makeTranslation(ge,sn-ye-Ve*.5,ve),color:We=>{let mn=.85+.25*Math.max(0,We.y-(sn-ye-Ve*.5))/Ve;return[Qe*mn,Qe*mn,Qe*mn*.98]}})}return S.geometry()})(),ft=ei({...B.shared,uMoss:{value:0},uFrost:{value:0}},R.uTree,{sway:.022,color:14211288}),Et=new di(Tt,ft,et.count),At=J.map((S,q)=>r(q*.37,5.1)<.5);{let S=new Ae,q=new Ae().makeScale(0,0,0);J.forEach((ot,Ht)=>Et.setMatrixAt(Ht,At[Ht]?S.compose(ot.p,ot.q,ot.s):q)),Et.computeBoundingSphere()}Et.castShadow=!0,e.add(Et);let se=xd(e,h),Bt=_d(e,h),_e=new zr(16772829,0,280,Dl.degToRad(32),.7,1.35);_e.castShadow=!1,_e.shadow.mapSize.set(1024,1024),_e.shadow.camera.near=.5,_e.shadow.camera.far=280,_e.shadow.bias=-.0012,_e.shadow.normalBias=.06,e.add(_e,_e.target);let xe=new Fi(16753498,0,120,1.25);e.add(xe);let $t=new an({transparent:!0,depthWrite:!1,side:Pn,blending:Oi,fog:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new he(16773340)}},vertexShader:`
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
      }`}),ct=new fn(1,1,40,1,!0).translate(0,-.5,0).rotateX(-Math.PI/2),_t=new Ie(ct,$t);_t.frustumCulled=!1,_t.renderOrder=5,e.add(_t);let yt={state:"off",torch:{on:!1,since:-1e9,level:0},lamp:{on:!1,since:-1e9,level:0},level:0,aim:new I(0,0,-1),swing:0,swingV:0,swingZ:0,swingZV:0,lastVX:0,lastVZ:0},Y=(()=>{let S=document.createElement("canvas");S.width=256,S.height=128;let q=S.getContext("2d"),ot=q.createRadialGradient(128,64,0,128,64,128);return ot.addColorStop(0,"rgba(255,255,255,0.9)"),ot.addColorStop(.5,"rgba(255,255,255,0.35)"),ot.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=ot,q.fillRect(0,0,256,128),new $i(S)})(),V=Array.from({length:9},(S,q)=>{let ot=new Bn({map:Y,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),Ht=new Ie(new un(u(380,620),u(70,120)),ot);return Ht.position.set(u(-400,400),u(8,45),-60-q*70),Ht.userData.v=u(1.2,3.2)*(Math.random()<.5?-1:1),e.add(Ht),Ht}),mt=`
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);`,Mt=2600,gt=new on;{let S=new Float32Array(Mt*6),q=new Float32Array(Mt*2);for(let ot=0;ot<Mt;ot++){let Ht=u(-90,90),Ot=u(0,70),Xt=u(-140,40);S.set([Ht,Ot,Xt,Ht,Ot,Xt],ot*6),q[ot*2+1]=1}gt.setAttribute("position",new dn(S,3)),gt.setAttribute("aEnd",new dn(q,1))}let rt=new an({transparent:!0,depthWrite:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new he(14672870)}},vertexShader:`
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
      }`}),It=new Pr(gt,rt);It.frustumCulled=!1,e.add(It);let Rt=(S,q,ot,Ht,Ot)=>{let Xt=new on,me=new Float32Array(S*3),Se=new Float32Array(S);for(let ve=0;ve<S;ve++)me.set([u(-q[0],q[0]),u(q[1],q[2]),u(q[3],q[4])],ve*3),Se[ve]=Math.random();Xt.setAttribute("position",new dn(me,3)),Xt.setAttribute("aSeed",new dn(Se,1));let Te=new an({transparent:!0,depthWrite:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new he(Ht)},uSize:{value:Ot*t.getPixelRatio()}},vertexShader:ot,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          ${mt}
          gl_FragColor = vec4(uColor, a * uOpacity * vA);
          #include <colorspace_fragment>
        }`}),ge=new ms(Xt,Te);return ge.frustumCulled=!1,e.add(ge),ge},Yt=Rt(3200,[110,0,70,-160,40],`
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
    }`,16054008,3.2),xt=Rt(260,[160,1,14,-220,30],`
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
    }`,14275248,5),Ct=(S,q,ot)=>new I(S,q,ot),Dt={rain:{sat:0,skyTop:"#8f959a",skyHorizon:"#c6c9cb",skyBottom:"#8a8f93",fog:"#b7bbbe",fogDensity:.0042,low:"#6c7175",high:"#878c90",snowC:"#c9cccf",snowLine:170,water:0,waterC:"#6d7378",waterRough:.18,sunC:"#000000",sunDir:Ct(0,.3,-1),sunSize:0,lightC:"#e8e8e8",light:.55,lightDir:Ct(.3,.6,.2),hemiSky:"#cfd2d4",hemiGround:"#55595c",hemi:.95,treeC:"#3f4447",trees:.75,rain:1,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.55,cam:Ct(0,13,105),look:Ct(0,9,0)},frost:{sat:0,skyTop:"#d7d9db",skyHorizon:"#eceded",skyBottom:"#cfd1d3",fog:"#e3e4e5",fogDensity:.0068,low:"#a9adb0",high:"#c3c6c8",snowC:"#eeeff0",snowLine:90,water:0,waterC:"#b4b8bb",waterRough:.4,sunC:"#000000",sunDir:Ct(0,.3,-1),sunSize:0,lightC:"#ffffff",light:.45,lightDir:Ct(-.3,.8,.3),hemiSky:"#f0f0f0",hemiGround:"#8d9093",hemi:1.1,treeC:"#6f7477",trees:.35,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:Ct(0,34,140),look:Ct(0,16,-20)},mist:{sat:.55,skyTop:"#93a4b1",skyHorizon:"#d6dcdf",skyBottom:"#a9b5bd",fog:"#ccd4d8",fogDensity:.0047,low:"#56645c",high:"#77858d",snowC:"#e5e9eb",snowLine:95,water:0,waterC:"#7a8c95",waterRough:.22,sunC:"#efe7da",sunDir:Ct(.5,.35,-1),sunSize:.0016,lightC:"#f2ece2",light:.85,lightDir:Ct(.5,.6,-.4),hemiSky:"#d5dde2",hemiGround:"#4d5650",hemi:.8,treeC:"#34433b",trees:.95,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:Ct(-38,22,112),look:Ct(0,20,-40)},snow:{sat:.6,skyTop:"#a3afba",skyHorizon:"#e1e5e8",skyBottom:"#c9d1d7",fog:"#dde2e6",fogDensity:.0045,low:"#e7ebee",high:"#f2f4f6",snowC:"#fbfcfd",snowLine:-20,water:.5,waterC:"#c3ccd2",waterRough:.75,sunC:"#e9e6e0",sunDir:Ct(-.4,.3,-1),sunSize:.0014,lightC:"#f4f1ec",light:.7,lightDir:Ct(-.4,.5,.3),hemiSky:"#eef2f5",hemiGround:"#8a96a0",hemi:.95,treeC:"#36443f",trees:1,rain:0,snow:1,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.45,cam:Ct(24,11,78),look:Ct(0,12,-10)},night:{sat:.45,skyTop:"#04060d",skyHorizon:"#1a2238",skyBottom:"#0a0e18",fog:"#111727",fogDensity:.0032,low:"#3a4352",high:"#4a5262",snowC:"#8a93a3",snowLine:160,water:0,waterC:"#0e1421",waterRough:.1,sunC:"#d8d4c6",sunDir:Ct(-.45,.32,-1),sunSize:.0022,lightC:"#93a0bf",light:.16,lightDir:Ct(-.45,.5,-.6),hemiSky:"#26304a",hemiGround:"#07090f",hemi:.16,treeC:"#2c3a33",trees:.85,rain:0,snow:0,fire:.85,stars:1,aurora:0,aur1:"#000000",aur2:"#000000",mist:.25,cam:Ct(0,10,92),look:Ct(0,16,-40)},aurora:{sat:.65,skyTop:"#03060a",skyHorizon:"#122029",skyBottom:"#070c10",fog:"#0d161b",fogDensity:.0034,low:"#3b464c",high:"#4c575e",snowC:"#a9b5bb",snowLine:55,water:0,waterC:"#0c1418",waterRough:.08,sunC:"#000000",sunDir:Ct(0,.3,-1),sunSize:0,lightC:"#8fb1aa",light:.14,lightDir:Ct(.2,.6,-.8),hemiSky:"#1f3a3a",hemiGround:"#05080a",hemi:.18,treeC:"#2a3833",trees:.6,rain:0,snow:.22,fire:0,stars:.75,aurora:1,aur1:"#4f8f80",aur2:"#6f6595",mist:.15,cam:Ct(30,15,102),look:Ct(0,34,-80)},ocean:{sat:.7,skyTop:"#4a4e68",skyHorizon:"#d4a28b",skyBottom:"#7c6670",fog:"#c29d90",fogDensity:.0026,low:"#4a4652",high:"#5d5765",snowC:"#a69aa3",snowLine:200,water:11,waterC:"#585d77",waterRough:.14,sunC:"#ecd0b2",sunDir:Ct(0,.17,-1),sunSize:.0045,lightC:"#efcfb4",light:.95,lightDir:Ct(0,.2,-1),hemiSky:"#c9a6a0",hemiGround:"#3c3a4a",hemi:.7,treeC:"#2f2c35",trees:0,rain:0,snow:0,fire:0,stars:.15,aurora:0,aur1:"#000000",aur2:"#000000",mist:.35,cam:Ct(0,7,125),look:Ct(0,9,0)}};for(let S in Dt)bc.forEach((q,ot)=>{Dt[S][q]=md[S][ot]});let le=["skyTop","skyHorizon","skyBottom","fog","low","high","snowC","waterC","sunC","lightC","hemiSky","hemiGround","treeC","aur1","aur2"],F=["sunDir","lightDir","cam","look"],pe=S=>{let q={};for(let ot in S)le.includes(ot)?q[ot]=new he(S[ot]):F.includes(ot)?q[ot]=S[ot].clone():q[ot]=S[ot];return q},Kt=S=>pe(S),w=pe(Dt.rain),g=Kt(w),H=Kt(w),$=0,tt=1,Nt=0,Lt="rain",st="full",lt=!1,Pt=!1,ee=1,Gt=1,Vt=S=>S<.5?4*S*S*S:1-Math.pow(-2*S+2,3)/2,ae=S=>{for(let q in H)le.includes(q)||F.includes(q)?w[q].copy(g[q]).lerp(H[q],S):w[q]=g[q]+(H[q]-g[q])*S},ne=0,Ee=()=>{let S=w;h.uTop.value.copy(S.skyTop),h.uHorizon.value.copy(S.skyHorizon),h.uBottom.value.copy(S.skyBottom),h.uSunColor.value.copy(S.sunC),h.uSunDir.value.copy(S.sunDir).normalize(),h.uSunSize.value=S.sunSize,h.uStars.value=S.stars,h.uAurora.value=S.aurora,h.uAur1.value.copy(S.aur1),h.uAur2.value.copy(S.aur2),e.fog.color.copy(S.fog),e.fog.density=S.fogDensity*(1+bt.focus*.35),S.pCabin>.5?(p.uHole.value.set(...B.cabin.holeBox),P.uStudy.value.set(...B.cabin.studyBox)):(p.uHole.value.copy(d),P.uStudy.value.copy(d)),p.uLow.value.copy(S.low),p.uHigh.value.copy(S.high),p.uSnow.value.copy(S.snowC),p.uSnowLine.value=S.snowLine,_.position.y=S.water,T.color.copy(S.waterC),T.roughness=S.waterRough,b.color.copy(S.lightC),b.intensity=S.light*2.2,b.position.copy(S.lightDir).multiplyScalar(300),x.color.copy(S.hemiSky),x.groundColor.copy(S.hemiGround),x.intensity=S.hemi*1.6,it.color.copy(S.treeC),R.uTree.value=S.trees,et.visible=S.trees>.01,Et.visible=et.visible,rt.uniforms.uOpacity.value=S.rain*(1-ne),It.visible=S.rain*(1-ne)>.01,Yt.material.uniforms.uOpacity.value=S.snow*(1-ne),Yt.visible=S.snow*(1-ne)>.01,xt.material.uniforms.uOpacity.value=S.fire,xt.visible=S.fire>.01;let q=S.pCabin>.5&&B.cabin.inside(n.position.x,n.position.z)?1:0;ne+=(q-ne)*.12,V.forEach(ot=>{let Ht=Math.hypot(ot.position.x-n.position.x,ot.position.z-n.position.z);ot.material.opacity=S.mist*.5*c(12,80,Ht)*(1-ne),ot.material.color.copy(S.fog),ot.visible=S.mist>.01&&ne<.99}),as.uSat.value=S.sat},G={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",S=>{G.x=S.clientX/innerWidth*2-1,G.y=S.clientY/innerHeight*2-1},{passive:!0});let kt=7.5,St=24,D={px:0,pz:0,vx:0,vz:0,homing:!1,yaw:0,yawTo:0,pitch:0,pitchTo:0,ground:0,on:!1},Ft=new Set,ut={phase:0,amp:0,run:0,lastStep:0},N=70,U={y:0,v:0,air:!1},Z=-1.1,pt=.9,Wt={x:-1,y:-1,inside:!1},at={on:!1,t0:0,dur:1,tx:0,tz:0,sy:0,ty:0,yaw0:0,yaw1:0,lift:10,y:0,roll:0},zt=1/60,E=new I,O=new I,K=new I,vt=new I(0,1,0),bt={focus:0,focusTo:0,pan:0,panTo:0,pulse:0},wt=new I,Ut=new I,fe=S=>{let q=st!=="full";G.sx+=(G.x-G.sx)*.035,G.sy+=(G.y-G.sy)*.035;let ot=(q?0:1)*(1-c(0,35,Math.hypot(D.px,D.pz)));n.position.set(w.cam.x+Math.sin(S*.05)*3*ot+G.sx*6*ot,w.cam.y+Nt+Math.sin(S*.07)*.8*ot-G.sy*2.5*ot,w.cam.z),wt.copy(w.look),wt.x+=G.sx*3*ot;let Ht=Math.hypot(D.px,D.pz);if(Ht>.01||Math.abs(D.yaw)>5e-4||Math.abs(D.pitch)>5e-4){E.copy(w.look).sub(w.cam);let Se=E.length();E.normalize();let Te=n.position.x+D.px,ge=n.position.z+D.pz,ve=f(Te,ge);for(let Zt=0;Zt<6.28;Zt+=1.57)ve=Math.max(ve,f(Te+Math.cos(Zt)*4,ge+Math.sin(Zt)*4));let ye=B.floorAt(Te,ge,w);ve=ye&&ye.under?ye.y:Math.max(ve,_.position.y,ye?ye.y:-1e9),ye&&ye.under||(ve=Math.max(ve,B.solidTop(Te,ge,D.ground-kt+U.y,w)));let Ve=ve+kt;D.ground+=(Ve-D.ground)*.12,D.ground=Math.max(D.ground,ve+3);let sn=c(0,35,Ht);n.position.set(Te,Math.max(n.position.y*(1-sn)+D.ground*sn,sn>.5?ve+3:-1e9),ge),at.on&&(n.position.y=Math.max(at.y,ve+3),D.ground=n.position.y),n.position.y+=U.y,K.copy(E).applyAxisAngle(vt,D.yaw),K.y=K.y*(1-sn)-.04*sn+D.pitch,K.normalize(),wt.copy(n.position).addScaledVector(K,Se)}else D.ground=n.position.y;let Ot=bt.focus;(Ot>5e-4||Math.abs(bt.pan)>5e-4)&&(Ut.copy(w.look).sub(w.cam).normalize(),n.position.addScaledVector(Ut,Ot*34),n.position.y-=Ot*4-bt.pulse*2,n.position.x+=bt.pan*10*Ot,wt.x+=bt.pan*38*Ot,wt.y-=Ot*3);let Xt=at.on?at.roll:0;if(ut.amp>.001&&st==="full"){let Se=Math.sin(ut.phase),Te=Math.sin(ut.phase*2),ge=ut.amp*(1+ut.run*.8),ve=-Math.abs(Se)*.32*ge+.16*ge,ye=Se*.16*ge;n.position.y+=ve,Ut.copy(wt).sub(n.position),Ut.y=0,Ut.normalize(),n.position.x+=-Ut.z*ye,n.position.z+=Ut.x*ye,wt.y+=ve*.5,Xt+=Se*.006*ge+Te*.0015*ge}n.lookAt(wt),Xt&&n.rotateZ(Xt);let me=(innerWidth<700?62:50)-Ot*6+bt.pulse*1.5;Math.abs(n.fov-me)>.01&&(n.fov=me,n.updateProjectionMatrix()),m.position.copy(n.position),It.position.set(n.position.x,n.position.y-20,n.position.z),Yt.position.set(n.position.x,n.position.y-20,n.position.z),xt.position.set(w.look.x*.3,_.position.y,w.cam.z-90)},we=new I,$e=new I,Oe=new I,De=new I,je=(S,q,ot)=>{if(ot<0)return 0;if(S==="torch")return q?ot<.04?.55:ot<.08?.12:ot<.16?.12+(ot-.08)/.08*.88:1:Math.max(0,1-ot/.12);if(q){if(ot<.12)return ot/.12*.35;if(ot<.24)return .35-(ot-.12)/.12*.2;if(ot<.7){let Ht=(ot-.24)/.46;return .15+(1-Math.pow(1-Ht,3))*.85}return 1}return Math.max(0,1-Math.pow(ot/.5,.8))},qn=(S,q)=>{n.updateMatrixWorld(),we.set(0,0,-1).applyQuaternion(n.quaternion),$e.set(1,0,0).applyQuaternion(n.quaternion),Oe.set(0,1,0).applyQuaternion(n.quaternion);let ot=1-Math.pow(1-.16,zt*60),Ht=Math.min(1.6,e.fog.density/.004),Ot=rt.uniforms.uOpacity.value,Xt=(S-yt.torch.since)/1e3,me=je("torch",yt.torch.on,Xt)*(yt.torch.on&&Xt>.16?.985+.015*Math.sin(q*40)*Math.sin(q*7):1);if(yt.torch.level=me,me>.001){let ve=ut.amp*(st==="full"?1:0);_e.position.copy(n.position).addScaledVector($e,.75).addScaledVector(Oe,-.6-Math.sin(ut.phase)*.05*ve).addScaledVector(we,.4),De.copy(we),st==="full"&&(De.addScaledVector($e,Math.sin(q*1.7)*.004+Math.sin(q*4.3)*.002+Math.sin(ut.phase)*.01*ve),De.addScaledVector(Oe,Math.sin(q*2.1+1)*.004+Math.sin(ut.phase*2)*.008*ve)),yt.aim.lerp(De.normalize(),st==="full"?ot:1).normalize(),_e.target.position.copy(_e.position).addScaledVector(yt.aim,40);let ye=90,Ve=Math.tan(_e.angle)*ye;_t.position.copy(_e.position),_t.lookAt(_e.target.position),_t.scale.set(Ve,Ve,ye)}_e.intensity=me*520,_e.castShadow=me>.02,$t.uniforms.uOpacity.value=me*(.018+.03*Ht+.035*Ot),_t.visible=me>.01;let Se=(S-yt.lamp.since)/1e3,Te=yt.lamp.on&&Se>.7?.88+.07*Math.sin(q*9.3+Math.sin(q*3.1)*2)+.04*Math.sin(q*23.7)+.02*Math.sin(q*41):1,ge=je("lamp",yt.lamp.on,Se)*Te;if(yt.lamp.level=ge,st==="full"){let ve=(D.vx-yt.lastVX)/Math.max(zt,.001),ye=(D.vz-yt.lastVZ)/Math.max(zt,.001),Ve=-(ve*we.z-ye*we.x)*.0012,sn=-(ve*we.x+ye*we.z)*.0012,Zt=zt;yt.swingV+=(-yt.swing*14-yt.swingV*1.8+Ve)*Zt,yt.swing+=yt.swingV*Zt,yt.swingZV+=(-yt.swingZ*14-yt.swingZV*1.8+sn+Math.sin(ut.phase*2)*.6*ut.amp)*Zt,yt.swingZ+=yt.swingZV*Zt}yt.lastVX=D.vx,yt.lastVZ=D.vz,xe.position.copy(n.position).addScaledVector($e,1.1+Math.sin(yt.swing)*1.4).addScaledVector(Oe,-2.4+(1-Math.cos(yt.swing))*1.4).addScaledVector(we,2.2+Math.sin(yt.swingZ)*1),st==="full"&&yt.lamp.on&&(xe.position.y+=Math.sin(q*6.1)*.03),xe.intensity=ge*900,yt.level=Math.max(me,ge),Dn.classList.toggle("light-on",yt.level>.05),Dn.classList.toggle("lamp-on",ge>.05)},mi=()=>{let S=performance.now(),q=window.MEOW_SOUND;yt.state==="off"?(yt.state="torch",yt.torch.on=!0,yt.torch.since=S,yt.aim.copy(we.lengthSq()?we:yt.aim),q&&q.click&&q.click(!0)):yt.state==="torch"?(yt.state="lamp",yt.torch.on=!1,yt.torch.since=S,yt.lamp.on=!0,yt.lamp.since=S+120,q&&q.click&&q.click(!1),q&&q.ignite&&setTimeout(()=>q.ignite(),120)):(yt.state="off",yt.lamp.on=!1,yt.lamp.since=S,q&&q.puff&&q.puff()),q&&q.fire&&q.fire(yt.state==="lamp"),!lt&&Pt&&(lt=!0,ie=!0,requestAnimationFrame(Gi)),dispatchEvent(new CustomEvent("meow:light",{detail:{state:yt.state}}))},gi=(S,q,ot)=>{if(et.visible&&R.uTree.value>.5)for(let Ht=0;Ht<J.length;Ht++){let Ot=J[Ht],Xt=Ot.p.x-S,me=Ot.p.z-q,Se=Ot.s.x*.75+1.2+ot;if(Xt*Xt+me*me<Se*Se)return!1}return!B.blockedAt(S,q,ot,w)},Es=()=>{let S=w.cam.x,q=w.cam.z,ot=w.look.x-w.cam.x,Ht=w.look.z-w.cam.z,Ot=Math.hypot(ot,Ht)||1,Xt=Math.atan2(Ht/Ot,ot/Ot),me=et.visible&&R.uTree.value>.5,Se=_.position.y,Te=[];for(let ye=-.7;ye<=.701;ye+=.05)for(let Ve=70;Ve<=380;Ve+=10){let sn=Xt+ye,Zt=S+Math.cos(sn)*Ve,Fe=q+Math.sin(sn)*Ve,Qe=f(Zt,Fe);if(Qe<Se+1.5||Qe>N-6)continue;let We=0;if(me)for(let gn=0;gn<J.length;gn++){let Mn=J[gn].p.x-Zt,wn=J[gn].p.z-Fe;Mn*Mn+wn*wn<1600&&We++}let mn=(me?Math.min(We,22)*2:30)-Math.abs(ye)*34-Ve*.045;Te.push({x:Zt,z:Fe,a:ye,d:Ve,score:mn})}Te.sort((ye,Ve)=>Ve.score-ye.score);let ge=null;for(let ye of Te.slice(0,60)){if(!gi(ye.x,ye.z,4))continue;let Ve=!0,sn=(S-ye.x)/ye.d,Zt=(q-ye.z)/ye.d;for(let Fe=2;Fe<70&&Ve;Fe+=2.5)Ve=gi(ye.x+sn*Fe,ye.z+Zt*Fe,1.5);for(let Fe=3;Fe<30&&Ve;Fe+=3)Ve=gi(ye.x-sn*Fe,ye.z-Zt*Fe,1);if(Ve){ge=ye;break}}ge||(ge={x:S+Math.cos(Xt)*60,z:q+Math.sin(Xt)*60,a:0,d:60});let ve=st==="full";at.on=!0,at.t0=performance.now(),at.dur=ve?2300+ge.d*5.2:700,at.sx=D.px,at.sz=D.pz,at.tx=ge.x-S,at.tz=ge.z-q,at.sy=n.position.y,at.ty=Math.max(f(ge.x,ge.z),Se)+kt,at.yaw0=D.yaw,at.yaw1=-ge.a,at.lift=ve?9+ge.d*.02:0,D.vx=D.vz=0,D.homing=!1,!lt&&Pt&&(lt=!0,ie=!0,requestAnimationFrame(Gi))},os=S=>(S=Math.min(1,Math.max(0,S)),S*S*S*(S*(S*6-15)+10)),ar=S=>{let q=Math.min(1,(S-at.t0)/at.dur),ot=os(q);D.px=at.sx+(at.tx-at.sx)*ot,D.pz=at.sz+(at.tz-at.sz)*ot,D.vx=D.vz=0;let Ht=os(q/.55);D.yaw=D.yawTo=at.yaw0+(at.yaw1-at.yaw0)*Ht,D.pitch=D.pitchTo=-.07*Math.sin(Math.PI*q)*(1-q*.5);let Ot=w.cam.x+D.px,Xt=w.cam.z+D.pz,me=os((q-.3)/.7),Se=at.sy+(at.ty-at.sy)*me+at.lift*Math.pow(Math.sin(Math.PI*Math.min(1,q*1.15)),1.4);Se=Math.max(Se,Math.max(f(Ot,Xt),_.position.y)+4),at.y=Se,at.roll=(at.yaw1-at.yaw0)*.22*Math.sin(Math.PI*Math.min(1,q*1.3)),q>=1&&(at.on=!1,at.roll=0,D.ground=at.ty,at.justLanded=!0)},Dn=document.documentElement,v=(S,q,ot)=>Math.max(q,Math.min(ot,S)),W=()=>!Pt||Dn.classList.contains("locked")||bt.focusTo>0,ht=S=>S&&S.closest&&S.closest(".sidebar, .modal, .gallery, .top, .composer, .tools, .tree-card, .home-btn, .backdrop, .walk-hint, input, button, a, label"),j=()=>{lt||ki()},nt=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"],Qt=S=>S&&(/INPUT|TEXTAREA|SELECT/.test(S.tagName)||S.isContentEditable),ie=!1;addEventListener("keydown",S=>{!nt.includes(S.code)||Qt(S.target)||W()||S.metaKey||S.ctrlKey||S.altKey||document.querySelector(".modal:not([hidden])")||(S.code.startsWith("Shift")||S.preventDefault(),Ft.add(S.code),D.homing=!1,!at.on&&!S.code.startsWith("Shift")&&Math.hypot(D.px,D.pz)<3&&(Es(),Ce()),!lt&&Pt&&(lt=!0,ie=!0,requestAnimationFrame(Gi)))}),addEventListener("keyup",S=>Ft.delete(S.code)),addEventListener("keydown",S=>{S.code!=="KeyF"||S.repeat||Qt(S.target)||!Pt||Dn.classList.contains("locked")||document.querySelector(".modal:not([hidden])")||S.metaKey||S.ctrlKey||S.altKey||(S.preventDefault(),mi())}),addEventListener("blur",()=>{Ft.clear(),Wt.inside=!1}),document.addEventListener("mouseleave",()=>{Wt.inside=!1}),addEventListener("keydown",S=>{S.code!=="Space"||Qt(S.target)||W()||!D.on||at.on||document.querySelector(".modal:not([hidden])")||(S.preventDefault(),!(S.repeat||U.air)&&(U.v=15.5,U.air=!0,!lt&&Pt&&(lt=!0,ie=!0,requestAnimationFrame(Gi))))});let Jt=()=>[innerWidth/2,innerHeight/2],te=()=>!!document.pointerLockElement,ue=0,Ce=()=>{if(!(te()||!i.requestPointerLock||ue>0))try{let S=i.requestPointerLock();S&&S.catch&&S.catch(()=>{ue++})}catch{ue++}};document.addEventListener("pointerlockerror",()=>{ue++});let Ne=()=>{te()&&document.exitPointerLock&&(window.MEOW_UNLOCK_REASON="self",document.exitPointerLock())},de=()=>Math.max(.2,Math.min(2.5,window.MEOW_STATE&&Number(window.MEOW_STATE.sens)||1)),Ye=()=>{!D.on||W()||B.cabin.study.back(performance.now())||window.MEOW_BG&&window.MEOW_BG.home()},ln=(S,q)=>(Gn.set(S/innerWidth*2-1,-(q/innerHeight)*2+1),qe.setFromCamera(Gn,n),qe),tn=document.createElement("div");tn.className="aim-dot",document.body.appendChild(tn),document.addEventListener("pointerlockchange",()=>{if(Dn.classList.toggle("pl",te()),!te()){let S=window.MEOW_UNLOCK_REASON;window.MEOW_UNLOCK_REASON="",S||setTimeout(()=>{document.hasFocus()&&!document.hidden&&Ye()},80)}te()?(ke.x=Jt()[0],ke.y=Jt()[1]):ke.id>=0&&wc(-1)}),addEventListener("keydown",S=>{if(S.key!=="Escape"||!D.on||Qt(S.target)||document.querySelector(".modal:not([hidden])"))return;let q=document.getElementById("treeCard");q&&!q.hidden&&q.classList.contains("show")||Ye()},!0);let Ze={aimed:!1},hn=document.createElement("div");hn.className="act-hint",hn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v6" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 9h5.5V3.4A6 6 0 0 0 6.5 9z" fill="currentColor"/></svg><span></span>',document.body.appendChild(hn);let ce=hn.querySelector("span"),bn=(S,q)=>window.MEOW_I18N?window.MEOW_I18N.t(S):q,Be=!1,Hn=0,$n=(S,q)=>{let ot=B.cabin.door;if(!D.on||at.on||w.pCabin<.5||!ot.near(n.position.x,n.position.z))return!1;Gn.set(S/innerWidth*2-1,-(q/innerHeight)*2+1),qe.setFromCamera(Gn,n);let Ht=qe.intersectObject(ot.mesh,!1)[0];return!!Ht&&Ht.distance<26},ri=()=>{let S=B.cabin.door;if(!S.canToggle(n.position.x,n.position.z))return!1;let q=S.toggle(performance.now());return window.MEOW_SOUND&&window.MEOW_SOUND.door&&window.MEOW_SOUND.door(q),!lt&&Pt&&(lt=!0,ie=!0,requestAnimationFrame(Gi)),!0},Hi=()=>{if(++Hn%3)return;let[S,q]=te()?Jt():[ke.x,ke.y];Ze.aimed=$n(S,q);let ot=B.cabin.study.hover(ln(S,q),D.on&&!at.on&&w.pCabin>.5&&ne>.5);Dn.classList.toggle("on-book",ot),Ze.aimed!==Be&&(Be=Ze.aimed,hn.classList.toggle("show",Ze.aimed)),Ze.aimed&&(ce.textContent=B.cabin.door.open?bn("doorClose","Click to close the door"):bn("doorOpen","Click to open the door"))};addEventListener("keydown",S=>{S.code!=="KeyE"||Qt(S.target)||W()||!D.on||S.repeat||B.cabin.door.near(n.position.x,n.position.z)&&w.pCabin>.5&&ri()});let Le=null,en=null,ke={x:0,y:0,pending:!1,id:-1};addEventListener("pointerdown",S=>{if(W()||ht(S.target)||at.on)return;if(S.button===2||S.pointerType==="touch"&&S.button===0)Le={x:S.clientX,y:S.clientY,yaw:D.yawTo,pitch:D.pitchTo,moved:!1,touch:S.pointerType==="touch"},S.preventDefault();else if(S.button===0){if(D.on&&!te()&&S.pointerType==="mouse"&&!ue&&i.requestPointerLock){Ce(),en=null,S.preventDefault(),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}));return}en={x:S.clientX,y:S.clientY},S.preventDefault()}}),addEventListener("contextmenu",S=>{Pt&&!ht(S.target)&&!Dn.classList.contains("locked")&&S.preventDefault()}),addEventListener("pointermove",S=>{if(Le){let q=S.clientX-Le.x,ot=S.clientY-Le.y;Math.hypot(q,ot)>5&&(Le.moved=!0),D.yawTo=Le.yaw-q*.0035,D.pitchTo=v(Le.pitch-ot*.0025,Z,pt),Dn.classList.add("looking"),j();return}if(te()){if(D.on&&!at.on&&!W()){let q=de();D.yawTo-=S.movementX*.0024*q,D.pitchTo=v(D.pitchTo-S.movementY*.002*q,Z,pt),j()}return}if(Wt.x=S.clientX,Wt.y=S.clientY,Wt.inside=!0,Wt.ui=!!ht(S.target),W()||ht(S.target)){ke.id>=0&&wc(-1);return}if(D.on&&!at.on&&S.pointerType!=="touch"&&(S.movementX||S.movementY)){let q=de();D.yawTo-=S.movementX*.0028*q,D.pitchTo=v(D.pitchTo-S.movementY*.0022*q,Z,pt),j()}ke.x=S.clientX,ke.y=S.clientY,ke.pending=!0},{passive:!0}),addEventListener("pointerup",S=>{let q=!1;if(Le?(q=Le.touch&&!Le.moved,Le=null,Dn.classList.remove("looking")):en&&S.button===0&&(q=te()||Math.hypot(S.clientX-en.x,S.clientY-en.y)<8),en=null,q){let[ot,Ht]=te()?Jt():[S.clientX,S.clientY];if(D.on&&w.pCabin>.5&&ne>.5&&B.cabin.study.click(ln(ot,Ht),performance.now())){j();return}if($n(ot,Ht)){ri();return}let Ot=ke.id>=0?ke.id:Ri(ot,Ht);Ot>=0?(cr.set(Ot,performance.now()),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"click",id:Ot,x:ot,y:Ht}})),j()):dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}))}});let qe=new kr;qe.far=900;let Gn=new Re,Ri=(S,q)=>{if(!et.visible||R.uTree.value<.5)return-1;Gn.set(S/innerWidth*2-1,-(q/innerHeight)*2+1),qe.setFromCamera(Gn,n);let ot=qe.intersectObjects([et,Et],!1)[0];return ot?ot.instanceId:-1},oo=new he(2.6,2.6,2.4),wc=S=>{S!==ke.id&&(ke.id>=0&&et.setColorAt(ke.id,J[ke.id]?J[ke.id].c:Q),ke.id=S,S>=0&&et.setColorAt(S,oo),et.instanceColor.needsUpdate=!0,Dn.classList.toggle("on-tree",S>=0),dispatchEvent(new CustomEvent("meow:tree",{detail:S>=0?{type:"hover",id:S,x:ke.x,y:ke.y}:{type:"leave"}})),j())},cr=new Map,sh=new Ge,rh=new Cn,Tc=new Ae,yd=S=>{cr.size&&(cr.forEach((q,ot)=>{let Ht=(S-q)/1e3,Ot=J[ot];if(!Ot){cr.delete(ot);return}let Xt=Ht>2.6?0:Math.sin(Ht*15)*Math.exp(-Ht*2.1)*.17;rh.set(Xt*.6,0,Xt),sh.setFromEuler(rh).multiply(Ot.q),Tc.compose(Ot.p,sh,Ot.s),et.setMatrixAt(ot,Tc),At[ot]&&Et.setMatrixAt(ot,Tc),Ht>2.6&&cr.delete(ot)}),et.instanceMatrix.needsUpdate=!0,Et.instanceMatrix.needsUpdate=!0)},Ac=new On(4,4,{type:ti,depthBuffer:!0}),as={tScene:{value:Ac.texture},uRes:{value:new Re(4,4)},uTime:h.uTime,uBlur:{value:3},uBand:{value:.22},uFocusY:{value:.47},uPull:{value:0},uAberr:{value:.006},uSat:{value:0},uGrain:{value:.022},uVig:{value:.32},uFlicker:{value:.01}},oh=new Ys,vd=new es(-1,1,1,-1,0,1);oh.add(new Ie(new un(2,2),new an({uniforms:as,depthTest:!1,depthWrite:!1,vertexShader:`
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
      }`})));let ah=0,lr=()=>{let S=innerWidth,q=innerHeight;t.setSize(S,q,!1);let ot=t.getDrawingBufferSize(new Re);Ac.setSize(ot.x,ot.y),as.uRes.value.copy(ot),n.aspect=S/q,n.fov=S<700?62:50,n.updateProjectionMatrix(),lt||ki()},ch=0,lh=S=>{let q=s.getElapsedTime();h.uTime.value=q;let ot=Math.min(1,(S-$)/tt);ae(Vt(ot)),Nt=Math.sin(Math.PI*Vt(ot))*(st==="full"?9:0)*(ot<1?1:0),A.offset.x=q*.004,A.offset.y=q*.006,V.forEach(Zt=>{Zt.position.x+=Zt.userData.v*.016,Zt.position.x>520&&(Zt.position.x=-520),Zt.position.x<-520&&(Zt.position.x=520),Zt.lookAt(n.position.x,Zt.position.y,n.position.z)}),ee+=(Gt-ee)*.04;let Ht=st==="full"?.035:1;bt.focus+=(bt.focusTo-bt.focus)*Ht,bt.pan+=(bt.panTo-bt.pan)*(st==="full"?.05:1),bt.pulse*=.94;let Ot=st==="full",Xt=Math.min(.1,Math.max(.001,(S-(ch||S))/1e3))*60,me=Zt=>Ot?1-Math.pow(1-Zt,Xt):1;{let Zt=Xt/60,Fe=w.look.x-w.cam.x,Qe=w.look.z-w.cam.z,We=Math.hypot(Fe,Qe)||1,mn=Math.cos(D.yaw),gn=Math.sin(D.yaw),Mn=Fe/We*mn+Qe/We*gn,wn=-(Fe/We)*gn+Qe/We*mn,Ci=at.on?0:1,hr=Ci*((Ft.has("KeyW")||Ft.has("ArrowUp")?1:0)-(Ft.has("KeyS")||Ft.has("ArrowDown")?1:0)),co=Ci*((Ft.has("KeyD")||Ft.has("ArrowRight")?1:0)-(Ft.has("KeyA")||Ft.has("ArrowLeft")?1:0)),lo=Mn*hr-wn*co,ho=wn*hr+Mn*co,uo=Math.hypot(lo,ho),fh=St*(Ft.has("ShiftLeft")||Ft.has("ShiftRight")?2.4:1);uo>0&&(lo=lo/uo*fh,ho=ho/uo*fh);let ph=1-Math.pow(1-(uo>0?.08:.12),Xt);D.vx+=(lo-D.vx)*ph,D.vz+=(ho-D.vz)*ph;let Cc=(mo,Ed)=>{let go=w.cam.x+mo,ur=w.cam.z+Ed;if(!(Math.abs(go)<820&&ur>-900&&ur<420&&f(go,ur)<N))return!1;if(et.visible&&R.uTree.value>.5)for(let Pc=0;Pc<J.length;Pc++){let Ic=J[Pc],mh=Ic.p.x-go,gh=Ic.p.z-ur,xh=Ic.s.x*.75+1.2;if(mh*mh+gh*gh<xh*xh)return!1}return!B.blockedAt(go,ur,0,w,D.ground-kt+U.y)},fo=D.px+D.vx*Zt,po=D.pz+D.vz*Zt;if(at.on?ar(S):Cc(fo,po)?(D.px=fo,D.pz=po):Cc(fo,D.pz)?(D.px=fo,D.vz*=.5):Cc(D.px,po)?(D.pz=po,D.vx*=.5):(D.vx*=.3,D.vz*=.3),D.homing){let mo=1-Math.pow(.94,Xt);D.px-=D.px*mo,D.pz-=D.pz*mo,D.vx=D.vz=0,Math.hypot(D.px,D.pz)<.05&&(D.px=D.pz=0,D.homing=!1)}let Sd=S-Math.max(yt.torch.since,yt.lamp.since)<1200;ie&&!Ft.size&&Math.hypot(D.vx,D.vz)<.05&&!D.homing&&!Sd&&!at.on&&!U.air&&(ie=!1,lt=st==="full")}if(zt=Xt/60,U.air&&(U.v-=44*zt,U.y+=U.v*zt,U.y<=0&&(U.y=0,U.air=!1,ut.amp=Math.min(1.4,ut.amp+.5),window.MEOW_SOUND&&window.MEOW_SOUND.step))){let Zt=n.position.x,Fe=n.position.z,Qe=f(Zt,Fe),We=(B.floorAt(Zt,Fe,w)||{y:-1e9}).y>Qe+.2?"wood":Qe<_.position.y+.6?"water":Lt==="snow"||Qe>p.uSnowLine.value-6?"snow":"grass";window.MEOW_SOUND.step(We,1.5),setTimeout(()=>window.MEOW_SOUND.step(We,1.1),70)}if(te()&&D.on&&!W()&&Hn%3===1){let[Zt,Fe]=Jt();ke.x=Zt,ke.y=Fe,ke.pending=!0}if(!te()&&D.on&&!at.on&&Wt.inside&&!Wt.ui&&!Le&&!W()&&st==="full"&&Wt.y>innerHeight*.15&&Wt.y<innerHeight*.85){let Zt=Math.max(30,innerWidth*.04);Wt.x>innerWidth-Zt?D.yawTo-=1.1*zt*(Wt.x-(innerWidth-Zt))/Zt:Wt.x>=0&&Wt.x<Zt&&(D.yawTo+=1.1*zt*(Zt-Wt.x)/Zt)}Hi(),B.cabin.feet=D.on?D.ground-kt:void 0,D.on&&!at.on&&at.justLanded&&(at.justLanded=!1,Ce()),!D.on&&te()&&Ne();{let Zt=Math.hypot(D.vx,D.vz),Fe=Ft.has("ShiftLeft")||Ft.has("ShiftRight")?1:0;ut.run+=(Fe-ut.run)*(1-Math.pow(.9,Xt));let Qe=Math.min(1.2,Zt/St);ut.amp+=(Qe-ut.amp)*(1-Math.pow(.88,Xt)),ut.phase+=Math.PI*2*(.95+.5*ut.run)*Math.min(1,Zt/St+.15)*zt*(Zt>.3?1:.4);let We=Math.floor(ut.phase/Math.PI);if(We!==ut.lastStep){if(ut.lastStep=We,Zt>St*.25&&window.MEOW_SOUND&&window.MEOW_SOUND.step){let gn=n.position.x,Mn=n.position.z,wn=f(gn,Mn),Ci=(B.floorAt(gn,Mn,w)||{y:-1e9}).y>wn+.2?"wood":wn<_.position.y+.6?"water":Lt==="snow"||wn>p.uSnowLine.value-6?"snow":"grass";window.MEOW_SOUND.step(Ci,Math.min(1.5,Zt/St))}let mn=f(n.position.x,n.position.z);if(Zt>St*.25&&mn>_.position.y+.6&&(Lt==="snow"||mn>p.uSnowLine.value+4)){let gn=n.position.x,Mn=n.position.z,wn=1.5,Ci=new I(f(gn-wn,Mn)-f(gn+wn,Mn),2*wn,f(gn,Mn-wn)-f(gn,Mn+wn)).normalize();ne<.5&&Bt.place(gn,f(gn,Mn),Mn,Math.atan2(-D.vx,-D.vz),Ci)}}}let Se=Math.hypot(D.px,D.pz);if(!Le&&Se<2&&!at.on){let Zt=Math.pow(.96,Xt);D.yawTo*=Zt,D.pitchTo*=Zt}D.yaw+=(D.yawTo-D.yaw)*me(.12),D.pitch+=(D.pitchTo-D.pitch)*me(.12);let Te=Se>3;Te!==D.on&&(D.on=Te,Dn.classList.toggle("exploring",Te)),yd(S),t.toneMappingExposure=ee,Ee(),fe(q),B.update(w,q,n.position,_.position.y),se.update(w.pRipples*(1-ne),n.position,_.position.y),Bt.update(Math.min(1,Math.max(0,(100-w.snowLine)/80))),qn(S,q),ke.pending&&(ke.pending=!1,wc(ne>.5?-1:Ri(ke.x,ke.y)));let ge=t.getPixelRatio(),ve=st==="full",ye=ot<1?Math.sin(Math.PI*Vt(ot))*6:0,Ve=ve?Math.max(0,1-(S-ah)/3600):0,sn=c(0,60,Math.hypot(D.px,D.pz));as.uBlur.value=2.6*ge*(1+bt.focus*2.6)*(1-sn*.7),as.uBand.value=.22-bt.focus*.1+sn*.12,as.uPull.value=(ye*(ve?1:0)+Math.pow(Ve,1.6)*18+bt.pulse*3)*ge,as.uFlicker.value=ve?.012:0,t.setRenderTarget(Ac),t.render(e,n),t.setRenderTarget(null),t.render(oh,vd),ch=S},Nn={last:0,sum:0,n:0,level:0,since:0},Rc=[Math.min(window.devicePixelRatio||1,1.5),1.1,.85,.7],Md=S=>{Nn.since||(Nn.since=S);let q=S-(Nn.last||S);if(Nn.last=S,!(S-Nn.since<5e3||q>250||document.hidden)&&(Nn.sum+=q,Nn.n++,Nn.n>=90)){let ot=Nn.sum/Nn.n;Nn.sum=Nn.n=0,ot>30&&Nn.level<Rc.length-1&&Rc[Nn.level+1]<t.getPixelRatio()&&(Nn.level++,t.setPixelRatio(Rc[Nn.level]),lr())}},Gi=S=>{lt&&(document.hidden||(lh(S),Md(S)),requestAnimationFrame(Gi))},ki=()=>{Pt&&($=-1e9,ee=Gt,lh(performance.now()))},hh=()=>document.documentElement.getAttribute("data-theme")==="dark"?.62:1,uh=(S,q)=>{Dt[S]||(S="rain"),Lt=S,document.documentElement.setAttribute("data-scene",S),g=Kt(w),H=pe(Dt[S]),$=performance.now(),tt=st==="full"?q:1,Pt&&dispatchEvent(new CustomEvent("meow:shot",{detail:{name:S,dur:tt}})),lt||ki()},dh=()=>{Pt&&(st==="full"?lt||(lt=!0,requestAnimationFrame(Gi)):(lt=!1,ki()))};window.MEOW_BG={scenes:Object.keys(Dt),setScene(S){if(!(S===Lt&&Pt)){if(!Pt){Lt=Dt[S]?S:"rain",document.documentElement.setAttribute("data-scene",Lt);return}uh(S,3200)}},setMotion(S){st=S==="reduced"?"reduced":"full",dh()},focus(S){bt.focusTo=S?1:0,S&&(Ne(),at.on=!1,D.homing=!0,D.yawTo=D.pitchTo=0),lt||ki()},toggleLight(){mi()},_standAt(S,q,ot){D.px=S-w.cam.x,D.pz=q-w.cam.z,D.vx=D.vz=0,B.cabin.feet=ot==="study"?Je.y+qt.floor*Je.S:void 0;let Ht=B.floorAt(S,q,w);D.ground=(Ht&&Ht.under?Ht.y:Math.max(f(S,q),_.position.y,Ht?Ht.y:-1e9))+kt,B.cabin.feet=D.ground-kt,lt||ki()},_look(S,q){let ot=w.look.x-w.cam.x,Ht=w.look.z-w.cam.z,Ot=w.cam.x+D.px,Xt=w.cam.z+D.pz,me=Math.atan2(Ht,ot)-Math.atan2(q-Xt,S-Ot);me=Math.atan2(Math.sin(me),Math.cos(me)),D.yaw=D.yawTo=me,D.pitch=D.pitchTo=0,lt||ki()},_printAt(S,q,ot){Bt.place(S,f(S,q),q,ot,new I(0,1,0))},_toggleDoor(){B.cabin.door.toggle(performance.now())},get _study(){return B.cabin.study},get _cabin(){return B.cabin},get _props(){return B},get _cur(){return w},_pos(){let S=new I;return n.getWorldDirection(S),{x:w.cam.x+D.px,z:w.cam.z+D.pz,fly:at.on,pitch:D.pitch,lookY:S.y,yaw:D.yaw,yawTo:D.yawTo,dx:S.x,dz:S.z,cx:n.position.x,cy:n.position.y,cz:n.position.z,ground:D.ground,homing:D.homing}},_sites(){return{cabin:B.cabinAt,circle:B.circleAt}},_nearTree(S,q=16){let ot=J[S%J.length];ot&&this._standAt(ot.p.x,ot.p.z+q)},enter(){Pt&&!at.on&&!W()&&Math.hypot(D.px,D.pz)<3&&(Es(),Ce())},home(){Ne(),B.cabin.study.reset(performance.now());let S=Math.round(D.yaw/(Math.PI*2))*Math.PI*2;D.yaw-=S,D.yawTo-=S,at.on=!1,D.homing=!0,D.yawTo=0,D.pitchTo=0,Ft.clear(),!lt&&Pt&&(lt=!0,ie=!0,requestAnimationFrame(Gi))},pan(S){bt.panTo=Math.max(-1,Math.min(1,S||0))},pulse(){st==="full"&&(bt.pulse=1)},start(){Pt||(Pt=!0,Gt=ee=hh(),w=pe(Dt[Lt]),st==="full"&&(w.cam.add(new I(0,120,230)),w.look.add(new I(0,30,0))),lr(),ah=performance.now(),uh(Lt,4200),i.classList.add("on"),dh())}};{let S=document.querySelector(".walk-hint");S&&S.addEventListener("click",()=>window.MEOW_BG.enter())}addEventListener("resize",()=>{clearTimeout(lr.t),lr.t=setTimeout(lr,120)}),new MutationObserver(()=>{Gt=hh(),lt||ki()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let ao=window.MEOW_STATE;ao&&(Lt=Dt[ao.scene]?ao.scene:"rain",st=ao.motion==="reduced"?"reduced":"full"),window.MEOW_READY&&window.MEOW_STATE&&window.MEOW_READY.then(()=>window.MEOW_BG.start())})();})();
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
