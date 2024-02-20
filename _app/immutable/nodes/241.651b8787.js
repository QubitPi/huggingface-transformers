import{s as wn,o as vn,n as W}from"../chunks/scheduler.9bc65507.js";import{S as $n,i as xn,g as l,s as r,r as y,A as jn,h as d,f as i,c as a,j as q,u as b,x as f,k as N,y as s,a as c,v as T,d as M,t as k,w as F}from"../chunks/index.707bf1b6.js";import{T as Ne}from"../chunks/Tip.c2ecdbf4.js";import{D as X}from"../chunks/Docstring.17db21ae.js";import{C as Te}from"../chunks/CodeBlock.54a9f38d.js";import{F as Rn,M as pn}from"../chunks/Markdown.fef84341.js";import{E as be}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ze}from"../chunks/Heading.342b1fa6.js";function Cn($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFJvRm9ybWVyTW9kZWwlMkMlMjBSb0Zvcm1lckNvbmZpZyUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBSb0Zvcm1lciUyMGp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBSb0Zvcm1lckNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMFJvRm9ybWVyTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerModel, RoFormerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RoFormer junnyu/roformer_chinese_base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RoFormerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the junnyu/roformer_chinese_base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Jn($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFJvRm9ybWVyVG9rZW5pemVyJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwUm9Gb3JtZXJUb2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEF0b2tlbml6ZXIudG9rZW5pemUoJTIyJUU0JUJCJThBJUU1JUE0JUE5JUU1JUE0JUE5JUU2JUIwJTk0JUU5JTlEJTlFJUU1JUI4JUI4JUU1JUE1JUJEJUUzJTgwJTgyJTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;今天天气非常好。&quot;</span>)
[<span class="hljs-string">&#x27;今&#x27;</span>, <span class="hljs-string">&#x27;天&#x27;</span>, <span class="hljs-string">&#x27;天&#x27;</span>, <span class="hljs-string">&#x27;气&#x27;</span>, <span class="hljs-string">&#x27;非常&#x27;</span>, <span class="hljs-string">&#x27;好&#x27;</span>, <span class="hljs-string">&#x27;。&#x27;</span>]`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Un($){let e,m="sequence pair mask has the following format:",o,n,h;return n=new Te({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMEElN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTIwJTIwJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-16klr56"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function zn($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFJvRm9ybWVyVG9rZW5pemVyRmFzdCUwQSUwQXRva2VuaXplciUyMCUzRCUyMFJvRm9ybWVyVG9rZW5pemVyRmFzdC5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQXRva2VuaXplci50b2tlbml6ZSglMjIlRTQlQkIlOEElRTUlQTQlQTklRTUlQTQlQTklRTYlQjAlOTQlRTklOUQlOUUlRTUlQjglQjglRTUlQTUlQkQlRTMlODAlODIlMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizerFast.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;今天天气非常好。&quot;</span>)
[<span class="hljs-string">&#x27;今&#x27;</span>, <span class="hljs-string">&#x27;天&#x27;</span>, <span class="hljs-string">&#x27;天&#x27;</span>, <span class="hljs-string">&#x27;气&#x27;</span>, <span class="hljs-string">&#x27;非常&#x27;</span>, <span class="hljs-string">&#x27;好&#x27;</span>, <span class="hljs-string">&#x27;。&#x27;</span>]`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Zn($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function In($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0Zvcm1lck1vZGVsJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBSb0Zvcm1lck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoFormerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Wn($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function qn($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0Zvcm1lckZvckNhdXNhbExNJTJDJTIwUm9Gb3JtZXJDb25maWclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFjb25maWclMjAlM0QlMjBSb0Zvcm1lckNvbmZpZy5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQWNvbmZpZy5pc19kZWNvZGVyJTIwJTNEJTIwVHJ1ZSUwQW1vZGVsJTIwJTNEJTIwUm9Gb3JtZXJGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyJTJDJTIwY29uZmlnJTNEY29uZmlnKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjIlRTQlQkIlOEElRTUlQTQlQTklRTUlQTQlQTklRTYlQjAlOTQlRTklOUQlOUUlRTUlQjglQjglRTUlQTUlQkQlRTMlODAlODIlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoFormerForCausalLM, RoFormerConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RoFormerConfig.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForCausalLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;今天天气非常好。&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Nn($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function Vn($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0Zvcm1lckZvck1hc2tlZExNJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBSb0Zvcm1lckZvck1hc2tlZExNLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwJTVCTUFTSyU1RC4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBJTIzJTIwcmV0cmlldmUlMjBpbmRleCUyMG9mJTIwJTVCTUFTSyU1RCUwQW1hc2tfdG9rZW5faW5kZXglMjAlM0QlMjAoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKSU1QjAlNUQubm9uemVybyhhc190dXBsZSUzRFRydWUpJTVCMCU1RCUwQSUwQXByZWRpY3RlZF90b2tlbl9pZCUyMCUzRCUyMGxvZ2l0cyU1QjAlMkMlMjBtYXNrX3Rva2VuX2luZGV4JTVELmFyZ21heChheGlzJTNELTEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjMlMjBtYXNrJTIwbGFiZWxzJTIwb2YlMjBub24tJTVCTUFTSyU1RCUyMHRva2VucyUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLndoZXJlKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCUyQyUyMGxhYmVscyUyQyUyMC0xMDApJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoFormerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Gn($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function Xn($){let e,m="Example of single-label classification:",o,n,h;return n=new Te({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFJvRm9ybWVyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFJvRm9ybWVyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoKS5pdGVtKCklMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBSb0Zvcm1lckZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-ykxpe4"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Ln($){let e,m="Example of multi-label classification:",o,n,h;return n=new Te({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFJvRm9ybWVyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFJvRm9ybWVyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkcyUyMCUzRCUyMHRvcmNoLmFyYW5nZSgwJTJDJTIwbG9naXRzLnNoYXBlJTVCLTElNUQpJTVCdG9yY2guc2lnbW9pZChsb2dpdHMpLnNxdWVlemUoZGltJTNEMCklMjAlM0UlMjAwLjUlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBSb0Zvcm1lckZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1l8e32d"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Bn($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function Hn($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0Zvcm1lckZvck11bHRpcGxlQ2hvaWNlJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBSb0Zvcm1lckZvck11bHRpcGxlQ2hvaWNlLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoMCkudW5zcXVlZXplKDApJTIwJTIwJTIzJTIwY2hvaWNlMCUyMGlzJTIwY29ycmVjdCUyMChhY2NvcmRpbmclMjB0byUyMFdpa2lwZWRpYSUyMCUzQikpJTJDJTIwYmF0Y2glMjBzaXplJTIwMSUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHBhZGRpbmclM0RUcnVlKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKiU3QmslM0ElMjB2LnVuc3F1ZWV6ZSgwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoFormerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Sn($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function Qn($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0Zvcm1lckZvclRva2VuQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFJvRm9ybWVyRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoFormerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Pn($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function En($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0Zvcm1lckZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBSb0Zvcm1lckZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWFuc3dlcl9zdGFydF9pbmRleCUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzLmFyZ21heCgpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMG91dHB1dHMuZW5kX2xvZ2l0cy5hcmdtYXgoKSUwQSUwQXByZWRpY3RfYW5zd2VyX3Rva2VucyUyMCUzRCUyMGlucHV0cy5pbnB1dF9pZHMlNUIwJTJDJTIwYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNBJTIwYW5zd2VyX2VuZF9pbmRleCUyMCUyQiUyMDElNUQlMEElMEElMjMlMjB0YXJnZXQlMjBpcyUyMCUyMm5pY2UlMjBwdXBwZXQlMjIlMEF0YXJnZXRfc3RhcnRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNSU1RCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBzdGFydF9wb3NpdGlvbnMlM0R0YXJnZXRfc3RhcnRfaW5kZXglMkMlMjBlbmRfcG9zaXRpb25zJTNEdGFyZ2V0X2VuZF9pbmRleCklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoFormerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function An($){let e,m,o,n,h,t,g=`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,P,Z,J=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">Attention is
all you need</a> by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`,E,I,U=`To behave as an decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set
to <code>True</code>. To be used in a Seq2Seq model, the model needs to initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,A,u,j,Ve,me,Go='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> forward method, overrides the <code>__call__</code> special method.',Bt,re,Zt,pe,Dt,Qe,kt,oe,Pe,ne,Ee,pt=`RoFormer Model with a <code>language modeling</code> head on top for CLM fine-tuning.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,It,V,xe,Kt,De,Xo='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForCausalLM">RoFormerForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',eo,Ge,Wo,Xe,Ae,de,Ye,je,S,to,Ft,wt=`RoFormer Model with a <code>language modeling</code> head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,xo,Q,Ze,Ht,ut,ft='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForMaskedLM">RoFormerForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',po,B,Ke,Le,et,vt,lo,L,$t,yo,ue,uo=`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`,bo,fe,Lo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,ht,H,gt,oo,tt,Bo='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForSequenceClassification">RoFormerForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Wt,he,no,Oe,Y,Me,St,ge,To,_e,ke,Fe,Re,so=`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,xt,ro,O=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,_t,K,Ie,co,qt,fo='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForMultipleChoice">RoFormerForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Qt,Be,He,we,ho,ce,Mo,ye,We,Ce,ot,ve=`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,nt,Pt,ao=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,w,C,ae,ee,$e,Et='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForTokenClassification">RoFormerForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',ie,Nt,G,le,Ho,jt,Do,Rt,st,Ko,At,jo=`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Ro,ko,Je=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Co,Vt,Ct,nn,Jo,yt='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForQuestionAnswering">RoFormerForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Uo,go,mo,zo,So;return e=new ze({props:{title:"RoFormerModel",local:"transformers.RoFormerModel",headingTag:"h2"}}),n=new X({props:{name:"class transformers.RoFormerModel",anchor:"transformers.RoFormerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L770"}}),j=new X({props:{name:"forward",anchor:"transformers.RoFormerModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoFormerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoFormerModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoFormerModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoFormerModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L814",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new Ne({props:{$$slots:{default:[Zn]},$$scope:{ctx:$}}}),pe=new be({props:{anchor:"transformers.RoFormerModel.forward.example",$$slots:{default:[In]},$$scope:{ctx:$}}}),Qe=new ze({props:{title:"RoFormerForCausalLM",local:"transformers.RoFormerForCausalLM",headingTag:"h2"}}),Pe=new X({props:{name:"class transformers.RoFormerForCausalLM",anchor:"transformers.RoFormerForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1040"}}),xe=new X({props:{name:"forward",anchor:"transformers.RoFormerForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoFormerForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.RoFormerForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1064",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Ge=new Ne({props:{$$slots:{default:[Wn]},$$scope:{ctx:$}}}),Xe=new be({props:{anchor:"transformers.RoFormerForCausalLM.forward.example",$$slots:{default:[qn]},$$scope:{ctx:$}}}),de=new ze({props:{title:"RoFormerForMaskedLM",local:"transformers.RoFormerForMaskedLM",headingTag:"h2"}}),S=new X({props:{name:"class transformers.RoFormerForMaskedLM",anchor:"transformers.RoFormerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L940"}}),Ze=new X({props:{name:"forward",anchor:"transformers.RoFormerForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L965",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),B=new Ne({props:{$$slots:{default:[Nn]},$$scope:{ctx:$}}}),Le=new be({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example",$$slots:{default:[Vn]},$$scope:{ctx:$}}}),vt=new ze({props:{title:"RoFormerForSequenceClassification",local:"transformers.RoFormerForSequenceClassification",headingTag:"h2"}}),$t=new X({props:{name:"class transformers.RoFormerForSequenceClassification",anchor:"transformers.RoFormerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1218"}}),gt=new X({props:{name:"forward",anchor:"transformers.RoFormerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1235",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),he=new Ne({props:{$$slots:{default:[Gn]},$$scope:{ctx:$}}}),Oe=new be({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example",$$slots:{default:[Xn]},$$scope:{ctx:$}}}),Me=new be({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-2",$$slots:{default:[Ln]},$$scope:{ctx:$}}}),ge=new ze({props:{title:"RoFormerForMultipleChoice",local:"transformers.RoFormerForMultipleChoice",headingTag:"h2"}}),ke=new X({props:{name:"class transformers.RoFormerForMultipleChoice",anchor:"transformers.RoFormerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1309"}}),Ie=new X({props:{name:"forward",anchor:"transformers.RoFormerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1327",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Be=new Ne({props:{$$slots:{default:[Bn]},$$scope:{ctx:$}}}),we=new be({props:{anchor:"transformers.RoFormerForMultipleChoice.forward.example",$$slots:{default:[Hn]},$$scope:{ctx:$}}}),ce=new ze({props:{title:"RoFormerForTokenClassification",local:"transformers.RoFormerForTokenClassification",headingTag:"h2"}}),We=new X({props:{name:"class transformers.RoFormerForTokenClassification",anchor:"transformers.RoFormerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1400"}}),ae=new X({props:{name:"forward",anchor:"transformers.RoFormerForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1419",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Nt=new Ne({props:{$$slots:{default:[Sn]},$$scope:{ctx:$}}}),le=new be({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example",$$slots:{default:[Qn]},$$scope:{ctx:$}}}),jt=new ze({props:{title:"RoFormerForQuestionAnswering",local:"transformers.RoFormerForQuestionAnswering",headingTag:"h2"}}),st=new X({props:{name:"class transformers.RoFormerForQuestionAnswering",anchor:"transformers.RoFormerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1476"}}),Ct=new X({props:{name:"forward",anchor:"transformers.RoFormerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1496",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),go=new Ne({props:{$$slots:{default:[Pn]},$$scope:{ctx:$}}}),zo=new be({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example",$$slots:{default:[En]},$$scope:{ctx:$}}}),{c(){y(e.$$.fragment),m=r(),o=l("div"),y(n.$$.fragment),h=r(),t=l("p"),t.innerHTML=g,P=r(),Z=l("p"),Z.innerHTML=J,E=r(),I=l("p"),I.innerHTML=U,A=r(),u=l("div"),y(j.$$.fragment),Ve=r(),me=l("p"),me.innerHTML=Go,Bt=r(),y(re.$$.fragment),Zt=r(),y(pe.$$.fragment),Dt=r(),y(Qe.$$.fragment),kt=r(),oe=l("div"),y(Pe.$$.fragment),ne=r(),Ee=l("p"),Ee.innerHTML=pt,It=r(),V=l("div"),y(xe.$$.fragment),Kt=r(),De=l("p"),De.innerHTML=Xo,eo=r(),y(Ge.$$.fragment),Wo=r(),y(Xe.$$.fragment),Ae=r(),y(de.$$.fragment),Ye=r(),je=l("div"),y(S.$$.fragment),to=r(),Ft=l("p"),Ft.innerHTML=wt,xo=r(),Q=l("div"),y(Ze.$$.fragment),Ht=r(),ut=l("p"),ut.innerHTML=ft,po=r(),y(B.$$.fragment),Ke=r(),y(Le.$$.fragment),et=r(),y(vt.$$.fragment),lo=r(),L=l("div"),y($t.$$.fragment),yo=r(),ue=l("p"),ue.textContent=uo,bo=r(),fe=l("p"),fe.innerHTML=Lo,ht=r(),H=l("div"),y(gt.$$.fragment),oo=r(),tt=l("p"),tt.innerHTML=Bo,Wt=r(),y(he.$$.fragment),no=r(),y(Oe.$$.fragment),Y=r(),y(Me.$$.fragment),St=r(),y(ge.$$.fragment),To=r(),_e=l("div"),y(ke.$$.fragment),Fe=r(),Re=l("p"),Re.textContent=so,xt=r(),ro=l("p"),ro.innerHTML=O,_t=r(),K=l("div"),y(Ie.$$.fragment),co=r(),qt=l("p"),qt.innerHTML=fo,Qt=r(),y(Be.$$.fragment),He=r(),y(we.$$.fragment),ho=r(),y(ce.$$.fragment),Mo=r(),ye=l("div"),y(We.$$.fragment),Ce=r(),ot=l("p"),ot.textContent=ve,nt=r(),Pt=l("p"),Pt.innerHTML=ao,w=r(),C=l("div"),y(ae.$$.fragment),ee=r(),$e=l("p"),$e.innerHTML=Et,ie=r(),y(Nt.$$.fragment),G=r(),y(le.$$.fragment),Ho=r(),y(jt.$$.fragment),Do=r(),Rt=l("div"),y(st.$$.fragment),Ko=r(),At=l("p"),At.innerHTML=jo,Ro=r(),ko=l("p"),ko.innerHTML=Je,Co=r(),Vt=l("div"),y(Ct.$$.fragment),nn=r(),Jo=l("p"),Jo.innerHTML=yt,Uo=r(),y(go.$$.fragment),mo=r(),y(zo.$$.fragment),this.h()},l(_){b(e.$$.fragment,_),m=a(_),o=d(_,"DIV",{class:!0});var R=q(o);b(n.$$.fragment,R),h=a(R),t=d(R,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1mxjqme"&&(t.innerHTML=g),P=a(R),Z=d(R,"P",{"data-svelte-h":!0}),f(Z)!=="svelte-1du13oj"&&(Z.innerHTML=J),E=a(R),I=d(R,"P",{"data-svelte-h":!0}),f(I)!=="svelte-174erte"&&(I.innerHTML=U),A=a(R),u=d(R,"DIV",{class:!0});var D=q(u);b(j.$$.fragment,D),Ve=a(D),me=d(D,"P",{"data-svelte-h":!0}),f(me)!=="svelte-zvlnih"&&(me.innerHTML=Go),Bt=a(D),b(re.$$.fragment,D),Zt=a(D),b(pe.$$.fragment,D),D.forEach(i),R.forEach(i),Dt=a(_),b(Qe.$$.fragment,_),kt=a(_),oe=d(_,"DIV",{class:!0});var bt=q(oe);b(Pe.$$.fragment,bt),ne=a(bt),Ee=d(bt,"P",{"data-svelte-h":!0}),f(Ee)!=="svelte-x0h0w8"&&(Ee.innerHTML=pt),It=a(bt),V=d(bt,"DIV",{class:!0});var rt=q(V);b(xe.$$.fragment,rt),Kt=a(rt),De=d(rt,"P",{"data-svelte-h":!0}),f(De)!=="svelte-f0sfh"&&(De.innerHTML=Xo),eo=a(rt),b(Ge.$$.fragment,rt),Wo=a(rt),b(Xe.$$.fragment,rt),rt.forEach(i),bt.forEach(i),Ae=a(_),b(de.$$.fragment,_),Ye=a(_),je=d(_,"DIV",{class:!0});var Jt=q(je);b(S.$$.fragment,Jt),to=a(Jt),Ft=d(Jt,"P",{"data-svelte-h":!0}),f(Ft)!=="svelte-ukzw0t"&&(Ft.innerHTML=wt),xo=a(Jt),Q=d(Jt,"DIV",{class:!0});var te=q(Q);b(Ze.$$.fragment,te),Ht=a(te),ut=d(te,"P",{"data-svelte-h":!0}),f(ut)!=="svelte-hpkmzp"&&(ut.innerHTML=ft),po=a(te),b(B.$$.fragment,te),Ke=a(te),b(Le.$$.fragment,te),te.forEach(i),Jt.forEach(i),et=a(_),b(vt.$$.fragment,_),lo=a(_),L=d(_,"DIV",{class:!0});var at=q(L);b($t.$$.fragment,at),yo=a(at),ue=d(at,"P",{"data-svelte-h":!0}),f(ue)!=="svelte-db97bs"&&(ue.textContent=uo),bo=a(at),fe=d(at,"P",{"data-svelte-h":!0}),f(fe)!=="svelte-68lg8f"&&(fe.innerHTML=Lo),ht=a(at),H=d(at,"DIV",{class:!0});var qe=q(H);b(gt.$$.fragment,qe),oo=a(qe),tt=d(qe,"P",{"data-svelte-h":!0}),f(tt)!=="svelte-13qfeth"&&(tt.innerHTML=Bo),Wt=a(qe),b(he.$$.fragment,qe),no=a(qe),b(Oe.$$.fragment,qe),Y=a(qe),b(Me.$$.fragment,qe),qe.forEach(i),at.forEach(i),St=a(_),b(ge.$$.fragment,_),To=a(_),_e=d(_,"DIV",{class:!0});var Tt=q(_e);b(ke.$$.fragment,Tt),Fe=a(Tt),Re=d(Tt,"P",{"data-svelte-h":!0}),f(Re)!=="svelte-1uwauhk"&&(Re.textContent=so),xt=a(Tt),ro=d(Tt,"P",{"data-svelte-h":!0}),f(ro)!=="svelte-68lg8f"&&(ro.innerHTML=O),_t=a(Tt),K=d(Tt,"DIV",{class:!0});var it=q(K);b(Ie.$$.fragment,it),co=a(it),qt=d(it,"P",{"data-svelte-h":!0}),f(qt)!=="svelte-13lpzvt"&&(qt.innerHTML=fo),Qt=a(it),b(Be.$$.fragment,it),He=a(it),b(we.$$.fragment,it),it.forEach(i),Tt.forEach(i),ho=a(_),b(ce.$$.fragment,_),Mo=a(_),ye=d(_,"DIV",{class:!0});var Yt=q(ye);b(We.$$.fragment,Yt),Ce=a(Yt),ot=d(Yt,"P",{"data-svelte-h":!0}),f(ot)!=="svelte-1hr7ir7"&&(ot.textContent=ve),nt=a(Yt),Pt=d(Yt,"P",{"data-svelte-h":!0}),f(Pt)!=="svelte-68lg8f"&&(Pt.innerHTML=ao),w=a(Yt),C=d(Yt,"DIV",{class:!0});var Ue=q(C);b(ae.$$.fragment,Ue),ee=a(Ue),$e=d(Ue,"P",{"data-svelte-h":!0}),f($e)!=="svelte-1v6570p"&&($e.innerHTML=Et),ie=a(Ue),b(Nt.$$.fragment,Ue),G=a(Ue),b(le.$$.fragment,Ue),Ue.forEach(i),Yt.forEach(i),Ho=a(_),b(jt.$$.fragment,_),Do=a(_),Rt=d(_,"DIV",{class:!0});var Ot=q(Rt);b(st.$$.fragment,Ot),Ko=a(Ot),At=d(Ot,"P",{"data-svelte-h":!0}),f(At)!=="svelte-fl0b85"&&(At.innerHTML=jo),Ro=a(Ot),ko=d(Ot,"P",{"data-svelte-h":!0}),f(ko)!=="svelte-68lg8f"&&(ko.innerHTML=Je),Co=a(Ot),Vt=d(Ot,"DIV",{class:!0});var lt=q(Vt);b(Ct.$$.fragment,lt),nn=a(lt),Jo=d(lt,"P",{"data-svelte-h":!0}),f(Jo)!=="svelte-1hzzsaj"&&(Jo.innerHTML=yt),Uo=a(lt),b(go.$$.fragment,lt),mo=a(lt),b(zo.$$.fragment,lt),lt.forEach(i),Ot.forEach(i),this.h()},h(){N(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(_,R){T(e,_,R),c(_,m,R),c(_,o,R),T(n,o,null),s(o,h),s(o,t),s(o,P),s(o,Z),s(o,E),s(o,I),s(o,A),s(o,u),T(j,u,null),s(u,Ve),s(u,me),s(u,Bt),T(re,u,null),s(u,Zt),T(pe,u,null),c(_,Dt,R),T(Qe,_,R),c(_,kt,R),c(_,oe,R),T(Pe,oe,null),s(oe,ne),s(oe,Ee),s(oe,It),s(oe,V),T(xe,V,null),s(V,Kt),s(V,De),s(V,eo),T(Ge,V,null),s(V,Wo),T(Xe,V,null),c(_,Ae,R),T(de,_,R),c(_,Ye,R),c(_,je,R),T(S,je,null),s(je,to),s(je,Ft),s(je,xo),s(je,Q),T(Ze,Q,null),s(Q,Ht),s(Q,ut),s(Q,po),T(B,Q,null),s(Q,Ke),T(Le,Q,null),c(_,et,R),T(vt,_,R),c(_,lo,R),c(_,L,R),T($t,L,null),s(L,yo),s(L,ue),s(L,bo),s(L,fe),s(L,ht),s(L,H),T(gt,H,null),s(H,oo),s(H,tt),s(H,Wt),T(he,H,null),s(H,no),T(Oe,H,null),s(H,Y),T(Me,H,null),c(_,St,R),T(ge,_,R),c(_,To,R),c(_,_e,R),T(ke,_e,null),s(_e,Fe),s(_e,Re),s(_e,xt),s(_e,ro),s(_e,_t),s(_e,K),T(Ie,K,null),s(K,co),s(K,qt),s(K,Qt),T(Be,K,null),s(K,He),T(we,K,null),c(_,ho,R),T(ce,_,R),c(_,Mo,R),c(_,ye,R),T(We,ye,null),s(ye,Ce),s(ye,ot),s(ye,nt),s(ye,Pt),s(ye,w),s(ye,C),T(ae,C,null),s(C,ee),s(C,$e),s(C,ie),T(Nt,C,null),s(C,G),T(le,C,null),c(_,Ho,R),T(jt,_,R),c(_,Do,R),c(_,Rt,R),T(st,Rt,null),s(Rt,Ko),s(Rt,At),s(Rt,Ro),s(Rt,ko),s(Rt,Co),s(Rt,Vt),T(Ct,Vt,null),s(Vt,nn),s(Vt,Jo),s(Vt,Uo),T(go,Vt,null),s(Vt,mo),T(zo,Vt,null),So=!0},p(_,R){const D={};R&2&&(D.$$scope={dirty:R,ctx:_}),re.$set(D);const bt={};R&2&&(bt.$$scope={dirty:R,ctx:_}),pe.$set(bt);const rt={};R&2&&(rt.$$scope={dirty:R,ctx:_}),Ge.$set(rt);const Jt={};R&2&&(Jt.$$scope={dirty:R,ctx:_}),Xe.$set(Jt);const te={};R&2&&(te.$$scope={dirty:R,ctx:_}),B.$set(te);const at={};R&2&&(at.$$scope={dirty:R,ctx:_}),Le.$set(at);const qe={};R&2&&(qe.$$scope={dirty:R,ctx:_}),he.$set(qe);const Tt={};R&2&&(Tt.$$scope={dirty:R,ctx:_}),Oe.$set(Tt);const it={};R&2&&(it.$$scope={dirty:R,ctx:_}),Me.$set(it);const Yt={};R&2&&(Yt.$$scope={dirty:R,ctx:_}),Be.$set(Yt);const Ue={};R&2&&(Ue.$$scope={dirty:R,ctx:_}),we.$set(Ue);const Ot={};R&2&&(Ot.$$scope={dirty:R,ctx:_}),Nt.$set(Ot);const lt={};R&2&&(lt.$$scope={dirty:R,ctx:_}),le.$set(lt);const Zo={};R&2&&(Zo.$$scope={dirty:R,ctx:_}),go.$set(Zo);const dt={};R&2&&(dt.$$scope={dirty:R,ctx:_}),zo.$set(dt)},i(_){So||(M(e.$$.fragment,_),M(n.$$.fragment,_),M(j.$$.fragment,_),M(re.$$.fragment,_),M(pe.$$.fragment,_),M(Qe.$$.fragment,_),M(Pe.$$.fragment,_),M(xe.$$.fragment,_),M(Ge.$$.fragment,_),M(Xe.$$.fragment,_),M(de.$$.fragment,_),M(S.$$.fragment,_),M(Ze.$$.fragment,_),M(B.$$.fragment,_),M(Le.$$.fragment,_),M(vt.$$.fragment,_),M($t.$$.fragment,_),M(gt.$$.fragment,_),M(he.$$.fragment,_),M(Oe.$$.fragment,_),M(Me.$$.fragment,_),M(ge.$$.fragment,_),M(ke.$$.fragment,_),M(Ie.$$.fragment,_),M(Be.$$.fragment,_),M(we.$$.fragment,_),M(ce.$$.fragment,_),M(We.$$.fragment,_),M(ae.$$.fragment,_),M(Nt.$$.fragment,_),M(le.$$.fragment,_),M(jt.$$.fragment,_),M(st.$$.fragment,_),M(Ct.$$.fragment,_),M(go.$$.fragment,_),M(zo.$$.fragment,_),So=!0)},o(_){k(e.$$.fragment,_),k(n.$$.fragment,_),k(j.$$.fragment,_),k(re.$$.fragment,_),k(pe.$$.fragment,_),k(Qe.$$.fragment,_),k(Pe.$$.fragment,_),k(xe.$$.fragment,_),k(Ge.$$.fragment,_),k(Xe.$$.fragment,_),k(de.$$.fragment,_),k(S.$$.fragment,_),k(Ze.$$.fragment,_),k(B.$$.fragment,_),k(Le.$$.fragment,_),k(vt.$$.fragment,_),k($t.$$.fragment,_),k(gt.$$.fragment,_),k(he.$$.fragment,_),k(Oe.$$.fragment,_),k(Me.$$.fragment,_),k(ge.$$.fragment,_),k(ke.$$.fragment,_),k(Ie.$$.fragment,_),k(Be.$$.fragment,_),k(we.$$.fragment,_),k(ce.$$.fragment,_),k(We.$$.fragment,_),k(ae.$$.fragment,_),k(Nt.$$.fragment,_),k(le.$$.fragment,_),k(jt.$$.fragment,_),k(st.$$.fragment,_),k(Ct.$$.fragment,_),k(go.$$.fragment,_),k(zo.$$.fragment,_),So=!1},d(_){_&&(i(m),i(o),i(Dt),i(kt),i(oe),i(Ae),i(Ye),i(je),i(et),i(lo),i(L),i(St),i(To),i(_e),i(ho),i(Mo),i(ye),i(Ho),i(Do),i(Rt)),F(e,_),F(n),F(j),F(re),F(pe),F(Qe,_),F(Pe),F(xe),F(Ge),F(Xe),F(de,_),F(S),F(Ze),F(B),F(Le),F(vt,_),F($t),F(gt),F(he),F(Oe),F(Me),F(ge,_),F(ke),F(Ie),F(Be),F(we),F(ce,_),F(We),F(ae),F(Nt),F(le),F(jt,_),F(st),F(Ct),F(go),F(zo)}}}function Yn($){let e,m;return e=new pn({props:{$$slots:{default:[An]},$$scope:{ctx:$}}}),{c(){y(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,n){T(e,o,n),m=!0},p(o,n){const h={};n&2&&(h.$$scope={dirty:n,ctx:o}),e.$set(h)},i(o){m||(M(e.$$.fragment,o),m=!0)},o(o){k(e.$$.fragment,o),m=!1},d(o){F(e,o)}}}function On($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,h="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,g,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,Z,J,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,o=r(),n=l("ul"),n.innerHTML=h,t=r(),g=l("p"),g.innerHTML=P,Z=r(),J=l("ul"),J.innerHTML=E,I=r(),U=l("p"),U.innerHTML=A},l(u){e=d(u,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),o=a(u),n=d(u,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=h),t=a(u),g=d(u,"P",{"data-svelte-h":!0}),f(g)!=="svelte-1v9qsc5"&&(g.innerHTML=P),Z=a(u),J=d(u,"UL",{"data-svelte-h":!0}),f(J)!=="svelte-15scerc"&&(J.innerHTML=E),I=a(u),U=d(u,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=A)},m(u,j){c(u,e,j),c(u,o,j),c(u,n,j),c(u,t,j),c(u,g,j),c(u,Z,j),c(u,J,j),c(u,I,j),c(u,U,j)},p:W,d(u){u&&(i(e),i(o),i(n),i(t),i(g),i(Z),i(J),i(I),i(U))}}}function Dn($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function Kn($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvRm9ybWVyTW9kZWwlMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFRGUm9Gb3JtZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRoFormerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function es($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,h="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,g,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,Z,J,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,o=r(),n=l("ul"),n.innerHTML=h,t=r(),g=l("p"),g.innerHTML=P,Z=r(),J=l("ul"),J.innerHTML=E,I=r(),U=l("p"),U.innerHTML=A},l(u){e=d(u,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),o=a(u),n=d(u,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=h),t=a(u),g=d(u,"P",{"data-svelte-h":!0}),f(g)!=="svelte-1v9qsc5"&&(g.innerHTML=P),Z=a(u),J=d(u,"UL",{"data-svelte-h":!0}),f(J)!=="svelte-15scerc"&&(J.innerHTML=E),I=a(u),U=d(u,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=A)},m(u,j){c(u,e,j),c(u,o,j),c(u,n,j),c(u,t,j),c(u,g,j),c(u,Z,j),c(u,J,j),c(u,I,j),c(u,U,j)},p:W,d(u){u&&(i(e),i(o),i(n),i(t),i(g),i(Z),i(J),i(I),i(U))}}}function ts($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function os($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvRm9ybWVyRm9yTWFza2VkTE0lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFRGUm9Gb3JtZXJGb3JNYXNrZWRMTS5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjBGcmFuY2UlMjBpcyUyMCU1Qk1BU0slNUQuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBJTIzJTIwcmV0cmlldmUlMjBpbmRleCUyMG9mJTIwJTVCTUFTSyU1RCUwQW1hc2tfdG9rZW5faW5kZXglMjAlM0QlMjB0Zi53aGVyZSgoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKSU1QjAlNUQpJTBBc2VsZWN0ZWRfbG9naXRzJTIwJTNEJTIwdGYuZ2F0aGVyX25kKGxvZ2l0cyU1QjAlNUQlMkMlMjBpbmRpY2VzJTNEbWFza190b2tlbl9pbmRleCklMEElMEFwcmVkaWN0ZWRfdG9rZW5faWQlMjAlM0QlMjB0Zi5tYXRoLmFyZ21heChzZWxlY3RlZF9sb2dpdHMlMkMlMjBheGlzJTNELTEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRoFormerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function ns($){let e,m;return e=new Te({props:{code:"bGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjMlMjBtYXNrJTIwbGFiZWxzJTIwb2YlMjBub24tJTVCTUFTSyU1RCUyMHRva2VucyUwQWxhYmVscyUyMCUzRCUyMHRmLndoZXJlKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCUyQyUyMGxhYmVscyUyQyUyMC0xMDApJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)`,wrap:!1}}),{c(){y(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,n){T(e,o,n),m=!0},p:W,i(o){m||(M(e.$$.fragment,o),m=!0)},o(o){k(e.$$.fragment,o),m=!1},d(o){F(e,o)}}}function ss($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,h="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,g,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,Z,J,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,o=r(),n=l("ul"),n.innerHTML=h,t=r(),g=l("p"),g.innerHTML=P,Z=r(),J=l("ul"),J.innerHTML=E,I=r(),U=l("p"),U.innerHTML=A},l(u){e=d(u,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),o=a(u),n=d(u,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=h),t=a(u),g=d(u,"P",{"data-svelte-h":!0}),f(g)!=="svelte-1v9qsc5"&&(g.innerHTML=P),Z=a(u),J=d(u,"UL",{"data-svelte-h":!0}),f(J)!=="svelte-15scerc"&&(J.innerHTML=E),I=a(u),U=d(u,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=A)},m(u,j){c(u,e,j),c(u,o,j),c(u,n,j),c(u,t,j),c(u,g,j),c(u,Z,j),c(u,J,j),c(u,I,j),c(u,U,j)},p:W,d(u){u&&(i(e),i(o),i(n),i(t),i(g),i(Z),i(J),i(I),i(U))}}}function rs($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvRm9ybWVyRm9yQ2F1c2FsTE0lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFRGUm9Gb3JtZXJGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRoFormerForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForCausalLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function as($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,h="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,g,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,Z,J,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,o=r(),n=l("ul"),n.innerHTML=h,t=r(),g=l("p"),g.innerHTML=P,Z=r(),J=l("ul"),J.innerHTML=E,I=r(),U=l("p"),U.innerHTML=A},l(u){e=d(u,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),o=a(u),n=d(u,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=h),t=a(u),g=d(u,"P",{"data-svelte-h":!0}),f(g)!=="svelte-1v9qsc5"&&(g.innerHTML=P),Z=a(u),J=d(u,"UL",{"data-svelte-h":!0}),f(J)!=="svelte-15scerc"&&(J.innerHTML=E),I=a(u),U=d(u,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=A)},m(u,j){c(u,e,j),c(u,o,j),c(u,n,j),c(u,t,j),c(u,g,j),c(u,Z,j),c(u,J,j),c(u,I,j),c(u,U,j)},p:W,d(u){u&&(i(e),i(o),i(n),i(t),i(g),i(Z),i(J),i(I),i(U))}}}function is($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function ls($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvRm9ybWVyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZSb0Zvcm1lckZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBJTBBbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChsb2dpdHMlMkMlMjBheGlzJTNELTEpJTVCMCU1RCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRoFormerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function ds($){let e,m;return e=new Te({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZSb0Zvcm1lckZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRmLmNvbnN0YW50KDEpJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`</span>\n<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)\n<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels)\n\n<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)\n<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss',wrap:!1}}),{c(){y(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,n){T(e,o,n),m=!0},p:W,i(o){m||(M(e.$$.fragment,o),m=!0)},o(o){k(e.$$.fragment,o),m=!1},d(o){F(e,o)}}}function cs($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,h="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,g,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,Z,J,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,o=r(),n=l("ul"),n.innerHTML=h,t=r(),g=l("p"),g.innerHTML=P,Z=r(),J=l("ul"),J.innerHTML=E,I=r(),U=l("p"),U.innerHTML=A},l(u){e=d(u,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),o=a(u),n=d(u,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=h),t=a(u),g=d(u,"P",{"data-svelte-h":!0}),f(g)!=="svelte-1v9qsc5"&&(g.innerHTML=P),Z=a(u),J=d(u,"UL",{"data-svelte-h":!0}),f(J)!=="svelte-15scerc"&&(J.innerHTML=E),I=a(u),U=d(u,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=A)},m(u,j){c(u,e,j),c(u,o,j),c(u,n,j),c(u,t,j),c(u,g,j),c(u,Z,j),c(u,J,j),c(u,I,j),c(u,U,j)},p:W,d(u){u&&(i(e),i(o),i(n),i(t),i(g),i(Z),i(J),i(I),i(U))}}}function ms($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function ps($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvRm9ybWVyRm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFRGUm9Gb3JtZXJGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMkluJTIwSXRhbHklMkMlMjBwaXp6YSUyMHNlcnZlZCUyMGluJTIwZm9ybWFsJTIwc2V0dGluZ3MlMkMlMjBzdWNoJTIwYXMlMjBhdCUyMGElMjByZXN0YXVyYW50JTJDJTIwaXMlMjBwcmVzZW50ZWQlMjB1bnNsaWNlZC4lMjIlMEFjaG9pY2UwJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2l0aCUyMGElMjBmb3JrJTIwYW5kJTIwYSUyMGtuaWZlLiUyMiUwQWNob2ljZTElMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aGlsZSUyMGhlbGQlMjBpbiUyMHRoZSUyMGhhbmQuJTIyJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTVCcHJvbXB0JTJDJTIwcHJvbXB0JTVEJTJDJTIwJTVCY2hvaWNlMCUyQyUyMGNob2ljZTElNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBaW5wdXRzJTIwJTNEJTIwJTdCayUzQSUyMHRmLmV4cGFuZF9kaW1zKHYlMkMlMjAwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMjAlMjAlMjMlMjBiYXRjaCUyMHNpemUlMjBpcyUyMDElMEElMEElMjMlMjB0aGUlMjBsaW5lYXIlMjBjbGFzc2lmaWVyJTIwc3RpbGwlMjBuZWVkcyUyMHRvJTIwYmUlMjB0cmFpbmVkJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRoFormerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function us($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,h="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,g,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,Z,J,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,o=r(),n=l("ul"),n.innerHTML=h,t=r(),g=l("p"),g.innerHTML=P,Z=r(),J=l("ul"),J.innerHTML=E,I=r(),U=l("p"),U.innerHTML=A},l(u){e=d(u,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),o=a(u),n=d(u,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=h),t=a(u),g=d(u,"P",{"data-svelte-h":!0}),f(g)!=="svelte-1v9qsc5"&&(g.innerHTML=P),Z=a(u),J=d(u,"UL",{"data-svelte-h":!0}),f(J)!=="svelte-15scerc"&&(J.innerHTML=E),I=a(u),U=d(u,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=A)},m(u,j){c(u,e,j),c(u,o,j),c(u,n,j),c(u,t,j),c(u,g,j),c(u,Z,j),c(u,J,j),c(u,I,j),c(u,U,j)},p:W,d(u){u&&(i(e),i(o),i(n),i(t),i(g),i(Z),i(J),i(I),i(U))}}}function fs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function hs($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvRm9ybWVyRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZSb0Zvcm1lckZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiUwQSklMEElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMHRmLm1hdGguYXJnbWF4KGxvZ2l0cyUyQyUyMGF4aXMlM0QtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdCU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVELm51bXB5KCkudG9saXN0KCklNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRoFormerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function gs($){let e,m;return e=new Te({props:{code:"bGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)`,wrap:!1}}),{c(){y(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,n){T(e,o,n),m=!0},p:W,i(o){m||(M(e.$$.fragment,o),m=!0)},o(o){k(e.$$.fragment,o),m=!1},d(o){F(e,o)}}}function _s($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,h="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,g,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,Z,J,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,I,U,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,o=r(),n=l("ul"),n.innerHTML=h,t=r(),g=l("p"),g.innerHTML=P,Z=r(),J=l("ul"),J.innerHTML=E,I=r(),U=l("p"),U.innerHTML=A},l(u){e=d(u,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),o=a(u),n=d(u,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=h),t=a(u),g=d(u,"P",{"data-svelte-h":!0}),f(g)!=="svelte-1v9qsc5"&&(g.innerHTML=P),Z=a(u),J=d(u,"UL",{"data-svelte-h":!0}),f(J)!=="svelte-15scerc"&&(J.innerHTML=E),I=a(u),U=d(u,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=A)},m(u,j){c(u,e,j),c(u,o,j),c(u,n,j),c(u,t,j),c(u,g,j),c(u,Z,j),c(u,J,j),c(u,I,j),c(u,U,j)},p:W,d(u){u&&(i(e),i(o),i(n),i(t),i(g),i(Z),i(J),i(I),i(U))}}}function ys($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function bs($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvRm9ybWVyRm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFRGUm9Gb3JtZXJGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQSUwQXF1ZXN0aW9uJTJDJTIwdGV4dCUyMCUzRCUyMCUyMldobyUyMHdhcyUyMEppbSUyMEhlbnNvbiUzRiUyMiUyQyUyMCUyMkppbSUyMEhlbnNvbiUyMHdhcyUyMGElMjBuaWNlJTIwcHVwcGV0JTIyJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHF1ZXN0aW9uJTJDJTIwdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWFuc3dlcl9zdGFydF9pbmRleCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChvdXRwdXRzLnN0YXJ0X2xvZ2l0cyUyQyUyMGF4aXMlM0QtMSklNUIwJTVEKSUwQWFuc3dlcl9lbmRfaW5kZXglMjAlM0QlMjBpbnQodGYubWF0aC5hcmdtYXgob3V0cHV0cy5lbmRfbG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRoFormerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Ts($){let e,m;return e=new Te({props:{code:"JTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdGYuY29uc3RhbnQoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRmLmNvbnN0YW50KCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG91dHB1dHMubG9zcyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)`,wrap:!1}}),{c(){y(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,n){T(e,o,n),m=!0},p:W,i(o){m||(M(e.$$.fragment,o),m=!0)},o(o){k(e.$$.fragment,o),m=!1},d(o){F(e,o)}}}function Ms($){let e,m,o,n,h,t,g="The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top.",P,Z,J=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,E,I,U=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,A,u,j,Ve,me,Go,Bt,re='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a> forward method, overrides the <code>__call__</code> special method.',Zt,pe,Dt,Qe,kt,oe,Pe,ne,Ee,pt,It,V="RoFormer Model with a <code>language modeling</code> head on top.",xe,Kt,De=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Xo,eo,Ge=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Wo,Xe,Ae,de,Ye,je,S,to='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForMaskedLM">TFRoFormerForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Ft,wt,xo,Q,Ze,Ht,ut,ft,po,B,Ke,Le,et,vt="RoFormer Model with a <code>language modeling</code> head on top for CLM fine-tuning.",lo,L,$t=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,yo,ue,uo=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,bo,fe,Lo,ht,H,gt,oo,tt=`labels (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,Bo,Wt,he,no,Oe,Y,Me,St,ge,To="RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks.",_e,ke,Fe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Re,so,xt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,ro,O,_t,K,Ie,co,qt,fo='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForSequenceClassification">TFRoFormerForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Qt,Be,He,we,ho,ce,Mo,ye,We,Ce,ot,ve,nt,Pt=`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,ao,w,C=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ae,ee,$e=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Et,ie,Nt,G,le,Ho,jt,Do='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForMultipleChoice">TFRoFormerForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Rt,st,Ko,At,jo,Ro,ko,Je,Co,Vt,Ct,nn=`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Jo,yt,Uo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,go,mo,zo=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,So,_,R,D,bt,rt,Jt,te='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForTokenClassification">TFRoFormerForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',at,qe,Tt,it,Yt,Ue,Ot,lt,Zo,dt,Po,en,sn,dn=`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,tn,rn,cn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,_o,Io,mn=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,on,Eo,ln,ct,Ao,Qo,Yo,v='The <a href="/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForQuestionAnswering">TFRoFormerForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',z,Gt,Ut,Xt,zt,Lt,Mt;return e=new ze({props:{title:"TFRoFormerModel",local:"transformers.TFRoFormerModel",headingTag:"h2"}}),n=new X({props:{name:"class transformers.TFRoFormerModel",anchor:"transformers.TFRoFormerModel",parameters:[{name:"config",val:": RoFormerConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L924"}}),u=new Ne({props:{$$slots:{default:[On]},$$scope:{ctx:$}}}),me=new X({props:{name:"call",anchor:"transformers.TFRoFormerModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L934",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),pe=new Ne({props:{$$slots:{default:[Dn]},$$scope:{ctx:$}}}),Qe=new be({props:{anchor:"transformers.TFRoFormerModel.call.example",$$slots:{default:[Kn]},$$scope:{ctx:$}}}),oe=new ze({props:{title:"TFRoFormerForMaskedLM",local:"transformers.TFRoFormerForMaskedLM",headingTag:"h2"}}),Ee=new X({props:{name:"class transformers.TFRoFormerForMaskedLM",anchor:"transformers.TFRoFormerForMaskedLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L976"}}),Xe=new Ne({props:{$$slots:{default:[es]},$$scope:{ctx:$}}}),Ye=new X({props:{name:"call",anchor:"transformers.TFRoFormerForMaskedLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L993",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),wt=new Ne({props:{$$slots:{default:[ts]},$$scope:{ctx:$}}}),Q=new be({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example",$$slots:{default:[os]},$$scope:{ctx:$}}}),Ht=new be({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example-2",$$slots:{default:[ns]},$$scope:{ctx:$}}}),ft=new ze({props:{title:"TFRoFormerForCausalLM",local:"transformers.TFRoFormerForCausalLM",headingTag:"h2"}}),Ke=new X({props:{name:"class transformers.TFRoFormerForCausalLM",anchor:"transformers.TFRoFormerForCausalLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1057"}}),fe=new Ne({props:{$$slots:{default:[ss]},$$scope:{ctx:$}}}),H=new X({props:{name:"call",anchor:"transformers.TFRoFormerForCausalLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1073",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) — Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wt=new be({props:{anchor:"transformers.TFRoFormerForCausalLM.call.example",$$slots:{default:[rs]},$$scope:{ctx:$}}}),no=new ze({props:{title:"TFRoFormerForSequenceClassification",local:"transformers.TFRoFormerForSequenceClassification",headingTag:"h2"}}),Me=new X({props:{name:"class transformers.TFRoFormerForSequenceClassification",anchor:"transformers.TFRoFormerForSequenceClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1183"}}),O=new Ne({props:{$$slots:{default:[as]},$$scope:{ctx:$}}}),Ie=new X({props:{name:"call",anchor:"transformers.TFRoFormerForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1198",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Be=new Ne({props:{$$slots:{default:[is]},$$scope:{ctx:$}}}),we=new be({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example",$$slots:{default:[ls]},$$scope:{ctx:$}}}),ce=new be({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example-2",$$slots:{default:[ds]},$$scope:{ctx:$}}}),ye=new ze({props:{title:"TFRoFormerForMultipleChoice",local:"transformers.TFRoFormerForMultipleChoice",headingTag:"h2"}}),ot=new X({props:{name:"class transformers.TFRoFormerForMultipleChoice",anchor:"transformers.TFRoFormerForMultipleChoice",parameters:[{name:"config",val:": RoFormerConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1262"}}),ie=new Ne({props:{$$slots:{default:[cs]},$$scope:{ctx:$}}}),le=new X({props:{name:"call",anchor:"transformers.TFRoFormerForMultipleChoice.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1280",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),st=new Ne({props:{$$slots:{default:[ms]},$$scope:{ctx:$}}}),At=new be({props:{anchor:"transformers.TFRoFormerForMultipleChoice.call.example",$$slots:{default:[ps]},$$scope:{ctx:$}}}),Ro=new ze({props:{title:"TFRoFormerForTokenClassification",local:"transformers.TFRoFormerForTokenClassification",headingTag:"h2"}}),Co=new X({props:{name:"class transformers.TFRoFormerForTokenClassification",anchor:"transformers.TFRoFormerForTokenClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1369"}}),_=new Ne({props:{$$slots:{default:[us]},$$scope:{ctx:$}}}),bt=new X({props:{name:"call",anchor:"transformers.TFRoFormerForTokenClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1389",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),qe=new Ne({props:{$$slots:{default:[fs]},$$scope:{ctx:$}}}),it=new be({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example",$$slots:{default:[hs]},$$scope:{ctx:$}}}),Ue=new be({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example-2",$$slots:{default:[gs]},$$scope:{ctx:$}}}),lt=new ze({props:{title:"TFRoFormerForQuestionAnswering",local:"transformers.TFRoFormerForQuestionAnswering",headingTag:"h2"}}),Po=new X({props:{name:"class transformers.TFRoFormerForQuestionAnswering",anchor:"transformers.TFRoFormerForQuestionAnswering",parameters:[{name:"config",val:": RoFormerConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1452"}}),Eo=new Ne({props:{$$slots:{default:[_s]},$$scope:{ctx:$}}}),Ao=new X({props:{name:"call",anchor:"transformers.TFRoFormerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"start_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"end_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1471",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Gt=new Ne({props:{$$slots:{default:[ys]},$$scope:{ctx:$}}}),Xt=new be({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example",$$slots:{default:[bs]},$$scope:{ctx:$}}}),Lt=new be({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example-2",$$slots:{default:[Ts]},$$scope:{ctx:$}}}),{c(){y(e.$$.fragment),m=r(),o=l("div"),y(n.$$.fragment),h=r(),t=l("p"),t.textContent=g,P=r(),Z=l("p"),Z.innerHTML=J,E=r(),I=l("p"),I.innerHTML=U,A=r(),y(u.$$.fragment),j=r(),Ve=l("div"),y(me.$$.fragment),Go=r(),Bt=l("p"),Bt.innerHTML=re,Zt=r(),y(pe.$$.fragment),Dt=r(),y(Qe.$$.fragment),kt=r(),y(oe.$$.fragment),Pe=r(),ne=l("div"),y(Ee.$$.fragment),pt=r(),It=l("p"),It.innerHTML=V,xe=r(),Kt=l("p"),Kt.innerHTML=De,Xo=r(),eo=l("p"),eo.innerHTML=Ge,Wo=r(),y(Xe.$$.fragment),Ae=r(),de=l("div"),y(Ye.$$.fragment),je=r(),S=l("p"),S.innerHTML=to,Ft=r(),y(wt.$$.fragment),xo=r(),y(Q.$$.fragment),Ze=r(),y(Ht.$$.fragment),ut=r(),y(ft.$$.fragment),po=r(),B=l("div"),y(Ke.$$.fragment),Le=r(),et=l("p"),et.innerHTML=vt,lo=r(),L=l("p"),L.innerHTML=$t,yo=r(),ue=l("p"),ue.innerHTML=uo,bo=r(),y(fe.$$.fragment),Lo=r(),ht=l("div"),y(H.$$.fragment),gt=r(),oo=l("p"),oo.innerHTML=tt,Bo=r(),y(Wt.$$.fragment),he=r(),y(no.$$.fragment),Oe=r(),Y=l("div"),y(Me.$$.fragment),St=r(),ge=l("p"),ge.textContent=To,_e=r(),ke=l("p"),ke.innerHTML=Fe,Re=r(),so=l("p"),so.innerHTML=xt,ro=r(),y(O.$$.fragment),_t=r(),K=l("div"),y(Ie.$$.fragment),co=r(),qt=l("p"),qt.innerHTML=fo,Qt=r(),y(Be.$$.fragment),He=r(),y(we.$$.fragment),ho=r(),y(ce.$$.fragment),Mo=r(),y(ye.$$.fragment),We=r(),Ce=l("div"),y(ot.$$.fragment),ve=r(),nt=l("p"),nt.textContent=Pt,ao=r(),w=l("p"),w.innerHTML=C,ae=r(),ee=l("p"),ee.innerHTML=$e,Et=r(),y(ie.$$.fragment),Nt=r(),G=l("div"),y(le.$$.fragment),Ho=r(),jt=l("p"),jt.innerHTML=Do,Rt=r(),y(st.$$.fragment),Ko=r(),y(At.$$.fragment),jo=r(),y(Ro.$$.fragment),ko=r(),Je=l("div"),y(Co.$$.fragment),Vt=r(),Ct=l("p"),Ct.textContent=nn,Jo=r(),yt=l("p"),yt.innerHTML=Uo,go=r(),mo=l("p"),mo.innerHTML=zo,So=r(),y(_.$$.fragment),R=r(),D=l("div"),y(bt.$$.fragment),rt=r(),Jt=l("p"),Jt.innerHTML=te,at=r(),y(qe.$$.fragment),Tt=r(),y(it.$$.fragment),Yt=r(),y(Ue.$$.fragment),Ot=r(),y(lt.$$.fragment),Zo=r(),dt=l("div"),y(Po.$$.fragment),en=r(),sn=l("p"),sn.innerHTML=dn,tn=r(),rn=l("p"),rn.innerHTML=cn,_o=r(),Io=l("p"),Io.innerHTML=mn,on=r(),y(Eo.$$.fragment),ln=r(),ct=l("div"),y(Ao.$$.fragment),Qo=r(),Yo=l("p"),Yo.innerHTML=v,z=r(),y(Gt.$$.fragment),Ut=r(),y(Xt.$$.fragment),zt=r(),y(Lt.$$.fragment),this.h()},l(p){b(e.$$.fragment,p),m=a(p),o=d(p,"DIV",{class:!0});var x=q(o);b(n.$$.fragment,x),h=a(x),t=d(x,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1labr43"&&(t.textContent=g),P=a(x),Z=d(x,"P",{"data-svelte-h":!0}),f(Z)!=="svelte-1qaxm70"&&(Z.innerHTML=J),E=a(x),I=d(x,"P",{"data-svelte-h":!0}),f(I)!=="svelte-1be7e3c"&&(I.innerHTML=U),A=a(x),b(u.$$.fragment,x),j=a(x),Ve=d(x,"DIV",{class:!0});var mt=q(Ve);b(me.$$.fragment,mt),Go=a(mt),Bt=d(mt,"P",{"data-svelte-h":!0}),f(Bt)!=="svelte-w518nl"&&(Bt.innerHTML=re),Zt=a(mt),b(pe.$$.fragment,mt),Dt=a(mt),b(Qe.$$.fragment,mt),mt.forEach(i),x.forEach(i),kt=a(p),b(oe.$$.fragment,p),Pe=a(p),ne=d(p,"DIV",{class:!0});var se=q(ne);b(Ee.$$.fragment,se),pt=a(se),It=d(se,"P",{"data-svelte-h":!0}),f(It)!=="svelte-7gmz8s"&&(It.innerHTML=V),xe=a(se),Kt=d(se,"P",{"data-svelte-h":!0}),f(Kt)!=="svelte-1qaxm70"&&(Kt.innerHTML=De),Xo=a(se),eo=d(se,"P",{"data-svelte-h":!0}),f(eo)!=="svelte-1be7e3c"&&(eo.innerHTML=Ge),Wo=a(se),b(Xe.$$.fragment,se),Ae=a(se),de=d(se,"DIV",{class:!0});var Se=q(de);b(Ye.$$.fragment,Se),je=a(Se),S=d(Se,"P",{"data-svelte-h":!0}),f(S)!=="svelte-bie4ad"&&(S.innerHTML=to),Ft=a(Se),b(wt.$$.fragment,Se),xo=a(Se),b(Q.$$.fragment,Se),Ze=a(Se),b(Ht.$$.fragment,Se),Se.forEach(i),se.forEach(i),ut=a(p),b(ft.$$.fragment,p),po=a(p),B=d(p,"DIV",{class:!0});var io=q(B);b(Ke.$$.fragment,io),Le=a(io),et=d(io,"P",{"data-svelte-h":!0}),f(et)!=="svelte-fci1kp"&&(et.innerHTML=vt),lo=a(io),L=d(io,"P",{"data-svelte-h":!0}),f(L)!=="svelte-1qaxm70"&&(L.innerHTML=$t),yo=a(io),ue=d(io,"P",{"data-svelte-h":!0}),f(ue)!=="svelte-1be7e3c"&&(ue.innerHTML=uo),bo=a(io),b(fe.$$.fragment,io),Lo=a(io),ht=d(io,"DIV",{class:!0});var an=q(ht);b(H.$$.fragment,an),gt=a(an),oo=d(an,"P",{"data-svelte-h":!0}),f(oo)!=="svelte-14fb007"&&(oo.innerHTML=tt),Bo=a(an),b(Wt.$$.fragment,an),an.forEach(i),io.forEach(i),he=a(p),b(no.$$.fragment,p),Oe=a(p),Y=d(p,"DIV",{class:!0});var Fo=q(Y);b(Me.$$.fragment,Fo),St=a(Fo),ge=d(Fo,"P",{"data-svelte-h":!0}),f(ge)!=="svelte-1twjtje"&&(ge.textContent=To),_e=a(Fo),ke=d(Fo,"P",{"data-svelte-h":!0}),f(ke)!=="svelte-1qaxm70"&&(ke.innerHTML=Fe),Re=a(Fo),so=d(Fo,"P",{"data-svelte-h":!0}),f(so)!=="svelte-1be7e3c"&&(so.innerHTML=xt),ro=a(Fo),b(O.$$.fragment,Fo),_t=a(Fo),K=d(Fo,"DIV",{class:!0});var qo=q(K);b(Ie.$$.fragment,qo),co=a(qo),qt=d(qo,"P",{"data-svelte-h":!0}),f(qt)!=="svelte-ehneg9"&&(qt.innerHTML=fo),Qt=a(qo),b(Be.$$.fragment,qo),He=a(qo),b(we.$$.fragment,qo),ho=a(qo),b(ce.$$.fragment,qo),qo.forEach(i),Fo.forEach(i),Mo=a(p),b(ye.$$.fragment,p),We=a(p),Ce=d(p,"DIV",{class:!0});var wo=q(Ce);b(ot.$$.fragment,wo),ve=a(wo),nt=d(wo,"P",{"data-svelte-h":!0}),f(nt)!=="svelte-1uwauhk"&&(nt.textContent=Pt),ao=a(wo),w=d(wo,"P",{"data-svelte-h":!0}),f(w)!=="svelte-1qaxm70"&&(w.innerHTML=C),ae=a(wo),ee=d(wo,"P",{"data-svelte-h":!0}),f(ee)!=="svelte-1be7e3c"&&(ee.innerHTML=$e),Et=a(wo),b(ie.$$.fragment,wo),Nt=a(wo),G=d(wo,"DIV",{class:!0});var Oo=q(G);b(le.$$.fragment,Oo),Ho=a(Oo),jt=d(Oo,"P",{"data-svelte-h":!0}),f(jt)!=="svelte-1ki6xed"&&(jt.innerHTML=Do),Rt=a(Oo),b(st.$$.fragment,Oo),Ko=a(Oo),b(At.$$.fragment,Oo),Oo.forEach(i),wo.forEach(i),jo=a(p),b(Ro.$$.fragment,p),ko=a(p),Je=d(p,"DIV",{class:!0});var vo=q(Je);b(Co.$$.fragment,vo),Vt=a(vo),Ct=d(vo,"P",{"data-svelte-h":!0}),f(Ct)!=="svelte-1hr7ir7"&&(Ct.textContent=nn),Jo=a(vo),yt=d(vo,"P",{"data-svelte-h":!0}),f(yt)!=="svelte-1qaxm70"&&(yt.innerHTML=Uo),go=a(vo),mo=d(vo,"P",{"data-svelte-h":!0}),f(mo)!=="svelte-1be7e3c"&&(mo.innerHTML=zo),So=a(vo),b(_.$$.fragment,vo),R=a(vo),D=d(vo,"DIV",{class:!0});var No=q(D);b(bt.$$.fragment,No),rt=a(No),Jt=d(No,"P",{"data-svelte-h":!0}),f(Jt)!=="svelte-efaikx"&&(Jt.innerHTML=te),at=a(No),b(qe.$$.fragment,No),Tt=a(No),b(it.$$.fragment,No),Yt=a(No),b(Ue.$$.fragment,No),No.forEach(i),vo.forEach(i),Ot=a(p),b(lt.$$.fragment,p),Zo=a(p),dt=d(p,"DIV",{class:!0});var $o=q(dt);b(Po.$$.fragment,$o),en=a($o),sn=d($o,"P",{"data-svelte-h":!0}),f(sn)!=="svelte-1id08ju"&&(sn.innerHTML=dn),tn=a($o),rn=d($o,"P",{"data-svelte-h":!0}),f(rn)!=="svelte-1qaxm70"&&(rn.innerHTML=cn),_o=a($o),Io=d($o,"P",{"data-svelte-h":!0}),f(Io)!=="svelte-1be7e3c"&&(Io.innerHTML=mn),on=a($o),b(Eo.$$.fragment,$o),ln=a($o),ct=d($o,"DIV",{class:!0});var Vo=q(ct);b(Ao.$$.fragment,Vo),Qo=a(Vo),Yo=d(Vo,"P",{"data-svelte-h":!0}),f(Yo)!=="svelte-e6waab"&&(Yo.innerHTML=v),z=a(Vo),b(Gt.$$.fragment,Vo),Ut=a(Vo),b(Xt.$$.fragment,Vo),zt=a(Vo),b(Lt.$$.fragment,Vo),Vo.forEach(i),$o.forEach(i),this.h()},h(){N(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(p,x){T(e,p,x),c(p,m,x),c(p,o,x),T(n,o,null),s(o,h),s(o,t),s(o,P),s(o,Z),s(o,E),s(o,I),s(o,A),T(u,o,null),s(o,j),s(o,Ve),T(me,Ve,null),s(Ve,Go),s(Ve,Bt),s(Ve,Zt),T(pe,Ve,null),s(Ve,Dt),T(Qe,Ve,null),c(p,kt,x),T(oe,p,x),c(p,Pe,x),c(p,ne,x),T(Ee,ne,null),s(ne,pt),s(ne,It),s(ne,xe),s(ne,Kt),s(ne,Xo),s(ne,eo),s(ne,Wo),T(Xe,ne,null),s(ne,Ae),s(ne,de),T(Ye,de,null),s(de,je),s(de,S),s(de,Ft),T(wt,de,null),s(de,xo),T(Q,de,null),s(de,Ze),T(Ht,de,null),c(p,ut,x),T(ft,p,x),c(p,po,x),c(p,B,x),T(Ke,B,null),s(B,Le),s(B,et),s(B,lo),s(B,L),s(B,yo),s(B,ue),s(B,bo),T(fe,B,null),s(B,Lo),s(B,ht),T(H,ht,null),s(ht,gt),s(ht,oo),s(ht,Bo),T(Wt,ht,null),c(p,he,x),T(no,p,x),c(p,Oe,x),c(p,Y,x),T(Me,Y,null),s(Y,St),s(Y,ge),s(Y,_e),s(Y,ke),s(Y,Re),s(Y,so),s(Y,ro),T(O,Y,null),s(Y,_t),s(Y,K),T(Ie,K,null),s(K,co),s(K,qt),s(K,Qt),T(Be,K,null),s(K,He),T(we,K,null),s(K,ho),T(ce,K,null),c(p,Mo,x),T(ye,p,x),c(p,We,x),c(p,Ce,x),T(ot,Ce,null),s(Ce,ve),s(Ce,nt),s(Ce,ao),s(Ce,w),s(Ce,ae),s(Ce,ee),s(Ce,Et),T(ie,Ce,null),s(Ce,Nt),s(Ce,G),T(le,G,null),s(G,Ho),s(G,jt),s(G,Rt),T(st,G,null),s(G,Ko),T(At,G,null),c(p,jo,x),T(Ro,p,x),c(p,ko,x),c(p,Je,x),T(Co,Je,null),s(Je,Vt),s(Je,Ct),s(Je,Jo),s(Je,yt),s(Je,go),s(Je,mo),s(Je,So),T(_,Je,null),s(Je,R),s(Je,D),T(bt,D,null),s(D,rt),s(D,Jt),s(D,at),T(qe,D,null),s(D,Tt),T(it,D,null),s(D,Yt),T(Ue,D,null),c(p,Ot,x),T(lt,p,x),c(p,Zo,x),c(p,dt,x),T(Po,dt,null),s(dt,en),s(dt,sn),s(dt,tn),s(dt,rn),s(dt,_o),s(dt,Io),s(dt,on),T(Eo,dt,null),s(dt,ln),s(dt,ct),T(Ao,ct,null),s(ct,Qo),s(ct,Yo),s(ct,z),T(Gt,ct,null),s(ct,Ut),T(Xt,ct,null),s(ct,zt),T(Lt,ct,null),Mt=!0},p(p,x){const mt={};x&2&&(mt.$$scope={dirty:x,ctx:p}),u.$set(mt);const se={};x&2&&(se.$$scope={dirty:x,ctx:p}),pe.$set(se);const Se={};x&2&&(Se.$$scope={dirty:x,ctx:p}),Qe.$set(Se);const io={};x&2&&(io.$$scope={dirty:x,ctx:p}),Xe.$set(io);const an={};x&2&&(an.$$scope={dirty:x,ctx:p}),wt.$set(an);const Fo={};x&2&&(Fo.$$scope={dirty:x,ctx:p}),Q.$set(Fo);const qo={};x&2&&(qo.$$scope={dirty:x,ctx:p}),Ht.$set(qo);const wo={};x&2&&(wo.$$scope={dirty:x,ctx:p}),fe.$set(wo);const Oo={};x&2&&(Oo.$$scope={dirty:x,ctx:p}),Wt.$set(Oo);const vo={};x&2&&(vo.$$scope={dirty:x,ctx:p}),O.$set(vo);const No={};x&2&&(No.$$scope={dirty:x,ctx:p}),Be.$set(No);const $o={};x&2&&($o.$$scope={dirty:x,ctx:p}),we.$set($o);const Vo={};x&2&&(Vo.$$scope={dirty:x,ctx:p}),ce.$set(Vo);const un={};x&2&&(un.$$scope={dirty:x,ctx:p}),ie.$set(un);const fn={};x&2&&(fn.$$scope={dirty:x,ctx:p}),st.$set(fn);const hn={};x&2&&(hn.$$scope={dirty:x,ctx:p}),At.$set(hn);const gn={};x&2&&(gn.$$scope={dirty:x,ctx:p}),_.$set(gn);const _n={};x&2&&(_n.$$scope={dirty:x,ctx:p}),qe.$set(_n);const yn={};x&2&&(yn.$$scope={dirty:x,ctx:p}),it.$set(yn);const bn={};x&2&&(bn.$$scope={dirty:x,ctx:p}),Ue.$set(bn);const Tn={};x&2&&(Tn.$$scope={dirty:x,ctx:p}),Eo.$set(Tn);const Mn={};x&2&&(Mn.$$scope={dirty:x,ctx:p}),Gt.$set(Mn);const kn={};x&2&&(kn.$$scope={dirty:x,ctx:p}),Xt.$set(kn);const Fn={};x&2&&(Fn.$$scope={dirty:x,ctx:p}),Lt.$set(Fn)},i(p){Mt||(M(e.$$.fragment,p),M(n.$$.fragment,p),M(u.$$.fragment,p),M(me.$$.fragment,p),M(pe.$$.fragment,p),M(Qe.$$.fragment,p),M(oe.$$.fragment,p),M(Ee.$$.fragment,p),M(Xe.$$.fragment,p),M(Ye.$$.fragment,p),M(wt.$$.fragment,p),M(Q.$$.fragment,p),M(Ht.$$.fragment,p),M(ft.$$.fragment,p),M(Ke.$$.fragment,p),M(fe.$$.fragment,p),M(H.$$.fragment,p),M(Wt.$$.fragment,p),M(no.$$.fragment,p),M(Me.$$.fragment,p),M(O.$$.fragment,p),M(Ie.$$.fragment,p),M(Be.$$.fragment,p),M(we.$$.fragment,p),M(ce.$$.fragment,p),M(ye.$$.fragment,p),M(ot.$$.fragment,p),M(ie.$$.fragment,p),M(le.$$.fragment,p),M(st.$$.fragment,p),M(At.$$.fragment,p),M(Ro.$$.fragment,p),M(Co.$$.fragment,p),M(_.$$.fragment,p),M(bt.$$.fragment,p),M(qe.$$.fragment,p),M(it.$$.fragment,p),M(Ue.$$.fragment,p),M(lt.$$.fragment,p),M(Po.$$.fragment,p),M(Eo.$$.fragment,p),M(Ao.$$.fragment,p),M(Gt.$$.fragment,p),M(Xt.$$.fragment,p),M(Lt.$$.fragment,p),Mt=!0)},o(p){k(e.$$.fragment,p),k(n.$$.fragment,p),k(u.$$.fragment,p),k(me.$$.fragment,p),k(pe.$$.fragment,p),k(Qe.$$.fragment,p),k(oe.$$.fragment,p),k(Ee.$$.fragment,p),k(Xe.$$.fragment,p),k(Ye.$$.fragment,p),k(wt.$$.fragment,p),k(Q.$$.fragment,p),k(Ht.$$.fragment,p),k(ft.$$.fragment,p),k(Ke.$$.fragment,p),k(fe.$$.fragment,p),k(H.$$.fragment,p),k(Wt.$$.fragment,p),k(no.$$.fragment,p),k(Me.$$.fragment,p),k(O.$$.fragment,p),k(Ie.$$.fragment,p),k(Be.$$.fragment,p),k(we.$$.fragment,p),k(ce.$$.fragment,p),k(ye.$$.fragment,p),k(ot.$$.fragment,p),k(ie.$$.fragment,p),k(le.$$.fragment,p),k(st.$$.fragment,p),k(At.$$.fragment,p),k(Ro.$$.fragment,p),k(Co.$$.fragment,p),k(_.$$.fragment,p),k(bt.$$.fragment,p),k(qe.$$.fragment,p),k(it.$$.fragment,p),k(Ue.$$.fragment,p),k(lt.$$.fragment,p),k(Po.$$.fragment,p),k(Eo.$$.fragment,p),k(Ao.$$.fragment,p),k(Gt.$$.fragment,p),k(Xt.$$.fragment,p),k(Lt.$$.fragment,p),Mt=!1},d(p){p&&(i(m),i(o),i(kt),i(Pe),i(ne),i(ut),i(po),i(B),i(he),i(Oe),i(Y),i(Mo),i(We),i(Ce),i(jo),i(ko),i(Je),i(Ot),i(Zo),i(dt)),F(e,p),F(n),F(u),F(me),F(pe),F(Qe),F(oe,p),F(Ee),F(Xe),F(Ye),F(wt),F(Q),F(Ht),F(ft,p),F(Ke),F(fe),F(H),F(Wt),F(no,p),F(Me),F(O),F(Ie),F(Be),F(we),F(ce),F(ye,p),F(ot),F(ie),F(le),F(st),F(At),F(Ro,p),F(Co),F(_),F(bt),F(qe),F(it),F(Ue),F(lt,p),F(Po),F(Eo),F(Ao),F(Gt),F(Xt),F(Lt)}}}function ks($){let e,m;return e=new pn({props:{$$slots:{default:[Ms]},$$scope:{ctx:$}}}),{c(){y(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,n){T(e,o,n),m=!0},p(o,n){const h={};n&2&&(h.$$scope={dirty:n,ctx:o}),e.$set(h)},i(o){m||(M(e.$$.fragment,o),m=!0)},o(o){k(e.$$.fragment,o),m=!1},d(o){F(e,o)}}}function Fs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function ws($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9Gb3JtZXJNb2RlbCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhSb0Zvcm1lck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRoFormerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function vs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function $s($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9Gb3JtZXJGb3JNYXNrZWRMTSUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhSb0Zvcm1lckZvck1hc2tlZExNLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwJTVCTUFTSyU1RC4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRoFormerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function xs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function js($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9Gb3JtZXJGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheFJvRm9ybWVyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Rs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function Cs($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9Gb3JtZXJGb3JNdWx0aXBsZUNob2ljZSUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhSb0Zvcm1lckZvck11bHRpcGxlQ2hvaWNlLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglNUJwcm9tcHQlMkMlMjBwcm9tcHQlNUQlMkMlMjAlNUJjaG9pY2UwJTJDJTIwY2hvaWNlMSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqJTdCayUzQSUyMHYlNUJOb25lJTJDJTIwJTNBJTVEJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QpJTBBJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRoFormerForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Js($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function Us($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9Gb3JtZXJGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheFJvRm9ybWVyRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyanVubnl1JTJGcm9mb3JtZXJfY2hpbmVzZV9iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRoFormerForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function zs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(o){e=d(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(o,n){c(o,e,n)},p:W,d(o){o&&i(e)}}}function Zs($){let e,m="Example:",o,n,h;return n=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9Gb3JtZXJGb3JRdWVzdGlvbkFuc3dlcmluZyUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmp1bm55dSUyRnJvZm9ybWVyX2NoaW5lc2VfYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhSb0Zvcm1lckZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJqdW5ueXUlMkZyb2Zvcm1lcl9jaGluZXNlX2Jhc2UlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQXN0YXJ0X3Njb3JlcyUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzJTBBZW5kX3Njb3JlcyUyMCUzRCUyMG91dHB1dHMuZW5kX2xvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRoFormerForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,o=r(),y(n.$$.fragment)},l(t){e=d(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=m),o=a(t),b(n.$$.fragment,t)},m(t,g){c(t,e,g),c(t,o,g),T(n,t,g),h=!0},p:W,i(t){h||(M(n.$$.fragment,t),h=!0)},o(t){k(n.$$.fragment,t),h=!1},d(t){t&&(i(e),i(o)),F(n,t)}}}function Is($){let e,m,o,n,h,t,g="The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.",P,Z,J=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,E,I,U=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,A,u,j="Finally, this model supports inherent JAX features such as:",Ve,me,Go='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Bt,re,Zt,pe,Dt,Qe="The <code>FlaxRoFormerPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",kt,oe,Pe,ne,Ee,pt,It,V,xe,Kt,De,Xo="RoFormer Model with a <code>language modeling</code> head on top.",eo,Ge,Wo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Xe,Ae,de=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Ye,je,S="Finally, this model supports inherent JAX features such as:",to,Ft,wt='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',xo,Q,Ze,Ht,ut,ft="The <code>FlaxRoFormerPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",po,B,Ke,Le,et,vt,lo,L,$t,yo,ue,uo=`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`,bo,fe,Lo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,ht,H,gt=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,oo,tt,Bo="Finally, this model supports inherent JAX features such as:",Wt,he,no='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Oe,Y,Me,St,ge,To="The <code>FlaxRoFormerPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",_e,ke,Fe,Re,so,xt,ro,O,_t,K,Ie,co=`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,qt,fo,Qt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Be,He,we=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,ho,ce,Mo="Finally, this model supports inherent JAX features such as:",ye,We,Ce='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',ot,ve,nt,Pt,ao,w="The <code>FlaxRoFormerPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",C,ae,ee,$e,Et,ie,Nt,G,le,Ho,jt,Do=`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Rt,st,Ko=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,At,jo,Ro=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,ko,Je,Co="Finally, this model supports inherent JAX features such as:",Vt,Ct,nn='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Jo,yt,Uo,go,mo,zo="The <code>FlaxRoFormerPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",So,_,R,D,bt,rt,Jt,te,at,qe,Tt,it=`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Yt,Ue,Ot=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,lt,Zo,dt=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Po,en,sn="Finally, this model supports inherent JAX features such as:",dn,tn,rn='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',cn,_o,Io,mn,on,Eo="The <code>FlaxRoFormerPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",ln,ct,Ao,Qo,Yo;return e=new ze({props:{title:"FlaxRoFormerModel",local:"transformers.FlaxRoFormerModel",headingTag:"h2"}}),n=new X({props:{name:"class transformers.FlaxRoFormerModel",anchor:"transformers.FlaxRoFormerModel",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L744"}}),Zt=new X({props:{name:"__call__",anchor:"transformers.FlaxRoFormerModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L654",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oe=new Ne({props:{$$slots:{default:[Fs]},$$scope:{ctx:$}}}),ne=new be({props:{anchor:"transformers.FlaxRoFormerModel.__call__.example",$$slots:{default:[ws]},$$scope:{ctx:$}}}),pt=new ze({props:{title:"FlaxRoFormerForMaskedLM",local:"transformers.FlaxRoFormerForMaskedLM",headingTag:"h2"}}),xe=new X({props:{name:"class transformers.FlaxRoFormerForMaskedLM",anchor:"transformers.FlaxRoFormerForMaskedLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L805"}}),Ze=new X({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L654",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),B=new Ne({props:{$$slots:{default:[vs]},$$scope:{ctx:$}}}),Le=new be({props:{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.example",$$slots:{default:[$s]},$$scope:{ctx:$}}}),vt=new ze({props:{title:"FlaxRoFormerForSequenceClassification",local:"transformers.FlaxRoFormerForSequenceClassification",headingTag:"h2"}}),$t=new X({props:{name:"class transformers.FlaxRoFormerForSequenceClassification",anchor:"transformers.FlaxRoFormerForSequenceClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L863"}}),Me=new X({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L654",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),ke=new Ne({props:{$$slots:{default:[xs]},$$scope:{ctx:$}}}),Re=new be({props:{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.example",$$slots:{default:[js]},$$scope:{ctx:$}}}),xt=new ze({props:{title:"FlaxRoFormerForMultipleChoice",local:"transformers.FlaxRoFormerForMultipleChoice",headingTag:"h2"}}),_t=new X({props:{name:"class transformers.FlaxRoFormerForMultipleChoice",anchor:"transformers.FlaxRoFormerForMultipleChoice",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L938"}}),nt=new X({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L654",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),ae=new Ne({props:{$$slots:{default:[Rs]},$$scope:{ctx:$}}}),$e=new be({props:{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.example",$$slots:{default:[Cs]},$$scope:{ctx:$}}}),ie=new ze({props:{title:"FlaxRoFormerForTokenClassification",local:"transformers.FlaxRoFormerForTokenClassification",headingTag:"h2"}}),le=new X({props:{name:"class transformers.FlaxRoFormerForTokenClassification",anchor:"transformers.FlaxRoFormerForTokenClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L1006"}}),Uo=new X({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L654",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),_=new Ne({props:{$$slots:{default:[Js]},$$scope:{ctx:$}}}),D=new be({props:{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.example",$$slots:{default:[Us]},$$scope:{ctx:$}}}),rt=new ze({props:{title:"FlaxRoFormerForQuestionAnswering",local:"transformers.FlaxRoFormerForQuestionAnswering",headingTag:"h2"}}),at=new X({props:{name:"class transformers.FlaxRoFormerForQuestionAnswering",anchor:"transformers.FlaxRoFormerForQuestionAnswering",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L1074"}}),Io=new X({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L654",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),ct=new Ne({props:{$$slots:{default:[zs]},$$scope:{ctx:$}}}),Qo=new be({props:{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.example",$$slots:{default:[Zs]},$$scope:{ctx:$}}}),{c(){y(e.$$.fragment),m=r(),o=l("div"),y(n.$$.fragment),h=r(),t=l("p"),t.textContent=g,P=r(),Z=l("p"),Z.innerHTML=J,E=r(),I=l("p"),I.innerHTML=U,A=r(),u=l("p"),u.textContent=j,Ve=r(),me=l("ul"),me.innerHTML=Go,Bt=r(),re=l("div"),y(Zt.$$.fragment),pe=r(),Dt=l("p"),Dt.innerHTML=Qe,kt=r(),y(oe.$$.fragment),Pe=r(),y(ne.$$.fragment),Ee=r(),y(pt.$$.fragment),It=r(),V=l("div"),y(xe.$$.fragment),Kt=r(),De=l("p"),De.innerHTML=Xo,eo=r(),Ge=l("p"),Ge.innerHTML=Wo,Xe=r(),Ae=l("p"),Ae.innerHTML=de,Ye=r(),je=l("p"),je.textContent=S,to=r(),Ft=l("ul"),Ft.innerHTML=wt,xo=r(),Q=l("div"),y(Ze.$$.fragment),Ht=r(),ut=l("p"),ut.innerHTML=ft,po=r(),y(B.$$.fragment),Ke=r(),y(Le.$$.fragment),et=r(),y(vt.$$.fragment),lo=r(),L=l("div"),y($t.$$.fragment),yo=r(),ue=l("p"),ue.textContent=uo,bo=r(),fe=l("p"),fe.innerHTML=Lo,ht=r(),H=l("p"),H.innerHTML=gt,oo=r(),tt=l("p"),tt.textContent=Bo,Wt=r(),he=l("ul"),he.innerHTML=no,Oe=r(),Y=l("div"),y(Me.$$.fragment),St=r(),ge=l("p"),ge.innerHTML=To,_e=r(),y(ke.$$.fragment),Fe=r(),y(Re.$$.fragment),so=r(),y(xt.$$.fragment),ro=r(),O=l("div"),y(_t.$$.fragment),K=r(),Ie=l("p"),Ie.textContent=co,qt=r(),fo=l("p"),fo.innerHTML=Qt,Be=r(),He=l("p"),He.innerHTML=we,ho=r(),ce=l("p"),ce.textContent=Mo,ye=r(),We=l("ul"),We.innerHTML=Ce,ot=r(),ve=l("div"),y(nt.$$.fragment),Pt=r(),ao=l("p"),ao.innerHTML=w,C=r(),y(ae.$$.fragment),ee=r(),y($e.$$.fragment),Et=r(),y(ie.$$.fragment),Nt=r(),G=l("div"),y(le.$$.fragment),Ho=r(),jt=l("p"),jt.textContent=Do,Rt=r(),st=l("p"),st.innerHTML=Ko,At=r(),jo=l("p"),jo.innerHTML=Ro,ko=r(),Je=l("p"),Je.textContent=Co,Vt=r(),Ct=l("ul"),Ct.innerHTML=nn,Jo=r(),yt=l("div"),y(Uo.$$.fragment),go=r(),mo=l("p"),mo.innerHTML=zo,So=r(),y(_.$$.fragment),R=r(),y(D.$$.fragment),bt=r(),y(rt.$$.fragment),Jt=r(),te=l("div"),y(at.$$.fragment),qe=r(),Tt=l("p"),Tt.innerHTML=it,Yt=r(),Ue=l("p"),Ue.innerHTML=Ot,lt=r(),Zo=l("p"),Zo.innerHTML=dt,Po=r(),en=l("p"),en.textContent=sn,dn=r(),tn=l("ul"),tn.innerHTML=rn,cn=r(),_o=l("div"),y(Io.$$.fragment),mn=r(),on=l("p"),on.innerHTML=Eo,ln=r(),y(ct.$$.fragment),Ao=r(),y(Qo.$$.fragment),this.h()},l(v){b(e.$$.fragment,v),m=a(v),o=d(v,"DIV",{class:!0});var z=q(o);b(n.$$.fragment,z),h=a(z),t=d(z,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1pub7x9"&&(t.textContent=g),P=a(z),Z=d(z,"P",{"data-svelte-h":!0}),f(Z)!=="svelte-3daxed"&&(Z.innerHTML=J),E=a(z),I=d(z,"P",{"data-svelte-h":!0}),f(I)!=="svelte-10nfsf3"&&(I.innerHTML=U),A=a(z),u=d(z,"P",{"data-svelte-h":!0}),f(u)!=="svelte-1pplc4a"&&(u.textContent=j),Ve=a(z),me=d(z,"UL",{"data-svelte-h":!0}),f(me)!=="svelte-1w7z84m"&&(me.innerHTML=Go),Bt=a(z),re=d(z,"DIV",{class:!0});var Gt=q(re);b(Zt.$$.fragment,Gt),pe=a(Gt),Dt=d(Gt,"P",{"data-svelte-h":!0}),f(Dt)!=="svelte-siine5"&&(Dt.innerHTML=Qe),kt=a(Gt),b(oe.$$.fragment,Gt),Pe=a(Gt),b(ne.$$.fragment,Gt),Gt.forEach(i),z.forEach(i),Ee=a(v),b(pt.$$.fragment,v),It=a(v),V=d(v,"DIV",{class:!0});var Ut=q(V);b(xe.$$.fragment,Ut),Kt=a(Ut),De=d(Ut,"P",{"data-svelte-h":!0}),f(De)!=="svelte-7gmz8s"&&(De.innerHTML=Xo),eo=a(Ut),Ge=d(Ut,"P",{"data-svelte-h":!0}),f(Ge)!=="svelte-3daxed"&&(Ge.innerHTML=Wo),Xe=a(Ut),Ae=d(Ut,"P",{"data-svelte-h":!0}),f(Ae)!=="svelte-10nfsf3"&&(Ae.innerHTML=de),Ye=a(Ut),je=d(Ut,"P",{"data-svelte-h":!0}),f(je)!=="svelte-1pplc4a"&&(je.textContent=S),to=a(Ut),Ft=d(Ut,"UL",{"data-svelte-h":!0}),f(Ft)!=="svelte-1w7z84m"&&(Ft.innerHTML=wt),xo=a(Ut),Q=d(Ut,"DIV",{class:!0});var Xt=q(Q);b(Ze.$$.fragment,Xt),Ht=a(Xt),ut=d(Xt,"P",{"data-svelte-h":!0}),f(ut)!=="svelte-siine5"&&(ut.innerHTML=ft),po=a(Xt),b(B.$$.fragment,Xt),Ke=a(Xt),b(Le.$$.fragment,Xt),Xt.forEach(i),Ut.forEach(i),et=a(v),b(vt.$$.fragment,v),lo=a(v),L=d(v,"DIV",{class:!0});var zt=q(L);b($t.$$.fragment,zt),yo=a(zt),ue=d(zt,"P",{"data-svelte-h":!0}),f(ue)!=="svelte-db97bs"&&(ue.textContent=uo),bo=a(zt),fe=d(zt,"P",{"data-svelte-h":!0}),f(fe)!=="svelte-3daxed"&&(fe.innerHTML=Lo),ht=a(zt),H=d(zt,"P",{"data-svelte-h":!0}),f(H)!=="svelte-10nfsf3"&&(H.innerHTML=gt),oo=a(zt),tt=d(zt,"P",{"data-svelte-h":!0}),f(tt)!=="svelte-1pplc4a"&&(tt.textContent=Bo),Wt=a(zt),he=d(zt,"UL",{"data-svelte-h":!0}),f(he)!=="svelte-1w7z84m"&&(he.innerHTML=no),Oe=a(zt),Y=d(zt,"DIV",{class:!0});var Lt=q(Y);b(Me.$$.fragment,Lt),St=a(Lt),ge=d(Lt,"P",{"data-svelte-h":!0}),f(ge)!=="svelte-siine5"&&(ge.innerHTML=To),_e=a(Lt),b(ke.$$.fragment,Lt),Fe=a(Lt),b(Re.$$.fragment,Lt),Lt.forEach(i),zt.forEach(i),so=a(v),b(xt.$$.fragment,v),ro=a(v),O=d(v,"DIV",{class:!0});var Mt=q(O);b(_t.$$.fragment,Mt),K=a(Mt),Ie=d(Mt,"P",{"data-svelte-h":!0}),f(Ie)!=="svelte-1uwauhk"&&(Ie.textContent=co),qt=a(Mt),fo=d(Mt,"P",{"data-svelte-h":!0}),f(fo)!=="svelte-3daxed"&&(fo.innerHTML=Qt),Be=a(Mt),He=d(Mt,"P",{"data-svelte-h":!0}),f(He)!=="svelte-10nfsf3"&&(He.innerHTML=we),ho=a(Mt),ce=d(Mt,"P",{"data-svelte-h":!0}),f(ce)!=="svelte-1pplc4a"&&(ce.textContent=Mo),ye=a(Mt),We=d(Mt,"UL",{"data-svelte-h":!0}),f(We)!=="svelte-1w7z84m"&&(We.innerHTML=Ce),ot=a(Mt),ve=d(Mt,"DIV",{class:!0});var p=q(ve);b(nt.$$.fragment,p),Pt=a(p),ao=d(p,"P",{"data-svelte-h":!0}),f(ao)!=="svelte-siine5"&&(ao.innerHTML=w),C=a(p),b(ae.$$.fragment,p),ee=a(p),b($e.$$.fragment,p),p.forEach(i),Mt.forEach(i),Et=a(v),b(ie.$$.fragment,v),Nt=a(v),G=d(v,"DIV",{class:!0});var x=q(G);b(le.$$.fragment,x),Ho=a(x),jt=d(x,"P",{"data-svelte-h":!0}),f(jt)!=="svelte-1hr7ir7"&&(jt.textContent=Do),Rt=a(x),st=d(x,"P",{"data-svelte-h":!0}),f(st)!=="svelte-3daxed"&&(st.innerHTML=Ko),At=a(x),jo=d(x,"P",{"data-svelte-h":!0}),f(jo)!=="svelte-10nfsf3"&&(jo.innerHTML=Ro),ko=a(x),Je=d(x,"P",{"data-svelte-h":!0}),f(Je)!=="svelte-1pplc4a"&&(Je.textContent=Co),Vt=a(x),Ct=d(x,"UL",{"data-svelte-h":!0}),f(Ct)!=="svelte-1w7z84m"&&(Ct.innerHTML=nn),Jo=a(x),yt=d(x,"DIV",{class:!0});var mt=q(yt);b(Uo.$$.fragment,mt),go=a(mt),mo=d(mt,"P",{"data-svelte-h":!0}),f(mo)!=="svelte-siine5"&&(mo.innerHTML=zo),So=a(mt),b(_.$$.fragment,mt),R=a(mt),b(D.$$.fragment,mt),mt.forEach(i),x.forEach(i),bt=a(v),b(rt.$$.fragment,v),Jt=a(v),te=d(v,"DIV",{class:!0});var se=q(te);b(at.$$.fragment,se),qe=a(se),Tt=d(se,"P",{"data-svelte-h":!0}),f(Tt)!=="svelte-fl0b85"&&(Tt.innerHTML=it),Yt=a(se),Ue=d(se,"P",{"data-svelte-h":!0}),f(Ue)!=="svelte-3daxed"&&(Ue.innerHTML=Ot),lt=a(se),Zo=d(se,"P",{"data-svelte-h":!0}),f(Zo)!=="svelte-10nfsf3"&&(Zo.innerHTML=dt),Po=a(se),en=d(se,"P",{"data-svelte-h":!0}),f(en)!=="svelte-1pplc4a"&&(en.textContent=sn),dn=a(se),tn=d(se,"UL",{"data-svelte-h":!0}),f(tn)!=="svelte-1w7z84m"&&(tn.innerHTML=rn),cn=a(se),_o=d(se,"DIV",{class:!0});var Se=q(_o);b(Io.$$.fragment,Se),mn=a(Se),on=d(Se,"P",{"data-svelte-h":!0}),f(on)!=="svelte-siine5"&&(on.innerHTML=Eo),ln=a(Se),b(ct.$$.fragment,Se),Ao=a(Se),b(Qo.$$.fragment,Se),Se.forEach(i),se.forEach(i),this.h()},h(){N(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(v,z){T(e,v,z),c(v,m,z),c(v,o,z),T(n,o,null),s(o,h),s(o,t),s(o,P),s(o,Z),s(o,E),s(o,I),s(o,A),s(o,u),s(o,Ve),s(o,me),s(o,Bt),s(o,re),T(Zt,re,null),s(re,pe),s(re,Dt),s(re,kt),T(oe,re,null),s(re,Pe),T(ne,re,null),c(v,Ee,z),T(pt,v,z),c(v,It,z),c(v,V,z),T(xe,V,null),s(V,Kt),s(V,De),s(V,eo),s(V,Ge),s(V,Xe),s(V,Ae),s(V,Ye),s(V,je),s(V,to),s(V,Ft),s(V,xo),s(V,Q),T(Ze,Q,null),s(Q,Ht),s(Q,ut),s(Q,po),T(B,Q,null),s(Q,Ke),T(Le,Q,null),c(v,et,z),T(vt,v,z),c(v,lo,z),c(v,L,z),T($t,L,null),s(L,yo),s(L,ue),s(L,bo),s(L,fe),s(L,ht),s(L,H),s(L,oo),s(L,tt),s(L,Wt),s(L,he),s(L,Oe),s(L,Y),T(Me,Y,null),s(Y,St),s(Y,ge),s(Y,_e),T(ke,Y,null),s(Y,Fe),T(Re,Y,null),c(v,so,z),T(xt,v,z),c(v,ro,z),c(v,O,z),T(_t,O,null),s(O,K),s(O,Ie),s(O,qt),s(O,fo),s(O,Be),s(O,He),s(O,ho),s(O,ce),s(O,ye),s(O,We),s(O,ot),s(O,ve),T(nt,ve,null),s(ve,Pt),s(ve,ao),s(ve,C),T(ae,ve,null),s(ve,ee),T($e,ve,null),c(v,Et,z),T(ie,v,z),c(v,Nt,z),c(v,G,z),T(le,G,null),s(G,Ho),s(G,jt),s(G,Rt),s(G,st),s(G,At),s(G,jo),s(G,ko),s(G,Je),s(G,Vt),s(G,Ct),s(G,Jo),s(G,yt),T(Uo,yt,null),s(yt,go),s(yt,mo),s(yt,So),T(_,yt,null),s(yt,R),T(D,yt,null),c(v,bt,z),T(rt,v,z),c(v,Jt,z),c(v,te,z),T(at,te,null),s(te,qe),s(te,Tt),s(te,Yt),s(te,Ue),s(te,lt),s(te,Zo),s(te,Po),s(te,en),s(te,dn),s(te,tn),s(te,cn),s(te,_o),T(Io,_o,null),s(_o,mn),s(_o,on),s(_o,ln),T(ct,_o,null),s(_o,Ao),T(Qo,_o,null),Yo=!0},p(v,z){const Gt={};z&2&&(Gt.$$scope={dirty:z,ctx:v}),oe.$set(Gt);const Ut={};z&2&&(Ut.$$scope={dirty:z,ctx:v}),ne.$set(Ut);const Xt={};z&2&&(Xt.$$scope={dirty:z,ctx:v}),B.$set(Xt);const zt={};z&2&&(zt.$$scope={dirty:z,ctx:v}),Le.$set(zt);const Lt={};z&2&&(Lt.$$scope={dirty:z,ctx:v}),ke.$set(Lt);const Mt={};z&2&&(Mt.$$scope={dirty:z,ctx:v}),Re.$set(Mt);const p={};z&2&&(p.$$scope={dirty:z,ctx:v}),ae.$set(p);const x={};z&2&&(x.$$scope={dirty:z,ctx:v}),$e.$set(x);const mt={};z&2&&(mt.$$scope={dirty:z,ctx:v}),_.$set(mt);const se={};z&2&&(se.$$scope={dirty:z,ctx:v}),D.$set(se);const Se={};z&2&&(Se.$$scope={dirty:z,ctx:v}),ct.$set(Se);const io={};z&2&&(io.$$scope={dirty:z,ctx:v}),Qo.$set(io)},i(v){Yo||(M(e.$$.fragment,v),M(n.$$.fragment,v),M(Zt.$$.fragment,v),M(oe.$$.fragment,v),M(ne.$$.fragment,v),M(pt.$$.fragment,v),M(xe.$$.fragment,v),M(Ze.$$.fragment,v),M(B.$$.fragment,v),M(Le.$$.fragment,v),M(vt.$$.fragment,v),M($t.$$.fragment,v),M(Me.$$.fragment,v),M(ke.$$.fragment,v),M(Re.$$.fragment,v),M(xt.$$.fragment,v),M(_t.$$.fragment,v),M(nt.$$.fragment,v),M(ae.$$.fragment,v),M($e.$$.fragment,v),M(ie.$$.fragment,v),M(le.$$.fragment,v),M(Uo.$$.fragment,v),M(_.$$.fragment,v),M(D.$$.fragment,v),M(rt.$$.fragment,v),M(at.$$.fragment,v),M(Io.$$.fragment,v),M(ct.$$.fragment,v),M(Qo.$$.fragment,v),Yo=!0)},o(v){k(e.$$.fragment,v),k(n.$$.fragment,v),k(Zt.$$.fragment,v),k(oe.$$.fragment,v),k(ne.$$.fragment,v),k(pt.$$.fragment,v),k(xe.$$.fragment,v),k(Ze.$$.fragment,v),k(B.$$.fragment,v),k(Le.$$.fragment,v),k(vt.$$.fragment,v),k($t.$$.fragment,v),k(Me.$$.fragment,v),k(ke.$$.fragment,v),k(Re.$$.fragment,v),k(xt.$$.fragment,v),k(_t.$$.fragment,v),k(nt.$$.fragment,v),k(ae.$$.fragment,v),k($e.$$.fragment,v),k(ie.$$.fragment,v),k(le.$$.fragment,v),k(Uo.$$.fragment,v),k(_.$$.fragment,v),k(D.$$.fragment,v),k(rt.$$.fragment,v),k(at.$$.fragment,v),k(Io.$$.fragment,v),k(ct.$$.fragment,v),k(Qo.$$.fragment,v),Yo=!1},d(v){v&&(i(m),i(o),i(Ee),i(It),i(V),i(et),i(lo),i(L),i(so),i(ro),i(O),i(Et),i(Nt),i(G),i(bt),i(Jt),i(te)),F(e,v),F(n),F(Zt),F(oe),F(ne),F(pt,v),F(xe),F(Ze),F(B),F(Le),F(vt,v),F($t),F(Me),F(ke),F(Re),F(xt,v),F(_t),F(nt),F(ae),F($e),F(ie,v),F(le),F(Uo),F(_),F(D),F(rt,v),F(at),F(Io),F(ct),F(Qo)}}}function Ws($){let e,m;return e=new pn({props:{$$slots:{default:[Is]},$$scope:{ctx:$}}}),{c(){y(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,n){T(e,o,n),m=!0},p(o,n){const h={};n&2&&(h.$$scope={dirty:n,ctx:o}),e.$set(h)},i(o){m||(M(e.$$.fragment,o),m=!0)},o(o){k(e.$$.fragment,o),m=!1},d(o){F(e,o)}}}function qs($){let e,m,o,n,h,t,g,P,Z,J='The RoFormer model was proposed in <a href="https://arxiv.org/pdf/2104.09864v1.pdf" rel="nofollow">RoFormer: Enhanced Transformer with Rotary Position Embedding</a> by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu.',E,I,U="The abstract from the paper is the following:",A,u,j=`<em>Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.</em>`,Ve,me,Go='This model was contributed by <a href="https://huggingface.co/junnyu" rel="nofollow">junnyu</a>. The original code can be found <a href="https://github.com/ZhuiyiTechnology/roformer" rel="nofollow">here</a>.',Bt,re,Zt,pe,Dt=`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`,Qe,kt,oe,Pe,ne='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',Ee,pt,It,V,xe,Kt,De,Xo=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a>. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
<a href="https://huggingface.co/junnyu/roformer_chinese_base" rel="nofollow">junnyu/roformer_chinese_base</a> architecture.`,eo,Ge,Wo=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Xe,Ae,de,Ye,je,S,to,Ft,wt,xo='Construct a RoFormer tokenizer. Based on <a href="https://pypi.org/project/rjieba/" rel="nofollow">Rust Jieba</a>.',Q,Ze,Ht=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,ut,ft,po,B,Ke,Le,et,vt=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`,lo,L,$t="<li>single sequence: <code>[CLS] X [SEP]</code></li> <li>pair of sequences: <code>[CLS] A [SEP] B [SEP]</code></li>",yo,ue,uo,bo,fe,Lo=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,ht,H,gt,oo,tt,Bo="Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer",Wt,he,no,Oe,Y="If <code>token_ids_1</code> is <code>None</code>, this method only returns the first portion of the mask (0s).",Me,St,ge,To,_e,ke,Fe,Re,so,xt,ro="Construct a “fast” RoFormer tokenizer (backed by HuggingFace’s <em>tokenizers</em> library).",O,_t,K=`<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizerFast">RoFormerTokenizerFast</a> is almost identical to <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast">BertTokenizerFast</a> and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`,Ie,co,qt=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,fo,Qt,Be,He,we,ho,ce,Mo=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`,ye,We,Ce="<li>single sequence: <code>[CLS] X [SEP]</code></li> <li>pair of sequences: <code>[CLS] A [SEP] B [SEP]</code></li>",ot,ve,nt,Pt,ao;return h=new ze({props:{title:"RoFormer",local:"roformer",headingTag:"h1"}}),g=new ze({props:{title:"Overview",local:"overview",headingTag:"h2"}}),re=new ze({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),kt=new ze({props:{title:"Resources",local:"resources",headingTag:"h2"}}),pt=new ze({props:{title:"RoFormerConfig",local:"transformers.RoFormerConfig",headingTag:"h2"}}),xe=new X({props:{name:"class transformers.RoFormerConfig",anchor:"transformers.RoFormerConfig",parameters:[{name:"vocab_size",val:" = 50000"},{name:"embedding_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1536"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"rotary_value",val:" = False"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50000) &#x2014;
Vocabulary size of the RoFormer model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"vocab_size"},{anchor:"transformers.RoFormerConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the encoder layers and the pooler layer. Defaults to the <code>hidden_size</code> if not provided.`,name:"embedding_size"},{anchor:"transformers.RoFormerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RoFormerConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RoFormerConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RoFormerConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RoFormerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RoFormerConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RoFormerConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RoFormerConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 1536).`,name:"max_position_embeddings"},{anchor:"transformers.RoFormerConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RoFormerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RoFormerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RoFormerConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as a decoder or not. If <code>False</code>, the model is used as an encoder.`,name:"is_decoder"},{anchor:"transformers.RoFormerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RoFormerConfig.rotary_value",description:`<strong>rotary_value</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not apply rotary position embeddings on value layer.`,name:"rotary_value"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/configuration_roformer.py#L46"}}),Ae=new be({props:{anchor:"transformers.RoFormerConfig.example",$$slots:{default:[Cn]},$$scope:{ctx:$}}}),Ye=new ze({props:{title:"RoFormerTokenizer",local:"transformers.RoFormerTokenizer",headingTag:"h2"}}),to=new X({props:{name:"class transformers.RoFormerTokenizer",anchor:"transformers.RoFormerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.RoFormerTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.RoFormerTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.RoFormerTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.RoFormerTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RoFormerTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RoFormerTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RoFormerTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RoFormerTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RoFormerTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.RoFormerTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L311"}}),ft=new be({props:{anchor:"transformers.RoFormerTokenizer.example",$$slots:{default:[Jn]},$$scope:{ctx:$}}}),Ke=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L478",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),uo=new X({props:{name:"get_special_tokens_mask",anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L503",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),gt=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L531",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),he=new be({props:{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Un]},$$scope:{ctx:$}}}),ge=new X({props:{name:"save_vocabulary",anchor:"transformers.RoFormerTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L560"}}),_e=new ze({props:{title:"RoFormerTokenizerFast",local:"transformers.RoFormerTokenizerFast",headingTag:"h2"}}),Re=new X({props:{name:"class transformers.RoFormerTokenizerFast",anchor:"transformers.RoFormerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/tokenization_roformer_fast.py#L71"}}),Qt=new be({props:{anchor:"transformers.RoFormerTokenizerFast.example",$$slots:{default:[zn]},$$scope:{ctx:$}}}),we=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roformer/tokenization_roformer_fast.py#L151",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ve=new Rn({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Ws],tensorflow:[ks],pytorch:[Yn]},$$scope:{ctx:$}}}),{c(){e=l("meta"),m=r(),o=l("p"),n=r(),y(h.$$.fragment),t=r(),y(g.$$.fragment),P=r(),Z=l("p"),Z.innerHTML=J,E=r(),I=l("p"),I.textContent=U,A=r(),u=l("p"),u.innerHTML=j,Ve=r(),me=l("p"),me.innerHTML=Go,Bt=r(),y(re.$$.fragment),Zt=r(),pe=l("p"),pe.textContent=Dt,Qe=r(),y(kt.$$.fragment),oe=r(),Pe=l("ul"),Pe.innerHTML=ne,Ee=r(),y(pt.$$.fragment),It=r(),V=l("div"),y(xe.$$.fragment),Kt=r(),De=l("p"),De.innerHTML=Xo,eo=r(),Ge=l("p"),Ge.innerHTML=Wo,Xe=r(),y(Ae.$$.fragment),de=r(),y(Ye.$$.fragment),je=r(),S=l("div"),y(to.$$.fragment),Ft=r(),wt=l("p"),wt.innerHTML=xo,Q=r(),Ze=l("p"),Ze.innerHTML=Ht,ut=r(),y(ft.$$.fragment),po=r(),B=l("div"),y(Ke.$$.fragment),Le=r(),et=l("p"),et.textContent=vt,lo=r(),L=l("ul"),L.innerHTML=$t,yo=r(),ue=l("div"),y(uo.$$.fragment),bo=r(),fe=l("p"),fe.innerHTML=Lo,ht=r(),H=l("div"),y(gt.$$.fragment),oo=r(),tt=l("p"),tt.textContent=Bo,Wt=r(),y(he.$$.fragment),no=r(),Oe=l("p"),Oe.innerHTML=Y,Me=r(),St=l("div"),y(ge.$$.fragment),To=r(),y(_e.$$.fragment),ke=r(),Fe=l("div"),y(Re.$$.fragment),so=r(),xt=l("p"),xt.innerHTML=ro,O=r(),_t=l("p"),_t.innerHTML=K,Ie=r(),co=l("p"),co.innerHTML=qt,fo=r(),y(Qt.$$.fragment),Be=r(),He=l("div"),y(we.$$.fragment),ho=r(),ce=l("p"),ce.textContent=Mo,ye=r(),We=l("ul"),We.innerHTML=Ce,ot=r(),y(ve.$$.fragment),nt=r(),Pt=l("p"),this.h()},l(w){const C=jn("svelte-u9bgzb",document.head);e=d(C,"META",{name:!0,content:!0}),C.forEach(i),m=a(w),o=d(w,"P",{}),q(o).forEach(i),n=a(w),b(h.$$.fragment,w),t=a(w),b(g.$$.fragment,w),P=a(w),Z=d(w,"P",{"data-svelte-h":!0}),f(Z)!=="svelte-o17ojp"&&(Z.innerHTML=J),E=a(w),I=d(w,"P",{"data-svelte-h":!0}),f(I)!=="svelte-vfdo9a"&&(I.textContent=U),A=a(w),u=d(w,"P",{"data-svelte-h":!0}),f(u)!=="svelte-ory4nc"&&(u.innerHTML=j),Ve=a(w),me=d(w,"P",{"data-svelte-h":!0}),f(me)!=="svelte-10tmkzz"&&(me.innerHTML=Go),Bt=a(w),b(re.$$.fragment,w),Zt=a(w),pe=d(w,"P",{"data-svelte-h":!0}),f(pe)!=="svelte-1671pib"&&(pe.textContent=Dt),Qe=a(w),b(kt.$$.fragment,w),oe=a(w),Pe=d(w,"UL",{"data-svelte-h":!0}),f(Pe)!=="svelte-p1b16m"&&(Pe.innerHTML=ne),Ee=a(w),b(pt.$$.fragment,w),It=a(w),V=d(w,"DIV",{class:!0});var ae=q(V);b(xe.$$.fragment,ae),Kt=a(ae),De=d(ae,"P",{"data-svelte-h":!0}),f(De)!=="svelte-qqcxu5"&&(De.innerHTML=Xo),eo=a(ae),Ge=d(ae,"P",{"data-svelte-h":!0}),f(Ge)!=="svelte-o55m63"&&(Ge.innerHTML=Wo),Xe=a(ae),b(Ae.$$.fragment,ae),ae.forEach(i),de=a(w),b(Ye.$$.fragment,w),je=a(w),S=d(w,"DIV",{class:!0});var ee=q(S);b(to.$$.fragment,ee),Ft=a(ee),wt=d(ee,"P",{"data-svelte-h":!0}),f(wt)!=="svelte-1ygx4dd"&&(wt.innerHTML=xo),Q=a(ee),Ze=d(ee,"P",{"data-svelte-h":!0}),f(Ze)!=="svelte-1c3t5ty"&&(Ze.innerHTML=Ht),ut=a(ee),b(ft.$$.fragment,ee),po=a(ee),B=d(ee,"DIV",{class:!0});var $e=q(B);b(Ke.$$.fragment,$e),Le=a($e),et=d($e,"P",{"data-svelte-h":!0}),f(et)!=="svelte-1h5xar7"&&(et.textContent=vt),lo=a($e),L=d($e,"UL",{"data-svelte-h":!0}),f(L)!=="svelte-xi6653"&&(L.innerHTML=$t),$e.forEach(i),yo=a(ee),ue=d(ee,"DIV",{class:!0});var Et=q(ue);b(uo.$$.fragment,Et),bo=a(Et),fe=d(Et,"P",{"data-svelte-h":!0}),f(fe)!=="svelte-1f4f5kp"&&(fe.innerHTML=Lo),Et.forEach(i),ht=a(ee),H=d(ee,"DIV",{class:!0});var ie=q(H);b(gt.$$.fragment,ie),oo=a(ie),tt=d(ie,"P",{"data-svelte-h":!0}),f(tt)!=="svelte-1rltcgt"&&(tt.textContent=Bo),Wt=a(ie),b(he.$$.fragment,ie),no=a(ie),Oe=d(ie,"P",{"data-svelte-h":!0}),f(Oe)!=="svelte-owoxgn"&&(Oe.innerHTML=Y),ie.forEach(i),Me=a(ee),St=d(ee,"DIV",{class:!0});var Nt=q(St);b(ge.$$.fragment,Nt),Nt.forEach(i),ee.forEach(i),To=a(w),b(_e.$$.fragment,w),ke=a(w),Fe=d(w,"DIV",{class:!0});var G=q(Fe);b(Re.$$.fragment,G),so=a(G),xt=d(G,"P",{"data-svelte-h":!0}),f(xt)!=="svelte-6k11b2"&&(xt.innerHTML=ro),O=a(G),_t=d(G,"P",{"data-svelte-h":!0}),f(_t)!=="svelte-iidu1b"&&(_t.innerHTML=K),Ie=a(G),co=d(G,"P",{"data-svelte-h":!0}),f(co)!=="svelte-fh0aq"&&(co.innerHTML=qt),fo=a(G),b(Qt.$$.fragment,G),Be=a(G),He=d(G,"DIV",{class:!0});var le=q(He);b(we.$$.fragment,le),ho=a(le),ce=d(le,"P",{"data-svelte-h":!0}),f(ce)!=="svelte-1h5xar7"&&(ce.textContent=Mo),ye=a(le),We=d(le,"UL",{"data-svelte-h":!0}),f(We)!=="svelte-xi6653"&&(We.innerHTML=Ce),le.forEach(i),G.forEach(i),ot=a(w),b(ve.$$.fragment,w),nt=a(w),Pt=d(w,"P",{}),q(Pt).forEach(i),this.h()},h(){N(e,"name","hf:doc:metadata"),N(e,"content",Ns),N(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),N(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(w,C){s(document.head,e),c(w,m,C),c(w,o,C),c(w,n,C),T(h,w,C),c(w,t,C),T(g,w,C),c(w,P,C),c(w,Z,C),c(w,E,C),c(w,I,C),c(w,A,C),c(w,u,C),c(w,Ve,C),c(w,me,C),c(w,Bt,C),T(re,w,C),c(w,Zt,C),c(w,pe,C),c(w,Qe,C),T(kt,w,C),c(w,oe,C),c(w,Pe,C),c(w,Ee,C),T(pt,w,C),c(w,It,C),c(w,V,C),T(xe,V,null),s(V,Kt),s(V,De),s(V,eo),s(V,Ge),s(V,Xe),T(Ae,V,null),c(w,de,C),T(Ye,w,C),c(w,je,C),c(w,S,C),T(to,S,null),s(S,Ft),s(S,wt),s(S,Q),s(S,Ze),s(S,ut),T(ft,S,null),s(S,po),s(S,B),T(Ke,B,null),s(B,Le),s(B,et),s(B,lo),s(B,L),s(S,yo),s(S,ue),T(uo,ue,null),s(ue,bo),s(ue,fe),s(S,ht),s(S,H),T(gt,H,null),s(H,oo),s(H,tt),s(H,Wt),T(he,H,null),s(H,no),s(H,Oe),s(S,Me),s(S,St),T(ge,St,null),c(w,To,C),T(_e,w,C),c(w,ke,C),c(w,Fe,C),T(Re,Fe,null),s(Fe,so),s(Fe,xt),s(Fe,O),s(Fe,_t),s(Fe,Ie),s(Fe,co),s(Fe,fo),T(Qt,Fe,null),s(Fe,Be),s(Fe,He),T(we,He,null),s(He,ho),s(He,ce),s(He,ye),s(He,We),c(w,ot,C),T(ve,w,C),c(w,nt,C),c(w,Pt,C),ao=!0},p(w,[C]){const ae={};C&2&&(ae.$$scope={dirty:C,ctx:w}),Ae.$set(ae);const ee={};C&2&&(ee.$$scope={dirty:C,ctx:w}),ft.$set(ee);const $e={};C&2&&($e.$$scope={dirty:C,ctx:w}),he.$set($e);const Et={};C&2&&(Et.$$scope={dirty:C,ctx:w}),Qt.$set(Et);const ie={};C&2&&(ie.$$scope={dirty:C,ctx:w}),ve.$set(ie)},i(w){ao||(M(h.$$.fragment,w),M(g.$$.fragment,w),M(re.$$.fragment,w),M(kt.$$.fragment,w),M(pt.$$.fragment,w),M(xe.$$.fragment,w),M(Ae.$$.fragment,w),M(Ye.$$.fragment,w),M(to.$$.fragment,w),M(ft.$$.fragment,w),M(Ke.$$.fragment,w),M(uo.$$.fragment,w),M(gt.$$.fragment,w),M(he.$$.fragment,w),M(ge.$$.fragment,w),M(_e.$$.fragment,w),M(Re.$$.fragment,w),M(Qt.$$.fragment,w),M(we.$$.fragment,w),M(ve.$$.fragment,w),ao=!0)},o(w){k(h.$$.fragment,w),k(g.$$.fragment,w),k(re.$$.fragment,w),k(kt.$$.fragment,w),k(pt.$$.fragment,w),k(xe.$$.fragment,w),k(Ae.$$.fragment,w),k(Ye.$$.fragment,w),k(to.$$.fragment,w),k(ft.$$.fragment,w),k(Ke.$$.fragment,w),k(uo.$$.fragment,w),k(gt.$$.fragment,w),k(he.$$.fragment,w),k(ge.$$.fragment,w),k(_e.$$.fragment,w),k(Re.$$.fragment,w),k(Qt.$$.fragment,w),k(we.$$.fragment,w),k(ve.$$.fragment,w),ao=!1},d(w){w&&(i(m),i(o),i(n),i(t),i(P),i(Z),i(E),i(I),i(A),i(u),i(Ve),i(me),i(Bt),i(Zt),i(pe),i(Qe),i(oe),i(Pe),i(Ee),i(It),i(V),i(de),i(je),i(S),i(To),i(ke),i(Fe),i(ot),i(nt),i(Pt)),i(e),F(h,w),F(g,w),F(re,w),F(kt,w),F(pt,w),F(xe),F(Ae),F(Ye,w),F(to),F(ft),F(Ke),F(uo),F(gt),F(he),F(ge),F(_e,w),F(Re),F(Qt),F(we),F(ve,w)}}}const Ns='{"title":"RoFormer","local":"roformer","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"RoFormerConfig","local":"transformers.RoFormerConfig","sections":[],"depth":2},{"title":"RoFormerTokenizer","local":"transformers.RoFormerTokenizer","sections":[],"depth":2},{"title":"RoFormerTokenizerFast","local":"transformers.RoFormerTokenizerFast","sections":[],"depth":2},{"title":"RoFormerModel","local":"transformers.RoFormerModel","sections":[],"depth":2},{"title":"RoFormerForCausalLM","local":"transformers.RoFormerForCausalLM","sections":[],"depth":2},{"title":"RoFormerForMaskedLM","local":"transformers.RoFormerForMaskedLM","sections":[],"depth":2},{"title":"RoFormerForSequenceClassification","local":"transformers.RoFormerForSequenceClassification","sections":[],"depth":2},{"title":"RoFormerForMultipleChoice","local":"transformers.RoFormerForMultipleChoice","sections":[],"depth":2},{"title":"RoFormerForTokenClassification","local":"transformers.RoFormerForTokenClassification","sections":[],"depth":2},{"title":"RoFormerForQuestionAnswering","local":"transformers.RoFormerForQuestionAnswering","sections":[],"depth":2},{"title":"TFRoFormerModel","local":"transformers.TFRoFormerModel","sections":[],"depth":2},{"title":"TFRoFormerForMaskedLM","local":"transformers.TFRoFormerForMaskedLM","sections":[],"depth":2},{"title":"TFRoFormerForCausalLM","local":"transformers.TFRoFormerForCausalLM","sections":[],"depth":2},{"title":"TFRoFormerForSequenceClassification","local":"transformers.TFRoFormerForSequenceClassification","sections":[],"depth":2},{"title":"TFRoFormerForMultipleChoice","local":"transformers.TFRoFormerForMultipleChoice","sections":[],"depth":2},{"title":"TFRoFormerForTokenClassification","local":"transformers.TFRoFormerForTokenClassification","sections":[],"depth":2},{"title":"TFRoFormerForQuestionAnswering","local":"transformers.TFRoFormerForQuestionAnswering","sections":[],"depth":2},{"title":"FlaxRoFormerModel","local":"transformers.FlaxRoFormerModel","sections":[],"depth":2},{"title":"FlaxRoFormerForMaskedLM","local":"transformers.FlaxRoFormerForMaskedLM","sections":[],"depth":2},{"title":"FlaxRoFormerForSequenceClassification","local":"transformers.FlaxRoFormerForSequenceClassification","sections":[],"depth":2},{"title":"FlaxRoFormerForMultipleChoice","local":"transformers.FlaxRoFormerForMultipleChoice","sections":[],"depth":2},{"title":"FlaxRoFormerForTokenClassification","local":"transformers.FlaxRoFormerForTokenClassification","sections":[],"depth":2},{"title":"FlaxRoFormerForQuestionAnswering","local":"transformers.FlaxRoFormerForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function Vs($){return vn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Es extends $n{constructor(e){super(),xn(this,e,Vs,qs,wn,{})}}export{Es as component};
