import{s as H,c as q,j as we,u as F,g as G,d as R,o as ke,b as $,n as A,A as ve,t as Ie,f as Z}from"./scheduler.9bc65507.js";import{S as K,i as P,g as S,h as y,j as L,f as N,k as _,a as E,y as W,E as x,d,t as h,C as ee,D as te,l as Se,s as T,c as Y,p as V,b as M,r as J,u as j,v as O,w as z,m as Ne,e as U,n as Ce,o as pe,q as Q,z as De}from"./index.707bf1b6.js";import{g as ye}from"./globals.7f7f1b26.js";import{e as X}from"./each.e59479a4.js";function Le(s){let e,n,l,t,o,a;const r=s[7].default,i=q(r,s,s[6],null);return{c(){e=S("div"),n=S("ul"),i&&i.c(),this.h()},l(u){e=y(u,"DIV",{class:!0});var g=L(e);n=y(g,"UL",{class:!0});var p=L(n);i&&i.l(p),p.forEach(N),g.forEach(N),this.h()},h(){_(n,"class","min-w-full w-auto"),_(e,"class",l="absolute top-full mt-1 min-w-full w-auto bg-white rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 "+(s[2]==="right"?"right-0":"left-0")+" "+s[0])},m(u,g){E(u,e,g),W(e,n),i&&i.m(n,null),s[8](e),t=!0,o||(a=x(e,"click",function(){we(s[1])&&s[1].apply(this,arguments)}),o=!0)},p(u,[g]){s=u,i&&i.p&&(!t||g&64)&&F(i,r,s,s[6],t?R(r,s[6],g,null):G(s[6]),null),(!t||g&5&&l!==(l="absolute top-full mt-1 min-w-full w-auto bg-white rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 "+(s[2]==="right"?"right-0":"left-0")+" "+s[0]))&&_(e,"class",l)},i(u){t||(d(i,u),t=!0)},o(u){h(i,u),t=!1},d(u){u&&N(e),i&&i.d(u),s[8](null),o=!1,a()}}}function Ae(s,e,n){let{$$slots:l={},$$scope:t}=e,{classNames:o=""}=e,{dropdownElement:a=void 0}=e,{forceAlignement:r=void 0}=e,{onClose:i}=e,u=r??"left",g;ke(()=>{if(document.addEventListener("click",p),!r){const m=document.documentElement.clientWidth,f=g==null?void 0:g.getBoundingClientRect(),c=(f==null?void 0:f.left)??0,w=(f==null?void 0:f.width)??0;n(2,u=c+w>m?"right":"left")}return()=>{document.removeEventListener("click",p)}});function p(m){const f=m.target;f!==a&&!(a!=null&&a.contains(f))&&i()}function k(m){$[m?"unshift":"push"](()=>{g=m,n(3,g)})}return s.$$set=m=>{"classNames"in m&&n(0,o=m.classNames),"dropdownElement"in m&&n(4,a=m.dropdownElement),"forceAlignement"in m&&n(5,r=m.forceAlignement),"onClose"in m&&n(1,i=m.onClose),"$$scope"in m&&n(6,t=m.$$scope)},[o,i,u,g,a,r,t,l,k]}class Ve extends K{constructor(e){super(),P(this,e,Ae,Le,H,{classNames:0,dropdownElement:4,forceAlignement:5,onClose:1})}}function Me(s){let e,n;return{c(){e=ee("svg"),n=ee("path"),this.h()},l(l){e=te(l,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0});var t=L(e);n=te(t,"path",{d:!0,fill:!0}),L(n).forEach(N),t.forEach(N),this.h()},h(){_(n,"d","M7 10l5 5l5-5z"),_(n,"fill","currentColor"),_(e,"class",s[0]),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),_(e,"aria-hidden","true"),_(e,"focusable","false"),_(e,"role","img"),_(e,"width","1em"),_(e,"height","1em"),_(e,"preserveAspectRatio","xMidYMid meet"),_(e,"viewBox","0 0 24 24"),Se(e,"transform","rotate(360deg)")},m(l,t){E(l,e,t),W(e,n)},p(l,[t]){t&1&&_(e,"class",l[0])},i:A,o:A,d(l){l&&N(e)}}}function Je(s,e,n){let{classNames:l=""}=e;return s.$$set=t=>{"classNames"in t&&n(0,l=t.classNames)},[l]}class Oe extends K{constructor(e){super(),P(this,e,Je,Me,H,{classNames:0})}}const ze=s=>({}),le=s=>({}),Ue=s=>({}),ne=s=>({});function We(s){let e,n,l,t,o,a=s[2]&&se(s),r=s[9]&&ae();return{c(){a&&a.c(),e=T(),n=Ne(s[4]),l=T(),r&&r.c(),t=U()},l(i){a&&a.l(i),e=Y(i),n=Ce(i,s[4]),l=Y(i),r&&r.l(i),t=U()},m(i,u){a&&a.m(i,u),E(i,e,u),E(i,n,u),E(i,l,u),r&&r.m(i,u),E(i,t,u),o=!0},p(i,u){i[2]?a?(a.p(i,u),u&4&&d(a,1)):(a=se(i),a.c(),d(a,1),a.m(e.parentNode,e)):a&&(V(),h(a,1,1,()=>{a=null}),M()),(!o||u&16)&&pe(n,i[4]),i[9]?r?u&512&&d(r,1):(r=ae(),r.c(),d(r,1),r.m(t.parentNode,t)):r&&(V(),h(r,1,1,()=>{r=null}),M())},i(i){o||(d(a),d(r),o=!0)},o(i){h(a),h(r),o=!1},d(i){i&&(N(e),N(n),N(l),N(t)),a&&a.d(i),r&&r.d(i)}}}function qe(s){let e;const n=s[14].button,l=q(n,s,s[18],ne);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,o){l&&l.m(t,o),e=!0},p(t,o){l&&l.p&&(!e||o&262144)&&F(l,n,t,t[18],e?R(n,t[18],o,Ue):G(t[18]),ne)},i(t){e||(d(l,t),e=!0)},o(t){h(l,t),e=!1},d(t){l&&l.d(t)}}}function se(s){let e,n,l;var t=s[2];function o(a,r){return{props:{classNames:"mr-1.5 "+a[3]}}}return t&&(e=Q(t,o(s))),{c(){e&&J(e.$$.fragment),n=U()},l(a){e&&j(e.$$.fragment,a),n=U()},m(a,r){e&&O(e,a,r),E(a,n,r),l=!0},p(a,r){if(r&4&&t!==(t=a[2])){if(e){V();const i=e;h(i.$$.fragment,1,0,()=>{z(i,1)}),M()}t?(e=Q(t,o(a)),J(e.$$.fragment),d(e.$$.fragment,1),O(e,n.parentNode,n)):e=null}else if(t){const i={};r&8&&(i.classNames="mr-1.5 "+a[3]),e.$set(i)}},i(a){l||(e&&d(e.$$.fragment,a),l=!0)},o(a){e&&h(e.$$.fragment,a),l=!1},d(a){a&&N(n),e&&z(e,a)}}}function ae(s){let e,n;return e=new Oe({props:{classNames:"-mr-1 text-gray-500"}}),{c(){J(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,t){O(e,l,t),n=!0},i(l){n||(d(e.$$.fragment,l),n=!0)},o(l){h(e.$$.fragment,l),n=!1},d(l){z(e,l)}}}function oe(s){let e,n;return e=new Ve({props:{classNames:s[6]+" "+(s[8]?"v2-dropdown-menu hidden":""),dropdownElement:s[10],forceAlignement:s[5],onClose:s[16],$$slots:{default:[Fe]},$$scope:{ctx:s}}}),{c(){J(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,t){O(e,l,t),n=!0},p(l,t){const o={};t&320&&(o.classNames=l[6]+" "+(l[8]?"v2-dropdown-menu hidden":"")),t&1024&&(o.dropdownElement=l[10]),t&32&&(o.forceAlignement=l[5]),t&2048&&(o.onClose=l[16]),t&262144&&(o.$$scope={dirty:t,ctx:l}),e.$set(o)},i(l){n||(d(e.$$.fragment,l),n=!0)},o(l){h(e.$$.fragment,l),n=!1},d(l){z(e,l)}}}function Fe(s){let e;const n=s[14].menu,l=q(n,s,s[18],le);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,o){l&&l.m(t,o),e=!0},p(t,o){l&&l.p&&(!e||o&262144)&&F(l,n,t,t[18],e?R(n,t[18],o,ze):G(t[18]),le)},i(t){e||(d(l,t),e=!0)},o(t){h(l,t),e=!1},d(t){l&&l.d(t)}}}function Ge(s){let e,n,l,t,o,a,r,i,u,g;const p=[qe,We],k=[];function m(c,w){return c[12].button?0:1}l=m(s),t=k[l]=p[l](s);let f=(s[11]||s[8])&&oe(s);return{c(){e=S("div"),n=S("button"),t.c(),a=T(),f&&f.c(),this.h()},l(c){e=y(c,"DIV",{class:!0});var w=L(e);n=y(w,"BUTTON",{class:!0,type:!0});var B=L(n);t.l(B),B.forEach(N),a=Y(w),f&&f.l(w),w.forEach(N),this.h()},h(){_(n,"class",o=""+s[1]+" "+(s[7]?"":"cursor-pointer w-full btn text-sm")+" "+(s[8]?"v2-dropdown-button":"")),_(n,"type","button"),_(e,"class",r="relative "+s[0]+" "+(s[8]?"v2-dropdown":""))},m(c,w){E(c,e,w),W(e,n),k[l].m(n,null),W(e,a),f&&f.m(e,null),s[17](e),i=!0,u||(g=x(n,"click",s[15]),u=!0)},p(c,[w]){let B=l;l=m(c),l===B?k[l].p(c,w):(V(),h(k[B],1,1,()=>{k[B]=null}),M(),t=k[l],t?t.p(c,w):(t=k[l]=p[l](c),t.c()),d(t,1),t.m(n,null)),(!i||w&386&&o!==(o=""+c[1]+" "+(c[7]?"":"cursor-pointer w-full btn text-sm")+" "+(c[8]?"v2-dropdown-button":"")))&&_(n,"class",o),c[11]||c[8]?f?(f.p(c,w),w&2304&&d(f,1)):(f=oe(c),f.c(),d(f,1),f.m(e,null)):f&&(V(),h(f,1,1,()=>{f=null}),M()),(!i||w&257&&r!==(r="relative "+c[0]+" "+(c[8]?"v2-dropdown":"")))&&_(e,"class",r)},i(c){i||(d(t),d(f),i=!0)},o(c){h(t),h(f),i=!1},d(c){c&&N(e),k[l].d(),f&&f.d(),s[17](null),u=!1,g()}}}function Re(s,e,n){let{$$slots:l={},$$scope:t}=e;const o=ve(l);let{classNames:a=""}=e,{btnClassNames:r=""}=e,{btnIcon:i=void 0}=e,{btnIconClassNames:u=""}=e,{btnLabel:g=""}=e,{forceMenuAlignement:p=void 0}=e,{menuClassNames:k=""}=e,{noBtnClass:m=void 0}=e,{selectedValue:f=void 0}=e,{useDeprecatedJS:c=!0}=e,{withBtnCaret:w=!1}=e,B,I=!1;const b=()=>n(11,I=!I),v=()=>n(11,I=!1);function D(C){$[C?"unshift":"push"](()=>{B=C,n(10,B)})}return s.$$set=C=>{"classNames"in C&&n(0,a=C.classNames),"btnClassNames"in C&&n(1,r=C.btnClassNames),"btnIcon"in C&&n(2,i=C.btnIcon),"btnIconClassNames"in C&&n(3,u=C.btnIconClassNames),"btnLabel"in C&&n(4,g=C.btnLabel),"forceMenuAlignement"in C&&n(5,p=C.forceMenuAlignement),"menuClassNames"in C&&n(6,k=C.menuClassNames),"noBtnClass"in C&&n(7,m=C.noBtnClass),"selectedValue"in C&&n(13,f=C.selectedValue),"useDeprecatedJS"in C&&n(8,c=C.useDeprecatedJS),"withBtnCaret"in C&&n(9,w=C.withBtnCaret),"$$scope"in C&&n(18,t=C.$$scope)},[a,r,i,u,g,p,k,m,c,w,B,I,o,f,l,b,v,D,t]}class Ee extends K{constructor(e){super(),P(this,e,Re,Ge,H,{classNames:0,btnClassNames:1,btnIcon:2,btnIconClassNames:3,btnLabel:4,forceMenuAlignement:5,menuClassNames:6,noBtnClass:7,selectedValue:13,useDeprecatedJS:8,withBtnCaret:9})}}function je(s){let e,n,l,t=s[5]&&ie(s);return{c(){t&&t.c(),e=T(),n=Ne(s[7])},l(o){t&&t.l(o),e=Y(o),n=Ce(o,s[7])},m(o,a){t&&t.m(o,a),E(o,e,a),E(o,n,a),l=!0},p(o,a){o[5]?t?(t.p(o,a),a&32&&d(t,1)):(t=ie(o),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(V(),h(t,1,1,()=>{t=null}),M()),(!l||a&128)&&pe(n,o[7])},i(o){l||(d(t),l=!0)},o(o){h(t),l=!1},d(o){o&&(N(e),N(n)),t&&t.d(o)}}}function Te(s){let e;const n=s[15].default,l=q(n,s,s[14],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,o){l&&l.m(t,o),e=!0},p(t,o){l&&l.p&&(!e||o&16384)&&F(l,n,t,t[14],e?R(n,t[14],o,null):G(t[14]),null)},i(t){e||(d(l,t),e=!0)},o(t){h(l,t),e=!1},d(t){l&&l.d(t)}}}function ie(s){let e,n,l;var t=s[5];function o(a,r){return{props:{classNames:"mr-1.5 "+a[6]}}}return t&&(e=Q(t,o(s))),{c(){e&&J(e.$$.fragment),n=U()},l(a){e&&j(e.$$.fragment,a),n=U()},m(a,r){e&&O(e,a,r),E(a,n,r),l=!0},p(a,r){if(r&32&&t!==(t=a[5])){if(e){V();const i=e;h(i.$$.fragment,1,0,()=>{z(i,1)}),M()}t?(e=Q(t,o(a)),J(e.$$.fragment),d(e.$$.fragment,1),O(e,n.parentNode,n)):e=null}else if(t){const i={};r&64&&(i.classNames="mr-1.5 "+a[6]),e.$set(i)}},i(a){l||(e&&d(e.$$.fragment,a),l=!0)},o(a){e&&h(e.$$.fragment,a),l=!1},d(a){a&&N(n),e&&z(e,a)}}}function Ye(s){let e,n,l,t,o,a,r,i,u,g;const p=[Te,je],k=[];function m(f,c){return f[13].default?0:1}return l=m(s),t=k[l]=p[l](s),{c(){e=S("li"),n=S("a"),t.c(),this.h()},l(f){e=y(f,"LI",{class:!0});var c=L(e);n=y(c,"A",{class:!0,"data-label":!0,"data-url":!0,"data-value":!0,href:!0,rel:!0,target:!0});var w=L(n);t.l(w),w.forEach(N),c.forEach(N),this.h()},h(){_(n,"class",o="flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-3 py-1.5 whitespace-nowrap "+s[0]+" "+(s[9]?"hover:underline":"")+" "+(s[12]?"v2-dropdown-entry":"")),_(n,"data-label",s[1]),_(n,"data-url",s[2]),_(n,"data-value",s[3]),_(n,"href",s[4]),_(n,"rel",a=s[8]?"nofollow":void 0),_(n,"target",r=s[11]?"_blank":void 0),_(e,"class","not-prose")},m(f,c){E(f,e,c),W(e,n),k[l].m(n,null),i=!0,u||(g=x(n,"click",function(){we(s[10])&&s[10].apply(this,arguments)}),u=!0)},p(f,[c]){s=f;let w=l;l=m(s),l===w?k[l].p(s,c):(V(),h(k[w],1,1,()=>{k[w]=null}),M(),t=k[l],t?t.p(s,c):(t=k[l]=p[l](s),t.c()),d(t,1),t.m(n,null)),(!i||c&4609&&o!==(o="flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-3 py-1.5 whitespace-nowrap "+s[0]+" "+(s[9]?"hover:underline":"")+" "+(s[12]?"v2-dropdown-entry":"")))&&_(n,"class",o),(!i||c&2)&&_(n,"data-label",s[1]),(!i||c&4)&&_(n,"data-url",s[2]),(!i||c&8)&&_(n,"data-value",s[3]),(!i||c&16)&&_(n,"href",s[4]),(!i||c&256&&a!==(a=s[8]?"nofollow":void 0))&&_(n,"rel",a),(!i||c&2048&&r!==(r=s[11]?"_blank":void 0))&&_(n,"target",r)},i(f){i||(d(t),i=!0)},o(f){h(t),i=!1},d(f){f&&N(e),k[l].d(),u=!1,g()}}}function He(s,e,n){let{$$slots:l={},$$scope:t}=e;const o=ve(l);let{classNames:a=""}=e,{dataLabel:r=void 0}=e,{dataUrl:i=void 0}=e,{dataValue:u=void 0}=e,{href:g=void 0}=e,{icon:p=void 0}=e,{iconClassNames:k=""}=e,{label:m=""}=e,{noFollow:f=!1}=e,{underline:c=!1}=e,{onClick:w=()=>{}}=e,{targetBlank:B=!1}=e,{useDeprecatedJS:I=!0}=e;return s.$$set=b=>{"classNames"in b&&n(0,a=b.classNames),"dataLabel"in b&&n(1,r=b.dataLabel),"dataUrl"in b&&n(2,i=b.dataUrl),"dataValue"in b&&n(3,u=b.dataValue),"href"in b&&n(4,g=b.href),"icon"in b&&n(5,p=b.icon),"iconClassNames"in b&&n(6,k=b.iconClassNames),"label"in b&&n(7,m=b.label),"noFollow"in b&&n(8,f=b.noFollow),"underline"in b&&n(9,c=b.underline),"onClick"in b&&n(10,w=b.onClick),"targetBlank"in b&&n(11,B=b.targetBlank),"useDeprecatedJS"in b&&n(12,I=b.useDeprecatedJS),"$$scope"in b&&n(14,t=b.$$scope)},[a,r,i,u,g,p,k,m,f,c,w,B,I,o,t,l]}class Be extends K{constructor(e){super(),P(this,e,He,Ye,H,{classNames:0,dataLabel:1,dataUrl:2,dataValue:3,href:4,icon:5,iconClassNames:6,label:7,noFollow:8,underline:9,onClick:10,targetBlank:11,useDeprecatedJS:12})}}const{window:Ke}=ye,Pe=s=>({}),re=s=>({slot:"button"});function fe(s,e,n){const l=s.slice();return l[11]=e[n].label,l[12]=e[n].value,l}const Qe=s=>({}),ue=s=>({slot:"menu"}),Xe=s=>({}),ce=s=>({slot:"button"});function _e(s,e,n){const l=s.slice();return l[11]=e[n].label,l[12]=e[n].value,l}const Ze=s=>({}),me=s=>({slot:"menu"}),xe=s=>({}),de=s=>({});function $e(s){let e,n;return e=new Ee({props:{btnLabel:"",classNames:"colab-dropdown",noBtnClass:!0,useDeprecatedJS:!1,$$slots:{menu:[st],button:[lt]},$$scope:{ctx:s}}}),{c(){J(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,t){O(e,l,t),n=!0},p(l,t){const o={};t&1024&&(o.$$scope={dirty:t,ctx:l}),e.$set(o)},i(l){n||(d(e.$$.fragment,l),n=!0)},o(l){h(e.$$.fragment,l),n=!1},d(l){z(e,l)}}}function et(s){let e,n,l;return{c(){e=S("a"),n=S("img"),this.h()},l(t){e=y(t,"A",{href:!0,target:!0});var o=L(e);n=y(o,"IMG",{alt:!0,class:!0,src:!0}),o.forEach(N),this.h()},h(){_(n,"alt","Open In Colab"),_(n,"class","!m-0"),Z(n.src,l="https://colab.research.google.com/assets/colab-badge.svg")||_(n,"src",l),_(e,"href",s[2][0].value),_(e,"target","_blank")},m(t,o){E(t,e,o),W(e,n)},p:A,i:A,o:A,d(t){t&&N(e)}}}function tt(s){let e,n;return{c(){e=S("img"),this.h()},l(l){e=y(l,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){_(e,"alt","Open In Colab"),_(e,"class","!m-0"),Z(e.src,n="https://colab.research.google.com/assets/colab-badge.svg")||_(e,"src",n)},m(l,t){E(l,e,t)},p:A,d(l){l&&N(e)}}}function lt(s){let e;const n=s[6].default,l=q(n,s,s[10],ce),t=l||tt();return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,a){t&&t.m(o,a),e=!0},p(o,a){l&&l.p&&(!e||a&1024)&&F(l,n,o,o[10],e?R(n,o[10],a,Xe):G(o[10]),ce)},i(o){e||(d(t,o),e=!0)},o(o){h(t,o),e=!1},d(o){t&&t.d(o)}}}function he(s){let e,n;function l(){return s[7](s[12])}return e=new Be({props:{classNames:"text-sm !no-underline",iconClassNames:"text-gray-500",label:s[11],onClick:l,useDeprecatedJS:!1}}),{c(){J(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){O(e,t,o),n=!0},p(t,o){s=t},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function nt(s){let e,n,l=X(s[2]),t=[];for(let a=0;a<l.length;a+=1)t[a]=he(_e(s,l,a));const o=a=>h(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=U()},l(a){for(let r=0;r<t.length;r+=1)t[r].l(a);e=U()},m(a,r){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(a,r);E(a,e,r),n=!0},p(a,r){if(r&4){l=X(a[2]);let i;for(i=0;i<l.length;i+=1){const u=_e(a,l,i);t[i]?(t[i].p(u,r),d(t[i],1)):(t[i]=he(u),t[i].c(),d(t[i],1),t[i].m(e.parentNode,e))}for(V(),i=l.length;i<t.length;i+=1)o(i);M()}},i(a){if(!n){for(let r=0;r<l.length;r+=1)d(t[r]);n=!0}},o(a){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)h(t[r]);n=!1},d(a){a&&N(e),De(t,a)}}}function st(s){let e;const n=s[6].default,l=q(n,s,s[10],me),t=l||nt(s);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,a){t&&t.m(o,a),e=!0},p(o,a){l&&l.p&&(!e||a&1024)&&F(l,n,o,o[10],e?R(n,o[10],a,Ze):G(o[10]),me)},i(o){e||(d(t,o),e=!0)},o(o){h(t,o),e=!1},d(o){t&&t.d(o)}}}function at(s){let e,n;return e=new Ee({props:{btnLabel:"",classNames:"colab-dropdown",noBtnClass:!0,useDeprecatedJS:!1,$$slots:{menu:[ut],button:[rt]},$$scope:{ctx:s}}}),{c(){J(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,t){O(e,l,t),n=!0},p(l,t){const o={};t&1024&&(o.$$scope={dirty:t,ctx:l}),e.$set(o)},i(l){n||(d(e.$$.fragment,l),n=!0)},o(l){h(e.$$.fragment,l),n=!1},d(l){z(e,l)}}}function ot(s){let e,n,l;return{c(){e=S("a"),n=S("img"),this.h()},l(t){e=y(t,"A",{href:!0,target:!0});var o=L(e);n=y(o,"IMG",{alt:!0,class:!0,src:!0}),o.forEach(N),this.h()},h(){_(n,"alt","Open In Studio Lab"),_(n,"class","!m-0"),Z(n.src,l="https://studiolab.sagemaker.aws/studiolab.svg")||_(n,"src",l),_(e,"href",s[3][0].value),_(e,"target","_blank")},m(t,o){E(t,e,o),W(e,n)},p:A,i:A,o:A,d(t){t&&N(e)}}}function it(s){let e,n;return{c(){e=S("img"),this.h()},l(l){e=y(l,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){_(e,"alt","Open In Studio Lab"),_(e,"class","!m-0"),Z(e.src,n="https://studiolab.sagemaker.aws/studiolab.svg")||_(e,"src",n)},m(l,t){E(l,e,t)},p:A,d(l){l&&N(e)}}}function rt(s){let e;const n=s[6].default,l=q(n,s,s[10],re),t=l||it();return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,a){t&&t.m(o,a),e=!0},p(o,a){l&&l.p&&(!e||a&1024)&&F(l,n,o,o[10],e?R(n,o[10],a,Pe):G(o[10]),re)},i(o){e||(d(t,o),e=!0)},o(o){h(t,o),e=!1},d(o){t&&t.d(o)}}}function ge(s){let e,n;function l(){return s[8](s[12])}return e=new Be({props:{classNames:"text-sm !no-underline",iconClassNames:"text-gray-500",label:s[11],onClick:l,useDeprecatedJS:!1}}),{c(){J(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){O(e,t,o),n=!0},p(t,o){s=t},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function ft(s){let e,n,l=X(s[3]),t=[];for(let a=0;a<l.length;a+=1)t[a]=ge(fe(s,l,a));const o=a=>h(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=U()},l(a){for(let r=0;r<t.length;r+=1)t[r].l(a);e=U()},m(a,r){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(a,r);E(a,e,r),n=!0},p(a,r){if(r&8){l=X(a[3]);let i;for(i=0;i<l.length;i+=1){const u=fe(a,l,i);t[i]?(t[i].p(u,r),d(t[i],1)):(t[i]=ge(u),t[i].c(),d(t[i],1),t[i].m(e.parentNode,e))}for(V(),i=l.length;i<t.length;i+=1)o(i);M()}},i(a){if(!n){for(let r=0;r<l.length;r+=1)d(t[r]);n=!0}},o(a){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)h(t[r]);n=!1},d(a){a&&N(e),De(t,a)}}}function ut(s){let e;const n=s[6].default,l=q(n,s,s[10],ue),t=l||ft(s);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,a){t&&t.m(o,a),e=!0},p(o,a){l&&l.p&&(!e||a&1024)&&F(l,n,o,o[10],e?R(n,o[10],a,Qe):G(o[10]),ue)},i(o){e||(d(t,o),e=!0)},o(o){h(t,o),e=!1},d(o){t&&t.d(o)}}}function ct(s){let e,n,l,t,o,a,r,i,u,g,p;const k=s[6].alwaysVisible,m=q(k,s,s[10],de),f=[et,$e],c=[];function w(v,D){return v[2].length===1?0:v[2].length>1?1:-1}~(l=w(s))&&(t=c[l]=f[l](s));const B=[ot,at],I=[];function b(v,D){return v[3].length===1?0:v[3].length>1?1:-1}return~(a=b(s))&&(r=I[a]=B[a](s)),{c(){e=S("div"),m&&m.c(),n=T(),t&&t.c(),o=T(),r&&r.c(),this.h()},l(v){e=y(v,"DIV",{class:!0});var D=L(e);m&&m.l(D),n=Y(D),t&&t.l(D),o=Y(D),r&&r.l(D),D.forEach(N),this.h()},h(){_(e,"class",i="flex space-x-1 "+s[0])},m(v,D){E(v,e,D),m&&m.m(e,null),W(e,n),~l&&c[l].m(e,null),W(e,o),~a&&I[a].m(e,null),s[9](e),u=!0,g||(p=x(Ke,"resize",s[4]),g=!0)},p(v,[D]){m&&m.p&&(!u||D&1024)&&F(m,k,v,v[10],u?R(k,v[10],D,xe):G(v[10]),de),t&&t.p(v,D),r&&r.p(v,D),(!u||D&1&&i!==(i="flex space-x-1 "+v[0]))&&_(e,"class",i)},i(v){u||(d(m,v),d(t),d(r),u=!0)},o(v){h(m,v),h(t),h(r),u=!1},d(v){v&&N(e),m&&m.d(v),~l&&c[l].d(),~a&&I[a].d(),s[9](null),g=!1,p()}}}function be(s){window.open(s)}function _t(s,e,n){let{$$slots:l={},$$scope:t}=e,{options:o=[]}=e,{classNames:a=""}=e,r;const i=o.filter(f=>f.value.includes("colab.research.google.com")),u=o.filter(f=>f.value.includes("studiolab.sagemaker.aws"));function g(){const f=document.querySelector(".prose-doc h1"),c=document.querySelector(".prose-doc h1 > span");if(f&&c){const{width:w}=f.getBoundingClientRect(),{width:B}=c.getBoundingClientRect();let I=0;for(let v=0;v<r.children.length;v++){const D=r.children.item(v);D&&(I+=D.clientWidth)}const b=20;w-B<I+b?r.classList.remove("absolute"):r.classList.add("absolute")}}ke(()=>{(async()=>(await Ie(),g()))()});const p=f=>be(f),k=f=>be(f);function m(f){$[f?"unshift":"push"](()=>{r=f,n(1,r)})}return s.$$set=f=>{"options"in f&&n(5,o=f.options),"classNames"in f&&n(0,a=f.classNames),"$$scope"in f&&n(10,t=f.$$scope)},[a,r,i,u,g,o,l,p,k,m,t]}class bt extends K{constructor(e){super(),P(this,e,_t,ct,H,{options:5,classNames:0})}}export{bt as D};