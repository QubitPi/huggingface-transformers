import{s as Oe,o as et,n as tt}from"../chunks/scheduler.9bc65507.js";import{S as st,i as lt,g as o,s as n,r as y,A as nt,h as r,f as s,c as a,j as Ye,u as h,x as p,k as Ke,y as at,a as l,v as m,d as w,t as d,w as M,m as it,n as ot}from"../chunks/index.707bf1b6.js";import{T as De}from"../chunks/Tip.c2ecdbf4.js";import{C as Be}from"../chunks/CodeBlock.54a9f38d.js";import{H as Y}from"../chunks/Heading.342b1fa6.js";function rt(F){let i;return{c(){i=it(`Creating an inference engine is a complex topic, and the "best" solution 
will most likely depend on your problem space. Are you on CPU or GPU? Do
you want the lowest latency, the highest throughput, support for
many models, or just highly optimize 1 specific model?
There are many ways to tackle this topic, so what we are going to present is a good default
to get started which may not necessarily be the most optimal solution for you.`)},l(c){i=ot(c,`Creating an inference engine is a complex topic, and the "best" solution 
will most likely depend on your problem space. Are you on CPU or GPU? Do
you want the lowest latency, the highest throughput, support for
many models, or just highly optimize 1 specific model?
There are many ways to tackle this topic, so what we are going to present is a good default
to get started which may not necessarily be the most optimal solution for you.`)},m(c,u){l(c,i,u)},d(c){c&&s(i)}}}function pt(F){let i,c=`The code sample below is intentionally written like pseudo-code for readability.
Do not run this without checking if it makes sense for your system resources!`;return{c(){i=o("p"),i.textContent=c},l(u){i=r(u,"P",{"data-svelte-h":!0}),p(i)!=="svelte-rnh8z1"&&(i.textContent=c)},m(u,L){l(u,i,L)},p:tt,d(u){u&&s(i)}}}function ct(F){let i,c,u,L,g,D,f,O,J,Ie=`The key thing to understand is that we can use an iterator, just like you would <a href="pipeline_tutorial#using-pipelines-on-a-dataset">on a
dataset</a>, since a webserver is basically a system that waits for requests and
treats them as they come in.`,ee,j,Ae=`Usually webservers are multiplexed (multithreaded, async, etc..) to handle various
requests concurrently. Pipelines on the other hand (and mostly the underlying models)
are not really great for parallelism; they take up a lot of RAM, so it’s best to give them all the available resources when they are running or it’s a compute-intensive job.`,te,b,xe=`We are going to solve that by having the webserver handle the light load of receiving
and sending requests, and having a single thread handling the actual work.
This example is going to use <code>starlette</code>. The actual framework is not really
important, but you might have to tune or change the code if you are using another
one to achieve the same effect.`,se,C,qe="Create <code>server.py</code>:",le,v,ne,U,Ee="Now you can start it with:",ae,$,ie,k,_e="And you can query it:",oe,B,re,I,Xe="And there you go, now you have a good idea of how to create a webserver!",pe,A,Ze=`What is really important is that we load the model only <strong>once</strong>, so there are no copies
of the model on the webserver. This way, no unnecessary RAM is being used.
Then the queuing mechanism allows you to do fancy stuff like maybe accumulating a few
items before inferring to use dynamic batching:`,ce,T,ue,x,ye,q,Ne=`Again, the proposed code is optimized for readability, not for being the best code.
First of all, there’s no batch size limit which is usually not a
great idea. Next, the timeout is reset on every queue fetch, meaning you could
wait much more than 1ms before running the inference (delaying the first request
by that much).`,he,E,Ge="It would be better to have a single 1ms deadline.",me,_,Ve=`This will always wait for 1ms even if the queue is empty, which might not be the
best since you probably want to start doing inference if there’s nothing in the queue.
But maybe it does make sense if batching is really crucial for your use case.
Again, there’s really no one best solution.`,we,X,de,Z,Me,N,He=`There’s a lot that can go wrong in production: out of memory, out of space,
loading the model might fail, the query might be wrong, the query might be
correct but still fail to run because of a model misconfiguration, and so on.`,fe,G,Qe=`Generally, it’s good if the server outputs the errors to the user, so
adding a lot of <code>try..except</code> statements to show those errors is a good
idea. But keep in mind it may also be a security risk to reveal all those errors depending
on your security context.`,Te,V,ge,H,We=`Webservers usually look better when they do circuit breaking. It means they
return proper errors when they’re overloaded instead of just waiting for the query indefinitely. Return a 503 error instead of waiting for a super long time or a 504 after a long time.`,Je,Q,Re=`This is relatively easy to implement in the proposed code since there is a single queue.
Looking at the queue size is a basic way to start returning errors before your
webserver fails under load.`,je,W,be,R,Se=`Currently PyTorch is not async aware, and computation will block the main
thread while running. That means it would be better if PyTorch was forced to run
on its own thread/process. This wasn’t done here because the code is a lot more
complex (mostly because threads and async and queues don’t play nice together).
But ultimately it does the same thing.`,Ce,S,ze=`This would be important if the inference of single items were long (> 1s) because
in this case, it means every query during inference would have to wait for 1s before
even receiving an error.`,ve,z,Ue,P,Pe=`In general, batching is not necessarily an improvement over passing 1 item at
a time (see <a href="./main_classes/pipelines#pipeline-batching">batching details</a> for more information). But it can be very effective
when used in the correct setting. In the API, there is no dynamic
batching by default (too much opportunity for a slowdown). But for BLOOM inference -
which is a very large model - dynamic batching is <strong>essential</strong> to provide a decent experience for everyone.`,$e,K,ke;return g=new Y({props:{title:"Using pipelines for a webserver",local:"using-pipelines-for-a-webserver",headingTag:"h1"}}),f=new De({props:{$$slots:{default:[rt]},$$scope:{ctx:F}}}),v=new Be({props:{code:"ZnJvbSUyMHN0YXJsZXR0ZS5hcHBsaWNhdGlvbnMlMjBpbXBvcnQlMjBTdGFybGV0dGUlMEFmcm9tJTIwc3RhcmxldHRlLnJlc3BvbnNlcyUyMGltcG9ydCUyMEpTT05SZXNwb25zZSUwQWZyb20lMjBzdGFybGV0dGUucm91dGluZyUyMGltcG9ydCUyMFJvdXRlJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMHBpcGVsaW5lJTBBaW1wb3J0JTIwYXN5bmNpbyUwQSUwQSUwQWFzeW5jJTIwZGVmJTIwaG9tZXBhZ2UocmVxdWVzdCklM0ElMEElMjAlMjAlMjAlMjBwYXlsb2FkJTIwJTNEJTIwYXdhaXQlMjByZXF1ZXN0LmJvZHkoKSUwQSUyMCUyMCUyMCUyMHN0cmluZyUyMCUzRCUyMHBheWxvYWQuZGVjb2RlKCUyMnV0Zi04JTIyKSUwQSUyMCUyMCUyMCUyMHJlc3BvbnNlX3ElMjAlM0QlMjBhc3luY2lvLlF1ZXVlKCklMEElMjAlMjAlMjAlMjBhd2FpdCUyMHJlcXVlc3QuYXBwLm1vZGVsX3F1ZXVlLnB1dCgoc3RyaW5nJTJDJTIwcmVzcG9uc2VfcSkpJTBBJTIwJTIwJTIwJTIwb3V0cHV0JTIwJTNEJTIwYXdhaXQlMjByZXNwb25zZV9xLmdldCgpJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwSlNPTlJlc3BvbnNlKG91dHB1dCklMEElMEElMEFhc3luYyUyMGRlZiUyMHNlcnZlcl9sb29wKHEpJTNBJTBBJTIwJTIwJTIwJTIwcGlwZSUyMCUzRCUyMHBpcGVsaW5lKG1vZGVsJTNEJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiklMEElMjAlMjAlMjAlMjB3aGlsZSUyMFRydWUlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoc3RyaW5nJTJDJTIwcmVzcG9uc2VfcSklMjAlM0QlMjBhd2FpdCUyMHEuZ2V0KCklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBvdXQlMjAlM0QlMjBwaXBlKHN0cmluZyklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBhd2FpdCUyMHJlc3BvbnNlX3EucHV0KG91dCklMEElMEElMEFhcHAlMjAlM0QlMjBTdGFybGV0dGUoJTBBJTIwJTIwJTIwJTIwcm91dGVzJTNEJTVCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwUm91dGUoJTIyJTJGJTIyJTJDJTIwaG9tZXBhZ2UlMkMlMjBtZXRob2RzJTNEJTVCJTIyUE9TVCUyMiU1RCklMkMlMEElMjAlMjAlMjAlMjAlNUQlMkMlMEEpJTBBJTBBJTBBJTQwYXBwLm9uX2V2ZW50KCUyMnN0YXJ0dXAlMjIpJTBBYXN5bmMlMjBkZWYlMjBzdGFydHVwX2V2ZW50KCklM0ElMEElMjAlMjAlMjAlMjBxJTIwJTNEJTIwYXN5bmNpby5RdWV1ZSgpJTBBJTIwJTIwJTIwJTIwYXBwLm1vZGVsX3F1ZXVlJTIwJTNEJTIwcSUwQSUyMCUyMCUyMCUyMGFzeW5jaW8uY3JlYXRlX3Rhc2soc2VydmVyX2xvb3AocSkp",highlighted:`<span class="hljs-keyword">from</span> starlette.applications <span class="hljs-keyword">import</span> Starlette
<span class="hljs-keyword">from</span> starlette.responses <span class="hljs-keyword">import</span> JSONResponse
<span class="hljs-keyword">from</span> starlette.routing <span class="hljs-keyword">import</span> Route
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline
<span class="hljs-keyword">import</span> asyncio


<span class="hljs-keyword">async</span> <span class="hljs-keyword">def</span> <span class="hljs-title function_">homepage</span>(<span class="hljs-params">request</span>):
    payload = <span class="hljs-keyword">await</span> request.body()
    string = payload.decode(<span class="hljs-string">&quot;utf-8&quot;</span>)
    response_q = asyncio.Queue()
    <span class="hljs-keyword">await</span> request.app.model_queue.put((string, response_q))
    output = <span class="hljs-keyword">await</span> response_q.get()
    <span class="hljs-keyword">return</span> JSONResponse(output)


<span class="hljs-keyword">async</span> <span class="hljs-keyword">def</span> <span class="hljs-title function_">server_loop</span>(<span class="hljs-params">q</span>):
    pipe = pipeline(model=<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
    <span class="hljs-keyword">while</span> <span class="hljs-literal">True</span>:
        (string, response_q) = <span class="hljs-keyword">await</span> q.get()
        out = pipe(string)
        <span class="hljs-keyword">await</span> response_q.put(out)


app = Starlette(
    routes=[
        Route(<span class="hljs-string">&quot;/&quot;</span>, homepage, methods=[<span class="hljs-string">&quot;POST&quot;</span>]),
    ],
)


<span class="hljs-meta">@app.on_event(<span class="hljs-params"><span class="hljs-string">&quot;startup&quot;</span></span>)</span>
<span class="hljs-keyword">async</span> <span class="hljs-keyword">def</span> <span class="hljs-title function_">startup_event</span>():
    q = asyncio.Queue()
    app.model_queue = q
    asyncio.create_task(server_loop(q))`,wrap:!1}}),$=new Be({props:{code:"dXZpY29ybiUyMHNlcnZlciUzQWFwcA==",highlighted:"uvicorn server:app",wrap:!1}}),B=new Be({props:{code:"Y3VybCUyMC1YJTIwUE9TVCUyMC1kJTIwJTIydGVzdCUyMCU1Qk1BU0slNUQlMjIlMjBodHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBODAwMCUyRiUwQSUyMyU1QiU3QiUyMnNjb3JlJTIyJTNBMC43NzQyOTM2MDE1MTI5MDg5JTJDJTIydG9rZW4lMjIlM0ExMDEyJTJDJTIydG9rZW5fc3RyJTIyJTNBJTIyLiUyMiUyQyUyMnNlcXVlbmNlJTIyJTNBJTIydGVzdC4lMjIlN0QlMkMuLi4lNUQ=",highlighted:`curl -X POST -d <span class="hljs-string">&quot;test [MASK]&quot;</span> http://localhost:8000/
<span class="hljs-comment">#[{&quot;score&quot;:0.7742936015129089,&quot;token&quot;:1012,&quot;token_str&quot;:&quot;.&quot;,&quot;sequence&quot;:&quot;test.&quot;},...]</span>`,wrap:!1}}),T=new De({props:{warning:!0,$$slots:{default:[pt]},$$scope:{ctx:F}}}),x=new Be({props:{code:"KHN0cmluZyUyQyUyMHJxKSUyMCUzRCUyMGF3YWl0JTIwcS5nZXQoKSUwQXN0cmluZ3MlMjAlM0QlMjAlNUIlNUQlMEFxdWV1ZXMlMjAlM0QlMjAlNUIlNUQlMEF3aGlsZSUyMFRydWUlM0ElMEElMjAlMjAlMjAlMjB0cnklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoc3RyaW5nJTJDJTIwcnEpJTIwJTNEJTIwYXdhaXQlMjBhc3luY2lvLndhaXRfZm9yKHEuZ2V0KCklMkMlMjB0aW1lb3V0JTNEMC4wMDEpJTIwJTIwJTIzJTIwMW1zJTBBJTIwJTIwJTIwJTIwZXhjZXB0JTIwYXN5bmNpby5leGNlcHRpb25zLlRpbWVvdXRFcnJvciUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGJyZWFrJTBBJTIwJTIwJTIwJTIwc3RyaW5ncy5hcHBlbmQoc3RyaW5nKSUwQSUyMCUyMCUyMCUyMHF1ZXVlcy5hcHBlbmQocnEpJTBBc3RyaW5ncyUwQW91dHMlMjAlM0QlMjBwaXBlKHN0cmluZ3MlMkMlMjBiYXRjaF9zaXplJTNEbGVuKHN0cmluZ3MpKSUwQWZvciUyMHJxJTJDJTIwb3V0JTIwaW4lMjB6aXAocXVldWVzJTJDJTIwb3V0cyklM0ElMEElMjAlMjAlMjAlMjBhd2FpdCUyMHJxLnB1dChvdXQp",highlighted:`(string, rq) = <span class="hljs-keyword">await</span> q.get()
strings = []
queues = []
<span class="hljs-keyword">while</span> <span class="hljs-literal">True</span>:
    <span class="hljs-keyword">try</span>:
        (string, rq) = <span class="hljs-keyword">await</span> asyncio.wait_for(q.get(), timeout=<span class="hljs-number">0.001</span>)  <span class="hljs-comment"># 1ms</span>
    <span class="hljs-keyword">except</span> asyncio.exceptions.TimeoutError:
        <span class="hljs-keyword">break</span>
    strings.append(string)
    queues.append(rq)
strings
outs = pipe(strings, batch_size=<span class="hljs-built_in">len</span>(strings))
<span class="hljs-keyword">for</span> rq, out <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queues, outs):
    <span class="hljs-keyword">await</span> rq.put(out)`,wrap:!1}}),X=new Y({props:{title:"Few things you might want to consider",local:"few-things-you-might-want-to-consider",headingTag:"h2"}}),Z=new Y({props:{title:"Error checking",local:"error-checking",headingTag:"h3"}}),V=new Y({props:{title:"Circuit breaking",local:"circuit-breaking",headingTag:"h3"}}),W=new Y({props:{title:"Blocking the main thread",local:"blocking-the-main-thread",headingTag:"h3"}}),z=new Y({props:{title:"Dynamic batching",local:"dynamic-batching",headingTag:"h3"}}),{c(){i=o("meta"),c=n(),u=o("p"),L=n(),y(g.$$.fragment),D=n(),y(f.$$.fragment),O=n(),J=o("p"),J.innerHTML=Ie,ee=n(),j=o("p"),j.textContent=Ae,te=n(),b=o("p"),b.innerHTML=xe,se=n(),C=o("p"),C.innerHTML=qe,le=n(),y(v.$$.fragment),ne=n(),U=o("p"),U.textContent=Ee,ae=n(),y($.$$.fragment),ie=n(),k=o("p"),k.textContent=_e,oe=n(),y(B.$$.fragment),re=n(),I=o("p"),I.textContent=Xe,pe=n(),A=o("p"),A.innerHTML=Ze,ce=n(),y(T.$$.fragment),ue=n(),y(x.$$.fragment),ye=n(),q=o("p"),q.textContent=Ne,he=n(),E=o("p"),E.textContent=Ge,me=n(),_=o("p"),_.textContent=Ve,we=n(),y(X.$$.fragment),de=n(),y(Z.$$.fragment),Me=n(),N=o("p"),N.textContent=He,fe=n(),G=o("p"),G.innerHTML=Qe,Te=n(),y(V.$$.fragment),ge=n(),H=o("p"),H.textContent=We,Je=n(),Q=o("p"),Q.textContent=Re,je=n(),y(W.$$.fragment),be=n(),R=o("p"),R.textContent=Se,Ce=n(),S=o("p"),S.textContent=ze,ve=n(),y(z.$$.fragment),Ue=n(),P=o("p"),P.innerHTML=Pe,$e=n(),K=o("p"),this.h()},l(e){const t=nt("svelte-u9bgzb",document.head);i=r(t,"META",{name:!0,content:!0}),t.forEach(s),c=a(e),u=r(e,"P",{}),Ye(u).forEach(s),L=a(e),h(g.$$.fragment,e),D=a(e),h(f.$$.fragment,e),O=a(e),J=r(e,"P",{"data-svelte-h":!0}),p(J)!=="svelte-n5c362"&&(J.innerHTML=Ie),ee=a(e),j=r(e,"P",{"data-svelte-h":!0}),p(j)!=="svelte-1fnss2o"&&(j.textContent=Ae),te=a(e),b=r(e,"P",{"data-svelte-h":!0}),p(b)!=="svelte-8q5x1q"&&(b.innerHTML=xe),se=a(e),C=r(e,"P",{"data-svelte-h":!0}),p(C)!=="svelte-g4gw6x"&&(C.innerHTML=qe),le=a(e),h(v.$$.fragment,e),ne=a(e),U=r(e,"P",{"data-svelte-h":!0}),p(U)!=="svelte-1uqobnc"&&(U.textContent=Ee),ae=a(e),h($.$$.fragment,e),ie=a(e),k=r(e,"P",{"data-svelte-h":!0}),p(k)!=="svelte-65h2jl"&&(k.textContent=_e),oe=a(e),h(B.$$.fragment,e),re=a(e),I=r(e,"P",{"data-svelte-h":!0}),p(I)!=="svelte-1c2g0w1"&&(I.textContent=Xe),pe=a(e),A=r(e,"P",{"data-svelte-h":!0}),p(A)!=="svelte-1l65fmc"&&(A.innerHTML=Ze),ce=a(e),h(T.$$.fragment,e),ue=a(e),h(x.$$.fragment,e),ye=a(e),q=r(e,"P",{"data-svelte-h":!0}),p(q)!=="svelte-14jxcik"&&(q.textContent=Ne),he=a(e),E=r(e,"P",{"data-svelte-h":!0}),p(E)!=="svelte-1bprwig"&&(E.textContent=Ge),me=a(e),_=r(e,"P",{"data-svelte-h":!0}),p(_)!=="svelte-1fuz8qb"&&(_.textContent=Ve),we=a(e),h(X.$$.fragment,e),de=a(e),h(Z.$$.fragment,e),Me=a(e),N=r(e,"P",{"data-svelte-h":!0}),p(N)!=="svelte-vb47n8"&&(N.textContent=He),fe=a(e),G=r(e,"P",{"data-svelte-h":!0}),p(G)!=="svelte-n6itpg"&&(G.innerHTML=Qe),Te=a(e),h(V.$$.fragment,e),ge=a(e),H=r(e,"P",{"data-svelte-h":!0}),p(H)!=="svelte-1h0ewze"&&(H.textContent=We),Je=a(e),Q=r(e,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-7kt80n"&&(Q.textContent=Re),je=a(e),h(W.$$.fragment,e),be=a(e),R=r(e,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1vr6kgq"&&(R.textContent=Se),Ce=a(e),S=r(e,"P",{"data-svelte-h":!0}),p(S)!=="svelte-ime2kf"&&(S.textContent=ze),ve=a(e),h(z.$$.fragment,e),Ue=a(e),P=r(e,"P",{"data-svelte-h":!0}),p(P)!=="svelte-hsmuqq"&&(P.innerHTML=Pe),$e=a(e),K=r(e,"P",{}),Ye(K).forEach(s),this.h()},h(){Ke(i,"name","hf:doc:metadata"),Ke(i,"content",ut)},m(e,t){at(document.head,i),l(e,c,t),l(e,u,t),l(e,L,t),m(g,e,t),l(e,D,t),m(f,e,t),l(e,O,t),l(e,J,t),l(e,ee,t),l(e,j,t),l(e,te,t),l(e,b,t),l(e,se,t),l(e,C,t),l(e,le,t),m(v,e,t),l(e,ne,t),l(e,U,t),l(e,ae,t),m($,e,t),l(e,ie,t),l(e,k,t),l(e,oe,t),m(B,e,t),l(e,re,t),l(e,I,t),l(e,pe,t),l(e,A,t),l(e,ce,t),m(T,e,t),l(e,ue,t),m(x,e,t),l(e,ye,t),l(e,q,t),l(e,he,t),l(e,E,t),l(e,me,t),l(e,_,t),l(e,we,t),m(X,e,t),l(e,de,t),m(Z,e,t),l(e,Me,t),l(e,N,t),l(e,fe,t),l(e,G,t),l(e,Te,t),m(V,e,t),l(e,ge,t),l(e,H,t),l(e,Je,t),l(e,Q,t),l(e,je,t),m(W,e,t),l(e,be,t),l(e,R,t),l(e,Ce,t),l(e,S,t),l(e,ve,t),m(z,e,t),l(e,Ue,t),l(e,P,t),l(e,$e,t),l(e,K,t),ke=!0},p(e,[t]){const Fe={};t&2&&(Fe.$$scope={dirty:t,ctx:e}),f.$set(Fe);const Le={};t&2&&(Le.$$scope={dirty:t,ctx:e}),T.$set(Le)},i(e){ke||(w(g.$$.fragment,e),w(f.$$.fragment,e),w(v.$$.fragment,e),w($.$$.fragment,e),w(B.$$.fragment,e),w(T.$$.fragment,e),w(x.$$.fragment,e),w(X.$$.fragment,e),w(Z.$$.fragment,e),w(V.$$.fragment,e),w(W.$$.fragment,e),w(z.$$.fragment,e),ke=!0)},o(e){d(g.$$.fragment,e),d(f.$$.fragment,e),d(v.$$.fragment,e),d($.$$.fragment,e),d(B.$$.fragment,e),d(T.$$.fragment,e),d(x.$$.fragment,e),d(X.$$.fragment,e),d(Z.$$.fragment,e),d(V.$$.fragment,e),d(W.$$.fragment,e),d(z.$$.fragment,e),ke=!1},d(e){e&&(s(c),s(u),s(L),s(D),s(O),s(J),s(ee),s(j),s(te),s(b),s(se),s(C),s(le),s(ne),s(U),s(ae),s(ie),s(k),s(oe),s(re),s(I),s(pe),s(A),s(ce),s(ue),s(ye),s(q),s(he),s(E),s(me),s(_),s(we),s(de),s(Me),s(N),s(fe),s(G),s(Te),s(ge),s(H),s(Je),s(Q),s(je),s(be),s(R),s(Ce),s(S),s(ve),s(Ue),s(P),s($e),s(K)),s(i),M(g,e),M(f,e),M(v,e),M($,e),M(B,e),M(T,e),M(x,e),M(X,e),M(Z,e),M(V,e),M(W,e),M(z,e)}}}const ut='{"title":"Using pipelines for a webserver","local":"using-pipelines-for-a-webserver","sections":[{"title":"Few things you might want to consider","local":"few-things-you-might-want-to-consider","sections":[{"title":"Error checking","local":"error-checking","sections":[],"depth":3},{"title":"Circuit breaking","local":"circuit-breaking","sections":[],"depth":3},{"title":"Blocking the main thread","local":"blocking-the-main-thread","sections":[],"depth":3},{"title":"Dynamic batching","local":"dynamic-batching","sections":[],"depth":3}],"depth":2}],"depth":1}';function yt(F){return et(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ft extends st{constructor(i){super(),lt(this,i,yt,ct,Oe,{})}}export{ft as component};
