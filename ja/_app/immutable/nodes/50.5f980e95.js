import{s as Wo,o as Zo,n as W}from"../chunks/scheduler.9bc65507.js";import{S as No,i as Lo,g as l,s as a,r as _,A as Bo,h as d,f as i,c as r,j as N,u as b,x as m,k as Z,y as s,a as c,v as T,d as y,t as M,w as k}from"../chunks/index.707bf1b6.js";import{T as Fe}from"../chunks/Tip.c2ecdbf4.js";import{D as L}from"../chunks/Docstring.17db21ae.js";import{C as fe}from"../chunks/CodeBlock.54a9f38d.js";import{F as Go,M as Io}from"../chunks/Markdown.8ab98a13.js";import{E as he}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Me}from"../chunks/Heading.342b1fa6.js";function Ho(x){let e,p="Examples:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEFsYmVydENvbmZpZyUyQyUyMEFsYmVydE1vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYW4lMjBBTEJFUlQteHhsYXJnZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWFsYmVydF94eGxhcmdlX2NvbmZpZ3VyYXRpb24lMjAlM0QlMjBBbGJlcnRDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGFuJTIwQUxCRVJULWJhc2UlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFhbGJlcnRfYmFzZV9jb25maWd1cmF0aW9uJTIwJTNEJTIwQWxiZXJ0Q29uZmlnKCUwQSUyMCUyMCUyMCUyMGhpZGRlbl9zaXplJTNENzY4JTJDJTBBJTIwJTIwJTIwJTIwbnVtX2F0dGVudGlvbl9oZWFkcyUzRDEyJTJDJTBBJTIwJTIwJTIwJTIwaW50ZXJtZWRpYXRlX3NpemUlM0QzMDcyJTJDJTBBKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMCh3aXRoJTIwcmFuZG9tJTIwd2VpZ2h0cyklMjBmcm9tJTIwdGhlJTIwQUxCRVJULWJhc2UlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMEFsYmVydE1vZGVsKGFsYmVydF94eGxhcmdlX2NvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertConfig, AlbertModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-kvfsh7"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Po(x){let e,p="sequence pair mask has the following format:",n,o,g;return o=new fe({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMEElN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTIwJTIwJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-16klr56"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Vo(x){let e,p="sequence pair mask has the following format:",n,o,g;return o=new fe({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMEElN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTIwJTIwJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-16klr56"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Ro(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Xo(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBbGJlcnRNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Qo(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Eo(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBbGJlcnRGb3JQcmVUcmFpbmluZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRGb3JQcmVUcmFpbmluZy5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9yY2gudGVuc29yKHRva2VuaXplci5lbmNvZGUoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzRFRydWUpKS51bnNxdWVlemUoMCklMEElMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMucHJlZGljdGlvbl9sb2dpdHMlMEFzb3BfbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5zb3BfbG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function So(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Yo(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEFsYmVydEZvck1hc2tlZExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRGb3JNYXNrZWRMTS5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBJTIzJTIwYWRkJTIwbWFza190b2tlbiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjAlNUJNQVNLJTVEJTIwaXMlMjBQYXJpcy4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBJTIzJTIwcmV0cmlldmUlMjBpbmRleCUyMG9mJTIwJTVCTUFTSyU1RCUwQW1hc2tfdG9rZW5faW5kZXglMjAlM0QlMjAoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKSU1QjAlNUQubm9uemVybyhhc190dXBsZSUzRFRydWUpJTVCMCU1RCUwQXByZWRpY3RlZF90b2tlbl9pZCUyMCUzRCUyMGxvZ2l0cyU1QjAlMkMlMjBtYXNrX3Rva2VuX2luZGV4JTVELmFyZ21heChheGlzJTNELTEpJTBBdG9rZW5pemVyLmRlY29kZShwcmVkaWN0ZWRfdG9rZW5faWQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
<span class="hljs-string">&#x27;france&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Do(x){let e,p;return e=new fe({props:{code:"bGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC53aGVyZShpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQlMkMlMjBsYWJlbHMlMkMlMjAtMTAwKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscyklMEFyb3VuZChvdXRwdXRzLmxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`,wrap:!1}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){T(e,n,o),p=!0},p:W,i(n){p||(y(e.$$.fragment,n),p=!0)},o(n){M(e.$$.fragment,n),p=!1},d(n){k(e,n)}}}function Oo(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Ko(x){let e,p="Example of single-label classification:",n,o,g;return o=new fe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ0ZXh0YXR0YWNrJTJGYWxiZXJ0LWJhc2UtdjItaW1kYiUyMiklMEFtb2RlbCUyMCUzRCUyMEFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnRleHRhdHRhY2slMkZhbGJlcnQtYmFzZS12Mi1pbWRiJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoKS5pdGVtKCklMEFtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfY2xhc3NfaWQlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJ0ZXh0YXR0YWNrJTJGYWxiZXJ0LWJhc2UtdjItaW1kYiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
<span class="hljs-number">0.12</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-ykxpe4"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function es(x){let e,p="Example of multi-label classification:",n,o,g;return o=new fe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ0ZXh0YXR0YWNrJTJGYWxiZXJ0LWJhc2UtdjItaW1kYiUyMiklMEFtb2RlbCUyMCUzRCUyMEFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnRleHRhdHRhY2slMkZhbGJlcnQtYmFzZS12Mi1pbWRiJTIyJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkcyUyMCUzRCUyMHRvcmNoLmFyYW5nZSgwJTJDJTIwbG9naXRzLnNoYXBlJTVCLTElNUQpJTVCdG9yY2guc2lnbW9pZChsb2dpdHMpLnNxdWVlemUoZGltJTNEMCklMjAlM0UlMjAwLjUlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJ0ZXh0YXR0YWNrJTJGYWxiZXJ0LWJhc2UtdjItaW1kYiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-1l8e32d"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function ts(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function ns(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBbGJlcnRGb3JNdWx0aXBsZUNob2ljZSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBbW9kZWwlMjAlM0QlMjBBbGJlcnRGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoMCkudW5zcXVlZXplKDApJTIwJTIwJTIzJTIwY2hvaWNlMCUyMGlzJTIwY29ycmVjdCUyMChhY2NvcmRpbmclMjB0byUyMFdpa2lwZWRpYSUyMCUzQikpJTJDJTIwYmF0Y2glMjBzaXplJTIwMSUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHBhZGRpbmclM0RUcnVlKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKiU3QmslM0ElMjB2LnVuc3F1ZWV6ZSgwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function os(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function ss(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBbGJlcnRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMEFsYmVydEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function as(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function rs(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBbGJlcnRGb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIydHdta245JTJGYWxiZXJ0LWJhc2UtdjItc3F1YWQyJTIyKSUwQW1vZGVsJTIwJTNEJTIwQWxiZXJ0Rm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMnR3bWtuOSUyRmFsYmVydC1iYXNlLXYyLXNxdWFkMiUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQXRva2VuaXplci5kZWNvZGUocHJlZGljdF9hbnN3ZXJfdG9rZW5zJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTBBJTBBJTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjEyJTVEKSUwQXRhcmdldF9lbmRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTMlNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwc3RhcnRfcG9zaXRpb25zJTNEdGFyZ2V0X3N0YXJ0X2luZGV4JTJDJTIwZW5kX3Bvc2l0aW9ucyUzRHRhcmdldF9lbmRfaW5kZXgpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AlbertForQuestionAnswering
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
<span class="hljs-number">7.36</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function is(x){let e,p,n,o,g,t,w="The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top.",ee,q,z=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Q,I,U=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,E,u,F,Ge,ge,bo='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertModel">AlbertModel</a> forward method, overrides the <code>__call__</code> special method.',rn,re,Mn,We,rt,yt,kn,P,It,R,Mt,ln=`Albert Model with two heads on top as done during the pretraining: a <code>masked language modeling</code> head and a
<code>sentence order prediction (classification)</code> head.`,it,ne,kt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,In,qt,qn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,dn,O,wt,Yt,Ye,Wt='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertForPreTraining">AlbertForPreTraining</a> forward method, overrides the <code>__call__</code> special method.',cn,Ze,Sn,pn,De,Oe,Dt,G,V,lt,$t,ce="Albert Model with a <code>language modeling</code> head on top.",wn,dt,Ot=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,$n,mn,ke=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,un,H,_e,ho,Zt,Nt='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertForMaskedLM">AlbertForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',ro,oe,ct,Ke,Lt,Bt,no,Je,et,K,vt,xt,vn,Ce=`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,He,ie,tt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,fo,Gt,Ht=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,hn,te,pt,Kt,le,ae='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertForSequenceClassification">AlbertForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',fn,we,Wn,pe,Ne,Ae,xn,Pt,jn,de,jt,Ft,Zn,$e=`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,mt,Vt,Fn=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,S,Le,gn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Rt,Pe,Jn,nt,Xt,en='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertForMultipleChoice">AlbertForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Ve,ze,Yn,B,_n,be,Te,me,Jt,tn,Dn,nn=`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,ut,ht,Nn=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ft,f,J=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ue,Y,ve,Ue,Ie,On='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertForTokenClassification">AlbertForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Ct,At,gt,Re,Ln,Xe,go,X,on,qe,Qt,Co=`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,io,Cn,xo=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,bn,_o,oo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,so,_t,Kn,xe,Bn,jo='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertForQuestionAnswering">AlbertForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Gn,lo,To,je,ao;return e=new Me({props:{title:"AlbertModel",local:"transformers.AlbertModel",headingTag:"h2"}}),o=new L({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L630"}}),F=new L({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L677",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new Fe({props:{$$slots:{default:[Ro]},$$scope:{ctx:x}}}),We=new he({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[Xo]},$$scope:{ctx:x}}}),yt=new Me({props:{title:"AlbertForPreTraining",local:"transformers.AlbertForPreTraining",headingTag:"h2"}}),It=new L({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L756"}}),wt=new L({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"sentence_order_label",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.AlbertForPreTraining.forward.sentence_order_label",description:`<strong>sentence_order_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>. <code>0</code> indicates original order (sequence A, then
sequence B), <code>1</code> indicates switched order (sequence B, then sequence A).`,name:"sentence_order_label"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L785",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new Fe({props:{$$slots:{default:[Qo]},$$scope:{ctx:x}}}),pn=new he({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[Eo]},$$scope:{ctx:x}}}),Oe=new Me({props:{title:"AlbertForMaskedLM",local:"transformers.AlbertForMaskedLM",headingTag:"h2"}}),V=new L({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L907"}}),_e=new L({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L932",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oe=new Fe({props:{$$slots:{default:[So]},$$scope:{ctx:x}}}),Ke=new he({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[Yo]},$$scope:{ctx:x}}}),Bt=new he({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[Do]},$$scope:{ctx:x}}}),Je=new Me({props:{title:"AlbertForSequenceClassification",local:"transformers.AlbertForSequenceClassification",headingTag:"h2"}}),vt=new L({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1018"}}),pt=new L({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1038",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),we=new Fe({props:{$$slots:{default:[Oo]},$$scope:{ctx:x}}}),pe=new he({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[Ko]},$$scope:{ctx:x}}}),Ae=new he({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[es]},$$scope:{ctx:x}}}),Pt=new Me({props:{title:"AlbertForMultipleChoice",local:"transformers.AlbertForMultipleChoice",headingTag:"h2"}}),jt=new L({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1305"}}),Jn=new L({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1323",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ze=new Fe({props:{$$slots:{default:[ts]},$$scope:{ctx:x}}}),B=new he({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[ns]},$$scope:{ctx:x}}}),be=new Me({props:{title:"AlbertForTokenClassification",local:"transformers.AlbertForTokenClassification",headingTag:"h2"}}),Jt=new L({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1119"}}),ve=new L({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1143",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),At=new Fe({props:{$$slots:{default:[os]},$$scope:{ctx:x}}}),Re=new he({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[ss]},$$scope:{ctx:x}}}),Xe=new Me({props:{title:"AlbertForQuestionAnswering",local:"transformers.AlbertForQuestionAnswering",headingTag:"h2"}}),on=new L({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1202"}}),Kn=new L({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1220",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lo=new Fe({props:{$$slots:{default:[as]},$$scope:{ctx:x}}}),je=new he({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[rs]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment),p=a(),n=l("div"),_(o.$$.fragment),g=a(),t=l("p"),t.textContent=w,ee=a(),q=l("p"),q.innerHTML=z,Q=a(),I=l("p"),I.innerHTML=U,E=a(),u=l("div"),_(F.$$.fragment),Ge=a(),ge=l("p"),ge.innerHTML=bo,rn=a(),_(re.$$.fragment),Mn=a(),_(We.$$.fragment),rt=a(),_(yt.$$.fragment),kn=a(),P=l("div"),_(It.$$.fragment),R=a(),Mt=l("p"),Mt.innerHTML=ln,it=a(),ne=l("p"),ne.innerHTML=kt,In=a(),qt=l("p"),qt.innerHTML=qn,dn=a(),O=l("div"),_(wt.$$.fragment),Yt=a(),Ye=l("p"),Ye.innerHTML=Wt,cn=a(),_(Ze.$$.fragment),Sn=a(),_(pn.$$.fragment),De=a(),_(Oe.$$.fragment),Dt=a(),G=l("div"),_(V.$$.fragment),lt=a(),$t=l("p"),$t.innerHTML=ce,wn=a(),dt=l("p"),dt.innerHTML=Ot,$n=a(),mn=l("p"),mn.innerHTML=ke,un=a(),H=l("div"),_(_e.$$.fragment),ho=a(),Zt=l("p"),Zt.innerHTML=Nt,ro=a(),_(oe.$$.fragment),ct=a(),_(Ke.$$.fragment),Lt=a(),_(Bt.$$.fragment),no=a(),_(Je.$$.fragment),et=a(),K=l("div"),_(vt.$$.fragment),xt=a(),vn=l("p"),vn.textContent=Ce,He=a(),ie=l("p"),ie.innerHTML=tt,fo=a(),Gt=l("p"),Gt.innerHTML=Ht,hn=a(),te=l("div"),_(pt.$$.fragment),Kt=a(),le=l("p"),le.innerHTML=ae,fn=a(),_(we.$$.fragment),Wn=a(),_(pe.$$.fragment),Ne=a(),_(Ae.$$.fragment),xn=a(),_(Pt.$$.fragment),jn=a(),de=l("div"),_(jt.$$.fragment),Ft=a(),Zn=l("p"),Zn.textContent=$e,mt=a(),Vt=l("p"),Vt.innerHTML=Fn,S=a(),Le=l("p"),Le.innerHTML=gn,Rt=a(),Pe=l("div"),_(Jn.$$.fragment),nt=a(),Xt=l("p"),Xt.innerHTML=en,Ve=a(),_(ze.$$.fragment),Yn=a(),_(B.$$.fragment),_n=a(),_(be.$$.fragment),Te=a(),me=l("div"),_(Jt.$$.fragment),tn=a(),Dn=l("p"),Dn.textContent=nn,ut=a(),ht=l("p"),ht.innerHTML=Nn,ft=a(),f=l("p"),f.innerHTML=J,ue=a(),Y=l("div"),_(ve.$$.fragment),Ue=a(),Ie=l("p"),Ie.innerHTML=On,Ct=a(),_(At.$$.fragment),gt=a(),_(Re.$$.fragment),Ln=a(),_(Xe.$$.fragment),go=a(),X=l("div"),_(on.$$.fragment),qe=a(),Qt=l("p"),Qt.innerHTML=Co,io=a(),Cn=l("p"),Cn.innerHTML=xo,bn=a(),_o=l("p"),_o.innerHTML=oo,so=a(),_t=l("div"),_(Kn.$$.fragment),xe=a(),Bn=l("p"),Bn.innerHTML=jo,Gn=a(),_(lo.$$.fragment),To=a(),_(je.$$.fragment),this.h()},l($){b(e.$$.fragment,$),p=r($),n=d($,"DIV",{class:!0});var C=N(n);b(o.$$.fragment,C),g=r(C),t=d(C,"P",{"data-svelte-h":!0}),m(t)!=="svelte-1y2mzsh"&&(t.textContent=w),ee=r(C),q=d(C,"P",{"data-svelte-h":!0}),m(q)!=="svelte-eisylu"&&(q.innerHTML=z),Q=r(C),I=d(C,"P",{"data-svelte-h":!0}),m(I)!=="svelte-hswkmf"&&(I.innerHTML=U),E=r(C),u=d(C,"DIV",{class:!0});var Hn=N(u);b(F.$$.fragment,Hn),Ge=r(Hn),ge=d(Hn,"P",{"data-svelte-h":!0}),m(ge)!=="svelte-136dj4r"&&(ge.innerHTML=bo),rn=r(Hn),b(re.$$.fragment,Hn),Mn=r(Hn),b(We.$$.fragment,Hn),Hn.forEach(i),C.forEach(i),rt=r($),b(yt.$$.fragment,$),kn=r($),P=d($,"DIV",{class:!0});var Et=N(P);b(It.$$.fragment,Et),R=r(Et),Mt=d(Et,"P",{"data-svelte-h":!0}),m(Mt)!=="svelte-1qm9vpn"&&(Mt.innerHTML=ln),it=r(Et),ne=d(Et,"P",{"data-svelte-h":!0}),m(ne)!=="svelte-eisylu"&&(ne.innerHTML=kt),In=r(Et),qt=d(Et,"P",{"data-svelte-h":!0}),m(qt)!=="svelte-hswkmf"&&(qt.innerHTML=qn),dn=r(Et),O=d(Et,"DIV",{class:!0});var ye=N(O);b(wt.$$.fragment,ye),Yt=r(ye),Ye=d(ye,"P",{"data-svelte-h":!0}),m(Ye)!=="svelte-1x6lkrz"&&(Ye.innerHTML=Wt),cn=r(ye),b(Ze.$$.fragment,ye),Sn=r(ye),b(pn.$$.fragment,ye),ye.forEach(i),Et.forEach(i),De=r($),b(Oe.$$.fragment,$),Dt=r($),G=d($,"DIV",{class:!0});var St=N(G);b(V.$$.fragment,St),lt=r(St),$t=d(St,"P",{"data-svelte-h":!0}),m($t)!=="svelte-q4kelk"&&($t.innerHTML=ce),wn=r(St),dt=d(St,"P",{"data-svelte-h":!0}),m(dt)!=="svelte-eisylu"&&(dt.innerHTML=Ot),$n=r(St),mn=d(St,"P",{"data-svelte-h":!0}),m(mn)!=="svelte-hswkmf"&&(mn.innerHTML=ke),un=r(St),H=d(St,"DIV",{class:!0});var D=N(H);b(_e.$$.fragment,D),ho=r(D),Zt=d(D,"P",{"data-svelte-h":!0}),m(Zt)!=="svelte-2xvqmv"&&(Zt.innerHTML=Nt),ro=r(D),b(oe.$$.fragment,D),ct=r(D),b(Ke.$$.fragment,D),Lt=r(D),b(Bt.$$.fragment,D),D.forEach(i),St.forEach(i),no=r($),b(Je.$$.fragment,$),et=r($),K=d($,"DIV",{class:!0});var Be=N(K);b(vt.$$.fragment,Be),xt=r(Be),vn=d(Be,"P",{"data-svelte-h":!0}),m(vn)!=="svelte-1wuvovs"&&(vn.textContent=Ce),He=r(Be),ie=d(Be,"P",{"data-svelte-h":!0}),m(ie)!=="svelte-eisylu"&&(ie.innerHTML=tt),fo=r(Be),Gt=d(Be,"P",{"data-svelte-h":!0}),m(Gt)!=="svelte-hswkmf"&&(Gt.innerHTML=Ht),hn=r(Be),te=d(Be,"DIV",{class:!0});var Qe=N(te);b(pt.$$.fragment,Qe),Kt=r(Qe),le=d(Qe,"P",{"data-svelte-h":!0}),m(le)!=="svelte-rgjucj"&&(le.innerHTML=ae),fn=r(Qe),b(we.$$.fragment,Qe),Wn=r(Qe),b(pe.$$.fragment,Qe),Ne=r(Qe),b(Ae.$$.fragment,Qe),Qe.forEach(i),Be.forEach(i),xn=r($),b(Pt.$$.fragment,$),jn=r($),de=d($,"DIV",{class:!0});var Ee=N(de);b(jt.$$.fragment,Ee),Ft=r(Ee),Zn=d(Ee,"P",{"data-svelte-h":!0}),m(Zn)!=="svelte-axso2c"&&(Zn.textContent=$e),mt=r(Ee),Vt=d(Ee,"P",{"data-svelte-h":!0}),m(Vt)!=="svelte-eisylu"&&(Vt.innerHTML=Fn),S=r(Ee),Le=d(Ee,"P",{"data-svelte-h":!0}),m(Le)!=="svelte-hswkmf"&&(Le.innerHTML=gn),Rt=r(Ee),Pe=d(Ee,"DIV",{class:!0});var se=N(Pe);b(Jn.$$.fragment,se),nt=r(se),Xt=d(se,"P",{"data-svelte-h":!0}),m(Xt)!=="svelte-iyr8hj"&&(Xt.innerHTML=en),Ve=r(se),b(ze.$$.fragment,se),Yn=r(se),b(B.$$.fragment,se),se.forEach(i),Ee.forEach(i),_n=r($),b(be.$$.fragment,$),Te=r($),me=d($,"DIV",{class:!0});var Se=N(me);b(Jt.$$.fragment,Se),tn=r(Se),Dn=d(Se,"P",{"data-svelte-h":!0}),m(Dn)!=="svelte-olqnpn"&&(Dn.textContent=nn),ut=r(Se),ht=d(Se,"P",{"data-svelte-h":!0}),m(ht)!=="svelte-eisylu"&&(ht.innerHTML=Nn),ft=r(Se),f=d(Se,"P",{"data-svelte-h":!0}),m(f)!=="svelte-hswkmf"&&(f.innerHTML=J),ue=r(Se),Y=d(Se,"DIV",{class:!0});var ot=N(Y);b(ve.$$.fragment,ot),Ue=r(ot),Ie=d(ot,"P",{"data-svelte-h":!0}),m(Ie)!=="svelte-10kus53"&&(Ie.innerHTML=On),Ct=r(ot),b(At.$$.fragment,ot),gt=r(ot),b(Re.$$.fragment,ot),ot.forEach(i),Se.forEach(i),Ln=r($),b(Xe.$$.fragment,$),go=r($),X=d($,"DIV",{class:!0});var st=N(X);b(on.$$.fragment,st),qe=r(st),Qt=d(st,"P",{"data-svelte-h":!0}),m(Qt)!=="svelte-v56eal"&&(Qt.innerHTML=Co),io=r(st),Cn=d(st,"P",{"data-svelte-h":!0}),m(Cn)!=="svelte-eisylu"&&(Cn.innerHTML=xo),bn=r(st),_o=d(st,"P",{"data-svelte-h":!0}),m(_o)!=="svelte-hswkmf"&&(_o.innerHTML=oo),so=r(st),_t=d(st,"DIV",{class:!0});var bt=N(_t);b(Kn.$$.fragment,bt),xe=r(bt),Bn=d(bt,"P",{"data-svelte-h":!0}),m(Bn)!=="svelte-2gbtnh"&&(Bn.innerHTML=jo),Gn=r(bt),b(lo.$$.fragment,bt),To=r(bt),b(je.$$.fragment,bt),bt.forEach(i),st.forEach(i),this.h()},h(){Z(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m($,C){T(e,$,C),c($,p,C),c($,n,C),T(o,n,null),s(n,g),s(n,t),s(n,ee),s(n,q),s(n,Q),s(n,I),s(n,E),s(n,u),T(F,u,null),s(u,Ge),s(u,ge),s(u,rn),T(re,u,null),s(u,Mn),T(We,u,null),c($,rt,C),T(yt,$,C),c($,kn,C),c($,P,C),T(It,P,null),s(P,R),s(P,Mt),s(P,it),s(P,ne),s(P,In),s(P,qt),s(P,dn),s(P,O),T(wt,O,null),s(O,Yt),s(O,Ye),s(O,cn),T(Ze,O,null),s(O,Sn),T(pn,O,null),c($,De,C),T(Oe,$,C),c($,Dt,C),c($,G,C),T(V,G,null),s(G,lt),s(G,$t),s(G,wn),s(G,dt),s(G,$n),s(G,mn),s(G,un),s(G,H),T(_e,H,null),s(H,ho),s(H,Zt),s(H,ro),T(oe,H,null),s(H,ct),T(Ke,H,null),s(H,Lt),T(Bt,H,null),c($,no,C),T(Je,$,C),c($,et,C),c($,K,C),T(vt,K,null),s(K,xt),s(K,vn),s(K,He),s(K,ie),s(K,fo),s(K,Gt),s(K,hn),s(K,te),T(pt,te,null),s(te,Kt),s(te,le),s(te,fn),T(we,te,null),s(te,Wn),T(pe,te,null),s(te,Ne),T(Ae,te,null),c($,xn,C),T(Pt,$,C),c($,jn,C),c($,de,C),T(jt,de,null),s(de,Ft),s(de,Zn),s(de,mt),s(de,Vt),s(de,S),s(de,Le),s(de,Rt),s(de,Pe),T(Jn,Pe,null),s(Pe,nt),s(Pe,Xt),s(Pe,Ve),T(ze,Pe,null),s(Pe,Yn),T(B,Pe,null),c($,_n,C),T(be,$,C),c($,Te,C),c($,me,C),T(Jt,me,null),s(me,tn),s(me,Dn),s(me,ut),s(me,ht),s(me,ft),s(me,f),s(me,ue),s(me,Y),T(ve,Y,null),s(Y,Ue),s(Y,Ie),s(Y,Ct),T(At,Y,null),s(Y,gt),T(Re,Y,null),c($,Ln,C),T(Xe,$,C),c($,go,C),c($,X,C),T(on,X,null),s(X,qe),s(X,Qt),s(X,io),s(X,Cn),s(X,bn),s(X,_o),s(X,so),s(X,_t),T(Kn,_t,null),s(_t,xe),s(_t,Bn),s(_t,Gn),T(lo,_t,null),s(_t,To),T(je,_t,null),ao=!0},p($,C){const Hn={};C&2&&(Hn.$$scope={dirty:C,ctx:$}),re.$set(Hn);const Et={};C&2&&(Et.$$scope={dirty:C,ctx:$}),We.$set(Et);const ye={};C&2&&(ye.$$scope={dirty:C,ctx:$}),Ze.$set(ye);const St={};C&2&&(St.$$scope={dirty:C,ctx:$}),pn.$set(St);const D={};C&2&&(D.$$scope={dirty:C,ctx:$}),oe.$set(D);const Be={};C&2&&(Be.$$scope={dirty:C,ctx:$}),Ke.$set(Be);const Qe={};C&2&&(Qe.$$scope={dirty:C,ctx:$}),Bt.$set(Qe);const Ee={};C&2&&(Ee.$$scope={dirty:C,ctx:$}),we.$set(Ee);const se={};C&2&&(se.$$scope={dirty:C,ctx:$}),pe.$set(se);const Se={};C&2&&(Se.$$scope={dirty:C,ctx:$}),Ae.$set(Se);const ot={};C&2&&(ot.$$scope={dirty:C,ctx:$}),ze.$set(ot);const st={};C&2&&(st.$$scope={dirty:C,ctx:$}),B.$set(st);const bt={};C&2&&(bt.$$scope={dirty:C,ctx:$}),At.$set(bt);const Fo={};C&2&&(Fo.$$scope={dirty:C,ctx:$}),Re.$set(Fo);const An={};C&2&&(An.$$scope={dirty:C,ctx:$}),lo.$set(An);const Jo={};C&2&&(Jo.$$scope={dirty:C,ctx:$}),je.$set(Jo)},i($){ao||(y(e.$$.fragment,$),y(o.$$.fragment,$),y(F.$$.fragment,$),y(re.$$.fragment,$),y(We.$$.fragment,$),y(yt.$$.fragment,$),y(It.$$.fragment,$),y(wt.$$.fragment,$),y(Ze.$$.fragment,$),y(pn.$$.fragment,$),y(Oe.$$.fragment,$),y(V.$$.fragment,$),y(_e.$$.fragment,$),y(oe.$$.fragment,$),y(Ke.$$.fragment,$),y(Bt.$$.fragment,$),y(Je.$$.fragment,$),y(vt.$$.fragment,$),y(pt.$$.fragment,$),y(we.$$.fragment,$),y(pe.$$.fragment,$),y(Ae.$$.fragment,$),y(Pt.$$.fragment,$),y(jt.$$.fragment,$),y(Jn.$$.fragment,$),y(ze.$$.fragment,$),y(B.$$.fragment,$),y(be.$$.fragment,$),y(Jt.$$.fragment,$),y(ve.$$.fragment,$),y(At.$$.fragment,$),y(Re.$$.fragment,$),y(Xe.$$.fragment,$),y(on.$$.fragment,$),y(Kn.$$.fragment,$),y(lo.$$.fragment,$),y(je.$$.fragment,$),ao=!0)},o($){M(e.$$.fragment,$),M(o.$$.fragment,$),M(F.$$.fragment,$),M(re.$$.fragment,$),M(We.$$.fragment,$),M(yt.$$.fragment,$),M(It.$$.fragment,$),M(wt.$$.fragment,$),M(Ze.$$.fragment,$),M(pn.$$.fragment,$),M(Oe.$$.fragment,$),M(V.$$.fragment,$),M(_e.$$.fragment,$),M(oe.$$.fragment,$),M(Ke.$$.fragment,$),M(Bt.$$.fragment,$),M(Je.$$.fragment,$),M(vt.$$.fragment,$),M(pt.$$.fragment,$),M(we.$$.fragment,$),M(pe.$$.fragment,$),M(Ae.$$.fragment,$),M(Pt.$$.fragment,$),M(jt.$$.fragment,$),M(Jn.$$.fragment,$),M(ze.$$.fragment,$),M(B.$$.fragment,$),M(be.$$.fragment,$),M(Jt.$$.fragment,$),M(ve.$$.fragment,$),M(At.$$.fragment,$),M(Re.$$.fragment,$),M(Xe.$$.fragment,$),M(on.$$.fragment,$),M(Kn.$$.fragment,$),M(lo.$$.fragment,$),M(je.$$.fragment,$),ao=!1},d($){$&&(i(p),i(n),i(rt),i(kn),i(P),i(De),i(Dt),i(G),i(no),i(et),i(K),i(xn),i(jn),i(de),i(_n),i(Te),i(me),i(Ln),i(go),i(X)),k(e,$),k(o),k(F),k(re),k(We),k(yt,$),k(It),k(wt),k(Ze),k(pn),k(Oe,$),k(V),k(_e),k(oe),k(Ke),k(Bt),k(Je,$),k(vt),k(pt),k(we),k(pe),k(Ae),k(Pt,$),k(jt),k(Jn),k(ze),k(B),k(be,$),k(Jt),k(ve),k(At),k(Re),k(Xe,$),k(on),k(Kn),k(lo),k(je)}}}function ls(x){let e,p;return e=new Io({props:{$$slots:{default:[is]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){T(e,n,o),p=!0},p(n,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:n}),e.$set(g)},i(n){p||(y(e.$$.fragment,n),p=!0)},o(n){M(e.$$.fragment,n),p=!1},d(n){k(e,n)}}}function ds(x){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,q,z,Q=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=p,n=a(),o=l("ul"),o.innerHTML=g,t=a(),w=l("p"),w.innerHTML=ee,q=a(),z=l("ul"),z.innerHTML=Q,I=a(),U=l("p"),U.innerHTML=E},l(u){e=d(u,"P",{"data-svelte-h":!0}),m(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),n=r(u),o=d(u,"UL",{"data-svelte-h":!0}),m(o)!=="svelte-qm1t26"&&(o.innerHTML=g),t=r(u),w=d(u,"P",{"data-svelte-h":!0}),m(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),q=r(u),z=d(u,"UL",{"data-svelte-h":!0}),m(z)!=="svelte-15scerc"&&(z.innerHTML=Q),I=r(u),U=d(u,"P",{"data-svelte-h":!0}),m(U)!=="svelte-1an3odd"&&(U.innerHTML=E)},m(u,F){c(u,e,F),c(u,n,F),c(u,o,F),c(u,t,F),c(u,w,F),c(u,q,F),c(u,z,F),c(u,I,F),c(u,U,F)},p:W,d(u){u&&(i(e),i(n),i(o),i(t),i(w),i(q),i(z),i(I),i(U))}}}function cs(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function ps(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkFsYmVydE1vZGVsJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGQWxiZXJ0TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function ms(x){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,q,z,Q=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=p,n=a(),o=l("ul"),o.innerHTML=g,t=a(),w=l("p"),w.innerHTML=ee,q=a(),z=l("ul"),z.innerHTML=Q,I=a(),U=l("p"),U.innerHTML=E},l(u){e=d(u,"P",{"data-svelte-h":!0}),m(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),n=r(u),o=d(u,"UL",{"data-svelte-h":!0}),m(o)!=="svelte-qm1t26"&&(o.innerHTML=g),t=r(u),w=d(u,"P",{"data-svelte-h":!0}),m(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),q=r(u),z=d(u,"UL",{"data-svelte-h":!0}),m(z)!=="svelte-15scerc"&&(z.innerHTML=Q),I=r(u),U=d(u,"P",{"data-svelte-h":!0}),m(U)!=="svelte-1an3odd"&&(U.innerHTML=E)},m(u,F){c(u,e,F),c(u,n,F),c(u,o,F),c(u,t,F),c(u,w,F),c(u,q,F),c(u,z,F),c(u,I,F),c(u,U,F)},p:W,d(u){u&&(i(e),i(n),i(o),i(t),i(w),i(q),i(z),i(I),i(U))}}}function us(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function hs(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFRGQWxiZXJ0Rm9yUHJlVHJhaW5pbmclMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGQWxiZXJ0Rm9yUHJlVHJhaW5pbmcuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQWlucHV0X2lkcyUyMCUzRCUyMHRmLmNvbnN0YW50KHRva2VuaXplci5lbmNvZGUoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzRFRydWUpKSU1Qk5vbmUlMkMlMjAlM0ElNUQlMEElMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMucHJlZGljdGlvbl9sb2dpdHMlMEFzb3BfbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5zb3BfbG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[<span class="hljs-literal">None</span>, :]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function fs(x){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,q,z,Q=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=p,n=a(),o=l("ul"),o.innerHTML=g,t=a(),w=l("p"),w.innerHTML=ee,q=a(),z=l("ul"),z.innerHTML=Q,I=a(),U=l("p"),U.innerHTML=E},l(u){e=d(u,"P",{"data-svelte-h":!0}),m(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),n=r(u),o=d(u,"UL",{"data-svelte-h":!0}),m(o)!=="svelte-qm1t26"&&(o.innerHTML=g),t=r(u),w=d(u,"P",{"data-svelte-h":!0}),m(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),q=r(u),z=d(u,"UL",{"data-svelte-h":!0}),m(z)!=="svelte-15scerc"&&(z.innerHTML=Q),I=r(u),U=d(u,"P",{"data-svelte-h":!0}),m(U)!=="svelte-1an3odd"&&(U.innerHTML=E)},m(u,F){c(u,e,F),c(u,n,F),c(u,o,F),c(u,t,F),c(u,w,F),c(u,q,F),c(u,z,F),c(u,I,F),c(u,U,F)},p:W,d(u){u&&(i(e),i(n),i(o),i(t),i(w),i(q),i(z),i(I),i(U))}}}function gs(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function _s(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFRGQWxiZXJ0Rm9yTWFza2VkTE0lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGQWxiZXJ0Rm9yTWFza2VkTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQSUyMyUyMGFkZCUyMG1hc2tfdG9rZW4lMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoZiUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMCU1Qk1BU0slNUQlMjBpcyUyMFBhcmlzLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQSUyMyUyMHJldHJpZXZlJTIwaW5kZXglMjBvZiUyMCU1Qk1BU0slNUQlMEFtYXNrX3Rva2VuX2luZGV4JTIwJTNEJTIwdGYud2hlcmUoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKSU1QjAlNUQlNUIxJTVEJTBBcHJlZGljdGVkX3Rva2VuX2lkJTIwJTNEJTIwdGYubWF0aC5hcmdtYXgobG9naXRzJTVCMCUyQyUyMG1hc2tfdG9rZW5faW5kZXglNUQlMkMlMjBheGlzJTNELTEpJTBBdG9rZW5pemVyLmRlY29kZShwcmVkaWN0ZWRfdG9rZW5faWQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
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
<span class="hljs-string">&#x27;france&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function bs(x){let e,p;return e=new fe({props:{code:"bGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEFsYWJlbHMlMjAlM0QlMjB0Zi53aGVyZShpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQlMkMlMjBsYWJlbHMlMkMlMjAtMTAwKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscyklMEFyb3VuZChmbG9hdChvdXRwdXRzLmxvc3MpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`,wrap:!1}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){T(e,n,o),p=!0},p:W,i(n){p||(y(e.$$.fragment,n),p=!0)},o(n){M(e.$$.fragment,n),p=!1},d(n){k(e,n)}}}function Ts(x){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,q,z,Q=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=p,n=a(),o=l("ul"),o.innerHTML=g,t=a(),w=l("p"),w.innerHTML=ee,q=a(),z=l("ul"),z.innerHTML=Q,I=a(),U=l("p"),U.innerHTML=E},l(u){e=d(u,"P",{"data-svelte-h":!0}),m(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),n=r(u),o=d(u,"UL",{"data-svelte-h":!0}),m(o)!=="svelte-qm1t26"&&(o.innerHTML=g),t=r(u),w=d(u,"P",{"data-svelte-h":!0}),m(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),q=r(u),z=d(u,"UL",{"data-svelte-h":!0}),m(z)!=="svelte-15scerc"&&(z.innerHTML=Q),I=r(u),U=d(u,"P",{"data-svelte-h":!0}),m(U)!=="svelte-1an3odd"&&(U.innerHTML=E)},m(u,F){c(u,e,F),c(u,n,F),c(u,o,F),c(u,t,F),c(u,w,F),c(u,q,F),c(u,z,F),c(u,I,F),c(u,U,F)},p:W,d(u){u&&(i(e),i(n),i(o),i(t),i(w),i(q),i(z),i(I),i(U))}}}function ys(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Ms(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnZ1bWljaGllbiUyRmFsYmVydC1iYXNlLXYyLWltZGIlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnZ1bWljaGllbiUyRmFsYmVydC1iYXNlLXYyLWltZGIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBpbnQodGYubWF0aC5hcmdtYXgobG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQpJTBBbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCcHJlZGljdGVkX2NsYXNzX2lkJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function ks(x){let e,p;return e=new fe({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZBbGJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJ2dW1pY2hpZW4lMkZhbGJlcnQtYmFzZS12Mi1pbWRiJTIyJTJDJTIwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdGYuY29uc3RhbnQoMSklMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3MlMEFyb3VuZChmbG9hdChsb3NzKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`,wrap:!1}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){T(e,n,o),p=!0},p:W,i(n){p||(y(e.$$.fragment,n),p=!0)},o(n){M(e.$$.fragment,n),p=!1},d(n){k(e,n)}}}function ws(x){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,q,z,Q=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=p,n=a(),o=l("ul"),o.innerHTML=g,t=a(),w=l("p"),w.innerHTML=ee,q=a(),z=l("ul"),z.innerHTML=Q,I=a(),U=l("p"),U.innerHTML=E},l(u){e=d(u,"P",{"data-svelte-h":!0}),m(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),n=r(u),o=d(u,"UL",{"data-svelte-h":!0}),m(o)!=="svelte-qm1t26"&&(o.innerHTML=g),t=r(u),w=d(u,"P",{"data-svelte-h":!0}),m(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),q=r(u),z=d(u,"UL",{"data-svelte-h":!0}),m(z)!=="svelte-15scerc"&&(z.innerHTML=Q),I=r(u),U=d(u,"P",{"data-svelte-h":!0}),m(U)!=="svelte-1an3odd"&&(U.innerHTML=E)},m(u,F){c(u,e,F),c(u,n,F),c(u,o,F),c(u,t,F),c(u,w,F),c(u,q,F),c(u,z,F),c(u,I,F),c(u,U,F)},p:W,d(u){u&&(i(e),i(n),i(o),i(t),i(w),i(q),i(z),i(I),i(U))}}}function $s(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function vs(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkFsYmVydEZvck11bHRpcGxlQ2hvaWNlJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGQWxiZXJ0Rm9yTXVsdGlwbGVDaG9pY2UuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMkluJTIwSXRhbHklMkMlMjBwaXp6YSUyMHNlcnZlZCUyMGluJTIwZm9ybWFsJTIwc2V0dGluZ3MlMkMlMjBzdWNoJTIwYXMlMjBhdCUyMGElMjByZXN0YXVyYW50JTJDJTIwaXMlMjBwcmVzZW50ZWQlMjB1bnNsaWNlZC4lMjIlMEFjaG9pY2UwJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2l0aCUyMGElMjBmb3JrJTIwYW5kJTIwYSUyMGtuaWZlLiUyMiUwQWNob2ljZTElMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aGlsZSUyMGhlbGQlMjBpbiUyMHRoZSUyMGhhbmQuJTIyJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTVCcHJvbXB0JTJDJTIwcHJvbXB0JTVEJTJDJTIwJTVCY2hvaWNlMCUyQyUyMGNob2ljZTElNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBaW5wdXRzJTIwJTNEJTIwJTdCayUzQSUyMHRmLmV4cGFuZF9kaW1zKHYlMkMlMjAwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMjAlMjAlMjMlMjBiYXRjaCUyMHNpemUlMjBpcyUyMDElMEElMEElMjMlMjB0aGUlMjBsaW5lYXIlMjBjbGFzc2lmaWVyJTIwc3RpbGwlMjBuZWVkcyUyMHRvJTIwYmUlMjB0cmFpbmVkJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function xs(x){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,q,z,Q=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=p,n=a(),o=l("ul"),o.innerHTML=g,t=a(),w=l("p"),w.innerHTML=ee,q=a(),z=l("ul"),z.innerHTML=Q,I=a(),U=l("p"),U.innerHTML=E},l(u){e=d(u,"P",{"data-svelte-h":!0}),m(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),n=r(u),o=d(u,"UL",{"data-svelte-h":!0}),m(o)!=="svelte-qm1t26"&&(o.innerHTML=g),t=r(u),w=d(u,"P",{"data-svelte-h":!0}),m(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),q=r(u),z=d(u,"UL",{"data-svelte-h":!0}),m(z)!=="svelte-15scerc"&&(z.innerHTML=Q),I=r(u),U=d(u,"P",{"data-svelte-h":!0}),m(U)!=="svelte-1an3odd"&&(U.innerHTML=E)},m(u,F){c(u,e,F),c(u,n,F),c(u,o,F),c(u,t,F),c(u,w,F),c(u,q,F),c(u,z,F),c(u,I,F),c(u,U,F)},p:W,d(u){u&&(i(e),i(n),i(o),i(t),i(w),i(q),i(z),i(I),i(U))}}}function js(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Fs(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkFsYmVydEZvclRva2VuQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZBbGJlcnRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiUwQSklMEElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMHRmLm1hdGguYXJnbWF4KGxvZ2l0cyUyQyUyMGF4aXMlM0QtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdCU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVELm51bXB5KCkudG9saXN0KCklNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Js(x){let e,p;return e=new fe({props:{code:"bGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)`,wrap:!1}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){T(e,n,o),p=!0},p:W,i(n){p||(y(e.$$.fragment,n),p=!0)},o(n){M(e.$$.fragment,n),p=!1},d(n){k(e,n)}}}function Cs(x){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,ee=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,q,z,Q=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=p,n=a(),o=l("ul"),o.innerHTML=g,t=a(),w=l("p"),w.innerHTML=ee,q=a(),z=l("ul"),z.innerHTML=Q,I=a(),U=l("p"),U.innerHTML=E},l(u){e=d(u,"P",{"data-svelte-h":!0}),m(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),n=r(u),o=d(u,"UL",{"data-svelte-h":!0}),m(o)!=="svelte-qm1t26"&&(o.innerHTML=g),t=r(u),w=d(u,"P",{"data-svelte-h":!0}),m(w)!=="svelte-1v9qsc5"&&(w.innerHTML=ee),q=r(u),z=d(u,"UL",{"data-svelte-h":!0}),m(z)!=="svelte-15scerc"&&(z.innerHTML=Q),I=r(u),U=d(u,"P",{"data-svelte-h":!0}),m(U)!=="svelte-1an3odd"&&(U.innerHTML=E)},m(u,F){c(u,e,F),c(u,n,F),c(u,o,F),c(u,t,F),c(u,w,F),c(u,q,F),c(u,z,F),c(u,I,F),c(u,U,F)},p:W,d(u){u&&(i(e),i(n),i(o),i(t),i(w),i(q),i(z),i(I),i(U))}}}function As(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function zs(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkFsYmVydEZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ2dW1pY2hpZW4lMkZhbGJlcnQtYmFzZS12Mi1zcXVhZDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkFsYmVydEZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJ2dW1pY2hpZW4lMkZhbGJlcnQtYmFzZS12Mi1zcXVhZDIlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KG91dHB1dHMuc3RhcnRfbG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChvdXRwdXRzLmVuZF9sb2dpdHMlMkMlMjBheGlzJTNELTEpJTVCMCU1RCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCMCUyQyUyMGFuc3dlcl9zdGFydF9pbmRleCUyMCUzQSUyMGFuc3dlcl9lbmRfaW5kZXglMjAlMkIlMjAxJTVEJTBBdG9rZW5pemVyLmRlY29kZShwcmVkaWN0X2Fuc3dlcl90b2tlbnMp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Us(x){let e,p;return e=new fe({props:{code:"JTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdGYuY29uc3RhbnQoJTVCMTIlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRmLmNvbnN0YW50KCU1QjEzJTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG91dHB1dHMubG9zcyklMEFyb3VuZChmbG9hdChsb3NzKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">7.36</span>`,wrap:!1}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){T(e,n,o),p=!0},p:W,i(n){p||(y(e.$$.fragment,n),p=!0)},o(n){M(e.$$.fragment,n),p=!1},d(n){k(e,n)}}}function Is(x){let e,p,n,o,g,t,w="The bare Albert Model transformer outputting raw hidden-states without any specific head on top.",ee,q,z=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Q,I,U=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,E,u,F,Ge,ge,bo,rn,re='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a> forward method, overrides the <code>__call__</code> special method.',Mn,We,rt,yt,kn,P,It,R,Mt,ln,it,ne="Albert Model with two heads on top for pretraining: a <code>masked language modeling</code> head and a <code>sentence order prediction</code> (classification) head.",kt,In,qt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,qn,dn,O=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,wt,Yt,Ye,Wt,cn,Ze,Sn,pn='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertForPreTraining">TFAlbertForPreTraining</a> forward method, overrides the <code>__call__</code> special method.',De,Oe,Dt,G,V,lt,$t,ce,wn,dt,Ot,$n="Albert Model with a <code>language modeling</code> head on top.",mn,ke,un=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,H,_e,ho=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Zt,Nt,ro,oe,ct,Ke,Lt,Bt='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertForMaskedLM">TFAlbertForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',no,Je,et,K,vt,xt,vn,Ce,He,ie,tt,fo,Gt,Ht=`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,hn,te,pt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Kt,le,ae=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,fn,we,Wn,pe,Ne,Ae,xn,Pt='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertForSequenceClassification">TFAlbertForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',jn,de,jt,Ft,Zn,$e,mt,Vt,Fn,S,Le,gn,Rt,Pe=`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,Jn,nt,Xt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,en,Ve,ze=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Yn,B,_n,be,Te,me,Jt,tn='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertForMultipleChoice">TFAlbertForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Dn,nn,ut,ht,Nn,ft,f,J,ue,Y,ve,Ue=`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Ie,On,Ct=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,At,gt,Re=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Ln,Xe,go,X,on,qe,Qt,Co='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertForTokenClassification">TFAlbertForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',io,Cn,xo,bn,_o,oo,so,_t,Kn,xe,Bn,jo,Gn,lo=`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,To,je,ao=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,$,C,Hn=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Et,ye,St,D,Be,Qe,Ee,se='The <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertForQuestionAnswering">TFAlbertForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Se,ot,st,bt,Fo,An,Jo;return e=new Me({props:{title:"TFAlbertModel",local:"transformers.TFAlbertModel",headingTag:"h2"}}),o=new L({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L870"}}),u=new Fe({props:{$$slots:{default:[ds]},$$scope:{ctx:x}}}),ge=new L({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L880",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),We=new Fe({props:{$$slots:{default:[cs]},$$scope:{ctx:x}}}),yt=new he({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[ps]},$$scope:{ctx:x}}}),P=new Me({props:{title:"TFAlbertForPreTraining",local:"transformers.TFAlbertForPreTraining",headingTag:"h2"}}),Mt=new L({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L924"}}),Yt=new Fe({props:{$$slots:{default:[ms]},$$scope:{ctx:x}}}),cn=new L({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"sentence_order_label",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L947",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Oe=new Fe({props:{$$slots:{default:[us]},$$scope:{ctx:x}}}),G=new he({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[hs]},$$scope:{ctx:x}}}),lt=new Me({props:{title:"TFAlbertForMaskedLM",local:"transformers.TFAlbertForMaskedLM",headingTag:"h2"}}),wn=new L({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1061"}}),Nt=new Fe({props:{$$slots:{default:[fs]},$$scope:{ctx:x}}}),ct=new L({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1075",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Je=new Fe({props:{$$slots:{default:[gs]},$$scope:{ctx:x}}}),K=new he({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[_s]},$$scope:{ctx:x}}}),xt=new he({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[bs]},$$scope:{ctx:x}}}),Ce=new Me({props:{title:"TFAlbertForSequenceClassification",local:"transformers.TFAlbertForSequenceClassification",headingTag:"h2"}}),tt=new L({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1168"}}),we=new Fe({props:{$$slots:{default:[Ts]},$$scope:{ctx:x}}}),Ne=new L({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1192",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),de=new Fe({props:{$$slots:{default:[ys]},$$scope:{ctx:x}}}),Ft=new he({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[Ms]},$$scope:{ctx:x}}}),$e=new he({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[ks]},$$scope:{ctx:x}}}),Vt=new Me({props:{title:"TFAlbertForMultipleChoice",local:"transformers.TFAlbertForMultipleChoice",headingTag:"h2"}}),Le=new L({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1464"}}),B=new Fe({props:{$$slots:{default:[ws]},$$scope:{ctx:x}}}),Te=new L({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1486",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nn=new Fe({props:{$$slots:{default:[$s]},$$scope:{ctx:x}}}),ht=new he({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[vs]},$$scope:{ctx:x}}}),ft=new Me({props:{title:"TFAlbertForTokenClassification",local:"transformers.TFAlbertForTokenClassification",headingTag:"h2"}}),ue=new L({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1262"}}),Xe=new Fe({props:{$$slots:{default:[xs]},$$scope:{ctx:x}}}),on=new L({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1291",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Cn=new Fe({props:{$$slots:{default:[js]},$$scope:{ctx:x}}}),bn=new he({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[Fs]},$$scope:{ctx:x}}}),oo=new he({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[Js]},$$scope:{ctx:x}}}),_t=new Me({props:{title:"TFAlbertForQuestionAnswering",local:"transformers.TFAlbertForQuestionAnswering",headingTag:"h2"}}),Bn=new L({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1357"}}),ye=new Fe({props:{$$slots:{default:[Cs]},$$scope:{ctx:x}}}),Be=new L({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"start_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"end_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ot=new Fe({props:{$$slots:{default:[As]},$$scope:{ctx:x}}}),bt=new he({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[zs]},$$scope:{ctx:x}}}),An=new he({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[Us]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment),p=a(),n=l("div"),_(o.$$.fragment),g=a(),t=l("p"),t.textContent=w,ee=a(),q=l("p"),q.innerHTML=z,Q=a(),I=l("p"),I.innerHTML=U,E=a(),_(u.$$.fragment),F=a(),Ge=l("div"),_(ge.$$.fragment),bo=a(),rn=l("p"),rn.innerHTML=re,Mn=a(),_(We.$$.fragment),rt=a(),_(yt.$$.fragment),kn=a(),_(P.$$.fragment),It=a(),R=l("div"),_(Mt.$$.fragment),ln=a(),it=l("p"),it.innerHTML=ne,kt=a(),In=l("p"),In.innerHTML=qt,qn=a(),dn=l("p"),dn.innerHTML=O,wt=a(),_(Yt.$$.fragment),Ye=a(),Wt=l("div"),_(cn.$$.fragment),Ze=a(),Sn=l("p"),Sn.innerHTML=pn,De=a(),_(Oe.$$.fragment),Dt=a(),_(G.$$.fragment),V=a(),_(lt.$$.fragment),$t=a(),ce=l("div"),_(wn.$$.fragment),dt=a(),Ot=l("p"),Ot.innerHTML=$n,mn=a(),ke=l("p"),ke.innerHTML=un,H=a(),_e=l("p"),_e.innerHTML=ho,Zt=a(),_(Nt.$$.fragment),ro=a(),oe=l("div"),_(ct.$$.fragment),Ke=a(),Lt=l("p"),Lt.innerHTML=Bt,no=a(),_(Je.$$.fragment),et=a(),_(K.$$.fragment),vt=a(),_(xt.$$.fragment),vn=a(),_(Ce.$$.fragment),He=a(),ie=l("div"),_(tt.$$.fragment),fo=a(),Gt=l("p"),Gt.textContent=Ht,hn=a(),te=l("p"),te.innerHTML=pt,Kt=a(),le=l("p"),le.innerHTML=ae,fn=a(),_(we.$$.fragment),Wn=a(),pe=l("div"),_(Ne.$$.fragment),Ae=a(),xn=l("p"),xn.innerHTML=Pt,jn=a(),_(de.$$.fragment),jt=a(),_(Ft.$$.fragment),Zn=a(),_($e.$$.fragment),mt=a(),_(Vt.$$.fragment),Fn=a(),S=l("div"),_(Le.$$.fragment),gn=a(),Rt=l("p"),Rt.textContent=Pe,Jn=a(),nt=l("p"),nt.innerHTML=Xt,en=a(),Ve=l("p"),Ve.innerHTML=ze,Yn=a(),_(B.$$.fragment),_n=a(),be=l("div"),_(Te.$$.fragment),me=a(),Jt=l("p"),Jt.innerHTML=tn,Dn=a(),_(nn.$$.fragment),ut=a(),_(ht.$$.fragment),Nn=a(),_(ft.$$.fragment),f=a(),J=l("div"),_(ue.$$.fragment),Y=a(),ve=l("p"),ve.textContent=Ue,Ie=a(),On=l("p"),On.innerHTML=Ct,At=a(),gt=l("p"),gt.innerHTML=Re,Ln=a(),_(Xe.$$.fragment),go=a(),X=l("div"),_(on.$$.fragment),qe=a(),Qt=l("p"),Qt.innerHTML=Co,io=a(),_(Cn.$$.fragment),xo=a(),_(bn.$$.fragment),_o=a(),_(oo.$$.fragment),so=a(),_(_t.$$.fragment),Kn=a(),xe=l("div"),_(Bn.$$.fragment),jo=a(),Gn=l("p"),Gn.innerHTML=lo,To=a(),je=l("p"),je.innerHTML=ao,$=a(),C=l("p"),C.innerHTML=Hn,Et=a(),_(ye.$$.fragment),St=a(),D=l("div"),_(Be.$$.fragment),Qe=a(),Ee=l("p"),Ee.innerHTML=se,Se=a(),_(ot.$$.fragment),st=a(),_(bt.$$.fragment),Fo=a(),_(An.$$.fragment),this.h()},l(h){b(e.$$.fragment,h),p=r(h),n=d(h,"DIV",{class:!0});var j=N(n);b(o.$$.fragment,j),g=r(j),t=d(j,"P",{"data-svelte-h":!0}),m(t)!=="svelte-psfqdt"&&(t.textContent=w),ee=r(j),q=d(j,"P",{"data-svelte-h":!0}),m(q)!=="svelte-x53t1u"&&(q.innerHTML=z),Q=r(j),I=d(j,"P",{"data-svelte-h":!0}),m(I)!=="svelte-1be7e3c"&&(I.innerHTML=U),E=r(j),b(u.$$.fragment,j),F=r(j),Ge=d(j,"DIV",{class:!0});var co=N(Ge);b(ge.$$.fragment,co),bo=r(co),rn=d(co,"P",{"data-svelte-h":!0}),m(rn)!=="svelte-1a6sskj"&&(rn.innerHTML=re),Mn=r(co),b(We.$$.fragment,co),rt=r(co),b(yt.$$.fragment,co),co.forEach(i),j.forEach(i),kn=r(h),b(P.$$.fragment,h),It=r(h),R=d(h,"DIV",{class:!0});var Tn=N(R);b(Mt.$$.fragment,Tn),ln=r(Tn),it=d(Tn,"P",{"data-svelte-h":!0}),m(it)!=="svelte-xc1iay"&&(it.innerHTML=ne),kt=r(Tn),In=d(Tn,"P",{"data-svelte-h":!0}),m(In)!=="svelte-x53t1u"&&(In.innerHTML=qt),qn=r(Tn),dn=d(Tn,"P",{"data-svelte-h":!0}),m(dn)!=="svelte-1be7e3c"&&(dn.innerHTML=O),wt=r(Tn),b(Yt.$$.fragment,Tn),Ye=r(Tn),Wt=d(Tn,"DIV",{class:!0});var zn=N(Wt);b(cn.$$.fragment,zn),Ze=r(zn),Sn=d(zn,"P",{"data-svelte-h":!0}),m(Sn)!=="svelte-1pxzfl3"&&(Sn.innerHTML=pn),De=r(zn),b(Oe.$$.fragment,zn),Dt=r(zn),b(G.$$.fragment,zn),zn.forEach(i),Tn.forEach(i),V=r(h),b(lt.$$.fragment,h),$t=r(h),ce=d(h,"DIV",{class:!0});var Un=N(ce);b(wn.$$.fragment,Un),dt=r(Un),Ot=d(Un,"P",{"data-svelte-h":!0}),m(Ot)!=="svelte-q4kelk"&&(Ot.innerHTML=$n),mn=r(Un),ke=d(Un,"P",{"data-svelte-h":!0}),m(ke)!=="svelte-x53t1u"&&(ke.innerHTML=un),H=r(Un),_e=d(Un,"P",{"data-svelte-h":!0}),m(_e)!=="svelte-1be7e3c"&&(_e.innerHTML=ho),Zt=r(Un),b(Nt.$$.fragment,Un),ro=r(Un),oe=d(Un,"DIV",{class:!0});var Pn=N(oe);b(ct.$$.fragment,Pn),Ke=r(Pn),Lt=d(Pn,"P",{"data-svelte-h":!0}),m(Lt)!=="svelte-1buca9j"&&(Lt.innerHTML=Bt),no=r(Pn),b(Je.$$.fragment,Pn),et=r(Pn),b(K.$$.fragment,Pn),vt=r(Pn),b(xt.$$.fragment,Pn),Pn.forEach(i),Un.forEach(i),vn=r(h),b(Ce.$$.fragment,h),He=r(h),ie=d(h,"DIV",{class:!0});var zt=N(ie);b(tt.$$.fragment,zt),fo=r(zt),Gt=d(zt,"P",{"data-svelte-h":!0}),m(Gt)!=="svelte-1wuvovs"&&(Gt.textContent=Ht),hn=r(zt),te=d(zt,"P",{"data-svelte-h":!0}),m(te)!=="svelte-x53t1u"&&(te.innerHTML=pt),Kt=r(zt),le=d(zt,"P",{"data-svelte-h":!0}),m(le)!=="svelte-1be7e3c"&&(le.innerHTML=ae),fn=r(zt),b(we.$$.fragment,zt),Wn=r(zt),pe=d(zt,"DIV",{class:!0});var eo=N(pe);b(Ne.$$.fragment,eo),Ae=r(eo),xn=d(eo,"P",{"data-svelte-h":!0}),m(xn)!=="svelte-1jbr7mf"&&(xn.innerHTML=Pt),jn=r(eo),b(de.$$.fragment,eo),jt=r(eo),b(Ft.$$.fragment,eo),Zn=r(eo),b($e.$$.fragment,eo),eo.forEach(i),zt.forEach(i),mt=r(h),b(Vt.$$.fragment,h),Fn=r(h),S=d(h,"DIV",{class:!0});var yn=N(S);b(Le.$$.fragment,yn),gn=r(yn),Rt=d(yn,"P",{"data-svelte-h":!0}),m(Rt)!=="svelte-axso2c"&&(Rt.textContent=Pe),Jn=r(yn),nt=d(yn,"P",{"data-svelte-h":!0}),m(nt)!=="svelte-x53t1u"&&(nt.innerHTML=Xt),en=r(yn),Ve=d(yn,"P",{"data-svelte-h":!0}),m(Ve)!=="svelte-1be7e3c"&&(Ve.innerHTML=ze),Yn=r(yn),b(B.$$.fragment,yn),_n=r(yn),be=d(yn,"DIV",{class:!0});var at=N(be);b(Te.$$.fragment,at),me=r(at),Jt=d(at,"P",{"data-svelte-h":!0}),m(Jt)!=="svelte-1s4uer7"&&(Jt.innerHTML=tn),Dn=r(at),b(nn.$$.fragment,at),ut=r(at),b(ht.$$.fragment,at),at.forEach(i),yn.forEach(i),Nn=r(h),b(ft.$$.fragment,h),f=r(h),J=d(h,"DIV",{class:!0});var Tt=N(J);b(ue.$$.fragment,Tt),Y=r(Tt),ve=d(Tt,"P",{"data-svelte-h":!0}),m(ve)!=="svelte-olqnpn"&&(ve.textContent=Ue),Ie=r(Tt),On=d(Tt,"P",{"data-svelte-h":!0}),m(On)!=="svelte-x53t1u"&&(On.innerHTML=Ct),At=r(Tt),gt=d(Tt,"P",{"data-svelte-h":!0}),m(gt)!=="svelte-1be7e3c"&&(gt.innerHTML=Re),Ln=r(Tt),b(Xe.$$.fragment,Tt),go=r(Tt),X=d(Tt,"DIV",{class:!0});var Vn=N(X);b(on.$$.fragment,Vn),qe=r(Vn),Qt=d(Vn,"P",{"data-svelte-h":!0}),m(Qt)!=="svelte-v2e5vz"&&(Qt.innerHTML=Co),io=r(Vn),b(Cn.$$.fragment,Vn),xo=r(Vn),b(bn.$$.fragment,Vn),_o=r(Vn),b(oo.$$.fragment,Vn),Vn.forEach(i),Tt.forEach(i),so=r(h),b(_t.$$.fragment,h),Kn=r(h),xe=d(h,"DIV",{class:!0});var Ut=N(xe);b(Bn.$$.fragment,Ut),jo=r(Ut),Gn=d(Ut,"P",{"data-svelte-h":!0}),m(Gn)!=="svelte-72qmgu"&&(Gn.innerHTML=lo),To=r(Ut),je=d(Ut,"P",{"data-svelte-h":!0}),m(je)!=="svelte-x53t1u"&&(je.innerHTML=ao),$=r(Ut),C=d(Ut,"P",{"data-svelte-h":!0}),m(C)!=="svelte-1be7e3c"&&(C.innerHTML=Hn),Et=r(Ut),b(ye.$$.fragment,Ut),St=r(Ut),D=d(Ut,"DIV",{class:!0});var to=N(D);b(Be.$$.fragment,to),Qe=r(to),Ee=d(to,"P",{"data-svelte-h":!0}),m(Ee)!=="svelte-1bu9hxx"&&(Ee.innerHTML=se),Se=r(to),b(ot.$$.fragment,to),st=r(to),b(bt.$$.fragment,to),Fo=r(to),b(An.$$.fragment,to),to.forEach(i),Ut.forEach(i),this.h()},h(){Z(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(h,j){T(e,h,j),c(h,p,j),c(h,n,j),T(o,n,null),s(n,g),s(n,t),s(n,ee),s(n,q),s(n,Q),s(n,I),s(n,E),T(u,n,null),s(n,F),s(n,Ge),T(ge,Ge,null),s(Ge,bo),s(Ge,rn),s(Ge,Mn),T(We,Ge,null),s(Ge,rt),T(yt,Ge,null),c(h,kn,j),T(P,h,j),c(h,It,j),c(h,R,j),T(Mt,R,null),s(R,ln),s(R,it),s(R,kt),s(R,In),s(R,qn),s(R,dn),s(R,wt),T(Yt,R,null),s(R,Ye),s(R,Wt),T(cn,Wt,null),s(Wt,Ze),s(Wt,Sn),s(Wt,De),T(Oe,Wt,null),s(Wt,Dt),T(G,Wt,null),c(h,V,j),T(lt,h,j),c(h,$t,j),c(h,ce,j),T(wn,ce,null),s(ce,dt),s(ce,Ot),s(ce,mn),s(ce,ke),s(ce,H),s(ce,_e),s(ce,Zt),T(Nt,ce,null),s(ce,ro),s(ce,oe),T(ct,oe,null),s(oe,Ke),s(oe,Lt),s(oe,no),T(Je,oe,null),s(oe,et),T(K,oe,null),s(oe,vt),T(xt,oe,null),c(h,vn,j),T(Ce,h,j),c(h,He,j),c(h,ie,j),T(tt,ie,null),s(ie,fo),s(ie,Gt),s(ie,hn),s(ie,te),s(ie,Kt),s(ie,le),s(ie,fn),T(we,ie,null),s(ie,Wn),s(ie,pe),T(Ne,pe,null),s(pe,Ae),s(pe,xn),s(pe,jn),T(de,pe,null),s(pe,jt),T(Ft,pe,null),s(pe,Zn),T($e,pe,null),c(h,mt,j),T(Vt,h,j),c(h,Fn,j),c(h,S,j),T(Le,S,null),s(S,gn),s(S,Rt),s(S,Jn),s(S,nt),s(S,en),s(S,Ve),s(S,Yn),T(B,S,null),s(S,_n),s(S,be),T(Te,be,null),s(be,me),s(be,Jt),s(be,Dn),T(nn,be,null),s(be,ut),T(ht,be,null),c(h,Nn,j),T(ft,h,j),c(h,f,j),c(h,J,j),T(ue,J,null),s(J,Y),s(J,ve),s(J,Ie),s(J,On),s(J,At),s(J,gt),s(J,Ln),T(Xe,J,null),s(J,go),s(J,X),T(on,X,null),s(X,qe),s(X,Qt),s(X,io),T(Cn,X,null),s(X,xo),T(bn,X,null),s(X,_o),T(oo,X,null),c(h,so,j),T(_t,h,j),c(h,Kn,j),c(h,xe,j),T(Bn,xe,null),s(xe,jo),s(xe,Gn),s(xe,To),s(xe,je),s(xe,$),s(xe,C),s(xe,Et),T(ye,xe,null),s(xe,St),s(xe,D),T(Be,D,null),s(D,Qe),s(D,Ee),s(D,Se),T(ot,D,null),s(D,st),T(bt,D,null),s(D,Fo),T(An,D,null),Jo=!0},p(h,j){const co={};j&2&&(co.$$scope={dirty:j,ctx:h}),u.$set(co);const Tn={};j&2&&(Tn.$$scope={dirty:j,ctx:h}),We.$set(Tn);const zn={};j&2&&(zn.$$scope={dirty:j,ctx:h}),yt.$set(zn);const Un={};j&2&&(Un.$$scope={dirty:j,ctx:h}),Yt.$set(Un);const Pn={};j&2&&(Pn.$$scope={dirty:j,ctx:h}),Oe.$set(Pn);const zt={};j&2&&(zt.$$scope={dirty:j,ctx:h}),G.$set(zt);const eo={};j&2&&(eo.$$scope={dirty:j,ctx:h}),Nt.$set(eo);const yn={};j&2&&(yn.$$scope={dirty:j,ctx:h}),Je.$set(yn);const at={};j&2&&(at.$$scope={dirty:j,ctx:h}),K.$set(at);const Tt={};j&2&&(Tt.$$scope={dirty:j,ctx:h}),xt.$set(Tt);const Vn={};j&2&&(Vn.$$scope={dirty:j,ctx:h}),we.$set(Vn);const Ut={};j&2&&(Ut.$$scope={dirty:j,ctx:h}),de.$set(Ut);const to={};j&2&&(to.$$scope={dirty:j,ctx:h}),Ft.$set(to);const zo={};j&2&&(zo.$$scope={dirty:j,ctx:h}),$e.$set(zo);const yo={};j&2&&(yo.$$scope={dirty:j,ctx:h}),B.$set(yo);const Uo={};j&2&&(Uo.$$scope={dirty:j,ctx:h}),nn.$set(Uo);const Mo={};j&2&&(Mo.$$scope={dirty:j,ctx:h}),ht.$set(Mo);const Ao={};j&2&&(Ao.$$scope={dirty:j,ctx:h}),Xe.$set(Ao);const v={};j&2&&(v.$$scope={dirty:j,ctx:h}),Cn.$set(v);const A={};j&2&&(A.$$scope={dirty:j,ctx:h}),bn.$set(A);const po={};j&2&&(po.$$scope={dirty:j,ctx:h}),oo.$set(po);const sn={};j&2&&(sn.$$scope={dirty:j,ctx:h}),ye.$set(sn);const mo={};j&2&&(mo.$$scope={dirty:j,ctx:h}),ot.$set(mo);const an={};j&2&&(an.$$scope={dirty:j,ctx:h}),bt.$set(an);const uo={};j&2&&(uo.$$scope={dirty:j,ctx:h}),An.$set(uo)},i(h){Jo||(y(e.$$.fragment,h),y(o.$$.fragment,h),y(u.$$.fragment,h),y(ge.$$.fragment,h),y(We.$$.fragment,h),y(yt.$$.fragment,h),y(P.$$.fragment,h),y(Mt.$$.fragment,h),y(Yt.$$.fragment,h),y(cn.$$.fragment,h),y(Oe.$$.fragment,h),y(G.$$.fragment,h),y(lt.$$.fragment,h),y(wn.$$.fragment,h),y(Nt.$$.fragment,h),y(ct.$$.fragment,h),y(Je.$$.fragment,h),y(K.$$.fragment,h),y(xt.$$.fragment,h),y(Ce.$$.fragment,h),y(tt.$$.fragment,h),y(we.$$.fragment,h),y(Ne.$$.fragment,h),y(de.$$.fragment,h),y(Ft.$$.fragment,h),y($e.$$.fragment,h),y(Vt.$$.fragment,h),y(Le.$$.fragment,h),y(B.$$.fragment,h),y(Te.$$.fragment,h),y(nn.$$.fragment,h),y(ht.$$.fragment,h),y(ft.$$.fragment,h),y(ue.$$.fragment,h),y(Xe.$$.fragment,h),y(on.$$.fragment,h),y(Cn.$$.fragment,h),y(bn.$$.fragment,h),y(oo.$$.fragment,h),y(_t.$$.fragment,h),y(Bn.$$.fragment,h),y(ye.$$.fragment,h),y(Be.$$.fragment,h),y(ot.$$.fragment,h),y(bt.$$.fragment,h),y(An.$$.fragment,h),Jo=!0)},o(h){M(e.$$.fragment,h),M(o.$$.fragment,h),M(u.$$.fragment,h),M(ge.$$.fragment,h),M(We.$$.fragment,h),M(yt.$$.fragment,h),M(P.$$.fragment,h),M(Mt.$$.fragment,h),M(Yt.$$.fragment,h),M(cn.$$.fragment,h),M(Oe.$$.fragment,h),M(G.$$.fragment,h),M(lt.$$.fragment,h),M(wn.$$.fragment,h),M(Nt.$$.fragment,h),M(ct.$$.fragment,h),M(Je.$$.fragment,h),M(K.$$.fragment,h),M(xt.$$.fragment,h),M(Ce.$$.fragment,h),M(tt.$$.fragment,h),M(we.$$.fragment,h),M(Ne.$$.fragment,h),M(de.$$.fragment,h),M(Ft.$$.fragment,h),M($e.$$.fragment,h),M(Vt.$$.fragment,h),M(Le.$$.fragment,h),M(B.$$.fragment,h),M(Te.$$.fragment,h),M(nn.$$.fragment,h),M(ht.$$.fragment,h),M(ft.$$.fragment,h),M(ue.$$.fragment,h),M(Xe.$$.fragment,h),M(on.$$.fragment,h),M(Cn.$$.fragment,h),M(bn.$$.fragment,h),M(oo.$$.fragment,h),M(_t.$$.fragment,h),M(Bn.$$.fragment,h),M(ye.$$.fragment,h),M(Be.$$.fragment,h),M(ot.$$.fragment,h),M(bt.$$.fragment,h),M(An.$$.fragment,h),Jo=!1},d(h){h&&(i(p),i(n),i(kn),i(It),i(R),i(V),i($t),i(ce),i(vn),i(He),i(ie),i(mt),i(Fn),i(S),i(Nn),i(f),i(J),i(so),i(Kn),i(xe)),k(e,h),k(o),k(u),k(ge),k(We),k(yt),k(P,h),k(Mt),k(Yt),k(cn),k(Oe),k(G),k(lt,h),k(wn),k(Nt),k(ct),k(Je),k(K),k(xt),k(Ce,h),k(tt),k(we),k(Ne),k(de),k(Ft),k($e),k(Vt,h),k(Le),k(B),k(Te),k(nn),k(ht),k(ft,h),k(ue),k(Xe),k(on),k(Cn),k(bn),k(oo),k(_t,h),k(Bn),k(ye),k(Be),k(ot),k(bt),k(An)}}}function qs(x){let e,p;return e=new Io({props:{$$slots:{default:[Is]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){T(e,n,o),p=!0},p(n,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:n}),e.$set(g)},i(n){p||(y(e.$$.fragment,n),p=!0)},o(n){M(e.$$.fragment,n),p=!1},d(n){k(e,n)}}}function Ws(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Zs(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0TW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhBbGJlcnRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Ns(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Ls(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yUHJlVHJhaW5pbmclMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhBbGJlcnRGb3JQcmVUcmFpbmluZy5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMucHJlZGljdGlvbl9sb2dpdHMlMEFzZXFfcmVsYXRpb25zaGlwX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMuc29wX2xvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Bs(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Gs(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yTWFza2VkTE0lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiUyQyUyMHJldmlzaW9uJTNEJTIycmVmcyUyRnByJTJGMTElMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4QWxiZXJ0Rm9yTWFza2VkTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyJTJDJTIwcmV2aXNpb24lM0QlMjJyZWZzJTJGcHIlMkYxMSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjAlNUJNQVNLJTVELiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>, revision=<span class="hljs-string">&quot;refs/pr/11&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>, revision=<span class="hljs-string">&quot;refs/pr/11&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Hs(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Ps(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheEFsYmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Vs(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Rs(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yTXVsdGlwbGVDaG9pY2UlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhBbGJlcnRGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglNUJwcm9tcHQlMkMlMjBwcm9tcHQlNUQlMkMlMjAlNUJjaG9pY2UwJTJDJTIwY2hvaWNlMSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqJTdCayUzQSUyMHYlNUJOb25lJTJDJTIwJTNBJTVEJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QpJTBBJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Xs(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Qs(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheEFsYmVydEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmFsYmVydCUyRmFsYmVydC1iYXNlLXYyJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Es(x){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=p},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,o){c(n,e,o)},p:W,d(n){n&&i(e)}}}function Ss(x){let e,p="Example:",n,o,g;return o=new fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QWxiZXJ0Rm9yUXVlc3Rpb25BbnN3ZXJpbmclMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGJlcnQlMkZhbGJlcnQtYmFzZS12MiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhBbGJlcnRGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyYWxiZXJ0JTJGYWxiZXJ0LWJhc2UtdjIlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQXN0YXJ0X3Njb3JlcyUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzJTBBZW5kX3Njb3JlcyUyMCUzRCUyMG91dHB1dHMuZW5kX2xvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAlbertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;albert/albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=p,n=a(),_(o.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-11lpom8"&&(e.textContent=p),n=r(t),b(o.$$.fragment,t)},m(t,w){c(t,e,w),c(t,n,w),T(o,t,w),g=!0},p:W,i(t){g||(y(o.$$.fragment,t),g=!0)},o(t){M(o.$$.fragment,t),g=!1},d(t){t&&(i(e),i(n)),k(o,t)}}}function Ys(x){let e,p,n,o,g,t,w="The bare Albert Model transformer outputting raw hidden-states without any specific head on top.",ee,q,z=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Q,I,U=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,E,u,F="Finally, this model supports inherent JAX features such as:",Ge,ge,bo='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',rn,re,Mn,We,rt,yt="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",kn,P,It,R,Mt,ln,it,ne,kt,In,qt,qn=`Albert Model with two heads on top as done during the pretraining: a <code>masked language modeling</code> head and a
<code>sentence order prediction (classification)</code> head.`,dn,O,wt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Yt,Ye,Wt=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,cn,Ze,Sn="Finally, this model supports inherent JAX features such as:",pn,De,Oe='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Dt,G,V,lt,$t,ce="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",wn,dt,Ot,$n,mn,ke,un,H,_e,ho,Zt,Nt="Albert Model with a <code>language modeling</code> head on top.",ro,oe,ct=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Ke,Lt,Bt=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,no,Je,et="Finally, this model supports inherent JAX features such as:",K,vt,xt='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',vn,Ce,He,ie,tt,fo="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Gt,Ht,hn,te,pt,Kt,le,ae,fn,we,Wn,pe=`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`,Ne,Ae,xn=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Pt,jn,de=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,jt,Ft,Zn="Finally, this model supports inherent JAX features such as:",$e,mt,Vt='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Fn,S,Le,gn,Rt,Pe="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Jn,nt,Xt,en,Ve,ze,Yn,B,_n,be,Te,me=`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,Jt,tn,Dn=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,nn,ut,ht=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Nn,ft,f="Finally, this model supports inherent JAX features such as:",J,ue,Y='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',ve,Ue,Ie,On,Ct,At="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",gt,Re,Ln,Xe,go,X,on,qe,Qt,Co,io,Cn=`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,xo,bn,_o=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,oo,so,_t=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Kn,xe,Bn="Finally, this model supports inherent JAX features such as:",jo,Gn,lo='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',To,je,ao,$,C,Hn="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Et,ye,St,D,Be,Qe,Ee,se,Se,ot,st,bt=`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Fo,An,Jo=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,h,j,co=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Tn,zn,Un="Finally, this model supports inherent JAX features such as:",Pn,zt,eo='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',yn,at,Tt,Vn,Ut,to="The <code>FlaxAlbertPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",zo,yo,Uo,Mo,Ao;return e=new Me({props:{title:"FlaxAlbertModel",local:"transformers.FlaxAlbertModel",headingTag:"h2"}}),o=new L({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L673"}}),Mn=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),P=new Fe({props:{$$slots:{default:[Ws]},$$scope:{ctx:x}}}),R=new he({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[Zs]},$$scope:{ctx:x}}}),ln=new Me({props:{title:"FlaxAlbertForPreTraining",local:"transformers.FlaxAlbertForPreTraining",headingTag:"h2"}}),kt=new L({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L738"}}),V=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
`}}),dt=new Fe({props:{$$slots:{default:[Ns]},$$scope:{ctx:x}}}),$n=new he({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[Ls]},$$scope:{ctx:x}}}),ke=new Me({props:{title:"FlaxAlbertForMaskedLM",local:"transformers.FlaxAlbertForMaskedLM",headingTag:"h2"}}),_e=new L({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L827"}}),He=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ht=new Fe({props:{$$slots:{default:[Bs]},$$scope:{ctx:x}}}),te=new he({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[Gs]},$$scope:{ctx:x}}}),Kt=new Me({props:{title:"FlaxAlbertForSequenceClassification",local:"transformers.FlaxAlbertForSequenceClassification",headingTag:"h2"}}),fn=new L({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L891"}}),Le=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nt=new Fe({props:{$$slots:{default:[Hs]},$$scope:{ctx:x}}}),en=new he({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[Ps]},$$scope:{ctx:x}}}),ze=new Me({props:{title:"FlaxAlbertForMultipleChoice",local:"transformers.FlaxAlbertForMultipleChoice",headingTag:"h2"}}),_n=new L({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L964"}}),Ie=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new Fe({props:{$$slots:{default:[Vs]},$$scope:{ctx:x}}}),Xe=new he({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[Rs]},$$scope:{ctx:x}}}),X=new Me({props:{title:"FlaxAlbertForTokenClassification",local:"transformers.FlaxAlbertForTokenClassification",headingTag:"h2"}}),Qt=new L({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L1037"}}),ao=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new Fe({props:{$$slots:{default:[Xs]},$$scope:{ctx:x}}}),D=new he({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[Qs]},$$scope:{ctx:x}}}),Qe=new Me({props:{title:"FlaxAlbertForQuestionAnswering",local:"transformers.FlaxAlbertForQuestionAnswering",headingTag:"h2"}}),Se=new L({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L1105"}}),Tt=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L554",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new Fe({props:{$$slots:{default:[Es]},$$scope:{ctx:x}}}),Mo=new he({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[Ss]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment),p=a(),n=l("div"),_(o.$$.fragment),g=a(),t=l("p"),t.textContent=w,ee=a(),q=l("p"),q.innerHTML=z,Q=a(),I=l("p"),I.innerHTML=U,E=a(),u=l("p"),u.textContent=F,Ge=a(),ge=l("ul"),ge.innerHTML=bo,rn=a(),re=l("div"),_(Mn.$$.fragment),We=a(),rt=l("p"),rt.innerHTML=yt,kn=a(),_(P.$$.fragment),It=a(),_(R.$$.fragment),Mt=a(),_(ln.$$.fragment),it=a(),ne=l("div"),_(kt.$$.fragment),In=a(),qt=l("p"),qt.innerHTML=qn,dn=a(),O=l("p"),O.innerHTML=wt,Yt=a(),Ye=l("p"),Ye.innerHTML=Wt,cn=a(),Ze=l("p"),Ze.textContent=Sn,pn=a(),De=l("ul"),De.innerHTML=Oe,Dt=a(),G=l("div"),_(V.$$.fragment),lt=a(),$t=l("p"),$t.innerHTML=ce,wn=a(),_(dt.$$.fragment),Ot=a(),_($n.$$.fragment),mn=a(),_(ke.$$.fragment),un=a(),H=l("div"),_(_e.$$.fragment),ho=a(),Zt=l("p"),Zt.innerHTML=Nt,ro=a(),oe=l("p"),oe.innerHTML=ct,Ke=a(),Lt=l("p"),Lt.innerHTML=Bt,no=a(),Je=l("p"),Je.textContent=et,K=a(),vt=l("ul"),vt.innerHTML=xt,vn=a(),Ce=l("div"),_(He.$$.fragment),ie=a(),tt=l("p"),tt.innerHTML=fo,Gt=a(),_(Ht.$$.fragment),hn=a(),_(te.$$.fragment),pt=a(),_(Kt.$$.fragment),le=a(),ae=l("div"),_(fn.$$.fragment),we=a(),Wn=l("p"),Wn.textContent=pe,Ne=a(),Ae=l("p"),Ae.innerHTML=xn,Pt=a(),jn=l("p"),jn.innerHTML=de,jt=a(),Ft=l("p"),Ft.textContent=Zn,$e=a(),mt=l("ul"),mt.innerHTML=Vt,Fn=a(),S=l("div"),_(Le.$$.fragment),gn=a(),Rt=l("p"),Rt.innerHTML=Pe,Jn=a(),_(nt.$$.fragment),Xt=a(),_(en.$$.fragment),Ve=a(),_(ze.$$.fragment),Yn=a(),B=l("div"),_(_n.$$.fragment),be=a(),Te=l("p"),Te.textContent=me,Jt=a(),tn=l("p"),tn.innerHTML=Dn,nn=a(),ut=l("p"),ut.innerHTML=ht,Nn=a(),ft=l("p"),ft.textContent=f,J=a(),ue=l("ul"),ue.innerHTML=Y,ve=a(),Ue=l("div"),_(Ie.$$.fragment),On=a(),Ct=l("p"),Ct.innerHTML=At,gt=a(),_(Re.$$.fragment),Ln=a(),_(Xe.$$.fragment),go=a(),_(X.$$.fragment),on=a(),qe=l("div"),_(Qt.$$.fragment),Co=a(),io=l("p"),io.textContent=Cn,xo=a(),bn=l("p"),bn.innerHTML=_o,oo=a(),so=l("p"),so.innerHTML=_t,Kn=a(),xe=l("p"),xe.textContent=Bn,jo=a(),Gn=l("ul"),Gn.innerHTML=lo,To=a(),je=l("div"),_(ao.$$.fragment),$=a(),C=l("p"),C.innerHTML=Hn,Et=a(),_(ye.$$.fragment),St=a(),_(D.$$.fragment),Be=a(),_(Qe.$$.fragment),Ee=a(),se=l("div"),_(Se.$$.fragment),ot=a(),st=l("p"),st.innerHTML=bt,Fo=a(),An=l("p"),An.innerHTML=Jo,h=a(),j=l("p"),j.innerHTML=co,Tn=a(),zn=l("p"),zn.textContent=Un,Pn=a(),zt=l("ul"),zt.innerHTML=eo,yn=a(),at=l("div"),_(Tt.$$.fragment),Vn=a(),Ut=l("p"),Ut.innerHTML=to,zo=a(),_(yo.$$.fragment),Uo=a(),_(Mo.$$.fragment),this.h()},l(v){b(e.$$.fragment,v),p=r(v),n=d(v,"DIV",{class:!0});var A=N(n);b(o.$$.fragment,A),g=r(A),t=d(A,"P",{"data-svelte-h":!0}),m(t)!=="svelte-psfqdt"&&(t.textContent=w),ee=r(A),q=d(A,"P",{"data-svelte-h":!0}),m(q)!=="svelte-99cpmj"&&(q.innerHTML=z),Q=r(A),I=d(A,"P",{"data-svelte-h":!0}),m(I)!=="svelte-10nfsf3"&&(I.innerHTML=U),E=r(A),u=d(A,"P",{"data-svelte-h":!0}),m(u)!=="svelte-1pplc4a"&&(u.textContent=F),Ge=r(A),ge=d(A,"UL",{"data-svelte-h":!0}),m(ge)!=="svelte-1w7z84m"&&(ge.innerHTML=bo),rn=r(A),re=d(A,"DIV",{class:!0});var po=N(re);b(Mn.$$.fragment,po),We=r(po),rt=d(po,"P",{"data-svelte-h":!0}),m(rt)!=="svelte-hsqakh"&&(rt.innerHTML=yt),kn=r(po),b(P.$$.fragment,po),It=r(po),b(R.$$.fragment,po),po.forEach(i),A.forEach(i),Mt=r(v),b(ln.$$.fragment,v),it=r(v),ne=d(v,"DIV",{class:!0});var sn=N(ne);b(kt.$$.fragment,sn),In=r(sn),qt=d(sn,"P",{"data-svelte-h":!0}),m(qt)!=="svelte-1qm9vpn"&&(qt.innerHTML=qn),dn=r(sn),O=d(sn,"P",{"data-svelte-h":!0}),m(O)!=="svelte-99cpmj"&&(O.innerHTML=wt),Yt=r(sn),Ye=d(sn,"P",{"data-svelte-h":!0}),m(Ye)!=="svelte-10nfsf3"&&(Ye.innerHTML=Wt),cn=r(sn),Ze=d(sn,"P",{"data-svelte-h":!0}),m(Ze)!=="svelte-1pplc4a"&&(Ze.textContent=Sn),pn=r(sn),De=d(sn,"UL",{"data-svelte-h":!0}),m(De)!=="svelte-1w7z84m"&&(De.innerHTML=Oe),Dt=r(sn),G=d(sn,"DIV",{class:!0});var mo=N(G);b(V.$$.fragment,mo),lt=r(mo),$t=d(mo,"P",{"data-svelte-h":!0}),m($t)!=="svelte-hsqakh"&&($t.innerHTML=ce),wn=r(mo),b(dt.$$.fragment,mo),Ot=r(mo),b($n.$$.fragment,mo),mo.forEach(i),sn.forEach(i),mn=r(v),b(ke.$$.fragment,v),un=r(v),H=d(v,"DIV",{class:!0});var an=N(H);b(_e.$$.fragment,an),ho=r(an),Zt=d(an,"P",{"data-svelte-h":!0}),m(Zt)!=="svelte-q4kelk"&&(Zt.innerHTML=Nt),ro=r(an),oe=d(an,"P",{"data-svelte-h":!0}),m(oe)!=="svelte-99cpmj"&&(oe.innerHTML=ct),Ke=r(an),Lt=d(an,"P",{"data-svelte-h":!0}),m(Lt)!=="svelte-10nfsf3"&&(Lt.innerHTML=Bt),no=r(an),Je=d(an,"P",{"data-svelte-h":!0}),m(Je)!=="svelte-1pplc4a"&&(Je.textContent=et),K=r(an),vt=d(an,"UL",{"data-svelte-h":!0}),m(vt)!=="svelte-1w7z84m"&&(vt.innerHTML=xt),vn=r(an),Ce=d(an,"DIV",{class:!0});var uo=N(Ce);b(He.$$.fragment,uo),ie=r(uo),tt=d(uo,"P",{"data-svelte-h":!0}),m(tt)!=="svelte-hsqakh"&&(tt.innerHTML=fo),Gt=r(uo),b(Ht.$$.fragment,uo),hn=r(uo),b(te.$$.fragment,uo),uo.forEach(i),an.forEach(i),pt=r(v),b(Kt.$$.fragment,v),le=r(v),ae=d(v,"DIV",{class:!0});var Rn=N(ae);b(fn.$$.fragment,Rn),we=r(Rn),Wn=d(Rn,"P",{"data-svelte-h":!0}),m(Wn)!=="svelte-1wuvovs"&&(Wn.textContent=pe),Ne=r(Rn),Ae=d(Rn,"P",{"data-svelte-h":!0}),m(Ae)!=="svelte-99cpmj"&&(Ae.innerHTML=xn),Pt=r(Rn),jn=d(Rn,"P",{"data-svelte-h":!0}),m(jn)!=="svelte-10nfsf3"&&(jn.innerHTML=de),jt=r(Rn),Ft=d(Rn,"P",{"data-svelte-h":!0}),m(Ft)!=="svelte-1pplc4a"&&(Ft.textContent=Zn),$e=r(Rn),mt=d(Rn,"UL",{"data-svelte-h":!0}),m(mt)!=="svelte-1w7z84m"&&(mt.innerHTML=Vt),Fn=r(Rn),S=d(Rn,"DIV",{class:!0});var ko=N(S);b(Le.$$.fragment,ko),gn=r(ko),Rt=d(ko,"P",{"data-svelte-h":!0}),m(Rt)!=="svelte-hsqakh"&&(Rt.innerHTML=Pe),Jn=r(ko),b(nt.$$.fragment,ko),Xt=r(ko),b(en.$$.fragment,ko),ko.forEach(i),Rn.forEach(i),Ve=r(v),b(ze.$$.fragment,v),Yn=r(v),B=d(v,"DIV",{class:!0});var Xn=N(B);b(_n.$$.fragment,Xn),be=r(Xn),Te=d(Xn,"P",{"data-svelte-h":!0}),m(Te)!=="svelte-axso2c"&&(Te.textContent=me),Jt=r(Xn),tn=d(Xn,"P",{"data-svelte-h":!0}),m(tn)!=="svelte-99cpmj"&&(tn.innerHTML=Dn),nn=r(Xn),ut=d(Xn,"P",{"data-svelte-h":!0}),m(ut)!=="svelte-10nfsf3"&&(ut.innerHTML=ht),Nn=r(Xn),ft=d(Xn,"P",{"data-svelte-h":!0}),m(ft)!=="svelte-1pplc4a"&&(ft.textContent=f),J=r(Xn),ue=d(Xn,"UL",{"data-svelte-h":!0}),m(ue)!=="svelte-1w7z84m"&&(ue.innerHTML=Y),ve=r(Xn),Ue=d(Xn,"DIV",{class:!0});var wo=N(Ue);b(Ie.$$.fragment,wo),On=r(wo),Ct=d(wo,"P",{"data-svelte-h":!0}),m(Ct)!=="svelte-hsqakh"&&(Ct.innerHTML=At),gt=r(wo),b(Re.$$.fragment,wo),Ln=r(wo),b(Xe.$$.fragment,wo),wo.forEach(i),Xn.forEach(i),go=r(v),b(X.$$.fragment,v),on=r(v),qe=d(v,"DIV",{class:!0});var Qn=N(qe);b(Qt.$$.fragment,Qn),Co=r(Qn),io=d(Qn,"P",{"data-svelte-h":!0}),m(io)!=="svelte-olqnpn"&&(io.textContent=Cn),xo=r(Qn),bn=d(Qn,"P",{"data-svelte-h":!0}),m(bn)!=="svelte-99cpmj"&&(bn.innerHTML=_o),oo=r(Qn),so=d(Qn,"P",{"data-svelte-h":!0}),m(so)!=="svelte-10nfsf3"&&(so.innerHTML=_t),Kn=r(Qn),xe=d(Qn,"P",{"data-svelte-h":!0}),m(xe)!=="svelte-1pplc4a"&&(xe.textContent=Bn),jo=r(Qn),Gn=d(Qn,"UL",{"data-svelte-h":!0}),m(Gn)!=="svelte-1w7z84m"&&(Gn.innerHTML=lo),To=r(Qn),je=d(Qn,"DIV",{class:!0});var $o=N(je);b(ao.$$.fragment,$o),$=r($o),C=d($o,"P",{"data-svelte-h":!0}),m(C)!=="svelte-hsqakh"&&(C.innerHTML=Hn),Et=r($o),b(ye.$$.fragment,$o),St=r($o),b(D.$$.fragment,$o),$o.forEach(i),Qn.forEach(i),Be=r(v),b(Qe.$$.fragment,v),Ee=r(v),se=d(v,"DIV",{class:!0});var En=N(se);b(Se.$$.fragment,En),ot=r(En),st=d(En,"P",{"data-svelte-h":!0}),m(st)!=="svelte-v56eal"&&(st.innerHTML=bt),Fo=r(En),An=d(En,"P",{"data-svelte-h":!0}),m(An)!=="svelte-99cpmj"&&(An.innerHTML=Jo),h=r(En),j=d(En,"P",{"data-svelte-h":!0}),m(j)!=="svelte-10nfsf3"&&(j.innerHTML=co),Tn=r(En),zn=d(En,"P",{"data-svelte-h":!0}),m(zn)!=="svelte-1pplc4a"&&(zn.textContent=Un),Pn=r(En),zt=d(En,"UL",{"data-svelte-h":!0}),m(zt)!=="svelte-1w7z84m"&&(zt.innerHTML=eo),yn=r(En),at=d(En,"DIV",{class:!0});var vo=N(at);b(Tt.$$.fragment,vo),Vn=r(vo),Ut=d(vo,"P",{"data-svelte-h":!0}),m(Ut)!=="svelte-hsqakh"&&(Ut.innerHTML=to),zo=r(vo),b(yo.$$.fragment,vo),Uo=r(vo),b(Mo.$$.fragment,vo),vo.forEach(i),En.forEach(i),this.h()},h(){Z(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(v,A){T(e,v,A),c(v,p,A),c(v,n,A),T(o,n,null),s(n,g),s(n,t),s(n,ee),s(n,q),s(n,Q),s(n,I),s(n,E),s(n,u),s(n,Ge),s(n,ge),s(n,rn),s(n,re),T(Mn,re,null),s(re,We),s(re,rt),s(re,kn),T(P,re,null),s(re,It),T(R,re,null),c(v,Mt,A),T(ln,v,A),c(v,it,A),c(v,ne,A),T(kt,ne,null),s(ne,In),s(ne,qt),s(ne,dn),s(ne,O),s(ne,Yt),s(ne,Ye),s(ne,cn),s(ne,Ze),s(ne,pn),s(ne,De),s(ne,Dt),s(ne,G),T(V,G,null),s(G,lt),s(G,$t),s(G,wn),T(dt,G,null),s(G,Ot),T($n,G,null),c(v,mn,A),T(ke,v,A),c(v,un,A),c(v,H,A),T(_e,H,null),s(H,ho),s(H,Zt),s(H,ro),s(H,oe),s(H,Ke),s(H,Lt),s(H,no),s(H,Je),s(H,K),s(H,vt),s(H,vn),s(H,Ce),T(He,Ce,null),s(Ce,ie),s(Ce,tt),s(Ce,Gt),T(Ht,Ce,null),s(Ce,hn),T(te,Ce,null),c(v,pt,A),T(Kt,v,A),c(v,le,A),c(v,ae,A),T(fn,ae,null),s(ae,we),s(ae,Wn),s(ae,Ne),s(ae,Ae),s(ae,Pt),s(ae,jn),s(ae,jt),s(ae,Ft),s(ae,$e),s(ae,mt),s(ae,Fn),s(ae,S),T(Le,S,null),s(S,gn),s(S,Rt),s(S,Jn),T(nt,S,null),s(S,Xt),T(en,S,null),c(v,Ve,A),T(ze,v,A),c(v,Yn,A),c(v,B,A),T(_n,B,null),s(B,be),s(B,Te),s(B,Jt),s(B,tn),s(B,nn),s(B,ut),s(B,Nn),s(B,ft),s(B,J),s(B,ue),s(B,ve),s(B,Ue),T(Ie,Ue,null),s(Ue,On),s(Ue,Ct),s(Ue,gt),T(Re,Ue,null),s(Ue,Ln),T(Xe,Ue,null),c(v,go,A),T(X,v,A),c(v,on,A),c(v,qe,A),T(Qt,qe,null),s(qe,Co),s(qe,io),s(qe,xo),s(qe,bn),s(qe,oo),s(qe,so),s(qe,Kn),s(qe,xe),s(qe,jo),s(qe,Gn),s(qe,To),s(qe,je),T(ao,je,null),s(je,$),s(je,C),s(je,Et),T(ye,je,null),s(je,St),T(D,je,null),c(v,Be,A),T(Qe,v,A),c(v,Ee,A),c(v,se,A),T(Se,se,null),s(se,ot),s(se,st),s(se,Fo),s(se,An),s(se,h),s(se,j),s(se,Tn),s(se,zn),s(se,Pn),s(se,zt),s(se,yn),s(se,at),T(Tt,at,null),s(at,Vn),s(at,Ut),s(at,zo),T(yo,at,null),s(at,Uo),T(Mo,at,null),Ao=!0},p(v,A){const po={};A&2&&(po.$$scope={dirty:A,ctx:v}),P.$set(po);const sn={};A&2&&(sn.$$scope={dirty:A,ctx:v}),R.$set(sn);const mo={};A&2&&(mo.$$scope={dirty:A,ctx:v}),dt.$set(mo);const an={};A&2&&(an.$$scope={dirty:A,ctx:v}),$n.$set(an);const uo={};A&2&&(uo.$$scope={dirty:A,ctx:v}),Ht.$set(uo);const Rn={};A&2&&(Rn.$$scope={dirty:A,ctx:v}),te.$set(Rn);const ko={};A&2&&(ko.$$scope={dirty:A,ctx:v}),nt.$set(ko);const Xn={};A&2&&(Xn.$$scope={dirty:A,ctx:v}),en.$set(Xn);const wo={};A&2&&(wo.$$scope={dirty:A,ctx:v}),Re.$set(wo);const Qn={};A&2&&(Qn.$$scope={dirty:A,ctx:v}),Xe.$set(Qn);const $o={};A&2&&($o.$$scope={dirty:A,ctx:v}),ye.$set($o);const En={};A&2&&(En.$$scope={dirty:A,ctx:v}),D.$set(En);const vo={};A&2&&(vo.$$scope={dirty:A,ctx:v}),yo.$set(vo);const qo={};A&2&&(qo.$$scope={dirty:A,ctx:v}),Mo.$set(qo)},i(v){Ao||(y(e.$$.fragment,v),y(o.$$.fragment,v),y(Mn.$$.fragment,v),y(P.$$.fragment,v),y(R.$$.fragment,v),y(ln.$$.fragment,v),y(kt.$$.fragment,v),y(V.$$.fragment,v),y(dt.$$.fragment,v),y($n.$$.fragment,v),y(ke.$$.fragment,v),y(_e.$$.fragment,v),y(He.$$.fragment,v),y(Ht.$$.fragment,v),y(te.$$.fragment,v),y(Kt.$$.fragment,v),y(fn.$$.fragment,v),y(Le.$$.fragment,v),y(nt.$$.fragment,v),y(en.$$.fragment,v),y(ze.$$.fragment,v),y(_n.$$.fragment,v),y(Ie.$$.fragment,v),y(Re.$$.fragment,v),y(Xe.$$.fragment,v),y(X.$$.fragment,v),y(Qt.$$.fragment,v),y(ao.$$.fragment,v),y(ye.$$.fragment,v),y(D.$$.fragment,v),y(Qe.$$.fragment,v),y(Se.$$.fragment,v),y(Tt.$$.fragment,v),y(yo.$$.fragment,v),y(Mo.$$.fragment,v),Ao=!0)},o(v){M(e.$$.fragment,v),M(o.$$.fragment,v),M(Mn.$$.fragment,v),M(P.$$.fragment,v),M(R.$$.fragment,v),M(ln.$$.fragment,v),M(kt.$$.fragment,v),M(V.$$.fragment,v),M(dt.$$.fragment,v),M($n.$$.fragment,v),M(ke.$$.fragment,v),M(_e.$$.fragment,v),M(He.$$.fragment,v),M(Ht.$$.fragment,v),M(te.$$.fragment,v),M(Kt.$$.fragment,v),M(fn.$$.fragment,v),M(Le.$$.fragment,v),M(nt.$$.fragment,v),M(en.$$.fragment,v),M(ze.$$.fragment,v),M(_n.$$.fragment,v),M(Ie.$$.fragment,v),M(Re.$$.fragment,v),M(Xe.$$.fragment,v),M(X.$$.fragment,v),M(Qt.$$.fragment,v),M(ao.$$.fragment,v),M(ye.$$.fragment,v),M(D.$$.fragment,v),M(Qe.$$.fragment,v),M(Se.$$.fragment,v),M(Tt.$$.fragment,v),M(yo.$$.fragment,v),M(Mo.$$.fragment,v),Ao=!1},d(v){v&&(i(p),i(n),i(Mt),i(it),i(ne),i(mn),i(un),i(H),i(pt),i(le),i(ae),i(Ve),i(Yn),i(B),i(go),i(on),i(qe),i(Be),i(Ee),i(se)),k(e,v),k(o),k(Mn),k(P),k(R),k(ln,v),k(kt),k(V),k(dt),k($n),k(ke,v),k(_e),k(He),k(Ht),k(te),k(Kt,v),k(fn),k(Le),k(nt),k(en),k(ze,v),k(_n),k(Ie),k(Re),k(Xe),k(X,v),k(Qt),k(ao),k(ye),k(D),k(Qe,v),k(Se),k(Tt),k(yo),k(Mo)}}}function Ds(x){let e,p;return e=new Io({props:{$$slots:{default:[Ys]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){T(e,n,o),p=!0},p(n,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:n}),e.$set(g)},i(n){p||(y(e.$$.fragment,n),p=!0)},o(n){M(e.$$.fragment,n),p=!1},d(n){k(e,n)}}}function Os(x){let e,p,n,o,g,t,w,ee='<a href="https://huggingface.co/models?filter=albert"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-albert-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/albert-base-v2"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a>',q,z,Q,I,U='ALBERTモデルは、「<a href="https://arxiv.org/abs/1909.11942" rel="nofollow">ALBERT: A Lite BERT for Self-supervised Learning of Language Representations</a>」という論文でZhenzhong Lan、Mingda Chen、Sebastian Goodman、Kevin Gimpel、Piyush Sharma、Radu Soricutによって提案されました。BERTのメモリ消費を減らしトレーニングを高速化するためのパラメータ削減技術を2つ示しています：',E,u,F="<li>埋め込み行列を2つの小さな行列に分割する。</li> <li>グループ間で分割された繰り返し層を使用する。</li>",Ge,ge,bo="論文の要旨は以下の通りです：",rn,re,Mn="<em>自然言語表現の事前学習時にモデルのサイズを増やすと、下流タスクのパフォーマンスが向上することがしばしばあります。しかし、ある時点でさらなるモデルの増大は、GPU/TPUのメモリ制限、長い訓練時間、予期せぬモデルの劣化といった問題のために困難になります。これらの問題に対処するために、我々はBERTのメモリ消費を低減し、訓練速度を高めるための2つのパラメータ削減技術を提案します。包括的な実証的証拠は、我々の提案方法が元のBERTに比べてはるかによくスケールするモデルを生み出すことを示しています。また、文間の一貫性をモデリングに焦点を当てた自己教師あり損失を使用し、複数の文が含まれる下流タスクに一貫して助けとなることを示します。その結果、我々の最良のモデルは、BERT-largeに比べてパラメータが少ないにもかかわらず、GLUE、RACE、SQuADベンチマークで新たな最先端の結果を確立します。</em>",We,rt,yt='このモデルは<a href="https://huggingface.co/lysandre" rel="nofollow">lysandre</a>により提供されました。このモデルのjaxバージョンは<a href="https://huggingface.co/kamalkraj" rel="nofollow">kamalkraj</a>により提供されました。オリジナルのコードは<a href="https://github.com/google-research/ALBERT" rel="nofollow">こちら</a>で見ることができます。',kn,P,It,R,Mt="<li>ALBERTは絶対位置埋め込みを使用するモデルなので、通常、入力を左側ではなく右側にパディングすることが推奨されます。</li> <li>ALBERTは繰り返し層を使用するためメモリ使用量は小さくなりますが、同じ数の（繰り返し）層を反復しなければならないため、隠れ層の数が同じであればBERTのようなアーキテクチャと同様の計算コストがかかります。</li> <li>埋め込みサイズEは隠れサイズHと異なりますが、これは埋め込みが文脈に依存しない（一つの埋め込みベクトルが一つのトークンを表す）のに対し、隠れ状態は文脈に依存する（1つの隠れ状態がトークン系列を表す）ため、H &gt;&gt; Eとすることがより論理的です。また、埋め込み行列のサイズはV x Eと大きいです（Vは語彙サイズ）。E &lt; Hであれば、パラメータは少なくなります。</li> <li>層はパラメータを共有するグループに分割されています（メモリ節約のため）。次文予測（NSP: Next Sentence Prediction）は文の順序予測に置き換えられます：入力では、2つの文AとB（それらは連続している）があり、Aに続いてBを与えるか、Bに続いてAを与えます。モデルはそれらが入れ替わっているかどうかを予測する必要があります。</li>",ln,it,ne,kt,In='<li><a href="../tasks/sequence_classification">テキスト分類タスクガイド</a></li> <li><a href="../tasks/token_classification">トークン分類タスクガイド</a></li> <li><a href="../tasks/question_answering">質問応答タスクガイド</a></li> <li><a href="../tasks/masked_language_modeling">マスクされた言語モデルタスクガイド</a></li> <li><a href="../tasks/multiple_choice">多肢選択タスクガイド</a></li>',qt,qn,dn,O,wt,Yt,Ye,Wt=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or a <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
<a href="https://huggingface.co/albert/albert-xxlarge-v2" rel="nofollow">albert/albert-xxlarge-v2</a> architecture.`,cn,Ze,Sn=`Configuration objects inherit from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,pn,De,Oe,Dt,G,V,lt,$t,ce,wn='Construct an ALBERT tokenizer. Based on <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.',dt,Ot,$n=`This tokenizer inherits from <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,mn,ke,un,H,_e,ho=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`,Zt,Nt,ro="<li>single sequence: <code>[CLS] X [SEP]</code></li> <li>pair of sequences: <code>[CLS] A [SEP] B [SEP]</code></li>",oe,ct,Ke,Lt,Bt,no=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,Je,et,K,vt,xt,vn="Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT",Ce,He,ie,tt,fo="If <code>token_ids_1</code> is <code>None</code>, this method only returns the first portion of the mask (0s).",Gt,Ht,hn,te,pt,Kt,le,ae,fn,we,Wn=`Construct a “fast” ALBERT tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on
<a href="https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models" rel="nofollow">Unigram</a>. This
tokenizer inherits from <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`,pe,Ne,Ae,xn,Pt,jn=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`,de,jt,Ft="<li>single sequence: <code>[CLS] X [SEP]</code></li> <li>pair of sequences: <code>[CLS] A [SEP] B [SEP]</code></li>",Zn,$e,mt,Vt,Fn,S="Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT",Le,gn,Rt,Pe,Jn="if token_ids_1 is None, only returns the first portion of the mask (0s).",nt,Xt,en,Ve,ze,Yn,B,_n='Output type of <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertForPreTraining">AlbertForPreTraining</a>.',be,Te,me,Jt,tn,Dn='Output type of <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertForPreTraining">TFAlbertForPreTraining</a>.',nn,ut,ht,Nn,ft;return g=new Me({props:{title:"ALBERT",local:"albert",headingTag:"h1"}}),z=new Me({props:{title:"概要",local:"概要",headingTag:"h2"}}),P=new Me({props:{title:"使用上のヒント",local:"使用上のヒント",headingTag:"h2"}}),it=new Me({props:{title:"参考資料",local:"参考資料",headingTag:"h2"}}),qn=new Me({props:{title:"AlbertConfig",local:"transformers.AlbertConfig",headingTag:"h2"}}),wt=new L({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
Vocabulary size of the ALBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"vocab_size"},{anchor:"transformers.AlbertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/ja/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/main/ja/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.AlbertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
End of stream token id.`,name:"eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/configuration_albert.py#L36"}}),De=new he({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[Ho]},$$scope:{ctx:x}}}),Dt=new Me({props:{title:"AlbertTokenizer",local:"transformers.AlbertTokenizer",headingTag:"h2"}}),lt=new L({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L59"}}),un=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L273",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ke=new L({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L298",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),K=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L326",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),He=new he({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Po]},$$scope:{ctx:x}}}),hn=new L({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L356"}}),pt=new Me({props:{title:"AlbertTokenizerFast",local:"transformers.AlbertTokenizerFast",headingTag:"h2"}}),ae=new L({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),Ae=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L173",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),mt=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L198",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),gn=new he({props:{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Vo]},$$scope:{ctx:x}}}),Xt=new Me({props:{title:"Albert specific outputs",local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",headingTag:"h2"}}),ze=new L({props:{name:"class transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"sop_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L530"}}),me=new L({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": tf.Tensor = None"},{name:"prediction_logits",val:": tf.Tensor = None"},{name:"sop_logits",val:": tf.Tensor = None"},{name:"hidden_states",val:": Tuple[tf.Tensor] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor] | None = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L741"}}),ut=new Go({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Ds],tensorflow:[qs],pytorch:[ls]},$$scope:{ctx:x}}}),{c(){e=l("meta"),p=a(),n=l("p"),o=a(),_(g.$$.fragment),t=a(),w=l("div"),w.innerHTML=ee,q=a(),_(z.$$.fragment),Q=a(),I=l("p"),I.innerHTML=U,E=a(),u=l("ul"),u.innerHTML=F,Ge=a(),ge=l("p"),ge.textContent=bo,rn=a(),re=l("p"),re.innerHTML=Mn,We=a(),rt=l("p"),rt.innerHTML=yt,kn=a(),_(P.$$.fragment),It=a(),R=l("ul"),R.innerHTML=Mt,ln=a(),_(it.$$.fragment),ne=a(),kt=l("ul"),kt.innerHTML=In,qt=a(),_(qn.$$.fragment),dn=a(),O=l("div"),_(wt.$$.fragment),Yt=a(),Ye=l("p"),Ye.innerHTML=Wt,cn=a(),Ze=l("p"),Ze.innerHTML=Sn,pn=a(),_(De.$$.fragment),Oe=a(),_(Dt.$$.fragment),G=a(),V=l("div"),_(lt.$$.fragment),$t=a(),ce=l("p"),ce.innerHTML=wn,dt=a(),Ot=l("p"),Ot.innerHTML=$n,mn=a(),ke=l("div"),_(un.$$.fragment),H=a(),_e=l("p"),_e.textContent=ho,Zt=a(),Nt=l("ul"),Nt.innerHTML=ro,oe=a(),ct=l("div"),_(Ke.$$.fragment),Lt=a(),Bt=l("p"),Bt.innerHTML=no,Je=a(),et=l("div"),_(K.$$.fragment),vt=a(),xt=l("p"),xt.textContent=vn,Ce=a(),_(He.$$.fragment),ie=a(),tt=l("p"),tt.innerHTML=fo,Gt=a(),Ht=l("div"),_(hn.$$.fragment),te=a(),_(pt.$$.fragment),Kt=a(),le=l("div"),_(ae.$$.fragment),fn=a(),we=l("p"),we.innerHTML=Wn,pe=a(),Ne=l("div"),_(Ae.$$.fragment),xn=a(),Pt=l("p"),Pt.textContent=jn,de=a(),jt=l("ul"),jt.innerHTML=Ft,Zn=a(),$e=l("div"),_(mt.$$.fragment),Vt=a(),Fn=l("p"),Fn.textContent=S,Le=a(),_(gn.$$.fragment),Rt=a(),Pe=l("p"),Pe.textContent=Jn,nt=a(),_(Xt.$$.fragment),en=a(),Ve=l("div"),_(ze.$$.fragment),Yn=a(),B=l("p"),B.innerHTML=_n,be=a(),Te=l("div"),_(me.$$.fragment),Jt=a(),tn=l("p"),tn.innerHTML=Dn,nn=a(),_(ut.$$.fragment),ht=a(),Nn=l("p"),this.h()},l(f){const J=Bo("svelte-u9bgzb",document.head);e=d(J,"META",{name:!0,content:!0}),J.forEach(i),p=r(f),n=d(f,"P",{}),N(n).forEach(i),o=r(f),b(g.$$.fragment,f),t=r(f),w=d(f,"DIV",{class:!0,"data-svelte-h":!0}),m(w)!=="svelte-h0ieyw"&&(w.innerHTML=ee),q=r(f),b(z.$$.fragment,f),Q=r(f),I=d(f,"P",{"data-svelte-h":!0}),m(I)!=="svelte-krivuc"&&(I.innerHTML=U),E=r(f),u=d(f,"UL",{"data-svelte-h":!0}),m(u)!=="svelte-1hljyw"&&(u.innerHTML=F),Ge=r(f),ge=d(f,"P",{"data-svelte-h":!0}),m(ge)!=="svelte-1pvwld5"&&(ge.textContent=bo),rn=r(f),re=d(f,"P",{"data-svelte-h":!0}),m(re)!=="svelte-1hik41h"&&(re.innerHTML=Mn),We=r(f),rt=d(f,"P",{"data-svelte-h":!0}),m(rt)!=="svelte-13s7uss"&&(rt.innerHTML=yt),kn=r(f),b(P.$$.fragment,f),It=r(f),R=d(f,"UL",{"data-svelte-h":!0}),m(R)!=="svelte-ubaa0y"&&(R.innerHTML=Mt),ln=r(f),b(it.$$.fragment,f),ne=r(f),kt=d(f,"UL",{"data-svelte-h":!0}),m(kt)!=="svelte-3iaive"&&(kt.innerHTML=In),qt=r(f),b(qn.$$.fragment,f),dn=r(f),O=d(f,"DIV",{class:!0});var ue=N(O);b(wt.$$.fragment,ue),Yt=r(ue),Ye=d(ue,"P",{"data-svelte-h":!0}),m(Ye)!=="svelte-dsuj68"&&(Ye.innerHTML=Wt),cn=r(ue),Ze=d(ue,"P",{"data-svelte-h":!0}),m(Ze)!=="svelte-1s6wgpv"&&(Ze.innerHTML=Sn),pn=r(ue),b(De.$$.fragment,ue),ue.forEach(i),Oe=r(f),b(Dt.$$.fragment,f),G=r(f),V=d(f,"DIV",{class:!0});var Y=N(V);b(lt.$$.fragment,Y),$t=r(Y),ce=d(Y,"P",{"data-svelte-h":!0}),m(ce)!=="svelte-15hj622"&&(ce.innerHTML=wn),dt=r(Y),Ot=d(Y,"P",{"data-svelte-h":!0}),m(Ot)!=="svelte-rs9us"&&(Ot.innerHTML=$n),mn=r(Y),ke=d(Y,"DIV",{class:!0});var ve=N(ke);b(un.$$.fragment,ve),H=r(ve),_e=d(ve,"P",{"data-svelte-h":!0}),m(_e)!=="svelte-1bnx1ll"&&(_e.textContent=ho),Zt=r(ve),Nt=d(ve,"UL",{"data-svelte-h":!0}),m(Nt)!=="svelte-xi6653"&&(Nt.innerHTML=ro),ve.forEach(i),oe=r(Y),ct=d(Y,"DIV",{class:!0});var Ue=N(ct);b(Ke.$$.fragment,Ue),Lt=r(Ue),Bt=d(Ue,"P",{"data-svelte-h":!0}),m(Bt)!=="svelte-1f4f5kp"&&(Bt.innerHTML=no),Ue.forEach(i),Je=r(Y),et=d(Y,"DIV",{class:!0});var Ie=N(et);b(K.$$.fragment,Ie),vt=r(Ie),xt=d(Ie,"P",{"data-svelte-h":!0}),m(xt)!=="svelte-1e96hgr"&&(xt.textContent=vn),Ce=r(Ie),b(He.$$.fragment,Ie),ie=r(Ie),tt=d(Ie,"P",{"data-svelte-h":!0}),m(tt)!=="svelte-owoxgn"&&(tt.innerHTML=fo),Ie.forEach(i),Gt=r(Y),Ht=d(Y,"DIV",{class:!0});var On=N(Ht);b(hn.$$.fragment,On),On.forEach(i),Y.forEach(i),te=r(f),b(pt.$$.fragment,f),Kt=r(f),le=d(f,"DIV",{class:!0});var Ct=N(le);b(ae.$$.fragment,Ct),fn=r(Ct),we=d(Ct,"P",{"data-svelte-h":!0}),m(we)!=="svelte-1977qs5"&&(we.innerHTML=Wn),pe=r(Ct),Ne=d(Ct,"DIV",{class:!0});var At=N(Ne);b(Ae.$$.fragment,At),xn=r(At),Pt=d(At,"P",{"data-svelte-h":!0}),m(Pt)!=="svelte-1bnx1ll"&&(Pt.textContent=jn),de=r(At),jt=d(At,"UL",{"data-svelte-h":!0}),m(jt)!=="svelte-xi6653"&&(jt.innerHTML=Ft),At.forEach(i),Zn=r(Ct),$e=d(Ct,"DIV",{class:!0});var gt=N($e);b(mt.$$.fragment,gt),Vt=r(gt),Fn=d(gt,"P",{"data-svelte-h":!0}),m(Fn)!=="svelte-13bfd60"&&(Fn.textContent=S),Le=r(gt),b(gn.$$.fragment,gt),Rt=r(gt),Pe=d(gt,"P",{"data-svelte-h":!0}),m(Pe)!=="svelte-wtrslu"&&(Pe.textContent=Jn),gt.forEach(i),Ct.forEach(i),nt=r(f),b(Xt.$$.fragment,f),en=r(f),Ve=d(f,"DIV",{class:!0});var Re=N(Ve);b(ze.$$.fragment,Re),Yn=r(Re),B=d(Re,"P",{"data-svelte-h":!0}),m(B)!=="svelte-1df4nhv"&&(B.innerHTML=_n),Re.forEach(i),be=r(f),Te=d(f,"DIV",{class:!0});var Ln=N(Te);b(me.$$.fragment,Ln),Jt=r(Ln),tn=d(Ln,"P",{"data-svelte-h":!0}),m(tn)!=="svelte-1q58bqf"&&(tn.innerHTML=Dn),Ln.forEach(i),nn=r(f),b(ut.$$.fragment,f),ht=r(f),Nn=d(f,"P",{}),N(Nn).forEach(i),this.h()},h(){Z(e,"name","hf:doc:metadata"),Z(e,"content",Ks),Z(w,"class","flex flex-wrap space-x-1"),Z(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(f,J){s(document.head,e),c(f,p,J),c(f,n,J),c(f,o,J),T(g,f,J),c(f,t,J),c(f,w,J),c(f,q,J),T(z,f,J),c(f,Q,J),c(f,I,J),c(f,E,J),c(f,u,J),c(f,Ge,J),c(f,ge,J),c(f,rn,J),c(f,re,J),c(f,We,J),c(f,rt,J),c(f,kn,J),T(P,f,J),c(f,It,J),c(f,R,J),c(f,ln,J),T(it,f,J),c(f,ne,J),c(f,kt,J),c(f,qt,J),T(qn,f,J),c(f,dn,J),c(f,O,J),T(wt,O,null),s(O,Yt),s(O,Ye),s(O,cn),s(O,Ze),s(O,pn),T(De,O,null),c(f,Oe,J),T(Dt,f,J),c(f,G,J),c(f,V,J),T(lt,V,null),s(V,$t),s(V,ce),s(V,dt),s(V,Ot),s(V,mn),s(V,ke),T(un,ke,null),s(ke,H),s(ke,_e),s(ke,Zt),s(ke,Nt),s(V,oe),s(V,ct),T(Ke,ct,null),s(ct,Lt),s(ct,Bt),s(V,Je),s(V,et),T(K,et,null),s(et,vt),s(et,xt),s(et,Ce),T(He,et,null),s(et,ie),s(et,tt),s(V,Gt),s(V,Ht),T(hn,Ht,null),c(f,te,J),T(pt,f,J),c(f,Kt,J),c(f,le,J),T(ae,le,null),s(le,fn),s(le,we),s(le,pe),s(le,Ne),T(Ae,Ne,null),s(Ne,xn),s(Ne,Pt),s(Ne,de),s(Ne,jt),s(le,Zn),s(le,$e),T(mt,$e,null),s($e,Vt),s($e,Fn),s($e,Le),T(gn,$e,null),s($e,Rt),s($e,Pe),c(f,nt,J),T(Xt,f,J),c(f,en,J),c(f,Ve,J),T(ze,Ve,null),s(Ve,Yn),s(Ve,B),c(f,be,J),c(f,Te,J),T(me,Te,null),s(Te,Jt),s(Te,tn),c(f,nn,J),T(ut,f,J),c(f,ht,J),c(f,Nn,J),ft=!0},p(f,[J]){const ue={};J&2&&(ue.$$scope={dirty:J,ctx:f}),De.$set(ue);const Y={};J&2&&(Y.$$scope={dirty:J,ctx:f}),He.$set(Y);const ve={};J&2&&(ve.$$scope={dirty:J,ctx:f}),gn.$set(ve);const Ue={};J&2&&(Ue.$$scope={dirty:J,ctx:f}),ut.$set(Ue)},i(f){ft||(y(g.$$.fragment,f),y(z.$$.fragment,f),y(P.$$.fragment,f),y(it.$$.fragment,f),y(qn.$$.fragment,f),y(wt.$$.fragment,f),y(De.$$.fragment,f),y(Dt.$$.fragment,f),y(lt.$$.fragment,f),y(un.$$.fragment,f),y(Ke.$$.fragment,f),y(K.$$.fragment,f),y(He.$$.fragment,f),y(hn.$$.fragment,f),y(pt.$$.fragment,f),y(ae.$$.fragment,f),y(Ae.$$.fragment,f),y(mt.$$.fragment,f),y(gn.$$.fragment,f),y(Xt.$$.fragment,f),y(ze.$$.fragment,f),y(me.$$.fragment,f),y(ut.$$.fragment,f),ft=!0)},o(f){M(g.$$.fragment,f),M(z.$$.fragment,f),M(P.$$.fragment,f),M(it.$$.fragment,f),M(qn.$$.fragment,f),M(wt.$$.fragment,f),M(De.$$.fragment,f),M(Dt.$$.fragment,f),M(lt.$$.fragment,f),M(un.$$.fragment,f),M(Ke.$$.fragment,f),M(K.$$.fragment,f),M(He.$$.fragment,f),M(hn.$$.fragment,f),M(pt.$$.fragment,f),M(ae.$$.fragment,f),M(Ae.$$.fragment,f),M(mt.$$.fragment,f),M(gn.$$.fragment,f),M(Xt.$$.fragment,f),M(ze.$$.fragment,f),M(me.$$.fragment,f),M(ut.$$.fragment,f),ft=!1},d(f){f&&(i(p),i(n),i(o),i(t),i(w),i(q),i(Q),i(I),i(E),i(u),i(Ge),i(ge),i(rn),i(re),i(We),i(rt),i(kn),i(It),i(R),i(ln),i(ne),i(kt),i(qt),i(dn),i(O),i(Oe),i(G),i(V),i(te),i(Kt),i(le),i(nt),i(en),i(Ve),i(be),i(Te),i(nn),i(ht),i(Nn)),i(e),k(g,f),k(z,f),k(P,f),k(it,f),k(qn,f),k(wt),k(De),k(Dt,f),k(lt),k(un),k(Ke),k(K),k(He),k(hn),k(pt,f),k(ae),k(Ae),k(mt),k(gn),k(Xt,f),k(ze),k(me),k(ut,f)}}}const Ks='{"title":"ALBERT","local":"albert","sections":[{"title":"概要","local":"概要","sections":[],"depth":2},{"title":"使用上のヒント","local":"使用上のヒント","sections":[],"depth":2},{"title":"参考資料","local":"参考資料","sections":[],"depth":2},{"title":"AlbertConfig","local":"transformers.AlbertConfig","sections":[],"depth":2},{"title":"AlbertTokenizer","local":"transformers.AlbertTokenizer","sections":[],"depth":2},{"title":"AlbertTokenizerFast","local":"transformers.AlbertTokenizerFast","sections":[],"depth":2},{"title":"Albert specific outputs","local":"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput","sections":[],"depth":2},{"title":"AlbertModel","local":"transformers.AlbertModel","sections":[],"depth":2},{"title":"AlbertForPreTraining","local":"transformers.AlbertForPreTraining","sections":[],"depth":2},{"title":"AlbertForMaskedLM","local":"transformers.AlbertForMaskedLM","sections":[],"depth":2},{"title":"AlbertForSequenceClassification","local":"transformers.AlbertForSequenceClassification","sections":[],"depth":2},{"title":"AlbertForMultipleChoice","local":"transformers.AlbertForMultipleChoice","sections":[],"depth":2},{"title":"AlbertForTokenClassification","local":"transformers.AlbertForTokenClassification","sections":[],"depth":2},{"title":"AlbertForQuestionAnswering","local":"transformers.AlbertForQuestionAnswering","sections":[],"depth":2},{"title":"TFAlbertModel","local":"transformers.TFAlbertModel","sections":[],"depth":2},{"title":"TFAlbertForPreTraining","local":"transformers.TFAlbertForPreTraining","sections":[],"depth":2},{"title":"TFAlbertForMaskedLM","local":"transformers.TFAlbertForMaskedLM","sections":[],"depth":2},{"title":"TFAlbertForSequenceClassification","local":"transformers.TFAlbertForSequenceClassification","sections":[],"depth":2},{"title":"TFAlbertForMultipleChoice","local":"transformers.TFAlbertForMultipleChoice","sections":[],"depth":2},{"title":"TFAlbertForTokenClassification","local":"transformers.TFAlbertForTokenClassification","sections":[],"depth":2},{"title":"TFAlbertForQuestionAnswering","local":"transformers.TFAlbertForQuestionAnswering","sections":[],"depth":2},{"title":"FlaxAlbertModel","local":"transformers.FlaxAlbertModel","sections":[],"depth":2},{"title":"FlaxAlbertForPreTraining","local":"transformers.FlaxAlbertForPreTraining","sections":[],"depth":2},{"title":"FlaxAlbertForMaskedLM","local":"transformers.FlaxAlbertForMaskedLM","sections":[],"depth":2},{"title":"FlaxAlbertForSequenceClassification","local":"transformers.FlaxAlbertForSequenceClassification","sections":[],"depth":2},{"title":"FlaxAlbertForMultipleChoice","local":"transformers.FlaxAlbertForMultipleChoice","sections":[],"depth":2},{"title":"FlaxAlbertForTokenClassification","local":"transformers.FlaxAlbertForTokenClassification","sections":[],"depth":2},{"title":"FlaxAlbertForQuestionAnswering","local":"transformers.FlaxAlbertForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function ea(x){return Zo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class da extends No{constructor(e){super(),Lo(this,e,ea,Os,Wo,{})}}export{da as component};
