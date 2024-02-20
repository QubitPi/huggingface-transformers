import{s as C,a as B,o as U,t as j,b as T}from"../chunks/scheduler.36a0863c.js";import{S as z,i as W,s as F,e as d,c as G,a as v,t as E,b as I,d as h,f as g,g as H,h as J,j as K,k as V,l as p,m as M,n as Q,o as X,p as O,q as R,r as P,u as A,v as L,w as D}from"../chunks/index.9c13489a.js";const Y="modulepreload",Z=function(o){return"/huggingface-transformers/en/"+o},b={},a=function(e,i,n){if(!i||i.length===0)return e();const _=document.getElementsByTagName("link");return Promise.all(i.map(f=>{if(f=Z(f),f in b)return;b[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!n)for(let s=_.length-1;s>=0;s--){const m=_[s];if(m.href===f&&(!t||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Y,t||(c.as="script",c.crossOrigin=""),c.href=f,document.head.appendChild(c),t)return new Promise((s,m)=>{c.addEventListener("load",s),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(o){let e,i,n;var _=o[1][0];function f(t,r){return{props:{data:t[3],form:t[2]}}}return _&&(e=R(_,f(o)),o[12](e)),{c(){e&&P(e.$$.fragment),i=d()},l(t){e&&A(e.$$.fragment,t),i=d()},m(t,r){e&&L(e,t,r),v(t,i,r),n=!0},p(t,r){if(r&2&&_!==(_=t[1][0])){if(e){O();const l=e;E(l.$$.fragment,1,0,()=>{D(l,1)}),I()}_?(e=R(_,f(t)),t[12](e),P(e.$$.fragment),h(e.$$.fragment,1),L(e,i.parentNode,i)):e=null}else if(_){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){n||(e&&h(e.$$.fragment,t),n=!0)},o(t){e&&E(e.$$.fragment,t),n=!1},d(t){t&&g(i),o[12](null),e&&D(e,t)}}}function x(o){let e,i,n;var _=o[1][0];function f(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return _&&(e=R(_,f(o)),o[11](e)),{c(){e&&P(e.$$.fragment),i=d()},l(t){e&&A(e.$$.fragment,t),i=d()},m(t,r){e&&L(e,t,r),v(t,i,r),n=!0},p(t,r){if(r&2&&_!==(_=t[1][0])){if(e){O();const l=e;E(l.$$.fragment,1,0,()=>{D(l,1)}),I()}_?(e=R(_,f(t)),t[11](e),P(e.$$.fragment),h(e.$$.fragment,1),L(e,i.parentNode,i)):e=null}else if(_){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){n||(e&&h(e.$$.fragment,t),n=!0)},o(t){e&&E(e.$$.fragment,t),n=!1},d(t){t&&g(i),o[11](null),e&&D(e,t)}}}function ee(o){let e,i,n;var _=o[1][1];function f(t,r){return{props:{data:t[4],form:t[2]}}}return _&&(e=R(_,f(o)),o[10](e)),{c(){e&&P(e.$$.fragment),i=d()},l(t){e&&A(e.$$.fragment,t),i=d()},m(t,r){e&&L(e,t,r),v(t,i,r),n=!0},p(t,r){if(r&2&&_!==(_=t[1][1])){if(e){O();const l=e;E(l.$$.fragment,1,0,()=>{D(l,1)}),I()}_?(e=R(_,f(t)),t[10](e),P(e.$$.fragment),h(e.$$.fragment,1),L(e,i.parentNode,i)):e=null}else if(_){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){n||(e&&h(e.$$.fragment,t),n=!0)},o(t){e&&E(e.$$.fragment,t),n=!1},d(t){t&&g(i),o[10](null),e&&D(e,t)}}}function k(o){let e,i=o[6]&&y(o);return{c(){e=H("div"),i&&i.c(),this.h()},l(n){e=J(n,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var _=K(e);i&&i.l(_),_.forEach(g),this.h()},h(){V(e,"id","svelte-announcer"),V(e,"aria-live","assertive"),V(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(n,_){v(n,e,_),i&&i.m(e,null)},p(n,_){n[6]?i?i.p(n,_):(i=y(n),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(n){n&&g(e),i&&i.d()}}}function y(o){let e;return{c(){e=M(o[7])},l(i){e=Q(i,o[7])},m(i,n){v(i,e,n)},p(i,n){n&128&&X(e,i[7])},d(i){i&&g(e)}}}function te(o){let e,i,n,_,f;const t=[x,$],r=[];function l(s,m){return s[1][1]?0:1}e=l(o),i=r[e]=t[e](o);let c=o[5]&&k(o);return{c(){i.c(),n=F(),c&&c.c(),_=d()},l(s){i.l(s),n=G(s),c&&c.l(s),_=d()},m(s,m){r[e].m(s,m),v(s,n,m),c&&c.m(s,m),v(s,_,m),f=!0},p(s,[m]){let w=e;e=l(s),e===w?r[e].p(s,m):(O(),E(r[w],1,1,()=>{r[w]=null}),I(),i=r[e],i?i.p(s,m):(i=r[e]=t[e](s),i.c()),h(i,1),i.m(n.parentNode,n)),s[5]?c?c.p(s,m):(c=k(s),c.c(),c.m(_.parentNode,_)):c&&(c.d(1),c=null)},i(s){f||(h(i),f=!0)},o(s){E(i),f=!1},d(s){s&&(g(n),g(_)),r[e].d(s),c&&c.d(s)}}}function ie(o,e,i){let{stores:n}=e,{page:_}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:c=null}=e;B(n.page.notify);let s=!1,m=!1,w=null;U(()=>{const u=n.page.subscribe(()=>{s&&(i(6,m=!0),j().then(()=>{i(7,w=document.title||"untitled page")}))});return i(5,s=!0),u});function N(u){T[u?"unshift":"push"](()=>{t[1]=u,i(0,t)})}function S(u){T[u?"unshift":"push"](()=>{t[0]=u,i(0,t)})}function q(u){T[u?"unshift":"push"](()=>{t[0]=u,i(0,t)})}return o.$$set=u=>{"stores"in u&&i(8,n=u.stores),"page"in u&&i(9,_=u.page),"constructors"in u&&i(1,f=u.constructors),"components"in u&&i(0,t=u.components),"form"in u&&i(2,r=u.form),"data_0"in u&&i(3,l=u.data_0),"data_1"in u&&i(4,c=u.data_1)},o.$$.update=()=>{o.$$.dirty&768&&n.page.set(_)},[t,f,r,l,c,s,m,w,n,_,N,S,q]}class oe extends z{constructor(e){super(),W(this,e,ie,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const se=[()=>a(()=>import("../nodes/0.690b5f0c.js"),["_app/immutable/nodes/0.690b5f0c.js","_app/immutable/chunks/paths.9374bef8.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/assets/0.e3b0c442.css"]),()=>a(()=>import("../nodes/1.4ae04bda.js"),["_app/immutable/nodes/1.4ae04bda.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/singletons.f41c8f11.js","_app/immutable/chunks/index.733708bb.js","_app/immutable/chunks/paths.9374bef8.js"]),()=>a(()=>import("../nodes/2.1a56c2c3.js"),["_app/immutable/nodes/2.1a56c2c3.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/3.04413261.js"),["_app/immutable/nodes/3.04413261.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/4.95703231.js"),["_app/immutable/nodes/4.95703231.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/5.d05889b9.js"),["_app/immutable/nodes/5.d05889b9.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Markdown.88297c0b.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/IconTensorflow.e7b84ee9.js","_app/immutable/chunks/index.733708bb.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/6.696a35e9.js"),["_app/immutable/nodes/6.696a35e9.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/7.5283571d.js"),["_app/immutable/nodes/7.5283571d.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/8.4599dbb3.js"),["_app/immutable/nodes/8.4599dbb3.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/9.7e57d071.js"),["_app/immutable/nodes/9.7e57d071.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Markdown.88297c0b.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/IconTensorflow.e7b84ee9.js","_app/immutable/chunks/index.733708bb.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/10.c10cc75f.js"),["_app/immutable/nodes/10.c10cc75f.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/11.e6db8857.js"),["_app/immutable/nodes/11.e6db8857.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/12.fcc0f5cf.js"),["_app/immutable/nodes/12.fcc0f5cf.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/13.2fca5c26.js"),["_app/immutable/nodes/13.2fca5c26.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/14.516e506e.js"),["_app/immutable/nodes/14.516e506e.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/15.852c5256.js"),["_app/immutable/nodes/15.852c5256.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/Youtube.347c76e5.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Markdown.88297c0b.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/IconTensorflow.e7b84ee9.js","_app/immutable/chunks/index.733708bb.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/16.c5f317f8.js"),["_app/immutable/nodes/16.c5f317f8.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/DocNotebookDropdown.653c9eec.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/17.8ed3f11a.js"),["_app/immutable/nodes/17.8ed3f11a.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/18.b3e60edd.js"),["_app/immutable/nodes/18.b3e60edd.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/19.677cd4e1.js"),["_app/immutable/nodes/19.677cd4e1.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/20.5ecbf88f.js"),["_app/immutable/nodes/20.5ecbf88f.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/21.ac22897e.js"),["_app/immutable/nodes/21.ac22897e.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/22.04240f6d.js"),["_app/immutable/nodes/22.04240f6d.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/23.cca29689.js"),["_app/immutable/nodes/23.cca29689.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/24.952a1693.js"),["_app/immutable/nodes/24.952a1693.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/25.e67907bf.js"),["_app/immutable/nodes/25.e67907bf.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/26.1e284a1e.js"),["_app/immutable/nodes/26.1e284a1e.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/27.e48a4bcb.js"),["_app/immutable/nodes/27.e48a4bcb.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/28.d9a5afcd.js"),["_app/immutable/nodes/28.d9a5afcd.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/Youtube.347c76e5.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/IconTensorflow.e7b84ee9.js","_app/immutable/chunks/index.733708bb.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/DocNotebookDropdown.653c9eec.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/29.218736a5.js"),["_app/immutable/nodes/29.218736a5.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/Youtube.347c76e5.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/DocNotebookDropdown.653c9eec.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Markdown.88297c0b.js","_app/immutable/chunks/IconTensorflow.e7b84ee9.js","_app/immutable/chunks/index.733708bb.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/30.e053a021.js"),["_app/immutable/nodes/30.e053a021.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Markdown.88297c0b.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/IconTensorflow.e7b84ee9.js","_app/immutable/chunks/index.733708bb.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/31.be6c5c7e.js"),["_app/immutable/nodes/31.be6c5c7e.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/Markdown.88297c0b.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/IconTensorflow.e7b84ee9.js","_app/immutable/chunks/index.733708bb.js","_app/immutable/chunks/Heading.7a254a62.js"]),()=>a(()=>import("../nodes/32.11812ad9.js"),["_app/immutable/nodes/32.11812ad9.js","_app/immutable/chunks/scheduler.36a0863c.js","_app/immutable/chunks/index.9c13489a.js","_app/immutable/chunks/Tip.3b06990e.js","_app/immutable/chunks/Youtube.347c76e5.js","_app/immutable/chunks/CodeBlock.05d8ec32.js","_app/immutable/chunks/DocNotebookDropdown.653c9eec.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Markdown.88297c0b.js","_app/immutable/chunks/IconTensorflow.e7b84ee9.js","_app/immutable/chunks/index.733708bb.js","_app/immutable/chunks/Heading.7a254a62.js"])],ae=[],le={"/accelerate":[2],"/add_new_model":[3],"/add_new_pipeline":[4],"/autoclass_tutorial":[5],"/big_models":[6],"/community":[7],"/converting_tensorflow_models":[8],"/create_a_model":[9],"/custom_models":[10],"/debugging":[11],"/index":[12],"/installation":[13],"/migration":[14],"/model_sharing":[15],"/multilingual":[16],"/perf_hardware":[17],"/perf_infer_cpu":[18],"/perf_infer_gpu_many":[19],"/perf_infer_gpu_one":[20],"/perf_infer_special":[21],"/perf_train_cpu_many":[23],"/perf_train_cpu":[22],"/perf_train_special":[24],"/perf_train_tpu":[25],"/pipeline_tutorial":[26],"/pr_checks":[27],"/preprocessing":[28],"/quicktour":[29],"/run_scripts":[30],"/serialization":[31],"/training":[32]},fe={handleError:({error:o})=>{console.error(o)}};export{le as dictionary,fe as hooks,re as matchers,se as nodes,oe as root,ae as server_loads};
