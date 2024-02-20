import{s as Zo,o as Lo,n as q}from"../chunks/scheduler.9bc65507.js";import{S as No,i as Ho,g as d,s as a,r as g,A as Bo,h as c,f as l,c as r,j as Z,u as _,x as u,k as W,y as s,a as p,v as b,d as T,t as y,w as M}from"../chunks/index.707bf1b6.js";import{T as Ue}from"../chunks/Tip.c2ecdbf4.js";import{D as L}from"../chunks/Docstring.17db21ae.js";import{C as ke}from"../chunks/CodeBlock.54a9f38d.js";import{F as Go,M as qo}from"../chunks/Markdown.fef84341.js";import{E as Me}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as Io}from"../chunks/PipelineTag.44585822.js";import{H as Fe}from"../chunks/Heading.342b1fa6.js";function Po(x){let e,m="Examples:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEFsYmVydENvbmZpZyUyQyUyMEFsYmVydE1vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYW4lMjBBTEJFUlQteHhsYXJnZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWFsYmVydF94eGxhcmdlX2NvbmZpZ3VyYXRpb24lMjAlM0QlMjBBbGJlcnRDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGFuJTIwQUxCRVJULWJhc2UlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFhbGJlcnRfYmFzZV9jb25maWd1cmF0aW9uJTIwJTNEJTIwQWxiZXJ0Q29uZmlnKCUwQSUyMCUyMCUyMCUyMGhpZGRlbl9zaXplJTNENzY4JTJDJTBBJTIwJTIwJTIwJTIwbnVtX2F0dGVudGlvbl9oZWFkcyUzRDEyJTJDJTBBJTIwJTIwJTIwJTIwaW50ZXJtZWRpYXRlX3NpemUlM0QzMDcyJTJDJTBBKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMCh3aXRoJTIwcmFuZG9tJTIwd2VpZ2h0cyklMjBmcm9tJTIwdGhlJTIwQUxCRVJULWJhc2UlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMEFsYmVydE1vZGVsKGFsYmVydF94eGxhcmdlX2NvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertConfig, AlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an ALBERT-xxlarge style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>albert_xxlarge_configuration = AlbertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>albert_base_configuration = AlbertConfig(
<span class="hljs-meta">... </span>    hidden_size=<span class="hljs-number">768</span>,
<span class="hljs-meta">... </span>    num_attention_heads=<span class="hljs-number">12</span>,
<span class="hljs-meta">... </span>    intermediate_size=<span class="hljs-number">3072</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel(albert_xxlarge_configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-kvfsh7"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Vo(x){let e,m="sequence pair mask has the following format:",n,o,k;return o=new ke({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMEElN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTIwJTIwJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-16klr56"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Ro(x){let e,m="sequence pair mask has the following format:",n,o,k;return o=new ke({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMEElN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTIwJTIwJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-16klr56"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Xo(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Qo(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBbGJlcnRNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function So(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Eo(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBbGJlcnRGb3JQcmVUcmFpbmluZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRGb3JQcmVUcmFpbmluZy5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9yY2gudGVuc29yKHRva2VuaXplci5lbmNvZGUoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzRFRydWUpKS51bnNxdWVlemUoMCklMEElMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMucHJlZGljdGlvbl9sb2dpdHMlMEFzb3BfbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5zb3BfbG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Yo(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Do(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEFsYmVydEZvck1hc2tlZExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRGb3JNYXNrZWRMTS5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBJTIzJTIwYWRkJTIwbWFza190b2tlbiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjAlNUJNQVNLJTVEJTIwaXMlMjBQYXJpcy4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBJTIzJTIwcmV0cmlldmUlMjBpbmRleCUyMG9mJTIwJTVCTUFTSyU1RCUwQW1hc2tfdG9rZW5faW5kZXglMjAlM0QlMjAoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKSU1QjAlNUQubm9uemVybyhhc190dXBsZSUzRFRydWUpJTVCMCU1RCUwQXByZWRpY3RlZF90b2tlbl9pZCUyMCUzRCUyMGxvZ2l0cyU1QjAlMkMlMjBtYXNrX3Rva2VuX2luZGV4JTVELmFyZ21heChheGlzJTNELTEpJTBBdG9rZW5pemVyLmRlY29kZShwcmVkaWN0ZWRfdG9rZW5faWQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of [MASK] is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;france&#x27;</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Oo(x){let e,m;return e=new ke({props:{code:"bGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC53aGVyZShpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQlMkMlMjBsYWJlbHMlMkMlMjAtMTAwKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscyklMEFyb3VuZChvdXRwdXRzLmxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`,wrap:!1}}),{c(){g(e.$$.fragment)},l(n){_(e.$$.fragment,n)},m(n,o){b(e,n,o),m=!0},p:q,i(n){m||(T(e.$$.fragment,n),m=!0)},o(n){y(e.$$.fragment,n),m=!1},d(n){M(e,n)}}}function Ko(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function es(x){let e,m="Example of single-label classification:",n,o,k;return o=new ke({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ0ZXh0YXR0YWNrJTJGYWxiZXJ0LWJhc2UtdjItaW1kYiUyMiklMEFtb2RlbCUyMCUzRCUyMEFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnRleHRhdHRhY2slMkZhbGJlcnQtYmFzZS12Mi1pbWRiJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoKS5pdGVtKCklMEFtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfY2xhc3NfaWQlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJ0ZXh0YXR0YWNrJTJGYWxiZXJ0LWJhc2UtdjItaW1kYiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-ykxpe4"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function ts(x){let e,m="Example of multi-label classification:",n,o,k;return o=new ke({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ0ZXh0YXR0YWNrJTJGYWxiZXJ0LWJhc2UtdjItaW1kYiUyMiklMEFtb2RlbCUyMCUzRCUyMEFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnRleHRhdHRhY2slMkZhbGJlcnQtYmFzZS12Mi1pbWRiJTIyJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkcyUyMCUzRCUyMHRvcmNoLmFyYW5nZSgwJTJDJTIwbG9naXRzLnNoYXBlJTVCLTElNUQpJTVCdG9yY2guc2lnbW9pZChsb2dpdHMpLnNxdWVlemUoZGltJTNEMCklMjAlM0UlMjAwLjUlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJ0ZXh0YXR0YWNrJTJGYWxiZXJ0LWJhc2UtdjItaW1kYiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1l8e32d"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function ns(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function os(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBbGJlcnRGb3JNdWx0aXBsZUNob2ljZSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoMCkudW5zcXVlZXplKDApJTIwJTIwJTIzJTIwY2hvaWNlMCUyMGlzJTIwY29ycmVjdCUyMChhY2NvcmRpbmclMjB0byUyMFdpa2lwZWRpYSUyMCUzQikpJTJDJTIwYmF0Y2glMjBzaXplJTIwMSUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHBhZGRpbmclM0RUcnVlKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKiU3QmslM0ElMjB2LnVuc3F1ZWV6ZSgwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function ss(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function as(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBbGJlcnRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMEFsYmVydEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function rs(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function is(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBbGJlcnRGb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIydHdta245JTJGYWxiZXJ0LWJhc2UtdjItc3F1YWQyJTIyKSUwQW1vZGVsJTIwJTNEJTIwQWxiZXJ0Rm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMnR3bWtuOSUyRmFsYmVydC1iYXNlLXYyLXNxdWFkMiUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQXRva2VuaXplci5kZWNvZGUocHJlZGljdF9hbnN3ZXJfdG9rZW5zJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTBBJTBBJTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjEyJTVEKSUwQXRhcmdldF9lbmRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTMlNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwc3RhcnRfcG9zaXRpb25zJTNEdGFyZ2V0X3N0YXJ0X2luZGV4JTJDJTIwZW5kX3Bvc2l0aW9ucyUzRHRhcmdldF9lbmRfaW5kZXgpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;twmkn9/albert-base-v2-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;twmkn9/albert-base-v2-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.36</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function ls(x){let e,m,n,o,k,t,w="The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top.",ee,I,A=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,D,U,z=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,O,h,C,Ye,we,ko='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> forward method, overrides the <code>__call__</code> special method.',un,ce,Cn,He,ft,jt,Jn,X,Vt,E,Ct,hn=`Albert Model with two heads on top as done during the pretraining: a <code>masked language modeling</code> head and a
<code>sentence order prediction (classification)</code> head.`,gt,pe,fn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Jt,Rt,Hn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Bn,Ie,At,Xt,De,Qt='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForPreTraining">AlbertForPreTraining</a> forward method, overrides the <code>__call__</code> special method.',en,qe,no,tn,_t,lt,nn,Q,Oe,bt,St,je="Albert Model with a <code>language modeling</code> head on top.",Tt,zt,An=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,yt,on,Ke=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,uo,G,_e,po,et,Gn='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForMaskedLM">AlbertForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',oo,Y,Pn,Et,tt,Vn,Rn,he,so,P,Be,gn,Ut,Ge=`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,sn,te,an=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ho,Pe,_n=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,bn,ne,oe,Mt,It,me='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForSequenceClassification">AlbertForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',zn,nt,Yt,ve,Tn,be,qt,Un,Wt,Te,yn,Ve,ao,Mn=`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,dt,ot,mo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,V,st,fo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ye,Re,kn,Xe,ro,wn='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForMultipleChoice">AlbertForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',ct,kt,vn,S,rn,fe,We,Ze,Qe,In,Le,wt=`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,qn,at,go=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Zt,rt,ue=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Lt,Se,Dt,vt,it,io='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForTokenClassification">AlbertForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Xn,Ce,Nt,pt,$n,Je,Qn,N,mt,ae,ut,_o=`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Ht,$t,ln=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ne,Sn,Bt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Wn,Ae,Ee,K,Ot,En='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForQuestionAnswering">AlbertForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',dn,xn,cn,le,Kt;return e=new Fe({props:{title:"AlbertModel",local:"transformers.AlbertModel",headingTag:"h2"}}),o=new L({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L630"}}),C=new L({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L677",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),ce=new Ue({props:{$$slots:{default:[Xo]},$$scope:{ctx:x}}}),He=new Me({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[Qo]},$$scope:{ctx:x}}}),jt=new Fe({props:{title:"AlbertForPreTraining",local:"transformers.AlbertForPreTraining",headingTag:"h2"}}),Vt=new L({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L756"}}),At=new L({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"sentence_order_label",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.AlbertForPreTraining.forward.sentence_order_label",description:`<strong>sentence_order_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>. <code>0</code> indicates original order (sequence A, then
sequence B), <code>1</code> indicates switched order (sequence B, then sequence A).`,name:"sentence_order_label"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L785",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) — Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) — Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
  href="/docs/transformers/main/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new Ue({props:{$$slots:{default:[So]},$$scope:{ctx:x}}}),tn=new Me({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[Eo]},$$scope:{ctx:x}}}),lt=new Fe({props:{title:"AlbertForMaskedLM",local:"transformers.AlbertForMaskedLM",headingTag:"h2"}}),Oe=new L({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L907"}}),_e=new L({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L932",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),Y=new Ue({props:{$$slots:{default:[Yo]},$$scope:{ctx:x}}}),Et=new Me({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[Do]},$$scope:{ctx:x}}}),Vn=new Me({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[Oo]},$$scope:{ctx:x}}}),he=new Fe({props:{title:"AlbertForSequenceClassification",local:"transformers.AlbertForSequenceClassification",headingTag:"h2"}}),Be=new L({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1018"}}),oe=new L({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1038",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),nt=new Ue({props:{$$slots:{default:[Ko]},$$scope:{ctx:x}}}),ve=new Me({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[es]},$$scope:{ctx:x}}}),be=new Me({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[ts]},$$scope:{ctx:x}}}),Un=new Fe({props:{title:"AlbertForMultipleChoice",local:"transformers.AlbertForMultipleChoice",headingTag:"h2"}}),yn=new L({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1305"}}),kn=new L({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1323",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),kt=new Ue({props:{$$slots:{default:[ns]},$$scope:{ctx:x}}}),S=new Me({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[os]},$$scope:{ctx:x}}}),fe=new Fe({props:{title:"AlbertForTokenClassification",local:"transformers.AlbertForTokenClassification",headingTag:"h2"}}),Qe=new L({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1119"}}),Dt=new L({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1143",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),Ce=new Ue({props:{$$slots:{default:[ss]},$$scope:{ctx:x}}}),pt=new Me({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[as]},$$scope:{ctx:x}}}),Je=new Fe({props:{title:"AlbertForQuestionAnswering",local:"transformers.AlbertForQuestionAnswering",headingTag:"h2"}}),mt=new L({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1202"}}),Ee=new L({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1220",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),xn=new Ue({props:{$$slots:{default:[rs]},$$scope:{ctx:x}}}),le=new Me({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[is]},$$scope:{ctx:x}}}),{c(){g(e.$$.fragment),m=a(),n=d("div"),g(o.$$.fragment),k=a(),t=d("p"),t.textContent=w,ee=a(),I=d("p"),I.innerHTML=A,D=a(),U=d("p"),U.innerHTML=z,O=a(),h=d("div"),g(C.$$.fragment),Ye=a(),we=d("p"),we.innerHTML=ko,un=a(),g(ce.$$.fragment),Cn=a(),g(He.$$.fragment),ft=a(),g(jt.$$.fragment),Jn=a(),X=d("div"),g(Vt.$$.fragment),E=a(),Ct=d("p"),Ct.innerHTML=hn,gt=a(),pe=d("p"),pe.innerHTML=fn,Jt=a(),Rt=d("p"),Rt.innerHTML=Hn,Bn=a(),Ie=d("div"),g(At.$$.fragment),Xt=a(),De=d("p"),De.innerHTML=Qt,en=a(),g(qe.$$.fragment),no=a(),g(tn.$$.fragment),_t=a(),g(lt.$$.fragment),nn=a(),Q=d("div"),g(Oe.$$.fragment),bt=a(),St=d("p"),St.innerHTML=je,Tt=a(),zt=d("p"),zt.innerHTML=An,yt=a(),on=d("p"),on.innerHTML=Ke,uo=a(),G=d("div"),g(_e.$$.fragment),po=a(),et=d("p"),et.innerHTML=Gn,oo=a(),g(Y.$$.fragment),Pn=a(),g(Et.$$.fragment),tt=a(),g(Vn.$$.fragment),Rn=a(),g(he.$$.fragment),so=a(),P=d("div"),g(Be.$$.fragment),gn=a(),Ut=d("p"),Ut.textContent=Ge,sn=a(),te=d("p"),te.innerHTML=an,ho=a(),Pe=d("p"),Pe.innerHTML=_n,bn=a(),ne=d("div"),g(oe.$$.fragment),Mt=a(),It=d("p"),It.innerHTML=me,zn=a(),g(nt.$$.fragment),Yt=a(),g(ve.$$.fragment),Tn=a(),g(be.$$.fragment),qt=a(),g(Un.$$.fragment),Wt=a(),Te=d("div"),g(yn.$$.fragment),Ve=a(),ao=d("p"),ao.textContent=Mn,dt=a(),ot=d("p"),ot.innerHTML=mo,V=a(),st=d("p"),st.innerHTML=fo,ye=a(),Re=d("div"),g(kn.$$.fragment),Xe=a(),ro=d("p"),ro.innerHTML=wn,ct=a(),g(kt.$$.fragment),vn=a(),g(S.$$.fragment),rn=a(),g(fe.$$.fragment),We=a(),Ze=d("div"),g(Qe.$$.fragment),In=a(),Le=d("p"),Le.textContent=wt,qn=a(),at=d("p"),at.innerHTML=go,Zt=a(),rt=d("p"),rt.innerHTML=ue,Lt=a(),Se=d("div"),g(Dt.$$.fragment),vt=a(),it=d("p"),it.innerHTML=io,Xn=a(),g(Ce.$$.fragment),Nt=a(),g(pt.$$.fragment),$n=a(),g(Je.$$.fragment),Qn=a(),N=d("div"),g(mt.$$.fragment),ae=a(),ut=d("p"),ut.innerHTML=_o,Ht=a(),$t=d("p"),$t.innerHTML=ln,Ne=a(),Sn=d("p"),Sn.innerHTML=Bt,Wn=a(),Ae=d("div"),g(Ee.$$.fragment),K=a(),Ot=d("p"),Ot.innerHTML=En,dn=a(),g(xn.$$.fragment),cn=a(),g(le.$$.fragment),this.h()},l(v){_(e.$$.fragment,v),m=r(v),n=c(v,"DIV",{class:!0});var i=Z(n);_(o.$$.fragment,i),k=r(i),t=c(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-1y2mzsh"&&(t.textContent=w),ee=r(i),I=c(i,"P",{"data-svelte-h":!0}),u(I)!=="svelte-6pahdo"&&(I.innerHTML=A),D=r(i),U=c(i,"P",{"data-svelte-h":!0}),u(U)!=="svelte-hswkmf"&&(U.innerHTML=z),O=r(i),h=c(i,"DIV",{class:!0});var F=Z(h);_(C.$$.fragment,F),Ye=r(F),we=c(F,"P",{"data-svelte-h":!0}),u(we)!=="svelte-17zfu6p"&&(we.innerHTML=ko),un=r(F),_(ce.$$.fragment,F),Cn=r(F),_(He.$$.fragment,F),F.forEach(l),i.forEach(l),ft=r(v),_(jt.$$.fragment,v),Jn=r(v),X=c(v,"DIV",{class:!0});var de=Z(X);_(Vt.$$.fragment,de),E=r(de),Ct=c(de,"P",{"data-svelte-h":!0}),u(Ct)!=="svelte-1qm9vpn"&&(Ct.innerHTML=hn),gt=r(de),pe=c(de,"P",{"data-svelte-h":!0}),u(pe)!=="svelte-6pahdo"&&(pe.innerHTML=fn),Jt=r(de),Rt=c(de,"P",{"data-svelte-h":!0}),u(Rt)!=="svelte-hswkmf"&&(Rt.innerHTML=Hn),Bn=r(de),Ie=c(de,"DIV",{class:!0});var H=Z(Ie);_(At.$$.fragment,H),Xt=r(H),De=c(H,"P",{"data-svelte-h":!0}),u(De)!=="svelte-1l6f7b9"&&(De.innerHTML=Qt),en=r(H),_(qe.$$.fragment,H),no=r(H),_(tn.$$.fragment,H),H.forEach(l),de.forEach(l),_t=r(v),_(lt.$$.fragment,v),nn=r(v),Q=c(v,"DIV",{class:!0});var ge=Z(Q);_(Oe.$$.fragment,ge),bt=r(ge),St=c(ge,"P",{"data-svelte-h":!0}),u(St)!=="svelte-q4kelk"&&(St.innerHTML=je),Tt=r(ge),zt=c(ge,"P",{"data-svelte-h":!0}),u(zt)!=="svelte-6pahdo"&&(zt.innerHTML=An),yt=r(ge),on=c(ge,"P",{"data-svelte-h":!0}),u(on)!=="svelte-hswkmf"&&(on.innerHTML=Ke),uo=r(ge),G=c(ge,"DIV",{class:!0});var B=Z(G);_(_e.$$.fragment,B),po=r(B),et=c(B,"P",{"data-svelte-h":!0}),u(et)!=="svelte-167dub1"&&(et.innerHTML=Gn),oo=r(B),_(Y.$$.fragment,B),Pn=r(B),_(Et.$$.fragment,B),tt=r(B),_(Vn.$$.fragment,B),B.forEach(l),ge.forEach(l),Rn=r(v),_(he.$$.fragment,v),so=r(v),P=c(v,"DIV",{class:!0});var se=Z(P);_(Be.$$.fragment,se),gn=r(se),Ut=c(se,"P",{"data-svelte-h":!0}),u(Ut)!=="svelte-1wuvovs"&&(Ut.textContent=Ge),sn=r(se),te=c(se,"P",{"data-svelte-h":!0}),u(te)!=="svelte-6pahdo"&&(te.innerHTML=an),ho=r(se),Pe=c(se,"P",{"data-svelte-h":!0}),u(Pe)!=="svelte-hswkmf"&&(Pe.innerHTML=_n),bn=r(se),ne=c(se,"DIV",{class:!0});var ze=Z(ne);_(oe.$$.fragment,ze),Mt=r(ze),It=c(ze,"P",{"data-svelte-h":!0}),u(It)!=="svelte-1sr79y1"&&(It.innerHTML=me),zn=r(ze),_(nt.$$.fragment,ze),Yt=r(ze),_(ve.$$.fragment,ze),Tn=r(ze),_(be.$$.fragment,ze),ze.forEach(l),se.forEach(l),qt=r(v),_(Un.$$.fragment,v),Wt=r(v),Te=c(v,"DIV",{class:!0});var re=Z(Te);_(yn.$$.fragment,re),Ve=r(re),ao=c(re,"P",{"data-svelte-h":!0}),u(ao)!=="svelte-axso2c"&&(ao.textContent=Mn),dt=r(re),ot=c(re,"P",{"data-svelte-h":!0}),u(ot)!=="svelte-6pahdo"&&(ot.innerHTML=mo),V=r(re),st=c(re,"P",{"data-svelte-h":!0}),u(st)!=="svelte-hswkmf"&&(st.innerHTML=fo),ye=r(re),Re=c(re,"DIV",{class:!0});var R=Z(Re);_(kn.$$.fragment,R),Xe=r(R),ro=c(R,"P",{"data-svelte-h":!0}),u(ro)!=="svelte-uutia5"&&(ro.innerHTML=wn),ct=r(R),_(kt.$$.fragment,R),vn=r(R),_(S.$$.fragment,R),R.forEach(l),re.forEach(l),rn=r(v),_(fe.$$.fragment,v),We=r(v),Ze=c(v,"DIV",{class:!0});var ie=Z(Ze);_(Qe.$$.fragment,ie),In=r(ie),Le=c(ie,"P",{"data-svelte-h":!0}),u(Le)!=="svelte-olqnpn"&&(Le.textContent=wt),qn=r(ie),at=c(ie,"P",{"data-svelte-h":!0}),u(at)!=="svelte-6pahdo"&&(at.innerHTML=go),Zt=r(ie),rt=c(ie,"P",{"data-svelte-h":!0}),u(rt)!=="svelte-hswkmf"&&(rt.innerHTML=ue),Lt=r(ie),Se=c(ie,"DIV",{class:!0});var $e=Z(Se);_(Dt.$$.fragment,$e),vt=r($e),it=c($e,"P",{"data-svelte-h":!0}),u(it)!=="svelte-1bc92j1"&&(it.innerHTML=io),Xn=r($e),_(Ce.$$.fragment,$e),Nt=r($e),_(pt.$$.fragment,$e),$e.forEach(l),ie.forEach(l),$n=r(v),_(Je.$$.fragment,v),Qn=r(v),N=c(v,"DIV",{class:!0});var xe=Z(N);_(mt.$$.fragment,xe),ae=r(xe),ut=c(xe,"P",{"data-svelte-h":!0}),u(ut)!=="svelte-v56eal"&&(ut.innerHTML=_o),Ht=r(xe),$t=c(xe,"P",{"data-svelte-h":!0}),u($t)!=="svelte-6pahdo"&&($t.innerHTML=ln),Ne=r(xe),Sn=c(xe,"P",{"data-svelte-h":!0}),u(Sn)!=="svelte-hswkmf"&&(Sn.innerHTML=Bt),Wn=r(xe),Ae=c(xe,"DIV",{class:!0});var xt=Z(Ae);_(Ee.$$.fragment,xt),K=r(xt),Ot=c(xt,"P",{"data-svelte-h":!0}),u(Ot)!=="svelte-rmmrw3"&&(Ot.innerHTML=En),dn=r(xt),_(xn.$$.fragment,xt),cn=r(xt),_(le.$$.fragment,xt),xt.forEach(l),xe.forEach(l),this.h()},h(){W(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(v,i){b(e,v,i),p(v,m,i),p(v,n,i),b(o,n,null),s(n,k),s(n,t),s(n,ee),s(n,I),s(n,D),s(n,U),s(n,O),s(n,h),b(C,h,null),s(h,Ye),s(h,we),s(h,un),b(ce,h,null),s(h,Cn),b(He,h,null),p(v,ft,i),b(jt,v,i),p(v,Jn,i),p(v,X,i),b(Vt,X,null),s(X,E),s(X,Ct),s(X,gt),s(X,pe),s(X,Jt),s(X,Rt),s(X,Bn),s(X,Ie),b(At,Ie,null),s(Ie,Xt),s(Ie,De),s(Ie,en),b(qe,Ie,null),s(Ie,no),b(tn,Ie,null),p(v,_t,i),b(lt,v,i),p(v,nn,i),p(v,Q,i),b(Oe,Q,null),s(Q,bt),s(Q,St),s(Q,Tt),s(Q,zt),s(Q,yt),s(Q,on),s(Q,uo),s(Q,G),b(_e,G,null),s(G,po),s(G,et),s(G,oo),b(Y,G,null),s(G,Pn),b(Et,G,null),s(G,tt),b(Vn,G,null),p(v,Rn,i),b(he,v,i),p(v,so,i),p(v,P,i),b(Be,P,null),s(P,gn),s(P,Ut),s(P,sn),s(P,te),s(P,ho),s(P,Pe),s(P,bn),s(P,ne),b(oe,ne,null),s(ne,Mt),s(ne,It),s(ne,zn),b(nt,ne,null),s(ne,Yt),b(ve,ne,null),s(ne,Tn),b(be,ne,null),p(v,qt,i),b(Un,v,i),p(v,Wt,i),p(v,Te,i),b(yn,Te,null),s(Te,Ve),s(Te,ao),s(Te,dt),s(Te,ot),s(Te,V),s(Te,st),s(Te,ye),s(Te,Re),b(kn,Re,null),s(Re,Xe),s(Re,ro),s(Re,ct),b(kt,Re,null),s(Re,vn),b(S,Re,null),p(v,rn,i),b(fe,v,i),p(v,We,i),p(v,Ze,i),b(Qe,Ze,null),s(Ze,In),s(Ze,Le),s(Ze,qn),s(Ze,at),s(Ze,Zt),s(Ze,rt),s(Ze,Lt),s(Ze,Se),b(Dt,Se,null),s(Se,vt),s(Se,it),s(Se,Xn),b(Ce,Se,null),s(Se,Nt),b(pt,Se,null),p(v,$n,i),b(Je,v,i),p(v,Qn,i),p(v,N,i),b(mt,N,null),s(N,ae),s(N,ut),s(N,Ht),s(N,$t),s(N,Ne),s(N,Sn),s(N,Wn),s(N,Ae),b(Ee,Ae,null),s(Ae,K),s(Ae,Ot),s(Ae,dn),b(xn,Ae,null),s(Ae,cn),b(le,Ae,null),Kt=!0},p(v,i){const F={};i&2&&(F.$$scope={dirty:i,ctx:v}),ce.$set(F);const de={};i&2&&(de.$$scope={dirty:i,ctx:v}),He.$set(de);const H={};i&2&&(H.$$scope={dirty:i,ctx:v}),qe.$set(H);const ge={};i&2&&(ge.$$scope={dirty:i,ctx:v}),tn.$set(ge);const B={};i&2&&(B.$$scope={dirty:i,ctx:v}),Y.$set(B);const se={};i&2&&(se.$$scope={dirty:i,ctx:v}),Et.$set(se);const ze={};i&2&&(ze.$$scope={dirty:i,ctx:v}),Vn.$set(ze);const re={};i&2&&(re.$$scope={dirty:i,ctx:v}),nt.$set(re);const R={};i&2&&(R.$$scope={dirty:i,ctx:v}),ve.$set(R);const ie={};i&2&&(ie.$$scope={dirty:i,ctx:v}),be.$set(ie);const $e={};i&2&&($e.$$scope={dirty:i,ctx:v}),kt.$set($e);const xe={};i&2&&(xe.$$scope={dirty:i,ctx:v}),S.$set(xe);const xt={};i&2&&(xt.$$scope={dirty:i,ctx:v}),Ce.$set(xt);const Co={};i&2&&(Co.$$scope={dirty:i,ctx:v}),pt.$set(Co);const Zn={};i&2&&(Zn.$$scope={dirty:i,ctx:v}),xn.$set(Zn);const Jo={};i&2&&(Jo.$$scope={dirty:i,ctx:v}),le.$set(Jo)},i(v){Kt||(T(e.$$.fragment,v),T(o.$$.fragment,v),T(C.$$.fragment,v),T(ce.$$.fragment,v),T(He.$$.fragment,v),T(jt.$$.fragment,v),T(Vt.$$.fragment,v),T(At.$$.fragment,v),T(qe.$$.fragment,v),T(tn.$$.fragment,v),T(lt.$$.fragment,v),T(Oe.$$.fragment,v),T(_e.$$.fragment,v),T(Y.$$.fragment,v),T(Et.$$.fragment,v),T(Vn.$$.fragment,v),T(he.$$.fragment,v),T(Be.$$.fragment,v),T(oe.$$.fragment,v),T(nt.$$.fragment,v),T(ve.$$.fragment,v),T(be.$$.fragment,v),T(Un.$$.fragment,v),T(yn.$$.fragment,v),T(kn.$$.fragment,v),T(kt.$$.fragment,v),T(S.$$.fragment,v),T(fe.$$.fragment,v),T(Qe.$$.fragment,v),T(Dt.$$.fragment,v),T(Ce.$$.fragment,v),T(pt.$$.fragment,v),T(Je.$$.fragment,v),T(mt.$$.fragment,v),T(Ee.$$.fragment,v),T(xn.$$.fragment,v),T(le.$$.fragment,v),Kt=!0)},o(v){y(e.$$.fragment,v),y(o.$$.fragment,v),y(C.$$.fragment,v),y(ce.$$.fragment,v),y(He.$$.fragment,v),y(jt.$$.fragment,v),y(Vt.$$.fragment,v),y(At.$$.fragment,v),y(qe.$$.fragment,v),y(tn.$$.fragment,v),y(lt.$$.fragment,v),y(Oe.$$.fragment,v),y(_e.$$.fragment,v),y(Y.$$.fragment,v),y(Et.$$.fragment,v),y(Vn.$$.fragment,v),y(he.$$.fragment,v),y(Be.$$.fragment,v),y(oe.$$.fragment,v),y(nt.$$.fragment,v),y(ve.$$.fragment,v),y(be.$$.fragment,v),y(Un.$$.fragment,v),y(yn.$$.fragment,v),y(kn.$$.fragment,v),y(kt.$$.fragment,v),y(S.$$.fragment,v),y(fe.$$.fragment,v),y(Qe.$$.fragment,v),y(Dt.$$.fragment,v),y(Ce.$$.fragment,v),y(pt.$$.fragment,v),y(Je.$$.fragment,v),y(mt.$$.fragment,v),y(Ee.$$.fragment,v),y(xn.$$.fragment,v),y(le.$$.fragment,v),Kt=!1},d(v){v&&(l(m),l(n),l(ft),l(Jn),l(X),l(_t),l(nn),l(Q),l(Rn),l(so),l(P),l(qt),l(Wt),l(Te),l(rn),l(We),l(Ze),l($n),l(Qn),l(N)),M(e,v),M(o),M(C),M(ce),M(He),M(jt,v),M(Vt),M(At),M(qe),M(tn),M(lt,v),M(Oe),M(_e),M(Y),M(Et),M(Vn),M(he,v),M(Be),M(oe),M(nt),M(ve),M(be),M(Un,v),M(yn),M(kn),M(kt),M(S),M(fe,v),M(Qe),M(Dt),M(Ce),M(pt),M(Je,v),M(mt),M(Ee),M(xn),M(le)}}}function ds(x){let e,m;return e=new qo({props:{$$slots:{default:[ls]},$$scope:{ctx:x}}}),{c(){g(e.$$.fragment)},l(n){_(e.$$.fragment,n)},m(n,o){b(e,n,o),m=!0},p(n,o){const k={};o&2&&(k.$$scope={dirty:o,ctx:n}),e.$set(k)},i(n){m||(T(e.$$.fragment,n),m=!0)},o(n){y(e.$$.fragment,n),m=!1},d(n){M(e,n)}}}function cs(x){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,k="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,I,A,D=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,z,O=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=m,n=a(),o=d("ul"),o.innerHTML=k,t=a(),w=d("p"),w.innerHTML=ee,I=a(),A=d("ul"),A.innerHTML=D,U=a(),z=d("p"),z.innerHTML=O},l(h){e=c(h,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),n=r(h),o=c(h,"UL",{"data-svelte-h":!0}),u(o)!=="svelte-qm1t26"&&(o.innerHTML=k),t=r(h),w=c(h,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),I=r(h),A=c(h,"UL",{"data-svelte-h":!0}),u(A)!=="svelte-15scerc"&&(A.innerHTML=D),U=r(h),z=c(h,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1an3odd"&&(z.innerHTML=O)},m(h,C){p(h,e,C),p(h,n,C),p(h,o,C),p(h,t,C),p(h,w,C),p(h,I,C),p(h,A,C),p(h,U,C),p(h,z,C)},p:q,d(h){h&&(l(e),l(n),l(o),l(t),l(w),l(I),l(A),l(U),l(z))}}}function ps(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function ms(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkFsYmVydE1vZGVsJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGQWxiZXJ0TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function us(x){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,k="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,I,A,D=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,z,O=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=m,n=a(),o=d("ul"),o.innerHTML=k,t=a(),w=d("p"),w.innerHTML=ee,I=a(),A=d("ul"),A.innerHTML=D,U=a(),z=d("p"),z.innerHTML=O},l(h){e=c(h,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),n=r(h),o=c(h,"UL",{"data-svelte-h":!0}),u(o)!=="svelte-qm1t26"&&(o.innerHTML=k),t=r(h),w=c(h,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),I=r(h),A=c(h,"UL",{"data-svelte-h":!0}),u(A)!=="svelte-15scerc"&&(A.innerHTML=D),U=r(h),z=c(h,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1an3odd"&&(z.innerHTML=O)},m(h,C){p(h,e,C),p(h,n,C),p(h,o,C),p(h,t,C),p(h,w,C),p(h,I,C),p(h,A,C),p(h,U,C),p(h,z,C)},p:q,d(h){h&&(l(e),l(n),l(o),l(t),l(w),l(I),l(A),l(U),l(z))}}}function hs(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function fs(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFRGQWxiZXJ0Rm9yUHJlVHJhaW5pbmclMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGQWxiZXJ0Rm9yUHJlVHJhaW5pbmcuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQWlucHV0X2lkcyUyMCUzRCUyMHRmLmNvbnN0YW50KHRva2VuaXplci5lbmNvZGUoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzRFRydWUpKSU1Qk5vbmUlMkMlMjAlM0ElNUQlMEElMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMucHJlZGljdGlvbl9sb2dpdHMlMEFzb3BfbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5zb3BfbG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[<span class="hljs-literal">None</span>, :]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function gs(x){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,k="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,I,A,D=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,z,O=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=m,n=a(),o=d("ul"),o.innerHTML=k,t=a(),w=d("p"),w.innerHTML=ee,I=a(),A=d("ul"),A.innerHTML=D,U=a(),z=d("p"),z.innerHTML=O},l(h){e=c(h,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),n=r(h),o=c(h,"UL",{"data-svelte-h":!0}),u(o)!=="svelte-qm1t26"&&(o.innerHTML=k),t=r(h),w=c(h,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),I=r(h),A=c(h,"UL",{"data-svelte-h":!0}),u(A)!=="svelte-15scerc"&&(A.innerHTML=D),U=r(h),z=c(h,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1an3odd"&&(z.innerHTML=O)},m(h,C){p(h,e,C),p(h,n,C),p(h,o,C),p(h,t,C),p(h,w,C),p(h,I,C),p(h,A,C),p(h,U,C),p(h,z,C)},p:q,d(h){h&&(l(e),l(n),l(o),l(t),l(w),l(I),l(A),l(U),l(z))}}}function _s(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function bs(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFRGQWxiZXJ0Rm9yTWFza2VkTE0lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGQWxiZXJ0Rm9yTWFza2VkTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQSUyMyUyMGFkZCUyMG1hc2tfdG9rZW4lMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoZiUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMCU1Qk1BU0slNUQlMjBpcyUyMFBhcmlzLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQSUyMyUyMHJldHJpZXZlJTIwaW5kZXglMjBvZiUyMCU1Qk1BU0slNUQlMEFtYXNrX3Rva2VuX2luZGV4JTIwJTNEJTIwdGYud2hlcmUoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKSU1QjAlNUQlNUIxJTVEJTBBcHJlZGljdGVkX3Rva2VuX2lkJTIwJTNEJTIwdGYubWF0aC5hcmdtYXgobG9naXRzJTVCMCUyQyUyMG1hc2tfdG9rZW5faW5kZXglNUQlMkMlMjBheGlzJTNELTEpJTBBdG9rZW5pemVyLmRlY29kZShwcmVkaWN0ZWRfdG9rZW5faWQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">f&quot;The capital of [MASK] is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;france&#x27;</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Ts(x){let e,m;return e=new ke({props:{code:"bGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEFsYWJlbHMlMjAlM0QlMjB0Zi53aGVyZShpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQlMkMlMjBsYWJlbHMlMkMlMjAtMTAwKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscyklMEFyb3VuZChmbG9hdChvdXRwdXRzLmxvc3MpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`,wrap:!1}}),{c(){g(e.$$.fragment)},l(n){_(e.$$.fragment,n)},m(n,o){b(e,n,o),m=!0},p:q,i(n){m||(T(e.$$.fragment,n),m=!0)},o(n){y(e.$$.fragment,n),m=!1},d(n){M(e,n)}}}function ys(x){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,k="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,I,A,D=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,z,O=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=m,n=a(),o=d("ul"),o.innerHTML=k,t=a(),w=d("p"),w.innerHTML=ee,I=a(),A=d("ul"),A.innerHTML=D,U=a(),z=d("p"),z.innerHTML=O},l(h){e=c(h,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),n=r(h),o=c(h,"UL",{"data-svelte-h":!0}),u(o)!=="svelte-qm1t26"&&(o.innerHTML=k),t=r(h),w=c(h,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),I=r(h),A=c(h,"UL",{"data-svelte-h":!0}),u(A)!=="svelte-15scerc"&&(A.innerHTML=D),U=r(h),z=c(h,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1an3odd"&&(z.innerHTML=O)},m(h,C){p(h,e,C),p(h,n,C),p(h,o,C),p(h,t,C),p(h,w,C),p(h,I,C),p(h,A,C),p(h,U,C),p(h,z,C)},p:q,d(h){h&&(l(e),l(n),l(o),l(t),l(w),l(I),l(A),l(U),l(z))}}}function Ms(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function ks(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnZ1bWljaGllbiUyRmFsYmVydC1iYXNlLXYyLWltZGIlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnZ1bWljaGllbiUyRmFsYmVydC1iYXNlLXYyLWltZGIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBpbnQodGYubWF0aC5hcmdtYXgobG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQpJTBBbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCcHJlZGljdGVkX2NsYXNzX2lkJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function ws(x){let e,m;return e=new ke({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZBbGJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJ2dW1pY2hpZW4lMkZhbGJlcnQtYmFzZS12Mi1pbWRiJTIyJTJDJTIwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdGYuY29uc3RhbnQoMSklMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3MlMEFyb3VuZChmbG9hdChsb3NzKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`,wrap:!1}}),{c(){g(e.$$.fragment)},l(n){_(e.$$.fragment,n)},m(n,o){b(e,n,o),m=!0},p:q,i(n){m||(T(e.$$.fragment,n),m=!0)},o(n){y(e.$$.fragment,n),m=!1},d(n){M(e,n)}}}function vs(x){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,k="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,I,A,D=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,z,O=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=m,n=a(),o=d("ul"),o.innerHTML=k,t=a(),w=d("p"),w.innerHTML=ee,I=a(),A=d("ul"),A.innerHTML=D,U=a(),z=d("p"),z.innerHTML=O},l(h){e=c(h,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),n=r(h),o=c(h,"UL",{"data-svelte-h":!0}),u(o)!=="svelte-qm1t26"&&(o.innerHTML=k),t=r(h),w=c(h,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),I=r(h),A=c(h,"UL",{"data-svelte-h":!0}),u(A)!=="svelte-15scerc"&&(A.innerHTML=D),U=r(h),z=c(h,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1an3odd"&&(z.innerHTML=O)},m(h,C){p(h,e,C),p(h,n,C),p(h,o,C),p(h,t,C),p(h,w,C),p(h,I,C),p(h,A,C),p(h,U,C),p(h,z,C)},p:q,d(h){h&&(l(e),l(n),l(o),l(t),l(w),l(I),l(A),l(U),l(z))}}}function $s(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function xs(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkFsYmVydEZvck11bHRpcGxlQ2hvaWNlJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGQWxiZXJ0Rm9yTXVsdGlwbGVDaG9pY2UuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMkluJTIwSXRhbHklMkMlMjBwaXp6YSUyMHNlcnZlZCUyMGluJTIwZm9ybWFsJTIwc2V0dGluZ3MlMkMlMjBzdWNoJTIwYXMlMjBhdCUyMGElMjByZXN0YXVyYW50JTJDJTIwaXMlMjBwcmVzZW50ZWQlMjB1bnNsaWNlZC4lMjIlMEFjaG9pY2UwJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2l0aCUyMGElMjBmb3JrJTIwYW5kJTIwYSUyMGtuaWZlLiUyMiUwQWNob2ljZTElMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aGlsZSUyMGhlbGQlMjBpbiUyMHRoZSUyMGhhbmQuJTIyJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTVCcHJvbXB0JTJDJTIwcHJvbXB0JTVEJTJDJTIwJTVCY2hvaWNlMCUyQyUyMGNob2ljZTElNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBaW5wdXRzJTIwJTNEJTIwJTdCayUzQSUyMHRmLmV4cGFuZF9kaW1zKHYlMkMlMjAwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMjAlMjAlMjMlMjBiYXRjaCUyMHNpemUlMjBpcyUyMDElMEElMEElMjMlMjB0aGUlMjBsaW5lYXIlMjBjbGFzc2lmaWVyJTIwc3RpbGwlMjBuZWVkcyUyMHRvJTIwYmUlMjB0cmFpbmVkJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Fs(x){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,k="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,I,A,D=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,z,O=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=m,n=a(),o=d("ul"),o.innerHTML=k,t=a(),w=d("p"),w.innerHTML=ee,I=a(),A=d("ul"),A.innerHTML=D,U=a(),z=d("p"),z.innerHTML=O},l(h){e=c(h,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),n=r(h),o=c(h,"UL",{"data-svelte-h":!0}),u(o)!=="svelte-qm1t26"&&(o.innerHTML=k),t=r(h),w=c(h,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),I=r(h),A=c(h,"UL",{"data-svelte-h":!0}),u(A)!=="svelte-15scerc"&&(A.innerHTML=D),U=r(h),z=c(h,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1an3odd"&&(z.innerHTML=O)},m(h,C){p(h,e,C),p(h,n,C),p(h,o,C),p(h,t,C),p(h,w,C),p(h,I,C),p(h,A,C),p(h,U,C),p(h,z,C)},p:q,d(h){h&&(l(e),l(n),l(o),l(t),l(w),l(I),l(A),l(U),l(z))}}}function js(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Cs(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkFsYmVydEZvclRva2VuQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZBbGJlcnRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiUwQSklMEElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMHRmLm1hdGguYXJnbWF4KGxvZ2l0cyUyQyUyMGF4aXMlM0QtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdCU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVELm51bXB5KCkudG9saXN0KCklNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Js(x){let e,m;return e=new ke({props:{code:"bGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)`,wrap:!1}}),{c(){g(e.$$.fragment)},l(n){_(e.$$.fragment,n)},m(n,o){b(e,n,o),m=!0},p:q,i(n){m||(T(e.$$.fragment,n),m=!0)},o(n){y(e.$$.fragment,n),m=!1},d(n){M(e,n)}}}function As(x){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,k="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,I,A,D=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,z,O=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=m,n=a(),o=d("ul"),o.innerHTML=k,t=a(),w=d("p"),w.innerHTML=ee,I=a(),A=d("ul"),A.innerHTML=D,U=a(),z=d("p"),z.innerHTML=O},l(h){e=c(h,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),n=r(h),o=c(h,"UL",{"data-svelte-h":!0}),u(o)!=="svelte-qm1t26"&&(o.innerHTML=k),t=r(h),w=c(h,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),I=r(h),A=c(h,"UL",{"data-svelte-h":!0}),u(A)!=="svelte-15scerc"&&(A.innerHTML=D),U=r(h),z=c(h,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1an3odd"&&(z.innerHTML=O)},m(h,C){p(h,e,C),p(h,n,C),p(h,o,C),p(h,t,C),p(h,w,C),p(h,I,C),p(h,A,C),p(h,U,C),p(h,z,C)},p:q,d(h){h&&(l(e),l(n),l(o),l(t),l(w),l(I),l(A),l(U),l(z))}}}function zs(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Us(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkFsYmVydEZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ2dW1pY2hpZW4lMkZhbGJlcnQtYmFzZS12Mi1zcXVhZDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkFsYmVydEZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJ2dW1pY2hpZW4lMkZhbGJlcnQtYmFzZS12Mi1zcXVhZDIlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KG91dHB1dHMuc3RhcnRfbG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChvdXRwdXRzLmVuZF9sb2dpdHMlMkMlMjBheGlzJTNELTEpJTVCMCU1RCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCMCUyQyUyMGFuc3dlcl9zdGFydF9pbmRleCUyMCUzQSUyMGFuc3dlcl9lbmRfaW5kZXglMjAlMkIlMjAxJTVEJTBBdG9rZW5pemVyLmRlY29kZShwcmVkaWN0X2Fuc3dlcl90b2tlbnMp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Is(x){let e,m;return e=new ke({props:{code:"JTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdGYuY29uc3RhbnQoJTVCMTIlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRmLmNvbnN0YW50KCU1QjEzJTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG91dHB1dHMubG9zcyklMEFyb3VuZChmbG9hdChsb3NzKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">7.36</span>`,wrap:!1}}),{c(){g(e.$$.fragment)},l(n){_(e.$$.fragment,n)},m(n,o){b(e,n,o),m=!0},p:q,i(n){m||(T(e.$$.fragment,n),m=!0)},o(n){y(e.$$.fragment,n),m=!1},d(n){M(e,n)}}}function qs(x){let e,m,n,o,k,t,w="The bare Albert Model transformer outputting raw hidden-states without any specific head on top.",ee,I,A=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,D,U,z=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,O,h,C,Ye,we,ko,un,ce='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a> forward method, overrides the <code>__call__</code> special method.',Cn,He,ft,jt,Jn,X,Vt,E,Ct,hn,gt,pe="Albert Model with two heads on top for pretraining: a <code>masked language modeling</code> head and a <code>sentence order prediction</code> (classification) head.",fn,Jt,Rt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Hn,Bn,Ie=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,At,Xt,De,Qt,en,qe,no,tn='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForPreTraining">TFAlbertForPreTraining</a> forward method, overrides the <code>__call__</code> special method.',_t,lt,nn,Q,Oe,bt,St,je,Tt,zt,An,yt="Albert Model with a <code>language modeling</code> head on top.",on,Ke,uo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,G,_e,po=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,et,Gn,oo,Y,Pn,Et,tt,Vn='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForMaskedLM">TFAlbertForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Rn,he,so,P,Be,gn,Ut,Ge,sn,te,an,ho,Pe,_n=`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,bn,ne,oe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Mt,It,me=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,zn,nt,Yt,ve,Tn,be,qt,Un='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForSequenceClassification">TFAlbertForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Wt,Te,yn,Ve,ao,Mn,dt,ot,mo,V,st,fo,ye,Re=`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,kn,Xe,ro=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,wn,ct,kt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,vn,S,rn,fe,We,Ze,Qe,In='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForMultipleChoice">TFAlbertForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Le,wt,qn,at,go,Zt,rt,ue,Lt,Se,Dt,vt=`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,it,io,Xn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ce,Nt,pt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,$n,Je,Qn,N,mt,ae,ut,_o='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForTokenClassification">TFAlbertForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Ht,$t,ln,Ne,Sn,Bt,Wn,Ae,Ee,K,Ot,En,dn,xn=`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,cn,le,Kt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,v,i,F=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,de,H,ge,B,se,ze,re,R='The <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering">TFAlbertForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',ie,$e,xe,xt,Co,Zn,Jo;return e=new Fe({props:{title:"TFAlbertModel",local:"transformers.TFAlbertModel",headingTag:"h2"}}),o=new L({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L870"}}),h=new Ue({props:{$$slots:{default:[cs]},$$scope:{ctx:x}}}),we=new L({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L880",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),He=new Ue({props:{$$slots:{default:[ps]},$$scope:{ctx:x}}}),jt=new Me({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[ms]},$$scope:{ctx:x}}}),X=new Fe({props:{title:"TFAlbertForPreTraining",local:"transformers.TFAlbertForPreTraining",headingTag:"h2"}}),Ct=new L({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L924"}}),Xt=new Ue({props:{$$slots:{default:[us]},$$scope:{ctx:x}}}),en=new L({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"sentence_order_label",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L947",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) — Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/main/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),lt=new Ue({props:{$$slots:{default:[hs]},$$scope:{ctx:x}}}),Q=new Me({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[fs]},$$scope:{ctx:x}}}),bt=new Fe({props:{title:"TFAlbertForMaskedLM",local:"transformers.TFAlbertForMaskedLM",headingTag:"h2"}}),Tt=new L({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1061"}}),Gn=new Ue({props:{$$slots:{default:[gs]},$$scope:{ctx:x}}}),Pn=new L({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1075",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),he=new Ue({props:{$$slots:{default:[_s]},$$scope:{ctx:x}}}),P=new Me({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[bs]},$$scope:{ctx:x}}}),gn=new Me({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[Ts]},$$scope:{ctx:x}}}),Ge=new Fe({props:{title:"TFAlbertForSequenceClassification",local:"transformers.TFAlbertForSequenceClassification",headingTag:"h2"}}),an=new L({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1168"}}),nt=new Ue({props:{$$slots:{default:[ys]},$$scope:{ctx:x}}}),Tn=new L({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1192",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),Te=new Ue({props:{$$slots:{default:[Ms]},$$scope:{ctx:x}}}),Ve=new Me({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[ks]},$$scope:{ctx:x}}}),Mn=new Me({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[ws]},$$scope:{ctx:x}}}),ot=new Fe({props:{title:"TFAlbertForMultipleChoice",local:"transformers.TFAlbertForMultipleChoice",headingTag:"h2"}}),st=new L({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1464"}}),S=new Ue({props:{$$slots:{default:[vs]},$$scope:{ctx:x}}}),We=new L({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1486",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),wt=new Ue({props:{$$slots:{default:[$s]},$$scope:{ctx:x}}}),at=new Me({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[xs]},$$scope:{ctx:x}}}),Zt=new Fe({props:{title:"TFAlbertForTokenClassification",local:"transformers.TFAlbertForTokenClassification",headingTag:"h2"}}),Lt=new L({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1262"}}),Je=new Ue({props:{$$slots:{default:[Fs]},$$scope:{ctx:x}}}),mt=new L({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1291",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),$t=new Ue({props:{$$slots:{default:[js]},$$scope:{ctx:x}}}),Ne=new Me({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[Cs]},$$scope:{ctx:x}}}),Bt=new Me({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[Js]},$$scope:{ctx:x}}}),Ae=new Fe({props:{title:"TFAlbertForQuestionAnswering",local:"transformers.TFAlbertForQuestionAnswering",headingTag:"h2"}}),Ot=new L({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1357"}}),H=new Ue({props:{$$slots:{default:[As]},$$scope:{ctx:x}}}),se=new L({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"start_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"end_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1379",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
`}}),$e=new Ue({props:{$$slots:{default:[zs]},$$scope:{ctx:x}}}),xt=new Me({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[Us]},$$scope:{ctx:x}}}),Zn=new Me({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[Is]},$$scope:{ctx:x}}}),{c(){g(e.$$.fragment),m=a(),n=d("div"),g(o.$$.fragment),k=a(),t=d("p"),t.textContent=w,ee=a(),I=d("p"),I.innerHTML=A,D=a(),U=d("p"),U.innerHTML=z,O=a(),g(h.$$.fragment),C=a(),Ye=d("div"),g(we.$$.fragment),ko=a(),un=d("p"),un.innerHTML=ce,Cn=a(),g(He.$$.fragment),ft=a(),g(jt.$$.fragment),Jn=a(),g(X.$$.fragment),Vt=a(),E=d("div"),g(Ct.$$.fragment),hn=a(),gt=d("p"),gt.innerHTML=pe,fn=a(),Jt=d("p"),Jt.innerHTML=Rt,Hn=a(),Bn=d("p"),Bn.innerHTML=Ie,At=a(),g(Xt.$$.fragment),De=a(),Qt=d("div"),g(en.$$.fragment),qe=a(),no=d("p"),no.innerHTML=tn,_t=a(),g(lt.$$.fragment),nn=a(),g(Q.$$.fragment),Oe=a(),g(bt.$$.fragment),St=a(),je=d("div"),g(Tt.$$.fragment),zt=a(),An=d("p"),An.innerHTML=yt,on=a(),Ke=d("p"),Ke.innerHTML=uo,G=a(),_e=d("p"),_e.innerHTML=po,et=a(),g(Gn.$$.fragment),oo=a(),Y=d("div"),g(Pn.$$.fragment),Et=a(),tt=d("p"),tt.innerHTML=Vn,Rn=a(),g(he.$$.fragment),so=a(),g(P.$$.fragment),Be=a(),g(gn.$$.fragment),Ut=a(),g(Ge.$$.fragment),sn=a(),te=d("div"),g(an.$$.fragment),ho=a(),Pe=d("p"),Pe.textContent=_n,bn=a(),ne=d("p"),ne.innerHTML=oe,Mt=a(),It=d("p"),It.innerHTML=me,zn=a(),g(nt.$$.fragment),Yt=a(),ve=d("div"),g(Tn.$$.fragment),be=a(),qt=d("p"),qt.innerHTML=Un,Wt=a(),g(Te.$$.fragment),yn=a(),g(Ve.$$.fragment),ao=a(),g(Mn.$$.fragment),dt=a(),g(ot.$$.fragment),mo=a(),V=d("div"),g(st.$$.fragment),fo=a(),ye=d("p"),ye.textContent=Re,kn=a(),Xe=d("p"),Xe.innerHTML=ro,wn=a(),ct=d("p"),ct.innerHTML=kt,vn=a(),g(S.$$.fragment),rn=a(),fe=d("div"),g(We.$$.fragment),Ze=a(),Qe=d("p"),Qe.innerHTML=In,Le=a(),g(wt.$$.fragment),qn=a(),g(at.$$.fragment),go=a(),g(Zt.$$.fragment),rt=a(),ue=d("div"),g(Lt.$$.fragment),Se=a(),Dt=d("p"),Dt.textContent=vt,it=a(),io=d("p"),io.innerHTML=Xn,Ce=a(),Nt=d("p"),Nt.innerHTML=pt,$n=a(),g(Je.$$.fragment),Qn=a(),N=d("div"),g(mt.$$.fragment),ae=a(),ut=d("p"),ut.innerHTML=_o,Ht=a(),g($t.$$.fragment),ln=a(),g(Ne.$$.fragment),Sn=a(),g(Bt.$$.fragment),Wn=a(),g(Ae.$$.fragment),Ee=a(),K=d("div"),g(Ot.$$.fragment),En=a(),dn=d("p"),dn.innerHTML=xn,cn=a(),le=d("p"),le.innerHTML=Kt,v=a(),i=d("p"),i.innerHTML=F,de=a(),g(H.$$.fragment),ge=a(),B=d("div"),g(se.$$.fragment),ze=a(),re=d("p"),re.innerHTML=R,ie=a(),g($e.$$.fragment),xe=a(),g(xt.$$.fragment),Co=a(),g(Zn.$$.fragment),this.h()},l(f){_(e.$$.fragment,f),m=r(f),n=c(f,"DIV",{class:!0});var j=Z(n);_(o.$$.fragment,j),k=r(j),t=c(j,"P",{"data-svelte-h":!0}),u(t)!=="svelte-psfqdt"&&(t.textContent=w),ee=r(j),I=c(j,"P",{"data-svelte-h":!0}),u(I)!=="svelte-1qaxm70"&&(I.innerHTML=A),D=r(j),U=c(j,"P",{"data-svelte-h":!0}),u(U)!=="svelte-1be7e3c"&&(U.innerHTML=z),O=r(j),_(h.$$.fragment,j),C=r(j),Ye=c(j,"DIV",{class:!0});var bo=Z(Ye);_(we.$$.fragment,bo),ko=r(bo),un=c(bo,"P",{"data-svelte-h":!0}),u(un)!=="svelte-wvef6h"&&(un.innerHTML=ce),Cn=r(bo),_(He.$$.fragment,bo),ft=r(bo),_(jt.$$.fragment,bo),bo.forEach(l),j.forEach(l),Jn=r(f),_(X.$$.fragment,f),Vt=r(f),E=c(f,"DIV",{class:!0});var Fn=Z(E);_(Ct.$$.fragment,Fn),hn=r(Fn),gt=c(Fn,"P",{"data-svelte-h":!0}),u(gt)!=="svelte-xc1iay"&&(gt.innerHTML=pe),fn=r(Fn),Jt=c(Fn,"P",{"data-svelte-h":!0}),u(Jt)!=="svelte-1qaxm70"&&(Jt.innerHTML=Rt),Hn=r(Fn),Bn=c(Fn,"P",{"data-svelte-h":!0}),u(Bn)!=="svelte-1be7e3c"&&(Bn.innerHTML=Ie),At=r(Fn),_(Xt.$$.fragment,Fn),De=r(Fn),Qt=c(Fn,"DIV",{class:!0});var Ln=Z(Qt);_(en.$$.fragment,Ln),qe=r(Ln),no=c(Ln,"P",{"data-svelte-h":!0}),u(no)!=="svelte-1xlzzgd"&&(no.innerHTML=tn),_t=r(Ln),_(lt.$$.fragment,Ln),nn=r(Ln),_(Q.$$.fragment,Ln),Ln.forEach(l),Fn.forEach(l),Oe=r(f),_(bt.$$.fragment,f),St=r(f),je=c(f,"DIV",{class:!0});var Nn=Z(je);_(Tt.$$.fragment,Nn),zt=r(Nn),An=c(Nn,"P",{"data-svelte-h":!0}),u(An)!=="svelte-q4kelk"&&(An.innerHTML=yt),on=r(Nn),Ke=c(Nn,"P",{"data-svelte-h":!0}),u(Ke)!=="svelte-1qaxm70"&&(Ke.innerHTML=uo),G=r(Nn),_e=c(Nn,"P",{"data-svelte-h":!0}),u(_e)!=="svelte-1be7e3c"&&(_e.innerHTML=po),et=r(Nn),_(Gn.$$.fragment,Nn),oo=r(Nn),Y=c(Nn,"DIV",{class:!0});var Yn=Z(Y);_(Pn.$$.fragment,Yn),Et=r(Yn),tt=c(Yn,"P",{"data-svelte-h":!0}),u(tt)!=="svelte-1mlqknh"&&(tt.innerHTML=Vn),Rn=r(Yn),_(he.$$.fragment,Yn),so=r(Yn),_(P.$$.fragment,Yn),Be=r(Yn),_(gn.$$.fragment,Yn),Yn.forEach(l),Nn.forEach(l),Ut=r(f),_(Ge.$$.fragment,f),sn=r(f),te=c(f,"DIV",{class:!0});var Gt=Z(te);_(an.$$.fragment,Gt),ho=r(Gt),Pe=c(Gt,"P",{"data-svelte-h":!0}),u(Pe)!=="svelte-1wuvovs"&&(Pe.textContent=_n),bn=r(Gt),ne=c(Gt,"P",{"data-svelte-h":!0}),u(ne)!=="svelte-1qaxm70"&&(ne.innerHTML=oe),Mt=r(Gt),It=c(Gt,"P",{"data-svelte-h":!0}),u(It)!=="svelte-1be7e3c"&&(It.innerHTML=me),zn=r(Gt),_(nt.$$.fragment,Gt),Yt=r(Gt),ve=c(Gt,"DIV",{class:!0});var lo=Z(ve);_(Tn.$$.fragment,lo),be=r(lo),qt=c(lo,"P",{"data-svelte-h":!0}),u(qt)!=="svelte-1fjj8ml"&&(qt.innerHTML=Un),Wt=r(lo),_(Te.$$.fragment,lo),yn=r(lo),_(Ve.$$.fragment,lo),ao=r(lo),_(Mn.$$.fragment,lo),lo.forEach(l),Gt.forEach(l),dt=r(f),_(ot.$$.fragment,f),mo=r(f),V=c(f,"DIV",{class:!0});var jn=Z(V);_(st.$$.fragment,jn),fo=r(jn),ye=c(jn,"P",{"data-svelte-h":!0}),u(ye)!=="svelte-axso2c"&&(ye.textContent=Re),kn=r(jn),Xe=c(jn,"P",{"data-svelte-h":!0}),u(Xe)!=="svelte-1qaxm70"&&(Xe.innerHTML=ro),wn=r(jn),ct=c(jn,"P",{"data-svelte-h":!0}),u(ct)!=="svelte-1be7e3c"&&(ct.innerHTML=kt),vn=r(jn),_(S.$$.fragment,jn),rn=r(jn),fe=c(jn,"DIV",{class:!0});var ht=Z(fe);_(We.$$.fragment,ht),Ze=r(ht),Qe=c(ht,"P",{"data-svelte-h":!0}),u(Qe)!=="svelte-p6ulk9"&&(Qe.innerHTML=In),Le=r(ht),_(wt.$$.fragment,ht),qn=r(ht),_(at.$$.fragment,ht),ht.forEach(l),jn.forEach(l),go=r(f),_(Zt.$$.fragment,f),rt=r(f),ue=c(f,"DIV",{class:!0});var Ft=Z(ue);_(Lt.$$.fragment,Ft),Se=r(Ft),Dt=c(Ft,"P",{"data-svelte-h":!0}),u(Dt)!=="svelte-olqnpn"&&(Dt.textContent=vt),it=r(Ft),io=c(Ft,"P",{"data-svelte-h":!0}),u(io)!=="svelte-1qaxm70"&&(io.innerHTML=Xn),Ce=r(Ft),Nt=c(Ft,"P",{"data-svelte-h":!0}),u(Nt)!=="svelte-1be7e3c"&&(Nt.innerHTML=pt),$n=r(Ft),_(Je.$$.fragment,Ft),Qn=r(Ft),N=c(Ft,"DIV",{class:!0});var Dn=Z(N);_(mt.$$.fragment,Dn),ae=r(Dn),ut=c(Dn,"P",{"data-svelte-h":!0}),u(ut)!=="svelte-1ucivtx"&&(ut.innerHTML=_o),Ht=r(Dn),_($t.$$.fragment,Dn),ln=r(Dn),_(Ne.$$.fragment,Dn),Sn=r(Dn),_(Bt.$$.fragment,Dn),Dn.forEach(l),Ft.forEach(l),Wn=r(f),_(Ae.$$.fragment,f),Ee=r(f),K=c(f,"DIV",{class:!0});var Pt=Z(K);_(Ot.$$.fragment,Pt),En=r(Pt),dn=c(Pt,"P",{"data-svelte-h":!0}),u(dn)!=="svelte-72qmgu"&&(dn.innerHTML=xn),cn=r(Pt),le=c(Pt,"P",{"data-svelte-h":!0}),u(le)!=="svelte-1qaxm70"&&(le.innerHTML=Kt),v=r(Pt),i=c(Pt,"P",{"data-svelte-h":!0}),u(i)!=="svelte-1be7e3c"&&(i.innerHTML=F),de=r(Pt),_(H.$$.fragment,Pt),ge=r(Pt),B=c(Pt,"DIV",{class:!0});var co=Z(B);_(se.$$.fragment,co),ze=r(co),re=c(co,"P",{"data-svelte-h":!0}),u(re)!=="svelte-tlrfbf"&&(re.innerHTML=R),ie=r(co),_($e.$$.fragment,co),xe=r(co),_(xt.$$.fragment,co),Co=r(co),_(Zn.$$.fragment,co),co.forEach(l),Pt.forEach(l),this.h()},h(){W(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(f,j){b(e,f,j),p(f,m,j),p(f,n,j),b(o,n,null),s(n,k),s(n,t),s(n,ee),s(n,I),s(n,D),s(n,U),s(n,O),b(h,n,null),s(n,C),s(n,Ye),b(we,Ye,null),s(Ye,ko),s(Ye,un),s(Ye,Cn),b(He,Ye,null),s(Ye,ft),b(jt,Ye,null),p(f,Jn,j),b(X,f,j),p(f,Vt,j),p(f,E,j),b(Ct,E,null),s(E,hn),s(E,gt),s(E,fn),s(E,Jt),s(E,Hn),s(E,Bn),s(E,At),b(Xt,E,null),s(E,De),s(E,Qt),b(en,Qt,null),s(Qt,qe),s(Qt,no),s(Qt,_t),b(lt,Qt,null),s(Qt,nn),b(Q,Qt,null),p(f,Oe,j),b(bt,f,j),p(f,St,j),p(f,je,j),b(Tt,je,null),s(je,zt),s(je,An),s(je,on),s(je,Ke),s(je,G),s(je,_e),s(je,et),b(Gn,je,null),s(je,oo),s(je,Y),b(Pn,Y,null),s(Y,Et),s(Y,tt),s(Y,Rn),b(he,Y,null),s(Y,so),b(P,Y,null),s(Y,Be),b(gn,Y,null),p(f,Ut,j),b(Ge,f,j),p(f,sn,j),p(f,te,j),b(an,te,null),s(te,ho),s(te,Pe),s(te,bn),s(te,ne),s(te,Mt),s(te,It),s(te,zn),b(nt,te,null),s(te,Yt),s(te,ve),b(Tn,ve,null),s(ve,be),s(ve,qt),s(ve,Wt),b(Te,ve,null),s(ve,yn),b(Ve,ve,null),s(ve,ao),b(Mn,ve,null),p(f,dt,j),b(ot,f,j),p(f,mo,j),p(f,V,j),b(st,V,null),s(V,fo),s(V,ye),s(V,kn),s(V,Xe),s(V,wn),s(V,ct),s(V,vn),b(S,V,null),s(V,rn),s(V,fe),b(We,fe,null),s(fe,Ze),s(fe,Qe),s(fe,Le),b(wt,fe,null),s(fe,qn),b(at,fe,null),p(f,go,j),b(Zt,f,j),p(f,rt,j),p(f,ue,j),b(Lt,ue,null),s(ue,Se),s(ue,Dt),s(ue,it),s(ue,io),s(ue,Ce),s(ue,Nt),s(ue,$n),b(Je,ue,null),s(ue,Qn),s(ue,N),b(mt,N,null),s(N,ae),s(N,ut),s(N,Ht),b($t,N,null),s(N,ln),b(Ne,N,null),s(N,Sn),b(Bt,N,null),p(f,Wn,j),b(Ae,f,j),p(f,Ee,j),p(f,K,j),b(Ot,K,null),s(K,En),s(K,dn),s(K,cn),s(K,le),s(K,v),s(K,i),s(K,de),b(H,K,null),s(K,ge),s(K,B),b(se,B,null),s(B,ze),s(B,re),s(B,ie),b($e,B,null),s(B,xe),b(xt,B,null),s(B,Co),b(Zn,B,null),Jo=!0},p(f,j){const bo={};j&2&&(bo.$$scope={dirty:j,ctx:f}),h.$set(bo);const Fn={};j&2&&(Fn.$$scope={dirty:j,ctx:f}),He.$set(Fn);const Ln={};j&2&&(Ln.$$scope={dirty:j,ctx:f}),jt.$set(Ln);const Nn={};j&2&&(Nn.$$scope={dirty:j,ctx:f}),Xt.$set(Nn);const Yn={};j&2&&(Yn.$$scope={dirty:j,ctx:f}),lt.$set(Yn);const Gt={};j&2&&(Gt.$$scope={dirty:j,ctx:f}),Q.$set(Gt);const lo={};j&2&&(lo.$$scope={dirty:j,ctx:f}),Gn.$set(lo);const jn={};j&2&&(jn.$$scope={dirty:j,ctx:f}),he.$set(jn);const ht={};j&2&&(ht.$$scope={dirty:j,ctx:f}),P.$set(ht);const Ft={};j&2&&(Ft.$$scope={dirty:j,ctx:f}),gn.$set(Ft);const Dn={};j&2&&(Dn.$$scope={dirty:j,ctx:f}),nt.$set(Dn);const Pt={};j&2&&(Pt.$$scope={dirty:j,ctx:f}),Te.$set(Pt);const co={};j&2&&(co.$$scope={dirty:j,ctx:f}),Ve.$set(co);const zo={};j&2&&(zo.$$scope={dirty:j,ctx:f}),Mn.$set(zo);const wo={};j&2&&(wo.$$scope={dirty:j,ctx:f}),S.$set(wo);const Uo={};j&2&&(Uo.$$scope={dirty:j,ctx:f}),wt.$set(Uo);const vo={};j&2&&(vo.$$scope={dirty:j,ctx:f}),at.$set(vo);const Ao={};j&2&&(Ao.$$scope={dirty:j,ctx:f}),Je.$set(Ao);const $={};j&2&&($.$$scope={dirty:j,ctx:f}),$t.$set($);const J={};j&2&&(J.$$scope={dirty:j,ctx:f}),Ne.$set(J);const To={};j&2&&(To.$$scope={dirty:j,ctx:f}),Bt.$set(To);const pn={};j&2&&(pn.$$scope={dirty:j,ctx:f}),H.$set(pn);const yo={};j&2&&(yo.$$scope={dirty:j,ctx:f}),$e.$set(yo);const mn={};j&2&&(mn.$$scope={dirty:j,ctx:f}),xt.$set(mn);const Mo={};j&2&&(Mo.$$scope={dirty:j,ctx:f}),Zn.$set(Mo)},i(f){Jo||(T(e.$$.fragment,f),T(o.$$.fragment,f),T(h.$$.fragment,f),T(we.$$.fragment,f),T(He.$$.fragment,f),T(jt.$$.fragment,f),T(X.$$.fragment,f),T(Ct.$$.fragment,f),T(Xt.$$.fragment,f),T(en.$$.fragment,f),T(lt.$$.fragment,f),T(Q.$$.fragment,f),T(bt.$$.fragment,f),T(Tt.$$.fragment,f),T(Gn.$$.fragment,f),T(Pn.$$.fragment,f),T(he.$$.fragment,f),T(P.$$.fragment,f),T(gn.$$.fragment,f),T(Ge.$$.fragment,f),T(an.$$.fragment,f),T(nt.$$.fragment,f),T(Tn.$$.fragment,f),T(Te.$$.fragment,f),T(Ve.$$.fragment,f),T(Mn.$$.fragment,f),T(ot.$$.fragment,f),T(st.$$.fragment,f),T(S.$$.fragment,f),T(We.$$.fragment,f),T(wt.$$.fragment,f),T(at.$$.fragment,f),T(Zt.$$.fragment,f),T(Lt.$$.fragment,f),T(Je.$$.fragment,f),T(mt.$$.fragment,f),T($t.$$.fragment,f),T(Ne.$$.fragment,f),T(Bt.$$.fragment,f),T(Ae.$$.fragment,f),T(Ot.$$.fragment,f),T(H.$$.fragment,f),T(se.$$.fragment,f),T($e.$$.fragment,f),T(xt.$$.fragment,f),T(Zn.$$.fragment,f),Jo=!0)},o(f){y(e.$$.fragment,f),y(o.$$.fragment,f),y(h.$$.fragment,f),y(we.$$.fragment,f),y(He.$$.fragment,f),y(jt.$$.fragment,f),y(X.$$.fragment,f),y(Ct.$$.fragment,f),y(Xt.$$.fragment,f),y(en.$$.fragment,f),y(lt.$$.fragment,f),y(Q.$$.fragment,f),y(bt.$$.fragment,f),y(Tt.$$.fragment,f),y(Gn.$$.fragment,f),y(Pn.$$.fragment,f),y(he.$$.fragment,f),y(P.$$.fragment,f),y(gn.$$.fragment,f),y(Ge.$$.fragment,f),y(an.$$.fragment,f),y(nt.$$.fragment,f),y(Tn.$$.fragment,f),y(Te.$$.fragment,f),y(Ve.$$.fragment,f),y(Mn.$$.fragment,f),y(ot.$$.fragment,f),y(st.$$.fragment,f),y(S.$$.fragment,f),y(We.$$.fragment,f),y(wt.$$.fragment,f),y(at.$$.fragment,f),y(Zt.$$.fragment,f),y(Lt.$$.fragment,f),y(Je.$$.fragment,f),y(mt.$$.fragment,f),y($t.$$.fragment,f),y(Ne.$$.fragment,f),y(Bt.$$.fragment,f),y(Ae.$$.fragment,f),y(Ot.$$.fragment,f),y(H.$$.fragment,f),y(se.$$.fragment,f),y($e.$$.fragment,f),y(xt.$$.fragment,f),y(Zn.$$.fragment,f),Jo=!1},d(f){f&&(l(m),l(n),l(Jn),l(Vt),l(E),l(Oe),l(St),l(je),l(Ut),l(sn),l(te),l(dt),l(mo),l(V),l(go),l(rt),l(ue),l(Wn),l(Ee),l(K)),M(e,f),M(o),M(h),M(we),M(He),M(jt),M(X,f),M(Ct),M(Xt),M(en),M(lt),M(Q),M(bt,f),M(Tt),M(Gn),M(Pn),M(he),M(P),M(gn),M(Ge,f),M(an),M(nt),M(Tn),M(Te),M(Ve),M(Mn),M(ot,f),M(st),M(S),M(We),M(wt),M(at),M(Zt,f),M(Lt),M(Je),M(mt),M($t),M(Ne),M(Bt),M(Ae,f),M(Ot),M(H),M(se),M($e),M(xt),M(Zn)}}}function Ws(x){let e,m;return e=new qo({props:{$$slots:{default:[qs]},$$scope:{ctx:x}}}),{c(){g(e.$$.fragment)},l(n){_(e.$$.fragment,n)},m(n,o){b(e,n,o),m=!0},p(n,o){const k={};o&2&&(k.$$scope={dirty:o,ctx:n}),e.$set(k)},i(n){m||(T(e.$$.fragment,n),m=!0)},o(n){y(e.$$.fragment,n),m=!1},d(n){M(e,n)}}}function Zs(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Ls(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0TW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhBbGJlcnRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Ns(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Hs(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yUHJlVHJhaW5pbmclMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhBbGJlcnRGb3JQcmVUcmFpbmluZy5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMucHJlZGljdGlvbl9sb2dpdHMlMEFzZXFfcmVsYXRpb25zaGlwX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMuc29wX2xvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Bs(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Gs(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yTWFza2VkTE0lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiUyQyUyMHJldmlzaW9uJTNEJTIycmVmcyUyRnByJTJGMTElMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4QWxiZXJ0Rm9yTWFza2VkTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyJTJDJTIwcmV2aXNpb24lM0QlMjJyZWZzJTJGcHIlMkYxMSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjAlNUJNQVNLJTVELiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>, revision=<span class="hljs-string">&quot;refs/pr/11&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>, revision=<span class="hljs-string">&quot;refs/pr/11&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Ps(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Vs(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheEFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Rs(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Xs(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yTXVsdGlwbGVDaG9pY2UlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhBbGJlcnRGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglNUJwcm9tcHQlMkMlMjBwcm9tcHQlNUQlMkMlMjAlNUJjaG9pY2UwJTJDJTIwY2hvaWNlMSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqJTdCayUzQSUyMHYlNUJOb25lJTJDJTIwJTNBJTVEJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QpJTBBJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Qs(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Ss(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheEFsYmVydEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Es(x){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=m},l(n){e=c(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,o){p(n,e,o)},p:q,d(n){n&&l(e)}}}function Ys(x){let e,m="Example:",n,o,k;return o=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yUXVlc3Rpb25BbnN3ZXJpbmclMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhBbGJlcnRGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQXN0YXJ0X3Njb3JlcyUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzJTBBZW5kX3Njb3JlcyUyMCUzRCUyMG91dHB1dHMuZW5kX2xvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=m,n=a(),g(o.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),n=r(t),_(o.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),b(o,t,w),k=!0},p:q,i(t){k||(T(o.$$.fragment,t),k=!0)},o(t){y(o.$$.fragment,t),k=!1},d(t){t&&(l(e),l(n)),M(o,t)}}}function Ds(x){let e,m,n,o,k,t,w="The bare Albert Model transformer outputting raw hidden-states without any specific head on top.",ee,I,A=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,D,U,z=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,O,h,C="Finally, this model supports inherent JAX features such as:",Ye,we,ko='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',un,ce,Cn,He,ft,jt="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Jn,X,Vt,E,Ct,hn,gt,pe,fn,Jt,Rt,Hn=`Albert Model with two heads on top as done during the pretraining: a <code>masked language modeling</code> head and a
<code>sentence order prediction (classification)</code> head.`,Bn,Ie,At=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Xt,De,Qt=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,en,qe,no="Finally, this model supports inherent JAX features such as:",tn,_t,lt='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',nn,Q,Oe,bt,St,je="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Tt,zt,An,yt,on,Ke,uo,G,_e,po,et,Gn="Albert Model with a <code>language modeling</code> head on top.",oo,Y,Pn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Et,tt,Vn=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Rn,he,so="Finally, this model supports inherent JAX features such as:",P,Be,gn='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Ut,Ge,sn,te,an,ho="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Pe,_n,bn,ne,oe,Mt,It,me,zn,nt,Yt,ve=`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,Tn,be,qt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Un,Wt,Te=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,yn,Ve,ao="Finally, this model supports inherent JAX features such as:",Mn,dt,ot='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',mo,V,st,fo,ye,Re="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",kn,Xe,ro,wn,ct,kt,vn,S,rn,fe,We,Ze=`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,Qe,In,Le=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,wt,qn,at=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,go,Zt,rt="Finally, this model supports inherent JAX features such as:",ue,Lt,Se='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Dt,vt,it,io,Xn,Ce="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Nt,pt,$n,Je,Qn,N,mt,ae,ut,_o,Ht,$t=`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,ln,Ne,Sn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Bt,Wn,Ae=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Ee,K,Ot="Finally, this model supports inherent JAX features such as:",En,dn,xn='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',cn,le,Kt,v,i,F="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",de,H,ge,B,se,ze,re,R,ie,$e,xe,xt=`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Co,Zn,Jo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,f,j,bo=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Fn,Ln,Nn="Finally, this model supports inherent JAX features such as:",Yn,Gt,lo='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',jn,ht,Ft,Dn,Pt,co="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",zo,wo,Uo,vo,Ao;return e=new Fe({props:{title:"FlaxAlbertModel",local:"transformers.FlaxAlbertModel",headingTag:"h2"}}),o=new L({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L673"}}),Cn=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) — Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),X=new Ue({props:{$$slots:{default:[Zs]},$$scope:{ctx:x}}}),E=new Me({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[Ls]},$$scope:{ctx:x}}}),hn=new Fe({props:{title:"FlaxAlbertForPreTraining",local:"transformers.FlaxAlbertForPreTraining",headingTag:"h2"}}),fn=new L({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L738"}}),Oe=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) — Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zt=new Ue({props:{$$slots:{default:[Ns]},$$scope:{ctx:x}}}),yt=new Me({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[Hs]},$$scope:{ctx:x}}}),Ke=new Fe({props:{title:"FlaxAlbertForMaskedLM",local:"transformers.FlaxAlbertForMaskedLM",headingTag:"h2"}}),_e=new L({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L827"}}),sn=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new Ue({props:{$$slots:{default:[Bs]},$$scope:{ctx:x}}}),ne=new Me({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[Gs]},$$scope:{ctx:x}}}),Mt=new Fe({props:{title:"FlaxAlbertForSequenceClassification",local:"transformers.FlaxAlbertForSequenceClassification",headingTag:"h2"}}),zn=new L({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L891"}}),st=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xe=new Ue({props:{$$slots:{default:[Ps]},$$scope:{ctx:x}}}),wn=new Me({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[Vs]},$$scope:{ctx:x}}}),kt=new Fe({props:{title:"FlaxAlbertForMultipleChoice",local:"transformers.FlaxAlbertForMultipleChoice",headingTag:"h2"}}),rn=new L({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L964"}}),it=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) — <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pt=new Ue({props:{$$slots:{default:[Rs]},$$scope:{ctx:x}}}),Je=new Me({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[Xs]},$$scope:{ctx:x}}}),N=new Fe({props:{title:"FlaxAlbertForTokenClassification",local:"transformers.FlaxAlbertForTokenClassification",headingTag:"h2"}}),ut=new L({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L1037"}}),Kt=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) — Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),H=new Ue({props:{$$slots:{default:[Qs]},$$scope:{ctx:x}}}),B=new Me({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[Ss]},$$scope:{ctx:x}}}),ze=new Fe({props:{title:"FlaxAlbertForQuestionAnswering",local:"transformers.FlaxAlbertForQuestionAnswering",headingTag:"h2"}}),ie=new L({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L1105"}}),Ft=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) — Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) — Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new Ue({props:{$$slots:{default:[Es]},$$scope:{ctx:x}}}),vo=new Me({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[Ys]},$$scope:{ctx:x}}}),{c(){g(e.$$.fragment),m=a(),n=d("div"),g(o.$$.fragment),k=a(),t=d("p"),t.textContent=w,ee=a(),I=d("p"),I.innerHTML=A,D=a(),U=d("p"),U.innerHTML=z,O=a(),h=d("p"),h.textContent=C,Ye=a(),we=d("ul"),we.innerHTML=ko,un=a(),ce=d("div"),g(Cn.$$.fragment),He=a(),ft=d("p"),ft.innerHTML=jt,Jn=a(),g(X.$$.fragment),Vt=a(),g(E.$$.fragment),Ct=a(),g(hn.$$.fragment),gt=a(),pe=d("div"),g(fn.$$.fragment),Jt=a(),Rt=d("p"),Rt.innerHTML=Hn,Bn=a(),Ie=d("p"),Ie.innerHTML=At,Xt=a(),De=d("p"),De.innerHTML=Qt,en=a(),qe=d("p"),qe.textContent=no,tn=a(),_t=d("ul"),_t.innerHTML=lt,nn=a(),Q=d("div"),g(Oe.$$.fragment),bt=a(),St=d("p"),St.innerHTML=je,Tt=a(),g(zt.$$.fragment),An=a(),g(yt.$$.fragment),on=a(),g(Ke.$$.fragment),uo=a(),G=d("div"),g(_e.$$.fragment),po=a(),et=d("p"),et.innerHTML=Gn,oo=a(),Y=d("p"),Y.innerHTML=Pn,Et=a(),tt=d("p"),tt.innerHTML=Vn,Rn=a(),he=d("p"),he.textContent=so,P=a(),Be=d("ul"),Be.innerHTML=gn,Ut=a(),Ge=d("div"),g(sn.$$.fragment),te=a(),an=d("p"),an.innerHTML=ho,Pe=a(),g(_n.$$.fragment),bn=a(),g(ne.$$.fragment),oe=a(),g(Mt.$$.fragment),It=a(),me=d("div"),g(zn.$$.fragment),nt=a(),Yt=d("p"),Yt.textContent=ve,Tn=a(),be=d("p"),be.innerHTML=qt,Un=a(),Wt=d("p"),Wt.innerHTML=Te,yn=a(),Ve=d("p"),Ve.textContent=ao,Mn=a(),dt=d("ul"),dt.innerHTML=ot,mo=a(),V=d("div"),g(st.$$.fragment),fo=a(),ye=d("p"),ye.innerHTML=Re,kn=a(),g(Xe.$$.fragment),ro=a(),g(wn.$$.fragment),ct=a(),g(kt.$$.fragment),vn=a(),S=d("div"),g(rn.$$.fragment),fe=a(),We=d("p"),We.textContent=Ze,Qe=a(),In=d("p"),In.innerHTML=Le,wt=a(),qn=d("p"),qn.innerHTML=at,go=a(),Zt=d("p"),Zt.textContent=rt,ue=a(),Lt=d("ul"),Lt.innerHTML=Se,Dt=a(),vt=d("div"),g(it.$$.fragment),io=a(),Xn=d("p"),Xn.innerHTML=Ce,Nt=a(),g(pt.$$.fragment),$n=a(),g(Je.$$.fragment),Qn=a(),g(N.$$.fragment),mt=a(),ae=d("div"),g(ut.$$.fragment),_o=a(),Ht=d("p"),Ht.textContent=$t,ln=a(),Ne=d("p"),Ne.innerHTML=Sn,Bt=a(),Wn=d("p"),Wn.innerHTML=Ae,Ee=a(),K=d("p"),K.textContent=Ot,En=a(),dn=d("ul"),dn.innerHTML=xn,cn=a(),le=d("div"),g(Kt.$$.fragment),v=a(),i=d("p"),i.innerHTML=F,de=a(),g(H.$$.fragment),ge=a(),g(B.$$.fragment),se=a(),g(ze.$$.fragment),re=a(),R=d("div"),g(ie.$$.fragment),$e=a(),xe=d("p"),xe.innerHTML=xt,Co=a(),Zn=d("p"),Zn.innerHTML=Jo,f=a(),j=d("p"),j.innerHTML=bo,Fn=a(),Ln=d("p"),Ln.textContent=Nn,Yn=a(),Gt=d("ul"),Gt.innerHTML=lo,jn=a(),ht=d("div"),g(Ft.$$.fragment),Dn=a(),Pt=d("p"),Pt.innerHTML=co,zo=a(),g(wo.$$.fragment),Uo=a(),g(vo.$$.fragment),this.h()},l($){_(e.$$.fragment,$),m=r($),n=c($,"DIV",{class:!0});var J=Z(n);_(o.$$.fragment,J),k=r(J),t=c(J,"P",{"data-svelte-h":!0}),u(t)!=="svelte-psfqdt"&&(t.textContent=w),ee=r(J),I=c(J,"P",{"data-svelte-h":!0}),u(I)!=="svelte-3daxed"&&(I.innerHTML=A),D=r(J),U=c(J,"P",{"data-svelte-h":!0}),u(U)!=="svelte-10nfsf3"&&(U.innerHTML=z),O=r(J),h=c(J,"P",{"data-svelte-h":!0}),u(h)!=="svelte-1pplc4a"&&(h.textContent=C),Ye=r(J),we=c(J,"UL",{"data-svelte-h":!0}),u(we)!=="svelte-1w7z84m"&&(we.innerHTML=ko),un=r(J),ce=c(J,"DIV",{class:!0});var To=Z(ce);_(Cn.$$.fragment,To),He=r(To),ft=c(To,"P",{"data-svelte-h":!0}),u(ft)!=="svelte-hsqakh"&&(ft.innerHTML=jt),Jn=r(To),_(X.$$.fragment,To),Vt=r(To),_(E.$$.fragment,To),To.forEach(l),J.forEach(l),Ct=r($),_(hn.$$.fragment,$),gt=r($),pe=c($,"DIV",{class:!0});var pn=Z(pe);_(fn.$$.fragment,pn),Jt=r(pn),Rt=c(pn,"P",{"data-svelte-h":!0}),u(Rt)!=="svelte-1qm9vpn"&&(Rt.innerHTML=Hn),Bn=r(pn),Ie=c(pn,"P",{"data-svelte-h":!0}),u(Ie)!=="svelte-3daxed"&&(Ie.innerHTML=At),Xt=r(pn),De=c(pn,"P",{"data-svelte-h":!0}),u(De)!=="svelte-10nfsf3"&&(De.innerHTML=Qt),en=r(pn),qe=c(pn,"P",{"data-svelte-h":!0}),u(qe)!=="svelte-1pplc4a"&&(qe.textContent=no),tn=r(pn),_t=c(pn,"UL",{"data-svelte-h":!0}),u(_t)!=="svelte-1w7z84m"&&(_t.innerHTML=lt),nn=r(pn),Q=c(pn,"DIV",{class:!0});var yo=Z(Q);_(Oe.$$.fragment,yo),bt=r(yo),St=c(yo,"P",{"data-svelte-h":!0}),u(St)!=="svelte-hsqakh"&&(St.innerHTML=je),Tt=r(yo),_(zt.$$.fragment,yo),An=r(yo),_(yt.$$.fragment,yo),yo.forEach(l),pn.forEach(l),on=r($),_(Ke.$$.fragment,$),uo=r($),G=c($,"DIV",{class:!0});var mn=Z(G);_(_e.$$.fragment,mn),po=r(mn),et=c(mn,"P",{"data-svelte-h":!0}),u(et)!=="svelte-q4kelk"&&(et.innerHTML=Gn),oo=r(mn),Y=c(mn,"P",{"data-svelte-h":!0}),u(Y)!=="svelte-3daxed"&&(Y.innerHTML=Pn),Et=r(mn),tt=c(mn,"P",{"data-svelte-h":!0}),u(tt)!=="svelte-10nfsf3"&&(tt.innerHTML=Vn),Rn=r(mn),he=c(mn,"P",{"data-svelte-h":!0}),u(he)!=="svelte-1pplc4a"&&(he.textContent=so),P=r(mn),Be=c(mn,"UL",{"data-svelte-h":!0}),u(Be)!=="svelte-1w7z84m"&&(Be.innerHTML=gn),Ut=r(mn),Ge=c(mn,"DIV",{class:!0});var Mo=Z(Ge);_(sn.$$.fragment,Mo),te=r(Mo),an=c(Mo,"P",{"data-svelte-h":!0}),u(an)!=="svelte-hsqakh"&&(an.innerHTML=ho),Pe=r(Mo),_(_n.$$.fragment,Mo),bn=r(Mo),_(ne.$$.fragment,Mo),Mo.forEach(l),mn.forEach(l),oe=r($),_(Mt.$$.fragment,$),It=r($),me=c($,"DIV",{class:!0});var On=Z(me);_(zn.$$.fragment,On),nt=r(On),Yt=c(On,"P",{"data-svelte-h":!0}),u(Yt)!=="svelte-1wuvovs"&&(Yt.textContent=ve),Tn=r(On),be=c(On,"P",{"data-svelte-h":!0}),u(be)!=="svelte-3daxed"&&(be.innerHTML=qt),Un=r(On),Wt=c(On,"P",{"data-svelte-h":!0}),u(Wt)!=="svelte-10nfsf3"&&(Wt.innerHTML=Te),yn=r(On),Ve=c(On,"P",{"data-svelte-h":!0}),u(Ve)!=="svelte-1pplc4a"&&(Ve.textContent=ao),Mn=r(On),dt=c(On,"UL",{"data-svelte-h":!0}),u(dt)!=="svelte-1w7z84m"&&(dt.innerHTML=ot),mo=r(On),V=c(On,"DIV",{class:!0});var $o=Z(V);_(st.$$.fragment,$o),fo=r($o),ye=c($o,"P",{"data-svelte-h":!0}),u(ye)!=="svelte-hsqakh"&&(ye.innerHTML=Re),kn=r($o),_(Xe.$$.fragment,$o),ro=r($o),_(wn.$$.fragment,$o),$o.forEach(l),On.forEach(l),ct=r($),_(kt.$$.fragment,$),vn=r($),S=c($,"DIV",{class:!0});var Kn=Z(S);_(rn.$$.fragment,Kn),fe=r(Kn),We=c(Kn,"P",{"data-svelte-h":!0}),u(We)!=="svelte-axso2c"&&(We.textContent=Ze),Qe=r(Kn),In=c(Kn,"P",{"data-svelte-h":!0}),u(In)!=="svelte-3daxed"&&(In.innerHTML=Le),wt=r(Kn),qn=c(Kn,"P",{"data-svelte-h":!0}),u(qn)!=="svelte-10nfsf3"&&(qn.innerHTML=at),go=r(Kn),Zt=c(Kn,"P",{"data-svelte-h":!0}),u(Zt)!=="svelte-1pplc4a"&&(Zt.textContent=rt),ue=r(Kn),Lt=c(Kn,"UL",{"data-svelte-h":!0}),u(Lt)!=="svelte-1w7z84m"&&(Lt.innerHTML=Se),Dt=r(Kn),vt=c(Kn,"DIV",{class:!0});var xo=Z(vt);_(it.$$.fragment,xo),io=r(xo),Xn=c(xo,"P",{"data-svelte-h":!0}),u(Xn)!=="svelte-hsqakh"&&(Xn.innerHTML=Ce),Nt=r(xo),_(pt.$$.fragment,xo),$n=r(xo),_(Je.$$.fragment,xo),xo.forEach(l),Kn.forEach(l),Qn=r($),_(N.$$.fragment,$),mt=r($),ae=c($,"DIV",{class:!0});var eo=Z(ae);_(ut.$$.fragment,eo),_o=r(eo),Ht=c(eo,"P",{"data-svelte-h":!0}),u(Ht)!=="svelte-olqnpn"&&(Ht.textContent=$t),ln=r(eo),Ne=c(eo,"P",{"data-svelte-h":!0}),u(Ne)!=="svelte-3daxed"&&(Ne.innerHTML=Sn),Bt=r(eo),Wn=c(eo,"P",{"data-svelte-h":!0}),u(Wn)!=="svelte-10nfsf3"&&(Wn.innerHTML=Ae),Ee=r(eo),K=c(eo,"P",{"data-svelte-h":!0}),u(K)!=="svelte-1pplc4a"&&(K.textContent=Ot),En=r(eo),dn=c(eo,"UL",{"data-svelte-h":!0}),u(dn)!=="svelte-1w7z84m"&&(dn.innerHTML=xn),cn=r(eo),le=c(eo,"DIV",{class:!0});var Fo=Z(le);_(Kt.$$.fragment,Fo),v=r(Fo),i=c(Fo,"P",{"data-svelte-h":!0}),u(i)!=="svelte-hsqakh"&&(i.innerHTML=F),de=r(Fo),_(H.$$.fragment,Fo),ge=r(Fo),_(B.$$.fragment,Fo),Fo.forEach(l),eo.forEach(l),se=r($),_(ze.$$.fragment,$),re=r($),R=c($,"DIV",{class:!0});var to=Z(R);_(ie.$$.fragment,to),$e=r(to),xe=c(to,"P",{"data-svelte-h":!0}),u(xe)!=="svelte-v56eal"&&(xe.innerHTML=xt),Co=r(to),Zn=c(to,"P",{"data-svelte-h":!0}),u(Zn)!=="svelte-3daxed"&&(Zn.innerHTML=Jo),f=r(to),j=c(to,"P",{"data-svelte-h":!0}),u(j)!=="svelte-10nfsf3"&&(j.innerHTML=bo),Fn=r(to),Ln=c(to,"P",{"data-svelte-h":!0}),u(Ln)!=="svelte-1pplc4a"&&(Ln.textContent=Nn),Yn=r(to),Gt=c(to,"UL",{"data-svelte-h":!0}),u(Gt)!=="svelte-1w7z84m"&&(Gt.innerHTML=lo),jn=r(to),ht=c(to,"DIV",{class:!0});var jo=Z(ht);_(Ft.$$.fragment,jo),Dn=r(jo),Pt=c(jo,"P",{"data-svelte-h":!0}),u(Pt)!=="svelte-hsqakh"&&(Pt.innerHTML=co),zo=r(jo),_(wo.$$.fragment,jo),Uo=r(jo),_(vo.$$.fragment,jo),jo.forEach(l),to.forEach(l),this.h()},h(){W(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m($,J){b(e,$,J),p($,m,J),p($,n,J),b(o,n,null),s(n,k),s(n,t),s(n,ee),s(n,I),s(n,D),s(n,U),s(n,O),s(n,h),s(n,Ye),s(n,we),s(n,un),s(n,ce),b(Cn,ce,null),s(ce,He),s(ce,ft),s(ce,Jn),b(X,ce,null),s(ce,Vt),b(E,ce,null),p($,Ct,J),b(hn,$,J),p($,gt,J),p($,pe,J),b(fn,pe,null),s(pe,Jt),s(pe,Rt),s(pe,Bn),s(pe,Ie),s(pe,Xt),s(pe,De),s(pe,en),s(pe,qe),s(pe,tn),s(pe,_t),s(pe,nn),s(pe,Q),b(Oe,Q,null),s(Q,bt),s(Q,St),s(Q,Tt),b(zt,Q,null),s(Q,An),b(yt,Q,null),p($,on,J),b(Ke,$,J),p($,uo,J),p($,G,J),b(_e,G,null),s(G,po),s(G,et),s(G,oo),s(G,Y),s(G,Et),s(G,tt),s(G,Rn),s(G,he),s(G,P),s(G,Be),s(G,Ut),s(G,Ge),b(sn,Ge,null),s(Ge,te),s(Ge,an),s(Ge,Pe),b(_n,Ge,null),s(Ge,bn),b(ne,Ge,null),p($,oe,J),b(Mt,$,J),p($,It,J),p($,me,J),b(zn,me,null),s(me,nt),s(me,Yt),s(me,Tn),s(me,be),s(me,Un),s(me,Wt),s(me,yn),s(me,Ve),s(me,Mn),s(me,dt),s(me,mo),s(me,V),b(st,V,null),s(V,fo),s(V,ye),s(V,kn),b(Xe,V,null),s(V,ro),b(wn,V,null),p($,ct,J),b(kt,$,J),p($,vn,J),p($,S,J),b(rn,S,null),s(S,fe),s(S,We),s(S,Qe),s(S,In),s(S,wt),s(S,qn),s(S,go),s(S,Zt),s(S,ue),s(S,Lt),s(S,Dt),s(S,vt),b(it,vt,null),s(vt,io),s(vt,Xn),s(vt,Nt),b(pt,vt,null),s(vt,$n),b(Je,vt,null),p($,Qn,J),b(N,$,J),p($,mt,J),p($,ae,J),b(ut,ae,null),s(ae,_o),s(ae,Ht),s(ae,ln),s(ae,Ne),s(ae,Bt),s(ae,Wn),s(ae,Ee),s(ae,K),s(ae,En),s(ae,dn),s(ae,cn),s(ae,le),b(Kt,le,null),s(le,v),s(le,i),s(le,de),b(H,le,null),s(le,ge),b(B,le,null),p($,se,J),b(ze,$,J),p($,re,J),p($,R,J),b(ie,R,null),s(R,$e),s(R,xe),s(R,Co),s(R,Zn),s(R,f),s(R,j),s(R,Fn),s(R,Ln),s(R,Yn),s(R,Gt),s(R,jn),s(R,ht),b(Ft,ht,null),s(ht,Dn),s(ht,Pt),s(ht,zo),b(wo,ht,null),s(ht,Uo),b(vo,ht,null),Ao=!0},p($,J){const To={};J&2&&(To.$$scope={dirty:J,ctx:$}),X.$set(To);const pn={};J&2&&(pn.$$scope={dirty:J,ctx:$}),E.$set(pn);const yo={};J&2&&(yo.$$scope={dirty:J,ctx:$}),zt.$set(yo);const mn={};J&2&&(mn.$$scope={dirty:J,ctx:$}),yt.$set(mn);const Mo={};J&2&&(Mo.$$scope={dirty:J,ctx:$}),_n.$set(Mo);const On={};J&2&&(On.$$scope={dirty:J,ctx:$}),ne.$set(On);const $o={};J&2&&($o.$$scope={dirty:J,ctx:$}),Xe.$set($o);const Kn={};J&2&&(Kn.$$scope={dirty:J,ctx:$}),wn.$set(Kn);const xo={};J&2&&(xo.$$scope={dirty:J,ctx:$}),pt.$set(xo);const eo={};J&2&&(eo.$$scope={dirty:J,ctx:$}),Je.$set(eo);const Fo={};J&2&&(Fo.$$scope={dirty:J,ctx:$}),H.$set(Fo);const to={};J&2&&(to.$$scope={dirty:J,ctx:$}),B.$set(to);const jo={};J&2&&(jo.$$scope={dirty:J,ctx:$}),wo.$set(jo);const Wo={};J&2&&(Wo.$$scope={dirty:J,ctx:$}),vo.$set(Wo)},i($){Ao||(T(e.$$.fragment,$),T(o.$$.fragment,$),T(Cn.$$.fragment,$),T(X.$$.fragment,$),T(E.$$.fragment,$),T(hn.$$.fragment,$),T(fn.$$.fragment,$),T(Oe.$$.fragment,$),T(zt.$$.fragment,$),T(yt.$$.fragment,$),T(Ke.$$.fragment,$),T(_e.$$.fragment,$),T(sn.$$.fragment,$),T(_n.$$.fragment,$),T(ne.$$.fragment,$),T(Mt.$$.fragment,$),T(zn.$$.fragment,$),T(st.$$.fragment,$),T(Xe.$$.fragment,$),T(wn.$$.fragment,$),T(kt.$$.fragment,$),T(rn.$$.fragment,$),T(it.$$.fragment,$),T(pt.$$.fragment,$),T(Je.$$.fragment,$),T(N.$$.fragment,$),T(ut.$$.fragment,$),T(Kt.$$.fragment,$),T(H.$$.fragment,$),T(B.$$.fragment,$),T(ze.$$.fragment,$),T(ie.$$.fragment,$),T(Ft.$$.fragment,$),T(wo.$$.fragment,$),T(vo.$$.fragment,$),Ao=!0)},o($){y(e.$$.fragment,$),y(o.$$.fragment,$),y(Cn.$$.fragment,$),y(X.$$.fragment,$),y(E.$$.fragment,$),y(hn.$$.fragment,$),y(fn.$$.fragment,$),y(Oe.$$.fragment,$),y(zt.$$.fragment,$),y(yt.$$.fragment,$),y(Ke.$$.fragment,$),y(_e.$$.fragment,$),y(sn.$$.fragment,$),y(_n.$$.fragment,$),y(ne.$$.fragment,$),y(Mt.$$.fragment,$),y(zn.$$.fragment,$),y(st.$$.fragment,$),y(Xe.$$.fragment,$),y(wn.$$.fragment,$),y(kt.$$.fragment,$),y(rn.$$.fragment,$),y(it.$$.fragment,$),y(pt.$$.fragment,$),y(Je.$$.fragment,$),y(N.$$.fragment,$),y(ut.$$.fragment,$),y(Kt.$$.fragment,$),y(H.$$.fragment,$),y(B.$$.fragment,$),y(ze.$$.fragment,$),y(ie.$$.fragment,$),y(Ft.$$.fragment,$),y(wo.$$.fragment,$),y(vo.$$.fragment,$),Ao=!1},d($){$&&(l(m),l(n),l(Ct),l(gt),l(pe),l(on),l(uo),l(G),l(oe),l(It),l(me),l(ct),l(vn),l(S),l(Qn),l(mt),l(ae),l(se),l(re),l(R)),M(e,$),M(o),M(Cn),M(X),M(E),M(hn,$),M(fn),M(Oe),M(zt),M(yt),M(Ke,$),M(_e),M(sn),M(_n),M(ne),M(Mt,$),M(zn),M(st),M(Xe),M(wn),M(kt,$),M(rn),M(it),M(pt),M(Je),M(N,$),M(ut),M(Kt),M(H),M(B),M(ze,$),M(ie),M(Ft),M(wo),M(vo)}}}function Os(x){let e,m;return e=new qo({props:{$$slots:{default:[Ds]},$$scope:{ctx:x}}}),{c(){g(e.$$.fragment)},l(n){_(e.$$.fragment,n)},m(n,o){b(e,n,o),m=!0},p(n,o){const k={};o&2&&(k.$$scope={dirty:o,ctx:n}),e.$set(k)},i(n){m||(T(e.$$.fragment,n),m=!0)},o(n){y(e.$$.fragment,n),m=!1},d(n){M(e,n)}}}function Ks(x){let e,m,n,o,k,t,w,ee='<a href="https://huggingface.co/models?filter=albert"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-albert-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/albert-base-v2"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a>',I,A,D,U,z=`The ALBERT model was proposed in <a href="https://arxiv.org/abs/1909.11942" rel="nofollow">ALBERT: A Lite BERT for Self-supervised Learning of Language Representations</a> by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`,O,h,C="<li>Splitting the embedding matrix into two smaller matrices.</li> <li>Using repeating layers split among groups.</li>",Ye,we,ko="The abstract from the paper is the following:",un,ce,Cn=`<em>Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.</em>`,He,ft,jt=`This model was contributed by <a href="https://huggingface.co/lysandre" rel="nofollow">lysandre</a>. This model jax version was contributed by
<a href="https://huggingface.co/kamalkraj" rel="nofollow">kamalkraj</a>. The original code can be found <a href="https://github.com/google-research/ALBERT" rel="nofollow">here</a>.`,Jn,X,Vt,E,Ct=`<li>ALBERT is a model with absolute position embeddings so it’s usually advised to pad the inputs on the right rather
than the left.</li> <li>ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.</li> <li>Embedding size E is different from hidden size H justified because the embeddings are context independent (one embedding vector represents one token), whereas hidden states are context dependent (one hidden state represents a sequence of tokens) so it’s more logical to have H &gt;&gt; E. Also, the embedding matrix is large since it’s V x E (V being the vocab size). If E &lt; H, it has less parameters.</li> <li>Layers are split in groups that share parameters (to save memory).
Next sentence prediction is replaced by a sentence ordering prediction: in the inputs, we have two sentences A and B (that are consecutive) and we either feed A followed by B or B followed by A. The model must predict if they have been swapped or not.</li>`,hn,gt,pe=`This model was contributed by <a href="https://huggingface.co/lysandre" rel="nofollow">lysandre</a>. This model jax version was contributed by
<a href="https://huggingface.co/kamalkraj" rel="nofollow">kamalkraj</a>. The original code can be found <a href="https://github.com/google-research/ALBERT" rel="nofollow">here</a>.`,fn,Jt,Rt,Hn,Bn="The resources provided in the following sections consist of a list of official Hugging Face and community (indicated by 🌎) resources to help you get started with AlBERT. If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",Ie,At,Xt,De,Qt='<li><a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForSequenceClassification">AlbertForSequenceClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification" rel="nofollow">example script</a>.</li>',en,qe,no='<li><p><a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForSequenceClassification">TFAlbertForSequenceClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/text-classification" rel="nofollow">example script</a>.</p></li> <li><p><a href="/docs/transformers/main/en/model_doc/albert#transformers.FlaxAlbertForSequenceClassification">FlaxAlbertForSequenceClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/text-classification" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification_flax.ipynb" rel="nofollow">notebook</a>.</p></li> <li><p>Check the <a href="../tasks/sequence_classification">Text classification task guide</a> on how to use the model.</p></li>',tn,_t,lt,nn,Q='<li><a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForTokenClassification">AlbertForTokenClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/token-classification" rel="nofollow">example script</a>.</li>',Oe,bt,St='<li><a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForTokenClassification">TFAlbertForTokenClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/token-classification" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification-tf.ipynb" rel="nofollow">notebook</a>.</li>',je,Tt,zt='<li><a href="/docs/transformers/main/en/model_doc/albert#transformers.FlaxAlbertForTokenClassification">FlaxAlbertForTokenClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/token-classification" rel="nofollow">example script</a>.</li> <li><a href="https://huggingface.co/course/chapter7/2?fw=pt" rel="nofollow">Token classification</a> chapter of the 🤗 Hugging Face Course.</li> <li>Check the <a href="../tasks/token_classification">Token classification task guide</a> on how to use the model.</li>',An,yt,on,Ke,uo='<li><a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForMaskedLM">AlbertForMaskedLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#robertabertdistilbert-and-masked-language-modeling" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForMaskedLM">TFAlbertForMaskedLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_mlmpy" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/albert#transformers.FlaxAlbertForMaskedLM">FlaxAlbertForMaskedLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#masked-language-modeling" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/masked_language_modeling_flax.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="https://huggingface.co/course/chapter7/3?fw=pt" rel="nofollow">Masked language modeling</a> chapter of the 🤗 Hugging Face Course.</li> <li>Check the <a href="../tasks/masked_language_modeling">Masked language modeling task guide</a> on how to use the model.</li>',G,_e,po,et,Gn='<li><a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForQuestionAnswering">AlbertForQuestionAnswering</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering">TFAlbertForQuestionAnswering</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/question-answering" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/albert#transformers.FlaxAlbertForQuestionAnswering">FlaxAlbertForQuestionAnswering</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/question-answering" rel="nofollow">example script</a>.</li> <li><a href="https://huggingface.co/course/chapter7/7?fw=pt" rel="nofollow">Question answering</a> chapter of the 🤗 Hugging Face Course.</li> <li>Check the <a href="../tasks/question_answering">Question answering task guide</a> on how to use the model.</li>',oo,Y,Pn="<strong>Multiple choice</strong>",Et,tt,Vn='<li><p><a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForMultipleChoice">AlbertForMultipleChoice</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/multiple-choice" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multiple_choice.ipynb" rel="nofollow">notebook</a>.</p></li> <li><p><a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForMultipleChoice">TFAlbertForMultipleChoice</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/multiple-choice" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multiple_choice-tf.ipynb" rel="nofollow">notebook</a>.</p></li> <li><p>Check the  <a href="../tasks/multiple_choice">Multiple choice task guide</a> on how to use the model.</p></li>',Rn,he,so,P,Be,gn,Ut,Ge=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or a <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
<a href="https://huggingface.co/albert/albert-xxlarge-v2" rel="nofollow">albert/albert-xxlarge-v2</a> architecture.`,sn,te,an=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,ho,Pe,_n,bn,ne,oe,Mt,It,me,zn='Construct an ALBERT tokenizer. Based on <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.',nt,Yt,ve=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Tn,be,qt,Un,Wt,Te=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`,yn,Ve,ao="<li>single sequence: <code>[CLS] X [SEP]</code></li> <li>pair of sequences: <code>[CLS] A [SEP] B [SEP]</code></li>",Mn,dt,ot,mo,V,st=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,fo,ye,Re,kn,Xe,ro="Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT",wn,ct,kt,vn,S="If <code>token_ids_1</code> is <code>None</code>, this method only returns the first portion of the mask (0s).",rn,fe,We,Ze,Qe,In,Le,wt,qn,at,go=`Construct a “fast” ALBERT tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on
<a href="https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models" rel="nofollow">Unigram</a>. This
tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`,Zt,rt,ue,Lt,Se,Dt=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`,vt,it,io="<li>single sequence: <code>[CLS] X [SEP]</code></li> <li>pair of sequences: <code>[CLS] A [SEP] B [SEP]</code></li>",Xn,Ce,Nt,pt,$n,Je="Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT",Qn,N,mt,ae,ut="if token_ids_1 is None, only returns the first portion of the mask (0s).",_o,Ht,$t,ln,Ne,Sn,Bt,Wn='Output type of <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertForPreTraining">AlbertForPreTraining</a>.',Ae,Ee,K,Ot,En,dn='Output type of <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForPreTraining">TFAlbertForPreTraining</a>.',xn,cn,le,Kt,v;return k=new Fe({props:{title:"ALBERT",local:"albert",headingTag:"h1"}}),A=new Fe({props:{title:"Overview",local:"overview",headingTag:"h2"}}),X=new Fe({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Jt=new Fe({props:{title:"Resources",local:"resources",headingTag:"h2"}}),At=new Io({props:{pipeline:"text-classification"}}),_t=new Io({props:{pipeline:"token-classification"}}),yt=new Io({props:{pipeline:"fill-mask"}}),_e=new Io({props:{pipeline:"question-answering"}}),he=new Fe({props:{title:"AlbertConfig",local:"transformers.AlbertConfig",headingTag:"h2"}}),Be=new L({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
Vocabulary size of the ALBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"vocab_size"},{anchor:"transformers.AlbertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimensionality of vocabulary embeddings.`,name:"embedding_size"},{anchor:"transformers.AlbertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.AlbertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.AlbertConfig.num_hidden_groups",description:`<strong>num_hidden_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of groups for the hidden layers, parameters in the same group are shared.`,name:"num_hidden_groups"},{anchor:"transformers.AlbertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.AlbertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.AlbertConfig.inner_group_num",description:`<strong>inner_group_num</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of inner repetition of attention and ffn.`,name:"inner_group_num"},{anchor:"transformers.AlbertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.AlbertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.AlbertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.AlbertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
(e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.AlbertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.AlbertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.AlbertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.AlbertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout_prob"},{anchor:"transformers.AlbertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.AlbertConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.AlbertConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Beginning of stream token id.`,name:"bos_token_id"},{anchor:"transformers.AlbertConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
End of stream token id.`,name:"eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/configuration_albert.py#L36"}}),Pe=new Me({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[Po]},$$scope:{ctx:x}}}),bn=new Fe({props:{title:"AlbertTokenizer",local:"transformers.AlbertTokenizer",headingTag:"h2"}}),Mt=new L({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.AlbertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.AlbertTokenizer.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.AlbertTokenizer.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.AlbertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.AlbertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.AlbertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.AlbertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.AlbertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.AlbertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.AlbertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.AlbertTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.AlbertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L59"}}),qt=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L273",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ot=new L({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L298",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Re=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L326",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ct=new Me({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Vo]},$$scope:{ctx:x}}}),We=new L({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L356"}}),Qe=new Fe({props:{title:"AlbertTokenizerFast",local:"transformers.AlbertTokenizerFast",headingTag:"h2"}}),wt=new L({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.AlbertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.AlbertTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.AlbertTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.AlbertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.AlbertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.AlbertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.AlbertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.AlbertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.AlbertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.AlbertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),ue=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L173",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Nt=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L198",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),N=new Me({props:{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Ro]},$$scope:{ctx:x}}}),Ht=new Fe({props:{title:"Albert specific outputs",local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",headingTag:"h2"}}),Ne=new L({props:{name:"class transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"sop_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L530"}}),K=new L({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": tf.Tensor = None"},{name:"prediction_logits",val:": tf.Tensor = None"},{name:"sop_logits",val:": tf.Tensor = None"},{name:"hidden_states",val:": Tuple[tf.Tensor] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor] | None = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L741"}}),cn=new Go({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Os],tensorflow:[Ws],pytorch:[ds]},$$scope:{ctx:x}}}),{c(){e=d("meta"),m=a(),n=d("p"),o=a(),g(k.$$.fragment),t=a(),w=d("div"),w.innerHTML=ee,I=a(),g(A.$$.fragment),D=a(),U=d("p"),U.innerHTML=z,O=a(),h=d("ul"),h.innerHTML=C,Ye=a(),we=d("p"),we.textContent=ko,un=a(),ce=d("p"),ce.innerHTML=Cn,He=a(),ft=d("p"),ft.innerHTML=jt,Jn=a(),g(X.$$.fragment),Vt=a(),E=d("ul"),E.innerHTML=Ct,hn=a(),gt=d("p"),gt.innerHTML=pe,fn=a(),g(Jt.$$.fragment),Rt=a(),Hn=d("p"),Hn.textContent=Bn,Ie=a(),g(At.$$.fragment),Xt=a(),De=d("ul"),De.innerHTML=Qt,en=a(),qe=d("ul"),qe.innerHTML=no,tn=a(),g(_t.$$.fragment),lt=a(),nn=d("ul"),nn.innerHTML=Q,Oe=a(),bt=d("ul"),bt.innerHTML=St,je=a(),Tt=d("ul"),Tt.innerHTML=zt,An=a(),g(yt.$$.fragment),on=a(),Ke=d("ul"),Ke.innerHTML=uo,G=a(),g(_e.$$.fragment),po=a(),et=d("ul"),et.innerHTML=Gn,oo=a(),Y=d("p"),Y.innerHTML=Pn,Et=a(),tt=d("ul"),tt.innerHTML=Vn,Rn=a(),g(he.$$.fragment),so=a(),P=d("div"),g(Be.$$.fragment),gn=a(),Ut=d("p"),Ut.innerHTML=Ge,sn=a(),te=d("p"),te.innerHTML=an,ho=a(),g(Pe.$$.fragment),_n=a(),g(bn.$$.fragment),ne=a(),oe=d("div"),g(Mt.$$.fragment),It=a(),me=d("p"),me.innerHTML=zn,nt=a(),Yt=d("p"),Yt.innerHTML=ve,Tn=a(),be=d("div"),g(qt.$$.fragment),Un=a(),Wt=d("p"),Wt.textContent=Te,yn=a(),Ve=d("ul"),Ve.innerHTML=ao,Mn=a(),dt=d("div"),g(ot.$$.fragment),mo=a(),V=d("p"),V.innerHTML=st,fo=a(),ye=d("div"),g(Re.$$.fragment),kn=a(),Xe=d("p"),Xe.textContent=ro,wn=a(),g(ct.$$.fragment),kt=a(),vn=d("p"),vn.innerHTML=S,rn=a(),fe=d("div"),g(We.$$.fragment),Ze=a(),g(Qe.$$.fragment),In=a(),Le=d("div"),g(wt.$$.fragment),qn=a(),at=d("p"),at.innerHTML=go,Zt=a(),rt=d("div"),g(ue.$$.fragment),Lt=a(),Se=d("p"),Se.textContent=Dt,vt=a(),it=d("ul"),it.innerHTML=io,Xn=a(),Ce=d("div"),g(Nt.$$.fragment),pt=a(),$n=d("p"),$n.textContent=Je,Qn=a(),g(N.$$.fragment),mt=a(),ae=d("p"),ae.textContent=ut,_o=a(),g(Ht.$$.fragment),$t=a(),ln=d("div"),g(Ne.$$.fragment),Sn=a(),Bt=d("p"),Bt.innerHTML=Wn,Ae=a(),Ee=d("div"),g(K.$$.fragment),Ot=a(),En=d("p"),En.innerHTML=dn,xn=a(),g(cn.$$.fragment),le=a(),Kt=d("p"),this.h()},l(i){const F=Bo("svelte-u9bgzb",document.head);e=c(F,"META",{name:!0,content:!0}),F.forEach(l),m=r(i),n=c(i,"P",{}),Z(n).forEach(l),o=r(i),_(k.$$.fragment,i),t=r(i),w=c(i,"DIV",{class:!0,"data-svelte-h":!0}),u(w)!=="svelte-h0ieyw"&&(w.innerHTML=ee),I=r(i),_(A.$$.fragment,i),D=r(i),U=c(i,"P",{"data-svelte-h":!0}),u(U)!=="svelte-13pbz2f"&&(U.innerHTML=z),O=r(i),h=c(i,"UL",{"data-svelte-h":!0}),u(h)!=="svelte-hp2fe8"&&(h.innerHTML=C),Ye=r(i),we=c(i,"P",{"data-svelte-h":!0}),u(we)!=="svelte-vfdo9a"&&(we.textContent=ko),un=r(i),ce=c(i,"P",{"data-svelte-h":!0}),u(ce)!=="svelte-e7vw4p"&&(ce.innerHTML=Cn),He=r(i),ft=c(i,"P",{"data-svelte-h":!0}),u(ft)!=="svelte-x8cmte"&&(ft.innerHTML=jt),Jn=r(i),_(X.$$.fragment,i),Vt=r(i),E=c(i,"UL",{"data-svelte-h":!0}),u(E)!=="svelte-kwvnzd"&&(E.innerHTML=Ct),hn=r(i),gt=c(i,"P",{"data-svelte-h":!0}),u(gt)!=="svelte-x8cmte"&&(gt.innerHTML=pe),fn=r(i),_(Jt.$$.fragment,i),Rt=r(i),Hn=c(i,"P",{"data-svelte-h":!0}),u(Hn)!=="svelte-asr93v"&&(Hn.textContent=Bn),Ie=r(i),_(At.$$.fragment,i),Xt=r(i),De=c(i,"UL",{"data-svelte-h":!0}),u(De)!=="svelte-141d8k2"&&(De.innerHTML=Qt),en=r(i),qe=c(i,"UL",{"data-svelte-h":!0}),u(qe)!=="svelte-13s9k6s"&&(qe.innerHTML=no),tn=r(i),_(_t.$$.fragment,i),lt=r(i),nn=c(i,"UL",{"data-svelte-h":!0}),u(nn)!=="svelte-40olfg"&&(nn.innerHTML=Q),Oe=r(i),bt=c(i,"UL",{"data-svelte-h":!0}),u(bt)!=="svelte-m0kkn4"&&(bt.innerHTML=St),je=r(i),Tt=c(i,"UL",{"data-svelte-h":!0}),u(Tt)!=="svelte-15v8iqa"&&(Tt.innerHTML=zt),An=r(i),_(yt.$$.fragment,i),on=r(i),Ke=c(i,"UL",{"data-svelte-h":!0}),u(Ke)!=="svelte-1lal7z0"&&(Ke.innerHTML=uo),G=r(i),_(_e.$$.fragment,i),po=r(i),et=c(i,"UL",{"data-svelte-h":!0}),u(et)!=="svelte-8k59f0"&&(et.innerHTML=Gn),oo=r(i),Y=c(i,"P",{"data-svelte-h":!0}),u(Y)!=="svelte-cplu6u"&&(Y.innerHTML=Pn),Et=r(i),tt=c(i,"UL",{"data-svelte-h":!0}),u(tt)!=="svelte-1jvh26g"&&(tt.innerHTML=Vn),Rn=r(i),_(he.$$.fragment,i),so=r(i),P=c(i,"DIV",{class:!0});var de=Z(P);_(Be.$$.fragment,de),gn=r(de),Ut=c(de,"P",{"data-svelte-h":!0}),u(Ut)!=="svelte-ldk5lc"&&(Ut.innerHTML=Ge),sn=r(de),te=c(de,"P",{"data-svelte-h":!0}),u(te)!=="svelte-o55m63"&&(te.innerHTML=an),ho=r(de),_(Pe.$$.fragment,de),de.forEach(l),_n=r(i),_(bn.$$.fragment,i),ne=r(i),oe=c(i,"DIV",{class:!0});var H=Z(oe);_(Mt.$$.fragment,H),It=r(H),me=c(H,"P",{"data-svelte-h":!0}),u(me)!=="svelte-15hj622"&&(me.innerHTML=zn),nt=r(H),Yt=c(H,"P",{"data-svelte-h":!0}),u(Yt)!=="svelte-1c3t5ty"&&(Yt.innerHTML=ve),Tn=r(H),be=c(H,"DIV",{class:!0});var ge=Z(be);_(qt.$$.fragment,ge),Un=r(ge),Wt=c(ge,"P",{"data-svelte-h":!0}),u(Wt)!=="svelte-1bnx1ll"&&(Wt.textContent=Te),yn=r(ge),Ve=c(ge,"UL",{"data-svelte-h":!0}),u(Ve)!=="svelte-xi6653"&&(Ve.innerHTML=ao),ge.forEach(l),Mn=r(H),dt=c(H,"DIV",{class:!0});var B=Z(dt);_(ot.$$.fragment,B),mo=r(B),V=c(B,"P",{"data-svelte-h":!0}),u(V)!=="svelte-1f4f5kp"&&(V.innerHTML=st),B.forEach(l),fo=r(H),ye=c(H,"DIV",{class:!0});var se=Z(ye);_(Re.$$.fragment,se),kn=r(se),Xe=c(se,"P",{"data-svelte-h":!0}),u(Xe)!=="svelte-1e96hgr"&&(Xe.textContent=ro),wn=r(se),_(ct.$$.fragment,se),kt=r(se),vn=c(se,"P",{"data-svelte-h":!0}),u(vn)!=="svelte-owoxgn"&&(vn.innerHTML=S),se.forEach(l),rn=r(H),fe=c(H,"DIV",{class:!0});var ze=Z(fe);_(We.$$.fragment,ze),ze.forEach(l),H.forEach(l),Ze=r(i),_(Qe.$$.fragment,i),In=r(i),Le=c(i,"DIV",{class:!0});var re=Z(Le);_(wt.$$.fragment,re),qn=r(re),at=c(re,"P",{"data-svelte-h":!0}),u(at)!=="svelte-fowozv"&&(at.innerHTML=go),Zt=r(re),rt=c(re,"DIV",{class:!0});var R=Z(rt);_(ue.$$.fragment,R),Lt=r(R),Se=c(R,"P",{"data-svelte-h":!0}),u(Se)!=="svelte-1bnx1ll"&&(Se.textContent=Dt),vt=r(R),it=c(R,"UL",{"data-svelte-h":!0}),u(it)!=="svelte-xi6653"&&(it.innerHTML=io),R.forEach(l),Xn=r(re),Ce=c(re,"DIV",{class:!0});var ie=Z(Ce);_(Nt.$$.fragment,ie),pt=r(ie),$n=c(ie,"P",{"data-svelte-h":!0}),u($n)!=="svelte-13bfd60"&&($n.textContent=Je),Qn=r(ie),_(N.$$.fragment,ie),mt=r(ie),ae=c(ie,"P",{"data-svelte-h":!0}),u(ae)!=="svelte-wtrslu"&&(ae.textContent=ut),ie.forEach(l),re.forEach(l),_o=r(i),_(Ht.$$.fragment,i),$t=r(i),ln=c(i,"DIV",{class:!0});var $e=Z(ln);_(Ne.$$.fragment,$e),Sn=r($e),Bt=c($e,"P",{"data-svelte-h":!0}),u(Bt)!=="svelte-1319r29"&&(Bt.innerHTML=Wn),$e.forEach(l),Ae=r(i),Ee=c(i,"DIV",{class:!0});var xe=Z(Ee);_(K.$$.fragment,xe),Ot=r(xe),En=c(xe,"P",{"data-svelte-h":!0}),u(En)!=="svelte-1alggol"&&(En.innerHTML=dn),xe.forEach(l),xn=r(i),_(cn.$$.fragment,i),le=r(i),Kt=c(i,"P",{}),Z(Kt).forEach(l),this.h()},h(){W(e,"name","hf:doc:metadata"),W(e,"content",ea),W(w,"class","flex flex-wrap space-x-1"),W(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,F){s(document.head,e),p(i,m,F),p(i,n,F),p(i,o,F),b(k,i,F),p(i,t,F),p(i,w,F),p(i,I,F),b(A,i,F),p(i,D,F),p(i,U,F),p(i,O,F),p(i,h,F),p(i,Ye,F),p(i,we,F),p(i,un,F),p(i,ce,F),p(i,He,F),p(i,ft,F),p(i,Jn,F),b(X,i,F),p(i,Vt,F),p(i,E,F),p(i,hn,F),p(i,gt,F),p(i,fn,F),b(Jt,i,F),p(i,Rt,F),p(i,Hn,F),p(i,Ie,F),b(At,i,F),p(i,Xt,F),p(i,De,F),p(i,en,F),p(i,qe,F),p(i,tn,F),b(_t,i,F),p(i,lt,F),p(i,nn,F),p(i,Oe,F),p(i,bt,F),p(i,je,F),p(i,Tt,F),p(i,An,F),b(yt,i,F),p(i,on,F),p(i,Ke,F),p(i,G,F),b(_e,i,F),p(i,po,F),p(i,et,F),p(i,oo,F),p(i,Y,F),p(i,Et,F),p(i,tt,F),p(i,Rn,F),b(he,i,F),p(i,so,F),p(i,P,F),b(Be,P,null),s(P,gn),s(P,Ut),s(P,sn),s(P,te),s(P,ho),b(Pe,P,null),p(i,_n,F),b(bn,i,F),p(i,ne,F),p(i,oe,F),b(Mt,oe,null),s(oe,It),s(oe,me),s(oe,nt),s(oe,Yt),s(oe,Tn),s(oe,be),b(qt,be,null),s(be,Un),s(be,Wt),s(be,yn),s(be,Ve),s(oe,Mn),s(oe,dt),b(ot,dt,null),s(dt,mo),s(dt,V),s(oe,fo),s(oe,ye),b(Re,ye,null),s(ye,kn),s(ye,Xe),s(ye,wn),b(ct,ye,null),s(ye,kt),s(ye,vn),s(oe,rn),s(oe,fe),b(We,fe,null),p(i,Ze,F),b(Qe,i,F),p(i,In,F),p(i,Le,F),b(wt,Le,null),s(Le,qn),s(Le,at),s(Le,Zt),s(Le,rt),b(ue,rt,null),s(rt,Lt),s(rt,Se),s(rt,vt),s(rt,it),s(Le,Xn),s(Le,Ce),b(Nt,Ce,null),s(Ce,pt),s(Ce,$n),s(Ce,Qn),b(N,Ce,null),s(Ce,mt),s(Ce,ae),p(i,_o,F),b(Ht,i,F),p(i,$t,F),p(i,ln,F),b(Ne,ln,null),s(ln,Sn),s(ln,Bt),p(i,Ae,F),p(i,Ee,F),b(K,Ee,null),s(Ee,Ot),s(Ee,En),p(i,xn,F),b(cn,i,F),p(i,le,F),p(i,Kt,F),v=!0},p(i,[F]){const de={};F&2&&(de.$$scope={dirty:F,ctx:i}),Pe.$set(de);const H={};F&2&&(H.$$scope={dirty:F,ctx:i}),ct.$set(H);const ge={};F&2&&(ge.$$scope={dirty:F,ctx:i}),N.$set(ge);const B={};F&2&&(B.$$scope={dirty:F,ctx:i}),cn.$set(B)},i(i){v||(T(k.$$.fragment,i),T(A.$$.fragment,i),T(X.$$.fragment,i),T(Jt.$$.fragment,i),T(At.$$.fragment,i),T(_t.$$.fragment,i),T(yt.$$.fragment,i),T(_e.$$.fragment,i),T(he.$$.fragment,i),T(Be.$$.fragment,i),T(Pe.$$.fragment,i),T(bn.$$.fragment,i),T(Mt.$$.fragment,i),T(qt.$$.fragment,i),T(ot.$$.fragment,i),T(Re.$$.fragment,i),T(ct.$$.fragment,i),T(We.$$.fragment,i),T(Qe.$$.fragment,i),T(wt.$$.fragment,i),T(ue.$$.fragment,i),T(Nt.$$.fragment,i),T(N.$$.fragment,i),T(Ht.$$.fragment,i),T(Ne.$$.fragment,i),T(K.$$.fragment,i),T(cn.$$.fragment,i),v=!0)},o(i){y(k.$$.fragment,i),y(A.$$.fragment,i),y(X.$$.fragment,i),y(Jt.$$.fragment,i),y(At.$$.fragment,i),y(_t.$$.fragment,i),y(yt.$$.fragment,i),y(_e.$$.fragment,i),y(he.$$.fragment,i),y(Be.$$.fragment,i),y(Pe.$$.fragment,i),y(bn.$$.fragment,i),y(Mt.$$.fragment,i),y(qt.$$.fragment,i),y(ot.$$.fragment,i),y(Re.$$.fragment,i),y(ct.$$.fragment,i),y(We.$$.fragment,i),y(Qe.$$.fragment,i),y(wt.$$.fragment,i),y(ue.$$.fragment,i),y(Nt.$$.fragment,i),y(N.$$.fragment,i),y(Ht.$$.fragment,i),y(Ne.$$.fragment,i),y(K.$$.fragment,i),y(cn.$$.fragment,i),v=!1},d(i){i&&(l(m),l(n),l(o),l(t),l(w),l(I),l(D),l(U),l(O),l(h),l(Ye),l(we),l(un),l(ce),l(He),l(ft),l(Jn),l(Vt),l(E),l(hn),l(gt),l(fn),l(Rt),l(Hn),l(Ie),l(Xt),l(De),l(en),l(qe),l(tn),l(lt),l(nn),l(Oe),l(bt),l(je),l(Tt),l(An),l(on),l(Ke),l(G),l(po),l(et),l(oo),l(Y),l(Et),l(tt),l(Rn),l(so),l(P),l(_n),l(ne),l(oe),l(Ze),l(In),l(Le),l(_o),l($t),l(ln),l(Ae),l(Ee),l(xn),l(le),l(Kt)),l(e),M(k,i),M(A,i),M(X,i),M(Jt,i),M(At,i),M(_t,i),M(yt,i),M(_e,i),M(he,i),M(Be),M(Pe),M(bn,i),M(Mt),M(qt),M(ot),M(Re),M(ct),M(We),M(Qe,i),M(wt),M(ue),M(Nt),M(N),M(Ht,i),M(Ne),M(K),M(cn,i)}}}const ea='{"title":"ALBERT","local":"albert","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"AlbertConfig","local":"transformers.AlbertConfig","sections":[],"depth":2},{"title":"AlbertTokenizer","local":"transformers.AlbertTokenizer","sections":[],"depth":2},{"title":"AlbertTokenizerFast","local":"transformers.AlbertTokenizerFast","sections":[],"depth":2},{"title":"Albert specific outputs","local":"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput","sections":[],"depth":2},{"title":"AlbertModel","local":"transformers.AlbertModel","sections":[],"depth":2},{"title":"AlbertForPreTraining","local":"transformers.AlbertForPreTraining","sections":[],"depth":2},{"title":"AlbertForMaskedLM","local":"transformers.AlbertForMaskedLM","sections":[],"depth":2},{"title":"AlbertForSequenceClassification","local":"transformers.AlbertForSequenceClassification","sections":[],"depth":2},{"title":"AlbertForMultipleChoice","local":"transformers.AlbertForMultipleChoice","sections":[],"depth":2},{"title":"AlbertForTokenClassification","local":"transformers.AlbertForTokenClassification","sections":[],"depth":2},{"title":"AlbertForQuestionAnswering","local":"transformers.AlbertForQuestionAnswering","sections":[],"depth":2},{"title":"TFAlbertModel","local":"transformers.TFAlbertModel","sections":[],"depth":2},{"title":"TFAlbertForPreTraining","local":"transformers.TFAlbertForPreTraining","sections":[],"depth":2},{"title":"TFAlbertForMaskedLM","local":"transformers.TFAlbertForMaskedLM","sections":[],"depth":2},{"title":"TFAlbertForSequenceClassification","local":"transformers.TFAlbertForSequenceClassification","sections":[],"depth":2},{"title":"TFAlbertForMultipleChoice","local":"transformers.TFAlbertForMultipleChoice","sections":[],"depth":2},{"title":"TFAlbertForTokenClassification","local":"transformers.TFAlbertForTokenClassification","sections":[],"depth":2},{"title":"TFAlbertForQuestionAnswering","local":"transformers.TFAlbertForQuestionAnswering","sections":[],"depth":2},{"title":"FlaxAlbertModel","local":"transformers.FlaxAlbertModel","sections":[],"depth":2},{"title":"FlaxAlbertForPreTraining","local":"transformers.FlaxAlbertForPreTraining","sections":[],"depth":2},{"title":"FlaxAlbertForMaskedLM","local":"transformers.FlaxAlbertForMaskedLM","sections":[],"depth":2},{"title":"FlaxAlbertForSequenceClassification","local":"transformers.FlaxAlbertForSequenceClassification","sections":[],"depth":2},{"title":"FlaxAlbertForMultipleChoice","local":"transformers.FlaxAlbertForMultipleChoice","sections":[],"depth":2},{"title":"FlaxAlbertForTokenClassification","local":"transformers.FlaxAlbertForTokenClassification","sections":[],"depth":2},{"title":"FlaxAlbertForQuestionAnswering","local":"transformers.FlaxAlbertForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function ta(x){return Lo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pa extends No{constructor(e){super(),Ho(this,e,ta,Ks,Zo,{})}}export{pa as component};
