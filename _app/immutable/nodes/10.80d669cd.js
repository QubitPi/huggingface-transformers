import{s as Ae,o as Ne,n as Qe}from"../chunks/scheduler.9bc65507.js";import{S as Ye,i as qe,g as i,s as l,r as m,A as Ee,h as o,f as s,c as n,j as Ve,u as d,x as r,k as Fe,y as Ke,a,v as h,d as c,t as f,w as y}from"../chunks/index.707bf1b6.js";import{T as De}from"../chunks/Tip.c2ecdbf4.js";import{C as g}from"../chunks/CodeBlock.54a9f38d.js";import{H as ke}from"../chunks/Heading.342b1fa6.js";function Oe(q){let p,M="Note that the randomly created model is initialized with “empty” tensors, which take the space in memory without filling it (thus the random values are whatever was in this chunk of memory at a given time). The random initialization following the appropriate distribution for the kind of model/parameters instantiated (like a normal distribution for instance) is only performed after step 3 on the non-initialized weights, to be as fast as possible!";return{c(){p=i("p"),p.textContent=M},l(w){p=o(w,"P",{"data-svelte-h":!0}),r(p)!=="svelte-1e2x1qo"&&(p.textContent=M)},m(w,Q){a(w,p,Q)},p:Qe,d(w){w&&s(p)}}}function et(q){let p,M,w,Q,j,E,_,ve=`When you want to use a very big pretrained model, one challenge is to minimize the use of the RAM. The usual workflow
from PyTorch is:`,K,b,Te="<li>Create your model with random weights.</li> <li>Load your pretrained weights.</li> <li>Put those pretrained weights in your random model.</li>",D,$,Ce="Step 1 and 2 both require a full version of the model in memory, which is not a problem in most cases, but if your model starts weighing several GigaBytes, those two copies can make you get out of RAM. Even worse, if you are using <code>torch.distributed</code> to launch a distributed training, each process will load the pretrained model and store these two copies in RAM.",O,u,ee,x,Ue="In this guide, we explore the solutions Transformers offer to deal with this issue. Note that this is an area of active development, so the APIs explained here may change slightly in the future.",te,k,se,v,Je="Since version 4.18.0, model checkpoints that end up taking more than 10GB of space are automatically sharded in smaller pieces. In terms of having one single checkpoint when you do <code>model.save_pretrained(save_dir)</code>, you will end up with several partial checkpoints (each of which being of size &lt; 10GB) and an index that maps parameter names to the files they are stored in.",ae,T,Ze="You can control the maximum size before sharding with the <code>max_shard_size</code> parameter, so for the sake of an example, we’ll use a normal-size models with a small shard size: let’s take a traditional BERT model.",le,C,ne,U,Be='If you save it using <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, you will get a new folder with two files: the config of the model and its weights:',ie,J,oe,Z,Re="Now let’s use a maximum shard size of 200MB:",pe,B,re,R,Ge='On top of the configuration of the model, we see three different weights files, and an <code>index.json</code> file which is our index. A checkpoint like this can be fully reloaded using the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method:',me,G,de,I,Ie="The main advantage of doing this for big models is that during step 2 of the workflow shown above, each shard of the checkpoint is loaded after the previous one, capping the memory usage in RAM to the model size plus the size of the biggest shard.",he,X,Xe="Behind the scenes, the index file is used to determine which keys are in the checkpoint, and where the corresponding weights are stored. We can load that index like any json and get a dictionary:",ce,W,fe,S,We="The metadata just consists of the total size of the model for now. We plan to add other information in the future:",ye,H,we,z,Se="The weights map is the main part of this index, which maps each parameter name (as usually found in a PyTorch model <code>state_dict</code>) to the file it’s stored in:",ue,L,ge,P,He='If you want to directly load such a sharded checkpoint inside a model without using <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> (like you would do <code>model.load_state_dict()</code> for a full checkpoint) you should use <a href="/docs/transformers/main/en/main_classes/model#transformers.modeling_utils.load_sharded_checkpoint">load_sharded_checkpoint()</a>:',Me,V,je,F,_e,A,ze="Sharded checkpoints reduce the memory usage during step 2 of the workflow mentioned above, but in order to use that model in a low memory setting, we recommend leveraging our tools based on the Accelerate library.",be,N,Le='Please read the following guide for more information: <a href="./main_classes/model#large-model-loading">Large model loading using Accelerate</a>',$e,Y,xe;return j=new ke({props:{title:"Instantiating a big model",local:"instantiating-a-big-model",headingTag:"h1"}}),u=new De({props:{$$slots:{default:[Oe]},$$scope:{ctx:q}}}),k=new ke({props:{title:"Sharded checkpoints",local:"sharded-checkpoints",headingTag:"h2"}}),C=new g({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Nb2RlbCUwQSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS1jYXNlZCUyMik=",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel

model = AutoModel.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-cased&quot;</span>)`,wrap:!1}}),J=new g({props:{code:"aW1wb3J0JTIwb3MlMEFpbXBvcnQlMjB0ZW1wZmlsZSUwQSUwQXdpdGglMjB0ZW1wZmlsZS5UZW1wb3JhcnlEaXJlY3RvcnkoKSUyMGFzJTIwdG1wX2RpciUzQSUwQSUyMCUyMCUyMCUyMG1vZGVsLnNhdmVfcHJldHJhaW5lZCh0bXBfZGlyKSUwQSUyMCUyMCUyMCUyMHByaW50KHNvcnRlZChvcy5saXN0ZGlyKHRtcF9kaXIpKSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> os
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tempfile

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-built_in">sorted</span>(os.listdir(tmp_dir)))
[<span class="hljs-string">&#x27;config.json&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model.bin&#x27;</span>]`,wrap:!1}}),B=new g({props:{code:"d2l0aCUyMHRlbXBmaWxlLlRlbXBvcmFyeURpcmVjdG9yeSgpJTIwYXMlMjB0bXBfZGlyJTNBJTBBJTIwJTIwJTIwJTIwbW9kZWwuc2F2ZV9wcmV0cmFpbmVkKHRtcF9kaXIlMkMlMjBtYXhfc2hhcmRfc2l6ZSUzRCUyMjIwME1CJTIyKSUwQSUyMCUyMCUyMCUyMHByaW50KHNvcnRlZChvcy5saXN0ZGlyKHRtcF9kaXIpKSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-built_in">sorted</span>(os.listdir(tmp_dir)))
[<span class="hljs-string">&#x27;config.json&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model-00001-of-00003.bin&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model-00002-of-00003.bin&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model-00003-of-00003.bin&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model.bin.index.json&#x27;</span>]`,wrap:!1}}),G=new g({props:{code:"d2l0aCUyMHRlbXBmaWxlLlRlbXBvcmFyeURpcmVjdG9yeSgpJTIwYXMlMjB0bXBfZGlyJTNBJTBBJTIwJTIwJTIwJTIwbW9kZWwuc2F2ZV9wcmV0cmFpbmVkKHRtcF9kaXIlMkMlMjBtYXhfc2hhcmRfc2l6ZSUzRCUyMjIwME1CJTIyKSUwQSUyMCUyMCUyMCUyMG5ld19tb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbC5mcm9tX3ByZXRyYWluZWQodG1wX2Rpcik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    new_model = AutoModel.from_pretrained(tmp_dir)`,wrap:!1}}),W=new g({props:{code:"aW1wb3J0JTIwanNvbiUwQSUwQXdpdGglMjB0ZW1wZmlsZS5UZW1wb3JhcnlEaXJlY3RvcnkoKSUyMGFzJTIwdG1wX2RpciUzQSUwQSUyMCUyMCUyMCUyMG1vZGVsLnNhdmVfcHJldHJhaW5lZCh0bXBfZGlyJTJDJTIwbWF4X3NoYXJkX3NpemUlM0QlMjIyMDBNQiUyMiklMEElMjAlMjAlMjAlMjB3aXRoJTIwb3Blbihvcy5wYXRoLmpvaW4odG1wX2RpciUyQyUyMCUyMnB5dG9yY2hfbW9kZWwuYmluLmluZGV4Lmpzb24lMjIpJTJDJTIwJTIyciUyMiklMjBhcyUyMGYlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpbmRleCUyMCUzRCUyMGpzb24ubG9hZChmKSUwQSUwQXByaW50KGluZGV4LmtleXMoKSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> json

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(os.path.join(tmp_dir, <span class="hljs-string">&quot;pytorch_model.bin.index.json&quot;</span>), <span class="hljs-string">&quot;r&quot;</span>) <span class="hljs-keyword">as</span> f:
<span class="hljs-meta">... </span>        index = json.load(f)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(index.keys())
dict_keys([<span class="hljs-string">&#x27;metadata&#x27;</span>, <span class="hljs-string">&#x27;weight_map&#x27;</span>])`,wrap:!1}}),H=new g({props:{code:"aW5kZXglNUIlMjJtZXRhZGF0YSUyMiU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>index[<span class="hljs-string">&quot;metadata&quot;</span>]
{<span class="hljs-string">&#x27;total_size&#x27;</span>: <span class="hljs-number">433245184</span>}`,wrap:!1}}),L=new g({props:{code:"aW5kZXglNUIlMjJ3ZWlnaHRfbWFwJTIyJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>index[<span class="hljs-string">&quot;weight_map&quot;</span>]
{<span class="hljs-string">&#x27;embeddings.LayerNorm.bias&#x27;</span>: <span class="hljs-string">&#x27;pytorch_model-00001-of-00003.bin&#x27;</span>,
 <span class="hljs-string">&#x27;embeddings.LayerNorm.weight&#x27;</span>: <span class="hljs-string">&#x27;pytorch_model-00001-of-00003.bin&#x27;</span>,
 ...`,wrap:!1}}),V=new g({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycy5tb2RlbGluZ191dGlscyUyMGltcG9ydCUyMGxvYWRfc2hhcmRlZF9jaGVja3BvaW50JTBBJTBBd2l0aCUyMHRlbXBmaWxlLlRlbXBvcmFyeURpcmVjdG9yeSgpJTIwYXMlMjB0bXBfZGlyJTNBJTBBJTIwJTIwJTIwJTIwbW9kZWwuc2F2ZV9wcmV0cmFpbmVkKHRtcF9kaXIlMkMlMjBtYXhfc2hhcmRfc2l6ZSUzRCUyMjIwME1CJTIyKSUwQSUyMCUyMCUyMCUyMGxvYWRfc2hhcmRlZF9jaGVja3BvaW50KG1vZGVsJTJDJTIwdG1wX2Rpcik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.modeling_utils <span class="hljs-keyword">import</span> load_sharded_checkpoint

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    load_sharded_checkpoint(model, tmp_dir)`,wrap:!1}}),F=new ke({props:{title:"Low memory loading",local:"low-memory-loading",headingTag:"h2"}}),{c(){p=i("meta"),M=l(),w=i("p"),Q=l(),m(j.$$.fragment),E=l(),_=i("p"),_.textContent=ve,K=l(),b=i("ol"),b.innerHTML=Te,D=l(),$=i("p"),$.innerHTML=Ce,O=l(),m(u.$$.fragment),ee=l(),x=i("p"),x.textContent=Ue,te=l(),m(k.$$.fragment),se=l(),v=i("p"),v.innerHTML=Je,ae=l(),T=i("p"),T.innerHTML=Ze,le=l(),m(C.$$.fragment),ne=l(),U=i("p"),U.innerHTML=Be,ie=l(),m(J.$$.fragment),oe=l(),Z=i("p"),Z.textContent=Re,pe=l(),m(B.$$.fragment),re=l(),R=i("p"),R.innerHTML=Ge,me=l(),m(G.$$.fragment),de=l(),I=i("p"),I.textContent=Ie,he=l(),X=i("p"),X.textContent=Xe,ce=l(),m(W.$$.fragment),fe=l(),S=i("p"),S.textContent=We,ye=l(),m(H.$$.fragment),we=l(),z=i("p"),z.innerHTML=Se,ue=l(),m(L.$$.fragment),ge=l(),P=i("p"),P.innerHTML=He,Me=l(),m(V.$$.fragment),je=l(),m(F.$$.fragment),_e=l(),A=i("p"),A.textContent=ze,be=l(),N=i("p"),N.innerHTML=Le,$e=l(),Y=i("p"),this.h()},l(e){const t=Ee("svelte-u9bgzb",document.head);p=o(t,"META",{name:!0,content:!0}),t.forEach(s),M=n(e),w=o(e,"P",{}),Ve(w).forEach(s),Q=n(e),d(j.$$.fragment,e),E=n(e),_=o(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-tq7fyu"&&(_.textContent=ve),K=n(e),b=o(e,"OL",{"data-svelte-h":!0}),r(b)!=="svelte-zd4gvw"&&(b.innerHTML=Te),D=n(e),$=o(e,"P",{"data-svelte-h":!0}),r($)!=="svelte-jgtxxx"&&($.innerHTML=Ce),O=n(e),d(u.$$.fragment,e),ee=n(e),x=o(e,"P",{"data-svelte-h":!0}),r(x)!=="svelte-1371yn4"&&(x.textContent=Ue),te=n(e),d(k.$$.fragment,e),se=n(e),v=o(e,"P",{"data-svelte-h":!0}),r(v)!=="svelte-ojzv91"&&(v.innerHTML=Je),ae=n(e),T=o(e,"P",{"data-svelte-h":!0}),r(T)!=="svelte-359nk0"&&(T.innerHTML=Ze),le=n(e),d(C.$$.fragment,e),ne=n(e),U=o(e,"P",{"data-svelte-h":!0}),r(U)!=="svelte-16bigjx"&&(U.innerHTML=Be),ie=n(e),d(J.$$.fragment,e),oe=n(e),Z=o(e,"P",{"data-svelte-h":!0}),r(Z)!=="svelte-1iiexi6"&&(Z.textContent=Re),pe=n(e),d(B.$$.fragment,e),re=n(e),R=o(e,"P",{"data-svelte-h":!0}),r(R)!=="svelte-1j8uryc"&&(R.innerHTML=Ge),me=n(e),d(G.$$.fragment,e),de=n(e),I=o(e,"P",{"data-svelte-h":!0}),r(I)!=="svelte-15d1ip4"&&(I.textContent=Ie),he=n(e),X=o(e,"P",{"data-svelte-h":!0}),r(X)!=="svelte-13hv0w1"&&(X.textContent=Xe),ce=n(e),d(W.$$.fragment,e),fe=n(e),S=o(e,"P",{"data-svelte-h":!0}),r(S)!=="svelte-1j0lyu1"&&(S.textContent=We),ye=n(e),d(H.$$.fragment,e),we=n(e),z=o(e,"P",{"data-svelte-h":!0}),r(z)!=="svelte-pjyzcz"&&(z.innerHTML=Se),ue=n(e),d(L.$$.fragment,e),ge=n(e),P=o(e,"P",{"data-svelte-h":!0}),r(P)!=="svelte-1mmm9"&&(P.innerHTML=He),Me=n(e),d(V.$$.fragment,e),je=n(e),d(F.$$.fragment,e),_e=n(e),A=o(e,"P",{"data-svelte-h":!0}),r(A)!=="svelte-1knub2o"&&(A.textContent=ze),be=n(e),N=o(e,"P",{"data-svelte-h":!0}),r(N)!=="svelte-112uj1w"&&(N.innerHTML=Le),$e=n(e),Y=o(e,"P",{}),Ve(Y).forEach(s),this.h()},h(){Fe(p,"name","hf:doc:metadata"),Fe(p,"content",tt)},m(e,t){Ke(document.head,p),a(e,M,t),a(e,w,t),a(e,Q,t),h(j,e,t),a(e,E,t),a(e,_,t),a(e,K,t),a(e,b,t),a(e,D,t),a(e,$,t),a(e,O,t),h(u,e,t),a(e,ee,t),a(e,x,t),a(e,te,t),h(k,e,t),a(e,se,t),a(e,v,t),a(e,ae,t),a(e,T,t),a(e,le,t),h(C,e,t),a(e,ne,t),a(e,U,t),a(e,ie,t),h(J,e,t),a(e,oe,t),a(e,Z,t),a(e,pe,t),h(B,e,t),a(e,re,t),a(e,R,t),a(e,me,t),h(G,e,t),a(e,de,t),a(e,I,t),a(e,he,t),a(e,X,t),a(e,ce,t),h(W,e,t),a(e,fe,t),a(e,S,t),a(e,ye,t),h(H,e,t),a(e,we,t),a(e,z,t),a(e,ue,t),h(L,e,t),a(e,ge,t),a(e,P,t),a(e,Me,t),h(V,e,t),a(e,je,t),h(F,e,t),a(e,_e,t),a(e,A,t),a(e,be,t),a(e,N,t),a(e,$e,t),a(e,Y,t),xe=!0},p(e,[t]){const Pe={};t&2&&(Pe.$$scope={dirty:t,ctx:e}),u.$set(Pe)},i(e){xe||(c(j.$$.fragment,e),c(u.$$.fragment,e),c(k.$$.fragment,e),c(C.$$.fragment,e),c(J.$$.fragment,e),c(B.$$.fragment,e),c(G.$$.fragment,e),c(W.$$.fragment,e),c(H.$$.fragment,e),c(L.$$.fragment,e),c(V.$$.fragment,e),c(F.$$.fragment,e),xe=!0)},o(e){f(j.$$.fragment,e),f(u.$$.fragment,e),f(k.$$.fragment,e),f(C.$$.fragment,e),f(J.$$.fragment,e),f(B.$$.fragment,e),f(G.$$.fragment,e),f(W.$$.fragment,e),f(H.$$.fragment,e),f(L.$$.fragment,e),f(V.$$.fragment,e),f(F.$$.fragment,e),xe=!1},d(e){e&&(s(M),s(w),s(Q),s(E),s(_),s(K),s(b),s(D),s($),s(O),s(ee),s(x),s(te),s(se),s(v),s(ae),s(T),s(le),s(ne),s(U),s(ie),s(oe),s(Z),s(pe),s(re),s(R),s(me),s(de),s(I),s(he),s(X),s(ce),s(fe),s(S),s(ye),s(we),s(z),s(ue),s(ge),s(P),s(Me),s(je),s(_e),s(A),s(be),s(N),s($e),s(Y)),s(p),y(j,e),y(u,e),y(k,e),y(C,e),y(J,e),y(B,e),y(G,e),y(W,e),y(H,e),y(L,e),y(V,e),y(F,e)}}}const tt='{"title":"Instantiating a big model","local":"instantiating-a-big-model","sections":[{"title":"Sharded checkpoints","local":"sharded-checkpoints","sections":[],"depth":2},{"title":"Low memory loading","local":"low-memory-loading","sections":[],"depth":2}],"depth":1}';function st(q){return Ne(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pt extends Ye{constructor(p){super(),qe(this,p,st,et,Ae,{})}}export{pt as component};