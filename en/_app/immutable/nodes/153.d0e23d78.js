import{s as Ke,o as et,n as ye}from"../chunks/scheduler.9bc65507.js";import{S as tt,i as nt,g as m,s as r,r as T,A as ot,h as u,f as a,c as l,j as _e,u as M,x as y,k as be,y as c,a as d,v,d as w,t as k,w as C}from"../chunks/index.707bf1b6.js";import{T as We}from"../chunks/Tip.c2ecdbf4.js";import{D as je}from"../chunks/Docstring.17db21ae.js";import{C as Ge}from"../chunks/CodeBlock.54a9f38d.js";import{F as st,M as Oe}from"../chunks/Markdown.fef84341.js";import{E as Re}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as He}from"../chunks/Heading.342b1fa6.js";function at(j){let e,h="Example:",t,o,f;return o=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEh1YmVydE1vZGVsJTJDJTIwSHViZXJ0Q29uZmlnJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMEh1YmVydCUyMGZhY2Vib29rJTJGaHViZXJ0LWJhc2UtbHM5NjAlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwSHViZXJ0Q29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjBmcm9tJTIwdGhlJTIwZmFjZWJvb2slMkZodWJlcnQtYmFzZS1sczk2MCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwSHViZXJ0TW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> HubertModel, HubertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Hubert facebook/hubert-base-ls960 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = HubertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/hubert-base-ls960 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=m("p"),e.textContent=h,t=r(),T(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),y(e)!=="svelte-11lpom8"&&(e.textContent=h),t=l(n),M(o.$$.fragment,n)},m(n,b){d(n,e,b),d(n,t,b),v(o,n,b),f=!0},p:ye,i(n){f||(w(o.$$.fragment,n),f=!0)},o(n){k(o.$$.fragment,n),f=!1},d(n){n&&(a(e),a(t)),C(o,n)}}}function rt(j){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=h},l(t){e=u(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){d(t,e,o)},p:ye,d(t){t&&a(e)}}}function lt(j){let e,h="Example:",t,o,f;return o=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBIdWJlcnRNb2RlbCUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQWltcG9ydCUyMHNvdW5kZmlsZSUyMGFzJTIwc2YlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmh1YmVydC1sYXJnZS1sczk2MC1mdCUyMiklMEFtb2RlbCUyMCUzRCUyMEh1YmVydE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmh1YmVydC1sYXJnZS1sczk2MC1mdCUyMiklMEElMEElMEFkZWYlMjBtYXBfdG9fYXJyYXkoYmF0Y2gpJTNBJTBBJTIwJTIwJTIwJTIwc3BlZWNoJTJDJTIwXyUyMCUzRCUyMHNmLnJlYWQoYmF0Y2glNUIlMjJmaWxlJTIyJTVEKSUwQSUyMCUyMCUyMCUyMGJhdGNoJTVCJTIyc3BlZWNoJTIyJTVEJTIwJTNEJTIwc3BlZWNoJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwYmF0Y2glMEElMEElMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2R1bW15JTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBZHMlMjAlM0QlMjBkcy5tYXAobWFwX3RvX2FycmF5KSUwQSUwQWlucHV0X3ZhbHVlcyUyMCUzRCUyMHByb2Nlc3NvcihkcyU1QiUyMnNwZWVjaCUyMiU1RCU1QjAlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF92YWx1ZXMlMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG1vZGVsKGlucHV0X3ZhbHVlcykubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, HubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertModel.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`,wrap:!1}}),{c(){e=m("p"),e.textContent=h,t=r(),T(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),y(e)!=="svelte-11lpom8"&&(e.textContent=h),t=l(n),M(o.$$.fragment,n)},m(n,b){d(n,e,b),d(n,t,b),v(o,n,b),f=!0},p:ye,i(n){f||(w(o.$$.fragment,n),f=!0)},o(n){k(o.$$.fragment,n),f=!1},d(n){n&&(a(e),a(t)),C(o,n)}}}function it(j){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=h},l(t){e=u(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){d(t,e,o)},p:ye,d(t){t&&a(e)}}}function dt(j){let e,h="Example:",t,o,f;return o=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBIdWJlcnRGb3JDVEMlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kZW1vJTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBZGF0YXNldCUyMCUzRCUyMGRhdGFzZXQuc29ydCglMjJpZCUyMiklMEFzYW1wbGluZ19yYXRlJTIwJTNEJTIwZGF0YXNldC5mZWF0dXJlcyU1QiUyMmF1ZGlvJTIyJTVELnNhbXBsaW5nX3JhdGUlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmh1YmVydC1sYXJnZS1sczk2MC1mdCUyMiklMEFtb2RlbCUyMCUzRCUyMEh1YmVydEZvckNUQy5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZodWJlcnQtbGFyZ2UtbHM5NjAtZnQlMjIpJTBBJTBBJTIzJTIwYXVkaW8lMjBmaWxlJTIwaXMlMjBkZWNvZGVkJTIwb24lMjB0aGUlMjBmbHklMEFpbnB1dHMlMjAlM0QlMjBwcm9jZXNzb3IoZGF0YXNldCU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRHNhbXBsaW5nX3JhdGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBcHJlZGljdGVkX2lkcyUyMCUzRCUyMHRvcmNoLmFyZ21heChsb2dpdHMlMkMlMjBkaW0lM0QtMSklMEElMEElMjMlMjB0cmFuc2NyaWJlJTIwc3BlZWNoJTBBdHJhbnNjcmlwdGlvbiUyMCUzRCUyMHByb2Nlc3Nvci5iYXRjaF9kZWNvZGUocHJlZGljdGVkX2lkcyklMEF0cmFuc2NyaXB0aW9uJTVCMCU1RCUwQSUwQWlucHV0cyU1QiUyMmxhYmVscyUyMiU1RCUyMCUzRCUyMHByb2Nlc3Nvcih0ZXh0JTNEZGF0YXNldCU1QjAlNUQlNUIlMjJ0ZXh0JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBJTBBJTIzJTIwY29tcHV0ZSUyMGxvc3MlMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvc3MlMEFyb3VuZChsb3NzLml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, HubertForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">22.68</span>`,wrap:!1}}),{c(){e=m("p"),e.textContent=h,t=r(),T(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),y(e)!=="svelte-11lpom8"&&(e.textContent=h),t=l(n),M(o.$$.fragment,n)},m(n,b){d(n,e,b),d(n,t,b),v(o,n,b),f=!0},p:ye,i(n){f||(w(o.$$.fragment,n),f=!0)},o(n){k(o.$$.fragment,n),f=!1},d(n){n&&(a(e),a(t)),C(o,n)}}}function ct(j){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=h},l(t){e=u(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){d(t,e,o)},p:ye,d(t){t&&a(e)}}}function pt(j){let e,h="Example:",t,o,f;return o=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTJDJTIwSHViZXJ0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2RlbW8lMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEFkYXRhc2V0JTIwJTNEJTIwZGF0YXNldC5zb3J0KCUyMmlkJTIyKSUwQXNhbXBsaW5nX3JhdGUlMjAlM0QlMjBkYXRhc2V0LmZlYXR1cmVzJTVCJTIyYXVkaW8lMjIlNUQuc2FtcGxpbmdfcmF0ZSUwQSUwQWZlYXR1cmVfZXh0cmFjdG9yJTIwJTNEJTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IuZnJvbV9wcmV0cmFpbmVkKCUyMnN1cGVyYiUyRmh1YmVydC1iYXNlLXN1cGVyYi1rcyUyMiklMEFtb2RlbCUyMCUzRCUyMEh1YmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnN1cGVyYiUyRmh1YmVydC1iYXNlLXN1cGVyYi1rcyUyMiklMEElMEElMjMlMjBhdWRpbyUyMGZpbGUlMjBpcyUyMGRlY29kZWQlMjBvbiUyMHRoZSUyMGZseSUwQWlucHV0cyUyMCUzRCUyMGZlYXR1cmVfZXh0cmFjdG9yKGRhdGFzZXQlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHNhbXBsaW5nX3JhdGUlM0RzYW1wbGluZ19yYXRlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZHMlMjAlM0QlMjB0b3JjaC5hcmdtYXgobG9naXRzJTJDJTIwZGltJTNELTEpLml0ZW0oKSUwQXByZWRpY3RlZF9sYWJlbCUyMCUzRCUyMG1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9jbGFzc19pZHMlNUQlMEFwcmVkaWN0ZWRfbGFiZWwlMEElMEElMjMlMjBjb21wdXRlJTIwbG9zcyUyMC0lMjB0YXJnZXRfbGFiZWwlMjBpcyUyMGUuZy4lMjAlMjJkb3duJTIyJTBBdGFyZ2V0X2xhYmVsJTIwJTNEJTIwbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCMCU1RCUwQWlucHV0cyU1QiUyMmxhYmVscyUyMiU1RCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUJtb2RlbC5jb25maWcubGFiZWwyaWQlNUJ0YXJnZXRfbGFiZWwlNUQlNUQpJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb3NzJTBBcm91bmQobG9zcy5pdGVtKCklMkMlMjAyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, HubertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;superb/hubert-base-superb-ks&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;superb/hubert-base-superb-ks&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;_unknown_&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">8.53</span>`,wrap:!1}}),{c(){e=m("p"),e.textContent=h,t=r(),T(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),y(e)!=="svelte-11lpom8"&&(e.textContent=h),t=l(n),M(o.$$.fragment,n)},m(n,b){d(n,e,b),d(n,t,b),v(o,n,b),f=!0},p:ye,i(n){f||(w(o.$$.fragment,n),f=!0)},o(n){k(o.$$.fragment,n),f=!1},d(n){n&&(a(e),a(t)),C(o,n)}}}function mt(j){let e,h,t,o,f,n,b=`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in <a href="https://arxiv.org/abs/2106.07447" rel="nofollow">HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units</a> by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`,D,F,W=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,O,x,z=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,K,i,J,q,R,Je='The <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertModel">HubertModel</a> forward method, overrides the <code>__call__</code> special method.',le,S,Te,I,we,V,te,Z,X,N,Q,ce=`Hubert Model with a <code>language modeling</code> head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in <a href="https://arxiv.org/abs/2106.07447" rel="nofollow">HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units</a> by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`,ie,B,pe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,me,oe,Fe=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,ue,G,he,se,P,E='The <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a> forward method, overrides the <code>__call__</code> special method.',L,ne,ae,re,s,_,Y,U,Me,g,$,fe=`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`,A,ee,qe=`Hubert was proposed in <a href="https://arxiv.org/abs/2106.07447" rel="nofollow">HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units</a> by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`,ze,xe,Qe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,Xe,Ne,Pe=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Ee,ve,Ie,Le,Be,Ae='The <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertForSequenceClassification">HubertForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Ye,Ue,Se,Ze,Ve;return e=new He({props:{title:"HubertModel",local:"transformers.HubertModel",headingTag:"h2"}}),o=new je({props:{name:"class transformers.HubertModel",anchor:"transformers.HubertModel",parameters:[{name:"config",val:": HubertConfig"}],parametersDescription:[{anchor:"transformers.HubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L968"}}),J=new je({props:{name:"forward",anchor:"transformers.HubertModel.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"mask_time_indices",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.HubertModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1037",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
`}}),S=new We({props:{$$slots:{default:[rt]},$$scope:{ctx:j}}}),I=new Re({props:{anchor:"transformers.HubertModel.forward.example",$$slots:{default:[lt]},$$scope:{ctx:j}}}),V=new He({props:{title:"HubertForCTC",local:"transformers.HubertForCTC",headingTag:"h2"}}),X=new je({props:{name:"class transformers.HubertForCTC",anchor:"transformers.HubertForCTC",parameters:[{name:"config",val:""},{name:"target_lang",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.HubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1111"}}),he=new je({props:{name:"forward",anchor:"transformers.HubertForCTC.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.HubertForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.HubertForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1188",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
`}}),ne=new We({props:{$$slots:{default:[it]},$$scope:{ctx:j}}}),re=new Re({props:{anchor:"transformers.HubertForCTC.forward.example",$$slots:{default:[dt]},$$scope:{ctx:j}}}),_=new He({props:{title:"HubertForSequenceClassification",local:"transformers.HubertForSequenceClassification",headingTag:"h2"}}),Me=new je({props:{name:"class transformers.HubertForSequenceClassification",anchor:"transformers.HubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1268"}}),Ie=new je({props:{name:"forward",anchor:"transformers.HubertForSequenceClassification.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <code>.flac</code> or <code>.wav</code> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.HubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1321",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
`}}),Ue=new We({props:{$$slots:{default:[ct]},$$scope:{ctx:j}}}),Ze=new Re({props:{anchor:"transformers.HubertForSequenceClassification.forward.example",$$slots:{default:[pt]},$$scope:{ctx:j}}}),{c(){T(e.$$.fragment),h=r(),t=m("div"),T(o.$$.fragment),f=r(),n=m("p"),n.innerHTML=b,D=r(),F=m("p"),F.innerHTML=W,O=r(),x=m("p"),x.innerHTML=z,K=r(),i=m("div"),T(J.$$.fragment),q=r(),R=m("p"),R.innerHTML=Je,le=r(),T(S.$$.fragment),Te=r(),T(I.$$.fragment),we=r(),T(V.$$.fragment),te=r(),Z=m("div"),T(X.$$.fragment),N=r(),Q=m("p"),Q.innerHTML=ce,ie=r(),B=m("p"),B.innerHTML=pe,me=r(),oe=m("p"),oe.innerHTML=Fe,ue=r(),G=m("div"),T(he.$$.fragment),se=r(),P=m("p"),P.innerHTML=E,L=r(),T(ne.$$.fragment),ae=r(),T(re.$$.fragment),s=r(),T(_.$$.fragment),Y=r(),U=m("div"),T(Me.$$.fragment),g=r(),$=m("p"),$.textContent=fe,A=r(),ee=m("p"),ee.innerHTML=qe,ze=r(),xe=m("p"),xe.innerHTML=Qe,Xe=r(),Ne=m("p"),Ne.innerHTML=Pe,Ee=r(),ve=m("div"),T(Ie.$$.fragment),Le=r(),Be=m("p"),Be.innerHTML=Ae,Ye=r(),T(Ue.$$.fragment),Se=r(),T(Ze.$$.fragment),this.h()},l(p){M(e.$$.fragment,p),h=l(p),t=u(p,"DIV",{class:!0});var H=_e(t);M(o.$$.fragment,H),f=l(H),n=u(H,"P",{"data-svelte-h":!0}),y(n)!=="svelte-n0pdh6"&&(n.innerHTML=b),D=l(H),F=u(H,"P",{"data-svelte-h":!0}),y(F)!=="svelte-1c8p9n2"&&(F.innerHTML=W),O=l(H),x=u(H,"P",{"data-svelte-h":!0}),y(x)!=="svelte-68lg8f"&&(x.innerHTML=z),K=l(H),i=u(H,"DIV",{class:!0});var ke=_e(i);M(J.$$.fragment,ke),q=l(ke),R=u(ke,"P",{"data-svelte-h":!0}),y(R)!=="svelte-n2efan"&&(R.innerHTML=Je),le=l(ke),M(S.$$.fragment,ke),Te=l(ke),M(I.$$.fragment,ke),ke.forEach(a),H.forEach(a),we=l(p),M(V.$$.fragment,p),te=l(p),Z=u(p,"DIV",{class:!0});var ge=_e(Z);M(X.$$.fragment,ge),N=l(ge),Q=u(ge,"P",{"data-svelte-h":!0}),y(Q)!=="svelte-x5vqgb"&&(Q.innerHTML=ce),ie=l(ge),B=u(ge,"P",{"data-svelte-h":!0}),y(B)!=="svelte-1c8p9n2"&&(B.innerHTML=pe),me=l(ge),oe=u(ge,"P",{"data-svelte-h":!0}),y(oe)!=="svelte-68lg8f"&&(oe.innerHTML=Fe),ue=l(ge),G=u(ge,"DIV",{class:!0});var Ce=_e(G);M(he.$$.fragment,Ce),se=l(Ce),P=u(Ce,"P",{"data-svelte-h":!0}),y(P)!=="svelte-lno879"&&(P.innerHTML=E),L=l(Ce),M(ne.$$.fragment,Ce),ae=l(Ce),M(re.$$.fragment,Ce),Ce.forEach(a),ge.forEach(a),s=l(p),M(_.$$.fragment,p),Y=l(p),U=u(p,"DIV",{class:!0});var de=_e(U);M(Me.$$.fragment,de),g=l(de),$=u(de,"P",{"data-svelte-h":!0}),y($)!=="svelte-1c2qyra"&&($.textContent=fe),A=l(de),ee=u(de,"P",{"data-svelte-h":!0}),y(ee)!=="svelte-1y6szhx"&&(ee.innerHTML=qe),ze=l(de),xe=u(de,"P",{"data-svelte-h":!0}),y(xe)!=="svelte-1c8p9n2"&&(xe.innerHTML=Qe),Xe=l(de),Ne=u(de,"P",{"data-svelte-h":!0}),y(Ne)!=="svelte-68lg8f"&&(Ne.innerHTML=Pe),Ee=l(de),ve=u(de,"DIV",{class:!0});var $e=_e(ve);M(Ie.$$.fragment,$e),Le=l($e),Be=u($e,"P",{"data-svelte-h":!0}),y(Be)!=="svelte-13sbc9v"&&(Be.innerHTML=Ae),Ye=l($e),M(Ue.$$.fragment,$e),Se=l($e),M(Ze.$$.fragment,$e),$e.forEach(a),de.forEach(a),this.h()},h(){be(i,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),be(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),be(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),be(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),be(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),be(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(p,H){v(e,p,H),d(p,h,H),d(p,t,H),v(o,t,null),c(t,f),c(t,n),c(t,D),c(t,F),c(t,O),c(t,x),c(t,K),c(t,i),v(J,i,null),c(i,q),c(i,R),c(i,le),v(S,i,null),c(i,Te),v(I,i,null),d(p,we,H),v(V,p,H),d(p,te,H),d(p,Z,H),v(X,Z,null),c(Z,N),c(Z,Q),c(Z,ie),c(Z,B),c(Z,me),c(Z,oe),c(Z,ue),c(Z,G),v(he,G,null),c(G,se),c(G,P),c(G,L),v(ne,G,null),c(G,ae),v(re,G,null),d(p,s,H),v(_,p,H),d(p,Y,H),d(p,U,H),v(Me,U,null),c(U,g),c(U,$),c(U,A),c(U,ee),c(U,ze),c(U,xe),c(U,Xe),c(U,Ne),c(U,Ee),c(U,ve),v(Ie,ve,null),c(ve,Le),c(ve,Be),c(ve,Ye),v(Ue,ve,null),c(ve,Se),v(Ze,ve,null),Ve=!0},p(p,H){const ke={};H&2&&(ke.$$scope={dirty:H,ctx:p}),S.$set(ke);const ge={};H&2&&(ge.$$scope={dirty:H,ctx:p}),I.$set(ge);const Ce={};H&2&&(Ce.$$scope={dirty:H,ctx:p}),ne.$set(Ce);const de={};H&2&&(de.$$scope={dirty:H,ctx:p}),re.$set(de);const $e={};H&2&&($e.$$scope={dirty:H,ctx:p}),Ue.$set($e);const De={};H&2&&(De.$$scope={dirty:H,ctx:p}),Ze.$set(De)},i(p){Ve||(w(e.$$.fragment,p),w(o.$$.fragment,p),w(J.$$.fragment,p),w(S.$$.fragment,p),w(I.$$.fragment,p),w(V.$$.fragment,p),w(X.$$.fragment,p),w(he.$$.fragment,p),w(ne.$$.fragment,p),w(re.$$.fragment,p),w(_.$$.fragment,p),w(Me.$$.fragment,p),w(Ie.$$.fragment,p),w(Ue.$$.fragment,p),w(Ze.$$.fragment,p),Ve=!0)},o(p){k(e.$$.fragment,p),k(o.$$.fragment,p),k(J.$$.fragment,p),k(S.$$.fragment,p),k(I.$$.fragment,p),k(V.$$.fragment,p),k(X.$$.fragment,p),k(he.$$.fragment,p),k(ne.$$.fragment,p),k(re.$$.fragment,p),k(_.$$.fragment,p),k(Me.$$.fragment,p),k(Ie.$$.fragment,p),k(Ue.$$.fragment,p),k(Ze.$$.fragment,p),Ve=!1},d(p){p&&(a(h),a(t),a(we),a(te),a(Z),a(s),a(Y),a(U)),C(e,p),C(o),C(J),C(S),C(I),C(V,p),C(X),C(he),C(ne),C(re),C(_,p),C(Me),C(Ie),C(Ue),C(Ze)}}}function ut(j){let e,h;return e=new Oe({props:{$$slots:{default:[mt]},$$scope:{ctx:j}}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,o){v(e,t,o),h=!0},p(t,o){const f={};o&2&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){h||(w(e.$$.fragment,t),h=!0)},o(t){k(e.$$.fragment,t),h=!1},d(t){C(e,t)}}}function ht(j){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,f="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,b,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,F,W,O=`<li>a single Tensor with <code>input_values</code> only and nothing else: <code>model(input_values)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_values, attention_mask])</code> or <code>model([input_values, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_values&quot;: input_values, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,x,z,K=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=m("p"),e.innerHTML=h,t=r(),o=m("ul"),o.innerHTML=f,n=r(),b=m("p"),b.innerHTML=D,F=r(),W=m("ul"),W.innerHTML=O,x=r(),z=m("p"),z.innerHTML=K},l(i){e=u(i,"P",{"data-svelte-h":!0}),y(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=l(i),o=u(i,"UL",{"data-svelte-h":!0}),y(o)!=="svelte-qm1t26"&&(o.innerHTML=f),n=l(i),b=u(i,"P",{"data-svelte-h":!0}),y(b)!=="svelte-1v9qsc5"&&(b.innerHTML=D),F=l(i),W=u(i,"UL",{"data-svelte-h":!0}),y(W)!=="svelte-1x9eg56"&&(W.innerHTML=O),x=l(i),z=u(i,"P",{"data-svelte-h":!0}),y(z)!=="svelte-1an3odd"&&(z.innerHTML=K)},m(i,J){d(i,e,J),d(i,t,J),d(i,o,J),d(i,n,J),d(i,b,J),d(i,F,J),d(i,W,J),d(i,x,J),d(i,z,J)},p:ye,d(i){i&&(a(e),a(t),a(o),a(n),a(b),a(F),a(W),a(x),a(z))}}}function ft(j){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=h},l(t){e=u(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){d(t,e,o)},p:ye,d(t){t&&a(e)}}}function gt(j){let e,h="Example:",t,o,f;return o=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBURkh1YmVydE1vZGVsJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwc291bmRmaWxlJTIwYXMlMjBzZiUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGaHViZXJ0LWxhcmdlLWxzOTYwLWZ0JTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZIdWJlcnRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZodWJlcnQtbGFyZ2UtbHM5NjAtZnQlMjIpJTBBJTBBJTBBZGVmJTIwbWFwX3RvX2FycmF5KGJhdGNoKSUzQSUwQSUyMCUyMCUyMCUyMHNwZWVjaCUyQyUyMF8lMjAlM0QlMjBzZi5yZWFkKGJhdGNoJTVCJTIyZmlsZSUyMiU1RCklMEElMjAlMjAlMjAlMjBiYXRjaCU1QiUyMnNwZWVjaCUyMiU1RCUyMCUzRCUyMHNwZWVjaCUwQSUyMCUyMCUyMCUyMHJldHVybiUyMGJhdGNoJTBBJTBBJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kdW1teSUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQWRzJTIwJTNEJTIwZHMubWFwKG1hcF90b19hcnJheSklMEElMEFpbnB1dF92YWx1ZXMlMjAlM0QlMjBwcm9jZXNzb3IoZHMlNUIlMjJzcGVlY2glMjIlNUQlNUIwJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMikuaW5wdXRfdmFsdWVzJTIwJTIwJTIzJTIwQmF0Y2glMjBzaXplJTIwMSUwQWhpZGRlbl9zdGF0ZXMlMjAlM0QlMjBtb2RlbChpbnB1dF92YWx1ZXMpLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFHubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFHubertModel.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`,wrap:!1}}),{c(){e=m("p"),e.textContent=h,t=r(),T(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),y(e)!=="svelte-11lpom8"&&(e.textContent=h),t=l(n),M(o.$$.fragment,n)},m(n,b){d(n,e,b),d(n,t,b),v(o,n,b),f=!0},p:ye,i(n){f||(w(o.$$.fragment,n),f=!0)},o(n){k(o.$$.fragment,n),f=!1},d(n){n&&(a(e),a(t)),C(o,n)}}}function _t(j){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,f="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,b,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,F,W,O=`<li>a single Tensor with <code>input_values</code> only and nothing else: <code>model(input_values)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_values, attention_mask])</code> or <code>model([input_values, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_values&quot;: input_values, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,x,z,K=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=m("p"),e.innerHTML=h,t=r(),o=m("ul"),o.innerHTML=f,n=r(),b=m("p"),b.innerHTML=D,F=r(),W=m("ul"),W.innerHTML=O,x=r(),z=m("p"),z.innerHTML=K},l(i){e=u(i,"P",{"data-svelte-h":!0}),y(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),t=l(i),o=u(i,"UL",{"data-svelte-h":!0}),y(o)!=="svelte-qm1t26"&&(o.innerHTML=f),n=l(i),b=u(i,"P",{"data-svelte-h":!0}),y(b)!=="svelte-1v9qsc5"&&(b.innerHTML=D),F=l(i),W=u(i,"UL",{"data-svelte-h":!0}),y(W)!=="svelte-1x9eg56"&&(W.innerHTML=O),x=l(i),z=u(i,"P",{"data-svelte-h":!0}),y(z)!=="svelte-1an3odd"&&(z.innerHTML=K)},m(i,J){d(i,e,J),d(i,t,J),d(i,o,J),d(i,n,J),d(i,b,J),d(i,F,J),d(i,W,J),d(i,x,J),d(i,z,J)},p:ye,d(i){i&&(a(e),a(t),a(o),a(n),a(b),a(F),a(W),a(x),a(z))}}}function bt(j){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=h},l(t){e=u(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,o){d(t,e,o)},p:ye,d(t){t&&a(e)}}}function yt(j){let e,h="Example:",t,o,f;return o=new Ge({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Byb2Nlc3NvciUyQyUyMFRGSHViZXJ0Rm9yQ1RDJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwc291bmRmaWxlJTIwYXMlMjBzZiUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGaHViZXJ0LWxhcmdlLWxzOTYwLWZ0JTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZIdWJlcnRGb3JDVEMuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGaHViZXJ0LWxhcmdlLWxzOTYwLWZ0JTIyKSUwQSUwQSUwQWRlZiUyMG1hcF90b19hcnJheShiYXRjaCklM0ElMEElMjAlMjAlMjAlMjBzcGVlY2glMkMlMjBfJTIwJTNEJTIwc2YucmVhZChiYXRjaCU1QiUyMmZpbGUlMjIlNUQpJTBBJTIwJTIwJTIwJTIwYmF0Y2glNUIlMjJzcGVlY2glMjIlNUQlMjAlM0QlMjBzcGVlY2glMEElMjAlMjAlMjAlMjByZXR1cm4lMjBiYXRjaCUwQSUwQSUwQWRzJTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZHVtbXklMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEFkcyUyMCUzRCUyMGRzLm1hcChtYXBfdG9fYXJyYXkpJTBBJTBBaW5wdXRfdmFsdWVzJTIwJTNEJTIwcHJvY2Vzc29yKGRzJTVCJTIyc3BlZWNoJTIyJTVEJTVCMCU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpLmlucHV0X3ZhbHVlcyUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUyMDElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbChpbnB1dF92YWx1ZXMpLmxvZ2l0cyUwQXByZWRpY3RlZF9pZHMlMjAlM0QlMjB0Zi5hcmdtYXgobG9naXRzJTJDJTIwYXhpcyUzRC0xKSUwQSUwQXRyYW5zY3JpcHRpb24lMjAlM0QlMjBwcm9jZXNzb3IuZGVjb2RlKHByZWRpY3RlZF9pZHMlNUIwJTVEKSUwQSUwQSUyMyUyMGNvbXB1dGUlMjBsb3NzJTBBdGFyZ2V0X3RyYW5zY3JpcHRpb24lMjAlM0QlMjAlMjJBJTIwTUFOJTIwU0FJRCUyMFRPJTIwVEhFJTIwVU5JVkVSU0UlMjBTSVIlMjBJJTIwRVhJU1QlMjIlMEElMEElMjMlMjBQYXNzJTIwdGhlJTIwdHJhbnNjcmlwdGlvbiUyMGFzJTIwdGV4dCUyMHRvJTIwZW5jb2RlJTIwbGFiZWxzJTBBbGFiZWxzJTIwJTNEJTIwcHJvY2Vzc29yKHRleHQlM0R0cmFuc2NyaXB0aW9uJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMikuaW5wdXRfdmFsdWVzJTBBJTBBbG9zcyUyMCUzRCUyMG1vZGVsKGlucHV0X3ZhbHVlcyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFHubertForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFHubertForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_values).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = tf.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.decode(predicted_ids[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_transcription = <span class="hljs-string">&quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Pass the transcription as text to encode labels</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor(text=transcription, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`,wrap:!1}}),{c(){e=m("p"),e.textContent=h,t=r(),T(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),y(e)!=="svelte-11lpom8"&&(e.textContent=h),t=l(n),M(o.$$.fragment,n)},m(n,b){d(n,e,b),d(n,t,b),v(o,n,b),f=!0},p:ye,i(n){f||(w(o.$$.fragment,n),f=!0)},o(n){k(o.$$.fragment,n),f=!1},d(n){n&&(a(e),a(t)),C(o,n)}}}function Tt(j){let e,h,t,o,f,n,b="The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top.",D,F,W=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,O,x,z=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,K,i,J,q,R,Je,le,S='The <a href="/docs/transformers/main/en/model_doc/hubert#transformers.TFHubertModel">TFHubertModel</a> forward method, overrides the <code>__call__</code> special method.',Te,I,we,V,te,Z,X,N,Q,ce,ie,B="TFHubert Model with a <code>language modeling</code> head on top for Connectionist Temporal Classification (CTC).",pe,me,oe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Fe,ue,G=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,he,se,P,E,L,ne,ae,re='The <a href="/docs/transformers/main/en/model_doc/hubert#transformers.TFHubertForCTC">TFHubertForCTC</a> forward method, overrides the <code>__call__</code> special method.',s,_,Y,U,Me;return e=new He({props:{title:"TFHubertModel",local:"transformers.TFHubertModel",headingTag:"h2"}}),o=new je({props:{name:"class transformers.TFHubertModel",anchor:"transformers.TFHubertModel",parameters:[{name:"config",val:": HubertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFHubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1431"}}),i=new We({props:{$$slots:{default:[ht]},$$scope:{ctx:j}}}),R=new je({props:{name:"call",anchor:"transformers.TFHubertModel.call",parameters:[{name:"input_values",val:": tf.Tensor"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"token_type_ids",val:": tf.Tensor | None = None"},{name:"position_ids",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFHubertModel.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFHubertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFHubertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFHubertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFHubertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFHubertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFHubertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFHubertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFHubertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1441",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
`}}),I=new We({props:{$$slots:{default:[ft]},$$scope:{ctx:j}}}),V=new Re({props:{anchor:"transformers.TFHubertModel.call.example",$$slots:{default:[gt]},$$scope:{ctx:j}}}),Z=new He({props:{title:"TFHubertForCTC",local:"transformers.TFHubertForCTC",headingTag:"h2"}}),Q=new je({props:{name:"class transformers.TFHubertForCTC",anchor:"transformers.TFHubertForCTC",parameters:[{name:"config",val:": HubertConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFHubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1513"}}),se=new We({props:{$$slots:{default:[_t]},$$scope:{ctx:j}}}),L=new je({props:{name:"call",anchor:"transformers.TFHubertForCTC.call",parameters:[{name:"input_values",val:": tf.Tensor"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"token_type_ids",val:": tf.Tensor | None = None"},{name:"position_ids",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFHubertForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFHubertForCTC.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFHubertForCTC.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFHubertForCTC.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFHubertForCTC.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFHubertForCTC.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFHubertForCTC.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFHubertForCTC.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFHubertForCTC.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFHubertForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1547",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
`}}),_=new We({props:{$$slots:{default:[bt]},$$scope:{ctx:j}}}),U=new Re({props:{anchor:"transformers.TFHubertForCTC.call.example",$$slots:{default:[yt]},$$scope:{ctx:j}}}),{c(){T(e.$$.fragment),h=r(),t=m("div"),T(o.$$.fragment),f=r(),n=m("p"),n.textContent=b,D=r(),F=m("p"),F.innerHTML=W,O=r(),x=m("p"),x.innerHTML=z,K=r(),T(i.$$.fragment),J=r(),q=m("div"),T(R.$$.fragment),Je=r(),le=m("p"),le.innerHTML=S,Te=r(),T(I.$$.fragment),we=r(),T(V.$$.fragment),te=r(),T(Z.$$.fragment),X=r(),N=m("div"),T(Q.$$.fragment),ce=r(),ie=m("p"),ie.innerHTML=B,pe=r(),me=m("p"),me.innerHTML=oe,Fe=r(),ue=m("p"),ue.innerHTML=G,he=r(),T(se.$$.fragment),P=r(),E=m("div"),T(L.$$.fragment),ne=r(),ae=m("p"),ae.innerHTML=re,s=r(),T(_.$$.fragment),Y=r(),T(U.$$.fragment),this.h()},l(g){M(e.$$.fragment,g),h=l(g),t=u(g,"DIV",{class:!0});var $=_e(t);M(o.$$.fragment,$),f=l($),n=u($,"P",{"data-svelte-h":!0}),y(n)!=="svelte-1241ewv"&&(n.textContent=b),D=l($),F=u($,"P",{"data-svelte-h":!0}),y(F)!=="svelte-1qaxm70"&&(F.innerHTML=W),O=l($),x=u($,"P",{"data-svelte-h":!0}),y(x)!=="svelte-1be7e3c"&&(x.innerHTML=z),K=l($),M(i.$$.fragment,$),J=l($),q=u($,"DIV",{class:!0});var fe=_e(q);M(R.$$.fragment,fe),Je=l(fe),le=u(fe,"P",{"data-svelte-h":!0}),y(le)!=="svelte-6hu5ln"&&(le.innerHTML=S),Te=l(fe),M(I.$$.fragment,fe),we=l(fe),M(V.$$.fragment,fe),fe.forEach(a),$.forEach(a),te=l(g),M(Z.$$.fragment,g),X=l(g),N=u(g,"DIV",{class:!0});var A=_e(N);M(Q.$$.fragment,A),ce=l(A),ie=u(A,"P",{"data-svelte-h":!0}),y(ie)!=="svelte-1qjnsya"&&(ie.innerHTML=B),pe=l(A),me=u(A,"P",{"data-svelte-h":!0}),y(me)!=="svelte-1qaxm70"&&(me.innerHTML=oe),Fe=l(A),ue=u(A,"P",{"data-svelte-h":!0}),y(ue)!=="svelte-1be7e3c"&&(ue.innerHTML=G),he=l(A),M(se.$$.fragment,A),P=l(A),E=u(A,"DIV",{class:!0});var ee=_e(E);M(L.$$.fragment,ee),ne=l(ee),ae=u(ee,"P",{"data-svelte-h":!0}),y(ae)!=="svelte-h9s201"&&(ae.innerHTML=re),s=l(ee),M(_.$$.fragment,ee),Y=l(ee),M(U.$$.fragment,ee),ee.forEach(a),A.forEach(a),this.h()},h(){be(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),be(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),be(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),be(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(g,$){v(e,g,$),d(g,h,$),d(g,t,$),v(o,t,null),c(t,f),c(t,n),c(t,D),c(t,F),c(t,O),c(t,x),c(t,K),v(i,t,null),c(t,J),c(t,q),v(R,q,null),c(q,Je),c(q,le),c(q,Te),v(I,q,null),c(q,we),v(V,q,null),d(g,te,$),v(Z,g,$),d(g,X,$),d(g,N,$),v(Q,N,null),c(N,ce),c(N,ie),c(N,pe),c(N,me),c(N,Fe),c(N,ue),c(N,he),v(se,N,null),c(N,P),c(N,E),v(L,E,null),c(E,ne),c(E,ae),c(E,s),v(_,E,null),c(E,Y),v(U,E,null),Me=!0},p(g,$){const fe={};$&2&&(fe.$$scope={dirty:$,ctx:g}),i.$set(fe);const A={};$&2&&(A.$$scope={dirty:$,ctx:g}),I.$set(A);const ee={};$&2&&(ee.$$scope={dirty:$,ctx:g}),V.$set(ee);const qe={};$&2&&(qe.$$scope={dirty:$,ctx:g}),se.$set(qe);const ze={};$&2&&(ze.$$scope={dirty:$,ctx:g}),_.$set(ze);const xe={};$&2&&(xe.$$scope={dirty:$,ctx:g}),U.$set(xe)},i(g){Me||(w(e.$$.fragment,g),w(o.$$.fragment,g),w(i.$$.fragment,g),w(R.$$.fragment,g),w(I.$$.fragment,g),w(V.$$.fragment,g),w(Z.$$.fragment,g),w(Q.$$.fragment,g),w(se.$$.fragment,g),w(L.$$.fragment,g),w(_.$$.fragment,g),w(U.$$.fragment,g),Me=!0)},o(g){k(e.$$.fragment,g),k(o.$$.fragment,g),k(i.$$.fragment,g),k(R.$$.fragment,g),k(I.$$.fragment,g),k(V.$$.fragment,g),k(Z.$$.fragment,g),k(Q.$$.fragment,g),k(se.$$.fragment,g),k(L.$$.fragment,g),k(_.$$.fragment,g),k(U.$$.fragment,g),Me=!1},d(g){g&&(a(h),a(t),a(te),a(X),a(N)),C(e,g),C(o),C(i),C(R),C(I),C(V),C(Z,g),C(Q),C(se),C(L),C(_),C(U)}}}function Mt(j){let e,h;return e=new Oe({props:{$$slots:{default:[Tt]},$$scope:{ctx:j}}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,o){v(e,t,o),h=!0},p(t,o){const f={};o&2&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){h||(w(e.$$.fragment,t),h=!0)},o(t){k(e.$$.fragment,t),h=!1},d(t){C(e,t)}}}function vt(j){let e,h,t,o,f,n,b,D,F,W=`Hubert was proposed in <a href="https://arxiv.org/abs/2106.07447" rel="nofollow">HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units</a> by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`,O,x,z="The abstract from the paper is the following:",K,i,J=`<em>Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
multiple sound units in each input utterance, (2) there is no lexicon of input sound units during the pre-training
phase, and (3) sound units have variable lengths with no explicit segmentation. To deal with these three problems, we
propose the Hidden-Unit BERT (HuBERT) approach for self-supervised speech representation learning, which utilizes an
offline clustering step to provide aligned target labels for a BERT-like prediction loss. A key ingredient of our
approach is applying the prediction loss over the masked regions only, which forces the model to learn a combined
acoustic and language model over the continuous inputs. HuBERT relies primarily on the consistency of the unsupervised
clustering step rather than the intrinsic quality of the assigned cluster labels. Starting with a simple k-means
teacher of 100 clusters, and using two iterations of clustering, the HuBERT model either matches or improves upon the
state-of-the-art wav2vec 2.0 performance on the Librispeech (960h) and Libri-light (60,000h) benchmarks with 10min, 1h,
10h, 100h, and 960h fine-tuning subsets. Using a 1B parameter model, HuBERT shows up to 19% and 13% relative WER
reduction on the more challenging dev-other and test-other evaluation subsets.</em>`,q,R,Je='This model was contributed by <a href="https://huggingface.co/patrickvonplaten" rel="nofollow">patrickvonplaten</a>.',le,S,Te,I,we=`<li>Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal.</li> <li>Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>.</li>`,V,te,Z,X,N='<li><a href="../tasks/audio_classification">Audio classification task guide</a></li> <li><a href="../tasks/asr">Automatic speech recognition task guide</a></li>',Q,ce,ie,B,pe,me,oe,Fe=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>. It is used to instantiate an
Hubert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Hubert
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">facebook/hubert-base-ls960</a> architecture.`,ue,G,he=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,se,P,E,L,ne,ae,re;return f=new He({props:{title:"Hubert",local:"hubert",headingTag:"h1"}}),b=new He({props:{title:"Overview",local:"overview",headingTag:"h2"}}),S=new He({props:{title:"Usage tips",local:"usage-tips",headingTag:"h1"}}),te=new He({props:{title:"Resources",local:"resources",headingTag:"h2"}}),ce=new He({props:{title:"HubertConfig",local:"transformers.HubertConfig",headingTag:"h2"}}),pe=new je({props:{name:"class transformers.HubertConfig",anchor:"transformers.HubertConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_layer_norm",val:" = True"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.HubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Hubert model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>. Vocabulary size of the model. Defines the different
tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.HubertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.HubertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.HubertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.HubertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.HubertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.HubertConfig.hidden_dropout(float,",description:`<strong>hidden_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout(float,"},{anchor:"transformers.HubertConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.HubertConfig.attention_dropout(float,",description:`<strong>attention_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout(float,"},{anchor:"transformers.HubertConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.HubertConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"layerdrop"},{anchor:"transformers.HubertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.HubertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.HubertConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.HubertConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.HubertConfig.feat_proj_layer_norm",description:`<strong>feat_proj_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply LayerNorm to the output of the feature encoder.`,name:"feat_proj_layer_norm"},{anchor:"transformers.HubertConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.HubertConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.HubertConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.HubertConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.HubertConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.HubertConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.HubertConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.HubertConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether do apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.HubertConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.HubertConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.HubertConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.HubertConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.HubertConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.HubertConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.HubertConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.HubertConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.HubertConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.HubertConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertForSequenceClassification">HubertForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.HubertConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/hubert/configuration_hubert.py#L32"}}),P=new Re({props:{anchor:"transformers.HubertConfig.example",$$slots:{default:[at]},$$scope:{ctx:j}}}),L=new st({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Mt],pytorch:[ut]},$$scope:{ctx:j}}}),{c(){e=m("meta"),h=r(),t=m("p"),o=r(),T(f.$$.fragment),n=r(),T(b.$$.fragment),D=r(),F=m("p"),F.innerHTML=W,O=r(),x=m("p"),x.textContent=z,K=r(),i=m("p"),i.innerHTML=J,q=r(),R=m("p"),R.innerHTML=Je,le=r(),T(S.$$.fragment),Te=r(),I=m("ul"),I.innerHTML=we,V=r(),T(te.$$.fragment),Z=r(),X=m("ul"),X.innerHTML=N,Q=r(),T(ce.$$.fragment),ie=r(),B=m("div"),T(pe.$$.fragment),me=r(),oe=m("p"),oe.innerHTML=Fe,ue=r(),G=m("p"),G.innerHTML=he,se=r(),T(P.$$.fragment),E=r(),T(L.$$.fragment),ne=r(),ae=m("p"),this.h()},l(s){const _=ot("svelte-u9bgzb",document.head);e=u(_,"META",{name:!0,content:!0}),_.forEach(a),h=l(s),t=u(s,"P",{}),_e(t).forEach(a),o=l(s),M(f.$$.fragment,s),n=l(s),M(b.$$.fragment,s),D=l(s),F=u(s,"P",{"data-svelte-h":!0}),y(F)!=="svelte-1co7rq7"&&(F.innerHTML=W),O=l(s),x=u(s,"P",{"data-svelte-h":!0}),y(x)!=="svelte-vfdo9a"&&(x.textContent=z),K=l(s),i=u(s,"P",{"data-svelte-h":!0}),y(i)!=="svelte-lape3m"&&(i.innerHTML=J),q=l(s),R=u(s,"P",{"data-svelte-h":!0}),y(R)!=="svelte-1t6iyb9"&&(R.innerHTML=Je),le=l(s),M(S.$$.fragment,s),Te=l(s),I=u(s,"UL",{"data-svelte-h":!0}),y(I)!=="svelte-1o4dw62"&&(I.innerHTML=we),V=l(s),M(te.$$.fragment,s),Z=l(s),X=u(s,"UL",{"data-svelte-h":!0}),y(X)!=="svelte-11qmliz"&&(X.innerHTML=N),Q=l(s),M(ce.$$.fragment,s),ie=l(s),B=u(s,"DIV",{class:!0});var Y=_e(B);M(pe.$$.fragment,Y),me=l(Y),oe=u(Y,"P",{"data-svelte-h":!0}),y(oe)!=="svelte-h12nr7"&&(oe.innerHTML=Fe),ue=l(Y),G=u(Y,"P",{"data-svelte-h":!0}),y(G)!=="svelte-o55m63"&&(G.innerHTML=he),se=l(Y),M(P.$$.fragment,Y),Y.forEach(a),E=l(s),M(L.$$.fragment,s),ne=l(s),ae=u(s,"P",{}),_e(ae).forEach(a),this.h()},h(){be(e,"name","hf:doc:metadata"),be(e,"content",wt),be(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,_){c(document.head,e),d(s,h,_),d(s,t,_),d(s,o,_),v(f,s,_),d(s,n,_),v(b,s,_),d(s,D,_),d(s,F,_),d(s,O,_),d(s,x,_),d(s,K,_),d(s,i,_),d(s,q,_),d(s,R,_),d(s,le,_),v(S,s,_),d(s,Te,_),d(s,I,_),d(s,V,_),v(te,s,_),d(s,Z,_),d(s,X,_),d(s,Q,_),v(ce,s,_),d(s,ie,_),d(s,B,_),v(pe,B,null),c(B,me),c(B,oe),c(B,ue),c(B,G),c(B,se),v(P,B,null),d(s,E,_),v(L,s,_),d(s,ne,_),d(s,ae,_),re=!0},p(s,[_]){const Y={};_&2&&(Y.$$scope={dirty:_,ctx:s}),P.$set(Y);const U={};_&2&&(U.$$scope={dirty:_,ctx:s}),L.$set(U)},i(s){re||(w(f.$$.fragment,s),w(b.$$.fragment,s),w(S.$$.fragment,s),w(te.$$.fragment,s),w(ce.$$.fragment,s),w(pe.$$.fragment,s),w(P.$$.fragment,s),w(L.$$.fragment,s),re=!0)},o(s){k(f.$$.fragment,s),k(b.$$.fragment,s),k(S.$$.fragment,s),k(te.$$.fragment,s),k(ce.$$.fragment,s),k(pe.$$.fragment,s),k(P.$$.fragment,s),k(L.$$.fragment,s),re=!1},d(s){s&&(a(h),a(t),a(o),a(n),a(D),a(F),a(O),a(x),a(K),a(i),a(q),a(R),a(le),a(Te),a(I),a(V),a(Z),a(X),a(Q),a(ie),a(B),a(E),a(ne),a(ae)),a(e),C(f,s),C(b,s),C(S,s),C(te,s),C(ce,s),C(pe),C(P),C(L,s)}}}const wt='{"title":"Hubert","local":"hubert","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2}],"depth":1}';function kt(j){return et(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zt extends tt{constructor(e){super(),nt(this,e,kt,vt,Ke,{})}}export{Zt as component};
