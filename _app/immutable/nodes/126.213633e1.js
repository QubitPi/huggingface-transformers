import{s as Qs,o as Ds,n as F}from"../chunks/scheduler.9bc65507.js";import{S as Ys,i as Ks,g as l,s,r as u,A as er,h as c,f as i,c as r,j as v,u as f,x as h,k as $,y as n,a as m,v as g,d as _,t as b,w as y}from"../chunks/index.707bf1b6.js";import{T as me}from"../chunks/Tip.c2ecdbf4.js";import{D as E}from"../chunks/Docstring.17db21ae.js";import{C as Ce}from"../chunks/CodeBlock.54a9f38d.js";import{E as bt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as C}from"../chunks/Heading.342b1fa6.js";function tr(w){let t,k="Examples:",d,p,T;return p=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEVybmllQ29uZmlnJTJDJTIwRXJuaWVNb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBFUk5JRSUyMG5naHV5b25nJTJGZXJuaWUtMy4wLWJhc2UtemglMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwRXJuaWVDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMCh3aXRoJTIwcmFuZG9tJTIwd2VpZ2h0cyklMjBmcm9tJTIwdGhlJTIwbmdodXlvbmclMkZlcm5pZS0zLjAtYmFzZS16aCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwRXJuaWVNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ErnieConfig, ErnieModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ERNIE nghuyong/ernie-3.0-base-zh style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ErnieConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the nghuyong/ernie-3.0-base-zh style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),u(p.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=k),d=r(o),f(p.$$.fragment,o)},m(o,M){m(o,t,M),m(o,d,M),g(p,o,M),T=!0},p:F,i(o){T||(_(p.$$.fragment,o),T=!0)},o(o){b(p.$$.fragment,o),T=!1},d(o){o&&(i(t),i(d)),y(p,o)}}}function nr(w){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){m(d,t,p)},p:F,d(d){d&&i(t)}}}function or(w){let t,k="Example:",d,p,T;return p=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFcm5pZU1vZGVsJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJuZ2h1eW9uZyUyRmVybmllLTEuMC1iYXNlLXpoJTIyKSUwQW1vZGVsJTIwJTNEJTIwRXJuaWVNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIybmdodXlvbmclMkZlcm5pZS0xLjAtYmFzZS16aCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieModel.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),u(p.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=k),d=r(o),f(p.$$.fragment,o)},m(o,M){m(o,t,M),m(o,d,M),g(p,o,M),T=!0},p:F,i(o){T||(_(p.$$.fragment,o),T=!0)},o(o){b(p.$$.fragment,o),T=!1},d(o){o&&(i(t),i(d)),y(p,o)}}}function sr(w){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){m(d,t,p)},p:F,d(d){d&&i(t)}}}function rr(w){let t,k="Example:",d,p,T;return p=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFcm5pZUZvclByZVRyYWluaW5nJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJuZ2h1eW9uZyUyRmVybmllLTEuMC1iYXNlLXpoJTIyKSUwQW1vZGVsJTIwJTNEJTIwRXJuaWVGb3JQcmVUcmFpbmluZy5mcm9tX3ByZXRyYWluZWQoJTIybmdodXlvbmclMkZlcm5pZS0xLjAtYmFzZS16aCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQXByZWRpY3Rpb25fbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5wcmVkaWN0aW9uX2xvZ2l0cyUwQXNlcV9yZWxhdGlvbnNoaXBfbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5zZXFfcmVsYXRpb25zaGlwX2xvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieForPreTraining.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),u(p.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=k),d=r(o),f(p.$$.fragment,o)},m(o,M){m(o,t,M),m(o,d,M),g(p,o,M),T=!0},p:F,i(o){T||(_(p.$$.fragment,o),T=!0)},o(o){b(p.$$.fragment,o),T=!1},d(o){o&&(i(t),i(d)),y(p,o)}}}function ar(w){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){m(d,t,p)},p:F,d(d){d&&i(t)}}}function ir(w){let t,k="Example:",d,p,T;return p=new Ce({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEVybmllRm9yQ2F1c2FsTE0lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJuZ2h1eW9uZyUyRmVybmllLTEuMC1iYXNlLXpoJTIyKSUwQW1vZGVsJTIwJTNEJTIwRXJuaWVGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIybmdodXlvbmclMkZlcm5pZS0xLjAtYmFzZS16aCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieForCausalLM.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),u(p.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=k),d=r(o),f(p.$$.fragment,o)},m(o,M){m(o,t,M),m(o,d,M),g(p,o,M),T=!0},p:F,i(o){T||(_(p.$$.fragment,o),T=!0)},o(o){b(p.$$.fragment,o),T=!1},d(o){o&&(i(t),i(d)),y(p,o)}}}function dr(w){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){m(d,t,p)},p:F,d(d){d&&i(t)}}}function lr(w){let t,k="Example:",d,p,T;return p=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFcm5pZUZvck1hc2tlZExNJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJuZ2h1eW9uZyUyRmVybmllLTEuMC1iYXNlLXpoJTIyKSUwQW1vZGVsJTIwJTNEJTIwRXJuaWVGb3JNYXNrZWRMTS5mcm9tX3ByZXRyYWluZWQoJTIybmdodXlvbmclMkZlcm5pZS0xLjAtYmFzZS16aCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjAlNUJNQVNLJTVELiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEElMjMlMjByZXRyaWV2ZSUyMGluZGV4JTIwb2YlMjAlNUJNQVNLJTVEJTBBbWFza190b2tlbl9pbmRleCUyMCUzRCUyMChpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQpJTVCMCU1RC5ub256ZXJvKGFzX3R1cGxlJTNEVHJ1ZSklNUIwJTVEJTBBJTBBcHJlZGljdGVkX3Rva2VuX2lkJTIwJTNEJTIwbG9naXRzJTVCMCUyQyUyMG1hc2tfdG9rZW5faW5kZXglNUQuYXJnbWF4KGF4aXMlM0QtMSklMEF0b2tlbml6ZXIuZGVjb2RlKHByZWRpY3RlZF90b2tlbl9pZCklMEElMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjBQYXJpcy4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQSUyMyUyMG1hc2slMjBsYWJlbHMlMjBvZiUyMG5vbi0lNUJNQVNLJTVEJTIwdG9rZW5zJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gud2hlcmUoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkJTJDJTIwbGFiZWxzJTJDJTIwLTEwMCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTBBcm91bmQob3V0cHV0cy5sb3NzLml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieForMaskedLM.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),u(p.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=k),d=r(o),f(p.$$.fragment,o)},m(o,M){m(o,t,M),m(o,d,M),g(p,o,M),T=!0},p:F,i(o){T||(_(p.$$.fragment,o),T=!0)},o(o){b(p.$$.fragment,o),T=!1},d(o){o&&(i(t),i(d)),y(p,o)}}}function cr(w){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){m(d,t,p)},p:F,d(d){d&&i(t)}}}function pr(w){let t,k="Example:",d,p,T;return p=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFcm5pZUZvck5leHRTZW50ZW5jZVByZWRpY3Rpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm5naHV5b25nJTJGZXJuaWUtMS4wLWJhc2UtemglMjIpJTBBbW9kZWwlMjAlM0QlMjBFcm5pZUZvck5leHRTZW50ZW5jZVByZWRpY3Rpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm5naHV5b25nJTJGZXJuaWUtMS4wLWJhc2UtemglMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQW5leHRfc2VudGVuY2UlMjAlM0QlMjAlMjJUaGUlMjBza3klMjBpcyUyMGJsdWUlMjBkdWUlMjB0byUyMHRoZSUyMHNob3J0ZXIlMjB3YXZlbGVuZ3RoJTIwb2YlMjBibHVlJTIwbGlnaHQuJTIyJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIocHJvbXB0JTJDJTIwbmV4dF9zZW50ZW5jZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmclMkMlMjBsYWJlbHMlM0R0b3JjaC5Mb25nVGVuc29yKCU1QjElNUQpKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRzJTBBYXNzZXJ0JTIwbG9naXRzJTVCMCUyQyUyMDAlNUQlMjAlM0MlMjBsb2dpdHMlNUIwJTJDJTIwMSU1RCUyMCUyMCUyMyUyMG5leHQlMjBzZW50ZW5jZSUyMHdhcyUyMHJhbmRvbQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),u(p.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=k),d=r(o),f(p.$$.fragment,o)},m(o,M){m(o,t,M),m(o,d,M),g(p,o,M),T=!0},p:F,i(o){T||(_(p.$$.fragment,o),T=!0)},o(o){b(p.$$.fragment,o),T=!1},d(o){o&&(i(t),i(d)),y(p,o)}}}function mr(w){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){m(d,t,p)},p:F,d(d){d&&i(t)}}}function hr(w){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){m(d,t,p)},p:F,d(d){d&&i(t)}}}function ur(w){let t,k="Example:",d,p,T;return p=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFcm5pZUZvck11bHRpcGxlQ2hvaWNlJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJuZ2h1eW9uZyUyRmVybmllLTEuMC1iYXNlLXpoJTIyKSUwQW1vZGVsJTIwJTNEJTIwRXJuaWVGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIybmdodXlvbmclMkZlcm5pZS0xLjAtYmFzZS16aCUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBY2hvaWNlMCUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdpdGglMjBhJTIwZm9yayUyMGFuZCUyMGElMjBrbmlmZS4lMjIlMEFjaG9pY2UxJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2hpbGUlMjBoZWxkJTIwaW4lMjB0aGUlMjBoYW5kLiUyMiUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvcigwKS51bnNxdWVlemUoMCklMjAlMjAlMjMlMjBjaG9pY2UwJTIwaXMlMjBjb3JyZWN0JTIwKGFjY29yZGluZyUyMHRvJTIwV2lraXBlZGlhJTIwJTNCKSklMkMlMjBiYXRjaCUyMHNpemUlMjAxJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTVCcHJvbXB0JTJDJTIwcHJvbXB0JTVEJTJDJTIwJTVCY2hvaWNlMCUyQyUyMGNob2ljZTElNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqJTdCayUzQSUyMHYudW5zcXVlZXplKDApJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTIwJTIwJTIzJTIwYmF0Y2glMjBzaXplJTIwaXMlMjAxJTBBJTBBJTIzJTIwdGhlJTIwbGluZWFyJTIwY2xhc3NpZmllciUyMHN0aWxsJTIwbmVlZHMlMjB0byUyMGJlJTIwdHJhaW5lZCUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),u(p.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=k),d=r(o),f(p.$$.fragment,o)},m(o,M){m(o,t,M),m(o,d,M),g(p,o,M),T=!0},p:F,i(o){T||(_(p.$$.fragment,o),T=!0)},o(o){b(p.$$.fragment,o),T=!1},d(o){o&&(i(t),i(d)),y(p,o)}}}function fr(w){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){m(d,t,p)},p:F,d(d){d&&i(t)}}}function gr(w){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){m(d,t,p)},p:F,d(d){d&&i(t)}}}function _r(w){let t,k,d,p,T,o,M,cn,Fe,os=`ERNIE is a series of powerful models proposed by baidu, especially in Chinese tasks,
including <a href="https://arxiv.org/abs/1904.09223" rel="nofollow">ERNIE1.0</a>, <a href="https://ojs.aaai.org/index.php/AAAI/article/view/6428" rel="nofollow">ERNIE2.0</a>,
<a href="https://arxiv.org/abs/2107.02137" rel="nofollow">ERNIE3.0</a>, <a href="https://arxiv.org/abs/2010.12148" rel="nofollow">ERNIE-Gram</a>, <a href="https://arxiv.org/abs/2110.07244" rel="nofollow">ERNIE-health</a>, etc.`,pn,Je,ss='These models are contributed by <a href="https://huggingface.co/nghuyong" rel="nofollow">nghuyong</a> and the official code can be found in <a href="https://github.com/PaddlePaddle/PaddleNLP" rel="nofollow">PaddleNLP</a> (in PaddlePaddle).',mn,je,hn,Le,rs="Take <code>ernie-1.0-base-zh</code> as an example:",un,Ie,fn,qe,gn,Ue,as='<thead><tr><th align="center">Model Name</th> <th align="center">Language</th> <th align="center">Description</th></tr></thead> <tbody><tr><td align="center">ernie-1.0-base-zh</td> <td align="center">Chinese</td> <td align="center">Layer:12, Heads:12, Hidden:768</td></tr> <tr><td align="center">ernie-2.0-base-en</td> <td align="center">English</td> <td align="center">Layer:12, Heads:12, Hidden:768</td></tr> <tr><td align="center">ernie-2.0-large-en</td> <td align="center">English</td> <td align="center">Layer:24, Heads:16, Hidden:1024</td></tr> <tr><td align="center">ernie-3.0-base-zh</td> <td align="center">Chinese</td> <td align="center">Layer:12, Heads:12, Hidden:768</td></tr> <tr><td align="center">ernie-3.0-medium-zh</td> <td align="center">Chinese</td> <td align="center">Layer:6, Heads:12, Hidden:768</td></tr> <tr><td align="center">ernie-3.0-mini-zh</td> <td align="center">Chinese</td> <td align="center">Layer:6, Heads:12, Hidden:384</td></tr> <tr><td align="center">ernie-3.0-micro-zh</td> <td align="center">Chinese</td> <td align="center">Layer:4, Heads:12, Hidden:384</td></tr> <tr><td align="center">ernie-3.0-nano-zh</td> <td align="center">Chinese</td> <td align="center">Layer:4, Heads:12, Hidden:312</td></tr> <tr><td align="center">ernie-health-zh</td> <td align="center">Chinese</td> <td align="center">Layer:12, Heads:12, Hidden:768</td></tr> <tr><td align="center">ernie-gram-zh</td> <td align="center">Chinese</td> <td align="center">Layer:12, Heads:12, Hidden:768</td></tr></tbody>',_n,Pe,is=`You can find all the supported models from huggingface’s model hub: <a href="https://huggingface.co/nghuyong" rel="nofollow">huggingface.co/nghuyong</a>, and model details from paddle’s official
repo: <a href="https://paddlenlp.readthedocs.io/zh/latest/model_zoo/transformers/ERNIE/contents.html" rel="nofollow">PaddleNLP</a>
and <a href="https://github.com/PaddlePaddle/ERNIE/blob/repro" rel="nofollow">ERNIE</a>.`,bn,We,yn,Ne,ds='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',kn,He,Tn,N,Ze,Vn,yt,ls=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieModel">ErnieModel</a> or a <code>TFErnieModel</code>. It is used to
instantiate a ERNIE model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ERNIE
<a href="https://huggingface.co/nghuyong/ernie-3.0-base-zh" rel="nofollow">nghuyong/ernie-3.0-base-zh</a> architecture.`,On,kt,cs=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Rn,he,Mn,Se,wn,ce,Be,Xn,Tt,ps='Output type of <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForPreTraining">ErnieForPreTraining</a>.',vn,Ve,$n,x,Oe,Gn,Mt,ms="The bare Ernie Model transformer outputting raw hidden-states without any specific head on top.",An,wt,hs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Qn,vt,us=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Dn,$t,fs=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">Attention is
all you need</a> by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`,Yn,Et,gs=`To behave as an decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set
to <code>True</code>. To be used in a Seq2Seq model, the model needs to initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,Kn,R,Re,eo,xt,_s='The <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieModel">ErnieModel</a> forward method, overrides the <code>__call__</code> special method.',to,ue,no,fe,En,Xe,xn,J,Ge,oo,zt,bs="Ernie Model with two heads on top as done during the pretraining: a <code>masked language modeling</code> head and a <code>next sentence prediction (classification)</code> head.",so,Ct,ys=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ro,Ft,ks=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ao,X,Ae,io,Jt,Ts='The <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForPreTraining">ErnieForPreTraining</a> forward method, overrides the <code>__call__</code> special method.',lo,ge,co,_e,zn,Qe,Cn,j,De,po,jt,Ms="Ernie Model with a <code>language modeling</code> head on top for CLM fine-tuning.",mo,Lt,ws=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ho,It,vs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,uo,G,Ye,fo,qt,$s='The <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForCausalLM">ErnieForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',go,be,_o,ye,Fn,Ke,Jn,L,et,bo,Ut,Es="Ernie Model with a <code>language modeling</code> head on top.",yo,Pt,xs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ko,Wt,zs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,To,A,tt,Mo,Nt,Cs='The <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForMaskedLM">ErnieForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',wo,ke,vo,Te,jn,nt,Ln,I,ot,$o,Ht,Fs="Ernie Model with a <code>next sentence prediction (classification)</code> head on top.",Eo,Zt,Js=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,xo,St,js=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,zo,Q,st,Co,Bt,Ls='The <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForNextSentencePrediction">ErnieForNextSentencePrediction</a> forward method, overrides the <code>__call__</code> special method.',Fo,Me,Jo,we,In,rt,qn,q,at,jo,Vt,Is=`Ernie Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,Lo,Ot,qs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Io,Rt,Us=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,qo,re,it,Uo,Xt,Ps='The <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForSequenceClassification">ErnieForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Po,ve,Un,dt,Pn,U,lt,Wo,Gt,Ws=`Ernie Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,No,At,Ns=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ho,Qt,Hs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Zo,D,ct,So,Dt,Zs='The <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForMultipleChoice">ErnieForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Bo,$e,Vo,Ee,Wn,pt,Nn,P,mt,Oo,Yt,Ss=`Ernie Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Ro,Kt,Bs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Xo,en,Vs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Go,ae,ht,Ao,tn,Os='The <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForTokenClassification">ErnieForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Qo,xe,Hn,ut,Zn,W,ft,Do,nn,Rs=`Ernie Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Yo,on,Xs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ko,sn,Gs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,es,ie,gt,ts,rn,As='The <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForQuestionAnswering">ErnieForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',ns,ze,Sn,ln,Bn;return T=new C({props:{title:"ERNIE",local:"ernie",headingTag:"h1"}}),M=new C({props:{title:"Overview",local:"overview",headingTag:"h2"}}),je=new C({props:{title:"Usage example",local:"usage-example",headingTag:"h3"}}),Ie=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBdXRvTW9kZWwlMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJuZ2h1eW9uZyUyRmVybmllLTEuMC1iYXNlLXpoJTIyKSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsLmZyb21fcHJldHJhaW5lZCglMjJuZ2h1eW9uZyUyRmVybmllLTEuMC1iYXNlLXpoJTIyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel
tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)`,wrap:!1}}),qe=new C({props:{title:"Model checkpoints",local:"model-checkpoints",headingTag:"h3"}}),We=new C({props:{title:"Resources",local:"resources",headingTag:"h2"}}),He=new C({props:{title:"ErnieConfig",local:"transformers.ErnieConfig",headingTag:"h2"}}),Ze=new E({props:{name:"class transformers.ErnieConfig",anchor:"transformers.ErnieConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"task_type_vocab_size",val:" = 3"},{name:"use_task_id",val:" = False"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ErnieConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ERNIE model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieModel">ErnieModel</a> or <code>TFErnieModel</code>.`,name:"vocab_size"},{anchor:"transformers.ErnieConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ErnieConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ErnieConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ErnieConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ErnieConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ErnieConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ErnieConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ErnieConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.ErnieConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieModel">ErnieModel</a> or <code>TFErnieModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.ErnieConfig.task_type_vocab_size",description:`<strong>task_type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The vocabulary size of the <code>task_type_ids</code> for ERNIE2.0/ERNIE3.0 model`,name:"task_type_vocab_size"},{anchor:"transformers.ErnieConfig.use_task_id",description:`<strong>use_task_id</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model support <code>task_type_ids</code>`,name:"use_task_id"},{anchor:"transformers.ErnieConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ErnieConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ErnieConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.ErnieConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.ErnieConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.ErnieConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/configuration_ernie.py#L41"}}),he=new bt({props:{anchor:"transformers.ErnieConfig.example",$$slots:{default:[tr]},$$scope:{ctx:w}}}),Se=new C({props:{title:"Ernie specific outputs",local:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput",headingTag:"h2"}}),Be=new E({props:{name:"class transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput",anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L682"}}),Ve=new C({props:{title:"ErnieModel",local:"transformers.ErnieModel",headingTag:"h2"}}),Oe=new E({props:{name:"class transformers.ErnieModel",anchor:"transformers.ErnieModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ErnieModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L788"}}),Re=new E({props:{name:"forward",anchor:"transformers.ErnieModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"task_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieModel.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ErnieModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ErnieModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ErnieModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L835",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ue=new me({props:{$$slots:{default:[nr]},$$scope:{ctx:w}}}),fe=new bt({props:{anchor:"transformers.ErnieModel.forward.example",$$slots:{default:[or]},$$scope:{ctx:w}}}),Xe=new C({props:{title:"ErnieForPreTraining",local:"transformers.ErnieForPreTraining",headingTag:"h2"}}),Ge=new E({props:{name:"class transformers.ErnieForPreTraining",anchor:"transformers.ErnieForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L974"}}),Ae=new E({props:{name:"forward",anchor:"transformers.ErnieForPreTraining.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"task_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"next_sentence_label",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForPreTraining.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>labels (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
next_sentence_label (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>):
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence
pair (see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.
kwargs (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>):
Used to hide legacy arguments that have been deprecated.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1003",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput"
>transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) — Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) — Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput"
>transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ge=new me({props:{$$slots:{default:[sr]},$$scope:{ctx:w}}}),_e=new bt({props:{anchor:"transformers.ErnieForPreTraining.forward.example",$$slots:{default:[rr]},$$scope:{ctx:w}}}),Qe=new C({props:{title:"ErnieForCausalLM",local:"transformers.ErnieForCausalLM",headingTag:"h2"}}),De=new E({props:{name:"class transformers.ErnieForCausalLM",anchor:"transformers.ErnieForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1090"}}),Ye=new E({props:{name:"forward",anchor:"transformers.ErnieForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"task_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForCausalLM.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ErnieForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ErnieForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.ErnieForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ErnieForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1118",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),be=new me({props:{$$slots:{default:[ar]},$$scope:{ctx:w}}}),ye=new bt({props:{anchor:"transformers.ErnieForCausalLM.forward.example",$$slots:{default:[ir]},$$scope:{ctx:w}}}),Ke=new C({props:{title:"ErnieForMaskedLM",local:"transformers.ErnieForMaskedLM",headingTag:"h2"}}),et=new E({props:{name:"class transformers.ErnieForMaskedLM",anchor:"transformers.ErnieForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1250"}}),tt=new E({props:{name:"forward",anchor:"transformers.ErnieForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"task_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForMaskedLM.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1279",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ke=new me({props:{$$slots:{default:[dr]},$$scope:{ctx:w}}}),Te=new bt({props:{anchor:"transformers.ErnieForMaskedLM.forward.example",$$slots:{default:[lr]},$$scope:{ctx:w}}}),nt=new C({props:{title:"ErnieForNextSentencePrediction",local:"transformers.ErnieForNextSentencePrediction",headingTag:"h2"}}),ot=new E({props:{name:"class transformers.ErnieForNextSentencePrediction",anchor:"transformers.ErnieForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1364"}}),st=new E({props:{name:"forward",anchor:"transformers.ErnieForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"task_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ErnieForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1379",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>next_sentence_label</code> is provided) — Next sequence prediction (classification) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) — Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new me({props:{$$slots:{default:[cr]},$$scope:{ctx:w}}}),we=new bt({props:{anchor:"transformers.ErnieForNextSentencePrediction.forward.example",$$slots:{default:[pr]},$$scope:{ctx:w}}}),rt=new C({props:{title:"ErnieForSequenceClassification",local:"transformers.ErnieForSequenceClassification",headingTag:"h2"}}),at=new E({props:{name:"class transformers.ErnieForSequenceClassification",anchor:"transformers.ErnieForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1469"}}),it=new E({props:{name:"forward",anchor:"transformers.ErnieForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"task_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForSequenceClassification.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1493"}}),ve=new me({props:{$$slots:{default:[mr]},$$scope:{ctx:w}}}),dt=new C({props:{title:"ErnieForMultipleChoice",local:"transformers.ErnieForMultipleChoice",headingTag:"h2"}}),lt=new E({props:{name:"class transformers.ErnieForMultipleChoice",anchor:"transformers.ErnieForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1568"}}),ct=new E({props:{name:"forward",anchor:"transformers.ErnieForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"task_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForMultipleChoice.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1590",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new me({props:{$$slots:{default:[hr]},$$scope:{ctx:w}}}),Ee=new bt({props:{anchor:"transformers.ErnieForMultipleChoice.forward.example",$$slots:{default:[ur]},$$scope:{ctx:w}}}),pt=new C({props:{title:"ErnieForTokenClassification",local:"transformers.ErnieForTokenClassification",headingTag:"h2"}}),mt=new E({props:{name:"class transformers.ErnieForTokenClassification",anchor:"transformers.ErnieForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1665"}}),ht=new E({props:{name:"forward",anchor:"transformers.ErnieForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"task_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForTokenClassification.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1688"}}),xe=new me({props:{$$slots:{default:[fr]},$$scope:{ctx:w}}}),ut=new C({props:{title:"ErnieForQuestionAnswering",local:"transformers.ErnieForQuestionAnswering",headingTag:"h2"}}),ft=new E({props:{name:"class transformers.ErnieForQuestionAnswering",anchor:"transformers.ErnieForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1744"}}),gt=new E({props:{name:"forward",anchor:"transformers.ErnieForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"task_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForQuestionAnswering.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ErnieForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1763"}}),ze=new me({props:{$$slots:{default:[gr]},$$scope:{ctx:w}}}),{c(){t=l("meta"),k=s(),d=l("p"),p=s(),u(T.$$.fragment),o=s(),u(M.$$.fragment),cn=s(),Fe=l("p"),Fe.innerHTML=os,pn=s(),Je=l("p"),Je.innerHTML=ss,mn=s(),u(je.$$.fragment),hn=s(),Le=l("p"),Le.innerHTML=rs,un=s(),u(Ie.$$.fragment),fn=s(),u(qe.$$.fragment),gn=s(),Ue=l("table"),Ue.innerHTML=as,_n=s(),Pe=l("p"),Pe.innerHTML=is,bn=s(),u(We.$$.fragment),yn=s(),Ne=l("ul"),Ne.innerHTML=ds,kn=s(),u(He.$$.fragment),Tn=s(),N=l("div"),u(Ze.$$.fragment),Vn=s(),yt=l("p"),yt.innerHTML=ls,On=s(),kt=l("p"),kt.innerHTML=cs,Rn=s(),u(he.$$.fragment),Mn=s(),u(Se.$$.fragment),wn=s(),ce=l("div"),u(Be.$$.fragment),Xn=s(),Tt=l("p"),Tt.innerHTML=ps,vn=s(),u(Ve.$$.fragment),$n=s(),x=l("div"),u(Oe.$$.fragment),Gn=s(),Mt=l("p"),Mt.textContent=ms,An=s(),wt=l("p"),wt.innerHTML=hs,Qn=s(),vt=l("p"),vt.innerHTML=us,Dn=s(),$t=l("p"),$t.innerHTML=fs,Yn=s(),Et=l("p"),Et.innerHTML=gs,Kn=s(),R=l("div"),u(Re.$$.fragment),eo=s(),xt=l("p"),xt.innerHTML=_s,to=s(),u(ue.$$.fragment),no=s(),u(fe.$$.fragment),En=s(),u(Xe.$$.fragment),xn=s(),J=l("div"),u(Ge.$$.fragment),oo=s(),zt=l("p"),zt.innerHTML=bs,so=s(),Ct=l("p"),Ct.innerHTML=ys,ro=s(),Ft=l("p"),Ft.innerHTML=ks,ao=s(),X=l("div"),u(Ae.$$.fragment),io=s(),Jt=l("p"),Jt.innerHTML=Ts,lo=s(),u(ge.$$.fragment),co=s(),u(_e.$$.fragment),zn=s(),u(Qe.$$.fragment),Cn=s(),j=l("div"),u(De.$$.fragment),po=s(),jt=l("p"),jt.innerHTML=Ms,mo=s(),Lt=l("p"),Lt.innerHTML=ws,ho=s(),It=l("p"),It.innerHTML=vs,uo=s(),G=l("div"),u(Ye.$$.fragment),fo=s(),qt=l("p"),qt.innerHTML=$s,go=s(),u(be.$$.fragment),_o=s(),u(ye.$$.fragment),Fn=s(),u(Ke.$$.fragment),Jn=s(),L=l("div"),u(et.$$.fragment),bo=s(),Ut=l("p"),Ut.innerHTML=Es,yo=s(),Pt=l("p"),Pt.innerHTML=xs,ko=s(),Wt=l("p"),Wt.innerHTML=zs,To=s(),A=l("div"),u(tt.$$.fragment),Mo=s(),Nt=l("p"),Nt.innerHTML=Cs,wo=s(),u(ke.$$.fragment),vo=s(),u(Te.$$.fragment),jn=s(),u(nt.$$.fragment),Ln=s(),I=l("div"),u(ot.$$.fragment),$o=s(),Ht=l("p"),Ht.innerHTML=Fs,Eo=s(),Zt=l("p"),Zt.innerHTML=Js,xo=s(),St=l("p"),St.innerHTML=js,zo=s(),Q=l("div"),u(st.$$.fragment),Co=s(),Bt=l("p"),Bt.innerHTML=Ls,Fo=s(),u(Me.$$.fragment),Jo=s(),u(we.$$.fragment),In=s(),u(rt.$$.fragment),qn=s(),q=l("div"),u(at.$$.fragment),jo=s(),Vt=l("p"),Vt.textContent=Is,Lo=s(),Ot=l("p"),Ot.innerHTML=qs,Io=s(),Rt=l("p"),Rt.innerHTML=Us,qo=s(),re=l("div"),u(it.$$.fragment),Uo=s(),Xt=l("p"),Xt.innerHTML=Ps,Po=s(),u(ve.$$.fragment),Un=s(),u(dt.$$.fragment),Pn=s(),U=l("div"),u(lt.$$.fragment),Wo=s(),Gt=l("p"),Gt.textContent=Ws,No=s(),At=l("p"),At.innerHTML=Ns,Ho=s(),Qt=l("p"),Qt.innerHTML=Hs,Zo=s(),D=l("div"),u(ct.$$.fragment),So=s(),Dt=l("p"),Dt.innerHTML=Zs,Bo=s(),u($e.$$.fragment),Vo=s(),u(Ee.$$.fragment),Wn=s(),u(pt.$$.fragment),Nn=s(),P=l("div"),u(mt.$$.fragment),Oo=s(),Yt=l("p"),Yt.textContent=Ss,Ro=s(),Kt=l("p"),Kt.innerHTML=Bs,Xo=s(),en=l("p"),en.innerHTML=Vs,Go=s(),ae=l("div"),u(ht.$$.fragment),Ao=s(),tn=l("p"),tn.innerHTML=Os,Qo=s(),u(xe.$$.fragment),Hn=s(),u(ut.$$.fragment),Zn=s(),W=l("div"),u(ft.$$.fragment),Do=s(),nn=l("p"),nn.innerHTML=Rs,Yo=s(),on=l("p"),on.innerHTML=Xs,Ko=s(),sn=l("p"),sn.innerHTML=Gs,es=s(),ie=l("div"),u(gt.$$.fragment),ts=s(),rn=l("p"),rn.innerHTML=As,ns=s(),u(ze.$$.fragment),Sn=s(),ln=l("p"),this.h()},l(e){const a=er("svelte-u9bgzb",document.head);t=c(a,"META",{name:!0,content:!0}),a.forEach(i),k=r(e),d=c(e,"P",{}),v(d).forEach(i),p=r(e),f(T.$$.fragment,e),o=r(e),f(M.$$.fragment,e),cn=r(e),Fe=c(e,"P",{"data-svelte-h":!0}),h(Fe)!=="svelte-1yp61t5"&&(Fe.innerHTML=os),pn=r(e),Je=c(e,"P",{"data-svelte-h":!0}),h(Je)!=="svelte-1fthuba"&&(Je.innerHTML=ss),mn=r(e),f(je.$$.fragment,e),hn=r(e),Le=c(e,"P",{"data-svelte-h":!0}),h(Le)!=="svelte-r1g5av"&&(Le.innerHTML=rs),un=r(e),f(Ie.$$.fragment,e),fn=r(e),f(qe.$$.fragment,e),gn=r(e),Ue=c(e,"TABLE",{"data-svelte-h":!0}),h(Ue)!=="svelte-nh20hi"&&(Ue.innerHTML=as),_n=r(e),Pe=c(e,"P",{"data-svelte-h":!0}),h(Pe)!=="svelte-10dq6fe"&&(Pe.innerHTML=is),bn=r(e),f(We.$$.fragment,e),yn=r(e),Ne=c(e,"UL",{"data-svelte-h":!0}),h(Ne)!=="svelte-p1b16m"&&(Ne.innerHTML=ds),kn=r(e),f(He.$$.fragment,e),Tn=r(e),N=c(e,"DIV",{class:!0});var Y=v(N);f(Ze.$$.fragment,Y),Vn=r(Y),yt=c(Y,"P",{"data-svelte-h":!0}),h(yt)!=="svelte-qdunaz"&&(yt.innerHTML=ls),On=r(Y),kt=c(Y,"P",{"data-svelte-h":!0}),h(kt)!=="svelte-o55m63"&&(kt.innerHTML=cs),Rn=r(Y),f(he.$$.fragment,Y),Y.forEach(i),Mn=r(e),f(Se.$$.fragment,e),wn=r(e),ce=c(e,"DIV",{class:!0});var _t=v(ce);f(Be.$$.fragment,_t),Xn=r(_t),Tt=c(_t,"P",{"data-svelte-h":!0}),h(Tt)!=="svelte-yumj5u"&&(Tt.innerHTML=ps),_t.forEach(i),vn=r(e),f(Ve.$$.fragment,e),$n=r(e),x=c(e,"DIV",{class:!0});var z=v(x);f(Oe.$$.fragment,z),Gn=r(z),Mt=c(z,"P",{"data-svelte-h":!0}),h(Mt)!=="svelte-1t6amlg"&&(Mt.textContent=ms),An=r(z),wt=c(z,"P",{"data-svelte-h":!0}),h(wt)!=="svelte-6pahdo"&&(wt.innerHTML=hs),Qn=r(z),vt=c(z,"P",{"data-svelte-h":!0}),h(vt)!=="svelte-hswkmf"&&(vt.innerHTML=us),Dn=r(z),$t=c(z,"P",{"data-svelte-h":!0}),h($t)!=="svelte-1du13oj"&&($t.innerHTML=fs),Yn=r(z),Et=c(z,"P",{"data-svelte-h":!0}),h(Et)!=="svelte-174erte"&&(Et.innerHTML=gs),Kn=r(z),R=c(z,"DIV",{class:!0});var K=v(R);f(Re.$$.fragment,K),eo=r(K),xt=c(K,"P",{"data-svelte-h":!0}),h(xt)!=="svelte-1evamya"&&(xt.innerHTML=_s),to=r(K),f(ue.$$.fragment,K),no=r(K),f(fe.$$.fragment,K),K.forEach(i),z.forEach(i),En=r(e),f(Xe.$$.fragment,e),xn=r(e),J=c(e,"DIV",{class:!0});var H=v(J);f(Ge.$$.fragment,H),oo=r(H),zt=c(H,"P",{"data-svelte-h":!0}),h(zt)!=="svelte-ltv6uf"&&(zt.innerHTML=bs),so=r(H),Ct=c(H,"P",{"data-svelte-h":!0}),h(Ct)!=="svelte-6pahdo"&&(Ct.innerHTML=ys),ro=r(H),Ft=c(H,"P",{"data-svelte-h":!0}),h(Ft)!=="svelte-hswkmf"&&(Ft.innerHTML=ks),ao=r(H),X=c(H,"DIV",{class:!0});var ee=v(X);f(Ae.$$.fragment,ee),io=r(ee),Jt=c(ee,"P",{"data-svelte-h":!0}),h(Jt)!=="svelte-1iecxsq"&&(Jt.innerHTML=Ts),lo=r(ee),f(ge.$$.fragment,ee),co=r(ee),f(_e.$$.fragment,ee),ee.forEach(i),H.forEach(i),zn=r(e),f(Qe.$$.fragment,e),Cn=r(e),j=c(e,"DIV",{class:!0});var Z=v(j);f(De.$$.fragment,Z),po=r(Z),jt=c(Z,"P",{"data-svelte-h":!0}),h(jt)!=="svelte-ts4qhc"&&(jt.innerHTML=Ms),mo=r(Z),Lt=c(Z,"P",{"data-svelte-h":!0}),h(Lt)!=="svelte-6pahdo"&&(Lt.innerHTML=ws),ho=r(Z),It=c(Z,"P",{"data-svelte-h":!0}),h(It)!=="svelte-hswkmf"&&(It.innerHTML=vs),uo=r(Z),G=c(Z,"DIV",{class:!0});var te=v(G);f(Ye.$$.fragment,te),fo=r(te),qt=c(te,"P",{"data-svelte-h":!0}),h(qt)!=="svelte-uwgfi2"&&(qt.innerHTML=$s),go=r(te),f(be.$$.fragment,te),_o=r(te),f(ye.$$.fragment,te),te.forEach(i),Z.forEach(i),Fn=r(e),f(Ke.$$.fragment,e),Jn=r(e),L=c(e,"DIV",{class:!0});var S=v(L);f(et.$$.fragment,S),bo=r(S),Ut=c(S,"P",{"data-svelte-h":!0}),h(Ut)!=="svelte-1e378t3"&&(Ut.innerHTML=Es),yo=r(S),Pt=c(S,"P",{"data-svelte-h":!0}),h(Pt)!=="svelte-6pahdo"&&(Pt.innerHTML=xs),ko=r(S),Wt=c(S,"P",{"data-svelte-h":!0}),h(Wt)!=="svelte-hswkmf"&&(Wt.innerHTML=zs),To=r(S),A=c(S,"DIV",{class:!0});var ne=v(A);f(tt.$$.fragment,ne),Mo=r(ne),Nt=c(ne,"P",{"data-svelte-h":!0}),h(Nt)!=="svelte-4h9zv6"&&(Nt.innerHTML=Cs),wo=r(ne),f(ke.$$.fragment,ne),vo=r(ne),f(Te.$$.fragment,ne),ne.forEach(i),S.forEach(i),jn=r(e),f(nt.$$.fragment,e),Ln=r(e),I=c(e,"DIV",{class:!0});var B=v(I);f(ot.$$.fragment,B),$o=r(B),Ht=c(B,"P",{"data-svelte-h":!0}),h(Ht)!=="svelte-139sre"&&(Ht.innerHTML=Fs),Eo=r(B),Zt=c(B,"P",{"data-svelte-h":!0}),h(Zt)!=="svelte-6pahdo"&&(Zt.innerHTML=Js),xo=r(B),St=c(B,"P",{"data-svelte-h":!0}),h(St)!=="svelte-hswkmf"&&(St.innerHTML=js),zo=r(B),Q=c(B,"DIV",{class:!0});var oe=v(Q);f(st.$$.fragment,oe),Co=r(oe),Bt=c(oe,"P",{"data-svelte-h":!0}),h(Bt)!=="svelte-1896760"&&(Bt.innerHTML=Ls),Fo=r(oe),f(Me.$$.fragment,oe),Jo=r(oe),f(we.$$.fragment,oe),oe.forEach(i),B.forEach(i),In=r(e),f(rt.$$.fragment,e),qn=r(e),q=c(e,"DIV",{class:!0});var V=v(q);f(at.$$.fragment,V),jo=r(V),Vt=c(V,"P",{"data-svelte-h":!0}),h(Vt)!=="svelte-129pehz"&&(Vt.textContent=Is),Lo=r(V),Ot=c(V,"P",{"data-svelte-h":!0}),h(Ot)!=="svelte-6pahdo"&&(Ot.innerHTML=qs),Io=r(V),Rt=c(V,"P",{"data-svelte-h":!0}),h(Rt)!=="svelte-hswkmf"&&(Rt.innerHTML=Us),qo=r(V),re=c(V,"DIV",{class:!0});var pe=v(re);f(it.$$.fragment,pe),Uo=r(pe),Xt=c(pe,"P",{"data-svelte-h":!0}),h(Xt)!=="svelte-1ydkq90"&&(Xt.innerHTML=Ps),Po=r(pe),f(ve.$$.fragment,pe),pe.forEach(i),V.forEach(i),Un=r(e),f(dt.$$.fragment,e),Pn=r(e),U=c(e,"DIV",{class:!0});var O=v(U);f(lt.$$.fragment,O),Wo=r(O),Gt=c(O,"P",{"data-svelte-h":!0}),h(Gt)!=="svelte-kvp7gr"&&(Gt.textContent=Ws),No=r(O),At=c(O,"P",{"data-svelte-h":!0}),h(At)!=="svelte-6pahdo"&&(At.innerHTML=Ns),Ho=r(O),Qt=c(O,"P",{"data-svelte-h":!0}),h(Qt)!=="svelte-hswkmf"&&(Qt.innerHTML=Hs),Zo=r(O),D=c(O,"DIV",{class:!0});var se=v(D);f(ct.$$.fragment,se),So=r(se),Dt=c(se,"P",{"data-svelte-h":!0}),h(Dt)!=="svelte-bct7js"&&(Dt.innerHTML=Zs),Bo=r(se),f($e.$$.fragment,se),Vo=r(se),f(Ee.$$.fragment,se),se.forEach(i),O.forEach(i),Wn=r(e),f(pt.$$.fragment,e),Nn=r(e),P=c(e,"DIV",{class:!0});var de=v(P);f(mt.$$.fragment,de),Oo=r(de),Yt=c(de,"P",{"data-svelte-h":!0}),h(Yt)!=="svelte-1wydhty"&&(Yt.textContent=Ss),Ro=r(de),Kt=c(de,"P",{"data-svelte-h":!0}),h(Kt)!=="svelte-6pahdo"&&(Kt.innerHTML=Bs),Xo=r(de),en=c(de,"P",{"data-svelte-h":!0}),h(en)!=="svelte-hswkmf"&&(en.innerHTML=Vs),Go=r(de),ae=c(de,"DIV",{class:!0});var an=v(ae);f(ht.$$.fragment,an),Ao=r(an),tn=c(an,"P",{"data-svelte-h":!0}),h(tn)!=="svelte-xrjah2"&&(tn.innerHTML=Os),Qo=r(an),f(xe.$$.fragment,an),an.forEach(i),de.forEach(i),Hn=r(e),f(ut.$$.fragment,e),Zn=r(e),W=c(e,"DIV",{class:!0});var le=v(W);f(ft.$$.fragment,le),Do=r(le),nn=c(le,"P",{"data-svelte-h":!0}),h(nn)!=="svelte-1fvax6s"&&(nn.innerHTML=Rs),Yo=r(le),on=c(le,"P",{"data-svelte-h":!0}),h(on)!=="svelte-6pahdo"&&(on.innerHTML=Xs),Ko=r(le),sn=c(le,"P",{"data-svelte-h":!0}),h(sn)!=="svelte-hswkmf"&&(sn.innerHTML=Gs),es=r(le),ie=c(le,"DIV",{class:!0});var dn=v(ie);f(gt.$$.fragment,dn),ts=r(dn),rn=c(dn,"P",{"data-svelte-h":!0}),h(rn)!=="svelte-1qx9v3m"&&(rn.innerHTML=As),ns=r(dn),f(ze.$$.fragment,dn),dn.forEach(i),le.forEach(i),Sn=r(e),ln=c(e,"P",{}),v(ln).forEach(i),this.h()},h(){$(t,"name","hf:doc:metadata"),$(t,"content",br),$(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,a){n(document.head,t),m(e,k,a),m(e,d,a),m(e,p,a),g(T,e,a),m(e,o,a),g(M,e,a),m(e,cn,a),m(e,Fe,a),m(e,pn,a),m(e,Je,a),m(e,mn,a),g(je,e,a),m(e,hn,a),m(e,Le,a),m(e,un,a),g(Ie,e,a),m(e,fn,a),g(qe,e,a),m(e,gn,a),m(e,Ue,a),m(e,_n,a),m(e,Pe,a),m(e,bn,a),g(We,e,a),m(e,yn,a),m(e,Ne,a),m(e,kn,a),g(He,e,a),m(e,Tn,a),m(e,N,a),g(Ze,N,null),n(N,Vn),n(N,yt),n(N,On),n(N,kt),n(N,Rn),g(he,N,null),m(e,Mn,a),g(Se,e,a),m(e,wn,a),m(e,ce,a),g(Be,ce,null),n(ce,Xn),n(ce,Tt),m(e,vn,a),g(Ve,e,a),m(e,$n,a),m(e,x,a),g(Oe,x,null),n(x,Gn),n(x,Mt),n(x,An),n(x,wt),n(x,Qn),n(x,vt),n(x,Dn),n(x,$t),n(x,Yn),n(x,Et),n(x,Kn),n(x,R),g(Re,R,null),n(R,eo),n(R,xt),n(R,to),g(ue,R,null),n(R,no),g(fe,R,null),m(e,En,a),g(Xe,e,a),m(e,xn,a),m(e,J,a),g(Ge,J,null),n(J,oo),n(J,zt),n(J,so),n(J,Ct),n(J,ro),n(J,Ft),n(J,ao),n(J,X),g(Ae,X,null),n(X,io),n(X,Jt),n(X,lo),g(ge,X,null),n(X,co),g(_e,X,null),m(e,zn,a),g(Qe,e,a),m(e,Cn,a),m(e,j,a),g(De,j,null),n(j,po),n(j,jt),n(j,mo),n(j,Lt),n(j,ho),n(j,It),n(j,uo),n(j,G),g(Ye,G,null),n(G,fo),n(G,qt),n(G,go),g(be,G,null),n(G,_o),g(ye,G,null),m(e,Fn,a),g(Ke,e,a),m(e,Jn,a),m(e,L,a),g(et,L,null),n(L,bo),n(L,Ut),n(L,yo),n(L,Pt),n(L,ko),n(L,Wt),n(L,To),n(L,A),g(tt,A,null),n(A,Mo),n(A,Nt),n(A,wo),g(ke,A,null),n(A,vo),g(Te,A,null),m(e,jn,a),g(nt,e,a),m(e,Ln,a),m(e,I,a),g(ot,I,null),n(I,$o),n(I,Ht),n(I,Eo),n(I,Zt),n(I,xo),n(I,St),n(I,zo),n(I,Q),g(st,Q,null),n(Q,Co),n(Q,Bt),n(Q,Fo),g(Me,Q,null),n(Q,Jo),g(we,Q,null),m(e,In,a),g(rt,e,a),m(e,qn,a),m(e,q,a),g(at,q,null),n(q,jo),n(q,Vt),n(q,Lo),n(q,Ot),n(q,Io),n(q,Rt),n(q,qo),n(q,re),g(it,re,null),n(re,Uo),n(re,Xt),n(re,Po),g(ve,re,null),m(e,Un,a),g(dt,e,a),m(e,Pn,a),m(e,U,a),g(lt,U,null),n(U,Wo),n(U,Gt),n(U,No),n(U,At),n(U,Ho),n(U,Qt),n(U,Zo),n(U,D),g(ct,D,null),n(D,So),n(D,Dt),n(D,Bo),g($e,D,null),n(D,Vo),g(Ee,D,null),m(e,Wn,a),g(pt,e,a),m(e,Nn,a),m(e,P,a),g(mt,P,null),n(P,Oo),n(P,Yt),n(P,Ro),n(P,Kt),n(P,Xo),n(P,en),n(P,Go),n(P,ae),g(ht,ae,null),n(ae,Ao),n(ae,tn),n(ae,Qo),g(xe,ae,null),m(e,Hn,a),g(ut,e,a),m(e,Zn,a),m(e,W,a),g(ft,W,null),n(W,Do),n(W,nn),n(W,Yo),n(W,on),n(W,Ko),n(W,sn),n(W,es),n(W,ie),g(gt,ie,null),n(ie,ts),n(ie,rn),n(ie,ns),g(ze,ie,null),m(e,Sn,a),m(e,ln,a),Bn=!0},p(e,[a]){const Y={};a&2&&(Y.$$scope={dirty:a,ctx:e}),he.$set(Y);const _t={};a&2&&(_t.$$scope={dirty:a,ctx:e}),ue.$set(_t);const z={};a&2&&(z.$$scope={dirty:a,ctx:e}),fe.$set(z);const K={};a&2&&(K.$$scope={dirty:a,ctx:e}),ge.$set(K);const H={};a&2&&(H.$$scope={dirty:a,ctx:e}),_e.$set(H);const ee={};a&2&&(ee.$$scope={dirty:a,ctx:e}),be.$set(ee);const Z={};a&2&&(Z.$$scope={dirty:a,ctx:e}),ye.$set(Z);const te={};a&2&&(te.$$scope={dirty:a,ctx:e}),ke.$set(te);const S={};a&2&&(S.$$scope={dirty:a,ctx:e}),Te.$set(S);const ne={};a&2&&(ne.$$scope={dirty:a,ctx:e}),Me.$set(ne);const B={};a&2&&(B.$$scope={dirty:a,ctx:e}),we.$set(B);const oe={};a&2&&(oe.$$scope={dirty:a,ctx:e}),ve.$set(oe);const V={};a&2&&(V.$$scope={dirty:a,ctx:e}),$e.$set(V);const pe={};a&2&&(pe.$$scope={dirty:a,ctx:e}),Ee.$set(pe);const O={};a&2&&(O.$$scope={dirty:a,ctx:e}),xe.$set(O);const se={};a&2&&(se.$$scope={dirty:a,ctx:e}),ze.$set(se)},i(e){Bn||(_(T.$$.fragment,e),_(M.$$.fragment,e),_(je.$$.fragment,e),_(Ie.$$.fragment,e),_(qe.$$.fragment,e),_(We.$$.fragment,e),_(He.$$.fragment,e),_(Ze.$$.fragment,e),_(he.$$.fragment,e),_(Se.$$.fragment,e),_(Be.$$.fragment,e),_(Ve.$$.fragment,e),_(Oe.$$.fragment,e),_(Re.$$.fragment,e),_(ue.$$.fragment,e),_(fe.$$.fragment,e),_(Xe.$$.fragment,e),_(Ge.$$.fragment,e),_(Ae.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(Qe.$$.fragment,e),_(De.$$.fragment,e),_(Ye.$$.fragment,e),_(be.$$.fragment,e),_(ye.$$.fragment,e),_(Ke.$$.fragment,e),_(et.$$.fragment,e),_(tt.$$.fragment,e),_(ke.$$.fragment,e),_(Te.$$.fragment,e),_(nt.$$.fragment,e),_(ot.$$.fragment,e),_(st.$$.fragment,e),_(Me.$$.fragment,e),_(we.$$.fragment,e),_(rt.$$.fragment,e),_(at.$$.fragment,e),_(it.$$.fragment,e),_(ve.$$.fragment,e),_(dt.$$.fragment,e),_(lt.$$.fragment,e),_(ct.$$.fragment,e),_($e.$$.fragment,e),_(Ee.$$.fragment,e),_(pt.$$.fragment,e),_(mt.$$.fragment,e),_(ht.$$.fragment,e),_(xe.$$.fragment,e),_(ut.$$.fragment,e),_(ft.$$.fragment,e),_(gt.$$.fragment,e),_(ze.$$.fragment,e),Bn=!0)},o(e){b(T.$$.fragment,e),b(M.$$.fragment,e),b(je.$$.fragment,e),b(Ie.$$.fragment,e),b(qe.$$.fragment,e),b(We.$$.fragment,e),b(He.$$.fragment,e),b(Ze.$$.fragment,e),b(he.$$.fragment,e),b(Se.$$.fragment,e),b(Be.$$.fragment,e),b(Ve.$$.fragment,e),b(Oe.$$.fragment,e),b(Re.$$.fragment,e),b(ue.$$.fragment,e),b(fe.$$.fragment,e),b(Xe.$$.fragment,e),b(Ge.$$.fragment,e),b(Ae.$$.fragment,e),b(ge.$$.fragment,e),b(_e.$$.fragment,e),b(Qe.$$.fragment,e),b(De.$$.fragment,e),b(Ye.$$.fragment,e),b(be.$$.fragment,e),b(ye.$$.fragment,e),b(Ke.$$.fragment,e),b(et.$$.fragment,e),b(tt.$$.fragment,e),b(ke.$$.fragment,e),b(Te.$$.fragment,e),b(nt.$$.fragment,e),b(ot.$$.fragment,e),b(st.$$.fragment,e),b(Me.$$.fragment,e),b(we.$$.fragment,e),b(rt.$$.fragment,e),b(at.$$.fragment,e),b(it.$$.fragment,e),b(ve.$$.fragment,e),b(dt.$$.fragment,e),b(lt.$$.fragment,e),b(ct.$$.fragment,e),b($e.$$.fragment,e),b(Ee.$$.fragment,e),b(pt.$$.fragment,e),b(mt.$$.fragment,e),b(ht.$$.fragment,e),b(xe.$$.fragment,e),b(ut.$$.fragment,e),b(ft.$$.fragment,e),b(gt.$$.fragment,e),b(ze.$$.fragment,e),Bn=!1},d(e){e&&(i(k),i(d),i(p),i(o),i(cn),i(Fe),i(pn),i(Je),i(mn),i(hn),i(Le),i(un),i(fn),i(gn),i(Ue),i(_n),i(Pe),i(bn),i(yn),i(Ne),i(kn),i(Tn),i(N),i(Mn),i(wn),i(ce),i(vn),i($n),i(x),i(En),i(xn),i(J),i(zn),i(Cn),i(j),i(Fn),i(Jn),i(L),i(jn),i(Ln),i(I),i(In),i(qn),i(q),i(Un),i(Pn),i(U),i(Wn),i(Nn),i(P),i(Hn),i(Zn),i(W),i(Sn),i(ln)),i(t),y(T,e),y(M,e),y(je,e),y(Ie,e),y(qe,e),y(We,e),y(He,e),y(Ze),y(he),y(Se,e),y(Be),y(Ve,e),y(Oe),y(Re),y(ue),y(fe),y(Xe,e),y(Ge),y(Ae),y(ge),y(_e),y(Qe,e),y(De),y(Ye),y(be),y(ye),y(Ke,e),y(et),y(tt),y(ke),y(Te),y(nt,e),y(ot),y(st),y(Me),y(we),y(rt,e),y(at),y(it),y(ve),y(dt,e),y(lt),y(ct),y($e),y(Ee),y(pt,e),y(mt),y(ht),y(xe),y(ut,e),y(ft),y(gt),y(ze)}}}const br='{"title":"ERNIE","local":"ernie","sections":[{"title":"Overview","local":"overview","sections":[{"title":"Usage example","local":"usage-example","sections":[],"depth":3},{"title":"Model checkpoints","local":"model-checkpoints","sections":[],"depth":3}],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"ErnieConfig","local":"transformers.ErnieConfig","sections":[],"depth":2},{"title":"Ernie specific outputs","local":"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput","sections":[],"depth":2},{"title":"ErnieModel","local":"transformers.ErnieModel","sections":[],"depth":2},{"title":"ErnieForPreTraining","local":"transformers.ErnieForPreTraining","sections":[],"depth":2},{"title":"ErnieForCausalLM","local":"transformers.ErnieForCausalLM","sections":[],"depth":2},{"title":"ErnieForMaskedLM","local":"transformers.ErnieForMaskedLM","sections":[],"depth":2},{"title":"ErnieForNextSentencePrediction","local":"transformers.ErnieForNextSentencePrediction","sections":[],"depth":2},{"title":"ErnieForSequenceClassification","local":"transformers.ErnieForSequenceClassification","sections":[],"depth":2},{"title":"ErnieForMultipleChoice","local":"transformers.ErnieForMultipleChoice","sections":[],"depth":2},{"title":"ErnieForTokenClassification","local":"transformers.ErnieForTokenClassification","sections":[],"depth":2},{"title":"ErnieForQuestionAnswering","local":"transformers.ErnieForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function yr(w){return Ds(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xr extends Ys{constructor(t){super(),Ks(this,t,yr,_r,Qs,{})}}export{xr as component};
