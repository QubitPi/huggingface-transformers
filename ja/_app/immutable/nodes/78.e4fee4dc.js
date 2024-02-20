import{s as jo,o as Fo,n as N}from"../chunks/scheduler.9bc65507.js";import{S as xo,i as Jo,g as d,s as a,r as T,A as zo,h as c,f as i,c as r,j as I,u as y,x as f,k as Z,y as s,a as m,v as k,d as M,t as w,w as C}from"../chunks/index.707bf1b6.js";import{T as he}from"../chunks/Tip.c2ecdbf4.js";import{D as q}from"../chunks/Docstring.17db21ae.js";import{C as ze}from"../chunks/CodeBlock.54a9f38d.js";import{F as Uo,M as $o}from"../chunks/Markdown.8ab98a13.js";import{E as xe}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Je}from"../chunks/Heading.342b1fa6.js";function Wo($){let e,h=`この実装はRoBERTaと同じです。使用例については<a href="roberta">RoBERTaのドキュメント</a>も参照してください。
入力と出力に関する情報として。`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-14ytd2m"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function No($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMENhbWVtYmVydENvbmZpZyUyQyUyMENhbWVtYmVydE1vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMENhbWVtYmVydCUyMGFsbWFuYWNoJTJGY2FtZW1iZXJ0LWJhc2UlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwQ2FtZW1iZXJ0Q29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGFsbWFuYWNoJTJGY2FtZW1iZXJ0LWJhc2UlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMENhbWVtYmVydE1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertConfig, CamembertModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Camembert almanach/camembert-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CamembertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the almanach/camembert-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function Io($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function Zo($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBDYW1lbWJlcnRNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxtYW5hY2glMkZjYW1lbWJlcnQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMENhbWVtYmVydE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJhbG1hbmFjaCUyRmNhbWVtYmVydC1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CamembertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertModel.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function qo($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function Lo($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBDYW1lbWJlcnRGb3JDYXVzYWxMTSUyQyUyMEF1dG9Db25maWclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFsbWFuYWNoJTJGY2FtZW1iZXJ0LWJhc2UlMjIpJTBBY29uZmlnJTIwJTNEJTIwQXV0b0NvbmZpZy5mcm9tX3ByZXRyYWluZWQoJTIyYWxtYW5hY2glMkZjYW1lbWJlcnQtYmFzZSUyMiklMEFjb25maWcuaXNfZGVjb2RlciUyMCUzRCUyMFRydWUlMEFtb2RlbCUyMCUzRCUyMENhbWVtYmVydEZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJhbG1hbmFjaCUyRmNhbWVtYmVydC1iYXNlJTIyJTJDJTIwY29uZmlnJTNEY29uZmlnKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBcHJlZGljdGlvbl9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CamembertForCausalLM, AutoConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForCausalLM.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function Ho($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function Go($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBDYW1lbWJlcnRGb3JNYXNrZWRMTSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxtYW5hY2glMkZjYW1lbWJlcnQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMENhbWVtYmVydEZvck1hc2tlZExNLmZyb21fcHJldHJhaW5lZCglMjJhbG1hbmFjaCUyRmNhbWVtYmVydC1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjBGcmFuY2UlMjBpcyUyMCUzQ21hc2slM0UuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQSUyMyUyMHJldHJpZXZlJTIwaW5kZXglMjBvZiUyMCUzQ21hc2slM0UlMEFtYXNrX3Rva2VuX2luZGV4JTIwJTNEJTIwKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCklNUIwJTVELm5vbnplcm8oYXNfdHVwbGUlM0RUcnVlKSU1QjAlNUQlMEElMEFwcmVkaWN0ZWRfdG9rZW5faWQlMjAlM0QlMjBsb2dpdHMlNUIwJTJDJTIwbWFza190b2tlbl9pbmRleCU1RC5hcmdtYXgoYXhpcyUzRC0xKSUwQXRva2VuaXplci5kZWNvZGUocHJlZGljdGVkX3Rva2VuX2lkKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjBGcmFuY2UlMjBpcyUyMFBhcmlzLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTBBJTIzJTIwbWFzayUyMGxhYmVscyUyMG9mJTIwbm9uLSUzQ21hc2slM0UlMjB0b2tlbnMlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC53aGVyZShpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQlMkMlMjBsYWJlbHMlMkMlMjAtMTAwKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscyklMEFyb3VuZChvdXRwdXRzLmxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CamembertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function Ro($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function Bo($){let e,h="Example of single-label classification:",t,o,b;return o=new ze({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMENhbWVtYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJjYXJkaWZmbmxwJTJGdHdpdHRlci1yb2JlcnRhLWJhc2UtZW1vdGlvbiUyMiklMEFtb2RlbCUyMCUzRCUyMENhbWVtYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmNhcmRpZmZubHAlMkZ0d2l0dGVyLXJvYmVydGEtYmFzZS1lbW90aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoKS5pdGVtKCklMEFtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfY2xhc3NfaWQlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBDYW1lbWJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJjYXJkaWZmbmxwJTJGdHdpdHRlci1yb2JlcnRhLWJhc2UtZW1vdGlvbiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CamembertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-ykxpe4"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function Vo($){let e,h="Example of multi-label classification:",t,o,b;return o=new ze({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMENhbWVtYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJjYXJkaWZmbmxwJTJGdHdpdHRlci1yb2JlcnRhLWJhc2UtZW1vdGlvbiUyMiklMEFtb2RlbCUyMCUzRCUyMENhbWVtYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmNhcmRpZmZubHAlMkZ0d2l0dGVyLXJvYmVydGEtYmFzZS1lbW90aW9uJTIyJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkcyUyMCUzRCUyMHRvcmNoLmFyYW5nZSgwJTJDJTIwbG9naXRzLnNoYXBlJTVCLTElNUQpJTVCdG9yY2guc2lnbW9pZChsb2dpdHMpLnNxdWVlemUoZGltJTNEMCklMjAlM0UlMjAwLjUlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBDYW1lbWJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJjYXJkaWZmbmxwJTJGdHdpdHRlci1yb2JlcnRhLWJhc2UtZW1vdGlvbiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CamembertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1l8e32d"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function Xo($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function Eo($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBDYW1lbWJlcnRGb3JNdWx0aXBsZUNob2ljZSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxtYW5hY2glMkZjYW1lbWJlcnQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMENhbWVtYmVydEZvck11bHRpcGxlQ2hvaWNlLmZyb21fcHJldHJhaW5lZCglMjJhbG1hbmFjaCUyRmNhbWVtYmVydC1iYXNlJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMkluJTIwSXRhbHklMkMlMjBwaXp6YSUyMHNlcnZlZCUyMGluJTIwZm9ybWFsJTIwc2V0dGluZ3MlMkMlMjBzdWNoJTIwYXMlMjBhdCUyMGElMjByZXN0YXVyYW50JTJDJTIwaXMlMjBwcmVzZW50ZWQlMjB1bnNsaWNlZC4lMjIlMEFjaG9pY2UwJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2l0aCUyMGElMjBmb3JrJTIwYW5kJTIwYSUyMGtuaWZlLiUyMiUwQWNob2ljZTElMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aGlsZSUyMGhlbGQlMjBpbiUyMHRoZSUyMGhhbmQuJTIyJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gudGVuc29yKDApLnVuc3F1ZWV6ZSgwKSUyMCUyMCUyMyUyMGNob2ljZTAlMjBpcyUyMGNvcnJlY3QlMjAoYWNjb3JkaW5nJTIwdG8lMjBXaWtpcGVkaWElMjAlM0IpKSUyQyUyMGJhdGNoJTIwc2l6ZSUyMDElMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglNUJwcm9tcHQlMkMlMjBwcm9tcHQlNUQlMkMlMjAlNUJjaG9pY2UwJTJDJTIwY2hvaWNlMSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiolN0JrJTNBJTIwdi51bnNxdWVlemUoMCklMjBmb3IlMjBrJTJDJTIwdiUyMGluJTIwZW5jb2RpbmcuaXRlbXMoKSU3RCUyQyUyMGxhYmVscyUzRGxhYmVscyklMjAlMjAlMjMlMjBiYXRjaCUyMHNpemUlMjBpcyUyMDElMEElMEElMjMlMjB0aGUlMjBsaW5lYXIlMjBjbGFzc2lmaWVyJTIwc3RpbGwlMjBuZWVkcyUyMHRvJTIwYmUlMjB0cmFpbmVkJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CamembertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function Qo($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function Yo($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBDYW1lbWJlcnRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJKZWFuLUJhcHRpc3RlJTJGcm9iZXJ0YS1sYXJnZS1uZXItZW5nbGlzaCUyMiklMEFtb2RlbCUyMCUzRCUyMENhbWVtYmVydEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMkplYW4tQmFwdGlzdGUlMkZyb2JlcnRhLWxhcmdlLW5lci1lbmdsaXNoJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzJTBBcm91bmQobG9zcy5pdGVtKCklMkMlMjAyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CamembertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function So($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function Po($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBDYW1lbWJlcnRGb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZGVlcHNldCUyRnJvYmVydGEtYmFzZS1zcXVhZDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBDYW1lbWJlcnRGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyZGVlcHNldCUyRnJvYmVydGEtYmFzZS1zcXVhZDIlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWFuc3dlcl9zdGFydF9pbmRleCUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzLmFyZ21heCgpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMG91dHB1dHMuZW5kX2xvZ2l0cy5hcmdtYXgoKSUwQSUwQXByZWRpY3RfYW5zd2VyX3Rva2VucyUyMCUzRCUyMGlucHV0cy5pbnB1dF9pZHMlNUIwJTJDJTIwYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNBJTIwYW5zd2VyX2VuZF9pbmRleCUyMCUyQiUyMDElNUQlMEF0b2tlbml6ZXIuZGVjb2RlKHByZWRpY3RfYW5zd2VyX3Rva2VucyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSUwQSUwQSUyMyUyMHRhcmdldCUyMGlzJTIwJTIybmljZSUyMHB1cHBldCUyMiUwQXRhcmdldF9zdGFydF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNCU1RCklMEF0YXJnZXRfZW5kX2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFyb3VuZChsb3NzLml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CamembertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27; puppet&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function Ao($){let e,h,t,o,b,n,_="The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top.",H,U,x=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,G,W,J=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,R,p,j=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <em>Attention is
all you need</em>_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`,fe,ce,Ln=`To behave as a decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set to
<code>True</code>. To be used in a Seq2Seq model, the model needs to initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,bt,Ve,Tn='.. _<em>Attention is all you need</em>: <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">https://arxiv.org/abs/1706.03762</a>',Te,ge,oe,yn,Ue,Tt='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertModel">CamembertModel</a> forward method, overrides the <code>__call__</code> special method.',D,B,yt,We,Ht,Gt,kt,ee,Rt,Bt,Xe,kn="CamemBERT Model with a <code>language modeling</code> head on top for CLM fine-tuning.",ye,Mt,L=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ne,Vt,at=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Hn,ke,re,xn,Ie,Ee='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertForCausalLM">CamembertForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',Ze,Ae,S,qe,un,_e,Jn,ie,le,Xt,Et,rt="CamemBERT Model with a <code>language modeling</code> head on top.",Gn,Qt,Me=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,wt,te,Oe=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,zn,de,De,Ct,we,Yt='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertForMaskedLM">CamembertForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Ke,P,Ce,et,Le,vt,K,V,St,Pt,ve,At=`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`,Ot,it,Rn=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Dt,lt,Bn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,dt,A,X,$t,tt,hn='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertForSequenceClassification">CamembertForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Mn,be,nt,Qe,ot,g,z,se,E,Q,Y,ct,tn,$e=`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,nn,jt,Vn=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,so,Un,Xn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ao,mt,pt,Sn,He,Wn='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertForMultipleChoice">CamembertForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Pn,Ft,ro,fn,on,wn,sn,je,xt,Yn,ae,Nn=`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`,An,an,po=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,On,rn,uo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Dn,Ge,In,Kn,Jt,io='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertForTokenClassification">CamembertForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Ye,ut,eo,zt,to,Cn,ln,Re,ht,no,Ut,oo=`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>`,vn,$n,Fe=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,jn,Zn,En=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,lo,ft,Kt,co,qn,Qn='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertForQuestionAnswering">CamembertForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',mo,gn,_n,bn,Be;return e=new Je({props:{title:"CamembertModel",local:"transformers.CamembertModel",headingTag:"h2"}}),o=new q({props:{name:"class transformers.CamembertModel",anchor:"transformers.CamembertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.CamembertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L729"}}),oe=new q({props:{name:"forward",anchor:"transformers.CamembertModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.CamembertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.CamembertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.CamembertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L778",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) — Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),B=new he({props:{$$slots:{default:[Io]},$$scope:{ctx:$}}}),We=new xe({props:{anchor:"transformers.CamembertModel.forward.example",$$slots:{default:[Zo]},$$scope:{ctx:$}}}),Gt=new Je({props:{title:"CamembertForCausalLM",local:"transformers.CamembertForCausalLM",headingTag:"h2"}}),Rt=new q({props:{name:"class transformers.CamembertForCausalLM",anchor:"transformers.CamembertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1397"}}),re=new q({props:{name:"forward",anchor:"transformers.CamembertForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"past_key_values",val:": Tuple = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.CamembertForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.CamembertForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.CamembertForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.CamembertForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1422",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new he({props:{$$slots:{default:[qo]},$$scope:{ctx:$}}}),qe=new xe({props:{anchor:"transformers.CamembertForCausalLM.forward.example",$$slots:{default:[Lo]},$$scope:{ctx:$}}}),_e=new Je({props:{title:"CamembertForMaskedLM",local:"transformers.CamembertForMaskedLM",headingTag:"h2"}}),le=new q({props:{name:"class transformers.CamembertForMaskedLM",anchor:"transformers.CamembertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L916"}}),De=new q({props:{name:"forward",anchor:"transformers.CamembertForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.CamembertForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L945",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),P=new he({props:{$$slots:{default:[Ho]},$$scope:{ctx:$}}}),et=new xe({props:{anchor:"transformers.CamembertForMaskedLM.forward.example",$$slots:{default:[Go]},$$scope:{ctx:$}}}),vt=new Je({props:{title:"CamembertForSequenceClassification",local:"transformers.CamembertForSequenceClassification",headingTag:"h2"}}),St=new q({props:{name:"class transformers.CamembertForSequenceClassification",anchor:"transformers.CamembertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1014"}}),X=new q({props:{name:"forward",anchor:"transformers.CamembertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1034",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),be=new he({props:{$$slots:{default:[Ro]},$$scope:{ctx:$}}}),Qe=new xe({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example",$$slots:{default:[Bo]},$$scope:{ctx:$}}}),g=new xe({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example-2",$$slots:{default:[Vo]},$$scope:{ctx:$}}}),se=new Je({props:{title:"CamembertForMultipleChoice",local:"transformers.CamembertForMultipleChoice",headingTag:"h2"}}),Y=new q({props:{name:"class transformers.CamembertForMultipleChoice",anchor:"transformers.CamembertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1114"}}),pt=new q({props:{name:"forward",anchor:"transformers.CamembertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1133",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) — <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ft=new he({props:{$$slots:{default:[Xo]},$$scope:{ctx:$}}}),fn=new xe({props:{anchor:"transformers.CamembertForMultipleChoice.forward.example",$$slots:{default:[Eo]},$$scope:{ctx:$}}}),wn=new Je({props:{title:"CamembertForTokenClassification",local:"transformers.CamembertForTokenClassification",headingTag:"h2"}}),xt=new q({props:{name:"class transformers.CamembertForTokenClassification",anchor:"transformers.CamembertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1209"}}),In=new q({props:{name:"forward",anchor:"transformers.CamembertForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1232",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) — Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ut=new he({props:{$$slots:{default:[Qo]},$$scope:{ctx:$}}}),zt=new xe({props:{anchor:"transformers.CamembertForTokenClassification.forward.example",$$slots:{default:[Yo]},$$scope:{ctx:$}}}),Cn=new Je({props:{title:"CamembertForQuestionAnswering",local:"transformers.CamembertForQuestionAnswering",headingTag:"h2"}}),ht=new q({props:{name:"class transformers.CamembertForQuestionAnswering",anchor:"transformers.CamembertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1295"}}),Kt=new q({props:{name:"forward",anchor:"transformers.CamembertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.CamembertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1314",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) — Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) — Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new he({props:{$$slots:{default:[So]},$$scope:{ctx:$}}}),bn=new xe({props:{anchor:"transformers.CamembertForQuestionAnswering.forward.example",$$slots:{default:[Po]},$$scope:{ctx:$}}}),{c(){T(e.$$.fragment),h=a(),t=d("div"),T(o.$$.fragment),b=a(),n=d("p"),n.textContent=_,H=a(),U=d("p"),U.innerHTML=x,G=a(),W=d("p"),W.innerHTML=J,R=a(),p=d("p"),p.innerHTML=j,fe=a(),ce=d("p"),ce.innerHTML=Ln,bt=a(),Ve=d("p"),Ve.innerHTML=Tn,Te=a(),ge=d("div"),T(oe.$$.fragment),yn=a(),Ue=d("p"),Ue.innerHTML=Tt,D=a(),T(B.$$.fragment),yt=a(),T(We.$$.fragment),Ht=a(),T(Gt.$$.fragment),kt=a(),ee=d("div"),T(Rt.$$.fragment),Bt=a(),Xe=d("p"),Xe.innerHTML=kn,ye=a(),Mt=d("p"),Mt.innerHTML=L,Ne=a(),Vt=d("p"),Vt.innerHTML=at,Hn=a(),ke=d("div"),T(re.$$.fragment),xn=a(),Ie=d("p"),Ie.innerHTML=Ee,Ze=a(),T(Ae.$$.fragment),S=a(),T(qe.$$.fragment),un=a(),T(_e.$$.fragment),Jn=a(),ie=d("div"),T(le.$$.fragment),Xt=a(),Et=d("p"),Et.innerHTML=rt,Gn=a(),Qt=d("p"),Qt.innerHTML=Me,wt=a(),te=d("p"),te.innerHTML=Oe,zn=a(),de=d("div"),T(De.$$.fragment),Ct=a(),we=d("p"),we.innerHTML=Yt,Ke=a(),T(P.$$.fragment),Ce=a(),T(et.$$.fragment),Le=a(),T(vt.$$.fragment),K=a(),V=d("div"),T(St.$$.fragment),Pt=a(),ve=d("p"),ve.textContent=At,Ot=a(),it=d("p"),it.innerHTML=Rn,Dt=a(),lt=d("p"),lt.innerHTML=Bn,dt=a(),A=d("div"),T(X.$$.fragment),$t=a(),tt=d("p"),tt.innerHTML=hn,Mn=a(),T(be.$$.fragment),nt=a(),T(Qe.$$.fragment),ot=a(),T(g.$$.fragment),z=a(),T(se.$$.fragment),E=a(),Q=d("div"),T(Y.$$.fragment),ct=a(),tn=d("p"),tn.textContent=$e,nn=a(),jt=d("p"),jt.innerHTML=Vn,so=a(),Un=d("p"),Un.innerHTML=Xn,ao=a(),mt=d("div"),T(pt.$$.fragment),Sn=a(),He=d("p"),He.innerHTML=Wn,Pn=a(),T(Ft.$$.fragment),ro=a(),T(fn.$$.fragment),on=a(),T(wn.$$.fragment),sn=a(),je=d("div"),T(xt.$$.fragment),Yn=a(),ae=d("p"),ae.textContent=Nn,An=a(),an=d("p"),an.innerHTML=po,On=a(),rn=d("p"),rn.innerHTML=uo,Dn=a(),Ge=d("div"),T(In.$$.fragment),Kn=a(),Jt=d("p"),Jt.innerHTML=io,Ye=a(),T(ut.$$.fragment),eo=a(),T(zt.$$.fragment),to=a(),T(Cn.$$.fragment),ln=a(),Re=d("div"),T(ht.$$.fragment),no=a(),Ut=d("p"),Ut.innerHTML=oo,vn=a(),$n=d("p"),$n.innerHTML=Fe,jn=a(),Zn=d("p"),Zn.innerHTML=En,lo=a(),ft=d("div"),T(Kt.$$.fragment),co=a(),qn=d("p"),qn.innerHTML=Qn,mo=a(),T(gn.$$.fragment),_n=a(),T(bn.$$.fragment),this.h()},l(u){y(e.$$.fragment,u),h=r(u),t=c(u,"DIV",{class:!0});var F=I(t);y(o.$$.fragment,F),b=r(F),n=c(F,"P",{"data-svelte-h":!0}),f(n)!=="svelte-1r5xgo9"&&(n.textContent=_),H=r(F),U=c(F,"P",{"data-svelte-h":!0}),f(U)!=="svelte-eisylu"&&(U.innerHTML=x),G=r(F),W=c(F,"P",{"data-svelte-h":!0}),f(W)!=="svelte-hswkmf"&&(W.innerHTML=J),R=r(F),p=c(F,"P",{"data-svelte-h":!0}),f(p)!=="svelte-rehfhh"&&(p.innerHTML=j),fe=r(F),ce=c(F,"P",{"data-svelte-h":!0}),f(ce)!=="svelte-1d33acq"&&(ce.innerHTML=Ln),bt=r(F),Ve=c(F,"P",{"data-svelte-h":!0}),f(Ve)!=="svelte-p9qvd1"&&(Ve.innerHTML=Tn),Te=r(F),ge=c(F,"DIV",{class:!0});var Se=I(ge);y(oe.$$.fragment,Se),yn=r(Se),Ue=c(Se,"P",{"data-svelte-h":!0}),f(Ue)!=="svelte-506tod"&&(Ue.innerHTML=Tt),D=r(Se),y(B.$$.fragment,Se),yt=r(Se),y(We.$$.fragment,Se),Se.forEach(i),F.forEach(i),Ht=r(u),y(Gt.$$.fragment,u),kt=r(u),ee=c(u,"DIV",{class:!0});var gt=I(ee);y(Rt.$$.fragment,gt),Bt=r(gt),Xe=c(gt,"P",{"data-svelte-h":!0}),f(Xe)!=="svelte-jz3u0f"&&(Xe.innerHTML=kn),ye=r(gt),Mt=c(gt,"P",{"data-svelte-h":!0}),f(Mt)!=="svelte-eisylu"&&(Mt.innerHTML=L),Ne=r(gt),Vt=c(gt,"P",{"data-svelte-h":!0}),f(Vt)!=="svelte-hswkmf"&&(Vt.innerHTML=at),Hn=r(gt),ke=c(gt,"DIV",{class:!0});var Wt=I(ke);y(re.$$.fragment,Wt),xn=r(Wt),Ie=c(Wt,"P",{"data-svelte-h":!0}),f(Ie)!=="svelte-twrpw9"&&(Ie.innerHTML=Ee),Ze=r(Wt),y(Ae.$$.fragment,Wt),S=r(Wt),y(qe.$$.fragment,Wt),Wt.forEach(i),gt.forEach(i),un=r(u),y(_e.$$.fragment,u),Jn=r(u),ie=c(u,"DIV",{class:!0});var me=I(ie);y(le.$$.fragment,me),Xt=r(me),Et=c(me,"P",{"data-svelte-h":!0}),f(Et)!=="svelte-vbvgi8"&&(Et.innerHTML=rt),Gn=r(me),Qt=c(me,"P",{"data-svelte-h":!0}),f(Qt)!=="svelte-eisylu"&&(Qt.innerHTML=Me),wt=r(me),te=c(me,"P",{"data-svelte-h":!0}),f(te)!=="svelte-hswkmf"&&(te.innerHTML=Oe),zn=r(me),de=c(me,"DIV",{class:!0});var Nt=I(de);y(De.$$.fragment,Nt),Ct=r(Nt),we=c(Nt,"P",{"data-svelte-h":!0}),f(we)!=="svelte-1nd1fy1"&&(we.innerHTML=Yt),Ke=r(Nt),y(P.$$.fragment,Nt),Ce=r(Nt),y(et.$$.fragment,Nt),Nt.forEach(i),me.forEach(i),Le=r(u),y(vt.$$.fragment,u),K=r(u),V=c(u,"DIV",{class:!0});var pe=I(V);y(St.$$.fragment,pe),Pt=r(pe),ve=c(pe,"P",{"data-svelte-h":!0}),f(ve)!=="svelte-1gwoj50"&&(ve.textContent=At),Ot=r(pe),it=c(pe,"P",{"data-svelte-h":!0}),f(it)!=="svelte-eisylu"&&(it.innerHTML=Rn),Dt=r(pe),lt=c(pe,"P",{"data-svelte-h":!0}),f(lt)!=="svelte-hswkmf"&&(lt.innerHTML=Bn),dt=r(pe),A=c(pe,"DIV",{class:!0});var st=I(A);y(X.$$.fragment,st),$t=r(st),tt=c(st,"P",{"data-svelte-h":!0}),f(tt)!=="svelte-433g7b"&&(tt.innerHTML=hn),Mn=r(st),y(be.$$.fragment,st),nt=r(st),y(Qe.$$.fragment,st),ot=r(st),y(g.$$.fragment,st),st.forEach(i),pe.forEach(i),z=r(u),y(se.$$.fragment,u),E=r(u),Q=c(u,"DIV",{class:!0});var ue=I(Q);y(Y.$$.fragment,ue),ct=r(ue),tn=c(ue,"P",{"data-svelte-h":!0}),f(tn)!=="svelte-9ae5pg"&&(tn.textContent=$e),nn=r(ue),jt=c(ue,"P",{"data-svelte-h":!0}),f(jt)!=="svelte-eisylu"&&(jt.innerHTML=Vn),so=r(ue),Un=c(ue,"P",{"data-svelte-h":!0}),f(Un)!=="svelte-hswkmf"&&(Un.innerHTML=Xn),ao=r(ue),mt=c(ue,"DIV",{class:!0});var _t=I(mt);y(pt.$$.fragment,_t),Sn=r(_t),He=c(_t,"P",{"data-svelte-h":!0}),f(He)!=="svelte-yo1d0f"&&(He.innerHTML=Wn),Pn=r(_t),y(Ft.$$.fragment,_t),ro=r(_t),y(fn.$$.fragment,_t),_t.forEach(i),ue.forEach(i),on=r(u),y(wn.$$.fragment,u),sn=r(u),je=c(u,"DIV",{class:!0});var l=I(je);y(xt.$$.fragment,l),Yn=r(l),ae=c(l,"P",{"data-svelte-h":!0}),f(ae)!=="svelte-1cfp1r5"&&(ae.textContent=Nn),An=r(l),an=c(l,"P",{"data-svelte-h":!0}),f(an)!=="svelte-eisylu"&&(an.innerHTML=po),On=r(l),rn=c(l,"P",{"data-svelte-h":!0}),f(rn)!=="svelte-hswkmf"&&(rn.innerHTML=uo),Dn=r(l),Ge=c(l,"DIV",{class:!0});var v=I(Ge);y(In.$$.fragment,v),Kn=r(v),Jt=c(v,"P",{"data-svelte-h":!0}),f(Jt)!=="svelte-1xnp7tj"&&(Jt.innerHTML=io),Ye=r(v),y(ut.$$.fragment,v),eo=r(v),y(zt.$$.fragment,v),v.forEach(i),l.forEach(i),to=r(u),y(Cn.$$.fragment,u),ln=r(u),Re=c(u,"DIV",{class:!0});var ne=I(Re);y(ht.$$.fragment,ne),no=r(ne),Ut=c(ne,"P",{"data-svelte-h":!0}),f(Ut)!=="svelte-d4wraa"&&(Ut.innerHTML=oo),vn=r(ne),$n=c(ne,"P",{"data-svelte-h":!0}),f($n)!=="svelte-eisylu"&&($n.innerHTML=Fe),jn=r(ne),Zn=c(ne,"P",{"data-svelte-h":!0}),f(Zn)!=="svelte-hswkmf"&&(Zn.innerHTML=En),lo=r(ne),ft=c(ne,"DIV",{class:!0});var O=I(ft);y(Kt.$$.fragment,O),co=r(O),qn=c(O,"P",{"data-svelte-h":!0}),f(qn)!=="svelte-1p5he2n"&&(qn.innerHTML=Qn),mo=r(O),y(gn.$$.fragment,O),_n=r(O),y(bn.$$.fragment,O),O.forEach(i),ne.forEach(i),this.h()},h(){Z(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(u,F){k(e,u,F),m(u,h,F),m(u,t,F),k(o,t,null),s(t,b),s(t,n),s(t,H),s(t,U),s(t,G),s(t,W),s(t,R),s(t,p),s(t,fe),s(t,ce),s(t,bt),s(t,Ve),s(t,Te),s(t,ge),k(oe,ge,null),s(ge,yn),s(ge,Ue),s(ge,D),k(B,ge,null),s(ge,yt),k(We,ge,null),m(u,Ht,F),k(Gt,u,F),m(u,kt,F),m(u,ee,F),k(Rt,ee,null),s(ee,Bt),s(ee,Xe),s(ee,ye),s(ee,Mt),s(ee,Ne),s(ee,Vt),s(ee,Hn),s(ee,ke),k(re,ke,null),s(ke,xn),s(ke,Ie),s(ke,Ze),k(Ae,ke,null),s(ke,S),k(qe,ke,null),m(u,un,F),k(_e,u,F),m(u,Jn,F),m(u,ie,F),k(le,ie,null),s(ie,Xt),s(ie,Et),s(ie,Gn),s(ie,Qt),s(ie,wt),s(ie,te),s(ie,zn),s(ie,de),k(De,de,null),s(de,Ct),s(de,we),s(de,Ke),k(P,de,null),s(de,Ce),k(et,de,null),m(u,Le,F),k(vt,u,F),m(u,K,F),m(u,V,F),k(St,V,null),s(V,Pt),s(V,ve),s(V,Ot),s(V,it),s(V,Dt),s(V,lt),s(V,dt),s(V,A),k(X,A,null),s(A,$t),s(A,tt),s(A,Mn),k(be,A,null),s(A,nt),k(Qe,A,null),s(A,ot),k(g,A,null),m(u,z,F),k(se,u,F),m(u,E,F),m(u,Q,F),k(Y,Q,null),s(Q,ct),s(Q,tn),s(Q,nn),s(Q,jt),s(Q,so),s(Q,Un),s(Q,ao),s(Q,mt),k(pt,mt,null),s(mt,Sn),s(mt,He),s(mt,Pn),k(Ft,mt,null),s(mt,ro),k(fn,mt,null),m(u,on,F),k(wn,u,F),m(u,sn,F),m(u,je,F),k(xt,je,null),s(je,Yn),s(je,ae),s(je,An),s(je,an),s(je,On),s(je,rn),s(je,Dn),s(je,Ge),k(In,Ge,null),s(Ge,Kn),s(Ge,Jt),s(Ge,Ye),k(ut,Ge,null),s(Ge,eo),k(zt,Ge,null),m(u,to,F),k(Cn,u,F),m(u,ln,F),m(u,Re,F),k(ht,Re,null),s(Re,no),s(Re,Ut),s(Re,vn),s(Re,$n),s(Re,jn),s(Re,Zn),s(Re,lo),s(Re,ft),k(Kt,ft,null),s(ft,co),s(ft,qn),s(ft,mo),k(gn,ft,null),s(ft,_n),k(bn,ft,null),Be=!0},p(u,F){const Se={};F&2&&(Se.$$scope={dirty:F,ctx:u}),B.$set(Se);const gt={};F&2&&(gt.$$scope={dirty:F,ctx:u}),We.$set(gt);const Wt={};F&2&&(Wt.$$scope={dirty:F,ctx:u}),Ae.$set(Wt);const me={};F&2&&(me.$$scope={dirty:F,ctx:u}),qe.$set(me);const Nt={};F&2&&(Nt.$$scope={dirty:F,ctx:u}),P.$set(Nt);const pe={};F&2&&(pe.$$scope={dirty:F,ctx:u}),et.$set(pe);const st={};F&2&&(st.$$scope={dirty:F,ctx:u}),be.$set(st);const ue={};F&2&&(ue.$$scope={dirty:F,ctx:u}),Qe.$set(ue);const _t={};F&2&&(_t.$$scope={dirty:F,ctx:u}),g.$set(_t);const l={};F&2&&(l.$$scope={dirty:F,ctx:u}),Ft.$set(l);const v={};F&2&&(v.$$scope={dirty:F,ctx:u}),fn.$set(v);const ne={};F&2&&(ne.$$scope={dirty:F,ctx:u}),ut.$set(ne);const O={};F&2&&(O.$$scope={dirty:F,ctx:u}),zt.$set(O);const en={};F&2&&(en.$$scope={dirty:F,ctx:u}),gn.$set(en);const Pe={};F&2&&(Pe.$$scope={dirty:F,ctx:u}),bn.$set(Pe)},i(u){Be||(M(e.$$.fragment,u),M(o.$$.fragment,u),M(oe.$$.fragment,u),M(B.$$.fragment,u),M(We.$$.fragment,u),M(Gt.$$.fragment,u),M(Rt.$$.fragment,u),M(re.$$.fragment,u),M(Ae.$$.fragment,u),M(qe.$$.fragment,u),M(_e.$$.fragment,u),M(le.$$.fragment,u),M(De.$$.fragment,u),M(P.$$.fragment,u),M(et.$$.fragment,u),M(vt.$$.fragment,u),M(St.$$.fragment,u),M(X.$$.fragment,u),M(be.$$.fragment,u),M(Qe.$$.fragment,u),M(g.$$.fragment,u),M(se.$$.fragment,u),M(Y.$$.fragment,u),M(pt.$$.fragment,u),M(Ft.$$.fragment,u),M(fn.$$.fragment,u),M(wn.$$.fragment,u),M(xt.$$.fragment,u),M(In.$$.fragment,u),M(ut.$$.fragment,u),M(zt.$$.fragment,u),M(Cn.$$.fragment,u),M(ht.$$.fragment,u),M(Kt.$$.fragment,u),M(gn.$$.fragment,u),M(bn.$$.fragment,u),Be=!0)},o(u){w(e.$$.fragment,u),w(o.$$.fragment,u),w(oe.$$.fragment,u),w(B.$$.fragment,u),w(We.$$.fragment,u),w(Gt.$$.fragment,u),w(Rt.$$.fragment,u),w(re.$$.fragment,u),w(Ae.$$.fragment,u),w(qe.$$.fragment,u),w(_e.$$.fragment,u),w(le.$$.fragment,u),w(De.$$.fragment,u),w(P.$$.fragment,u),w(et.$$.fragment,u),w(vt.$$.fragment,u),w(St.$$.fragment,u),w(X.$$.fragment,u),w(be.$$.fragment,u),w(Qe.$$.fragment,u),w(g.$$.fragment,u),w(se.$$.fragment,u),w(Y.$$.fragment,u),w(pt.$$.fragment,u),w(Ft.$$.fragment,u),w(fn.$$.fragment,u),w(wn.$$.fragment,u),w(xt.$$.fragment,u),w(In.$$.fragment,u),w(ut.$$.fragment,u),w(zt.$$.fragment,u),w(Cn.$$.fragment,u),w(ht.$$.fragment,u),w(Kt.$$.fragment,u),w(gn.$$.fragment,u),w(bn.$$.fragment,u),Be=!1},d(u){u&&(i(h),i(t),i(Ht),i(kt),i(ee),i(un),i(Jn),i(ie),i(Le),i(K),i(V),i(z),i(E),i(Q),i(on),i(sn),i(je),i(to),i(ln),i(Re)),C(e,u),C(o),C(oe),C(B),C(We),C(Gt,u),C(Rt),C(re),C(Ae),C(qe),C(_e,u),C(le),C(De),C(P),C(et),C(vt,u),C(St),C(X),C(be),C(Qe),C(g),C(se,u),C(Y),C(pt),C(Ft),C(fn),C(wn,u),C(xt),C(In),C(ut),C(zt),C(Cn,u),C(ht),C(Kt),C(gn),C(bn)}}}function Oo($){let e,h;return e=new $o({props:{$$slots:{default:[Ao]},$$scope:{ctx:$}}}),{c(){T(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p(t,o){const b={};o&2&&(b.$$scope={dirty:o,ctx:t}),e.$set(b)},i(t){h||(M(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){C(e,t)}}}function Do($){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,b="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,H=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,x,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,W,J,R=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=h,t=a(),o=d("ul"),o.innerHTML=b,n=a(),_=d("p"),_.innerHTML=H,U=a(),x=d("ul"),x.innerHTML=G,W=a(),J=d("p"),J.innerHTML=R},l(p){e=c(p,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(p),o=c(p,"UL",{"data-svelte-h":!0}),f(o)!=="svelte-qm1t26"&&(o.innerHTML=b),n=r(p),_=c(p,"P",{"data-svelte-h":!0}),f(_)!=="svelte-1v9qsc5"&&(_.innerHTML=H),U=r(p),x=c(p,"UL",{"data-svelte-h":!0}),f(x)!=="svelte-15scerc"&&(x.innerHTML=G),W=r(p),J=c(p,"P",{"data-svelte-h":!0}),f(J)!=="svelte-1an3odd"&&(J.innerHTML=R)},m(p,j){m(p,e,j),m(p,t,j),m(p,o,j),m(p,n,j),m(p,_,j),m(p,U,j),m(p,x,j),m(p,W,j),m(p,J,j)},p:N,d(p){p&&(i(e),i(t),i(o),i(n),i(_),i(U),i(x),i(W),i(J))}}}function Ko($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function es($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkNhbWVtYmVydE1vZGVsJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbG1hbmFjaCUyRmNhbWVtYmVydC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZDYW1lbWJlcnRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyYWxtYW5hY2glMkZjYW1lbWJlcnQtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFCamembertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertModel.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function ts($){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,b="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,H=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,x,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,W,J,R=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=h,t=a(),o=d("ul"),o.innerHTML=b,n=a(),_=d("p"),_.innerHTML=H,U=a(),x=d("ul"),x.innerHTML=G,W=a(),J=d("p"),J.innerHTML=R},l(p){e=c(p,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(p),o=c(p,"UL",{"data-svelte-h":!0}),f(o)!=="svelte-qm1t26"&&(o.innerHTML=b),n=r(p),_=c(p,"P",{"data-svelte-h":!0}),f(_)!=="svelte-1v9qsc5"&&(_.innerHTML=H),U=r(p),x=c(p,"UL",{"data-svelte-h":!0}),f(x)!=="svelte-15scerc"&&(x.innerHTML=G),W=r(p),J=c(p,"P",{"data-svelte-h":!0}),f(J)!=="svelte-1an3odd"&&(J.innerHTML=R)},m(p,j){m(p,e,j),m(p,t,j),m(p,o,j),m(p,n,j),m(p,_,j),m(p,U,j),m(p,x,j),m(p,W,j),m(p,J,j)},p:N,d(p){p&&(i(e),i(t),i(o),i(n),i(_),i(U),i(x),i(W),i(J))}}}function ns($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function os($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkNhbWVtYmVydEZvckNhdXNhbExNJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbG1hbmFjaCUyRmNhbWVtYmVydC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZDYW1lbWJlcnRGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyYWxtYW5hY2glMkZjYW1lbWJlcnQtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFCamembertForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForCausalLM.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function ss($){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,b="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,H=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,x,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,W,J,R=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=h,t=a(),o=d("ul"),o.innerHTML=b,n=a(),_=d("p"),_.innerHTML=H,U=a(),x=d("ul"),x.innerHTML=G,W=a(),J=d("p"),J.innerHTML=R},l(p){e=c(p,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(p),o=c(p,"UL",{"data-svelte-h":!0}),f(o)!=="svelte-qm1t26"&&(o.innerHTML=b),n=r(p),_=c(p,"P",{"data-svelte-h":!0}),f(_)!=="svelte-1v9qsc5"&&(_.innerHTML=H),U=r(p),x=c(p,"UL",{"data-svelte-h":!0}),f(x)!=="svelte-15scerc"&&(x.innerHTML=G),W=r(p),J=c(p,"P",{"data-svelte-h":!0}),f(J)!=="svelte-1an3odd"&&(J.innerHTML=R)},m(p,j){m(p,e,j),m(p,t,j),m(p,o,j),m(p,n,j),m(p,_,j),m(p,U,j),m(p,x,j),m(p,W,j),m(p,J,j)},p:N,d(p){p&&(i(e),i(t),i(o),i(n),i(_),i(U),i(x),i(W),i(J))}}}function as($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function rs($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkNhbWVtYmVydEZvck1hc2tlZExNJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbG1hbmFjaCUyRmNhbWVtYmVydC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZDYW1lbWJlcnRGb3JNYXNrZWRMTS5mcm9tX3ByZXRyYWluZWQoJTIyYWxtYW5hY2glMkZjYW1lbWJlcnQtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjAlM0NtYXNrJTNFLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQSUyMyUyMHJldHJpZXZlJTIwaW5kZXglMjBvZiUyMCUzQ21hc2slM0UlMEFtYXNrX3Rva2VuX2luZGV4JTIwJTNEJTIwdGYud2hlcmUoKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCklNUIwJTVEKSUwQXNlbGVjdGVkX2xvZ2l0cyUyMCUzRCUyMHRmLmdhdGhlcl9uZChsb2dpdHMlNUIwJTVEJTJDJTIwaW5kaWNlcyUzRG1hc2tfdG9rZW5faW5kZXgpJTBBJTBBcHJlZGljdGVkX3Rva2VuX2lkJTIwJTNEJTIwdGYubWF0aC5hcmdtYXgoc2VsZWN0ZWRfbG9naXRzJTJDJTIwYXhpcyUzRC0xKSUwQXRva2VuaXplci5kZWNvZGUocHJlZGljdGVkX3Rva2VuX2lkKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFCamembertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function is($){let e,h;return e=new ze({props:{code:"bGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjMlMjBtYXNrJTIwbGFiZWxzJTIwb2YlMjBub24tJTNDbWFzayUzRSUyMHRva2VucyUwQWxhYmVscyUyMCUzRCUyMHRmLndoZXJlKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCUyQyUyMGxhYmVscyUyQyUyMC0xMDApJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUwQXJvdW5kKGZsb2F0KG91dHB1dHMubG9zcyklMkMlMjAyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`,wrap:!1}}),{c(){T(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p:N,i(t){h||(M(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){C(e,t)}}}function ls($){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,b="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,H=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,x,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,W,J,R=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=h,t=a(),o=d("ul"),o.innerHTML=b,n=a(),_=d("p"),_.innerHTML=H,U=a(),x=d("ul"),x.innerHTML=G,W=a(),J=d("p"),J.innerHTML=R},l(p){e=c(p,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(p),o=c(p,"UL",{"data-svelte-h":!0}),f(o)!=="svelte-qm1t26"&&(o.innerHTML=b),n=r(p),_=c(p,"P",{"data-svelte-h":!0}),f(_)!=="svelte-1v9qsc5"&&(_.innerHTML=H),U=r(p),x=c(p,"UL",{"data-svelte-h":!0}),f(x)!=="svelte-15scerc"&&(x.innerHTML=G),W=r(p),J=c(p,"P",{"data-svelte-h":!0}),f(J)!=="svelte-1an3odd"&&(J.innerHTML=R)},m(p,j){m(p,e,j),m(p,t,j),m(p,o,j),m(p,n,j),m(p,_,j),m(p,U,j),m(p,x,j),m(p,W,j),m(p,J,j)},p:N,d(p){p&&(i(e),i(t),i(o),i(n),i(_),i(U),i(x),i(W),i(J))}}}function ds($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function cs($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkNhbWVtYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmNhcmRpZmZubHAlMkZ0d2l0dGVyLXJvYmVydGEtYmFzZS1lbW90aW9uJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZDYW1lbWJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJjYXJkaWZmbmxwJTJGdHdpdHRlci1yb2JlcnRhLWJhc2UtZW1vdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBJTBBbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChsb2dpdHMlMkMlMjBheGlzJTNELTEpJTVCMCU1RCklMEFtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfY2xhc3NfaWQlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFCamembertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function ms($){let e,h;return e=new ze({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZDYW1lbWJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJjYXJkaWZmbmxwJTJGdHdpdHRlci1yb2JlcnRhLWJhc2UtZW1vdGlvbiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRmLmNvbnN0YW50KDEpJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzJTBBcm91bmQoZmxvYXQobG9zcyklMkMlMjAyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`,wrap:!1}}),{c(){T(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p:N,i(t){h||(M(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){C(e,t)}}}function ps($){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,b="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,H=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,x,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,W,J,R=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=h,t=a(),o=d("ul"),o.innerHTML=b,n=a(),_=d("p"),_.innerHTML=H,U=a(),x=d("ul"),x.innerHTML=G,W=a(),J=d("p"),J.innerHTML=R},l(p){e=c(p,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(p),o=c(p,"UL",{"data-svelte-h":!0}),f(o)!=="svelte-qm1t26"&&(o.innerHTML=b),n=r(p),_=c(p,"P",{"data-svelte-h":!0}),f(_)!=="svelte-1v9qsc5"&&(_.innerHTML=H),U=r(p),x=c(p,"UL",{"data-svelte-h":!0}),f(x)!=="svelte-15scerc"&&(x.innerHTML=G),W=r(p),J=c(p,"P",{"data-svelte-h":!0}),f(J)!=="svelte-1an3odd"&&(J.innerHTML=R)},m(p,j){m(p,e,j),m(p,t,j),m(p,o,j),m(p,n,j),m(p,_,j),m(p,U,j),m(p,x,j),m(p,W,j),m(p,J,j)},p:N,d(p){p&&(i(e),i(t),i(o),i(n),i(_),i(U),i(x),i(W),i(J))}}}function us($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function hs($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkNhbWVtYmVydEZvck11bHRpcGxlQ2hvaWNlJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbG1hbmFjaCUyRmNhbWVtYmVydC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZDYW1lbWJlcnRGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyYWxtYW5hY2glMkZjYW1lbWJlcnQtYmFzZSUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBY2hvaWNlMCUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdpdGglMjBhJTIwZm9yayUyMGFuZCUyMGElMjBrbmlmZS4lMjIlMEFjaG9pY2UxJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2hpbGUlMjBoZWxkJTIwaW4lMjB0aGUlMjBoYW5kLiUyMiUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiUyQyUyMHBhZGRpbmclM0RUcnVlKSUwQWlucHV0cyUyMCUzRCUyMCU3QmslM0ElMjB0Zi5leHBhbmRfZGltcyh2JTJDJTIwMCklMjBmb3IlMjBrJTJDJTIwdiUyMGluJTIwZW5jb2RpbmcuaXRlbXMoKSU3RCUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTIwJTIwJTIzJTIwYmF0Y2glMjBzaXplJTIwaXMlMjAxJTBBJTBBJTIzJTIwdGhlJTIwbGluZWFyJTIwY2xhc3NpZmllciUyMHN0aWxsJTIwbmVlZHMlMjB0byUyMGJlJTIwdHJhaW5lZCUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFCamembertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;almanach/camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function fs($){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,b="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,H=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,x,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,W,J,R=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=h,t=a(),o=d("ul"),o.innerHTML=b,n=a(),_=d("p"),_.innerHTML=H,U=a(),x=d("ul"),x.innerHTML=G,W=a(),J=d("p"),J.innerHTML=R},l(p){e=c(p,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(p),o=c(p,"UL",{"data-svelte-h":!0}),f(o)!=="svelte-qm1t26"&&(o.innerHTML=b),n=r(p),_=c(p,"P",{"data-svelte-h":!0}),f(_)!=="svelte-1v9qsc5"&&(_.innerHTML=H),U=r(p),x=c(p,"UL",{"data-svelte-h":!0}),f(x)!=="svelte-15scerc"&&(x.innerHTML=G),W=r(p),J=c(p,"P",{"data-svelte-h":!0}),f(J)!=="svelte-1an3odd"&&(J.innerHTML=R)},m(p,j){m(p,e,j),m(p,t,j),m(p,o,j),m(p,n,j),m(p,_,j),m(p,U,j),m(p,x,j),m(p,W,j),m(p,J,j)},p:N,d(p){p&&(i(e),i(t),i(o),i(n),i(_),i(U),i(x),i(W),i(J))}}}function gs($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function _s($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkNhbWVtYmVydEZvclRva2VuQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnlkc2hpZWglMkZyb2JlcnRhLWxhcmdlLW5lci1lbmdsaXNoJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZDYW1lbWJlcnRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJ5ZHNoaWVoJTJGcm9iZXJ0YS1sYXJnZS1uZXItZW5nbGlzaCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiUwQSklMEElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMHRmLm1hdGguYXJnbWF4KGxvZ2l0cyUyQyUyMGF4aXMlM0QtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdCU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVELm51bXB5KCkudG9saXN0KCklNUQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFCamembertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function bs($){let e,h;return e=new ze({props:{code:"bGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzKSUwQXJvdW5kKGZsb2F0KGxvc3MpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`,wrap:!1}}),{c(){T(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p:N,i(t){h||(M(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){C(e,t)}}}function Ts($){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,b="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,H=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,x,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,W,J,R=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=h,t=a(),o=d("ul"),o.innerHTML=b,n=a(),_=d("p"),_.innerHTML=H,U=a(),x=d("ul"),x.innerHTML=G,W=a(),J=d("p"),J.innerHTML=R},l(p){e=c(p,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(p),o=c(p,"UL",{"data-svelte-h":!0}),f(o)!=="svelte-qm1t26"&&(o.innerHTML=b),n=r(p),_=c(p,"P",{"data-svelte-h":!0}),f(_)!=="svelte-1v9qsc5"&&(_.innerHTML=H),U=r(p),x=c(p,"UL",{"data-svelte-h":!0}),f(x)!=="svelte-15scerc"&&(x.innerHTML=G),W=r(p),J=c(p,"P",{"data-svelte-h":!0}),f(J)!=="svelte-1an3odd"&&(J.innerHTML=R)},m(p,j){m(p,e,j),m(p,t,j),m(p,o,j),m(p,n,j),m(p,_,j),m(p,U,j),m(p,x,j),m(p,W,j),m(p,J,j)},p:N,d(p){p&&(i(e),i(t),i(o),i(n),i(_),i(U),i(x),i(W),i(J))}}}function ys($){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=c(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){m(t,e,o)},p:N,d(t){t&&i(e)}}}function ks($){let e,h="Example:",t,o,b;return o=new ze({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkNhbWVtYmVydEZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ5ZHNoaWVoJTJGcm9iZXJ0YS1iYXNlLXNxdWFkMiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGQ2FtZW1iZXJ0Rm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMnlkc2hpZWglMkZyb2JlcnRhLWJhc2Utc3F1YWQyJTIyKSUwQSUwQXF1ZXN0aW9uJTJDJTIwdGV4dCUyMCUzRCUyMCUyMldobyUyMHdhcyUyMEppbSUyMEhlbnNvbiUzRiUyMiUyQyUyMCUyMkppbSUyMEhlbnNvbiUyMHdhcyUyMGElMjBuaWNlJTIwcHVwcGV0JTIyJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHF1ZXN0aW9uJTJDJTIwdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWFuc3dlcl9zdGFydF9pbmRleCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChvdXRwdXRzLnN0YXJ0X2xvZ2l0cyUyQyUyMGF4aXMlM0QtMSklNUIwJTVEKSUwQWFuc3dlcl9lbmRfaW5kZXglMjAlM0QlMjBpbnQodGYubWF0aC5hcmdtYXgob3V0cHV0cy5lbmRfbG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQXRva2VuaXplci5kZWNvZGUocHJlZGljdF9hbnN3ZXJfdG9rZW5zKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFCamembertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=a(),T(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),y(o.$$.fragment,n)},m(n,_){m(n,e,_),m(n,t,_),k(o,n,_),b=!0},p:N,i(n){b||(M(o.$$.fragment,n),b=!0)},o(n){w(o.$$.fragment,n),b=!1},d(n){n&&(i(e),i(t)),C(o,n)}}}function Ms($){let e,h;return e=new ze({props:{code:"JTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdGYuY29uc3RhbnQoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRmLmNvbnN0YW50KCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG91dHB1dHMubG9zcyklMEFyb3VuZChmbG9hdChsb3NzKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`,wrap:!1}}),{c(){T(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p:N,i(t){h||(M(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){C(e,t)}}}function ws($){let e,h,t,o,b,n,_="The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top.",H,U,x=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,G,W,J=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,R,p,j,fe,ce,Ln,bt,Ve='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.TFCamembertModel">TFCamembertModel</a> forward method, overrides the <code>__call__</code> special method.',Tn,Te,ge,oe,yn,Ue,Tt,D,B,yt,We,Ht="CamemBERT Model with a <code>language modeling</code> head on top for CLM fine-tuning.",Gt,kt,ee=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Rt,Bt,Xe=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,kn,ye,Mt,L,Ne,Vt,at,Hn='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.TFCamembertForCausalLM">TFCamembertForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',ke,re,xn,Ie,Ee,Ze,Ae,S,qe,un,_e,Jn="CamemBERT Model with a <code>language modeling</code> head on top.",ie,le,Xt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Et,rt,Gn=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Qt,Me,wt,te,Oe,zn,de,De='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.TFCamembertForMaskedLM">TFCamembertForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Ct,we,Yt,Ke,P,Ce,et,Le,vt,K,V,St,Pt,ve=`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`,At,Ot,it=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Rn,Dt,lt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Bn,dt,A,X,$t,tt,hn,Mn='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.TFCamembertForSequenceClassification">TFCamembertForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',be,nt,Qe,ot,g,z,se,E,Q,Y,ct,tn,$e,nn=`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,jt,Vn,so=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Un,Xn,ao=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,mt,pt,Sn,He,Wn,Pn,Ft,ro='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.TFCamembertForMultipleChoice">TFCamembertForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',fn,on,wn,sn,je,xt,Yn,ae,Nn,An,an,po=`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`,On,rn,uo=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Dn,Ge,In=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Kn,Jt,io,Ye,ut,eo,zt,to='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.TFCamembertForTokenClassification">TFCamembertForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Cn,ln,Re,ht,no,Ut,oo,vn,$n,Fe,jn,Zn,En,lo=`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,ft,Kt,co=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,qn,Qn,mo=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,gn,_n,bn,Be,u,F,Se,gt='The <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.TFCamembertForQuestionAnswering">TFCamembertForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Wt,me,Nt,pe,st,ue,_t;return e=new Je({props:{title:"TFCamembertModel",local:"transformers.TFCamembertModel",headingTag:"h2"}}),o=new q({props:{name:"class transformers.TFCamembertModel",anchor:"transformers.TFCamembertModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L989"}}),p=new he({props:{$$slots:{default:[Do]},$$scope:{ctx:$}}}),ce=new q({props:{name:"call",anchor:"transformers.TFCamembertModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFCamembertModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFCamembertModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFCamembertModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L999",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) — Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you’re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Te=new he({props:{$$slots:{default:[Ko]},$$scope:{ctx:$}}}),oe=new xe({props:{anchor:"transformers.TFCamembertModel.call.example",$$slots:{default:[es]},$$scope:{ctx:$}}}),Ue=new Je({props:{title:"TFCamembertForCasualLM",local:"transformers.TFCamembertForCausalLM",headingTag:"h2"}}),B=new q({props:{name:"class transformers.TFCamembertForCausalLM",anchor:"transformers.TFCamembertForCausalLM",parameters:[{name:"config",val:": CamembertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1660"}}),ye=new he({props:{$$slots:{default:[ts]},$$scope:{ctx:$}}}),Ne=new q({props:{name:"call",anchor:"transformers.TFCamembertForCausalLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForCausalLM.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFCamembertForCausalLM.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFCamembertForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFCamembertForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFCamembertForCausalLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1697",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) — Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),re=new he({props:{$$slots:{default:[ns]},$$scope:{ctx:$}}}),Ie=new xe({props:{anchor:"transformers.TFCamembertForCausalLM.call.example",$$slots:{default:[os]},$$scope:{ctx:$}}}),Ze=new Je({props:{title:"TFCamembertForMaskedLM",local:"transformers.TFCamembertForMaskedLM",headingTag:"h2"}}),qe=new q({props:{name:"class transformers.TFCamembertForMaskedLM",anchor:"transformers.TFCamembertForMaskedLM",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1132"}}),Me=new he({props:{$$slots:{default:[ss]},$$scope:{ctx:$}}}),Oe=new q({props:{name:"call",anchor:"transformers.TFCamembertForMaskedLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1154",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) — Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),we=new he({props:{$$slots:{default:[as]},$$scope:{ctx:$}}}),Ke=new xe({props:{anchor:"transformers.TFCamembertForMaskedLM.call.example",$$slots:{default:[rs]},$$scope:{ctx:$}}}),Ce=new xe({props:{anchor:"transformers.TFCamembertForMaskedLM.call.example-2",$$slots:{default:[is]},$$scope:{ctx:$}}}),Le=new Je({props:{title:"TFCamembertForSequenceClassification",local:"transformers.TFCamembertForSequenceClassification",headingTag:"h2"}}),V=new q({props:{name:"class transformers.TFCamembertForSequenceClassification",anchor:"transformers.TFCamembertForSequenceClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1266"}}),dt=new he({props:{$$slots:{default:[ls]},$$scope:{ctx:$}}}),$t=new q({props:{name:"call",anchor:"transformers.TFCamembertForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1285",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nt=new he({props:{$$slots:{default:[ds]},$$scope:{ctx:$}}}),ot=new xe({props:{anchor:"transformers.TFCamembertForSequenceClassification.call.example",$$slots:{default:[cs]},$$scope:{ctx:$}}}),z=new xe({props:{anchor:"transformers.TFCamembertForSequenceClassification.call.example-2",$$slots:{default:[ms]},$$scope:{ctx:$}}}),E=new Je({props:{title:"TFCamembertForMultipleChoice",local:"transformers.TFCamembertForMultipleChoice",headingTag:"h2"}}),ct=new q({props:{name:"class transformers.TFCamembertForMultipleChoice",anchor:"transformers.TFCamembertForMultipleChoice",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1450"}}),pt=new he({props:{$$slots:{default:[ps]},$$scope:{ctx:$}}}),Wn=new q({props:{name:"call",anchor:"transformers.TFCamembertForMultipleChoice.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1473",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) — <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),on=new he({props:{$$slots:{default:[us]},$$scope:{ctx:$}}}),sn=new xe({props:{anchor:"transformers.TFCamembertForMultipleChoice.call.example",$$slots:{default:[hs]},$$scope:{ctx:$}}}),xt=new Je({props:{title:"TFCamembertForTokenClassification",local:"transformers.TFCamembertForTokenClassification",headingTag:"h2"}}),Nn=new q({props:{name:"class transformers.TFCamembertForTokenClassification",anchor:"transformers.TFCamembertForTokenClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1354"}}),Jt=new he({props:{$$slots:{default:[fs]},$$scope:{ctx:$}}}),ut=new q({props:{name:"call",anchor:"transformers.TFCamembertForTokenClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1381",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) — Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ln=new he({props:{$$slots:{default:[gs]},$$scope:{ctx:$}}}),ht=new xe({props:{anchor:"transformers.TFCamembertForTokenClassification.call.example",$$slots:{default:[_s]},$$scope:{ctx:$}}}),Ut=new xe({props:{anchor:"transformers.TFCamembertForTokenClassification.call.example-2",$$slots:{default:[bs]},$$scope:{ctx:$}}}),vn=new Je({props:{title:"TFCamembertForQuestionAnswering",local:"transformers.TFCamembertForQuestionAnswering",headingTag:"h2"}}),jn=new q({props:{name:"class transformers.TFCamembertForQuestionAnswering",anchor:"transformers.TFCamembertForQuestionAnswering",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1555"}}),_n=new he({props:{$$slots:{default:[Ts]},$$scope:{ctx:$}}}),u=new q({props:{name:"call",anchor:"transformers.TFCamembertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"start_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"end_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1577",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) — Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) — Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) — Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),me=new he({props:{$$slots:{default:[ys]},$$scope:{ctx:$}}}),pe=new xe({props:{anchor:"transformers.TFCamembertForQuestionAnswering.call.example",$$slots:{default:[ks]},$$scope:{ctx:$}}}),ue=new xe({props:{anchor:"transformers.TFCamembertForQuestionAnswering.call.example-2",$$slots:{default:[Ms]},$$scope:{ctx:$}}}),{c(){T(e.$$.fragment),h=a(),t=d("div"),T(o.$$.fragment),b=a(),n=d("p"),n.textContent=_,H=a(),U=d("p"),U.innerHTML=x,G=a(),W=d("p"),W.innerHTML=J,R=a(),T(p.$$.fragment),j=a(),fe=d("div"),T(ce.$$.fragment),Ln=a(),bt=d("p"),bt.innerHTML=Ve,Tn=a(),T(Te.$$.fragment),ge=a(),T(oe.$$.fragment),yn=a(),T(Ue.$$.fragment),Tt=a(),D=d("div"),T(B.$$.fragment),yt=a(),We=d("p"),We.innerHTML=Ht,Gt=a(),kt=d("p"),kt.innerHTML=ee,Rt=a(),Bt=d("p"),Bt.innerHTML=Xe,kn=a(),T(ye.$$.fragment),Mt=a(),L=d("div"),T(Ne.$$.fragment),Vt=a(),at=d("p"),at.innerHTML=Hn,ke=a(),T(re.$$.fragment),xn=a(),T(Ie.$$.fragment),Ee=a(),T(Ze.$$.fragment),Ae=a(),S=d("div"),T(qe.$$.fragment),un=a(),_e=d("p"),_e.innerHTML=Jn,ie=a(),le=d("p"),le.innerHTML=Xt,Et=a(),rt=d("p"),rt.innerHTML=Gn,Qt=a(),T(Me.$$.fragment),wt=a(),te=d("div"),T(Oe.$$.fragment),zn=a(),de=d("p"),de.innerHTML=De,Ct=a(),T(we.$$.fragment),Yt=a(),T(Ke.$$.fragment),P=a(),T(Ce.$$.fragment),et=a(),T(Le.$$.fragment),vt=a(),K=d("div"),T(V.$$.fragment),St=a(),Pt=d("p"),Pt.textContent=ve,At=a(),Ot=d("p"),Ot.innerHTML=it,Rn=a(),Dt=d("p"),Dt.innerHTML=lt,Bn=a(),T(dt.$$.fragment),A=a(),X=d("div"),T($t.$$.fragment),tt=a(),hn=d("p"),hn.innerHTML=Mn,be=a(),T(nt.$$.fragment),Qe=a(),T(ot.$$.fragment),g=a(),T(z.$$.fragment),se=a(),T(E.$$.fragment),Q=a(),Y=d("div"),T(ct.$$.fragment),tn=a(),$e=d("p"),$e.textContent=nn,jt=a(),Vn=d("p"),Vn.innerHTML=so,Un=a(),Xn=d("p"),Xn.innerHTML=ao,mt=a(),T(pt.$$.fragment),Sn=a(),He=d("div"),T(Wn.$$.fragment),Pn=a(),Ft=d("p"),Ft.innerHTML=ro,fn=a(),T(on.$$.fragment),wn=a(),T(sn.$$.fragment),je=a(),T(xt.$$.fragment),Yn=a(),ae=d("div"),T(Nn.$$.fragment),An=a(),an=d("p"),an.textContent=po,On=a(),rn=d("p"),rn.innerHTML=uo,Dn=a(),Ge=d("p"),Ge.innerHTML=In,Kn=a(),T(Jt.$$.fragment),io=a(),Ye=d("div"),T(ut.$$.fragment),eo=a(),zt=d("p"),zt.innerHTML=to,Cn=a(),T(ln.$$.fragment),Re=a(),T(ht.$$.fragment),no=a(),T(Ut.$$.fragment),oo=a(),T(vn.$$.fragment),$n=a(),Fe=d("div"),T(jn.$$.fragment),Zn=a(),En=d("p"),En.innerHTML=lo,ft=a(),Kt=d("p"),Kt.innerHTML=co,qn=a(),Qn=d("p"),Qn.innerHTML=mo,gn=a(),T(_n.$$.fragment),bn=a(),Be=d("div"),T(u.$$.fragment),F=a(),Se=d("p"),Se.innerHTML=gt,Wt=a(),T(me.$$.fragment),Nt=a(),T(pe.$$.fragment),st=a(),T(ue.$$.fragment),this.h()},l(l){y(e.$$.fragment,l),h=r(l),t=c(l,"DIV",{class:!0});var v=I(t);y(o.$$.fragment,v),b=r(v),n=c(v,"P",{"data-svelte-h":!0}),f(n)!=="svelte-1r5xgo9"&&(n.textContent=_),H=r(v),U=c(v,"P",{"data-svelte-h":!0}),f(U)!=="svelte-x53t1u"&&(U.innerHTML=x),G=r(v),W=c(v,"P",{"data-svelte-h":!0}),f(W)!=="svelte-1be7e3c"&&(W.innerHTML=J),R=r(v),y(p.$$.fragment,v),j=r(v),fe=c(v,"DIV",{class:!0});var ne=I(fe);y(ce.$$.fragment,ne),Ln=r(ne),bt=c(ne,"P",{"data-svelte-h":!0}),f(bt)!=="svelte-l1xz6p"&&(bt.innerHTML=Ve),Tn=r(ne),y(Te.$$.fragment,ne),ge=r(ne),y(oe.$$.fragment,ne),ne.forEach(i),v.forEach(i),yn=r(l),y(Ue.$$.fragment,l),Tt=r(l),D=c(l,"DIV",{class:!0});var O=I(D);y(B.$$.fragment,O),yt=r(O),We=c(O,"P",{"data-svelte-h":!0}),f(We)!=="svelte-jz3u0f"&&(We.innerHTML=Ht),Gt=r(O),kt=c(O,"P",{"data-svelte-h":!0}),f(kt)!=="svelte-x53t1u"&&(kt.innerHTML=ee),Rt=r(O),Bt=c(O,"P",{"data-svelte-h":!0}),f(Bt)!=="svelte-1be7e3c"&&(Bt.innerHTML=Xe),kn=r(O),y(ye.$$.fragment,O),Mt=r(O),L=c(O,"DIV",{class:!0});var en=I(L);y(Ne.$$.fragment,en),Vt=r(en),at=c(en,"P",{"data-svelte-h":!0}),f(at)!=="svelte-er7v8t"&&(at.innerHTML=Hn),ke=r(en),y(re.$$.fragment,en),xn=r(en),y(Ie.$$.fragment,en),en.forEach(i),O.forEach(i),Ee=r(l),y(Ze.$$.fragment,l),Ae=r(l),S=c(l,"DIV",{class:!0});var Pe=I(S);y(qe.$$.fragment,Pe),un=r(Pe),_e=c(Pe,"P",{"data-svelte-h":!0}),f(_e)!=="svelte-vbvgi8"&&(_e.innerHTML=Jn),ie=r(Pe),le=c(Pe,"P",{"data-svelte-h":!0}),f(le)!=="svelte-x53t1u"&&(le.innerHTML=Xt),Et=r(Pe),rt=c(Pe,"P",{"data-svelte-h":!0}),f(rt)!=="svelte-1be7e3c"&&(rt.innerHTML=Gn),Qt=r(Pe),y(Me.$$.fragment,Pe),wt=r(Pe),te=c(Pe,"DIV",{class:!0});var dn=I(te);y(Oe.$$.fragment,dn),zn=r(dn),de=c(dn,"P",{"data-svelte-h":!0}),f(de)!=="svelte-16p07qd"&&(de.innerHTML=De),Ct=r(dn),y(we.$$.fragment,dn),Yt=r(dn),y(Ke.$$.fragment,dn),P=r(dn),y(Ce.$$.fragment,dn),dn.forEach(i),Pe.forEach(i),et=r(l),y(Le.$$.fragment,l),vt=r(l),K=c(l,"DIV",{class:!0});var It=I(K);y(V.$$.fragment,It),St=r(It),Pt=c(It,"P",{"data-svelte-h":!0}),f(Pt)!=="svelte-1gwoj50"&&(Pt.textContent=ve),At=r(It),Ot=c(It,"P",{"data-svelte-h":!0}),f(Ot)!=="svelte-x53t1u"&&(Ot.innerHTML=it),Rn=r(It),Dt=c(It,"P",{"data-svelte-h":!0}),f(Dt)!=="svelte-1be7e3c"&&(Dt.innerHTML=lt),Bn=r(It),y(dt.$$.fragment,It),A=r(It),X=c(It,"DIV",{class:!0});var cn=I(X);y($t.$$.fragment,cn),tt=r(cn),hn=c(cn,"P",{"data-svelte-h":!0}),f(hn)!=="svelte-1tc0jfb"&&(hn.innerHTML=Mn),be=r(cn),y(nt.$$.fragment,cn),Qe=r(cn),y(ot.$$.fragment,cn),g=r(cn),y(z.$$.fragment,cn),cn.forEach(i),It.forEach(i),se=r(l),y(E.$$.fragment,l),Q=r(l),Y=c(l,"DIV",{class:!0});var Zt=I(Y);y(ct.$$.fragment,Zt),tn=r(Zt),$e=c(Zt,"P",{"data-svelte-h":!0}),f($e)!=="svelte-9ae5pg"&&($e.textContent=nn),jt=r(Zt),Vn=c(Zt,"P",{"data-svelte-h":!0}),f(Vn)!=="svelte-x53t1u"&&(Vn.innerHTML=so),Un=r(Zt),Xn=c(Zt,"P",{"data-svelte-h":!0}),f(Xn)!=="svelte-1be7e3c"&&(Xn.innerHTML=ao),mt=r(Zt),y(pt.$$.fragment,Zt),Sn=r(Zt),He=c(Zt,"DIV",{class:!0});var Fn=I(He);y(Wn.$$.fragment,Fn),Pn=r(Fn),Ft=c(Fn,"P",{"data-svelte-h":!0}),f(Ft)!=="svelte-1pc9a3r"&&(Ft.innerHTML=ro),fn=r(Fn),y(on.$$.fragment,Fn),wn=r(Fn),y(sn.$$.fragment,Fn),Fn.forEach(i),Zt.forEach(i),je=r(l),y(xt.$$.fragment,l),Yn=r(l),ae=c(l,"DIV",{class:!0});var qt=I(ae);y(Nn.$$.fragment,qt),An=r(qt),an=c(qt,"P",{"data-svelte-h":!0}),f(an)!=="svelte-1cfp1r5"&&(an.textContent=po),On=r(qt),rn=c(qt,"P",{"data-svelte-h":!0}),f(rn)!=="svelte-x53t1u"&&(rn.innerHTML=uo),Dn=r(qt),Ge=c(qt,"P",{"data-svelte-h":!0}),f(Ge)!=="svelte-1be7e3c"&&(Ge.innerHTML=In),Kn=r(qt),y(Jt.$$.fragment,qt),io=r(qt),Ye=c(qt,"DIV",{class:!0});var mn=I(Ye);y(ut.$$.fragment,mn),eo=r(mn),zt=c(mn,"P",{"data-svelte-h":!0}),f(zt)!=="svelte-yy18cj"&&(zt.innerHTML=to),Cn=r(mn),y(ln.$$.fragment,mn),Re=r(mn),y(ht.$$.fragment,mn),no=r(mn),y(Ut.$$.fragment,mn),mn.forEach(i),qt.forEach(i),oo=r(l),y(vn.$$.fragment,l),$n=r(l),Fe=c(l,"DIV",{class:!0});var Lt=I(Fe);y(jn.$$.fragment,Lt),Zn=r(Lt),En=c(Lt,"P",{"data-svelte-h":!0}),f(En)!=="svelte-1ey3rf7"&&(En.innerHTML=lo),ft=r(Lt),Kt=c(Lt,"P",{"data-svelte-h":!0}),f(Kt)!=="svelte-x53t1u"&&(Kt.innerHTML=co),qn=r(Lt),Qn=c(Lt,"P",{"data-svelte-h":!0}),f(Qn)!=="svelte-1be7e3c"&&(Qn.innerHTML=mo),gn=r(Lt),y(_n.$$.fragment,Lt),bn=r(Lt),Be=c(Lt,"DIV",{class:!0});var pn=I(Be);y(u.$$.fragment,pn),F=r(pn),Se=c(pn,"P",{"data-svelte-h":!0}),f(Se)!=="svelte-16i8yl7"&&(Se.innerHTML=gt),Wt=r(pn),y(me.$$.fragment,pn),Nt=r(pn),y(pe.$$.fragment,pn),st=r(pn),y(ue.$$.fragment,pn),pn.forEach(i),Lt.forEach(i),this.h()},h(){Z(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,v){k(e,l,v),m(l,h,v),m(l,t,v),k(o,t,null),s(t,b),s(t,n),s(t,H),s(t,U),s(t,G),s(t,W),s(t,R),k(p,t,null),s(t,j),s(t,fe),k(ce,fe,null),s(fe,Ln),s(fe,bt),s(fe,Tn),k(Te,fe,null),s(fe,ge),k(oe,fe,null),m(l,yn,v),k(Ue,l,v),m(l,Tt,v),m(l,D,v),k(B,D,null),s(D,yt),s(D,We),s(D,Gt),s(D,kt),s(D,Rt),s(D,Bt),s(D,kn),k(ye,D,null),s(D,Mt),s(D,L),k(Ne,L,null),s(L,Vt),s(L,at),s(L,ke),k(re,L,null),s(L,xn),k(Ie,L,null),m(l,Ee,v),k(Ze,l,v),m(l,Ae,v),m(l,S,v),k(qe,S,null),s(S,un),s(S,_e),s(S,ie),s(S,le),s(S,Et),s(S,rt),s(S,Qt),k(Me,S,null),s(S,wt),s(S,te),k(Oe,te,null),s(te,zn),s(te,de),s(te,Ct),k(we,te,null),s(te,Yt),k(Ke,te,null),s(te,P),k(Ce,te,null),m(l,et,v),k(Le,l,v),m(l,vt,v),m(l,K,v),k(V,K,null),s(K,St),s(K,Pt),s(K,At),s(K,Ot),s(K,Rn),s(K,Dt),s(K,Bn),k(dt,K,null),s(K,A),s(K,X),k($t,X,null),s(X,tt),s(X,hn),s(X,be),k(nt,X,null),s(X,Qe),k(ot,X,null),s(X,g),k(z,X,null),m(l,se,v),k(E,l,v),m(l,Q,v),m(l,Y,v),k(ct,Y,null),s(Y,tn),s(Y,$e),s(Y,jt),s(Y,Vn),s(Y,Un),s(Y,Xn),s(Y,mt),k(pt,Y,null),s(Y,Sn),s(Y,He),k(Wn,He,null),s(He,Pn),s(He,Ft),s(He,fn),k(on,He,null),s(He,wn),k(sn,He,null),m(l,je,v),k(xt,l,v),m(l,Yn,v),m(l,ae,v),k(Nn,ae,null),s(ae,An),s(ae,an),s(ae,On),s(ae,rn),s(ae,Dn),s(ae,Ge),s(ae,Kn),k(Jt,ae,null),s(ae,io),s(ae,Ye),k(ut,Ye,null),s(Ye,eo),s(Ye,zt),s(Ye,Cn),k(ln,Ye,null),s(Ye,Re),k(ht,Ye,null),s(Ye,no),k(Ut,Ye,null),m(l,oo,v),k(vn,l,v),m(l,$n,v),m(l,Fe,v),k(jn,Fe,null),s(Fe,Zn),s(Fe,En),s(Fe,ft),s(Fe,Kt),s(Fe,qn),s(Fe,Qn),s(Fe,gn),k(_n,Fe,null),s(Fe,bn),s(Fe,Be),k(u,Be,null),s(Be,F),s(Be,Se),s(Be,Wt),k(me,Be,null),s(Be,Nt),k(pe,Be,null),s(Be,st),k(ue,Be,null),_t=!0},p(l,v){const ne={};v&2&&(ne.$$scope={dirty:v,ctx:l}),p.$set(ne);const O={};v&2&&(O.$$scope={dirty:v,ctx:l}),Te.$set(O);const en={};v&2&&(en.$$scope={dirty:v,ctx:l}),oe.$set(en);const Pe={};v&2&&(Pe.$$scope={dirty:v,ctx:l}),ye.$set(Pe);const dn={};v&2&&(dn.$$scope={dirty:v,ctx:l}),re.$set(dn);const It={};v&2&&(It.$$scope={dirty:v,ctx:l}),Ie.$set(It);const cn={};v&2&&(cn.$$scope={dirty:v,ctx:l}),Me.$set(cn);const Zt={};v&2&&(Zt.$$scope={dirty:v,ctx:l}),we.$set(Zt);const Fn={};v&2&&(Fn.$$scope={dirty:v,ctx:l}),Ke.$set(Fn);const qt={};v&2&&(qt.$$scope={dirty:v,ctx:l}),Ce.$set(qt);const mn={};v&2&&(mn.$$scope={dirty:v,ctx:l}),dt.$set(mn);const Lt={};v&2&&(Lt.$$scope={dirty:v,ctx:l}),nt.$set(Lt);const pn={};v&2&&(pn.$$scope={dirty:v,ctx:l}),ot.$set(pn);const ho={};v&2&&(ho.$$scope={dirty:v,ctx:l}),z.$set(ho);const fo={};v&2&&(fo.$$scope={dirty:v,ctx:l}),pt.$set(fo);const go={};v&2&&(go.$$scope={dirty:v,ctx:l}),on.$set(go);const _o={};v&2&&(_o.$$scope={dirty:v,ctx:l}),sn.$set(_o);const bo={};v&2&&(bo.$$scope={dirty:v,ctx:l}),Jt.$set(bo);const To={};v&2&&(To.$$scope={dirty:v,ctx:l}),ln.$set(To);const yo={};v&2&&(yo.$$scope={dirty:v,ctx:l}),ht.$set(yo);const ko={};v&2&&(ko.$$scope={dirty:v,ctx:l}),Ut.$set(ko);const Mo={};v&2&&(Mo.$$scope={dirty:v,ctx:l}),_n.$set(Mo);const wo={};v&2&&(wo.$$scope={dirty:v,ctx:l}),me.$set(wo);const Co={};v&2&&(Co.$$scope={dirty:v,ctx:l}),pe.$set(Co);const vo={};v&2&&(vo.$$scope={dirty:v,ctx:l}),ue.$set(vo)},i(l){_t||(M(e.$$.fragment,l),M(o.$$.fragment,l),M(p.$$.fragment,l),M(ce.$$.fragment,l),M(Te.$$.fragment,l),M(oe.$$.fragment,l),M(Ue.$$.fragment,l),M(B.$$.fragment,l),M(ye.$$.fragment,l),M(Ne.$$.fragment,l),M(re.$$.fragment,l),M(Ie.$$.fragment,l),M(Ze.$$.fragment,l),M(qe.$$.fragment,l),M(Me.$$.fragment,l),M(Oe.$$.fragment,l),M(we.$$.fragment,l),M(Ke.$$.fragment,l),M(Ce.$$.fragment,l),M(Le.$$.fragment,l),M(V.$$.fragment,l),M(dt.$$.fragment,l),M($t.$$.fragment,l),M(nt.$$.fragment,l),M(ot.$$.fragment,l),M(z.$$.fragment,l),M(E.$$.fragment,l),M(ct.$$.fragment,l),M(pt.$$.fragment,l),M(Wn.$$.fragment,l),M(on.$$.fragment,l),M(sn.$$.fragment,l),M(xt.$$.fragment,l),M(Nn.$$.fragment,l),M(Jt.$$.fragment,l),M(ut.$$.fragment,l),M(ln.$$.fragment,l),M(ht.$$.fragment,l),M(Ut.$$.fragment,l),M(vn.$$.fragment,l),M(jn.$$.fragment,l),M(_n.$$.fragment,l),M(u.$$.fragment,l),M(me.$$.fragment,l),M(pe.$$.fragment,l),M(ue.$$.fragment,l),_t=!0)},o(l){w(e.$$.fragment,l),w(o.$$.fragment,l),w(p.$$.fragment,l),w(ce.$$.fragment,l),w(Te.$$.fragment,l),w(oe.$$.fragment,l),w(Ue.$$.fragment,l),w(B.$$.fragment,l),w(ye.$$.fragment,l),w(Ne.$$.fragment,l),w(re.$$.fragment,l),w(Ie.$$.fragment,l),w(Ze.$$.fragment,l),w(qe.$$.fragment,l),w(Me.$$.fragment,l),w(Oe.$$.fragment,l),w(we.$$.fragment,l),w(Ke.$$.fragment,l),w(Ce.$$.fragment,l),w(Le.$$.fragment,l),w(V.$$.fragment,l),w(dt.$$.fragment,l),w($t.$$.fragment,l),w(nt.$$.fragment,l),w(ot.$$.fragment,l),w(z.$$.fragment,l),w(E.$$.fragment,l),w(ct.$$.fragment,l),w(pt.$$.fragment,l),w(Wn.$$.fragment,l),w(on.$$.fragment,l),w(sn.$$.fragment,l),w(xt.$$.fragment,l),w(Nn.$$.fragment,l),w(Jt.$$.fragment,l),w(ut.$$.fragment,l),w(ln.$$.fragment,l),w(ht.$$.fragment,l),w(Ut.$$.fragment,l),w(vn.$$.fragment,l),w(jn.$$.fragment,l),w(_n.$$.fragment,l),w(u.$$.fragment,l),w(me.$$.fragment,l),w(pe.$$.fragment,l),w(ue.$$.fragment,l),_t=!1},d(l){l&&(i(h),i(t),i(yn),i(Tt),i(D),i(Ee),i(Ae),i(S),i(et),i(vt),i(K),i(se),i(Q),i(Y),i(je),i(Yn),i(ae),i(oo),i($n),i(Fe)),C(e,l),C(o),C(p),C(ce),C(Te),C(oe),C(Ue,l),C(B),C(ye),C(Ne),C(re),C(Ie),C(Ze,l),C(qe),C(Me),C(Oe),C(we),C(Ke),C(Ce),C(Le,l),C(V),C(dt),C($t),C(nt),C(ot),C(z),C(E,l),C(ct),C(pt),C(Wn),C(on),C(sn),C(xt,l),C(Nn),C(Jt),C(ut),C(ln),C(ht),C(Ut),C(vn,l),C(jn),C(_n),C(u),C(me),C(pe),C(ue)}}}function Cs($){let e,h;return e=new $o({props:{$$slots:{default:[ws]},$$scope:{ctx:$}}}),{c(){T(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p(t,o){const b={};o&2&&(b.$$scope={dirty:o,ctx:t}),e.$set(b)},i(t){h||(M(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){C(e,t)}}}function vs($){let e,h,t,o,b,n,_,H,U,x=`CamemBERT モデルは、<a href="https://arxiv.org/abs/1911.03894" rel="nofollow">CamemBERT: a Tasty French Language Model</a> で提案されました。
Louis Martin, Benjamin Muller, Pedro Javier Ortiz Suárez, Yoann Dupont, Laurent Romary, Éric Villemonte de la
Clergerie, Djamé Seddah, and Benoît Sagot. 2019年にリリースされたFacebookのRoBERTaモデルをベースにしたモデルです。
138GBのフランス語テキストでトレーニングされました。`,G,W,J="論文の要約は次のとおりです。",R,p,j=`<em>事前トレーニングされた言語モデルは現在、自然言語処理で広く普及しています。成功にもかかわらず、利用可能なほとんどの
モデルは英語のデータ、または複数言語のデータの連結でトレーニングされています。これにより、
このようなモデルの実際の使用は、英語を除くすべての言語で非常に限られています。フランス人にとってこの問題に対処することを目指して、
Bi-direction Encoders for Transformers (BERT) のフランス語版である CamemBERT をリリースします。測定します
複数の下流タスク、つまり品詞タグ付けにおける多言語モデルと比較した CamemBERT のパフォーマンス
依存関係解析、固有表現認識、自然言語推論。 CamemBERT は最先端技術を向上させます
検討されているほとんどのタスクに対応します。私たちは、研究と
フランス語 NLP の下流アプリケーション。</em>`,fe,ce,Ln='このモデルは <a href="https://huggingface.co/camembert" rel="nofollow">camembert</a> によって提供されました。元のコードは <a href="https://camembert-model.fr/" rel="nofollow">ここ</a> にあります。',bt,Ve,Tn,Te,ge,oe,yn='<li><a href="../tasks/sequence_classification">テキスト分類タスクガイド</a></li> <li><a href="../tasks/token_classification">トークン分類タスクガイド</a></li> <li><a href="../tasks/question_answering">質問回答タスク ガイド</a></li> <li><a href="../tasks/language_modeling">因果言語モデリング タスク ガイド</a></li> <li><a href="../tasks/masked_language_modeling">マスク言語モデリング タスク ガイド</a></li> <li><a href="../tasks/multiple_choice">多肢選択タスク ガイド</a></li>',Ue,Tt,D,B,yt,We,Ht,Gt=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertModel">CamembertModel</a> or a <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.TFCamembertModel">TFCamembertModel</a>. It is
used to instantiate a Camembert model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Camembert
<a href="https://huggingface.co/almanach/camembert-base" rel="nofollow">almanach/camembert-base</a> architecture.`,kt,ee,Rt=`Configuration objects inherit from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Bt,Xe,kn,ye,Mt,L,Ne,Vt,at,Hn=`Adapted from <code>RobertaTokenizer</code> and <code>XLNetTokenizer</code>. Construct a CamemBERT tokenizer. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.`,ke,re,xn=`This tokenizer inherits from <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Ie,Ee,Ze,Ae,S,qe=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`,un,_e,Jn="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",ie,le,Xt,Et,rt,Gn=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,Qt,Me,wt,te,Oe,zn=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`,de,De,Ct,we,Yt,Ke,P,Ce,et,Le,vt=`Construct a “fast” CamemBERT tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Adapted from
<code>RobertaTokenizer</code> and <code>XLNetTokenizer</code>. Based on
<a href="https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models" rel="nofollow">BPE</a>.`,K,V,St=`This tokenizer inherits from <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,Pt,ve,At,Ot,it,Rn=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`,Dt,lt,Bn="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",dt,A,X,$t,tt,hn=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`,Mn,be,nt,Qe,ot;return b=new Je({props:{title:"CamemBERT",local:"camembert",headingTag:"h1"}}),_=new Je({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Ve=new he({props:{$$slots:{default:[Wo]},$$scope:{ctx:$}}}),Te=new Je({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Tt=new Je({props:{title:"CamembertConfig",local:"transformers.CamembertConfig",headingTag:"h2"}}),yt=new q({props:{name:"class transformers.CamembertConfig",anchor:"transformers.CamembertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CamembertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertModel">CamembertModel</a> or <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.TFCamembertModel">TFCamembertModel</a>.`,name:"vocab_size"},{anchor:"transformers.CamembertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CamembertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CamembertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CamembertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CamembertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.CamembertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.CamembertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.CamembertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.CamembertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertModel">CamembertModel</a> or <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.TFCamembertModel">TFCamembertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.CamembertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CamembertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.CamembertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.CamembertConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as a decoder or not. If <code>False</code>, the model is used as an encoder.`,name:"is_decoder"},{anchor:"transformers.CamembertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.CamembertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/configuration_camembert.py#L39"}}),Xe=new xe({props:{anchor:"transformers.CamembertConfig.example",$$slots:{default:[No]},$$scope:{ctx:$}}}),ye=new Je({props:{title:"CamembertTokenizer",local:"transformers.CamembertTokenizer",headingTag:"h2"}}),Ne=new q({props:{name:"class transformers.CamembertTokenizer",anchor:"transformers.CamembertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<s>NOTUSED', '</s>NOTUSED', '<unk>NOTUSED']"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.CamembertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.CamembertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.CamembertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.CamembertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.CamembertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CamembertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.CamembertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.CamembertTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&apos;&lt;s&gt;NOTUSED&apos;, &apos;&lt;/s&gt;NOTUSED&apos;, &apos;&lt;unk&gt;NOTUSED&apos;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.CamembertTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.CamembertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L45"}}),Ze=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L256",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Xt=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.CamembertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L282",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),wt=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L309",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ct=new q({props:{name:"save_vocabulary",anchor:"transformers.CamembertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L239"}}),Yt=new Je({props:{title:"CamembertTokenizerFast",local:"transformers.CamembertTokenizerFast",headingTag:"h2"}}),Ce=new q({props:{name:"class transformers.CamembertTokenizerFast",anchor:"transformers.CamembertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<s>NOTUSED', '</s>NOTUSED', '<unk>NOTUSED']"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.CamembertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.CamembertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.CamembertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.CamembertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.CamembertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CamembertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.CamembertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.CamembertTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L53"}}),At=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L147",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),X=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L173",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),be=new Uo({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Cs],pytorch:[Oo]},$$scope:{ctx:$}}}),{c(){e=d("meta"),h=a(),t=d("p"),o=a(),T(b.$$.fragment),n=a(),T(_.$$.fragment),H=a(),U=d("p"),U.innerHTML=x,G=a(),W=d("p"),W.textContent=J,R=a(),p=d("p"),p.innerHTML=j,fe=a(),ce=d("p"),ce.innerHTML=Ln,bt=a(),T(Ve.$$.fragment),Tn=a(),T(Te.$$.fragment),ge=a(),oe=d("ul"),oe.innerHTML=yn,Ue=a(),T(Tt.$$.fragment),D=a(),B=d("div"),T(yt.$$.fragment),We=a(),Ht=d("p"),Ht.innerHTML=Gt,kt=a(),ee=d("p"),ee.innerHTML=Rt,Bt=a(),T(Xe.$$.fragment),kn=a(),T(ye.$$.fragment),Mt=a(),L=d("div"),T(Ne.$$.fragment),Vt=a(),at=d("p"),at.innerHTML=Hn,ke=a(),re=d("p"),re.innerHTML=xn,Ie=a(),Ee=d("div"),T(Ze.$$.fragment),Ae=a(),S=d("p"),S.textContent=qe,un=a(),_e=d("ul"),_e.innerHTML=Jn,ie=a(),le=d("div"),T(Xt.$$.fragment),Et=a(),rt=d("p"),rt.innerHTML=Gn,Qt=a(),Me=d("div"),T(wt.$$.fragment),te=a(),Oe=d("p"),Oe.textContent=zn,de=a(),De=d("div"),T(Ct.$$.fragment),we=a(),T(Yt.$$.fragment),Ke=a(),P=d("div"),T(Ce.$$.fragment),et=a(),Le=d("p"),Le.innerHTML=vt,K=a(),V=d("p"),V.innerHTML=St,Pt=a(),ve=d("div"),T(At.$$.fragment),Ot=a(),it=d("p"),it.textContent=Rn,Dt=a(),lt=d("ul"),lt.innerHTML=Bn,dt=a(),A=d("div"),T(X.$$.fragment),$t=a(),tt=d("p"),tt.textContent=hn,Mn=a(),T(be.$$.fragment),nt=a(),Qe=d("p"),this.h()},l(g){const z=zo("svelte-u9bgzb",document.head);e=c(z,"META",{name:!0,content:!0}),z.forEach(i),h=r(g),t=c(g,"P",{}),I(t).forEach(i),o=r(g),y(b.$$.fragment,g),n=r(g),y(_.$$.fragment,g),H=r(g),U=c(g,"P",{"data-svelte-h":!0}),f(U)!=="svelte-4l2b1m"&&(U.innerHTML=x),G=r(g),W=c(g,"P",{"data-svelte-h":!0}),f(W)!=="svelte-1cv3nri"&&(W.textContent=J),R=r(g),p=c(g,"P",{"data-svelte-h":!0}),f(p)!=="svelte-1j2b5pg"&&(p.innerHTML=j),fe=r(g),ce=c(g,"P",{"data-svelte-h":!0}),f(ce)!=="svelte-sqzgfq"&&(ce.innerHTML=Ln),bt=r(g),y(Ve.$$.fragment,g),Tn=r(g),y(Te.$$.fragment,g),ge=r(g),oe=c(g,"UL",{"data-svelte-h":!0}),f(oe)!=="svelte-1r9t96i"&&(oe.innerHTML=yn),Ue=r(g),y(Tt.$$.fragment,g),D=r(g),B=c(g,"DIV",{class:!0});var se=I(B);y(yt.$$.fragment,se),We=r(se),Ht=c(se,"P",{"data-svelte-h":!0}),f(Ht)!=="svelte-d4jnvg"&&(Ht.innerHTML=Gt),kt=r(se),ee=c(se,"P",{"data-svelte-h":!0}),f(ee)!=="svelte-1s6wgpv"&&(ee.innerHTML=Rt),Bt=r(se),y(Xe.$$.fragment,se),se.forEach(i),kn=r(g),y(ye.$$.fragment,g),Mt=r(g),L=c(g,"DIV",{class:!0});var E=I(L);y(Ne.$$.fragment,E),Vt=r(E),at=c(E,"P",{"data-svelte-h":!0}),f(at)!=="svelte-mg2172"&&(at.innerHTML=Hn),ke=r(E),re=c(E,"P",{"data-svelte-h":!0}),f(re)!=="svelte-rs9us"&&(re.innerHTML=xn),Ie=r(E),Ee=c(E,"DIV",{class:!0});var Q=I(Ee);y(Ze.$$.fragment,Q),Ae=r(Q),S=c(Q,"P",{"data-svelte-h":!0}),f(S)!=="svelte-dvyskh"&&(S.textContent=qe),un=r(Q),_e=c(Q,"UL",{"data-svelte-h":!0}),f(_e)!=="svelte-rq8uot"&&(_e.innerHTML=Jn),Q.forEach(i),ie=r(E),le=c(E,"DIV",{class:!0});var Y=I(le);y(Xt.$$.fragment,Y),Et=r(Y),rt=c(Y,"P",{"data-svelte-h":!0}),f(rt)!=="svelte-1f4f5kp"&&(rt.innerHTML=Gn),Y.forEach(i),Qt=r(E),Me=c(E,"DIV",{class:!0});var ct=I(Me);y(wt.$$.fragment,ct),te=r(ct),Oe=c(ct,"P",{"data-svelte-h":!0}),f(Oe)!=="svelte-tyio8x"&&(Oe.textContent=zn),ct.forEach(i),de=r(E),De=c(E,"DIV",{class:!0});var tn=I(De);y(Ct.$$.fragment,tn),tn.forEach(i),E.forEach(i),we=r(g),y(Yt.$$.fragment,g),Ke=r(g),P=c(g,"DIV",{class:!0});var $e=I(P);y(Ce.$$.fragment,$e),et=r($e),Le=c($e,"P",{"data-svelte-h":!0}),f(Le)!=="svelte-1z0oeiv"&&(Le.innerHTML=vt),K=r($e),V=c($e,"P",{"data-svelte-h":!0}),f(V)!=="svelte-y6yfrk"&&(V.innerHTML=St),Pt=r($e),ve=c($e,"DIV",{class:!0});var nn=I(ve);y(At.$$.fragment,nn),Ot=r(nn),it=c(nn,"P",{"data-svelte-h":!0}),f(it)!=="svelte-dvyskh"&&(it.textContent=Rn),Dt=r(nn),lt=c(nn,"UL",{"data-svelte-h":!0}),f(lt)!=="svelte-rq8uot"&&(lt.innerHTML=Bn),nn.forEach(i),dt=r($e),A=c($e,"DIV",{class:!0});var jt=I(A);y(X.$$.fragment,jt),$t=r(jt),tt=c(jt,"P",{"data-svelte-h":!0}),f(tt)!=="svelte-tyio8x"&&(tt.textContent=hn),jt.forEach(i),$e.forEach(i),Mn=r(g),y(be.$$.fragment,g),nt=r(g),Qe=c(g,"P",{}),I(Qe).forEach(i),this.h()},h(){Z(e,"name","hf:doc:metadata"),Z(e,"content",$s),Z(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(g,z){s(document.head,e),m(g,h,z),m(g,t,z),m(g,o,z),k(b,g,z),m(g,n,z),k(_,g,z),m(g,H,z),m(g,U,z),m(g,G,z),m(g,W,z),m(g,R,z),m(g,p,z),m(g,fe,z),m(g,ce,z),m(g,bt,z),k(Ve,g,z),m(g,Tn,z),k(Te,g,z),m(g,ge,z),m(g,oe,z),m(g,Ue,z),k(Tt,g,z),m(g,D,z),m(g,B,z),k(yt,B,null),s(B,We),s(B,Ht),s(B,kt),s(B,ee),s(B,Bt),k(Xe,B,null),m(g,kn,z),k(ye,g,z),m(g,Mt,z),m(g,L,z),k(Ne,L,null),s(L,Vt),s(L,at),s(L,ke),s(L,re),s(L,Ie),s(L,Ee),k(Ze,Ee,null),s(Ee,Ae),s(Ee,S),s(Ee,un),s(Ee,_e),s(L,ie),s(L,le),k(Xt,le,null),s(le,Et),s(le,rt),s(L,Qt),s(L,Me),k(wt,Me,null),s(Me,te),s(Me,Oe),s(L,de),s(L,De),k(Ct,De,null),m(g,we,z),k(Yt,g,z),m(g,Ke,z),m(g,P,z),k(Ce,P,null),s(P,et),s(P,Le),s(P,K),s(P,V),s(P,Pt),s(P,ve),k(At,ve,null),s(ve,Ot),s(ve,it),s(ve,Dt),s(ve,lt),s(P,dt),s(P,A),k(X,A,null),s(A,$t),s(A,tt),m(g,Mn,z),k(be,g,z),m(g,nt,z),m(g,Qe,z),ot=!0},p(g,[z]){const se={};z&2&&(se.$$scope={dirty:z,ctx:g}),Ve.$set(se);const E={};z&2&&(E.$$scope={dirty:z,ctx:g}),Xe.$set(E);const Q={};z&2&&(Q.$$scope={dirty:z,ctx:g}),be.$set(Q)},i(g){ot||(M(b.$$.fragment,g),M(_.$$.fragment,g),M(Ve.$$.fragment,g),M(Te.$$.fragment,g),M(Tt.$$.fragment,g),M(yt.$$.fragment,g),M(Xe.$$.fragment,g),M(ye.$$.fragment,g),M(Ne.$$.fragment,g),M(Ze.$$.fragment,g),M(Xt.$$.fragment,g),M(wt.$$.fragment,g),M(Ct.$$.fragment,g),M(Yt.$$.fragment,g),M(Ce.$$.fragment,g),M(At.$$.fragment,g),M(X.$$.fragment,g),M(be.$$.fragment,g),ot=!0)},o(g){w(b.$$.fragment,g),w(_.$$.fragment,g),w(Ve.$$.fragment,g),w(Te.$$.fragment,g),w(Tt.$$.fragment,g),w(yt.$$.fragment,g),w(Xe.$$.fragment,g),w(ye.$$.fragment,g),w(Ne.$$.fragment,g),w(Ze.$$.fragment,g),w(Xt.$$.fragment,g),w(wt.$$.fragment,g),w(Ct.$$.fragment,g),w(Yt.$$.fragment,g),w(Ce.$$.fragment,g),w(At.$$.fragment,g),w(X.$$.fragment,g),w(be.$$.fragment,g),ot=!1},d(g){g&&(i(h),i(t),i(o),i(n),i(H),i(U),i(G),i(W),i(R),i(p),i(fe),i(ce),i(bt),i(Tn),i(ge),i(oe),i(Ue),i(D),i(B),i(kn),i(Mt),i(L),i(we),i(Ke),i(P),i(Mn),i(nt),i(Qe)),i(e),C(b,g),C(_,g),C(Ve,g),C(Te,g),C(Tt,g),C(yt),C(Xe),C(ye,g),C(Ne),C(Ze),C(Xt),C(wt),C(Ct),C(Yt,g),C(Ce),C(At),C(X),C(be,g)}}}const $s='{"title":"CamemBERT","local":"camembert","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"CamembertConfig","local":"transformers.CamembertConfig","sections":[],"depth":2},{"title":"CamembertTokenizer","local":"transformers.CamembertTokenizer","sections":[],"depth":2},{"title":"CamembertTokenizerFast","local":"transformers.CamembertTokenizerFast","sections":[],"depth":2},{"title":"CamembertModel","local":"transformers.CamembertModel","sections":[],"depth":2},{"title":"CamembertForCausalLM","local":"transformers.CamembertForCausalLM","sections":[],"depth":2},{"title":"CamembertForMaskedLM","local":"transformers.CamembertForMaskedLM","sections":[],"depth":2},{"title":"CamembertForSequenceClassification","local":"transformers.CamembertForSequenceClassification","sections":[],"depth":2},{"title":"CamembertForMultipleChoice","local":"transformers.CamembertForMultipleChoice","sections":[],"depth":2},{"title":"CamembertForTokenClassification","local":"transformers.CamembertForTokenClassification","sections":[],"depth":2},{"title":"CamembertForQuestionAnswering","local":"transformers.CamembertForQuestionAnswering","sections":[],"depth":2},{"title":"TFCamembertModel","local":"transformers.TFCamembertModel","sections":[],"depth":2},{"title":"TFCamembertForCasualLM","local":"transformers.TFCamembertForCausalLM","sections":[],"depth":2},{"title":"TFCamembertForMaskedLM","local":"transformers.TFCamembertForMaskedLM","sections":[],"depth":2},{"title":"TFCamembertForSequenceClassification","local":"transformers.TFCamembertForSequenceClassification","sections":[],"depth":2},{"title":"TFCamembertForMultipleChoice","local":"transformers.TFCamembertForMultipleChoice","sections":[],"depth":2},{"title":"TFCamembertForTokenClassification","local":"transformers.TFCamembertForTokenClassification","sections":[],"depth":2},{"title":"TFCamembertForQuestionAnswering","local":"transformers.TFCamembertForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function js($){return Fo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zs extends xo{constructor(e){super(),Jo(this,e,js,vs,jo,{})}}export{Zs as component};
