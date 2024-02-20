import{s as On,o as Dn,n as z}from"../chunks/scheduler.9bc65507.js";import{S as Kn,i as eo,g as p,s as a,r as b,A as to,h as m,f as s,c as r,j as W,u as T,x as g,k as I,y as i,a as c,v as k,d as y,t as w,w as $}from"../chunks/index.707bf1b6.js";import{T as Ge}from"../chunks/Tip.c2ecdbf4.js";import{D as q}from"../chunks/Docstring.17db21ae.js";import{C as Ve}from"../chunks/CodeBlock.54a9f38d.js";import{F as no,M as An}from"../chunks/Markdown.fef84341.js";import{E as Be}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as xe}from"../chunks/Heading.342b1fa6.js";function oo(v){let e,h="Examples:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1QTmV0TW9kZWwlMkMlMjBNUE5ldENvbmZpZyUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBNUE5ldCUyMG1wbmV0LWJhc2UlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwTVBOZXRDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMGZyb20lMjB0aGUlMjBtcG5ldC1iYXNlJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBNUE5ldE1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetModel, MPNetConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MPNet mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MPNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-kvfsh7"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function so(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function ao(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNUE5ldE1vZGVsJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZtcG5ldC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTVBOZXRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbXBuZXQtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function ro(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function io(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNUE5ldEZvck1hc2tlZExNJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZtcG5ldC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTVBOZXRGb3JNYXNrZWRMTS5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbXBuZXQtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjAlNUJNQVNLJTVELiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEElMjMlMjByZXRyaWV2ZSUyMGluZGV4JTIwb2YlMjAlNUJNQVNLJTVEJTBBbWFza190b2tlbl9pbmRleCUyMCUzRCUyMChpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQpJTVCMCU1RC5ub256ZXJvKGFzX3R1cGxlJTNEVHJ1ZSklNUIwJTVEJTBBJTBBcHJlZGljdGVkX3Rva2VuX2lkJTIwJTNEJTIwbG9naXRzJTVCMCUyQyUyMG1hc2tfdG9rZW5faW5kZXglNUQuYXJnbWF4KGF4aXMlM0QtMSklMEElMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjBQYXJpcy4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQSUyMyUyMG1hc2slMjBsYWJlbHMlMjBvZiUyMG5vbi0lNUJNQVNLJTVEJTIwdG9rZW5zJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gud2hlcmUoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkJTJDJTIwbGFiZWxzJTJDJTIwLTEwMCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function lo(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function co(v){let e,h="Example of single-label classification:",t,o,M;return o=new Ve({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME1QTmV0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBNUE5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwbG9naXRzLmFyZ21heCgpLml0ZW0oKSUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyME1QTmV0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbXBuZXQtYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MPNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-ykxpe4"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function po(v){let e,h="Example of multi-label classification:",t,o,M;return o=new Ve({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME1QTmV0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBNUE5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIlMkMlMjBwcm9ibGVtX3R5cGUlM0QlMjJtdWx0aV9sYWJlbF9jbGFzc2lmaWNhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJhbmdlKDAlMkMlMjBsb2dpdHMuc2hhcGUlNUItMSU1RCklNUJ0b3JjaC5zaWdtb2lkKGxvZ2l0cykuc3F1ZWV6ZShkaW0lM0QwKSUyMCUzRSUyMDAuNSU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyME1QTmV0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIybWljcm9zb2Z0JTJGbXBuZXQtYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MPNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1l8e32d"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function mo(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function uo(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNUE5ldEZvck11bHRpcGxlQ2hvaWNlJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZtcG5ldC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTVBOZXRGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbXBuZXQtYmFzZSUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBY2hvaWNlMCUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdpdGglMjBhJTIwZm9yayUyMGFuZCUyMGElMjBrbmlmZS4lMjIlMEFjaG9pY2UxJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2hpbGUlMjBoZWxkJTIwaW4lMjB0aGUlMjBoYW5kLiUyMiUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvcigwKS51bnNxdWVlemUoMCklMjAlMjAlMjMlMjBjaG9pY2UwJTIwaXMlMjBjb3JyZWN0JTIwKGFjY29yZGluZyUyMHRvJTIwV2lraXBlZGlhJTIwJTNCKSklMkMlMjBiYXRjaCUyMHNpemUlMjAxJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTVCcHJvbXB0JTJDJTIwcHJvbXB0JTVEJTJDJTIwJTVCY2hvaWNlMCUyQyUyMGNob2ljZTElNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqJTdCayUzQSUyMHYudW5zcXVlZXplKDApJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTIwJTIwJTIzJTIwYmF0Y2glMjBzaXplJTIwaXMlMjAxJTBBJTBBJTIzJTIwdGhlJTIwbGluZWFyJTIwY2xhc3NpZmllciUyMHN0aWxsJTIwbmVlZHMlMjB0byUyMGJlJTIwdHJhaW5lZCUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MPNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function ho(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function fo(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNUE5ldEZvclRva2VuQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBNUE5ldEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMkh1Z2dpbmdGYWNlJTIwaXMlMjBhJTIwY29tcGFueSUyMGJhc2VkJTIwaW4lMjBQYXJpcyUyMGFuZCUyME5ldyUyMFlvcmslMjIlMkMlMjBhZGRfc3BlY2lhbF90b2tlbnMlM0RGYWxzZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTIwJTNEJTIwbG9naXRzLmFyZ21heCgtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdC5pdGVtKCklNUQlMjBmb3IlMjB0JTIwaW4lMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTVCMCU1RCU1RCUwQSUwQWxhYmVscyUyMCUzRCUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function go(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function _o(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNUE5ldEZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZtcG5ldC1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTVBOZXRGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbXBuZXQtYmFzZSUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQSUwQSUyMyUyMHRhcmdldCUyMGlzJTIwJTIybmljZSUyMHB1cHBldCUyMiUwQXRhcmdldF9zdGFydF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNCU1RCklMEF0YXJnZXRfZW5kX2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function Mo(v){let e,h,t,o,M,n,_="The bare MPNet Model transformer outputting raw hidden-states without any specific head on top.",Z,U,J=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,G,P,x=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,B,l,j,re,te,gn='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> forward method, overrides the <code>__call__</code> special method.',it,ke,cn,ne,Ye,ie,He,ue,Re,H,S,ye,Vt,wt,$t='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForMaskedLM">MPNetForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',lt,Y,dt,we,vt,Nt,Le,Q,A,ct,$e,Ft=`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,jt,pt,R=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,mt,ve,Ht=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ut,D,E,Ae,X,Xe='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForSequenceClassification">MPNetForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',pn,Ne,Rt,ht,Ct,he,Oe,Ue,Jt,oe,fe,De,L,xt=`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,Ut,Ke,_n=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Pt,K,nn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ge,le,V,et,Pe,zt='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForMultipleChoice">MPNetForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',O,_e,Wt,ze,on,Me,Fe,se,We,Lt,It,ft=`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Qe,tt,be=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,u,C,de=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ae,ee,ce,Ot,Ie,nt='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForTokenClassification">MPNetForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',ot,Xt,pe,st,bn,qt,wn,je,Zt,jn,mn,Mn=`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Cn,un,sn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,$n,me,hn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,vn,Ce,fn,Nn,gt,Jn='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering">MPNetForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Dt,Kt,en,Qt,tn;return e=new xe({props:{title:"MPNetModel",local:"transformers.MPNetModel",headingTag:"h2"}}),o=new q({props:{name:"class transformers.MPNetModel",anchor:"transformers.MPNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L479"}}),j=new q({props:{name:"forward",anchor:"transformers.MPNetModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L509",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ke=new Ge({props:{$$slots:{default:[so]},$$scope:{ctx:v}}}),ne=new Be({props:{anchor:"transformers.MPNetModel.forward.example",$$slots:{default:[ao]},$$scope:{ctx:v}}}),ie=new xe({props:{title:"MPNetForMaskedLM",local:"transformers.MPNetForMaskedLM",headingTag:"h2"}}),Re=new q({props:{name:"class transformers.MPNetForMaskedLM",anchor:"transformers.MPNetForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L573"}}),ye=new q({props:{name:"forward",anchor:"transformers.MPNetForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MPNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L592",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),Y=new Ge({props:{$$slots:{default:[ro]},$$scope:{ctx:v}}}),we=new Be({props:{anchor:"transformers.MPNetForMaskedLM.forward.example",$$slots:{default:[io]},$$scope:{ctx:v}}}),Nt=new xe({props:{title:"MPNetForSequenceClassification",local:"transformers.MPNetForSequenceClassification",headingTag:"h2"}}),A=new q({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L677"}}),E=new q({props:{name:"forward",anchor:"transformers.MPNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L695",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),Ne=new Ge({props:{$$slots:{default:[lo]},$$scope:{ctx:v}}}),ht=new Be({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example",$$slots:{default:[co]},$$scope:{ctx:v}}}),he=new Be({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-2",$$slots:{default:[po]},$$scope:{ctx:v}}}),Ue=new xe({props:{title:"MPNetForMultipleChoice",local:"transformers.MPNetForMultipleChoice",headingTag:"h2"}}),fe=new q({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L769"}}),V=new q({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L787",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),_e=new Ge({props:{$$slots:{default:[mo]},$$scope:{ctx:v}}}),ze=new Be({props:{anchor:"transformers.MPNetForMultipleChoice.forward.example",$$slots:{default:[uo]},$$scope:{ctx:v}}}),Me=new xe({props:{title:"MPNetForTokenClassification",local:"transformers.MPNetForTokenClassification",headingTag:"h2"}}),We=new q({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L857"}}),ce=new q({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L876",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),Xt=new Ge({props:{$$slots:{default:[ho]},$$scope:{ctx:v}}}),st=new Be({props:{anchor:"transformers.MPNetForTokenClassification.forward.example",$$slots:{default:[fo]},$$scope:{ctx:v}}}),qt=new xe({props:{title:"MPNetForQuestionAnswering",local:"transformers.MPNetForQuestionAnswering",headingTag:"h2"}}),Zt=new q({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L953"}}),fn=new q({props:{name:"forward",anchor:"transformers.MPNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L971",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),Kt=new Ge({props:{$$slots:{default:[go]},$$scope:{ctx:v}}}),Qt=new Be({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example",$$slots:{default:[_o]},$$scope:{ctx:v}}}),{c(){b(e.$$.fragment),h=a(),t=p("div"),b(o.$$.fragment),M=a(),n=p("p"),n.textContent=_,Z=a(),U=p("p"),U.innerHTML=J,G=a(),P=p("p"),P.innerHTML=x,B=a(),l=p("div"),b(j.$$.fragment),re=a(),te=p("p"),te.innerHTML=gn,it=a(),b(ke.$$.fragment),cn=a(),b(ne.$$.fragment),Ye=a(),b(ie.$$.fragment),He=a(),ue=p("div"),b(Re.$$.fragment),H=a(),S=p("div"),b(ye.$$.fragment),Vt=a(),wt=p("p"),wt.innerHTML=$t,lt=a(),b(Y.$$.fragment),dt=a(),b(we.$$.fragment),vt=a(),b(Nt.$$.fragment),Le=a(),Q=p("div"),b(A.$$.fragment),ct=a(),$e=p("p"),$e.textContent=Ft,jt=a(),pt=p("p"),pt.innerHTML=R,mt=a(),ve=p("p"),ve.innerHTML=Ht,ut=a(),D=p("div"),b(E.$$.fragment),Ae=a(),X=p("p"),X.innerHTML=Xe,pn=a(),b(Ne.$$.fragment),Rt=a(),b(ht.$$.fragment),Ct=a(),b(he.$$.fragment),Oe=a(),b(Ue.$$.fragment),Jt=a(),oe=p("div"),b(fe.$$.fragment),De=a(),L=p("p"),L.textContent=xt,Ut=a(),Ke=p("p"),Ke.innerHTML=_n,Pt=a(),K=p("p"),K.innerHTML=nn,ge=a(),le=p("div"),b(V.$$.fragment),et=a(),Pe=p("p"),Pe.innerHTML=zt,O=a(),b(_e.$$.fragment),Wt=a(),b(ze.$$.fragment),on=a(),b(Me.$$.fragment),Fe=a(),se=p("div"),b(We.$$.fragment),Lt=a(),It=p("p"),It.textContent=ft,Qe=a(),tt=p("p"),tt.innerHTML=be,u=a(),C=p("p"),C.innerHTML=de,ae=a(),ee=p("div"),b(ce.$$.fragment),Ot=a(),Ie=p("p"),Ie.innerHTML=nt,ot=a(),b(Xt.$$.fragment),pe=a(),b(st.$$.fragment),bn=a(),b(qt.$$.fragment),wn=a(),je=p("div"),b(Zt.$$.fragment),jn=a(),mn=p("p"),mn.innerHTML=Mn,Cn=a(),un=p("p"),un.innerHTML=sn,$n=a(),me=p("p"),me.innerHTML=hn,vn=a(),Ce=p("div"),b(fn.$$.fragment),Nn=a(),gt=p("p"),gt.innerHTML=Jn,Dt=a(),b(Kt.$$.fragment),en=a(),b(Qt.$$.fragment),this.h()},l(f){T(e.$$.fragment,f),h=r(f),t=m(f,"DIV",{class:!0});var F=W(t);T(o.$$.fragment,F),M=r(F),n=m(F,"P",{"data-svelte-h":!0}),g(n)!=="svelte-18z6dzf"&&(n.textContent=_),Z=r(F),U=m(F,"P",{"data-svelte-h":!0}),g(U)!=="svelte-6pahdo"&&(U.innerHTML=J),G=r(F),P=m(F,"P",{"data-svelte-h":!0}),g(P)!=="svelte-hswkmf"&&(P.innerHTML=x),B=r(F),l=m(F,"DIV",{class:!0});var Je=W(l);T(j.$$.fragment,Je),re=r(Je),te=m(Je,"P",{"data-svelte-h":!0}),g(te)!=="svelte-1n2we6l"&&(te.innerHTML=gn),it=r(Je),T(ke.$$.fragment,Je),cn=r(Je),T(ne.$$.fragment,Je),Je.forEach(s),F.forEach(s),Ye=r(f),T(ie.$$.fragment,f),He=r(f),ue=m(f,"DIV",{class:!0});var an=W(ue);T(Re.$$.fragment,an),H=r(an),S=m(an,"DIV",{class:!0});var qe=W(S);T(ye.$$.fragment,qe),Vt=r(qe),wt=m(qe,"P",{"data-svelte-h":!0}),g(wt)!=="svelte-b4f31d"&&(wt.innerHTML=$t),lt=r(qe),T(Y.$$.fragment,qe),dt=r(qe),T(we.$$.fragment,qe),qe.forEach(s),an.forEach(s),vt=r(f),T(Nt.$$.fragment,f),Le=r(f),Q=m(f,"DIV",{class:!0});var at=W(Q);T(A.$$.fragment,at),ct=r(at),$e=m(at,"P",{"data-svelte-h":!0}),g($e)!=="svelte-i6k3hq"&&($e.textContent=Ft),jt=r(at),pt=m(at,"P",{"data-svelte-h":!0}),g(pt)!=="svelte-6pahdo"&&(pt.innerHTML=R),mt=r(at),ve=m(at,"P",{"data-svelte-h":!0}),g(ve)!=="svelte-hswkmf"&&(ve.innerHTML=Ht),ut=r(at),D=m(at,"DIV",{class:!0});var Ee=W(D);T(E.$$.fragment,Ee),Ae=r(Ee),X=m(Ee,"P",{"data-svelte-h":!0}),g(X)!=="svelte-1ep025v"&&(X.innerHTML=Xe),pn=r(Ee),T(Ne.$$.fragment,Ee),Rt=r(Ee),T(ht.$$.fragment,Ee),Ct=r(Ee),T(he.$$.fragment,Ee),Ee.forEach(s),at.forEach(s),Oe=r(f),T(Ue.$$.fragment,f),Jt=r(f),oe=m(f,"DIV",{class:!0});var Te=W(oe);T(fe.$$.fragment,Te),De=r(Te),L=m(Te,"P",{"data-svelte-h":!0}),g(L)!=="svelte-122dfbe"&&(L.textContent=xt),Ut=r(Te),Ke=m(Te,"P",{"data-svelte-h":!0}),g(Ke)!=="svelte-6pahdo"&&(Ke.innerHTML=_n),Pt=r(Te),K=m(Te,"P",{"data-svelte-h":!0}),g(K)!=="svelte-hswkmf"&&(K.innerHTML=nn),ge=r(Te),le=m(Te,"DIV",{class:!0});var Gt=W(le);T(V.$$.fragment,Gt),et=r(Gt),Pe=m(Gt,"P",{"data-svelte-h":!0}),g(Pe)!=="svelte-1pu4c7"&&(Pe.innerHTML=zt),O=r(Gt),T(_e.$$.fragment,Gt),Wt=r(Gt),T(ze.$$.fragment,Gt),Gt.forEach(s),Te.forEach(s),on=r(f),T(Me.$$.fragment,f),Fe=r(f),se=m(f,"DIV",{class:!0});var Se=W(se);T(We.$$.fragment,Se),Lt=r(Se),It=m(Se,"P",{"data-svelte-h":!0}),g(It)!=="svelte-jf6sz7"&&(It.textContent=ft),Qe=r(Se),tt=m(Se,"P",{"data-svelte-h":!0}),g(tt)!=="svelte-6pahdo"&&(tt.innerHTML=be),u=r(Se),C=m(Se,"P",{"data-svelte-h":!0}),g(C)!=="svelte-hswkmf"&&(C.innerHTML=de),ae=r(Se),ee=m(Se,"DIV",{class:!0});var Ze=W(ee);T(ce.$$.fragment,Ze),Ot=r(Ze),Ie=m(Ze,"P",{"data-svelte-h":!0}),g(Ie)!=="svelte-1lhhcyf"&&(Ie.innerHTML=nt),ot=r(Ze),T(Xt.$$.fragment,Ze),pe=r(Ze),T(st.$$.fragment,Ze),Ze.forEach(s),Se.forEach(s),bn=r(f),T(qt.$$.fragment,f),wn=r(f),je=m(f,"DIV",{class:!0});var rt=W(je);T(Zt.$$.fragment,rt),jn=r(rt),mn=m(rt,"P",{"data-svelte-h":!0}),g(mn)!=="svelte-1gkqfqt"&&(mn.innerHTML=Mn),Cn=r(rt),un=m(rt,"P",{"data-svelte-h":!0}),g(un)!=="svelte-6pahdo"&&(un.innerHTML=sn),$n=r(rt),me=m(rt,"P",{"data-svelte-h":!0}),g(me)!=="svelte-hswkmf"&&(me.innerHTML=hn),vn=r(rt),Ce=m(rt,"DIV",{class:!0});var _t=W(Ce);T(fn.$$.fragment,_t),Nn=r(_t),gt=m(_t,"P",{"data-svelte-h":!0}),g(gt)!=="svelte-f9zffj"&&(gt.innerHTML=Jn),Dt=r(_t),T(Kt.$$.fragment,_t),en=r(_t),T(Qt.$$.fragment,_t),_t.forEach(s),rt.forEach(s),this.h()},h(){I(l,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(f,F){k(e,f,F),c(f,h,F),c(f,t,F),k(o,t,null),i(t,M),i(t,n),i(t,Z),i(t,U),i(t,G),i(t,P),i(t,B),i(t,l),k(j,l,null),i(l,re),i(l,te),i(l,it),k(ke,l,null),i(l,cn),k(ne,l,null),c(f,Ye,F),k(ie,f,F),c(f,He,F),c(f,ue,F),k(Re,ue,null),i(ue,H),i(ue,S),k(ye,S,null),i(S,Vt),i(S,wt),i(S,lt),k(Y,S,null),i(S,dt),k(we,S,null),c(f,vt,F),k(Nt,f,F),c(f,Le,F),c(f,Q,F),k(A,Q,null),i(Q,ct),i(Q,$e),i(Q,jt),i(Q,pt),i(Q,mt),i(Q,ve),i(Q,ut),i(Q,D),k(E,D,null),i(D,Ae),i(D,X),i(D,pn),k(Ne,D,null),i(D,Rt),k(ht,D,null),i(D,Ct),k(he,D,null),c(f,Oe,F),k(Ue,f,F),c(f,Jt,F),c(f,oe,F),k(fe,oe,null),i(oe,De),i(oe,L),i(oe,Ut),i(oe,Ke),i(oe,Pt),i(oe,K),i(oe,ge),i(oe,le),k(V,le,null),i(le,et),i(le,Pe),i(le,O),k(_e,le,null),i(le,Wt),k(ze,le,null),c(f,on,F),k(Me,f,F),c(f,Fe,F),c(f,se,F),k(We,se,null),i(se,Lt),i(se,It),i(se,Qe),i(se,tt),i(se,u),i(se,C),i(se,ae),i(se,ee),k(ce,ee,null),i(ee,Ot),i(ee,Ie),i(ee,ot),k(Xt,ee,null),i(ee,pe),k(st,ee,null),c(f,bn,F),k(qt,f,F),c(f,wn,F),c(f,je,F),k(Zt,je,null),i(je,jn),i(je,mn),i(je,Cn),i(je,un),i(je,$n),i(je,me),i(je,vn),i(je,Ce),k(fn,Ce,null),i(Ce,Nn),i(Ce,gt),i(Ce,Dt),k(Kt,Ce,null),i(Ce,en),k(Qt,Ce,null),tn=!0},p(f,F){const Je={};F&2&&(Je.$$scope={dirty:F,ctx:f}),ke.$set(Je);const an={};F&2&&(an.$$scope={dirty:F,ctx:f}),ne.$set(an);const qe={};F&2&&(qe.$$scope={dirty:F,ctx:f}),Y.$set(qe);const at={};F&2&&(at.$$scope={dirty:F,ctx:f}),we.$set(at);const Ee={};F&2&&(Ee.$$scope={dirty:F,ctx:f}),Ne.$set(Ee);const Te={};F&2&&(Te.$$scope={dirty:F,ctx:f}),ht.$set(Te);const Gt={};F&2&&(Gt.$$scope={dirty:F,ctx:f}),he.$set(Gt);const Se={};F&2&&(Se.$$scope={dirty:F,ctx:f}),_e.$set(Se);const Ze={};F&2&&(Ze.$$scope={dirty:F,ctx:f}),ze.$set(Ze);const rt={};F&2&&(rt.$$scope={dirty:F,ctx:f}),Xt.$set(rt);const _t={};F&2&&(_t.$$scope={dirty:F,ctx:f}),st.$set(_t);const rn={};F&2&&(rn.$$scope={dirty:F,ctx:f}),Kt.$set(rn);const xn={};F&2&&(xn.$$scope={dirty:F,ctx:f}),Qt.$set(xn)},i(f){tn||(y(e.$$.fragment,f),y(o.$$.fragment,f),y(j.$$.fragment,f),y(ke.$$.fragment,f),y(ne.$$.fragment,f),y(ie.$$.fragment,f),y(Re.$$.fragment,f),y(ye.$$.fragment,f),y(Y.$$.fragment,f),y(we.$$.fragment,f),y(Nt.$$.fragment,f),y(A.$$.fragment,f),y(E.$$.fragment,f),y(Ne.$$.fragment,f),y(ht.$$.fragment,f),y(he.$$.fragment,f),y(Ue.$$.fragment,f),y(fe.$$.fragment,f),y(V.$$.fragment,f),y(_e.$$.fragment,f),y(ze.$$.fragment,f),y(Me.$$.fragment,f),y(We.$$.fragment,f),y(ce.$$.fragment,f),y(Xt.$$.fragment,f),y(st.$$.fragment,f),y(qt.$$.fragment,f),y(Zt.$$.fragment,f),y(fn.$$.fragment,f),y(Kt.$$.fragment,f),y(Qt.$$.fragment,f),tn=!0)},o(f){w(e.$$.fragment,f),w(o.$$.fragment,f),w(j.$$.fragment,f),w(ke.$$.fragment,f),w(ne.$$.fragment,f),w(ie.$$.fragment,f),w(Re.$$.fragment,f),w(ye.$$.fragment,f),w(Y.$$.fragment,f),w(we.$$.fragment,f),w(Nt.$$.fragment,f),w(A.$$.fragment,f),w(E.$$.fragment,f),w(Ne.$$.fragment,f),w(ht.$$.fragment,f),w(he.$$.fragment,f),w(Ue.$$.fragment,f),w(fe.$$.fragment,f),w(V.$$.fragment,f),w(_e.$$.fragment,f),w(ze.$$.fragment,f),w(Me.$$.fragment,f),w(We.$$.fragment,f),w(ce.$$.fragment,f),w(Xt.$$.fragment,f),w(st.$$.fragment,f),w(qt.$$.fragment,f),w(Zt.$$.fragment,f),w(fn.$$.fragment,f),w(Kt.$$.fragment,f),w(Qt.$$.fragment,f),tn=!1},d(f){f&&(s(h),s(t),s(Ye),s(He),s(ue),s(vt),s(Le),s(Q),s(Oe),s(Jt),s(oe),s(on),s(Fe),s(se),s(bn),s(wn),s(je)),$(e,f),$(o),$(j),$(ke),$(ne),$(ie,f),$(Re),$(ye),$(Y),$(we),$(Nt,f),$(A),$(E),$(Ne),$(ht),$(he),$(Ue,f),$(fe),$(V),$(_e),$(ze),$(Me,f),$(We),$(ce),$(Xt),$(st),$(qt,f),$(Zt),$(fn),$(Kt),$(Qt)}}}function bo(v){let e,h;return e=new An({props:{$$slots:{default:[Mo]},$$scope:{ctx:v}}}),{c(){b(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p(t,o){const M={};o&2&&(M.$$scope={dirty:o,ctx:t}),e.$set(M)},i(t){h||(y(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){$(e,t)}}}function To(v){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,M="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,Z=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,J,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,P,x,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=p("p"),e.innerHTML=h,t=a(),o=p("ul"),o.innerHTML=M,n=a(),_=p("p"),_.innerHTML=Z,U=a(),J=p("ul"),J.innerHTML=G,P=a(),x=p("p"),x.innerHTML=B},l(l){e=m(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(l),o=m(l,"UL",{"data-svelte-h":!0}),g(o)!=="svelte-qm1t26"&&(o.innerHTML=M),n=r(l),_=m(l,"P",{"data-svelte-h":!0}),g(_)!=="svelte-1v9qsc5"&&(_.innerHTML=Z),U=r(l),J=m(l,"UL",{"data-svelte-h":!0}),g(J)!=="svelte-15scerc"&&(J.innerHTML=G),P=r(l),x=m(l,"P",{"data-svelte-h":!0}),g(x)!=="svelte-1an3odd"&&(x.innerHTML=B)},m(l,j){c(l,e,j),c(l,t,j),c(l,o,j),c(l,n,j),c(l,_,j),c(l,U,j),c(l,J,j),c(l,P,j),c(l,x,j)},p:z,d(l){l&&(s(e),s(t),s(o),s(n),s(_),s(U),s(J),s(P),s(x))}}}function ko(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function yo(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURk1QTmV0TW9kZWwlMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBURk1QTmV0TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFMPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function wo(v){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,M="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,Z=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,J,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,P,x,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=p("p"),e.innerHTML=h,t=a(),o=p("ul"),o.innerHTML=M,n=a(),_=p("p"),_.innerHTML=Z,U=a(),J=p("ul"),J.innerHTML=G,P=a(),x=p("p"),x.innerHTML=B},l(l){e=m(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(l),o=m(l,"UL",{"data-svelte-h":!0}),g(o)!=="svelte-qm1t26"&&(o.innerHTML=M),n=r(l),_=m(l,"P",{"data-svelte-h":!0}),g(_)!=="svelte-1v9qsc5"&&(_.innerHTML=Z),U=r(l),J=m(l,"UL",{"data-svelte-h":!0}),g(J)!=="svelte-15scerc"&&(J.innerHTML=G),P=r(l),x=m(l,"P",{"data-svelte-h":!0}),g(x)!=="svelte-1an3odd"&&(x.innerHTML=B)},m(l,j){c(l,e,j),c(l,t,j),c(l,o,j),c(l,n,j),c(l,_,j),c(l,U,j),c(l,J,j),c(l,P,j),c(l,x,j)},p:z,d(l){l&&(s(e),s(t),s(o),s(n),s(_),s(U),s(J),s(P),s(x))}}}function $o(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function vo(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURk1QTmV0Rm9yTWFza2VkTE0lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBURk1QTmV0Rm9yTWFza2VkTE0uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwJTVCTUFTSyU1RC4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEElMjMlMjByZXRyaWV2ZSUyMGluZGV4JTIwb2YlMjAlNUJNQVNLJTVEJTBBbWFza190b2tlbl9pbmRleCUyMCUzRCUyMHRmLndoZXJlKChpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQpJTVCMCU1RCklMEFzZWxlY3RlZF9sb2dpdHMlMjAlM0QlMjB0Zi5nYXRoZXJfbmQobG9naXRzJTVCMCU1RCUyQyUyMGluZGljZXMlM0RtYXNrX3Rva2VuX2luZGV4KSUwQSUwQXByZWRpY3RlZF90b2tlbl9pZCUyMCUzRCUyMHRmLm1hdGguYXJnbWF4KHNlbGVjdGVkX2xvZ2l0cyUyQyUyMGF4aXMlM0QtMSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFMPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function No(v){let e,h;return e=new Ve({props:{code:"bGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjMlMjBtYXNrJTIwbGFiZWxzJTIwb2YlMjBub24tJTVCTUFTSyU1RCUyMHRva2VucyUwQWxhYmVscyUyMCUzRCUyMHRmLndoZXJlKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCUyQyUyMGxhYmVscyUyQyUyMC0xMDApJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)`,wrap:!1}}),{c(){b(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p:z,i(t){h||(y(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){$(e,t)}}}function Fo(v){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,M="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,Z=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,J,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,P,x,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=p("p"),e.innerHTML=h,t=a(),o=p("ul"),o.innerHTML=M,n=a(),_=p("p"),_.innerHTML=Z,U=a(),J=p("ul"),J.innerHTML=G,P=a(),x=p("p"),x.innerHTML=B},l(l){e=m(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(l),o=m(l,"UL",{"data-svelte-h":!0}),g(o)!=="svelte-qm1t26"&&(o.innerHTML=M),n=r(l),_=m(l,"P",{"data-svelte-h":!0}),g(_)!=="svelte-1v9qsc5"&&(_.innerHTML=Z),U=r(l),J=m(l,"UL",{"data-svelte-h":!0}),g(J)!=="svelte-15scerc"&&(J.innerHTML=G),P=r(l),x=m(l,"P",{"data-svelte-h":!0}),g(x)!=="svelte-1an3odd"&&(x.innerHTML=B)},m(l,j){c(l,e,j),c(l,t,j),c(l,o,j),c(l,n,j),c(l,_,j),c(l,U,j),c(l,J,j),c(l,P,j),c(l,x,j)},p:z,d(l){l&&(s(e),s(t),s(o),s(n),s(_),s(U),s(J),s(P),s(x))}}}function jo(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function Co(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURk1QTmV0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbXBuZXQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFRGTVBOZXRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZtcG5ldC1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KGxvZ2l0cyUyQyUyMGF4aXMlM0QtMSklNUIwJTVEKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFMPNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function Jo(v){let e,h;return e=new Ve({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZNUE5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIlMkMlMjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyklMEElMEFsYWJlbHMlMjAlM0QlMjB0Zi5jb25zdGFudCgxKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`</span>\n<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)\n<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels)\n\n<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)\n<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss',wrap:!1}}),{c(){b(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p:z,i(t){h||(y(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){$(e,t)}}}function xo(v){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,M="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,Z=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,J,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,P,x,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=p("p"),e.innerHTML=h,t=a(),o=p("ul"),o.innerHTML=M,n=a(),_=p("p"),_.innerHTML=Z,U=a(),J=p("ul"),J.innerHTML=G,P=a(),x=p("p"),x.innerHTML=B},l(l){e=m(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(l),o=m(l,"UL",{"data-svelte-h":!0}),g(o)!=="svelte-qm1t26"&&(o.innerHTML=M),n=r(l),_=m(l,"P",{"data-svelte-h":!0}),g(_)!=="svelte-1v9qsc5"&&(_.innerHTML=Z),U=r(l),J=m(l,"UL",{"data-svelte-h":!0}),g(J)!=="svelte-15scerc"&&(J.innerHTML=G),P=r(l),x=m(l,"P",{"data-svelte-h":!0}),g(x)!=="svelte-1an3odd"&&(x.innerHTML=B)},m(l,j){c(l,e,j),c(l,t,j),c(l,o,j),c(l,n,j),c(l,_,j),c(l,U,j),c(l,J,j),c(l,P,j),c(l,x,j)},p:z,d(l){l&&(s(e),s(t),s(o),s(n),s(_),s(U),s(J),s(P),s(x))}}}function Uo(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function Po(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURk1QTmV0Rm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBURk1QTmV0Rm9yTXVsdGlwbGVDaG9pY2UuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglNUJwcm9tcHQlMkMlMjBwcm9tcHQlNUQlMkMlMjAlNUJjaG9pY2UwJTJDJTIwY2hvaWNlMSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSklMEFpbnB1dHMlMjAlM0QlMjAlN0JrJTNBJTIwdGYuZXhwYW5kX2RpbXModiUyQyUyMDApJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFMPNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function zo(v){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,M="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,Z=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,J,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,P,x,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=p("p"),e.innerHTML=h,t=a(),o=p("ul"),o.innerHTML=M,n=a(),_=p("p"),_.innerHTML=Z,U=a(),J=p("ul"),J.innerHTML=G,P=a(),x=p("p"),x.innerHTML=B},l(l){e=m(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(l),o=m(l,"UL",{"data-svelte-h":!0}),g(o)!=="svelte-qm1t26"&&(o.innerHTML=M),n=r(l),_=m(l,"P",{"data-svelte-h":!0}),g(_)!=="svelte-1v9qsc5"&&(_.innerHTML=Z),U=r(l),J=m(l,"UL",{"data-svelte-h":!0}),g(J)!=="svelte-15scerc"&&(J.innerHTML=G),P=r(l),x=m(l,"P",{"data-svelte-h":!0}),g(x)!=="svelte-1an3odd"&&(x.innerHTML=B)},m(l,j){c(l,e,j),c(l,t,j),c(l,o,j),c(l,n,j),c(l,_,j),c(l,U,j),c(l,J,j),c(l,P,j),c(l,x,j)},p:z,d(l){l&&(s(e),s(t),s(o),s(n),s(_),s(U),s(J),s(P),s(x))}}}function Wo(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function Io(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURk1QTmV0Rm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbXBuZXQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFRGTVBOZXRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZtcG5ldC1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTBBKSUwQSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEFwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTIwJTNEJTIwdGYubWF0aC5hcmdtYXgobG9naXRzJTJDJTIwYXhpcyUzRC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0JTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQubnVtcHkoKS50b2xpc3QoKSU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFMPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function qo(v){let e,h;return e=new Ve({props:{code:"bGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)`,wrap:!1}}),{c(){b(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p:z,i(t){h||(y(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){$(e,t)}}}function Zo(v){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,M="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,Z=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,J,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,P,x,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=p("p"),e.innerHTML=h,t=a(),o=p("ul"),o.innerHTML=M,n=a(),_=p("p"),_.innerHTML=Z,U=a(),J=p("ul"),J.innerHTML=G,P=a(),x=p("p"),x.innerHTML=B},l(l){e=m(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=r(l),o=m(l,"UL",{"data-svelte-h":!0}),g(o)!=="svelte-qm1t26"&&(o.innerHTML=M),n=r(l),_=m(l,"P",{"data-svelte-h":!0}),g(_)!=="svelte-1v9qsc5"&&(_.innerHTML=Z),U=r(l),J=m(l,"UL",{"data-svelte-h":!0}),g(J)!=="svelte-15scerc"&&(J.innerHTML=G),P=r(l),x=m(l,"P",{"data-svelte-h":!0}),g(x)!=="svelte-1an3odd"&&(x.innerHTML=B)},m(l,j){c(l,e,j),c(l,t,j),c(l,o,j),c(l,n,j),c(l,_,j),c(l,U,j),c(l,J,j),c(l,P,j),c(l,x,j)},p:z,d(l){l&&(s(e),s(t),s(o),s(n),s(_),s(U),s(J),s(P),s(x))}}}function Go(v){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=h},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){c(t,e,o)},p:z,d(t){t&&s(e)}}}function Bo(v){let e,h="Example:",t,o,M;return o=new Ve({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURk1QTmV0Rm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBURk1QTmV0Rm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRm1wbmV0LWJhc2UlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KG91dHB1dHMuc3RhcnRfbG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChvdXRwdXRzLmVuZF9sb2dpdHMlMkMlMjBheGlzJTNELTEpJTVCMCU1RCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCMCUyQyUyMGFuc3dlcl9zdGFydF9pbmRleCUyMCUzQSUyMGFuc3dlcl9lbmRfaW5kZXglMjAlMkIlMjAxJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFMPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=p("p"),e.textContent=h,t=a(),b(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(n),T(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),k(o,n,_),M=!0},p:z,i(n){M||(y(o.$$.fragment,n),M=!0)},o(n){w(o.$$.fragment,n),M=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function Vo(v){let e,h;return e=new Ve({props:{code:"JTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdGYuY29uc3RhbnQoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRmLmNvbnN0YW50KCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG91dHB1dHMubG9zcyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)`,wrap:!1}}),{c(){b(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p:z,i(t){h||(y(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){$(e,t)}}}function Ho(v){let e,h,t,o,M,n,_="The bare MPNet Model transformer outputting raw hidden-states without any specific head on top.",Z,U,J=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,G,P,x=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,B,l,j,re,te,gn,it,ke='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a> forward method, overrides the <code>__call__</code> special method.',cn,ne,Ye,ie,He,ue,Re,H,S,ye,Vt,wt="MPNet Model with a <code>language modeling</code> head on top.",$t,lt,Y=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,dt,we,vt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Nt,Le,Q,A,ct,$e,Ft,jt='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM">TFMPNetForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',pt,R,mt,ve,Ht,ut,D,E,Ae,X,Xe,pn,Ne,Rt=`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,ht,Ct,he=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Oe,Ue,Jt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,oe,fe,De,L,xt,Ut,Ke,_n='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification">TFMPNetForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Pt,K,nn,ge,le,V,et,Pe,zt,O,_e,Wt,ze,on=`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,Me,Fe,se=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,We,Lt,It=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,ft,Qe,tt,be,u,C,de,ae='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice">TFMPNetForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',ee,ce,Ot,Ie,nt,ot,Xt,pe,st,bn,qt,wn=`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,je,Zt,jn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,mn,Mn,Cn=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,un,sn,$n,me,hn,vn,Ce,fn='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification">TFMPNetForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Nn,gt,Jn,Dt,Kt,en,Qt,tn,f,F,Je,an,qe,at=`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Ee,Te,Gt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Se,Ze,rt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,_t,rn,xn,Bt,Fn,zn,Un,Zn='The <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering">TFMPNetForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Wn,Tn,In,kn,qn,yn,Pn;return e=new xe({props:{title:"TFMPNetModel",local:"transformers.TFMPNetModel",headingTag:"h2"}}),o=new q({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L754"}}),l=new Ge({props:{$$slots:{default:[To]},$$scope:{ctx:v}}}),te=new q({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": Optional[Union[np.array, tf.Tensor]] = None"},{name:"position_ids",val:": Optional[Union[np.array, tf.Tensor]] = None"},{name:"head_mask",val:": Optional[Union[np.array, tf.Tensor]] = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L763",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ne=new Ge({props:{$$slots:{default:[ko]},$$scope:{ctx:v}}}),ie=new Be({props:{anchor:"transformers.TFMPNetModel.call.example",$$slots:{default:[yo]},$$scope:{ctx:v}}}),ue=new xe({props:{title:"TFMPNetForMaskedLM",local:"transformers.TFMPNetForMaskedLM",headingTag:"h2"}}),S=new q({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L864"}}),Le=new Ge({props:{$$slots:{default:[wo]},$$scope:{ctx:v}}}),ct=new q({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L881",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),R=new Ge({props:{$$slots:{default:[$o]},$$scope:{ctx:v}}}),ve=new Be({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example",$$slots:{default:[vo]},$$scope:{ctx:v}}}),ut=new Be({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example-2",$$slots:{default:[No]},$$scope:{ctx:v}}}),E=new xe({props:{title:"TFMPNetForSequenceClassification",local:"transformers.TFMPNetForSequenceClassification",headingTag:"h2"}}),Xe=new q({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L983"}}),fe=new Ge({props:{$$slots:{default:[Fo]},$$scope:{ctx:v}}}),xt=new q({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": Optional[Union[np.array, tf.Tensor]] = None"},{name:"position_ids",val:": Optional[Union[np.array, tf.Tensor]] = None"},{name:"head_mask",val:": Optional[Union[np.array, tf.Tensor]] = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1000",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),K=new Ge({props:{$$slots:{default:[jo]},$$scope:{ctx:v}}}),ge=new Be({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example",$$slots:{default:[Co]},$$scope:{ctx:v}}}),V=new Be({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example-2",$$slots:{default:[Jo]},$$scope:{ctx:v}}}),Pe=new xe({props:{title:"TFMPNetForMultipleChoice",local:"transformers.TFMPNetForMultipleChoice",headingTag:"h2"}}),_e=new q({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1066"}}),Qe=new Ge({props:{$$slots:{default:[xo]},$$scope:{ctx:v}}}),u=new q({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1084",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ce=new Ge({props:{$$slots:{default:[Uo]},$$scope:{ctx:v}}}),Ie=new Be({props:{anchor:"transformers.TFMPNetForMultipleChoice.call.example",$$slots:{default:[Po]},$$scope:{ctx:v}}}),ot=new xe({props:{title:"TFMPNetForTokenClassification",local:"transformers.TFMPNetForTokenClassification",headingTag:"h2"}}),st=new q({props:{name:"class transformers.TFMPNetForTokenClassification",anchor:"transformers.TFMPNetForTokenClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1164"}}),sn=new Ge({props:{$$slots:{default:[zo]},$$scope:{ctx:v}}}),hn=new q({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1185",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),gt=new Ge({props:{$$slots:{default:[Wo]},$$scope:{ctx:v}}}),Dt=new Be({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example",$$slots:{default:[Io]},$$scope:{ctx:v}}}),en=new Be({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example-2",$$slots:{default:[qo]},$$scope:{ctx:v}}}),tn=new xe({props:{title:"TFMPNetForQuestionAnswering",local:"transformers.TFMPNetForQuestionAnswering",headingTag:"h2"}}),Je=new q({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1250"}}),rn=new Ge({props:{$$slots:{default:[Zo]},$$scope:{ctx:v}}}),Fn=new q({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": Optional[Union[np.array, tf.Tensor]] = None"},{name:"position_ids",val:": Optional[Union[np.array, tf.Tensor]] = None"},{name:"head_mask",val:": Optional[Union[np.array, tf.Tensor]] = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"start_positions",val:": tf.Tensor | None = None"},{name:"end_positions",val:": tf.Tensor | None = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1270",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Ge({props:{$$slots:{default:[Go]},$$scope:{ctx:v}}}),kn=new Be({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example",$$slots:{default:[Bo]},$$scope:{ctx:v}}}),yn=new Be({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example-2",$$slots:{default:[Vo]},$$scope:{ctx:v}}}),{c(){b(e.$$.fragment),h=a(),t=p("div"),b(o.$$.fragment),M=a(),n=p("p"),n.textContent=_,Z=a(),U=p("p"),U.innerHTML=J,G=a(),P=p("p"),P.innerHTML=x,B=a(),b(l.$$.fragment),j=a(),re=p("div"),b(te.$$.fragment),gn=a(),it=p("p"),it.innerHTML=ke,cn=a(),b(ne.$$.fragment),Ye=a(),b(ie.$$.fragment),He=a(),b(ue.$$.fragment),Re=a(),H=p("div"),b(S.$$.fragment),ye=a(),Vt=p("p"),Vt.innerHTML=wt,$t=a(),lt=p("p"),lt.innerHTML=Y,dt=a(),we=p("p"),we.innerHTML=vt,Nt=a(),b(Le.$$.fragment),Q=a(),A=p("div"),b(ct.$$.fragment),$e=a(),Ft=p("p"),Ft.innerHTML=jt,pt=a(),b(R.$$.fragment),mt=a(),b(ve.$$.fragment),Ht=a(),b(ut.$$.fragment),D=a(),b(E.$$.fragment),Ae=a(),X=p("div"),b(Xe.$$.fragment),pn=a(),Ne=p("p"),Ne.textContent=Rt,ht=a(),Ct=p("p"),Ct.innerHTML=he,Oe=a(),Ue=p("p"),Ue.innerHTML=Jt,oe=a(),b(fe.$$.fragment),De=a(),L=p("div"),b(xt.$$.fragment),Ut=a(),Ke=p("p"),Ke.innerHTML=_n,Pt=a(),b(K.$$.fragment),nn=a(),b(ge.$$.fragment),le=a(),b(V.$$.fragment),et=a(),b(Pe.$$.fragment),zt=a(),O=p("div"),b(_e.$$.fragment),Wt=a(),ze=p("p"),ze.textContent=on,Me=a(),Fe=p("p"),Fe.innerHTML=se,We=a(),Lt=p("p"),Lt.innerHTML=It,ft=a(),b(Qe.$$.fragment),tt=a(),be=p("div"),b(u.$$.fragment),C=a(),de=p("p"),de.innerHTML=ae,ee=a(),b(ce.$$.fragment),Ot=a(),b(Ie.$$.fragment),nt=a(),b(ot.$$.fragment),Xt=a(),pe=p("div"),b(st.$$.fragment),bn=a(),qt=p("p"),qt.textContent=wn,je=a(),Zt=p("p"),Zt.innerHTML=jn,mn=a(),Mn=p("p"),Mn.innerHTML=Cn,un=a(),b(sn.$$.fragment),$n=a(),me=p("div"),b(hn.$$.fragment),vn=a(),Ce=p("p"),Ce.innerHTML=fn,Nn=a(),b(gt.$$.fragment),Jn=a(),b(Dt.$$.fragment),Kt=a(),b(en.$$.fragment),Qt=a(),b(tn.$$.fragment),f=a(),F=p("div"),b(Je.$$.fragment),an=a(),qe=p("p"),qe.innerHTML=at,Ee=a(),Te=p("p"),Te.innerHTML=Gt,Se=a(),Ze=p("p"),Ze.innerHTML=rt,_t=a(),b(rn.$$.fragment),xn=a(),Bt=p("div"),b(Fn.$$.fragment),zn=a(),Un=p("p"),Un.innerHTML=Zn,Wn=a(),b(Tn.$$.fragment),In=a(),b(kn.$$.fragment),qn=a(),b(yn.$$.fragment),this.h()},l(d){T(e.$$.fragment,d),h=r(d),t=m(d,"DIV",{class:!0});var N=W(t);T(o.$$.fragment,N),M=r(N),n=m(N,"P",{"data-svelte-h":!0}),g(n)!=="svelte-18z6dzf"&&(n.textContent=_),Z=r(N),U=m(N,"P",{"data-svelte-h":!0}),g(U)!=="svelte-1qaxm70"&&(U.innerHTML=J),G=r(N),P=m(N,"P",{"data-svelte-h":!0}),g(P)!=="svelte-1be7e3c"&&(P.innerHTML=x),B=r(N),T(l.$$.fragment,N),j=r(N),re=m(N,"DIV",{class:!0});var ln=W(re);T(te.$$.fragment,ln),gn=r(ln),it=m(ln,"P",{"data-svelte-h":!0}),g(it)!=="svelte-zhd4ot"&&(it.innerHTML=ke),cn=r(ln),T(ne.$$.fragment,ln),Ye=r(ln),T(ie.$$.fragment,ln),ln.forEach(s),N.forEach(s),He=r(d),T(ue.$$.fragment,d),Re=r(d),H=m(d,"DIV",{class:!0});var Mt=W(H);T(S.$$.fragment,Mt),ye=r(Mt),Vt=m(Mt,"P",{"data-svelte-h":!0}),g(Vt)!=="svelte-1f0clxa"&&(Vt.innerHTML=wt),$t=r(Mt),lt=m(Mt,"P",{"data-svelte-h":!0}),g(lt)!=="svelte-1qaxm70"&&(lt.innerHTML=Y),dt=r(Mt),we=m(Mt,"P",{"data-svelte-h":!0}),g(we)!=="svelte-1be7e3c"&&(we.innerHTML=vt),Nt=r(Mt),T(Le.$$.fragment,Mt),Q=r(Mt),A=m(Mt,"DIV",{class:!0});var Et=W(A);T(ct.$$.fragment,Et),$e=r(Et),Ft=m(Et,"P",{"data-svelte-h":!0}),g(Ft)!=="svelte-1r4czbt"&&(Ft.innerHTML=jt),pt=r(Et),T(R.$$.fragment,Et),mt=r(Et),T(ve.$$.fragment,Et),Ht=r(Et),T(ut.$$.fragment,Et),Et.forEach(s),Mt.forEach(s),D=r(d),T(E.$$.fragment,d),Ae=r(d),X=m(d,"DIV",{class:!0});var bt=W(X);T(Xe.$$.fragment,bt),pn=r(bt),Ne=m(bt,"P",{"data-svelte-h":!0}),g(Ne)!=="svelte-i6k3hq"&&(Ne.textContent=Rt),ht=r(bt),Ct=m(bt,"P",{"data-svelte-h":!0}),g(Ct)!=="svelte-1qaxm70"&&(Ct.innerHTML=he),Oe=r(bt),Ue=m(bt,"P",{"data-svelte-h":!0}),g(Ue)!=="svelte-1be7e3c"&&(Ue.innerHTML=Jt),oe=r(bt),T(fe.$$.fragment,bt),De=r(bt),L=m(bt,"DIV",{class:!0});var St=W(L);T(xt.$$.fragment,St),Ut=r(St),Ke=m(St,"P",{"data-svelte-h":!0}),g(Ke)!=="svelte-1blr2yf"&&(Ke.innerHTML=_n),Pt=r(St),T(K.$$.fragment,St),nn=r(St),T(ge.$$.fragment,St),le=r(St),T(V.$$.fragment,St),St.forEach(s),bt.forEach(s),et=r(d),T(Pe.$$.fragment,d),zt=r(d),O=m(d,"DIV",{class:!0});var Tt=W(O);T(_e.$$.fragment,Tt),Wt=r(Tt),ze=m(Tt,"P",{"data-svelte-h":!0}),g(ze)!=="svelte-122dfbe"&&(ze.textContent=on),Me=r(Tt),Fe=m(Tt,"P",{"data-svelte-h":!0}),g(Fe)!=="svelte-1qaxm70"&&(Fe.innerHTML=se),We=r(Tt),Lt=m(Tt,"P",{"data-svelte-h":!0}),g(Lt)!=="svelte-1be7e3c"&&(Lt.innerHTML=It),ft=r(Tt),T(Qe.$$.fragment,Tt),tt=r(Tt),be=m(Tt,"DIV",{class:!0});var dn=W(be);T(u.$$.fragment,dn),C=r(dn),de=m(dn,"P",{"data-svelte-h":!0}),g(de)!=="svelte-kdfdhf"&&(de.innerHTML=ae),ee=r(dn),T(ce.$$.fragment,dn),Ot=r(dn),T(Ie.$$.fragment,dn),dn.forEach(s),Tt.forEach(s),nt=r(d),T(ot.$$.fragment,d),Xt=r(d),pe=m(d,"DIV",{class:!0});var kt=W(pe);T(st.$$.fragment,kt),bn=r(kt),qt=m(kt,"P",{"data-svelte-h":!0}),g(qt)!=="svelte-jf6sz7"&&(qt.textContent=wn),je=r(kt),Zt=m(kt,"P",{"data-svelte-h":!0}),g(Zt)!=="svelte-1qaxm70"&&(Zt.innerHTML=jn),mn=r(kt),Mn=m(kt,"P",{"data-svelte-h":!0}),g(Mn)!=="svelte-1be7e3c"&&(Mn.innerHTML=Cn),un=r(kt),T(sn.$$.fragment,kt),$n=r(kt),me=m(kt,"DIV",{class:!0});var Yt=W(me);T(hn.$$.fragment,Yt),vn=r(Yt),Ce=m(Yt,"P",{"data-svelte-h":!0}),g(Ce)!=="svelte-d3q07z"&&(Ce.innerHTML=fn),Nn=r(Yt),T(gt.$$.fragment,Yt),Jn=r(Yt),T(Dt.$$.fragment,Yt),Kt=r(Yt),T(en.$$.fragment,Yt),Yt.forEach(s),kt.forEach(s),Qt=r(d),T(tn.$$.fragment,d),f=r(d),F=m(d,"DIV",{class:!0});var yt=W(F);T(Je.$$.fragment,yt),an=r(yt),qe=m(yt,"P",{"data-svelte-h":!0}),g(qe)!=="svelte-1gkqfqt"&&(qe.innerHTML=at),Ee=r(yt),Te=m(yt,"P",{"data-svelte-h":!0}),g(Te)!=="svelte-1qaxm70"&&(Te.innerHTML=Gt),Se=r(yt),Ze=m(yt,"P",{"data-svelte-h":!0}),g(Ze)!=="svelte-1be7e3c"&&(Ze.innerHTML=rt),_t=r(yt),T(rn.$$.fragment,yt),xn=r(yt),Bt=m(yt,"DIV",{class:!0});var At=W(Bt);T(Fn.$$.fragment,At),zn=r(At),Un=m(At,"P",{"data-svelte-h":!0}),g(Un)!=="svelte-fpr08v"&&(Un.innerHTML=Zn),Wn=r(At),T(Tn.$$.fragment,At),In=r(At),T(kn.$$.fragment,At),qn=r(At),T(yn.$$.fragment,At),At.forEach(s),yt.forEach(s),this.h()},h(){I(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(d,N){k(e,d,N),c(d,h,N),c(d,t,N),k(o,t,null),i(t,M),i(t,n),i(t,Z),i(t,U),i(t,G),i(t,P),i(t,B),k(l,t,null),i(t,j),i(t,re),k(te,re,null),i(re,gn),i(re,it),i(re,cn),k(ne,re,null),i(re,Ye),k(ie,re,null),c(d,He,N),k(ue,d,N),c(d,Re,N),c(d,H,N),k(S,H,null),i(H,ye),i(H,Vt),i(H,$t),i(H,lt),i(H,dt),i(H,we),i(H,Nt),k(Le,H,null),i(H,Q),i(H,A),k(ct,A,null),i(A,$e),i(A,Ft),i(A,pt),k(R,A,null),i(A,mt),k(ve,A,null),i(A,Ht),k(ut,A,null),c(d,D,N),k(E,d,N),c(d,Ae,N),c(d,X,N),k(Xe,X,null),i(X,pn),i(X,Ne),i(X,ht),i(X,Ct),i(X,Oe),i(X,Ue),i(X,oe),k(fe,X,null),i(X,De),i(X,L),k(xt,L,null),i(L,Ut),i(L,Ke),i(L,Pt),k(K,L,null),i(L,nn),k(ge,L,null),i(L,le),k(V,L,null),c(d,et,N),k(Pe,d,N),c(d,zt,N),c(d,O,N),k(_e,O,null),i(O,Wt),i(O,ze),i(O,Me),i(O,Fe),i(O,We),i(O,Lt),i(O,ft),k(Qe,O,null),i(O,tt),i(O,be),k(u,be,null),i(be,C),i(be,de),i(be,ee),k(ce,be,null),i(be,Ot),k(Ie,be,null),c(d,nt,N),k(ot,d,N),c(d,Xt,N),c(d,pe,N),k(st,pe,null),i(pe,bn),i(pe,qt),i(pe,je),i(pe,Zt),i(pe,mn),i(pe,Mn),i(pe,un),k(sn,pe,null),i(pe,$n),i(pe,me),k(hn,me,null),i(me,vn),i(me,Ce),i(me,Nn),k(gt,me,null),i(me,Jn),k(Dt,me,null),i(me,Kt),k(en,me,null),c(d,Qt,N),k(tn,d,N),c(d,f,N),c(d,F,N),k(Je,F,null),i(F,an),i(F,qe),i(F,Ee),i(F,Te),i(F,Se),i(F,Ze),i(F,_t),k(rn,F,null),i(F,xn),i(F,Bt),k(Fn,Bt,null),i(Bt,zn),i(Bt,Un),i(Bt,Wn),k(Tn,Bt,null),i(Bt,In),k(kn,Bt,null),i(Bt,qn),k(yn,Bt,null),Pn=!0},p(d,N){const ln={};N&2&&(ln.$$scope={dirty:N,ctx:d}),l.$set(ln);const Mt={};N&2&&(Mt.$$scope={dirty:N,ctx:d}),ne.$set(Mt);const Et={};N&2&&(Et.$$scope={dirty:N,ctx:d}),ie.$set(Et);const bt={};N&2&&(bt.$$scope={dirty:N,ctx:d}),Le.$set(bt);const St={};N&2&&(St.$$scope={dirty:N,ctx:d}),R.$set(St);const Tt={};N&2&&(Tt.$$scope={dirty:N,ctx:d}),ve.$set(Tt);const dn={};N&2&&(dn.$$scope={dirty:N,ctx:d}),ut.$set(dn);const kt={};N&2&&(kt.$$scope={dirty:N,ctx:d}),fe.$set(kt);const Yt={};N&2&&(Yt.$$scope={dirty:N,ctx:d}),K.$set(Yt);const yt={};N&2&&(yt.$$scope={dirty:N,ctx:d}),ge.$set(yt);const At={};N&2&&(At.$$scope={dirty:N,ctx:d}),V.$set(At);const Gn={};N&2&&(Gn.$$scope={dirty:N,ctx:d}),Qe.$set(Gn);const Bn={};N&2&&(Bn.$$scope={dirty:N,ctx:d}),ce.$set(Bn);const Vn={};N&2&&(Vn.$$scope={dirty:N,ctx:d}),Ie.$set(Vn);const Hn={};N&2&&(Hn.$$scope={dirty:N,ctx:d}),sn.$set(Hn);const Rn={};N&2&&(Rn.$$scope={dirty:N,ctx:d}),gt.$set(Rn);const Ln={};N&2&&(Ln.$$scope={dirty:N,ctx:d}),Dt.$set(Ln);const Xn={};N&2&&(Xn.$$scope={dirty:N,ctx:d}),en.$set(Xn);const Qn={};N&2&&(Qn.$$scope={dirty:N,ctx:d}),rn.$set(Qn);const En={};N&2&&(En.$$scope={dirty:N,ctx:d}),Tn.$set(En);const Sn={};N&2&&(Sn.$$scope={dirty:N,ctx:d}),kn.$set(Sn);const Yn={};N&2&&(Yn.$$scope={dirty:N,ctx:d}),yn.$set(Yn)},i(d){Pn||(y(e.$$.fragment,d),y(o.$$.fragment,d),y(l.$$.fragment,d),y(te.$$.fragment,d),y(ne.$$.fragment,d),y(ie.$$.fragment,d),y(ue.$$.fragment,d),y(S.$$.fragment,d),y(Le.$$.fragment,d),y(ct.$$.fragment,d),y(R.$$.fragment,d),y(ve.$$.fragment,d),y(ut.$$.fragment,d),y(E.$$.fragment,d),y(Xe.$$.fragment,d),y(fe.$$.fragment,d),y(xt.$$.fragment,d),y(K.$$.fragment,d),y(ge.$$.fragment,d),y(V.$$.fragment,d),y(Pe.$$.fragment,d),y(_e.$$.fragment,d),y(Qe.$$.fragment,d),y(u.$$.fragment,d),y(ce.$$.fragment,d),y(Ie.$$.fragment,d),y(ot.$$.fragment,d),y(st.$$.fragment,d),y(sn.$$.fragment,d),y(hn.$$.fragment,d),y(gt.$$.fragment,d),y(Dt.$$.fragment,d),y(en.$$.fragment,d),y(tn.$$.fragment,d),y(Je.$$.fragment,d),y(rn.$$.fragment,d),y(Fn.$$.fragment,d),y(Tn.$$.fragment,d),y(kn.$$.fragment,d),y(yn.$$.fragment,d),Pn=!0)},o(d){w(e.$$.fragment,d),w(o.$$.fragment,d),w(l.$$.fragment,d),w(te.$$.fragment,d),w(ne.$$.fragment,d),w(ie.$$.fragment,d),w(ue.$$.fragment,d),w(S.$$.fragment,d),w(Le.$$.fragment,d),w(ct.$$.fragment,d),w(R.$$.fragment,d),w(ve.$$.fragment,d),w(ut.$$.fragment,d),w(E.$$.fragment,d),w(Xe.$$.fragment,d),w(fe.$$.fragment,d),w(xt.$$.fragment,d),w(K.$$.fragment,d),w(ge.$$.fragment,d),w(V.$$.fragment,d),w(Pe.$$.fragment,d),w(_e.$$.fragment,d),w(Qe.$$.fragment,d),w(u.$$.fragment,d),w(ce.$$.fragment,d),w(Ie.$$.fragment,d),w(ot.$$.fragment,d),w(st.$$.fragment,d),w(sn.$$.fragment,d),w(hn.$$.fragment,d),w(gt.$$.fragment,d),w(Dt.$$.fragment,d),w(en.$$.fragment,d),w(tn.$$.fragment,d),w(Je.$$.fragment,d),w(rn.$$.fragment,d),w(Fn.$$.fragment,d),w(Tn.$$.fragment,d),w(kn.$$.fragment,d),w(yn.$$.fragment,d),Pn=!1},d(d){d&&(s(h),s(t),s(He),s(Re),s(H),s(D),s(Ae),s(X),s(et),s(zt),s(O),s(nt),s(Xt),s(pe),s(Qt),s(f),s(F)),$(e,d),$(o),$(l),$(te),$(ne),$(ie),$(ue,d),$(S),$(Le),$(ct),$(R),$(ve),$(ut),$(E,d),$(Xe),$(fe),$(xt),$(K),$(ge),$(V),$(Pe,d),$(_e),$(Qe),$(u),$(ce),$(Ie),$(ot,d),$(st),$(sn),$(hn),$(gt),$(Dt),$(en),$(tn,d),$(Je),$(rn),$(Fn),$(Tn),$(kn),$(yn)}}}function Ro(v){let e,h;return e=new An({props:{$$slots:{default:[Ho]},$$scope:{ctx:v}}}),{c(){b(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,o){k(e,t,o),h=!0},p(t,o){const M={};o&2&&(M.$$scope={dirty:o,ctx:t}),e.$set(M)},i(t){h||(y(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){$(e,t)}}}function Lo(v){let e,h,t,o,M,n,_,Z,U,J='The MPNet model was proposed in <a href="https://arxiv.org/abs/2004.09297" rel="nofollow">MPNet: Masked and Permuted Pre-training for Language Understanding</a> by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu.',G,P,x=`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`,B,l,j="The abstract from the paper is the following:",re,te,gn=`<em>BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.</em>`,it,ke,cn='The original code can be found <a href="https://github.com/microsoft/MPNet" rel="nofollow">here</a>.',ne,Ye,ie,He,ue=`MPNet doesn’t have <code>token_type_ids</code>, you don’t need to indicate which token belongs to which segment. Just
separate your segments with the separation token <code>tokenizer.sep_token</code> (or <code>[sep]</code>).`,Re,H,S,ye,Vt='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',wt,$t,lt,Y,dt,we,vt,Nt=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or a <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
<a href="https://huggingface.co/microsoft/mpnet-base" rel="nofollow">microsoft/mpnet-base</a> architecture.`,Le,Q,A=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,ct,$e,Ft,jt,pt,R,mt,ve,Ht,ut=`This tokenizer inherits from <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a> which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`,D,E,Ae,X,Xe,pn=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`,Ne,Rt,ht="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",Ct,he,Oe,Ue,Jt,oe=`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> methods.`,fe,De,L,xt,Ut,Ke=`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`,_n,Pt,K,nn,ge,le,V,et,Pe,zt,O="Construct a “fast” MPNet tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on WordPiece.",_e,Wt,ze=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,on,Me,Fe,se,We,Lt=`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`,It,ft,Qe,tt,be;return M=new xe({props:{title:"MPNet",local:"mpnet",headingTag:"h1"}}),_=new xe({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Ye=new xe({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),H=new xe({props:{title:"Resources",local:"resources",headingTag:"h2"}}),$t=new xe({props:{title:"MPNetConfig",local:"transformers.MPNetConfig",headingTag:"h2"}}),dt=new q({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
Vocabulary size of the MPNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.MPNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MPNetConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MPNetConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MPNetConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MPNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MPNetConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MPNetConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MPNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MPNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MPNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MPNetConfig.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/configuration_mpnet.py#L29"}}),$e=new Be({props:{anchor:"transformers.MPNetConfig.example",$$slots:{default:[oo]},$$scope:{ctx:v}}}),jt=new xe({props:{title:"MPNetTokenizer",local:"transformers.MPNetTokenizer",headingTag:"h2"}}),mt=new q({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MPNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MPNetTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.MPNetTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.MPNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MPNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MPNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MPNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MPNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MPNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MPNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MPNetTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.MPNetTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L66"}}),Ae=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L233",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Oe=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.MPNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L258",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),L=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L285",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),K=new q({props:{name:"save_vocabulary",anchor:"transformers.MPNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L308"}}),ge=new xe({props:{title:"MPNetTokenizerFast",local:"transformers.MPNetTokenizerFast",headingTag:"h2"}}),et=new q({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.MPNetTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MPNetTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MPNetTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MPNetTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MPNetTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MPNetTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MPNetTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MPNetTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MPNetTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.MPNetTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L51"}}),Fe=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L201",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ft=new no({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Ro],pytorch:[bo]},$$scope:{ctx:v}}}),{c(){e=p("meta"),h=a(),t=p("p"),o=a(),b(M.$$.fragment),n=a(),b(_.$$.fragment),Z=a(),U=p("p"),U.innerHTML=J,G=a(),P=p("p"),P.textContent=x,B=a(),l=p("p"),l.textContent=j,re=a(),te=p("p"),te.innerHTML=gn,it=a(),ke=p("p"),ke.innerHTML=cn,ne=a(),b(Ye.$$.fragment),ie=a(),He=p("p"),He.innerHTML=ue,Re=a(),b(H.$$.fragment),S=a(),ye=p("ul"),ye.innerHTML=Vt,wt=a(),b($t.$$.fragment),lt=a(),Y=p("div"),b(dt.$$.fragment),we=a(),vt=p("p"),vt.innerHTML=Nt,Le=a(),Q=p("p"),Q.innerHTML=A,ct=a(),b($e.$$.fragment),Ft=a(),b(jt.$$.fragment),pt=a(),R=p("div"),b(mt.$$.fragment),ve=a(),Ht=p("p"),Ht.innerHTML=ut,D=a(),E=p("div"),b(Ae.$$.fragment),X=a(),Xe=p("p"),Xe.textContent=pn,Ne=a(),Rt=p("ul"),Rt.innerHTML=ht,Ct=a(),he=p("div"),b(Oe.$$.fragment),Ue=a(),Jt=p("p"),Jt.innerHTML=oe,fe=a(),De=p("div"),b(L.$$.fragment),xt=a(),Ut=p("p"),Ut.textContent=Ke,_n=a(),Pt=p("div"),b(K.$$.fragment),nn=a(),b(ge.$$.fragment),le=a(),V=p("div"),b(et.$$.fragment),Pe=a(),zt=p("p"),zt.innerHTML=O,_e=a(),Wt=p("p"),Wt.innerHTML=ze,on=a(),Me=p("div"),b(Fe.$$.fragment),se=a(),We=p("p"),We.textContent=Lt,It=a(),b(ft.$$.fragment),Qe=a(),tt=p("p"),this.h()},l(u){const C=to("svelte-u9bgzb",document.head);e=m(C,"META",{name:!0,content:!0}),C.forEach(s),h=r(u),t=m(u,"P",{}),W(t).forEach(s),o=r(u),T(M.$$.fragment,u),n=r(u),T(_.$$.fragment,u),Z=r(u),U=m(u,"P",{"data-svelte-h":!0}),g(U)!=="svelte-11q3n4n"&&(U.innerHTML=J),G=r(u),P=m(u,"P",{"data-svelte-h":!0}),g(P)!=="svelte-nhc0f1"&&(P.textContent=x),B=r(u),l=m(u,"P",{"data-svelte-h":!0}),g(l)!=="svelte-vfdo9a"&&(l.textContent=j),re=r(u),te=m(u,"P",{"data-svelte-h":!0}),g(te)!=="svelte-1jkkhrp"&&(te.innerHTML=gn),it=r(u),ke=m(u,"P",{"data-svelte-h":!0}),g(ke)!=="svelte-1xcjgnq"&&(ke.innerHTML=cn),ne=r(u),T(Ye.$$.fragment,u),ie=r(u),He=m(u,"P",{"data-svelte-h":!0}),g(He)!=="svelte-pcnnpr"&&(He.innerHTML=ue),Re=r(u),T(H.$$.fragment,u),S=r(u),ye=m(u,"UL",{"data-svelte-h":!0}),g(ye)!=="svelte-mgusi3"&&(ye.innerHTML=Vt),wt=r(u),T($t.$$.fragment,u),lt=r(u),Y=m(u,"DIV",{class:!0});var de=W(Y);T(dt.$$.fragment,de),we=r(de),vt=m(de,"P",{"data-svelte-h":!0}),g(vt)!=="svelte-1o7gpw0"&&(vt.innerHTML=Nt),Le=r(de),Q=m(de,"P",{"data-svelte-h":!0}),g(Q)!=="svelte-o55m63"&&(Q.innerHTML=A),ct=r(de),T($e.$$.fragment,de),de.forEach(s),Ft=r(u),T(jt.$$.fragment,u),pt=r(u),R=m(u,"DIV",{class:!0});var ae=W(R);T(mt.$$.fragment,ae),ve=r(ae),Ht=m(ae,"P",{"data-svelte-h":!0}),g(Ht)!=="svelte-1rj23n1"&&(Ht.innerHTML=ut),D=r(ae),E=m(ae,"DIV",{class:!0});var ee=W(E);T(Ae.$$.fragment,ee),X=r(ee),Xe=m(ee,"P",{"data-svelte-h":!0}),g(Xe)!=="svelte-e3idx9"&&(Xe.textContent=pn),Ne=r(ee),Rt=m(ee,"UL",{"data-svelte-h":!0}),g(Rt)!=="svelte-rq8uot"&&(Rt.innerHTML=ht),ee.forEach(s),Ct=r(ae),he=m(ae,"DIV",{class:!0});var ce=W(he);T(Oe.$$.fragment,ce),Ue=r(ce),Jt=m(ce,"P",{"data-svelte-h":!0}),g(Jt)!=="svelte-rsgabl"&&(Jt.innerHTML=oe),ce.forEach(s),fe=r(ae),De=m(ae,"DIV",{class:!0});var Ot=W(De);T(L.$$.fragment,Ot),xt=r(Ot),Ut=m(Ot,"P",{"data-svelte-h":!0}),g(Ut)!=="svelte-55gsom"&&(Ut.textContent=Ke),Ot.forEach(s),_n=r(ae),Pt=m(ae,"DIV",{class:!0});var Ie=W(Pt);T(K.$$.fragment,Ie),Ie.forEach(s),ae.forEach(s),nn=r(u),T(ge.$$.fragment,u),le=r(u),V=m(u,"DIV",{class:!0});var nt=W(V);T(et.$$.fragment,nt),Pe=r(nt),zt=m(nt,"P",{"data-svelte-h":!0}),g(zt)!=="svelte-lg4gj2"&&(zt.innerHTML=O),_e=r(nt),Wt=m(nt,"P",{"data-svelte-h":!0}),g(Wt)!=="svelte-fh0aq"&&(Wt.innerHTML=ze),on=r(nt),Me=m(nt,"DIV",{class:!0});var ot=W(Me);T(Fe.$$.fragment,ot),se=r(ot),We=m(ot,"P",{"data-svelte-h":!0}),g(We)!=="svelte-442qh0"&&(We.textContent=Lt),ot.forEach(s),nt.forEach(s),It=r(u),T(ft.$$.fragment,u),Qe=r(u),tt=m(u,"P",{}),W(tt).forEach(s),this.h()},h(){I(e,"name","hf:doc:metadata"),I(e,"content",Xo),I(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(u,C){i(document.head,e),c(u,h,C),c(u,t,C),c(u,o,C),k(M,u,C),c(u,n,C),k(_,u,C),c(u,Z,C),c(u,U,C),c(u,G,C),c(u,P,C),c(u,B,C),c(u,l,C),c(u,re,C),c(u,te,C),c(u,it,C),c(u,ke,C),c(u,ne,C),k(Ye,u,C),c(u,ie,C),c(u,He,C),c(u,Re,C),k(H,u,C),c(u,S,C),c(u,ye,C),c(u,wt,C),k($t,u,C),c(u,lt,C),c(u,Y,C),k(dt,Y,null),i(Y,we),i(Y,vt),i(Y,Le),i(Y,Q),i(Y,ct),k($e,Y,null),c(u,Ft,C),k(jt,u,C),c(u,pt,C),c(u,R,C),k(mt,R,null),i(R,ve),i(R,Ht),i(R,D),i(R,E),k(Ae,E,null),i(E,X),i(E,Xe),i(E,Ne),i(E,Rt),i(R,Ct),i(R,he),k(Oe,he,null),i(he,Ue),i(he,Jt),i(R,fe),i(R,De),k(L,De,null),i(De,xt),i(De,Ut),i(R,_n),i(R,Pt),k(K,Pt,null),c(u,nn,C),k(ge,u,C),c(u,le,C),c(u,V,C),k(et,V,null),i(V,Pe),i(V,zt),i(V,_e),i(V,Wt),i(V,on),i(V,Me),k(Fe,Me,null),i(Me,se),i(Me,We),c(u,It,C),k(ft,u,C),c(u,Qe,C),c(u,tt,C),be=!0},p(u,[C]){const de={};C&2&&(de.$$scope={dirty:C,ctx:u}),$e.$set(de);const ae={};C&2&&(ae.$$scope={dirty:C,ctx:u}),ft.$set(ae)},i(u){be||(y(M.$$.fragment,u),y(_.$$.fragment,u),y(Ye.$$.fragment,u),y(H.$$.fragment,u),y($t.$$.fragment,u),y(dt.$$.fragment,u),y($e.$$.fragment,u),y(jt.$$.fragment,u),y(mt.$$.fragment,u),y(Ae.$$.fragment,u),y(Oe.$$.fragment,u),y(L.$$.fragment,u),y(K.$$.fragment,u),y(ge.$$.fragment,u),y(et.$$.fragment,u),y(Fe.$$.fragment,u),y(ft.$$.fragment,u),be=!0)},o(u){w(M.$$.fragment,u),w(_.$$.fragment,u),w(Ye.$$.fragment,u),w(H.$$.fragment,u),w($t.$$.fragment,u),w(dt.$$.fragment,u),w($e.$$.fragment,u),w(jt.$$.fragment,u),w(mt.$$.fragment,u),w(Ae.$$.fragment,u),w(Oe.$$.fragment,u),w(L.$$.fragment,u),w(K.$$.fragment,u),w(ge.$$.fragment,u),w(et.$$.fragment,u),w(Fe.$$.fragment,u),w(ft.$$.fragment,u),be=!1},d(u){u&&(s(h),s(t),s(o),s(n),s(Z),s(U),s(G),s(P),s(B),s(l),s(re),s(te),s(it),s(ke),s(ne),s(ie),s(He),s(Re),s(S),s(ye),s(wt),s(lt),s(Y),s(Ft),s(pt),s(R),s(nn),s(le),s(V),s(It),s(Qe),s(tt)),s(e),$(M,u),$(_,u),$(Ye,u),$(H,u),$($t,u),$(dt),$($e),$(jt,u),$(mt),$(Ae),$(Oe),$(L),$(K),$(ge,u),$(et),$(Fe),$(ft,u)}}}const Xo='{"title":"MPNet","local":"mpnet","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"MPNetConfig","local":"transformers.MPNetConfig","sections":[],"depth":2},{"title":"MPNetTokenizer","local":"transformers.MPNetTokenizer","sections":[],"depth":2},{"title":"MPNetTokenizerFast","local":"transformers.MPNetTokenizerFast","sections":[],"depth":2},{"title":"MPNetModel","local":"transformers.MPNetModel","sections":[],"depth":2},{"title":"MPNetForMaskedLM","local":"transformers.MPNetForMaskedLM","sections":[],"depth":2},{"title":"MPNetForSequenceClassification","local":"transformers.MPNetForSequenceClassification","sections":[],"depth":2},{"title":"MPNetForMultipleChoice","local":"transformers.MPNetForMultipleChoice","sections":[],"depth":2},{"title":"MPNetForTokenClassification","local":"transformers.MPNetForTokenClassification","sections":[],"depth":2},{"title":"MPNetForQuestionAnswering","local":"transformers.MPNetForQuestionAnswering","sections":[],"depth":2},{"title":"TFMPNetModel","local":"transformers.TFMPNetModel","sections":[],"depth":2},{"title":"TFMPNetForMaskedLM","local":"transformers.TFMPNetForMaskedLM","sections":[],"depth":2},{"title":"TFMPNetForSequenceClassification","local":"transformers.TFMPNetForSequenceClassification","sections":[],"depth":2},{"title":"TFMPNetForMultipleChoice","local":"transformers.TFMPNetForMultipleChoice","sections":[],"depth":2},{"title":"TFMPNetForTokenClassification","local":"transformers.TFMPNetForTokenClassification","sections":[],"depth":2},{"title":"TFMPNetForQuestionAnswering","local":"transformers.TFMPNetForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function Qo(v){return Dn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ts extends Kn{constructor(e){super(),eo(this,e,Qo,Lo,On,{})}}export{ts as component};
