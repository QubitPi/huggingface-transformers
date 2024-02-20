import{s as Zn,o as Gn,n as D}from"../chunks/scheduler.9bc65507.js";import{S as Wn,i as Un,g as i,s as n,r as u,A as Bn,h as l,f as a,c as s,j as N,u as f,x as m,k as L,y as t,a as p,v as g,d as _,t as M,w as b}from"../chunks/index.707bf1b6.js";import{T as Xt}from"../chunks/Tip.c2ecdbf4.js";import{D as $}from"../chunks/Docstring.17db21ae.js";import{C as Pt}from"../chunks/CodeBlock.54a9f38d.js";import{E as xt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as S}from"../chunks/Heading.342b1fa6.js";function Hn(v){let o,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=i("p"),o.innerHTML=k},l(c){o=l(c,"P",{"data-svelte-h":!0}),m(o)!=="svelte-fincs2"&&(o.innerHTML=k)},m(c,h){p(c,o,h)},p:D,d(c){c&&a(o)}}}function Rn(v){let o,k="Example:",c,h,T;return h=new Pt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Qcm9waGV0TmV0TW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJwYXRyaWNrdm9ucGxhdGVuJTJGeHByb3BoZXRuZXQtbGFyZ2UtdW5jYXNlZC1zdGFuZGFsb25lJTIyKSUwQW1vZGVsJTIwJTNEJTIwWExNUHJvcGhldE5ldE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJwYXRyaWNrdm9ucGxhdGVuJTJGeHByb3BoZXRuZXQtbGFyZ2UtdW5jYXNlZC1zdGFuZGFsb25lJTIyKSUwQSUwQWlucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJTdHVkaWVzJTIwaGF2ZSUyMGJlZW4lMjBzaG93biUyMHRoYXQlMjBvd25pbmclMjBhJTIwZG9nJTIwaXMlMjBnb29kJTIwZm9yJTIweW91JTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSkuaW5wdXRfaWRzJTIwJTIwJTIzJTIwQmF0Y2glMjBzaXplJTIwMSUwQWRlY29kZXJfaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlN0dWRpZXMlMjBzaG93JTIwdGhhdCUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUyMDElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEaW5wdXRfaWRzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RkZWNvZGVyX2lucHV0X2lkcyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRlJTIwJTIwJTIzJTIwbWFpbiUyMHN0cmVhbSUyMGhpZGRlbiUyMHN0YXRlcyUwQWxhc3RfaGlkZGVuX3N0YXRlc19uZ3JhbSUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGVfbmdyYW0lMjAlMjAlMjMlMjBwcmVkaWN0JTIwaGlkZGVuJTIwc3RhdGVz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMProphetNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state  <span class="hljs-comment"># main stream hidden states</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states_ngram = outputs.last_hidden_state_ngram  <span class="hljs-comment"># predict hidden states</span>`,wrap:!1}}),{c(){o=i("p"),o.textContent=k,c=n(),u(h.$$.fragment)},l(r){o=l(r,"P",{"data-svelte-h":!0}),m(o)!=="svelte-11lpom8"&&(o.textContent=k),c=s(r),f(h.$$.fragment,r)},m(r,y){p(r,o,y),p(r,c,y),g(h,r,y),T=!0},p:D,i(r){T||(_(h.$$.fragment,r),T=!0)},o(r){M(h.$$.fragment,r),T=!1},d(r){r&&(a(o),a(c)),b(h,r)}}}function Vn(v){let o,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=i("p"),o.innerHTML=k},l(c){o=l(c,"P",{"data-svelte-h":!0}),m(o)!=="svelte-fincs2"&&(o.innerHTML=k)},m(c,h){p(c,o,h)},p:D,d(c){c&&a(o)}}}function En(v){let o,k="Example:",c,h,T;return h=new Pt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Qcm9waGV0TmV0RW5jb2RlciUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIycGF0cmlja3ZvbnBsYXRlbiUyRnhwcm9waGV0bmV0LWxhcmdlLXVuY2FzZWQtc3RhbmRhbG9uZSUyMiklMEFtb2RlbCUyMCUzRCUyMFhMTVByb3BoZXROZXRFbmNvZGVyLmZyb21fcHJldHJhaW5lZCglMjJwYXRyaWNrdm9ucGxhdGVuJTJGcHJvcGhldG5ldC1sYXJnZS11bmNhc2VkLXN0YW5kYWxvbmUlMjIpJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMProphetNetEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetEncoder.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/prophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){o=i("p"),o.textContent=k,c=n(),u(h.$$.fragment)},l(r){o=l(r,"P",{"data-svelte-h":!0}),m(o)!=="svelte-11lpom8"&&(o.textContent=k),c=s(r),f(h.$$.fragment,r)},m(r,y){p(r,o,y),p(r,c,y),g(h,r,y),T=!0},p:D,i(r){T||(_(h.$$.fragment,r),T=!0)},o(r){M(h.$$.fragment,r),T=!1},d(r){r&&(a(o),a(c)),b(h,r)}}}function On(v){let o,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=i("p"),o.innerHTML=k},l(c){o=l(c,"P",{"data-svelte-h":!0}),m(o)!=="svelte-fincs2"&&(o.innerHTML=k)},m(c,h){p(c,o,h)},p:D,d(c){c&&a(o)}}}function Sn(v){let o,k="Example:",c,h,T;return h=new Pt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Qcm9waGV0TmV0RGVjb2RlciUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIycGF0cmlja3ZvbnBsYXRlbiUyRnhwcm9waGV0bmV0LWxhcmdlLXVuY2FzZWQtc3RhbmRhbG9uZSUyMiklMEFtb2RlbCUyMCUzRCUyMFhMTVByb3BoZXROZXREZWNvZGVyLmZyb21fcHJldHJhaW5lZCglMjJwYXRyaWNrdm9ucGxhdGVuJTJGeHByb3BoZXRuZXQtbGFyZ2UtdW5jYXNlZC1zdGFuZGFsb25lJTIyJTJDJTIwYWRkX2Nyb3NzX2F0dGVudGlvbiUzREZhbHNlKSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMProphetNetDecoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetDecoder.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){o=i("p"),o.textContent=k,c=n(),u(h.$$.fragment)},l(r){o=l(r,"P",{"data-svelte-h":!0}),m(o)!=="svelte-11lpom8"&&(o.textContent=k),c=s(r),f(h.$$.fragment,r)},m(r,y){p(r,o,y),p(r,c,y),g(h,r,y),T=!0},p:D,i(r){T||(_(h.$$.fragment,r),T=!0)},o(r){M(h.$$.fragment,r),T=!1},d(r){r&&(a(o),a(c)),b(h,r)}}}function Dn(v){let o,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=i("p"),o.innerHTML=k},l(c){o=l(c,"P",{"data-svelte-h":!0}),m(o)!=="svelte-fincs2"&&(o.innerHTML=k)},m(c,h){p(c,o,h)},p:D,d(c){c&&a(o)}}}function Qn(v){let o,k="Example:",c,h,T;return h=new Pt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Qcm9waGV0TmV0Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIycGF0cmlja3ZvbnBsYXRlbiUyRnhwcm9waGV0bmV0LWxhcmdlLXVuY2FzZWQtc3RhbmRhbG9uZSUyMiklMEFtb2RlbCUyMCUzRCUyMFhMTVByb3BoZXROZXRGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnBhdHJpY2t2b25wbGF0ZW4lMkZ4cHJvcGhldG5ldC1sYXJnZS11bmNhc2VkLXN0YW5kYWxvbmUlMjIpJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMlN0dWRpZXMlMjBoYXZlJTIwYmVlbiUyMHNob3duJTIwdGhhdCUyMG93bmluZyUyMGElMjBkb2clMjBpcyUyMGdvb2QlMjBmb3IlMjB5b3UlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKS5pbnB1dF9pZHMlMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBZGVjb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyU3R1ZGllcyUyMHNob3clMjB0aGF0JTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTIwJTIwJTIzJTIwQmF0Y2glMjBzaXplJTIwMSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlM0RpbnB1dF9pZHMlMkMlMjBkZWNvZGVyX2lucHV0X2lkcyUzRGRlY29kZXJfaW5wdXRfaWRzKSUwQSUwQWxvZ2l0c19uZXh0X3Rva2VuJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHMlMjAlMjAlMjMlMjBsb2dpdHMlMjB0byUyMHByZWRpY3QlMjBuZXh0JTIwdG9rZW4lMjBhcyUyMHVzdWFsJTBBbG9naXRzX25ncmFtX25leHRfdG9rZW5zJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHNfbmdyYW0lMjAlMjAlMjMlMjBsb2dpdHMlMjB0byUyMHByZWRpY3QlMjAybmQlMkMlMjAzcmQlMkMlMjAuLi4lMjBuZXh0JTIwdG9rZW5z",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMProphetNetForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits_next_token = outputs.logits  <span class="hljs-comment"># logits to predict next token as usual</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_ngram_next_tokens = outputs.logits_ngram  <span class="hljs-comment"># logits to predict 2nd, 3rd, ... next tokens</span>`,wrap:!1}}),{c(){o=i("p"),o.textContent=k,c=n(),u(h.$$.fragment)},l(r){o=l(r,"P",{"data-svelte-h":!0}),m(o)!=="svelte-11lpom8"&&(o.textContent=k),c=s(r),f(h.$$.fragment,r)},m(r,y){p(r,o,y),p(r,c,y),g(h,r,y),T=!0},p:D,i(r){T||(_(h.$$.fragment,r),T=!0)},o(r){M(h.$$.fragment,r),T=!1},d(r){r&&(a(o),a(c)),b(h,r)}}}function An(v){let o,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=i("p"),o.innerHTML=k},l(c){o=l(c,"P",{"data-svelte-h":!0}),m(o)!=="svelte-fincs2"&&(o.innerHTML=k)},m(c,h){p(c,o,h)},p:D,d(c){c&&a(o)}}}function Yn(v){let o,k="Example:",c,h,T;return h=new Pt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Qcm9waGV0TmV0Rm9yQ2F1c2FsTE0lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnBhdHJpY2t2b25wbGF0ZW4lMkZ4cHJvcGhldG5ldC1sYXJnZS11bmNhc2VkLXN0YW5kYWxvbmUlMjIpJTBBbW9kZWwlMjAlM0QlMjBYTE1Qcm9waGV0TmV0Rm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMnBhdHJpY2t2b25wbGF0ZW4lMkZ4cHJvcGhldG5ldC1sYXJnZS11bmNhc2VkLXN0YW5kYWxvbmUlMjIpJTBBYXNzZXJ0JTIwbW9kZWwuY29uZmlnLmlzX2RlY29kZXIlMkMlMjBmJTIyJTdCbW9kZWwuX19jbGFzc19fJTdEJTIwaGFzJTIwdG8lMjBiZSUyMGNvbmZpZ3VyZWQlMjBhcyUyMGElMjBkZWNvZGVyLiUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHMlMEElMEElMjMlMjBNb2RlbCUyMGNhbiUyMGFsc28lMjBiZSUyMHVzZWQlMjB3aXRoJTIwRW5jb2RlckRlY29kZXIlMjBmcmFtZXdvcmslMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQmVydFRva2VuaXplciUyQyUyMEVuY29kZXJEZWNvZGVyTW9kZWwlMkMlMjBBdXRvVG9rZW5pemVyJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXJfZW5jJTIwJTNEJTIwQmVydFRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWxhcmdlLXVuY2FzZWQlMjIpJTBBdG9rZW5pemVyX2RlYyUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnBhdHJpY2t2b25wbGF0ZW4lMkZ4cHJvcGhldG5ldC1sYXJnZS11bmNhc2VkLXN0YW5kYWxvbmUlMjIpJTBBbW9kZWwlMjAlM0QlMjBFbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fZW5jb2Rlcl9kZWNvZGVyX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWxhcmdlLXVuY2FzZWQlMjIlMkMlMjAlMjJwYXRyaWNrdm9ucGxhdGVuJTJGeHByb3BoZXRuZXQtbGFyZ2UtdW5jYXNlZC1zdGFuZGFsb25lJTIyJTBBKSUwQSUwQUFSVElDTEUlMjAlM0QlMjAoJTBBJTIwJTIwJTIwJTIwJTIydGhlJTIwdXMlMjBzdGF0ZSUyMGRlcGFydG1lbnQlMjBzYWlkJTIwd2VkbmVzZGF5JTIwaXQlMjBoYWQlMjByZWNlaXZlZCUyMG5vJTIwJTIyJTBBJTIwJTIwJTIwJTIwJTIyZm9ybWFsJTIwd29yZCUyMGZyb20lMjBib2xpdmlhJTIwdGhhdCUyMGl0JTIwd2FzJTIwZXhwZWxsaW5nJTIwdGhlJTIwdXMlMjBhbWJhc3NhZG9yJTIwdGhlcmUlMjAlMjIlMEElMjAlMjAlMjAlMjAlMjJidXQlMjBzYWlkJTIwdGhlJTIwY2hhcmdlcyUyMG1hZGUlMjBhZ2FpbnN0JTIwaGltJTIwYXJlJTIwJTYwJTYwJTIwYmFzZWxlc3MlMjAuJTIyJTBBKSUwQWlucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplcl9lbmMoQVJUSUNMRSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQWxhYmVscyUyMCUzRCUyMHRva2VuaXplcl9kZWMoJTBBJTIwJTIwJTIwJTIwJTIydXMlMjByZWplY3RzJTIwY2hhcmdlcyUyMGFnYWluc3QlMjBpdHMlMjBhbWJhc3NhZG9yJTIwaW4lMjBib2xpdmlhJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSkuaW5wdXRfaWRzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUzRGlucHV0X2lkcyUyQyUyMGRlY29kZXJfaW5wdXRfaWRzJTNEbGFiZWxzJTVCJTNBJTJDJTIwJTNBLTElNUQlMkMlMjBsYWJlbHMlM0RsYWJlbHMlNUIlM0ElMkMlMjAxJTNBJTVEKSUwQSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMProphetNetForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetForCausalLM.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Model can also be used with EncoderDecoder framework</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, EncoderDecoderModel, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_enc = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-large-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_dec = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google-bert/bert-large-uncased&quot;</span>, <span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;the us state department said wednesday it had received no &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;formal word from bolivia that it was expelling the us ambassador there &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;but said the charges made against him are \`\` baseless .&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_enc(ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer_dec(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;us rejects charges against its ambassador in bolivia&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-<span class="hljs-number">1</span>], labels=labels[:, <span class="hljs-number">1</span>:])

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){o=i("p"),o.textContent=k,c=n(),u(h.$$.fragment)},l(r){o=l(r,"P",{"data-svelte-h":!0}),m(o)!=="svelte-11lpom8"&&(o.textContent=k),c=s(r),f(h.$$.fragment,r)},m(r,y){p(r,o,y),p(r,c,y),g(h,r,y),T=!0},p:D,i(r){T||(_(h.$$.fragment,r),T=!0)},o(r){M(h.$$.fragment,r),T=!1},d(r){r&&(a(o),a(c)),b(h,r)}}}function Kn(v){let o,k,c,h,T,r,y,Yo='<a href="https://huggingface.co/models?filter=xprophetnet"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-xprophetnet-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/xprophetnet-large-wiki100-cased-xglue-ntg"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a>',$t,ue,Ko=`<strong>DISCLAIMER:</strong> If you see something strange, file a <a href="https://github.com/huggingface/transformers/issues/new?assignees=&amp;labels=&amp;template=bug-report.md&amp;title" rel="nofollow">Github Issue</a> and assign
@patrickvonplaten`,zt,fe,Ct,ge,en=`The XLM-ProphetNet model was proposed in <a href="https://arxiv.org/abs/2001.04063" rel="nofollow">ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,</a> by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`,Jt,_e,tn=`XLM-ProphetNet is an encoder-decoder model and can predict n-future tokens for “ngram” language modeling instead of
just the next token. Its architecture is identical to ProhpetNet, but the model was trained on the multi-lingual
“wiki100” Wikipedia dump. XLM-ProphetNet’s model architecture and pretraining objective is same as ProphetNet, but XLM-ProphetNet was pre-trained on the cross-lingual dataset XGLUE.`,jt,Me,on="The abstract from the paper is the following:",Ft,be,nn=`<em>In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.</em>`,qt,ke,sn='The Authors’ code can be found <a href="https://github.com/microsoft/ProphetNet" rel="nofollow">here</a>.',It,Te,Zt,ye,rn='<li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li> <li><a href="../tasks/translation">Translation task guide</a></li> <li><a href="../tasks/summarization">Summarization task guide</a></li>',Gt,ve,Wt,B,we,to,De,an=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetModel">XLMProphetNetModel</a>. It is used to instantiate a
XLMProphetNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the XLMProphetNet
<a href="https://huggingface.co/microsoft/xprophetnet-large-wiki100-cased" rel="nofollow">microsoft/xprophetnet-large-wiki100-cased</a>
architecture.`,oo,Qe,dn=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Ut,Le,Bt,w,Ne,no,Ae,ln=`Adapted from <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a> and <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.`,so,Ye,cn=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,ro,V,Xe,ao,Ke,pn=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A XLMProphetNet sequence has the following format:`,io,et,hn="<li>single sequence: <code>X [SEP]</code></li> <li>pair of sequences: <code>A [SEP] B [SEP]</code></li>",lo,Y,xe,co,tt,mn="Converts a sequence of tokens (strings for sub-words) in a single string.",po,K,Pe,ho,ot,un=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLMProphetNet
does not make use of token type ids, therefore a list of zeros is returned.`,mo,ee,$e,uo,nt,fn=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,Ht,ze,Rt,z,Ce,fo,st,gn=`The bare XLMProphetNet Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,go,rt,_n=`Original ProphetNet code can be found <a href="https://github.com/microsoft/ProphetNet" rel="nofollow">here</a>. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file <code>convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py</code>.`,_o,at,Mn=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`,Mo,q,Je,bo,dt,bn='The <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetModel">XLMProphetNetModel</a> forward method, overrides the <code>__call__</code> special method.',ko,te,To,oe,Vt,je,Et,X,Fe,yo,it,kn=`The standalone encoder part of the XLMProphetNetModel.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,vo,lt,Tn=`Original ProphetNet code can be found <a href="https://github.com/microsoft/ProphetNet" rel="nofollow">here</a>. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file <code>convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py</code>.`,wo,ct,yn=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`,Lo,pt,vn=`word_embeddings  (<code>torch.nn.Embeddings</code> of shape <code>(config.vocab_size, config.hidden_size)</code>, <em>optional</em>):
The word embedding parameters. This can be used to initialize <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetEncoder">XLMProphetNetEncoder</a> with pre-defined word
embeddings instead of randomly initialized word embeddings.`,No,I,qe,Xo,ht,wn='The <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetEncoder">XLMProphetNetEncoder</a> forward method, overrides the <code>__call__</code> special method.',xo,ne,Po,se,Ot,Ie,St,x,Ze,$o,mt,Ln=`The standalone decoder part of the XLMProphetNetModel.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,zo,ut,Nn=`Original ProphetNet code can be found <a href="https://github.com/microsoft/ProphetNet" rel="nofollow">here</a>. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file <code>convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py</code>.`,Co,ft,Xn=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`,Jo,gt,xn=`word_embeddings  (<code>torch.nn.Embeddings</code> of shape <code>(config.vocab_size, config.hidden_size)</code>, <em>optional</em>):
The word embedding parameters. This can be used to initialize <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetEncoder">XLMProphetNetEncoder</a> with pre-defined word
embeddings instead of randomly initialized word embeddings.`,jo,Z,Ge,Fo,_t,Pn='The <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetDecoder">XLMProphetNetDecoder</a> forward method, overrides the <code>__call__</code> special method.',qo,re,Io,ae,Dt,We,Qt,C,Ue,Zo,Mt,$n=`The XLMProphetNet Model with a language modeling head. Can be used for sequence generation tasks.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Go,bt,zn=`Original ProphetNet code can be found <a href="https://github.com/microsoft/ProphetNet" rel="nofollow">here</a>. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file <code>convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py</code>.`,Wo,kt,Cn=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`,Uo,G,Be,Bo,Tt,Jn='The <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetForConditionalGeneration">XLMProphetNetForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',Ho,de,Ro,ie,At,He,Yt,J,Re,Vo,yt,jn=`The standalone decoder part of the XLMProphetNetModel with a lm head on top. The model can be used for causal language modeling.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Eo,vt,Fn=`Original ProphetNet code can be found <a href="https://github.com/microsoft/ProphetNet" rel="nofollow">here</a>. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file <code>convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py</code>.`,Oo,wt,qn=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`,So,W,Ve,Do,Lt,In='The <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetForCausalLM">XLMProphetNetForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',Qo,le,Ao,ce,Kt,Nt,eo;return T=new S({props:{title:"XLM-ProphetNet",local:"xlm-prophetnet",headingTag:"h1"}}),fe=new S({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Te=new S({props:{title:"Resources",local:"resources",headingTag:"h2"}}),ve=new S({props:{title:"XLMProphetNetConfig",local:"transformers.XLMProphetNetConfig",headingTag:"h2"}}),we=new $({props:{name:"class transformers.XLMProphetNetConfig",anchor:"transformers.XLMProphetNetConfig",parameters:[{name:"activation_dropout",val:": Optional = 0.1"},{name:"activation_function",val:": Union = 'gelu'"},{name:"vocab_size",val:": Optional = 30522"},{name:"hidden_size",val:": Optional = 1024"},{name:"encoder_ffn_dim",val:": Optional = 4096"},{name:"num_encoder_layers",val:": Optional = 12"},{name:"num_encoder_attention_heads",val:": Optional = 16"},{name:"decoder_ffn_dim",val:": Optional = 4096"},{name:"num_decoder_layers",val:": Optional = 12"},{name:"num_decoder_attention_heads",val:": Optional = 16"},{name:"attention_dropout",val:": Optional = 0.1"},{name:"dropout",val:": Optional = 0.1"},{name:"max_position_embeddings",val:": Optional = 512"},{name:"init_std",val:": Optional = 0.02"},{name:"is_encoder_decoder",val:": Optional = True"},{name:"add_cross_attention",val:": Optional = True"},{name:"decoder_start_token_id",val:": Optional = 0"},{name:"ngram",val:": Optional = 2"},{name:"num_buckets",val:": Optional = 32"},{name:"relative_max_distance",val:": Optional = 128"},{name:"disable_ngram_loss",val:": Optional = False"},{name:"eps",val:": Optional = 0.0"},{name:"use_cache",val:": Optional = True"},{name:"pad_token_id",val:": Optional = 0"},{name:"bos_token_id",val:": Optional = 1"},{name:"eos_token_id",val:": Optional = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMProphetNetConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.XLMProphetNetConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.XLMProphetNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ProphetNET model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetModel">XLMProphetNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMProphetNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.XLMProphetNetConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.XLMProphetNetConfig.num_encoder_layers",description:`<strong>num_encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"num_encoder_layers"},{anchor:"transformers.XLMProphetNetConfig.num_encoder_attention_heads",description:`<strong>num_encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_encoder_attention_heads"},{anchor:"transformers.XLMProphetNetConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the <code>intermediate</code> (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.XLMProphetNetConfig.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"num_decoder_layers"},{anchor:"transformers.XLMProphetNetConfig.num_decoder_attention_heads",description:`<strong>num_decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"num_decoder_attention_heads"},{anchor:"transformers.XLMProphetNetConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.XLMProphetNetConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.XLMProphetNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XLMProphetNetConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.XLMProphetNetConfig.add_cross_attention",description:`<strong>add_cross_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether cross-attention layers should be added to the model.`,name:"add_cross_attention"},{anchor:"transformers.XLMProphetNetConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether this is an encoder/decoder model.`,name:"is_encoder_decoder"},{anchor:"transformers.XLMProphetNetConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.XLMProphetNetConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Beginning of stream token id.`,name:"bos_token_id"},{anchor:"transformers.XLMProphetNetConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
End of stream token id.`,name:"eos_token_id"},{anchor:"transformers.XLMProphetNetConfig.ngram",description:`<strong>ngram</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of future tokens to predict. Set to 1 to be same as traditional Language model to predict next first
token.`,name:"ngram"},{anchor:"transformers.XLMProphetNetConfig.num_buckets",description:`<strong>num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer. This is for relative position calculation. See the
[T5 paper](see <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">https://arxiv.org/abs/1910.10683</a>) for more details.`,name:"num_buckets"},{anchor:"transformers.XLMProphetNetConfig.relative_max_distance",description:`<strong>relative_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Relative distances greater than this number will be put into the last same bucket. This is for relative
position calculation. See the [T5 paper](see <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">https://arxiv.org/abs/1910.10683</a>) for more details.`,name:"relative_max_distance"},{anchor:"transformers.XLMProphetNetConfig.disable_ngram_loss",description:`<strong>disable_ngram_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether be trained predicting only the next first token.`,name:"disable_ngram_loss"},{anchor:"transformers.XLMProphetNetConfig.eps",description:`<strong>eps</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Controls the <code>epsilon</code> parameter value for label smoothing in the loss calculation. If set to 0, no label
smoothing is performed.`,name:"eps"},{anchor:"transformers.XLMProphetNetConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/configuration_xlm_prophetnet.py#L33"}}),Le=new S({props:{title:"XLMProphetNetTokenizer",local:"transformers.XLMProphetNetTokenizer",headingTag:"h2"}}),Ne=new $({props:{name:"class transformers.XLMProphetNetTokenizer",anchor:"transformers.XLMProphetNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '[SEP]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMProphetNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMProphetNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMProphetNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMProphetNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMProphetNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMProphetNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMProphetNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMProphetNetTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XLMProphetNetTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L59"}}),Xe=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L318",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),xe=new $({props:{name:"convert_tokens_to_string",anchor:"transformers.XLMProphetNetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L296"}}),Pe=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L245",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),$e=new $({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L217",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ze=new S({props:{title:"XLMProphetNetModel",local:"transformers.XLMProphetNetModel",headingTag:"h2"}}),Ce=new $({props:{name:"class transformers.XLMProphetNetModel",anchor:"transformers.XLMProphetNetModel",parameters:[{name:"config",val:": XLMProphetNetConfig"}],parametersDescription:[{anchor:"transformers.XLMProphetNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig">XLMProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1747"}}),Je=new $({props:{name:"forward",anchor:"transformers.XLMProphetNetModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMProphetNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMProphetNetModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>XLMProphetNet uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.XLMProphetNetModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.XLMProphetNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMProphetNetModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.XLMProphetNetModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.XLMProphetNetModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.XLMProphetNetModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMProphetNetModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.XLMProphetNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMProphetNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMProphetNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1791",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetSeq2SeqModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig"
>XLMProphetNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) — Sequence of main stream hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>last_hidden_state_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,ngram * decoder_sequence_length, config.vocab_size)</code>, <em>optional</em>) — Sequence of predict stream hidden-states at the output of the last layer of the decoder of the model.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>decoder_ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, encoder_sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetSeq2SeqModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),te=new Xt({props:{$$slots:{default:[Hn]},$$scope:{ctx:v}}}),oe=new xt({props:{anchor:"transformers.XLMProphetNetModel.forward.example",$$slots:{default:[Rn]},$$scope:{ctx:v}}}),je=new S({props:{title:"XLMProphetNetEncoder",local:"transformers.XLMProphetNetEncoder",headingTag:"h2"}}),Fe=new $({props:{name:"class transformers.XLMProphetNetEncoder",anchor:"transformers.XLMProphetNetEncoder",parameters:[{name:"config",val:": XLMProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig">XLMProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1243"}}),qe=new $({props:{name:"forward",anchor:"transformers.XLMProphetNetEncoder.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMProphetNetEncoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMProphetNetEncoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMProphetNetEncoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMProphetNetEncoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMProphetNetEncoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1278",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig"
>XLMProphetNetConfig</a>) and inputs.</p>
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
`}}),ne=new Xt({props:{$$slots:{default:[Vn]},$$scope:{ctx:v}}}),se=new xt({props:{anchor:"transformers.XLMProphetNetEncoder.forward.example",$$slots:{default:[En]},$$scope:{ctx:v}}}),Ie=new S({props:{title:"XLMProphetNetDecoder",local:"transformers.XLMProphetNetDecoder",headingTag:"h2"}}),Ze=new $({props:{name:"class transformers.XLMProphetNetDecoder",anchor:"transformers.XLMProphetNetDecoder",parameters:[{name:"config",val:": XLMProphetNetConfig"},{name:"word_embeddings",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig">XLMProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1378"}}),Ge=new $({props:{name:"forward",anchor:"transformers.XLMProphetNetDecoder.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMProphetNetDecoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMProphetNetDecoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMProphetNetDecoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMProphetNetDecoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMProphetNetDecoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMProphetNetDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMProphetNetDecoder.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.XLMProphetNetDecoder.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.XLMProphetNetDecoder.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMProphetNetDecoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1420",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetDecoderModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig"
>XLMProphetNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) — Sequence of main stream hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>last_hidden_state_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) — Sequence of predict stream hidden-states at the output of the last layer of the decoder of the model.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetDecoderModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new Xt({props:{$$slots:{default:[On]},$$scope:{ctx:v}}}),ae=new xt({props:{anchor:"transformers.XLMProphetNetDecoder.forward.example",$$slots:{default:[Sn]},$$scope:{ctx:v}}}),We=new S({props:{title:"XLMProphetNetForConditionalGeneration",local:"transformers.XLMProphetNetForConditionalGeneration",headingTag:"h2"}}),Ue=new $({props:{name:"class transformers.XLMProphetNetForConditionalGeneration",anchor:"transformers.XLMProphetNetForConditionalGeneration",parameters:[{name:"config",val:": XLMProphetNetConfig"}],parametersDescription:[{anchor:"transformers.XLMProphetNetForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig">XLMProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1882"}}),Be=new $({props:{name:"forward",anchor:"transformers.XLMProphetNetForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>XLMProphetNet uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1914",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetSeq2SeqLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig"
>XLMProphetNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, config.vocab_size)</code>) — Prediction scores of the main stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>logits_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) — Prediction scores of the predict stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>decoder_ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, encoder_sequence_length)</code>. Attentions weights of the encoder, after the attention
softmax, used to compute the weighted average in the self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetSeq2SeqLMOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new Xt({props:{$$slots:{default:[Dn]},$$scope:{ctx:v}}}),ie=new xt({props:{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.example",$$slots:{default:[Qn]},$$scope:{ctx:v}}}),He=new S({props:{title:"XLMProphetNetForCausalLM",local:"transformers.XLMProphetNetForCausalLM",headingTag:"h2"}}),Re=new $({props:{name:"class transformers.XLMProphetNetForCausalLM",anchor:"transformers.XLMProphetNetForCausalLM",parameters:[{name:"config",val:": XLMProphetNetConfig"}],parametersDescription:[{anchor:"transformers.XLMProphetNetForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig">XLMProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L2099"}}),Ve=new $({props:{name:"forward",anchor:"transformers.XLMProphetNetForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L2150",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetDecoderLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig"
>XLMProphetNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, config.vocab_size)</code>) — Prediction scores of the main stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>logits_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) — Prediction scores of the predict stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetDecoderLMOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new Xt({props:{$$slots:{default:[An]},$$scope:{ctx:v}}}),ce=new xt({props:{anchor:"transformers.XLMProphetNetForCausalLM.forward.example",$$slots:{default:[Yn]},$$scope:{ctx:v}}}),{c(){o=i("meta"),k=n(),c=i("p"),h=n(),u(T.$$.fragment),r=n(),y=i("div"),y.innerHTML=Yo,$t=n(),ue=i("p"),ue.innerHTML=Ko,zt=n(),u(fe.$$.fragment),Ct=n(),ge=i("p"),ge.innerHTML=en,Jt=n(),_e=i("p"),_e.textContent=tn,jt=n(),Me=i("p"),Me.textContent=on,Ft=n(),be=i("p"),be.innerHTML=nn,qt=n(),ke=i("p"),ke.innerHTML=sn,It=n(),u(Te.$$.fragment),Zt=n(),ye=i("ul"),ye.innerHTML=rn,Gt=n(),u(ve.$$.fragment),Wt=n(),B=i("div"),u(we.$$.fragment),to=n(),De=i("p"),De.innerHTML=an,oo=n(),Qe=i("p"),Qe.innerHTML=dn,Ut=n(),u(Le.$$.fragment),Bt=n(),w=i("div"),u(Ne.$$.fragment),no=n(),Ae=i("p"),Ae.innerHTML=ln,so=n(),Ye=i("p"),Ye.innerHTML=cn,ro=n(),V=i("div"),u(Xe.$$.fragment),ao=n(),Ke=i("p"),Ke.textContent=pn,io=n(),et=i("ul"),et.innerHTML=hn,lo=n(),Y=i("div"),u(xe.$$.fragment),co=n(),tt=i("p"),tt.textContent=mn,po=n(),K=i("div"),u(Pe.$$.fragment),ho=n(),ot=i("p"),ot.textContent=un,mo=n(),ee=i("div"),u($e.$$.fragment),uo=n(),nt=i("p"),nt.innerHTML=fn,Ht=n(),u(ze.$$.fragment),Rt=n(),z=i("div"),u(Ce.$$.fragment),fo=n(),st=i("p"),st.innerHTML=gn,go=n(),rt=i("p"),rt.innerHTML=_n,_o=n(),at=i("p"),at.innerHTML=Mn,Mo=n(),q=i("div"),u(Je.$$.fragment),bo=n(),dt=i("p"),dt.innerHTML=bn,ko=n(),u(te.$$.fragment),To=n(),u(oe.$$.fragment),Vt=n(),u(je.$$.fragment),Et=n(),X=i("div"),u(Fe.$$.fragment),yo=n(),it=i("p"),it.innerHTML=kn,vo=n(),lt=i("p"),lt.innerHTML=Tn,wo=n(),ct=i("p"),ct.innerHTML=yn,Lo=n(),pt=i("p"),pt.innerHTML=vn,No=n(),I=i("div"),u(qe.$$.fragment),Xo=n(),ht=i("p"),ht.innerHTML=wn,xo=n(),u(ne.$$.fragment),Po=n(),u(se.$$.fragment),Ot=n(),u(Ie.$$.fragment),St=n(),x=i("div"),u(Ze.$$.fragment),$o=n(),mt=i("p"),mt.innerHTML=Ln,zo=n(),ut=i("p"),ut.innerHTML=Nn,Co=n(),ft=i("p"),ft.innerHTML=Xn,Jo=n(),gt=i("p"),gt.innerHTML=xn,jo=n(),Z=i("div"),u(Ge.$$.fragment),Fo=n(),_t=i("p"),_t.innerHTML=Pn,qo=n(),u(re.$$.fragment),Io=n(),u(ae.$$.fragment),Dt=n(),u(We.$$.fragment),Qt=n(),C=i("div"),u(Ue.$$.fragment),Zo=n(),Mt=i("p"),Mt.innerHTML=$n,Go=n(),bt=i("p"),bt.innerHTML=zn,Wo=n(),kt=i("p"),kt.innerHTML=Cn,Uo=n(),G=i("div"),u(Be.$$.fragment),Bo=n(),Tt=i("p"),Tt.innerHTML=Jn,Ho=n(),u(de.$$.fragment),Ro=n(),u(ie.$$.fragment),At=n(),u(He.$$.fragment),Yt=n(),J=i("div"),u(Re.$$.fragment),Vo=n(),yt=i("p"),yt.innerHTML=jn,Eo=n(),vt=i("p"),vt.innerHTML=Fn,Oo=n(),wt=i("p"),wt.innerHTML=qn,So=n(),W=i("div"),u(Ve.$$.fragment),Do=n(),Lt=i("p"),Lt.innerHTML=In,Qo=n(),u(le.$$.fragment),Ao=n(),u(ce.$$.fragment),Kt=n(),Nt=i("p"),this.h()},l(e){const d=Bn("svelte-u9bgzb",document.head);o=l(d,"META",{name:!0,content:!0}),d.forEach(a),k=s(e),c=l(e,"P",{}),N(c).forEach(a),h=s(e),f(T.$$.fragment,e),r=s(e),y=l(e,"DIV",{class:!0,"data-svelte-h":!0}),m(y)!=="svelte-u6l7ab"&&(y.innerHTML=Yo),$t=s(e),ue=l(e,"P",{"data-svelte-h":!0}),m(ue)!=="svelte-s752y"&&(ue.innerHTML=Ko),zt=s(e),f(fe.$$.fragment,e),Ct=s(e),ge=l(e,"P",{"data-svelte-h":!0}),m(ge)!=="svelte-yaw1ro"&&(ge.innerHTML=en),Jt=s(e),_e=l(e,"P",{"data-svelte-h":!0}),m(_e)!=="svelte-u8v14v"&&(_e.textContent=tn),jt=s(e),Me=l(e,"P",{"data-svelte-h":!0}),m(Me)!=="svelte-vfdo9a"&&(Me.textContent=on),Ft=s(e),be=l(e,"P",{"data-svelte-h":!0}),m(be)!=="svelte-1jvtdli"&&(be.innerHTML=nn),qt=s(e),ke=l(e,"P",{"data-svelte-h":!0}),m(ke)!=="svelte-mvxxnf"&&(ke.innerHTML=sn),It=s(e),f(Te.$$.fragment,e),Zt=s(e),ye=l(e,"UL",{"data-svelte-h":!0}),m(ye)!=="svelte-jwyjs9"&&(ye.innerHTML=rn),Gt=s(e),f(ve.$$.fragment,e),Wt=s(e),B=l(e,"DIV",{class:!0});var Q=N(B);f(we.$$.fragment,Q),to=s(Q),De=l(Q,"P",{"data-svelte-h":!0}),m(De)!=="svelte-slsgq2"&&(De.innerHTML=an),oo=s(Q),Qe=l(Q,"P",{"data-svelte-h":!0}),m(Qe)!=="svelte-o55m63"&&(Qe.innerHTML=dn),Q.forEach(a),Ut=s(e),f(Le.$$.fragment,e),Bt=s(e),w=l(e,"DIV",{class:!0});var P=N(w);f(Ne.$$.fragment,P),no=s(P),Ae=l(P,"P",{"data-svelte-h":!0}),m(Ae)!=="svelte-1serjol"&&(Ae.innerHTML=ln),so=s(P),Ye=l(P,"P",{"data-svelte-h":!0}),m(Ye)!=="svelte-1c3t5ty"&&(Ye.innerHTML=cn),ro=s(P),V=l(P,"DIV",{class:!0});var A=N(V);f(Xe.$$.fragment,A),ao=s(A),Ke=l(A,"P",{"data-svelte-h":!0}),m(Ke)!=="svelte-c34cyj"&&(Ke.textContent=pn),io=s(A),et=l(A,"UL",{"data-svelte-h":!0}),m(et)!=="svelte-rua507"&&(et.innerHTML=hn),A.forEach(a),lo=s(P),Y=l(P,"DIV",{class:!0});var Ee=N(Y);f(xe.$$.fragment,Ee),co=s(Ee),tt=l(Ee,"P",{"data-svelte-h":!0}),m(tt)!=="svelte-1ne8awa"&&(tt.textContent=mn),Ee.forEach(a),po=s(P),K=l(P,"DIV",{class:!0});var Oe=N(K);f(Pe.$$.fragment,Oe),ho=s(Oe),ot=l(Oe,"P",{"data-svelte-h":!0}),m(ot)!=="svelte-194ygpb"&&(ot.textContent=un),Oe.forEach(a),mo=s(P),ee=l(P,"DIV",{class:!0});var Se=N(ee);f($e.$$.fragment,Se),uo=s(Se),nt=l(Se,"P",{"data-svelte-h":!0}),m(nt)!=="svelte-1f4f5kp"&&(nt.innerHTML=fn),Se.forEach(a),P.forEach(a),Ht=s(e),f(ze.$$.fragment,e),Rt=s(e),z=l(e,"DIV",{class:!0});var F=N(z);f(Ce.$$.fragment,F),fo=s(F),st=l(F,"P",{"data-svelte-h":!0}),m(st)!=="svelte-inride"&&(st.innerHTML=gn),go=s(F),rt=l(F,"P",{"data-svelte-h":!0}),m(rt)!=="svelte-jbq9y7"&&(rt.innerHTML=_n),_o=s(F),at=l(F,"P",{"data-svelte-h":!0}),m(at)!=="svelte-1707pv8"&&(at.innerHTML=Mn),Mo=s(F),q=l(F,"DIV",{class:!0});var H=N(q);f(Je.$$.fragment,H),bo=s(H),dt=l(H,"P",{"data-svelte-h":!0}),m(dt)!=="svelte-dxfd1c"&&(dt.innerHTML=bn),ko=s(H),f(te.$$.fragment,H),To=s(H),f(oe.$$.fragment,H),H.forEach(a),F.forEach(a),Vt=s(e),f(je.$$.fragment,e),Et=s(e),X=l(e,"DIV",{class:!0});var j=N(X);f(Fe.$$.fragment,j),yo=s(j),it=l(j,"P",{"data-svelte-h":!0}),m(it)!=="svelte-11y99p6"&&(it.innerHTML=kn),vo=s(j),lt=l(j,"P",{"data-svelte-h":!0}),m(lt)!=="svelte-jbq9y7"&&(lt.innerHTML=Tn),wo=s(j),ct=l(j,"P",{"data-svelte-h":!0}),m(ct)!=="svelte-1707pv8"&&(ct.innerHTML=yn),Lo=s(j),pt=l(j,"P",{"data-svelte-h":!0}),m(pt)!=="svelte-teurce"&&(pt.innerHTML=vn),No=s(j),I=l(j,"DIV",{class:!0});var R=N(I);f(qe.$$.fragment,R),Xo=s(R),ht=l(R,"P",{"data-svelte-h":!0}),m(ht)!=="svelte-1ibwot6"&&(ht.innerHTML=wn),xo=s(R),f(ne.$$.fragment,R),Po=s(R),f(se.$$.fragment,R),R.forEach(a),j.forEach(a),Ot=s(e),f(Ie.$$.fragment,e),St=s(e),x=l(e,"DIV",{class:!0});var U=N(x);f(Ze.$$.fragment,U),$o=s(U),mt=l(U,"P",{"data-svelte-h":!0}),m(mt)!=="svelte-14fgpu"&&(mt.innerHTML=Ln),zo=s(U),ut=l(U,"P",{"data-svelte-h":!0}),m(ut)!=="svelte-jbq9y7"&&(ut.innerHTML=Nn),Co=s(U),ft=l(U,"P",{"data-svelte-h":!0}),m(ft)!=="svelte-1707pv8"&&(ft.innerHTML=Xn),Jo=s(U),gt=l(U,"P",{"data-svelte-h":!0}),m(gt)!=="svelte-teurce"&&(gt.innerHTML=xn),jo=s(U),Z=l(U,"DIV",{class:!0});var pe=N(Z);f(Ge.$$.fragment,pe),Fo=s(pe),_t=l(pe,"P",{"data-svelte-h":!0}),m(_t)!=="svelte-172f7ty"&&(_t.innerHTML=Pn),qo=s(pe),f(re.$$.fragment,pe),Io=s(pe),f(ae.$$.fragment,pe),pe.forEach(a),U.forEach(a),Dt=s(e),f(We.$$.fragment,e),Qt=s(e),C=l(e,"DIV",{class:!0});var E=N(C);f(Ue.$$.fragment,E),Zo=s(E),Mt=l(E,"P",{"data-svelte-h":!0}),m(Mt)!=="svelte-1tuk5ce"&&(Mt.innerHTML=$n),Go=s(E),bt=l(E,"P",{"data-svelte-h":!0}),m(bt)!=="svelte-jbq9y7"&&(bt.innerHTML=zn),Wo=s(E),kt=l(E,"P",{"data-svelte-h":!0}),m(kt)!=="svelte-1707pv8"&&(kt.innerHTML=Cn),Uo=s(E),G=l(E,"DIV",{class:!0});var he=N(G);f(Be.$$.fragment,he),Bo=s(he),Tt=l(he,"P",{"data-svelte-h":!0}),m(Tt)!=="svelte-1e65eya"&&(Tt.innerHTML=Jn),Ho=s(he),f(de.$$.fragment,he),Ro=s(he),f(ie.$$.fragment,he),he.forEach(a),E.forEach(a),At=s(e),f(He.$$.fragment,e),Yt=s(e),J=l(e,"DIV",{class:!0});var O=N(J);f(Re.$$.fragment,O),Vo=s(O),yt=l(O,"P",{"data-svelte-h":!0}),m(yt)!=="svelte-gky1ud"&&(yt.innerHTML=jn),Eo=s(O),vt=l(O,"P",{"data-svelte-h":!0}),m(vt)!=="svelte-jbq9y7"&&(vt.innerHTML=Fn),Oo=s(O),wt=l(O,"P",{"data-svelte-h":!0}),m(wt)!=="svelte-1707pv8"&&(wt.innerHTML=qn),So=s(O),W=l(O,"DIV",{class:!0});var me=N(W);f(Ve.$$.fragment,me),Do=s(me),Lt=l(me,"P",{"data-svelte-h":!0}),m(Lt)!=="svelte-164ng7o"&&(Lt.innerHTML=In),Qo=s(me),f(le.$$.fragment,me),Ao=s(me),f(ce.$$.fragment,me),me.forEach(a),O.forEach(a),Kt=s(e),Nt=l(e,"P",{}),N(Nt).forEach(a),this.h()},h(){L(o,"name","hf:doc:metadata"),L(o,"content",es),L(y,"class","flex flex-wrap space-x-1"),L(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),L(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,d){t(document.head,o),p(e,k,d),p(e,c,d),p(e,h,d),g(T,e,d),p(e,r,d),p(e,y,d),p(e,$t,d),p(e,ue,d),p(e,zt,d),g(fe,e,d),p(e,Ct,d),p(e,ge,d),p(e,Jt,d),p(e,_e,d),p(e,jt,d),p(e,Me,d),p(e,Ft,d),p(e,be,d),p(e,qt,d),p(e,ke,d),p(e,It,d),g(Te,e,d),p(e,Zt,d),p(e,ye,d),p(e,Gt,d),g(ve,e,d),p(e,Wt,d),p(e,B,d),g(we,B,null),t(B,to),t(B,De),t(B,oo),t(B,Qe),p(e,Ut,d),g(Le,e,d),p(e,Bt,d),p(e,w,d),g(Ne,w,null),t(w,no),t(w,Ae),t(w,so),t(w,Ye),t(w,ro),t(w,V),g(Xe,V,null),t(V,ao),t(V,Ke),t(V,io),t(V,et),t(w,lo),t(w,Y),g(xe,Y,null),t(Y,co),t(Y,tt),t(w,po),t(w,K),g(Pe,K,null),t(K,ho),t(K,ot),t(w,mo),t(w,ee),g($e,ee,null),t(ee,uo),t(ee,nt),p(e,Ht,d),g(ze,e,d),p(e,Rt,d),p(e,z,d),g(Ce,z,null),t(z,fo),t(z,st),t(z,go),t(z,rt),t(z,_o),t(z,at),t(z,Mo),t(z,q),g(Je,q,null),t(q,bo),t(q,dt),t(q,ko),g(te,q,null),t(q,To),g(oe,q,null),p(e,Vt,d),g(je,e,d),p(e,Et,d),p(e,X,d),g(Fe,X,null),t(X,yo),t(X,it),t(X,vo),t(X,lt),t(X,wo),t(X,ct),t(X,Lo),t(X,pt),t(X,No),t(X,I),g(qe,I,null),t(I,Xo),t(I,ht),t(I,xo),g(ne,I,null),t(I,Po),g(se,I,null),p(e,Ot,d),g(Ie,e,d),p(e,St,d),p(e,x,d),g(Ze,x,null),t(x,$o),t(x,mt),t(x,zo),t(x,ut),t(x,Co),t(x,ft),t(x,Jo),t(x,gt),t(x,jo),t(x,Z),g(Ge,Z,null),t(Z,Fo),t(Z,_t),t(Z,qo),g(re,Z,null),t(Z,Io),g(ae,Z,null),p(e,Dt,d),g(We,e,d),p(e,Qt,d),p(e,C,d),g(Ue,C,null),t(C,Zo),t(C,Mt),t(C,Go),t(C,bt),t(C,Wo),t(C,kt),t(C,Uo),t(C,G),g(Be,G,null),t(G,Bo),t(G,Tt),t(G,Ho),g(de,G,null),t(G,Ro),g(ie,G,null),p(e,At,d),g(He,e,d),p(e,Yt,d),p(e,J,d),g(Re,J,null),t(J,Vo),t(J,yt),t(J,Eo),t(J,vt),t(J,Oo),t(J,wt),t(J,So),t(J,W),g(Ve,W,null),t(W,Do),t(W,Lt),t(W,Qo),g(le,W,null),t(W,Ao),g(ce,W,null),p(e,Kt,d),p(e,Nt,d),eo=!0},p(e,[d]){const Q={};d&2&&(Q.$$scope={dirty:d,ctx:e}),te.$set(Q);const P={};d&2&&(P.$$scope={dirty:d,ctx:e}),oe.$set(P);const A={};d&2&&(A.$$scope={dirty:d,ctx:e}),ne.$set(A);const Ee={};d&2&&(Ee.$$scope={dirty:d,ctx:e}),se.$set(Ee);const Oe={};d&2&&(Oe.$$scope={dirty:d,ctx:e}),re.$set(Oe);const Se={};d&2&&(Se.$$scope={dirty:d,ctx:e}),ae.$set(Se);const F={};d&2&&(F.$$scope={dirty:d,ctx:e}),de.$set(F);const H={};d&2&&(H.$$scope={dirty:d,ctx:e}),ie.$set(H);const j={};d&2&&(j.$$scope={dirty:d,ctx:e}),le.$set(j);const R={};d&2&&(R.$$scope={dirty:d,ctx:e}),ce.$set(R)},i(e){eo||(_(T.$$.fragment,e),_(fe.$$.fragment,e),_(Te.$$.fragment,e),_(ve.$$.fragment,e),_(we.$$.fragment,e),_(Le.$$.fragment,e),_(Ne.$$.fragment,e),_(Xe.$$.fragment,e),_(xe.$$.fragment,e),_(Pe.$$.fragment,e),_($e.$$.fragment,e),_(ze.$$.fragment,e),_(Ce.$$.fragment,e),_(Je.$$.fragment,e),_(te.$$.fragment,e),_(oe.$$.fragment,e),_(je.$$.fragment,e),_(Fe.$$.fragment,e),_(qe.$$.fragment,e),_(ne.$$.fragment,e),_(se.$$.fragment,e),_(Ie.$$.fragment,e),_(Ze.$$.fragment,e),_(Ge.$$.fragment,e),_(re.$$.fragment,e),_(ae.$$.fragment,e),_(We.$$.fragment,e),_(Ue.$$.fragment,e),_(Be.$$.fragment,e),_(de.$$.fragment,e),_(ie.$$.fragment,e),_(He.$$.fragment,e),_(Re.$$.fragment,e),_(Ve.$$.fragment,e),_(le.$$.fragment,e),_(ce.$$.fragment,e),eo=!0)},o(e){M(T.$$.fragment,e),M(fe.$$.fragment,e),M(Te.$$.fragment,e),M(ve.$$.fragment,e),M(we.$$.fragment,e),M(Le.$$.fragment,e),M(Ne.$$.fragment,e),M(Xe.$$.fragment,e),M(xe.$$.fragment,e),M(Pe.$$.fragment,e),M($e.$$.fragment,e),M(ze.$$.fragment,e),M(Ce.$$.fragment,e),M(Je.$$.fragment,e),M(te.$$.fragment,e),M(oe.$$.fragment,e),M(je.$$.fragment,e),M(Fe.$$.fragment,e),M(qe.$$.fragment,e),M(ne.$$.fragment,e),M(se.$$.fragment,e),M(Ie.$$.fragment,e),M(Ze.$$.fragment,e),M(Ge.$$.fragment,e),M(re.$$.fragment,e),M(ae.$$.fragment,e),M(We.$$.fragment,e),M(Ue.$$.fragment,e),M(Be.$$.fragment,e),M(de.$$.fragment,e),M(ie.$$.fragment,e),M(He.$$.fragment,e),M(Re.$$.fragment,e),M(Ve.$$.fragment,e),M(le.$$.fragment,e),M(ce.$$.fragment,e),eo=!1},d(e){e&&(a(k),a(c),a(h),a(r),a(y),a($t),a(ue),a(zt),a(Ct),a(ge),a(Jt),a(_e),a(jt),a(Me),a(Ft),a(be),a(qt),a(ke),a(It),a(Zt),a(ye),a(Gt),a(Wt),a(B),a(Ut),a(Bt),a(w),a(Ht),a(Rt),a(z),a(Vt),a(Et),a(X),a(Ot),a(St),a(x),a(Dt),a(Qt),a(C),a(At),a(Yt),a(J),a(Kt),a(Nt)),a(o),b(T,e),b(fe,e),b(Te,e),b(ve,e),b(we),b(Le,e),b(Ne),b(Xe),b(xe),b(Pe),b($e),b(ze,e),b(Ce),b(Je),b(te),b(oe),b(je,e),b(Fe),b(qe),b(ne),b(se),b(Ie,e),b(Ze),b(Ge),b(re),b(ae),b(We,e),b(Ue),b(Be),b(de),b(ie),b(He,e),b(Re),b(Ve),b(le),b(ce)}}}const es='{"title":"XLM-ProphetNet","local":"xlm-prophetnet","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"XLMProphetNetConfig","local":"transformers.XLMProphetNetConfig","sections":[],"depth":2},{"title":"XLMProphetNetTokenizer","local":"transformers.XLMProphetNetTokenizer","sections":[],"depth":2},{"title":"XLMProphetNetModel","local":"transformers.XLMProphetNetModel","sections":[],"depth":2},{"title":"XLMProphetNetEncoder","local":"transformers.XLMProphetNetEncoder","sections":[],"depth":2},{"title":"XLMProphetNetDecoder","local":"transformers.XLMProphetNetDecoder","sections":[],"depth":2},{"title":"XLMProphetNetForConditionalGeneration","local":"transformers.XLMProphetNetForConditionalGeneration","sections":[],"depth":2},{"title":"XLMProphetNetForCausalLM","local":"transformers.XLMProphetNetForCausalLM","sections":[],"depth":2}],"depth":1}';function ts(v){return Gn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ls extends Wn{constructor(o){super(),Un(this,o,ts,Kn,Zn,{})}}export{ls as component};
