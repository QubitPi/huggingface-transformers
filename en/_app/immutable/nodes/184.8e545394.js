import{s as Oo,o as Do,n as z}from"../chunks/scheduler.9bc65507.js";import{S as Ko,i as es,g as c,s,r as f,A as ts,h as p,f as d,c as a,j as C,u as _,x as u,k as j,y as o,a as m,v as M,d as b,t as y,w as T}from"../chunks/index.707bf1b6.js";import{T as et}from"../chunks/Tip.c2ecdbf4.js";import{D as I}from"../chunks/Docstring.17db21ae.js";import{C as re}from"../chunks/CodeBlock.54a9f38d.js";import{E as ae}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as O}from"../chunks/Heading.342b1fa6.js";function ns(k){let n,h="Examples:",r,l,g;return l=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1lZ2FDb25maWclMkMlMjBNZWdhTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwTWVnYSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwTWVnYUNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBNZWdhTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MegaConfig, MegaModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Mega configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MegaConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){n=c("p"),n.textContent=h,r=s(),f(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),u(n)!=="svelte-kvfsh7"&&(n.textContent=h),r=a(t),_(l.$$.fragment,t)},m(t,w){m(t,n,w),m(t,r,w),M(l,t,w),g=!0},p:z,i(t){g||(b(l.$$.fragment,t),g=!0)},o(t){y(l.$$.fragment,t),g=!1},d(t){t&&(d(n),d(r)),T(l,t)}}}function os(k){let n,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=h},l(r){n=p(r,"P",{"data-svelte-h":!0}),u(n)!=="svelte-fincs2"&&(n.innerHTML=h)},m(r,l){m(r,n,l)},p:z,d(r){r&&d(n)}}}function ss(k){let n,h="Example:",r,l,g;return l=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNZWdhTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1uYXlsb3IlMkZtZWdhLWJhc2Utd2lraXRleHQlMjIpJTBBbW9kZWwlMjAlM0QlMjBNZWdhTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm1uYXlsb3IlMkZtZWdhLWJhc2Utd2lraXRleHQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MegaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaModel.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){n=c("p"),n.textContent=h,r=s(),f(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),u(n)!=="svelte-11lpom8"&&(n.textContent=h),r=a(t),_(l.$$.fragment,t)},m(t,w){m(t,n,w),m(t,r,w),M(l,t,w),g=!0},p:z,i(t){g||(b(l.$$.fragment,t),g=!0)},o(t){y(l.$$.fragment,t),g=!1},d(t){t&&(d(n),d(r)),T(l,t)}}}function as(k){let n,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=h},l(r){n=p(r,"P",{"data-svelte-h":!0}),u(n)!=="svelte-fincs2"&&(n.innerHTML=h)},m(r,l){m(r,n,l)},p:z,d(r){r&&d(n)}}}function rs(k){let n,h="Example:",r,l,g;return l=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNZWdhRm9yQ2F1c2FsTE0lMkMlMjBBdXRvQ29uZmlnJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtbmF5bG9yJTJGbWVnYS1iYXNlLXdpa2l0ZXh0JTIyKSUwQWNvbmZpZyUyMCUzRCUyMEF1dG9Db25maWcuZnJvbV9wcmV0cmFpbmVkKCUyMm1uYXlsb3IlMkZtZWdhLWJhc2Utd2lraXRleHQlMjIpJTBBY29uZmlnLmlzX2RlY29kZXIlMjAlM0QlMjBUcnVlJTBBY29uZmlnLmJpZGlyZWN0aW9uYWwlMjAlM0QlMjBGYWxzZSUwQW1vZGVsJTIwJTNEJTIwTWVnYUZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJtbmF5bG9yJTJGbWVnYS1iYXNlLXdpa2l0ZXh0JTIyJTJDJTIwY29uZmlnJTNEY29uZmlnJTJDJTIwaWdub3JlX21pc21hdGNoZWRfc2l6ZXMlM0RUcnVlJTBBKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBcHJlZGljdGlvbl9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MegaForCausalLM, AutoConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config.bidirectional = <span class="hljs-literal">False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>, config=config, ignore_mismatched_sizes=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`,wrap:!1}}),{c(){n=c("p"),n.textContent=h,r=s(),f(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),u(n)!=="svelte-11lpom8"&&(n.textContent=h),r=a(t),_(l.$$.fragment,t)},m(t,w){m(t,n,w),m(t,r,w),M(l,t,w),g=!0},p:z,i(t){g||(b(l.$$.fragment,t),g=!0)},o(t){y(l.$$.fragment,t),g=!1},d(t){t&&(d(n),d(r)),T(l,t)}}}function is(k){let n,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=h},l(r){n=p(r,"P",{"data-svelte-h":!0}),u(n)!=="svelte-fincs2"&&(n.innerHTML=h)},m(r,l){m(r,n,l)},p:z,d(r){r&&d(n)}}}function ls(k){let n,h="Example:",r,l,g;return l=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNZWdhRm9yTWFza2VkTE0lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1uYXlsb3IlMkZtZWdhLWJhc2Utd2lraXRleHQlMjIpJTBBbW9kZWwlMjAlM0QlMjBNZWdhRm9yTWFza2VkTE0uZnJvbV9wcmV0cmFpbmVkKCUyMm1uYXlsb3IlMkZtZWdhLWJhc2Utd2lraXRleHQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwJTNDbWFzayUzRS4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBJTIzJTIwcmV0cmlldmUlMjBpbmRleCUyMG9mJTIwJTNDbWFzayUzRSUwQW1hc2tfdG9rZW5faW5kZXglMjAlM0QlMjAoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKSU1QjAlNUQubm9uemVybyhhc190dXBsZSUzRFRydWUpJTVCMCU1RCUwQSUwQXByZWRpY3RlZF90b2tlbl9pZCUyMCUzRCUyMGxvZ2l0cyU1QjAlMkMlMjBtYXNrX3Rva2VuX2luZGV4JTVELmFyZ21heChheGlzJTNELTEpJTBBdG9rZW5pemVyLmRlY29kZShwcmVkaWN0ZWRfdG9rZW5faWQpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjMlMjBtYXNrJTIwbGFiZWxzJTIwb2YlMjBub24tJTNDbWFzayUzRSUyMHRva2VucyUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLndoZXJlKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCUyQyUyMGxhYmVscyUyQyUyMC0xMDApJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUwQXJvdW5kKG91dHB1dHMubG9zcy5pdGVtKCklMkMlMjAyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MegaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)

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
<span class="hljs-number">0.1</span>`,wrap:!1}}),{c(){n=c("p"),n.textContent=h,r=s(),f(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),u(n)!=="svelte-11lpom8"&&(n.textContent=h),r=a(t),_(l.$$.fragment,t)},m(t,w){m(t,n,w),m(t,r,w),M(l,t,w),g=!0},p:z,i(t){g||(b(l.$$.fragment,t),g=!0)},o(t){y(l.$$.fragment,t),g=!1},d(t){t&&(d(n),d(r)),T(l,t)}}}function ds(k){let n,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=h},l(r){n=p(r,"P",{"data-svelte-h":!0}),u(n)!=="svelte-fincs2"&&(n.innerHTML=h)},m(r,l){m(r,n,l)},p:z,d(r){r&&d(n)}}}function cs(k){let n,h="Example of single-label classification:",r,l,g;return l=new re({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME1lZ2FGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybW5heWxvciUyRm1lZ2EtYmFzZS13aWtpdGV4dCUyMiklMEFtb2RlbCUyMCUzRCUyME1lZ2FGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtbmF5bG9yJTJGbWVnYS1iYXNlLXdpa2l0ZXh0JTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoKS5pdGVtKCklMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBNZWdhRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIybW5heWxvciUyRm1lZ2EtYmFzZS13aWtpdGV4dCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MegaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=c("p"),n.textContent=h,r=s(),f(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),u(n)!=="svelte-ykxpe4"&&(n.textContent=h),r=a(t),_(l.$$.fragment,t)},m(t,w){m(t,n,w),m(t,r,w),M(l,t,w),g=!0},p:z,i(t){g||(b(l.$$.fragment,t),g=!0)},o(t){y(l.$$.fragment,t),g=!1},d(t){t&&(d(n),d(r)),T(l,t)}}}function ps(k){let n,h="Example of multi-label classification:",r,l,g;return l=new re({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME1lZ2FGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybW5heWxvciUyRm1lZ2EtYmFzZS13aWtpdGV4dCUyMiklMEFtb2RlbCUyMCUzRCUyME1lZ2FGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtbmF5bG9yJTJGbWVnYS1iYXNlLXdpa2l0ZXh0JTIyJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkcyUyMCUzRCUyMHRvcmNoLmFyYW5nZSgwJTJDJTIwbG9naXRzLnNoYXBlJTVCLTElNUQpJTVCdG9yY2guc2lnbW9pZChsb2dpdHMpLnNxdWVlemUoZGltJTNEMCklMjAlM0UlMjAwLjUlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBNZWdhRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIybW5heWxvciUyRm1lZ2EtYmFzZS13aWtpdGV4dCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MegaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=c("p"),n.textContent=h,r=s(),f(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1l8e32d"&&(n.textContent=h),r=a(t),_(l.$$.fragment,t)},m(t,w){m(t,n,w),m(t,r,w),M(l,t,w),g=!0},p:z,i(t){g||(b(l.$$.fragment,t),g=!0)},o(t){y(l.$$.fragment,t),g=!1},d(t){t&&(d(n),d(r)),T(l,t)}}}function ms(k){let n,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=h},l(r){n=p(r,"P",{"data-svelte-h":!0}),u(n)!=="svelte-fincs2"&&(n.innerHTML=h)},m(r,l){m(r,n,l)},p:z,d(r){r&&d(n)}}}function us(k){let n,h="Example:",r,l,g;return l=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNZWdhRm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1uYXlsb3IlMkZtZWdhLWJhc2Utd2lraXRleHQlMjIpJTBBbW9kZWwlMjAlM0QlMjBNZWdhRm9yTXVsdGlwbGVDaG9pY2UuZnJvbV9wcmV0cmFpbmVkKCUyMm1uYXlsb3IlMkZtZWdhLWJhc2Utd2lraXRleHQlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoMCkudW5zcXVlZXplKDApJTIwJTIwJTIzJTIwY2hvaWNlMCUyMGlzJTIwY29ycmVjdCUyMChhY2NvcmRpbmclMjB0byUyMFdpa2lwZWRpYSUyMCUzQikpJTJDJTIwYmF0Y2glMjBzaXplJTIwMSUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHBhZGRpbmclM0RUcnVlKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKiU3QmslM0ElMjB2LnVuc3F1ZWV6ZSgwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MegaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){n=c("p"),n.textContent=h,r=s(),f(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),u(n)!=="svelte-11lpom8"&&(n.textContent=h),r=a(t),_(l.$$.fragment,t)},m(t,w){m(t,n,w),m(t,r,w),M(l,t,w),g=!0},p:z,i(t){g||(b(l.$$.fragment,t),g=!0)},o(t){y(l.$$.fragment,t),g=!1},d(t){t&&(d(n),d(r)),T(l,t)}}}function hs(k){let n,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=h},l(r){n=p(r,"P",{"data-svelte-h":!0}),u(n)!=="svelte-fincs2"&&(n.innerHTML=h)},m(r,l){m(r,n,l)},p:z,d(r){r&&d(n)}}}function gs(k){let n,h="Example:",r,l,g;return l=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNZWdhRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybW5heWxvciUyRm1lZ2EtYmFzZS13aWtpdGV4dCUyMiklMEFtb2RlbCUyMCUzRCUyME1lZ2FGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtbmF5bG9yJTJGbWVnYS1iYXNlLXdpa2l0ZXh0JTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MegaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=c("p"),n.textContent=h,r=s(),f(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),u(n)!=="svelte-11lpom8"&&(n.textContent=h),r=a(t),_(l.$$.fragment,t)},m(t,w){m(t,n,w),m(t,r,w),M(l,t,w),g=!0},p:z,i(t){g||(b(l.$$.fragment,t),g=!0)},o(t){y(l.$$.fragment,t),g=!1},d(t){t&&(d(n),d(r)),T(l,t)}}}function fs(k){let n,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=h},l(r){n=p(r,"P",{"data-svelte-h":!0}),u(n)!=="svelte-fincs2"&&(n.innerHTML=h)},m(r,l){m(r,n,l)},p:z,d(r){r&&d(n)}}}function _s(k){let n,h="Example:",r,l,g;return l=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNZWdhRm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1uYXlsb3IlMkZtZWdhLWJhc2Utd2lraXRleHQlMjIpJTBBbW9kZWwlMjAlM0QlMjBNZWdhRm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMm1uYXlsb3IlMkZtZWdhLWJhc2Utd2lraXRleHQlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWFuc3dlcl9zdGFydF9pbmRleCUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzLmFyZ21heCgpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMG91dHB1dHMuZW5kX2xvZ2l0cy5hcmdtYXgoKSUwQSUwQXByZWRpY3RfYW5zd2VyX3Rva2VucyUyMCUzRCUyMGlucHV0cy5pbnB1dF9pZHMlNUIwJTJDJTIwYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNBJTIwYW5zd2VyX2VuZF9pbmRleCUyMCUyQiUyMDElNUQlMEElMEElMjMlMjB0YXJnZXQlMjBpcyUyMCUyMm5pY2UlMjBwdXBwZXQlMjIlMEF0YXJnZXRfc3RhcnRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNSU1RCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBzdGFydF9wb3NpdGlvbnMlM0R0YXJnZXRfc3RhcnRfaW5kZXglMkMlMjBlbmRfcG9zaXRpb25zJTNEdGFyZ2V0X2VuZF9pbmRleCklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MegaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;mnaylor/mega-base-wikitext&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){n=c("p"),n.textContent=h,r=s(),f(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),u(n)!=="svelte-11lpom8"&&(n.textContent=h),r=a(t),_(l.$$.fragment,t)},m(t,w){m(t,n,w),m(t,r,w),M(l,t,w),g=!0},p:z,i(t){g||(b(l.$$.fragment,t),g=!0)},o(t){y(l.$$.fragment,t),g=!1},d(t){t&&(d(n),d(r)),T(l,t)}}}function Ms(k){let n,h,r,l,g,t,w,It,ke,po=`The MEGA model was proposed in <a href="https://arxiv.org/abs/2209.10655" rel="nofollow">Mega: Moving Average Equipped Gated Attention</a> by Xuezhe Ma, Chunting Zhou, Xiang Kong, Junxian He, Liangke Gui, Graham Neubig, Jonathan May, and Luke Zettlemoyer.
MEGA proposes a new approach to self-attention with each encoder layer having a multi-headed exponential moving average in addition to a single head of standard dot-product attention, giving the attention mechanism
stronger positional biases. This allows MEGA to perform competitively to Transformers on standard benchmarks including LRA
while also having significantly fewer parameters. MEGA’s compute efficiency allows it to scale to very long sequences, making it an
attractive option for long-document NLP tasks.`,qt,ve,mo="The abstract from the paper is the following:",Bt,$e,uo="<em>The design choices in the Transformer attention mechanism, including weak inductive bias and quadratic computational complexity, have limited its application for modeling long sequences. In this paper, we introduce Mega, a simple, theoretically grounded, single-head gated attention mechanism equipped with (exponential) moving average to incorporate inductive bias of position-aware local dependencies into the position-agnostic attention mechanism. We further propose a variant of Mega that offers linear time and space complexity yet yields only minimal quality loss, by efficiently splitting the whole sequence into multiple chunks with fixed length. Extensive experiments on a wide range of sequence modeling benchmarks, including the Long Range Arena, neural machine translation, auto-regressive language modeling, and image and speech classification, show that Mega achieves significant improvements over other sequence models, including variants of Transformers and recent state space models.</em>",Gt,Ce,ho=`This model was contributed by <a href="https://huggingface.co/mnaylor" rel="nofollow">mnaylor</a>.
The original code can be found <a href="https://github.com/facebookresearch/mega" rel="nofollow">here</a>.`,Nt,je,Xt,ze,go="<li>MEGA can perform quite well with relatively few parameters. See Appendix D in the MEGA paper for examples of architectural specs which perform well in various settings. If using MEGA as a decoder, be sure to set <code>bidirectional=False</code> to avoid errors with default bidirectional.</li> <li>Mega-chunk is a variant of mega that reduces time and spaces complexity from quadratic to linear. Utilize chunking with MegaConfig.use_chunking and control chunk size with MegaConfig.chunk_size</li>",Lt,Je,Rt,xe,fo="<li>The original implementation of MEGA had an inconsistent expectation of attention masks for padding and causal self-attention between the softmax attention and Laplace/squared ReLU method. This implementation addresses that inconsistency.</li> <li>The original implementation did not include token type embeddings; this implementation adds support for these, with the option controlled by MegaConfig.add_token_type_embeddings</li>",Vt,Fe,Ht,B,Ue,ln,tt,_o=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaModel">MegaModel</a>. It is used to instantiate a Mega
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Mega
<a href="https://huggingface.co/mnaylor/mega-base-wikitext" rel="nofollow">mnaylor/mega-base-wikitext</a> architecture.`,dn,nt,Mo=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,cn,ie,Et,We,Qt,v,Ze,pn,ot,bo="The bare MEGA Model transformer outputting raw hidden-states without any specific head on top.",mn,st,yo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,un,at,To=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,hn,rt,wo=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added after self-attention, following the architecture described in <em>Mega: Moving Average
Equipped Gated Attention</em>_ by Xuezhe Ma, Chunting Zhou, Xiang Kong, Junxian He, Liangke Gui, Graham Neubig,
Jonathan May, and Luke Zettlemoyer`,gn,it,ko=`To behave as a decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set to
<code>True</code> and <code>bidirectional</code> set to <code>False</code>. To be used in a Seq2Seq model, the model needs to initialized with both
<code>is_decoder=True</code> and <code>bidirectional=False</code> argument as well as <code>add_cross_attention</code> set to <code>True</code>; an
<code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,fn,lt,vo='.. _<em>Mega: Moving Average Equipped Gated Attention</em>: <a href="https://arxiv.org/abs/2209.10655" rel="nofollow">https://arxiv.org/abs/2209.10655</a>',_n,E,Ie,Mn,dt,$o='The <a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaModel">MegaModel</a> forward method, overrides the <code>__call__</code> special method.',bn,le,yn,de,At,qe,St,J,Be,Tn,ct,Co="MEGA Model with a <code>language modeling</code> head on top for CLM fine-tuning.",wn,pt,jo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,kn,mt,zo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,vn,Q,Ge,$n,ut,Jo='The <a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaForCausalLM">MegaForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',Cn,ce,jn,pe,Yt,Ne,Pt,x,Xe,zn,ht,xo="MEGA Model with a <code>language modeling</code> head on top.",Jn,gt,Fo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,xn,ft,Uo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Fn,A,Le,Un,_t,Wo='The <a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaForMaskedLM">MegaForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Wn,me,Zn,ue,Ot,Re,Dt,F,Ve,In,Mt,Zo=`MEGA Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,qn,bt,Io=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Bn,yt,qo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Gn,q,He,Nn,Tt,Bo='The <a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaForSequenceClassification">MegaForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Xn,he,Ln,ge,Rn,fe,Kt,Ee,en,U,Qe,Vn,wt,Go=`MEGA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,Hn,kt,No=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,En,vt,Xo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Qn,S,Ae,An,$t,Lo='The <a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaForMultipleChoice">MegaForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Sn,_e,Yn,Me,tn,Se,nn,W,Ye,Pn,Ct,Ro=`MEGA Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,On,jt,Vo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Dn,zt,Ho=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Kn,Y,Pe,eo,Jt,Eo='The <a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaForTokenClassification">MegaForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',to,be,no,ye,on,Oe,sn,Z,De,oo,xt,Qo=`MEGA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,so,Ft,Ao=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ao,Ut,So=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ro,P,Ke,io,Wt,Yo='The <a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaForQuestionAnswering">MegaForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',lo,Te,co,we,an,Zt,rn;return g=new O({props:{title:"MEGA",local:"mega",headingTag:"h1"}}),w=new O({props:{title:"Overview",local:"overview",headingTag:"h2"}}),je=new O({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Je=new O({props:{title:"Implementation Notes",local:"implementation-notes",headingTag:"h2"}}),Fe=new O({props:{title:"MegaConfig",local:"transformers.MegaConfig",headingTag:"h2"}}),Ue=new I({props:{name:"class transformers.MegaConfig",anchor:"transformers.MegaConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 128"},{name:"num_hidden_layers",val:" = 4"},{name:"intermediate_size",val:" = 256"},{name:"ema_projection_size",val:" = 16"},{name:"bidirectional",val:" = True"},{name:"shared_representation_size",val:" = 64"},{name:"use_chunking",val:" = False"},{name:"chunk_size",val:" = -1"},{name:"truncation",val:" = None"},{name:"normalize_before_mega",val:" = True"},{name:"normalization_type",val:" = 'scalenorm'"},{name:"norm_affine",val:" = True"},{name:"activation",val:" = 'silu'"},{name:"attention_activation",val:" = 'softmax'"},{name:"dropout_prob",val:" = 0.1"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"use_feature_dropout",val:" = False"},{name:"use_normalized_ffn",val:" = True"},{name:"nffn_hidden_size",val:" = 256"},{name:"normalize_before_ffn",val:" = True"},{name:"nffn_activation_dropout_prob",val:" = 0.1"},{name:"max_positions",val:" = 2048"},{name:"add_token_type_embeddings",val:" = False"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"ema_delta_alpha_range",val:" = 0.2"},{name:"ema_beta_range",val:" = 0.02"},{name:"ema_gamma_omega_range",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"relative_positional_bias",val:" = 'rotary'"},{name:"classifier_dropout",val:" = None"},{name:"use_cache",val:" = True"},{name:"add_lm_hidden_dense_layer",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MegaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Mega model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaModel">MegaModel</a>.`,name:"vocab_size"},{anchor:"transformers.MegaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MegaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of hidden layers in the Mega encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MegaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the hidden size (self-attention value projection) within the Mega encoder`,name:"intermediate_size"},{anchor:"transformers.MegaConfig.ema_projection_size",description:`<strong>ema_projection_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Dimensionality of the MegaMultiDimensionDampedEma`,name:"ema_projection_size"},{anchor:"transformers.MegaConfig.bidirectional",description:`<strong>bidirectional</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the MegaMultiDimensionDampedEma used in Mega&#x2019;s self-attention should work bidirectionally (<code>True</code>)
or unidirectionally (<code>False</code>). Bidirectional EMA is incompatible with causal decoding, so this should be
False if you intend to use the model as a decoder.`,name:"bidirectional"},{anchor:"transformers.MegaConfig.shared_representation_size",description:`<strong>shared_representation_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality of the linear projection for shared representation of self-attention queries and keys`,name:"shared_representation_size"},{anchor:"transformers.MegaConfig.use_chunking",description:`<strong>use_chunking</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to chunk inputs for linear self-attention complexity (described as Mega-chunk in the paper)`,name:"use_chunking"},{anchor:"transformers.MegaConfig.chunk_size",description:`<strong>chunk_size</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
If <code>use_chunking</code> is set to <code>True</code>, determines the size of the chunks to apply to the input sequence. If
chunking is used, input sequences must be padded to a multiple of <code>chunk_size</code>`,name:"chunk_size"},{anchor:"transformers.MegaConfig.truncation",description:`<strong>truncation</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If specified, the sequence length for which to truncate MegaMultiDimensionDampedEma`,name:"truncation"},{anchor:"transformers.MegaConfig.normalize_before_mega",description:`<strong>normalize_before_mega</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize before (<code>True</code>) or after (<code>False</code>) passing through Mega encoder blocks`,name:"normalize_before_mega"},{anchor:"transformers.MegaConfig.normalization_type",description:`<strong>normalization_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;scalenorm&quot;</code>) &#x2014;
Type of normalization to use in Mega encoder blocks. Choose one of <code>&quot;scalenorm&quot;</code>, <code>&quot;layernorm&quot;</code>,
<code>&quot;rmsnorm&quot;</code>, <code>&quot;batchnorm&quot;</code>, or <code>&quot;syncbatchnorm&quot;</code> (GPU required for syncbatchnorm)`,name:"normalization_type"},{anchor:"transformers.MegaConfig.norm_affine",description:`<strong>norm_affine</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If <code>True</code>, applies a parameterized affine transformation to inputs during normalization`,name:"norm_affine"},{anchor:"transformers.MegaConfig.activation",description:`<strong>activation</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;silu&quot;</code>) &#x2014;
Activation function to apply within Mega encoder blocks. Choose one of <code>&quot;silu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;linear&quot;</code>,
<code>&quot;gelu&quot;</code>, or <code>&quot;gelu_accurate&quot;</code>`,name:"activation"},{anchor:"transformers.MegaConfig.attention_activation",description:`<strong>attention_activation</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;softmax&quot;</code>) &#x2014;
Activation function to apply for single-headed self-attention (a la Transformer). Choose one of
<code>&quot;softmax&quot;</code>, <code>&quot;laplace&quot;</code>, or <code>&quot;relu2&quot;</code>`,name:"attention_activation"},{anchor:"transformers.MegaConfig.dropout_prob",description:`<strong>dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for EMA self-attention`,name:"dropout_prob"},{anchor:"transformers.MegaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MegaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MegaConfig.use_feature_dropout",description:`<strong>use_feature_dropout</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use feature-based (<code>True</code>) or standard dropout (<code>False</code>)`,name:"use_feature_dropout"},{anchor:"transformers.MegaConfig.use_normalized_ffn",description:`<strong>use_normalized_ffn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use the normalized feed-forward sub-layer in Mega blocks (<code>True</code>) or pass Mega encoder output
as-is (<code>False</code>)`,name:"use_normalized_ffn"},{anchor:"transformers.MegaConfig.nffn_hidden_size",description:`<strong>nffn_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
If using the normalized feed-forward network (NFFN) layer within Mega (<code>use_normalized_ffn = True</code>), this
is the hidden size of the NFFN`,name:"nffn_hidden_size"},{anchor:"transformers.MegaConfig.normalize_before_ffn",description:`<strong>normalize_before_ffn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize before (<code>True</code>) or after (<code>False</code>) the feed-forward portion of NFFN`,name:"normalize_before_ffn"},{anchor:"transformers.MegaConfig.nffn_activation_dropout_prob",description:`<strong>nffn_activation_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the NFFN component.`,name:"nffn_activation_dropout_prob"},{anchor:"transformers.MegaConfig.max_positions",description:`<strong>max_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length to use for positional representations. For <code>&quot;simple&quot;</code> relative positional bias,
this is a hard limit on input length; <code>&quot;rotary&quot;</code> relative positional bias will extrapolate to longer
sequences`,name:"max_positions"},{anchor:"transformers.MegaConfig.add_token_type_embeddings",description:`<strong>add_token_type_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to account for token types in embeddings. Left as optional to maintain compatibility with original
implementation while adding support for token types.`,name:"add_token_type_embeddings"},{anchor:"transformers.MegaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaModel">MegaModel</a>. Only used if
<code>add_token_type_embeddings = True</code>`,name:"type_vocab_size"},{anchor:"transformers.MegaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MegaConfig.ema_delta_alpha_range",description:`<strong>ema_delta_alpha_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The standard deviation for initializing the delta (damping factor) and alpha (decay factor) parameters in
MegaMultiDimensionDampedEma.`,name:"ema_delta_alpha_range"},{anchor:"transformers.MegaConfig.ema_beta_range",description:`<strong>ema_beta_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation for initializing the beta parameter (expansion matrix) in
MegaMultiDimensionDampedEma.`,name:"ema_beta_range"},{anchor:"transformers.MegaConfig.ema_gamma_omega_range",description:`<strong>ema_gamma_omega_range</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The standard deviation for initializing the gamma (projection matrix) and omega (residual weight)
parameters in MultiDimensionEMA.`,name:"ema_gamma_omega_range"},{anchor:"transformers.MegaConfig.relative_positional_bias",description:`<strong>relative_positional_bias</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;rotary&quot;</code>) &#x2014;
Type of relative positional encoding. Choose one of <code>&quot;rotary&quot;</code> or <code>&quot;simple&quot;</code>. If <code>&quot;simple&quot;</code> is selected,
<code>max_positions</code> is used as a limit on input size, while <code>&quot;rotary&quot;</code> extrapolates beyond <code>max_positions</code>.`,name:"relative_positional_bias"},{anchor:"transformers.MegaConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as a decoder or not. If <code>False</code>, the model is used as an encoder.`,name:"is_decoder"},{anchor:"transformers.MegaConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.MegaConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"},{anchor:"transformers.MegaConfig.add_lm_hidden_dense_layer",description:`<strong>add_lm_hidden_dense_layer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to include a hidden layer for projection between encoder outputs and LM heads (<code>True</code>) or pass
hidden states directly to LM head (<code>False</code>). Remains optional for compatibility with original
implementation`,name:"add_lm_hidden_dense_layer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/configuration_mega.py#L31"}}),ie=new ae({props:{anchor:"transformers.MegaConfig.example",$$slots:{default:[ns]},$$scope:{ctx:k}}}),We=new O({props:{title:"MegaModel",local:"transformers.MegaModel",headingTag:"h2"}}),Ze=new I({props:{name:"class transformers.MegaModel",anchor:"transformers.MegaModel",parameters:[{name:"config",val:": MegaConfig"},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MegaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig">MegaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L1445"}}),Ie=new I({props:{name:"forward",anchor:"transformers.MegaModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MegaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>add_token_type_embeddings</code> parameter
set to <code>True</code>. All the value in this tensor should be always &lt; config.type_vocab_size.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MegaModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.MegaModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MegaModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L1484",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig"
>MegaConfig</a>) and inputs.</p>
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
`}}),le=new et({props:{$$slots:{default:[os]},$$scope:{ctx:k}}}),de=new ae({props:{anchor:"transformers.MegaModel.forward.example",$$slots:{default:[ss]},$$scope:{ctx:k}}}),qe=new O({props:{title:"MegaForCausalLM",local:"transformers.MegaForCausalLM",headingTag:"h2"}}),Be=new I({props:{name:"class transformers.MegaForCausalLM",anchor:"transformers.MegaForCausalLM",parameters:[{name:"config",val:": MegaConfig"}],parametersDescription:[{anchor:"transformers.MegaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig">MegaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L1646"}}),Ge=new I({props:{name:"forward",anchor:"transformers.MegaForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"past_key_values",val:": Tuple = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MegaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegaForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegaForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>add_token_type_embeddings</code> parameter
set to <code>True</code>. All the value in this tensor should be always &lt; config.type_vocab_size.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegaForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegaForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegaForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegaForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MegaForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.MegaForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MegaForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MegaForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L1678",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig"
>MegaConfig</a>) and inputs.</p>
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
`}}),ce=new et({props:{$$slots:{default:[as]},$$scope:{ctx:k}}}),pe=new ae({props:{anchor:"transformers.MegaForCausalLM.forward.example",$$slots:{default:[rs]},$$scope:{ctx:k}}}),Ne=new O({props:{title:"MegaForMaskedLM",local:"transformers.MegaForMaskedLM",headingTag:"h2"}}),Xe=new I({props:{name:"class transformers.MegaForMaskedLM",anchor:"transformers.MegaForMaskedLM",parameters:[{name:"config",val:": MegaConfig"}],parametersDescription:[{anchor:"transformers.MegaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig">MegaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L1809"}}),Le=new I({props:{name:"forward",anchor:"transformers.MegaForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MegaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>add_token_type_embeddings</code> parameter
set to <code>True</code>. All the value in this tensor should be always &lt; config.type_vocab_size.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MegaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L1841",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig"
>MegaConfig</a>) and inputs.</p>
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
`}}),me=new et({props:{$$slots:{default:[is]},$$scope:{ctx:k}}}),ue=new ae({props:{anchor:"transformers.MegaForMaskedLM.forward.example",$$slots:{default:[ls]},$$scope:{ctx:k}}}),Re=new O({props:{title:"MegaForSequenceClassification",local:"transformers.MegaForSequenceClassification",headingTag:"h2"}}),Ve=new I({props:{name:"class transformers.MegaForSequenceClassification",anchor:"transformers.MegaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig">MegaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L1907"}}),He=new I({props:{name:"forward",anchor:"transformers.MegaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MegaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>add_token_type_embeddings</code> parameter
set to <code>True</code>. All the value in this tensor should be always &lt; config.type_vocab_size.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L1926",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig"
>MegaConfig</a>) and inputs.</p>
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
`}}),he=new et({props:{$$slots:{default:[ds]},$$scope:{ctx:k}}}),ge=new ae({props:{anchor:"transformers.MegaForSequenceClassification.forward.example",$$slots:{default:[cs]},$$scope:{ctx:k}}}),fe=new ae({props:{anchor:"transformers.MegaForSequenceClassification.forward.example-2",$$slots:{default:[ps]},$$scope:{ctx:k}}}),Ee=new O({props:{title:"MegaForMultipleChoice",local:"transformers.MegaForMultipleChoice",headingTag:"h2"}}),Qe=new I({props:{name:"class transformers.MegaForMultipleChoice",anchor:"transformers.MegaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig">MegaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L1998"}}),Ae=new I({props:{name:"forward",anchor:"transformers.MegaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MegaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegaForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegaForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>add_token_type_embeddings</code> parameter
set to <code>True</code>. All the value in this tensor should be always &lt; config.type_vocab_size.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegaForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegaForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegaForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegaForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L2016",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig"
>MegaConfig</a>) and inputs.</p>
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
`}}),_e=new et({props:{$$slots:{default:[ms]},$$scope:{ctx:k}}}),Me=new ae({props:{anchor:"transformers.MegaForMultipleChoice.forward.example",$$slots:{default:[us]},$$scope:{ctx:k}}}),Se=new O({props:{title:"MegaForTokenClassification",local:"transformers.MegaForTokenClassification",headingTag:"h2"}}),Ye=new I({props:{name:"class transformers.MegaForTokenClassification",anchor:"transformers.MegaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig">MegaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L2083"}}),Pe=new I({props:{name:"forward",anchor:"transformers.MegaForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MegaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>add_token_type_embeddings</code> parameter
set to <code>True</code>. All the value in this tensor should be always &lt; config.type_vocab_size.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L2105",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig"
>MegaConfig</a>) and inputs.</p>
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
`}}),be=new et({props:{$$slots:{default:[hs]},$$scope:{ctx:k}}}),ye=new ae({props:{anchor:"transformers.MegaForTokenClassification.forward.example",$$slots:{default:[gs]},$$scope:{ctx:k}}}),Oe=new O({props:{title:"MegaForQuestionAnswering",local:"transformers.MegaForQuestionAnswering",headingTag:"h2"}}),De=new I({props:{name:"class transformers.MegaForQuestionAnswering",anchor:"transformers.MegaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig">MegaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L2183"}}),Ke=new I({props:{name:"forward",anchor:"transformers.MegaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MegaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>add_token_type_embeddings</code> parameter
set to <code>True</code>. All the value in this tensor should be always &lt; config.type_vocab_size.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MegaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mega/modeling_mega.py#L2201",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mega#transformers.MegaConfig"
>MegaConfig</a>) and inputs.</p>
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
`}}),Te=new et({props:{$$slots:{default:[fs]},$$scope:{ctx:k}}}),we=new ae({props:{anchor:"transformers.MegaForQuestionAnswering.forward.example",$$slots:{default:[_s]},$$scope:{ctx:k}}}),{c(){n=c("meta"),h=s(),r=c("p"),l=s(),f(g.$$.fragment),t=s(),f(w.$$.fragment),It=s(),ke=c("p"),ke.innerHTML=po,qt=s(),ve=c("p"),ve.textContent=mo,Bt=s(),$e=c("p"),$e.innerHTML=uo,Gt=s(),Ce=c("p"),Ce.innerHTML=ho,Nt=s(),f(je.$$.fragment),Xt=s(),ze=c("ul"),ze.innerHTML=go,Lt=s(),f(Je.$$.fragment),Rt=s(),xe=c("ul"),xe.innerHTML=fo,Vt=s(),f(Fe.$$.fragment),Ht=s(),B=c("div"),f(Ue.$$.fragment),ln=s(),tt=c("p"),tt.innerHTML=_o,dn=s(),nt=c("p"),nt.innerHTML=Mo,cn=s(),f(ie.$$.fragment),Et=s(),f(We.$$.fragment),Qt=s(),v=c("div"),f(Ze.$$.fragment),pn=s(),ot=c("p"),ot.textContent=bo,mn=s(),st=c("p"),st.innerHTML=yo,un=s(),at=c("p"),at.innerHTML=To,hn=s(),rt=c("p"),rt.innerHTML=wo,gn=s(),it=c("p"),it.innerHTML=ko,fn=s(),lt=c("p"),lt.innerHTML=vo,_n=s(),E=c("div"),f(Ie.$$.fragment),Mn=s(),dt=c("p"),dt.innerHTML=$o,bn=s(),f(le.$$.fragment),yn=s(),f(de.$$.fragment),At=s(),f(qe.$$.fragment),St=s(),J=c("div"),f(Be.$$.fragment),Tn=s(),ct=c("p"),ct.innerHTML=Co,wn=s(),pt=c("p"),pt.innerHTML=jo,kn=s(),mt=c("p"),mt.innerHTML=zo,vn=s(),Q=c("div"),f(Ge.$$.fragment),$n=s(),ut=c("p"),ut.innerHTML=Jo,Cn=s(),f(ce.$$.fragment),jn=s(),f(pe.$$.fragment),Yt=s(),f(Ne.$$.fragment),Pt=s(),x=c("div"),f(Xe.$$.fragment),zn=s(),ht=c("p"),ht.innerHTML=xo,Jn=s(),gt=c("p"),gt.innerHTML=Fo,xn=s(),ft=c("p"),ft.innerHTML=Uo,Fn=s(),A=c("div"),f(Le.$$.fragment),Un=s(),_t=c("p"),_t.innerHTML=Wo,Wn=s(),f(me.$$.fragment),Zn=s(),f(ue.$$.fragment),Ot=s(),f(Re.$$.fragment),Dt=s(),F=c("div"),f(Ve.$$.fragment),In=s(),Mt=c("p"),Mt.textContent=Zo,qn=s(),bt=c("p"),bt.innerHTML=Io,Bn=s(),yt=c("p"),yt.innerHTML=qo,Gn=s(),q=c("div"),f(He.$$.fragment),Nn=s(),Tt=c("p"),Tt.innerHTML=Bo,Xn=s(),f(he.$$.fragment),Ln=s(),f(ge.$$.fragment),Rn=s(),f(fe.$$.fragment),Kt=s(),f(Ee.$$.fragment),en=s(),U=c("div"),f(Qe.$$.fragment),Vn=s(),wt=c("p"),wt.textContent=Go,Hn=s(),kt=c("p"),kt.innerHTML=No,En=s(),vt=c("p"),vt.innerHTML=Xo,Qn=s(),S=c("div"),f(Ae.$$.fragment),An=s(),$t=c("p"),$t.innerHTML=Lo,Sn=s(),f(_e.$$.fragment),Yn=s(),f(Me.$$.fragment),tn=s(),f(Se.$$.fragment),nn=s(),W=c("div"),f(Ye.$$.fragment),Pn=s(),Ct=c("p"),Ct.textContent=Ro,On=s(),jt=c("p"),jt.innerHTML=Vo,Dn=s(),zt=c("p"),zt.innerHTML=Ho,Kn=s(),Y=c("div"),f(Pe.$$.fragment),eo=s(),Jt=c("p"),Jt.innerHTML=Eo,to=s(),f(be.$$.fragment),no=s(),f(ye.$$.fragment),on=s(),f(Oe.$$.fragment),sn=s(),Z=c("div"),f(De.$$.fragment),oo=s(),xt=c("p"),xt.innerHTML=Qo,so=s(),Ft=c("p"),Ft.innerHTML=Ao,ao=s(),Ut=c("p"),Ut.innerHTML=So,ro=s(),P=c("div"),f(Ke.$$.fragment),io=s(),Wt=c("p"),Wt.innerHTML=Yo,lo=s(),f(Te.$$.fragment),co=s(),f(we.$$.fragment),an=s(),Zt=c("p"),this.h()},l(e){const i=ts("svelte-u9bgzb",document.head);n=p(i,"META",{name:!0,content:!0}),i.forEach(d),h=a(e),r=p(e,"P",{}),C(r).forEach(d),l=a(e),_(g.$$.fragment,e),t=a(e),_(w.$$.fragment,e),It=a(e),ke=p(e,"P",{"data-svelte-h":!0}),u(ke)!=="svelte-y21kap"&&(ke.innerHTML=po),qt=a(e),ve=p(e,"P",{"data-svelte-h":!0}),u(ve)!=="svelte-vfdo9a"&&(ve.textContent=mo),Bt=a(e),$e=p(e,"P",{"data-svelte-h":!0}),u($e)!=="svelte-usb8p6"&&($e.innerHTML=uo),Gt=a(e),Ce=p(e,"P",{"data-svelte-h":!0}),u(Ce)!=="svelte-hu61i0"&&(Ce.innerHTML=ho),Nt=a(e),_(je.$$.fragment,e),Xt=a(e),ze=p(e,"UL",{"data-svelte-h":!0}),u(ze)!=="svelte-18672am"&&(ze.innerHTML=go),Lt=a(e),_(Je.$$.fragment,e),Rt=a(e),xe=p(e,"UL",{"data-svelte-h":!0}),u(xe)!=="svelte-12nl4xf"&&(xe.innerHTML=fo),Vt=a(e),_(Fe.$$.fragment,e),Ht=a(e),B=p(e,"DIV",{class:!0});var D=C(B);_(Ue.$$.fragment,D),ln=a(D),tt=p(D,"P",{"data-svelte-h":!0}),u(tt)!=="svelte-8ilpn3"&&(tt.innerHTML=_o),dn=a(D),nt=p(D,"P",{"data-svelte-h":!0}),u(nt)!=="svelte-o55m63"&&(nt.innerHTML=Mo),cn=a(D),_(ie.$$.fragment,D),D.forEach(d),Et=a(e),_(We.$$.fragment,e),Qt=a(e),v=p(e,"DIV",{class:!0});var $=C(v);_(Ze.$$.fragment,$),pn=a($),ot=p($,"P",{"data-svelte-h":!0}),u(ot)!=="svelte-wsjevx"&&(ot.textContent=bo),mn=a($),st=p($,"P",{"data-svelte-h":!0}),u(st)!=="svelte-6pahdo"&&(st.innerHTML=yo),un=a($),at=p($,"P",{"data-svelte-h":!0}),u(at)!=="svelte-hswkmf"&&(at.innerHTML=To),hn=a($),rt=p($,"P",{"data-svelte-h":!0}),u(rt)!=="svelte-1jfjp18"&&(rt.innerHTML=wo),gn=a($),it=p($,"P",{"data-svelte-h":!0}),u(it)!=="svelte-1u2qb33"&&(it.innerHTML=ko),fn=a($),lt=p($,"P",{"data-svelte-h":!0}),u(lt)!=="svelte-ge0ssm"&&(lt.innerHTML=vo),_n=a($),E=p($,"DIV",{class:!0});var K=C(E);_(Ie.$$.fragment,K),Mn=a(K),dt=p(K,"P",{"data-svelte-h":!0}),u(dt)!=="svelte-z3lxd9"&&(dt.innerHTML=$o),bn=a(K),_(le.$$.fragment,K),yn=a(K),_(de.$$.fragment,K),K.forEach(d),$.forEach(d),At=a(e),_(qe.$$.fragment,e),St=a(e),J=p(e,"DIV",{class:!0});var G=C(J);_(Be.$$.fragment,G),Tn=a(G),ct=p(G,"P",{"data-svelte-h":!0}),u(ct)!=="svelte-pogedt"&&(ct.innerHTML=Co),wn=a(G),pt=p(G,"P",{"data-svelte-h":!0}),u(pt)!=="svelte-6pahdo"&&(pt.innerHTML=jo),kn=a(G),mt=p(G,"P",{"data-svelte-h":!0}),u(mt)!=="svelte-hswkmf"&&(mt.innerHTML=zo),vn=a(G),Q=p(G,"DIV",{class:!0});var ee=C(Q);_(Ge.$$.fragment,ee),$n=a(ee),ut=p(ee,"P",{"data-svelte-h":!0}),u(ut)!=="svelte-1gixa7l"&&(ut.innerHTML=Jo),Cn=a(ee),_(ce.$$.fragment,ee),jn=a(ee),_(pe.$$.fragment,ee),ee.forEach(d),G.forEach(d),Yt=a(e),_(Ne.$$.fragment,e),Pt=a(e),x=p(e,"DIV",{class:!0});var N=C(x);_(Xe.$$.fragment,N),zn=a(N),ht=p(N,"P",{"data-svelte-h":!0}),u(ht)!=="svelte-vwo04g"&&(ht.innerHTML=xo),Jn=a(N),gt=p(N,"P",{"data-svelte-h":!0}),u(gt)!=="svelte-6pahdo"&&(gt.innerHTML=Fo),xn=a(N),ft=p(N,"P",{"data-svelte-h":!0}),u(ft)!=="svelte-hswkmf"&&(ft.innerHTML=Uo),Fn=a(N),A=p(N,"DIV",{class:!0});var te=C(A);_(Le.$$.fragment,te),Un=a(te),_t=p(te,"P",{"data-svelte-h":!0}),u(_t)!=="svelte-10n8u09"&&(_t.innerHTML=Wo),Wn=a(te),_(me.$$.fragment,te),Zn=a(te),_(ue.$$.fragment,te),te.forEach(d),N.forEach(d),Ot=a(e),_(Re.$$.fragment,e),Dt=a(e),F=p(e,"DIV",{class:!0});var X=C(F);_(Ve.$$.fragment,X),In=a(X),Mt=p(X,"P",{"data-svelte-h":!0}),u(Mt)!=="svelte-12iqzjk"&&(Mt.textContent=Zo),qn=a(X),bt=p(X,"P",{"data-svelte-h":!0}),u(bt)!=="svelte-6pahdo"&&(bt.innerHTML=Io),Bn=a(X),yt=p(X,"P",{"data-svelte-h":!0}),u(yt)!=="svelte-hswkmf"&&(yt.innerHTML=qo),Gn=a(X),q=p(X,"DIV",{class:!0});var L=C(q);_(He.$$.fragment,L),Nn=a(L),Tt=p(L,"P",{"data-svelte-h":!0}),u(Tt)!=="svelte-hkqpk1"&&(Tt.innerHTML=Bo),Xn=a(L),_(he.$$.fragment,L),Ln=a(L),_(ge.$$.fragment,L),Rn=a(L),_(fe.$$.fragment,L),L.forEach(d),X.forEach(d),Kt=a(e),_(Ee.$$.fragment,e),en=a(e),U=p(e,"DIV",{class:!0});var R=C(U);_(Qe.$$.fragment,R),Vn=a(R),wt=p(R,"P",{"data-svelte-h":!0}),u(wt)!=="svelte-370gjw"&&(wt.textContent=Go),Hn=a(R),kt=p(R,"P",{"data-svelte-h":!0}),u(kt)!=="svelte-6pahdo"&&(kt.innerHTML=No),En=a(R),vt=p(R,"P",{"data-svelte-h":!0}),u(vt)!=="svelte-hswkmf"&&(vt.innerHTML=Xo),Qn=a(R),S=p(R,"DIV",{class:!0});var ne=C(S);_(Ae.$$.fragment,ne),An=a(ne),$t=p(ne,"P",{"data-svelte-h":!0}),u($t)!=="svelte-11ti2yp"&&($t.innerHTML=Lo),Sn=a(ne),_(_e.$$.fragment,ne),Yn=a(ne),_(Me.$$.fragment,ne),ne.forEach(d),R.forEach(d),tn=a(e),_(Se.$$.fragment,e),nn=a(e),W=p(e,"DIV",{class:!0});var V=C(W);_(Ye.$$.fragment,V),Pn=a(V),Ct=p(V,"P",{"data-svelte-h":!0}),u(Ct)!=="svelte-1bzmarr"&&(Ct.textContent=Ro),On=a(V),jt=p(V,"P",{"data-svelte-h":!0}),u(jt)!=="svelte-6pahdo"&&(jt.innerHTML=Vo),Dn=a(V),zt=p(V,"P",{"data-svelte-h":!0}),u(zt)!=="svelte-hswkmf"&&(zt.innerHTML=Ho),Kn=a(V),Y=p(V,"DIV",{class:!0});var oe=C(Y);_(Pe.$$.fragment,oe),eo=a(oe),Jt=p(oe,"P",{"data-svelte-h":!0}),u(Jt)!=="svelte-xirdrp"&&(Jt.innerHTML=Eo),to=a(oe),_(be.$$.fragment,oe),no=a(oe),_(ye.$$.fragment,oe),oe.forEach(d),V.forEach(d),on=a(e),_(Oe.$$.fragment,e),sn=a(e),Z=p(e,"DIV",{class:!0});var H=C(Z);_(De.$$.fragment,H),oo=a(H),xt=p(H,"P",{"data-svelte-h":!0}),u(xt)!=="svelte-8yqw99"&&(xt.innerHTML=Qo),so=a(H),Ft=p(H,"P",{"data-svelte-h":!0}),u(Ft)!=="svelte-6pahdo"&&(Ft.innerHTML=Ao),ao=a(H),Ut=p(H,"P",{"data-svelte-h":!0}),u(Ut)!=="svelte-hswkmf"&&(Ut.innerHTML=So),ro=a(H),P=p(H,"DIV",{class:!0});var se=C(P);_(Ke.$$.fragment,se),io=a(se),Wt=p(se,"P",{"data-svelte-h":!0}),u(Wt)!=="svelte-1xtwv2r"&&(Wt.innerHTML=Yo),lo=a(se),_(Te.$$.fragment,se),co=a(se),_(we.$$.fragment,se),se.forEach(d),H.forEach(d),an=a(e),Zt=p(e,"P",{}),C(Zt).forEach(d),this.h()},h(){j(n,"name","hf:doc:metadata"),j(n,"content",bs),j(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,i){o(document.head,n),m(e,h,i),m(e,r,i),m(e,l,i),M(g,e,i),m(e,t,i),M(w,e,i),m(e,It,i),m(e,ke,i),m(e,qt,i),m(e,ve,i),m(e,Bt,i),m(e,$e,i),m(e,Gt,i),m(e,Ce,i),m(e,Nt,i),M(je,e,i),m(e,Xt,i),m(e,ze,i),m(e,Lt,i),M(Je,e,i),m(e,Rt,i),m(e,xe,i),m(e,Vt,i),M(Fe,e,i),m(e,Ht,i),m(e,B,i),M(Ue,B,null),o(B,ln),o(B,tt),o(B,dn),o(B,nt),o(B,cn),M(ie,B,null),m(e,Et,i),M(We,e,i),m(e,Qt,i),m(e,v,i),M(Ze,v,null),o(v,pn),o(v,ot),o(v,mn),o(v,st),o(v,un),o(v,at),o(v,hn),o(v,rt),o(v,gn),o(v,it),o(v,fn),o(v,lt),o(v,_n),o(v,E),M(Ie,E,null),o(E,Mn),o(E,dt),o(E,bn),M(le,E,null),o(E,yn),M(de,E,null),m(e,At,i),M(qe,e,i),m(e,St,i),m(e,J,i),M(Be,J,null),o(J,Tn),o(J,ct),o(J,wn),o(J,pt),o(J,kn),o(J,mt),o(J,vn),o(J,Q),M(Ge,Q,null),o(Q,$n),o(Q,ut),o(Q,Cn),M(ce,Q,null),o(Q,jn),M(pe,Q,null),m(e,Yt,i),M(Ne,e,i),m(e,Pt,i),m(e,x,i),M(Xe,x,null),o(x,zn),o(x,ht),o(x,Jn),o(x,gt),o(x,xn),o(x,ft),o(x,Fn),o(x,A),M(Le,A,null),o(A,Un),o(A,_t),o(A,Wn),M(me,A,null),o(A,Zn),M(ue,A,null),m(e,Ot,i),M(Re,e,i),m(e,Dt,i),m(e,F,i),M(Ve,F,null),o(F,In),o(F,Mt),o(F,qn),o(F,bt),o(F,Bn),o(F,yt),o(F,Gn),o(F,q),M(He,q,null),o(q,Nn),o(q,Tt),o(q,Xn),M(he,q,null),o(q,Ln),M(ge,q,null),o(q,Rn),M(fe,q,null),m(e,Kt,i),M(Ee,e,i),m(e,en,i),m(e,U,i),M(Qe,U,null),o(U,Vn),o(U,wt),o(U,Hn),o(U,kt),o(U,En),o(U,vt),o(U,Qn),o(U,S),M(Ae,S,null),o(S,An),o(S,$t),o(S,Sn),M(_e,S,null),o(S,Yn),M(Me,S,null),m(e,tn,i),M(Se,e,i),m(e,nn,i),m(e,W,i),M(Ye,W,null),o(W,Pn),o(W,Ct),o(W,On),o(W,jt),o(W,Dn),o(W,zt),o(W,Kn),o(W,Y),M(Pe,Y,null),o(Y,eo),o(Y,Jt),o(Y,to),M(be,Y,null),o(Y,no),M(ye,Y,null),m(e,on,i),M(Oe,e,i),m(e,sn,i),m(e,Z,i),M(De,Z,null),o(Z,oo),o(Z,xt),o(Z,so),o(Z,Ft),o(Z,ao),o(Z,Ut),o(Z,ro),o(Z,P),M(Ke,P,null),o(P,io),o(P,Wt),o(P,lo),M(Te,P,null),o(P,co),M(we,P,null),m(e,an,i),m(e,Zt,i),rn=!0},p(e,[i]){const D={};i&2&&(D.$$scope={dirty:i,ctx:e}),ie.$set(D);const $={};i&2&&($.$$scope={dirty:i,ctx:e}),le.$set($);const K={};i&2&&(K.$$scope={dirty:i,ctx:e}),de.$set(K);const G={};i&2&&(G.$$scope={dirty:i,ctx:e}),ce.$set(G);const ee={};i&2&&(ee.$$scope={dirty:i,ctx:e}),pe.$set(ee);const N={};i&2&&(N.$$scope={dirty:i,ctx:e}),me.$set(N);const te={};i&2&&(te.$$scope={dirty:i,ctx:e}),ue.$set(te);const X={};i&2&&(X.$$scope={dirty:i,ctx:e}),he.$set(X);const L={};i&2&&(L.$$scope={dirty:i,ctx:e}),ge.$set(L);const R={};i&2&&(R.$$scope={dirty:i,ctx:e}),fe.$set(R);const ne={};i&2&&(ne.$$scope={dirty:i,ctx:e}),_e.$set(ne);const V={};i&2&&(V.$$scope={dirty:i,ctx:e}),Me.$set(V);const oe={};i&2&&(oe.$$scope={dirty:i,ctx:e}),be.$set(oe);const H={};i&2&&(H.$$scope={dirty:i,ctx:e}),ye.$set(H);const se={};i&2&&(se.$$scope={dirty:i,ctx:e}),Te.$set(se);const Po={};i&2&&(Po.$$scope={dirty:i,ctx:e}),we.$set(Po)},i(e){rn||(b(g.$$.fragment,e),b(w.$$.fragment,e),b(je.$$.fragment,e),b(Je.$$.fragment,e),b(Fe.$$.fragment,e),b(Ue.$$.fragment,e),b(ie.$$.fragment,e),b(We.$$.fragment,e),b(Ze.$$.fragment,e),b(Ie.$$.fragment,e),b(le.$$.fragment,e),b(de.$$.fragment,e),b(qe.$$.fragment,e),b(Be.$$.fragment,e),b(Ge.$$.fragment,e),b(ce.$$.fragment,e),b(pe.$$.fragment,e),b(Ne.$$.fragment,e),b(Xe.$$.fragment,e),b(Le.$$.fragment,e),b(me.$$.fragment,e),b(ue.$$.fragment,e),b(Re.$$.fragment,e),b(Ve.$$.fragment,e),b(He.$$.fragment,e),b(he.$$.fragment,e),b(ge.$$.fragment,e),b(fe.$$.fragment,e),b(Ee.$$.fragment,e),b(Qe.$$.fragment,e),b(Ae.$$.fragment,e),b(_e.$$.fragment,e),b(Me.$$.fragment,e),b(Se.$$.fragment,e),b(Ye.$$.fragment,e),b(Pe.$$.fragment,e),b(be.$$.fragment,e),b(ye.$$.fragment,e),b(Oe.$$.fragment,e),b(De.$$.fragment,e),b(Ke.$$.fragment,e),b(Te.$$.fragment,e),b(we.$$.fragment,e),rn=!0)},o(e){y(g.$$.fragment,e),y(w.$$.fragment,e),y(je.$$.fragment,e),y(Je.$$.fragment,e),y(Fe.$$.fragment,e),y(Ue.$$.fragment,e),y(ie.$$.fragment,e),y(We.$$.fragment,e),y(Ze.$$.fragment,e),y(Ie.$$.fragment,e),y(le.$$.fragment,e),y(de.$$.fragment,e),y(qe.$$.fragment,e),y(Be.$$.fragment,e),y(Ge.$$.fragment,e),y(ce.$$.fragment,e),y(pe.$$.fragment,e),y(Ne.$$.fragment,e),y(Xe.$$.fragment,e),y(Le.$$.fragment,e),y(me.$$.fragment,e),y(ue.$$.fragment,e),y(Re.$$.fragment,e),y(Ve.$$.fragment,e),y(He.$$.fragment,e),y(he.$$.fragment,e),y(ge.$$.fragment,e),y(fe.$$.fragment,e),y(Ee.$$.fragment,e),y(Qe.$$.fragment,e),y(Ae.$$.fragment,e),y(_e.$$.fragment,e),y(Me.$$.fragment,e),y(Se.$$.fragment,e),y(Ye.$$.fragment,e),y(Pe.$$.fragment,e),y(be.$$.fragment,e),y(ye.$$.fragment,e),y(Oe.$$.fragment,e),y(De.$$.fragment,e),y(Ke.$$.fragment,e),y(Te.$$.fragment,e),y(we.$$.fragment,e),rn=!1},d(e){e&&(d(h),d(r),d(l),d(t),d(It),d(ke),d(qt),d(ve),d(Bt),d($e),d(Gt),d(Ce),d(Nt),d(Xt),d(ze),d(Lt),d(Rt),d(xe),d(Vt),d(Ht),d(B),d(Et),d(Qt),d(v),d(At),d(St),d(J),d(Yt),d(Pt),d(x),d(Ot),d(Dt),d(F),d(Kt),d(en),d(U),d(tn),d(nn),d(W),d(on),d(sn),d(Z),d(an),d(Zt)),d(n),T(g,e),T(w,e),T(je,e),T(Je,e),T(Fe,e),T(Ue),T(ie),T(We,e),T(Ze),T(Ie),T(le),T(de),T(qe,e),T(Be),T(Ge),T(ce),T(pe),T(Ne,e),T(Xe),T(Le),T(me),T(ue),T(Re,e),T(Ve),T(He),T(he),T(ge),T(fe),T(Ee,e),T(Qe),T(Ae),T(_e),T(Me),T(Se,e),T(Ye),T(Pe),T(be),T(ye),T(Oe,e),T(De),T(Ke),T(Te),T(we)}}}const bs='{"title":"MEGA","local":"mega","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Implementation Notes","local":"implementation-notes","sections":[],"depth":2},{"title":"MegaConfig","local":"transformers.MegaConfig","sections":[],"depth":2},{"title":"MegaModel","local":"transformers.MegaModel","sections":[],"depth":2},{"title":"MegaForCausalLM","local":"transformers.MegaForCausalLM","sections":[],"depth":2},{"title":"MegaForMaskedLM","local":"transformers.MegaForMaskedLM","sections":[],"depth":2},{"title":"MegaForSequenceClassification","local":"transformers.MegaForSequenceClassification","sections":[],"depth":2},{"title":"MegaForMultipleChoice","local":"transformers.MegaForMultipleChoice","sections":[],"depth":2},{"title":"MegaForTokenClassification","local":"transformers.MegaForTokenClassification","sections":[],"depth":2},{"title":"MegaForQuestionAnswering","local":"transformers.MegaForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function ys(k){return Do(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zs extends Ko{constructor(n){super(),es(this,n,ys,Ms,Oo,{})}}export{zs as component};
