import{b as T}from"../chunks/paths.6f8a6f1b.js";import{s as R,c as B,u as F,g as G,d as H}from"../chunks/scheduler.9bc65507.js";import{S as W,i as X,e as S,a as x,d as z,t as A,f as _,g as v,s as j,h as b,x as q,c as L,j as g,k as m,y as k,z as Z,m as J,n as K,o as Q}from"../chunks/index.707bf1b6.js";import{e as M}from"../chunks/each.e59479a4.js";const $=!0;async function ee({fetch:n}){return{}}const ue=Object.freeze(Object.defineProperty({__proto__:null,load:ee,prerender:$},Symbol.toStringTag,{value:"Module"}));function U(n,t,r){const a=n.slice();return a[4]=t[r],a}function te(n){let t,r=`body,
		html {
			padding: 0;
			margin: 0;
		}`,a,e,l,o,h,c,p,D,y,N="Sub side menu",w,E=M(n[0]),f=[];for(let s=0;s<E.length;s+=1)f[s]=Y(U(n,E,s));const I=n[3].default,d=B(I,n,n[2],null);return{c(){t=v("style"),t.textContent=r,a=j(),e=v("div"),l=v("div"),o=v("ul");for(let s=0;s<f.length;s+=1)f[s].c();h=j(),c=v("div"),p=v("div"),d&&d.c(),D=j(),y=v("div"),y.textContent=N,this.h()},l(s){t=b(s,"STYLE",{"data-svelte-h":!0}),q(t)!=="svelte-1agysj5"&&(t.textContent=r),a=L(s),e=b(s,"DIV",{class:!0});var u=g(e);l=b(u,"DIV",{class:!0});var i=g(l);o=b(i,"UL",{class:!0});var C=g(o);for(let V=0;V<f.length;V+=1)f[V].l(C);C.forEach(_),i.forEach(_),h=L(u),c=b(u,"DIV",{class:!0});var O=g(c);p=b(O,"DIV",{class:!0});var P=g(p);d&&d.l(P),P.forEach(_),O.forEach(_),D=L(u),y=b(u,"DIV",{class:!0,"data-svelte-h":!0}),q(y)!=="svelte-4golw1"&&(y.textContent=N),u.forEach(_),this.h()},h(){m(o,"class","pt-2 flex flex-col pl-3 w-full"),m(l,"class","w-[270px] 2xl:w-[300px] hidden md:block border-r-2 shrink-0"),m(p,"class","prose prose-doc dark:prose-light max-w-4xl mx-auto break-words relative"),m(c,"class","px-4 pt-3 grow"),m(y,"class","w-[270px] 2xl:w-[305px] hidden lg:block border-l-2 shrink-0 opacity-50 p-4"),m(e,"class","flex")},m(s,u){x(s,t,u),x(s,a,u),x(s,e,u),k(e,l),k(l,o);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(o,null);k(e,h),k(e,c),k(c,p),d&&d.m(p,null),k(e,D),k(e,y),w=!0},p(s,u){if(u&1){E=M(s[0]);let i;for(i=0;i<E.length;i+=1){const C=U(s,E,i);f[i]?f[i].p(C,u):(f[i]=Y(C),f[i].c(),f[i].m(o,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=E.length}d&&d.p&&(!w||u&4)&&F(d,I,s,s[2],w?H(I,s[2],u,null):G(s[2]),null)},i(s){w||(z(d,s),w=!0)},o(s){A(d,s),w=!1},d(s){s&&(_(t),_(a),_(e)),Z(f,s),d&&d.d(s)}}}function le(n){let t;const r=n[3].default,a=B(r,n,n[2],null);return{c(){a&&a.c()},l(e){a&&a.l(e)},m(e,l){a&&a.m(e,l),t=!0},p(e,l){a&&a.p&&(!t||l&4)&&F(a,r,e,e[2],t?H(r,e[2],l,null):G(e[2]),null)},i(e){t||(z(a,e),t=!0)},o(e){A(a,e),t=!1},d(e){a&&a.d(e)}}}function ae(n){let t,r=n[4].title+"",a;return{c(){t=v("span"),a=J(r),this.h()},l(e){t=b(e,"SPAN",{role:!0,class:!0});var l=g(t);a=K(l,r),l.forEach(_),this.h()},h(){m(t,"role","navigation"),m(t,"class","opacity-50 text-lg block text-gray-500 pr-2 hover:text-black dark:hover:text-gray-300 py-1")},m(e,l){x(e,t,l),k(t,a)},p(e,l){l&1&&r!==(r=e[4].title+"")&&Q(a,r)},d(e){e&&_(t)}}}function re(n){let t,r=n[4].title+"",a,e;return{c(){t=v("a"),a=J(r),this.h()},l(l){t=b(l,"A",{role:!0,class:!0,href:!0});var o=g(t);a=K(o,r),o.forEach(_),this.h()},h(){m(t,"role","navigation"),m(t,"class","block text-gray-500 pr-2 hover:text-black dark:hover:text-gray-300 py-1"),m(t,"href",e=T+"/"+n[4].local.replace(/\bindex$/,""))},m(l,o){x(l,t,o),k(t,a)},p(l,o){o&1&&r!==(r=l[4].title+"")&&Q(a,r),o&1&&e!==(e=T+"/"+l[4].local.replace(/\bindex$/,""))&&m(t,"href",e)},d(l){l&&_(t)}}}function Y(n){let t;function r(l,o){return l[4].local?re:ae}let a=r(n),e=a(n);return{c(){e.c(),t=S()},l(l){e.l(l),t=S()},m(l,o){e.m(l,o),x(l,t,o)},p(l,o){a===(a=r(l))&&e?e.p(l,o):(e.d(1),e=a(l),e&&(e.c(),e.m(t.parentNode,t)))},d(l){l&&_(t),e.d(l)}}}function se(n){let t,r,a,e;const l=[le,te],o=[];function h(c,p){return 0}return t=h(),r=o[t]=l[t](n),{c(){r.c(),a=S()},l(c){r.l(c),a=S()},m(c,p){o[t].m(c,p),x(c,a,p),e=!0},p(c,[p]){r.p(c,p)},i(c){e||(z(r),e=!0)},o(c){A(r),e=!1},d(c){c&&_(a),o[t].d(c)}}}function oe(n,t,r){let{$$slots:a={},$$scope:e}=t,{data:l}=t,{toc:o=l.toc??[]}=t;return n.$$set=h=>{"data"in h&&r(1,l=h.data),"toc"in h&&r(0,o=h.toc),"$$scope"in h&&r(2,e=h.$$scope)},[o,l,e,a]}class _e extends W{constructor(t){super(),X(this,t,oe,se,R,{data:1,toc:0})}}export{_e as component,ue as universal};