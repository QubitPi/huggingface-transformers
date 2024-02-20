import{s as fs,o as gs,n as N}from"../chunks/scheduler.9bc65507.js";import{S as _s,i as bs,g as c,s as r,r as g,A as Ms,h as p,f as d,c as i,j as v,u as _,x as m,k as $,y as o,a as h,v as b,d as M,t as T,w as y}from"../chunks/index.707bf1b6.js";import{T as Je}from"../chunks/Tip.c2ecdbf4.js";import{D as J}from"../chunks/Docstring.17db21ae.js";import{C as ce}from"../chunks/CodeBlock.54a9f38d.js";import{E as de}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ee}from"../chunks/Heading.342b1fa6.js";function Ts(z){let n,u="Example:",s,a,f;return a=new ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME5lemhhQ29uZmlnJTJDJTIwTmV6aGFNb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGFuJTIwTmV6aGElMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyME5lemhhQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyME5lemhhLWJhc2UlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMjBtb2RlbCUwQW1vZGVsJTIwJTNEJTIwTmV6aGFNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> NezhaConfig, NezhaModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an Nezha configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = NezhaConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the Nezha-base style configuration model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){n=c("p"),n.textContent=u,s=r(),g(a.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-11lpom8"&&(n.textContent=u),s=i(t),_(a.$$.fragment,t)},m(t,w){h(t,n,w),h(t,s,w),b(a,t,w),f=!0},p:N,i(t){f||(M(a.$$.fragment,t),f=!0)},o(t){T(a.$$.fragment,t),f=!1},d(t){t&&(d(n),d(s)),y(a,t)}}}function ys(z){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=u},l(s){n=p(s,"P",{"data-svelte-h":!0}),m(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(s,a){h(s,n,a)},p:N,d(s){s&&d(n)}}}function ws(z){let n,u="Example:",s,a,f;return a=new ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBOZXpoYU1vZGVsJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyME5lemhhTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMnNpanVuaGUlMkZuZXpoYS1jbi1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NezhaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaModel.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){n=c("p"),n.textContent=u,s=r(),g(a.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-11lpom8"&&(n.textContent=u),s=i(t),_(a.$$.fragment,t)},m(t,w){h(t,n,w),h(t,s,w),b(a,t,w),f=!0},p:N,i(t){f||(M(a.$$.fragment,t),f=!0)},o(t){T(a.$$.fragment,t),f=!1},d(t){t&&(d(n),d(s)),y(a,t)}}}function zs(z){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=u},l(s){n=p(s,"P",{"data-svelte-h":!0}),m(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(s,a){h(s,n,a)},p:N,d(s){s&&d(n)}}}function ks(z){let n,u="Example:",s,a,f;return a=new ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBOZXpoYUZvclByZVRyYWluaW5nJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyME5lemhhRm9yUHJlVHJhaW5pbmcuZnJvbV9wcmV0cmFpbmVkKCUyMnNpanVuaGUlMkZuZXpoYS1jbi1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBcHJlZGljdGlvbl9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLnByZWRpY3Rpb25fbG9naXRzJTBBc2VxX3JlbGF0aW9uc2hpcF9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLnNlcV9yZWxhdGlvbnNoaXBfbG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NezhaForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForPreTraining.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`,wrap:!1}}),{c(){n=c("p"),n.textContent=u,s=r(),g(a.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-11lpom8"&&(n.textContent=u),s=i(t),_(a.$$.fragment,t)},m(t,w){h(t,n,w),h(t,s,w),b(a,t,w),f=!0},p:N,i(t){f||(M(a.$$.fragment,t),f=!0)},o(t){T(a.$$.fragment,t),f=!1},d(t){t&&(d(n),d(s)),y(a,t)}}}function vs(z){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=u},l(s){n=p(s,"P",{"data-svelte-h":!0}),m(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(s,a){h(s,n,a)},p:N,d(s){s&&d(n)}}}function $s(z){let n,u="Example:",s,a,f;return a=new ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBOZXpoYUZvck1hc2tlZExNJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyME5lemhhRm9yTWFza2VkTE0uZnJvbV9wcmV0cmFpbmVkKCUyMnNpanVuaGUlMkZuZXpoYS1jbi1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjBGcmFuY2UlMjBpcyUyMCU1Qk1BU0slNUQuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQSUyMyUyMHJldHJpZXZlJTIwaW5kZXglMjBvZiUyMCU1Qk1BU0slNUQlMEFtYXNrX3Rva2VuX2luZGV4JTIwJTNEJTIwKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCklNUIwJTVELm5vbnplcm8oYXNfdHVwbGUlM0RUcnVlKSU1QjAlNUQlMEElMEFwcmVkaWN0ZWRfdG9rZW5faWQlMjAlM0QlMjBsb2dpdHMlNUIwJTJDJTIwbWFza190b2tlbl9pbmRleCU1RC5hcmdtYXgoYXhpcyUzRC0xKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjBGcmFuY2UlMjBpcyUyMFBhcmlzLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTBBJTIzJTIwbWFzayUyMGxhYmVscyUyMG9mJTIwbm9uLSU1Qk1BU0slNUQlMjB0b2tlbnMlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC53aGVyZShpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQlMkMlMjBsYWJlbHMlMkMlMjAtMTAwKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NezhaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)`,wrap:!1}}),{c(){n=c("p"),n.textContent=u,s=r(),g(a.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-11lpom8"&&(n.textContent=u),s=i(t),_(a.$$.fragment,t)},m(t,w){h(t,n,w),h(t,s,w),b(a,t,w),f=!0},p:N,i(t){f||(M(a.$$.fragment,t),f=!0)},o(t){T(a.$$.fragment,t),f=!1},d(t){t&&(d(n),d(s)),y(a,t)}}}function Ns(z){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=u},l(s){n=p(s,"P",{"data-svelte-h":!0}),m(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(s,a){h(s,n,a)},p:N,d(s){s&&d(n)}}}function js(z){let n,u="Example:",s,a,f;return a=new ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBOZXpoYUZvck5leHRTZW50ZW5jZVByZWRpY3Rpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnNpanVuaGUlMkZuZXpoYS1jbi1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTmV6aGFGb3JOZXh0U2VudGVuY2VQcmVkaWN0aW9uLmZyb21fcHJldHJhaW5lZCglMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBbmV4dF9zZW50ZW5jZSUyMCUzRCUyMCUyMlRoZSUyMHNreSUyMGlzJTIwYmx1ZSUyMGR1ZSUyMHRvJTIwdGhlJTIwc2hvcnRlciUyMHdhdmVsZW5ndGglMjBvZiUyMGJsdWUlMjBsaWdodC4lMjIlMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplcihwcm9tcHQlMkMlMjBuZXh0X3NlbnRlbmNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiplbmNvZGluZyUyQyUyMGxhYmVscyUzRHRvcmNoLkxvbmdUZW5zb3IoJTVCMSU1RCkpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHMlMEFhc3NlcnQlMjBsb2dpdHMlNUIwJTJDJTIwMCU1RCUyMCUzQyUyMGxvZ2l0cyU1QjAlMkMlMjAxJTVEJTIwJTIwJTIzJTIwbmV4dCUyMHNlbnRlbmNlJTIwd2FzJTIwcmFuZG9t",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NezhaForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`,wrap:!1}}),{c(){n=c("p"),n.textContent=u,s=r(),g(a.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-11lpom8"&&(n.textContent=u),s=i(t),_(a.$$.fragment,t)},m(t,w){h(t,n,w),h(t,s,w),b(a,t,w),f=!0},p:N,i(t){f||(M(a.$$.fragment,t),f=!0)},o(t){T(a.$$.fragment,t),f=!1},d(t){t&&(d(n),d(s)),y(a,t)}}}function Js(z){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=u},l(s){n=p(s,"P",{"data-svelte-h":!0}),m(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(s,a){h(s,n,a)},p:N,d(s){s&&d(n)}}}function Us(z){let n,u="Example of single-label classification:",s,a,f;return a=new ce({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME5lemhhRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnNpanVuaGUlMkZuZXpoYS1jbi1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTmV6aGFGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KCkuaXRlbSgpJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwTmV6aGFGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NezhaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=c("p"),n.textContent=u,s=r(),g(a.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-ykxpe4"&&(n.textContent=u),s=i(t),_(a.$$.fragment,t)},m(t,w){h(t,n,w),h(t,s,w),b(a,t,w),f=!0},p:N,i(t){f||(M(a.$$.fragment,t),f=!0)},o(t){T(a.$$.fragment,t),f=!1},d(t){t&&(d(n),d(s)),y(a,t)}}}function Cs(z){let n,u="Example of multi-label classification:",s,a,f;return a=new ce({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME5lemhhRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnNpanVuaGUlMkZuZXpoYS1jbi1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTmV6aGFGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiUyQyUyMHByb2JsZW1fdHlwZSUzRCUyMm11bHRpX2xhYmVsX2NsYXNzaWZpY2F0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZHMlMjAlM0QlMjB0b3JjaC5hcmFuZ2UoMCUyQyUyMGxvZ2l0cy5zaGFwZSU1Qi0xJTVEKSU1QnRvcmNoLnNpZ21vaWQobG9naXRzKS5zcXVlZXplKGRpbSUzRDApJTIwJTNFJTIwMC41JTVEJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwTmV6aGFGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NezhaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=c("p"),n.textContent=u,s=r(),g(a.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-1l8e32d"&&(n.textContent=u),s=i(t),_(a.$$.fragment,t)},m(t,w){h(t,n,w),h(t,s,w),b(a,t,w),f=!0},p:N,i(t){f||(M(a.$$.fragment,t),f=!0)},o(t){T(a.$$.fragment,t),f=!1},d(t){t&&(d(n),d(s)),y(a,t)}}}function Fs(z){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=u},l(s){n=p(s,"P",{"data-svelte-h":!0}),m(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(s,a){h(s,n,a)},p:N,d(s){s&&d(n)}}}function xs(z){let n,u="Example:",s,a,f;return a=new ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBOZXpoYUZvck11bHRpcGxlQ2hvaWNlJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyME5lemhhRm9yTXVsdGlwbGVDaG9pY2UuZnJvbV9wcmV0cmFpbmVkKCUyMnNpanVuaGUlMkZuZXpoYS1jbi1iYXNlJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMkluJTIwSXRhbHklMkMlMjBwaXp6YSUyMHNlcnZlZCUyMGluJTIwZm9ybWFsJTIwc2V0dGluZ3MlMkMlMjBzdWNoJTIwYXMlMjBhdCUyMGElMjByZXN0YXVyYW50JTJDJTIwaXMlMjBwcmVzZW50ZWQlMjB1bnNsaWNlZC4lMjIlMEFjaG9pY2UwJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2l0aCUyMGElMjBmb3JrJTIwYW5kJTIwYSUyMGtuaWZlLiUyMiUwQWNob2ljZTElMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aGlsZSUyMGhlbGQlMjBpbiUyMHRoZSUyMGhhbmQuJTIyJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gudGVuc29yKDApLnVuc3F1ZWV6ZSgwKSUyMCUyMCUyMyUyMGNob2ljZTAlMjBpcyUyMGNvcnJlY3QlMjAoYWNjb3JkaW5nJTIwdG8lMjBXaWtpcGVkaWElMjAlM0IpKSUyQyUyMGJhdGNoJTIwc2l6ZSUyMDElMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglNUJwcm9tcHQlMkMlMjBwcm9tcHQlNUQlMkMlMjAlNUJjaG9pY2UwJTJDJTIwY2hvaWNlMSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiolN0JrJTNBJTIwdi51bnNxdWVlemUoMCklMjBmb3IlMjBrJTJDJTIwdiUyMGluJTIwZW5jb2RpbmcuaXRlbXMoKSU3RCUyQyUyMGxhYmVscyUzRGxhYmVscyklMjAlMjAlMjMlMjBiYXRjaCUyMHNpemUlMjBpcyUyMDElMEElMEElMjMlMjB0aGUlMjBsaW5lYXIlMjBjbGFzc2lmaWVyJTIwc3RpbGwlMjBuZWVkcyUyMHRvJTIwYmUlMjB0cmFpbmVkJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NezhaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){n=c("p"),n.textContent=u,s=r(),g(a.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-11lpom8"&&(n.textContent=u),s=i(t),_(a.$$.fragment,t)},m(t,w){h(t,n,w),h(t,s,w),b(a,t,w),f=!0},p:N,i(t){f||(M(a.$$.fragment,t),f=!0)},o(t){T(a.$$.fragment,t),f=!1},d(t){t&&(d(n),d(s)),y(a,t)}}}function Zs(z){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=u},l(s){n=p(s,"P",{"data-svelte-h":!0}),m(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(s,a){h(s,n,a)},p:N,d(s){s&&d(n)}}}function Ws(z){let n,u="Example:",s,a,f;return a=new ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBOZXpoYUZvclRva2VuQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnNpanVuaGUlMkZuZXpoYS1jbi1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTmV6aGFGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0Lml0ZW0oKSU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVEJTVEJTBBJTBBbGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NezhaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=c("p"),n.textContent=u,s=r(),g(a.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-11lpom8"&&(n.textContent=u),s=i(t),_(a.$$.fragment,t)},m(t,w){h(t,n,w),h(t,s,w),b(a,t,w),f=!0},p:N,i(t){f||(M(a.$$.fragment,t),f=!0)},o(t){T(a.$$.fragment,t),f=!1},d(t){t&&(d(n),d(s)),y(a,t)}}}function Is(z){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=u},l(s){n=p(s,"P",{"data-svelte-h":!0}),m(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(s,a){h(s,n,a)},p:N,d(s){s&&d(n)}}}function Gs(z){let n,u="Example:",s,a,f;return a=new ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBOZXpoYUZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzaWp1bmhlJTJGbmV6aGEtY24tYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyME5lemhhRm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMnNpanVuaGUlMkZuZXpoYS1jbi1iYXNlJTIyKSUwQSUwQXF1ZXN0aW9uJTJDJTIwdGV4dCUyMCUzRCUyMCUyMldobyUyMHdhcyUyMEppbSUyMEhlbnNvbiUzRiUyMiUyQyUyMCUyMkppbSUyMEhlbnNvbiUyMHdhcyUyMGElMjBuaWNlJTIwcHVwcGV0JTIyJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHF1ZXN0aW9uJTJDJTIwdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMG91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLnN0YXJ0X2xvZ2l0cy5hcmdtYXgoKSUwQWFuc3dlcl9lbmRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLmVuZF9sb2dpdHMuYXJnbWF4KCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCMCUyQyUyMGFuc3dlcl9zdGFydF9pbmRleCUyMCUzQSUyMGFuc3dlcl9lbmRfaW5kZXglMjAlMkIlMjAxJTVEJTBBJTBBJTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE0JTVEKSUwQXRhcmdldF9lbmRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTUlNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwc3RhcnRfcG9zaXRpb25zJTNEdGFyZ2V0X3N0YXJ0X2luZGV4JTJDJTIwZW5kX3Bvc2l0aW9ucyUzRHRhcmdldF9lbmRfaW5kZXgpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NezhaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){n=c("p"),n.textContent=u,s=r(),g(a.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-11lpom8"&&(n.textContent=u),s=i(t),_(a.$$.fragment,t)},m(t,w){h(t,n,w),h(t,s,w),b(a,t,w),f=!0},p:N,i(t){f||(M(a.$$.fragment,t),f=!0)},o(t){T(a.$$.fragment,t),f=!1},d(t){t&&(d(n),d(s)),y(a,t)}}}function Vs(z){let n,u,s,a,f,t,w,Et,Ue,No='The Nezha model was proposed in <a href="https://arxiv.org/abs/1909.00204" rel="nofollow">NEZHA: Neural Contextualized Representation for Chinese Language Understanding</a> by Junqiu Wei et al.',Qt,Ce,jo="The abstract from the paper is the following:",Pt,Fe,Jo=`<em>The pre-trained language models have achieved great successes in various natural language understanding (NLU) tasks
due to its capacity to capture the deep contextualized information in text by pre-training on large-scale corpora.
In this technical report, we present our practice of pre-training language models named NEZHA (NEural contextualiZed
representation for CHinese lAnguage understanding) on Chinese corpora and finetuning for the Chinese NLU tasks.
The current version of NEZHA is based on BERT with a collection of proven improvements, which include Functional
Relative Positional Encoding as an effective positional encoding scheme, Whole Word Masking strategy,
Mixed Precision Training and the LAMB Optimizer in training the models. The experimental results show that NEZHA
achieves the state-of-the-art performances when finetuned on several representative Chinese tasks, including
named entity recognition (People’s Daily NER), sentence matching (LCQMC), Chinese sentiment classification (ChnSenti)
and natural language inference (XNLI).</em>`,Lt,xe,Uo='This model was contributed by <a href="https://huggingface.co/sijunhe" rel="nofollow">sijunhe</a>. The original code can be found <a href="https://github.com/huawei-noah/Pretrained-Language-Model/tree/master/NEZHA-PyTorch" rel="nofollow">here</a>.',Yt,Ze,At,We,Co='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',Ot,Ie,Dt,V,Ge,bn,lt,Fo=`This is the configuration class to store the configuration of an <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaModel">NezhaModel</a>. It is used to instantiate an Nezha
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Nezha
<a href="https://huggingface.co/sijunhe/nezha-cn-base" rel="nofollow">sijunhe/nezha-cn-base</a> architecture.`,Mn,dt,xo=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Tn,pe,Kt,Ve,en,k,He,yn,ct,Zo="The bare Nezha Model transformer outputting raw hidden-states without any specific head on top.",wn,pt,Wo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,zn,ht,Io=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,kn,mt,Go=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">Attention is
all you need</a> by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`,vn,ut,Vo=`To behave as an decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set
to <code>True</code>. To be used in a Seq2Seq model, the model needs to initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,$n,P,qe,Nn,ft,Ho='The <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaModel">NezhaModel</a> forward method, overrides the <code>__call__</code> special method.',jn,he,Jn,me,tn,Se,nn,U,Be,Un,gt,qo="Nezha Model with two heads on top as done during the pretraining: a <code>masked language modeling</code> head and a <code>next sentence prediction (classification)</code> head.",Cn,_t,So=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Fn,bt,Bo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,xn,L,Xe,Zn,Mt,Xo='The <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForPreTraining">NezhaForPreTraining</a> forward method, overrides the <code>__call__</code> special method.',Wn,ue,In,fe,on,Re,sn,C,Ee,Gn,Tt,Ro="Nezha Model with a <code>language modeling</code> head on top.",Vn,yt,Eo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Hn,wt,Qo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,qn,Y,Qe,Sn,zt,Po='The <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForMaskedLM">NezhaForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Bn,ge,Xn,_e,an,Pe,rn,F,Le,Rn,kt,Lo="Nezha Model with a <code>next sentence prediction (classification)</code> head on top.",En,vt,Yo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Qn,$t,Ao=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Pn,A,Ye,Ln,Nt,Oo='The <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForNextSentencePrediction">NezhaForNextSentencePrediction</a> forward method, overrides the <code>__call__</code> special method.',Yn,be,An,Me,ln,Ae,dn,x,Oe,On,jt,Do=`Nezha Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,Dn,Jt,Ko=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Kn,Ut,es=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,eo,G,De,to,Ct,ts='The <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForSequenceClassification">NezhaForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',no,Te,oo,ye,so,we,cn,Ke,pn,Z,et,ao,Ft,ns=`Nezha Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,ro,xt,os=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,io,Zt,ss=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,lo,O,tt,co,Wt,as='The <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForMultipleChoice">NezhaForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',po,ze,ho,ke,hn,nt,mn,W,ot,mo,It,rs=`Nezha Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,uo,Gt,is=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,fo,Vt,ls=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,go,D,st,_o,Ht,ds='The <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForTokenClassification">NezhaForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',bo,ve,Mo,$e,un,at,fn,I,rt,To,qt,cs=`Nezha Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,yo,St,ps=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,wo,Bt,hs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,zo,K,it,ko,Xt,ms='The <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForQuestionAnswering">NezhaForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',vo,Ne,$o,je,gn,Rt,_n;return f=new ee({props:{title:"Nezha",local:"nezha",headingTag:"h1"}}),w=new ee({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Ze=new ee({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Ie=new ee({props:{title:"NezhaConfig",local:"transformers.NezhaConfig",headingTag:"h2"}}),Ge=new J({props:{name:"class transformers.NezhaConfig",anchor:"transformers.NezhaConfig",parameters:[{name:"vocab_size",val:" = 21128"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"max_relative_position",val:" = 64"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NezhaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, optional, defaults to 21128) &#x2014;
Vocabulary size of the NEZHA model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaModel">NezhaModel</a>.`,name:"vocab_size"},{anchor:"transformers.NezhaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, optional, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.NezhaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, optional, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.NezhaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, optional, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.NezhaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, optional, defaults to 3072) &#x2014;
The dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.NezhaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, optional, defaults to &#x201C;gelu&#x201D;) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler.`,name:"hidden_act"},{anchor:"transformers.NezhaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, optional, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.NezhaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, optional, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.NezhaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, optional, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
(e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.NezhaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, optional, defaults to 2) &#x2014;
The vocabulary size of the <em>token_type_ids</em> passed into <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaModel">NezhaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.NezhaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, optional, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.NezhaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.NezhaConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, optional, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout"},{anchor:"transformers.NezhaConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as a decoder or not. If <code>False</code>, the model is used as an encoder.`,name:"is_decoder"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/configuration_nezha.py#L9"}}),pe=new de({props:{anchor:"transformers.NezhaConfig.example",$$slots:{default:[Ts]},$$scope:{ctx:z}}}),Ve=new ee({props:{title:"NezhaModel",local:"transformers.NezhaModel",headingTag:"h2"}}),He=new J({props:{name:"class transformers.NezhaModel",anchor:"transformers.NezhaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.NezhaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L849"}}),qe=new J({props:{name:"forward",anchor:"transformers.NezhaModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.NezhaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.NezhaModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.NezhaModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.NezhaModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L892",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),he=new Je({props:{$$slots:{default:[ys]},$$scope:{ctx:z}}}),me=new de({props:{anchor:"transformers.NezhaModel.forward.example",$$slots:{default:[ws]},$$scope:{ctx:z}}}),Se=new ee({props:{title:"NezhaForPreTraining",local:"transformers.NezhaForPreTraining",headingTag:"h2"}}),Be=new J({props:{name:"class transformers.NezhaForPreTraining",anchor:"transformers.NezhaForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1026"}}),Xe=new J({props:{name:"forward",anchor:"transformers.NezhaForPreTraining.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"next_sentence_label",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.NezhaForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1052",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.nezha.modeling_nezha.NezhaForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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


<p><code>transformers.models.nezha.modeling_nezha.NezhaForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ue=new Je({props:{$$slots:{default:[zs]},$$scope:{ctx:z}}}),fe=new de({props:{anchor:"transformers.NezhaForPreTraining.forward.example",$$slots:{default:[ks]},$$scope:{ctx:z}}}),Re=new ee({props:{title:"NezhaForMaskedLM",local:"transformers.NezhaForMaskedLM",headingTag:"h2"}}),Ee=new J({props:{name:"class transformers.NezhaForMaskedLM",anchor:"transformers.NezhaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1135"}}),Qe=new J({props:{name:"forward",anchor:"transformers.NezhaForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.NezhaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1161",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),ge=new Je({props:{$$slots:{default:[vs]},$$scope:{ctx:z}}}),_e=new de({props:{anchor:"transformers.NezhaForMaskedLM.forward.example",$$slots:{default:[$s]},$$scope:{ctx:z}}}),Pe=new ee({props:{title:"NezhaForNextSentencePrediction",local:"transformers.NezhaForNextSentencePrediction",headingTag:"h2"}}),Le=new J({props:{name:"class transformers.NezhaForNextSentencePrediction",anchor:"transformers.NezhaForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1239"}}),Ye=new J({props:{name:"forward",anchor:"transformers.NezhaForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NezhaForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1253",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),be=new Je({props:{$$slots:{default:[Ns]},$$scope:{ctx:z}}}),Me=new de({props:{anchor:"transformers.NezhaForNextSentencePrediction.forward.example",$$slots:{default:[js]},$$scope:{ctx:z}}}),Ae=new ee({props:{title:"NezhaForSequenceClassification",local:"transformers.NezhaForSequenceClassification",headingTag:"h2"}}),Oe=new J({props:{name:"class transformers.NezhaForSequenceClassification",anchor:"transformers.NezhaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1339"}}),De=new J({props:{name:"forward",anchor:"transformers.NezhaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.NezhaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1362",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Te=new Je({props:{$$slots:{default:[Js]},$$scope:{ctx:z}}}),ye=new de({props:{anchor:"transformers.NezhaForSequenceClassification.forward.example",$$slots:{default:[Us]},$$scope:{ctx:z}}}),we=new de({props:{anchor:"transformers.NezhaForSequenceClassification.forward.example-2",$$slots:{default:[Cs]},$$scope:{ctx:z}}}),Ke=new ee({props:{title:"NezhaForMultipleChoice",local:"transformers.NezhaForMultipleChoice",headingTag:"h2"}}),et=new J({props:{name:"class transformers.NezhaForMultipleChoice",anchor:"transformers.NezhaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1438"}}),tt=new J({props:{name:"forward",anchor:"transformers.NezhaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.NezhaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1459",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),ze=new Je({props:{$$slots:{default:[Fs]},$$scope:{ctx:z}}}),ke=new de({props:{anchor:"transformers.NezhaForMultipleChoice.forward.example",$$slots:{default:[xs]},$$scope:{ctx:z}}}),nt=new ee({props:{title:"NezhaForTokenClassification",local:"transformers.NezhaForTokenClassification",headingTag:"h2"}}),ot=new J({props:{name:"class transformers.NezhaForTokenClassification",anchor:"transformers.NezhaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1530"}}),st=new J({props:{name:"forward",anchor:"transformers.NezhaForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.NezhaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1552",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),ve=new Je({props:{$$slots:{default:[Zs]},$$scope:{ctx:z}}}),$e=new de({props:{anchor:"transformers.NezhaForTokenClassification.forward.example",$$slots:{default:[Ws]},$$scope:{ctx:z}}}),at=new ee({props:{title:"NezhaForQuestionAnswering",local:"transformers.NezhaForQuestionAnswering",headingTag:"h2"}}),rt=new J({props:{name:"class transformers.NezhaForQuestionAnswering",anchor:"transformers.NezhaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1609"}}),it=new J({props:{name:"forward",anchor:"transformers.NezhaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.NezhaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.NezhaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1627",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ne=new Je({props:{$$slots:{default:[Is]},$$scope:{ctx:z}}}),je=new de({props:{anchor:"transformers.NezhaForQuestionAnswering.forward.example",$$slots:{default:[Gs]},$$scope:{ctx:z}}}),{c(){n=c("meta"),u=r(),s=c("p"),a=r(),g(f.$$.fragment),t=r(),g(w.$$.fragment),Et=r(),Ue=c("p"),Ue.innerHTML=No,Qt=r(),Ce=c("p"),Ce.textContent=jo,Pt=r(),Fe=c("p"),Fe.innerHTML=Jo,Lt=r(),xe=c("p"),xe.innerHTML=Uo,Yt=r(),g(Ze.$$.fragment),At=r(),We=c("ul"),We.innerHTML=Co,Ot=r(),g(Ie.$$.fragment),Dt=r(),V=c("div"),g(Ge.$$.fragment),bn=r(),lt=c("p"),lt.innerHTML=Fo,Mn=r(),dt=c("p"),dt.innerHTML=xo,Tn=r(),g(pe.$$.fragment),Kt=r(),g(Ve.$$.fragment),en=r(),k=c("div"),g(He.$$.fragment),yn=r(),ct=c("p"),ct.textContent=Zo,wn=r(),pt=c("p"),pt.innerHTML=Wo,zn=r(),ht=c("p"),ht.innerHTML=Io,kn=r(),mt=c("p"),mt.innerHTML=Go,vn=r(),ut=c("p"),ut.innerHTML=Vo,$n=r(),P=c("div"),g(qe.$$.fragment),Nn=r(),ft=c("p"),ft.innerHTML=Ho,jn=r(),g(he.$$.fragment),Jn=r(),g(me.$$.fragment),tn=r(),g(Se.$$.fragment),nn=r(),U=c("div"),g(Be.$$.fragment),Un=r(),gt=c("p"),gt.innerHTML=qo,Cn=r(),_t=c("p"),_t.innerHTML=So,Fn=r(),bt=c("p"),bt.innerHTML=Bo,xn=r(),L=c("div"),g(Xe.$$.fragment),Zn=r(),Mt=c("p"),Mt.innerHTML=Xo,Wn=r(),g(ue.$$.fragment),In=r(),g(fe.$$.fragment),on=r(),g(Re.$$.fragment),sn=r(),C=c("div"),g(Ee.$$.fragment),Gn=r(),Tt=c("p"),Tt.innerHTML=Ro,Vn=r(),yt=c("p"),yt.innerHTML=Eo,Hn=r(),wt=c("p"),wt.innerHTML=Qo,qn=r(),Y=c("div"),g(Qe.$$.fragment),Sn=r(),zt=c("p"),zt.innerHTML=Po,Bn=r(),g(ge.$$.fragment),Xn=r(),g(_e.$$.fragment),an=r(),g(Pe.$$.fragment),rn=r(),F=c("div"),g(Le.$$.fragment),Rn=r(),kt=c("p"),kt.innerHTML=Lo,En=r(),vt=c("p"),vt.innerHTML=Yo,Qn=r(),$t=c("p"),$t.innerHTML=Ao,Pn=r(),A=c("div"),g(Ye.$$.fragment),Ln=r(),Nt=c("p"),Nt.innerHTML=Oo,Yn=r(),g(be.$$.fragment),An=r(),g(Me.$$.fragment),ln=r(),g(Ae.$$.fragment),dn=r(),x=c("div"),g(Oe.$$.fragment),On=r(),jt=c("p"),jt.textContent=Do,Dn=r(),Jt=c("p"),Jt.innerHTML=Ko,Kn=r(),Ut=c("p"),Ut.innerHTML=es,eo=r(),G=c("div"),g(De.$$.fragment),to=r(),Ct=c("p"),Ct.innerHTML=ts,no=r(),g(Te.$$.fragment),oo=r(),g(ye.$$.fragment),so=r(),g(we.$$.fragment),cn=r(),g(Ke.$$.fragment),pn=r(),Z=c("div"),g(et.$$.fragment),ao=r(),Ft=c("p"),Ft.textContent=ns,ro=r(),xt=c("p"),xt.innerHTML=os,io=r(),Zt=c("p"),Zt.innerHTML=ss,lo=r(),O=c("div"),g(tt.$$.fragment),co=r(),Wt=c("p"),Wt.innerHTML=as,po=r(),g(ze.$$.fragment),ho=r(),g(ke.$$.fragment),hn=r(),g(nt.$$.fragment),mn=r(),W=c("div"),g(ot.$$.fragment),mo=r(),It=c("p"),It.textContent=rs,uo=r(),Gt=c("p"),Gt.innerHTML=is,fo=r(),Vt=c("p"),Vt.innerHTML=ls,go=r(),D=c("div"),g(st.$$.fragment),_o=r(),Ht=c("p"),Ht.innerHTML=ds,bo=r(),g(ve.$$.fragment),Mo=r(),g($e.$$.fragment),un=r(),g(at.$$.fragment),fn=r(),I=c("div"),g(rt.$$.fragment),To=r(),qt=c("p"),qt.innerHTML=cs,yo=r(),St=c("p"),St.innerHTML=ps,wo=r(),Bt=c("p"),Bt.innerHTML=hs,zo=r(),K=c("div"),g(it.$$.fragment),ko=r(),Xt=c("p"),Xt.innerHTML=ms,vo=r(),g(Ne.$$.fragment),$o=r(),g(je.$$.fragment),gn=r(),Rt=c("p"),this.h()},l(e){const l=Ms("svelte-u9bgzb",document.head);n=p(l,"META",{name:!0,content:!0}),l.forEach(d),u=i(e),s=p(e,"P",{}),v(s).forEach(d),a=i(e),_(f.$$.fragment,e),t=i(e),_(w.$$.fragment,e),Et=i(e),Ue=p(e,"P",{"data-svelte-h":!0}),m(Ue)!=="svelte-158q8lq"&&(Ue.innerHTML=No),Qt=i(e),Ce=p(e,"P",{"data-svelte-h":!0}),m(Ce)!=="svelte-vfdo9a"&&(Ce.textContent=jo),Pt=i(e),Fe=p(e,"P",{"data-svelte-h":!0}),m(Fe)!=="svelte-abk8uh"&&(Fe.innerHTML=Jo),Lt=i(e),xe=p(e,"P",{"data-svelte-h":!0}),m(xe)!=="svelte-gkcmpf"&&(xe.innerHTML=Uo),Yt=i(e),_(Ze.$$.fragment,e),At=i(e),We=p(e,"UL",{"data-svelte-h":!0}),m(We)!=="svelte-mgusi3"&&(We.innerHTML=Co),Ot=i(e),_(Ie.$$.fragment,e),Dt=i(e),V=p(e,"DIV",{class:!0});var te=v(V);_(Ge.$$.fragment,te),bn=i(te),lt=p(te,"P",{"data-svelte-h":!0}),m(lt)!=="svelte-17z7q27"&&(lt.innerHTML=Fo),Mn=i(te),dt=p(te,"P",{"data-svelte-h":!0}),m(dt)!=="svelte-o55m63"&&(dt.innerHTML=xo),Tn=i(te),_(pe.$$.fragment,te),te.forEach(d),Kt=i(e),_(Ve.$$.fragment,e),en=i(e),k=p(e,"DIV",{class:!0});var j=v(k);_(He.$$.fragment,j),yn=i(j),ct=p(j,"P",{"data-svelte-h":!0}),m(ct)!=="svelte-137xuhh"&&(ct.textContent=Zo),wn=i(j),pt=p(j,"P",{"data-svelte-h":!0}),m(pt)!=="svelte-6pahdo"&&(pt.innerHTML=Wo),zn=i(j),ht=p(j,"P",{"data-svelte-h":!0}),m(ht)!=="svelte-hswkmf"&&(ht.innerHTML=Io),kn=i(j),mt=p(j,"P",{"data-svelte-h":!0}),m(mt)!=="svelte-1du13oj"&&(mt.innerHTML=Go),vn=i(j),ut=p(j,"P",{"data-svelte-h":!0}),m(ut)!=="svelte-174erte"&&(ut.innerHTML=Vo),$n=i(j),P=p(j,"DIV",{class:!0});var ne=v(P);_(qe.$$.fragment,ne),Nn=i(ne),ft=p(ne,"P",{"data-svelte-h":!0}),m(ft)!=="svelte-10hewxz"&&(ft.innerHTML=Ho),jn=i(ne),_(he.$$.fragment,ne),Jn=i(ne),_(me.$$.fragment,ne),ne.forEach(d),j.forEach(d),tn=i(e),_(Se.$$.fragment,e),nn=i(e),U=p(e,"DIV",{class:!0});var H=v(U);_(Be.$$.fragment,H),Un=i(H),gt=p(H,"P",{"data-svelte-h":!0}),m(gt)!=="svelte-18yrhh4"&&(gt.innerHTML=qo),Cn=i(H),_t=p(H,"P",{"data-svelte-h":!0}),m(_t)!=="svelte-6pahdo"&&(_t.innerHTML=So),Fn=i(H),bt=p(H,"P",{"data-svelte-h":!0}),m(bt)!=="svelte-hswkmf"&&(bt.innerHTML=Bo),xn=i(H),L=p(H,"DIV",{class:!0});var oe=v(L);_(Xe.$$.fragment,oe),Zn=i(oe),Mt=p(oe,"P",{"data-svelte-h":!0}),m(Mt)!=="svelte-kx4ox5"&&(Mt.innerHTML=Xo),Wn=i(oe),_(ue.$$.fragment,oe),In=i(oe),_(fe.$$.fragment,oe),oe.forEach(d),H.forEach(d),on=i(e),_(Re.$$.fragment,e),sn=i(e),C=p(e,"DIV",{class:!0});var q=v(C);_(Ee.$$.fragment,q),Gn=i(q),Tt=p(q,"P",{"data-svelte-h":!0}),m(Tt)!=="svelte-1lnby5k"&&(Tt.innerHTML=Ro),Vn=i(q),yt=p(q,"P",{"data-svelte-h":!0}),m(yt)!=="svelte-6pahdo"&&(yt.innerHTML=Eo),Hn=i(q),wt=p(q,"P",{"data-svelte-h":!0}),m(wt)!=="svelte-hswkmf"&&(wt.innerHTML=Qo),qn=i(q),Y=p(q,"DIV",{class:!0});var se=v(Y);_(Qe.$$.fragment,se),Sn=i(se),zt=p(se,"P",{"data-svelte-h":!0}),m(zt)!=="svelte-1b6mydv"&&(zt.innerHTML=Po),Bn=i(se),_(ge.$$.fragment,se),Xn=i(se),_(_e.$$.fragment,se),se.forEach(d),q.forEach(d),an=i(e),_(Pe.$$.fragment,e),rn=i(e),F=p(e,"DIV",{class:!0});var S=v(F);_(Le.$$.fragment,S),Rn=i(S),kt=p(S,"P",{"data-svelte-h":!0}),m(kt)!=="svelte-1sv5e2l"&&(kt.innerHTML=Lo),En=i(S),vt=p(S,"P",{"data-svelte-h":!0}),m(vt)!=="svelte-6pahdo"&&(vt.innerHTML=Yo),Qn=i(S),$t=p(S,"P",{"data-svelte-h":!0}),m($t)!=="svelte-hswkmf"&&($t.innerHTML=Ao),Pn=i(S),A=p(S,"DIV",{class:!0});var ae=v(A);_(Ye.$$.fragment,ae),Ln=i(ae),Nt=p(ae,"P",{"data-svelte-h":!0}),m(Nt)!=="svelte-x29bhl"&&(Nt.innerHTML=Oo),Yn=i(ae),_(be.$$.fragment,ae),An=i(ae),_(Me.$$.fragment,ae),ae.forEach(d),S.forEach(d),ln=i(e),_(Ae.$$.fragment,e),dn=i(e),x=p(e,"DIV",{class:!0});var B=v(x);_(Oe.$$.fragment,B),On=i(B),jt=p(B,"P",{"data-svelte-h":!0}),m(jt)!=="svelte-10n5i7s"&&(jt.textContent=Do),Dn=i(B),Jt=p(B,"P",{"data-svelte-h":!0}),m(Jt)!=="svelte-6pahdo"&&(Jt.innerHTML=Ko),Kn=i(B),Ut=p(B,"P",{"data-svelte-h":!0}),m(Ut)!=="svelte-hswkmf"&&(Ut.innerHTML=es),eo=i(B),G=p(B,"DIV",{class:!0});var X=v(G);_(De.$$.fragment,X),to=i(X),Ct=p(X,"P",{"data-svelte-h":!0}),m(Ct)!=="svelte-1t6n8pd"&&(Ct.innerHTML=ts),no=i(X),_(Te.$$.fragment,X),oo=i(X),_(ye.$$.fragment,X),so=i(X),_(we.$$.fragment,X),X.forEach(d),B.forEach(d),cn=i(e),_(Ke.$$.fragment,e),pn=i(e),Z=p(e,"DIV",{class:!0});var R=v(Z);_(et.$$.fragment,R),ao=i(R),Ft=p(R,"P",{"data-svelte-h":!0}),m(Ft)!=="svelte-ksq0kk"&&(Ft.textContent=ns),ro=i(R),xt=p(R,"P",{"data-svelte-h":!0}),m(xt)!=="svelte-6pahdo"&&(xt.innerHTML=os),io=i(R),Zt=p(R,"P",{"data-svelte-h":!0}),m(Zt)!=="svelte-hswkmf"&&(Zt.innerHTML=ss),lo=i(R),O=p(R,"DIV",{class:!0});var re=v(O);_(tt.$$.fragment,re),co=i(re),Wt=p(re,"P",{"data-svelte-h":!0}),m(Wt)!=="svelte-1hk80mt"&&(Wt.innerHTML=as),po=i(re),_(ze.$$.fragment,re),ho=i(re),_(ke.$$.fragment,re),re.forEach(d),R.forEach(d),hn=i(e),_(nt.$$.fragment,e),mn=i(e),W=p(e,"DIV",{class:!0});var E=v(W);_(ot.$$.fragment,E),mo=i(E),It=p(E,"P",{"data-svelte-h":!0}),m(It)!=="svelte-1hgqgbl"&&(It.textContent=rs),uo=i(E),Gt=p(E,"P",{"data-svelte-h":!0}),m(Gt)!=="svelte-6pahdo"&&(Gt.innerHTML=is),fo=i(E),Vt=p(E,"P",{"data-svelte-h":!0}),m(Vt)!=="svelte-hswkmf"&&(Vt.innerHTML=ls),go=i(E),D=p(E,"DIV",{class:!0});var ie=v(D);_(st.$$.fragment,ie),_o=i(ie),Ht=p(ie,"P",{"data-svelte-h":!0}),m(Ht)!=="svelte-1e4u0bt"&&(Ht.innerHTML=ds),bo=i(ie),_(ve.$$.fragment,ie),Mo=i(ie),_($e.$$.fragment,ie),ie.forEach(d),E.forEach(d),un=i(e),_(at.$$.fragment,e),fn=i(e),I=p(e,"DIV",{class:!0});var Q=v(I);_(rt.$$.fragment,Q),To=i(Q),qt=p(Q,"P",{"data-svelte-h":!0}),m(qt)!=="svelte-1ge7w0v"&&(qt.innerHTML=cs),yo=i(Q),St=p(Q,"P",{"data-svelte-h":!0}),m(St)!=="svelte-6pahdo"&&(St.innerHTML=ps),wo=i(Q),Bt=p(Q,"P",{"data-svelte-h":!0}),m(Bt)!=="svelte-hswkmf"&&(Bt.innerHTML=hs),zo=i(Q),K=p(Q,"DIV",{class:!0});var le=v(K);_(it.$$.fragment,le),ko=i(le),Xt=p(le,"P",{"data-svelte-h":!0}),m(Xt)!=="svelte-1wzpcj9"&&(Xt.innerHTML=ms),vo=i(le),_(Ne.$$.fragment,le),$o=i(le),_(je.$$.fragment,le),le.forEach(d),Q.forEach(d),gn=i(e),Rt=p(e,"P",{}),v(Rt).forEach(d),this.h()},h(){$(n,"name","hf:doc:metadata"),$(n,"content",Hs),$(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,l){o(document.head,n),h(e,u,l),h(e,s,l),h(e,a,l),b(f,e,l),h(e,t,l),b(w,e,l),h(e,Et,l),h(e,Ue,l),h(e,Qt,l),h(e,Ce,l),h(e,Pt,l),h(e,Fe,l),h(e,Lt,l),h(e,xe,l),h(e,Yt,l),b(Ze,e,l),h(e,At,l),h(e,We,l),h(e,Ot,l),b(Ie,e,l),h(e,Dt,l),h(e,V,l),b(Ge,V,null),o(V,bn),o(V,lt),o(V,Mn),o(V,dt),o(V,Tn),b(pe,V,null),h(e,Kt,l),b(Ve,e,l),h(e,en,l),h(e,k,l),b(He,k,null),o(k,yn),o(k,ct),o(k,wn),o(k,pt),o(k,zn),o(k,ht),o(k,kn),o(k,mt),o(k,vn),o(k,ut),o(k,$n),o(k,P),b(qe,P,null),o(P,Nn),o(P,ft),o(P,jn),b(he,P,null),o(P,Jn),b(me,P,null),h(e,tn,l),b(Se,e,l),h(e,nn,l),h(e,U,l),b(Be,U,null),o(U,Un),o(U,gt),o(U,Cn),o(U,_t),o(U,Fn),o(U,bt),o(U,xn),o(U,L),b(Xe,L,null),o(L,Zn),o(L,Mt),o(L,Wn),b(ue,L,null),o(L,In),b(fe,L,null),h(e,on,l),b(Re,e,l),h(e,sn,l),h(e,C,l),b(Ee,C,null),o(C,Gn),o(C,Tt),o(C,Vn),o(C,yt),o(C,Hn),o(C,wt),o(C,qn),o(C,Y),b(Qe,Y,null),o(Y,Sn),o(Y,zt),o(Y,Bn),b(ge,Y,null),o(Y,Xn),b(_e,Y,null),h(e,an,l),b(Pe,e,l),h(e,rn,l),h(e,F,l),b(Le,F,null),o(F,Rn),o(F,kt),o(F,En),o(F,vt),o(F,Qn),o(F,$t),o(F,Pn),o(F,A),b(Ye,A,null),o(A,Ln),o(A,Nt),o(A,Yn),b(be,A,null),o(A,An),b(Me,A,null),h(e,ln,l),b(Ae,e,l),h(e,dn,l),h(e,x,l),b(Oe,x,null),o(x,On),o(x,jt),o(x,Dn),o(x,Jt),o(x,Kn),o(x,Ut),o(x,eo),o(x,G),b(De,G,null),o(G,to),o(G,Ct),o(G,no),b(Te,G,null),o(G,oo),b(ye,G,null),o(G,so),b(we,G,null),h(e,cn,l),b(Ke,e,l),h(e,pn,l),h(e,Z,l),b(et,Z,null),o(Z,ao),o(Z,Ft),o(Z,ro),o(Z,xt),o(Z,io),o(Z,Zt),o(Z,lo),o(Z,O),b(tt,O,null),o(O,co),o(O,Wt),o(O,po),b(ze,O,null),o(O,ho),b(ke,O,null),h(e,hn,l),b(nt,e,l),h(e,mn,l),h(e,W,l),b(ot,W,null),o(W,mo),o(W,It),o(W,uo),o(W,Gt),o(W,fo),o(W,Vt),o(W,go),o(W,D),b(st,D,null),o(D,_o),o(D,Ht),o(D,bo),b(ve,D,null),o(D,Mo),b($e,D,null),h(e,un,l),b(at,e,l),h(e,fn,l),h(e,I,l),b(rt,I,null),o(I,To),o(I,qt),o(I,yo),o(I,St),o(I,wo),o(I,Bt),o(I,zo),o(I,K),b(it,K,null),o(K,ko),o(K,Xt),o(K,vo),b(Ne,K,null),o(K,$o),b(je,K,null),h(e,gn,l),h(e,Rt,l),_n=!0},p(e,[l]){const te={};l&2&&(te.$$scope={dirty:l,ctx:e}),pe.$set(te);const j={};l&2&&(j.$$scope={dirty:l,ctx:e}),he.$set(j);const ne={};l&2&&(ne.$$scope={dirty:l,ctx:e}),me.$set(ne);const H={};l&2&&(H.$$scope={dirty:l,ctx:e}),ue.$set(H);const oe={};l&2&&(oe.$$scope={dirty:l,ctx:e}),fe.$set(oe);const q={};l&2&&(q.$$scope={dirty:l,ctx:e}),ge.$set(q);const se={};l&2&&(se.$$scope={dirty:l,ctx:e}),_e.$set(se);const S={};l&2&&(S.$$scope={dirty:l,ctx:e}),be.$set(S);const ae={};l&2&&(ae.$$scope={dirty:l,ctx:e}),Me.$set(ae);const B={};l&2&&(B.$$scope={dirty:l,ctx:e}),Te.$set(B);const X={};l&2&&(X.$$scope={dirty:l,ctx:e}),ye.$set(X);const R={};l&2&&(R.$$scope={dirty:l,ctx:e}),we.$set(R);const re={};l&2&&(re.$$scope={dirty:l,ctx:e}),ze.$set(re);const E={};l&2&&(E.$$scope={dirty:l,ctx:e}),ke.$set(E);const ie={};l&2&&(ie.$$scope={dirty:l,ctx:e}),ve.$set(ie);const Q={};l&2&&(Q.$$scope={dirty:l,ctx:e}),$e.$set(Q);const le={};l&2&&(le.$$scope={dirty:l,ctx:e}),Ne.$set(le);const us={};l&2&&(us.$$scope={dirty:l,ctx:e}),je.$set(us)},i(e){_n||(M(f.$$.fragment,e),M(w.$$.fragment,e),M(Ze.$$.fragment,e),M(Ie.$$.fragment,e),M(Ge.$$.fragment,e),M(pe.$$.fragment,e),M(Ve.$$.fragment,e),M(He.$$.fragment,e),M(qe.$$.fragment,e),M(he.$$.fragment,e),M(me.$$.fragment,e),M(Se.$$.fragment,e),M(Be.$$.fragment,e),M(Xe.$$.fragment,e),M(ue.$$.fragment,e),M(fe.$$.fragment,e),M(Re.$$.fragment,e),M(Ee.$$.fragment,e),M(Qe.$$.fragment,e),M(ge.$$.fragment,e),M(_e.$$.fragment,e),M(Pe.$$.fragment,e),M(Le.$$.fragment,e),M(Ye.$$.fragment,e),M(be.$$.fragment,e),M(Me.$$.fragment,e),M(Ae.$$.fragment,e),M(Oe.$$.fragment,e),M(De.$$.fragment,e),M(Te.$$.fragment,e),M(ye.$$.fragment,e),M(we.$$.fragment,e),M(Ke.$$.fragment,e),M(et.$$.fragment,e),M(tt.$$.fragment,e),M(ze.$$.fragment,e),M(ke.$$.fragment,e),M(nt.$$.fragment,e),M(ot.$$.fragment,e),M(st.$$.fragment,e),M(ve.$$.fragment,e),M($e.$$.fragment,e),M(at.$$.fragment,e),M(rt.$$.fragment,e),M(it.$$.fragment,e),M(Ne.$$.fragment,e),M(je.$$.fragment,e),_n=!0)},o(e){T(f.$$.fragment,e),T(w.$$.fragment,e),T(Ze.$$.fragment,e),T(Ie.$$.fragment,e),T(Ge.$$.fragment,e),T(pe.$$.fragment,e),T(Ve.$$.fragment,e),T(He.$$.fragment,e),T(qe.$$.fragment,e),T(he.$$.fragment,e),T(me.$$.fragment,e),T(Se.$$.fragment,e),T(Be.$$.fragment,e),T(Xe.$$.fragment,e),T(ue.$$.fragment,e),T(fe.$$.fragment,e),T(Re.$$.fragment,e),T(Ee.$$.fragment,e),T(Qe.$$.fragment,e),T(ge.$$.fragment,e),T(_e.$$.fragment,e),T(Pe.$$.fragment,e),T(Le.$$.fragment,e),T(Ye.$$.fragment,e),T(be.$$.fragment,e),T(Me.$$.fragment,e),T(Ae.$$.fragment,e),T(Oe.$$.fragment,e),T(De.$$.fragment,e),T(Te.$$.fragment,e),T(ye.$$.fragment,e),T(we.$$.fragment,e),T(Ke.$$.fragment,e),T(et.$$.fragment,e),T(tt.$$.fragment,e),T(ze.$$.fragment,e),T(ke.$$.fragment,e),T(nt.$$.fragment,e),T(ot.$$.fragment,e),T(st.$$.fragment,e),T(ve.$$.fragment,e),T($e.$$.fragment,e),T(at.$$.fragment,e),T(rt.$$.fragment,e),T(it.$$.fragment,e),T(Ne.$$.fragment,e),T(je.$$.fragment,e),_n=!1},d(e){e&&(d(u),d(s),d(a),d(t),d(Et),d(Ue),d(Qt),d(Ce),d(Pt),d(Fe),d(Lt),d(xe),d(Yt),d(At),d(We),d(Ot),d(Dt),d(V),d(Kt),d(en),d(k),d(tn),d(nn),d(U),d(on),d(sn),d(C),d(an),d(rn),d(F),d(ln),d(dn),d(x),d(cn),d(pn),d(Z),d(hn),d(mn),d(W),d(un),d(fn),d(I),d(gn),d(Rt)),d(n),y(f,e),y(w,e),y(Ze,e),y(Ie,e),y(Ge),y(pe),y(Ve,e),y(He),y(qe),y(he),y(me),y(Se,e),y(Be),y(Xe),y(ue),y(fe),y(Re,e),y(Ee),y(Qe),y(ge),y(_e),y(Pe,e),y(Le),y(Ye),y(be),y(Me),y(Ae,e),y(Oe),y(De),y(Te),y(ye),y(we),y(Ke,e),y(et),y(tt),y(ze),y(ke),y(nt,e),y(ot),y(st),y(ve),y($e),y(at,e),y(rt),y(it),y(Ne),y(je)}}}const Hs='{"title":"Nezha","local":"nezha","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"NezhaConfig","local":"transformers.NezhaConfig","sections":[],"depth":2},{"title":"NezhaModel","local":"transformers.NezhaModel","sections":[],"depth":2},{"title":"NezhaForPreTraining","local":"transformers.NezhaForPreTraining","sections":[],"depth":2},{"title":"NezhaForMaskedLM","local":"transformers.NezhaForMaskedLM","sections":[],"depth":2},{"title":"NezhaForNextSentencePrediction","local":"transformers.NezhaForNextSentencePrediction","sections":[],"depth":2},{"title":"NezhaForSequenceClassification","local":"transformers.NezhaForSequenceClassification","sections":[],"depth":2},{"title":"NezhaForMultipleChoice","local":"transformers.NezhaForMultipleChoice","sections":[],"depth":2},{"title":"NezhaForTokenClassification","local":"transformers.NezhaForTokenClassification","sections":[],"depth":2},{"title":"NezhaForQuestionAnswering","local":"transformers.NezhaForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function qs(z){return gs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ls extends _s{constructor(n){super(),bs(this,n,qs,Vs,fs,{})}}export{Ls as component};
