import{s as kl,f as lt,o as Bl,n as Zn}from"../chunks/scheduler.9bc65507.js";import{S as Il,i as Gl,g as i,s,r as u,A as Zl,h as o,f as n,c as a,j as Wl,u as g,x as r,k as J,y as Hl,a as l,v as h,d as f,t as d,w as c}from"../chunks/index.707bf1b6.js";import{T as Gn}from"../chunks/Tip.c2ecdbf4.js";import{C as $}from"../chunks/CodeBlock.54a9f38d.js";import{H as U}from"../chunks/Heading.342b1fa6.js";function Yl(I){let m,T=`Transformers Agents is an experimental API which is subject to change at any time. Results returned by the agents
can vary as the APIs or underlying models are prone to change.`;return{c(){m=i("p"),m.textContent=T},l(y){m=o(y,"P",{"data-svelte-h":!0}),r(m)!=="svelte-1fgfei3"&&(m.textContent=T)},m(y,M){l(y,m,M)},p:Zn,d(y){y&&n(m)}}}function Ll(I){let m,T=`StarCoder and OpenAssistant are free to use and perform admirably well on simple tasks. However, the checkpoints
don’t hold up when handling more complex prompts. If you’re facing such an issue, we recommend trying out the OpenAI
model which, while sadly not open-source, performs better at this given time.`;return{c(){m=i("p"),m.textContent=T},l(y){m=o(y,"P",{"data-svelte-h":!0}),r(m)!=="svelte-13io30c"&&(m.textContent=T)},m(y,M){l(y,m,M)},p:Zn,d(y){y&&n(m)}}}function ql(I){let m,T="This can be helpful when the model is unable to understand your request and mixes tools. An example would be:",y,M,C,j,_="Here, the model could interpret in two ways:",W,b,et="<li>Have the <code>text-to-image</code> generate a capybara swimming in the sea</li> <li>Or, have the <code>text-to-image</code> generate capybara, then use the <code>image-transformation</code> tool to have it swim in the sea</li>",k,v,tt="In case you would like to force the first scenario, you could do so by passing it the prompt as an argument:",B,x,H;return M=new $({props:{code:"YWdlbnQucnVuKCUyMkRyYXclMjBtZSUyMHRoZSUyMHBpY3R1cmUlMjBvZiUyMGElMjBjYXB5YmFyYSUyMHN3aW1taW5nJTIwaW4lMjB0aGUlMjBzZWElMjIp",highlighted:'agent.run(<span class="hljs-string">&quot;Draw me the picture of a capybara swimming in the sea&quot;</span>)',wrap:!1}}),x=new $({props:{code:"YWdlbnQucnVuKCUyMkRyYXclMjBtZSUyMGElMjBwaWN0dXJlJTIwb2YlMjB0aGUlMjAlNjBwcm9tcHQlNjAlMjIlMkMlMjBwcm9tcHQlM0QlMjJhJTIwY2FweWJhcmElMjBzd2ltbWluZyUyMGluJTIwdGhlJTIwc2VhJTIyKQ==",highlighted:'agent.run(<span class="hljs-string">&quot;Draw me a picture of the `prompt`&quot;</span>, prompt=<span class="hljs-string">&quot;a capybara swimming in the sea&quot;</span>)',wrap:!1}}),{c(){m=i("p"),m.textContent=T,y=s(),u(M.$$.fragment),C=s(),j=i("p"),j.textContent=_,W=s(),b=i("ul"),b.innerHTML=et,k=s(),v=i("p"),v.textContent=tt,B=s(),u(x.$$.fragment)},l(p){m=o(p,"P",{"data-svelte-h":!0}),r(m)!=="svelte-xtdcfc"&&(m.textContent=T),y=a(p),g(M.$$.fragment,p),C=a(p),j=o(p,"P",{"data-svelte-h":!0}),r(j)!=="svelte-1d3eg7h"&&(j.textContent=_),W=a(p),b=o(p,"UL",{"data-svelte-h":!0}),r(b)!=="svelte-6h7gti"&&(b.innerHTML=et),k=a(p),v=o(p,"P",{"data-svelte-h":!0}),r(v)!=="svelte-17vcsom"&&(v.textContent=tt),B=a(p),g(x.$$.fragment,p)},m(p,w){l(p,m,w),l(p,y,w),h(M,p,w),l(p,C,w),l(p,j,w),l(p,W,w),l(p,b,w),l(p,k,w),l(p,v,w),l(p,B,w),h(x,p,w),H=!0},p:Zn,i(p){H||(f(M.$$.fragment,p),f(x.$$.fragment,p),H=!0)},o(p){d(M.$$.fragment,p),d(x.$$.fragment,p),H=!1},d(p){p&&(n(m),n(y),n(C),n(j),n(W),n(b),n(k),n(v),n(B)),c(M,p),c(x,p)}}}function Rl(I){let m,T,y,M,C,j,_,W,b,et=`Transformers version v4.29.0, building on the concept of <em>tools</em> and <em>agents</em>. You can play with in
<a href="https://colab.research.google.com/drive/1c7MHD-T1forUPGcC_jlwsIptOzpG3hSj" rel="nofollow">this colab</a>.`,k,v,tt=`In short, it provides a natural language API on top of transformers: we define a set of curated tools and design an
agent to interpret natural language and to use these tools. It is extensible by design; we curated some relevant tools,
but we’ll show you how the system can be extended easily to use any tool developed by the community.`,B,x,H=`Let’s start with a few examples of what can be achieved with this new API. It is particularly powerful when it comes
to multimodal tasks, so let’s take it for a spin to generate images and read text out loud.`,p,w,st,Y,Hn='<thead><tr><th><strong>Input</strong></th> <th><strong>Output</strong></th></tr></thead> <tbody><tr><td><img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/beaver.png" width="200"/></td> <td>A beaver is swimming in the water</td></tr></tbody>',at,it,ot,L,rt,q,Yn='<thead><tr><th><strong>Input</strong></th> <th><strong>Output</strong></th></tr></thead> <tbody><tr><td>A beaver is swimming in the water</td> <td><audio controls=""><source src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/tts_example.wav" type="audio/wav"/> your browser does not support the audio element.</audio></td></tr></tbody>',pt,mt,ut,R,gt,A,Ln='<thead><tr><th><strong>Input</strong></th> <th><strong>Output</strong></th></tr></thead> <tbody><tr><td><img src="https://datasets-server.huggingface.co/assets/hf-internal-testing/example-documents/--/hf-internal-testing--example-documents/test/0/image/image.jpg" width="200"/></td> <td>ballroom foyer</td></tr></tbody>',ht,P,ft,Q,qn=`Before being able to use <code>agent.run</code>, you will need to instantiate an agent, which is a large language model (LLM).
We provide support for openAI models as well as opensource alternatives from BigCode and OpenAssistant. The openAI
models perform better (but require you to have an openAI API key, so cannot be used for free); Hugging Face is
providing free access to endpoints for BigCode and OpenAssistant models.`,dt,S,Rn="To start with, please install the <code>agents</code> extras in order to install all default dependencies.",ct,X,yt,E,An='To use openAI models, you instantiate an <a href="/docs/transformers/main/en/main_classes/agent#transformers.OpenAiAgent">OpenAiAgent</a> after installing the <code>openai</code> dependency:',wt,N,$t,z,Mt,V,Pn="To use BigCode or OpenAssistant, start by logging in to have access to the Inference API:",bt,F,vt,K,Qn="Then, instantiate the agent",xt,O,Tt,D,Sn=`This is using the inference API that Hugging Face provides for free at the moment. If you have your own inference
endpoint for this model (or another one) you can replace the URL above with your URL endpoint.`,Ct,G,jt,ee,Xn="You’re now good to go! Let’s dive into the two APIs that you now have at your disposal.",Ut,te,_t,ne,En='The single execution method is when using the <a href="/docs/transformers/main/en/main_classes/agent#transformers.Agent.run">run()</a> method of the agent:',Jt,le,Wt,se,Nn,kt,ae,zn=`It automatically selects the tool (or tools) appropriate for the task you want to perform and runs them appropriately. It
can perform one or several tasks in the same instruction (though the more complex your instruction, the more likely
the agent is to fail).`,Bt,ie,It,oe,Vn,Gt,Zt,Ht,re,Fn='Every <a href="/docs/transformers/main/en/main_classes/agent#transformers.Agent.run">run()</a> operation is independent, so you can run it several times in a row with different tasks.',Yt,pe,Kn=`Note that your <code>agent</code> is just a large-language model, so small variations in your prompt might yield completely
different results. It’s important to explain as clearly as possible the task you want to perform. We go more in-depth
on how to write good prompts <a href="custom_tools#writing-good-user-inputs">here</a>.`,Lt,me,On=`If you’d like to keep a state across executions or to pass non-text objects to the agent, you can do so by specifying
variables that you would like the agent to use. For example, you could generate the first image of rivers and lakes,
and ask the model to update that picture to add an island by doing the following:`,qt,ue,Rt,Z,At,ge,Pt,he,Dn='The agent also has a chat-based approach, using the <a href="/docs/transformers/main/en/main_classes/agent#transformers.Agent.chat">chat()</a> method:',Qt,fe,St,de,el,Xt,ce,Et,ye,tl,Nt,zt,Vt,we,nl=`This is an interesting approach when you want to keep the state across instructions. It’s better for experimentation,
but will tend to be much better at single instructions rather than complex instructions (which the <a href="/docs/transformers/main/en/main_classes/agent#transformers.Agent.run">run()</a>
method is better at handling).`,Ft,$e,ll="This method can also take arguments if you would like to pass non-text types or specific prompts.",Kt,Me,Ot,be,sl=`For demonstration purposes and so that it could be used with all setups, we had created remote executors for several
of the default tools the agent has access for the release. These are created using
<a href="https://huggingface.co/inference-endpoints" rel="nofollow">inference endpoints</a>.`,Dt,ve,al=`We have turned these off for now, but in order to see how to set up remote executors tools yourself,
we recommend reading the <a href="./custom_tools">custom tool guide</a>.`,en,xe,tn,De,il,nn,Te,ln,Ce,ol="The “agent” here is a large language model, and we’re prompting it so that it has access to a specific set of tools.",sn,je,rl=`LLMs are pretty good at generating small samples of code, so this API takes advantage of that by prompting the
LLM gives a small sample of code performing a task with a set of tools. This prompt is then completed by the
task you give your agent and the description of the tools you give it. This way it gets access to the doc of the
tools you are using, especially their expected inputs and outputs, and can generate the relevant code.`,an,Ue,on,_e,pl=`Tools are very simple: they’re a single function, with a name, and a description. We then use these tools’ descriptions
to prompt the agent. Through the prompt, we show the agent how it would leverage tools to perform what was
requested in the query.`,rn,Je,ml=`This is using brand-new tools and not pipelines, because the agent writes better code with very atomic tools.
Pipelines are more refactored and often combine several tasks in one. Tools are meant to be focused on
one very simple task only.`,pn,We,mn,ke,ul=`This code is then executed with our small Python interpreter on the set of inputs passed along with your tools.
We hear you screaming “Arbitrary code execution!” in the back, but let us explain why that is not the case.`,un,Be,gl=`The only functions that can be called are the tools you provided and the print function, so you’re already
limited in what can be executed. You should be safe if it’s limited to Hugging Face tools.`,gn,Ie,hl=`Then, we don’t allow any attribute lookup or imports (which shouldn’t be needed anyway for passing along
inputs/outputs to a small set of functions) so all the most obvious attacks (and you’d need to prompt the LLM
to output them anyway) shouldn’t be an issue. If you want to be on the super safe side, you can execute the
run() method with the additional argument return_code=True, in which case the agent will just return the code
to execute and you can decide whether to do it or not.`,hn,Ge,fl=`The execution will stop at any line trying to perform an illegal operation or if there is a regular Python error
with the code generated by the agent.`,fn,Ze,dn,He,dl=`We identify a set of tools that can empower such agents. Here is an updated list of the tools we have integrated
in <code>transformers</code>:`,cn,Ye,cl='<li><strong>Document question answering</strong>: given a document (such as a PDF) in image format, answer a question on this document (<a href="./model_doc/donut">Donut</a>)</li> <li><strong>Text question answering</strong>: given a long text and a question, answer the question in the text (<a href="./model_doc/flan-t5">Flan-T5</a>)</li> <li><strong>Unconditional image captioning</strong>: Caption the image! (<a href="./model_doc/blip">BLIP</a>)</li> <li><strong>Image question answering</strong>: given an image, answer a question on this image (<a href="./model_doc/vilt">VILT</a>)</li> <li><strong>Image segmentation</strong>: given an image and a prompt, output the segmentation mask of that prompt (<a href="./model_doc/clipseg">CLIPSeg</a>)</li> <li><strong>Speech to text</strong>: given an audio recording of a person talking, transcribe the speech into text (<a href="./model_doc/whisper">Whisper</a>)</li> <li><strong>Text to speech</strong>: convert text to speech (<a href="./model_doc/speecht5">SpeechT5</a>)</li> <li><strong>Zero-shot text classification</strong>: given a text and a list of labels, identify to which label the text corresponds the most (<a href="./model_doc/bart">BART</a>)</li> <li><strong>Text summarization</strong>: summarize a long text in one or a few sentences (<a href="./model_doc/bart">BART</a>)</li> <li><strong>Translation</strong>: translate the text into a given language (<a href="./model_doc/nllb">NLLB</a>)</li>',yn,Le,yl="These tools have an integration in transformers, and can be used manually as well, for example:",wn,qe,$n,Re,Mn,Ae,wl=`While we identify a curated set of tools, we strongly believe that the main value provided by this implementation is
the ability to quickly create and share custom tools.`,bn,Pe,$l=`By pushing the code of a tool to a Hugging Face Space or a model repository, you’re then able to leverage the tool
directly with the agent. We’ve added a few
<strong>transformers-agnostic</strong> tools to the <a href="https://huggingface.co/huggingface-tools" rel="nofollow"><code>huggingface-tools</code> organization</a>:`,vn,Qe,Ml="<li><strong>Text downloader</strong>: to download a text from a web URL</li> <li><strong>Text to image</strong>: generate an image according to a prompt, leveraging stable diffusion</li> <li><strong>Image transformation</strong>: modify an image given an initial image and a prompt, leveraging instruct pix2pix stable diffusion</li> <li><strong>Text to video</strong>: generate a small video according to a prompt, leveraging damo-vilab</li>",xn,Se,bl=`The text-to-image tool we have been using since the beginning is a remote tool that lives in
<a href="https://huggingface.co/spaces/huggingface-tools/text-to-image" rel="nofollow"><em>huggingface-tools/text-to-image</em></a>! We will
continue releasing such tools on this and other organizations, to further supercharge this implementation.`,Tn,Xe,vl=`The agents have by default access to tools that reside on <a href="https://huggingface.co/huggingface-tools" rel="nofollow"><code>huggingface-tools</code></a>.
We explain how to you can write and share your tools as well as leverage any custom tool that resides on the Hub in <a href="custom_tools">following guide</a>.`,Cn,Ee,jn,Ne,xl=`So far we have shown how to use the agents to perform actions for you. However, the agent is only generating code
that we then execute using a very restricted Python interpreter. In case you would like to use the code generated in
a different setting, the agent can be prompted to return the code, along with tool definition and accurate imports.`,Un,ze,Tl="For example, the following instruction",_n,Ve,Jn,Fe,Cl="returns the following code",Wn,Ke,kn,Oe,jl="that you can then modify and execute yourself.",Bn,nt,In;return C=new U({props:{title:"Transformers Agents",local:"transformers-agents",headingTag:"h1"}}),_=new Gn({props:{warning:!0,$$slots:{default:[Yl]},$$scope:{ctx:I}}}),w=new $({props:{code:"YWdlbnQucnVuKCUyMkNhcHRpb24lMjB0aGUlMjBmb2xsb3dpbmclMjBpbWFnZSUyMiUyQyUyMGltYWdlJTNEaW1hZ2Up",highlighted:'agent.run(<span class="hljs-string">&quot;Caption the following image&quot;</span>, image=image)',wrap:!1}}),L=new $({props:{code:"YWdlbnQucnVuKCUyMlJlYWQlMjB0aGUlMjBmb2xsb3dpbmclMjB0ZXh0JTIwb3V0JTIwbG91ZCUyMiUyQyUyMHRleHQlM0R0ZXh0KQ==",highlighted:'agent.run(<span class="hljs-string">&quot;Read the following text out loud&quot;</span>, text=text)',wrap:!1}}),R=new $({props:{code:"YWdlbnQucnVuKCUwQSUyMCUyMCUyMCUyMCUyMkluJTIwdGhlJTIwZm9sbG93aW5nJTIwJTYwZG9jdW1lbnQlNjAlMkMlMjB3aGVyZSUyMHdpbGwlMjB0aGUlMjBUUlJGJTIwU2NpZW50aWZpYyUyMEFkdmlzb3J5JTIwQ291bmNpbCUyME1lZXRpbmclMjB0YWtlJTIwcGxhY2UlM0YlMjIlMkMlMEElMjAlMjAlMjAlMjBkb2N1bWVudCUzRGRvY3VtZW50JTJDJTBBKQ==",highlighted:`agent.run(
    <span class="hljs-string">&quot;In the following \`document\`, where will the TRRF Scientific Advisory Council Meeting take place?&quot;</span>,
    document=document,
)`,wrap:!1}}),P=new U({props:{title:"Quickstart",local:"quickstart",headingTag:"h2"}}),X=new $({props:{code:"cGlwJTIwaW5zdGFsbCUyMHRyYW5zZm9ybWVycyU1QmFnZW50cyU1RA==",highlighted:"pip install transformers[agents]",wrap:!1}}),N=new $({props:{code:"cGlwJTIwaW5zdGFsbCUyMG9wZW5haQ==",highlighted:"pip install openai",wrap:!1}}),z=new $({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME9wZW5BaUFnZW50JTBBJTBBYWdlbnQlMjAlM0QlMjBPcGVuQWlBZ2VudChtb2RlbCUzRCUyMnRleHQtZGF2aW5jaS0wMDMlMjIlMkMlMjBhcGlfa2V5JTNEJTIyJTNDeW91cl9hcGlfa2V5JTNFJTIyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAiAgent

agent = OpenAiAgent(model=<span class="hljs-string">&quot;text-davinci-003&quot;</span>, api_key=<span class="hljs-string">&quot;&lt;your_api_key&gt;&quot;</span>)`,wrap:!1}}),F=new $({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMGxvZ2luJTBBJTBBbG9naW4oJTIyJTNDWU9VUl9UT0tFTiUzRSUyMik=",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> login

login(<span class="hljs-string">&quot;&lt;YOUR_TOKEN&gt;&quot;</span>)`,wrap:!1}}),O=new $({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEhmQWdlbnQlMEElMEElMjMlMjBTdGFyY29kZXIlMEFhZ2VudCUyMCUzRCUyMEhmQWdlbnQoJTIyaHR0cHMlM0ElMkYlMkZhcGktaW5mZXJlbmNlLmh1Z2dpbmdmYWNlLmNvJTJGbW9kZWxzJTJGYmlnY29kZSUyRnN0YXJjb2RlciUyMiklMEElMjMlMjBTdGFyY29kZXJCYXNlJTBBJTIzJTIwYWdlbnQlMjAlM0QlMjBIZkFnZW50KCUyMmh0dHBzJTNBJTJGJTJGYXBpLWluZmVyZW5jZS5odWdnaW5nZmFjZS5jbyUyRm1vZGVscyUyRmJpZ2NvZGUlMkZzdGFyY29kZXJiYXNlJTIyKSUwQSUyMyUyME9wZW5Bc3Npc3RhbnQlMEElMjMlMjBhZ2VudCUyMCUzRCUyMEhmQWdlbnQodXJsX2VuZHBvaW50JTNEJTIyaHR0cHMlM0ElMkYlMkZhcGktaW5mZXJlbmNlLmh1Z2dpbmdmYWNlLmNvJTJGbW9kZWxzJTJGT3BlbkFzc2lzdGFudCUyRm9hc3N0LXNmdC00LXB5dGhpYS0xMmItZXBvY2gtMy41JTIyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> HfAgent

<span class="hljs-comment"># Starcoder</span>
agent = HfAgent(<span class="hljs-string">&quot;https://api-inference.huggingface.co/models/bigcode/starcoder&quot;</span>)
<span class="hljs-comment"># StarcoderBase</span>
<span class="hljs-comment"># agent = HfAgent(&quot;https://api-inference.huggingface.co/models/bigcode/starcoderbase&quot;)</span>
<span class="hljs-comment"># OpenAssistant</span>
<span class="hljs-comment"># agent = HfAgent(url_endpoint=&quot;https://api-inference.huggingface.co/models/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5&quot;)</span>`,wrap:!1}}),G=new Gn({props:{$$slots:{default:[Ll]},$$scope:{ctx:I}}}),te=new U({props:{title:"Single execution (run)",local:"single-execution-run",headingTag:"h3"}}),le=new $({props:{code:"YWdlbnQucnVuKCUyMkRyYXclMjBtZSUyMGElMjBwaWN0dXJlJTIwb2YlMjByaXZlcnMlMjBhbmQlMjBsYWtlcy4lMjIp",highlighted:'agent.run(<span class="hljs-string">&quot;Draw me a picture of rivers and lakes.&quot;</span>)',wrap:!1}}),ie=new $({props:{code:"YWdlbnQucnVuKCUyMkRyYXclMjBtZSUyMGElMjBwaWN0dXJlJTIwb2YlMjB0aGUlMjBzZWElMjB0aGVuJTIwdHJhbnNmb3JtJTIwdGhlJTIwcGljdHVyZSUyMHRvJTIwYWRkJTIwYW4lMjBpc2xhbmQlMjIp",highlighted:'agent.run(<span class="hljs-string">&quot;Draw me a picture of the sea then transform the picture to add an island&quot;</span>)',wrap:!1}}),ue=new $({props:{code:"cGljdHVyZSUyMCUzRCUyMGFnZW50LnJ1biglMjJHZW5lcmF0ZSUyMGElMjBwaWN0dXJlJTIwb2YlMjByaXZlcnMlMjBhbmQlMjBsYWtlcy4lMjIpJTBBdXBkYXRlZF9waWN0dXJlJTIwJTNEJTIwYWdlbnQucnVuKCUyMlRyYW5zZm9ybSUyMHRoZSUyMGltYWdlJTIwaW4lMjAlNjBwaWN0dXJlJTYwJTIwdG8lMjBhZGQlMjBhbiUyMGlzbGFuZCUyMHRvJTIwaXQuJTIyJTJDJTIwcGljdHVyZSUzRHBpY3R1cmUp",highlighted:'picture = agent.run(<span class="hljs-string">&quot;Generate a picture of rivers and lakes.&quot;</span>)\nupdated_picture = agent.run(<span class="hljs-string">&quot;Transform the image in `picture` to add an island to it.&quot;</span>, picture=picture)',wrap:!1}}),Z=new Gn({props:{$$slots:{default:[ql]},$$scope:{ctx:I}}}),ge=new U({props:{title:"Chat-based execution (chat)",local:"chat-based-execution-chat",headingTag:"h3"}}),fe=new $({props:{code:"YWdlbnQuY2hhdCglMjJHZW5lcmF0ZSUyMGElMjBwaWN0dXJlJTIwb2YlMjByaXZlcnMlMjBhbmQlMjBsYWtlcyUyMik=",highlighted:'agent.chat(<span class="hljs-string">&quot;Generate a picture of rivers and lakes&quot;</span>)',wrap:!1}}),ce=new $({props:{code:"YWdlbnQuY2hhdCglMjJUcmFuc2Zvcm0lMjB0aGUlMjBwaWN0dXJlJTIwc28lMjB0aGF0JTIwdGhlcmUlMjBpcyUyMGElMjByb2NrJTIwaW4lMjB0aGVyZSUyMik=",highlighted:'agent.chat(<span class="hljs-string">&quot;Transform the picture so that there is a rock in there&quot;</span>)',wrap:!1}}),Me=new U({props:{title:"⚠️ Remote execution",local:"-remote-execution",headingTag:"h3"}}),xe=new U({props:{title:"What’s happening here? What are tools, and what are agents?",local:"whats-happening-here-what-are-tools-and-what-are-agents",headingTag:"h3"}}),Te=new U({props:{title:"Agents",local:"agents",headingTag:"h4"}}),Ue=new U({props:{title:"Tools",local:"tools",headingTag:"h4"}}),We=new U({props:{title:"Code-execution?!",local:"code-execution",headingTag:"h4"}}),Ze=new U({props:{title:"A curated set of tools",local:"a-curated-set-of-tools",headingTag:"h3"}}),qe=new $({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMGxvYWRfdG9vbCUwQSUwQXRvb2wlMjAlM0QlMjBsb2FkX3Rvb2woJTIydGV4dC10by1zcGVlY2glMjIpJTBBYXVkaW8lMjAlM0QlMjB0b29sKCUyMlRoaXMlMjBpcyUyMGElMjB0ZXh0JTIwdG8lMjBzcGVlY2glMjB0b29sJTIyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> load_tool

tool = load_tool(<span class="hljs-string">&quot;text-to-speech&quot;</span>)
audio = tool(<span class="hljs-string">&quot;This is a text to speech tool&quot;</span>)`,wrap:!1}}),Re=new U({props:{title:"Custom tools",local:"custom-tools",headingTag:"h3"}}),Ee=new U({props:{title:"Code generation",local:"code-generation",headingTag:"h3"}}),Ve=new $({props:{code:"YWdlbnQucnVuKCUyMkRyYXclMjBtZSUyMGElMjBwaWN0dXJlJTIwb2YlMjByaXZlcnMlMjBhbmQlMjBsYWtlcyUyMiUyQyUyMHJldHVybl9jb2RlJTNEVHJ1ZSk=",highlighted:'agent.run(<span class="hljs-string">&quot;Draw me a picture of rivers and lakes&quot;</span>, return_code=<span class="hljs-literal">True</span>)',wrap:!1}}),Ke=new $({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMGxvYWRfdG9vbCUwQSUwQWltYWdlX2dlbmVyYXRvciUyMCUzRCUyMGxvYWRfdG9vbCglMjJodWdnaW5nZmFjZS10b29scyUyRnRleHQtdG8taW1hZ2UlMjIpJTBBJTBBaW1hZ2UlMjAlM0QlMjBpbWFnZV9nZW5lcmF0b3IocHJvbXB0JTNEJTIycml2ZXJzJTIwYW5kJTIwbGFrZXMlMjIp",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> load_tool

image_generator = load_tool(<span class="hljs-string">&quot;huggingface-tools/text-to-image&quot;</span>)

image = image_generator(prompt=<span class="hljs-string">&quot;rivers and lakes&quot;</span>)`,wrap:!1}}),{c(){m=i("meta"),T=s(),y=i("p"),M=s(),u(C.$$.fragment),j=s(),u(_.$$.fragment),W=s(),b=i("p"),b.innerHTML=et,k=s(),v=i("p"),v.textContent=tt,B=s(),x=i("p"),x.textContent=H,p=s(),u(w.$$.fragment),st=s(),Y=i("table"),Y.innerHTML=Hn,at=s(),it=i("hr"),ot=s(),u(L.$$.fragment),rt=s(),q=i("table"),q.innerHTML=Yn,pt=s(),mt=i("hr"),ut=s(),u(R.$$.fragment),gt=s(),A=i("table"),A.innerHTML=Ln,ht=s(),u(P.$$.fragment),ft=s(),Q=i("p"),Q.innerHTML=qn,dt=s(),S=i("p"),S.innerHTML=Rn,ct=s(),u(X.$$.fragment),yt=s(),E=i("p"),E.innerHTML=An,wt=s(),u(N.$$.fragment),$t=s(),u(z.$$.fragment),Mt=s(),V=i("p"),V.textContent=Pn,bt=s(),u(F.$$.fragment),vt=s(),K=i("p"),K.textContent=Qn,xt=s(),u(O.$$.fragment),Tt=s(),D=i("p"),D.textContent=Sn,Ct=s(),u(G.$$.fragment),jt=s(),ee=i("p"),ee.textContent=Xn,Ut=s(),u(te.$$.fragment),_t=s(),ne=i("p"),ne.innerHTML=En,Jt=s(),u(le.$$.fragment),Wt=s(),se=i("img"),kt=s(),ae=i("p"),ae.textContent=zn,Bt=s(),u(ie.$$.fragment),It=s(),oe=i("img"),Gt=s(),Zt=i("br"),Ht=s(),re=i("p"),re.innerHTML=Fn,Yt=s(),pe=i("p"),pe.innerHTML=Kn,Lt=s(),me=i("p"),me.textContent=On,qt=s(),u(ue.$$.fragment),Rt=s(),u(Z.$$.fragment),At=s(),u(ge.$$.fragment),Pt=s(),he=i("p"),he.innerHTML=Dn,Qt=s(),u(fe.$$.fragment),St=s(),de=i("img"),Xt=s(),u(ce.$$.fragment),Et=s(),ye=i("img"),Nt=s(),zt=i("br"),Vt=s(),we=i("p"),we.innerHTML=nl,Ft=s(),$e=i("p"),$e.textContent=ll,Kt=s(),u(Me.$$.fragment),Ot=s(),be=i("p"),be.innerHTML=sl,Dt=s(),ve=i("p"),ve.innerHTML=al,en=s(),u(xe.$$.fragment),tn=s(),De=i("img"),nn=s(),u(Te.$$.fragment),ln=s(),Ce=i("p"),Ce.textContent=ol,sn=s(),je=i("p"),je.textContent=rl,an=s(),u(Ue.$$.fragment),on=s(),_e=i("p"),_e.textContent=pl,rn=s(),Je=i("p"),Je.textContent=ml,pn=s(),u(We.$$.fragment),mn=s(),ke=i("p"),ke.textContent=ul,un=s(),Be=i("p"),Be.textContent=gl,gn=s(),Ie=i("p"),Ie.textContent=hl,hn=s(),Ge=i("p"),Ge.textContent=fl,fn=s(),u(Ze.$$.fragment),dn=s(),He=i("p"),He.innerHTML=dl,cn=s(),Ye=i("ul"),Ye.innerHTML=cl,yn=s(),Le=i("p"),Le.textContent=yl,wn=s(),u(qe.$$.fragment),$n=s(),u(Re.$$.fragment),Mn=s(),Ae=i("p"),Ae.textContent=wl,bn=s(),Pe=i("p"),Pe.innerHTML=$l,vn=s(),Qe=i("ul"),Qe.innerHTML=Ml,xn=s(),Se=i("p"),Se.innerHTML=bl,Tn=s(),Xe=i("p"),Xe.innerHTML=vl,Cn=s(),u(Ee.$$.fragment),jn=s(),Ne=i("p"),Ne.textContent=xl,Un=s(),ze=i("p"),ze.textContent=Tl,_n=s(),u(Ve.$$.fragment),Jn=s(),Fe=i("p"),Fe.textContent=Cl,Wn=s(),u(Ke.$$.fragment),kn=s(),Oe=i("p"),Oe.textContent=jl,Bn=s(),nt=i("p"),this.h()},l(e){const t=Zl("svelte-u9bgzb",document.head);m=o(t,"META",{name:!0,content:!0}),t.forEach(n),T=a(e),y=o(e,"P",{}),Wl(y).forEach(n),M=a(e),g(C.$$.fragment,e),j=a(e),g(_.$$.fragment,e),W=a(e),b=o(e,"P",{"data-svelte-h":!0}),r(b)!=="svelte-hggcnq"&&(b.innerHTML=et),k=a(e),v=o(e,"P",{"data-svelte-h":!0}),r(v)!=="svelte-g8wjpq"&&(v.textContent=tt),B=a(e),x=o(e,"P",{"data-svelte-h":!0}),r(x)!=="svelte-ijizhx"&&(x.textContent=H),p=a(e),g(w.$$.fragment,e),st=a(e),Y=o(e,"TABLE",{"data-svelte-h":!0}),r(Y)!=="svelte-gt1bz9"&&(Y.innerHTML=Hn),at=a(e),it=o(e,"HR",{}),ot=a(e),g(L.$$.fragment,e),rt=a(e),q=o(e,"TABLE",{"data-svelte-h":!0}),r(q)!=="svelte-1a2vad0"&&(q.innerHTML=Yn),pt=a(e),mt=o(e,"HR",{}),ut=a(e),g(R.$$.fragment,e),gt=a(e),A=o(e,"TABLE",{"data-svelte-h":!0}),r(A)!=="svelte-1iw5xoi"&&(A.innerHTML=Ln),ht=a(e),g(P.$$.fragment,e),ft=a(e),Q=o(e,"P",{"data-svelte-h":!0}),r(Q)!=="svelte-1dmdrm1"&&(Q.innerHTML=qn),dt=a(e),S=o(e,"P",{"data-svelte-h":!0}),r(S)!=="svelte-1dv7sdf"&&(S.innerHTML=Rn),ct=a(e),g(X.$$.fragment,e),yt=a(e),E=o(e,"P",{"data-svelte-h":!0}),r(E)!=="svelte-1enb6au"&&(E.innerHTML=An),wt=a(e),g(N.$$.fragment,e),$t=a(e),g(z.$$.fragment,e),Mt=a(e),V=o(e,"P",{"data-svelte-h":!0}),r(V)!=="svelte-1jiytcn"&&(V.textContent=Pn),bt=a(e),g(F.$$.fragment,e),vt=a(e),K=o(e,"P",{"data-svelte-h":!0}),r(K)!=="svelte-ezmlbn"&&(K.textContent=Qn),xt=a(e),g(O.$$.fragment,e),Tt=a(e),D=o(e,"P",{"data-svelte-h":!0}),r(D)!=="svelte-4zoxn5"&&(D.textContent=Sn),Ct=a(e),g(G.$$.fragment,e),jt=a(e),ee=o(e,"P",{"data-svelte-h":!0}),r(ee)!=="svelte-1pylma2"&&(ee.textContent=Xn),Ut=a(e),g(te.$$.fragment,e),_t=a(e),ne=o(e,"P",{"data-svelte-h":!0}),r(ne)!=="svelte-ayp7sx"&&(ne.innerHTML=En),Jt=a(e),g(le.$$.fragment,e),Wt=a(e),se=o(e,"IMG",{src:!0,width:!0}),kt=a(e),ae=o(e,"P",{"data-svelte-h":!0}),r(ae)!=="svelte-aarw7i"&&(ae.textContent=zn),Bt=a(e),g(ie.$$.fragment,e),It=a(e),oe=o(e,"IMG",{src:!0,width:!0}),Gt=a(e),Zt=o(e,"BR",{}),Ht=a(e),re=o(e,"P",{"data-svelte-h":!0}),r(re)!=="svelte-1qqy3ls"&&(re.innerHTML=Fn),Yt=a(e),pe=o(e,"P",{"data-svelte-h":!0}),r(pe)!=="svelte-1kxdglx"&&(pe.innerHTML=Kn),Lt=a(e),me=o(e,"P",{"data-svelte-h":!0}),r(me)!=="svelte-pifkum"&&(me.textContent=On),qt=a(e),g(ue.$$.fragment,e),Rt=a(e),g(Z.$$.fragment,e),At=a(e),g(ge.$$.fragment,e),Pt=a(e),he=o(e,"P",{"data-svelte-h":!0}),r(he)!=="svelte-j4841w"&&(he.innerHTML=Dn),Qt=a(e),g(fe.$$.fragment,e),St=a(e),de=o(e,"IMG",{src:!0,width:!0}),Xt=a(e),g(ce.$$.fragment,e),Et=a(e),ye=o(e,"IMG",{src:!0,width:!0}),Nt=a(e),zt=o(e,"BR",{}),Vt=a(e),we=o(e,"P",{"data-svelte-h":!0}),r(we)!=="svelte-bhxtzt"&&(we.innerHTML=nl),Ft=a(e),$e=o(e,"P",{"data-svelte-h":!0}),r($e)!=="svelte-16wygo5"&&($e.textContent=ll),Kt=a(e),g(Me.$$.fragment,e),Ot=a(e),be=o(e,"P",{"data-svelte-h":!0}),r(be)!=="svelte-1y37z6"&&(be.innerHTML=sl),Dt=a(e),ve=o(e,"P",{"data-svelte-h":!0}),r(ve)!=="svelte-h6dg90"&&(ve.innerHTML=al),en=a(e),g(xe.$$.fragment,e),tn=a(e),De=o(e,"IMG",{src:!0}),nn=a(e),g(Te.$$.fragment,e),ln=a(e),Ce=o(e,"P",{"data-svelte-h":!0}),r(Ce)!=="svelte-1h1hsmq"&&(Ce.textContent=ol),sn=a(e),je=o(e,"P",{"data-svelte-h":!0}),r(je)!=="svelte-1yih65e"&&(je.textContent=rl),an=a(e),g(Ue.$$.fragment,e),on=a(e),_e=o(e,"P",{"data-svelte-h":!0}),r(_e)!=="svelte-1pl6quz"&&(_e.textContent=pl),rn=a(e),Je=o(e,"P",{"data-svelte-h":!0}),r(Je)!=="svelte-owbr46"&&(Je.textContent=ml),pn=a(e),g(We.$$.fragment,e),mn=a(e),ke=o(e,"P",{"data-svelte-h":!0}),r(ke)!=="svelte-17ipo1r"&&(ke.textContent=ul),un=a(e),Be=o(e,"P",{"data-svelte-h":!0}),r(Be)!=="svelte-or0pg0"&&(Be.textContent=gl),gn=a(e),Ie=o(e,"P",{"data-svelte-h":!0}),r(Ie)!=="svelte-fb990x"&&(Ie.textContent=hl),hn=a(e),Ge=o(e,"P",{"data-svelte-h":!0}),r(Ge)!=="svelte-1ri56my"&&(Ge.textContent=fl),fn=a(e),g(Ze.$$.fragment,e),dn=a(e),He=o(e,"P",{"data-svelte-h":!0}),r(He)!=="svelte-lbnuw"&&(He.innerHTML=dl),cn=a(e),Ye=o(e,"UL",{"data-svelte-h":!0}),r(Ye)!=="svelte-5hcxax"&&(Ye.innerHTML=cl),yn=a(e),Le=o(e,"P",{"data-svelte-h":!0}),r(Le)!=="svelte-u6begh"&&(Le.textContent=yl),wn=a(e),g(qe.$$.fragment,e),$n=a(e),g(Re.$$.fragment,e),Mn=a(e),Ae=o(e,"P",{"data-svelte-h":!0}),r(Ae)!=="svelte-1qgu66u"&&(Ae.textContent=wl),bn=a(e),Pe=o(e,"P",{"data-svelte-h":!0}),r(Pe)!=="svelte-32uplk"&&(Pe.innerHTML=$l),vn=a(e),Qe=o(e,"UL",{"data-svelte-h":!0}),r(Qe)!=="svelte-18r1pun"&&(Qe.innerHTML=Ml),xn=a(e),Se=o(e,"P",{"data-svelte-h":!0}),r(Se)!=="svelte-np3cvk"&&(Se.innerHTML=bl),Tn=a(e),Xe=o(e,"P",{"data-svelte-h":!0}),r(Xe)!=="svelte-10s0ieo"&&(Xe.innerHTML=vl),Cn=a(e),g(Ee.$$.fragment,e),jn=a(e),Ne=o(e,"P",{"data-svelte-h":!0}),r(Ne)!=="svelte-er9qni"&&(Ne.textContent=xl),Un=a(e),ze=o(e,"P",{"data-svelte-h":!0}),r(ze)!=="svelte-16j3iq1"&&(ze.textContent=Tl),_n=a(e),g(Ve.$$.fragment,e),Jn=a(e),Fe=o(e,"P",{"data-svelte-h":!0}),r(Fe)!=="svelte-pibxgg"&&(Fe.textContent=Cl),Wn=a(e),g(Ke.$$.fragment,e),kn=a(e),Oe=o(e,"P",{"data-svelte-h":!0}),r(Oe)!=="svelte-rbbu3k"&&(Oe.textContent=jl),Bn=a(e),nt=o(e,"P",{}),Wl(nt).forEach(n),this.h()},h(){J(m,"name","hf:doc:metadata"),J(m,"content",Al),lt(se.src,Nn="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/rivers_and_lakes.png")||J(se,"src",Nn),J(se,"width","200"),lt(oe.src,Vn="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/sea_and_island.png")||J(oe,"src",Vn),J(oe,"width","200"),lt(de.src,el="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/rivers_and_lakes.png")||J(de,"src",el),J(de,"width","200"),lt(ye.src,tl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/rivers_and_lakes_and_beaver.png")||J(ye,"src",tl),J(ye,"width","200"),lt(De.src,il="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/diagram.png")||J(De,"src",il)},m(e,t){Hl(document.head,m),l(e,T,t),l(e,y,t),l(e,M,t),h(C,e,t),l(e,j,t),h(_,e,t),l(e,W,t),l(e,b,t),l(e,k,t),l(e,v,t),l(e,B,t),l(e,x,t),l(e,p,t),h(w,e,t),l(e,st,t),l(e,Y,t),l(e,at,t),l(e,it,t),l(e,ot,t),h(L,e,t),l(e,rt,t),l(e,q,t),l(e,pt,t),l(e,mt,t),l(e,ut,t),h(R,e,t),l(e,gt,t),l(e,A,t),l(e,ht,t),h(P,e,t),l(e,ft,t),l(e,Q,t),l(e,dt,t),l(e,S,t),l(e,ct,t),h(X,e,t),l(e,yt,t),l(e,E,t),l(e,wt,t),h(N,e,t),l(e,$t,t),h(z,e,t),l(e,Mt,t),l(e,V,t),l(e,bt,t),h(F,e,t),l(e,vt,t),l(e,K,t),l(e,xt,t),h(O,e,t),l(e,Tt,t),l(e,D,t),l(e,Ct,t),h(G,e,t),l(e,jt,t),l(e,ee,t),l(e,Ut,t),h(te,e,t),l(e,_t,t),l(e,ne,t),l(e,Jt,t),h(le,e,t),l(e,Wt,t),l(e,se,t),l(e,kt,t),l(e,ae,t),l(e,Bt,t),h(ie,e,t),l(e,It,t),l(e,oe,t),l(e,Gt,t),l(e,Zt,t),l(e,Ht,t),l(e,re,t),l(e,Yt,t),l(e,pe,t),l(e,Lt,t),l(e,me,t),l(e,qt,t),h(ue,e,t),l(e,Rt,t),h(Z,e,t),l(e,At,t),h(ge,e,t),l(e,Pt,t),l(e,he,t),l(e,Qt,t),h(fe,e,t),l(e,St,t),l(e,de,t),l(e,Xt,t),h(ce,e,t),l(e,Et,t),l(e,ye,t),l(e,Nt,t),l(e,zt,t),l(e,Vt,t),l(e,we,t),l(e,Ft,t),l(e,$e,t),l(e,Kt,t),h(Me,e,t),l(e,Ot,t),l(e,be,t),l(e,Dt,t),l(e,ve,t),l(e,en,t),h(xe,e,t),l(e,tn,t),l(e,De,t),l(e,nn,t),h(Te,e,t),l(e,ln,t),l(e,Ce,t),l(e,sn,t),l(e,je,t),l(e,an,t),h(Ue,e,t),l(e,on,t),l(e,_e,t),l(e,rn,t),l(e,Je,t),l(e,pn,t),h(We,e,t),l(e,mn,t),l(e,ke,t),l(e,un,t),l(e,Be,t),l(e,gn,t),l(e,Ie,t),l(e,hn,t),l(e,Ge,t),l(e,fn,t),h(Ze,e,t),l(e,dn,t),l(e,He,t),l(e,cn,t),l(e,Ye,t),l(e,yn,t),l(e,Le,t),l(e,wn,t),h(qe,e,t),l(e,$n,t),h(Re,e,t),l(e,Mn,t),l(e,Ae,t),l(e,bn,t),l(e,Pe,t),l(e,vn,t),l(e,Qe,t),l(e,xn,t),l(e,Se,t),l(e,Tn,t),l(e,Xe,t),l(e,Cn,t),h(Ee,e,t),l(e,jn,t),l(e,Ne,t),l(e,Un,t),l(e,ze,t),l(e,_n,t),h(Ve,e,t),l(e,Jn,t),l(e,Fe,t),l(e,Wn,t),h(Ke,e,t),l(e,kn,t),l(e,Oe,t),l(e,Bn,t),l(e,nt,t),In=!0},p(e,[t]){const Ul={};t&2&&(Ul.$$scope={dirty:t,ctx:e}),_.$set(Ul);const _l={};t&2&&(_l.$$scope={dirty:t,ctx:e}),G.$set(_l);const Jl={};t&2&&(Jl.$$scope={dirty:t,ctx:e}),Z.$set(Jl)},i(e){In||(f(C.$$.fragment,e),f(_.$$.fragment,e),f(w.$$.fragment,e),f(L.$$.fragment,e),f(R.$$.fragment,e),f(P.$$.fragment,e),f(X.$$.fragment,e),f(N.$$.fragment,e),f(z.$$.fragment,e),f(F.$$.fragment,e),f(O.$$.fragment,e),f(G.$$.fragment,e),f(te.$$.fragment,e),f(le.$$.fragment,e),f(ie.$$.fragment,e),f(ue.$$.fragment,e),f(Z.$$.fragment,e),f(ge.$$.fragment,e),f(fe.$$.fragment,e),f(ce.$$.fragment,e),f(Me.$$.fragment,e),f(xe.$$.fragment,e),f(Te.$$.fragment,e),f(Ue.$$.fragment,e),f(We.$$.fragment,e),f(Ze.$$.fragment,e),f(qe.$$.fragment,e),f(Re.$$.fragment,e),f(Ee.$$.fragment,e),f(Ve.$$.fragment,e),f(Ke.$$.fragment,e),In=!0)},o(e){d(C.$$.fragment,e),d(_.$$.fragment,e),d(w.$$.fragment,e),d(L.$$.fragment,e),d(R.$$.fragment,e),d(P.$$.fragment,e),d(X.$$.fragment,e),d(N.$$.fragment,e),d(z.$$.fragment,e),d(F.$$.fragment,e),d(O.$$.fragment,e),d(G.$$.fragment,e),d(te.$$.fragment,e),d(le.$$.fragment,e),d(ie.$$.fragment,e),d(ue.$$.fragment,e),d(Z.$$.fragment,e),d(ge.$$.fragment,e),d(fe.$$.fragment,e),d(ce.$$.fragment,e),d(Me.$$.fragment,e),d(xe.$$.fragment,e),d(Te.$$.fragment,e),d(Ue.$$.fragment,e),d(We.$$.fragment,e),d(Ze.$$.fragment,e),d(qe.$$.fragment,e),d(Re.$$.fragment,e),d(Ee.$$.fragment,e),d(Ve.$$.fragment,e),d(Ke.$$.fragment,e),In=!1},d(e){e&&(n(T),n(y),n(M),n(j),n(W),n(b),n(k),n(v),n(B),n(x),n(p),n(st),n(Y),n(at),n(it),n(ot),n(rt),n(q),n(pt),n(mt),n(ut),n(gt),n(A),n(ht),n(ft),n(Q),n(dt),n(S),n(ct),n(yt),n(E),n(wt),n($t),n(Mt),n(V),n(bt),n(vt),n(K),n(xt),n(Tt),n(D),n(Ct),n(jt),n(ee),n(Ut),n(_t),n(ne),n(Jt),n(Wt),n(se),n(kt),n(ae),n(Bt),n(It),n(oe),n(Gt),n(Zt),n(Ht),n(re),n(Yt),n(pe),n(Lt),n(me),n(qt),n(Rt),n(At),n(Pt),n(he),n(Qt),n(St),n(de),n(Xt),n(Et),n(ye),n(Nt),n(zt),n(Vt),n(we),n(Ft),n($e),n(Kt),n(Ot),n(be),n(Dt),n(ve),n(en),n(tn),n(De),n(nn),n(ln),n(Ce),n(sn),n(je),n(an),n(on),n(_e),n(rn),n(Je),n(pn),n(mn),n(ke),n(un),n(Be),n(gn),n(Ie),n(hn),n(Ge),n(fn),n(dn),n(He),n(cn),n(Ye),n(yn),n(Le),n(wn),n($n),n(Mn),n(Ae),n(bn),n(Pe),n(vn),n(Qe),n(xn),n(Se),n(Tn),n(Xe),n(Cn),n(jn),n(Ne),n(Un),n(ze),n(_n),n(Jn),n(Fe),n(Wn),n(kn),n(Oe),n(Bn),n(nt)),n(m),c(C,e),c(_,e),c(w,e),c(L,e),c(R,e),c(P,e),c(X,e),c(N,e),c(z,e),c(F,e),c(O,e),c(G,e),c(te,e),c(le,e),c(ie,e),c(ue,e),c(Z,e),c(ge,e),c(fe,e),c(ce,e),c(Me,e),c(xe,e),c(Te,e),c(Ue,e),c(We,e),c(Ze,e),c(qe,e),c(Re,e),c(Ee,e),c(Ve,e),c(Ke,e)}}}const Al='{"title":"Transformers Agents","local":"transformers-agents","sections":[{"title":"Quickstart","local":"quickstart","sections":[{"title":"Single execution (run)","local":"single-execution-run","sections":[],"depth":3},{"title":"Chat-based execution (chat)","local":"chat-based-execution-chat","sections":[],"depth":3},{"title":"⚠️ Remote execution","local":"-remote-execution","sections":[],"depth":3},{"title":"What’s happening here? What are tools, and what are agents?","local":"whats-happening-here-what-are-tools-and-what-are-agents","sections":[{"title":"Agents","local":"agents","sections":[],"depth":4},{"title":"Tools","local":"tools","sections":[],"depth":4},{"title":"Code-execution?!","local":"code-execution","sections":[],"depth":4}],"depth":3},{"title":"A curated set of tools","local":"a-curated-set-of-tools","sections":[],"depth":3},{"title":"Custom tools","local":"custom-tools","sections":[],"depth":3},{"title":"Code generation","local":"code-generation","sections":[],"depth":3}],"depth":2}],"depth":1}';function Pl(I){return Bl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zl extends Il{constructor(m){super(),Gl(this,m,Pl,Rl,kl,{})}}export{zl as component};