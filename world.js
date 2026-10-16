(()=>{var Ia="186";var iu=0,xl=1,su=2;var eo=1,La=2,rr=3,Ri=0,Dn=1,Nn=2,Ci=0,or=1,Vi=2,_l=3,yl=4,ru=5;var ws=100,ou=101,au=102,cu=103,lu=104,hu=200,uu=201,du=202,fu=203,vl=204,Ml=205,pu=206,mu=207,gu=208,xu=209,_u=210,yu=211,vu=212,Mu=213,Su=214,Qo=0,jo=1,ea=2,Ys=3,ta=4,na=5,ia=6,sa=7,Da=0,Eu=1,wu=2,_i=0,Sl=1,El=2,wl=3,to=4,bl=5,Tl=6,Al=7;var Rl=300,cs=301,bs=302,Na=303,Ua=304,no=306,Zs=1e3,Si=1001,ra=1002,In=1003,bu=1004;var io=1005;var Un=1006,Fa=1007;var ls=1008;var $n=1009,Cl=1010,Pl=1011,ar=1012,Ba=1013,yi=1014,ci=1015,si=1016,Oa=1017,za=1018,cr=1020,Il=35902,Ll=35899,Dl=1021,Nl=1022,li=1023,Ei=1026,hs=1027,Ha=1028,ka=1029,us=1030,Ga=1031;var Va=1033,so=33776,ro=33777,oo=33778,ao=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,Ja=37492,$a=37496,Ka=37488,Qa=37489,co=37490,ja=37491,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,oc=37814,ac=37815,cc=37816,lc=37817,hc=37818,uc=37819,dc=37820,fc=37821,pc=36492,mc=36494,gc=36495,xc=36283,_c=36284,lo=36285,yc=36286;var Ir=2300,oa=2301,$o=2302,ol=2303,al=2400,cl=2401,ll=2402;var Tu=3200;var ho=0,Au=1,Wi="",qn="srgb",Lr="srgb-linear",Dr="linear",en="srgb";var Ko=7680;var Ru=519,Cu=512,Pu=513,Iu=514,vc=515,Lu=516,Du=517,Mc=518,Nu=519,Uu=35044,Ul=35048;var Fl="300 es",gi=2e3,Js=2001;function Nd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ud(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fu(){let i=Nr("canvas");return i.style.display="block",i}var bh={},$s=null;function Bl(...i){let e="THREE."+i.shift();$s?$s("log",e,...i):console.log(e,...i)}function Bu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Mt(...i){i=Bu(i);let e="THREE."+i.shift();if($s)$s("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function bt(...i){i=Bu(i);let e="THREE."+i.shift();if($s)$s("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _s(...i){let e=i.join(" ");e in bh||(bh[e]=!0,Mt(...i))}function Ou(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var zu={[Qo]:jo,[ea]:ia,[ta]:sa,[Ys]:na,[jo]:Qo,[ia]:ea,[sa]:ta,[na]:Ys},wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Th=1234567,Cr=Math.PI/180,ys=180/Math.PI;function lr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function Ol(i,e){return(i%e+e)%e}function Fd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Bd(i,e,t){return i!==e?(t-i)/(e-i):0}function Pr(i,e,t){return(1-t)*i+t*e}function Od(i,e,t,n){return Pr(i,e,1-Math.exp(-t*n))}function zd(i,e=1){return e-Math.abs(Ol(i,e*2)-e)}function Hd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vd(i,e){return i+Math.random()*(e-i)}function Wd(i){return i*(.5-Math.random())}function Xd(i){i!==void 0&&(Th=i);let e=Th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qd(i){return i*Cr}function Yd(i){return i*ys}function Zd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Jd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),g=r((e-n)/2),h=o((e-n)/2),m=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*g,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*g,a*c);break;case"ZXZ":i.set(l*g,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*x,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*x,a*c);break;case"ZYZ":i.set(l*x,l*m,a*u,a*c);break;default:Mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zl={DEG2RAD:Cr,RAD2DEG:ys,generateUUID:lr,clamp:qt,euclideanModulo:Ol,mapLinear:Fd,inverseLerp:Bd,lerp:Pr,damp:Od,pingpong:zd,smoothstep:Hd,smootherstep:kd,randInt:Gd,randFloat:Vd,randFloatSpread:Wd,seededRandom:Xd,degToRad:qd,radToDeg:Yd,isPowerOfTwo:Zd,ceilPowerOfTwo:Jd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:Kd,normalize:Xn,denormalize:Xs},Wl=class Wl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wl.prototype.isVector2=!0;var At=Wl,Gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],g=n[s+3],h=r[o+0],m=r[o+1],x=r[o+2],E=r[o+3];if(g!==E||l!==h||c!==m||u!==x){let p=l*h+c*m+u*x+g*E;p<0&&(h=-h,m=-m,x=-x,E=-E,p=-p);let f=1-a;if(p<.9995){let y=Math.acos(p),R=Math.sin(y);f=Math.sin(f*y)/R,a=Math.sin(a*y)/R,l=l*f+h*a,c=c*f+m*a,u=u*f+x*a,g=g*f+E*a}else{l=l*f+h*a,c=c*f+m*a,u=u*f+x*a,g=g*f+E*a;let y=1/Math.sqrt(l*l+c*c+u*u+g*g);l*=y,c*=y,u*=y,g*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],g=r[o],h=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+u*g+l*m-c*h,e[t+1]=l*x+u*h+c*g-a*m,e[t+2]=c*x+u*m+a*h-l*g,e[t+3]=u*x-a*g-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),g=a(r/2),h=l(n/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=h*u*g+c*m*x,this._y=c*m*g-h*u*x,this._z=c*u*x+h*m*g,this._w=c*u*g-h*m*x;break;case"YXZ":this._x=h*u*g+c*m*x,this._y=c*m*g-h*u*x,this._z=c*u*x-h*m*g,this._w=c*u*g+h*m*x;break;case"ZXY":this._x=h*u*g-c*m*x,this._y=c*m*g+h*u*x,this._z=c*u*x+h*m*g,this._w=c*u*g-h*m*x;break;case"ZYX":this._x=h*u*g-c*m*x,this._y=c*m*g+h*u*x,this._z=c*u*x-h*m*g,this._w=c*u*g+h*m*x;break;case"YZX":this._x=h*u*g+c*m*x,this._y=c*m*g+h*u*x,this._z=c*u*x-h*m*g,this._w=c*u*g-h*m*x;break;case"XZY":this._x=h*u*g-c*m*x,this._y=c*m*g-h*u*x,this._z=c*u*x+h*m*g,this._w=c*u*g+h*m*x;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],g=t[10],h=n+a+g;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>g){let m=2*Math.sqrt(1+n-a-g);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>g){let m=2*Math.sqrt(1+a-n-g);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+g-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xl=class Xl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ah.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),g=2*(r*n-o*t);return this.x=t+l*c+o*g-a*u,this.y=n+l*u+a*c-r*g,this.z=s+l*g+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this.z=qt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this.z=qt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xl.prototype.isVector3=!0;var I=Xl,Oc=new I,Ah=new Gt,ql=class ql{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],g=n[7],h=n[2],m=n[5],x=n[8],E=s[0],p=s[3],f=s[6],y=s[1],R=s[4],w=s[7],b=s[2],T=s[5],P=s[8];return r[0]=o*E+a*y+l*b,r[3]=o*p+a*R+l*T,r[6]=o*f+a*w+l*P,r[1]=c*E+u*y+g*b,r[4]=c*p+u*R+g*T,r[7]=c*f+u*w+g*P,r[2]=h*E+m*y+x*b,r[5]=h*p+m*R+x*T,r[8]=h*f+m*w+x*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],g=u*o-a*c,h=a*l-u*r,m=c*r-o*l,x=t*g+n*h+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/x;return e[0]=g*E,e[1]=(s*c-u*n)*E,e[2]=(a*n-s*o)*E,e[3]=h*E,e[4]=(u*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=m*E,e[7]=(n*l-c*t)*E,e[8]=(o*t-n*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(e,t)),this}rotate(e){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ql.prototype.isMatrix3=!0;var Pt=ql,zc=new Pt,Rh=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qd(){let i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===en&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===en&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:e,whitePoint:n,transfer:Dr,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:n,transfer:en,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),i}var Xt=Qd();function Hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Is,aa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=Nr("canvas")),Is.width=e.width,Is.height=e.height;let s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jd=0,Ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hc(s[o].image)):r.push(Hc(s[o]))}else r=Hc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}var ef=0,kc=new I,Yn=class i extends wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Si,s=Si,r=Un,o=ls,a=li,l=$n,c=i.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=lr(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Mt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Rl;Yn.DEFAULT_ANISOTROPY=1;var Yl=class Yl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],g=l[8],h=l[1],m=l[5],x=l[9],E=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(g-E)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(g+E)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,w=(m+1)/2,b=(f+1)/2,T=(u+h)/4,P=(g+E)/4,_=(x+p)/4;return R>w&&R>b?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=P/n):w>b?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=P/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-x)*(p-x)+(g-E)*(g-E)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(g-E)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this.z=qt(this.z,e.z,t.z),this.w=qt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this.z=qt(this.z,e,t),this.w=qt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yl.prototype.isVector4=!0;var rn=Yl,ca=class extends wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Yn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends ca{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ur=class extends Yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var la=class extends Yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pa=class Pa{constructor(e,t,n,s,r,o,a,l,c,u,g,h,m,x,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,g,h,m,x,E,p)}set(e,t,n,s,r,o,a,l,c,u,g,h,m,x,E,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=g,f[14]=h,f[3]=m,f[7]=x,f[11]=E,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){let h=o*u,m=o*g,x=a*u,E=a*g;t[0]=l*u,t[4]=-l*g,t[8]=c,t[1]=m+x*c,t[5]=h-E*c,t[9]=-a*l,t[2]=E-h*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,m=l*g,x=c*u,E=c*g;t[0]=h+E*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*g,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=E+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,m=l*g,x=c*u,E=c*g;t[0]=h-E*a,t[4]=-o*g,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=E-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,m=o*g,x=a*u,E=a*g;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+E,t[1]=l*g,t[5]=E*c+h,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,m=o*c,x=a*l,E=a*c;t[0]=l*u,t[4]=E-h*g,t[8]=x*g+m,t[1]=g,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*g+x,t[10]=h-E*g}else if(e.order==="XZY"){let h=o*l,m=o*c,x=a*l,E=a*c;t[0]=l*u,t[4]=-g,t[8]=c*u,t[1]=h*g+E,t[5]=o*u,t[9]=m*g-x,t[2]=x*g-m,t[6]=a*u,t[10]=E*g+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tf,e,nf)}lookAt(e,t,n){let s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),$i.crossVectors(n,ei),$i.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),$i.crossVectors(n,ei)),$i.normalize(),To.crossVectors(ei,$i),s[0]=$i.x,s[4]=To.x,s[8]=ei.x,s[1]=$i.y,s[5]=To.y,s[9]=ei.y,s[2]=$i.z,s[6]=To.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],g=n[5],h=n[9],m=n[13],x=n[2],E=n[6],p=n[10],f=n[14],y=n[3],R=n[7],w=n[11],b=n[15],T=s[0],P=s[4],_=s[8],C=s[12],F=s[1],X=s[5],G=s[9],J=s[13],O=s[2],$=s[6],Z=s[10],ee=s[14],xe=s[3],de=s[7],ge=s[11],Se=s[15];return r[0]=o*T+a*F+l*O+c*xe,r[4]=o*P+a*X+l*$+c*de,r[8]=o*_+a*G+l*Z+c*ge,r[12]=o*C+a*J+l*ee+c*Se,r[1]=u*T+g*F+h*O+m*xe,r[5]=u*P+g*X+h*$+m*de,r[9]=u*_+g*G+h*Z+m*ge,r[13]=u*C+g*J+h*ee+m*Se,r[2]=x*T+E*F+p*O+f*xe,r[6]=x*P+E*X+p*$+f*de,r[10]=x*_+E*G+p*Z+f*ge,r[14]=x*C+E*J+p*ee+f*Se,r[3]=y*T+R*F+w*O+b*xe,r[7]=y*P+R*X+w*$+b*de,r[11]=y*_+R*G+w*Z+b*ge,r[15]=y*C+R*J+w*ee+b*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],g=e[6],h=e[10],m=e[14],x=e[3],E=e[7],p=e[11],f=e[15],y=l*m-c*h,R=a*m-c*g,w=a*h-l*g,b=o*m-c*u,T=o*h-l*u,P=o*g-a*u;return t*(E*y-p*R+f*w)-n*(x*y-p*b+f*T)+s*(x*R-E*b+f*P)-r*(x*w-E*T+p*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],g=e[9],h=e[10],m=e[11],x=e[12],E=e[13],p=e[14],f=e[15],y=t*a-n*o,R=t*l-s*o,w=t*c-r*o,b=n*l-s*a,T=n*c-r*a,P=s*c-r*l,_=u*E-g*x,C=u*p-h*x,F=u*f-m*x,X=g*p-h*E,G=g*f-m*E,J=h*f-m*p,O=y*J-R*G+w*X+b*F-T*C+P*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/O;return e[0]=(a*J-l*G+c*X)*$,e[1]=(s*G-n*J-r*X)*$,e[2]=(E*P-p*T+f*b)*$,e[3]=(h*T-g*P-m*b)*$,e[4]=(l*F-o*J-c*C)*$,e[5]=(t*J-s*F+r*C)*$,e[6]=(p*w-x*P-f*R)*$,e[7]=(u*P-h*w+m*R)*$,e[8]=(o*G-a*F+c*_)*$,e[9]=(n*F-t*G-r*_)*$,e[10]=(x*T-E*w+f*y)*$,e[11]=(g*w-u*T-m*y)*$,e[12]=(a*C-o*X-l*_)*$,e[13]=(t*X-n*C+s*_)*$,e[14]=(E*R-x*b-p*y)*$,e[15]=(u*b-g*R+h*y)*$,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,g=a+a,h=r*c,m=r*u,x=r*g,E=o*u,p=o*g,f=a*g,y=l*c,R=l*u,w=l*g,b=n.x,T=n.y,P=n.z;return s[0]=(1-(E+f))*b,s[1]=(m+w)*b,s[2]=(x-R)*b,s[3]=0,s[4]=(m-w)*T,s[5]=(1-(h+f))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(x+R)*P,s[9]=(p-y)*P,s[10]=(1-(h+E))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ls.set(s[0],s[1],s[2]).length(),a=Ls.set(s[4],s[5],s[6]).length(),l=Ls.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fi.copy(this);let c=1/o,u=1/a,g=1/l;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=g,fi.elements[9]*=g,fi.elements[10]*=g,t.setFromRotationMatrix(fi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=gi,l=!1){let c=this.elements,u=2*r/(t-e),g=2*r/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s),x,E;if(l)x=r/(o-r),E=o*r/(o-r);else if(a===gi)x=-(o+r)/(o-r),E=-2*o*r/(o-r);else if(a===Js)x=-o/(o-r),E=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=g,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=gi,l=!1){let c=this.elements,u=2/(t-e),g=2/(n-s),h=-(t+e)/(t-e),m=-(n+s)/(n-s),x,E;if(l)x=1/(o-r),E=o/(o-r);else if(a===gi)x=-2/(o-r),E=-(o+r)/(o-r);else if(a===Js)x=-1/(o-r),E=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=g,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Pa.prototype.isMatrix4=!0;var Et=Pa,Ls=new I,fi=new Et,tf=new I(0,0,0),nf=new I(1,1,1),$i=new I,To=new I,ei=new I,Ph=new Et,Ih=new Gt,bn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],g=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sf=0,Lh=new I,Ds=new Gt,Ui=new Et,Ao=new I,Sr=new I,rf=new I,of=new Gt,Dh=new I(1,0,0),Nh=new I(0,1,0),Uh=new I(0,0,1),Fh={type:"added"},af={type:"removed"},Ns={type:"childadded",child:null},Gc={type:"childremoved",child:null},Sn=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new bn,n=new Gt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Pt}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Sr,Ao,this.up):Ui.lookAt(Ao,Sr,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(af),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let g=l[c];r(e.shapes,g)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),g=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),g.length>0&&(n.shapes=g),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Sn.DEFAULT_UP=new I(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=class extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},cf={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let p=t.getJointPose(E,n),f=this._getHandJoint(c,E);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],h=u.position.distanceTo(g.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Vc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var lt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xt.workingColorSpace){if(e=Ol(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vc(o,r,e+1/3),this.g=Vc(o,r,e),this.b=Vc(o,r,e-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(e,t=qn){function n(r){r!==void 0&&parseFloat(r)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Mt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){let n=Hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Xt.workingToColorSpace(Hn.copy(this),e),Math.round(qt(Hn.r*255,0,255))*65536+Math.round(qt(Hn.g*255,0,255))*256+Math.round(qt(Hn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.workingToColorSpace(Hn.copy(this),t);let n=Hn.r,s=Hn.g,r=Hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let g=o-a;switch(c=u<=.5?g/(o+a):g/(2-o-a),o){case n:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-n)/g+2;break;case r:l=(n-s)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xt.workingColorSpace){return Xt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=qn){Xt.workingToColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,s=Hn.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Ro);let n=Pr(Ki.h,Ro.h,t),s=Pr(Ki.s,Ro.s,t),r=Pr(Ki.l,Ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new lt;lt.NAMES=Hu;var Fr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var er=class extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new I,Fi=new I,Wc=new I,Bi=new I,Us=new I,Fs=new I,Bh=new I,Xc=new I,qc=new I,Yc=new I,Zc=new rn,Jc=new rn,$c=new rn,ts=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pi.subVectors(s,t),Fi.subVectors(n,t),Wc.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(Fi),l=pi.dot(Wc),c=Fi.dot(Fi),u=Fi.dot(Wc),g=o*c-a*a;if(g===0)return r.set(0,0,0),null;let h=1/g,m=(c*l-a*u)*h,x=(o*u-a*l)*h;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Zc.setScalar(0),Jc.setScalar(0),$c.setScalar(0),Zc.fromBufferAttribute(e,t),Jc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Zc,r.x),o.addScaledVector(Jc,r.y),o.addScaledVector($c,r.z),o}static isFrontFacing(e,t,n,s){return pi.subVectors(n,t),Fi.subVectors(e,t),pi.cross(Fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),pi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Us.subVectors(s,n),Fs.subVectors(r,n),Xc.subVectors(e,n);let l=Us.dot(Xc),c=Fs.dot(Xc);if(l<=0&&c<=0)return t.copy(n);qc.subVectors(e,s);let u=Us.dot(qc),g=Fs.dot(qc);if(u>=0&&g<=u)return t.copy(s);let h=l*g-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Us,o);Yc.subVectors(e,r);let m=Us.dot(Yc),x=Fs.dot(Yc);if(x>=0&&m<=x)return t.copy(r);let E=m*c-l*x;if(E<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Fs,a);let p=u*x-m*g;if(p<=0&&g-u>=0&&m-x>=0)return Bh.subVectors(r,s),a=(g-u)/(g-u+(m-x)),t.copy(s).addScaledVector(Bh,a);let f=1/(p+E+h);return o=E*f,a=h*f,t.copy(n).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Po.subVectors(this.max,Er),Bs.subVectors(e.a,Er),Os.subVectors(e.b,Er),zs.subVectors(e.c,Er),Qi.subVectors(Os,Bs),ji.subVectors(zs,Os),ps.subVectors(Bs,zs);let t=[0,-Qi.z,Qi.y,0,-ji.z,ji.y,0,-ps.z,ps.y,Qi.z,0,-Qi.x,ji.z,0,-ji.x,ps.z,0,-ps.x,-Qi.y,Qi.x,0,-ji.y,ji.x,0,-ps.y,ps.x,0];return!Kc(t,Bs,Os,zs,Po)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,Bs,Os,zs,Po))?!1:(Io.crossVectors(Qi,ji),t=[Io.x,Io.y,Io.z],Kc(t,Bs,Os,zs,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new I,new I,new I,new I,new I,new I,new I,new I],mi=new I,Co=new bi,Bs=new I,Os=new I,zs=new I,Qi=new I,ji=new I,ps=new I,Er=new I,Po=new I,Io=new I,ms=new I;function Kc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ms.fromArray(i,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),u=n.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var vn=new I,Lo=new At,lf=0,hn=class extends wi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uu,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),n=Xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),n=Xn(n,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),n=Xn(n,this.array),s=Xn(s,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Br=class extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Or=class extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ft=class extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}},hf=new bi,wr=new I,Qc=new I,Ti=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Qc)),this.expandByPoint(wr.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},uf=0,oi=new Et,jc=new Sn,Hs=new I,ti=new bi,br=new bi,Cn=new I,Kt=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nd(e)?Or:Br)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(ti.min,br.min),ti.expandByPoint(Cn),Cn.addVectors(ti.max,br.max),ti.expandByPoint(Cn)):(ti.expandByPoint(br.min),ti.expandByPoint(br.max))}ti.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Cn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Cn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Cn.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),Cn.add(Hs)),s=Math.max(s,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new I,l[_]=new I;let c=new I,u=new I,g=new I,h=new At,m=new At,x=new At,E=new I,p=new I;function f(_,C,F){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,C),g.fromBufferAttribute(n,F),h.fromBufferAttribute(r,_),m.fromBufferAttribute(r,C),x.fromBufferAttribute(r,F),u.sub(c),g.sub(c),m.sub(h),x.sub(h);let X=1/(m.x*x.y-x.x*m.y);isFinite(X)&&(E.copy(u).multiplyScalar(x.y).addScaledVector(g,-m.y).multiplyScalar(X),p.copy(g).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(X),a[_].add(E),a[C].add(E),a[F].add(E),l[_].add(p),l[C].add(p),l[F].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,C=y.length;_<C;++_){let F=y[_],X=F.start,G=F.count;for(let J=X,O=X+G;J<O;J+=3)f(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let R=new I,w=new I,b=new I,T=new I;function P(_){b.fromBufferAttribute(s,_),T.copy(b);let C=a[_];R.copy(C),R.sub(b.multiplyScalar(b.dot(C))).normalize(),w.crossVectors(T,C);let X=w.dot(l[_])<0?-1:1;o.setXYZW(_,R.x,R.y,R.z,X)}for(let _=0,C=y.length;_<C;++_){let F=y[_],X=F.start,G=F.count;for(let J=X,O=X+G;J<O;J+=3)P(e.getX(J+0)),P(e.getX(J+1)),P(e.getX(J+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,g=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){let x=e.getX(h+0),E=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,p),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,g=a.normalized,h=new c.constructor(l.length*u),m=0,x=0;for(let E=0,p=l.length;E<p;E++){a.isInterleavedBufferAttribute?m=l[E]*a.data.stride+a.offset:m=l[E]*u;for(let f=0;f<u;f++)h[x++]=c[m++]}return new hn(h,u,g)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,g=c.length;u<g;u++){let h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let g=0,h=c.length;g<h;g++){let m=c[g];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],g=r[c];for(let h=0,m=g.length;h<m;h++)u.push(g[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let g=o[c];this.addGroup(g.start,g.count,g.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var el=new I,df=new I,ff=new Pt,ni=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=el.subVectors(n,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(el),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ff.getNormalMatrix(e),s=this.coplanarPoint(el).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pf=0,xi=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=or,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=Ml,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Mt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var zi=new I,tl=new I,Do=new I,No=new I,vs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tl.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),No.copy(this.origin).sub(tl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=No.dot(this.direction),l=-No.dot(Do),c=No.lengthSq(),u=Math.abs(1-o*o),g,h,m,x;if(u>0)if(g=o*l-a,h=o*a-l,x=r*u,g>=0)if(h>=-x)if(h<=x){let E=1/u;g*=E,h*=E,m=g*(g+o*h+2*a)+h*(o*g+h+2*l)+c}else h=r,g=Math.max(0,-(o*h+a)),m=-g*g+h*(h+2*l)+c;else h=-r,g=Math.max(0,-(o*h+a)),m=-g*g+h*(h+2*l)+c;else h<=-x?(g=Math.max(0,-(-o*r+a)),h=g>0?-r:Math.min(Math.max(-r,-l),r),m=-g*g+h*(h+2*l)+c):h<=x?(g=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(g=Math.max(0,-(o*r+a)),h=g>0?r:Math.min(Math.max(-r,-l),r),m=-g*g+h*(h+2*l)+c);else h=o>0?-r:r,g=Math.max(0,-(o*h+a)),m=-g*g+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(tl).addScaledVector(Do,h),m}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(e.min.z-h.z)*g,l=(e.max.z-h.z)*g):(a=(e.max.z-h.z)*g,l=(e.min.z-h.z)*g),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,g=e.x-o.x,h=e.y-o.y,m=e.z-o.z,x=t.x-o.x,E=t.y-o.y,p=t.z-o.z,f=n.x-o.x,y=n.y-o.y,R=n.z-o.z,w=Math.abs(l),b=Math.abs(c),T=Math.abs(u),P,_,C,F,X,G,J,O,$,Z,ee,xe;if(w>=b&&w>=T?(C=l,G=g,$=x,xe=f,l>=0?(P=c,_=u,F=h,X=m,J=E,O=p,Z=y,ee=R):(P=u,_=c,F=m,X=h,J=p,O=E,Z=R,ee=y)):b>=T?(C=c,G=h,$=E,xe=y,c>=0?(P=u,_=l,F=m,X=g,J=p,O=x,Z=R,ee=f):(P=l,_=u,F=g,X=m,J=x,O=p,Z=f,ee=R)):(C=u,G=m,$=p,xe=R,u>=0?(P=l,_=c,F=g,X=h,J=x,O=E,Z=f,ee=y):(P=c,_=l,F=h,X=g,J=E,O=x,Z=y,ee=f)),C===0)return null;let de=P/C,ge=_/C,Se=1/C,Qe=F-de*G,Be=X-ge*G,Lt=J-de*$,pt=O-ge*$,Je=Z-de*xe,he=ee-ge*xe,ye=Je*pt-he*Lt,Ye=Qe*he-Be*Je,qe=Lt*Be-pt*Qe;if(s){if(ye<0||Ye<0||qe<0)return null}else if((ye<0||Ye<0||qe<0)&&(ye>0||Ye>0||qe>0))return null;let De=ye+Ye+qe;if(De===0)return null;let gt=Se*(ye*G+Ye*$+qe*xe);return(De>0?gt<0:gt>0)?null:this.at(gt/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Oh=new Et,gs=new vs,Uo=new Ti,zh=new I,Fo=new I,Bo=new I,Oo=new I,nl=new I,zo=new I,Hh=new I,Ho=new I,xt=class extends Sn{constructor(e=new Kt,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],g=r[l];u!==0&&(nl.fromBufferAttribute(g,e),o?zo.addScaledVector(nl,u):zo.addScaledVector(nl.sub(t),u))}t.add(zo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(Uo.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Uo,zh)===null||gs.origin.distanceToSquared(zh)>(e.far-e.near)**2))&&(Oh.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,E=h.length;x<E;x++){let p=h[x],f=o[p.materialIndex],y=Math.max(p.start,m.start),R=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,b=R;w<b;w+=3){let T=a.getX(w),P=a.getX(w+1),_=a.getX(w+2);s=ko(this,f,e,n,c,u,g,T,P,_),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),E=Math.min(a.count,m.start+m.count);for(let p=x,f=E;p<f;p+=3){let y=a.getX(p),R=a.getX(p+1),w=a.getX(p+2);s=ko(this,o,e,n,c,u,g,y,R,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,E=h.length;x<E;x++){let p=h[x],f=o[p.materialIndex],y=Math.max(p.start,m.start),R=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,b=R;w<b;w+=3){let T=w,P=w+1,_=w+2;s=ko(this,f,e,n,c,u,g,T,P,_),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let p=x,f=E;p<f;p+=3){let y=p,R=p+1,w=p+2;s=ko(this,o,e,n,c,u,g,y,R,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function mf(i,e,t,n,s,r,o,a){let l;if(e.side===Dn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ri,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ho);return c<t.near||c>t.far?null:{distance:c,point:Ho.clone(),object:i}}function ko(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Fo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,Oo);let u=mf(i,e,t,n,Fo,Bo,Oo,Hh);if(u){let g=new I;ts.getBarycoord(Hh,Fo,Bo,Oo,g),s&&(u.uv=ts.getInterpolatedAttribute(s,a,l,c,g,new At)),r&&(u.uv1=ts.getInterpolatedAttribute(r,a,l,c,g,new At)),o&&(u.normal=ts.getInterpolatedAttribute(o,a,l,c,g,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new I,materialIndex:0};ts.getNormal(Fo,Bo,Oo,h.normal),u.face=h,u.barycoord=g}return u}var zr=class extends Yn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=In,u=In,g,h){super(null,o,a,l,c,u,s,r,g,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=class extends hn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ks=new Et,kh=new Et,Go=[],Gh=new bi,gf=new Et,Tr=new xt,Ar=new Ti,ai=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),Gh.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(Gh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),Ar.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),kh.multiplyMatrices(n,ks),Tr.matrixWorld=kh,Tr.raycast(e,Go);for(let o=0,a=Go.length;o<a;o++){let l=Go[o];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(s*this.count),s,this.count,Ha,ci));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new Ti,xf=new At(.5,.5),Vo=new I,tr=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],g=r[5],h=r[6],m=r[7],x=r[8],E=r[9],p=r[10],f=r[11],y=r[12],R=r[13],w=r[14],b=r[15];if(s[0].setComponents(c-o,m-u,f-x,b-y).normalize(),s[1].setComponents(c+o,m+u,f+x,b+y).normalize(),s[2].setComponents(c+a,m+g,f+E,b+R).normalize(),s[3].setComponents(c-a,m-g,f-E,b-R).normalize(),n)s[4].setComponents(l,h,p,w).normalize(),s[5].setComponents(c-l,m-h,f-p,b-w).normalize();else if(s[4].setComponents(c-l,m-h,f-p,b-w).normalize(),t===gi)s[5].setComponents(c+l,m+h,f+p,b+w).normalize();else if(t===Js)s[5].setComponents(l,h,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);let t=xf.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Vo.x=s.normal.x>0?e.max.x:e.min.x,Vo.y=s.normal.y>0?e.max.y:e.min.y,Vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nr=class extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ha=new I,ua=new I,Vh=new Et,Rr=new vs,Wo=new Ti,il=new I,Wh=new I,ir=class extends Sn{constructor(e=new Kt,t=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ha.fromBufferAttribute(t,s-1),ua.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ha.distanceTo(ua);e.setAttribute("lineDistance",new Ft(n,1))}else Mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;Vh.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Vh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let E=m,p=x-1;E<p;E+=c){let f=u.getX(E),y=u.getX(E+1),R=Xo(this,e,Rr,l,f,y,E);R&&t.push(R)}if(this.isLineLoop){let E=u.getX(x-1),p=u.getX(m),f=Xo(this,e,Rr,l,E,p,x-1);f&&t.push(f)}}else{let m=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let E=m,p=x-1;E<p;E+=c){let f=Xo(this,e,Rr,l,E,E+1,E);f&&t.push(f)}if(this.isLineLoop){let E=Xo(this,e,Rr,l,x-1,m,x-1);E&&t.push(E)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xo(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(ha.fromBufferAttribute(a,s),ua.fromBufferAttribute(a,r),t.distanceSqToSegment(ha,ua,il,Wh)>n)return;il.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(il);if(!(c<e.near||c>e.far))return{distance:c,point:Wh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Xh=new I,qh=new I,Hr=class extends ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xh.fromBufferAttribute(t,s),qh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xh.distanceTo(qh);e.setAttribute("lineDistance",new Ft(n,1))}else Mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var da=class extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yh=new Et,hl=new vs,qo=new Ti,Yo=new I,ki=class extends Sn{constructor(e=new Kt,t=new da){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;Yh.copy(s).invert(),hl.copy(e.ray).applyMatrix4(Yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,g=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=h,E=m;x<E;x++){let p=c.getX(x);Yo.fromBufferAttribute(g,p),Zh(Yo,p,l,s,e,t,this)}}else{let h=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let x=h,E=m;x<E;x++)Yo.fromBufferAttribute(g,x),Zh(Yo,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zh(i,e,t,n,s,r,o){let a=hl.distanceSqToPoint(i);if(a<t){let l=new I;hl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var kr=class extends Yn{constructor(e=[],t=cs,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ns=class extends Yn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var is=class extends Yn{constructor(e,t,n=yi,s,r,o,a=In,l=In,c,u=Ei,g=1){if(u!==Ei&&u!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:g};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fa=class extends is{constructor(e,t=yi,n=cs,s,r,o=In,a=In,l,c=Ei){let u={width:e,height:e,depth:1},g=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gr=class extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ue=class i extends Kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],g=[],h=0,m=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(g,2));function x(E,p,f,y,R,w,b,T,P,_,C){let F=w/P,X=b/_,G=w/2,J=b/2,O=T/2,$=P+1,Z=_+1,ee=0,xe=0,de=new I;for(let ge=0;ge<Z;ge++){let Se=ge*X-J;for(let Qe=0;Qe<$;Qe++){let Be=Qe*F-G;de[E]=Be*y,de[p]=Se*R,de[f]=O,c.push(de.x,de.y,de.z),de[E]=0,de[p]=0,de[f]=T>0?1:-1,u.push(de.x,de.y,de.z),g.push(Qe/P),g.push(1-ge/_),ee+=1}}for(let ge=0;ge<_;ge++)for(let Se=0;Se<P;Se++){let Qe=h+Se+$*ge,Be=h+Se+$*(ge+1),Lt=h+(Se+1)+$*(ge+1),pt=h+(Se+1)+$*ge;l.push(Qe,Be,pt),l.push(Be,Lt,pt),xe+=6}a.addGroup(m,xe,C),m+=xe,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ms=class i extends Kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,u=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let g=0,h=3;g<=t;g++,h+=3){let m=n+g/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let g=1;g<=t;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ke=class i extends Kt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],h=[],m=[],x=0,E=[],p=n/2,f=0;y(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(m,2));function y(){let w=new I,b=new I,T=0,P=(t-e)/n;for(let _=0;_<=r;_++){let C=[],F=_/r,X=F*(t-e)+e;for(let G=0;G<=s;G++){let J=G/s,O=J*l+a,$=Math.sin(O),Z=Math.cos(O);b.x=X*$,b.y=-F*n+p,b.z=X*Z,g.push(b.x,b.y,b.z),w.set($,P,Z).normalize(),h.push(w.x,w.y,w.z),m.push(J,1-F),C.push(x++)}E.push(C)}for(let _=0;_<s;_++)for(let C=0;C<r;C++){let F=E[C][_],X=E[C+1][_],G=E[C+1][_+1],J=E[C][_+1];(e>0||C!==0)&&(u.push(F,X,J),T+=3),(t>0||C!==r-1)&&(u.push(X,G,J),T+=3)}c.addGroup(f,T,0),f+=T}function R(w){let b=x,T=new At,P=new I,_=0,C=w===!0?e:t,F=w===!0?1:-1;for(let G=1;G<=s;G++)g.push(0,p*F,0),h.push(0,F,0),m.push(.5,.5),x++;let X=x;for(let G=0;G<=s;G++){let O=G/s*l+a,$=Math.cos(O),Z=Math.sin(O);P.x=C*Z,P.y=p*F,P.z=C*$,g.push(P.x,P.y,P.z),h.push(0,F,0),T.x=$*.5+.5,T.y=Z*.5*F+.5,m.push(T.x,T.y),x++}for(let G=0;G<s;G++){let J=b+G,O=X+G;w===!0?u.push(O,O+1,J):u.push(O+1,O,J),_+=3}c.addGroup(f,_,w===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},dn=class i extends Ke{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pa=class i extends Kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let R=new I,w=new I,b=new I;for(let T=0;T<t.length;T+=3)m(t[T+0],R),m(t[T+1],w),m(t[T+2],b),l(R,w,b,y)}function l(y,R,w,b){let T=b+1,P=[];for(let _=0;_<=T;_++){P[_]=[];let C=y.clone().lerp(w,_/T),F=R.clone().lerp(w,_/T),X=T-_;for(let G=0;G<=X;G++)G===0&&_===T?P[_][G]=C:P[_][G]=C.clone().lerp(F,G/X)}for(let _=0;_<T;_++)for(let C=0;C<2*(T-_)-1;C++){let F=Math.floor(C/2);C%2===0?(h(P[_][F+1]),h(P[_+1][F]),h(P[_][F])):(h(P[_][F+1]),h(P[_+1][F+1]),h(P[_+1][F]))}}function c(y){let R=new I;for(let w=0;w<r.length;w+=3)R.x=r[w+0],R.y=r[w+1],R.z=r[w+2],R.normalize().multiplyScalar(y),r[w+0]=R.x,r[w+1]=R.y,r[w+2]=R.z}function u(){let y=new I;for(let R=0;R<r.length;R+=3){y.x=r[R+0],y.y=r[R+1],y.z=r[R+2];let w=p(y)/2/Math.PI+.5,b=f(y)/Math.PI+.5;o.push(w,1-b)}x(),g()}function g(){for(let y=0;y<o.length;y+=6){let R=o[y+0],w=o[y+2],b=o[y+4],T=Math.max(R,w,b),P=Math.min(R,w,b);T>.9&&P<.1&&(R<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function m(y,R){let w=y*3;R.x=e[w+0],R.y=e[w+1],R.z=e[w+2]}function x(){let y=new I,R=new I,w=new I,b=new I,T=new At,P=new At,_=new At;for(let C=0,F=0;C<r.length;C+=9,F+=6){y.set(r[C+0],r[C+1],r[C+2]),R.set(r[C+3],r[C+4],r[C+5]),w.set(r[C+6],r[C+7],r[C+8]),T.set(o[F+0],o[F+1]),P.set(o[F+2],o[F+3]),_.set(o[F+4],o[F+5]),b.copy(y).add(R).add(w).divideScalar(3);let X=p(b);E(T,F+0,y,X),E(P,F+2,R,X),E(_,F+4,w,X)}}function E(y,R,w,b){b<0&&y.x===1&&(o[R]=y.x-1),w.x===0&&w.z===0&&(o[R]=b/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Vr=class i extends pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var fn=class i extends Kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,g=e/a,h=t/l,m=[],x=[],E=[],p=[];for(let f=0;f<u;f++){let y=f*h-o;for(let R=0;R<c;R++){let w=R*g-r;x.push(w,-y,0),E.push(0,0,1),p.push(R/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let R=y+c*f,w=y+c*(f+1),b=y+1+c*(f+1),T=y+1+c*f;m.push(R,w,T),m.push(w,b,T)}this.setIndex(m),this.setAttribute("position",new Ft(x,3)),this.setAttribute("normal",new Ft(E,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Wr=class i extends Kt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],g=e,h=(t-e)/s,m=new I,x=new At;for(let E=0;E<=s;E++){for(let p=0;p<=n;p++){let f=r+p/n*o;m.x=g*Math.cos(f),m.y=g*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,u.push(x.x,x.y)}g+=h}for(let E=0;E<s;E++){let p=E*(n+1);for(let f=0;f<n;f++){let y=f+p,R=y,w=y+n+1,b=y+n+2,T=y+1;a.push(R,w,T),a.push(w,b,T)}}this.setIndex(a),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Qt=class i extends Kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],g=new I,h=new I,m=[],x=[],E=[],p=[];for(let f=0;f<=n;f++){let y=[],R=f/n,w=o+R*a,b=e*Math.cos(w),T=Math.sqrt(e*e-b*b),P=0;f===0&&o===0?P=.5/t:f===n&&l===Math.PI&&(P=-.5/t);for(let _=0;_<=t;_++){let C=_/t,F=s+C*r;g.x=-T*Math.cos(F),g.y=b,g.z=T*Math.sin(F),x.push(g.x,g.y,g.z),h.copy(g).normalize(),E.push(h.x,h.y,h.z),p.push(C+P,1-R),y.push(c++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){let R=u[f][y+1],w=u[f][y],b=u[f+1][y],T=u[f+1][y+1];(f!==0||o>0)&&m.push(R,w,T),(f!==n-1||l<Math.PI)&&m.push(w,b,T)}this.setIndex(m),this.setAttribute("position",new Ft(x,3)),this.setAttribute("normal",new Ft(E,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ss=class i extends Kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],g=[],h=new I,m=new I,x=new I;for(let E=0;E<=n;E++){let p=o+E/n*a;for(let f=0;f<=s;f++){let y=f/s*r;m.x=(e+t*Math.cos(p))*Math.cos(y),m.y=(e+t*Math.cos(p))*Math.sin(y),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),x.subVectors(m,h).normalize(),u.push(x.x,x.y,x.z),g.push(f/s),g.push(E/n)}}for(let E=1;E<=n;E++)for(let p=1;p<=s;p++){let f=(s+1)*E+p-1,y=(s+1)*(E-1)+p-1,R=(s+1)*(E-1)+p,w=(s+1)*E+p;l.push(f,y,w),l.push(y,R,w)}this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ts(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Jh(s))s.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Jh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Gn(i){let e={};for(let t=0;t<i.length;t++){let n=Ts(i[t]);for(let s in n)e[s]=n[s]}return e}function Jh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _f(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xt.workingColorSpace}var uo={clone:Ts,merge:Gn},yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=_f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new At().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new rn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ma=class extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xr=class extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Fn=class extends xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Da,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ga=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xa=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ss=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_a=class extends ss{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cl:r=e,a=2*t-n;break;case ll:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cl:o=e,l=2*n-t;break;case ll:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,g=this._offsetNext,h=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),E=x*x,p=E*x,f=-h*p+2*h*E-h*x,y=(1+h)*p+(-1.5-2*h)*E+(-.5+h)*x+1,R=(-1-m)*p+(1.5+m)*E+.5*x,w=m*p-m*E;for(let b=0;b!==a;++b)r[b]=f*o[u+b]+y*o[c+b]+R*o[l+b]+w*o[g+b];return r}},ya=class extends ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),g=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*g+o[l+h]*u;return r}},va=class extends ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ma=class extends ss{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,g=this.outTangents;if(!u||!g){let x=(n-t)/(s-t),E=1-x;for(let p=0;p!==a;++p)r[p]=o[c+p]*E+o[l+p]*x;return r}let h=a*2,m=e-1;for(let x=0;x!==a;++x){let E=o[c+x],p=o[l+x],f=m*h+x*2,y=g[f],R=g[f+1],w=e*h+x*2,b=u[w],T=u[w+1],P=Sf(n,t,y,b,s);r[x]=ku(P,E,R,T,p)}return r}};function ku(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Mf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Sf(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=ku(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Mf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ii=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gs(t,this.TimeBufferType),this.values=Gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gs(e.times,Array),values:Gs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),sl(e.settings)&&(n.settings={inTangents:Gs(e.settings.inTangents,Array),outTangents:Gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break;case ol:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Mt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return $o;case this.InterpolantFactoryMethodBezier:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;sl(this.settings)&&($h(this.settings.inTangents,e),$h(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(bt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(bt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){bt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){bt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ud(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){bt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$o,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let g=a*n,h=g-n,m=g+n;for(let x=0;x!==n;++x){let E=t[g+x];if(E!==t[h+x]||E!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let g=a*n,h=o*n;for(let m=0;m!==n;++m)t[h+m]=t[g+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,sl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $h(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=oa;var rs=class extends ii{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ir;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}};Sa.prototype.ValueTypeName="color";var Ea=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}};Ea.prototype.ValueTypeName="number";var wa=class extends ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Gt.slerpFlat(r,0,o,c-a,o,c,l);return r}},qr=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends ii{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Ir;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}};ba.prototype.ValueTypeName="vector";var Ta=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,g){return c.push(u,g),this},this.removeHandler=function(u){let g=c.indexOf(u);return g!==-1&&c.splice(g,2),this},this.getHandler=function(u){for(let g=0,h=c.length;g<h;g+=2){let m=c[g],x=c[g+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gu=new Ta,Aa=class{constructor(e){this.manager=e!==void 0?e:Gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Yr=class extends Es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},rl=new Et,Kh=new I,Qh=new I,sr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kh),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Js||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zo=new I,Jo=new Gt,Mi=new I,Zr=class extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,Jo,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zo,Jo,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new I,jh=new At,eu=new At,Pn=class extends Zr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,jh,eu),t.subVectors(eu,jh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ul=class extends sr{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Jr=class extends Es{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ul}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},dl=class extends sr{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}},Gi=class extends Es{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},as=class extends Zr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fl=class extends sr{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new fl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Kr=class extends Kt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Vs=-90,Ws=1,Ra=class extends Sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pn(Vs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new Pn(Vs,Ws,e,t);r.layers=this.layers,this.add(r);let o=new Pn(Vs,Ws,e,t);o.layers=this.layers,this.add(o);let a=new Pn(Vs,Ws,e,t);a.layers=this.layers,this.add(a);let l=new Pn(Vs,Ws,e,t);l.layers=this.layers,this.add(l);let c=new Pn(Vs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,g=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(g,h,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ca=class extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var kl="\\[\\]\\.:\\/",Ef=new RegExp("["+kl+"]","g"),Gl="[^"+kl+"]",wf="[^"+kl.replace("\\.","")+"]",bf=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Tf=/(WCOD+)?/.source.replace("WCOD",wf),Af=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Rf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Cf=new RegExp("^"+bf+Tf+Af+Rf+"$"),Pf=["material","materials","bones","map"],pl=class{constructor(e,t,n){let s=n||un.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},un=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ef,"")}static parseTrackName(e){let t=Cf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Mt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};un.Composite=pl;un.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};un.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};un.prototype.GetterByBindingType=[un.prototype._getValue_direct,un.prototype._getValue_array,un.prototype._getValue_arrayElement,un.prototype._getValue_toArray];un.prototype.SetterByBindingTypeAndVersioning=[[un.prototype._setValue_direct,un.prototype._setValue_direct_setNeedsUpdate,un.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[un.prototype._setValue_array,un.prototype._setValue_array_setNeedsUpdate,un.prototype._setValue_array_setMatrixWorldNeedsUpdate],[un.prototype._setValue_arrayElement,un.prototype._setValue_arrayElement_setNeedsUpdate,un.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[un.prototype._setValue_fromArray,un.prototype._setValue_fromArray_setNeedsUpdate,un.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ex=new Float32Array(1);var tu=new Et,Qr=class{constructor(e,t,n=0,s=1/0){this.ray=new vs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tu),this}intersectObject(e,t=!0,n=[]){return ml(e,this,n,t),n.sort(nu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ml(e[s],this,n,t);return n.sort(nu),n}};function nu(i,e){return i.distance-e.distance}function ml(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ml(r[o],e,t,!0)}}var jr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Mt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Zl=class Zl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Zl.prototype.isMatrix2=!0;var gl=Zl;function Vl(i,e,t,n){let s=If(n);switch(t){case Dl:return i*e;case Ha:return i*e/s.components*s.byteLength;case ka:return i*e/s.components*s.byteLength;case us:return i*e*2/s.components*s.byteLength;case Ga:return i*e*2/s.components*s.byteLength;case Nl:return i*e*3/s.components*s.byteLength;case li:return i*e*4/s.components*s.byteLength;case Va:return i*e*4/s.components*s.byteLength;case so:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(e,8)/2;case Za:case Ja:case Ka:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $a:case co:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pc:case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lo:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function If(i){switch(i){case $n:case Cl:return{byteLength:1,components:1};case ar:case Pl:case si:return{byteLength:2,components:1};case Oa:case za:return{byteLength:2,components:4};case yi:case Ba:case ci:return{byteLength:4,components:1};case Il:case Ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window!="undefined"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);function hd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Lf(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,g=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:g}}function n(a,l,c){let u=l.array,g=l.updateRanges;if(i.bindBuffer(c,a),g.length===0)i.bufferSubData(c,0,u);else{g.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<g.length;m++){let x=g[h],E=g[m];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++h,g[h]=E)}g.length=h+1;for(let m=0,x=g.length;m<x;m++){let E=g[m];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nf=`#ifdef USE_ALPHAHASH
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
#endif`,Uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
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
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
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
#endif`,Gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qf=`#ifdef USE_IRIDESCENCE
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
#endif`,Yf=`#ifdef USE_BUMPMAP
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,np=`#define PI 3.141592653589793
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
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sp=`vec3 transformedNormal = objectNormal;
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
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pp=`PhysicalMaterial material;
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
#endif`,Ip=`uniform sampler2D dfgLUT;
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
}`,Lp=`
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vp=`#if defined( USE_POINTS_UV )
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
#endif`,Wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_0=`float getShadowMask() {
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
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
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
}`,H0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,G0=`#define DISTANCE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#define LAMBERT
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
}`,$0=`#define LAMBERT
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
}`,K0=`#define MATCAP
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
}`,Q0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,em=`#define NORMAL
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
}`,tm=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,sm=`#define STANDARD
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
}`,rm=`#define TOON
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
}`,om=`#define TOON
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
}`,am=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,um=`uniform float rotation;
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
}`,dm=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Df,alphahash_pars_fragment:Nf,alphamap_fragment:Uf,alphamap_pars_fragment:Ff,alphatest_fragment:Bf,alphatest_pars_fragment:Of,aomap_fragment:zf,aomap_pars_fragment:Hf,batching_pars_vertex:kf,batching_vertex:Gf,begin_vertex:Vf,beginnormal_vertex:Wf,bsdfs:Xf,iridescence_fragment:qf,bumpmap_pars_fragment:Yf,clipping_planes_fragment:Zf,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:$f,clipping_planes_vertex:Kf,color_fragment:Qf,color_pars_fragment:jf,color_pars_vertex:ep,color_vertex:tp,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:op,emissivemap_fragment:ap,emissivemap_pars_fragment:cp,colorspace_fragment:lp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:dp,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:bp,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:xp,fog_fragment:_p,fog_pars_fragment:yp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:Mp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:Ep,lights_pars_begin:wp,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ap,lights_phong_fragment:Rp,lights_phong_pars_fragment:Cp,lights_physical_fragment:Pp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Np,lightprobes_pars_fragment:Up,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:zp,map_fragment:Hp,map_pars_fragment:kp,map_particle_fragment:Gp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphinstance_vertex:qp,morphcolor_vertex:Yp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:$p,normal_fragment_begin:Kp,normal_fragment_maps:Qp,normal_pars_fragment:jp,normal_pars_vertex:e0,normal_vertex:t0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:s0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:o0,opaque_fragment:a0,packing:c0,premultiplied_alpha_fragment:l0,project_vertex:h0,dithering_fragment:u0,dithering_pars_fragment:d0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:x0,shadowmask_pars_fragment:_0,skinbase_vertex:y0,skinning_pars_vertex:v0,skinning_vertex:M0,skinnormal_vertex:S0,specularmap_fragment:E0,specularmap_pars_fragment:w0,tonemapping_fragment:b0,tonemapping_pars_fragment:T0,transmission_fragment:A0,transmission_pars_fragment:R0,uv_pars_fragment:C0,uv_pars_vertex:P0,uv_vertex:I0,worldpos_vertex:L0,background_vert:D0,background_frag:N0,backgroundCube_vert:U0,backgroundCube_frag:F0,cube_vert:B0,cube_frag:O0,depth_vert:z0,depth_frag:H0,distance_vert:k0,distance_frag:G0,equirect_vert:V0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:q0,meshbasic_vert:Y0,meshbasic_frag:Z0,meshlambert_vert:J0,meshlambert_frag:$0,meshmatcap_vert:K0,meshmatcap_frag:Q0,meshnormal_vert:j0,meshnormal_frag:em,meshphong_vert:tm,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:rm,meshtoon_frag:om,points_vert:am,points_frag:cm,shadow_vert:lm,shadow_frag:hm,sprite_vert:um,sprite_frag:dm},nt={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Ii={basic:{uniforms:Gn([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Gn([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Gn([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Gn([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Gn([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new lt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Gn([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Gn([nt.points,nt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Gn([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Gn([nt.common,nt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Gn([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Gn([nt.sprite,nt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:Gn([nt.common,nt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:Gn([nt.lights,nt.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Ii.physical={uniforms:Gn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Sc={r:0,b:0,g:0},fm=new Et,ud=new Pt;ud.set(-1,0,0,0,1,0,0,0,1);function pm(i,e,t,n,s,r){let o=new lt(0),a=s===!0?0:1,l,c,u=null,g=0,h=null;function m(y){let R=y.isScene===!0?y.background:null;if(R&&R.isTexture){let w=y.backgroundBlurriness>0;R=e.get(R,w)}return R}function x(y){let R=!1,w=m(y);w===null?p(o,a):w&&w.isColor&&(p(w,1),R=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(y,R){let w=m(R);w&&(w.isCubeTexture||w.mapping===no)?(c===void 0&&(c=new xt(new ue(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Ts(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(R.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ud),c.material.toneMapped=Xt.getTransfer(w.colorSpace)!==en,(u!==w||g!==w.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,g=w.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new xt(new fn(2,2),new on({name:"BackgroundMaterial",uniforms:Ts(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(w.colorSpace)!==en,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||g!==w.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,g=w.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,R){y.getRGB(Sc,Hl(i)),t.buffers.color.setClear(Sc.r,Sc.g,Sc.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,R=1){o.set(y),a=R,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:x,addToRenderList:E,dispose:f}}function mm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(X,G,J,O,$){let Z=!1,ee=g(X,O,J,G);r!==ee&&(r=ee,c(r.object)),Z=m(X,O,J,$),Z&&x(X,O,J,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,w(X,G,J,O),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(X){return i.bindVertexArray(X)}function u(X){return i.deleteVertexArray(X)}function g(X,G,J,O){let $=O.wireframe===!0,Z=n[G.id];Z===void 0&&(Z={},n[G.id]=Z);let ee=X.isInstancedMesh===!0?X.id:0,xe=Z[ee];xe===void 0&&(xe={},Z[ee]=xe);let de=xe[J.id];de===void 0&&(de={},xe[J.id]=de);let ge=de[$];return ge===void 0&&(ge=h(l()),de[$]=ge),ge}function h(X){let G=[],J=[],O=[];for(let $=0;$<t;$++)G[$]=0,J[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:O,object:X,attributes:{},index:null}}function m(X,G,J,O){let $=r.attributes,Z=G.attributes,ee=0,xe=J.getAttributes();for(let de in xe)if(xe[de].location>=0){let Se=$[de],Qe=Z[de];if(Qe===void 0&&(de==="instanceMatrix"&&X.instanceMatrix&&(Qe=X.instanceMatrix),de==="instanceColor"&&X.instanceColor&&(Qe=X.instanceColor)),Se===void 0||Se.attribute!==Qe||Qe&&Se.data!==Qe.data)return!0;ee++}return r.attributesNum!==ee||r.index!==O}function x(X,G,J,O){let $={},Z=G.attributes,ee=0,xe=J.getAttributes();for(let de in xe)if(xe[de].location>=0){let Se=Z[de];Se===void 0&&(de==="instanceMatrix"&&X.instanceMatrix&&(Se=X.instanceMatrix),de==="instanceColor"&&X.instanceColor&&(Se=X.instanceColor));let Qe={};Qe.attribute=Se,Se&&Se.data&&(Qe.data=Se.data),$[de]=Qe,ee++}r.attributes=$,r.attributesNum=ee,r.index=O}function E(){let X=r.newAttributes;for(let G=0,J=X.length;G<J;G++)X[G]=0}function p(X){f(X,0)}function f(X,G){let J=r.newAttributes,O=r.enabledAttributes,$=r.attributeDivisors;J[X]=1,O[X]===0&&(i.enableVertexAttribArray(X),O[X]=1),$[X]!==G&&(i.vertexAttribDivisor(X,G),$[X]=G)}function y(){let X=r.newAttributes,G=r.enabledAttributes;for(let J=0,O=G.length;J<O;J++)G[J]!==X[J]&&(i.disableVertexAttribArray(J),G[J]=0)}function R(X,G,J,O,$,Z,ee){ee===!0?i.vertexAttribIPointer(X,G,J,$,Z):i.vertexAttribPointer(X,G,J,O,$,Z)}function w(X,G,J,O){E();let $=O.attributes,Z=J.getAttributes(),ee=G.defaultAttributeValues;for(let xe in Z){let de=Z[xe];if(de.location>=0){let ge=$[xe];if(ge===void 0&&(xe==="instanceMatrix"&&X.instanceMatrix&&(ge=X.instanceMatrix),xe==="instanceColor"&&X.instanceColor&&(ge=X.instanceColor)),ge!==void 0){let Se=ge.normalized,Qe=ge.itemSize,Be=e.get(ge);if(Be===void 0)continue;let Lt=Be.buffer,pt=Be.type,Je=Be.bytesPerElement,he=pt===i.INT||pt===i.UNSIGNED_INT||ge.gpuType===Ba;if(ge.isInterleavedBufferAttribute){let ye=ge.data,Ye=ye.stride,qe=ge.offset;if(ye.isInstancedInterleavedBuffer){for(let De=0;De<de.locationSize;De++)f(de.location+De,ye.meshPerAttribute);X.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let De=0;De<de.locationSize;De++)p(de.location+De);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let De=0;De<de.locationSize;De++)R(de.location+De,Qe/de.locationSize,pt,Se,Ye*Je,(qe+Qe/de.locationSize*De)*Je,he)}else{if(ge.isInstancedBufferAttribute){for(let ye=0;ye<de.locationSize;ye++)f(de.location+ye,ge.meshPerAttribute);X.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ye=0;ye<de.locationSize;ye++)p(de.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let ye=0;ye<de.locationSize;ye++)R(de.location+ye,Qe/de.locationSize,pt,Se,Qe*Je,Qe/de.locationSize*ye*Je,he)}}else if(ee!==void 0){let Se=ee[xe];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(de.location,Se);break;case 3:i.vertexAttrib3fv(de.location,Se);break;case 4:i.vertexAttrib4fv(de.location,Se);break;default:i.vertexAttrib1fv(de.location,Se)}}}}y()}function b(){C();for(let X in n){let G=n[X];for(let J in G){let O=G[J];for(let $ in O){let Z=O[$];for(let ee in Z)u(Z[ee].object),delete Z[ee];delete O[$]}}delete n[X]}}function T(X){if(n[X.id]===void 0)return;let G=n[X.id];for(let J in G){let O=G[J];for(let $ in O){let Z=O[$];for(let ee in Z)u(Z[ee].object),delete Z[ee];delete O[$]}}delete n[X.id]}function P(X){for(let G in n){let J=n[G];for(let O in J){let $=J[O];if($[X.id]===void 0)continue;let Z=$[X.id];for(let ee in Z)u(Z[ee].object),delete Z[ee];delete $[X.id]}}}function _(X){for(let G in n){let J=n[G],O=X.isInstancedMesh===!0?X.id:0,$=J[O];if($!==void 0){for(let Z in $){let ee=$[Z];for(let xe in ee)u(ee[xe].object),delete ee[xe];delete $[Z]}delete J[O],Object.keys(J).length===0&&delete n[G]}}}function C(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:p,disableUnusedAttributes:y}}function gm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function xm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==li&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let _=P===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==$n&&P!==ci&&!_&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Mt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let g=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:g,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:y,maxVaryings:R,maxFragmentUniforms:w,maxSamples:b,samples:T}}function _m(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ni,a=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,h){let m=g.length!==0||h||n!==0||s;return s=h,n=g.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,h){t=u(g,h,0)},this.setState=function(g,h,m){let x=g.clippingPlanes,E=g.clipIntersection,p=g.clipShadows,f=i.get(g);if(!s||x===null||x.length===0||r&&!p)r?u(null):c();else{let y=r?0:n,R=y*4,w=f.clippingState||null;l.value=w,w=u(x,h,R,m);for(let b=0;b!==R;++b)w[b]=t[b];f.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(g,h,m,x){let E=g!==null?g.length:0,p=null;if(E!==0){if(p=l.value,x!==!0||p===null){let f=m+E*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let R=0,w=m;R!==E;++R,w+=4)o.copy(g[R]).applyMatrix4(y,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}var ur=4,ym=6,vm=20,Mm=256,fo=new as,Vu=new lt,Jl=null,$l=0,Kl=0,Ql=!1,Sm=new I,As=new I,wc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Sm}=r;Jl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jl,$l,Kl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:si,format:li,colorSpace:Lr,depthBuffer:!1},s=Wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Em(r)),this._blurMaterial=bm(r,e,t),this._ggxMaterial=wm(r,e,t)}return s}_compileMaterial(e){let t=new xt(new Kt,e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,n,s,r){let l=new Pn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],g=this._renderer,h=g.autoClear,m=g.toneMapping;g.getClearColor(Vu),g.toneMapping=_i,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new ue,new Ln({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,p=E.material,f=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,f=!0):(p.color.copy(Vu),f=!0);for(let R=0;R<6;R++){let w=R%3;w===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):w===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));let b=this._cubeSize;hr(s,w*b,R>2?b:0,b,b),g.setRenderTarget(s),f&&g.render(E,l),g.render(e,l)}g.toneMapping=m,g.autoClear=h,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===cs||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,fo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),g=Math.sqrt(c*c-u*u),h=c*1.25,m=g*h,{_lodMax:x}=this,E=this._sizeLods[n],p=3*E*(n>x-ur?n-x+ur:0),f=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,hr(r,p,f,3*E,2*E),s.setRenderTarget(r),s.render(a,fo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,hr(e,p,f,3*E,2*E),s.setRenderTarget(e),s.render(a,fo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],g=3*u*(s>this._lodMax-ur?s-this._lodMax+ur:0),h=4*(this._cubeSize-u);hr(t,g,h,3*u,2*u),o.setRenderTarget(t),o.render(l,fo)}};function Em(i){let e=[],t=[],n=i,s=i-ur+1+ym;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],g=6,h=6,m=3,x=new Float32Array(m*h*g),E=new Float32Array(m*h*g);for(let f=0;f<g;f++){let y=f%3*2/3-1,R=f>2?0:-1,w=[y,R,0,y+2/3,R,0,y+2/3,R+1,0,y,R,0,y+2/3,R+1,0,y,R+1,0];x.set(w,m*h*f);for(let b=0;b<h;b++){let T=u[b*2]*2-1,P=u[b*2+1]*2-1;f===0?As.set(1,P,T):f===1?As.set(-T,1,-P):f===2?As.set(-T,P,1):f===3?As.set(-1,P,-T):f===4?As.set(-T,-1,P):As.set(T,P,-1),As.toArray(E,(f*h+b)*m)}}let p=new Kt;p.setAttribute("position",new hn(x,m)),p.setAttribute("outputDirection",new hn(E,m)),t.push(new xt(p,null)),n>ur&&n--}return{lodMeshes:t,sizeLods:e}}function Wu(i,e,t){let n=new kn(i,e,t);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wm(i,e,t){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function bm(i,e,t){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:vm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Xu(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function qu(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bc=class extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new kr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ue(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:Ci});r.uniforms.tEquirect.value=t;let o=new xt(s,r),a=t.minFilter;return t.minFilter===ls&&(t.minFilter=Un),new Ra(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Tm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===Na||m===Ua)if(e.has(h)){let x=e.get(h).texture;return a(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let E=new bc(x.height);return E.fromEquirectangularTexture(i,h),e.set(h,E),h.addEventListener("dispose",c),a(E.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let m=h.mapping,x=m===Na||m===Ua,E=m===cs||m===bs;if(x||E){let p=t.get(h),f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new wc(i)),p=x?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let y=h.image;return x&&y&&y.height>0||E&&y&&l(y)?(n===null&&(n=new wc(i)),p=x?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,m){return m===Na?h.mapping=cs:m===Ua&&(h.mapping=bs),h}function l(h){let m=0,x=6;for(let E=0;E<x;E++)h[E]!==void 0&&m++;return m===x}function c(h){let m=h.target;m.removeEventListener("dispose",c);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Am(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&_s("WebGLRenderer: "+n+" extension not supported."),s}}}function Rm(i,e,t,n){let s={},r=new WeakMap;function o(g){let h=g.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete s[h.id];let m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(g,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(g){let h=g.attributes;for(let m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(g){let h=[],m=g.index,x=g.attributes.position,E=0;if(x===void 0)return;if(m!==null){let y=m.array;E=m.version;for(let R=0,w=y.length;R<w;R+=3){let b=y[R+0],T=y[R+1],P=y[R+2];h.push(b,T,T,P,P,b)}}else{let y=x.array;E=x.version;for(let R=0,w=y.length/3-1;R<w;R+=3){let b=R+0,T=R+1,P=R+2;h.push(b,T,T,P,P,b)}}let p=new(x.count>=65535?Or:Br)(h,1);p.version=E;let f=r.get(g);f&&e.remove(f),r.set(g,p)}function u(g){let h=r.get(g);if(h){let m=g.index;m!==null&&h.version<m.version&&c(g)}else c(g);return r.get(g)}return{get:a,update:l,getWireframeAttribute:u}}function Cm(i,e,t){let n;function s(g){n=g}let r,o;function a(g){r=g.type,o=g.bytesPerElement}function l(g,h){i.drawElements(n,h,r,g*o),t.update(h,n,1)}function c(g,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,g*o,m),t.update(h,n,m))}function u(g,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,g,0,m);let E=0;for(let p=0;p<m;p++)E+=h[p];t.update(E,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Pm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:bt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Im(i,e,t){let n=new WeakMap,s=new rn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==g){let C=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],R=0;m===!0&&(R=1),x===!0&&(R=2),E===!0&&(R=3);let w=a.attributes.position.count*R,b=1;w>e.maxTextureSize&&(b=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let T=new Float32Array(w*b*4*g),P=new Ur(T,w,b,g);P.type=ci,P.needsUpdate=!0;let _=R*4;for(let F=0;F<g;F++){let X=p[F],G=f[F],J=y[F],O=w*b*4*F;for(let $=0;$<X.count;$++){let Z=$*_;m===!0&&(s.fromBufferAttribute(X,$),T[O+Z+0]=s.x,T[O+Z+1]=s.y,T[O+Z+2]=s.z,T[O+Z+3]=0),x===!0&&(s.fromBufferAttribute(G,$),T[O+Z+4]=s.x,T[O+Z+5]=s.y,T[O+Z+6]=s.z,T[O+Z+7]=0),E===!0&&(s.fromBufferAttribute(J,$),T[O+Z+8]=s.x,T[O+Z+9]=s.y,T[O+Z+10]=s.z,T[O+Z+11]=J.itemSize===4?s.w:1)}}h={count:g,texture:P,size:new At(w,b)},n.set(a,h),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let E=0;E<c.length;E++)m+=c[E];let x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Lm(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,g=c.geometry,h=e.get(c,g);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Dm={[Sl]:"LINEAR_TONE_MAPPING",[El]:"REINHARD_TONE_MAPPING",[wl]:"CINEON_TONE_MAPPING",[to]:"ACES_FILMIC_TONE_MAPPING",[Tl]:"AGX_TONE_MAPPING",[Al]:"NEUTRAL_TONE_MAPPING",[bl]:"CUSTOM_TONE_MAPPING"};function Nm(i,e,t,n,s,r){let o=new kn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Kt;c.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ft([0,2,0,0,2,0],2));let u=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new xt(c,u),h=new as(-1,1,1,-1,0,1),m=null,x=null,E=!1,p,f=null,y=[],R=!1;this.setSize=function(w,b){o.setSize(w,b),a!==null&&a.setSize(w,b),l!==null&&l.setSize(w,b);for(let T=0;T<y.length;T++){let P=y[T];P.setSize&&P.setSize(w,b)}},this.setEffects=function(w){y=w,R=y.length>0&&y[0].isRenderPass===!0;let b=o.width,T=o.height;y.length>0&&a===null&&(a=new kn(b,T,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new kn(b,T,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<y.length;P++){let _=y[P];_.setSize&&_.setSize(b,T)}},this.begin=function(w,b){if(E||w.toneMapping===_i&&y.length===0)return!1;if(f=b,b!==null){let T=b.width,P=b.height;(o.width!==T||o.height!==P)&&this.setSize(T,P)}return R===!1&&w.setRenderTarget(o),p=w.toneMapping,w.toneMapping=_i,!0},this.hasRenderPass=function(){return R},this.end=function(w,b){w.toneMapping=p,E=!0;let T=o,P=a;for(let _=0;_<y.length;_++){let C=y[_];C.enabled!==!1&&(C.render(w,P,T,b),C.needsSwap!==!1&&(T=P,P=P===a?l:a))}if(m!==w.outputColorSpace||x!==w.toneMapping){m=w.outputColorSpace,x=w.toneMapping,u.defines={},Xt.getTransfer(m)===en&&(u.defines.SRGB_TRANSFER="");let _=Dm[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(f),w.render(g,h),f=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var dd=new Yn,th=new is(1,1),fd=new Ur,pd=new la,md=new kr,Yu=[],Zu=[],Ju=new Float32Array(16),$u=new Float32Array(9),Ku=new Float32Array(4);function fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yu[s];if(r===void 0&&(r=new Float32Array(s),Yu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function An(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rc(i,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Um(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2fv(this.addr,e),An(t,e)}}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;i.uniform3fv(this.addr,e),An(t,e)}}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4fv(this.addr,e),An(t,e)}}function zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),An(t,n)}}function Hm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),An(t,n)}}function km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),An(t,n)}}function Gm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2iv(this.addr,e),An(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3iv(this.addr,e),An(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4iv(this.addr,e),An(t,e)}}function qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2uiv(this.addr,e),An(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3uiv(this.addr,e),An(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4uiv(this.addr,e),An(t,e)}}function $m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(th.compareFunction=t.isReversedDepthBuffer()?Mc:vc,r=th):r=dd,t.setTexture2D(e||r,s)}function Km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pd,s)}function Qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||md,s)}function jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fd,s)}function eg(i){switch(i){case 5126:return Um;case 35664:return Fm;case 35665:return Bm;case 35666:return Om;case 35674:return zm;case 35675:return Hm;case 35676:return km;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return jm}}function tg(i,e){i.uniform1fv(this.addr,e)}function ng(i,e){let t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function ig(i,e){let t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function sg(i,e){let t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function rg(i,e){let t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function og(i,e){let t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ag(i,e){let t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cg(i,e){i.uniform1iv(this.addr,e)}function lg(i,e){i.uniform2iv(this.addr,e)}function hg(i,e){i.uniform3iv(this.addr,e)}function ug(i,e){i.uniform4iv(this.addr,e)}function dg(i,e){i.uniform1uiv(this.addr,e)}function fg(i,e){i.uniform2uiv(this.addr,e)}function pg(i,e){i.uniform3uiv(this.addr,e)}function mg(i,e){i.uniform4uiv(this.addr,e)}function gg(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=th:o=dd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function xg(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pd,r[o])}function _g(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||md,r[o])}function yg(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fd,r[o])}function vg(i){switch(i){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return cg;case 35667:case 35671:return lg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return yg}}var nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eg(t.type)}},ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vg(t.type)}},sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},jl=/(\w+)(\])?(\[|\.)?/g;function Qu(i,e){i.seq.push(e),i.map[e.id]=e}function Mg(i,e,t){let n=i.name,s=n.length;for(jl.lastIndex=0;;){let r=jl.exec(n),o=jl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qu(t,c===void 0?new nh(a,i,e):new ih(a,i,e));break}else{let g=t.map[a];g===void 0&&(g=new sh(a),Qu(t,g)),t=g}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Mg(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ju(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Sg=37297,Eg=0;function wg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ed=new Pt;function bg(i){Xt._getMatrix(ed,Xt.workingColorSpace,i);let e=`mat3( ${ed.elements.map(t=>t.toFixed(4))} )`;switch(Xt.getTransfer(i)){case Dr:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function td(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+wg(i.getShaderSource(e),a)}else return r}function Tg(i,e){let t=bg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ag={[Sl]:"Linear",[El]:"Reinhard",[wl]:"Cineon",[to]:"ACESFilmic",[Tl]:"AgX",[Al]:"Neutral",[bl]:"Custom"};function Rg(i,e){let t=Ag[e];return t===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ec=new I;function Cg(){Xt.getLuminanceCoefficients(Ec);let i=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function Ig(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function mo(i){return i!==""}function nd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(i){return i.replace(Dg,Ug)}var Ng=new Map;function Ug(i,e){let t=Bt[e];if(t===void 0){let n=Ng.get(e);if(n!==void 0)t=Bt[n],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rh(t)}var Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(i){return i.replace(Fg,Bg)}function Bg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Og={[eo]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};function zg(i){return Og[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hg={[cs]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE_UV"};function kg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Hg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Gg={[bs]:"ENVMAP_MODE_REFRACTION"};function Vg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Gg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wg={[Da]:"ENVMAP_BLENDING_MULTIPLY",[Eu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function Xg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Wg[i.combine]||"ENVMAP_BLENDING_NONE"}function qg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=zg(t),c=kg(t),u=Vg(t),g=Xg(t),h=qg(t),m=Pg(t),x=Ig(r),E=s.createProgram(),p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mo).join(`
`),f.length>0&&(f+=`
`)):(p=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),f=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+g:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Bt.tonemapping_pars_fragment:"",t.toneMapping!==_i?Rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Tg("linearToOutputTexel",t.outputColorSpace),Cg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),o=rh(o),o=nd(o,t),o=id(o,t),a=rh(a),a=nd(a,t),a=id(a,t),o=sd(o),a=sd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=y+p+o,w=y+f+a,b=ju(s,s.VERTEX_SHADER,R),T=ju(s,s.FRAGMENT_SHADER,w);s.attachShader(E,b),s.attachShader(E,T),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function P(X){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(E)||"",J=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(T)||"",$=G.trim(),Z=J.trim(),ee=O.trim(),xe=!0,de=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(xe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,b,T);else{let ge=td(s,b,"vertex"),Se=td(s,T,"fragment");bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+$+`
`+ge+`
`+Se)}else $!==""?Mt("WebGLProgram: Program Info Log:",$):(Z===""||ee==="")&&(de=!1);de&&(X.diagnostics={runnable:xe,programLog:$,vertexShader:{log:Z,prefix:p},fragmentShader:{log:ee,prefix:f}})}s.deleteShader(b),s.deleteShader(T),_=new dr(s,E),C=Lg(s,E)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(E,Sg)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eg++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=T,this}var Zg=0,oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ah(e),t.set(e,n)),n}},ah=class{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}};function Jg(i){return i===us||i===co||i===lo}function $g(i,e,t,n,s,r){let o=new Qs,a=new oh,l=new Set,c=[],u=new Map,g=n.logarithmicDepthBuffer,h=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,C,F,X,G,J){let O=X.fog,$=G.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?X.environment:null,ee=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,xe=e.get(_.envMap||Z,ee),de=xe&&xe.mapping===no?xe.image.height:null,ge=m[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Mt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let Se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qe=Se!==void 0?Se.length:0,Be=0;$.morphAttributes.position!==void 0&&(Be=1),$.morphAttributes.normal!==void 0&&(Be=2),$.morphAttributes.color!==void 0&&(Be=3);let Lt,pt,Je,he;if(ge){let j=Ii[ge];Lt=j.vertexShader,pt=j.fragmentShader}else{Lt=_.vertexShader,pt=_.fragmentShader;let j=a.getVertexShaderStage(_),pe=a.getFragmentShaderStage(_);a.update(_,j,pe),Je=j.id,he=pe.id}let ye=i.getRenderTarget(),Ye=i.state.buffers.depth.getReversed(),qe=G.isInstancedMesh===!0,De=G.isBatchedMesh===!0,gt=!!_.map,Rt=!!_.matcap,St=!!xe,Ae=!!_.aoMap,se=!!_.lightMap,ie=!!_.bumpMap&&_.wireframe===!1,we=!!_.normalMap,re=!!_.displacementMap,_e=!!_.emissiveMap,Ee=!!_.metalnessMap,Ue=!!_.roughnessMap,D=_.anisotropy>0,st=_.clearcoat>0,Ce=_.dispersion>0,A=_.retroreflectivity>0,d=_.iridescence>0,L=_.sheen>0,q=_.transmission>0,V=D&&!!_.anisotropyMap,ce=st&&!!_.clearcoatMap,le=st&&!!_.clearcoatNormalMap,Q=st&&!!_.clearcoatRoughnessMap,B=d&&!!_.iridescenceMap,Re=d&&!!_.iridescenceThicknessMap,Ie=L&&!!_.sheenColorMap,Le=L&&!!_.sheenRoughnessMap,He=!!_.specularMap,$e=!!_.specularColorMap,je=!!_.specularIntensityMap,et=q&&!!_.transmissionMap,H=q&&!!_.thicknessMap,Ne=!!_.gradientMap,Me=!!_.alphaMap,ke=_.alphaTest>0,Ve=!!_.alphaHash,be=!!_.extensions,N=_i;_.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(N=i.toneMapping);let W={shaderID:ge,shaderType:_.type,shaderName:_.name,vertexShader:Lt,fragmentShader:pt,defines:_.defines,customVertexShaderID:Je,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:De,batchingColor:De&&G._colorsTexture!==null,instancing:qe,instancingColor:qe&&G.instanceColor!==null,instancingMorph:qe&&G.morphTexture!==null,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:Rt,envMap:St,envMapMode:St&&xe.mapping,envMapCubeUVHeight:de,aoMap:Ae,lightMap:se,bumpMap:ie,normalMap:we,displacementMap:re,emissiveMap:_e,normalMapObjectSpace:we&&_.normalMapType===Au,normalMapTangentSpace:we&&_.normalMapType===ho,packedNormalMap:we&&_.normalMapType===ho&&Jg(_.normalMap.format),metalnessMap:Ee,roughnessMap:Ue,anisotropy:D,anisotropyMap:V,clearcoat:st,clearcoatMap:ce,clearcoatNormalMap:le,clearcoatRoughnessMap:Q,dispersion:Ce,retroreflection:A,iridescence:d,iridescenceMap:B,iridescenceThicknessMap:Re,sheen:L,sheenColorMap:Ie,sheenRoughnessMap:Le,specularMap:He,specularColorMap:$e,specularIntensityMap:je,transmission:q,transmissionMap:et,thicknessMap:H,gradientMap:Ne,opaque:_.transparent===!1&&_.blending===or&&_.alphaToCoverage===!1,alphaMap:Me,alphaTest:ke,alphaHash:Ve,combine:_.combine,mapUv:gt&&x(_.map.channel),aoMapUv:Ae&&x(_.aoMap.channel),lightMapUv:se&&x(_.lightMap.channel),bumpMapUv:ie&&x(_.bumpMap.channel),normalMapUv:we&&x(_.normalMap.channel),displacementMapUv:re&&x(_.displacementMap.channel),emissiveMapUv:_e&&x(_.emissiveMap.channel),metalnessMapUv:Ee&&x(_.metalnessMap.channel),roughnessMapUv:Ue&&x(_.roughnessMap.channel),anisotropyMapUv:V&&x(_.anisotropyMap.channel),clearcoatMapUv:ce&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(_.sheenRoughnessMap.channel),specularMapUv:He&&x(_.specularMap.channel),specularColorMapUv:$e&&x(_.specularColorMap.channel),specularIntensityMapUv:je&&x(_.specularIntensityMap.channel),transmissionMapUv:et&&x(_.transmissionMap.channel),thicknessMapUv:H&&x(_.thicknessMap.channel),alphaMapUv:Me&&x(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(we||D),vertexNormals:!!$.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(gt||Me),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||$.attributes.normal===void 0&&we===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ye,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:Be,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:N,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&Xt.getTransfer(_.map.colorSpace)===en,decodeVideoTextureEmissive:_e&&_.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(_.emissiveMap.colorSpace)===en,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nn,flipSided:_.side===Dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:be&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&_.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return W.vertexUv1s=l.has(1),W.vertexUv2s=l.has(2),W.vertexUv3s=l.has(3),l.clear(),W}function p(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)C.push(F),C.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(f(C,_),y(C,_),C.push(i.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function f(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function y(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function R(_){let C=m[_.type],F;if(C){let X=Ii[C];F=uo.clone(X.uniforms)}else F=_.uniforms;return F}function w(_,C){let F=u.get(C);return F!==void 0?++F.usedTimes:(F=new Yg(i,C,_,s),c.push(F),u.set(C,F)),F}function b(_){if(--_.usedTimes===0){let C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function P(){a.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:R,acquireProgram:w,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:P}}function Kg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function od(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ad(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,x,E,p,f){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:m,material:x,materialVariant:o(h),groupOrder:E,renderOrder:h.renderOrder,z:p,group:f},i[e]=y):(y.id=h.id,y.object=h,y.geometry=m,y.material=x,y.materialVariant=o(h),y.groupOrder=E,y.renderOrder=h.renderOrder,y.z=p,y.group=f),e++,y}function l(h,m,x,E,p,f,y){y.reversedDepth===!0&&(p=-p);let R=a(h,m,x,E,p,f);x.transmission>0?n.push(R):x.transparent===!0?s.push(R):t.push(R)}function c(h,m,x,E,p,f){let y=a(h,m,x,E,p,f);x.transmission>0?n.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,m){t.length>1&&t.sort(h||Qg),n.length>1&&n.sort(m||od),s.length>1&&s.sort(m||od)}function g(){for(let h=e,m=i.length;h<m;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:g,sort:u}}function jg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ad,i.set(n,[o])):s>=r.length?(o=new ad,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ex(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new lt};break;case"SpotLight":t={position:new I,direction:new I,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function tx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var nx=0;function ix(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sx(i){let e=new ex,t=tx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Et,o=new Et;function a(c){let u=0,g=0,h=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let m=0,x=0,E=0,p=0,f=0,y=0,R=0,w=0,b=0,T=0,P=0,_=0,C=0,F=0;c.sort(ix);for(let G=0,J=c.length;G<J;G++){let O=c[G],$=O.color,Z=O.intensity,ee=O.distance,xe=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===us?xe=O.shadow.map.texture:xe=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=$.r*Z,g+=$.g*Z,h+=$.b*Z;else if(O.isLightProbe){for(let de=0;de<9;de++)n.probe[de].addScaledVector(O.sh.coefficients[de],Z);F++}else if(O.isSunLight){let de=e.get(O);if(de.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ge=O.shadow,Se=t.get(O);Se.shadowIntensity=ge.intensity,Se.shadowBias=ge.bias,Se.shadowNormalBias=ge.normalBias,Se.shadowRadius=ge.radius,Se.shadowMapSize.copy(ge.mapSize).multiply(ge.getFrameExtents()),n.sunShadow[x]=Se,n.sunShadowMap[x]=xe;let Qe=ge.getViewportCount();for(let Be=0;Be<Qe;Be++)n.sunShadowMatrix[E+Be]=ge.getMatrix(Be),n.sunShadowCascade[E+Be]=ge._cascadeData[Be];E+=Qe,x++}n.sun[m]=de,m++}else if(O.isDirectionalLight){let de=e.get(O);if(de.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ge=O.shadow,Se=t.get(O);Se.shadowIntensity=ge.intensity,Se.shadowBias=ge.bias,Se.shadowNormalBias=ge.normalBias,Se.shadowRadius=ge.radius,Se.shadowMapSize=ge.mapSize,n.directionalShadow[p]=Se,n.directionalShadowMap[p]=xe,n.directionalShadowMatrix[p]=O.shadow.matrix,b++}n.directional[p]=de,p++}else if(O.isSpotLight){let de=e.get(O);de.position.setFromMatrixPosition(O.matrixWorld),de.color.copy($).multiplyScalar(Z),de.distance=ee,de.coneCos=Math.cos(O.angle),de.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),de.decay=O.decay,n.spot[y]=de;let ge=O.shadow;if(O.map&&(n.spotLightMap[_]=O.map,_++,ge.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[y]=ge.matrix,O.castShadow){let Se=t.get(O);Se.shadowIntensity=ge.intensity,Se.shadowBias=ge.bias,Se.shadowNormalBias=ge.normalBias,Se.shadowRadius=ge.radius,Se.shadowMapSize=ge.mapSize,n.spotShadow[y]=Se,n.spotShadowMap[y]=xe,P++}y++}else if(O.isRectAreaLight){let de=e.get(O);de.color.copy($).multiplyScalar(Z),de.halfWidth.set(O.width*.5,0,0),de.halfHeight.set(0,O.height*.5,0),n.rectArea[R]=de,R++}else if(O.isPointLight){let de=e.get(O);if(de.color.copy(O.color).multiplyScalar(O.intensity),de.distance=O.distance,de.decay=O.decay,O.castShadow){let ge=O.shadow,Se=t.get(O);Se.shadowIntensity=ge.intensity,Se.shadowBias=ge.bias,Se.shadowNormalBias=ge.normalBias,Se.shadowRadius=ge.radius,Se.shadowMapSize=ge.mapSize,Se.shadowCameraNear=ge.camera.near,Se.shadowCameraFar=ge.camera.far,n.pointShadow[f]=Se,n.pointShadowMap[f]=xe,n.pointShadowMatrix[f]=O.shadow.matrix,T++}n.point[f]=de,f++}else if(O.isHemisphereLight){let de=e.get(O);de.skyColor.copy(O.color).multiplyScalar(Z),de.groundColor.copy(O.groundColor).multiplyScalar(Z),n.hemi[w]=de,w++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=h;let X=n.hash;(X.sunLength!==m||X.directionalLength!==p||X.pointLength!==f||X.spotLength!==y||X.rectAreaLength!==R||X.hemiLength!==w||X.numSunShadows!==x||X.numDirectionalShadows!==b||X.numPointShadows!==T||X.numSpotShadows!==P||X.numSpotMaps!==_||X.numLightProbes!==F)&&(n.sun.length=m,n.directional.length=p,n.spot.length=y,n.rectArea.length=R,n.point.length=f,n.hemi.length=w,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-C,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=F,X.sunLength=m,X.directionalLength=p,X.pointLength=f,X.spotLength=y,X.rectAreaLength=R,X.hemiLength=w,X.numSunShadows=x,X.numDirectionalShadows=b,X.numPointShadows=T,X.numSpotShadows=P,X.numSpotMaps=_,X.numLightProbes=F,n.version=nx++)}function l(c,u){let g=0,h=0,m=0,x=0,E=0,p=0,f=u.matrixWorldInverse;for(let y=0,R=c.length;y<R;y++){let w=c[y];if(w.isSunLight){let b=n.sun[g];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(f),g++}else if(w.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),h++}else if(w.isSpotLight){let b=n.spot[x];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),x++}else if(w.isRectAreaLight){let b=n.rectArea[E];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(w.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),E++}else if(w.isPointLight){let b=n.point[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(f),p++}}}return{setup:a,setupView:l,state:n}}function cd(i){let e=new sx(i),t=[],n=[],s=[];function r(h){g.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let g={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function rx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new cd(i),e.set(s,[a])):r>=o.length?(a=new cd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ax=`uniform sampler2D shadow_pass;
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
}`,cx=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],lx=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ld=new Et,po=new I,eh=new I;function hx(i,e,t){let n=new tr,s=new At,r=new At,o=new rn,a=new ga,l=new xa,c={},u=t.maxTextureSize,g={[Ri]:Dn,[Dn]:Ri,[Nn]:Nn},h=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:ox,fragmentShader:ax}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let x=new Kt;x.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new xt(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let f=this.type;this.render=function(T,P,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===La&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=eo);let C=i.getRenderTarget(),F=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Ci),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let J=f!==this.type;J&&P.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach($=>$.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,$=T.length;O<$;O++){let Z=T[O],ee=Z.shadow;if(ee===void 0){Mt("WebGLShadowMap:",Z,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);let xe=ee.getFrameExtents();s.multiply(xe),r.copy(ee.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/xe.x),s.x=r.x*xe.x,ee.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/xe.y),s.y=r.y*xe.y,ee.mapSize.y=r.y));let de=i.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=de,ee.map===null||J===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===rr){if(Z.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new kn(s.x,s.y,{format:us,type:si,minFilter:Un,magFilter:Un,generateMipmaps:!1}),ee.map.texture.name=Z.name+".shadowMap",ee.map.depthTexture=new is(s.x,s.y,ci),ee.map.depthTexture.name=Z.name+".shadowMapDepth",ee.map.depthTexture.format=Ei,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=In,ee.map.depthTexture.magFilter=In}else Z.isPointLight?(ee.map=new bc(s.x),ee.map.depthTexture=new fa(s.x,yi)):(ee.map=new kn(s.x,s.y),ee.map.depthTexture=new is(s.x,s.y,yi)),ee.map.depthTexture.name=Z.name+".shadowMap",ee.map.depthTexture.format=Ei,this.type===eo?(ee.map.depthTexture.compareFunction=de?Mc:vc,ee.map.depthTexture.minFilter=Un,ee.map.depthTexture.magFilter=Un):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=In,ee.map.depthTexture.magFilter=In);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==s.x||ee.map.height!==s.y)&&ee.map.setSize(s.x,s.y);let ge=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();Z.isPointLight!==!0&&ee.updateMatrices(Z,_);for(let Se=0;Se<ge;Se++){let Qe=ee.getCamera(Se);if(Z.isPointLight){let Be=ee.camera,Lt=ee.matrix,pt=Z.distance||Be.far;pt!==Be.far&&(Be.far=pt,Be.updateProjectionMatrix()),po.setFromMatrixPosition(Z.matrixWorld),Be.position.copy(po),eh.copy(Be.position),eh.add(cx[Se]),Be.up.copy(lx[Se]),Be.lookAt(eh),Be.updateMatrixWorld(),Lt.makeTranslation(-po.x,-po.y,-po.z),ld.multiplyMatrices(Be.projectionMatrix,Be.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(ld,Be.coordinateSystem,Be.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)i.setRenderTarget(ee.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(ee.map),i.clear());let Be=ee.getViewport(Se);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),G.viewport(o)}n=ee.getFrustum(Se),w(P,_,Qe,Z,this.type)}ee.isPointLightShadow!==!0&&this.type===rr&&y(ee,_),ee.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(C,F,X)};function y(T,P){let _=e.update(E);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new kn(s.x,s.y,{format:us,type:si}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,_,h,E,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,_,m,E,null)}function R(T,P,_,C){let F=null,X=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(X!==void 0)F=X;else if(F=_.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let G=F.uuid,J=P.uuid,O=c[G];O===void 0&&(O={},c[G]=O);let $=O[J];$===void 0&&($=F.clone(),O[J]=$,P.addEventListener("dispose",b)),F=$}if(F.visible=P.visible,F.wireframe=P.wireframe,C===rr?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:g[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,_.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let G=i.properties.get(F);G.light=_}return F}function w(T,P,_,C,F){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===rr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let J=e.update(T),O=T.material;if(Array.isArray(O)){let $=J.groups;for(let Z=0,ee=$.length;Z<ee;Z++){let xe=$[Z],de=O[xe.materialIndex];if(de&&de.visible){let ge=R(T,de,C,F);T.onBeforeShadow(i,T,P,_,J,ge,xe),i.renderBufferDirect(_,null,J,ge,T,xe),T.onAfterShadow(i,T,P,_,J,ge,xe)}}}else if(O.visible){let $=R(T,O,C,F);T.onBeforeShadow(i,T,P,_,J,$,null),i.renderBufferDirect(_,null,J,$,T,null),T.onAfterShadow(i,T,P,_,J,$,null)}}let G=T.children;for(let J=0,O=G.length;J<O;J++)w(G[J],P,_,C,F)}function b(T){T.target.removeEventListener("dispose",b);for(let _ in c){let C=c[_],F=T.target.uuid;F in C&&(C[F].dispose(),delete C[F])}}}function ux(i,e){function t(){let H=!1,Ne=new rn,Me=null,ke=new rn(0,0,0,0);return{setMask:function(Ve){Me!==Ve&&!H&&(i.colorMask(Ve,Ve,Ve,Ve),Me=Ve)},setLocked:function(Ve){H=Ve},setClear:function(Ve,be,N,W,j){j===!0&&(Ve*=W,be*=W,N*=W),Ne.set(Ve,be,N,W),ke.equals(Ne)===!1&&(i.clearColor(Ve,be,N,W),ke.copy(Ne))},reset:function(){H=!1,Me=null,ke.set(-1,0,0,0)}}}function n(){let H=!1,Ne=!1,Me=null,ke=null,Ve=null;return{setReversed:function(be){if(Ne!==be){let N=e.get("EXT_clip_control");be?N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT):N.clipControlEXT(N.LOWER_LEFT_EXT,N.NEGATIVE_ONE_TO_ONE_EXT),Ne=be;let W=Ve;Ve=null,this.setClear(W)}},getReversed:function(){return Ne},setTest:function(be){be?ye(i.DEPTH_TEST):Ye(i.DEPTH_TEST)},setMask:function(be){Me!==be&&!H&&(i.depthMask(be),Me=be)},setFunc:function(be){if(Ne&&(be=zu[be]),ke!==be){switch(be){case Qo:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=be}},setLocked:function(be){H=be},setClear:function(be){Ve!==be&&(Ve=be,Ne&&(be=1-be),i.clearDepth(be))},reset:function(){H=!1,Me=null,ke=null,Ve=null,Ne=!1}}}function s(){let H=!1,Ne=null,Me=null,ke=null,Ve=null,be=null,N=null,W=null,j=null;return{setTest:function(pe){H||(pe?ye(i.STENCIL_TEST):Ye(i.STENCIL_TEST))},setMask:function(pe){Ne!==pe&&!H&&(i.stencilMask(pe),Ne=pe)},setFunc:function(pe,tt,U){(Me!==pe||ke!==tt||Ve!==U)&&(i.stencilFunc(pe,tt,U),Me=pe,ke=tt,Ve=U)},setOp:function(pe,tt,U){(be!==pe||N!==tt||W!==U)&&(i.stencilOp(pe,tt,U),be=pe,N=tt,W=U)},setLocked:function(pe){H=pe},setClear:function(pe){j!==pe&&(i.clearStencil(pe),j=pe)},reset:function(){H=!1,Ne=null,Me=null,ke=null,Ve=null,be=null,N=null,W=null,j=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},g={},h={},m=new WeakMap,x=[],E=null,p=!1,f=null,y=null,R=null,w=null,b=null,T=null,P=null,_=new lt(0,0,0),C=0,F=!1,X=null,G=null,J=null,O=null,$=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,xe=0,de=i.getParameter(i.VERSION);de.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(de)[1]),ee=xe>=1):de.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),ee=xe>=2);let ge=null,Se={},Qe=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Lt=new rn().fromArray(Qe),pt=new rn().fromArray(Be);function Je(H,Ne,Me,ke){let Ve=new Uint8Array(4),be=i.createTexture();i.bindTexture(H,be),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let N=0;N<Me;N++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,Ve):i.texImage2D(Ne+N,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ve);return be}let he={};he[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(i.DEPTH_TEST),o.setFunc(Ys),ie(!1),we(xl),ye(i.CULL_FACE),Ae(Ci);function ye(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function Ye(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function qe(H,Ne){return h[H]!==Ne?(i.bindFramebuffer(H,Ne),h[H]=Ne,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ne),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function De(H,Ne){let Me=x,ke=!1;if(H){Me=m.get(Ne),Me===void 0&&(Me=[],m.set(Ne,Me));let Ve=H.textures;if(Me.length!==Ve.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let be=0,N=Ve.length;be<N;be++)Me[be]=i.COLOR_ATTACHMENT0+be;Me.length=Ve.length,ke=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,ke=!0);ke&&i.drawBuffers(Me)}function gt(H){return E!==H?(i.useProgram(H),E=H,!0):!1}let Rt={[ws]:i.FUNC_ADD,[ou]:i.FUNC_SUBTRACT,[au]:i.FUNC_REVERSE_SUBTRACT};Rt[cu]=i.MIN,Rt[lu]=i.MAX;let St={[hu]:i.ZERO,[uu]:i.ONE,[du]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[_u]:i.SRC_ALPHA_SATURATE,[gu]:i.DST_COLOR,[pu]:i.DST_ALPHA,[fu]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[xu]:i.ONE_MINUS_DST_COLOR,[mu]:i.ONE_MINUS_DST_ALPHA,[yu]:i.CONSTANT_COLOR,[vu]:i.ONE_MINUS_CONSTANT_COLOR,[Mu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(H,Ne,Me,ke,Ve,be,N,W,j,pe){if(H===Ci){p===!0&&(Ye(i.BLEND),p=!1);return}if(p===!1&&(ye(i.BLEND),p=!0),H!==ru){if(H!==f||pe!==F){if((y!==ws||b!==ws)&&(i.blendEquation(i.FUNC_ADD),y=ws,b=ws),pe)switch(H){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vi:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:bt("WebGLState: Invalid blending: ",H);break}else switch(H){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _l:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",H);break}R=null,w=null,T=null,P=null,_.set(0,0,0),C=0,f=H,F=pe}return}Ve=Ve||Ne,be=be||Me,N=N||ke,(Ne!==y||Ve!==b)&&(i.blendEquationSeparate(Rt[Ne],Rt[Ve]),y=Ne,b=Ve),(Me!==R||ke!==w||be!==T||N!==P)&&(i.blendFuncSeparate(St[Me],St[ke],St[be],St[N]),R=Me,w=ke,T=be,P=N),(W.equals(_)===!1||j!==C)&&(i.blendColor(W.r,W.g,W.b,j),_.copy(W),C=j),f=H,F=!1}function se(H,Ne){H.side===Nn?Ye(i.CULL_FACE):ye(i.CULL_FACE);let Me=H.side===Dn;Ne&&(Me=!Me),ie(Me),H.blending===or&&H.transparent===!1?Ae(Ci):Ae(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let ke=H.stencilWrite;a.setTest(ke),ke&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),_e(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(H){X!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),X=H)}function we(H){H!==iu?(ye(i.CULL_FACE),H!==G&&(H===xl?i.cullFace(i.BACK):H===su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ye(i.CULL_FACE),G=H}function re(H){H!==J&&(ee&&i.lineWidth(H),J=H)}function _e(H,Ne,Me){H?(ye(i.POLYGON_OFFSET_FILL),(O!==Ne||$!==Me)&&(O=Ne,$=Me,o.getReversed()&&(Ne=-Ne),i.polygonOffset(Ne,Me))):Ye(i.POLYGON_OFFSET_FILL)}function Ee(H){H?ye(i.SCISSOR_TEST):Ye(i.SCISSOR_TEST)}function Ue(H){H===void 0&&(H=i.TEXTURE0+Z-1),ge!==H&&(i.activeTexture(H),ge=H)}function D(H,Ne,Me){Me===void 0&&(ge===null?Me=i.TEXTURE0+Z-1:Me=ge);let ke=Se[Me];ke===void 0&&(ke={type:void 0,texture:void 0},Se[Me]=ke),(ke.type!==H||ke.texture!==Ne)&&(ge!==Me&&(i.activeTexture(Me),ge=Me),i.bindTexture(H,Ne||he[H]),ke.type=H,ke.texture=Ne)}function st(){let H=Se[ge];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ce(){try{i.compressedTexImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function d(){try{i.texSubImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function L(){try{i.texSubImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function ce(){try{i.texStorage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function le(){try{i.texStorage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function Q(){try{i.texImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function B(){try{i.texImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function Re(H){return g[H]!==void 0?g[H]:i.getParameter(H)}function Ie(H,Ne){g[H]!==Ne&&(i.pixelStorei(H,Ne),g[H]=Ne)}function Le(H){Lt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Lt.copy(H))}function He(H){pt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),pt.copy(H))}function $e(H,Ne){let Me=c.get(Ne);Me===void 0&&(Me=new WeakMap,c.set(Ne,Me));let ke=Me.get(H);ke===void 0&&(ke=i.getUniformBlockIndex(Ne,H.name),Me.set(H,ke))}function je(H,Ne){let ke=c.get(Ne).get(H);l.get(Ne)!==ke&&(i.uniformBlockBinding(Ne,ke,H.__bindingPointIndex),l.set(Ne,ke))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},g={},ge=null,Se={},h={},m=new WeakMap,x=[],E=null,p=!1,f=null,y=null,R=null,w=null,b=null,T=null,P=null,_=new lt(0,0,0),C=0,F=!1,X=null,G=null,J=null,O=null,$=null,Lt.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:Ye,bindFramebuffer:qe,drawBuffers:De,useProgram:gt,setBlending:Ae,setMaterial:se,setFlipSided:ie,setCullFace:we,setLineWidth:re,setPolygonOffset:_e,setScissorTest:Ee,activeTexture:Ue,bindTexture:D,unbindTexture:st,compressedTexImage2D:Ce,compressedTexImage3D:A,texImage2D:Q,texImage3D:B,pixelStorei:Ie,getParameter:Re,updateUBOMapping:$e,uniformBlockBinding:je,texStorage2D:ce,texStorage3D:le,texSubImage2D:d,texSubImage3D:L,compressedTexSubImage2D:q,compressedTexSubImage3D:V,scissor:Le,viewport:He,reset:et}}function dx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap,g=new Set,h,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,d){return x?new OffscreenCanvas(A,d):Nr("canvas")}function p(A,d,L){let q=1,V=Ce(A);if((V.width>L||V.height>L)&&(q=L/Math.max(V.width,V.height)),q<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ce=Math.floor(q*V.width),le=Math.floor(q*V.height);h===void 0&&(h=E(ce,le));let Q=d?E(ce,le):h;return Q.width=ce,Q.height=le,Q.getContext("2d").drawImage(A,0,0,ce,le),Mt("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+ce+"x"+le+")."),Q}else return"data"in A&&Mt("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),A;return A}function f(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,d,L,q,V,ce=!1){if(A!==null){if(i[A]!==void 0)return i[A];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le;q&&(le=e.get("EXT_texture_norm16"),le||Mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=d;if(d===i.RED&&(L===i.FLOAT&&(Q=i.R32F),L===i.HALF_FLOAT&&(Q=i.R16F),L===i.UNSIGNED_BYTE&&(Q=i.R8),L===i.UNSIGNED_SHORT&&le&&(Q=le.R16_EXT),L===i.SHORT&&le&&(Q=le.R16_SNORM_EXT)),d===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(Q=i.R8UI),L===i.UNSIGNED_SHORT&&(Q=i.R16UI),L===i.UNSIGNED_INT&&(Q=i.R32UI),L===i.BYTE&&(Q=i.R8I),L===i.SHORT&&(Q=i.R16I),L===i.INT&&(Q=i.R32I)),d===i.RG&&(L===i.FLOAT&&(Q=i.RG32F),L===i.HALF_FLOAT&&(Q=i.RG16F),L===i.UNSIGNED_BYTE&&(Q=i.RG8),L===i.UNSIGNED_SHORT&&le&&(Q=le.RG16_EXT),L===i.SHORT&&le&&(Q=le.RG16_SNORM_EXT)),d===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(Q=i.RG8UI),L===i.UNSIGNED_SHORT&&(Q=i.RG16UI),L===i.UNSIGNED_INT&&(Q=i.RG32UI),L===i.BYTE&&(Q=i.RG8I),L===i.SHORT&&(Q=i.RG16I),L===i.INT&&(Q=i.RG32I)),d===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),L===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),L===i.UNSIGNED_INT&&(Q=i.RGB32UI),L===i.BYTE&&(Q=i.RGB8I),L===i.SHORT&&(Q=i.RGB16I),L===i.INT&&(Q=i.RGB32I)),d===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),L===i.UNSIGNED_INT&&(Q=i.RGBA32UI),L===i.BYTE&&(Q=i.RGBA8I),L===i.SHORT&&(Q=i.RGBA16I),L===i.INT&&(Q=i.RGBA32I)),d===i.RGB&&(L===i.UNSIGNED_SHORT&&le&&(Q=le.RGB16_EXT),L===i.SHORT&&le&&(Q=le.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),d===i.RGBA){let B=ce?Dr:Xt.getTransfer(V);L===i.FLOAT&&(Q=i.RGBA32F),L===i.HALF_FLOAT&&(Q=i.RGBA16F),L===i.UNSIGNED_BYTE&&(Q=B===en?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&le&&(Q=le.RGBA16_EXT),L===i.SHORT&&le&&(Q=le.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(A,d){let L;return A?d===null||d===yi||d===cr?L=i.DEPTH24_STENCIL8:d===ci?L=i.DEPTH32F_STENCIL8:d===ar&&(L=i.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):d===null||d===yi||d===cr?L=i.DEPTH_COMPONENT24:d===ci?L=i.DEPTH_COMPONENT32F:d===ar&&(L=i.DEPTH_COMPONENT16),L}function T(A,d){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==In&&A.minFilter!==Un?Math.log2(Math.max(d.width,d.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?d.mipmaps.length:1}function P(A){let d=A.target;d.removeEventListener("dispose",P),C(d),d.isVideoTexture&&u.delete(d),d.isHTMLTexture&&g.delete(d)}function _(A){let d=A.target;d.removeEventListener("dispose",_),X(d)}function C(A){let d=n.get(A);if(d.__webglInit===void 0)return;let L=A.source,q=m.get(L);if(q){let V=q[d.__cacheKey];V.usedTimes--,V.usedTimes===0&&F(A),Object.keys(q).length===0&&m.delete(L)}n.remove(A)}function F(A){let d=n.get(A);i.deleteTexture(d.__webglTexture);let L=A.source,q=m.get(L);delete q[d.__cacheKey],o.memory.textures--}function X(A){let d=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(d.__webglFramebuffer[q]))for(let V=0;V<d.__webglFramebuffer[q].length;V++)i.deleteFramebuffer(d.__webglFramebuffer[q][V]);else i.deleteFramebuffer(d.__webglFramebuffer[q]);d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer[q])}else{if(Array.isArray(d.__webglFramebuffer))for(let q=0;q<d.__webglFramebuffer.length;q++)i.deleteFramebuffer(d.__webglFramebuffer[q]);else i.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&i.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let q=0;q<d.__webglColorRenderbuffer.length;q++)d.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(d.__webglColorRenderbuffer[q]);d.__webglDepthRenderbuffer&&i.deleteRenderbuffer(d.__webglDepthRenderbuffer)}let L=A.textures;for(let q=0,V=L.length;q<V;q++){let ce=n.get(L[q]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(L[q])}n.remove(A)}let G=0;function J(){G=0}function O(){return G}function $(A){G=A}function Z(){let A=G;return A>=s.maxTextures&&Mt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,A}function ee(A){let d=[];return d.push(A.wrapS),d.push(A.wrapT),d.push(A.wrapR||0),d.push(A.magFilter),d.push(A.minFilter),d.push(A.anisotropy),d.push(A.internalFormat),d.push(A.format),d.push(A.type),d.push(A.generateMipmaps),d.push(A.premultiplyAlpha),d.push(A.flipY),d.push(A.unpackAlignment),d.push(A.colorSpace),d.join()}function xe(A,d){let L=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&L.__version!==A.version){let q=A.image;if(q===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(L,A,d);return}}else A.isExternalTexture&&(L.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+d)}function de(A,d){let L=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){Ye(L,A,d);return}else A.isExternalTexture&&(L.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+d)}function ge(A,d){let L=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){Ye(L,A,d);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+d)}function Se(A,d){let L=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&L.__version!==A.version){qe(L,A,d);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+d)}let Qe={[Zs]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},Be={[In]:i.NEAREST,[bu]:i.NEAREST_MIPMAP_NEAREST,[io]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},Lt={[Cu]:i.NEVER,[Nu]:i.ALWAYS,[Pu]:i.LESS,[vc]:i.LEQUAL,[Iu]:i.EQUAL,[Mc]:i.GEQUAL,[Lu]:i.GREATER,[Du]:i.NOTEQUAL};function pt(A,d){if(d.type===ci&&e.has("OES_texture_float_linear")===!1&&(d.magFilter===Un||d.magFilter===Fa||d.magFilter===io||d.magFilter===ls||d.minFilter===Un||d.minFilter===Fa||d.minFilter===io||d.minFilter===ls)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Qe[d.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Qe[d.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Qe[d.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Be[d.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Be[d.minFilter]),d.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Lt[d.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===In||d.minFilter!==io&&d.minFilter!==ls||d.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||n.get(d).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,s.getMaxAnisotropy())),n.get(d).__currentAnisotropy=d.anisotropy}}}function Je(A,d){let L=!1;A.__webglInit===void 0&&(A.__webglInit=!0,d.addEventListener("dispose",P));let q=d.source,V=m.get(q);V===void 0&&(V={},m.set(q,V));let ce=ee(d);if(ce!==A.__cacheKey){V[ce]===void 0&&(V[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),V[ce].usedTimes++;let le=V[A.__cacheKey];le!==void 0&&(V[A.__cacheKey].usedTimes--,le.usedTimes===0&&F(d)),A.__cacheKey=ce,A.__webglTexture=V[ce].texture}return L}function he(A,d,L){return Math.floor(Math.floor(A/L)/d)}function ye(A,d,L,q){let ce=A.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,d.width,d.height,L,q,d.data);else{ce.sort((Ie,Le)=>Ie.start-Le.start);let le=0;for(let Ie=1;Ie<ce.length;Ie++){let Le=ce[le],He=ce[Ie],$e=Le.start+Le.count,je=he(He.start,d.width,4),et=he(Le.start,d.width,4);He.start<=$e+1&&je===et&&he(He.start+He.count-1,d.width,4)===je?Le.count=Math.max(Le.count,He.start+He.count-Le.start):(++le,ce[le]=He)}ce.length=le+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),B=t.getParameter(i.UNPACK_SKIP_PIXELS),Re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,d.width);for(let Ie=0,Le=ce.length;Ie<Le;Ie++){let He=ce[Ie],$e=Math.floor(He.start/4),je=Math.ceil(He.count/4),et=$e%d.width,H=Math.floor($e/d.width),Ne=je,Me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,et,H,Ne,Me,L,q,d.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,B),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function Ye(A,d,L){let q=i.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),d.isData3DTexture&&(q=i.TEXTURE_3D);let V=Je(A,d),ce=d.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+L);let le=n.get(ce);if(ce.version!==le.__version||V===!0){if(t.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap!="undefined"&&d.image instanceof ImageBitmap)===!1){let Me=Xt.getPrimaries(Xt.workingColorSpace),ke=d.colorSpace===Wi?null:Xt.getPrimaries(d.colorSpace),Ve=d.colorSpace===Wi||Me===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment);let B=p(d.image,!1,s.maxTextureSize);B=st(d,B);let Re=r.convert(d.format,d.colorSpace),Ie=r.convert(d.type),Le=w(d.internalFormat,Re,Ie,d.normalized,d.colorSpace,d.isVideoTexture);pt(q,d);let He,$e=d.mipmaps,je=d.isVideoTexture!==!0,et=le.__version===void 0||V===!0,H=ce.dataReady,Ne=T(d,B);if(d.isDepthTexture)Le=b(d.format===hs,d.type),et&&(je?t.texStorage2D(i.TEXTURE_2D,1,Le,B.width,B.height):t.texImage2D(i.TEXTURE_2D,0,Le,B.width,B.height,0,Re,Ie,null));else if(d.isDataTexture)if($e.length>0){je&&et&&t.texStorage2D(i.TEXTURE_2D,Ne,Le,$e[0].width,$e[0].height);for(let Me=0,ke=$e.length;Me<ke;Me++)He=$e[Me],je?H&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,He.width,He.height,Re,Ie,He.data):t.texImage2D(i.TEXTURE_2D,Me,Le,He.width,He.height,0,Re,Ie,He.data);d.generateMipmaps=!1}else je?(et&&t.texStorage2D(i.TEXTURE_2D,Ne,Le,B.width,B.height),H&&ye(d,B,Re,Ie)):t.texImage2D(i.TEXTURE_2D,0,Le,B.width,B.height,0,Re,Ie,B.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){je&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Le,$e[0].width,$e[0].height,B.depth);for(let Me=0,ke=$e.length;Me<ke;Me++)if(He=$e[Me],d.format!==li)if(Re!==null)if(je){if(H)if(d.layerUpdates.size>0){let Ve=Vl(He.width,He.height,d.format,d.type);for(let be of d.layerUpdates){let N=He.data.subarray(be*Ve/He.data.BYTES_PER_ELEMENT,(be+1)*Ve/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,be,He.width,He.height,1,Re,N)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,He.width,He.height,B.depth,Re,He.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,Le,He.width,He.height,B.depth,0,He.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,He.width,He.height,B.depth,Re,Ie,He.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,Le,He.width,He.height,B.depth,0,Re,Ie,He.data);d.layerUpdates.size>0&&d.clearLayerUpdates()}else{je&&et&&t.texStorage2D(i.TEXTURE_2D,Ne,Le,$e[0].width,$e[0].height);for(let Me=0,ke=$e.length;Me<ke;Me++)He=$e[Me],d.format!==li?Re!==null?je?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,He.width,He.height,Re,He.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,Le,He.width,He.height,0,He.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?H&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,He.width,He.height,Re,Ie,He.data):t.texImage2D(i.TEXTURE_2D,Me,Le,He.width,He.height,0,Re,Ie,He.data)}else if(d.isDataArrayTexture)if(je){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Le,B.width,B.height,B.depth),H)if(d.layerUpdates.size>0){let Me=Vl(B.width,B.height,d.format,d.type);for(let ke of d.layerUpdates){let Ve=B.data.subarray(ke*Me/B.data.BYTES_PER_ELEMENT,(ke+1)*Me/B.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ke,B.width,B.height,1,Re,Ie,Ve)}d.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,Re,Ie,B.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,B.width,B.height,B.depth,0,Re,Ie,B.data);else if(d.isData3DTexture)je?(et&&t.texStorage3D(i.TEXTURE_3D,Ne,Le,B.width,B.height,B.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,Re,Ie,B.data)):t.texImage3D(i.TEXTURE_3D,0,Le,B.width,B.height,B.depth,0,Re,Ie,B.data);else if(d.isFramebufferTexture){if(et)if(je)t.texStorage2D(i.TEXTURE_2D,Ne,Le,B.width,B.height);else{let Me=B.width,ke=B.height;for(let Ve=0;Ve<Ne;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,Le,Me,ke,0,Re,Ie,null),Me>>=1,ke>>=1}}else if(d.isHTMLTexture){if("texElementImage2D"in i){let Me=i.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),B.parentNode!==Me){Me.appendChild(B),g.add(d),Me.onpaint=ke=>{let Ve=ke.changedElements;for(let be of g)Ve.includes(be.image)&&(be.needsUpdate=!0)},Me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,B);else{let Ve=i.RGBA,be=i.RGBA,N=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ve,be,N,B)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($e.length>0){if(je&&et){let Me=Ce($e[0]);t.texStorage2D(i.TEXTURE_2D,Ne,Le,Me.width,Me.height)}for(let Me=0,ke=$e.length;Me<ke;Me++)He=$e[Me],je?H&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Re,Ie,He):t.texImage2D(i.TEXTURE_2D,Me,Le,Re,Ie,He);d.generateMipmaps=!1}else if(je){if(et){let Me=Ce(B);t.texStorage2D(i.TEXTURE_2D,Ne,Le,Me.width,Me.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Ie,B)}else t.texImage2D(i.TEXTURE_2D,0,Le,Re,Ie,B);f(d)&&y(q),le.__version=ce.version,d.onUpdate&&d.onUpdate(d)}A.__version=d.version}function qe(A,d,L){if(d.image.length!==6)return;let q=Je(A,d),V=d.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+L);let ce=n.get(V);if(V.version!==ce.__version||q===!0){t.activeTexture(i.TEXTURE0+L);let le=Xt.getPrimaries(Xt.workingColorSpace),Q=d.colorSpace===Wi?null:Xt.getPrimaries(d.colorSpace),B=d.colorSpace===Wi||le===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let Re=d.isCompressedTexture||d.image[0].isCompressedTexture,Ie=d.image[0]&&d.image[0].isDataTexture,Le=[];for(let be=0;be<6;be++)!Re&&!Ie?Le[be]=p(d.image[be],!0,s.maxCubemapSize):Le[be]=Ie?d.image[be].image:d.image[be],Le[be]=st(d,Le[be]);let He=Le[0],$e=r.convert(d.format,d.colorSpace),je=r.convert(d.type),et=w(d.internalFormat,$e,je,d.normalized,d.colorSpace),H=d.isVideoTexture!==!0,Ne=ce.__version===void 0||q===!0,Me=V.dataReady,ke=T(d,He);pt(i.TEXTURE_CUBE_MAP,d);let Ve;if(Re){H&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,et,He.width,He.height);for(let be=0;be<6;be++){Ve=Le[be].mipmaps;for(let N=0;N<Ve.length;N++){let W=Ve[N];d.format!==li?$e!==null?H?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,N,0,0,W.width,W.height,$e,W.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,N,et,W.width,W.height,0,W.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,N,0,0,W.width,W.height,$e,je,W.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,N,et,W.width,W.height,0,$e,je,W.data)}}}else{if(Ve=d.mipmaps,H&&Ne){Ve.length>0&&ke++;let be=Ce(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,et,be.width,be.height)}for(let be=0;be<6;be++)if(Ie){H?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Le[be].width,Le[be].height,$e,je,Le[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,et,Le[be].width,Le[be].height,0,$e,je,Le[be].data);for(let N=0;N<Ve.length;N++){let j=Ve[N].image[be].image;H?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,N+1,0,0,j.width,j.height,$e,je,j.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,N+1,et,j.width,j.height,0,$e,je,j.data)}}else{H?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,$e,je,Le[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,et,$e,je,Le[be]);for(let N=0;N<Ve.length;N++){let W=Ve[N];H?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,N+1,0,0,$e,je,W.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,N+1,et,$e,je,W.image[be])}}}f(d)&&y(i.TEXTURE_CUBE_MAP),ce.__version=V.version,d.onUpdate&&d.onUpdate(d)}A.__version=d.version}function De(A,d,L,q,V,ce){let le=r.convert(L.format,L.colorSpace),Q=r.convert(L.type),B=w(L.internalFormat,le,Q,L.normalized,L.colorSpace),Re=n.get(d),Ie=n.get(L);if(Ie.__renderTarget=d,!Re.__hasExternalTextures){let Le=Math.max(1,d.width>>ce),He=Math.max(1,d.height>>ce);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,ce,B,Le,He,d.depth,0,le,Q,null):t.texImage2D(V,ce,B,Le,He,0,le,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ue(d)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,V,Ie.__webglTexture,0,Ee(d)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,V,Ie.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(A,d,L){if(i.bindRenderbuffer(i.RENDERBUFFER,A),d.depthBuffer){let q=d.depthTexture,V=q&&q.isDepthTexture?q.type:null,ce=b(d.stencilBuffer,V),le=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(d)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(d),ce,d.width,d.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(d),ce,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,ce,d.width,d.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,A)}else{let q=d.textures;for(let V=0;V<q.length;V++){let ce=q[V],le=r.convert(ce.format,ce.colorSpace),Q=r.convert(ce.type),B=w(ce.internalFormat,le,Q,ce.normalized,ce.colorSpace);Ue(d)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(d),B,d.width,d.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(d),B,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,B,d.width,d.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(A,d,L){let q=d.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V=n.get(d.depthTexture);if(V.__renderTarget=d,(!V.__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),q){if(V.__webglInit===void 0&&(V.__webglInit=!0,d.depthTexture.addEventListener("dispose",P)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),pt(i.TEXTURE_CUBE_MAP,d.depthTexture);let Re=r.convert(d.depthTexture.format),Ie=r.convert(d.depthTexture.type),Le;d.depthTexture.format===Ei?Le=i.DEPTH_COMPONENT24:d.depthTexture.format===hs&&(Le=i.DEPTH24_STENCIL8);for(let He=0;He<6;He++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Le,d.width,d.height,0,Re,Ie,null)}}else xe(d.depthTexture,0);let ce=V.__webglTexture,le=Ee(d),Q=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,B=d.depthTexture.format===hs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(d.depthTexture.format===Ei)Ue(d)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,Q,ce,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,B,Q,ce,0);else if(d.depthTexture.format===hs)Ue(d)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,Q,ce,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,B,Q,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(A){let d=n.get(A),L=A.isWebGLCubeRenderTarget===!0;if(d.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(d.__depthDisposeCallback&&d.__depthDisposeCallback(),q){let V=()=>{delete d.__boundDepthTexture,delete d.__depthDisposeCallback,q.removeEventListener("dispose",V)};q.addEventListener("dispose",V),d.__depthDisposeCallback=V}d.__boundDepthTexture=q}if(A.depthTexture&&!d.__autoAllocateDepthBuffer)if(L)for(let q=0;q<6;q++)Rt(d.__webglFramebuffer[q],A,q);else{let q=A.texture.mipmaps;q&&q.length>0?Rt(d.__webglFramebuffer[0],A,0):Rt(d.__webglFramebuffer,A,0)}else if(L){d.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[q]),d.__webglDepthbuffer[q]===void 0)d.__webglDepthbuffer[q]=i.createRenderbuffer(),gt(d.__webglDepthbuffer[q],A,!1);else{let V=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=d.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,ce)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer===void 0)d.__webglDepthbuffer=i.createRenderbuffer(),gt(d.__webglDepthbuffer,A,!1);else{let V=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=d.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(A,d,L){let q=n.get(A);d!==void 0&&De(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&St(A)}function se(A){let d=A.texture,L=n.get(A),q=n.get(d);A.addEventListener("dispose",_);let V=A.textures,ce=A.isWebGLCubeRenderTarget===!0,le=V.length>1;if(le||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=d.version,o.memory.textures++),ce){L.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(d.mipmaps&&d.mipmaps.length>0){L.__webglFramebuffer[Q]=[];for(let B=0;B<d.mipmaps.length;B++)L.__webglFramebuffer[Q][B]=i.createFramebuffer()}else L.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){L.__webglFramebuffer=[];for(let Q=0;Q<d.mipmaps.length;Q++)L.__webglFramebuffer[Q]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(le)for(let Q=0,B=V.length;Q<B;Q++){let Re=n.get(V[Q]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ue(A)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Q=0;Q<V.length;Q++){let B=V[Q];L.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[Q]);let Re=r.convert(B.format,B.colorSpace),Ie=r.convert(B.type),Le=w(B.internalFormat,Re,Ie,B.normalized,B.colorSpace,A.isXRRenderTarget===!0),He=Ee(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Le,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,L.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(L.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),pt(i.TEXTURE_CUBE_MAP,d);for(let Q=0;Q<6;Q++)if(d.mipmaps&&d.mipmaps.length>0)for(let B=0;B<d.mipmaps.length;B++)De(L.__webglFramebuffer[Q][B],A,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,B);else De(L.__webglFramebuffer[Q],A,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);f(d)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let Q=0,B=V.length;Q<B;Q++){let Re=V[Q],Ie=n.get(Re),Le=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Le=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ie.__webglTexture),pt(Le,Re),De(L.__webglFramebuffer,A,Re,i.COLOR_ATTACHMENT0+Q,Le,0),f(Re)&&y(Le)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,q.__webglTexture),pt(Q,d),d.mipmaps&&d.mipmaps.length>0)for(let B=0;B<d.mipmaps.length;B++)De(L.__webglFramebuffer[B],A,d,i.COLOR_ATTACHMENT0,Q,B);else De(L.__webglFramebuffer,A,d,i.COLOR_ATTACHMENT0,Q,0);f(d)&&y(Q),t.unbindTexture()}A.depthBuffer&&St(A)}function ie(A){let d=A.textures;for(let L=0,q=d.length;L<q;L++){let V=d[L];if(f(V)){let ce=R(A),le=n.get(V).__webglTexture;t.bindTexture(ce,le),y(ce),t.unbindTexture()}}}let we=[],re=[];function _e(A){if(A.samples>0){if(Ue(A)===!1){let d=A.textures,L=A.width,q=A.height,V=i.COLOR_BUFFER_BIT,ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(A),Q=d.length>1;if(Q)for(let Re=0;Re<d.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let B=A.texture.mipmaps;B&&B.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Re=0;Re<d.length;Re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Re]);let Ie=n.get(d[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,L,q,0,0,L,q,V,i.NEAREST),l===!0&&(we.length=0,re.length=0,we.push(i.COLOR_ATTACHMENT0+Re),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(we.push(ce),re.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Re=0;Re<d.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,le.__webglColorRenderbuffer[Re]);let Ie=n.get(d[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let d=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[d])}}}function Ee(A){return Math.min(s.maxSamples,A.samples)}function Ue(A){let d=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function D(A){let d=o.render.frame;u.get(A)!==d&&(u.set(A,d),A.update())}function st(A,d){let L=A.colorSpace,q=A.format,V=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||L!==Lr&&L!==Wi&&(Xt.getTransfer(L)===en?(q!==li||V!==$n)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",L)),d}function Ce(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.getTextureUnits=O,this.setTextureUnits=$,this.setTexture2D=xe,this.setTexture2DArray=de,this.setTexture3D=ge,this.setTextureCube=Se,this.rebindTextures=Ae,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fx(i,e){function t(n,s=Wi){let r,o=Xt.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cl)return i.BYTE;if(n===Pl)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===Dl)return i.ALPHA;if(n===Nl)return i.RGB;if(n===li)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Ha)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===us)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(o===en)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===co||n===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ja)return o===en?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===co)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ec)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pc||n===mc||n===gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pc)return o===en?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===_c||n===lo||n===yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
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

}`,ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends wi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,g=null,h=null,m=null,x=null,E=typeof XRWebGLBinding!="undefined",p=new ch,f={},y=t.getContextAttributes(),R=null,w=null,b=[],T=[],P=new At,_=null,C=null,F=new Pn;F.viewport=new rn;let X=new Pn;X.viewport=new rn;let G=[F,X],J=new Ca,O=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let ye=b[he];return ye===void 0&&(ye=new js,b[he]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(he){let ye=b[he];return ye===void 0&&(ye=new js,b[he]=ye),ye.getGripSpace()},this.getHand=function(he){let ye=b[he];return ye===void 0&&(ye=new js,b[he]=ye),ye.getHandSpace()};function Z(he){let ye=T.indexOf(he.inputSource);if(ye===-1)return;let Ye=b[ye];Ye!==void 0&&(Ye.update(he.inputSource,he.frame,c||o),Ye.dispatchEvent({type:he.type,data:he.inputSource}))}function ee(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",xe);for(let he=0;he<b.length;he++){let ye=T[he];ye!==null&&(T[he]=null,b[he].disconnect(ye))}O=null,$=null,p.reset();for(let he in f)delete f[he];if(e.setRenderTarget(R),m=null,h=null,g=null,s=null,w=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(P.width,P.height,!1),C!==null){let he=C.camera;he.fov=C.fov,he.zoom=C.zoom,he.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){r=he,n.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){a=he,n.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(he){c=he},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(he){if(s=he,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",xe),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ye=null,qe=null,De=null;y.depth&&(De=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ye=y.stencil?hs:Ei,qe=y.stencil?cr:yi);let gt={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};g=this.getBinding(),h=g.createProjectionLayer(gt),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new kn(h.textureWidth,h.textureHeight,{format:li,type:$n,depthTexture:new is(h.textureWidth,h.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Ye),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new kn(m.framebufferWidth,m.framebufferHeight,{format:li,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function xe(he){for(let ye=0;ye<he.removed.length;ye++){let Ye=he.removed[ye],qe=T.indexOf(Ye);qe>=0&&(T[qe]=null,b[qe].disconnect(Ye))}for(let ye=0;ye<he.added.length;ye++){let Ye=he.added[ye],qe=T.indexOf(Ye);if(qe===-1){for(let gt=0;gt<b.length;gt++)if(gt>=T.length){T.push(Ye),qe=gt;break}else if(T[gt]===null){T[gt]=Ye,qe=gt;break}if(qe===-1)break}let De=b[qe];De&&De.connect(Ye)}}let de=new I,ge=new I;function Se(he,ye,Ye){de.setFromMatrixPosition(ye.matrixWorld),ge.setFromMatrixPosition(Ye.matrixWorld);let qe=de.distanceTo(ge),De=ye.projectionMatrix.elements,gt=Ye.projectionMatrix.elements,Rt=De[14]/(De[10]-1),St=De[14]/(De[10]+1),Ae=(De[9]+1)/De[5],se=(De[9]-1)/De[5],ie=(De[8]-1)/De[0],we=(gt[8]+1)/gt[0],re=Rt*ie,_e=Rt*we,Ee=qe/(-ie+we),Ue=Ee*-ie;if(ye.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(Ue),he.translateZ(Ee),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),De[10]===-1)he.projectionMatrix.copy(ye.projectionMatrix),he.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{let D=Rt+Ee,st=St+Ee,Ce=re-Ue,A=_e+(qe-Ue),d=Ae*St/st*D,L=se*St/st*D;he.projectionMatrix.makePerspective(Ce,A,d,L,D,st),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function Qe(he,ye){ye===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(ye.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(s===null)return;let ye=he.near,Ye=he.far;p.texture!==null&&(p.depthNear>0&&(ye=p.depthNear),p.depthFar>0&&(Ye=p.depthFar)),J.near=X.near=F.near=ye,J.far=X.far=F.far=Ye,(O!==J.near||$!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),O=J.near,$=J.far),J.layers.mask=he.layers.mask|6,F.layers.mask=J.layers.mask&-5,X.layers.mask=J.layers.mask&-3;let qe=he.parent,De=J.cameras;Qe(J,qe);for(let gt=0;gt<De.length;gt++)Qe(De[gt],qe);De.length===2?Se(J,F,X):J.projectionMatrix.copy(F.projectionMatrix),C===null&&he.isPerspectiveCamera&&(C={camera:he,fov:he.fov,zoom:he.zoom}),Be(he,J,qe)};function Be(he,ye,Ye){Ye===null?he.matrix.copy(ye.matrixWorld):(he.matrix.copy(Ye.matrixWorld),he.matrix.invert(),he.matrix.multiply(ye.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(ye.projectionMatrix),he.projectionMatrixInverse.copy(ye.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=ys*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(he){l=he,h!==null&&(h.fixedFoveation=he),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=he)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(J)},this.getCameraTexture=function(he){return f[he]};let Lt=null;function pt(he,ye){if(u=ye.getViewerPose(c||o),x=ye,u!==null){let Ye=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let qe=!1;Ye.length!==J.cameras.length&&(J.cameras.length=0,qe=!0);for(let St=0;St<Ye.length;St++){let Ae=Ye[St],se=null;if(m!==null)se=m.getViewport(Ae);else{let we=g.getViewSubImage(h,Ae);se=we.viewport,St===0&&(e.setRenderTargetTextures(w,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(w))}let ie=G[St];ie===void 0&&(ie=new Pn,ie.layers.enable(St),ie.viewport=new rn,G[St]=ie),ie.matrix.fromArray(Ae.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Ae.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(se.x,se.y,se.width,se.height),St===0&&(J.matrix.copy(ie.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),qe===!0&&J.cameras.push(ie)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=n.getBinding();let St=g.getDepthInformation(Ye[0]);St&&St.isValid&&St.texture&&p.init(St,s.renderState)}if(De&&De.includes("camera-access")&&E){e.state.unbindTexture(),g=n.getBinding();for(let St=0;St<Ye.length;St++){let Ae=Ye[St].camera;if(Ae){let se=f[Ae];se||(se=new Gr,f[Ae]=se);let ie=g.getCameraImage(Ae);se.sourceTexture=ie}}}}for(let Ye=0;Ye<b.length;Ye++){let qe=T[Ye],De=b[Ye];qe!==null&&De!==void 0&&De.update(qe,ye,c||o)}Lt&&Lt(he,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),x=null}let Je=new hd;Je.setAnimationLoop(pt),this.setAnimationLoop=function(he){Lt=he},this.dispose=function(){}}},gx=new Et,gd=new Pt;gd.set(-1,0,0,0,1,0,0,0,1);function xx(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Hl(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,R,w){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),g(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),E(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,y,R):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Dn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Dn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y=e.get(f),R=y.envMap,w=y.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(w)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(gd),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,R){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=R*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function g(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function E(p,f){let y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _x(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let T=b.program;n.uniformBlockBinding(w,T)}function c(w,b){let T=s[w.id];T===void 0&&(p(w),T=u(w),s[w.id]=T,w.addEventListener("dispose",y));let P=b.program;n.updateUBOMapping(w,P);let _=e.render.frame;r[w.id]!==_&&(h(w),r[w.id]=_)}function u(w){let b=g();w.__bindingPointIndex=b;let T=i.createBuffer(),P=w.__size,_=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function g(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){let b=s[w.id],T=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,C=T.length;_<C;_++){let F=T[_];if(Array.isArray(F))for(let X=0,G=F.length;X<G;X++)m(F[X],_,X,P);else m(F,_,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,b,T,P){if(E(w,b,T,P)===!0){let _=w.__offset,C=w.value;if(Array.isArray(C)){let F=0;for(let X=0;X<C.length;X++){let G=C[X],J=f(G);x(G,w.__data,F),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(F+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,w.__data)}}function x(w,b,T){typeof w=="number"||typeof w=="boolean"?b[0]=w:w.isMatrix3?(b[0]=w.elements[0],b[1]=w.elements[1],b[2]=w.elements[2],b[3]=0,b[4]=w.elements[3],b[5]=w.elements[4],b[6]=w.elements[5],b[7]=0,b[8]=w.elements[6],b[9]=w.elements[7],b[10]=w.elements[8],b[11]=0):ArrayBuffer.isView(w)?b.set(new w.constructor(w.buffer,w.byteOffset,b.length)):w.toArray(b,T)}function E(w,b,T,P){let _=w.value,C=b+"_"+T;if(P[C]===void 0)return typeof _=="number"||typeof _=="boolean"?P[C]=_:ArrayBuffer.isView(_)?P[C]=_.slice():P[C]=_.clone(),!0;{let F=P[C];if(typeof _=="number"||typeof _=="boolean"){if(F!==_)return P[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(F.equals(_)===!1)return F.copy(_),!0}}return!1}function p(w){let b=w.uniforms,T=0,P=16;for(let C=0,F=b.length;C<F;C++){let X=Array.isArray(b[C])?b[C]:[b[C]];for(let G=0,J=X.length;G<J;G++){let O=X[G],$=Array.isArray(O.value)?O.value:[O.value];for(let Z=0,ee=$.length;Z<ee;Z++){let xe=$[Z],de=f(xe),ge=T%P,Se=ge%de.boundary,Qe=ge+Se;T+=Se,Qe!==0&&P-Qe<de.storage&&(T+=P-Qe),O.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=de.storage}}}let _=T%P;return _>0&&(T+=P-_),w.__size=T,w.__cache={},this}function f(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(b.boundary=16,b.storage=w.byteLength):Mt("WebGLRenderer: Unsupported uniform value type.",w),b}function y(w){let b=w.target;b.removeEventListener("dispose",y);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function R(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var yx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function vx(){return Pi===null&&(Pi=new zr(yx,16,16,us,si),Pi.name="DFG_LUT",Pi.minFilter=Un,Pi.magFilter=Un,Pi.wrapS=Si,Pi.wrapT=Si,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var Tc=class{constructor(e={}){let{canvas:t=Fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:h=!1,outputBufferType:m=$n}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let E=m,p=new Set([Va,Ga,ka]),f=new Set([$n,yi,ar,cr,Oa,za]),y=new Uint32Array(4),R=new Int32Array(4),w=new I,b=null,T=null,P=[],_=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,X=!1,G=null,J=null,O=null,$=null;this._outputColorSpace=qn;let Z=0,ee=0,xe=null,de=-1,ge=null,Se=new rn,Qe=new rn,Be=null,Lt=new lt(0),pt=0,Je=t.width,he=t.height,ye=1,Ye=null,qe=null,De=new rn(0,0,Je,he),gt=new rn(0,0,Je,he),Rt=!1,St=new tr,Ae=!1,se=!1,ie=new Et,we=new I,re=new rn,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function Ue(){return xe===null?ye:1}let D=n;function st(S,K){return t.getContext(S,K)}let Ce,A,d,L,q,V,ce,le,Q,B,Re,Ie,Le,He,$e,je,et,H,Ne,Me,ke,Ve,be;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ia}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",tt,!1),D===null){let K="webgl2";if(D=st(K,S),D===null)throw st(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}N()}catch(S){throw t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),bt("WebGLRenderer: "+S.message),S}function N(){Ce=new Am(D),Ce.init(),ke=new fx(D,Ce),A=new xm(D,Ce,e,ke),d=new ux(D,Ce),A.reversedDepthBuffer&&h&&d.buffers.depth.setReversed(!0),J=D.createFramebuffer(),O=D.createFramebuffer(),$=D.createFramebuffer(),L=new Pm(D),q=new Kg,V=new dx(D,Ce,d,q,A,ke,L),ce=new Tm(F),le=new Lf(D),Ve=new mm(D,le),Q=new Rm(D,le,L,Ve),B=new Lm(D,Q,le,Ve,L),H=new Im(D,A,V),$e=new _m(q),Re=new $g(F,ce,Ce,A,Ve,$e),Ie=new xx(F,q),Le=new jg,He=new rx(Ce),et=new pm(F,ce,d,B,x,l),je=new hx(F,B,A),be=new _x(D,L,A,d),Ne=new gm(D,Ce,L),Me=new Cm(D,Ce,L),L.programs=Re.programs,F.capabilities=A,F.extensions=Ce,F.properties=q,F.renderLists=Le,F.shadowMap=je,F.state=d,F.info=L}E!==$n&&(C=new Nm(E,t.width,t.height,a,s,r));let W=new lh(F,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=Ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(S){S!==void 0&&(ye=S,this.setSize(Je,he,!1))},this.getSize=function(S){return S.set(Je,he)},this.setSize=function(S,K,me=!0){if(W.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=S,he=K,t.width=Math.floor(S*ye),t.height=Math.floor(K*ye),me===!0&&(t.style.width=S+"px",t.style.height=K+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,S,K)},this.getDrawingBufferSize=function(S){return S.set(Je*ye,he*ye).floor()},this.setDrawingBufferSize=function(S,K,me){Je=S,he=K,ye=me,t.width=Math.floor(S*me),t.height=Math.floor(K*me),this.setViewport(0,0,S,K)},this.setEffects=function(S){if(E===$n){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let K=0;K<S.length;K++)if(S[K].isOutputPass===!0){Mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Se)},this.getViewport=function(S){return S.copy(De)},this.setViewport=function(S,K,me,oe){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,K,me,oe),d.viewport(Se.copy(De).multiplyScalar(ye).round())},this.getScissor=function(S){return S.copy(gt)},this.setScissor=function(S,K,me,oe){S.isVector4?gt.set(S.x,S.y,S.z,S.w):gt.set(S,K,me,oe),d.scissor(Qe.copy(gt).multiplyScalar(ye).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(S){d.setScissorTest(Rt=S)},this.setOpaqueSort=function(S){Ye=S},this.setTransparentSort=function(S){qe=S},this.getClearColor=function(S){return S.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(S=!0,K=!0,me=!0){let oe=0;if(S){let ae=!1;if(xe!==null){let it=xe.texture.format;ae=p.has(it)}if(ae){let it=xe.texture.type,ht=f.has(it),We=et.getClearColor(),ut=et.getClearAlpha(),rt=We.r,Ct=We.g,It=We.b;ht?(y[0]=rt,y[1]=Ct,y[2]=It,y[3]=ut,D.clearBufferuiv(D.COLOR,0,y)):(R[0]=rt,R[1]=Ct,R[2]=It,R[3]=ut,D.clearBufferiv(D.COLOR,0,R))}else oe|=D.COLOR_BUFFER_BIT}K&&(oe|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(oe|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&D.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),G=S},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),et.dispose(),Le.dispose(),He.dispose(),q.dispose(),ce.dispose(),B.dispose(),Ve.dispose(),be.dispose(),Re.dispose(),W.dispose(),W.removeEventListener("sessionstart",Pe),W.removeEventListener("sessionend",Te),fe.stop()};function j(S){S.preventDefault(),Bl("WebGLRenderer: Context Lost."),X=!0}function pe(){Bl("WebGLRenderer: Context Restored."),X=!1;let S=L.autoReset,K=je.enabled,me=je.autoUpdate,oe=je.needsUpdate,ae=je.type;N(),L.autoReset=S,je.enabled=K,je.autoUpdate=me,je.needsUpdate=oe,je.type=ae}function tt(S){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function U(S){let K=S.target;K.removeEventListener("dispose",U),ze(K)}function ze(S){M(S),q.remove(S)}function M(S){let K=q.get(S).programs;K!==void 0&&(K.forEach(function(me){Re.releaseProgram(me)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,K,me,oe,ae,it){K===null&&(K=_e);let ht=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,We=Zn(S,K,me,oe,ae);d.setMaterial(oe,ht);let ut=me.index,rt=1;if(oe.wireframe===!0){if(ut=Q.getWireframeAttribute(me),ut===void 0)return;rt=2}let Ct=me.drawRange,It=me.attributes.position,dt=Ct.start*rt,Vt=(Ct.start+Ct.count)*rt;it!==null&&(dt=Math.max(dt,it.start*rt),Vt=Math.min(Vt,(it.start+it.count)*rt)),ut!==null?(dt=Math.max(dt,0),Vt=Math.min(Vt,ut.count)):It!=null&&(dt=Math.max(dt,0),Vt=Math.min(Vt,It.count));let $t=Vt-dt;if($t<0||$t===1/0)return;Ve.setup(ae,oe,We,me,ut);let Jt,Nt=Ne;if(ut!==null&&(Jt=le.get(ut),Nt=Me,Nt.setIndex(Jt)),ae.isMesh)oe.wireframe===!0?(d.setLineWidth(oe.wireframeLinewidth*Ue()),Nt.setMode(D.LINES)):Nt.setMode(D.TRIANGLES);else if(ae.isLine){let mn=oe.linewidth;mn===void 0&&(mn=1),d.setLineWidth(mn*Ue()),ae.isLineSegments?Nt.setMode(D.LINES):ae.isLineLoop?Nt.setMode(D.LINE_LOOP):Nt.setMode(D.LINE_STRIP)}else ae.isPoints?Nt.setMode(D.POINTS):ae.isSprite&&Nt.setMode(D.TRIANGLES);if(ae.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))Nt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let mn=ae._multiDrawStarts,ot=ae._multiDrawCounts,En=ae._multiDrawCount,Wt=ut?le.get(ut).bytesPerElement:1,Wn=q.get(oe).currentProgram.getUniforms();for(let Jn=0;Jn<En;Jn++)Wn.setValue(D,"_gl_DrawID",Jn),Nt.render(mn[Jn]/Wt,ot[Jn])}else if(ae.isInstancedMesh)Nt.renderInstances(dt,$t,ae.count);else if(me.isInstancedBufferGeometry){let mn=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,ot=Math.min(me.instanceCount,mn);Nt.renderInstances(dt,$t,ot)}else Nt.render(dt,$t)};function k(S,K,me,oe){G!==null&&S.isNodeMaterial&&G.setObject(oe,S),Ae===!0&&$e.setState(S,me,!1),S.transparent===!0&&S.side===Nn&&S.forceSinglePass===!1?(S.side=Dn,S.needsUpdate=!0,Tt(S,K,oe),S.side=Ri,S.needsUpdate=!0,Tt(S,K,oe),S.side=Nn):Tt(S,K,oe)}this.compile=function(S,K,me=null){me===null&&(me=S),G!==null&&G.renderStart(S,K,me),T=He.get(me),T.init(K),_.push(T),me.traverseVisible(function(ae){ae.isLight&&ae.layers.test(K.layers)&&(T.pushLight(ae),ae.castShadow&&T.pushShadow(ae))}),S!==me&&S.traverseVisible(function(ae){ae.isLight&&ae.layers.test(K.layers)&&(T.pushLight(ae),ae.castShadow&&T.pushShadow(ae))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),se=this.localClippingEnabled,Ae=$e.init(this.clippingPlanes,se),Ae===!0&&$e.setGlobalState(this.clippingPlanes,K),G!==null&&je.render(T.state.shadowsArray,me,K);let oe=new Set;return S.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let it=ae.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){let We=it[ht];k(We,me,K,ae),oe.add(We)}else k(it,me,K,ae),oe.add(it)}),T=_.pop(),G!==null&&G.renderEnd(),oe},this.compileAsync=function(S,K,me=null){let oe=this.compile(S,K,me);return new Promise(ae=>{function it(){if(oe.forEach(function(ht){let ut=q.get(ht).currentProgram;(ut===void 0||ut.isReady())&&oe.delete(ht)}),oe.size===0){ae(S);return}setTimeout(it,10)}Ce.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let te=null;function ve(S){te&&te(S)}function Pe(){fe.stop()}function Te(){fe.start()}let fe=new hd;fe.setAnimationLoop(ve),typeof self!="undefined"&&fe.setContext(self),this.setAnimationLoop=function(S){te=S,W.setAnimationLoop(S),S===null?fe.stop():fe.start()},W.addEventListener("sessionstart",Pe),W.addEventListener("sessionend",Te),this.render=function(S,K){if(K!==void 0&&K.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;G!==null&&G.renderStart(S,K);let me=W.enabled===!0&&W.isPresenting===!0,oe=C!==null&&(xe===null||me)&&C.begin(F,xe);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(K),K=W.getCamera()),S.isScene===!0&&S.onBeforeRender(F,S,K,xe),T=He.get(S,_.length),T.init(K),T.state.textureUnits=V.getTextureUnits(),_.push(T),ie.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),St.setFromProjectionMatrix(ie,gi,K.reversedDepth),se=this.localClippingEnabled,Ae=$e.init(this.clippingPlanes,se),b=Le.get(S,P.length),b.init(),P.push(b),W.enabled===!0&&W.isPresenting===!0){let ht=F.xr.getDepthSensingMesh();ht!==null&&ct(ht,K,-1/0,F.sortObjects)}ct(S,K,0,F.sortObjects),b.finish(),G!==null&&G.updateLights(T.state.lightsArray),F.sortObjects===!0&&b.sort(Ye,qe),Ee=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ee&&et.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&$e.beginShadows();let ae=T.state.shadowsArray;if(je.render(ae,S,K),Ae===!0&&$e.endShadows(),(oe&&C.hasRenderPass())===!1){let ht=b.opaque,We=b.transmissive;if(T.setupLights(),K.isArrayCamera){let ut=K.cameras;if(We.length>0)for(let rt=0,Ct=ut.length;rt<Ct;rt++){let It=ut[rt];cn(ht,We,S,It)}Ee&&et.render(S);for(let rt=0,Ct=ut.length;rt<Ct;rt++){let It=ut[rt];Dt(b,S,It,It.viewport)}}else We.length>0&&cn(ht,We,S,K),Ee&&et.render(S),Dt(b,S,K)}xe!==null&&ee===0&&(V.updateMultisampleRenderTarget(xe),V.updateRenderTargetMipmap(xe)),oe&&C.end(F),S.isScene===!0&&S.onAfterRender(F,S,K),Ve.resetDefaultState(),de=-1,ge=null,_.pop(),_.length>0?(T=_[_.length-1],V.setTextureUnits(T.state.textureUnits),Ae===!0&&$e.setGlobalState(F.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,G!==null&&G.renderEnd()};function ct(S,K,me,oe){if(S.visible===!1)return;if(S.layers.test(K.layers)){if(S.isGroup)me=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(K);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(St)){oe&&re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ie);let ht=B.update(S),We=S.material;We.visible&&b.push(S,ht,We,me,re.z,null,K)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(St))){let ht=B.update(S),We=S.material;if(oe&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),re.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),re.copy(ht.boundingSphere.center)),re.applyMatrix4(S.matrixWorld).applyMatrix4(ie)),Array.isArray(We)){let ut=ht.groups;for(let rt=0,Ct=ut.length;rt<Ct;rt++){let It=ut[rt],dt=We[It.materialIndex];dt&&dt.visible&&b.push(S,ht,dt,me,re.z,It,K)}}else We.visible&&b.push(S,ht,We,me,re.z,null,K)}}let it=S.children;for(let ht=0,We=it.length;ht<We;ht++)ct(it[ht],K,me,oe)}function Dt(S,K,me,oe){let{opaque:ae,transmissive:it,transparent:ht}=S;T.setupLightsView(me),Ae===!0&&$e.setGlobalState(F.clippingPlanes,me),oe&&d.viewport(Se.copy(oe)),ae.length>0&&Ot(ae,K,me),it.length>0&&Ot(it,K,me),ht.length>0&&Ot(ht,K,me),d.buffers.depth.setTest(!0),d.buffers.depth.setMask(!0),d.buffers.color.setMask(!0),d.setPolygonOffset(!1)}function cn(S,K,me,oe){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[oe.id]===void 0){let dt=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[oe.id]=new kn(1,1,{generateMipmaps:!0,type:dt?si:$n,minFilter:ls,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let it=T.state.transmissionRenderTarget[oe.id],ht=oe.viewport||Se;it.setSize(ht.z*F.transmissionResolutionScale,ht.w*F.transmissionResolutionScale);let We=F.getRenderTarget(),ut=F.getActiveCubeFace(),rt=F.getActiveMipmapLevel();F.setRenderTarget(it),F.getClearColor(Lt),pt=F.getClearAlpha(),pt<1&&F.setClearColor(16777215,.5),F.clear(),Ee&&et.render(me);let Ct=F.toneMapping;F.toneMapping=_i;let It=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),T.setupLightsView(oe),Ae===!0&&$e.setGlobalState(F.clippingPlanes,oe),Ot(S,me,oe),V.updateMultisampleRenderTarget(it),V.updateRenderTargetMipmap(it),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Vt=0,$t=K.length;Vt<$t;Vt++){let Jt=K[Vt],{object:Nt,geometry:mn,material:ot,group:En}=Jt;if(ot.side===Nn&&Nt.layers.test(oe.layers)){let Wt=ot.side;ot.side=Dn,ot.needsUpdate=!0,kt(Nt,me,oe,mn,ot,En),ot.side=Wt,ot.needsUpdate=!0,dt=!0}}dt===!0&&(V.updateMultisampleRenderTarget(it),V.updateRenderTargetMipmap(it))}F.setRenderTarget(We,ut,rt),F.setClearColor(Lt,pt),It!==void 0&&(oe.viewport=It),F.toneMapping=Ct}function Ot(S,K,me){let oe=K.isScene===!0?K.overrideMaterial:null;for(let ae=0,it=S.length;ae<it;ae++){let ht=S[ae],{object:We,geometry:ut,group:rt}=ht,Ct=ht.material;Ct.allowOverride===!0&&oe!==null&&(Ct=oe),We.layers.test(me.layers)&&kt(We,K,me,ut,Ct,rt)}}function kt(S,K,me,oe,ae,it){G!==null&&ae.isNodeMaterial&&G.setObject(S,ae),S.onBeforeRender(F,K,me,oe,ae,it),S.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ae.onBeforeRender(F,K,me,oe,S,it),ae.transparent===!0&&ae.side===Nn&&ae.forceSinglePass===!1?(ae.side=Dn,ae.needsUpdate=!0,F.renderBufferDirect(me,K,oe,ae,S,it),ae.side=Ri,ae.needsUpdate=!0,F.renderBufferDirect(me,K,oe,ae,S,it),ae.side=Nn):F.renderBufferDirect(me,K,oe,ae,S,it),S.onAfterRender(F,K,me,oe,ae,it)}function Tt(S,K,me){K.isScene!==!0&&(K=_e);let oe=q.get(S),ae=T.state.lights,it=T.state.shadowsArray,ht=ae.state.version,We=Re.getParameters(S,ae.state,it,K,me,T.state.lightProbeGridArray),ut=Re.getProgramCacheKey(We),rt=oe.programs;oe.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?K.environment:null,oe.fog=K.fog;let Ct=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;oe.envMap=ce.get(S.envMap||oe.environment,Ct),oe.envMapRotation=oe.environment!==null&&S.envMap===null?K.environmentRotation:S.envMapRotation,rt===void 0&&(S.addEventListener("dispose",U),rt=new Map,oe.programs=rt);let It=rt.get(ut);if(It!==void 0){if(oe.currentProgram===It&&oe.lightsStateVersion===ht)return Vn(S,We),It}else We.uniforms=Re.getUniforms(S),G!==null&&S.isNodeMaterial&&G.build(S,me,We),S.onBeforeCompile(We,F),It=Re.acquireProgram(We,ut),rt.set(ut,It),oe.uniforms=We.uniforms;let dt=oe.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(dt.clippingPlanes=$e.uniform),Vn(S,We),oe.needsLights=Zi(S),oe.lightsStateVersion=ht,oe.needsLights&&(dt.ambientLightColor.value=ae.state.ambient,dt.lightProbe.value=ae.state.probe,dt.sunLights.value=ae.state.sun,dt.sunLightShadows.value=ae.state.sunShadow,dt.directionalLights.value=ae.state.directional,dt.directionalLightShadows.value=ae.state.directionalShadow,dt.spotLights.value=ae.state.spot,dt.spotLightShadows.value=ae.state.spotShadow,dt.rectAreaLights.value=ae.state.rectArea,dt.ltc_1.value=ae.state.rectAreaLTC1,dt.ltc_2.value=ae.state.rectAreaLTC2,dt.pointLights.value=ae.state.point,dt.pointLightShadows.value=ae.state.pointShadow,dt.hemisphereLights.value=ae.state.hemi,dt.sunShadowMatrix.value=ae.state.sunShadowMatrix,dt.sunShadowCascade.value=ae.state.sunShadowCascade,dt.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,dt.spotLightMatrix.value=ae.state.spotLightMatrix,dt.spotLightMap.value=ae.state.spotLightMap,dt.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.lightProbeGrid=T.state.lightProbeGridArray.length>0,oe.currentProgram=It,oe.uniformsList=null,It}function xn(S){if(S.uniformsList===null){let K=S.currentProgram.getUniforms();S.uniformsList=dr.seqWithValue(K.seq,S.uniforms)}return S.uniformsList}function Vn(S,K){let me=q.get(S);me.outputColorSpace=K.outputColorSpace,me.batching=K.batching,me.batchingColor=K.batchingColor,me.instancing=K.instancing,me.instancingColor=K.instancingColor,me.instancingMorph=K.instancingMorph,me.skinning=K.skinning,me.morphTargets=K.morphTargets,me.morphNormals=K.morphNormals,me.morphColors=K.morphColors,me.morphTargetsCount=K.morphTargetsCount,me.numClippingPlanes=K.numClippingPlanes,me.numIntersection=K.numClipIntersection,me.vertexAlphas=K.vertexAlphas,me.vertexTangents=K.vertexTangents,me.toneMapping=K.toneMapping}function qi(S,K){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;w.setFromMatrixPosition(K.matrixWorld);for(let me=0,oe=S.length;me<oe;me++){let ae=S[me];if(ae.texture!==null&&ae.boundingBox.containsPoint(w))return ae}return null}function Zn(S,K,me,oe,ae){K.isScene!==!0&&(K=_e),V.resetTextureUnits();let it=K.fog,ht=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?K.environment:null,We=xe===null?F.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Xt.workingColorSpace,ut=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,rt=ce.get(oe.envMap||ht,ut),Ct=oe.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,It=!!me.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),dt=!!me.morphAttributes.position,Vt=!!me.morphAttributes.normal,$t=!!me.morphAttributes.color,Jt=_i;oe.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Jt=F.toneMapping);let Nt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,mn=Nt!==void 0?Nt.length:0,ot=q.get(oe),En=T.state.lights;if(Ae===!0&&(se===!0||S!==ge)){let tn=S===ge&&oe.id===de;$e.setState(oe,S,tn)}let Wt=!1;oe.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==En.state.version||ot.outputColorSpace!==We||ae.isBatchedMesh&&ot.batching===!1||!ae.isBatchedMesh&&ot.batching===!0||ae.isBatchedMesh&&ot.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&ot.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&ot.instancing===!1||!ae.isInstancedMesh&&ot.instancing===!0||ae.isSkinnedMesh&&ot.skinning===!1||!ae.isSkinnedMesh&&ot.skinning===!0||ae.isInstancedMesh&&ot.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&ot.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&ot.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&ot.instancingMorph===!1&&ae.morphTexture!==null||ot.envMap!==rt||oe.fog===!0&&ot.fog!==it||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==$e.numPlanes||ot.numIntersection!==$e.numIntersection)||ot.vertexAlphas!==Ct||ot.vertexTangents!==It||ot.morphTargets!==dt||ot.morphNormals!==Vt||ot.morphColors!==$t||ot.toneMapping!==Jt||ot.morphTargetsCount!==mn||!!ot.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Wt=!0):(Wt=!0,ot.__version=oe.version);let Wn=ot.currentProgram;Wt===!0&&(Wn=Tt(oe,K,ae),G&&oe.isNodeMaterial&&G.onUpdateProgram(oe,Wn,ot));let Jn=!1,hi=!1,ri=!1,Zt=Wn.getUniforms(),pn=ot.uniforms;if(d.useProgram(Wn.program)&&(Jn=!0,hi=!0,ri=!0),oe.id!==de&&(de=oe.id,hi=!0),ot.needsLights){let tn=qi(T.state.lightProbeGridArray,ae);ot.lightProbeGrid!==tn&&(ot.lightProbeGrid=tn,hi=!0)}if(Jn||ge!==S){d.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Zt.setValue(D,"projectionMatrix",S.projectionMatrix),Zt.setValue(D,"viewMatrix",S.matrixWorldInverse);let di=Zt.map.cameraPosition;di!==void 0&&di.setValue(D,we.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&Zt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Zt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),ge!==S&&(ge=S,hi=!0,ri=!0)}if(ot.needsLights&&(En.state.sunShadowMap.length>0&&Zt.setValue(D,"sunShadowMap",En.state.sunShadowMap,V),En.state.directionalShadowMap.length>0&&Zt.setValue(D,"directionalShadowMap",En.state.directionalShadowMap,V),En.state.spotShadowMap.length>0&&Zt.setValue(D,"spotShadowMap",En.state.spotShadowMap,V),En.state.pointShadowMap.length>0&&Zt.setValue(D,"pointShadowMap",En.state.pointShadowMap,V)),ae.isSkinnedMesh){Zt.setOptional(D,ae,"bindMatrix"),Zt.setOptional(D,ae,"bindMatrixInverse");let tn=ae.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Zt.setValue(D,"boneTexture",tn.boneTexture,V))}ae.isBatchedMesh&&(Zt.setOptional(D,ae,"batchingTexture"),Zt.setValue(D,"batchingTexture",ae._matricesTexture,V),Zt.setOptional(D,ae,"batchingIdTexture"),Zt.setValue(D,"batchingIdTexture",ae._indirectTexture,V),Zt.setOptional(D,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Zt.setValue(D,"batchingColorTexture",ae._colorsTexture,V));let ui=me.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&H.update(ae,me,Wn),(hi||ot.receiveShadow!==ae.receiveShadow)&&(ot.receiveShadow=ae.receiveShadow,Zt.setValue(D,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&K.environment!==null&&(pn.envMapIntensity.value=K.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=vx()),hi){if(Zt.setValue(D,"toneMappingExposure",F.toneMappingExposure),ot.needsLights&&Yi(pn,ri),it&&oe.fog===!0&&Ie.refreshFogUniforms(pn,it),Ie.refreshMaterialUniforms(pn,oe,ye,he,T.state.transmissionRenderTarget[S.id]),ot.needsLights&&ot.lightProbeGrid){let tn=ot.lightProbeGrid;pn.probesSH.value=tn.texture,pn.probesMin.value.copy(tn.boundingBox.min),pn.probesMax.value.copy(tn.boundingBox.max),pn.probesResolution.value.copy(tn.resolution)}dr.upload(D,xn(ot),pn,V)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(dr.upload(D,xn(ot),pn,V),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Zt.setValue(D,"center",ae.center),Zt.setValue(D,"modelViewMatrix",ae.modelViewMatrix),Zt.setValue(D,"normalMatrix",ae.normalMatrix),Zt.setValue(D,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){let tn=oe.uniformsGroups;for(let di=0,Di=tn.length;di<Di;di++){let xr=tn[di];be.update(xr,Wn),be.bind(xr,Wn)}}return Wn}function Yi(S,K){S.ambientLightColor.needsUpdate=K,S.lightProbe.needsUpdate=K,S.sunLights.needsUpdate=K,S.sunLightShadows.needsUpdate=K,S.directionalLights.needsUpdate=K,S.directionalLightShadows.needsUpdate=K,S.pointLights.needsUpdate=K,S.pointLightShadows.needsUpdate=K,S.spotLights.needsUpdate=K,S.spotLightShadows.needsUpdate=K,S.rectAreaLights.needsUpdate=K,S.hemisphereLights.needsUpdate=K}function Zi(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return xe},this.setRenderTargetTextures=function(S,K,me){let oe=q.get(S);oe.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),q.get(S.texture).__webglTexture=K,q.get(S.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:me,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,K){let me=q.get(S);me.__webglFramebuffer=K,me.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(S,K=0,me=0){xe=S,Z=K,ee=me;let oe=null,ae=!1,it=!1;if(S){let We=q.get(S);if(We.__useDefaultFramebuffer!==void 0){d.bindFramebuffer(D.FRAMEBUFFER,We.__webglFramebuffer),Se.copy(S.viewport),Qe.copy(S.scissor),Be=S.scissorTest,d.viewport(Se),d.scissor(Qe),d.setScissorTest(Be),de=-1;return}else if(We.__webglFramebuffer===void 0)V.setupRenderTarget(S);else if(We.__hasExternalTextures)V.rebindTextures(S,q.get(S.texture).__webglTexture,q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ct=S.depthTexture;if(We.__boundDepthTexture!==Ct){if(Ct!==null&&q.has(Ct)&&(S.width!==Ct.image.width||S.height!==Ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(S)}}let ut=S.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(it=!0);let rt=q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(rt[K])?oe=rt[K][me]:oe=rt[K],ae=!0):S.samples>0&&V.useMultisampledRTT(S)===!1?oe=q.get(S).__webglMultisampledFramebuffer:Array.isArray(rt)?oe=rt[me]:oe=rt,Se.copy(S.viewport),Qe.copy(S.scissor),Be=S.scissorTest}else Se.copy(De).multiplyScalar(ye).floor(),Qe.copy(gt).multiplyScalar(ye).floor(),Be=Rt;if(me!==0&&(oe=J),d.bindFramebuffer(D.FRAMEBUFFER,oe)&&d.drawBuffers(S,oe),d.viewport(Se),d.scissor(Qe),d.setScissorTest(Be),ae){let We=q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+K,We.__webglTexture,me)}else if(it){let We=K;for(let ut=0;ut<S.textures.length;ut++){let rt=q.get(S.textures[ut]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ut,rt.__webglTexture,me,We)}}else if(S!==null&&me!==0){let We=q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,We.__webglTexture,me)}de=-1};function Li(S){let K=q.get(S);return(K.__readFormat!==S.format||K.__readType!==S.type)&&(K.__readFormat=S.format,K.__readType=S.type,K.__formatReadable=A.textureFormatReadable(S.format),K.__typeReadable=A.textureTypeReadable(S.type)),K}this.readRenderTargetPixels=function(S,K,me,oe,ae,it,ht,We=0){if(!(S&&S.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(ut=ut[ht]),ut){d.bindFramebuffer(D.FRAMEBUFFER,ut);try{let rt=S.textures[We],Ct=rt.format,It=rt.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+We);let dt=Li(rt);if(dt.__formatReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(dt.__typeReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=S.width-oe&&me>=0&&me<=S.height-ae&&D.readPixels(K,me,oe,ae,ke.convert(Ct),ke.convert(It),it)}finally{let rt=xe!==null?q.get(xe).__webglFramebuffer:null;d.bindFramebuffer(D.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(S,K,me,oe,ae,it,ht,We=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(ut=ut[ht]),ut)if(K>=0&&K<=S.width-oe&&me>=0&&me<=S.height-ae){d.bindFramebuffer(D.FRAMEBUFFER,ut);let rt=S.textures[We],Ct=rt.format,It=rt.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+We);let dt=Li(rt);if(dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),D.readPixels(K,me,oe,ae,ke.convert(Ct),ke.convert(It),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let $t=xe!==null?q.get(xe).__webglFramebuffer:null;d.bindFramebuffer(D.FRAMEBUFFER,$t);let Jt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ou(D,Jt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Vt),D.deleteSync(Jt),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,K=null,me=0){let oe=Math.pow(2,-me),ae=Math.floor(S.image.width*oe),it=Math.floor(S.image.height*oe),ht=K!==null?K.x:0,We=K!==null?K.y:0;V.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,me,0,0,ht,We,ae,it),d.unbindTexture()},this.copyTextureToTexture=function(S,K,me=null,oe=null,ae=0,it=0){let ht,We,ut,rt,Ct,It,dt,Vt,$t,Jt=S.isCompressedTexture?S.mipmaps[it]:S.image;if(me!==null)ht=me.max.x-me.min.x,We=me.max.y-me.min.y,ut=me.isBox3?me.max.z-me.min.z:1,rt=me.min.x,Ct=me.min.y,It=me.isBox3?me.min.z:0;else{let pn=Math.pow(2,-ae);ht=Math.floor(Jt.width*pn),We=Math.floor(Jt.height*pn),S.isDataArrayTexture?ut=Jt.depth:S.isData3DTexture?ut=Math.floor(Jt.depth*pn):ut=1,rt=0,Ct=0,It=0}oe!==null?(dt=oe.x,Vt=oe.y,$t=oe.z):(dt=0,Vt=0,$t=0);let Nt=ke.convert(K.format),mn=ke.convert(K.type),ot;K.isData3DTexture?(V.setTexture3D(K,0),ot=D.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(V.setTexture2DArray(K,0),ot=D.TEXTURE_2D_ARRAY):(V.setTexture2D(K,0),ot=D.TEXTURE_2D),d.activeTexture(D.TEXTURE0),d.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,K.flipY),d.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),d.pixelStorei(D.UNPACK_ALIGNMENT,K.unpackAlignment);let En=d.getParameter(D.UNPACK_ROW_LENGTH),Wt=d.getParameter(D.UNPACK_IMAGE_HEIGHT),Wn=d.getParameter(D.UNPACK_SKIP_PIXELS),Jn=d.getParameter(D.UNPACK_SKIP_ROWS),hi=d.getParameter(D.UNPACK_SKIP_IMAGES);d.pixelStorei(D.UNPACK_ROW_LENGTH,Jt.width),d.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt.height),d.pixelStorei(D.UNPACK_SKIP_PIXELS,rt),d.pixelStorei(D.UNPACK_SKIP_ROWS,Ct),d.pixelStorei(D.UNPACK_SKIP_IMAGES,It);let ri=S.isDataArrayTexture||S.isData3DTexture,Zt=K.isDataArrayTexture||K.isData3DTexture;if(S.isDepthTexture){let pn=q.get(S),ui=q.get(K),tn=q.get(pn.__renderTarget),di=q.get(ui.__renderTarget);d.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),d.bindFramebuffer(D.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let Di=0;Di<ut;Di++)ri&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(S).__webglTexture,ae,It+Di),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(K).__webglTexture,it,$t+Di)),D.blitFramebuffer(rt,Ct,ht,We,dt,Vt,ht,We,D.DEPTH_BUFFER_BIT,D.NEAREST);d.bindFramebuffer(D.READ_FRAMEBUFFER,null),d.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(ae!==0||S.isRenderTargetTexture||q.has(S)){let pn=q.get(S),ui=q.get(K);d.bindFramebuffer(D.READ_FRAMEBUFFER,O),d.bindFramebuffer(D.DRAW_FRAMEBUFFER,$);for(let tn=0;tn<ut;tn++)ri?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pn.__webglTexture,ae,It+tn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pn.__webglTexture,ae),Zt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ui.__webglTexture,it,$t+tn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ui.__webglTexture,it),ae!==0?D.blitFramebuffer(rt,Ct,ht,We,dt,Vt,ht,We,D.COLOR_BUFFER_BIT,D.NEAREST):Zt?D.copyTexSubImage3D(ot,it,dt,Vt,$t+tn,rt,Ct,ht,We):D.copyTexSubImage2D(ot,it,dt,Vt,rt,Ct,ht,We);d.bindFramebuffer(D.READ_FRAMEBUFFER,null),d.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Zt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(ot,it,dt,Vt,$t,ht,We,ut,Nt,mn,Jt.data):K.isCompressedArrayTexture?D.compressedTexSubImage3D(ot,it,dt,Vt,$t,ht,We,ut,Nt,Jt.data):D.texSubImage3D(ot,it,dt,Vt,$t,ht,We,ut,Nt,mn,Jt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,it,dt,Vt,ht,We,Nt,mn,Jt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,it,dt,Vt,Jt.width,Jt.height,Nt,Jt.data):D.texSubImage2D(D.TEXTURE_2D,it,dt,Vt,ht,We,Nt,mn,Jt);d.pixelStorei(D.UNPACK_ROW_LENGTH,En),d.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt),d.pixelStorei(D.UNPACK_SKIP_PIXELS,Wn),d.pixelStorei(D.UNPACK_SKIP_ROWS,Jn),d.pixelStorei(D.UNPACK_SKIP_IMAGES,hi),it===0&&K.generateMipmaps&&D.generateMipmap(ot),d.unbindTexture()},this.initRenderTarget=function(S){q.get(S).__webglFramebuffer===void 0&&V.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?V.setTextureCube(S,0):S.isData3DTexture?V.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?V.setTexture2DArray(S,0):V.setTexture2D(S,0),d.unbindTexture()},this.resetState=function(){Z=0,ee=0,xe=null,d.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xt._getUnpackColorSpace()}};var xd=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},Xi=(i,e,t)=>{let n=Math.sin(i*127.1+e*269.5+t*311.7)*43758.5453;return n-Math.floor(n)},an=(i,e,t)=>{let n=Math.floor(i),s=Math.floor(e),r=Math.floor(t),o=i-n,a=e-s,l=t-r,c=o*o*(3-2*o),u=a*a*(3-2*a),g=l*l*(3-2*l),h=(m,x,E)=>m+(x-m)*E;return h(h(h(Xi(n,s,r),Xi(n+1,s,r),c),h(Xi(n,s+1,r),Xi(n+1,s+1,r),c),u),h(h(Xi(n,s,r+1),Xi(n+1,s,r+1),c),h(Xi(n,s+1,r+1),Xi(n+1,s+1,r+1),c),u),g)},mr={plain:0,woodX:1,woodZ:2,woodY:3,stone:4,plaster:5,fabric:6,metal:7,leather:8,logX:9,logZ:10,paper:11,shingle:12},gn=(i,e)=>(e.kind=i,e),jt=class{constructor(){this.p=[],this.n=[],this.c=[],this.t=[],this.k=[]}clear(){this.p.length=this.n.length=this.c.length=this.t.length=this.k.length=0}add(e,{m:t=null,color:n=()=>[1,1,1],tip:s=()=>0,flat:r=!1,normal:o=null,flip:a=!1,mat:l=null}={}){var E;let c=e.index?e.toNonIndexed():e.clone();if(t&&c.applyMatrix4(t),(r||!c.attributes.normal)&&c.computeVertexNormals(),a){for(let f of["position","normal","uv"]){let y=c.attributes[f];if(!y)continue;let R=y.array,w=y.itemSize;for(let b=0;b<y.count;b+=3)for(let T=0;T<w;T++){let P=R[(b+1)*w+T];R[(b+1)*w+T]=R[(b+2)*w+T],R[(b+2)*w+T]=P}}let p=c.attributes.normal.array;for(let f=0;f<p.length;f++)p[f]=-p[f]}let u=c.attributes.position,g=c.attributes.normal,h=l;if(h===null){let p=n.kind||"plain";if(p==="wood"||p==="log"){c.computeBoundingBox();let f=new I;c.boundingBox.getSize(f);let y=f.x>=f.y&&f.x>=f.z?"X":f.z>=f.y?"Z":"Y";h=p==="log"?y==="Z"?mr.logZ:mr.logX:mr["wood"+y]}else h=(E=mr[p])!=null?E:0}let m=new I,x=new I;for(let p=0;p<u.count;p++){m.fromBufferAttribute(u,p),x.fromBufferAttribute(g,p),o&&o(m,x,p);let f=n(m,x,p);this.p.push(m.x,m.y,m.z),this.n.push(x.x,x.y,x.z),this.c.push(f[0],f[1],f[2]),this.t.push(s(m,x)),this.k.push(h)}return this}tris(e,t,n=()=>0,s=null){var r;for(let o=0;o<e.length;o+=3){let a=new I(...e[o]),l=new I(...e[o+1]),c=new I(...e[o+2]),u=s?s.clone():new I().subVectors(c,l).cross(new I().subVectors(a,l)).normalize(),g=(r=mr[t.kind])!=null?r:t.kind==="wood"?mr.woodY:0;[a,l,c].forEach(h=>{let m=t(h);this.p.push(h.x,h.y,h.z),this.n.push(u.x,u.y,u.z),this.c.push(m[0],m[1],m[2]),this.t.push(n(h)),this.k.push(g)})}return this}geometry(){let e=new Kt;return e.setAttribute("position",new Ft(this.p,3)),e.setAttribute("normal",new Ft(this.n,3)),e.setAttribute("color",new Ft(this.c,3)),e.setAttribute("aTip",new Ft(this.t,1)),e.setAttribute("aMat",new Ft(this.k,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}},z=(i=0,e=0,t=0,n=0,s=0,r=0,o=1,a=o,l=o)=>new Et().compose(new I(i,e,t),new Gt().setFromEuler(new bn(n,s,r,"YXZ")),new I(o,a,l)),Bn=(i,e,{sway:t=0,side:n=Ri,color:s=16777215,snowBias:r=0,sink:o=0,softBack:a=!1,crisp:l=!1,snowMask:c=!1,grain:u=0,rich:g=!1,indoor:h=!1,tree:m=!1}={})=>{let x=new Fn({vertexColors:!0,side:n,color:s});if(x.onBeforeCompile=E=>{Object.assign(E.uniforms,i,{uShow:e}),E.vertexShader=E.vertexShader.replace("#include <common>",`#include <common>
        uniform float uShow, uTime, uSnowCover, uMoss, uFrost;
        attribute float aTip; attribute float aMat;
        varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj; varying float vMat; varying vec3 vObjN;
        ${m?"attribute float aHash; uniform float uBare; varying float vHash; varying float vLeaf;":""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
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
        ${t?`float sd = cIP.x * 0.071 + cIP.z * 0.053;
        float sw = (sin(uTime * 1.3 + sd) + 0.45 * sin(uTime * 3.1 + sd * 1.7)) * ${t.toFixed(4)} * position.y * position.y;
        transformed.x += sw; transformed.z += sw * 0.7;`:""}
        ${m?`vHash = aHash; vLeaf = step(12.5, aMat);
        // autumn: some trees drop all their needles (only trunk and branches stay)
        float bare = step(aHash, uBare) * vLeaf;
        transformed.xz *= 1.0 - bare * 0.985;`:""}
        ${o?`transformed.y -= (1.0 - uShow) * ${o.toFixed(1)};`:"transformed *= uShow;"}`),E.fragmentShader=E.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uSnowC, uMossC; varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;
        // wood grain + fine speckle, so surfaces feel like real material up close
        float gH(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float gN(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(gH(i), gH(i + vec3(1, 0, 0)), f.x), mix(gH(i + vec3(0, 1, 0)), gH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(gH(i + vec3(0, 0, 1)), gH(i + vec3(1, 0, 1)), f.x), mix(gH(i + vec3(0, 1, 1)), gH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
        float grainH(vec3 p) { return gN(vec3(p.x * 1.3 + p.z * 0.4, p.y * 24.0, p.z * 1.3)) * 0.65 + gN(p * 11.0) * 0.35; }
        ${g?Mx:""}
        varying float vMat; varying vec3 vObjN;
        float gRichH = 0.0; float gAO = 1.0;
        ${m?`uniform float uFall, uBloom, uLush; varying float vHash; varying float vLeaf;
        vec3 autumn(float h) {
          return h < 0.25 ? vec3(0.86, 0.42, 0.1) : h < 0.5 ? vec3(0.72, 0.16, 0.08) : h < 0.75 ? vec3(0.92, 0.7, 0.16) : vec3(0.55, 0.3, 0.12);
        }`:""}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        ${a?`#ifdef DOUBLE_SIDED
 normal *= faceDirection;
 #endif`:""}
        ${g?`{
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
        ${m?`{
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
        ${g?"gRichH = richSurface(int(vMat + 0.5), vObj, vObjN, diffuseColor.rgb);":u?"diffuseColor.rgb *= 0.84 + 0.3 * grainH(vObj);":""}
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
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC * 0.96, ${l?"smoothstep(0.42, 0.56, vTipA) * 0.95":"clamp(vTipA, 0.0, 0.9)"});`)},h){let E=x.onBeforeCompile;x.onBeforeCompile=p=>{E(p),p.fragmentShader=p.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= 0.62 * gAO;
        reflectedLight.directDiffuse *= mix(1.0, gAO, 0.7);`)}}return x},Mx=`
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
`;function _d({scene:i,camera:e,heightAt:t,water:n}){let s=(J,O,$)=>window.MEOW_I18N?window.MEOW_I18N.t(J,$):O,r=(J,...O)=>{let $=window.MEOW_SOUND;$&&$[J]&&$[J](...O)},o=(()=>{let J=new jt,O=new Qt(1,18,12);return J.add(O,{m:z(0,0,0,0,0,0,1,.36,.28),color:$=>{let Z=$.y>.05?.55:.85,ee=Math.sin($.x*30)*Math.sin($.z*40)>.6&&$.y>0?.8:1;return[Z*.78*ee,Z*.84*ee,Z*.8*ee]}}),J.add(new dn(.3,.45,4),{m:z(-1.05,0,0,0,0,Math.PI/2,1,1,.25),color:()=>[.42,.46,.44]}),J.add(new dn(.16,.4,4),{m:z(.05,.38,0,0,0,-.4,1,1,.2),color:()=>[.42,.46,.44]}),[-1,1].forEach($=>{J.add(new Qt(.07,8,6),{m:z(.72,.08,$*.17),color:()=>[.95,.95,.92]}),J.add(new Qt(.04,8,6),{m:z(.76,.085,$*.21),color:()=>[.05,.05,.05]})}),J.add(new Ss(.07,.025,6,12),{m:z(.99,-.02,0,0,Math.PI/2,0),color:()=>[.35,.22,.24]}),J.geometry()})(),a=new Fn({vertexColors:!0}),l=5,c=1.6,u=Array.from({length:l},(J,O)=>{let $=new xt(o,a);$.visible=!1,$.scale.setScalar(c),i.add($);let Z=new xt(new Wr(.85,1,32).rotateX(-Math.PI/2),new Ln({color:15265520,transparent:!0,opacity:0,depthWrite:!1}));return Z.visible=!1,i.add(Z),{m:$,ring:Z,next:performance.now()+1500+O*1700,t0:0,x:0,z:0,yaw:0,on:!1}}),g=(J,O,$,Z)=>{u.forEach(ee=>{if(!ee.on){if(ee.m.visible=!1,J<.05||Z||O<ee.next){ee.ring.visible=ee.ring.visible&&O-ee.t0<2600;return}for(let Lt=0;Lt<8;Lt++){let pt=Math.random()*Math.PI*2,Je=16+Math.random()*60,he=e.position.x+Math.cos(pt)*Je,ye=e.position.z+Math.sin(pt)*Je;if(t(he,ye)<$-1.5){ee.x=he,ee.z=ye,ee.yaw=Math.random()*6.28,ee.on=!0,ee.t0=O;break}}ee.next=O+(2500+Math.random()*6e3)/Math.max(.2,J),ee.on&&Math.hypot(ee.x-e.position.x,ee.z-e.position.z)<45&&setTimeout(()=>r("plop",.6),250)}if(!ee.on)return;let xe=(O-ee.t0)/1e3,de=xe<.35?xe/.35:xe<.9?1:Math.max(0,1-(xe-.9)/.45),ge=de*de*(3-2*de);ee.m.visible=!0,ee.m.position.set(ee.x,$-1.2*c+ge*1.45*c,ee.z),ee.m.rotation.set(0,ee.yaw,1.05-(xe>.9?(xe-.9)*1.6:0));let Se=xe>.4&&xe<.85?1+.12*Math.sin((xe-.4)*40):1;ee.m.scale.set(c,c*Se,c),ee.ring.visible=!0,ee.ring.position.set(ee.x,$+.05,ee.z);let Qe=Math.max(0,xe-.2),Be=.6+Qe*2.4;ee.ring.scale.setScalar(Be),ee.ring.material.opacity=Math.max(0,.55-Qe*.22),xe>1.4&&(ee.on=!1,ee.m.visible=!1)})};i.add(e);let h=new Mn;{let J=new Fn({color:7031342}),O=new Fn({color:2236962}),$=new xt(new Ke(.012,.035,2.4,6).translate(0,1.2,0),J),Z=new xt(new Ke(.045,.045,.35,8).translate(0,.18,0),O),ee=new xt(new Ke(.08,.08,.06,12),O);ee.rotation.z=Math.PI/2,ee.position.set(.06,.42,0),h.add($,Z,ee),h.position.set(.55,-.85,-.9),h.rotation.set(-.95,0,-.25),h.visible=!1,e.add(h)}let m=new I(0,2.4,0),x=new Mn;{let J=new xt(new Qt(.16,10,8,0,Math.PI*2,0,Math.PI/2),new Fn({color:14173230,emissive:4198408})),O=new xt(new Qt(.16,10,8,0,Math.PI*2,Math.PI/2,Math.PI/2),new Fn({color:15921386})),$=new xt(new Ke(.015,.015,.3,5).translate(0,.22,0),new Fn({color:14173230}));x.add(J,O,$),x.scale.setScalar(2.2),x.visible=!1,i.add(x)}let E=16,p=new Kt;p.setAttribute("position",new hn(new Float32Array(E*3),3));let f=new ir(p,new nr({color:15263968,transparent:!0,opacity:.7}));f.frustumCulled=!1,f.visible=!1,i.add(f);let y=new xt(o,a);y.visible=!1,i.add(y);let R=document.createElement("div");R.className="fish-hint",document.body.appendChild(R);let w=(J,O)=>{R.textContent=J||"",R.classList.toggle("show",!!J),R.classList.toggle("hot",!!O)},b={mode:"idle",t0:0,from:new I,to:new I,biteAt:0,aim:null,catchFrom:new I},T=0;try{T=+(localStorage.getItem("meow.fish")||0)}catch{}let P=new I,_=new I,C=new ni(new I(0,1,0),0),F=(J,O)=>{C.constant=-O;let $=J.ray.intersectPlane(C,new I);if(!$)return null;let Z=$.distanceTo(e.position);return Z>70||Z<6||t($.x,$.z)>O-.6?null:$},X=J=>{let O=document.getElementById("toast");O&&(O.textContent=J,O.classList.add("show"),clearTimeout(X.t),X.t=setTimeout(()=>O.classList.remove("show"),3200))},G=()=>{b.mode="idle",h.visible=!1,x.visible=!1,f.visible=!1};return{get busy(){return b.mode!=="idle"},reset(){G(),y.visible=!1,w("")},key(J){return b.mode==="idle"?b.aim?(b.mode="cast",b.t0=J,b.to.copy(b.aim),h.visible=!0,f.visible=!0,x.visible=!0,r("cast"),!0):!1:b.mode==="bite"?this.strike(J):b.mode==="wait"||b.mode==="cast"?(r("reel"),G(),!0):!1},click(J){return b.mode==="bite"?this.strike(J):!1},strike(J){b.mode="catch",b.t0=J,b.catchFrom.copy(x.position),x.visible=!1,r("splash",!0);let O=s("fishNames","Trout|Perch|Carp|Pike|Bass|Catfish").split("|"),$=O[Math.floor(Math.random()*O.length)],Z=18+Math.floor(Math.random()*40);T++;try{localStorage.setItem("meow.fish",String(T))}catch{}return y.scale.setScalar(.6+(Z-18)/60),setTimeout(()=>X("\u{1F41F} "+s("fishCaught","You caught a {name}! {cm} cm \xB7 {n} so far",{name:$,cm:Z,n:T})),700),!0},update(J,O,{active:$,ray:Z,waterY:ee,amount:xe,indoor:de}){if(g(xe,J,ee,de),b.aim=$&&!de&&b.mode==="idle"&&Z?F(Z,ee):null,e.updateMatrixWorld(),P.copy(m).applyMatrix4(h.matrixWorld),b.mode==="cast"){let ge=Math.min(1,(J-b.t0)/800);x.position.lerpVectors(P,b.to,ge),x.position.y+=Math.sin(Math.PI*ge)*8,ge>=1&&(b.mode="wait",b.biteAt=J+3e3+Math.random()*7e3,r("plop",.8))}else if(b.mode==="wait")x.position.set(b.to.x,ee+Math.sin(O*2.2)*.06,b.to.z),J>b.biteAt&&(b.mode="bite",b.t0=J,r("splash",!1)),e.position.distanceTo(b.to)>80&&(G(),X(s("fishSnap","The line snapped")));else if(b.mode==="bite"){let ge=(J-b.t0)/1e3;x.position.set(b.to.x+Math.sin(ge*20)*.08,ee-.25-Math.abs(Math.sin(ge*9))*.45,b.to.z),ge>1.5&&(b.mode="wait",b.biteAt=J+2500+Math.random()*6e3,X(s("fishAway","It got away\u2026")))}else if(b.mode==="catch"){let ge=Math.min(1,(J-b.t0)/1100);_.set(0,-.4,-3.2).applyQuaternion(e.quaternion).add(e.position),y.visible=!0,y.position.lerpVectors(b.catchFrom,_,ge),y.position.y+=Math.sin(Math.PI*ge)*6,y.rotation.set(Math.sin(O*18)*.4,O*4,Math.PI/2*(1-ge)),ge>=1&&(y.visible=!1,G())}if(f.visible){let ge=p.attributes.position;for(let Se=0;Se<E;Se++){let Qe=Se/(E-1);_.lerpVectors(P,x.visible?x.position:b.catchFrom,Qe),_.y-=Math.sin(Math.PI*Qe)*(b.mode==="bite"?.2:1.2),ge.setXYZ(Se,_.x,_.y,_.z)}ge.needsUpdate=!0,h.rotation.x=-.95+(b.mode==="bite"?Math.sin(O*30)*.05-.15:0)}$?b.mode==="bite"?w(s("fishBite","A bite! Click now!"),!0):b.mode==="wait"||b.mode==="cast"?w(s("fishWait","Waiting for a bite\u2026 \xB7 R reel in")):b.aim?w(s("fishCast","R  cast the line")):w(""):w("")}}}var Xe={x0:-6.5,x1:6.5,z0:-9.5,z1:2.4,floor:-3.5,ceil:-.3},at={x0:1.95,x1:3,top:2.2,bottom:-1.3},Rs=i=>{let e=(at.top-Math.min(at.top,Math.max(at.bottom,i)))/(at.top-at.bottom);return .12+(Xe.floor-.12)*e},Kn=2,go=2.75,Qn=.42,Cc=.5,gr=.14,yd=5,Sx=[2,3,1,4,0],vd=["#6e2d2a","#2f4a3a","#2a3550","#5a3d26","#7a5a2a","#4a4a4e","#3d2e44","#5e5040","#283c3c","#704030"];function Md({group:i,mats:e,camera:t,U:n}){let{inn:s,glow:r}=e,o=Xe.floor,a=Xe.ceil,l=a-o,c=new jt,u=new jt,g=(N,W,j)=>an(N,W,j),h=N=>gn("wood",W=>{let j=N*(.86+g(W.x*3,W.y*9,W.z*3)*.28),pe=g(W.x*.6,W.y*2,W.z*.6);return[j*(1+pe*.08),j*(.74+pe*.04),j*(.52-pe*.05)]}),m=h(.34),x=h(.46),E=h(.6),p=(N,W,j,pe)=>pe?gn(pe,()=>[N,W,j]):()=>[N,W,j],f=gn("stone",N=>{let W=.42+g(N.x*4,N.y*4,N.z*4)*.22;return[W,W*.96,W*.9]}),y=Xe.x1-Xe.x0,R=Xe.z1-Xe.z0,w=(Xe.x0+Xe.x1)/2,b=(Xe.z0+Xe.z1)/2;for(let N=Xe.x0,W=0;N<Xe.x1-.01;N+=.22,W++){let j=W%3*.9;for(let pe=Xe.z0-j,tt=0;pe<Xe.z1;pe+=2.7,tt++){let U=Math.max(pe,Xe.z0),ze=Math.min(pe+2.7,Xe.z1);ze-U<.05||c.add(new ue(.215,.05,ze-U-.006),{m:z(N+.11,o-.025,(U+ze)/2),color:gn("wood",M=>{let k=(.36+(W*7+tt*3)%5*.018)*(.88+g(M.x*3,0,M.z*.8)*.24);return[k*1.04,k*.74,k*.5]})})}}let T=(N,W)=>N>at.x0-.05&&N<at.x1+.05&&W>at.bottom-.05&&W<at.top+.2;for(let N=Xe.x0;N<Xe.x1-.01;N+=.5)for(let W=Xe.z0;W<Xe.z1-.01;W+=.5)T(N+.25,W+.25)||c.add(new fn(.5,.5),{m:z(N+.25,a,W+.25,Math.PI/2,0,0),color:gn("plaster",j=>{let pe=.62+g(j.x*2,0,j.z*2)*.08;return[pe,pe*.95,pe*.86]})});for(let N=Xe.z0+1.2;N<Xe.z1;N+=1.8)(N>at.bottom-.1&&N<at.top+.2?[[Xe.x0,at.x0-.05],[at.x1+.05,Xe.x1]]:[[Xe.x0,Xe.x1]]).forEach(([j,pe])=>c.add(new ue(pe-j,.22,.2),{m:z((j+pe)/2,a-.11,N),color:m}));[["z",Xe.z0,Xe.x0,Xe.x1,1],["z",Xe.z1,Xe.x0,Xe.x1,-1],["x",Xe.x0,Xe.z0,Xe.z1,1],["x",Xe.x1,Xe.z0,Xe.z1,-1]].forEach(([N,W,j,pe,tt])=>{for(let M=j;M<pe-.01;M+=.6){let k=Math.min(.6,pe-M),te=M+k/2,ve=(Pe,Te,fe,ct=0)=>{let Dt=new fn(k,Te-Pe),cn=N==="z"?z(te,(Pe+Te)/2,W+tt*ct,0,tt>0?0:Math.PI,0):z(W+tt*ct,(Pe+Te)/2,te,0,tt>0?Math.PI/2:-Math.PI/2,0);c.add(Dt,{m:cn,color:fe})};ve(o,o+1,f),ve(o+1,a,gn("wood",Pe=>{let Te=.33+g(Pe.x*2,Pe.y*6,Pe.z*2)*.08+(Math.abs(((Pe.x+Pe.z)*1.67+50)%1-.5)<.02?-.06:0);return[Te*1.02,Te*.76,Te*.54]}))}let U=pe-j,ze=(j+pe)/2;[[o+1,.06,.05],[o+.06,.12,.03]].forEach(([M,k,te])=>{c.add(new ue(N==="z"?U:te,k,N==="z"?te:U),{m:N==="z"?z(ze,M,W+tt*te/2):z(W+tt*te/2,M,ze),color:x})})});let _=12,C=(at.top-at.bottom)/_;for(let N=0;N<_;N++){let W=at.top-N*C,j=W-C,pe=Rs(W-C*.5);c.add(new ue(at.x1-at.x0-.04,.05,C+.03),{m:z((at.x0+at.x1)/2,pe-.025,(j+W)/2),color:E}),c.add(new ue(at.x1-at.x0-.04,Math.abs(Rs(W)-Rs(j)),.03),{m:z((at.x0+at.x1)/2,(Rs(W)+pe)/2,W-.01),color:m})}let F=Math.hypot(at.top-at.bottom,.12-o),X=Math.atan2(.12-o,at.top-at.bottom);[at.x0,at.x1].forEach(N=>{c.add(new ue(.05,.28,F),{m:z(N,(.12+o)/2-.1,(at.top+at.bottom)/2,X,0,0),color:x}),c.add(new ue(.06,.06,F),{m:z(N,(.12+o)/2+.85,(at.top+at.bottom)/2,X,0,0),color:E});for(let W=1;W<_;W+=2){let j=at.top-W*C;c.add(new ue(.035,.85,.035),{m:z(N,Rs(j)+.42,j),color:x})}}),c.add(new ue(.03,2.6,3),{m:z(at.x0-.02,o+1,.9),color:m}),c.add(new ue(.6,1.4,.03),{m:z(at.x0-.04,o+.72,.5,0,Math.PI/2,0),color:x});let G=[];for(let N=0;N<6;N++)G.push({x:Xe.x0+.5+Kn/2+N*(Kn+0),z:Xe.z0+Qn/2,ry:0});for(let N=0;N<4;N++)G.push({x:Xe.x0+Qn/2,z:Xe.z0+1+Kn/2+N*Kn,ry:Math.PI/2});for(let N=0;N<4;N++)G.push({x:Xe.x1-Qn/2,z:Xe.z0+1+Kn/2+N*Kn,ry:-Math.PI/2});let J=[2,3,1,4,0,5,6,7,8,9,10,11,12,13],O=N=>new Et().compose(new I(N.x,o,N.z),new Gt().setFromAxisAngle(new I(0,1,0),N.ry),new I(1,1,1)),$=(N,W,j,pe)=>new I(W,j,pe).applyMatrix4(O(N));G.forEach(N=>{let W=O(N),j=(pe,tt,U)=>c.add(pe,{m:W.clone().multiply(tt),color:U});j(new ue(Kn,go,.03),z(0,go/2,-Qn/2+.015),m),[-1,1].forEach(pe=>j(new ue(.05,go,Qn),z(pe*(Kn/2-.025),go/2,0),x));for(let pe=0;pe<=yd;pe++)j(new ue(Kn-.08,.035,Qn-.03),z(0,gr+pe*Cc-.0175,.01),x);j(new ue(Kn+.08,.12,Qn+.06),z(0,go+.02,.02),m),j(new ue(Kn,gr,Qn+.02),z(0,gr/2,.01),m);for(let pe=0;pe<yd;pe++)j(new ue(Kn-.08,.04,.02),z(0,gr+pe*Cc+.005,Qn/2-.005),E)}),c.add(new Ke(.015,.015,12,6),{m:z(0,o+2.55,Xe.z0+Qn+.04,0,0,Math.PI/2),color:p(.62,.5,.28,"metal")});{[-.22,.22].forEach(j=>c.add(new ue(.05,2.75,.06),{m:z(4.6+j,o+1.36,Xe.z0+Qn+.42,-.22,0,0),color:E}));for(let j=0;j<8;j++){let pe=.25+j*.32;c.add(new Ke(.018,.018,.44,6),{m:z(4.6,o+pe,Xe.z0+Qn+.42+(1.36-pe)*Math.tan(.22)*.98,0,0,Math.PI/2),color:E})}}c.add(new ue(5.2,.012,3.8),{m:z(-.4,o+.006,-4.6),color:gn("fabric",N=>{let W=Math.abs(N.x+.4),j=Math.abs(N.z+4.6);if(W>2.45||j>1.75)return[.3,.16,.13];if(W>2.25||j>1.55)return[.62,.5,.3];let pe=Math.sin(W*6)*Math.sin(j*6);return pe>.4?[.55,.2,.17]:pe<-.4?[.2,.25,.3]:[.42,.18,.15]})});let Z={x:-.4,z:-2.6};c.add(new ue(1.9,.07,.95),{m:z(Z.x,o+.78,Z.z),color:E}),[-1,1].forEach(N=>{c.add(new ue(.5,.74,.88),{m:z(Z.x+N*.68,o+.37,Z.z),color:x});for(let W=0;W<3;W++)c.add(new ue(.44,.2,.02),{m:z(Z.x+N*.68,o+.15+W*.23,Z.z-.45),color:E}),c.add(new ue(.08,.02,.03),{m:z(Z.x+N*.68,o+.17+W*.23,Z.z-.47),color:p(.62,.5,.28,"metal")})}),c.add(new ue(.5,.012,.36),{m:z(Z.x-.15,o+.82,Z.z-.05,0,.15,0),color:p(.9,.87,.78,"paper")}),c.add(new Ke(.006,.006,.16,5),{m:z(Z.x+.15,o+.825,Z.z,0,.6,Math.PI/2),color:p(.12,.12,.13)}),c.add(new Ke(.07,.09,.03,12),{m:z(Z.x+.62,o+.83,Z.z+.2),color:p(.62,.5,.28,"metal")}),c.add(new Ke(.01,.01,.34,6),{m:z(Z.x+.62,o+1,Z.z+.2),color:p(.62,.5,.28,"metal")}),c.add(new Ke(.06,.14,.12,14,1,!0),{m:z(Z.x+.62,o+1.18,Z.z+.12,.5,0,0),color:p(.18,.36,.26,"metal")}),u.add(new Qt(.035,8,6),{m:z(Z.x+.62,o+1.14,Z.z+.1),color:p(1,1,1)}),c.add(new ue(.5,.06,.48),{m:z(Z.x,o+.48,Z.z+.75),color:p(.32,.16,.12,"leather")}),c.add(new ue(.5,.6,.06),{m:z(Z.x,o+.82,Z.z+1),color:p(.32,.16,.12,"leather")}),[[-.2,.55],[.2,.55],[-.2,.95],[.2,.95]].forEach(([N,W])=>c.add(new ue(.04,.46,.04),{m:z(Z.x+N,o+.23,Z.z+W),color:m}));let ee=(N,W,j)=>{let pe=new Et().compose(new I(N,o,W),new Gt().setFromAxisAngle(new I(0,1,0),j),new I(1,1,1)),tt=gn("leather",ze=>{let M=.34+g(ze.x*12,ze.y*12,ze.z*12)*.06;return[M,M*.52,M*.38]}),U=(ze,M)=>c.add(ze,{m:pe.clone().multiply(M),color:tt});U(new ue(.85,.42,.8),z(0,.25,0)),U(new ue(.85,.65,.2),z(0,.72,-.32,-.12,0,0)),[-1,1].forEach(ze=>U(new ue(.16,.3,.8),z(ze*.42,.58,0))),U(new ue(.62,.1,.6),z(0,.5,.06))};ee(-3.6,-5.2,.55),ee(-1,-6.4,-.35),c.add(new Ke(.32,.32,.04,20),{m:z(-2.4,o+.58,-6),color:E}),c.add(new Ke(.04,.05,.56,8),{m:z(-2.4,o+.29,-6),color:m}),c.add(new Ke(.2,.22,.03,16),{m:z(-2.4,o+.015,-6),color:m}),c.add(new Ke(.04,.035,.1,10),{m:z(-2.3,o+.65,-5.95),color:p(.8,.78,.74)}),c.add(new Ke(.15,.17,.03,14),{m:z(-4.6,o+.015,-6.4),color:m}),c.add(new Ke(.015,.015,1.6,6),{m:z(-4.6,o+.8,-6.4),color:p(.62,.5,.28,"metal")}),c.add(new Ke(.16,.24,.26,16,1,!0),{m:z(-4.6,o+1.68,-6.4),color:p(.85,.78,.62,"fabric")}),u.add(new Qt(.06,8,6),{m:z(-4.6,o+1.62,-6.4),color:p(1,1,1)}),c.add(new Qt(.28,20,14),{m:z(1.2,o+1.05,-4,.4,0,.2),color:N=>g(N.x*9+3,N.y*9,N.z*9)>.55?[.62,.55,.38]:[.3,.42,.46]}),c.add(new Ss(.31,.012,6,32),{m:z(1.2,o+1.05,-4,0,Math.PI/2,.2),color:p(.62,.5,.28,"metal")}),c.add(new Ke(.03,.06,.75,8),{m:z(1.2,o+.38,-4),color:m}),[0,2.1,4.2].forEach(N=>c.add(new ue(.04,.03,.4),{m:z(1.2+Math.sin(N)*.17,o+.03,-4+Math.cos(N)*.17,0,N,0),color:m})),c.add(new ue(.55,2.1,.35),{m:z(-5.8,o+1.05,1.9),color:m}),c.add(new Ke(.2,.2,.02,24),{m:z(-5.8,o+1.7,1.72,Math.PI/2,0,0),color:p(.88,.84,.74,"paper")}),c.add(new ue(.01,.13,.01),{m:z(-5.8,o+1.74,1.71,0,0,.6),color:p(.1,.1,.1)}),c.add(new ue(.01,.17,.01),{m:z(-5.8,o+1.76,1.71,0,0,-.2),color:p(.1,.1,.1)}),[[-2.5,-4.5],[1.5,-6.5],[-.4,-2.6]].forEach(([N,W])=>{c.add(new Ke(.006,.006,.9,4),{m:z(N,a-.45,W),color:p(.1,.1,.1)}),c.add(new dn(.22,.2,16,1,!0),{m:z(N,a-.95,W),color:p(.3,.32,.28)}),u.add(new Qt(.07,10,8),{m:z(N,a-1.03,W),color:p(1,1,1)})}),[[Z.x-.75,Z.z+.3],[Z.x-.62,Z.z+.32]].forEach(([N,W],j)=>{c.add(new Ke(.025,.025,.12+j*.05,8),{m:z(N,o+.81+(.12+j*.05)/2,W),color:p(.88,.84,.74,"paper")}),u.add(new Qt(.014,6,4),{m:z(N,o+.83+.12+j*.05,W,0,0,0,1,1.8,1),color:p(1,1,1)})});let xe=new xt(c.geometry(),s);xe.receiveShadow=!0;let de=new xt(u.geometry(),r);i.add(xe,de);let ge=new Gi(16756848,0,40,1.3);ge.position.set(-1,a-1.1,-4.5),i.add(ge);let Se=(()=>{let N=new jt,W=j=>{let pe=.9+g(j.x*40,j.y*40,j.z*40)*.2;return[pe,pe,pe]};return[-1,1].forEach(j=>N.add(new ue(.1,1,1),{m:z(j*.45,0,0),color:W,tip:()=>1})),N.add(new ue(1,1,.08),{m:z(0,0,.47),color:W,tip:()=>1}),N.add(new ue(.82,.94,.94),{m:z(0,0,-.04),color:j=>{let pe=.86+Math.sin(j.x*140)*.04;return[pe,pe*.96,pe*.86]},tip:()=>0}),[.3,-.3,.36,-.36].forEach(j=>N.add(new ue(1.01,.025,.02),{m:z(0,j,.515),color:p(.78,.62,.3),tip:()=>0})),N.add(new ue(.7,.16,.01),{m:z(0,.1,.516),color:p(.12,.1,.08),tip:()=>0}),N.geometry()})(),Qe=new Fn({vertexColors:!0});Qe.onBeforeCompile=N=>{N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
attribute float aTip;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
        #ifdef USE_COLOR
          vColor.rgb *= color;
        #endif
        #ifdef USE_INSTANCING_COLOR
          vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, aTip);
        #endif`)};let Be=null,Lt=[],pt=[],Je="",he=new Et,ye=new Gt,Ye=new I,qe=new I,De=[],gt=N=>{let W=2166136261;for(let j=0;j<N.length;j++)W=Math.imul(W^N.charCodeAt(j),16777619);return(W>>>0)%1e4/1e4},Rt=(N,W)=>window.MEOW_I18N?window.MEOW_I18N.t(N):W,St=N=>{let W=document.createElement("canvas");W.width=256,W.height=64;let j=W.getContext("2d"),pe=j.createLinearGradient(0,0,0,64);pe.addColorStop(0,"#d9b968"),pe.addColorStop(1,"#8c6a2c"),j.fillStyle=pe,j.fillRect(0,0,256,64),j.strokeStyle="rgba(60,40,10,.8)",j.lineWidth=4,j.strokeRect(4,4,248,56),j.fillStyle="#2a1c08",j.font='600 30px "Josefin Sans", system-ui, sans-serif',j.textAlign="center",j.textBaseline="middle";let tt=N;for(;j.measureText(tt).width>228&&tt.length>2;)tt=tt.slice(0,-2)+"\u2026";j.fillText(tt,128,34);let U=new ns(W);return U.colorSpace=qn,U.anisotropy=4,U},Ae=new jt,se=(N,W,j)=>{let pe=Math.floor(j*5),tt=gr+W*Cc,U=(k,te,ve)=>$(N,k,te,ve),ze=(k,te,ve,Pe,Te=1,fe=1,ct=1)=>{let Dt=U(te,ve,.02);Ae.add(k,{m:new Et().compose(Dt,new Gt().setFromAxisAngle(new I(0,1,0),N.ry),new I(Te,fe,ct)),color:Pe})},M=(j*1.3%1-.5)*1;pe===0?(ze(new Ke(.06,.09,.26,12),M,tt+.13,p(.55,.6,.58)),ze(new Qt(.07,10,8),M+.3,tt+.07,p(.7,.55,.35))):pe===1?(ze(new ue(.3,.16,.22),M,tt+.08,h(.5)),ze(new ue(.3,.02,.22),M,tt+.165,p(.62,.5,.28,"metal"))):pe===2?(ze(new Qt(.06,10,8),M,tt+.07,p(.25,.24,.24),1,1.2,.9),ze(new Qt(.04,10,8),M,tt+.17,p(.25,.24,.24)),[-1,1].forEach(k=>ze(new dn(.015,.035,4),M+k*.022,tt+.215,p(.25,.24,.24)))):pe===3?(ze(new Ke(.05,.05,.02,12),M,tt+.01,p(.62,.5,.28,"metal")),ze(new Ke(.02,.02,.14,8),M,tt+.09,p(.88,.84,.74,"paper"))):(ze(new ue(.02,.24,.18),M,tt+.12,h(.4)),ze(new fn(.14,.18),M+.012,tt+.12,p(.75,.72,.62)))},ie=null,we=()=>{Be&&(i.remove(Be),Be.dispose()),Lt.forEach(ze=>{i.remove(ze),ze.material.map.dispose(),ze.material.dispose()}),ie&&(i.remove(ie),ie.geometry.dispose()),Lt=[],De.length=0;let N=30,W=[],j=new Map;pt.forEach(ze=>{let M=(ze.tag||"").trim();j.has(M)||(j.set(M,[]),W.push(M)),j.get(M).push(ze)});let pe=[];W.forEach(ze=>{let M=j.get(ze);for(let k=0;k<M.length;k+=N)pe.push({tag:ze,list:M.slice(k,k+N),first:k===0})});let tt=[];J.forEach(ze=>Sx.forEach(M=>tt.push([G[ze],M])));let U=new Set;pe.forEach((ze,M)=>{let k=tt[M];if(!k)return;let[te,ve]=k;U.add(te.x+","+te.z+","+ve);let Pe=gr+ve*Cc,Te=ze.list.map(Ot=>({t:.035+gt(Ot.url)*.04,h:.24+gt(Ot.url+"h")*.11,d:.17+gt(Ot.title||"x")*.05})),fe=Te.reduce((Ot,kt)=>Ot+kt.t+.004,0),ct=Kn-.16,Dt=fe>ct?ct/fe:1,cn=-Kn/2+.08;if(ze.list.forEach((Ot,kt)=>{let Tt=Te[kt],xn=Tt.t*Dt,Vn=$(te,cn+xn/2,Pe+Tt.h/2+.002,-Qn/2+.03+Tt.d/2),qi=new Gt().setFromAxisAngle(new I(0,1,0),te.ry);De.push({link:Ot,tag:ze.tag,home:{p:Vn,q:qi,s:new I(xn,Tt.h,Tt.d)},cur:{p:Vn.clone(),q:qi.clone()},state:"shelf",from:null,t0:0,color:vd[Math.floor(gt(Ot.url+"c")*vd.length)]}),cn+=xn+.004}),ze.first){let Ot=new Ln({map:St("#"+(ze.tag||Rt("untagged","no tag"))),toneMapped:!1}),kt=new xt(new fn(.34,.085),Ot);kt.position.copy($(te,0,Pe+.006,Qn/2+.006)),kt.quaternion.setFromAxisAngle(new I(0,1,0),te.ry),kt.position.y-=.035,kt.userData.tag=ze.tag,i.add(kt),Lt.push(kt)}}),Ae.clear(),tt.forEach(([ze,M],k)=>{if(U.has(ze.x+","+ze.z+","+M))return;let te=gt("o"+k);te<.55&&se(ze,M,te/.55)}),ie=new xt(Ae.geometry(),s),i.add(ie),Be=new ai(Se,Qe,Math.max(1,De.length)),Be.count=De.length,Be.frustumCulled=!1,De.forEach((ze,M)=>{he.compose(ze.home.p,ze.home.q,ze.home.s),Be.setMatrixAt(M,he),Be.setColorAt(M,new lt(ze.color))}),Be.instanceColor&&(Be.instanceColor.needsUpdate=!0),i.add(Be)},re={mode:"idle",open:-1,openT0:0,closing:!1,ring:null,ringT0:0,hover:null},_e=document.createElement("div");_e.className="book-tip",document.body.appendChild(_e);let Ee=document.createElement("div");Ee.className="book-page",Ee.innerHTML='<div class="bp-left"><small class="bp-tag"></small><strong class="bp-title"></strong><span class="bp-host"></span><em class="bp-go"></em></div><div class="bp-right"><img alt=""><span class="bp-wait"></span></div>',document.body.appendChild(Ee);let Ue=Ee.querySelector("img"),D=Ee.querySelector(".bp-wait"),st=N=>{try{return new URL(N).hostname.replace(/^www\./,"")}catch{return N}},Ce=(N,W)=>"https://s.wordpress.com/mshots/v1/"+encodeURIComponent(N)+"?w=800&h=600"+(W?"&r="+W:""),A=0,d=N=>{clearTimeout(A),Ue.classList.remove("ready"),D.textContent=Rt("loadingPreview","\u2026");let W=0,j=()=>{Ue.onload=()=>{Ue.classList.add("ready"),D.textContent="",Ue.naturalWidth<600&&W<3&&(W++,A=setTimeout(j,2500))},Ue.onerror=()=>{D.textContent=Rt("noPreview","No preview")},Ue.src=Ce(N,W)};j()},L=(()=>{let N=new Mn,W=new Fn({color:7220522}),j=new Ln({color:15722192}),pe=new Mn,tt=new Mn,U=new ue(1,1.32,.03).translate(-.5,0,0),ze=new ue(1,1.32,.03).translate(.5,0,0),M=new ue(.96,1.26,.06).translate(-.49,0,.045),k=new ue(.96,1.26,.06).translate(.49,0,.045);return pe.add(new xt(U,W),new xt(M,j)),tt.add(new xt(ze,W),new xt(k,j)),N.add(pe,tt),N.visible=!1,i.parent.add(N),{g:N,left:pe,right:tt,leather:W}})(),q=.16,V=(N,W,j)=>{let pe=De[N];W.copy(pe.cur.p).applyMatrix4(i.matrixWorld),i.getWorldQuaternion(j).multiply(pe.cur.q)},ce=(N,W,j,pe=0)=>{W.set(0,pe,-N).applyQuaternion(t.quaternion).add(t.position),j.copy(t.quaternion)},le=N=>N<.5?4*N*N*N:1-Math.pow(-2*N+2,3)/2,Q=(N,W)=>{re.open>=0&&B(W),re.open=N,re.openT0=W,re.closing=!1;let j=De[N];j.state="out",L.leather.color.set(j.color),Ee.querySelector(".bp-tag").textContent="#"+(j.tag||Rt("untagged","no tag")),Ee.querySelector(".bp-title").textContent=j.link.title,Ee.querySelector(".bp-host").textContent=st(j.link.url),Ee.querySelector(".bp-go").textContent=Rt("bookGo","Click the book to visit \u2197"),d(j.link.url),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!0);let pe=new I,tt=new Gt;V(N,pe,tt),re.openFrom={p:pe,q:tt}},B=N=>{re.open<0||re.closing||(re.closing=!0,re.openT0=N,Ee.classList.remove("show"),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!1))},Re=(N,W)=>{if(re.ring===N){Ie(W);return}re.ring!==null&&Ie(W),re.ring=N,re.ringT0=W;let j=0;De.forEach((pe,tt)=>{pe.tag===N&&(pe.ringI=j++,pe.state!=="out"&&(pe.state="toRing",pe.fromSc=pe.sc||1,pe.from={p:pe.cur.p.clone(),q:pe.cur.q.clone()},pe.t0=W+pe.ringI*45))}),re.ringN=j,window.MEOW_SOUND&&window.MEOW_SOUND.whoosh&&window.MEOW_SOUND.whoosh()},Ie=N=>{re.ring!==null&&(De.forEach(W=>{W.tag===re.ring&&(W.state==="ring"||W.state==="toRing")&&(W.state="toShelf",W.fromSc=W.sc||1,W.from={p:W.cur.p.clone(),q:W.cur.q.clone()},W.t0=N+(W.ringI||0)*30)}),re.ring=null)},Le=new Gt,He=new Gt,$e=new I,je=new I,et=(N,W,j,pe)=>{let tt=Math.max(1,re.ringN),U=Math.max(15,tt*1.3),ze=N.ringI/tt*Math.PI*2+W*.12;$e.set(t.position.x+Math.cos(ze)*U,t.position.y-.4+Math.sin(W*1.3+N.ringI)*.25,t.position.z+Math.sin(ze)*U);let M=Math.atan2(t.position.x-$e.x,t.position.z-$e.z);return He.setFromEuler(new bn(0,M-Math.PI/2,Math.sin(W*.9+N.ringI)*.08)),je.copy($e),i.worldToLocal(je),j.copy(je),i.getWorldQuaternion(Le).invert(),pe.copy(Le).multiply(He),j},H=2.2,Ne=(N,W)=>{if(!Be)return;let j=!1,pe=new I,tt=new Gt;if(De.forEach((U,ze)=>{if(U.state==="shelf")return;let M=1;if(U.state==="out"){qe.set(0,0,0),he.compose(U.cur.p,U.cur.q,qe),Be.setMatrixAt(ze,he),j=!0;return}if(U.state==="ring")et(U,N,U.cur.p,U.cur.q),M=H;else{let k=Math.max(0,Math.min(1,(W-U.t0)/900)),te=le(k),ve=U.state==="toRing"?et(U,N,pe,tt):U.home.p,Pe=U.state==="toRing"?tt:U.home.q;U.cur.p.copy(U.from.p).lerp(ve,te),U.cur.p.y+=Math.sin(Math.PI*te)*.4*(U.state==="toRing"?1:.6),U.cur.q.copy(U.from.q).slerp(Pe,te);let Te=U.fromSc||1;M=Te+((U.state==="toRing"?H:1)-Te)*te,k>=1&&(U.state==="toRing"?U.state="ring":(U.state="shelf",U.cur.p.copy(U.home.p),U.cur.q.copy(U.home.q),M=1))}qe.copy(U.home.s).multiplyScalar(M),he.compose(U.cur.p,U.cur.q,qe),Be.setMatrixAt(ze,he),j=!0,U.sc=M}),j&&(Be.instanceMatrix.needsUpdate=!0,Be.boundingSphere=null),re.open>=0){let U=De[re.open],ze=Math.min(1,(W-re.openT0)/(re.closing?700:1100)),M=new I,k=new Gt;ce(4.2,M,k,-.15);let te,ve;re.closing?(te=1-le(Math.max(0,(ze-.35)/.65)),ve=1-le(Math.min(1,ze/.45))):(te=le(Math.min(1,ze/.6)),ve=le(Math.max(0,(ze-.45)/.55)));let Pe=re.openFrom;L.g.position.copy(Pe.p).lerp(M,te),L.g.quaternion.copy(Pe.q).slerp(k,te);let Te=(U.sc||1)*Me,fe=new I(U.home.s.z*Te,U.home.s.y*Te/1.32,U.home.s.z*Te),ct=new I(1.6,1.6,1.6);L.g.scale.copy(fe).lerp(ct,te),L.left.rotation.y=Math.PI*(1-ve)*.999,L.right.rotation.y=0,L.g.visible=!0,!re.closing&&ze>=1?(Ve(L.g,Ee),Ee.classList.add("show")):re.closing||Ee.classList.remove("show"),re.closing&&ze>=1&&(L.g.visible=!1,U.state=re.ring===U.tag?"toRing":"toShelf",U.from={p:new I,q:new Gt},U.from.p.copy(L.g.position),i.worldToLocal(U.from.p),i.getWorldQuaternion(Le).invert(),U.from.q.copy(Le).multiply(L.g.quaternion),U.t0=W,U.fromSc=1,re.open=-1,re.closing=!1)}},Me=4.5,ke=new I,Ve=(N,W)=>{let j=1e9,pe=1e9,tt=-1e9,U=-1e9;[[-.97,.63],[.97,.63],[-.97,-.63],[.97,-.63]].forEach(([ze,M])=>{ke.set(ze,M,.08).applyMatrix4(N.matrixWorld).project(t);let k=(ke.x*.5+.5)*innerWidth,te=(-ke.y*.5+.5)*innerHeight;j=Math.min(j,k),tt=Math.max(tt,k),pe=Math.min(pe,te),U=Math.max(U,te)}),W.style.left=j+"px",W.style.top=pe+"px",W.style.width=tt-j+"px",W.style.height=U-pe+"px"},be=N=>{if(!Be)return null;if(re.open>=0&&L.g.visible&&N.intersectObject(L.g,!0)[0])return{type:"open"};let W=N.intersectObject(Be,!1)[0],j=Lt.length?N.intersectObjects(Lt,!1)[0]:null;return j&&(!W||j.distance<W.distance)&&j.distance<40?{type:"label",tag:j.object.userData.tag}:W&&W.distance<45&&De[W.instanceId]&&De[W.instanceId].state!=="out"?{type:"book",i:W.instanceId}:null};return{sync(){let N=window.MEOW_LINKS_DATA||[],W=N.map(j=>j.url+"|"+j.tag+"|"+j.title).join(`
`);W!==Je&&(Je=W,pt=N.slice(),re.open=-1,re.ring=null,L.g.visible=!1,Ee.classList.remove("show"),we())},update:Ne,get busy(){return re.open>=0||re.ring!==null},hover(N,W){var tt,U;let j=W?be(N):null,pe=j?j.type+((U=(tt=j.i)!=null?tt:j.tag)!=null?U:""):"";if(pe===re.hoverKey)return!!j;if(re.hoverKey=pe,!j||j.type==="open")return _e.classList.remove("show"),!!j;if(j.type==="book"){let ze=De[j.i];_e.innerHTML="";let M=document.createElement("strong");M.textContent=ze.link.title;let k=document.createElement("small");k.textContent="#"+(ze.tag||Rt("untagged","no tag"))+" \xB7 "+st(ze.link.url),_e.append(M,k)}else{let ze=De.filter(te=>te.tag===j.tag).length;_e.innerHTML="";let M=document.createElement("strong");M.textContent="#"+(j.tag||Rt("untagged","no tag"))+"  \xB7  "+ze;let k=document.createElement("small");k.textContent=re.ring===j.tag?Rt("tagBack","Click: put them back"):Rt("tagRing","Click: books fly around you"),_e.append(M,k)}return _e.classList.add("show"),!0},click(N,W){let j=be(N);if(re.open>=0&&!re.closing){if(j&&j.type==="open"){let pe=De[re.open];return window.open(pe.link.url,"_blank","noopener"),!0}if(B(W),!j||j.type==="open")return!0}return j?j.type==="label"?(Re(j.tag,W),!0):j.type==="book"?(Q(j.i,W),!0):!1:re.ring!==null?(Ie(W),!0):!1},back(N){return re.open>=0&&!re.closing?(B(N),!0):re.ring!==null?(Ie(N),!0):!1},_open(N){Q(N,performance.now())},_ring(N){Re(N,performance.now())},get _n(){return De.length},reset(N){re.open>=0&&B(N),re.ring!==null&&Ie(N),_e.classList.remove("show"),re.hoverKey=""},lampLight:ge}}var Ht={x:112,z:-119,y:4.5,yaw:-Math.PI/2,S:4.5};function Sd({scene:i,shared:e,U:t,camera:n}){let s=Ht.S,r=6.4,o=5,a=.17,l=.3145,c=8,u=2.62,g=1.9,h=-1.95,m=-.75,x=2.05,E=o/2+2.6,p=11,f={x:1.7,z:-2},y=new jt,R=new jt,w=new jt,b=new jt,T=(M,k,te)=>an(M,k,te),P=(M,k=1)=>gn("wood",te=>{let ve=M*(.88+T(te.x*3,te.y*9,te.z*3)*.24)*k,Pe=T(te.x*.7,te.y*2,te.z*.7);return[ve*(1.02+Pe*.06),ve*(.79+Pe*.03),ve*(.56-Pe*.04)]}),_=M=>gn("log",(k,te)=>{if(M==="x"?Math.abs(te.x)>.9:Math.abs(te.z)>.9){let fe=M==="x"?Math.hypot(k.y%1,k.z):Math.hypot(k.y%1,k.x),ct=.68+Math.sin(fe*90)*.04;return[ct*1.02,ct*.86,ct*.66]}let Pe=.5+T(k.x*2.5,k.y*8,k.z*2.5)*.2+Math.sin((M==="x"?k.x:k.z)*23)*.015,Te=T(Math.floor(k.y/.31)*3.7,M==="x"?1:2,.5);return Te<.25?[Pe*.95,Pe*.82,Pe*.68]:Te>.75?[Pe*1.08,Pe*.8,Pe*.52]:[Pe,Pe*.79,Pe*.58]}),C=gn("stone",M=>{let k=.45+T(M.x*5,M.y*5,M.z*5)*.25,te=T(M.x*2,M.y*2,M.z*2);return[k*(.96+te*.08),k*.95,k*(.9+(1-te)*.08)]}),F=(M,k,te,ve)=>ve?gn(ve,()=>[M,k,te]):()=>[M,k,te],X=(M,k,te)=>gn("metal",()=>[M,k,te]),G=M=>gn("fabric",M),J=(M,k)=>te=>(M==="z"?(te.z-k)*Math.sign(k):(te.x-k)*Math.sign(k))>0?1:0,O={front:[[h,m,0,x],[.75,1.95,.95,1.95]],back:[],left:[],right:[[-.3,.9,.95,1.95]]},$=(M,k,te,ve)=>{let Pe=[[M,k]];return ve.forEach(([Te,fe,ct,Dt])=>{if(!(ct<te+a-.02&&Dt>te-a+.02))return;let cn=[];Pe.forEach(([Ot,kt])=>{fe<=Ot||Te>=kt?cn.push([Ot,kt]):(Te>Ot&&cn.push([Ot,Te]),fe<kt&&cn.push([fe,kt]))}),Pe=cn}),Pe};for(let M=0;M<c;M++){let k=a+M*l,te=a+l/2+M*l;[["front",o/2],["back",-o/2]].forEach(([ve,Pe])=>{$(-r/2-.3,r/2+.3,k,O[ve]).forEach(([Te,fe])=>{y.add(new Ke(a,a*.97,fe-Te,16,1),{m:z((Te+fe)/2,k,Pe,0,0,Math.PI/2),color:_("x"),tip:J("z",Pe)})})}),te+a<u+.12&&[["left",-r/2],["right",r/2]].forEach(([ve,Pe])=>{$(-o/2-.3,o/2+.3,te,O[ve]).forEach(([Te,fe])=>{y.add(new Ke(a,a*.97,fe-Te,16,1),{m:z(Pe,te,(Te+fe)/2,Math.PI/2,0,0),color:_("z"),tip:J("x",Pe)})})})}for(let M=0;M<4;M++){let k=M<2?r:o,te=M<2?M?-o/2:o/2:M===2?-r/2:r/2;for(let ve=-k/2-.2;ve<k/2+.2;ve+=.42){if(M===0&&ve>h-.2&&ve<m)continue;let Pe=.38+T(ve,M,0)*.08,Te=.16+T(ve,M,3)*.08,fe=M<2?z(ve+.2,-.02+Te/2-.06,te,0,(T(ve,M,5)-.5)*.2,0,Pe,Te,.42):z(te,-.02+Te/2-.06,ve+.2,0,(T(ve,M,5)-.5)*.2,0,.42,Te,Pe);y.add(new ue(1,1,1),{m:fe,color:C,tip:()=>1})}}y.add(new ue(m-h+.1,.08,.42),{m:z((h+m)/2,.06,o/2),color:P(.5),tip:()=>0}),[-1,1].forEach(M=>{let k=M*o/2,te=[-r/2-.05,u,k],ve=[r/2+.05,u,k],Pe=[0,u+g,k],Te=gn("wood",fe=>{let ct=.48+T(fe.x*9,0,M)*.1,Dt=Math.abs((fe.x+10)%.24-.12)<.012?.75:1;return[ct*Dt,ct*.8*Dt,ct*.6*Dt]});y.tris(M>0?[te,ve,Pe]:[ve,te,Pe],Te,()=>0),R.tris(M>0?[ve,te,Pe]:[te,ve,Pe],fe=>{let ct=Te(fe);return[ct[0]*.85,ct[1]*.85,ct[2]*.85]})});let Z=r/2+.6,ee=g+.45,xe=Math.atan2(ee,Z),de=Math.hypot(Z,ee);[-1,1].forEach(M=>{y.add(new ue(de,.1,o+1.3,3,1,6),{m:z(M*Z/2,u+g-ee/2+.02,0,0,0,-M*xe),color:P(.36),tip:(te,ve)=>ve.y>0?1:0});let k=9;for(let te=0;te<k;te++){let ve=te/k,Pe=de/k+.12,Te=M*(Z*(ve+.5/k)),fe=u+g-ee*(ve+.5/k)+.1;y.add(new ue(Pe,.045,o+1.3,1,1,10),{m:z(Te,fe,0,0,0,-M*(xe+.05)),color:gn("shingle",ct=>{let Dt=Math.floor((ct.z+5)*3.3),cn=.3+T(Dt,te,M)*.12+te%2*.02;return[cn*1.02,cn*.9,cn*.8]}),tip:()=>1})}y.add(new ue(.05,.22,o+1.35),{m:z(M*(Z+.02),u+g-ee-.02,0),color:P(.45),tip:()=>0}),[-1,1].forEach(te=>y.add(new ue(de+.1,.22,.05),{m:z(M*Z/2,u+g-ee/2+.02,te*(o/2+.66),0,0,-M*xe),color:P(.45),tip:()=>0}))}),y.add(new ue(.34,.16,o+1.4),{m:z(0,u+g+.12,0,0,0,Math.PI/4),color:P(.32),tip:()=>1});for(let M=0;M<8;M++)y.add(new ue(.86+M%2*.04,.3,.86+(M+1)%2*.04),{m:z(f.x,u+.15+M*.3,f.z,0,(T(M,1,1)-.5)*.08,0),color:C,tip:()=>1});y.add(new ue(1.05,.08,1.05),{m:z(f.x,u+.15+8*.3-.06,f.z),color:C,tip:()=>1});let ge=new I(f.x,u+.2+8*.3,f.z),Se=(M,k,te)=>{let ve=te==="front"?0:Math.PI/2,Pe=(Ot,kt,Tt)=>te==="front"?[M+Ot,k+kt,o/2+Tt]:[r/2+Tt,k+kt,M-Ot],Te=(Ot,kt,Tt,xn,Vn,qi,Zn,Yi,Zi=0)=>{let[Li,S,K]=Pe(Vn,qi,Zn);Ot.add(new ue(kt,Tt,xn),{m:z(Li,S,K,0,ve,0),color:Yi,tip:()=>Zi})},fe=P(.55);Te(y,1.32,.09,.4,0,.53,0,fe),Te(y,1.32,.09,.4,0,-.53,0,fe),Te(y,.09,1.1,.4,-.62,0,0,fe),Te(y,.09,1.1,.4,.62,0,0,fe),Te(y,.05,1,.06,0,0,0,fe),Te(y,1.2,.05,.06,0,0,0,fe),Te(y,1.45,.06,.3,0,-.6,.2,fe,1),[-1,1].forEach(Ot=>Te(y,.55,1.05,.04,Ot*.98,0,.27,kt=>{let Tt=.42+T(kt.x*9,kt.y*2,kt.z*9)*.1,xn=Math.abs((kt.y+5)%.14-.07)<.012?.75:1;return[Tt*.9*xn,Tt*.95*xn,Tt*.92*xn]}));let[ct,Dt,cn]=Pe(0,0,0);b.add(new fn(1.2,1),{m:z(ct,Dt,cn,0,ve,0),color:F(1,1,1)}),b.add(new fn(1.2,1),{m:z(ct,Dt,cn,0,ve+Math.PI,0),color:F(1,1,1)}),[-1,1].forEach(Ot=>Te(R,.3,1.15,.03,Ot*.78,.02,-.24,kt=>{let Tt=.78+Math.sin(kt.x*60+kt.z*60)*.04;return[Tt,Tt*.95,Tt*.86]})),Te(R,1.9,.03,.03,0,.62,-.24,F(.3,.25,.2))};Se(1.35,1.45,"front"),Se(.3,1.45,"right"),[[h-.05,.08],[m+.05,.08]].forEach(([M,k])=>y.add(new ue(k,x,.42),{m:z(M,x/2,o/2),color:P(.55),tip:()=>0})),y.add(new ue(m-h+.3,.12,.44),{m:z((h+m)/2,x+.05,o/2),color:P(.55),tip:()=>1});for(let M=0;M<11;M++){let k=-3.25+M*.6+.3;y.add(new ue(.57,.08,2.2),{m:z(k,.16,o/2+1.25,0,(T(M,2,2)-.5)*.01,0),color:P(.52+M%3*.04),tip:()=>1})}y.add(new ue(6.65,.14,.08),{m:z(.05,.1,o/2+2.36),color:P(.45),tip:()=>0}),y.add(new ue(1.4,.07,.3),{m:z((h+m)/2,.05,o/2+2.55),color:P(.5),tip:()=>1});let Qe=-3.4,Be=.6;y.add(new ue(Be-Qe,.08,2.55,4,1,4),{m:z((Qe+Be)/2,2.32,o/2+1.3,-.12,0,0),color:(M,k)=>{let te=(k.y<0?.62:.32)+T(M.x*3,0,M.z*9)*.1;return k.y<0?[te,te*.8,te*.6]:[te,te*.93,te*.88]},tip:(M,k)=>k.y>0?1:0}),[Qe+.25,Be-.25].forEach(M=>{y.add(new ue(.14,2.2,.14),{m:z(M,1.1,o/2+2.2),color:P(.5),tip:()=>0}),y.add(new ue(.08,.7,.08),{m:z(M,1.95,o/2+1.95,.75,0,0),color:P(.5),tip:()=>0})}),y.add(new ue(Be-Qe,.14,.14),{m:z((Qe+Be)/2,2.12,o/2+2.2),color:P(.45),tip:()=>1}),y.add(new ue(1.4,.06,.4),{m:z(1.45,.47,o/2+.48),color:P(.55),tip:()=>1}),[[.85],[2.05]].forEach(([M])=>y.add(new ue(.06,.3,.36),{m:z(M,.32,o/2+.48),color:P(.45),tip:()=>0})),y.add(new ue(.04,.04,.3),{m:z(-.5,2,o/2+.3),color:X(.15,.15,.15),tip:()=>0}),y.add(new ue(.2,.04,.2),{m:z(-.5,1.98,o/2+.42),color:X(.15,.15,.15),tip:()=>1}),w.add(new ue(.15,.22,.15),{m:z(-.5,1.84,o/2+.42),color:F(1,1,1)}),y.add(new Ke(.32,.29,.85,14),{m:z(r/2+.55,.42,o/2-.45),color:M=>{let k=.45+Math.sin(Math.atan2(M.z,M.x)*14)*.03;return[k,k*.8,k*.6]},tip:(M,k)=>k.y>.5?1:0}),[.12,.72].forEach(M=>y.add(new Ke(.33,.33,.04,14,1,!0),{m:z(r/2+.55,M,o/2-.45),color:X(.2,.2,.21),tip:()=>0}));for(let M=0;M<4;M++)for(let k=0;k<9-M;k++){let te=-1.6+k*.19+M*.09,ve=.11+M*.18;y.add(new Ke(.09+T(k,M,1)*.03,.1,.7,7),{m:z(-r/2-.58,ve,te,0,0,Math.PI/2),color:(Pe,Te)=>Math.abs(Te.x)>.9?[.74,.6,.42]:P(.45)(Pe),tip:()=>1})}y.add(new Ke(.3,.34,.5,10),{m:z(-r/2-1.4,.25,1.4),color:(M,k)=>k.y>.5?[.7,.58,.42]:P(.45)(M),tip:(M,k)=>k.y>.5?1:0}),y.add(new Ke(.025,.03,.75,6),{m:z(-r/2-1.3,.75,1.4,0,0,-.55),color:P(.62),tip:()=>0}),y.add(new ue(.2,.12,.03),{m:z(-r/2-1.48,.52,1.4,0,0,-.55),color:X(.35,.36,.38),tip:()=>0});for(let M=0;M<p/.5;M++)y.add(new ue(1.8,.08,.44),{m:z(-1.3+(M*7%5-2)*.01,.2-M*.012,E+M*.5,0,(M*3%5-2)*.012,0),color:P(.5+M*11%9/60),tip:()=>1});for(let M=0;M<=p/2.2;M++)[-1,1].forEach(k=>{y.add(new Ke(.09,.09,2.6,6),{m:z(-1.3+k*.85,-1.1-M*.03,E+M*2.2),color:P(.36),tip:()=>0})});[-1,1].forEach(M=>{y.add(new Ke(.06,.06,1.3,6),{m:z(-1.3+M*.85,.85,E+p-.4),color:P(.36),tip:()=>0}),w.add(new ue(.16,.2,.16),{m:z(-1.3+M*.85,1.6,E+p-.4),color:F(1,1,1)})});for(let M=0;M<c-1;M++){let k=a+M*l+l/2;[["front",o/2],["back",-o/2]].forEach(([te,ve])=>$(-r/2+.05,r/2-.05,k,O[te]).forEach(([Pe,Te])=>{y.add(new ue(Te-Pe,.035,.02),{m:z((Pe+Te)/2,k,ve+Math.sign(ve)*(a-.03)),color:fe=>{let ct=.72+T(fe.x*9,fe.y*30,0)*.12;return[ct,ct*.95,ct*.86]},tip:()=>1})})),[["left",-r/2],["right",r/2]].forEach(([te,ve])=>$(-o/2+.05,o/2-.05,k+l/2,O[te]).forEach(([Pe,Te])=>{y.add(new ue(.02,.035,Te-Pe),{m:z(ve+Math.sign(ve)*(a-.03),k+l/2,(Pe+Te)/2),color:fe=>{let ct=.72+T(0,fe.y*30,fe.z*9)*.12;return[ct,ct*.95,ct*.86]},tip:()=>1})}))}[-1,1].forEach(M=>y.add(new Ke(.06,.06,o+1.3,8,1,!0,0,Math.PI),{m:z(M*(Z+.06),u+g-ee-.14,0,Math.PI/2,0,M>0?Math.PI:0),color:X(.4,.4,.42),tip:()=>0})),y.add(new Ke(.035,.035,u+g-ee-.2,8),{m:z(r/2+.6,(u+g-ee)/2+.4,o/2-.45-.05),color:X(.4,.4,.42),tip:()=>0}),y.add(new Ke(.015,.02,.7,6),{m:z(0,u+g+.5,-1.4),color:X(.18,.18,.19),tip:()=>0}),y.add(new ue(.02,.02,.5),{m:z(0,u+g+.62,-1.4),color:X(.18,.18,.19),tip:()=>0}),y.add(new dn(.05,.1,4),{m:z(0,u+g+.62,-1.15,Math.PI/2,0,0),color:X(.18,.18,.19),tip:()=>0});{let M=(k,te,ve,Pe,Te=1,fe=1,ct=1,Dt=0)=>y.add(k,{m:z(0,u+g+.88+ve,-1.4+Pe,0,Math.PI/2,Dt,Te,fe,ct),color:X(.16,.16,.17),tip:()=>0});M(new ue(.28,.13,.02),0,0,0),M(new ue(.11,.1,.02),0,.11,-.13),[-1,1].forEach(k=>M(new dn(.03,.06,3),0,.19,-.13+k*.035)),M(new ue(.03,.2,.02),0,.12,.16,1,1,1,.4)}let Lt=(M,k,te)=>{let ve=new Et().compose(new I(M,.82,k),new Gt().setFromAxisAngle(new I(0,1,0),te),new I(1,1,1));y.add(new ue(1.3,.2,.24),{m:ve.clone().multiply(z(0,0,.12)),color:P(.45),tip:()=>0}),y.add(new ue(1.24,.02,.2),{m:ve.clone().multiply(z(0,.09,.12)),color:()=>[.25,.18,.12],tip:()=>1});let Pe=[[.75,.3,.3],[.85,.7,.35],[.75,.62,.8],[.9,.88,.85]];for(let Te=0;Te<9;Te++){let fe=-.55+Te*.14,ct=.1+T(Te,M,1)*.1;y.add(new Ke(.006,.006,ct,4),{m:ve.clone().multiply(z(fe,.1+ct/2,.12+(Te%2-.5)*.08)),color:()=>[.3,.42,.24],tip:()=>0}),y.add(new Qt(.03,6,5),{m:ve.clone().multiply(z(fe,.1+ct,.12+(Te%2-.5)*.08)),color:()=>Pe[Te%4],tip:()=>0})}};Lt(1.35,o/2+.2,0),Lt(r/2+.2,-.3,Math.PI/2),y.add(new ue(1,.015,.6),{m:z((h+m)/2,.205,o/2+.55),color:G(M=>Math.floor((M.x+9)*12)%2?[.42,.33,.22]:[.5,.4,.27]),tip:()=>1}),y.add(new Ke(.015,.015,1.2,6),{m:z(h-.3,.8,o/2+.25,.08,0,.12),color:P(.6),tip:()=>0}),y.add(new dn(.12,.3,8),{m:z(h-.24,.32,o/2+.24),color:()=>[.68,.58,.36],tip:()=>0}),[[-2.9,0],[-2.75,.32]].forEach(([M,k],te)=>{y.add(new ue(.48,.32,.4),{m:z(M,.36+k,o/2+1.9,0,te*.3,0),color:ve=>{let Pe=.55+(Math.abs((ve.y+9)*9%1-.5)<.1?-.1:0)+T(ve.x*9,ve.y,ve.z*9)*.08;return[Pe,Pe*.84,Pe*.62]},tip:(ve,Pe)=>Pe.y>.5?1:0})}),y.add(new Ke(.05,.06,1.7,8),{m:z(Be+.6,.85,o/2+2.9),color:P(.4),tip:()=>0}),y.add(new ue(.2,.05,.2),{m:z(Be+.6,1.72,o/2+2.9),color:X(.15,.15,.15),tip:()=>1}),w.add(new ue(.15,.2,.15),{m:z(Be+.6,1.84,o/2+2.9),color:()=>[1,1,1]}),y.add(new dn(.15,.12,4),{m:z(Be+.6,2,o/2+2.9,0,Math.PI/4,0),color:X(.15,.15,.15),tip:()=>1});for(let M=0;M<6;M++){let k=(h+m)/2-1.6-M*.65+Math.sin(M*1.7)*.2,te=o/2+2.9+M*.35;y.add(new Ke(.28+T(M,3,3)*.1,.3,.06,9),{m:z(k,0,te,0,M,0,1,1,.8),color:C,tip:()=>1})}let pt=r/2-a,Je=o/2-a;for(let M=-pt,k=0;M<pt-.01;M+=.2,k++){let te=gn("wood",Te=>{let fe=(.5+k%4*.025)*(.92+T(Te.x*4,0,Te.z*1.2)*.16)*(Math.abs((Te.z+9+k*.37)%1.6-.8)<.01?.7:1);return[fe,fe*.8,fe*.6]}),ve=M+.1;(ve>at.x0&&ve<at.x1?[[-Je-.05,at.bottom],[at.top,Je+.05]]:[[-Je-.05,Je+.05]]).forEach(([Te,fe])=>{fe-Te>.02&&R.add(new ue(.195,.06,fe-Te),{m:z(ve,.09,(Te+fe)/2),color:te})})}for(let M=at.bottom;M<=1.5;M+=.55)R.add(new ue(.05,.9,.05),{m:z(at.x0-.02,.57,M),color:P(.5)});R.add(new ue(.07,.06,1.5-at.bottom+.05),{m:z(at.x0-.02,1.04,(at.bottom+1.5)/2),color:P(.55)}),R.add(new ue(at.x1-at.x0+.05,.06,.07),{m:z((at.x0+at.x1)/2,1.04,at.bottom-.02),color:P(.55)}),[at.x0+.5,at.x1-.03].forEach(M=>R.add(new ue(.05,.9,.05),{m:z(M,.57,at.bottom-.02),color:P(.5)})),R.add(new ue(.03,.16,.36),{m:z(at.x0-.05,.86,1.5),color:P(.62)}),R.add(new Ke(.17,.17,.04,24),{m:z(-.4,1.8,Je-.03,Math.PI/2,0,0),color:P(.45)}),R.add(new Ke(.14,.14,.01,24),{m:z(-.4,1.8,Je-.055,Math.PI/2,0,0),color:gn("paper",()=>[.9,.87,.8])}),R.add(new ue(.008,.1,.006),{m:z(-.4,1.83,Je-.065,0,0,.5),color:()=>[.1,.1,.1]}),R.add(new ue(.008,.12,.006),{m:z(-.4,1.84,Je-.066,0,0,-1.9),color:()=>[.1,.1,.1]}),R.add(new Ke(.015,.015,1.5,6),{m:z(f.x,1.62,-Je+.62,0,0,Math.PI/2),color:X(.2,.2,.2)}),[-.5,-.1,.35].forEach((M,k)=>{R.add(new Ke(.1-k*.015,.08-k*.012,.13,12),{m:z(f.x+M,1.42,-Je+.64),color:X(.62,.36,.22)}),R.add(new Ke(.008,.008,.14,4),{m:z(f.x+M,1.55,-Je+.64),color:X(.2,.2,.2)})}),R.add(new Qt(.12,12,8),{m:z(f.x-.7,.31,-Je+.75,0,0,0,1,.8,1),color:X(.2,.2,.22)}),R.add(new Ke(.015,.03,.12,6),{m:z(f.x-.58,.36,-Je+.75,0,0,-.9),color:X(.2,.2,.22)}),[[-.6,.14],[-.5,.2],[.55,.1]].forEach(([M,k])=>R.add(new Ke(.025,.025,k,8),{m:z(f.x+M,1.52+k/2,-Je+.4),color:()=>[.9,.86,.76]})),[[.1,[.4,.2,.18]],[.16,[.24,.3,.36]],[.21,[.5,.45,.32]]].forEach(([M,k])=>R.add(new ue(.05,.22,.16),{m:z(f.x+M,1.63,-Je+.4),color:()=>k})),R.add(new ue(.9,.012,.6),{m:z(-2,.126,-.85),color:G(M=>Math.floor((M.x+3)*8)%2?[.62,.56,.46]:[.4,.42,.38])}),R.add(new ue(2.3,.014,1.55),{m:z(.55,.127,.5),color:G(M=>{let k=Math.floor(Math.abs(M.x-.55)/.17)%3;return Math.abs(M.x-.55)>1.05||Math.abs(M.z-.5)>.68?[.32,.2,.17]:k===0?[.58,.26,.2]:k===1?[.8,.7,.52]:[.28,.36,.38]})}),[-1.1,1.1].forEach(M=>R.add(new ue(r-.2,.2,.2),{m:z(0,u-.02,M),color:P(.42)})),R.add(new ue(.2,.22,o+.2),{m:z(0,u+g-.2,0),color:P(.42)}),[-1,1].forEach(M=>[-1.8,0,1.8].forEach(k=>R.add(new ue(de-.6,.14,.1),{m:z(M*(Z-.3)/2,u+g-ee*.47-.1,k,0,0,-M*xe),color:P(.4)})));let he=f;R.add(new ue(1.95,.12,1),{m:z(he.x,.17,-Je+.5),color:C}),[-1,1].forEach(M=>R.add(new ue(.36,1.25,.7),{m:z(he.x+M*.76,.85,-Je+.35),color:C})),R.add(new ue(1.2,1.25,.2),{m:z(he.x,.85,-Je+.1),color:M=>{let k=C(M);return[k[0]*.45,k[1]*.42,k[2]*.4]}}),R.add(new ue(2,.16,.42),{m:z(he.x,1.44,-Je+.4),color:P(.42)});for(let M=0;M<4;M++)R.add(new ue(1.3-M*.04,.3,.55),{m:z(he.x,1.67+M*.3,-Je+.27),color:C});[[-.2,.3],[.15,-.25],[0,.05]].forEach(([M,k])=>R.add(new Ke(.07,.08,.7,7),{m:z(he.x+M*.4,.3,-Je+.42,0,k,Math.PI/2),color:(te,ve)=>Math.abs(ve.x)>.8?[.2,.15,.1]:[.18,.13,.1]})),w.add(new ue(.9,.05,.45),{m:z(he.x,.25,-Je+.42),color:F(1,.62,.3)}),R.add(new Ke(.28,.24,.32,10,1,!0),{m:z(he.x-1.25,.28,-Je+.35),color:P(.5)});for(let M=0;M<5;M++)R.add(new Ke(.05,.05,.55,6),{m:z(he.x-1.25+(M-2)*.08,.42+M%2*.04,-Je+.35,.2*(M-2),0,Math.PI/2+.1),color:P(.5)});let ye=-pt+.02,Ye=ye+1.95,qe=-Je+.02,De=qe+1,gt=(ye+Ye)/2,Rt=(qe+De)/2;[[ye+.05,qe+.05,.9],[ye+.05,De-.05,.9],[Ye-.05,qe+.05,.6],[Ye-.05,De-.05,.6]].forEach(([M,k,te])=>R.add(new ue(.09,te,.09),{m:z(M,.12+te/2,k),color:P(.45)})),R.add(new ue(.06,.45,De-qe-.1),{m:z(ye+.05,.75,Rt),color:P(.5)}),R.add(new ue(Ye-ye,.12,De-qe),{m:z(gt,.36,Rt),color:P(.45)}),R.add(new ue(Ye-ye-.1,.16,De-qe-.08),{m:z(gt,.5,Rt),color:F(.86,.84,.78,"fabric")}),R.add(new ue(1.3,.05,De-qe+.04),{m:z(Ye-.68,.6,Rt),color:G(M=>{let k=(Math.floor(M.x*6)+Math.floor(M.z*6))%2;return Math.abs(M.x*6%1-.5)<.06||Math.abs(M.z*6%1-.5)<.06?[.82,.74,.5]:k?[.48,.18,.16]:[.36,.2,.2]})}),R.add(new ue(.08,.25,De-qe+.04),{m:z(Ye-.03,.5,Rt),color:F(.46,.2,.18,"fabric")});let St=new Qt(1,12,8);R.add(St,{m:z(ye+.32,.64,Rt,0,0,0,.2,.08,.36),color:F(.92,.9,.86,"fabric")}),R.add(new ue(.7,.42,.42),{m:z(Ye+.45,.33,qe+.25),color:P(.5)}),R.add(new ue(.72,.05,.44),{m:z(Ye+.45,.4,qe+.25),color:X(.25,.25,.26)});let Ae={x:.9,z:.6};R.add(new ue(1.3,.06,.85),{m:z(Ae.x,.88,Ae.z),color:P(.55)}),[[-.58,-.36],[.58,-.36],[-.58,.36],[.58,.36]].forEach(([M,k])=>R.add(new ue(.07,.73,.07),{m:z(Ae.x+M,.48,Ae.z+k),color:P(.45)})),[-1,1].forEach(M=>{let k=Ae.z+M*.68;R.add(new ue(.44,.05,.42),{m:z(Ae.x,.58,k),color:P(.5)}),[[-.18,-.17],[.18,-.17],[-.18,.17],[.18,.17]].forEach(([te,ve])=>R.add(new ue(.045,.46,.045),{m:z(Ae.x+te,.35,k+ve),color:P(.45)})),R.add(new ue(.44,.5,.04),{m:z(Ae.x,.85,k+M*.2),color:P(.5)})}),w.add(new ue(.12,.16,.12),{m:z(Ae.x+.35,1,Ae.z-.15),color:F(1,1,1)}),R.add(new ue(.16,.03,.16),{m:z(Ae.x+.35,.92,Ae.z-.15),color:X(.15,.15,.15)}),R.add(new ue(.14,.03,.14),{m:z(Ae.x+.35,1.09,Ae.z-.15),color:X(.15,.15,.15)}),R.add(new Ke(.045,.04,.1,10),{m:z(Ae.x-.3,.96,Ae.z+.2),color:F(.75,.73,.7,"paper")}),R.add(new ue(.22,.04,.3),{m:z(Ae.x-.25,.93,Ae.z-.2,0,.3,0),color:F(.3,.36,.42)}),R.add(new Ke(.16,.1,.07,14,1,!0),{m:z(Ae.x+.05,.95,Ae.z+.15),color:P(.5)}),[[0,0],[.07,.05],[-.06,.05],[0,-.07]].forEach(([M,k],te)=>R.add(new Qt(.055,10,7),{m:z(Ae.x+.05+M,.99+(te===3?.04:0),Ae.z+.15+k),color:F(.66,.66,.65)})),[1.35,1.75].forEach(M=>{R.add(new ue(.26,.04,1.3),{m:z(-pt+.14,M,.9),color:P(.5)}),R.add(new ue(.04,.16,.04),{m:z(-pt+.04,M-.1,.35),color:P(.4)}),R.add(new ue(.04,.16,.04),{m:z(-pt+.04,M-.1,1.45),color:P(.4)})}),[[.4,.08,.16,[.62,.66,.66]],[.6,.06,.12,[.6,.58,.5]],[.78,.07,.2,[.55,.6,.62]]].forEach(([M,k,te,ve])=>{R.add(new Ke(k,k,te,10),{m:z(-pt+.14,1.37+te/2,M),color:F(...ve)}),R.add(new Ke(k*.8,k*.8,.03,10),{m:z(-pt+.14,1.38+te,M),color:F(.45,.35,.25)})}),[[1,.24,[.45,.22,.2]],[1.06,.2,[.25,.32,.36]],[1.12,.26,[.4,.38,.28]],[1.18,.22,[.6,.55,.45]],[1.26,.19,[.3,.3,.32]]].forEach(([M,k,te],ve)=>{R.add(new ue(.18,k,.05),{m:z(-pt+.14,1.77+k/2,M,ve===4?.25:0,0,0),color:F(...te)})}),R.add(new Ke(.015,.015,.12,5),{m:z(-2.6,1.7,Je-.06,Math.PI/2,0,0),color:P(.4)}),R.add(new ue(.42,.85,.12),{m:z(-2.6,1.25,Je-.1),color:G(M=>{let k=.32+T(M.x*9,M.y*9,0)*.04;return[k*.85,k,k*.9]})}),[-2.7,-2.48].forEach(M=>{R.add(new ue(.11,.26,.13),{m:z(M,.25,Je-.2),color:F(.2,.16,.13)}),R.add(new ue(.11,.07,.26),{m:z(M,.155,Je-.26),color:F(.2,.16,.13)})}),R.add(new ue(.5,.38,.03),{m:z(-.25,1.6,-Je+.02),color:P(.4)}),R.add(new fn(.4,.28),{m:z(-.25,1.6,-Je+.04),color:M=>M.y>1.6?[.7,.72,.74]:[.4,.45,.4]});let se=new jt,ie=m-h-.04;for(let M=0;M<5;M++)se.add(new ue(ie/5-.008,x-.04,.06),{m:z(.02+ie/10+M*ie/5,(x-.04)/2,0),color:P(.5+M%2*.04),tip:()=>0});[.35,x-.4].forEach(M=>se.add(new ue(ie-.1,.12,.04),{m:z(.02+ie/2,M,-.05),color:P(.46),tip:()=>0})),se.add(new ue(.1,Math.hypot(ie-.2,x-.95),.04),{m:z(.02+ie/2,x/2-.02,-.05,0,0,Math.atan2(ie-.2,x-.95)),color:P(.46),tip:()=>0}),[.06,-.08].forEach(M=>se.add(new Ke(.02,.02,.14,6),{m:z(ie-.1,1,M),color:X(.18,.18,.19),tip:()=>0})),[.3,x-.3].forEach(M=>se.add(new ue(.4,.05,.075),{m:z(.22,M,0),color:X(.18,.18,.19),tip:()=>0}));let we=new jt;we.add(new Qt(1,14,6,0,Math.PI*2,Math.PI/2,Math.PI/2),{m:z(0,0,0,0,0,0,1.25,.42,.5),color:M=>M.y>-.05?[.55,.4,.28]:[.4,.3,.22],tip:()=>1}),we.add(new ue(.16,.05,.9),{m:z(.1,-.08,0),color:F(.5,.4,.3),tip:()=>1}),we.add(new ue(.16,.05,.75),{m:z(-.6,-.08,0),color:F(.5,.4,.3),tip:()=>1}),we.add(new Ke(.025,.025,2.2,5),{m:z(.2,0,.1,0,.3,1.45),color:F(.55,.45,.32),tip:()=>0});let re={value:1},_e=Bn({...e,uFrost:{value:0}},re,{color:13812656,snowMask:!0,snowBias:.12,grain:.022,rich:!0}),Ee=Bn({...e,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0}},re,{color:14865600,grain:.018,rich:!0,indoor:!0}),Ue=Bn({...e,uFrost:{value:0}},re,{color:13812656,snowMask:!0,side:Nn,rich:!0,grain:.02}),D=new Ln({color:1315860}),st=new Ln({color:11122624,transparent:!0,opacity:.16,depthWrite:!1}),Ce=new Mn;Ce.position.set(Ht.x,Ht.y,Ht.z),Ce.rotation.y=Ht.yaw,Ce.scale.setScalar(s);let A=new xt(y.geometry(),_e);A.castShadow=!0,A.receiveShadow=!0;let d=new xt(R.geometry(),Ee);d.receiveShadow=!0;let L=new xt(w.geometry(),D),q=new xt(b.geometry(),st);q.renderOrder=2;let V=new xt(se.geometry(),_e);V.castShadow=!0;let ce=new Mn;ce.position.set(h+.02,.1,o/2),ce.add(V);let le=new xt(we.geometry(),Ue);le.castShadow=!0,le.position.set(.9,0,E+p-2.5),le.rotation.y=.12;let Q=new Ln({color:16752704,transparent:!0,opacity:.85,blending:Vi,depthWrite:!1}),B=[[-.18,.28],[.12,.34],[0,.42],[.25,.22]].map(([M,k])=>{let te=new xt(new dn(.09,1,7,1,!0).translate(0,.5,0),Q);return te.position.set(f.x+M,.3,-Je+.42),te.userData.h=k,Ce.add(te),te});Ce.add(A,d,L,q,ce,le),i.add(Ce),Ce.updateMatrixWorld(!0);let Re=Md({group:Ce,mats:{inn:Ee,glow:D},camera:n,U:t}),Ie=new Gi(16752728,0,46,1.4);Ie.position.copy(new I(f.x,.9,-Je+1.1)).applyAxisAngle(new I(0,1,0),Ht.yaw).multiplyScalar(s).add(Ce.position),i.add(Ie);let Le=Ie.position.clone(),He=(()=>{let k=new Kt,te=new Float32Array(90*3),ve=new Float32Array(90);for(let fe=0;fe<90;fe++)ve[fe]=fe/90;k.setAttribute("position",new hn(te,3)),k.setAttribute("aSeed",new hn(ve,1));let Pe=new on({transparent:!0,depthWrite:!1,uniforms:{uTime:t.uTime,uOpacity:{value:0},uColor:{value:new lt(13224393)},uSize:{value:70}},vertexShader:`
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
        }`}),Te=new ki(k,Pe);return Te.frustumCulled=!1,Te.position.copy(Ce.localToWorld(ge.clone())),i.add(Te),Te})(),$e=(M,k)=>{let te=(M-Ht.x)/s,ve=(k-Ht.z)/s,Pe=Math.cos(Ht.yaw),Te=Math.sin(Ht.yaw);return[te*Pe-ve*Te,te*Te+ve*Pe]},je=(M,k)=>{let te=Math.cos(Ht.yaw),ve=Math.sin(Ht.yaw);return[Ht.x+(M*te+k*ve)*s,Ht.z+(-M*ve+k*te)*s]},et=[[-r/2-.3,r/2+.3,-o/2-a,-o/2+a],[-r/2-a,-r/2+a,-o/2-.3,o/2+.3],[r/2-a,r/2+a,-o/2-.3,o/2+.3],[-r/2-.3,h,o/2-a,o/2+a],[m,r/2+.3,o/2-a,o/2+a],[ye,Ye,qe,De],[Ye+.08,Ye+.82,qe,qe+.5],[Ae.x-.65,Ae.x+.65,Ae.z-.43,Ae.z+.43],[Ae.x-.25,Ae.x+.25,Ae.z-.95,Ae.z-.45],[Ae.x-.25,Ae.x+.25,Ae.z+.45,Ae.z+.95],[he.x-1,he.x+1,-Je-.1,-Je+1],[he.x-1.55,he.x-.95,-Je,-Je+.65],[-pt,-pt+.3,.25,1.55],[.8,2.15,o/2+.26,o/2+.7],[-r/2-.95,-r/2-.2,-1.75,0],[r/2+.2,r/2+.9,o/2-.8,o/2-.1],[-r/2-1.75,-r/2-1.05,1.05,1.75],[Qe+.15,Qe+.35,o/2+2.1,o/2+2.3],[Be-.35,Be-.15,o/2+2.1,o/2+2.3]];et.push([at.x0-.07,at.x0+.02,at.bottom-.05,1.5],[at.x0,at.x1,at.bottom-.09,at.bottom],[-3.2,-2.5,o/2+1.65,o/2+2.15],[Be+.5,Be+.7,o/2+2.8,o/2+3]);let H={x:-.4,z:-2.6},Ne=[[Xe.x0-1,Xe.x1+1,Xe.z0-1,Xe.z0+.45],[Xe.x0-1,Xe.x0+.45,Xe.z0-1,Xe.z1+1],[Xe.x1-.45,Xe.x1+1,Xe.z0-1,Xe.z1+1],[Xe.x0-1,Xe.x1+1,Xe.z1-.02,Xe.z1+1],[at.x0-.06,at.x1+.06,-.6,Xe.z1],[H.x-.95,H.x+.95,H.z-.48,H.z+.48],[H.x-.27,H.x+.27,H.z+.5,H.z+1.05],[-4.1,-3.1,-5.7,-4.7],[-1.5,-.5,-6.9,-5.9],[-2.75,-2.05,-6.35,-5.65],[-4.8,-4.4,-6.6,-6.2],[.86,1.54,-4.34,-3.66],[-6.1,-5.5,1.7,2.4],[4.25,4.95,Xe.z0+.42,Xe.z0+1]],Me=[h,m,o/2-.1,o/2+.1],ke=[h-.06,h+.08,o/2-ie-.05,o/2],Ve=(M,k,[te,ve,Pe,Te],fe)=>M>te-fe&&M<ve+fe&&k>Pe-fe&&k<Te+fe,be={open:!1,a:0,from:0,t0:-1e9},N=je((h+m)/2,o/2),W=M=>M.feet===void 0?1e9:(M.feet-Ht.y)/s,j=M=>M>-.7?"ground":M<-3.2?"study":"stairs",pe=(M,k)=>M>at.x0&&M<at.x1&&k>at.bottom&&k<at.top,tt=(M,k)=>M>Xe.x0&&M<Xe.x1&&k>Xe.z0&&k<Xe.z1,U=(M,k)=>M>-r/2+a-.05&&M<r/2-a+.05&&k>-o/2+a&&k<o/2+a+.05,ze=(M,k,te,ve)=>{let Pe=[je(M,te),je(k,te),je(M,ve),je(k,ve)];return[Math.min(...Pe.map(Te=>Te[0])),Math.max(...Pe.map(Te=>Te[0])),Math.min(...Pe.map(Te=>Te[1])),Math.max(...Pe.map(Te=>Te[1]))]};return{group:Ce,study:Re,feet:void 0,holeBox:ze(-r/2+a,r/2-a,-o/2+a,o/2-a),studyBox:ze(Xe.x0-.3,Xe.x1+.3,Xe.z0-.3,Xe.z1+.3),blocked(M,k,te=0){let[ve,Pe]=$e(M,k);if(Math.abs(ve)>Xe.x1+3||Pe<Xe.z0-3||Pe>o/2+4)return!1;let Te=.17+te/s,fe=j(W(this));if(fe==="stairs")return ve<at.x0+Te||ve>at.x1-Te||Pe>at.top+.05;if(fe==="study"){if(!tt(ve,Pe))return!0;for(let ct of Ne)if(Ve(ve,Pe,ct,Te))return!0;return!1}if(Math.abs(ve)>r/2+3||Pe<-o/2-3)return!1;for(let ct of et)if(Ve(ve,Pe,ct,Te))return!0;return!!(be.a<.5?Ve(ve,Pe,Me,Te):Ve(ve,Pe,ke,Te*.6))},inside(M,k){let[te,ve]=$e(M,k);return Math.abs(te)<r/2&&Math.abs(ve)<o/2||tt(te,ve)&&W(this)<-1},floorAt(M,k){let[te,ve]=$e(M,k),Pe=Dt=>Ht.y+Dt*s,Te=W(this),fe=[];if(pe(te,ve)?fe.push([Rs(ve),!0]):U(te,ve)&&fe.push([.12,!0]),tt(te,ve)&&fe.push([Xe.floor,!0]),te>-3.3&&te<3.4&&ve>=o/2+a+.05&&ve<o/2+2.4&&fe.push([.2,!1]),te>-2.25&&te<-.35&&ve>E-.3&&ve<E+p&&fe.push([.24-(ve-E)*.024,!1]),!fe.length)return null;let ct=null;for(let Dt of fe)Dt[0]<=Te+.6&&(!ct||Dt[0]>ct[0])&&(ct=Dt);return ct||(ct=fe.reduce((Dt,cn)=>cn[0]<Dt[0]?cn:Dt)),{y:Pe(ct[0]),under:ct[1]}},door:{mesh:V,near(M,k){return Math.hypot(M-N[0],k-N[1])<13},get open(){return be.open},canToggle(M,k){if(!be.open)return!0;let[te,ve]=$e(M,k);return!Ve(te,ve,[h-.1,m+.1,o/2-ie-.1,o/2+.25],.17)},toggle(M){return be.open=!be.open,be.from=be.a,be.t0=M,be.open}},update(M,k,te,ve){let Pe=M.pCabin,Te=Pe>.01;Te&&(this.syncT>te-1500||(this.syncT=te,Re.sync()),Re.update(k,te)),Re.lampLight.intensity=Te?120*(.96+.04*Math.sin(k*3.1)):0,Ce.visible=Te,He.visible=Te&&Pe>.5,Ce.scale.setScalar(s*Math.max(.001,Pe));let fe=Math.min(1,(te-be.t0)/900),ct=be.open?1-Math.pow(1-fe,3)*Math.cos(fe*3.2):1-Math.pow(1-fe,4);be.a=be.from+((be.open?1:0)-be.from)*ct,ce.rotation.y=be.a*1.72;let Dt=Math.min(1,M.pGlow),cn=.86+.08*Math.sin(k*9.1+Math.sin(k*2.7)*2)+.06*Math.sin(k*23.3);D.color.setRGB(.07,.07,.075).lerp(new lt(1.3,.8,.42),Dt*cn),B.forEach((Ot,kt)=>{let Tt=Ot.userData.h*(.75+.35*Math.sin(k*(7+kt*1.7)+kt*2)*Math.sin(k*(3.1+kt)));Ot.scale.set(1,Math.max(.05,Tt*Dt),1),Ot.visible=Dt>.05}),Q.opacity=.75*Dt,Ie.intensity=Dt*Pe*220*cn,Ie.position.set(Le.x+Math.sin(k*5.3)*.15,Le.y+Math.sin(k*7.1)*.1,Le.z),He.material.uniforms.uColor.value.copy(M.fog).multiplyScalar(1.1).addScalar(.05),He.material.uniforms.uOpacity.value=Math.min(Pe,.35+Dt*.5),le.position.y=(ve+.9+Math.sin(k*.9)*.15-Ht.y)/s,le.rotation.z=Math.sin(k*.7)*.03}}}var Ed={rain:[1,1,1,1,1,1,.65,0,0,1,0,0,.75],frost:[1,1,0,.85,.7,1,.25,1,0,0,1,.55,0],mist:[1,1,1,1,1,1,.35,0,0,0,0,0,1],snow:[1,1,0,.3,.45,1,.6,0,0,0,1,1,0],night:[1,1,.9,1,1,1,1,0,0,0,0,0,.5],aurora:[1,1,0,.6,.6,1,1,1,0,0,.8,.75,0],ocean:[1,0,0,.7,0,0,0,0,1,0,0,0,.3],spring:[1,1,1,1,1,1,.3,0,0,0,0,0,.5],summer:[1,1,.8,1,.7,1,.2,0,0,0,0,0,.2],fall:[1,1,.6,.8,.9,1,.5,0,0,0,0,0,.4]},Pc=["pRocks","pLogs","pFerns","pGrass","pReeds","pCabin","pGlow","pStones","pStacks","pRipples","pFrost","pSnowCover","pMoss"];function wd({scene:i,heightAt:e,U:t,snowColor:n,clear:s=[],camera:r}){let o=xd(20260707),a=(se,ie)=>se+o()*(ie-se),l={uTime:t.uTime,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0},uSnowC:n,uMossC:{value:new lt("#4f6a3c")}},c={};Pc.forEach(se=>{c[se]={value:0}});let u=["leaves","flowers","hives","creek"];u.forEach(se=>{c[se]={value:0}});let g=[],h=[],m=[],x=(se,ie)=>Math.hypot(e(se+2,ie)-e(se-2,ie),e(se,ie+2)-e(se,ie-2))/(2*2),E=(se,ie,we,re=1)=>{let Ee=e(se-2,ie)-e(se+2,ie),Ue=e(se,ie-2)-e(se,ie+2),D=new I(Ee*re,2*2,Ue*re).normalize();return new Gt().setFromUnitVectors(new I(0,1,0),D).multiply(new Gt().setFromAxisAngle(new I(0,1,0),we))},p=(se,ie)=>!s.some(we=>Math.hypot(we.x-se,we.z-ie)<we.r),f=(se,ie,{cast:we=!1,receive:re=!0}={})=>(se.castShadow=we,se.receiveShadow=re,i.add(se),g.push([se,ie]),se),y=160,R=(se,ie,we,re,_e)=>{let Ee=new Map;we.forEach(D=>{let st=Math.floor(D.p.x/y)+","+Math.floor(D.p.z/y);Ee.has(st)||Ee.set(st,[]),Ee.get(st).push(D)});let Ue=new Et;Ee.forEach(D=>{let st=new ai(se,ie,D.length);D.forEach((Ce,A)=>{Ue.compose(Ce.p,Ce.q,Ce.s),st.setMatrixAt(A,Ue)}),st.computeBoundingSphere(),f(st,re,_e)})},w=(se,ie,we,re)=>{let _e=null,Ee=1e9;for(let Ue=0;Ue<900;Ue++){let D=o()*Math.PI*2,st=Math.sqrt(o())*we,Ce=se+Math.cos(D)*st,A=ie+Math.sin(D)*st;re(Ce,A)&&st<Ee&&(Ee=st,_e={x:Ce,z:A})}return _e||{x:se,z:ie}},b={x:Ht.x,z:Ht.z};m.push({x:b.x,z:b.z,r:34});let T=w(-95,-258,50,(se,ie)=>{let we=e(se,ie);return we>9&&we<32&&x(se,ie)<.16});m.push({x:T.x,z:T.z,r:30});let P=(se,ie)=>{let we=new Vr(1,ie),re=we.attributes.position,_e=new I;for(let Ee=0;Ee<re.count;Ee++){_e.fromBufferAttribute(re,Ee);let Ue=1+(an(_e.x*1.6+se,_e.y*1.6,_e.z*1.6)-.5)*.55+(an(_e.x*4+se,_e.y*4,_e.z*4)-.5)*.14;_e.multiplyScalar(Ue),_e.y=_e.y<-.25?-.25+(_e.y+.25)*.2:_e.y,_e.y*=.72,_e.x*=1.12,re.setXYZ(Ee,_e.x,_e.y,_e.z)}return new jt().add(we,{flat:!0,color:Ee=>{let Ue=.5+an(Ee.x*3+se,Ee.y*3,Ee.z*3)*.28+Ee.y*.12;return[Ue,Ue*.99,Ue*.95]}}).geometry()},_=Bn(l,c.pRocks,{color:9277328,snowBias:.05}),C=[[],[],[]],F=[],X=(se,ie,we,re,_e)=>{let Ee=e(se,ie),Ue=new I(we*a(.8,1.25),we*a(.6,1.1),we*a(.8,1.2));re.push({p:new I(se,Ee-we*.12,ie),q:E(se,ie,o()*6.28,.6),s:Ue}),_e&&h.push({x:se,z:ie,r:we*1.05+1.2,key:"pRocks",top:Ee-we*.12+Ue.y*.82,rt:we*.75})};for(let se=0,ie=0;se<260&&ie<2e4;ie++){let we=a(-560,560),re=a(-560,230),_e=e(we,re);if(_e<-1.5||_e>75)continue;let Ue=o()<.25?a(4,9):a(1.2,3.4);m.some(D=>Math.hypot(D.x-we,D.z-re)<D.r+Ue)||!p(we,re)||(X(we,re,Ue,C[se%3],Ue>2.2),se++)}for(let se=0,ie=0;se<70&&ie<9e3;ie++){let we=a(-260,260),re=a(-260,160),_e=e(we,re);_e<-1.2||_e>1.5||m.some(Ee=>Math.hypot(Ee.x-we,Ee.z-re)<Ee.r)||!p(we,re)||(X(we,re,a(1.5,5),C[se%3],!0),se++)}for(let se=0,ie=0;se<700&&ie<2e4;ie++){let we=a(-480,480),re=a(-480,200),_e=e(we,re);_e<-.6||_e>70||!p(we,re)||m.some(Ee=>Math.hypot(Ee.x-we,Ee.z-re)<Ee.r)||(X(we,re,a(.35,1),F,!1),se++)}C.forEach((se,ie)=>R(P(ie*17.3,2),_,se,"pRocks",{cast:!0})),R(P(5.1,1),_,F,"pRocks");let G=se=>{let ie=.42+an(se.x*9,se.y*2,se.z*2)*.22+Math.sin(Math.atan2(se.z,se.y)*9)*.04;return[ie*1,ie*.82,ie*.66]},J=(()=>{let se=new jt,ie=new Ke(1,.9,1,12,5,!0),we=ie.attributes.position,re=new I;for(let Ee=0;Ee<we.count;Ee++){re.fromBufferAttribute(we,Ee);let Ue=1+(an(re.x*3,re.y*6,re.z*3)-.5)*.18;we.setXYZ(Ee,re.x*Ue,re.y,re.z*Ue)}ie.computeVertexNormals(),se.add(ie,{m:z(0,0,0,0,0,Math.PI/2),color:G});let _e=Ee=>{let Ue=Math.hypot(Ee.y,Ee.z),D=.62+Math.sin(Ue*26)*.05-Ue*.12;return[D*1.05,D*.9,D*.72]};return se.add(new Ms(.88,12),{m:z(.5,0,0,0,Math.PI/2,0),color:_e}),se.add(new Ms(.98,12),{m:z(-.5,0,0,0,-Math.PI/2,0),color:_e}),se.add(new Ke(.12,.2,.9,6,1),{m:z(.15,.55,.3,.5,0,-.5,1,1,1),color:G}),se.geometry()})(),O=(()=>{let se=new jt,ie=new Ke(.85,1,1,12,3,!0),we=ie.attributes.position,re=new I;for(let _e=0;_e<we.count;_e++){re.fromBufferAttribute(we,_e);let Ee=Math.atan2(re.z,re.x),Ue=re.y<-.3?1+.35*Math.pow(Math.max(0,Math.sin(Ee*5)),2):1,D=re.y>.45?(an(re.x*4,0,re.z*4)-.5)*.3:0;we.setXYZ(_e,re.x*Ue,re.y+D,re.z*Ue)}return ie.computeVertexNormals(),se.add(ie,{m:z(0,.5,0),color:_e=>G(_e)}),se.add(new Ms(.85,12),{m:z(0,.98,0,-Math.PI/2,0,0),color:_e=>{let Ee=Math.hypot(_e.x,_e.z),Ue=.6+Math.sin(Ee*22)*.05;return[Ue*1.05,Ue*.9,Ue*.7]}}),se.geometry()})(),$=Bn(l,c.pLogs,{color:12036506}),Z=Sd({scene:i,shared:l,U:t,camera:r}),ee=(()=>{let se=new jt,ie=Ue=>{let D=new ue(1,1,1,3,5,2),st=D.attributes.position,Ce=new I;for(let A=0;A<st.count;A++){Ce.fromBufferAttribute(st,A);let d=1-(Ce.y+.5)*.3,L=1+(an(Ce.x*3+Ue,Ce.y*3,Ce.z*3)-.5)*.35,q=Ce.y>.35?1-(Ce.y-.35)*1.2*Math.hypot(Ce.x,Ce.z):1;st.setXYZ(A,Ce.x*d*L*q,Ce.y+(Ce.y>.4?(an(Ce.x*5,Ue,Ce.z*5)-.5)*.15:0),Ce.z*d*L*q)}return D},we=Ue=>D=>{let st=.5+an(D.x*2+Ue,D.y*2,D.z*2)*.22;return[st*.97,st,st*.98]},re=11,_e=15;for(let Ue=0;Ue<re;Ue++){let D=Ue/re*Math.PI*2+a(-.06,.06),st=Math.cos(D)*_e,Ce=Math.sin(D)*_e,A=a(5,9.5),d=Ue===4?.35:a(-.06,.06),L=e(T.x+st,T.z+Ce)-e(T.x,T.z);se.add(ie(Ue*3.7),{m:z(st,L+A/2-.6,Ce,d,-D+Math.PI/2,a(-.05,.05),a(2.2,3.2),A,a(1,1.5)),flat:!0,color:we(Ue)}),h.push({x:T.x+st,z:T.z+Ce,r:3.6,key:"pStones"})}se.add(ie(40),{m:z(3,.4,-2,.1,.7,Math.PI/2-.05,2.6,7,1.4),flat:!0,color:we(40)}),se.add(ie(50),{m:z(-2,.5,2.5,0,.3,0,4.5,1.5,2.6),flat:!0,color:we(50)}),h.push({x:T.x+3,z:T.z-2,r:4.5,key:"pStones"},{x:T.x-2,z:T.z+2.5,r:4,key:"pStones"});let Ee=new xt(se.geometry(),Bn(l,c.pStones,{color:10132636}));return Ee.position.set(T.x,e(T.x,T.z),T.z),f(Ee,"pStones",{cast:!0})})(),xe=(se,ie)=>{let we=new Ke(ie?.85:.5,1.15,1,12,10,!1),re=we.attributes.position,_e=new I;for(let Ee=0;Ee<re.count;Ee++){_e.fromBufferAttribute(re,Ee);let Ue=_e.y+.5,D=1+(an(_e.x*2+se,_e.y*5,_e.z*2)-.5)*.6+Math.sin(_e.y*26+se)*.04;!ie&&Ue>.55&&(D*=1-(an(se,_e.y*3,1)-.3)*.5);let st=_e.y>.49&&!ie?(an(_e.x*3+se,0,_e.z*3)-.5)*.25:0,Ce=ie?0:Ue*Ue*.18*Math.sin(se);re.setXYZ(Ee,_e.x*D+Ce,_e.y+st,_e.z*D)}return we},de=new jt,ge={x:132,z:-178};[[-125,-135,9,70],[-150,-95,5,36],[-170,-70,7,48],[-82,-215,8,95],[52,-255,10,58],[72,-240,4.5,30],[195,-105,6,40],[-30,-300,9,80],[ge.x,ge.z,30,22]].forEach(([se,ie,we,re],_e,Ee)=>{let Ue=_e===Ee.length-1,D=11+re*.5-.1;de.add(xe(_e*9.1,Ue),{m:z(se,D-re/2-8,ie,0,_e,0,we,re+16,we*a(.8,1.1)),flat:!0,color:st=>{let Ce=.42+an(st.x*.2,st.y*.6,st.z*.2)*.24,A=st.y>D-1.5?.12:0;return[Ce-A*.4,Ce+A*.3,Ce*.95-A*.3]}}),h.push({x:se,z:ie,r:we*1.2+1.5,key:"pStacks"})});{let ie=new I(ge.x,21.9,ge.z),we=new Ke(2.6,3.8,26,16,8,!1);de.add(we,{m:z(ie.x,ie.y+13,ie.z),color:re=>Math.floor((re.y-21.9)/6.5)%2?[.55,.22,.2]:[.92,.91,.88]}),de.add(new Ke(4,4,.5,16),{m:z(ie.x,ie.y+26.2,ie.z),color:()=>[.2,.2,.22]}),de.add(new Ke(2,2,.6,12),{m:z(ie.x,ie.y+26.7,ie.z),color:()=>[.2,.2,.22]}),de.add(new dn(2.6,2.6,12),{m:z(ie.x,ie.y+31.3,ie.z),color:()=>[.25,.23,.24]}),de.add(new ue(7,4,5),{m:z(ie.x+7,ie.y+2,ie.z+3),color:()=>[.85,.84,.8]}),de.add(new dn(5,2.6,4),{m:z(ie.x+7,ie.y+5.3,ie.z+3,0,Math.PI/4,0,1,1,.75),color:()=>[.45,.25,.22]})}f(new xt(de.geometry(),Bn(l,c.pStacks,{color:11051942,sink:140})),"pStacks");let Se=new I(ge.x,11+22*.5-.1+28.5,ge.z),Qe=new xt(new Ke(1.8,1.8,3.2,12),new Ln({color:16769712,fog:!1}));Qe.position.copy(Se),f(Qe,"pStacks",{receive:!1});let Be=new Mn;Be.position.copy(Se);let Lt=new on({transparent:!0,depthWrite:!1,blending:Vi,side:Nn,fog:!1,uniforms:{uOpacity:{value:0}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uOpacity; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float t = clamp(-vY, 0.0, 1.0); float facing = abs(dot(normalize(vN), normalize(vV))); float a = pow(1.0 - t, 2.2) * smoothstep(0.0, 0.03, t) * pow(facing, 1.6); gl_FragColor = vec4(vec3(1.0, 0.9, 0.72) * a * uOpacity, 1.0); }"});[0,Math.PI].forEach(se=>{let ie=new xt(new dn(1,1,20,1,!0).translate(0,-.5,0),Lt);ie.rotation.set(Math.PI/2,0,0),ie.scale.set(8,230,8);let we=new Mn;we.rotation.y=se,we.add(ie),ie.position.z=0,Be.add(we)}),i.add(Be);let pt=(se,ie,we,re,_e,Ee)=>{let Ue=new jt,D=[];for(let Ce=0;Ce<se;Ce++){let A=Ce/se*Math.PI*2+o()*.7,d=a(ie,we),L=a(.15,.55),q=o()*re,V=Math.cos(A)*q,ce=Math.sin(A)*q,le=Math.cos(A)*L,Q=Math.sin(A)*L,B=-Math.sin(A)*_e,Re=Math.cos(A)*_e,Ie=[V+le*d*.35,d*.55,ce+Q*d*.35],Le=[V+le*d,d*.92,ce+Q*d];D.push([V-B,0,ce-Re],[V+B,0,ce+Re],[Ie[0]+B*.6,Ie[1],Ie[2]+Re*.6]),D.push([V-B,0,ce-Re],[Ie[0]+B*.6,Ie[1],Ie[2]+Re*.6],[Ie[0]-B*.6,Ie[1],Ie[2]-Re*.6]),D.push([Ie[0]-B*.6,Ie[1],Ie[2]-Re*.6],[Ie[0]+B*.6,Ie[1],Ie[2]+Re*.6],Le)}let st=we;return Ue.tris(D,Ce=>{let A=Ce.y/st;return[Ee[0]*(.55+.6*A),Ee[1]*(.55+.6*A),Ee[2]*(.55+.6*A)]},Ce=>Math.pow(Ce.y/st,1.5),new I(0,1,0)),Ue},Je=pt(11,.9,1.8,.55,.07,[.48,.6,.3]).geometry(),he=pt(9,3.2,5.5,.5,.06,[.6,.66,.42]);[[.15,.1],[-.2,.25],[.05,-.3]].forEach(([se,ie],we)=>{let re=4.6+we*.5;he.add(new Ke(.03,.03,re,4),{m:z(se,re/2,ie),color:()=>[.5,.52,.35],tip:()=>.3}),he.add(new Ke(.11,.11,.7,6),{m:z(se,re+.2,ie),color:()=>[.36,.26,.18],tip:()=>.6})});let ye=he.geometry(),Ye=(()=>{let se=new jt,ie=[],we=8;for(let re=0;re<we;re++){let _e=re/we*Math.PI*2+o()*.5,Ee=a(1.6,2.3),Ue=a(.7,1.1),D=[Math.cos(_e),Math.sin(_e)],st=[-Math.sin(_e),Math.cos(_e)],Ce=d=>[D[0]*Ee*d,Ue*Math.sin(d*Math.PI*.75)-.25*d*d,D[1]*Ee*d],A=9;for(let d=0;d<A;d++){let L=d/A,q=(d+1)/A,V=(L+q)/2,ce=Ce(L),le=Ce(q),Q=Ce(V),B=.34*Math.sin(Math.PI*Math.min(1,V*1.1))*(1-V*.4)+.03,Re=st[0]*B,Ie=st[1]*B;ie.push(ce,le,[Q[0]+Re,Q[1]-.06,Q[2]+Ie]),ie.push(ce,[Q[0]-Re,Q[1]-.06,Q[2]-Ie],le)}}return se.tris(ie,re=>{let _e=Math.hypot(re.x,re.z)/2.3;return[.36+_e*.22,.52+_e*.26,.26+_e*.12]},re=>Math.hypot(re.x,re.z)/2.3,new I(0,1,0)),se.geometry()})(),qe=(se,ie)=>Bn(l,c[se],{sway:ie,side:Nn,color:16777215,snowBias:-1,softBack:!0}),De=null,gt=null,Rt=null,St=(se,ie,we)=>{let re=(()=>{let d=new jt,L=new Qt(1,14,7,0,Math.PI*2,0,Math.PI/2),q=L.attributes.position,V=new I;for(let le=0;le<q.count;le++){V.fromBufferAttribute(q,le);let Q=1+(an(V.x*3,V.y*3,V.z*3)-.5)*.4;q.setXYZ(le,V.x*Q,V.y*.32*Q,V.z*Q)}L.computeVertexNormals();let ce=[[.86,.42,.1],[.72,.18,.08],[.92,.68,.16],[.55,.3,.12]];d.add(L,{color:le=>{let Q=ce[Math.floor(an(le.x*6,le.y*6,le.z*6)*3.99)],B=.7+an(le.x*20,0,le.z*20)*.5;return[Q[0]*B,Q[1]*B,Q[2]*B]}});for(let le=0;le<26;le++){let Q=o()*6.28,B=Math.sqrt(o())*1.15,Re=ce[le%4];d.add(new fn(.16,.1),{m:z(Math.cos(Q)*B,.33*(1-B*B*.6)+.02,Math.sin(Q)*B,-Math.PI/2+a(-.4,.4),o()*6,0),color:()=>Re})}return d.geometry()})(),_e=[];for(let d=0;_e.length<320&&d<6e3;d++){let L=se[Math.floor(o()*se.length)];if(!L)break;let q=o()*6.28,V=a(2,9),ce=L.p.x+Math.cos(q)*V,le=L.p.z+Math.sin(q)*V,Q=e(ce,le);if(Q<1||Q>70||ie(ce,le))continue;let B=a(1.4,3.2);_e.push({p:new I(ce,Q-.1,le),q:E(ce,le,o()*6.28,.8),s:new I(B,B*a(.8,1.3),B*a(.7,1.1))})}R(re,Bn(l,c.leaves,{side:Nn,softBack:!0,snowBias:-1}),_e,"leaves");let Ee=(d,L)=>{let q=new jt;for(let V=0;V<6;V++){let ce=o()*6.28,le=o()*.5,Q=Math.cos(ce)*le,B=Math.sin(ce)*le,Re=a(.35,.7);q.add(new Ke(.012,.016,Re,4).translate(0,Re/2,0),{m:z(Q,0,B),color:()=>[.32,.5,.24],tip:()=>0});for(let Ie=0;Ie<5;Ie++){let Le=Ie/5*6.28+ce;q.add(new Qt(.06,6,4),{m:z(Q+Math.cos(Le)*.06,Re,B+Math.sin(Le)*.06,0,-Le,0,1.3,.3,.7),color:()=>d,tip:()=>1})}q.add(new Qt(.035,6,4),{m:z(Q,Re+.015,B),color:()=>L,tip:()=>1}),q.add(new fn(.14,.05),{m:z(Q+.04,Re*.4,B,0,ce,.5),color:()=>[.34,.55,.26],tip:()=>0})}return q.geometry()},Ue=Bn(l,c.flowers,{sway:.08,side:Nn,softBack:!0,snowBias:-1});[[[.92,.45,.62],[.95,.85,.3]],[[.96,.84,.25],[.7,.45,.15]],[[.72,.68,.95],[.98,.95,.6]],[[.98,.97,.95],[.95,.8,.25]]].forEach(([d,L],q)=>{let V=[];for(let ce=0;V.length<520&&ce<3e4;ce++){let le=a(-420,420),Q=a(-420,190),B=e(le,Q);if(B<1||B>55||ie(le,Q)||!p(le,Q)||we(le,Q,3)||an(le*.025+q*3,1,Q*.025)<.5)continue;let Re=a(1.6,2.6);V.push({p:new I(le,B-.05,Q),q:E(le,Q,o()*6.28,.5),s:new I(Re,Re,Re)})}R(Ee(d,L),Ue,V,"flowers")});let D=(()=>{let d=new jt,L=gn("wood",V=>{let ce=.5+an(V.x*6,V.y*6,V.z*6)*.12;return[ce,ce*.8,ce*.58]});[[-.22,-.18],[.22,-.18],[-.22,.18],[.22,.18]].forEach(([V,ce])=>d.add(new ue(.06,.4,.06),{m:z(V,.2,ce),color:L})),d.add(new ue(.58,.06,.5),{m:z(0,.42,0),color:L});let q=[[.92,.9,.84],[.86,.82,.62],[.78,.86,.84]];for(let V=0;V<3;V++)d.add(new ue(.5,.24,.44),{m:z(0,.57+V*.245,0),color:()=>q[V]});return d.add(new ue(.56,.05,.5),{m:z(0,1.3,0),color:()=>[.6,.58,.55]}),[-1,1].forEach(V=>d.add(new ue(.34,.03,.54),{m:z(V*.14,1.38,0,0,0,-V*.5),color:()=>[.45,.42,.4]})),d.add(new ue(.22,.03,.02),{m:z(0,.49,.225),color:()=>[.08,.06,.05]}),d.add(new ue(.3,.02,.1),{m:z(0,.46,.27,.25,0,0),color:L}),d.geometry()})(),st=[],Ce=[];[[-5.6,-.6],[-5.6,.9],[-5.6,2.4]].forEach(([d,L])=>{let q=Ht.x-L*Ht.S,V=Ht.z+d*Ht.S,ce=e(q,V);st.push({p:new I(q,ce,V),q:new Gt().setFromAxisAngle(new I(0,1,0),Math.PI+.1),s:new I(Ht.S,Ht.S,Ht.S)}),h.push({x:q,z:V,r:2.8,key:"hives"}),Ce.push(q,ce+4.5,V)}),R(D,Bn(l,c.hives,{rich:!0,grain:.02}),st,"hives",{cast:!0});{let L=new Kt,q=new Float32Array(60*3),V=new Float32Array(60);for(let le=0;le<60;le++){let Q=le%3;q.set([Ce[Q*3],Ce[Q*3+1],Ce[Q*3+2]],le*3),V[le]=o()}L.setAttribute("position",new hn(q,3)),L.setAttribute("aSeed",new hn(V,1));let ce=new on({transparent:!0,depthWrite:!1,uniforms:{uTime:t.uTime,uOpacity:{value:0}},vertexShader:`uniform float uTime; attribute float aSeed; varying float vB;
          void main() {
            float t = uTime * (1.2 + aSeed) + aSeed * 40.0;
            vec3 p = position + vec3(sin(t * 1.3) * (1.5 + aSeed * 4.0), sin(t * 2.1) * 1.2 + cos(t * 0.7) * 1.5, cos(t * 1.1) * (1.5 + aSeed * 4.0));
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = 26.0 / -mv.z; vB = aSeed;
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`uniform float uOpacity; varying float vB;
          void main() { vec2 q = gl_PointCoord - 0.5; float d = length(q); if (d > 0.5) discard;
            vec3 c = mix(vec3(0.12, 0.1, 0.06), vec3(0.95, 0.75, 0.2), step(0.0, sin(q.x * 30.0)));
            gl_FragColor = vec4(c, uOpacity * smoothstep(0.5, 0.35, d)); }`});Rt=new ki(L,ce),Rt.frustumCulled=!1,i.add(Rt)}let A=[];{let d=-275,L=-30,q=1,V=0;for(let ce=0;ce<260;ce++){let le=e(d,L);if(A.push([d,L]),le<-.6)break;let Q=2,B=e(d+Q,L)-e(d-Q,L),Re=e(d,L+Q)-e(d,L-Q),Ie=Math.hypot(-d,-20-L)||1,Le=q*.7-B*.6+-d/Ie*.25+(an(ce*.1,3,1)-.5)*.5,He=V*.7-Re*.6+(-20-L)/Ie*.25+(an(ce*.1,7,2)-.5)*.5,$e=Math.hypot(Le,He)||1;q=Le/$e,V=He/$e,d+=q*4,L+=V*4}}if(A.length>4){let d=[],L=[],q=[],V=0;A.forEach(([le,Q],B)=>{let[Re,Ie]=A[Math.max(0,B-1)],[Le,He]=A[Math.min(A.length-1,B+1)],$e=Le-Re,je=He-Ie,et=Math.hypot($e,je)||1;$e/=et,je/=et;let H=3+3.6*Math.min(1,B/25)+Math.sin(B*.4)*.8,Ne=le-je*H,Me=Q+$e*H,ke=le+je*H,Ve=Q-$e*H,be=Math.max(e(Ne,Me),e(ke,Ve),e(le,Q))+.32;if(B&&(V+=Math.hypot(le-A[B-1][0],Q-A[B-1][1])),d.push(Ne,be,Me,ke,be,Ve),L.push(0,V/10,1,V/10),B){let N=(B-1)*2;q.push(N,N+1,N+2,N+1,N+3,N+2)}});let ce=new Kt;ce.setAttribute("position",new Ft(d,3)),ce.setAttribute("uv",new Ft(L,2)),ce.setIndex(q),gt=new on({transparent:!0,depthWrite:!1,fog:!0,side:Nn,uniforms:uo.merge([nt.fog,{uOpacity:{value:0},uColor:{value:new lt(6985126)}}]),vertexShader:["varying vec2 vUv;","#include <fog_pars_vertex>","void main() {","  vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;","  #include <fog_vertex>","}"].join(`
`),fragmentShader:["uniform float uTime, uOpacity; uniform vec3 uColor; varying vec2 vUv;","#include <fog_pars_fragment>","float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }","float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }","void main() {","  float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);","  float flow = n(vec2(vUv.x * 5.0, vUv.y * 6.0 - uTime * 1.6)) * 0.6 + n(vec2(vUv.x * 11.0, vUv.y * 14.0 - uTime * 2.4)) * 0.4;","  float foam = smoothstep(0.8, 0.95, flow) * 0.45;","  vec3 col = mix(uColor * (0.55 + 0.25 * flow), vec3(0.85, 0.92, 0.93), foam) * mix(0.75, 1.0, edge);","  gl_FragColor = vec4(col, uOpacity * (0.35 + 0.55 * edge));","  #include <colorspace_fragment>","  #include <fog_fragment>","}"].join(`
`)}),gt.uniforms.uTime=t.uTime,De=new xt(ce,gt),De.renderOrder=1,f(De,"creek",{receive:!1}),Ae=A}},Ae=null;return{shared:l,show:c,groups:g,solids:h,zones:m,cabinAt:b,circleAt:T,cabin:Z,blockedAt(se,ie,we,re,_e){for(let Ee of h){if(re[Ee.key]<.5||Ee.top!==void 0&&_e!==void 0&&_e>=Ee.top-.7)continue;let Ue=Ee.x-se,D=Ee.z-ie,st=Ee.r+we;if(Ue*Ue+D*D<st*st)return!0}return re.pCabin>.5&&Z.blocked(se,ie,we)},solidTop(se,ie,we,re){let _e=-1/0;for(let Ee of h){if(Ee.top===void 0||re[Ee.key]<.5||Ee.top<=_e||we<Ee.top-1.2)continue;let Ue=Ee.x-se,D=Ee.z-ie;Ue*Ue+D*D<Ee.rt*Ee.rt&&(_e=Ee.top)}return _e},floorAt(se,ie,we){return we.pCabin>.5?Z.floorAt(se,ie):null},plant(se,ie=0){let we=(Ce,A,d)=>se.some(L=>{let q=L.p.x-Ce,V=L.p.z-A;return q*q+V*V<d*d}),re=(Ce,A,d=0)=>m.some(L=>Math.hypot(L.x-Ce,L.z-A)<L.r+d),_e=[],Ee=[];for(let Ce=0,A=0;Ce<70&&A<8e3;A++){let d=se[Math.floor(o()*se.length)];if(!d)break;let L=o()*6.28,q=a(7,20),V=d.p.x+Math.cos(L)*q,ce=d.p.z+Math.sin(L)*q,le=e(V,ce);if(le<1.5||le>68||re(V,ce,10))continue;let Q=a(9,18),B=a(.8,1.4),Re=o()*6.28,Ie=Math.cos(Re)*Q/2,Le=-Math.sin(Re)*Q/2;if(we(V,ce,6)||we(V+Ie,ce+Le,4)||we(V-Ie,ce-Le,4))continue;let He=e(V+Ie,ce+Le),$e=e(V-Ie,ce-Le),je=new Gt().setFromEuler(new bn(o()*6.28,Re,Math.atan2(He-$e,Q),"YZX"));_e.push({p:new I(V,(He+$e)/2+B*.55,ce),q:je,s:new I(Q,B,B)});for(let et=-.5;et<=.5;et+=.125)h.push({x:V+Ie*2*et,z:ce+Le*2*et,r:B+1.6,key:"pLogs",top:(He+$e)/2+B*.55+(He-$e)*et+B,rt:B*1.1});Ce++}for(let Ce=0,A=0;Ce<90&&A<8e3;A++){let d=se[Math.floor(o()*se.length)];if(!d)break;let L=o()*6.28,q=a(6,16),V=d.p.x+Math.cos(L)*q,ce=d.p.z+Math.sin(L)*q,le=e(V,ce);if(le<1.5||le>70||we(V,ce,5)||re(V,ce))continue;let Q=a(.9,1.7),B=a(1.4,3.2);Ee.push({p:new I(V,le-.4,ce),q:E(V,ce,o()*6.28,.4),s:new I(Q,B,Q)}),h.push({x:V,z:ce,r:Q+1.3,key:"pLogs",top:le-.4+B,rt:Q*.85}),Ce++}R(J,$,_e,"pLogs",{cast:!0}),R(O,$,Ee,"pLogs",{cast:!0});let Ue=[];for(let Ce=0;Ue.length<5200&&Ce<6e4;Ce++){let A=a(-470,470),d=a(-470,210),L=e(A,d);if(L<ie+.6||L>66||!p(A,d)||re(A,d)||an(A*.03,0,d*.03)<.42)continue;let q=a(1.2,2.6);Ue.push({p:new I(A,L-.15,d),q:E(A,d,o()*6.28,.5),s:new I(q,q*a(.8,1.3),q)})}R(Je,qe("pGrass",.05),Ue,"pGrass");let D=[];for(let Ce=0;D.length<1100&&Ce<2e4;Ce++){let A=se[Math.floor(o()*se.length)];if(!A)break;let d=o()*6.28,L=a(2.5,13),q=A.p.x+Math.cos(d)*L,V=A.p.z+Math.sin(d)*L,ce=e(q,V);if(ce<1||ce>70||re(q,V))continue;let le=a(1.6,3.4);D.push({p:new I(q,ce-.1,V),q:E(q,V,o()*6.28,.5),s:new I(le,le*a(.8,1.1),le)})}R(Ye,qe("pFerns",.03),D,"pFerns");let st=[];for(let Ce=0;st.length<700&&Ce<9e4;Ce++){let A=a(-280,280),d=a(-280,170),L=e(A,d);if(L<-1.4||L>1.2||!p(A,d)||re(A,d,-6)||an(A*.05,3,d*.05)<.4)continue;let q=a(1.1,1.9);st.push({p:new I(A,L-.2,d),q:new Gt().setFromAxisAngle(new I(0,1,0),o()*6.28),s:new I(q,q*a(.8,1.2),q)})}R(ye,qe("pReeds",.012),st,"pReeds"),St(se,re,we)},update(se,ie,we,re){for(let _e of Pc)c[_e].value=se[_e];for(let _e of u)c[_e].value=se[_e]||0;De&&(gt.uniforms.uOpacity.value=Math.min(1,(se.creek||0)*1.2),gt.uniforms.uColor.value.copy(se.waterC).lerp(new lt(.32,.52,.56),.5)),Rt&&(Rt.material.uniforms.uOpacity.value=se.hives||0,Rt.visible=(se.hives||0)>.05),l.uSnowCover.value=se.pSnowCover,l.uMoss.value=se.pMoss,l.uFrost.value=se.pFrost;for(let[_e,Ee]of g)_e.visible=se[Ee]>.01;Z.update(se,ie,performance.now(),re),Qe.material.color.setRGB(1.6,1.4,1.05),Qe.position.y=Se.y-(1-se.pStacks)*140,Be.position.y=Qe.position.y,Be.rotation.y=ie*.45,Be.visible=se.pStacks>.5,Lt.uniforms.uOpacity.value=Math.max(0,se.pStacks-.5)*.5},blocked(se,ie){return m.some(we=>Math.hypot(we.x-se,we.z-ie)<we.r)}}}function bd(i,e){let n=new Kr().copy(new fn(1,1).rotateX(-Math.PI/2)),s=new Float32Array(320*3);for(let a=0;a<320;a++)s[a*3]=Math.random()*120-60,s[a*3+1]=Math.random(),s[a*3+2]=Math.random()*120-60;n.setAttribute("aOff",new Ai(s,3)),n.instanceCount=320;let r=new on({transparent:!0,depthWrite:!1,fog:!0,uniforms:uo.merge([nt.fog,{uOpacity:{value:0},uCam:{value:new I},uWater:{value:0}}]),vertexShader:`
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
      }`});r.uniforms.uTime=e.uTime;let o=new xt(n,r);return o.frustumCulled=!1,i.add(o),{update(a,l,c){r.uniforms.uOpacity.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uWater.value=c,o.visible=a>.01}}}function Td(i,e){let n=new fn(1,1).rotateX(-Math.PI/2),s=new Ai(new Float32Array(90).fill(-1e5),1);s.setUsage(Ul),n.setAttribute("aBorn",s);let r=new on({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uTime:e.uTime,uColor:{value:new lt(7240328)},uShow:{value:0}},vertexShader:`
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
      }`}),o=new ai(n,r,90);o.frustumCulled=!1;let a=new Et;a.makeScale(0,0,0);for(let m=0;m<90;m++)o.setMatrixAt(m,a);i.add(o);let l=0,c=1,u=new Gt,g=new I(1.15,1,2.3),h=new I;return{mesh:o,place(m,x,E,p,f){c=-c,h.set(m+Math.cos(p)*.9*c,x+.45,E-Math.sin(p)*.9*c),u.setFromUnitVectors(new I(0,1,0),f).multiply(new Gt().setFromAxisAngle(new I(0,1,0),p)),a.compose(h,u,g),o.setMatrixAt(l,a),o.instanceMatrix.needsUpdate=!0,s.array[l]=e.uTime.value,s.needsUpdate=!0,l=(l+1)%90},update(m){r.uniforms.uShow.value=m,o.visible=m>.01}}}(()=>{"use strict";let i=document.getElementById("bg");if(!i)return;let e;try{e=new Tc({canvas:i,antialias:!0,powerPreference:"low-power"})}catch{document.documentElement.classList.add("no-webgl"),window.MEOW_BG={scenes:[],setScene(Y){document.documentElement.setAttribute("data-scene",Y)},setMotion(){},start(){}};return}e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.toneMapping=to,e.shadowMap.enabled=!0,e.shadowMap.type=La,e.toneMappingExposure=1;let t=new er,n=new Pn(50,1,.5,3e3),s=new jr,r=(v,Y)=>{let ne=Math.sin(v*127.1+Y*311.7)*43758.5453;return ne-Math.floor(ne)},o=(v,Y)=>{let ne=Math.floor(v),Oe=Math.floor(Y),Fe=v-ne,Ge=Y-Oe,ft=Fe*Fe*(3-2*Fe),wt=Ge*Ge*(3-2*Ge),yt=r(ne,Oe),mt=r(ne+1,Oe),vt=r(ne,Oe+1),_t=r(ne+1,Oe+1);return yt+(mt-yt)*ft+(vt-yt)*wt+(yt-mt-vt+_t)*ft*wt},a=(v,Y,ne=5)=>{let Oe=0,Fe=.5,Ge=1;for(let ft=0;ft<ne;ft++)Oe+=Fe*o(v*Ge,Y*Ge),Ge*=2.03,Fe*=.5;return Oe},l=(v,Y)=>{let ne=0,Oe=.5,Fe=1;for(let Ge=0;Ge<5;Ge++)ne+=Oe*(1-Math.abs(o(v*Fe,Y*Fe)*2-1)),Fe*=2.1,Oe*=.5;return ne},c=(v,Y,ne)=>{let Oe=Math.min(1,Math.max(0,(ne-v)/(Y-v)));return Oe*Oe*(3-2*Oe)},u=(v,Y)=>v+Math.random()*(Y-v),g=(v,Y)=>{let ne=Math.hypot(v*.75,Y+20),Oe=c(55,240,ne),Fe=(a(v*.006+3,Y*.006+7)-.45)*46*(.25+Oe);Fe+=Math.pow(c(120,650,-Y),1.3)*l(v*.0028,Y*.0028)*260,Fe+=c(160,520,Math.abs(v))*a(v*.004,Y*.004+11)*130,Fe-=(1-Oe)*9,Fe+=(a(v*.035+17,Y*.035+5,2)-.5)*3.2*(.3+Oe);{let vt=Math.min(1,Math.max(0,((v-205)*-113+(Y- -130)*14)/12965)),_t=Math.hypot(v-(205+-113*vt),Y-(-130+14*vt)),zt=c(34,12,_t)*c(1.04,.9,vt),ln=4.6+(a(v*.05,Y*.05,2)-.5)*1.6-vt*.6;zt>0&&(Fe=Fe+(Math.max(Fe,ln)-Fe)*zt)}let Ge=Math.hypot(v-Ht.x,Y-Ht.z);Ge<36&&(Fe+=(Ht.y-.12-Fe)*c(36,24,Ge));{let ft=(Y-Ht.z)/Ht.S,wt=-(v-Ht.x)/Ht.S,yt=Math.max(Xe.x0-ft,ft-Xe.x1,0),mt=Math.max(Xe.z0-wt,wt-Xe.z1,0),vt=Math.hypot(yt,mt)*Ht.S;vt<16&&(Fe=Math.max(Fe,Fe+(Ht.y-.12-Fe)*c(16,5,vt)))}return Fe},h={uTime:{value:0},uTop:{value:new lt},uHorizon:{value:new lt},uBottom:{value:new lt},uSunColor:{value:new lt},uSunDir:{value:new I(0,.2,-1)},uSunSize:{value:0},uStars:{value:0},uAurora:{value:0},uAur1:{value:new lt},uAur2:{value:new lt}},m=new xt(new Qt(1400,48,24),new on({uniforms:h,side:Dn,depthWrite:!1,fog:!1,vertexShader:`
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
        }`}));t.add(m);let x=new Yr(16777215,4473924,1),E=new $r(16777215,1);t.add(x,E,E.target),t.fog=new Fr(13421772,.004);let p={uLow:{value:new lt},uHigh:{value:new lt},uSnow:{value:new lt},uSnowLine:{value:100},uSand:{value:0},uHole:{value:new rn(1e9,1e9,1e9,1e9)}},f=new rn(1e9,1e9,1e9,1e9),y=new fn(2200,1800,300,245);y.rotateX(-Math.PI/2),y.translate(0,0,-400);{let v=y.attributes.position;for(let Y=0;Y<v.count;Y++)v.setY(Y,g(v.getX(Y),v.getZ(Y)));y.computeVertexNormals()}let R=new Fn({color:16777215});R.onBeforeCompile=v=>{Object.assign(v.uniforms,p),v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying float vH; varying float vSlope; varying vec2 vXZ;`).replace("#include <common>","#include <common>").replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vSlope = 1.0 - normal.y; vXZ = position.xz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)};let w=new xt(y,R);w.receiveShadow=!0,t.add(w);let b=(()=>{let v=document.createElement("canvas");v.width=v.height=256;let Y=v.getContext("2d"),ne=Y.createImageData(256,256);for(let Fe=0;Fe<256;Fe++)for(let Ge=0;Ge<256;Ge++){let ft=a(Ge/22,Fe/7,4),wt=a(Ge/22+.6,Fe/7,4),yt=a(Ge/22,Fe/7+.6,4),mt=(Fe*256+Ge)*4;ne.data[mt]=128+(ft-wt)*300,ne.data[mt+1]=128+(ft-yt)*300,ne.data[mt+2]=255,ne.data[mt+3]=255}Y.putImageData(ne,0,0);let Oe=new ns(v);return Oe.wrapS=Oe.wrapT=Zs,Oe.repeat.set(60,60),Oe})(),T=new Xr({color:7829367,roughness:.3,metalness:.35,normalMap:b,normalScale:new At(.35,.35)}),P={uStudy:{value:new rn(1e9,1e9,1e9,1e9)}};T.onBeforeCompile=v=>{Object.assign(v.uniforms,P),v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ; uniform vec4 uStudy;`).replace("#include <clipping_planes_fragment>",`if (vWXZ.x > uStudy.x && vWXZ.x < uStudy.y && vWXZ.y > uStudy.z && vWXZ.y < uStudy.w) discard;
#include <clipping_planes_fragment>`)};let _=new xt(new fn(4e3,4e3).rotateX(-Math.PI/2),T);t.add(_);let C={uTree:{value:1},uTime:h.uTime},F=(()=>{let v=new jt,Y=new Ke(.05,.16,2.9,8,5,!0).translate(0,1.45,0);{let Fe=Y.attributes.position,Ge=new I;for(let ft=0;ft<Fe.count;ft++){Ge.fromBufferAttribute(Fe,ft);let wt=Math.atan2(Ge.z,Ge.x),yt=Ge.y<.4?1+(.4-Ge.y)*2.6*(.55+.45*Math.max(0,Math.sin(wt*4+1))):1,mt=Math.sin(Ge.y*1.7)*.03;Fe.setXYZ(ft,Ge.x*yt+mt,Ge.y,Ge.z*yt)}}v.add(Y,{color:Fe=>{let Ge=.42+.16*o(Fe.y*7,Math.atan2(Fe.z,Fe.x)*2.5);return[Ge*1.35,Ge*.98,Ge*.72]},normal:(Fe,Ge)=>Ge.set(Fe.x,.12,Fe.z).normalize()});let ne=6,Oe=0;for(let Fe=0;Fe<ne;Fe++){let Ge=Fe/(ne-1),ft=1.1-Ge*.8,wt=1.02-Ge*.42,yt=.5+Ge*2.5,mt=5+Fe%3,vt=Fe*1.93,_t=(Ze,Ut)=>{let nn=Ze.attributes.position,Yt=new I;for(let _n=0;_n<nn.count;_n++){Yt.fromBufferAttribute(nn,_n);let yn=Math.hypot(Yt.x,Yt.z);if(yn<.001)continue;let wn=Math.atan2(Yt.z,Yt.x),Rn=Math.pow(.5+.5*Math.sin(wn*mt+vt),2),Ni=.82+.32*Rn+.06*Math.sin(wn*17+Fe*3)+.04*Math.sin(wn*31+Fe),vr=yn/ft,_o=(.1+.16*Rn)*ft*vr*vr;nn.setXYZ(_n,Yt.x*Ni,Yt.y-_o-(Ut?.02:0),Yt.z*Ni)}},zt=new dn(ft,wt,14,3,!0);_t(zt,!1),zt.translate(0,yt+wt/2,0),v.add(zt,{mat:13,color:Ze=>{let Ut=(Ze.y-yt)/wt,Yt=.55+.5*Math.min(1,Math.hypot(Ze.x,Ze.z)/ft)+.22*Ut+.08*(r(Ze.x*9.1,Ze.z*7.3+Ze.y)-.5)+Fe*.03;return[Yt*.98,Yt,Yt*.94]},normal:(Ze,Ut)=>{let nn=Math.hypot(Ze.x,Ze.z);Ut.set(Ze.x,nn*.55+.32,Ze.z).normalize()},tip:Ze=>{let Ut=(Ze.y-yt)/wt,nn=Math.atan2(Ze.z,Ze.x),Yt=.5+.5*Math.sin(nn*mt+vt);return Math.min(1,Math.max(0,(Ut-.08)*1.5)*(.45+.55*Yt)+.25*r(Ze.x*5.3,Ze.z*4.1))}});let ln=new dn(ft*.97,wt*.38,14,1,!0);_t(ln,!0),ln.translate(0,yt+wt*.19-.02,0),v.add(ln,{mat:13,flip:!0,color:Ze=>{let nn=.42+.3*Math.min(1,Math.hypot(Ze.x,Ze.z)/ft);return[nn*.95,nn,nn*.9]},normal:(Ze,Ut)=>Ut.set(Ze.x*.3,-1,Ze.z*.3).normalize()}),Oe=yt+wt}return v.add(new dn(.05,.5,5,1,!0).translate(0,Oe+.18,0),{mat:13,color:()=>[1,1.02,.95],tip:()=>.7}),v.geometry()})(),X=[[0,105],[0,140],[-38,112],[24,78],[0,92],[30,102],[0,125]].map(([v,Y])=>({x:v,z:Y,r:42})),G=wd({scene:t,heightAt:g,U:h,snowColor:p.uSnow,clear:X,camera:n}),J={uFall:{value:0},uBloom:{value:0},uLush:{value:0},uBare:{value:0}},O=Bn({...G.shared,...J,uMoss:{value:0},uFrost:G.shared.uSnowCover},C.uTree,{sway:.022,color:3358771,snowBias:-.3,crisp:!0,tree:!0}),$=1400,Z=[],ee=new lt(1,1,1),xe=new ai(F,O,$);{let v=new Et,Y=new Gt,ne=new I,Oe=new I,Fe=new lt,Ge=0,ft=0;for(;Ge<$&&ft++<6e4;){let yt=u(-650,650),mt=u(-700,260),vt=g(yt,mt);if(vt<3||vt>85||a(yt*.02,mt*.02,3)<.42||G.blocked(yt,mt))continue;let _t=u(2,4.6);Oe.set(yt,vt-.4,mt),ne.set(_t*u(.8,.95),_t*u(1.5,2.1),_t*u(.8,.95)),Y.setFromAxisAngle(new I(0,1,0),u(0,Math.PI*2));let zt=u(.82,1.12);Fe.setRGB(zt,zt*u(.97,1.03),zt*u(.94,1)),Z.push({p:Oe.clone(),s:ne.clone(),q:Y.clone(),c:Fe.clone()}),v.compose(Oe,Y,ne),xe.setColorAt(Ge,Fe),xe.setMatrixAt(Ge++,v)}xe.count=Ge;let wt=new Float32Array($);for(let yt=0;yt<$;yt++)wt[yt]=r(yt*1.37,9.1);F.setAttribute("aHash",new Ai(wt,1))}xe.castShadow=!0,xe.receiveShadow=!0,t.add(xe),G.plant(Z,0);let de=(()=>{let v=new jt,Y=(ne,Oe)=>r(ne*3.17+Oe,ne*1.91-Oe*2.3);for(let ne=0;ne<14;ne++){let Oe=ne%5,Fe=Oe/5,Ge=1.1-Fe*.8,ft=.5+Fe*2.5,wt=ne*2.39996+Y(ne,1)*.6,yt=Ge*(.62+.28*Y(ne,2)),mt=Math.cos(wt)*yt,vt=Math.sin(wt)*yt,_t=.14+.16*Y(ne,3),zt=.11+.05*Y(ne,4),ln=ft-.2*Ge*(yt/Ge)*(yt/Ge);v.add(new Ke(.006,.008,_t,4,1),{m:new Et().makeTranslation(mt,ln-_t/2,vt),color:()=>[.35,.33,.3]});let Ze=new Qt(zt,10,7),Ut=Ze.attributes.position;for(let Yt=0;Yt<Ut.count;Yt++){let _n=Ut.getY(Yt);Ut.setY(Yt,(_n<0?_n*1.25:_n)*.5)}Ze.computeVertexNormals();let nn=.6+.18*Y(ne,5);v.add(Ze,{m:new Et().makeTranslation(mt,ln-_t-zt*.5,vt),color:Yt=>{let _n=.85+.25*Math.max(0,Yt.y-(ln-_t-zt*.5))/zt;return[nn*_n,nn*_n,nn*_n*.98]}})}return v.geometry()})(),ge=Bn({...G.shared,uMoss:{value:0},uFrost:{value:0}},C.uTree,{sway:.022,color:14211288}),Se=new ai(de,ge,xe.count),Qe=Z.map((v,Y)=>r(Y*.37,5.1)<.5);{let v=new Et,Y=new Et().makeScale(0,0,0);Z.forEach((ne,Oe)=>Se.setMatrixAt(Oe,Qe[Oe]?v.compose(ne.p,ne.q,ne.s):Y)),Se.computeBoundingSphere()}Se.castShadow=!0,t.add(Se);let Be={uFruitCol:{value:0}};{let v=[13123630,14710826,14266416,10271290,12070954];Z.forEach((ne,Oe)=>Se.setColorAt(Oe,new lt(v[Oe%v.length]))),Se.instanceColor.needsUpdate=!0;let Y=ge.onBeforeCompile;ge.onBeforeCompile=ne=>{Y(ne),Object.assign(ne.uniforms,Be),ne.vertexShader=ne.vertexShader.replace("#include <common>",`#include <common>
uniform float uFruitCol;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
          #ifdef USE_COLOR
            vColor.rgb *= color;
          #endif
          #ifdef USE_INSTANCING_COLOR
            vColor.rgb *= mix(vec3(1.0), instanceColor.rgb * 1.5, uFruitCol);
          #endif`)}}let Lt=(()=>{let v=new jt,Y=(ne,Oe,Fe,Ge,ft)=>v.add(new Ke(ft*.35,ft,Fe,5).translate(0,Fe/2,0),{m:new Et().compose(new I(0,ne,0),new Gt().setFromEuler(new bn(0,Oe,Ge,"YXZ")),new I(1,1,1)),color:()=>[.36,.28,.22]});for(let ne=0;ne<16;ne++){let Oe=.55+ne*.17,Fe=(1-ne/18)*.9+.12;Y(Oe,ne*2.4,Fe,1.1+ne%3*.12,.03),Y(Oe+.05,ne*2.4+.9,Fe*.6,.8,.02)}return v.geometry()})(),pt={value:0},Je=new ai(Lt,Bn({...G.shared,uMoss:{value:0},uFrost:{value:0}},pt,{sway:.018,color:12101784}),xe.count);{let v=new Et().makeScale(0,0,0),Y=new Et;Z.forEach((ne,Oe)=>Je.setMatrixAt(Oe,r(Oe*1.37,9.1)<.45?Y.compose(ne.p,ne.q,ne.s):v)),Je.computeBoundingSphere()}Je.castShadow=!0,t.add(Je);let he=bd(t,h),ye=_d({scene:t,camera:n,heightAt:g,water:_}),Ye=Td(t,h),qe=new Jr(16772829,0,280,zl.degToRad(32),.7,1.35);qe.castShadow=!1,qe.shadow.mapSize.set(1024,1024),qe.shadow.camera.near=.5,qe.shadow.camera.far=280,qe.shadow.bias=-.0012,qe.shadow.normalBias=.06,t.add(qe,qe.target);let De=new Gi(16753498,0,120,1.25);t.add(De);let gt=new on({transparent:!0,depthWrite:!1,side:Dn,blending:Vi,fog:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new lt(16773340)}},vertexShader:`
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
      }`}),Rt=new dn(1,1,40,1,!0).translate(0,-.5,0).rotateX(-Math.PI/2),St=new xt(Rt,gt);St.frustumCulled=!1,St.renderOrder=5,t.add(St);let Ae={state:"off",torch:{on:!1,since:-1e9,level:0},lamp:{on:!1,since:-1e9,level:0},level:0,aim:new I(0,0,-1),swing:0,swingV:0,swingZ:0,swingZV:0,lastVX:0,lastVZ:0},se=(()=>{let v=document.createElement("canvas");v.width=256,v.height=128;let Y=v.getContext("2d"),ne=Y.createRadialGradient(128,64,0,128,64,128);return ne.addColorStop(0,"rgba(255,255,255,0.9)"),ne.addColorStop(.5,"rgba(255,255,255,0.35)"),ne.addColorStop(1,"rgba(255,255,255,0)"),Y.fillStyle=ne,Y.fillRect(0,0,256,128),new ns(v)})(),ie=Array.from({length:9},(v,Y)=>{let ne=new Ln({map:se,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),Oe=new xt(new fn(u(380,620),u(70,120)),ne);return Oe.position.set(u(-400,400),u(8,45),-60-Y*70),Oe.userData.v=u(1.2,3.2)*(Math.random()<.5?-1:1),t.add(Oe),Oe}),we=`
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);`,re=2600,_e=new Kt;{let v=new Float32Array(re*6),Y=new Float32Array(re*2);for(let ne=0;ne<re;ne++){let Oe=u(-90,90),Fe=u(0,70),Ge=u(-140,40);v.set([Oe,Fe,Ge,Oe,Fe,Ge],ne*6),Y[ne*2+1]=1}_e.setAttribute("position",new hn(v,3)),_e.setAttribute("aEnd",new hn(Y,1))}let Ee=new on({transparent:!0,depthWrite:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new lt(14672870)}},vertexShader:`
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
      }`}),Ue=new Hr(_e,Ee);Ue.frustumCulled=!1,t.add(Ue);let D=(v,Y,ne,Oe,Fe)=>{let Ge=new Kt,ft=new Float32Array(v*3),wt=new Float32Array(v);for(let vt=0;vt<v;vt++)ft.set([u(-Y[0],Y[0]),u(Y[1],Y[2]),u(Y[3],Y[4])],vt*3),wt[vt]=Math.random();Ge.setAttribute("position",new hn(ft,3)),Ge.setAttribute("aSeed",new hn(wt,1));let yt=new on({transparent:!0,depthWrite:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new lt(Oe)},uSize:{value:Fe*e.getPixelRatio()}},vertexShader:ne,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          ${we}
          gl_FragColor = vec4(uColor, a * uOpacity * vA);
          #include <colorspace_fragment>
        }`}),mt=new ki(Ge,yt);return mt.frustumCulled=!1,t.add(mt),mt},st=D(3200,[110,0,70,-160,40],`
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
    }`,16054008,3.2),Ce=D(900,[90,0,60,-120,40],`
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
    }`,13793836,4.2),A=D(260,[160,1,14,-220,30],`
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
    }`,14275248,5),d=(v,Y,ne)=>new I(v,Y,ne),L={rain:{sat:0,skyTop:"#8f959a",skyHorizon:"#c6c9cb",skyBottom:"#8a8f93",fog:"#b7bbbe",fogDensity:.0042,low:"#6c7175",high:"#878c90",snowC:"#c9cccf",snowLine:170,water:0,waterC:"#6d7378",waterRough:.18,sunC:"#000000",sunDir:d(0,.3,-1),sunSize:0,lightC:"#e8e8e8",light:.55,lightDir:d(.3,.6,.2),hemiSky:"#cfd2d4",hemiGround:"#55595c",hemi:.95,treeC:"#3f4447",trees:.75,rain:1,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.55,cam:d(0,13,105),look:d(0,9,0)},frost:{sat:0,skyTop:"#d7d9db",skyHorizon:"#eceded",skyBottom:"#cfd1d3",fog:"#e3e4e5",fogDensity:.0068,low:"#a9adb0",high:"#c3c6c8",snowC:"#eeeff0",snowLine:90,water:0,waterC:"#b4b8bb",waterRough:.4,sunC:"#000000",sunDir:d(0,.3,-1),sunSize:0,lightC:"#ffffff",light:.45,lightDir:d(-.3,.8,.3),hemiSky:"#f0f0f0",hemiGround:"#8d9093",hemi:1.1,treeC:"#6f7477",trees:.35,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:d(0,34,140),look:d(0,16,-20)},mist:{sat:.55,skyTop:"#93a4b1",skyHorizon:"#d6dcdf",skyBottom:"#a9b5bd",fog:"#ccd4d8",fogDensity:.0047,low:"#56645c",high:"#77858d",snowC:"#e5e9eb",snowLine:95,water:0,waterC:"#7a8c95",waterRough:.22,sunC:"#efe7da",sunDir:d(.5,.35,-1),sunSize:.0016,lightC:"#f2ece2",light:.85,lightDir:d(.5,.6,-.4),hemiSky:"#d5dde2",hemiGround:"#4d5650",hemi:.8,treeC:"#34433b",trees:.95,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:d(-38,22,112),look:d(0,20,-40)},snow:{sat:.6,skyTop:"#a3afba",skyHorizon:"#e1e5e8",skyBottom:"#c9d1d7",fog:"#dde2e6",fogDensity:.0045,low:"#e7ebee",high:"#f2f4f6",snowC:"#fbfcfd",snowLine:-20,water:.5,waterC:"#c3ccd2",waterRough:.75,sunC:"#e9e6e0",sunDir:d(-.4,.3,-1),sunSize:.0014,lightC:"#f4f1ec",light:.7,lightDir:d(-.4,.5,.3),hemiSky:"#eef2f5",hemiGround:"#8a96a0",hemi:.95,treeC:"#36443f",trees:1,rain:0,snow:1,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.45,cam:d(24,11,78),look:d(0,12,-10)},night:{sat:.45,skyTop:"#04060d",skyHorizon:"#1a2238",skyBottom:"#0a0e18",fog:"#111727",fogDensity:.0032,low:"#3a4352",high:"#4a5262",snowC:"#8a93a3",snowLine:160,water:0,waterC:"#0e1421",waterRough:.1,sunC:"#d8d4c6",sunDir:d(-.45,.32,-1),sunSize:.0022,lightC:"#93a0bf",light:.16,lightDir:d(-.45,.5,-.6),hemiSky:"#26304a",hemiGround:"#07090f",hemi:.16,treeC:"#2c3a33",trees:.85,rain:0,snow:0,fire:.85,stars:1,aurora:0,aur1:"#000000",aur2:"#000000",mist:.25,cam:d(0,10,92),look:d(0,16,-40)},aurora:{sat:.65,skyTop:"#03060a",skyHorizon:"#122029",skyBottom:"#070c10",fog:"#0d161b",fogDensity:.0034,low:"#3b464c",high:"#4c575e",snowC:"#a9b5bb",snowLine:55,water:0,waterC:"#0c1418",waterRough:.08,sunC:"#000000",sunDir:d(0,.3,-1),sunSize:0,lightC:"#8fb1aa",light:.14,lightDir:d(.2,.6,-.8),hemiSky:"#1f3a3a",hemiGround:"#05080a",hemi:.18,treeC:"#2a3833",trees:.6,rain:0,snow:.22,fire:0,stars:.75,aurora:1,aur1:"#4f8f80",aur2:"#6f6595",mist:.15,cam:d(30,15,102),look:d(0,34,-80)},ocean:{sat:.7,skyTop:"#4a4e68",skyHorizon:"#d4a28b",skyBottom:"#7c6670",fog:"#c29d90",fogDensity:.0026,low:"#4a4652",high:"#5d5765",snowC:"#a69aa3",snowLine:200,water:11,waterC:"#585d77",waterRough:.14,sunC:"#ecd0b2",sunDir:d(0,.17,-1),sunSize:.0045,lightC:"#efcfb4",light:.95,lightDir:d(0,.2,-1),hemiSky:"#c9a6a0",hemiGround:"#3c3a4a",hemi:.7,treeC:"#2f2c35",trees:0,rain:0,snow:0,fire:0,stars:.15,aurora:0,aur1:"#000000",aur2:"#000000",mist:.35,cam:d(0,7,125),look:d(0,9,0)}};Object.assign(L,{spring:{sat:.78,skyTop:"#86acd2",skyHorizon:"#e4eef1",skyBottom:"#c9d8de",fog:"#dbe6e8",fogDensity:.0031,low:"#6e8f55",high:"#8ea478",snowC:"#eef2f2",snowLine:150,water:0,waterC:"#6a95a6",waterRough:.18,sunC:"#fff2d6",sunDir:d(.4,.42,-1),sunSize:.0018,lightC:"#fff3df",light:1,lightDir:d(.4,.7,-.3),hemiSky:"#dde9f1",hemiGround:"#5a6c48",hemi:.9,treeC:"#4a7342",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.2,cam:d(-20,12,100),look:d(0,12,-20),bloom:1,flowers:1,hives:1,creek:1,fishy:.3},summer:{sat:.92,skyTop:"#3f86cf",skyHorizon:"#cde6f4",skyBottom:"#93c4d6",fog:"#cbe2ec",fogDensity:.0021,low:"#5a8e42",high:"#7ba158",snowC:"#f2f4f4",snowLine:210,water:0,waterC:"#21b2b4",waterRough:.05,sunC:"#fff5d8",sunDir:d(.2,.62,-1),sunSize:.0026,lightC:"#fff6e4",light:1.35,lightDir:d(.3,.85,-.3),hemiSky:"#cbe6ff",hemiGround:"#4a6a38",hemi:.95,treeC:"#3d8a38",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:0,cam:d(10,11,110),look:d(0,10,-10),lush:1,fruitCol:1,sand:1,creek:.7,flowers:.45,fishy:.4},fall:{sat:.82,skyTop:"#7a93ab",skyHorizon:"#ead7bd",skyBottom:"#b8a38c",fog:"#d8c6ad",fogDensity:.0036,low:"#7d6b44",high:"#92805b",snowC:"#efece6",snowLine:175,water:0,waterC:"#5c7380",waterRough:.2,sunC:"#ffd7a4",sunDir:d(-.5,.24,-1),sunSize:.002,lightC:"#ffdaa8",light:.95,lightDir:d(-.5,.5,-.4),hemiSky:"#e5d4bd",hemiGround:"#5a4a34",hemi:.85,treeC:"#4c5a3a",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.3,cam:d(-30,14,105),look:d(0,12,-30),fall:1,bare:.4,leaves:1,creek:.5}}),Object.assign(L.aurora,{aur1:"#57e0a4",aur2:"#a77de0",dof:.3}),Object.assign(L.night,{dof:.6}),L.rain.fishy=1;let q={fall:0,bare:0,bloom:0,lush:0,leaves:0,flowers:0,hives:0,creek:0,fishy:0,sand:0,fruitCol:0,dof:1};for(let v in L)L[v]={...q,...L[v]};for(let v in L)Pc.forEach((Y,ne)=>{L[v][Y]=Ed[v][ne]});let V=["skyTop","skyHorizon","skyBottom","fog","low","high","snowC","waterC","sunC","lightC","hemiSky","hemiGround","treeC","aur1","aur2"],ce=["sunDir","lightDir","cam","look"],le=v=>{let Y={};for(let ne in v)V.includes(ne)?Y[ne]=new lt(v[ne]):ce.includes(ne)?Y[ne]=v[ne].clone():Y[ne]=v[ne];return Y},Q=v=>le(v),B=le(L.rain),Re=Q(B),Ie=Q(B),Le=0,He=1,$e=0,je="rain",et="full",H=!1,Ne=!1,Me=1,ke=1,Ve=v=>v<.5?4*v*v*v:1-Math.pow(-2*v+2,3)/2,be=v=>{for(let Y in Ie)V.includes(Y)||ce.includes(Y)?B[Y].copy(Re[Y]).lerp(Ie[Y],v):B[Y]=Re[Y]+(Ie[Y]-Re[Y])*v},N=0,W=()=>{let v=B;h.uTop.value.copy(v.skyTop),h.uHorizon.value.copy(v.skyHorizon),h.uBottom.value.copy(v.skyBottom),h.uSunColor.value.copy(v.sunC),h.uSunDir.value.copy(v.sunDir).normalize(),h.uSunSize.value=v.sunSize,h.uStars.value=v.stars,h.uAurora.value=v.aurora,h.uAur1.value.copy(v.aur1),h.uAur2.value.copy(v.aur2),t.fog.color.copy(v.fog),t.fog.density=v.fogDensity*(1+Tt.focus*.35),v.pCabin>.5?(p.uHole.value.set(...G.cabin.holeBox),P.uStudy.value.set(...G.cabin.studyBox)):(p.uHole.value.copy(f),P.uStudy.value.copy(f)),p.uLow.value.copy(v.low),p.uHigh.value.copy(v.high),p.uSnow.value.copy(v.snowC),p.uSnowLine.value=v.snowLine,_.position.y=v.water,T.color.copy(v.waterC),T.roughness=v.waterRough,E.color.copy(v.lightC),E.intensity=v.light*2.2,E.position.copy(v.lightDir).multiplyScalar(300),x.color.copy(v.hemiSky),x.groundColor.copy(v.hemiGround),x.intensity=v.hemi*1.6,O.color.copy(v.treeC),C.uTree.value=v.trees,xe.visible=v.trees>.01,Se.visible=xe.visible,J.uFall.value=v.fall,J.uBloom.value=v.bloom,J.uLush.value=v.lush,J.uBare.value=v.bare,Be.uFruitCol.value=v.fruitCol,p.uSand.value=v.sand,pt.value=Math.min(1,v.bare*2.5)*v.trees,Je.visible=pt.value>.01,Ce.material.uniforms.uOpacity.value=v.leaves*(1-N),Ce.visible=v.leaves*(1-N)>.01,Ee.uniforms.uOpacity.value=v.rain*(1-N),Ue.visible=v.rain*(1-N)>.01,st.material.uniforms.uOpacity.value=v.snow*(1-N),st.visible=v.snow*(1-N)>.01,A.material.uniforms.uOpacity.value=v.fire,A.visible=v.fire>.01;let Y=v.pCabin>.5&&G.cabin.inside(n.position.x,n.position.z)?1:0;N+=(Y-N)*.12,ie.forEach(ne=>{let Oe=Math.hypot(ne.position.x-n.position.x,ne.position.z-n.position.z);ne.material.opacity=v.mist*.5*c(12,80,Oe)*(1-N),ne.material.color.copy(v.fog),ne.visible=v.mist>.01&&N<.99}),fs.uSat.value=v.sat},j={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",v=>{j.x=v.clientX/innerWidth*2-1,j.y=v.clientY/innerHeight*2-1},{passive:!0});let pe=7.5,tt=24,U={px:0,pz:0,vx:0,vz:0,homing:!1,yaw:0,yawTo:0,pitch:0,pitchTo:0,ground:0,on:!1},ze=new Set,M={phase:0,amp:0,run:0,lastStep:0},k=70,te={y:0,v:0,air:!1},ve=-1.1,Pe=.9,Te={x:-1,y:-1,inside:!1},fe={on:!1,t0:0,dur:1,tx:0,tz:0,sy:0,ty:0,yaw0:0,yaw1:0,lift:10,y:0,roll:0},ct=1/60,Dt=new I,cn=new I,Ot=new I,kt=new I(0,1,0),Tt={focus:0,focusTo:0,pan:0,panTo:0,pulse:0},xn=new I,Vn=new I,qi=v=>{let Y=et!=="full";j.sx+=(j.x-j.sx)*.035,j.sy+=(j.y-j.sy)*.035;let ne=(Y?0:1)*(1-c(0,35,Math.hypot(U.px,U.pz)));n.position.set(B.cam.x+Math.sin(v*.05)*3*ne+j.sx*6*ne,B.cam.y+$e+Math.sin(v*.07)*.8*ne-j.sy*2.5*ne,B.cam.z),xn.copy(B.look),xn.x+=j.sx*3*ne;let Oe=Math.hypot(U.px,U.pz);if(Oe>.01||Math.abs(U.yaw)>5e-4||Math.abs(U.pitch)>5e-4){Dt.copy(B.look).sub(B.cam);let wt=Dt.length();Dt.normalize();let yt=n.position.x+U.px,mt=n.position.z+U.pz,vt=g(yt,mt);for(let Ze=0;Ze<6.28;Ze+=1.57)vt=Math.max(vt,g(yt+Math.cos(Ze)*4,mt+Math.sin(Ze)*4));let _t=G.floorAt(yt,mt,B);vt=_t&&_t.under?_t.y:Math.max(vt,_.position.y,_t?_t.y:-1e9),_t&&_t.under||(vt=Math.max(vt,G.solidTop(yt,mt,U.ground-pe+te.y,B)));let zt=vt+pe;U.ground+=(zt-U.ground)*.12,U.ground=Math.max(U.ground,vt+3);let ln=c(0,35,Oe);n.position.set(yt,Math.max(n.position.y*(1-ln)+U.ground*ln,ln>.5?vt+3:-1e9),mt),fe.on&&(n.position.y=Math.max(fe.y,vt+3),U.ground=n.position.y),n.position.y+=te.y,Ot.copy(Dt).applyAxisAngle(kt,U.yaw),Ot.y=Ot.y*(1-ln)-.04*ln+U.pitch,Ot.normalize(),xn.copy(n.position).addScaledVector(Ot,wt)}else U.ground=n.position.y;let Fe=Tt.focus;(Fe>5e-4||Math.abs(Tt.pan)>5e-4)&&(Vn.copy(B.look).sub(B.cam).normalize(),n.position.addScaledVector(Vn,Fe*34),n.position.y-=Fe*4-Tt.pulse*2,n.position.x+=Tt.pan*10*Fe,xn.x+=Tt.pan*38*Fe,xn.y-=Fe*3);let Ge=fe.on?fe.roll:0;if(M.amp>.001&&et==="full"){let wt=Math.sin(M.phase),yt=Math.sin(M.phase*2),mt=M.amp*(1+M.run*.8),vt=-Math.abs(wt)*.32*mt+.16*mt,_t=wt*.16*mt;n.position.y+=vt,Vn.copy(xn).sub(n.position),Vn.y=0,Vn.normalize(),n.position.x+=-Vn.z*_t,n.position.z+=Vn.x*_t,xn.y+=vt*.5,Ge+=wt*.006*mt+yt*.0015*mt}n.lookAt(xn),Ge&&n.rotateZ(Ge);let ft=(innerWidth<700?62:50)-Fe*6+Tt.pulse*1.5;Math.abs(n.fov-ft)>.01&&(n.fov=ft,n.updateProjectionMatrix()),m.position.copy(n.position),Ue.position.set(n.position.x,n.position.y-20,n.position.z),st.position.set(n.position.x,n.position.y-20,n.position.z),Ce.position.set(n.position.x,n.position.y-20,n.position.z),A.position.set(B.look.x*.3,_.position.y,B.cam.z-90)},Zn=new I,Yi=new I,Zi=new I,Li=new I,S=(v,Y,ne)=>{if(ne<0)return 0;if(v==="torch")return Y?ne<.04?.55:ne<.08?.12:ne<.16?.12+(ne-.08)/.08*.88:1:Math.max(0,1-ne/.12);if(Y){if(ne<.12)return ne/.12*.35;if(ne<.24)return .35-(ne-.12)/.12*.2;if(ne<.7){let Oe=(ne-.24)/.46;return .15+(1-Math.pow(1-Oe,3))*.85}return 1}return Math.max(0,1-Math.pow(ne/.5,.8))},K=(v,Y)=>{n.updateMatrixWorld(),Zn.set(0,0,-1).applyQuaternion(n.quaternion),Yi.set(1,0,0).applyQuaternion(n.quaternion),Zi.set(0,1,0).applyQuaternion(n.quaternion);let ne=1-Math.pow(1-.16,ct*60),Oe=Math.min(1.6,t.fog.density/.004),Fe=Ee.uniforms.uOpacity.value,Ge=(v-Ae.torch.since)/1e3,ft=S("torch",Ae.torch.on,Ge)*(Ae.torch.on&&Ge>.16?.985+.015*Math.sin(Y*40)*Math.sin(Y*7):1);if(Ae.torch.level=ft,ft>.001){let vt=M.amp*(et==="full"?1:0);qe.position.copy(n.position).addScaledVector(Yi,.75).addScaledVector(Zi,-.6-Math.sin(M.phase)*.05*vt).addScaledVector(Zn,.4),Li.copy(Zn),et==="full"&&(Li.addScaledVector(Yi,Math.sin(Y*1.7)*.004+Math.sin(Y*4.3)*.002+Math.sin(M.phase)*.01*vt),Li.addScaledVector(Zi,Math.sin(Y*2.1+1)*.004+Math.sin(M.phase*2)*.008*vt)),Ae.aim.lerp(Li.normalize(),et==="full"?ne:1).normalize(),qe.target.position.copy(qe.position).addScaledVector(Ae.aim,40);let _t=90,zt=Math.tan(qe.angle)*_t;St.position.copy(qe.position),St.lookAt(qe.target.position),St.scale.set(zt,zt,_t)}qe.intensity=ft*520,qe.castShadow=ft>.02,gt.uniforms.uOpacity.value=ft*(.018+.03*Oe+.035*Fe),St.visible=ft>.01;let wt=(v-Ae.lamp.since)/1e3,yt=Ae.lamp.on&&wt>.7?.88+.07*Math.sin(Y*9.3+Math.sin(Y*3.1)*2)+.04*Math.sin(Y*23.7)+.02*Math.sin(Y*41):1,mt=S("lamp",Ae.lamp.on,wt)*yt;if(Ae.lamp.level=mt,et==="full"){let vt=(U.vx-Ae.lastVX)/Math.max(ct,.001),_t=(U.vz-Ae.lastVZ)/Math.max(ct,.001),zt=-(vt*Zn.z-_t*Zn.x)*.0012,ln=-(vt*Zn.x+_t*Zn.z)*.0012,Ze=ct;Ae.swingV+=(-Ae.swing*14-Ae.swingV*1.8+zt)*Ze,Ae.swing+=Ae.swingV*Ze,Ae.swingZV+=(-Ae.swingZ*14-Ae.swingZV*1.8+ln+Math.sin(M.phase*2)*.6*M.amp)*Ze,Ae.swingZ+=Ae.swingZV*Ze}Ae.lastVX=U.vx,Ae.lastVZ=U.vz,De.position.copy(n.position).addScaledVector(Yi,1.1+Math.sin(Ae.swing)*1.4).addScaledVector(Zi,-2.4+(1-Math.cos(Ae.swing))*1.4).addScaledVector(Zn,2.2+Math.sin(Ae.swingZ)*1),et==="full"&&Ae.lamp.on&&(De.position.y+=Math.sin(Y*6.1)*.03),De.intensity=mt*900,Ae.level=Math.max(ft,mt),We.classList.toggle("light-on",Ae.level>.05),We.classList.toggle("lamp-on",mt>.05)},me=()=>{let v=performance.now(),Y=window.MEOW_SOUND;Ae.state==="off"?(Ae.state="torch",Ae.torch.on=!0,Ae.torch.since=v,Ae.aim.copy(Zn.lengthSq()?Zn:Ae.aim),Y&&Y.click&&Y.click(!0)):Ae.state==="torch"?(Ae.state="lamp",Ae.torch.on=!1,Ae.torch.since=v,Ae.lamp.on=!0,Ae.lamp.since=v+120,Y&&Y.click&&Y.click(!1),Y&&Y.ignite&&setTimeout(()=>Y.ignite(),120)):(Ae.state="off",Ae.lamp.on=!1,Ae.lamp.since=v,Y&&Y.puff&&Y.puff()),Y&&Y.fire&&Y.fire(Ae.state==="lamp"),!H&&Ne&&(H=!0,$t=!0,requestAnimationFrame(vi)),dispatchEvent(new CustomEvent("meow:light",{detail:{state:Ae.state}}))},oe=(v,Y,ne)=>{if(xe.visible&&C.uTree.value>.5)for(let Oe=0;Oe<Z.length;Oe++){let Fe=Z[Oe],Ge=Fe.p.x-v,ft=Fe.p.z-Y,wt=Fe.s.x*.75+1.2+ne;if(Ge*Ge+ft*ft<wt*wt)return!1}return!G.blockedAt(v,Y,ne,B)},ae=()=>{let v=B.cam.x,Y=B.cam.z,ne=B.look.x-B.cam.x,Oe=B.look.z-B.cam.z,Fe=Math.hypot(ne,Oe)||1,Ge=Math.atan2(Oe/Fe,ne/Fe),ft=xe.visible&&C.uTree.value>.5,wt=_.position.y,yt=[];for(let _t=-.7;_t<=.701;_t+=.05)for(let zt=70;zt<=380;zt+=10){let ln=Ge+_t,Ze=v+Math.cos(ln)*zt,Ut=Y+Math.sin(ln)*zt,nn=g(Ze,Ut);if(nn<wt+1.5||nn>k-6)continue;let Yt=0;if(ft)for(let yn=0;yn<Z.length;yn++){let wn=Z[yn].p.x-Ze,Rn=Z[yn].p.z-Ut;wn*wn+Rn*Rn<1600&&Yt++}let _n=(ft?Math.min(Yt,22)*2:30)-Math.abs(_t)*34-zt*.045;yt.push({x:Ze,z:Ut,a:_t,d:zt,score:_n})}yt.sort((_t,zt)=>zt.score-_t.score);let mt=null;for(let _t of yt.slice(0,60)){if(!oe(_t.x,_t.z,4))continue;let zt=!0,ln=(v-_t.x)/_t.d,Ze=(Y-_t.z)/_t.d;for(let Ut=2;Ut<70&&zt;Ut+=2.5)zt=oe(_t.x+ln*Ut,_t.z+Ze*Ut,1.5);for(let Ut=3;Ut<30&&zt;Ut+=3)zt=oe(_t.x-ln*Ut,_t.z-Ze*Ut,1);if(zt){mt=_t;break}}mt||(mt={x:v+Math.cos(Ge)*60,z:Y+Math.sin(Ge)*60,a:0,d:60});let vt=et==="full";fe.on=!0,fe.t0=performance.now(),fe.dur=vt?2300+mt.d*5.2:700,fe.sx=U.px,fe.sz=U.pz,fe.tx=mt.x-v,fe.tz=mt.z-Y,fe.sy=n.position.y,fe.ty=Math.max(g(mt.x,mt.z),wt)+pe,fe.yaw0=U.yaw,fe.yaw1=-mt.a,fe.lift=vt?9+mt.d*.02:0,U.vx=U.vz=0,U.homing=!1,!H&&Ne&&(H=!0,$t=!0,requestAnimationFrame(vi))},it=v=>(v=Math.min(1,Math.max(0,v)),v*v*v*(v*(v*6-15)+10)),ht=v=>{let Y=Math.min(1,(v-fe.t0)/fe.dur),ne=it(Y);U.px=fe.sx+(fe.tx-fe.sx)*ne,U.pz=fe.sz+(fe.tz-fe.sz)*ne,U.vx=U.vz=0;let Oe=it(Y/.55);U.yaw=U.yawTo=fe.yaw0+(fe.yaw1-fe.yaw0)*Oe,U.pitch=U.pitchTo=-.07*Math.sin(Math.PI*Y)*(1-Y*.5);let Fe=B.cam.x+U.px,Ge=B.cam.z+U.pz,ft=it((Y-.3)/.7),wt=fe.sy+(fe.ty-fe.sy)*ft+fe.lift*Math.pow(Math.sin(Math.PI*Math.min(1,Y*1.15)),1.4);wt=Math.max(wt,Math.max(g(Fe,Ge),_.position.y)+4),fe.y=wt,fe.roll=(fe.yaw1-fe.yaw0)*.22*Math.sin(Math.PI*Math.min(1,Y*1.3)),Y>=1&&(fe.on=!1,fe.roll=0,U.ground=fe.ty,fe.justLanded=!0)},We=document.documentElement,ut=(v,Y,ne)=>Math.max(Y,Math.min(ne,v)),rt=()=>!Ne||We.classList.contains("locked")||Tt.focusTo>0,Ct=v=>v&&v.closest&&v.closest(".sidebar, .modal, .gallery, .top, .composer, .tools, .tree-card, .home-btn, .backdrop, .walk-hint, input, button, a, label"),It=()=>{H||Ji()},dt=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"],Vt=v=>v&&(/INPUT|TEXTAREA|SELECT/.test(v.tagName)||v.isContentEditable),$t=!1;addEventListener("keydown",v=>{!dt.includes(v.code)||Vt(v.target)||rt()||v.metaKey||v.ctrlKey||v.altKey||document.querySelector(".modal:not([hidden])")||(v.code.startsWith("Shift")||v.preventDefault(),ze.add(v.code),U.homing=!1,!fe.on&&!v.code.startsWith("Shift")&&Math.hypot(U.px,U.pz)<3&&(ae(),ot()),!H&&Ne&&(H=!0,$t=!0,requestAnimationFrame(vi)))}),addEventListener("keyup",v=>ze.delete(v.code)),addEventListener("keydown",v=>{v.code!=="KeyF"||v.repeat||Vt(v.target)||!Ne||We.classList.contains("locked")||document.querySelector(".modal:not([hidden])")||v.metaKey||v.ctrlKey||v.altKey||(v.preventDefault(),me())}),addEventListener("blur",()=>{ze.clear(),Te.inside=!1}),document.addEventListener("mouseleave",()=>{Te.inside=!1}),addEventListener("keydown",v=>{v.code!=="KeyR"||v.repeat||Vt(v.target)||rt()||!U.on||fe.on||v.metaKey||v.ctrlKey||document.querySelector(".modal:not([hidden])")||ye.key(performance.now())&&(v.preventDefault(),!H&&Ne&&(H=!0,$t=!0,requestAnimationFrame(vi)))}),addEventListener("keydown",v=>{v.code!=="Space"||Vt(v.target)||rt()||!U.on||fe.on||document.querySelector(".modal:not([hidden])")||(v.preventDefault(),!(v.repeat||te.air)&&(te.v=15.5,te.air=!0,!H&&Ne&&(H=!0,$t=!0,requestAnimationFrame(vi))))});let Jt=()=>[innerWidth/2,innerHeight/2],Nt=()=>!!document.pointerLockElement,mn=0,ot=()=>{if(!(Nt()||!i.requestPointerLock||mn>0))try{let v=i.requestPointerLock();v&&v.catch&&v.catch(()=>{mn++})}catch{mn++}};document.addEventListener("pointerlockerror",()=>{mn++});let En=()=>{Nt()&&document.exitPointerLock&&(window.MEOW_UNLOCK_REASON="self",document.exitPointerLock())},Wt=()=>Math.max(.2,Math.min(2.5,window.MEOW_STATE&&Number(window.MEOW_STATE.sens)||1)),Wn=()=>{!U.on||rt()||G.cabin.study.back(performance.now())||window.MEOW_BG&&window.MEOW_BG.home()},Jn=(v,Y)=>(Ps.set(v/innerWidth*2-1,-(Y/innerHeight)*2+1),ds.setFromCamera(Ps,n),ds),hi=document.createElement("div");hi.className="aim-dot",document.body.appendChild(hi),document.addEventListener("pointerlockchange",()=>{if(We.classList.toggle("pl",Nt()),!Nt()){let v=window.MEOW_UNLOCK_REASON;window.MEOW_UNLOCK_REASON="",v||setTimeout(()=>{document.hasFocus()&&!document.hidden&&Wn()},80)}Nt()?(sn.x=Jt()[0],sn.y=Jt()[1]):sn.id>=0&&Ic(-1)}),addEventListener("keydown",v=>{if(v.key!=="Escape"||!U.on||Vt(v.target)||document.querySelector(".modal:not([hidden])"))return;let Y=document.getElementById("treeCard");Y&&!Y.hidden&&Y.classList.contains("show")||Wn()},!0);let ri={aimed:!1},Zt=document.createElement("div");Zt.className="act-hint",Zt.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v6" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 9h5.5V3.4A6 6 0 0 0 6.5 9z" fill="currentColor"/></svg><span></span>',document.body.appendChild(Zt);let pn=Zt.querySelector("span"),ui=(v,Y)=>window.MEOW_I18N?window.MEOW_I18N.t(v):Y,tn=!1,di=0,Di=(v,Y)=>{let ne=G.cabin.door;if(!U.on||fe.on||B.pCabin<.5||!ne.near(n.position.x,n.position.z))return!1;Ps.set(v/innerWidth*2-1,-(Y/innerHeight)*2+1),ds.setFromCamera(Ps,n);let Oe=ds.intersectObject(ne.mesh,!1)[0];return!!Oe&&Oe.distance<26},xr=()=>{let v=G.cabin.door;if(!v.canToggle(n.position.x,n.position.z))return!1;let Y=v.toggle(performance.now());return window.MEOW_SOUND&&window.MEOW_SOUND.door&&window.MEOW_SOUND.door(Y),!H&&Ne&&(H=!0,$t=!0,requestAnimationFrame(vi)),!0},Ad=()=>{if(++di%3)return;let[v,Y]=Nt()?Jt():[sn.x,sn.y];ri.aimed=Di(v,Y);let ne=G.cabin.study.hover(Jn(v,Y),U.on&&!fe.on&&B.pCabin>.5&&N>.5);We.classList.toggle("on-book",ne),ri.aimed!==tn&&(tn=ri.aimed,Zt.classList.toggle("show",ri.aimed)),ri.aimed&&(pn.textContent=G.cabin.door.open?ui("doorClose","Click to close the door"):ui("doorOpen","Click to open the door"))};addEventListener("keydown",v=>{v.code!=="KeyE"||Vt(v.target)||rt()||!U.on||v.repeat||G.cabin.door.near(n.position.x,n.position.z)&&B.pCabin>.5&&xr()});let jn=null,Cs=null,sn={x:0,y:0,pending:!1,id:-1};addEventListener("pointerdown",v=>{if(rt()||Ct(v.target)||fe.on)return;if(v.button===2||v.pointerType==="touch"&&v.button===0)jn={x:v.clientX,y:v.clientY,yaw:U.yawTo,pitch:U.pitchTo,moved:!1,touch:v.pointerType==="touch"},v.preventDefault();else if(v.button===0){if(U.on&&!Nt()&&v.pointerType==="mouse"&&!mn&&i.requestPointerLock){ot(),Cs=null,v.preventDefault(),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}));return}Cs={x:v.clientX,y:v.clientY},v.preventDefault()}}),addEventListener("contextmenu",v=>{Ne&&!Ct(v.target)&&!We.classList.contains("locked")&&v.preventDefault()}),addEventListener("pointermove",v=>{if(jn){let Y=v.clientX-jn.x,ne=v.clientY-jn.y;Math.hypot(Y,ne)>5&&(jn.moved=!0),U.yawTo=jn.yaw-Y*.0035,U.pitchTo=ut(jn.pitch-ne*.0025,ve,Pe),We.classList.add("looking"),It();return}if(Nt()){if(U.on&&!fe.on&&!rt()){let Y=Wt();U.yawTo-=v.movementX*.0024*Y,U.pitchTo=ut(U.pitchTo-v.movementY*.002*Y,ve,Pe),It()}return}if(Te.x=v.clientX,Te.y=v.clientY,Te.inside=!0,Te.ui=!!Ct(v.target),rt()||Ct(v.target)){sn.id>=0&&Ic(-1);return}if(U.on&&!fe.on&&v.pointerType!=="touch"&&(v.movementX||v.movementY)){let Y=Wt();U.yawTo-=v.movementX*.0028*Y,U.pitchTo=ut(U.pitchTo-v.movementY*.0022*Y,ve,Pe),It()}sn.x=v.clientX,sn.y=v.clientY,sn.pending=!0},{passive:!0}),addEventListener("pointerup",v=>{let Y=!1;if(jn?(Y=jn.touch&&!jn.moved,jn=null,We.classList.remove("looking")):Cs&&v.button===0&&(Y=Nt()||Math.hypot(v.clientX-Cs.x,v.clientY-Cs.y)<8),Cs=null,Y){let[ne,Oe]=Nt()?Jt():[v.clientX,v.clientY];if(U.on&&ye.click(performance.now()))return;if(U.on&&B.pCabin>.5&&N>.5&&G.cabin.study.click(Jn(ne,Oe),performance.now())){It();return}if(Di(ne,Oe)){xr();return}let Fe=sn.id>=0?sn.id:hh(ne,Oe);Fe>=0?(_r.set(Fe,performance.now()),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"click",id:Fe,x:ne,y:Oe}})),It()):dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}))}});let ds=new Qr;ds.far=900;let Ps=new At,hh=(v,Y)=>{if(!xe.visible||C.uTree.value<.5)return-1;Ps.set(v/innerWidth*2-1,-(Y/innerHeight)*2+1),ds.setFromCamera(Ps,n);let ne=ds.intersectObjects([xe,Se],!1)[0];return ne?ne.instanceId:-1},Rd=new lt(2.6,2.6,2.4),Ic=v=>{v!==sn.id&&(sn.id>=0&&xe.setColorAt(sn.id,Z[sn.id]?Z[sn.id].c:ee),sn.id=v,v>=0&&xe.setColorAt(v,Rd),xe.instanceColor.needsUpdate=!0,We.classList.toggle("on-tree",v>=0),dispatchEvent(new CustomEvent("meow:tree",{detail:v>=0?{type:"hover",id:v,x:sn.x,y:sn.y}:{type:"leave"}})),It())},_r=new Map,uh=new Gt,dh=new bn,Lc=new Et,Cd=v=>{_r.size&&(_r.forEach((Y,ne)=>{let Oe=(v-Y)/1e3,Fe=Z[ne];if(!Fe){_r.delete(ne);return}let Ge=Oe>2.6?0:Math.sin(Oe*15)*Math.exp(-Oe*2.1)*.17;dh.set(Ge*.6,0,Ge),uh.setFromEuler(dh).multiply(Fe.q),Lc.compose(Fe.p,uh,Fe.s),xe.setMatrixAt(ne,Lc),Qe[ne]&&Se.setMatrixAt(ne,Lc),Oe>2.6&&_r.delete(ne)}),xe.instanceMatrix.needsUpdate=!0,Se.instanceMatrix.needsUpdate=!0)},Dc=new kn(4,4,{type:si,depthBuffer:!0}),fs={tScene:{value:Dc.texture},uRes:{value:new At(4,4)},uTime:h.uTime,uBlur:{value:3},uBand:{value:.22},uFocusY:{value:.47},uPull:{value:0},uAberr:{value:.006},uSat:{value:0},uGrain:{value:.022},uVig:{value:.32},uFlicker:{value:.01}},fh=new er,Pd=new as(-1,1,1,-1,0,1);fh.add(new xt(new fn(2,2),new on({uniforms:fs,depthTest:!1,depthWrite:!1,vertexShader:`
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
      }`})));let ph=0,yr=()=>{let v=innerWidth,Y=innerHeight;e.setSize(v,Y,!1);let ne=e.getDrawingBufferSize(new At);Dc.setSize(ne.x,ne.y),fs.uRes.value.copy(ne),n.aspect=v/Y,n.fov=v<700?62:50,n.updateProjectionMatrix(),H||Ji()},mh=0,gh=v=>{let Y=s.getElapsedTime();h.uTime.value=Y;let ne=Math.min(1,(v-Le)/He);be(Ve(ne)),$e=Math.sin(Math.PI*Ve(ne))*(et==="full"?9:0)*(ne<1?1:0),b.offset.x=Y*.004,b.offset.y=Y*.006,ie.forEach(Ze=>{Ze.position.x+=Ze.userData.v*.016,Ze.position.x>520&&(Ze.position.x=-520),Ze.position.x<-520&&(Ze.position.x=520),Ze.lookAt(n.position.x,Ze.position.y,n.position.z)}),Me+=(ke-Me)*.04;let Oe=et==="full"?.035:1;Tt.focus+=(Tt.focusTo-Tt.focus)*Oe,Tt.pan+=(Tt.panTo-Tt.pan)*(et==="full"?.05:1),Tt.pulse*=.94;let Fe=et==="full",Ge=Math.min(.1,Math.max(.001,(v-(mh||v))/1e3))*60,ft=Ze=>Fe?1-Math.pow(1-Ze,Ge):1;{let Ze=Ge/60,Ut=B.look.x-B.cam.x,nn=B.look.z-B.cam.z,Yt=Math.hypot(Ut,nn)||1,_n=Math.cos(U.yaw),yn=Math.sin(U.yaw),wn=Ut/Yt*_n+nn/Yt*yn,Rn=-(Ut/Yt)*yn+nn/Yt*_n,Ni=fe.on?0:1,vr=Ni*((ze.has("KeyW")||ze.has("ArrowUp")?1:0)-(ze.has("KeyS")||ze.has("ArrowDown")?1:0)),_o=Ni*((ze.has("KeyD")||ze.has("ArrowRight")?1:0)-(ze.has("KeyA")||ze.has("ArrowLeft")?1:0)),yo=wn*vr-Rn*_o,vo=Rn*vr+wn*_o,Mo=Math.hypot(yo,vo),vh=tt*(ze.has("ShiftLeft")||ze.has("ShiftRight")?2.4:1);Mo>0&&(yo=yo/Mo*vh,vo=vo/Mo*vh);let Mh=1-Math.pow(1-(Mo>0?.08:.12),Ge);U.vx+=(yo-U.vx)*Mh,U.vz+=(vo-U.vz)*Mh;let Uc=(wo,Dd)=>{let bo=B.cam.x+wo,Mr=B.cam.z+Dd;if(!(Math.abs(bo)<820&&Mr>-900&&Mr<420&&g(bo,Mr)<k))return!1;if(xe.visible&&C.uTree.value>.5)for(let Fc=0;Fc<Z.length;Fc++){let Bc=Z[Fc],Sh=Bc.p.x-bo,Eh=Bc.p.z-Mr,wh=Bc.s.x*.75+1.2;if(Sh*Sh+Eh*Eh<wh*wh)return!1}return!G.blockedAt(bo,Mr,0,B,U.ground-pe+te.y)},So=U.px+U.vx*Ze,Eo=U.pz+U.vz*Ze;if(fe.on?ht(v):Uc(So,Eo)?(U.px=So,U.pz=Eo):Uc(So,U.pz)?(U.px=So,U.vz*=.5):Uc(U.px,Eo)?(U.pz=Eo,U.vx*=.5):(U.vx*=.3,U.vz*=.3),U.homing){let wo=1-Math.pow(.94,Ge);U.px-=U.px*wo,U.pz-=U.pz*wo,U.vx=U.vz=0,Math.hypot(U.px,U.pz)<.05&&(U.px=U.pz=0,U.homing=!1)}let Ld=v-Math.max(Ae.torch.since,Ae.lamp.since)<1200;$t&&!ze.size&&Math.hypot(U.vx,U.vz)<.05&&!U.homing&&!Ld&&!fe.on&&!te.air&&($t=!1,H=et==="full")}if(ct=Ge/60,te.air&&(te.v-=44*ct,te.y+=te.v*ct,te.y<=0&&(te.y=0,te.air=!1,M.amp=Math.min(1.4,M.amp+.5),window.MEOW_SOUND&&window.MEOW_SOUND.step))){let Ze=n.position.x,Ut=n.position.z,nn=g(Ze,Ut),Yt=(G.floorAt(Ze,Ut,B)||{y:-1e9}).y>nn+.2?"wood":nn<_.position.y+.6?"water":je==="snow"||nn>p.uSnowLine.value-6?"snow":"grass";window.MEOW_SOUND.step(Yt,1.5),setTimeout(()=>window.MEOW_SOUND.step(Yt,1.1),70)}if(Nt()&&U.on&&!rt()&&di%3===1){let[Ze,Ut]=Jt();sn.x=Ze,sn.y=Ut,sn.pending=!0}if(!Nt()&&U.on&&!fe.on&&Te.inside&&!Te.ui&&!jn&&!rt()&&et==="full"&&Te.y>innerHeight*.15&&Te.y<innerHeight*.85){let Ze=Math.max(30,innerWidth*.04);Te.x>innerWidth-Ze?U.yawTo-=1.1*ct*(Te.x-(innerWidth-Ze))/Ze:Te.x>=0&&Te.x<Ze&&(U.yawTo+=1.1*ct*(Ze-Te.x)/Ze)}Ad();{let[Ze,Ut]=Nt()?Jt():[sn.x,sn.y];ye.update(v,Y,{active:U.on&&!fe.on&&!rt(),ray:U.on?Jn(Ze,Ut):null,waterY:_.position.y,amount:B.fishy,indoor:N>.5}),ye.busy&&!H&&Ne&&(H=!0,$t=!0,requestAnimationFrame(vi))}G.cabin.feet=U.on?U.ground-pe:void 0,U.on&&!fe.on&&fe.justLanded&&(fe.justLanded=!1,ot()),!U.on&&Nt()&&En();{let Ze=Math.hypot(U.vx,U.vz),Ut=ze.has("ShiftLeft")||ze.has("ShiftRight")?1:0;M.run+=(Ut-M.run)*(1-Math.pow(.9,Ge));let nn=Math.min(1.2,Ze/tt);M.amp+=(nn-M.amp)*(1-Math.pow(.88,Ge)),M.phase+=Math.PI*2*(.95+.5*M.run)*Math.min(1,Ze/tt+.15)*ct*(Ze>.3?1:.4);let Yt=Math.floor(M.phase/Math.PI);if(Yt!==M.lastStep){if(M.lastStep=Yt,Ze>tt*.25&&window.MEOW_SOUND&&window.MEOW_SOUND.step){let yn=n.position.x,wn=n.position.z,Rn=g(yn,wn),Ni=(G.floorAt(yn,wn,B)||{y:-1e9}).y>Rn+.2?"wood":Rn<_.position.y+.6?"water":je==="snow"||Rn>p.uSnowLine.value-6?"snow":"grass";window.MEOW_SOUND.step(Ni,Math.min(1.5,Ze/tt))}let _n=g(n.position.x,n.position.z);if(Ze>tt*.25&&_n>_.position.y+.6&&(je==="snow"||_n>p.uSnowLine.value+4)){let yn=n.position.x,wn=n.position.z,Rn=1.5,Ni=new I(g(yn-Rn,wn)-g(yn+Rn,wn),2*Rn,g(yn,wn-Rn)-g(yn,wn+Rn)).normalize();N<.5&&Ye.place(yn,g(yn,wn),wn,Math.atan2(-U.vx,-U.vz),Ni)}}}let wt=Math.hypot(U.px,U.pz);if(!jn&&wt<2&&!fe.on){let Ze=Math.pow(.96,Ge);U.yawTo*=Ze,U.pitchTo*=Ze}U.yaw+=(U.yawTo-U.yaw)*ft(.12),U.pitch+=(U.pitchTo-U.pitch)*ft(.12);let yt=wt>3;yt!==U.on&&(U.on=yt,We.classList.toggle("exploring",yt)),Cd(v),e.toneMappingExposure=Me,W(),qi(Y),G.update(B,Y,n.position,_.position.y),he.update(B.pRipples*(1-N),n.position,_.position.y),Ye.update(Math.min(1,Math.max(0,(100-B.snowLine)/80))),K(v,Y),sn.pending&&(sn.pending=!1,Ic(N>.5?-1:hh(sn.x,sn.y)));let mt=e.getPixelRatio(),vt=et==="full",_t=ne<1?Math.sin(Math.PI*Ve(ne))*6:0,zt=vt?Math.max(0,1-(v-ph)/3600):0,ln=c(0,60,Math.hypot(U.px,U.pz));fs.uBlur.value=2.6*mt*(1+Tt.focus*2.6)*(1-ln*.7)*B.dof,fs.uBand.value=.22-Tt.focus*.1+ln*.12,fs.uPull.value=(_t*(vt?1:0)+Math.pow(zt,1.6)*18+Tt.pulse*3)*mt,fs.uFlicker.value=vt?.012:0,e.setRenderTarget(Dc),e.render(t,n),e.setRenderTarget(null),e.render(fh,Pd),mh=v},On={last:0,sum:0,n:0,level:0,since:0},Nc=[Math.min(window.devicePixelRatio||1,1.5),1.1,.85,.7],Id=v=>{On.since||(On.since=v);let Y=v-(On.last||v);if(On.last=v,!(v-On.since<5e3||Y>250||document.hidden)&&(On.sum+=Y,On.n++,On.n>=90)){let ne=On.sum/On.n;On.sum=On.n=0,ne>30&&On.level<Nc.length-1&&Nc[On.level+1]<e.getPixelRatio()&&(On.level++,e.setPixelRatio(Nc[On.level]),yr())}},vi=v=>{H&&(document.hidden||(gh(v),Id(v)),requestAnimationFrame(vi))},Ji=()=>{Ne&&(Le=-1e9,Me=ke,gh(performance.now()))},xh=()=>document.documentElement.getAttribute("data-theme")==="dark"?.62:1,_h=(v,Y)=>{L[v]||(v="rain"),je=v,document.documentElement.setAttribute("data-scene",v),Re=Q(B),Ie=le(L[v]),Le=performance.now(),He=et==="full"?Y:1,Ne&&dispatchEvent(new CustomEvent("meow:shot",{detail:{name:v,dur:He}})),H||Ji()},yh=()=>{Ne&&(et==="full"?H||(H=!0,requestAnimationFrame(vi)):(H=!1,Ji()))};window.MEOW_BG={scenes:Object.keys(L),setScene(v){if(!(v===je&&Ne)){if(!Ne){je=L[v]?v:"rain",document.documentElement.setAttribute("data-scene",je);return}_h(v,3200)}},setMotion(v){et=v==="reduced"?"reduced":"full",yh()},focus(v){Tt.focusTo=v?1:0,v&&(En(),fe.on=!1,U.homing=!0,U.yawTo=U.pitchTo=0),H||Ji()},toggleLight(){me()},_standAt(v,Y,ne){U.px=v-B.cam.x,U.pz=Y-B.cam.z,U.vx=U.vz=0,G.cabin.feet=ne==="study"?Ht.y+Xe.floor*Ht.S:void 0;let Oe=G.floorAt(v,Y,B);U.ground=(Oe&&Oe.under?Oe.y:Math.max(g(v,Y),_.position.y,Oe?Oe.y:-1e9))+pe,G.cabin.feet=U.ground-pe,H||Ji()},_look(v,Y){let ne=B.look.x-B.cam.x,Oe=B.look.z-B.cam.z,Fe=B.cam.x+U.px,Ge=B.cam.z+U.pz,ft=Math.atan2(Oe,ne)-Math.atan2(Y-Ge,v-Fe);ft=Math.atan2(Math.sin(ft),Math.cos(ft)),U.yaw=U.yawTo=ft,U.pitch=U.pitchTo=0,H||Ji()},_printAt(v,Y,ne){Ye.place(v,g(v,Y),Y,ne,new I(0,1,0))},_toggleDoor(){G.cabin.door.toggle(performance.now())},get _study(){return G.cabin.study},get _cabin(){return G.cabin},get _props(){return G},get _cur(){return B},_pos(){let v=new I;return n.getWorldDirection(v),{x:B.cam.x+U.px,z:B.cam.z+U.pz,fly:fe.on,pitch:U.pitch,lookY:v.y,yaw:U.yaw,yawTo:U.yawTo,dx:v.x,dz:v.z,cx:n.position.x,cy:n.position.y,cz:n.position.z,ground:U.ground,homing:U.homing}},_sites(){return{cabin:G.cabinAt,circle:G.circleAt}},_nearTree(v,Y=16){let ne=Z[v%Z.length];ne&&this._standAt(ne.p.x,ne.p.z+Y)},enter(){Ne&&!fe.on&&!rt()&&Math.hypot(U.px,U.pz)<3&&(ae(),ot())},home(){En(),G.cabin.study.reset(performance.now()),ye.reset();let v=Math.round(U.yaw/(Math.PI*2))*Math.PI*2;U.yaw-=v,U.yawTo-=v,fe.on=!1,U.homing=!0,U.yawTo=0,U.pitchTo=0,ze.clear(),!H&&Ne&&(H=!0,$t=!0,requestAnimationFrame(vi))},pan(v){Tt.panTo=Math.max(-1,Math.min(1,v||0))},pulse(){et==="full"&&(Tt.pulse=1)},start(){Ne||(Ne=!0,ke=Me=xh(),B=le(L[je]),et==="full"&&(B.cam.add(new I(0,120,230)),B.look.add(new I(0,30,0))),yr(),ph=performance.now(),_h(je,4200),i.classList.add("on"),yh())}};{let v=document.querySelector(".walk-hint");v&&v.addEventListener("click",()=>window.MEOW_BG.enter())}addEventListener("resize",()=>{clearTimeout(yr.t),yr.t=setTimeout(yr,120)}),new MutationObserver(()=>{ke=xh(),H||Ji()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let xo=window.MEOW_STATE;xo&&(je=L[xo.scene]?xo.scene:"rain",et=xo.motion==="reduced"?"reduced":"full"),window.MEOW_READY&&window.MEOW_STATE&&window.MEOW_READY.then(()=>window.MEOW_BG.start())})();})();
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
