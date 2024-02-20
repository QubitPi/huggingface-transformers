import{s as Ks,o as ea,n as N}from"../chunks/scheduler.9bc65507.js";import{S as ta,i as na,g as d,s as a,r as u,A as oa,h as p,f as l,c as r,j as F,u as h,x as y,k as $,y as o,a as m,v as f,d as g,t as _,w as b}from"../chunks/index.707bf1b6.js";import{T as Qe}from"../chunks/Tip.c2ecdbf4.js";import{D as v}from"../chunks/Docstring.17db21ae.js";import{C as D}from"../chunks/CodeBlock.54a9f38d.js";import{E as Y}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as J}from"../chunks/Heading.342b1fa6.js";function sa(k){let n,M="Example:",i,s,T;return s=new D({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEZOZXRDb25maWclMkMlMjBGTmV0TW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwRk5ldCUyMGZuZXQtYmFzZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBGTmV0Q29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGZuZXQtYmFzZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwRk5ldE1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetConfig, FNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a FNet fnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = FNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the fnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-11lpom8"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function aa(k){let n,M="pair mask has the following format: :",i,s,T;return s=new D({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAlN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:'<span class="hljs-attribute">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> | first sequence | second sequence |',wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-1tt92nt"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function ra(k){let n,M="sequence pair mask has the following format:",i,s,T;return s=new D({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMEElN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTIwJTIwJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-16klr56"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function ia(k){let n,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=d("p"),n.innerHTML=M},l(i){n=p(i,"P",{"data-svelte-h":!0}),y(n)!=="svelte-fincs2"&&(n.innerHTML=M)},m(i,s){m(i,n,s)},p:N,d(i){i&&l(n)}}}function la(k){let n,M="Example:",i,s,T;return s=new D({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGTmV0TW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZOZXRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGZm5ldC1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetModel.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-11lpom8"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function ca(k){let n,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=d("p"),n.innerHTML=M},l(i){n=p(i,"P",{"data-svelte-h":!0}),y(n)!=="svelte-fincs2"&&(n.innerHTML=M)},m(i,s){m(i,n,s)},p:N,d(i){i&&l(n)}}}function da(k){let n,M="Example:",i,s,T;return s=new D({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGTmV0Rm9yUHJlVHJhaW5pbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZOZXRGb3JQcmVUcmFpbmluZy5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGZm5ldC1iYXNlJTIyKSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBcHJlZGljdGlvbl9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLnByZWRpY3Rpb25fbG9naXRzJTBBc2VxX3JlbGF0aW9uc2hpcF9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLnNlcV9yZWxhdGlvbnNoaXBfbG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FNetForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-11lpom8"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function pa(k){let n,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=d("p"),n.innerHTML=M},l(i){n=p(i,"P",{"data-svelte-h":!0}),y(n)!=="svelte-fincs2"&&(n.innerHTML=M)},m(i,s){m(i,n,s)},p:N,d(i){i&&l(n)}}}function ma(k){let n,M="Example:",i,s,T;return s=new D({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGTmV0Rm9yTWFza2VkTE0lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZOZXRGb3JNYXNrZWRMTS5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGZm5ldC1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjBGcmFuY2UlMjBpcyUyMCU1Qk1BU0slNUQuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQSUyMyUyMHJldHJpZXZlJTIwaW5kZXglMjBvZiUyMCU1Qk1BU0slNUQlMEFtYXNrX3Rva2VuX2luZGV4JTIwJTNEJTIwKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCklNUIwJTVELm5vbnplcm8oYXNfdHVwbGUlM0RUcnVlKSU1QjAlNUQlMEElMEFwcmVkaWN0ZWRfdG9rZW5faWQlMjAlM0QlMjBsb2dpdHMlNUIwJTJDJTIwbWFza190b2tlbl9pbmRleCU1RC5hcmdtYXgoYXhpcyUzRC0xKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjBGcmFuY2UlMjBpcyUyMFBhcmlzLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTBBJTIzJTIwbWFzayUyMGxhYmVscyUyMG9mJTIwbm9uLSU1Qk1BU0slNUQlMjB0b2tlbnMlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC53aGVyZShpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQlMkMlMjBsYWJlbHMlMkMlMjAtMTAwKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-11lpom8"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function ua(k){let n,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=d("p"),n.innerHTML=M},l(i){n=p(i,"P",{"data-svelte-h":!0}),y(n)!=="svelte-fincs2"&&(n.innerHTML=M)},m(i,s){m(i,n,s)},p:N,d(i){i&&l(n)}}}function ha(k){let n,M="Example:",i,s,T;return s=new D({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGTmV0Rm9yTmV4dFNlbnRlbmNlUHJlZGljdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGZm5ldC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwRk5ldEZvck5leHRTZW50ZW5jZVByZWRpY3Rpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiklMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBbmV4dF9zZW50ZW5jZSUyMCUzRCUyMCUyMlRoZSUyMHNreSUyMGlzJTIwYmx1ZSUyMGR1ZSUyMHRvJTIwdGhlJTIwc2hvcnRlciUyMHdhdmVsZW5ndGglMjBvZiUyMGJsdWUlMjBsaWdodC4lMjIlMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplcihwcm9tcHQlMkMlMjBuZXh0X3NlbnRlbmNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiplbmNvZGluZyUyQyUyMGxhYmVscyUzRHRvcmNoLkxvbmdUZW5zb3IoJTVCMSU1RCkpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHMlMEFhc3NlcnQlMjBsb2dpdHMlNUIwJTJDJTIwMCU1RCUyMCUzQyUyMGxvZ2l0cyU1QjAlMkMlMjAxJTVEJTIwJTIwJTIzJTIwbmV4dCUyMHNlbnRlbmNlJTIwd2FzJTIwcmFuZG9t",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FNetForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-11lpom8"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function fa(k){let n,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=d("p"),n.innerHTML=M},l(i){n=p(i,"P",{"data-svelte-h":!0}),y(n)!=="svelte-fincs2"&&(n.innerHTML=M)},m(i,s){m(i,n,s)},p:N,d(i){i&&l(n)}}}function ga(k){let n,M="Example of single-label classification:",i,s,T;return s=new D({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEZOZXRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGZm5ldC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwRk5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KCkuaXRlbSgpJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwRk5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-ykxpe4"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function _a(k){let n,M="Example of multi-label classification:",i,s,T;return s=new D({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEZOZXRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGZm5ldC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwRk5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiUyQyUyMHByb2JsZW1fdHlwZSUzRCUyMm11bHRpX2xhYmVsX2NsYXNzaWZpY2F0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZHMlMjAlM0QlMjB0b3JjaC5hcmFuZ2UoMCUyQyUyMGxvZ2l0cy5zaGFwZSU1Qi0xJTVEKSU1QnRvcmNoLnNpZ21vaWQobG9naXRzKS5zcXVlZXplKGRpbSUzRDApJTIwJTNFJTIwMC41JTVEJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwRk5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/fnet-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-1l8e32d"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function ba(k){let n,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=d("p"),n.innerHTML=M},l(i){n=p(i,"P",{"data-svelte-h":!0}),y(n)!=="svelte-fincs2"&&(n.innerHTML=M)},m(i,s){m(i,n,s)},p:N,d(i){i&&l(n)}}}function Ta(k){let n,M="Example:",i,s,T;return s=new D({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGTmV0Rm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZOZXRGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGZm5ldC1iYXNlJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMkluJTIwSXRhbHklMkMlMjBwaXp6YSUyMHNlcnZlZCUyMGluJTIwZm9ybWFsJTIwc2V0dGluZ3MlMkMlMjBzdWNoJTIwYXMlMjBhdCUyMGElMjByZXN0YXVyYW50JTJDJTIwaXMlMjBwcmVzZW50ZWQlMjB1bnNsaWNlZC4lMjIlMEFjaG9pY2UwJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2l0aCUyMGElMjBmb3JrJTIwYW5kJTIwYSUyMGtuaWZlLiUyMiUwQWNob2ljZTElMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aGlsZSUyMGhlbGQlMjBpbiUyMHRoZSUyMGhhbmQuJTIyJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gudGVuc29yKDApLnVuc3F1ZWV6ZSgwKSUyMCUyMCUyMyUyMGNob2ljZTAlMjBpcyUyMGNvcnJlY3QlMjAoYWNjb3JkaW5nJTIwdG8lMjBXaWtpcGVkaWElMjAlM0IpKSUyQyUyMGJhdGNoJTIwc2l6ZSUyMDElMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglNUJwcm9tcHQlMkMlMjBwcm9tcHQlNUQlMkMlMjAlNUJjaG9pY2UwJTJDJTIwY2hvaWNlMSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiolN0JrJTNBJTIwdi51bnNxdWVlemUoMCklMjBmb3IlMjBrJTJDJTIwdiUyMGluJTIwZW5jb2RpbmcuaXRlbXMoKSU3RCUyQyUyMGxhYmVscyUzRGxhYmVscyklMjAlMjAlMjMlMjBiYXRjaCUyMHNpemUlMjBpcyUyMDElMEElMEElMjMlMjB0aGUlMjBsaW5lYXIlMjBjbGFzc2lmaWVyJTIwc3RpbGwlMjBuZWVkcyUyMHRvJTIwYmUlMjB0cmFpbmVkJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-11lpom8"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function Ma(k){let n,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=d("p"),n.innerHTML=M},l(i){n=p(i,"P",{"data-svelte-h":!0}),y(n)!=="svelte-fincs2"&&(n.innerHTML=M)},m(i,s){m(i,n,s)},p:N,d(i){i&&l(n)}}}function ya(k){let n,M="Example:",i,s,T;return s=new D({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGTmV0Rm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGZm5ldC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwRk5ldEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0Lml0ZW0oKSU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVEJTVEJTBBJTBBbGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-11lpom8"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function wa(k){let n,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=d("p"),n.innerHTML=M},l(i){n=p(i,"P",{"data-svelte-h":!0}),y(n)!=="svelte-fincs2"&&(n.innerHTML=M)},m(i,s){m(i,n,s)},p:N,d(i){i&&l(n)}}}function ka(k){let n,M="Example:",i,s,T;return s=new D({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGTmV0Rm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmZuZXQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZOZXRGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGZm5ldC1iYXNlJTIyKSUwQSUwQXF1ZXN0aW9uJTJDJTIwdGV4dCUyMCUzRCUyMCUyMldobyUyMHdhcyUyMEppbSUyMEhlbnNvbiUzRiUyMiUyQyUyMCUyMkppbSUyMEhlbnNvbiUyMHdhcyUyMGElMjBuaWNlJTIwcHVwcGV0JTIyJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHF1ZXN0aW9uJTJDJTIwdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMG91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLnN0YXJ0X2xvZ2l0cy5hcmdtYXgoKSUwQWFuc3dlcl9lbmRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLmVuZF9sb2dpdHMuYXJnbWF4KCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCMCUyQyUyMGFuc3dlcl9zdGFydF9pbmRleCUyMCUzQSUyMGFuc3dlcl9lbmRfaW5kZXglMjAlMkIlMjAxJTVEJTBBJTBBJTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE0JTVEKSUwQXRhcmdldF9lbmRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTUlNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwc3RhcnRfcG9zaXRpb25zJTNEdGFyZ2V0X3N0YXJ0X2luZGV4JTJDJTIwZW5kX3Bvc2l0aW9ucyUzRHRhcmdldF9lbmRfaW5kZXgpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){n=d("p"),n.textContent=M,i=a(),u(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-11lpom8"&&(n.textContent=M),i=r(t),h(s.$$.fragment,t)},m(t,w){m(t,n,w),m(t,i,w),f(s,t,w),T=!0},p:N,i(t){T||(g(s.$$.fragment,t),T=!0)},o(t){_(s.$$.fragment,t),T=!1},d(t){t&&(l(n),l(i)),b(s,t)}}}function Fa(k){let n,M,i,s,T,t,w,Mn,Le,us=`The FNet model was proposed in <a href="https://arxiv.org/abs/2105.03824" rel="nofollow">FNet: Mixing Tokens with Fourier Transforms</a> by
James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon. The model replaces the self-attention layer in a BERT
model with a fourier transform which returns only the real parts of the transform. The model is significantly faster
than the BERT model because it has fewer parameters and is more memory efficient. The model achieves about 92-97%
accuracy of BERT counterparts on GLUE benchmark, and trains much faster than the BERT model. The abstract from the
paper is the following:`,yn,He,hs=`<em>We show that Transformer encoder architectures can be sped up, with limited accuracy costs, by replacing the
self-attention sublayers with simple linear transformations that “mix” input tokens. These linear mixers, along with
standard nonlinearities in feed-forward layers, prove competent at modeling semantic relationships in several text
classification tasks. Most surprisingly, we find that replacing the self-attention sublayer in a Transformer encoder
with a standard, unparameterized Fourier Transform achieves 92-97% of the accuracy of BERT counterparts on the GLUE
benchmark, but trains 80% faster on GPUs and 70% faster on TPUs at standard 512 input lengths. At longer input lengths,
our FNet model is significantly faster: when compared to the “efficient” Transformers on the Long Range Arena
benchmark, FNet matches the accuracy of the most accurate models, while outpacing the fastest models across all
sequence lengths on GPUs (and across relatively shorter lengths on TPUs). Finally, FNet has a light memory footprint
and is particularly efficient at smaller model sizes; for a fixed speed and accuracy budget, small FNet models
outperform Transformer counterparts.</em>`,wn,Ee,fs='This model was contributed by <a href="https://huggingface.co/gchhablani" rel="nofollow">gchhablani</a>. The original code can be found <a href="https://github.com/google-research/google-research/tree/master/f_net" rel="nofollow">here</a>.',kn,Pe,Fn,Ae,gs=`The model was trained without an attention mask as it is based on Fourier Transform. The model was trained with
maximum sequence length 512 which includes pad tokens. Hence, it is highly recommended to use the same maximum
sequence length for fine-tuning and inference.`,$n,Ye,vn,De,_s='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',Nn,Oe,xn,z,Ke,Dn,Zt,bs=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetModel">FNetModel</a>. It is used to instantiate an FNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the FNet
<a href="https://huggingface.co/google/fnet-base" rel="nofollow">google/fnet-base</a> architecture.`,On,qt,Ts=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Kn,be,jn,et,Jn,x,tt,eo,Wt,Ms=`Construct an FNet tokenizer. Adapted from <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>. This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>
which contains most of the main methods. Users should refer to this superclass for more information regarding those
methods.`,to,me,nt,no,St,ys=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An FNet sequence has the following format:`,oo,Bt,ws="<li>single sequence: <code>[CLS] X [SEP]</code></li> <li>pair of sequences: <code>[CLS] A [SEP] B [SEP]</code></li>",so,Te,ot,ao,Rt,ks=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,ro,V,st,io,Vt,Fs="Create a mask from the two sequences passed to be used in a sequence-pair classification task. An FNet sequence",lo,Me,co,Xt,$s="If <code>token_ids_1</code> is <code>None</code>, this method only returns the first portion of the mask (0s).",po,Gt,at,Un,rt,zn,C,it,mo,Qt,vs=`Construct a “fast” FNetTokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Adapted from
<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizerFast">AlbertTokenizerFast</a>. Based on
<a href="https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models" rel="nofollow">Unigram</a>. This
tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`,uo,ue,lt,ho,Lt,Ns=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An FNet sequence has the following format:`,fo,Ht,xs="<li>single sequence: <code>[CLS] X [SEP]</code></li> <li>pair of sequences: <code>[CLS] A [SEP] B [SEP]</code></li>",go,X,ct,_o,Et,js="Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An FNet",bo,ye,To,Pt,Js="if token_ids_1 is None, only returns the first portion of the mask (0s).",Cn,dt,In,I,pt,Mo,At,Us=`The bare FNet Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,yo,Yt,zs=`The model can behave as an encoder, following the architecture described in <a href="https://arxiv.org/abs/2105.03824" rel="nofollow">FNet: Mixing Tokens with Fourier
Transforms</a> by James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon.`,wo,G,mt,ko,Dt,Cs='The <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetModel">FNetModel</a> forward method, overrides the <code>__call__</code> special method.',Fo,we,$o,ke,Zn,ut,qn,Z,ht,vo,Ot,Is="FNet Model with two heads on top as done during the pretraining: a <code>masked language modeling</code> head and a <code>next sentence prediction (classification)</code> head.",No,Kt,Zs=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,xo,Q,ft,jo,en,qs='The <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetForPreTraining">FNetForPreTraining</a> forward method, overrides the <code>__call__</code> special method.',Jo,Fe,Uo,$e,Wn,gt,Sn,O,_t,zo,tn,Ws=`FNet Model with a <code>language modeling</code> head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Co,L,bt,Io,nn,Ss='The <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetForMaskedLM">FNetForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Zo,ve,qo,Ne,Bn,Tt,Rn,K,Mt,Wo,on,Bs=`FNet Model with a <code>next sentence prediction (classification)</code> head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,So,H,yt,Bo,sn,Rs='The <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetForNextSentencePrediction">FNetForNextSentencePrediction</a> forward method, overrides the <code>__call__</code> special method.',Ro,xe,Vo,je,Vn,wt,Xn,q,kt,Xo,an,Vs=`FNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,Go,rn,Xs=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Qo,U,Ft,Lo,ln,Gs='The <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetForSequenceClassification">FNetForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Ho,Je,Eo,Ue,Po,ze,Gn,$t,Qn,W,vt,Ao,cn,Qs=`FNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,Yo,dn,Ls=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Do,E,Nt,Oo,pn,Hs='The <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetForMultipleChoice">FNetForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Ko,Ce,es,Ie,Ln,xt,Hn,S,jt,ts,mn,Es=`FNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,ns,un,Ps=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,os,P,Jt,ss,hn,As='The <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetForTokenClassification">FNetForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',as,Ze,rs,qe,En,Ut,Pn,B,zt,is,fn,Ys=`FNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,ls,gn,Ds=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,cs,A,Ct,ds,_n,Os='The <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetForQuestionAnswering">FNetForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',ps,We,ms,Se,An,bn,Yn;return T=new J({props:{title:"FNet",local:"fnet",headingTag:"h1"}}),w=new J({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Pe=new J({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Ye=new J({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Oe=new J({props:{title:"FNetConfig",local:"transformers.FNetConfig",headingTag:"h2"}}),Ke=new v({props:{name:"class transformers.FNetConfig",anchor:"transformers.FNetConfig",parameters:[{name:"vocab_size",val:" = 32000"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 4"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_tpu_fourier_optimizations",val:" = False"},{name:"tpu_short_seq_length",val:" = 512"},{name:"pad_token_id",val:" = 3"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32000) &#x2014;
Vocabulary size of the FNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetModel">FNetModel</a> or <code>TFFNetModel</code>.`,name:"vocab_size"},{anchor:"transformers.FNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.FNetConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.FNetConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.FNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.FNetConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.FNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.FNetConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetModel">FNetModel</a> or <code>TFFNetModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.FNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.FNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.FNetConfig.use_tpu_fourier_optimizations",description:`<strong>use_tpu_fourier_optimizations</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Determines whether to use TPU optimized FFTs. If <code>True</code>, the model will favor axis-wise FFTs transforms.
Set to <code>False</code> for GPU/CPU hardware, in which case n-dimensional FFTs are used.`,name:"use_tpu_fourier_optimizations"},{anchor:"transformers.FNetConfig.tpu_short_seq_length",description:`<strong>tpu_short_seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The sequence length that is expected by the model when using TPUs. This will be used to initialize the DFT
matrix only when <em>use_tpu_fourier_optimizations</em> is set to <code>True</code> and the input sequence is shorter than or
equal to 4096 tokens.`,name:"tpu_short_seq_length"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/configuration_fnet.py#L30"}}),be=new Y({props:{anchor:"transformers.FNetConfig.example",$$slots:{default:[sa]},$$scope:{ctx:k}}}),et=new J({props:{title:"FNetTokenizer",local:"transformers.FNetTokenizer",headingTag:"h2"}}),tt=new v({props:{name:"class transformers.FNetTokenizer",anchor:"transformers.FNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.FNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.FNetTokenizer.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.FNetTokenizer.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.FNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.FNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.FNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.FNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.FNetTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.FNetTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/tokenization_fnet.py#L46"}}),nt=new v({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/tokenization_fnet.py#L254",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ot=new v({props:{name:"get_special_tokens_mask",anchor:"transformers.FNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/tokenization_fnet.py#L279",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),st=new v({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/tokenization_fnet.py#L307",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Me=new Y({props:{anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[aa]},$$scope:{ctx:k}}}),at=new v({props:{name:"save_vocabulary",anchor:"transformers.FNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/tokenization_fnet.py#L336"}}),rt=new J({props:{title:"FNetTokenizerFast",local:"transformers.FNetTokenizerFast",headingTag:"h2"}}),it=new v({props:{name:"class transformers.FNetTokenizerFast",anchor:"transformers.FNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.FNetTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.FNetTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.FNetTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.FNetTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FNetTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.FNetTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.FNetTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.FNetTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/tokenization_fnet_fast.py#L54"}}),lt=new v({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FNetTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/tokenization_fnet_fast.py#L138",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ct=new v({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/tokenization_fnet_fast.py#L163",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ye=new Y({props:{anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[ra]},$$scope:{ctx:k}}}),dt=new J({props:{title:"FNetModel",local:"transformers.FNetModel",headingTag:"h2"}}),pt=new v({props:{name:"class transformers.FNetModel",anchor:"transformers.FNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.FNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L500"}}),mt=new v({props:{name:"forward",anchor:"transformers.FNetModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L530",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),we=new Qe({props:{$$slots:{default:[ia]},$$scope:{ctx:k}}}),ke=new Y({props:{anchor:"transformers.FNetModel.forward.example",$$slots:{default:[la]},$$scope:{ctx:k}}}),ut=new J({props:{title:"FNetForPreTraining",local:"transformers.FNetForPreTraining",headingTag:"h2"}}),ht=new v({props:{name:"class transformers.FNetForPreTraining",anchor:"transformers.FNetForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L606"}}),ft=new v({props:{name:"forward",anchor:"transformers.FNetForPreTraining.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"next_sentence_label",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.FNetForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.FNetForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L631",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.fnet.modeling_fnet.FNetForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) — Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</li>
<li><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</li>
<li><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) — Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.fnet.modeling_fnet.FNetForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fe=new Qe({props:{$$slots:{default:[ca]},$$scope:{ctx:k}}}),$e=new Y({props:{anchor:"transformers.FNetForPreTraining.forward.example",$$slots:{default:[da]},$$scope:{ctx:k}}}),gt=new J({props:{title:"FNetForMaskedLM",local:"transformers.FNetForMaskedLM",headingTag:"h2"}}),_t=new v({props:{name:"class transformers.FNetForMaskedLM",anchor:"transformers.FNetForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L706"}}),bt=new v({props:{name:"forward",anchor:"transformers.FNetForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L725",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),ve=new Qe({props:{$$slots:{default:[pa]},$$scope:{ctx:k}}}),Ne=new Y({props:{anchor:"transformers.FNetForMaskedLM.forward.example",$$slots:{default:[ma]},$$scope:{ctx:k}}}),Tt=new J({props:{title:"FNetForNextSentencePrediction",local:"transformers.FNetForNextSentencePrediction",headingTag:"h2"}}),Mt=new v({props:{name:"class transformers.FNetForNextSentencePrediction",anchor:"transformers.FNetForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L773"}}),yt=new v({props:{name:"forward",anchor:"transformers.FNetForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L787",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),xe=new Qe({props:{$$slots:{default:[ua]},$$scope:{ctx:k}}}),je=new Y({props:{anchor:"transformers.FNetForNextSentencePrediction.forward.example",$$slots:{default:[ha]},$$scope:{ctx:k}}}),wt=new J({props:{title:"FNetForSequenceClassification",local:"transformers.FNetForSequenceClassification",headingTag:"h2"}}),kt=new v({props:{name:"class transformers.FNetForSequenceClassification",anchor:"transformers.FNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L865"}}),Ft=new v({props:{name:"forward",anchor:"transformers.FNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L884",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),Je=new Qe({props:{$$slots:{default:[fa]},$$scope:{ctx:k}}}),Ue=new Y({props:{anchor:"transformers.FNetForSequenceClassification.forward.example",$$slots:{default:[ga]},$$scope:{ctx:k}}}),ze=new Y({props:{anchor:"transformers.FNetForSequenceClassification.forward.example-2",$$slots:{default:[_a]},$$scope:{ctx:k}}}),$t=new J({props:{title:"FNetForMultipleChoice",local:"transformers.FNetForMultipleChoice",headingTag:"h2"}}),vt=new v({props:{name:"class transformers.FNetForMultipleChoice",anchor:"transformers.FNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L950"}}),Nt=new v({props:{name:"forward",anchor:"transformers.FNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L968",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),Ce=new Qe({props:{$$slots:{default:[ba]},$$scope:{ctx:k}}}),Ie=new Y({props:{anchor:"transformers.FNetForMultipleChoice.forward.example",$$slots:{default:[Ta]},$$scope:{ctx:k}}}),xt=new J({props:{title:"FNetForTokenClassification",local:"transformers.FNetForTokenClassification",headingTag:"h2"}}),jt=new v({props:{name:"class transformers.FNetForTokenClassification",anchor:"transformers.FNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L1029"}}),Jt=new v({props:{name:"forward",anchor:"transformers.FNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L1049",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),Ze=new Qe({props:{$$slots:{default:[Ma]},$$scope:{ctx:k}}}),qe=new Y({props:{anchor:"transformers.FNetForTokenClassification.forward.example",$$slots:{default:[ya]},$$scope:{ctx:k}}}),Ut=new J({props:{title:"FNetForQuestionAnswering",local:"transformers.FNetForQuestionAnswering",headingTag:"h2"}}),zt=new v({props:{name:"class transformers.FNetForQuestionAnswering",anchor:"transformers.FNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L1098"}}),Ct=new v({props:{name:"forward",anchor:"transformers.FNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L1117",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),We=new Qe({props:{$$slots:{default:[wa]},$$scope:{ctx:k}}}),Se=new Y({props:{anchor:"transformers.FNetForQuestionAnswering.forward.example",$$slots:{default:[ka]},$$scope:{ctx:k}}}),{c(){n=d("meta"),M=a(),i=d("p"),s=a(),u(T.$$.fragment),t=a(),u(w.$$.fragment),Mn=a(),Le=d("p"),Le.innerHTML=us,yn=a(),He=d("p"),He.innerHTML=hs,wn=a(),Ee=d("p"),Ee.innerHTML=fs,kn=a(),u(Pe.$$.fragment),Fn=a(),Ae=d("p"),Ae.textContent=gs,$n=a(),u(Ye.$$.fragment),vn=a(),De=d("ul"),De.innerHTML=_s,Nn=a(),u(Oe.$$.fragment),xn=a(),z=d("div"),u(Ke.$$.fragment),Dn=a(),Zt=d("p"),Zt.innerHTML=bs,On=a(),qt=d("p"),qt.innerHTML=Ts,Kn=a(),u(be.$$.fragment),jn=a(),u(et.$$.fragment),Jn=a(),x=d("div"),u(tt.$$.fragment),eo=a(),Wt=d("p"),Wt.innerHTML=Ms,to=a(),me=d("div"),u(nt.$$.fragment),no=a(),St=d("p"),St.textContent=ys,oo=a(),Bt=d("ul"),Bt.innerHTML=ws,so=a(),Te=d("div"),u(ot.$$.fragment),ao=a(),Rt=d("p"),Rt.innerHTML=ks,ro=a(),V=d("div"),u(st.$$.fragment),io=a(),Vt=d("p"),Vt.textContent=Fs,lo=a(),u(Me.$$.fragment),co=a(),Xt=d("p"),Xt.innerHTML=$s,po=a(),Gt=d("div"),u(at.$$.fragment),Un=a(),u(rt.$$.fragment),zn=a(),C=d("div"),u(it.$$.fragment),mo=a(),Qt=d("p"),Qt.innerHTML=vs,uo=a(),ue=d("div"),u(lt.$$.fragment),ho=a(),Lt=d("p"),Lt.textContent=Ns,fo=a(),Ht=d("ul"),Ht.innerHTML=xs,go=a(),X=d("div"),u(ct.$$.fragment),_o=a(),Et=d("p"),Et.textContent=js,bo=a(),u(ye.$$.fragment),To=a(),Pt=d("p"),Pt.textContent=Js,Cn=a(),u(dt.$$.fragment),In=a(),I=d("div"),u(pt.$$.fragment),Mo=a(),At=d("p"),At.innerHTML=Us,yo=a(),Yt=d("p"),Yt.innerHTML=zs,wo=a(),G=d("div"),u(mt.$$.fragment),ko=a(),Dt=d("p"),Dt.innerHTML=Cs,Fo=a(),u(we.$$.fragment),$o=a(),u(ke.$$.fragment),Zn=a(),u(ut.$$.fragment),qn=a(),Z=d("div"),u(ht.$$.fragment),vo=a(),Ot=d("p"),Ot.innerHTML=Is,No=a(),Kt=d("p"),Kt.innerHTML=Zs,xo=a(),Q=d("div"),u(ft.$$.fragment),jo=a(),en=d("p"),en.innerHTML=qs,Jo=a(),u(Fe.$$.fragment),Uo=a(),u($e.$$.fragment),Wn=a(),u(gt.$$.fragment),Sn=a(),O=d("div"),u(_t.$$.fragment),zo=a(),tn=d("p"),tn.innerHTML=Ws,Co=a(),L=d("div"),u(bt.$$.fragment),Io=a(),nn=d("p"),nn.innerHTML=Ss,Zo=a(),u(ve.$$.fragment),qo=a(),u(Ne.$$.fragment),Bn=a(),u(Tt.$$.fragment),Rn=a(),K=d("div"),u(Mt.$$.fragment),Wo=a(),on=d("p"),on.innerHTML=Bs,So=a(),H=d("div"),u(yt.$$.fragment),Bo=a(),sn=d("p"),sn.innerHTML=Rs,Ro=a(),u(xe.$$.fragment),Vo=a(),u(je.$$.fragment),Vn=a(),u(wt.$$.fragment),Xn=a(),q=d("div"),u(kt.$$.fragment),Xo=a(),an=d("p"),an.textContent=Vs,Go=a(),rn=d("p"),rn.innerHTML=Xs,Qo=a(),U=d("div"),u(Ft.$$.fragment),Lo=a(),ln=d("p"),ln.innerHTML=Gs,Ho=a(),u(Je.$$.fragment),Eo=a(),u(Ue.$$.fragment),Po=a(),u(ze.$$.fragment),Gn=a(),u($t.$$.fragment),Qn=a(),W=d("div"),u(vt.$$.fragment),Ao=a(),cn=d("p"),cn.textContent=Qs,Yo=a(),dn=d("p"),dn.innerHTML=Ls,Do=a(),E=d("div"),u(Nt.$$.fragment),Oo=a(),pn=d("p"),pn.innerHTML=Hs,Ko=a(),u(Ce.$$.fragment),es=a(),u(Ie.$$.fragment),Ln=a(),u(xt.$$.fragment),Hn=a(),S=d("div"),u(jt.$$.fragment),ts=a(),mn=d("p"),mn.textContent=Es,ns=a(),un=d("p"),un.innerHTML=Ps,os=a(),P=d("div"),u(Jt.$$.fragment),ss=a(),hn=d("p"),hn.innerHTML=As,as=a(),u(Ze.$$.fragment),rs=a(),u(qe.$$.fragment),En=a(),u(Ut.$$.fragment),Pn=a(),B=d("div"),u(zt.$$.fragment),is=a(),fn=d("p"),fn.innerHTML=Ys,ls=a(),gn=d("p"),gn.innerHTML=Ds,cs=a(),A=d("div"),u(Ct.$$.fragment),ds=a(),_n=d("p"),_n.innerHTML=Os,ps=a(),u(We.$$.fragment),ms=a(),u(Se.$$.fragment),An=a(),bn=d("p"),this.h()},l(e){const c=oa("svelte-u9bgzb",document.head);n=p(c,"META",{name:!0,content:!0}),c.forEach(l),M=r(e),i=p(e,"P",{}),F(i).forEach(l),s=r(e),h(T.$$.fragment,e),t=r(e),h(w.$$.fragment,e),Mn=r(e),Le=p(e,"P",{"data-svelte-h":!0}),y(Le)!=="svelte-12xjhh1"&&(Le.innerHTML=us),yn=r(e),He=p(e,"P",{"data-svelte-h":!0}),y(He)!=="svelte-6esq7m"&&(He.innerHTML=hs),wn=r(e),Ee=p(e,"P",{"data-svelte-h":!0}),y(Ee)!=="svelte-li5hn8"&&(Ee.innerHTML=fs),kn=r(e),h(Pe.$$.fragment,e),Fn=r(e),Ae=p(e,"P",{"data-svelte-h":!0}),y(Ae)!=="svelte-nw3sad"&&(Ae.textContent=gs),$n=r(e),h(Ye.$$.fragment,e),vn=r(e),De=p(e,"UL",{"data-svelte-h":!0}),y(De)!=="svelte-mgusi3"&&(De.innerHTML=_s),Nn=r(e),h(Oe.$$.fragment,e),xn=r(e),z=p(e,"DIV",{class:!0});var ee=F(z);h(Ke.$$.fragment,ee),Dn=r(ee),Zt=p(ee,"P",{"data-svelte-h":!0}),y(Zt)!=="svelte-1fkilxs"&&(Zt.innerHTML=bs),On=r(ee),qt=p(ee,"P",{"data-svelte-h":!0}),y(qt)!=="svelte-o55m63"&&(qt.innerHTML=Ts),Kn=r(ee),h(be.$$.fragment,ee),ee.forEach(l),jn=r(e),h(et.$$.fragment,e),Jn=r(e),x=p(e,"DIV",{class:!0});var j=F(x);h(tt.$$.fragment,j),eo=r(j),Wt=p(j,"P",{"data-svelte-h":!0}),y(Wt)!=="svelte-1ft4jrj"&&(Wt.innerHTML=Ms),to=r(j),me=p(j,"DIV",{class:!0});var he=F(me);h(nt.$$.fragment,he),no=r(he),St=p(he,"P",{"data-svelte-h":!0}),y(St)!=="svelte-lggsvw"&&(St.textContent=ys),oo=r(he),Bt=p(he,"UL",{"data-svelte-h":!0}),y(Bt)!=="svelte-xi6653"&&(Bt.innerHTML=ws),he.forEach(l),so=r(j),Te=p(j,"DIV",{class:!0});var It=F(Te);h(ot.$$.fragment,It),ao=r(It),Rt=p(It,"P",{"data-svelte-h":!0}),y(Rt)!=="svelte-1f4f5kp"&&(Rt.innerHTML=ks),It.forEach(l),ro=r(j),V=p(j,"DIV",{class:!0});var te=F(V);h(st.$$.fragment,te),io=r(te),Vt=p(te,"P",{"data-svelte-h":!0}),y(Vt)!=="svelte-cji7xr"&&(Vt.textContent=Fs),lo=r(te),h(Me.$$.fragment,te),co=r(te),Xt=p(te,"P",{"data-svelte-h":!0}),y(Xt)!=="svelte-owoxgn"&&(Xt.innerHTML=$s),te.forEach(l),po=r(j),Gt=p(j,"DIV",{class:!0});var Tn=F(Gt);h(at.$$.fragment,Tn),Tn.forEach(l),j.forEach(l),Un=r(e),h(rt.$$.fragment,e),zn=r(e),C=p(e,"DIV",{class:!0});var ne=F(C);h(it.$$.fragment,ne),mo=r(ne),Qt=p(ne,"P",{"data-svelte-h":!0}),y(Qt)!=="svelte-fkmxt2"&&(Qt.innerHTML=vs),uo=r(ne),ue=p(ne,"DIV",{class:!0});var fe=F(ue);h(lt.$$.fragment,fe),ho=r(fe),Lt=p(fe,"P",{"data-svelte-h":!0}),y(Lt)!=="svelte-lggsvw"&&(Lt.textContent=Ns),fo=r(fe),Ht=p(fe,"UL",{"data-svelte-h":!0}),y(Ht)!=="svelte-xi6653"&&(Ht.innerHTML=xs),fe.forEach(l),go=r(ne),X=p(ne,"DIV",{class:!0});var oe=F(X);h(ct.$$.fragment,oe),_o=r(oe),Et=p(oe,"P",{"data-svelte-h":!0}),y(Et)!=="svelte-1xwi8nj"&&(Et.textContent=js),bo=r(oe),h(ye.$$.fragment,oe),To=r(oe),Pt=p(oe,"P",{"data-svelte-h":!0}),y(Pt)!=="svelte-wtrslu"&&(Pt.textContent=Js),oe.forEach(l),ne.forEach(l),Cn=r(e),h(dt.$$.fragment,e),In=r(e),I=p(e,"DIV",{class:!0});var se=F(I);h(pt.$$.fragment,se),Mo=r(se),At=p(se,"P",{"data-svelte-h":!0}),y(At)!=="svelte-1f2ru0p"&&(At.innerHTML=Us),yo=r(se),Yt=p(se,"P",{"data-svelte-h":!0}),y(Yt)!=="svelte-7ol4de"&&(Yt.innerHTML=zs),wo=r(se),G=p(se,"DIV",{class:!0});var ae=F(G);h(mt.$$.fragment,ae),ko=r(ae),Dt=p(ae,"P",{"data-svelte-h":!0}),y(Dt)!=="svelte-1slot1k"&&(Dt.innerHTML=Cs),Fo=r(ae),h(we.$$.fragment,ae),$o=r(ae),h(ke.$$.fragment,ae),ae.forEach(l),se.forEach(l),Zn=r(e),h(ut.$$.fragment,e),qn=r(e),Z=p(e,"DIV",{class:!0});var re=F(Z);h(ht.$$.fragment,re),vo=r(re),Ot=p(re,"P",{"data-svelte-h":!0}),y(Ot)!=="svelte-wslq8d"&&(Ot.innerHTML=Is),No=r(re),Kt=p(re,"P",{"data-svelte-h":!0}),y(Kt)!=="svelte-68lg8f"&&(Kt.innerHTML=Zs),xo=r(re),Q=p(re,"DIV",{class:!0});var ie=F(Q);h(ft.$$.fragment,ie),jo=r(ie),en=p(ie,"P",{"data-svelte-h":!0}),y(en)!=="svelte-fby3ge"&&(en.innerHTML=qs),Jo=r(ie),h(Fe.$$.fragment,ie),Uo=r(ie),h($e.$$.fragment,ie),ie.forEach(l),re.forEach(l),Wn=r(e),h(gt.$$.fragment,e),Sn=r(e),O=p(e,"DIV",{class:!0});var ge=F(O);h(_t.$$.fragment,ge),zo=r(ge),tn=p(ge,"P",{"data-svelte-h":!0}),y(tn)!=="svelte-n4i9oc"&&(tn.innerHTML=Ws),Co=r(ge),L=p(ge,"DIV",{class:!0});var le=F(L);h(bt.$$.fragment,le),Io=r(le),nn=p(le,"P",{"data-svelte-h":!0}),y(nn)!=="svelte-1wntq60"&&(nn.innerHTML=Ss),Zo=r(le),h(ve.$$.fragment,le),qo=r(le),h(Ne.$$.fragment,le),le.forEach(l),ge.forEach(l),Bn=r(e),h(Tt.$$.fragment,e),Rn=r(e),K=p(e,"DIV",{class:!0});var _e=F(K);h(Mt.$$.fragment,_e),Wo=r(_e),on=p(_e,"P",{"data-svelte-h":!0}),y(on)!=="svelte-1fc7u1n"&&(on.innerHTML=Bs),So=r(_e),H=p(_e,"DIV",{class:!0});var ce=F(H);h(yt.$$.fragment,ce),Bo=r(ce),sn=p(ce,"P",{"data-svelte-h":!0}),y(sn)!=="svelte-jjknq0"&&(sn.innerHTML=Rs),Ro=r(ce),h(xe.$$.fragment,ce),Vo=r(ce),h(je.$$.fragment,ce),ce.forEach(l),_e.forEach(l),Vn=r(e),h(wt.$$.fragment,e),Xn=r(e),q=p(e,"DIV",{class:!0});var de=F(q);h(kt.$$.fragment,de),Xo=r(de),an=p(de,"P",{"data-svelte-h":!0}),y(an)!=="svelte-ebnkul"&&(an.textContent=Vs),Go=r(de),rn=p(de,"P",{"data-svelte-h":!0}),y(rn)!=="svelte-68lg8f"&&(rn.innerHTML=Xs),Qo=r(de),U=p(de,"DIV",{class:!0});var R=F(U);h(Ft.$$.fragment,R),Lo=r(R),ln=p(R,"P",{"data-svelte-h":!0}),y(ln)!=="svelte-s4gjdw"&&(ln.innerHTML=Gs),Ho=r(R),h(Je.$$.fragment,R),Eo=r(R),h(Ue.$$.fragment,R),Po=r(R),h(ze.$$.fragment,R),R.forEach(l),de.forEach(l),Gn=r(e),h($t.$$.fragment,e),Qn=r(e),W=p(e,"DIV",{class:!0});var pe=F(W);h(vt.$$.fragment,pe),Ao=r(pe),cn=p(pe,"P",{"data-svelte-h":!0}),y(cn)!=="svelte-1xyk5y9"&&(cn.textContent=Qs),Yo=r(pe),dn=p(pe,"P",{"data-svelte-h":!0}),y(dn)!=="svelte-68lg8f"&&(dn.innerHTML=Ls),Do=r(pe),E=p(pe,"DIV",{class:!0});var Be=F(E);h(Nt.$$.fragment,Be),Oo=r(Be),pn=p(Be,"P",{"data-svelte-h":!0}),y(pn)!=="svelte-h2bisc"&&(pn.innerHTML=Hs),Ko=r(Be),h(Ce.$$.fragment,Be),es=r(Be),h(Ie.$$.fragment,Be),Be.forEach(l),pe.forEach(l),Ln=r(e),h(xt.$$.fragment,e),Hn=r(e),S=p(e,"DIV",{class:!0});var Re=F(S);h(jt.$$.fragment,Re),ts=r(Re),mn=p(Re,"P",{"data-svelte-h":!0}),y(mn)!=="svelte-edpoje"&&(mn.textContent=Es),ns=r(Re),un=p(Re,"P",{"data-svelte-h":!0}),y(un)!=="svelte-68lg8f"&&(un.innerHTML=Ps),os=r(Re),P=p(Re,"DIV",{class:!0});var Ve=F(P);h(Jt.$$.fragment,Ve),ss=r(Ve),hn=p(Ve,"P",{"data-svelte-h":!0}),y(hn)!=="svelte-fj2fva"&&(hn.innerHTML=As),as=r(Ve),h(Ze.$$.fragment,Ve),rs=r(Ve),h(qe.$$.fragment,Ve),Ve.forEach(l),Re.forEach(l),En=r(e),h(Ut.$$.fragment,e),Pn=r(e),B=p(e,"DIV",{class:!0});var Xe=F(B);h(zt.$$.fragment,Xe),is=r(Xe),fn=p(Xe,"P",{"data-svelte-h":!0}),y(fn)!=="svelte-14nkyes"&&(fn.innerHTML=Ys),ls=r(Xe),gn=p(Xe,"P",{"data-svelte-h":!0}),y(gn)!=="svelte-68lg8f"&&(gn.innerHTML=Ds),cs=r(Xe),A=p(Xe,"DIV",{class:!0});var Ge=F(A);h(Ct.$$.fragment,Ge),ds=r(Ge),_n=p(Ge,"P",{"data-svelte-h":!0}),y(_n)!=="svelte-x3e02k"&&(_n.innerHTML=Os),ps=r(Ge),h(We.$$.fragment,Ge),ms=r(Ge),h(Se.$$.fragment,Ge),Ge.forEach(l),Xe.forEach(l),An=r(e),bn=p(e,"P",{}),F(bn).forEach(l),this.h()},h(){$(n,"name","hf:doc:metadata"),$(n,"content",$a),$(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){o(document.head,n),m(e,M,c),m(e,i,c),m(e,s,c),f(T,e,c),m(e,t,c),f(w,e,c),m(e,Mn,c),m(e,Le,c),m(e,yn,c),m(e,He,c),m(e,wn,c),m(e,Ee,c),m(e,kn,c),f(Pe,e,c),m(e,Fn,c),m(e,Ae,c),m(e,$n,c),f(Ye,e,c),m(e,vn,c),m(e,De,c),m(e,Nn,c),f(Oe,e,c),m(e,xn,c),m(e,z,c),f(Ke,z,null),o(z,Dn),o(z,Zt),o(z,On),o(z,qt),o(z,Kn),f(be,z,null),m(e,jn,c),f(et,e,c),m(e,Jn,c),m(e,x,c),f(tt,x,null),o(x,eo),o(x,Wt),o(x,to),o(x,me),f(nt,me,null),o(me,no),o(me,St),o(me,oo),o(me,Bt),o(x,so),o(x,Te),f(ot,Te,null),o(Te,ao),o(Te,Rt),o(x,ro),o(x,V),f(st,V,null),o(V,io),o(V,Vt),o(V,lo),f(Me,V,null),o(V,co),o(V,Xt),o(x,po),o(x,Gt),f(at,Gt,null),m(e,Un,c),f(rt,e,c),m(e,zn,c),m(e,C,c),f(it,C,null),o(C,mo),o(C,Qt),o(C,uo),o(C,ue),f(lt,ue,null),o(ue,ho),o(ue,Lt),o(ue,fo),o(ue,Ht),o(C,go),o(C,X),f(ct,X,null),o(X,_o),o(X,Et),o(X,bo),f(ye,X,null),o(X,To),o(X,Pt),m(e,Cn,c),f(dt,e,c),m(e,In,c),m(e,I,c),f(pt,I,null),o(I,Mo),o(I,At),o(I,yo),o(I,Yt),o(I,wo),o(I,G),f(mt,G,null),o(G,ko),o(G,Dt),o(G,Fo),f(we,G,null),o(G,$o),f(ke,G,null),m(e,Zn,c),f(ut,e,c),m(e,qn,c),m(e,Z,c),f(ht,Z,null),o(Z,vo),o(Z,Ot),o(Z,No),o(Z,Kt),o(Z,xo),o(Z,Q),f(ft,Q,null),o(Q,jo),o(Q,en),o(Q,Jo),f(Fe,Q,null),o(Q,Uo),f($e,Q,null),m(e,Wn,c),f(gt,e,c),m(e,Sn,c),m(e,O,c),f(_t,O,null),o(O,zo),o(O,tn),o(O,Co),o(O,L),f(bt,L,null),o(L,Io),o(L,nn),o(L,Zo),f(ve,L,null),o(L,qo),f(Ne,L,null),m(e,Bn,c),f(Tt,e,c),m(e,Rn,c),m(e,K,c),f(Mt,K,null),o(K,Wo),o(K,on),o(K,So),o(K,H),f(yt,H,null),o(H,Bo),o(H,sn),o(H,Ro),f(xe,H,null),o(H,Vo),f(je,H,null),m(e,Vn,c),f(wt,e,c),m(e,Xn,c),m(e,q,c),f(kt,q,null),o(q,Xo),o(q,an),o(q,Go),o(q,rn),o(q,Qo),o(q,U),f(Ft,U,null),o(U,Lo),o(U,ln),o(U,Ho),f(Je,U,null),o(U,Eo),f(Ue,U,null),o(U,Po),f(ze,U,null),m(e,Gn,c),f($t,e,c),m(e,Qn,c),m(e,W,c),f(vt,W,null),o(W,Ao),o(W,cn),o(W,Yo),o(W,dn),o(W,Do),o(W,E),f(Nt,E,null),o(E,Oo),o(E,pn),o(E,Ko),f(Ce,E,null),o(E,es),f(Ie,E,null),m(e,Ln,c),f(xt,e,c),m(e,Hn,c),m(e,S,c),f(jt,S,null),o(S,ts),o(S,mn),o(S,ns),o(S,un),o(S,os),o(S,P),f(Jt,P,null),o(P,ss),o(P,hn),o(P,as),f(Ze,P,null),o(P,rs),f(qe,P,null),m(e,En,c),f(Ut,e,c),m(e,Pn,c),m(e,B,c),f(zt,B,null),o(B,is),o(B,fn),o(B,ls),o(B,gn),o(B,cs),o(B,A),f(Ct,A,null),o(A,ds),o(A,_n),o(A,ps),f(We,A,null),o(A,ms),f(Se,A,null),m(e,An,c),m(e,bn,c),Yn=!0},p(e,[c]){const ee={};c&2&&(ee.$$scope={dirty:c,ctx:e}),be.$set(ee);const j={};c&2&&(j.$$scope={dirty:c,ctx:e}),Me.$set(j);const he={};c&2&&(he.$$scope={dirty:c,ctx:e}),ye.$set(he);const It={};c&2&&(It.$$scope={dirty:c,ctx:e}),we.$set(It);const te={};c&2&&(te.$$scope={dirty:c,ctx:e}),ke.$set(te);const Tn={};c&2&&(Tn.$$scope={dirty:c,ctx:e}),Fe.$set(Tn);const ne={};c&2&&(ne.$$scope={dirty:c,ctx:e}),$e.$set(ne);const fe={};c&2&&(fe.$$scope={dirty:c,ctx:e}),ve.$set(fe);const oe={};c&2&&(oe.$$scope={dirty:c,ctx:e}),Ne.$set(oe);const se={};c&2&&(se.$$scope={dirty:c,ctx:e}),xe.$set(se);const ae={};c&2&&(ae.$$scope={dirty:c,ctx:e}),je.$set(ae);const re={};c&2&&(re.$$scope={dirty:c,ctx:e}),Je.$set(re);const ie={};c&2&&(ie.$$scope={dirty:c,ctx:e}),Ue.$set(ie);const ge={};c&2&&(ge.$$scope={dirty:c,ctx:e}),ze.$set(ge);const le={};c&2&&(le.$$scope={dirty:c,ctx:e}),Ce.$set(le);const _e={};c&2&&(_e.$$scope={dirty:c,ctx:e}),Ie.$set(_e);const ce={};c&2&&(ce.$$scope={dirty:c,ctx:e}),Ze.$set(ce);const de={};c&2&&(de.$$scope={dirty:c,ctx:e}),qe.$set(de);const R={};c&2&&(R.$$scope={dirty:c,ctx:e}),We.$set(R);const pe={};c&2&&(pe.$$scope={dirty:c,ctx:e}),Se.$set(pe)},i(e){Yn||(g(T.$$.fragment,e),g(w.$$.fragment,e),g(Pe.$$.fragment,e),g(Ye.$$.fragment,e),g(Oe.$$.fragment,e),g(Ke.$$.fragment,e),g(be.$$.fragment,e),g(et.$$.fragment,e),g(tt.$$.fragment,e),g(nt.$$.fragment,e),g(ot.$$.fragment,e),g(st.$$.fragment,e),g(Me.$$.fragment,e),g(at.$$.fragment,e),g(rt.$$.fragment,e),g(it.$$.fragment,e),g(lt.$$.fragment,e),g(ct.$$.fragment,e),g(ye.$$.fragment,e),g(dt.$$.fragment,e),g(pt.$$.fragment,e),g(mt.$$.fragment,e),g(we.$$.fragment,e),g(ke.$$.fragment,e),g(ut.$$.fragment,e),g(ht.$$.fragment,e),g(ft.$$.fragment,e),g(Fe.$$.fragment,e),g($e.$$.fragment,e),g(gt.$$.fragment,e),g(_t.$$.fragment,e),g(bt.$$.fragment,e),g(ve.$$.fragment,e),g(Ne.$$.fragment,e),g(Tt.$$.fragment,e),g(Mt.$$.fragment,e),g(yt.$$.fragment,e),g(xe.$$.fragment,e),g(je.$$.fragment,e),g(wt.$$.fragment,e),g(kt.$$.fragment,e),g(Ft.$$.fragment,e),g(Je.$$.fragment,e),g(Ue.$$.fragment,e),g(ze.$$.fragment,e),g($t.$$.fragment,e),g(vt.$$.fragment,e),g(Nt.$$.fragment,e),g(Ce.$$.fragment,e),g(Ie.$$.fragment,e),g(xt.$$.fragment,e),g(jt.$$.fragment,e),g(Jt.$$.fragment,e),g(Ze.$$.fragment,e),g(qe.$$.fragment,e),g(Ut.$$.fragment,e),g(zt.$$.fragment,e),g(Ct.$$.fragment,e),g(We.$$.fragment,e),g(Se.$$.fragment,e),Yn=!0)},o(e){_(T.$$.fragment,e),_(w.$$.fragment,e),_(Pe.$$.fragment,e),_(Ye.$$.fragment,e),_(Oe.$$.fragment,e),_(Ke.$$.fragment,e),_(be.$$.fragment,e),_(et.$$.fragment,e),_(tt.$$.fragment,e),_(nt.$$.fragment,e),_(ot.$$.fragment,e),_(st.$$.fragment,e),_(Me.$$.fragment,e),_(at.$$.fragment,e),_(rt.$$.fragment,e),_(it.$$.fragment,e),_(lt.$$.fragment,e),_(ct.$$.fragment,e),_(ye.$$.fragment,e),_(dt.$$.fragment,e),_(pt.$$.fragment,e),_(mt.$$.fragment,e),_(we.$$.fragment,e),_(ke.$$.fragment,e),_(ut.$$.fragment,e),_(ht.$$.fragment,e),_(ft.$$.fragment,e),_(Fe.$$.fragment,e),_($e.$$.fragment,e),_(gt.$$.fragment,e),_(_t.$$.fragment,e),_(bt.$$.fragment,e),_(ve.$$.fragment,e),_(Ne.$$.fragment,e),_(Tt.$$.fragment,e),_(Mt.$$.fragment,e),_(yt.$$.fragment,e),_(xe.$$.fragment,e),_(je.$$.fragment,e),_(wt.$$.fragment,e),_(kt.$$.fragment,e),_(Ft.$$.fragment,e),_(Je.$$.fragment,e),_(Ue.$$.fragment,e),_(ze.$$.fragment,e),_($t.$$.fragment,e),_(vt.$$.fragment,e),_(Nt.$$.fragment,e),_(Ce.$$.fragment,e),_(Ie.$$.fragment,e),_(xt.$$.fragment,e),_(jt.$$.fragment,e),_(Jt.$$.fragment,e),_(Ze.$$.fragment,e),_(qe.$$.fragment,e),_(Ut.$$.fragment,e),_(zt.$$.fragment,e),_(Ct.$$.fragment,e),_(We.$$.fragment,e),_(Se.$$.fragment,e),Yn=!1},d(e){e&&(l(M),l(i),l(s),l(t),l(Mn),l(Le),l(yn),l(He),l(wn),l(Ee),l(kn),l(Fn),l(Ae),l($n),l(vn),l(De),l(Nn),l(xn),l(z),l(jn),l(Jn),l(x),l(Un),l(zn),l(C),l(Cn),l(In),l(I),l(Zn),l(qn),l(Z),l(Wn),l(Sn),l(O),l(Bn),l(Rn),l(K),l(Vn),l(Xn),l(q),l(Gn),l(Qn),l(W),l(Ln),l(Hn),l(S),l(En),l(Pn),l(B),l(An),l(bn)),l(n),b(T,e),b(w,e),b(Pe,e),b(Ye,e),b(Oe,e),b(Ke),b(be),b(et,e),b(tt),b(nt),b(ot),b(st),b(Me),b(at),b(rt,e),b(it),b(lt),b(ct),b(ye),b(dt,e),b(pt),b(mt),b(we),b(ke),b(ut,e),b(ht),b(ft),b(Fe),b($e),b(gt,e),b(_t),b(bt),b(ve),b(Ne),b(Tt,e),b(Mt),b(yt),b(xe),b(je),b(wt,e),b(kt),b(Ft),b(Je),b(Ue),b(ze),b($t,e),b(vt),b(Nt),b(Ce),b(Ie),b(xt,e),b(jt),b(Jt),b(Ze),b(qe),b(Ut,e),b(zt),b(Ct),b(We),b(Se)}}}const $a='{"title":"FNet","local":"fnet","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"FNetConfig","local":"transformers.FNetConfig","sections":[],"depth":2},{"title":"FNetTokenizer","local":"transformers.FNetTokenizer","sections":[],"depth":2},{"title":"FNetTokenizerFast","local":"transformers.FNetTokenizerFast","sections":[],"depth":2},{"title":"FNetModel","local":"transformers.FNetModel","sections":[],"depth":2},{"title":"FNetForPreTraining","local":"transformers.FNetForPreTraining","sections":[],"depth":2},{"title":"FNetForMaskedLM","local":"transformers.FNetForMaskedLM","sections":[],"depth":2},{"title":"FNetForNextSentencePrediction","local":"transformers.FNetForNextSentencePrediction","sections":[],"depth":2},{"title":"FNetForSequenceClassification","local":"transformers.FNetForSequenceClassification","sections":[],"depth":2},{"title":"FNetForMultipleChoice","local":"transformers.FNetForMultipleChoice","sections":[],"depth":2},{"title":"FNetForTokenClassification","local":"transformers.FNetForTokenClassification","sections":[],"depth":2},{"title":"FNetForQuestionAnswering","local":"transformers.FNetForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function va(k){return ea(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ia extends ta{constructor(n){super(),na(this,n,va,Fa,Ks,{})}}export{Ia as component};
