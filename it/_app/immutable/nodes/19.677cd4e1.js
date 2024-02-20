import{s as S,o as I,n as k}from"../chunks/scheduler.36a0863c.js";import{S as N,i as Q,g as $,s as u,r as M,A as R,h as g,f as a,c,j,u as U,x as H,k as A,y as D,a as i,v as b,d as C,t as E,w as G}from"../chunks/index.9c13489a.js";import{T as F}from"../chunks/Tip.3b06990e.js";import{H as B}from"../chunks/Heading.7a254a62.js";function J(_){let n,o='Nota: Un setup con GPU multiple può utilizzare la maggior parte delle strategie descritte nella <a href="./perf_infer_gpu_one">sezione con GPU singola</a>. Tuttavia, è necessario conoscere delle tecniche semplici che possono essere utilizzate per un risultato migliore.';return{c(){n=$("p"),n.innerHTML=o},l(r){n=g(r,"P",{"data-svelte-h":!0}),H(n)!=="svelte-1x4c7ja"&&(n.innerHTML=o)},m(r,d){i(r,n,d)},p:k,d(r){r&&a(n)}}}function K(_){let n,o,r,d,l,z,p,L="Questo documento contiene informazioni su come fare inferenza in maniera efficiente su GPU multiple.",P,s,v,m,T,f,q='Abbiamo recentemente integrato <code>BetterTransformer</code> per inferenza più rapida su multi-GPU per modelli su testo, immagini e audio. Controlla il documento con queste integrazioni <a href="https://huggingface.co/docs/optimum/bettertransformer/overview" rel="nofollow">qui</a> per maggiori dettagli.',w,h,x;return l=new B({props:{title:"Inferenza Efficiente su GPU Multiple",local:"inferenza-efficiente-su-gpu-multiple",headingTag:"h1"}}),s=new F({props:{$$slots:{default:[J]},$$scope:{ctx:_}}}),m=new B({props:{title:"BetterTransformer per inferenza più rapida",local:"bettertransformer-per-inferenza-più-rapida",headingTag:"h2"}}),{c(){n=$("meta"),o=u(),r=$("p"),d=u(),M(l.$$.fragment),z=u(),p=$("p"),p.textContent=L,P=u(),M(s.$$.fragment),v=u(),M(m.$$.fragment),T=u(),f=$("p"),f.innerHTML=q,w=u(),h=$("p"),this.h()},l(e){const t=R("svelte-u9bgzb",document.head);n=g(t,"META",{name:!0,content:!0}),t.forEach(a),o=c(e),r=g(e,"P",{}),j(r).forEach(a),d=c(e),U(l.$$.fragment,e),z=c(e),p=g(e,"P",{"data-svelte-h":!0}),H(p)!=="svelte-anqryh"&&(p.textContent=L),P=c(e),U(s.$$.fragment,e),v=c(e),U(m.$$.fragment,e),T=c(e),f=g(e,"P",{"data-svelte-h":!0}),H(f)!=="svelte-j8irol"&&(f.innerHTML=q),w=c(e),h=g(e,"P",{}),j(h).forEach(a),this.h()},h(){A(n,"name","hf:doc:metadata"),A(n,"content",O)},m(e,t){D(document.head,n),i(e,o,t),i(e,r,t),i(e,d,t),b(l,e,t),i(e,z,t),i(e,p,t),i(e,P,t),b(s,e,t),i(e,v,t),b(m,e,t),i(e,T,t),i(e,f,t),i(e,w,t),i(e,h,t),x=!0},p(e,[t]){const y={};t&2&&(y.$$scope={dirty:t,ctx:e}),s.$set(y)},i(e){x||(C(l.$$.fragment,e),C(s.$$.fragment,e),C(m.$$.fragment,e),x=!0)},o(e){E(l.$$.fragment,e),E(s.$$.fragment,e),E(m.$$.fragment,e),x=!1},d(e){e&&(a(o),a(r),a(d),a(z),a(p),a(P),a(v),a(T),a(f),a(w),a(h)),a(n),G(l,e),G(s,e),G(m,e)}}}const O='{"title":"Inferenza Efficiente su GPU Multiple","local":"inferenza-efficiente-su-gpu-multiple","sections":[{"title":"BetterTransformer per inferenza più rapida","local":"bettertransformer-per-inferenza-più-rapida","sections":[],"depth":2}],"depth":1}';function V(_){return I(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ee extends N{constructor(n){super(),Q(this,n,V,K,S,{})}}export{ee as component};
