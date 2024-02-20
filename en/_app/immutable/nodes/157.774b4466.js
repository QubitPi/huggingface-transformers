import{s as lt,o as mt,n as pe}from"../chunks/scheduler.9bc65507.js";import{S as ht,i as ut,g as l,s as r,r as _,A as pt,h as m,f as a,c as i,j as te,u as b,x as p,k as oe,y as h,a as s,v as y,d as v,t as T,w}from"../chunks/index.707bf1b6.js";import{T as ct}from"../chunks/Tip.c2ecdbf4.js";import{D as ue}from"../chunks/Docstring.17db21ae.js";import{C as Ee}from"../chunks/CodeBlock.54a9f38d.js";import{E as Pe}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as me}from"../chunks/Heading.342b1fa6.js";function ft(j){let o,f="Example:",d,c,u;return c=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEluZm9ybWVyQ29uZmlnJTJDJTIwSW5mb3JtZXJNb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGFuJTIwSW5mb3JtZXIlMjBjb25maWd1cmF0aW9uJTIwd2l0aCUyMDEyJTIwdGltZSUyMHN0ZXBzJTIwZm9yJTIwcHJlZGljdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBJbmZvcm1lckNvbmZpZyhwcmVkaWN0aW9uX2xlbmd0aCUzRDEyKSUwQSUwQSUyMyUyMFJhbmRvbWx5JTIwaW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBJbmZvcm1lck1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> InformerConfig, InformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an Informer configuration with 12 time steps for prediction</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = InformerConfig(prediction_length=<span class="hljs-number">12</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Randomly initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = InformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){o=l("p"),o.textContent=f,d=r(),_(c.$$.fragment)},l(n){o=m(n,"P",{"data-svelte-h":!0}),p(o)!=="svelte-11lpom8"&&(o.textContent=f),d=i(n),b(c.$$.fragment,n)},m(n,g){s(n,o,g),s(n,d,g),y(c,n,g),u=!0},p:pe,i(n){u||(v(c.$$.fragment,n),u=!0)},o(n){T(c.$$.fragment,n),u=!1},d(n){n&&(a(o),a(d)),w(c,n)}}}function gt(j){let o,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=l("p"),o.innerHTML=f},l(d){o=m(d,"P",{"data-svelte-h":!0}),p(o)!=="svelte-fincs2"&&(o.innerHTML=f)},m(d,c){s(d,o,c)},p:pe,d(d){d&&a(o)}}}function _t(j){let o,f="Examples:",d,c,u;return c=new Ee({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMGhmX2h1Yl9kb3dubG9hZCUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEluZm9ybWVyTW9kZWwlMEElMEFmaWxlJTIwJTNEJTIwaGZfaHViX2Rvd25sb2FkKCUwQSUyMCUyMCUyMCUyMHJlcG9faWQlM0QlMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGdG91cmlzbS1tb250aGx5LWJhdGNoJTIyJTJDJTIwZmlsZW5hbWUlM0QlMjJ0cmFpbi1iYXRjaC5wdCUyMiUyQyUyMHJlcG9fdHlwZSUzRCUyMmRhdGFzZXQlMjIlMEEpJTBBYmF0Y2glMjAlM0QlMjB0b3JjaC5sb2FkKGZpbGUpJTBBJTBBbW9kZWwlMjAlM0QlMjBJbmZvcm1lck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJodWdnaW5nZmFjZSUyRmluZm9ybWVyLXRvdXJpc20tbW9udGhseSUyMiklMEElMEElMjMlMjBkdXJpbmclMjB0cmFpbmluZyUyQyUyMG9uZSUyMHByb3ZpZGVzJTIwYm90aCUyMHBhc3QlMjBhbmQlMjBmdXR1cmUlMjB2YWx1ZXMlMEElMjMlMjBhcyUyMHdlbGwlMjBhcyUyMHBvc3NpYmxlJTIwYWRkaXRpb25hbCUyMGZlYXR1cmVzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCUwQSUyMCUyMCUyMCUyMHBhc3RfdmFsdWVzJTNEYmF0Y2glNUIlMjJwYXN0X3ZhbHVlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHBhc3RfdGltZV9mZWF0dXJlcyUzRGJhdGNoJTVCJTIycGFzdF90aW1lX2ZlYXR1cmVzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwcGFzdF9vYnNlcnZlZF9tYXNrJTNEYmF0Y2glNUIlMjJwYXN0X29ic2VydmVkX21hc2slMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBzdGF0aWNfY2F0ZWdvcmljYWxfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMnN0YXRpY19jYXRlZ29yaWNhbF9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHN0YXRpY19yZWFsX2ZlYXR1cmVzJTNEYmF0Y2glNUIlMjJzdGF0aWNfcmVhbF9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGZ1dHVyZV92YWx1ZXMlM0RiYXRjaCU1QiUyMmZ1dHVyZV92YWx1ZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBmdXR1cmVfdGltZV9mZWF0dXJlcyUzRGJhdGNoJTVCJTIyZnV0dXJlX3RpbWVfZmVhdHVyZXMlMjIlNUQlMkMlMEEpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGUlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> InformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>file = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;hf-internal-testing/tourism-monthly-batch&quot;</span>, filename=<span class="hljs-string">&quot;train-batch.pt&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = torch.load(file)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = InformerModel.from_pretrained(<span class="hljs-string">&quot;huggingface/informer-tourism-monthly&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># during training, one provides both past and future values</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as well as possible additional features</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    past_values=batch[<span class="hljs-string">&quot;past_values&quot;</span>],
<span class="hljs-meta">... </span>    past_time_features=batch[<span class="hljs-string">&quot;past_time_features&quot;</span>],
<span class="hljs-meta">... </span>    past_observed_mask=batch[<span class="hljs-string">&quot;past_observed_mask&quot;</span>],
<span class="hljs-meta">... </span>    static_categorical_features=batch[<span class="hljs-string">&quot;static_categorical_features&quot;</span>],
<span class="hljs-meta">... </span>    static_real_features=batch[<span class="hljs-string">&quot;static_real_features&quot;</span>],
<span class="hljs-meta">... </span>    future_values=batch[<span class="hljs-string">&quot;future_values&quot;</span>],
<span class="hljs-meta">... </span>    future_time_features=batch[<span class="hljs-string">&quot;future_time_features&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`,wrap:!1}}),{c(){o=l("p"),o.textContent=f,d=r(),_(c.$$.fragment)},l(n){o=m(n,"P",{"data-svelte-h":!0}),p(o)!=="svelte-kvfsh7"&&(o.textContent=f),d=i(n),b(c.$$.fragment,n)},m(n,g){s(n,o,g),s(n,d,g),y(c,n,g),u=!0},p:pe,i(n){u||(v(c.$$.fragment,n),u=!0)},o(n){T(c.$$.fragment,n),u=!1},d(n){n&&(a(o),a(d)),w(c,n)}}}function bt(j){let o,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=l("p"),o.innerHTML=f},l(d){o=m(d,"P",{"data-svelte-h":!0}),p(o)!=="svelte-fincs2"&&(o.innerHTML=f)},m(d,c){s(d,o,c)},p:pe,d(d){d&&a(o)}}}function yt(j){let o,f="Examples:",d,c,u;return c=new Ee({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMGhmX2h1Yl9kb3dubG9hZCUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEluZm9ybWVyRm9yUHJlZGljdGlvbiUwQSUwQWZpbGUlMjAlM0QlMjBoZl9odWJfZG93bmxvYWQoJTBBJTIwJTIwJTIwJTIwcmVwb19pZCUzRCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZ0b3VyaXNtLW1vbnRobHktYmF0Y2glMjIlMkMlMjBmaWxlbmFtZSUzRCUyMnRyYWluLWJhdGNoLnB0JTIyJTJDJTIwcmVwb190eXBlJTNEJTIyZGF0YXNldCUyMiUwQSklMEFiYXRjaCUyMCUzRCUyMHRvcmNoLmxvYWQoZmlsZSklMEElMEFtb2RlbCUyMCUzRCUyMEluZm9ybWVyRm9yUHJlZGljdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyaHVnZ2luZ2ZhY2UlMkZpbmZvcm1lci10b3VyaXNtLW1vbnRobHklMjIlMEEpJTBBJTBBJTIzJTIwZHVyaW5nJTIwdHJhaW5pbmclMkMlMjBvbmUlMjBwcm92aWRlcyUyMGJvdGglMjBwYXN0JTIwYW5kJTIwZnV0dXJlJTIwdmFsdWVzJTBBJTIzJTIwYXMlMjB3ZWxsJTIwYXMlMjBwb3NzaWJsZSUyMGFkZGl0aW9uYWwlMjBmZWF0dXJlcyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCglMEElMjAlMjAlMjAlMjBwYXN0X3ZhbHVlcyUzRGJhdGNoJTVCJTIycGFzdF92YWx1ZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBwYXN0X3RpbWVfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMnBhc3RfdGltZV9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHBhc3Rfb2JzZXJ2ZWRfbWFzayUzRGJhdGNoJTVCJTIycGFzdF9vYnNlcnZlZF9tYXNrJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwc3RhdGljX2NhdGVnb3JpY2FsX2ZlYXR1cmVzJTNEYmF0Y2glNUIlMjJzdGF0aWNfY2F0ZWdvcmljYWxfZmVhdHVyZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBzdGF0aWNfcmVhbF9mZWF0dXJlcyUzRGJhdGNoJTVCJTIyc3RhdGljX3JlYWxfZmVhdHVyZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBmdXR1cmVfdmFsdWVzJTNEYmF0Y2glNUIlMjJmdXR1cmVfdmFsdWVzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwZnV0dXJlX3RpbWVfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMmZ1dHVyZV90aW1lX2ZlYXR1cmVzJTIyJTVEJTJDJTBBKSUwQSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb3NzLmJhY2t3YXJkKCklMEElMEElMjMlMjBkdXJpbmclMjBpbmZlcmVuY2UlMkMlMjBvbmUlMjBvbmx5JTIwcHJvdmlkZXMlMjBwYXN0JTIwdmFsdWVzJTBBJTIzJTIwYXMlMjB3ZWxsJTIwYXMlMjBwb3NzaWJsZSUyMGFkZGl0aW9uYWwlMjBmZWF0dXJlcyUwQSUyMyUyMHRoZSUyMG1vZGVsJTIwYXV0b3JlZ3Jlc3NpdmVseSUyMGdlbmVyYXRlcyUyMGZ1dHVyZSUyMHZhbHVlcyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSglMEElMjAlMjAlMjAlMjBwYXN0X3ZhbHVlcyUzRGJhdGNoJTVCJTIycGFzdF92YWx1ZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBwYXN0X3RpbWVfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMnBhc3RfdGltZV9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHBhc3Rfb2JzZXJ2ZWRfbWFzayUzRGJhdGNoJTVCJTIycGFzdF9vYnNlcnZlZF9tYXNrJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwc3RhdGljX2NhdGVnb3JpY2FsX2ZlYXR1cmVzJTNEYmF0Y2glNUIlMjJzdGF0aWNfY2F0ZWdvcmljYWxfZmVhdHVyZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBzdGF0aWNfcmVhbF9mZWF0dXJlcyUzRGJhdGNoJTVCJTIyc3RhdGljX3JlYWxfZmVhdHVyZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBmdXR1cmVfdGltZV9mZWF0dXJlcyUzRGJhdGNoJTVCJTIyZnV0dXJlX3RpbWVfZmVhdHVyZXMlMjIlNUQlMkMlMEEpJTBBJTBBbWVhbl9wcmVkaWN0aW9uJTIwJTNEJTIwb3V0cHV0cy5zZXF1ZW5jZXMubWVhbihkaW0lM0QxKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> InformerForPrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>file = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;hf-internal-testing/tourism-monthly-batch&quot;</span>, filename=<span class="hljs-string">&quot;train-batch.pt&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = torch.load(file)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = InformerForPrediction.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;huggingface/informer-tourism-monthly&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># during training, one provides both past and future values</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as well as possible additional features</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    past_values=batch[<span class="hljs-string">&quot;past_values&quot;</span>],
<span class="hljs-meta">... </span>    past_time_features=batch[<span class="hljs-string">&quot;past_time_features&quot;</span>],
<span class="hljs-meta">... </span>    past_observed_mask=batch[<span class="hljs-string">&quot;past_observed_mask&quot;</span>],
<span class="hljs-meta">... </span>    static_categorical_features=batch[<span class="hljs-string">&quot;static_categorical_features&quot;</span>],
<span class="hljs-meta">... </span>    static_real_features=batch[<span class="hljs-string">&quot;static_real_features&quot;</span>],
<span class="hljs-meta">... </span>    future_values=batch[<span class="hljs-string">&quot;future_values&quot;</span>],
<span class="hljs-meta">... </span>    future_time_features=batch[<span class="hljs-string">&quot;future_time_features&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># during inference, one only provides past values</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as well as possible additional features</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the model autoregressively generates future values</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    past_values=batch[<span class="hljs-string">&quot;past_values&quot;</span>],
<span class="hljs-meta">... </span>    past_time_features=batch[<span class="hljs-string">&quot;past_time_features&quot;</span>],
<span class="hljs-meta">... </span>    past_observed_mask=batch[<span class="hljs-string">&quot;past_observed_mask&quot;</span>],
<span class="hljs-meta">... </span>    static_categorical_features=batch[<span class="hljs-string">&quot;static_categorical_features&quot;</span>],
<span class="hljs-meta">... </span>    static_real_features=batch[<span class="hljs-string">&quot;static_real_features&quot;</span>],
<span class="hljs-meta">... </span>    future_time_features=batch[<span class="hljs-string">&quot;future_time_features&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>mean_prediction = outputs.sequences.mean(dim=<span class="hljs-number">1</span>)`,wrap:!1}}),{c(){o=l("p"),o.textContent=f,d=r(),_(c.$$.fragment)},l(n){o=m(n,"P",{"data-svelte-h":!0}),p(o)!=="svelte-kvfsh7"&&(o.textContent=f),d=i(n),b(c.$$.fragment,n)},m(n,g){s(n,o,g),s(n,d,g),y(c,n,g),u=!0},p:pe,i(n){u||(v(c.$$.fragment,n),u=!0)},o(n){T(c.$$.fragment,n),u=!1},d(n){n&&(a(o),a(d)),w(c,n)}}}function vt(j){let o,f,d,c,u,n,g,fe,X,Qe='The Informer model was proposed in <a href="https://arxiv.org/abs/2012.07436" rel="nofollow">Informer: Beyond Efficient Transformer for Long Sequence Time-Series Forecasting</a> by Haoyi Zhou, Shanghang Zhang, Jieqi Peng, Shuai Zhang, Jianxin Li, Hui Xiong, and Wancai Zhang.',ge,V,Ae="This method introduces a Probabilistic Attention mechanism to select the “active” queries rather than the “lazy” queries and provides a sparse Transformer thus mitigating the quadratic compute and memory requirements of vanilla attention.",_e,R,De="The abstract from the paper is the following:",be,G,Le="<em>Many real-world applications require the prediction of long sequence time-series, such as electricity consumption planning. Long sequence time-series forecasting (LSTF) demands a high prediction capacity of the model, which is the ability to capture precise long-range dependency coupling between output and input efficiently. Recent studies have shown the potential of Transformer to increase the prediction capacity. However, there are several severe issues with Transformer that prevent it from being directly applicable to LSTF, including quadratic time complexity, high memory usage, and inherent limitation of the encoder-decoder architecture. To address these issues, we design an efficient transformer-based model for LSTF, named Informer, with three distinctive characteristics: (i) a ProbSparse self-attention mechanism, which achieves O(L logL) in time complexity and memory usage, and has comparable performance on sequences’ dependency alignment. (ii) the self-attention distilling highlights dominating attention by halving cascading layer input, and efficiently handles extreme long input sequences. (iii) the generative style decoder, while conceptually simple, predicts the long time-series sequences at one forward operation rather than a step-by-step way, which drastically improves the inference speed of long-sequence predictions. Extensive experiments on four large-scale datasets demonstrate that Informer significantly outperforms existing methods and provides a new solution to the LSTF problem.</em>",ye,S,Oe=`This model was contributed by <a href="https://huggingface.co/elisim" rel="nofollow">elisim</a> and <a href="https://huggingface.co/kashif" rel="nofollow">kashif</a>.
The original code can be found <a href="https://github.com/zhouhaoyi/Informer2020" rel="nofollow">here</a>.`,ve,H,Te,Y,Ke="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started. If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",we,P,et='<li>Check out the Informer blog-post in HuggingFace blog: <a href="https://huggingface.co/blog/informer" rel="nofollow">Multivariate Probabilistic Time Series Forecasting with Informer</a></li>',Me,E,ke,M,Q,ze,ne,tt=`This is the configuration class to store the configuration of an <a href="/docs/transformers/main/en/model_doc/informer#transformers.InformerModel">InformerModel</a>. It is used to instantiate an
Informer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Informer
<a href="https://huggingface.co/huggingface/informer-tourism-monthly" rel="nofollow">huggingface/informer-tourism-monthly</a> architecture.`,Fe,ae,ot=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,$e,U,xe,A,je,k,D,Ue,se,nt=`The bare Informer Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ze,re,at=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,We,I,L,Ne,ie,st='The <a href="/docs/transformers/main/en/model_doc/informer#transformers.InformerModel">InformerModel</a> forward method, overrides the <code>__call__</code> special method.',Be,Z,Xe,W,Ie,O,Je,x,K,Ve,de,rt=`The Informer Model with a distribution head on top for time-series forecasting.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Re,ce,it=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ge,J,ee,Se,le,dt='The <a href="/docs/transformers/main/en/model_doc/informer#transformers.InformerForPrediction">InformerForPrediction</a> forward method, overrides the <code>__call__</code> special method.',He,N,Ye,B,Ce,he,qe;return u=new me({props:{title:"Informer",local:"informer",headingTag:"h1"}}),g=new me({props:{title:"Overview",local:"overview",headingTag:"h2"}}),H=new me({props:{title:"Resources",local:"resources",headingTag:"h2"}}),E=new me({props:{title:"InformerConfig",local:"transformers.InformerConfig",headingTag:"h2"}}),Q=new ue({props:{name:"class transformers.InformerConfig",anchor:"transformers.InformerConfig",parameters:[{name:"prediction_length",val:": Optional = None"},{name:"context_length",val:": Optional = None"},{name:"distribution_output",val:": str = 'student_t'"},{name:"loss",val:": str = 'nll'"},{name:"input_size",val:": int = 1"},{name:"lags_sequence",val:": List = None"},{name:"scaling",val:": Union = 'mean'"},{name:"num_dynamic_real_features",val:": int = 0"},{name:"num_static_real_features",val:": int = 0"},{name:"num_static_categorical_features",val:": int = 0"},{name:"num_time_features",val:": int = 0"},{name:"cardinality",val:": Optional = None"},{name:"embedding_dimension",val:": Optional = None"},{name:"d_model",val:": int = 64"},{name:"encoder_ffn_dim",val:": int = 32"},{name:"decoder_ffn_dim",val:": int = 32"},{name:"encoder_attention_heads",val:": int = 2"},{name:"decoder_attention_heads",val:": int = 2"},{name:"encoder_layers",val:": int = 2"},{name:"decoder_layers",val:": int = 2"},{name:"is_encoder_decoder",val:": bool = True"},{name:"activation_function",val:": str = 'gelu'"},{name:"dropout",val:": float = 0.05"},{name:"encoder_layerdrop",val:": float = 0.1"},{name:"decoder_layerdrop",val:": float = 0.1"},{name:"attention_dropout",val:": float = 0.1"},{name:"activation_dropout",val:": float = 0.1"},{name:"num_parallel_samples",val:": int = 100"},{name:"init_std",val:": float = 0.02"},{name:"use_cache",val:" = True"},{name:"attention_type",val:": str = 'prob'"},{name:"sampling_factor",val:": int = 5"},{name:"distil",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.InformerConfig.prediction_length",description:`<strong>prediction_length</strong> (<code>int</code>) &#x2014;
The prediction length for the decoder. In other words, the prediction horizon of the model. This value is
typically dictated by the dataset and we recommend to set it appropriately.`,name:"prediction_length"},{anchor:"transformers.InformerConfig.context_length",description:`<strong>context_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>prediction_length</code>) &#x2014;
The context length for the encoder. If <code>None</code>, the context length will be the same as the
<code>prediction_length</code>.`,name:"context_length"},{anchor:"transformers.InformerConfig.distribution_output",description:`<strong>distribution_output</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;student_t&quot;</code>) &#x2014;
The distribution emission head for the model. Could be either &#x201C;student_t&#x201D;, &#x201C;normal&#x201D; or &#x201C;negative_binomial&#x201D;.`,name:"distribution_output"},{anchor:"transformers.InformerConfig.loss",description:`<strong>loss</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;nll&quot;</code>) &#x2014;
The loss function for the model corresponding to the <code>distribution_output</code> head. For parametric
distributions it is the negative log likelihood (nll) - which currently is the only supported one.`,name:"loss"},{anchor:"transformers.InformerConfig.input_size",description:`<strong>input_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The size of the target variable which by default is 1 for univariate targets. Would be &gt; 1 in case of
multivariate targets.`,name:"input_size"},{anchor:"transformers.InformerConfig.scaling",description:`<strong>scaling</strong> (<code>string</code> or <code>bool</code>, <em>optional</em> defaults to <code>&quot;mean&quot;</code>) &#x2014;
Whether to scale the input targets via &#x201C;mean&#x201D; scaler, &#x201C;std&#x201D; scaler or no scaler if <code>None</code>. If <code>True</code>, the
scaler is set to &#x201C;mean&#x201D;.`,name:"scaling"},{anchor:"transformers.InformerConfig.lags_sequence",description:`<strong>lags_sequence</strong> (<code>list[int]</code>, <em>optional</em>, defaults to <code>[1, 2, 3, 4, 5, 6, 7]</code>) &#x2014;
The lags of the input time series as covariates often dictated by the frequency of the data. Default is
<code>[1, 2, 3, 4, 5, 6, 7]</code> but we recommend to change it based on the dataset appropriately.`,name:"lags_sequence"},{anchor:"transformers.InformerConfig.num_time_features",description:`<strong>num_time_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of time features in the input time series.`,name:"num_time_features"},{anchor:"transformers.InformerConfig.num_dynamic_real_features",description:`<strong>num_dynamic_real_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of dynamic real valued features.`,name:"num_dynamic_real_features"},{anchor:"transformers.InformerConfig.num_static_categorical_features",description:`<strong>num_static_categorical_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of static categorical features.`,name:"num_static_categorical_features"},{anchor:"transformers.InformerConfig.num_static_real_features",description:`<strong>num_static_real_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of static real valued features.`,name:"num_static_real_features"},{anchor:"transformers.InformerConfig.cardinality",description:`<strong>cardinality</strong> (<code>list[int]</code>, <em>optional</em>) &#x2014;
The cardinality (number of different values) for each of the static categorical features. Should be a list
of integers, having the same length as <code>num_static_categorical_features</code>. Cannot be <code>None</code> if
<code>num_static_categorical_features</code> is &gt; 0.`,name:"cardinality"},{anchor:"transformers.InformerConfig.embedding_dimension",description:`<strong>embedding_dimension</strong> (<code>list[int]</code>, <em>optional</em>) &#x2014;
The dimension of the embedding for each of the static categorical features. Should be a list of integers,
having the same length as <code>num_static_categorical_features</code>. Cannot be <code>None</code> if
<code>num_static_categorical_features</code> is &gt; 0.`,name:"embedding_dimension"},{anchor:"transformers.InformerConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality of the transformer layers.`,name:"d_model"},{anchor:"transformers.InformerConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.InformerConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.InformerConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.InformerConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.InformerConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in encoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.InformerConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.InformerConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and decoder. If string, <code>&quot;gelu&quot;</code> and
<code>&quot;relu&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.InformerConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the encoder, and decoder.`,name:"dropout"},{anchor:"transformers.InformerConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention and fully connected layers for each encoder layer.`,name:"encoder_layerdrop"},{anchor:"transformers.InformerConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention and fully connected layers for each decoder layer.`,name:"decoder_layerdrop"},{anchor:"transformers.InformerConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.InformerConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability used between the two layers of the feed-forward networks.`,name:"activation_dropout"},{anchor:"transformers.InformerConfig.num_parallel_samples",description:`<strong>num_parallel_samples</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
The number of samples to generate in parallel for each time step of inference.`,name:"num_parallel_samples"},{anchor:"transformers.InformerConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated normal weight initialization distribution.`,name:"init_std"},{anchor:"transformers.InformerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use the past key/values attentions (if applicable to the model) to speed up decoding.`,name:"use_cache"},{anchor:"transformers.InformerConfig.attention_type",description:`<strong>attention_type</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;prob&#x201D;) &#x2014;
Attention used in encoder. This can be set to &#x201C;prob&#x201D; (Informer&#x2019;s ProbAttention) or &#x201C;full&#x201D; (vanilla
transformer&#x2019;s canonical self-attention).`,name:"attention_type"},{anchor:"transformers.InformerConfig.sampling_factor",description:`<strong>sampling_factor</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
ProbSparse sampling factor (only makes affect when <code>attention_type</code>=&#x201C;prob&#x201D;). It is used to control the
reduced query matrix (Q_reduce) input length.`,name:"sampling_factor"},{anchor:"transformers.InformerConfig.distil",description:`<strong>distil</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use distilling in encoder.`,name:"distil"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/informer/configuration_informer.py#L33"}}),U=new Pe({props:{anchor:"transformers.InformerConfig.example",$$slots:{default:[ft]},$$scope:{ctx:j}}}),A=new me({props:{title:"InformerModel",local:"transformers.InformerModel",headingTag:"h2"}}),D=new ue({props:{name:"class transformers.InformerModel",anchor:"transformers.InformerModel",parameters:[{name:"config",val:": InformerConfig"}],parametersDescription:[{anchor:"transformers.InformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig">TimeSeriesTransformerConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/informer/modeling_informer.py#L1442"}}),L=new ue({props:{name:"forward",anchor:"transformers.InformerModel.forward",parameters:[{name:"past_values",val:": Tensor"},{name:"past_time_features",val:": Tensor"},{name:"past_observed_mask",val:": Tensor"},{name:"static_categorical_features",val:": Optional = None"},{name:"static_real_features",val:": Optional = None"},{name:"future_values",val:": Optional = None"},{name:"future_time_features",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.InformerModel.forward.past_values",description:`<strong>past_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>) &#x2014;
Past values of the time series, that serve as context in order to predict the future. The sequence size of
this tensor must be larger than the <code>context_length</code> of the model, since the model will use the larger size
to construct lag features, i.e. additional values from the past which are added in order to serve as &#x201C;extra
context&#x201D;.</p>
<p>The <code>sequence_length</code> here is equal to <code>config.context_length</code> + <code>max(config.lags_sequence)</code>, which if no
<code>lags_sequence</code> is configured, is equal to <code>config.context_length</code> + 7 (as by default, the largest
look-back index in <code>config.lags_sequence</code> is 7). The property <code>_past_length</code> returns the actual length of
the past.</p>
<p>The <code>past_values</code> is what the Transformer encoder gets as input (with optional additional features, such as
<code>static_categorical_features</code>, <code>static_real_features</code>, <code>past_time_features</code> and lags).</p>
<p>Optionally, missing values need to be replaced with zeros and indicated via the <code>past_observed_mask</code>.</p>
<p>For multivariate time series, the <code>input_size</code> &gt; 1 dimension is required and corresponds to the number of
variates in the time series per time step.`,name:"past_values"},{anchor:"transformers.InformerModel.forward.past_time_features",description:`<strong>past_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_features)</code>) &#x2014;
Required time features, which the model internally will add to <code>past_values</code>. These could be things like
&#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as Fourier features). These
could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at which point in life&#x201D; a
time-series is. Age features have small values for distant past time steps and increase monotonically the
more we approach the current time step. Holiday features are also a good example of time features.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional time features. The Time Series Transformer only learns
additional embeddings for <code>static_categorical_features</code>.</p>
<p>Additional dynamic real covariates can be concatenated to this tensor, with the caveat that these features
must but known at prediction time.</p>
<p>The <code>num_features</code> here is equal to <code>config.</code>num_time_features<code>+</code>config.num_dynamic_real_features\`.`,name:"past_time_features"},{anchor:"transformers.InformerModel.forward.past_observed_mask",description:`<strong>past_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>past_values</code> were observed and which were missing. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>`,name:"past_observed_mask"},{anchor:"transformers.InformerModel.forward.static_categorical_features",description:`<strong>static_categorical_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number of static categorical features)</code>, <em>optional</em>) &#x2014;
Optional static categorical features for which the model will learn an embedding, which it will add to the
values of the time series.</p>
<p>Static categorical features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static categorical feature is a time series ID.`,name:"static_categorical_features"},{anchor:"transformers.InformerModel.forward.static_real_features",description:`<strong>static_real_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, number of static real features)</code>, <em>optional</em>) &#x2014;
Optional static real features which the model will add to the values of the time series.</p>
<p>Static real features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static real feature is promotion information.`,name:"static_real_features"},{anchor:"transformers.InformerModel.forward.future_values",description:`<strong>future_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length)</code> or <code>(batch_size, prediction_length, input_size)</code>, <em>optional</em>) &#x2014;
Future values of the time series, that serve as labels for the model. The <code>future_values</code> is what the
Transformer needs during training to learn to output, given the <code>past_values</code>.</p>
<p>The sequence length here is equal to <code>prediction_length</code>.</p>
<p>See the demo notebook and code snippets for details.</p>
<p>Optionally, during training any missing values need to be replaced with zeros and indicated via the
<code>future_observed_mask</code>.</p>
<p>For multivariate time series, the <code>input_size</code> &gt; 1 dimension is required and corresponds to the number of
variates in the time series per time step.`,name:"future_values"},{anchor:"transformers.InformerModel.forward.future_time_features",description:`<strong>future_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length, num_features)</code>) &#x2014;
Required time features for the prediction window, which the model internally will add to <code>future_values</code>.
These could be things like &#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as
Fourier features). These could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at
which point in life&#x201D; a time-series is. Age features have small values for distant past time steps and
increase monotonically the more we approach the current time step. Holiday features are also a good example
of time features.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional time features. The Time Series Transformer only learns
additional embeddings for <code>static_categorical_features</code>.</p>
<p>Additional dynamic real covariates can be concatenated to this tensor, with the caveat that these features
must but known at prediction time.</p>
<p>The <code>num_features</code> here is equal to <code>config.</code>num_time_features<code>+</code>config.num_dynamic_real_features\`.`,name:"future_time_features"},{anchor:"transformers.InformerModel.forward.future_observed_mask",description:`<strong>future_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>future_values</code> were observed and which were missing. Mask values selected
in <code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>
<p>This mask is used to filter out missing values for the final loss calculation.`,name:"future_observed_mask"},{anchor:"transformers.InformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.InformerModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. By default, a causal mask will be used, to
make sure the model can only look at previous inputs in order to predict the future.`,name:"decoder_attention_mask"},{anchor:"transformers.InformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.InformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.InformerModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.InformerModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of <code>last_hidden_state</code>, <code>hidden_states</code> (<em>optional</em>) and <code>attentions</code> (<em>optional</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> (<em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.InformerModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.InformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.InformerModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.InformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.InformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.InformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/informer/modeling_informer.py#L1585",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqTSModelOutput"
>transformers.modeling_outputs.Seq2SeqTSModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/informer#transformers.InformerConfig"
>InformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>loc</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, input_size)</code>, <em>optional</em>) — Shift values of each time series’ context window which is used to give the model inputs of the same
magnitude and then used to shift back to the original magnitude.</p>
</li>
<li>
<p><strong>scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, input_size)</code>, <em>optional</em>) — Scaling values of each time series’ context window which is used to give the model inputs of the same
magnitude and then used to rescale back to the original magnitude.</p>
</li>
<li>
<p><strong>static_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature size)</code>, <em>optional</em>) — Static features of each time series’ in a batch which are copied to the covariates at inference time.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqTSModelOutput"
>transformers.modeling_outputs.Seq2SeqTSModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Z=new ct({props:{$$slots:{default:[gt]},$$scope:{ctx:j}}}),W=new Pe({props:{anchor:"transformers.InformerModel.forward.example",$$slots:{default:[_t]},$$scope:{ctx:j}}}),O=new me({props:{title:"InformerForPrediction",local:"transformers.InformerForPrediction",headingTag:"h2"}}),K=new ue({props:{name:"class transformers.InformerForPrediction",anchor:"transformers.InformerForPrediction",parameters:[{name:"config",val:": InformerConfig"}],parametersDescription:[{anchor:"transformers.InformerForPrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig">TimeSeriesTransformerConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/informer/modeling_informer.py#L1704"}}),ee=new ue({props:{name:"forward",anchor:"transformers.InformerForPrediction.forward",parameters:[{name:"past_values",val:": Tensor"},{name:"past_time_features",val:": Tensor"},{name:"past_observed_mask",val:": Tensor"},{name:"static_categorical_features",val:": Optional = None"},{name:"static_real_features",val:": Optional = None"},{name:"future_values",val:": Optional = None"},{name:"future_time_features",val:": Optional = None"},{name:"future_observed_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.InformerForPrediction.forward.past_values",description:`<strong>past_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>) &#x2014;
Past values of the time series, that serve as context in order to predict the future. The sequence size of
this tensor must be larger than the <code>context_length</code> of the model, since the model will use the larger size
to construct lag features, i.e. additional values from the past which are added in order to serve as &#x201C;extra
context&#x201D;.</p>
<p>The <code>sequence_length</code> here is equal to <code>config.context_length</code> + <code>max(config.lags_sequence)</code>, which if no
<code>lags_sequence</code> is configured, is equal to <code>config.context_length</code> + 7 (as by default, the largest
look-back index in <code>config.lags_sequence</code> is 7). The property <code>_past_length</code> returns the actual length of
the past.</p>
<p>The <code>past_values</code> is what the Transformer encoder gets as input (with optional additional features, such as
<code>static_categorical_features</code>, <code>static_real_features</code>, <code>past_time_features</code> and lags).</p>
<p>Optionally, missing values need to be replaced with zeros and indicated via the <code>past_observed_mask</code>.</p>
<p>For multivariate time series, the <code>input_size</code> &gt; 1 dimension is required and corresponds to the number of
variates in the time series per time step.`,name:"past_values"},{anchor:"transformers.InformerForPrediction.forward.past_time_features",description:`<strong>past_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_features)</code>) &#x2014;
Required time features, which the model internally will add to <code>past_values</code>. These could be things like
&#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as Fourier features). These
could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at which point in life&#x201D; a
time-series is. Age features have small values for distant past time steps and increase monotonically the
more we approach the current time step. Holiday features are also a good example of time features.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional time features. The Time Series Transformer only learns
additional embeddings for <code>static_categorical_features</code>.</p>
<p>Additional dynamic real covariates can be concatenated to this tensor, with the caveat that these features
must but known at prediction time.</p>
<p>The <code>num_features</code> here is equal to <code>config.</code>num_time_features<code>+</code>config.num_dynamic_real_features\`.`,name:"past_time_features"},{anchor:"transformers.InformerForPrediction.forward.past_observed_mask",description:`<strong>past_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>past_values</code> were observed and which were missing. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>`,name:"past_observed_mask"},{anchor:"transformers.InformerForPrediction.forward.static_categorical_features",description:`<strong>static_categorical_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number of static categorical features)</code>, <em>optional</em>) &#x2014;
Optional static categorical features for which the model will learn an embedding, which it will add to the
values of the time series.</p>
<p>Static categorical features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static categorical feature is a time series ID.`,name:"static_categorical_features"},{anchor:"transformers.InformerForPrediction.forward.static_real_features",description:`<strong>static_real_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, number of static real features)</code>, <em>optional</em>) &#x2014;
Optional static real features which the model will add to the values of the time series.</p>
<p>Static real features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static real feature is promotion information.`,name:"static_real_features"},{anchor:"transformers.InformerForPrediction.forward.future_values",description:`<strong>future_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length)</code> or <code>(batch_size, prediction_length, input_size)</code>, <em>optional</em>) &#x2014;
Future values of the time series, that serve as labels for the model. The <code>future_values</code> is what the
Transformer needs during training to learn to output, given the <code>past_values</code>.</p>
<p>The sequence length here is equal to <code>prediction_length</code>.</p>
<p>See the demo notebook and code snippets for details.</p>
<p>Optionally, during training any missing values need to be replaced with zeros and indicated via the
<code>future_observed_mask</code>.</p>
<p>For multivariate time series, the <code>input_size</code> &gt; 1 dimension is required and corresponds to the number of
variates in the time series per time step.`,name:"future_values"},{anchor:"transformers.InformerForPrediction.forward.future_time_features",description:`<strong>future_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length, num_features)</code>) &#x2014;
Required time features for the prediction window, which the model internally will add to <code>future_values</code>.
These could be things like &#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as
Fourier features). These could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at
which point in life&#x201D; a time-series is. Age features have small values for distant past time steps and
increase monotonically the more we approach the current time step. Holiday features are also a good example
of time features.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional time features. The Time Series Transformer only learns
additional embeddings for <code>static_categorical_features</code>.</p>
<p>Additional dynamic real covariates can be concatenated to this tensor, with the caveat that these features
must but known at prediction time.</p>
<p>The <code>num_features</code> here is equal to <code>config.</code>num_time_features<code>+</code>config.num_dynamic_real_features\`.`,name:"future_time_features"},{anchor:"transformers.InformerForPrediction.forward.future_observed_mask",description:`<strong>future_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>future_values</code> were observed and which were missing. Mask values selected
in <code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>
<p>This mask is used to filter out missing values for the final loss calculation.`,name:"future_observed_mask"},{anchor:"transformers.InformerForPrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.InformerForPrediction.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. By default, a causal mask will be used, to
make sure the model can only look at previous inputs in order to predict the future.`,name:"decoder_attention_mask"},{anchor:"transformers.InformerForPrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.InformerForPrediction.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.InformerForPrediction.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.InformerForPrediction.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of <code>last_hidden_state</code>, <code>hidden_states</code> (<em>optional</em>) and <code>attentions</code> (<em>optional</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> (<em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.InformerForPrediction.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.InformerForPrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.InformerForPrediction.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.InformerForPrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.InformerForPrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.InformerForPrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/informer/modeling_informer.py#L1749",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqTSModelOutput"
>transformers.modeling_outputs.Seq2SeqTSModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/informer#transformers.InformerConfig"
>InformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>loc</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, input_size)</code>, <em>optional</em>) — Shift values of each time series’ context window which is used to give the model inputs of the same
magnitude and then used to shift back to the original magnitude.</p>
</li>
<li>
<p><strong>scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, input_size)</code>, <em>optional</em>) — Scaling values of each time series’ context window which is used to give the model inputs of the same
magnitude and then used to rescale back to the original magnitude.</p>
</li>
<li>
<p><strong>static_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature size)</code>, <em>optional</em>) — Static features of each time series’ in a batch which are copied to the covariates at inference time.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqTSModelOutput"
>transformers.modeling_outputs.Seq2SeqTSModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),N=new ct({props:{$$slots:{default:[bt]},$$scope:{ctx:j}}}),B=new Pe({props:{anchor:"transformers.InformerForPrediction.forward.example",$$slots:{default:[yt]},$$scope:{ctx:j}}}),{c(){o=l("meta"),f=r(),d=l("p"),c=r(),_(u.$$.fragment),n=r(),_(g.$$.fragment),fe=r(),X=l("p"),X.innerHTML=Qe,ge=r(),V=l("p"),V.textContent=Ae,_e=r(),R=l("p"),R.textContent=De,be=r(),G=l("p"),G.innerHTML=Le,ye=r(),S=l("p"),S.innerHTML=Oe,ve=r(),_(H.$$.fragment),Te=r(),Y=l("p"),Y.textContent=Ke,we=r(),P=l("ul"),P.innerHTML=et,Me=r(),_(E.$$.fragment),ke=r(),M=l("div"),_(Q.$$.fragment),ze=r(),ne=l("p"),ne.innerHTML=tt,Fe=r(),ae=l("p"),ae.innerHTML=ot,$e=r(),_(U.$$.fragment),xe=r(),_(A.$$.fragment),je=r(),k=l("div"),_(D.$$.fragment),Ue=r(),se=l("p"),se.innerHTML=nt,Ze=r(),re=l("p"),re.innerHTML=at,We=r(),I=l("div"),_(L.$$.fragment),Ne=r(),ie=l("p"),ie.innerHTML=st,Be=r(),_(Z.$$.fragment),Xe=r(),_(W.$$.fragment),Ie=r(),_(O.$$.fragment),Je=r(),x=l("div"),_(K.$$.fragment),Ve=r(),de=l("p"),de.innerHTML=rt,Re=r(),ce=l("p"),ce.innerHTML=it,Ge=r(),J=l("div"),_(ee.$$.fragment),Se=r(),le=l("p"),le.innerHTML=dt,He=r(),_(N.$$.fragment),Ye=r(),_(B.$$.fragment),Ce=r(),he=l("p"),this.h()},l(e){const t=pt("svelte-u9bgzb",document.head);o=m(t,"META",{name:!0,content:!0}),t.forEach(a),f=i(e),d=m(e,"P",{}),te(d).forEach(a),c=i(e),b(u.$$.fragment,e),n=i(e),b(g.$$.fragment,e),fe=i(e),X=m(e,"P",{"data-svelte-h":!0}),p(X)!=="svelte-64ufwl"&&(X.innerHTML=Qe),ge=i(e),V=m(e,"P",{"data-svelte-h":!0}),p(V)!=="svelte-1dm22a4"&&(V.textContent=Ae),_e=i(e),R=m(e,"P",{"data-svelte-h":!0}),p(R)!=="svelte-vfdo9a"&&(R.textContent=De),be=i(e),G=m(e,"P",{"data-svelte-h":!0}),p(G)!=="svelte-halvao"&&(G.innerHTML=Le),ye=i(e),S=m(e,"P",{"data-svelte-h":!0}),p(S)!=="svelte-1sw49wp"&&(S.innerHTML=Oe),ve=i(e),b(H.$$.fragment,e),Te=i(e),Y=m(e,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-1e7xzkp"&&(Y.textContent=Ke),we=i(e),P=m(e,"UL",{"data-svelte-h":!0}),p(P)!=="svelte-pj6p0d"&&(P.innerHTML=et),Me=i(e),b(E.$$.fragment,e),ke=i(e),M=m(e,"DIV",{class:!0});var C=te(M);b(Q.$$.fragment,C),ze=i(C),ne=m(C,"P",{"data-svelte-h":!0}),p(ne)!=="svelte-5sc2nd"&&(ne.innerHTML=tt),Fe=i(C),ae=m(C,"P",{"data-svelte-h":!0}),p(ae)!=="svelte-hntihc"&&(ae.innerHTML=ot),$e=i(C),b(U.$$.fragment,C),C.forEach(a),xe=i(e),b(A.$$.fragment,e),je=i(e),k=m(e,"DIV",{class:!0});var q=te(k);b(D.$$.fragment,q),Ue=i(q),se=m(q,"P",{"data-svelte-h":!0}),p(se)!=="svelte-1lq1tck"&&(se.innerHTML=nt),Ze=i(q),re=m(q,"P",{"data-svelte-h":!0}),p(re)!=="svelte-hswkmf"&&(re.innerHTML=at),We=i(q),I=m(q,"DIV",{class:!0});var z=te(I);b(L.$$.fragment,z),Ne=i(z),ie=m(z,"P",{"data-svelte-h":!0}),p(ie)!=="svelte-1ca4voh"&&(ie.innerHTML=st),Be=i(z),b(Z.$$.fragment,z),Xe=i(z),b(W.$$.fragment,z),z.forEach(a),q.forEach(a),Ie=i(e),b(O.$$.fragment,e),Je=i(e),x=m(e,"DIV",{class:!0});var F=te(x);b(K.$$.fragment,F),Ve=i(F),de=m(F,"P",{"data-svelte-h":!0}),p(de)!=="svelte-krj1fk"&&(de.innerHTML=rt),Re=i(F),ce=m(F,"P",{"data-svelte-h":!0}),p(ce)!=="svelte-hswkmf"&&(ce.innerHTML=it),Ge=i(F),J=m(F,"DIV",{class:!0});var $=te(J);b(ee.$$.fragment,$),Se=i($),le=m($,"P",{"data-svelte-h":!0}),p(le)!=="svelte-1saswah"&&(le.innerHTML=dt),He=i($),b(N.$$.fragment,$),Ye=i($),b(B.$$.fragment,$),$.forEach(a),F.forEach(a),Ce=i(e),he=m(e,"P",{}),te(he).forEach(a),this.h()},h(){oe(o,"name","hf:doc:metadata"),oe(o,"content",Tt),oe(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){h(document.head,o),s(e,f,t),s(e,d,t),s(e,c,t),y(u,e,t),s(e,n,t),y(g,e,t),s(e,fe,t),s(e,X,t),s(e,ge,t),s(e,V,t),s(e,_e,t),s(e,R,t),s(e,be,t),s(e,G,t),s(e,ye,t),s(e,S,t),s(e,ve,t),y(H,e,t),s(e,Te,t),s(e,Y,t),s(e,we,t),s(e,P,t),s(e,Me,t),y(E,e,t),s(e,ke,t),s(e,M,t),y(Q,M,null),h(M,ze),h(M,ne),h(M,Fe),h(M,ae),h(M,$e),y(U,M,null),s(e,xe,t),y(A,e,t),s(e,je,t),s(e,k,t),y(D,k,null),h(k,Ue),h(k,se),h(k,Ze),h(k,re),h(k,We),h(k,I),y(L,I,null),h(I,Ne),h(I,ie),h(I,Be),y(Z,I,null),h(I,Xe),y(W,I,null),s(e,Ie,t),y(O,e,t),s(e,Je,t),s(e,x,t),y(K,x,null),h(x,Ve),h(x,de),h(x,Re),h(x,ce),h(x,Ge),h(x,J),y(ee,J,null),h(J,Se),h(J,le),h(J,He),y(N,J,null),h(J,Ye),y(B,J,null),s(e,Ce,t),s(e,he,t),qe=!0},p(e,[t]){const C={};t&2&&(C.$$scope={dirty:t,ctx:e}),U.$set(C);const q={};t&2&&(q.$$scope={dirty:t,ctx:e}),Z.$set(q);const z={};t&2&&(z.$$scope={dirty:t,ctx:e}),W.$set(z);const F={};t&2&&(F.$$scope={dirty:t,ctx:e}),N.$set(F);const $={};t&2&&($.$$scope={dirty:t,ctx:e}),B.$set($)},i(e){qe||(v(u.$$.fragment,e),v(g.$$.fragment,e),v(H.$$.fragment,e),v(E.$$.fragment,e),v(Q.$$.fragment,e),v(U.$$.fragment,e),v(A.$$.fragment,e),v(D.$$.fragment,e),v(L.$$.fragment,e),v(Z.$$.fragment,e),v(W.$$.fragment,e),v(O.$$.fragment,e),v(K.$$.fragment,e),v(ee.$$.fragment,e),v(N.$$.fragment,e),v(B.$$.fragment,e),qe=!0)},o(e){T(u.$$.fragment,e),T(g.$$.fragment,e),T(H.$$.fragment,e),T(E.$$.fragment,e),T(Q.$$.fragment,e),T(U.$$.fragment,e),T(A.$$.fragment,e),T(D.$$.fragment,e),T(L.$$.fragment,e),T(Z.$$.fragment,e),T(W.$$.fragment,e),T(O.$$.fragment,e),T(K.$$.fragment,e),T(ee.$$.fragment,e),T(N.$$.fragment,e),T(B.$$.fragment,e),qe=!1},d(e){e&&(a(f),a(d),a(c),a(n),a(fe),a(X),a(ge),a(V),a(_e),a(R),a(be),a(G),a(ye),a(S),a(ve),a(Te),a(Y),a(we),a(P),a(Me),a(ke),a(M),a(xe),a(je),a(k),a(Ie),a(Je),a(x),a(Ce),a(he)),a(o),w(u,e),w(g,e),w(H,e),w(E,e),w(Q),w(U),w(A,e),w(D),w(L),w(Z),w(W),w(O,e),w(K),w(ee),w(N),w(B)}}}const Tt='{"title":"Informer","local":"informer","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"InformerConfig","local":"transformers.InformerConfig","sections":[],"depth":2},{"title":"InformerModel","local":"transformers.InformerModel","sections":[],"depth":2},{"title":"InformerForPrediction","local":"transformers.InformerForPrediction","sections":[],"depth":2}],"depth":1}';function wt(j){return mt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qt extends ht{constructor(o){super(),ut(this,o,wt,vt,lt,{})}}export{qt as component};
