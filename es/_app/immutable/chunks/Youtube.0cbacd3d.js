import{s as u,f as s,n as c}from"./scheduler.36a0863c.js";import{S as n,i as m,g as f,h as d,j as h,f as l,k as i,a as p}from"./index.f891bdb2.js";function w(o){let e,r;return{c(){e=f("iframe"),this.h()},l(t){e=d(t,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),h(e).forEach(l),this.h()},h(){i(e,"class","w-full xl:w-4/6 h-80"),s(e.src,r="https://www.youtube-nocookie.com/embed/"+o[0])||i(e,"src",r),i(e,"title","YouTube video player"),i(e,"frameborder","0"),i(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),e.allowFullscreen=!0},m(t,a){p(t,e,a)},p(t,[a]){a&1&&!s(e.src,r="https://www.youtube-nocookie.com/embed/"+t[0])&&i(e,"src",r)},i:c,o:c,d(t){t&&l(e)}}}function b(o,e,r){let{id:t}=e;return o.$$set=a=>{"id"in a&&r(0,t=a.id)},[t]}class g extends n{constructor(e){super(),m(this,e,b,w,u,{id:0})}}export{g as Y};
