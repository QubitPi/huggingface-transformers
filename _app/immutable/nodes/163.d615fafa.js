import{s as Eo,f as Qo,o as Vo,n as se}from"../chunks/scheduler.9bc65507.js";import{S as Xo,i as Ao,g as c,s as a,r as v,A as Yo,h as m,f as n,c as r,j as R,u as y,x as f,k as W,y as d,a as l,v as b,d as T,t as M,w as L}from"../chunks/index.707bf1b6.js";import{T as ut}from"../chunks/Tip.c2ecdbf4.js";import{D as P}from"../chunks/Docstring.17db21ae.js";import{C as Ct}from"../chunks/CodeBlock.54a9f38d.js";import{F as Do,M as Ho}from"../chunks/Markdown.fef84341.js";import{E as qt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as No}from"../chunks/PipelineTag.44585822.js";import{H as Fe}from"../chunks/Heading.342b1fa6.js";function Oo($){let t,g='LayoutLMv3 is nearly identical to LayoutLMv2, so we’ve also included LayoutLMv2 resources you can adapt for LayoutLMv3 tasks. For these notebooks, take care to use <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor">LayoutLMv2Processor</a> instead when preparing data for the model!';return{c(){t=c("p"),t.innerHTML=g},l(o){t=m(o,"P",{"data-svelte-h":!0}),f(t)!=="svelte-6vqmof"&&(t.innerHTML=g)},m(o,i){l(o,t,i)},p:se,d(o){o&&n(t)}}}function Ko($){let t,g="Example:",o,i,w;return i=new Ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExheW91dExNdjNDb25maWclMkMlMjBMYXlvdXRMTXYzTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwTGF5b3V0TE12MyUyMG1pY3Jvc29mdCUyRmxheW91dGxtdjMtYmFzZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBMYXlvdXRMTXYzQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMG1pY3Jvc29mdCUyRmxheW91dGxtdjMtYmFzZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwTGF5b3V0TE12M01vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv3Config, LayoutLMv3Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv3 microsoft/layoutlmv3-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv3Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the microsoft/layoutlmv3-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv3Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=c("p"),t.textContent=g,o=a(),v(i.$$.fragment)},l(s){t=m(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-11lpom8"&&(t.textContent=g),o=r(s),y(i.$$.fragment,s)},m(s,k){l(s,t,k),l(s,o,k),b(i,s,k),w=!0},p:se,i(s){w||(T(i.$$.fragment,s),w=!0)},o(s){M(i.$$.fragment,s),w=!1},d(s){s&&(n(t),n(o)),L(i,s)}}}function en($){let t,g=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=g},l(o){t=m(o,"P",{"data-svelte-h":!0}),f(t)!=="svelte-fincs2"&&(t.innerHTML=g)},m(o,i){l(o,t,i)},p:se,d(o){o&&n(t)}}}function tn($){let t,g="Examples:",o,i,w;return i=new Ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBBdXRvTW9kZWwlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYzLWJhc2UlMjIlMkMlMjBhcHBseV9vY3IlM0RGYWxzZSklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbGF5b3V0bG12My1iYXNlJTIyKSUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIybmllbHNyJTJGZnVuc2QtbGF5b3V0bG12MyUyMiUyQyUyMHNwbGl0JTNEJTIydHJhaW4lMjIpJTBBZXhhbXBsZSUyMCUzRCUyMGRhdGFzZXQlNUIwJTVEJTBBaW1hZ2UlMjAlM0QlMjBleGFtcGxlJTVCJTIyaW1hZ2UlMjIlNUQlMEF3b3JkcyUyMCUzRCUyMGV4YW1wbGUlNUIlMjJ0b2tlbnMlMjIlNUQlMEFib3hlcyUyMCUzRCUyMGV4YW1wbGUlNUIlMjJiYm94ZXMlMjIlNUQlMEElMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvcihpbWFnZSUyQyUyMHdvcmRzJTJDJTIwYm94ZXMlM0Rib3hlcyUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmcpJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=g,o=a(),v(i.$$.fragment)},l(s){t=m(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-kvfsh7"&&(t.textContent=g),o=r(s),y(i.$$.fragment,s)},m(s,k){l(s,t,k),l(s,o,k),b(i,s,k),w=!0},p:se,i(s){w||(T(i.$$.fragment,s),w=!0)},o(s){M(i.$$.fragment,s),w=!1},d(s){s&&(n(t),n(o)),L(i,s)}}}function on($){let t,g=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=g},l(o){t=m(o,"P",{"data-svelte-h":!0}),f(t)!=="svelte-fincs2"&&(t.innerHTML=g)},m(o,i){l(o,t,i)},p:se,d(o){o&&n(t)}}}function nn($){let t,g="Examples:",o,i,w;return i=new Ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBBdXRvTW9kZWxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwdG9yY2glMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYzLWJhc2UlMjIlMkMlMjBhcHBseV9vY3IlM0RGYWxzZSklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmxheW91dGxtdjMtYmFzZSUyMiklMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMm5pZWxzciUyRmZ1bnNkLWxheW91dGxtdjMlMjIlMkMlMjBzcGxpdCUzRCUyMnRyYWluJTIyKSUwQWV4YW1wbGUlMjAlM0QlMjBkYXRhc2V0JTVCMCU1RCUwQWltYWdlJTIwJTNEJTIwZXhhbXBsZSU1QiUyMmltYWdlJTIyJTVEJTBBd29yZHMlMjAlM0QlMjBleGFtcGxlJTVCJTIydG9rZW5zJTIyJTVEJTBBYm94ZXMlMjAlM0QlMjBleGFtcGxlJTVCJTIyYmJveGVzJTIyJTVEJTBBJTBBZW5jb2RpbmclMjAlM0QlMjBwcm9jZXNzb3IoaW1hZ2UlMkMlMjB3b3JkcyUyQyUyMGJveGVzJTNEYm94ZXMlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXNlcXVlbmNlX2xhYmVsJTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjElNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmclMkMlMjBsYWJlbHMlM0RzZXF1ZW5jZV9sYWJlbCklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=g,o=a(),v(i.$$.fragment)},l(s){t=m(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-kvfsh7"&&(t.textContent=g),o=r(s),y(i.$$.fragment,s)},m(s,k){l(s,t,k),l(s,o,k),b(i,s,k),w=!0},p:se,i(s){w||(T(i.$$.fragment,s),w=!0)},o(s){M(i.$$.fragment,s),w=!1},d(s){s&&(n(t),n(o)),L(i,s)}}}function sn($){let t,g=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=g},l(o){t=m(o,"P",{"data-svelte-h":!0}),f(t)!=="svelte-fincs2"&&(t.innerHTML=g)},m(o,i){l(o,t,i)},p:se,d(o){o&&n(t)}}}function an($){let t,g="Examples:",o,i,w;return i=new Ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBBdXRvTW9kZWxGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBcHJvY2Vzc29yJTIwJTNEJTIwQXV0b1Byb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbGF5b3V0bG12My1iYXNlJTIyJTJDJTIwYXBwbHlfb2NyJTNERmFsc2UpJTBBbW9kZWwlMjAlM0QlMjBBdXRvTW9kZWxGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYzLWJhc2UlMjIlMkMlMjBudW1fbGFiZWxzJTNENyklMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMm5pZWxzciUyRmZ1bnNkLWxheW91dGxtdjMlMjIlMkMlMjBzcGxpdCUzRCUyMnRyYWluJTIyKSUwQWV4YW1wbGUlMjAlM0QlMjBkYXRhc2V0JTVCMCU1RCUwQWltYWdlJTIwJTNEJTIwZXhhbXBsZSU1QiUyMmltYWdlJTIyJTVEJTBBd29yZHMlMjAlM0QlMjBleGFtcGxlJTVCJTIydG9rZW5zJTIyJTVEJTBBYm94ZXMlMjAlM0QlMjBleGFtcGxlJTVCJTIyYmJveGVzJTIyJTVEJTBBd29yZF9sYWJlbHMlMjAlM0QlMjBleGFtcGxlJTVCJTIybmVyX3RhZ3MlMjIlNUQlMEElMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvcihpbWFnZSUyQyUyMHdvcmRzJTJDJTIwYm94ZXMlM0Rib3hlcyUyQyUyMHdvcmRfbGFiZWxzJTNEd29yZF9sYWJlbHMlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmVuY29kaW5nKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, num_labels=<span class="hljs-number">7</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = example[<span class="hljs-string">&quot;ner_tags&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=g,o=a(),v(i.$$.fragment)},l(s){t=m(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-kvfsh7"&&(t.textContent=g),o=r(s),y(i.$$.fragment,s)},m(s,k){l(s,t,k),l(s,o,k),b(i,s,k),w=!0},p:se,i(s){w||(T(i.$$.fragment,s),w=!0)},o(s){M(i.$$.fragment,s),w=!1},d(s){s&&(n(t),n(o)),L(i,s)}}}function rn($){let t,g=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=g},l(o){t=m(o,"P",{"data-svelte-h":!0}),f(t)!=="svelte-fincs2"&&(t.innerHTML=g)},m(o,i){l(o,t,i)},p:se,d(o){o&&n(t)}}}function ln($){let t,g="Examples:",o,i,w;return i=new Ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBBdXRvTW9kZWxGb3JRdWVzdGlvbkFuc3dlcmluZyUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBcHJvY2Vzc29yJTIwJTNEJTIwQXV0b1Byb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbGF5b3V0bG12My1iYXNlJTIyJTJDJTIwYXBwbHlfb2NyJTNERmFsc2UpJTBBbW9kZWwlMjAlM0QlMjBBdXRvTW9kZWxGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbGF5b3V0bG12My1iYXNlJTIyKSUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIybmllbHNyJTJGZnVuc2QtbGF5b3V0bG12MyUyMiUyQyUyMHNwbGl0JTNEJTIydHJhaW4lMjIpJTBBZXhhbXBsZSUyMCUzRCUyMGRhdGFzZXQlNUIwJTVEJTBBaW1hZ2UlMjAlM0QlMjBleGFtcGxlJTVCJTIyaW1hZ2UlMjIlNUQlMEFxdWVzdGlvbiUyMCUzRCUyMCUyMndoYXQncyUyMGhpcyUyMG5hbWUlM0YlMjIlMEF3b3JkcyUyMCUzRCUyMGV4YW1wbGUlNUIlMjJ0b2tlbnMlMjIlNUQlMEFib3hlcyUyMCUzRCUyMGV4YW1wbGUlNUIlMjJiYm94ZXMlMjIlNUQlMEElMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvcihpbWFnZSUyQyUyMHF1ZXN0aW9uJTJDJTIwd29yZHMlMkMlMjBib3hlcyUzRGJveGVzJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFzdGFydF9wb3NpdGlvbnMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMSU1RCklMEFlbmRfcG9zaXRpb25zJTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjMlNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmclMkMlMjBzdGFydF9wb3NpdGlvbnMlM0RzdGFydF9wb3NpdGlvbnMlMkMlMjBlbmRfcG9zaXRpb25zJTNEZW5kX3Bvc2l0aW9ucyklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBc3RhcnRfc2NvcmVzJTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMlMEFlbmRfc2NvcmVzJTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=g,o=a(),v(i.$$.fragment)},l(s){t=m(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-kvfsh7"&&(t.textContent=g),o=r(s),y(i.$$.fragment,s)},m(s,k){l(s,t,k),l(s,o,k),b(i,s,k),w=!0},p:se,i(s){w||(T(i.$$.fragment,s),w=!0)},o(s){M(i.$$.fragment,s),w=!1},d(s){s&&(n(t),n(o)),L(i,s)}}}function dn($){let t,g,o,i,w,s,k=`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,A,z,C,Y,j,N='The <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a> forward method, overrides the <code>__call__</code> special method.',I,p,F,le,je,De,be,E,ue,rt,K,Mt=`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
<a href="https://www.cs.cmu.edu/~aharley/rvl-cdip/" rel="nofollow">RVL-CDIP</a> dataset.`,G,ee,vt=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Te,Me,Ne,Le,Oe,Ke='The <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification">LayoutLMv3ForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',it,Je,Ie,te,Ue,O,ze,Q,he,et,lt,We=`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as <a href="https://guillaumejaume.github.io/FUNSD/" rel="nofollow">FUNSD</a>,
<a href="https://rrc.cvc.uab.es/?ch=13" rel="nofollow">SROIE</a>, <a href="https://github.com/clovaai/cord" rel="nofollow">CORD</a> and
<a href="https://github.com/applicaai/kleister-nda" rel="nofollow">Kleister-NDA</a>.`,He,de,Ee=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,tt,oe,U,Re,ke,ht='The <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification">LayoutLMv3ForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',yt,ce,dt,Ze,Pe,qe,ft,V,ae,re,S,ot=`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
<a href="https://rrc.cvc.uab.es/?ch=17" rel="nofollow">DocVQA</a> (a linear layer on top of the text part of the hidden-states output to
compute <code>span start logits</code> and <code>span end logits</code>).`,nt,Se,Ft=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,st,D,Qe,ie,Be,we='The <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering">LayoutLMv3ForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',ct,J,fe,Ge,me;return t=new Fe({props:{title:"LayoutLMv3Model",local:"transformers.LayoutLMv3Model",headingTag:"h2"}}),i=new P({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L734"}}),C=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"pixel_values",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3Model.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.LayoutLMv3Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, token_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, token_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L827",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),p=new ut({props:{$$slots:{default:[en]},$$scope:{ctx:$}}}),le=new qt({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[tn]},$$scope:{ctx:$}}}),De=new Fe({props:{title:"LayoutLMv3ForSequenceClassification",local:"transformers.LayoutLMv3ForSequenceClassification",headingTag:"h2"}}),ue=new P({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1259"}}),Ne=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"pixel_values",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1277",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),Je=new ut({props:{$$slots:{default:[on]},$$scope:{ctx:$}}}),te=new qt({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[nn]},$$scope:{ctx:$}}}),O=new Fe({props:{title:"LayoutLMv3ForTokenClassification",local:"transformers.LayoutLMv3ForTokenClassification",headingTag:"h2"}}),he=new P({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1016"}}),U=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"pixel_values",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1039",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),ce=new ut({props:{$$slots:{default:[sn]},$$scope:{ctx:$}}}),Ze=new qt({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[an]},$$scope:{ctx:$}}}),qe=new Fe({props:{title:"LayoutLMv3ForQuestionAnswering",local:"transformers.LayoutLMv3ForQuestionAnswering",headingTag:"h2"}}),ae=new P({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1129"}}),Qe=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"pixel_values",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1147",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),J=new ut({props:{$$slots:{default:[rn]},$$scope:{ctx:$}}}),Ge=new qt({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[ln]},$$scope:{ctx:$}}}),{c(){v(t.$$.fragment),g=a(),o=c("div"),v(i.$$.fragment),w=a(),s=c("p"),s.innerHTML=k,A=a(),z=c("div"),v(C.$$.fragment),Y=a(),j=c("p"),j.innerHTML=N,I=a(),v(p.$$.fragment),F=a(),v(le.$$.fragment),je=a(),v(De.$$.fragment),be=a(),E=c("div"),v(ue.$$.fragment),rt=a(),K=c("p"),K.innerHTML=Mt,G=a(),ee=c("p"),ee.innerHTML=vt,Te=a(),Me=c("div"),v(Ne.$$.fragment),Le=a(),Oe=c("p"),Oe.innerHTML=Ke,it=a(),v(Je.$$.fragment),Ie=a(),v(te.$$.fragment),Ue=a(),v(O.$$.fragment),ze=a(),Q=c("div"),v(he.$$.fragment),et=a(),lt=c("p"),lt.innerHTML=We,He=a(),de=c("p"),de.innerHTML=Ee,tt=a(),oe=c("div"),v(U.$$.fragment),Re=a(),ke=c("p"),ke.innerHTML=ht,yt=a(),v(ce.$$.fragment),dt=a(),v(Ze.$$.fragment),Pe=a(),v(qe.$$.fragment),ft=a(),V=c("div"),v(ae.$$.fragment),re=a(),S=c("p"),S.innerHTML=ot,nt=a(),Se=c("p"),Se.innerHTML=Ft,st=a(),D=c("div"),v(Qe.$$.fragment),ie=a(),Be=c("p"),Be.innerHTML=we,ct=a(),v(J.$$.fragment),fe=a(),v(Ge.$$.fragment),this.h()},l(h){y(t.$$.fragment,h),g=r(h),o=m(h,"DIV",{class:!0});var q=R(o);y(i.$$.fragment,q),w=r(q),s=m(q,"P",{"data-svelte-h":!0}),f(s)!=="svelte-90gqri"&&(s.innerHTML=k),A=r(q),z=m(q,"DIV",{class:!0});var X=R(z);y(C.$$.fragment,X),Y=r(X),j=m(X,"P",{"data-svelte-h":!0}),f(j)!=="svelte-ilfs8x"&&(j.innerHTML=N),I=r(X),y(p.$$.fragment,X),F=r(X),y(le.$$.fragment,X),X.forEach(n),q.forEach(n),je=r(h),y(De.$$.fragment,h),be=r(h),E=m(h,"DIV",{class:!0});var Ce=R(E);y(ue.$$.fragment,Ce),rt=r(Ce),K=m(Ce,"P",{"data-svelte-h":!0}),f(K)!=="svelte-oc0y77"&&(K.innerHTML=Mt),G=r(Ce),ee=m(Ce,"P",{"data-svelte-h":!0}),f(ee)!=="svelte-68lg8f"&&(ee.innerHTML=vt),Te=r(Ce),Me=m(Ce,"DIV",{class:!0});var pe=R(Me);y(Ne.$$.fragment,pe),Le=r(pe),Oe=m(pe,"P",{"data-svelte-h":!0}),f(Oe)!=="svelte-1mtjkl"&&(Oe.innerHTML=Ke),it=r(pe),y(Je.$$.fragment,pe),Ie=r(pe),y(te.$$.fragment,pe),pe.forEach(n),Ce.forEach(n),Ue=r(h),y(O.$$.fragment,h),ze=r(h),Q=m(h,"DIV",{class:!0});var H=R(Q);y(he.$$.fragment,H),et=r(H),lt=m(H,"P",{"data-svelte-h":!0}),f(lt)!=="svelte-16ux587"&&(lt.innerHTML=We),He=r(H),de=m(H,"P",{"data-svelte-h":!0}),f(de)!=="svelte-68lg8f"&&(de.innerHTML=Ee),tt=r(H),oe=m(H,"DIV",{class:!0});var ge=R(oe);y(U.$$.fragment,ge),Re=r(ge),ke=m(ge,"P",{"data-svelte-h":!0}),f(ke)!=="svelte-1l5sz95"&&(ke.innerHTML=ht),yt=r(ge),y(ce.$$.fragment,ge),dt=r(ge),y(Ze.$$.fragment,ge),ge.forEach(n),H.forEach(n),Pe=r(h),y(qe.$$.fragment,h),ft=r(h),V=m(h,"DIV",{class:!0});var B=R(V);y(ae.$$.fragment,B),re=r(B),S=m(B,"P",{"data-svelte-h":!0}),f(S)!=="svelte-1p4p08z"&&(S.innerHTML=ot),nt=r(B),Se=m(B,"P",{"data-svelte-h":!0}),f(Se)!=="svelte-68lg8f"&&(Se.innerHTML=Ft),st=r(B),D=m(B,"DIV",{class:!0});var Z=R(D);y(Qe.$$.fragment,Z),ie=r(Z),Be=m(Z,"P",{"data-svelte-h":!0}),f(Be)!=="svelte-10q4ppr"&&(Be.innerHTML=we),ct=r(Z),y(J.$$.fragment,Z),fe=r(Z),y(Ge.$$.fragment,Z),Z.forEach(n),B.forEach(n),this.h()},h(){W(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(h,q){b(t,h,q),l(h,g,q),l(h,o,q),b(i,o,null),d(o,w),d(o,s),d(o,A),d(o,z),b(C,z,null),d(z,Y),d(z,j),d(z,I),b(p,z,null),d(z,F),b(le,z,null),l(h,je,q),b(De,h,q),l(h,be,q),l(h,E,q),b(ue,E,null),d(E,rt),d(E,K),d(E,G),d(E,ee),d(E,Te),d(E,Me),b(Ne,Me,null),d(Me,Le),d(Me,Oe),d(Me,it),b(Je,Me,null),d(Me,Ie),b(te,Me,null),l(h,Ue,q),b(O,h,q),l(h,ze,q),l(h,Q,q),b(he,Q,null),d(Q,et),d(Q,lt),d(Q,He),d(Q,de),d(Q,tt),d(Q,oe),b(U,oe,null),d(oe,Re),d(oe,ke),d(oe,yt),b(ce,oe,null),d(oe,dt),b(Ze,oe,null),l(h,Pe,q),b(qe,h,q),l(h,ft,q),l(h,V,q),b(ae,V,null),d(V,re),d(V,S),d(V,nt),d(V,Se),d(V,st),d(V,D),b(Qe,D,null),d(D,ie),d(D,Be),d(D,ct),b(J,D,null),d(D,fe),b(Ge,D,null),me=!0},p(h,q){const X={};q&2&&(X.$$scope={dirty:q,ctx:h}),p.$set(X);const Ce={};q&2&&(Ce.$$scope={dirty:q,ctx:h}),le.$set(Ce);const pe={};q&2&&(pe.$$scope={dirty:q,ctx:h}),Je.$set(pe);const H={};q&2&&(H.$$scope={dirty:q,ctx:h}),te.$set(H);const ge={};q&2&&(ge.$$scope={dirty:q,ctx:h}),ce.$set(ge);const B={};q&2&&(B.$$scope={dirty:q,ctx:h}),Ze.$set(B);const Z={};q&2&&(Z.$$scope={dirty:q,ctx:h}),J.$set(Z);const Lt={};q&2&&(Lt.$$scope={dirty:q,ctx:h}),Ge.$set(Lt)},i(h){me||(T(t.$$.fragment,h),T(i.$$.fragment,h),T(C.$$.fragment,h),T(p.$$.fragment,h),T(le.$$.fragment,h),T(De.$$.fragment,h),T(ue.$$.fragment,h),T(Ne.$$.fragment,h),T(Je.$$.fragment,h),T(te.$$.fragment,h),T(O.$$.fragment,h),T(he.$$.fragment,h),T(U.$$.fragment,h),T(ce.$$.fragment,h),T(Ze.$$.fragment,h),T(qe.$$.fragment,h),T(ae.$$.fragment,h),T(Qe.$$.fragment,h),T(J.$$.fragment,h),T(Ge.$$.fragment,h),me=!0)},o(h){M(t.$$.fragment,h),M(i.$$.fragment,h),M(C.$$.fragment,h),M(p.$$.fragment,h),M(le.$$.fragment,h),M(De.$$.fragment,h),M(ue.$$.fragment,h),M(Ne.$$.fragment,h),M(Je.$$.fragment,h),M(te.$$.fragment,h),M(O.$$.fragment,h),M(he.$$.fragment,h),M(U.$$.fragment,h),M(ce.$$.fragment,h),M(Ze.$$.fragment,h),M(qe.$$.fragment,h),M(ae.$$.fragment,h),M(Qe.$$.fragment,h),M(J.$$.fragment,h),M(Ge.$$.fragment,h),me=!1},d(h){h&&(n(g),n(o),n(je),n(be),n(E),n(Ue),n(ze),n(Q),n(Pe),n(ft),n(V)),L(t,h),L(i),L(C),L(p),L(le),L(De,h),L(ue),L(Ne),L(Je),L(te),L(O,h),L(he),L(U),L(ce),L(Ze),L(qe,h),L(ae),L(Qe),L(J),L(Ge)}}}function cn($){let t,g;return t=new Ho({props:{$$slots:{default:[dn]},$$scope:{ctx:$}}}),{c(){v(t.$$.fragment)},l(o){y(t.$$.fragment,o)},m(o,i){b(t,o,i),g=!0},p(o,i){const w={};i&2&&(w.$$scope={dirty:i,ctx:o}),t.$set(w)},i(o){g||(T(t.$$.fragment,o),g=!0)},o(o){M(t.$$.fragment,o),g=!1},d(o){L(t,o)}}}function mn($){let t,g="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,i,w="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",s,k,A=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,C,Y=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,j,N,I=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=c("p"),t.innerHTML=g,o=a(),i=c("ul"),i.innerHTML=w,s=a(),k=c("p"),k.innerHTML=A,z=a(),C=c("ul"),C.innerHTML=Y,j=a(),N=c("p"),N.innerHTML=I},l(p){t=m(p,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1ajbfxg"&&(t.innerHTML=g),o=r(p),i=m(p,"UL",{"data-svelte-h":!0}),f(i)!=="svelte-qm1t26"&&(i.innerHTML=w),s=r(p),k=m(p,"P",{"data-svelte-h":!0}),f(k)!=="svelte-1v9qsc5"&&(k.innerHTML=A),z=r(p),C=m(p,"UL",{"data-svelte-h":!0}),f(C)!=="svelte-15scerc"&&(C.innerHTML=Y),j=r(p),N=m(p,"P",{"data-svelte-h":!0}),f(N)!=="svelte-1an3odd"&&(N.innerHTML=I)},m(p,F){l(p,t,F),l(p,o,F),l(p,i,F),l(p,s,F),l(p,k,F),l(p,z,F),l(p,C,F),l(p,j,F),l(p,N,F)},p:se,d(p){p&&(n(t),n(o),n(i),n(s),n(k),n(z),n(C),n(j),n(N))}}}function pn($){let t,g=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=g},l(o){t=m(o,"P",{"data-svelte-h":!0}),f(t)!=="svelte-fincs2"&&(t.innerHTML=g)},m(o,i){l(o,t,i)},p:se,d(o){o&&n(t)}}}function un($){let t,g="Examples:",o,i,w;return i=new Ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBURkF1dG9Nb2RlbCUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmxheW91dGxtdjMtYmFzZSUyMiUyQyUyMGFwcGx5X29jciUzREZhbHNlKSUwQW1vZGVsJTIwJTNEJTIwVEZBdXRvTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmxheW91dGxtdjMtYmFzZSUyMiklMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMm5pZWxzciUyRmZ1bnNkLWxheW91dGxtdjMlMjIlMkMlMjBzcGxpdCUzRCUyMnRyYWluJTIyKSUwQWV4YW1wbGUlMjAlM0QlMjBkYXRhc2V0JTVCMCU1RCUwQWltYWdlJTIwJTNEJTIwZXhhbXBsZSU1QiUyMmltYWdlJTIyJTVEJTBBd29yZHMlMjAlM0QlMjBleGFtcGxlJTVCJTIydG9rZW5zJTIyJTVEJTBBYm94ZXMlMjAlM0QlMjBleGFtcGxlJTVCJTIyYmJveGVzJTIyJTVEJTBBJTBBZW5jb2RpbmclMjAlM0QlMjBwcm9jZXNzb3IoaW1hZ2UlMkMlMjB3b3JkcyUyQyUyMGJveGVzJTNEYm94ZXMlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmVuY29kaW5nKSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFAutoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=g,o=a(),v(i.$$.fragment)},l(s){t=m(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-kvfsh7"&&(t.textContent=g),o=r(s),y(i.$$.fragment,s)},m(s,k){l(s,t,k),l(s,o,k),b(i,s,k),w=!0},p:se,i(s){w||(T(i.$$.fragment,s),w=!0)},o(s){M(i.$$.fragment,s),w=!1},d(s){s&&(n(t),n(o)),L(i,s)}}}function hn($){let t,g="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,i,w="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",s,k,A=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,C,Y=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,j,N,I=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=c("p"),t.innerHTML=g,o=a(),i=c("ul"),i.innerHTML=w,s=a(),k=c("p"),k.innerHTML=A,z=a(),C=c("ul"),C.innerHTML=Y,j=a(),N=c("p"),N.innerHTML=I},l(p){t=m(p,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1ajbfxg"&&(t.innerHTML=g),o=r(p),i=m(p,"UL",{"data-svelte-h":!0}),f(i)!=="svelte-qm1t26"&&(i.innerHTML=w),s=r(p),k=m(p,"P",{"data-svelte-h":!0}),f(k)!=="svelte-1v9qsc5"&&(k.innerHTML=A),z=r(p),C=m(p,"UL",{"data-svelte-h":!0}),f(C)!=="svelte-15scerc"&&(C.innerHTML=Y),j=r(p),N=m(p,"P",{"data-svelte-h":!0}),f(N)!=="svelte-1an3odd"&&(N.innerHTML=I)},m(p,F){l(p,t,F),l(p,o,F),l(p,i,F),l(p,s,F),l(p,k,F),l(p,z,F),l(p,C,F),l(p,j,F),l(p,N,F)},p:se,d(p){p&&(n(t),n(o),n(i),n(s),n(k),n(z),n(C),n(j),n(N))}}}function fn($){let t,g=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=g},l(o){t=m(o,"P",{"data-svelte-h":!0}),f(t)!=="svelte-fincs2"&&(t.innerHTML=g)},m(o,i){l(o,t,i)},p:se,d(o){o&&n(t)}}}function gn($){let t,g="Examples:",o,i,w;return i=new Ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBURkF1dG9Nb2RlbEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmxheW91dGxtdjMtYmFzZSUyMiUyQyUyMGFwcGx5X29jciUzREZhbHNlKSUwQW1vZGVsJTIwJTNEJTIwVEZBdXRvTW9kZWxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYzLWJhc2UlMjIpJTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJuaWVsc3IlMkZmdW5zZC1sYXlvdXRsbXYzJTIyJTJDJTIwc3BsaXQlM0QlMjJ0cmFpbiUyMiklMEFleGFtcGxlJTIwJTNEJTIwZGF0YXNldCU1QjAlNUQlMEFpbWFnZSUyMCUzRCUyMGV4YW1wbGUlNUIlMjJpbWFnZSUyMiU1RCUwQXdvcmRzJTIwJTNEJTIwZXhhbXBsZSU1QiUyMnRva2VucyUyMiU1RCUwQWJveGVzJTIwJTNEJTIwZXhhbXBsZSU1QiUyMmJib3hlcyUyMiU1RCUwQSUwQWVuY29kaW5nJTIwJTNEJTIwcHJvY2Vzc29yKGltYWdlJTJDJTIwd29yZHMlMkMlMjBib3hlcyUzRGJveGVzJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFzZXF1ZW5jZV9sYWJlbCUyMCUzRCUyMHRmLmNvbnZlcnRfdG9fdGVuc29yKCU1QjElNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmclMkMlMjBsYWJlbHMlM0RzZXF1ZW5jZV9sYWJlbCklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFAutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = tf.convert_to_tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=g,o=a(),v(i.$$.fragment)},l(s){t=m(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-kvfsh7"&&(t.textContent=g),o=r(s),y(i.$$.fragment,s)},m(s,k){l(s,t,k),l(s,o,k),b(i,s,k),w=!0},p:se,i(s){w||(T(i.$$.fragment,s),w=!0)},o(s){M(i.$$.fragment,s),w=!1},d(s){s&&(n(t),n(o)),L(i,s)}}}function _n($){let t,g="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,i,w="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",s,k,A=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,C,Y=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,j,N,I=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=c("p"),t.innerHTML=g,o=a(),i=c("ul"),i.innerHTML=w,s=a(),k=c("p"),k.innerHTML=A,z=a(),C=c("ul"),C.innerHTML=Y,j=a(),N=c("p"),N.innerHTML=I},l(p){t=m(p,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1ajbfxg"&&(t.innerHTML=g),o=r(p),i=m(p,"UL",{"data-svelte-h":!0}),f(i)!=="svelte-qm1t26"&&(i.innerHTML=w),s=r(p),k=m(p,"P",{"data-svelte-h":!0}),f(k)!=="svelte-1v9qsc5"&&(k.innerHTML=A),z=r(p),C=m(p,"UL",{"data-svelte-h":!0}),f(C)!=="svelte-15scerc"&&(C.innerHTML=Y),j=r(p),N=m(p,"P",{"data-svelte-h":!0}),f(N)!=="svelte-1an3odd"&&(N.innerHTML=I)},m(p,F){l(p,t,F),l(p,o,F),l(p,i,F),l(p,s,F),l(p,k,F),l(p,z,F),l(p,C,F),l(p,j,F),l(p,N,F)},p:se,d(p){p&&(n(t),n(o),n(i),n(s),n(k),n(z),n(C),n(j),n(N))}}}function vn($){let t,g=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=g},l(o){t=m(o,"P",{"data-svelte-h":!0}),f(t)!=="svelte-fincs2"&&(t.innerHTML=g)},m(o,i){l(o,t,i)},p:se,d(o){o&&n(t)}}}function yn($){let t,g="Examples:",o,i,w;return i=new Ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBURkF1dG9Nb2RlbEZvclRva2VuQ2xhc3NpZmljYXRpb24lMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYzLWJhc2UlMjIlMkMlMjBhcHBseV9vY3IlM0RGYWxzZSklMEFtb2RlbCUyMCUzRCUyMFRGQXV0b01vZGVsRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbGF5b3V0bG12My1iYXNlJTIyJTJDJTIwbnVtX2xhYmVscyUzRDcpJTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJuaWVsc3IlMkZmdW5zZC1sYXlvdXRsbXYzJTIyJTJDJTIwc3BsaXQlM0QlMjJ0cmFpbiUyMiklMEFleGFtcGxlJTIwJTNEJTIwZGF0YXNldCU1QjAlNUQlMEFpbWFnZSUyMCUzRCUyMGV4YW1wbGUlNUIlMjJpbWFnZSUyMiU1RCUwQXdvcmRzJTIwJTNEJTIwZXhhbXBsZSU1QiUyMnRva2VucyUyMiU1RCUwQWJveGVzJTIwJTNEJTIwZXhhbXBsZSU1QiUyMmJib3hlcyUyMiU1RCUwQXdvcmRfbGFiZWxzJTIwJTNEJTIwZXhhbXBsZSU1QiUyMm5lcl90YWdzJTIyJTVEJTBBJTBBZW5jb2RpbmclMjAlM0QlMjBwcm9jZXNzb3IoaW1hZ2UlMkMlMjB3b3JkcyUyQyUyMGJveGVzJTNEYm94ZXMlMkMlMjB3b3JkX2xhYmVscyUzRHdvcmRfbGFiZWxzJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiplbmNvZGluZyklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFAutoModelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, num_labels=<span class="hljs-number">7</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = example[<span class="hljs-string">&quot;ner_tags&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=g,o=a(),v(i.$$.fragment)},l(s){t=m(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-kvfsh7"&&(t.textContent=g),o=r(s),y(i.$$.fragment,s)},m(s,k){l(s,t,k),l(s,o,k),b(i,s,k),w=!0},p:se,i(s){w||(T(i.$$.fragment,s),w=!0)},o(s){M(i.$$.fragment,s),w=!1},d(s){s&&(n(t),n(o)),L(i,s)}}}function bn($){let t,g="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,i,w="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",s,k,A=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,C,Y=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,j,N,I=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=c("p"),t.innerHTML=g,o=a(),i=c("ul"),i.innerHTML=w,s=a(),k=c("p"),k.innerHTML=A,z=a(),C=c("ul"),C.innerHTML=Y,j=a(),N=c("p"),N.innerHTML=I},l(p){t=m(p,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1ajbfxg"&&(t.innerHTML=g),o=r(p),i=m(p,"UL",{"data-svelte-h":!0}),f(i)!=="svelte-qm1t26"&&(i.innerHTML=w),s=r(p),k=m(p,"P",{"data-svelte-h":!0}),f(k)!=="svelte-1v9qsc5"&&(k.innerHTML=A),z=r(p),C=m(p,"UL",{"data-svelte-h":!0}),f(C)!=="svelte-15scerc"&&(C.innerHTML=Y),j=r(p),N=m(p,"P",{"data-svelte-h":!0}),f(N)!=="svelte-1an3odd"&&(N.innerHTML=I)},m(p,F){l(p,t,F),l(p,o,F),l(p,i,F),l(p,s,F),l(p,k,F),l(p,z,F),l(p,C,F),l(p,j,F),l(p,N,F)},p:se,d(p){p&&(n(t),n(o),n(i),n(s),n(k),n(z),n(C),n(j),n(N))}}}function Tn($){let t,g=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=g},l(o){t=m(o,"P",{"data-svelte-h":!0}),f(t)!=="svelte-fincs2"&&(t.innerHTML=g)},m(o,i){l(o,t,i)},p:se,d(o){o&&n(t)}}}function Mn($){let t,g="Examples:",o,i,w;return i=new Ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBURkF1dG9Nb2RlbEZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYzLWJhc2UlMjIlMkMlMjBhcHBseV9vY3IlM0RGYWxzZSklMEFtb2RlbCUyMCUzRCUyMFRGQXV0b01vZGVsRm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmxheW91dGxtdjMtYmFzZSUyMiklMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMm5pZWxzciUyRmZ1bnNkLWxheW91dGxtdjMlMjIlMkMlMjBzcGxpdCUzRCUyMnRyYWluJTIyKSUwQWV4YW1wbGUlMjAlM0QlMjBkYXRhc2V0JTVCMCU1RCUwQWltYWdlJTIwJTNEJTIwZXhhbXBsZSU1QiUyMmltYWdlJTIyJTVEJTBBcXVlc3Rpb24lMjAlM0QlMjAlMjJ3aGF0J3MlMjBoaXMlMjBuYW1lJTNGJTIyJTBBd29yZHMlMjAlM0QlMjBleGFtcGxlJTVCJTIydG9rZW5zJTIyJTVEJTBBYm94ZXMlMjAlM0QlMjBleGFtcGxlJTVCJTIyYmJveGVzJTIyJTVEJTBBJTBBZW5jb2RpbmclMjAlM0QlMjBwcm9jZXNzb3IoaW1hZ2UlMkMlMjBxdWVzdGlvbiUyQyUyMHdvcmRzJTJDJTIwYm94ZXMlM0Rib3hlcyUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBc3RhcnRfcG9zaXRpb25zJTIwJTNEJTIwdGYuY29udmVydF90b190ZW5zb3IoJTVCMSU1RCklMEFlbmRfcG9zaXRpb25zJTIwJTNEJTIwdGYuY29udmVydF90b190ZW5zb3IoJTVCMyU1RCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiplbmNvZGluZyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHN0YXJ0X3Bvc2l0aW9ucyUyQyUyMGVuZF9wb3NpdGlvbnMlM0RlbmRfcG9zaXRpb25zKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFzdGFydF9zY29yZXMlMjAlM0QlMjBvdXRwdXRzLnN0YXJ0X2xvZ2l0cyUwQWVuZF9zY29yZXMlMjAlM0QlMjBvdXRwdXRzLmVuZF9sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFAutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = tf.convert_to_tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = tf.convert_to_tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=g,o=a(),v(i.$$.fragment)},l(s){t=m(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-kvfsh7"&&(t.textContent=g),o=r(s),y(i.$$.fragment,s)},m(s,k){l(s,t,k),l(s,o,k),b(i,s,k),w=!0},p:se,i(s){w||(T(i.$$.fragment,s),w=!0)},o(s){M(i.$$.fragment,s),w=!1},d(s){s&&(n(t),n(o)),L(i,s)}}}function Ln($){let t,g,o,i,w,s,k=`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,A,z,C=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Y,j,N,I,p,F,le,je='The <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3Model">TFLayoutLMv3Model</a> forward method, overrides the <code>__call__</code> special method.',De,be,E,ue,rt,K,Mt,G,ee,vt,Te,Me=`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
<a href="https://www.cs.cmu.edu/~aharley/rvl-cdip/" rel="nofollow">RVL-CDIP</a> dataset.`,Ne,Le,Oe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ke,it,Je=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Ie,te,Ue,O,ze,Q,he,et='The <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForSequenceClassification">TFLayoutLMv3ForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',lt,We,He,de,Ee,tt,oe,U,Re,ke,ht,yt=`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as <a href="https://guillaumejaume.github.io/FUNSD/" rel="nofollow">FUNSD</a>,
<a href="https://rrc.cvc.uab.es/?ch=13" rel="nofollow">SROIE</a>, <a href="https://github.com/clovaai/cord" rel="nofollow">CORD</a> and
<a href="https://github.com/applicaai/kleister-nda" rel="nofollow">Kleister-NDA</a>.`,ce,dt,Ze=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Pe,qe,ft=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,V,ae,re,S,ot,nt,Se,Ft='The <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForTokenClassification">TFLayoutLMv3ForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',st,D,Qe,ie,Be,we,ct,J,fe,Ge,me,h=`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
<a href="https://rrc.cvc.uab.es/?ch=17" rel="nofollow">DocVQA</a> (a linear layer on top of the text part of the hidden-states output to
compute <code>span start logits</code> and <code>span end logits</code>).`,q,X,Ce=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,pe,H,ge=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,B,Z,Lt,_e,kt,It,Ve,wt='The <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForQuestionAnswering">TFLayoutLMv3ForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Ut,Xe,Vt,mt,gt;return t=new Fe({props:{title:"TFLayoutLMv3Model",local:"transformers.TFLayoutLMv3Model",headingTag:"h2"}}),i=new P({props:{name:"class transformers.TFLayoutLMv3Model",anchor:"transformers.TFLayoutLMv3Model",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1258"}}),j=new ut({props:{$$slots:{default:[mn]},$$scope:{ctx:$}}}),p=new P({props:{name:"call",anchor:"transformers.TFLayoutLMv3Model.call",parameters:[{name:"input_ids",val:": tf.Tensor | None = None"},{name:"bbox",val:": tf.Tensor | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"token_type_ids",val:": tf.Tensor | None = None"},{name:"position_ids",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"pixel_values",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMv3Model.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMv3Model.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.TFLayoutLMv3Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMv3Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMv3Model.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMv3Model.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMv3Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMv3Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMv3Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMv3Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1270",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),be=new ut({props:{$$slots:{default:[pn]},$$scope:{ctx:$}}}),ue=new qt({props:{anchor:"transformers.TFLayoutLMv3Model.call.example",$$slots:{default:[un]},$$scope:{ctx:$}}}),K=new Fe({props:{title:"TFLayoutLMv3ForSequenceClassification",local:"transformers.TFLayoutLMv3ForSequenceClassification",headingTag:"h2"}}),ee=new P({props:{name:"class transformers.TFLayoutLMv3ForSequenceClassification",anchor:"transformers.TFLayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:": LayoutLMv3Config"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1392"}}),te=new ut({props:{$$slots:{default:[hn]},$$scope:{ctx:$}}}),ze=new P({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call",parameters:[{name:"input_ids",val:": tf.Tensor | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"token_type_ids",val:": tf.Tensor | None = None"},{name:"position_ids",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"bbox",val:": tf.Tensor | None = None"},{name:"pixel_values",val:": tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1410",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),We=new ut({props:{$$slots:{default:[fn]},$$scope:{ctx:$}}}),de=new qt({props:{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.example",$$slots:{default:[gn]},$$scope:{ctx:$}}}),tt=new Fe({props:{title:"TFLayoutLMv3ForTokenClassification",local:"transformers.TFLayoutLMv3ForTokenClassification",headingTag:"h2"}}),Re=new P({props:{name:"class transformers.TFLayoutLMv3ForTokenClassification",anchor:"transformers.TFLayoutLMv3ForTokenClassification",parameters:[{name:"config",val:": LayoutLMv3Config"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1506"}}),ae=new ut({props:{$$slots:{default:[_n]},$$scope:{ctx:$}}}),ot=new P({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForTokenClassification.call",parameters:[{name:"input_ids",val:": tf.Tensor | None = None"},{name:"bbox",val:": tf.Tensor | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"token_type_ids",val:": tf.Tensor | None = None"},{name:"position_ids",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"pixel_values",val:": tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1535",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),D=new ut({props:{$$slots:{default:[vn]},$$scope:{ctx:$}}}),ie=new qt({props:{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.example",$$slots:{default:[yn]},$$scope:{ctx:$}}}),we=new Fe({props:{title:"TFLayoutLMv3ForQuestionAnswering",local:"transformers.TFLayoutLMv3ForQuestionAnswering",headingTag:"h2"}}),fe=new P({props:{name:"class transformers.TFLayoutLMv3ForQuestionAnswering",anchor:"transformers.TFLayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:": LayoutLMv3Config"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1644"}}),Z=new ut({props:{$$slots:{default:[bn]},$$scope:{ctx:$}}}),kt=new P({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": tf.Tensor | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"token_type_ids",val:": tf.Tensor | None = None"},{name:"position_ids",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"start_positions",val:": tf.Tensor | None = None"},{name:"end_positions",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"bbox",val:": tf.Tensor | None = None"},{name:"pixel_values",val:": tf.Tensor | None = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1664",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),Xe=new ut({props:{$$slots:{default:[Tn]},$$scope:{ctx:$}}}),mt=new qt({props:{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.example",$$slots:{default:[Mn]},$$scope:{ctx:$}}}),{c(){v(t.$$.fragment),g=a(),o=c("div"),v(i.$$.fragment),w=a(),s=c("p"),s.innerHTML=k,A=a(),z=c("p"),z.innerHTML=C,Y=a(),v(j.$$.fragment),N=a(),I=c("div"),v(p.$$.fragment),F=a(),le=c("p"),le.innerHTML=je,De=a(),v(be.$$.fragment),E=a(),v(ue.$$.fragment),rt=a(),v(K.$$.fragment),Mt=a(),G=c("div"),v(ee.$$.fragment),vt=a(),Te=c("p"),Te.innerHTML=Me,Ne=a(),Le=c("p"),Le.innerHTML=Oe,Ke=a(),it=c("p"),it.innerHTML=Je,Ie=a(),v(te.$$.fragment),Ue=a(),O=c("div"),v(ze.$$.fragment),Q=a(),he=c("p"),he.innerHTML=et,lt=a(),v(We.$$.fragment),He=a(),v(de.$$.fragment),Ee=a(),v(tt.$$.fragment),oe=a(),U=c("div"),v(Re.$$.fragment),ke=a(),ht=c("p"),ht.innerHTML=yt,ce=a(),dt=c("p"),dt.innerHTML=Ze,Pe=a(),qe=c("p"),qe.innerHTML=ft,V=a(),v(ae.$$.fragment),re=a(),S=c("div"),v(ot.$$.fragment),nt=a(),Se=c("p"),Se.innerHTML=Ft,st=a(),v(D.$$.fragment),Qe=a(),v(ie.$$.fragment),Be=a(),v(we.$$.fragment),ct=a(),J=c("div"),v(fe.$$.fragment),Ge=a(),me=c("p"),me.innerHTML=h,q=a(),X=c("p"),X.innerHTML=Ce,pe=a(),H=c("p"),H.innerHTML=ge,B=a(),v(Z.$$.fragment),Lt=a(),_e=c("div"),v(kt.$$.fragment),It=a(),Ve=c("p"),Ve.innerHTML=wt,Ut=a(),v(Xe.$$.fragment),Vt=a(),v(mt.$$.fragment),this.h()},l(u){y(t.$$.fragment,u),g=r(u),o=m(u,"DIV",{class:!0});var x=R(o);y(i.$$.fragment,x),w=r(x),s=m(x,"P",{"data-svelte-h":!0}),f(s)!=="svelte-xkflff"&&(s.innerHTML=k),A=r(x),z=m(x,"P",{"data-svelte-h":!0}),f(z)!=="svelte-1be7e3c"&&(z.innerHTML=C),Y=r(x),y(j.$$.fragment,x),N=r(x),I=m(x,"DIV",{class:!0});var ve=R(I);y(p.$$.fragment,ve),F=r(ve),le=m(ve,"P",{"data-svelte-h":!0}),f(le)!=="svelte-1ogyft1"&&(le.innerHTML=je),De=r(ve),y(be.$$.fragment,ve),E=r(ve),y(ue.$$.fragment,ve),ve.forEach(n),x.forEach(n),rt=r(u),y(K.$$.fragment,u),Mt=r(u),G=m(u,"DIV",{class:!0});var ye=R(G);y(ee.$$.fragment,ye),vt=r(ye),Te=m(ye,"P",{"data-svelte-h":!0}),f(Te)!=="svelte-oc0y77"&&(Te.innerHTML=Me),Ne=r(ye),Le=m(ye,"P",{"data-svelte-h":!0}),f(Le)!=="svelte-1qaxm70"&&(Le.innerHTML=Oe),Ke=r(ye),it=m(ye,"P",{"data-svelte-h":!0}),f(it)!=="svelte-1be7e3c"&&(it.innerHTML=Je),Ie=r(ye),y(te.$$.fragment,ye),Ue=r(ye),O=m(ye,"DIV",{class:!0});var xe=R(O);y(ze.$$.fragment,xe),Q=r(xe),he=m(xe,"P",{"data-svelte-h":!0}),f(he)!=="svelte-n692x1"&&(he.innerHTML=et),lt=r(xe),y(We.$$.fragment,xe),He=r(xe),y(de.$$.fragment,xe),xe.forEach(n),ye.forEach(n),Ee=r(u),y(tt.$$.fragment,u),oe=r(u),U=m(u,"DIV",{class:!0});var $e=R(U);y(Re.$$.fragment,$e),ke=r($e),ht=m($e,"P",{"data-svelte-h":!0}),f(ht)!=="svelte-16ux587"&&(ht.innerHTML=yt),ce=r($e),dt=m($e,"P",{"data-svelte-h":!0}),f(dt)!=="svelte-1qaxm70"&&(dt.innerHTML=Ze),Pe=r($e),qe=m($e,"P",{"data-svelte-h":!0}),f(qe)!=="svelte-1be7e3c"&&(qe.innerHTML=ft),V=r($e),y(ae.$$.fragment,$e),re=r($e),S=m($e,"DIV",{class:!0});var Ae=R(S);y(ot.$$.fragment,Ae),nt=r(Ae),Se=m(Ae,"P",{"data-svelte-h":!0}),f(Se)!=="svelte-df5959"&&(Se.innerHTML=Ft),st=r(Ae),y(D.$$.fragment,Ae),Qe=r(Ae),y(ie.$$.fragment,Ae),Ae.forEach(n),$e.forEach(n),Be=r(u),y(we.$$.fragment,u),ct=r(u),J=m(u,"DIV",{class:!0});var ne=R(J);y(fe.$$.fragment,ne),Ge=r(ne),me=m(ne,"P",{"data-svelte-h":!0}),f(me)!=="svelte-1p4p08z"&&(me.innerHTML=h),q=r(ne),X=m(ne,"P",{"data-svelte-h":!0}),f(X)!=="svelte-1qaxm70"&&(X.innerHTML=Ce),pe=r(ne),H=m(ne,"P",{"data-svelte-h":!0}),f(H)!=="svelte-1be7e3c"&&(H.innerHTML=ge),B=r(ne),y(Z.$$.fragment,ne),Lt=r(ne),_e=m(ne,"DIV",{class:!0});var at=R(_e);y(kt.$$.fragment,at),It=r(at),Ve=m(at,"P",{"data-svelte-h":!0}),f(Ve)!=="svelte-rotgrv"&&(Ve.innerHTML=wt),Ut=r(at),y(Xe.$$.fragment,at),Vt=r(at),y(mt.$$.fragment,at),at.forEach(n),ne.forEach(n),this.h()},h(){W(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(u,x){b(t,u,x),l(u,g,x),l(u,o,x),b(i,o,null),d(o,w),d(o,s),d(o,A),d(o,z),d(o,Y),b(j,o,null),d(o,N),d(o,I),b(p,I,null),d(I,F),d(I,le),d(I,De),b(be,I,null),d(I,E),b(ue,I,null),l(u,rt,x),b(K,u,x),l(u,Mt,x),l(u,G,x),b(ee,G,null),d(G,vt),d(G,Te),d(G,Ne),d(G,Le),d(G,Ke),d(G,it),d(G,Ie),b(te,G,null),d(G,Ue),d(G,O),b(ze,O,null),d(O,Q),d(O,he),d(O,lt),b(We,O,null),d(O,He),b(de,O,null),l(u,Ee,x),b(tt,u,x),l(u,oe,x),l(u,U,x),b(Re,U,null),d(U,ke),d(U,ht),d(U,ce),d(U,dt),d(U,Pe),d(U,qe),d(U,V),b(ae,U,null),d(U,re),d(U,S),b(ot,S,null),d(S,nt),d(S,Se),d(S,st),b(D,S,null),d(S,Qe),b(ie,S,null),l(u,Be,x),b(we,u,x),l(u,ct,x),l(u,J,x),b(fe,J,null),d(J,Ge),d(J,me),d(J,q),d(J,X),d(J,pe),d(J,H),d(J,B),b(Z,J,null),d(J,Lt),d(J,_e),b(kt,_e,null),d(_e,It),d(_e,Ve),d(_e,Ut),b(Xe,_e,null),d(_e,Vt),b(mt,_e,null),gt=!0},p(u,x){const ve={};x&2&&(ve.$$scope={dirty:x,ctx:u}),j.$set(ve);const ye={};x&2&&(ye.$$scope={dirty:x,ctx:u}),be.$set(ye);const xe={};x&2&&(xe.$$scope={dirty:x,ctx:u}),ue.$set(xe);const $e={};x&2&&($e.$$scope={dirty:x,ctx:u}),te.$set($e);const Ae={};x&2&&(Ae.$$scope={dirty:x,ctx:u}),We.$set(Ae);const ne={};x&2&&(ne.$$scope={dirty:x,ctx:u}),de.$set(ne);const at={};x&2&&(at.$$scope={dirty:x,ctx:u}),ae.$set(at);const Xt={};x&2&&(Xt.$$scope={dirty:x,ctx:u}),D.$set(Xt);const zt={};x&2&&(zt.$$scope={dirty:x,ctx:u}),ie.$set(zt);const lo={};x&2&&(lo.$$scope={dirty:x,ctx:u}),Z.$set(lo);const At={};x&2&&(At.$$scope={dirty:x,ctx:u}),Xe.$set(At);const bt={};x&2&&(bt.$$scope={dirty:x,ctx:u}),mt.$set(bt)},i(u){gt||(T(t.$$.fragment,u),T(i.$$.fragment,u),T(j.$$.fragment,u),T(p.$$.fragment,u),T(be.$$.fragment,u),T(ue.$$.fragment,u),T(K.$$.fragment,u),T(ee.$$.fragment,u),T(te.$$.fragment,u),T(ze.$$.fragment,u),T(We.$$.fragment,u),T(de.$$.fragment,u),T(tt.$$.fragment,u),T(Re.$$.fragment,u),T(ae.$$.fragment,u),T(ot.$$.fragment,u),T(D.$$.fragment,u),T(ie.$$.fragment,u),T(we.$$.fragment,u),T(fe.$$.fragment,u),T(Z.$$.fragment,u),T(kt.$$.fragment,u),T(Xe.$$.fragment,u),T(mt.$$.fragment,u),gt=!0)},o(u){M(t.$$.fragment,u),M(i.$$.fragment,u),M(j.$$.fragment,u),M(p.$$.fragment,u),M(be.$$.fragment,u),M(ue.$$.fragment,u),M(K.$$.fragment,u),M(ee.$$.fragment,u),M(te.$$.fragment,u),M(ze.$$.fragment,u),M(We.$$.fragment,u),M(de.$$.fragment,u),M(tt.$$.fragment,u),M(Re.$$.fragment,u),M(ae.$$.fragment,u),M(ot.$$.fragment,u),M(D.$$.fragment,u),M(ie.$$.fragment,u),M(we.$$.fragment,u),M(fe.$$.fragment,u),M(Z.$$.fragment,u),M(kt.$$.fragment,u),M(Xe.$$.fragment,u),M(mt.$$.fragment,u),gt=!1},d(u){u&&(n(g),n(o),n(rt),n(Mt),n(G),n(Ee),n(oe),n(U),n(Be),n(ct),n(J)),L(t,u),L(i),L(j),L(p),L(be),L(ue),L(K,u),L(ee),L(te),L(ze),L(We),L(de),L(tt,u),L(Re),L(ae),L(ot),L(D),L(ie),L(we,u),L(fe),L(Z),L(kt),L(Xe),L(mt)}}}function kn($){let t,g;return t=new Ho({props:{$$slots:{default:[Ln]},$$scope:{ctx:$}}}),{c(){v(t.$$.fragment)},l(o){y(t.$$.fragment,o)},m(o,i){b(t,o,i),g=!0},p(o,i){const w={};i&2&&(w.$$scope={dirty:i,ctx:o}),t.$set(w)},i(o){g||(T(t.$$.fragment,o),g=!0)},o(o){M(t.$$.fragment,o),g=!1},d(o){L(t,o)}}}function wn($){let t,g,o,i,w,s,k,A,z,C=`The LayoutLMv3 model was proposed in <a href="https://arxiv.org/abs/2204.08387" rel="nofollow">LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking</a> by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies <a href="layoutlmv2">LayoutLMv2</a> by using patch embeddings (as in <a href="vit">ViT</a>) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`,Y,j,N="The abstract from the paper is the following:",I,p,F="<em>Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis.</em>",le,je,De,be,E,ue='LayoutLMv3 architecture. Taken from the <a href="https://arxiv.org/abs/2204.08387">original paper</a>.',rt,K,Mt='This model was contributed by <a href="https://huggingface.co/nielsr" rel="nofollow">nielsr</a>. The TensorFlow version of this model was added by <a href="https://huggingface.co/chriskoo" rel="nofollow">chriskoo</a>, <a href="https://huggingface.co/tokec" rel="nofollow">tokec</a>, and <a href="https://huggingface.co/lre" rel="nofollow">lre</a>. The original code can be found <a href="https://github.com/microsoft/unilm/tree/master/layoutlmv3" rel="nofollow">here</a>.',G,ee,vt,Te,Me=`<li>In terms of data processing, LayoutLMv3 is identical to its predecessor <a href="layoutlmv2">LayoutLMv2</a>, except that:<ul><li>images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format.</li> <li>text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor">LayoutLMv3Processor</a> which internally combines a <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ImageProcessor">LayoutLMv3ImageProcessor</a> (for the image modality) and a <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>/<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a> (for the text modality) to prepare all data for the model.</li></ul></li> <li>Regarding usage of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor">LayoutLMv3Processor</a>, we refer to the <a href="layoutlmv2#usage-layoutlmv2processor">usage guide</a> of its predecessor.</li>`,Ne,Le,Oe,Ke,it="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started with LayoutLMv3. If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",Je,Ie,te,Ue,O='<li>Demo notebooks for LayoutLMv3 can be found <a href="https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LayoutLMv3" rel="nofollow">here</a>.</li> <li>Demo scripts can be found <a href="https://github.com/huggingface/transformers/tree/main/examples/research_projects/layoutlmv3" rel="nofollow">here</a>.</li>',ze,Q,he,et,lt='<li><a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification">LayoutLMv2ForSequenceClassification</a> is supported by this <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/RVL-CDIP/Fine_tuning_LayoutLMv2ForSequenceClassification_on_RVL_CDIP.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="../tasks/sequence_classification">Text classification task guide</a></li>',We,He,de,Ee,tt='<li><a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification">LayoutLMv3ForTokenClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/research_projects/layoutlmv3" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv3/Fine_tune_LayoutLMv3_on_FUNSD_(HuggingFace_Trainer).ipynb" rel="nofollow">notebook</a>.</li> <li>A <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/FUNSD/Inference_with_LayoutLMv2ForTokenClassification.ipynb" rel="nofollow">notebook</a> for how to perform inference with <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification">LayoutLMv2ForTokenClassification</a> and a <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/FUNSD/True_inference_with_LayoutLMv2ForTokenClassification_%2B_Gradio_demo.ipynb" rel="nofollow">notebook</a> for how to perform inference when no labels are available with <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification">LayoutLMv2ForTokenClassification</a>.</li> <li>A <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/FUNSD/Fine_tuning_LayoutLMv2ForTokenClassification_on_FUNSD_using_HuggingFace_Trainer.ipynb" rel="nofollow">notebook</a> for how to finetune <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification">LayoutLMv2ForTokenClassification</a> with the 🤗 Trainer.</li> <li><a href="../tasks/token_classification">Token classification task guide</a></li>',oe,U,Re,ke,ht='<li><a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering">LayoutLMv2ForQuestionAnswering</a> is supported by this <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/DocVQA/Fine_tuning_LayoutLMv2ForQuestionAnswering_on_DocVQA.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="../tasks/question_answering">Question answering task guide</a></li>',yt,ce,dt="<strong>Document question answering</strong>",Ze,Pe,qe='<li><a href="../tasks/document_question_answering">Document question answering task guide</a></li>',ft,V,ae,re,S,ot,nt,Se=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
<a href="https://huggingface.co/microsoft/layoutlmv3-base" rel="nofollow">microsoft/layoutlmv3-base</a> architecture.`,Ft,st,D=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Qe,ie,Be,we,ct,J,fe,Ge,me,h,q,X,Ce="Preprocess an image or a batch of images.",pe,H,ge,B,Z,Lt,_e,kt="Constructs a LayoutLMv3 image processor.",It,Ve,wt,Ut,Xe,Vt="Preprocess an image or batch of images.",mt,gt,u,x,ve,ye,xe,$e=`Construct a LayoutLMv3 tokenizer. Based on <code>RoBERTatokenizer</code> (Byte Pair Encoding or BPE).
<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> can be used to turn words, word-level bounding boxes and optional word labels to
token-level <code>input_ids</code>, <code>attention_mask</code>, <code>token_type_ids</code>, <code>bbox</code>, and optional <code>labels</code> (for token
classification).`,Ae,ne,at=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Xt,zt,lo=`<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`,At,bt,Wt,To,Yt,Jo=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`,Mo,Dt,Rt,mo,Zt,po,pt,Pt,Lo,Ot,Io="Construct a “fast” LayoutLMv3 tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on BPE.",ko,Kt,Uo=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,wo,jt,St,xo,eo,Wo=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`,uo,Bt,ho,Ye,Gt,$o,to,Ro=`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 image processor and a LayoutLMv3 tokenizer into a
single processor.`,Fo,oo,Zo='<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor">LayoutLMv3Processor</a> offers all the functionalities you need to prepare data for the model.',zo,no,Po=`It first uses <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ImageProcessor">LayoutLMv3ImageProcessor</a> to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or
<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>, which turns the words and bounding boxes into token-level <code>input_ids</code>,
<code>attention_mask</code>, <code>token_type_ids</code>, <code>bbox</code>. Optionally, one can provide integer <code>word_labels</code>, which are turned
into token-level <code>labels</code> for token classification tasks (such as FUNSD, CORD).`,qo,xt,Ht,Co,so,So=`This method first forwards the <code>images</code> argument to <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"><strong>call</strong>()</a>. In case
<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ImageProcessor">LayoutLMv3ImageProcessor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>, it passes the obtained words and
bounding boxes along with the additional arguments to <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"><strong>call</strong>()</a> and returns the output,
together with resized and normalized <code>pixel_values</code>. In case <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ImageProcessor">LayoutLMv3ImageProcessor</a> was initialized with
<code>apply_ocr</code> set to <code>False</code>, it passes the words (<code>text</code>/\`<code>text_pair</code>) and <code>boxes</code> specified by the user along
with the additional arguments to <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"><strong>call</strong>()</a> and returns the output, together with
resized and normalized <code>pixel_values</code>.`,jo,ao,Bo="Please refer to the docstring of the above two methods for more information.",fo,Nt,go,co,_o;return w=new Fe({props:{title:"LayoutLMv3",local:"layoutlmv3",headingTag:"h1"}}),k=new Fe({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ee=new Fe({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Le=new Fe({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Ie=new ut({props:{$$slots:{default:[Oo]},$$scope:{ctx:$}}}),Q=new No({props:{pipeline:"text-classification"}}),He=new No({props:{pipeline:"token-classification"}}),U=new No({props:{pipeline:"question-answering"}}),V=new Fe({props:{title:"LayoutLMv3Config",local:"transformers.LayoutLMv3Config",headingTag:"h2"}}),S=new P({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LayoutLMv3 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv3Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMv3Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMv3Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMv3Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMv3Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMv3Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMv3Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMv3Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMv3Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv3Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMv3Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMv3Config.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"},{anchor:"transformers.LayoutLMv3Config.coordinate_size",description:`<strong>coordinate_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>128</code>) &#x2014;
Dimension of the coordinate embeddings.`,name:"coordinate_size"},{anchor:"transformers.LayoutLMv3Config.shape_size",description:`<strong>shape_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>128</code>) &#x2014;
Dimension of the width and height embeddings.`,name:"shape_size"},{anchor:"transformers.LayoutLMv3Config.has_relative_attention_bias",description:`<strong>has_relative_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a relative attention bias in the self-attention mechanism.`,name:"has_relative_attention_bias"},{anchor:"transformers.LayoutLMv3Config.rel_pos_bins",description:`<strong>rel_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of relative position bins to be used in the self-attention mechanism.`,name:"rel_pos_bins"},{anchor:"transformers.LayoutLMv3Config.max_rel_pos",description:`<strong>max_rel_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum number of relative positions to be used in the self-attention mechanism.`,name:"max_rel_pos"},{anchor:"transformers.LayoutLMv3Config.max_rel_2d_pos",description:`<strong>max_rel_2d_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum number of relative 2D positions in the self-attention mechanism.`,name:"max_rel_2d_pos"},{anchor:"transformers.LayoutLMv3Config.rel_2d_pos_bins",description:`<strong>rel_2d_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of 2D relative position bins in the self-attention mechanism.`,name:"rel_2d_pos_bins"},{anchor:"transformers.LayoutLMv3Config.has_spatial_attention_bias",description:`<strong>has_spatial_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a spatial attention bias in the self-attention mechanism.`,name:"has_spatial_attention_bias"},{anchor:"transformers.LayoutLMv3Config.visual_embed",description:`<strong>visual_embed</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add patch embeddings.`,name:"visual_embed"},{anchor:"transformers.LayoutLMv3Config.input_size",description:`<strong>input_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of the images.`,name:"input_size"},{anchor:"transformers.LayoutLMv3Config.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of channels of the images.`,name:"num_channels"},{anchor:"transformers.LayoutLMv3Config.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of the patches.`,name:"patch_size"},{anchor:"transformers.LayoutLMv3Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L40"}}),ie=new qt({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[Ko]},$$scope:{ctx:$}}}),we=new Fe({props:{title:"LayoutLMv3FeatureExtractor",local:"transformers.LayoutLMv3FeatureExtractor",headingTag:"h2"}}),fe=new P({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L28"}}),h=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/image_processing_utils.py#L549"}}),H=new Fe({props:{title:"LayoutLMv3ImageProcessor",local:"transformers.LayoutLMv3ImageProcessor",headingTag:"h2"}}),Z=new P({props:{name:"class transformers.LayoutLMv3ImageProcessor",anchor:"transformers.LayoutLMv3ImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": Dict = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_rescale",val:": bool = True"},{name:"rescale_value",val:": float = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": Union = None"},{name:"image_std",val:": Union = None"},{name:"apply_ocr",val:": bool = True"},{name:"ocr_lang",val:": Optional = None"},{name:"tesseract_config",val:": Optional = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be
overridden by <code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv3ImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the image after resizing. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.LayoutLMv3ImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv3ImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image&#x2019;s pixel values by the specified <code>rescale_value</code>. Can be overridden by
<code>do_rescale</code> in <code>preprocess</code>.`,name:"do_rescale"},{anchor:"transformers.LayoutLMv3ImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1 / 255) &#x2014;
Value by which the image&#x2019;s pixel values are rescaled. Can be overridden by <code>rescale_factor</code> in
<code>preprocess</code>.`,name:"rescale_factor"},{anchor:"transformers.LayoutLMv3ImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.LayoutLMv3ImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>Iterable[float]</code> or <code>float</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.LayoutLMv3ImageProcessor.image_std",description:`<strong>image_std</strong> (<code>Iterable[float]</code> or <code>float</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"},{anchor:"transformers.LayoutLMv3ImageProcessor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes. Can be overridden by
the <code>apply_ocr</code> parameter in the <code>preprocess</code> method.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv3ImageProcessor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used. Can be overridden by the <code>ocr_lang</code> parameter in the <code>preprocess</code> method.`,name:"ocr_lang"},{anchor:"transformers.LayoutLMv3ImageProcessor.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract. For example: &#x2018;&#x2014;psm 6&#x2019;. Can be overridden by the <code>tesseract_config</code> parameter in the
<code>preprocess</code> method.`,name:"tesseract_config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/image_processing_layoutlmv3.py#L95"}}),wt=new P({props:{name:"preprocess",anchor:"transformers.LayoutLMv3ImageProcessor.preprocess",parameters:[{name:"images",val:": Union"},{name:"do_resize",val:": bool = None"},{name:"size",val:": Dict = None"},{name:"resample",val:" = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": Union = None"},{name:"image_std",val:": Union = None"},{name:"apply_ocr",val:": bool = None"},{name:"ocr_lang",val:": Optional = None"},{name:"tesseract_config",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"data_format",val:": ChannelDimension = <ChannelDimension.FIRST: 'channels_first'>"},{name:"input_data_format",val:": Union = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess. Expects a single or batch of images with pixel values ranging from 0 to 255. If
passing in images with pixel values between 0 and 1, set <code>do_rescale=False</code>.`,name:"images"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Desired size of the output image after applying <code>resize</code>.`,name:"size"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. This can be one of the <code>PILImageResampling</code> filters.
Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image pixel values between [0, 1].`,name:"do_rescale"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to apply to the image pixel values. Only has an effect if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>Iterable[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Mean values to be used for normalization. Only has an effect if <code>do_normalize</code> is set to <code>True</code>.`,name:"image_mean"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>Iterable[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Standard deviation values to be used for normalization. Only has an effect if <code>do_normalize</code> is set to
<code>True</code>.`,name:"image_std"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.apply_ocr</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>, defaults to <code>self.ocr_lang</code>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.`,name:"ocr_lang"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>, defaults to <code>self.tesseract_config</code>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract.`,name:"tesseract_config"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
</ul>`,name:"data_format"},{anchor:"transformers.LayoutLMv3ImageProcessor.preprocess.input_data_format",description:`<strong>input_data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>) &#x2014;
The channel dimension format for the input image. If unset, the channel dimension format is inferred
from the input image. Can be one of:<ul>
<li><code>&quot;channels_first&quot;</code> or <code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>&quot;channels_last&quot;</code> or <code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
<li><code>&quot;none&quot;</code> or <code>ChannelDimension.NONE</code>: image in (height, width) format.</li>
</ul>`,name:"input_data_format"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/image_processing_layoutlmv3.py#L216"}}),gt=new Fe({props:{title:"LayoutLMv3Tokenizer",local:"transformers.LayoutLMv3Tokenizer",headingTag:"h2"}}),ve=new P({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv3Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LayoutLMv3Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LayoutLMv3Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutLMv3Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutLMv3Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv3Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv3Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv3Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv3Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LayoutLMv3Tokenizer.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv3Tokenizer.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),Wt=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"boxes",val:": Union = None"},{name:"word_labels",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability <code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability <code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L550"}}),Rt=new P({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L431"}}),Zt=new Fe({props:{title:"LayoutLMv3TokenizerFast",local:"transformers.LayoutLMv3TokenizerFast",headingTag:"h2"}}),Pt=new P({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv3TokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LayoutLMv3TokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LayoutLMv3TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LayoutLMv3TokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"},{anchor:"transformers.LayoutLMv3TokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv3TokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),St=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"boxes",val:": Union = None"},{name:"word_labels",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability <code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability <code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),Bt=new Fe({props:{title:"LayoutLMv3Processor",local:"transformers.LayoutLMv3Processor",headingTag:"h2"}}),Gt=new P({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"image_processor",val:" = None"},{name:"tokenizer",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.image_processor",description:`<strong>image_processor</strong> (<code>LayoutLMv3ImageProcessor</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ImageProcessor">LayoutLMv3ImageProcessor</a>. The image processor is a required input.`,name:"image_processor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L27"}}),Ht=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": Union = None"},{name:"text_pair",val:": Union = None"},{name:"boxes",val:": Union = None"},{name:"word_labels",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": Union = None"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L69"}}),Nt=new Do({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[kn],pytorch:[cn]},$$scope:{ctx:$}}}),{c(){t=c("meta"),g=a(),o=c("p"),i=a(),v(w.$$.fragment),s=a(),v(k.$$.fragment),A=a(),z=c("p"),z.innerHTML=C,Y=a(),j=c("p"),j.textContent=N,I=a(),p=c("p"),p.innerHTML=F,le=a(),je=c("img"),be=a(),E=c("small"),E.innerHTML=ue,rt=a(),K=c("p"),K.innerHTML=Mt,G=a(),v(ee.$$.fragment),vt=a(),Te=c("ul"),Te.innerHTML=Me,Ne=a(),v(Le.$$.fragment),Oe=a(),Ke=c("p"),Ke.textContent=it,Je=a(),v(Ie.$$.fragment),te=a(),Ue=c("ul"),Ue.innerHTML=O,ze=a(),v(Q.$$.fragment),he=a(),et=c("ul"),et.innerHTML=lt,We=a(),v(He.$$.fragment),de=a(),Ee=c("ul"),Ee.innerHTML=tt,oe=a(),v(U.$$.fragment),Re=a(),ke=c("ul"),ke.innerHTML=ht,yt=a(),ce=c("p"),ce.innerHTML=dt,Ze=a(),Pe=c("ul"),Pe.innerHTML=qe,ft=a(),v(V.$$.fragment),ae=a(),re=c("div"),v(S.$$.fragment),ot=a(),nt=c("p"),nt.innerHTML=Se,Ft=a(),st=c("p"),st.innerHTML=D,Qe=a(),v(ie.$$.fragment),Be=a(),v(we.$$.fragment),ct=a(),J=c("div"),v(fe.$$.fragment),Ge=a(),me=c("div"),v(h.$$.fragment),q=a(),X=c("p"),X.textContent=Ce,pe=a(),v(H.$$.fragment),ge=a(),B=c("div"),v(Z.$$.fragment),Lt=a(),_e=c("p"),_e.textContent=kt,It=a(),Ve=c("div"),v(wt.$$.fragment),Ut=a(),Xe=c("p"),Xe.textContent=Vt,mt=a(),v(gt.$$.fragment),u=a(),x=c("div"),v(ve.$$.fragment),ye=a(),xe=c("p"),xe.innerHTML=$e,Ae=a(),ne=c("p"),ne.innerHTML=at,Xt=a(),zt=c("p"),zt.innerHTML=lo,At=a(),bt=c("div"),v(Wt.$$.fragment),To=a(),Yt=c("p"),Yt.textContent=Jo,Mo=a(),Dt=c("div"),v(Rt.$$.fragment),mo=a(),v(Zt.$$.fragment),po=a(),pt=c("div"),v(Pt.$$.fragment),Lo=a(),Ot=c("p"),Ot.innerHTML=Io,ko=a(),Kt=c("p"),Kt.innerHTML=Uo,wo=a(),jt=c("div"),v(St.$$.fragment),xo=a(),eo=c("p"),eo.textContent=Wo,uo=a(),v(Bt.$$.fragment),ho=a(),Ye=c("div"),v(Gt.$$.fragment),$o=a(),to=c("p"),to.textContent=Ro,Fo=a(),oo=c("p"),oo.innerHTML=Zo,zo=a(),no=c("p"),no.innerHTML=Po,qo=a(),xt=c("div"),v(Ht.$$.fragment),Co=a(),so=c("p"),so.innerHTML=So,jo=a(),ao=c("p"),ao.textContent=Bo,fo=a(),v(Nt.$$.fragment),go=a(),co=c("p"),this.h()},l(e){const _=Yo("svelte-u9bgzb",document.head);t=m(_,"META",{name:!0,content:!0}),_.forEach(n),g=r(e),o=m(e,"P",{}),R(o).forEach(n),i=r(e),y(w.$$.fragment,e),s=r(e),y(k.$$.fragment,e),A=r(e),z=m(e,"P",{"data-svelte-h":!0}),f(z)!=="svelte-1f4jc90"&&(z.innerHTML=C),Y=r(e),j=m(e,"P",{"data-svelte-h":!0}),f(j)!=="svelte-vfdo9a"&&(j.textContent=N),I=r(e),p=m(e,"P",{"data-svelte-h":!0}),f(p)!=="svelte-1ma3m55"&&(p.innerHTML=F),le=r(e),je=m(e,"IMG",{src:!0,alt:!0,width:!0}),be=r(e),E=m(e,"SMALL",{"data-svelte-h":!0}),f(E)!=="svelte-1s1kkx4"&&(E.innerHTML=ue),rt=r(e),K=m(e,"P",{"data-svelte-h":!0}),f(K)!=="svelte-orqv4r"&&(K.innerHTML=Mt),G=r(e),y(ee.$$.fragment,e),vt=r(e),Te=m(e,"UL",{"data-svelte-h":!0}),f(Te)!=="svelte-1x1qeh7"&&(Te.innerHTML=Me),Ne=r(e),y(Le.$$.fragment,e),Oe=r(e),Ke=m(e,"P",{"data-svelte-h":!0}),f(Ke)!=="svelte-6d8ri7"&&(Ke.textContent=it),Je=r(e),y(Ie.$$.fragment,e),te=r(e),Ue=m(e,"UL",{"data-svelte-h":!0}),f(Ue)!=="svelte-14k3q4u"&&(Ue.innerHTML=O),ze=r(e),y(Q.$$.fragment,e),he=r(e),et=m(e,"UL",{"data-svelte-h":!0}),f(et)!=="svelte-1w4dnz6"&&(et.innerHTML=lt),We=r(e),y(He.$$.fragment,e),de=r(e),Ee=m(e,"UL",{"data-svelte-h":!0}),f(Ee)!=="svelte-1x8ryyw"&&(Ee.innerHTML=tt),oe=r(e),y(U.$$.fragment,e),Re=r(e),ke=m(e,"UL",{"data-svelte-h":!0}),f(ke)!=="svelte-hajrav"&&(ke.innerHTML=ht),yt=r(e),ce=m(e,"P",{"data-svelte-h":!0}),f(ce)!=="svelte-7jde1k"&&(ce.innerHTML=dt),Ze=r(e),Pe=m(e,"UL",{"data-svelte-h":!0}),f(Pe)!=="svelte-116uoyl"&&(Pe.innerHTML=qe),ft=r(e),y(V.$$.fragment,e),ae=r(e),re=m(e,"DIV",{class:!0});var Tt=R(re);y(S.$$.fragment,Tt),ot=r(Tt),nt=m(Tt,"P",{"data-svelte-h":!0}),f(nt)!=="svelte-bzovvf"&&(nt.innerHTML=Se),Ft=r(Tt),st=m(Tt,"P",{"data-svelte-h":!0}),f(st)!=="svelte-o55m63"&&(st.innerHTML=D),Qe=r(Tt),y(ie.$$.fragment,Tt),Tt.forEach(n),Be=r(e),y(we.$$.fragment,e),ct=r(e),J=m(e,"DIV",{class:!0});var Et=R(J);y(fe.$$.fragment,Et),Ge=r(Et),me=m(Et,"DIV",{class:!0});var Qt=R(me);y(h.$$.fragment,Qt),q=r(Qt),X=m(Qt,"P",{"data-svelte-h":!0}),f(X)!=="svelte-khengj"&&(X.textContent=Ce),Qt.forEach(n),Et.forEach(n),pe=r(e),y(H.$$.fragment,e),ge=r(e),B=m(e,"DIV",{class:!0});var ro=R(B);y(Z.$$.fragment,ro),Lt=r(ro),_e=m(ro,"P",{"data-svelte-h":!0}),f(_e)!=="svelte-1xoh9ve"&&(_e.textContent=kt),It=r(ro),Ve=m(ro,"DIV",{class:!0});var vo=R(Ve);y(wt.$$.fragment,vo),Ut=r(vo),Xe=m(vo,"P",{"data-svelte-h":!0}),f(Xe)!=="svelte-1x3yxsa"&&(Xe.textContent=Vt),vo.forEach(n),ro.forEach(n),mt=r(e),y(gt.$$.fragment,e),u=r(e),x=m(e,"DIV",{class:!0});var _t=R(x);y(ve.$$.fragment,_t),ye=r(_t),xe=m(_t,"P",{"data-svelte-h":!0}),f(xe)!=="svelte-18ejts5"&&(xe.innerHTML=$e),Ae=r(_t),ne=m(_t,"P",{"data-svelte-h":!0}),f(ne)!=="svelte-1c3t5ty"&&(ne.innerHTML=at),Xt=r(_t),zt=m(_t,"P",{"data-svelte-h":!0}),f(zt)!=="svelte-1hk8qti"&&(zt.innerHTML=lo),At=r(_t),bt=m(_t,"DIV",{class:!0});var yo=R(bt);y(Wt.$$.fragment,yo),To=r(yo),Yt=m(yo,"P",{"data-svelte-h":!0}),f(Yt)!=="svelte-1w6bb17"&&(Yt.textContent=Jo),yo.forEach(n),Mo=r(_t),Dt=m(_t,"DIV",{class:!0});var Go=R(Dt);y(Rt.$$.fragment,Go),Go.forEach(n),_t.forEach(n),mo=r(e),y(Zt.$$.fragment,e),po=r(e),pt=m(e,"DIV",{class:!0});var Jt=R(pt);y(Pt.$$.fragment,Jt),Lo=r(Jt),Ot=m(Jt,"P",{"data-svelte-h":!0}),f(Ot)!=="svelte-1f709bx"&&(Ot.innerHTML=Io),ko=r(Jt),Kt=m(Jt,"P",{"data-svelte-h":!0}),f(Kt)!=="svelte-fh0aq"&&(Kt.innerHTML=Uo),wo=r(Jt),jt=m(Jt,"DIV",{class:!0});var bo=R(jt);y(St.$$.fragment,bo),xo=r(bo),eo=m(bo,"P",{"data-svelte-h":!0}),f(eo)!=="svelte-1w6bb17"&&(eo.textContent=Wo),bo.forEach(n),Jt.forEach(n),uo=r(e),y(Bt.$$.fragment,e),ho=r(e),Ye=m(e,"DIV",{class:!0});var $t=R(Ye);y(Gt.$$.fragment,$t),$o=r($t),to=m($t,"P",{"data-svelte-h":!0}),f(to)!=="svelte-13xsew6"&&(to.textContent=Ro),Fo=r($t),oo=m($t,"P",{"data-svelte-h":!0}),f(oo)!=="svelte-1e48d4l"&&(oo.innerHTML=Zo),zo=r($t),no=m($t,"P",{"data-svelte-h":!0}),f(no)!=="svelte-1nbiojx"&&(no.innerHTML=Po),qo=r($t),xt=m($t,"DIV",{class:!0});var io=R(xt);y(Ht.$$.fragment,io),Co=r(io),so=m(io,"P",{"data-svelte-h":!0}),f(so)!=="svelte-121jg2g"&&(so.innerHTML=So),jo=r(io),ao=m(io,"P",{"data-svelte-h":!0}),f(ao)!=="svelte-ws0hzs"&&(ao.textContent=Bo),io.forEach(n),$t.forEach(n),fo=r(e),y(Nt.$$.fragment,e),go=r(e),co=m(e,"P",{}),R(co).forEach(n),this.h()},h(){W(t,"name","hf:doc:metadata"),W(t,"content",xn),Qo(je.src,De="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||W(je,"src",De),W(je,"alt","drawing"),W(je,"width","600"),W(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,_){d(document.head,t),l(e,g,_),l(e,o,_),l(e,i,_),b(w,e,_),l(e,s,_),b(k,e,_),l(e,A,_),l(e,z,_),l(e,Y,_),l(e,j,_),l(e,I,_),l(e,p,_),l(e,le,_),l(e,je,_),l(e,be,_),l(e,E,_),l(e,rt,_),l(e,K,_),l(e,G,_),b(ee,e,_),l(e,vt,_),l(e,Te,_),l(e,Ne,_),b(Le,e,_),l(e,Oe,_),l(e,Ke,_),l(e,Je,_),b(Ie,e,_),l(e,te,_),l(e,Ue,_),l(e,ze,_),b(Q,e,_),l(e,he,_),l(e,et,_),l(e,We,_),b(He,e,_),l(e,de,_),l(e,Ee,_),l(e,oe,_),b(U,e,_),l(e,Re,_),l(e,ke,_),l(e,yt,_),l(e,ce,_),l(e,Ze,_),l(e,Pe,_),l(e,ft,_),b(V,e,_),l(e,ae,_),l(e,re,_),b(S,re,null),d(re,ot),d(re,nt),d(re,Ft),d(re,st),d(re,Qe),b(ie,re,null),l(e,Be,_),b(we,e,_),l(e,ct,_),l(e,J,_),b(fe,J,null),d(J,Ge),d(J,me),b(h,me,null),d(me,q),d(me,X),l(e,pe,_),b(H,e,_),l(e,ge,_),l(e,B,_),b(Z,B,null),d(B,Lt),d(B,_e),d(B,It),d(B,Ve),b(wt,Ve,null),d(Ve,Ut),d(Ve,Xe),l(e,mt,_),b(gt,e,_),l(e,u,_),l(e,x,_),b(ve,x,null),d(x,ye),d(x,xe),d(x,Ae),d(x,ne),d(x,Xt),d(x,zt),d(x,At),d(x,bt),b(Wt,bt,null),d(bt,To),d(bt,Yt),d(x,Mo),d(x,Dt),b(Rt,Dt,null),l(e,mo,_),b(Zt,e,_),l(e,po,_),l(e,pt,_),b(Pt,pt,null),d(pt,Lo),d(pt,Ot),d(pt,ko),d(pt,Kt),d(pt,wo),d(pt,jt),b(St,jt,null),d(jt,xo),d(jt,eo),l(e,uo,_),b(Bt,e,_),l(e,ho,_),l(e,Ye,_),b(Gt,Ye,null),d(Ye,$o),d(Ye,to),d(Ye,Fo),d(Ye,oo),d(Ye,zo),d(Ye,no),d(Ye,qo),d(Ye,xt),b(Ht,xt,null),d(xt,Co),d(xt,so),d(xt,jo),d(xt,ao),l(e,fo,_),b(Nt,e,_),l(e,go,_),l(e,co,_),_o=!0},p(e,[_]){const Tt={};_&2&&(Tt.$$scope={dirty:_,ctx:e}),Ie.$set(Tt);const Et={};_&2&&(Et.$$scope={dirty:_,ctx:e}),ie.$set(Et);const Qt={};_&2&&(Qt.$$scope={dirty:_,ctx:e}),Nt.$set(Qt)},i(e){_o||(T(w.$$.fragment,e),T(k.$$.fragment,e),T(ee.$$.fragment,e),T(Le.$$.fragment,e),T(Ie.$$.fragment,e),T(Q.$$.fragment,e),T(He.$$.fragment,e),T(U.$$.fragment,e),T(V.$$.fragment,e),T(S.$$.fragment,e),T(ie.$$.fragment,e),T(we.$$.fragment,e),T(fe.$$.fragment,e),T(h.$$.fragment,e),T(H.$$.fragment,e),T(Z.$$.fragment,e),T(wt.$$.fragment,e),T(gt.$$.fragment,e),T(ve.$$.fragment,e),T(Wt.$$.fragment,e),T(Rt.$$.fragment,e),T(Zt.$$.fragment,e),T(Pt.$$.fragment,e),T(St.$$.fragment,e),T(Bt.$$.fragment,e),T(Gt.$$.fragment,e),T(Ht.$$.fragment,e),T(Nt.$$.fragment,e),_o=!0)},o(e){M(w.$$.fragment,e),M(k.$$.fragment,e),M(ee.$$.fragment,e),M(Le.$$.fragment,e),M(Ie.$$.fragment,e),M(Q.$$.fragment,e),M(He.$$.fragment,e),M(U.$$.fragment,e),M(V.$$.fragment,e),M(S.$$.fragment,e),M(ie.$$.fragment,e),M(we.$$.fragment,e),M(fe.$$.fragment,e),M(h.$$.fragment,e),M(H.$$.fragment,e),M(Z.$$.fragment,e),M(wt.$$.fragment,e),M(gt.$$.fragment,e),M(ve.$$.fragment,e),M(Wt.$$.fragment,e),M(Rt.$$.fragment,e),M(Zt.$$.fragment,e),M(Pt.$$.fragment,e),M(St.$$.fragment,e),M(Bt.$$.fragment,e),M(Gt.$$.fragment,e),M(Ht.$$.fragment,e),M(Nt.$$.fragment,e),_o=!1},d(e){e&&(n(g),n(o),n(i),n(s),n(A),n(z),n(Y),n(j),n(I),n(p),n(le),n(je),n(be),n(E),n(rt),n(K),n(G),n(vt),n(Te),n(Ne),n(Oe),n(Ke),n(Je),n(te),n(Ue),n(ze),n(he),n(et),n(We),n(de),n(Ee),n(oe),n(Re),n(ke),n(yt),n(ce),n(Ze),n(Pe),n(ft),n(ae),n(re),n(Be),n(ct),n(J),n(pe),n(ge),n(B),n(mt),n(u),n(x),n(mo),n(po),n(pt),n(uo),n(ho),n(Ye),n(fo),n(go),n(co)),n(t),L(w,e),L(k,e),L(ee,e),L(Le,e),L(Ie,e),L(Q,e),L(He,e),L(U,e),L(V,e),L(S),L(ie),L(we,e),L(fe),L(h),L(H,e),L(Z),L(wt),L(gt,e),L(ve),L(Wt),L(Rt),L(Zt,e),L(Pt),L(St),L(Bt,e),L(Gt),L(Ht),L(Nt,e)}}}const xn='{"title":"LayoutLMv3","local":"layoutlmv3","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"LayoutLMv3Config","local":"transformers.LayoutLMv3Config","sections":[],"depth":2},{"title":"LayoutLMv3FeatureExtractor","local":"transformers.LayoutLMv3FeatureExtractor","sections":[],"depth":2},{"title":"LayoutLMv3ImageProcessor","local":"transformers.LayoutLMv3ImageProcessor","sections":[],"depth":2},{"title":"LayoutLMv3Tokenizer","local":"transformers.LayoutLMv3Tokenizer","sections":[],"depth":2},{"title":"LayoutLMv3TokenizerFast","local":"transformers.LayoutLMv3TokenizerFast","sections":[],"depth":2},{"title":"LayoutLMv3Processor","local":"transformers.LayoutLMv3Processor","sections":[],"depth":2},{"title":"LayoutLMv3Model","local":"transformers.LayoutLMv3Model","sections":[],"depth":2},{"title":"LayoutLMv3ForSequenceClassification","local":"transformers.LayoutLMv3ForSequenceClassification","sections":[],"depth":2},{"title":"LayoutLMv3ForTokenClassification","local":"transformers.LayoutLMv3ForTokenClassification","sections":[],"depth":2},{"title":"LayoutLMv3ForQuestionAnswering","local":"transformers.LayoutLMv3ForQuestionAnswering","sections":[],"depth":2},{"title":"TFLayoutLMv3Model","local":"transformers.TFLayoutLMv3Model","sections":[],"depth":2},{"title":"TFLayoutLMv3ForSequenceClassification","local":"transformers.TFLayoutLMv3ForSequenceClassification","sections":[],"depth":2},{"title":"TFLayoutLMv3ForTokenClassification","local":"transformers.TFLayoutLMv3ForTokenClassification","sections":[],"depth":2},{"title":"TFLayoutLMv3ForQuestionAnswering","local":"transformers.TFLayoutLMv3ForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function $n($){return Vo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wn extends Xo{constructor(t){super(),Ao(this,t,$n,wn,Eo,{})}}export{Wn as component};
