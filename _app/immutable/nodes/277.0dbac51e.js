import{s as Jo,o as xo,n as B}from"../chunks/scheduler.9bc65507.js";import{S as Wo,i as Zo,g as d,s,r as u,A as Vo,h as p,f as i,c as r,j as C,u as f,x as h,k as j,y as a,a as m,v as g,d as _,t as b,w as y}from"../chunks/index.707bf1b6.js";import{T as Mt}from"../chunks/Tip.c2ecdbf4.js";import{D as V}from"../chunks/Docstring.17db21ae.js";import{C as Pe}from"../chunks/CodeBlock.54a9f38d.js";import{E as He}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as P}from"../chunks/Heading.342b1fa6.js";function Xo(w){let t,v="Example:",l,c,T;return c=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFVuaVNwZWVjaFNhdE1vZGVsJTJDJTIwVW5pU3BlZWNoU2F0Q29uZmlnJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMFVuaVNwZWVjaFNhdCUyMG1pY3Jvc29mdCUyRnVuaXNwZWVjaC1zYXQtYmFzZS0xMDBoLWxpYnJpLWZ0JTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFVuaVNwZWVjaFNhdENvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwZnJvbSUyMHRoZSUyMG1pY3Jvc29mdCUyRnVuaXNwZWVjaC1zYXQtYmFzZS0xMDBoLWxpYnJpLWZ0JTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBVbmlTcGVlY2hTYXRNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> UniSpeechSatModel, UniSpeechSatConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a UniSpeechSat microsoft/unispeech-sat-base-100h-libri-ft style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = UniSpeechSatConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/unispeech-sat-base-100h-libri-ft style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=d("p"),t.textContent=v,l=s(),u(c.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=v),l=r(n),f(c.$$.fragment,n)},m(n,S){m(n,t,S),m(n,l,S),g(c,n,S),T=!0},p:B,i(n){T||(_(c.$$.fragment,n),T=!0)},o(n){b(c.$$.fragment,n),T=!1},d(n){n&&(i(t),i(l)),y(c,n)}}}function Go(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=v},l(l){t=p(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,c){m(l,t,c)},p:B,d(l){l&&i(t)}}}function zo(w){let t,v="Example:",l,c,T;return c=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBVbmlTcGVlY2hTYXRNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2RlbW8lMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEFkYXRhc2V0JTIwJTNEJTIwZGF0YXNldC5zb3J0KCUyMmlkJTIyKSUwQXNhbXBsaW5nX3JhdGUlMjAlM0QlMjBkYXRhc2V0LmZlYXR1cmVzJTVCJTIyYXVkaW8lMjIlNUQuc2FtcGxpbmdfcmF0ZSUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnVuaXNwZWVjaC1zYXQtYmFzZS0xMDBoLWxpYnJpLWZ0JTIyKSUwQW1vZGVsJTIwJTNEJTIwVW5pU3BlZWNoU2F0TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnVuaXNwZWVjaC1zYXQtYmFzZS0xMDBoLWxpYnJpLWZ0JTIyKSUwQSUwQSUyMyUyMGF1ZGlvJTIwZmlsZSUyMGlzJTIwZGVjb2RlZCUyMG9uJTIwdGhlJTIwZmx5JTBBaW5wdXRzJTIwJTNEJTIwcHJvY2Vzc29yKGRhdGFzZXQlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHNhbXBsaW5nX3JhdGUlM0RzYW1wbGluZ19yYXRlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlcy5zaGFwZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, UniSpeechSatModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-100h-libri-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatModel.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-100h-libri-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`,wrap:!1}}),{c(){t=d("p"),t.textContent=v,l=s(),u(c.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=v),l=r(n),f(c.$$.fragment,n)},m(n,S){m(n,t,S),m(n,l,S),g(c,n,S),T=!0},p:B,i(n){T||(_(c.$$.fragment,n),T=!0)},o(n){b(c.$$.fragment,n),T=!1},d(n){n&&(i(t),i(l)),y(c,n)}}}function No(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=v},l(l){t=p(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,c){m(l,t,c)},p:B,d(l){l&&i(t)}}}function Bo(w){let t,v="Example:",l,c,T;return c=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBVbmlTcGVlY2hTYXRGb3JDVEMlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kZW1vJTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBZGF0YXNldCUyMCUzRCUyMGRhdGFzZXQuc29ydCglMjJpZCUyMiklMEFzYW1wbGluZ19yYXRlJTIwJTNEJTIwZGF0YXNldC5mZWF0dXJlcyU1QiUyMmF1ZGlvJTIyJTVELnNhbXBsaW5nX3JhdGUlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZ1bmlzcGVlY2gtc2F0LWJhc2UtMTAwaC1saWJyaS1mdCUyMiklMEFtb2RlbCUyMCUzRCUyMFVuaVNwZWVjaFNhdEZvckNUQy5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGdW5pc3BlZWNoLXNhdC1iYXNlLTEwMGgtbGlicmktZnQlMjIpJTBBJTBBJTIzJTIwYXVkaW8lMjBmaWxlJTIwaXMlMjBkZWNvZGVkJTIwb24lMjB0aGUlMjBmbHklMEFpbnB1dHMlMjAlM0QlMjBwcm9jZXNzb3IoZGF0YXNldCU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRHNhbXBsaW5nX3JhdGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBcHJlZGljdGVkX2lkcyUyMCUzRCUyMHRvcmNoLmFyZ21heChsb2dpdHMlMkMlMjBkaW0lM0QtMSklMEElMEElMjMlMjB0cmFuc2NyaWJlJTIwc3BlZWNoJTBBdHJhbnNjcmlwdGlvbiUyMCUzRCUyMHByb2Nlc3Nvci5iYXRjaF9kZWNvZGUocHJlZGljdGVkX2lkcyklMEF0cmFuc2NyaXB0aW9uJTVCMCU1RCUwQSUwQWlucHV0cyU1QiUyMmxhYmVscyUyMiU1RCUyMCUzRCUyMHByb2Nlc3Nvcih0ZXh0JTNEZGF0YXNldCU1QjAlNUQlNUIlMjJ0ZXh0JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBJTBBJTIzJTIwY29tcHV0ZSUyMGxvc3MlMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvc3MlMEFyb3VuZChsb3NzLml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, UniSpeechSatForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-100h-libri-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForCTC.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-100h-libri-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILDER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">39.88</span>`,wrap:!1}}),{c(){t=d("p"),t.textContent=v,l=s(),u(c.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=v),l=r(n),f(c.$$.fragment,n)},m(n,S){m(n,t,S),m(n,l,S),g(c,n,S),T=!0},p:B,i(n){T||(_(c.$$.fragment,n),T=!0)},o(n){b(c.$$.fragment,n),T=!1},d(n){n&&(i(t),i(l)),y(c,n)}}}function Io(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=v},l(l){t=p(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,c){m(l,t,c)},p:B,d(l){l&&i(t)}}}function qo(w){let t,v="Example:",l,c,T;return c=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTJDJTIwVW5pU3BlZWNoU2F0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2RlbW8lMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEFkYXRhc2V0JTIwJTNEJTIwZGF0YXNldC5zb3J0KCUyMmlkJTIyKSUwQXNhbXBsaW5nX3JhdGUlMjAlM0QlMjBkYXRhc2V0LmZlYXR1cmVzJTVCJTIyYXVkaW8lMjIlNUQuc2FtcGxpbmdfcmF0ZSUwQSUwQWZlYXR1cmVfZXh0cmFjdG9yJTIwJTNEJTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnVuaXNwZWVjaC1zYXQtYmFzZS0xMDBoLWxpYnJpLWZ0JTIyKSUwQW1vZGVsJTIwJTNEJTIwVW5pU3BlZWNoU2F0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGdW5pc3BlZWNoLXNhdC1iYXNlLTEwMGgtbGlicmktZnQlMjIpJTBBJTBBJTIzJTIwYXVkaW8lMjBmaWxlJTIwaXMlMjBkZWNvZGVkJTIwb24lMjB0aGUlMjBmbHklMEFpbnB1dHMlMjAlM0QlMjBmZWF0dXJlX2V4dHJhY3RvcihkYXRhc2V0JTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjBzYW1wbGluZ19yYXRlJTNEc2FtcGxpbmdfcmF0ZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJnbWF4KGxvZ2l0cyUyQyUyMGRpbSUzRC0xKS5pdGVtKCklMEFwcmVkaWN0ZWRfbGFiZWwlMjAlM0QlMjBtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfY2xhc3NfaWRzJTVEJTBBJTBBJTIzJTIwY29tcHV0ZSUyMGxvc3MlMjAtJTIwdGFyZ2V0X2xhYmVsJTIwaXMlMjBlLmcuJTIwJTIyZG93biUyMiUwQXRhcmdldF9sYWJlbCUyMCUzRCUyMG1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QjAlNUQlMEFpbnB1dHMlNUIlMjJsYWJlbHMlMjIlNUQlMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCbW9kZWwuY29uZmlnLmxhYmVsMmlkJTVCdGFyZ2V0X2xhYmVsJTVEJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, UniSpeechSatForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-100h-libri-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-100h-libri-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`,wrap:!1}}),{c(){t=d("p"),t.textContent=v,l=s(),u(c.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=v),l=r(n),f(c.$$.fragment,n)},m(n,S){m(n,t,S),m(n,l,S),g(c,n,S),T=!0},p:B,i(n){T||(_(c.$$.fragment,n),T=!0)},o(n){b(c.$$.fragment,n),T=!1},d(n){n&&(i(t),i(l)),y(c,n)}}}function Ro(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=v},l(l){t=p(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,c){m(l,t,c)},p:B,d(l){l&&i(t)}}}function Yo(w){let t,v="Example:",l,c,T;return c=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTJDJTIwVW5pU3BlZWNoU2F0Rm9yQXVkaW9GcmFtZUNsYXNzaWZpY2F0aW9uJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwdG9yY2glMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZGVtbyUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQWRhdGFzZXQlMjAlM0QlMjBkYXRhc2V0LnNvcnQoJTIyaWQlMjIpJTBBc2FtcGxpbmdfcmF0ZSUyMCUzRCUyMGRhdGFzZXQuZmVhdHVyZXMlNUIlMjJhdWRpbyUyMiU1RC5zYW1wbGluZ19yYXRlJTBBJTBBZmVhdHVyZV9leHRyYWN0b3IlMjAlM0QlMjBBdXRvRmVhdHVyZUV4dHJhY3Rvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGdW5pc3BlZWNoLXNhdC1iYXNlLXBsdXMtc2QlMjIpJTBBbW9kZWwlMjAlM0QlMjBVbmlTcGVlY2hTYXRGb3JBdWRpb0ZyYW1lQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnVuaXNwZWVjaC1zYXQtYmFzZS1wbHVzLXNkJTIyKSUwQSUwQSUyMyUyMGF1ZGlvJTIwZmlsZSUyMGlzJTIwZGVjb2RlZCUyMG9uJTIwdGhlJTIwZmx5JTBBaW5wdXRzJTIwJTNEJTIwZmVhdHVyZV9leHRyYWN0b3IoZGF0YXNldCU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHNhbXBsaW5nX3JhdGUlM0RzYW1wbGluZ19yYXRlKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJvYmFiaWxpdGllcyUyMCUzRCUyMHRvcmNoLnNpZ21vaWQobG9naXRzJTVCMCU1RCklMEElMjMlMjBsYWJlbHMlMjBpcyUyMGElMjBvbmUtaG90JTIwYXJyYXklMjBvZiUyMHNoYXBlJTIwKG51bV9mcmFtZXMlMkMlMjBudW1fc3BlYWtlcnMpJTBBbGFiZWxzJTIwJTNEJTIwKHByb2JhYmlsaXRpZXMlMjAlM0UlMjAwLjUpLmxvbmcoKSUwQWxhYmVscyU1QjAlNUQudG9saXN0KCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, UniSpeechSatForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-plus-sd&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-plus-sd&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, sampling_rate=sampling_rate)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.sigmoid(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># labels is a one-hot array of shape (num_frames, num_speakers)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (probabilities &gt; <span class="hljs-number">0.5</span>).long()
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[<span class="hljs-number">0</span>].tolist()
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`,wrap:!1}}),{c(){t=d("p"),t.textContent=v,l=s(),u(c.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=v),l=r(n),f(c.$$.fragment,n)},m(n,S){m(n,t,S),m(n,l,S),g(c,n,S),T=!0},p:B,i(n){T||(_(c.$$.fragment,n),T=!0)},o(n){b(c.$$.fragment,n),T=!1},d(n){n&&(i(t),i(l)),y(c,n)}}}function Lo(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=v},l(l){t=p(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,c){m(l,t,c)},p:B,d(l){l&&i(t)}}}function Ho(w){let t,v="Example:",l,c,T;return c=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTJDJTIwVW5pU3BlZWNoU2F0Rm9yWFZlY3RvciUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2RlbW8lMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEFkYXRhc2V0JTIwJTNEJTIwZGF0YXNldC5zb3J0KCUyMmlkJTIyKSUwQXNhbXBsaW5nX3JhdGUlMjAlM0QlMjBkYXRhc2V0LmZlYXR1cmVzJTVCJTIyYXVkaW8lMjIlNUQuc2FtcGxpbmdfcmF0ZSUwQSUwQWZlYXR1cmVfZXh0cmFjdG9yJTIwJTNEJTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnVuaXNwZWVjaC1zYXQtYmFzZS1wbHVzLXN2JTIyKSUwQW1vZGVsJTIwJTNEJTIwVW5pU3BlZWNoU2F0Rm9yWFZlY3Rvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGdW5pc3BlZWNoLXNhdC1iYXNlLXBsdXMtc3YlMjIpJTBBJTBBJTIzJTIwYXVkaW8lMjBmaWxlJTIwaXMlMjBkZWNvZGVkJTIwb24lMjB0aGUlMjBmbHklMEFpbnB1dHMlMjAlM0QlMjBmZWF0dXJlX2V4dHJhY3RvciglMEElMjAlMjAlMjAlMjAlNUJkJTVCJTIyYXJyYXklMjIlNUQlMjBmb3IlMjBkJTIwaW4lMjBkYXRhc2V0JTVCJTNBMiU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVEJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRHNhbXBsaW5nX3JhdGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwcGFkZGluZyUzRFRydWUlMEEpJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGVtYmVkZGluZ3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykuZW1iZWRkaW5ncyUwQSUwQWVtYmVkZGluZ3MlMjAlM0QlMjB0b3JjaC5ubi5mdW5jdGlvbmFsLm5vcm1hbGl6ZShlbWJlZGRpbmdzJTJDJTIwZGltJTNELTEpLmNwdSgpJTBBJTBBJTIzJTIwdGhlJTIwcmVzdWx0aW5nJTIwZW1iZWRkaW5ncyUyMGNhbiUyMGJlJTIwdXNlZCUyMGZvciUyMGNvc2luZSUyMHNpbWlsYXJpdHktYmFzZWQlMjByZXRyaWV2YWwlMEFjb3NpbmVfc2ltJTIwJTNEJTIwdG9yY2gubm4uQ29zaW5lU2ltaWxhcml0eShkaW0lM0QtMSklMEFzaW1pbGFyaXR5JTIwJTNEJTIwY29zaW5lX3NpbShlbWJlZGRpbmdzJTVCMCU1RCUyQyUyMGVtYmVkZGluZ3MlNUIxJTVEKSUwQXRocmVzaG9sZCUyMCUzRCUyMDAuNyUyMCUyMCUyMyUyMHRoZSUyMG9wdGltYWwlMjB0aHJlc2hvbGQlMjBpcyUyMGRhdGFzZXQtZGVwZW5kZW50JTBBaWYlMjBzaW1pbGFyaXR5JTIwJTNDJTIwdGhyZXNob2xkJTNBJTBBJTIwJTIwJTIwJTIwcHJpbnQoJTIyU3BlYWtlcnMlMjBhcmUlMjBub3QlMjB0aGUlMjBzYW1lISUyMiklMEFyb3VuZChzaW1pbGFyaXR5Lml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, UniSpeechSatForXVector
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-plus-sv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForXVector.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-plus-sv&quot;</span>)

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
<span class="hljs-number">0.97</span>`,wrap:!1}}),{c(){t=d("p"),t.textContent=v,l=s(),u(c.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=v),l=r(n),f(c.$$.fragment,n)},m(n,S){m(n,t,S),m(n,l,S),g(c,n,S),T=!0},p:B,i(n){T||(_(c.$$.fragment,n),T=!0)},o(n){b(c.$$.fragment,n),T=!1},d(n){n&&(i(t),i(l)),y(c,n)}}}function Po(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=v},l(l){t=p(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,c){m(l,t,c)},p:B,d(l){l&&i(t)}}}function Qo(w){let t,v="Example:",l,c,T;return c=new Pe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IlMkMlMjBVbmlTcGVlY2hTYXRGb3JQcmVUcmFpbmluZyUwQWZyb20lMjB0cmFuc2Zvcm1lcnMubW9kZWxzLnVuaXNwZWVjaF9zYXQubW9kZWxpbmdfdW5pc3BlZWNoX3NhdCUyMGltcG9ydCUyMF9jb21wdXRlX21hc2tfaW5kaWNlcyUwQSUwQWZlYXR1cmVfZXh0cmFjdG9yJTIwJTNEJTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnVuaXNwZWVjaC1zYXQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFVuaVNwZWVjaFNhdEZvclByZVRyYWluaW5nLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZ1bmlzcGVlY2gtc2F0LWJhc2UlMjIpJTBBJTIzJTIwVE9ETyUzQSUyMEFkZCUyMGZ1bGwlMjBwcmV0cmFpbmluZyUyMGV4YW1wbGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, UniSpeechSatForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.unispeech_sat.modeling_unispeech_sat <span class="hljs-keyword">import</span> _compute_mask_indices

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForPreTraining.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># <span class="hljs-doctag">TODO:</span> Add full pretraining example</span>`,wrap:!1}}),{c(){t=d("p"),t.textContent=v,l=s(),u(c.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=v),l=r(n),f(c.$$.fragment,n)},m(n,S){m(n,t,S),m(n,l,S),g(c,n,S),T=!0},p:B,i(n){T||(_(c.$$.fragment,n),T=!0)},o(n){b(c.$$.fragment,n),T=!1},d(n){n&&(i(t),i(l)),y(c,n)}}}function Ao(w){let t,v,l,c,T,n,S,kt,fe,Qn=`The UniSpeech-SAT model was proposed in <a href="https://arxiv.org/abs/2110.05752" rel="nofollow">UniSpeech-SAT: Universal Speech Representation Learning with Speaker Aware
Pre-Training</a> by Sanyuan Chen, Yu Wu, Chengyi Wang, Zhengyang Chen, Zhuo Chen,
Shujie Liu, Jian Wu, Yao Qian, Furu Wei, Jinyu Li, Xiangzhan Yu .`,Ct,ge,An="The abstract from the paper is the following:",jt,_e,En=`<em>Self-supervised learning (SSL) is a long-standing goal for speech processing, since it utilizes large-scale unlabeled
data and avoids extensive human labeling. Recent years witness great successes in applying self-supervised learning in
speech recognition, while limited exploration was attempted in applying SSL for modeling speaker characteristics. In
this paper, we aim to improve the existing SSL framework for speaker representation learning. Two methods are
introduced for enhancing the unsupervised speaker information extraction. First, we apply the multi-task learning to
the current SSL framework, where we integrate the utterance-wise contrastive loss with the SSL objective function.
Second, for better speaker discrimination, we propose an utterance mixing strategy for data augmentation, where
additional overlapped utterances are created unsupervisedly and incorporate during training. We integrate the proposed
methods into the HuBERT framework. Experiment results on SUPERB benchmark show that the proposed system achieves
state-of-the-art performance in universal representation learning, especially for speaker identification oriented
tasks. An ablation study is performed verifying the efficacy of each proposed method. Finally, we scale up training
dataset to 94 thousand hours public audio data and achieve further performance improvement in all SUPERB tasks.</em>`,Ft,be,Dn=`This model was contributed by <a href="https://huggingface.co/patrickvonplaten" rel="nofollow">patrickvonplaten</a>. The Authors’ code can be
found <a href="https://github.com/microsoft/UniSpeech/tree/main/UniSpeech-SAT" rel="nofollow">here</a>.`,$t,ye,Jt,ve,On=`<li>UniSpeechSat is a speech model that accepts a float array corresponding to the raw waveform of the speech signal.
Please use <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> for the feature extraction.</li> <li>UniSpeechSat model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>.</li> <li>UniSpeechSat performs especially well on speaker verification, speaker identification, and speaker diarization tasks.</li>`,xt,Te,Wt,Se,Kn='<li><a href="../tasks/audio_classification">Audio classification task guide</a></li> <li><a href="../tasks/asr">Automatic speech recognition task guide</a></li>',Zt,we,Vt,X,Me,Ot,Qe,eo=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel">UniSpeechSatModel</a>. It is used to instantiate an
UniSpeechSat model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeechSat
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>
architecture.`,Kt,Ae,to=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,en,te,Xt,Ue,Gt,ee,ke,tn,Ee,no="Output type of <code>UniSpeechSatForPreTrainingOutput</code>, with potential hidden states and attentions.",zt,Ce,Nt,F,je,nn,De,oo=`The bare UniSpeechSat Model transformer outputting raw hidden-states without any specific head on top.
UniSpeechSat was proposed in <a href="https://arxiv.org/abs/2006.11477" rel="nofollow">wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations</a> by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`,on,Oe,ao=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,an,Ke,so=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,sn,I,Fe,rn,et,ro='The <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel">UniSpeechSatModel</a> forward method, overrides the <code>__call__</code> special method.',ln,ne,cn,oe,Bt,$e,It,$,Je,dn,tt,io=`UniSpeechSat Model with a <code>language modeling</code> head on top for Connectionist Temporal Classification (CTC).
UniSpeechSat was proposed in <a href="https://arxiv.org/abs/2006.11477" rel="nofollow">wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations</a> by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`,pn,nt,lo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,mn,ot,co=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,hn,q,xe,un,at,po='The <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a> forward method, overrides the <code>__call__</code> special method.',fn,ae,gn,se,qt,We,Rt,M,Ze,_n,st,mo=`UniSpeechSat Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`,bn,rt,ho=`UniSpeechSat was proposed in <a href="https://arxiv.org/abs/2006.11477" rel="nofollow">wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations</a> by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`,yn,it,uo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,vn,lt,fo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Tn,R,Ve,Sn,ct,go='The <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForSequenceClassification">UniSpeechSatForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',wn,re,Mn,ie,Yt,Xe,Lt,U,Ge,Un,dt,_o="UniSpeech-SAT Model with a frame classification head on top for tasks like Speaker Diarization.",kn,pt,bo=`UniSpeechSat was proposed in <a href="https://arxiv.org/abs/2006.11477" rel="nofollow">wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations</a> by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`,Cn,mt,yo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,jn,ht,vo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Fn,Y,ze,$n,ut,To='The <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForAudioFrameClassification">UniSpeechSatForAudioFrameClassification</a> forward method, overrides the <code>__call__</code> special method.',Jn,le,xn,ce,Ht,Ne,Pt,k,Be,Wn,ft,So="UniSpeech-SAT Model with an XVector feature extraction head on top for tasks like Speaker Verification.",Zn,gt,wo=`UniSpeechSat was proposed in <a href="https://arxiv.org/abs/2006.11477" rel="nofollow">wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations</a> by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`,Vn,_t,Mo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,Xn,bt,Uo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Gn,L,Ie,zn,yt,ko='The <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForXVector">UniSpeechSatForXVector</a> forward method, overrides the <code>__call__</code> special method.',Nn,de,Bn,pe,Qt,qe,At,J,Re,In,vt,Co=`UniSpeechSat Model with a quantizer and <code>VQ</code> head on top.
UniSpeechSat was proposed in <a href="https://arxiv.org/abs/2006.11477" rel="nofollow">wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations</a> by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`,qn,Tt,jo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,Rn,St,Fo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Yn,H,Ye,Ln,wt,$o='The <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForPreTraining">UniSpeechSatForPreTraining</a> forward method, overrides the <code>__call__</code> special method.',Hn,me,Pn,he,Et,Ut,Dt;return T=new P({props:{title:"UniSpeech-SAT",local:"unispeech-sat",headingTag:"h1"}}),S=new P({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ye=new P({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Te=new P({props:{title:"Resources",local:"resources",headingTag:"h2"}}),we=new P({props:{title:"UniSpeechSatConfig",local:"transformers.UniSpeechSatConfig",headingTag:"h2"}}),Me=new V({props:{name:"class transformers.UniSpeechSatConfig",anchor:"transformers.UniSpeechSatConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"num_clusters",val:" = 504"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the UniSpeechSat model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel">UniSpeechSatModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel">UniSpeechSatModel</a>.`,name:"vocab_size"},{anchor:"transformers.UniSpeechSatConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.UniSpeechSatConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.UniSpeechSatConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.UniSpeechSatConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.UniSpeechSatConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.UniSpeechSatConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.UniSpeechSatConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.UniSpeechSatConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.UniSpeechSatConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.UniSpeechSatConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for the output of the feature encoder that&#x2019;s used by the quantizer.`,name:"feat_quantizer_dropout"},{anchor:"transformers.UniSpeechSatConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.UniSpeechSatConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"layerdrop"},{anchor:"transformers.UniSpeechSatConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.UniSpeechSatConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-05) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.UniSpeechSatConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.UniSpeechSatConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, *optional*, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.UniSpeechSatConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.UniSpeechSatConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.UniSpeechSatConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 2, 2)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.UniSpeechSatConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.UniSpeechSatConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.UniSpeechSatConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.UniSpeechSatConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.UniSpeechSatConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.UniSpeechSatConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.UniSpeechSatConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.UniSpeechSatConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.UniSpeechSatConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.UniSpeechSatConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.UniSpeechSatConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.UniSpeechSatConfig.num_codevectors_per_group",description:`<strong>num_codevectors_per_group</strong> (<code>int</code>, <em>optional</em>, defaults to 320) &#x2014;
Number of entries in each quantization codebook (group).`,name:"num_codevectors_per_group"},{anchor:"transformers.UniSpeechSatConfig.num_codevector_groups",description:`<strong>num_codevector_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of codevector groups for product codevector quantization.`,name:"num_codevector_groups"},{anchor:"transformers.UniSpeechSatConfig.contrastive_logits_temperature",description:`<strong>contrastive_logits_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The temperature <em>kappa</em> in the contrastive loss.`,name:"contrastive_logits_temperature"},{anchor:"transformers.UniSpeechSatConfig.num_negatives",description:`<strong>num_negatives</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of negative samples for the contrastive loss.`,name:"num_negatives"},{anchor:"transformers.UniSpeechSatConfig.codevector_dim",description:`<strong>codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the quantized feature vectors.`,name:"codevector_dim"},{anchor:"transformers.UniSpeechSatConfig.proj_codevector_dim",description:`<strong>proj_codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the final projection of both the quantized and the transformer features.`,name:"proj_codevector_dim"},{anchor:"transformers.UniSpeechSatConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.UniSpeechSatConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;mean&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.UniSpeechSatConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.UniSpeechSatConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForSequenceClassification">UniSpeechSatForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.UniSpeechSatConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.UniSpeechSatConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.UniSpeechSatConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.UniSpeechSatConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.UniSpeechSatConfig.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"},{anchor:"transformers.UniSpeechSatConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The id of the padding token.`,name:"pad_token_id"},{anchor:"transformers.UniSpeechSatConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The id of the &#x201C;beginning-of-sequence&#x201D; token.`,name:"bos_token_id"},{anchor:"transformers.UniSpeechSatConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the &#x201C;end-of-sequence&#x201D; token.`,name:"eos_token_id"},{anchor:"transformers.UniSpeechSatConfig.num_clusters",description:`<strong>num_clusters</strong> (<code>int</code>, <em>optional</em>, defaults to 504) &#x2014;
Number of clusters for weak labeling. Only relevant when using an instance of
<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForPreTraining">UniSpeechSatForPreTraining</a>.`,name:"num_clusters"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/configuration_unispeech_sat.py#L34"}}),te=new He({props:{anchor:"transformers.UniSpeechSatConfig.example",$$slots:{default:[Xo]},$$scope:{ctx:w}}}),Ue=new P({props:{title:"UniSpeechSat specific outputs",local:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput",headingTag:"h2"}}),ke=new V({props:{name:"class transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput",anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"logits",val:": FloatTensor = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official
paper</a> . (classification) loss.`,name:"loss"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.projected_states",description:`<strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.`,name:"projected_states"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.projected_quantized_states",description:`<strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.`,name:"projected_quantized_states"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L80"}}),Ce=new P({props:{title:"UniSpeechSatModel",local:"transformers.UniSpeechSatModel",headingTag:"h2"}}),je=new V({props:{name:"class transformers.UniSpeechSatModel",anchor:"transformers.UniSpeechSatModel",parameters:[{name:"config",val:": UniSpeechSatConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechSatModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1101"}}),Fe=new V({props:{name:"forward",anchor:"transformers.UniSpeechSatModel.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"mask_time_indices",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1169",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
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
`}}),ne=new Mt({props:{$$slots:{default:[Go]},$$scope:{ctx:w}}}),oe=new He({props:{anchor:"transformers.UniSpeechSatModel.forward.example",$$slots:{default:[zo]},$$scope:{ctx:w}}}),$e=new P({props:{title:"UniSpeechSatForCTC",local:"transformers.UniSpeechSatForCTC",headingTag:"h2"}}),Je=new V({props:{name:"class transformers.UniSpeechSatForCTC",anchor:"transformers.UniSpeechSatForCTC",parameters:[{name:"config",val:""},{name:"target_lang",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.UniSpeechSatForCTC.target_lang",description:`<strong>target_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Language id of adapter weights. Adapter weights are stored in the format adapter.<lang>.safetensors or
adapter.<lang>.bin. Only relevant when using an instance of <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a> with adapters. Uses
&#x2018;eng&#x2019; by default.</lang></lang>`,name:"target_lang"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1363"}}),xe=new V({props:{name:"forward",anchor:"transformers.UniSpeechSatForCTC.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1446",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
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
`}}),ae=new Mt({props:{$$slots:{default:[No]},$$scope:{ctx:w}}}),se=new He({props:{anchor:"transformers.UniSpeechSatForCTC.forward.example",$$slots:{default:[Bo]},$$scope:{ctx:w}}}),We=new P({props:{title:"UniSpeechSatForSequenceClassification",local:"transformers.UniSpeechSatForSequenceClassification",headingTag:"h2"}}),Ze=new V({props:{name:"class transformers.UniSpeechSatForSequenceClassification",anchor:"transformers.UniSpeechSatForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1526"}}),Ve=new V({props:{name:"forward",anchor:"transformers.UniSpeechSatForSequenceClassification.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1581",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
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
`}}),re=new Mt({props:{$$slots:{default:[Io]},$$scope:{ctx:w}}}),ie=new He({props:{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.example",$$slots:{default:[qo]},$$scope:{ctx:w}}}),Xe=new P({props:{title:"UniSpeechSatForAudioFrameClassification",local:"transformers.UniSpeechSatForAudioFrameClassification",headingTag:"h2"}}),Ge=new V({props:{name:"class transformers.UniSpeechSatForAudioFrameClassification",anchor:"transformers.UniSpeechSatForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1651"}}),ze=new V({props:{name:"forward",anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1702",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
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
`}}),le=new Mt({props:{$$slots:{default:[Ro]},$$scope:{ctx:w}}}),ce=new He({props:{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.example",$$slots:{default:[Yo]},$$scope:{ctx:w}}}),Ne=new P({props:{title:"UniSpeechSatForXVector",local:"transformers.UniSpeechSatForXVector",headingTag:"h2"}}),Be=new V({props:{name:"class transformers.UniSpeechSatForXVector",anchor:"transformers.UniSpeechSatForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1820"}}),Ie=new V({props:{name:"forward",anchor:"transformers.UniSpeechSatForXVector.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatForXVector.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatForXVector.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatForXVector.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1889",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
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
`}}),de=new Mt({props:{$$slots:{default:[Lo]},$$scope:{ctx:w}}}),pe=new He({props:{anchor:"transformers.UniSpeechSatForXVector.forward.example",$$slots:{default:[Ho]},$$scope:{ctx:w}}}),qe=new P({props:{title:"UniSpeechSatForPreTraining",local:"transformers.UniSpeechSatForPreTraining",headingTag:"h2"}}),Re=new V({props:{name:"class transformers.UniSpeechSatForPreTraining",anchor:"transformers.UniSpeechSatForPreTraining",parameters:[{name:"config",val:": UniSpeechSatConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1225"}}),Ye=new V({props:{name:"forward",anchor:"transformers.UniSpeechSatForPreTraining.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1294",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput"
>transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) — Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a
  href="https://arxiv.org/pdf/2006.11477.pdf"
  rel="nofollow"
>official
paper</a> . (classification) loss.</p>
</li>
<li>
<p><strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) — Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.</p>
</li>
<li>
<p><strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) — Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.</p>
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
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput"
>transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new Mt({props:{$$slots:{default:[Po]},$$scope:{ctx:w}}}),he=new He({props:{anchor:"transformers.UniSpeechSatForPreTraining.forward.example",$$slots:{default:[Qo]},$$scope:{ctx:w}}}),{c(){t=d("meta"),v=s(),l=d("p"),c=s(),u(T.$$.fragment),n=s(),u(S.$$.fragment),kt=s(),fe=d("p"),fe.innerHTML=Qn,Ct=s(),ge=d("p"),ge.textContent=An,jt=s(),_e=d("p"),_e.innerHTML=En,Ft=s(),be=d("p"),be.innerHTML=Dn,$t=s(),u(ye.$$.fragment),Jt=s(),ve=d("ul"),ve.innerHTML=On,xt=s(),u(Te.$$.fragment),Wt=s(),Se=d("ul"),Se.innerHTML=Kn,Zt=s(),u(we.$$.fragment),Vt=s(),X=d("div"),u(Me.$$.fragment),Ot=s(),Qe=d("p"),Qe.innerHTML=eo,Kt=s(),Ae=d("p"),Ae.innerHTML=to,en=s(),u(te.$$.fragment),Xt=s(),u(Ue.$$.fragment),Gt=s(),ee=d("div"),u(ke.$$.fragment),tn=s(),Ee=d("p"),Ee.innerHTML=no,zt=s(),u(Ce.$$.fragment),Nt=s(),F=d("div"),u(je.$$.fragment),nn=s(),De=d("p"),De.innerHTML=oo,on=s(),Oe=d("p"),Oe.innerHTML=ao,an=s(),Ke=d("p"),Ke.innerHTML=so,sn=s(),I=d("div"),u(Fe.$$.fragment),rn=s(),et=d("p"),et.innerHTML=ro,ln=s(),u(ne.$$.fragment),cn=s(),u(oe.$$.fragment),Bt=s(),u($e.$$.fragment),It=s(),$=d("div"),u(Je.$$.fragment),dn=s(),tt=d("p"),tt.innerHTML=io,pn=s(),nt=d("p"),nt.innerHTML=lo,mn=s(),ot=d("p"),ot.innerHTML=co,hn=s(),q=d("div"),u(xe.$$.fragment),un=s(),at=d("p"),at.innerHTML=po,fn=s(),u(ae.$$.fragment),gn=s(),u(se.$$.fragment),qt=s(),u(We.$$.fragment),Rt=s(),M=d("div"),u(Ze.$$.fragment),_n=s(),st=d("p"),st.textContent=mo,bn=s(),rt=d("p"),rt.innerHTML=ho,yn=s(),it=d("p"),it.innerHTML=uo,vn=s(),lt=d("p"),lt.innerHTML=fo,Tn=s(),R=d("div"),u(Ve.$$.fragment),Sn=s(),ct=d("p"),ct.innerHTML=go,wn=s(),u(re.$$.fragment),Mn=s(),u(ie.$$.fragment),Yt=s(),u(Xe.$$.fragment),Lt=s(),U=d("div"),u(Ge.$$.fragment),Un=s(),dt=d("p"),dt.textContent=_o,kn=s(),pt=d("p"),pt.innerHTML=bo,Cn=s(),mt=d("p"),mt.innerHTML=yo,jn=s(),ht=d("p"),ht.innerHTML=vo,Fn=s(),Y=d("div"),u(ze.$$.fragment),$n=s(),ut=d("p"),ut.innerHTML=To,Jn=s(),u(le.$$.fragment),xn=s(),u(ce.$$.fragment),Ht=s(),u(Ne.$$.fragment),Pt=s(),k=d("div"),u(Be.$$.fragment),Wn=s(),ft=d("p"),ft.textContent=So,Zn=s(),gt=d("p"),gt.innerHTML=wo,Vn=s(),_t=d("p"),_t.innerHTML=Mo,Xn=s(),bt=d("p"),bt.innerHTML=Uo,Gn=s(),L=d("div"),u(Ie.$$.fragment),zn=s(),yt=d("p"),yt.innerHTML=ko,Nn=s(),u(de.$$.fragment),Bn=s(),u(pe.$$.fragment),Qt=s(),u(qe.$$.fragment),At=s(),J=d("div"),u(Re.$$.fragment),In=s(),vt=d("p"),vt.innerHTML=Co,qn=s(),Tt=d("p"),Tt.innerHTML=jo,Rn=s(),St=d("p"),St.innerHTML=Fo,Yn=s(),H=d("div"),u(Ye.$$.fragment),Ln=s(),wt=d("p"),wt.innerHTML=$o,Hn=s(),u(me.$$.fragment),Pn=s(),u(he.$$.fragment),Et=s(),Ut=d("p"),this.h()},l(e){const o=Vo("svelte-u9bgzb",document.head);t=p(o,"META",{name:!0,content:!0}),o.forEach(i),v=r(e),l=p(e,"P",{}),C(l).forEach(i),c=r(e),f(T.$$.fragment,e),n=r(e),f(S.$$.fragment,e),kt=r(e),fe=p(e,"P",{"data-svelte-h":!0}),h(fe)!=="svelte-1316kp6"&&(fe.innerHTML=Qn),Ct=r(e),ge=p(e,"P",{"data-svelte-h":!0}),h(ge)!=="svelte-vfdo9a"&&(ge.textContent=An),jt=r(e),_e=p(e,"P",{"data-svelte-h":!0}),h(_e)!=="svelte-10nre4r"&&(_e.innerHTML=En),Ft=r(e),be=p(e,"P",{"data-svelte-h":!0}),h(be)!=="svelte-1vgslzy"&&(be.innerHTML=Dn),$t=r(e),f(ye.$$.fragment,e),Jt=r(e),ve=p(e,"UL",{"data-svelte-h":!0}),h(ve)!=="svelte-1uak76f"&&(ve.innerHTML=On),xt=r(e),f(Te.$$.fragment,e),Wt=r(e),Se=p(e,"UL",{"data-svelte-h":!0}),h(Se)!=="svelte-11qmliz"&&(Se.innerHTML=Kn),Zt=r(e),f(we.$$.fragment,e),Vt=r(e),X=p(e,"DIV",{class:!0});var Q=C(X);f(Me.$$.fragment,Q),Ot=r(Q),Qe=p(Q,"P",{"data-svelte-h":!0}),h(Qe)!=="svelte-hglsae"&&(Qe.innerHTML=eo),Kt=r(Q),Ae=p(Q,"P",{"data-svelte-h":!0}),h(Ae)!=="svelte-o55m63"&&(Ae.innerHTML=to),en=r(Q),f(te.$$.fragment,Q),Q.forEach(i),Xt=r(e),f(Ue.$$.fragment,e),Gt=r(e),ee=p(e,"DIV",{class:!0});var Le=C(ee);f(ke.$$.fragment,Le),tn=r(Le),Ee=p(Le,"P",{"data-svelte-h":!0}),h(Ee)!=="svelte-1udj2li"&&(Ee.innerHTML=no),Le.forEach(i),zt=r(e),f(Ce.$$.fragment,e),Nt=r(e),F=p(e,"DIV",{class:!0});var G=C(F);f(je.$$.fragment,G),nn=r(G),De=p(G,"P",{"data-svelte-h":!0}),h(De)!=="svelte-sgxxah"&&(De.innerHTML=oo),on=r(G),Oe=p(G,"P",{"data-svelte-h":!0}),h(Oe)!=="svelte-1c8p9n2"&&(Oe.innerHTML=ao),an=r(G),Ke=p(G,"P",{"data-svelte-h":!0}),h(Ke)!=="svelte-68lg8f"&&(Ke.innerHTML=so),sn=r(G),I=p(G,"DIV",{class:!0});var A=C(I);f(Fe.$$.fragment,A),rn=r(A),et=p(A,"P",{"data-svelte-h":!0}),h(et)!=="svelte-qts356"&&(et.innerHTML=ro),ln=r(A),f(ne.$$.fragment,A),cn=r(A),f(oe.$$.fragment,A),A.forEach(i),G.forEach(i),Bt=r(e),f($e.$$.fragment,e),It=r(e),$=p(e,"DIV",{class:!0});var z=C($);f(Je.$$.fragment,z),dn=r(z),tt=p(z,"P",{"data-svelte-h":!0}),h(tt)!=="svelte-l1kchy"&&(tt.innerHTML=io),pn=r(z),nt=p(z,"P",{"data-svelte-h":!0}),h(nt)!=="svelte-1c8p9n2"&&(nt.innerHTML=lo),mn=r(z),ot=p(z,"P",{"data-svelte-h":!0}),h(ot)!=="svelte-68lg8f"&&(ot.innerHTML=co),hn=r(z),q=p(z,"DIV",{class:!0});var E=C(q);f(xe.$$.fragment,E),un=r(E),at=p(E,"P",{"data-svelte-h":!0}),h(at)!=="svelte-1ji3axo"&&(at.innerHTML=po),fn=r(E),f(ae.$$.fragment,E),gn=r(E),f(se.$$.fragment,E),E.forEach(i),z.forEach(i),qt=r(e),f(We.$$.fragment,e),Rt=r(e),M=p(e,"DIV",{class:!0});var x=C(M);f(Ze.$$.fragment,x),_n=r(x),st=p(x,"P",{"data-svelte-h":!0}),h(st)!=="svelte-u9su9i"&&(st.textContent=mo),bn=r(x),rt=p(x,"P",{"data-svelte-h":!0}),h(rt)!=="svelte-1g4oek0"&&(rt.innerHTML=ho),yn=r(x),it=p(x,"P",{"data-svelte-h":!0}),h(it)!=="svelte-1c8p9n2"&&(it.innerHTML=uo),vn=r(x),lt=p(x,"P",{"data-svelte-h":!0}),h(lt)!=="svelte-68lg8f"&&(lt.innerHTML=fo),Tn=r(x),R=p(x,"DIV",{class:!0});var D=C(R);f(Ve.$$.fragment,D),Sn=r(D),ct=p(D,"P",{"data-svelte-h":!0}),h(ct)!=="svelte-sb94cu"&&(ct.innerHTML=go),wn=r(D),f(re.$$.fragment,D),Mn=r(D),f(ie.$$.fragment,D),D.forEach(i),x.forEach(i),Yt=r(e),f(Xe.$$.fragment,e),Lt=r(e),U=p(e,"DIV",{class:!0});var W=C(U);f(Ge.$$.fragment,W),Un=r(W),dt=p(W,"P",{"data-svelte-h":!0}),h(dt)!=="svelte-6truyz"&&(dt.textContent=_o),kn=r(W),pt=p(W,"P",{"data-svelte-h":!0}),h(pt)!=="svelte-1g4oek0"&&(pt.innerHTML=bo),Cn=r(W),mt=p(W,"P",{"data-svelte-h":!0}),h(mt)!=="svelte-1c8p9n2"&&(mt.innerHTML=yo),jn=r(W),ht=p(W,"P",{"data-svelte-h":!0}),h(ht)!=="svelte-68lg8f"&&(ht.innerHTML=vo),Fn=r(W),Y=p(W,"DIV",{class:!0});var O=C(Y);f(ze.$$.fragment,O),$n=r(O),ut=p(O,"P",{"data-svelte-h":!0}),h(ut)!=="svelte-19tzh7u"&&(ut.innerHTML=To),Jn=r(O),f(le.$$.fragment,O),xn=r(O),f(ce.$$.fragment,O),O.forEach(i),W.forEach(i),Ht=r(e),f(Ne.$$.fragment,e),Pt=r(e),k=p(e,"DIV",{class:!0});var Z=C(k);f(Be.$$.fragment,Z),Wn=r(Z),ft=p(Z,"P",{"data-svelte-h":!0}),h(ft)!=="svelte-e1970j"&&(ft.textContent=So),Zn=r(Z),gt=p(Z,"P",{"data-svelte-h":!0}),h(gt)!=="svelte-1g4oek0"&&(gt.innerHTML=wo),Vn=r(Z),_t=p(Z,"P",{"data-svelte-h":!0}),h(_t)!=="svelte-1c8p9n2"&&(_t.innerHTML=Mo),Xn=r(Z),bt=p(Z,"P",{"data-svelte-h":!0}),h(bt)!=="svelte-68lg8f"&&(bt.innerHTML=Uo),Gn=r(Z),L=p(Z,"DIV",{class:!0});var K=C(L);f(Ie.$$.fragment,K),zn=r(K),yt=p(K,"P",{"data-svelte-h":!0}),h(yt)!=="svelte-2vwk0u"&&(yt.innerHTML=ko),Nn=r(K),f(de.$$.fragment,K),Bn=r(K),f(pe.$$.fragment,K),K.forEach(i),Z.forEach(i),Qt=r(e),f(qe.$$.fragment,e),At=r(e),J=p(e,"DIV",{class:!0});var N=C(J);f(Re.$$.fragment,N),In=r(N),vt=p(N,"P",{"data-svelte-h":!0}),h(vt)!=="svelte-k6trrs"&&(vt.innerHTML=Co),qn=r(N),Tt=p(N,"P",{"data-svelte-h":!0}),h(Tt)!=="svelte-1c8p9n2"&&(Tt.innerHTML=jo),Rn=r(N),St=p(N,"P",{"data-svelte-h":!0}),h(St)!=="svelte-68lg8f"&&(St.innerHTML=Fo),Yn=r(N),H=p(N,"DIV",{class:!0});var ue=C(H);f(Ye.$$.fragment,ue),Ln=r(ue),wt=p(ue,"P",{"data-svelte-h":!0}),h(wt)!=="svelte-cjmloy"&&(wt.innerHTML=$o),Hn=r(ue),f(me.$$.fragment,ue),Pn=r(ue),f(he.$$.fragment,ue),ue.forEach(i),N.forEach(i),Et=r(e),Ut=p(e,"P",{}),C(Ut).forEach(i),this.h()},h(){j(t,"name","hf:doc:metadata"),j(t,"content",Eo),j(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){a(document.head,t),m(e,v,o),m(e,l,o),m(e,c,o),g(T,e,o),m(e,n,o),g(S,e,o),m(e,kt,o),m(e,fe,o),m(e,Ct,o),m(e,ge,o),m(e,jt,o),m(e,_e,o),m(e,Ft,o),m(e,be,o),m(e,$t,o),g(ye,e,o),m(e,Jt,o),m(e,ve,o),m(e,xt,o),g(Te,e,o),m(e,Wt,o),m(e,Se,o),m(e,Zt,o),g(we,e,o),m(e,Vt,o),m(e,X,o),g(Me,X,null),a(X,Ot),a(X,Qe),a(X,Kt),a(X,Ae),a(X,en),g(te,X,null),m(e,Xt,o),g(Ue,e,o),m(e,Gt,o),m(e,ee,o),g(ke,ee,null),a(ee,tn),a(ee,Ee),m(e,zt,o),g(Ce,e,o),m(e,Nt,o),m(e,F,o),g(je,F,null),a(F,nn),a(F,De),a(F,on),a(F,Oe),a(F,an),a(F,Ke),a(F,sn),a(F,I),g(Fe,I,null),a(I,rn),a(I,et),a(I,ln),g(ne,I,null),a(I,cn),g(oe,I,null),m(e,Bt,o),g($e,e,o),m(e,It,o),m(e,$,o),g(Je,$,null),a($,dn),a($,tt),a($,pn),a($,nt),a($,mn),a($,ot),a($,hn),a($,q),g(xe,q,null),a(q,un),a(q,at),a(q,fn),g(ae,q,null),a(q,gn),g(se,q,null),m(e,qt,o),g(We,e,o),m(e,Rt,o),m(e,M,o),g(Ze,M,null),a(M,_n),a(M,st),a(M,bn),a(M,rt),a(M,yn),a(M,it),a(M,vn),a(M,lt),a(M,Tn),a(M,R),g(Ve,R,null),a(R,Sn),a(R,ct),a(R,wn),g(re,R,null),a(R,Mn),g(ie,R,null),m(e,Yt,o),g(Xe,e,o),m(e,Lt,o),m(e,U,o),g(Ge,U,null),a(U,Un),a(U,dt),a(U,kn),a(U,pt),a(U,Cn),a(U,mt),a(U,jn),a(U,ht),a(U,Fn),a(U,Y),g(ze,Y,null),a(Y,$n),a(Y,ut),a(Y,Jn),g(le,Y,null),a(Y,xn),g(ce,Y,null),m(e,Ht,o),g(Ne,e,o),m(e,Pt,o),m(e,k,o),g(Be,k,null),a(k,Wn),a(k,ft),a(k,Zn),a(k,gt),a(k,Vn),a(k,_t),a(k,Xn),a(k,bt),a(k,Gn),a(k,L),g(Ie,L,null),a(L,zn),a(L,yt),a(L,Nn),g(de,L,null),a(L,Bn),g(pe,L,null),m(e,Qt,o),g(qe,e,o),m(e,At,o),m(e,J,o),g(Re,J,null),a(J,In),a(J,vt),a(J,qn),a(J,Tt),a(J,Rn),a(J,St),a(J,Yn),a(J,H),g(Ye,H,null),a(H,Ln),a(H,wt),a(H,Hn),g(me,H,null),a(H,Pn),g(he,H,null),m(e,Et,o),m(e,Ut,o),Dt=!0},p(e,[o]){const Q={};o&2&&(Q.$$scope={dirty:o,ctx:e}),te.$set(Q);const Le={};o&2&&(Le.$$scope={dirty:o,ctx:e}),ne.$set(Le);const G={};o&2&&(G.$$scope={dirty:o,ctx:e}),oe.$set(G);const A={};o&2&&(A.$$scope={dirty:o,ctx:e}),ae.$set(A);const z={};o&2&&(z.$$scope={dirty:o,ctx:e}),se.$set(z);const E={};o&2&&(E.$$scope={dirty:o,ctx:e}),re.$set(E);const x={};o&2&&(x.$$scope={dirty:o,ctx:e}),ie.$set(x);const D={};o&2&&(D.$$scope={dirty:o,ctx:e}),le.$set(D);const W={};o&2&&(W.$$scope={dirty:o,ctx:e}),ce.$set(W);const O={};o&2&&(O.$$scope={dirty:o,ctx:e}),de.$set(O);const Z={};o&2&&(Z.$$scope={dirty:o,ctx:e}),pe.$set(Z);const K={};o&2&&(K.$$scope={dirty:o,ctx:e}),me.$set(K);const N={};o&2&&(N.$$scope={dirty:o,ctx:e}),he.$set(N)},i(e){Dt||(_(T.$$.fragment,e),_(S.$$.fragment,e),_(ye.$$.fragment,e),_(Te.$$.fragment,e),_(we.$$.fragment,e),_(Me.$$.fragment,e),_(te.$$.fragment,e),_(Ue.$$.fragment,e),_(ke.$$.fragment,e),_(Ce.$$.fragment,e),_(je.$$.fragment,e),_(Fe.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_($e.$$.fragment,e),_(Je.$$.fragment,e),_(xe.$$.fragment,e),_(ae.$$.fragment,e),_(se.$$.fragment,e),_(We.$$.fragment,e),_(Ze.$$.fragment,e),_(Ve.$$.fragment,e),_(re.$$.fragment,e),_(ie.$$.fragment,e),_(Xe.$$.fragment,e),_(Ge.$$.fragment,e),_(ze.$$.fragment,e),_(le.$$.fragment,e),_(ce.$$.fragment,e),_(Ne.$$.fragment,e),_(Be.$$.fragment,e),_(Ie.$$.fragment,e),_(de.$$.fragment,e),_(pe.$$.fragment,e),_(qe.$$.fragment,e),_(Re.$$.fragment,e),_(Ye.$$.fragment,e),_(me.$$.fragment,e),_(he.$$.fragment,e),Dt=!0)},o(e){b(T.$$.fragment,e),b(S.$$.fragment,e),b(ye.$$.fragment,e),b(Te.$$.fragment,e),b(we.$$.fragment,e),b(Me.$$.fragment,e),b(te.$$.fragment,e),b(Ue.$$.fragment,e),b(ke.$$.fragment,e),b(Ce.$$.fragment,e),b(je.$$.fragment,e),b(Fe.$$.fragment,e),b(ne.$$.fragment,e),b(oe.$$.fragment,e),b($e.$$.fragment,e),b(Je.$$.fragment,e),b(xe.$$.fragment,e),b(ae.$$.fragment,e),b(se.$$.fragment,e),b(We.$$.fragment,e),b(Ze.$$.fragment,e),b(Ve.$$.fragment,e),b(re.$$.fragment,e),b(ie.$$.fragment,e),b(Xe.$$.fragment,e),b(Ge.$$.fragment,e),b(ze.$$.fragment,e),b(le.$$.fragment,e),b(ce.$$.fragment,e),b(Ne.$$.fragment,e),b(Be.$$.fragment,e),b(Ie.$$.fragment,e),b(de.$$.fragment,e),b(pe.$$.fragment,e),b(qe.$$.fragment,e),b(Re.$$.fragment,e),b(Ye.$$.fragment,e),b(me.$$.fragment,e),b(he.$$.fragment,e),Dt=!1},d(e){e&&(i(v),i(l),i(c),i(n),i(kt),i(fe),i(Ct),i(ge),i(jt),i(_e),i(Ft),i(be),i($t),i(Jt),i(ve),i(xt),i(Wt),i(Se),i(Zt),i(Vt),i(X),i(Xt),i(Gt),i(ee),i(zt),i(Nt),i(F),i(Bt),i(It),i($),i(qt),i(Rt),i(M),i(Yt),i(Lt),i(U),i(Ht),i(Pt),i(k),i(Qt),i(At),i(J),i(Et),i(Ut)),i(t),y(T,e),y(S,e),y(ye,e),y(Te,e),y(we,e),y(Me),y(te),y(Ue,e),y(ke),y(Ce,e),y(je),y(Fe),y(ne),y(oe),y($e,e),y(Je),y(xe),y(ae),y(se),y(We,e),y(Ze),y(Ve),y(re),y(ie),y(Xe,e),y(Ge),y(ze),y(le),y(ce),y(Ne,e),y(Be),y(Ie),y(de),y(pe),y(qe,e),y(Re),y(Ye),y(me),y(he)}}}const Eo='{"title":"UniSpeech-SAT","local":"unispeech-sat","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"UniSpeechSatConfig","local":"transformers.UniSpeechSatConfig","sections":[],"depth":2},{"title":"UniSpeechSat specific outputs","local":"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput","sections":[],"depth":2},{"title":"UniSpeechSatModel","local":"transformers.UniSpeechSatModel","sections":[],"depth":2},{"title":"UniSpeechSatForCTC","local":"transformers.UniSpeechSatForCTC","sections":[],"depth":2},{"title":"UniSpeechSatForSequenceClassification","local":"transformers.UniSpeechSatForSequenceClassification","sections":[],"depth":2},{"title":"UniSpeechSatForAudioFrameClassification","local":"transformers.UniSpeechSatForAudioFrameClassification","sections":[],"depth":2},{"title":"UniSpeechSatForXVector","local":"transformers.UniSpeechSatForXVector","sections":[],"depth":2},{"title":"UniSpeechSatForPreTraining","local":"transformers.UniSpeechSatForPreTraining","sections":[],"depth":2}],"depth":1}';function Do(w){return xo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sa extends Wo{constructor(t){super(),Zo(this,t,Do,Ao,Jo,{})}}export{sa as component};
