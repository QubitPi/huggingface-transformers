import{o as me,t as _e}from"../chunks/scheduler.b108d059.js";import{S as Ke,a as Ye,I as F,g as Ve,f as Fe,b as we,c as fe,s as te,i as ye,d as G,P as Me,e as tt}from"../chunks/singletons.ef3778ae.js";import{b as z}from"../chunks/paths.bfdcd0a7.js";function nt(t,r){return t==="/"||r==="ignore"?t:r==="never"?t.endsWith("/")?t.slice(0,-1):t:r==="always"&&!t.endsWith("/")?t+"/":t}function at(t){return t.split("%25").map(decodeURI).join("%25")}function rt(t){for(const r in t)t[r]=decodeURIComponent(t[r]);return t}const ot=["href","pathname","search","searchParams","toString","toJSON"];function it(t,r){const l=new URL(t);for(const i of ot)Object.defineProperty(l,i,{get(){return r(),t[i]},enumerable:!0,configurable:!0});return st(l),l}function st(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ct="/__data.json";function lt(t){return t.replace(/\/$/,"")+ct}function ft(...t){let r=5381;for(const l of t)if(typeof l=="string"){let i=l.length;for(;i;)r=r*33^l.charCodeAt(--i)}else if(ArrayBuffer.isView(l)){const i=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let d=i.length;for(;d;)r=r*33^i[--d]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}const We=window.fetch;window.fetch=(t,r)=>((t instanceof Request?t.method:(r==null?void 0:r.method)||"GET")!=="GET"&&ae.delete(ke(t)),We(t,r));const ae=new Map;function ut(t){const r=atob(t),l=new Uint8Array(r.length);for(let i=0;i<r.length;i++)l[i]=r.charCodeAt(i);return l.buffer}function dt(t,r){const l=ke(t,r),i=document.querySelector(l);if(i!=null&&i.textContent){let{body:d,...u}=JSON.parse(i.textContent);const E=i.getAttribute("data-ttl");return E&&ae.set(l,{body:d,init:u,ttl:1e3*Number(E)}),i.getAttribute("data-b64")!==null&&(d=ut(d)),Promise.resolve(new Response(d,u))}return window.fetch(t,r)}function ht(t,r,l){if(ae.size>0){const i=ke(t,l),d=ae.get(i);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(l==null?void 0:l.cache))return new Response(d.body,d.init);ae.delete(i)}}return window.fetch(r,l)}function ke(t,r){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(r!=null&&r.headers||r!=null&&r.body){const d=[];r.headers&&d.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&d.push(r.body),i+=`[data-hash="${ft(...d)}"]`}return i}const pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(t){const r=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${_t(t).map(i=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(d)return r.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(u)return r.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const E=i.split(/\[(.+?)\](?!\])/);return"/"+E.map((h,g)=>{if(g%2){if(h.startsWith("x+"))return ve(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return ve(String.fromCharCode(...h.slice(2).split("-").map(U=>parseInt(U,16))));const p=pt.exec(h);if(!p)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,$,k,N]=p;return r.push({name:k,matcher:N,optional:!!x,rest:!!$,chained:$?g===1&&E[0]==="":!1}),$?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return ve(h)}).join("")}).join("")}/?$`),params:r}}function mt(t){return!/^\([^)]+\)$/.test(t)}function _t(t){return t.slice(1).split("/").filter(mt)}function wt(t,r,l){const i={},d=t.slice(1),u=d.filter(c=>c!==void 0);let E=0;for(let c=0;c<r.length;c+=1){const h=r[c];let g=d[c-E];if(h.chained&&h.rest&&E&&(g=d.slice(c-E,c+1).filter(p=>p).join("/"),E=0),g===void 0){h.rest&&(i[h.name]="");continue}if(!h.matcher||l[h.matcher](g)){i[h.name]=g;const p=r[c+1],x=d[c+1];p&&!p.rest&&p.optional&&x&&h.chained&&(E=0),!p&&!x&&Object.keys(i).length===u.length&&(E=0);continue}if(h.optional&&h.chained){E++;continue}return}if(!E)return i}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function yt({nodes:t,server_loads:r,dictionary:l,matchers:i}){const d=new Set(r);return Object.entries(l).map(([c,[h,g,p]])=>{const{pattern:x,params:$}=gt(c),k={id:c,exec:N=>{const U=x.exec(N);if(U)return wt(U,$,i)},errors:[1,...p||[]].map(N=>t[N]),layouts:[0,...g||[]].map(E),leaf:u(h)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function u(c){const h=c<0;return h&&(c=~c),[h,t[c]]}function E(c){return c===void 0?c:[d.has(c),t[c]]}}function Xe(t){try{return JSON.parse(sessionStorage[t])}catch{}}function qe(t,r){const l=JSON.stringify(r);try{sessionStorage[t]=l}catch{}}const vt=-1,bt=-2,Et=-3,St=-4,Rt=-5,kt=-6;function At(t,r){if(typeof t=="number")return d(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const l=t,i=Array(l.length);function d(u,E=!1){if(u===vt)return;if(u===Et)return NaN;if(u===St)return 1/0;if(u===Rt)return-1/0;if(u===kt)return-0;if(E)throw new Error("Invalid input");if(u in i)return i[u];const c=l[u];if(!c||typeof c!="object")i[u]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const h=c[0],g=r==null?void 0:r[h];if(g)return i[u]=g(d(c[1]));switch(h){case"Date":i[u]=new Date(c[1]);break;case"Set":const p=new Set;i[u]=p;for(let k=1;k<c.length;k+=1)p.add(d(c[k]));break;case"Map":const x=new Map;i[u]=x;for(let k=1;k<c.length;k+=2)x.set(d(c[k]),d(c[k+1]));break;case"RegExp":i[u]=new RegExp(c[1],c[2]);break;case"Object":i[u]=Object(c[1]);break;case"BigInt":i[u]=BigInt(c[1]);break;case"null":const $=Object.create(null);i[u]=$;for(let k=1;k<c.length;k+=2)$[c[k]]=d(c[k+1]);break;default:throw new Error(`Unknown type ${h}`)}}else{const h=new Array(c.length);i[u]=h;for(let g=0;g<c.length;g+=1){const p=c[g];p!==bt&&(h[g]=d(p))}}else{const h={};i[u]=h;for(const g in c){const p=c[g];h[g]=d(p)}}return i[u]}return d(0)}function It(t){return t.filter(r=>r!=null)}const Ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ze];const Lt=new Set([...Ze]);[...Lt];async function Pt(t,r){var l;for(const i in t)if(typeof((l=t[i])==null?void 0:l.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([d,u])=>[d,await u])));return t}class ne{constructor(r,l){this.status=r,typeof l=="string"?this.body={message:l}:l?this.body=l:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class Ge{constructor(r,l){this.status=r,this.location=l}}const Ot="x-sveltekit-invalidated",Ut="x-sveltekit-trailing-slash",He="transformers",be="main",Ee="hi";function Be(t){if(/^\/(docs|learn)/.test(t)){const r=t.slice(1).split("/"),l=r.shift(),i=r.shift(),E=(l==="learn"?/^(?:pr_\d+)$/:/^(?:(master|main)|v[\d.]+(rc\d+)?|pr_\d+)$/).test(r[0])?r.shift():be,c=/^[a-z]{2}(-[A-Z]{2})?$/.test(r[0])?r.shift():Ee,h=r.join("/");if(He===i&&be===E&&Ee===c)return`/docs/${He}/${be}/${Ee}/${h}`}}const J=Xe(Ke)??{},ee=Xe(Ye)??{};function Se(t){J[t]=te()}function xt(t,r){var Ce;const l=yt(t),i=t.nodes[0],d=t.nodes[1];i(),d();const u=document.documentElement,E=[],c=[];let h=null;const g={before_navigate:[],on_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},x=!1,$=!1,k=!0,N=!1,U=!1,H=!1,B=!1,M,C=(Ce=history.state)==null?void 0:Ce[F];C||(C=Date.now(),history.replaceState({...history.state,[F]:C},"",location.href));const ue=J[C];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let q,re,Y;async function Ae(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const e=new URL(location.href),s=X(e,!0);h=null;const n=re={},o=s&&await pe(s);if(n===re&&o){if(o.type==="redirect")return oe(new URL(o.location,e).href,{},[e.pathname],n);o.props.page!==void 0&&(q=o.props.page),M.$set(o.props)}}function Ie(e){c.some(s=>s==null?void 0:s.snapshot)&&(ee[e]=c.map(s=>{var n;return(n=s==null?void 0:s.snapshot)==null?void 0:n.capture()}))}function Le(e){var s;(s=ee[e])==null||s.forEach((n,o)=>{var a,f;(f=(a=c[o])==null?void 0:a.snapshot)==null||f.restore(n)})}function Pe(){Se(C),qe(Ke,J),Ie(C),qe(Ye,ee)}async function oe(e,{noScroll:s=!1,replaceState:n=!1,keepFocus:o=!1,state:a={},invalidateAll:f=!1},m,y){return typeof e=="string"&&(e=new URL(e,Ve(document))),le({url:e,scroll:s?te():null,keepfocus:o,redirect_chain:m,details:{state:a,replaceState:n},nav_token:y,accepted:()=>{f&&(B=!0)},blocked:()=>{},type:"goto"})}async function Oe(e){return h={id:e.id,promise:pe(e).then(s=>(s.type==="loaded"&&s.state.error&&(h=null),s))},h.promise}async function ie(...e){const n=l.filter(o=>e.some(a=>o.exec(a))).map(o=>Promise.all([...o.layouts,o.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(n)}function Ue(e){var o;p=e.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),q=e.props.page,M=new t.root({target:r,props:{...e.props,stores:G,components:c},hydrate:!0}),Le(C);const n={from:null,to:{params:p.params,route:{id:((o=p.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};g.after_navigate.forEach(a=>a(n)),$=!0}async function W({url:e,params:s,branch:n,status:o,error:a,route:f,form:m}){let y="never";for(const b of n)(b==null?void 0:b.slash)!==void 0&&(y=b.slash);e.pathname=nt(e.pathname,y),e.search=e.search;const R={type:"loaded",state:{url:e,params:s,branch:n,error:a,route:f},props:{constructors:It(n).map(b=>b.node.component)}};m!==void 0&&(R.props.form=m);let w={},L=!q,P=0;for(let b=0;b<Math.max(n.length,p.branch.length);b+=1){const _=n[b],v=p.branch[b];(_==null?void 0:_.data)!==(v==null?void 0:v.data)&&(L=!0),_&&(w={...w,..._.data},L&&(R.props[`data_${P}`]=w),P+=1)}return(!p.url||e.href!==p.url.href||p.error!==a||m!==void 0&&m!==q.form||L)&&(R.props.page={error:a,params:s,route:{id:(f==null?void 0:f.id)??null},status:o,url:new URL(e),form:m??null,data:L?w:q.data}),R}async function de({loader:e,parent:s,url:n,params:o,route:a,server_data_node:f}){var w,L,P;let m=null;const y={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},R=await e();if((w=R.universal)!=null&&w.load){let I=function(..._){for(const v of _){const{href:D}=new URL(v,n);y.dependencies.add(D)}};const b={route:new Proxy(a,{get:(_,v)=>(y.route=!0,_[v])}),params:new Proxy(o,{get:(_,v)=>(y.params.add(v),_[v])}),data:(f==null?void 0:f.data)??null,url:it(n,()=>{y.url=!0}),async fetch(_,v){let D;_ instanceof Request?(D=_.url,v={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...v}):D=_;const V=new URL(D,n);return I(V.href),V.origin===n.origin&&(D=V.href.slice(n.origin.length)),$?ht(D,V.href,v):dt(D,v)},setHeaders:()=>{},depends:I,parent(){return y.parent=!0,s()}};m=await R.universal.load.call(null,b)??null,m=m?await Pt(m):null}return{node:R,loader:e,server:f,universal:(L=R.universal)!=null&&L.load?{type:"data",data:m,uses:y}:null,data:m??(f==null?void 0:f.data)??null,slash:((P=R.universal)==null?void 0:P.trailingSlash)??(f==null?void 0:f.slash)}}function xe(e,s,n,o,a){if(B)return!0;if(!o)return!1;if(o.parent&&e||o.route&&s||o.url&&n)return!0;for(const f of o.params)if(a[f]!==p.params[f])return!0;for(const f of o.dependencies)if(E.some(m=>m(new URL(f))))return!0;return!1}function he(e,s){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?s??null:null}async function pe({id:e,invalidating:s,url:n,params:o,route:a}){if((h==null?void 0:h.id)===e)return h.promise;const{errors:f,layouts:m,leaf:y}=a,R=[...m,y];f.forEach(S=>S==null?void 0:S().catch(()=>{})),R.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let w=null;const L=p.url?e!==p.url.pathname+p.url.search:!1,P=p.route?a.id!==p.route.id:!1;let I=!1;const b=R.map((S,T)=>{var j;const O=p.branch[T],A=!!(S!=null&&S[0])&&((O==null?void 0:O.loader)!==S[1]||xe(I,P,L,(j=O.server)==null?void 0:j.uses,o));return A&&(I=!0),A});if(b.some(Boolean)){try{w=await ze(n,b)}catch(S){return se({status:S instanceof ne?S.status:500,error:await Z(S,{url:n,params:o,route:{id:a.id}}),url:n,route:a})}if(w.type==="redirect")return w}const _=w==null?void 0:w.nodes;let v=!1;const D=R.map(async(S,T)=>{var Q;if(!S)return;const O=p.branch[T],A=_==null?void 0:_[T];if((!A||A.type==="skip")&&S[1]===(O==null?void 0:O.loader)&&!xe(v,P,L,(Q=O.universal)==null?void 0:Q.uses,o))return O;if(v=!0,(A==null?void 0:A.type)==="error")throw A;return de({loader:S[1],url:n,params:o,route:a,parent:async()=>{var Te;const De={};for(let ge=0;ge<T;ge+=1)Object.assign(De,(Te=await D[ge])==null?void 0:Te.data);return De},server_data_node:he(A===void 0&&S[0]?{type:"skip"}:A??null,S[0]?O==null?void 0:O.server:void 0)})});for(const S of D)S.catch(()=>{});const V=[];for(let S=0;S<R.length;S+=1)if(R[S])try{V.push(await D[S])}catch(T){if(T instanceof Ge)return{type:"redirect",location:T.location};let O=500,A;if(_!=null&&_.includes(T))O=T.status??O,A=T.error;else if(T instanceof ne)O=T.status,A=T.body;else{if(await G.updated.check())return await K(n);A=await Z(T,{params:o,url:n,route:{id:a.id}})}const j=await $e(S,V,f);return j?await W({url:n,params:o,branch:V.slice(0,j.idx).concat(j.node),status:O,error:A,route:a}):await je(n,{id:a.id},A,O)}else V.push(void 0);return await W({url:n,params:o,branch:V,status:200,error:null,route:a,form:s?void 0:null})}async function $e(e,s,n){for(;e--;)if(n[e]){let o=e;for(;!s[o];)o-=1;try{return{idx:o+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:e,error:s,url:n,route:o}){const a={};let f=null;if(t.server_loads[0]===0)try{const w=await ze(n,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;f=w.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||x)&&await K(n)}const y=await de({loader:i,url:n,params:a,route:o,parent:()=>Promise.resolve({}),server_data_node:he(f)}),R={node:await d(),loader:d,universal:null,server:null,data:null};return await W({url:n,params:a,branch:[y,R],status:e,error:s,route:null})}function X(e,s){if(ye(e,z))return;const n=ce(e);for(const o of l){const a=o.exec(n);if(a)return{id:e.pathname+e.search,invalidating:s,route:o,params:rt(a),url:e}}}function ce(e){return at(e.pathname.slice(z.length)||"/")}function Ne({url:e,type:s,intent:n,delta:o}){let a=!1;const f=Je(p,n,e,s);o!==void 0&&(f.navigation.delta=o);const m={...f.navigation,cancel:()=>{a=!0,f.reject(new Error("navigation was cancelled"))}};return U||g.before_navigate.forEach(y=>y(m)),a?null:f}async function le({url:e,scroll:s,keepfocus:n,redirect_chain:o,details:a,type:f,delta:m,nav_token:y={},accepted:R,blocked:w}){var S,T,O;const L=new URL(e.href),P=Be(e.pathname);P&&(e.pathname=P);const I=X(e,!1),b=Ne({url:e,type:f,delta:m,intent:I});if(!b){w();return}const _=C;R(),U=!0,$&&G.navigating.set(b.navigation),re=y;let v=I&&await pe(I);if(!v){if(ye(e,z))return await K(e);v=await je(e,{id:null},await Z(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(I==null?void 0:I.url)||e,re!==y)return b.reject(new Error("navigation was aborted")),!1;if(v.type==="redirect")if(o.length>10||o.includes(e.pathname))v=await se({status:500,error:await Z(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return oe(new URL(v.location,e).href,{},[...o,e.pathname],y),!1;else((S=v.props.page)==null?void 0:S.status)>=400&&await G.updated.check()&&await K(e);if(E.length=0,B=!1,N=!0,Se(_),Ie(_),(T=v.props.page)!=null&&T.url&&v.props.page.url.pathname!==e.pathname&&(e.pathname=(O=v.props.page)==null?void 0:O.url.pathname),a){const A=a.replaceState?0:1;if(a.state[F]=C+=A,history[a.replaceState?"replaceState":"pushState"](a.state,"",L),!a.replaceState){let j=C+1;for(;ee[j]||J[j];)delete ee[j],delete J[j],j+=1}}if(h=null,$){p=v.state,v.props.page&&(v.props.page.url=e);const A=(await Promise.all(g.on_navigate.map(j=>j(b.navigation)))).filter(j=>typeof j=="function");if(A.length>0){let j=function(){g.after_navigate=g.after_navigate.filter(Q=>!A.includes(Q))};A.push(j),g.after_navigate.push(...A)}M.$set(v.props)}else Ue(v);const{activeElement:D}=document;if(await _e(),k){const A=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));s?scrollTo(s.x,s.y):A?A.scrollIntoView():scrollTo(0,0)}const V=document.activeElement!==D&&document.activeElement!==document.body;!n&&!V&&Re(),k=!0,v.props.page&&(q=v.props.page),U=!1,f==="popstate"&&Le(C),b.fulfil(void 0),g.after_navigate.forEach(A=>A(b.navigation)),G.navigating.set(null),N=!1}async function je(e,s,n,o){return e.origin===location.origin&&e.pathname===location.pathname&&!x?await se({status:o,error:n,url:e,route:s}):await K(e)}function K(e){return location.href=e.href,new Promise(()=>{})}function et(){let e;u.addEventListener("mousemove",f=>{const m=f.target;clearTimeout(e),e=setTimeout(()=>{o(m,2)},20)});function s(f){o(f.composedPath()[0],1)}u.addEventListener("mousedown",s),u.addEventListener("touchstart",s,{passive:!0});const n=new IntersectionObserver(f=>{for(const m of f)m.isIntersecting&&(ie(ce(new URL(m.target.href))),n.unobserve(m.target))},{threshold:0});function o(f,m){const y=Fe(f,u);if(!y)return;const{url:R,external:w,download:L}=we(y,z);if(w||L)return;const P=fe(y);if(!P.reload)if(m<=P.preload_data){const I=X(R,!1);I&&Oe(I)}else m<=P.preload_code&&ie(ce(R))}function a(){n.disconnect();for(const f of u.querySelectorAll("a")){const{url:m,external:y,download:R}=we(f,z);if(y||R)continue;const w=fe(f);w.reload||(w.preload_code===Me.viewport&&n.observe(f),w.preload_code===Me.eager&&ie(ce(m)))}}g.after_navigate.push(a),a()}function Z(e,s){return e instanceof ne?e.body:t.hooks.handleError({error:e,event:s})??{message:s.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{me(()=>(g.after_navigate.push(e),()=>{const s=g.after_navigate.indexOf(e);g.after_navigate.splice(s,1)}))},before_navigate:e=>{me(()=>(g.before_navigate.push(e),()=>{const s=g.before_navigate.indexOf(e);g.before_navigate.splice(s,1)}))},on_navigate:e=>{me(()=>(g.on_navigate.push(e),()=>{const s=g.on_navigate.indexOf(e);g.on_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(N||!$)&&(k=!1)},goto:(e,s={})=>oe(e,s,[]),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:s}=new URL(e,location.href);E.push(n=>n.href===s)}return Ae()},invalidate_all:()=>(B=!0,Ae()),preload_data:async e=>{const s=new URL(e,Ve(document)),n=X(s,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);await Oe(n)},preload_code:ie,apply_action:async e=>{if(e.type==="error"){const s=new URL(location.href),{branch:n,route:o}=p;if(!o)return;const a=await $e(p.branch.length,n,o.errors);if(a){const f=await W({url:s,params:p.params,branch:n.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:o});p=f.state,M.$set(f.props),_e().then(Re)}}else e.type==="redirect"?oe(e.location,{invalidateAll:!0},[]):(M.$set({form:null,page:{...q,form:e.data,status:e.status}}),await _e(),M.$set({form:e.data}),e.type==="success"&&Re())},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let o=!1;if(Pe(),!U){const a=Je(p,void 0,null,"leave"),f={...a.navigation,cancel:()=>{o=!0,a.reject(new Error("navigation was cancelled"))}};g.before_navigate.forEach(m=>m(f))}o?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Pe()}),(s=navigator.connection)!=null&&s.saveData||et(),u.addEventListener("click",n=>{var _;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const o=Fe(n.composedPath()[0],u);if(!o)return;const{url:a,external:f,target:m,download:y}=we(o,z),w=Be(a.pathname)?!1:f;if(!a)return;if(m==="_parent"||m==="_top"){if(window.parent!==window)return}else if(m&&m!=="_self")return;const L=fe(o);if(!(o instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||y)return;if(w||L.reload){Ne({url:a,type:"link"})?U=!0:n.preventDefault();return}const[I,b]=a.href.split("#");if(b!==void 0&&I===location.href.split("#")[0]){if(p.url.hash===a.hash){n.preventDefault(),(_=o.ownerDocument.getElementById(b))==null||_.scrollIntoView();return}if(H=!0,Se(C),e(a),!L.replace_state)return;H=!1,n.preventDefault()}le({url:a,scroll:L.noscroll?te():null,keepfocus:L.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:L.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),u.addEventListener("submit",n=>{if(n.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||o.method)!=="get")return;const m=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||o.action);if(ye(m,z))return;const y=n.target,{keep_focus:R,noscroll:w,reload:L,replace_state:P}=fe(y);if(L)return;n.preventDefault(),n.stopPropagation();const I=new FormData(y),b=a==null?void 0:a.getAttribute("name");b&&I.append(b,(a==null?void 0:a.getAttribute("value"))??""),m.search=new URLSearchParams(I).toString(),le({url:m,scroll:w?te():null,keepfocus:R??!1,redirect_chain:[],details:{state:{},replaceState:P??m.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var o;if((o=n.state)!=null&&o[F]){if(n.state[F]===C)return;const a=J[n.state[F]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){J[C]=te(),C=n.state[F],scrollTo(a.x,a.y);return}const f=n.state[F]-C;await le({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{C=n.state[F]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[F]:++C},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&G.navigating.set(null)});function e(n){p.url=n,G.page.set({...q,url:n}),G.page.notify()}},_hydrate:async({status:e=200,error:s,node_ids:n,params:o,route:a,data:f,form:m})=>{x=!0;const y=new URL(location.href);({params:o={},route:a={id:null}}=X(y,!1)||{});let R;try{const w=n.map(async(I,b)=>{const _=f[b];return _!=null&&_.uses&&(_.uses=Qe(_.uses)),de({loader:t.nodes[I],url:y,params:o,route:a,parent:async()=>{const v={};for(let D=0;D<b;D+=1)Object.assign(v,(await w[D]).data);return v},server_data_node:he(_)})}),L=await Promise.all(w),P=l.find(({id:I})=>I===a.id);if(P){const I=P.layouts;for(let b=0;b<I.length;b++)I[b]||L.splice(b,0,void 0)}R=await W({url:y,params:o,branch:L,status:e,error:s,form:m,route:P??null})}catch(w){if(w instanceof Ge){await K(new URL(w.location,location.href));return}R=await se({status:w instanceof ne?w.status:500,error:await Z(w,{url:y,params:o,route:a}),url:y,route:a})}Ue(R)}}}async function ze(t,r){const l=new URL(t);l.pathname=lt(t.pathname),t.pathname.endsWith("/")&&l.searchParams.append(Ut,"1"),l.searchParams.append(Ot,r.map(d=>d?"1":"0").join(""));const i=await We(l.href);if(!i.ok)throw new ne(i.status,await i.json());return new Promise(async d=>{var p;const u=new Map,E=i.body.getReader(),c=new TextDecoder;function h(x){return At(x,{Promise:$=>new Promise((k,N)=>{u.set($,{fulfil:k,reject:N})})})}let g="";for(;;){const{done:x,value:$}=await E.read();if(x&&!g)break;for(g+=!$&&g?`
`:c.decode($);;){const k=g.indexOf(`
`);if(k===-1)break;const N=JSON.parse(g.slice(0,k));if(g=g.slice(k+1),N.type==="redirect")return d(N);if(N.type==="data")(p=N.nodes)==null||p.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=Qe(U.uses),U.data=h(U.data))}),d(N);else if(N.type==="chunk"){const{id:U,data:H,error:B}=N,M=u.get(U);u.delete(U),B?M.reject(h(B)):M.fulfil(h(H))}}}})}function Qe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Re(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const r=document.body,l=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),l!==null?r.setAttribute("tabindex",l):r.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const d=[];for(let u=0;u<i.rangeCount;u+=1)d.push(i.getRangeAt(u));setTimeout(()=>{if(i.rangeCount===d.length){for(let u=0;u<i.rangeCount;u+=1){const E=d[u],c=i.getRangeAt(u);if(E.commonAncestorContainer!==c.commonAncestorContainer||E.startContainer!==c.startContainer||E.endContainer!==c.endContainer||E.startOffset!==c.startOffset||E.endOffset!==c.endOffset)return}i.removeAllRanges()}})}}}function Je(t,r,l,i){var h,g;let d,u;const E=new Promise((p,x)=>{d=p,u=x});return E.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((h=t.route)==null?void 0:h.id)??null},url:t.url},to:l&&{params:(r==null?void 0:r.params)??null,route:{id:((g=r==null?void 0:r.route)==null?void 0:g.id)??null},url:l},willUnload:!r,type:i,complete:E},fulfil:d,reject:u}}async function Ct(t,r,l){const i=xt(t,r);tt({client:i}),l?await i._hydrate(l):i.goto(location.href,{replaceState:!0}),i._start_router()}export{Ct as start};
