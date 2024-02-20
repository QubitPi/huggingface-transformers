import{s as Me,o as ge,n as be}from"../chunks/scheduler.9bc65507.js";import{S as ye,i as we,g as o,s,r as d,A as Ce,h as r,f as a,c as l,j as ue,u,x as c,k as he,y as $e,a as n,v as h,d as f,t as M,w as g}from"../chunks/index.707bf1b6.js";import{T as ve}from"../chunks/Tip.c2ecdbf4.js";import{C as fe}from"../chunks/CodeBlock.54a9f38d.js";import{H as B}from"../chunks/Heading.342b1fa6.js";function je(X){let i,b='MatCha is a model that is trained using <code>Pix2Struct</code> architecture. You can find more information about <code>Pix2Struct</code> in the <a href="https://huggingface.co/docs/transformers/main/en/model_doc/pix2struct" rel="nofollow">Pix2Struct documentation</a>.';return{c(){i=o("p"),i.innerHTML=b},l(p){i=r(p,"P",{"data-svelte-h":!0}),c(i)!=="svelte-1t6iq26"&&(i.innerHTML=b)},m(p,G){n(p,i,G)},p:be,d(p){p&&a(i)}}}function Te(X){let i,b,p,G,y,H,w,S,C,ne='MatCha has been proposed in the paper <a href="https://arxiv.org/abs/2212.09662" rel="nofollow">MatCha: Enhancing Visual Language Pretraining with Math Reasoning and Chart Derendering</a>, from Fangyu Liu, Francesco Piccinno, Syrine Krichene, Chenxi Pang, Kenton Lee, Mandar Joshi, Yasemin Altun, Nigel Collier, Julian Martin Eisenschlos.',P,$,se="The abstract of the paper states the following:",z,v,le="<em>Visual language data such as plots, charts, and infographics are ubiquitous in the human world. However, state-of-the-art vision-language models do not perform well on these data. We propose MatCha (Math reasoning and Chart derendering pretraining) to enhance visual language models’ capabilities in jointly modeling charts/plots and language data. Specifically, we propose several pretraining tasks that cover plot deconstruction and numerical reasoning which are the key capabilities in visual language modeling. We perform the MatCha pretraining starting from Pix2Struct, a recently proposed image-to-text visual language model. On standard benchmarks such as PlotQA and ChartQA, the MatCha model outperforms state-of-the-art methods by as much as nearly 20%. We also examine how well MatCha pretraining transfers to domains such as screenshots, textbook diagrams, and document figures and observe overall improvement, verifying the usefulness of MatCha pretraining on broader visual language tasks.</em>",Y,j,E,T,ie=`MatCha is a model that is trained using <code>Pix2Struct</code> architecture. You can find more information about <code>Pix2Struct</code> in the <a href="https://huggingface.co/docs/transformers/main/en/model_doc/pix2struct" rel="nofollow">Pix2Struct documentation</a>.
MatCha is a Visual Question Answering subset of <code>Pix2Struct</code> architecture. It renders the input question on the image and predicts the answer.`,I,x,N,U,oe="Currently 6 checkpoints are available for MatCha:",q,_,re="<li><code>google/matcha</code>: the base MatCha model, used to fine-tune MatCha on downstream tasks</li> <li><code>google/matcha-chartqa</code>: MatCha model fine-tuned on ChartQA dataset. It can be used to answer questions about charts.</li> <li><code>google/matcha-plotqa-v1</code>: MatCha model fine-tuned on PlotQA dataset. It can be used to answer questions about plots.</li> <li><code>google/matcha-plotqa-v2</code>: MatCha model fine-tuned on PlotQA dataset. It can be used to answer questions about plots.</li> <li><code>google/matcha-chart2text-statista</code>: MatCha model fine-tuned on Statista dataset.</li> <li><code>google/matcha-chart2text-pew</code>: MatCha model fine-tuned on Pew dataset.</li>",Q,J,pe="The models finetuned on <code>chart2text-pew</code> and <code>chart2text-statista</code> are more suited for summarization, whereas the models finetuned on <code>plotqa</code> and <code>chartqa</code> are more suited for question answering.",A,Z,ce="You can use these models as follows (example on a ChatQA dataset):",L,k,D,V,K,W,me='To fine-tune MatCha, refer to the pix2struct <a href="https://github.com/huggingface/notebooks/blob/main/examples/image_captioning_pix2struct.ipynb" rel="nofollow">fine-tuning notebook</a>. For <code>Pix2Struct</code> models, we have found out that fine-tuning the model with Adafactor and cosine learning rate scheduler leads to faste convergence:',O,F,ee,m,te,R,ae;return y=new B({props:{title:"MatCha",local:"matcha",headingTag:"h1"}}),w=new B({props:{title:"Overview",local:"overview",headingTag:"h2"}}),j=new B({props:{title:"Model description",local:"model-description",headingTag:"h2"}}),x=new B({props:{title:"Usage",local:"usage",headingTag:"h2"}}),k=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBQaXgyU3RydWN0Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBaW1wb3J0JTIwcmVxdWVzdHMlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEElMEFtb2RlbCUyMCUzRCUyMFBpeDJTdHJ1Y3RGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRm1hdGNoYS1jaGFydHFhJTIyKS50bygwKSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRm1hdGNoYS1jaGFydHFhJTIyKSUwQXVybCUyMCUzRCUyMCUyMmh0dHBzJTNBJTJGJTJGcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSUyRnZpcy1ubHAlMkZDaGFydFFBJTJGbWFpbiUyRkNoYXJ0UUElMjUyMERhdGFzZXQlMkZ2YWwlMkZwbmclMkYyMDI5NDY3MTAwMjAxOS5wbmclMjIlMEFpbWFnZSUyMCUzRCUyMEltYWdlLm9wZW4ocmVxdWVzdHMuZ2V0KHVybCUyQyUyMHN0cmVhbSUzRFRydWUpLnJhdyklMEElMEFpbnB1dHMlMjAlM0QlMjBwcm9jZXNzb3IoaW1hZ2VzJTNEaW1hZ2UlMkMlMjB0ZXh0JTNEJTIySXMlMjB0aGUlMjBzdW0lMjBvZiUyMGFsbCUyMDQlMjBwbGFjZXMlMjBncmVhdGVyJTIwdGhhbiUyMExhb3MlM0YlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS50bygwKSUwQXByZWRpY3Rpb25zJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoKippbnB1dHMlMkMlMjBtYXhfbmV3X3Rva2VucyUzRDUxMiklMEFwcmludChwcm9jZXNzb3IuZGVjb2RlKHByZWRpY3Rpb25zJTVCMCU1RCUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSk=",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, Pix2StructForConditionalGeneration
<span class="hljs-keyword">import</span> requests
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

model = Pix2StructForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/matcha-chartqa&quot;</span>).to(<span class="hljs-number">0</span>)
processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;google/matcha-chartqa&quot;</span>)
url = <span class="hljs-string">&quot;https://raw.githubusercontent.com/vis-nlp/ChartQA/main/ChartQA%20Dataset/val/png/20294671002019.png&quot;</span>
image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

