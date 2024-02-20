import{s as pe,n as ge,o as he}from"../chunks/scheduler.36a0863c.js";import{S as _e,i as Pe,g as r,s as i,r as E,A as $e,h as s,f as n,c as o,j as de,u as T,x as l,k as fe,y as ve,a,v as G,d as L,t as j,w as z}from"../chunks/index.f891bdb2.js";import{H as I}from"../chunks/Heading.3fb90772.js";function Ce(ee){let c,H,y,M,m,S,u,te="Entrenar modelos grandes de transformadores y desplegarlos en producción presenta varios desafíos. Durante el entrenamiento, el modelo puede requerir más memoria de GPU de la disponible o mostrar una velocidad de entrenamiento lenta. En la fase de implementación, el modelo puede tener dificultades para manejar el rendimiento necesario en un entorno de producción.",A,d,ne="Esta documentación tiene como objetivo ayudarte a superar estos desafíos y encontrar la configuración óptima para tu caso de uso. Las guías están divididas en secciones de entrenamiento e inferencia, ya que cada una presenta diferentes desafíos y soluciones. Dentro de cada sección, encontrarás guías separadas para diferentes configuraciones de hardware, como GPU única vs. multi-GPU para el entrenamiento o CPU vs. GPU para la inferencia.",R,f,ae="Utiliza este documento como punto de partida para navegar hacia los métodos que se ajusten a tu escenario.",k,p,B,g,ie="Entrenar modelos grandes de transformadores de manera eficiente requiere un acelerador como una GPU o TPU. El caso más común es cuando tienes una GPU única. Los métodos que puedes aplicar para mejorar la eficiencia de entrenamiento en una GPU única también se aplican a otras configuraciones, como múltiples GPU. Sin embargo, también existen técnicas específicas para entrenamiento con múltiples GPU o CPU, las cuales cubrimos en secciones separadas.",D,h,oe='<li><a href="https://huggingface.co/docs/transformers/perf_train_gpu_one" rel="nofollow">Métodos y herramientas para un entrenamiento eficiente en una sola GPU</a>: comienza aquí para aprender enfoques comunes que pueden ayudar a optimizar la utilización de memoria de la GPU, acelerar el entrenamiento o ambas cosas.</li> <li><a href="https://huggingface.co/docs/transformers/perf_train_gpu_many" rel="nofollow">Sección de entrenamiento con varias GPU</a>: explora esta sección para conocer métodos de optimización adicionales que se aplican a configuraciones con varias GPU, como paralelismo de datos, tensores y canalizaciones.</li> <li><a href="https://huggingface.co/docs/transformers/perf_train_cpu" rel="nofollow">Sección de entrenamiento en CPU</a>: aprende sobre entrenamiento de precisión mixta en CPU.</li> <li><a href="https://huggingface.co/docs/transformers/perf_train_cpu_many" rel="nofollow">Entrenamiento eficiente en múltiples CPUs</a>: aprende sobre el entrenamiento distribuido en CPU.</li> <li><a href="https://huggingface.co/docs/transformers/perf_train_tpu_tf" rel="nofollow">Entrenamiento en TPU con TensorFlow</a>: si eres nuevo en TPUs, consulta esta sección para obtener una introducción basada en opiniones sobre el entrenamiento en TPUs y el uso de XLA.</li> <li><a href="https://huggingface.co/docs/transformers/perf_hardware" rel="nofollow">Hardware personalizado para el entrenamiento</a>: encuentra consejos y trucos al construir tu propia plataforma de aprendizaje profundo.</li> <li><a href="https://huggingface.co/docs/transformers/hpo_train" rel="nofollow">Búsqueda de hiperparámetros utilizando la API del Entrenador</a></li>',F,_,X,P,re="Realizar inferencias eficientes con modelos grandes en un entorno de producción puede ser tan desafiante como entrenarlos. En las siguientes secciones, describimos los pasos para ejecutar inferencias en CPU y configuraciones con GPU única/múltiple.",J,$,se='<li><a href="https://huggingface.co/docs/transformers/perf_infer_cpu" rel="nofollow">Inferencia en una sola CPU</a></li> <li><a href="https://huggingface.co/docs/transformers/perf_infer_gpu_one" rel="nofollow">Inferencia en una sola GPU</a></li> <li><a href="https://huggingface.co/docs/transformers/perf_infer_gpu_one" rel="nofollow">Inferencia con múltiples GPU</a></li> <li><a href="https://huggingface.co/docs/transformers/tf_xla" rel="nofollow">Integración de XLA para modelos de TensorFlow</a></li>',K,v,N,C,le="Aquí encontrarás técnicas, consejos y trucos que aplican tanto si estás entrenando un modelo como si estás ejecutando inferencias con él.",O,x,ce='<li><a href="https://huggingface.co/docs/transformers/big_models" rel="nofollow">Instanciar un modelo grande</a></li> <li><a href="https://huggingface.co/docs/transformers/debugging" rel="nofollow">Solución de problemas de rendimiento</a></li>',Q,b,V,U,me="Este documento está lejos de estar completo y aún se deben agregar muchas cosas, así que si tienes adiciones o correcciones que hacer, no dudes en abrir un PR. Si no estás seguro, inicia un Issue y podemos discutir los detalles allí.",W,w,ue="Cuando hagas contribuciones que indiquen que A es mejor que B, intenta incluir un benchmark reproducible y/o un enlace a la fuente de esa información (a menos que provenga directamente de ti).",Y,q,Z;return m=new I({props:{title:"Rendimiento y Escalabilidad",local:"rendimiento-y-escalabilidad",headingTag:"h1"}}),p=new I({props:{title:"Entrenamiento",local:"entrenamiento",headingTag:"h2"}}),_=new I({props:{title:"Inferencia",local:"inferencia",headingTag:"h2"}}),v=new I({props:{title:"Entrenamiento e Inferencia",local:"entrenamiento-e-inferencia",headingTag:"h2"}}),b=new I({props:{title:"Contribuir",local:"contribuir",headingTag:"h2"}}),{c(){c=r("meta"),H=i(),y=r("p"),M=i(),E(m.$$.fragment),S=i(),u=r("p"),u.textContent=te,A=i(),d=r("p"),d.textContent=ne,R=i(),f=r("p"),f.textContent=ae,k=i(),E(p.$$.fragment),B=i(),g=r("p"),g.textContent=ie,D=i(),h=r("ul"),h.innerHTML=oe,F=i(),E(_.$$.fragment),X=i(),P=r("p"),P.textContent=re,J=i(),$=r("ul"),$.innerHTML=se,K=i(),E(v.$$.fragment),N=i(),C=r("p"),C.textContent=le,O=i(),x=r("ul"),x.innerHTML=ce,Q=i(),E(b.$$.fragment),V=i(),U=r("p"),U.textContent=me,W=i(),w=r("p"),w.textContent=ue,Y=i(),q=r("p"),this.h()},l(e){const t=$e("svelte-u9bgzb",document.head);c=s(t,"META",{name:!0,content:!0}),t.forEach(n),H=o(e),y=s(e,"P",{}),de(y).forEach(n),M=o(e),T(m.$$.fragment,e),S=o(e),u=s(e,"P",{"data-svelte-h":!0}),l(u)!=="svelte-p5bv9v"&&(u.textContent=te),A=o(e),d=s(e,"P",{"data-svelte-h":!0}),l(d)!=="svelte-16jlt65"&&(d.textContent=ne),R=o(e),f=s(e,"P",{"data-svelte-h":!0}),l(f)!=="svelte-1y5sivo"&&(f.textContent=ae),k=o(e),T(p.$$.fragment,e),B=o(e),g=s(e,"P",{"data-svelte-h":!0}),l(g)!=="svelte-sdqwhx"&&(g.textContent=ie),D=o(e),h=s(e,"UL",{"data-svelte-h":!0}),l(h)!=="svelte-q85upw"&&(h.innerHTML=oe),F=o(e),T(_.$$.fragment,e),X=o(e),P=s(e,"P",{"data-svelte-h":!0}),l(P)!=="svelte-1h21ga9"&&(P.textContent=re),J=o(e),$=s(e,"UL",{"data-svelte-h":!0}),l($)!=="svelte-12zem8p"&&($.innerHTML=se),K=o(e),T(v.$$.fragment,e),N=o(e),C=s(e,"P",{"data-svelte-h":!0}),l(C)!=="svelte-1l5qvo9"&&(C.textContent=le),O=o(e),x=s(e,"UL",{"data-svelte-h":!0}),l(x)!=="svelte-1w339mm"&&(x.innerHTML=ce),Q=o(e),T(b.$$.fragment,e),V=o(e),U=s(e,"P",{"data-svelte-h":!0}),l(U)!=="svelte-1u9l6fg"&&(U.textContent=me),W=o(e),w=s(e,"P",{"data-svelte-h":!0}),l(w)!=="svelte-d5qxe0"&&(w.textContent=ue),Y=o(e),q=s(e,"P",{}),de(q).forEach(n),this.h()},h(){fe(c,"name","hf:doc:metadata"),fe(c,"content",xe)},m(e,t){ve(document.head,c),a(e,H,t),a(e,y,t),a(e,M,t),G(m,e,t),a(e,S,t),a(e,u,t),a(e,A,t),a(e,d,t),a(e,R,t),a(e,f,t),a(e,k,t),G(p,e,t),a(e,B,t),a(e,g,t),a(e,D,t),a(e,h,t),a(e,F,t),G(_,e,t),a(e,X,t),a(e,P,t),a(e,J,t),a(e,$,t),a(e,K,t),G(v,e,t),a(e,N,t),a(e,C,t),a(e,O,t),a(e,x,t),a(e,Q,t),G(b,e,t),a(e,V,t),a(e,U,t),a(e,W,t),a(e,w,t),a(e,Y,t),a(e,q,t),Z=!0},p:ge,i(e){Z||(L(m.$$.fragment,e),L(p.$$.fragment,e),L(_.$$.fragment,e),L(v.$$.fragment,e),L(b.$$.fragment,e),Z=!0)},o(e){j(m.$$.fragment,e),j(p.$$.fragment,e),j(_.$$.fragment,e),j(v.$$.fragment,e),j(b.$$.fragment,e),Z=!1},d(e){e&&(n(H),n(y),n(M),n(S),n(u),n(A),n(d),n(R),n(f),n(k),n(B),n(g),n(D),n(h),n(F),n(X),n(P),n(J),n($),n(K),n(N),n(C),n(O),n(x),n(Q),n(V),n(U),n(W),n(w),n(Y),n(q)),n(c),z(m,e),z(p,e),z(_,e),z(v,e),z(b,e)}}}const xe='{"title":"Rendimiento y Escalabilidad","local":"rendimiento-y-escalabilidad","sections":[{"title":"Entrenamiento","local":"entrenamiento","sections":[],"depth":2},{"title":"Inferencia","local":"inferencia","sections":[],"depth":2},{"title":"Entrenamiento e Inferencia","local":"entrenamiento-e-inferencia","sections":[],"depth":2},{"title":"Contribuir","local":"contribuir","sections":[],"depth":2}],"depth":1}';function be(ee){return he(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qe extends _e{constructor(c){super(),Pe(this,c,be,Ce,pe,{})}}export{qe as component};
