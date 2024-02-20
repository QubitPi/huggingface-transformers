import{s as on,o as sn,n as A}from"../chunks/scheduler.9bc65507.js";import{S as an,i as rn,g as m,s as r,r as h,A as ln,h as p,f as l,c as i,j as I,u as g,x as k,k as N,y as a,a as f,v as _,d as b,t as M,w as T}from"../chunks/index.707bf1b6.js";import{T as Wt}from"../chunks/Tip.c2ecdbf4.js";import{D as B}from"../chunks/Docstring.17db21ae.js";import{C as De}from"../chunks/CodeBlock.54a9f38d.js";import{F as dn,M as nn}from"../chunks/Markdown.fef84341.js";import{E as Ae}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Be}from"../chunks/Heading.342b1fa6.js";function cn(C){let e,u="Examples:",t,s,y;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEVzbU1vZGVsJTJDJTIwRXNtQ29uZmlnJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMEVTTSUyMGZhY2Vib29rJTJGZXNtLTFiJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTIwJTNFJTNFJTNFJTIwY29uZmlndXJhdGlvbiUyMCUzRCUyMEVzbUNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwZnJvbSUyMHRoZSUyMGNvbmZpZ3VyYXRpb24lMjAlM0UlM0UlM0UlMjBtb2RlbCUyMCUzRCUyMEVTTU1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTIwJTNFJTNFJTNFJTIwY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmModel, EsmConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ESM facebook/esm-1b style configuration &gt;&gt;&gt; configuration = EsmConfig()</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration &gt;&gt;&gt; model = ESMModel(configuration)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration &gt;&gt;&gt; configuration = model.config</span>`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-kvfsh7"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function mn(C){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=u},l(t){e=p(t,"P",{"data-svelte-h":!0}),k(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){f(t,e,s)},p:A,d(t){t&&l(e)}}}function pn(C){let e,u="Example:",t,s,y;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFc21Nb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZlc20yX3Q2XzhNX1VSNTBEJTIyKSUwQW1vZGVsJTIwJTNEJTIwRXNtTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZXNtMl90Nl84TV9VUjUwRCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, EsmModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmModel.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function un(C){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=u},l(t){e=p(t,"P",{"data-svelte-h":!0}),k(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){f(t,e,s)},p:A,d(t){t&&l(e)}}}function fn(C){let e,u="Example:",t,s,y;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFc21Gb3JNYXNrZWRMTSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZlc20yX3Q2XzhNX1VSNTBEJTIyKSUwQW1vZGVsJTIwJTNEJTIwRXNtRm9yTWFza2VkTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZXNtMl90Nl84TV9VUjUwRCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjAlM0NtYXNrJTNFLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEElMjMlMjByZXRyaWV2ZSUyMGluZGV4JTIwb2YlMjAlM0NtYXNrJTNFJTBBbWFza190b2tlbl9pbmRleCUyMCUzRCUyMChpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQpJTVCMCU1RC5ub256ZXJvKGFzX3R1cGxlJTNEVHJ1ZSklNUIwJTVEJTBBJTBBcHJlZGljdGVkX3Rva2VuX2lkJTIwJTNEJTIwbG9naXRzJTVCMCUyQyUyMG1hc2tfdG9rZW5faW5kZXglNUQuYXJnbWF4KGF4aXMlM0QtMSklMEElMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjBQYXJpcy4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQSUyMyUyMG1hc2slMjBsYWJlbHMlMjBvZiUyMG5vbi0lM0NtYXNrJTNFJTIwdG9rZW5zJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gud2hlcmUoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkJTJDJTIwbGFiZWxzJTJDJTIwLTEwMCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, EsmForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForMaskedLM.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function hn(C){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=u},l(t){e=p(t,"P",{"data-svelte-h":!0}),k(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){f(t,e,s)},p:A,d(t){t&&l(e)}}}function gn(C){let e,u="Example of single-label classification:",t,s,y;return s=new De({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEVzbUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIpJTBBbW9kZWwlMjAlM0QlMjBFc21Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwbG9naXRzLmFyZ21heCgpLml0ZW0oKSUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMEVzbUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZXNtMl90Nl84TV9VUjUwRCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, EsmForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-ykxpe4"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function _n(C){let e,u="Example of multi-label classification:",t,s,y;return s=new De({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEVzbUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIpJTBBbW9kZWwlMjAlM0QlMjBFc21Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIlMkMlMjBwcm9ibGVtX3R5cGUlM0QlMjJtdWx0aV9sYWJlbF9jbGFzc2lmaWNhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJhbmdlKDAlMkMlMjBsb2dpdHMuc2hhcGUlNUItMSU1RCklNUJ0b3JjaC5zaWdtb2lkKGxvZ2l0cykuc3F1ZWV6ZShkaW0lM0QwKSUyMCUzRSUyMDAuNSU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMEVzbUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMmZhY2Vib29rJTJGZXNtMl90Nl84TV9VUjUwRCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, EsmForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-1l8e32d"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function bn(C){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=u},l(t){e=p(t,"P",{"data-svelte-h":!0}),k(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){f(t,e,s)},p:A,d(t){t&&l(e)}}}function Mn(C){let e,u="Example:",t,s,y;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFc21Gb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIpJTBBbW9kZWwlMjAlM0QlMjBFc21Gb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMkh1Z2dpbmdGYWNlJTIwaXMlMjBhJTIwY29tcGFueSUyMGJhc2VkJTIwaW4lMjBQYXJpcyUyMGFuZCUyME5ldyUyMFlvcmslMjIlMkMlMjBhZGRfc3BlY2lhbF90b2tlbnMlM0RGYWxzZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTIwJTNEJTIwbG9naXRzLmFyZ21heCgtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdC5pdGVtKCklNUQlMjBmb3IlMjB0JTIwaW4lMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTVCMCU1RCU1RCUwQSUwQWxhYmVscyUyMCUzRCUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, EsmForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForTokenClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function Tn(C){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=u},l(t){e=p(t,"P",{"data-svelte-h":!0}),k(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){f(t,e,s)},p:A,d(t){t&&l(e)}}}function yn(C){let e,u="Example:",t,s,y;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFc21Gb3JQcm90ZWluRm9sZGluZyUwQSUwQW1vZGVsJTIwJTNEJTIwRXNtRm9yUHJvdGVpbkZvbGRpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZXNtZm9sZF92MSUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbWZvbGRfdjElMjIpJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCU1QiUyMk1MS05WUVZRTFYlMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UpJTIwJTIwJTIzJTIwQSUyMHRpbnklMjByYW5kb20lMjBwZXB0aWRlJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWZvbGRlZF9wb3NpdGlvbnMlMjAlM0QlMjBvdXRwdXRzLnBvc2l0aW9ucw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, EsmForProteinFolding

<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForProteinFolding.from_pretrained(<span class="hljs-string">&quot;facebook/esmfold_v1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esmfold_v1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;MLKNVQVQLV&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)  <span class="hljs-comment"># A tiny random peptide</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>folded_positions = outputs.positions`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function kn(C){let e,u,t,s,y,n,v="The bare ESM Model transformer outputting raw hidden-states without any specific head on top.",ct,K,It=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,mt,ee,Nt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,pt,Z,Oe=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">Attention is
all you need</a> by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`,ut,te,qt=`To behave as an decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set
to <code>True</code>. To be used in a Seq2Seq model, the model needs to initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,ft,J,Xe,we,me,Ke='The <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmModel">EsmModel</a> forward method, overrides the <code>__call__</code> special method.',et,E,Pe,$e,pe,tt,nt,x,ot,ht,ne,jt="ESM Model with a <code>language modeling</code> head on top.",We,X,Ie=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ne,Me,st=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,xt,q,ue,ve,V,fe='The <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmForMaskedLM">EsmForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',gt,Y,kt,U,he,Qe,qe,W,Ve,ge,Fe,Jt=`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,Ce,_t,wt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,R,_e,P=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Te,oe,ye,Re,Ye,ke='The <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmForSequenceClassification">EsmForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Ge,se,Ee,Q,bt,j,Se,Le,D,G,He,je,Mt,zt=`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,xe,Tt,Ut=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,L,O,$t=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,be,de,Je,ze,o,w='The <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmForTokenClassification">EsmForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',ae,H,re,c,$,S,ie,z,le,Ue,ce,Ze=`ESMForProteinFolding is the HuggingFace port of the original ESMFold model. It consists of an ESM-2 “stem” followed
by a protein folding “head”, although unlike most other output heads, this “head” is similar in size and runtime to
the rest of the model combined! It outputs a dictionary containing predicted structural information about the input
protein(s).`,St,Zt,Xt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Lt,Ht,Ot=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Qt,yt,Gt,Yt,Bt,Kt='The <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmForProteinFolding">EsmForProteinFolding</a> forward method, overrides the <code>__call__</code> special method.',At,Vt,Dt,Rt,Pt;return e=new Be({props:{title:"EsmModel",local:"transformers.EsmModel",headingTag:"h2"}}),s=new B({props:{name:"class transformers.EsmModel",anchor:"transformers.EsmModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.EsmModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L767"}}),Xe=new B({props:{name:"forward",anchor:"transformers.EsmModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.EsmModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length))</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EsmModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>((batch_size, sequence_length))</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EsmModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length))</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.EsmModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.EsmModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>((batch_size, sequence_length), hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EsmModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EsmModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EsmModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.EsmModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.EsmModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.EsmModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.EsmModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L814",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),E=new Wt({props:{$$slots:{default:[mn]},$$scope:{ctx:C}}}),$e=new Ae({props:{anchor:"transformers.EsmModel.forward.example",$$slots:{default:[pn]},$$scope:{ctx:C}}}),tt=new Be({props:{title:"EsmForMaskedLM",local:"transformers.EsmForMaskedLM",headingTag:"h2"}}),ot=new B({props:{name:"class transformers.EsmForMaskedLM",anchor:"transformers.EsmForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L953"}}),ue=new B({props:{name:"forward",anchor:"transformers.EsmForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.EsmForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EsmForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EsmForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.EsmForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.EsmForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EsmForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EsmForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EsmForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.EsmForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.EsmForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L977",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),Y=new Wt({props:{$$slots:{default:[un]},$$scope:{ctx:C}}}),U=new Ae({props:{anchor:"transformers.EsmForMaskedLM.forward.example",$$slots:{default:[fn]},$$scope:{ctx:C}}}),Qe=new Be({props:{title:"EsmForSequenceClassification",local:"transformers.EsmForSequenceClassification",headingTag:"h2"}}),Ve=new B({props:{name:"class transformers.EsmForSequenceClassification",anchor:"transformers.EsmForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1066"}}),ye=new B({props:{name:"forward",anchor:"transformers.EsmForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.EsmForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EsmForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EsmForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.EsmForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.EsmForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EsmForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EsmForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EsmForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.EsmForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1084",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),se=new Wt({props:{$$slots:{default:[hn]},$$scope:{ctx:C}}}),Q=new Ae({props:{anchor:"transformers.EsmForSequenceClassification.forward.example",$$slots:{default:[gn]},$$scope:{ctx:C}}}),j=new Ae({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-2",$$slots:{default:[_n]},$$scope:{ctx:C}}}),Le=new Be({props:{title:"EsmForTokenClassification",local:"transformers.EsmForTokenClassification",headingTag:"h2"}}),He=new B({props:{name:"class transformers.EsmForTokenClassification",anchor:"transformers.EsmForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1160"}}),Je=new B({props:{name:"forward",anchor:"transformers.EsmForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.EsmForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EsmForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EsmForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.EsmForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.EsmForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EsmForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EsmForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EsmForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.EsmForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1178",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),H=new Wt({props:{$$slots:{default:[bn]},$$scope:{ctx:C}}}),c=new Ae({props:{anchor:"transformers.EsmForTokenClassification.forward.example",$$slots:{default:[Mn]},$$scope:{ctx:C}}}),S=new Be({props:{title:"EsmForProteinFolding",local:"transformers.EsmForProteinFolding",headingTag:"h2"}}),le=new B({props:{name:"class transformers.EsmForProteinFolding",anchor:"transformers.EsmForProteinFolding",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForProteinFolding.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_esmfold.py#L2011"}}),Gt=new B({props:{name:"forward",anchor:"transformers.EsmForProteinFolding.forward",parameters:[{name:"input_ids",val:": Tensor"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"masking_pattern",val:": Optional = None"},{name:"num_recycles",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.EsmForProteinFolding.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EsmForProteinFolding.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EsmForProteinFolding.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.EsmForProteinFolding.forward.masking_pattern",description:`<strong>masking_pattern</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Locations of tokens to mask during training as a form of regularization. Mask values selected in <code>[0, 1]</code>.`,name:"masking_pattern"},{anchor:"transformers.EsmForProteinFolding.forward.num_recycles",description:`<strong>num_recycles</strong> (<code>int</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Number of times to recycle the input sequence. If <code>None</code>, defaults to <code>config.num_recycles</code>. &#x201C;Recycling&#x201D;
consists of passing the output of the folding trunk back in as input to the trunk. During training, the
number of recycles should vary with each batch, to ensure that the model learns to output valid predictions
after each recycle. During inference, num_recycles should be set to the highest value that the model was
trained with for maximum accuracy. Accordingly, when this value is set to <code>None</code>, config.max_recycles is
used.`,name:"num_recycles"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_esmfold.py#L2084",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.esm.modeling_esmfold.EsmForProteinFoldingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.esm.configuration_esm.EsmConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>frames</strong> (<code>torch.FloatTensor</code>) — Output frames.</li>
<li><strong>sidechain_frames</strong> (<code>torch.FloatTensor</code>) — Output sidechain frames.</li>
<li><strong>unnormalized_angles</strong> (<code>torch.FloatTensor</code>) — Predicted unnormalized backbone and side chain torsion angles.</li>
<li><strong>angles</strong> (<code>torch.FloatTensor</code>) — Predicted backbone and side chain torsion angles.</li>
<li><strong>positions</strong> (<code>torch.FloatTensor</code>) — Predicted positions of the backbone and side chain atoms.</li>
<li><strong>states</strong> (<code>torch.FloatTensor</code>) — Hidden states from the protein folding trunk.</li>
<li><strong>s_s</strong> (<code>torch.FloatTensor</code>) — Per-residue embeddings derived by concatenating the hidden states of each layer of the ESM-2 LM stem.</li>
<li><strong>s_z</strong> (<code>torch.FloatTensor</code>) — Pairwise residue embeddings.</li>
<li><strong>distogram_logits</strong> (<code>torch.FloatTensor</code>) — Input logits to the distogram used to compute residue distances.</li>
<li><strong>lm_logits</strong> (<code>torch.FloatTensor</code>) — Logits output by the ESM-2 protein language model stem.</li>
<li><strong>aatype</strong> (<code>torch.FloatTensor</code>) — Input amino acids (AlphaFold2 indices).</li>
<li><strong>atom14_atom_exists</strong> (<code>torch.FloatTensor</code>) — Whether each atom exists in the atom14 representation.</li>
<li><strong>residx_atom14_to_atom37</strong> (<code>torch.FloatTensor</code>) — Mapping between atoms in the atom14 and atom37 representations.</li>
<li><strong>residx_atom37_to_atom14</strong> (<code>torch.FloatTensor</code>) — Mapping between atoms in the atom37 and atom14 representations.</li>
<li><strong>atom37_atom_exists</strong> (<code>torch.FloatTensor</code>) — Whether each atom exists in the atom37 representation.</li>
<li><strong>residue_index</strong> (<code>torch.FloatTensor</code>) — The index of each residue in the protein chain. Unless internal padding tokens are used, this will just be
a sequence of integers from 0 to <code>sequence_length</code>.</li>
<li><strong>lddt_head</strong> (<code>torch.FloatTensor</code>) — Raw outputs from the lddt head used to compute plddt.</li>
<li><strong>plddt</strong> (<code>torch.FloatTensor</code>) — Per-residue confidence scores. Regions of low confidence may indicate areas where the model’s prediction is
uncertain, or where the protein structure is disordered.</li>
<li><strong>ptm_logits</strong> (<code>torch.FloatTensor</code>) — Raw logits used for computing ptm.</li>
<li><strong>ptm</strong> (<code>torch.FloatTensor</code>) — TM-score output representing the model’s high-level confidence in the overall structure.</li>
<li><strong>aligned_confidence_probs</strong> (<code>torch.FloatTensor</code>) — Per-residue confidence scores for the aligned structure.</li>
<li><strong>predicted_aligned_error</strong> (<code>torch.FloatTensor</code>) — Predicted error between the model’s prediction and the ground truth.</li>
<li><strong>max_predicted_aligned_error</strong> (<code>torch.FloatTensor</code>) — Per-sample maximum predicted error.</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.esm.modeling_esmfold.EsmForProteinFoldingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vt=new Wt({props:{$$slots:{default:[Tn]},$$scope:{ctx:C}}}),Rt=new Ae({props:{anchor:"transformers.EsmForProteinFolding.forward.example",$$slots:{default:[yn]},$$scope:{ctx:C}}}),{c(){h(e.$$.fragment),u=r(),t=m("div"),h(s.$$.fragment),y=r(),n=m("p"),n.textContent=v,ct=r(),K=m("p"),K.innerHTML=It,mt=r(),ee=m("p"),ee.innerHTML=Nt,pt=r(),Z=m("p"),Z.innerHTML=Oe,ut=r(),te=m("p"),te.innerHTML=qt,ft=r(),J=m("div"),h(Xe.$$.fragment),we=r(),me=m("p"),me.innerHTML=Ke,et=r(),h(E.$$.fragment),Pe=r(),h($e.$$.fragment),pe=r(),h(tt.$$.fragment),nt=r(),x=m("div"),h(ot.$$.fragment),ht=r(),ne=m("p"),ne.innerHTML=jt,We=r(),X=m("p"),X.innerHTML=Ie,Ne=r(),Me=m("p"),Me.innerHTML=st,xt=r(),q=m("div"),h(ue.$$.fragment),ve=r(),V=m("p"),V.innerHTML=fe,gt=r(),h(Y.$$.fragment),kt=r(),h(U.$$.fragment),he=r(),h(Qe.$$.fragment),qe=r(),W=m("div"),h(Ve.$$.fragment),ge=r(),Fe=m("p"),Fe.textContent=Jt,Ce=r(),_t=m("p"),_t.innerHTML=wt,R=r(),_e=m("p"),_e.innerHTML=P,Te=r(),oe=m("div"),h(ye.$$.fragment),Re=r(),Ye=m("p"),Ye.innerHTML=ke,Ge=r(),h(se.$$.fragment),Ee=r(),h(Q.$$.fragment),bt=r(),h(j.$$.fragment),Se=r(),h(Le.$$.fragment),D=r(),G=m("div"),h(He.$$.fragment),je=r(),Mt=m("p"),Mt.textContent=zt,xe=r(),Tt=m("p"),Tt.innerHTML=Ut,L=r(),O=m("p"),O.innerHTML=$t,be=r(),de=m("div"),h(Je.$$.fragment),ze=r(),o=m("p"),o.innerHTML=w,ae=r(),h(H.$$.fragment),re=r(),h(c.$$.fragment),$=r(),h(S.$$.fragment),ie=r(),z=m("div"),h(le.$$.fragment),Ue=r(),ce=m("p"),ce.textContent=Ze,St=r(),Zt=m("p"),Zt.innerHTML=Xt,Lt=r(),Ht=m("p"),Ht.innerHTML=Ot,Qt=r(),yt=m("div"),h(Gt.$$.fragment),Yt=r(),Bt=m("p"),Bt.innerHTML=Kt,At=r(),h(Vt.$$.fragment),Dt=r(),h(Rt.$$.fragment),this.h()},l(d){g(e.$$.fragment,d),u=i(d),t=p(d,"DIV",{class:!0});var F=I(t);g(s.$$.fragment,F),y=i(F),n=p(F,"P",{"data-svelte-h":!0}),k(n)!=="svelte-1fkphcu"&&(n.textContent=v),ct=i(F),K=p(F,"P",{"data-svelte-h":!0}),k(K)!=="svelte-6pahdo"&&(K.innerHTML=It),mt=i(F),ee=p(F,"P",{"data-svelte-h":!0}),k(ee)!=="svelte-hswkmf"&&(ee.innerHTML=Nt),pt=i(F),Z=p(F,"P",{"data-svelte-h":!0}),k(Z)!=="svelte-1du13oj"&&(Z.innerHTML=Oe),ut=i(F),te=p(F,"P",{"data-svelte-h":!0}),k(te)!=="svelte-174erte"&&(te.innerHTML=qt),ft=i(F),J=p(F,"DIV",{class:!0});var vt=I(J);g(Xe.$$.fragment,vt),we=i(vt),me=p(vt,"P",{"data-svelte-h":!0}),k(me)!=="svelte-14sjh04"&&(me.innerHTML=Ke),et=i(vt),g(E.$$.fragment,vt),Pe=i(vt),g($e.$$.fragment,vt),vt.forEach(l),F.forEach(l),pe=i(d),g(tt.$$.fragment,d),nt=i(d),x=p(d,"DIV",{class:!0});var at=I(x);g(ot.$$.fragment,at),ht=i(at),ne=p(at,"P",{"data-svelte-h":!0}),k(ne)!=="svelte-pcfqs9"&&(ne.innerHTML=jt),We=i(at),X=p(at,"P",{"data-svelte-h":!0}),k(X)!=="svelte-6pahdo"&&(X.innerHTML=Ie),Ne=i(at),Me=p(at,"P",{"data-svelte-h":!0}),k(Me)!=="svelte-hswkmf"&&(Me.innerHTML=st),xt=i(at),q=p(at,"DIV",{class:!0});var Ft=I(q);g(ue.$$.fragment,Ft),ve=i(Ft),V=p(Ft,"P",{"data-svelte-h":!0}),k(V)!=="svelte-1cl0uwk"&&(V.innerHTML=fe),gt=i(Ft),g(Y.$$.fragment,Ft),kt=i(Ft),g(U.$$.fragment,Ft),Ft.forEach(l),at.forEach(l),he=i(d),g(Qe.$$.fragment,d),qe=i(d),W=p(d,"DIV",{class:!0});var rt=I(W);g(Ve.$$.fragment,rt),ge=i(rt),Fe=p(rt,"P",{"data-svelte-h":!0}),k(Fe)!=="svelte-1l7pgh5"&&(Fe.textContent=Jt),Ce=i(rt),_t=p(rt,"P",{"data-svelte-h":!0}),k(_t)!=="svelte-6pahdo"&&(_t.innerHTML=wt),R=i(rt),_e=p(rt,"P",{"data-svelte-h":!0}),k(_e)!=="svelte-hswkmf"&&(_e.innerHTML=P),Te=i(rt),oe=p(rt,"DIV",{class:!0});var it=I(oe);g(ye.$$.fragment,it),Re=i(it),Ye=p(it,"P",{"data-svelte-h":!0}),k(Ye)!=="svelte-4a4z6q"&&(Ye.innerHTML=ke),Ge=i(it),g(se.$$.fragment,it),Ee=i(it),g(Q.$$.fragment,it),bt=i(it),g(j.$$.fragment,it),it.forEach(l),rt.forEach(l),Se=i(d),g(Le.$$.fragment,d),D=i(d),G=p(d,"DIV",{class:!0});var lt=I(G);g(He.$$.fragment,lt),je=i(lt),Mt=p(lt,"P",{"data-svelte-h":!0}),k(Mt)!=="svelte-dped9o"&&(Mt.textContent=zt),xe=i(lt),Tt=p(lt,"P",{"data-svelte-h":!0}),k(Tt)!=="svelte-6pahdo"&&(Tt.innerHTML=Ut),L=i(lt),O=p(lt,"P",{"data-svelte-h":!0}),k(O)!=="svelte-hswkmf"&&(O.innerHTML=$t),be=i(lt),de=p(lt,"DIV",{class:!0});var Ct=I(de);g(Je.$$.fragment,Ct),ze=i(Ct),o=p(Ct,"P",{"data-svelte-h":!0}),k(o)!=="svelte-4tl9a0"&&(o.innerHTML=w),ae=i(Ct),g(H.$$.fragment,Ct),re=i(Ct),g(c.$$.fragment,Ct),Ct.forEach(l),lt.forEach(l),$=i(d),g(S.$$.fragment,d),ie=i(d),z=p(d,"DIV",{class:!0});var dt=I(z);g(le.$$.fragment,dt),Ue=i(dt),ce=p(dt,"P",{"data-svelte-h":!0}),k(ce)!=="svelte-lkinlf"&&(ce.textContent=Ze),St=i(dt),Zt=p(dt,"P",{"data-svelte-h":!0}),k(Zt)!=="svelte-6pahdo"&&(Zt.innerHTML=Xt),Lt=i(dt),Ht=p(dt,"P",{"data-svelte-h":!0}),k(Ht)!=="svelte-hswkmf"&&(Ht.innerHTML=Ot),Qt=i(dt),yt=p(dt,"DIV",{class:!0});var Et=I(yt);g(Gt.$$.fragment,Et),Yt=i(Et),Bt=p(Et,"P",{"data-svelte-h":!0}),k(Bt)!=="svelte-usfqpw"&&(Bt.innerHTML=Kt),At=i(Et),g(Vt.$$.fragment,Et),Dt=i(Et),g(Rt.$$.fragment,Et),Et.forEach(l),dt.forEach(l),this.h()},h(){N(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(d,F){_(e,d,F),f(d,u,F),f(d,t,F),_(s,t,null),a(t,y),a(t,n),a(t,ct),a(t,K),a(t,mt),a(t,ee),a(t,pt),a(t,Z),a(t,ut),a(t,te),a(t,ft),a(t,J),_(Xe,J,null),a(J,we),a(J,me),a(J,et),_(E,J,null),a(J,Pe),_($e,J,null),f(d,pe,F),_(tt,d,F),f(d,nt,F),f(d,x,F),_(ot,x,null),a(x,ht),a(x,ne),a(x,We),a(x,X),a(x,Ne),a(x,Me),a(x,xt),a(x,q),_(ue,q,null),a(q,ve),a(q,V),a(q,gt),_(Y,q,null),a(q,kt),_(U,q,null),f(d,he,F),_(Qe,d,F),f(d,qe,F),f(d,W,F),_(Ve,W,null),a(W,ge),a(W,Fe),a(W,Ce),a(W,_t),a(W,R),a(W,_e),a(W,Te),a(W,oe),_(ye,oe,null),a(oe,Re),a(oe,Ye),a(oe,Ge),_(se,oe,null),a(oe,Ee),_(Q,oe,null),a(oe,bt),_(j,oe,null),f(d,Se,F),_(Le,d,F),f(d,D,F),f(d,G,F),_(He,G,null),a(G,je),a(G,Mt),a(G,xe),a(G,Tt),a(G,L),a(G,O),a(G,be),a(G,de),_(Je,de,null),a(de,ze),a(de,o),a(de,ae),_(H,de,null),a(de,re),_(c,de,null),f(d,$,F),_(S,d,F),f(d,ie,F),f(d,z,F),_(le,z,null),a(z,Ue),a(z,ce),a(z,St),a(z,Zt),a(z,Lt),a(z,Ht),a(z,Qt),a(z,yt),_(Gt,yt,null),a(yt,Yt),a(yt,Bt),a(yt,At),_(Vt,yt,null),a(yt,Dt),_(Rt,yt,null),Pt=!0},p(d,F){const vt={};F&2&&(vt.$$scope={dirty:F,ctx:d}),E.$set(vt);const at={};F&2&&(at.$$scope={dirty:F,ctx:d}),$e.$set(at);const Ft={};F&2&&(Ft.$$scope={dirty:F,ctx:d}),Y.$set(Ft);const rt={};F&2&&(rt.$$scope={dirty:F,ctx:d}),U.$set(rt);const it={};F&2&&(it.$$scope={dirty:F,ctx:d}),se.$set(it);const lt={};F&2&&(lt.$$scope={dirty:F,ctx:d}),Q.$set(lt);const Ct={};F&2&&(Ct.$$scope={dirty:F,ctx:d}),j.$set(Ct);const dt={};F&2&&(dt.$$scope={dirty:F,ctx:d}),H.$set(dt);const Et={};F&2&&(Et.$$scope={dirty:F,ctx:d}),c.$set(Et);const en={};F&2&&(en.$$scope={dirty:F,ctx:d}),Vt.$set(en);const tn={};F&2&&(tn.$$scope={dirty:F,ctx:d}),Rt.$set(tn)},i(d){Pt||(b(e.$$.fragment,d),b(s.$$.fragment,d),b(Xe.$$.fragment,d),b(E.$$.fragment,d),b($e.$$.fragment,d),b(tt.$$.fragment,d),b(ot.$$.fragment,d),b(ue.$$.fragment,d),b(Y.$$.fragment,d),b(U.$$.fragment,d),b(Qe.$$.fragment,d),b(Ve.$$.fragment,d),b(ye.$$.fragment,d),b(se.$$.fragment,d),b(Q.$$.fragment,d),b(j.$$.fragment,d),b(Le.$$.fragment,d),b(He.$$.fragment,d),b(Je.$$.fragment,d),b(H.$$.fragment,d),b(c.$$.fragment,d),b(S.$$.fragment,d),b(le.$$.fragment,d),b(Gt.$$.fragment,d),b(Vt.$$.fragment,d),b(Rt.$$.fragment,d),Pt=!0)},o(d){M(e.$$.fragment,d),M(s.$$.fragment,d),M(Xe.$$.fragment,d),M(E.$$.fragment,d),M($e.$$.fragment,d),M(tt.$$.fragment,d),M(ot.$$.fragment,d),M(ue.$$.fragment,d),M(Y.$$.fragment,d),M(U.$$.fragment,d),M(Qe.$$.fragment,d),M(Ve.$$.fragment,d),M(ye.$$.fragment,d),M(se.$$.fragment,d),M(Q.$$.fragment,d),M(j.$$.fragment,d),M(Le.$$.fragment,d),M(He.$$.fragment,d),M(Je.$$.fragment,d),M(H.$$.fragment,d),M(c.$$.fragment,d),M(S.$$.fragment,d),M(le.$$.fragment,d),M(Gt.$$.fragment,d),M(Vt.$$.fragment,d),M(Rt.$$.fragment,d),Pt=!1},d(d){d&&(l(u),l(t),l(pe),l(nt),l(x),l(he),l(qe),l(W),l(Se),l(D),l(G),l($),l(ie),l(z)),T(e,d),T(s),T(Xe),T(E),T($e),T(tt,d),T(ot),T(ue),T(Y),T(U),T(Qe,d),T(Ve),T(ye),T(se),T(Q),T(j),T(Le,d),T(He),T(Je),T(H),T(c),T(S,d),T(le),T(Gt),T(Vt),T(Rt)}}}function wn(C){let e,u;return e=new nn({props:{$$slots:{default:[kn]},$$scope:{ctx:C}}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){_(e,t,s),u=!0},p(t,s){const y={};s&2&&(y.$$scope={dirty:s,ctx:t}),e.$set(y)},i(t){u||(b(e.$$.fragment,t),u=!0)},o(t){M(e.$$.fragment,t),u=!1},d(t){T(e,t)}}}function $n(C){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=u},l(t){e=p(t,"P",{"data-svelte-h":!0}),k(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){f(t,e,s)},p:A,d(t){t&&l(e)}}}function vn(C){let e,u="Example:",t,s,y;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkVzbU1vZGVsJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkVzbU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFEsmModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEsmModel.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function Fn(C){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=u},l(t){e=p(t,"P",{"data-svelte-h":!0}),k(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){f(t,e,s)},p:A,d(t){t&&l(e)}}}function Cn(C){let e,u="Example:",t,s,y;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkVzbUZvck1hc2tlZExNJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkVzbUZvck1hc2tlZExNLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwJTNDbWFzayUzRS4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEElMjMlMjByZXRyaWV2ZSUyMGluZGV4JTIwb2YlMjAlM0NtYXNrJTNFJTBBbWFza190b2tlbl9pbmRleCUyMCUzRCUyMHRmLndoZXJlKChpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQpJTVCMCU1RCklMEFzZWxlY3RlZF9sb2dpdHMlMjAlM0QlMjB0Zi5nYXRoZXJfbmQobG9naXRzJTVCMCU1RCUyQyUyMGluZGljZXMlM0RtYXNrX3Rva2VuX2luZGV4KSUwQSUwQXByZWRpY3RlZF90b2tlbl9pZCUyMCUzRCUyMHRmLm1hdGguYXJnbWF4KHNlbGVjdGVkX2xvZ2l0cyUyQyUyMGF4aXMlM0QtMSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFEsmForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEsmForMaskedLM.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function En(C){let e,u;return e=new De({props:{code:"bGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjMlMjBtYXNrJTIwbGFiZWxzJTIwb2YlMjBub24tJTNDbWFzayUzRSUyMHRva2VucyUwQWxhYmVscyUyMCUzRCUyMHRmLndoZXJlKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCUyQyUyMGxhYmVscyUyQyUyMC0xMDApJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)`,wrap:!1}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){_(e,t,s),u=!0},p:A,i(t){u||(b(e.$$.fragment,t),u=!0)},o(t){M(e.$$.fragment,t),u=!1},d(t){T(e,t)}}}function jn(C){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=u},l(t){e=p(t,"P",{"data-svelte-h":!0}),k(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){f(t,e,s)},p:A,d(t){t&&l(e)}}}function xn(C){let e,u="Example:",t,s,y;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkVzbUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZXNtMl90Nl84TV9VUjUwRCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGRXNtRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZlc20yX3Q2XzhNX1VSNTBEJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KGxvZ2l0cyUyQyUyMGF4aXMlM0QtMSklNUIwJTVEKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFEsmForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function Jn(C){let e,u;return e=new De({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZFc21Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmVzbTJfdDZfOE1fVVI1MEQlMjIlMkMlMjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyklMEElMEFsYWJlbHMlMjAlM0QlMjB0Zi5jb25zdGFudCgxKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`</span>\n<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)\n<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>, num_labels=num_labels)\n\n<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)\n<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss',wrap:!1}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){_(e,t,s),u=!0},p:A,i(t){u||(b(e.$$.fragment,t),u=!0)},o(t){M(e.$$.fragment,t),u=!1},d(t){T(e,t)}}}function zn(C){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=u},l(t){e=p(t,"P",{"data-svelte-h":!0}),k(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){f(t,e,s)},p:A,d(t){t&&l(e)}}}function Un(C){let e,u="Example:",t,s,y;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkVzbUZvclRva2VuQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZXNtMl90Nl84TV9VUjUwRCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGRXNtRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZlc20yX3Q2XzhNX1VSNTBEJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTBBKSUwQSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEFwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTIwJTNEJTIwdGYubWF0aC5hcmdtYXgobG9naXRzJTJDJTIwYXhpcyUzRC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0JTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQubnVtcHkoKS50b2xpc3QoKSU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFEsmForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEsmForTokenClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]`,wrap:!1}}),{c(){e=m("p"),e.textContent=u,t=r(),h(s.$$.fragment)},l(n){e=p(n,"P",{"data-svelte-h":!0}),k(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(n),g(s.$$.fragment,n)},m(n,v){f(n,e,v),f(n,t,v),_(s,n,v),y=!0},p:A,i(n){y||(b(s.$$.fragment,n),y=!0)},o(n){M(s.$$.fragment,n),y=!1},d(n){n&&(l(e),l(t)),T(s,n)}}}function Zn(C){let e,u;return e=new De({props:{code:"bGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)`,wrap:!1}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){_(e,t,s),u=!0},p:A,i(t){u||(b(e.$$.fragment,t),u=!0)},o(t){M(e.$$.fragment,t),u=!1},d(t){T(e,t)}}}function Wn(C){let e,u,t,s,y,n,v="The bare ESM Model transformer outputting raw hidden-states without any specific head on top.",ct,K,It=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,mt,ee,Nt=`This model is also a Keras <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">Model</a> subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`,pt,Z,Oe,ut,te,qt='The <a href="/docs/transformers/main/en/model_doc/esm#transformers.TFEsmModel">TFEsmModel</a> forward method, overrides the <code>__call__</code> special method.',ft,J,Xe,we,me,Ke,et,E,Pe,$e,pe,tt="ESM Model with a <code>language modeling</code> head on top.",nt,x,ot=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ht,ne,jt=`This model is also a Keras <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">Model</a> subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`,We,X,Ie,Ne,Me,st='The <a href="/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForMaskedLM">TFEsmForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',xt,q,ue,ve,V,fe,gt,Y,kt,U,he,Qe,qe,W=`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,Ve,ge,Fe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Jt,Ce,_t=`This model is also a Keras <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">Model</a> subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`,wt,R,_e,P,Te,oe='The <a href="/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForSequenceClassification">TFEsmForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',ye,Re,Ye,ke,Ge,se,Ee,Q,bt,j,Se,Le,D,G=`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,He,je,Mt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,zt,xe,Tt=`This model is also a Keras <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">Model</a> subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`,Ut,L,O,$t,be,de='The <a href="/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForTokenClassification">TFEsmForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Je,ze,o,w,ae,H,re;return e=new Be({props:{title:"TFEsmModel",local:"transformers.TFEsmModel",headingTag:"h2"}}),s=new B({props:{name:"class transformers.TFEsmModel",anchor:"transformers.TFEsmModel",parameters:[{name:"config",val:": EsmConfig"},{name:"add_pooling_layer",val:" = True"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1102"}}),Oe=new B({props:{name:"call",anchor:"transformers.TFEsmModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFEsmModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEsmModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEsmModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFEsmModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFEsmModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEsmModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEsmModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEsmModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEsmModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFEsmModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFEsmModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFEsmModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1112",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),J=new Wt({props:{$$slots:{default:[$n]},$$scope:{ctx:C}}}),we=new Ae({props:{anchor:"transformers.TFEsmModel.call.example",$$slots:{default:[vn]},$$scope:{ctx:C}}}),Ke=new Be({props:{title:"TFEsmForMaskedLM",local:"transformers.TFEsmForMaskedLM",headingTag:"h2"}}),Pe=new B({props:{name:"class transformers.TFEsmForMaskedLM",anchor:"transformers.TFEsmForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1184"}}),Ie=new B({props:{name:"call",anchor:"transformers.TFEsmForMaskedLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEsmForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEsmForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFEsmForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFEsmForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEsmForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEsmForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEsmForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEsmForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFEsmForMaskedLM.call.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1215",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),q=new Wt({props:{$$slots:{default:[Fn]},$$scope:{ctx:C}}}),ve=new Ae({props:{anchor:"transformers.TFEsmForMaskedLM.call.example",$$slots:{default:[Cn]},$$scope:{ctx:C}}}),fe=new Ae({props:{anchor:"transformers.TFEsmForMaskedLM.call.example-2",$$slots:{default:[En]},$$scope:{ctx:C}}}),Y=new Be({props:{title:"TFEsmForSequenceClassification",local:"transformers.TFEsmForSequenceClassification",headingTag:"h2"}}),he=new B({props:{name:"class transformers.TFEsmForSequenceClassification",anchor:"transformers.TFEsmForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1348"}}),_e=new B({props:{name:"call",anchor:"transformers.TFEsmForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEsmForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEsmForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFEsmForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFEsmForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEsmForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEsmForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEsmForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEsmForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1366",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Re=new Wt({props:{$$slots:{default:[jn]},$$scope:{ctx:C}}}),ke=new Ae({props:{anchor:"transformers.TFEsmForSequenceClassification.call.example",$$slots:{default:[xn]},$$scope:{ctx:C}}}),se=new Ae({props:{anchor:"transformers.TFEsmForSequenceClassification.call.example-2",$$slots:{default:[Jn]},$$scope:{ctx:C}}}),Q=new Be({props:{title:"TFEsmForTokenClassification",local:"transformers.TFEsmForTokenClassification",headingTag:"h2"}}),Se=new B({props:{name:"class transformers.TFEsmForTokenClassification",anchor:"transformers.TFEsmForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1433"}}),O=new B({props:{name:"call",anchor:"transformers.TFEsmForTokenClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEsmForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEsmForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFEsmForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFEsmForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEsmForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEsmForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEsmForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEsmForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1453",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ze=new Wt({props:{$$slots:{default:[zn]},$$scope:{ctx:C}}}),w=new Ae({props:{anchor:"transformers.TFEsmForTokenClassification.call.example",$$slots:{default:[Un]},$$scope:{ctx:C}}}),H=new Ae({props:{anchor:"transformers.TFEsmForTokenClassification.call.example-2",$$slots:{default:[Zn]},$$scope:{ctx:C}}}),{c(){h(e.$$.fragment),u=r(),t=m("div"),h(s.$$.fragment),y=r(),n=m("p"),n.textContent=v,ct=r(),K=m("p"),K.innerHTML=It,mt=r(),ee=m("p"),ee.innerHTML=Nt,pt=r(),Z=m("div"),h(Oe.$$.fragment),ut=r(),te=m("p"),te.innerHTML=qt,ft=r(),h(J.$$.fragment),Xe=r(),h(we.$$.fragment),me=r(),h(Ke.$$.fragment),et=r(),E=m("div"),h(Pe.$$.fragment),$e=r(),pe=m("p"),pe.innerHTML=tt,nt=r(),x=m("p"),x.innerHTML=ot,ht=r(),ne=m("p"),ne.innerHTML=jt,We=r(),X=m("div"),h(Ie.$$.fragment),Ne=r(),Me=m("p"),Me.innerHTML=st,xt=r(),h(q.$$.fragment),ue=r(),h(ve.$$.fragment),V=r(),h(fe.$$.fragment),gt=r(),h(Y.$$.fragment),kt=r(),U=m("div"),h(he.$$.fragment),Qe=r(),qe=m("p"),qe.textContent=W,Ve=r(),ge=m("p"),ge.innerHTML=Fe,Jt=r(),Ce=m("p"),Ce.innerHTML=_t,wt=r(),R=m("div"),h(_e.$$.fragment),P=r(),Te=m("p"),Te.innerHTML=oe,ye=r(),h(Re.$$.fragment),Ye=r(),h(ke.$$.fragment),Ge=r(),h(se.$$.fragment),Ee=r(),h(Q.$$.fragment),bt=r(),j=m("div"),h(Se.$$.fragment),Le=r(),D=m("p"),D.textContent=G,He=r(),je=m("p"),je.innerHTML=Mt,zt=r(),xe=m("p"),xe.innerHTML=Tt,Ut=r(),L=m("div"),h(O.$$.fragment),$t=r(),be=m("p"),be.innerHTML=de,Je=r(),h(ze.$$.fragment),o=r(),h(w.$$.fragment),ae=r(),h(H.$$.fragment),this.h()},l(c){g(e.$$.fragment,c),u=i(c),t=p(c,"DIV",{class:!0});var $=I(t);g(s.$$.fragment,$),y=i($),n=p($,"P",{"data-svelte-h":!0}),k(n)!=="svelte-1fkphcu"&&(n.textContent=v),ct=i($),K=p($,"P",{"data-svelte-h":!0}),k(K)!=="svelte-1qaxm70"&&(K.innerHTML=It),mt=i($),ee=p($,"P",{"data-svelte-h":!0}),k(ee)!=="svelte-n4bch8"&&(ee.innerHTML=Nt),pt=i($),Z=p($,"DIV",{class:!0});var S=I(Z);g(Oe.$$.fragment,S),ut=i(S),te=p(S,"P",{"data-svelte-h":!0}),k(te)!=="svelte-q7yt0s"&&(te.innerHTML=qt),ft=i(S),g(J.$$.fragment,S),Xe=i(S),g(we.$$.fragment,S),S.forEach(l),$.forEach(l),me=i(c),g(Ke.$$.fragment,c),et=i(c),E=p(c,"DIV",{class:!0});var ie=I(E);g(Pe.$$.fragment,ie),$e=i(ie),pe=p(ie,"P",{"data-svelte-h":!0}),k(pe)!=="svelte-pcfqs9"&&(pe.innerHTML=tt),nt=i(ie),x=p(ie,"P",{"data-svelte-h":!0}),k(x)!=="svelte-1qaxm70"&&(x.innerHTML=ot),ht=i(ie),ne=p(ie,"P",{"data-svelte-h":!0}),k(ne)!=="svelte-n4bch8"&&(ne.innerHTML=jt),We=i(ie),X=p(ie,"DIV",{class:!0});var z=I(X);g(Ie.$$.fragment,z),Ne=i(z),Me=p(z,"P",{"data-svelte-h":!0}),k(Me)!=="svelte-15zfszw"&&(Me.innerHTML=st),xt=i(z),g(q.$$.fragment,z),ue=i(z),g(ve.$$.fragment,z),V=i(z),g(fe.$$.fragment,z),z.forEach(l),ie.forEach(l),gt=i(c),g(Y.$$.fragment,c),kt=i(c),U=p(c,"DIV",{class:!0});var le=I(U);g(he.$$.fragment,le),Qe=i(le),qe=p(le,"P",{"data-svelte-h":!0}),k(qe)!=="svelte-1l7pgh5"&&(qe.textContent=W),Ve=i(le),ge=p(le,"P",{"data-svelte-h":!0}),k(ge)!=="svelte-1qaxm70"&&(ge.innerHTML=Fe),Jt=i(le),Ce=p(le,"P",{"data-svelte-h":!0}),k(Ce)!=="svelte-n4bch8"&&(Ce.innerHTML=_t),wt=i(le),R=p(le,"DIV",{class:!0});var Ue=I(R);g(_e.$$.fragment,Ue),P=i(Ue),Te=p(Ue,"P",{"data-svelte-h":!0}),k(Te)!=="svelte-19h85h2"&&(Te.innerHTML=oe),ye=i(Ue),g(Re.$$.fragment,Ue),Ye=i(Ue),g(ke.$$.fragment,Ue),Ge=i(Ue),g(se.$$.fragment,Ue),Ue.forEach(l),le.forEach(l),Ee=i(c),g(Q.$$.fragment,c),bt=i(c),j=p(c,"DIV",{class:!0});var ce=I(j);g(Se.$$.fragment,ce),Le=i(ce),D=p(ce,"P",{"data-svelte-h":!0}),k(D)!=="svelte-dped9o"&&(D.textContent=G),He=i(ce),je=p(ce,"P",{"data-svelte-h":!0}),k(je)!=="svelte-1qaxm70"&&(je.innerHTML=Mt),zt=i(ce),xe=p(ce,"P",{"data-svelte-h":!0}),k(xe)!=="svelte-n4bch8"&&(xe.innerHTML=Tt),Ut=i(ce),L=p(ce,"DIV",{class:!0});var Ze=I(L);g(O.$$.fragment,Ze),$t=i(Ze),be=p(Ze,"P",{"data-svelte-h":!0}),k(be)!=="svelte-6xn7rg"&&(be.innerHTML=de),Je=i(Ze),g(ze.$$.fragment,Ze),o=i(Ze),g(w.$$.fragment,Ze),ae=i(Ze),g(H.$$.fragment,Ze),Ze.forEach(l),ce.forEach(l),this.h()},h(){N(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(c,$){_(e,c,$),f(c,u,$),f(c,t,$),_(s,t,null),a(t,y),a(t,n),a(t,ct),a(t,K),a(t,mt),a(t,ee),a(t,pt),a(t,Z),_(Oe,Z,null),a(Z,ut),a(Z,te),a(Z,ft),_(J,Z,null),a(Z,Xe),_(we,Z,null),f(c,me,$),_(Ke,c,$),f(c,et,$),f(c,E,$),_(Pe,E,null),a(E,$e),a(E,pe),a(E,nt),a(E,x),a(E,ht),a(E,ne),a(E,We),a(E,X),_(Ie,X,null),a(X,Ne),a(X,Me),a(X,xt),_(q,X,null),a(X,ue),_(ve,X,null),a(X,V),_(fe,X,null),f(c,gt,$),_(Y,c,$),f(c,kt,$),f(c,U,$),_(he,U,null),a(U,Qe),a(U,qe),a(U,Ve),a(U,ge),a(U,Jt),a(U,Ce),a(U,wt),a(U,R),_(_e,R,null),a(R,P),a(R,Te),a(R,ye),_(Re,R,null),a(R,Ye),_(ke,R,null),a(R,Ge),_(se,R,null),f(c,Ee,$),_(Q,c,$),f(c,bt,$),f(c,j,$),_(Se,j,null),a(j,Le),a(j,D),a(j,He),a(j,je),a(j,zt),a(j,xe),a(j,Ut),a(j,L),_(O,L,null),a(L,$t),a(L,be),a(L,Je),_(ze,L,null),a(L,o),_(w,L,null),a(L,ae),_(H,L,null),re=!0},p(c,$){const S={};$&2&&(S.$$scope={dirty:$,ctx:c}),J.$set(S);const ie={};$&2&&(ie.$$scope={dirty:$,ctx:c}),we.$set(ie);const z={};$&2&&(z.$$scope={dirty:$,ctx:c}),q.$set(z);const le={};$&2&&(le.$$scope={dirty:$,ctx:c}),ve.$set(le);const Ue={};$&2&&(Ue.$$scope={dirty:$,ctx:c}),fe.$set(Ue);const ce={};$&2&&(ce.$$scope={dirty:$,ctx:c}),Re.$set(ce);const Ze={};$&2&&(Ze.$$scope={dirty:$,ctx:c}),ke.$set(Ze);const St={};$&2&&(St.$$scope={dirty:$,ctx:c}),se.$set(St);const Zt={};$&2&&(Zt.$$scope={dirty:$,ctx:c}),ze.$set(Zt);const Xt={};$&2&&(Xt.$$scope={dirty:$,ctx:c}),w.$set(Xt);const Lt={};$&2&&(Lt.$$scope={dirty:$,ctx:c}),H.$set(Lt)},i(c){re||(b(e.$$.fragment,c),b(s.$$.fragment,c),b(Oe.$$.fragment,c),b(J.$$.fragment,c),b(we.$$.fragment,c),b(Ke.$$.fragment,c),b(Pe.$$.fragment,c),b(Ie.$$.fragment,c),b(q.$$.fragment,c),b(ve.$$.fragment,c),b(fe.$$.fragment,c),b(Y.$$.fragment,c),b(he.$$.fragment,c),b(_e.$$.fragment,c),b(Re.$$.fragment,c),b(ke.$$.fragment,c),b(se.$$.fragment,c),b(Q.$$.fragment,c),b(Se.$$.fragment,c),b(O.$$.fragment,c),b(ze.$$.fragment,c),b(w.$$.fragment,c),b(H.$$.fragment,c),re=!0)},o(c){M(e.$$.fragment,c),M(s.$$.fragment,c),M(Oe.$$.fragment,c),M(J.$$.fragment,c),M(we.$$.fragment,c),M(Ke.$$.fragment,c),M(Pe.$$.fragment,c),M(Ie.$$.fragment,c),M(q.$$.fragment,c),M(ve.$$.fragment,c),M(fe.$$.fragment,c),M(Y.$$.fragment,c),M(he.$$.fragment,c),M(_e.$$.fragment,c),M(Re.$$.fragment,c),M(ke.$$.fragment,c),M(se.$$.fragment,c),M(Q.$$.fragment,c),M(Se.$$.fragment,c),M(O.$$.fragment,c),M(ze.$$.fragment,c),M(w.$$.fragment,c),M(H.$$.fragment,c),re=!1},d(c){c&&(l(u),l(t),l(me),l(et),l(E),l(gt),l(kt),l(U),l(Ee),l(bt),l(j)),T(e,c),T(s),T(Oe),T(J),T(we),T(Ke,c),T(Pe),T(Ie),T(q),T(ve),T(fe),T(Y,c),T(he),T(_e),T(Re),T(ke),T(se),T(Q,c),T(Se),T(O),T(ze),T(w),T(H)}}}function In(C){let e,u;return e=new nn({props:{$$slots:{default:[Wn]},$$scope:{ctx:C}}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){_(e,t,s),u=!0},p(t,s){const y={};s&2&&(y.$$scope={dirty:s,ctx:t}),e.$set(y)},i(t){u||(b(e.$$.fragment,t),u=!0)},o(t){M(e.$$.fragment,t),u=!1},d(t){T(e,t)}}}function Nn(C){let e,u,t,s,y,n,v,ct,K,It=`This page provides code and pre-trained weights for Transformer protein language models from Meta AI’s Fundamental
AI Research Team, providing the state-of-the-art ESMFold and ESM-2, and the previously released ESM-1b and ESM-1v.
Transformer protein language models were introduced in the paper <a href="https://www.pnas.org/content/118/15/e2016239118" rel="nofollow">Biological structure and function emerge from scaling
unsupervised learning to 250 million protein sequences</a> by
Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott,
C. Lawrence Zitnick, Jerry Ma, and Rob Fergus.
The first version of this paper was <a href="https://www.biorxiv.org/content/10.1101/622803v1?versioned=true" rel="nofollow">preprinted in 2019</a>.`,mt,ee,Nt=`ESM-2 outperforms all tested single-sequence protein language models across a range of structure prediction tasks,
and enables atomic resolution structure prediction.
It was released with the paper <a href="https://doi.org/10.1101/2022.07.20.500902" rel="nofollow">Language models of protein sequences at the scale of evolution enable accurate
structure prediction</a> by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie,
Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido and Alexander Rives.`,pt,Z,Oe=`Also introduced in this paper was ESMFold. It uses an ESM-2 stem with a head that can predict folded protein
structures with state-of-the-art accuracy. Unlike <a href="https://www.nature.com/articles/s41586-021-03819-2" rel="nofollow">AlphaFold2</a>,
it relies on the token embeddings from the large pre-trained protein language model stem and does not perform a multiple
sequence alignment (MSA) step at inference time, which means that ESMFold checkpoints are fully “standalone” -
they do not require a database of known protein sequences and structures with associated external query tools
to make predictions, and are much faster as a result.`,ut,te,qt=`The abstract from
“Biological structure and function emerge from scaling unsupervised learning to 250
million protein sequences” is`,ft,J,Xe=`<em>In the field of artificial intelligence, a combination of scale in data and model capacity enabled by unsupervised
learning has led to major advances in representation learning and statistical generation. In the life sciences, the
anticipated growth of sequencing promises unprecedented data on natural sequence diversity. Protein language modeling
at the scale of evolution is a logical step toward predictive and generative artificial intelligence for biology. To
this end, we use unsupervised learning to train a deep contextual language model on 86 billion amino acids across 250
million protein sequences spanning evolutionary diversity. The resulting model contains information about biological
properties in its representations. The representations are learned from sequence data alone. The learned representation
space has a multiscale organization reflecting structure from the level of biochemical properties of amino acids to
remote homology of proteins. Information about secondary and tertiary structure is encoded in the representations and
can be identified by linear projections. Representation learning produces features that generalize across a range of
applications, enabling state-of-the-art supervised prediction of mutational effect and secondary structure and
improving state-of-the-art features for long-range contact prediction.</em>`,we,me,Ke=`The abstract from
“Language models of protein sequences at the scale of evolution enable accurate structure prediction” is`,et,E,Pe=`<em>Large language models have recently been shown to develop emergent capabilities with scale, going beyond
simple pattern matching to perform higher level reasoning and generate lifelike images and text. While
language models trained on protein sequences have been studied at a smaller scale, little is known about
what they learn about biology as they are scaled up. In this work we train models up to 15 billion parameters,
the largest language models of proteins to be evaluated to date. We find that as models are scaled they learn
information enabling the prediction of the three-dimensional structure of a protein at the resolution of
individual atoms. We present ESMFold for high accuracy end-to-end atomic level structure prediction directly
from the individual sequence of a protein. ESMFold has similar accuracy to AlphaFold2 and RoseTTAFold for
sequences with low perplexity that are well understood by the language model. ESMFold inference is an
order of magnitude faster than AlphaFold2, enabling exploration of the structural space of metagenomic
proteins in practical timescales.</em>`,$e,pe,tt=`The original code can be found <a href="https://github.com/facebookresearch/esm" rel="nofollow">here</a> and was
was developed by the Fundamental AI Research team at Meta AI.
ESM-1b, ESM-1v and ESM-2 were contributed to huggingface by <a href="https://huggingface.co/jasonliu" rel="nofollow">jasonliu</a>
and <a href="https://huggingface.co/Rocketknight1" rel="nofollow">Matt</a>.`,nt,x,ot=`ESMFold was contributed to huggingface by <a href="https://huggingface.co/Rocketknight1" rel="nofollow">Matt</a> and
<a href="https://huggingface.co/sgugger" rel="nofollow">Sylvain</a>, with a big thank you to Nikita Smetanin, Roshan Rao and Tom Sercu for their
help throughout the process!`,ht,ne,jt,We,X='<li>ESM models are trained with a masked language modeling (MLM) objective.</li> <li>The HuggingFace port of ESMFold uses portions of the <a href="https://github.com/aqlaboratory/openfold" rel="nofollow">openfold</a> library. The <code>openfold</code> library is licensed under the Apache License 2.0.</li>',Ie,Ne,Me,st,xt='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li>',q,ue,ve,V,fe,gt,Y,kt=`This is the configuration class to store the configuration of a <code>ESMModel</code>. It is used to instantiate a ESM model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ESM
<a href="https://huggingface.co/facebook/esm-1b" rel="nofollow">facebook/esm-1b</a> architecture.`,U,he,Qe=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,qe,W,Ve,ge,Fe,Jt,Ce,_t='Serializes this instance to a Python dictionary. Override the default <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict">to_dict()</a>.',wt,R,_e,P,Te,oe,ye,Re="Constructs an ESM tokenizer.",Ye,ke,Ge,se,Ee,Q,bt,j,Se=`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> or <code>encode_plus</code> methods.`,Le,D,G,He,je,Mt=`Create the token type IDs corresponding to the sequences passed. <a href="../glossary#token-type-ids">What are token type
IDs?</a>`,zt,xe,Tt="Should be overridden in a subclass if the model has a special way of building those.",Ut,L,O,$t,be,de,Je,ze;return y=new Be({props:{title:"ESM",local:"esm",headingTag:"h1"}}),v=new Be({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ne=new Be({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Ne=new Be({props:{title:"Resources",local:"resources",headingTag:"h2"}}),ue=new Be({props:{title:"EsmConfig",local:"transformers.EsmConfig",headingTag:"h2"}}),fe=new B({props:{name:"class transformers.EsmConfig",anchor:"transformers.EsmConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"mask_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1026"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"emb_layer_norm_before",val:" = None"},{name:"token_dropout",val:" = False"},{name:"is_folding_model",val:" = False"},{name:"esmfold_config",val:" = None"},{name:"vocab_list",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EsmConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Vocabulary size of the ESM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>ESMModel</code>.`,name:"vocab_size"},{anchor:"transformers.EsmConfig.mask_token_id",description:`<strong>mask_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The index of the mask token in the vocabulary. This must be included in the config because of the
&#x201C;mask-dropout&#x201D; scaling trick, which will scale the inputs depending on the number of masked tokens.`,name:"mask_token_id"},{anchor:"transformers.EsmConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The index of the padding token in the vocabulary. This must be included in the config because certain parts
of the ESM code use this instead of the attention mask.`,name:"pad_token_id"},{anchor:"transformers.EsmConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.EsmConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.EsmConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.EsmConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.EsmConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.EsmConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.EsmConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1026) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.EsmConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.EsmConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.EsmConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;, &quot;rotary&quot;</code>.
For positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.EsmConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as a decoder or not. If <code>False</code>, the model is used as an encoder.`,name:"is_decoder"},{anchor:"transformers.EsmConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.EsmConfig.emb_layer_norm_before",description:`<strong>emb_layer_norm_before</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to apply layer normalization after embeddings but before the main stem of the network.`,name:"emb_layer_norm_before"},{anchor:"transformers.EsmConfig.token_dropout",description:`<strong>token_dropout</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
When this is enabled, masked tokens are treated as if they had been dropped out by input dropout.`,name:"token_dropout"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/configuration_esm.py#L33"}}),W=new Ae({props:{anchor:"transformers.EsmConfig.example",$$slots:{default:[cn]},$$scope:{ctx:C}}}),Fe=new B({props:{name:"to_dict",anchor:"transformers.EsmConfig.to_dict",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/configuration_esm.py#L161",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>Dict[str, any]</code></p>
`}}),R=new Be({props:{title:"EsmTokenizer",local:"transformers.EsmTokenizer",headingTag:"h2"}}),Te=new B({props:{name:"class transformers.EsmTokenizer",anchor:"transformers.EsmTokenizer",parameters:[{name:"vocab_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"cls_token",val:" = '<cls>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"eos_token",val:" = '<eos>'"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L46"}}),Ge=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.EsmTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L104"}}),Q=new B({props:{name:"get_special_tokens_mask",anchor:"transformers.EsmTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L118",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]</p>
`}}),G=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3328",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token type ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),O=new B({props:{name:"save_vocabulary",anchor:"transformers.EsmTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:""},{name:"filename_prefix",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L149"}}),be=new dn({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[In],pytorch:[wn]},$$scope:{ctx:C}}}),{c(){e=m("meta"),u=r(),t=m("p"),s=r(),h(y.$$.fragment),n=r(),h(v.$$.fragment),ct=r(),K=m("p"),K.innerHTML=It,mt=r(),ee=m("p"),ee.innerHTML=Nt,pt=r(),Z=m("p"),Z.innerHTML=Oe,ut=r(),te=m("p"),te.textContent=qt,ft=r(),J=m("p"),J.innerHTML=Xe,we=r(),me=m("p"),me.textContent=Ke,et=r(),E=m("p"),E.innerHTML=Pe,$e=r(),pe=m("p"),pe.innerHTML=tt,nt=r(),x=m("p"),x.innerHTML=ot,ht=r(),h(ne.$$.fragment),jt=r(),We=m("ul"),We.innerHTML=X,Ie=r(),h(Ne.$$.fragment),Me=r(),st=m("ul"),st.innerHTML=xt,q=r(),h(ue.$$.fragment),ve=r(),V=m("div"),h(fe.$$.fragment),gt=r(),Y=m("p"),Y.innerHTML=kt,U=r(),he=m("p"),he.innerHTML=Qe,qe=r(),h(W.$$.fragment),Ve=r(),ge=m("div"),h(Fe.$$.fragment),Jt=r(),Ce=m("p"),Ce.innerHTML=_t,wt=r(),h(R.$$.fragment),_e=r(),P=m("div"),h(Te.$$.fragment),oe=r(),ye=m("p"),ye.textContent=Re,Ye=r(),ke=m("div"),h(Ge.$$.fragment),se=r(),Ee=m("div"),h(Q.$$.fragment),bt=r(),j=m("p"),j.innerHTML=Se,Le=r(),D=m("div"),h(G.$$.fragment),He=r(),je=m("p"),je.innerHTML=Mt,zt=r(),xe=m("p"),xe.textContent=Tt,Ut=r(),L=m("div"),h(O.$$.fragment),$t=r(),h(be.$$.fragment),de=r(),Je=m("p"),this.h()},l(o){const w=ln("svelte-u9bgzb",document.head);e=p(w,"META",{name:!0,content:!0}),w.forEach(l),u=i(o),t=p(o,"P",{}),I(t).forEach(l),s=i(o),g(y.$$.fragment,o),n=i(o),g(v.$$.fragment,o),ct=i(o),K=p(o,"P",{"data-svelte-h":!0}),k(K)!=="svelte-1a7iz27"&&(K.innerHTML=It),mt=i(o),ee=p(o,"P",{"data-svelte-h":!0}),k(ee)!=="svelte-xibyq9"&&(ee.innerHTML=Nt),pt=i(o),Z=p(o,"P",{"data-svelte-h":!0}),k(Z)!=="svelte-1ab9wr9"&&(Z.innerHTML=Oe),ut=i(o),te=p(o,"P",{"data-svelte-h":!0}),k(te)!=="svelte-ck6x5b"&&(te.textContent=qt),ft=i(o),J=p(o,"P",{"data-svelte-h":!0}),k(J)!=="svelte-5yzf50"&&(J.innerHTML=Xe),we=i(o),me=p(o,"P",{"data-svelte-h":!0}),k(me)!=="svelte-1vj6owx"&&(me.textContent=Ke),et=i(o),E=p(o,"P",{"data-svelte-h":!0}),k(E)!=="svelte-rbs8ft"&&(E.innerHTML=Pe),$e=i(o),pe=p(o,"P",{"data-svelte-h":!0}),k(pe)!=="svelte-1w2rws6"&&(pe.innerHTML=tt),nt=i(o),x=p(o,"P",{"data-svelte-h":!0}),k(x)!=="svelte-17utf8f"&&(x.innerHTML=ot),ht=i(o),g(ne.$$.fragment,o),jt=i(o),We=p(o,"UL",{"data-svelte-h":!0}),k(We)!=="svelte-1ap38ix"&&(We.innerHTML=X),Ie=i(o),g(Ne.$$.fragment,o),Me=i(o),st=p(o,"UL",{"data-svelte-h":!0}),k(st)!=="svelte-18pttsb"&&(st.innerHTML=xt),q=i(o),g(ue.$$.fragment,o),ve=i(o),V=p(o,"DIV",{class:!0});var ae=I(V);g(fe.$$.fragment,ae),gt=i(ae),Y=p(ae,"P",{"data-svelte-h":!0}),k(Y)!=="svelte-1n3e10h"&&(Y.innerHTML=kt),U=i(ae),he=p(ae,"P",{"data-svelte-h":!0}),k(he)!=="svelte-o55m63"&&(he.innerHTML=Qe),qe=i(ae),g(W.$$.fragment,ae),Ve=i(ae),ge=p(ae,"DIV",{class:!0});var H=I(ge);g(Fe.$$.fragment,H),Jt=i(H),Ce=p(H,"P",{"data-svelte-h":!0}),k(Ce)!=="svelte-1amdb4q"&&(Ce.innerHTML=_t),H.forEach(l),ae.forEach(l),wt=i(o),g(R.$$.fragment,o),_e=i(o),P=p(o,"DIV",{class:!0});var re=I(P);g(Te.$$.fragment,re),oe=i(re),ye=p(re,"P",{"data-svelte-h":!0}),k(ye)!=="svelte-nlc0vd"&&(ye.textContent=Re),Ye=i(re),ke=p(re,"DIV",{class:!0});var c=I(ke);g(Ge.$$.fragment,c),c.forEach(l),se=i(re),Ee=p(re,"DIV",{class:!0});var $=I(Ee);g(Q.$$.fragment,$),bt=i($),j=p($,"P",{"data-svelte-h":!0}),k(j)!=="svelte-1wmjg8a"&&(j.innerHTML=Se),$.forEach(l),Le=i(re),D=p(re,"DIV",{class:!0});var S=I(D);g(G.$$.fragment,S),He=i(S),je=p(S,"P",{"data-svelte-h":!0}),k(je)!=="svelte-zj1vf1"&&(je.innerHTML=Mt),zt=i(S),xe=p(S,"P",{"data-svelte-h":!0}),k(xe)!=="svelte-9vptpw"&&(xe.textContent=Tt),S.forEach(l),Ut=i(re),L=p(re,"DIV",{class:!0});var ie=I(L);g(O.$$.fragment,ie),ie.forEach(l),re.forEach(l),$t=i(o),g(be.$$.fragment,o),de=i(o),Je=p(o,"P",{}),I(Je).forEach(l),this.h()},h(){N(e,"name","hf:doc:metadata"),N(e,"content",qn),N(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,w){a(document.head,e),f(o,u,w),f(o,t,w),f(o,s,w),_(y,o,w),f(o,n,w),_(v,o,w),f(o,ct,w),f(o,K,w),f(o,mt,w),f(o,ee,w),f(o,pt,w),f(o,Z,w),f(o,ut,w),f(o,te,w),f(o,ft,w),f(o,J,w),f(o,we,w),f(o,me,w),f(o,et,w),f(o,E,w),f(o,$e,w),f(o,pe,w),f(o,nt,w),f(o,x,w),f(o,ht,w),_(ne,o,w),f(o,jt,w),f(o,We,w),f(o,Ie,w),_(Ne,o,w),f(o,Me,w),f(o,st,w),f(o,q,w),_(ue,o,w),f(o,ve,w),f(o,V,w),_(fe,V,null),a(V,gt),a(V,Y),a(V,U),a(V,he),a(V,qe),_(W,V,null),a(V,Ve),a(V,ge),_(Fe,ge,null),a(ge,Jt),a(ge,Ce),f(o,wt,w),_(R,o,w),f(o,_e,w),f(o,P,w),_(Te,P,null),a(P,oe),a(P,ye),a(P,Ye),a(P,ke),_(Ge,ke,null),a(P,se),a(P,Ee),_(Q,Ee,null),a(Ee,bt),a(Ee,j),a(P,Le),a(P,D),_(G,D,null),a(D,He),a(D,je),a(D,zt),a(D,xe),a(P,Ut),a(P,L),_(O,L,null),f(o,$t,w),_(be,o,w),f(o,de,w),f(o,Je,w),ze=!0},p(o,[w]){const ae={};w&2&&(ae.$$scope={dirty:w,ctx:o}),W.$set(ae);const H={};w&2&&(H.$$scope={dirty:w,ctx:o}),be.$set(H)},i(o){ze||(b(y.$$.fragment,o),b(v.$$.fragment,o),b(ne.$$.fragment,o),b(Ne.$$.fragment,o),b(ue.$$.fragment,o),b(fe.$$.fragment,o),b(W.$$.fragment,o),b(Fe.$$.fragment,o),b(R.$$.fragment,o),b(Te.$$.fragment,o),b(Ge.$$.fragment,o),b(Q.$$.fragment,o),b(G.$$.fragment,o),b(O.$$.fragment,o),b(be.$$.fragment,o),ze=!0)},o(o){M(y.$$.fragment,o),M(v.$$.fragment,o),M(ne.$$.fragment,o),M(Ne.$$.fragment,o),M(ue.$$.fragment,o),M(fe.$$.fragment,o),M(W.$$.fragment,o),M(Fe.$$.fragment,o),M(R.$$.fragment,o),M(Te.$$.fragment,o),M(Ge.$$.fragment,o),M(Q.$$.fragment,o),M(G.$$.fragment,o),M(O.$$.fragment,o),M(be.$$.fragment,o),ze=!1},d(o){o&&(l(u),l(t),l(s),l(n),l(ct),l(K),l(mt),l(ee),l(pt),l(Z),l(ut),l(te),l(ft),l(J),l(we),l(me),l(et),l(E),l($e),l(pe),l(nt),l(x),l(ht),l(jt),l(We),l(Ie),l(Me),l(st),l(q),l(ve),l(V),l(wt),l(_e),l(P),l($t),l(de),l(Je)),l(e),T(y,o),T(v,o),T(ne,o),T(Ne,o),T(ue,o),T(fe),T(W),T(Fe),T(R,o),T(Te),T(Ge),T(Q),T(G),T(O),T(be,o)}}}const qn='{"title":"ESM","local":"esm","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"EsmConfig","local":"transformers.EsmConfig","sections":[],"depth":2},{"title":"EsmTokenizer","local":"transformers.EsmTokenizer","sections":[],"depth":2},{"title":"EsmModel","local":"transformers.EsmModel","sections":[],"depth":2},{"title":"EsmForMaskedLM","local":"transformers.EsmForMaskedLM","sections":[],"depth":2},{"title":"EsmForSequenceClassification","local":"transformers.EsmForSequenceClassification","sections":[],"depth":2},{"title":"EsmForTokenClassification","local":"transformers.EsmForTokenClassification","sections":[],"depth":2},{"title":"EsmForProteinFolding","local":"transformers.EsmForProteinFolding","sections":[],"depth":2},{"title":"TFEsmModel","local":"transformers.TFEsmModel","sections":[],"depth":2},{"title":"TFEsmForMaskedLM","local":"transformers.TFEsmForMaskedLM","sections":[],"depth":2},{"title":"TFEsmForSequenceClassification","local":"transformers.TFEsmForSequenceClassification","sections":[],"depth":2},{"title":"TFEsmForTokenClassification","local":"transformers.TFEsmForTokenClassification","sections":[],"depth":2}],"depth":1}';function Vn(C){return sn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qn extends an{constructor(e){super(),rn(this,e,Vn,Nn,on,{})}}export{Qn as component};
