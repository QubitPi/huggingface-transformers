import{s as te,o as le,n as ne}from"../chunks/scheduler.9bc65507.js";import{S as ae,i as ie,g as r,s as o,r as E,A as oe,h as c,f as l,c as s,j as O,u as G,x as y,k as q,y as se,a as n,v as W,d as Q,t as F,w as R}from"../chunks/index.707bf1b6.js";import{T as re}from"../chunks/Tip.c2ecdbf4.js";import{C as ee}from"../chunks/CodeBlock.54a9f38d.js";import{H as ce}from"../chunks/Heading.342b1fa6.js";function pe(A){let a,b="Some PyTorch operations are not implemented in MPS yet and will throw an error. To avoid this, you should set the environment variable <code>PYTORCH_ENABLE_MPS_FALLBACK=1</code> to use the CPU kernels instead (you’ll still see a <code>UserWarning</code>).",d,f,p,m,h='If you run into any other errors, please open an issue in the <a href="https://github.com/pytorch/pytorch/issues" rel="nofollow">PyTorch</a> repository because the <a href="/docs/transformers/main/en/main_classes/trainer#transformers.Trainer">Trainer</a> only integrates the MPS backend.';return{c(){a=r("p"),a.innerHTML=b,d=o(),f=r("br"),p=o(),m=r("p"),m.innerHTML=h},l(i){a=c(i,"P",{"data-svelte-h":!0}),y(a)!=="svelte-1lollff"&&(a.innerHTML=b),d=s(i),f=c(i,"BR",{}),p=s(i),m=c(i,"P",{"data-svelte-h":!0}),y(m)!=="svelte-1bifm0k"&&(m.innerHTML=h)},m(i,u){n(i,a,u),n(i,d,u),n(i,f,u),n(i,p,u),n(i,m,u)},p:ne,d(i){i&&(l(a),l(d),l(f),l(p),l(m))}}}function me(A){let a,b,d,f,p,m,h,i='Previously, training models on a Mac was limited to the CPU only. With the release of PyTorch v1.12, you can take advantage of training models with Apple’s silicon GPUs for significantly faster performance and training. This is powered in PyTorch by integrating Apple’s Metal Performance Shaders (MPS) as a backend. The <a href="https://pytorch.org/docs/stable/notes/mps.html" rel="nofollow">MPS backend</a> implements PyTorch operations as custom Metal shaders and places these modules on a <code>mps</code> device.',u,M,S,T,Y="With the <code>mps</code> device set, you can:",k,_,B="<li>train larger networks or batch sizes locally</li> <li>reduce data retrieval latency because the GPU’s unified memory architecture allows direct access to the full memory store</li> <li>reduce costs because you don’t need to train on cloud-based GPUs or add additional local GPUs</li>",L,w,V="Get started by making sure you have PyTorch installed. MPS acceleration is supported on macOS 12.3+.",Z,U,x,v,I='<a href="/docs/transformers/main/en/main_classes/trainer#transformers.TrainingArguments">TrainingArguments</a> uses the <code>mps</code> device by default if it’s available which means you don’t need to explicitly set the device. For example, you can run the <a href="https://github.com/huggingface/transformers/blob/main/examples/pytorch/text-classification/run_glue.py" rel="nofollow">run_glue.py</a> script with the MPS backend automatically enabled without making any changes.',J,g,H,$,z='Backends for <a href="https://pytorch.org/docs/stable/distributed.html#backends" rel="nofollow">distributed setups</a> like <code>gloo</code> and <code>nccl</code> are not supported by the <code>mps</code> device which means you can only train on a single GPU with the MPS backend.',j,P,D='You can learn more about the MPS backend in the <a href="https://pytorch.org/blog/introducing-accelerated-pytorch-training-on-mac/" rel="nofollow">Introducing Accelerated PyTorch Training on Mac</a> blog post.',X,C,N;return p=new ce({props:{title:"PyTorch training on Apple silicon",local:"pytorch-training-on-apple-silicon",headingTag:"h1"}}),M=new re({props:{warning:!0,$$slots:{default:[pe]},$$scope:{ctx:A}}}),U=new ee({props:{code:"cGlwJTIwaW5zdGFsbCUyMHRvcmNoJTIwdG9yY2h2aXNpb24lMjB0b3JjaGF1ZGlv",highlighted:"pip install torch torchvision torchaudio",wrap:!1}}),g=new ee({props:{code:"ZXhwb3J0JTIwVEFTS19OQU1FJTNEbXJwYyUwQSUwQXB5dGhvbiUyMGV4YW1wbGVzJTJGcHl0b3JjaCUyRnRleHQtY2xhc3NpZmljYXRpb24lMkZydW5fZ2x1ZS5weSUyMCU1QyUwQSUyMCUyMC0tbW9kZWxfbmFtZV9vcl9wYXRoJTIwZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtY2FzZWQlMjAlNUMlMEElMjAlMjAtLXRhc2tfbmFtZSUyMCUyNFRBU0tfTkFNRSUyMCU1QyUwQS0lMjAtLXVzZV9tcHNfZGV2aWNlJTIwJTVDJTBBJTIwJTIwLS1kb190cmFpbiUyMCU1QyUwQSUyMCUyMC0tZG9fZXZhbCUyMCU1QyUwQSUyMCUyMC0tbWF4X3NlcV9sZW5ndGglMjAxMjglMjAlNUMlMEElMjAlMjAtLXBlcl9kZXZpY2VfdHJhaW5fYmF0Y2hfc2l6ZSUyMDMyJTIwJTVDJTBBJTIwJTIwLS1sZWFybmluZ19yYXRlJTIwMmUtNSUyMCU1QyUwQSUyMCUyMC0tbnVtX3RyYWluX2Vwb2NocyUyMDMlMjAlNUMlMEElMjAlMjAtLW91dHB1dF9kaXIlMjAlMkZ0bXAlMkYlMjRUQVNLX05BTUUlMkYlMjAlNUMlMEElMjAlMjAtLW92ZXJ3cml0ZV9vdXRwdXRfZGly",highlighted:`export TASK_NAME=mrpc

python examples/pytorch/text-classification/run_glue.py \\
  --model_name_or_path google-bert/bert-base-cased \\
  --task_name $TASK_NAME \\
<span class="hljs-deletion">- --use_mps_device \\</span>
  --do_train \\
  --do_eval \\
  --max_seq_length 128 \\
  --per_device_train_batch_size 32 \\
  --learning_rate 2e-5 \\
  --num_train_epochs 3 \\
  --output_dir /tmp/$TASK_NAME/ \\
  --overwrite_output_dir`,wrap:!1}}),{c(){a=r("meta"),b=o(),d=r("p"),f=o(),E(p.$$.fragment),m=o(),h=r("p"),h.innerHTML=i,u=o(),E(M.$$.fragment),S=o(),T=r("p"),T.innerHTML=Y,k=o(),_=r("ul"),_.innerHTML=B,L=o(),w=r("p"),w.textContent=V,Z=o(),E(U.$$.fragment),x=o(),v=r("p"),v.innerHTML=I,J=o(),E(g.$$.fragment),H=o(),$=r("p"),$.innerHTML=z,j=o(),P=r("p"),P.innerHTML=D,X=o(),C=r("p"),this.h()},l(e){const t=oe("svelte-u9bgzb",document.head);a=c(t,"META",{name:!0,content:!0}),t.forEach(l),b=s(e),d=c(e,"P",{}),O(d).forEach(l),f=s(e),G(p.$$.fragment,e),m=s(e),h=c(e,"P",{"data-svelte-h":!0}),y(h)!=="svelte-ascbzy"&&(h.innerHTML=i),u=s(e),G(M.$$.fragment,e),S=s(e),T=c(e,"P",{"data-svelte-h":!0}),y(T)!=="svelte-1oy5skh"&&(T.innerHTML=Y),k=s(e),_=c(e,"UL",{"data-svelte-h":!0}),y(_)!=="svelte-32rt2r"&&(_.innerHTML=B),L=s(e),w=c(e,"P",{"data-svelte-h":!0}),y(w)!=="svelte-zjtbz3"&&(w.textContent=V),Z=s(e),G(U.$$.fragment,e),x=s(e),v=c(e,"P",{"data-svelte-h":!0}),y(v)!=="svelte-1ab1bzg"&&(v.innerHTML=I),J=s(e),G(g.$$.fragment,e),H=s(e),$=c(e,"P",{"data-svelte-h":!0}),y($)!=="svelte-12ihrft"&&($.innerHTML=z),j=s(e),P=c(e,"P",{"data-svelte-h":!0}),y(P)!=="svelte-1nh5d6n"&&(P.innerHTML=D),X=s(e),C=c(e,"P",{}),O(C).forEach(l),this.h()},h(){q(a,"name","hf:doc:metadata"),q(a,"content",de)},m(e,t){se(document.head,a),n(e,b,t),n(e,d,t),n(e,f,t),W(p,e,t),n(e,m,t),n(e,h,t),n(e,u,t),W(M,e,t),n(e,S,t),n(e,T,t),n(e,k,t),n(e,_,t),n(e,L,t),n(e,w,t),n(e,Z,t),W(U,e,t),n(e,x,t),n(e,v,t),n(e,J,t),W(g,e,t),n(e,H,t),n(e,$,t),n(e,j,t),n(e,P,t),n(e,X,t),n(e,C,t),N=!0},p(e,[t]){const K={};t&2&&(K.$$scope={dirty:t,ctx:e}),M.$set(K)},i(e){N||(Q(p.$$.fragment,e),Q(M.$$.fragment,e),Q(U.$$.fragment,e),Q(g.$$.fragment,e),N=!0)},o(e){F(p.$$.fragment,e),F(M.$$.fragment,e),F(U.$$.fragment,e),F(g.$$.fragment,e),N=!1},d(e){e&&(l(b),l(d),l(f),l(m),l(h),l(u),l(S),l(T),l(k),l(_),l(L),l(w),l(Z),l(x),l(v),l(J),l(H),l($),l(j),l(P),l(X),l(C)),l(a),R(p,e),R(M,e),R(U,e),R(g,e)}}}const de='{"title":"PyTorch training on Apple silicon","local":"pytorch-training-on-apple-silicon","sections":[],"depth":1}';function he(A){return le(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Te extends ae{constructor(a){super(),ie(this,a,he,me,te,{})}}export{Te as component};