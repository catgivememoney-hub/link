(()=>{var Sa="186";var Zh=0,ll=1,Jh=2;var kr=1,Ea=2,Js=3,Ei=0,Rn=1,Wn=2,bi=0,$s=1,Fi=2,hl=3,ul=4,$h=5;var xs=100,Kh=101,Qh=102,jh=103,tu=104,eu=200,nu=201,iu=202,su=203,dl=204,fl=205,ru=206,ou=207,au=208,cu=209,lu=210,hu=211,uu=212,du=213,fu=214,Go=0,ko=1,Vo=2,zs=3,Wo=4,Xo=5,qo=6,Yo=7,ba=0,pu=1,mu=2,ui=0,pl=1,ml=2,gl=3,Vr=4,xl=5,_l=6,yl=7;var vl=300,es=301,_s=302,wa=303,Ta=304,Wr=306,Hs=1e3,xi=1001,Zo=1002,Tn=1003,gu=1004;var Xr=1005;var Pn=1006,Aa=1007;var ns=1008;var Xn=1009,Ml=1010,Sl=1011,Ks=1012,Ra=1013,di=1014,ei=1015,Qn=1016,Ca=1017,Pa=1018,Qs=1020,El=35902,bl=35899,wl=1021,Tl=1022,ni=1023,_i=1026,is=1027,Ia=1028,La=1029,ss=1030,Da=1031;var Na=1033,qr=33776,Yr=33777,Zr=33778,Jr=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,Ha=37492,Ga=37496,ka=37488,Va=37489,$r=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,Ja=37812,$a=37813,Ka=37814,Qa=37815,ja=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,rc=36492,oc=36494,ac=36495,cc=36283,lc=36284,Kr=36285,hc=36286;var yr=2300,Jo=2301,zo=2302,Qc=2303,jc=2400,tl=2401,el=2402;var xu=3200;var Qr=0,_u=1,Oi="",kn="srgb",vr="srgb-linear",Mr="linear",$e="srgb";var Ho=7680;var yu=519,vu=512,Mu=513,Su=514,uc=515,Eu=516,bu=517,dc=518,wu=519,Tu=35044,Al=35048;var Rl="300 es",ci=2e3,Gs=2001;function Sd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ed(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Au(){let i=Sr("canvas");return i.style.display="block",i}var gh={},ks=null;function Cl(...i){let t="THREE."+i.shift();ks?ks("log",t,...i):console.log(t,...i)}function Ru(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function xe(...i){i=Ru(i);let t="THREE."+i.shift();if(ks)ks("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ee(...i){i=Ru(i);let t="THREE."+i.shift();if(ks)ks("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function us(...i){let t=i.join(" ");t in gh||(gh[t]=!0,xe(...i))}function Cu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Pu={[Go]:ko,[Vo]:qo,[Wo]:Yo,[zs]:Xo,[ko]:Go,[qo]:Vo,[Yo]:Wo,[Xo]:zs},yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xh=1234567,xr=Math.PI/180,ds=180/Math.PI;function js(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[e&63|128]+Dn[e>>8&255]+"-"+Dn[e>>16&255]+Dn[e>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Pl(i,t){return(i%t+t)%t}function bd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wd(i,t,e){return i!==t?(e-i)/(t-i):0}function _r(i,t,e){return(1-e)*i+e*t}function Td(i,t,e,n){return _r(i,t,1-Math.exp(-e*n))}function Ad(i,t=1){return t-Math.abs(Pl(i,t*2)-t)}function Rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Id(i,t){return i+Math.random()*(t-i)}function Ld(i){return i*(.5-Math.random())}function Dd(i){i!==void 0&&(xh=i);let t=xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(i){return i*xr}function Ud(i){return i*ds}function Fd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),m=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*x,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*x,a*c);break;case"ZYZ":i.set(l*x,l*m,a*u,a*c);break;default:xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Il={DEG2RAD:xr,RAD2DEG:ds,generateUUID:js,clamp:Oe,euclideanModulo:Pl,mapLinear:bd,inverseLerp:wd,lerp:_r,damp:Td,pingpong:Ad,smoothstep:Rd,smootherstep:Cd,randInt:Pd,randFloat:Id,randFloatSpread:Ld,seededRandom:Dd,degToRad:Nd,radToDeg:Ud,isPowerOfTwo:Fd,ceilPowerOfTwo:Od,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:zd,normalize:Gn,denormalize:Os},Fl=class Fl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Oe(this.x,t.x,e.x),this.y=Oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Oe(this.x,t,e),this.y=Oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fl.prototype.isVector2=!0;var Te=Fl,Be=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],m=r[o+1],x=r[o+2],b=r[o+3];if(d!==b||l!==h||c!==m||u!==x){let p=l*h+c*m+u*x+d*b;p<0&&(h=-h,m=-m,x=-x,b=-b,p=-p);let f=1-a;if(p<.9995){let v=Math.acos(p),R=Math.sin(v);f=Math.sin(f*v)/R,a=Math.sin(a*v)/R,l=l*f+h*a,c=c*f+m*a,u=u*f+x*a,d=d*f+b*a}else{l=l*f+h*a,c=c*f+m*a,u=u*f+x*a,d=d*f+b*a;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],m=r[o+2],x=r[o+3];return t[e]=a*x+u*d+l*m-c*h,t[e+1]=l*x+u*h+c*d-a*m,t[e+2]=c*x+u*m+a*h-l*d,t[e+3]=u*x-a*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d-h*m*x;break;case"YXZ":this._x=h*u*d+c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d+h*m*x;break;case"ZXY":this._x=h*u*d-c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d-h*m*x;break;case"ZYX":this._x=h*u*d-c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d+h*m*x;break;case"YZX":this._x=h*u*d+c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d-h*m*x;break;case"XZY":this._x=h*u*d-c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d+h*m*x;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ol=class Ol{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Oe(this.x,t.x,e.x),this.y=Oe(this.y,t.y,e.y),this.z=Oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Oe(this.x,t,e),this.y=Oe(this.y,t,e),this.z=Oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pc.copy(this).projectOnVector(t),this.sub(Pc)}reflect(t){return this.sub(Pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ol.prototype.isVector3=!0;var I=Ol,Pc=new I,_h=new Be,Bl=class Bl{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],x=n[8],b=s[0],p=s[3],f=s[6],v=s[1],R=s[4],E=s[7],A=s[2],T=s[5],P=s[8];return r[0]=o*b+a*v+l*A,r[3]=o*p+a*R+l*T,r[6]=o*f+a*E+l*P,r[1]=c*b+u*v+d*A,r[4]=c*p+u*R+d*T,r[7]=c*f+u*E+d*P,r[2]=h*b+m*v+x*A,r[5]=h*p+m*R+x*T,r[8]=h*f+m*E+x*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,m=c*r-o*l,x=e*d+n*h+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return t[0]=d*b,t[1]=(s*c-u*n)*b,t[2]=(a*n-s*o)*b,t[3]=h*b,t[4]=(u*e-s*l)*b,t[5]=(s*r-a*e)*b,t[6]=m*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ic.makeScale(t,e)),this}rotate(t){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ic.makeRotation(-t)),this}translate(t,e){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bl.prototype.isMatrix3=!0;var Re=Bl,Ic=new Re,yh=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hd(){let i={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===$e&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===$e&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vr]:{primaries:t,whitePoint:n,transfer:Mr,toXYZ:yh,fromXYZ:vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:t,whitePoint:n,transfer:$e,toXYZ:yh,fromXYZ:vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),i}var Fe=Hd();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Es,$o=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Es===void 0&&(Es=Sr("canvas")),Es.width=t.width,Es.height=t.height;let s=Es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gd=0,Vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lc(s[o].image)):r.push(Lc(s[o]))}else r=Lc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?$o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}var kd=0,Dc=new I,Vn=class i extends yi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xi,s=xi,r=Pn,o=ns,a=ni,l=Xn,c=i.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=js(),this.name="",this.source=new Vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dc).x}get height(){return this.source.getSize(Dc).y}get depth(){return this.source.getSize(Dc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){xe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){xe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hs:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hs:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=vl;Vn.DEFAULT_ANISOTROPY=1;var zl=class zl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],x=l[9],b=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-b)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+b)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,E=(m+1)/2,A=(f+1)/2,T=(u+h)/4,P=(d+b)/4,_=(x+p)/4;return R>E&&R>A?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=P/n):E>A?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=_/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-x)*(p-x)+(d-b)*(d-b)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(d-b)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Oe(this.x,t.x,e.x),this.y=Oe(this.y,t.y,e.y),this.z=Oe(this.z,t.z,e.z),this.w=Oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Oe(this.x,t,e),this.y=Oe(this.y,t,e),this.z=Oe(this.z,t,e),this.w=Oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zl.prototype.isVector4=!0;var tn=zl,Ko=class extends yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new tn(0,0,t,e),this.scissorTest=!1,this.viewport=new tn(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Vn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Ko{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Er=class extends Vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends Vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ma=class Ma{constructor(t,e,n,s,r,o,a,l,c,u,d,h,m,x,b,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,d,h,m,x,b,p)}set(t,e,n,s,r,o,a,l,c,u,d,h,m,x,b,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=x,f[11]=b,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ma().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,m=o*d,x=a*u,b=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+x*c,e[5]=h-b*c,e[9]=-a*l,e[2]=b-h*c,e[6]=x+m*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,m=l*d,x=c*u,b=c*d;e[0]=h+b*a,e[4]=x*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=m*a-x,e[6]=b+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,m=l*d,x=c*u,b=c*d;e[0]=h-b*a,e[4]=-o*d,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*u,e[9]=b-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,m=o*d,x=a*u,b=a*d;e[0]=l*u,e[4]=x*c-m,e[8]=h*c+b,e[1]=l*d,e[5]=b*c+h,e[9]=m*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,m=o*c,x=a*l,b=a*c;e[0]=l*u,e[4]=b-h*d,e[8]=x*d+m,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*d+x,e[10]=h-b*d}else if(t.order==="XZY"){let h=o*l,m=o*c,x=a*l,b=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+b,e[5]=o*u,e[9]=m*d-x,e[2]=x*d-m,e[6]=a*u,e[10]=b*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vd,t,Wd)}lookAt(t,e,n){let s=this.elements;return Jn.subVectors(t,e),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ki.crossVectors(n,Jn),ki.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ki.crossVectors(n,Jn)),ki.normalize(),mo.crossVectors(Jn,ki),s[0]=ki.x,s[4]=mo.x,s[8]=Jn.x,s[1]=ki.y,s[5]=mo.y,s[9]=Jn.y,s[2]=ki.z,s[6]=mo.z,s[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],x=n[2],b=n[6],p=n[10],f=n[14],v=n[3],R=n[7],E=n[11],A=n[15],T=s[0],P=s[4],_=s[8],C=s[12],D=s[1],q=s[5],z=s[9],et=s[13],G=s[2],Z=s[6],tt=s[10],ot=s[14],Tt=s[3],ft=s[7],_t=s[11],Mt=s[15];return r[0]=o*T+a*D+l*G+c*Tt,r[4]=o*P+a*q+l*Z+c*ft,r[8]=o*_+a*z+l*tt+c*_t,r[12]=o*C+a*et+l*ot+c*Mt,r[1]=u*T+d*D+h*G+m*Tt,r[5]=u*P+d*q+h*Z+m*ft,r[9]=u*_+d*z+h*tt+m*_t,r[13]=u*C+d*et+h*ot+m*Mt,r[2]=x*T+b*D+p*G+f*Tt,r[6]=x*P+b*q+p*Z+f*ft,r[10]=x*_+b*z+p*tt+f*_t,r[14]=x*C+b*et+p*ot+f*Mt,r[3]=v*T+R*D+E*G+A*Tt,r[7]=v*P+R*q+E*Z+A*ft,r[11]=v*_+R*z+E*tt+A*_t,r[15]=v*C+R*et+E*ot+A*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],m=t[14],x=t[3],b=t[7],p=t[11],f=t[15],v=l*m-c*h,R=a*m-c*d,E=a*h-l*d,A=o*m-c*u,T=o*h-l*u,P=o*d-a*u;return e*(b*v-p*R+f*E)-n*(x*v-p*A+f*T)+s*(x*R-b*A+f*P)-r*(x*E-b*T+p*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],x=t[12],b=t[13],p=t[14],f=t[15],v=e*a-n*o,R=e*l-s*o,E=e*c-r*o,A=n*l-s*a,T=n*c-r*a,P=s*c-r*l,_=u*b-d*x,C=u*p-h*x,D=u*f-m*x,q=d*p-h*b,z=d*f-m*b,et=h*f-m*p,G=v*et-R*z+E*q+A*D-T*C+P*_;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/G;return t[0]=(a*et-l*z+c*q)*Z,t[1]=(s*z-n*et-r*q)*Z,t[2]=(b*P-p*T+f*A)*Z,t[3]=(h*T-d*P-m*A)*Z,t[4]=(l*D-o*et-c*C)*Z,t[5]=(e*et-s*D+r*C)*Z,t[6]=(p*E-x*P-f*R)*Z,t[7]=(u*P-h*E+m*R)*Z,t[8]=(o*z-a*D+c*_)*Z,t[9]=(n*D-e*z-r*_)*Z,t[10]=(x*T-b*E+f*v)*Z,t[11]=(d*E-u*T-m*v)*Z,t[12]=(a*C-o*q-l*_)*Z,t[13]=(e*q-n*C+s*_)*Z,t[14]=(b*R-x*A-p*v)*Z,t[15]=(u*A-d*R+h*v)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,m=r*u,x=r*d,b=o*u,p=o*d,f=a*d,v=l*c,R=l*u,E=l*d,A=n.x,T=n.y,P=n.z;return s[0]=(1-(b+f))*A,s[1]=(m+E)*A,s[2]=(x-R)*A,s[3]=0,s[4]=(m-E)*T,s[5]=(1-(h+f))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(x+R)*P,s[9]=(p-v)*P,s[10]=(1-(h+b))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=bs.set(s[0],s[1],s[2]).length(),a=bs.set(s[4],s[5],s[6]).length(),l=bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),si.copy(this);let c=1/o,u=1/a,d=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,e.setFromRotationMatrix(si),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ci,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),m=(n+s)/(n-s),x,b;if(l)x=r/(o-r),b=o*r/(o-r);else if(a===ci)x=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===Gs)x=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ci,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),m=-(n+s)/(n-s),x,b;if(l)x=1/(o-r),b=o/(o-r);else if(a===ci)x=-2/(o-r),b=-(o+r)/(o-r);else if(a===Gs)x=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ma.prototype.isMatrix4=!0;var be=Ma,bs=new I,si=new be,Vd=new I(0,0,0),Wd=new I(1,1,1),ki=new I,mo=new I,Jn=new I,Mh=new be,Sh=new Be,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xd=0,Eh=new I,ws=new Be,Ci=new be,go=new I,hr=new I,qd=new I,Yd=new Be,bh=new I(1,0,0),wh=new I(0,1,0),Th=new I(0,0,1),Ah={type:"added"},Zd={type:"removed"},Ts={type:"childadded",child:null},Nc={type:"childremoved",child:null},xn=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new An,n=new Be,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Re}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(wh,t)}rotateZ(t){return this.rotateOnAxis(Th,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(wh,t)}translateZ(t){return this.translateOnAxis(Th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(hr,go,this.up):Ci.lookAt(go,hr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(Ci),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ah),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zd),Nc.child=t,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ah),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xn.DEFAULT_UP=new I(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jd={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let p=e.getJointPose(b,n),f=this._getHandJoint(c,b);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Uc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Fe.workingColorSpace){if(t=Pl(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Uc(o,r,t+1/3),this.g=Uc(o,r,t),this.b=Uc(o,r,t-1/3)}return Fe.colorSpaceToWorking(this,s),this}setStyle(t,e=kn){function n(r){r!==void 0&&parseFloat(r)<1&&xe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:xe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);xe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=kn){let n=Iu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):xe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return Fe.workingToColorSpace(Nn.copy(this),t),Math.round(Oe(Nn.r*255,0,255))*65536+Math.round(Oe(Nn.g*255,0,255))*256+Math.round(Oe(Nn.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Fe.workingColorSpace){Fe.workingToColorSpace(Nn.copy(this),e);let n=Nn.r,s=Nn.g,r=Nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Fe.workingColorSpace){return Fe.workingToColorSpace(Nn.copy(this),e),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=kn){Fe.workingToColorSpace(Nn.copy(this),t);let e=Nn.r,n=Nn.g,s=Nn.b;return t!==kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(xo);let n=_r(Vi.h,xo.h,e),s=_r(Vi.s,xo.s,e),r=_r(Vi.l,xo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new le;le.NAMES=Iu;var br=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qs=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ri=new I,Pi=new I,Fc=new I,Ii=new I,As=new I,Rs=new I,Rh=new I,Oc=new I,Bc=new I,zc=new I,Hc=new tn,Gc=new tn,kc=new tn,Yi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ri.subVectors(s,e),Pi.subVectors(n,e),Fc.subVectors(t,e);let o=ri.dot(ri),a=ri.dot(Pi),l=ri.dot(Fc),c=Pi.dot(Pi),u=Pi.dot(Fc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,m=(c*l-a*u)*h,x=(o*u-a*l)*h;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Hc.setScalar(0),Gc.setScalar(0),kc.setScalar(0),Hc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,n),kc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Hc,r.x),o.addScaledVector(Gc,r.y),o.addScaledVector(kc,r.z),o}static isFrontFacing(t,e,n,s){return ri.subVectors(n,e),Pi.subVectors(t,e),ri.cross(Pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ri.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;As.subVectors(s,n),Rs.subVectors(r,n),Oc.subVectors(t,n);let l=As.dot(Oc),c=Rs.dot(Oc);if(l<=0&&c<=0)return e.copy(n);Bc.subVectors(t,s);let u=As.dot(Bc),d=Rs.dot(Bc);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(As,o);zc.subVectors(t,r);let m=As.dot(zc),x=Rs.dot(zc);if(x>=0&&m<=x)return e.copy(r);let b=m*c-l*x;if(b<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Rs,a);let p=u*x-m*d;if(p<=0&&d-u>=0&&m-x>=0)return Rh.subVectors(r,s),a=(d-u)/(d-u+(m-x)),e.copy(s).addScaledVector(Rh,a);let f=1/(p+b+h);return o=b*f,a=h*f,e.copy(n).addScaledVector(As,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_o.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(t.matrixWorld),this.union(_o)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),yo.subVectors(this.max,ur),Cs.subVectors(t.a,ur),Ps.subVectors(t.b,ur),Is.subVectors(t.c,ur),Wi.subVectors(Ps,Cs),Xi.subVectors(Is,Ps),as.subVectors(Cs,Is);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-as.z,as.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,as.z,0,-as.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-as.y,as.x,0];return!Vc(e,Cs,Ps,Is,yo)||(e=[1,0,0,0,1,0,0,0,1],!Vc(e,Cs,Ps,Is,yo))?!1:(vo.crossVectors(Wi,Xi),e=[vo.x,vo.y,vo.z],Vc(e,Cs,Ps,Is,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Li=[new I,new I,new I,new I,new I,new I,new I,new I],oi=new I,_o=new vi,Cs=new I,Ps=new I,Is=new I,Wi=new I,Xi=new I,as=new I,ur=new I,yo=new I,vo=new I,cs=new I;function Vc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cs.fromArray(i,r);let a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=t.dot(cs),c=e.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var gn=new I,Mo=new Te,$d=0,un=class extends yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$d++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tu,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix3(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Os(e,this.array)),e}setX(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Os(e,this.array)),e}setY(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Os(e,this.array)),e}setW(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array),s=Gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array),s=Gn(s,this.array),r=Gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Tr=class extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xe=class extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kd=new vi,dr=new I,Wc=new I,Mi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Wc)),this.expandByPoint(dr.copy(t.center).sub(Wc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qd=0,ti=new be,Xc=new xn,Ls=new I,$n=new vi,fr=new vi,bn=new I,rn=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?Tr:wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,n){return ti.makeTranslation(t,e,n),this.applyMatrix4(ti),this}scale(t,e,n){return ti.makeScale(t,e,n),this.applyMatrix4(ti),this}lookAt(t){return Xc.lookAt(t),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors($n.min,fr.min),$n.expandByPoint(bn),bn.addVectors($n.max,fr.max),$n.expandByPoint(bn)):($n.expandByPoint(fr.min),$n.expandByPoint(fr.max))}$n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)bn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(bn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bn.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(t,c),bn.add(Ls)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new I,l[_]=new I;let c=new I,u=new I,d=new I,h=new Te,m=new Te,x=new Te,b=new I,p=new I;function f(_,C,D){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,_),m.fromBufferAttribute(r,C),x.fromBufferAttribute(r,D),u.sub(c),d.sub(c),m.sub(h),x.sub(h);let q=1/(m.x*x.y-x.x*m.y);isFinite(q)&&(b.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(q),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(q),a[_].add(b),a[C].add(b),a[D].add(b),l[_].add(p),l[C].add(p),l[D].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,C=v.length;_<C;++_){let D=v[_],q=D.start,z=D.count;for(let et=q,G=q+z;et<G;et+=3)f(t.getX(et+0),t.getX(et+1),t.getX(et+2))}let R=new I,E=new I,A=new I,T=new I;function P(_){A.fromBufferAttribute(s,_),T.copy(A);let C=a[_];R.copy(C),R.sub(A.multiplyScalar(A.dot(C))).normalize(),E.crossVectors(T,C);let q=E.dot(l[_])<0?-1:1;o.setXYZW(_,R.x,R.y,R.z,q)}for(let _=0,C=v.length;_<C;++_){let D=v[_],q=D.start,z=D.count;for(let et=q,G=q+z;et<G;et+=3)P(t.getX(et+0)),P(t.getX(et+1)),P(t.getX(et+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let h=0,m=t.count;h<m;h+=3){let x=t.getX(h+0),b=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)bn.fromBufferAttribute(t,e),bn.normalize(),t.setXYZ(e,bn.x,bn.y,bn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),m=0,x=0;for(let b=0,p=l.length;b<p;b++){a.isInterleavedBufferAttribute?m=l[b]*a.data.stride+a.offset:m=l[b]*u;for(let f=0;f<u;f++)h[x++]=c[m++]}return new un(h,u,d)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qc=new I,jd=new I,tf=new Re,ai=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=qc.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(qc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tf.getNormalMatrix(t),s=this.coplanarPoint(qc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ef=0,li=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=js(),this.name="",this.type="Material",this.blending=$s,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){xe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){xe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ai().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Te().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Di=new I,Yc=new I,So=new I,Eo=new I,fs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yc.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),Eo.copy(this.origin).sub(Yc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(So),a=Eo.dot(this.direction),l=-Eo.dot(So),c=Eo.lengthSq(),u=Math.abs(1-o*o),d,h,m,x;if(u>0)if(d=o*l-a,h=o*a-l,x=r*u,d>=0)if(h>=-x)if(h<=x){let b=1/u;d*=b,h*=b,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yc).addScaledVector(So,h),m}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);let n=Di.dot(this.direction),s=Di.dot(Di)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,m=t.z-o.z,x=e.x-o.x,b=e.y-o.y,p=e.z-o.z,f=n.x-o.x,v=n.y-o.y,R=n.z-o.z,E=Math.abs(l),A=Math.abs(c),T=Math.abs(u),P,_,C,D,q,z,et,G,Z,tt,ot,Tt;if(E>=A&&E>=T?(C=l,z=d,Z=x,Tt=f,l>=0?(P=c,_=u,D=h,q=m,et=b,G=p,tt=v,ot=R):(P=u,_=c,D=m,q=h,et=p,G=b,tt=R,ot=v)):A>=T?(C=c,z=h,Z=b,Tt=v,c>=0?(P=u,_=l,D=m,q=d,et=p,G=x,tt=R,ot=f):(P=l,_=u,D=d,q=m,et=x,G=p,tt=f,ot=R)):(C=u,z=m,Z=p,Tt=R,u>=0?(P=l,_=c,D=d,q=h,et=x,G=b,tt=f,ot=v):(P=c,_=l,D=h,q=d,et=b,G=x,tt=v,ot=f)),C===0)return null;let ft=P/C,_t=_/C,Mt=1/C,re=D-ft*z,Ft=q-_t*z,Bt=et-ft*Z,fe=G-_t*Z,ye=tt-ft*Tt,lt=ot-_t*Tt,pt=ye*fe-lt*Bt,St=re*lt-Ft*ye,K=Bt*Ft-fe*re;if(s){if(pt<0||St<0||K<0)return null}else if((pt<0||St<0||K<0)&&(pt>0||St>0||K>0))return null;let W=pt+St+K;if(W===0)return null;let gt=Mt*(pt*z+St*Z+K*Tt);return(W>0?gt<0:gt>0)?null:this.at(gt/W,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ch=new be,ls=new fs,bo=new Mi,Ph=new I,wo=new I,To=new I,Ao=new I,Zc=new I,Ro=new I,Ih=new I,Co=new I,Ce=class extends xn{constructor(t=new rn,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Zc.fromBufferAttribute(d,t),o?Ro.addScaledVector(Zc,u):Ro.addScaledVector(Zc.sub(e),u))}e.add(Ro)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(r),ls.copy(t.ray).recast(t.near),!(bo.containsPoint(ls.origin)===!1&&(ls.intersectSphere(bo,Ph)===null||ls.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Ch.copy(r).invert(),ls.copy(t.ray).applyMatrix4(Ch),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=h.length;x<b;x++){let p=h[x],f=o[p.materialIndex],v=Math.max(p.start,m.start),R=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,A=R;E<A;E+=3){let T=a.getX(E),P=a.getX(E+1),_=a.getX(E+2);s=Po(this,f,t,n,c,u,d,T,P,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let p=x,f=b;p<f;p+=3){let v=a.getX(p),R=a.getX(p+1),E=a.getX(p+2);s=Po(this,o,t,n,c,u,d,v,R,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,b=h.length;x<b;x++){let p=h[x],f=o[p.materialIndex],v=Math.max(p.start,m.start),R=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,A=R;E<A;E+=3){let T=E,P=E+1,_=E+2;s=Po(this,f,t,n,c,u,d,T,P,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let p=x,f=b;p<f;p+=3){let v=p,R=p+1,E=p+2;s=Po(this,o,t,n,c,u,d,v,R,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function nf(i,t,e,n,s,r,o,a){let l;if(t.side===Rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ei,a),l===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:i}}function Po(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,wo),i.getVertexPosition(l,To),i.getVertexPosition(c,Ao);let u=nf(i,t,e,n,wo,To,Ao,Ih);if(u){let d=new I;Yi.getBarycoord(Ih,wo,To,Ao,d),s&&(u.uv=Yi.getInterpolatedAttribute(s,a,l,c,d,new Te)),r&&(u.uv1=Yi.getInterpolatedAttribute(r,a,l,c,d,new Te)),o&&(u.normal=Yi.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new I,materialIndex:0};Yi.getNormal(wo,To,Ao,h.normal),u.face=h,u.barycoord=d}return u}var Ar=class extends Vn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Tn,u=Tn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=class extends un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new be,Lh=new be,Io=[],Dh=new vi,sf=new be,pr=new Ce,mr=new Mi,hi=class extends Ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),Dh.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Dh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),mr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Lh.multiplyMatrices(n,Ds),pr.matrixWorld=Lh,pr.raycast(t,Io);for(let o=0,a=Io.length;o<a;o++){let l=Io[o];l.instanceId=r,l.object=this,e.push(l)}Io.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ar(new Float32Array(s*this.count),s,this.count,Ia,ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new Mi,rf=new Te(.5,.5),Lo=new I,Ys=class{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],m=r[7],x=r[8],b=r[9],p=r[10],f=r[11],v=r[12],R=r[13],E=r[14],A=r[15];if(s[0].setComponents(c-o,m-u,f-x,A-v).normalize(),s[1].setComponents(c+o,m+u,f+x,A+v).normalize(),s[2].setComponents(c+a,m+d,f+b,A+R).normalize(),s[3].setComponents(c-a,m-d,f-b,A-R).normalize(),n)s[4].setComponents(l,h,p,E).normalize(),s[5].setComponents(c-l,m-h,f-p,A-E).normalize();else if(s[4].setComponents(c-l,m-h,f-p,A-E).normalize(),e===ci)s[5].setComponents(c+l,m+h,f+p,A+E).normalize();else if(e===Gs)s[5].setComponents(l,h,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=rf.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jo=class extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ta=new I,ea=new I,Nh=new be,gr=new fs,Do=new Mi,Jc=new I,Uh=new I,na=class extends xn{constructor(t=new rn,e=new jo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ta.fromBufferAttribute(e,s-1),ea.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ta.distanceTo(ea);t.setAttribute("lineDistance",new Xe(n,1))}else xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,t.ray.intersectsSphere(Do)===!1)return;Nh.copy(s).invert(),gr.copy(t.ray).applyMatrix4(Nh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let b=m,p=x-1;b<p;b+=c){let f=u.getX(b),v=u.getX(b+1),R=No(this,t,gr,l,f,v,b);R&&e.push(R)}if(this.isLineLoop){let b=u.getX(x-1),p=u.getX(m),f=No(this,t,gr,l,b,p,x-1);f&&e.push(f)}}else{let m=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let b=m,p=x-1;b<p;b+=c){let f=No(this,t,gr,l,b,b+1,b);f&&e.push(f)}if(this.isLineLoop){let b=No(this,t,gr,l,x-1,m,x-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function No(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ta.fromBufferAttribute(a,s),ea.fromBufferAttribute(a,r),e.distanceSqToSegment(ta,ea,Jc,Uh)>n)return;Jc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Jc);if(!(c<t.near||c>t.far))return{distance:c,point:Uh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fh=new I,Oh=new I,Rr=class extends na{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Fh.fromBufferAttribute(e,s),Oh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fh.distanceTo(Oh);t.setAttribute("lineDistance",new Xe(n,1))}else xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ia=class extends li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bh=new be,nl=new fs,Uo=new Mi,Fo=new I,ps=class extends xn{constructor(t=new rn,e=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,t.ray.intersectsSphere(Uo)===!1)return;Bh.copy(s).invert(),nl.copy(t.ray).applyMatrix4(Bh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=h,b=m;x<b;x++){let p=c.getX(x);Fo.fromBufferAttribute(d,p),zh(Fo,p,l,s,t,e,this)}}else{let h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=h,b=m;x<b;x++)Fo.fromBufferAttribute(d,x),zh(Fo,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zh(i,t,e,n,s,r,o){let a=nl.distanceSqToPoint(i);if(a<e){let l=new I;nl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Cr=class extends Vn{constructor(t=[],e=es,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ji=class extends Vn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends Vn{constructor(t,e,n=di,s,r,o,a=Tn,l=Tn,c,u=_i,d=1){if(u!==_i&&u!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},sa=class extends $i{constructor(t,e=di,n=es,s,r,o=Tn,a=Tn,l,c=_i){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Pr=class extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ut=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,m=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2));function x(b,p,f,v,R,E,A,T,P,_,C){let D=E/P,q=A/_,z=E/2,et=A/2,G=T/2,Z=P+1,tt=_+1,ot=0,Tt=0,ft=new I;for(let _t=0;_t<tt;_t++){let Mt=_t*q-et;for(let re=0;re<Z;re++){let Ft=re*D-z;ft[b]=Ft*v,ft[p]=Mt*R,ft[f]=G,c.push(ft.x,ft.y,ft.z),ft[b]=0,ft[p]=0,ft[f]=T>0?1:-1,u.push(ft.x,ft.y,ft.z),d.push(re/P),d.push(1-_t/_),ot+=1}}for(let _t=0;_t<_;_t++)for(let Mt=0;Mt<P;Mt++){let re=h+Mt+Z*_t,Ft=h+Mt+Z*(_t+1),Bt=h+(Mt+1)+Z*(_t+1),fe=h+(Mt+1)+Z*_t;l.push(re,Ft,fe),l.push(Ft,Bt,fe),Tt+=6}a.addGroup(m,Tt,C),m+=Tt,h+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ms=class i extends rn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,u=new Te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let m=n+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ne=class i extends rn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],m=[],x=0,b=[],p=n/2,f=0;v(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(m,2));function v(){let E=new I,A=new I,T=0,P=(e-t)/n;for(let _=0;_<=r;_++){let C=[],D=_/r,q=D*(e-t)+t;for(let z=0;z<=s;z++){let et=z/s,G=et*l+a,Z=Math.sin(G),tt=Math.cos(G);A.x=q*Z,A.y=-D*n+p,A.z=q*tt,d.push(A.x,A.y,A.z),E.set(Z,P,tt).normalize(),h.push(E.x,E.y,E.z),m.push(et,1-D),C.push(x++)}b.push(C)}for(let _=0;_<s;_++)for(let C=0;C<r;C++){let D=b[C][_],q=b[C+1][_],z=b[C+1][_+1],et=b[C][_+1];(t>0||C!==0)&&(u.push(D,q,et),T+=3),(e>0||C!==r-1)&&(u.push(q,z,et),T+=3)}c.addGroup(f,T,0),f+=T}function R(E){let A=x,T=new Te,P=new I,_=0,C=E===!0?t:e,D=E===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,p*D,0),h.push(0,D,0),m.push(.5,.5),x++;let q=x;for(let z=0;z<=s;z++){let G=z/s*l+a,Z=Math.cos(G),tt=Math.sin(G);P.x=C*tt,P.y=p*D,P.z=C*Z,d.push(P.x,P.y,P.z),h.push(0,D,0),T.x=Z*.5+.5,T.y=tt*.5*D+.5,m.push(T.x,T.y),x++}for(let z=0;z<s;z++){let et=A+z,G=q+z;E===!0?u.push(G,G+1,et):u.push(G+1,G,et),_+=3}c.addGroup(f,_,E===!0?1:2),f+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},dn=class i extends ne{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ra=class i extends rn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let R=new I,E=new I,A=new I;for(let T=0;T<e.length;T+=3)m(e[T+0],R),m(e[T+1],E),m(e[T+2],A),l(R,E,A,v)}function l(v,R,E,A){let T=A+1,P=[];for(let _=0;_<=T;_++){P[_]=[];let C=v.clone().lerp(E,_/T),D=R.clone().lerp(E,_/T),q=T-_;for(let z=0;z<=q;z++)z===0&&_===T?P[_][z]=C:P[_][z]=C.clone().lerp(D,z/q)}for(let _=0;_<T;_++)for(let C=0;C<2*(T-_)-1;C++){let D=Math.floor(C/2);C%2===0?(h(P[_][D+1]),h(P[_+1][D]),h(P[_][D])):(h(P[_][D+1]),h(P[_+1][D+1]),h(P[_+1][D]))}}function c(v){let R=new I;for(let E=0;E<r.length;E+=3)R.x=r[E+0],R.y=r[E+1],R.z=r[E+2],R.normalize().multiplyScalar(v),r[E+0]=R.x,r[E+1]=R.y,r[E+2]=R.z}function u(){let v=new I;for(let R=0;R<r.length;R+=3){v.x=r[R+0],v.y=r[R+1],v.z=r[R+2];let E=p(v)/2/Math.PI+.5,A=f(v)/Math.PI+.5;o.push(E,1-A)}x(),d()}function d(){for(let v=0;v<o.length;v+=6){let R=o[v+0],E=o[v+2],A=o[v+4],T=Math.max(R,E,A),P=Math.min(R,E,A);T>.9&&P<.1&&(R<.2&&(o[v+0]+=1),E<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function m(v,R){let E=v*3;R.x=t[E+0],R.y=t[E+1],R.z=t[E+2]}function x(){let v=new I,R=new I,E=new I,A=new I,T=new Te,P=new Te,_=new Te;for(let C=0,D=0;C<r.length;C+=9,D+=6){v.set(r[C+0],r[C+1],r[C+2]),R.set(r[C+3],r[C+4],r[C+5]),E.set(r[C+6],r[C+7],r[C+8]),T.set(o[D+0],o[D+1]),P.set(o[D+2],o[D+3]),_.set(o[D+4],o[D+5]),A.copy(v).add(R).add(E).divideScalar(3);let q=p(A);b(T,D+0,v,q),b(P,D+2,R,q),b(_,D+4,E,q)}}function b(v,R,E,A){A<0&&v.x===1&&(o[R]=v.x-1),E.x===0&&E.z===0&&(o[R]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ir=class i extends ra{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var hn=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,m=[],x=[],b=[],p=[];for(let f=0;f<u;f++){let v=f*h-o;for(let R=0;R<c;R++){let E=R*d-r;x.push(E,-v,0),b.push(0,0,1),p.push(R/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){let R=v+c*f,E=v+c*(f+1),A=v+1+c*(f+1),T=v+1+c*f;m.push(R,E,T),m.push(E,A,T)}this.setIndex(m),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var fn=class i extends rn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new I,h=new I,m=[],x=[],b=[],p=[];for(let f=0;f<=n;f++){let v=[],R=f/n,E=o+R*a,A=t*Math.cos(E),T=Math.sqrt(t*t-A*A),P=0;f===0&&o===0?P=.5/e:f===n&&l===Math.PI&&(P=-.5/e);for(let _=0;_<=e;_++){let C=_/e,D=s+C*r;d.x=-T*Math.cos(D),d.y=A,d.z=T*Math.sin(D),x.push(d.x,d.y,d.z),h.copy(d).normalize(),b.push(h.x,h.y,h.z),p.push(C+P,1-R),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let R=u[f][v+1],E=u[f][v],A=u[f+1][v],T=u[f+1][v+1];(f!==0||o>0)&&m.push(R,E,T),(f!==n-1||l<Math.PI)&&m.push(E,A,T)}this.setIndex(m),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Lr=class i extends rn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new I,m=new I,x=new I;for(let b=0;b<=n;b++){let p=o+b/n*a;for(let f=0;f<=s;f++){let v=f/s*r;m.x=(t+e*Math.cos(p))*Math.cos(v),m.y=(t+e*Math.cos(p))*Math.sin(v),m.z=e*Math.sin(p),c.push(m.x,m.y,m.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),x.subVectors(m,h).normalize(),u.push(x.x,x.y,x.z),d.push(f/s),d.push(b/n)}}for(let b=1;b<=n;b++)for(let p=1;p<=s;p++){let f=(s+1)*b+p-1,v=(s+1)*(b-1)+p-1,R=(s+1)*(b-1)+p,E=(s+1)*b+p;l.push(f,v,E),l.push(v,R,E)}this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Hh(s))s.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Hh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function On(i){let t={};for(let e=0;e<i.length;e++){let n=ys(i[e]);for(let s in n)t[s]=n[s]}return t}function Hh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function of(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ll(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fe.workingColorSpace}var fc={clone:ys,merge:On},af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(s.value);break;case"v2":this.uniforms[n].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new tn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oa=class extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dr=class extends li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Si=class extends li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ba,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},aa=class extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ca=class extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ns(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $c(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},la=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case tl:r=t,a=2*e-n;break;case el:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tl:o=t,l=2*n-e;break;case el:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),b=x*x,p=b*x,f=-h*p+2*h*b-h*x,v=(1+h)*p+(-1.5-2*h)*b+(-.5+h)*x+1,R=(-1-m)*p+(1.5+m)*b+.5*x,E=m*p-m*b;for(let A=0;A!==a;++A)r[A]=f*o[u+A]+v*o[c+A]+R*o[l+A]+E*o[d+A];return r}},ha=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},ua=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},da=class extends Ki{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let x=(n-e)/(s-e),b=1-x;for(let p=0;p!==a;++p)r[p]=o[c+p]*b+o[l+p]*x;return r}let h=a*2,m=t-1;for(let x=0;x!==a;++x){let b=o[c+x],p=o[l+x],f=m*h+x*2,v=d[f],R=d[f+1],E=t*h+x*2,A=u[E],T=u[E+1],P=hf(n,e,v,A,s);r[x]=Lu(P,b,R,T,p)}return r}};function Lu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function lf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function hf(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Lu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=lf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),$c(t.settings)&&(n.settings={inTangents:Ns(t.settings.inTangents,Array),outTangents:Ns(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new da(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case Jo:e=this.InterpolantFactoryMethodLinear;break;case zo:e=this.InterpolantFactoryMethodSmooth;break;case Qc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return xe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return zo;case this.InterpolantFactoryMethodBezier:return Qc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;$c(this.settings)&&(Gh(this.settings.inTangents,t),Gh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ed(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,h=d-n,m=d+n;for(let x=0;x!==n;++x){let b=e[d+x];if(b!==e[h+x]||b!==e[m+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,h=o*n;for(let m=0;m!==n;++m)e[h+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,$c(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Jo;var Qi=class extends Kn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=yr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}};fa.prototype.ValueTypeName="color";var pa=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="number";var ma=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Be.slerpFlat(r,0,o,c-a,o,c,l);return r}},Nr=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Kn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=yr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="vector";var xa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Du=new xa,_a=class{constructor(t){this.manager=t!==void 0?t:Du,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_a.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=class extends xn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ur=class extends gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Kc=new be,kh=new I,Vh=new I,Zs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(kh),Vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Kc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Gs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oo=new I,Bo=new Be,gi=new I,Fr=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oo,Bo,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Bo,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Oo,Bo,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Bo,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new I,Wh=new Te,Xh=new Te,wn=class extends Fr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,Wh,Xh),e.subVectors(Xh,Wh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},il=class extends Zs{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ds*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Or=class extends gs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new il}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},sl=class extends Zs{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}},Ui=class extends gs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ts=class extends Fr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rl=class extends Zs{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Br=class extends gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new rl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zr=class extends rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Us=-90,Fs=1,ya=class extends xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wn(Us,Fs,t,e);s.layers=this.layers,this.add(s);let r=new wn(Us,Fs,t,e);r.layers=this.layers,this.add(r);let o=new wn(Us,Fs,t,e);o.layers=this.layers,this.add(o);let a=new wn(Us,Fs,t,e);a.layers=this.layers,this.add(a);let l=new wn(Us,Fs,t,e);l.layers=this.layers,this.add(l);let c=new wn(Us,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},va=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dl="\\[\\]\\.:\\/",uf=new RegExp("["+Dl+"]","g"),Nl="[^"+Dl+"]",df="[^"+Dl.replace("\\.","")+"]",ff=/((?:WC+[\/:])*)/.source.replace("WC",Nl),pf=/(WCOD+)?/.source.replace("WCOD",df),mf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),gf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),xf=new RegExp("^"+ff+pf+mf+gf+"$"),_f=["material","materials","bones","map"],ol=class{constructor(t,e,n){let s=n||sn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},sn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uf,"")}static parseTrackName(t){let e=xf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_f.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=ol;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hx=new Float32Array(1);var qh=new be,Hr=class{constructor(t,e,n=0,s=1/0){this.ray=new fs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(t,e=!0,n=[]){return al(t,this,n,e),n.sort(Yh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)al(t[s],this,n,e);return n.sort(Yh),n}};function Yh(i,t){return i.distance-t.distance}function al(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)al(r[o],t,e,!0)}}var Gr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Hl=class Hl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Hl.prototype.isMatrix2=!0;var cl=Hl;function Ul(i,t,e,n){let s=yf(n);switch(e){case wl:return i*t;case Ia:return i*t/s.components*s.byteLength;case La:return i*t/s.components*s.byteLength;case ss:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Tl:return i*t*3/s.components*s.byteLength;case ni:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Oa:return Math.max(i,8)*Math.max(t,8)/2;case za:case Ha:case ka:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case $r:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rc:case oc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kr:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yf(i){switch(i){case Xn:case Ml:return{byteLength:1,components:1};case Ks:case Sl:case Qn:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case di:case Ra:case ei:return{byteLength:4,components:1};case El:case bl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window!="undefined"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);function ed(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vf(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<d.length;m++){let x=d[h],b=d[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++h,d[h]=b)}d.length=h+1;for(let m=0,x=d.length;m<x;m++){let b=d[m];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
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
#endif`,Rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`#ifdef USE_BATCHING
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
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wf=`#define PI 3.141592653589793
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
} // validated`,Xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qf=`vec3 transformedNormal = objectNormal;
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
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
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
#endif`,yp=`uniform sampler2D dfgLUT;
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
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
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o0=`float getShadowMask() {
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,P0=`#define DISTANCE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
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
}`,N0=`uniform vec3 diffuse;
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
}`,U0=`#include <common>
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#define LAMBERT
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
}`,B0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,H0=`#define MATCAP
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
}`,G0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,V0=`#define PHONG
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
}`,W0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,q0=`#define STANDARD
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
}`,Y0=`#define TOON
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
}`,Z0=`#define TOON
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
}`,J0=`uniform float size;
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
}`,$0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,Q0=`uniform vec3 color;
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
}`,j0=`uniform float rotation;
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
}`,tm=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:Mf,alphahash_pars_fragment:Sf,alphamap_fragment:Ef,alphamap_pars_fragment:bf,alphatest_fragment:wf,alphatest_pars_fragment:Tf,aomap_fragment:Af,aomap_pars_fragment:Rf,batching_pars_vertex:Cf,batching_vertex:Pf,begin_vertex:If,beginnormal_vertex:Lf,bsdfs:Df,iridescence_fragment:Nf,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Ff,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:zf,color_fragment:Hf,color_pars_fragment:Gf,color_pars_vertex:kf,color_vertex:Vf,common:Wf,cube_uv_reflection_fragment:Xf,defaultnormal_vertex:qf,displacementmap_pars_vertex:Yf,displacementmap_vertex:Zf,emissivemap_fragment:Jf,emissivemap_pars_fragment:$f,colorspace_fragment:Kf,colorspace_pars_fragment:Qf,envmap_fragment:jf,envmap_common_pars_fragment:tp,envmap_pars_fragment:ep,envmap_pars_vertex:np,envmap_physical_pars_fragment:fp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:op,fog_pars_fragment:ap,gradientmap_pars_fragment:cp,lightmap_pars_fragment:lp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:dp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:xp,lights_physical_fragment:_p,lights_physical_pars_fragment:yp,lights_fragment_begin:vp,lights_fragment_maps:Mp,lights_fragment_end:Sp,lightprobes_pars_fragment:Ep,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ap,map_fragment:Rp,map_pars_fragment:Cp,map_particle_fragment:Pp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Np,morphcolor_vertex:Up,morphnormal_vertex:Fp,morphtarget_pars_vertex:Op,morphtarget_vertex:Bp,normal_fragment_begin:zp,normal_fragment_maps:Hp,normal_pars_fragment:Gp,normal_pars_vertex:kp,normal_vertex:Vp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:Zp,opaque_fragment:Jp,packing:$p,premultiplied_alpha_fragment:Kp,project_vertex:Qp,dithering_fragment:jp,dithering_pars_fragment:t0,roughnessmap_fragment:e0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:o0,skinbase_vertex:a0,skinning_pars_vertex:c0,skinning_vertex:l0,skinnormal_vertex:h0,specularmap_fragment:u0,specularmap_pars_fragment:d0,tonemapping_fragment:f0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:x0,uv_pars_vertex:_0,uv_vertex:y0,worldpos_vertex:v0,background_vert:M0,background_frag:S0,backgroundCube_vert:E0,backgroundCube_frag:b0,cube_vert:w0,cube_frag:T0,depth_vert:A0,depth_frag:R0,distance_vert:C0,distance_frag:P0,equirect_vert:I0,equirect_frag:L0,linedashed_vert:D0,linedashed_frag:N0,meshbasic_vert:U0,meshbasic_frag:F0,meshlambert_vert:O0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:H0,meshnormal_vert:G0,meshnormal_frag:k0,meshphong_vert:V0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:q0,meshtoon_vert:Y0,meshtoon_frag:Z0,points_vert:J0,points_frag:$0,shadow_vert:K0,shadow_frag:Q0,sprite_vert:j0,sprite_frag:tm},$t={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Ti={basic:{uniforms:On([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:On([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:On([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:On([$t.common,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.roughnessmap,$t.metalnessmap,$t.fog,$t.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:On([$t.common,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.gradientmap,$t.fog,$t.lights,{emissive:{value:new le(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:On([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:On([$t.points,$t.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:On([$t.common,$t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:On([$t.common,$t.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:On([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:On([$t.sprite,$t.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distance:{uniforms:On([$t.common,$t.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distance_vert,fragmentShader:Le.distance_frag},shadow:{uniforms:On([$t.lights,$t.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Ti.physical={uniforms:On([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var pc={r:0,b:0,g:0},em=new be,nd=new Re;nd.set(-1,0,0,0,1,0,0,0,1);function nm(i,t,e,n,s,r){let o=new le(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function m(v){let R=v.isScene===!0?v.background:null;if(R&&R.isTexture){let E=v.backgroundBlurriness>0;R=t.get(R,E)}return R}function x(v){let R=!1,E=m(v);E===null?p(o,a):E&&E.isColor&&(p(E,1),R=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(v,R){let E=m(R);E&&(E.isCubeTexture||E.mapping===Wr)?(c===void 0&&(c=new Ce(new ut(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:ys(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(em.makeRotationFromEuler(R.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nd),c.material.toneMapped=Fe.getTransfer(E.colorSpace)!==$e,(u!==E||d!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ce(new hn(2,2),new on({name:"BackgroundMaterial",uniforms:ys(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Fe.getTransfer(E.colorSpace)!==$e,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,R){v.getRGB(pc,Ll(i)),e.buffers.color.setClear(pc.r,pc.g,pc.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,R=1){o.set(v),a=R,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:x,addToRenderList:b,dispose:f}}function im(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(q,z,et,G,Z){let tt=!1,ot=d(q,G,et,z);r!==ot&&(r=ot,c(r.object)),tt=m(q,G,et,Z),tt&&x(q,G,et,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,E(q,z,et,G),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(q){return i.bindVertexArray(q)}function u(q){return i.deleteVertexArray(q)}function d(q,z,et,G){let Z=G.wireframe===!0,tt=n[z.id];tt===void 0&&(tt={},n[z.id]=tt);let ot=q.isInstancedMesh===!0?q.id:0,Tt=tt[ot];Tt===void 0&&(Tt={},tt[ot]=Tt);let ft=Tt[et.id];ft===void 0&&(ft={},Tt[et.id]=ft);let _t=ft[Z];return _t===void 0&&(_t=h(l()),ft[Z]=_t),_t}function h(q){let z=[],et=[],G=[];for(let Z=0;Z<e;Z++)z[Z]=0,et[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:et,attributeDivisors:G,object:q,attributes:{},index:null}}function m(q,z,et,G){let Z=r.attributes,tt=z.attributes,ot=0,Tt=et.getAttributes();for(let ft in Tt)if(Tt[ft].location>=0){let Mt=Z[ft],re=tt[ft];if(re===void 0&&(ft==="instanceMatrix"&&q.instanceMatrix&&(re=q.instanceMatrix),ft==="instanceColor"&&q.instanceColor&&(re=q.instanceColor)),Mt===void 0||Mt.attribute!==re||re&&Mt.data!==re.data)return!0;ot++}return r.attributesNum!==ot||r.index!==G}function x(q,z,et,G){let Z={},tt=z.attributes,ot=0,Tt=et.getAttributes();for(let ft in Tt)if(Tt[ft].location>=0){let Mt=tt[ft];Mt===void 0&&(ft==="instanceMatrix"&&q.instanceMatrix&&(Mt=q.instanceMatrix),ft==="instanceColor"&&q.instanceColor&&(Mt=q.instanceColor));let re={};re.attribute=Mt,Mt&&Mt.data&&(re.data=Mt.data),Z[ft]=re,ot++}r.attributes=Z,r.attributesNum=ot,r.index=G}function b(){let q=r.newAttributes;for(let z=0,et=q.length;z<et;z++)q[z]=0}function p(q){f(q,0)}function f(q,z){let et=r.newAttributes,G=r.enabledAttributes,Z=r.attributeDivisors;et[q]=1,G[q]===0&&(i.enableVertexAttribArray(q),G[q]=1),Z[q]!==z&&(i.vertexAttribDivisor(q,z),Z[q]=z)}function v(){let q=r.newAttributes,z=r.enabledAttributes;for(let et=0,G=z.length;et<G;et++)z[et]!==q[et]&&(i.disableVertexAttribArray(et),z[et]=0)}function R(q,z,et,G,Z,tt,ot){ot===!0?i.vertexAttribIPointer(q,z,et,Z,tt):i.vertexAttribPointer(q,z,et,G,Z,tt)}function E(q,z,et,G){b();let Z=G.attributes,tt=et.getAttributes(),ot=z.defaultAttributeValues;for(let Tt in tt){let ft=tt[Tt];if(ft.location>=0){let _t=Z[Tt];if(_t===void 0&&(Tt==="instanceMatrix"&&q.instanceMatrix&&(_t=q.instanceMatrix),Tt==="instanceColor"&&q.instanceColor&&(_t=q.instanceColor)),_t!==void 0){let Mt=_t.normalized,re=_t.itemSize,Ft=t.get(_t);if(Ft===void 0)continue;let Bt=Ft.buffer,fe=Ft.type,ye=Ft.bytesPerElement,lt=fe===i.INT||fe===i.UNSIGNED_INT||_t.gpuType===Ra;if(_t.isInterleavedBufferAttribute){let pt=_t.data,St=pt.stride,K=_t.offset;if(pt.isInstancedInterleavedBuffer){for(let W=0;W<ft.locationSize;W++)f(ft.location+W,pt.meshPerAttribute);q.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let W=0;W<ft.locationSize;W++)p(ft.location+W);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let W=0;W<ft.locationSize;W++)R(ft.location+W,re/ft.locationSize,fe,Mt,St*ye,(K+re/ft.locationSize*W)*ye,lt)}else{if(_t.isInstancedBufferAttribute){for(let pt=0;pt<ft.locationSize;pt++)f(ft.location+pt,_t.meshPerAttribute);q.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let pt=0;pt<ft.locationSize;pt++)p(ft.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let pt=0;pt<ft.locationSize;pt++)R(ft.location+pt,re/ft.locationSize,fe,Mt,re*ye,re/ft.locationSize*pt*ye,lt)}}else if(ot!==void 0){let Mt=ot[Tt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(ft.location,Mt);break;case 3:i.vertexAttrib3fv(ft.location,Mt);break;case 4:i.vertexAttrib4fv(ft.location,Mt);break;default:i.vertexAttrib1fv(ft.location,Mt)}}}}v()}function A(){C();for(let q in n){let z=n[q];for(let et in z){let G=z[et];for(let Z in G){let tt=G[Z];for(let ot in tt)u(tt[ot].object),delete tt[ot];delete G[Z]}}delete n[q]}}function T(q){if(n[q.id]===void 0)return;let z=n[q.id];for(let et in z){let G=z[et];for(let Z in G){let tt=G[Z];for(let ot in tt)u(tt[ot].object),delete tt[ot];delete G[Z]}}delete n[q.id]}function P(q){for(let z in n){let et=n[z];for(let G in et){let Z=et[G];if(Z[q.id]===void 0)continue;let tt=Z[q.id];for(let ot in tt)u(tt[ot].object),delete tt[ot];delete Z[q.id]}}}function _(q){for(let z in n){let et=n[z],G=q.isInstancedMesh===!0?q.id:0,Z=et[G];if(Z!==void 0){for(let tt in Z){let ot=Z[tt];for(let Tt in ot)u(ot[Tt].object),delete ot[Tt];delete Z[tt]}delete et[G],Object.keys(et).length===0&&delete n[z]}}}function C(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:p,disableUnusedAttributes:v}}function sm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==ni&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let _=P===Qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Xn&&P!==ei&&!_&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:R,maxFragmentUniforms:E,maxSamples:A,samples:T}}function om(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ai,a=new Re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||n!==0||s;return s=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){let x=d.clippingPlanes,b=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||x===null||x.length===0||r&&!p)r?u(null):c();else{let v=r?0:n,R=v*4,E=f.clippingState||null;l.value=E,E=u(x,h,R,m);for(let A=0;A!==R;++A)E[A]=e[A];f.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,x){let b=d!==null?d.length:0,p=null;if(b!==0){if(p=l.value,x!==!0||p===null){let f=m+b*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let R=0,E=m;R!==b;++R,E+=4)o.copy(d[R]).applyMatrix4(v,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,p}}var er=4,am=6,cm=20,lm=256,jr=new ts,Nu=new le,Gl=null,kl=0,Vl=0,Wl=!1,hm=new I,vs=new I,gc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=hm}=r;Gl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gl,kl,Vl),this._renderer.xr.enabled=Wl,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Qn,format:ni,colorSpace:vr,depthBuffer:!1},s=Uu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=um(r)),this._blurMaterial=fm(r,t,e),this._ggxMaterial=dm(r,t,e)}return s}_compileMaterial(t){let e=new Ce(new rn,t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,n,s,r){let l=new wn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(Nu),d.toneMapping=ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new ut,new Fn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,p=b.material,f=!1,v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,f=!0):(p.color.copy(Nu),f=!0);for(let R=0;R<6;R++){let E=R%3;E===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):E===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));let A=this._cubeSize;tr(s,E*A,R>2?A:0,A,A),d.setRenderTarget(s),f&&d.render(b,l),d.render(t,l)}d.toneMapping=m,d.autoClear=h,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===es||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,jr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,m=d*h,{_lodMax:x}=this,b=this._sizeLods[n],p=3*b*(n>x-er?n-x+er:0),f=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=x-e,tr(r,p,f,3*b,2*b),s.setRenderTarget(r),s.render(a,jr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,tr(t,p,f,3*b,2*b),s.setRenderTarget(t),s.render(a,jr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-er?s-this._lodMax+er:0),h=4*(this._cubeSize-u);tr(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(l,jr)}};function um(i){let t=[],e=[],n=i,s=i-er+1+am;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,m=3,x=new Float32Array(m*h*d),b=new Float32Array(m*h*d);for(let f=0;f<d;f++){let v=f%3*2/3-1,R=f>2?0:-1,E=[v,R,0,v+2/3,R,0,v+2/3,R+1,0,v,R,0,v+2/3,R+1,0,v,R+1,0];x.set(E,m*h*f);for(let A=0;A<h;A++){let T=u[A*2]*2-1,P=u[A*2+1]*2-1;f===0?vs.set(1,P,T):f===1?vs.set(-T,1,-P):f===2?vs.set(-T,P,1):f===3?vs.set(-1,P,-T):f===4?vs.set(-T,-1,P):vs.set(T,P,-1),vs.toArray(b,(f*h+A)*m)}}let p=new rn;p.setAttribute("position",new un(x,m)),p.setAttribute("outputDirection",new un(b,m)),e.push(new Ce(p,null)),n>er&&n--}return{lodMeshes:e,sizeLods:t}}function Uu(i,t,e){let n=new Un(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dm(i,t,e){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fm(i,t,e){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:cm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Fu(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ou(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xc=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ut(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:bi});r.uniforms.tEquirect.value=e;let o=new Ce(s,r),a=e.minFilter;return e.minFilter===ns&&(e.minFilter=Pn),new ya(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function pm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===wa||m===Ta)if(t.has(h)){let x=t.get(h).texture;return a(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let b=new xc(x.height);return b.fromEquirectangularTexture(i,h),t.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let m=h.mapping,x=m===wa||m===Ta,b=m===es||m===_s;if(x||b){let p=e.get(h),f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new gc(i)),p=x?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let v=h.image;return x&&v&&v.height>0||b&&v&&l(v)?(n===null&&(n=new gc(i)),p=x?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,m){return m===wa?h.mapping=es:m===Ta&&(h.mapping=_s),h}function l(h){let m=0,x=6;for(let b=0;b<x;b++)h[b]!==void 0&&m++;return m===x}function c(h){let m=h.target;m.removeEventListener("dispose",c);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function mm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function gm(i,t,e,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete s[h.id];let m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)t.update(h[m],i.ARRAY_BUFFER)}function c(d){let h=[],m=d.index,x=d.attributes.position,b=0;if(x===void 0)return;if(m!==null){let v=m.array;b=m.version;for(let R=0,E=v.length;R<E;R+=3){let A=v[R+0],T=v[R+1],P=v[R+2];h.push(A,T,T,P,P,A)}}else{let v=x.array;b=x.version;for(let R=0,E=v.length/3-1;R<E;R+=3){let A=R+0,T=R+1,P=R+2;h.push(A,T,T,P,P,A)}}let p=new(x.count>=65535?Tr:wr)(h,1);p.version=b;let f=r.get(d);f&&t.remove(f),r.set(d,p)}function u(d){let h=r.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function xm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*o),e.update(h,n,1)}function c(d,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,d*o,m),e.update(h,n,m))}function u(d,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,m);let b=0;for(let p=0;p<m;p++)b+=h[p];e.update(b,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function _m(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ym(i,t,e){let n=new WeakMap,s=new tn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let C=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],R=0;m===!0&&(R=1),x===!0&&(R=2),b===!0&&(R=3);let E=a.attributes.position.count*R,A=1;E>t.maxTextureSize&&(A=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let T=new Float32Array(E*A*4*d),P=new Er(T,E,A,d);P.type=ei,P.needsUpdate=!0;let _=R*4;for(let D=0;D<d;D++){let q=p[D],z=f[D],et=v[D],G=E*A*4*D;for(let Z=0;Z<q.count;Z++){let tt=Z*_;m===!0&&(s.fromBufferAttribute(q,Z),T[G+tt+0]=s.x,T[G+tt+1]=s.y,T[G+tt+2]=s.z,T[G+tt+3]=0),x===!0&&(s.fromBufferAttribute(z,Z),T[G+tt+4]=s.x,T[G+tt+5]=s.y,T[G+tt+6]=s.z,T[G+tt+7]=0),b===!0&&(s.fromBufferAttribute(et,Z),T[G+tt+8]=s.x,T[G+tt+9]=s.y,T[G+tt+10]=s.z,T[G+tt+11]=et.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new Te(E,A)},n.set(a,h),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function vm(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Mm={[pl]:"LINEAR_TONE_MAPPING",[ml]:"REINHARD_TONE_MAPPING",[gl]:"CINEON_TONE_MAPPING",[Vr]:"ACES_FILMIC_TONE_MAPPING",[_l]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[xl]:"CUSTOM_TONE_MAPPING"};function Sm(i,t,e,n,s,r){let o=new Un(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new rn;c.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let u=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ce(c,u),h=new ts(-1,1,1,-1,0,1),m=null,x=null,b=!1,p,f=null,v=[],R=!1;this.setSize=function(E,A){o.setSize(E,A),a!==null&&a.setSize(E,A),l!==null&&l.setSize(E,A);for(let T=0;T<v.length;T++){let P=v[T];P.setSize&&P.setSize(E,A)}},this.setEffects=function(E){v=E,R=v.length>0&&v[0].isRenderPass===!0;let A=o.width,T=o.height;v.length>0&&a===null&&(a=new Un(A,T,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new Un(A,T,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<v.length;P++){let _=v[P];_.setSize&&_.setSize(A,T)}},this.begin=function(E,A){if(b||E.toneMapping===ui&&v.length===0)return!1;if(f=A,A!==null){let T=A.width,P=A.height;(o.width!==T||o.height!==P)&&this.setSize(T,P)}return R===!1&&E.setRenderTarget(o),p=E.toneMapping,E.toneMapping=ui,!0},this.hasRenderPass=function(){return R},this.end=function(E,A){E.toneMapping=p,b=!0;let T=o,P=a;for(let _=0;_<v.length;_++){let C=v[_];C.enabled!==!1&&(C.render(E,P,T,A),C.needsSwap!==!1&&(T=P,P=P===a?l:a))}if(m!==E.outputColorSpace||x!==E.toneMapping){m=E.outputColorSpace,x=E.toneMapping,u.defines={},Fe.getTransfer(m)===$e&&(u.defines.SRGB_TRANSFER="");let _=Mm[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,E.setRenderTarget(f),E.render(d,h),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var id=new Vn,Yl=new $i(1,1),sd=new Er,rd=new Qo,od=new Cr,Bu=[],zu=[],Hu=new Float32Array(16),Gu=new Float32Array(9),ku=new Float32Array(4);function ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function vn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vc(i,t){let e=zu[t];e===void 0&&(e=new Int32Array(t),zu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Em(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2fv(this.addr,t),Mn(e,t)}}function wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vn(e,t))return;i.uniform3fv(this.addr,t),Mn(e,t)}}function Tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4fv(this.addr,t),Mn(e,t)}}function Am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Mn(e,t)}else{if(vn(e,n))return;ku.set(n),i.uniformMatrix2fv(this.addr,!1,ku),Mn(e,n)}}function Rm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Mn(e,t)}else{if(vn(e,n))return;Gu.set(n),i.uniformMatrix3fv(this.addr,!1,Gu),Mn(e,n)}}function Cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Mn(e,t)}else{if(vn(e,n))return;Hu.set(n),i.uniformMatrix4fv(this.addr,!1,Hu),Mn(e,n)}}function Pm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2iv(this.addr,t),Mn(e,t)}}function Lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3iv(this.addr,t),Mn(e,t)}}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4iv(this.addr,t),Mn(e,t)}}function Nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2uiv(this.addr,t),Mn(e,t)}}function Fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3uiv(this.addr,t),Mn(e,t)}}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4uiv(this.addr,t),Mn(e,t)}}function Bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=e.isReversedDepthBuffer()?dc:uc,r=Yl):r=id,e.setTexture2D(t||r,s)}function zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rd,s)}function Hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||od,s)}function Gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sd,s)}function km(i){switch(i){case 5126:return Em;case 35664:return bm;case 35665:return wm;case 35666:return Tm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Im;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Nm;case 36294:return Um;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Vm(i,t){i.uniform1fv(this.addr,t)}function Wm(i,t){let e=ir(t,this.size,2);i.uniform2fv(this.addr,e)}function Xm(i,t){let e=ir(t,this.size,3);i.uniform3fv(this.addr,e)}function qm(i,t){let e=ir(t,this.size,4);i.uniform4fv(this.addr,e)}function Ym(i,t){let e=ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zm(i,t){let e=ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jm(i,t){let e=ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $m(i,t){i.uniform1iv(this.addr,t)}function Km(i,t){i.uniform2iv(this.addr,t)}function Qm(i,t){i.uniform3iv(this.addr,t)}function jm(i,t){i.uniform4iv(this.addr,t)}function tg(i,t){i.uniform1uiv(this.addr,t)}function eg(i,t){i.uniform2uiv(this.addr,t)}function ng(i,t){i.uniform3uiv(this.addr,t)}function ig(i,t){i.uniform4uiv(this.addr,t)}function sg(i,t,e){let n=this.cache,s=t.length,r=vc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Yl:o=id;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function rg(i,t,e){let n=this.cache,s=t.length,r=vc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rd,r[o])}function og(i,t,e){let n=this.cache,s=t.length,r=vc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||od,r[o])}function ag(i,t,e){let n=this.cache,s=t.length,r=vc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sd,r[o])}function cg(i){switch(i){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return Qm;case 35669:case 35673:return jm;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}var Zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=km(e.type)}},Jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}},$l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Xl=/(\w+)(\])?(\[|\.)?/g;function Vu(i,t){i.seq.push(t),i.map[t.id]=t}function lg(i,t,e){let n=i.name,s=n.length;for(Xl.lastIndex=0;;){let r=Xl.exec(n),o=Xl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vu(e,c===void 0?new Zl(a,i,t):new Jl(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new $l(a),Vu(e,d)),e=d}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);lg(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Wu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hg=37297,ug=0;function dg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Xu=new Re;function fg(i){Fe._getMatrix(Xu,Fe.workingColorSpace,i);let t=`mat3( ${Xu.elements.map(e=>e.toFixed(4))} )`;switch(Fe.getTransfer(i)){case Mr:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+dg(i.getShaderSource(t),a)}else return r}function pg(i,t){let e=fg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var mg={[pl]:"Linear",[ml]:"Reinhard",[gl]:"Cineon",[Vr]:"ACESFilmic",[_l]:"AgX",[yl]:"Neutral",[xl]:"Custom"};function gg(i,t){let e=mg[t];return e===void 0?(xe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mc=new I;function xg(){Fe.getLuminanceCoefficients(mc);let i=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function yg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function eo(i){return i!==""}function Yu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(i){return i.replace(Mg,Eg)}var Sg=new Map;function Eg(i,t){let e=Le[t];if(e===void 0){let n=Sg.get(t);if(n!==void 0)e=Le[n],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kl(e)}var bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(i){return i.replace(bg,wg)}function wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $u(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Tg={[kr]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function Ag(i){return Tg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rg={[es]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE_UV"};function Cg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Rg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Pg={[_s]:"ENVMAP_MODE_REFRACTION"};function Ig(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Pg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lg={[ba]:"ENVMAP_BLENDING_MULTIPLY",[pu]:"ENVMAP_BLENDING_MIX",[mu]:"ENVMAP_BLENDING_ADD"};function Dg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lg[i.combine]||"ENVMAP_BLENDING_NONE"}function Ng(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ug(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ag(e),c=Cg(e),u=Ig(e),d=Dg(e),h=Ng(e),m=_g(e),x=yg(r),b=s.createProgram(),p,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(eo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(eo).join(`
`),f.length>0&&(f+=`
`)):(p=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),f=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Le.tonemapping_pars_fragment:"",e.toneMapping!==ui?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,pg("linearToOutputTexel",e.outputColorSpace),xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(eo).join(`
`)),o=Kl(o),o=Yu(o,e),o=Zu(o,e),a=Kl(a),a=Yu(a,e),a=Zu(a,e),o=Ju(o),a=Ju(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=v+p+o,E=v+f+a,A=Wu(s,s.VERTEX_SHADER,R),T=Wu(s,s.FRAGMENT_SHADER,E);s.attachShader(b,A),s.attachShader(b,T),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function P(q){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(b)||"",et=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(T)||"",Z=z.trim(),tt=et.trim(),ot=G.trim(),Tt=!0,ft=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,A,T);else{let _t=qu(s,A,"vertex"),Mt=qu(s,T,"fragment");Ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Z+`
`+_t+`
`+Mt)}else Z!==""?xe("WebGLProgram: Program Info Log:",Z):(tt===""||ot==="")&&(ft=!1);ft&&(q.diagnostics={runnable:Tt,programLog:Z,vertexShader:{log:tt,prefix:p},fragmentShader:{log:ot,prefix:f}})}s.deleteShader(A),s.deleteShader(T),_=new nr(s,b),C=vg(s,b)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(b,hg)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ug++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=T,this}var Fg=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jl(t),e.set(t,n)),n}},jl=class{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}};function Og(i){return i===ss||i===$r||i===Kr}function Bg(i,t,e,n,s,r){let o=new Ws,a=new Ql,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,C,D,q,z,et){let G=q.fog,Z=z.geometry,tt=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?q.environment:null,ot=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Tt=t.get(_.envMap||tt,ot),ft=Tt&&Tt.mapping===Wr?Tt.image.height:null,_t=m[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&xe("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let Mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,re=Mt!==void 0?Mt.length:0,Ft=0;Z.morphAttributes.position!==void 0&&(Ft=1),Z.morphAttributes.normal!==void 0&&(Ft=2),Z.morphAttributes.color!==void 0&&(Ft=3);let Bt,fe,ye,lt;if(_t){let J=Ti[_t];Bt=J.vertexShader,fe=J.fragmentShader}else{Bt=_.vertexShader,fe=_.fragmentShader;let J=a.getVertexShaderStage(_),xt=a.getFragmentShaderStage(_);a.update(_,J,xt),ye=J.id,lt=xt.id}let pt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),K=z.isInstancedMesh===!0,W=z.isBatchedMesh===!0,gt=!!_.map,rt=!!_.matcap,dt=!!Tt,Et=!!_.aoMap,Dt=!!_.lightMap,Pt=!!_.bumpMap&&_.wireframe===!1,Kt=!!_.normalMap,mt=!!_.displacementMap,At=!!_.emissiveMap,It=!!_.metalnessMap,ae=!!_.roughnessMap,U=_.anisotropy>0,de=_.clearcoat>0,oe=_.dispersion>0,w=_.retroreflectivity>0,g=_.iridescence>0,H=_.sheen>0,$=_.transmission>0,Q=U&&!!_.anisotropyMap,Lt=de&&!!_.clearcoatMap,Nt=de&&!!_.clearcoatNormalMap,it=de&&!!_.clearcoatRoughnessMap,ct=g&&!!_.iridescenceMap,Ct=g&&!!_.iridescenceThicknessMap,ee=H&&!!_.sheenColorMap,zt=H&&!!_.sheenRoughnessMap,Ht=!!_.specularMap,ce=!!_.specularColorMap,Jt=!!_.specularIntensityMap,Se=$&&!!_.transmissionMap,k=$&&!!_.thicknessMap,kt=!!_.gradientMap,yt=!!_.alphaMap,N=_.alphaTest>0,Ot=!!_.alphaHash,vt=!!_.extensions,F=ui;_.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(F=i.toneMapping);let O={shaderID:_t,shaderType:_.type,shaderName:_.name,vertexShader:Bt,fragmentShader:fe,defines:_.defines,customVertexShaderID:ye,customFragmentShaderID:lt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:W,batchingColor:W&&z._colorsTexture!==null,instancing:K,instancingColor:K&&z.instanceColor!==null,instancingMorph:K&&z.morphTexture!==null,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Fe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:rt,envMap:dt,envMapMode:dt&&Tt.mapping,envMapCubeUVHeight:ft,aoMap:Et,lightMap:Dt,bumpMap:Pt,normalMap:Kt,displacementMap:mt,emissiveMap:At,normalMapObjectSpace:Kt&&_.normalMapType===_u,normalMapTangentSpace:Kt&&_.normalMapType===Qr,packedNormalMap:Kt&&_.normalMapType===Qr&&Og(_.normalMap.format),metalnessMap:It,roughnessMap:ae,anisotropy:U,anisotropyMap:Q,clearcoat:de,clearcoatMap:Lt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:it,dispersion:oe,retroreflection:w,iridescence:g,iridescenceMap:ct,iridescenceThicknessMap:Ct,sheen:H,sheenColorMap:ee,sheenRoughnessMap:zt,specularMap:Ht,specularColorMap:ce,specularIntensityMap:Jt,transmission:$,transmissionMap:Se,thicknessMap:k,gradientMap:kt,opaque:_.transparent===!1&&_.blending===$s&&_.alphaToCoverage===!1,alphaMap:yt,alphaTest:N,alphaHash:Ot,combine:_.combine,mapUv:gt&&x(_.map.channel),aoMapUv:Et&&x(_.aoMap.channel),lightMapUv:Dt&&x(_.lightMap.channel),bumpMapUv:Pt&&x(_.bumpMap.channel),normalMapUv:Kt&&x(_.normalMap.channel),displacementMapUv:mt&&x(_.displacementMap.channel),emissiveMapUv:At&&x(_.emissiveMap.channel),metalnessMapUv:It&&x(_.metalnessMap.channel),roughnessMapUv:ae&&x(_.roughnessMap.channel),anisotropyMapUv:Q&&x(_.anisotropyMap.channel),clearcoatMapUv:Lt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(_.sheenRoughnessMap.channel),specularMapUv:Ht&&x(_.specularMap.channel),specularColorMapUv:ce&&x(_.specularColorMap.channel),specularIntensityMapUv:Jt&&x(_.specularIntensityMap.channel),transmissionMapUv:Se&&x(_.transmissionMap.channel),thicknessMapUv:k&&x(_.thicknessMap.channel),alphaMapUv:yt&&x(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Kt||U),vertexNormals:!!Z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(gt||yt),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||Z.attributes.normal===void 0&&Kt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ft,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:F,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&Fe.getTransfer(_.map.colorSpace)===$e,decodeVideoTextureEmissive:At&&_.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(_.emissiveMap.colorSpace)===$e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Wn,flipSided:_.side===Rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:vt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&_.extensions.multiDraw===!0||W)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return O.vertexUv1s=l.has(1),O.vertexUv2s=l.has(2),O.vertexUv3s=l.has(3),l.clear(),O}function p(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)C.push(D),C.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(f(C,_),v(C,_),C.push(i.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function f(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function v(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function R(_){let C=m[_.type],D;if(C){let q=Ti[C];D=fc.clone(q.uniforms)}else D=_.uniforms;return D}function E(_,C){let D=u.get(C);return D!==void 0?++D.usedTimes:(D=new Ug(i,C,_,s),c.push(D),u.set(C,D)),D}function A(_){if(--_.usedTimes===0){let C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function P(){a.dispose()}return{getParameters:b,getProgramCacheKey:p,getUniforms:R,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:P}}function zg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ku(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,x,b,p,f){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:m,material:x,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:p,group:f},i[t]=v):(v.id=h.id,v.object=h,v.geometry=m,v.material=x,v.materialVariant=o(h),v.groupOrder=b,v.renderOrder=h.renderOrder,v.z=p,v.group=f),t++,v}function l(h,m,x,b,p,f,v){v.reversedDepth===!0&&(p=-p);let R=a(h,m,x,b,p,f);x.transmission>0?n.push(R):x.transparent===!0?s.push(R):e.push(R)}function c(h,m,x,b,p,f){let v=a(h,m,x,b,p,f);x.transmission>0?n.unshift(v):x.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,m){e.length>1&&e.sort(h||Hg),n.length>1&&n.sort(m||Ku),s.length>1&&s.sort(m||Ku)}function d(){for(let h=t,m=i.length;h<m;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Gg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Qu,i.set(n,[o])):s>=r.length?(o=new Qu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new le};break;case"SpotLight":e={position:new I,direction:new I,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wg=0;function Xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qg(i){let t=new kg,e=Vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new be,o=new be;function a(c){let u=0,d=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let m=0,x=0,b=0,p=0,f=0,v=0,R=0,E=0,A=0,T=0,P=0,_=0,C=0,D=0;c.sort(Xg);for(let z=0,et=c.length;z<et;z++){let G=c[z],Z=G.color,tt=G.intensity,ot=G.distance,Tt=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===ss?Tt=G.shadow.map.texture:Tt=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)u+=Z.r*tt,d+=Z.g*tt,h+=Z.b*tt;else if(G.isLightProbe){for(let ft=0;ft<9;ft++)n.probe[ft].addScaledVector(G.sh.coefficients[ft],tt);D++}else if(G.isSunLight){let ft=t.get(G);if(ft.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let _t=G.shadow,Mt=e.get(G);Mt.shadowIntensity=_t.intensity,Mt.shadowBias=_t.bias,Mt.shadowNormalBias=_t.normalBias,Mt.shadowRadius=_t.radius,Mt.shadowMapSize.copy(_t.mapSize).multiply(_t.getFrameExtents()),n.sunShadow[x]=Mt,n.sunShadowMap[x]=Tt;let re=_t.getViewportCount();for(let Ft=0;Ft<re;Ft++)n.sunShadowMatrix[b+Ft]=_t.getMatrix(Ft),n.sunShadowCascade[b+Ft]=_t._cascadeData[Ft];b+=re,x++}n.sun[m]=ft,m++}else if(G.isDirectionalLight){let ft=t.get(G);if(ft.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let _t=G.shadow,Mt=e.get(G);Mt.shadowIntensity=_t.intensity,Mt.shadowBias=_t.bias,Mt.shadowNormalBias=_t.normalBias,Mt.shadowRadius=_t.radius,Mt.shadowMapSize=_t.mapSize,n.directionalShadow[p]=Mt,n.directionalShadowMap[p]=Tt,n.directionalShadowMatrix[p]=G.shadow.matrix,A++}n.directional[p]=ft,p++}else if(G.isSpotLight){let ft=t.get(G);ft.position.setFromMatrixPosition(G.matrixWorld),ft.color.copy(Z).multiplyScalar(tt),ft.distance=ot,ft.coneCos=Math.cos(G.angle),ft.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ft.decay=G.decay,n.spot[v]=ft;let _t=G.shadow;if(G.map&&(n.spotLightMap[_]=G.map,_++,_t.updateMatrices(G),G.castShadow&&C++),n.spotLightMatrix[v]=_t.matrix,G.castShadow){let Mt=e.get(G);Mt.shadowIntensity=_t.intensity,Mt.shadowBias=_t.bias,Mt.shadowNormalBias=_t.normalBias,Mt.shadowRadius=_t.radius,Mt.shadowMapSize=_t.mapSize,n.spotShadow[v]=Mt,n.spotShadowMap[v]=Tt,P++}v++}else if(G.isRectAreaLight){let ft=t.get(G);ft.color.copy(Z).multiplyScalar(tt),ft.halfWidth.set(G.width*.5,0,0),ft.halfHeight.set(0,G.height*.5,0),n.rectArea[R]=ft,R++}else if(G.isPointLight){let ft=t.get(G);if(ft.color.copy(G.color).multiplyScalar(G.intensity),ft.distance=G.distance,ft.decay=G.decay,G.castShadow){let _t=G.shadow,Mt=e.get(G);Mt.shadowIntensity=_t.intensity,Mt.shadowBias=_t.bias,Mt.shadowNormalBias=_t.normalBias,Mt.shadowRadius=_t.radius,Mt.shadowMapSize=_t.mapSize,Mt.shadowCameraNear=_t.camera.near,Mt.shadowCameraFar=_t.camera.far,n.pointShadow[f]=Mt,n.pointShadowMap[f]=Tt,n.pointShadowMatrix[f]=G.shadow.matrix,T++}n.point[f]=ft,f++}else if(G.isHemisphereLight){let ft=t.get(G);ft.skyColor.copy(G.color).multiplyScalar(tt),ft.groundColor.copy(G.groundColor).multiplyScalar(tt),n.hemi[E]=ft,E++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=$t.LTC_FLOAT_1,n.rectAreaLTC2=$t.LTC_FLOAT_2):(n.rectAreaLTC1=$t.LTC_HALF_1,n.rectAreaLTC2=$t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let q=n.hash;(q.sunLength!==m||q.directionalLength!==p||q.pointLength!==f||q.spotLength!==v||q.rectAreaLength!==R||q.hemiLength!==E||q.numSunShadows!==x||q.numDirectionalShadows!==A||q.numPointShadows!==T||q.numSpotShadows!==P||q.numSpotMaps!==_||q.numLightProbes!==D)&&(n.sun.length=m,n.directional.length=p,n.spot.length=v,n.rectArea.length=R,n.point.length=f,n.hemi.length=E,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-C,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,q.sunLength=m,q.directionalLength=p,q.pointLength=f,q.spotLength=v,q.rectAreaLength=R,q.hemiLength=E,q.numSunShadows=x,q.numDirectionalShadows=A,q.numPointShadows=T,q.numSpotShadows=P,q.numSpotMaps=_,q.numLightProbes=D,n.version=Wg++)}function l(c,u){let d=0,h=0,m=0,x=0,b=0,p=0,f=u.matrixWorldInverse;for(let v=0,R=c.length;v<R;v++){let E=c[v];if(E.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(f),d++}else if(E.isDirectionalLight){let A=n.directional[h];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),h++}else if(E.isSpotLight){let A=n.spot[x];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),x++}else if(E.isRectAreaLight){let A=n.rectArea[b];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),o.identity(),r.copy(E.matrixWorld),r.premultiply(f),o.extractRotation(r),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),b++}else if(E.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:a,setupView:l,state:n}}function ju(i){let t=new qg(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Yg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ju(i),t.set(s,[a])):r>=o.length?(a=new ju(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`,$g=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Kg=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],td=new be,to=new I,ql=new I;function Qg(i,t,e){let n=new Ys,s=new Te,r=new Te,o=new tn,a=new aa,l=new ca,c={},u=e.maxTextureSize,d={[Ei]:Rn,[Rn]:Ei,[Wn]:Wn},h=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let x=new rn;x.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ce(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let f=this.type;this.render=function(T,P,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Ea&&(xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kr);let C=i.getRenderTarget(),D=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),z=i.state;z.setBlending(bi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let et=f!==this.type;et&&P.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(Z=>Z.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,Z=T.length;G<Z;G++){let tt=T[G],ot=tt.shadow;if(ot===void 0){xe("WebGLShadowMap:",tt,"has no shadow.");continue}if(ot.autoUpdate===!1&&ot.needsUpdate===!1)continue;s.copy(ot.mapSize);let Tt=ot.getFrameExtents();s.multiply(Tt),r.copy(ot.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Tt.x),s.x=r.x*Tt.x,ot.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Tt.y),s.y=r.y*Tt.y,ot.mapSize.y=r.y));let ft=i.state.buffers.depth.getReversed();if(ot.camera._reversedDepth=ft,ot.map===null||et===!0){if(ot.map!==null&&(ot.map.depthTexture!==null&&(ot.map.depthTexture.dispose(),ot.map.depthTexture=null),ot.map.dispose()),this.type===Js){if(tt.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ot.map=new Un(s.x,s.y,{format:ss,type:Qn,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),ot.map.texture.name=tt.name+".shadowMap",ot.map.depthTexture=new $i(s.x,s.y,ei),ot.map.depthTexture.name=tt.name+".shadowMapDepth",ot.map.depthTexture.format=_i,ot.map.depthTexture.compareFunction=null,ot.map.depthTexture.minFilter=Tn,ot.map.depthTexture.magFilter=Tn}else tt.isPointLight?(ot.map=new xc(s.x),ot.map.depthTexture=new sa(s.x,di)):(ot.map=new Un(s.x,s.y),ot.map.depthTexture=new $i(s.x,s.y,di)),ot.map.depthTexture.name=tt.name+".shadowMap",ot.map.depthTexture.format=_i,this.type===kr?(ot.map.depthTexture.compareFunction=ft?dc:uc,ot.map.depthTexture.minFilter=Pn,ot.map.depthTexture.magFilter=Pn):(ot.map.depthTexture.compareFunction=null,ot.map.depthTexture.minFilter=Tn,ot.map.depthTexture.magFilter=Tn);ot.camera.updateProjectionMatrix()}ot.map.isWebGLCubeRenderTarget!==!0&&(ot.map.width!==s.x||ot.map.height!==s.y)&&ot.map.setSize(s.x,s.y);let _t=ot.map.isWebGLCubeRenderTarget?6:ot.getViewportCount();tt.isPointLight!==!0&&ot.updateMatrices(tt,_);for(let Mt=0;Mt<_t;Mt++){let re=ot.getCamera(Mt);if(tt.isPointLight){let Ft=ot.camera,Bt=ot.matrix,fe=tt.distance||Ft.far;fe!==Ft.far&&(Ft.far=fe,Ft.updateProjectionMatrix()),to.setFromMatrixPosition(tt.matrixWorld),Ft.position.copy(to),ql.copy(Ft.position),ql.add($g[Mt]),Ft.up.copy(Kg[Mt]),Ft.lookAt(ql),Ft.updateMatrixWorld(),Bt.makeTranslation(-to.x,-to.y,-to.z),td.multiplyMatrices(Ft.projectionMatrix,Ft.matrixWorldInverse),ot._frustum.setFromProjectionMatrix(td,Ft.coordinateSystem,Ft.reversedDepth)}if(ot.map.isWebGLCubeRenderTarget)i.setRenderTarget(ot.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(ot.map),i.clear());let Ft=ot.getViewport(Mt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),z.viewport(o)}n=ot.getFrustum(Mt),E(P,_,re,tt,this.type)}ot.isPointLightShadow!==!0&&this.type===Js&&v(ot,_),ot.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(C,D,q)};function v(T,P){let _=t.update(b);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new Un(s.x,s.y,{format:ss,type:Qn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,_,h,b,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,_,m,b,null)}function R(T,P,_,C){let D=null,q=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(q!==void 0)D=q;else if(D=_.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=D.uuid,et=P.uuid,G=c[z];G===void 0&&(G={},c[z]=G);let Z=G[et];Z===void 0&&(Z=D.clone(),G[et]=Z,P.addEventListener("dispose",A)),D=Z}if(D.visible=P.visible,D.wireframe=P.wireframe,C===Js?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:d[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let z=i.properties.get(D);z.light=_}return D}function E(T,P,_,C,D){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Js)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let et=t.update(T),G=T.material;if(Array.isArray(G)){let Z=et.groups;for(let tt=0,ot=Z.length;tt<ot;tt++){let Tt=Z[tt],ft=G[Tt.materialIndex];if(ft&&ft.visible){let _t=R(T,ft,C,D);T.onBeforeShadow(i,T,P,_,et,_t,Tt),i.renderBufferDirect(_,null,et,_t,T,Tt),T.onAfterShadow(i,T,P,_,et,_t,Tt)}}}else if(G.visible){let Z=R(T,G,C,D);T.onBeforeShadow(i,T,P,_,et,Z,null),i.renderBufferDirect(_,null,et,Z,T,null),T.onAfterShadow(i,T,P,_,et,Z,null)}}let z=T.children;for(let et=0,G=z.length;et<G;et++)E(z[et],P,_,C,D)}function A(T){T.target.removeEventListener("dispose",A);for(let _ in c){let C=c[_],D=T.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}function jg(i,t){function e(){let k=!1,kt=new tn,yt=null,N=new tn(0,0,0,0);return{setMask:function(Ot){yt!==Ot&&!k&&(i.colorMask(Ot,Ot,Ot,Ot),yt=Ot)},setLocked:function(Ot){k=Ot},setClear:function(Ot,vt,F,O,J){J===!0&&(Ot*=O,vt*=O,F*=O),kt.set(Ot,vt,F,O),N.equals(kt)===!1&&(i.clearColor(Ot,vt,F,O),N.copy(kt))},reset:function(){k=!1,yt=null,N.set(-1,0,0,0)}}}function n(){let k=!1,kt=!1,yt=null,N=null,Ot=null;return{setReversed:function(vt){if(kt!==vt){let F=t.get("EXT_clip_control");vt?F.clipControlEXT(F.LOWER_LEFT_EXT,F.ZERO_TO_ONE_EXT):F.clipControlEXT(F.LOWER_LEFT_EXT,F.NEGATIVE_ONE_TO_ONE_EXT),kt=vt;let O=Ot;Ot=null,this.setClear(O)}},getReversed:function(){return kt},setTest:function(vt){vt?pt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(vt){yt!==vt&&!k&&(i.depthMask(vt),yt=vt)},setFunc:function(vt){if(kt&&(vt=Pu[vt]),N!==vt){switch(vt){case Go:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case qo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}N=vt}},setLocked:function(vt){k=vt},setClear:function(vt){Ot!==vt&&(Ot=vt,kt&&(vt=1-vt),i.clearDepth(vt))},reset:function(){k=!1,yt=null,N=null,Ot=null,kt=!1}}}function s(){let k=!1,kt=null,yt=null,N=null,Ot=null,vt=null,F=null,O=null,J=null;return{setTest:function(xt){k||(xt?pt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(xt){kt!==xt&&!k&&(i.stencilMask(xt),kt=xt)},setFunc:function(xt,Vt,y){(yt!==xt||N!==Vt||Ot!==y)&&(i.stencilFunc(xt,Vt,y),yt=xt,N=Vt,Ot=y)},setOp:function(xt,Vt,y){(vt!==xt||F!==Vt||O!==y)&&(i.stencilOp(xt,Vt,y),vt=xt,F=Vt,O=y)},setLocked:function(xt){k=xt},setClear:function(xt){J!==xt&&(i.clearStencil(xt),J=xt)},reset:function(){k=!1,kt=null,yt=null,N=null,Ot=null,vt=null,F=null,O=null,J=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},m=new WeakMap,x=[],b=null,p=!1,f=null,v=null,R=null,E=null,A=null,T=null,P=null,_=new le(0,0,0),C=0,D=!1,q=null,z=null,et=null,G=null,Z=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ot=!1,Tt=0,ft=i.getParameter(i.VERSION);ft.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(ft)[1]),ot=Tt>=1):ft.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),ot=Tt>=2);let _t=null,Mt={},re=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Bt=new tn().fromArray(re),fe=new tn().fromArray(Ft);function ye(k,kt,yt,N){let Ot=new Uint8Array(4),vt=i.createTexture();i.bindTexture(k,vt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let F=0;F<yt;F++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(kt,0,i.RGBA,1,1,N,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(kt+F,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return vt}let lt={};lt[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(zs),Pt(!1),Kt(ll),pt(i.CULL_FACE),Et(bi);function pt(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function St(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function K(k,kt){return h[k]!==kt?(i.bindFramebuffer(k,kt),h[k]=kt,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=kt),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=kt),!0):!1}function W(k,kt){let yt=x,N=!1;if(k){yt=m.get(kt),yt===void 0&&(yt=[],m.set(kt,yt));let Ot=k.textures;if(yt.length!==Ot.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,F=Ot.length;vt<F;vt++)yt[vt]=i.COLOR_ATTACHMENT0+vt;yt.length=Ot.length,N=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,N=!0);N&&i.drawBuffers(yt)}function gt(k){return b!==k?(i.useProgram(k),b=k,!0):!1}let rt={[xs]:i.FUNC_ADD,[Kh]:i.FUNC_SUBTRACT,[Qh]:i.FUNC_REVERSE_SUBTRACT};rt[jh]=i.MIN,rt[tu]=i.MAX;let dt={[eu]:i.ZERO,[nu]:i.ONE,[iu]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[lu]:i.SRC_ALPHA_SATURATE,[au]:i.DST_COLOR,[ru]:i.DST_ALPHA,[su]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[cu]:i.ONE_MINUS_DST_COLOR,[ou]:i.ONE_MINUS_DST_ALPHA,[hu]:i.CONSTANT_COLOR,[uu]:i.ONE_MINUS_CONSTANT_COLOR,[du]:i.CONSTANT_ALPHA,[fu]:i.ONE_MINUS_CONSTANT_ALPHA};function Et(k,kt,yt,N,Ot,vt,F,O,J,xt){if(k===bi){p===!0&&(St(i.BLEND),p=!1);return}if(p===!1&&(pt(i.BLEND),p=!0),k!==$h){if(k!==f||xt!==D){if((v!==xs||A!==xs)&&(i.blendEquation(i.FUNC_ADD),v=xs,A=xs),xt)switch(k){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fi:i.blendFunc(i.ONE,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ee("WebGLState: Invalid blending: ",k);break}else switch(k){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hl:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",k);break}R=null,E=null,T=null,P=null,_.set(0,0,0),C=0,f=k,D=xt}return}Ot=Ot||kt,vt=vt||yt,F=F||N,(kt!==v||Ot!==A)&&(i.blendEquationSeparate(rt[kt],rt[Ot]),v=kt,A=Ot),(yt!==R||N!==E||vt!==T||F!==P)&&(i.blendFuncSeparate(dt[yt],dt[N],dt[vt],dt[F]),R=yt,E=N,T=vt,P=F),(O.equals(_)===!1||J!==C)&&(i.blendColor(O.r,O.g,O.b,J),_.copy(O),C=J),f=k,D=!1}function Dt(k,kt){k.side===Wn?St(i.CULL_FACE):pt(i.CULL_FACE);let yt=k.side===Rn;kt&&(yt=!yt),Pt(yt),k.blending===$s&&k.transparent===!1?Et(bi):Et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let N=k.stencilWrite;a.setTest(N),N&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),At(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(k){q!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),q=k)}function Kt(k){k!==Zh?(pt(i.CULL_FACE),k!==z&&(k===ll?i.cullFace(i.BACK):k===Jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),z=k}function mt(k){k!==et&&(ot&&i.lineWidth(k),et=k)}function At(k,kt,yt){k?(pt(i.POLYGON_OFFSET_FILL),(G!==kt||Z!==yt)&&(G=kt,Z=yt,o.getReversed()&&(kt=-kt),i.polygonOffset(kt,yt))):St(i.POLYGON_OFFSET_FILL)}function It(k){k?pt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function ae(k){k===void 0&&(k=i.TEXTURE0+tt-1),_t!==k&&(i.activeTexture(k),_t=k)}function U(k,kt,yt){yt===void 0&&(_t===null?yt=i.TEXTURE0+tt-1:yt=_t);let N=Mt[yt];N===void 0&&(N={type:void 0,texture:void 0},Mt[yt]=N),(N.type!==k||N.texture!==kt)&&(_t!==yt&&(i.activeTexture(yt),_t=yt),i.bindTexture(k,kt||lt[k]),N.type=k,N.texture=kt)}function de(){let k=Mt[_t];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function oe(){try{i.compressedTexImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function g(){try{i.texSubImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function H(){try{i.texSubImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function Lt(){try{i.texStorage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function Nt(){try{i.texStorage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function it(){try{i.texImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function ct(){try{i.texImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function Ct(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function ee(k,kt){d[k]!==kt&&(i.pixelStorei(k,kt),d[k]=kt)}function zt(k){Bt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Bt.copy(k))}function Ht(k){fe.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),fe.copy(k))}function ce(k,kt){let yt=c.get(kt);yt===void 0&&(yt=new WeakMap,c.set(kt,yt));let N=yt.get(k);N===void 0&&(N=i.getUniformBlockIndex(kt,k.name),yt.set(k,N))}function Jt(k,kt){let N=c.get(kt).get(k);l.get(kt)!==N&&(i.uniformBlockBinding(kt,N,k.__bindingPointIndex),l.set(kt,N))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},_t=null,Mt={},h={},m=new WeakMap,x=[],b=null,p=!1,f=null,v=null,R=null,E=null,A=null,T=null,P=null,_=new le(0,0,0),C=0,D=!1,q=null,z=null,et=null,G=null,Z=null,Bt.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:St,bindFramebuffer:K,drawBuffers:W,useProgram:gt,setBlending:Et,setMaterial:Dt,setFlipSided:Pt,setCullFace:Kt,setLineWidth:mt,setPolygonOffset:At,setScissorTest:It,activeTexture:ae,bindTexture:U,unbindTexture:de,compressedTexImage2D:oe,compressedTexImage3D:w,texImage2D:it,texImage3D:ct,pixelStorei:ee,getParameter:Ct,updateUBOMapping:ce,uniformBlockBinding:Jt,texStorage2D:Lt,texStorage3D:Nt,texSubImage2D:g,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:zt,viewport:Ht,reset:Se}}function tx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap,d=new Set,h,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,g){return x?new OffscreenCanvas(w,g):Sr("canvas")}function p(w,g,H){let $=1,Q=oe(w);if((Q.width>H||Q.height>H)&&($=H/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let Lt=Math.floor($*Q.width),Nt=Math.floor($*Q.height);h===void 0&&(h=b(Lt,Nt));let it=g?b(Lt,Nt):h;return it.width=Lt,it.height=Nt,it.getContext("2d").drawImage(w,0,0,Lt,Nt),xe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Lt+"x"+Nt+")."),it}else return"data"in w&&xe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function f(w){return w.generateMipmaps}function v(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,g,H,$,Q,Lt=!1){if(w!==null){if(i[w]!==void 0)return i[w];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Nt;$&&(Nt=t.get("EXT_texture_norm16"),Nt||xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=g;if(g===i.RED&&(H===i.FLOAT&&(it=i.R32F),H===i.HALF_FLOAT&&(it=i.R16F),H===i.UNSIGNED_BYTE&&(it=i.R8),H===i.UNSIGNED_SHORT&&Nt&&(it=Nt.R16_EXT),H===i.SHORT&&Nt&&(it=Nt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.R8UI),H===i.UNSIGNED_SHORT&&(it=i.R16UI),H===i.UNSIGNED_INT&&(it=i.R32UI),H===i.BYTE&&(it=i.R8I),H===i.SHORT&&(it=i.R16I),H===i.INT&&(it=i.R32I)),g===i.RG&&(H===i.FLOAT&&(it=i.RG32F),H===i.HALF_FLOAT&&(it=i.RG16F),H===i.UNSIGNED_BYTE&&(it=i.RG8),H===i.UNSIGNED_SHORT&&Nt&&(it=Nt.RG16_EXT),H===i.SHORT&&Nt&&(it=Nt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RG8UI),H===i.UNSIGNED_SHORT&&(it=i.RG16UI),H===i.UNSIGNED_INT&&(it=i.RG32UI),H===i.BYTE&&(it=i.RG8I),H===i.SHORT&&(it=i.RG16I),H===i.INT&&(it=i.RG32I)),g===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RGB8UI),H===i.UNSIGNED_SHORT&&(it=i.RGB16UI),H===i.UNSIGNED_INT&&(it=i.RGB32UI),H===i.BYTE&&(it=i.RGB8I),H===i.SHORT&&(it=i.RGB16I),H===i.INT&&(it=i.RGB32I)),g===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),H===i.UNSIGNED_INT&&(it=i.RGBA32UI),H===i.BYTE&&(it=i.RGBA8I),H===i.SHORT&&(it=i.RGBA16I),H===i.INT&&(it=i.RGBA32I)),g===i.RGB&&(H===i.UNSIGNED_SHORT&&Nt&&(it=Nt.RGB16_EXT),H===i.SHORT&&Nt&&(it=Nt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),g===i.RGBA){let ct=Lt?Mr:Fe.getTransfer(Q);H===i.FLOAT&&(it=i.RGBA32F),H===i.HALF_FLOAT&&(it=i.RGBA16F),H===i.UNSIGNED_BYTE&&(it=ct===$e?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&Nt&&(it=Nt.RGBA16_EXT),H===i.SHORT&&Nt&&(it=Nt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function A(w,g){let H;return w?g===null||g===di||g===Qs?H=i.DEPTH24_STENCIL8:g===ei?H=i.DEPTH32F_STENCIL8:g===Ks&&(H=i.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===di||g===Qs?H=i.DEPTH_COMPONENT24:g===ei?H=i.DEPTH_COMPONENT32F:g===Ks&&(H=i.DEPTH_COMPONENT16),H}function T(w,g){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tn&&w.minFilter!==Pn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function P(w){let g=w.target;g.removeEventListener("dispose",P),C(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function _(w){let g=w.target;g.removeEventListener("dispose",_),q(g)}function C(w){let g=n.get(w);if(g.__webglInit===void 0)return;let H=w.source,$=m.get(H);if($){let Q=$[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(w),Object.keys($).length===0&&m.delete(H)}n.remove(w)}function D(w){let g=n.get(w);i.deleteTexture(g.__webglTexture);let H=w.source,$=m.get(H);delete $[g.__cacheKey],o.memory.textures--}function q(w){let g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let Q=0;Q<g.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(g.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)i.deleteFramebuffer(g.__webglFramebuffer[$]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let H=w.textures;for(let $=0,Q=H.length;$<Q;$++){let Lt=n.get(H[$]);Lt.__webglTexture&&(i.deleteTexture(Lt.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(w)}let z=0;function et(){z=0}function G(){return z}function Z(w){z=w}function tt(){let w=z;return w>=s.maxTextures&&xe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,w}function ot(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function Tt(w,g){let H=n.get(w);if(w.isVideoTexture&&U(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){let $=w.image;if($===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{St(H,w,g);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+g)}function ft(w,g){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){St(H,w,g);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+g)}function _t(w,g){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){St(H,w,g);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+g)}function Mt(w,g){let H=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&H.__version!==w.version){K(H,w,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+g)}let re={[Hs]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},Ft={[Tn]:i.NEAREST,[gu]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},Bt={[vu]:i.NEVER,[wu]:i.ALWAYS,[Mu]:i.LESS,[uc]:i.LEQUAL,[Su]:i.EQUAL,[dc]:i.GEQUAL,[Eu]:i.GREATER,[bu]:i.NOTEQUAL};function fe(w,g){if(g.type===ei&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Pn||g.magFilter===Aa||g.magFilter===Xr||g.magFilter===ns||g.minFilter===Pn||g.minFilter===Aa||g.minFilter===Xr||g.minFilter===ns)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,re[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,re[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,re[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ft[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ft[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Bt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Tn||g.minFilter!==Xr&&g.minFilter!==ns||g.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ye(w,g){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",P));let $=g.source,Q=m.get($);Q===void 0&&(Q={},m.set($,Q));let Lt=ot(g);if(Lt!==w.__cacheKey){Q[Lt]===void 0&&(Q[Lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[Lt].usedTimes++;let Nt=Q[w.__cacheKey];Nt!==void 0&&(Q[w.__cacheKey].usedTimes--,Nt.usedTimes===0&&D(g)),w.__cacheKey=Lt,w.__webglTexture=Q[Lt].texture}return H}function lt(w,g,H){return Math.floor(Math.floor(w/H)/g)}function pt(w,g,H,$){let Lt=w.updateRanges;if(Lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,H,$,g.data);else{Lt.sort((ee,zt)=>ee.start-zt.start);let Nt=0;for(let ee=1;ee<Lt.length;ee++){let zt=Lt[Nt],Ht=Lt[ee],ce=zt.start+zt.count,Jt=lt(Ht.start,g.width,4),Se=lt(zt.start,g.width,4);Ht.start<=ce+1&&Jt===Se&&lt(Ht.start+Ht.count-1,g.width,4)===Jt?zt.count=Math.max(zt.count,Ht.start+Ht.count-zt.start):(++Nt,Lt[Nt]=Ht)}Lt.length=Nt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),ct=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ee=0,zt=Lt.length;ee<zt;ee++){let Ht=Lt[ee],ce=Math.floor(Ht.start/4),Jt=Math.ceil(Ht.count/4),Se=ce%g.width,k=Math.floor(ce/g.width),kt=Jt,yt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,Se,k,kt,yt,H,$,g.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function St(w,g,H){let $=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=i.TEXTURE_3D);let Q=ye(w,g),Lt=g.source;e.bindTexture($,w.__webglTexture,i.TEXTURE0+H);let Nt=n.get(Lt);if(Lt.version!==Nt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap!="undefined"&&g.image instanceof ImageBitmap)===!1){let yt=Fe.getPrimaries(Fe.workingColorSpace),N=g.colorSpace===Oi?null:Fe.getPrimaries(g.colorSpace),Ot=g.colorSpace===Oi||yt===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ct=p(g.image,!1,s.maxTextureSize);ct=de(g,ct);let Ct=r.convert(g.format,g.colorSpace),ee=r.convert(g.type),zt=E(g.internalFormat,Ct,ee,g.normalized,g.colorSpace,g.isVideoTexture);fe($,g);let Ht,ce=g.mipmaps,Jt=g.isVideoTexture!==!0,Se=Nt.__version===void 0||Q===!0,k=Lt.dataReady,kt=T(g,ct);if(g.isDepthTexture)zt=A(g.format===is,g.type),Se&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,zt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,zt,ct.width,ct.height,0,Ct,ee,null));else if(g.isDataTexture)if(ce.length>0){Jt&&Se&&e.texStorage2D(i.TEXTURE_2D,kt,zt,ce[0].width,ce[0].height);for(let yt=0,N=ce.length;yt<N;yt++)Ht=ce[yt],Jt?k&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Ht.width,Ht.height,Ct,ee,Ht.data):e.texImage2D(i.TEXTURE_2D,yt,zt,Ht.width,Ht.height,0,Ct,ee,Ht.data);g.generateMipmaps=!1}else Jt?(Se&&e.texStorage2D(i.TEXTURE_2D,kt,zt,ct.width,ct.height),k&&pt(g,ct,Ct,ee)):e.texImage2D(i.TEXTURE_2D,0,zt,ct.width,ct.height,0,Ct,ee,ct.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Jt&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,zt,ce[0].width,ce[0].height,ct.depth);for(let yt=0,N=ce.length;yt<N;yt++)if(Ht=ce[yt],g.format!==ni)if(Ct!==null)if(Jt){if(k)if(g.layerUpdates.size>0){let Ot=Ul(Ht.width,Ht.height,g.format,g.type);for(let vt of g.layerUpdates){let F=Ht.data.subarray(vt*Ot/Ht.data.BYTES_PER_ELEMENT,(vt+1)*Ot/Ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,vt,Ht.width,Ht.height,1,Ct,F)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,Ht.width,Ht.height,ct.depth,Ct,Ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,zt,Ht.width,Ht.height,ct.depth,0,Ht.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,Ht.width,Ht.height,ct.depth,Ct,ee,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,zt,Ht.width,Ht.height,ct.depth,0,Ct,ee,Ht.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Jt&&Se&&e.texStorage2D(i.TEXTURE_2D,kt,zt,ce[0].width,ce[0].height);for(let yt=0,N=ce.length;yt<N;yt++)Ht=ce[yt],g.format!==ni?Ct!==null?Jt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,Ht.width,Ht.height,Ct,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,zt,Ht.width,Ht.height,0,Ht.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?k&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Ht.width,Ht.height,Ct,ee,Ht.data):e.texImage2D(i.TEXTURE_2D,yt,zt,Ht.width,Ht.height,0,Ct,ee,Ht.data)}else if(g.isDataArrayTexture)if(Jt){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,zt,ct.width,ct.height,ct.depth),k)if(g.layerUpdates.size>0){let yt=Ul(ct.width,ct.height,g.format,g.type);for(let N of g.layerUpdates){let Ot=ct.data.subarray(N*yt/ct.data.BYTES_PER_ELEMENT,(N+1)*yt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,N,ct.width,ct.height,1,Ct,ee,Ot)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Ct,ee,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,ct.width,ct.height,ct.depth,0,Ct,ee,ct.data);else if(g.isData3DTexture)Jt?(Se&&e.texStorage3D(i.TEXTURE_3D,kt,zt,ct.width,ct.height,ct.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Ct,ee,ct.data)):e.texImage3D(i.TEXTURE_3D,0,zt,ct.width,ct.height,ct.depth,0,Ct,ee,ct.data);else if(g.isFramebufferTexture){if(Se)if(Jt)e.texStorage2D(i.TEXTURE_2D,kt,zt,ct.width,ct.height);else{let yt=ct.width,N=ct.height;for(let Ot=0;Ot<kt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,zt,yt,N,0,Ct,ee,null),yt>>=1,N>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let yt=i.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),ct.parentNode!==yt){yt.appendChild(ct),d.add(g),yt.onpaint=N=>{let Ot=N.changedElements;for(let vt of d)Ot.includes(vt.image)&&(vt.needsUpdate=!0)},yt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ct);else{let Ot=i.RGBA,vt=i.RGBA,F=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ot,vt,F,ct)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ce.length>0){if(Jt&&Se){let yt=oe(ce[0]);e.texStorage2D(i.TEXTURE_2D,kt,zt,yt.width,yt.height)}for(let yt=0,N=ce.length;yt<N;yt++)Ht=ce[yt],Jt?k&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Ct,ee,Ht):e.texImage2D(i.TEXTURE_2D,yt,zt,Ct,ee,Ht);g.generateMipmaps=!1}else if(Jt){if(Se){let yt=oe(ct);e.texStorage2D(i.TEXTURE_2D,kt,zt,yt.width,yt.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,ee,ct)}else e.texImage2D(i.TEXTURE_2D,0,zt,Ct,ee,ct);f(g)&&v($),Nt.__version=Lt.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function K(w,g,H){if(g.image.length!==6)return;let $=ye(w,g),Q=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);let Lt=n.get(Q);if(Q.version!==Lt.__version||$===!0){e.activeTexture(i.TEXTURE0+H);let Nt=Fe.getPrimaries(Fe.workingColorSpace),it=g.colorSpace===Oi?null:Fe.getPrimaries(g.colorSpace),ct=g.colorSpace===Oi||Nt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Ct=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,zt=[];for(let vt=0;vt<6;vt++)!Ct&&!ee?zt[vt]=p(g.image[vt],!0,s.maxCubemapSize):zt[vt]=ee?g.image[vt].image:g.image[vt],zt[vt]=de(g,zt[vt]);let Ht=zt[0],ce=r.convert(g.format,g.colorSpace),Jt=r.convert(g.type),Se=E(g.internalFormat,ce,Jt,g.normalized,g.colorSpace),k=g.isVideoTexture!==!0,kt=Lt.__version===void 0||$===!0,yt=Q.dataReady,N=T(g,Ht);fe(i.TEXTURE_CUBE_MAP,g);let Ot;if(Ct){k&&kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,N,Se,Ht.width,Ht.height);for(let vt=0;vt<6;vt++){Ot=zt[vt].mipmaps;for(let F=0;F<Ot.length;F++){let O=Ot[F];g.format!==ni?ce!==null?k?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,0,0,O.width,O.height,ce,O.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,Se,O.width,O.height,0,O.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,0,0,O.width,O.height,ce,Jt,O.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,Se,O.width,O.height,0,ce,Jt,O.data)}}}else{if(Ot=g.mipmaps,k&&kt){Ot.length>0&&N++;let vt=oe(zt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,N,Se,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(ee){k?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,zt[vt].width,zt[vt].height,ce,Jt,zt[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Se,zt[vt].width,zt[vt].height,0,ce,Jt,zt[vt].data);for(let F=0;F<Ot.length;F++){let J=Ot[F].image[vt].image;k?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,0,0,J.width,J.height,ce,Jt,J.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,Se,J.width,J.height,0,ce,Jt,J.data)}}else{k?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ce,Jt,zt[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Se,ce,Jt,zt[vt]);for(let F=0;F<Ot.length;F++){let O=Ot[F];k?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,0,0,ce,Jt,O.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,Se,ce,Jt,O.image[vt])}}}f(g)&&v(i.TEXTURE_CUBE_MAP),Lt.__version=Q.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function W(w,g,H,$,Q,Lt){let Nt=r.convert(H.format,H.colorSpace),it=r.convert(H.type),ct=E(H.internalFormat,Nt,it,H.normalized,H.colorSpace),Ct=n.get(g),ee=n.get(H);if(ee.__renderTarget=g,!Ct.__hasExternalTextures){let zt=Math.max(1,g.width>>Lt),Ht=Math.max(1,g.height>>Lt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Lt,ct,zt,Ht,g.depth,0,Nt,it,null):e.texImage2D(Q,Lt,ct,zt,Ht,0,Nt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ae(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,ee.__webglTexture,0,It(g)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,ee.__webglTexture,Lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(w,g,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){let $=g.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Lt=A(g.stencilBuffer,Q),Nt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ae(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(g),Lt,g.width,g.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(g),Lt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,w)}else{let $=g.textures;for(let Q=0;Q<$.length;Q++){let Lt=$[Q],Nt=r.convert(Lt.format,Lt.colorSpace),it=r.convert(Lt.type),ct=E(Lt.internalFormat,Nt,it,Lt.normalized,Lt.colorSpace);ae(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(g),ct,g.width,g.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(g),ct,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ct,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(w,g,H){let $=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),fe(i.TEXTURE_CUBE_MAP,g.depthTexture);let Ct=r.convert(g.depthTexture.format),ee=r.convert(g.depthTexture.type),zt;g.depthTexture.format===_i?zt=i.DEPTH_COMPONENT24:g.depthTexture.format===is&&(zt=i.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,zt,g.width,g.height,0,Ct,ee,null)}}else Tt(g.depthTexture,0);let Lt=Q.__webglTexture,Nt=It(g),it=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ct=g.depthTexture.format===is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===_i)ae(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,it,Lt,0,Nt):i.framebufferTexture2D(i.FRAMEBUFFER,ct,it,Lt,0);else if(g.depthTexture.format===is)ae(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,it,Lt,0,Nt):i.framebufferTexture2D(i.FRAMEBUFFER,ct,it,Lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(w){let g=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){let Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=$}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)rt(g.__webglFramebuffer[$],w,$);else{let $=w.texture.mipmaps;$&&$.length>0?rt(g.__webglFramebuffer[0],w,0):rt(g.__webglFramebuffer,w,0)}else if(H){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=i.createRenderbuffer(),gt(g.__webglDepthbuffer[$],w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=g.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Lt)}}else{let $=w.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),gt(g.__webglDepthbuffer,w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(w,g,H){let $=n.get(w);g!==void 0&&W($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&dt(w)}function Dt(w){let g=w.texture,H=n.get(w),$=n.get(g);w.addEventListener("dispose",_);let Q=w.textures,Lt=w.isWebGLCubeRenderTarget===!0,Nt=Q.length>1;if(Nt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=g.version,o.memory.textures++),Lt){H.__webglFramebuffer=[];for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer[it]=[];for(let ct=0;ct<g.mipmaps.length;ct++)H.__webglFramebuffer[it][ct]=i.createFramebuffer()}else H.__webglFramebuffer[it]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer=[];for(let it=0;it<g.mipmaps.length;it++)H.__webglFramebuffer[it]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let it=0,ct=Q.length;it<ct;it++){let Ct=n.get(Q[it]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ae(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let it=0;it<Q.length;it++){let ct=Q[it];H.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[it]);let Ct=r.convert(ct.format,ct.colorSpace),ee=r.convert(ct.type),zt=E(ct.internalFormat,Ct,ee,ct.normalized,ct.colorSpace,w.isXRRenderTarget===!0),Ht=It(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,zt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,H.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Lt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),fe(i.TEXTURE_CUBE_MAP,g);for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)W(H.__webglFramebuffer[it][ct],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct);else W(H.__webglFramebuffer[it],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);f(g)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let it=0,ct=Q.length;it<ct;it++){let Ct=Q[it],ee=n.get(Ct),zt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(zt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(zt,ee.__webglTexture),fe(zt,Ct),W(H.__webglFramebuffer,w,Ct,i.COLOR_ATTACHMENT0+it,zt,0),f(Ct)&&v(zt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(it=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,$.__webglTexture),fe(it,g),g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)W(H.__webglFramebuffer[ct],w,g,i.COLOR_ATTACHMENT0,it,ct);else W(H.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,it,0);f(g)&&v(it),e.unbindTexture()}w.depthBuffer&&dt(w)}function Pt(w){let g=w.textures;for(let H=0,$=g.length;H<$;H++){let Q=g[H];if(f(Q)){let Lt=R(w),Nt=n.get(Q).__webglTexture;e.bindTexture(Lt,Nt),v(Lt),e.unbindTexture()}}}let Kt=[],mt=[];function At(w){if(w.samples>0){if(ae(w)===!1){let g=w.textures,H=w.width,$=w.height,Q=i.COLOR_BUFFER_BIT,Lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(w),it=g.length>1;if(it)for(let Ct=0;Ct<g.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);let ct=w.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ct=0;Ct<g.length;Ct++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ct]);let ee=n.get(g[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,Q,i.NEAREST),l===!0&&(Kt.length=0,mt.length=0,Kt.push(i.COLOR_ATTACHMENT0+Ct),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Kt.push(Lt),mt.push(Lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Ct=0;Ct<g.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ct]);let ee=n.get(g[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function It(w){return Math.min(s.maxSamples,w.samples)}function ae(w){let g=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(w){let g=o.render.frame;u.get(w)!==g&&(u.set(w,g),w.update())}function de(w,g){let H=w.colorSpace,$=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==vr&&H!==Oi&&(Fe.getTransfer(H)===$e?($!==ni||Q!==Xn)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",H)),g}function oe(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=et,this.getTextureUnits=G,this.setTextureUnits=Z,this.setTexture2D=Tt,this.setTexture2DArray=ft,this.setTexture3D=_t,this.setTextureCube=Mt,this.rebindTextures=Et,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=W,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ex(i,t){function e(n,s=Oi){let r,o=Fe.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ml)return i.BYTE;if(n===Sl)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===wl)return i.ALPHA;if(n===Tl)return i.RGB;if(n===ni)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Ia)return i.RED;if(n===La)return i.RED_INTEGER;if(n===ss)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===qr||n===Yr||n===Zr||n===Jr)if(o===$e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Ha||n===Ga||n===ka||n===Va||n===$r||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===Ha)return o===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ga)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ka)return r.COMPRESSED_R11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===tc||n===ec||n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rc||n===oc||n===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rc)return o===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===lc||n===Kr||n===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
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

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Pr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends yi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,x=null,b=typeof XRWebGLBinding!="undefined",p=new th,f={},v=e.getContextAttributes(),R=null,E=null,A=[],T=[],P=new Te,_=null,C=null,D=new wn;D.viewport=new tn;let q=new wn;q.viewport=new tn;let z=[D,q],et=new va,G=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let pt=A[lt];return pt===void 0&&(pt=new Xs,A[lt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(lt){let pt=A[lt];return pt===void 0&&(pt=new Xs,A[lt]=pt),pt.getGripSpace()},this.getHand=function(lt){let pt=A[lt];return pt===void 0&&(pt=new Xs,A[lt]=pt),pt.getHandSpace()};function tt(lt){let pt=T.indexOf(lt.inputSource);if(pt===-1)return;let St=A[pt];St!==void 0&&(St.update(lt.inputSource,lt.frame,c||o),St.dispatchEvent({type:lt.type,data:lt.inputSource}))}function ot(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",Tt);for(let lt=0;lt<A.length;lt++){let pt=T[lt];pt!==null&&(T[lt]=null,A[lt].disconnect(pt))}G=null,Z=null,p.reset();for(let lt in f)delete f[lt];if(t.setRenderTarget(R),m=null,h=null,d=null,s=null,E=null,ye.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),C!==null){let lt=C.camera;lt.fov=C.fov,lt.zoom=C.zoom,lt.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,n.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",Tt),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,K=null,W=null;v.depth&&(W=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=v.stencil?is:_i,K=v.stencil?Qs:di);let gt={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(gt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new Un(h.textureWidth,h.textureHeight,{format:ni,type:Xn,depthTexture:new $i(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let St={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Un(m.framebufferWidth,m.framebufferHeight,{format:ni,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Tt(lt){for(let pt=0;pt<lt.removed.length;pt++){let St=lt.removed[pt],K=T.indexOf(St);K>=0&&(T[K]=null,A[K].disconnect(St))}for(let pt=0;pt<lt.added.length;pt++){let St=lt.added[pt],K=T.indexOf(St);if(K===-1){for(let gt=0;gt<A.length;gt++)if(gt>=T.length){T.push(St),K=gt;break}else if(T[gt]===null){T[gt]=St,K=gt;break}if(K===-1)break}let W=A[K];W&&W.connect(St)}}let ft=new I,_t=new I;function Mt(lt,pt,St){ft.setFromMatrixPosition(pt.matrixWorld),_t.setFromMatrixPosition(St.matrixWorld);let K=ft.distanceTo(_t),W=pt.projectionMatrix.elements,gt=St.projectionMatrix.elements,rt=W[14]/(W[10]-1),dt=W[14]/(W[10]+1),Et=(W[9]+1)/W[5],Dt=(W[9]-1)/W[5],Pt=(W[8]-1)/W[0],Kt=(gt[8]+1)/gt[0],mt=rt*Pt,At=rt*Kt,It=K/(-Pt+Kt),ae=It*-Pt;if(pt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(ae),lt.translateZ(It),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),W[10]===-1)lt.projectionMatrix.copy(pt.projectionMatrix),lt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let U=rt+It,de=dt+It,oe=mt-ae,w=At+(K-ae),g=Et*dt/de*U,H=Dt*dt/de*U;lt.projectionMatrix.makePerspective(oe,w,g,H,U,de),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function re(lt,pt){pt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(pt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let pt=lt.near,St=lt.far;p.texture!==null&&(p.depthNear>0&&(pt=p.depthNear),p.depthFar>0&&(St=p.depthFar)),et.near=q.near=D.near=pt,et.far=q.far=D.far=St,(G!==et.near||Z!==et.far)&&(s.updateRenderState({depthNear:et.near,depthFar:et.far}),G=et.near,Z=et.far),et.layers.mask=lt.layers.mask|6,D.layers.mask=et.layers.mask&-5,q.layers.mask=et.layers.mask&-3;let K=lt.parent,W=et.cameras;re(et,K);for(let gt=0;gt<W.length;gt++)re(W[gt],K);W.length===2?Mt(et,D,q):et.projectionMatrix.copy(D.projectionMatrix),C===null&&lt.isPerspectiveCamera&&(C={camera:lt,fov:lt.fov,zoom:lt.zoom}),Ft(lt,et,K)};function Ft(lt,pt,St){St===null?lt.matrix.copy(pt.matrixWorld):(lt.matrix.copy(St.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(pt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(pt.projectionMatrix),lt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=ds*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(lt){l=lt,h!==null&&(h.fixedFoveation=lt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=lt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(et)},this.getCameraTexture=function(lt){return f[lt]};let Bt=null;function fe(lt,pt){if(u=pt.getViewerPose(c||o),x=pt,u!==null){let St=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let K=!1;St.length!==et.cameras.length&&(et.cameras.length=0,K=!0);for(let dt=0;dt<St.length;dt++){let Et=St[dt],Dt=null;if(m!==null)Dt=m.getViewport(Et);else{let Kt=d.getViewSubImage(h,Et);Dt=Kt.viewport,dt===0&&(t.setRenderTargetTextures(E,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(E))}let Pt=z[dt];Pt===void 0&&(Pt=new wn,Pt.layers.enable(dt),Pt.viewport=new tn,z[dt]=Pt),Pt.matrix.fromArray(Et.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Et.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),dt===0&&(et.matrix.copy(Pt.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),K===!0&&et.cameras.push(Pt)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let dt=d.getDepthInformation(St[0]);dt&&dt.isValid&&dt.texture&&p.init(dt,s.renderState)}if(W&&W.includes("camera-access")&&b){t.state.unbindTexture(),d=n.getBinding();for(let dt=0;dt<St.length;dt++){let Et=St[dt].camera;if(Et){let Dt=f[Et];Dt||(Dt=new Pr,f[Et]=Dt);let Pt=d.getCameraImage(Et);Dt.sourceTexture=Pt}}}}for(let St=0;St<A.length;St++){let K=T[St],W=A[St];K!==null&&W!==void 0&&W.update(K,pt,c||o)}Bt&&Bt(lt,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),x=null}let ye=new ed;ye.setAnimationLoop(fe),this.setAnimationLoop=function(lt){Bt=lt},this.dispose=function(){}}},sx=new be,ad=new Re;ad.set(-1,0,0,0,1,0,0,0,1);function rx(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ll(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,v,R,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),b(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,v,R):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Rn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Rn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v=t.get(f),R=v.envMap,E=v.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler(E)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ad),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,R){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=R*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function b(p,f){let v=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ox(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){let T=A.program;n.uniformBlockBinding(E,T)}function c(E,A){let T=s[E.id];T===void 0&&(p(E),T=u(E),s[E.id]=T,E.addEventListener("dispose",v));let P=A.program;n.updateUBOMapping(E,P);let _=t.render.frame;r[E.id]!==_&&(h(E),r[E.id]=_)}function u(E){let A=d();E.__bindingPointIndex=A;let T=i.createBuffer(),P=E.__size,_=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,T),T}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){let A=s[E.id],T=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,C=T.length;_<C;_++){let D=T[_];if(Array.isArray(D))for(let q=0,z=D.length;q<z;q++)m(D[q],_,q,P);else m(D,_,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,A,T,P){if(b(E,A,T,P)===!0){let _=E.__offset,C=E.value;if(Array.isArray(C)){let D=0;for(let q=0;q<C.length;q++){let z=C[q],et=f(z);x(z,E.__data,D),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(D+=et.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,E.__data)}}function x(E,A,T){typeof E=="number"||typeof E=="boolean"?A[0]=E:E.isMatrix3?(A[0]=E.elements[0],A[1]=E.elements[1],A[2]=E.elements[2],A[3]=0,A[4]=E.elements[3],A[5]=E.elements[4],A[6]=E.elements[5],A[7]=0,A[8]=E.elements[6],A[9]=E.elements[7],A[10]=E.elements[8],A[11]=0):ArrayBuffer.isView(E)?A.set(new E.constructor(E.buffer,E.byteOffset,A.length)):E.toArray(A,T)}function b(E,A,T,P){let _=E.value,C=A+"_"+T;if(P[C]===void 0)return typeof _=="number"||typeof _=="boolean"?P[C]=_:ArrayBuffer.isView(_)?P[C]=_.slice():P[C]=_.clone(),!0;{let D=P[C];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return P[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function p(E){let A=E.uniforms,T=0,P=16;for(let C=0,D=A.length;C<D;C++){let q=Array.isArray(A[C])?A[C]:[A[C]];for(let z=0,et=q.length;z<et;z++){let G=q[z],Z=Array.isArray(G.value)?G.value:[G.value];for(let tt=0,ot=Z.length;tt<ot;tt++){let Tt=Z[tt],ft=f(Tt),_t=T%P,Mt=_t%ft.boundary,re=_t+Mt;T+=Mt,re!==0&&P-re<ft.storage&&(T+=P-re),G.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=ft.storage}}}let _=T%P;return _>0&&(T+=P-_),E.__size=T,E.__cache={},this}function f(E){let A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(A.boundary=16,A.storage=E.byteLength):xe("WebGLRenderer: Unsupported uniform value type.",E),A}function v(E){let A=E.target;A.removeEventListener("dispose",v);let T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function R(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var ax=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function cx(){return wi===null&&(wi=new Ar(ax,16,16,ss,Qn),wi.name="DFG_LUT",wi.minFilter=Pn,wi.magFilter=Pn,wi.wrapS=xi,wi.wrapT=xi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var _c=class{constructor(t={}){let{canvas:e=Au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Xn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let b=m,p=new Set([Na,Da,La]),f=new Set([Xn,di,Ks,Qs,Ca,Pa]),v=new Uint32Array(4),R=new Int32Array(4),E=new I,A=null,T=null,P=[],_=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,q=!1,z=null,et=null,G=null,Z=null;this._outputColorSpace=kn;let tt=0,ot=0,Tt=null,ft=-1,_t=null,Mt=new tn,re=new tn,Ft=null,Bt=new le(0),fe=0,ye=e.width,lt=e.height,pt=1,St=null,K=null,W=new tn(0,0,ye,lt),gt=new tn(0,0,ye,lt),rt=!1,dt=new Ys,Et=!1,Dt=!1,Pt=new be,Kt=new I,mt=new tn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function ae(){return Tt===null?pt:1}let U=n;function de(M,V){return e.getContext(M,V)}let oe,w,g,H,$,Q,Lt,Nt,it,ct,Ct,ee,zt,Ht,ce,Jt,Se,k,kt,yt,N,Ot,vt;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sa}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),U===null){let V="webgl2";if(U=de(V,M),U===null)throw de(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}F()}catch(M){throw e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),Ee("WebGLRenderer: "+M.message),M}function F(){oe=new mm(U),oe.init(),N=new ex(U,oe),w=new rm(U,oe,t,N),g=new jg(U,oe),w.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),et=U.createFramebuffer(),G=U.createFramebuffer(),Z=U.createFramebuffer(),H=new _m(U),$=new zg,Q=new tx(U,oe,g,$,w,N,H),Lt=new pm(D),Nt=new vf(U),Ot=new im(U,Nt),it=new gm(U,Nt,H,Ot),ct=new vm(U,it,Nt,Ot,H),k=new ym(U,w,Q),ce=new om($),Ct=new Bg(D,Lt,oe,w,Ot,ce),ee=new rx(D,$),zt=new Gg,Ht=new Yg(oe),Se=new nm(D,Lt,g,ct,x,l),Jt=new Qg(D,ct,w),vt=new ox(U,H,w,g),kt=new sm(U,oe,H),yt=new xm(U,oe,H),H.programs=Ct.programs,D.capabilities=w,D.extensions=oe,D.properties=$,D.renderLists=zt,D.shadowMap=Jt,D.state=g,D.info=H}b!==Xn&&(C=new Sm(b,e.width,e.height,a,s,r));let O=new eh(D,U);this.xr=O,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(M){M!==void 0&&(pt=M,this.setSize(ye,lt,!1))},this.getSize=function(M){return M.set(ye,lt)},this.setSize=function(M,V,ht=!0){if(O.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=M,lt=V,e.width=Math.floor(M*pt),e.height=Math.floor(V*pt),ht===!0&&(e.style.width=M+"px",e.style.height=V+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,M,V)},this.getDrawingBufferSize=function(M){return M.set(ye*pt,lt*pt).floor()},this.setDrawingBufferSize=function(M,V,ht){ye=M,lt=V,pt=ht,e.width=Math.floor(M*ht),e.height=Math.floor(V*ht),this.setViewport(0,0,M,V)},this.setEffects=function(M){if(b===Xn){Ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let V=0;V<M.length;V++)if(M[V].isOutputPass===!0){xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Mt)},this.getViewport=function(M){return M.copy(W)},this.setViewport=function(M,V,ht,j){M.isVector4?W.set(M.x,M.y,M.z,M.w):W.set(M,V,ht,j),g.viewport(Mt.copy(W).multiplyScalar(pt).round())},this.getScissor=function(M){return M.copy(gt)},this.setScissor=function(M,V,ht,j){M.isVector4?gt.set(M.x,M.y,M.z,M.w):gt.set(M,V,ht,j),g.scissor(re.copy(gt).multiplyScalar(pt).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(M){g.setScissorTest(rt=M)},this.setOpaqueSort=function(M){St=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,V=!0,ht=!0){let j=0;if(M){let nt=!1;if(Tt!==null){let Zt=Tt.texture.format;nt=p.has(Zt)}if(nt){let Zt=Tt.texture.type,jt=f.has(Zt),Yt=Se.getClearColor(),Qt=Se.getClearAlpha(),he=Yt.r,Ae=Yt.g,Ie=Yt.b;jt?(v[0]=he,v[1]=Ae,v[2]=Ie,v[3]=Qt,U.clearBufferuiv(U.COLOR,0,v)):(R[0]=he,R[1]=Ae,R[2]=Ie,R[3]=Qt,U.clearBufferiv(U.COLOR,0,R))}else j|=U.COLOR_BUFFER_BIT}V&&(j|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),Se.dispose(),zt.dispose(),Ht.dispose(),$.dispose(),Lt.dispose(),ct.dispose(),Ot.dispose(),vt.dispose(),Ct.dispose(),O.dispose(),O.removeEventListener("sessionstart",wt),O.removeEventListener("sessionend",te),ge.stop()};function J(M){M.preventDefault(),Cl("WebGLRenderer: Context Lost."),q=!0}function xt(){Cl("WebGLRenderer: Context Restored."),q=!1;let M=H.autoReset,V=Jt.enabled,ht=Jt.autoUpdate,j=Jt.needsUpdate,nt=Jt.type;F(),H.autoReset=M,Jt.enabled=V,Jt.autoUpdate=ht,Jt.needsUpdate=j,Jt.type=nt}function Vt(M){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function y(M){let V=M.target;V.removeEventListener("dispose",y),L(V)}function L(M){Y(M),$.remove(M)}function Y(M){let V=$.get(M).programs;V!==void 0&&(V.forEach(function(ht){Ct.releaseProgram(ht)}),M.isShaderMaterial&&Ct.releaseShaderCache(M))}this.renderBufferDirect=function(M,V,ht,j,nt,Zt){V===null&&(V=At);let jt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Yt=Ss(M,V,ht,j,nt);g.setMaterial(j,jt);let Qt=ht.index,he=1;if(j.wireframe===!0){if(Qt=it.getWireframeAttribute(ht),Qt===void 0)return;he=2}let Ae=ht.drawRange,Ie=ht.attributes.position,ue=Ae.start*he,Ye=(Ae.start+Ae.count)*he;Zt!==null&&(ue=Math.max(ue,Zt.start*he),Ye=Math.min(Ye,(Zt.start+Zt.count)*he)),Qt!==null?(ue=Math.max(ue,0),Ye=Math.min(Ye,Qt.count)):Ie!=null&&(ue=Math.max(ue,0),Ye=Math.min(Ye,Ie.count));let cn=Ye-ue;if(cn<0||cn===1/0)return;Ot.setup(nt,j,Yt,ht,Qt);let Qe,Ze=kt;if(Qt!==null&&(Qe=Nt.get(Qt),Ze=yt,Ze.setIndex(Qe)),nt.isMesh)j.wireframe===!0?(g.setLineWidth(j.wireframeLinewidth*ae()),Ze.setMode(U.LINES)):Ze.setMode(U.TRIANGLES);else if(nt.isLine){let ln=j.linewidth;ln===void 0&&(ln=1),g.setLineWidth(ln*ae()),nt.isLineSegments?Ze.setMode(U.LINES):nt.isLineLoop?Ze.setMode(U.LINE_LOOP):Ze.setMode(U.LINE_STRIP)}else nt.isPoints?Ze.setMode(U.POINTS):nt.isSprite&&Ze.setMode(U.TRIANGLES);if(nt.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Ze.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let ln=nt._multiDrawStarts,se=nt._multiDrawCounts,Sn=nt._multiDrawCount,Ue=Qt?Nt.get(Qt).bytesPerElement:1,zn=$.get(j).currentProgram.getUniforms();for(let Zn=0;Zn<Sn;Zn++)zn.setValue(U,"_gl_DrawID",Zn),Ze.render(ln[Zn]/Ue,se[Zn])}else if(nt.isInstancedMesh)Ze.renderInstances(ue,cn,nt.count);else if(ht.isInstancedBufferGeometry){let ln=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,se=Math.min(ht.instanceCount,ln);Ze.renderInstances(ue,cn,se)}else Ze.render(ue,cn)};function at(M,V,ht,j){z!==null&&M.isNodeMaterial&&z.setObject(j,M),Et===!0&&ce.setState(M,ht,!1),M.transparent===!0&&M.side===Wn&&M.forceSinglePass===!1?(M.side=Rn,M.needsUpdate=!0,Bn(M,V,j),M.side=Ei,M.needsUpdate=!0,Bn(M,V,j),M.side=Wn):Bn(M,V,j)}this.compile=function(M,V,ht=null){ht===null&&(ht=M),z!==null&&z.renderStart(M,V,ht),T=Ht.get(ht),T.init(V),_.push(T),ht.traverseVisible(function(nt){nt.isLight&&nt.layers.test(V.layers)&&(T.pushLight(nt),nt.castShadow&&T.pushShadow(nt))}),M!==ht&&M.traverseVisible(function(nt){nt.isLight&&nt.layers.test(V.layers)&&(T.pushLight(nt),nt.castShadow&&T.pushShadow(nt))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),Dt=this.localClippingEnabled,Et=ce.init(this.clippingPlanes,Dt),Et===!0&&ce.setGlobalState(this.clippingPlanes,V),z!==null&&Jt.render(T.state.shadowsArray,ht,V);let j=new Set;return M.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Zt=nt.material;if(Zt)if(Array.isArray(Zt))for(let jt=0;jt<Zt.length;jt++){let Yt=Zt[jt];at(Yt,ht,V,nt),j.add(Yt)}else at(Zt,ht,V,nt),j.add(Zt)}),T=_.pop(),z!==null&&z.renderEnd(),j},this.compileAsync=function(M,V,ht=null){let j=this.compile(M,V,ht);return new Promise(nt=>{function Zt(){if(j.forEach(function(jt){let Qt=$.get(jt).currentProgram;(Qt===void 0||Qt.isReady())&&j.delete(jt)}),j.size===0){nt(M);return}setTimeout(Zt,10)}oe.get("KHR_parallel_shader_compile")!==null?Zt():setTimeout(Zt,10)})};let bt=null;function Rt(M){bt&&bt(M)}function wt(){ge.stop()}function te(){ge.start()}let ge=new ed;ge.setAnimationLoop(Rt),typeof self!="undefined"&&ge.setContext(self),this.setAnimationLoop=function(M){bt=M,O.setAnimationLoop(M),M===null?ge.stop():ge.start()},O.addEventListener("sessionstart",wt),O.addEventListener("sessionend",te),this.render=function(M,V){if(V!==void 0&&V.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;z!==null&&z.renderStart(M,V);let ht=O.enabled===!0&&O.isPresenting===!0,j=C!==null&&(Tt===null||ht)&&C.begin(D,Tt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(O.cameraAutoUpdate===!0&&O.updateCamera(V),V=O.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,V,Tt),T=Ht.get(M,_.length),T.init(V),T.state.textureUnits=Q.getTextureUnits(),_.push(T),Pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),dt.setFromProjectionMatrix(Pt,ci,V.reversedDepth),Dt=this.localClippingEnabled,Et=ce.init(this.clippingPlanes,Dt),A=zt.get(M,P.length),A.init(),P.push(A),O.enabled===!0&&O.isPresenting===!0){let jt=D.xr.getDepthSensingMesh();jt!==null&&qe(jt,V,-1/0,D.sortObjects)}qe(M,V,0,D.sortObjects),A.finish(),z!==null&&z.updateLights(T.state.lightsArray),D.sortObjects===!0&&A.sort(St,K),It=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,It&&Se.addToRenderList(A,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Et===!0&&ce.beginShadows();let nt=T.state.shadowsArray;if(Jt.render(nt,M,V),Et===!0&&ce.endShadows(),(j&&C.hasRenderPass())===!1){let jt=A.opaque,Yt=A.transmissive;if(T.setupLights(),V.isArrayCamera){let Qt=V.cameras;if(Yt.length>0)for(let he=0,Ae=Qt.length;he<Ae;he++){let Ie=Qt[he];Ve(jt,Yt,M,Ie)}It&&Se.render(M);for(let he=0,Ae=Qt.length;he<Ae;he++){let Ie=Qt[he];Ne(A,M,Ie,Ie.viewport)}}else Yt.length>0&&Ve(jt,Yt,M,V),It&&Se.render(M),Ne(A,M,V)}Tt!==null&&ot===0&&(Q.updateMultisampleRenderTarget(Tt),Q.updateRenderTargetMipmap(Tt)),j&&C.end(D),M.isScene===!0&&M.onAfterRender(D,M,V),Ot.resetDefaultState(),ft=-1,_t=null,_.pop(),_.length>0?(T=_[_.length-1],Q.setTextureUnits(T.state.textureUnits),Et===!0&&ce.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,z!==null&&z.renderEnd()};function qe(M,V,ht,j){if(M.visible===!1)return;if(M.layers.test(V.layers)){if(M.isGroup)ht=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(V);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(dt)){j&&mt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Pt);let jt=ct.update(M),Yt=M.material;Yt.visible&&A.push(M,jt,Yt,ht,mt.z,null,V)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(dt))){let jt=ct.update(M),Yt=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),mt.copy(M.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),mt.copy(jt.boundingSphere.center)),mt.applyMatrix4(M.matrixWorld).applyMatrix4(Pt)),Array.isArray(Yt)){let Qt=jt.groups;for(let he=0,Ae=Qt.length;he<Ae;he++){let Ie=Qt[he],ue=Yt[Ie.materialIndex];ue&&ue.visible&&A.push(M,jt,ue,ht,mt.z,Ie,V)}}else Yt.visible&&A.push(M,jt,Yt,ht,mt.z,null,V)}}let Zt=M.children;for(let jt=0,Yt=Zt.length;jt<Yt;jt++)qe(Zt[jt],V,ht,j)}function Ne(M,V,ht,j){let{opaque:nt,transmissive:Zt,transparent:jt}=M;T.setupLightsView(ht),Et===!0&&ce.setGlobalState(D.clippingPlanes,ht),j&&g.viewport(Mt.copy(j)),nt.length>0&&ze(nt,V,ht),Zt.length>0&&ze(Zt,V,ht),jt.length>0&&ze(jt,V,ht),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ve(M,V,ht,j){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){let ue=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new Un(1,1,{generateMipmaps:!0,type:ue?Qn:Xn,minFilter:ns,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Fe.workingColorSpace})}let Zt=T.state.transmissionRenderTarget[j.id],jt=j.viewport||Mt;Zt.setSize(jt.z*D.transmissionResolutionScale,jt.w*D.transmissionResolutionScale);let Yt=D.getRenderTarget(),Qt=D.getActiveCubeFace(),he=D.getActiveMipmapLevel();D.setRenderTarget(Zt),D.getClearColor(Bt),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),It&&Se.render(ht);let Ae=D.toneMapping;D.toneMapping=ui;let Ie=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),Et===!0&&ce.setGlobalState(D.clippingPlanes,j),ze(M,ht,j),Q.updateMultisampleRenderTarget(Zt),Q.updateRenderTargetMipmap(Zt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Ye=0,cn=V.length;Ye<cn;Ye++){let Qe=V[Ye],{object:Ze,geometry:ln,material:se,group:Sn}=Qe;if(se.side===Wn&&Ze.layers.test(j.layers)){let Ue=se.side;se.side=Rn,se.needsUpdate=!0,nn(Ze,ht,j,ln,se,Sn),se.side=Ue,se.needsUpdate=!0,ue=!0}}ue===!0&&(Q.updateMultisampleRenderTarget(Zt),Q.updateRenderTargetMipmap(Zt))}D.setRenderTarget(Yt,Qt,he),D.setClearColor(Bt,fe),Ie!==void 0&&(j.viewport=Ie),D.toneMapping=Ae}function ze(M,V,ht){let j=V.isScene===!0?V.overrideMaterial:null;for(let nt=0,Zt=M.length;nt<Zt;nt++){let jt=M[nt],{object:Yt,geometry:Qt,group:he}=jt,Ae=jt.material;Ae.allowOverride===!0&&j!==null&&(Ae=j),Yt.layers.test(ht.layers)&&nn(Yt,V,ht,Qt,Ae,he)}}function nn(M,V,ht,j,nt,Zt){z!==null&&nt.isNodeMaterial&&z.setObject(M,nt),M.onBeforeRender(D,V,ht,j,nt,Zt),M.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),nt.onBeforeRender(D,V,ht,j,M,Zt),nt.transparent===!0&&nt.side===Wn&&nt.forceSinglePass===!1?(nt.side=Rn,nt.needsUpdate=!0,D.renderBufferDirect(ht,V,j,nt,M,Zt),nt.side=Ei,nt.needsUpdate=!0,D.renderBufferDirect(ht,V,j,nt,M,Zt),nt.side=Wn):D.renderBufferDirect(ht,V,j,nt,M,Zt),M.onAfterRender(D,V,ht,j,nt,Zt)}function Bn(M,V,ht){V.isScene!==!0&&(V=At);let j=$.get(M),nt=T.state.lights,Zt=T.state.shadowsArray,jt=nt.state.version,Yt=Ct.getParameters(M,nt.state,Zt,V,ht,T.state.lightProbeGridArray),Qt=Ct.getProgramCacheKey(Yt),he=j.programs;j.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,j.fog=V.fog;let Ae=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;j.envMap=Lt.get(M.envMap||j.environment,Ae),j.envMapRotation=j.environment!==null&&M.envMap===null?V.environmentRotation:M.envMapRotation,he===void 0&&(M.addEventListener("dispose",y),he=new Map,j.programs=he);let Ie=he.get(Qt);if(Ie!==void 0){if(j.currentProgram===Ie&&j.lightsStateVersion===jt)return pi(M,Yt),Ie}else Yt.uniforms=Ct.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,ht,Yt),M.onBeforeCompile(Yt,D),Ie=Ct.acquireProgram(Yt,Qt),he.set(Qt,Ie),j.uniforms=Yt.uniforms;let ue=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ue.clippingPlanes=ce.uniform),pi(M,Yt),j.needsLights=rr(M),j.lightsStateVersion=jt,j.needsLights&&(ue.ambientLightColor.value=nt.state.ambient,ue.lightProbe.value=nt.state.probe,ue.sunLights.value=nt.state.sun,ue.sunLightShadows.value=nt.state.sunShadow,ue.directionalLights.value=nt.state.directional,ue.directionalLightShadows.value=nt.state.directionalShadow,ue.spotLights.value=nt.state.spot,ue.spotLightShadows.value=nt.state.spotShadow,ue.rectAreaLights.value=nt.state.rectArea,ue.ltc_1.value=nt.state.rectAreaLTC1,ue.ltc_2.value=nt.state.rectAreaLTC2,ue.pointLights.value=nt.state.point,ue.pointLightShadows.value=nt.state.pointShadow,ue.hemisphereLights.value=nt.state.hemi,ue.sunShadowMatrix.value=nt.state.sunShadowMatrix,ue.sunShadowCascade.value=nt.state.sunShadowCascade,ue.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,ue.spotLightMatrix.value=nt.state.spotLightMatrix,ue.spotLightMap.value=nt.state.spotLightMap,ue.pointShadowMatrix.value=nt.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=Ie,j.uniformsList=null,Ie}function fi(M){if(M.uniformsList===null){let V=M.currentProgram.getUniforms();M.uniformsList=nr.seqWithValue(V.seq,M.uniforms)}return M.uniformsList}function pi(M,V){let ht=$.get(M);ht.outputColorSpace=V.outputColorSpace,ht.batching=V.batching,ht.batchingColor=V.batchingColor,ht.instancing=V.instancing,ht.instancingColor=V.instancingColor,ht.instancingMorph=V.instancingMorph,ht.skinning=V.skinning,ht.morphTargets=V.morphTargets,ht.morphNormals=V.morphNormals,ht.morphColors=V.morphColors,ht.morphTargetsCount=V.morphTargetsCount,ht.numClippingPlanes=V.numClippingPlanes,ht.numIntersection=V.numClipIntersection,ht.vertexAlphas=V.vertexAlphas,ht.vertexTangents=V.vertexTangents,ht.toneMapping=V.toneMapping}function mi(M,V){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;E.setFromMatrixPosition(V.matrixWorld);for(let ht=0,j=M.length;ht<j;ht++){let nt=M[ht];if(nt.texture!==null&&nt.boundingBox.containsPoint(E))return nt}return null}function Ss(M,V,ht,j,nt){V.isScene!==!0&&(V=At),Q.resetTextureUnits();let Zt=V.fog,jt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?V.environment:null,Yt=Tt===null?D.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Fe.workingColorSpace,Qt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,he=Lt.get(j.envMap||jt,Qt),Ae=j.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,Ie=!!ht.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ue=!!ht.morphAttributes.position,Ye=!!ht.morphAttributes.normal,cn=!!ht.morphAttributes.color,Qe=ui;j.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Qe=D.toneMapping);let Ze=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,ln=Ze!==void 0?Ze.length:0,se=$.get(j),Sn=T.state.lights;if(Et===!0&&(Dt===!0||M!==_t)){let We=M===_t&&j.id===ft;ce.setState(j,M,We)}let Ue=!1;j.version===se.__version?(se.needsLights&&se.lightsStateVersion!==Sn.state.version||se.outputColorSpace!==Yt||nt.isBatchedMesh&&se.batching===!1||!nt.isBatchedMesh&&se.batching===!0||nt.isBatchedMesh&&se.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&se.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&se.instancing===!1||!nt.isInstancedMesh&&se.instancing===!0||nt.isSkinnedMesh&&se.skinning===!1||!nt.isSkinnedMesh&&se.skinning===!0||nt.isInstancedMesh&&se.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&se.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&se.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&se.instancingMorph===!1&&nt.morphTexture!==null||se.envMap!==he||j.fog===!0&&se.fog!==Zt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==ce.numPlanes||se.numIntersection!==ce.numIntersection)||se.vertexAlphas!==Ae||se.vertexTangents!==Ie||se.morphTargets!==ue||se.morphNormals!==Ye||se.morphColors!==cn||se.toneMapping!==Qe||se.morphTargetsCount!==ln||!!se.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,se.__version=j.version);let zn=se.currentProgram;Ue===!0&&(zn=Bn(j,V,nt),z&&j.isNodeMaterial&&z.onUpdateProgram(j,zn,se));let Zn=!1,ii=!1,zi=!1,Pe=zn.getUniforms(),je=se.uniforms;if(g.useProgram(zn.program)&&(Zn=!0,ii=!0,zi=!0),j.id!==ft&&(ft=j.id,ii=!0),se.needsLights){let We=mi(T.state.lightProbeGridArray,nt);se.lightProbeGrid!==We&&(se.lightProbeGrid=We,ii=!0)}if(Zn||_t!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Pe.setValue(U,"projectionMatrix",M.projectionMatrix),Pe.setValue(U,"viewMatrix",M.matrixWorldInverse);let Hn=Pe.map.cameraPosition;Hn!==void 0&&Hn.setValue(U,Kt.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&Pe.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Pe.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),_t!==M&&(_t=M,ii=!0,zi=!0)}if(se.needsLights&&(Sn.state.sunShadowMap.length>0&&Pe.setValue(U,"sunShadowMap",Sn.state.sunShadowMap,Q),Sn.state.directionalShadowMap.length>0&&Pe.setValue(U,"directionalShadowMap",Sn.state.directionalShadowMap,Q),Sn.state.spotShadowMap.length>0&&Pe.setValue(U,"spotShadowMap",Sn.state.spotShadowMap,Q),Sn.state.pointShadowMap.length>0&&Pe.setValue(U,"pointShadowMap",Sn.state.pointShadowMap,Q)),nt.isSkinnedMesh){Pe.setOptional(U,nt,"bindMatrix"),Pe.setOptional(U,nt,"bindMatrixInverse");let We=nt.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Pe.setValue(U,"boneTexture",We.boneTexture,Q))}nt.isBatchedMesh&&(Pe.setOptional(U,nt,"batchingTexture"),Pe.setValue(U,"batchingTexture",nt._matricesTexture,Q),Pe.setOptional(U,nt,"batchingIdTexture"),Pe.setValue(U,"batchingIdTexture",nt._indirectTexture,Q),Pe.setOptional(U,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Pe.setValue(U,"batchingColorTexture",nt._colorsTexture,Q));let He=ht.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&k.update(nt,ht,zn),(ii||se.receiveShadow!==nt.receiveShadow)&&(se.receiveShadow=nt.receiveShadow,Pe.setValue(U,"receiveShadow",nt.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&V.environment!==null&&(je.envMapIntensity.value=V.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=cx()),ii){if(Pe.setValue(U,"toneMappingExposure",D.toneMappingExposure),se.needsLights&&rs(je,zi),Zt&&j.fog===!0&&ee.refreshFogUniforms(je,Zt),ee.refreshMaterialUniforms(je,j,pt,lt,T.state.transmissionRenderTarget[M.id]),se.needsLights&&se.lightProbeGrid){let We=se.lightProbeGrid;je.probesSH.value=We.texture,je.probesMin.value.copy(We.boundingBox.min),je.probesMax.value.copy(We.boundingBox.max),je.probesResolution.value.copy(We.resolution)}nr.upload(U,fi(se),je,Q)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(nr.upload(U,fi(se),je,Q),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Pe.setValue(U,"center",nt.center),Pe.setValue(U,"modelViewMatrix",nt.modelViewMatrix),Pe.setValue(U,"normalMatrix",nt.normalMatrix),Pe.setValue(U,"modelMatrix",nt.matrixWorld),j.uniformsGroups!==void 0){let We=j.uniformsGroups;for(let Hn=0,Ai=We.length;Hn<Ai;Hn++){let so=We[Hn];vt.update(so,zn),vt.bind(so,zn)}}return zn}function rs(M,V){M.ambientLightColor.needsUpdate=V,M.lightProbe.needsUpdate=V,M.sunLights.needsUpdate=V,M.sunLightShadows.needsUpdate=V,M.directionalLights.needsUpdate=V,M.directionalLightShadows.needsUpdate=V,M.pointLights.needsUpdate=V,M.pointLightShadows.needsUpdate=V,M.spotLights.needsUpdate=V,M.spotLightShadows.needsUpdate=V,M.rectAreaLights.needsUpdate=V,M.hemisphereLights.needsUpdate=V}function rr(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return ot},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(M,V,ht){let j=$.get(M);j.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),$.get(M.texture).__webglTexture=V,$.get(M.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ht,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,V){let ht=$.get(M);ht.__webglFramebuffer=V,ht.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(M,V=0,ht=0){Tt=M,tt=V,ot=ht;let j=null,nt=!1,Zt=!1;if(M){let Yt=$.get(M);if(Yt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,Yt.__webglFramebuffer),Mt.copy(M.viewport),re.copy(M.scissor),Ft=M.scissorTest,g.viewport(Mt),g.scissor(re),g.setScissorTest(Ft),ft=-1;return}else if(Yt.__webglFramebuffer===void 0)Q.setupRenderTarget(M);else if(Yt.__hasExternalTextures)Q.rebindTextures(M,$.get(M.texture).__webglTexture,$.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ae=M.depthTexture;if(Yt.__boundDepthTexture!==Ae){if(Ae!==null&&$.has(Ae)&&(M.width!==Ae.image.width||M.height!==Ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(M)}}let Qt=M.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Zt=!0);let he=$.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(he[V])?j=he[V][ht]:j=he[V],nt=!0):M.samples>0&&Q.useMultisampledRTT(M)===!1?j=$.get(M).__webglMultisampledFramebuffer:Array.isArray(he)?j=he[ht]:j=he,Mt.copy(M.viewport),re.copy(M.scissor),Ft=M.scissorTest}else Mt.copy(W).multiplyScalar(pt).floor(),re.copy(gt).multiplyScalar(pt).floor(),Ft=rt;if(ht!==0&&(j=et),g.bindFramebuffer(U.FRAMEBUFFER,j)&&g.drawBuffers(M,j),g.viewport(Mt),g.scissor(re),g.setScissorTest(Ft),nt){let Yt=$.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Yt.__webglTexture,ht)}else if(Zt){let Yt=V;for(let Qt=0;Qt<M.textures.length;Qt++){let he=$.get(M.textures[Qt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Qt,he.__webglTexture,ht,Yt)}}else if(M!==null&&ht!==0){let Yt=$.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yt.__webglTexture,ht)}ft=-1};function In(M){let V=$.get(M);return(V.__readFormat!==M.format||V.__readType!==M.type)&&(V.__readFormat=M.format,V.__readType=M.type,V.__formatReadable=w.textureFormatReadable(M.format),V.__typeReadable=w.textureTypeReadable(M.type)),V}this.readRenderTargetPixels=function(M,V,ht,j,nt,Zt,jt,Yt=0){if(!(M&&M.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&jt!==void 0&&(Qt=Qt[jt]),Qt){g.bindFramebuffer(U.FRAMEBUFFER,Qt);try{let he=M.textures[Yt],Ae=he.format,Ie=he.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Yt);let ue=In(he);if(ue.__formatReadable===!1){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ue.__typeReadable===!1){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=M.width-j&&ht>=0&&ht<=M.height-nt&&U.readPixels(V,ht,j,nt,N.convert(Ae),N.convert(Ie),Zt)}finally{let he=Tt!==null?$.get(Tt).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(M,V,ht,j,nt,Zt,jt,Yt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&jt!==void 0&&(Qt=Qt[jt]),Qt)if(V>=0&&V<=M.width-j&&ht>=0&&ht<=M.height-nt){g.bindFramebuffer(U.FRAMEBUFFER,Qt);let he=M.textures[Yt],Ae=he.format,Ie=he.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Yt);let ue=In(he);if(ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ye),U.bufferData(U.PIXEL_PACK_BUFFER,Zt.byteLength,U.STREAM_READ),U.readPixels(V,ht,j,nt,N.convert(Ae),N.convert(Ie),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let cn=Tt!==null?$.get(Tt).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,cn);let Qe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Cu(U,Qe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Zt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ye),U.deleteSync(Qe),Zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,V=null,ht=0){let j=Math.pow(2,-ht),nt=Math.floor(M.image.width*j),Zt=Math.floor(M.image.height*j),jt=V!==null?V.x:0,Yt=V!==null?V.y:0;Q.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,ht,0,0,jt,Yt,nt,Zt),g.unbindTexture()},this.copyTextureToTexture=function(M,V,ht=null,j=null,nt=0,Zt=0){let jt,Yt,Qt,he,Ae,Ie,ue,Ye,cn,Qe=M.isCompressedTexture?M.mipmaps[Zt]:M.image;if(ht!==null)jt=ht.max.x-ht.min.x,Yt=ht.max.y-ht.min.y,Qt=ht.isBox3?ht.max.z-ht.min.z:1,he=ht.min.x,Ae=ht.min.y,Ie=ht.isBox3?ht.min.z:0;else{let je=Math.pow(2,-nt);jt=Math.floor(Qe.width*je),Yt=Math.floor(Qe.height*je),M.isDataArrayTexture?Qt=Qe.depth:M.isData3DTexture?Qt=Math.floor(Qe.depth*je):Qt=1,he=0,Ae=0,Ie=0}j!==null?(ue=j.x,Ye=j.y,cn=j.z):(ue=0,Ye=0,cn=0);let Ze=N.convert(V.format),ln=N.convert(V.type),se;V.isData3DTexture?(Q.setTexture3D(V,0),se=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Q.setTexture2DArray(V,0),se=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(V,0),se=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);let Sn=g.getParameter(U.UNPACK_ROW_LENGTH),Ue=g.getParameter(U.UNPACK_IMAGE_HEIGHT),zn=g.getParameter(U.UNPACK_SKIP_PIXELS),Zn=g.getParameter(U.UNPACK_SKIP_ROWS),ii=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,Qe.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,he),g.pixelStorei(U.UNPACK_SKIP_ROWS,Ae),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie);let zi=M.isDataArrayTexture||M.isData3DTexture,Pe=V.isDataArrayTexture||V.isData3DTexture;if(M.isDepthTexture){let je=$.get(M),He=$.get(V),We=$.get(je.__renderTarget),Hn=$.get(He.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,We.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Ai=0;Ai<Qt;Ai++)zi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$.get(M).__webglTexture,nt,Ie+Ai),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$.get(V).__webglTexture,Zt,cn+Ai)),U.blitFramebuffer(he,Ae,jt,Yt,ue,Ye,jt,Yt,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(nt!==0||M.isRenderTargetTexture||$.has(M)){let je=$.get(M),He=$.get(V);g.bindFramebuffer(U.READ_FRAMEBUFFER,G),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,Z);for(let We=0;We<Qt;We++)zi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,je.__webglTexture,nt,Ie+We):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,je.__webglTexture,nt),Pe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,Zt,cn+We):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,Zt),nt!==0?U.blitFramebuffer(he,Ae,jt,Yt,ue,Ye,jt,Yt,U.COLOR_BUFFER_BIT,U.NEAREST):Pe?U.copyTexSubImage3D(se,Zt,ue,Ye,cn+We,he,Ae,jt,Yt):U.copyTexSubImage2D(se,Zt,ue,Ye,he,Ae,jt,Yt);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Pe?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(se,Zt,ue,Ye,cn,jt,Yt,Qt,Ze,ln,Qe.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(se,Zt,ue,Ye,cn,jt,Yt,Qt,Ze,Qe.data):U.texSubImage3D(se,Zt,ue,Ye,cn,jt,Yt,Qt,Ze,ln,Qe):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Zt,ue,Ye,jt,Yt,Ze,ln,Qe.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Zt,ue,Ye,Qe.width,Qe.height,Ze,Qe.data):U.texSubImage2D(U.TEXTURE_2D,Zt,ue,Ye,jt,Yt,Ze,ln,Qe);g.pixelStorei(U.UNPACK_ROW_LENGTH,Sn),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ue),g.pixelStorei(U.UNPACK_SKIP_PIXELS,zn),g.pixelStorei(U.UNPACK_SKIP_ROWS,Zn),g.pixelStorei(U.UNPACK_SKIP_IMAGES,ii),Zt===0&&V.generateMipmaps&&U.generateMipmap(se),g.unbindTexture()},this.initRenderTarget=function(M){$.get(M).__webglFramebuffer===void 0&&Q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Q.setTextureCube(M,0):M.isData3DTexture?Q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Q.setTexture2DArray(M,0):Q.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){tt=0,ot=0,Tt=null,g.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Fe._getUnpackColorSpace()}};var cd=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Bi=(i,t,e)=>{let n=Math.sin(i*127.1+t*269.5+e*311.7)*43758.5453;return n-Math.floor(n)},_n=(i,t,e)=>{let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),o=i-n,a=t-s,l=e-r,c=o*o*(3-2*o),u=a*a*(3-2*a),d=l*l*(3-2*l),h=(m,x,b)=>m+(x-m)*b;return h(h(h(Bi(n,s,r),Bi(n+1,s,r),c),h(Bi(n,s+1,r),Bi(n+1,s+1,r),c),u),h(h(Bi(n,s,r+1),Bi(n+1,s,r+1),c),h(Bi(n,s+1,r+1),Bi(n+1,s+1,r+1),c),u),d)},an=class{constructor(){this.p=[],this.n=[],this.c=[],this.t=[]}add(t,{m:e=null,color:n=()=>[1,1,1],tip:s=()=>0,flat:r=!1,normal:o=null,flip:a=!1}={}){let l=t.index?t.toNonIndexed():t.clone();if(e&&l.applyMatrix4(e),(r||!l.attributes.normal)&&l.computeVertexNormals(),a){for(let x of["position","normal","uv"]){let b=l.attributes[x];if(!b)continue;let p=b.array,f=b.itemSize;for(let v=0;v<b.count;v+=3)for(let R=0;R<f;R++){let E=p[(v+1)*f+R];p[(v+1)*f+R]=p[(v+2)*f+R],p[(v+2)*f+R]=E}}let m=l.attributes.normal.array;for(let x=0;x<m.length;x++)m[x]=-m[x]}let c=l.attributes.position,u=l.attributes.normal,d=new I,h=new I;for(let m=0;m<c.count;m++){d.fromBufferAttribute(c,m),h.fromBufferAttribute(u,m),o&&o(d,h,m);let x=n(d,h,m);this.p.push(d.x,d.y,d.z),this.n.push(h.x,h.y,h.z),this.c.push(x[0],x[1],x[2]),this.t.push(s(d,h))}return this}tris(t,e,n=()=>0,s=null){for(let r=0;r<t.length;r+=3){let o=new I(...t[r]),a=new I(...t[r+1]),l=new I(...t[r+2]),c=s?s.clone():new I().subVectors(l,a).cross(new I().subVectors(o,a)).normalize();[o,a,l].forEach(u=>{let d=e(u);this.p.push(u.x,u.y,u.z),this.n.push(c.x,c.y,c.z),this.c.push(d[0],d[1],d[2]),this.t.push(n(u))})}return this}geometry(){let t=new rn;return t.setAttribute("position",new Xe(this.p,3)),t.setAttribute("normal",new Xe(this.n,3)),t.setAttribute("color",new Xe(this.c,3)),t.setAttribute("aTip",new Xe(this.t,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},B=(i=0,t=0,e=0,n=0,s=0,r=0,o=1,a=o,l=o)=>new be().compose(new I(i,t,e),new Be().setFromEuler(new An(n,s,r,"YXZ")),new I(o,a,l)),jn=(i,t,{sway:e=0,side:n=Ei,color:s=16777215,snowBias:r=0,sink:o=0,softBack:a=!1,crisp:l=!1,snowMask:c=!1,grain:u=0}={})=>{let d=new Si({vertexColors:!0,side:n,color:s});return d.onBeforeCompile=h=>{Object.assign(h.uniforms,i,{uShow:t}),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
        uniform float uShow, uTime, uSnowCover, uMoss, uFrost;
        attribute float aTip;
        varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vObj = position;
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
        vMossA = uMoss * smoothstep(0.0, 0.8, cWN.y) * (0.6 + 0.4 * patchy);
        vTipA = aTip * uFrost;
        ${e?`float sd = cIP.x * 0.071 + cIP.z * 0.053;
        float sw = (sin(uTime * 1.3 + sd) + 0.45 * sin(uTime * 3.1 + sd * 1.7)) * ${e.toFixed(4)} * position.y * position.y;
        transformed.x += sw; transformed.z += sw * 0.7;`:""}
        ${o?`transformed.y -= (1.0 - uShow) * ${o.toFixed(1)};`:"transformed *= uShow;"}`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uSnowC, uMossC; varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;
        // wood grain + fine speckle, so surfaces feel like real material up close
        float gH(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float gN(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(gH(i), gH(i + vec3(1, 0, 0)), f.x), mix(gH(i + vec3(0, 1, 0)), gH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(gH(i + vec3(0, 0, 1)), gH(i + vec3(1, 0, 1)), f.x), mix(gH(i + vec3(0, 1, 1)), gH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
        float grainH(vec3 p) { return gN(vec3(p.x * 1.3 + p.z * 0.4, p.y * 24.0, p.z * 1.3)) * 0.65 + gN(p * 11.0) * 0.35; }`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        ${a?`#ifdef DOUBLE_SIDED
 normal *= faceDirection;
 #endif`:""}
        ${u?`{
          float gh = grainH(vObj);
          vec2 dHdxy = vec2(dFdx(gh), dFdy(gh)) * ${u.toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          normal = normalize(abs(fDet) * normal - vGrad);
        }`:""}`).replace("#include <color_fragment>",`#include <color_fragment>
        ${u?"diffuseColor.rgb *= 0.84 + 0.3 * grainH(vObj);":""}
        diffuseColor.rgb = mix(diffuseColor.rgb, uMossC * (0.7 + 0.3 * diffuseColor.g), clamp(vMossA, 0.0, 0.8));
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC, clamp(vSnowA * 1.5 - 0.2, 0.0, 1.0));
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC * 0.96, ${l?"smoothstep(0.42, 0.56, vTipA) * 0.95":"clamp(vTipA, 0.0, 0.9)"});`)},d};var Xt={x0:-6.5,x1:6.5,z0:-9.5,z1:2.4,floor:-3.5,ceil:-.3},ie={x0:1.95,x1:3,top:2.2,bottom:-1.3},Ms=i=>{let t=(ie.top-Math.min(ie.top,Math.max(ie.bottom,i)))/(ie.top-ie.bottom);return .12+(Xt.floor-.12)*t},qn=2,io=2.75,Yn=.42,Mc=.5,sr=.14,ld=5,lx=[2,3,1,4,0],hd=["#6e2d2a","#2f4a3a","#2a3550","#5a3d26","#7a5a2a","#4a4a4e","#3d2e44","#5e5040","#283c3c","#704030"];function ud({group:i,mats:t,camera:e,U:n}){let{inn:s,glow:r}=t,o=Xt.floor,a=Xt.ceil,l=a-o,c=new an,u=new an,d=(F,O,J)=>_n(F,O,J),h=F=>O=>{let J=F*(.86+d(O.x*3,O.y*9,O.z*3)*.28);return[J,J*.78,J*.58]},m=h(.34),x=h(.46),b=h(.6),p=(F,O,J)=>()=>[F,O,J],f=F=>{let O=.42+d(F.x*4,F.y*4,F.z*4)*.22;return[O,O*.97,O*.93]},v=Xt.x1-Xt.x0,R=Xt.z1-Xt.z0,E=(Xt.x0+Xt.x1)/2,A=(Xt.z0+Xt.z1)/2;for(let F=Xt.x0,O=0;F<Xt.x1-.01;F+=.22,O++){let J=O%3*.9;for(let xt=Xt.z0-J,Vt=0;xt<Xt.z1;xt+=2.7,Vt++){let y=Math.max(xt,Xt.z0),L=Math.min(xt+2.7,Xt.z1);L-y<.05||c.add(new ut(.215,.05,L-y-.006),{m:B(F+.11,o-.025,(y+L)/2),color:Y=>{let at=(.36+(O*7+Vt*3)%5*.018)*(.88+d(Y.x*3,0,Y.z*.8)*.24);return[at,at*.76,at*.55]}})}}let T=(F,O)=>F>ie.x0-.05&&F<ie.x1+.05&&O>ie.bottom-.05&&O<ie.top+.2;for(let F=Xt.x0;F<Xt.x1-.01;F+=.5)for(let O=Xt.z0;O<Xt.z1-.01;O+=.5)T(F+.25,O+.25)||c.add(new hn(.5,.5),{m:B(F+.25,a,O+.25,Math.PI/2,0,0),color:J=>{let xt=.62+d(J.x*2,0,J.z*2)*.08;return[xt,xt*.96,xt*.9]}});for(let F=Xt.z0+1.2;F<Xt.z1;F+=1.8)(F>ie.bottom-.1&&F<ie.top+.2?[[Xt.x0,ie.x0-.05],[ie.x1+.05,Xt.x1]]:[[Xt.x0,Xt.x1]]).forEach(([J,xt])=>c.add(new ut(xt-J,.22,.2),{m:B((J+xt)/2,a-.11,F),color:m}));[["z",Xt.z0,Xt.x0,Xt.x1,1],["z",Xt.z1,Xt.x0,Xt.x1,-1],["x",Xt.x0,Xt.z0,Xt.z1,1],["x",Xt.x1,Xt.z0,Xt.z1,-1]].forEach(([F,O,J,xt,Vt])=>{for(let Y=J;Y<xt-.01;Y+=.6){let at=Math.min(.6,xt-Y),bt=Y+at/2,Rt=(wt,te,ge,qe=0)=>{let Ne=new hn(at,te-wt),Ve=F==="z"?B(bt,(wt+te)/2,O+Vt*qe,0,Vt>0?0:Math.PI,0):B(O+Vt*qe,(wt+te)/2,bt,0,Vt>0?Math.PI/2:-Math.PI/2,0);c.add(Ne,{m:Ve,color:ge})};Rt(o,o+1,f),Rt(o+1,a,wt=>{let te=.33+d(wt.x*2,wt.y*6,wt.z*2)*.08+(Math.abs(((wt.x+wt.z)*1.67+50)%1-.5)<.02?-.06:0);return[te,te*.78,te*.58]})}let y=xt-J,L=(J+xt)/2;[[o+1,.06,.05],[o+.06,.12,.03]].forEach(([Y,at,bt])=>{c.add(new ut(F==="z"?y:bt,at,F==="z"?bt:y),{m:F==="z"?B(L,Y,O+Vt*bt/2):B(O+Vt*bt/2,Y,L),color:x})})});let _=12,C=(ie.top-ie.bottom)/_;for(let F=0;F<_;F++){let O=ie.top-F*C,J=O-C,xt=Ms(O-C*.5);c.add(new ut(ie.x1-ie.x0-.04,.05,C+.03),{m:B((ie.x0+ie.x1)/2,xt-.025,(J+O)/2),color:b}),c.add(new ut(ie.x1-ie.x0-.04,Math.abs(Ms(O)-Ms(J)),.03),{m:B((ie.x0+ie.x1)/2,(Ms(O)+xt)/2,O-.01),color:m})}let D=Math.hypot(ie.top-ie.bottom,.12-o),q=Math.atan2(.12-o,ie.top-ie.bottom);[ie.x0,ie.x1].forEach(F=>{c.add(new ut(.05,.28,D),{m:B(F,(.12+o)/2-.1,(ie.top+ie.bottom)/2,q,0,0),color:x}),c.add(new ut(.06,.06,D),{m:B(F,(.12+o)/2+.85,(ie.top+ie.bottom)/2,q,0,0),color:b});for(let O=1;O<_;O+=2){let J=ie.top-O*C;c.add(new ut(.035,.85,.035),{m:B(F,Ms(J)+.42,J),color:x})}}),c.add(new ut(.03,2.6,3),{m:B(ie.x0-.02,o+1,.9),color:m}),c.add(new ut(.6,1.4,.03),{m:B(ie.x0-.04,o+.72,.5,0,Math.PI/2,0),color:x});let z=[];for(let F=0;F<6;F++)z.push({x:Xt.x0+.5+qn/2+F*(qn+0),z:Xt.z0+Yn/2,ry:0});for(let F=0;F<4;F++)z.push({x:Xt.x0+Yn/2,z:Xt.z0+1+qn/2+F*qn,ry:Math.PI/2});for(let F=0;F<4;F++)z.push({x:Xt.x1-Yn/2,z:Xt.z0+1+qn/2+F*qn,ry:-Math.PI/2});let et=[2,3,1,4,0,5,6,7,8,9,10,11,12,13],G=F=>new be().compose(new I(F.x,o,F.z),new Be().setFromAxisAngle(new I(0,1,0),F.ry),new I(1,1,1)),Z=(F,O,J,xt)=>new I(O,J,xt).applyMatrix4(G(F));z.forEach(F=>{let O=G(F),J=(xt,Vt,y)=>c.add(xt,{m:O.clone().multiply(Vt),color:y});J(new ut(qn,io,.03),B(0,io/2,-Yn/2+.015),m),[-1,1].forEach(xt=>J(new ut(.05,io,Yn),B(xt*(qn/2-.025),io/2,0),x));for(let xt=0;xt<=ld;xt++)J(new ut(qn-.08,.035,Yn-.03),B(0,sr+xt*Mc-.0175,.01),x);J(new ut(qn+.08,.12,Yn+.06),B(0,io+.02,.02),m),J(new ut(qn,sr,Yn+.02),B(0,sr/2,.01),m);for(let xt=0;xt<ld;xt++)J(new ut(qn-.08,.04,.02),B(0,sr+xt*Mc+.005,Yn/2-.005),b)}),c.add(new ne(.015,.015,12,6),{m:B(0,o+2.55,Xt.z0+Yn+.04,0,0,Math.PI/2),color:p(.62,.5,.28)});{[-.22,.22].forEach(J=>c.add(new ut(.05,2.75,.06),{m:B(4.6+J,o+1.36,Xt.z0+Yn+.42,-.22,0,0),color:b}));for(let J=0;J<8;J++){let xt=.25+J*.32;c.add(new ne(.018,.018,.44,6),{m:B(4.6,o+xt,Xt.z0+Yn+.42+(1.36-xt)*Math.tan(.22)*.98,0,0,Math.PI/2),color:b})}}c.add(new ut(5.2,.012,3.8),{m:B(-.4,o+.006,-4.6),color:F=>{let O=Math.abs(F.x+.4),J=Math.abs(F.z+4.6);if(O>2.45||J>1.75)return[.3,.16,.13];if(O>2.25||J>1.55)return[.62,.5,.3];let xt=Math.sin(O*6)*Math.sin(J*6);return xt>.4?[.55,.2,.17]:xt<-.4?[.2,.25,.3]:[.42,.18,.15]}});let tt={x:-.4,z:-2.6};c.add(new ut(1.9,.07,.95),{m:B(tt.x,o+.78,tt.z),color:b}),[-1,1].forEach(F=>{c.add(new ut(.5,.74,.88),{m:B(tt.x+F*.68,o+.37,tt.z),color:x});for(let O=0;O<3;O++)c.add(new ut(.44,.2,.02),{m:B(tt.x+F*.68,o+.15+O*.23,tt.z-.45),color:b}),c.add(new ut(.08,.02,.03),{m:B(tt.x+F*.68,o+.17+O*.23,tt.z-.47),color:p(.62,.5,.28)})}),c.add(new ut(.5,.012,.36),{m:B(tt.x-.15,o+.82,tt.z-.05,0,.15,0),color:p(.9,.87,.78)}),c.add(new ne(.006,.006,.16,5),{m:B(tt.x+.15,o+.825,tt.z,0,.6,Math.PI/2),color:p(.12,.12,.13)}),c.add(new ne(.07,.09,.03,12),{m:B(tt.x+.62,o+.83,tt.z+.2),color:p(.62,.5,.28)}),c.add(new ne(.01,.01,.34,6),{m:B(tt.x+.62,o+1,tt.z+.2),color:p(.62,.5,.28)}),c.add(new ne(.06,.14,.12,14,1,!0),{m:B(tt.x+.62,o+1.18,tt.z+.12,.5,0,0),color:p(.18,.36,.26)}),u.add(new fn(.035,8,6),{m:B(tt.x+.62,o+1.14,tt.z+.1),color:p(1,1,1)}),c.add(new ut(.5,.06,.48),{m:B(tt.x,o+.48,tt.z+.75),color:p(.32,.16,.12)}),c.add(new ut(.5,.6,.06),{m:B(tt.x,o+.82,tt.z+1),color:p(.32,.16,.12)}),[[-.2,.55],[.2,.55],[-.2,.95],[.2,.95]].forEach(([F,O])=>c.add(new ut(.04,.46,.04),{m:B(tt.x+F,o+.23,tt.z+O),color:m}));let ot=(F,O,J)=>{let xt=new be().compose(new I(F,o,O),new Be().setFromAxisAngle(new I(0,1,0),J),new I(1,1,1)),Vt=L=>{let Y=.34+d(L.x*12,L.y*12,L.z*12)*.06;return[Y,Y*.52,Y*.38]},y=(L,Y)=>c.add(L,{m:xt.clone().multiply(Y),color:Vt});y(new ut(.85,.42,.8),B(0,.25,0)),y(new ut(.85,.65,.2),B(0,.72,-.32,-.12,0,0)),[-1,1].forEach(L=>y(new ut(.16,.3,.8),B(L*.42,.58,0))),y(new ut(.62,.1,.6),B(0,.5,.06))};ot(-3.6,-5.2,.55),ot(-1,-6.4,-.35),c.add(new ne(.32,.32,.04,20),{m:B(-2.4,o+.58,-6),color:b}),c.add(new ne(.04,.05,.56,8),{m:B(-2.4,o+.29,-6),color:m}),c.add(new ne(.2,.22,.03,16),{m:B(-2.4,o+.015,-6),color:m}),c.add(new ne(.04,.035,.1,10),{m:B(-2.3,o+.65,-5.95),color:p(.8,.78,.74)}),c.add(new ne(.15,.17,.03,14),{m:B(-4.6,o+.015,-6.4),color:m}),c.add(new ne(.015,.015,1.6,6),{m:B(-4.6,o+.8,-6.4),color:p(.62,.5,.28)}),c.add(new ne(.16,.24,.26,16,1,!0),{m:B(-4.6,o+1.68,-6.4),color:p(.85,.78,.62)}),u.add(new fn(.06,8,6),{m:B(-4.6,o+1.62,-6.4),color:p(1,1,1)}),c.add(new fn(.28,20,14),{m:B(1.2,o+1.05,-4,.4,0,.2),color:F=>d(F.x*9+3,F.y*9,F.z*9)>.55?[.62,.55,.38]:[.3,.42,.46]}),c.add(new Lr(.31,.012,6,32),{m:B(1.2,o+1.05,-4,0,Math.PI/2,.2),color:p(.62,.5,.28)}),c.add(new ne(.03,.06,.75,8),{m:B(1.2,o+.38,-4),color:m}),[0,2.1,4.2].forEach(F=>c.add(new ut(.04,.03,.4),{m:B(1.2+Math.sin(F)*.17,o+.03,-4+Math.cos(F)*.17,0,F,0),color:m})),c.add(new ut(.55,2.1,.35),{m:B(-5.8,o+1.05,1.9),color:m}),c.add(new ne(.2,.2,.02,24),{m:B(-5.8,o+1.7,1.72,Math.PI/2,0,0),color:p(.88,.84,.74)}),c.add(new ut(.01,.13,.01),{m:B(-5.8,o+1.74,1.71,0,0,.6),color:p(.1,.1,.1)}),c.add(new ut(.01,.17,.01),{m:B(-5.8,o+1.76,1.71,0,0,-.2),color:p(.1,.1,.1)}),[[-2.5,-4.5],[1.5,-6.5],[-.4,-2.6]].forEach(([F,O])=>{c.add(new ne(.006,.006,.9,4),{m:B(F,a-.45,O),color:p(.1,.1,.1)}),c.add(new dn(.22,.2,16,1,!0),{m:B(F,a-.95,O),color:p(.3,.32,.28)}),u.add(new fn(.07,10,8),{m:B(F,a-1.03,O),color:p(1,1,1)})}),[[tt.x-.75,tt.z+.3],[tt.x-.62,tt.z+.32]].forEach(([F,O],J)=>{c.add(new ne(.025,.025,.12+J*.05,8),{m:B(F,o+.81+(.12+J*.05)/2,O),color:p(.88,.84,.74)}),u.add(new fn(.014,6,4),{m:B(F,o+.83+.12+J*.05,O,0,0,0,1,1.8,1),color:p(1,1,1)})});let Tt=new Ce(c.geometry(),s);Tt.receiveShadow=!0;let ft=new Ce(u.geometry(),r);i.add(Tt,ft);let _t=new Ui(16756848,0,40,1.3);_t.position.set(-1,a-1.1,-4.5),i.add(_t);let Mt=(()=>{let F=new an,O=J=>{let xt=.9+d(J.x*40,J.y*40,J.z*40)*.2;return[xt,xt,xt]};return[-1,1].forEach(J=>F.add(new ut(.1,1,1),{m:B(J*.45,0,0),color:O,tip:()=>1})),F.add(new ut(1,1,.08),{m:B(0,0,.47),color:O,tip:()=>1}),F.add(new ut(.82,.94,.94),{m:B(0,0,-.04),color:J=>{let xt=.86+Math.sin(J.x*140)*.04;return[xt,xt*.96,xt*.86]},tip:()=>0}),[.3,-.3,.36,-.36].forEach(J=>F.add(new ut(1.01,.025,.02),{m:B(0,J,.515),color:p(.78,.62,.3),tip:()=>0})),F.add(new ut(.7,.16,.01),{m:B(0,.1,.516),color:p(.12,.1,.08),tip:()=>0}),F.geometry()})(),re=new Si({vertexColors:!0});re.onBeforeCompile=F=>{F.vertexShader=F.vertexShader.replace("#include <common>",`#include <common>
attribute float aTip;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
        #ifdef USE_COLOR
          vColor.rgb *= color;
        #endif
        #ifdef USE_INSTANCING_COLOR
          vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, aTip);
        #endif`)};let Ft=null,Bt=[],fe=[],ye="",lt=new be,pt=new Be,St=new I,K=new I,W=[],gt=F=>{let O=2166136261;for(let J=0;J<F.length;J++)O=Math.imul(O^F.charCodeAt(J),16777619);return(O>>>0)%1e4/1e4},rt=(F,O)=>window.MEOW_I18N?window.MEOW_I18N.t(F):O,dt=F=>{let O=document.createElement("canvas");O.width=256,O.height=64;let J=O.getContext("2d"),xt=J.createLinearGradient(0,0,0,64);xt.addColorStop(0,"#d9b968"),xt.addColorStop(1,"#8c6a2c"),J.fillStyle=xt,J.fillRect(0,0,256,64),J.strokeStyle="rgba(60,40,10,.8)",J.lineWidth=4,J.strokeRect(4,4,248,56),J.fillStyle="#2a1c08",J.font='600 30px "Josefin Sans", system-ui, sans-serif',J.textAlign="center",J.textBaseline="middle";let Vt=F;for(;J.measureText(Vt).width>228&&Vt.length>2;)Vt=Vt.slice(0,-2)+"\u2026";J.fillText(Vt,128,34);let y=new Ji(O);return y.colorSpace=kn,y.anisotropy=4,y},Et=new an,Dt=(F,O,J)=>{let xt=Math.floor(J*5),Vt=sr+O*Mc,y=(at,bt,Rt)=>Z(F,at,bt,Rt),L=(at,bt,Rt,wt,te=1,ge=1,qe=1)=>{let Ne=y(bt,Rt,.02);Et.add(at,{m:new be().compose(Ne,new Be().setFromAxisAngle(new I(0,1,0),F.ry),new I(te,ge,qe)),color:wt})},Y=(J*1.3%1-.5)*1;xt===0?(L(new ne(.06,.09,.26,12),Y,Vt+.13,p(.55,.6,.58)),L(new fn(.07,10,8),Y+.3,Vt+.07,p(.7,.55,.35))):xt===1?(L(new ut(.3,.16,.22),Y,Vt+.08,h(.5)),L(new ut(.3,.02,.22),Y,Vt+.165,p(.62,.5,.28))):xt===2?(L(new fn(.06,10,8),Y,Vt+.07,p(.25,.24,.24),1,1.2,.9),L(new fn(.04,10,8),Y,Vt+.17,p(.25,.24,.24)),[-1,1].forEach(at=>L(new dn(.015,.035,4),Y+at*.022,Vt+.215,p(.25,.24,.24)))):xt===3?(L(new ne(.05,.05,.02,12),Y,Vt+.01,p(.62,.5,.28)),L(new ne(.02,.02,.14,8),Y,Vt+.09,p(.88,.84,.74))):(L(new ut(.02,.24,.18),Y,Vt+.12,h(.4)),L(new hn(.14,.18),Y+.012,Vt+.12,p(.75,.72,.62)))},Pt=null,Kt=()=>{Ft&&(i.remove(Ft),Ft.dispose()),Bt.forEach(L=>{i.remove(L),L.material.map.dispose(),L.material.dispose()}),Pt&&(i.remove(Pt),Pt.geometry.dispose()),Bt=[],W.length=0;let F=30,O=[],J=new Map;fe.forEach(L=>{let Y=(L.tag||"").trim();J.has(Y)||(J.set(Y,[]),O.push(Y)),J.get(Y).push(L)});let xt=[];O.forEach(L=>{let Y=J.get(L);for(let at=0;at<Y.length;at+=F)xt.push({tag:L,list:Y.slice(at,at+F),first:at===0})});let Vt=[];et.forEach(L=>lx.forEach(Y=>Vt.push([z[L],Y])));let y=new Set;xt.forEach((L,Y)=>{let at=Vt[Y];if(!at)return;let[bt,Rt]=at;y.add(bt.x+","+bt.z+","+Rt);let wt=sr+Rt*Mc,te=L.list.map(ze=>({t:.035+gt(ze.url)*.04,h:.24+gt(ze.url+"h")*.11,d:.17+gt(ze.title||"x")*.05})),ge=te.reduce((ze,nn)=>ze+nn.t+.004,0),qe=qn-.16,Ne=ge>qe?qe/ge:1,Ve=-qn/2+.08;if(L.list.forEach((ze,nn)=>{let Bn=te[nn],fi=Bn.t*Ne,pi=Z(bt,Ve+fi/2,wt+Bn.h/2+.002,-Yn/2+.03+Bn.d/2),mi=new Be().setFromAxisAngle(new I(0,1,0),bt.ry);W.push({link:ze,tag:L.tag,home:{p:pi,q:mi,s:new I(fi,Bn.h,Bn.d)},cur:{p:pi.clone(),q:mi.clone()},state:"shelf",from:null,t0:0,color:hd[Math.floor(gt(ze.url+"c")*hd.length)]}),Ve+=fi+.004}),L.first){let ze=new Fn({map:dt("#"+(L.tag||rt("untagged","no tag"))),toneMapped:!1}),nn=new Ce(new hn(.34,.085),ze);nn.position.copy(Z(bt,0,wt+.006,Yn/2+.006)),nn.quaternion.setFromAxisAngle(new I(0,1,0),bt.ry),nn.position.y-=.035,nn.userData.tag=L.tag,i.add(nn),Bt.push(nn)}}),Et.p.length=Et.n.length=Et.c.length=Et.t.length=0,Vt.forEach(([L,Y],at)=>{if(y.has(L.x+","+L.z+","+Y))return;let bt=gt("o"+at);bt<.55&&Dt(L,Y,bt/.55)}),Pt=new Ce(Et.geometry(),s),i.add(Pt),Ft=new hi(Mt,re,Math.max(1,W.length)),Ft.count=W.length,Ft.frustumCulled=!1,W.forEach((L,Y)=>{lt.compose(L.home.p,L.home.q,L.home.s),Ft.setMatrixAt(Y,lt),Ft.setColorAt(Y,new le(L.color))}),Ft.instanceColor&&(Ft.instanceColor.needsUpdate=!0),i.add(Ft)},mt={mode:"idle",open:-1,openT0:0,closing:!1,ring:null,ringT0:0,hover:null},At=document.createElement("div");At.className="book-tip",document.body.appendChild(At);let It=document.createElement("div");It.className="book-page",It.innerHTML='<div class="bp-left"><small class="bp-tag"></small><strong class="bp-title"></strong><span class="bp-host"></span><em class="bp-go"></em></div><div class="bp-right"><img alt=""><span class="bp-wait"></span></div>',document.body.appendChild(It);let ae=It.querySelector("img"),U=It.querySelector(".bp-wait"),de=F=>{try{return new URL(F).hostname.replace(/^www\./,"")}catch{return F}},oe=(F,O)=>"https://s.wordpress.com/mshots/v1/"+encodeURIComponent(F)+"?w=800&h=600"+(O?"&r="+O:""),w=0,g=F=>{clearTimeout(w),ae.classList.remove("ready"),U.textContent=rt("loadingPreview","\u2026");let O=0,J=()=>{ae.onload=()=>{ae.classList.add("ready"),U.textContent="",ae.naturalWidth<600&&O<3&&(O++,w=setTimeout(J,2500))},ae.onerror=()=>{U.textContent=rt("noPreview","No preview")},ae.src=oe(F,O)};J()},H=(()=>{let F=new Cn,O=new Si({color:7220522}),J=new Fn({color:15722192}),xt=new Cn,Vt=new Cn,y=new ut(1,1.32,.03).translate(-.5,0,0),L=new ut(1,1.32,.03).translate(.5,0,0),Y=new ut(.96,1.26,.06).translate(-.49,0,.045),at=new ut(.96,1.26,.06).translate(.49,0,.045);return xt.add(new Ce(y,O),new Ce(Y,J)),Vt.add(new Ce(L,O),new Ce(at,J)),F.add(xt,Vt),F.visible=!1,i.parent.add(F),{g:F,left:xt,right:Vt,leather:O}})(),$=.16,Q=(F,O,J)=>{let xt=W[F];O.copy(xt.cur.p).applyMatrix4(i.matrixWorld),i.getWorldQuaternion(J).multiply(xt.cur.q)},Lt=(F,O,J,xt=0)=>{O.set(0,xt,-F).applyQuaternion(e.quaternion).add(e.position),J.copy(e.quaternion)},Nt=F=>F<.5?4*F*F*F:1-Math.pow(-2*F+2,3)/2,it=(F,O)=>{mt.open>=0&&ct(O),mt.open=F,mt.openT0=O,mt.closing=!1;let J=W[F];J.state="out",H.leather.color.set(J.color),It.querySelector(".bp-tag").textContent="#"+(J.tag||rt("untagged","no tag")),It.querySelector(".bp-title").textContent=J.link.title,It.querySelector(".bp-host").textContent=de(J.link.url),It.querySelector(".bp-go").textContent=rt("bookGo","Click the book to visit \u2197"),g(J.link.url),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!0);let xt=new I,Vt=new Be;Q(F,xt,Vt),mt.openFrom={p:xt,q:Vt}},ct=F=>{mt.open<0||mt.closing||(mt.closing=!0,mt.openT0=F,It.classList.remove("show"),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!1))},Ct=(F,O)=>{if(mt.ring===F){ee(O);return}mt.ring!==null&&ee(O),mt.ring=F,mt.ringT0=O;let J=0;W.forEach((xt,Vt)=>{xt.tag===F&&(xt.ringI=J++,xt.state!=="out"&&(xt.state="toRing",xt.fromSc=xt.sc||1,xt.from={p:xt.cur.p.clone(),q:xt.cur.q.clone()},xt.t0=O+xt.ringI*45))}),mt.ringN=J,window.MEOW_SOUND&&window.MEOW_SOUND.whoosh&&window.MEOW_SOUND.whoosh()},ee=F=>{mt.ring!==null&&(W.forEach(O=>{O.tag===mt.ring&&(O.state==="ring"||O.state==="toRing")&&(O.state="toShelf",O.fromSc=O.sc||1,O.from={p:O.cur.p.clone(),q:O.cur.q.clone()},O.t0=F+(O.ringI||0)*30)}),mt.ring=null)},zt=new Be,Ht=new Be,ce=new I,Jt=new I,Se=(F,O,J,xt)=>{let Vt=Math.max(1,mt.ringN),y=Math.max(15,Vt*1.3),L=F.ringI/Vt*Math.PI*2+O*.12;ce.set(e.position.x+Math.cos(L)*y,e.position.y-.4+Math.sin(O*1.3+F.ringI)*.25,e.position.z+Math.sin(L)*y);let Y=Math.atan2(e.position.x-ce.x,e.position.z-ce.z);return Ht.setFromEuler(new An(0,Y-Math.PI/2,Math.sin(O*.9+F.ringI)*.08)),Jt.copy(ce),i.worldToLocal(Jt),J.copy(Jt),i.getWorldQuaternion(zt).invert(),xt.copy(zt).multiply(Ht),J},k=2.2,kt=(F,O)=>{if(!Ft)return;let J=!1,xt=new I,Vt=new Be;if(W.forEach((y,L)=>{if(y.state==="shelf")return;let Y=1;if(y.state==="out"){K.set(0,0,0),lt.compose(y.cur.p,y.cur.q,K),Ft.setMatrixAt(L,lt),J=!0;return}if(y.state==="ring")Se(y,F,y.cur.p,y.cur.q),Y=k;else{let at=Math.max(0,Math.min(1,(O-y.t0)/900)),bt=Nt(at),Rt=y.state==="toRing"?Se(y,F,xt,Vt):y.home.p,wt=y.state==="toRing"?Vt:y.home.q;y.cur.p.copy(y.from.p).lerp(Rt,bt),y.cur.p.y+=Math.sin(Math.PI*bt)*.4*(y.state==="toRing"?1:.6),y.cur.q.copy(y.from.q).slerp(wt,bt);let te=y.fromSc||1;Y=te+((y.state==="toRing"?k:1)-te)*bt,at>=1&&(y.state==="toRing"?y.state="ring":(y.state="shelf",y.cur.p.copy(y.home.p),y.cur.q.copy(y.home.q),Y=1))}K.copy(y.home.s).multiplyScalar(Y),lt.compose(y.cur.p,y.cur.q,K),Ft.setMatrixAt(L,lt),J=!0,y.sc=Y}),J&&(Ft.instanceMatrix.needsUpdate=!0,Ft.boundingSphere=null),mt.open>=0){let y=W[mt.open],L=Math.min(1,(O-mt.openT0)/(mt.closing?700:1100)),Y=new I,at=new Be;Lt(4.2,Y,at,-.15);let bt,Rt;mt.closing?(bt=1-Nt(Math.max(0,(L-.35)/.65)),Rt=1-Nt(Math.min(1,L/.45))):(bt=Nt(Math.min(1,L/.6)),Rt=Nt(Math.max(0,(L-.45)/.55)));let wt=mt.openFrom;H.g.position.copy(wt.p).lerp(Y,bt),H.g.quaternion.copy(wt.q).slerp(at,bt);let te=(y.sc||1)*yt,ge=new I(y.home.s.z*te,y.home.s.y*te/1.32,y.home.s.z*te),qe=new I(1.6,1.6,1.6);H.g.scale.copy(ge).lerp(qe,bt),H.left.rotation.y=Math.PI*(1-Rt)*.999,H.right.rotation.y=0,H.g.visible=!0,!mt.closing&&L>=1?(Ot(H.g,It),It.classList.add("show")):mt.closing||It.classList.remove("show"),mt.closing&&L>=1&&(H.g.visible=!1,y.state=mt.ring===y.tag?"toRing":"toShelf",y.from={p:new I,q:new Be},y.from.p.copy(H.g.position),i.worldToLocal(y.from.p),i.getWorldQuaternion(zt).invert(),y.from.q.copy(zt).multiply(H.g.quaternion),y.t0=O,y.fromSc=1,mt.open=-1,mt.closing=!1)}},yt=4.5,N=new I,Ot=(F,O)=>{let J=1e9,xt=1e9,Vt=-1e9,y=-1e9;[[-.97,.63],[.97,.63],[-.97,-.63],[.97,-.63]].forEach(([L,Y])=>{N.set(L,Y,.08).applyMatrix4(F.matrixWorld).project(e);let at=(N.x*.5+.5)*innerWidth,bt=(-N.y*.5+.5)*innerHeight;J=Math.min(J,at),Vt=Math.max(Vt,at),xt=Math.min(xt,bt),y=Math.max(y,bt)}),O.style.left=J+"px",O.style.top=xt+"px",O.style.width=Vt-J+"px",O.style.height=y-xt+"px"},vt=F=>{if(!Ft)return null;if(mt.open>=0&&H.g.visible&&F.intersectObject(H.g,!0)[0])return{type:"open"};let O=F.intersectObject(Ft,!1)[0],J=Bt.length?F.intersectObjects(Bt,!1)[0]:null;return J&&(!O||J.distance<O.distance)&&J.distance<40?{type:"label",tag:J.object.userData.tag}:O&&O.distance<45&&W[O.instanceId]&&W[O.instanceId].state!=="out"?{type:"book",i:O.instanceId}:null};return{sync(){let F=window.MEOW_LINKS_DATA||[],O=F.map(J=>J.url+"|"+J.tag+"|"+J.title).join(`
`);O!==ye&&(ye=O,fe=F.slice(),mt.open=-1,mt.ring=null,H.g.visible=!1,It.classList.remove("show"),Kt())},update:kt,get busy(){return mt.open>=0||mt.ring!==null},hover(F,O){var Vt,y;let J=O?vt(F):null,xt=J?J.type+((y=(Vt=J.i)!=null?Vt:J.tag)!=null?y:""):"";if(xt===mt.hoverKey)return!!J;if(mt.hoverKey=xt,!J||J.type==="open")return At.classList.remove("show"),!!J;if(J.type==="book"){let L=W[J.i];At.innerHTML="";let Y=document.createElement("strong");Y.textContent=L.link.title;let at=document.createElement("small");at.textContent="#"+(L.tag||rt("untagged","no tag"))+" \xB7 "+de(L.link.url),At.append(Y,at)}else{let L=W.filter(bt=>bt.tag===J.tag).length;At.innerHTML="";let Y=document.createElement("strong");Y.textContent="#"+(J.tag||rt("untagged","no tag"))+"  \xB7  "+L;let at=document.createElement("small");at.textContent=mt.ring===J.tag?rt("tagBack","Click: put them back"):rt("tagRing","Click: books fly around you"),At.append(Y,at)}return At.classList.add("show"),!0},click(F,O){let J=vt(F);if(mt.open>=0&&!mt.closing){if(J&&J.type==="open"){let xt=W[mt.open];return window.open(xt.link.url,"_blank","noopener"),!0}if(ct(O),!J||J.type==="open")return!0}return J?J.type==="label"?(Ct(J.tag,O),!0):J.type==="book"?(it(J.i,O),!0):!1:mt.ring!==null?(ee(O),!0):!1},back(F){return mt.open>=0&&!mt.closing?(ct(F),!0):mt.ring!==null?(ee(F),!0):!1},_open(F){it(F,performance.now())},_ring(F){Ct(F,performance.now())},get _n(){return W.length},reset(F){mt.open>=0&&ct(F),mt.ring!==null&&ee(F),At.classList.remove("show"),mt.hoverKey=""},lampLight:_t}}var Je={x:112,z:-119,y:4.5,yaw:-Math.PI/2,S:4.5};function dd({scene:i,shared:t,U:e,camera:n}){let s=Je.S,r=6.4,o=5,a=.17,l=.3145,c=8,u=2.62,d=1.9,h=-1.95,m=-.75,x=2.05,b=o/2+2.6,p=11,f={x:1.7,z:-2},v=new an,R=new an,E=new an,A=new an,T=(y,L,Y)=>_n(y,L,Y),P=(y,L=1)=>Y=>{let at=y*(.88+T(Y.x*3,Y.y*9,Y.z*3)*.24)*L;return[at,at*.8,at*.6]},_=y=>(L,Y)=>{if(y==="x"?Math.abs(Y.x)>.9:Math.abs(Y.z)>.9){let Rt=y==="x"?Math.hypot(L.y%1,L.z):Math.hypot(L.y%1,L.x),wt=.68+Math.sin(Rt*90)*.04;return[wt*1.02,wt*.86,wt*.66]}let bt=.5+T(L.x*2.5,L.y*8,L.z*2.5)*.2+Math.sin((y==="x"?L.x:L.z)*23)*.015;return[bt,bt*.79,bt*.58]},C=y=>{let L=.45+T(y.x*5,y.y*5,y.z*5)*.25;return[L*.98,L*.97,L*.95]},D=(y,L,Y)=>()=>[y,L,Y],q=(y,L)=>Y=>(y==="z"?(Y.z-L)*Math.sign(L):(Y.x-L)*Math.sign(L))>0?1:0,z={front:[[h,m,0,x],[.75,1.95,.95,1.95]],back:[],left:[],right:[[-.3,.9,.95,1.95]]},et=(y,L,Y,at)=>{let bt=[[y,L]];return at.forEach(([Rt,wt,te,ge])=>{if(!(te<Y+a-.02&&ge>Y-a+.02))return;let qe=[];bt.forEach(([Ne,Ve])=>{wt<=Ne||Rt>=Ve?qe.push([Ne,Ve]):(Rt>Ne&&qe.push([Ne,Rt]),wt<Ve&&qe.push([wt,Ve]))}),bt=qe}),bt};for(let y=0;y<c;y++){let L=a+y*l,Y=a+l/2+y*l;[["front",o/2],["back",-o/2]].forEach(([at,bt])=>{et(-r/2-.3,r/2+.3,L,z[at]).forEach(([Rt,wt])=>{v.add(new ne(a,a*.97,wt-Rt,9,1),{m:B((Rt+wt)/2,L,bt,0,0,Math.PI/2),color:_("x"),tip:q("z",bt)})})}),Y+a<u+.12&&[["left",-r/2],["right",r/2]].forEach(([at,bt])=>{et(-o/2-.3,o/2+.3,Y,z[at]).forEach(([Rt,wt])=>{v.add(new ne(a,a*.97,wt-Rt,9,1),{m:B(bt,Y,(Rt+wt)/2,Math.PI/2,0,0),color:_("z"),tip:q("x",bt)})})})}for(let y=0;y<4;y++){let L=y<2?r:o,Y=y<2?y?-o/2:o/2:y===2?-r/2:r/2;for(let at=-L/2-.2;at<L/2+.2;at+=.42){if(y===0&&at>h-.2&&at<m)continue;let bt=.38+T(at,y,0)*.08,Rt=.16+T(at,y,3)*.08,wt=y<2?B(at+.2,-.02+Rt/2-.06,Y,0,(T(at,y,5)-.5)*.2,0,bt,Rt,.42):B(Y,-.02+Rt/2-.06,at+.2,0,(T(at,y,5)-.5)*.2,0,.42,Rt,bt);v.add(new ut(1,1,1),{m:wt,color:C,tip:()=>1})}}v.add(new ut(m-h+.1,.08,.42),{m:B((h+m)/2,.06,o/2),color:P(.5),tip:()=>0}),[-1,1].forEach(y=>{let L=y*o/2,Y=[-r/2-.05,u,L],at=[r/2+.05,u,L],bt=[0,u+d,L],Rt=wt=>{let te=.48+T(wt.x*9,0,y)*.1,ge=Math.abs((wt.x+10)%.24-.12)<.012?.75:1;return[te*ge,te*.8*ge,te*.6*ge]};v.tris(y>0?[Y,at,bt]:[at,Y,bt],Rt,()=>0),R.tris(y>0?[at,Y,bt]:[Y,at,bt],wt=>{let te=Rt(wt);return[te[0]*.85,te[1]*.85,te[2]*.85]})});let G=r/2+.6,Z=d+.45,tt=Math.atan2(Z,G),ot=Math.hypot(G,Z);[-1,1].forEach(y=>{v.add(new ut(ot,.1,o+1.3,3,1,6),{m:B(y*G/2,u+d-Z/2+.02,0,0,0,-y*tt),color:P(.36),tip:(Y,at)=>at.y>0?1:0});let L=9;for(let Y=0;Y<L;Y++){let at=Y/L,bt=ot/L+.12,Rt=y*(G*(at+.5/L)),wt=u+d-Z*(at+.5/L)+.1;v.add(new ut(bt,.045,o+1.3,1,1,10),{m:B(Rt,wt,0,0,0,-y*(tt+.05)),color:te=>{let ge=Math.floor((te.z+5)*3.3),qe=.3+T(ge,Y,y)*.12+Y%2*.02;return[qe,qe*.93,qe*.88]},tip:()=>1})}v.add(new ut(.05,.22,o+1.35),{m:B(y*(G+.02),u+d-Z-.02,0),color:P(.45),tip:()=>0}),[-1,1].forEach(Y=>v.add(new ut(ot+.1,.22,.05),{m:B(y*G/2,u+d-Z/2+.02,Y*(o/2+.66),0,0,-y*tt),color:P(.45),tip:()=>0}))}),v.add(new ut(.34,.16,o+1.4),{m:B(0,u+d+.12,0,0,0,Math.PI/4),color:P(.32),tip:()=>1});for(let y=0;y<8;y++)v.add(new ut(.86+y%2*.04,.3,.86+(y+1)%2*.04),{m:B(f.x,u+.15+y*.3,f.z,0,(T(y,1,1)-.5)*.08,0),color:C,tip:()=>1});v.add(new ut(1.05,.08,1.05),{m:B(f.x,u+.15+8*.3-.06,f.z),color:C,tip:()=>1});let Tt=new I(f.x,u+.2+8*.3,f.z),ft=(y,L,Y)=>{let at=Y==="front"?0:Math.PI/2,bt=(Ne,Ve,ze)=>Y==="front"?[y+Ne,L+Ve,o/2+ze]:[r/2+ze,L+Ve,y-Ne],Rt=(Ne,Ve,ze,nn,Bn,fi,pi,mi,Ss=0)=>{let[rs,rr,In]=bt(Bn,fi,pi);Ne.add(new ut(Ve,ze,nn),{m:B(rs,rr,In,0,at,0),color:mi,tip:()=>Ss})},wt=P(.55);Rt(v,1.32,.09,.4,0,.53,0,wt),Rt(v,1.32,.09,.4,0,-.53,0,wt),Rt(v,.09,1.1,.4,-.62,0,0,wt),Rt(v,.09,1.1,.4,.62,0,0,wt),Rt(v,.05,1,.06,0,0,0,wt),Rt(v,1.2,.05,.06,0,0,0,wt),Rt(v,1.45,.06,.3,0,-.6,.2,wt,1),[-1,1].forEach(Ne=>Rt(v,.55,1.05,.04,Ne*.98,0,.27,Ve=>{let ze=.42+T(Ve.x*9,Ve.y*2,Ve.z*9)*.1,nn=Math.abs((Ve.y+5)%.14-.07)<.012?.75:1;return[ze*.9*nn,ze*.95*nn,ze*.92*nn]}));let[te,ge,qe]=bt(0,0,0);A.add(new hn(1.2,1),{m:B(te,ge,qe,0,at,0),color:D(1,1,1)}),A.add(new hn(1.2,1),{m:B(te,ge,qe,0,at+Math.PI,0),color:D(1,1,1)}),[-1,1].forEach(Ne=>Rt(R,.3,1.15,.03,Ne*.78,.02,-.24,Ve=>{let ze=.78+Math.sin(Ve.x*60+Ve.z*60)*.04;return[ze,ze*.95,ze*.86]})),Rt(R,1.9,.03,.03,0,.62,-.24,D(.3,.25,.2))};ft(1.35,1.45,"front"),ft(.3,1.45,"right"),[[h-.05,.08],[m+.05,.08]].forEach(([y,L])=>v.add(new ut(L,x,.42),{m:B(y,x/2,o/2),color:P(.55),tip:()=>0})),v.add(new ut(m-h+.3,.12,.44),{m:B((h+m)/2,x+.05,o/2),color:P(.55),tip:()=>1});for(let y=0;y<11;y++){let L=-3.25+y*.6+.3;v.add(new ut(.57,.08,2.2),{m:B(L,.16,o/2+1.25,0,(T(y,2,2)-.5)*.01,0),color:P(.52+y%3*.04),tip:()=>1})}v.add(new ut(6.65,.14,.08),{m:B(.05,.1,o/2+2.36),color:P(.45),tip:()=>0}),v.add(new ut(1.4,.07,.3),{m:B((h+m)/2,.05,o/2+2.55),color:P(.5),tip:()=>1});let _t=-3.4,Mt=.6;v.add(new ut(Mt-_t,.08,2.55,4,1,4),{m:B((_t+Mt)/2,2.32,o/2+1.3,-.12,0,0),color:(y,L)=>{let Y=(L.y<0?.62:.32)+T(y.x*3,0,y.z*9)*.1;return L.y<0?[Y,Y*.8,Y*.6]:[Y,Y*.93,Y*.88]},tip:(y,L)=>L.y>0?1:0}),[_t+.25,Mt-.25].forEach(y=>{v.add(new ut(.14,2.2,.14),{m:B(y,1.1,o/2+2.2),color:P(.5),tip:()=>0}),v.add(new ut(.08,.7,.08),{m:B(y,1.95,o/2+1.95,.75,0,0),color:P(.5),tip:()=>0})}),v.add(new ut(Mt-_t,.14,.14),{m:B((_t+Mt)/2,2.12,o/2+2.2),color:P(.45),tip:()=>1}),v.add(new ut(1.4,.06,.4),{m:B(1.45,.47,o/2+.48),color:P(.55),tip:()=>1}),[[.85],[2.05]].forEach(([y])=>v.add(new ut(.06,.3,.36),{m:B(y,.32,o/2+.48),color:P(.45),tip:()=>0})),v.add(new ut(.04,.04,.3),{m:B(-.5,2,o/2+.3),color:D(.15,.15,.15),tip:()=>0}),v.add(new ut(.2,.04,.2),{m:B(-.5,1.98,o/2+.42),color:D(.15,.15,.15),tip:()=>1}),E.add(new ut(.15,.22,.15),{m:B(-.5,1.84,o/2+.42),color:D(1,1,1)}),v.add(new ne(.32,.29,.85,14),{m:B(r/2+.55,.42,o/2-.45),color:y=>{let L=.45+Math.sin(Math.atan2(y.z,y.x)*14)*.03;return[L,L*.8,L*.6]},tip:(y,L)=>L.y>.5?1:0}),[.12,.72].forEach(y=>v.add(new ne(.33,.33,.04,14,1,!0),{m:B(r/2+.55,y,o/2-.45),color:D(.2,.2,.21),tip:()=>0}));for(let y=0;y<4;y++)for(let L=0;L<9-y;L++){let Y=-1.6+L*.19+y*.09,at=.11+y*.18;v.add(new ne(.09+T(L,y,1)*.03,.1,.7,7),{m:B(-r/2-.58,at,Y,0,0,Math.PI/2),color:(bt,Rt)=>Math.abs(Rt.x)>.9?[.74,.6,.42]:P(.45)(bt),tip:()=>1})}v.add(new ne(.3,.34,.5,10),{m:B(-r/2-1.4,.25,1.4),color:(y,L)=>L.y>.5?[.7,.58,.42]:P(.45)(y),tip:(y,L)=>L.y>.5?1:0}),v.add(new ne(.025,.03,.75,6),{m:B(-r/2-1.3,.75,1.4,0,0,-.55),color:P(.62),tip:()=>0}),v.add(new ut(.2,.12,.03),{m:B(-r/2-1.48,.52,1.4,0,0,-.55),color:D(.35,.36,.38),tip:()=>0});for(let y=0;y<p/.5;y++)v.add(new ut(1.8,.08,.44),{m:B(-1.3+(y*7%5-2)*.01,.2-y*.012,b+y*.5,0,(y*3%5-2)*.012,0),color:P(.5+y*11%9/60),tip:()=>1});for(let y=0;y<=p/2.2;y++)[-1,1].forEach(L=>{v.add(new ne(.09,.09,2.6,6),{m:B(-1.3+L*.85,-1.1-y*.03,b+y*2.2),color:P(.36),tip:()=>0})});[-1,1].forEach(y=>{v.add(new ne(.06,.06,1.3,6),{m:B(-1.3+y*.85,.85,b+p-.4),color:P(.36),tip:()=>0}),E.add(new ut(.16,.2,.16),{m:B(-1.3+y*.85,1.6,b+p-.4),color:D(1,1,1)})});for(let y=0;y<c-1;y++){let L=a+y*l+l/2;[["front",o/2],["back",-o/2]].forEach(([Y,at])=>et(-r/2+.05,r/2-.05,L,z[Y]).forEach(([bt,Rt])=>{v.add(new ut(Rt-bt,.035,.02),{m:B((bt+Rt)/2,L,at+Math.sign(at)*(a-.03)),color:wt=>{let te=.72+T(wt.x*9,wt.y*30,0)*.12;return[te,te*.95,te*.86]},tip:()=>1})})),[["left",-r/2],["right",r/2]].forEach(([Y,at])=>et(-o/2+.05,o/2-.05,L+l/2,z[Y]).forEach(([bt,Rt])=>{v.add(new ut(.02,.035,Rt-bt),{m:B(at+Math.sign(at)*(a-.03),L+l/2,(bt+Rt)/2),color:wt=>{let te=.72+T(0,wt.y*30,wt.z*9)*.12;return[te,te*.95,te*.86]},tip:()=>1})}))}[-1,1].forEach(y=>v.add(new ne(.06,.06,o+1.3,8,1,!0,0,Math.PI),{m:B(y*(G+.06),u+d-Z-.14,0,Math.PI/2,0,y>0?Math.PI:0),color:()=>[.4,.4,.42],tip:()=>0})),v.add(new ne(.035,.035,u+d-Z-.2,8),{m:B(r/2+.6,(u+d-Z)/2+.4,o/2-.45-.05),color:()=>[.4,.4,.42],tip:()=>0}),v.add(new ne(.015,.02,.7,6),{m:B(0,u+d+.5,-1.4),color:()=>[.18,.18,.19],tip:()=>0}),v.add(new ut(.02,.02,.5),{m:B(0,u+d+.62,-1.4),color:()=>[.18,.18,.19],tip:()=>0}),v.add(new dn(.05,.1,4),{m:B(0,u+d+.62,-1.15,Math.PI/2,0,0),color:()=>[.18,.18,.19],tip:()=>0});{let y=(L,Y,at,bt,Rt=1,wt=1,te=1,ge=0)=>v.add(L,{m:B(0,u+d+.88+at,-1.4+bt,0,Math.PI/2,ge,Rt,wt,te),color:()=>[.16,.16,.17],tip:()=>0});y(new ut(.28,.13,.02),0,0,0),y(new ut(.11,.1,.02),0,.11,-.13),[-1,1].forEach(L=>y(new dn(.03,.06,3),0,.19,-.13+L*.035)),y(new ut(.03,.2,.02),0,.12,.16,1,1,1,.4)}let re=(y,L,Y)=>{let at=new be().compose(new I(y,.82,L),new Be().setFromAxisAngle(new I(0,1,0),Y),new I(1,1,1));v.add(new ut(1.3,.2,.24),{m:at.clone().multiply(B(0,0,.12)),color:P(.45),tip:()=>0}),v.add(new ut(1.24,.02,.2),{m:at.clone().multiply(B(0,.09,.12)),color:()=>[.25,.18,.12],tip:()=>1});let bt=[[.75,.3,.3],[.85,.7,.35],[.75,.62,.8],[.9,.88,.85]];for(let Rt=0;Rt<9;Rt++){let wt=-.55+Rt*.14,te=.1+T(Rt,y,1)*.1;v.add(new ne(.006,.006,te,4),{m:at.clone().multiply(B(wt,.1+te/2,.12+(Rt%2-.5)*.08)),color:()=>[.3,.42,.24],tip:()=>0}),v.add(new fn(.03,6,5),{m:at.clone().multiply(B(wt,.1+te,.12+(Rt%2-.5)*.08)),color:()=>bt[Rt%4],tip:()=>0})}};re(1.35,o/2+.2,0),re(r/2+.2,-.3,Math.PI/2),v.add(new ut(1,.015,.6),{m:B((h+m)/2,.205,o/2+.55),color:y=>Math.floor((y.x+9)*12)%2?[.42,.33,.22]:[.5,.4,.27],tip:()=>1}),v.add(new ne(.015,.015,1.2,6),{m:B(h-.3,.8,o/2+.25,.08,0,.12),color:P(.6),tip:()=>0}),v.add(new dn(.12,.3,8),{m:B(h-.24,.32,o/2+.24),color:()=>[.68,.58,.36],tip:()=>0}),[[-2.9,0],[-2.75,.32]].forEach(([y,L],Y)=>{v.add(new ut(.48,.32,.4),{m:B(y,.36+L,o/2+1.9,0,Y*.3,0),color:at=>{let bt=.55+(Math.abs((at.y+9)*9%1-.5)<.1?-.1:0)+T(at.x*9,at.y,at.z*9)*.08;return[bt,bt*.84,bt*.62]},tip:(at,bt)=>bt.y>.5?1:0})}),v.add(new ne(.05,.06,1.7,8),{m:B(Mt+.6,.85,o/2+2.9),color:P(.4),tip:()=>0}),v.add(new ut(.2,.05,.2),{m:B(Mt+.6,1.72,o/2+2.9),color:()=>[.15,.15,.15],tip:()=>1}),E.add(new ut(.15,.2,.15),{m:B(Mt+.6,1.84,o/2+2.9),color:()=>[1,1,1]}),v.add(new dn(.15,.12,4),{m:B(Mt+.6,2,o/2+2.9,0,Math.PI/4,0),color:()=>[.15,.15,.15],tip:()=>1});for(let y=0;y<6;y++){let L=(h+m)/2-1.6-y*.65+Math.sin(y*1.7)*.2,Y=o/2+2.9+y*.35;v.add(new ne(.28+T(y,3,3)*.1,.3,.06,9),{m:B(L,0,Y,0,y,0,1,1,.8),color:C,tip:()=>1})}let Ft=r/2-a,Bt=o/2-a;for(let y=-Ft,L=0;y<Ft-.01;y+=.2,L++){let Y=Rt=>{let wt=(.5+L%4*.025)*(.92+T(Rt.x*4,0,Rt.z*1.2)*.16)*(Math.abs((Rt.z+9+L*.37)%1.6-.8)<.01?.7:1);return[wt,wt*.8,wt*.6]},at=y+.1;(at>ie.x0&&at<ie.x1?[[-Bt-.05,ie.bottom],[ie.top,Bt+.05]]:[[-Bt-.05,Bt+.05]]).forEach(([Rt,wt])=>{wt-Rt>.02&&R.add(new ut(.195,.06,wt-Rt),{m:B(at,.09,(Rt+wt)/2),color:Y})})}for(let y=ie.bottom;y<=1.5;y+=.55)R.add(new ut(.05,.9,.05),{m:B(ie.x0-.02,.57,y),color:P(.5)});R.add(new ut(.07,.06,1.5-ie.bottom+.05),{m:B(ie.x0-.02,1.04,(ie.bottom+1.5)/2),color:P(.55)}),R.add(new ut(ie.x1-ie.x0+.05,.06,.07),{m:B((ie.x0+ie.x1)/2,1.04,ie.bottom-.02),color:P(.55)}),[ie.x0+.5,ie.x1-.03].forEach(y=>R.add(new ut(.05,.9,.05),{m:B(y,.57,ie.bottom-.02),color:P(.5)})),R.add(new ut(.03,.16,.36),{m:B(ie.x0-.05,.86,1.5),color:P(.62)}),R.add(new ne(.17,.17,.04,24),{m:B(-.4,1.8,Bt-.03,Math.PI/2,0,0),color:P(.45)}),R.add(new ne(.14,.14,.01,24),{m:B(-.4,1.8,Bt-.055,Math.PI/2,0,0),color:()=>[.9,.87,.8]}),R.add(new ut(.008,.1,.006),{m:B(-.4,1.83,Bt-.065,0,0,.5),color:()=>[.1,.1,.1]}),R.add(new ut(.008,.12,.006),{m:B(-.4,1.84,Bt-.066,0,0,-1.9),color:()=>[.1,.1,.1]}),R.add(new ne(.015,.015,1.5,6),{m:B(f.x,1.62,-Bt+.62,0,0,Math.PI/2),color:()=>[.2,.2,.2]}),[-.5,-.1,.35].forEach((y,L)=>{R.add(new ne(.1-L*.015,.08-L*.012,.13,12),{m:B(f.x+y,1.42,-Bt+.64),color:()=>[.62,.36,.22]}),R.add(new ne(.008,.008,.14,4),{m:B(f.x+y,1.55,-Bt+.64),color:()=>[.2,.2,.2]})}),R.add(new fn(.12,12,8),{m:B(f.x-.7,.31,-Bt+.75,0,0,0,1,.8,1),color:()=>[.2,.2,.22]}),R.add(new ne(.015,.03,.12,6),{m:B(f.x-.58,.36,-Bt+.75,0,0,-.9),color:()=>[.2,.2,.22]}),[[-.6,.14],[-.5,.2],[.55,.1]].forEach(([y,L])=>R.add(new ne(.025,.025,L,8),{m:B(f.x+y,1.52+L/2,-Bt+.4),color:()=>[.9,.86,.76]})),[[.1,[.4,.2,.18]],[.16,[.24,.3,.36]],[.21,[.5,.45,.32]]].forEach(([y,L])=>R.add(new ut(.05,.22,.16),{m:B(f.x+y,1.63,-Bt+.4),color:()=>L})),R.add(new ut(.9,.012,.6),{m:B(-2,.126,-.85),color:y=>Math.floor((y.x+3)*8)%2?[.62,.56,.46]:[.4,.42,.38]}),R.add(new ut(2.3,.014,1.55),{m:B(.55,.127,.5),color:y=>{let L=Math.floor(Math.abs(y.x-.55)/.17)%3;return Math.abs(y.x-.55)>1.05||Math.abs(y.z-.5)>.68?[.32,.2,.17]:L===0?[.55,.28,.22]:L===1?[.78,.7,.58]:[.36,.38,.32]}}),[-1.1,1.1].forEach(y=>R.add(new ut(r-.2,.2,.2),{m:B(0,u-.02,y),color:P(.42)})),R.add(new ut(.2,.22,o+.2),{m:B(0,u+d-.2,0),color:P(.42)}),[-1,1].forEach(y=>[-1.8,0,1.8].forEach(L=>R.add(new ut(ot-.6,.14,.1),{m:B(y*(G-.3)/2,u+d-Z*.47-.1,L,0,0,-y*tt),color:P(.4)})));let fe=f;R.add(new ut(1.95,.12,1),{m:B(fe.x,.17,-Bt+.5),color:C}),[-1,1].forEach(y=>R.add(new ut(.36,1.25,.7),{m:B(fe.x+y*.76,.85,-Bt+.35),color:C})),R.add(new ut(1.2,1.25,.2),{m:B(fe.x,.85,-Bt+.1),color:y=>{let L=C(y);return[L[0]*.45,L[1]*.42,L[2]*.4]}}),R.add(new ut(2,.16,.42),{m:B(fe.x,1.44,-Bt+.4),color:P(.42)});for(let y=0;y<4;y++)R.add(new ut(1.3-y*.04,.3,.55),{m:B(fe.x,1.67+y*.3,-Bt+.27),color:C});[[-.2,.3],[.15,-.25],[0,.05]].forEach(([y,L])=>R.add(new ne(.07,.08,.7,7),{m:B(fe.x+y*.4,.3,-Bt+.42,0,L,Math.PI/2),color:(Y,at)=>Math.abs(at.x)>.8?[.2,.15,.1]:[.18,.13,.1]})),E.add(new ut(.9,.05,.45),{m:B(fe.x,.25,-Bt+.42),color:D(1,.62,.3)}),R.add(new ne(.28,.24,.32,10,1,!0),{m:B(fe.x-1.25,.28,-Bt+.35),color:P(.5)});for(let y=0;y<5;y++)R.add(new ne(.05,.05,.55,6),{m:B(fe.x-1.25+(y-2)*.08,.42+y%2*.04,-Bt+.35,.2*(y-2),0,Math.PI/2+.1),color:P(.5)});let ye=-Ft+.02,lt=ye+1.95,pt=-Bt+.02,St=pt+1,K=(ye+lt)/2,W=(pt+St)/2;[[ye+.05,pt+.05,.9],[ye+.05,St-.05,.9],[lt-.05,pt+.05,.6],[lt-.05,St-.05,.6]].forEach(([y,L,Y])=>R.add(new ut(.09,Y,.09),{m:B(y,.12+Y/2,L),color:P(.45)})),R.add(new ut(.06,.45,St-pt-.1),{m:B(ye+.05,.75,W),color:P(.5)}),R.add(new ut(lt-ye,.12,St-pt),{m:B(K,.36,W),color:P(.45)}),R.add(new ut(lt-ye-.1,.16,St-pt-.08),{m:B(K,.5,W),color:D(.86,.84,.78)}),R.add(new ut(1.3,.05,St-pt+.04),{m:B(lt-.68,.6,W),color:y=>(Math.floor(y.x*6)+Math.floor(y.z*6))%2?[.46,.2,.18]:[.52,.26,.22]}),R.add(new ut(.08,.25,St-pt+.04),{m:B(lt-.03,.5,W),color:D(.46,.2,.18)});let gt=new fn(1,12,8);R.add(gt,{m:B(ye+.32,.64,W,0,0,0,.2,.08,.36),color:D(.92,.9,.86)}),R.add(new ut(.7,.42,.42),{m:B(lt+.45,.33,pt+.25),color:P(.5)}),R.add(new ut(.72,.05,.44),{m:B(lt+.45,.4,pt+.25),color:D(.25,.25,.26)});let rt={x:.9,z:.6};R.add(new ut(1.3,.06,.85),{m:B(rt.x,.88,rt.z),color:P(.55)}),[[-.58,-.36],[.58,-.36],[-.58,.36],[.58,.36]].forEach(([y,L])=>R.add(new ut(.07,.73,.07),{m:B(rt.x+y,.48,rt.z+L),color:P(.45)})),[-1,1].forEach(y=>{let L=rt.z+y*.68;R.add(new ut(.44,.05,.42),{m:B(rt.x,.58,L),color:P(.5)}),[[-.18,-.17],[.18,-.17],[-.18,.17],[.18,.17]].forEach(([Y,at])=>R.add(new ut(.045,.46,.045),{m:B(rt.x+Y,.35,L+at),color:P(.45)})),R.add(new ut(.44,.5,.04),{m:B(rt.x,.85,L+y*.2),color:P(.5)})}),E.add(new ut(.12,.16,.12),{m:B(rt.x+.35,1,rt.z-.15),color:D(1,1,1)}),R.add(new ut(.16,.03,.16),{m:B(rt.x+.35,.92,rt.z-.15),color:D(.15,.15,.15)}),R.add(new ut(.14,.03,.14),{m:B(rt.x+.35,1.09,rt.z-.15),color:D(.15,.15,.15)}),R.add(new ne(.045,.04,.1,10),{m:B(rt.x-.3,.96,rt.z+.2),color:D(.75,.73,.7)}),R.add(new ut(.22,.04,.3),{m:B(rt.x-.25,.93,rt.z-.2,0,.3,0),color:D(.3,.36,.42)}),R.add(new ne(.16,.1,.07,14,1,!0),{m:B(rt.x+.05,.95,rt.z+.15),color:P(.5)}),[[0,0],[.07,.05],[-.06,.05],[0,-.07]].forEach(([y,L],Y)=>R.add(new fn(.055,10,7),{m:B(rt.x+.05+y,.99+(Y===3?.04:0),rt.z+.15+L),color:D(.66,.66,.65)})),[1.35,1.75].forEach(y=>{R.add(new ut(.26,.04,1.3),{m:B(-Ft+.14,y,.9),color:P(.5)}),R.add(new ut(.04,.16,.04),{m:B(-Ft+.04,y-.1,.35),color:P(.4)}),R.add(new ut(.04,.16,.04),{m:B(-Ft+.04,y-.1,1.45),color:P(.4)})}),[[.4,.08,.16,[.62,.66,.66]],[.6,.06,.12,[.6,.58,.5]],[.78,.07,.2,[.55,.6,.62]]].forEach(([y,L,Y,at])=>{R.add(new ne(L,L,Y,10),{m:B(-Ft+.14,1.37+Y/2,y),color:D(...at)}),R.add(new ne(L*.8,L*.8,.03,10),{m:B(-Ft+.14,1.38+Y,y),color:D(.45,.35,.25)})}),[[1,.24,[.45,.22,.2]],[1.06,.2,[.25,.32,.36]],[1.12,.26,[.4,.38,.28]],[1.18,.22,[.6,.55,.45]],[1.26,.19,[.3,.3,.32]]].forEach(([y,L,Y],at)=>{R.add(new ut(.18,L,.05),{m:B(-Ft+.14,1.77+L/2,y,at===4?.25:0,0,0),color:D(...Y)})}),R.add(new ne(.015,.015,.12,5),{m:B(-2.6,1.7,Bt-.06,Math.PI/2,0,0),color:P(.4)}),R.add(new ut(.42,.85,.12),{m:B(-2.6,1.25,Bt-.1),color:y=>{let L=.32+T(y.x*9,y.y*9,0)*.04;return[L*.85,L,L*.9]}}),[-2.7,-2.48].forEach(y=>{R.add(new ut(.11,.26,.13),{m:B(y,.25,Bt-.2),color:D(.2,.16,.13)}),R.add(new ut(.11,.07,.26),{m:B(y,.155,Bt-.26),color:D(.2,.16,.13)})}),R.add(new ut(.5,.38,.03),{m:B(-.25,1.6,-Bt+.02),color:P(.4)}),R.add(new hn(.4,.28),{m:B(-.25,1.6,-Bt+.04),color:y=>y.y>1.6?[.7,.72,.74]:[.4,.45,.4]});let dt=new an,Et=m-h-.04;for(let y=0;y<5;y++)dt.add(new ut(Et/5-.008,x-.04,.06),{m:B(.02+Et/10+y*Et/5,(x-.04)/2,0),color:P(.5+y%2*.04),tip:()=>0});[.35,x-.4].forEach(y=>dt.add(new ut(Et-.1,.12,.04),{m:B(.02+Et/2,y,-.05),color:P(.46),tip:()=>0})),dt.add(new ut(.1,Math.hypot(Et-.2,x-.95),.04),{m:B(.02+Et/2,x/2-.02,-.05,0,0,Math.atan2(Et-.2,x-.95)),color:P(.46),tip:()=>0}),[.06,-.08].forEach(y=>dt.add(new ne(.02,.02,.14,6),{m:B(Et-.1,1,y),color:D(.18,.18,.19),tip:()=>0})),[.3,x-.3].forEach(y=>dt.add(new ut(.4,.05,.075),{m:B(.22,y,0),color:D(.18,.18,.19),tip:()=>0}));let Dt=new an;Dt.add(new fn(1,14,6,0,Math.PI*2,Math.PI/2,Math.PI/2),{m:B(0,0,0,0,0,0,1.25,.42,.5),color:y=>y.y>-.05?[.55,.4,.28]:[.4,.3,.22],tip:()=>1}),Dt.add(new ut(.16,.05,.9),{m:B(.1,-.08,0),color:D(.5,.4,.3),tip:()=>1}),Dt.add(new ut(.16,.05,.75),{m:B(-.6,-.08,0),color:D(.5,.4,.3),tip:()=>1}),Dt.add(new ne(.025,.025,2.2,5),{m:B(.2,0,.1,0,.3,1.45),color:D(.55,.45,.32),tip:()=>0});let Pt={value:1},Kt=jn({...t,uFrost:{value:0}},Pt,{color:13812656,snowMask:!0,snowBias:.12,grain:.02}),mt=jn({...t,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0}},Pt,{color:14470585,grain:.016}),At=jn({...t,uFrost:{value:0}},Pt,{color:13812656,snowMask:!0,side:Wn}),It=new Fn({color:1315860}),ae=new Fn({color:11122624,transparent:!0,opacity:.16,depthWrite:!1}),U=new Cn;U.position.set(Je.x,Je.y,Je.z),U.rotation.y=Je.yaw,U.scale.setScalar(s);let de=new Ce(v.geometry(),Kt);de.castShadow=!0,de.receiveShadow=!0;let oe=new Ce(R.geometry(),mt);oe.receiveShadow=!0;let w=new Ce(E.geometry(),It),g=new Ce(A.geometry(),ae);g.renderOrder=2;let H=new Ce(dt.geometry(),Kt);H.castShadow=!0;let $=new Cn;$.position.set(h+.02,.1,o/2),$.add(H);let Q=new Ce(Dt.geometry(),At);Q.castShadow=!0,Q.position.set(.9,0,b+p-2.5),Q.rotation.y=.12;let Lt=new Fn({color:16752704,transparent:!0,opacity:.85,blending:Fi,depthWrite:!1}),Nt=[[-.18,.28],[.12,.34],[0,.42],[.25,.22]].map(([y,L])=>{let Y=new Ce(new dn(.09,1,7,1,!0).translate(0,.5,0),Lt);return Y.position.set(f.x+y,.3,-Bt+.42),Y.userData.h=L,U.add(Y),Y});U.add(de,oe,w,g,$,Q),i.add(U),U.updateMatrixWorld(!0);let it=ud({group:U,mats:{inn:mt,glow:It},camera:n,U:e}),ct=new Ui(16752728,0,46,1.4);ct.position.copy(new I(f.x,.9,-Bt+1.1)).applyAxisAngle(new I(0,1,0),Je.yaw).multiplyScalar(s).add(U.position),i.add(ct);let Ct=ct.position.clone(),ee=(()=>{let L=new rn,Y=new Float32Array(90*3),at=new Float32Array(90);for(let wt=0;wt<90;wt++)at[wt]=wt/90;L.setAttribute("position",new un(Y,3)),L.setAttribute("aSeed",new un(at,1));let bt=new on({transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new le(13224393)},uSize:{value:70}},vertexShader:`
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
        }`}),Rt=new ps(L,bt);return Rt.frustumCulled=!1,Rt.position.copy(U.localToWorld(Tt.clone())),i.add(Rt),Rt})(),zt=(y,L)=>{let Y=(y-Je.x)/s,at=(L-Je.z)/s,bt=Math.cos(Je.yaw),Rt=Math.sin(Je.yaw);return[Y*bt-at*Rt,Y*Rt+at*bt]},Ht=(y,L)=>{let Y=Math.cos(Je.yaw),at=Math.sin(Je.yaw);return[Je.x+(y*Y+L*at)*s,Je.z+(-y*at+L*Y)*s]},ce=[[-r/2-.3,r/2+.3,-o/2-a,-o/2+a],[-r/2-a,-r/2+a,-o/2-.3,o/2+.3],[r/2-a,r/2+a,-o/2-.3,o/2+.3],[-r/2-.3,h,o/2-a,o/2+a],[m,r/2+.3,o/2-a,o/2+a],[ye,lt,pt,St],[lt+.08,lt+.82,pt,pt+.5],[rt.x-.65,rt.x+.65,rt.z-.43,rt.z+.43],[rt.x-.25,rt.x+.25,rt.z-.95,rt.z-.45],[rt.x-.25,rt.x+.25,rt.z+.45,rt.z+.95],[fe.x-1,fe.x+1,-Bt-.1,-Bt+1],[fe.x-1.55,fe.x-.95,-Bt,-Bt+.65],[-Ft,-Ft+.3,.25,1.55],[.8,2.15,o/2+.26,o/2+.7],[-r/2-.95,-r/2-.2,-1.75,0],[r/2+.2,r/2+.9,o/2-.8,o/2-.1],[-r/2-1.75,-r/2-1.05,1.05,1.75],[_t+.15,_t+.35,o/2+2.1,o/2+2.3],[Mt-.35,Mt-.15,o/2+2.1,o/2+2.3]];ce.push([ie.x0-.07,ie.x0+.02,ie.bottom-.05,1.5],[ie.x0,ie.x1,ie.bottom-.09,ie.bottom],[-3.2,-2.5,o/2+1.65,o/2+2.15],[Mt+.5,Mt+.7,o/2+2.8,o/2+3]);let Jt={x:-.4,z:-2.6},Se=[[Xt.x0-1,Xt.x1+1,Xt.z0-1,Xt.z0+.45],[Xt.x0-1,Xt.x0+.45,Xt.z0-1,Xt.z1+1],[Xt.x1-.45,Xt.x1+1,Xt.z0-1,Xt.z1+1],[Xt.x0-1,Xt.x1+1,Xt.z1-.02,Xt.z1+1],[ie.x0-.06,ie.x1+.06,-.6,Xt.z1],[Jt.x-.95,Jt.x+.95,Jt.z-.48,Jt.z+.48],[Jt.x-.27,Jt.x+.27,Jt.z+.5,Jt.z+1.05],[-4.1,-3.1,-5.7,-4.7],[-1.5,-.5,-6.9,-5.9],[-2.75,-2.05,-6.35,-5.65],[-4.8,-4.4,-6.6,-6.2],[.86,1.54,-4.34,-3.66],[-6.1,-5.5,1.7,2.4],[4.25,4.95,Xt.z0+.42,Xt.z0+1]],k=[h,m,o/2-.1,o/2+.1],kt=[h-.06,h+.08,o/2-Et-.05,o/2],yt=(y,L,[Y,at,bt,Rt],wt)=>y>Y-wt&&y<at+wt&&L>bt-wt&&L<Rt+wt,N={open:!1,a:0,from:0,t0:-1e9},Ot=Ht((h+m)/2,o/2),vt=y=>y.feet===void 0?1e9:(y.feet-Je.y)/s,F=y=>y>-.7?"ground":y<-3.2?"study":"stairs",O=(y,L)=>y>ie.x0&&y<ie.x1&&L>ie.bottom&&L<ie.top,J=(y,L)=>y>Xt.x0&&y<Xt.x1&&L>Xt.z0&&L<Xt.z1,xt=(y,L)=>y>-r/2+a-.05&&y<r/2-a+.05&&L>-o/2+a&&L<o/2+a+.05,Vt=(y,L,Y,at)=>{let bt=[Ht(y,Y),Ht(L,Y),Ht(y,at),Ht(L,at)];return[Math.min(...bt.map(Rt=>Rt[0])),Math.max(...bt.map(Rt=>Rt[0])),Math.min(...bt.map(Rt=>Rt[1])),Math.max(...bt.map(Rt=>Rt[1]))]};return{group:U,study:it,feet:void 0,holeBox:Vt(-r/2+a,r/2-a,-o/2+a,o/2-a),studyBox:Vt(Xt.x0-.3,Xt.x1+.3,Xt.z0-.3,Xt.z1+.3),blocked(y,L,Y=0){let[at,bt]=zt(y,L);if(Math.abs(at)>Xt.x1+3||bt<Xt.z0-3||bt>o/2+4)return!1;let Rt=.17+Y/s,wt=F(vt(this));if(wt==="stairs")return at<ie.x0+Rt||at>ie.x1-Rt||bt>ie.top+.05;if(wt==="study"){if(!J(at,bt))return!0;for(let te of Se)if(yt(at,bt,te,Rt))return!0;return!1}if(Math.abs(at)>r/2+3||bt<-o/2-3)return!1;for(let te of ce)if(yt(at,bt,te,Rt))return!0;return!!(N.a<.5?yt(at,bt,k,Rt):yt(at,bt,kt,Rt*.6))},inside(y,L){let[Y,at]=zt(y,L);return Math.abs(Y)<r/2&&Math.abs(at)<o/2||J(Y,at)&&vt(this)<-1},floorAt(y,L){let[Y,at]=zt(y,L),bt=ge=>Je.y+ge*s,Rt=vt(this),wt=[];if(O(Y,at)?wt.push([Ms(at),!0]):xt(Y,at)&&wt.push([.12,!0]),J(Y,at)&&wt.push([Xt.floor,!0]),Y>-3.3&&Y<3.4&&at>=o/2+a+.05&&at<o/2+2.4&&wt.push([.2,!1]),Y>-2.25&&Y<-.35&&at>b-.3&&at<b+p&&wt.push([.24-(at-b)*.024,!1]),!wt.length)return null;let te=null;for(let ge of wt)ge[0]<=Rt+.6&&(!te||ge[0]>te[0])&&(te=ge);return te||(te=wt.reduce((ge,qe)=>qe[0]<ge[0]?qe:ge)),{y:bt(te[0]),under:te[1]}},door:{mesh:H,near(y,L){return Math.hypot(y-Ot[0],L-Ot[1])<13},get open(){return N.open},canToggle(y,L){if(!N.open)return!0;let[Y,at]=zt(y,L);return!yt(Y,at,[h-.1,m+.1,o/2-Et-.1,o/2+.25],.17)},toggle(y){return N.open=!N.open,N.from=N.a,N.t0=y,N.open}},update(y,L,Y,at){let bt=y.pCabin,Rt=bt>.01;Rt&&(this.syncT>Y-1500||(this.syncT=Y,it.sync()),it.update(L,Y)),it.lampLight.intensity=Rt?120*(.96+.04*Math.sin(L*3.1)):0,U.visible=Rt,ee.visible=Rt&&bt>.5,U.scale.setScalar(s*Math.max(.001,bt));let wt=Math.min(1,(Y-N.t0)/900),te=N.open?1-Math.pow(1-wt,3)*Math.cos(wt*3.2):1-Math.pow(1-wt,4);N.a=N.from+((N.open?1:0)-N.from)*te,$.rotation.y=N.a*1.72;let ge=Math.min(1,y.pGlow),qe=.86+.08*Math.sin(L*9.1+Math.sin(L*2.7)*2)+.06*Math.sin(L*23.3);It.color.setRGB(.07,.07,.075).lerp(new le(1.3,.8,.42),ge*qe),Nt.forEach((Ne,Ve)=>{let ze=Ne.userData.h*(.75+.35*Math.sin(L*(7+Ve*1.7)+Ve*2)*Math.sin(L*(3.1+Ve)));Ne.scale.set(1,Math.max(.05,ze*ge),1),Ne.visible=ge>.05}),Lt.opacity=.75*ge,ct.intensity=ge*bt*220*qe,ct.position.set(Ct.x+Math.sin(L*5.3)*.15,Ct.y+Math.sin(L*7.1)*.1,Ct.z),ee.material.uniforms.uColor.value.copy(y.fog).multiplyScalar(1.1).addScalar(.05),ee.material.uniforms.uOpacity.value=Math.min(bt,.35+ge*.5),Q.position.y=(at+.9+Math.sin(L*.9)*.15-Je.y)/s,Q.rotation.z=Math.sin(L*.7)*.03}}}var fd={rain:[1,1,1,1,1,1,.65,0,0,1,0,0,.75],frost:[1,1,0,.85,.7,1,.25,1,0,0,1,.55,0],mist:[1,1,1,1,1,1,.35,0,0,0,0,0,1],snow:[1,1,0,.3,.45,1,.6,0,0,0,1,1,0],night:[1,1,.9,1,1,1,1,0,0,0,0,0,.5],aurora:[1,1,0,.6,.6,1,1,1,0,0,.8,.75,0],ocean:[1,0,0,.7,0,0,0,0,1,0,0,0,.3]},Sc=["pRocks","pLogs","pFerns","pGrass","pReeds","pCabin","pGlow","pStones","pStacks","pRipples","pFrost","pSnowCover","pMoss"];function pd({scene:i,heightAt:t,U:e,snowColor:n,clear:s=[],camera:r}){let o=cd(20260707),a=(K,W)=>K+o()*(W-K),l={uTime:e.uTime,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0},uSnowC:n,uMossC:{value:new le("#4f6a3c")}},c={};Sc.forEach(K=>{c[K]={value:0}});let u=[],d=[],h=[],m=(K,W)=>Math.hypot(t(K+2,W)-t(K-2,W),t(K,W+2)-t(K,W-2))/(2*2),x=(K,W,gt,rt=1)=>{let Et=t(K-2,W)-t(K+2,W),Dt=t(K,W-2)-t(K,W+2),Pt=new I(Et*rt,2*2,Dt*rt).normalize();return new Be().setFromUnitVectors(new I(0,1,0),Pt).multiply(new Be().setFromAxisAngle(new I(0,1,0),gt))},b=(K,W)=>!s.some(gt=>Math.hypot(gt.x-K,gt.z-W)<gt.r),p=(K,W,{cast:gt=!1,receive:rt=!0}={})=>(K.castShadow=gt,K.receiveShadow=rt,i.add(K),u.push([K,W]),K),f=160,v=(K,W,gt,rt,dt)=>{let Et=new Map;gt.forEach(Pt=>{let Kt=Math.floor(Pt.p.x/f)+","+Math.floor(Pt.p.z/f);Et.has(Kt)||Et.set(Kt,[]),Et.get(Kt).push(Pt)});let Dt=new be;Et.forEach(Pt=>{let Kt=new hi(K,W,Pt.length);Pt.forEach((mt,At)=>{Dt.compose(mt.p,mt.q,mt.s),Kt.setMatrixAt(At,Dt)}),Kt.computeBoundingSphere(),p(Kt,rt,dt)})},R=(K,W,gt,rt)=>{let dt=null,Et=1e9;for(let Dt=0;Dt<900;Dt++){let Pt=o()*Math.PI*2,Kt=Math.sqrt(o())*gt,mt=K+Math.cos(Pt)*Kt,At=W+Math.sin(Pt)*Kt;rt(mt,At)&&Kt<Et&&(Et=Kt,dt={x:mt,z:At})}return dt||{x:K,z:W}},E={x:Je.x,z:Je.z};h.push({x:E.x,z:E.z,r:34});let A=R(-95,-258,50,(K,W)=>{let gt=t(K,W);return gt>9&&gt<32&&m(K,W)<.16});h.push({x:A.x,z:A.z,r:30});let T=(K,W)=>{let gt=new Ir(1,W),rt=gt.attributes.position,dt=new I;for(let Et=0;Et<rt.count;Et++){dt.fromBufferAttribute(rt,Et);let Dt=1+(_n(dt.x*1.6+K,dt.y*1.6,dt.z*1.6)-.5)*.55+(_n(dt.x*4+K,dt.y*4,dt.z*4)-.5)*.14;dt.multiplyScalar(Dt),dt.y=dt.y<-.25?-.25+(dt.y+.25)*.2:dt.y,dt.y*=.72,dt.x*=1.12,rt.setXYZ(Et,dt.x,dt.y,dt.z)}return new an().add(gt,{flat:!0,color:Et=>{let Dt=.5+_n(Et.x*3+K,Et.y*3,Et.z*3)*.28+Et.y*.12;return[Dt,Dt*.99,Dt*.95]}}).geometry()},P=jn(l,c.pRocks,{color:9277328,snowBias:.05}),_=[[],[],[]],C=[],D=(K,W,gt,rt,dt)=>{let Et=t(K,W);rt.push({p:new I(K,Et-gt*.12,W),q:x(K,W,o()*6.28,.6),s:new I(gt*a(.8,1.25),gt*a(.6,1.1),gt*a(.8,1.2))}),dt&&d.push({x:K,z:W,r:gt*1.05+1.2,key:"pRocks"})};for(let K=0,W=0;K<260&&W<2e4;W++){let gt=a(-560,560),rt=a(-560,230),dt=t(gt,rt);if(dt<-1.5||dt>75)continue;let Dt=o()<.25?a(4,9):a(1.2,3.4);h.some(Pt=>Math.hypot(Pt.x-gt,Pt.z-rt)<Pt.r+Dt)||!b(gt,rt)||(D(gt,rt,Dt,_[K%3],Dt>2.2),K++)}for(let K=0,W=0;K<70&&W<9e3;W++){let gt=a(-260,260),rt=a(-260,160),dt=t(gt,rt);dt<-1.2||dt>1.5||h.some(Et=>Math.hypot(Et.x-gt,Et.z-rt)<Et.r)||!b(gt,rt)||(D(gt,rt,a(1.5,5),_[K%3],!0),K++)}for(let K=0,W=0;K<700&&W<2e4;W++){let gt=a(-480,480),rt=a(-480,200),dt=t(gt,rt);dt<-.6||dt>70||!b(gt,rt)||h.some(Et=>Math.hypot(Et.x-gt,Et.z-rt)<Et.r)||(D(gt,rt,a(.35,1),C,!1),K++)}_.forEach((K,W)=>v(T(W*17.3,2),P,K,"pRocks",{cast:!0})),v(T(5.1,1),P,C,"pRocks");let q=K=>{let W=.42+_n(K.x*9,K.y*2,K.z*2)*.22+Math.sin(Math.atan2(K.z,K.y)*9)*.04;return[W*1,W*.82,W*.66]},z=(()=>{let K=new an,W=new ne(1,.9,1,12,5,!0),gt=W.attributes.position,rt=new I;for(let Et=0;Et<gt.count;Et++){rt.fromBufferAttribute(gt,Et);let Dt=1+(_n(rt.x*3,rt.y*6,rt.z*3)-.5)*.18;gt.setXYZ(Et,rt.x*Dt,rt.y,rt.z*Dt)}W.computeVertexNormals(),K.add(W,{m:B(0,0,0,0,0,Math.PI/2),color:q});let dt=Et=>{let Dt=Math.hypot(Et.y,Et.z),Pt=.62+Math.sin(Dt*26)*.05-Dt*.12;return[Pt*1.05,Pt*.9,Pt*.72]};return K.add(new ms(.88,12),{m:B(.5,0,0,0,Math.PI/2,0),color:dt}),K.add(new ms(.98,12),{m:B(-.5,0,0,0,-Math.PI/2,0),color:dt}),K.add(new ne(.12,.2,.9,6,1),{m:B(.15,.55,.3,.5,0,-.5,1,1,1),color:q}),K.geometry()})(),et=(()=>{let K=new an,W=new ne(.85,1,1,12,3,!0),gt=W.attributes.position,rt=new I;for(let dt=0;dt<gt.count;dt++){rt.fromBufferAttribute(gt,dt);let Et=Math.atan2(rt.z,rt.x),Dt=rt.y<-.3?1+.35*Math.pow(Math.max(0,Math.sin(Et*5)),2):1,Pt=rt.y>.45?(_n(rt.x*4,0,rt.z*4)-.5)*.3:0;gt.setXYZ(dt,rt.x*Dt,rt.y+Pt,rt.z*Dt)}return W.computeVertexNormals(),K.add(W,{m:B(0,.5,0),color:dt=>q(dt)}),K.add(new ms(.85,12),{m:B(0,.98,0,-Math.PI/2,0,0),color:dt=>{let Et=Math.hypot(dt.x,dt.z),Dt=.6+Math.sin(Et*22)*.05;return[Dt*1.05,Dt*.9,Dt*.7]}}),K.geometry()})(),G=jn(l,c.pLogs,{color:12036506}),Z=dd({scene:i,shared:l,U:e,camera:r}),tt=(()=>{let K=new an,W=Dt=>{let Pt=new ut(1,1,1,3,5,2),Kt=Pt.attributes.position,mt=new I;for(let At=0;At<Kt.count;At++){mt.fromBufferAttribute(Kt,At);let It=1-(mt.y+.5)*.3,ae=1+(_n(mt.x*3+Dt,mt.y*3,mt.z*3)-.5)*.35,U=mt.y>.35?1-(mt.y-.35)*1.2*Math.hypot(mt.x,mt.z):1;Kt.setXYZ(At,mt.x*It*ae*U,mt.y+(mt.y>.4?(_n(mt.x*5,Dt,mt.z*5)-.5)*.15:0),mt.z*It*ae*U)}return Pt},gt=Dt=>Pt=>{let Kt=.5+_n(Pt.x*2+Dt,Pt.y*2,Pt.z*2)*.22;return[Kt*.97,Kt,Kt*.98]},rt=11,dt=15;for(let Dt=0;Dt<rt;Dt++){let Pt=Dt/rt*Math.PI*2+a(-.06,.06),Kt=Math.cos(Pt)*dt,mt=Math.sin(Pt)*dt,At=a(5,9.5),It=Dt===4?.35:a(-.06,.06),ae=t(A.x+Kt,A.z+mt)-t(A.x,A.z);K.add(W(Dt*3.7),{m:B(Kt,ae+At/2-.6,mt,It,-Pt+Math.PI/2,a(-.05,.05),a(2.2,3.2),At,a(1,1.5)),flat:!0,color:gt(Dt)}),d.push({x:A.x+Kt,z:A.z+mt,r:3.6,key:"pStones"})}K.add(W(40),{m:B(3,.4,-2,.1,.7,Math.PI/2-.05,2.6,7,1.4),flat:!0,color:gt(40)}),K.add(W(50),{m:B(-2,.5,2.5,0,.3,0,4.5,1.5,2.6),flat:!0,color:gt(50)}),d.push({x:A.x+3,z:A.z-2,r:4.5,key:"pStones"},{x:A.x-2,z:A.z+2.5,r:4,key:"pStones"});let Et=new Ce(K.geometry(),jn(l,c.pStones,{color:10132636}));return Et.position.set(A.x,t(A.x,A.z),A.z),p(Et,"pStones",{cast:!0})})(),ot=(K,W)=>{let gt=new ne(W?.85:.5,1.15,1,12,10,!1),rt=gt.attributes.position,dt=new I;for(let Et=0;Et<rt.count;Et++){dt.fromBufferAttribute(rt,Et);let Dt=dt.y+.5,Pt=1+(_n(dt.x*2+K,dt.y*5,dt.z*2)-.5)*.6+Math.sin(dt.y*26+K)*.04;!W&&Dt>.55&&(Pt*=1-(_n(K,dt.y*3,1)-.3)*.5);let Kt=dt.y>.49&&!W?(_n(dt.x*3+K,0,dt.z*3)-.5)*.25:0,mt=W?0:Dt*Dt*.18*Math.sin(K);rt.setXYZ(Et,dt.x*Pt+mt,dt.y+Kt,dt.z*Pt)}return gt},Tt=new an,ft={x:132,z:-178};[[-125,-135,9,70],[-150,-95,5,36],[-170,-70,7,48],[-82,-215,8,95],[52,-255,10,58],[72,-240,4.5,30],[195,-105,6,40],[-30,-300,9,80],[ft.x,ft.z,30,22]].forEach(([K,W,gt,rt],dt,Et)=>{let Dt=dt===Et.length-1,Pt=11+rt*.5-.1;Tt.add(ot(dt*9.1,Dt),{m:B(K,Pt-rt/2-8,W,0,dt,0,gt,rt+16,gt*a(.8,1.1)),flat:!0,color:Kt=>{let mt=.42+_n(Kt.x*.2,Kt.y*.6,Kt.z*.2)*.24,At=Kt.y>Pt-1.5?.12:0;return[mt-At*.4,mt+At*.3,mt*.95-At*.3]}}),d.push({x:K,z:W,r:gt*1.2+1.5,key:"pStacks"})});{let W=new I(ft.x,21.9,ft.z),gt=new ne(2.6,3.8,26,16,8,!1);Tt.add(gt,{m:B(W.x,W.y+13,W.z),color:rt=>Math.floor((rt.y-21.9)/6.5)%2?[.55,.22,.2]:[.92,.91,.88]}),Tt.add(new ne(4,4,.5,16),{m:B(W.x,W.y+26.2,W.z),color:()=>[.2,.2,.22]}),Tt.add(new ne(2,2,.6,12),{m:B(W.x,W.y+26.7,W.z),color:()=>[.2,.2,.22]}),Tt.add(new dn(2.6,2.6,12),{m:B(W.x,W.y+31.3,W.z),color:()=>[.25,.23,.24]}),Tt.add(new ut(7,4,5),{m:B(W.x+7,W.y+2,W.z+3),color:()=>[.85,.84,.8]}),Tt.add(new dn(5,2.6,4),{m:B(W.x+7,W.y+5.3,W.z+3,0,Math.PI/4,0,1,1,.75),color:()=>[.45,.25,.22]})}p(new Ce(Tt.geometry(),jn(l,c.pStacks,{color:11051942,sink:140})),"pStacks");let _t=new I(ft.x,11+22*.5-.1+28.5,ft.z),Mt=new Ce(new ne(1.8,1.8,3.2,12),new Fn({color:16769712,fog:!1}));Mt.position.copy(_t),p(Mt,"pStacks",{receive:!1});let re=new Cn;re.position.copy(_t);let Ft=new on({transparent:!0,depthWrite:!1,blending:Fi,side:Wn,fog:!1,uniforms:{uOpacity:{value:0}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uOpacity; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float t = clamp(-vY, 0.0, 1.0); float facing = abs(dot(normalize(vN), normalize(vV))); float a = pow(1.0 - t, 2.2) * smoothstep(0.0, 0.03, t) * pow(facing, 1.6); gl_FragColor = vec4(vec3(1.0, 0.9, 0.72) * a * uOpacity, 1.0); }"});[0,Math.PI].forEach(K=>{let W=new Ce(new dn(1,1,20,1,!0).translate(0,-.5,0),Ft);W.rotation.set(Math.PI/2,0,0),W.scale.set(8,230,8);let gt=new Cn;gt.rotation.y=K,gt.add(W),W.position.z=0,re.add(gt)}),i.add(re);let Bt=(K,W,gt,rt,dt,Et)=>{let Dt=new an,Pt=[];for(let mt=0;mt<K;mt++){let At=mt/K*Math.PI*2+o()*.7,It=a(W,gt),ae=a(.15,.55),U=o()*rt,de=Math.cos(At)*U,oe=Math.sin(At)*U,w=Math.cos(At)*ae,g=Math.sin(At)*ae,H=-Math.sin(At)*dt,$=Math.cos(At)*dt,Q=[de+w*It*.35,It*.55,oe+g*It*.35],Lt=[de+w*It,It*.92,oe+g*It];Pt.push([de-H,0,oe-$],[de+H,0,oe+$],[Q[0]+H*.6,Q[1],Q[2]+$*.6]),Pt.push([de-H,0,oe-$],[Q[0]+H*.6,Q[1],Q[2]+$*.6],[Q[0]-H*.6,Q[1],Q[2]-$*.6]),Pt.push([Q[0]-H*.6,Q[1],Q[2]-$*.6],[Q[0]+H*.6,Q[1],Q[2]+$*.6],Lt)}let Kt=gt;return Dt.tris(Pt,mt=>{let At=mt.y/Kt;return[Et[0]*(.55+.6*At),Et[1]*(.55+.6*At),Et[2]*(.55+.6*At)]},mt=>Math.pow(mt.y/Kt,1.5),new I(0,1,0)),Dt},fe=Bt(11,.9,1.8,.55,.07,[.62,.72,.42]).geometry(),ye=Bt(9,3.2,5.5,.5,.06,[.6,.66,.42]);[[.15,.1],[-.2,.25],[.05,-.3]].forEach(([K,W],gt)=>{let rt=4.6+gt*.5;ye.add(new ne(.03,.03,rt,4),{m:B(K,rt/2,W),color:()=>[.5,.52,.35],tip:()=>.3}),ye.add(new ne(.11,.11,.7,6),{m:B(K,rt+.2,W),color:()=>[.36,.26,.18],tip:()=>.6})});let lt=ye.geometry(),pt=(()=>{let K=new an,W=[],gt=8;for(let rt=0;rt<gt;rt++){let dt=rt/gt*Math.PI*2+o()*.5,Et=a(1.6,2.3),Dt=a(.7,1.1),Pt=[Math.cos(dt),Math.sin(dt)],Kt=[-Math.sin(dt),Math.cos(dt)],mt=It=>[Pt[0]*Et*It,Dt*Math.sin(It*Math.PI*.75)-.25*It*It,Pt[1]*Et*It],At=9;for(let It=0;It<At;It++){let ae=It/At,U=(It+1)/At,de=(ae+U)/2,oe=mt(ae),w=mt(U),g=mt(de),H=.34*Math.sin(Math.PI*Math.min(1,de*1.1))*(1-de*.4)+.03,$=Kt[0]*H,Q=Kt[1]*H;W.push(oe,w,[g[0]+$,g[1]-.06,g[2]+Q]),W.push(oe,[g[0]-$,g[1]-.06,g[2]-Q],w)}}return K.tris(W,rt=>{let dt=Math.hypot(rt.x,rt.z)/2.3;return[.6+dt*.3,.74+dt*.32,.42+dt*.16]},rt=>Math.hypot(rt.x,rt.z)/2.3,new I(0,1,0)),K.geometry()})(),St=(K,W)=>jn(l,c[K],{sway:W,side:Wn,color:16777215,snowBias:-1,softBack:!0});return{shared:l,show:c,groups:u,solids:d,zones:h,cabinAt:E,circleAt:A,cabin:Z,blockedAt(K,W,gt,rt){for(let dt of d){if(rt[dt.key]<.5)continue;let Et=dt.x-K,Dt=dt.z-W,Pt=dt.r+gt;if(Et*Et+Dt*Dt<Pt*Pt)return!0}return rt.pCabin>.5&&Z.blocked(K,W,gt)},floorAt(K,W,gt){return gt.pCabin>.5?Z.floorAt(K,W):null},plant(K,W=0){let gt=(mt,At,It)=>K.some(ae=>{let U=ae.p.x-mt,de=ae.p.z-At;return U*U+de*de<It*It}),rt=(mt,At,It=0)=>h.some(ae=>Math.hypot(ae.x-mt,ae.z-At)<ae.r+It),dt=[],Et=[];for(let mt=0,At=0;mt<70&&At<8e3;At++){let It=K[Math.floor(o()*K.length)];if(!It)break;let ae=o()*6.28,U=a(7,20),de=It.p.x+Math.cos(ae)*U,oe=It.p.z+Math.sin(ae)*U,w=t(de,oe);if(w<1.5||w>68||rt(de,oe,10))continue;let g=a(9,18),H=a(.8,1.4),$=o()*6.28,Q=Math.cos($)*g/2,Lt=-Math.sin($)*g/2;if(gt(de,oe,6)||gt(de+Q,oe+Lt,4)||gt(de-Q,oe-Lt,4))continue;let Nt=t(de+Q,oe+Lt),it=t(de-Q,oe-Lt),ct=new Be().setFromEuler(new An(o()*6.28,$,Math.atan2(Nt-it,g),"YZX"));dt.push({p:new I(de,(Nt+it)/2+H*.55,oe),q:ct,s:new I(g,H,H)});for(let Ct=-.5;Ct<=.5;Ct+=.25)d.push({x:de+Q*2*Ct,z:oe+Lt*2*Ct,r:H+1.6,key:"pLogs"});mt++}for(let mt=0,At=0;mt<90&&At<8e3;At++){let It=K[Math.floor(o()*K.length)];if(!It)break;let ae=o()*6.28,U=a(6,16),de=It.p.x+Math.cos(ae)*U,oe=It.p.z+Math.sin(ae)*U,w=t(de,oe);if(w<1.5||w>70||gt(de,oe,5)||rt(de,oe))continue;let g=a(.9,1.7);Et.push({p:new I(de,w-.4,oe),q:x(de,oe,o()*6.28,.4),s:new I(g,a(1.4,3.2),g)}),d.push({x:de,z:oe,r:g+1.3,key:"pLogs"}),mt++}v(z,G,dt,"pLogs",{cast:!0}),v(et,G,Et,"pLogs",{cast:!0});let Dt=[];for(let mt=0;Dt.length<5200&&mt<6e4;mt++){let At=a(-470,470),It=a(-470,210),ae=t(At,It);if(ae<W+.6||ae>66||!b(At,It)||rt(At,It)||_n(At*.03,0,It*.03)<.42)continue;let U=a(1.2,2.6);Dt.push({p:new I(At,ae-.15,It),q:x(At,It,o()*6.28,.5),s:new I(U,U*a(.8,1.3),U)})}v(fe,St("pGrass",.05),Dt,"pGrass");let Pt=[];for(let mt=0;Pt.length<1100&&mt<2e4;mt++){let At=K[Math.floor(o()*K.length)];if(!At)break;let It=o()*6.28,ae=a(2.5,13),U=At.p.x+Math.cos(It)*ae,de=At.p.z+Math.sin(It)*ae,oe=t(U,de);if(oe<1||oe>70||rt(U,de))continue;let w=a(1.6,3.4);Pt.push({p:new I(U,oe-.1,de),q:x(U,de,o()*6.28,.5),s:new I(w,w*a(.8,1.1),w)})}v(pt,St("pFerns",.03),Pt,"pFerns");let Kt=[];for(let mt=0;Kt.length<700&&mt<9e4;mt++){let At=a(-280,280),It=a(-280,170),ae=t(At,It);if(ae<-1.4||ae>1.2||!b(At,It)||rt(At,It,-6)||_n(At*.05,3,It*.05)<.4)continue;let U=a(1.1,1.9);Kt.push({p:new I(At,ae-.2,It),q:new Be().setFromAxisAngle(new I(0,1,0),o()*6.28),s:new I(U,U*a(.8,1.2),U)})}v(lt,St("pReeds",.012),Kt,"pReeds")},update(K,W,gt,rt){for(let dt of Sc)c[dt].value=K[dt];l.uSnowCover.value=K.pSnowCover,l.uMoss.value=K.pMoss,l.uFrost.value=K.pFrost;for(let[dt,Et]of u)dt.visible=K[Et]>.01;Z.update(K,W,performance.now(),rt),Mt.material.color.setRGB(1.6,1.4,1.05),Mt.position.y=_t.y-(1-K.pStacks)*140,re.position.y=Mt.position.y,re.rotation.y=W*.45,re.visible=K.pStacks>.5,Ft.uniforms.uOpacity.value=Math.max(0,K.pStacks-.5)*.5},blocked(K,W){return h.some(gt=>Math.hypot(gt.x-K,gt.z-W)<gt.r)}}}function md(i,t){let n=new zr().copy(new hn(1,1).rotateX(-Math.PI/2)),s=new Float32Array(320*3);for(let a=0;a<320;a++)s[a*3]=Math.random()*120-60,s[a*3+1]=Math.random(),s[a*3+2]=Math.random()*120-60;n.setAttribute("aOff",new Zi(s,3)),n.instanceCount=320;let r=new on({transparent:!0,depthWrite:!1,fog:!0,uniforms:fc.merge([$t.fog,{uOpacity:{value:0},uCam:{value:new I},uWater:{value:0}}]),vertexShader:`
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
      }`});r.uniforms.uTime=t.uTime;let o=new Ce(n,r);return o.frustumCulled=!1,i.add(o),{update(a,l,c){r.uniforms.uOpacity.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uWater.value=c,o.visible=a>.01}}}function gd(i,t){let n=new hn(1,1).rotateX(-Math.PI/2),s=new Zi(new Float32Array(90).fill(-1e5),1);s.setUsage(Al),n.setAttribute("aBorn",s);let r=new on({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uTime:t.uTime,uColor:{value:new le(7240328)},uShow:{value:0}},vertexShader:`
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
      }`}),o=new hi(n,r,90);o.frustumCulled=!1;let a=new be;a.makeScale(0,0,0);for(let m=0;m<90;m++)o.setMatrixAt(m,a);i.add(o);let l=0,c=1,u=new Be,d=new I(1.15,1,2.3),h=new I;return{mesh:o,place(m,x,b,p,f){c=-c,h.set(m+Math.cos(p)*.9*c,x+.45,b-Math.sin(p)*.9*c),u.setFromUnitVectors(new I(0,1,0),f).multiply(new Be().setFromAxisAngle(new I(0,1,0),p)),a.compose(h,u,d),o.setMatrixAt(l,a),o.instanceMatrix.needsUpdate=!0,s.array[l]=t.uTime.value,s.needsUpdate=!0,l=(l+1)%90},update(m){r.uniforms.uShow.value=m,o.visible=m>.01}}}(()=>{"use strict";let i=document.getElementById("bg");if(!i)return;let t;try{t=new _c({canvas:i,antialias:!0,powerPreference:"low-power"})}catch{document.documentElement.classList.add("no-webgl"),window.MEOW_BG={scenes:[],setScene(X){document.documentElement.setAttribute("data-scene",X)},setMotion(){},start(){}};return}t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=Vr,t.shadowMap.enabled=!0,t.shadowMap.type=Ea,t.toneMappingExposure=1;let e=new qs,n=new wn(50,1,.5,3e3),s=new Gr,r=(S,X)=>{let st=Math.sin(S*127.1+X*311.7)*43758.5453;return st-Math.floor(st)},o=(S,X)=>{let st=Math.floor(S),Gt=Math.floor(X),Ut=S-st,Wt=X-Gt,pe=Ut*Ut*(3-2*Ut),ve=Wt*Wt*(3-2*Wt),we=r(st,Gt),me=r(st+1,Gt),Me=r(st,Gt+1),_e=r(st+1,Gt+1);return we+(me-we)*pe+(Me-we)*ve+(we-me-Me+_e)*pe*ve},a=(S,X,st=5)=>{let Gt=0,Ut=.5,Wt=1;for(let pe=0;pe<st;pe++)Gt+=Ut*o(S*Wt,X*Wt),Wt*=2.03,Ut*=.5;return Gt},l=(S,X)=>{let st=0,Gt=.5,Ut=1;for(let Wt=0;Wt<5;Wt++)st+=Gt*(1-Math.abs(o(S*Ut,X*Ut)*2-1)),Ut*=2.1,Gt*=.5;return st},c=(S,X,st)=>{let Gt=Math.min(1,Math.max(0,(st-S)/(X-S)));return Gt*Gt*(3-2*Gt)},u=(S,X)=>S+Math.random()*(X-S),d=(S,X)=>{let st=Math.hypot(S*.75,X+20),Gt=c(55,240,st),Ut=(a(S*.006+3,X*.006+7)-.45)*46*(.25+Gt);Ut+=Math.pow(c(120,650,-X),1.3)*l(S*.0028,X*.0028)*260,Ut+=c(160,520,Math.abs(S))*a(S*.004,X*.004+11)*130,Ut-=(1-Gt)*9,Ut+=(a(S*.035+17,X*.035+5,2)-.5)*3.2*(.3+Gt);{let Me=Math.min(1,Math.max(0,((S-205)*-113+(X- -130)*14)/12965)),_e=Math.hypot(S-(205+-113*Me),X-(-130+14*Me)),Ge=c(34,12,_e)*c(1.04,.9,Me),en=4.6+(a(S*.05,X*.05,2)-.5)*1.6-Me*.6;Ge>0&&(Ut=Ut+(Math.max(Ut,en)-Ut)*Ge)}let Wt=Math.hypot(S-Je.x,X-Je.z);Wt<36&&(Ut+=(Je.y-.12-Ut)*c(36,24,Wt));{let pe=(X-Je.z)/Je.S,ve=-(S-Je.x)/Je.S,we=Math.max(Xt.x0-pe,pe-Xt.x1,0),me=Math.max(Xt.z0-ve,ve-Xt.z1,0),Me=Math.hypot(we,me)*Je.S;Me<16&&(Ut=Math.max(Ut,Ut+(Je.y-.12-Ut)*c(16,5,Me)))}return Ut},h={uTime:{value:0},uTop:{value:new le},uHorizon:{value:new le},uBottom:{value:new le},uSunColor:{value:new le},uSunDir:{value:new I(0,.2,-1)},uSunSize:{value:0},uStars:{value:0},uAurora:{value:0},uAur1:{value:new le},uAur2:{value:new le}},m=new Ce(new fn(1400,48,24),new on({uniforms:h,side:Rn,depthWrite:!1,fog:!1,vertexShader:`
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
        }`}));e.add(m);let x=new Ur(16777215,4473924,1),b=new Br(16777215,1);e.add(x,b,b.target),e.fog=new br(13421772,.004);let p={uLow:{value:new le},uHigh:{value:new le},uSnow:{value:new le},uSnowLine:{value:100},uHole:{value:new tn(1e9,1e9,1e9,1e9)}},f=new tn(1e9,1e9,1e9,1e9),v=new hn(2200,1800,300,245);v.rotateX(-Math.PI/2),v.translate(0,0,-400);{let S=v.attributes.position;for(let X=0;X<S.count;X++)S.setY(X,d(S.getX(X),S.getZ(X)));v.computeVertexNormals()}let R=new Si({color:16777215});R.onBeforeCompile=S=>{Object.assign(S.uniforms,p),S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)};let E=new Ce(v,R);E.receiveShadow=!0,e.add(E);let A=(()=>{let S=document.createElement("canvas");S.width=S.height=256;let X=S.getContext("2d"),st=X.createImageData(256,256);for(let Ut=0;Ut<256;Ut++)for(let Wt=0;Wt<256;Wt++){let pe=a(Wt/22,Ut/7,4),ve=a(Wt/22+.6,Ut/7,4),we=a(Wt/22,Ut/7+.6,4),me=(Ut*256+Wt)*4;st.data[me]=128+(pe-ve)*300,st.data[me+1]=128+(pe-we)*300,st.data[me+2]=255,st.data[me+3]=255}X.putImageData(st,0,0);let Gt=new Ji(S);return Gt.wrapS=Gt.wrapT=Hs,Gt.repeat.set(60,60),Gt})(),T=new Dr({color:7829367,roughness:.3,metalness:.35,normalMap:A,normalScale:new Te(.35,.35)}),P={uStudy:{value:new tn(1e9,1e9,1e9,1e9)}};T.onBeforeCompile=S=>{Object.assign(S.uniforms,P),S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ; uniform vec4 uStudy;`).replace("#include <clipping_planes_fragment>",`if (vWXZ.x > uStudy.x && vWXZ.x < uStudy.y && vWXZ.y > uStudy.z && vWXZ.y < uStudy.w) discard;
#include <clipping_planes_fragment>`)};let _=new Ce(new hn(4e3,4e3).rotateX(-Math.PI/2),T);e.add(_);let C={uTree:{value:1},uTime:h.uTime},D=(()=>{let S=new an,X=new ne(.05,.16,2.9,8,5,!0).translate(0,1.45,0);{let Ut=X.attributes.position,Wt=new I;for(let pe=0;pe<Ut.count;pe++){Wt.fromBufferAttribute(Ut,pe);let ve=Math.atan2(Wt.z,Wt.x),we=Wt.y<.4?1+(.4-Wt.y)*2.6*(.55+.45*Math.max(0,Math.sin(ve*4+1))):1,me=Math.sin(Wt.y*1.7)*.03;Ut.setXYZ(pe,Wt.x*we+me,Wt.y,Wt.z*we)}}S.add(X,{color:Ut=>{let Wt=.42+.16*o(Ut.y*7,Math.atan2(Ut.z,Ut.x)*2.5);return[Wt*1.35,Wt*.98,Wt*.72]},normal:(Ut,Wt)=>Wt.set(Ut.x,.12,Ut.z).normalize()});let st=6,Gt=0;for(let Ut=0;Ut<st;Ut++){let Wt=Ut/(st-1),pe=1.1-Wt*.8,ve=1.02-Wt*.42,we=.5+Wt*2.5,me=5+Ut%3,Me=Ut*1.93,_e=(qt,De)=>{let Ke=qt.attributes.position,ke=new I;for(let pn=0;pn<Ke.count;pn++){ke.fromBufferAttribute(Ke,pn);let mn=Math.hypot(ke.x,ke.z);if(mn<.001)continue;let yn=Math.atan2(ke.z,ke.x),En=Math.pow(.5+.5*Math.sin(yn*me+Me),2),Ri=.82+.32*En+.06*Math.sin(yn*17+Ut*3)+.04*Math.sin(yn*31+Ut),cr=mn/pe,oo=(.1+.16*En)*pe*cr*cr;Ke.setXYZ(pn,ke.x*Ri,ke.y-oo-(De?.02:0),ke.z*Ri)}},Ge=new dn(pe,ve,14,3,!0);_e(Ge,!1),Ge.translate(0,we+ve/2,0),S.add(Ge,{color:qt=>{let De=(qt.y-we)/ve,ke=.55+.5*Math.min(1,Math.hypot(qt.x,qt.z)/pe)+.22*De+.08*(r(qt.x*9.1,qt.z*7.3+qt.y)-.5)+Ut*.03;return[ke*.98,ke,ke*.94]},normal:(qt,De)=>{let Ke=Math.hypot(qt.x,qt.z);De.set(qt.x,Ke*.55+.32,qt.z).normalize()},tip:qt=>{let De=(qt.y-we)/ve,Ke=Math.atan2(qt.z,qt.x),ke=.5+.5*Math.sin(Ke*me+Me);return Math.min(1,Math.max(0,(De-.08)*1.5)*(.45+.55*ke)+.25*r(qt.x*5.3,qt.z*4.1))}});let en=new dn(pe*.97,ve*.38,14,1,!0);_e(en,!0),en.translate(0,we+ve*.19-.02,0),S.add(en,{flip:!0,color:qt=>{let Ke=.42+.3*Math.min(1,Math.hypot(qt.x,qt.z)/pe);return[Ke*.95,Ke,Ke*.9]},normal:(qt,De)=>De.set(qt.x*.3,-1,qt.z*.3).normalize()}),Gt=we+ve}return S.add(new dn(.05,.5,5,1,!0).translate(0,Gt+.18,0),{color:()=>[1,1.02,.95],tip:()=>.7}),S.geometry()})(),q=[[0,105],[0,140],[-38,112],[24,78],[0,92],[30,102],[0,125]].map(([S,X])=>({x:S,z:X,r:42})),z=pd({scene:e,heightAt:d,U:h,snowColor:p.uSnow,clear:q,camera:n}),et=jn({...z.shared,uMoss:{value:0},uFrost:z.shared.uSnowCover},C.uTree,{sway:.022,color:3358771,snowBias:-.3,crisp:!0}),G=1400,Z=[],tt=new le(1,1,1),ot=new hi(D,et,G);{let S=new be,X=new Be,st=new I,Gt=new I,Ut=new le,Wt=0,pe=0;for(;Wt<G&&pe++<6e4;){let ve=u(-650,650),we=u(-700,260),me=d(ve,we);if(me<3||me>85||a(ve*.02,we*.02,3)<.42||z.blocked(ve,we))continue;let Me=u(2,4.6);Gt.set(ve,me-.4,we),st.set(Me*u(.8,.95),Me*u(1.5,2.1),Me*u(.8,.95)),X.setFromAxisAngle(new I(0,1,0),u(0,Math.PI*2));let _e=u(.82,1.12);Ut.setRGB(_e,_e*u(.97,1.03),_e*u(.94,1)),Z.push({p:Gt.clone(),s:st.clone(),q:X.clone(),c:Ut.clone()}),S.compose(Gt,X,st),ot.setColorAt(Wt,Ut),ot.setMatrixAt(Wt++,S)}ot.count=Wt}ot.castShadow=!0,ot.receiveShadow=!0,e.add(ot),z.plant(Z,0);let Tt=(()=>{let S=new an,X=(st,Gt)=>r(st*3.17+Gt,st*1.91-Gt*2.3);for(let st=0;st<14;st++){let Gt=st%5,Ut=Gt/5,Wt=1.1-Ut*.8,pe=.5+Ut*2.5,ve=st*2.39996+X(st,1)*.6,we=Wt*(.62+.28*X(st,2)),me=Math.cos(ve)*we,Me=Math.sin(ve)*we,_e=.14+.16*X(st,3),Ge=.11+.05*X(st,4),en=pe-.2*Wt*(we/Wt)*(we/Wt);S.add(new ne(.006,.008,_e,4,1),{m:new be().makeTranslation(me,en-_e/2,Me),color:()=>[.35,.33,.3]});let qt=new fn(Ge,10,7),De=qt.attributes.position;for(let ke=0;ke<De.count;ke++){let pn=De.getY(ke);De.setY(ke,(pn<0?pn*1.25:pn)*.5)}qt.computeVertexNormals();let Ke=.6+.18*X(st,5);S.add(qt,{m:new be().makeTranslation(me,en-_e-Ge*.5,Me),color:ke=>{let pn=.85+.25*Math.max(0,ke.y-(en-_e-Ge*.5))/Ge;return[Ke*pn,Ke*pn,Ke*pn*.98]}})}return S.geometry()})(),ft=jn({...z.shared,uMoss:{value:0},uFrost:{value:0}},C.uTree,{sway:.022,color:14211288}),_t=new hi(Tt,ft,ot.count),Mt=Z.map((S,X)=>r(X*.37,5.1)<.5);{let S=new be,X=new be().makeScale(0,0,0);Z.forEach((st,Gt)=>_t.setMatrixAt(Gt,Mt[Gt]?S.compose(st.p,st.q,st.s):X)),_t.computeBoundingSphere()}_t.castShadow=!0,e.add(_t);let re=md(e,h),Ft=gd(e,h),Bt=new Or(16772829,0,280,Il.degToRad(32),.7,1.35);Bt.castShadow=!1,Bt.shadow.mapSize.set(1024,1024),Bt.shadow.camera.near=.5,Bt.shadow.camera.far=280,Bt.shadow.bias=-.0012,Bt.shadow.normalBias=.06,e.add(Bt,Bt.target);let fe=new Ui(16753498,0,120,1.25);e.add(fe);let ye=new on({transparent:!0,depthWrite:!1,side:Rn,blending:Fi,fog:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new le(16773340)}},vertexShader:`
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
      }`}),lt=new dn(1,1,40,1,!0).translate(0,-.5,0).rotateX(-Math.PI/2),pt=new Ce(lt,ye);pt.frustumCulled=!1,pt.renderOrder=5,e.add(pt);let St={state:"off",torch:{on:!1,since:-1e9,level:0},lamp:{on:!1,since:-1e9,level:0},level:0,aim:new I(0,0,-1),swing:0,swingV:0,swingZ:0,swingZV:0,lastVX:0,lastVZ:0},K=(()=>{let S=document.createElement("canvas");S.width=256,S.height=128;let X=S.getContext("2d"),st=X.createRadialGradient(128,64,0,128,64,128);return st.addColorStop(0,"rgba(255,255,255,0.9)"),st.addColorStop(.5,"rgba(255,255,255,0.35)"),st.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=st,X.fillRect(0,0,256,128),new Ji(S)})(),W=Array.from({length:9},(S,X)=>{let st=new Fn({map:K,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),Gt=new Ce(new hn(u(380,620),u(70,120)),st);return Gt.position.set(u(-400,400),u(8,45),-60-X*70),Gt.userData.v=u(1.2,3.2)*(Math.random()<.5?-1:1),e.add(Gt),Gt}),gt=`
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);`,rt=2600,dt=new rn;{let S=new Float32Array(rt*6),X=new Float32Array(rt*2);for(let st=0;st<rt;st++){let Gt=u(-90,90),Ut=u(0,70),Wt=u(-140,40);S.set([Gt,Ut,Wt,Gt,Ut,Wt],st*6),X[st*2+1]=1}dt.setAttribute("position",new un(S,3)),dt.setAttribute("aEnd",new un(X,1))}let Et=new on({transparent:!0,depthWrite:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new le(14672870)}},vertexShader:`
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
      }`}),Dt=new Rr(dt,Et);Dt.frustumCulled=!1,e.add(Dt);let Pt=(S,X,st,Gt,Ut)=>{let Wt=new rn,pe=new Float32Array(S*3),ve=new Float32Array(S);for(let Me=0;Me<S;Me++)pe.set([u(-X[0],X[0]),u(X[1],X[2]),u(X[3],X[4])],Me*3),ve[Me]=Math.random();Wt.setAttribute("position",new un(pe,3)),Wt.setAttribute("aSeed",new un(ve,1));let we=new on({transparent:!0,depthWrite:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new le(Gt)},uSize:{value:Ut*t.getPixelRatio()}},vertexShader:st,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          ${gt}
          gl_FragColor = vec4(uColor, a * uOpacity * vA);
          #include <colorspace_fragment>
        }`}),me=new ps(Wt,we);return me.frustumCulled=!1,e.add(me),me},Kt=Pt(3200,[110,0,70,-160,40],`
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
    }`,16054008,3.2),mt=Pt(260,[160,1,14,-220,30],`
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
    }`,14275248,5),At=(S,X,st)=>new I(S,X,st),It={rain:{sat:0,skyTop:"#8f959a",skyHorizon:"#c6c9cb",skyBottom:"#8a8f93",fog:"#b7bbbe",fogDensity:.0042,low:"#6c7175",high:"#878c90",snowC:"#c9cccf",snowLine:170,water:0,waterC:"#6d7378",waterRough:.18,sunC:"#000000",sunDir:At(0,.3,-1),sunSize:0,lightC:"#e8e8e8",light:.55,lightDir:At(.3,.6,.2),hemiSky:"#cfd2d4",hemiGround:"#55595c",hemi:.95,treeC:"#3f4447",trees:.75,rain:1,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.55,cam:At(0,13,105),look:At(0,9,0)},frost:{sat:0,skyTop:"#d7d9db",skyHorizon:"#eceded",skyBottom:"#cfd1d3",fog:"#e3e4e5",fogDensity:.0068,low:"#a9adb0",high:"#c3c6c8",snowC:"#eeeff0",snowLine:90,water:0,waterC:"#b4b8bb",waterRough:.4,sunC:"#000000",sunDir:At(0,.3,-1),sunSize:0,lightC:"#ffffff",light:.45,lightDir:At(-.3,.8,.3),hemiSky:"#f0f0f0",hemiGround:"#8d9093",hemi:1.1,treeC:"#6f7477",trees:.35,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:At(0,34,140),look:At(0,16,-20)},mist:{sat:.55,skyTop:"#93a4b1",skyHorizon:"#d6dcdf",skyBottom:"#a9b5bd",fog:"#ccd4d8",fogDensity:.0047,low:"#56645c",high:"#77858d",snowC:"#e5e9eb",snowLine:95,water:0,waterC:"#7a8c95",waterRough:.22,sunC:"#efe7da",sunDir:At(.5,.35,-1),sunSize:.0016,lightC:"#f2ece2",light:.85,lightDir:At(.5,.6,-.4),hemiSky:"#d5dde2",hemiGround:"#4d5650",hemi:.8,treeC:"#34433b",trees:.95,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:At(-38,22,112),look:At(0,20,-40)},snow:{sat:.6,skyTop:"#a3afba",skyHorizon:"#e1e5e8",skyBottom:"#c9d1d7",fog:"#dde2e6",fogDensity:.0045,low:"#e7ebee",high:"#f2f4f6",snowC:"#fbfcfd",snowLine:-20,water:.5,waterC:"#c3ccd2",waterRough:.75,sunC:"#e9e6e0",sunDir:At(-.4,.3,-1),sunSize:.0014,lightC:"#f4f1ec",light:.7,lightDir:At(-.4,.5,.3),hemiSky:"#eef2f5",hemiGround:"#8a96a0",hemi:.95,treeC:"#36443f",trees:1,rain:0,snow:1,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.45,cam:At(24,11,78),look:At(0,12,-10)},night:{sat:.45,skyTop:"#04060d",skyHorizon:"#1a2238",skyBottom:"#0a0e18",fog:"#111727",fogDensity:.0032,low:"#3a4352",high:"#4a5262",snowC:"#8a93a3",snowLine:160,water:0,waterC:"#0e1421",waterRough:.1,sunC:"#d8d4c6",sunDir:At(-.45,.32,-1),sunSize:.0022,lightC:"#93a0bf",light:.16,lightDir:At(-.45,.5,-.6),hemiSky:"#26304a",hemiGround:"#07090f",hemi:.16,treeC:"#2c3a33",trees:.85,rain:0,snow:0,fire:.85,stars:1,aurora:0,aur1:"#000000",aur2:"#000000",mist:.25,cam:At(0,10,92),look:At(0,16,-40)},aurora:{sat:.65,skyTop:"#03060a",skyHorizon:"#122029",skyBottom:"#070c10",fog:"#0d161b",fogDensity:.0034,low:"#3b464c",high:"#4c575e",snowC:"#a9b5bb",snowLine:55,water:0,waterC:"#0c1418",waterRough:.08,sunC:"#000000",sunDir:At(0,.3,-1),sunSize:0,lightC:"#8fb1aa",light:.14,lightDir:At(.2,.6,-.8),hemiSky:"#1f3a3a",hemiGround:"#05080a",hemi:.18,treeC:"#2a3833",trees:.6,rain:0,snow:.22,fire:0,stars:.75,aurora:1,aur1:"#4f8f80",aur2:"#6f6595",mist:.15,cam:At(30,15,102),look:At(0,34,-80)},ocean:{sat:.7,skyTop:"#4a4e68",skyHorizon:"#d4a28b",skyBottom:"#7c6670",fog:"#c29d90",fogDensity:.0026,low:"#4a4652",high:"#5d5765",snowC:"#a69aa3",snowLine:200,water:11,waterC:"#585d77",waterRough:.14,sunC:"#ecd0b2",sunDir:At(0,.17,-1),sunSize:.0045,lightC:"#efcfb4",light:.95,lightDir:At(0,.2,-1),hemiSky:"#c9a6a0",hemiGround:"#3c3a4a",hemi:.7,treeC:"#2f2c35",trees:0,rain:0,snow:0,fire:0,stars:.15,aurora:0,aur1:"#000000",aur2:"#000000",mist:.35,cam:At(0,7,125),look:At(0,9,0)}};for(let S in It)Sc.forEach((X,st)=>{It[S][X]=fd[S][st]});let ae=["skyTop","skyHorizon","skyBottom","fog","low","high","snowC","waterC","sunC","lightC","hemiSky","hemiGround","treeC","aur1","aur2"],U=["sunDir","lightDir","cam","look"],de=S=>{let X={};for(let st in S)ae.includes(st)?X[st]=new le(S[st]):U.includes(st)?X[st]=S[st].clone():X[st]=S[st];return X},oe=S=>de(S),w=de(It.rain),g=oe(w),H=oe(w),$=0,Q=1,Lt=0,Nt="rain",it="full",ct=!1,Ct=!1,ee=1,zt=1,Ht=S=>S<.5?4*S*S*S:1-Math.pow(-2*S+2,3)/2,ce=S=>{for(let X in H)ae.includes(X)||U.includes(X)?w[X].copy(g[X]).lerp(H[X],S):w[X]=g[X]+(H[X]-g[X])*S},Jt=0,Se=()=>{let S=w;h.uTop.value.copy(S.skyTop),h.uHorizon.value.copy(S.skyHorizon),h.uBottom.value.copy(S.skyBottom),h.uSunColor.value.copy(S.sunC),h.uSunDir.value.copy(S.sunDir).normalize(),h.uSunSize.value=S.sunSize,h.uStars.value=S.stars,h.uAurora.value=S.aurora,h.uAur1.value.copy(S.aur1),h.uAur2.value.copy(S.aur2),e.fog.color.copy(S.fog),e.fog.density=S.fogDensity*(1+wt.focus*.35),S.pCabin>.5?(p.uHole.value.set(...z.cabin.holeBox),P.uStudy.value.set(...z.cabin.studyBox)):(p.uHole.value.copy(f),P.uStudy.value.copy(f)),p.uLow.value.copy(S.low),p.uHigh.value.copy(S.high),p.uSnow.value.copy(S.snowC),p.uSnowLine.value=S.snowLine,_.position.y=S.water,T.color.copy(S.waterC),T.roughness=S.waterRough,b.color.copy(S.lightC),b.intensity=S.light*2.2,b.position.copy(S.lightDir).multiplyScalar(300),x.color.copy(S.hemiSky),x.groundColor.copy(S.hemiGround),x.intensity=S.hemi*1.6,et.color.copy(S.treeC),C.uTree.value=S.trees,ot.visible=S.trees>.01,_t.visible=ot.visible,Et.uniforms.uOpacity.value=S.rain*(1-Jt),Dt.visible=S.rain*(1-Jt)>.01,Kt.material.uniforms.uOpacity.value=S.snow*(1-Jt),Kt.visible=S.snow*(1-Jt)>.01,mt.material.uniforms.uOpacity.value=S.fire,mt.visible=S.fire>.01;let X=S.pCabin>.5&&z.cabin.inside(n.position.x,n.position.z)?1:0;Jt+=(X-Jt)*.12,W.forEach(st=>{let Gt=Math.hypot(st.position.x-n.position.x,st.position.z-n.position.z);st.material.opacity=S.mist*.5*c(12,80,Gt)*(1-Jt),st.material.color.copy(S.fog),st.visible=S.mist>.01&&Jt<.99}),os.uSat.value=S.sat},k={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",S=>{k.x=S.clientX/innerWidth*2-1,k.y=S.clientY/innerHeight*2-1},{passive:!0});let kt=7.5,yt=24,N={px:0,pz:0,vx:0,vz:0,homing:!1,yaw:0,yawTo:0,pitch:0,pitchTo:0,ground:0,on:!1},Ot=new Set,vt={phase:0,amp:0,run:0,lastStep:0},F=70,O={y:0,v:0,air:!1},J=-1.1,xt=.9,Vt={x:-1,y:-1,inside:!1},y={on:!1,t0:0,dur:1,tx:0,tz:0,sy:0,ty:0,yaw0:0,yaw1:0,lift:10,y:0,roll:0},L=1/60,Y=new I,at=new I,bt=new I,Rt=new I(0,1,0),wt={focus:0,focusTo:0,pan:0,panTo:0,pulse:0},te=new I,ge=new I,qe=S=>{let X=it!=="full";k.sx+=(k.x-k.sx)*.035,k.sy+=(k.y-k.sy)*.035;let st=(X?0:1)*(1-c(0,35,Math.hypot(N.px,N.pz)));n.position.set(w.cam.x+Math.sin(S*.05)*3*st+k.sx*6*st,w.cam.y+Lt+Math.sin(S*.07)*.8*st-k.sy*2.5*st,w.cam.z),te.copy(w.look),te.x+=k.sx*3*st;let Gt=Math.hypot(N.px,N.pz);if(Gt>.01||Math.abs(N.yaw)>5e-4||Math.abs(N.pitch)>5e-4){Y.copy(w.look).sub(w.cam);let ve=Y.length();Y.normalize();let we=n.position.x+N.px,me=n.position.z+N.pz,Me=d(we,me);for(let qt=0;qt<6.28;qt+=1.57)Me=Math.max(Me,d(we+Math.cos(qt)*4,me+Math.sin(qt)*4));let _e=z.floorAt(we,me,w);Me=_e&&_e.under?_e.y:Math.max(Me,_.position.y,_e?_e.y:-1e9);let Ge=Me+kt;N.ground+=(Ge-N.ground)*.12,N.ground=Math.max(N.ground,Me+3);let en=c(0,35,Gt);n.position.set(we,Math.max(n.position.y*(1-en)+N.ground*en,en>.5?Me+3:-1e9),me),y.on&&(n.position.y=Math.max(y.y,Me+3),N.ground=n.position.y),n.position.y+=O.y,bt.copy(Y).applyAxisAngle(Rt,N.yaw),bt.y=bt.y*(1-en)-.04*en+N.pitch,bt.normalize(),te.copy(n.position).addScaledVector(bt,ve)}else N.ground=n.position.y;let Ut=wt.focus;(Ut>5e-4||Math.abs(wt.pan)>5e-4)&&(ge.copy(w.look).sub(w.cam).normalize(),n.position.addScaledVector(ge,Ut*34),n.position.y-=Ut*4-wt.pulse*2,n.position.x+=wt.pan*10*Ut,te.x+=wt.pan*38*Ut,te.y-=Ut*3);let Wt=y.on?y.roll:0;if(vt.amp>.001&&it==="full"){let ve=Math.sin(vt.phase),we=Math.sin(vt.phase*2),me=vt.amp*(1+vt.run*.8),Me=-Math.abs(ve)*.32*me+.16*me,_e=ve*.16*me;n.position.y+=Me,ge.copy(te).sub(n.position),ge.y=0,ge.normalize(),n.position.x+=-ge.z*_e,n.position.z+=ge.x*_e,te.y+=Me*.5,Wt+=ve*.006*me+we*.0015*me}n.lookAt(te),Wt&&n.rotateZ(Wt);let pe=(innerWidth<700?62:50)-Ut*6+wt.pulse*1.5;Math.abs(n.fov-pe)>.01&&(n.fov=pe,n.updateProjectionMatrix()),m.position.copy(n.position),Dt.position.set(n.position.x,n.position.y-20,n.position.z),Kt.position.set(n.position.x,n.position.y-20,n.position.z),mt.position.set(w.look.x*.3,_.position.y,w.cam.z-90)},Ne=new I,Ve=new I,ze=new I,nn=new I,Bn=(S,X,st)=>{if(st<0)return 0;if(S==="torch")return X?st<.04?.55:st<.08?.12:st<.16?.12+(st-.08)/.08*.88:1:Math.max(0,1-st/.12);if(X){if(st<.12)return st/.12*.35;if(st<.24)return .35-(st-.12)/.12*.2;if(st<.7){let Gt=(st-.24)/.46;return .15+(1-Math.pow(1-Gt,3))*.85}return 1}return Math.max(0,1-Math.pow(st/.5,.8))},fi=(S,X)=>{n.updateMatrixWorld(),Ne.set(0,0,-1).applyQuaternion(n.quaternion),Ve.set(1,0,0).applyQuaternion(n.quaternion),ze.set(0,1,0).applyQuaternion(n.quaternion);let st=1-Math.pow(1-.16,L*60),Gt=Math.min(1.6,e.fog.density/.004),Ut=Et.uniforms.uOpacity.value,Wt=(S-St.torch.since)/1e3,pe=Bn("torch",St.torch.on,Wt)*(St.torch.on&&Wt>.16?.985+.015*Math.sin(X*40)*Math.sin(X*7):1);if(St.torch.level=pe,pe>.001){let Me=vt.amp*(it==="full"?1:0);Bt.position.copy(n.position).addScaledVector(Ve,.75).addScaledVector(ze,-.6-Math.sin(vt.phase)*.05*Me).addScaledVector(Ne,.4),nn.copy(Ne),it==="full"&&(nn.addScaledVector(Ve,Math.sin(X*1.7)*.004+Math.sin(X*4.3)*.002+Math.sin(vt.phase)*.01*Me),nn.addScaledVector(ze,Math.sin(X*2.1+1)*.004+Math.sin(vt.phase*2)*.008*Me)),St.aim.lerp(nn.normalize(),it==="full"?st:1).normalize(),Bt.target.position.copy(Bt.position).addScaledVector(St.aim,40);let _e=90,Ge=Math.tan(Bt.angle)*_e;pt.position.copy(Bt.position),pt.lookAt(Bt.target.position),pt.scale.set(Ge,Ge,_e)}Bt.intensity=pe*520,Bt.castShadow=pe>.02,ye.uniforms.uOpacity.value=pe*(.018+.03*Gt+.035*Ut),pt.visible=pe>.01;let ve=(S-St.lamp.since)/1e3,we=St.lamp.on&&ve>.7?.88+.07*Math.sin(X*9.3+Math.sin(X*3.1)*2)+.04*Math.sin(X*23.7)+.02*Math.sin(X*41):1,me=Bn("lamp",St.lamp.on,ve)*we;if(St.lamp.level=me,it==="full"){let Me=(N.vx-St.lastVX)/Math.max(L,.001),_e=(N.vz-St.lastVZ)/Math.max(L,.001),Ge=-(Me*Ne.z-_e*Ne.x)*.0012,en=-(Me*Ne.x+_e*Ne.z)*.0012,qt=L;St.swingV+=(-St.swing*14-St.swingV*1.8+Ge)*qt,St.swing+=St.swingV*qt,St.swingZV+=(-St.swingZ*14-St.swingZV*1.8+en+Math.sin(vt.phase*2)*.6*vt.amp)*qt,St.swingZ+=St.swingZV*qt}St.lastVX=N.vx,St.lastVZ=N.vz,fe.position.copy(n.position).addScaledVector(Ve,1.1+Math.sin(St.swing)*1.4).addScaledVector(ze,-2.4+(1-Math.cos(St.swing))*1.4).addScaledVector(Ne,2.2+Math.sin(St.swingZ)*1),it==="full"&&St.lamp.on&&(fe.position.y+=Math.sin(X*6.1)*.03),fe.intensity=me*900,St.level=Math.max(pe,me),In.classList.toggle("light-on",St.level>.05),In.classList.toggle("lamp-on",me>.05)},pi=()=>{let S=performance.now(),X=window.MEOW_SOUND;St.state==="off"?(St.state="torch",St.torch.on=!0,St.torch.since=S,St.aim.copy(Ne.lengthSq()?Ne:St.aim),X&&X.click&&X.click(!0)):St.state==="torch"?(St.state="lamp",St.torch.on=!1,St.torch.since=S,St.lamp.on=!0,St.lamp.since=S+120,X&&X.click&&X.click(!1),X&&X.ignite&&setTimeout(()=>X.ignite(),120)):(St.state="off",St.lamp.on=!1,St.lamp.since=S,X&&X.puff&&X.puff()),X&&X.fire&&X.fire(St.state==="lamp"),!ct&&Ct&&(ct=!0,jt=!0,requestAnimationFrame(Hi)),dispatchEvent(new CustomEvent("meow:light",{detail:{state:St.state}}))},mi=(S,X,st)=>{if(ot.visible&&C.uTree.value>.5)for(let Gt=0;Gt<Z.length;Gt++){let Ut=Z[Gt],Wt=Ut.p.x-S,pe=Ut.p.z-X,ve=Ut.s.x*.75+1.2+st;if(Wt*Wt+pe*pe<ve*ve)return!1}return!z.blockedAt(S,X,st,w)},Ss=()=>{let S=w.cam.x,X=w.cam.z,st=w.look.x-w.cam.x,Gt=w.look.z-w.cam.z,Ut=Math.hypot(st,Gt)||1,Wt=Math.atan2(Gt/Ut,st/Ut),pe=ot.visible&&C.uTree.value>.5,ve=_.position.y,we=[];for(let _e=-.7;_e<=.701;_e+=.05)for(let Ge=70;Ge<=380;Ge+=10){let en=Wt+_e,qt=S+Math.cos(en)*Ge,De=X+Math.sin(en)*Ge,Ke=d(qt,De);if(Ke<ve+1.5||Ke>F-6)continue;let ke=0;if(pe)for(let mn=0;mn<Z.length;mn++){let yn=Z[mn].p.x-qt,En=Z[mn].p.z-De;yn*yn+En*En<1600&&ke++}let pn=(pe?Math.min(ke,22)*2:30)-Math.abs(_e)*34-Ge*.045;we.push({x:qt,z:De,a:_e,d:Ge,score:pn})}we.sort((_e,Ge)=>Ge.score-_e.score);let me=null;for(let _e of we.slice(0,60)){if(!mi(_e.x,_e.z,4))continue;let Ge=!0,en=(S-_e.x)/_e.d,qt=(X-_e.z)/_e.d;for(let De=2;De<70&&Ge;De+=2.5)Ge=mi(_e.x+en*De,_e.z+qt*De,1.5);for(let De=3;De<30&&Ge;De+=3)Ge=mi(_e.x-en*De,_e.z-qt*De,1);if(Ge){me=_e;break}}me||(me={x:S+Math.cos(Wt)*60,z:X+Math.sin(Wt)*60,a:0,d:60});let Me=it==="full";y.on=!0,y.t0=performance.now(),y.dur=Me?2300+me.d*5.2:700,y.sx=N.px,y.sz=N.pz,y.tx=me.x-S,y.tz=me.z-X,y.sy=n.position.y,y.ty=Math.max(d(me.x,me.z),ve)+kt,y.yaw0=N.yaw,y.yaw1=-me.a,y.lift=Me?9+me.d*.02:0,N.vx=N.vz=0,N.homing=!1,!ct&&Ct&&(ct=!0,jt=!0,requestAnimationFrame(Hi))},rs=S=>(S=Math.min(1,Math.max(0,S)),S*S*S*(S*(S*6-15)+10)),rr=S=>{let X=Math.min(1,(S-y.t0)/y.dur),st=rs(X);N.px=y.sx+(y.tx-y.sx)*st,N.pz=y.sz+(y.tz-y.sz)*st,N.vx=N.vz=0;let Gt=rs(X/.55);N.yaw=N.yawTo=y.yaw0+(y.yaw1-y.yaw0)*Gt,N.pitch=N.pitchTo=-.07*Math.sin(Math.PI*X)*(1-X*.5);let Ut=w.cam.x+N.px,Wt=w.cam.z+N.pz,pe=rs((X-.3)/.7),ve=y.sy+(y.ty-y.sy)*pe+y.lift*Math.pow(Math.sin(Math.PI*Math.min(1,X*1.15)),1.4);ve=Math.max(ve,Math.max(d(Ut,Wt),_.position.y)+4),y.y=ve,y.roll=(y.yaw1-y.yaw0)*.22*Math.sin(Math.PI*Math.min(1,X*1.3)),X>=1&&(y.on=!1,y.roll=0,N.ground=y.ty,y.justLanded=!0)},In=document.documentElement,M=(S,X,st)=>Math.max(X,Math.min(st,S)),V=()=>!Ct||In.classList.contains("locked")||wt.focusTo>0,ht=S=>S&&S.closest&&S.closest(".sidebar, .modal, .gallery, .top, .composer, .tools, .tree-card, .home-btn, .backdrop, .walk-hint, input, button, a, label"),j=()=>{ct||Gi()},nt=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"],Zt=S=>S&&(/INPUT|TEXTAREA|SELECT/.test(S.tagName)||S.isContentEditable),jt=!1;addEventListener("keydown",S=>{!nt.includes(S.code)||Zt(S.target)||V()||S.metaKey||S.ctrlKey||S.altKey||document.querySelector(".modal:not([hidden])")||(S.code.startsWith("Shift")||S.preventDefault(),Ot.add(S.code),N.homing=!1,!y.on&&!S.code.startsWith("Shift")&&Math.hypot(N.px,N.pz)<3&&(Ss(),Ae()),!ct&&Ct&&(ct=!0,jt=!0,requestAnimationFrame(Hi)))}),addEventListener("keyup",S=>Ot.delete(S.code)),addEventListener("keydown",S=>{S.code!=="KeyF"||S.repeat||Zt(S.target)||!Ct||In.classList.contains("locked")||document.querySelector(".modal:not([hidden])")||S.metaKey||S.ctrlKey||S.altKey||(S.preventDefault(),pi())}),addEventListener("blur",()=>{Ot.clear(),Vt.inside=!1}),document.addEventListener("mouseleave",()=>{Vt.inside=!1}),addEventListener("keydown",S=>{S.code!=="Space"||Zt(S.target)||V()||!N.on||y.on||document.querySelector(".modal:not([hidden])")||(S.preventDefault(),!(S.repeat||O.air)&&(O.v=15.5,O.air=!0,!ct&&Ct&&(ct=!0,jt=!0,requestAnimationFrame(Hi))))});let Yt=()=>[innerWidth/2,innerHeight/2],Qt=()=>!!document.pointerLockElement,he=0,Ae=()=>{if(!(Qt()||!i.requestPointerLock||he>0))try{let S=i.requestPointerLock();S&&S.catch&&S.catch(()=>{he++})}catch{he++}};document.addEventListener("pointerlockerror",()=>{he++});let Ie=()=>{Qt()&&document.exitPointerLock&&(window.MEOW_UNLOCK_REASON="self",document.exitPointerLock())},ue=()=>Math.max(.2,Math.min(2.5,window.MEOW_STATE&&Number(window.MEOW_STATE.sens)||1)),Ye=()=>{!N.on||V()||z.cabin.study.back(performance.now())||window.MEOW_BG&&window.MEOW_BG.home()},cn=(S,X)=>(Hn.set(S/innerWidth*2-1,-(X/innerHeight)*2+1),We.setFromCamera(Hn,n),We),Qe=document.createElement("div");Qe.className="aim-dot",document.body.appendChild(Qe),document.addEventListener("pointerlockchange",()=>{if(In.classList.toggle("pl",Qt()),!Qt()){let S=window.MEOW_UNLOCK_REASON;window.MEOW_UNLOCK_REASON="",S||setTimeout(()=>{document.hasFocus()&&!document.hidden&&Ye()},80)}Qt()?(He.x=Yt()[0],He.y=Yt()[1]):He.id>=0&&Ec(-1)}),addEventListener("keydown",S=>{if(S.key!=="Escape"||!N.on||Zt(S.target)||document.querySelector(".modal:not([hidden])"))return;let X=document.getElementById("treeCard");X&&!X.hidden&&X.classList.contains("show")||Ye()},!0);let Ze={aimed:!1},ln=document.createElement("div");ln.className="act-hint",ln.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v6" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 9h5.5V3.4A6 6 0 0 0 6.5 9z" fill="currentColor"/></svg><span></span>',document.body.appendChild(ln);let se=ln.querySelector("span"),Sn=(S,X)=>window.MEOW_I18N?window.MEOW_I18N.t(S):X,Ue=!1,zn=0,Zn=(S,X)=>{let st=z.cabin.door;if(!N.on||y.on||w.pCabin<.5||!st.near(n.position.x,n.position.z))return!1;Hn.set(S/innerWidth*2-1,-(X/innerHeight)*2+1),We.setFromCamera(Hn,n);let Gt=We.intersectObject(st.mesh,!1)[0];return!!Gt&&Gt.distance<26},ii=()=>{let S=z.cabin.door;if(!S.canToggle(n.position.x,n.position.z))return!1;let X=S.toggle(performance.now());return window.MEOW_SOUND&&window.MEOW_SOUND.door&&window.MEOW_SOUND.door(X),!ct&&Ct&&(ct=!0,jt=!0,requestAnimationFrame(Hi)),!0},zi=()=>{if(++zn%3)return;let[S,X]=Qt()?Yt():[He.x,He.y];Ze.aimed=Zn(S,X);let st=z.cabin.study.hover(cn(S,X),N.on&&!y.on&&w.pCabin>.5&&Jt>.5);In.classList.toggle("on-book",st),Ze.aimed!==Ue&&(Ue=Ze.aimed,ln.classList.toggle("show",Ze.aimed)),Ze.aimed&&(se.textContent=z.cabin.door.open?Sn("doorClose","Click to close the door"):Sn("doorOpen","Click to open the door"))};addEventListener("keydown",S=>{S.code!=="KeyE"||Zt(S.target)||V()||!N.on||S.repeat||z.cabin.door.near(n.position.x,n.position.z)&&w.pCabin>.5&&ii()});let Pe=null,je=null,He={x:0,y:0,pending:!1,id:-1};addEventListener("pointerdown",S=>{if(V()||ht(S.target)||y.on)return;if(S.button===2||S.pointerType==="touch"&&S.button===0)Pe={x:S.clientX,y:S.clientY,yaw:N.yawTo,pitch:N.pitchTo,moved:!1,touch:S.pointerType==="touch"},S.preventDefault();else if(S.button===0){if(N.on&&!Qt()&&S.pointerType==="mouse"&&!he&&i.requestPointerLock){Ae(),je=null,S.preventDefault(),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}));return}je={x:S.clientX,y:S.clientY},S.preventDefault()}}),addEventListener("contextmenu",S=>{Ct&&!ht(S.target)&&!In.classList.contains("locked")&&S.preventDefault()}),addEventListener("pointermove",S=>{if(Pe){let X=S.clientX-Pe.x,st=S.clientY-Pe.y;Math.hypot(X,st)>5&&(Pe.moved=!0),N.yawTo=Pe.yaw-X*.0035,N.pitchTo=M(Pe.pitch-st*.0025,J,xt),In.classList.add("looking"),j();return}if(Qt()){if(N.on&&!y.on&&!V()){let X=ue();N.yawTo-=S.movementX*.0024*X,N.pitchTo=M(N.pitchTo-S.movementY*.002*X,J,xt),j()}return}if(Vt.x=S.clientX,Vt.y=S.clientY,Vt.inside=!0,Vt.ui=!!ht(S.target),V()||ht(S.target)){He.id>=0&&Ec(-1);return}if(N.on&&!y.on&&S.pointerType!=="touch"&&(S.movementX||S.movementY)){let X=ue();N.yawTo-=S.movementX*.0028*X,N.pitchTo=M(N.pitchTo-S.movementY*.0022*X,J,xt),j()}He.x=S.clientX,He.y=S.clientY,He.pending=!0},{passive:!0}),addEventListener("pointerup",S=>{let X=!1;if(Pe?(X=Pe.touch&&!Pe.moved,Pe=null,In.classList.remove("looking")):je&&S.button===0&&(X=Qt()||Math.hypot(S.clientX-je.x,S.clientY-je.y)<8),je=null,X){let[st,Gt]=Qt()?Yt():[S.clientX,S.clientY];if(N.on&&w.pCabin>.5&&Jt>.5&&z.cabin.study.click(cn(st,Gt),performance.now())){j();return}if(Zn(st,Gt)){ii();return}let Ut=He.id>=0?He.id:Ai(st,Gt);Ut>=0?(or.set(Ut,performance.now()),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"click",id:Ut,x:st,y:Gt}})),j()):dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}))}});let We=new Hr;We.far=900;let Hn=new Te,Ai=(S,X)=>{if(!ot.visible||C.uTree.value<.5)return-1;Hn.set(S/innerWidth*2-1,-(X/innerHeight)*2+1),We.setFromCamera(Hn,n);let st=We.intersectObjects([ot,_t],!1)[0];return st?st.instanceId:-1},so=new le(2.6,2.6,2.4),Ec=S=>{S!==He.id&&(He.id>=0&&ot.setColorAt(He.id,Z[He.id]?Z[He.id].c:tt),He.id=S,S>=0&&ot.setColorAt(S,so),ot.instanceColor.needsUpdate=!0,In.classList.toggle("on-tree",S>=0),dispatchEvent(new CustomEvent("meow:tree",{detail:S>=0?{type:"hover",id:S,x:He.x,y:He.y}:{type:"leave"}})),j())},or=new Map,nh=new Be,ih=new An,bc=new be,xd=S=>{or.size&&(or.forEach((X,st)=>{let Gt=(S-X)/1e3,Ut=Z[st];if(!Ut){or.delete(st);return}let Wt=Gt>2.6?0:Math.sin(Gt*15)*Math.exp(-Gt*2.1)*.17;ih.set(Wt*.6,0,Wt),nh.setFromEuler(ih).multiply(Ut.q),bc.compose(Ut.p,nh,Ut.s),ot.setMatrixAt(st,bc),Mt[st]&&_t.setMatrixAt(st,bc),Gt>2.6&&or.delete(st)}),ot.instanceMatrix.needsUpdate=!0,_t.instanceMatrix.needsUpdate=!0)},wc=new Un(4,4,{type:Qn,depthBuffer:!0}),os={tScene:{value:wc.texture},uRes:{value:new Te(4,4)},uTime:h.uTime,uBlur:{value:3},uBand:{value:.22},uFocusY:{value:.47},uPull:{value:0},uAberr:{value:.006},uSat:{value:0},uGrain:{value:.022},uVig:{value:.32},uFlicker:{value:.01}},sh=new qs,_d=new ts(-1,1,1,-1,0,1);sh.add(new Ce(new hn(2,2),new on({uniforms:os,depthTest:!1,depthWrite:!1,vertexShader:`
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
      }`})));let rh=0,ar=()=>{let S=innerWidth,X=innerHeight;t.setSize(S,X,!1);let st=t.getDrawingBufferSize(new Te);wc.setSize(st.x,st.y),os.uRes.value.copy(st),n.aspect=S/X,n.fov=S<700?62:50,n.updateProjectionMatrix(),ct||Gi()},oh=0,ah=S=>{let X=s.getElapsedTime();h.uTime.value=X;let st=Math.min(1,(S-$)/Q);ce(Ht(st)),Lt=Math.sin(Math.PI*Ht(st))*(it==="full"?9:0)*(st<1?1:0),A.offset.x=X*.004,A.offset.y=X*.006,W.forEach(qt=>{qt.position.x+=qt.userData.v*.016,qt.position.x>520&&(qt.position.x=-520),qt.position.x<-520&&(qt.position.x=520),qt.lookAt(n.position.x,qt.position.y,n.position.z)}),ee+=(zt-ee)*.04;let Gt=it==="full"?.035:1;wt.focus+=(wt.focusTo-wt.focus)*Gt,wt.pan+=(wt.panTo-wt.pan)*(it==="full"?.05:1),wt.pulse*=.94;let Ut=it==="full",Wt=Math.min(.1,Math.max(.001,(S-(oh||S))/1e3))*60,pe=qt=>Ut?1-Math.pow(1-qt,Wt):1;{let qt=Wt/60,De=w.look.x-w.cam.x,Ke=w.look.z-w.cam.z,ke=Math.hypot(De,Ke)||1,pn=Math.cos(N.yaw),mn=Math.sin(N.yaw),yn=De/ke*pn+Ke/ke*mn,En=-(De/ke)*mn+Ke/ke*pn,Ri=y.on?0:1,cr=Ri*((Ot.has("KeyW")||Ot.has("ArrowUp")?1:0)-(Ot.has("KeyS")||Ot.has("ArrowDown")?1:0)),oo=Ri*((Ot.has("KeyD")||Ot.has("ArrowRight")?1:0)-(Ot.has("KeyA")||Ot.has("ArrowLeft")?1:0)),ao=yn*cr-En*oo,co=En*cr+yn*oo,lo=Math.hypot(ao,co),uh=yt*(Ot.has("ShiftLeft")||Ot.has("ShiftRight")?2.4:1);lo>0&&(ao=ao/lo*uh,co=co/lo*uh);let dh=1-Math.pow(1-(lo>0?.08:.12),Wt);N.vx+=(ao-N.vx)*dh,N.vz+=(co-N.vz)*dh;let Ac=(fo,Md)=>{let po=w.cam.x+fo,lr=w.cam.z+Md;if(!(Math.abs(po)<820&&lr>-900&&lr<420&&d(po,lr)<F))return!1;if(ot.visible&&C.uTree.value>.5)for(let Rc=0;Rc<Z.length;Rc++){let Cc=Z[Rc],fh=Cc.p.x-po,ph=Cc.p.z-lr,mh=Cc.s.x*.75+1.2;if(fh*fh+ph*ph<mh*mh)return!1}return!z.blockedAt(po,lr,0,w)},ho=N.px+N.vx*qt,uo=N.pz+N.vz*qt;if(y.on?rr(S):Ac(ho,uo)?(N.px=ho,N.pz=uo):Ac(ho,N.pz)?(N.px=ho,N.vz*=.5):Ac(N.px,uo)?(N.pz=uo,N.vx*=.5):(N.vx*=.3,N.vz*=.3),N.homing){let fo=1-Math.pow(.94,Wt);N.px-=N.px*fo,N.pz-=N.pz*fo,N.vx=N.vz=0,Math.hypot(N.px,N.pz)<.05&&(N.px=N.pz=0,N.homing=!1)}let vd=S-Math.max(St.torch.since,St.lamp.since)<1200;jt&&!Ot.size&&Math.hypot(N.vx,N.vz)<.05&&!N.homing&&!vd&&!y.on&&!O.air&&(jt=!1,ct=it==="full")}if(L=Wt/60,O.air&&(O.v-=44*L,O.y+=O.v*L,O.y<=0&&(O.y=0,O.air=!1,vt.amp=Math.min(1.4,vt.amp+.5),window.MEOW_SOUND&&window.MEOW_SOUND.step))){let qt=n.position.x,De=n.position.z,Ke=d(qt,De),ke=(z.floorAt(qt,De,w)||{y:-1e9}).y>Ke+.2?"wood":Ke<_.position.y+.6?"water":Nt==="snow"||Ke>p.uSnowLine.value-6?"snow":"grass";window.MEOW_SOUND.step(ke,1.5),setTimeout(()=>window.MEOW_SOUND.step(ke,1.1),70)}if(Qt()&&N.on&&!V()&&zn%3===1){let[qt,De]=Yt();He.x=qt,He.y=De,He.pending=!0}if(!Qt()&&N.on&&!y.on&&Vt.inside&&!Vt.ui&&!Pe&&!V()&&it==="full"&&Vt.y>innerHeight*.15&&Vt.y<innerHeight*.85){let qt=Math.max(30,innerWidth*.04);Vt.x>innerWidth-qt?N.yawTo-=1.1*L*(Vt.x-(innerWidth-qt))/qt:Vt.x>=0&&Vt.x<qt&&(N.yawTo+=1.1*L*(qt-Vt.x)/qt)}zi(),z.cabin.feet=N.on?N.ground-kt:void 0,N.on&&!y.on&&y.justLanded&&(y.justLanded=!1,Ae()),!N.on&&Qt()&&Ie();{let qt=Math.hypot(N.vx,N.vz),De=Ot.has("ShiftLeft")||Ot.has("ShiftRight")?1:0;vt.run+=(De-vt.run)*(1-Math.pow(.9,Wt));let Ke=Math.min(1.2,qt/yt);vt.amp+=(Ke-vt.amp)*(1-Math.pow(.88,Wt)),vt.phase+=Math.PI*2*(.95+.5*vt.run)*Math.min(1,qt/yt+.15)*L*(qt>.3?1:.4);let ke=Math.floor(vt.phase/Math.PI);if(ke!==vt.lastStep){if(vt.lastStep=ke,qt>yt*.25&&window.MEOW_SOUND&&window.MEOW_SOUND.step){let mn=n.position.x,yn=n.position.z,En=d(mn,yn),Ri=(z.floorAt(mn,yn,w)||{y:-1e9}).y>En+.2?"wood":En<_.position.y+.6?"water":Nt==="snow"||En>p.uSnowLine.value-6?"snow":"grass";window.MEOW_SOUND.step(Ri,Math.min(1.5,qt/yt))}let pn=d(n.position.x,n.position.z);if(qt>yt*.25&&pn>_.position.y+.6&&(Nt==="snow"||pn>p.uSnowLine.value+4)){let mn=n.position.x,yn=n.position.z,En=1.5,Ri=new I(d(mn-En,yn)-d(mn+En,yn),2*En,d(mn,yn-En)-d(mn,yn+En)).normalize();Jt<.5&&Ft.place(mn,d(mn,yn),yn,Math.atan2(-N.vx,-N.vz),Ri)}}}let ve=Math.hypot(N.px,N.pz);if(!Pe&&ve<2&&!y.on){let qt=Math.pow(.96,Wt);N.yawTo*=qt,N.pitchTo*=qt}N.yaw+=(N.yawTo-N.yaw)*pe(.12),N.pitch+=(N.pitchTo-N.pitch)*pe(.12);let we=ve>3;we!==N.on&&(N.on=we,In.classList.toggle("exploring",we)),xd(S),t.toneMappingExposure=ee,Se(),qe(X),z.update(w,X,n.position,_.position.y),re.update(w.pRipples*(1-Jt),n.position,_.position.y),Ft.update(Math.min(1,Math.max(0,(100-w.snowLine)/80))),fi(S,X),He.pending&&(He.pending=!1,Ec(Jt>.5?-1:Ai(He.x,He.y)));let me=t.getPixelRatio(),Me=it==="full",_e=st<1?Math.sin(Math.PI*Ht(st))*6:0,Ge=Me?Math.max(0,1-(S-rh)/3600):0,en=c(0,60,Math.hypot(N.px,N.pz));os.uBlur.value=2.6*me*(1+wt.focus*2.6)*(1-en*.7),os.uBand.value=.22-wt.focus*.1+en*.12,os.uPull.value=(_e*(Me?1:0)+Math.pow(Ge,1.6)*18+wt.pulse*3)*me,os.uFlicker.value=Me?.012:0,t.setRenderTarget(wc),t.render(e,n),t.setRenderTarget(null),t.render(sh,_d),oh=S},Ln={last:0,sum:0,n:0,level:0,since:0},Tc=[Math.min(window.devicePixelRatio||1,1.5),1.1,.85,.7],yd=S=>{Ln.since||(Ln.since=S);let X=S-(Ln.last||S);if(Ln.last=S,!(S-Ln.since<5e3||X>250||document.hidden)&&(Ln.sum+=X,Ln.n++,Ln.n>=90)){let st=Ln.sum/Ln.n;Ln.sum=Ln.n=0,st>30&&Ln.level<Tc.length-1&&Tc[Ln.level+1]<t.getPixelRatio()&&(Ln.level++,t.setPixelRatio(Tc[Ln.level]),ar())}},Hi=S=>{ct&&(document.hidden||(ah(S),yd(S)),requestAnimationFrame(Hi))},Gi=()=>{Ct&&($=-1e9,ee=zt,ah(performance.now()))},ch=()=>document.documentElement.getAttribute("data-theme")==="dark"?.62:1,lh=(S,X)=>{It[S]||(S="rain"),Nt=S,document.documentElement.setAttribute("data-scene",S),g=oe(w),H=de(It[S]),$=performance.now(),Q=it==="full"?X:1,Ct&&dispatchEvent(new CustomEvent("meow:shot",{detail:{name:S,dur:Q}})),ct||Gi()},hh=()=>{Ct&&(it==="full"?ct||(ct=!0,requestAnimationFrame(Hi)):(ct=!1,Gi()))};window.MEOW_BG={scenes:Object.keys(It),setScene(S){if(!(S===Nt&&Ct)){if(!Ct){Nt=It[S]?S:"rain",document.documentElement.setAttribute("data-scene",Nt);return}lh(S,3200)}},setMotion(S){it=S==="reduced"?"reduced":"full",hh()},focus(S){wt.focusTo=S?1:0,S&&(Ie(),y.on=!1,N.homing=!0,N.yawTo=N.pitchTo=0),ct||Gi()},toggleLight(){pi()},_standAt(S,X,st){N.px=S-w.cam.x,N.pz=X-w.cam.z,N.vx=N.vz=0,z.cabin.feet=st==="study"?Je.y+Xt.floor*Je.S:void 0;let Gt=z.floorAt(S,X,w);N.ground=(Gt&&Gt.under?Gt.y:Math.max(d(S,X),_.position.y,Gt?Gt.y:-1e9))+kt,z.cabin.feet=N.ground-kt,ct||Gi()},_look(S,X){let st=w.look.x-w.cam.x,Gt=w.look.z-w.cam.z,Ut=w.cam.x+N.px,Wt=w.cam.z+N.pz,pe=Math.atan2(Gt,st)-Math.atan2(X-Wt,S-Ut);pe=Math.atan2(Math.sin(pe),Math.cos(pe)),N.yaw=N.yawTo=pe,N.pitch=N.pitchTo=0,ct||Gi()},_printAt(S,X,st){Ft.place(S,d(S,X),X,st,new I(0,1,0))},_toggleDoor(){z.cabin.door.toggle(performance.now())},get _study(){return z.cabin.study},get _cabin(){return z.cabin},_pos(){let S=new I;return n.getWorldDirection(S),{x:w.cam.x+N.px,z:w.cam.z+N.pz,fly:y.on,pitch:N.pitch,lookY:S.y,yaw:N.yaw,yawTo:N.yawTo,dx:S.x,dz:S.z,cx:n.position.x,cy:n.position.y,cz:n.position.z,ground:N.ground,homing:N.homing}},_sites(){return{cabin:z.cabinAt,circle:z.circleAt}},_nearTree(S,X=16){let st=Z[S%Z.length];st&&this._standAt(st.p.x,st.p.z+X)},enter(){Ct&&!y.on&&!V()&&Math.hypot(N.px,N.pz)<3&&(Ss(),Ae())},home(){Ie(),z.cabin.study.reset(performance.now());let S=Math.round(N.yaw/(Math.PI*2))*Math.PI*2;N.yaw-=S,N.yawTo-=S,y.on=!1,N.homing=!0,N.yawTo=0,N.pitchTo=0,Ot.clear(),!ct&&Ct&&(ct=!0,jt=!0,requestAnimationFrame(Hi))},pan(S){wt.panTo=Math.max(-1,Math.min(1,S||0))},pulse(){it==="full"&&(wt.pulse=1)},start(){Ct||(Ct=!0,zt=ee=ch(),w=de(It[Nt]),it==="full"&&(w.cam.add(new I(0,120,230)),w.look.add(new I(0,30,0))),ar(),rh=performance.now(),lh(Nt,4200),i.classList.add("on"),hh())}};{let S=document.querySelector(".walk-hint");S&&S.addEventListener("click",()=>window.MEOW_BG.enter())}addEventListener("resize",()=>{clearTimeout(ar.t),ar.t=setTimeout(ar,120)}),new MutationObserver(()=>{zt=ch(),ct||Gi()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let ro=window.MEOW_STATE;ro&&(Nt=It[ro.scene]?ro.scene:"rain",it=ro.motion==="reduced"?"reduced":"full"),window.MEOW_READY&&window.MEOW_STATE&&window.MEOW_READY.then(()=>window.MEOW_BG.start())})();})();
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
