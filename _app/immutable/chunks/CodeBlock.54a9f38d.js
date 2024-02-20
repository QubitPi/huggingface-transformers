import{s as E,n as N,y as U,r as Z}from"./scheduler.9bc65507.js";import{S as H,i as V,C as w,D as C,j as g,f as d,k as i,a as k,y as b,g as _,s as A,m as j,h as v,c as R,n as q,l as S,o as P,r as T,u as x,v as B,E as y,d as D,t as I,w as M,H as Y,B as z}from"./index.707bf1b6.js";function F(s){const e=document.createElement("textarea");document.body.appendChild(e),e.value=s,e.select(),document.execCommand("copy"),document.body.removeChild(e)}function G(s){let e,t,n,l;return{c(){e=w("svg"),t=w("path"),n=w("path"),l=w("rect"),this.h()},l(r){e=C(r,"svg",{class:!0,xmlns:!0,"aria-hidden":!0,fill:!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var a=g(e);t=C(a,"path",{d:!0,transform:!0}),g(t).forEach(d),n=C(a,"path",{d:!0,transform:!0}),g(n).forEach(d),l=C(a,"rect",{fill:!0,width:!0,height:!0}),g(l).forEach(d),a.forEach(d),this.h()},h(){i(t,"d","M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"),i(t,"transform","translate(0)"),i(n,"d","M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"),i(n,"transform","translate(0)"),i(l,"fill","none"),i(l,"width","32"),i(l,"height","32"),i(e,"class",s[0]),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"aria-hidden","true"),i(e,"fill","currentColor"),i(e,"focusable","false"),i(e,"role","img"),i(e,"width","1em"),i(e,"height","1em"),i(e,"preserveAspectRatio","xMidYMid meet"),i(e,"viewBox","0 0 32 32")},m(r,a){k(r,e,a),b(e,t),b(e,n),b(e,l)},p(r,[a]){a&1&&i(e,"class",r[0])},i:N,o:N,d(r){r&&d(e)}}}function J(s,e,t){let{classNames:n=""}=e;return s.$$set=l=>{"classNames"in l&&t(0,n=l.classNames)},[n]}class K extends H{constructor(e){super(),V(this,e,J,G,E,{classNames:0})}}function L(s){let e,t,n,l,r;return{c(){e=_("div"),t=_("div"),n=A(),l=j(s[1]),this.h()},l(a){e=v(a,"DIV",{class:!0});var u=g(e);t=v(u,"DIV",{class:!0,style:!0}),g(t).forEach(d),n=R(u),l=q(u,s[1]),u.forEach(d),this.h()},h(){i(t,"class","absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-black border-4 border-t-0"),S(t,"border-left-color","transparent"),S(t,"border-right-color","transparent"),i(e,"class",r="absolute pointer-events-none transition-opacity bg-black text-white py-1 px-2 leading-tight rounded font-normal shadow "+s[2]+" "+s[0])},m(a,u){k(a,e,u),b(e,t),b(e,n),b(e,l)},p(a,[u]){u&2&&P(l,a[1]),u&5&&r!==(r="absolute pointer-events-none transition-opacity bg-black text-white py-1 px-2 leading-tight rounded font-normal shadow "+a[2]+" "+a[0])&&i(e,"class",r)},i:N,o:N,d(a){a&&d(e)}}}function Q(s,e,t){let{classNames:n=""}=e,{label:l="Copied"}=e,{position:r="left-1/2 top-full transform -translate-x-1/2 translate-y-2"}=e;return s.$$set=a=>{"classNames"in a&&t(0,n=a.classNames),"label"in a&&t(1,l=a.label),"position"in a&&t(2,r=a.position)},[n,l,r]}class W extends H{constructor(e){super(),V(this,e,Q,L,E,{classNames:0,label:1,position:2})}}function X(s){let e,t,n,l,r,a,u,m,f;return t=new K({}),l=new W({props:{classNames:s[4]?"opacity-100":"opacity-0"}}),{c(){e=_("button"),T(t.$$.fragment),n=A(),T(l.$$.fragment),this.h()},l(c){e=v(c,"BUTTON",{class:!0,title:!0,type:!0});var o=g(e);x(t.$$.fragment,o),n=R(o),x(l.$$.fragment,o),o.forEach(d),this.h()},h(){i(e,"class",r="inline-flex items-center relative text-sm focus:text-green-500 cursor-pointer focus:outline-none "+s[0]+" "+(s[2]==="text"?"mx-0.5":"")+" "+(s[2]==="button"?"btn":"")+" "+(s[2]==="button-clear"?"py-1 px-2 border rounded-lg shadow-sm":"")+" "+(!s[4]&&["button-clear","text"].includes(s[2])?"text-gray-600":"")+" "+(s[4]?"text-green-500":"")),i(e,"title",a=s[3]||s[1]||"Copy to clipboard"),i(e,"type","button")},m(c,o){k(c,e,o),B(t,e,null),b(e,n),B(l,e,null),u=!0,m||(f=y(e,"click",s[5]),m=!0)},p(c,[o]){const h={};o&16&&(h.classNames=c[4]?"opacity-100":"opacity-0"),l.$set(h),(!u||o&21&&r!==(r="inline-flex items-center relative text-sm focus:text-green-500 cursor-pointer focus:outline-none "+c[0]+" "+(c[2]==="text"?"mx-0.5":"")+" "+(c[2]==="button"?"btn":"")+" "+(c[2]==="button-clear"?"py-1 px-2 border rounded-lg shadow-sm":"")+" "+(!c[4]&&["button-clear","text"].includes(c[2])?"text-gray-600":"")+" "+(c[4]?"text-green-500":"")))&&i(e,"class",r),(!u||o&10&&a!==(a=c[3]||c[1]||"Copy to clipboard"))&&i(e,"title",a)},i(c){u||(D(t.$$.fragment,c),D(l.$$.fragment,c),u=!0)},o(c){I(t.$$.fragment,c),I(l.$$.fragment,c),u=!1},d(c){c&&d(e),M(t),M(l),m=!1,f()}}}function $(s,e,t){let{classNames:n=""}=e,{label:l=""}=e,{style:r="text"}=e,{title:a=""}=e,{value:u}=e,m=!1,f;U(()=>{f&&clearTimeout(f)});function c(){F(decodeURIComponent(atob(u))),t(4,m=!0),f&&clearTimeout(f),f=setTimeout(()=>{t(4,m=!1)},1e3)}return s.$$set=o=>{"classNames"in o&&t(0,n=o.classNames),"label"in o&&t(1,l=o.label),"style"in o&&t(2,r=o.style),"title"in o&&t(3,a=o.title),"value"in o&&t(6,u=o.value)},[n,l,r,a,m,c,u]}class ee extends H{constructor(e){super(),V(this,e,$,X,E,{classNames:0,label:1,style:2,title:3,value:6})}}function te(s){let e,t,n,l,r,a,u,m,f,c;return n=new ee({props:{classNames:"transition duration-200 ease-in-out "+(s[3]&&"opacity-0"),label:"code excerpt",value:s[0]}}),{c(){e=_("div"),t=_("div"),T(n.$$.fragment),l=A(),r=_("pre"),a=new Y(!1),this.h()},l(o){e=v(o,"DIV",{class:!0});var h=g(e);t=v(h,"DIV",{class:!0});var p=g(t);x(n.$$.fragment,p),p.forEach(d),l=R(h),r=v(h,"PRE",{class:!0});var O=g(r);a=z(O,!1),O.forEach(d),h.forEach(d),this.h()},h(){i(t,"class","absolute top-2.5 right-4"),a.a=null,i(r,"class",u=s[2]?"whitespace-pre-wrap":""),i(e,"class","code-block relative")},m(o,h){k(o,e,h),b(e,t),B(n,t,null),b(e,l),b(e,r),a.m(s[1],r),m=!0,f||(c=[y(e,"mouseover",s[4]),y(e,"focus",s[4]),y(e,"mouseout",s[5]),y(e,"blur",s[5])],f=!0)},p(o,[h]){const p={};h&8&&(p.classNames="transition duration-200 ease-in-out "+(o[3]&&"opacity-0")),h&1&&(p.value=o[0]),n.$set(p),(!m||h&2)&&a.p(o[1]),(!m||h&4&&u!==(u=o[2]?"whitespace-pre-wrap":""))&&i(r,"class",u)},i(o){m||(D(n.$$.fragment,o),m=!0)},o(o){I(n.$$.fragment,o),m=!1},d(o){o&&d(e),M(n),f=!1,Z(c)}}}function ae(s,e,t){let n=!0,{code:l=""}=e,{highlighted:r=""}=e,{wrap:a=!1}=e;function u(){t(3,n=!1)}function m(){t(3,n=!0)}return s.$$set=f=>{"code"in f&&t(0,l=f.code),"highlighted"in f&&t(1,r=f.highlighted),"wrap"in f&&t(2,a=f.wrap)},[l,r,a,n,u,m]}class ne extends H{constructor(e){super(),V(this,e,ae,te,E,{code:0,highlighted:1,wrap:2})}}export{ne as C};