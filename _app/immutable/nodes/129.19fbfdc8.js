import{s as Ho,o as Bo,n as B}from"../chunks/scheduler.9bc65507.js";import{S as Qo,i as So,g as d,s as r,r as f,A as Vo,h as p,f as l,c as i,j as N,u as g,x as h,k as L,y as a,a as m,v as _,d as b,t as y,w as T}from"../chunks/index.707bf1b6.js";import{T as tt}from"../chunks/Tip.c2ecdbf4.js";import{D as P}from"../chunks/Docstring.17db21ae.js";import{C as nt}from"../chunks/CodeBlock.54a9f38d.js";import{E as ot}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as A}from"../chunks/Heading.342b1fa6.js";function Xo(k){let t,u=`Falcon models were initially added to the Hugging Face Hub as custom code checkpoints. However, Falcon is now fully
supported in the Transformers library. If you fine-tuned a model from a custom code checkpoint, we recommend converting
your checkpoint to the new in-library format, as this should give significant improvements to stability and
performance, especially for generation, as well as removing the need to use <code>trust_remote_code=True</code>!`;return{c(){t=d("p"),t.innerHTML=u},l(s){t=p(s,"P",{"data-svelte-h":!0}),h(t)!=="svelte-9k32i0"&&(t.innerHTML=u)},m(s,c){m(s,t,c)},p:B,d(s){s&&l(t)}}}function Po(k){let t,u="Example:",s,c,w;return c=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEZhbGNvbk1vZGVsJTJDJTIwRmFsY29uQ29uZmlnJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMHNtYWxsJTIwKDItbGF5ZXIpJTIwRmFsY29uJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBGYWxjb25Db25maWcobnVtX2hpZGRlbl9sYXllcnMlM0QyKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMGZyb20lMjB0aGUlMjBzbWFsbCUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMEZhbGNvbk1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FalconModel, FalconConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a small (2-layer) Falcon configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = FalconConfig(num_hidden_layers=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the small configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FalconModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,s=r(),f(c.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=u),s=i(o),g(c.$$.fragment,o)},m(o,v){m(o,t,v),m(o,s,v),_(c,o,v),w=!0},p:B,i(o){w||(b(c.$$.fragment,o),w=!0)},o(o){y(c.$$.fragment,o),w=!1},d(o){o&&(l(t),l(s)),T(c,o)}}}function Yo(k){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=u},l(s){t=p(s,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(s,c){m(s,t,c)},p:B,d(s){s&&l(t)}}}function Eo(k){let t,u="Example:",s,c,w;return c=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGYWxjb25Nb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyUm9ja2V0a25pZ2h0MSUyRmZhbGNvbi1ydy0xYiUyMiklMEFtb2RlbCUyMCUzRCUyMEZhbGNvbk1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJSb2NrZXRrbmlnaHQxJTJGZmFsY29uLXJ3LTFiJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FalconModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FalconModel.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,s=r(),f(c.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=u),s=i(o),g(c.$$.fragment,o)},m(o,v){m(o,t,v),m(o,s,v),_(c,o,v),w=!0},p:B,i(o){w||(b(c.$$.fragment,o),w=!0)},o(o){y(c.$$.fragment,o),w=!1},d(o){o&&(l(t),l(s)),T(c,o)}}}function Ao(k){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=u},l(s){t=p(s,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(s,c){m(s,t,c)},p:B,d(s){s&&l(t)}}}function Oo(k){let t,u="Example:",s,c,w;return c=new nt({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEZhbGNvbkZvckNhdXNhbExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyUm9ja2V0a25pZ2h0MSUyRmZhbGNvbi1ydy0xYiUyMiklMEFtb2RlbCUyMCUzRCUyMEZhbGNvbkZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJSb2NrZXRrbmlnaHQxJTJGZmFsY29uLXJ3LTFiJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FalconForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FalconForCausalLM.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,s=r(),f(c.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=u),s=i(o),g(c.$$.fragment,o)},m(o,v){m(o,t,v),m(o,s,v),_(c,o,v),w=!0},p:B,i(o){w||(b(c.$$.fragment,o),w=!0)},o(o){y(c.$$.fragment,o),w=!1},d(o){o&&(l(t),l(s)),T(c,o)}}}function Do(k){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=u},l(s){t=p(s,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(s,c){m(s,t,c)},p:B,d(s){s&&l(t)}}}function Ko(k){let t,u="Example of single-label classification:",s,c,w;return c=new nt({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEZhbGNvbkZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJSb2NrZXRrbmlnaHQxJTJGZmFsY29uLXJ3LTFiJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmFsY29uRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyUm9ja2V0a25pZ2h0MSUyRmZhbGNvbi1ydy0xYiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KCkuaXRlbSgpJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwRmFsY29uRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyUm9ja2V0a25pZ2h0MSUyRmZhbGNvbi1ydy0xYiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FalconForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FalconForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FalconForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,s=r(),f(c.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-ykxpe4"&&(t.textContent=u),s=i(o),g(c.$$.fragment,o)},m(o,v){m(o,t,v),m(o,s,v),_(c,o,v),w=!0},p:B,i(o){w||(b(c.$$.fragment,o),w=!0)},o(o){y(c.$$.fragment,o),w=!1},d(o){o&&(l(t),l(s)),T(c,o)}}}function en(k){let t,u="Example of multi-label classification:",s,c,w;return c=new nt({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEZhbGNvbkZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJSb2NrZXRrbmlnaHQxJTJGZmFsY29uLXJ3LTFiJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmFsY29uRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyUm9ja2V0a25pZ2h0MSUyRmZhbGNvbi1ydy0xYiUyMiUyQyUyMHByb2JsZW1fdHlwZSUzRCUyMm11bHRpX2xhYmVsX2NsYXNzaWZpY2F0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZHMlMjAlM0QlMjB0b3JjaC5hcmFuZ2UoMCUyQyUyMGxvZ2l0cy5zaGFwZSU1Qi0xJTVEKSU1QnRvcmNoLnNpZ21vaWQobG9naXRzKS5zcXVlZXplKGRpbSUzRDApJTIwJTNFJTIwMC41JTVEJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwRmFsY29uRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyUm9ja2V0a25pZ2h0MSUyRmZhbGNvbi1ydy0xYiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FalconForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FalconForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FalconForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,s=r(),f(c.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1l8e32d"&&(t.textContent=u),s=i(o),g(c.$$.fragment,o)},m(o,v){m(o,t,v),m(o,s,v),_(c,o,v),w=!0},p:B,i(o){w||(b(c.$$.fragment,o),w=!0)},o(o){y(c.$$.fragment,o),w=!1},d(o){o&&(l(t),l(s)),T(c,o)}}}function tn(k){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=u},l(s){t=p(s,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(s,c){m(s,t,c)},p:B,d(s){s&&l(t)}}}function on(k){let t,u="Example:",s,c,w;return c=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGYWxjb25Gb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJSb2NrZXRrbmlnaHQxJTJGZmFsY29uLXJ3LTFiJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmFsY29uRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyUm9ja2V0a25pZ2h0MSUyRmZhbGNvbi1ydy0xYiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0Lml0ZW0oKSU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVEJTVEJTBBJTBBbGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FalconForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FalconForTokenClassification.from_pretrained(<span class="hljs-string">&quot;Rocketknight1/falcon-rw-1b&quot;</span>)

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

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,s=r(),f(c.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=u),s=i(o),g(c.$$.fragment,o)},m(o,v){m(o,t,v),m(o,s,v),_(c,o,v),w=!0},p:B,i(o){w||(b(c.$$.fragment,o),w=!0)},o(o){y(c.$$.fragment,o),w=!1},d(o){o&&(l(t),l(s)),T(c,o)}}}function nn(k){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=u},l(s){t=p(s,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(s,c){m(s,t,c)},p:B,d(s){s&&l(t)}}}function sn(k){let t,u,s,c,w,o,v,at,ce,mo=`Falcon is a class of causal decoder-only models built by <a href="https://www.tii.ae/" rel="nofollow">TII</a>. The largest Falcon checkpoints
have been trained on &gt;=1T tokens of text, with a particular emphasis on the <a href="https://arxiv.org/abs/2306.01116" rel="nofollow">RefinedWeb</a>
corpus. They are made available under the Apache 2.0 license.`,rt,de,uo=`Falcon’s architecture is modern and optimized for inference, with multi-query attention and support for efficient
attention variants like <code>FlashAttention</code>. Both ‘base’ models trained only as causal language models as well as
‘instruct’ models that have received further fine-tuning are available.`,it,pe,ho=`Falcon models are (as of 2023) some of the largest and most powerful open-source language models,
and consistently rank highly in the <a href="https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard" rel="nofollow">OpenLLM leaderboard</a>.`,lt,me,ct,O,dt,ue,fo=`You can convert custom code checkpoints to full Transformers checkpoints using the <code>convert_custom_code_checkpoint.py</code>
script located in the
<a href="https://github.com/huggingface/transformers/tree/main/src/transformers/models/falcon" rel="nofollow">Falcon model directory</a>
of the Transformers library. To use this script, simply call it with
<code>python convert_custom_code_checkpoint.py --checkpoint_dir my_model</code>. This will convert your checkpoint in-place, and
you can immediately load it from the directory afterwards with e.g. <code>from_pretrained()</code>. If your model hasn’t been
uploaded to the Hub, we recommend making a backup before attempting the conversion, just in case!`,pt,he,mt,z,fe,Ft,ze,go=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconModel">FalconModel</a>. It is used to instantiate a Falcon
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the
<a href="https://huggingface.co/tiiuae/falcon-7b" rel="nofollow">tiiuae/falcon-7b</a> architecture.`,$t,Ie,_o=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Ct,D,ut,ge,ht,$,_e,xt,Ue,bo="The bare Falcon Model transformer outputting raw hidden-states without any specific head on top.",Jt,We,yo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,jt,Ze,To=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,zt,R,be,It,qe,wo='The <a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconModel">FalconModel</a> forward method, overrides the <code>__call__</code> special method.',Ut,K,Wt,ee,ft,ye,gt,C,Te,Zt,Ne,vo="The Falcon Model transformer with a language modeling head on top (linear layer with weights tied to the input embeddings).",qt,Le,ko=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,Nt,Re,Mo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Lt,G,we,Rt,Ge,Fo='The <a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconForCausalLM">FalconForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',Gt,te,Ht,oe,_t,ve,bt,M,ke,Bt,He,$o="The Falcon Model transformer with a sequence classification head on top (linear layer).",Qt,Be,Co=`<a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconForSequenceClassification">FalconForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`,St,Qe,xo=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,Vt,Se,Jo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,Xt,Ve,jo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Pt,j,Me,Yt,Xe,zo='The <a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconForSequenceClassification">FalconForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Et,ne,At,se,Ot,ae,yt,Fe,Tt,x,$e,Dt,Pe,Io=`Falcon Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Kt,Ye,Uo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,eo,Ee,Wo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,to,H,Ce,oo,Ae,Zo='The <a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconForTokenClassification">FalconForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',no,re,so,ie,wt,xe,vt,J,Je,ao,Oe,qo=`The Falcon Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,ro,De,No=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,io,Ke,Lo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,lo,Y,je,co,et,Ro='The <a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconForQuestionAnswering">FalconForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',po,le,kt,st,Mt;return w=new A({props:{title:"Falcon",local:"falcon",headingTag:"h1"}}),v=new A({props:{title:"Overview",local:"overview",headingTag:"h2"}}),me=new A({props:{title:"Converting custom checkpoints",local:"converting-custom-checkpoints",headingTag:"h2"}}),O=new tt({props:{$$slots:{default:[Xo]},$$scope:{ctx:k}}}),he=new A({props:{title:"FalconConfig",local:"transformers.FalconConfig",headingTag:"h2"}}),fe=new P({props:{name:"class transformers.FalconConfig",anchor:"transformers.FalconConfig",parameters:[{name:"vocab_size",val:" = 65024"},{name:"hidden_size",val:" = 4544"},{name:"num_hidden_layers",val:" = 32"},{name:"num_attention_heads",val:" = 71"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"num_kv_heads",val:" = None"},{name:"alibi",val:" = False"},{name:"new_decoder_architecture",val:" = False"},{name:"multi_query",val:" = True"},{name:"parallel_attn",val:" = True"},{name:"bias",val:" = False"},{name:"max_position_embeddings",val:" = 2048"},{name:"rope_theta",val:" = 10000.0"},{name:"rope_scaling",val:" = None"},{name:"bos_token_id",val:" = 11"},{name:"eos_token_id",val:" = 11"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FalconConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 65024) &#x2014;
Vocabulary size of the Falcon model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconModel">FalconModel</a>`,name:"vocab_size"},{anchor:"transformers.FalconConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4544) &#x2014;
Dimension of the hidden representations.`,name:"hidden_size"},{anchor:"transformers.FalconConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Number of hidden layers in the Transformer decoder.`,name:"num_hidden_layers"},{anchor:"transformers.FalconConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 71) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.FalconConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-05) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.FalconConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.FalconConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the model should return the last key/values attentions (not used by all models). Only relevant if
<code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.FalconConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for MLP layers.`,name:"hidden_dropout"},{anchor:"transformers.FalconConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for attention layers.`,name:"attention_dropout"},{anchor:"transformers.FalconConfig.num_kv_heads",description:`<strong>num_kv_heads</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of key-value heads to use per attention layer. If unset, defaults to the same value as
<code>num_attention_heads</code>.`,name:"num_kv_heads"},{anchor:"transformers.FalconConfig.alibi",description:`<strong>alibi</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use ALiBi positional biases during self-attention.`,name:"alibi"},{anchor:"transformers.FalconConfig.new_decoder_architecture",description:`<strong>new_decoder_architecture</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use the new (Falcon-40B) decoder architecture. If <code>True</code>, the <code>multi_query</code> and <code>parallel_attn</code>
arguments are ignored, as the new decoder always uses parallel attention.`,name:"new_decoder_architecture"},{anchor:"transformers.FalconConfig.multi_query",description:`<strong>multi_query</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use multi-query attention in the decoder. Ignored when <code>new_decoder_architecture</code> is <code>True</code>.`,name:"multi_query"},{anchor:"transformers.FalconConfig.parallel_attn",description:`<strong>parallel_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to compute attention in parallel with the feedforward layer. If False, they are consecutive
instead, as in the original Transformer architecture. Ignored when <code>new_decoder_architecture</code> is <code>True</code>.`,name:"parallel_attn"},{anchor:"transformers.FalconConfig.bias",description:`<strong>bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use bias on Linear layers.`,name:"bias"},{anchor:"transformers.FalconConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with, when <code>alibi</code> is <code>False</code>. Pretrained
Falcon models with RoPE support up to 2048 tokens.`,name:"max_position_embeddings"},{anchor:"transformers.FalconConfig.rope_theta",description:`<strong>rope_theta</strong> (<code>float</code>, <em>optional</em>, defaults to 10000.0) &#x2014;
The base period of the RoPE embeddings.`,name:"rope_theta"},{anchor:"transformers.FalconConfig.rope_scaling",description:`<strong>rope_scaling</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Dictionary containing the scaling configuration for the RoPE embeddings. Currently supports two scaling
strategies: linear and dynamic. Their scaling factor must be a float greater than 1. The expected format is
<code>{&quot;type&quot;: strategy name, &quot;factor&quot;: scaling factor}</code>. When using this flag, don&#x2019;t update
<code>max_position_embeddings</code> to the expected new maximum. See the following thread for more information on how
these scaling strategies behave:
<a href="https://www.reddit.com/r/LocalLLaMA/comments/14mrgpr/dynamically_scaled_rope_further_increases/" rel="nofollow">https://www.reddit.com/r/LocalLLaMA/comments/14mrgpr/dynamically_scaled_rope_further_increases/</a>. This is an
experimental feature, subject to breaking API changes in future versions.`,name:"rope_scaling"},{anchor:"transformers.FalconConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 11) &#x2014;
The id of the &#x201C;beginning-of-sequence&#x201D; token.`,name:"bos_token_id"},{anchor:"transformers.FalconConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 11) &#x2014;
The id of the &#x201C;end-of-sequence&#x201D; token.`,name:"eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/configuration_falcon.py#L28"}}),D=new ot({props:{anchor:"transformers.FalconConfig.example",$$slots:{default:[Po]},$$scope:{ctx:k}}}),ge=new A({props:{title:"FalconModel",local:"transformers.FalconModel",headingTag:"h2"}}),_e=new P({props:{name:"class transformers.FalconModel",anchor:"transformers.FalconModel",parameters:[{name:"config",val:": FalconConfig"}],parametersDescription:[{anchor:"transformers.FalconModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconConfig">FalconConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/modeling_falcon.py#L977"}}),be=new P({props:{name:"forward",anchor:"transformers.FalconModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FalconModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FalconModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_hidden_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.FalconModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FalconModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FalconModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FalconModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.FalconModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.FalconModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FalconModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FalconModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/modeling_falcon.py#L1011",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconConfig"
>FalconConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),K=new tt({props:{$$slots:{default:[Yo]},$$scope:{ctx:k}}}),ee=new ot({props:{anchor:"transformers.FalconModel.forward.example",$$slots:{default:[Eo]},$$scope:{ctx:k}}}),ye=new A({props:{title:"FalconForCausalLM",local:"transformers.FalconForCausalLM",headingTag:"h2"}}),Te=new P({props:{name:"class transformers.FalconForCausalLM",anchor:"transformers.FalconForCausalLM",parameters:[{name:"config",val:": FalconConfig"}],parametersDescription:[{anchor:"transformers.FalconForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconConfig">FalconConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/modeling_falcon.py#L1194"}}),we=new P({props:{name:"forward",anchor:"transformers.FalconForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FalconForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FalconForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_hidden_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.FalconForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FalconForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FalconForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FalconForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.FalconForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.FalconForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FalconForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FalconForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FalconForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/modeling_falcon.py#L1251",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconConfig"
>FalconConfig</a>) and inputs.</p>
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
`}}),te=new tt({props:{$$slots:{default:[Ao]},$$scope:{ctx:k}}}),oe=new ot({props:{anchor:"transformers.FalconForCausalLM.forward.example",$$slots:{default:[Oo]},$$scope:{ctx:k}}}),ve=new A({props:{title:"FalconForSequenceClassification",local:"transformers.FalconForSequenceClassification",headingTag:"h2"}}),ke=new P({props:{name:"class transformers.FalconForSequenceClassification",anchor:"transformers.FalconForSequenceClassification",parameters:[{name:"config",val:": FalconConfig"}],parametersDescription:[{anchor:"transformers.FalconForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconConfig">FalconConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/modeling_falcon.py#L1345"}}),Me=new P({props:{name:"forward",anchor:"transformers.FalconForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FalconForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FalconForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_hidden_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.FalconForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FalconForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FalconForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FalconForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.FalconForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.FalconForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FalconForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FalconForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FalconForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/modeling_falcon.py#L1370",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconConfig"
>FalconConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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


<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ne=new tt({props:{$$slots:{default:[Do]},$$scope:{ctx:k}}}),se=new ot({props:{anchor:"transformers.FalconForSequenceClassification.forward.example",$$slots:{default:[Ko]},$$scope:{ctx:k}}}),ae=new ot({props:{anchor:"transformers.FalconForSequenceClassification.forward.example-2",$$slots:{default:[en]},$$scope:{ctx:k}}}),Fe=new A({props:{title:"FalconForTokenClassification",local:"transformers.FalconForTokenClassification",headingTag:"h2"}}),$e=new P({props:{name:"class transformers.FalconForTokenClassification",anchor:"transformers.FalconForTokenClassification",parameters:[{name:"config",val:": FalconConfig"}],parametersDescription:[{anchor:"transformers.FalconForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconConfig">FalconConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/modeling_falcon.py#L1472"}}),Ce=new P({props:{name:"forward",anchor:"transformers.FalconForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FalconForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FalconForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_hidden_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.FalconForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FalconForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FalconForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FalconForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.FalconForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.FalconForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FalconForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FalconForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FalconForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/modeling_falcon.py#L1497",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconConfig"
>FalconConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new tt({props:{$$slots:{default:[tn]},$$scope:{ctx:k}}}),ie=new ot({props:{anchor:"transformers.FalconForTokenClassification.forward.example",$$slots:{default:[on]},$$scope:{ctx:k}}}),xe=new A({props:{title:"FalconForQuestionAnswering",local:"transformers.FalconForQuestionAnswering",headingTag:"h2"}}),Je=new P({props:{name:"class transformers.FalconForQuestionAnswering",anchor:"transformers.FalconForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FalconForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/falcon#transformers.FalconConfig">FalconConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/modeling_falcon.py#L1561"}}),je=new P({props:{name:"forward",anchor:"transformers.FalconForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FalconForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FalconForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_hidden_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.FalconForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FalconForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FalconForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FalconForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.FalconForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.FalconForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FalconForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FalconForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FalconForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FalconForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/falcon/modeling_falcon.py#L1577"}}),le=new tt({props:{$$slots:{default:[nn]},$$scope:{ctx:k}}}),{c(){t=d("meta"),u=r(),s=d("p"),c=r(),f(w.$$.fragment),o=r(),f(v.$$.fragment),at=r(),ce=d("p"),ce.innerHTML=mo,rt=r(),de=d("p"),de.innerHTML=uo,it=r(),pe=d("p"),pe.innerHTML=ho,lt=r(),f(me.$$.fragment),ct=r(),f(O.$$.fragment),dt=r(),ue=d("p"),ue.innerHTML=fo,pt=r(),f(he.$$.fragment),mt=r(),z=d("div"),f(fe.$$.fragment),Ft=r(),ze=d("p"),ze.innerHTML=go,$t=r(),Ie=d("p"),Ie.innerHTML=_o,Ct=r(),f(D.$$.fragment),ut=r(),f(ge.$$.fragment),ht=r(),$=d("div"),f(_e.$$.fragment),xt=r(),Ue=d("p"),Ue.textContent=bo,Jt=r(),We=d("p"),We.innerHTML=yo,jt=r(),Ze=d("p"),Ze.innerHTML=To,zt=r(),R=d("div"),f(be.$$.fragment),It=r(),qe=d("p"),qe.innerHTML=wo,Ut=r(),f(K.$$.fragment),Wt=r(),f(ee.$$.fragment),ft=r(),f(ye.$$.fragment),gt=r(),C=d("div"),f(Te.$$.fragment),Zt=r(),Ne=d("p"),Ne.textContent=vo,qt=r(),Le=d("p"),Le.innerHTML=ko,Nt=r(),Re=d("p"),Re.innerHTML=Mo,Lt=r(),G=d("div"),f(we.$$.fragment),Rt=r(),Ge=d("p"),Ge.innerHTML=Fo,Gt=r(),f(te.$$.fragment),Ht=r(),f(oe.$$.fragment),_t=r(),f(ve.$$.fragment),bt=r(),M=d("div"),f(ke.$$.fragment),Bt=r(),He=d("p"),He.textContent=$o,Qt=r(),Be=d("p"),Be.innerHTML=Co,St=r(),Qe=d("p"),Qe.innerHTML=xo,Vt=r(),Se=d("p"),Se.innerHTML=Jo,Xt=r(),Ve=d("p"),Ve.innerHTML=jo,Pt=r(),j=d("div"),f(Me.$$.fragment),Yt=r(),Xe=d("p"),Xe.innerHTML=zo,Et=r(),f(ne.$$.fragment),At=r(),f(se.$$.fragment),Ot=r(),f(ae.$$.fragment),yt=r(),f(Fe.$$.fragment),Tt=r(),x=d("div"),f($e.$$.fragment),Dt=r(),Pe=d("p"),Pe.textContent=Io,Kt=r(),Ye=d("p"),Ye.innerHTML=Uo,eo=r(),Ee=d("p"),Ee.innerHTML=Wo,to=r(),H=d("div"),f(Ce.$$.fragment),oo=r(),Ae=d("p"),Ae.innerHTML=Zo,no=r(),f(re.$$.fragment),so=r(),f(ie.$$.fragment),wt=r(),f(xe.$$.fragment),vt=r(),J=d("div"),f(Je.$$.fragment),ao=r(),Oe=d("p"),Oe.innerHTML=qo,ro=r(),De=d("p"),De.innerHTML=No,io=r(),Ke=d("p"),Ke.innerHTML=Lo,lo=r(),Y=d("div"),f(je.$$.fragment),co=r(),et=d("p"),et.innerHTML=Ro,po=r(),f(le.$$.fragment),kt=r(),st=d("p"),this.h()},l(e){const n=Vo("svelte-u9bgzb",document.head);t=p(n,"META",{name:!0,content:!0}),n.forEach(l),u=i(e),s=p(e,"P",{}),N(s).forEach(l),c=i(e),g(w.$$.fragment,e),o=i(e),g(v.$$.fragment,e),at=i(e),ce=p(e,"P",{"data-svelte-h":!0}),h(ce)!=="svelte-10avqgm"&&(ce.innerHTML=mo),rt=i(e),de=p(e,"P",{"data-svelte-h":!0}),h(de)!=="svelte-yb5860"&&(de.innerHTML=uo),it=i(e),pe=p(e,"P",{"data-svelte-h":!0}),h(pe)!=="svelte-nzqfj1"&&(pe.innerHTML=ho),lt=i(e),g(me.$$.fragment,e),ct=i(e),g(O.$$.fragment,e),dt=i(e),ue=p(e,"P",{"data-svelte-h":!0}),h(ue)!=="svelte-1ct6uvq"&&(ue.innerHTML=fo),pt=i(e),g(he.$$.fragment,e),mt=i(e),z=p(e,"DIV",{class:!0});var Q=N(z);g(fe.$$.fragment,Q),Ft=i(Q),ze=p(Q,"P",{"data-svelte-h":!0}),h(ze)!=="svelte-12a3on3"&&(ze.innerHTML=go),$t=i(Q),Ie=p(Q,"P",{"data-svelte-h":!0}),h(Ie)!=="svelte-o55m63"&&(Ie.innerHTML=_o),Ct=i(Q),g(D.$$.fragment,Q),Q.forEach(l),ut=i(e),g(ge.$$.fragment,e),ht=i(e),$=p(e,"DIV",{class:!0});var I=N($);g(_e.$$.fragment,I),xt=i(I),Ue=p(I,"P",{"data-svelte-h":!0}),h(Ue)!=="svelte-13ll91i"&&(Ue.textContent=bo),Jt=i(I),We=p(I,"P",{"data-svelte-h":!0}),h(We)!=="svelte-1ymzemc"&&(We.innerHTML=yo),jt=i(I),Ze=p(I,"P",{"data-svelte-h":!0}),h(Ze)!=="svelte-hswkmf"&&(Ze.innerHTML=To),zt=i(I),R=p(I,"DIV",{class:!0});var S=N(R);g(be.$$.fragment,S),It=i(S),qe=p(S,"P",{"data-svelte-h":!0}),h(qe)!=="svelte-1ncdvn8"&&(qe.innerHTML=wo),Ut=i(S),g(K.$$.fragment,S),Wt=i(S),g(ee.$$.fragment,S),S.forEach(l),I.forEach(l),ft=i(e),g(ye.$$.fragment,e),gt=i(e),C=p(e,"DIV",{class:!0});var U=N(C);g(Te.$$.fragment,U),Zt=i(U),Ne=p(U,"P",{"data-svelte-h":!0}),h(Ne)!=="svelte-88v1u6"&&(Ne.textContent=vo),qt=i(U),Le=p(U,"P",{"data-svelte-h":!0}),h(Le)!=="svelte-1ymzemc"&&(Le.innerHTML=ko),Nt=i(U),Re=p(U,"P",{"data-svelte-h":!0}),h(Re)!=="svelte-hswkmf"&&(Re.innerHTML=Mo),Lt=i(U),G=p(U,"DIV",{class:!0});var V=N(G);g(we.$$.fragment,V),Rt=i(V),Ge=p(V,"P",{"data-svelte-h":!0}),h(Ge)!=="svelte-ei978c"&&(Ge.innerHTML=Fo),Gt=i(V),g(te.$$.fragment,V),Ht=i(V),g(oe.$$.fragment,V),V.forEach(l),U.forEach(l),_t=i(e),g(ve.$$.fragment,e),bt=i(e),M=p(e,"DIV",{class:!0});var F=N(M);g(ke.$$.fragment,F),Bt=i(F),He=p(F,"P",{"data-svelte-h":!0}),h(He)!=="svelte-n3dntd"&&(He.textContent=$o),Qt=i(F),Be=p(F,"P",{"data-svelte-h":!0}),h(Be)!=="svelte-ijlr4o"&&(Be.innerHTML=Co),St=i(F),Qe=p(F,"P",{"data-svelte-h":!0}),h(Qe)!=="svelte-10ugs3m"&&(Qe.innerHTML=xo),Vt=i(F),Se=p(F,"P",{"data-svelte-h":!0}),h(Se)!=="svelte-1ymzemc"&&(Se.innerHTML=Jo),Xt=i(F),Ve=p(F,"P",{"data-svelte-h":!0}),h(Ve)!=="svelte-hswkmf"&&(Ve.innerHTML=jo),Pt=i(F),j=p(F,"DIV",{class:!0});var W=N(j);g(Me.$$.fragment,W),Yt=i(W),Xe=p(W,"P",{"data-svelte-h":!0}),h(Xe)!=="svelte-1ofnfro"&&(Xe.innerHTML=zo),Et=i(W),g(ne.$$.fragment,W),At=i(W),g(se.$$.fragment,W),Ot=i(W),g(ae.$$.fragment,W),W.forEach(l),F.forEach(l),yt=i(e),g(Fe.$$.fragment,e),Tt=i(e),x=p(e,"DIV",{class:!0});var Z=N(x);g($e.$$.fragment,Z),Dt=i(Z),Pe=p(Z,"P",{"data-svelte-h":!0}),h(Pe)!=="svelte-1g0l4i2"&&(Pe.textContent=Io),Kt=i(Z),Ye=p(Z,"P",{"data-svelte-h":!0}),h(Ye)!=="svelte-1ymzemc"&&(Ye.innerHTML=Uo),eo=i(Z),Ee=p(Z,"P",{"data-svelte-h":!0}),h(Ee)!=="svelte-hswkmf"&&(Ee.innerHTML=Wo),to=i(Z),H=p(Z,"DIV",{class:!0});var X=N(H);g(Ce.$$.fragment,X),oo=i(X),Ae=p(X,"P",{"data-svelte-h":!0}),h(Ae)!=="svelte-dc6ocm"&&(Ae.innerHTML=Zo),no=i(X),g(re.$$.fragment,X),so=i(X),g(ie.$$.fragment,X),X.forEach(l),Z.forEach(l),wt=i(e),g(xe.$$.fragment,e),vt=i(e),J=p(e,"DIV",{class:!0});var q=N(J);g(Je.$$.fragment,q),ao=i(q),Oe=p(q,"P",{"data-svelte-h":!0}),h(Oe)!=="svelte-1uae4ge"&&(Oe.innerHTML=qo),ro=i(q),De=p(q,"P",{"data-svelte-h":!0}),h(De)!=="svelte-1ymzemc"&&(De.innerHTML=No),io=i(q),Ke=p(q,"P",{"data-svelte-h":!0}),h(Ke)!=="svelte-hswkmf"&&(Ke.innerHTML=Lo),lo=i(q),Y=p(q,"DIV",{class:!0});var E=N(Y);g(je.$$.fragment,E),co=i(E),et=p(E,"P",{"data-svelte-h":!0}),h(et)!=="svelte-1omfhbs"&&(et.innerHTML=Ro),po=i(E),g(le.$$.fragment,E),E.forEach(l),q.forEach(l),kt=i(e),st=p(e,"P",{}),N(st).forEach(l),this.h()},h(){L(t,"name","hf:doc:metadata"),L(t,"content",an),L(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){a(document.head,t),m(e,u,n),m(e,s,n),m(e,c,n),_(w,e,n),m(e,o,n),_(v,e,n),m(e,at,n),m(e,ce,n),m(e,rt,n),m(e,de,n),m(e,it,n),m(e,pe,n),m(e,lt,n),_(me,e,n),m(e,ct,n),_(O,e,n),m(e,dt,n),m(e,ue,n),m(e,pt,n),_(he,e,n),m(e,mt,n),m(e,z,n),_(fe,z,null),a(z,Ft),a(z,ze),a(z,$t),a(z,Ie),a(z,Ct),_(D,z,null),m(e,ut,n),_(ge,e,n),m(e,ht,n),m(e,$,n),_(_e,$,null),a($,xt),a($,Ue),a($,Jt),a($,We),a($,jt),a($,Ze),a($,zt),a($,R),_(be,R,null),a(R,It),a(R,qe),a(R,Ut),_(K,R,null),a(R,Wt),_(ee,R,null),m(e,ft,n),_(ye,e,n),m(e,gt,n),m(e,C,n),_(Te,C,null),a(C,Zt),a(C,Ne),a(C,qt),a(C,Le),a(C,Nt),a(C,Re),a(C,Lt),a(C,G),_(we,G,null),a(G,Rt),a(G,Ge),a(G,Gt),_(te,G,null),a(G,Ht),_(oe,G,null),m(e,_t,n),_(ve,e,n),m(e,bt,n),m(e,M,n),_(ke,M,null),a(M,Bt),a(M,He),a(M,Qt),a(M,Be),a(M,St),a(M,Qe),a(M,Vt),a(M,Se),a(M,Xt),a(M,Ve),a(M,Pt),a(M,j),_(Me,j,null),a(j,Yt),a(j,Xe),a(j,Et),_(ne,j,null),a(j,At),_(se,j,null),a(j,Ot),_(ae,j,null),m(e,yt,n),_(Fe,e,n),m(e,Tt,n),m(e,x,n),_($e,x,null),a(x,Dt),a(x,Pe),a(x,Kt),a(x,Ye),a(x,eo),a(x,Ee),a(x,to),a(x,H),_(Ce,H,null),a(H,oo),a(H,Ae),a(H,no),_(re,H,null),a(H,so),_(ie,H,null),m(e,wt,n),_(xe,e,n),m(e,vt,n),m(e,J,n),_(Je,J,null),a(J,ao),a(J,Oe),a(J,ro),a(J,De),a(J,io),a(J,Ke),a(J,lo),a(J,Y),_(je,Y,null),a(Y,co),a(Y,et),a(Y,po),_(le,Y,null),m(e,kt,n),m(e,st,n),Mt=!0},p(e,[n]){const Q={};n&2&&(Q.$$scope={dirty:n,ctx:e}),O.$set(Q);const I={};n&2&&(I.$$scope={dirty:n,ctx:e}),D.$set(I);const S={};n&2&&(S.$$scope={dirty:n,ctx:e}),K.$set(S);const U={};n&2&&(U.$$scope={dirty:n,ctx:e}),ee.$set(U);const V={};n&2&&(V.$$scope={dirty:n,ctx:e}),te.$set(V);const F={};n&2&&(F.$$scope={dirty:n,ctx:e}),oe.$set(F);const W={};n&2&&(W.$$scope={dirty:n,ctx:e}),ne.$set(W);const Z={};n&2&&(Z.$$scope={dirty:n,ctx:e}),se.$set(Z);const X={};n&2&&(X.$$scope={dirty:n,ctx:e}),ae.$set(X);const q={};n&2&&(q.$$scope={dirty:n,ctx:e}),re.$set(q);const E={};n&2&&(E.$$scope={dirty:n,ctx:e}),ie.$set(E);const Go={};n&2&&(Go.$$scope={dirty:n,ctx:e}),le.$set(Go)},i(e){Mt||(b(w.$$.fragment,e),b(v.$$.fragment,e),b(me.$$.fragment,e),b(O.$$.fragment,e),b(he.$$.fragment,e),b(fe.$$.fragment,e),b(D.$$.fragment,e),b(ge.$$.fragment,e),b(_e.$$.fragment,e),b(be.$$.fragment,e),b(K.$$.fragment,e),b(ee.$$.fragment,e),b(ye.$$.fragment,e),b(Te.$$.fragment,e),b(we.$$.fragment,e),b(te.$$.fragment,e),b(oe.$$.fragment,e),b(ve.$$.fragment,e),b(ke.$$.fragment,e),b(Me.$$.fragment,e),b(ne.$$.fragment,e),b(se.$$.fragment,e),b(ae.$$.fragment,e),b(Fe.$$.fragment,e),b($e.$$.fragment,e),b(Ce.$$.fragment,e),b(re.$$.fragment,e),b(ie.$$.fragment,e),b(xe.$$.fragment,e),b(Je.$$.fragment,e),b(je.$$.fragment,e),b(le.$$.fragment,e),Mt=!0)},o(e){y(w.$$.fragment,e),y(v.$$.fragment,e),y(me.$$.fragment,e),y(O.$$.fragment,e),y(he.$$.fragment,e),y(fe.$$.fragment,e),y(D.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(be.$$.fragment,e),y(K.$$.fragment,e),y(ee.$$.fragment,e),y(ye.$$.fragment,e),y(Te.$$.fragment,e),y(we.$$.fragment,e),y(te.$$.fragment,e),y(oe.$$.fragment,e),y(ve.$$.fragment,e),y(ke.$$.fragment,e),y(Me.$$.fragment,e),y(ne.$$.fragment,e),y(se.$$.fragment,e),y(ae.$$.fragment,e),y(Fe.$$.fragment,e),y($e.$$.fragment,e),y(Ce.$$.fragment,e),y(re.$$.fragment,e),y(ie.$$.fragment,e),y(xe.$$.fragment,e),y(Je.$$.fragment,e),y(je.$$.fragment,e),y(le.$$.fragment,e),Mt=!1},d(e){e&&(l(u),l(s),l(c),l(o),l(at),l(ce),l(rt),l(de),l(it),l(pe),l(lt),l(ct),l(dt),l(ue),l(pt),l(mt),l(z),l(ut),l(ht),l($),l(ft),l(gt),l(C),l(_t),l(bt),l(M),l(yt),l(Tt),l(x),l(wt),l(vt),l(J),l(kt),l(st)),l(t),T(w,e),T(v,e),T(me,e),T(O,e),T(he,e),T(fe),T(D),T(ge,e),T(_e),T(be),T(K),T(ee),T(ye,e),T(Te),T(we),T(te),T(oe),T(ve,e),T(ke),T(Me),T(ne),T(se),T(ae),T(Fe,e),T($e),T(Ce),T(re),T(ie),T(xe,e),T(Je),T(je),T(le)}}}const an='{"title":"Falcon","local":"falcon","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Converting custom checkpoints","local":"converting-custom-checkpoints","sections":[],"depth":2},{"title":"FalconConfig","local":"transformers.FalconConfig","sections":[],"depth":2},{"title":"FalconModel","local":"transformers.FalconModel","sections":[],"depth":2},{"title":"FalconForCausalLM","local":"transformers.FalconForCausalLM","sections":[],"depth":2},{"title":"FalconForSequenceClassification","local":"transformers.FalconForSequenceClassification","sections":[],"depth":2},{"title":"FalconForTokenClassification","local":"transformers.FalconForTokenClassification","sections":[],"depth":2},{"title":"FalconForQuestionAnswering","local":"transformers.FalconForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function rn(k){return Bo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fn extends Qo{constructor(t){super(),So(this,t,rn,sn,Ho,{})}}export{fn as component};
