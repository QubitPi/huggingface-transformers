import{s as Ss,o as Es,n as B}from"../chunks/scheduler.9bc65507.js";import{S as Ys,i as Ps,g as p,s,r as u,A as As,h as m,f as r,c as a,j,u as f,x as h,k as v,y as i,a as c,v as g,d as _,t as b,w as M}from"../chunks/index.707bf1b6.js";import{T as Je}from"../chunks/Tip.c2ecdbf4.js";import{D as J}from"../chunks/Docstring.17db21ae.js";import{C as E}from"../chunks/CodeBlock.54a9f38d.js";import{E as ce}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as C}from"../chunks/Heading.342b1fa6.js";function Os(k){let n,y="Examples:",l,d,T;return d=new E({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFFEUUJlcnRNb2RlbCUyQyUyMFFEUUJlcnRDb25maWclMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwUURRQkVSVCUyMGdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwUURRQmVydENvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwZnJvbSUyMHRoZSUyMGdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMFFEUUJlcnRNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> QDQBertModel, QDQBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a QDQBERT google-bert/bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = QDQBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the google-bert/bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){n=p("p"),n.textContent=y,l=s(),u(d.$$.fragment)},l(t){n=m(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-kvfsh7"&&(n.textContent=y),l=a(t),f(d.$$.fragment,t)},m(t,w){c(t,n,w),c(t,l,w),g(d,t,w),T=!0},p:B,i(t){T||(_(d.$$.fragment,t),T=!0)},o(t){b(d.$$.fragment,t),T=!1},d(t){t&&(r(n),r(l)),M(d,t)}}}function Ks(k){let n,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=p("p"),n.innerHTML=y},l(l){n=m(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=y)},m(l,d){c(l,n,d)},p:B,d(l){l&&r(n)}}}function ea(k){let n,y="Example:",l,d,T;return d=new E({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBRRFFCZXJ0TW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBRRFFCZXJ0TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, QDQBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertModel.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){n=p("p"),n.textContent=y,l=s(),u(d.$$.fragment)},l(t){n=m(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-11lpom8"&&(n.textContent=y),l=a(t),f(d.$$.fragment,t)},m(t,w){c(t,n,w),c(t,l,w),g(d,t,w),T=!0},p:B,i(t){T||(_(d.$$.fragment,t),T=!0)},o(t){b(d.$$.fragment,t),T=!1},d(t){t&&(r(n),r(l)),M(d,t)}}}function ta(k){let n,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=p("p"),n.innerHTML=y},l(l){n=m(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=y)},m(l,d){c(l,n,d)},p:B,d(l){l&&r(n)}}}function na(k){let n,y="Example:",l,d,T;return d=new E({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBRRFFCZXJ0TE1IZWFkTW9kZWwlMkMlMjBRRFFCZXJ0Q29uZmlnJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS1jYXNlZCUyMiklMEFjb25maWclMjAlM0QlMjBRRFFCZXJ0Q29uZmlnLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS1jYXNlZCUyMiklMEFjb25maWcuaXNfZGVjb2RlciUyMCUzRCUyMFRydWUlMEFtb2RlbCUyMCUzRCUyMFFEUUJlcnRMTUhlYWRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtY2FzZWQlMjIlMkMlMjBjb25maWclM0Rjb25maWcpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, QDQBertLMHeadModel, QDQBertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = QDQBertConfig.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-cased&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`,wrap:!1}}),{c(){n=p("p"),n.textContent=y,l=s(),u(d.$$.fragment)},l(t){n=m(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-11lpom8"&&(n.textContent=y),l=a(t),f(d.$$.fragment,t)},m(t,w){c(t,n,w),c(t,l,w),g(d,t,w),T=!0},p:B,i(t){T||(_(d.$$.fragment,t),T=!0)},o(t){b(d.$$.fragment,t),T=!1},d(t){t&&(r(n),r(l)),M(d,t)}}}function oa(k){let n,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=p("p"),n.innerHTML=y},l(l){n=m(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=y)},m(l,d){c(l,n,d)},p:B,d(l){l&&r(n)}}}function sa(k){let n,y="Example:",l,d,T;return d=new E({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBRRFFCZXJ0Rm9yTWFza2VkTE0lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBRRFFCZXJ0Rm9yTWFza2VkTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwJTVCTUFTSyU1RC4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBJTIzJTIwcmV0cmlldmUlMjBpbmRleCUyMG9mJTIwJTVCTUFTSyU1RCUwQW1hc2tfdG9rZW5faW5kZXglMjAlM0QlMjAoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKSU1QjAlNUQubm9uemVybyhhc190dXBsZSUzRFRydWUpJTVCMCU1RCUwQSUwQXByZWRpY3RlZF90b2tlbl9pZCUyMCUzRCUyMGxvZ2l0cyU1QjAlMkMlMjBtYXNrX3Rva2VuX2luZGV4JTVELmFyZ21heChheGlzJTNELTEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjMlMjBtYXNrJTIwbGFiZWxzJTIwb2YlMjBub24tJTVCTUFTSyU1RCUyMHRva2VucyUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLndoZXJlKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCUyQyUyMGxhYmVscyUyQyUyMC0xMDApJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, QDQBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)`,wrap:!1}}),{c(){n=p("p"),n.textContent=y,l=s(),u(d.$$.fragment)},l(t){n=m(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-11lpom8"&&(n.textContent=y),l=a(t),f(d.$$.fragment,t)},m(t,w){c(t,n,w),c(t,l,w),g(d,t,w),T=!0},p:B,i(t){T||(_(d.$$.fragment,t),T=!0)},o(t){b(d.$$.fragment,t),T=!1},d(t){t&&(r(n),r(l)),M(d,t)}}}function aa(k){let n,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=p("p"),n.innerHTML=y},l(l){n=m(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=y)},m(l,d){c(l,n,d)},p:B,d(l){l&&r(n)}}}function ra(k){let n,y="Example of single-label classification:",l,d,T;return d=new E({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFFEUUJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFFEUUJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS11bmNhc2VkJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoKS5pdGVtKCklMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBRRFFCZXJ0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, QDQBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=p("p"),n.textContent=y,l=s(),u(d.$$.fragment)},l(t){n=m(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-ykxpe4"&&(n.textContent=y),l=a(t),f(d.$$.fragment,t)},m(t,w){c(t,n,w),c(t,l,w),g(d,t,w),T=!0},p:B,i(t){T||(_(d.$$.fragment,t),T=!0)},o(t){b(d.$$.fragment,t),T=!1},d(t){t&&(r(n),r(l)),M(d,t)}}}function ia(k){let n,y="Example of multi-label classification:",l,d,T;return d=new E({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFFEUUJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFFEUUJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS11bmNhc2VkJTIyJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkcyUyMCUzRCUyMHRvcmNoLmFyYW5nZSgwJTJDJTIwbG9naXRzLnNoYXBlJTVCLTElNUQpJTVCdG9yY2guc2lnbW9pZChsb2dpdHMpLnNxdWVlemUoZGltJTNEMCklMjAlM0UlMjAwLjUlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBRRFFCZXJ0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, QDQBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=p("p"),n.textContent=y,l=s(),u(d.$$.fragment)},l(t){n=m(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-1l8e32d"&&(n.textContent=y),l=a(t),f(d.$$.fragment,t)},m(t,w){c(t,n,w),c(t,l,w),g(d,t,w),T=!0},p:B,i(t){T||(_(d.$$.fragment,t),T=!0)},o(t){b(d.$$.fragment,t),T=!1},d(t){t&&(r(n),r(l)),M(d,t)}}}function la(k){let n,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=p("p"),n.innerHTML=y},l(l){n=m(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=y)},m(l,d){c(l,n,d)},p:B,d(l){l&&r(n)}}}function da(k){let n,y="Example:",l,d,T;return d=new E({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBRRFFCZXJ0Rm9yTmV4dFNlbnRlbmNlUHJlZGljdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFFEUUJlcnRGb3JOZXh0U2VudGVuY2VQcmVkaWN0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS11bmNhc2VkJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMkluJTIwSXRhbHklMkMlMjBwaXp6YSUyMHNlcnZlZCUyMGluJTIwZm9ybWFsJTIwc2V0dGluZ3MlMkMlMjBzdWNoJTIwYXMlMjBhdCUyMGElMjByZXN0YXVyYW50JTJDJTIwaXMlMjBwcmVzZW50ZWQlMjB1bnNsaWNlZC4lMjIlMEFuZXh0X3NlbnRlbmNlJTIwJTNEJTIwJTIyVGhlJTIwc2t5JTIwaXMlMjBibHVlJTIwZHVlJTIwdG8lMjB0aGUlMjBzaG9ydGVyJTIwd2F2ZWxlbmd0aCUyMG9mJTIwYmx1ZSUyMGxpZ2h0LiUyMiUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKHByb21wdCUyQyUyMG5leHRfc2VudGVuY2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmVuY29kaW5nJTJDJTIwbGFiZWxzJTNEdG9yY2guTG9uZ1RlbnNvciglNUIxJTVEKSklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyUwQWFzc2VydCUyMGxvZ2l0cyU1QjAlMkMlMjAwJTVEJTIwJTNDJTIwbG9naXRzJTVCMCUyQyUyMDElNUQlMjAlMjAlMjMlMjBuZXh0JTIwc2VudGVuY2UlMjB3YXMlMjByYW5kb20=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, QDQBertForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`,wrap:!1}}),{c(){n=p("p"),n.textContent=y,l=s(),u(d.$$.fragment)},l(t){n=m(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-11lpom8"&&(n.textContent=y),l=a(t),f(d.$$.fragment,t)},m(t,w){c(t,n,w),c(t,l,w),g(d,t,w),T=!0},p:B,i(t){T||(_(d.$$.fragment,t),T=!0)},o(t){b(d.$$.fragment,t),T=!1},d(t){t&&(r(n),r(l)),M(d,t)}}}function ca(k){let n,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=p("p"),n.innerHTML=y},l(l){n=m(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=y)},m(l,d){c(l,n,d)},p:B,d(l){l&&r(n)}}}function pa(k){let n,y="Example:",l,d,T;return d=new E({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBRRFFCZXJ0Rm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBRRFFCZXJ0Rm9yTXVsdGlwbGVDaG9pY2UuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoMCkudW5zcXVlZXplKDApJTIwJTIwJTIzJTIwY2hvaWNlMCUyMGlzJTIwY29ycmVjdCUyMChhY2NvcmRpbmclMjB0byUyMFdpa2lwZWRpYSUyMCUzQikpJTJDJTIwYmF0Y2glMjBzaXplJTIwMSUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHBhZGRpbmclM0RUcnVlKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKiU3QmslM0ElMjB2LnVuc3F1ZWV6ZSgwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, QDQBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){n=p("p"),n.textContent=y,l=s(),u(d.$$.fragment)},l(t){n=m(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-11lpom8"&&(n.textContent=y),l=a(t),f(d.$$.fragment,t)},m(t,w){c(t,n,w),c(t,l,w),g(d,t,w),T=!0},p:B,i(t){T||(_(d.$$.fragment,t),T=!0)},o(t){b(d.$$.fragment,t),T=!1},d(t){t&&(r(n),r(l)),M(d,t)}}}function ma(k){let n,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=p("p"),n.innerHTML=y},l(l){n=m(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=y)},m(l,d){c(l,n,d)},p:B,d(l){l&&r(n)}}}function ha(k){let n,y="Example:",l,d,T;return d=new E({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBRRFFCZXJ0Rm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFFEUUJlcnRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS11bmNhc2VkJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, QDQBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){n=p("p"),n.textContent=y,l=s(),u(d.$$.fragment)},l(t){n=m(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-11lpom8"&&(n.textContent=y),l=a(t),f(d.$$.fragment,t)},m(t,w){c(t,n,w),c(t,l,w),g(d,t,w),T=!0},p:B,i(t){T||(_(d.$$.fragment,t),T=!0)},o(t){b(d.$$.fragment,t),T=!1},d(t){t&&(r(n),r(l)),M(d,t)}}}function ua(k){let n,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=p("p"),n.innerHTML=y},l(l){n=m(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=y)},m(l,d){c(l,n,d)},p:B,d(l){l&&r(n)}}}function fa(k){let n,y="Example:",l,d,T;return d=new E({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBRRFFCZXJ0Rm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBRRFFCZXJ0Rm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWFuc3dlcl9zdGFydF9pbmRleCUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzLmFyZ21heCgpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMG91dHB1dHMuZW5kX2xvZ2l0cy5hcmdtYXgoKSUwQSUwQXByZWRpY3RfYW5zd2VyX3Rva2VucyUyMCUzRCUyMGlucHV0cy5pbnB1dF9pZHMlNUIwJTJDJTIwYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNBJTIwYW5zd2VyX2VuZF9pbmRleCUyMCUyQiUyMDElNUQlMEElMEElMjMlMjB0YXJnZXQlMjBpcyUyMCUyMm5pY2UlMjBwdXBwZXQlMjIlMEF0YXJnZXRfc3RhcnRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNSU1RCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBzdGFydF9wb3NpdGlvbnMlM0R0YXJnZXRfc3RhcnRfaW5kZXglMkMlMjBlbmRfcG9zaXRpb25zJTNEdGFyZ2V0X2VuZF9pbmRleCklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, QDQBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){n=p("p"),n.textContent=y,l=s(),u(d.$$.fragment)},l(t){n=m(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-11lpom8"&&(n.textContent=y),l=a(t),f(d.$$.fragment,t)},m(t,w){c(t,n,w),c(t,l,w),g(d,t,w),T=!0},p:B,i(t){T||(_(d.$$.fragment,t),T=!0)},o(t){b(d.$$.fragment,t),T=!1},d(t){t&&(r(n),r(l)),M(d,t)}}}function ga(k){let n,y,l,d,T,t,w,sn,Ce,Ko=`The QDQBERT model can be referenced in <a href="https://arxiv.org/abs/2004.09602" rel="nofollow">Integer Quantization for Deep Learning Inference: Principles and Empirical
Evaluation</a> by Hao Wu, Patrick Judd, Xiaojie Zhang, Mikhail Isaev and Paulius
Micikevicius.`,an,Ue,es="The abstract from the paper is the following:",rn,Fe,ts=`<em>Quantization techniques can reduce the size of Deep Neural Networks and improve inference latency and throughput by
taking advantage of high throughput integer instructions. In this paper we review the mathematical aspects of
quantization parameters and evaluate their choices on a wide range of neural network models for different application
domains, including vision, speech, and language. We focus on quantization techniques that are amenable to acceleration
by processors with high-throughput integer math pipelines. We also present a workflow for 8-bit quantization that is
able to maintain accuracy within 1% of the floating-point baseline on all networks studied, including models that are
more difficult to quantize, such as MobileNets and BERT-large.</em>`,ln,ze,ns='This model was contributed by <a href="https://huggingface.co/shangz" rel="nofollow">shangz</a>.',dn,xe,cn,qe,os=`<li>QDQBERT model adds fake quantization operations (pair of QuantizeLinear/DequantizeLinear ops) to (i) linear layer
inputs and weights, (ii) matmul inputs, (iii) residual add inputs, in BERT model.</li> <li>QDQBERT requires the dependency of <a href="https://github.com/NVIDIA/TensorRT/tree/master/tools/pytorch-quantization" rel="nofollow">Pytorch Quantization Toolkit</a>. To install <code>pip install pytorch-quantization --extra-index-url https://pypi.ngc.nvidia.com</code></li> <li>QDQBERT model can be loaded from any checkpoint of HuggingFace BERT model (for example <em>google-bert/bert-base-uncased</em>), and
perform Quantization Aware Training/Post Training Quantization.</li> <li>A complete example of using QDQBERT model to perform Quatization Aware Training and Post Training Quantization for
SQUAD task can be found at <a href="examples/research_projects/quantization-qdqbert/">transformers/examples/research_projects/quantization-qdqbert/</a>.</li>`,pn,Ze,mn,We,ss=`QDQBERT model adds fake quantization operations (pair of QuantizeLinear/DequantizeLinear ops) to BERT by
<code>TensorQuantizer</code> in <a href="https://github.com/NVIDIA/TensorRT/tree/master/tools/pytorch-quantization" rel="nofollow">Pytorch Quantization Toolkit</a>. <code>TensorQuantizer</code> is the module
for quantizing tensors, with <code>QuantDescriptor</code> defining how the tensor should be quantized. Refer to <a href="https://docs.nvidia.com/deeplearning/tensorrt/pytorch-quantization-toolkit/docs/userguide.html" rel="nofollow">Pytorch
Quantization Toolkit userguide</a> for more details.`,hn,Ie,as="Before creating QDQBERT model, one has to set the default <code>QuantDescriptor</code> defining default tensor quantizers.",un,De,rs="Example:",fn,Re,gn,Ne,_n,Xe,is=`Calibration is the terminology of passing data samples to the quantizer and deciding the best scaling factors for
tensors. After setting up the tensor quantizers, one can use the following example to calibrate the model:`,bn,Ge,Mn,Ve,yn,Le,ls=`The goal of exporting to ONNX is to deploy inference by <a href="https://developer.nvidia.com/tensorrt" rel="nofollow">TensorRT</a>. Fake
quantization will be broken into a pair of QuantizeLinear/DequantizeLinear ONNX ops. After setting static member of
TensorQuantizer to use Pytorch’s own fake quantization functions, fake quantized model can be exported to ONNX, follow
the instructions in <a href="https://pytorch.org/docs/stable/onnx.html" rel="nofollow">torch.onnx</a>. Example:`,Tn,He,wn,Se,kn,Ee,ds='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',Qn,Ye,jn,D,Pe,Vn,Tt,cs=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertModel">QDQBertModel</a>. It is used to instantiate an
QDQBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BERT
<a href="https://huggingface.co/google-bert/bert-base-uncased" rel="nofollow">google-bert/bert-base-uncased</a> architecture.`,Ln,wt,ps=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Hn,pe,vn,Ae,Bn,Q,Oe,Sn,kt,ms="The bare QDQBERT Model transformer outputting raw hidden-states without any specific head on top.",En,Qt,hs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Yn,jt,us=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Pn,vt,fs=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">Attention is
all you need</a> by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`,An,Bt,gs=`To behave as an decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set
to <code>True</code>. To be used in a Seq2Seq model, the model needs to initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,On,Y,Ke,Kn,$t,_s='The <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertModel">QDQBertModel</a> forward method, overrides the <code>__call__</code> special method.',eo,me,to,he,$n,et,Jn,U,tt,no,Jt,bs="QDQBERT Model with a <code>language modeling</code> head on top for CLM fine-tuning.",oo,Ct,Ms=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,so,Ut,ys=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ao,P,nt,ro,Ft,Ts='The <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertLMHeadModel">QDQBertLMHeadModel</a> forward method, overrides the <code>__call__</code> special method.',io,ue,lo,fe,Cn,ot,Un,F,st,co,zt,ws="QDQBERT Model with a <code>language modeling</code> head on top.",po,xt,ks=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,mo,qt,Qs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ho,A,at,uo,Zt,js='The <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForMaskedLM">QDQBertForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',fo,ge,go,_e,Fn,rt,zn,z,it,_o,Wt,vs=`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,bo,It,Bs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Mo,Dt,$s=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,yo,I,lt,To,Rt,Js='The <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForSequenceClassification">QDQBertForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',wo,be,ko,Me,Qo,ye,xn,dt,qn,x,ct,jo,Nt,Cs="Bert Model with a <code>next sentence prediction (classification)</code> head on top.",vo,Xt,Us=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Bo,Gt,Fs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,$o,O,pt,Jo,Vt,zs='The <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForNextSentencePrediction">QDQBertForNextSentencePrediction</a> forward method, overrides the <code>__call__</code> special method.',Co,Te,Uo,we,Zn,mt,Wn,q,ht,Fo,Lt,xs=`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,zo,Ht,qs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,xo,St,Zs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,qo,K,ut,Zo,Et,Ws='The <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForMultipleChoice">QDQBertForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Wo,ke,Io,Qe,In,ft,Dn,Z,gt,Do,Yt,Is=`QDQBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Ro,Pt,Ds=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,No,At,Rs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Xo,ee,_t,Go,Ot,Ns='The <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForTokenClassification">QDQBertForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Vo,je,Lo,ve,Rn,bt,Nn,W,Mt,Ho,Kt,Xs=`QDQBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,So,en,Gs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Eo,tn,Vs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Yo,te,yt,Po,nn,Ls='The <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForQuestionAnswering">QDQBertForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Ao,Be,Oo,$e,Xn,on,Gn;return T=new C({props:{title:"QDQBERT",local:"qdqbert",headingTag:"h1"}}),w=new C({props:{title:"Overview",local:"overview",headingTag:"h2"}}),xe=new C({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Ze=new C({props:{title:"Set default quantizers",local:"set-default-quantizers",headingTag:"h3"}}),Re=new E({props:{code:"aW1wb3J0JTIwcHl0b3JjaF9xdWFudGl6YXRpb24ubm4lMjBhcyUyMHF1YW50X25uJTBBZnJvbSUyMHB5dG9yY2hfcXVhbnRpemF0aW9uLnRlbnNvcl9xdWFudCUyMGltcG9ydCUyMFF1YW50RGVzY3JpcHRvciUwQSUwQSUyMyUyMFRoZSUyMGRlZmF1bHQlMjB0ZW5zb3IlMjBxdWFudGl6ZXIlMjBpcyUyMHNldCUyMHRvJTIwdXNlJTIwTWF4JTIwY2FsaWJyYXRpb24lMjBtZXRob2QlMEFpbnB1dF9kZXNjJTIwJTNEJTIwUXVhbnREZXNjcmlwdG9yKG51bV9iaXRzJTNEOCUyQyUyMGNhbGliX21ldGhvZCUzRCUyMm1heCUyMiklMEElMjMlMjBUaGUlMjBkZWZhdWx0JTIwdGVuc29yJTIwcXVhbnRpemVyJTIwaXMlMjBzZXQlMjB0byUyMGJlJTIwcGVyLWNoYW5uZWwlMjBxdWFudGl6YXRpb24lMjBmb3IlMjB3ZWlnaHRzJTBBd2VpZ2h0X2Rlc2MlMjAlM0QlMjBRdWFudERlc2NyaXB0b3IobnVtX2JpdHMlM0Q4JTJDJTIwYXhpcyUzRCgoMCUyQykpKSUwQXF1YW50X25uLlF1YW50TGluZWFyLnNldF9kZWZhdWx0X3F1YW50X2Rlc2NfaW5wdXQoaW5wdXRfZGVzYyklMEFxdWFudF9ubi5RdWFudExpbmVhci5zZXRfZGVmYXVsdF9xdWFudF9kZXNjX3dlaWdodCh3ZWlnaHRfZGVzYyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pytorch_quantization.nn <span class="hljs-keyword">as</span> quant_nn
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pytorch_quantization.tensor_quant <span class="hljs-keyword">import</span> QuantDescriptor

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The default tensor quantizer is set to use Max calibration method</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_desc = QuantDescriptor(num_bits=<span class="hljs-number">8</span>, calib_method=<span class="hljs-string">&quot;max&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The default tensor quantizer is set to be per-channel quantization for weights</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>weight_desc = QuantDescriptor(num_bits=<span class="hljs-number">8</span>, axis=((<span class="hljs-number">0</span>,)))
<span class="hljs-meta">&gt;&gt;&gt; </span>quant_nn.QuantLinear.set_default_quant_desc_input(input_desc)
<span class="hljs-meta">&gt;&gt;&gt; </span>quant_nn.QuantLinear.set_default_quant_desc_weight(weight_desc)`,wrap:!1}}),Ne=new C({props:{title:"Calibration",local:"calibration",headingTag:"h3"}}),Ge=new E({props:{code:"JTIzJTIwRmluZCUyMHRoZSUyMFRlbnNvclF1YW50aXplciUyMGFuZCUyMGVuYWJsZSUyMGNhbGlicmF0aW9uJTBBZm9yJTIwbmFtZSUyQyUyMG1vZHVsZSUyMGluJTIwbW9kZWwubmFtZWRfbW9kdWxlcygpJTNBJTBBJTIwJTIwJTIwJTIwaWYlMjBuYW1lLmVuZHN3aXRoKCUyMl9pbnB1dF9xdWFudGl6ZXIlMjIpJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwbW9kdWxlLmVuYWJsZV9jYWxpYigpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwbW9kdWxlLmRpc2FibGVfcXVhbnQoKSUyMCUyMCUyMyUyMFVzZSUyMGZ1bGwlMjBwcmVjaXNpb24lMjBkYXRhJTIwdG8lMjBjYWxpYnJhdGUlMEElMEElMjMlMjBGZWVkaW5nJTIwZGF0YSUyMHNhbXBsZXMlMEFtb2RlbCh4KSUwQSUyMyUyMC4uLiUwQSUwQSUyMyUyMEZpbmFsaXplJTIwY2FsaWJyYXRpb24lMEFmb3IlMjBuYW1lJTJDJTIwbW9kdWxlJTIwaW4lMjBtb2RlbC5uYW1lZF9tb2R1bGVzKCklM0ElMEElMjAlMjAlMjAlMjBpZiUyMG5hbWUuZW5kc3dpdGgoJTIyX2lucHV0X3F1YW50aXplciUyMiklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBtb2R1bGUubG9hZF9jYWxpYl9hbWF4KCklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBtb2R1bGUuZW5hYmxlX3F1YW50KCklMEElMEElMjMlMjBJZiUyMHJ1bm5pbmclMjBvbiUyMEdQVSUyQyUyMGl0JTIwbmVlZHMlMjB0byUyMGNhbGwlMjAuY3VkYSgpJTIwYWdhaW4lMjBiZWNhdXNlJTIwbmV3JTIwdGVuc29ycyUyMHdpbGwlMjBiZSUyMGNyZWF0ZWQlMjBieSUyMGNhbGlicmF0aW9uJTIwcHJvY2VzcyUwQW1vZGVsLmN1ZGEoKSUwQSUwQSUyMyUyMEtlZXAlMjBydW5uaW5nJTIwdGhlJTIwcXVhbnRpemVkJTIwbW9kZWwlMEElMjMlMjAuLi4=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Find the TensorQuantizer and enable calibration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> name, module <span class="hljs-keyword">in</span> model.named_modules():
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> name.endswith(<span class="hljs-string">&quot;_input_quantizer&quot;</span>):
<span class="hljs-meta">... </span>        module.enable_calib()
<span class="hljs-meta">... </span>        module.disable_quant()  <span class="hljs-comment"># Use full precision data to calibrate</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Feeding data samples</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(x)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ...</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Finalize calibration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> name, module <span class="hljs-keyword">in</span> model.named_modules():
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> name.endswith(<span class="hljs-string">&quot;_input_quantizer&quot;</span>):
<span class="hljs-meta">... </span>        module.load_calib_amax()
<span class="hljs-meta">... </span>        module.enable_quant()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># If running on GPU, it needs to call .cuda() again because new tensors will be created by calibration process</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.cuda()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Keep running the quantized model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ...</span>`,wrap:!1}}),Ve=new C({props:{title:"Export to ONNX",local:"export-to-onnx",headingTag:"h3"}}),He=new E({props:{code:"ZnJvbSUyMHB5dG9yY2hfcXVhbnRpemF0aW9uLm5uJTIwaW1wb3J0JTIwVGVuc29yUXVhbnRpemVyJTBBJTBBVGVuc29yUXVhbnRpemVyLnVzZV9mYl9mYWtlX3F1YW50JTIwJTNEJTIwVHJ1ZSUwQSUwQSUyMyUyMExvYWQlMjB0aGUlMjBjYWxpYnJhdGVkJTIwbW9kZWwlMEEuLi4lMEElMjMlMjBPTk5YJTIwZXhwb3J0JTBBdG9yY2gub25ueC5leHBvcnQoLi4uKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pytorch_quantization.nn <span class="hljs-keyword">import</span> TensorQuantizer

<span class="hljs-meta">&gt;&gt;&gt; </span>TensorQuantizer.use_fb_fake_quant = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Load the calibrated model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>...
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ONNX export</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>torch.onnx.export(...)`,wrap:!1}}),Se=new C({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Ye=new C({props:{title:"QDQBertConfig",local:"transformers.QDQBertConfig",headingTag:"h2"}}),Pe=new J({props:{name:"class transformers.QDQBertConfig",anchor:"transformers.QDQBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.QDQBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the QDQBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertModel">QDQBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.QDQBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.QDQBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.QDQBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.QDQBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.QDQBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.QDQBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.QDQBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.QDQBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.QDQBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertModel">QDQBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.QDQBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.QDQBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.QDQBertConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as a decoder or not. If <code>False</code>, the model is used as an encoder.`,name:"is_decoder"},{anchor:"transformers.QDQBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/configuration_qdqbert.py#L29"}}),pe=new ce({props:{anchor:"transformers.QDQBertConfig.example",$$slots:{default:[Os]},$$scope:{ctx:k}}}),Ae=new C({props:{title:"QDQBertModel",local:"transformers.QDQBertModel",headingTag:"h2"}}),Oe=new J({props:{name:"class transformers.QDQBertModel",anchor:"transformers.QDQBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.QDQBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L825"}}),Ke=new J({props:{name:"forward",anchor:"transformers.QDQBertModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.QDQBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.QDQBertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.QDQBertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.QDQBertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L869",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),me=new Je({props:{$$slots:{default:[Ks]},$$scope:{ctx:k}}}),he=new ce({props:{anchor:"transformers.QDQBertModel.forward.example",$$slots:{default:[ea]},$$scope:{ctx:k}}}),et=new C({props:{title:"QDQBertLMHeadModel",local:"transformers.QDQBertLMHeadModel",headingTag:"h2"}}),tt=new J({props:{name:"class transformers.QDQBertLMHeadModel",anchor:"transformers.QDQBertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1007"}}),nt=new J({props:{name:"forward",anchor:"transformers.QDQBertLMHeadModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.QDQBertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.QDQBertLMHeadModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.QDQBertLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.QDQBertLMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.QDQBertLMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1032",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),ue=new Je({props:{$$slots:{default:[ta]},$$scope:{ctx:k}}}),fe=new ce({props:{anchor:"transformers.QDQBertLMHeadModel.forward.example",$$slots:{default:[na]},$$scope:{ctx:k}}}),ot=new C({props:{title:"QDQBertForMaskedLM",local:"transformers.QDQBertForMaskedLM",headingTag:"h2"}}),st=new J({props:{name:"class transformers.QDQBertForMaskedLM",anchor:"transformers.QDQBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1173"}}),at=new J({props:{name:"forward",anchor:"transformers.QDQBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.QDQBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1199",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),ge=new Je({props:{$$slots:{default:[oa]},$$scope:{ctx:k}}}),_e=new ce({props:{anchor:"transformers.QDQBertForMaskedLM.forward.example",$$slots:{default:[sa]},$$scope:{ctx:k}}}),rt=new C({props:{title:"QDQBertForSequenceClassification",local:"transformers.QDQBertForSequenceClassification",headingTag:"h2"}}),it=new J({props:{name:"class transformers.QDQBertForSequenceClassification",anchor:"transformers.QDQBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1382"}}),lt=new J({props:{name:"forward",anchor:"transformers.QDQBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.QDQBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1401",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),be=new Je({props:{$$slots:{default:[aa]},$$scope:{ctx:k}}}),Me=new ce({props:{anchor:"transformers.QDQBertForSequenceClassification.forward.example",$$slots:{default:[ra]},$$scope:{ctx:k}}}),ye=new ce({props:{anchor:"transformers.QDQBertForSequenceClassification.forward.example-2",$$slots:{default:[ia]},$$scope:{ctx:k}}}),dt=new C({props:{title:"QDQBertForNextSentencePrediction",local:"transformers.QDQBertForNextSentencePrediction",headingTag:"h2"}}),ct=new J({props:{name:"class transformers.QDQBertForNextSentencePrediction",anchor:"transformers.QDQBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1281"}}),pt=new J({props:{name:"forward",anchor:"transformers.QDQBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1295",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),Te=new Je({props:{$$slots:{default:[la]},$$scope:{ctx:k}}}),we=new ce({props:{anchor:"transformers.QDQBertForNextSentencePrediction.forward.example",$$slots:{default:[da]},$$scope:{ctx:k}}}),mt=new C({props:{title:"QDQBertForMultipleChoice",local:"transformers.QDQBertForMultipleChoice",headingTag:"h2"}}),ht=new J({props:{name:"class transformers.QDQBertForMultipleChoice",anchor:"transformers.QDQBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1479"}}),ut=new J({props:{name:"forward",anchor:"transformers.QDQBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.QDQBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1497",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),ke=new Je({props:{$$slots:{default:[ca]},$$scope:{ctx:k}}}),Qe=new ce({props:{anchor:"transformers.QDQBertForMultipleChoice.forward.example",$$slots:{default:[pa]},$$scope:{ctx:k}}}),ft=new C({props:{title:"QDQBertForTokenClassification",local:"transformers.QDQBertForTokenClassification",headingTag:"h2"}}),gt=new J({props:{name:"class transformers.QDQBertForTokenClassification",anchor:"transformers.QDQBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1570"}}),_t=new J({props:{name:"forward",anchor:"transformers.QDQBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.QDQBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1589",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),je=new Je({props:{$$slots:{default:[ma]},$$scope:{ctx:k}}}),ve=new ce({props:{anchor:"transformers.QDQBertForTokenClassification.forward.example",$$slots:{default:[ha]},$$scope:{ctx:k}}}),bt=new C({props:{title:"QDQBertForQuestionAnswering",local:"transformers.QDQBertForQuestionAnswering",headingTag:"h2"}}),Mt=new J({props:{name:"class transformers.QDQBertForQuestionAnswering",anchor:"transformers.QDQBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1648"}}),yt=new J({props:{name:"forward",anchor:"transformers.QDQBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.QDQBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/qdqbert/modeling_qdqbert.py#L1666",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),Be=new Je({props:{$$slots:{default:[ua]},$$scope:{ctx:k}}}),$e=new ce({props:{anchor:"transformers.QDQBertForQuestionAnswering.forward.example",$$slots:{default:[fa]},$$scope:{ctx:k}}}),{c(){n=p("meta"),y=s(),l=p("p"),d=s(),u(T.$$.fragment),t=s(),u(w.$$.fragment),sn=s(),Ce=p("p"),Ce.innerHTML=Ko,an=s(),Ue=p("p"),Ue.textContent=es,rn=s(),Fe=p("p"),Fe.innerHTML=ts,ln=s(),ze=p("p"),ze.innerHTML=ns,dn=s(),u(xe.$$.fragment),cn=s(),qe=p("ul"),qe.innerHTML=os,pn=s(),u(Ze.$$.fragment),mn=s(),We=p("p"),We.innerHTML=ss,hn=s(),Ie=p("p"),Ie.innerHTML=as,un=s(),De=p("p"),De.textContent=rs,fn=s(),u(Re.$$.fragment),gn=s(),u(Ne.$$.fragment),_n=s(),Xe=p("p"),Xe.textContent=is,bn=s(),u(Ge.$$.fragment),Mn=s(),u(Ve.$$.fragment),yn=s(),Le=p("p"),Le.innerHTML=ls,Tn=s(),u(He.$$.fragment),wn=s(),u(Se.$$.fragment),kn=s(),Ee=p("ul"),Ee.innerHTML=ds,Qn=s(),u(Ye.$$.fragment),jn=s(),D=p("div"),u(Pe.$$.fragment),Vn=s(),Tt=p("p"),Tt.innerHTML=cs,Ln=s(),wt=p("p"),wt.innerHTML=ps,Hn=s(),u(pe.$$.fragment),vn=s(),u(Ae.$$.fragment),Bn=s(),Q=p("div"),u(Oe.$$.fragment),Sn=s(),kt=p("p"),kt.textContent=ms,En=s(),Qt=p("p"),Qt.innerHTML=hs,Yn=s(),jt=p("p"),jt.innerHTML=us,Pn=s(),vt=p("p"),vt.innerHTML=fs,An=s(),Bt=p("p"),Bt.innerHTML=gs,On=s(),Y=p("div"),u(Ke.$$.fragment),Kn=s(),$t=p("p"),$t.innerHTML=_s,eo=s(),u(me.$$.fragment),to=s(),u(he.$$.fragment),$n=s(),u(et.$$.fragment),Jn=s(),U=p("div"),u(tt.$$.fragment),no=s(),Jt=p("p"),Jt.innerHTML=bs,oo=s(),Ct=p("p"),Ct.innerHTML=Ms,so=s(),Ut=p("p"),Ut.innerHTML=ys,ao=s(),P=p("div"),u(nt.$$.fragment),ro=s(),Ft=p("p"),Ft.innerHTML=Ts,io=s(),u(ue.$$.fragment),lo=s(),u(fe.$$.fragment),Cn=s(),u(ot.$$.fragment),Un=s(),F=p("div"),u(st.$$.fragment),co=s(),zt=p("p"),zt.innerHTML=ws,po=s(),xt=p("p"),xt.innerHTML=ks,mo=s(),qt=p("p"),qt.innerHTML=Qs,ho=s(),A=p("div"),u(at.$$.fragment),uo=s(),Zt=p("p"),Zt.innerHTML=js,fo=s(),u(ge.$$.fragment),go=s(),u(_e.$$.fragment),Fn=s(),u(rt.$$.fragment),zn=s(),z=p("div"),u(it.$$.fragment),_o=s(),Wt=p("p"),Wt.textContent=vs,bo=s(),It=p("p"),It.innerHTML=Bs,Mo=s(),Dt=p("p"),Dt.innerHTML=$s,yo=s(),I=p("div"),u(lt.$$.fragment),To=s(),Rt=p("p"),Rt.innerHTML=Js,wo=s(),u(be.$$.fragment),ko=s(),u(Me.$$.fragment),Qo=s(),u(ye.$$.fragment),xn=s(),u(dt.$$.fragment),qn=s(),x=p("div"),u(ct.$$.fragment),jo=s(),Nt=p("p"),Nt.innerHTML=Cs,vo=s(),Xt=p("p"),Xt.innerHTML=Us,Bo=s(),Gt=p("p"),Gt.innerHTML=Fs,$o=s(),O=p("div"),u(pt.$$.fragment),Jo=s(),Vt=p("p"),Vt.innerHTML=zs,Co=s(),u(Te.$$.fragment),Uo=s(),u(we.$$.fragment),Zn=s(),u(mt.$$.fragment),Wn=s(),q=p("div"),u(ht.$$.fragment),Fo=s(),Lt=p("p"),Lt.textContent=xs,zo=s(),Ht=p("p"),Ht.innerHTML=qs,xo=s(),St=p("p"),St.innerHTML=Zs,qo=s(),K=p("div"),u(ut.$$.fragment),Zo=s(),Et=p("p"),Et.innerHTML=Ws,Wo=s(),u(ke.$$.fragment),Io=s(),u(Qe.$$.fragment),In=s(),u(ft.$$.fragment),Dn=s(),Z=p("div"),u(gt.$$.fragment),Do=s(),Yt=p("p"),Yt.textContent=Is,Ro=s(),Pt=p("p"),Pt.innerHTML=Ds,No=s(),At=p("p"),At.innerHTML=Rs,Xo=s(),ee=p("div"),u(_t.$$.fragment),Go=s(),Ot=p("p"),Ot.innerHTML=Ns,Vo=s(),u(je.$$.fragment),Lo=s(),u(ve.$$.fragment),Rn=s(),u(bt.$$.fragment),Nn=s(),W=p("div"),u(Mt.$$.fragment),Ho=s(),Kt=p("p"),Kt.innerHTML=Xs,So=s(),en=p("p"),en.innerHTML=Gs,Eo=s(),tn=p("p"),tn.innerHTML=Vs,Yo=s(),te=p("div"),u(yt.$$.fragment),Po=s(),nn=p("p"),nn.innerHTML=Ls,Ao=s(),u(Be.$$.fragment),Oo=s(),u($e.$$.fragment),Xn=s(),on=p("p"),this.h()},l(e){const o=As("svelte-u9bgzb",document.head);n=m(o,"META",{name:!0,content:!0}),o.forEach(r),y=a(e),l=m(e,"P",{}),j(l).forEach(r),d=a(e),f(T.$$.fragment,e),t=a(e),f(w.$$.fragment,e),sn=a(e),Ce=m(e,"P",{"data-svelte-h":!0}),h(Ce)!=="svelte-10eq4ql"&&(Ce.innerHTML=Ko),an=a(e),Ue=m(e,"P",{"data-svelte-h":!0}),h(Ue)!=="svelte-vfdo9a"&&(Ue.textContent=es),rn=a(e),Fe=m(e,"P",{"data-svelte-h":!0}),h(Fe)!=="svelte-nciigz"&&(Fe.innerHTML=ts),ln=a(e),ze=m(e,"P",{"data-svelte-h":!0}),h(ze)!=="svelte-14q60ph"&&(ze.innerHTML=ns),dn=a(e),f(xe.$$.fragment,e),cn=a(e),qe=m(e,"UL",{"data-svelte-h":!0}),h(qe)!=="svelte-vlf5uq"&&(qe.innerHTML=os),pn=a(e),f(Ze.$$.fragment,e),mn=a(e),We=m(e,"P",{"data-svelte-h":!0}),h(We)!=="svelte-1dko7r6"&&(We.innerHTML=ss),hn=a(e),Ie=m(e,"P",{"data-svelte-h":!0}),h(Ie)!=="svelte-1bset6k"&&(Ie.innerHTML=as),un=a(e),De=m(e,"P",{"data-svelte-h":!0}),h(De)!=="svelte-11lpom8"&&(De.textContent=rs),fn=a(e),f(Re.$$.fragment,e),gn=a(e),f(Ne.$$.fragment,e),_n=a(e),Xe=m(e,"P",{"data-svelte-h":!0}),h(Xe)!=="svelte-1xk1npv"&&(Xe.textContent=is),bn=a(e),f(Ge.$$.fragment,e),Mn=a(e),f(Ve.$$.fragment,e),yn=a(e),Le=m(e,"P",{"data-svelte-h":!0}),h(Le)!=="svelte-8256ng"&&(Le.innerHTML=ls),Tn=a(e),f(He.$$.fragment,e),wn=a(e),f(Se.$$.fragment,e),kn=a(e),Ee=m(e,"UL",{"data-svelte-h":!0}),h(Ee)!=="svelte-p1b16m"&&(Ee.innerHTML=ds),Qn=a(e),f(Ye.$$.fragment,e),jn=a(e),D=m(e,"DIV",{class:!0});var ne=j(D);f(Pe.$$.fragment,ne),Vn=a(ne),Tt=m(ne,"P",{"data-svelte-h":!0}),h(Tt)!=="svelte-jf0dbg"&&(Tt.innerHTML=cs),Ln=a(ne),wt=m(ne,"P",{"data-svelte-h":!0}),h(wt)!=="svelte-o55m63"&&(wt.innerHTML=ps),Hn=a(ne),f(pe.$$.fragment,ne),ne.forEach(r),vn=a(e),f(Ae.$$.fragment,e),Bn=a(e),Q=m(e,"DIV",{class:!0});var $=j(Q);f(Oe.$$.fragment,$),Sn=a($),kt=m($,"P",{"data-svelte-h":!0}),h(kt)!=="svelte-bx7qi6"&&(kt.textContent=ms),En=a($),Qt=m($,"P",{"data-svelte-h":!0}),h(Qt)!=="svelte-6pahdo"&&(Qt.innerHTML=hs),Yn=a($),jt=m($,"P",{"data-svelte-h":!0}),h(jt)!=="svelte-hswkmf"&&(jt.innerHTML=us),Pn=a($),vt=m($,"P",{"data-svelte-h":!0}),h(vt)!=="svelte-1du13oj"&&(vt.innerHTML=fs),An=a($),Bt=m($,"P",{"data-svelte-h":!0}),h(Bt)!=="svelte-174erte"&&(Bt.innerHTML=gs),On=a($),Y=m($,"DIV",{class:!0});var oe=j(Y);f(Ke.$$.fragment,oe),Kn=a(oe),$t=m(oe,"P",{"data-svelte-h":!0}),h($t)!=="svelte-ac85ek"&&($t.innerHTML=_s),eo=a(oe),f(me.$$.fragment,oe),to=a(oe),f(he.$$.fragment,oe),oe.forEach(r),$.forEach(r),$n=a(e),f(et.$$.fragment,e),Jn=a(e),U=m(e,"DIV",{class:!0});var R=j(U);f(tt.$$.fragment,R),no=a(R),Jt=m(R,"P",{"data-svelte-h":!0}),h(Jt)!=="svelte-noxvqu"&&(Jt.innerHTML=bs),oo=a(R),Ct=m(R,"P",{"data-svelte-h":!0}),h(Ct)!=="svelte-6pahdo"&&(Ct.innerHTML=Ms),so=a(R),Ut=m(R,"P",{"data-svelte-h":!0}),h(Ut)!=="svelte-hswkmf"&&(Ut.innerHTML=ys),ao=a(R),P=m(R,"DIV",{class:!0});var se=j(P);f(nt.$$.fragment,se),ro=a(se),Ft=m(se,"P",{"data-svelte-h":!0}),h(Ft)!=="svelte-a8gt1e"&&(Ft.innerHTML=Ts),io=a(se),f(ue.$$.fragment,se),lo=a(se),f(fe.$$.fragment,se),se.forEach(r),R.forEach(r),Cn=a(e),f(ot.$$.fragment,e),Un=a(e),F=m(e,"DIV",{class:!0});var N=j(F);f(st.$$.fragment,N),co=a(N),zt=m(N,"P",{"data-svelte-h":!0}),h(zt)!=="svelte-1ulv96d"&&(zt.innerHTML=ws),po=a(N),xt=m(N,"P",{"data-svelte-h":!0}),h(xt)!=="svelte-6pahdo"&&(xt.innerHTML=ks),mo=a(N),qt=m(N,"P",{"data-svelte-h":!0}),h(qt)!=="svelte-hswkmf"&&(qt.innerHTML=Qs),ho=a(N),A=m(N,"DIV",{class:!0});var ae=j(A);f(at.$$.fragment,ae),uo=a(ae),Zt=m(ae,"P",{"data-svelte-h":!0}),h(Zt)!=="svelte-31azu4"&&(Zt.innerHTML=js),fo=a(ae),f(ge.$$.fragment,ae),go=a(ae),f(_e.$$.fragment,ae),ae.forEach(r),N.forEach(r),Fn=a(e),f(rt.$$.fragment,e),zn=a(e),z=m(e,"DIV",{class:!0});var X=j(z);f(it.$$.fragment,X),_o=a(X),Wt=m(X,"P",{"data-svelte-h":!0}),h(Wt)!=="svelte-mumz6f"&&(Wt.textContent=vs),bo=a(X),It=m(X,"P",{"data-svelte-h":!0}),h(It)!=="svelte-6pahdo"&&(It.innerHTML=Bs),Mo=a(X),Dt=m(X,"P",{"data-svelte-h":!0}),h(Dt)!=="svelte-hswkmf"&&(Dt.innerHTML=$s),yo=a(X),I=m(X,"DIV",{class:!0});var G=j(I);f(lt.$$.fragment,G),To=a(G),Rt=m(G,"P",{"data-svelte-h":!0}),h(Rt)!=="svelte-1r761gm"&&(Rt.innerHTML=Js),wo=a(G),f(be.$$.fragment,G),ko=a(G),f(Me.$$.fragment,G),Qo=a(G),f(ye.$$.fragment,G),G.forEach(r),X.forEach(r),xn=a(e),f(dt.$$.fragment,e),qn=a(e),x=m(e,"DIV",{class:!0});var V=j(x);f(ct.$$.fragment,V),jo=a(V),Nt=m(V,"P",{"data-svelte-h":!0}),h(Nt)!=="svelte-1yvdzzs"&&(Nt.innerHTML=Cs),vo=a(V),Xt=m(V,"P",{"data-svelte-h":!0}),h(Xt)!=="svelte-6pahdo"&&(Xt.innerHTML=Us),Bo=a(V),Gt=m(V,"P",{"data-svelte-h":!0}),h(Gt)!=="svelte-hswkmf"&&(Gt.innerHTML=Fs),$o=a(V),O=m(V,"DIV",{class:!0});var re=j(O);f(pt.$$.fragment,re),Jo=a(re),Vt=m(re,"P",{"data-svelte-h":!0}),h(Vt)!=="svelte-cpsl9q"&&(Vt.innerHTML=zs),Co=a(re),f(Te.$$.fragment,re),Uo=a(re),f(we.$$.fragment,re),re.forEach(r),V.forEach(r),Zn=a(e),f(mt.$$.fragment,e),Wn=a(e),q=m(e,"DIV",{class:!0});var L=j(q);f(ht.$$.fragment,L),Fo=a(L),Lt=m(L,"P",{"data-svelte-h":!0}),h(Lt)!=="svelte-4kts57"&&(Lt.textContent=xs),zo=a(L),Ht=m(L,"P",{"data-svelte-h":!0}),h(Ht)!=="svelte-6pahdo"&&(Ht.innerHTML=qs),xo=a(L),St=m(L,"P",{"data-svelte-h":!0}),h(St)!=="svelte-hswkmf"&&(St.innerHTML=Zs),qo=a(L),K=m(L,"DIV",{class:!0});var ie=j(K);f(ut.$$.fragment,ie),Zo=a(ie),Et=m(ie,"P",{"data-svelte-h":!0}),h(Et)!=="svelte-1thfib2"&&(Et.innerHTML=Ws),Wo=a(ie),f(ke.$$.fragment,ie),Io=a(ie),f(Qe.$$.fragment,ie),ie.forEach(r),L.forEach(r),In=a(e),f(ft.$$.fragment,e),Dn=a(e),Z=m(e,"DIV",{class:!0});var H=j(Z);f(gt.$$.fragment,H),Do=a(H),Yt=m(H,"P",{"data-svelte-h":!0}),h(Yt)!=="svelte-1ynzopo"&&(Yt.textContent=Is),Ro=a(H),Pt=m(H,"P",{"data-svelte-h":!0}),h(Pt)!=="svelte-6pahdo"&&(Pt.innerHTML=Ds),No=a(H),At=m(H,"P",{"data-svelte-h":!0}),h(At)!=="svelte-hswkmf"&&(At.innerHTML=Rs),Xo=a(H),ee=m(H,"DIV",{class:!0});var le=j(ee);f(_t.$$.fragment,le),Go=a(le),Ot=m(le,"P",{"data-svelte-h":!0}),h(Ot)!=="svelte-1lv58lg"&&(Ot.innerHTML=Ns),Vo=a(le),f(je.$$.fragment,le),Lo=a(le),f(ve.$$.fragment,le),le.forEach(r),H.forEach(r),Rn=a(e),f(bt.$$.fragment,e),Nn=a(e),W=m(e,"DIV",{class:!0});var S=j(W);f(Mt.$$.fragment,S),Ho=a(S),Kt=m(S,"P",{"data-svelte-h":!0}),h(Kt)!=="svelte-97if0a"&&(Kt.innerHTML=Xs),So=a(S),en=m(S,"P",{"data-svelte-h":!0}),h(en)!=="svelte-6pahdo"&&(en.innerHTML=Gs),Eo=a(S),tn=m(S,"P",{"data-svelte-h":!0}),h(tn)!=="svelte-hswkmf"&&(tn.innerHTML=Vs),Yo=a(S),te=m(S,"DIV",{class:!0});var de=j(te);f(yt.$$.fragment,de),Po=a(de),nn=m(de,"P",{"data-svelte-h":!0}),h(nn)!=="svelte-1sz5pg"&&(nn.innerHTML=Ls),Ao=a(de),f(Be.$$.fragment,de),Oo=a(de),f($e.$$.fragment,de),de.forEach(r),S.forEach(r),Xn=a(e),on=m(e,"P",{}),j(on).forEach(r),this.h()},h(){v(n,"name","hf:doc:metadata"),v(n,"content",_a),v(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){i(document.head,n),c(e,y,o),c(e,l,o),c(e,d,o),g(T,e,o),c(e,t,o),g(w,e,o),c(e,sn,o),c(e,Ce,o),c(e,an,o),c(e,Ue,o),c(e,rn,o),c(e,Fe,o),c(e,ln,o),c(e,ze,o),c(e,dn,o),g(xe,e,o),c(e,cn,o),c(e,qe,o),c(e,pn,o),g(Ze,e,o),c(e,mn,o),c(e,We,o),c(e,hn,o),c(e,Ie,o),c(e,un,o),c(e,De,o),c(e,fn,o),g(Re,e,o),c(e,gn,o),g(Ne,e,o),c(e,_n,o),c(e,Xe,o),c(e,bn,o),g(Ge,e,o),c(e,Mn,o),g(Ve,e,o),c(e,yn,o),c(e,Le,o),c(e,Tn,o),g(He,e,o),c(e,wn,o),g(Se,e,o),c(e,kn,o),c(e,Ee,o),c(e,Qn,o),g(Ye,e,o),c(e,jn,o),c(e,D,o),g(Pe,D,null),i(D,Vn),i(D,Tt),i(D,Ln),i(D,wt),i(D,Hn),g(pe,D,null),c(e,vn,o),g(Ae,e,o),c(e,Bn,o),c(e,Q,o),g(Oe,Q,null),i(Q,Sn),i(Q,kt),i(Q,En),i(Q,Qt),i(Q,Yn),i(Q,jt),i(Q,Pn),i(Q,vt),i(Q,An),i(Q,Bt),i(Q,On),i(Q,Y),g(Ke,Y,null),i(Y,Kn),i(Y,$t),i(Y,eo),g(me,Y,null),i(Y,to),g(he,Y,null),c(e,$n,o),g(et,e,o),c(e,Jn,o),c(e,U,o),g(tt,U,null),i(U,no),i(U,Jt),i(U,oo),i(U,Ct),i(U,so),i(U,Ut),i(U,ao),i(U,P),g(nt,P,null),i(P,ro),i(P,Ft),i(P,io),g(ue,P,null),i(P,lo),g(fe,P,null),c(e,Cn,o),g(ot,e,o),c(e,Un,o),c(e,F,o),g(st,F,null),i(F,co),i(F,zt),i(F,po),i(F,xt),i(F,mo),i(F,qt),i(F,ho),i(F,A),g(at,A,null),i(A,uo),i(A,Zt),i(A,fo),g(ge,A,null),i(A,go),g(_e,A,null),c(e,Fn,o),g(rt,e,o),c(e,zn,o),c(e,z,o),g(it,z,null),i(z,_o),i(z,Wt),i(z,bo),i(z,It),i(z,Mo),i(z,Dt),i(z,yo),i(z,I),g(lt,I,null),i(I,To),i(I,Rt),i(I,wo),g(be,I,null),i(I,ko),g(Me,I,null),i(I,Qo),g(ye,I,null),c(e,xn,o),g(dt,e,o),c(e,qn,o),c(e,x,o),g(ct,x,null),i(x,jo),i(x,Nt),i(x,vo),i(x,Xt),i(x,Bo),i(x,Gt),i(x,$o),i(x,O),g(pt,O,null),i(O,Jo),i(O,Vt),i(O,Co),g(Te,O,null),i(O,Uo),g(we,O,null),c(e,Zn,o),g(mt,e,o),c(e,Wn,o),c(e,q,o),g(ht,q,null),i(q,Fo),i(q,Lt),i(q,zo),i(q,Ht),i(q,xo),i(q,St),i(q,qo),i(q,K),g(ut,K,null),i(K,Zo),i(K,Et),i(K,Wo),g(ke,K,null),i(K,Io),g(Qe,K,null),c(e,In,o),g(ft,e,o),c(e,Dn,o),c(e,Z,o),g(gt,Z,null),i(Z,Do),i(Z,Yt),i(Z,Ro),i(Z,Pt),i(Z,No),i(Z,At),i(Z,Xo),i(Z,ee),g(_t,ee,null),i(ee,Go),i(ee,Ot),i(ee,Vo),g(je,ee,null),i(ee,Lo),g(ve,ee,null),c(e,Rn,o),g(bt,e,o),c(e,Nn,o),c(e,W,o),g(Mt,W,null),i(W,Ho),i(W,Kt),i(W,So),i(W,en),i(W,Eo),i(W,tn),i(W,Yo),i(W,te),g(yt,te,null),i(te,Po),i(te,nn),i(te,Ao),g(Be,te,null),i(te,Oo),g($e,te,null),c(e,Xn,o),c(e,on,o),Gn=!0},p(e,[o]){const ne={};o&2&&(ne.$$scope={dirty:o,ctx:e}),pe.$set(ne);const $={};o&2&&($.$$scope={dirty:o,ctx:e}),me.$set($);const oe={};o&2&&(oe.$$scope={dirty:o,ctx:e}),he.$set(oe);const R={};o&2&&(R.$$scope={dirty:o,ctx:e}),ue.$set(R);const se={};o&2&&(se.$$scope={dirty:o,ctx:e}),fe.$set(se);const N={};o&2&&(N.$$scope={dirty:o,ctx:e}),ge.$set(N);const ae={};o&2&&(ae.$$scope={dirty:o,ctx:e}),_e.$set(ae);const X={};o&2&&(X.$$scope={dirty:o,ctx:e}),be.$set(X);const G={};o&2&&(G.$$scope={dirty:o,ctx:e}),Me.$set(G);const V={};o&2&&(V.$$scope={dirty:o,ctx:e}),ye.$set(V);const re={};o&2&&(re.$$scope={dirty:o,ctx:e}),Te.$set(re);const L={};o&2&&(L.$$scope={dirty:o,ctx:e}),we.$set(L);const ie={};o&2&&(ie.$$scope={dirty:o,ctx:e}),ke.$set(ie);const H={};o&2&&(H.$$scope={dirty:o,ctx:e}),Qe.$set(H);const le={};o&2&&(le.$$scope={dirty:o,ctx:e}),je.$set(le);const S={};o&2&&(S.$$scope={dirty:o,ctx:e}),ve.$set(S);const de={};o&2&&(de.$$scope={dirty:o,ctx:e}),Be.$set(de);const Hs={};o&2&&(Hs.$$scope={dirty:o,ctx:e}),$e.$set(Hs)},i(e){Gn||(_(T.$$.fragment,e),_(w.$$.fragment,e),_(xe.$$.fragment,e),_(Ze.$$.fragment,e),_(Re.$$.fragment,e),_(Ne.$$.fragment,e),_(Ge.$$.fragment,e),_(Ve.$$.fragment,e),_(He.$$.fragment,e),_(Se.$$.fragment,e),_(Ye.$$.fragment,e),_(Pe.$$.fragment,e),_(pe.$$.fragment,e),_(Ae.$$.fragment,e),_(Oe.$$.fragment,e),_(Ke.$$.fragment,e),_(me.$$.fragment,e),_(he.$$.fragment,e),_(et.$$.fragment,e),_(tt.$$.fragment,e),_(nt.$$.fragment,e),_(ue.$$.fragment,e),_(fe.$$.fragment,e),_(ot.$$.fragment,e),_(st.$$.fragment,e),_(at.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(rt.$$.fragment,e),_(it.$$.fragment,e),_(lt.$$.fragment,e),_(be.$$.fragment,e),_(Me.$$.fragment,e),_(ye.$$.fragment,e),_(dt.$$.fragment,e),_(ct.$$.fragment,e),_(pt.$$.fragment,e),_(Te.$$.fragment,e),_(we.$$.fragment,e),_(mt.$$.fragment,e),_(ht.$$.fragment,e),_(ut.$$.fragment,e),_(ke.$$.fragment,e),_(Qe.$$.fragment,e),_(ft.$$.fragment,e),_(gt.$$.fragment,e),_(_t.$$.fragment,e),_(je.$$.fragment,e),_(ve.$$.fragment,e),_(bt.$$.fragment,e),_(Mt.$$.fragment,e),_(yt.$$.fragment,e),_(Be.$$.fragment,e),_($e.$$.fragment,e),Gn=!0)},o(e){b(T.$$.fragment,e),b(w.$$.fragment,e),b(xe.$$.fragment,e),b(Ze.$$.fragment,e),b(Re.$$.fragment,e),b(Ne.$$.fragment,e),b(Ge.$$.fragment,e),b(Ve.$$.fragment,e),b(He.$$.fragment,e),b(Se.$$.fragment,e),b(Ye.$$.fragment,e),b(Pe.$$.fragment,e),b(pe.$$.fragment,e),b(Ae.$$.fragment,e),b(Oe.$$.fragment,e),b(Ke.$$.fragment,e),b(me.$$.fragment,e),b(he.$$.fragment,e),b(et.$$.fragment,e),b(tt.$$.fragment,e),b(nt.$$.fragment,e),b(ue.$$.fragment,e),b(fe.$$.fragment,e),b(ot.$$.fragment,e),b(st.$$.fragment,e),b(at.$$.fragment,e),b(ge.$$.fragment,e),b(_e.$$.fragment,e),b(rt.$$.fragment,e),b(it.$$.fragment,e),b(lt.$$.fragment,e),b(be.$$.fragment,e),b(Me.$$.fragment,e),b(ye.$$.fragment,e),b(dt.$$.fragment,e),b(ct.$$.fragment,e),b(pt.$$.fragment,e),b(Te.$$.fragment,e),b(we.$$.fragment,e),b(mt.$$.fragment,e),b(ht.$$.fragment,e),b(ut.$$.fragment,e),b(ke.$$.fragment,e),b(Qe.$$.fragment,e),b(ft.$$.fragment,e),b(gt.$$.fragment,e),b(_t.$$.fragment,e),b(je.$$.fragment,e),b(ve.$$.fragment,e),b(bt.$$.fragment,e),b(Mt.$$.fragment,e),b(yt.$$.fragment,e),b(Be.$$.fragment,e),b($e.$$.fragment,e),Gn=!1},d(e){e&&(r(y),r(l),r(d),r(t),r(sn),r(Ce),r(an),r(Ue),r(rn),r(Fe),r(ln),r(ze),r(dn),r(cn),r(qe),r(pn),r(mn),r(We),r(hn),r(Ie),r(un),r(De),r(fn),r(gn),r(_n),r(Xe),r(bn),r(Mn),r(yn),r(Le),r(Tn),r(wn),r(kn),r(Ee),r(Qn),r(jn),r(D),r(vn),r(Bn),r(Q),r($n),r(Jn),r(U),r(Cn),r(Un),r(F),r(Fn),r(zn),r(z),r(xn),r(qn),r(x),r(Zn),r(Wn),r(q),r(In),r(Dn),r(Z),r(Rn),r(Nn),r(W),r(Xn),r(on)),r(n),M(T,e),M(w,e),M(xe,e),M(Ze,e),M(Re,e),M(Ne,e),M(Ge,e),M(Ve,e),M(He,e),M(Se,e),M(Ye,e),M(Pe),M(pe),M(Ae,e),M(Oe),M(Ke),M(me),M(he),M(et,e),M(tt),M(nt),M(ue),M(fe),M(ot,e),M(st),M(at),M(ge),M(_e),M(rt,e),M(it),M(lt),M(be),M(Me),M(ye),M(dt,e),M(ct),M(pt),M(Te),M(we),M(mt,e),M(ht),M(ut),M(ke),M(Qe),M(ft,e),M(gt),M(_t),M(je),M(ve),M(bt,e),M(Mt),M(yt),M(Be),M($e)}}}const _a='{"title":"QDQBERT","local":"qdqbert","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[{"title":"Set default quantizers","local":"set-default-quantizers","sections":[],"depth":3},{"title":"Calibration","local":"calibration","sections":[],"depth":3},{"title":"Export to ONNX","local":"export-to-onnx","sections":[],"depth":3}],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"QDQBertConfig","local":"transformers.QDQBertConfig","sections":[],"depth":2},{"title":"QDQBertModel","local":"transformers.QDQBertModel","sections":[],"depth":2},{"title":"QDQBertLMHeadModel","local":"transformers.QDQBertLMHeadModel","sections":[],"depth":2},{"title":"QDQBertForMaskedLM","local":"transformers.QDQBertForMaskedLM","sections":[],"depth":2},{"title":"QDQBertForSequenceClassification","local":"transformers.QDQBertForSequenceClassification","sections":[],"depth":2},{"title":"QDQBertForNextSentencePrediction","local":"transformers.QDQBertForNextSentencePrediction","sections":[],"depth":2},{"title":"QDQBertForMultipleChoice","local":"transformers.QDQBertForMultipleChoice","sections":[],"depth":2},{"title":"QDQBertForTokenClassification","local":"transformers.QDQBertForTokenClassification","sections":[],"depth":2},{"title":"QDQBertForQuestionAnswering","local":"transformers.QDQBertForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function ba(k){return Es(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class va extends Ys{constructor(n){super(),Ps(this,n,ba,ga,Ss,{})}}export{va as component};
