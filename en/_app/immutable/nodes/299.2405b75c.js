import{s as tn,o as on,n as N}from"../chunks/scheduler.9bc65507.js";import{S as nn,i as an,g as m,s as a,r as g,A as sn,h as p,f as r,c as s,j as G,u as _,x as u,k as V,y as l,a as c,v,d as M,t as b,w as y}from"../chunks/index.707bf1b6.js";import{T as dt}from"../chunks/Tip.c2ecdbf4.js";import{D as P}from"../chunks/Docstring.17db21ae.js";import{C as Ge}from"../chunks/CodeBlock.54a9f38d.js";import{E as Xe}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as A}from"../chunks/Heading.342b1fa6.js";function rn(T){let o,f="Example:",i,d,h;return d=new Ge({props:{code:"",highlighted:"",wrap:!1}}),{c(){o=m("p"),o.textContent=f,i=a(),g(d.$$.fragment)},l(t){o=p(t,"P",{"data-svelte-h":!0}),u(o)!=="svelte-11lpom8"&&(o.textContent=f),i=s(t),_(d.$$.fragment,t)},m(t,w){c(t,o,w),c(t,i,w),v(d,t,w),h=!0},p:N,i(t){h||(M(d.$$.fragment,t),h=!0)},o(t){b(d.$$.fragment,t),h=!1},d(t){t&&(r(o),r(i)),y(d,t)}}}function ln(T){let o,f="Example:",i,d,h;return d=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFdhdkxNQ29uZmlnJTJDJTIwV2F2TE1Nb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBXYXZMTSUyMGZhY2Vib29rJTJGd2F2bG0tYmFzZS05NjBoJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFdhdkxNQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGZhY2Vib29rJTJGd2F2bG0tYmFzZS05NjBoJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBXYXZMTU1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WavLMConfig, WavLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a WavLM facebook/wavlm-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = WavLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the facebook/wavlm-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){o=m("p"),o.textContent=f,i=a(),g(d.$$.fragment)},l(t){o=p(t,"P",{"data-svelte-h":!0}),u(o)!=="svelte-11lpom8"&&(o.textContent=f),i=s(t),_(d.$$.fragment,t)},m(t,w){c(t,o,w),c(t,i,w),v(d,t,w),h=!0},p:N,i(t){h||(M(d.$$.fragment,t),h=!0)},o(t){b(d.$$.fragment,t),h=!1},d(t){t&&(r(o),r(i)),y(d,t)}}}function dn(T){let o,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=m("p"),o.innerHTML=f},l(i){o=p(i,"P",{"data-svelte-h":!0}),u(o)!=="svelte-fincs2"&&(o.innerHTML=f)},m(i,d){c(i,o,d)},p:N,d(i){i&&r(o)}}}function cn(T){let o,f="Example:",i,d,h;return d=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBXYXZMTU1vZGVsJTBBaW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZGVtbyUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQWRhdGFzZXQlMjAlM0QlMjBkYXRhc2V0LnNvcnQoJTIyaWQlMjIpJTBBc2FtcGxpbmdfcmF0ZSUyMCUzRCUyMGRhdGFzZXQuZmVhdHVyZXMlNUIlMjJhdWRpbyUyMiU1RC5zYW1wbGluZ19yYXRlJTBBJTBBcHJvY2Vzc29yJTIwJTNEJTIwQXV0b1Byb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIycGF0cmlja3ZvbnBsYXRlbiUyRndhdmxtLWxpYnJpLWNsZWFuLTEwMGgtYmFzZS1wbHVzJTIyKSUwQW1vZGVsJTIwJTNEJTIwV2F2TE1Nb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIycGF0cmlja3ZvbnBsYXRlbiUyRndhdmxtLWxpYnJpLWNsZWFuLTEwMGgtYmFzZS1wbHVzJTIyKSUwQSUwQSUyMyUyMGF1ZGlvJTIwZmlsZSUyMGlzJTIwZGVjb2RlZCUyMG9uJTIwdGhlJTIwZmx5JTBBaW5wdXRzJTIwJTNEJTIwcHJvY2Vzc29yKGRhdGFzZXQlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHNhbXBsaW5nX3JhdGUlM0RzYW1wbGluZ19yYXRlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlcy5zaGFwZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, WavLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wavlm-libri-clean-100h-base-plus&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wavlm-libri-clean-100h-base-plus&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`,wrap:!1}}),{c(){o=m("p"),o.textContent=f,i=a(),g(d.$$.fragment)},l(t){o=p(t,"P",{"data-svelte-h":!0}),u(o)!=="svelte-11lpom8"&&(o.textContent=f),i=s(t),_(d.$$.fragment,t)},m(t,w){c(t,o,w),c(t,i,w),v(d,t,w),h=!0},p:N,i(t){h||(M(d.$$.fragment,t),h=!0)},o(t){b(d.$$.fragment,t),h=!1},d(t){t&&(r(o),r(i)),y(d,t)}}}function mn(T){let o,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=m("p"),o.innerHTML=f},l(i){o=p(i,"P",{"data-svelte-h":!0}),u(o)!=="svelte-fincs2"&&(o.innerHTML=f)},m(i,d){c(i,o,d)},p:N,d(i){i&&r(o)}}}function pn(T){let o,f="Example:",i,d,h;return d=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBXYXZMTUZvckNUQyUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2RlbW8lMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEFkYXRhc2V0JTIwJTNEJTIwZGF0YXNldC5zb3J0KCUyMmlkJTIyKSUwQXNhbXBsaW5nX3JhdGUlMjAlM0QlMjBkYXRhc2V0LmZlYXR1cmVzJTVCJTIyYXVkaW8lMjIlNUQuc2FtcGxpbmdfcmF0ZSUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMnBhdHJpY2t2b25wbGF0ZW4lMkZ3YXZsbS1saWJyaS1jbGVhbi0xMDBoLWJhc2UtcGx1cyUyMiklMEFtb2RlbCUyMCUzRCUyMFdhdkxNRm9yQ1RDLmZyb21fcHJldHJhaW5lZCglMjJwYXRyaWNrdm9ucGxhdGVuJTJGd2F2bG0tbGlicmktY2xlYW4tMTAwaC1iYXNlLXBsdXMlMjIpJTBBJTBBJTIzJTIwYXVkaW8lMjBmaWxlJTIwaXMlMjBkZWNvZGVkJTIwb24lMjB0aGUlMjBmbHklMEFpbnB1dHMlMjAlM0QlMjBwcm9jZXNzb3IoZGF0YXNldCU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRHNhbXBsaW5nX3JhdGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBcHJlZGljdGVkX2lkcyUyMCUzRCUyMHRvcmNoLmFyZ21heChsb2dpdHMlMkMlMjBkaW0lM0QtMSklMEElMEElMjMlMjB0cmFuc2NyaWJlJTIwc3BlZWNoJTBBdHJhbnNjcmlwdGlvbiUyMCUzRCUyMHByb2Nlc3Nvci5iYXRjaF9kZWNvZGUocHJlZGljdGVkX2lkcyklMEF0cmFuc2NyaXB0aW9uJTVCMCU1RCUwQSUwQWlucHV0cyU1QiUyMmxhYmVscyUyMiU1RCUyMCUzRCUyMHByb2Nlc3Nvcih0ZXh0JTNEZGF0YXNldCU1QjAlNUQlNUIlMjJ0ZXh0JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBJTBBJTIzJTIwY29tcHV0ZSUyMGxvc3MlMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvc3MlMEFyb3VuZChsb3NzLml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, WavLMForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wavlm-libri-clean-100h-base-plus&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMForCTC.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wavlm-libri-clean-100h-base-plus&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;mister quilter is the aposle of the middle classes and we are glad to welcome his gospel&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">12.51</span>`,wrap:!1}}),{c(){o=m("p"),o.textContent=f,i=a(),g(d.$$.fragment)},l(t){o=p(t,"P",{"data-svelte-h":!0}),u(o)!=="svelte-11lpom8"&&(o.textContent=f),i=s(t),_(d.$$.fragment,t)},m(t,w){c(t,o,w),c(t,i,w),v(d,t,w),h=!0},p:N,i(t){h||(M(d.$$.fragment,t),h=!0)},o(t){b(d.$$.fragment,t),h=!1},d(t){t&&(r(o),r(i)),y(d,t)}}}function un(T){let o,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=m("p"),o.innerHTML=f},l(i){o=p(i,"P",{"data-svelte-h":!0}),u(o)!=="svelte-fincs2"&&(o.innerHTML=f)},m(i,d){c(i,o,d)},p:N,d(i){i&&r(o)}}}function hn(T){let o,f="Example:",i,d,h;return d=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTJDJTIwV2F2TE1Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwdG9yY2glMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZGVtbyUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQWRhdGFzZXQlMjAlM0QlMjBkYXRhc2V0LnNvcnQoJTIyaWQlMjIpJTBBc2FtcGxpbmdfcmF0ZSUyMCUzRCUyMGRhdGFzZXQuZmVhdHVyZXMlNUIlMjJhdWRpbyUyMiU1RC5zYW1wbGluZ19yYXRlJTBBJTBBZmVhdHVyZV9leHRyYWN0b3IlMjAlM0QlMjBBdXRvRmVhdHVyZUV4dHJhY3Rvci5mcm9tX3ByZXRyYWluZWQoJTIycGF0cmlja3ZvbnBsYXRlbiUyRndhdmxtLWxpYnJpLWNsZWFuLTEwMGgtYmFzZS1wbHVzJTIyKSUwQW1vZGVsJTIwJTNEJTIwV2F2TE1Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJwYXRyaWNrdm9ucGxhdGVuJTJGd2F2bG0tbGlicmktY2xlYW4tMTAwaC1iYXNlLXBsdXMlMjIpJTBBJTBBJTIzJTIwYXVkaW8lMjBmaWxlJTIwaXMlMjBkZWNvZGVkJTIwb24lMjB0aGUlMjBmbHklMEFpbnB1dHMlMjAlM0QlMjBmZWF0dXJlX2V4dHJhY3RvcihkYXRhc2V0JTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjBzYW1wbGluZ19yYXRlJTNEc2FtcGxpbmdfcmF0ZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJnbWF4KGxvZ2l0cyUyQyUyMGRpbSUzRC0xKS5pdGVtKCklMEFwcmVkaWN0ZWRfbGFiZWwlMjAlM0QlMjBtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfY2xhc3NfaWRzJTVEJTBBJTBBJTIzJTIwY29tcHV0ZSUyMGxvc3MlMjAtJTIwdGFyZ2V0X2xhYmVsJTIwaXMlMjBlLmcuJTIwJTIyZG93biUyMiUwQXRhcmdldF9sYWJlbCUyMCUzRCUyMG1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QjAlNUQlMEFpbnB1dHMlNUIlMjJsYWJlbHMlMjIlNUQlMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCbW9kZWwuY29uZmlnLmxhYmVsMmlkJTVCdGFyZ2V0X2xhYmVsJTVEJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, WavLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wavlm-libri-clean-100h-base-plus&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wavlm-libri-clean-100h-base-plus&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`,wrap:!1}}),{c(){o=m("p"),o.textContent=f,i=a(),g(d.$$.fragment)},l(t){o=p(t,"P",{"data-svelte-h":!0}),u(o)!=="svelte-11lpom8"&&(o.textContent=f),i=s(t),_(d.$$.fragment,t)},m(t,w){c(t,o,w),c(t,i,w),v(d,t,w),h=!0},p:N,i(t){h||(M(d.$$.fragment,t),h=!0)},o(t){b(d.$$.fragment,t),h=!1},d(t){t&&(r(o),r(i)),y(d,t)}}}function fn(T){let o,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=m("p"),o.innerHTML=f},l(i){o=p(i,"P",{"data-svelte-h":!0}),u(o)!=="svelte-fincs2"&&(o.innerHTML=f)},m(i,d){c(i,o,d)},p:N,d(i){i&&r(o)}}}function gn(T){let o,f="Example:",i,d,h;return d=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTJDJTIwV2F2TE1Gb3JBdWRpb0ZyYW1lQ2xhc3NpZmljYXRpb24lMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kZW1vJTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBZGF0YXNldCUyMCUzRCUyMGRhdGFzZXQuc29ydCglMjJpZCUyMiklMEFzYW1wbGluZ19yYXRlJTIwJTNEJTIwZGF0YXNldC5mZWF0dXJlcyU1QiUyMmF1ZGlvJTIyJTVELnNhbXBsaW5nX3JhdGUlMEElMEFmZWF0dXJlX2V4dHJhY3RvciUyMCUzRCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZ3YXZsbS1iYXNlLXBsdXMtc2QlMjIpJTBBbW9kZWwlMjAlM0QlMjBXYXZMTUZvckF1ZGlvRnJhbWVDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGd2F2bG0tYmFzZS1wbHVzLXNkJTIyKSUwQSUwQSUyMyUyMGF1ZGlvJTIwZmlsZSUyMGlzJTIwZGVjb2RlZCUyMG9uJTIwdGhlJTIwZmx5JTBBaW5wdXRzJTIwJTNEJTIwZmVhdHVyZV9leHRyYWN0b3IoZGF0YXNldCU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHNhbXBsaW5nX3JhdGUlM0RzYW1wbGluZ19yYXRlKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJvYmFiaWxpdGllcyUyMCUzRCUyMHRvcmNoLnNpZ21vaWQobG9naXRzJTVCMCU1RCklMEElMjMlMjBsYWJlbHMlMjBpcyUyMGElMjBvbmUtaG90JTIwYXJyYXklMjBvZiUyMHNoYXBlJTIwKG51bV9mcmFtZXMlMkMlMjBudW1fc3BlYWtlcnMpJTBBbGFiZWxzJTIwJTNEJTIwKHByb2JhYmlsaXRpZXMlMjAlM0UlMjAwLjUpLmxvbmcoKSUwQWxhYmVscyU1QjAlNUQudG9saXN0KCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, WavLMForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/wavlm-base-plus-sd&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/wavlm-base-plus-sd&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, sampling_rate=sampling_rate)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.sigmoid(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># labels is a one-hot array of shape (num_frames, num_speakers)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (probabilities &gt; <span class="hljs-number">0.5</span>).long()
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[<span class="hljs-number">0</span>].tolist()
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`,wrap:!1}}),{c(){o=m("p"),o.textContent=f,i=a(),g(d.$$.fragment)},l(t){o=p(t,"P",{"data-svelte-h":!0}),u(o)!=="svelte-11lpom8"&&(o.textContent=f),i=s(t),_(d.$$.fragment,t)},m(t,w){c(t,o,w),c(t,i,w),v(d,t,w),h=!0},p:N,i(t){h||(M(d.$$.fragment,t),h=!0)},o(t){b(d.$$.fragment,t),h=!1},d(t){t&&(r(o),r(i)),y(d,t)}}}function _n(T){let o,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=m("p"),o.innerHTML=f},l(i){o=p(i,"P",{"data-svelte-h":!0}),u(o)!=="svelte-fincs2"&&(o.innerHTML=f)},m(i,d){c(i,o,d)},p:N,d(i){i&&r(o)}}}function vn(T){let o,f="Example:",i,d,h;return d=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTJDJTIwV2F2TE1Gb3JYVmVjdG9yJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwdG9yY2glMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZGVtbyUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQWRhdGFzZXQlMjAlM0QlMjBkYXRhc2V0LnNvcnQoJTIyaWQlMjIpJTBBc2FtcGxpbmdfcmF0ZSUyMCUzRCUyMGRhdGFzZXQuZmVhdHVyZXMlNUIlMjJhdWRpbyUyMiU1RC5zYW1wbGluZ19yYXRlJTBBJTBBZmVhdHVyZV9leHRyYWN0b3IlMjAlM0QlMjBBdXRvRmVhdHVyZUV4dHJhY3Rvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGd2F2bG0tYmFzZS1wbHVzLXN2JTIyKSUwQW1vZGVsJTIwJTNEJTIwV2F2TE1Gb3JYVmVjdG9yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZ3YXZsbS1iYXNlLXBsdXMtc3YlMjIpJTBBJTBBJTIzJTIwYXVkaW8lMjBmaWxlJTIwaXMlMjBkZWNvZGVkJTIwb24lMjB0aGUlMjBmbHklMEFpbnB1dHMlMjAlM0QlMjBmZWF0dXJlX2V4dHJhY3RvciglMEElMjAlMjAlMjAlMjAlNUJkJTVCJTIyYXJyYXklMjIlNUQlMjBmb3IlMjBkJTIwaW4lMjBkYXRhc2V0JTVCJTNBMiU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVEJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRHNhbXBsaW5nX3JhdGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwcGFkZGluZyUzRFRydWUlMEEpJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGVtYmVkZGluZ3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykuZW1iZWRkaW5ncyUwQSUwQWVtYmVkZGluZ3MlMjAlM0QlMjB0b3JjaC5ubi5mdW5jdGlvbmFsLm5vcm1hbGl6ZShlbWJlZGRpbmdzJTJDJTIwZGltJTNELTEpLmNwdSgpJTBBJTBBJTIzJTIwdGhlJTIwcmVzdWx0aW5nJTIwZW1iZWRkaW5ncyUyMGNhbiUyMGJlJTIwdXNlZCUyMGZvciUyMGNvc2luZSUyMHNpbWlsYXJpdHktYmFzZWQlMjByZXRyaWV2YWwlMEFjb3NpbmVfc2ltJTIwJTNEJTIwdG9yY2gubm4uQ29zaW5lU2ltaWxhcml0eShkaW0lM0QtMSklMEFzaW1pbGFyaXR5JTIwJTNEJTIwY29zaW5lX3NpbShlbWJlZGRpbmdzJTVCMCU1RCUyQyUyMGVtYmVkZGluZ3MlNUIxJTVEKSUwQXRocmVzaG9sZCUyMCUzRCUyMDAuNyUyMCUyMCUyMyUyMHRoZSUyMG9wdGltYWwlMjB0aHJlc2hvbGQlMjBpcyUyMGRhdGFzZXQtZGVwZW5kZW50JTBBaWYlMjBzaW1pbGFyaXR5JTIwJTNDJTIwdGhyZXNob2xkJTNBJTBBJTIwJTIwJTIwJTIwcHJpbnQoJTIyU3BlYWtlcnMlMjBhcmUlMjBub3QlMjB0aGUlMjBzYW1lISUyMiklMEFyb3VuZChzaW1pbGFyaXR5Lml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, WavLMForXVector
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/wavlm-base-plus-sv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMForXVector.from_pretrained(<span class="hljs-string">&quot;microsoft/wavlm-base-plus-sv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    [d[<span class="hljs-string">&quot;array&quot;</span>] <span class="hljs-keyword">for</span> d <span class="hljs-keyword">in</span> dataset[:<span class="hljs-number">2</span>][<span class="hljs-string">&quot;audio&quot;</span>]], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    embeddings = model(**inputs).embeddings

<span class="hljs-meta">&gt;&gt;&gt; </span>embeddings = torch.nn.functional.normalize(embeddings, dim=-<span class="hljs-number">1</span>).cpu()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the resulting embeddings can be used for cosine similarity-based retrieval</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim = torch.nn.CosineSimilarity(dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>similarity = cosine_sim(embeddings[<span class="hljs-number">0</span>], embeddings[<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>threshold = <span class="hljs-number">0.7</span>  <span class="hljs-comment"># the optimal threshold is dataset-dependent</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">if</span> similarity &lt; threshold:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Speakers are not the same!&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(similarity.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.97</span>`,wrap:!1}}),{c(){o=m("p"),o.textContent=f,i=a(),g(d.$$.fragment)},l(t){o=p(t,"P",{"data-svelte-h":!0}),u(o)!=="svelte-11lpom8"&&(o.textContent=f),i=s(t),_(d.$$.fragment,t)},m(t,w){c(t,o,w),c(t,i,w),v(d,t,w),h=!0},p:N,i(t){h||(M(d.$$.fragment,t),h=!0)},o(t){b(d.$$.fragment,t),h=!1},d(t){t&&(r(o),r(i)),y(d,t)}}}function Mn(T){let o,f,i,d,h,t,w,ct,de,wo=`The WavLM model was proposed in <a href="https://arxiv.org/abs/2110.13900" rel="nofollow">WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing</a> by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo Chen,
Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian, Jian Wu,
Michael Zeng, Furu Wei.`,mt,ce,To="The abstract from the paper is the following:",pt,me,Wo=`<em>Self-supervised learning (SSL) achieves great success in speech recognition, while limited exploration has been
attempted for other speech processing tasks. As speech signal contains multi-faceted information including speaker
identity, paralinguistics, spoken content, etc., learning universal representations for all speech tasks is
challenging. In this paper, we propose a new pre-trained model, WavLM, to solve full-stack downstream speech tasks.
WavLM is built based on the HuBERT framework, with an emphasis on both spoken content modeling and speaker identity
preservation. We first equip the Transformer structure with gated relative position bias to improve its capability on
recognition tasks. For better speaker discrimination, we propose an utterance mixing training strategy, where
additional overlapped utterances are created unsupervisedly and incorporated during model training. Lastly, we scale up
the training dataset from 60k hours to 94k hours. WavLM Large achieves state-of-the-art performance on the SUPERB
benchmark, and brings significant improvements for various speech processing tasks on their representative benchmarks.</em>`,ut,pe,Co='Relevant checkpoints can be found under <a href="https://huggingface.co/models?other=wavlm" rel="nofollow">https://huggingface.co/models?other=wavlm</a>.',ht,ue,ko=`This model was contributed by <a href="https://huggingface.co/patrickvonplaten" rel="nofollow">patrickvonplaten</a>. The Authors’ code can be
found <a href="https://github.com/microsoft/unilm/tree/master/wavlm" rel="nofollow">here</a>.`,ft,he,gt,fe,jo=`<li>WavLM is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please use
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> for the feature extraction.</li> <li>WavLM model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>.</li> <li>WavLM performs especially well on speaker verification, speaker identification, and speaker diarization tasks.</li>`,_t,ge,vt,_e,Jo='<li><a href="../tasks/audio_classification">Audio classification task guide</a></li> <li><a href="../tasks/asr">Automatic speech recognition task guide</a></li>',Mt,ve,bt,j,Me,Ut,Ve,Lo=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMModel">WavLMModel</a>. It is used to instantiate an WavLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the WavLM
<a href="https://huggingface.co/microsoft/wavlm-base" rel="nofollow">microsoft/wavlm-base</a> architecture.`,Zt,ze,$o=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Xt,D,Gt,O,yt,be,wt,J,ye,Vt,Be,Fo=`The bare WavLM Model transformer outputting raw hidden-states without any specific head on top.
WavLM was proposed in <a href="https://arxiv.org/abs/2110.13900" rel="nofollow">WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data</a> by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo
Chen, Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian,
Jian Wu, Michael Zeng, Xiangzhan Yu, Furu Wei.`,zt,Ie,xo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,Bt,Re,Uo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,It,z,we,Rt,qe,Zo='The <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMModel">WavLMModel</a> forward method, overrides the <code>__call__</code> special method.',qt,K,Nt,ee,Tt,Te,Wt,L,We,Yt,Ne,Xo=`WavLM Model with a <code>language modeling</code> head on top for Connectionist Temporal Classification (CTC).
WavLM was proposed in <a href="https://arxiv.org/abs/2110.13900" rel="nofollow">WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data</a> by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo
Chen, Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian,
Jian Wu, Michael Zeng, Xiangzhan Yu, Furu Wei.`,St,Ye,Go=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,Qt,Se,Vo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Ht,B,Ce,Et,Qe,zo='The <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMForCTC">WavLMForCTC</a> forward method, overrides the <code>__call__</code> special method.',Pt,te,At,oe,Ct,ke,kt,W,je,Dt,He,Bo=`WavLM Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`,Ot,Ee,Io=`WavLM was proposed in <a href="https://arxiv.org/abs/2110.13900" rel="nofollow">WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data</a> by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo
Chen, Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian,
Jian Wu, Michael Zeng, Xiangzhan Yu, Furu Wei.`,Kt,Pe,Ro=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,eo,Ae,qo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,to,I,Je,oo,De,No='The <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMForSequenceClassification">WavLMForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',no,ne,ao,ae,jt,Le,Jt,C,$e,so,Oe,Yo="WavLM Model with a frame classification head on top for tasks like Speaker Diarization.",ro,Ke,So=`WavLM was proposed in <a href="https://arxiv.org/abs/2110.13900" rel="nofollow">WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data</a> by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo
Chen, Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian,
Jian Wu, Michael Zeng, Xiangzhan Yu, Furu Wei.`,lo,et,Qo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,io,tt,Ho=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,co,R,Fe,mo,ot,Eo='The <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMForAudioFrameClassification">WavLMForAudioFrameClassification</a> forward method, overrides the <code>__call__</code> special method.',po,se,uo,re,Lt,xe,$t,k,Ue,ho,nt,Po="WavLM Model with an XVector feature extraction head on top for tasks like Speaker Verification.",fo,at,Ao=`WavLM was proposed in <a href="https://arxiv.org/abs/2110.13900" rel="nofollow">WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data</a> by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo
Chen, Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian,
Jian Wu, Michael Zeng, Xiangzhan Yu, Furu Wei.`,go,st,Do=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,_o,rt,Oo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,vo,q,Ze,Mo,lt,Ko='The <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMForXVector">WavLMForXVector</a> forward method, overrides the <code>__call__</code> special method.',bo,le,yo,ie,Ft,it,xt;return h=new A({props:{title:"WavLM",local:"wavlm",headingTag:"h1"}}),w=new A({props:{title:"Overview",local:"overview",headingTag:"h2"}}),he=new A({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),ge=new A({props:{title:"Resources",local:"resources",headingTag:"h2"}}),ve=new A({props:{title:"WavLMConfig",local:"transformers.WavLMConfig",headingTag:"h2"}}),Me=new P({props:{name:"class transformers.WavLMConfig",anchor:"transformers.WavLMConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"num_buckets",val:" = 320"},{name:"max_bucket_distance",val:" = 800"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"num_ctc_classes",val:" = 80"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WavLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the WavLM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMModel">WavLMModel</a>. Vocabulary size of the model. Defines the different tokens
that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMModel">WavLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.WavLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.WavLMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.WavLMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.WavLMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.WavLMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.WavLMConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.WavLMConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.WavLMConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.WavLMConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMForCTC">WavLMForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.WavLMConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"layerdrop"},{anchor:"transformers.WavLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.WavLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.WavLMConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.WavLMConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.WavLMConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.WavLMConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.WavLMConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.WavLMConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.WavLMConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.WavLMConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.WavLMConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.WavLMConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.WavLMConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.WavLMConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Propability of each feature vector along the time axis to be chosen as the start of the vector span to be
masked. Approximately <code>mask_time_prob * sequence_length // mask_time_length</code> feature vectors will be masked
along the time axis. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_time_prob"},{anchor:"transformers.WavLMConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.WavLMConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.WavLMConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Propability of each feature vector along the feature axis to be chosen as the start of the vector span to
be masked. Approximately <code>mask_time_prob * hidden_size // mask_time_length</code> feature vectors will be masked
along the time axis. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_feature_prob"},{anchor:"transformers.WavLMConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.WavLMConfig.num_codevectors_per_group",description:`<strong>num_codevectors_per_group</strong> (<code>int</code>, <em>optional</em>, defaults to 320) &#x2014;
Number of entries in each quantization codebook (group).`,name:"num_codevectors_per_group"},{anchor:"transformers.WavLMConfig.num_codevector_groups",description:`<strong>num_codevector_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of codevector groups for product codevector quantization.`,name:"num_codevector_groups"},{anchor:"transformers.WavLMConfig.contrastive_logits_temperature",description:`<strong>contrastive_logits_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The temperature <em>kappa</em> in the contrastive loss.`,name:"contrastive_logits_temperature"},{anchor:"transformers.WavLMConfig.num_negatives",description:`<strong>num_negatives</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of negative samples for the contrastive loss.`,name:"num_negatives"},{anchor:"transformers.WavLMConfig.codevector_dim",description:`<strong>codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the quantized feature vectors.`,name:"codevector_dim"},{anchor:"transformers.WavLMConfig.proj_codevector_dim",description:`<strong>proj_codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the final projection of both the quantized and the transformer features.`,name:"proj_codevector_dim"},{anchor:"transformers.WavLMConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.WavLMConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;mean&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMForCTC">WavLMForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.WavLMConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMForCTC">WavLMForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.WavLMConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMForSequenceClassification">WavLMForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.WavLMConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.WavLMConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.WavLMConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.WavLMConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.WavLMConfig.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"},{anchor:"transformers.WavLMConfig.add_adapter",description:`<strong>add_adapter</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether a convolutional network should be stacked on top of the Wav2Vec2 Encoder. Can be very useful for
warm-starting Wav2Vec2 for SpeechEncoderDecoder models.`,name:"add_adapter"},{anchor:"transformers.WavLMConfig.adapter_kernel_size",description:`<strong>adapter_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_kernel_size"},{anchor:"transformers.WavLMConfig.adapter_stride",description:`<strong>adapter_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Stride of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_stride"},{anchor:"transformers.WavLMConfig.num_adapter_layers",description:`<strong>num_adapter_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of convolutional layers that should be used in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"num_adapter_layers"},{anchor:"transformers.WavLMConfig.output_hidden_size",description:`<strong>output_hidden_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the encoder output layer. If not defined, this defaults to <em>hidden-size</em>. Only relevant
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/configuration_wavlm.py#L32"}}),D=new Xe({props:{anchor:"transformers.WavLMConfig.example",$$slots:{default:[rn]},$$scope:{ctx:T}}}),O=new Xe({props:{anchor:"transformers.WavLMConfig.example-2",$$slots:{default:[ln]},$$scope:{ctx:T}}}),be=new A({props:{title:"WavLMModel",local:"transformers.WavLMModel",headingTag:"h2"}}),ye=new P({props:{name:"class transformers.WavLMModel",anchor:"transformers.WavLMModel",parameters:[{name:"config",val:": WavLMConfig"}],parametersDescription:[{anchor:"transformers.WavLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/modeling_wavlm.py#L1100"}}),we=new P({props:{name:"forward",anchor:"transformers.WavLMModel.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"mask_time_indices",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WavLMModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.WavLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.WavLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WavLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WavLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/modeling_wavlm.py#L1191",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMConfig"
>WavLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) — Sequence of extracted feature vectors of the last convolutional layer of the model.</p>
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
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),K=new dt({props:{$$slots:{default:[dn]},$$scope:{ctx:T}}}),ee=new Xe({props:{anchor:"transformers.WavLMModel.forward.example",$$slots:{default:[cn]},$$scope:{ctx:T}}}),Te=new A({props:{title:"WavLMForCTC",local:"transformers.WavLMForCTC",headingTag:"h2"}}),We=new P({props:{name:"class transformers.WavLMForCTC",anchor:"transformers.WavLMForCTC",parameters:[{name:"config",val:""},{name:"target_lang",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WavLMForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/modeling_wavlm.py#L1252"}}),Ce=new P({props:{name:"forward",anchor:"transformers.WavLMForCTC.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WavLMForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.WavLMForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.WavLMForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WavLMForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WavLMForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/modeling_wavlm.py#L1329",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMConfig"
>WavLMConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),te=new dt({props:{$$slots:{default:[mn]},$$scope:{ctx:T}}}),oe=new Xe({props:{anchor:"transformers.WavLMForCTC.forward.example",$$slots:{default:[pn]},$$scope:{ctx:T}}}),ke=new A({props:{title:"WavLMForSequenceClassification",local:"transformers.WavLMForSequenceClassification",headingTag:"h2"}}),je=new P({props:{name:"class transformers.WavLMForSequenceClassification",anchor:"transformers.WavLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/modeling_wavlm.py#L1409"}}),Je=new P({props:{name:"forward",anchor:"transformers.WavLMForSequenceClassification.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WavLMForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.WavLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.WavLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WavLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WavLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/modeling_wavlm.py#L1464",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMConfig"
>WavLMConfig</a>) and inputs.</p>
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
`}}),ne=new dt({props:{$$slots:{default:[un]},$$scope:{ctx:T}}}),ae=new Xe({props:{anchor:"transformers.WavLMForSequenceClassification.forward.example",$$slots:{default:[hn]},$$scope:{ctx:T}}}),Le=new A({props:{title:"WavLMForAudioFrameClassification",local:"transformers.WavLMForAudioFrameClassification",headingTag:"h2"}}),$e=new P({props:{name:"class transformers.WavLMForAudioFrameClassification",anchor:"transformers.WavLMForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/modeling_wavlm.py#L1534"}}),Fe=new P({props:{name:"forward",anchor:"transformers.WavLMForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WavLMForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/modeling_wavlm.py#L1585",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMConfig"
>WavLMConfig</a>) and inputs.</p>
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
`}}),se=new dt({props:{$$slots:{default:[fn]},$$scope:{ctx:T}}}),re=new Xe({props:{anchor:"transformers.WavLMForAudioFrameClassification.forward.example",$$slots:{default:[gn]},$$scope:{ctx:T}}}),xe=new A({props:{title:"WavLMForXVector",local:"transformers.WavLMForXVector",headingTag:"h2"}}),Ue=new P({props:{name:"class transformers.WavLMForXVector",anchor:"transformers.WavLMForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/modeling_wavlm.py#L1703"}}),Ze=new P({props:{name:"forward",anchor:"transformers.WavLMForXVector.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WavLMForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.WavLMForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.WavLMForXVector.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WavLMForXVector.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WavLMForXVector.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wavlm/modeling_wavlm.py#L1772",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wavlm#transformers.WavLMConfig"
>WavLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.xvector_output_dim)</code>) — Classification hidden states before AMSoftmax.</p>
</li>
<li>
<p><strong>embeddings</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.xvector_output_dim)</code>) — Utterance embeddings used for vector similarity-based retrieval.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new dt({props:{$$slots:{default:[_n]},$$scope:{ctx:T}}}),ie=new Xe({props:{anchor:"transformers.WavLMForXVector.forward.example",$$slots:{default:[vn]},$$scope:{ctx:T}}}),{c(){o=m("meta"),f=a(),i=m("p"),d=a(),g(h.$$.fragment),t=a(),g(w.$$.fragment),ct=a(),de=m("p"),de.innerHTML=wo,mt=a(),ce=m("p"),ce.textContent=To,pt=a(),me=m("p"),me.innerHTML=Wo,ut=a(),pe=m("p"),pe.innerHTML=Co,ht=a(),ue=m("p"),ue.innerHTML=ko,ft=a(),g(he.$$.fragment),gt=a(),fe=m("ul"),fe.innerHTML=jo,_t=a(),g(ge.$$.fragment),vt=a(),_e=m("ul"),_e.innerHTML=Jo,Mt=a(),g(ve.$$.fragment),bt=a(),j=m("div"),g(Me.$$.fragment),Ut=a(),Ve=m("p"),Ve.innerHTML=Lo,Zt=a(),ze=m("p"),ze.innerHTML=$o,Xt=a(),g(D.$$.fragment),Gt=a(),g(O.$$.fragment),yt=a(),g(be.$$.fragment),wt=a(),J=m("div"),g(ye.$$.fragment),Vt=a(),Be=m("p"),Be.innerHTML=Fo,zt=a(),Ie=m("p"),Ie.innerHTML=xo,Bt=a(),Re=m("p"),Re.innerHTML=Uo,It=a(),z=m("div"),g(we.$$.fragment),Rt=a(),qe=m("p"),qe.innerHTML=Zo,qt=a(),g(K.$$.fragment),Nt=a(),g(ee.$$.fragment),Tt=a(),g(Te.$$.fragment),Wt=a(),L=m("div"),g(We.$$.fragment),Yt=a(),Ne=m("p"),Ne.innerHTML=Xo,St=a(),Ye=m("p"),Ye.innerHTML=Go,Qt=a(),Se=m("p"),Se.innerHTML=Vo,Ht=a(),B=m("div"),g(Ce.$$.fragment),Et=a(),Qe=m("p"),Qe.innerHTML=zo,Pt=a(),g(te.$$.fragment),At=a(),g(oe.$$.fragment),Ct=a(),g(ke.$$.fragment),kt=a(),W=m("div"),g(je.$$.fragment),Dt=a(),He=m("p"),He.textContent=Bo,Ot=a(),Ee=m("p"),Ee.innerHTML=Io,Kt=a(),Pe=m("p"),Pe.innerHTML=Ro,eo=a(),Ae=m("p"),Ae.innerHTML=qo,to=a(),I=m("div"),g(Je.$$.fragment),oo=a(),De=m("p"),De.innerHTML=No,no=a(),g(ne.$$.fragment),ao=a(),g(ae.$$.fragment),jt=a(),g(Le.$$.fragment),Jt=a(),C=m("div"),g($e.$$.fragment),so=a(),Oe=m("p"),Oe.textContent=Yo,ro=a(),Ke=m("p"),Ke.innerHTML=So,lo=a(),et=m("p"),et.innerHTML=Qo,io=a(),tt=m("p"),tt.innerHTML=Ho,co=a(),R=m("div"),g(Fe.$$.fragment),mo=a(),ot=m("p"),ot.innerHTML=Eo,po=a(),g(se.$$.fragment),uo=a(),g(re.$$.fragment),Lt=a(),g(xe.$$.fragment),$t=a(),k=m("div"),g(Ue.$$.fragment),ho=a(),nt=m("p"),nt.textContent=Po,fo=a(),at=m("p"),at.innerHTML=Ao,go=a(),st=m("p"),st.innerHTML=Do,_o=a(),rt=m("p"),rt.innerHTML=Oo,vo=a(),q=m("div"),g(Ze.$$.fragment),Mo=a(),lt=m("p"),lt.innerHTML=Ko,bo=a(),g(le.$$.fragment),yo=a(),g(ie.$$.fragment),Ft=a(),it=m("p"),this.h()},l(e){const n=sn("svelte-u9bgzb",document.head);o=p(n,"META",{name:!0,content:!0}),n.forEach(r),f=s(e),i=p(e,"P",{}),G(i).forEach(r),d=s(e),_(h.$$.fragment,e),t=s(e),_(w.$$.fragment,e),ct=s(e),de=p(e,"P",{"data-svelte-h":!0}),u(de)!=="svelte-912u8u"&&(de.innerHTML=wo),mt=s(e),ce=p(e,"P",{"data-svelte-h":!0}),u(ce)!=="svelte-vfdo9a"&&(ce.textContent=To),pt=s(e),me=p(e,"P",{"data-svelte-h":!0}),u(me)!=="svelte-7ozg5z"&&(me.innerHTML=Wo),ut=s(e),pe=p(e,"P",{"data-svelte-h":!0}),u(pe)!=="svelte-1dne9eg"&&(pe.innerHTML=Co),ht=s(e),ue=p(e,"P",{"data-svelte-h":!0}),u(ue)!=="svelte-1tn43xw"&&(ue.innerHTML=ko),ft=s(e),_(he.$$.fragment,e),gt=s(e),fe=p(e,"UL",{"data-svelte-h":!0}),u(fe)!=="svelte-t42k8q"&&(fe.innerHTML=jo),_t=s(e),_(ge.$$.fragment,e),vt=s(e),_e=p(e,"UL",{"data-svelte-h":!0}),u(_e)!=="svelte-11qmliz"&&(_e.innerHTML=Jo),Mt=s(e),_(ve.$$.fragment,e),bt=s(e),j=p(e,"DIV",{class:!0});var U=G(j);_(Me.$$.fragment,U),Ut=s(U),Ve=p(U,"P",{"data-svelte-h":!0}),u(Ve)!=="svelte-1cbmmke"&&(Ve.innerHTML=Lo),Zt=s(U),ze=p(U,"P",{"data-svelte-h":!0}),u(ze)!=="svelte-o55m63"&&(ze.innerHTML=$o),Xt=s(U),_(D.$$.fragment,U),Gt=s(U),_(O.$$.fragment,U),U.forEach(r),yt=s(e),_(be.$$.fragment,e),wt=s(e),J=p(e,"DIV",{class:!0});var Z=G(J);_(ye.$$.fragment,Z),Vt=s(Z),Be=p(Z,"P",{"data-svelte-h":!0}),u(Be)!=="svelte-111tzhr"&&(Be.innerHTML=Fo),zt=s(Z),Ie=p(Z,"P",{"data-svelte-h":!0}),u(Ie)!=="svelte-1c8p9n2"&&(Ie.innerHTML=xo),Bt=s(Z),Re=p(Z,"P",{"data-svelte-h":!0}),u(Re)!=="svelte-68lg8f"&&(Re.innerHTML=Uo),It=s(Z),z=p(Z,"DIV",{class:!0});var Y=G(z);_(we.$$.fragment,Y),Rt=s(Y),qe=p(Y,"P",{"data-svelte-h":!0}),u(qe)!=="svelte-196sc5i"&&(qe.innerHTML=Zo),qt=s(Y),_(K.$$.fragment,Y),Nt=s(Y),_(ee.$$.fragment,Y),Y.forEach(r),Z.forEach(r),Tt=s(e),_(Te.$$.fragment,e),Wt=s(e),L=p(e,"DIV",{class:!0});var X=G(L);_(We.$$.fragment,X),Yt=s(X),Ne=p(X,"P",{"data-svelte-h":!0}),u(Ne)!=="svelte-e51694"&&(Ne.innerHTML=Xo),St=s(X),Ye=p(X,"P",{"data-svelte-h":!0}),u(Ye)!=="svelte-1c8p9n2"&&(Ye.innerHTML=Go),Qt=s(X),Se=p(X,"P",{"data-svelte-h":!0}),u(Se)!=="svelte-68lg8f"&&(Se.innerHTML=Vo),Ht=s(X),B=p(X,"DIV",{class:!0});var S=G(B);_(Ce.$$.fragment,S),Et=s(S),Qe=p(S,"P",{"data-svelte-h":!0}),u(Qe)!=="svelte-51qwaq"&&(Qe.innerHTML=zo),Pt=s(S),_(te.$$.fragment,S),At=s(S),_(oe.$$.fragment,S),S.forEach(r),X.forEach(r),Ct=s(e),_(ke.$$.fragment,e),kt=s(e),W=p(e,"DIV",{class:!0});var $=G(W);_(je.$$.fragment,$),Dt=s($),He=p($,"P",{"data-svelte-h":!0}),u(He)!=="svelte-fuh48f"&&(He.textContent=Bo),Ot=s($),Ee=p($,"P",{"data-svelte-h":!0}),u(Ee)!=="svelte-k80xuh"&&(Ee.innerHTML=Io),Kt=s($),Pe=p($,"P",{"data-svelte-h":!0}),u(Pe)!=="svelte-1c8p9n2"&&(Pe.innerHTML=Ro),eo=s($),Ae=p($,"P",{"data-svelte-h":!0}),u(Ae)!=="svelte-68lg8f"&&(Ae.innerHTML=qo),to=s($),I=p($,"DIV",{class:!0});var Q=G(I);_(Je.$$.fragment,Q),oo=s(Q),De=p(Q,"P",{"data-svelte-h":!0}),u(De)!=="svelte-93k5r8"&&(De.innerHTML=No),no=s(Q),_(ne.$$.fragment,Q),ao=s(Q),_(ae.$$.fragment,Q),Q.forEach(r),$.forEach(r),jt=s(e),_(Le.$$.fragment,e),Jt=s(e),C=p(e,"DIV",{class:!0});var F=G(C);_($e.$$.fragment,F),so=s(F),Oe=p(F,"P",{"data-svelte-h":!0}),u(Oe)!=="svelte-dugw4z"&&(Oe.textContent=Yo),ro=s(F),Ke=p(F,"P",{"data-svelte-h":!0}),u(Ke)!=="svelte-k80xuh"&&(Ke.innerHTML=So),lo=s(F),et=p(F,"P",{"data-svelte-h":!0}),u(et)!=="svelte-1c8p9n2"&&(et.innerHTML=Qo),io=s(F),tt=p(F,"P",{"data-svelte-h":!0}),u(tt)!=="svelte-68lg8f"&&(tt.innerHTML=Ho),co=s(F),R=p(F,"DIV",{class:!0});var H=G(R);_(Fe.$$.fragment,H),mo=s(H),ot=p(H,"P",{"data-svelte-h":!0}),u(ot)!=="svelte-1rk21cw"&&(ot.innerHTML=Eo),po=s(H),_(se.$$.fragment,H),uo=s(H),_(re.$$.fragment,H),H.forEach(r),F.forEach(r),Lt=s(e),_(xe.$$.fragment,e),$t=s(e),k=p(e,"DIV",{class:!0});var x=G(k);_(Ue.$$.fragment,x),ho=s(x),nt=p(x,"P",{"data-svelte-h":!0}),u(nt)!=="svelte-1t2j53f"&&(nt.textContent=Po),fo=s(x),at=p(x,"P",{"data-svelte-h":!0}),u(at)!=="svelte-k80xuh"&&(at.innerHTML=Ao),go=s(x),st=p(x,"P",{"data-svelte-h":!0}),u(st)!=="svelte-1c8p9n2"&&(st.innerHTML=Do),_o=s(x),rt=p(x,"P",{"data-svelte-h":!0}),u(rt)!=="svelte-68lg8f"&&(rt.innerHTML=Oo),vo=s(x),q=p(x,"DIV",{class:!0});var E=G(q);_(Ze.$$.fragment,E),Mo=s(E),lt=p(E,"P",{"data-svelte-h":!0}),u(lt)!=="svelte-1k6qjiq"&&(lt.innerHTML=Ko),bo=s(E),_(le.$$.fragment,E),yo=s(E),_(ie.$$.fragment,E),E.forEach(r),x.forEach(r),Ft=s(e),it=p(e,"P",{}),G(it).forEach(r),this.h()},h(){V(o,"name","hf:doc:metadata"),V(o,"content",bn),V(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),V(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),V(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),V(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),V(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),V(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),V(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),V(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),V(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),V(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),V(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){l(document.head,o),c(e,f,n),c(e,i,n),c(e,d,n),v(h,e,n),c(e,t,n),v(w,e,n),c(e,ct,n),c(e,de,n),c(e,mt,n),c(e,ce,n),c(e,pt,n),c(e,me,n),c(e,ut,n),c(e,pe,n),c(e,ht,n),c(e,ue,n),c(e,ft,n),v(he,e,n),c(e,gt,n),c(e,fe,n),c(e,_t,n),v(ge,e,n),c(e,vt,n),c(e,_e,n),c(e,Mt,n),v(ve,e,n),c(e,bt,n),c(e,j,n),v(Me,j,null),l(j,Ut),l(j,Ve),l(j,Zt),l(j,ze),l(j,Xt),v(D,j,null),l(j,Gt),v(O,j,null),c(e,yt,n),v(be,e,n),c(e,wt,n),c(e,J,n),v(ye,J,null),l(J,Vt),l(J,Be),l(J,zt),l(J,Ie),l(J,Bt),l(J,Re),l(J,It),l(J,z),v(we,z,null),l(z,Rt),l(z,qe),l(z,qt),v(K,z,null),l(z,Nt),v(ee,z,null),c(e,Tt,n),v(Te,e,n),c(e,Wt,n),c(e,L,n),v(We,L,null),l(L,Yt),l(L,Ne),l(L,St),l(L,Ye),l(L,Qt),l(L,Se),l(L,Ht),l(L,B),v(Ce,B,null),l(B,Et),l(B,Qe),l(B,Pt),v(te,B,null),l(B,At),v(oe,B,null),c(e,Ct,n),v(ke,e,n),c(e,kt,n),c(e,W,n),v(je,W,null),l(W,Dt),l(W,He),l(W,Ot),l(W,Ee),l(W,Kt),l(W,Pe),l(W,eo),l(W,Ae),l(W,to),l(W,I),v(Je,I,null),l(I,oo),l(I,De),l(I,no),v(ne,I,null),l(I,ao),v(ae,I,null),c(e,jt,n),v(Le,e,n),c(e,Jt,n),c(e,C,n),v($e,C,null),l(C,so),l(C,Oe),l(C,ro),l(C,Ke),l(C,lo),l(C,et),l(C,io),l(C,tt),l(C,co),l(C,R),v(Fe,R,null),l(R,mo),l(R,ot),l(R,po),v(se,R,null),l(R,uo),v(re,R,null),c(e,Lt,n),v(xe,e,n),c(e,$t,n),c(e,k,n),v(Ue,k,null),l(k,ho),l(k,nt),l(k,fo),l(k,at),l(k,go),l(k,st),l(k,_o),l(k,rt),l(k,vo),l(k,q),v(Ze,q,null),l(q,Mo),l(q,lt),l(q,bo),v(le,q,null),l(q,yo),v(ie,q,null),c(e,Ft,n),c(e,it,n),xt=!0},p(e,[n]){const U={};n&2&&(U.$$scope={dirty:n,ctx:e}),D.$set(U);const Z={};n&2&&(Z.$$scope={dirty:n,ctx:e}),O.$set(Z);const Y={};n&2&&(Y.$$scope={dirty:n,ctx:e}),K.$set(Y);const X={};n&2&&(X.$$scope={dirty:n,ctx:e}),ee.$set(X);const S={};n&2&&(S.$$scope={dirty:n,ctx:e}),te.$set(S);const $={};n&2&&($.$$scope={dirty:n,ctx:e}),oe.$set($);const Q={};n&2&&(Q.$$scope={dirty:n,ctx:e}),ne.$set(Q);const F={};n&2&&(F.$$scope={dirty:n,ctx:e}),ae.$set(F);const H={};n&2&&(H.$$scope={dirty:n,ctx:e}),se.$set(H);const x={};n&2&&(x.$$scope={dirty:n,ctx:e}),re.$set(x);const E={};n&2&&(E.$$scope={dirty:n,ctx:e}),le.$set(E);const en={};n&2&&(en.$$scope={dirty:n,ctx:e}),ie.$set(en)},i(e){xt||(M(h.$$.fragment,e),M(w.$$.fragment,e),M(he.$$.fragment,e),M(ge.$$.fragment,e),M(ve.$$.fragment,e),M(Me.$$.fragment,e),M(D.$$.fragment,e),M(O.$$.fragment,e),M(be.$$.fragment,e),M(ye.$$.fragment,e),M(we.$$.fragment,e),M(K.$$.fragment,e),M(ee.$$.fragment,e),M(Te.$$.fragment,e),M(We.$$.fragment,e),M(Ce.$$.fragment,e),M(te.$$.fragment,e),M(oe.$$.fragment,e),M(ke.$$.fragment,e),M(je.$$.fragment,e),M(Je.$$.fragment,e),M(ne.$$.fragment,e),M(ae.$$.fragment,e),M(Le.$$.fragment,e),M($e.$$.fragment,e),M(Fe.$$.fragment,e),M(se.$$.fragment,e),M(re.$$.fragment,e),M(xe.$$.fragment,e),M(Ue.$$.fragment,e),M(Ze.$$.fragment,e),M(le.$$.fragment,e),M(ie.$$.fragment,e),xt=!0)},o(e){b(h.$$.fragment,e),b(w.$$.fragment,e),b(he.$$.fragment,e),b(ge.$$.fragment,e),b(ve.$$.fragment,e),b(Me.$$.fragment,e),b(D.$$.fragment,e),b(O.$$.fragment,e),b(be.$$.fragment,e),b(ye.$$.fragment,e),b(we.$$.fragment,e),b(K.$$.fragment,e),b(ee.$$.fragment,e),b(Te.$$.fragment,e),b(We.$$.fragment,e),b(Ce.$$.fragment,e),b(te.$$.fragment,e),b(oe.$$.fragment,e),b(ke.$$.fragment,e),b(je.$$.fragment,e),b(Je.$$.fragment,e),b(ne.$$.fragment,e),b(ae.$$.fragment,e),b(Le.$$.fragment,e),b($e.$$.fragment,e),b(Fe.$$.fragment,e),b(se.$$.fragment,e),b(re.$$.fragment,e),b(xe.$$.fragment,e),b(Ue.$$.fragment,e),b(Ze.$$.fragment,e),b(le.$$.fragment,e),b(ie.$$.fragment,e),xt=!1},d(e){e&&(r(f),r(i),r(d),r(t),r(ct),r(de),r(mt),r(ce),r(pt),r(me),r(ut),r(pe),r(ht),r(ue),r(ft),r(gt),r(fe),r(_t),r(vt),r(_e),r(Mt),r(bt),r(j),r(yt),r(wt),r(J),r(Tt),r(Wt),r(L),r(Ct),r(kt),r(W),r(jt),r(Jt),r(C),r(Lt),r($t),r(k),r(Ft),r(it)),r(o),y(h,e),y(w,e),y(he,e),y(ge,e),y(ve,e),y(Me),y(D),y(O),y(be,e),y(ye),y(we),y(K),y(ee),y(Te,e),y(We),y(Ce),y(te),y(oe),y(ke,e),y(je),y(Je),y(ne),y(ae),y(Le,e),y($e),y(Fe),y(se),y(re),y(xe,e),y(Ue),y(Ze),y(le),y(ie)}}}const bn='{"title":"WavLM","local":"wavlm","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"WavLMConfig","local":"transformers.WavLMConfig","sections":[],"depth":2},{"title":"WavLMModel","local":"transformers.WavLMModel","sections":[],"depth":2},{"title":"WavLMForCTC","local":"transformers.WavLMForCTC","sections":[],"depth":2},{"title":"WavLMForSequenceClassification","local":"transformers.WavLMForSequenceClassification","sections":[],"depth":2},{"title":"WavLMForAudioFrameClassification","local":"transformers.WavLMForAudioFrameClassification","sections":[],"depth":2},{"title":"WavLMForXVector","local":"transformers.WavLMForXVector","sections":[],"depth":2}],"depth":1}';function yn(T){return on(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ln extends nn{constructor(o){super(),an(this,o,yn,Mn,tn,{})}}export{Ln as component};
