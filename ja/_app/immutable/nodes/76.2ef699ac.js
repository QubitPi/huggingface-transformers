import{s as Vt,o as Ot,n as X}from"../chunks/scheduler.9bc65507.js";import{S as Xt,i as Ht,g as c,s as a,r as h,A as Dt,h as p,f as t,c as r,j as B,u,x as f,k as U,y as d,a as i,v as g,d as _,t as b,w as y}from"../chunks/index.707bf1b6.js";import{T as Zo}from"../chunks/Tip.c2ecdbf4.js";import{D as q}from"../chunks/Docstring.17db21ae.js";import{C as Re}from"../chunks/CodeBlock.54a9f38d.js";import{E as ao}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as P}from"../chunks/Heading.342b1fa6.js";function Yt(w){let n,k="Examples:",l,m,M;return m=new Re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEJyb3NDb25maWclMkMlMjBCcm9zTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwQlJPUyUyMGppbmhvODM0NSUyRmJyb3MtYmFzZS11bmNhc2VkJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMEJyb3NDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMGZyb20lMjB0aGUlMjBqaW5obzgzNDUlMkZicm9zLWJhc2UtdW5jYXNlZCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwQnJvc01vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BrosConfig, BrosModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BROS jinho8345/bros-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BrosConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the jinho8345/bros-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BrosModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){n=c("p"),n.textContent=k,l=a(),h(m.$$.fragment)},l(s){n=p(s,"P",{"data-svelte-h":!0}),f(n)!=="svelte-kvfsh7"&&(n.textContent=k),l=r(s),u(m.$$.fragment,s)},m(s,T){i(s,n,T),i(s,l,T),g(m,s,T),M=!0},p:X,i(s){M||(_(m.$$.fragment,s),M=!0)},o(s){b(m.$$.fragment,s),M=!1},d(s){s&&(t(n),t(l)),y(m,s)}}}function At(w){let n,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=k},l(l){n=p(l,"P",{"data-svelte-h":!0}),f(n)!=="svelte-fincs2"&&(n.innerHTML=k)},m(l,m){i(l,n,m)},p:X,d(l){l&&t(n)}}}function Kt(w){let n,k="Examples:",l,m,M;return m=new Re({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQnJvc1Byb2Nlc3NvciUyQyUyMEJyb3NNb2RlbCUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEJyb3NQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmppbmhvODM0NSUyRmJyb3MtYmFzZS11bmNhc2VkJTIyKSUwQSUwQW1vZGVsJTIwJTNEJTIwQnJvc01vZGVsLmZyb21fcHJldHJhaW5lZCglMjJqaW5obzgzNDUlMkZicm9zLWJhc2UtdW5jYXNlZCUyMiklMEElMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQWJib3glMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCJTVCJTVCMCUyQyUyMDAlMkMlMjAxJTJDJTIwMSU1RCU1RCU1RCkucmVwZWF0KDElMkMlMjBlbmNvZGluZyU1QiUyMmlucHV0X2lkcyUyMiU1RC5zaGFwZSU1Qi0xJTVEJTJDJTIwMSklMEFlbmNvZGluZyU1QiUyMmJib3glMjIlNUQlMjAlM0QlMjBiYm94JTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmcpJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BrosProcessor, BrosModel

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = BrosProcessor.from_pretrained(<span class="hljs-string">&quot;jinho8345/bros-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BrosModel.from_pretrained(<span class="hljs-string">&quot;jinho8345/bros-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([[[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]]).repeat(<span class="hljs-number">1</span>, encoding[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>], <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding[<span class="hljs-string">&quot;bbox&quot;</span>] = bbox

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){n=c("p"),n.textContent=k,l=a(),h(m.$$.fragment)},l(s){n=p(s,"P",{"data-svelte-h":!0}),f(n)!=="svelte-kvfsh7"&&(n.textContent=k),l=r(s),u(m.$$.fragment,s)},m(s,T){i(s,n,T),i(s,l,T),g(m,s,T),M=!0},p:X,i(s){M||(_(m.$$.fragment,s),M=!0)},o(s){b(m.$$.fragment,s),M=!1},d(s){s&&(t(n),t(l)),y(m,s)}}}function en(w){let n,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=k},l(l){n=p(l,"P",{"data-svelte-h":!0}),f(n)!=="svelte-fincs2"&&(n.innerHTML=k)},m(l,m){i(l,n,m)},p:X,d(l){l&&t(n)}}}function on(w){let n,k="Examples:",l,m,M;return m=new Re({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQnJvc1Byb2Nlc3NvciUyQyUyMEJyb3NGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBJTBBcHJvY2Vzc29yJTIwJTNEJTIwQnJvc1Byb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyamluaG84MzQ1JTJGYnJvcy1iYXNlLXVuY2FzZWQlMjIpJTBBJTBBbW9kZWwlMjAlM0QlMjBCcm9zRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyamluaG84MzQ1JTJGYnJvcy1iYXNlLXVuY2FzZWQlMjIpJTBBJTBBZW5jb2RpbmclMjAlM0QlMjBwcm9jZXNzb3IoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFiYm94JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QiU1QiU1QjAlMkMlMjAwJTJDJTIwMSUyQyUyMDElNUQlNUQlNUQpLnJlcGVhdCgxJTJDJTIwZW5jb2RpbmclNUIlMjJpbnB1dF9pZHMlMjIlNUQuc2hhcGUlNUItMSU1RCUyQyUyMDEpJTBBZW5jb2RpbmclNUIlMjJiYm94JTIyJTVEJTIwJTNEJTIwYmJveCUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmVuY29kaW5nKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BrosProcessor, BrosForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = BrosProcessor.from_pretrained(<span class="hljs-string">&quot;jinho8345/bros-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BrosForTokenClassification.from_pretrained(<span class="hljs-string">&quot;jinho8345/bros-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([[[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]]).repeat(<span class="hljs-number">1</span>, encoding[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>], <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding[<span class="hljs-string">&quot;bbox&quot;</span>] = bbox

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)`,wrap:!1}}),{c(){n=c("p"),n.textContent=k,l=a(),h(m.$$.fragment)},l(s){n=p(s,"P",{"data-svelte-h":!0}),f(n)!=="svelte-kvfsh7"&&(n.textContent=k),l=r(s),u(m.$$.fragment,s)},m(s,T){i(s,n,T),i(s,l,T),g(m,s,T),M=!0},p:X,i(s){M||(_(m.$$.fragment,s),M=!0)},o(s){b(m.$$.fragment,s),M=!1},d(s){s&&(t(n),t(l)),y(m,s)}}}function tn(w){let n,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=k},l(l){n=p(l,"P",{"data-svelte-h":!0}),f(n)!=="svelte-fincs2"&&(n.innerHTML=k)},m(l,m){i(l,n,m)},p:X,d(l){l&&t(n)}}}function nn(w){let n,k="Examples:",l,m,M;return m=new Re({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQnJvc1Byb2Nlc3NvciUyQyUyMEJyb3NTcGFkZUVFRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEJyb3NQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmppbmhvODM0NSUyRmJyb3MtYmFzZS11bmNhc2VkJTIyKSUwQSUwQW1vZGVsJTIwJTNEJTIwQnJvc1NwYWRlRUVGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJqaW5obzgzNDUlMkZicm9zLWJhc2UtdW5jYXNlZCUyMiklMEElMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQWJib3glMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCJTVCJTVCMCUyQyUyMDAlMkMlMjAxJTJDJTIwMSU1RCU1RCU1RCkucmVwZWF0KDElMkMlMjBlbmNvZGluZyU1QiUyMmlucHV0X2lkcyUyMiU1RC5zaGFwZSU1Qi0xJTVEJTJDJTIwMSklMEFlbmNvZGluZyU1QiUyMmJib3glMjIlNUQlMjAlM0QlMjBiYm94JTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2Rpbmcp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BrosProcessor, BrosSpadeEEForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = BrosProcessor.from_pretrained(<span class="hljs-string">&quot;jinho8345/bros-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BrosSpadeEEForTokenClassification.from_pretrained(<span class="hljs-string">&quot;jinho8345/bros-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([[[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]]).repeat(<span class="hljs-number">1</span>, encoding[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>], <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding[<span class="hljs-string">&quot;bbox&quot;</span>] = bbox

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)`,wrap:!1}}),{c(){n=c("p"),n.textContent=k,l=a(),h(m.$$.fragment)},l(s){n=p(s,"P",{"data-svelte-h":!0}),f(n)!=="svelte-kvfsh7"&&(n.textContent=k),l=r(s),u(m.$$.fragment,s)},m(s,T){i(s,n,T),i(s,l,T),g(m,s,T),M=!0},p:X,i(s){M||(_(m.$$.fragment,s),M=!0)},o(s){b(m.$$.fragment,s),M=!1},d(s){s&&(t(n),t(l)),y(m,s)}}}function sn(w){let n,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=c("p"),n.innerHTML=k},l(l){n=p(l,"P",{"data-svelte-h":!0}),f(n)!=="svelte-fincs2"&&(n.innerHTML=k)},m(l,m){i(l,n,m)},p:X,d(l){l&&t(n)}}}function an(w){let n,k="Examples:",l,m,M;return m=new Re({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQnJvc1Byb2Nlc3NvciUyQyUyMEJyb3NTcGFkZUVMRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEJyb3NQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmppbmhvODM0NSUyRmJyb3MtYmFzZS11bmNhc2VkJTIyKSUwQSUwQW1vZGVsJTIwJTNEJTIwQnJvc1NwYWRlRUxGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJqaW5obzgzNDUlMkZicm9zLWJhc2UtdW5jYXNlZCUyMiklMEElMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQWJib3glMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCJTVCJTVCMCUyQyUyMDAlMkMlMjAxJTJDJTIwMSU1RCU1RCU1RCkucmVwZWF0KDElMkMlMjBlbmNvZGluZyU1QiUyMmlucHV0X2lkcyUyMiU1RC5zaGFwZSU1Qi0xJTVEJTJDJTIwMSklMEFlbmNvZGluZyU1QiUyMmJib3glMjIlNUQlMjAlM0QlMjBiYm94JTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2Rpbmcp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BrosProcessor, BrosSpadeELForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = BrosProcessor.from_pretrained(<span class="hljs-string">&quot;jinho8345/bros-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BrosSpadeELForTokenClassification.from_pretrained(<span class="hljs-string">&quot;jinho8345/bros-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([[[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]]).repeat(<span class="hljs-number">1</span>, encoding[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>], <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding[<span class="hljs-string">&quot;bbox&quot;</span>] = bbox

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)`,wrap:!1}}),{c(){n=c("p"),n.textContent=k,l=a(),h(m.$$.fragment)},l(s){n=p(s,"P",{"data-svelte-h":!0}),f(n)!=="svelte-kvfsh7"&&(n.textContent=k),l=r(s),u(m.$$.fragment,s)},m(s,T){i(s,n,T),i(s,l,T),g(m,s,T),M=!0},p:X,i(s){M||(_(m.$$.fragment,s),M=!0)},o(s){b(m.$$.fragment,s),M=!1},d(s){s&&(t(n),t(l)),y(m,s)}}}function rn(w){let n,k,l,m,M,s,T,ro,re,gt='BROS モデルは、Teakgyu Hon、Donghyun Kim、Mingi Ji, Wonseok Hwang, Daehyun Nam, Sungrae Park によって <a href="https://arxiv.org/abs/2108.04539" rel="nofollow">BROS: A Pre-trained Language Model Focusing on Text and Layout for Better Key Information Extraction from Documents</a> で提案されました。',io,ie,_t="BROS は <em>BERT Relying On Spatality</em> の略です。これは、一連のトークンとその境界ボックスを入力として受け取り、一連の隠れ状態を出力するエンコーダー専用の Transformer モデルです。 BROS は、絶対的な空間情報を使用する代わりに、相対的な空間情報をエンコードします。",lo,le,bt=`BERT で使用されるトークンマスク言語モデリング目標 (TMLM) と新しいエリアマスク言語モデリング目標 (AMLM) の 2 つの目標で事前トレーニングされています。
TMLM では、トークンはランダムにマスクされ、モデルは空間情報と他のマスクされていないトークンを使用してマスクされたトークンを予測します。
AMLM は TMLM の 2D バージョンです。テキスト トークンをランダムにマスクし、TMLM と同じ情報で予測しますが、テキスト ブロック (領域) をマスクします。`,co,de,yt=`<code>BrosForTokenClassification</code>には、BrosModel の上に単純な線形層があります。各トークンのラベルを予測します。
<code>BrosSpadeEEForTokenClassification</code>には、BrosModel の上に<code>initial_token_classifier</code>と<code>subsequent_token_classifier</code>があります。 <code>initial_token_classifier</code> は各エンティティの最初のトークンを予測するために使用され、<code>subsequent_token_classifier</code> はエンティティ内の次のトークンを予測するために使用されます。 <code>BrosSpadeELForTokenClassification</code>には BrosModel の上に<code>entity_linker</code>があります。 <code>entity_linker</code> は 2 つのエンティティ間の関係を予測するために使用されます。`,po,ce,Mt="<code>BrosForTokenClassification</code>と<code>BrosSpadeEEForTokenClassification</code>は基本的に同じジョブを実行します。ただし、<code>BrosForTokenClassification</code>は入力トークンが完全にシリアル化されていることを前提としています (トークンは 2D 空間に存在するため、これは非常に困難な作業です)。一方、<code>BrosSpadeEEForTokenClassification</code>は 1 つのトークンから次の接続トークンを予測するため、シリアル化エラーの処理をより柔軟に行うことができます。",mo,pe,kt="<code>BrosSpadeELForTokenClassification</code> はエンティティ内のリンク タスクを実行します。これら 2 つのエンティティが何らかの関係を共有する場合、(あるエンティティの) 1 つのトークンから (別のエンティティの) 別のトークンへの関係を予測します。",fo,me,Tt="BROS は、明示的な視覚機能に依存せずに、FUNSD、SROIE、CORD、SciTSR などの Key Information Extraction (KIE) ベンチマークで同等以上の結果を達成します。",ho,fe,wt="論文の要約は次のとおりです。",uo,he,xt="<em>文書画像からの重要情報抽出 (KIE) には、2 次元 (2D) 空間におけるテキストの文脈的および空間的意味論を理解する必要があります。最近の研究の多くは、文書画像の視覚的特徴とテキストおよびそのレイアウトを組み合わせることに重点を置いた事前トレーニング済み言語モデルを開発することで、この課題を解決しようとしています。一方、このペーパーでは、テキストとレイアウトの効果的な組み合わせという基本に立ち返ってこの問題に取り組みます。具体的には、BROS (BERT Relying On Spatality) という名前の事前トレーニング済み言語モデルを提案します。この言語モデルは、2D 空間内のテキストの相対位置をエンコードし、エリア マスキング戦略を使用してラベルのないドキュメントから学習します。 2D 空間内のテキストを理解するためのこの最適化されたトレーニング スキームにより、BROS は、視覚的な特徴に依存することなく、4 つの KIE ベンチマーク (FUNSD、SROIE</em>、CORD、および SciTSR) で以前の方法と比較して同等以上のパフォーマンスを示しました。また、この論文では、KIE タスクにおける 2 つの現実世界の課題 ((1) 間違ったテキスト順序によるエラーの最小化、および (2) 少数の下流例からの効率的な学習) を明らかにし、以前の方法に対する BROS の優位性を実証します。*",go,ue,vt='このモデルは <a href="https://huggingface.co/jinho8345" rel="nofollow">jinho8345</a> によって寄稿されました。元のコードは <a href="https://github.com/clovaai/bros" rel="nofollow">ここ</a> にあります。',_o,ge,bo,_e,Ct='<li><a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosModel.forward">forward()</a> には、<code>input_ids</code> と <code>bbox</code> (バウンディング ボックス) が必要です。各境界ボックスは、(x0、y0、x1、y1) 形式 (左上隅、右下隅) である必要があります。境界ボックスの取得は外部 OCR システムに依存します。 「x」座標はドキュメント画像の幅で正規化する必要があり、「y」座標はドキュメント画像の高さで正規化する必要があります。</li>',yo,be,Mo,ye,jt="<li>[<code>~transformers.BrosForTokenClassification.forward</code>、<code>~transformers.BrosSpadeEEForTokenClassification.forward</code>、<code>~transformers.BrosSpadeEEForTokenClassification.forward</code>] では、損失計算に <code>input_ids</code> と <code>bbox</code> だけでなく <code>box_first_token_mask</code> も必要です。これは、各ボックスの先頭以外のトークンを除外するためのマスクです。このマスクは、単語から <code>input_ids</code> を作成するときに境界ボックスの開始トークン インデックスを保存することで取得できます。次のコードで<code>box_first_token_mask</code>を作成できます。</li>",ko,Me,To,ke,wo,Te,$t='<li>デモ スクリプトは <a href="https://github.com/clovaai/bros" rel="nofollow">こちら</a> にあります。</li>',xo,we,vo,x,xe,Wo,Ge,Bt=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosModel">BrosModel</a> or a <code>TFBrosModel</code>. It is used to
instantiate a Bros model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Bros
<a href="https://huggingface.co/jinho8345/bros-base-uncased" rel="nofollow">jinho8345/bros-base-uncased</a> architecture.`,Ro,Qe,Ut=`Configuration objects inherit from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Go,H,Co,ve,jo,v,Ce,Qo,qe,Jt="Constructs a Bros processor which wraps a BERT tokenizer.",qo,Le,Ft=`<a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosProcessor">BrosProcessor</a> offers all the functionalities of <a href="/docs/transformers/main/ja/model_doc/bert#transformers.BertTokenizerFast">BertTokenizerFast</a>. See the docstring of
<a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosProcessor.__call__"><strong>call</strong>()</a> and <code>decode()</code> for more information.`,Lo,L,je,Po,Pe,zt='This method uses <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">BertTokenizerFast.<strong>call</strong>()</a> to prepare text for the model.',Vo,Ve,Nt="Please refer to the docstring of the above two methods for more information.",$o,$e,Bo,E,Be,Oo,Oe,Et=`The bare Bros Model transformer outputting raw hidden-states without any specific head on top.
This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Xo,J,Ue,Ho,Xe,It='The <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosModel">BrosModel</a> forward method, overrides the <code>__call__</code> special method.',Do,D,Yo,Y,Uo,Je,Jo,C,Fe,Ao,He,St=`Bros Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Ko,De,Zt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,et,F,ze,ot,Ye,Wt='The <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosForTokenClassification">BrosForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',tt,A,nt,K,Fo,Ne,zo,j,Ee,st,Ae,Rt=`Bros Model with a token classification head on top (initial_token_layers and subsequent_token_layer on top of the
hidden-states output) e.g. for Named-Entity-Recognition (NER) tasks. The initial_token_classifier is used to
predict the first token of each entity, and the subsequent_token_classifier is used to predict the subsequent
tokens within an entity. Compared to BrosForTokenClassification, this model is more robust to serialization errors
since it predicts next token from one token.`,at,Ke,Gt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,rt,z,Ie,it,eo,Qt='The <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosSpadeEEForTokenClassification">BrosSpadeEEForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',lt,ee,dt,oe,No,Se,Eo,$,Ze,ct,oo,qt=`Bros Model with a token classification head on top (a entity_linker layer on top of the hidden-states output) e.g.
for Entity-Linking. The entity_linker is used to predict intra-entity links (one entity to another entity).`,pt,to,Lt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,mt,N,We,ft,no,Pt='The <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosSpadeELForTokenClassification">BrosSpadeELForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',ht,te,ut,ne,Io,so,So;return M=new P({props:{title:"BROS",local:"bros",headingTag:"h1"}}),T=new P({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ge=new P({props:{title:"Usage tips and examples",local:"usage-tips-and-examples",headingTag:"h2"}}),be=new Re({props:{code:"ZGVmJTIwZXhwYW5kX2FuZF9ub3JtYWxpemVfYmJveChiYm94ZXMlMkMlMjBkb2Nfd2lkdGglMkMlMjBkb2NfaGVpZ2h0KSUzQSUwQSUyMCUyMCUyMCUyMCUyMyUyMGhlcmUlMkMlMjBiYm94ZXMlMjBhcmUlMjBudW1weSUyMGFycmF5JTBBJTBBJTIwJTIwJTIwJTIwJTIzJTIwTm9ybWFsaXplJTIwYmJveCUyMC0lM0UlMjAwJTIwfiUyMDElMEElMjAlMjAlMjAlMjBiYm94ZXMlNUIlM0ElMkMlMjAlNUIwJTJDJTIwMiU1RCU1RCUyMCUzRCUyMGJib3hlcyU1QiUzQSUyQyUyMCU1QjAlMkMlMjAyJTVEJTVEJTIwJTJGJTIwd2lkdGglMEElMjAlMjAlMjAlMjBiYm94ZXMlNUIlM0ElMkMlMjAlNUIxJTJDJTIwMyU1RCU1RCUyMCUzRCUyMGJib3hlcyU1QiUzQSUyQyUyMCU1QjElMkMlMjAzJTVEJTVEJTIwJTJGJTIwaGVpZ2h0",highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">expand_and_normalize_bbox</span>(<span class="hljs-params">bboxes, doc_width, doc_height</span>):
    <span class="hljs-comment"># here, bboxes are numpy array</span>

    <span class="hljs-comment"># Normalize bbox -&gt; 0 ~ 1</span>
    bboxes[:, [<span class="hljs-number">0</span>, <span class="hljs-number">2</span>]] = bboxes[:, [<span class="hljs-number">0</span>, <span class="hljs-number">2</span>]] / width
    bboxes[:, [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>]] = bboxes[:, [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>]] / height`,wrap:!1}}),Me=new Re({props:{code:"ZGVmJTIwbWFrZV9ib3hfZmlyc3RfdG9rZW5fbWFzayhiYm94ZXMlMkMlMjB3b3JkcyUyQyUyMHRva2VuaXplciUyQyUyMG1heF9zZXFfbGVuZ3RoJTNENTEyKSUzQSUwQSUwQSUyMCUyMCUyMCUyMGJveF9maXJzdF90b2tlbl9tYXNrJTIwJTNEJTIwbnAuemVyb3MobWF4X3NlcV9sZW5ndGglMkMlMjBkdHlwZSUzRG5wLmJvb2xfKSUwQSUwQSUyMCUyMCUyMCUyMCUyMyUyMGVuY29kZSh0b2tlbml6ZSklMjBlYWNoJTIwd29yZCUyMGZyb20lMjB3b3JkcyUyMChMaXN0JTVCc3RyJTVEKSUwQSUyMCUyMCUyMCUyMGlucHV0X2lkc19saXN0JTNBJTIwTGlzdCU1Qkxpc3QlNUJpbnQlNUQlNUQlMjAlM0QlMjAlNUJ0b2tlbml6ZXIuZW5jb2RlKGUlMkMlMjBhZGRfc3BlY2lhbF90b2tlbnMlM0RGYWxzZSklMjBmb3IlMjBlJTIwaW4lMjB3b3JkcyU1RCUwQSUwQSUyMCUyMCUyMCUyMCUyMyUyMGdldCUyMHRoZSUyMGxlbmd0aCUyMG9mJTIwZWFjaCUyMGJveCUwQSUyMCUyMCUyMCUyMHRva2Vuc19sZW5ndGhfbGlzdCUzQSUyMExpc3QlNUJpbnQlNUQlMjAlM0QlMjAlNUJsZW4obCklMjBmb3IlMjBsJTIwaW4lMjBpbnB1dF9pZHNfbGlzdCU1RCUwQSUwQSUyMCUyMCUyMCUyMGJveF9lbmRfdG9rZW5faW5kaWNlcyUyMCUzRCUyMG5wLmFycmF5KGxpc3QoaXRlcnRvb2xzLmFjY3VtdWxhdGUodG9rZW5zX2xlbmd0aF9saXN0KSkpJTBBJTIwJTIwJTIwJTIwYm94X3N0YXJ0X3Rva2VuX2luZGljZXMlMjAlM0QlMjBib3hfZW5kX3Rva2VuX2luZGljZXMlMjAtJTIwbnAuYXJyYXkodG9rZW5zX2xlbmd0aF9saXN0KSUwQSUwQSUyMCUyMCUyMCUyMCUyMyUyMGZpbHRlciUyMG91dCUyMHRoZSUyMGluZGljZXMlMjB0aGF0JTIwYXJlJTIwb3V0JTIwb2YlMjBtYXhfc2VxX2xlbmd0aCUwQSUyMCUyMCUyMCUyMGJveF9lbmRfdG9rZW5faW5kaWNlcyUyMCUzRCUyMGJveF9lbmRfdG9rZW5faW5kaWNlcyU1QmJveF9lbmRfdG9rZW5faW5kaWNlcyUyMCUzQyUyMG1heF9zZXFfbGVuZ3RoJTIwLSUyMDElNUQlMEElMjAlMjAlMjAlMjBpZiUyMGxlbihib3hfc3RhcnRfdG9rZW5faW5kaWNlcyklMjAlM0UlMjBsZW4oYm94X2VuZF90b2tlbl9pbmRpY2VzKSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGJveF9zdGFydF90b2tlbl9pbmRpY2VzJTIwJTNEJTIwYm94X3N0YXJ0X3Rva2VuX2luZGljZXMlNUIlM0ElMjBsZW4oYm94X2VuZF90b2tlbl9pbmRpY2VzKSU1RCUwQSUwQSUyMCUyMCUyMCUyMCUyMyUyMHNldCUyMGJveF9zdGFydF90b2tlbl9pbmRpY2VzJTIwdG8lMjBUcnVlJTBBJTIwJTIwJTIwJTIwYm94X2ZpcnN0X3Rva2VuX21hc2slNUJib3hfc3RhcnRfdG9rZW5faW5kaWNlcyU1RCUyMCUzRCUyMFRydWUlMEElMEElMjAlMjAlMjAlMjByZXR1cm4lMjBib3hfZmlyc3RfdG9rZW5fbWFzayUwQQ==",highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">make_box_first_token_mask</span>(<span class="hljs-params">bboxes, words, tokenizer, max_seq_length=<span class="hljs-number">512</span></span>):

    box_first_token_mask = np.zeros(max_seq_length, dtype=np.bool_)

    <span class="hljs-comment"># encode(tokenize) each word from words (List[str])</span>
    input_ids_list: <span class="hljs-type">List</span>[<span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>]] = [tokenizer.encode(e, add_special_tokens=<span class="hljs-literal">False</span>) <span class="hljs-keyword">for</span> e <span class="hljs-keyword">in</span> words]

    <span class="hljs-comment"># get the length of each box</span>
    tokens_length_list: <span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>] = [<span class="hljs-built_in">len</span>(l) <span class="hljs-keyword">for</span> l <span class="hljs-keyword">in</span> input_ids_list]

    box_end_token_indices = np.array(<span class="hljs-built_in">list</span>(itertools.accumulate(tokens_length_list)))
    box_start_token_indices = box_end_token_indices - np.array(tokens_length_list)

    <span class="hljs-comment"># filter out the indices that are out of max_seq_length</span>
    box_end_token_indices = box_end_token_indices[box_end_token_indices &lt; max_seq_length - <span class="hljs-number">1</span>]
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(box_start_token_indices) &gt; <span class="hljs-built_in">len</span>(box_end_token_indices):
        box_start_token_indices = box_start_token_indices[: <span class="hljs-built_in">len</span>(box_end_token_indices)]

    <span class="hljs-comment"># set box_start_token_indices to True</span>
    box_first_token_mask[box_start_token_indices] = <span class="hljs-literal">True</span>

    <span class="hljs-keyword">return</span> box_first_token_mask
`,wrap:!1}}),ke=new P({props:{title:"Resources",local:"resources",headingTag:"h2"}}),we=new P({props:{title:"BrosConfig",local:"transformers.BrosConfig",headingTag:"h2"}}),xe=new q({props:{name:"class transformers.BrosConfig",anchor:"transformers.BrosConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"dim_bbox",val:" = 8"},{name:"bbox_scale",val:" = 100.0"},{name:"n_relations",val:" = 1"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BrosConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Bros model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosModel">BrosModel</a> or <code>TFBrosModel</code>.`,name:"vocab_size"},{anchor:"transformers.BrosConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BrosConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BrosConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BrosConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BrosConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BrosConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BrosConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BrosConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BrosConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosModel">BrosModel</a> or <code>TFBrosModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.BrosConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BrosConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BrosConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The index of the padding token in the token vocabulary.`,name:"pad_token_id"},{anchor:"transformers.BrosConfig.dim_bbox",description:`<strong>dim_bbox</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
The dimension of the bounding box coordinates. (x0, y1, x1, y0, x1, y1, x0, y1)`,name:"dim_bbox"},{anchor:"transformers.BrosConfig.bbox_scale",description:`<strong>bbox_scale</strong> (<code>float</code>, <em>optional</em>, defaults to 100.0) &#x2014;
The scale factor of the bounding box coordinates.`,name:"bbox_scale"},{anchor:"transformers.BrosConfig.n_relations",description:`<strong>n_relations</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of relations for SpadeEE(entity extraction), SpadeEL(entity linking) head.`,name:"n_relations"},{anchor:"transformers.BrosConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the classifier head.`,name:"classifier_dropout_prob"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/configuration_bros.py#L29"}}),H=new ao({props:{anchor:"transformers.BrosConfig.example",$$slots:{default:[Yt]},$$scope:{ctx:w}}}),ve=new P({props:{title:"BrosProcessor",local:"transformers.BrosProcessor",headingTag:"h2"}}),Ce=new q({props:{name:"class transformers.BrosProcessor",anchor:"transformers.BrosProcessor",parameters:[{name:"tokenizer",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BrosProcessor.tokenizer",description:"<strong>tokenizer</strong> (<code>BertTokenizerFast</code>, <em>optional</em>) &#x2014;\nAn instance of [&#x2018;BertTokenizerFast`]. The tokenizer is a required input.",name:"tokenizer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/processing_bros.py#L26"}}),je=new q({props:{name:"__call__",anchor:"transformers.BrosProcessor.__call__",parameters:[{name:"text",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": Union = None"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/processing_bros.py#L47"}}),$e=new P({props:{title:"BrosModel",local:"transformers.BrosModel",headingTag:"h2"}}),Be=new q({props:{name:"class transformers.BrosModel",anchor:"transformers.BrosModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BrosModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosConfig">BrosConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/modeling_bros.py#L784"}}),Ue=new q({props:{name:"forward",anchor:"transformers.BrosModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BrosModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosProcessor">BrosProcessor</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BrosModel.forward.bbox",description:`<strong>bbox</strong> (&#x2018;torch.FloatTensor&#x2019; of shape &#x2018;(batch_size, num_boxes, 4)&#x2019;) &#x2014;
Bounding box coordinates for each token in the input sequence. Each bounding box is a list of four values
(x1, y1, x2, y2), where (x1, y1) is the top left corner, and (x2, y2) is the bottom right corner of the
bounding box.`,name:"bbox"},{anchor:"transformers.BrosModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BrosModel.forward.bbox_first_token_mask",description:`<strong>bbox_first_token_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the first token of each bounding box. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"bbox_first_token_mask"},{anchor:"transformers.BrosModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BrosModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BrosModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BrosModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BrosModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BrosModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BrosModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/modeling_bros.py#L815",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosConfig"
>BrosConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),D=new Zo({props:{$$slots:{default:[At]},$$scope:{ctx:w}}}),Y=new ao({props:{anchor:"transformers.BrosModel.forward.example",$$slots:{default:[Kt]},$$scope:{ctx:w}}}),Je=new P({props:{title:"BrosForTokenClassification",local:"transformers.BrosForTokenClassification",headingTag:"h2"}}),Fe=new q({props:{name:"class transformers.BrosForTokenClassification",anchor:"transformers.BrosForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BrosForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosConfig">BrosConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/modeling_bros.py#L959"}}),ze=new q({props:{name:"forward",anchor:"transformers.BrosForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"bbox_first_token_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BrosForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosProcessor">BrosProcessor</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BrosForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (&#x2018;torch.FloatTensor&#x2019; of shape &#x2018;(batch_size, num_boxes, 4)&#x2019;) &#x2014;
Bounding box coordinates for each token in the input sequence. Each bounding box is a list of four values
(x1, y1, x2, y2), where (x1, y1) is the top left corner, and (x2, y2) is the bottom right corner of the
bounding box.`,name:"bbox"},{anchor:"transformers.BrosForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BrosForTokenClassification.forward.bbox_first_token_mask",description:`<strong>bbox_first_token_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the first token of each bounding box. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"bbox_first_token_mask"},{anchor:"transformers.BrosForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BrosForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BrosForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BrosForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BrosForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BrosForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BrosForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/modeling_bros.py#L982",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosConfig"
>BrosConfig</a>) and inputs.</p>
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
`}}),A=new Zo({props:{$$slots:{default:[en]},$$scope:{ctx:w}}}),K=new ao({props:{anchor:"transformers.BrosForTokenClassification.forward.example",$$slots:{default:[on]},$$scope:{ctx:w}}}),Ne=new P({props:{title:"BrosSpadeEEForTokenClassification",local:"transformers.BrosSpadeEEForTokenClassification",headingTag:"h2"}}),Ee=new q({props:{name:"class transformers.BrosSpadeEEForTokenClassification",anchor:"transformers.BrosSpadeEEForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BrosSpadeEEForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosConfig">BrosConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/modeling_bros.py#L1063"}}),Ie=new q({props:{name:"forward",anchor:"transformers.BrosSpadeEEForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"bbox_first_token_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"initial_token_labels",val:": Optional = None"},{name:"subsequent_token_labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosProcessor">BrosProcessor</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (&#x2018;torch.FloatTensor&#x2019; of shape &#x2018;(batch_size, num_boxes, 4)&#x2019;) &#x2014;
Bounding box coordinates for each token in the input sequence. Each bounding box is a list of four values
(x1, y1, x2, y2), where (x1, y1) is the top left corner, and (x2, y2) is the bottom right corner of the
bounding box.`,name:"bbox"},{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.bbox_first_token_mask",description:`<strong>bbox_first_token_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the first token of each bounding box. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"bbox_first_token_mask"},{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/modeling_bros.py#L1101",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.bros.modeling_bros.BrosSpadeOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosConfig"
>BrosConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  — Classification loss.</p>
</li>
<li>
<p><strong>initial_token_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) — Classification scores for entity initial tokens (before SoftMax).</p>
</li>
<li>
<p><strong>subsequent_token_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length+1)</code>) — Classification scores for entity sequence tokens (before SoftMax).</p>
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


<p><code>transformers.models.bros.modeling_bros.BrosSpadeOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ee=new Zo({props:{$$slots:{default:[tn]},$$scope:{ctx:w}}}),oe=new ao({props:{anchor:"transformers.BrosSpadeEEForTokenClassification.forward.example",$$slots:{default:[nn]},$$scope:{ctx:w}}}),Se=new P({props:{title:"BrosSpadeELForTokenClassification",local:"transformers.BrosSpadeELForTokenClassification",headingTag:"h2"}}),Ze=new q({props:{name:"class transformers.BrosSpadeELForTokenClassification",anchor:"transformers.BrosSpadeELForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BrosSpadeELForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosConfig">BrosConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/modeling_bros.py#L1209"}}),We=new q({props:{name:"forward",anchor:"transformers.BrosSpadeELForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"bbox_first_token_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BrosSpadeELForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosProcessor">BrosProcessor</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BrosSpadeELForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (&#x2018;torch.FloatTensor&#x2019; of shape &#x2018;(batch_size, num_boxes, 4)&#x2019;) &#x2014;
Bounding box coordinates for each token in the input sequence. Each bounding box is a list of four values
(x1, y1, x2, y2), where (x1, y1) is the top left corner, and (x2, y2) is the bottom right corner of the
bounding box.`,name:"bbox"},{anchor:"transformers.BrosSpadeELForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BrosSpadeELForTokenClassification.forward.bbox_first_token_mask",description:`<strong>bbox_first_token_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the first token of each bounding box. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"bbox_first_token_mask"},{anchor:"transformers.BrosSpadeELForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BrosSpadeELForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BrosSpadeELForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BrosSpadeELForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BrosSpadeELForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BrosSpadeELForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BrosSpadeELForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bros/modeling_bros.py#L1233",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/bros#transformers.BrosConfig"
>BrosConfig</a>) and inputs.</p>
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
`}}),te=new Zo({props:{$$slots:{default:[sn]},$$scope:{ctx:w}}}),ne=new ao({props:{anchor:"transformers.BrosSpadeELForTokenClassification.forward.example",$$slots:{default:[an]},$$scope:{ctx:w}}}),{c(){n=c("meta"),k=a(),l=c("p"),m=a(),h(M.$$.fragment),s=a(),h(T.$$.fragment),ro=a(),re=c("p"),re.innerHTML=gt,io=a(),ie=c("p"),ie.innerHTML=_t,lo=a(),le=c("p"),le.textContent=bt,co=a(),de=c("p"),de.innerHTML=yt,po=a(),ce=c("p"),ce.innerHTML=Mt,mo=a(),pe=c("p"),pe.innerHTML=kt,fo=a(),me=c("p"),me.textContent=Tt,ho=a(),fe=c("p"),fe.textContent=wt,uo=a(),he=c("p"),he.innerHTML=xt,go=a(),ue=c("p"),ue.innerHTML=vt,_o=a(),h(ge.$$.fragment),bo=a(),_e=c("ul"),_e.innerHTML=Ct,yo=a(),h(be.$$.fragment),Mo=a(),ye=c("ul"),ye.innerHTML=jt,ko=a(),h(Me.$$.fragment),To=a(),h(ke.$$.fragment),wo=a(),Te=c("ul"),Te.innerHTML=$t,xo=a(),h(we.$$.fragment),vo=a(),x=c("div"),h(xe.$$.fragment),Wo=a(),Ge=c("p"),Ge.innerHTML=Bt,Ro=a(),Qe=c("p"),Qe.innerHTML=Ut,Go=a(),h(H.$$.fragment),Co=a(),h(ve.$$.fragment),jo=a(),v=c("div"),h(Ce.$$.fragment),Qo=a(),qe=c("p"),qe.textContent=Jt,qo=a(),Le=c("p"),Le.innerHTML=Ft,Lo=a(),L=c("div"),h(je.$$.fragment),Po=a(),Pe=c("p"),Pe.innerHTML=zt,Vo=a(),Ve=c("p"),Ve.textContent=Nt,$o=a(),h($e.$$.fragment),Bo=a(),E=c("div"),h(Be.$$.fragment),Oo=a(),Oe=c("p"),Oe.innerHTML=Et,Xo=a(),J=c("div"),h(Ue.$$.fragment),Ho=a(),Xe=c("p"),Xe.innerHTML=It,Do=a(),h(D.$$.fragment),Yo=a(),h(Y.$$.fragment),Uo=a(),h(Je.$$.fragment),Jo=a(),C=c("div"),h(Fe.$$.fragment),Ao=a(),He=c("p"),He.textContent=St,Ko=a(),De=c("p"),De.innerHTML=Zt,et=a(),F=c("div"),h(ze.$$.fragment),ot=a(),Ye=c("p"),Ye.innerHTML=Wt,tt=a(),h(A.$$.fragment),nt=a(),h(K.$$.fragment),Fo=a(),h(Ne.$$.fragment),zo=a(),j=c("div"),h(Ee.$$.fragment),st=a(),Ae=c("p"),Ae.textContent=Rt,at=a(),Ke=c("p"),Ke.innerHTML=Gt,rt=a(),z=c("div"),h(Ie.$$.fragment),it=a(),eo=c("p"),eo.innerHTML=Qt,lt=a(),h(ee.$$.fragment),dt=a(),h(oe.$$.fragment),No=a(),h(Se.$$.fragment),Eo=a(),$=c("div"),h(Ze.$$.fragment),ct=a(),oo=c("p"),oo.textContent=qt,pt=a(),to=c("p"),to.innerHTML=Lt,mt=a(),N=c("div"),h(We.$$.fragment),ft=a(),no=c("p"),no.innerHTML=Pt,ht=a(),h(te.$$.fragment),ut=a(),h(ne.$$.fragment),Io=a(),so=c("p"),this.h()},l(e){const o=Dt("svelte-u9bgzb",document.head);n=p(o,"META",{name:!0,content:!0}),o.forEach(t),k=r(e),l=p(e,"P",{}),B(l).forEach(t),m=r(e),u(M.$$.fragment,e),s=r(e),u(T.$$.fragment,e),ro=r(e),re=p(e,"P",{"data-svelte-h":!0}),f(re)!=="svelte-yj72j0"&&(re.innerHTML=gt),io=r(e),ie=p(e,"P",{"data-svelte-h":!0}),f(ie)!=="svelte-2gijjr"&&(ie.innerHTML=_t),lo=r(e),le=p(e,"P",{"data-svelte-h":!0}),f(le)!=="svelte-n6fvm1"&&(le.textContent=bt),co=r(e),de=p(e,"P",{"data-svelte-h":!0}),f(de)!=="svelte-1oy2bpa"&&(de.innerHTML=yt),po=r(e),ce=p(e,"P",{"data-svelte-h":!0}),f(ce)!=="svelte-udxmd"&&(ce.innerHTML=Mt),mo=r(e),pe=p(e,"P",{"data-svelte-h":!0}),f(pe)!=="svelte-u9g76l"&&(pe.innerHTML=kt),fo=r(e),me=p(e,"P",{"data-svelte-h":!0}),f(me)!=="svelte-bofpsy"&&(me.textContent=Tt),ho=r(e),fe=p(e,"P",{"data-svelte-h":!0}),f(fe)!=="svelte-1cv3nri"&&(fe.textContent=wt),uo=r(e),he=p(e,"P",{"data-svelte-h":!0}),f(he)!=="svelte-l0kbxj"&&(he.innerHTML=xt),go=r(e),ue=p(e,"P",{"data-svelte-h":!0}),f(ue)!=="svelte-1ovrbrc"&&(ue.innerHTML=vt),_o=r(e),u(ge.$$.fragment,e),bo=r(e),_e=p(e,"UL",{"data-svelte-h":!0}),f(_e)!=="svelte-1oeraho"&&(_e.innerHTML=Ct),yo=r(e),u(be.$$.fragment,e),Mo=r(e),ye=p(e,"UL",{"data-svelte-h":!0}),f(ye)!=="svelte-1cb99kf"&&(ye.innerHTML=jt),ko=r(e),u(Me.$$.fragment,e),To=r(e),u(ke.$$.fragment,e),wo=r(e),Te=p(e,"UL",{"data-svelte-h":!0}),f(Te)!=="svelte-x1sueg"&&(Te.innerHTML=$t),xo=r(e),u(we.$$.fragment,e),vo=r(e),x=p(e,"DIV",{class:!0});var I=B(x);u(xe.$$.fragment,I),Wo=r(I),Ge=p(I,"P",{"data-svelte-h":!0}),f(Ge)!=="svelte-1whprt1"&&(Ge.innerHTML=Bt),Ro=r(I),Qe=p(I,"P",{"data-svelte-h":!0}),f(Qe)!=="svelte-1s6wgpv"&&(Qe.innerHTML=Ut),Go=r(I),u(H.$$.fragment,I),I.forEach(t),Co=r(e),u(ve.$$.fragment,e),jo=r(e),v=p(e,"DIV",{class:!0});var S=B(v);u(Ce.$$.fragment,S),Qo=r(S),qe=p(S,"P",{"data-svelte-h":!0}),f(qe)!=="svelte-14kb9li"&&(qe.textContent=Jt),qo=r(S),Le=p(S,"P",{"data-svelte-h":!0}),f(Le)!=="svelte-337pz6"&&(Le.innerHTML=Ft),Lo=r(S),L=p(S,"DIV",{class:!0});var V=B(L);u(je.$$.fragment,V),Po=r(V),Pe=p(V,"P",{"data-svelte-h":!0}),f(Pe)!=="svelte-1czb544"&&(Pe.innerHTML=zt),Vo=r(V),Ve=p(V,"P",{"data-svelte-h":!0}),f(Ve)!=="svelte-ws0hzs"&&(Ve.textContent=Nt),V.forEach(t),S.forEach(t),$o=r(e),u($e.$$.fragment,e),Bo=r(e),E=p(e,"DIV",{class:!0});var O=B(E);u(Be.$$.fragment,O),Oo=r(O),Oe=p(O,"P",{"data-svelte-h":!0}),f(Oe)!=="svelte-5kas2u"&&(Oe.innerHTML=Et),Xo=r(O),J=p(O,"DIV",{class:!0});var Z=B(J);u(Ue.$$.fragment,Z),Ho=r(Z),Xe=p(Z,"P",{"data-svelte-h":!0}),f(Xe)!=="svelte-4ln157"&&(Xe.innerHTML=It),Do=r(Z),u(D.$$.fragment,Z),Yo=r(Z),u(Y.$$.fragment,Z),Z.forEach(t),O.forEach(t),Uo=r(e),u(Je.$$.fragment,e),Jo=r(e),C=p(e,"DIV",{class:!0});var W=B(C);u(Fe.$$.fragment,W),Ao=r(W),He=p(W,"P",{"data-svelte-h":!0}),f(He)!=="svelte-mf69l7"&&(He.textContent=St),Ko=r(W),De=p(W,"P",{"data-svelte-h":!0}),f(De)!=="svelte-hswkmf"&&(De.innerHTML=Zt),et=r(W),F=p(W,"DIV",{class:!0});var R=B(F);u(ze.$$.fragment,R),ot=r(R),Ye=p(R,"P",{"data-svelte-h":!0}),f(Ye)!=="svelte-ziin9b"&&(Ye.innerHTML=Wt),tt=r(R),u(A.$$.fragment,R),nt=r(R),u(K.$$.fragment,R),R.forEach(t),W.forEach(t),Fo=r(e),u(Ne.$$.fragment,e),zo=r(e),j=p(e,"DIV",{class:!0});var G=B(j);u(Ee.$$.fragment,G),st=r(G),Ae=p(G,"P",{"data-svelte-h":!0}),f(Ae)!=="svelte-5z2g1e"&&(Ae.textContent=Rt),at=r(G),Ke=p(G,"P",{"data-svelte-h":!0}),f(Ke)!=="svelte-hswkmf"&&(Ke.innerHTML=Gt),rt=r(G),z=p(G,"DIV",{class:!0});var Q=B(z);u(Ie.$$.fragment,Q),it=r(Q),eo=p(Q,"P",{"data-svelte-h":!0}),f(eo)!=="svelte-1t1hxhv"&&(eo.innerHTML=Qt),lt=r(Q),u(ee.$$.fragment,Q),dt=r(Q),u(oe.$$.fragment,Q),Q.forEach(t),G.forEach(t),No=r(e),u(Se.$$.fragment,e),Eo=r(e),$=p(e,"DIV",{class:!0});var se=B($);u(Ze.$$.fragment,se),ct=r(se),oo=p(se,"P",{"data-svelte-h":!0}),f(oo)!=="svelte-oir21p"&&(oo.textContent=qt),pt=r(se),to=p(se,"P",{"data-svelte-h":!0}),f(to)!=="svelte-hswkmf"&&(to.innerHTML=Lt),mt=r(se),N=p(se,"DIV",{class:!0});var ae=B(N);u(We.$$.fragment,ae),ft=r(ae),no=p(ae,"P",{"data-svelte-h":!0}),f(no)!=="svelte-1hdn8zj"&&(no.innerHTML=Pt),ht=r(ae),u(te.$$.fragment,ae),ut=r(ae),u(ne.$$.fragment,ae),ae.forEach(t),se.forEach(t),Io=r(e),so=p(e,"P",{}),B(so).forEach(t),this.h()},h(){U(n,"name","hf:doc:metadata"),U(n,"content",ln),U(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){d(document.head,n),i(e,k,o),i(e,l,o),i(e,m,o),g(M,e,o),i(e,s,o),g(T,e,o),i(e,ro,o),i(e,re,o),i(e,io,o),i(e,ie,o),i(e,lo,o),i(e,le,o),i(e,co,o),i(e,de,o),i(e,po,o),i(e,ce,o),i(e,mo,o),i(e,pe,o),i(e,fo,o),i(e,me,o),i(e,ho,o),i(e,fe,o),i(e,uo,o),i(e,he,o),i(e,go,o),i(e,ue,o),i(e,_o,o),g(ge,e,o),i(e,bo,o),i(e,_e,o),i(e,yo,o),g(be,e,o),i(e,Mo,o),i(e,ye,o),i(e,ko,o),g(Me,e,o),i(e,To,o),g(ke,e,o),i(e,wo,o),i(e,Te,o),i(e,xo,o),g(we,e,o),i(e,vo,o),i(e,x,o),g(xe,x,null),d(x,Wo),d(x,Ge),d(x,Ro),d(x,Qe),d(x,Go),g(H,x,null),i(e,Co,o),g(ve,e,o),i(e,jo,o),i(e,v,o),g(Ce,v,null),d(v,Qo),d(v,qe),d(v,qo),d(v,Le),d(v,Lo),d(v,L),g(je,L,null),d(L,Po),d(L,Pe),d(L,Vo),d(L,Ve),i(e,$o,o),g($e,e,o),i(e,Bo,o),i(e,E,o),g(Be,E,null),d(E,Oo),d(E,Oe),d(E,Xo),d(E,J),g(Ue,J,null),d(J,Ho),d(J,Xe),d(J,Do),g(D,J,null),d(J,Yo),g(Y,J,null),i(e,Uo,o),g(Je,e,o),i(e,Jo,o),i(e,C,o),g(Fe,C,null),d(C,Ao),d(C,He),d(C,Ko),d(C,De),d(C,et),d(C,F),g(ze,F,null),d(F,ot),d(F,Ye),d(F,tt),g(A,F,null),d(F,nt),g(K,F,null),i(e,Fo,o),g(Ne,e,o),i(e,zo,o),i(e,j,o),g(Ee,j,null),d(j,st),d(j,Ae),d(j,at),d(j,Ke),d(j,rt),d(j,z),g(Ie,z,null),d(z,it),d(z,eo),d(z,lt),g(ee,z,null),d(z,dt),g(oe,z,null),i(e,No,o),g(Se,e,o),i(e,Eo,o),i(e,$,o),g(Ze,$,null),d($,ct),d($,oo),d($,pt),d($,to),d($,mt),d($,N),g(We,N,null),d(N,ft),d(N,no),d(N,ht),g(te,N,null),d(N,ut),g(ne,N,null),i(e,Io,o),i(e,so,o),So=!0},p(e,[o]){const I={};o&2&&(I.$$scope={dirty:o,ctx:e}),H.$set(I);const S={};o&2&&(S.$$scope={dirty:o,ctx:e}),D.$set(S);const V={};o&2&&(V.$$scope={dirty:o,ctx:e}),Y.$set(V);const O={};o&2&&(O.$$scope={dirty:o,ctx:e}),A.$set(O);const Z={};o&2&&(Z.$$scope={dirty:o,ctx:e}),K.$set(Z);const W={};o&2&&(W.$$scope={dirty:o,ctx:e}),ee.$set(W);const R={};o&2&&(R.$$scope={dirty:o,ctx:e}),oe.$set(R);const G={};o&2&&(G.$$scope={dirty:o,ctx:e}),te.$set(G);const Q={};o&2&&(Q.$$scope={dirty:o,ctx:e}),ne.$set(Q)},i(e){So||(_(M.$$.fragment,e),_(T.$$.fragment,e),_(ge.$$.fragment,e),_(be.$$.fragment,e),_(Me.$$.fragment,e),_(ke.$$.fragment,e),_(we.$$.fragment,e),_(xe.$$.fragment,e),_(H.$$.fragment,e),_(ve.$$.fragment,e),_(Ce.$$.fragment,e),_(je.$$.fragment,e),_($e.$$.fragment,e),_(Be.$$.fragment,e),_(Ue.$$.fragment,e),_(D.$$.fragment,e),_(Y.$$.fragment,e),_(Je.$$.fragment,e),_(Fe.$$.fragment,e),_(ze.$$.fragment,e),_(A.$$.fragment,e),_(K.$$.fragment,e),_(Ne.$$.fragment,e),_(Ee.$$.fragment,e),_(Ie.$$.fragment,e),_(ee.$$.fragment,e),_(oe.$$.fragment,e),_(Se.$$.fragment,e),_(Ze.$$.fragment,e),_(We.$$.fragment,e),_(te.$$.fragment,e),_(ne.$$.fragment,e),So=!0)},o(e){b(M.$$.fragment,e),b(T.$$.fragment,e),b(ge.$$.fragment,e),b(be.$$.fragment,e),b(Me.$$.fragment,e),b(ke.$$.fragment,e),b(we.$$.fragment,e),b(xe.$$.fragment,e),b(H.$$.fragment,e),b(ve.$$.fragment,e),b(Ce.$$.fragment,e),b(je.$$.fragment,e),b($e.$$.fragment,e),b(Be.$$.fragment,e),b(Ue.$$.fragment,e),b(D.$$.fragment,e),b(Y.$$.fragment,e),b(Je.$$.fragment,e),b(Fe.$$.fragment,e),b(ze.$$.fragment,e),b(A.$$.fragment,e),b(K.$$.fragment,e),b(Ne.$$.fragment,e),b(Ee.$$.fragment,e),b(Ie.$$.fragment,e),b(ee.$$.fragment,e),b(oe.$$.fragment,e),b(Se.$$.fragment,e),b(Ze.$$.fragment,e),b(We.$$.fragment,e),b(te.$$.fragment,e),b(ne.$$.fragment,e),So=!1},d(e){e&&(t(k),t(l),t(m),t(s),t(ro),t(re),t(io),t(ie),t(lo),t(le),t(co),t(de),t(po),t(ce),t(mo),t(pe),t(fo),t(me),t(ho),t(fe),t(uo),t(he),t(go),t(ue),t(_o),t(bo),t(_e),t(yo),t(Mo),t(ye),t(ko),t(To),t(wo),t(Te),t(xo),t(vo),t(x),t(Co),t(jo),t(v),t($o),t(Bo),t(E),t(Uo),t(Jo),t(C),t(Fo),t(zo),t(j),t(No),t(Eo),t($),t(Io),t(so)),t(n),y(M,e),y(T,e),y(ge,e),y(be,e),y(Me,e),y(ke,e),y(we,e),y(xe),y(H),y(ve,e),y(Ce),y(je),y($e,e),y(Be),y(Ue),y(D),y(Y),y(Je,e),y(Fe),y(ze),y(A),y(K),y(Ne,e),y(Ee),y(Ie),y(ee),y(oe),y(Se,e),y(Ze),y(We),y(te),y(ne)}}}const ln='{"title":"BROS","local":"bros","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips and examples","local":"usage-tips-and-examples","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"BrosConfig","local":"transformers.BrosConfig","sections":[],"depth":2},{"title":"BrosProcessor","local":"transformers.BrosProcessor","sections":[],"depth":2},{"title":"BrosModel","local":"transformers.BrosModel","sections":[],"depth":2},{"title":"BrosForTokenClassification","local":"transformers.BrosForTokenClassification","sections":[],"depth":2},{"title":"BrosSpadeEEForTokenClassification","local":"transformers.BrosSpadeEEForTokenClassification","sections":[],"depth":2},{"title":"BrosSpadeELForTokenClassification","local":"transformers.BrosSpadeELForTokenClassification","sections":[],"depth":2}],"depth":1}';function dn(w){return Ot(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _n extends Xt{constructor(n){super(),Ht(this,n,dn,rn,Vt,{})}}export{_n as component};
