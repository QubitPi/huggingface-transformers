import{s as ti,o as oi,n as j}from"../chunks/scheduler.56730f09.js";import{S as ni,i as si,g as l,s,r as m,A as ai,h as c,f as r,c as a,j as x,u,x as y,k as $,y as o,a as h,v as f,d as _,t as g,w as b}from"../chunks/index.1f144517.js";import{T as ce}from"../chunks/Tip.41e845e5.js";import{D as W,E as oe}from"../chunks/ExampleCodeBlock.ee3463c7.js";import{C as K}from"../chunks/CodeBlock.738eeccb.js";import{H as U}from"../chunks/Heading.57d46534.js";function ri(T){let t,k="Example:",d,p,w;return p=new K({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFdoaXNwZXJDb25maWclMkMlMjBXaGlzcGVyTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwV2hpc3BlciUyMHRpbnklMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwV2hpc3BlckNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjB0aW55JTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBXaGlzcGVyTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperConfig, WhisperModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Whisper tiny style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = WhisperConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the tiny style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function ii(T){let t,k="update the prefix tokens as required when fine-tuning. Example:",d,p,w;return p=new K({props:{code:"JTIzJTIwaW5zdGFudGlhdGUlMjB0aGUlMjB0b2tlbml6ZXIlMjBhbmQlMjBzZXQlMjB0aGUlMjBwcmVmaXglMjB0b2tlbiUyMHRvJTIwU3BhbmlzaCUwQXRva2VuaXplciUyMCUzRCUyMFdoaXNwZXJUb2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItdGlueSUyMiUyQyUyMGxhbmd1YWdlJTNEJTIyc3BhbmlzaCUyMiklMEElMjMlMjBub3clMjBzd2l0Y2glMjB0aGUlMjBwcmVmaXglMjB0b2tlbiUyMGZyb20lMjBTcGFuaXNoJTIwdG8lMjBGcmVuY2glMEF0b2tlbml6ZXIuc2V0X3ByZWZpeF90b2tlbnMobGFuZ3VhZ2UlM0QlMjJmcmVuY2glMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate the tokenizer and set the prefix token to Spanish</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = WhisperTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>, language=<span class="hljs-string">&quot;spanish&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># now switch the prefix token from Spanish to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.set_prefix_tokens(language=<span class="hljs-string">&quot;french&quot;</span>)`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-14u5irj"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function di(T){let t,k="update the prefix tokens as required when fine-tuning. Example:",d,p,w;return p=new K({props:{code:"JTIzJTIwaW5zdGFudGlhdGUlMjB0aGUlMjB0b2tlbml6ZXIlMjBhbmQlMjBzZXQlMjB0aGUlMjBwcmVmaXglMjB0b2tlbiUyMHRvJTIwU3BhbmlzaCUwQXRva2VuaXplciUyMCUzRCUyMFdoaXNwZXJUb2tlbml6ZXJGYXN0LmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLXRpbnklMjIlMkMlMjBsYW5ndWFnZSUzRCUyMnNwYW5pc2glMjIpJTBBJTIzJTIwbm93JTIwc3dpdGNoJTIwdGhlJTIwcHJlZml4JTIwdG9rZW4lMjBmcm9tJTIwU3BhbmlzaCUyMHRvJTIwRnJlbmNoJTBBdG9rZW5pemVyLnNldF9wcmVmaXhfdG9rZW5zKGxhbmd1YWdlJTNEJTIyZnJlbmNoJTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate the tokenizer and set the prefix token to Spanish</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = WhisperTokenizerFast.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>, language=<span class="hljs-string">&quot;spanish&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># now switch the prefix token from Spanish to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.set_prefix_tokens(language=<span class="hljs-string">&quot;french&quot;</span>)`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-14u5irj"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function li(T){let t,k=`This class method is simply calling the feature extractor
<code>from_pretrained()</code>, image processor
<code>ImageProcessingMixin</code> and the tokenizer
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code> methods. Please refer to the docstrings of the
methods above for more information.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),y(t)!=="svelte-1m24p1o"&&(t.innerHTML=k)},m(d,p){h(d,t,p)},p:j,d(d){d&&r(t)}}}function ci(T){let t,k=`This class method is simply calling <code>save_pretrained()</code> and
<code>save_pretrained()</code>. Please refer to the docstrings of the
methods above for more information.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),y(t)!=="svelte-1j0r4gf"&&(t.innerHTML=k)},m(d,p){h(d,t,p)},p:j,d(d){d&&r(t)}}}function pi(T){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){h(d,t,p)},p:j,d(d){d&&r(t)}}}function hi(T){let t,k="Example:",d,p,w;return p=new K({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IlMkMlMjBXaGlzcGVyTW9kZWwlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFtb2RlbCUyMCUzRCUyMFdoaXNwZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpJTJGd2hpc3Blci1iYXNlJTIyKSUwQWZlYXR1cmVfZXh0cmFjdG9yJTIwJTNEJTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItYmFzZSUyMiklMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2R1bW15JTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBaW5wdXRzJTIwJTNEJTIwZmVhdHVyZV9leHRyYWN0b3IoZHMlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBaW5wdXRfZmVhdHVyZXMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfZmVhdHVyZXMlMEFkZWNvZGVyX2lucHV0X2lkcyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIlNUIxJTJDJTIwMSU1RCU1RCklMjAqJTIwbW9kZWwuY29uZmlnLmRlY29kZXJfc3RhcnRfdG9rZW5faWQlMEFsYXN0X2hpZGRlbl9zdGF0ZSUyMCUzRCUyMG1vZGVsKGlucHV0X2ZlYXR1cmVzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RkZWNvZGVyX2lucHV0X2lkcykubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlLnNoYXBlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, WhisperModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperModel.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]) * model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_state.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function mi(T){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){h(d,t,p)},p:j,d(d){d&&r(t)}}}function ui(T){let t,k="Example:",d,p,w;return p=new K({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Byb2Nlc3NvciUyQyUyMFdoaXNwZXJGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLXRpbnkuZW4lMjIpJTBBbW9kZWwlMjAlM0QlMjBXaGlzcGVyRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLXRpbnkuZW4lMjIpJTBBJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kdW1teSUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHByb2Nlc3NvcihkcyU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFpbnB1dF9mZWF0dXJlcyUyMCUzRCUyMGlucHV0cy5pbnB1dF9mZWF0dXJlcyUwQSUwQWdlbmVyYXRlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dHMlM0RpbnB1dF9mZWF0dXJlcyklMEElMEF0cmFuc2NyaXB0aW9uJTIwJTNEJTIwcHJvY2Vzc29yLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfaWRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTVCMCU1RCUwQXRyYW5zY3JpcHRpb24=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, WhisperForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function fi(T){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){h(d,t,p)},p:j,d(d){d&&r(t)}}}function _i(T){let t,k="Example:",d,p,w;return p=new K({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IlMkMlMjBXaGlzcGVyRm9yQXVkaW9DbGFzc2lmaWNhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQWZlYXR1cmVfZXh0cmFjdG9yJTIwJTNEJTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IuZnJvbV9wcmV0cmFpbmVkKCUyMnNhbmNoaXQtZ2FuZGhpJTJGd2hpc3Blci1tZWRpdW0tZmxldXJzLWxhbmctaWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBXaGlzcGVyRm9yQXVkaW9DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyc2FuY2hpdC1nYW5kaGklMkZ3aGlzcGVyLW1lZGl1bS1mbGV1cnMtbGFuZy1pZCUyMiklMEElMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJnb29nbGUlMkZmbGV1cnMlMjIlMkMlMjAlMjJhbGwlMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIlMkMlMjBzdHJlYW1pbmclM0RUcnVlKSUwQXNhbXBsZSUyMCUzRCUyMG5leHQoaXRlcihkcykpJTBBJTBBaW5wdXRzJTIwJTNEJTIwZmVhdHVyZV9leHRyYWN0b3IoJTBBJTIwJTIwJTIwJTIwc2FtcGxlJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHNhbXBsaW5nX3JhdGUlM0RzYW1wbGUlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMnNhbXBsaW5nX3JhdGUlMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQWlucHV0X2ZlYXR1cmVzJTIwJTNEJTIwaW5wdXRzLmlucHV0X2ZlYXR1cmVzJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2ZlYXR1cmVzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJnbWF4KGxvZ2l0cykuaXRlbSgpJTBBcHJlZGljdGVkX2xhYmVsJTIwJTNEJTIwbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCcHJlZGljdGVkX2NsYXNzX2lkcyU1RCUwQXByZWRpY3RlZF9sYWJlbA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, WhisperForAudioClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;sanchit-gandhi/whisper-medium-fleurs-lang-id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperForAudioClassification.from_pretrained(<span class="hljs-string">&quot;sanchit-gandhi/whisper-medium-fleurs-lang-id&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;google/fleurs&quot;</span>, <span class="hljs-string">&quot;all&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>, streaming=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sample = <span class="hljs-built_in">next</span>(<span class="hljs-built_in">iter</span>(ds))

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    sample[<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sample[<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(input_features).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;Afrikaans&#x27;</span>`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function gi(T){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){h(d,t,p)},p:j,d(d){d&&r(t)}}}function bi(T){let t,k="Example:",d,p,w;return p=new K({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwVEZXaGlzcGVyTW9kZWwlMkMlMjBBdXRvRmVhdHVyZUV4dHJhY3RvciUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQW1vZGVsJTIwJTNEJTIwVEZXaGlzcGVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItYmFzZSUyMiklMEFmZWF0dXJlX2V4dHJhY3RvciUyMCUzRCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLWJhc2UlMjIpJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kdW1teSUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQWlucHV0cyUyMCUzRCUyMGZlYXR1cmVfZXh0cmFjdG9yKGRzJTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQWlucHV0X2ZlYXR1cmVzJTIwJTNEJTIwaW5wdXRzLmlucHV0X2ZlYXR1cmVzJTBBZGVjb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjB0Zi5jb252ZXJ0X3RvX3RlbnNvciglNUIlNUIxJTJDJTIwMSU1RCU1RCklMjAqJTIwbW9kZWwuY29uZmlnLmRlY29kZXJfc3RhcnRfdG9rZW5faWQlMEFsYXN0X2hpZGRlbl9zdGF0ZSUyMCUzRCUyMG1vZGVsKGlucHV0X2ZlYXR1cmVzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RkZWNvZGVyX2lucHV0X2lkcykubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlLnNoYXBlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFWhisperModel, AutoFeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFWhisperModel.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tf.convert_to_tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]) * model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_state.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function yi(T){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){h(d,t,p)},p:j,d(d){d&&r(t)}}}function ki(T){let t,k="Example:",d,p,w;return p=new K({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Byb2Nlc3NvciUyQyUyMFRGV2hpc3BlckZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItdGlueS5lbiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGV2hpc3BlckZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpJTJGd2hpc3Blci10aW55LmVuJTIyKSUwQSUwQWRzJTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZHVtbXklMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjBwcm9jZXNzb3IoZHMlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBaW5wdXRfZmVhdHVyZXMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfZmVhdHVyZXMlMEElMEFnZW5lcmF0ZWRfaWRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRfZmVhdHVyZXMlM0RpbnB1dF9mZWF0dXJlcyklMEElMEF0cmFuc2NyaXB0aW9uJTIwJTNEJTIwcHJvY2Vzc29yLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfaWRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTVCMCU1RCUwQXRyYW5zY3JpcHRpb24=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFWhisperForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFWhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_features=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function wi(T){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){h(d,t,p)},p:j,d(d){d&&r(t)}}}function vi(T){let t,k="Example:",d,p,w;return p=new K({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4V2hpc3Blck1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpJTJGd2hpc3Blci10aW55JTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheFdoaXNwZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpJTJGd2hpc3Blci10aW55JTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxWhisperModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWhisperModel.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function Ti(T){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){h(d,t,p)},p:j,d(d){d&&r(t)}}}function xi(T){let t,k="Transcription example:",d,p,w;return p=new K({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFdoaXNwZXJQcm9jZXNzb3IlMkMlMjBGbGF4V2hpc3BlckZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMFdoaXNwZXJQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItdGlueS5lbiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhXaGlzcGVyRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLXRpbnkuZW4lMjIlMkMlMjBmcm9tX3B0JTNEVHJ1ZSklMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2R1bW15JTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBaW5wdXRzJTIwJTNEJTIwcHJvY2Vzc29yKGRzJTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQWlucHV0X2ZlYXR1cmVzJTIwJTNEJTIwaW5wdXRzLmlucHV0X2ZlYXR1cmVzJTBBZ2VuZXJhdGVkX2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKGlucHV0X2lkcyUzRGlucHV0X2ZlYXR1cmVzKSUwQXRyYW5zY3JpcHRpb24lMjAlM0QlMjBwcm9jZXNzb3IuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZF9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklNUIwJTVEJTBBdHJhbnNjcmlwdGlvbg==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperProcessor, FlaxWhisperForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = WhisperProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>, from_pt=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_ids=input_features)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-yrk4pw"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function $i(T){let t,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=k},l(d){t=c(d,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=k)},m(d,p){h(d,t,p)},p:j,d(d){d&&r(t)}}}function Wi(T){let t,k="Transcription example:",d,p,w;return p=new K({props:{code:"aW1wb3J0JTIwamF4Lm51bXB5JTIwYXMlMjBqbnAlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IlMkMlMjBGbGF4V2hpc3BlckZvckF1ZGlvQ2xhc3NpZmljYXRpb24lMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFmZWF0dXJlX2V4dHJhY3RvciUyMCUzRCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yLmZyb21fcHJldHJhaW5lZCglMjJzYW5jaGl0LWdhbmRoaSUyRndoaXNwZXItbWVkaXVtLWZsZXVycy1sYW5nLWlkJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheFdoaXNwZXJGb3JBdWRpb0NsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJzYW5jaGl0LWdhbmRoaSUyRndoaXNwZXItbWVkaXVtLWZsZXVycy1sYW5nLWlkJTIyJTJDJTIwZnJvbV9wdCUzRFRydWUlMEEpJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyZ29vZ2xlJTJGZmxldXJzJTIyJTJDJTIwJTIyYWxsJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyJTJDJTIwc3RyZWFtaW5nJTNEVHJ1ZSklMEElMEFzYW1wbGUlMjAlM0QlMjBuZXh0KGl0ZXIoZHMpKSUwQSUwQWlucHV0cyUyMCUzRCUyMGZlYXR1cmVfZXh0cmFjdG9yKCUwQSUyMCUyMCUyMCUyMHNhbXBsZSU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjBzYW1wbGluZ19yYXRlJTNEc2FtcGxlJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJzYW1wbGluZ19yYXRlJTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMiUwQSklMEFpbnB1dF9mZWF0dXJlcyUyMCUzRCUyMGlucHV0cy5pbnB1dF9mZWF0dXJlcyUwQSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2ZlYXR1cmVzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwam5wLmFyZ21heChsb2dpdHMpLml0ZW0oKSUwQXByZWRpY3RlZF9sYWJlbCUyMCUzRCUyMG1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9jbGFzc19pZHMlNUQlMEFwcmVkaWN0ZWRfbGFiZWw=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, FlaxWhisperForAudioClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;sanchit-gandhi/whisper-medium-fleurs-lang-id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWhisperForAudioClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;sanchit-gandhi/whisper-medium-fleurs-lang-id&quot;</span>, from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;google/fleurs&quot;</span>, <span class="hljs-string">&quot;all&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>, streaming=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sample = <span class="hljs-built_in">next</span>(<span class="hljs-built_in">iter</span>(ds))

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    sample[<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sample[<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_features).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = jnp.argmax(logits).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;af_za&#x27;</span>`,wrap:!1}}),{c(){t=l("p"),t.textContent=k,d=s(),m(p.$$.fragment)},l(n){t=c(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-yrk4pw"&&(t.textContent=k),d=a(n),u(p.$$.fragment,n)},m(n,v){h(n,t,v),h(n,d,v),f(p,n,v),w=!0},p:j,i(n){w||(_(p.$$.fragment,n),w=!0)},o(n){g(p.$$.fragment,n),w=!1},d(n){n&&(r(t),r(d)),b(p,n)}}}function Mi(T){let t,k,d,p,w,n,v,$n,it,Da='Whisper 모델은 Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever에 의해 <a href="https://cdn.openai.com/papers/whisper.pdf" rel="nofollow">Robust Speech Recognition via Large-Scale Weak Supervision</a>에서 제안되었습니다.',Wn,dt,Oa="논문의 초록은 다음과 같습니다:",Mn,lt,Ka="<em>우리는 인터넷에서 대량의 오디오를 글로 옮긴 것을 예측하도록 간단히 훈련된 음성 처리 시스템의 성능을 연구합니다. 68만 시간의 다국어 및 다중 작업 지도(multitask supervision)에 확장했을 때, 결과 모델은 표준 벤치마크에 잘 일반화되며, 미세 조정이 필요 없는 제로샷 전송 설정에서 이전의 완전히 지도된(fully-supervised) 결과와 경쟁할 수 있는 경우가 많습니다. 사람과 비교하면, 이 모델은 사람의 정확도와 견고성에 근접합니다. 우리는 강력한 음성 처리를 위한 추가 작업의 기반이 될 모델과 추론 코드를 공개합니다.</em>",Fn,ct,er="팁:",zn,pt,tr='<li><p>이 모델은 일반적으로 별도의 미세 조정 없이도 잘 작동합니다.</p></li> <li><p>아키텍처는 고전적인 인코더-디코더 아키텍처를 따르기 때문에, 추론을 위해 <code>generate()</code> 함수를 사용합니다.</p></li> <li><p>현재 추론은 짧은 형식에만 구현되어 있으며, 오디오는 30초 미만의 세그먼트로 미리 분할되어야 합니다. 타임스탬프를 포함한 긴 형식에 대한 추론은 향후 릴리스에서 구현될 예정입니다.</p></li> <li><p><a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperProcessor">WhisperProcessor</a>를 사용하여 모델에 사용할 오디오를 준비하고, 예측된 ID를 텍스트로 디코딩할 수 있습니다.</p></li> <li><p>모델과 프로세서를 변환하려면 다음을 사용하는 것이 좋습니다:</p></li>',jn,ht,Cn,mt,or=`스크립트는 OpenAI 체크포인트에서 필요한 모든 매개변수를 자동으로 결정합니다. OpenAI 변환을 수행하려면 <code>tiktoken</code> 라이브러리를 설치해야 합니다.
라이브러리를 설치해야 OpenAI 토큰화기를 <code>tokenizers</code> 버전으로 변환할 수 있습니다.`,Jn,ut,nr=`이 모델은 <a href="https://huggingface.co/ArthurZ" rel="nofollow">Arthur Zucker</a>에 의해 제공되었습니다. 이 모델의 Tensorflow 버전은 <a href="https://huggingface.co/amyeroberts" rel="nofollow">amyeroberts</a>에 의해 제공되었습니다.
원본 코드는 <a href="https://github.com/openai/whisper" rel="nofollow">여기</a>에서 찾을 수 있습니다.`,qn,ft,Gn,Z,_t,ds,wo,sr=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperModel">WhisperModel</a>. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
<a href="https://huggingface.co/openai/whisper-tiny" rel="nofollow">openai/whisper-tiny</a> architecture.`,ls,vo,ar=`Configuration objects inherit from <code>PretrainedConfig</code> and can be used to control the model outputs. Read the
documentation from <code>PretrainedConfig</code> for more information.`,cs,ge,In,gt,Un,M,bt,ps,To,rr="Construct a Whisper tokenizer.",hs,xo,ir=`This tokenizer inherits from <code>PreTrainedTokenizer</code> which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`,ms,ne,yt,us,$o,dr="Override the prefix tokens appended to the start of the label sequence. This method can be used standalone to",fs,be,_s,ye,kt,gs,Wo,lr="Build model inputs from a sequence by appending eos_token_id.",bs,ke,wt,ys,Mo,cr=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,ks,se,vt,ws,Fo,pr=`Create the token type IDs corresponding to the sequences passed. <a href="../glossary#token-type-ids">What are token type
IDs?</a>`,vs,zo,hr="Should be overridden in a subclass if the model has a special way of building those.",Ts,jo,Tt,Zn,xt,Nn,F,$t,xs,Co,mr="Construct a “fast” Whisper tokenizer (backed by HuggingFace’s <em>tokenizers</em> library).",$s,Jo,ur=`This tokenizer inherits from <code>PreTrainedTokenizerFast</code> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,Ws,ae,Wt,Ms,qo,fr="Override the prefix tokens appended to the start of the label sequence. This method can be used standalone to",Fs,we,zs,ve,Mt,js,Go,_r="Build model inputs from a sequence by appending eos_token_id.",Cs,Te,Ft,Js,Io,gr=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,qs,re,zt,Gs,Uo,br=`Create the token type IDs corresponding to the sequences passed. <a href="../glossary#token-type-ids">What are token type
IDs?</a>`,Is,Zo,yr="Should be overridden in a subclass if the model has a special way of building those.",Us,No,jt,Xn,Ct,Rn,G,Jt,Zs,Xo,kr="Constructs a Whisper feature extractor.",Ns,Ro,wr=`This feature extractor inherits from <code>SequenceFeatureExtractor</code> which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`,Xs,Vo,vr="This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the <code>Short Time Fourier Transform</code> which should match pytorch’s <code>torch.stft</code> equivalent.",Rs,xe,qt,Vs,Lo,Tr=`Main method to featurize and prepare for the model one or several sequence(s). Implementation uses PyTorch for
the STFT computation if available, otherwise a slower NumPy based one.`,Vn,Gt,Ln,z,It,Ls,Ho,xr=`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`,Hs,Eo,$r=`<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperProcessor">WhisperProcessor</a> offers all the functionalities of <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> and <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See
the <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperProcessor.__call__"><strong>call</strong>()</a> and <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperProcessor.decode">decode()</a> for more information.`,Es,$e,Ut,Ps,Po,Wr=`Forwards the <code>audio</code> argument to WhisperFeatureExtractor’s <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a> and the <code>text</code>
argument to <code>__call__()</code>. Please refer to the doctsring of the above two methods for more
information.`,Bs,ie,Zt,Ss,Bo,Mr="Instantiate a processor associated with a pretrained model.",Ys,We,As,de,Nt,Qs,So,Fr=`Saves the attributes of this processor (feature extractor, tokenizer…) in the specified directory so that it
can be reloaded using the <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperProcessor.from_pretrained">from_pretrained()</a> method.`,Ds,Me,Os,Fe,Xt,Ks,Yo,zr=`This method forwards all its arguments to WhisperTokenizer’s <code>batch_decode()</code>. Please
refer to the docstring of this method for more information.`,ea,ze,Rt,ta,Ao,jr=`This method forwards all its arguments to WhisperTokenizer’s <code>decode()</code>. Please refer to
the docstring of this method for more information.`,Hn,Vt,En,I,Lt,oa,Qo,Cr=`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from <code>PreTrainedModel</code>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,na,Do,Jr=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,sa,P,Ht,aa,Oo,qr='The <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperModel">WhisperModel</a> forward method, overrides the <code>__call__</code> special method.',ra,je,ia,Ce,da,Je,Et,la,Ko,Gr=`Masks extracted features along time axis and/or along feature axis according to
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment</a>.`,Pn,Pt,Bn,N,Bt,ca,en,Ir=`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from <code>PreTrainedModel</code>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,pa,tn,Ur=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ha,B,St,ma,on,Zr='The <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperForConditionalGeneration">WhisperForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',ua,qe,fa,Ge,Sn,Yt,Yn,ee,At,_a,nn,Nr=`Whisper Encoder Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`,ga,S,Qt,ba,sn,Xr='The <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperForAudioClassification">WhisperForAudioClassification</a> forward method, overrides the <code>__call__</code> special method.',ya,Ie,ka,Ue,An,Dt,Qn,X,Ot,wa,an,Rr=`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from <code>TFPreTrainedModel</code>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,va,rn,Vr=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Ta,Y,Kt,xa,dn,Lr='The <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.TFWhisperModel">TFWhisperModel</a> forward method, overrides the <code>__call__</code> special method.',$a,Ze,Wa,Ne,Dn,eo,On,R,to,Ma,ln,Hr=`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from <code>TFPreTrainedModel</code>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Fa,cn,Er=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,za,A,oo,ja,pn,Pr='The <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.TFWhisperForConditionalGeneration">TFWhisperForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',Ca,Xe,Ja,Re,Kn,no,es,V,so,qa,hn,Br=`The bare Whisper Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <code>FlaxPreTrainedModel</code>. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.
Finally, this model supports inherent JAX features such as:`,Ga,mn,Sr='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Ia,Q,ao,Ua,un,Yr="The <code>FlaxWhisperPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Za,Ve,Na,Le,ts,ro,os,L,io,Xa,fn,Ar=`The Whisper Model with a language modeling head.
This model inherits from <code>FlaxPreTrainedModel</code>. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.
Finally, this model supports inherent JAX features such as:`,Ra,_n,Qr='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Va,D,lo,La,gn,Dr="The <code>FlaxWhisperPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Ha,He,Ea,Ee,ns,co,ss,H,po,Pa,bn,Or=`The Whisper Model with an audio classification head on top.
This model inherits from <code>FlaxPreTrainedModel</code>. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.
Finally, this model supports inherent JAX features such as:`,Ba,yn,Kr='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Sa,O,ho,Ya,kn,ei='The <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.FlaxWhisperForAudioClassification">FlaxWhisperForAudioClassification</a> forward method, overrides the <code>__call__</code> special method.',Aa,Pe,Qa,Be,as,vn,rs;return w=new U({props:{title:"Whisper",local:"whisper",headingTag:"h1"}}),v=new U({props:{title:"개요",local:"overview",headingTag:"h2"}}),ht=new K({props:{code:"cHl0aG9uJTIwc3JjJTJGdHJhbnNmb3JtZXJzJTJGbW9kZWxzJTJGd2hpc3BlciUyRmNvbnZlcnRfb3BlbmFpX3RvX2hmLnB5JTIwLS1jaGVja3BvaW50X3BhdGglMjAlMjIlMjIlMjAtLXB5dG9yY2hfZHVtcF9mb2xkZXJfcGF0aCUyMCUyMkFydGh1ciUyRndoaXNwZXItMyUyMiUyMC0tY29udmVydF9wcmVwcm9jZXNzb3IlMjBUcnVl",highlighted:'python src/transformers/models/whisper/convert_openai_to_hf.py --checkpoint_path <span class="hljs-string">&quot;&quot;</span> --pytorch_dump_folder_path <span class="hljs-string">&quot;Arthur/whisper-3&quot;</span> --convert_preprocessor True',wrap:!1}}),ft=new U({props:{title:"WhisperConfig",local:"whisperconfig ][ transformers.WhisperConfig",headingTag:"h2"}}),_t=new W({props:{name:"class transformers.WhisperConfig",anchor:"transformers.WhisperConfig",parameters:[{name:"vocab_size",val:" = 51865"},{name:"num_mel_bins",val:" = 80"},{name:"encoder_layers",val:" = 4"},{name:"encoder_attention_heads",val:" = 6"},{name:"decoder_layers",val:" = 4"},{name:"decoder_attention_heads",val:" = 6"},{name:"decoder_ffn_dim",val:" = 1536"},{name:"encoder_ffn_dim",val:" = 1536"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 50257"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 384"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"max_source_positions",val:" = 1500"},{name:"max_target_positions",val:" = 448"},{name:"pad_token_id",val:" = 50256"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"suppress_tokens",val:" = None"},{name:"begin_suppress_tokens",val:" = [220, 50256]"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"apply_spec_augment",val:" = False"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"median_filter_width",val:" = 7"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 51865) &#x2014;
Vocabulary size of the Whisper model. Defines the number of different tokens that can be represented by the
<code>decoder_input_ids</code> passed when calling <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperModel">WhisperModel</a>`,name:"vocab_size"},{anchor:"transformers.WhisperConfig.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
Number of mel features used per input features. Should correspond to the value used in the
<code>WhisperProcessor</code> class.`,name:"num_mel_bins"},{anchor:"transformers.WhisperConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.WhisperConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.WhisperConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.WhisperConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.WhisperConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in encoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.WhisperConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.WhisperConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.WhisperConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.WhisperConfig.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Corresponds to the &#x201D;&lt;|startoftranscript|&gt;&#x201D; token, which is automatically used when no <code>decoder_input_ids</code>
are provided to the <code>generate</code> function. It is used to guide the model\`s generation process depending on
the task.`,name:"decoder_start_token_id"},{anchor:"transformers.WhisperConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.WhisperConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the model is used as an encoder/decoder or not.`,name:"is_encoder_decoder"},{anchor:"transformers.WhisperConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.WhisperConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
Dimensionality of the layers.`,name:"d_model"},{anchor:"transformers.WhisperConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.WhisperConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.WhisperConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.WhisperConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.WhisperConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to False) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.WhisperConfig.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1500) &#x2014;
The maximum sequence length of log-mel filter-bank features that this model might ever be used with.`,name:"max_source_positions"},{anchor:"transformers.WhisperConfig.max_target_positions",description:`<strong>max_target_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 448) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_target_positions"},{anchor:"transformers.WhisperConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50256) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.WhisperConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50256) &#x2014;
Begin of stream token id.`,name:"bos_token_id"},{anchor:"transformers.WhisperConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50256) &#x2014;
End of stream token id.`,name:"eos_token_id"},{anchor:"transformers.WhisperConfig.suppress_tokens",description:`<strong>suppress_tokens</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
A list containing the non-speech tokens that will be used by the logit processor in the <code>generate</code>
function. NON_SPEECH_TOKENS and NON_SPEECH_TOKENS_MULTI each correspond to the <code>english-only</code> and the
<code>multilingual</code> model.`,name:"suppress_tokens"},{anchor:"transformers.WhisperConfig.begin_suppress_tokens",description:`<strong>begin_suppress_tokens</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[220,50256]</code>) &#x2014;
A list containing tokens that will be supressed at the beginning of the sampling process. Initialized as
the token for <code>&quot; &quot;</code> (<code>blank_token_id</code>) and the <code>eos_token_id</code>`,name:"begin_suppress_tokens"},{anchor:"transformers.WhisperConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperForAudioClassification">WhisperForAudioClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.WhisperConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification. Only relevant when using an
instance of <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperForAudioClassification">WhisperForAudioClassification</a>.`,name:"classifier_proj_size"},{anchor:"transformers.WhisperConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.WhisperConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates <code>mask_time_prob*len(time_axis)/mask_time_length</code> independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, <em>mask_time_prob</em> should be <code>prob_vector_start*mask_time_length</code>. Note that overlap may decrease the
actual percentage of masked vectors. This is only relevant if <code>apply_spec_augment == True</code>.`,name:"mask_time_prob"},{anchor:"transformers.WhisperConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.WhisperConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.WhisperConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates <code>mask_feature_prob*len(feature_axis)/mask_time_length</code> independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, <em>mask_feature_prob</em> should be <code>prob_vector_start*mask_feature_length</code>. Note that overlap
may decrease the actual percentage of masked vectors. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_feature_prob"},{anchor:"transformers.WhisperConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.WhisperConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
<code>mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks</code>.`,name:"mask_feature_min_masks"},{anchor:"transformers.WhisperConfig.median_filter_width",description:`<strong>median_filter_width</strong> (<code>int</code>, <em>optional</em>, defaults to 7) &#x2014;
Width of the median filter used to smoothen to cross-attention outputs when computing token timestamps.
Should be an odd number.`,name:"median_filter_width"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/configuration_whisper.py#L62"}}),ge=new oe({props:{anchor:"transformers.WhisperConfig.example",$$slots:{default:[ri]},$$scope:{ctx:T}}}),gt=new U({props:{title:"WhisperTokenizer",local:"whispertokenizer ][ transformers.WhisperTokenizer",headingTag:"h2"}}),bt=new W({props:{name:"class transformers.WhisperTokenizer",anchor:"transformers.WhisperTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"language",val:" = None"},{name:"task",val:" = None"},{name:"predict_timestamps",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.WhisperTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.WhisperTokenizer.normalizer_file",description:`<strong>normalizer_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to the normalizer_file file.`,name:"normalizer_file"},{anchor:"transformers.WhisperTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.WhisperTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.WhisperTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The beginning of sequence token. The <code>decoder_start_token_id</code> is used to set the first token as
<code>&quot;&lt;|startoftranscript|&gt;&quot;</code> when generating.`,name:"bos_token"},{anchor:"transformers.WhisperTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.WhisperTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.WhisperTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word.`,name:"add_prefix_space"},{anchor:"transformers.WhisperTokenizer.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language of the transcription text. The corresponding language id token is appended to the start of the
sequence for multilingual speech recognition and speech translation tasks, e.g. for Spanish the token
<code>&quot;&lt;|es|&gt;&quot;</code> is appended to the start of sequence. This should be used for multilingual fine-tuning only.`,name:"language"},{anchor:"transformers.WhisperTokenizer.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Task identifier to append at the start of sequence (if any). This should be used for mulitlingual
fine-tuning, with <code>&quot;transcribe&quot;</code> for speech recognition and <code>&quot;translate&quot;</code> for speech translation.`,name:"task"},{anchor:"transformers.WhisperTokenizer.predict_timestamps",description:`<strong>predict_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L218"}}),yt=new W({props:{name:"set_prefix_tokens",anchor:"transformers.WhisperTokenizer.set_prefix_tokens",parameters:[{name:"language",val:": str = None"},{name:"task",val:": str = None"},{name:"predict_timestamps",val:": bool = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The language of the transcription text.`,name:"language"},{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Task identifier to append at the start of sequence (if any).`,name:"task"},{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.predict_timestamps",description:`<strong>predict_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L390"}}),be=new oe({props:{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.example",$$slots:{default:[ii]},$$scope:{ctx:T}}}),kt=new W({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.WhisperTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L449"}}),wt=new W({props:{name:"get_special_tokens_mask",anchor:"transformers.WhisperTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L457",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),vt=new W({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3328",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token type ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Tt=new W({props:{name:"save_vocabulary",anchor:"transformers.WhisperTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L778"}}),xt=new U({props:{title:"WhisperTokenizerFast",local:"whispertokenizerfast ][ transformers.WhisperTokenizerFast",headingTag:"h2"}}),$t=new W({props:{name:"class transformers.WhisperTokenizerFast",anchor:"transformers.WhisperTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"normalizer_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"language",val:" = None"},{name:"task",val:" = None"},{name:"predict_timestamps",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.WhisperTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.WhisperTokenizerFast.normalizer_file",description:`<strong>normalizer_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to the normalizer_file file.`,name:"normalizer_file"},{anchor:"transformers.WhisperTokenizerFast.tokenizer_file",description:`<strong>tokenizer_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to <a href="https://github.com/huggingface/tokenizers" rel="nofollow">tokenizers</a> file (generally has a .json extension) that
contains everything needed to load the tokenizer.`,name:"tokenizer_file"},{anchor:"transformers.WhisperTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.WhisperTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The beginning of sequence token. The <code>decoder_start_token_id</code> is used to set the first token as
<code>&quot;&lt;|startoftranscript|&gt;&quot;</code> when generating.`,name:"bos_token"},{anchor:"transformers.WhisperTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.WhisperTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Whisper tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.WhisperTokenizerFast.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language of the transcription text. The corresponding language id token is appended to the start of the
sequence for multilingual speech recognition and speech translation tasks, e.g. for Spanish the token
<code>&quot;&lt;|es|&gt;&quot;</code> is appended to the start of sequence. This should be used for multilingual fine-tuning only.`,name:"language"},{anchor:"transformers.WhisperTokenizerFast.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Task identifier to append at the start of sequence (if any). This should be used for mulitlingual
fine-tuning, with <code>&quot;transcribe&quot;</code> for speech recognition and <code>&quot;translate&quot;</code> for speech translation.`,name:"task"},{anchor:"transformers.WhisperTokenizerFast.predict_timestamps",description:`<strong>predict_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L91"}}),Wt=new W({props:{name:"set_prefix_tokens",anchor:"transformers.WhisperTokenizerFast.set_prefix_tokens",parameters:[{name:"language",val:": str = None"},{name:"task",val:": str = None"},{name:"predict_timestamps",val:": bool = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizerFast.set_prefix_tokens.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The language of the transcription text.`,name:"language"},{anchor:"transformers.WhisperTokenizerFast.set_prefix_tokens.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Task identifier to append at the start of sequence (if any).`,name:"task"},{anchor:"transformers.WhisperTokenizerFast.set_prefix_tokens.predict_timestamps",description:`<strong>predict_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L479"}}),we=new oe({props:{anchor:"transformers.WhisperTokenizerFast.set_prefix_tokens.example",$$slots:{default:[di]},$$scope:{ctx:T}}}),Mt=new W({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.WhisperTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L553"}}),Ft=new W({props:{name:"get_special_tokens_mask",anchor:"transformers.WhisperTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.WhisperTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.WhisperTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.WhisperTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L561",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),zt=new W({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.WhisperTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.WhisperTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3328",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token type ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),jt=new W({props:{name:"save_vocabulary",anchor:"transformers.WhisperTokenizerFast.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L464"}}),Ct=new U({props:{title:"WhisperFeatureExtractor",local:"whisperfeatureextractor ][ transformers.WhisperFeatureExtractor",headingTag:"h2"}}),Jt=new W({props:{name:"class transformers.WhisperFeatureExtractor",anchor:"transformers.WhisperFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"hop_length",val:" = 160"},{name:"chunk_length",val:" = 30"},{name:"n_fft",val:" = 400"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.WhisperFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in hertz (Hz).`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, defaults to 160) &#x2014;
Length of the overlaping windows for the STFT used to obtain the Mel Frequency coefficients.`,name:"hop_length"},{anchor:"transformers.WhisperFeatureExtractor.chunk_length",description:`<strong>chunk_length</strong> (<code>int</code>, defaults to 30) &#x2014;
The maximum number of chuncks of <code>sampling_rate</code> samples used to trim and pad longer or shorter audio
sequences.`,name:"chunk_length"},{anchor:"transformers.WhisperFeatureExtractor.n_fft",description:`<strong>n_fft</strong> (<code>int</code>, defaults to 400) &#x2014;
Size of the Fourier transform.`,name:"n_fft"},{anchor:"transformers.WhisperFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Padding value used to pad the audio. Should correspond to silences.`,name:"padding_value"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L35"}}),qt=new W({props:{name:"__call__",anchor:"transformers.WhisperFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": Union"},{name:"truncation",val:": bool = True"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"padding",val:": Optional = 'max_length'"},{name:"max_length",val:": Optional = None"},{name:"sampling_rate",val:": Optional = None"},{name:"do_normalize",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values. Must be mono channel audio, not
stereo, i.e. single float per timestep.`,name:"raw_speech"},{anchor:"transformers.WhisperFeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <em>optional</em>, default to <code>True</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.WhisperFeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.`,name:"pad_to_multiple_of"},{anchor:"transformers.WhisperFeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>For Whisper models, <code>attention_mask</code> should always be passed for batched inference, to avoid subtle
bugs.</p>

					</div>`,name:"return_attention_mask"},{anchor:"transformers.WhisperFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.WhisperFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors and allow automatic speech recognition
pipeline.`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"},{anchor:"transformers.WhisperFeatureExtractor.__call__.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to zero-mean unit-variance normalize the input. Normalizing can help to significantly
improve the performance of the model.`,name:"do_normalize"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L157"}}),Gt=new U({props:{title:"WhisperProcessor",local:"whisperprocessor ][ transformers.WhisperProcessor",headingTag:"h2"}}),It=new W({props:{name:"class transformers.WhisperProcessor",anchor:"transformers.WhisperProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>WhisperFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.WhisperProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>WhisperTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L23"}}),Ut=new W({props:{name:"__call__",anchor:"transformers.WhisperProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L49"}}),Zt=new W({props:{name:"from_pretrained",anchor:"transformers.WhisperProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": Union"},{name:"cache_dir",val:": Union = None"},{name:"force_download",val:": bool = False"},{name:"local_files_only",val:": bool = False"},{name:"token",val:": Union = None"},{name:"revision",val:": str = 'main'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<code>save_pretrained()</code> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<code>from_pretrained()</code> and
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/processing_utils.py#L406"}}),We=new ce({props:{$$slots:{default:[li]},$$scope:{ctx:T}}}),Nt=new W({props:{name:"save_pretrained",anchor:"transformers.WhisperProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.WhisperProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).`,name:"push_to_hub"},{anchor:"transformers.WhisperProcessor.save_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Additional key word arguments passed along to the <code>push_to_hub()</code> method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/processing_utils.py#L167"}}),Me=new ce({props:{$$slots:{default:[ci]},$$scope:{ctx:T}}}),Xt=new W({props:{name:"batch_decode",anchor:"transformers.WhisperProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L83"}}),Rt=new W({props:{name:"decode",anchor:"transformers.WhisperProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L90"}}),Vt=new U({props:{title:"WhisperModel",local:"whispermodel ][ transformers.WhisperModel",headingTag:"h2"}}),Lt=new W({props:{name:"class transformers.WhisperModel",anchor:"transformers.WhisperModel",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<code>from_pretrained()</code> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1488"}}),Ht=new W({props:{name:"forward",anchor:"transformers.WhisperModel.forward",parameters:[{name:"input_features",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<code>AutoFeatureExtractor</code> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing <em>SpecAugment</em> data augmentation on padding token indices. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.WhisperModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code> and
<code>PreTrainedTokenizer.__call__()</code> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Whisper uses the <code>decoder_start_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.WhisperModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_whisper._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the BART
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.WhisperModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.WhisperModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.WhisperModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.WhisperModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.WhisperModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.WhisperModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.WhisperModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.WhisperModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WhisperModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WhisperModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1563",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.Seq2SeqModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.modeling_outputs.Seq2SeqModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),je=new ce({props:{$$slots:{default:[pi]},$$scope:{ctx:T}}}),Ce=new oe({props:{anchor:"transformers.WhisperModel.forward.example",$$slots:{default:[hi]},$$scope:{ctx:T}}}),Et=new W({props:{name:"_mask_input_features",anchor:"transformers.WhisperModel._mask_input_features",parameters:[{name:"input_features",val:": FloatTensor"},{name:"attention_mask",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1520"}}),Pt=new U({props:{title:"WhisperForConditionalGeneration",local:"whisperforconditionalgeneration ][ transformers.WhisperForConditionalGeneration",headingTag:"h2"}}),Bt=new W({props:{name:"class transformers.WhisperForConditionalGeneration",anchor:"transformers.WhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<code>from_pretrained()</code> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1658"}}),St=new W({props:{name:"forward",anchor:"transformers.WhisperForConditionalGeneration.forward",parameters:[{name:"input_features",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<code>AutoFeatureExtractor</code> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing <em>SpecAugment</em> data augmentation on padding token indices. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code> and
<code>PreTrainedTokenizer.__call__()</code> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Whisper uses the <code>decoder_start_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_whisper._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the BART
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.WhisperForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.WhisperForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.WhisperForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.WhisperForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.WhisperForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.WhisperForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WhisperForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WhisperForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WhisperForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1696",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.Seq2SeqLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.modeling_outputs.Seq2SeqLMOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new ce({props:{$$slots:{default:[mi]},$$scope:{ctx:T}}}),Ge=new oe({props:{anchor:"transformers.WhisperForConditionalGeneration.forward.example",$$slots:{default:[ui]},$$scope:{ctx:T}}}),Yt=new U({props:{title:"WhisperForAudioClassification",local:"whisperforaudioclassification ][ transformers.WhisperForAudioClassification",headingTag:"h2"}}),At=new W({props:{name:"class transformers.WhisperForAudioClassification",anchor:"transformers.WhisperForAudioClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WhisperForAudioClassification.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<code>AutoFeatureExtractor</code> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperForAudioClassification.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.WhisperForAudioClassification.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder.`,name:"encoder_outputs"},{anchor:"transformers.WhisperForAudioClassification.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WhisperForAudioClassification.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WhisperForAudioClassification.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L2085"}}),Qt=new W({props:{name:"forward",anchor:"transformers.WhisperForAudioClassification.forward",parameters:[{name:"input_features",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperForAudioClassification.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<code>AutoFeatureExtractor</code> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperForAudioClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.WhisperForAudioClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder.`,name:"encoder_outputs"},{anchor:"transformers.WhisperForAudioClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WhisperForAudioClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WhisperForAudioClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WhisperForAudioClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L2119",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.SequenceClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
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


<p><code>transformers.modeling_outputs.SequenceClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new ce({props:{$$slots:{default:[fi]},$$scope:{ctx:T}}}),Ue=new oe({props:{anchor:"transformers.WhisperForAudioClassification.forward.example",$$slots:{default:[_i]},$$scope:{ctx:T}}}),Dt=new U({props:{title:"TFWhisperModel",local:"tfwhispermodel ][ transformers.TFWhisperModel",headingTag:"h2"}}),Ot=new W({props:{name:"class transformers.TFWhisperModel",anchor:"transformers.TFWhisperModel",parameters:[{name:"config",val:": WhisperConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<code>from_pretrained()</code> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1231"}}),Kt=new W({props:{name:"call",anchor:"transformers.TFWhisperModel.call",parameters:[{name:"input_features",val:": TFModelInputType | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"decoder_inputs_embeds",val:": Optional[Tuple[Union[np.ndarray, tf.Tensor]]] = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFWhisperModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<code>AutoFeatureExtractor</code> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <code>PreTrainedTokenizer.encode()</code> and
<code>PreTrainedTokenizer.__call__()</code> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFWhisperModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_whisper._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.TFWhisperModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFWhisperModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFWhisperModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFWhisperModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFWhisperModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(tf.Tensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFWhisperModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFWhisperModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFWhisperModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFWhisperModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFWhisperModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1259",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Ze=new ce({props:{$$slots:{default:[gi]},$$scope:{ctx:T}}}),Ne=new oe({props:{anchor:"transformers.TFWhisperModel.call.example",$$slots:{default:[bi]},$$scope:{ctx:T}}}),eo=new U({props:{title:"TFWhisperForConditionalGeneration",local:"tfwhisperforconditionalgeneration ][ transformers.TFWhisperForConditionalGeneration",headingTag:"h2"}}),to=new W({props:{name:"class transformers.TFWhisperForConditionalGeneration",anchor:"transformers.TFWhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<code>from_pretrained()</code> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1347"}}),oo=new W({props:{name:"call",anchor:"transformers.TFWhisperForConditionalGeneration.call",parameters:[{name:"input_features",val:": TFModelInputType | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"decoder_inputs_embeds",val:": Optional[Tuple[Union[np.ndarray, tf.Tensor]]] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<code>AutoFeatureExtractor</code> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <code>PreTrainedTokenizer.encode()</code> and
<code>PreTrainedTokenizer.__call__()</code> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_whisper._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(tf.Tensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1382",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Xe=new ce({props:{$$slots:{default:[yi]},$$scope:{ctx:T}}}),Re=new oe({props:{anchor:"transformers.TFWhisperForConditionalGeneration.call.example",$$slots:{default:[ki]},$$scope:{ctx:T}}}),no=new U({props:{title:"FlaxWhisperModel",local:"flaxwhispermodel ][ transformers.FlaxWhisperModel",headingTag:"h2"}}),so=new W({props:{name:"class transformers.FlaxWhisperModel",anchor:"transformers.FlaxWhisperModel",parameters:[{name:"config",val:": WhisperConfig"},{name:"input_shape",val:": Tuple = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWhisperModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs). This can be used to enable mixed-precision training or half-precision
inference on GPUs or TPUs. If specified all the computation will be performed with the given <code>dtype</code>.
<strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong> If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>
and <code>to_bf16()</code>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1185"}}),ao=new W({props:{name:"__call__",anchor:"transformers.FlaxWhisperModel.__call__",parameters:[{name:"input_features",val:": Array"},{name:"decoder_input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxWhisperModel.__call__.input_features",description:`<strong>input_features</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the features, padding and conversion into a
tensor of type <code>numpy.ndarray</code>. See <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.FlaxWhisperModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Whisper does not support masking of the <code>input_features</code>, this argument is preserved for compatibility, but
is not used. By default the silence in the input log mel spectrogram are ignored.`,name:"attention_mask"},{anchor:"transformers.FlaxWhisperModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code> and <code>PreTrainedTokenizer.__call__()</code> for details.
<a href="../glossary#decoder-input-ids">What are decoder input IDs?</a> Whisper uses the <code>decoder_start_token_id</code> as
the starting token for <code>decoder_input_ids</code> generation.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxWhisperModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default. If you want to change padding behavior, you should modify to your needs. See diagram 1
in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxWhisperModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Whisper does not use <code>position_ids</code> in the encoder as <code>input_features</code> is always the same size and doesn&#x2019;t
use masking, but this argument is preserved for compatibility. By default the silence in the input log mel
spectrogram are ignored.`,name:"position_ids"},{anchor:"transformers.FlaxWhisperModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxWhisperModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxWhisperModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxWhisperModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1134",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new ce({props:{$$slots:{default:[wi]},$$scope:{ctx:T}}}),Le=new oe({props:{anchor:"transformers.FlaxWhisperModel.__call__.example",$$slots:{default:[vi]},$$scope:{ctx:T}}}),ro=new U({props:{title:"FlaxWhisperForConditionalGeneration",local:"flaxwhisperforconditionalgeneration ][ transformers.FlaxWhisperForConditionalGeneration",headingTag:"h2"}}),io=new W({props:{name:"class transformers.FlaxWhisperForConditionalGeneration",anchor:"transformers.FlaxWhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"},{name:"input_shape",val:": Tuple = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs). This can be used to enable mixed-precision training or half-precision
inference on GPUs or TPUs. If specified all the computation will be performed with the given <code>dtype</code>.
<strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong> If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>
and <code>to_bf16()</code>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1267"}}),lo=new W({props:{name:"__call__",anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__",parameters:[{name:"input_features",val:": Array"},{name:"decoder_input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.input_features",description:`<strong>input_features</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the features, padding and conversion into a
tensor of type <code>numpy.ndarray</code>. See <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Whisper does not support masking of the <code>input_features</code>, this argument is preserved for compatibility, but
is not used. By default the silence in the input log mel spectrogram are ignored.`,name:"attention_mask"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code> and <code>PreTrainedTokenizer.__call__()</code> for details.
<a href="../glossary#decoder-input-ids">What are decoder input IDs?</a> Whisper uses the <code>decoder_start_token_id</code> as
the starting token for <code>decoder_input_ids</code> generation.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default. If you want to change padding behavior, you should modify to your needs. See diagram 1
in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Whisper does not use <code>position_ids</code> in the encoder as <code>input_features</code> is always the same size and doesn&#x2019;t
use masking, but this argument is preserved for compatibility. By default the silence in the input log mel
spectrogram are ignored.`,name:"position_ids"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1134",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),He=new ce({props:{$$slots:{default:[Ti]},$$scope:{ctx:T}}}),Ee=new oe({props:{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.example",$$slots:{default:[xi]},$$scope:{ctx:T}}}),co=new U({props:{title:"FlaxWhisperForAudioClassification",local:"flaxwhisperforaudioclassification ][ transformers.FlaxWhisperForAudioClassification",headingTag:"h2"}}),po=new W({props:{name:"class transformers.FlaxWhisperForAudioClassification",anchor:"transformers.FlaxWhisperForAudioClassification",parameters:[{name:"config",val:": WhisperConfig"},{name:"input_shape",val:": Tuple = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWhisperForAudioClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWhisperForAudioClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs). This can be used to enable mixed-precision training or half-precision
inference on GPUs or TPUs. If specified all the computation will be performed with the given <code>dtype</code>.
<strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong> If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>
and <code>to_bf16()</code>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1597"}}),ho=new W({props:{name:"__call__",anchor:"transformers.FlaxWhisperForAudioClassification.__call__",parameters:[{name:"input_features",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.input_features",description:`<strong>input_features</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the features, padding and conversion into a
tensor of type <code>numpy.ndarray</code>. See <a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Whisper does not support masking of the <code>input_features</code>, this argument is preserved for compatibility, but
is not used. By default the silence in the input log mel spectrogram are ignored.`,name:"attention_mask"},{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code> and <code>PreTrainedTokenizer.__call__()</code> for details.
<a href="../glossary#decoder-input-ids">What are decoder input IDs?</a> Whisper uses the <code>decoder_start_token_id</code> as
the starting token for <code>decoder_input_ids</code> generation.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default. If you want to change padding behavior, you should modify to your needs. See diagram 1
in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Whisper does not use <code>position_ids</code> in the encoder as <code>input_features</code> is always the same size and doesn&#x2019;t
use masking, but this argument is preserved for compatibility. By default the silence in the input log mel
spectrogram are ignored.`,name:"position_ids"},{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1625",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ko/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
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


<p><code>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new ce({props:{$$slots:{default:[$i]},$$scope:{ctx:T}}}),Be=new oe({props:{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.example",$$slots:{default:[Wi]},$$scope:{ctx:T}}}),{c(){t=l("meta"),k=s(),d=l("p"),p=s(),m(w.$$.fragment),n=s(),m(v.$$.fragment),$n=s(),it=l("p"),it.innerHTML=Da,Wn=s(),dt=l("p"),dt.textContent=Oa,Mn=s(),lt=l("p"),lt.innerHTML=Ka,Fn=s(),ct=l("p"),ct.textContent=er,zn=s(),pt=l("ul"),pt.innerHTML=tr,jn=s(),m(ht.$$.fragment),Cn=s(),mt=l("p"),mt.innerHTML=or,Jn=s(),ut=l("p"),ut.innerHTML=nr,qn=s(),m(ft.$$.fragment),Gn=s(),Z=l("div"),m(_t.$$.fragment),ds=s(),wo=l("p"),wo.innerHTML=sr,ls=s(),vo=l("p"),vo.innerHTML=ar,cs=s(),m(ge.$$.fragment),In=s(),m(gt.$$.fragment),Un=s(),M=l("div"),m(bt.$$.fragment),ps=s(),To=l("p"),To.textContent=rr,hs=s(),xo=l("p"),xo.innerHTML=ir,ms=s(),ne=l("div"),m(yt.$$.fragment),us=s(),$o=l("p"),$o.textContent=dr,fs=s(),m(be.$$.fragment),_s=s(),ye=l("div"),m(kt.$$.fragment),gs=s(),Wo=l("p"),Wo.textContent=lr,bs=s(),ke=l("div"),m(wt.$$.fragment),ys=s(),Mo=l("p"),Mo.innerHTML=cr,ks=s(),se=l("div"),m(vt.$$.fragment),ws=s(),Fo=l("p"),Fo.innerHTML=pr,vs=s(),zo=l("p"),zo.textContent=hr,Ts=s(),jo=l("div"),m(Tt.$$.fragment),Zn=s(),m(xt.$$.fragment),Nn=s(),F=l("div"),m($t.$$.fragment),xs=s(),Co=l("p"),Co.innerHTML=mr,$s=s(),Jo=l("p"),Jo.innerHTML=ur,Ws=s(),ae=l("div"),m(Wt.$$.fragment),Ms=s(),qo=l("p"),qo.textContent=fr,Fs=s(),m(we.$$.fragment),zs=s(),ve=l("div"),m(Mt.$$.fragment),js=s(),Go=l("p"),Go.textContent=_r,Cs=s(),Te=l("div"),m(Ft.$$.fragment),Js=s(),Io=l("p"),Io.innerHTML=gr,qs=s(),re=l("div"),m(zt.$$.fragment),Gs=s(),Uo=l("p"),Uo.innerHTML=br,Is=s(),Zo=l("p"),Zo.textContent=yr,Us=s(),No=l("div"),m(jt.$$.fragment),Xn=s(),m(Ct.$$.fragment),Rn=s(),G=l("div"),m(Jt.$$.fragment),Zs=s(),Xo=l("p"),Xo.textContent=kr,Ns=s(),Ro=l("p"),Ro.innerHTML=wr,Xs=s(),Vo=l("p"),Vo.innerHTML=vr,Rs=s(),xe=l("div"),m(qt.$$.fragment),Vs=s(),Lo=l("p"),Lo.textContent=Tr,Vn=s(),m(Gt.$$.fragment),Ln=s(),z=l("div"),m(It.$$.fragment),Ls=s(),Ho=l("p"),Ho.textContent=xr,Hs=s(),Eo=l("p"),Eo.innerHTML=$r,Es=s(),$e=l("div"),m(Ut.$$.fragment),Ps=s(),Po=l("p"),Po.innerHTML=Wr,Bs=s(),ie=l("div"),m(Zt.$$.fragment),Ss=s(),Bo=l("p"),Bo.textContent=Mr,Ys=s(),m(We.$$.fragment),As=s(),de=l("div"),m(Nt.$$.fragment),Qs=s(),So=l("p"),So.innerHTML=Fr,Ds=s(),m(Me.$$.fragment),Os=s(),Fe=l("div"),m(Xt.$$.fragment),Ks=s(),Yo=l("p"),Yo.innerHTML=zr,ea=s(),ze=l("div"),m(Rt.$$.fragment),ta=s(),Ao=l("p"),Ao.innerHTML=jr,Hn=s(),m(Vt.$$.fragment),En=s(),I=l("div"),m(Lt.$$.fragment),oa=s(),Qo=l("p"),Qo.innerHTML=Cr,na=s(),Do=l("p"),Do.innerHTML=Jr,sa=s(),P=l("div"),m(Ht.$$.fragment),aa=s(),Oo=l("p"),Oo.innerHTML=qr,ra=s(),m(je.$$.fragment),ia=s(),m(Ce.$$.fragment),da=s(),Je=l("div"),m(Et.$$.fragment),la=s(),Ko=l("p"),Ko.innerHTML=Gr,Pn=s(),m(Pt.$$.fragment),Bn=s(),N=l("div"),m(Bt.$$.fragment),ca=s(),en=l("p"),en.innerHTML=Ir,pa=s(),tn=l("p"),tn.innerHTML=Ur,ha=s(),B=l("div"),m(St.$$.fragment),ma=s(),on=l("p"),on.innerHTML=Zr,ua=s(),m(qe.$$.fragment),fa=s(),m(Ge.$$.fragment),Sn=s(),m(Yt.$$.fragment),Yn=s(),ee=l("div"),m(At.$$.fragment),_a=s(),nn=l("p"),nn.textContent=Nr,ga=s(),S=l("div"),m(Qt.$$.fragment),ba=s(),sn=l("p"),sn.innerHTML=Xr,ya=s(),m(Ie.$$.fragment),ka=s(),m(Ue.$$.fragment),An=s(),m(Dt.$$.fragment),Qn=s(),X=l("div"),m(Ot.$$.fragment),wa=s(),an=l("p"),an.innerHTML=Rr,va=s(),rn=l("p"),rn.innerHTML=Vr,Ta=s(),Y=l("div"),m(Kt.$$.fragment),xa=s(),dn=l("p"),dn.innerHTML=Lr,$a=s(),m(Ze.$$.fragment),Wa=s(),m(Ne.$$.fragment),Dn=s(),m(eo.$$.fragment),On=s(),R=l("div"),m(to.$$.fragment),Ma=s(),ln=l("p"),ln.innerHTML=Hr,Fa=s(),cn=l("p"),cn.innerHTML=Er,za=s(),A=l("div"),m(oo.$$.fragment),ja=s(),pn=l("p"),pn.innerHTML=Pr,Ca=s(),m(Xe.$$.fragment),Ja=s(),m(Re.$$.fragment),Kn=s(),m(no.$$.fragment),es=s(),V=l("div"),m(so.$$.fragment),qa=s(),hn=l("p"),hn.innerHTML=Br,Ga=s(),mn=l("ul"),mn.innerHTML=Sr,Ia=s(),Q=l("div"),m(ao.$$.fragment),Ua=s(),un=l("p"),un.innerHTML=Yr,Za=s(),m(Ve.$$.fragment),Na=s(),m(Le.$$.fragment),ts=s(),m(ro.$$.fragment),os=s(),L=l("div"),m(io.$$.fragment),Xa=s(),fn=l("p"),fn.innerHTML=Ar,Ra=s(),_n=l("ul"),_n.innerHTML=Qr,Va=s(),D=l("div"),m(lo.$$.fragment),La=s(),gn=l("p"),gn.innerHTML=Dr,Ha=s(),m(He.$$.fragment),Ea=s(),m(Ee.$$.fragment),ns=s(),m(co.$$.fragment),ss=s(),H=l("div"),m(po.$$.fragment),Pa=s(),bn=l("p"),bn.innerHTML=Or,Ba=s(),yn=l("ul"),yn.innerHTML=Kr,Sa=s(),O=l("div"),m(ho.$$.fragment),Ya=s(),kn=l("p"),kn.innerHTML=ei,Aa=s(),m(Pe.$$.fragment),Qa=s(),m(Be.$$.fragment),as=s(),vn=l("p"),this.h()},l(e){const i=ai("svelte-u9bgzb",document.head);t=c(i,"META",{name:!0,content:!0}),i.forEach(r),k=a(e),d=c(e,"P",{}),x(d).forEach(r),p=a(e),u(w.$$.fragment,e),n=a(e),u(v.$$.fragment,e),$n=a(e),it=c(e,"P",{"data-svelte-h":!0}),y(it)!=="svelte-jbylng"&&(it.innerHTML=Da),Wn=a(e),dt=c(e,"P",{"data-svelte-h":!0}),y(dt)!=="svelte-e5r8wp"&&(dt.textContent=Oa),Mn=a(e),lt=c(e,"P",{"data-svelte-h":!0}),y(lt)!=="svelte-miykgl"&&(lt.innerHTML=Ka),Fn=a(e),ct=c(e,"P",{"data-svelte-h":!0}),y(ct)!=="svelte-k6v9m1"&&(ct.textContent=er),zn=a(e),pt=c(e,"UL",{"data-svelte-h":!0}),y(pt)!=="svelte-1yp0qfj"&&(pt.innerHTML=tr),jn=a(e),u(ht.$$.fragment,e),Cn=a(e),mt=c(e,"P",{"data-svelte-h":!0}),y(mt)!=="svelte-13fvt52"&&(mt.innerHTML=or),Jn=a(e),ut=c(e,"P",{"data-svelte-h":!0}),y(ut)!=="svelte-x8w7b0"&&(ut.innerHTML=nr),qn=a(e),u(ft.$$.fragment,e),Gn=a(e),Z=c(e,"DIV",{class:!0});var te=x(Z);u(_t.$$.fragment,te),ds=a(te),wo=c(te,"P",{"data-svelte-h":!0}),y(wo)!=="svelte-1vvndk6"&&(wo.innerHTML=sr),ls=a(te),vo=c(te,"P",{"data-svelte-h":!0}),y(vo)!=="svelte-huu8ef"&&(vo.innerHTML=ar),cs=a(te),u(ge.$$.fragment,te),te.forEach(r),In=a(e),u(gt.$$.fragment,e),Un=a(e),M=c(e,"DIV",{class:!0});var C=x(M);u(bt.$$.fragment,C),ps=a(C),To=c(C,"P",{"data-svelte-h":!0}),y(To)!=="svelte-1996rkv"&&(To.textContent=rr),hs=a(C),xo=c(C,"P",{"data-svelte-h":!0}),y(xo)!=="svelte-xbd6w0"&&(xo.innerHTML=ir),ms=a(C),ne=c(C,"DIV",{class:!0});var pe=x(ne);u(yt.$$.fragment,pe),us=a(pe),$o=c(pe,"P",{"data-svelte-h":!0}),y($o)!=="svelte-8in46s"&&($o.textContent=dr),fs=a(pe),u(be.$$.fragment,pe),pe.forEach(r),_s=a(C),ye=c(C,"DIV",{class:!0});var mo=x(ye);u(kt.$$.fragment,mo),gs=a(mo),Wo=c(mo,"P",{"data-svelte-h":!0}),y(Wo)!=="svelte-wv4s2m"&&(Wo.textContent=lr),mo.forEach(r),bs=a(C),ke=c(C,"DIV",{class:!0});var uo=x(ke);u(wt.$$.fragment,uo),ys=a(uo),Mo=c(uo,"P",{"data-svelte-h":!0}),y(Mo)!=="svelte-1f4f5kp"&&(Mo.innerHTML=cr),uo.forEach(r),ks=a(C),se=c(C,"DIV",{class:!0});var he=x(se);u(vt.$$.fragment,he),ws=a(he),Fo=c(he,"P",{"data-svelte-h":!0}),y(Fo)!=="svelte-zj1vf1"&&(Fo.innerHTML=pr),vs=a(he),zo=c(he,"P",{"data-svelte-h":!0}),y(zo)!=="svelte-9vptpw"&&(zo.textContent=hr),he.forEach(r),Ts=a(C),jo=c(C,"DIV",{class:!0});var Tn=x(jo);u(Tt.$$.fragment,Tn),Tn.forEach(r),C.forEach(r),Zn=a(e),u(xt.$$.fragment,e),Nn=a(e),F=c(e,"DIV",{class:!0});var J=x(F);u($t.$$.fragment,J),xs=a(J),Co=c(J,"P",{"data-svelte-h":!0}),y(Co)!=="svelte-14ct2lo"&&(Co.innerHTML=mr),$s=a(J),Jo=c(J,"P",{"data-svelte-h":!0}),y(Jo)!=="svelte-1ndfe3e"&&(Jo.innerHTML=ur),Ws=a(J),ae=c(J,"DIV",{class:!0});var me=x(ae);u(Wt.$$.fragment,me),Ms=a(me),qo=c(me,"P",{"data-svelte-h":!0}),y(qo)!=="svelte-8in46s"&&(qo.textContent=fr),Fs=a(me),u(we.$$.fragment,me),me.forEach(r),zs=a(J),ve=c(J,"DIV",{class:!0});var fo=x(ve);u(Mt.$$.fragment,fo),js=a(fo),Go=c(fo,"P",{"data-svelte-h":!0}),y(Go)!=="svelte-wv4s2m"&&(Go.textContent=_r),fo.forEach(r),Cs=a(J),Te=c(J,"DIV",{class:!0});var _o=x(Te);u(Ft.$$.fragment,_o),Js=a(_o),Io=c(_o,"P",{"data-svelte-h":!0}),y(Io)!=="svelte-1f4f5kp"&&(Io.innerHTML=gr),_o.forEach(r),qs=a(J),re=c(J,"DIV",{class:!0});var ue=x(re);u(zt.$$.fragment,ue),Gs=a(ue),Uo=c(ue,"P",{"data-svelte-h":!0}),y(Uo)!=="svelte-zj1vf1"&&(Uo.innerHTML=br),Is=a(ue),Zo=c(ue,"P",{"data-svelte-h":!0}),y(Zo)!=="svelte-9vptpw"&&(Zo.textContent=yr),ue.forEach(r),Us=a(J),No=c(J,"DIV",{class:!0});var xn=x(No);u(jt.$$.fragment,xn),xn.forEach(r),J.forEach(r),Xn=a(e),u(Ct.$$.fragment,e),Rn=a(e),G=c(e,"DIV",{class:!0});var E=x(G);u(Jt.$$.fragment,E),Zs=a(E),Xo=c(E,"P",{"data-svelte-h":!0}),y(Xo)!=="svelte-1xbhurt"&&(Xo.textContent=kr),Ns=a(E),Ro=c(E,"P",{"data-svelte-h":!0}),y(Ro)!=="svelte-19915nz"&&(Ro.innerHTML=wr),Xs=a(E),Vo=c(E,"P",{"data-svelte-h":!0}),y(Vo)!=="svelte-1lv9ra7"&&(Vo.innerHTML=vr),Rs=a(E),xe=c(E,"DIV",{class:!0});var go=x(xe);u(qt.$$.fragment,go),Vs=a(go),Lo=c(go,"P",{"data-svelte-h":!0}),y(Lo)!=="svelte-1o1r06v"&&(Lo.textContent=Tr),go.forEach(r),E.forEach(r),Vn=a(e),u(Gt.$$.fragment,e),Ln=a(e),z=c(e,"DIV",{class:!0});var q=x(z);u(It.$$.fragment,q),Ls=a(q),Ho=c(q,"P",{"data-svelte-h":!0}),y(Ho)!=="svelte-1g1myb6"&&(Ho.textContent=xr),Hs=a(q),Eo=c(q,"P",{"data-svelte-h":!0}),y(Eo)!=="svelte-tjn15i"&&(Eo.innerHTML=$r),Es=a(q),$e=c(q,"DIV",{class:!0});var bo=x($e);u(Ut.$$.fragment,bo),Ps=a(bo),Po=c(bo,"P",{"data-svelte-h":!0}),y(Po)!=="svelte-7qeqk6"&&(Po.innerHTML=Wr),bo.forEach(r),Bs=a(q),ie=c(q,"DIV",{class:!0});var fe=x(ie);u(Zt.$$.fragment,fe),Ss=a(fe),Bo=c(fe,"P",{"data-svelte-h":!0}),y(Bo)!=="svelte-1cj8dcb"&&(Bo.textContent=Mr),Ys=a(fe),u(We.$$.fragment,fe),fe.forEach(r),As=a(q),de=c(q,"DIV",{class:!0});var _e=x(de);u(Nt.$$.fragment,_e),Qs=a(_e),So=c(_e,"P",{"data-svelte-h":!0}),y(So)!=="svelte-fb31l0"&&(So.innerHTML=Fr),Ds=a(_e),u(Me.$$.fragment,_e),_e.forEach(r),Os=a(q),Fe=c(q,"DIV",{class:!0});var yo=x(Fe);u(Xt.$$.fragment,yo),Ks=a(yo),Yo=c(yo,"P",{"data-svelte-h":!0}),y(Yo)!=="svelte-b7b5eq"&&(Yo.innerHTML=zr),yo.forEach(r),ea=a(q),ze=c(q,"DIV",{class:!0});var ko=x(ze);u(Rt.$$.fragment,ko),ta=a(ko),Ao=c(ko,"P",{"data-svelte-h":!0}),y(Ao)!=="svelte-u0jgov"&&(Ao.innerHTML=jr),ko.forEach(r),q.forEach(r),Hn=a(e),u(Vt.$$.fragment,e),En=a(e),I=c(e,"DIV",{class:!0});var le=x(I);u(Lt.$$.fragment,le),oa=a(le),Qo=c(le,"P",{"data-svelte-h":!0}),y(Qo)!=="svelte-1wogdtk"&&(Qo.innerHTML=Cr),na=a(le),Do=c(le,"P",{"data-svelte-h":!0}),y(Do)!=="svelte-hswkmf"&&(Do.innerHTML=Jr),sa=a(le),P=c(le,"DIV",{class:!0});var Se=x(P);u(Ht.$$.fragment,Se),aa=a(Se),Oo=c(Se,"P",{"data-svelte-h":!0}),y(Oo)!=="svelte-1mwet9q"&&(Oo.innerHTML=qr),ra=a(Se),u(je.$$.fragment,Se),ia=a(Se),u(Ce.$$.fragment,Se),Se.forEach(r),da=a(le),Je=c(le,"DIV",{class:!0});var is=x(Je);u(Et.$$.fragment,is),la=a(is),Ko=c(is,"P",{"data-svelte-h":!0}),y(Ko)!=="svelte-1iyovru"&&(Ko.innerHTML=Gr),is.forEach(r),le.forEach(r),Pn=a(e),u(Pt.$$.fragment,e),Bn=a(e),N=c(e,"DIV",{class:!0});var Ye=x(N);u(Bt.$$.fragment,Ye),ca=a(Ye),en=c(Ye,"P",{"data-svelte-h":!0}),y(en)!=="svelte-175y3np"&&(en.innerHTML=Ir),pa=a(Ye),tn=c(Ye,"P",{"data-svelte-h":!0}),y(tn)!=="svelte-hswkmf"&&(tn.innerHTML=Ur),ha=a(Ye),B=c(Ye,"DIV",{class:!0});var Ae=x(B);u(St.$$.fragment,Ae),ma=a(Ae),on=c(Ae,"P",{"data-svelte-h":!0}),y(on)!=="svelte-fjrdgw"&&(on.innerHTML=Zr),ua=a(Ae),u(qe.$$.fragment,Ae),fa=a(Ae),u(Ge.$$.fragment,Ae),Ae.forEach(r),Ye.forEach(r),Sn=a(e),u(Yt.$$.fragment,e),Yn=a(e),ee=c(e,"DIV",{class:!0});var wn=x(ee);u(At.$$.fragment,wn),_a=a(wn),nn=c(wn,"P",{"data-svelte-h":!0}),y(nn)!=="svelte-1y2nev0"&&(nn.textContent=Nr),ga=a(wn),S=c(wn,"DIV",{class:!0});var Qe=x(S);u(Qt.$$.fragment,Qe),ba=a(Qe),sn=c(Qe,"P",{"data-svelte-h":!0}),y(sn)!=="svelte-l6rpvo"&&(sn.innerHTML=Xr),ya=a(Qe),u(Ie.$$.fragment,Qe),ka=a(Qe),u(Ue.$$.fragment,Qe),Qe.forEach(r),wn.forEach(r),An=a(e),u(Dt.$$.fragment,e),Qn=a(e),X=c(e,"DIV",{class:!0});var De=x(X);u(Ot.$$.fragment,De),wa=a(De),an=c(De,"P",{"data-svelte-h":!0}),y(an)!=="svelte-vkbfyy"&&(an.innerHTML=Rr),va=a(De),rn=c(De,"P",{"data-svelte-h":!0}),y(rn)!=="svelte-1be7e3c"&&(rn.innerHTML=Vr),Ta=a(De),Y=c(De,"DIV",{class:!0});var Oe=x(Y);u(Kt.$$.fragment,Oe),xa=a(Oe),dn=c(Oe,"P",{"data-svelte-h":!0}),y(dn)!=="svelte-az9qey"&&(dn.innerHTML=Lr),$a=a(Oe),u(Ze.$$.fragment,Oe),Wa=a(Oe),u(Ne.$$.fragment,Oe),Oe.forEach(r),De.forEach(r),Dn=a(e),u(eo.$$.fragment,e),On=a(e),R=c(e,"DIV",{class:!0});var Ke=x(R);u(to.$$.fragment,Ke),Ma=a(Ke),ln=c(Ke,"P",{"data-svelte-h":!0}),y(ln)!=="svelte-160h77"&&(ln.innerHTML=Hr),Fa=a(Ke),cn=c(Ke,"P",{"data-svelte-h":!0}),y(cn)!=="svelte-1be7e3c"&&(cn.innerHTML=Er),za=a(Ke),A=c(Ke,"DIV",{class:!0});var et=x(A);u(oo.$$.fragment,et),ja=a(et),pn=c(et,"P",{"data-svelte-h":!0}),y(pn)!=="svelte-sgyxxc"&&(pn.innerHTML=Pr),Ca=a(et),u(Xe.$$.fragment,et),Ja=a(et),u(Re.$$.fragment,et),et.forEach(r),Ke.forEach(r),Kn=a(e),u(no.$$.fragment,e),es=a(e),V=c(e,"DIV",{class:!0});var tt=x(V);u(so.$$.fragment,tt),qa=a(tt),hn=c(tt,"P",{"data-svelte-h":!0}),y(hn)!=="svelte-1fs2ctq"&&(hn.innerHTML=Br),Ga=a(tt),mn=c(tt,"UL",{"data-svelte-h":!0}),y(mn)!=="svelte-1w7z84m"&&(mn.innerHTML=Sr),Ia=a(tt),Q=c(tt,"DIV",{class:!0});var ot=x(Q);u(ao.$$.fragment,ot),Ua=a(ot),un=c(ot,"P",{"data-svelte-h":!0}),y(un)!=="svelte-13ych8p"&&(un.innerHTML=Yr),Za=a(ot),u(Ve.$$.fragment,ot),Na=a(ot),u(Le.$$.fragment,ot),ot.forEach(r),tt.forEach(r),ts=a(e),u(ro.$$.fragment,e),os=a(e),L=c(e,"DIV",{class:!0});var nt=x(L);u(io.$$.fragment,nt),Xa=a(nt),fn=c(nt,"P",{"data-svelte-h":!0}),y(fn)!=="svelte-1im0573"&&(fn.innerHTML=Ar),Ra=a(nt),_n=c(nt,"UL",{"data-svelte-h":!0}),y(_n)!=="svelte-1w7z84m"&&(_n.innerHTML=Qr),Va=a(nt),D=c(nt,"DIV",{class:!0});var st=x(D);u(lo.$$.fragment,st),La=a(st),gn=c(st,"P",{"data-svelte-h":!0}),y(gn)!=="svelte-13ych8p"&&(gn.innerHTML=Dr),Ha=a(st),u(He.$$.fragment,st),Ea=a(st),u(Ee.$$.fragment,st),st.forEach(r),nt.forEach(r),ns=a(e),u(co.$$.fragment,e),ss=a(e),H=c(e,"DIV",{class:!0});var at=x(H);u(po.$$.fragment,at),Pa=a(at),bn=c(at,"P",{"data-svelte-h":!0}),y(bn)!=="svelte-jvvbzk"&&(bn.innerHTML=Or),Ba=a(at),yn=c(at,"UL",{"data-svelte-h":!0}),y(yn)!=="svelte-1w7z84m"&&(yn.innerHTML=Kr),Sa=a(at),O=c(at,"DIV",{class:!0});var rt=x(O);u(ho.$$.fragment,rt),Ya=a(rt),kn=c(rt,"P",{"data-svelte-h":!0}),y(kn)!=="svelte-1namxjo"&&(kn.innerHTML=ei),Aa=a(rt),u(Pe.$$.fragment,rt),Qa=a(rt),u(Be.$$.fragment,rt),rt.forEach(r),at.forEach(r),as=a(e),vn=c(e,"P",{}),x(vn).forEach(r),this.h()},h(){$(t,"name","hf:doc:metadata"),$(t,"content",Fi),$(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,i){o(document.head,t),h(e,k,i),h(e,d,i),h(e,p,i),f(w,e,i),h(e,n,i),f(v,e,i),h(e,$n,i),h(e,it,i),h(e,Wn,i),h(e,dt,i),h(e,Mn,i),h(e,lt,i),h(e,Fn,i),h(e,ct,i),h(e,zn,i),h(e,pt,i),h(e,jn,i),f(ht,e,i),h(e,Cn,i),h(e,mt,i),h(e,Jn,i),h(e,ut,i),h(e,qn,i),f(ft,e,i),h(e,Gn,i),h(e,Z,i),f(_t,Z,null),o(Z,ds),o(Z,wo),o(Z,ls),o(Z,vo),o(Z,cs),f(ge,Z,null),h(e,In,i),f(gt,e,i),h(e,Un,i),h(e,M,i),f(bt,M,null),o(M,ps),o(M,To),o(M,hs),o(M,xo),o(M,ms),o(M,ne),f(yt,ne,null),o(ne,us),o(ne,$o),o(ne,fs),f(be,ne,null),o(M,_s),o(M,ye),f(kt,ye,null),o(ye,gs),o(ye,Wo),o(M,bs),o(M,ke),f(wt,ke,null),o(ke,ys),o(ke,Mo),o(M,ks),o(M,se),f(vt,se,null),o(se,ws),o(se,Fo),o(se,vs),o(se,zo),o(M,Ts),o(M,jo),f(Tt,jo,null),h(e,Zn,i),f(xt,e,i),h(e,Nn,i),h(e,F,i),f($t,F,null),o(F,xs),o(F,Co),o(F,$s),o(F,Jo),o(F,Ws),o(F,ae),f(Wt,ae,null),o(ae,Ms),o(ae,qo),o(ae,Fs),f(we,ae,null),o(F,zs),o(F,ve),f(Mt,ve,null),o(ve,js),o(ve,Go),o(F,Cs),o(F,Te),f(Ft,Te,null),o(Te,Js),o(Te,Io),o(F,qs),o(F,re),f(zt,re,null),o(re,Gs),o(re,Uo),o(re,Is),o(re,Zo),o(F,Us),o(F,No),f(jt,No,null),h(e,Xn,i),f(Ct,e,i),h(e,Rn,i),h(e,G,i),f(Jt,G,null),o(G,Zs),o(G,Xo),o(G,Ns),o(G,Ro),o(G,Xs),o(G,Vo),o(G,Rs),o(G,xe),f(qt,xe,null),o(xe,Vs),o(xe,Lo),h(e,Vn,i),f(Gt,e,i),h(e,Ln,i),h(e,z,i),f(It,z,null),o(z,Ls),o(z,Ho),o(z,Hs),o(z,Eo),o(z,Es),o(z,$e),f(Ut,$e,null),o($e,Ps),o($e,Po),o(z,Bs),o(z,ie),f(Zt,ie,null),o(ie,Ss),o(ie,Bo),o(ie,Ys),f(We,ie,null),o(z,As),o(z,de),f(Nt,de,null),o(de,Qs),o(de,So),o(de,Ds),f(Me,de,null),o(z,Os),o(z,Fe),f(Xt,Fe,null),o(Fe,Ks),o(Fe,Yo),o(z,ea),o(z,ze),f(Rt,ze,null),o(ze,ta),o(ze,Ao),h(e,Hn,i),f(Vt,e,i),h(e,En,i),h(e,I,i),f(Lt,I,null),o(I,oa),o(I,Qo),o(I,na),o(I,Do),o(I,sa),o(I,P),f(Ht,P,null),o(P,aa),o(P,Oo),o(P,ra),f(je,P,null),o(P,ia),f(Ce,P,null),o(I,da),o(I,Je),f(Et,Je,null),o(Je,la),o(Je,Ko),h(e,Pn,i),f(Pt,e,i),h(e,Bn,i),h(e,N,i),f(Bt,N,null),o(N,ca),o(N,en),o(N,pa),o(N,tn),o(N,ha),o(N,B),f(St,B,null),o(B,ma),o(B,on),o(B,ua),f(qe,B,null),o(B,fa),f(Ge,B,null),h(e,Sn,i),f(Yt,e,i),h(e,Yn,i),h(e,ee,i),f(At,ee,null),o(ee,_a),o(ee,nn),o(ee,ga),o(ee,S),f(Qt,S,null),o(S,ba),o(S,sn),o(S,ya),f(Ie,S,null),o(S,ka),f(Ue,S,null),h(e,An,i),f(Dt,e,i),h(e,Qn,i),h(e,X,i),f(Ot,X,null),o(X,wa),o(X,an),o(X,va),o(X,rn),o(X,Ta),o(X,Y),f(Kt,Y,null),o(Y,xa),o(Y,dn),o(Y,$a),f(Ze,Y,null),o(Y,Wa),f(Ne,Y,null),h(e,Dn,i),f(eo,e,i),h(e,On,i),h(e,R,i),f(to,R,null),o(R,Ma),o(R,ln),o(R,Fa),o(R,cn),o(R,za),o(R,A),f(oo,A,null),o(A,ja),o(A,pn),o(A,Ca),f(Xe,A,null),o(A,Ja),f(Re,A,null),h(e,Kn,i),f(no,e,i),h(e,es,i),h(e,V,i),f(so,V,null),o(V,qa),o(V,hn),o(V,Ga),o(V,mn),o(V,Ia),o(V,Q),f(ao,Q,null),o(Q,Ua),o(Q,un),o(Q,Za),f(Ve,Q,null),o(Q,Na),f(Le,Q,null),h(e,ts,i),f(ro,e,i),h(e,os,i),h(e,L,i),f(io,L,null),o(L,Xa),o(L,fn),o(L,Ra),o(L,_n),o(L,Va),o(L,D),f(lo,D,null),o(D,La),o(D,gn),o(D,Ha),f(He,D,null),o(D,Ea),f(Ee,D,null),h(e,ns,i),f(co,e,i),h(e,ss,i),h(e,H,i),f(po,H,null),o(H,Pa),o(H,bn),o(H,Ba),o(H,yn),o(H,Sa),o(H,O),f(ho,O,null),o(O,Ya),o(O,kn),o(O,Aa),f(Pe,O,null),o(O,Qa),f(Be,O,null),h(e,as,i),h(e,vn,i),rs=!0},p(e,[i]){const te={};i&2&&(te.$$scope={dirty:i,ctx:e}),ge.$set(te);const C={};i&2&&(C.$$scope={dirty:i,ctx:e}),be.$set(C);const pe={};i&2&&(pe.$$scope={dirty:i,ctx:e}),we.$set(pe);const mo={};i&2&&(mo.$$scope={dirty:i,ctx:e}),We.$set(mo);const uo={};i&2&&(uo.$$scope={dirty:i,ctx:e}),Me.$set(uo);const he={};i&2&&(he.$$scope={dirty:i,ctx:e}),je.$set(he);const Tn={};i&2&&(Tn.$$scope={dirty:i,ctx:e}),Ce.$set(Tn);const J={};i&2&&(J.$$scope={dirty:i,ctx:e}),qe.$set(J);const me={};i&2&&(me.$$scope={dirty:i,ctx:e}),Ge.$set(me);const fo={};i&2&&(fo.$$scope={dirty:i,ctx:e}),Ie.$set(fo);const _o={};i&2&&(_o.$$scope={dirty:i,ctx:e}),Ue.$set(_o);const ue={};i&2&&(ue.$$scope={dirty:i,ctx:e}),Ze.$set(ue);const xn={};i&2&&(xn.$$scope={dirty:i,ctx:e}),Ne.$set(xn);const E={};i&2&&(E.$$scope={dirty:i,ctx:e}),Xe.$set(E);const go={};i&2&&(go.$$scope={dirty:i,ctx:e}),Re.$set(go);const q={};i&2&&(q.$$scope={dirty:i,ctx:e}),Ve.$set(q);const bo={};i&2&&(bo.$$scope={dirty:i,ctx:e}),Le.$set(bo);const fe={};i&2&&(fe.$$scope={dirty:i,ctx:e}),He.$set(fe);const _e={};i&2&&(_e.$$scope={dirty:i,ctx:e}),Ee.$set(_e);const yo={};i&2&&(yo.$$scope={dirty:i,ctx:e}),Pe.$set(yo);const ko={};i&2&&(ko.$$scope={dirty:i,ctx:e}),Be.$set(ko)},i(e){rs||(_(w.$$.fragment,e),_(v.$$.fragment,e),_(ht.$$.fragment,e),_(ft.$$.fragment,e),_(_t.$$.fragment,e),_(ge.$$.fragment,e),_(gt.$$.fragment,e),_(bt.$$.fragment,e),_(yt.$$.fragment,e),_(be.$$.fragment,e),_(kt.$$.fragment,e),_(wt.$$.fragment,e),_(vt.$$.fragment,e),_(Tt.$$.fragment,e),_(xt.$$.fragment,e),_($t.$$.fragment,e),_(Wt.$$.fragment,e),_(we.$$.fragment,e),_(Mt.$$.fragment,e),_(Ft.$$.fragment,e),_(zt.$$.fragment,e),_(jt.$$.fragment,e),_(Ct.$$.fragment,e),_(Jt.$$.fragment,e),_(qt.$$.fragment,e),_(Gt.$$.fragment,e),_(It.$$.fragment,e),_(Ut.$$.fragment,e),_(Zt.$$.fragment,e),_(We.$$.fragment,e),_(Nt.$$.fragment,e),_(Me.$$.fragment,e),_(Xt.$$.fragment,e),_(Rt.$$.fragment,e),_(Vt.$$.fragment,e),_(Lt.$$.fragment,e),_(Ht.$$.fragment,e),_(je.$$.fragment,e),_(Ce.$$.fragment,e),_(Et.$$.fragment,e),_(Pt.$$.fragment,e),_(Bt.$$.fragment,e),_(St.$$.fragment,e),_(qe.$$.fragment,e),_(Ge.$$.fragment,e),_(Yt.$$.fragment,e),_(At.$$.fragment,e),_(Qt.$$.fragment,e),_(Ie.$$.fragment,e),_(Ue.$$.fragment,e),_(Dt.$$.fragment,e),_(Ot.$$.fragment,e),_(Kt.$$.fragment,e),_(Ze.$$.fragment,e),_(Ne.$$.fragment,e),_(eo.$$.fragment,e),_(to.$$.fragment,e),_(oo.$$.fragment,e),_(Xe.$$.fragment,e),_(Re.$$.fragment,e),_(no.$$.fragment,e),_(so.$$.fragment,e),_(ao.$$.fragment,e),_(Ve.$$.fragment,e),_(Le.$$.fragment,e),_(ro.$$.fragment,e),_(io.$$.fragment,e),_(lo.$$.fragment,e),_(He.$$.fragment,e),_(Ee.$$.fragment,e),_(co.$$.fragment,e),_(po.$$.fragment,e),_(ho.$$.fragment,e),_(Pe.$$.fragment,e),_(Be.$$.fragment,e),rs=!0)},o(e){g(w.$$.fragment,e),g(v.$$.fragment,e),g(ht.$$.fragment,e),g(ft.$$.fragment,e),g(_t.$$.fragment,e),g(ge.$$.fragment,e),g(gt.$$.fragment,e),g(bt.$$.fragment,e),g(yt.$$.fragment,e),g(be.$$.fragment,e),g(kt.$$.fragment,e),g(wt.$$.fragment,e),g(vt.$$.fragment,e),g(Tt.$$.fragment,e),g(xt.$$.fragment,e),g($t.$$.fragment,e),g(Wt.$$.fragment,e),g(we.$$.fragment,e),g(Mt.$$.fragment,e),g(Ft.$$.fragment,e),g(zt.$$.fragment,e),g(jt.$$.fragment,e),g(Ct.$$.fragment,e),g(Jt.$$.fragment,e),g(qt.$$.fragment,e),g(Gt.$$.fragment,e),g(It.$$.fragment,e),g(Ut.$$.fragment,e),g(Zt.$$.fragment,e),g(We.$$.fragment,e),g(Nt.$$.fragment,e),g(Me.$$.fragment,e),g(Xt.$$.fragment,e),g(Rt.$$.fragment,e),g(Vt.$$.fragment,e),g(Lt.$$.fragment,e),g(Ht.$$.fragment,e),g(je.$$.fragment,e),g(Ce.$$.fragment,e),g(Et.$$.fragment,e),g(Pt.$$.fragment,e),g(Bt.$$.fragment,e),g(St.$$.fragment,e),g(qe.$$.fragment,e),g(Ge.$$.fragment,e),g(Yt.$$.fragment,e),g(At.$$.fragment,e),g(Qt.$$.fragment,e),g(Ie.$$.fragment,e),g(Ue.$$.fragment,e),g(Dt.$$.fragment,e),g(Ot.$$.fragment,e),g(Kt.$$.fragment,e),g(Ze.$$.fragment,e),g(Ne.$$.fragment,e),g(eo.$$.fragment,e),g(to.$$.fragment,e),g(oo.$$.fragment,e),g(Xe.$$.fragment,e),g(Re.$$.fragment,e),g(no.$$.fragment,e),g(so.$$.fragment,e),g(ao.$$.fragment,e),g(Ve.$$.fragment,e),g(Le.$$.fragment,e),g(ro.$$.fragment,e),g(io.$$.fragment,e),g(lo.$$.fragment,e),g(He.$$.fragment,e),g(Ee.$$.fragment,e),g(co.$$.fragment,e),g(po.$$.fragment,e),g(ho.$$.fragment,e),g(Pe.$$.fragment,e),g(Be.$$.fragment,e),rs=!1},d(e){e&&(r(k),r(d),r(p),r(n),r($n),r(it),r(Wn),r(dt),r(Mn),r(lt),r(Fn),r(ct),r(zn),r(pt),r(jn),r(Cn),r(mt),r(Jn),r(ut),r(qn),r(Gn),r(Z),r(In),r(Un),r(M),r(Zn),r(Nn),r(F),r(Xn),r(Rn),r(G),r(Vn),r(Ln),r(z),r(Hn),r(En),r(I),r(Pn),r(Bn),r(N),r(Sn),r(Yn),r(ee),r(An),r(Qn),r(X),r(Dn),r(On),r(R),r(Kn),r(es),r(V),r(ts),r(os),r(L),r(ns),r(ss),r(H),r(as),r(vn)),r(t),b(w,e),b(v,e),b(ht,e),b(ft,e),b(_t),b(ge),b(gt,e),b(bt),b(yt),b(be),b(kt),b(wt),b(vt),b(Tt),b(xt,e),b($t),b(Wt),b(we),b(Mt),b(Ft),b(zt),b(jt),b(Ct,e),b(Jt),b(qt),b(Gt,e),b(It),b(Ut),b(Zt),b(We),b(Nt),b(Me),b(Xt),b(Rt),b(Vt,e),b(Lt),b(Ht),b(je),b(Ce),b(Et),b(Pt,e),b(Bt),b(St),b(qe),b(Ge),b(Yt,e),b(At),b(Qt),b(Ie),b(Ue),b(Dt,e),b(Ot),b(Kt),b(Ze),b(Ne),b(eo,e),b(to),b(oo),b(Xe),b(Re),b(no,e),b(so),b(ao),b(Ve),b(Le),b(ro,e),b(io),b(lo),b(He),b(Ee),b(co,e),b(po),b(ho),b(Pe),b(Be)}}}const Fi='{"title":"Whisper","local":"whisper","sections":[{"title":"개요","local":"overview","sections":[],"depth":2},{"title":"WhisperConfig","local":"whisperconfig ][ transformers.WhisperConfig","sections":[],"depth":2},{"title":"WhisperTokenizer","local":"whispertokenizer ][ transformers.WhisperTokenizer","sections":[],"depth":2},{"title":"WhisperTokenizerFast","local":"whispertokenizerfast ][ transformers.WhisperTokenizerFast","sections":[],"depth":2},{"title":"WhisperFeatureExtractor","local":"whisperfeatureextractor ][ transformers.WhisperFeatureExtractor","sections":[],"depth":2},{"title":"WhisperProcessor","local":"whisperprocessor ][ transformers.WhisperProcessor","sections":[],"depth":2},{"title":"WhisperModel","local":"whispermodel ][ transformers.WhisperModel","sections":[],"depth":2},{"title":"WhisperForConditionalGeneration","local":"whisperforconditionalgeneration ][ transformers.WhisperForConditionalGeneration","sections":[],"depth":2},{"title":"WhisperForAudioClassification","local":"whisperforaudioclassification ][ transformers.WhisperForAudioClassification","sections":[],"depth":2},{"title":"TFWhisperModel","local":"tfwhispermodel ][ transformers.TFWhisperModel","sections":[],"depth":2},{"title":"TFWhisperForConditionalGeneration","local":"tfwhisperforconditionalgeneration ][ transformers.TFWhisperForConditionalGeneration","sections":[],"depth":2},{"title":"FlaxWhisperModel","local":"flaxwhispermodel ][ transformers.FlaxWhisperModel","sections":[],"depth":2},{"title":"FlaxWhisperForConditionalGeneration","local":"flaxwhisperforconditionalgeneration ][ transformers.FlaxWhisperForConditionalGeneration","sections":[],"depth":2},{"title":"FlaxWhisperForAudioClassification","local":"flaxwhisperforaudioclassification ][ transformers.FlaxWhisperForAudioClassification","sections":[],"depth":2}],"depth":1}';function zi(T){return oi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ui extends ni{constructor(t){super(),si(this,t,zi,Mi,ti,{})}}export{Ui as component};
