import{s as ve,n as Ye,o as _e}from"../chunks/scheduler.9bc65507.js";import{S as xe,i as Ne,g as m,s as n,r,A as Ve,h as y,f as a,c as s,j as Xe,u as i,x as w,k as ke,y as Re,a as l,v as c,d as o,t as p,w as M}from"../chunks/index.707bf1b6.js";import{C as h}from"../chunks/CodeBlock.54a9f38d.js";import{H as E}from"../chunks/Heading.342b1fa6.js";function Qe(ue){let d,S,F,z,J,K,T,be='As models get bigger, parallelism has emerged as a strategy for training larger models on limited hardware and accelerating training speed by several orders of magnitude. At Hugging Face, we created the <a href="https://huggingface.co/docs/accelerate" rel="nofollow">🤗 Accelerate</a> library to help users easily train a 🤗 Transformers model on any type of distributed setup, whether it is multiple GPU’s on one machine or multiple GPU’s across several machines. In this tutorial, learn how to customize your native PyTorch training loop to enable training in a distributed environment.',L,j,P,f,Ue="Get started by installing 🤗 Accelerate:",q,u,D,b,ge='Then import and create an <a href="https://huggingface.co/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator" rel="nofollow">Accelerator</a> object. The <a href="https://huggingface.co/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator" rel="nofollow">Accelerator</a> will automatically detect your type of distributed setup and initialize all the necessary components for training. You don’t need to explicitly place your model on a device.',O,U,ee,g,te,$,$e='The next step is to pass all the relevant training objects to the <a href="https://huggingface.co/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.prepare" rel="nofollow">prepare</a> method. This includes your training and evaluation DataLoaders, a model and an optimizer:',ae,I,le,C,ne,B,Ie='The last addition is to replace the typical <code>loss.backward()</code> in your training loop with 🤗 Accelerate’s <a href="https://huggingface.co/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.backward" rel="nofollow">backward</a>method:',se,A,re,Z,Ce="As you can see in the following code, you only need to add four additional lines of code to your training loop to enable distributed training!",ie,W,ce,G,oe,X,Be="Once you’ve added the relevant lines of code, launch your training in a script or a notebook like Colaboratory.",pe,k,Me,v,Ae="If you are running your training from a script, run the following command to create and save a configuration file:",me,Y,ye,_,Ze="Then launch your training with:",we,x,de,N,he,V,We='🤗 Accelerate can also run in a notebook if you’re planning on using Colaboratory’s TPUs. Wrap all the code responsible for training in a function, and pass it to <a href="https://huggingface.co/docs/accelerate/main/en/package_reference/launchers#accelerate.notebook_launcher" rel="nofollow">notebook_launcher</a>:',Je,R,Te,Q,Ge='For more information about 🤗 Accelerate and its rich features, refer to the <a href="https://huggingface.co/docs/accelerate" rel="nofollow">documentation</a>.',je,H,fe;return J=new E({props:{title:"Distributed training with 🤗 Accelerate",local:"distributed-training-with--accelerate",headingTag:"h1"}}),j=new E({props:{title:"Setup",local:"setup",headingTag:"h2"}}),u=new h({props:{code:"cGlwJTIwaW5zdGFsbCUyMGFjY2VsZXJhdGU=",highlighted:"pip install accelerate",wrap:!1}}),U=new h({props:{code:"ZnJvbSUyMGFjY2VsZXJhdGUlMjBpbXBvcnQlMjBBY2NlbGVyYXRvciUwQSUwQWFjY2VsZXJhdG9yJTIwJTNEJTIwQWNjZWxlcmF0b3IoKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

<span class="hljs-meta">&gt;&gt;&gt; </span>accelerator = Accelerator()`,wrap:!1}}),g=new E({props:{title:"Prepare to accelerate",local:"prepare-to-accelerate",headingTag:"h2"}}),I=new h({props:{code:"dHJhaW5fZGF0YWxvYWRlciUyQyUyMGV2YWxfZGF0YWxvYWRlciUyQyUyMG1vZGVsJTJDJTIwb3B0aW1pemVyJTIwJTNEJTIwYWNjZWxlcmF0b3IucHJlcGFyZSglMEElMjAlMjAlMjAlMjB0cmFpbl9kYXRhbG9hZGVyJTJDJTIwZXZhbF9kYXRhbG9hZGVyJTJDJTIwbW9kZWwlMkMlMjBvcHRpbWl6ZXIlMEEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(
<span class="hljs-meta">... </span>    train_dataloader, eval_dataloader, model, optimizer
<span class="hljs-meta">... </span>)`,wrap:!1}}),C=new E({props:{title:"Backward",local:"backward",headingTag:"h2"}}),A=new h({props:{code:"Zm9yJTIwZXBvY2glMjBpbiUyMHJhbmdlKG51bV9lcG9jaHMpJTNBJTBBJTIwJTIwJTIwJTIwZm9yJTIwYmF0Y2glMjBpbiUyMHRyYWluX2RhdGFsb2FkZXIlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKipiYXRjaCklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwYWNjZWxlcmF0b3IuYmFja3dhcmQobG9zcyklMEElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBvcHRpbWl6ZXIuc3RlcCgpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwbHJfc2NoZWR1bGVyLnN0ZXAoKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMG9wdGltaXplci56ZXJvX2dyYWQoKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHByb2dyZXNzX2Jhci51cGRhdGUoMSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_epochs):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        outputs = model(**batch)
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        accelerator.backward(loss)

<span class="hljs-meta">... </span>        optimizer.step()
<span class="hljs-meta">... </span>        lr_scheduler.step()
<span class="hljs-meta">... </span>        optimizer.zero_grad()
<span class="hljs-meta">... </span>        progress_bar.update(<span class="hljs-number">1</span>)`,wrap:!1}}),W=new h({props:{code:"JTJCJTIwZnJvbSUyMGFjY2VsZXJhdGUlMjBpbXBvcnQlMjBBY2NlbGVyYXRvciUwQSUyMCUyMGZyb20lMjB0cmFuc2Zvcm1lcnMlMjBpbXBvcnQlMjBBZGFtVyUyQyUyMEF1dG9Nb2RlbEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMkMlMjBnZXRfc2NoZWR1bGVyJTBBJTBBJTJCJTIwYWNjZWxlcmF0b3IlMjAlM0QlMjBBY2NlbGVyYXRvcigpJTBBJTBBJTIwJTIwbW9kZWwlMjAlM0QlMjBBdXRvTW9kZWxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZChjaGVja3BvaW50JTJDJTIwbnVtX2xhYmVscyUzRDIpJTBBJTIwJTIwb3B0aW1pemVyJTIwJTNEJTIwQWRhbVcobW9kZWwucGFyYW1ldGVycygpJTJDJTIwbHIlM0QzZS01KSUwQSUwQS0lMjBkZXZpY2UlMjAlM0QlMjB0b3JjaC5kZXZpY2UoJTIyY3VkYSUyMiklMjBpZiUyMHRvcmNoLmN1ZGEuaXNfYXZhaWxhYmxlKCklMjBlbHNlJTIwdG9yY2guZGV2aWNlKCUyMmNwdSUyMiklMEEtJTIwbW9kZWwudG8oZGV2aWNlKSUwQSUwQSUyQiUyMHRyYWluX2RhdGFsb2FkZXIlMkMlMjBldmFsX2RhdGFsb2FkZXIlMkMlMjBtb2RlbCUyQyUyMG9wdGltaXplciUyMCUzRCUyMGFjY2VsZXJhdG9yLnByZXBhcmUoJTBBJTJCJTIwJTIwJTIwJTIwJTIwdHJhaW5fZGF0YWxvYWRlciUyQyUyMGV2YWxfZGF0YWxvYWRlciUyQyUyMG1vZGVsJTJDJTIwb3B0aW1pemVyJTBBJTJCJTIwKSUwQSUwQSUyMCUyMG51bV9lcG9jaHMlMjAlM0QlMjAzJTBBJTIwJTIwbnVtX3RyYWluaW5nX3N0ZXBzJTIwJTNEJTIwbnVtX2Vwb2NocyUyMColMjBsZW4odHJhaW5fZGF0YWxvYWRlciklMEElMjAlMjBscl9zY2hlZHVsZXIlMjAlM0QlMjBnZXRfc2NoZWR1bGVyKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMmxpbmVhciUyMiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMG9wdGltaXplciUzRG9wdGltaXplciUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMG51bV93YXJtdXBfc3RlcHMlM0QwJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwbnVtX3RyYWluaW5nX3N0ZXBzJTNEbnVtX3RyYWluaW5nX3N0ZXBzJTBBJTIwJTIwKSUwQSUwQSUyMCUyMHByb2dyZXNzX2JhciUyMCUzRCUyMHRxZG0ocmFuZ2UobnVtX3RyYWluaW5nX3N0ZXBzKSklMEElMEElMjAlMjBtb2RlbC50cmFpbigpJTBBJTIwJTIwZm9yJTIwZXBvY2glMjBpbiUyMHJhbmdlKG51bV9lcG9jaHMpJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwZm9yJTIwYmF0Y2glMjBpbiUyMHRyYWluX2RhdGFsb2FkZXIlM0ElMEEtJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwYmF0Y2glMjAlM0QlMjAlN0JrJTNBJTIwdi50byhkZXZpY2UpJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGJhdGNoLml0ZW1zKCklN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKipiYXRjaCklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBLSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGxvc3MuYmFja3dhcmQoKSUwQSUyQiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGFjY2VsZXJhdG9yLmJhY2t3YXJkKGxvc3MpJTBBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwb3B0aW1pemVyLnN0ZXAoKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGxyX3NjaGVkdWxlci5zdGVwKCklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBvcHRpbWl6ZXIuemVyb19ncmFkKCklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcm9ncmVzc19iYXIudXBkYXRlKDEp",highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>
  from transformers import AdamW, AutoModelForSequenceClassification, get_scheduler

<span class="hljs-addition">+ accelerator = Accelerator()</span>

  model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)
  optimizer = AdamW(model.parameters(), lr=3e-5)

<span class="hljs-deletion">- device = torch.device(&quot;cuda&quot;) if torch.cuda.is_available() else torch.device(&quot;cpu&quot;)</span>
<span class="hljs-deletion">- model.to(device)</span>

<span class="hljs-addition">+ train_dataloader, eval_dataloader, model, optimizer = accelerator.prepare(</span>
<span class="hljs-addition">+     train_dataloader, eval_dataloader, model, optimizer</span>
<span class="hljs-addition">+ )</span>

  num_epochs = 3
  num_training_steps = num_epochs * len(train_dataloader)
  lr_scheduler = get_scheduler(
      &quot;linear&quot;,
      optimizer=optimizer,
      num_warmup_steps=0,
      num_training_steps=num_training_steps
  )

  progress_bar = tqdm(range(num_training_steps))

  model.train()
  for epoch in range(num_epochs):
      for batch in train_dataloader:
<span class="hljs-deletion">-         batch = {k: v.to(device) for k, v in batch.items()}</span>
          outputs = model(**batch)
          loss = outputs.loss
<span class="hljs-deletion">-         loss.backward()</span>
<span class="hljs-addition">+         accelerator.backward(loss)</span>

          optimizer.step()
          lr_scheduler.step()
          optimizer.zero_grad()
          progress_bar.update(1)`,wrap:!1}}),G=new E({props:{title:"Train",local:"train",headingTag:"h2"}}),k=new E({props:{title:"Train with a script",local:"train-with-a-script",headingTag:"h3"}}),Y=new h({props:{code:"YWNjZWxlcmF0ZSUyMGNvbmZpZw==",highlighted:"accelerate config",wrap:!1}}),x=new h({props:{code:"YWNjZWxlcmF0ZSUyMGxhdW5jaCUyMHRyYWluLnB5",highlighted:"accelerate launch train.py",wrap:!1}}),N=new E({props:{title:"Train with a notebook",local:"train-with-a-notebook",headingTag:"h3"}}),R=new h({props:{code:"ZnJvbSUyMGFjY2VsZXJhdGUlMjBpbXBvcnQlMjBub3RlYm9va19sYXVuY2hlciUwQSUwQW5vdGVib29rX2xhdW5jaGVyKHRyYWluaW5nX2Z1bmN0aW9uKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_launcher(training_function)`,wrap:!1}}),{c(){d=m("meta"),S=n(),F=m("p"),z=n(),r(J.$$.fragment),K=n(),T=m("p"),T.innerHTML=be,L=n(),r(j.$$.fragment),P=n(),f=m("p"),f.textContent=Ue,q=n(),r(u.$$.fragment),D=n(),b=m("p"),b.innerHTML=ge,O=n(),r(U.$$.fragment),ee=n(),r(g.$$.fragment),te=n(),$=m("p"),$.innerHTML=$e,ae=n(),r(I.$$.fragment),le=n(),r(C.$$.fragment),ne=n(),B=m("p"),B.innerHTML=Ie,se=n(),r(A.$$.fragment),re=n(),Z=m("p"),Z.textContent=Ce,ie=n(),r(W.$$.fragment),ce=n(),r(G.$$.fragment),oe=n(),X=m("p"),X.textContent=Be,pe=n(),r(k.$$.fragment),Me=n(),v=m("p"),v.textContent=Ae,me=n(),r(Y.$$.fragment),ye=n(),_=m("p"),_.textContent=Ze,we=n(),r(x.$$.fragment),de=n(),r(N.$$.fragment),he=n(),V=m("p"),V.innerHTML=We,Je=n(),r(R.$$.fragment),Te=n(),Q=m("p"),Q.innerHTML=Ge,je=n(),H=m("p"),this.h()},l(e){const t=Ve("svelte-u9bgzb",document.head);d=y(t,"META",{name:!0,content:!0}),t.forEach(a),S=s(e),F=y(e,"P",{}),Xe(F).forEach(a),z=s(e),i(J.$$.fragment,e),K=s(e),T=y(e,"P",{"data-svelte-h":!0}),w(T)!=="svelte-11mv690"&&(T.innerHTML=be),L=s(e),i(j.$$.fragment,e),P=s(e),f=y(e,"P",{"data-svelte-h":!0}),w(f)!=="svelte-1wyzwc5"&&(f.textContent=Ue),q=s(e),i(u.$$.fragment,e),D=s(e),b=y(e,"P",{"data-svelte-h":!0}),w(b)!=="svelte-1j0db2t"&&(b.innerHTML=ge),O=s(e),i(U.$$.fragment,e),ee=s(e),i(g.$$.fragment,e),te=s(e),$=y(e,"P",{"data-svelte-h":!0}),w($)!=="svelte-6emsq4"&&($.innerHTML=$e),ae=s(e),i(I.$$.fragment,e),le=s(e),i(C.$$.fragment,e),ne=s(e),B=y(e,"P",{"data-svelte-h":!0}),w(B)!=="svelte-1g0xqm6"&&(B.innerHTML=Ie),se=s(e),i(A.$$.fragment,e),re=s(e),Z=y(e,"P",{"data-svelte-h":!0}),w(Z)!=="svelte-tbmaal"&&(Z.textContent=Ce),ie=s(e),i(W.$$.fragment,e),ce=s(e),i(G.$$.fragment,e),oe=s(e),X=y(e,"P",{"data-svelte-h":!0}),w(X)!=="svelte-1bmx0kl"&&(X.textContent=Be),pe=s(e),i(k.$$.fragment,e),Me=s(e),v=y(e,"P",{"data-svelte-h":!0}),w(v)!=="svelte-d65x2y"&&(v.textContent=Ae),me=s(e),i(Y.$$.fragment,e),ye=s(e),_=y(e,"P",{"data-svelte-h":!0}),w(_)!=="svelte-xc3fgn"&&(_.textContent=Ze),we=s(e),i(x.$$.fragment,e),de=s(e),i(N.$$.fragment,e),he=s(e),V=y(e,"P",{"data-svelte-h":!0}),w(V)!=="svelte-6n473t"&&(V.innerHTML=We),Je=s(e),i(R.$$.fragment,e),Te=s(e),Q=y(e,"P",{"data-svelte-h":!0}),w(Q)!=="svelte-5m2lvn"&&(Q.innerHTML=Ge),je=s(e),H=y(e,"P",{}),Xe(H).forEach(a),this.h()},h(){ke(d,"name","hf:doc:metadata"),ke(d,"content",Ee)},m(e,t){Re(document.head,d),l(e,S,t),l(e,F,t),l(e,z,t),c(J,e,t),l(e,K,t),l(e,T,t),l(e,L,t),c(j,e,t),l(e,P,t),l(e,f,t),l(e,q,t),c(u,e,t),l(e,D,t),l(e,b,t),l(e,O,t),c(U,e,t),l(e,ee,t),c(g,e,t),l(e,te,t),l(e,$,t),l(e,ae,t),c(I,e,t),l(e,le,t),c(C,e,t),l(e,ne,t),l(e,B,t),l(e,se,t),c(A,e,t),l(e,re,t),l(e,Z,t),l(e,ie,t),c(W,e,t),l(e,ce,t),c(G,e,t),l(e,oe,t),l(e,X,t),l(e,pe,t),c(k,e,t),l(e,Me,t),l(e,v,t),l(e,me,t),c(Y,e,t),l(e,ye,t),l(e,_,t),l(e,we,t),c(x,e,t),l(e,de,t),c(N,e,t),l(e,he,t),l(e,V,t),l(e,Je,t),c(R,e,t),l(e,Te,t),l(e,Q,t),l(e,je,t),l(e,H,t),fe=!0},p:Ye,i(e){fe||(o(J.$$.fragment,e),o(j.$$.fragment,e),o(u.$$.fragment,e),o(U.$$.fragment,e),o(g.$$.fragment,e),o(I.$$.fragment,e),o(C.$$.fragment,e),o(A.$$.fragment,e),o(W.$$.fragment,e),o(G.$$.fragment,e),o(k.$$.fragment,e),o(Y.$$.fragment,e),o(x.$$.fragment,e),o(N.$$.fragment,e),o(R.$$.fragment,e),fe=!0)},o(e){p(J.$$.fragment,e),p(j.$$.fragment,e),p(u.$$.fragment,e),p(U.$$.fragment,e),p(g.$$.fragment,e),p(I.$$.fragment,e),p(C.$$.fragment,e),p(A.$$.fragment,e),p(W.$$.fragment,e),p(G.$$.fragment,e),p(k.$$.fragment,e),p(Y.$$.fragment,e),p(x.$$.fragment,e),p(N.$$.fragment,e),p(R.$$.fragment,e),fe=!1},d(e){e&&(a(S),a(F),a(z),a(K),a(T),a(L),a(P),a(f),a(q),a(D),a(b),a(O),a(ee),a(te),a($),a(ae),a(le),a(ne),a(B),a(se),a(re),a(Z),a(ie),a(ce),a(oe),a(X),a(pe),a(Me),a(v),a(me),a(ye),a(_),a(we),a(de),a(he),a(V),a(Je),a(Te),a(Q),a(je),a(H)),a(d),M(J,e),M(j,e),M(u,e),M(U,e),M(g,e),M(I,e),M(C,e),M(A,e),M(W,e),M(G,e),M(k,e),M(Y,e),M(x,e),M(N,e),M(R,e)}}}const Ee='{"title":"Distributed training with 🤗 Accelerate","local":"distributed-training-with--accelerate","sections":[{"title":"Setup","local":"setup","sections":[],"depth":2},{"title":"Prepare to accelerate","local":"prepare-to-accelerate","sections":[],"depth":2},{"title":"Backward","local":"backward","sections":[],"depth":2},{"title":"Train","local":"train","sections":[{"title":"Train with a script","local":"train-with-a-script","sections":[],"depth":3},{"title":"Train with a notebook","local":"train-with-a-notebook","sections":[],"depth":3}],"depth":2}],"depth":1}';function Fe(ue){return _e(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Le extends xe{constructor(d){super(),Ne(this,d,Fe,Qe,ve,{})}}export{Le as component};