inputs = processor(images=image, text=<span class="hljs-string">&quot;Is the sum of all 4 places greater than Laos?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(<span class="hljs-number">0</span>)
predictions = model.generate(**inputs, max_new_tokens=<span class="hljs-number">512</span>)
<span class="hljs-built_in">print</span>(processor.decode(predictions[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))`,wrap:!1}}),V=new B({props:{title:"Fine-tuning",local:"fine-tuning",headingTag:"h2"}}),F=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycy5vcHRpbWl6YXRpb24lMjBpbXBvcnQlMjBBZGFmYWN0b3IlMkMlMjBnZXRfY29zaW5lX3NjaGVkdWxlX3dpdGhfd2FybXVwJTBBJTBBb3B0aW1pemVyJTIwJTNEJTIwQWRhZmFjdG9yKHNlbGYucGFyYW1ldGVycygpJTJDJTIwc2NhbGVfcGFyYW1ldGVyJTNERmFsc2UlMkMlMjByZWxhdGl2ZV9zdGVwJTNERmFsc2UlMkMlMjBsciUzRDAuMDElMkMlMjB3ZWlnaHRfZGVjYXklM0QxZS0wNSklMEFzY2hlZHVsZXIlMjAlM0QlMjBnZXRfY29zaW5lX3NjaGVkdWxlX3dpdGhfd2FybXVwKG9wdGltaXplciUyQyUyMG51bV93YXJtdXBfc3RlcHMlM0QxMDAwJTJDJTIwbnVtX3RyYWluaW5nX3N0ZXBzJTNENDAwMDAp",highlighted:`<span class="hljs-keyword">from</span> transformers.optimization <span class="hljs-keyword">import</span> Adafactor, get_cosine_schedule_with_warmup

optimizer = Adafactor(self.parameters(), scale_parameter=<span class="hljs-literal">False</span>, relative_step=<span class="hljs-literal">False</span>, lr=<span class="hljs-number">0.01</span>, weight_decay=<span class="hljs-number">1e-05</span>)
scheduler = get_cosine_schedule_with_warmup(optimizer, num_warmup_steps=<span class="hljs-number">1000</span>, num_training_steps=<span class="hljs-number">40000</span>)`,wrap:!1}}),m=new ve({props:{$$slots:{default:[je]},$$scope:{ctx:X}}}),{c(){i=o("meta"),b=s(),p=o("p"),G=s(),d(y.$$.fragment),H=s(),d(w.$$.fragment),S=s(),C=o("p"),C.innerHTML=ne,P=s(),$=o("p"),$.textContent=se,z=s(),v=o("p"),v.innerHTML=le,Y=s(),d(j.$$.fragment),E=s(),T=o("p"),T.innerHTML=ie,I=s(),d(x.$$.fragment),N=s(),U=o("p"),U.textContent=oe,q=s(),_=o("ul"),_.innerHTML=re,Q=s(),J=o("p"),J.innerHTML=pe,A=s(),Z=o("p"),Z.textContent=ce,L=s(),d(k.$$.fragment),D=s(),d(V.$$.fragment),K=s(),W=o("p"),W.innerHTML=me,O=s(),d(F.$$.fragment),ee=s(),d(m.$$.fragment),te=s(),R=o("p"),this.h()},l(e){const t=Ce("svelte-u9bgzb",document.head);i=r(t,"META",{name:!0,content:!0}),t.forEach(a),b=l(e),p=r(e,"P",{}),ue(p).forEach(a),G=l(e),u(y.$$.fragment,e),H=l(e),u(w.$$.fragment,e),S=l(e),C=r(e,"P",{"data-svelte-h":!0}),c(C)!=="svelte-v33y47"&&(C.innerHTML=ne),P=l(e),$=r(e,"P",{"data-svelte-h":!0}),c($)!=="svelte-1pvthah"&&($.textContent=se),z=l(e),v=r(e,"P",{"data-svelte-h":!0}),c(v)!=="svelte-s1ionu"&&(v.innerHTML=le),Y=l(e),u(j.$$.fragment,e),E=l(e),T=r(e,"P",{"data-svelte-h":!0}),c(T)!=="svelte-18xkt0a"&&(T.innerHTML=ie),I=l(e),u(x.$$.fragment,e),N=l(e),U=r(e,"P",{"data-svelte-h":!0}),c(U)!=="svelte-1srev77"&&(U.textContent=oe),q=l(e),_=r(e,"UL",{"data-svelte-h":!0}),c(_)!=="svelte-1y39hb1"&&(_.innerHTML=re),Q=l(e),J=r(e,"P",{"data-svelte-h":!0}),c(J)!=="svelte-11agvee"&&(J.innerHTML=pe),A=l(e),Z=r(e,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-1ui48j4"&&(Z.textContent=ce),L=l(e),u(k.$$.fragment,e),D=l(e),u(V.$$.fragment,e),K=l(e),W=r(e,"P",{"data-svelte-h":!0}),c(W)!=="svelte-9sjid8"&&(W.innerHTML=me),O=l(e),u(F.$$.fragment,e),ee=l(e),u(m.$$.fragment,e),te=l(e),R=r(e,"P",{}),ue(R).forEach(a),this.h()},h(){he(i,"name","hf:doc:metadata"),he(i,"content",xe)},m(e,t){$e(document.head,i),n(e,b,t),n(e,p,t),n(e,G,t),h(y,e,t),n(e,H,t),h(w,e,t),n(e,S,t),n(e,C,t),n(e,P,t),n(e,$,t),n(e,z,t),n(e,v,t),n(e,Y,t),h(j,e,t),n(e,E,t),n(e,T,t),n(e,I,t),h(x,e,t),n(e,N,t),n(e,U,t),n(e,q,t),n(e,_,t),n(e,Q,t),n(e,J,t),n(e,A,t),n(e,Z,t),n(e,L,t),h(k,e,t),n(e,D,t),h(V,e,t),n(e,K,t),n(e,W,t),n(e,O,t),h(F,e,t),n(e,ee,t),h(m,e,t),n(e,te,t),n(e,R,t),ae=!0},p(e,[t]){const de={};t&2&&(de.$$scope={dirty:t,ctx:e}),m.$set(de)},i(e){ae||(f(y.$$.fragment,e),f(w.$$.fragment,e),f(j.$$.fragment,e),f(x.$$.fragment,e),f(k.$$.fragment,e),f(V.$$.fragment,e),f(F.$$.fragment,e),f(m.$$.fragment,e),ae=!0)},o(e){M(y.$$.fragment,e),M(w.$$.fragment,e),M(j.$$.fragment,e),M(x.$$.fragment,e),M(k.$$.fragment,e),M(V.$$.fragment,e),M(F.$$.fragment,e),M(m.$$.fragment,e),ae=!1},d(e){e&&(a(b),a(p),a(G),a(H),a(S),a(C),a(P),a($),a(z),a(v),a(Y),a(E),a(T),a(I),a(N),a(U),a(q),a(_),a(Q),a(J),a(A),a(Z),a(L),a(D),a(K),a(W),a(O),a(ee),a(te),a(R)),a(i),g(y,e),g(w,e),g(j,e),g(x,e),g(k,e),g(V,e),g(F,e),g(m,e)}}}const xe='{"title":"MatCha","local":"matcha","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Model description","local":"model-description","sections":[],"depth":2},{"title":"Usage","local":"usage","sections":[],"depth":2},{"title":"Fine-tuning","local":"fine-tuning","sections":[],"depth":2}],"depth":1}';function Ue(X){return ge(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class We extends ye{constructor(i){super(),we(this,i,Ue,Te,Me,{})}}export{We as component};
