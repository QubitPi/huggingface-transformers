import{s as ct,o as mt,n as pe}from"../chunks/scheduler.9bc65507.js";import{S as ut,i as ht,g as l,s as r,r as p,A as pt,h as c,f as n,c as i,j as te,u as f,x as v,k as oe,y as u,a as s,v as g,d as _,t as b,w as y}from"../chunks/index.707bf1b6.js";import{T as lt}from"../chunks/Tip.c2ecdbf4.js";import{D as he}from"../chunks/Docstring.17db21ae.js";import{C as Pe}from"../chunks/CodeBlock.54a9f38d.js";import{E as He}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as me}from"../chunks/Heading.342b1fa6.js";function ft(x){let o,h;return o=new Pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9mb3JtZXJDb25maWclMkMlMjBBdXRvZm9ybWVyTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwZGVmYXVsdCUyMEF1dG9mb3JtZXIlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMEF1dG9mb3JtZXJDb25maWcoKSUwQSUwQSUyMyUyMFJhbmRvbWx5JTIwaW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBBdXRvZm9ybWVyTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoformerConfig, AutoformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a default Autoformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = AutoformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Randomly initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){p(o.$$.fragment)},l(a){f(o.$$.fragment,a)},m(a,m){g(o,a,m),h=!0},p:pe,i(a){h||(_(o.$$.fragment,a),h=!0)},o(a){b(o.$$.fragment,a),h=!1},d(a){y(o,a)}}}function gt(x){let o,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=l("p"),o.innerHTML=h},l(a){o=c(a,"P",{"data-svelte-h":!0}),v(o)!=="svelte-fincs2"&&(o.innerHTML=h)},m(a,m){s(a,o,m)},p:pe,d(a){a&&n(o)}}}function _t(x){let o,h="Examples:",a,m,M;return m=new Pe({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMGhmX2h1Yl9kb3dubG9hZCUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9mb3JtZXJNb2RlbCUwQSUwQWZpbGUlMjAlM0QlMjBoZl9odWJfZG93bmxvYWQoJTBBJTIwJTIwJTIwJTIwcmVwb19pZCUzRCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZ0b3VyaXNtLW1vbnRobHktYmF0Y2glMjIlMkMlMjBmaWxlbmFtZSUzRCUyMnRyYWluLWJhdGNoLnB0JTIyJTJDJTIwcmVwb190eXBlJTNEJTIyZGF0YXNldCUyMiUwQSklMEFiYXRjaCUyMCUzRCUyMHRvcmNoLmxvYWQoZmlsZSklMEElMEFtb2RlbCUyMCUzRCUyMEF1dG9mb3JtZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyaHVnZ2luZ2ZhY2UlMkZhdXRvZm9ybWVyLXRvdXJpc20tbW9udGhseSUyMiklMEElMEElMjMlMjBkdXJpbmclMjB0cmFpbmluZyUyQyUyMG9uZSUyMHByb3ZpZGVzJTIwYm90aCUyMHBhc3QlMjBhbmQlMjBmdXR1cmUlMjB2YWx1ZXMlMEElMjMlMjBhcyUyMHdlbGwlMjBhcyUyMHBvc3NpYmxlJTIwYWRkaXRpb25hbCUyMGZlYXR1cmVzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCUwQSUyMCUyMCUyMCUyMHBhc3RfdmFsdWVzJTNEYmF0Y2glNUIlMjJwYXN0X3ZhbHVlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHBhc3RfdGltZV9mZWF0dXJlcyUzRGJhdGNoJTVCJTIycGFzdF90aW1lX2ZlYXR1cmVzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwcGFzdF9vYnNlcnZlZF9tYXNrJTNEYmF0Y2glNUIlMjJwYXN0X29ic2VydmVkX21hc2slMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBzdGF0aWNfY2F0ZWdvcmljYWxfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMnN0YXRpY19jYXRlZ29yaWNhbF9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGZ1dHVyZV92YWx1ZXMlM0RiYXRjaCU1QiUyMmZ1dHVyZV92YWx1ZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBmdXR1cmVfdGltZV9mZWF0dXJlcyUzRGJhdGNoJTVCJTIyZnV0dXJlX3RpbWVfZmVhdHVyZXMlMjIlNUQlMkMlMEEpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGUlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>file = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;hf-internal-testing/tourism-monthly-batch&quot;</span>, filename=<span class="hljs-string">&quot;train-batch.pt&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = torch.load(file)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoformerModel.from_pretrained(<span class="hljs-string">&quot;huggingface/autoformer-tourism-monthly&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># during training, one provides both past and future values</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as well as possible additional features</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    past_values=batch[<span class="hljs-string">&quot;past_values&quot;</span>],
<span class="hljs-meta">... </span>    past_time_features=batch[<span class="hljs-string">&quot;past_time_features&quot;</span>],
<span class="hljs-meta">... </span>    past_observed_mask=batch[<span class="hljs-string">&quot;past_observed_mask&quot;</span>],
<span class="hljs-meta">... </span>    static_categorical_features=batch[<span class="hljs-string">&quot;static_categorical_features&quot;</span>],
<span class="hljs-meta">... </span>    future_values=batch[<span class="hljs-string">&quot;future_values&quot;</span>],
<span class="hljs-meta">... </span>    future_time_features=batch[<span class="hljs-string">&quot;future_time_features&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`,wrap:!1}}),{c(){o=l("p"),o.textContent=h,a=r(),p(m.$$.fragment)},l(d){o=c(d,"P",{"data-svelte-h":!0}),v(o)!=="svelte-kvfsh7"&&(o.textContent=h),a=i(d),f(m.$$.fragment,d)},m(d,T){s(d,o,T),s(d,a,T),g(m,d,T),M=!0},p:pe,i(d){M||(_(m.$$.fragment,d),M=!0)},o(d){b(m.$$.fragment,d),M=!1},d(d){d&&(n(o),n(a)),y(m,d)}}}function bt(x){let o,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=l("p"),o.innerHTML=h},l(a){o=c(a,"P",{"data-svelte-h":!0}),v(o)!=="svelte-fincs2"&&(o.innerHTML=h)},m(a,m){s(a,o,m)},p:pe,d(a){a&&n(o)}}}function yt(x){let o,h="Examples:",a,m,M;return m=new Pe({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMGhmX2h1Yl9kb3dubG9hZCUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9mb3JtZXJGb3JQcmVkaWN0aW9uJTBBJTBBZmlsZSUyMCUzRCUyMGhmX2h1Yl9kb3dubG9hZCglMEElMjAlMjAlMjAlMjByZXBvX2lkJTNEJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRnRvdXJpc20tbW9udGhseS1iYXRjaCUyMiUyQyUyMGZpbGVuYW1lJTNEJTIydHJhaW4tYmF0Y2gucHQlMjIlMkMlMjByZXBvX3R5cGUlM0QlMjJkYXRhc2V0JTIyJTBBKSUwQWJhdGNoJTIwJTNEJTIwdG9yY2gubG9hZChmaWxlKSUwQSUwQW1vZGVsJTIwJTNEJTIwQXV0b2Zvcm1lckZvclByZWRpY3Rpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmh1Z2dpbmdmYWNlJTJGYXV0b2Zvcm1lci10b3VyaXNtLW1vbnRobHklMjIpJTBBJTBBJTIzJTIwZHVyaW5nJTIwdHJhaW5pbmclMkMlMjBvbmUlMjBwcm92aWRlcyUyMGJvdGglMjBwYXN0JTIwYW5kJTIwZnV0dXJlJTIwdmFsdWVzJTBBJTIzJTIwYXMlMjB3ZWxsJTIwYXMlMjBwb3NzaWJsZSUyMGFkZGl0aW9uYWwlMjBmZWF0dXJlcyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCglMEElMjAlMjAlMjAlMjBwYXN0X3ZhbHVlcyUzRGJhdGNoJTVCJTIycGFzdF92YWx1ZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBwYXN0X3RpbWVfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMnBhc3RfdGltZV9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHBhc3Rfb2JzZXJ2ZWRfbWFzayUzRGJhdGNoJTVCJTIycGFzdF9vYnNlcnZlZF9tYXNrJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwc3RhdGljX2NhdGVnb3JpY2FsX2ZlYXR1cmVzJTNEYmF0Y2glNUIlMjJzdGF0aWNfY2F0ZWdvcmljYWxfZmVhdHVyZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBzdGF0aWNfcmVhbF9mZWF0dXJlcyUzRGJhdGNoJTVCJTIyc3RhdGljX3JlYWxfZmVhdHVyZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBmdXR1cmVfdmFsdWVzJTNEYmF0Y2glNUIlMjJmdXR1cmVfdmFsdWVzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwZnV0dXJlX3RpbWVfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMmZ1dHVyZV90aW1lX2ZlYXR1cmVzJTIyJTVEJTJDJTBBKSUwQSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb3NzLmJhY2t3YXJkKCklMEElMEElMjMlMjBkdXJpbmclMjBpbmZlcmVuY2UlMkMlMjBvbmUlMjBvbmx5JTIwcHJvdmlkZXMlMjBwYXN0JTIwdmFsdWVzJTBBJTIzJTIwYXMlMjB3ZWxsJTIwYXMlMjBwb3NzaWJsZSUyMGFkZGl0aW9uYWwlMjBmZWF0dXJlcyUwQSUyMyUyMHRoZSUyMG1vZGVsJTIwYXV0b3JlZ3Jlc3NpdmVseSUyMGdlbmVyYXRlcyUyMGZ1dHVyZSUyMHZhbHVlcyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSglMEElMjAlMjAlMjAlMjBwYXN0X3ZhbHVlcyUzRGJhdGNoJTVCJTIycGFzdF92YWx1ZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBwYXN0X3RpbWVfZmVhdHVyZXMlM0RiYXRjaCU1QiUyMnBhc3RfdGltZV9mZWF0dXJlcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHBhc3Rfb2JzZXJ2ZWRfbWFzayUzRGJhdGNoJTVCJTIycGFzdF9vYnNlcnZlZF9tYXNrJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwc3RhdGljX2NhdGVnb3JpY2FsX2ZlYXR1cmVzJTNEYmF0Y2glNUIlMjJzdGF0aWNfY2F0ZWdvcmljYWxfZmVhdHVyZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBzdGF0aWNfcmVhbF9mZWF0dXJlcyUzRGJhdGNoJTVCJTIyc3RhdGljX3JlYWxfZmVhdHVyZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBmdXR1cmVfdGltZV9mZWF0dXJlcyUzRGJhdGNoJTVCJTIyZnV0dXJlX3RpbWVfZmVhdHVyZXMlMjIlNUQlMkMlMEEpJTBBJTBBbWVhbl9wcmVkaWN0aW9uJTIwJTNEJTIwb3V0cHV0cy5zZXF1ZW5jZXMubWVhbihkaW0lM0QxKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoformerForPrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>file = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;hf-internal-testing/tourism-monthly-batch&quot;</span>, filename=<span class="hljs-string">&quot;train-batch.pt&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = torch.load(file)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoformerForPrediction.from_pretrained(<span class="hljs-string">&quot;huggingface/autoformer-tourism-monthly&quot;</span>)

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

<span class="hljs-meta">&gt;&gt;&gt; </span>mean_prediction = outputs.sequences.mean(dim=<span class="hljs-number">1</span>)`,wrap:!1}}),{c(){o=l("p"),o.textContent=h,a=r(),p(m.$$.fragment)},l(d){o=c(d,"P",{"data-svelte-h":!0}),v(o)!=="svelte-kvfsh7"&&(o.textContent=h),a=i(d),f(m.$$.fragment,d)},m(d,T){s(d,o,T),s(d,a,T),g(m,d,T),M=!0},p:pe,i(d){M||(_(m.$$.fragment,d),M=!0)},o(d){b(m.$$.fragment,d),M=!1},d(d){d&&(n(o),n(a)),y(m,d)}}}function vt(x){let o,h,a,m,M,d,T,fe,N,Se='Autoformerモデルは、「<a href="https://arxiv.org/abs/2106.13008" rel="nofollow">Autoformer: Decomposition Transformers with Auto-Correlation for Long-Term Series Forecasting</a>」という論文でHaixu Wu、Jiehui Xu、Jianmin Wang、Mingsheng Longによって提案されました。',ge,V,Qe="このモデルは、予測プロセス中にトレンドと季節性成分を逐次的に分解できる深層分解アーキテクチャとしてTransformerを増強します。",_e,G,De="論文の要旨は以下の通りです：",be,R,Le="<em>例えば異常気象の早期警告や長期的なエネルギー消費計画といった実応用において、予測時間を延長することは重要な要求です。本論文では、時系列の長期予測問題を研究しています。以前のTransformerベースのモデルは、長距離依存関係を発見するために様々なセルフアテンション機構を採用しています。しかし、長期未来の複雑な時間的パターンによってモデルが信頼できる依存関係を見つけることを妨げられます。また、Transformerは、長い系列の効率化のためにポイントワイズなセルフアテンションのスパースバージョンを採用する必要があり、情報利用のボトルネックとなります。Transformerを超えて、我々は自己相関機構を持つ新しい分解アーキテクチャとしてAutoformerを設計しました。系列分解の事前処理の慣行を破り、それを深層モデルの基本的な内部ブロックとして革新します。この設計は、複雑な時系列に対するAutoformerの進行的な分解能力を強化します。さらに、確率過程理論に触発されて、系列の周期性に基づいた自己相関機構を設計し、サブ系列レベルでの依存関係の発見と表現の集約を行います。自己相関は効率と精度の両方でセルフアテンションを上回ります。長期予測において、Autoformerは、エネルギー、交通、経済、気象、疾病の5つの実用的な応用をカバーする6つのベンチマークで38%の相対的な改善をもたらし、最先端の精度を達成します。</em>",ye,I,Oe=`このモデルは<a href="https://huggingface.co/elisim" rel="nofollow">elisim</a>と<a href="https://huggingface.co/kashif" rel="nofollow">kashif</a>より提供されました。
オリジナルのコードは<a href="https://github.com/thuml/Autoformer" rel="nofollow">こちら</a>で見ることができます。`,ve,Y,Me,E,Ke="Autoformerの使用を開始するのに役立つ公式のHugging Faceおよびコミュニティ（🌎で示されている）の参考資料の一覧です。ここに参考資料を提出したい場合は、気兼ねなくPull Requestを開いてください。私たちはそれをレビューいたします！参考資料は、既存のものを複製するのではなく、何か新しいことを示すことが理想的です。",Te,H,et='<li>HuggingFaceブログでAutoformerに関するブログ記事をチェックしてください：<a href="https://huggingface.co/blog/autoformer" rel="nofollow">はい、Transformersは時系列予測に効果的です（+ Autoformer）</a></li>',we,P,ke,w,S,Fe,ne,tt=`This is the configuration class to store the configuration of an <a href="/docs/transformers/main/ja/model_doc/autoformer#transformers.AutoformerModel">AutoformerModel</a>. It is used to instantiate an
Autoformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Autoformer
<a href="https://huggingface.co/huggingface/autoformer-tourism-monthly" rel="nofollow">huggingface/autoformer-tourism-monthly</a>
architecture.`,ze,ae,ot=`Configuration objects inherit from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Ue,Z,je,Q,xe,k,D,Ze,se,nt=`The bare Autoformer Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,qe,re,at=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,We,J,L,Xe,ie,st='The <a href="/docs/transformers/main/ja/model_doc/autoformer#transformers.AutoformerModel">AutoformerModel</a> forward method, overrides the <code>__call__</code> special method.',Be,q,Ne,W,Je,O,Ae,j,K,Ve,de,rt=`The Autoformer Model with a distribution head on top for time-series forecasting.
This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ge,le,it=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Re,A,ee,Ie,ce,dt='The <a href="/docs/transformers/main/ja/model_doc/autoformer#transformers.AutoformerForPrediction">AutoformerForPrediction</a> forward method, overrides the <code>__call__</code> special method.',Ye,X,Ee,B,Ce,ue,$e;return M=new me({props:{title:"Autoformer",local:"autoformer",headingTag:"h1"}}),T=new me({props:{title:"概要",local:"概要",headingTag:"h2"}}),Y=new me({props:{title:"参考資料",local:"参考資料",headingTag:"h2"}}),P=new me({props:{title:"AutoformerConfig",local:"transformers.AutoformerConfig",headingTag:"h2"}}),S=new he({props:{name:"class transformers.AutoformerConfig",anchor:"transformers.AutoformerConfig",parameters:[{name:"prediction_length",val:": Optional = None"},{name:"context_length",val:": Optional = None"},{name:"distribution_output",val:": str = 'student_t'"},{name:"loss",val:": str = 'nll'"},{name:"input_size",val:": int = 1"},{name:"lags_sequence",val:": List = [1, 2, 3, 4, 5, 6, 7]"},{name:"scaling",val:": bool = True"},{name:"num_time_features",val:": int = 0"},{name:"num_dynamic_real_features",val:": int = 0"},{name:"num_static_categorical_features",val:": int = 0"},{name:"num_static_real_features",val:": int = 0"},{name:"cardinality",val:": Optional = None"},{name:"embedding_dimension",val:": Optional = None"},{name:"d_model",val:": int = 64"},{name:"encoder_attention_heads",val:": int = 2"},{name:"decoder_attention_heads",val:": int = 2"},{name:"encoder_layers",val:": int = 2"},{name:"decoder_layers",val:": int = 2"},{name:"encoder_ffn_dim",val:": int = 32"},{name:"decoder_ffn_dim",val:": int = 32"},{name:"activation_function",val:": str = 'gelu'"},{name:"dropout",val:": float = 0.1"},{name:"encoder_layerdrop",val:": float = 0.1"},{name:"decoder_layerdrop",val:": float = 0.1"},{name:"attention_dropout",val:": float = 0.1"},{name:"activation_dropout",val:": float = 0.1"},{name:"num_parallel_samples",val:": int = 100"},{name:"init_std",val:": float = 0.02"},{name:"use_cache",val:": bool = True"},{name:"is_encoder_decoder",val:" = True"},{name:"label_length",val:": int = 10"},{name:"moving_average",val:": int = 25"},{name:"autocorrelation_factor",val:": int = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AutoformerConfig.prediction_length",description:`<strong>prediction_length</strong> (<code>int</code>) &#x2014;
The prediction length for the decoder. In other words, the prediction horizon of the model.`,name:"prediction_length"},{anchor:"transformers.AutoformerConfig.context_length",description:`<strong>context_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>prediction_length</code>) &#x2014;
The context length for the encoder. If unset, the context length will be the same as the
<code>prediction_length</code>.`,name:"context_length"},{anchor:"transformers.AutoformerConfig.distribution_output",description:`<strong>distribution_output</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;student_t&quot;</code>) &#x2014;
The distribution emission head for the model. Could be either &#x201C;student_t&#x201D;, &#x201C;normal&#x201D; or &#x201C;negative_binomial&#x201D;.`,name:"distribution_output"},{anchor:"transformers.AutoformerConfig.loss",description:`<strong>loss</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;nll&quot;</code>) &#x2014;
The loss function for the model corresponding to the <code>distribution_output</code> head. For parametric
distributions it is the negative log likelihood (nll) - which currently is the only supported one.`,name:"loss"},{anchor:"transformers.AutoformerConfig.input_size",description:`<strong>input_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The size of the target variable which by default is 1 for univariate targets. Would be &gt; 1 in case of
multivariate targets.`,name:"input_size"},{anchor:"transformers.AutoformerConfig.lags_sequence",description:`<strong>lags_sequence</strong> (<code>list[int]</code>, <em>optional</em>, defaults to <code>[1, 2, 3, 4, 5, 6, 7]</code>) &#x2014;
The lags of the input time series as covariates often dictated by the frequency. Default is <code>[1, 2, 3, 4, 5, 6, 7]</code>.`,name:"lags_sequence"},{anchor:"transformers.AutoformerConfig.scaling",description:`<strong>scaling</strong> (<code>bool</code>, <em>optional</em> defaults to <code>True</code>) &#x2014;
Whether to scale the input targets.`,name:"scaling"},{anchor:"transformers.AutoformerConfig.num_time_features",description:`<strong>num_time_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of time features in the input time series.`,name:"num_time_features"},{anchor:"transformers.AutoformerConfig.num_dynamic_real_features",description:`<strong>num_dynamic_real_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of dynamic real valued features.`,name:"num_dynamic_real_features"},{anchor:"transformers.AutoformerConfig.num_static_categorical_features",description:`<strong>num_static_categorical_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of static categorical features.`,name:"num_static_categorical_features"},{anchor:"transformers.AutoformerConfig.num_static_real_features",description:`<strong>num_static_real_features</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of static real valued features.`,name:"num_static_real_features"},{anchor:"transformers.AutoformerConfig.cardinality",description:`<strong>cardinality</strong> (<code>list[int]</code>, <em>optional</em>) &#x2014;
The cardinality (number of different values) for each of the static categorical features. Should be a list
of integers, having the same length as <code>num_static_categorical_features</code>. Cannot be <code>None</code> if
<code>num_static_categorical_features</code> is &gt; 0.`,name:"cardinality"},{anchor:"transformers.AutoformerConfig.embedding_dimension",description:`<strong>embedding_dimension</strong> (<code>list[int]</code>, <em>optional</em>) &#x2014;
The dimension of the embedding for each of the static categorical features. Should be a list of integers,
having the same length as <code>num_static_categorical_features</code>. Cannot be <code>None</code> if
<code>num_static_categorical_features</code> is &gt; 0.`,name:"embedding_dimension"},{anchor:"transformers.AutoformerConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality of the transformer layers.`,name:"d_model"},{anchor:"transformers.AutoformerConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.AutoformerConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.AutoformerConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.AutoformerConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.AutoformerConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in encoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.AutoformerConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.AutoformerConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and decoder. If string, <code>&quot;gelu&quot;</code> and
<code>&quot;relu&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.AutoformerConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the encoder, and decoder.`,name:"dropout"},{anchor:"transformers.AutoformerConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention and fully connected layers for each encoder layer.`,name:"encoder_layerdrop"},{anchor:"transformers.AutoformerConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention and fully connected layers for each decoder layer.`,name:"decoder_layerdrop"},{anchor:"transformers.AutoformerConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.AutoformerConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability used between the two layers of the feed-forward networks.`,name:"activation_dropout"},{anchor:"transformers.AutoformerConfig.num_parallel_samples",description:`<strong>num_parallel_samples</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
The number of samples to generate in parallel for each time step of inference.`,name:"num_parallel_samples"},{anchor:"transformers.AutoformerConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated normal weight initialization distribution.`,name:"init_std"},{anchor:"transformers.AutoformerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use the past key/values attentions (if applicable to the model) to speed up decoding.`,name:"use_cache"},{anchor:"transformers.AutoformerConfig.label_length",description:`<strong>label_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Start token length of the Autoformer decoder, which is used for direct multi-step prediction (i.e.
non-autoregressive generation).`,name:"label_length"},{anchor:"transformers.AutoformerConfig.moving_average",description:`<strong>moving_average</strong> (<code>int</code>, defaults to 25) &#x2014;
The window size of the moving average. In practice, it&#x2019;s the kernel size in AvgPool1d of the Decomposition
Layer.`,name:"moving_average"},{anchor:"transformers.AutoformerConfig.autocorrelation_factor",description:`<strong>autocorrelation_factor</strong> (<code>int</code>, defaults to 3) &#x2014;
&#x201C;Attention&#x201D; (i.e. AutoCorrelation mechanism) factor which is used to find top k autocorrelations delays.
It&#x2019;s recommended in the paper to set it to a number between 1 and 5.`,name:"autocorrelation_factor"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/autoformer/configuration_autoformer.py#L30"}}),Z=new He({props:{anchor:"transformers.AutoformerConfig.example",$$slots:{default:[ft]},$$scope:{ctx:x}}}),Q=new me({props:{title:"AutoformerModel",local:"transformers.AutoformerModel",headingTag:"h2"}}),D=new he({props:{name:"class transformers.AutoformerModel",anchor:"transformers.AutoformerModel",parameters:[{name:"config",val:": AutoformerConfig"}],parametersDescription:[{anchor:"transformers.AutoformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/autoformer#transformers.AutoformerConfig">AutoformerConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/autoformer/modeling_autoformer.py#L1429"}}),L=new he({props:{name:"forward",anchor:"transformers.AutoformerModel.forward",parameters:[{name:"past_values",val:": Tensor"},{name:"past_time_features",val:": Tensor"},{name:"past_observed_mask",val:": Tensor"},{name:"static_categorical_features",val:": Optional = None"},{name:"static_real_features",val:": Optional = None"},{name:"future_values",val:": Optional = None"},{name:"future_time_features",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AutoformerModel.forward.past_values",description:`<strong>past_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Past values of the time series, that serve as context in order to predict the future. These values may
contain lags, i.e. additional values from the past which are added in order to serve as &#x201C;extra context&#x201D;.
The <code>past_values</code> is what the Transformer encoder gets as input (with optional additional features, such as
<code>static_categorical_features</code>, <code>static_real_features</code>, <code>past_time_features</code>).</p>
<p>The sequence length here is equal to <code>context_length</code> + <code>max(config.lags_sequence)</code>.</p>
<p>Missing values need to be replaced with zeros.`,name:"past_values"},{anchor:"transformers.AutoformerModel.forward.past_time_features",description:`<strong>past_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_features)</code>, <em>optional</em>) &#x2014;
Optional time features, which the model internally will add to <code>past_values</code>. These could be things like
&#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as Fourier features). These
could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at which point in life&#x201D; a
time-series is. Age features have small values for distant past time steps and increase monotonically the
more we approach the current time step.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional time features.</p>
<p>The Autoformer only learns additional embeddings for <code>static_categorical_features</code>.`,name:"past_time_features"},{anchor:"transformers.AutoformerModel.forward.past_observed_mask",description:`<strong>past_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>past_values</code> were observed and which were missing. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>`,name:"past_observed_mask"},{anchor:"transformers.AutoformerModel.forward.static_categorical_features",description:`<strong>static_categorical_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number of static categorical features)</code>, <em>optional</em>) &#x2014;
Optional static categorical features for which the model will learn an embedding, which it will add to the
values of the time series.</p>
<p>Static categorical features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static categorical feature is a time series ID.`,name:"static_categorical_features"},{anchor:"transformers.AutoformerModel.forward.static_real_features",description:`<strong>static_real_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, number of static real features)</code>, <em>optional</em>) &#x2014;
Optional static real features which the model will add to the values of the time series.</p>
<p>Static real features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static real feature is promotion information.`,name:"static_real_features"},{anchor:"transformers.AutoformerModel.forward.future_values",description:`<strong>future_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length)</code>) &#x2014;
Future values of the time series, that serve as labels for the model. The <code>future_values</code> is what the
Transformer needs to learn to output, given the <code>past_values</code>.</p>
<p>See the demo notebook and code snippets for details.</p>
<p>Missing values need to be replaced with zeros.`,name:"future_values"},{anchor:"transformers.AutoformerModel.forward.future_time_features",description:`<strong>future_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length, num_features)</code>, <em>optional</em>) &#x2014;
Optional time features, which the model internally will add to <code>future_values</code>. These could be things like
&#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as Fourier features). These
could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at which point in life&#x201D; a
time-series is. Age features have small values for distant past time steps and increase monotonically the
more we approach the current time step.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional features.</p>
<p>The Autoformer only learns additional embeddings for <code>static_categorical_features</code>.`,name:"future_time_features"},{anchor:"transformers.AutoformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AutoformerModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. By default, a causal mask will be used, to
make sure the model can only look at previous inputs in order to predict the future.`,name:"decoder_attention_mask"},{anchor:"transformers.AutoformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AutoformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.AutoformerModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.AutoformerModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of <code>last_hidden_state</code>, <code>hidden_states</code> (<em>optional</em>) and <code>attentions</code> (<em>optional</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> (<em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.AutoformerModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.AutoformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AutoformerModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.AutoformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AutoformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AutoformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/autoformer/modeling_autoformer.py#L1607",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.autoformer.modeling_autoformer.AutoformerModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/autoformer#transformers.AutoformerConfig"
>AutoformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>trend</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Trend tensor for each time series.</p>
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
<p><strong>static_features:</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature size)</code>, <em>optional</em>) — Static features of each time series’ in a batch which are copied to the covariates at inference time.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.autoformer.modeling_autoformer.AutoformerModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),q=new lt({props:{$$slots:{default:[gt]},$$scope:{ctx:x}}}),W=new He({props:{anchor:"transformers.AutoformerModel.forward.example",$$slots:{default:[_t]},$$scope:{ctx:x}}}),O=new me({props:{title:"AutoformerForPrediction",local:"transformers.AutoformerForPrediction",headingTag:"h2"}}),K=new he({props:{name:"class transformers.AutoformerForPrediction",anchor:"transformers.AutoformerForPrediction",parameters:[{name:"config",val:": AutoformerConfig"}],parametersDescription:[{anchor:"transformers.AutoformerForPrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/autoformer#transformers.AutoformerConfig">AutoformerConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/autoformer/modeling_autoformer.py#L1765"}}),ee=new he({props:{name:"forward",anchor:"transformers.AutoformerForPrediction.forward",parameters:[{name:"past_values",val:": Tensor"},{name:"past_time_features",val:": Tensor"},{name:"past_observed_mask",val:": Tensor"},{name:"static_categorical_features",val:": Optional = None"},{name:"static_real_features",val:": Optional = None"},{name:"future_values",val:": Optional = None"},{name:"future_time_features",val:": Optional = None"},{name:"future_observed_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.AutoformerForPrediction.forward.past_values",description:`<strong>past_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Past values of the time series, that serve as context in order to predict the future. These values may
contain lags, i.e. additional values from the past which are added in order to serve as &#x201C;extra context&#x201D;.
The <code>past_values</code> is what the Transformer encoder gets as input (with optional additional features, such as
<code>static_categorical_features</code>, <code>static_real_features</code>, <code>past_time_features</code>).</p>
<p>The sequence length here is equal to <code>context_length</code> + <code>max(config.lags_sequence)</code>.</p>
<p>Missing values need to be replaced with zeros.`,name:"past_values"},{anchor:"transformers.AutoformerForPrediction.forward.past_time_features",description:`<strong>past_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_features)</code>, <em>optional</em>) &#x2014;
Optional time features, which the model internally will add to <code>past_values</code>. These could be things like
&#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as Fourier features). These
could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at which point in life&#x201D; a
time-series is. Age features have small values for distant past time steps and increase monotonically the
more we approach the current time step.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional time features.</p>
<p>The Autoformer only learns additional embeddings for <code>static_categorical_features</code>.`,name:"past_time_features"},{anchor:"transformers.AutoformerForPrediction.forward.past_observed_mask",description:`<strong>past_observed_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Boolean mask to indicate which <code>past_values</code> were observed and which were missing. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for values that are <strong>observed</strong>,</li>
<li>0 for values that are <strong>missing</strong> (i.e. NaNs that were replaced by zeros).</li>
</ul>`,name:"past_observed_mask"},{anchor:"transformers.AutoformerForPrediction.forward.static_categorical_features",description:`<strong>static_categorical_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number of static categorical features)</code>, <em>optional</em>) &#x2014;
Optional static categorical features for which the model will learn an embedding, which it will add to the
values of the time series.</p>
<p>Static categorical features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static categorical feature is a time series ID.`,name:"static_categorical_features"},{anchor:"transformers.AutoformerForPrediction.forward.static_real_features",description:`<strong>static_real_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, number of static real features)</code>, <em>optional</em>) &#x2014;
Optional static real features which the model will add to the values of the time series.</p>
<p>Static real features are features which have the same value for all time steps (static over time).</p>
<p>A typical example of a static real feature is promotion information.`,name:"static_real_features"},{anchor:"transformers.AutoformerForPrediction.forward.future_values",description:`<strong>future_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length)</code>) &#x2014;
Future values of the time series, that serve as labels for the model. The <code>future_values</code> is what the
Transformer needs to learn to output, given the <code>past_values</code>.</p>
<p>See the demo notebook and code snippets for details.</p>
<p>Missing values need to be replaced with zeros.`,name:"future_values"},{anchor:"transformers.AutoformerForPrediction.forward.future_time_features",description:`<strong>future_time_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, prediction_length, num_features)</code>, <em>optional</em>) &#x2014;
Optional time features, which the model internally will add to <code>future_values</code>. These could be things like
&#x201C;month of year&#x201D;, &#x201C;day of the month&#x201D;, etc. encoded as vectors (for instance as Fourier features). These
could also be so-called &#x201C;age&#x201D; features, which basically help the model know &#x201C;at which point in life&#x201D; a
time-series is. Age features have small values for distant past time steps and increase monotonically the
more we approach the current time step.</p>
<p>These features serve as the &#x201C;positional encodings&#x201D; of the inputs. So contrary to a model like BERT, where
the position encodings are learned from scratch internally as parameters of the model, the Time Series
Transformer requires to provide additional features.</p>
<p>The Autoformer only learns additional embeddings for <code>static_categorical_features</code>.`,name:"future_time_features"},{anchor:"transformers.AutoformerForPrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AutoformerForPrediction.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on certain token indices. By default, a causal mask will be used, to
make sure the model can only look at previous inputs in order to predict the future.`,name:"decoder_attention_mask"},{anchor:"transformers.AutoformerForPrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AutoformerForPrediction.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.AutoformerForPrediction.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.AutoformerForPrediction.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of <code>last_hidden_state</code>, <code>hidden_states</code> (<em>optional</em>) and <code>attentions</code> (<em>optional</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> (<em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.AutoformerForPrediction.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.AutoformerForPrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AutoformerForPrediction.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.AutoformerForPrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AutoformerForPrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AutoformerForPrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/autoformer/modeling_autoformer.py#L1809",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.Seq2SeqTSPredictionOutput"
>transformers.modeling_outputs.Seq2SeqTSPredictionOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/autoformer#transformers.AutoformerConfig"
>AutoformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when a <code>future_values</code> is provided) — Distributional loss.</p>
</li>
<li>
<p><strong>params</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_samples, num_params)</code>) — Parameters of the chosen distribution.</p>
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
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
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
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.Seq2SeqTSPredictionOutput"
>transformers.modeling_outputs.Seq2SeqTSPredictionOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),X=new lt({props:{$$slots:{default:[bt]},$$scope:{ctx:x}}}),B=new He({props:{anchor:"transformers.AutoformerForPrediction.forward.example",$$slots:{default:[yt]},$$scope:{ctx:x}}}),{c(){o=l("meta"),h=r(),a=l("p"),m=r(),p(M.$$.fragment),d=r(),p(T.$$.fragment),fe=r(),N=l("p"),N.innerHTML=Se,ge=r(),V=l("p"),V.textContent=Qe,_e=r(),G=l("p"),G.textContent=De,be=r(),R=l("p"),R.innerHTML=Le,ye=r(),I=l("p"),I.innerHTML=Oe,ve=r(),p(Y.$$.fragment),Me=r(),E=l("p"),E.textContent=Ke,Te=r(),H=l("ul"),H.innerHTML=et,we=r(),p(P.$$.fragment),ke=r(),w=l("div"),p(S.$$.fragment),Fe=r(),ne=l("p"),ne.innerHTML=tt,ze=r(),ae=l("p"),ae.innerHTML=ot,Ue=r(),p(Z.$$.fragment),je=r(),p(Q.$$.fragment),xe=r(),k=l("div"),p(D.$$.fragment),Ze=r(),se=l("p"),se.innerHTML=nt,qe=r(),re=l("p"),re.innerHTML=at,We=r(),J=l("div"),p(L.$$.fragment),Xe=r(),ie=l("p"),ie.innerHTML=st,Be=r(),p(q.$$.fragment),Ne=r(),p(W.$$.fragment),Je=r(),p(O.$$.fragment),Ae=r(),j=l("div"),p(K.$$.fragment),Ve=r(),de=l("p"),de.innerHTML=rt,Ge=r(),le=l("p"),le.innerHTML=it,Re=r(),A=l("div"),p(ee.$$.fragment),Ie=r(),ce=l("p"),ce.innerHTML=dt,Ye=r(),p(X.$$.fragment),Ee=r(),p(B.$$.fragment),Ce=r(),ue=l("p"),this.h()},l(e){const t=pt("svelte-u9bgzb",document.head);o=c(t,"META",{name:!0,content:!0}),t.forEach(n),h=i(e),a=c(e,"P",{}),te(a).forEach(n),m=i(e),f(M.$$.fragment,e),d=i(e),f(T.$$.fragment,e),fe=i(e),N=c(e,"P",{"data-svelte-h":!0}),v(N)!=="svelte-1biis66"&&(N.innerHTML=Se),ge=i(e),V=c(e,"P",{"data-svelte-h":!0}),v(V)!=="svelte-4yk3m3"&&(V.textContent=Qe),_e=i(e),G=c(e,"P",{"data-svelte-h":!0}),v(G)!=="svelte-1pvwld5"&&(G.textContent=De),be=i(e),R=c(e,"P",{"data-svelte-h":!0}),v(R)!=="svelte-5n66si"&&(R.innerHTML=Le),ye=i(e),I=c(e,"P",{"data-svelte-h":!0}),v(I)!=="svelte-8xzcys"&&(I.innerHTML=Oe),ve=i(e),f(Y.$$.fragment,e),Me=i(e),E=c(e,"P",{"data-svelte-h":!0}),v(E)!=="svelte-12gspye"&&(E.textContent=Ke),Te=i(e),H=c(e,"UL",{"data-svelte-h":!0}),v(H)!=="svelte-1gey8fg"&&(H.innerHTML=et),we=i(e),f(P.$$.fragment,e),ke=i(e),w=c(e,"DIV",{class:!0});var C=te(w);f(S.$$.fragment,C),Fe=i(C),ne=c(C,"P",{"data-svelte-h":!0}),v(ne)!=="svelte-1e76e45"&&(ne.innerHTML=tt),ze=i(C),ae=c(C,"P",{"data-svelte-h":!0}),v(ae)!=="svelte-rcr1nw"&&(ae.innerHTML=ot),Ue=i(C),f(Z.$$.fragment,C),C.forEach(n),je=i(e),f(Q.$$.fragment,e),xe=i(e),k=c(e,"DIV",{class:!0});var $=te(k);f(D.$$.fragment,$),Ze=i($),se=c($,"P",{"data-svelte-h":!0}),v(se)!=="svelte-1bx3dba"&&(se.innerHTML=nt),qe=i($),re=c($,"P",{"data-svelte-h":!0}),v(re)!=="svelte-hswkmf"&&(re.innerHTML=at),We=i($),J=c($,"DIV",{class:!0});var F=te(J);f(L.$$.fragment,F),Xe=i(F),ie=c(F,"P",{"data-svelte-h":!0}),v(ie)!=="svelte-1k8ibdv"&&(ie.innerHTML=st),Be=i(F),f(q.$$.fragment,F),Ne=i(F),f(W.$$.fragment,F),F.forEach(n),$.forEach(n),Je=i(e),f(O.$$.fragment,e),Ae=i(e),j=c(e,"DIV",{class:!0});var z=te(j);f(K.$$.fragment,z),Ve=i(z),de=c(z,"P",{"data-svelte-h":!0}),v(de)!=="svelte-116bl6m"&&(de.innerHTML=rt),Ge=i(z),le=c(z,"P",{"data-svelte-h":!0}),v(le)!=="svelte-hswkmf"&&(le.innerHTML=it),Re=i(z),A=c(z,"DIV",{class:!0});var U=te(A);f(ee.$$.fragment,U),Ie=i(U),ce=c(U,"P",{"data-svelte-h":!0}),v(ce)!=="svelte-1svbfsb"&&(ce.innerHTML=dt),Ye=i(U),f(X.$$.fragment,U),Ee=i(U),f(B.$$.fragment,U),U.forEach(n),z.forEach(n),Ce=i(e),ue=c(e,"P",{}),te(ue).forEach(n),this.h()},h(){oe(o,"name","hf:doc:metadata"),oe(o,"content",Mt),oe(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){u(document.head,o),s(e,h,t),s(e,a,t),s(e,m,t),g(M,e,t),s(e,d,t),g(T,e,t),s(e,fe,t),s(e,N,t),s(e,ge,t),s(e,V,t),s(e,_e,t),s(e,G,t),s(e,be,t),s(e,R,t),s(e,ye,t),s(e,I,t),s(e,ve,t),g(Y,e,t),s(e,Me,t),s(e,E,t),s(e,Te,t),s(e,H,t),s(e,we,t),g(P,e,t),s(e,ke,t),s(e,w,t),g(S,w,null),u(w,Fe),u(w,ne),u(w,ze),u(w,ae),u(w,Ue),g(Z,w,null),s(e,je,t),g(Q,e,t),s(e,xe,t),s(e,k,t),g(D,k,null),u(k,Ze),u(k,se),u(k,qe),u(k,re),u(k,We),u(k,J),g(L,J,null),u(J,Xe),u(J,ie),u(J,Be),g(q,J,null),u(J,Ne),g(W,J,null),s(e,Je,t),g(O,e,t),s(e,Ae,t),s(e,j,t),g(K,j,null),u(j,Ve),u(j,de),u(j,Ge),u(j,le),u(j,Re),u(j,A),g(ee,A,null),u(A,Ie),u(A,ce),u(A,Ye),g(X,A,null),u(A,Ee),g(B,A,null),s(e,Ce,t),s(e,ue,t),$e=!0},p(e,[t]){const C={};t&2&&(C.$$scope={dirty:t,ctx:e}),Z.$set(C);const $={};t&2&&($.$$scope={dirty:t,ctx:e}),q.$set($);const F={};t&2&&(F.$$scope={dirty:t,ctx:e}),W.$set(F);const z={};t&2&&(z.$$scope={dirty:t,ctx:e}),X.$set(z);const U={};t&2&&(U.$$scope={dirty:t,ctx:e}),B.$set(U)},i(e){$e||(_(M.$$.fragment,e),_(T.$$.fragment,e),_(Y.$$.fragment,e),_(P.$$.fragment,e),_(S.$$.fragment,e),_(Z.$$.fragment,e),_(Q.$$.fragment,e),_(D.$$.fragment,e),_(L.$$.fragment,e),_(q.$$.fragment,e),_(W.$$.fragment,e),_(O.$$.fragment,e),_(K.$$.fragment,e),_(ee.$$.fragment,e),_(X.$$.fragment,e),_(B.$$.fragment,e),$e=!0)},o(e){b(M.$$.fragment,e),b(T.$$.fragment,e),b(Y.$$.fragment,e),b(P.$$.fragment,e),b(S.$$.fragment,e),b(Z.$$.fragment,e),b(Q.$$.fragment,e),b(D.$$.fragment,e),b(L.$$.fragment,e),b(q.$$.fragment,e),b(W.$$.fragment,e),b(O.$$.fragment,e),b(K.$$.fragment,e),b(ee.$$.fragment,e),b(X.$$.fragment,e),b(B.$$.fragment,e),$e=!1},d(e){e&&(n(h),n(a),n(m),n(d),n(fe),n(N),n(ge),n(V),n(_e),n(G),n(be),n(R),n(ye),n(I),n(ve),n(Me),n(E),n(Te),n(H),n(we),n(ke),n(w),n(je),n(xe),n(k),n(Je),n(Ae),n(j),n(Ce),n(ue)),n(o),y(M,e),y(T,e),y(Y,e),y(P,e),y(S),y(Z),y(Q,e),y(D),y(L),y(q),y(W),y(O,e),y(K),y(ee),y(X),y(B)}}}const Mt='{"title":"Autoformer","local":"autoformer","sections":[{"title":"概要","local":"概要","sections":[],"depth":2},{"title":"参考資料","local":"参考資料","sections":[],"depth":2},{"title":"AutoformerConfig","local":"transformers.AutoformerConfig","sections":[],"depth":2},{"title":"AutoformerModel","local":"transformers.AutoformerModel","sections":[],"depth":2},{"title":"AutoformerForPrediction","local":"transformers.AutoformerForPrediction","sections":[],"depth":2}],"depth":1}';function Tt(x){return mt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $t extends ut{constructor(o){super(),ht(this,o,Tt,vt,ct,{})}}export{$t as component};
