import{s as de,o as ce,n as ue}from"../chunks/scheduler.9bc65507.js";import{S as he,i as ge,g as r,s as o,r as L,A as ve,h as s,f as a,c as l,j as me,u as x,x as p,k as pe,y as Te,a as n,v as k,d as H,t as J,w as A}from"../chunks/index.707bf1b6.js";import{T as we}from"../chunks/Tip.c2ecdbf4.js";import{C as fe}from"../chunks/CodeBlock.54a9f38d.js";import{H as Q}from"../chunks/Heading.342b1fa6.js";function $e(R){let i,d=`MegatronGPT2 architecture is the same as OpenAI GPT-2 . Refer to <a href="gpt2">GPT-2 documentation</a> for information on
configuration classes and their parameters.`;return{c(){i=r("p"),i.innerHTML=d},l(m){i=s(m,"P",{"data-svelte-h":!0}),p(i)!=="svelte-mosgum"&&(i.innerHTML=d)},m(m,G){n(m,i,G)},p:ue,d(m){m&&a(i)}}}function _e(R){let i,d,m,G,c,N,u,O,h,K=`The MegatronGPT2 model was proposed in <a href="https://arxiv.org/abs/1909.08053" rel="nofollow">Megatron-LM: Training Multi-Billion Parameter Language Models Using Model
Parallelism</a> by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley,
Jared Casper and Bryan Catanzaro.`,W,g,ee="The abstract from the paper is the following:",U,v,te=`<em>Recent work in language modeling demonstrates that training large transformer models advances the state of the art in
Natural Language Processing applications. However, very large models can be quite difficult to train due to memory
constraints. In this work, we present our techniques for training very large transformer models and implement a simple,
efficient intra-layer model parallel approach that enables training transformer models with billions of parameters. Our
approach does not require a new compiler or library changes, is orthogonal and complimentary to pipeline model
parallelism, and can be fully implemented with the insertion of a few communication operations in native PyTorch. We
illustrate this approach by converging transformer based models up to 8.3 billion parameters using 512 GPUs. We sustain
15.1 PetaFLOPs across the entire application with 76% scaling efficiency when compared to a strong single GPU baseline
that sustains 39 TeraFLOPs, which is 30% of peak FLOPs. To demonstrate that large language models can further advance
the state of the art (SOTA), we train an 8.3 billion parameter transformer language model similar to GPT-2 and a 3.9
billion parameter model similar to BERT. We show that careful attention to the placement of layer normalization in
BERT-like models is critical to achieving increased performance as the model size grows. Using the GPT-2 model we
achieve SOTA results on the WikiText103 (10.8 compared to SOTA perplexity of 15.8) and LAMBADA (66.5% compared to SOTA
accuracy of 63.2%) datasets. Our BERT model achieves SOTA results on the RACE dataset (90.9% compared to SOTA accuracy
of 89.4%).</em>`,V,T,ae=`This model was contributed by <a href="https://huggingface.co/jdemouth" rel="nofollow">jdemouth</a>. The original code can be found <a href="https://github.com/NVIDIA/Megatron-LM" rel="nofollow">here</a>.
That repository contains a multi-GPU and multi-node implementation of the Megatron Language models. In particular, it
contains a hybrid model parallel approach using “tensor parallel” and “pipeline parallel” techniques.`,z,w,E,$,ne=`We have provided pretrained <a href="https://ngc.nvidia.com/catalog/models/nvidia:megatron_lm_345m" rel="nofollow">GPT2-345M</a> checkpoints
for use to evaluate or finetuning downstream tasks.`,I,_,ie=`To access these checkpoints, first <a href="https://ngc.nvidia.com/signup" rel="nofollow">sign up</a> for and setup the NVIDIA GPU Cloud (NGC)
Registry CLI. Further documentation for downloading models can be found in the <a href="https://docs.nvidia.com/dgx/ngc-registry-cli-user-guide/index.html#topic_6_4_1" rel="nofollow">NGC documentation</a>.`,S,y,oe="Alternatively, you can directly download the checkpoints using:",j,M,Z,b,le=`Once you have obtained the checkpoint from NVIDIA GPU Cloud (NGC), you have to convert it to a format that will easily
be loaded by Hugging Face Transformers GPT2 implementation.`,F,P,re=`The following command allows you to do the conversion. We assume that the folder <code>models/megatron_gpt2</code> contains
<code>megatron_gpt2_345m_v0_0.zip</code> and that the command is run from that folder:`,X,C,Y,f,q,B,D;return c=new Q({props:{title:"MegatronGPT2",local:"megatrongpt2",headingTag:"h1"}}),u=new Q({props:{title:"Overview",local:"overview",headingTag:"h2"}}),w=new Q({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),M=new fe({props:{code:"d2dldCUyMC0tY29udGVudC1kaXNwb3NpdGlvbiUyMGh0dHBzJTNBJTJGJTJGYXBpLm5nYy5udmlkaWEuY29tJTJGdjIlMkZtb2RlbHMlMkZudmlkaWElMkZtZWdhdHJvbl9sbV8zNDVtJTJGdmVyc2lvbnMlMkZ2MC4wJTJGemlwJTIwLU8lMEFtZWdhdHJvbl9ncHQyXzM0NW1fdjBfMC56aXA=",highlighted:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_lm_345m/versions/v0.0/zip -O
megatron_gpt2_345m_v0_0.zip`,wrap:!1}}),C=new fe({props:{code:"cHl0aG9uMyUyMCUyNFBBVEhfVE9fVFJBTlNGT1JNRVJTJTJGbW9kZWxzJTJGbWVnYXRyb25fZ3B0MiUyRmNvbnZlcnRfbWVnYXRyb25fZ3B0Ml9jaGVja3BvaW50LnB5JTIwbWVnYXRyb25fZ3B0Ml8zNDVtX3YwXzAuemlw",highlighted:'python3 <span class="hljs-variable">$PATH_TO_TRANSFORMERS</span>/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py megatron_gpt2_345m_v0_0.zip',wrap:!1}}),f=new we({props:{$$slots:{default:[$e]},$$scope:{ctx:R}}}),{c(){i=r("meta"),d=o(),m=r("p"),G=o(),L(c.$$.fragment),N=o(),L(u.$$.fragment),O=o(),h=r("p"),h.innerHTML=K,W=o(),g=r("p"),g.textContent=ee,U=o(),v=r("p"),v.innerHTML=te,V=o(),T=r("p"),T.innerHTML=ae,z=o(),L(w.$$.fragment),E=o(),$=r("p"),$.innerHTML=ne,I=o(),_=r("p"),_.innerHTML=ie,S=o(),y=r("p"),y.textContent=oe,j=o(),L(M.$$.fragment),Z=o(),b=r("p"),b.textContent=le,F=o(),P=r("p"),P.innerHTML=re,X=o(),L(C.$$.fragment),Y=o(),L(f.$$.fragment),q=o(),B=r("p"),this.h()},l(e){const t=ve("svelte-u9bgzb",document.head);i=s(t,"META",{name:!0,content:!0}),t.forEach(a),d=l(e),m=s(e,"P",{}),me(m).forEach(a),G=l(e),x(c.$$.fragment,e),N=l(e),x(u.$$.fragment,e),O=l(e),h=s(e,"P",{"data-svelte-h":!0}),p(h)!=="svelte-110uk60"&&(h.innerHTML=K),W=l(e),g=s(e,"P",{"data-svelte-h":!0}),p(g)!=="svelte-vfdo9a"&&(g.textContent=ee),U=l(e),v=s(e,"P",{"data-svelte-h":!0}),p(v)!=="svelte-o6jluj"&&(v.innerHTML=te),V=l(e),T=s(e,"P",{"data-svelte-h":!0}),p(T)!=="svelte-1lqeluo"&&(T.innerHTML=ae),z=l(e),x(w.$$.fragment,e),E=l(e),$=s(e,"P",{"data-svelte-h":!0}),p($)!=="svelte-9l8t5v"&&($.innerHTML=ne),I=l(e),_=s(e,"P",{"data-svelte-h":!0}),p(_)!=="svelte-1xz4v1w"&&(_.innerHTML=ie),S=l(e),y=s(e,"P",{"data-svelte-h":!0}),p(y)!=="svelte-115r3rj"&&(y.textContent=oe),j=l(e),x(M.$$.fragment,e),Z=l(e),b=s(e,"P",{"data-svelte-h":!0}),p(b)!=="svelte-wb75fn"&&(b.textContent=le),F=l(e),P=s(e,"P",{"data-svelte-h":!0}),p(P)!=="svelte-siywy0"&&(P.innerHTML=re),X=l(e),x(C.$$.fragment,e),Y=l(e),x(f.$$.fragment,e),q=l(e),B=s(e,"P",{}),me(B).forEach(a),this.h()},h(){pe(i,"name","hf:doc:metadata"),pe(i,"content",ye)},m(e,t){Te(document.head,i),n(e,d,t),n(e,m,t),n(e,G,t),k(c,e,t),n(e,N,t),k(u,e,t),n(e,O,t),n(e,h,t),n(e,W,t),n(e,g,t),n(e,U,t),n(e,v,t),n(e,V,t),n(e,T,t),n(e,z,t),k(w,e,t),n(e,E,t),n(e,$,t),n(e,I,t),n(e,_,t),n(e,S,t),n(e,y,t),n(e,j,t),k(M,e,t),n(e,Z,t),n(e,b,t),n(e,F,t),n(e,P,t),n(e,X,t),k(C,e,t),n(e,Y,t),k(f,e,t),n(e,q,t),n(e,B,t),D=!0},p(e,[t]){const se={};t&2&&(se.$$scope={dirty:t,ctx:e}),f.$set(se)},i(e){D||(H(c.$$.fragment,e),H(u.$$.fragment,e),H(w.$$.fragment,e),H(M.$$.fragment,e),H(C.$$.fragment,e),H(f.$$.fragment,e),D=!0)},o(e){J(c.$$.fragment,e),J(u.$$.fragment,e),J(w.$$.fragment,e),J(M.$$.fragment,e),J(C.$$.fragment,e),J(f.$$.fragment,e),D=!1},d(e){e&&(a(d),a(m),a(G),a(N),a(O),a(h),a(W),a(g),a(U),a(v),a(V),a(T),a(z),a(E),a($),a(I),a(_),a(S),a(y),a(j),a(Z),a(b),a(F),a(P),a(X),a(Y),a(q),a(B)),a(i),A(c,e),A(u,e),A(w,e),A(M,e),A(C,e),A(f,e)}}}const ye='{"title":"MegatronGPT2","local":"megatrongpt2","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2}],"depth":1}';function Me(R){return ce(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xe extends he{constructor(i){super(),ge(this,i,Me,_e,de,{})}}export{xe as component};
