import{s as oa,o as na,n as ne}from"../chunks/scheduler.9bc65507.js";import{S as sa,i as aa,g as l,s as a,r as p,A as ra,h as c,f as d,c as r,j as $,u as m,x as w,k as F,y as o,a as b,v as h,d as u,t as f,w as g}from"../chunks/index.707bf1b6.js";import{T as Mt}from"../chunks/Tip.c2ecdbf4.js";import{D as j}from"../chunks/Docstring.17db21ae.js";import{C as Ce}from"../chunks/CodeBlock.54a9f38d.js";import{F as ia,M as Fs}from"../chunks/Markdown.fef84341.js";import{E as rt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Me}from"../chunks/Heading.342b1fa6.js";function da(W){let e,_="Example:",n,i,k;return i=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFdoaXNwZXJDb25maWclMkMlMjBXaGlzcGVyTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwV2hpc3BlciUyMHRpbnklMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwV2hpc3BlckNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjB0aW55JTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBXaGlzcGVyTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperConfig, WhisperModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Whisper tiny style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = WhisperConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the tiny style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-11lpom8"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function la(W){let e,_="update the prefix tokens as required when fine-tuning. Example:",n,i,k;return i=new Ce({props:{code:"JTIzJTIwaW5zdGFudGlhdGUlMjB0aGUlMjB0b2tlbml6ZXIlMjBhbmQlMjBzZXQlMjB0aGUlMjBwcmVmaXglMjB0b2tlbiUyMHRvJTIwU3BhbmlzaCUwQXRva2VuaXplciUyMCUzRCUyMFdoaXNwZXJUb2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItdGlueSUyMiUyQyUyMGxhbmd1YWdlJTNEJTIyc3BhbmlzaCUyMiklMEElMjMlMjBub3clMjBzd2l0Y2glMjB0aGUlMjBwcmVmaXglMjB0b2tlbiUyMGZyb20lMjBTcGFuaXNoJTIwdG8lMjBGcmVuY2glMEF0b2tlbml6ZXIuc2V0X3ByZWZpeF90b2tlbnMobGFuZ3VhZ2UlM0QlMjJmcmVuY2glMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate the tokenizer and set the prefix token to Spanish</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = WhisperTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>, language=<span class="hljs-string">&quot;spanish&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># now switch the prefix token from Spanish to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.set_prefix_tokens(language=<span class="hljs-string">&quot;french&quot;</span>)`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-14u5irj"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function ca(W){let e,_="update the prefix tokens as required when fine-tuning. Example:",n,i,k;return i=new Ce({props:{code:"JTIzJTIwaW5zdGFudGlhdGUlMjB0aGUlMjB0b2tlbml6ZXIlMjBhbmQlMjBzZXQlMjB0aGUlMjBwcmVmaXglMjB0b2tlbiUyMHRvJTIwU3BhbmlzaCUwQXRva2VuaXplciUyMCUzRCUyMFdoaXNwZXJUb2tlbml6ZXJGYXN0LmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLXRpbnklMjIlMkMlMjBsYW5ndWFnZSUzRCUyMnNwYW5pc2glMjIpJTBBJTIzJTIwbm93JTIwc3dpdGNoJTIwdGhlJTIwcHJlZml4JTIwdG9rZW4lMjBmcm9tJTIwU3BhbmlzaCUyMHRvJTIwRnJlbmNoJTBBdG9rZW5pemVyLnNldF9wcmVmaXhfdG9rZW5zKGxhbmd1YWdlJTNEJTIyZnJlbmNoJTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate the tokenizer and set the prefix token to Spanish</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = WhisperTokenizerFast.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>, language=<span class="hljs-string">&quot;spanish&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># now switch the prefix token from Spanish to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.set_prefix_tokens(language=<span class="hljs-string">&quot;french&quot;</span>)`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-14u5irj"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function pa(W){let e,_=`This class method is simply calling the feature extractor
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a>, image processor
<a href="/docs/transformers/main/en/main_classes/image_processor#transformers.ImageProcessingMixin">ImageProcessingMixin</a> and the tokenizer
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code> methods. Please refer to the docstrings of the
methods above for more information.`;return{c(){e=l("p"),e.innerHTML=_},l(n){e=c(n,"P",{"data-svelte-h":!0}),w(e)!=="svelte-1ob8jsn"&&(e.innerHTML=_)},m(n,i){b(n,e,i)},p:ne,d(n){n&&d(e)}}}function ma(W){let e,_=`This class method is simply calling <a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.save_pretrained">save_pretrained()</a>. Please refer to the docstrings of the
methods above for more information.`;return{c(){e=l("p"),e.innerHTML=_},l(n){e=c(n,"P",{"data-svelte-h":!0}),w(e)!=="svelte-1qvfzw2"&&(e.innerHTML=_)},m(n,i){b(n,e,i)},p:ne,d(n){n&&d(e)}}}function ha(W){let e,_=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=_},l(n){e=c(n,"P",{"data-svelte-h":!0}),w(e)!=="svelte-fincs2"&&(e.innerHTML=_)},m(n,i){b(n,e,i)},p:ne,d(n){n&&d(e)}}}function ua(W){let e,_="Example:",n,i,k;return i=new Ce({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IlMkMlMjBXaGlzcGVyTW9kZWwlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFtb2RlbCUyMCUzRCUyMFdoaXNwZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpJTJGd2hpc3Blci1iYXNlJTIyKSUwQWZlYXR1cmVfZXh0cmFjdG9yJTIwJTNEJTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItYmFzZSUyMiklMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2R1bW15JTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBaW5wdXRzJTIwJTNEJTIwZmVhdHVyZV9leHRyYWN0b3IoZHMlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBaW5wdXRfZmVhdHVyZXMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfZmVhdHVyZXMlMEFkZWNvZGVyX2lucHV0X2lkcyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIlNUIxJTJDJTIwMSU1RCU1RCklMjAqJTIwbW9kZWwuY29uZmlnLmRlY29kZXJfc3RhcnRfdG9rZW5faWQlMEFsYXN0X2hpZGRlbl9zdGF0ZSUyMCUzRCUyMG1vZGVsKGlucHV0X2ZlYXR1cmVzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RkZWNvZGVyX2lucHV0X2lkcykubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlLnNoYXBlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-11lpom8"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function fa(W){let e,_=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=_},l(n){e=c(n,"P",{"data-svelte-h":!0}),w(e)!=="svelte-fincs2"&&(e.innerHTML=_)},m(n,i){b(n,e,i)},p:ne,d(n){n&&d(e)}}}function ga(W){let e,_="Example:",n,i,k;return i=new Ce({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Byb2Nlc3NvciUyQyUyMFdoaXNwZXJGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLXRpbnkuZW4lMjIpJTBBbW9kZWwlMjAlM0QlMjBXaGlzcGVyRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLXRpbnkuZW4lMjIpJTBBJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kdW1teSUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHByb2Nlc3NvcihkcyU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFpbnB1dF9mZWF0dXJlcyUyMCUzRCUyMGlucHV0cy5pbnB1dF9mZWF0dXJlcyUwQSUwQWdlbmVyYXRlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dHMlM0RpbnB1dF9mZWF0dXJlcyklMEElMEF0cmFuc2NyaXB0aW9uJTIwJTNEJTIwcHJvY2Vzc29yLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfaWRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTVCMCU1RCUwQXRyYW5zY3JpcHRpb24=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-11lpom8"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function _a(W){let e,_=`Most generation-controlling parameters are set in <code>generation_config</code> which, if not passed, will be set to the
model’s default generation configuration. You can override any <code>generation_config</code> by passing the corresponding
parameters to generate(), e.g. <code>.generate(inputs, num_beams=4, do_sample=True)</code>.`,n,i,k=`For an overview of generation strategies and code examples, check out the <a href="./generation_strategies">following
guide</a>.`;return{c(){e=l("p"),e.innerHTML=_,n=a(),i=l("p"),i.innerHTML=k},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-1c5u34l"&&(e.innerHTML=_),n=r(s),i=c(s,"P",{"data-svelte-h":!0}),w(i)!=="svelte-nzkxpe"&&(i.innerHTML=k)},m(s,M){b(s,e,M),b(s,n,M),b(s,i,M)},p:ne,d(s){s&&(d(e),d(n),d(i))}}}function ba(W){let e,_;return e=new Ce({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Byb2Nlc3NvciUyQyUyMFdoaXNwZXJGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMkMlMjBBdWRpbyUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItdGlueS5lbiUyMiklMEFtb2RlbCUyMCUzRCUyMFdoaXNwZXJGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItdGlueS5lbiUyMiklMEFtb2RlbC5jdWRhKCklMEElMEElMjMlMjBsb2FkJTIwYXVkaW9zJTIwJTNFJTIwMzAlMjBzZWNvbmRzJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyZGlzdGlsLXdoaXNwZXIlMkZtZWFud2hpbGUlMjIlMkMlMjAlMjJkZWZhdWx0JTIyKSU1QiUyMnRlc3QlMjIlNUQlMEElMjMlMjByZXNhbXBsZSUyMHRvJTIwMTZrSHolMEFkcyUyMCUzRCUyMGRzLmNhc3RfY29sdW1uKCUyMmF1ZGlvJTIyJTJDJTIwQXVkaW8oc2FtcGxpbmdfcmF0ZSUzRDE2MDAwKSklMEElMjMlMjB0YWtlJTIwZmlyc3QlMjA4JTIwYXVkaW9zJTIwYW5kJTIwcmV0cmlldmUlMjBhcnJheSUwQWF1ZGlvJTIwJTNEJTIwZHMlNUIlM0E4JTVEJTVCJTIyYXVkaW8lMjIlNUQlMEFhdWRpbyUyMCUzRCUyMCU1QnglNUIlMjJhcnJheSUyMiU1RCUyMGZvciUyMHglMjBpbiUyMGF1ZGlvJTVEJTBBJTBBJTIzJTIwbWFrZSUyMHN1cmUlMjB0byUyME5PVCUyMHRydW5jYXRlJTIwdGhlJTIwaW5wdXQlMjBhdWRpbyUyQyUyMHRvJTIwcmV0dXJuJTIwdGhlJTIwJTYwYXR0ZW50aW9uX21hc2slNjAlMjBhbmQlMjB0byUyMHBhZCUyMHRvJTIwdGhlJTIwbG9uZ2VzdCUyMGF1ZGlvJTBBaW5wdXRzJTIwJTNEJTIwcHJvY2Vzc29yKGF1ZGlvJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHRydW5jYXRpb24lM0RGYWxzZSUyQyUyMHBhZGRpbmclM0QlMjJsb25nZXN0JTIyJTJDJTIwcmV0dXJuX2F0dGVudGlvbl9tYXNrJTNEVHJ1ZSUyQyUyMHNhbXBsaW5nX3JhdGUlM0QxNl8wMDApJTBBaW5wdXRzJTIwJTNEJTIwaW5wdXRzLnRvKCUyMmN1ZGElMjIlMkMlMjB0b3JjaC5mbG9hdDMyKSUwQSUwQSUyMyUyMHRyYW5zY3JpYmUlMjBhdWRpbyUyMHRvJTIwaWRzJTBBZ2VuZXJhdGVkX2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCoqaW5wdXRzKSUwQSUwQXRyYW5zY3JpcHRpb24lMjAlM0QlMjBwcm9jZXNzb3IuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZF9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklMEF0cmFuc2NyaXB0aW9uJTVCMCU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, WhisperForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Audio

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.cuda()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load audios &gt; 30 seconds</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;distil-whisper/meanwhile&quot;</span>, <span class="hljs-string">&quot;default&quot;</span>)[<span class="hljs-string">&quot;test&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># resample to 16kHz</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(sampling_rate=<span class="hljs-number">16000</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># take first 8 audios and retrieve array</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>audio = ds[:<span class="hljs-number">8</span>][<span class="hljs-string">&quot;audio&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>audio = [x[<span class="hljs-string">&quot;array&quot;</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> audio]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># make sure to NOT truncate the input audio, to return the \`attention_mask\` and to pad to the longest audio</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(audio, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, truncation=<span class="hljs-literal">False</span>, padding=<span class="hljs-string">&quot;longest&quot;</span>, return_attention_mask=<span class="hljs-literal">True</span>, sampling_rate=<span class="hljs-number">16_000</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = inputs.to(<span class="hljs-string">&quot;cuda&quot;</span>, torch.float32)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe audio to ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27; Folks, if you watch the show, you know, I spent a lot of time right over there. Patiently and astutely scrutinizing the boxwood and mahogany chest set of the day&#x27;</span>s biggest stories developing the central headline pawns, definitely maneuvering an oso topical night to F6, fainting a classic Sicilian, nade door variation on the news, <span class="hljs-built_in">all</span> the <span class="hljs-keyword">while</span> seeing eight moves deep <span class="hljs-keyword">and</span> patiently marshalling the latest press releases into a fishe<span class="hljs-string">r&#x27;s shows in Lip Nitsky attack that culminates in the elegant lethal slow-played, all-passant checkmate that is my nightly monologue. But sometimes, sometimes, folks, I. CHEERING AND APPLAUSE Sometimes I startle away, cubside down in the monkey bars of a condemned playground on a super fun site. Get all hept up on goofballs. Rummage that were discarded tag bag of defective toys. Yank out a fist bowl of disembodied doll limbs, toss them on a stained kid&#x27;</span>s place mat <span class="hljs-keyword">from</span> a defunct dennies. <span class="hljs-built_in">set</span> up a table inside a rusty cargo container down by the Wharf <span class="hljs-keyword">and</span> challenged toothless drifters to the godless bughouse blitz of tournament that <span class="hljs-keyword">is</span> my segment. Meanwhile!<span class="hljs-string">&#x27;</span>`,wrap:!1}}),{c(){p(e.$$.fragment)},l(n){m(e.$$.fragment,n)},m(n,i){h(e,n,i),_=!0},p:ne,i(n){_||(u(e.$$.fragment,n),_=!0)},o(n){f(e.$$.fragment,n),_=!1},d(n){g(e,n)}}}function ya(W){let e,_;return e=new Ce({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Byb2Nlc3NvciUyQyUyMFdoaXNwZXJGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLXRpbnkuZW4lMjIpJTBBbW9kZWwlMjAlM0QlMjBXaGlzcGVyRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLXRpbnkuZW4lMjIpJTBBJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kdW1teSUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHByb2Nlc3NvcihkcyU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFpbnB1dF9mZWF0dXJlcyUyMCUzRCUyMGlucHV0cy5pbnB1dF9mZWF0dXJlcyUwQSUwQWdlbmVyYXRlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dHMlM0RpbnB1dF9mZWF0dXJlcyklMEElMEF0cmFuc2NyaXB0aW9uJTIwJTNEJTIwcHJvY2Vzc29yLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfaWRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTVCMCU1RCUwQXRyYW5zY3JpcHRpb24=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`,wrap:!1}}),{c(){p(e.$$.fragment)},l(n){m(e.$$.fragment,n)},m(n,i){h(e,n,i),_=!0},p:ne,i(n){_||(u(e.$$.fragment,n),_=!0)},o(n){f(e.$$.fragment,n),_=!1},d(n){g(e,n)}}}function wa(W){let e,_="Example:",n,i,k;return i=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFdoaXNwZXJGb3JDYXVzYWxMTSUyQyUyMFdoaXNwZXJGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMkMlMjBXaGlzcGVyUHJvY2Vzc29yJTBBaW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBXaGlzcGVyUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLWxhcmdlLXYyJTIyKSUwQW1vZGVsJTIwJTNEJTIwV2hpc3BlckZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpJTJGd2hpc3Blci1sYXJnZS12MiUyMiklMEElMEFhc3Npc3RhbnRfbW9kZWwlMjAlM0QlMjBXaGlzcGVyRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmRpc3RpbC13aGlzcGVyJTJGZGlzdGlsLWxhcmdlLXYyJTIyKSUwQSUwQWRzJTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZHVtbXklMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEFzYW1wbGUlMjAlM0QlMjBkcyU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCUwQWlucHV0X2ZlYXR1cmVzJTIwJTNEJTIwcHJvY2Vzc29yKCUwQSUyMCUyMCUyMCUyMHNhbXBsZSU1QiUyMmFycmF5JTIyJTVEJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRHNhbXBsZSU1QiUyMnNhbXBsaW5nX3JhdGUlMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKS5pbnB1dF9mZWF0dXJlcyUwQSUwQXByZWRpY3RlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dF9mZWF0dXJlcyUyQyUyMGFzc2lzdGFudF9tb2RlbCUzRGFzc2lzdGFudF9tb2RlbCklMEElMEElMjMlMjBkZWNvZGUlMjB0b2tlbiUyMGlkcyUyMHRvJTIwdGV4dCUwQXRyYW5zY3JpcHRpb24lMjAlM0QlMjBwcm9jZXNzb3IuYmF0Y2hfZGVjb2RlKHByZWRpY3RlZF9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklNUIwJTVEJTBBdHJhbnNjcmlwdGlvbg==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperForCausalLM, WhisperForConditionalGeneration, WhisperProcessor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = WhisperProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-large-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-large-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>assistant_model = WhisperForCausalLM.from_pretrained(<span class="hljs-string">&quot;distil-whisper/distil-large-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sample = ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = processor(
<span class="hljs-meta">... </span>    sample[<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sample[<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = model.generate(input_features, assistant_model=assistant_model)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># decode token ids to text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes and we are glad to welcome his gospel.&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-11lpom8"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function ka(W){let e,_=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=_},l(n){e=c(n,"P",{"data-svelte-h":!0}),w(e)!=="svelte-fincs2"&&(e.innerHTML=_)},m(n,i){b(n,e,i)},p:ne,d(n){n&&d(e)}}}function Ta(W){let e,_="Example:",n,i,k;return i=new Ce({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IlMkMlMjBXaGlzcGVyRm9yQXVkaW9DbGFzc2lmaWNhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQWZlYXR1cmVfZXh0cmFjdG9yJTIwJTNEJTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IuZnJvbV9wcmV0cmFpbmVkKCUyMnNhbmNoaXQtZ2FuZGhpJTJGd2hpc3Blci1tZWRpdW0tZmxldXJzLWxhbmctaWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBXaGlzcGVyRm9yQXVkaW9DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyc2FuY2hpdC1nYW5kaGklMkZ3aGlzcGVyLW1lZGl1bS1mbGV1cnMtbGFuZy1pZCUyMiklMEElMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJnb29nbGUlMkZmbGV1cnMlMjIlMkMlMjAlMjJhbGwlMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIlMkMlMjBzdHJlYW1pbmclM0RUcnVlKSUwQXNhbXBsZSUyMCUzRCUyMG5leHQoaXRlcihkcykpJTBBJTBBaW5wdXRzJTIwJTNEJTIwZmVhdHVyZV9leHRyYWN0b3IoJTBBJTIwJTIwJTIwJTIwc2FtcGxlJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHNhbXBsaW5nX3JhdGUlM0RzYW1wbGUlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMnNhbXBsaW5nX3JhdGUlMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQWlucHV0X2ZlYXR1cmVzJTIwJTNEJTIwaW5wdXRzLmlucHV0X2ZlYXR1cmVzJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2ZlYXR1cmVzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJnbWF4KGxvZ2l0cykuaXRlbSgpJTBBcHJlZGljdGVkX2xhYmVsJTIwJTNEJTIwbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCcHJlZGljdGVkX2NsYXNzX2lkcyU1RCUwQXByZWRpY3RlZF9sYWJlbA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
<span class="hljs-string">&#x27;Afrikaans&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-11lpom8"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function va(W){let e,_,n,i,k,s,M=`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Je,S,ft=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ue,C,D,qe,P,gt='The <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel">WhisperModel</a> forward method, overrides the <code>__call__</code> special method.',Ge,N,Ke,V,pe,B,te,X,A,xe=`Masks extracted features along time axis and/or along feature axis according to
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment</a>.`,ie,me,Se,R,he,Ie,q,ue=`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ze,Q,it=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Te,Z,de,se,fe,x='The <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperForConditionalGeneration">WhisperForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',I,G,L,E,ge,Y,oe,We,dt,lt="Transcribes or translates log-mel input features to a sequence of auto-regressively generated token ids.",ve,we,et,Ne,qt="Example:",Xe,ke,tt="<li><em>Longform transcription</em>: To transcribe or translate audios longer than 30 seconds, process the audio files without truncation and pass all mel features at once to generate.</li>",je,U,T,J,_e="<li><em>Shortform transcription</em>: If passed mel input features are &lt; 30 seconds, the whole audio will be transcribed with a single call to generate.</li>",$e,ae,le,ce,_t,K,Pe,oo,ct,fn="Whisper decoder with with a language modeling head on top (linear layer with weights tied to the input embeddings).",no,Qe,Co=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,pt,ot,Jo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,xt,bt,yt,mt,Re,Xt,nt,so,Ye,Fe,wt,Wt,Gt=`Whisper Encoder Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`,Uo,Ve,st,qo,$t,It='The <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperForAudioClassification">WhisperForAudioClassification</a> forward method, overrides the <code>__call__</code> special method.',kt,ht,ut,Le,Rt;return e=new Me({props:{title:"WhisperModel",local:"transformers.WhisperModel",headingTag:"h2"}}),i=new j({props:{name:"class transformers.WhisperModel",anchor:"transformers.WhisperModel",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1488"}}),D=new j({props:{name:"forward",anchor:"transformers.WhisperModel.forward",parameters:[{name:"input_features",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing <em>SpecAugment</em> data augmentation on padding token indices. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.WhisperModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1563",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
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


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),N=new Mt({props:{$$slots:{default:[ha]},$$scope:{ctx:W}}}),V=new rt({props:{anchor:"transformers.WhisperModel.forward.example",$$slots:{default:[ua]},$$scope:{ctx:W}}}),te=new j({props:{name:"_mask_input_features",anchor:"transformers.WhisperModel._mask_input_features",parameters:[{name:"input_features",val:": FloatTensor"},{name:"attention_mask",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1520"}}),me=new Me({props:{title:"WhisperForConditionalGeneration",local:"transformers.WhisperForConditionalGeneration",headingTag:"h2"}}),he=new j({props:{name:"class transformers.WhisperForConditionalGeneration",anchor:"transformers.WhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1658"}}),de=new j({props:{name:"forward",anchor:"transformers.WhisperForConditionalGeneration.forward",parameters:[{name:"input_features",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing <em>SpecAugment</em> data augmentation on padding token indices. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WhisperForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1696",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
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


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),G=new Mt({props:{$$slots:{default:[fa]},$$scope:{ctx:W}}}),E=new rt({props:{anchor:"transformers.WhisperForConditionalGeneration.forward.example",$$slots:{default:[ga]},$$scope:{ctx:W}}}),oe=new j({props:{name:"generate",anchor:"transformers.WhisperForConditionalGeneration.generate",parameters:[{name:"input_features",val:": Optional = None"},{name:"generation_config",val:": Optional = None"},{name:"logits_processor",val:": Optional = None"},{name:"stopping_criteria",val:": Optional = None"},{name:"prefix_allowed_tokens_fn",val:": Optional = None"},{name:"synced_gpus",val:": bool = False"},{name:"return_timestamps",val:": Optional = None"},{name:"task",val:": Optional = None"},{name:"language",val:": Optional = None"},{name:"is_multilingual",val:": Optional = None"},{name:"prompt_ids",val:": Optional = None"},{name:"prompt_condition_type",val:": Optional = None"},{name:"condition_on_prev_tokens",val:": Optional = None"},{name:"temperature",val:": Union = None"},{name:"compression_ratio_threshold",val:": Optional = None"},{name:"logprob_threshold",val:": Optional = None"},{name:"no_speech_threshold",val:": Optional = None"},{name:"num_segment_frames",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"time_precision",val:": float = 0.02"},{name:"return_token_timestamps",val:": Optional = None"},{name:"return_segments",val:": bool = False"},{name:"return_dict_in_generate",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.generate.input_features",description:`<strong>input_features</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Float values of log-mel features extracted from the raw speech waveform. The raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a> for details.`,name:"input_features"},{anchor:"transformers.WhisperForConditionalGeneration.generate.generation_config",description:`<strong>generation_config</strong> (<code>~generation.GenerationConfig</code>, <em>optional</em>) &#x2014;
The generation configuration to be used as base parametrization for the generation call. <code>**kwargs</code>
passed to generate matching the attributes of <code>generation_config</code> will override them. If
<code>generation_config</code> is not provided, the default will be used, which had the following loading
priority: 1) from the <code>generation_config.json</code> model file, if it exists; 2) from the model
configuration. Please note that unspecified parameters will inherit <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a>&#x2019;s
default values, whose documentation should be checked to parameterize generation.`,name:"generation_config"},{anchor:"transformers.WhisperForConditionalGeneration.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and
generation config. If a logit processor is passed that is already created with the arguments or a
generation config an error is thrown. This feature is intended for advanced users.`,name:"logits_processor"},{anchor:"transformers.WhisperForConditionalGeneration.generate.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
Custom stopping criteria that complement the default stopping criteria built from arguments and a
generation config. If a stopping criteria is passed that is already created with the arguments or a
generation config an error is thrown. This feature is intended for advanced users.`,name:"stopping_criteria"},{anchor:"transformers.WhisperForConditionalGeneration.generate.prefix_allowed_tokens_fn",description:`<strong>prefix_allowed_tokens_fn</strong> (<code>Callable[[int, torch.Tensor], List[int]]</code>, <em>optional</em>) &#x2014;
If provided, this function constraints the beam search to allowed tokens only at each step. If not
provided no constraint is applied. This function takes 2 arguments: the batch ID <code>batch_id</code> and
<code>input_ids</code>. It has to return a list with the allowed tokens for the next generation step conditioned
on the batch ID <code>batch_id</code> and the previously generated tokens <code>inputs_ids</code>. This argument is useful
for constrained generation conditioned on the prefix, as described in <a href="https://arxiv.org/abs/2010.00904" rel="nofollow">Autoregressive Entity
Retrieval</a>.`,name:"prefix_allowed_tokens_fn"},{anchor:"transformers.WhisperForConditionalGeneration.generate.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)`,name:"synced_gpus"},{anchor:"transformers.WhisperForConditionalGeneration.generate.return_timestamps",description:`<strong>return_timestamps</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the timestamps with the text. This enables the <code>WhisperTimestampsLogitsProcessor</code>.`,name:"return_timestamps"},{anchor:"transformers.WhisperForConditionalGeneration.generate.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Task to use for generation, either &#x201C;translate&#x201D; or &#x201C;transcribe&#x201D;. The <code>model.config.forced_decoder_ids</code>
will be updated accordingly.`,name:"task"},{anchor:"transformers.WhisperForConditionalGeneration.generate.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Language token to use for generation, can be either in the form of <code>&lt;|en|&gt;</code>, <code>en</code> or <code>english</code>. You can
find all the possible language tokens in the <code>model.generation_config.lang_to_id</code> dictionary.`,name:"language"},{anchor:"transformers.WhisperForConditionalGeneration.generate.is_multilingual",description:`<strong>is_multilingual</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the model is multilingual.`,name:"is_multilingual"},{anchor:"transformers.WhisperForConditionalGeneration.generate.prompt_ids",description:`<strong>prompt_ids</strong> (<code>torch.Tensor</code>, <em>optional</em>) &#x2014;
Rank-1 tensor of token IDs created by passing text to <code>get_prompt_ids()</code> that is
provided as a prompt to each chunk. This can be used to provide or &#x201C;prompt-engineer&#x201D; a context for
transcription, e.g. custom vocabularies or proper nouns to make it more likely to predict those words
correctly. It cannot be used in conjunction with <code>decoder_start_token_id</code> as it overwrites this value.`,name:"prompt_ids"},{anchor:"transformers.WhisperForConditionalGeneration.generate.prompt_condition_type",description:`<strong>prompt_condition_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Only relevant for long-form transcription. Condition type of <code>prompt_ids</code>. &#x2018;first-segment&#x2019; means only the first segment is conditioned on <code>prompt_ids</code>. &#x2018;all-segments&#x2019; means each segment is conditioned on <code>prompt_ids</code>. Make sure to enable <code>condition_on_prev_tokens</code> for &#x2018;all-segments&#x2019;.
Defaults to &#x2018;first-segment&#x2019;. For short-term transcription only &#x2018;first-segment&#x2019; is possible.`,name:"prompt_condition_type"},{anchor:"transformers.WhisperForConditionalGeneration.generate.condition_on_prev_tokens",description:`<strong>condition_on_prev_tokens</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant for long-form transcription. Whether to condition each segment on the previous segment.
As shown in the <a href="https://cdn.openai.com/papers/whisper.pdf" rel="nofollow">the Whisper paper</a>, this can help to improve
performance.`,name:"condition_on_prev_tokens"},{anchor:"transformers.WhisperForConditionalGeneration.generate.temperature",description:`<strong>temperature</strong> (<code>float</code> or list of <code>float</code>, <em>optional</em>) &#x2014;
The temperature to be used for generation. Passing a single <code>float</code> value and <code>do_sample=True</code> activates
generation using sampling. For long-form transcription, temperature fallback can be activated by passing
a list of float values such as (0.0, 0.2, 0.4, 0.6, 0.8, 1.0). As shown in the <a href="https://cdn.openai.com/papers/whisper.pdf" rel="nofollow">the Whisper paper</a>, this can help to improve
performance.`,name:"temperature"},{anchor:"transformers.WhisperForConditionalGeneration.generate.compression_ratio_threshold",description:`<strong>compression_ratio_threshold</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Only relevant for long-form transcription. If defined, the zlib compression rate of each segment will be computed. If the compression rate of
a segment is higher than <code>compression_ratio_threshold</code>, temperature fallback is activated: the generated segment is discarded and the generation is
repeated using a higher temperature. The intuition behind this feature is that segments with very high compression rates
suffer from a lot of repetition. The unwanted repetition can be reduced by injecting more randomness by increasing the temperature. If <code>compression_ratio_threshold</code> is defined
make sure that <code>temperature</code> is a list of values. A common value for <code>compression_ratio_threshold</code> is 1.35.
As shown in the <a href="https://cdn.openai.com/papers/whisper.pdf" rel="nofollow">the Whisper paper</a>, this can help to improve
performance.`,name:"compression_ratio_threshold"},{anchor:"transformers.WhisperForConditionalGeneration.generate.logprob_threshold",description:`<strong>logprob_threshold</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Only relevant for long-form transcription. If defined, the average log-probability of each segment will be computed. If the log-probability of
a given segment is lower than <code>logprob_threshold</code>, temperature fallback is activated: the generated segment is discarded and the generation is
repeated using a higher temperature. The intuition behind this feature is that segments of low log-probability
can be improved by injecting more randomness by increasing the temperature. If <code>logprob_threshold</code> is defined
make sure that <code>temperature</code> is a list of values. A common value for <code>logprob_threshold</code> is -1.0.
As shown in the <a href="https://cdn.openai.com/papers/whisper.pdf" rel="nofollow">the Whisper paper</a>, this can help to improve
performance.`,name:"logprob_threshold"},{anchor:"transformers.WhisperForConditionalGeneration.generate.no_speech_threshold",description:`<strong>no_speech_threshold</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Only relevant for long-form transcription. If defined, the &#x201C;no-speech&#x201D; token combined with the <code>logprob_threshold</code>
is used to determine whether a segment contains only silence. In this case, the transcription for this segment
is skipped.
As shown in the <a href="https://cdn.openai.com/papers/whisper.pdf" rel="nofollow">the Whisper paper</a>, this can help to improve
performance.`,name:"no_speech_threshold"},{anchor:"transformers.WhisperForConditionalGeneration.generate.num_segment_frames",description:`<strong>num_segment_frames</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of frames a single segment is made of. If not defined, <code>num_segment_frames</code> defaults to the model&#x2019;s stride
times the maximum input length.`,name:"num_segment_frames"},{anchor:"transformers.WhisperForConditionalGeneration.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code>, <em>optional</em>) &#x2014;
<code>attention_mask</code> needs to be passed when doing long-form transcription using a batch size &gt; 1.`,name:"attention_mask"},{anchor:"transformers.WhisperForConditionalGeneration.generate.time_precision",description:`<strong>time_precision</strong> (<code>int</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The duration of output token in seconds. <em>E.g.</em> 0.02 means that a generated token on average accounts
for 20 ms.`,name:"time_precision"},{anchor:"transformers.WhisperForConditionalGeneration.generate.return_token_timestamps",description:`<strong>return_token_timestamps</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token-level timestamps with the text. This can be used with or without the
<code>return_timestamps</code> option. To get word-level timestamps, use the tokenizer to group the tokens into
words.`,name:"return_token_timestamps"},{anchor:"transformers.WhisperForConditionalGeneration.generate.return_segments",description:`<strong>return_segments</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally return a list of all segments. Note that this option can only be enabled
when doing long-form transcription.`,name:"return_segments"},{anchor:"transformers.WhisperForConditionalGeneration.generate.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of just returning the generated tokens.
Note that when doing long-form transcription, <code>return_dict_in_generate</code> can only be enabled when
<code>return_segments</code> is set True. In this case the generation outputs of each segment is added to each
segment.`,name:"return_dict_in_generate"},{anchor:"transformers.WhisperForConditionalGeneration.generate.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Ad hoc parametrization of <code>generate_config</code> and/or additional model-specific kwargs that will be
forwarded to the <code>forward</code> function of the model. If the model is an encoder-decoder model, encoder
specific kwargs should not be prefixed and decoder specific kwargs should be prefixed with <em>decoder_</em>.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/generation_whisper.py#L254",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if <code>return_dict_in_generate=True</code>
or when <code>config.return_dict_in_generate=True</code>) or a <code>torch.FloatTensor</code> or a dict of segments when <code>return_segments=True</code>.</p>
<p>If the passed input is > 30 seconds / > 3000 mel input features and <code>return_segments=True</code> then a dictionary of generated sequence ids, called <code>sequences</code> and a list of each generated segment is returned.</p>
<p>else if the passed input is <= 30 seconds / >= 3000 mel input features, the possible <a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateEncoderDecoderOutput"
>GenerateEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamEncoderDecoderOutput"
>GenerateBeamEncoderDecoderOutput</a></li>
</ul>
<p>else only the generated output sequence ids are returned.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>torch.LongTensor</code> or <code>Dict[str, Any]</code></p>
`}}),we=new Mt({props:{warning:!0,$$slots:{default:[_a]},$$scope:{ctx:W}}}),U=new rt({props:{anchor:"transformers.WhisperForConditionalGeneration.generate.example",$$slots:{default:[ba]},$$scope:{ctx:W}}}),ae=new rt({props:{anchor:"transformers.WhisperForConditionalGeneration.generate.example-2",$$slots:{default:[ya]},$$scope:{ctx:W}}}),ce=new Me({props:{title:"WhisperForCausalLM",local:"transformers.WhisperForCausalLM",headingTag:"h2"}}),Pe=new j({props:{name:"class transformers.WhisperForCausalLM",anchor:"transformers.WhisperForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WhisperForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1865"}}),yt=new j({props:{name:"forward",anchor:"transformers.WhisperForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.WhisperForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.WhisperForCausalLM.forward.encoder_outputs",description:`<strong>encoder_outputs</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_outputs"},{anchor:"transformers.WhisperForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.WhisperForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.WhisperForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model. Contains
pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding. If
<code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.WhisperForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.WhisperForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.WhisperForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.WhisperForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WhisperForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.WhisperForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1903",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new rt({props:{anchor:"transformers.WhisperForCausalLM.forward.example",$$slots:{default:[wa]},$$scope:{ctx:W}}}),nt=new Me({props:{title:"WhisperForAudioClassification",local:"transformers.WhisperForAudioClassification",headingTag:"h2"}}),Fe=new j({props:{name:"class transformers.WhisperForAudioClassification",anchor:"transformers.WhisperForAudioClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WhisperForAudioClassification.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperForAudioClassification.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L2085"}}),st=new j({props:{name:"forward",anchor:"transformers.WhisperForAudioClassification.forward",parameters:[{name:"input_features",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperForAudioClassification.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperForAudioClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WhisperForAudioClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L2119",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
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


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new Mt({props:{$$slots:{default:[ka]},$$scope:{ctx:W}}}),Le=new rt({props:{anchor:"transformers.WhisperForAudioClassification.forward.example",$$slots:{default:[Ta]},$$scope:{ctx:W}}}),{c(){p(e.$$.fragment),_=a(),n=l("div"),p(i.$$.fragment),k=a(),s=l("p"),s.innerHTML=M,Je=a(),S=l("p"),S.innerHTML=ft,Ue=a(),C=l("div"),p(D.$$.fragment),qe=a(),P=l("p"),P.innerHTML=gt,Ge=a(),p(N.$$.fragment),Ke=a(),p(V.$$.fragment),pe=a(),B=l("div"),p(te.$$.fragment),X=a(),A=l("p"),A.innerHTML=xe,ie=a(),p(me.$$.fragment),Se=a(),R=l("div"),p(he.$$.fragment),Ie=a(),q=l("p"),q.innerHTML=ue,Ze=a(),Q=l("p"),Q.innerHTML=it,Te=a(),Z=l("div"),p(de.$$.fragment),se=a(),fe=l("p"),fe.innerHTML=x,I=a(),p(G.$$.fragment),L=a(),p(E.$$.fragment),ge=a(),Y=l("div"),p(oe.$$.fragment),We=a(),dt=l("p"),dt.textContent=lt,ve=a(),p(we.$$.fragment),et=a(),Ne=l("p"),Ne.textContent=qt,Xe=a(),ke=l("ul"),ke.innerHTML=tt,je=a(),p(U.$$.fragment),T=a(),J=l("ul"),J.innerHTML=_e,$e=a(),p(ae.$$.fragment),le=a(),p(ce.$$.fragment),_t=a(),K=l("div"),p(Pe.$$.fragment),oo=a(),ct=l("p"),ct.textContent=fn,no=a(),Qe=l("p"),Qe.innerHTML=Co,pt=a(),ot=l("p"),ot.innerHTML=Jo,xt=a(),bt=l("div"),p(yt.$$.fragment),mt=a(),p(Re.$$.fragment),Xt=a(),p(nt.$$.fragment),so=a(),Ye=l("div"),p(Fe.$$.fragment),wt=a(),Wt=l("p"),Wt.textContent=Gt,Uo=a(),Ve=l("div"),p(st.$$.fragment),qo=a(),$t=l("p"),$t.innerHTML=It,kt=a(),p(ht.$$.fragment),ut=a(),p(Le.$$.fragment),this.h()},l(y){m(e.$$.fragment,y),_=r(y),n=c(y,"DIV",{class:!0});var z=$(n);m(i.$$.fragment,z),k=r(z),s=c(z,"P",{"data-svelte-h":!0}),w(s)!=="svelte-my4h8e"&&(s.innerHTML=M),Je=r(z),S=c(z,"P",{"data-svelte-h":!0}),w(S)!=="svelte-hswkmf"&&(S.innerHTML=ft),Ue=r(z),C=c(z,"DIV",{class:!0});var Ae=$(C);m(D.$$.fragment,Ae),qe=r(Ae),P=c(Ae,"P",{"data-svelte-h":!0}),w(P)!=="svelte-1161vpz"&&(P.innerHTML=gt),Ge=r(Ae),m(N.$$.fragment,Ae),Ke=r(Ae),m(V.$$.fragment,Ae),Ae.forEach(d),pe=r(z),B=c(z,"DIV",{class:!0});var ze=$(B);m(te.$$.fragment,ze),X=r(ze),A=c(ze,"P",{"data-svelte-h":!0}),w(A)!=="svelte-1iyovru"&&(A.innerHTML=xe),ze.forEach(d),z.forEach(d),ie=r(y),m(me.$$.fragment,y),Se=r(y),R=c(y,"DIV",{class:!0});var be=$(R);m(he.$$.fragment,be),Ie=r(be),q=c(be,"P",{"data-svelte-h":!0}),w(q)!=="svelte-ja5no7"&&(q.innerHTML=ue),Ze=r(be),Q=c(be,"P",{"data-svelte-h":!0}),w(Q)!=="svelte-hswkmf"&&(Q.innerHTML=it),Te=r(be),Z=c(be,"DIV",{class:!0});var Oe=$(Z);m(de.$$.fragment,Oe),se=r(Oe),fe=c(Oe,"P",{"data-svelte-h":!0}),w(fe)!=="svelte-dmogbh"&&(fe.innerHTML=x),I=r(Oe),m(G.$$.fragment,Oe),L=r(Oe),m(E.$$.fragment,Oe),Oe.forEach(d),ge=r(be),Y=c(be,"DIV",{class:!0});var ee=$(Y);m(oe.$$.fragment,ee),We=r(ee),dt=c(ee,"P",{"data-svelte-h":!0}),w(dt)!=="svelte-13b69x8"&&(dt.textContent=lt),ve=r(ee),m(we.$$.fragment,ee),et=r(ee),Ne=c(ee,"P",{"data-svelte-h":!0}),w(Ne)!=="svelte-11lpom8"&&(Ne.textContent=qt),Xe=r(ee),ke=c(ee,"UL",{"data-svelte-h":!0}),w(ke)!=="svelte-12stiia"&&(ke.innerHTML=tt),je=r(ee),m(U.$$.fragment,ee),T=r(ee),J=c(ee,"UL",{"data-svelte-h":!0}),w(J)!=="svelte-1ga9v0b"&&(J.innerHTML=_e),$e=r(ee),m(ae.$$.fragment,ee),ee.forEach(d),be.forEach(d),le=r(y),m(ce.$$.fragment,y),_t=r(y),K=c(y,"DIV",{class:!0});var Be=$(K);m(Pe.$$.fragment,Be),oo=r(Be),ct=c(Be,"P",{"data-svelte-h":!0}),w(ct)!=="svelte-7bp842"&&(ct.textContent=fn),no=r(Be),Qe=c(Be,"P",{"data-svelte-h":!0}),w(Qe)!=="svelte-6pahdo"&&(Qe.innerHTML=Co),pt=r(Be),ot=c(Be,"P",{"data-svelte-h":!0}),w(ot)!=="svelte-hswkmf"&&(ot.innerHTML=Jo),xt=r(Be),bt=c(Be,"DIV",{class:!0});var Tt=$(bt);m(yt.$$.fragment,Tt),mt=r(Tt),m(Re.$$.fragment,Tt),Tt.forEach(d),Be.forEach(d),Xt=r(y),m(nt.$$.fragment,y),so=r(y),Ye=c(y,"DIV",{class:!0});var Ee=$(Ye);m(Fe.$$.fragment,Ee),wt=r(Ee),Wt=c(Ee,"P",{"data-svelte-h":!0}),w(Wt)!=="svelte-1y2nev0"&&(Wt.textContent=Gt),Uo=r(Ee),Ve=c(Ee,"DIV",{class:!0});var at=$(Ve);m(st.$$.fragment,at),qo=r(at),$t=c(at,"P",{"data-svelte-h":!0}),w($t)!=="svelte-1wp9jq1"&&($t.innerHTML=It),kt=r(at),m(ht.$$.fragment,at),ut=r(at),m(Le.$$.fragment,at),at.forEach(d),Ee.forEach(d),this.h()},h(){F(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(y,z){h(e,y,z),b(y,_,z),b(y,n,z),h(i,n,null),o(n,k),o(n,s),o(n,Je),o(n,S),o(n,Ue),o(n,C),h(D,C,null),o(C,qe),o(C,P),o(C,Ge),h(N,C,null),o(C,Ke),h(V,C,null),o(n,pe),o(n,B),h(te,B,null),o(B,X),o(B,A),b(y,ie,z),h(me,y,z),b(y,Se,z),b(y,R,z),h(he,R,null),o(R,Ie),o(R,q),o(R,Ze),o(R,Q),o(R,Te),o(R,Z),h(de,Z,null),o(Z,se),o(Z,fe),o(Z,I),h(G,Z,null),o(Z,L),h(E,Z,null),o(R,ge),o(R,Y),h(oe,Y,null),o(Y,We),o(Y,dt),o(Y,ve),h(we,Y,null),o(Y,et),o(Y,Ne),o(Y,Xe),o(Y,ke),o(Y,je),h(U,Y,null),o(Y,T),o(Y,J),o(Y,$e),h(ae,Y,null),b(y,le,z),h(ce,y,z),b(y,_t,z),b(y,K,z),h(Pe,K,null),o(K,oo),o(K,ct),o(K,no),o(K,Qe),o(K,pt),o(K,ot),o(K,xt),o(K,bt),h(yt,bt,null),o(bt,mt),h(Re,bt,null),b(y,Xt,z),h(nt,y,z),b(y,so,z),b(y,Ye,z),h(Fe,Ye,null),o(Ye,wt),o(Ye,Wt),o(Ye,Uo),o(Ye,Ve),h(st,Ve,null),o(Ve,qo),o(Ve,$t),o(Ve,kt),h(ht,Ve,null),o(Ve,ut),h(Le,Ve,null),Rt=!0},p(y,z){const Ae={};z&2&&(Ae.$$scope={dirty:z,ctx:y}),N.$set(Ae);const ze={};z&2&&(ze.$$scope={dirty:z,ctx:y}),V.$set(ze);const be={};z&2&&(be.$$scope={dirty:z,ctx:y}),G.$set(be);const Oe={};z&2&&(Oe.$$scope={dirty:z,ctx:y}),E.$set(Oe);const ee={};z&2&&(ee.$$scope={dirty:z,ctx:y}),we.$set(ee);const Be={};z&2&&(Be.$$scope={dirty:z,ctx:y}),U.$set(Be);const Tt={};z&2&&(Tt.$$scope={dirty:z,ctx:y}),ae.$set(Tt);const Ee={};z&2&&(Ee.$$scope={dirty:z,ctx:y}),Re.$set(Ee);const at={};z&2&&(at.$$scope={dirty:z,ctx:y}),ht.$set(at);const Go={};z&2&&(Go.$$scope={dirty:z,ctx:y}),Le.$set(Go)},i(y){Rt||(u(e.$$.fragment,y),u(i.$$.fragment,y),u(D.$$.fragment,y),u(N.$$.fragment,y),u(V.$$.fragment,y),u(te.$$.fragment,y),u(me.$$.fragment,y),u(he.$$.fragment,y),u(de.$$.fragment,y),u(G.$$.fragment,y),u(E.$$.fragment,y),u(oe.$$.fragment,y),u(we.$$.fragment,y),u(U.$$.fragment,y),u(ae.$$.fragment,y),u(ce.$$.fragment,y),u(Pe.$$.fragment,y),u(yt.$$.fragment,y),u(Re.$$.fragment,y),u(nt.$$.fragment,y),u(Fe.$$.fragment,y),u(st.$$.fragment,y),u(ht.$$.fragment,y),u(Le.$$.fragment,y),Rt=!0)},o(y){f(e.$$.fragment,y),f(i.$$.fragment,y),f(D.$$.fragment,y),f(N.$$.fragment,y),f(V.$$.fragment,y),f(te.$$.fragment,y),f(me.$$.fragment,y),f(he.$$.fragment,y),f(de.$$.fragment,y),f(G.$$.fragment,y),f(E.$$.fragment,y),f(oe.$$.fragment,y),f(we.$$.fragment,y),f(U.$$.fragment,y),f(ae.$$.fragment,y),f(ce.$$.fragment,y),f(Pe.$$.fragment,y),f(yt.$$.fragment,y),f(Re.$$.fragment,y),f(nt.$$.fragment,y),f(Fe.$$.fragment,y),f(st.$$.fragment,y),f(ht.$$.fragment,y),f(Le.$$.fragment,y),Rt=!1},d(y){y&&(d(_),d(n),d(ie),d(Se),d(R),d(le),d(_t),d(K),d(Xt),d(so),d(Ye)),g(e,y),g(i),g(D),g(N),g(V),g(te),g(me,y),g(he),g(de),g(G),g(E),g(oe),g(we),g(U),g(ae),g(ce,y),g(Pe),g(yt),g(Re),g(nt,y),g(Fe),g(st),g(ht),g(Le)}}}function Ma(W){let e,_;return e=new Fs({props:{$$slots:{default:[va]},$$scope:{ctx:W}}}),{c(){p(e.$$.fragment)},l(n){m(e.$$.fragment,n)},m(n,i){h(e,n,i),_=!0},p(n,i){const k={};i&2&&(k.$$scope={dirty:i,ctx:n}),e.$set(k)},i(n){_||(u(e.$$.fragment,n),_=!0)},o(n){f(e.$$.fragment,n),_=!1},d(n){g(e,n)}}}function xa(W){let e,_=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=_},l(n){e=c(n,"P",{"data-svelte-h":!0}),w(e)!=="svelte-fincs2"&&(e.innerHTML=_)},m(n,i){b(n,e,i)},p:ne,d(n){n&&d(e)}}}function Wa(W){let e,_="Example:",n,i,k;return i=new Ce({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwVEZXaGlzcGVyTW9kZWwlMkMlMjBBdXRvRmVhdHVyZUV4dHJhY3RvciUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQW1vZGVsJTIwJTNEJTIwVEZXaGlzcGVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItYmFzZSUyMiklMEFmZWF0dXJlX2V4dHJhY3RvciUyMCUzRCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLWJhc2UlMjIpJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kdW1teSUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQWlucHV0cyUyMCUzRCUyMGZlYXR1cmVfZXh0cmFjdG9yKGRzJTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQWlucHV0X2ZlYXR1cmVzJTIwJTNEJTIwaW5wdXRzLmlucHV0X2ZlYXR1cmVzJTBBZGVjb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjB0Zi5jb252ZXJ0X3RvX3RlbnNvciglNUIlNUIxJTJDJTIwMSU1RCU1RCklMjAqJTIwbW9kZWwuY29uZmlnLmRlY29kZXJfc3RhcnRfdG9rZW5faWQlMEFsYXN0X2hpZGRlbl9zdGF0ZSUyMCUzRCUyMG1vZGVsKGlucHV0X2ZlYXR1cmVzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RkZWNvZGVyX2lucHV0X2lkcykubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlLnNoYXBlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-11lpom8"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function $a(W){let e,_=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=_},l(n){e=c(n,"P",{"data-svelte-h":!0}),w(e)!=="svelte-fincs2"&&(e.innerHTML=_)},m(n,i){b(n,e,i)},p:ne,d(n){n&&d(e)}}}function Fa(W){let e,_="Example:",n,i,k;return i=new Ce({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Byb2Nlc3NvciUyQyUyMFRGV2hpc3BlckZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItdGlueS5lbiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGV2hpc3BlckZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpJTJGd2hpc3Blci10aW55LmVuJTIyKSUwQSUwQWRzJTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZHVtbXklMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjBwcm9jZXNzb3IoZHMlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBaW5wdXRfZmVhdHVyZXMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfZmVhdHVyZXMlMEElMEFnZW5lcmF0ZWRfaWRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRfZmVhdHVyZXMlM0RpbnB1dF9mZWF0dXJlcyklMEElMEF0cmFuc2NyaXB0aW9uJTIwJTNEJTIwcHJvY2Vzc29yLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfaWRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTVCMCU1RCUwQXRyYW5zY3JpcHRpb24=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-11lpom8"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function za(W){let e,_,n,i,k,s,M=`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Je,S,ft=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Ue,C,D,qe,P,gt='The <a href="/docs/transformers/main/en/model_doc/whisper#transformers.TFWhisperModel">TFWhisperModel</a> forward method, overrides the <code>__call__</code> special method.',Ge,N,Ke,V,pe,B,te,X,A,xe,ie,me=`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Se,R,he=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Ie,q,ue,Ze,Q,it='The <a href="/docs/transformers/main/en/model_doc/whisper#transformers.TFWhisperForConditionalGeneration">TFWhisperForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',Te,Z,de,se,fe;return e=new Me({props:{title:"TFWhisperModel",local:"transformers.TFWhisperModel",headingTag:"h2"}}),i=new j({props:{name:"class transformers.TFWhisperModel",anchor:"transformers.TFWhisperModel",parameters:[{name:"config",val:": WhisperConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1231"}}),D=new j({props:{name:"call",anchor:"transformers.TFWhisperModel.call",parameters:[{name:"input_features",val:": TFModelInputType | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"decoder_inputs_embeds",val:": Optional[Tuple[Union[np.ndarray, tf.Tensor]]] = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFWhisperModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1259",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
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


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),N=new Mt({props:{$$slots:{default:[xa]},$$scope:{ctx:W}}}),V=new rt({props:{anchor:"transformers.TFWhisperModel.call.example",$$slots:{default:[Wa]},$$scope:{ctx:W}}}),B=new Me({props:{title:"TFWhisperForConditionalGeneration",local:"transformers.TFWhisperForConditionalGeneration",headingTag:"h2"}}),A=new j({props:{name:"class transformers.TFWhisperForConditionalGeneration",anchor:"transformers.TFWhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1347"}}),ue=new j({props:{name:"call",anchor:"transformers.TFWhisperForConditionalGeneration.call",parameters:[{name:"input_features",val:": TFModelInputType | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"decoder_inputs_embeds",val:": Optional[Tuple[Union[np.ndarray, tf.Tensor]]] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1382",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
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


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Z=new Mt({props:{$$slots:{default:[$a]},$$scope:{ctx:W}}}),se=new rt({props:{anchor:"transformers.TFWhisperForConditionalGeneration.call.example",$$slots:{default:[Fa]},$$scope:{ctx:W}}}),{c(){p(e.$$.fragment),_=a(),n=l("div"),p(i.$$.fragment),k=a(),s=l("p"),s.innerHTML=M,Je=a(),S=l("p"),S.innerHTML=ft,Ue=a(),C=l("div"),p(D.$$.fragment),qe=a(),P=l("p"),P.innerHTML=gt,Ge=a(),p(N.$$.fragment),Ke=a(),p(V.$$.fragment),pe=a(),p(B.$$.fragment),te=a(),X=l("div"),p(A.$$.fragment),xe=a(),ie=l("p"),ie.innerHTML=me,Se=a(),R=l("p"),R.innerHTML=he,Ie=a(),q=l("div"),p(ue.$$.fragment),Ze=a(),Q=l("p"),Q.innerHTML=it,Te=a(),p(Z.$$.fragment),de=a(),p(se.$$.fragment),this.h()},l(x){m(e.$$.fragment,x),_=r(x),n=c(x,"DIV",{class:!0});var I=$(n);m(i.$$.fragment,I),k=r(I),s=c(I,"P",{"data-svelte-h":!0}),w(s)!=="svelte-1ylrwta"&&(s.innerHTML=M),Je=r(I),S=c(I,"P",{"data-svelte-h":!0}),w(S)!=="svelte-1be7e3c"&&(S.innerHTML=ft),Ue=r(I),C=c(I,"DIV",{class:!0});var G=$(C);m(D.$$.fragment,G),qe=r(G),P=c(G,"P",{"data-svelte-h":!0}),w(P)!=="svelte-17gnraj"&&(P.innerHTML=gt),Ge=r(G),m(N.$$.fragment,G),Ke=r(G),m(V.$$.fragment,G),G.forEach(d),I.forEach(d),pe=r(x),m(B.$$.fragment,x),te=r(x),X=c(x,"DIV",{class:!0});var L=$(X);m(A.$$.fragment,L),xe=r(L),ie=c(L,"P",{"data-svelte-h":!0}),w(ie)!=="svelte-6vn6yf"&&(ie.innerHTML=me),Se=r(L),R=c(L,"P",{"data-svelte-h":!0}),w(R)!=="svelte-1be7e3c"&&(R.innerHTML=he),Ie=r(L),q=c(L,"DIV",{class:!0});var E=$(q);m(ue.$$.fragment,E),Ze=r(E),Q=c(E,"P",{"data-svelte-h":!0}),w(Q)!=="svelte-bj24bx"&&(Q.innerHTML=it),Te=r(E),m(Z.$$.fragment,E),de=r(E),m(se.$$.fragment,E),E.forEach(d),L.forEach(d),this.h()},h(){F(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(x,I){h(e,x,I),b(x,_,I),b(x,n,I),h(i,n,null),o(n,k),o(n,s),o(n,Je),o(n,S),o(n,Ue),o(n,C),h(D,C,null),o(C,qe),o(C,P),o(C,Ge),h(N,C,null),o(C,Ke),h(V,C,null),b(x,pe,I),h(B,x,I),b(x,te,I),b(x,X,I),h(A,X,null),o(X,xe),o(X,ie),o(X,Se),o(X,R),o(X,Ie),o(X,q),h(ue,q,null),o(q,Ze),o(q,Q),o(q,Te),h(Z,q,null),o(q,de),h(se,q,null),fe=!0},p(x,I){const G={};I&2&&(G.$$scope={dirty:I,ctx:x}),N.$set(G);const L={};I&2&&(L.$$scope={dirty:I,ctx:x}),V.$set(L);const E={};I&2&&(E.$$scope={dirty:I,ctx:x}),Z.$set(E);const ge={};I&2&&(ge.$$scope={dirty:I,ctx:x}),se.$set(ge)},i(x){fe||(u(e.$$.fragment,x),u(i.$$.fragment,x),u(D.$$.fragment,x),u(N.$$.fragment,x),u(V.$$.fragment,x),u(B.$$.fragment,x),u(A.$$.fragment,x),u(ue.$$.fragment,x),u(Z.$$.fragment,x),u(se.$$.fragment,x),fe=!0)},o(x){f(e.$$.fragment,x),f(i.$$.fragment,x),f(D.$$.fragment,x),f(N.$$.fragment,x),f(V.$$.fragment,x),f(B.$$.fragment,x),f(A.$$.fragment,x),f(ue.$$.fragment,x),f(Z.$$.fragment,x),f(se.$$.fragment,x),fe=!1},d(x){x&&(d(_),d(n),d(pe),d(te),d(X)),g(e,x),g(i),g(D),g(N),g(V),g(B,x),g(A),g(ue),g(Z),g(se)}}}function ja(W){let e,_;return e=new Fs({props:{$$slots:{default:[za]},$$scope:{ctx:W}}}),{c(){p(e.$$.fragment)},l(n){m(e.$$.fragment,n)},m(n,i){h(e,n,i),_=!0},p(n,i){const k={};i&2&&(k.$$scope={dirty:i,ctx:n}),e.$set(k)},i(n){_||(u(e.$$.fragment,n),_=!0)},o(n){f(e.$$.fragment,n),_=!1},d(n){g(e,n)}}}function Ca(W){let e,_=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=_},l(n){e=c(n,"P",{"data-svelte-h":!0}),w(e)!=="svelte-fincs2"&&(e.innerHTML=_)},m(n,i){b(n,e,i)},p:ne,d(n){n&&d(e)}}}function Ja(W){let e,_="Example:",n,i,k;return i=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4V2hpc3Blck1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpJTJGd2hpc3Blci10aW55JTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheFdoaXNwZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpJTJGd2hpc3Blci10aW55JTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxWhisperModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWhisperModel.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-11lpom8"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function Ua(W){let e,_=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=_},l(n){e=c(n,"P",{"data-svelte-h":!0}),w(e)!=="svelte-fincs2"&&(e.innerHTML=_)},m(n,i){b(n,e,i)},p:ne,d(n){n&&d(e)}}}function qa(W){let e,_="Transcription example:",n,i,k;return i=new Ce({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFdoaXNwZXJQcm9jZXNzb3IlMkMlMjBGbGF4V2hpc3BlckZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMFdoaXNwZXJQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItdGlueS5lbiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhXaGlzcGVyRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWklMkZ3aGlzcGVyLXRpbnkuZW4lMjIlMkMlMjBmcm9tX3B0JTNEVHJ1ZSklMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2R1bW15JTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBaW5wdXRzJTIwJTNEJTIwcHJvY2Vzc29yKGRzJTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQWlucHV0X2ZlYXR1cmVzJTIwJTNEJTIwaW5wdXRzLmlucHV0X2ZlYXR1cmVzJTBBZ2VuZXJhdGVkX2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKGlucHV0X2lkcyUzRGlucHV0X2ZlYXR1cmVzKSUwQXRyYW5zY3JpcHRpb24lMjAlM0QlMjBwcm9jZXNzb3IuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZF9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklNUIwJTVEJTBBdHJhbnNjcmlwdGlvbg==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperProcessor, FlaxWhisperForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = WhisperProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>, from_pt=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_ids=input_features)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-yrk4pw"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function Ga(W){let e,_=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=_},l(n){e=c(n,"P",{"data-svelte-h":!0}),w(e)!=="svelte-fincs2"&&(e.innerHTML=_)},m(n,i){b(n,e,i)},p:ne,d(n){n&&d(e)}}}function Ia(W){let e,_="Transcription example:",n,i,k;return i=new Ce({props:{code:"aW1wb3J0JTIwamF4Lm51bXB5JTIwYXMlMjBqbnAlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IlMkMlMjBGbGF4V2hpc3BlckZvckF1ZGlvQ2xhc3NpZmljYXRpb24lMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFmZWF0dXJlX2V4dHJhY3RvciUyMCUzRCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yLmZyb21fcHJldHJhaW5lZCglMjJzYW5jaGl0LWdhbmRoaSUyRndoaXNwZXItbWVkaXVtLWZsZXVycy1sYW5nLWlkJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheFdoaXNwZXJGb3JBdWRpb0NsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJzYW5jaGl0LWdhbmRoaSUyRndoaXNwZXItbWVkaXVtLWZsZXVycy1sYW5nLWlkJTIyJTJDJTIwZnJvbV9wdCUzRFRydWUlMEEpJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyZ29vZ2xlJTJGZmxldXJzJTIyJTJDJTIwJTIyYWxsJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyJTJDJTIwc3RyZWFtaW5nJTNEVHJ1ZSklMEElMEFzYW1wbGUlMjAlM0QlMjBuZXh0KGl0ZXIoZHMpKSUwQSUwQWlucHV0cyUyMCUzRCUyMGZlYXR1cmVfZXh0cmFjdG9yKCUwQSUyMCUyMCUyMCUyMHNhbXBsZSU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjBzYW1wbGluZ19yYXRlJTNEc2FtcGxlJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJzYW1wbGluZ19yYXRlJTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMiUwQSklMEFpbnB1dF9mZWF0dXJlcyUyMCUzRCUyMGlucHV0cy5pbnB1dF9mZWF0dXJlcyUwQSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2ZlYXR1cmVzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwam5wLmFyZ21heChsb2dpdHMpLml0ZW0oKSUwQXByZWRpY3RlZF9sYWJlbCUyMCUzRCUyMG1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9jbGFzc19pZHMlNUQlMEFwcmVkaWN0ZWRfbGFiZWw=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
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
<span class="hljs-string">&#x27;af_za&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=_,n=a(),p(i.$$.fragment)},l(s){e=c(s,"P",{"data-svelte-h":!0}),w(e)!=="svelte-yrk4pw"&&(e.textContent=_),n=r(s),m(i.$$.fragment,s)},m(s,M){b(s,e,M),b(s,n,M),h(i,s,M),k=!0},p:ne,i(s){k||(u(i.$$.fragment,s),k=!0)},o(s){f(i.$$.fragment,s),k=!1},d(s){s&&(d(e),d(n)),g(i,s)}}}function Za(W){let e,_,n,i,k,s,M=`The bare Whisper Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.
Finally, this model supports inherent JAX features such as:`,Je,S,ft='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Ue,C,D,qe,P,gt="The <code>FlaxWhisperPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Ge,N,Ke,V,pe,B,te,X,A,xe,ie,me=`The Whisper Model with a language modeling head.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.
Finally, this model supports inherent JAX features such as:`,Se,R,he='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Ie,q,ue,Ze,Q,it="The <code>FlaxWhisperPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Te,Z,de,se,fe,x,I,G,L,E,ge,Y=`The Whisper Model with an audio classification head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.
Finally, this model supports inherent JAX features such as:`,oe,We,dt='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',lt,ve,we,et,Ne,qt='The <a href="/docs/transformers/main/en/model_doc/whisper#transformers.FlaxWhisperForAudioClassification">FlaxWhisperForAudioClassification</a> forward method, overrides the <code>__call__</code> special method.',Xe,ke,tt,je,U;return e=new Me({props:{title:"FlaxWhisperModel",local:"transformers.FlaxWhisperModel",headingTag:"h2"}}),i=new j({props:{name:"class transformers.FlaxWhisperModel",anchor:"transformers.FlaxWhisperModel",parameters:[{name:"config",val:": WhisperConfig"},{name:"input_shape",val:": Tuple = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWhisperModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs). This can be used to enable mixed-precision training or half-precision
inference on GPUs or TPUs. If specified all the computation will be performed with the given <code>dtype</code>.
<strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong> If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a>
and <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1185"}}),D=new j({props:{name:"__call__",anchor:"transformers.FlaxWhisperModel.__call__",parameters:[{name:"input_features",val:": Array"},{name:"decoder_input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxWhisperModel.__call__.input_features",description:`<strong>input_features</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the features, padding and conversion into a
tensor of type <code>numpy.ndarray</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.FlaxWhisperModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Whisper does not support masking of the <code>input_features</code>, this argument is preserved for compatibility, but
is not used. By default the silence in the input log mel spectrogram are ignored.`,name:"attention_mask"},{anchor:"transformers.FlaxWhisperModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1134",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
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


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),N=new Mt({props:{$$slots:{default:[Ca]},$$scope:{ctx:W}}}),V=new rt({props:{anchor:"transformers.FlaxWhisperModel.__call__.example",$$slots:{default:[Ja]},$$scope:{ctx:W}}}),B=new Me({props:{title:"FlaxWhisperForConditionalGeneration",local:"transformers.FlaxWhisperForConditionalGeneration",headingTag:"h2"}}),A=new j({props:{name:"class transformers.FlaxWhisperForConditionalGeneration",anchor:"transformers.FlaxWhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"},{name:"input_shape",val:": Tuple = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs). This can be used to enable mixed-precision training or half-precision
inference on GPUs or TPUs. If specified all the computation will be performed with the given <code>dtype</code>.
<strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong> If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a>
and <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1267"}}),ue=new j({props:{name:"__call__",anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__",parameters:[{name:"input_features",val:": Array"},{name:"decoder_input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.input_features",description:`<strong>input_features</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the features, padding and conversion into a
tensor of type <code>numpy.ndarray</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Whisper does not support masking of the <code>input_features</code>, this argument is preserved for compatibility, but
is not used. By default the silence in the input log mel spectrogram are ignored.`,name:"attention_mask"},{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1134",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
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


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Z=new Mt({props:{$$slots:{default:[Ua]},$$scope:{ctx:W}}}),se=new rt({props:{anchor:"transformers.FlaxWhisperForConditionalGeneration.__call__.example",$$slots:{default:[qa]},$$scope:{ctx:W}}}),x=new Me({props:{title:"FlaxWhisperForAudioClassification",local:"transformers.FlaxWhisperForAudioClassification",headingTag:"h2"}}),L=new j({props:{name:"class transformers.FlaxWhisperForAudioClassification",anchor:"transformers.FlaxWhisperForAudioClassification",parameters:[{name:"config",val:": WhisperConfig"},{name:"input_shape",val:": Tuple = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWhisperForAudioClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWhisperForAudioClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs). This can be used to enable mixed-precision training or half-precision
inference on GPUs or TPUs. If specified all the computation will be performed with the given <code>dtype</code>.
<strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong> If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a>
and <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1597"}}),we=new j({props:{name:"__call__",anchor:"transformers.FlaxWhisperForAudioClassification.__call__",parameters:[{name:"input_features",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.input_features",description:`<strong>input_features</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the features, padding and conversion into a
tensor of type <code>numpy.ndarray</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Whisper does not support masking of the <code>input_features</code>, this argument is preserved for compatibility, but
is not used. By default the silence in the input log mel spectrogram are ignored.`,name:"attention_mask"},{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/modeling_flax_whisper.py#L1625",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
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


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ke=new Mt({props:{$$slots:{default:[Ga]},$$scope:{ctx:W}}}),je=new rt({props:{anchor:"transformers.FlaxWhisperForAudioClassification.__call__.example",$$slots:{default:[Ia]},$$scope:{ctx:W}}}),{c(){p(e.$$.fragment),_=a(),n=l("div"),p(i.$$.fragment),k=a(),s=l("p"),s.innerHTML=M,Je=a(),S=l("ul"),S.innerHTML=ft,Ue=a(),C=l("div"),p(D.$$.fragment),qe=a(),P=l("p"),P.innerHTML=gt,Ge=a(),p(N.$$.fragment),Ke=a(),p(V.$$.fragment),pe=a(),p(B.$$.fragment),te=a(),X=l("div"),p(A.$$.fragment),xe=a(),ie=l("p"),ie.innerHTML=me,Se=a(),R=l("ul"),R.innerHTML=he,Ie=a(),q=l("div"),p(ue.$$.fragment),Ze=a(),Q=l("p"),Q.innerHTML=it,Te=a(),p(Z.$$.fragment),de=a(),p(se.$$.fragment),fe=a(),p(x.$$.fragment),I=a(),G=l("div"),p(L.$$.fragment),E=a(),ge=l("p"),ge.innerHTML=Y,oe=a(),We=l("ul"),We.innerHTML=dt,lt=a(),ve=l("div"),p(we.$$.fragment),et=a(),Ne=l("p"),Ne.innerHTML=qt,Xe=a(),p(ke.$$.fragment),tt=a(),p(je.$$.fragment),this.h()},l(T){m(e.$$.fragment,T),_=r(T),n=c(T,"DIV",{class:!0});var J=$(n);m(i.$$.fragment,J),k=r(J),s=c(J,"P",{"data-svelte-h":!0}),w(s)!=="svelte-1i5cqrz"&&(s.innerHTML=M),Je=r(J),S=c(J,"UL",{"data-svelte-h":!0}),w(S)!=="svelte-1w7z84m"&&(S.innerHTML=ft),Ue=r(J),C=c(J,"DIV",{class:!0});var _e=$(C);m(D.$$.fragment,_e),qe=r(_e),P=c(_e,"P",{"data-svelte-h":!0}),w(P)!=="svelte-13ych8p"&&(P.innerHTML=gt),Ge=r(_e),m(N.$$.fragment,_e),Ke=r(_e),m(V.$$.fragment,_e),_e.forEach(d),J.forEach(d),pe=r(T),m(B.$$.fragment,T),te=r(T),X=c(T,"DIV",{class:!0});var $e=$(X);m(A.$$.fragment,$e),xe=r($e),ie=c($e,"P",{"data-svelte-h":!0}),w(ie)!=="svelte-dfgos"&&(ie.innerHTML=me),Se=r($e),R=c($e,"UL",{"data-svelte-h":!0}),w(R)!=="svelte-1w7z84m"&&(R.innerHTML=he),Ie=r($e),q=c($e,"DIV",{class:!0});var ae=$(q);m(ue.$$.fragment,ae),Ze=r(ae),Q=c(ae,"P",{"data-svelte-h":!0}),w(Q)!=="svelte-13ych8p"&&(Q.innerHTML=it),Te=r(ae),m(Z.$$.fragment,ae),de=r(ae),m(se.$$.fragment,ae),ae.forEach(d),$e.forEach(d),fe=r(T),m(x.$$.fragment,T),I=r(T),G=c(T,"DIV",{class:!0});var le=$(G);m(L.$$.fragment,le),E=r(le),ge=c(le,"P",{"data-svelte-h":!0}),w(ge)!=="svelte-1g7clih"&&(ge.innerHTML=Y),oe=r(le),We=c(le,"UL",{"data-svelte-h":!0}),w(We)!=="svelte-1w7z84m"&&(We.innerHTML=dt),lt=r(le),ve=c(le,"DIV",{class:!0});var ce=$(ve);m(we.$$.fragment,ce),et=r(ce),Ne=c(ce,"P",{"data-svelte-h":!0}),w(Ne)!=="svelte-1pjqp2h"&&(Ne.innerHTML=qt),Xe=r(ce),m(ke.$$.fragment,ce),tt=r(ce),m(je.$$.fragment,ce),ce.forEach(d),le.forEach(d),this.h()},h(){F(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(T,J){h(e,T,J),b(T,_,J),b(T,n,J),h(i,n,null),o(n,k),o(n,s),o(n,Je),o(n,S),o(n,Ue),o(n,C),h(D,C,null),o(C,qe),o(C,P),o(C,Ge),h(N,C,null),o(C,Ke),h(V,C,null),b(T,pe,J),h(B,T,J),b(T,te,J),b(T,X,J),h(A,X,null),o(X,xe),o(X,ie),o(X,Se),o(X,R),o(X,Ie),o(X,q),h(ue,q,null),o(q,Ze),o(q,Q),o(q,Te),h(Z,q,null),o(q,de),h(se,q,null),b(T,fe,J),h(x,T,J),b(T,I,J),b(T,G,J),h(L,G,null),o(G,E),o(G,ge),o(G,oe),o(G,We),o(G,lt),o(G,ve),h(we,ve,null),o(ve,et),o(ve,Ne),o(ve,Xe),h(ke,ve,null),o(ve,tt),h(je,ve,null),U=!0},p(T,J){const _e={};J&2&&(_e.$$scope={dirty:J,ctx:T}),N.$set(_e);const $e={};J&2&&($e.$$scope={dirty:J,ctx:T}),V.$set($e);const ae={};J&2&&(ae.$$scope={dirty:J,ctx:T}),Z.$set(ae);const le={};J&2&&(le.$$scope={dirty:J,ctx:T}),se.$set(le);const ce={};J&2&&(ce.$$scope={dirty:J,ctx:T}),ke.$set(ce);const _t={};J&2&&(_t.$$scope={dirty:J,ctx:T}),je.$set(_t)},i(T){U||(u(e.$$.fragment,T),u(i.$$.fragment,T),u(D.$$.fragment,T),u(N.$$.fragment,T),u(V.$$.fragment,T),u(B.$$.fragment,T),u(A.$$.fragment,T),u(ue.$$.fragment,T),u(Z.$$.fragment,T),u(se.$$.fragment,T),u(x.$$.fragment,T),u(L.$$.fragment,T),u(we.$$.fragment,T),u(ke.$$.fragment,T),u(je.$$.fragment,T),U=!0)},o(T){f(e.$$.fragment,T),f(i.$$.fragment,T),f(D.$$.fragment,T),f(N.$$.fragment,T),f(V.$$.fragment,T),f(B.$$.fragment,T),f(A.$$.fragment,T),f(ue.$$.fragment,T),f(Z.$$.fragment,T),f(se.$$.fragment,T),f(x.$$.fragment,T),f(L.$$.fragment,T),f(we.$$.fragment,T),f(ke.$$.fragment,T),f(je.$$.fragment,T),U=!1},d(T){T&&(d(_),d(n),d(pe),d(te),d(X),d(fe),d(I),d(G)),g(e,T),g(i),g(D),g(N),g(V),g(B,T),g(A),g(ue),g(Z),g(se),g(x,T),g(L),g(we),g(ke),g(je)}}}function Na(W){let e,_;return e=new Fs({props:{$$slots:{default:[Za]},$$scope:{ctx:W}}}),{c(){p(e.$$.fragment)},l(n){m(e.$$.fragment,n)},m(n,i){h(e,n,i),_=!0},p(n,i){const k={};i&2&&(k.$$scope={dirty:i,ctx:n}),e.$set(k)},i(n){_||(u(e.$$.fragment,n),_=!0)},o(n){f(e.$$.fragment,n),_=!1},d(n){g(e,n)}}}function Xa(W){let e,_,n,i,k,s,M,Je,S,ft='The Whisper model was proposed in <a href="https://cdn.openai.com/papers/whisper.pdf" rel="nofollow">Robust Speech Recognition via Large-Scale Weak Supervision</a> by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever.',Ue,C,D="The abstract from the paper is the following:",qe,P,gt="<em>We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing.</em>",Ge,N,Ke=`This model was contributed by <a href="https://huggingface.co/ArthurZ" rel="nofollow">Arthur Zucker</a>. The Tensorflow version of this model was contributed by <a href="https://huggingface.co/amyeroberts" rel="nofollow">amyeroberts</a>.
The original code can be found <a href="https://github.com/openai/whisper" rel="nofollow">here</a>.`,V,pe,B,te,X='<li><p>The model usually performs well without requiring any finetuning.</p></li> <li><p>The architecture follows a classic encoder-decoder architecture, which means that it relies on the <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate">generate()</a> function for inference.</p></li> <li><p>Inference is currently only implemented for short-form i.e. audio is pre-segmented into &lt;=30s segments. Long-form (including timestamps) will be implemented in a future release.</p></li> <li><p>One can use <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor">WhisperProcessor</a> to prepare audio for the model, and decode the predicted ID’s back into text.</p></li> <li><p>To convert the model and the processor, we recommend using the following:</p></li>',A,xe,ie,me,Se=`The script will automatically determine all necessary parameters from the OpenAI checkpoint. A <code>tiktoken</code> library needs to be installed
to perform the conversion of the OpenAI tokenizer to the <code>tokenizers</code> version.`,R,he,Ie,q,ue="Here is a step-by-step guide to transcribing an audio sample using a pre-trained Whisper model:",Ze,Q,it,Te,Z,de,se="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started with Whisper. If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",fe,x,I=`<li>A fork with a script to <a href="https://github.com/zuazo-forks/transformers/blob/convert_hf_to_openai/src/transformers/models/whisper/convert_hf_to_openai.py" rel="nofollow">convert a Whisper model in Hugging Face format to OpenAI format</a>. 🌎
Usage example:</li>`,G,L,E,ge,Y,oe,We,dt,lt,ve=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel">WhisperModel</a>. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
<a href="https://huggingface.co/openai/whisper-tiny" rel="nofollow">openai/whisper-tiny</a> architecture.`,we,et,Ne=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,qt,Xe,ke,tt,je,U,T,J,_e,$e="Construct a Whisper tokenizer.",ae,le,ce=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`,_t,K,Pe,oo,ct,fn="Override the prefix tokens appended to the start of the label sequence. This method can be used standalone to",no,Qe,Co,pt,ot,Jo,xt,bt="Build model inputs from a sequence by appending eos_token_id.",yt,mt,Re,Xt,nt,so=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,Ye,Fe,wt,Wt,Gt,Uo=`Create the token type IDs corresponding to the sequences passed. <a href="../glossary#token-type-ids">What are token type
IDs?</a>`,Ve,st,qo="Should be overridden in a subclass if the model has a special way of building those.",$t,It,kt,ht,ut,Le,Rt,y,z="Convert a list of lists of token ids into a list of strings by calling decode.",Ae,ze,be,Oe,ee,Be=`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`,Tt,Ee,at="Similar to doing <code>self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))</code>.",Go,Vt,ao,Nn,Io,zs=`Normalize a given string using the <code>BasicTextNormalizer</code> class, which preforms commons transformation on
multilingual text.`,Xn,Lt,ro,Rn,Zo,js=`Normalize a given string using the <code>EnglishTextNormalizer</code> class, which preforms commons transformation on
english text.`,_n,io,bn,H,lo,Vn,No,Cs="Construct a “fast” Whisper tokenizer (backed by HuggingFace’s <em>tokenizers</em> library).",Ln,Xo,Js=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,Bn,Ft,co,En,Ro,Us="Override the prefix tokens appended to the start of the label sequence. This method can be used standalone to",Hn,Bt,Sn,Et,po,Pn,Vo,qs="Build model inputs from a sequence by appending eos_token_id.",Qn,Ht,mo,Yn,Lo,Gs=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,An,zt,ho,On,Bo,Is=`Create the token type IDs corresponding to the sequences passed. <a href="../glossary#token-type-ids">What are token type
IDs?</a>`,Dn,Eo,Zs="Should be overridden in a subclass if the model has a special way of building those.",Kn,Ho,uo,es,St,fo,ts,So,Ns="Convert a list of lists of token ids into a list of strings by calling decode.",os,jt,go,ns,Po,Xs=`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`,ss,Qo,Rs="Similar to doing <code>self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))</code>.",as,Pt,_o,rs,Yo,Vs=`Normalize a given string using the <code>BasicTextNormalizer</code> class, which preforms commons transformation on
multilingual text.`,is,Qt,bo,ds,Ao,Ls=`Normalize a given string using the <code>EnglishTextNormalizer</code> class, which preforms commons transformation on
english text.`,yn,yo,wn,De,wo,ls,Oo,Bs="Constructs a Whisper feature extractor.",cs,Do,Es=`This feature extractor inherits from <a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor">SequenceFeatureExtractor</a> which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`,ps,Ko,Hs="This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the <code>Short Time Fourier Transform</code> which should match pytorch’s <code>torch.stft</code> equivalent.",ms,Yt,ko,hs,en,Ss=`Main method to featurize and prepare for the model one or several sequence(s). Implementation uses PyTorch for
the STFT computation if available, otherwise a slower NumPy based one.`,kn,To,Tn,ye,vo,us,tn,Ps=`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`,fs,on,Qs=`<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor">WhisperProcessor</a> offers all the functionalities of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> and <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See
the <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor.__call__"><strong>call</strong>()</a> and <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor.decode">decode()</a> for more information.`,gs,At,Mo,_s,nn,Ys=`Forwards the <code>audio</code> argument to WhisperFeatureExtractor’s <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a> and the <code>text</code>
argument to <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__"><strong>call</strong>()</a>. Please refer to the doctsring of the above two methods for more
information.`,bs,Ct,xo,ys,sn,As="Instantiate a processor associated with a pretrained model.",ws,Ot,ks,Jt,Wo,Ts,an,Os=`Saves the attributes of this processor (feature extractor, tokenizer…) in the specified directory so that it
can be reloaded using the <a href="/docs/transformers/main/en/model_doc/mctct#transformers.MCTCTProcessor.from_pretrained">from_pretrained()</a> method.`,vs,Dt,Ms,Kt,$o,xs,rn,Ds=`This method forwards all its arguments to WhisperTokenizer’s <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.batch_decode">batch_decode()</a>. Please
refer to the docstring of this method for more information.`,Ws,eo,Fo,$s,dn,Ks=`This method forwards all its arguments to WhisperTokenizer’s <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Tokenizer.decode">decode()</a>. Please refer to
the docstring of this method for more information.`,vn,to,Mn,gn,xn;return k=new Me({props:{title:"Whisper",local:"whisper",headingTag:"h1"}}),M=new Me({props:{title:"Overview",local:"overview",headingTag:"h2"}}),pe=new Me({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),xe=new Ce({props:{code:"cHl0aG9uJTIwc3JjJTJGdHJhbnNmb3JtZXJzJTJGbW9kZWxzJTJGd2hpc3BlciUyRmNvbnZlcnRfb3BlbmFpX3RvX2hmLnB5JTIwLS1jaGVja3BvaW50X3BhdGglMjAlMjIlMjIlMjAtLXB5dG9yY2hfZHVtcF9mb2xkZXJfcGF0aCUyMCUyMkFydGh1ciUyRndoaXNwZXItMyUyMiUyMC0tY29udmVydF9wcmVwcm9jZXNzb3IlMjBUcnVl",highlighted:'python src/transformers/models/whisper/convert_openai_to_hf.py --checkpoint_path <span class="hljs-string">&quot;&quot;</span> --pytorch_dump_folder_path <span class="hljs-string">&quot;Arthur/whisper-3&quot;</span> --convert_preprocessor True',wrap:!1}}),he=new Me({props:{title:"Inference",local:"inference",headingTag:"h2"}}),Q=new Ce({props:{code:"ZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFdoaXNwZXJQcm9jZXNzb3IlMkMlMjBXaGlzcGVyRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBJTBBJTIzJTIwU2VsZWN0JTIwYW4lMjBhdWRpbyUyMGZpbGUlMjBhbmQlMjByZWFkJTIwaXQlM0ElMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2R1bW15JTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBYXVkaW9fc2FtcGxlJTIwJTNEJTIwZHMlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlMEF3YXZlZm9ybSUyMCUzRCUyMGF1ZGlvX3NhbXBsZSU1QiUyMmFycmF5JTIyJTVEJTBBc2FtcGxpbmdfcmF0ZSUyMCUzRCUyMGF1ZGlvX3NhbXBsZSU1QiUyMnNhbXBsaW5nX3JhdGUlMjIlNUQlMEElMEElMjMlMjBMb2FkJTIwdGhlJTIwV2hpc3BlciUyMG1vZGVsJTIwaW4lMjBIdWdnaW5nJTIwRmFjZSUyMGZvcm1hdCUzQSUwQXByb2Nlc3NvciUyMCUzRCUyMFdoaXNwZXJQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItdGlueS5lbiUyMiklMEFtb2RlbCUyMCUzRCUyMFdoaXNwZXJGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haSUyRndoaXNwZXItdGlueS5lbiUyMiklMEElMEElMjMlMjBVc2UlMjB0aGUlMjBtb2RlbCUyMGFuZCUyMHByb2Nlc3NvciUyMHRvJTIwdHJhbnNjcmliZSUyMHRoZSUyMGF1ZGlvJTNBJTBBaW5wdXRfZmVhdHVyZXMlMjAlM0QlMjBwcm9jZXNzb3IoJTBBJTIwJTIwJTIwJTIwd2F2ZWZvcm0lMkMlMjBzYW1wbGluZ19yYXRlJTNEc2FtcGxpbmdfcmF0ZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpLmlucHV0X2ZlYXR1cmVzJTBBJTBBJTIzJTIwR2VuZXJhdGUlMjB0b2tlbiUyMGlkcyUwQXByZWRpY3RlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dF9mZWF0dXJlcyklMEElMEElMjMlMjBEZWNvZGUlMjB0b2tlbiUyMGlkcyUyMHRvJTIwdGV4dCUwQXRyYW5zY3JpcHRpb24lMjAlM0QlMjBwcm9jZXNzb3IuYmF0Y2hfZGVjb2RlKHByZWRpY3RlZF9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklMEElMEF0cmFuc2NyaXB0aW9uJTVCMCU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperProcessor, WhisperForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Select an audio file and read it:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>audio_sample = ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>waveform = audio_sample[<span class="hljs-string">&quot;array&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = audio_sample[<span class="hljs-string">&quot;sampling_rate&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Load the Whisper model in Hugging Face format:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = WhisperProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Use the model and processor to transcribe the audio:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = processor(
<span class="hljs-meta">... </span>    waveform, sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_features

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = model.generate(input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Decode token ids to text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids, skip_special_tokens=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`,wrap:!1}}),Te=new Me({props:{title:"Resources",local:"resources",headingTag:"h2"}}),L=new Ce({props:{code:"cGlwJTIwaW5zdGFsbCUyMC1VJTIwb3BlbmFpLXdoaXNwZXIlMEFweXRob24lMjBjb252ZXJ0X2hmX3RvX29wZW5haS5weSUyMCU1QyUwQSUyMCUyMCUyMCUyMC0tY2hlY2twb2ludCUyMG9wZW5haSUyRndoaXNwZXItdGlueSUyMCU1QyUwQSUyMCUyMCUyMCUyMC0td2hpc3Blcl9kdW1wX3BhdGglMjB3aGlzcGVyLXRpbnktb3BlbmFpLnB0",highlighted:`pip install -U openai-whisper
python convert_hf_to_openai.py \\
    --checkpoint openai/whisper-tiny \\
    --whisper_dump_path whisper-tiny-openai.pt`,wrap:!1}}),ge=new Me({props:{title:"WhisperConfig",local:"transformers.WhisperConfig",headingTag:"h2"}}),We=new j({props:{name:"class transformers.WhisperConfig",anchor:"transformers.WhisperConfig",parameters:[{name:"vocab_size",val:" = 51865"},{name:"num_mel_bins",val:" = 80"},{name:"encoder_layers",val:" = 4"},{name:"encoder_attention_heads",val:" = 6"},{name:"decoder_layers",val:" = 4"},{name:"decoder_attention_heads",val:" = 6"},{name:"decoder_ffn_dim",val:" = 1536"},{name:"encoder_ffn_dim",val:" = 1536"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 50257"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 384"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"max_source_positions",val:" = 1500"},{name:"max_target_positions",val:" = 448"},{name:"pad_token_id",val:" = 50256"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"suppress_tokens",val:" = None"},{name:"begin_suppress_tokens",val:" = [220, 50256]"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"apply_spec_augment",val:" = False"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"median_filter_width",val:" = 7"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 51865) &#x2014;
Vocabulary size of the Whisper model. Defines the number of different tokens that can be represented by the
<code>decoder_input_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel">WhisperModel</a>`,name:"vocab_size"},{anchor:"transformers.WhisperConfig.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
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
instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperForAudioClassification">WhisperForAudioClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.WhisperConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification. Only relevant when using an
instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperForAudioClassification">WhisperForAudioClassification</a>.`,name:"classifier_proj_size"},{anchor:"transformers.WhisperConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
Should be an odd number.`,name:"median_filter_width"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/configuration_whisper.py#L62"}}),Xe=new rt({props:{anchor:"transformers.WhisperConfig.example",$$slots:{default:[da]},$$scope:{ctx:W}}}),tt=new Me({props:{title:"WhisperTokenizer",local:"transformers.WhisperTokenizer",headingTag:"h2"}}),T=new j({props:{name:"class transformers.WhisperTokenizer",anchor:"transformers.WhisperTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"language",val:" = None"},{name:"task",val:" = None"},{name:"predict_timestamps",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L218"}}),Pe=new j({props:{name:"set_prefix_tokens",anchor:"transformers.WhisperTokenizer.set_prefix_tokens",parameters:[{name:"language",val:": str = None"},{name:"task",val:": str = None"},{name:"predict_timestamps",val:": bool = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The language of the transcription text.`,name:"language"},{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Task identifier to append at the start of sequence (if any).`,name:"task"},{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.predict_timestamps",description:`<strong>predict_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L390"}}),Qe=new rt({props:{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.example",$$slots:{default:[la]},$$scope:{ctx:W}}}),ot=new j({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.WhisperTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L449"}}),Re=new j({props:{name:"get_special_tokens_mask",anchor:"transformers.WhisperTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L457",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),wt=new j({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3328",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token type ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),kt=new j({props:{name:"save_vocabulary",anchor:"transformers.WhisperTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L778"}}),Le=new j({props:{name:"batch_decode",anchor:"transformers.WhisperTokenizer.batch_decode",parameters:[{name:"sequences",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.WhisperTokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.WhisperTokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.WhisperTokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3718",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of decoded sentences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),be=new j({props:{name:"decode",anchor:"transformers.WhisperTokenizer.decode",parameters:[{name:"token_ids",val:""},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"output_offsets",val:": bool = False"},{name:"time_precision",val:": float = 0.02"},{name:"decode_with_timestamps",val:": bool = False"},{name:"normalize",val:": bool = False"},{name:"basic_normalize",val:": bool = False"},{name:"remove_diacritics",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.WhisperTokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.WhisperTokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code> (available in the <code>tokenizer_config</code>).`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.WhisperTokenizer.decode.output_offsets",description:`<strong>output_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output the offsets of the tokens. This should only be set if the model predicted
timestamps.`,name:"output_offsets"},{anchor:"transformers.WhisperTokenizer.decode.time_precision",description:`<strong>time_precision</strong> (<code>float</code>, <code>optional</code>, defaults to 0.02) &#x2014;
The time ratio to convert from token to time.`,name:"time_precision"},{anchor:"transformers.WhisperTokenizer.decode.decode_with_timestamps",description:`<strong>decode_with_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to decode with timestamps included in the raw text.`,name:"decode_with_timestamps"},{anchor:"transformers.WhisperTokenizer.decode.normalize",description:`<strong>normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply the English text normalizer to the decoded text. Only applicable when the
target text is in English. Otherwise, the basic text normalizer should be applied.`,name:"normalize"},{anchor:"transformers.WhisperTokenizer.decode.basic_normalize",description:`<strong>basic_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply the Basic text normalizer to the decoded text. Applicable to multilingual
target text.`,name:"basic_normalize"},{anchor:"transformers.WhisperTokenizer.decode.remove_diacritics",description:`<strong>remove_diacritics</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove diacritics when applying the Basic text normalizer. Removing diacritics may
destroy information in the decoded text, hence it should be used with caution.`,name:"remove_diacritics"},{anchor:"transformers.WhisperTokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L654",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded sentence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code></p>
`}}),ao=new j({props:{name:"basic_normalize",anchor:"transformers.WhisperTokenizer.basic_normalize",parameters:[{name:"text",val:""},{name:"remove_diacritics",val:" = False"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L532"}}),ro=new j({props:{name:"normalize",anchor:"transformers.WhisperTokenizer.normalize",parameters:[{name:"text",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L524"}}),io=new Me({props:{title:"WhisperTokenizerFast",local:"transformers.WhisperTokenizerFast",headingTag:"h2"}}),lo=new j({props:{name:"class transformers.WhisperTokenizerFast",anchor:"transformers.WhisperTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"normalizer_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"language",val:" = None"},{name:"task",val:" = None"},{name:"predict_timestamps",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L91"}}),co=new j({props:{name:"set_prefix_tokens",anchor:"transformers.WhisperTokenizerFast.set_prefix_tokens",parameters:[{name:"language",val:": str = None"},{name:"task",val:": str = None"},{name:"predict_timestamps",val:": bool = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizerFast.set_prefix_tokens.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The language of the transcription text.`,name:"language"},{anchor:"transformers.WhisperTokenizerFast.set_prefix_tokens.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Task identifier to append at the start of sequence (if any).`,name:"task"},{anchor:"transformers.WhisperTokenizerFast.set_prefix_tokens.predict_timestamps",description:`<strong>predict_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L479"}}),Bt=new rt({props:{anchor:"transformers.WhisperTokenizerFast.set_prefix_tokens.example",$$slots:{default:[ca]},$$scope:{ctx:W}}}),po=new j({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.WhisperTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L553"}}),mo=new j({props:{name:"get_special_tokens_mask",anchor:"transformers.WhisperTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.WhisperTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.WhisperTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.WhisperTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L561",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ho=new j({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.WhisperTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.WhisperTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3328",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token type ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),uo=new j({props:{name:"save_vocabulary",anchor:"transformers.WhisperTokenizerFast.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L464"}}),fo=new j({props:{name:"batch_decode",anchor:"transformers.WhisperTokenizerFast.batch_decode",parameters:[{name:"sequences",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizerFast.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.WhisperTokenizerFast.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.WhisperTokenizerFast.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.WhisperTokenizerFast.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3718",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of decoded sentences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),go=new j({props:{name:"decode",anchor:"transformers.WhisperTokenizerFast.decode",parameters:[{name:"token_ids",val:""},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"output_offsets",val:": bool = False"},{name:"time_precision",val:": float = 0.02"},{name:"decode_with_timestamps",val:": bool = False"},{name:"normalize",val:": bool = False"},{name:"basic_normalize",val:": bool = False"},{name:"remove_diacritics",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizerFast.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.WhisperTokenizerFast.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.WhisperTokenizerFast.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code> (available in the <code>tokenizer_config</code>).`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.WhisperTokenizerFast.decode.output_offsets",description:`<strong>output_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output the offsets of the tokens. This should only be set if the model predicted
timestamps.`,name:"output_offsets"},{anchor:"transformers.WhisperTokenizerFast.decode.time_precision",description:`<strong>time_precision</strong> (<code>float</code>, <code>optional</code>, defaults to 0.02) &#x2014;
The time ratio to convert from token to time.`,name:"time_precision"},{anchor:"transformers.WhisperTokenizerFast.decode.decode_with_timestamps",description:`<strong>decode_with_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to decode with timestamps included in the raw text.`,name:"decode_with_timestamps"},{anchor:"transformers.WhisperTokenizerFast.decode.normalize",description:`<strong>normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply the English text normalizer to the decoded text. Only applicable when the
target text is in English. Otherwise, the basic text normalizer should be applied.`,name:"normalize"},{anchor:"transformers.WhisperTokenizerFast.decode.basic_normalize",description:`<strong>basic_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply the Basic text normalizer to the decoded text. Applicable to multilingual
target text.`,name:"basic_normalize"},{anchor:"transformers.WhisperTokenizerFast.decode.remove_diacritics",description:`<strong>remove_diacritics</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove diacritics when applying the Basic text normalizer. Removing diacritics may
destroy information in the decoded text, hence it should be used with caution.`,name:"remove_diacritics"},{anchor:"transformers.WhisperTokenizerFast.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L339",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded sentence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code></p>
`}}),_o=new j({props:{name:"basic_normalize",anchor:"transformers.WhisperTokenizerFast.basic_normalize",parameters:[{name:"text",val:""},{name:"remove_diacritics",val:" = False"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L454"}}),bo=new j({props:{name:"normalize",anchor:"transformers.WhisperTokenizerFast.normalize",parameters:[{name:"text",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/tokenization_whisper_fast.py#L446"}}),yo=new Me({props:{title:"WhisperFeatureExtractor",local:"transformers.WhisperFeatureExtractor",headingTag:"h2"}}),wo=new j({props:{name:"class transformers.WhisperFeatureExtractor",anchor:"transformers.WhisperFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"hop_length",val:" = 160"},{name:"chunk_length",val:" = 30"},{name:"n_fft",val:" = 400"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.WhisperFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in hertz (Hz).`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, defaults to 160) &#x2014;
Length of the overlaping windows for the STFT used to obtain the Mel Frequency coefficients.`,name:"hop_length"},{anchor:"transformers.WhisperFeatureExtractor.chunk_length",description:`<strong>chunk_length</strong> (<code>int</code>, defaults to 30) &#x2014;
The maximum number of chuncks of <code>sampling_rate</code> samples used to trim and pad longer or shorter audio
sequences.`,name:"chunk_length"},{anchor:"transformers.WhisperFeatureExtractor.n_fft",description:`<strong>n_fft</strong> (<code>int</code>, defaults to 400) &#x2014;
Size of the Fourier transform.`,name:"n_fft"},{anchor:"transformers.WhisperFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Padding value used to pad the audio. Should correspond to silences.`,name:"padding_value"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L35"}}),ko=new j({props:{name:"__call__",anchor:"transformers.WhisperFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": Union"},{name:"truncation",val:": bool = True"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"padding",val:": Optional = 'max_length'"},{name:"max_length",val:": Optional = None"},{name:"sampling_rate",val:": Optional = None"},{name:"do_normalize",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.WhisperFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
improve the performance of the model.`,name:"do_normalize"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L157"}}),To=new Me({props:{title:"WhisperProcessor",local:"transformers.WhisperProcessor",headingTag:"h2"}}),vo=new j({props:{name:"class transformers.WhisperProcessor",anchor:"transformers.WhisperProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>WhisperFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.WhisperProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>WhisperTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L23"}}),Mo=new j({props:{name:"__call__",anchor:"transformers.WhisperProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L49"}}),xo=new j({props:{name:"from_pretrained",anchor:"transformers.WhisperProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": Union"},{name:"cache_dir",val:": Union = None"},{name:"force_download",val:": bool = False"},{name:"local_files_only",val:": bool = False"},{name:"token",val:": Union = None"},{name:"revision",val:": str = 'main'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/processing_utils.py#L406"}}),Ot=new Mt({props:{$$slots:{default:[pa]},$$scope:{ctx:W}}}),Wo=new j({props:{name:"save_pretrained",anchor:"transformers.WhisperProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.WhisperProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).`,name:"push_to_hub"},{anchor:"transformers.WhisperProcessor.save_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/processing_utils.py#L167"}}),Dt=new Mt({props:{$$slots:{default:[ma]},$$scope:{ctx:W}}}),$o=new j({props:{name:"batch_decode",anchor:"transformers.WhisperProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L83"}}),Fo=new j({props:{name:"decode",anchor:"transformers.WhisperProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L90"}}),to=new ia({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Na],tensorflow:[ja],pytorch:[Ma]},$$scope:{ctx:W}}}),{c(){e=l("meta"),_=a(),n=l("p"),i=a(),p(k.$$.fragment),s=a(),p(M.$$.fragment),Je=a(),S=l("p"),S.innerHTML=ft,Ue=a(),C=l("p"),C.textContent=D,qe=a(),P=l("p"),P.innerHTML=gt,Ge=a(),N=l("p"),N.innerHTML=Ke,V=a(),p(pe.$$.fragment),B=a(),te=l("ul"),te.innerHTML=X,A=a(),p(xe.$$.fragment),ie=a(),me=l("p"),me.innerHTML=Se,R=a(),p(he.$$.fragment),Ie=a(),q=l("p"),q.textContent=ue,Ze=a(),p(Q.$$.fragment),it=a(),p(Te.$$.fragment),Z=a(),de=l("p"),de.textContent=se,fe=a(),x=l("ul"),x.innerHTML=I,G=a(),p(L.$$.fragment),E=a(),p(ge.$$.fragment),Y=a(),oe=l("div"),p(We.$$.fragment),dt=a(),lt=l("p"),lt.innerHTML=ve,we=a(),et=l("p"),et.innerHTML=Ne,qt=a(),p(Xe.$$.fragment),ke=a(),p(tt.$$.fragment),je=a(),U=l("div"),p(T.$$.fragment),J=a(),_e=l("p"),_e.textContent=$e,ae=a(),le=l("p"),le.innerHTML=ce,_t=a(),K=l("div"),p(Pe.$$.fragment),oo=a(),ct=l("p"),ct.textContent=fn,no=a(),p(Qe.$$.fragment),Co=a(),pt=l("div"),p(ot.$$.fragment),Jo=a(),xt=l("p"),xt.textContent=bt,yt=a(),mt=l("div"),p(Re.$$.fragment),Xt=a(),nt=l("p"),nt.innerHTML=so,Ye=a(),Fe=l("div"),p(wt.$$.fragment),Wt=a(),Gt=l("p"),Gt.innerHTML=Uo,Ve=a(),st=l("p"),st.textContent=qo,$t=a(),It=l("div"),p(kt.$$.fragment),ht=a(),ut=l("div"),p(Le.$$.fragment),Rt=a(),y=l("p"),y.textContent=z,Ae=a(),ze=l("div"),p(be.$$.fragment),Oe=a(),ee=l("p"),ee.textContent=Be,Tt=a(),Ee=l("p"),Ee.innerHTML=at,Go=a(),Vt=l("div"),p(ao.$$.fragment),Nn=a(),Io=l("p"),Io.innerHTML=zs,Xn=a(),Lt=l("div"),p(ro.$$.fragment),Rn=a(),Zo=l("p"),Zo.innerHTML=js,_n=a(),p(io.$$.fragment),bn=a(),H=l("div"),p(lo.$$.fragment),Vn=a(),No=l("p"),No.innerHTML=Cs,Ln=a(),Xo=l("p"),Xo.innerHTML=Js,Bn=a(),Ft=l("div"),p(co.$$.fragment),En=a(),Ro=l("p"),Ro.textContent=Us,Hn=a(),p(Bt.$$.fragment),Sn=a(),Et=l("div"),p(po.$$.fragment),Pn=a(),Vo=l("p"),Vo.textContent=qs,Qn=a(),Ht=l("div"),p(mo.$$.fragment),Yn=a(),Lo=l("p"),Lo.innerHTML=Gs,An=a(),zt=l("div"),p(ho.$$.fragment),On=a(),Bo=l("p"),Bo.innerHTML=Is,Dn=a(),Eo=l("p"),Eo.textContent=Zs,Kn=a(),Ho=l("div"),p(uo.$$.fragment),es=a(),St=l("div"),p(fo.$$.fragment),ts=a(),So=l("p"),So.textContent=Ns,os=a(),jt=l("div"),p(go.$$.fragment),ns=a(),Po=l("p"),Po.textContent=Xs,ss=a(),Qo=l("p"),Qo.innerHTML=Rs,as=a(),Pt=l("div"),p(_o.$$.fragment),rs=a(),Yo=l("p"),Yo.innerHTML=Vs,is=a(),Qt=l("div"),p(bo.$$.fragment),ds=a(),Ao=l("p"),Ao.innerHTML=Ls,yn=a(),p(yo.$$.fragment),wn=a(),De=l("div"),p(wo.$$.fragment),ls=a(),Oo=l("p"),Oo.textContent=Bs,cs=a(),Do=l("p"),Do.innerHTML=Es,ps=a(),Ko=l("p"),Ko.innerHTML=Hs,ms=a(),Yt=l("div"),p(ko.$$.fragment),hs=a(),en=l("p"),en.textContent=Ss,kn=a(),p(To.$$.fragment),Tn=a(),ye=l("div"),p(vo.$$.fragment),us=a(),tn=l("p"),tn.textContent=Ps,fs=a(),on=l("p"),on.innerHTML=Qs,gs=a(),At=l("div"),p(Mo.$$.fragment),_s=a(),nn=l("p"),nn.innerHTML=Ys,bs=a(),Ct=l("div"),p(xo.$$.fragment),ys=a(),sn=l("p"),sn.textContent=As,ws=a(),p(Ot.$$.fragment),ks=a(),Jt=l("div"),p(Wo.$$.fragment),Ts=a(),an=l("p"),an.innerHTML=Os,vs=a(),p(Dt.$$.fragment),Ms=a(),Kt=l("div"),p($o.$$.fragment),xs=a(),rn=l("p"),rn.innerHTML=Ds,Ws=a(),eo=l("div"),p(Fo.$$.fragment),$s=a(),dn=l("p"),dn.innerHTML=Ks,vn=a(),p(to.$$.fragment),Mn=a(),gn=l("p"),this.h()},l(t){const v=ra("svelte-u9bgzb",document.head);e=c(v,"META",{name:!0,content:!0}),v.forEach(d),_=r(t),n=c(t,"P",{}),$(n).forEach(d),i=r(t),m(k.$$.fragment,t),s=r(t),m(M.$$.fragment,t),Je=r(t),S=c(t,"P",{"data-svelte-h":!0}),w(S)!=="svelte-951n9o"&&(S.innerHTML=ft),Ue=r(t),C=c(t,"P",{"data-svelte-h":!0}),w(C)!=="svelte-vfdo9a"&&(C.textContent=D),qe=r(t),P=c(t,"P",{"data-svelte-h":!0}),w(P)!=="svelte-17t2w30"&&(P.innerHTML=gt),Ge=r(t),N=c(t,"P",{"data-svelte-h":!0}),w(N)!=="svelte-e1kukz"&&(N.innerHTML=Ke),V=r(t),m(pe.$$.fragment,t),B=r(t),te=c(t,"UL",{"data-svelte-h":!0}),w(te)!=="svelte-bswmmm"&&(te.innerHTML=X),A=r(t),m(xe.$$.fragment,t),ie=r(t),me=c(t,"P",{"data-svelte-h":!0}),w(me)!=="svelte-1m6wh7r"&&(me.innerHTML=Se),R=r(t),m(he.$$.fragment,t),Ie=r(t),q=c(t,"P",{"data-svelte-h":!0}),w(q)!=="svelte-1872smr"&&(q.textContent=ue),Ze=r(t),m(Q.$$.fragment,t),it=r(t),m(Te.$$.fragment,t),Z=r(t),de=c(t,"P",{"data-svelte-h":!0}),w(de)!=="svelte-ww294v"&&(de.textContent=se),fe=r(t),x=c(t,"UL",{"data-svelte-h":!0}),w(x)!=="svelte-107v71f"&&(x.innerHTML=I),G=r(t),m(L.$$.fragment,t),E=r(t),m(ge.$$.fragment,t),Y=r(t),oe=c(t,"DIV",{class:!0});var vt=$(oe);m(We.$$.fragment,vt),dt=r(vt),lt=c(vt,"P",{"data-svelte-h":!0}),w(lt)!=="svelte-de4bc3"&&(lt.innerHTML=ve),we=r(vt),et=c(vt,"P",{"data-svelte-h":!0}),w(et)!=="svelte-o55m63"&&(et.innerHTML=Ne),qt=r(vt),m(Xe.$$.fragment,vt),vt.forEach(d),ke=r(t),m(tt.$$.fragment,t),je=r(t),U=c(t,"DIV",{class:!0});var O=$(U);m(T.$$.fragment,O),J=r(O),_e=c(O,"P",{"data-svelte-h":!0}),w(_e)!=="svelte-1996rkv"&&(_e.textContent=$e),ae=r(O),le=c(O,"P",{"data-svelte-h":!0}),w(le)!=="svelte-1tlp8g2"&&(le.innerHTML=ce),_t=r(O),K=c(O,"DIV",{class:!0});var Zt=$(K);m(Pe.$$.fragment,Zt),oo=r(Zt),ct=c(Zt,"P",{"data-svelte-h":!0}),w(ct)!=="svelte-8in46s"&&(ct.textContent=fn),no=r(Zt),m(Qe.$$.fragment,Zt),Zt.forEach(d),Co=r(O),pt=c(O,"DIV",{class:!0});var zo=$(pt);m(ot.$$.fragment,zo),Jo=r(zo),xt=c(zo,"P",{"data-svelte-h":!0}),w(xt)!=="svelte-wv4s2m"&&(xt.textContent=bt),zo.forEach(d),yt=r(O),mt=c(O,"DIV",{class:!0});var jo=$(mt);m(Re.$$.fragment,jo),Xt=r(jo),nt=c(jo,"P",{"data-svelte-h":!0}),w(nt)!=="svelte-1f4f5kp"&&(nt.innerHTML=so),jo.forEach(d),Ye=r(O),Fe=c(O,"DIV",{class:!0});var Nt=$(Fe);m(wt.$$.fragment,Nt),Wt=r(Nt),Gt=c(Nt,"P",{"data-svelte-h":!0}),w(Gt)!=="svelte-zj1vf1"&&(Gt.innerHTML=Uo),Ve=r(Nt),st=c(Nt,"P",{"data-svelte-h":!0}),w(st)!=="svelte-9vptpw"&&(st.textContent=qo),Nt.forEach(d),$t=r(O),It=c(O,"DIV",{class:!0});var ea=$(It);m(kt.$$.fragment,ea),ea.forEach(d),ht=r(O),ut=c(O,"DIV",{class:!0});var Wn=$(ut);m(Le.$$.fragment,Wn),Rt=r(Wn),y=c(Wn,"P",{"data-svelte-h":!0}),w(y)!=="svelte-1deng2j"&&(y.textContent=z),Wn.forEach(d),Ae=r(O),ze=c(O,"DIV",{class:!0});var ln=$(ze);m(be.$$.fragment,ln),Oe=r(ln),ee=c(ln,"P",{"data-svelte-h":!0}),w(ee)!=="svelte-vbfkpu"&&(ee.textContent=Be),Tt=r(ln),Ee=c(ln,"P",{"data-svelte-h":!0}),w(Ee)!=="svelte-125uxon"&&(Ee.innerHTML=at),ln.forEach(d),Go=r(O),Vt=c(O,"DIV",{class:!0});var $n=$(Vt);m(ao.$$.fragment,$n),Nn=r($n),Io=c($n,"P",{"data-svelte-h":!0}),w(Io)!=="svelte-1ple5m5"&&(Io.innerHTML=zs),$n.forEach(d),Xn=r(O),Lt=c(O,"DIV",{class:!0});var Fn=$(Lt);m(ro.$$.fragment,Fn),Rn=r(Fn),Zo=c(Fn,"P",{"data-svelte-h":!0}),w(Zo)!=="svelte-19fum3y"&&(Zo.innerHTML=js),Fn.forEach(d),O.forEach(d),_n=r(t),m(io.$$.fragment,t),bn=r(t),H=c(t,"DIV",{class:!0});var re=$(H);m(lo.$$.fragment,re),Vn=r(re),No=c(re,"P",{"data-svelte-h":!0}),w(No)!=="svelte-14ct2lo"&&(No.innerHTML=Cs),Ln=r(re),Xo=c(re,"P",{"data-svelte-h":!0}),w(Xo)!=="svelte-fh0aq"&&(Xo.innerHTML=Js),Bn=r(re),Ft=c(re,"DIV",{class:!0});var cn=$(Ft);m(co.$$.fragment,cn),En=r(cn),Ro=c(cn,"P",{"data-svelte-h":!0}),w(Ro)!=="svelte-8in46s"&&(Ro.textContent=Us),Hn=r(cn),m(Bt.$$.fragment,cn),cn.forEach(d),Sn=r(re),Et=c(re,"DIV",{class:!0});var zn=$(Et);m(po.$$.fragment,zn),Pn=r(zn),Vo=c(zn,"P",{"data-svelte-h":!0}),w(Vo)!=="svelte-wv4s2m"&&(Vo.textContent=qs),zn.forEach(d),Qn=r(re),Ht=c(re,"DIV",{class:!0});var jn=$(Ht);m(mo.$$.fragment,jn),Yn=r(jn),Lo=c(jn,"P",{"data-svelte-h":!0}),w(Lo)!=="svelte-1f4f5kp"&&(Lo.innerHTML=Gs),jn.forEach(d),An=r(re),zt=c(re,"DIV",{class:!0});var pn=$(zt);m(ho.$$.fragment,pn),On=r(pn),Bo=c(pn,"P",{"data-svelte-h":!0}),w(Bo)!=="svelte-zj1vf1"&&(Bo.innerHTML=Is),Dn=r(pn),Eo=c(pn,"P",{"data-svelte-h":!0}),w(Eo)!=="svelte-9vptpw"&&(Eo.textContent=Zs),pn.forEach(d),Kn=r(re),Ho=c(re,"DIV",{class:!0});var ta=$(Ho);m(uo.$$.fragment,ta),ta.forEach(d),es=r(re),St=c(re,"DIV",{class:!0});var Cn=$(St);m(fo.$$.fragment,Cn),ts=r(Cn),So=c(Cn,"P",{"data-svelte-h":!0}),w(So)!=="svelte-1deng2j"&&(So.textContent=Ns),Cn.forEach(d),os=r(re),jt=c(re,"DIV",{class:!0});var mn=$(jt);m(go.$$.fragment,mn),ns=r(mn),Po=c(mn,"P",{"data-svelte-h":!0}),w(Po)!=="svelte-vbfkpu"&&(Po.textContent=Xs),ss=r(mn),Qo=c(mn,"P",{"data-svelte-h":!0}),w(Qo)!=="svelte-125uxon"&&(Qo.innerHTML=Rs),mn.forEach(d),as=r(re),Pt=c(re,"DIV",{class:!0});var Jn=$(Pt);m(_o.$$.fragment,Jn),rs=r(Jn),Yo=c(Jn,"P",{"data-svelte-h":!0}),w(Yo)!=="svelte-1ple5m5"&&(Yo.innerHTML=Vs),Jn.forEach(d),is=r(re),Qt=c(re,"DIV",{class:!0});var Un=$(Qt);m(bo.$$.fragment,Un),ds=r(Un),Ao=c(Un,"P",{"data-svelte-h":!0}),w(Ao)!=="svelte-19fum3y"&&(Ao.innerHTML=Ls),Un.forEach(d),re.forEach(d),yn=r(t),m(yo.$$.fragment,t),wn=r(t),De=c(t,"DIV",{class:!0});var Ut=$(De);m(wo.$$.fragment,Ut),ls=r(Ut),Oo=c(Ut,"P",{"data-svelte-h":!0}),w(Oo)!=="svelte-1xbhurt"&&(Oo.textContent=Bs),cs=r(Ut),Do=c(Ut,"P",{"data-svelte-h":!0}),w(Do)!=="svelte-3gz575"&&(Do.innerHTML=Es),ps=r(Ut),Ko=c(Ut,"P",{"data-svelte-h":!0}),w(Ko)!=="svelte-1lv9ra7"&&(Ko.innerHTML=Hs),ms=r(Ut),Yt=c(Ut,"DIV",{class:!0});var qn=$(Yt);m(ko.$$.fragment,qn),hs=r(qn),en=c(qn,"P",{"data-svelte-h":!0}),w(en)!=="svelte-1o1r06v"&&(en.textContent=Ss),qn.forEach(d),Ut.forEach(d),kn=r(t),m(To.$$.fragment,t),Tn=r(t),ye=c(t,"DIV",{class:!0});var He=$(ye);m(vo.$$.fragment,He),us=r(He),tn=c(He,"P",{"data-svelte-h":!0}),w(tn)!=="svelte-1g1myb6"&&(tn.textContent=Ps),fs=r(He),on=c(He,"P",{"data-svelte-h":!0}),w(on)!=="svelte-9t0t1f"&&(on.innerHTML=Qs),gs=r(He),At=c(He,"DIV",{class:!0});var Gn=$(At);m(Mo.$$.fragment,Gn),_s=r(Gn),nn=c(Gn,"P",{"data-svelte-h":!0}),w(nn)!=="svelte-29x5l6"&&(nn.innerHTML=Ys),Gn.forEach(d),bs=r(He),Ct=c(He,"DIV",{class:!0});var hn=$(Ct);m(xo.$$.fragment,hn),ys=r(hn),sn=c(hn,"P",{"data-svelte-h":!0}),w(sn)!=="svelte-1cj8dcb"&&(sn.textContent=As),ws=r(hn),m(Ot.$$.fragment,hn),hn.forEach(d),ks=r(He),Jt=c(He,"DIV",{class:!0});var un=$(Jt);m(Wo.$$.fragment,un),Ts=r(un),an=c(un,"P",{"data-svelte-h":!0}),w(an)!=="svelte-pd1tp5"&&(an.innerHTML=Os),vs=r(un),m(Dt.$$.fragment,un),un.forEach(d),Ms=r(He),Kt=c(He,"DIV",{class:!0});var In=$(Kt);m($o.$$.fragment,In),xs=r(In),rn=c(In,"P",{"data-svelte-h":!0}),w(rn)!=="svelte-1s2d8v3"&&(rn.innerHTML=Ds),In.forEach(d),Ws=r(He),eo=c(He,"DIV",{class:!0});var Zn=$(eo);m(Fo.$$.fragment,Zn),$s=r(Zn),dn=c(Zn,"P",{"data-svelte-h":!0}),w(dn)!=="svelte-1qckehw"&&(dn.innerHTML=Ks),Zn.forEach(d),He.forEach(d),vn=r(t),m(to.$$.fragment,t),Mn=r(t),gn=c(t,"P",{}),$(gn).forEach(d),this.h()},h(){F(e,"name","hf:doc:metadata"),F(e,"content",Ra),F(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,v){o(document.head,e),b(t,_,v),b(t,n,v),b(t,i,v),h(k,t,v),b(t,s,v),h(M,t,v),b(t,Je,v),b(t,S,v),b(t,Ue,v),b(t,C,v),b(t,qe,v),b(t,P,v),b(t,Ge,v),b(t,N,v),b(t,V,v),h(pe,t,v),b(t,B,v),b(t,te,v),b(t,A,v),h(xe,t,v),b(t,ie,v),b(t,me,v),b(t,R,v),h(he,t,v),b(t,Ie,v),b(t,q,v),b(t,Ze,v),h(Q,t,v),b(t,it,v),h(Te,t,v),b(t,Z,v),b(t,de,v),b(t,fe,v),b(t,x,v),b(t,G,v),h(L,t,v),b(t,E,v),h(ge,t,v),b(t,Y,v),b(t,oe,v),h(We,oe,null),o(oe,dt),o(oe,lt),o(oe,we),o(oe,et),o(oe,qt),h(Xe,oe,null),b(t,ke,v),h(tt,t,v),b(t,je,v),b(t,U,v),h(T,U,null),o(U,J),o(U,_e),o(U,ae),o(U,le),o(U,_t),o(U,K),h(Pe,K,null),o(K,oo),o(K,ct),o(K,no),h(Qe,K,null),o(U,Co),o(U,pt),h(ot,pt,null),o(pt,Jo),o(pt,xt),o(U,yt),o(U,mt),h(Re,mt,null),o(mt,Xt),o(mt,nt),o(U,Ye),o(U,Fe),h(wt,Fe,null),o(Fe,Wt),o(Fe,Gt),o(Fe,Ve),o(Fe,st),o(U,$t),o(U,It),h(kt,It,null),o(U,ht),o(U,ut),h(Le,ut,null),o(ut,Rt),o(ut,y),o(U,Ae),o(U,ze),h(be,ze,null),o(ze,Oe),o(ze,ee),o(ze,Tt),o(ze,Ee),o(U,Go),o(U,Vt),h(ao,Vt,null),o(Vt,Nn),o(Vt,Io),o(U,Xn),o(U,Lt),h(ro,Lt,null),o(Lt,Rn),o(Lt,Zo),b(t,_n,v),h(io,t,v),b(t,bn,v),b(t,H,v),h(lo,H,null),o(H,Vn),o(H,No),o(H,Ln),o(H,Xo),o(H,Bn),o(H,Ft),h(co,Ft,null),o(Ft,En),o(Ft,Ro),o(Ft,Hn),h(Bt,Ft,null),o(H,Sn),o(H,Et),h(po,Et,null),o(Et,Pn),o(Et,Vo),o(H,Qn),o(H,Ht),h(mo,Ht,null),o(Ht,Yn),o(Ht,Lo),o(H,An),o(H,zt),h(ho,zt,null),o(zt,On),o(zt,Bo),o(zt,Dn),o(zt,Eo),o(H,Kn),o(H,Ho),h(uo,Ho,null),o(H,es),o(H,St),h(fo,St,null),o(St,ts),o(St,So),o(H,os),o(H,jt),h(go,jt,null),o(jt,ns),o(jt,Po),o(jt,ss),o(jt,Qo),o(H,as),o(H,Pt),h(_o,Pt,null),o(Pt,rs),o(Pt,Yo),o(H,is),o(H,Qt),h(bo,Qt,null),o(Qt,ds),o(Qt,Ao),b(t,yn,v),h(yo,t,v),b(t,wn,v),b(t,De,v),h(wo,De,null),o(De,ls),o(De,Oo),o(De,cs),o(De,Do),o(De,ps),o(De,Ko),o(De,ms),o(De,Yt),h(ko,Yt,null),o(Yt,hs),o(Yt,en),b(t,kn,v),h(To,t,v),b(t,Tn,v),b(t,ye,v),h(vo,ye,null),o(ye,us),o(ye,tn),o(ye,fs),o(ye,on),o(ye,gs),o(ye,At),h(Mo,At,null),o(At,_s),o(At,nn),o(ye,bs),o(ye,Ct),h(xo,Ct,null),o(Ct,ys),o(Ct,sn),o(Ct,ws),h(Ot,Ct,null),o(ye,ks),o(ye,Jt),h(Wo,Jt,null),o(Jt,Ts),o(Jt,an),o(Jt,vs),h(Dt,Jt,null),o(ye,Ms),o(ye,Kt),h($o,Kt,null),o(Kt,xs),o(Kt,rn),o(ye,Ws),o(ye,eo),h(Fo,eo,null),o(eo,$s),o(eo,dn),b(t,vn,v),h(to,t,v),b(t,Mn,v),b(t,gn,v),xn=!0},p(t,[v]){const vt={};v&2&&(vt.$$scope={dirty:v,ctx:t}),Xe.$set(vt);const O={};v&2&&(O.$$scope={dirty:v,ctx:t}),Qe.$set(O);const Zt={};v&2&&(Zt.$$scope={dirty:v,ctx:t}),Bt.$set(Zt);const zo={};v&2&&(zo.$$scope={dirty:v,ctx:t}),Ot.$set(zo);const jo={};v&2&&(jo.$$scope={dirty:v,ctx:t}),Dt.$set(jo);const Nt={};v&2&&(Nt.$$scope={dirty:v,ctx:t}),to.$set(Nt)},i(t){xn||(u(k.$$.fragment,t),u(M.$$.fragment,t),u(pe.$$.fragment,t),u(xe.$$.fragment,t),u(he.$$.fragment,t),u(Q.$$.fragment,t),u(Te.$$.fragment,t),u(L.$$.fragment,t),u(ge.$$.fragment,t),u(We.$$.fragment,t),u(Xe.$$.fragment,t),u(tt.$$.fragment,t),u(T.$$.fragment,t),u(Pe.$$.fragment,t),u(Qe.$$.fragment,t),u(ot.$$.fragment,t),u(Re.$$.fragment,t),u(wt.$$.fragment,t),u(kt.$$.fragment,t),u(Le.$$.fragment,t),u(be.$$.fragment,t),u(ao.$$.fragment,t),u(ro.$$.fragment,t),u(io.$$.fragment,t),u(lo.$$.fragment,t),u(co.$$.fragment,t),u(Bt.$$.fragment,t),u(po.$$.fragment,t),u(mo.$$.fragment,t),u(ho.$$.fragment,t),u(uo.$$.fragment,t),u(fo.$$.fragment,t),u(go.$$.fragment,t),u(_o.$$.fragment,t),u(bo.$$.fragment,t),u(yo.$$.fragment,t),u(wo.$$.fragment,t),u(ko.$$.fragment,t),u(To.$$.fragment,t),u(vo.$$.fragment,t),u(Mo.$$.fragment,t),u(xo.$$.fragment,t),u(Ot.$$.fragment,t),u(Wo.$$.fragment,t),u(Dt.$$.fragment,t),u($o.$$.fragment,t),u(Fo.$$.fragment,t),u(to.$$.fragment,t),xn=!0)},o(t){f(k.$$.fragment,t),f(M.$$.fragment,t),f(pe.$$.fragment,t),f(xe.$$.fragment,t),f(he.$$.fragment,t),f(Q.$$.fragment,t),f(Te.$$.fragment,t),f(L.$$.fragment,t),f(ge.$$.fragment,t),f(We.$$.fragment,t),f(Xe.$$.fragment,t),f(tt.$$.fragment,t),f(T.$$.fragment,t),f(Pe.$$.fragment,t),f(Qe.$$.fragment,t),f(ot.$$.fragment,t),f(Re.$$.fragment,t),f(wt.$$.fragment,t),f(kt.$$.fragment,t),f(Le.$$.fragment,t),f(be.$$.fragment,t),f(ao.$$.fragment,t),f(ro.$$.fragment,t),f(io.$$.fragment,t),f(lo.$$.fragment,t),f(co.$$.fragment,t),f(Bt.$$.fragment,t),f(po.$$.fragment,t),f(mo.$$.fragment,t),f(ho.$$.fragment,t),f(uo.$$.fragment,t),f(fo.$$.fragment,t),f(go.$$.fragment,t),f(_o.$$.fragment,t),f(bo.$$.fragment,t),f(yo.$$.fragment,t),f(wo.$$.fragment,t),f(ko.$$.fragment,t),f(To.$$.fragment,t),f(vo.$$.fragment,t),f(Mo.$$.fragment,t),f(xo.$$.fragment,t),f(Ot.$$.fragment,t),f(Wo.$$.fragment,t),f(Dt.$$.fragment,t),f($o.$$.fragment,t),f(Fo.$$.fragment,t),f(to.$$.fragment,t),xn=!1},d(t){t&&(d(_),d(n),d(i),d(s),d(Je),d(S),d(Ue),d(C),d(qe),d(P),d(Ge),d(N),d(V),d(B),d(te),d(A),d(ie),d(me),d(R),d(Ie),d(q),d(Ze),d(it),d(Z),d(de),d(fe),d(x),d(G),d(E),d(Y),d(oe),d(ke),d(je),d(U),d(_n),d(bn),d(H),d(yn),d(wn),d(De),d(kn),d(Tn),d(ye),d(vn),d(Mn),d(gn)),d(e),g(k,t),g(M,t),g(pe,t),g(xe,t),g(he,t),g(Q,t),g(Te,t),g(L,t),g(ge,t),g(We),g(Xe),g(tt,t),g(T),g(Pe),g(Qe),g(ot),g(Re),g(wt),g(kt),g(Le),g(be),g(ao),g(ro),g(io,t),g(lo),g(co),g(Bt),g(po),g(mo),g(ho),g(uo),g(fo),g(go),g(_o),g(bo),g(yo,t),g(wo),g(ko),g(To,t),g(vo),g(Mo),g(xo),g(Ot),g(Wo),g(Dt),g($o),g(Fo),g(to,t)}}}const Ra='{"title":"Whisper","local":"whisper","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Inference","local":"inference","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"WhisperConfig","local":"transformers.WhisperConfig","sections":[],"depth":2},{"title":"WhisperTokenizer","local":"transformers.WhisperTokenizer","sections":[],"depth":2},{"title":"WhisperTokenizerFast","local":"transformers.WhisperTokenizerFast","sections":[],"depth":2},{"title":"WhisperFeatureExtractor","local":"transformers.WhisperFeatureExtractor","sections":[],"depth":2},{"title":"WhisperProcessor","local":"transformers.WhisperProcessor","sections":[],"depth":2},{"title":"WhisperModel","local":"transformers.WhisperModel","sections":[],"depth":2},{"title":"WhisperForConditionalGeneration","local":"transformers.WhisperForConditionalGeneration","sections":[],"depth":2},{"title":"WhisperForCausalLM","local":"transformers.WhisperForCausalLM","sections":[],"depth":2},{"title":"WhisperForAudioClassification","local":"transformers.WhisperForAudioClassification","sections":[],"depth":2},{"title":"TFWhisperModel","local":"transformers.TFWhisperModel","sections":[],"depth":2},{"title":"TFWhisperForConditionalGeneration","local":"transformers.TFWhisperForConditionalGeneration","sections":[],"depth":2},{"title":"FlaxWhisperModel","local":"transformers.FlaxWhisperModel","sections":[],"depth":2},{"title":"FlaxWhisperForConditionalGeneration","local":"transformers.FlaxWhisperForConditionalGeneration","sections":[],"depth":2},{"title":"FlaxWhisperForAudioClassification","local":"transformers.FlaxWhisperForAudioClassification","sections":[],"depth":2}],"depth":1}';function Va(W){return na(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Aa extends sa{constructor(e){super(),aa(this,e,Va,Xa,oa,{})}}export{Aa as component};
