import{s as zo,o as qo,n as Z}from"../chunks/scheduler.9bc65507.js";import{S as Io,i as Zo,g as d,s as r,r as _,A as Ho,h as c,f as o,c as i,j as U,u as b,x as g,k as J,y as a,a as p,v as T,d as k,t as M,w as y}from"../chunks/index.707bf1b6.js";import{T as lt}from"../chunks/Tip.c2ecdbf4.js";import{D as q}from"../chunks/Docstring.17db21ae.js";import{C as De}from"../chunks/CodeBlock.54a9f38d.js";import{F as Wo,M as Uo}from"../chunks/Markdown.fef84341.js";import{E as Pe}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as He}from"../chunks/Heading.342b1fa6.js";function Bo($){let e,f="Examples:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFhMTmV0Q29uZmlnJTJDJTIwWExOZXRNb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBYTE5ldCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwWExOZXRDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMCh3aXRoJTIwcmFuZG9tJTIwd2VpZ2h0cyklMjBmcm9tJTIwdGhlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwWExOZXRNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetConfig, XLNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XLNet configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XLNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-kvfsh7"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function Go($){let e,f="sequence pair mask has the following format:",n,s,v;return s=new De({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMEElN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTIwJTIwJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-16klr56"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function So($){let e,f="sequence pair mask has the following format:",n,s,v;return s=new De({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMEElN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTIwJTIwJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-16klr56"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function Qo($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function Vo($){let e,f="Example:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE5ldE1vZGVsJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ4bG5ldCUyRnhsbmV0LWJhc2UtY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBYTE5ldE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJ4bG5ldCUyRnhsbmV0LWJhc2UtY2FzZWQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetModel.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function Ro($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function Eo($){let e,f="Examples:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE5ldExNSGVhZE1vZGVsJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ4bG5ldCUyRnhsbmV0LWxhcmdlLWNhc2VkJTIyKSUwQW1vZGVsJTIwJTNEJTIwWExOZXRMTUhlYWRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyeGxuZXQlMkZ4bG5ldC1sYXJnZS1jYXNlZCUyMiklMEElMEElMjMlMjBXZSUyMHNob3clMjBob3clMjB0byUyMHNldHVwJTIwaW5wdXRzJTIwdG8lMjBwcmVkaWN0JTIwYSUyMG5leHQlMjB0b2tlbiUyMHVzaW5nJTIwYSUyMGJpLWRpcmVjdGlvbmFsJTIwY29udGV4dC4lMEFpbnB1dF9pZHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTBBJTIwJTIwJTIwJTIwdG9rZW5pemVyLmVuY29kZSglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjB2ZXJ5JTIwJTNDbWFzayUzRSUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlKSUwQSkudW5zcXVlZXplKCUwQSUyMCUyMCUyMCUyMDAlMEEpJTIwJTIwJTIzJTIwV2UlMjB3aWxsJTIwcHJlZGljdCUyMHRoZSUyMG1hc2tlZCUyMHRva2VuJTBBcGVybV9tYXNrJTIwJTNEJTIwdG9yY2guemVyb3MoKDElMkMlMjBpbnB1dF9pZHMuc2hhcGUlNUIxJTVEJTJDJTIwaW5wdXRfaWRzLnNoYXBlJTVCMSU1RCklMkMlMjBkdHlwZSUzRHRvcmNoLmZsb2F0KSUwQXBlcm1fbWFzayU1QiUzQSUyQyUyMCUzQSUyQyUyMC0xJTVEJTIwJTNEJTIwMS4wJTIwJTIwJTIzJTIwUHJldmlvdXMlMjB0b2tlbnMlMjBkb24ndCUyMHNlZSUyMGxhc3QlMjB0b2tlbiUwQXRhcmdldF9tYXBwaW5nJTIwJTNEJTIwdG9yY2guemVyb3MoJTBBJTIwJTIwJTIwJTIwKDElMkMlMjAxJTJDJTIwaW5wdXRfaWRzLnNoYXBlJTVCMSU1RCklMkMlMjBkdHlwZSUzRHRvcmNoLmZsb2F0JTBBKSUyMCUyMCUyMyUyMFNoYXBlJTIwJTVCMSUyQyUyMDElMkMlMjBzZXFfbGVuZ3RoJTVEJTIwJTNEJTNFJTIwbGV0J3MlMjBwcmVkaWN0JTIwb25lJTIwdG9rZW4lMEF0YXJnZXRfbWFwcGluZyU1QiUwQSUyMCUyMCUyMCUyMDAlMkMlMjAwJTJDJTIwLTElMEElNUQlMjAlM0QlMjAxLjAlMjAlMjAlMjMlMjBPdXIlMjBmaXJzdCUyMChhbmQlMjBvbmx5KSUyMHByZWRpY3Rpb24lMjB3aWxsJTIwYmUlMjB0aGUlMjBsYXN0JTIwdG9rZW4lMjBvZiUyMHRoZSUyMHNlcXVlbmNlJTIwKHRoZSUyMG1hc2tlZCUyMHRva2VuKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlMkMlMjBwZXJtX21hc2slM0RwZXJtX21hc2slMkMlMjB0YXJnZXRfbWFwcGluZyUzRHRhcmdldF9tYXBwaW5nKSUwQW5leHRfdG9rZW5fbG9naXRzJTIwJTNEJTIwb3V0cHV0cyU1QiUwQSUyMCUyMCUyMCUyMDAlMEElNUQlMjAlMjAlMjMlMjBPdXRwdXQlMjBoYXMlMjBzaGFwZSUyMCU1QnRhcmdldF9tYXBwaW5nLnNpemUoMCklMkMlMjB0YXJnZXRfbWFwcGluZy5zaXplKDEpJTJDJTIwY29uZmlnLnZvY2FiX3NpemUlNUQlMEElMEElMjMlMjBUaGUlMjBzYW1lJTIwd2F5JTIwY2FuJTIwdGhlJTIwWExOZXRMTUhlYWRNb2RlbCUyMGJlJTIwdXNlZCUyMHRvJTIwYmUlMjB0cmFpbmVkJTIwYnklMjBzdGFuZGFyZCUyMGF1dG8tcmVncmVzc2l2ZSUyMGxhbmd1YWdlJTIwbW9kZWxpbmcuJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9yY2gudGVuc29yKCUwQSUyMCUyMCUyMCUyMHRva2VuaXplci5lbmNvZGUoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwdmVyeSUyMCUzQ21hc2slM0UlMjIlMkMlMjBhZGRfc3BlY2lhbF90b2tlbnMlM0RGYWxzZSklMEEpLnVuc3F1ZWV6ZSglMEElMjAlMjAlMjAlMjAwJTBBKSUyMCUyMCUyMyUyMFdlJTIwd2lsbCUyMHByZWRpY3QlMjB0aGUlMjBtYXNrZWQlMjB0b2tlbiUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvcih0b2tlbml6ZXIuZW5jb2RlKCUyMmN1dGUlMjIlMkMlMjBhZGRfc3BlY2lhbF90b2tlbnMlM0RGYWxzZSkpLnVuc3F1ZWV6ZSgwKSUwQWFzc2VydCUyMGxhYmVscy5zaGFwZSU1QjAlNUQlMjAlM0QlM0QlMjAxJTJDJTIwJTIyb25seSUyMG9uZSUyMHdvcmQlMjB3aWxsJTIwYmUlMjBwcmVkaWN0ZWQlMjIlMEFwZXJtX21hc2slMjAlM0QlMjB0b3JjaC56ZXJvcygoMSUyQyUyMGlucHV0X2lkcy5zaGFwZSU1QjElNUQlMkMlMjBpbnB1dF9pZHMuc2hhcGUlNUIxJTVEKSUyQyUyMGR0eXBlJTNEdG9yY2guZmxvYXQpJTBBcGVybV9tYXNrJTVCJTBBJTIwJTIwJTIwJTIwJTNBJTJDJTIwJTNBJTJDJTIwLTElMEElNUQlMjAlM0QlMjAxLjAlMjAlMjAlMjMlMjBQcmV2aW91cyUyMHRva2VucyUyMGRvbid0JTIwc2VlJTIwbGFzdCUyMHRva2VuJTIwYXMlMjBpcyUyMGRvbmUlMjBpbiUyMHN0YW5kYXJkJTIwYXV0by1yZWdyZXNzaXZlJTIwbG0lMjB0cmFpbmluZyUwQXRhcmdldF9tYXBwaW5nJTIwJTNEJTIwdG9yY2guemVyb3MoJTBBJTIwJTIwJTIwJTIwKDElMkMlMjAxJTJDJTIwaW5wdXRfaWRzLnNoYXBlJTVCMSU1RCklMkMlMjBkdHlwZSUzRHRvcmNoLmZsb2F0JTBBKSUyMCUyMCUyMyUyMFNoYXBlJTIwJTVCMSUyQyUyMDElMkMlMjBzZXFfbGVuZ3RoJTVEJTIwJTNEJTNFJTIwbGV0J3MlMjBwcmVkaWN0JTIwb25lJTIwdG9rZW4lMEF0YXJnZXRfbWFwcGluZyU1QiUwQSUyMCUyMCUyMCUyMDAlMkMlMjAwJTJDJTIwLTElMEElNUQlMjAlM0QlMjAxLjAlMjAlMjAlMjMlMjBPdXIlMjBmaXJzdCUyMChhbmQlMjBvbmx5KSUyMHByZWRpY3Rpb24lMjB3aWxsJTIwYmUlMjB0aGUlMjBsYXN0JTIwdG9rZW4lMjBvZiUyMHRoZSUyMHNlcXVlbmNlJTIwKHRoZSUyMG1hc2tlZCUyMHRva2VuKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlMkMlMjBwZXJtX21hc2slM0RwZXJtX21hc2slMkMlMjB0YXJnZXRfbWFwcGluZyUzRHRhcmdldF9tYXBwaW5nJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFuZXh0X3Rva2VuX2xvZ2l0cyUyMCUzRCUyMCglMEElMjAlMjAlMjAlMjBvdXRwdXRzLmxvZ2l0cyUwQSklMjAlMjAlMjMlMjBMb2dpdHMlMjBoYXZlJTIwc2hhcGUlMjAlNUJ0YXJnZXRfbWFwcGluZy5zaXplKDApJTJDJTIwdGFyZ2V0X21hcHBpbmcuc2l6ZSgxKSUyQyUyMGNvbmZpZy52b2NhYl9zaXplJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLNetLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-large-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-large-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We show how to setup inputs to predict a next token using a bi-directional context.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(
<span class="hljs-meta">... </span>    tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is very &lt;mask&gt;&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)
<span class="hljs-meta">... </span>).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># We will predict the masked token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask = torch.zeros((<span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>], input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask[:, :, -<span class="hljs-number">1</span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Previous tokens don&#x27;t see last token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping = torch.zeros(
<span class="hljs-meta">... </span>    (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Shape [1, 1, seq_length] =&gt; let&#x27;s predict one token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Our first (and only) prediction will be the last token of the sequence (the masked token)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, perm_mask=perm_mask, target_mapping=target_mapping)
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The same way can the XLNetLMHeadModel be used to be trained by standard auto-regressive language modeling.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(
<span class="hljs-meta">... </span>    tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is very &lt;mask&gt;&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)
<span class="hljs-meta">... </span>).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># We will predict the masked token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;cute&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> labels.shape[<span class="hljs-number">0</span>] == <span class="hljs-number">1</span>, <span class="hljs-string">&quot;only one word will be predicted&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask = torch.zeros((<span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>], input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask[
<span class="hljs-meta">... </span>    :, :, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Previous tokens don&#x27;t see last token as is done in standard auto-regressive lm training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping = torch.zeros(
<span class="hljs-meta">... </span>    (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Shape [1, 1, seq_length] =&gt; let&#x27;s predict one token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Our first (and only) prediction will be the last token of the sequence (the masked token)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, perm_mask=perm_mask, target_mapping=target_mapping, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = (
<span class="hljs-meta">... </span>    outputs.logits
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Logits have shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-kvfsh7"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function Ao($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function Oo($){let e,f="Example of single-label classification:",n,s,v;return s=new De({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFhMTmV0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFhMTmV0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyeGxuZXQlMkZ4bG5ldC1iYXNlLWNhc2VkJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoKS5pdGVtKCklMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBYTE5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-ykxpe4"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function Yo($){let e,f="Example of multi-label classification:",n,s,v;return s=new De({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFhMTmV0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFhMTmV0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyeGxuZXQlMkZ4bG5ldC1iYXNlLWNhc2VkJTIyJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkcyUyMCUzRCUyMHRvcmNoLmFyYW5nZSgwJTJDJTIwbG9naXRzLnNoYXBlJTVCLTElNUQpJTVCdG9yY2guc2lnbW9pZChsb2dpdHMpLnNxdWVlemUoZGltJTNEMCklMjAlM0UlMjAwLjUlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBYTE5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1l8e32d"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function Po($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function Do($){let e,f="Example:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE5ldEZvck11bHRpcGxlQ2hvaWNlJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ4bG5ldCUyRnhsbmV0LWJhc2UtY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBYTE5ldEZvck11bHRpcGxlQ2hvaWNlLmZyb21fcHJldHJhaW5lZCglMjJ4bG5ldCUyRnhsbmV0LWJhc2UtY2FzZWQlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoMCkudW5zcXVlZXplKDApJTIwJTIwJTIzJTIwY2hvaWNlMCUyMGlzJTIwY29ycmVjdCUyMChhY2NvcmRpbmclMjB0byUyMFdpa2lwZWRpYSUyMCUzQikpJTJDJTIwYmF0Y2glMjBzaXplJTIwMSUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHBhZGRpbmclM0RUcnVlKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKiU3QmslM0ElMjB2LnVuc3F1ZWV6ZSgwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function Ko($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function es($){let e,f="Example:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE5ldEZvclRva2VuQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFhMTmV0Rm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyeGxuZXQlMkZ4bG5ldC1iYXNlLWNhc2VkJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function ts($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function ns($){let e,f="Example:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE5ldEZvclF1ZXN0aW9uQW5zd2VyaW5nU2ltcGxlJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ4bG5ldCUyRnhsbmV0LWJhc2UtY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBYTE5ldEZvclF1ZXN0aW9uQW5zd2VyaW5nU2ltcGxlLmZyb21fcHJldHJhaW5lZCglMjJ4bG5ldCUyRnhsbmV0LWJhc2UtY2FzZWQlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWFuc3dlcl9zdGFydF9pbmRleCUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzLmFyZ21heCgpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMG91dHB1dHMuZW5kX2xvZ2l0cy5hcmdtYXgoKSUwQSUwQXByZWRpY3RfYW5zd2VyX3Rva2VucyUyMCUzRCUyMGlucHV0cy5pbnB1dF9pZHMlNUIwJTJDJTIwYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNBJTIwYW5zd2VyX2VuZF9pbmRleCUyMCUyQiUyMDElNUQlMEElMEElMjMlMjB0YXJnZXQlMjBpcyUyMCUyMm5pY2UlMjBwdXBwZXQlMjIlMEF0YXJnZXRfc3RhcnRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNSU1RCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBzdGFydF9wb3NpdGlvbnMlM0R0YXJnZXRfc3RhcnRfaW5kZXglMkMlMjBlbmRfcG9zaXRpb25zJTNEdGFyZ2V0X2VuZF9pbmRleCklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLNetForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function os($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function ss($){let e,f="Example:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE5ldEZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ4bG5ldCUyRnhsbmV0LWJhc2UtY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBYTE5ldEZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJ4bG5ldCUyRnhsbmV0LWJhc2UtY2FzZWQlMjIpJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9yY2gudGVuc29yKHRva2VuaXplci5lbmNvZGUoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzRFRydWUpKS51bnNxdWVlemUoJTBBJTIwJTIwJTIwJTIwMCUwQSklMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBc3RhcnRfcG9zaXRpb25zJTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjElNUQpJTBBZW5kX3Bvc2l0aW9ucyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIzJTVEKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlMkMlMjBzdGFydF9wb3NpdGlvbnMlM0RzdGFydF9wb3NpdGlvbnMlMkMlMjBlbmRfcG9zaXRpb25zJTNEZW5kX3Bvc2l0aW9ucyklMEElMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function as($){let e,f,n,s,v,t,w="The bare XLNet Model transformer outputting raw hidden-states without any specific head on top.",P,z,X=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,S,C,j=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Q,h,F,Xe,we,On='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetModel">XLNetModel</a> forward method, overrides the <code>__call__</code> special method.',Ht,Ke,Gn,ve,Ft,je,_t,se,bt,E,et,on="XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings).",vn,sn,an=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Wt,ke,rn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ln,xe,dn,Xt,Tt,dt='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetLMHeadModel">XLNetLMHeadModel</a> forward method, overrides the <code>__call__</code> special method.',Bt,Ce,Gt,tt,xn,H,jt,D,nt,cn,St,ee=`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`,pn,mn,We=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,un,hn,Ct=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Yn,Ne,Je,Pn,fn,Be='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForSequenceClassification">XLNetForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Qt,te,ct,Vt,gn,he,Jt,Ge,Rt,ne,Et,Ue,At,kt=`XLNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RACE/SWAG tasks.`,zn,K,Mt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ot,pt,Nn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Fn,W,mt,qn,Se,to='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForMultipleChoice">XLNetForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',In,fe,Sn,le,Me,ot,Yt,de,_n,Ut,yt,bn=`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Xn,oe,Pt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ce,ze,Dn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Tn,ge,Dt,wt,jn,Zn='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForTokenClassification">XLNetForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',ut,zt,vt,pe,Cn,A,Kt,_e,be,kn,Mn,ht=`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Qn,Qe,qt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ve,en,xt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Hn,B,me,tn,Nt,Jn='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForQuestionAnsweringSimple">XLNetForQuestionAnsweringSimple</a> forward method, overrides the <code>__call__</code> special method.',Vn,Re,It,Ee,nn,$t,Wn,O,qe,ae,ft,$n=`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Ln,yn,Zt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ae,wn,gt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Rn,re,$e,u,x,Ie='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForQuestionAnswering">XLNetForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Le,ue,Y,V,Te;return e=new He({props:{title:"XLNetModel",local:"transformers.XLNetModel",headingTag:"h2"}}),s=new q({props:{name:"class transformers.XLNetModel",anchor:"transformers.XLNetModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L927"}}),F=new q({props:{name:"forward",anchor:"transformers.XLNetModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"mems",val:": Optional = None"},{name:"perm_mask",val:": Optional = None"},{name:"target_mapping",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"input_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_mems",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetModel.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetModel.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetModel.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1059",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) — Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ke=new lt({props:{$$slots:{default:[Qo]},$$scope:{ctx:$}}}),ve=new Pe({props:{anchor:"transformers.XLNetModel.forward.example",$$slots:{default:[Vo]},$$scope:{ctx:$}}}),je=new He({props:{title:"XLNetLMHeadModel",local:"transformers.XLNetLMHeadModel",headingTag:"h2"}}),bt=new q({props:{name:"class transformers.XLNetLMHeadModel",anchor:"transformers.XLNetLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1288"}}),dn=new q({props:{name:"forward",anchor:"transformers.XLNetLMHeadModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"mems",val:": Optional = None"},{name:"perm_mask",val:": Optional = None"},{name:"target_mapping",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"input_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_mems",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetLMHeadModel.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetLMHeadModel.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_predict)</code>, <em>optional</em>) &#x2014;
Labels for masked language modeling. <code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If
<code>target_mapping</code> is <code>None</code>, then <code>num_predict</code> corresponds to <code>sequence_length</code>.</p>
<p>The labels should correspond to the masked input words that should be predicted and depends on
<code>target_mapping</code>. Note in order to perform standard auto-regressive language modeling a <em><mask></mask></em> token has
to be added to the <code>input_ids</code> (see the <code>prepare_inputs_for_generation</code> function and examples below)</p>
<p>Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are ignored, the loss
is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1356",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided)
Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new lt({props:{$$slots:{default:[Ro]},$$scope:{ctx:$}}}),tt=new Pe({props:{anchor:"transformers.XLNetLMHeadModel.forward.example",$$slots:{default:[Eo]},$$scope:{ctx:$}}}),H=new He({props:{title:"XLNetForSequenceClassification",local:"transformers.XLNetForSequenceClassification",headingTag:"h2"}}),nt=new q({props:{name:"class transformers.XLNetForSequenceClassification",anchor:"transformers.XLNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1493"}}),Je=new q({props:{name:"forward",anchor:"transformers.XLNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"mems",val:": Optional = None"},{name:"perm_mask",val:": Optional = None"},{name:"target_mapping",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"input_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_mems",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForSequenceClassification.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForSequenceClassification.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1513",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),te=new lt({props:{$$slots:{default:[Ao]},$$scope:{ctx:$}}}),Vt=new Pe({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example",$$slots:{default:[Oo]},$$scope:{ctx:$}}}),he=new Pe({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example-2",$$slots:{default:[Yo]},$$scope:{ctx:$}}}),Ge=new He({props:{title:"XLNetForMultipleChoice",local:"transformers.XLNetForMultipleChoice",headingTag:"h2"}}),Et=new q({props:{name:"class transformers.XLNetForMultipleChoice",anchor:"transformers.XLNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1689"}}),mt=new q({props:{name:"forward",anchor:"transformers.XLNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"input_mask",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"mems",val:": Optional = None"},{name:"perm_mask",val:": Optional = None"},{name:"target_mapping",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_mems",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForMultipleChoice.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForMultipleChoice.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, num_choices, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1707",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) — <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fe=new lt({props:{$$slots:{default:[Po]},$$scope:{ctx:$}}}),le=new Pe({props:{anchor:"transformers.XLNetForMultipleChoice.forward.example",$$slots:{default:[Do]},$$scope:{ctx:$}}}),ot=new He({props:{title:"XLNetForTokenClassification",local:"transformers.XLNetForTokenClassification",headingTag:"h2"}}),_n=new q({props:{name:"class transformers.XLNetForTokenClassification",anchor:"transformers.XLNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1602"}}),Dt=new q({props:{name:"forward",anchor:"transformers.XLNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"mems",val:": Optional = None"},{name:"perm_mask",val:": Optional = None"},{name:"target_mapping",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"input_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_mems",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForTokenClassification.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForTokenClassification.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1620",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) — Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zt=new lt({props:{$$slots:{default:[Ko]},$$scope:{ctx:$}}}),pe=new Pe({props:{anchor:"transformers.XLNetForTokenClassification.forward.example",$$slots:{default:[es]},$$scope:{ctx:$}}}),A=new He({props:{title:"XLNetForQuestionAnsweringSimple",local:"transformers.XLNetForQuestionAnsweringSimple",headingTag:"h2"}}),be=new q({props:{name:"class transformers.XLNetForQuestionAnsweringSimple",anchor:"transformers.XLNetForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1792"}}),me=new q({props:{name:"forward",anchor:"transformers.XLNetForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"mems",val:": Optional = None"},{name:"perm_mask",val:": Optional = None"},{name:"target_mapping",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"input_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"use_mems",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1810",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) — Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) — Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new lt({props:{$$slots:{default:[ts]},$$scope:{ctx:$}}}),Ee=new Pe({props:{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.example",$$slots:{default:[ns]},$$scope:{ctx:$}}}),$t=new He({props:{title:"XLNetForQuestionAnswering",local:"transformers.XLNetForQuestionAnswering",headingTag:"h2"}}),qe=new q({props:{name:"class transformers.XLNetForQuestionAnswering",anchor:"transformers.XLNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1902"}}),$e=new q({props:{name:"forward",anchor:"transformers.XLNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"mems",val:": Optional = None"},{name:"perm_mask",val:": Optional = None"},{name:"target_mapping",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"input_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"is_impossible",val:": Optional = None"},{name:"cls_index",val:": Optional = None"},{name:"p_mask",val:": Optional = None"},{name:"use_mems",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForQuestionAnswering.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForQuestionAnswering.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.XLNetForQuestionAnswering.forward.is_impossible",description:`<strong>is_impossible</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels whether a question has an answer or no answer (SQuAD 2.0)`,name:"is_impossible"},{anchor:"transformers.XLNetForQuestionAnswering.forward.cls_index",description:`<strong>cls_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the classification token to use as input for computing plausibility of the
answer.`,name:"cls_index"},{anchor:"transformers.XLNetForQuestionAnswering.forward.p_mask",description:`<strong>p_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Optional mask of tokens which can&#x2019;t be in answers (e.g. [CLS], [PAD], &#x2026;). 1.0 means token should be
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1923",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) — Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.</p>
</li>
<li>
<p><strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) — Log probabilities for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) — Indices for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) — Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).</p>
</li>
<li>
<p><strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) — Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).</p>
</li>
<li>
<p><strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) — Log probabilities for the <code>is_impossible</code> label of the answers.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ue=new lt({props:{$$slots:{default:[os]},$$scope:{ctx:$}}}),V=new Pe({props:{anchor:"transformers.XLNetForQuestionAnswering.forward.example",$$slots:{default:[ss]},$$scope:{ctx:$}}}),{c(){_(e.$$.fragment),f=r(),n=d("div"),_(s.$$.fragment),v=r(),t=d("p"),t.textContent=w,P=r(),z=d("p"),z.innerHTML=X,S=r(),C=d("p"),C.innerHTML=j,Q=r(),h=d("div"),_(F.$$.fragment),Xe=r(),we=d("p"),we.innerHTML=On,Ht=r(),_(Ke.$$.fragment),Gn=r(),_(ve.$$.fragment),Ft=r(),_(je.$$.fragment),_t=r(),se=d("div"),_(bt.$$.fragment),E=r(),et=d("p"),et.textContent=on,vn=r(),sn=d("p"),sn.innerHTML=an,Wt=r(),ke=d("p"),ke.innerHTML=rn,ln=r(),xe=d("div"),_(dn.$$.fragment),Xt=r(),Tt=d("p"),Tt.innerHTML=dt,Bt=r(),_(Ce.$$.fragment),Gt=r(),_(tt.$$.fragment),xn=r(),_(H.$$.fragment),jt=r(),D=d("div"),_(nt.$$.fragment),cn=r(),St=d("p"),St.textContent=ee,pn=r(),mn=d("p"),mn.innerHTML=We,un=r(),hn=d("p"),hn.innerHTML=Ct,Yn=r(),Ne=d("div"),_(Je.$$.fragment),Pn=r(),fn=d("p"),fn.innerHTML=Be,Qt=r(),_(te.$$.fragment),ct=r(),_(Vt.$$.fragment),gn=r(),_(he.$$.fragment),Jt=r(),_(Ge.$$.fragment),Rt=r(),ne=d("div"),_(Et.$$.fragment),Ue=r(),At=d("p"),At.textContent=kt,zn=r(),K=d("p"),K.innerHTML=Mt,Ot=r(),pt=d("p"),pt.innerHTML=Nn,Fn=r(),W=d("div"),_(mt.$$.fragment),qn=r(),Se=d("p"),Se.innerHTML=to,In=r(),_(fe.$$.fragment),Sn=r(),_(le.$$.fragment),Me=r(),_(ot.$$.fragment),Yt=r(),de=d("div"),_(_n.$$.fragment),Ut=r(),yt=d("p"),yt.textContent=bn,Xn=r(),oe=d("p"),oe.innerHTML=Pt,ce=r(),ze=d("p"),ze.innerHTML=Dn,Tn=r(),ge=d("div"),_(Dt.$$.fragment),wt=r(),jn=d("p"),jn.innerHTML=Zn,ut=r(),_(zt.$$.fragment),vt=r(),_(pe.$$.fragment),Cn=r(),_(A.$$.fragment),Kt=r(),_e=d("div"),_(be.$$.fragment),kn=r(),Mn=d("p"),Mn.innerHTML=ht,Qn=r(),Qe=d("p"),Qe.innerHTML=qt,Ve=r(),en=d("p"),en.innerHTML=xt,Hn=r(),B=d("div"),_(me.$$.fragment),tn=r(),Nt=d("p"),Nt.innerHTML=Jn,Vn=r(),_(Re.$$.fragment),It=r(),_(Ee.$$.fragment),nn=r(),_($t.$$.fragment),Wn=r(),O=d("div"),_(qe.$$.fragment),ae=r(),ft=d("p"),ft.innerHTML=$n,Ln=r(),yn=d("p"),yn.innerHTML=Zt,Ae=r(),wn=d("p"),wn.innerHTML=gt,Rn=r(),re=d("div"),_($e.$$.fragment),u=r(),x=d("p"),x.innerHTML=Ie,Le=r(),_(ue.$$.fragment),Y=r(),_(V.$$.fragment),this.h()},l(m){b(e.$$.fragment,m),f=i(m),n=c(m,"DIV",{class:!0});var N=U(n);b(s.$$.fragment,N),v=i(N),t=c(N,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1ceqc0e"&&(t.textContent=w),P=i(N),z=c(N,"P",{"data-svelte-h":!0}),g(z)!=="svelte-6pahdo"&&(z.innerHTML=X),S=i(N),C=c(N,"P",{"data-svelte-h":!0}),g(C)!=="svelte-hswkmf"&&(C.innerHTML=j),Q=i(N),h=c(N,"DIV",{class:!0});var R=U(h);b(F.$$.fragment,R),Xe=i(R),we=c(R,"P",{"data-svelte-h":!0}),g(we)!=="svelte-7f084k"&&(we.innerHTML=On),Ht=i(R),b(Ke.$$.fragment,R),Gn=i(R),b(ve.$$.fragment,R),R.forEach(o),N.forEach(o),Ft=i(m),b(je.$$.fragment,m),_t=i(m),se=c(m,"DIV",{class:!0});var I=U(se);b(bt.$$.fragment,I),E=i(I),et=c(I,"P",{"data-svelte-h":!0}),g(et)!=="svelte-s260t6"&&(et.textContent=on),vn=i(I),sn=c(I,"P",{"data-svelte-h":!0}),g(sn)!=="svelte-6pahdo"&&(sn.innerHTML=an),Wt=i(I),ke=c(I,"P",{"data-svelte-h":!0}),g(ke)!=="svelte-hswkmf"&&(ke.innerHTML=rn),ln=i(I),xe=c(I,"DIV",{class:!0});var G=U(xe);b(dn.$$.fragment,G),Xt=i(G),Tt=c(G,"P",{"data-svelte-h":!0}),g(Tt)!=="svelte-1mlqpuy"&&(Tt.innerHTML=dt),Bt=i(G),b(Ce.$$.fragment,G),Gt=i(G),b(tt.$$.fragment,G),G.forEach(o),I.forEach(o),xn=i(m),b(H.$$.fragment,m),jt=i(m),D=c(m,"DIV",{class:!0});var Oe=U(D);b(nt.$$.fragment,Oe),cn=i(Oe),St=c(Oe,"P",{"data-svelte-h":!0}),g(St)!=="svelte-1ccr0de"&&(St.textContent=ee),pn=i(Oe),mn=c(Oe,"P",{"data-svelte-h":!0}),g(mn)!=="svelte-6pahdo"&&(mn.innerHTML=We),un=i(Oe),hn=c(Oe,"P",{"data-svelte-h":!0}),g(hn)!=="svelte-hswkmf"&&(hn.innerHTML=Ct),Yn=i(Oe),Ne=c(Oe,"DIV",{class:!0});var ye=U(Ne);b(Je.$$.fragment,ye),Pn=i(ye),fn=c(ye,"P",{"data-svelte-h":!0}),g(fn)!=="svelte-104dkim"&&(fn.innerHTML=Be),Qt=i(ye),b(te.$$.fragment,ye),ct=i(ye),b(Vt.$$.fragment,ye),gn=i(ye),b(he.$$.fragment,ye),ye.forEach(o),Oe.forEach(o),Jt=i(m),b(Ge.$$.fragment,m),Rt=i(m),ne=c(m,"DIV",{class:!0});var st=U(ne);b(Et.$$.fragment,st),Ue=i(st),At=c(st,"P",{"data-svelte-h":!0}),g(At)!=="svelte-4hc6jt"&&(At.textContent=kt),zn=i(st),K=c(st,"P",{"data-svelte-h":!0}),g(K)!=="svelte-6pahdo"&&(K.innerHTML=Mt),Ot=i(st),pt=c(st,"P",{"data-svelte-h":!0}),g(pt)!=="svelte-hswkmf"&&(pt.innerHTML=Nn),Fn=i(st),W=c(st,"DIV",{class:!0});var at=U(W);b(mt.$$.fragment,at),qn=i(at),Se=c(at,"P",{"data-svelte-h":!0}),g(Se)!=="svelte-1nc8d96"&&(Se.innerHTML=to),In=i(at),b(fe.$$.fragment,at),Sn=i(at),b(le.$$.fragment,at),at.forEach(o),st.forEach(o),Me=i(m),b(ot.$$.fragment,m),Yt=i(m),de=c(m,"DIV",{class:!0});var ie=U(de);b(_n.$$.fragment,ie),Ut=i(ie),yt=c(ie,"P",{"data-svelte-h":!0}),g(yt)!=="svelte-jh923c"&&(yt.textContent=bn),Xn=i(ie),oe=c(ie,"P",{"data-svelte-h":!0}),g(oe)!=="svelte-6pahdo"&&(oe.innerHTML=Pt),ce=i(ie),ze=c(ie,"P",{"data-svelte-h":!0}),g(ze)!=="svelte-hswkmf"&&(ze.innerHTML=Dn),Tn=i(ie),ge=c(ie,"DIV",{class:!0});var Fe=U(ge);b(Dt.$$.fragment,Fe),wt=i(Fe),jn=c(Fe,"P",{"data-svelte-h":!0}),g(jn)!=="svelte-1dxd1xw"&&(jn.innerHTML=Zn),ut=i(Fe),b(zt.$$.fragment,Fe),vt=i(Fe),b(pe.$$.fragment,Fe),Fe.forEach(o),ie.forEach(o),Cn=i(m),b(A.$$.fragment,m),Kt=i(m),_e=c(m,"DIV",{class:!0});var Ye=U(_e);b(be.$$.fragment,Ye),kn=i(Ye),Mn=c(Ye,"P",{"data-svelte-h":!0}),g(Mn)!=="svelte-1gmn8ay"&&(Mn.innerHTML=ht),Qn=i(Ye),Qe=c(Ye,"P",{"data-svelte-h":!0}),g(Qe)!=="svelte-6pahdo"&&(Qe.innerHTML=qt),Ve=i(Ye),en=c(Ye,"P",{"data-svelte-h":!0}),g(en)!=="svelte-hswkmf"&&(en.innerHTML=xt),Hn=i(Ye),B=c(Ye,"DIV",{class:!0});var Ze=U(B);b(me.$$.fragment,Ze),tn=i(Ze),Nt=c(Ze,"P",{"data-svelte-h":!0}),g(Nt)!=="svelte-zgmknw"&&(Nt.innerHTML=Jn),Vn=i(Ze),b(Re.$$.fragment,Ze),It=i(Ze),b(Ee.$$.fragment,Ze),Ze.forEach(o),Ye.forEach(o),nn=i(m),b($t.$$.fragment,m),Wn=i(m),O=c(m,"DIV",{class:!0});var rt=U(O);b(qe.$$.fragment,rt),ae=i(rt),ft=c(rt,"P",{"data-svelte-h":!0}),g(ft)!=="svelte-1gmn8ay"&&(ft.innerHTML=$n),Ln=i(rt),yn=c(rt,"P",{"data-svelte-h":!0}),g(yn)!=="svelte-6pahdo"&&(yn.innerHTML=Zt),Ae=i(rt),wn=c(rt,"P",{"data-svelte-h":!0}),g(wn)!=="svelte-hswkmf"&&(wn.innerHTML=gt),Rn=i(rt),re=c(rt,"DIV",{class:!0});var it=U(re);b($e.$$.fragment,it),u=i(it),x=c(it,"P",{"data-svelte-h":!0}),g(x)!=="svelte-qfids"&&(x.innerHTML=Ie),Le=i(it),b(ue.$$.fragment,it),Y=i(it),b(V.$$.fragment,it),it.forEach(o),rt.forEach(o),this.h()},h(){J(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(m,N){T(e,m,N),p(m,f,N),p(m,n,N),T(s,n,null),a(n,v),a(n,t),a(n,P),a(n,z),a(n,S),a(n,C),a(n,Q),a(n,h),T(F,h,null),a(h,Xe),a(h,we),a(h,Ht),T(Ke,h,null),a(h,Gn),T(ve,h,null),p(m,Ft,N),T(je,m,N),p(m,_t,N),p(m,se,N),T(bt,se,null),a(se,E),a(se,et),a(se,vn),a(se,sn),a(se,Wt),a(se,ke),a(se,ln),a(se,xe),T(dn,xe,null),a(xe,Xt),a(xe,Tt),a(xe,Bt),T(Ce,xe,null),a(xe,Gt),T(tt,xe,null),p(m,xn,N),T(H,m,N),p(m,jt,N),p(m,D,N),T(nt,D,null),a(D,cn),a(D,St),a(D,pn),a(D,mn),a(D,un),a(D,hn),a(D,Yn),a(D,Ne),T(Je,Ne,null),a(Ne,Pn),a(Ne,fn),a(Ne,Qt),T(te,Ne,null),a(Ne,ct),T(Vt,Ne,null),a(Ne,gn),T(he,Ne,null),p(m,Jt,N),T(Ge,m,N),p(m,Rt,N),p(m,ne,N),T(Et,ne,null),a(ne,Ue),a(ne,At),a(ne,zn),a(ne,K),a(ne,Ot),a(ne,pt),a(ne,Fn),a(ne,W),T(mt,W,null),a(W,qn),a(W,Se),a(W,In),T(fe,W,null),a(W,Sn),T(le,W,null),p(m,Me,N),T(ot,m,N),p(m,Yt,N),p(m,de,N),T(_n,de,null),a(de,Ut),a(de,yt),a(de,Xn),a(de,oe),a(de,ce),a(de,ze),a(de,Tn),a(de,ge),T(Dt,ge,null),a(ge,wt),a(ge,jn),a(ge,ut),T(zt,ge,null),a(ge,vt),T(pe,ge,null),p(m,Cn,N),T(A,m,N),p(m,Kt,N),p(m,_e,N),T(be,_e,null),a(_e,kn),a(_e,Mn),a(_e,Qn),a(_e,Qe),a(_e,Ve),a(_e,en),a(_e,Hn),a(_e,B),T(me,B,null),a(B,tn),a(B,Nt),a(B,Vn),T(Re,B,null),a(B,It),T(Ee,B,null),p(m,nn,N),T($t,m,N),p(m,Wn,N),p(m,O,N),T(qe,O,null),a(O,ae),a(O,ft),a(O,Ln),a(O,yn),a(O,Ae),a(O,wn),a(O,Rn),a(O,re),T($e,re,null),a(re,u),a(re,x),a(re,Le),T(ue,re,null),a(re,Y),T(V,re,null),Te=!0},p(m,N){const R={};N&2&&(R.$$scope={dirty:N,ctx:m}),Ke.$set(R);const I={};N&2&&(I.$$scope={dirty:N,ctx:m}),ve.$set(I);const G={};N&2&&(G.$$scope={dirty:N,ctx:m}),Ce.$set(G);const Oe={};N&2&&(Oe.$$scope={dirty:N,ctx:m}),tt.$set(Oe);const ye={};N&2&&(ye.$$scope={dirty:N,ctx:m}),te.$set(ye);const st={};N&2&&(st.$$scope={dirty:N,ctx:m}),Vt.$set(st);const at={};N&2&&(at.$$scope={dirty:N,ctx:m}),he.$set(at);const ie={};N&2&&(ie.$$scope={dirty:N,ctx:m}),fe.$set(ie);const Fe={};N&2&&(Fe.$$scope={dirty:N,ctx:m}),le.$set(Fe);const Ye={};N&2&&(Ye.$$scope={dirty:N,ctx:m}),zt.$set(Ye);const Ze={};N&2&&(Ze.$$scope={dirty:N,ctx:m}),pe.$set(Ze);const rt={};N&2&&(rt.$$scope={dirty:N,ctx:m}),Re.$set(rt);const it={};N&2&&(it.$$scope={dirty:N,ctx:m}),Ee.$set(it);const Un={};N&2&&(Un.$$scope={dirty:N,ctx:m}),ue.$set(Un);const En={};N&2&&(En.$$scope={dirty:N,ctx:m}),V.$set(En)},i(m){Te||(k(e.$$.fragment,m),k(s.$$.fragment,m),k(F.$$.fragment,m),k(Ke.$$.fragment,m),k(ve.$$.fragment,m),k(je.$$.fragment,m),k(bt.$$.fragment,m),k(dn.$$.fragment,m),k(Ce.$$.fragment,m),k(tt.$$.fragment,m),k(H.$$.fragment,m),k(nt.$$.fragment,m),k(Je.$$.fragment,m),k(te.$$.fragment,m),k(Vt.$$.fragment,m),k(he.$$.fragment,m),k(Ge.$$.fragment,m),k(Et.$$.fragment,m),k(mt.$$.fragment,m),k(fe.$$.fragment,m),k(le.$$.fragment,m),k(ot.$$.fragment,m),k(_n.$$.fragment,m),k(Dt.$$.fragment,m),k(zt.$$.fragment,m),k(pe.$$.fragment,m),k(A.$$.fragment,m),k(be.$$.fragment,m),k(me.$$.fragment,m),k(Re.$$.fragment,m),k(Ee.$$.fragment,m),k($t.$$.fragment,m),k(qe.$$.fragment,m),k($e.$$.fragment,m),k(ue.$$.fragment,m),k(V.$$.fragment,m),Te=!0)},o(m){M(e.$$.fragment,m),M(s.$$.fragment,m),M(F.$$.fragment,m),M(Ke.$$.fragment,m),M(ve.$$.fragment,m),M(je.$$.fragment,m),M(bt.$$.fragment,m),M(dn.$$.fragment,m),M(Ce.$$.fragment,m),M(tt.$$.fragment,m),M(H.$$.fragment,m),M(nt.$$.fragment,m),M(Je.$$.fragment,m),M(te.$$.fragment,m),M(Vt.$$.fragment,m),M(he.$$.fragment,m),M(Ge.$$.fragment,m),M(Et.$$.fragment,m),M(mt.$$.fragment,m),M(fe.$$.fragment,m),M(le.$$.fragment,m),M(ot.$$.fragment,m),M(_n.$$.fragment,m),M(Dt.$$.fragment,m),M(zt.$$.fragment,m),M(pe.$$.fragment,m),M(A.$$.fragment,m),M(be.$$.fragment,m),M(me.$$.fragment,m),M(Re.$$.fragment,m),M(Ee.$$.fragment,m),M($t.$$.fragment,m),M(qe.$$.fragment,m),M($e.$$.fragment,m),M(ue.$$.fragment,m),M(V.$$.fragment,m),Te=!1},d(m){m&&(o(f),o(n),o(Ft),o(_t),o(se),o(xn),o(jt),o(D),o(Jt),o(Rt),o(ne),o(Me),o(Yt),o(de),o(Cn),o(Kt),o(_e),o(nn),o(Wn),o(O)),y(e,m),y(s),y(F),y(Ke),y(ve),y(je,m),y(bt),y(dn),y(Ce),y(tt),y(H,m),y(nt),y(Je),y(te),y(Vt),y(he),y(Ge,m),y(Et),y(mt),y(fe),y(le),y(ot,m),y(_n),y(Dt),y(zt),y(pe),y(A,m),y(be),y(me),y(Re),y(Ee),y($t,m),y(qe),y($e),y(ue),y(V)}}}function rs($){let e,f;return e=new Uo({props:{$$slots:{default:[as]},$$scope:{ctx:$}}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,s){T(e,n,s),f=!0},p(n,s){const v={};s&2&&(v.$$scope={dirty:s,ctx:n}),e.$set(v)},i(n){f||(k(e.$$.fragment,n),f=!0)},o(n){M(e.$$.fragment,n),f=!1},d(n){y(e,n)}}}function is($){let e,f="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,X,S=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,j,Q=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=f,n=r(),s=d("ul"),s.innerHTML=v,t=r(),w=d("p"),w.innerHTML=P,z=r(),X=d("ul"),X.innerHTML=S,C=r(),j=d("p"),j.innerHTML=Q},l(h){e=c(h,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=f),n=i(h),s=c(h,"UL",{"data-svelte-h":!0}),g(s)!=="svelte-qm1t26"&&(s.innerHTML=v),t=i(h),w=c(h,"P",{"data-svelte-h":!0}),g(w)!=="svelte-1v9qsc5"&&(w.innerHTML=P),z=i(h),X=c(h,"UL",{"data-svelte-h":!0}),g(X)!=="svelte-15scerc"&&(X.innerHTML=S),C=i(h),j=c(h,"P",{"data-svelte-h":!0}),g(j)!=="svelte-1an3odd"&&(j.innerHTML=Q)},m(h,F){p(h,e,F),p(h,n,F),p(h,s,F),p(h,t,F),p(h,w,F),p(h,z,F),p(h,X,F),p(h,C,F),p(h,j,F)},p:Z,d(h){h&&(o(e),o(n),o(s),o(t),o(w),o(z),o(X),o(C),o(j))}}}function ls($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function ds($){let e,f="Example:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTmV0TW9kZWwlMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGWExOZXRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyeGxuZXQlMkZ4bG5ldC1iYXNlLWNhc2VkJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetModel.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function cs($){let e,f="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,X,S=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,j,Q=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=f,n=r(),s=d("ul"),s.innerHTML=v,t=r(),w=d("p"),w.innerHTML=P,z=r(),X=d("ul"),X.innerHTML=S,C=r(),j=d("p"),j.innerHTML=Q},l(h){e=c(h,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=f),n=i(h),s=c(h,"UL",{"data-svelte-h":!0}),g(s)!=="svelte-qm1t26"&&(s.innerHTML=v),t=i(h),w=c(h,"P",{"data-svelte-h":!0}),g(w)!=="svelte-1v9qsc5"&&(w.innerHTML=P),z=i(h),X=c(h,"UL",{"data-svelte-h":!0}),g(X)!=="svelte-15scerc"&&(X.innerHTML=S),C=i(h),j=c(h,"P",{"data-svelte-h":!0}),g(j)!=="svelte-1an3odd"&&(j.innerHTML=Q)},m(h,F){p(h,e,F),p(h,n,F),p(h,s,F),p(h,t,F),p(h,w,F),p(h,z,F),p(h,X,F),p(h,C,F),p(h,j,F)},p:Z,d(h){h&&(o(e),o(n),o(s),o(t),o(w),o(z),o(X),o(C),o(j))}}}function ps($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function ms($){let e,f="Examples:",n,s,v;return s=new De({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFpbXBvcnQlMjBudW1weSUyMGFzJTIwbnAlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFRGWExOZXRMTUhlYWRNb2RlbCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtbGFyZ2UtY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlhMTmV0TE1IZWFkTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtbGFyZ2UtY2FzZWQlMjIpJTBBJTBBJTIzJTIwV2UlMjBzaG93JTIwaG93JTIwdG8lMjBzZXR1cCUyMGlucHV0cyUyMHRvJTIwcHJlZGljdCUyMGElMjBuZXh0JTIwdG9rZW4lMjB1c2luZyUyMGElMjBiaS1kaXJlY3Rpb25hbCUyMGNvbnRleHQuJTBBaW5wdXRfaWRzJTIwJTNEJTIwdGYuY29uc3RhbnQodG9rZW5pemVyLmVuY29kZSglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjB2ZXJ5JTIwJTNDbWFzayUzRSUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzRFRydWUpKSU1QiUwQSUyMCUyMCUyMCUyME5vbmUlMkMlMjAlM0ElMEElNUQlMjAlMjAlMjMlMjBXZSUyMHdpbGwlMjBwcmVkaWN0JTIwdGhlJTIwbWFza2VkJTIwdG9rZW4lMEElMEFwZXJtX21hc2slMjAlM0QlMjBucC56ZXJvcygoMSUyQyUyMGlucHV0X2lkcy5zaGFwZSU1QjElNUQlMkMlMjBpbnB1dF9pZHMuc2hhcGUlNUIxJTVEKSklMEFwZXJtX21hc2slNUIlM0ElMkMlMjAlM0ElMkMlMjAtMSU1RCUyMCUzRCUyMDEuMCUyMCUyMCUyMyUyMFByZXZpb3VzJTIwdG9rZW5zJTIwZG9uJ3QlMjBzZWUlMjBsYXN0JTIwdG9rZW4lMEElMEF0YXJnZXRfbWFwcGluZyUyMCUzRCUyMG5wLnplcm9zKCUwQSUyMCUyMCUyMCUyMCgxJTJDJTIwMSUyQyUyMGlucHV0X2lkcy5zaGFwZSU1QjElNUQpJTBBKSUyMCUyMCUyMyUyMFNoYXBlJTIwJTVCMSUyQyUyMDElMkMlMjBzZXFfbGVuZ3RoJTVEJTIwJTNEJTNFJTIwbGV0J3MlMjBwcmVkaWN0JTIwb25lJTIwdG9rZW4lMEF0YXJnZXRfbWFwcGluZyU1QiUwQSUyMCUyMCUyMCUyMDAlMkMlMjAwJTJDJTIwLTElMEElNUQlMjAlM0QlMjAxLjAlMjAlMjAlMjMlMjBPdXIlMjBmaXJzdCUyMChhbmQlMjBvbmx5KSUyMHByZWRpY3Rpb24lMjB3aWxsJTIwYmUlMjB0aGUlMjBsYXN0JTIwdG9rZW4lMjBvZiUyMHRoZSUyMHNlcXVlbmNlJTIwKHRoZSUyMG1hc2tlZCUyMHRva2VuKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCglMEElMjAlMjAlMjAlMjBpbnB1dF9pZHMlMkMlMEElMjAlMjAlMjAlMjBwZXJtX21hc2slM0R0Zi5jb25zdGFudChwZXJtX21hc2slMkMlMjBkdHlwZSUzRHRmLmZsb2F0MzIpJTJDJTBBJTIwJTIwJTIwJTIwdGFyZ2V0X21hcHBpbmclM0R0Zi5jb25zdGFudCh0YXJnZXRfbWFwcGluZyUyQyUyMGR0eXBlJTNEdGYuZmxvYXQzMiklMkMlMEEpJTBBJTBBbmV4dF90b2tlbl9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzJTVCJTBBJTIwJTIwJTIwJTIwMCUwQSU1RCUyMCUyMCUyMyUyME91dHB1dCUyMGhhcyUyMHNoYXBlJTIwJTVCdGFyZ2V0X21hcHBpbmcuc2l6ZSgwKSUyQyUyMHRhcmdldF9tYXBwaW5nLnNpemUoMSklMkMlMjBjb25maWcudm9jYWJfc2l6ZSU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLNetLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-large-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-large-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We show how to setup inputs to predict a next token using a bi-directional context.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is very &lt;mask&gt;&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># We will predict the masked token</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask = np.zeros((<span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>], input_ids.shape[<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask[:, :, -<span class="hljs-number">1</span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Previous tokens don&#x27;t see last token</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping = np.zeros(
<span class="hljs-meta">... </span>    (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>])
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Shape [1, 1, seq_length] =&gt; let&#x27;s predict one token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Our first (and only) prediction will be the last token of the sequence (the masked token)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    perm_mask=tf.constant(perm_mask, dtype=tf.float32),
<span class="hljs-meta">... </span>    target_mapping=tf.constant(target_mapping, dtype=tf.float32),
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-kvfsh7"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function us($){let e,f="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,X,S=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,j,Q=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=f,n=r(),s=d("ul"),s.innerHTML=v,t=r(),w=d("p"),w.innerHTML=P,z=r(),X=d("ul"),X.innerHTML=S,C=r(),j=d("p"),j.innerHTML=Q},l(h){e=c(h,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=f),n=i(h),s=c(h,"UL",{"data-svelte-h":!0}),g(s)!=="svelte-qm1t26"&&(s.innerHTML=v),t=i(h),w=c(h,"P",{"data-svelte-h":!0}),g(w)!=="svelte-1v9qsc5"&&(w.innerHTML=P),z=i(h),X=c(h,"UL",{"data-svelte-h":!0}),g(X)!=="svelte-15scerc"&&(X.innerHTML=S),C=i(h),j=c(h,"P",{"data-svelte-h":!0}),g(j)!=="svelte-1an3odd"&&(j.innerHTML=Q)},m(h,F){p(h,e,F),p(h,n,F),p(h,s,F),p(h,t,F),p(h,w,F),p(h,z,F),p(h,X,F),p(h,C,F),p(h,j,F)},p:Z,d(h){h&&(o(e),o(n),o(s),o(t),o(w),o(z),o(X),o(C),o(j))}}}function hs($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function fs($){let e,f="Example:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTmV0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyeGxuZXQlMkZ4bG5ldC1iYXNlLWNhc2VkJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZYTE5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBJTBBbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChsb2dpdHMlMkMlMjBheGlzJTNELTEpJTVCMCU1RCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function gs($){let e,f;return e=new De({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZYTE5ldEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRmLmNvbnN0YW50KDEpJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`</span>\n<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)\n<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>, num_labels=num_labels)\n\n<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)\n<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss',wrap:!1}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,s){T(e,n,s),f=!0},p:Z,i(n){f||(k(e.$$.fragment,n),f=!0)},o(n){M(e.$$.fragment,n),f=!1},d(n){y(e,n)}}}function _s($){let e,f="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,X,S=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,j,Q=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=f,n=r(),s=d("ul"),s.innerHTML=v,t=r(),w=d("p"),w.innerHTML=P,z=r(),X=d("ul"),X.innerHTML=S,C=r(),j=d("p"),j.innerHTML=Q},l(h){e=c(h,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=f),n=i(h),s=c(h,"UL",{"data-svelte-h":!0}),g(s)!=="svelte-qm1t26"&&(s.innerHTML=v),t=i(h),w=c(h,"P",{"data-svelte-h":!0}),g(w)!=="svelte-1v9qsc5"&&(w.innerHTML=P),z=i(h),X=c(h,"UL",{"data-svelte-h":!0}),g(X)!=="svelte-15scerc"&&(X.innerHTML=S),C=i(h),j=c(h,"P",{"data-svelte-h":!0}),g(j)!=="svelte-1an3odd"&&(j.innerHTML=Q)},m(h,F){p(h,e,F),p(h,n,F),p(h,s,F),p(h,t,F),p(h,w,F),p(h,z,F),p(h,X,F),p(h,C,F),p(h,j,F)},p:Z,d(h){h&&(o(e),o(n),o(s),o(t),o(w),o(z),o(X),o(C),o(j))}}}function bs($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function Ts($){let e,f="Example:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTmV0Rm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGWExOZXRGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyeGxuZXQlMkZ4bG5ldC1iYXNlLWNhc2VkJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMkluJTIwSXRhbHklMkMlMjBwaXp6YSUyMHNlcnZlZCUyMGluJTIwZm9ybWFsJTIwc2V0dGluZ3MlMkMlMjBzdWNoJTIwYXMlMjBhdCUyMGElMjByZXN0YXVyYW50JTJDJTIwaXMlMjBwcmVzZW50ZWQlMjB1bnNsaWNlZC4lMjIlMEFjaG9pY2UwJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2l0aCUyMGElMjBmb3JrJTIwYW5kJTIwYSUyMGtuaWZlLiUyMiUwQWNob2ljZTElMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aGlsZSUyMGhlbGQlMjBpbiUyMHRoZSUyMGhhbmQuJTIyJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTVCcHJvbXB0JTJDJTIwcHJvbXB0JTVEJTJDJTIwJTVCY2hvaWNlMCUyQyUyMGNob2ljZTElNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBaW5wdXRzJTIwJTNEJTIwJTdCayUzQSUyMHRmLmV4cGFuZF9kaW1zKHYlMkMlMjAwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMjAlMjAlMjMlMjBiYXRjaCUyMHNpemUlMjBpcyUyMDElMEElMEElMjMlMjB0aGUlMjBsaW5lYXIlMjBjbGFzc2lmaWVyJTIwc3RpbGwlMjBuZWVkcyUyMHRvJTIwYmUlMjB0cmFpbmVkJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function ks($){let e,f="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,X,S=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,j,Q=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=f,n=r(),s=d("ul"),s.innerHTML=v,t=r(),w=d("p"),w.innerHTML=P,z=r(),X=d("ul"),X.innerHTML=S,C=r(),j=d("p"),j.innerHTML=Q},l(h){e=c(h,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=f),n=i(h),s=c(h,"UL",{"data-svelte-h":!0}),g(s)!=="svelte-qm1t26"&&(s.innerHTML=v),t=i(h),w=c(h,"P",{"data-svelte-h":!0}),g(w)!=="svelte-1v9qsc5"&&(w.innerHTML=P),z=i(h),X=c(h,"UL",{"data-svelte-h":!0}),g(X)!=="svelte-15scerc"&&(X.innerHTML=S),C=i(h),j=c(h,"P",{"data-svelte-h":!0}),g(j)!=="svelte-1an3odd"&&(j.innerHTML=Q)},m(h,F){p(h,e,F),p(h,n,F),p(h,s,F),p(h,t,F),p(h,w,F),p(h,z,F),p(h,X,F),p(h,C,F),p(h,j,F)},p:Z,d(h){h&&(o(e),o(n),o(s),o(t),o(w),o(z),o(X),o(C),o(j))}}}function Ms($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function ys($){let e,f="Example:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTmV0Rm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyeGxuZXQlMkZ4bG5ldC1iYXNlLWNhc2VkJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZYTE5ldEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiUwQSklMEElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMHRmLm1hdGguYXJnbWF4KGxvZ2l0cyUyQyUyMGF4aXMlM0QtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdCU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVELm51bXB5KCkudG9saXN0KCklNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function ws($){let e,f;return e=new De({props:{code:"bGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)`,wrap:!1}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,s){T(e,n,s),f=!0},p:Z,i(n){f||(k(e.$$.fragment,n),f=!0)},o(n){M(e.$$.fragment,n),f=!1},d(n){y(e,n)}}}function vs($){let e,f="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,P=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,X,S=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,j,Q=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=f,n=r(),s=d("ul"),s.innerHTML=v,t=r(),w=d("p"),w.innerHTML=P,z=r(),X=d("ul"),X.innerHTML=S,C=r(),j=d("p"),j.innerHTML=Q},l(h){e=c(h,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=f),n=i(h),s=c(h,"UL",{"data-svelte-h":!0}),g(s)!=="svelte-qm1t26"&&(s.innerHTML=v),t=i(h),w=c(h,"P",{"data-svelte-h":!0}),g(w)!=="svelte-1v9qsc5"&&(w.innerHTML=P),z=i(h),X=c(h,"UL",{"data-svelte-h":!0}),g(X)!=="svelte-15scerc"&&(X.innerHTML=S),C=i(h),j=c(h,"P",{"data-svelte-h":!0}),g(j)!=="svelte-1an3odd"&&(j.innerHTML=Q)},m(h,F){p(h,e,F),p(h,n,F),p(h,s,F),p(h,t,F),p(h,w,F),p(h,z,F),p(h,X,F),p(h,C,F),p(h,j,F)},p:Z,d(h){h&&(o(e),o(n),o(s),o(t),o(w),o(z),o(X),o(C),o(j))}}}function xs($){let e,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=f},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=f)},m(n,s){p(n,e,s)},p:Z,d(n){n&&o(e)}}}function Ns($){let e,f="Example:",n,s,v;return s=new De({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTmV0Rm9yUXVlc3Rpb25BbnN3ZXJpbmdTaW1wbGUlMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnhsbmV0JTJGeGxuZXQtYmFzZS1jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGWExOZXRGb3JRdWVzdGlvbkFuc3dlcmluZ1NpbXBsZS5mcm9tX3ByZXRyYWluZWQoJTIyeGxuZXQlMkZ4bG5ldC1iYXNlLWNhc2VkJTIyKSUwQSUwQXF1ZXN0aW9uJTJDJTIwdGV4dCUyMCUzRCUyMCUyMldobyUyMHdhcyUyMEppbSUyMEhlbnNvbiUzRiUyMiUyQyUyMCUyMkppbSUyMEhlbnNvbiUyMHdhcyUyMGElMjBuaWNlJTIwcHVwcGV0JTIyJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHF1ZXN0aW9uJTJDJTIwdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWFuc3dlcl9zdGFydF9pbmRleCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChvdXRwdXRzLnN0YXJ0X2xvZ2l0cyUyQyUyMGF4aXMlM0QtMSklNUIwJTVEKSUwQWFuc3dlcl9lbmRfaW5kZXglMjAlM0QlMjBpbnQodGYubWF0aC5hcmdtYXgob3V0cHV0cy5lbmRfbG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLNetForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlnet/xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=d("p"),e.textContent=f,n=r(),_(s.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=f),n=i(t),b(s.$$.fragment,t)},m(t,w){p(t,e,w),p(t,n,w),T(s,t,w),v=!0},p:Z,i(t){v||(k(s.$$.fragment,t),v=!0)},o(t){M(s.$$.fragment,t),v=!1},d(t){t&&(o(e),o(n)),y(s,t)}}}function $s($){let e,f;return e=new De({props:{code:"JTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdGYuY29uc3RhbnQoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRmLmNvbnN0YW50KCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG91dHB1dHMubG9zcyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)`,wrap:!1}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,s){T(e,n,s),f=!0},p:Z,i(n){f||(k(e.$$.fragment,n),f=!0)},o(n){M(e.$$.fragment,n),f=!1},d(n){y(e,n)}}}function Ls($){let e,f,n,s,v,t,w="The bare XLNet Model transformer outputting raw hidden-states without any specific head on top.",P,z,X=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,S,C,j=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Q,h,F,Xe,we,On,Ht,Ke='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetModel">TFXLNetModel</a> forward method, overrides the <code>__call__</code> special method.',Gn,ve,Ft,je,_t,se,bt,E,et,on,vn,sn="XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings).",an,Wt,ke=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,rn,ln,xe=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,dn,Xt,Tt,dt,Bt,Ce,Gt,tt='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetLMHeadModel">TFXLNetLMHeadModel</a> forward method, overrides the <code>__call__</code> special method.',xn,H,jt,D,nt,cn,St,ee,pn,mn,We,un=`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`,hn,Ct,Yn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ne,Je,Pn=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,fn,Be,Qt,te,ct,Vt,gn,he='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForSequenceClassification">TFXLNetForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Jt,Ge,Rt,ne,Et,Ue,At,kt,zn,K,Mt,Ot,pt,Nn=`XLNET Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,Fn,W,mt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,qn,Se,to=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,In,fe,Sn,le,Me,ot,Yt,de='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForMultipleChoice">TFXLNetForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',_n,Ut,yt,bn,Xn,oe,Pt,ce,ze,Dn,Tn,ge=`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Dt,wt,jn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Zn,ut,zt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,vt,pe,Cn,A,Kt,_e,be,kn='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForTokenClassification">TFXLNetForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Mn,ht,Qn,Qe,qt,Ve,en,xt,Hn,B,me,tn,Nt,Jn=`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Vn,Re,It=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ee,nn,$t=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Wn,O,qe,ae,ft,$n,Ln,yn='The <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForQuestionAnsweringSimple">TFXLNetForQuestionAnsweringSimple</a> forward method, overrides the <code>__call__</code> special method.',Zt,Ae,wn,gt,Rn,re,$e;return e=new He({props:{title:"TFXLNetModel",local:"transformers.TFXLNetModel",headingTag:"h2"}}),s=new q({props:{name:"class transformers.TFXLNetModel",anchor:"transformers.TFXLNetModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1172"}}),h=new lt({props:{$$slots:{default:[is]},$$scope:{ctx:$}}}),we=new q({props:{name:"call",anchor:"transformers.TFXLNetModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"mems",val:": np.ndarray | tf.Tensor | None = None"},{name:"perm_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"target_mapping",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"input_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_mems",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetModel.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetModel.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetModel.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetModel.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1181",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) — Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ve=new lt({props:{$$slots:{default:[ls]},$$scope:{ctx:$}}}),je=new Pe({props:{anchor:"transformers.TFXLNetModel.call.example",$$slots:{default:[ds]},$$scope:{ctx:$}}}),se=new He({props:{title:"TFXLNetLMHeadModel",local:"transformers.TFXLNetLMHeadModel",headingTag:"h2"}}),et=new q({props:{name:"class transformers.TFXLNetLMHeadModel",anchor:"transformers.TFXLNetLMHeadModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1233"}}),Xt=new lt({props:{$$slots:{default:[cs]},$$scope:{ctx:$}}}),Bt=new q({props:{name:"call",anchor:"transformers.TFXLNetLMHeadModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"mems",val:": np.ndarray | tf.Tensor | None = None"},{name:"perm_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"target_mapping",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"input_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_mems",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLNetLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetLMHeadModel.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetLMHeadModel.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1293",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided)
Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),H=new lt({props:{$$slots:{default:[ps]},$$scope:{ctx:$}}}),D=new Pe({props:{anchor:"transformers.TFXLNetLMHeadModel.call.example",$$slots:{default:[ms]},$$scope:{ctx:$}}}),cn=new He({props:{title:"TFXLNetForSequenceClassification",local:"transformers.TFXLNetForSequenceClassification",headingTag:"h2"}}),pn=new q({props:{name:"class transformers.TFXLNetForSequenceClassification",anchor:"transformers.TFXLNetForSequenceClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1403"}}),Be=new lt({props:{$$slots:{default:[us]},$$scope:{ctx:$}}}),ct=new q({props:{name:"call",anchor:"transformers.TFXLNetForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"mems",val:": np.ndarray | tf.Tensor | None = None"},{name:"perm_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"target_mapping",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"input_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_mems",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForSequenceClassification.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForSequenceClassification.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1424",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ge=new lt({props:{$$slots:{default:[hs]},$$scope:{ctx:$}}}),ne=new Pe({props:{anchor:"transformers.TFXLNetForSequenceClassification.call.example",$$slots:{default:[fs]},$$scope:{ctx:$}}}),Ue=new Pe({props:{anchor:"transformers.TFXLNetForSequenceClassification.call.example-2",$$slots:{default:[gs]},$$scope:{ctx:$}}}),kt=new He({props:{title:"TFLNetForMultipleChoice",local:"transformers.TFXLNetForMultipleChoice",headingTag:"h2"}}),Mt=new q({props:{name:"class transformers.TFXLNetForMultipleChoice",anchor:"transformers.TFXLNetForMultipleChoice",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1505"}}),fe=new lt({props:{$$slots:{default:[_s]},$$scope:{ctx:$}}}),Me=new q({props:{name:"call",anchor:"transformers.TFXLNetForMultipleChoice.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"input_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"mems",val:": np.ndarray | tf.Tensor | None = None"},{name:"perm_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"target_mapping",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_mems",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForMultipleChoice.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForMultipleChoice.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, num_choices, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1525",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) — <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ut=new lt({props:{$$slots:{default:[bs]},$$scope:{ctx:$}}}),bn=new Pe({props:{anchor:"transformers.TFXLNetForMultipleChoice.call.example",$$slots:{default:[Ts]},$$scope:{ctx:$}}}),oe=new He({props:{title:"TFXLNetForTokenClassification",local:"transformers.TFXLNetForTokenClassification",headingTag:"h2"}}),ze=new q({props:{name:"class transformers.TFXLNetForTokenClassification",anchor:"transformers.TFXLNetForTokenClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1621"}}),pe=new lt({props:{$$slots:{default:[ks]},$$scope:{ctx:$}}}),Kt=new q({props:{name:"call",anchor:"transformers.TFXLNetForTokenClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"mems",val:": np.ndarray | tf.Tensor | None = None"},{name:"perm_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"target_mapping",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"input_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_mems",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForTokenClassification.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForTokenClassification.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1639",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) — Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ht=new lt({props:{$$slots:{default:[Ms]},$$scope:{ctx:$}}}),Qe=new Pe({props:{anchor:"transformers.TFXLNetForTokenClassification.call.example",$$slots:{default:[ys]},$$scope:{ctx:$}}}),Ve=new Pe({props:{anchor:"transformers.TFXLNetForTokenClassification.call.example-2",$$slots:{default:[ws]},$$scope:{ctx:$}}}),xt=new He({props:{title:"TFXLNetForQuestionAnsweringSimple",local:"transformers.TFXLNetForQuestionAnsweringSimple",headingTag:"h2"}}),me=new q({props:{name:"class transformers.TFXLNetForQuestionAnsweringSimple",anchor:"transformers.TFXLNetForQuestionAnsweringSimple",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1713"}}),O=new lt({props:{$$slots:{default:[vs]},$$scope:{ctx:$}}}),ft=new q({props:{name:"call",anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"mems",val:": np.ndarray | tf.Tensor | None = None"},{name:"perm_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"target_mapping",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"input_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_mems",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"start_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"end_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1729",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) — Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) — Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) — Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ae=new lt({props:{$$slots:{default:[xs]},$$scope:{ctx:$}}}),gt=new Pe({props:{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.example",$$slots:{default:[Ns]},$$scope:{ctx:$}}}),re=new Pe({props:{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.example-2",$$slots:{default:[$s]},$$scope:{ctx:$}}}),{c(){_(e.$$.fragment),f=r(),n=d("div"),_(s.$$.fragment),v=r(),t=d("p"),t.textContent=w,P=r(),z=d("p"),z.innerHTML=X,S=r(),C=d("p"),C.innerHTML=j,Q=r(),_(h.$$.fragment),F=r(),Xe=d("div"),_(we.$$.fragment),On=r(),Ht=d("p"),Ht.innerHTML=Ke,Gn=r(),_(ve.$$.fragment),Ft=r(),_(je.$$.fragment),_t=r(),_(se.$$.fragment),bt=r(),E=d("div"),_(et.$$.fragment),on=r(),vn=d("p"),vn.textContent=sn,an=r(),Wt=d("p"),Wt.innerHTML=ke,rn=r(),ln=d("p"),ln.innerHTML=xe,dn=r(),_(Xt.$$.fragment),Tt=r(),dt=d("div"),_(Bt.$$.fragment),Ce=r(),Gt=d("p"),Gt.innerHTML=tt,xn=r(),_(H.$$.fragment),jt=r(),_(D.$$.fragment),nt=r(),_(cn.$$.fragment),St=r(),ee=d("div"),_(pn.$$.fragment),mn=r(),We=d("p"),We.textContent=un,hn=r(),Ct=d("p"),Ct.innerHTML=Yn,Ne=r(),Je=d("p"),Je.innerHTML=Pn,fn=r(),_(Be.$$.fragment),Qt=r(),te=d("div"),_(ct.$$.fragment),Vt=r(),gn=d("p"),gn.innerHTML=he,Jt=r(),_(Ge.$$.fragment),Rt=r(),_(ne.$$.fragment),Et=r(),_(Ue.$$.fragment),At=r(),_(kt.$$.fragment),zn=r(),K=d("div"),_(Mt.$$.fragment),Ot=r(),pt=d("p"),pt.textContent=Nn,Fn=r(),W=d("p"),W.innerHTML=mt,qn=r(),Se=d("p"),Se.innerHTML=to,In=r(),_(fe.$$.fragment),Sn=r(),le=d("div"),_(Me.$$.fragment),ot=r(),Yt=d("p"),Yt.innerHTML=de,_n=r(),_(Ut.$$.fragment),yt=r(),_(bn.$$.fragment),Xn=r(),_(oe.$$.fragment),Pt=r(),ce=d("div"),_(ze.$$.fragment),Dn=r(),Tn=d("p"),Tn.textContent=ge,Dt=r(),wt=d("p"),wt.innerHTML=jn,Zn=r(),ut=d("p"),ut.innerHTML=zt,vt=r(),_(pe.$$.fragment),Cn=r(),A=d("div"),_(Kt.$$.fragment),_e=r(),be=d("p"),be.innerHTML=kn,Mn=r(),_(ht.$$.fragment),Qn=r(),_(Qe.$$.fragment),qt=r(),_(Ve.$$.fragment),en=r(),_(xt.$$.fragment),Hn=r(),B=d("div"),_(me.$$.fragment),tn=r(),Nt=d("p"),Nt.innerHTML=Jn,Vn=r(),Re=d("p"),Re.innerHTML=It,Ee=r(),nn=d("p"),nn.innerHTML=$t,Wn=r(),_(O.$$.fragment),qe=r(),ae=d("div"),_(ft.$$.fragment),$n=r(),Ln=d("p"),Ln.innerHTML=yn,Zt=r(),_(Ae.$$.fragment),wn=r(),_(gt.$$.fragment),Rn=r(),_(re.$$.fragment),this.h()},l(u){b(e.$$.fragment,u),f=i(u),n=c(u,"DIV",{class:!0});var x=U(n);b(s.$$.fragment,x),v=i(x),t=c(x,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1ceqc0e"&&(t.textContent=w),P=i(x),z=c(x,"P",{"data-svelte-h":!0}),g(z)!=="svelte-1qaxm70"&&(z.innerHTML=X),S=i(x),C=c(x,"P",{"data-svelte-h":!0}),g(C)!=="svelte-1be7e3c"&&(C.innerHTML=j),Q=i(x),b(h.$$.fragment,x),F=i(x),Xe=c(x,"DIV",{class:!0});var Ie=U(Xe);b(we.$$.fragment,Ie),On=i(Ie),Ht=c(Ie,"P",{"data-svelte-h":!0}),g(Ht)!=="svelte-1yeiw9w"&&(Ht.innerHTML=Ke),Gn=i(Ie),b(ve.$$.fragment,Ie),Ft=i(Ie),b(je.$$.fragment,Ie),Ie.forEach(o),x.forEach(o),_t=i(u),b(se.$$.fragment,u),bt=i(u),E=c(u,"DIV",{class:!0});var Le=U(E);b(et.$$.fragment,Le),on=i(Le),vn=c(Le,"P",{"data-svelte-h":!0}),g(vn)!=="svelte-s260t6"&&(vn.textContent=sn),an=i(Le),Wt=c(Le,"P",{"data-svelte-h":!0}),g(Wt)!=="svelte-1qaxm70"&&(Wt.innerHTML=ke),rn=i(Le),ln=c(Le,"P",{"data-svelte-h":!0}),g(ln)!=="svelte-1be7e3c"&&(ln.innerHTML=xe),dn=i(Le),b(Xt.$$.fragment,Le),Tt=i(Le),dt=c(Le,"DIV",{class:!0});var ue=U(dt);b(Bt.$$.fragment,ue),Ce=i(ue),Gt=c(ue,"P",{"data-svelte-h":!0}),g(Gt)!=="svelte-up9hmu"&&(Gt.innerHTML=tt),xn=i(ue),b(H.$$.fragment,ue),jt=i(ue),b(D.$$.fragment,ue),ue.forEach(o),Le.forEach(o),nt=i(u),b(cn.$$.fragment,u),St=i(u),ee=c(u,"DIV",{class:!0});var Y=U(ee);b(pn.$$.fragment,Y),mn=i(Y),We=c(Y,"P",{"data-svelte-h":!0}),g(We)!=="svelte-1ccr0de"&&(We.textContent=un),hn=i(Y),Ct=c(Y,"P",{"data-svelte-h":!0}),g(Ct)!=="svelte-1qaxm70"&&(Ct.innerHTML=Yn),Ne=i(Y),Je=c(Y,"P",{"data-svelte-h":!0}),g(Je)!=="svelte-1be7e3c"&&(Je.innerHTML=Pn),fn=i(Y),b(Be.$$.fragment,Y),Qt=i(Y),te=c(Y,"DIV",{class:!0});var V=U(te);b(ct.$$.fragment,V),Vt=i(V),gn=c(V,"P",{"data-svelte-h":!0}),g(gn)!=="svelte-ap157e"&&(gn.innerHTML=he),Jt=i(V),b(Ge.$$.fragment,V),Rt=i(V),b(ne.$$.fragment,V),Et=i(V),b(Ue.$$.fragment,V),V.forEach(o),Y.forEach(o),At=i(u),b(kt.$$.fragment,u),zn=i(u),K=c(u,"DIV",{class:!0});var Te=U(K);b(Mt.$$.fragment,Te),Ot=i(Te),pt=c(Te,"P",{"data-svelte-h":!0}),g(pt)!=="svelte-11xkuel"&&(pt.textContent=Nn),Fn=i(Te),W=c(Te,"P",{"data-svelte-h":!0}),g(W)!=="svelte-1qaxm70"&&(W.innerHTML=mt),qn=i(Te),Se=c(Te,"P",{"data-svelte-h":!0}),g(Se)!=="svelte-1be7e3c"&&(Se.innerHTML=to),In=i(Te),b(fe.$$.fragment,Te),Sn=i(Te),le=c(Te,"DIV",{class:!0});var m=U(le);b(Me.$$.fragment,m),ot=i(m),Yt=c(m,"P",{"data-svelte-h":!0}),g(Yt)!=="svelte-10mnbxq"&&(Yt.innerHTML=de),_n=i(m),b(Ut.$$.fragment,m),yt=i(m),b(bn.$$.fragment,m),m.forEach(o),Te.forEach(o),Xn=i(u),b(oe.$$.fragment,u),Pt=i(u),ce=c(u,"DIV",{class:!0});var N=U(ce);b(ze.$$.fragment,N),Dn=i(N),Tn=c(N,"P",{"data-svelte-h":!0}),g(Tn)!=="svelte-jh923c"&&(Tn.textContent=ge),Dt=i(N),wt=c(N,"P",{"data-svelte-h":!0}),g(wt)!=="svelte-1qaxm70"&&(wt.innerHTML=jn),Zn=i(N),ut=c(N,"P",{"data-svelte-h":!0}),g(ut)!=="svelte-1be7e3c"&&(ut.innerHTML=zt),vt=i(N),b(pe.$$.fragment,N),Cn=i(N),A=c(N,"DIV",{class:!0});var R=U(A);b(Kt.$$.fragment,R),_e=i(R),be=c(R,"P",{"data-svelte-h":!0}),g(be)!=="svelte-jxzyuo"&&(be.innerHTML=kn),Mn=i(R),b(ht.$$.fragment,R),Qn=i(R),b(Qe.$$.fragment,R),qt=i(R),b(Ve.$$.fragment,R),R.forEach(o),N.forEach(o),en=i(u),b(xt.$$.fragment,u),Hn=i(u),B=c(u,"DIV",{class:!0});var I=U(B);b(me.$$.fragment,I),tn=i(I),Nt=c(I,"P",{"data-svelte-h":!0}),g(Nt)!=="svelte-1gmn8ay"&&(Nt.innerHTML=Jn),Vn=i(I),Re=c(I,"P",{"data-svelte-h":!0}),g(Re)!=="svelte-1qaxm70"&&(Re.innerHTML=It),Ee=i(I),nn=c(I,"P",{"data-svelte-h":!0}),g(nn)!=="svelte-1be7e3c"&&(nn.innerHTML=$t),Wn=i(I),b(O.$$.fragment,I),qe=i(I),ae=c(I,"DIV",{class:!0});var G=U(ae);b(ft.$$.fragment,G),$n=i(G),Ln=c(G,"P",{"data-svelte-h":!0}),g(Ln)!=="svelte-mjujao"&&(Ln.innerHTML=yn),Zt=i(G),b(Ae.$$.fragment,G),wn=i(G),b(gt.$$.fragment,G),Rn=i(G),b(re.$$.fragment,G),G.forEach(o),I.forEach(o),this.h()},h(){J(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(u,x){T(e,u,x),p(u,f,x),p(u,n,x),T(s,n,null),a(n,v),a(n,t),a(n,P),a(n,z),a(n,S),a(n,C),a(n,Q),T(h,n,null),a(n,F),a(n,Xe),T(we,Xe,null),a(Xe,On),a(Xe,Ht),a(Xe,Gn),T(ve,Xe,null),a(Xe,Ft),T(je,Xe,null),p(u,_t,x),T(se,u,x),p(u,bt,x),p(u,E,x),T(et,E,null),a(E,on),a(E,vn),a(E,an),a(E,Wt),a(E,rn),a(E,ln),a(E,dn),T(Xt,E,null),a(E,Tt),a(E,dt),T(Bt,dt,null),a(dt,Ce),a(dt,Gt),a(dt,xn),T(H,dt,null),a(dt,jt),T(D,dt,null),p(u,nt,x),T(cn,u,x),p(u,St,x),p(u,ee,x),T(pn,ee,null),a(ee,mn),a(ee,We),a(ee,hn),a(ee,Ct),a(ee,Ne),a(ee,Je),a(ee,fn),T(Be,ee,null),a(ee,Qt),a(ee,te),T(ct,te,null),a(te,Vt),a(te,gn),a(te,Jt),T(Ge,te,null),a(te,Rt),T(ne,te,null),a(te,Et),T(Ue,te,null),p(u,At,x),T(kt,u,x),p(u,zn,x),p(u,K,x),T(Mt,K,null),a(K,Ot),a(K,pt),a(K,Fn),a(K,W),a(K,qn),a(K,Se),a(K,In),T(fe,K,null),a(K,Sn),a(K,le),T(Me,le,null),a(le,ot),a(le,Yt),a(le,_n),T(Ut,le,null),a(le,yt),T(bn,le,null),p(u,Xn,x),T(oe,u,x),p(u,Pt,x),p(u,ce,x),T(ze,ce,null),a(ce,Dn),a(ce,Tn),a(ce,Dt),a(ce,wt),a(ce,Zn),a(ce,ut),a(ce,vt),T(pe,ce,null),a(ce,Cn),a(ce,A),T(Kt,A,null),a(A,_e),a(A,be),a(A,Mn),T(ht,A,null),a(A,Qn),T(Qe,A,null),a(A,qt),T(Ve,A,null),p(u,en,x),T(xt,u,x),p(u,Hn,x),p(u,B,x),T(me,B,null),a(B,tn),a(B,Nt),a(B,Vn),a(B,Re),a(B,Ee),a(B,nn),a(B,Wn),T(O,B,null),a(B,qe),a(B,ae),T(ft,ae,null),a(ae,$n),a(ae,Ln),a(ae,Zt),T(Ae,ae,null),a(ae,wn),T(gt,ae,null),a(ae,Rn),T(re,ae,null),$e=!0},p(u,x){const Ie={};x&2&&(Ie.$$scope={dirty:x,ctx:u}),h.$set(Ie);const Le={};x&2&&(Le.$$scope={dirty:x,ctx:u}),ve.$set(Le);const ue={};x&2&&(ue.$$scope={dirty:x,ctx:u}),je.$set(ue);const Y={};x&2&&(Y.$$scope={dirty:x,ctx:u}),Xt.$set(Y);const V={};x&2&&(V.$$scope={dirty:x,ctx:u}),H.$set(V);const Te={};x&2&&(Te.$$scope={dirty:x,ctx:u}),D.$set(Te);const m={};x&2&&(m.$$scope={dirty:x,ctx:u}),Be.$set(m);const N={};x&2&&(N.$$scope={dirty:x,ctx:u}),Ge.$set(N);const R={};x&2&&(R.$$scope={dirty:x,ctx:u}),ne.$set(R);const I={};x&2&&(I.$$scope={dirty:x,ctx:u}),Ue.$set(I);const G={};x&2&&(G.$$scope={dirty:x,ctx:u}),fe.$set(G);const Oe={};x&2&&(Oe.$$scope={dirty:x,ctx:u}),Ut.$set(Oe);const ye={};x&2&&(ye.$$scope={dirty:x,ctx:u}),bn.$set(ye);const st={};x&2&&(st.$$scope={dirty:x,ctx:u}),pe.$set(st);const at={};x&2&&(at.$$scope={dirty:x,ctx:u}),ht.$set(at);const ie={};x&2&&(ie.$$scope={dirty:x,ctx:u}),Qe.$set(ie);const Fe={};x&2&&(Fe.$$scope={dirty:x,ctx:u}),Ve.$set(Fe);const Ye={};x&2&&(Ye.$$scope={dirty:x,ctx:u}),O.$set(Ye);const Ze={};x&2&&(Ze.$$scope={dirty:x,ctx:u}),Ae.$set(Ze);const rt={};x&2&&(rt.$$scope={dirty:x,ctx:u}),gt.$set(rt);const it={};x&2&&(it.$$scope={dirty:x,ctx:u}),re.$set(it)},i(u){$e||(k(e.$$.fragment,u),k(s.$$.fragment,u),k(h.$$.fragment,u),k(we.$$.fragment,u),k(ve.$$.fragment,u),k(je.$$.fragment,u),k(se.$$.fragment,u),k(et.$$.fragment,u),k(Xt.$$.fragment,u),k(Bt.$$.fragment,u),k(H.$$.fragment,u),k(D.$$.fragment,u),k(cn.$$.fragment,u),k(pn.$$.fragment,u),k(Be.$$.fragment,u),k(ct.$$.fragment,u),k(Ge.$$.fragment,u),k(ne.$$.fragment,u),k(Ue.$$.fragment,u),k(kt.$$.fragment,u),k(Mt.$$.fragment,u),k(fe.$$.fragment,u),k(Me.$$.fragment,u),k(Ut.$$.fragment,u),k(bn.$$.fragment,u),k(oe.$$.fragment,u),k(ze.$$.fragment,u),k(pe.$$.fragment,u),k(Kt.$$.fragment,u),k(ht.$$.fragment,u),k(Qe.$$.fragment,u),k(Ve.$$.fragment,u),k(xt.$$.fragment,u),k(me.$$.fragment,u),k(O.$$.fragment,u),k(ft.$$.fragment,u),k(Ae.$$.fragment,u),k(gt.$$.fragment,u),k(re.$$.fragment,u),$e=!0)},o(u){M(e.$$.fragment,u),M(s.$$.fragment,u),M(h.$$.fragment,u),M(we.$$.fragment,u),M(ve.$$.fragment,u),M(je.$$.fragment,u),M(se.$$.fragment,u),M(et.$$.fragment,u),M(Xt.$$.fragment,u),M(Bt.$$.fragment,u),M(H.$$.fragment,u),M(D.$$.fragment,u),M(cn.$$.fragment,u),M(pn.$$.fragment,u),M(Be.$$.fragment,u),M(ct.$$.fragment,u),M(Ge.$$.fragment,u),M(ne.$$.fragment,u),M(Ue.$$.fragment,u),M(kt.$$.fragment,u),M(Mt.$$.fragment,u),M(fe.$$.fragment,u),M(Me.$$.fragment,u),M(Ut.$$.fragment,u),M(bn.$$.fragment,u),M(oe.$$.fragment,u),M(ze.$$.fragment,u),M(pe.$$.fragment,u),M(Kt.$$.fragment,u),M(ht.$$.fragment,u),M(Qe.$$.fragment,u),M(Ve.$$.fragment,u),M(xt.$$.fragment,u),M(me.$$.fragment,u),M(O.$$.fragment,u),M(ft.$$.fragment,u),M(Ae.$$.fragment,u),M(gt.$$.fragment,u),M(re.$$.fragment,u),$e=!1},d(u){u&&(o(f),o(n),o(_t),o(bt),o(E),o(nt),o(St),o(ee),o(At),o(zn),o(K),o(Xn),o(Pt),o(ce),o(en),o(Hn),o(B)),y(e,u),y(s),y(h),y(we),y(ve),y(je),y(se,u),y(et),y(Xt),y(Bt),y(H),y(D),y(cn,u),y(pn),y(Be),y(ct),y(Ge),y(ne),y(Ue),y(kt,u),y(Mt),y(fe),y(Me),y(Ut),y(bn),y(oe,u),y(ze),y(pe),y(Kt),y(ht),y(Qe),y(Ve),y(xt,u),y(me),y(O),y(ft),y(Ae),y(gt),y(re)}}}function Fs($){let e,f;return e=new Uo({props:{$$slots:{default:[Ls]},$$scope:{ctx:$}}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,s){T(e,n,s),f=!0},p(n,s){const v={};s&2&&(v.$$scope={dirty:s,ctx:n}),e.$set(v)},i(n){f||(k(e.$$.fragment,n),f=!0)},o(n){M(e.$$.fragment,n),f=!1},d(n){y(e,n)}}}function Xs($){let e,f,n,s,v,t,w,P='<a href="https://huggingface.co/models?filter=xlnet"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-xlnet-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/xlnet-base-cased"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a>',z,X,S,C,j=`The XLNet model was proposed in <a href="https://arxiv.org/abs/1906.08237" rel="nofollow">XLNet: Generalized Autoregressive Pretraining for Language Understanding</a> by Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov,
Quoc V. Le. XLnet is an extension of the Transformer-XL model pre-trained using an autoregressive method to learn
bidirectional contexts by maximizing the expected likelihood over all permutations of the input sequence factorization
order.`,Q,h,F="The abstract from the paper is the following:",Xe,we,On=`<em>With the capability of modeling bidirectional contexts, denoising autoencoding based pretraining like BERT achieves
better performance than pretraining approaches based on autoregressive language modeling. However, relying on
corrupting the input with masks, BERT neglects dependency between the masked positions and suffers from a
pretrain-finetune discrepancy. In light of these pros and cons, we propose XLNet, a generalized autoregressive
pretraining method that (1) enables learning bidirectional contexts by maximizing the expected likelihood over all
permutations of the factorization order and (2) overcomes the limitations of BERT thanks to its autoregressive
formulation. Furthermore, XLNet integrates ideas from Transformer-XL, the state-of-the-art autoregressive model, into
pretraining. Empirically, under comparable experiment settings, XLNet outperforms BERT on 20 tasks, often by a large
margin, including question answering, natural language inference, sentiment analysis, and document ranking.</em>`,Ht,Ke,Gn='This model was contributed by <a href="https://huggingface.co/thomwolf" rel="nofollow">thomwolf</a>. The original code can be found <a href="https://github.com/zihangdai/xlnet/" rel="nofollow">here</a>.',ve,Ft,je,_t,se=`<li>The specific attention pattern can be controlled at training and test time using the <code>perm_mask</code> input.</li> <li>Due to the difficulty of training a fully auto-regressive model over various factorization order, XLNet is pretrained
using only a sub-set of the output tokens as target which are selected with the <code>target_mapping</code> input.</li> <li>To use XLNet for sequential decoding (i.e. not in fully bi-directional setting), use the <code>perm_mask</code> and
<code>target_mapping</code> inputs to control the attention span and outputs (see examples in
<em>examples/pytorch/text-generation/run_generation.py</em>)</li> <li>XLNet is one of the few models that has no sequence length limit.</li> <li>XLNet is not a traditional autoregressive model but uses a training strategy that builds on that. It permutes the tokens in the sentence, then allows the model to use the last n tokens to predict the token n+1. Since this is all done with a mask, the sentence is actually fed in the model in the right order, but instead of masking the first n tokens for n+1, XLNet uses a mask that hides the previous tokens in some given permutation of 1,…,sequence length.</li> <li>XLNet also uses the same recurrence mechanism as Transformer-XL to build long-term dependencies.</li>`,bt,E,et,on,vn='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',sn,an,Wt,ke,rn,ln,xe,dn=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetModel">XLNetModel</a> or a <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetModel">TFXLNetModel</a>. It is used to
instantiate a XLNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
<a href="https://huggingface.co/xlnet/xlnet-large-cased" rel="nofollow">xlnet/xlnet-large-cased</a> architecture.`,Xt,Tt,dt=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Bt,Ce,Gt,tt,xn,H,jt,D,nt,cn='Construct an XLNet tokenizer. Based on <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.',St,ee,pn=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,mn,We,un,hn,Ct,Yn=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`,Ne,Je,Pn="<li>single sequence: <code>X &lt;sep&gt; &lt;cls&gt;</code></li> <li>pair of sequences: <code>A &lt;sep&gt; B &lt;sep&gt; &lt;cls&gt;</code></li>",fn,Be,Qt,te,ct,Vt=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,gn,he,Jt,Ge,Rt,ne="Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet",Et,Ue,At,kt,zn="If <code>token_ids_1</code> is <code>None</code>, this method only returns the first portion of the mask (0s).",K,Mt,Ot,pt,Nn,Fn,W,mt,qn,Se,to=`Construct a “fast” XLNet tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on
<a href="https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models" rel="nofollow">Unigram</a>.`,In,fe,Sn=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,le,Me,ot,Yt,de,_n=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`,Ut,yt,bn="<li>single sequence: <code>X &lt;sep&gt; &lt;cls&gt;</code></li> <li>pair of sequences: <code>A &lt;sep&gt; B &lt;sep&gt; &lt;cls&gt;</code></li>",Xn,oe,Pt,ce,ze,Dn="Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet",Tn,ge,Dt,wt,jn="If <code>token_ids_1</code> is <code>None</code>, this method only returns the first portion of the mask (0s).",Zn,ut,zt,vt,pe,Cn,A,Kt='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetModel">XLNetModel</a>.',_e,be,kn,Mn,ht,Qn='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetLMHeadModel">XLNetLMHeadModel</a>.',Qe,qt,Ve,en,xt,Hn='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForSequenceClassification">XLNetForSequenceClassification</a>.',B,me,tn,Nt,Jn,Vn='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForMultipleChoice">XLNetForMultipleChoice</a>.',Re,It,Ee,nn,$t,Wn="Output type of <code>XLNetForTokenClassificationOutput</code>.",O,qe,ae,ft,$n,Ln='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForQuestionAnsweringSimple">XLNetForQuestionAnsweringSimple</a>.',yn,Zt,Ae,wn,gt,Rn='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForQuestionAnswering">XLNetForQuestionAnswering</a>.',re,$e,u,x,Ie,Le='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetModel">TFXLNetModel</a>.',ue,Y,V,Te,m,N='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetLMHeadModel">TFXLNetLMHeadModel</a>.',R,I,G,Oe,ye,st='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForSequenceClassification">TFXLNetForSequenceClassification</a>.',at,ie,Fe,Ye,Ze,rt='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForMultipleChoice">TFXLNetForMultipleChoice</a>.',it,Un,En,Fo,io,jo="Output type of <code>TFXLNetForTokenClassificationOutput</code>.",mo,Kn,ao,Xo,lo,Co='Output type of <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForQuestionAnsweringSimple">TFXLNetForQuestionAnsweringSimple</a>.',uo,no,ho,po,fo;return v=new He({props:{title:"XLNet",local:"xlnet",headingTag:"h1"}}),X=new He({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Ft=new He({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),E=new He({props:{title:"Resources",local:"resources",headingTag:"h2"}}),an=new He({props:{title:"XLNetConfig",local:"transformers.XLNetConfig",headingTag:"h2"}}),rn=new q({props:{name:"class transformers.XLNetConfig",anchor:"transformers.XLNetConfig",parameters:[{name:"vocab_size",val:" = 32000"},{name:"d_model",val:" = 1024"},{name:"n_layer",val:" = 24"},{name:"n_head",val:" = 16"},{name:"d_inner",val:" = 4096"},{name:"ff_activation",val:" = 'gelu'"},{name:"untie_r",val:" = True"},{name:"attn_type",val:" = 'bi'"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"dropout",val:" = 0.1"},{name:"mem_len",val:" = 512"},{name:"reuse_len",val:" = None"},{name:"use_mems_eval",val:" = True"},{name:"use_mems_train",val:" = False"},{name:"bi_data",val:" = False"},{name:"clamp_len",val:" = -1"},{name:"same_length",val:" = False"},{name:"summary_type",val:" = 'last'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'tanh'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"pad_token_id",val:" = 5"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32000) &#x2014;
Vocabulary size of the XLNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetModel">XLNetModel</a> or <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetModel">TFXLNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLNetConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.XLNetConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.XLNetConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.XLNetConfig.d_inner",description:`<strong>d_inner</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"d_inner"},{anchor:"transformers.XLNetConfig.ff_activation",description:`<strong>ff_activation</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and
<code>&quot;gelu_new&quot;</code> are supported.`,name:"ff_activation"},{anchor:"transformers.XLNetConfig.untie_r",description:`<strong>untie_r</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to untie relative position biases`,name:"untie_r"},{anchor:"transformers.XLNetConfig.attn_type",description:`<strong>attn_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;bi&quot;</code>) &#x2014;
The attention type used by the model. Set <code>&quot;bi&quot;</code> for XLNet, <code>&quot;uni&quot;</code> for Transformer-XL.`,name:"attn_type"},{anchor:"transformers.XLNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.XLNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLNetConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.XLNetConfig.mem_len",description:`<strong>mem_len</strong> (<code>int</code> or <code>None</code>, <em>optional</em>) &#x2014;
The number of tokens to cache. The key/value pairs that have already been pre-computed in a previous
forward pass won&#x2019;t be re-computed. See the
<a href="https://huggingface.co/transformers/quickstart.html#using-the-past" rel="nofollow">quickstart</a> for more information.`,name:"mem_len"},{anchor:"transformers.XLNetConfig.reuse_len",description:`<strong>reuse_len</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of tokens in the current batch to be cached and reused in the future.`,name:"reuse_len"},{anchor:"transformers.XLNetConfig.bi_data",description:`<strong>bi_data</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use bidirectional input pipeline. Usually set to <code>True</code> during pretraining and <code>False</code>
during finetuning.`,name:"bi_data"},{anchor:"transformers.XLNetConfig.clamp_len",description:`<strong>clamp_len</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
Clamp all relative distances larger than clamp_len. Setting this attribute to -1 means no clamping.`,name:"clamp_len"},{anchor:"transformers.XLNetConfig.same_length",description:`<strong>same_length</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the same attention length for each token.`,name:"same_length"},{anchor:"transformers.XLNetConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;last&#x201D;) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.XLNetConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.XLNetConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.XLNetConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>boo</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.XLNetConfig.summary_last_dropout",description:`<strong>summary_last_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_last_dropout"},{anchor:"transformers.XLNetConfig.start_n_top",description:`<strong>start_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"start_n_top"},{anchor:"transformers.XLNetConfig.end_n_top",description:`<strong>end_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"end_n_top"},{anchor:"transformers.XLNetConfig.use_mems_eval",description:`<strong>use_mems_eval</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should make use of the recurrent memory mechanism in evaluation mode.`,name:"use_mems_eval"},{anchor:"transformers.XLNetConfig.use_mems_train",description:`<strong>use_mems_train</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should make use of the recurrent memory mechanism in train mode.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>For pretraining, it is recommended to set <code>use_mems_train</code> to <code>True</code>. For fine-tuning, it is recommended to
set <code>use_mems_train</code> to <code>False</code> as discussed
<a href="https://github.com/zihangdai/xlnet/issues/41#issuecomment-505102587" rel="nofollow">here</a>. If <code>use_mems_train</code> is set to
<code>True</code>, one has to make sure that the train batches are correctly pre-processed, <em>e.g.</em> <code>batch_1 = [[This line is], [This is the]]</code> and <code>batch_2 = [[ the first line], [ second line]]</code> and that all batches are of
equal size.</p>

					</div>`,name:"use_mems_train"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/configuration_xlnet.py#L32"}}),Ce=new Pe({props:{anchor:"transformers.XLNetConfig.example",$$slots:{default:[Bo]},$$scope:{ctx:$}}}),tt=new He({props:{title:"XLNetTokenizer",local:"transformers.XLNetTokenizer",headingTag:"h2"}}),jt=new q({props:{name:"class transformers.XLNetTokenizer",anchor:"transformers.XLNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<eop>', '<eod>']"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.XLNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.XLNetTokenizer.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.XLNetTokenizer.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.XLNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;sep&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;cls&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLNetTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&apos;&lt;eop&gt;&apos;, &apos;&lt;eod&gt;&apos;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLNetTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XLNetTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet.py#L53"}}),un=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet.py#L298",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Qt=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.XLNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet.py#L323",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Jt=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet.py#L351",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ue=new Pe({props:{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Go]},$$scope:{ctx:$}}}),Ot=new q({props:{name:"save_vocabulary",anchor:"transformers.XLNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet.py#L381"}}),Nn=new He({props:{title:"XLNetTokenizerFast",local:"transformers.XLNetTokenizerFast",headingTag:"h2"}}),mt=new q({props:{name:"class transformers.XLNetTokenizerFast",anchor:"transformers.XLNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<eop>', '<eod>']"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.XLNetTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.XLNetTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.XLNetTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.XLNetTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLNetTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLNetTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLNetTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;sep&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLNetTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLNetTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;cls&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLNetTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLNetTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;eop&gt;&quot;, &quot;&lt;eod&gt;&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLNetTokenizerFast.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L63"}}),ot=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L177",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Pt=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L202",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ge=new Pe({props:{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[So]},$$scope:{ctx:$}}}),ut=new He({props:{title:"XLNet specific outputs",local:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",headingTag:"h2"}}),pe=new q({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"mems",val:": Optional = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"last_hidden_state"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L578"}}),kn=new q({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": Optional = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss (for next-token prediction).`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L612"}}),Ve=new q({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": Optional = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L649"}}),tn=new q({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": Optional = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L717"}}),Ee=new q({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": Optional = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L683"}}),ae=new q({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"mems",val:": Optional = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L753"}}),Ae=new q({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"start_top_log_probs",val:": Optional = None"},{name:"start_top_index",val:": Optional = None"},{name:"end_top_log_probs",val:": Optional = None"},{name:"end_top_index",val:": Optional = None"},{name:"cls_logits",val:": Optional = None"},{name:"mems",val:": Optional = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) &#x2014;
Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.start_top_log_probs",description:`<strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_log_probs"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.start_top_index",description:`<strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_index"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.end_top_log_probs",description:`<strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).`,name:"end_top_log_probs"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.end_top_index",description:`<strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).`,name:"end_top_index"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.cls_logits",description:`<strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the <code>is_impossible</code> label of the answers.`,name:"cls_logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L790"}}),u=new q({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput",parameters:[{name:"last_hidden_state",val:": tf.Tensor = None"},{name:"mems",val:": List[tf.Tensor] | None = None"},{name:"hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor, ...] | None = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"last_hidden_state"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L845"}}),V=new q({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput",parameters:[{name:"loss",val:": tf.Tensor | None = None"},{name:"logits",val:": tf.Tensor = None"},{name:"mems",val:": List[tf.Tensor] | None = None"},{name:"hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor, ...] | None = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss (for next-token prediction).`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L879"}}),G=new q({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput",parameters:[{name:"loss",val:": tf.Tensor | None = None"},{name:"logits",val:": tf.Tensor = None"},{name:"mems",val:": List[tf.Tensor] | None = None"},{name:"hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor, ...] | None = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L916"}}),Fe=new q({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput",parameters:[{name:"loss",val:": tf.Tensor | None = None"},{name:"logits",val:": tf.Tensor = None"},{name:"mems",val:": List[tf.Tensor] | None = None"},{name:"hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor, ...] | None = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L984"}}),En=new q({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput",parameters:[{name:"loss",val:": tf.Tensor | None = None"},{name:"logits",val:": tf.Tensor = None"},{name:"mems",val:": List[tf.Tensor] | None = None"},{name:"hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor, ...] | None = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L950"}}),ao=new q({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput",parameters:[{name:"loss",val:": tf.Tensor | None = None"},{name:"start_logits",val:": tf.Tensor = None"},{name:"end_logits",val:": tf.Tensor = None"},{name:"mems",val:": List[tf.Tensor] | None = None"},{name:"hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor, ...] | None = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1020"}}),no=new Wo({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Fs],pytorch:[rs]},$$scope:{ctx:$}}}),{c(){e=d("meta"),f=r(),n=d("p"),s=r(),_(v.$$.fragment),t=r(),w=d("div"),w.innerHTML=P,z=r(),_(X.$$.fragment),S=r(),C=d("p"),C.innerHTML=j,Q=r(),h=d("p"),h.textContent=F,Xe=r(),we=d("p"),we.innerHTML=On,Ht=r(),Ke=d("p"),Ke.innerHTML=Gn,ve=r(),_(Ft.$$.fragment),je=r(),_t=d("ul"),_t.innerHTML=se,bt=r(),_(E.$$.fragment),et=r(),on=d("ul"),on.innerHTML=vn,sn=r(),_(an.$$.fragment),Wt=r(),ke=d("div"),_(rn.$$.fragment),ln=r(),xe=d("p"),xe.innerHTML=dn,Xt=r(),Tt=d("p"),Tt.innerHTML=dt,Bt=r(),_(Ce.$$.fragment),Gt=r(),_(tt.$$.fragment),xn=r(),H=d("div"),_(jt.$$.fragment),D=r(),nt=d("p"),nt.innerHTML=cn,St=r(),ee=d("p"),ee.innerHTML=pn,mn=r(),We=d("div"),_(un.$$.fragment),hn=r(),Ct=d("p"),Ct.textContent=Yn,Ne=r(),Je=d("ul"),Je.innerHTML=Pn,fn=r(),Be=d("div"),_(Qt.$$.fragment),te=r(),ct=d("p"),ct.innerHTML=Vt,gn=r(),he=d("div"),_(Jt.$$.fragment),Ge=r(),Rt=d("p"),Rt.textContent=ne,Et=r(),_(Ue.$$.fragment),At=r(),kt=d("p"),kt.innerHTML=zn,K=r(),Mt=d("div"),_(Ot.$$.fragment),pt=r(),_(Nn.$$.fragment),Fn=r(),W=d("div"),_(mt.$$.fragment),qn=r(),Se=d("p"),Se.innerHTML=to,In=r(),fe=d("p"),fe.innerHTML=Sn,le=r(),Me=d("div"),_(ot.$$.fragment),Yt=r(),de=d("p"),de.textContent=_n,Ut=r(),yt=d("ul"),yt.innerHTML=bn,Xn=r(),oe=d("div"),_(Pt.$$.fragment),ce=r(),ze=d("p"),ze.textContent=Dn,Tn=r(),_(ge.$$.fragment),Dt=r(),wt=d("p"),wt.innerHTML=jn,Zn=r(),_(ut.$$.fragment),zt=r(),vt=d("div"),_(pe.$$.fragment),Cn=r(),A=d("p"),A.innerHTML=Kt,_e=r(),be=d("div"),_(kn.$$.fragment),Mn=r(),ht=d("p"),ht.innerHTML=Qn,Qe=r(),qt=d("div"),_(Ve.$$.fragment),en=r(),xt=d("p"),xt.innerHTML=Hn,B=r(),me=d("div"),_(tn.$$.fragment),Nt=r(),Jn=d("p"),Jn.innerHTML=Vn,Re=r(),It=d("div"),_(Ee.$$.fragment),nn=r(),$t=d("p"),$t.innerHTML=Wn,O=r(),qe=d("div"),_(ae.$$.fragment),ft=r(),$n=d("p"),$n.innerHTML=Ln,yn=r(),Zt=d("div"),_(Ae.$$.fragment),wn=r(),gt=d("p"),gt.innerHTML=Rn,re=r(),$e=d("div"),_(u.$$.fragment),x=r(),Ie=d("p"),Ie.innerHTML=Le,ue=r(),Y=d("div"),_(V.$$.fragment),Te=r(),m=d("p"),m.innerHTML=N,R=r(),I=d("div"),_(G.$$.fragment),Oe=r(),ye=d("p"),ye.innerHTML=st,at=r(),ie=d("div"),_(Fe.$$.fragment),Ye=r(),Ze=d("p"),Ze.innerHTML=rt,it=r(),Un=d("div"),_(En.$$.fragment),Fo=r(),io=d("p"),io.innerHTML=jo,mo=r(),Kn=d("div"),_(ao.$$.fragment),Xo=r(),lo=d("p"),lo.innerHTML=Co,uo=r(),_(no.$$.fragment),ho=r(),po=d("p"),this.h()},l(l){const L=Ho("svelte-u9bgzb",document.head);e=c(L,"META",{name:!0,content:!0}),L.forEach(o),f=i(l),n=c(l,"P",{}),U(n).forEach(o),s=i(l),b(v.$$.fragment,l),t=i(l),w=c(l,"DIV",{class:!0,"data-svelte-h":!0}),g(w)!=="svelte-1jyfy8r"&&(w.innerHTML=P),z=i(l),b(X.$$.fragment,l),S=i(l),C=c(l,"P",{"data-svelte-h":!0}),g(C)!=="svelte-y0ew"&&(C.innerHTML=j),Q=i(l),h=c(l,"P",{"data-svelte-h":!0}),g(h)!=="svelte-vfdo9a"&&(h.textContent=F),Xe=i(l),we=c(l,"P",{"data-svelte-h":!0}),g(we)!=="svelte-ebukil"&&(we.innerHTML=On),Ht=i(l),Ke=c(l,"P",{"data-svelte-h":!0}),g(Ke)!=="svelte-1j7svg"&&(Ke.innerHTML=Gn),ve=i(l),b(Ft.$$.fragment,l),je=i(l),_t=c(l,"UL",{"data-svelte-h":!0}),g(_t)!=="svelte-1gubzyh"&&(_t.innerHTML=se),bt=i(l),b(E.$$.fragment,l),et=i(l),on=c(l,"UL",{"data-svelte-h":!0}),g(on)!=="svelte-qxfc7p"&&(on.innerHTML=vn),sn=i(l),b(an.$$.fragment,l),Wt=i(l),ke=c(l,"DIV",{class:!0});var Bn=U(ke);b(rn.$$.fragment,Bn),ln=i(Bn),xe=c(Bn,"P",{"data-svelte-h":!0}),g(xe)!=="svelte-q2qd63"&&(xe.innerHTML=dn),Xt=i(Bn),Tt=c(Bn,"P",{"data-svelte-h":!0}),g(Tt)!=="svelte-o55m63"&&(Tt.innerHTML=dt),Bt=i(Bn),b(Ce.$$.fragment,Bn),Bn.forEach(o),Gt=i(l),b(tt.$$.fragment,l),xn=i(l),H=c(l,"DIV",{class:!0});var Lt=U(H);b(jt.$$.fragment,Lt),D=i(Lt),nt=c(Lt,"P",{"data-svelte-h":!0}),g(nt)!=="svelte-1dqc3xp"&&(nt.innerHTML=cn),St=i(Lt),ee=c(Lt,"P",{"data-svelte-h":!0}),g(ee)!=="svelte-1c3t5ty"&&(ee.innerHTML=pn),mn=i(Lt),We=c(Lt,"DIV",{class:!0});var eo=U(We);b(un.$$.fragment,eo),hn=i(eo),Ct=c(eo,"P",{"data-svelte-h":!0}),g(Ct)!=="svelte-1dgk30w"&&(Ct.textContent=Yn),Ne=i(eo),Je=c(eo,"UL",{"data-svelte-h":!0}),g(Je)!=="svelte-zi1mnq"&&(Je.innerHTML=Pn),eo.forEach(o),fn=i(Lt),Be=c(Lt,"DIV",{class:!0});var ro=U(Be);b(Qt.$$.fragment,ro),te=i(ro),ct=c(ro,"P",{"data-svelte-h":!0}),g(ct)!=="svelte-1f4f5kp"&&(ct.innerHTML=Vt),ro.forEach(o),gn=i(Lt),he=c(Lt,"DIV",{class:!0});var oo=U(he);b(Jt.$$.fragment,oo),Ge=i(oo),Rt=c(oo,"P",{"data-svelte-h":!0}),g(Rt)!=="svelte-1nwvqaq"&&(Rt.textContent=ne),Et=i(oo),b(Ue.$$.fragment,oo),At=i(oo),kt=c(oo,"P",{"data-svelte-h":!0}),g(kt)!=="svelte-owoxgn"&&(kt.innerHTML=zn),oo.forEach(o),K=i(Lt),Mt=c(Lt,"DIV",{class:!0});var Jo=U(Mt);b(Ot.$$.fragment,Jo),Jo.forEach(o),Lt.forEach(o),pt=i(l),b(Nn.$$.fragment,l),Fn=i(l),W=c(l,"DIV",{class:!0});var An=U(W);b(mt.$$.fragment,An),qn=i(An),Se=c(An,"P",{"data-svelte-h":!0}),g(Se)!=="svelte-1jtbcee"&&(Se.innerHTML=to),In=i(An),fe=c(An,"P",{"data-svelte-h":!0}),g(fe)!=="svelte-fh0aq"&&(fe.innerHTML=Sn),le=i(An),Me=c(An,"DIV",{class:!0});var co=U(Me);b(ot.$$.fragment,co),Yt=i(co),de=c(co,"P",{"data-svelte-h":!0}),g(de)!=="svelte-1dgk30w"&&(de.textContent=_n),Ut=i(co),yt=c(co,"UL",{"data-svelte-h":!0}),g(yt)!=="svelte-zi1mnq"&&(yt.innerHTML=bn),co.forEach(o),Xn=i(An),oe=c(An,"DIV",{class:!0});var so=U(oe);b(Pt.$$.fragment,so),ce=i(so),ze=c(so,"P",{"data-svelte-h":!0}),g(ze)!=="svelte-1nwvqaq"&&(ze.textContent=Dn),Tn=i(so),b(ge.$$.fragment,so),Dt=i(so),wt=c(so,"P",{"data-svelte-h":!0}),g(wt)!=="svelte-owoxgn"&&(wt.innerHTML=jn),so.forEach(o),An.forEach(o),Zn=i(l),b(ut.$$.fragment,l),zt=i(l),vt=c(l,"DIV",{class:!0});var go=U(vt);b(pe.$$.fragment,go),Cn=i(go),A=c(go,"P",{"data-svelte-h":!0}),g(A)!=="svelte-auoux0"&&(A.innerHTML=Kt),go.forEach(o),_e=i(l),be=c(l,"DIV",{class:!0});var _o=U(be);b(kn.$$.fragment,_o),Mn=i(_o),ht=c(_o,"P",{"data-svelte-h":!0}),g(ht)!=="svelte-1bpjn2e"&&(ht.innerHTML=Qn),_o.forEach(o),Qe=i(l),qt=c(l,"DIV",{class:!0});var bo=U(qt);b(Ve.$$.fragment,bo),en=i(bo),xt=c(bo,"P",{"data-svelte-h":!0}),g(xt)!=="svelte-1uwyqk2"&&(xt.innerHTML=Hn),bo.forEach(o),B=i(l),me=c(l,"DIV",{class:!0});var To=U(me);b(tn.$$.fragment,To),Nt=i(To),Jn=c(To,"P",{"data-svelte-h":!0}),g(Jn)!=="svelte-dzf21m"&&(Jn.innerHTML=Vn),To.forEach(o),Re=i(l),It=c(l,"DIV",{class:!0});var ko=U(It);b(Ee.$$.fragment,ko),nn=i(ko),$t=c(ko,"P",{"data-svelte-h":!0}),g($t)!=="svelte-3njxff"&&($t.innerHTML=Wn),ko.forEach(o),O=i(l),qe=c(l,"DIV",{class:!0});var Mo=U(qe);b(ae.$$.fragment,Mo),ft=i(Mo),$n=c(Mo,"P",{"data-svelte-h":!0}),g($n)!=="svelte-f56otc"&&($n.innerHTML=Ln),Mo.forEach(o),yn=i(l),Zt=c(l,"DIV",{class:!0});var yo=U(Zt);b(Ae.$$.fragment,yo),wn=i(yo),gt=c(yo,"P",{"data-svelte-h":!0}),g(gt)!=="svelte-23wgc"&&(gt.innerHTML=Rn),yo.forEach(o),re=i(l),$e=c(l,"DIV",{class:!0});var wo=U($e);b(u.$$.fragment,wo),x=i(wo),Ie=c(wo,"P",{"data-svelte-h":!0}),g(Ie)!=="svelte-nkdfpc"&&(Ie.innerHTML=Le),wo.forEach(o),ue=i(l),Y=c(l,"DIV",{class:!0});var vo=U(Y);b(V.$$.fragment,vo),Te=i(vo),m=c(vo,"P",{"data-svelte-h":!0}),g(m)!=="svelte-o61s6"&&(m.innerHTML=N),vo.forEach(o),R=i(l),I=c(l,"DIV",{class:!0});var xo=U(I);b(G.$$.fragment,xo),Oe=i(xo),ye=c(xo,"P",{"data-svelte-h":!0}),g(ye)!=="svelte-1mf6ts2"&&(ye.innerHTML=st),xo.forEach(o),at=i(l),ie=c(l,"DIV",{class:!0});var No=U(ie);b(Fe.$$.fragment,No),Ye=i(No),Ze=c(No,"P",{"data-svelte-h":!0}),g(Ze)!=="svelte-y7634y"&&(Ze.innerHTML=rt),No.forEach(o),it=i(l),Un=c(l,"DIV",{class:!0});var $o=U(Un);b(En.$$.fragment,$o),Fo=i($o),io=c($o,"P",{"data-svelte-h":!0}),g(io)!=="svelte-mmrrdx"&&(io.innerHTML=jo),$o.forEach(o),mo=i(l),Kn=c(l,"DIV",{class:!0});var Lo=U(Kn);b(ao.$$.fragment,Lo),Xo=i(Lo),lo=c(Lo,"P",{"data-svelte-h":!0}),g(lo)!=="svelte-1jwwi5g"&&(lo.innerHTML=Co),Lo.forEach(o),uo=i(l),b(no.$$.fragment,l),ho=i(l),po=c(l,"P",{}),U(po).forEach(o),this.h()},h(){J(e,"name","hf:doc:metadata"),J(e,"content",js),J(w,"class","flex flex-wrap space-x-1"),J(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),J(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,L){a(document.head,e),p(l,f,L),p(l,n,L),p(l,s,L),T(v,l,L),p(l,t,L),p(l,w,L),p(l,z,L),T(X,l,L),p(l,S,L),p(l,C,L),p(l,Q,L),p(l,h,L),p(l,Xe,L),p(l,we,L),p(l,Ht,L),p(l,Ke,L),p(l,ve,L),T(Ft,l,L),p(l,je,L),p(l,_t,L),p(l,bt,L),T(E,l,L),p(l,et,L),p(l,on,L),p(l,sn,L),T(an,l,L),p(l,Wt,L),p(l,ke,L),T(rn,ke,null),a(ke,ln),a(ke,xe),a(ke,Xt),a(ke,Tt),a(ke,Bt),T(Ce,ke,null),p(l,Gt,L),T(tt,l,L),p(l,xn,L),p(l,H,L),T(jt,H,null),a(H,D),a(H,nt),a(H,St),a(H,ee),a(H,mn),a(H,We),T(un,We,null),a(We,hn),a(We,Ct),a(We,Ne),a(We,Je),a(H,fn),a(H,Be),T(Qt,Be,null),a(Be,te),a(Be,ct),a(H,gn),a(H,he),T(Jt,he,null),a(he,Ge),a(he,Rt),a(he,Et),T(Ue,he,null),a(he,At),a(he,kt),a(H,K),a(H,Mt),T(Ot,Mt,null),p(l,pt,L),T(Nn,l,L),p(l,Fn,L),p(l,W,L),T(mt,W,null),a(W,qn),a(W,Se),a(W,In),a(W,fe),a(W,le),a(W,Me),T(ot,Me,null),a(Me,Yt),a(Me,de),a(Me,Ut),a(Me,yt),a(W,Xn),a(W,oe),T(Pt,oe,null),a(oe,ce),a(oe,ze),a(oe,Tn),T(ge,oe,null),a(oe,Dt),a(oe,wt),p(l,Zn,L),T(ut,l,L),p(l,zt,L),p(l,vt,L),T(pe,vt,null),a(vt,Cn),a(vt,A),p(l,_e,L),p(l,be,L),T(kn,be,null),a(be,Mn),a(be,ht),p(l,Qe,L),p(l,qt,L),T(Ve,qt,null),a(qt,en),a(qt,xt),p(l,B,L),p(l,me,L),T(tn,me,null),a(me,Nt),a(me,Jn),p(l,Re,L),p(l,It,L),T(Ee,It,null),a(It,nn),a(It,$t),p(l,O,L),p(l,qe,L),T(ae,qe,null),a(qe,ft),a(qe,$n),p(l,yn,L),p(l,Zt,L),T(Ae,Zt,null),a(Zt,wn),a(Zt,gt),p(l,re,L),p(l,$e,L),T(u,$e,null),a($e,x),a($e,Ie),p(l,ue,L),p(l,Y,L),T(V,Y,null),a(Y,Te),a(Y,m),p(l,R,L),p(l,I,L),T(G,I,null),a(I,Oe),a(I,ye),p(l,at,L),p(l,ie,L),T(Fe,ie,null),a(ie,Ye),a(ie,Ze),p(l,it,L),p(l,Un,L),T(En,Un,null),a(Un,Fo),a(Un,io),p(l,mo,L),p(l,Kn,L),T(ao,Kn,null),a(Kn,Xo),a(Kn,lo),p(l,uo,L),T(no,l,L),p(l,ho,L),p(l,po,L),fo=!0},p(l,[L]){const Bn={};L&2&&(Bn.$$scope={dirty:L,ctx:l}),Ce.$set(Bn);const Lt={};L&2&&(Lt.$$scope={dirty:L,ctx:l}),Ue.$set(Lt);const eo={};L&2&&(eo.$$scope={dirty:L,ctx:l}),ge.$set(eo);const ro={};L&2&&(ro.$$scope={dirty:L,ctx:l}),no.$set(ro)},i(l){fo||(k(v.$$.fragment,l),k(X.$$.fragment,l),k(Ft.$$.fragment,l),k(E.$$.fragment,l),k(an.$$.fragment,l),k(rn.$$.fragment,l),k(Ce.$$.fragment,l),k(tt.$$.fragment,l),k(jt.$$.fragment,l),k(un.$$.fragment,l),k(Qt.$$.fragment,l),k(Jt.$$.fragment,l),k(Ue.$$.fragment,l),k(Ot.$$.fragment,l),k(Nn.$$.fragment,l),k(mt.$$.fragment,l),k(ot.$$.fragment,l),k(Pt.$$.fragment,l),k(ge.$$.fragment,l),k(ut.$$.fragment,l),k(pe.$$.fragment,l),k(kn.$$.fragment,l),k(Ve.$$.fragment,l),k(tn.$$.fragment,l),k(Ee.$$.fragment,l),k(ae.$$.fragment,l),k(Ae.$$.fragment,l),k(u.$$.fragment,l),k(V.$$.fragment,l),k(G.$$.fragment,l),k(Fe.$$.fragment,l),k(En.$$.fragment,l),k(ao.$$.fragment,l),k(no.$$.fragment,l),fo=!0)},o(l){M(v.$$.fragment,l),M(X.$$.fragment,l),M(Ft.$$.fragment,l),M(E.$$.fragment,l),M(an.$$.fragment,l),M(rn.$$.fragment,l),M(Ce.$$.fragment,l),M(tt.$$.fragment,l),M(jt.$$.fragment,l),M(un.$$.fragment,l),M(Qt.$$.fragment,l),M(Jt.$$.fragment,l),M(Ue.$$.fragment,l),M(Ot.$$.fragment,l),M(Nn.$$.fragment,l),M(mt.$$.fragment,l),M(ot.$$.fragment,l),M(Pt.$$.fragment,l),M(ge.$$.fragment,l),M(ut.$$.fragment,l),M(pe.$$.fragment,l),M(kn.$$.fragment,l),M(Ve.$$.fragment,l),M(tn.$$.fragment,l),M(Ee.$$.fragment,l),M(ae.$$.fragment,l),M(Ae.$$.fragment,l),M(u.$$.fragment,l),M(V.$$.fragment,l),M(G.$$.fragment,l),M(Fe.$$.fragment,l),M(En.$$.fragment,l),M(ao.$$.fragment,l),M(no.$$.fragment,l),fo=!1},d(l){l&&(o(f),o(n),o(s),o(t),o(w),o(z),o(S),o(C),o(Q),o(h),o(Xe),o(we),o(Ht),o(Ke),o(ve),o(je),o(_t),o(bt),o(et),o(on),o(sn),o(Wt),o(ke),o(Gt),o(xn),o(H),o(pt),o(Fn),o(W),o(Zn),o(zt),o(vt),o(_e),o(be),o(Qe),o(qt),o(B),o(me),o(Re),o(It),o(O),o(qe),o(yn),o(Zt),o(re),o($e),o(ue),o(Y),o(R),o(I),o(at),o(ie),o(it),o(Un),o(mo),o(Kn),o(uo),o(ho),o(po)),o(e),y(v,l),y(X,l),y(Ft,l),y(E,l),y(an,l),y(rn),y(Ce),y(tt,l),y(jt),y(un),y(Qt),y(Jt),y(Ue),y(Ot),y(Nn,l),y(mt),y(ot),y(Pt),y(ge),y(ut,l),y(pe),y(kn),y(Ve),y(tn),y(Ee),y(ae),y(Ae),y(u),y(V),y(G),y(Fe),y(En),y(ao),y(no,l)}}}const js='{"title":"XLNet","local":"xlnet","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"XLNetConfig","local":"transformers.XLNetConfig","sections":[],"depth":2},{"title":"XLNetTokenizer","local":"transformers.XLNetTokenizer","sections":[],"depth":2},{"title":"XLNetTokenizerFast","local":"transformers.XLNetTokenizerFast","sections":[],"depth":2},{"title":"XLNet specific outputs","local":"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput","sections":[],"depth":2},{"title":"XLNetModel","local":"transformers.XLNetModel","sections":[],"depth":2},{"title":"XLNetLMHeadModel","local":"transformers.XLNetLMHeadModel","sections":[],"depth":2},{"title":"XLNetForSequenceClassification","local":"transformers.XLNetForSequenceClassification","sections":[],"depth":2},{"title":"XLNetForMultipleChoice","local":"transformers.XLNetForMultipleChoice","sections":[],"depth":2},{"title":"XLNetForTokenClassification","local":"transformers.XLNetForTokenClassification","sections":[],"depth":2},{"title":"XLNetForQuestionAnsweringSimple","local":"transformers.XLNetForQuestionAnsweringSimple","sections":[],"depth":2},{"title":"XLNetForQuestionAnswering","local":"transformers.XLNetForQuestionAnswering","sections":[],"depth":2},{"title":"TFXLNetModel","local":"transformers.TFXLNetModel","sections":[],"depth":2},{"title":"TFXLNetLMHeadModel","local":"transformers.TFXLNetLMHeadModel","sections":[],"depth":2},{"title":"TFXLNetForSequenceClassification","local":"transformers.TFXLNetForSequenceClassification","sections":[],"depth":2},{"title":"TFLNetForMultipleChoice","local":"transformers.TFXLNetForMultipleChoice","sections":[],"depth":2},{"title":"TFXLNetForTokenClassification","local":"transformers.TFXLNetForTokenClassification","sections":[],"depth":2},{"title":"TFXLNetForQuestionAnsweringSimple","local":"transformers.TFXLNetForQuestionAnsweringSimple","sections":[],"depth":2}],"depth":1}';function Cs($){return qo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Bs extends Io{constructor(e){super(),Zo(this,e,Cs,Xs,zo,{})}}export{Bs as component};
