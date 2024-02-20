import{s as zn,f as jn,o as Un,n as E}from"../chunks/scheduler.9bc65507.js";import{S as qn,i as Wn,g as m,s as a,r as u,A as Zn,h as p,f as s,c as r,j as G,u as f,x as h,k as $,y as c,a as i,v as g,d as _,t as b,w as T}from"../chunks/index.707bf1b6.js";import{T as Lt}from"../chunks/Tip.c2ecdbf4.js";import{D as B}from"../chunks/Docstring.17db21ae.js";import{C as Pe}from"../chunks/CodeBlock.54a9f38d.js";import{E as Ye}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Q}from"../chunks/Heading.342b1fa6.js";function In(k){let n,w="Examples:",l,d,y;return d=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExpbHRDb25maWclMkMlMjBMaWx0TW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwTGlMVCUyMFNDVVQtRExWQ0xhYiUyRmxpbHQtcm9iZXJ0YS1lbi1iYXNlJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMExpbHRDb25maWcoKSUwQSUyMyUyMFJhbmRvbWx5JTIwaW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwZnJvbSUyMHRoZSUyMFNDVVQtRExWQ0xhYiUyRmxpbHQtcm9iZXJ0YS1lbi1iYXNlJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBMaWx0TW9kZWwoY29uZmlndXJhdGlvbiklMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LiltConfig, LiltModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LiLT SCUT-DLVCLab/lilt-roberta-en-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LiltConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Randomly initializing a model from the SCUT-DLVCLab/lilt-roberta-en-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LiltModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){n=m("p"),n.textContent=w,l=a(),u(d.$$.fragment)},l(o){n=p(o,"P",{"data-svelte-h":!0}),h(n)!=="svelte-kvfsh7"&&(n.textContent=w),l=r(o),f(d.$$.fragment,o)},m(o,M){i(o,n,M),i(o,l,M),g(d,o,M),y=!0},p:E,i(o){y||(_(d.$$.fragment,o),y=!0)},o(o){b(d.$$.fragment,o),y=!1},d(o){o&&(s(n),s(l)),T(d,o)}}}function Rn(k){let n,w=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=m("p"),n.innerHTML=w},l(l){n=p(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=w)},m(l,d){i(l,n,d)},p:E,d(l){l&&s(n)}}}function Vn(k){let n,w="Examples:",l,d,y;return d=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBdXRvTW9kZWwlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJTQ1VULURMVkNMYWIlMkZsaWx0LXJvYmVydGEtZW4tYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyU0NVVC1ETFZDTGFiJTJGbGlsdC1yb2JlcnRhLWVuLWJhc2UlMjIpJTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJuaWVsc3IlMkZmdW5zZC1sYXlvdXRsbXYzJTIyJTJDJTIwc3BsaXQlM0QlMjJ0cmFpbiUyMiklMEFleGFtcGxlJTIwJTNEJTIwZGF0YXNldCU1QjAlNUQlMEF3b3JkcyUyMCUzRCUyMGV4YW1wbGUlNUIlMjJ0b2tlbnMlMjIlNUQlMEFib3hlcyUyMCUzRCUyMGV4YW1wbGUlNUIlMjJiYm94ZXMlMjIlNUQlMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplcih3b3JkcyUyQyUyMGJveGVzJTNEYm94ZXMlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmVuY29kaW5nKSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){n=m("p"),n.textContent=w,l=a(),u(d.$$.fragment)},l(o){n=p(o,"P",{"data-svelte-h":!0}),h(n)!=="svelte-kvfsh7"&&(n.textContent=w),l=r(o),f(d.$$.fragment,o)},m(o,M){i(o,n,M),i(o,l,M),g(d,o,M),y=!0},p:E,i(o){y||(_(d.$$.fragment,o),y=!0)},o(o){b(d.$$.fragment,o),y=!1},d(o){o&&(s(n),s(l)),T(d,o)}}}function Xn(k){let n,w=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=m("p"),n.innerHTML=w},l(l){n=p(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=w)},m(l,d){i(l,n,d)},p:E,d(l){l&&s(n)}}}function Nn(k){let n,w="Examples:",l,d,y;return d=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBdXRvTW9kZWxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyU0NVVC1ETFZDTGFiJTJGbGlsdC1yb2JlcnRhLWVuLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBBdXRvTW9kZWxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJTQ1VULURMVkNMYWIlMkZsaWx0LXJvYmVydGEtZW4tYmFzZSUyMiklMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMm5pZWxzciUyRmZ1bnNkLWxheW91dGxtdjMlMjIlMkMlMjBzcGxpdCUzRCUyMnRyYWluJTIyKSUwQWV4YW1wbGUlMjAlM0QlMjBkYXRhc2V0JTVCMCU1RCUwQXdvcmRzJTIwJTNEJTIwZXhhbXBsZSU1QiUyMnRva2VucyUyMiU1RCUwQWJveGVzJTIwJTNEJTIwZXhhbXBsZSU1QiUyMmJib3hlcyUyMiU1RCUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKHdvcmRzJTJDJTIwYm94ZXMlM0Rib3hlcyUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmcpJTBBcHJlZGljdGVkX2NsYXNzX2lkeCUyMCUzRCUyMG91dHB1dHMubG9naXRzLmFyZ21heCgtMSkuaXRlbSgpJTBBcHJlZGljdGVkX2NsYXNzJTIwJTNEJTIwbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCcHJlZGljdGVkX2NsYXNzX2lkeCU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = outputs.logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class = model.config.id2label[predicted_class_idx]`,wrap:!1}}),{c(){n=m("p"),n.textContent=w,l=a(),u(d.$$.fragment)},l(o){n=p(o,"P",{"data-svelte-h":!0}),h(n)!=="svelte-kvfsh7"&&(n.textContent=w),l=r(o),f(d.$$.fragment,o)},m(o,M){i(o,n,M),i(o,l,M),g(d,o,M),y=!0},p:E,i(o){y||(_(d.$$.fragment,o),y=!0)},o(o){b(d.$$.fragment,o),y=!1},d(o){o&&(s(n),s(l)),T(d,o)}}}function Gn(k){let n,w=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=m("p"),n.innerHTML=w},l(l){n=p(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=w)},m(l,d){i(l,n,d)},p:E,d(l){l&&s(n)}}}function Sn(k){let n,w="Examples:",l,d,y;return d=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBdXRvTW9kZWxGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyU0NVVC1ETFZDTGFiJTJGbGlsdC1yb2JlcnRhLWVuLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBBdXRvTW9kZWxGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJTQ1VULURMVkNMYWIlMkZsaWx0LXJvYmVydGEtZW4tYmFzZSUyMiklMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMm5pZWxzciUyRmZ1bnNkLWxheW91dGxtdjMlMjIlMkMlMjBzcGxpdCUzRCUyMnRyYWluJTIyKSUwQWV4YW1wbGUlMjAlM0QlMjBkYXRhc2V0JTVCMCU1RCUwQXdvcmRzJTIwJTNEJTIwZXhhbXBsZSU1QiUyMnRva2VucyUyMiU1RCUwQWJveGVzJTIwJTNEJTIwZXhhbXBsZSU1QiUyMmJib3hlcyUyMiU1RCUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKHdvcmRzJTJDJTIwYm94ZXMlM0Rib3hlcyUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmcpJTBBcHJlZGljdGVkX2NsYXNzX2luZGljZXMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cy5hcmdtYXgoLTEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_indices = outputs.logits.argmax(-<span class="hljs-number">1</span>)`,wrap:!1}}),{c(){n=m("p"),n.textContent=w,l=a(),u(d.$$.fragment)},l(o){n=p(o,"P",{"data-svelte-h":!0}),h(n)!=="svelte-kvfsh7"&&(n.textContent=w),l=r(o),f(d.$$.fragment,o)},m(o,M){i(o,n,M),i(o,l,M),g(d,o,M),y=!0},p:E,i(o){y||(_(d.$$.fragment,o),y=!0)},o(o){b(d.$$.fragment,o),y=!1},d(o){o&&(s(n),s(l)),T(d,o)}}}function Bn(k){let n,w=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=m("p"),n.innerHTML=w},l(l){n=p(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=w)},m(l,d){i(l,n,d)},p:E,d(l){l&&s(n)}}}function Qn(k){let n,w="Examples:",l,d,y;return d=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBdXRvTW9kZWxGb3JRdWVzdGlvbkFuc3dlcmluZyUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMlNDVVQtRExWQ0xhYiUyRmxpbHQtcm9iZXJ0YS1lbi1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsRm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMlNDVVQtRExWQ0xhYiUyRmxpbHQtcm9iZXJ0YS1lbi1iYXNlJTIyKSUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIybmllbHNyJTJGZnVuc2QtbGF5b3V0bG12MyUyMiUyQyUyMHNwbGl0JTNEJTIydHJhaW4lMjIpJTBBZXhhbXBsZSUyMCUzRCUyMGRhdGFzZXQlNUIwJTVEJTBBd29yZHMlMjAlM0QlMjBleGFtcGxlJTVCJTIydG9rZW5zJTIyJTVEJTBBYm94ZXMlMjAlM0QlMjBleGFtcGxlJTVCJTIyYmJveGVzJTIyJTVEJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIod29yZHMlMkMlMjBib3hlcyUzRGJveGVzJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiplbmNvZGluZyklMEElMEFhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLnN0YXJ0X2xvZ2l0cy5hcmdtYXgoKSUwQWFuc3dlcl9lbmRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLmVuZF9sb2dpdHMuYXJnbWF4KCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBlbmNvZGluZy5pbnB1dF9pZHMlNUIwJTJDJTIwYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNBJTIwYW5zd2VyX2VuZF9pbmRleCUyMCUyQiUyMDElNUQlMEFwcmVkaWN0ZWRfYW5zd2VyJTIwJTNEJTIwdG9rZW5pemVyLmRlY29kZShwcmVkaWN0X2Fuc3dlcl90b2tlbnMp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = encoding.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = tokenizer.decode(predict_answer_tokens)`,wrap:!1}}),{c(){n=m("p"),n.textContent=w,l=a(),u(d.$$.fragment)},l(o){n=p(o,"P",{"data-svelte-h":!0}),h(n)!=="svelte-kvfsh7"&&(n.textContent=w),l=r(o),f(d.$$.fragment,o)},m(o,M){i(o,n,M),i(o,l,M),g(d,o,M),y=!0},p:E,i(o){y||(_(d.$$.fragment,o),y=!0)},o(o){b(d.$$.fragment,o),y=!1},d(o){o&&(s(n),s(l)),T(d,o)}}}function En(k){let n,w,l,d,y,o,M,Oe,oe,tn=`The LiLT model was proposed in <a href="https://arxiv.org/abs/2202.13669" rel="nofollow">LiLT: A Simple yet Effective Language-Independent Layout Transformer for Structured Document Understanding</a> by Jiapeng Wang, Lianwen Jin, Kai Ding.
LiLT allows to combine any pre-trained RoBERTa text encoder with a lightweight Layout Transformer, to enable <a href="layoutlm">LayoutLM</a>-like document understanding for many
languages.`,De,se,nn="The abstract from the paper is the following:",Ke,ae,on="<em>Structured document understanding has attracted considerable attention and made significant progress recently, owing to its crucial role in intelligent document processing. However, most existing related models can only deal with the document data of specific language(s) (typically English) included in the pre-training collection, which is extremely limited. To address this issue, we propose a simple yet effective Language-independent Layout Transformer (LiLT) for structured document understanding. LiLT can be pre-trained on the structured documents of a single language and then directly fine-tuned on other languages with the corresponding off-the-shelf monolingual/multilingual pre-trained textual models. Experimental results on eight languages have shown that LiLT can achieve competitive or even superior performance on diverse widely-used downstream benchmarks, which enables language-independent benefit from the pre-training of document layout structure.</em>",et,H,sn,tt,re,an='LiLT architecture. Taken from the <a href="https://arxiv.org/abs/2202.13669">original paper</a>.',nt,ie,rn=`This model was contributed by <a href="https://huggingface.co/nielsr" rel="nofollow">nielsr</a>.
The original code can be found <a href="https://github.com/jpwang/lilt" rel="nofollow">here</a>.`,ot,le,st,de,ln=`<li>To combine the Language-Independent Layout Transformer with a new RoBERTa checkpoint from the <a href="https://huggingface.co/models?search=roberta" rel="nofollow">hub</a>, refer to <a href="https://github.com/jpWang/LiLT#or-generate-your-own-checkpoint-optional" rel="nofollow">this guide</a>.
The script will result in <code>config.json</code> and <code>pytorch_model.bin</code> files being stored locally. After doing this, one can do the following (assuming you’re logged in with your HuggingFace account):</li>`,at,ce,rt,me,dn=`<li>When preparing data for the model, make sure to use the token vocabulary that corresponds to the RoBERTa checkpoint you combined with the Layout Transformer.</li> <li>As <a href="https://huggingface.co/SCUT-DLVCLab/lilt-roberta-en-base" rel="nofollow">lilt-roberta-en-base</a> uses the same vocabulary as <a href="layoutlmv3">LayoutLMv3</a>, one can use <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a> to prepare data for the model.
The same is true for <a href="https://huggingface.co/SCUT-DLVCLab/lilt-infoxlm-base" rel="nofollow">lilt-roberta-en-base</a>: one can use <a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast">LayoutXLMTokenizerFast</a> for that model.</li>`,it,pe,lt,he,cn="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started with LiLT.",dt,ue,mn='<li>Demo notebooks for LiLT can be found <a href="https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LiLT" rel="nofollow">here</a>.</li>',ct,fe,pn="<strong>Documentation resources</strong>",mt,ge,hn='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li>',pt,_e,un="If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",ht,be,ut,Z,Te,xt,je,fn=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltModel">LiltModel</a>. It is used to instantiate a LiLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LiLT
<a href="https://huggingface.co/SCUT-DLVCLab/lilt-roberta-en-base" rel="nofollow">SCUT-DLVCLab/lilt-roberta-en-base</a> architecture.
Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,$t,P,ft,ye,gt,C,we,Ct,Ue,gn=`The bare LiLT Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ft,qe,_n=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Jt,j,Me,zt,We,bn='The <a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltModel">LiltModel</a> forward method, overrides the <code>__call__</code> special method.',jt,A,Ut,Y,_t,ke,bt,v,ve,qt,Ze,Tn=`LiLT Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,Wt,Ie,yn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Zt,Re,wn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,It,U,Le,Rt,Ve,Mn='The <a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltForSequenceClassification">LiltForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Vt,O,Xt,D,Tt,xe,yt,L,$e,Nt,Xe,kn=`Lilt Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Gt,Ne,vn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,St,Ge,Ln=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Bt,q,Ce,Qt,Se,xn='The <a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltForTokenClassification">LiltForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Et,K,Ht,ee,wt,Fe,Mt,x,Je,Pt,Be,$n=`Lilt Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,At,Qe,Cn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Yt,Ee,Fn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ot,W,ze,Dt,He,Jn='The <a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltForQuestionAnswering">LiltForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Kt,te,en,ne,kt,Ae,vt;return y=new Q({props:{title:"LiLT",local:"lilt",headingTag:"h1"}}),M=new Q({props:{title:"Overview",local:"overview",headingTag:"h2"}}),le=new Q({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),ce=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExpbHRNb2RlbCUwQSUwQW1vZGVsJTIwJTNEJTIwTGlsdE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJwYXRoX3RvX3lvdXJfZmlsZXMlMjIpJTBBbW9kZWwucHVzaF90b19odWIoJTIybmFtZV9vZl9yZXBvX29uX3RoZV9odWIlMjIp",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LiltModel

model = LiltModel.from_pretrained(<span class="hljs-string">&quot;path_to_your_files&quot;</span>)
model.push_to_hub(<span class="hljs-string">&quot;name_of_repo_on_the_hub&quot;</span>)`,wrap:!1}}),pe=new Q({props:{title:"Resources",local:"resources",headingTag:"h2"}}),be=new Q({props:{title:"LiltConfig",local:"transformers.LiltConfig",headingTag:"h2"}}),Te=new B({props:{name:"class transformers.LiltConfig",anchor:"transformers.LiltConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"classifier_dropout",val:" = None"},{name:"channel_shrink_ratio",val:" = 4"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LiltConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LiLT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltModel">LiltModel</a>.`,name:"vocab_size"},{anchor:"transformers.LiltConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer. Should be a multiple of 24.`,name:"hidden_size"},{anchor:"transformers.LiltConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LiltConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LiltConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LiltConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LiltConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LiltConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LiltConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LiltConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltModel">LiltModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LiltConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LiltConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LiltConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.LiltConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"},{anchor:"transformers.LiltConfig.channel_shrink_ratio",description:`<strong>channel_shrink_ratio</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The shrink ratio compared to the <code>hidden_size</code> for the channel dimension of the layout embeddings.`,name:"channel_shrink_ratio"},{anchor:"transformers.LiltConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/lilt/configuration_lilt.py#L30"}}),P=new Ye({props:{anchor:"transformers.LiltConfig.example",$$slots:{default:[In]},$$scope:{ctx:k}}}),ye=new Q({props:{title:"LiltModel",local:"transformers.LiltModel",headingTag:"h2"}}),we=new B({props:{name:"class transformers.LiltModel",anchor:"transformers.LiltModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LiltModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L677"}}),Me=new B({props:{name:"forward",anchor:"transformers.LiltModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LiltModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LiltModel.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LiltModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LiltModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LiltModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LiltModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LiltModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LiltModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LiltModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LiltModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L709",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig"
>LiltConfig</a>) and inputs.</p>
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
`}}),A=new Lt({props:{$$slots:{default:[Rn]},$$scope:{ctx:k}}}),Y=new Ye({props:{anchor:"transformers.LiltModel.forward.example",$$slots:{default:[Vn]},$$scope:{ctx:k}}}),ke=new Q({props:{title:"LiltForSequenceClassification",local:"transformers.LiltForSequenceClassification",headingTag:"h2"}}),ve=new B({props:{name:"class transformers.LiltForSequenceClassification",anchor:"transformers.LiltForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LiltForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L823"}}),Le=new B({props:{name:"forward",anchor:"transformers.LiltForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LiltForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LiltForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LiltForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LiltForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LiltForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LiltForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LiltForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LiltForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LiltForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LiltForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LiltForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L843",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig"
>LiltConfig</a>) and inputs.</p>
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
`}}),O=new Lt({props:{$$slots:{default:[Xn]},$$scope:{ctx:k}}}),D=new Ye({props:{anchor:"transformers.LiltForSequenceClassification.forward.example",$$slots:{default:[Nn]},$$scope:{ctx:k}}}),xe=new Q({props:{title:"LiltForTokenClassification",local:"transformers.LiltForTokenClassification",headingTag:"h2"}}),$e=new B({props:{name:"class transformers.LiltForTokenClassification",anchor:"transformers.LiltForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LiltForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L941"}}),Ce=new B({props:{name:"forward",anchor:"transformers.LiltForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LiltForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LiltForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LiltForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LiltForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LiltForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LiltForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LiltForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LiltForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LiltForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LiltForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LiltForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L964",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig"
>LiltConfig</a>) and inputs.</p>
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
`}}),K=new Lt({props:{$$slots:{default:[Gn]},$$scope:{ctx:k}}}),ee=new Ye({props:{anchor:"transformers.LiltForTokenClassification.forward.example",$$slots:{default:[Sn]},$$scope:{ctx:k}}}),Fe=new Q({props:{title:"LiltForQuestionAnswering",local:"transformers.LiltForQuestionAnswering",headingTag:"h2"}}),Je=new B({props:{name:"class transformers.LiltForQuestionAnswering",anchor:"transformers.LiltForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LiltForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L1067"}}),ze=new B({props:{name:"forward",anchor:"transformers.LiltForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LiltForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LiltForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LiltForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LiltForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LiltForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LiltForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LiltForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LiltForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LiltForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LiltForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LiltForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LiltForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L1086",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig"
>LiltConfig</a>) and inputs.</p>
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
`}}),te=new Lt({props:{$$slots:{default:[Bn]},$$scope:{ctx:k}}}),ne=new Ye({props:{anchor:"transformers.LiltForQuestionAnswering.forward.example",$$slots:{default:[Qn]},$$scope:{ctx:k}}}),{c(){n=m("meta"),w=a(),l=m("p"),d=a(),u(y.$$.fragment),o=a(),u(M.$$.fragment),Oe=a(),oe=m("p"),oe.innerHTML=tn,De=a(),se=m("p"),se.textContent=nn,Ke=a(),ae=m("p"),ae.innerHTML=on,et=a(),H=m("img"),tt=a(),re=m("small"),re.innerHTML=an,nt=a(),ie=m("p"),ie.innerHTML=rn,ot=a(),u(le.$$.fragment),st=a(),de=m("ul"),de.innerHTML=ln,at=a(),u(ce.$$.fragment),rt=a(),me=m("ul"),me.innerHTML=dn,it=a(),u(pe.$$.fragment),lt=a(),he=m("p"),he.textContent=cn,dt=a(),ue=m("ul"),ue.innerHTML=mn,ct=a(),fe=m("p"),fe.innerHTML=pn,mt=a(),ge=m("ul"),ge.innerHTML=hn,pt=a(),_e=m("p"),_e.textContent=un,ht=a(),u(be.$$.fragment),ut=a(),Z=m("div"),u(Te.$$.fragment),xt=a(),je=m("p"),je.innerHTML=fn,$t=a(),u(P.$$.fragment),ft=a(),u(ye.$$.fragment),gt=a(),C=m("div"),u(we.$$.fragment),Ct=a(),Ue=m("p"),Ue.innerHTML=gn,Ft=a(),qe=m("p"),qe.innerHTML=_n,Jt=a(),j=m("div"),u(Me.$$.fragment),zt=a(),We=m("p"),We.innerHTML=bn,jt=a(),u(A.$$.fragment),Ut=a(),u(Y.$$.fragment),_t=a(),u(ke.$$.fragment),bt=a(),v=m("div"),u(ve.$$.fragment),qt=a(),Ze=m("p"),Ze.textContent=Tn,Wt=a(),Ie=m("p"),Ie.innerHTML=yn,Zt=a(),Re=m("p"),Re.innerHTML=wn,It=a(),U=m("div"),u(Le.$$.fragment),Rt=a(),Ve=m("p"),Ve.innerHTML=Mn,Vt=a(),u(O.$$.fragment),Xt=a(),u(D.$$.fragment),Tt=a(),u(xe.$$.fragment),yt=a(),L=m("div"),u($e.$$.fragment),Nt=a(),Xe=m("p"),Xe.textContent=kn,Gt=a(),Ne=m("p"),Ne.innerHTML=vn,St=a(),Ge=m("p"),Ge.innerHTML=Ln,Bt=a(),q=m("div"),u(Ce.$$.fragment),Qt=a(),Se=m("p"),Se.innerHTML=xn,Et=a(),u(K.$$.fragment),Ht=a(),u(ee.$$.fragment),wt=a(),u(Fe.$$.fragment),Mt=a(),x=m("div"),u(Je.$$.fragment),Pt=a(),Be=m("p"),Be.innerHTML=$n,At=a(),Qe=m("p"),Qe.innerHTML=Cn,Yt=a(),Ee=m("p"),Ee.innerHTML=Fn,Ot=a(),W=m("div"),u(ze.$$.fragment),Dt=a(),He=m("p"),He.innerHTML=Jn,Kt=a(),u(te.$$.fragment),en=a(),u(ne.$$.fragment),kt=a(),Ae=m("p"),this.h()},l(e){const t=Zn("svelte-u9bgzb",document.head);n=p(t,"META",{name:!0,content:!0}),t.forEach(s),w=r(e),l=p(e,"P",{}),G(l).forEach(s),d=r(e),f(y.$$.fragment,e),o=r(e),f(M.$$.fragment,e),Oe=r(e),oe=p(e,"P",{"data-svelte-h":!0}),h(oe)!=="svelte-151wcjb"&&(oe.innerHTML=tn),De=r(e),se=p(e,"P",{"data-svelte-h":!0}),h(se)!=="svelte-vfdo9a"&&(se.textContent=nn),Ke=r(e),ae=p(e,"P",{"data-svelte-h":!0}),h(ae)!=="svelte-1949dob"&&(ae.innerHTML=on),et=r(e),H=p(e,"IMG",{src:!0,alt:!0,width:!0}),tt=r(e),re=p(e,"SMALL",{"data-svelte-h":!0}),h(re)!=="svelte-1gq47mu"&&(re.innerHTML=an),nt=r(e),ie=p(e,"P",{"data-svelte-h":!0}),h(ie)!=="svelte-42ikqz"&&(ie.innerHTML=rn),ot=r(e),f(le.$$.fragment,e),st=r(e),de=p(e,"UL",{"data-svelte-h":!0}),h(de)!=="svelte-1yaggt4"&&(de.innerHTML=ln),at=r(e),f(ce.$$.fragment,e),rt=r(e),me=p(e,"UL",{"data-svelte-h":!0}),h(me)!=="svelte-fe1783"&&(me.innerHTML=dn),it=r(e),f(pe.$$.fragment,e),lt=r(e),he=p(e,"P",{"data-svelte-h":!0}),h(he)!=="svelte-tf03pc"&&(he.textContent=cn),dt=r(e),ue=p(e,"UL",{"data-svelte-h":!0}),h(ue)!=="svelte-11y7yle"&&(ue.innerHTML=mn),ct=r(e),fe=p(e,"P",{"data-svelte-h":!0}),h(fe)!=="svelte-27ts0a"&&(fe.innerHTML=pn),mt=r(e),ge=p(e,"UL",{"data-svelte-h":!0}),h(ge)!=="svelte-fiyac8"&&(ge.innerHTML=hn),pt=r(e),_e=p(e,"P",{"data-svelte-h":!0}),h(_e)!=="svelte-1xesile"&&(_e.textContent=un),ht=r(e),f(be.$$.fragment,e),ut=r(e),Z=p(e,"DIV",{class:!0});var S=G(Z);f(Te.$$.fragment,S),xt=r(S),je=p(S,"P",{"data-svelte-h":!0}),h(je)!=="svelte-10c30dn"&&(je.innerHTML=fn),$t=r(S),f(P.$$.fragment,S),S.forEach(s),ft=r(e),f(ye.$$.fragment,e),gt=r(e),C=p(e,"DIV",{class:!0});var I=G(C);f(we.$$.fragment,I),Ct=r(I),Ue=p(I,"P",{"data-svelte-h":!0}),h(Ue)!=="svelte-1crcy4u"&&(Ue.innerHTML=gn),Ft=r(I),qe=p(I,"P",{"data-svelte-h":!0}),h(qe)!=="svelte-hswkmf"&&(qe.innerHTML=_n),Jt=r(I),j=p(I,"DIV",{class:!0});var R=G(j);f(Me.$$.fragment,R),zt=r(R),We=p(R,"P",{"data-svelte-h":!0}),h(We)!=="svelte-3avnfe"&&(We.innerHTML=bn),jt=r(R),f(A.$$.fragment,R),Ut=r(R),f(Y.$$.fragment,R),R.forEach(s),I.forEach(s),_t=r(e),f(ke.$$.fragment,e),bt=r(e),v=p(e,"DIV",{class:!0});var F=G(v);f(ve.$$.fragment,F),qt=r(F),Ze=p(F,"P",{"data-svelte-h":!0}),h(Ze)!=="svelte-m04gc7"&&(Ze.textContent=Tn),Wt=r(F),Ie=p(F,"P",{"data-svelte-h":!0}),h(Ie)!=="svelte-6pahdo"&&(Ie.innerHTML=yn),Zt=r(F),Re=p(F,"P",{"data-svelte-h":!0}),h(Re)!=="svelte-hswkmf"&&(Re.innerHTML=wn),It=r(F),U=p(F,"DIV",{class:!0});var V=G(U);f(Le.$$.fragment,V),Rt=r(V),Ve=p(V,"P",{"data-svelte-h":!0}),h(Ve)!=="svelte-14k4nrq"&&(Ve.innerHTML=Mn),Vt=r(V),f(O.$$.fragment,V),Xt=r(V),f(D.$$.fragment,V),V.forEach(s),F.forEach(s),Tt=r(e),f(xe.$$.fragment,e),yt=r(e),L=p(e,"DIV",{class:!0});var J=G(L);f($e.$$.fragment,J),Nt=r(J),Xe=p(J,"P",{"data-svelte-h":!0}),h(Xe)!=="svelte-if1u0k"&&(Xe.textContent=kn),Gt=r(J),Ne=p(J,"P",{"data-svelte-h":!0}),h(Ne)!=="svelte-6pahdo"&&(Ne.innerHTML=vn),St=r(J),Ge=p(J,"P",{"data-svelte-h":!0}),h(Ge)!=="svelte-hswkmf"&&(Ge.innerHTML=Ln),Bt=r(J),q=p(J,"DIV",{class:!0});var X=G(q);f(Ce.$$.fragment,X),Qt=r(X),Se=p(X,"P",{"data-svelte-h":!0}),h(Se)!=="svelte-1xl7nkc"&&(Se.innerHTML=xn),Et=r(X),f(K.$$.fragment,X),Ht=r(X),f(ee.$$.fragment,X),X.forEach(s),J.forEach(s),wt=r(e),f(Fe.$$.fragment,e),Mt=r(e),x=p(e,"DIV",{class:!0});var z=G(x);f(Je.$$.fragment,z),Pt=r(z),Be=p(z,"P",{"data-svelte-h":!0}),h(Be)!=="svelte-18mhxtq"&&(Be.innerHTML=$n),At=r(z),Qe=p(z,"P",{"data-svelte-h":!0}),h(Qe)!=="svelte-6pahdo"&&(Qe.innerHTML=Cn),Yt=r(z),Ee=p(z,"P",{"data-svelte-h":!0}),h(Ee)!=="svelte-hswkmf"&&(Ee.innerHTML=Fn),Ot=r(z),W=p(z,"DIV",{class:!0});var N=G(W);f(ze.$$.fragment,N),Dt=r(N),He=p(N,"P",{"data-svelte-h":!0}),h(He)!=="svelte-6xncny"&&(He.innerHTML=Jn),Kt=r(N),f(te.$$.fragment,N),en=r(N),f(ne.$$.fragment,N),N.forEach(s),z.forEach(s),kt=r(e),Ae=p(e,"P",{}),G(Ae).forEach(s),this.h()},h(){$(n,"name","hf:doc:metadata"),$(n,"content",Hn),jn(H.src,sn="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/lilt_architecture.jpg")||$(H,"src",sn),$(H,"alt","drawing"),$(H,"width","600"),$(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){c(document.head,n),i(e,w,t),i(e,l,t),i(e,d,t),g(y,e,t),i(e,o,t),g(M,e,t),i(e,Oe,t),i(e,oe,t),i(e,De,t),i(e,se,t),i(e,Ke,t),i(e,ae,t),i(e,et,t),i(e,H,t),i(e,tt,t),i(e,re,t),i(e,nt,t),i(e,ie,t),i(e,ot,t),g(le,e,t),i(e,st,t),i(e,de,t),i(e,at,t),g(ce,e,t),i(e,rt,t),i(e,me,t),i(e,it,t),g(pe,e,t),i(e,lt,t),i(e,he,t),i(e,dt,t),i(e,ue,t),i(e,ct,t),i(e,fe,t),i(e,mt,t),i(e,ge,t),i(e,pt,t),i(e,_e,t),i(e,ht,t),g(be,e,t),i(e,ut,t),i(e,Z,t),g(Te,Z,null),c(Z,xt),c(Z,je),c(Z,$t),g(P,Z,null),i(e,ft,t),g(ye,e,t),i(e,gt,t),i(e,C,t),g(we,C,null),c(C,Ct),c(C,Ue),c(C,Ft),c(C,qe),c(C,Jt),c(C,j),g(Me,j,null),c(j,zt),c(j,We),c(j,jt),g(A,j,null),c(j,Ut),g(Y,j,null),i(e,_t,t),g(ke,e,t),i(e,bt,t),i(e,v,t),g(ve,v,null),c(v,qt),c(v,Ze),c(v,Wt),c(v,Ie),c(v,Zt),c(v,Re),c(v,It),c(v,U),g(Le,U,null),c(U,Rt),c(U,Ve),c(U,Vt),g(O,U,null),c(U,Xt),g(D,U,null),i(e,Tt,t),g(xe,e,t),i(e,yt,t),i(e,L,t),g($e,L,null),c(L,Nt),c(L,Xe),c(L,Gt),c(L,Ne),c(L,St),c(L,Ge),c(L,Bt),c(L,q),g(Ce,q,null),c(q,Qt),c(q,Se),c(q,Et),g(K,q,null),c(q,Ht),g(ee,q,null),i(e,wt,t),g(Fe,e,t),i(e,Mt,t),i(e,x,t),g(Je,x,null),c(x,Pt),c(x,Be),c(x,At),c(x,Qe),c(x,Yt),c(x,Ee),c(x,Ot),c(x,W),g(ze,W,null),c(W,Dt),c(W,He),c(W,Kt),g(te,W,null),c(W,en),g(ne,W,null),i(e,kt,t),i(e,Ae,t),vt=!0},p(e,[t]){const S={};t&2&&(S.$$scope={dirty:t,ctx:e}),P.$set(S);const I={};t&2&&(I.$$scope={dirty:t,ctx:e}),A.$set(I);const R={};t&2&&(R.$$scope={dirty:t,ctx:e}),Y.$set(R);const F={};t&2&&(F.$$scope={dirty:t,ctx:e}),O.$set(F);const V={};t&2&&(V.$$scope={dirty:t,ctx:e}),D.$set(V);const J={};t&2&&(J.$$scope={dirty:t,ctx:e}),K.$set(J);const X={};t&2&&(X.$$scope={dirty:t,ctx:e}),ee.$set(X);const z={};t&2&&(z.$$scope={dirty:t,ctx:e}),te.$set(z);const N={};t&2&&(N.$$scope={dirty:t,ctx:e}),ne.$set(N)},i(e){vt||(_(y.$$.fragment,e),_(M.$$.fragment,e),_(le.$$.fragment,e),_(ce.$$.fragment,e),_(pe.$$.fragment,e),_(be.$$.fragment,e),_(Te.$$.fragment,e),_(P.$$.fragment,e),_(ye.$$.fragment,e),_(we.$$.fragment,e),_(Me.$$.fragment,e),_(A.$$.fragment,e),_(Y.$$.fragment,e),_(ke.$$.fragment,e),_(ve.$$.fragment,e),_(Le.$$.fragment,e),_(O.$$.fragment,e),_(D.$$.fragment,e),_(xe.$$.fragment,e),_($e.$$.fragment,e),_(Ce.$$.fragment,e),_(K.$$.fragment,e),_(ee.$$.fragment,e),_(Fe.$$.fragment,e),_(Je.$$.fragment,e),_(ze.$$.fragment,e),_(te.$$.fragment,e),_(ne.$$.fragment,e),vt=!0)},o(e){b(y.$$.fragment,e),b(M.$$.fragment,e),b(le.$$.fragment,e),b(ce.$$.fragment,e),b(pe.$$.fragment,e),b(be.$$.fragment,e),b(Te.$$.fragment,e),b(P.$$.fragment,e),b(ye.$$.fragment,e),b(we.$$.fragment,e),b(Me.$$.fragment,e),b(A.$$.fragment,e),b(Y.$$.fragment,e),b(ke.$$.fragment,e),b(ve.$$.fragment,e),b(Le.$$.fragment,e),b(O.$$.fragment,e),b(D.$$.fragment,e),b(xe.$$.fragment,e),b($e.$$.fragment,e),b(Ce.$$.fragment,e),b(K.$$.fragment,e),b(ee.$$.fragment,e),b(Fe.$$.fragment,e),b(Je.$$.fragment,e),b(ze.$$.fragment,e),b(te.$$.fragment,e),b(ne.$$.fragment,e),vt=!1},d(e){e&&(s(w),s(l),s(d),s(o),s(Oe),s(oe),s(De),s(se),s(Ke),s(ae),s(et),s(H),s(tt),s(re),s(nt),s(ie),s(ot),s(st),s(de),s(at),s(rt),s(me),s(it),s(lt),s(he),s(dt),s(ue),s(ct),s(fe),s(mt),s(ge),s(pt),s(_e),s(ht),s(ut),s(Z),s(ft),s(gt),s(C),s(_t),s(bt),s(v),s(Tt),s(yt),s(L),s(wt),s(Mt),s(x),s(kt),s(Ae)),s(n),T(y,e),T(M,e),T(le,e),T(ce,e),T(pe,e),T(be,e),T(Te),T(P),T(ye,e),T(we),T(Me),T(A),T(Y),T(ke,e),T(ve),T(Le),T(O),T(D),T(xe,e),T($e),T(Ce),T(K),T(ee),T(Fe,e),T(Je),T(ze),T(te),T(ne)}}}const Hn='{"title":"LiLT","local":"lilt","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"LiltConfig","local":"transformers.LiltConfig","sections":[],"depth":2},{"title":"LiltModel","local":"transformers.LiltModel","sections":[],"depth":2},{"title":"LiltForSequenceClassification","local":"transformers.LiltForSequenceClassification","sections":[],"depth":2},{"title":"LiltForTokenClassification","local":"transformers.LiltForTokenClassification","sections":[],"depth":2},{"title":"LiltForQuestionAnswering","local":"transformers.LiltForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function Pn(k){return Un(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class no extends qn{constructor(n){super(),Wn(this,n,Pn,En,zn,{})}}export{no as component};
