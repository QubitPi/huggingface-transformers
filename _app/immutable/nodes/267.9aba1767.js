import{s as st,o as nt,n as he}from"../chunks/scheduler.9bc65507.js";import{S as at,i as rt,g as m,s as r,r as p,A as it,h,f as s,c as i,j as K,u as f,x as v,k as ee,y as l,a as d,v as _,d as g,t as T,w as y}from"../chunks/index.707bf1b6.js";import{T as ot}from"../chunks/Tip.c2ecdbf4.js";import{D as me}from"../chunks/Docstring.17db21ae.js";import{C as Be}from"../chunks/CodeBlock.54a9f38d.js";import{E as Ie}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as te}from"../chunks/Heading.342b1fa6.js";function dt(S){let t,u;return t=new Be({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRpbWVTZXJpZXNUcmFuc2Zvcm1lckNvbmZpZyUyQyUyMFRpbWVTZXJpZXNUcmFuc2Zvcm1lck1vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMFRpbWUlMjBTZXJpZXMlMjBUcmFuc2Zvcm1lciUyMGNvbmZpZ3VyYXRpb24lMjB3aXRoJTIwMTIlMjB0aW1lJTIwc3RlcHMlMjBmb3IlMjBwcmVkaWN0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFRpbWVTZXJpZXNUcmFuc2Zvcm1lckNvbmZpZyhwcmVkaWN0aW9uX2xlbmd0aCUzRDEyKSUwQSUwQSUyMyUyMFJhbmRvbWx5JTIwaW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBUaW1lU2VyaWVzVHJhbnNmb3JtZXJNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TimeSeriesTransformerConfig, TimeSeriesTransformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Time Series Transformer configuration with 12 time steps for prediction</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TimeSeriesTransformerConfig(prediction_length=<span class="hljs-number">12</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Randomly initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TimeSeriesTransformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){p(t.$$.fragment)},l(n){f(t.$$.fragment,n)},m(n,c){_(t,n,c),u=!0},p:he,i(n){u||(g(t.$$.fragment,n),u=!0)},o(n){T(t.$$.fragment,n),u=!1},d(n){y(t,n)}}}function ct(S){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=m("p"),t.innerHTML=u},l(n){t=h(n,"P",{"data-svelte-h":!0}),v(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,c){d(n,t,c)},p:he,d(n){n&&s(t)}}}function lt(S){let t,u="Examples:",n,c,b;return c=new Be({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMGhmX2h1Yl9kb3dubG9hZCUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRpbWVTZXJpZXNUcmFuc2Zvcm1lck1vZGVsJTBBJTBBZmlsZSUyMCUzRCUyMGhmX2h1Yl9kb3dubG9hZCglMEElMjAlMjAlMjAlMjByZXBvX2lkJTNEJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRnRvdXJpc20tbW9udGhseS1iYXRjaCUyMiUyQyUyMGZpbGVuYW1lJTNEJTIydHJhaW4tYmF0Y2gucHQlMjIlMkMlMjByZXBvX3R5cGUlM0QlMjJkYXRhc2V0JTIyJTBBKSUwQWJhdGNoJTIwJTNEJTIwdG9yY2gubG9hZChmaWxlKSUwQSUwQW1vZGVsJTIwJTNEJTIwVGltZVNlcmllc1RyYW5zZm9ybWVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmh1Z2dpbmdmYWNlJTJGdGltZS1zZXJpZXMtdHJhbnNmb3JtZXItdG91cmlzbS1tb250aGx5JTIyKSUwQSUwQSUyMyUyMGR1cmluZyUyMHRyYWluaW5nJTJDJTIwb25lJTIwcHJvdmlkZXMlMjBib3RoJTIwcGFzdCUyMGFuZCUyMGZ1dHVyZSUyMHZhbHVlcyUwQSUyMyUyMGFzJTIwd2VsbCUyMGFzJTIwcG9zc2libGUlMjBhZGRpdGlvbmFsJTIwZmVhdHVyZXMlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoJTBBJTIwJTIwJTIwJTIwcGFzdF92YWx1ZXMlM0RiYXRjaCU1QiUyMnBhc3RfdmFsdWVzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwcGFzdF90aW1lX2ZlYXR1cmVzJTNEYmF0Y2glNUIlMjJwYXN0X3RpbWVfZmVhdHVyZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBwYXN0X29ic2VydmVkX21hc2slM0RiYXRjaCU1QiUyMnBhc3Rfb2JzZXJ2ZWRfbWFzayUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHN0YXRpY19jYXRlZ29yaWNhbF9mZWF0dXJlcyUzRGJhdGNoJTVCJTIyc3RhdGljX2NhdGVnb3JpY2FsX2ZlYXR1cmVzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwc3RhdGljX3JlYWxfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMnN0YXRpY19yZWFsX2ZlYXR1cmVzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwZnV0dXJlX3ZhbHVlcyUzRGJhdGNoJTVCJTIyZnV0dXJlX3ZhbHVlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGZ1dHVyZV90aW1lX2ZlYXR1cmVzJTNEYmF0Y2glNUIlMjJmdXR1cmVfdGltZV9mZWF0dXJlcyUyMiU1RCUyQyUwQSklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZSUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TimeSeriesTransformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>file = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;hf-internal-testing/tourism-monthly-batch&quot;</span>, filename=<span class="hljs-string">&quot;train-batch.pt&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = torch.load(file)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TimeSeriesTransformerModel.from_pretrained(<span class="hljs-string">&quot;huggingface/time-series-transformer-tourism-monthly&quot;</span>)

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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`,wrap:!1}}),{c(){t=m("p"),t.textContent=u,n=r(),p(c.$$.fragment)},l(a){t=h(a,"P",{"data-svelte-h":!0}),v(t)!=="svelte-kvfsh7"&&(t.textContent=u),n=i(a),f(c.$$.fragment,a)},m(a,w){d(a,t,w),d(a,n,w),_(c,a,w),b=!0},p:he,i(a){b||(g(c.$$.fragment,a),b=!0)},o(a){T(c.$$.fragment,a),b=!1},d(a){a&&(s(t),s(n)),y(c,a)}}}function mt(S){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=m("p"),t.innerHTML=u},l(n){t=h(n,"P",{"data-svelte-h":!0}),v(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,c){d(n,t,c)},p:he,d(n){n&&s(t)}}}function ht(S){let t,u="Examples:",n,c,b;return c=new Be({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMGhmX2h1Yl9kb3dubG9hZCUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRpbWVTZXJpZXNUcmFuc2Zvcm1lckZvclByZWRpY3Rpb24lMEElMEFmaWxlJTIwJTNEJTIwaGZfaHViX2Rvd25sb2FkKCUwQSUyMCUyMCUyMCUyMHJlcG9faWQlM0QlMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGdG91cmlzbS1tb250aGx5LWJhdGNoJTIyJTJDJTIwZmlsZW5hbWUlM0QlMjJ0cmFpbi1iYXRjaC5wdCUyMiUyQyUyMHJlcG9fdHlwZSUzRCUyMmRhdGFzZXQlMjIlMEEpJTBBYmF0Y2glMjAlM0QlMjB0b3JjaC5sb2FkKGZpbGUpJTBBJTBBbW9kZWwlMjAlM0QlMjBUaW1lU2VyaWVzVHJhbnNmb3JtZXJGb3JQcmVkaWN0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJodWdnaW5nZmFjZSUyRnRpbWUtc2VyaWVzLXRyYW5zZm9ybWVyLXRvdXJpc20tbW9udGhseSUyMiUwQSklMEElMEElMjMlMjBkdXJpbmclMjB0cmFpbmluZyUyQyUyMG9uZSUyMHByb3ZpZGVzJTIwYm90aCUyMHBhc3QlMjBhbmQlMjBmdXR1cmUlMjB2YWx1ZXMlMEElMjMlMjBhcyUyMHdlbGwlMjBhcyUyMHBvc3NpYmxlJTIwYWRkaXRpb25hbCUyMGZlYXR1cmVzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCUwQSUyMCUyMCUyMCUyMHBhc3RfdmFsdWVzJTNEYmF0Y2glNUIlMjJwYXN0X3ZhbHVlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHBhc3RfdGltZV9mZWF0dXJlcyUzRGJhdGNoJTVCJTIycGFzdF90aW1lX2ZlYXR1cmVzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwcGFzdF9vYnNlcnZlZF9tYXNrJTNEYmF0Y2glNUIlMjJwYXN0X29ic2VydmVkX21hc2slMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBzdGF0aWNfY2F0ZWdvcmljYWxfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMnN0YXRpY19jYXRlZ29yaWNhbF9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHN0YXRpY19yZWFsX2ZlYXR1cmVzJTNEYmF0Y2glNUIlMjJzdGF0aWNfcmVhbF9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGZ1dHVyZV92YWx1ZXMlM0RiYXRjaCU1QiUyMmZ1dHVyZV92YWx1ZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBmdXR1cmVfdGltZV9mZWF0dXJlcyUzRGJhdGNoJTVCJTIyZnV0dXJlX3RpbWVfZmVhdHVyZXMlMjIlNUQlMkMlMEEpJTBBJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQWxvc3MuYmFja3dhcmQoKSUwQSUwQSUyMyUyMGR1cmluZyUyMGluZmVyZW5jZSUyQyUyMG9uZSUyMG9ubHklMjBwcm92aWRlcyUyMHBhc3QlMjB2YWx1ZXMlMEElMjMlMjBhcyUyMHdlbGwlMjBhcyUyMHBvc3NpYmxlJTIwYWRkaXRpb25hbCUyMGZlYXR1cmVzJTBBJTIzJTIwdGhlJTIwbW9kZWwlMjBhdXRvcmVncmVzc2l2ZWx5JTIwZ2VuZXJhdGVzJTIwZnV0dXJlJTIwdmFsdWVzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCUwQSUyMCUyMCUyMCUyMHBhc3RfdmFsdWVzJTNEYmF0Y2glNUIlMjJwYXN0X3ZhbHVlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHBhc3RfdGltZV9mZWF0dXJlcyUzRGJhdGNoJTVCJTIycGFzdF90aW1lX2ZlYXR1cmVzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwcGFzdF9vYnNlcnZlZF9tYXNrJTNEYmF0Y2glNUIlMjJwYXN0X29ic2VydmVkX21hc2slMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBzdGF0aWNfY2F0ZWdvcmljYWxfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMnN0YXRpY19jYXRlZ29yaWNhbF9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHN0YXRpY19yZWFsX2ZlYXR1cmVzJTNEYmF0Y2glNUIlMjJzdGF0aWNfcmVhbF9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGZ1dHVyZV90aW1lX2ZlYXR1cmVzJTNEYmF0Y2glNUIlMjJmdXR1cmVfdGltZV9mZWF0dXJlcyUyMiU1RCUyQyUwQSklMEElMEFtZWFuX3ByZWRpY3Rpb24lMjAlM0QlMjBvdXRwdXRzLnNlcXVlbmNlcy5tZWFuKGRpbSUzRDEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TimeSeriesTransformerForPrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>file = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;hf-internal-testing/tourism-monthly-batch&quot;</span>, filename=<span class="hljs-string">&quot;train-batch.pt&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = torch.load(file)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TimeSeriesTransformerForPrediction.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;huggingface/time-series-transformer-tourism-monthly&quot;</span>
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

<span class="hljs-meta">&gt;&gt;&gt; </span>mean_prediction = outputs.sequences.mean(dim=<span class="hljs-number">1</span>)`,wrap:!1}}),{c(){t=m("p"),t.textContent=u,n=r(),p(c.$$.fragment)},l(a){t=h(a,"P",{"data-svelte-h":!0}),v(t)!=="svelte-kvfsh7"&&(t.textContent=u),n=i(a),f(c.$$.fragment,a)},m(a,w){d(a,t,w),d(a,n,w),_(c,a,w),b=!0},p:he,i(a){b||(g(c.$$.fragment,a),b=!0)},o(a){T(c.$$.fragment,a),b=!1},d(a){a&&(s(t),s(n)),y(c,a)}}}function ut(S){let t,u,n,c,b,a,w,ue,N,Ye=`The Time Series Transformer model is a vanilla encoder-decoder Transformer for time series forecasting.
This model was contributed by <a href="https://huggingface.co/kashif" rel="nofollow">kashif</a>.`,pe,V,fe,G,He=`<li>Similar to other models in the library, <a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerModel">TimeSeriesTransformerModel</a> is the raw Transformer without any head on top, and <a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerForPrediction">TimeSeriesTransformerForPrediction</a>
adds a distribution head on top of the former, which can be used for time-series forecasting. Note that this is a so-called probabilistic forecasting model, not a
point forecasting model. This means that the model learns a distribution, from which one can sample. The model doesn’t directly output values.</li> <li><a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerForPrediction">TimeSeriesTransformerForPrediction</a> consists of 2 blocks: an encoder, which takes a <code>context_length</code> of time series values as input (called <code>past_values</code>),
and a decoder, which predicts a <code>prediction_length</code> of time series values into the future (called <code>future_values</code>). During training, one needs to provide
pairs of (<code>past_values</code> and <code>future_values</code>) to the model.</li> <li>In addition to the raw (<code>past_values</code> and <code>future_values</code>), one typically provides additional features to the model. These can be the following:<ul><li><code>past_time_features</code>: temporal features which the model will add to <code>past_values</code>. These serve as “positional encodings” for the Transformer encoder.
Examples are “day of the month”, “month of the year”, etc. as scalar values (and then stacked together as a vector).
e.g. if a given time-series value was obtained on the 11th of August, then one could have [11, 8] as time feature vector (11 being “day of the month”, 8 being “month of the year”).</li> <li><code>future_time_features</code>: temporal features which the model will add to <code>future_values</code>. These serve as “positional encodings” for the Transformer decoder.
Examples are “day of the month”, “month of the year”, etc. as scalar values (and then stacked together as a vector).
e.g. if a given time-series value was obtained on the 11th of August, then one could have [11, 8] as time feature vector (11 being “day of the month”, 8 being “month of the year”).</li> <li><code>static_categorical_features</code>: categorical features which are static over time (i.e., have the same value for all <code>past_values</code> and <code>future_values</code>).
An example here is the store ID or region ID that identifies a given time-series.
Note that these features need to be known for ALL data points (also those in the future).</li> <li><code>static_real_features</code>: real-valued features which are static over time (i.e., have the same value for all <code>past_values</code> and <code>future_values</code>).
An example here is the image representation of the product for which you have the time-series values (like the <a href="resnet">ResNet</a> embedding of a “shoe” picture,
if your time-series is about the sales of shoes).
Note that these features need to be known for ALL data points (also those in the future).</li></ul></li> <li>The model is trained using “teacher-forcing”, similar to how a Transformer is trained for machine translation. This means that, during training, one shifts the
<code>future_values</code> one position to the right as input to the decoder, prepended by the last value of <code>past_values</code>. At each time step, the model needs to predict the
next target. So the set-up of training is similar to a GPT model for language, except that there’s no notion of <code>decoder_start_token_id</code> (we just use the last value
of the context as initial input for the decoder).</li> <li>At inference time, we give the final value of the <code>past_values</code> as input to the decoder. Next, we can sample from the model to make a prediction at the next time step,
which is then fed to the decoder in order to make the next prediction (also called autoregressive generation).</li>`,_e,I,ge,B,Pe="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started. If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",Te,Y,Ee='<li>Check out the Time Series Transformer blog-post in HuggingFace blog: <a href="https://huggingface.co/blog/time-series-transformers" rel="nofollow">Probabilistic Time Series Forecasting with 🤗 Transformers</a></li>',ye,H,be,M,P,Ue,oe,Qe=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerModel">TimeSeriesTransformerModel</a>. It is used to
instantiate a Time Series Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Time Series
Transformer
<a href="https://huggingface.co/huggingface/time-series-transformer-tourism-monthly" rel="nofollow">huggingface/time-series-transformer-tourism-monthly</a>
architecture.`,je,se,De=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Ce,q,ve,E,we,k,Q,Je,ne,Ae=`The bare Time Series Transformer Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ze,ae,Oe=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Fe,U,D,$e,re,Le='The <a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerModel">TimeSeriesTransformerModel</a> forward method, overrides the <code>__call__</code> special method.',qe,Z,Ze,X,Me,A,ke,x,O,Xe,ie,Ke=`The Time Series Transformer Model with a distribution head on top for time-series forecasting.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Re,de,et=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,We,j,L,Ne,ce,tt='The <a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerForPrediction">TimeSeriesTransformerForPrediction</a> forward method, overrides the <code>__call__</code> special method.',Ve,R,Ge,W,xe,le,Se;return b=new te({props:{title:"Time Series Transformer",local:"time-series-transformer",headingTag:"h1"}}),w=new te({props:{title:"Overview",local:"overview",headingTag:"h2"}}),V=new te({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),I=new te({props:{title:"Resources",local:"resources",headingTag:"h2"}}),H=new te({props:{title:"TimeSeriesTransformerConfig",local:"transformers.TimeSeriesTransformerConfig",headingTag:"h2"}}),P=new me({props:{name:"class transformers.TimeSeriesTransformerConfig",anchor:"transformers.TimeSeriesTransformerConfig",parameters:[{name:"prediction_length",val:": Optional = None"},{name:"context_length",val:": Optional = None"},{name:"distribution_output",val:": str = 'student_t'"},{name:"loss",val:": str = 'nll'"},{name:"input_size",val:": int = 1"},{name:"lags_sequence",val:": List = [1, 2, 3, 4, 5, 6, 7]"},{name:"scaling",val:": Union = 'mean'"},{name:"num_dynamic_real_features",val:": int = 0"},{name:"num_static_categorical_features",val:": int = 0"},{name:"num_static_real_features",val:": int = 0"},{name:"num_time_features",val:": int = 0"},{name:"cardinality",val:": Optional = None"},{name:"embedding_dimension",val:": Optional = None"},{name:"encoder_ffn_dim",val:": int = 32"},{name:"decoder_ffn_dim",val:": int = 32"},{name:"encoder_attention_heads",val:": int = 2"},{name:"decoder_attention_heads",val:": int = 2"},{name:"encoder_layers",val:": int = 2"},{name:"decoder_layers",val:": int = 2"},{name:"is_encoder_decoder",val:": bool = True"},{name:"activation_function",val:": str = 'gelu'"},{name:"d_model",val:": int = 64"},{name:"dropout",val:": float = 0.1"},{name:"encoder_layerdrop",val:": float = 0.1"},{name:"decoder_layerdrop",val:": float = 0.1"},{name:"attention_dropout",val:": float = 0.1"},{name:"activation_dropout",val:": float = 0.1"},{name:"num_parallel_samples",val:": int = 100"},{name:"init_std",val:": float = 0.02"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerConfig.prediction_length",description:`<strong>prediction_length</strong> (<code>int</code>) &#x2014;
The prediction length for the decoder. In other words, the prediction horizon of the model. This value is
typically dictated by the dataset and we recommend to set it appropriately.`,name:"prediction_length"},{anchor:"transformers.TimeSeriesTransformerConfig.context_length",description:`<strong>context_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>prediction_length</code>) &#x2014;
The context length for the encoder. If <code>None</code>, the context length will be the same as the
<code>prediction_length</code>.`,name:"context_length"},{anchor:"transformers.TimeSeriesTransformerConfig.distribution_output",description:`<strong>distribution_output</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;student_t&quot;</code>) &#x2014;
The distribution emission head for the model. Could be either &#x201C;student_t&#x201D;, &#x201C;normal&#x201D; or &#x201C;negative_binomial&#x201D;.`,name:"distribution_output"},{anchor:"transformers.TimeSeriesTransformerConfig.loss",description:`<strong>loss</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;nll&quot;</code>) &#x2014;
The loss function for the model corresponding to the <code>distribution_output</code> head. For parametric
distributions it is the negative log likelihood (nll) - which currently is the only supported one.`,name:"loss"},{anchor:"transformers.TimeSeriesTransformerConfig.input_size",description:`<strong>input_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The size of the target variable which by default is 1 for univariate targets. Would be &gt; 1 in case of
multivariate targets.`,name:"input_size"},{anchor:"transformers.TimeSeriesTransformerConfig.scaling",description:`<strong>scaling</strong> (<code>string</code> or <code>bool</code>, <em>optional</em> defaults to <code>&quot;mean&quot;</code>) &#x2014;
Whether to scale the input targets via &#x201C;mean&#x201D; scaler, &#x201C;std&#x201D; scaler or no scaler if <code>None</code>. If <code>True</code>, the
scaler is set to &#x201C;mean&#x201D;.`,name:"scaling"},{anchor:"transformers.TimeSeriesTransformerConfig.lags_sequence",description:`<strong>lags_sequence</strong> (<code>list[int]</code>, <em>optional</em>, defaults to <code>[1, 2, 3, 4, 5, 6, 7]</code>) &#x2014;
The lags of the input time series as covariates often dictated by the frequency of the data. Default is
<code>[1, 2, 3, 4, 5, 6, 7]</code> but we recommend to change it based on the dataset appropriately.`,name:"lags_sequence"},{anchor:"transformers.TimeSeriesTransformerConfig.num_time_features",description:`<strong>num_time_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of time features in the input time series.`,name:"num_time_features"},{anchor:"transformers.TimeSeriesTransformerConfig.num_dynamic_real_features",description:`<strong>num_dynamic_real_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of dynamic real valued features.`,name:"num_dynamic_real_features"},{anchor:"transformers.TimeSeriesTransformerConfig.num_static_categorical_features",description:`<strong>num_static_categorical_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of static categorical features.`,name:"num_static_categorical_features"},{anchor:"transformers.TimeSeriesTransformerConfig.num_static_real_features",description:`<strong>num_static_real_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of static real valued features.`,name:"num_static_real_features"},{anchor:"transformers.TimeSeriesTransformerConfig.cardinality",description:`<strong>cardinality</strong> (<code>list[int]</code>, <em>optional</em>) &#x2014;
The cardinality (number of different values) for each of the static categorical features. Should be a list
of integers, having the same length as <code>num_static_categorical_features</code>. Cannot be <code>None</code> if
<code>num_static_categorical_features</code> is &gt; 0.`,name:"cardinality"},{anchor:"transformers.TimeSeriesTransformerConfig.embedding_dimension",description:`<strong>embedding_dimension</strong> (<code>list[int]</code>, <em>optional</em>) &#x2014;
The dimension of the embedding for each of the static categorical features. Should be a list of integers,
having the same length as <code>num_static_categorical_features</code>. Cannot be <code>None</code> if
<code>num_static_categorical_features</code> is &gt; 0.`,name:"embedding_dimension"},{anchor:"transformers.TimeSeriesTransformerConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality of the transformer layers.`,name:"d_model"},{anchor:"transformers.TimeSeriesTransformerConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.TimeSeriesTransformerConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.TimeSeriesTransformerConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.TimeSeriesTransformerConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.TimeSeriesTransformerConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in encoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.TimeSeriesTransformerConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.TimeSeriesTransformerConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and decoder. If string, <code>&quot;gelu&quot;</code> and
<code>&quot;relu&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.TimeSeriesTransformerConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the encoder, and decoder.`,name:"dropout"},{anchor:"transformers.TimeSeriesTransformerConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention and fully connected layers for each encoder layer.`,name:"encoder_layerdrop"},{anchor:"transformers.TimeSeriesTransformerConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention and fully connected layers for each decoder layer.`,name:"decoder_layerdrop"},{anchor:"transformers.TimeSeriesTransformerConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.TimeSeriesTransformerConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability used between the two layers of the feed-forward networks.`,name:"activation_dropout"},{anchor:"transformers.TimeSeriesTransformerConfig.num_parallel_samples",description:`<strong>num_parallel_samples</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
The number of samples to generate in parallel for each time step of inference.`,name:"num_parallel_samples"},{anchor:"transformers.TimeSeriesTransformerConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated normal weight initialization distribution.`,name:"init_std"},{anchor:"transformers.TimeSeriesTransformerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use the past key/values attentions (if applicable to the model) to speed up decoding.</p>
<p>Example &#x2014;`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/time_series_transformer/configuration_time_series_transformer.py#L33"}}),q=new Ie({props:{anchor:"transformers.TimeSeriesTransformerConfig.example",$$slots:{default:[dt]},$$scope:{ctx:S}}}),E=new te({props:{title:"TimeSeriesTransformerModel",local:"transformers.TimeSeriesTransformerModel",headingTag:"h2"}}),Q=new me({props:{name:"class transformers.TimeSeriesTransformerModel",anchor:"transformers.TimeSeriesTransformerModel",parameters:[{name:"config",val:": TimeSeriesTransformerConfig"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig">TimeSeriesTransformerConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1182"}}),D=new me({props:{name:"forward",anchor:"transformers.TimeSeriesTransformerModel.forward",parameters:[{name:"past_values",val:": Tensor"},{name:"past_time_features",val:": Tensor"},{name:"past_observed_mask",val:": Tensor"},{name:"static_categorical_features",val:": Optional = None"},{name:"static_real_features",val:": Optional = None"},{name:"future_values",val:": Optional = None"},{name:"future_time_features",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerModel.forward.past_values",description:`<strong>past_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>) &#x2014;
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
variates in the time series per time step.`,name:"past_values"},{anchor:"transformers.TimeSeriesTransformerModel.forward.past_time_features",description:`<strong>past_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_features)</code>) &#x2014;
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
<p>The <code>num_features</code> here is equal to <code>config.</code>num_time_features<code>+</code>config.num_dynamic_real_features\`.`,name:"past_time_features"},{anchor:"transformers.TimeSeriesTransformerModel.forward.past_observed_mask",description:`<strong>past_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>past_values</code> were observed and which were missing. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>`,name:"past_observed_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.static_categorical_features",description:`<strong>static_categorical_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number of static categorical features)</code>, <em>optional</em>) &#x2014;
Optional static categorical features for which the model will learn an embedding, which it will add to the
values of the time series.</p>
<p>Static categorical features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static categorical feature is a time series ID.`,name:"static_categorical_features"},{anchor:"transformers.TimeSeriesTransformerModel.forward.static_real_features",description:`<strong>static_real_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, number of static real features)</code>, <em>optional</em>) &#x2014;
Optional static real features which the model will add to the values of the time series.</p>
<p>Static real features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static real feature is promotion information.`,name:"static_real_features"},{anchor:"transformers.TimeSeriesTransformerModel.forward.future_values",description:`<strong>future_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length)</code> or <code>(batch_size, prediction_length, input_size)</code>, <em>optional</em>) &#x2014;
Future values of the time series, that serve as labels for the model. The <code>future_values</code> is what the
Transformer needs during training to learn to output, given the <code>past_values</code>.</p>
<p>The sequence length here is equal to <code>prediction_length</code>.</p>
<p>See the demo notebook and code snippets for details.</p>
<p>Optionally, during training any missing values need to be replaced with zeros and indicated via the
<code>future_observed_mask</code>.</p>
<p>For multivariate time series, the <code>input_size</code> &gt; 1 dimension is required and corresponds to the number of
variates in the time series per time step.`,name:"future_values"},{anchor:"transformers.TimeSeriesTransformerModel.forward.future_time_features",description:`<strong>future_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length, num_features)</code>) &#x2014;
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
<p>The <code>num_features</code> here is equal to <code>config.</code>num_time_features<code>+</code>config.num_dynamic_real_features\`.`,name:"future_time_features"},{anchor:"transformers.TimeSeriesTransformerModel.forward.future_observed_mask",description:`<strong>future_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>future_values</code> were observed and which were missing. Mask values selected
in <code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>
<p>This mask is used to filter out missing values for the final loss calculation.`,name:"future_observed_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. By default, a causal mask will be used, to
make sure the model can only look at previous inputs in order to predict the future.`,name:"decoder_attention_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TimeSeriesTransformerModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of <code>last_hidden_state</code>, <code>hidden_states</code> (<em>optional</em>) and <code>attentions</code> (<em>optional</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> (<em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TimeSeriesTransformerModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TimeSeriesTransformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TimeSeriesTransformerModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TimeSeriesTransformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TimeSeriesTransformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TimeSeriesTransformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1324",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqTSModelOutput"
>transformers.modeling_outputs.Seq2SeqTSModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig"
>TimeSeriesTransformerConfig</a>) and inputs.</p>
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
`}}),Z=new ot({props:{$$slots:{default:[ct]},$$scope:{ctx:S}}}),X=new Ie({props:{anchor:"transformers.TimeSeriesTransformerModel.forward.example",$$slots:{default:[lt]},$$scope:{ctx:S}}}),A=new te({props:{title:"TimeSeriesTransformerForPrediction",local:"transformers.TimeSeriesTransformerForPrediction",headingTag:"h2"}}),O=new me({props:{name:"class transformers.TimeSeriesTransformerForPrediction",anchor:"transformers.TimeSeriesTransformerForPrediction",parameters:[{name:"config",val:": TimeSeriesTransformerConfig"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerForPrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig">TimeSeriesTransformerConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1443"}}),L=new me({props:{name:"forward",anchor:"transformers.TimeSeriesTransformerForPrediction.forward",parameters:[{name:"past_values",val:": Tensor"},{name:"past_time_features",val:": Tensor"},{name:"past_observed_mask",val:": Tensor"},{name:"static_categorical_features",val:": Optional = None"},{name:"static_real_features",val:": Optional = None"},{name:"future_values",val:": Optional = None"},{name:"future_time_features",val:": Optional = None"},{name:"future_observed_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.past_values",description:`<strong>past_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>) &#x2014;
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
variates in the time series per time step.`,name:"past_values"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.past_time_features",description:`<strong>past_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_features)</code>) &#x2014;
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
<p>The <code>num_features</code> here is equal to <code>config.</code>num_time_features<code>+</code>config.num_dynamic_real_features\`.`,name:"past_time_features"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.past_observed_mask",description:`<strong>past_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>past_values</code> were observed and which were missing. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>`,name:"past_observed_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.static_categorical_features",description:`<strong>static_categorical_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number of static categorical features)</code>, <em>optional</em>) &#x2014;
Optional static categorical features for which the model will learn an embedding, which it will add to the
values of the time series.</p>
<p>Static categorical features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static categorical feature is a time series ID.`,name:"static_categorical_features"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.static_real_features",description:`<strong>static_real_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, number of static real features)</code>, <em>optional</em>) &#x2014;
Optional static real features which the model will add to the values of the time series.</p>
<p>Static real features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static real feature is promotion information.`,name:"static_real_features"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.future_values",description:`<strong>future_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length)</code> or <code>(batch_size, prediction_length, input_size)</code>, <em>optional</em>) &#x2014;
Future values of the time series, that serve as labels for the model. The <code>future_values</code> is what the
Transformer needs during training to learn to output, given the <code>past_values</code>.</p>
<p>The sequence length here is equal to <code>prediction_length</code>.</p>
<p>See the demo notebook and code snippets for details.</p>
<p>Optionally, during training any missing values need to be replaced with zeros and indicated via the
<code>future_observed_mask</code>.</p>
<p>For multivariate time series, the <code>input_size</code> &gt; 1 dimension is required and corresponds to the number of
variates in the time series per time step.`,name:"future_values"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.future_time_features",description:`<strong>future_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length, num_features)</code>) &#x2014;
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
<p>The <code>num_features</code> here is equal to <code>config.</code>num_time_features<code>+</code>config.num_dynamic_real_features\`.`,name:"future_time_features"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.future_observed_mask",description:`<strong>future_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, input_size)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>future_values</code> were observed and which were missing. Mask values selected
in <code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>
<p>This mask is used to filter out missing values for the final loss calculation.`,name:"future_observed_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. By default, a causal mask will be used, to
make sure the model can only look at previous inputs in order to predict the future.`,name:"decoder_attention_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of <code>last_hidden_state</code>, <code>hidden_states</code> (<em>optional</em>) and <code>attentions</code> (<em>optional</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> (<em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/time_series_transformer/modeling_time_series_transformer.py#L1487",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqTSModelOutput"
>transformers.modeling_outputs.Seq2SeqTSModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/time_series_transformer#transformers.TimeSeriesTransformerConfig"
>TimeSeriesTransformerConfig</a>) and inputs.</p>
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
`}}),R=new ot({props:{$$slots:{default:[mt]},$$scope:{ctx:S}}}),W=new Ie({props:{anchor:"transformers.TimeSeriesTransformerForPrediction.forward.example",$$slots:{default:[ht]},$$scope:{ctx:S}}}),{c(){t=m("meta"),u=r(),n=m("p"),c=r(),p(b.$$.fragment),a=r(),p(w.$$.fragment),ue=r(),N=m("p"),N.innerHTML=Ye,pe=r(),p(V.$$.fragment),fe=r(),G=m("ul"),G.innerHTML=He,_e=r(),p(I.$$.fragment),ge=r(),B=m("p"),B.textContent=Pe,Te=r(),Y=m("ul"),Y.innerHTML=Ee,ye=r(),p(H.$$.fragment),be=r(),M=m("div"),p(P.$$.fragment),Ue=r(),oe=m("p"),oe.innerHTML=Qe,je=r(),se=m("p"),se.innerHTML=De,Ce=r(),p(q.$$.fragment),ve=r(),p(E.$$.fragment),we=r(),k=m("div"),p(Q.$$.fragment),Je=r(),ne=m("p"),ne.innerHTML=Ae,ze=r(),ae=m("p"),ae.innerHTML=Oe,Fe=r(),U=m("div"),p(D.$$.fragment),$e=r(),re=m("p"),re.innerHTML=Le,qe=r(),p(Z.$$.fragment),Ze=r(),p(X.$$.fragment),Me=r(),p(A.$$.fragment),ke=r(),x=m("div"),p(O.$$.fragment),Xe=r(),ie=m("p"),ie.innerHTML=Ke,Re=r(),de=m("p"),de.innerHTML=et,We=r(),j=m("div"),p(L.$$.fragment),Ne=r(),ce=m("p"),ce.innerHTML=tt,Ve=r(),p(R.$$.fragment),Ge=r(),p(W.$$.fragment),xe=r(),le=m("p"),this.h()},l(e){const o=it("svelte-u9bgzb",document.head);t=h(o,"META",{name:!0,content:!0}),o.forEach(s),u=i(e),n=h(e,"P",{}),K(n).forEach(s),c=i(e),f(b.$$.fragment,e),a=i(e),f(w.$$.fragment,e),ue=i(e),N=h(e,"P",{"data-svelte-h":!0}),v(N)!=="svelte-gds1oq"&&(N.innerHTML=Ye),pe=i(e),f(V.$$.fragment,e),fe=i(e),G=h(e,"UL",{"data-svelte-h":!0}),v(G)!=="svelte-tiek7a"&&(G.innerHTML=He),_e=i(e),f(I.$$.fragment,e),ge=i(e),B=h(e,"P",{"data-svelte-h":!0}),v(B)!=="svelte-1e7xzkp"&&(B.textContent=Pe),Te=i(e),Y=h(e,"UL",{"data-svelte-h":!0}),v(Y)!=="svelte-noat2w"&&(Y.innerHTML=Ee),ye=i(e),f(H.$$.fragment,e),be=i(e),M=h(e,"DIV",{class:!0});var C=K(M);f(P.$$.fragment,C),Ue=i(C),oe=h(C,"P",{"data-svelte-h":!0}),v(oe)!=="svelte-layuhu"&&(oe.innerHTML=Qe),je=i(C),se=h(C,"P",{"data-svelte-h":!0}),v(se)!=="svelte-hntihc"&&(se.innerHTML=De),Ce=i(C),f(q.$$.fragment,C),C.forEach(s),ve=i(e),f(E.$$.fragment,e),we=i(e),k=h(e,"DIV",{class:!0});var J=K(k);f(Q.$$.fragment,J),Je=i(J),ne=h(J,"P",{"data-svelte-h":!0}),v(ne)!=="svelte-u5epc3"&&(ne.innerHTML=Ae),ze=i(J),ae=h(J,"P",{"data-svelte-h":!0}),v(ae)!=="svelte-hswkmf"&&(ae.innerHTML=Oe),Fe=i(J),U=h(J,"DIV",{class:!0});var z=K(U);f(D.$$.fragment,z),$e=i(z),re=h(z,"P",{"data-svelte-h":!0}),v(re)!=="svelte-15xpp58"&&(re.innerHTML=Le),qe=i(z),f(Z.$$.fragment,z),Ze=i(z),f(X.$$.fragment,z),z.forEach(s),J.forEach(s),Me=i(e),f(A.$$.fragment,e),ke=i(e),x=h(e,"DIV",{class:!0});var F=K(x);f(O.$$.fragment,F),Xe=i(F),ie=h(F,"P",{"data-svelte-h":!0}),v(ie)!=="svelte-1e2pifl"&&(ie.innerHTML=Ke),Re=i(F),de=h(F,"P",{"data-svelte-h":!0}),v(de)!=="svelte-hswkmf"&&(de.innerHTML=et),We=i(F),j=h(F,"DIV",{class:!0});var $=K(j);f(L.$$.fragment,$),Ne=i($),ce=h($,"P",{"data-svelte-h":!0}),v(ce)!=="svelte-z4gu0a"&&(ce.innerHTML=tt),Ve=i($),f(R.$$.fragment,$),Ge=i($),f(W.$$.fragment,$),$.forEach(s),F.forEach(s),xe=i(e),le=h(e,"P",{}),K(le).forEach(s),this.h()},h(){ee(t,"name","hf:doc:metadata"),ee(t,"content",pt),ee(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ee(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ee(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ee(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ee(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){l(document.head,t),d(e,u,o),d(e,n,o),d(e,c,o),_(b,e,o),d(e,a,o),_(w,e,o),d(e,ue,o),d(e,N,o),d(e,pe,o),_(V,e,o),d(e,fe,o),d(e,G,o),d(e,_e,o),_(I,e,o),d(e,ge,o),d(e,B,o),d(e,Te,o),d(e,Y,o),d(e,ye,o),_(H,e,o),d(e,be,o),d(e,M,o),_(P,M,null),l(M,Ue),l(M,oe),l(M,je),l(M,se),l(M,Ce),_(q,M,null),d(e,ve,o),_(E,e,o),d(e,we,o),d(e,k,o),_(Q,k,null),l(k,Je),l(k,ne),l(k,ze),l(k,ae),l(k,Fe),l(k,U),_(D,U,null),l(U,$e),l(U,re),l(U,qe),_(Z,U,null),l(U,Ze),_(X,U,null),d(e,Me,o),_(A,e,o),d(e,ke,o),d(e,x,o),_(O,x,null),l(x,Xe),l(x,ie),l(x,Re),l(x,de),l(x,We),l(x,j),_(L,j,null),l(j,Ne),l(j,ce),l(j,Ve),_(R,j,null),l(j,Ge),_(W,j,null),d(e,xe,o),d(e,le,o),Se=!0},p(e,[o]){const C={};o&2&&(C.$$scope={dirty:o,ctx:e}),q.$set(C);const J={};o&2&&(J.$$scope={dirty:o,ctx:e}),Z.$set(J);const z={};o&2&&(z.$$scope={dirty:o,ctx:e}),X.$set(z);const F={};o&2&&(F.$$scope={dirty:o,ctx:e}),R.$set(F);const $={};o&2&&($.$$scope={dirty:o,ctx:e}),W.$set($)},i(e){Se||(g(b.$$.fragment,e),g(w.$$.fragment,e),g(V.$$.fragment,e),g(I.$$.fragment,e),g(H.$$.fragment,e),g(P.$$.fragment,e),g(q.$$.fragment,e),g(E.$$.fragment,e),g(Q.$$.fragment,e),g(D.$$.fragment,e),g(Z.$$.fragment,e),g(X.$$.fragment,e),g(A.$$.fragment,e),g(O.$$.fragment,e),g(L.$$.fragment,e),g(R.$$.fragment,e),g(W.$$.fragment,e),Se=!0)},o(e){T(b.$$.fragment,e),T(w.$$.fragment,e),T(V.$$.fragment,e),T(I.$$.fragment,e),T(H.$$.fragment,e),T(P.$$.fragment,e),T(q.$$.fragment,e),T(E.$$.fragment,e),T(Q.$$.fragment,e),T(D.$$.fragment,e),T(Z.$$.fragment,e),T(X.$$.fragment,e),T(A.$$.fragment,e),T(O.$$.fragment,e),T(L.$$.fragment,e),T(R.$$.fragment,e),T(W.$$.fragment,e),Se=!1},d(e){e&&(s(u),s(n),s(c),s(a),s(ue),s(N),s(pe),s(fe),s(G),s(_e),s(ge),s(B),s(Te),s(Y),s(ye),s(be),s(M),s(ve),s(we),s(k),s(Me),s(ke),s(x),s(xe),s(le)),s(t),y(b,e),y(w,e),y(V,e),y(I,e),y(H,e),y(P),y(q),y(E,e),y(Q),y(D),y(Z),y(X),y(A,e),y(O),y(L),y(R),y(W)}}}const pt='{"title":"Time Series Transformer","local":"time-series-transformer","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"TimeSeriesTransformerConfig","local":"transformers.TimeSeriesTransformerConfig","sections":[],"depth":2},{"title":"TimeSeriesTransformerModel","local":"transformers.TimeSeriesTransformerModel","sections":[],"depth":2},{"title":"TimeSeriesTransformerForPrediction","local":"transformers.TimeSeriesTransformerForPrediction","sections":[],"depth":2}],"depth":1}';function ft(S){return nt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Mt extends at{constructor(t){super(),rt(this,t,ft,ut,st,{})}}export{Mt as component};
