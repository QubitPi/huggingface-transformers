import{s as xo,o as Vo,n as Te}from"../chunks/scheduler.9bc65507.js";import{S as Eo,i as $o,g as i,s as a,r as u,A as So,h as p,f as d,c as s,j as G,u as g,x as h,k as I,y as r,a as c,v as _,d as y,t as b,w as M}from"../chunks/index.707bf1b6.js";import{T as Uo}from"../chunks/Tip.c2ecdbf4.js";import{D as L}from"../chunks/Docstring.17db21ae.js";import{C as R}from"../chunks/CodeBlock.54a9f38d.js";import{E as Le}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Q}from"../chunks/Heading.342b1fa6.js";function Co(k){let n,v="Examples:",m,l,f;return l=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEJlcnRDb25maWclMkMlMjBXYXYyVmVjMkNvbmZpZyUyQyUyMFNwZWVjaEVuY29kZXJEZWNvZGVyQ29uZmlnJTJDJTIwU3BlZWNoRW5jb2RlckRlY29kZXJNb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBXYXYyVmVjMiUyMCUyNiUyMEJFUlQlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWdfZW5jb2RlciUyMCUzRCUyMFdhdjJWZWMyQ29uZmlnKCklMEFjb25maWdfZGVjb2RlciUyMCUzRCUyMEJlcnRDb25maWcoKSUwQSUwQWNvbmZpZyUyMCUzRCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyQ29uZmlnLmZyb21fZW5jb2Rlcl9kZWNvZGVyX2NvbmZpZ3MoY29uZmlnX2VuY29kZXIlMkMlMjBjb25maWdfZGVjb2RlciklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwV2F2MlZlYzJCZXJ0JTIwbW9kZWwlMjBmcm9tJTIwYSUyMFdhdjJWZWMyJTIwJTI2JTIwZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbnMlMEFtb2RlbCUyMCUzRCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyTW9kZWwoY29uZmlnJTNEY29uZmlnKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ19lbmNvZGVyJTIwJTNEJTIwbW9kZWwuY29uZmlnLmVuY29kZXIlMEFjb25maWdfZGVjb2RlciUyMCUzRCUyMG1vZGVsLmNvbmZpZy5kZWNvZGVyJTBBJTIzJTIwc2V0JTIwZGVjb2RlciUyMGNvbmZpZyUyMHRvJTIwY2F1c2FsJTIwbG0lMEFjb25maWdfZGVjb2Rlci5pc19kZWNvZGVyJTIwJTNEJTIwVHJ1ZSUwQWNvbmZpZ19kZWNvZGVyLmFkZF9jcm9zc19hdHRlbnRpb24lMjAlM0QlMjBUcnVlJTBBJTBBJTIzJTIwU2F2aW5nJTIwdGhlJTIwbW9kZWwlMkMlMjBpbmNsdWRpbmclMjBpdHMlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwuc2F2ZV9wcmV0cmFpbmVkKCUyMm15LW1vZGVsJTIyKSUwQSUwQSUyMyUyMGxvYWRpbmclMjBtb2RlbCUyMGFuZCUyMGNvbmZpZyUyMGZyb20lMjBwcmV0cmFpbmVkJTIwZm9sZGVyJTBBZW5jb2Rlcl9kZWNvZGVyX2NvbmZpZyUyMCUzRCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyQ29uZmlnLmZyb21fcHJldHJhaW5lZCglMjJteS1tb2RlbCUyMiklMEFtb2RlbCUyMCUzRCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm15LW1vZGVsJTIyJTJDJTIwY29uZmlnJTNEZW5jb2Rlcl9kZWNvZGVyX2NvbmZpZyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2 &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = Wav2Vec2Config()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2Bert model from a Wav2Vec2 &amp; google-bert/bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = SpeechEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`,wrap:!1}}),{c(){n=i("p"),n.textContent=v,m=a(),u(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-kvfsh7"&&(n.textContent=v),m=s(t),g(l.$$.fragment,t)},m(t,w){c(t,n,w),c(t,m,w),_(l,t,w),f=!0},p:Te,i(t){f||(y(l.$$.fragment,t),f=!0)},o(t){b(l.$$.fragment,t),f=!1},d(t){t&&(d(n),d(m)),M(l,t)}}}function Fo(k){let n,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=i("p"),n.innerHTML=v},l(m){n=p(m,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=v)},m(m,l){c(m,n,l)},p:Te,d(m){m&&d(n)}}}function Go(k){let n,v="Examples:",m,l,f;return l=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyTW9kZWwlMkMlMjBBdXRvUHJvY2Vzc29yJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwdG9yY2glMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRndhdjJ2ZWMyLXhscy1yLTMwMG0tZW4tdG8tMTUlMjIpJTBBbW9kZWwlMjAlM0QlMjBTcGVlY2hFbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRndhdjJ2ZWMyLXhscy1yLTMwMG0tZW4tdG8tMTUlMjIpJTBBJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kdW1teSUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQSUwQWlucHV0X3ZhbHVlcyUyMCUzRCUyMHByb2Nlc3NvcihkcyU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfdmFsdWVzJTBBJTIzJTIwSW5mZXJlbmNlJTNBJTIwVHJhbnNsYXRlJTIwRW5nbGlzaCUyMHNwZWVjaCUyMHRvJTIwR2VybWFuJTBBZ2VuZXJhdGVkJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRfdmFsdWVzKSUwQWRlY29kZWQlMjAlM0QlMjBwcm9jZXNzb3IuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZCUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSU1QjAlNUQlMEFkZWNvZGVkJTBBJTBBJTIzJTIwVHJhaW5pbmclM0ElMjBUcmFpbiUyMG1vZGVsJTIwb24lMjBFbmdsaXNoJTIwdHJhbnNjcmlwdGlvbiUwQWxhYmVscyUyMCUzRCUyMHByb2Nlc3Nvcih0ZXh0JTNEZHMlNUIwJTVEJTVCJTIydGV4dCUyMiU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQSUwQWxvc3MlMjAlM0QlMjBtb2RlbChpbnB1dF92YWx1ZXMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3MlMEFsb3NzLmJhY2t3YXJkKCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel, AutoProcessor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Inference: Translate English speech to German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoded = processor.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>decoded
<span class="hljs-string">&#x27;Mr. Quilter ist der Apostel der Mittelschicht und wir freuen uns, sein Evangelium willkommen heißen zu können.&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Training: Train model on English transcription</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor(text=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`,wrap:!1}}),{c(){n=i("p"),n.textContent=v,m=a(),u(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-kvfsh7"&&(n.textContent=v),m=s(t),g(l.$$.fragment,t)},m(t,w){c(t,n,w),c(t,m,w),_(l,t,w),f=!0},p:Te,i(t){f||(y(l.$$.fragment,t),f=!0)},o(t){b(l.$$.fragment,t),f=!1},d(t){t&&(d(n),d(m)),M(l,t)}}}function Io(k){let n,v="Example:",m,l,f;return l=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyTW9kZWwlMEElMEElMjMlMjBpbml0aWFsaXplJTIwYSUyMHdhdjJ2ZWMyYmVydCUyMGZyb20lMjBhJTIwcHJldHJhaW5lZCUyMFdhdjJWZWMyJTIwYW5kJTIwYSUyMHByZXRyYWluZWQlMjBCRVJUJTIwbW9kZWwuJTIwTm90ZSUyMHRoYXQlMjB0aGUlMjBjcm9zcy1hdHRlbnRpb24lMjBsYXllcnMlMjB3aWxsJTIwYmUlMjByYW5kb21seSUyMGluaXRpYWxpemVkJTBBbW9kZWwlMjAlM0QlMjBTcGVlY2hFbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fZW5jb2Rlcl9kZWNvZGVyX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZmFjZWJvb2slMkZ3YXYydmVjMi1iYXNlLTk2MGglMjIlMkMlMjAlMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS11bmNhc2VkJTIyJTBBKSUwQSUyMyUyMHNhdmluZyUyMG1vZGVsJTIwYWZ0ZXIlMjBmaW5lLXR1bmluZyUwQW1vZGVsLnNhdmVfcHJldHJhaW5lZCglMjIuJTJGd2F2MnZlYzJiZXJ0JTIyKSUwQSUyMyUyMGxvYWQlMjBmaW5lLXR1bmVkJTIwbW9kZWwlMEFtb2RlbCUyMCUzRCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMi4lMkZ3YXYydmVjMmJlcnQlMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>, <span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`,wrap:!1}}),{c(){n=i("p"),n.textContent=v,m=a(),u(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-11lpom8"&&(n.textContent=v),m=s(t),g(l.$$.fragment,t)},m(t,w){c(t,n,w),c(t,m,w),_(l,t,w),f=!0},p:Te,i(t){f||(y(l.$$.fragment,t),f=!0)},o(t){b(l.$$.fragment,t),f=!1},d(t){t&&(d(n),d(m)),M(l,t)}}}function Ro(k){let n,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=i("p"),n.innerHTML=v},l(m){n=p(m,"P",{"data-svelte-h":!0}),h(n)!=="svelte-fincs2"&&(n.innerHTML=v)},m(m,l){c(m,n,l)},p:Te,d(m){m&&d(n)}}}function zo(k){let n,v="Examples:",m,l,f;return l=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEZsYXhTcGVlY2hFbmNvZGVyRGVjb2Rlck1vZGVsJTJDJTIwQXV0b1Rva2VuaXplciUwQSUwQSUyMyUyMGxvYWQlMjBhJTIwZmluZS10dW5lZCUyMHdhdjJ2ZWMyLTItYmFydCUyMG1vZGVsJTBBbW9kZWwlMjAlM0QlMjBGbGF4U3BlZWNoRW5jb2RlckRlY29kZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIycGF0cmlja3ZvbnBsYXRlbiUyRndhdjJ2ZWMyLTItYmFydC1sYXJnZSUyMiklMEElMjMlMjBsb2FkJTIwb3V0cHV0JTIwdG9rZW5pemVyJTBBdG9rZW5pemVyX291dHB1dCUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGYmFydC1sYXJnZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjBqbnAub25lcygoMiUyQyUyMDUwMDApJTJDJTIwZHR5cGUlM0RqbnAuZmxvYXQzMiklMEElMEElMjMlMjB1c2UlMjBiYXJ0J3MlMjBzcGVjaWFsJTIwYm9zJTJDJTIwcGFkJTIwYW5kJTIwZW9zJTIwdG9rZW5zJTBBbW9kZWwuY29uZmlnLmRlY29kZXJfc3RhcnRfdG9rZW5faWQlMjAlM0QlMjBtb2RlbC5kZWNvZGVyLmNvbmZpZy5ib3NfdG9rZW5faWQlMEFtb2RlbC5jb25maWcucGFkX3Rva2VuX2lkJTIwJTNEJTIwbW9kZWwuZGVjb2Rlci5jb25maWcucGFkX3Rva2VuX2lkJTBBbW9kZWwuY29uZmlnLmVvc190b2tlbl9pZCUyMCUzRCUyMG1vZGVsLmRlY29kZXIuY29uZmlnLmVvc190b2tlbl9pZCUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dHMp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxSpeechEncoderDecoderModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned wav2vec2-2-bart model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-2-bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = jnp.ones((<span class="hljs-number">2</span>, <span class="hljs-number">5000</span>), dtype=jnp.float32)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use bart&#x27;s special bos, pad and eos tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = model.decoder.config.bos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.decoder.config.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.decoder.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-comment"># Assert something? More interesting input? dtype correct?</span>`,wrap:!1}}),{c(){n=i("p"),n.textContent=v,m=a(),u(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-kvfsh7"&&(n.textContent=v),m=s(t),g(l.$$.fragment,t)},m(t,w){c(t,n,w),c(t,m,w),_(l,t,w),f=!0},p:Te,i(t){f||(y(l.$$.fragment,t),f=!0)},o(t){b(l.$$.fragment,t),f=!1},d(t){t&&(d(n),d(m)),M(l,t)}}}function No(k){let n,v="Example:",m,l,f;return l=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEZsYXhTcGVlY2hFbmNvZGVyRGVjb2Rlck1vZGVsJTBBJTBBJTIzJTIwaW5pdGlhbGl6ZSUyMGElMjB3YXYydmVjMi0yLWJhcnQlMjBmcm9tJTIwcHJldHJhaW5lZCUyMHdhdjJ2ZWMyJTIwYW5kJTIwYmFydCUyMG1vZGVscy4lMjBOb3RlJTIwdGhhdCUyMHRoZSUyMGNyb3NzLWF0dGVudGlvbiUyMGxheWVycyUyMHdpbGwlMjBiZSUyMHJhbmRvbWx5JTIwaW5pdGlhbGl6ZWQlMEFtb2RlbCUyMCUzRCUyMEZsYXhTcGVlY2hFbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fZW5jb2Rlcl9kZWNvZGVyX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZmFjZWJvb2slMkZ3YXYydmVjMi1sYXJnZS1sdjYwJTIyJTJDJTIwJTIyZmFjZWJvb2slMkZiYXJ0LWxhcmdlJTIyJTBBKSUwQSUyMyUyMHNhdmluZyUyMG1vZGVsJTIwYWZ0ZXIlMjBmaW5lLXR1bmluZyUwQW1vZGVsLnNhdmVfcHJldHJhaW5lZCglMjIuJTJGd2F2MnZlYzItMi1iYXJ0LWxhcmdlJTIyKSUwQSUyMyUyMGxvYWQlMjBmaW5lLXR1bmVkJTIwbW9kZWwlMEFtb2RlbCUyMCUzRCUyMEZsYXhTcGVlY2hFbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjIuJTJGd2F2MnZlYzItMi1iYXJ0LWxhcmdlJTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxSpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a wav2vec2-2-bart from pretrained wav2vec2 and bart models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>, <span class="hljs-string">&quot;facebook/bart-large&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxSpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2-2-bart-large&quot;</span>)`,wrap:!1}}),{c(){n=i("p"),n.textContent=v,m=a(),u(l.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),h(n)!=="svelte-11lpom8"&&(n.textContent=v),m=s(t),g(l.$$.fragment,t)},m(t,w){c(t,n,w),c(t,m,w),_(l,t,w),f=!0},p:Te,i(t){f||(y(l.$$.fragment,t),f=!0)},o(t){b(l.$$.fragment,t),f=!1},d(t){t&&(d(n),d(m)),M(l,t)}}}function Yo(k){let n,v,m,l,f,t,w,Ot=`The <a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel">SpeechEncoderDecoderModel</a> can be used to initialize a speech-to-text model
with any pretrained speech autoencoding model as the encoder (<em>e.g.</em> <a href="wav2vec2">Wav2Vec2</a>, <a href="hubert">Hubert</a>) and any pretrained autoregressive model as the decoder.`,Qe,P,Kt=`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has <em>e.g.</em> been shown in <a href="https://arxiv.org/abs/2104.06678" rel="nofollow">Large-Scale Self- and Semi-Supervised Learning for Speech
Translation</a> by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`,Pe,A,eo='An example of how to use a <a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel">SpeechEncoderDecoderModel</a> for inference can be seen in <a href="speech_to_text_2">Speech2Text2</a>.',Ae,O,Oe,K,to=`<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel">SpeechEncoderDecoderModel</a> can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a> configuration for the encoder
and the default <code>BertForCausalLM</code> configuration for the decoder.`,Ke,ee,et,te,tt,oe,oo=`<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel">SpeechEncoderDecoderModel</a> can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based speech model, <em>e.g.</em> <a href="wav2vec2">Wav2Vec2</a>, <a href="hubert">Hubert</a> can serve as the encoder and both pretrained auto-encoding models, <em>e.g.</em> BERT, pretrained causal language models, <em>e.g.</em> GPT2, as well as the pretrained decoder part of sequence-to-sequence models, <em>e.g.</em> decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing <a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel">SpeechEncoderDecoderModel</a> from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in <a href="https://huggingface.co/blog/warm-starting-encoder-decoder" rel="nofollow">the <em>Warm-starting-encoder-decoder blog post</em></a>.
To do so, the <code>SpeechEncoderDecoderModel</code> class provides a <a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained">SpeechEncoderDecoderModel.from_encoder_decoder_pretrained()</a> method.`,ot,ne,nt,ae,at,se,no='To load fine-tuned checkpoints of the <code>SpeechEncoderDecoderModel</code> class, <a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel">SpeechEncoderDecoderModel</a> provides the <code>from_pretrained(...)</code> method just like any other model architecture in Transformers.',st,re,ao="To perform inference, one uses the <code>generate</code> method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling.",rt,de,dt,ce,ct,le,so=`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (speech, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: <code>input_values</code> (which are the
speech inputs) and <code>labels</code> (which are the <code>input_ids</code> of the encoded target sequence).`,lt,ie,it,pe,pt,W,me,yt,Ze,ro=`<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a> is the configuration class to store the configuration of a
<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel">SpeechEncoderDecoderModel</a>. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`,bt,je,co=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Mt,z,wt,N,he,vt,Je,lo=`Instantiate a <a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a> (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`,mt,fe,ht,T,ue,Tt,ke,io=`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via <a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a> function and the decoder is loaded via
<a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a> function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`,Zt,We,po=`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in <a href="https://arxiv.org/abs/1907.12461" rel="nofollow">Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks</a> by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`,jt,Ue,mo=`Additionally, in <a href="https://arxiv.org/abs/2104.06678" rel="nofollow">Large-Scale Self- and Semi-Supervised Learning for Speech
Translation</a> it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`,Jt,xe,ho=`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`,kt,Ve,fo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Wt,Ee,uo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ut,$e,go=`<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel">SpeechEncoderDecoderModel</a> is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth<em>~transformers.AutoModel.from_pretrained</em> class method for the encoder and
:meth<em>~transformers.AutoModelForCausalLM.from_pretrained</em> class method for the decoder.`,xt,x,ge,Vt,Se,_o='The <a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel">SpeechEncoderDecoderModel</a> forward method, overrides the <code>__call__</code> special method.',Et,Y,$t,X,St,V,_e,Ct,Ce,yo=`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`,Ft,Fe,bo=`The model is set in evaluation mode by default using <code>model.eval()</code> (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with <code>model.train()</code>.`,Gt,B,ft,ye,ut,Z,be,It,Ge,Mo=`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via <a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a> function and the decoder is loaded via
<a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a> function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`,Rt,Ie,wo=`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in <a href="https://arxiv.org/abs/1907.12461" rel="nofollow">Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks</a> by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`,zt,Re,vo=`Additionally, in <a href="https://arxiv.org/abs/2104.06678" rel="nofollow">Large-Scale Self- and Semi-Supervised Learning for Speech
Translation</a> it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`,Nt,ze,To=`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`,Yt,Ne,Zo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Xt,Ye,jo=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,Bt,Xe,Jo=`<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel">FlaxSpeechEncoderDecoderModel</a> is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one
as decoder module when created with the :meth<em>~transformers.FlaxAutoModel.from_pretrained</em> class method for the
encoder and :meth<em>~transformers.FlaxAutoModelForCausalLM.from_pretrained</em> class method for the decoder.`,Dt,E,Me,qt,Be,ko='The <a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.FlaxSpeechEncoderDecoderModel">FlaxSpeechEncoderDecoderModel</a> forward method, overrides the <code>__call__</code> special method.',Ht,D,Lt,q,Qt,F,we,Pt,De,Wo=`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`,At,H,gt,He,_t;return f=new Q({props:{title:"Speech Encoder Decoder Models",local:"speech-encoder-decoder-models",headingTag:"h1"}}),O=new Q({props:{title:"Randomly initializing SpeechEncoderDecoderModel from model configurations.",local:"randomly-initializing-speechencoderdecodermodel-from-model-configurations",headingTag:"h2"}}),ee=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEJlcnRDb25maWclMkMlMjBXYXYyVmVjMkNvbmZpZyUyQyUyMFNwZWVjaEVuY29kZXJEZWNvZGVyQ29uZmlnJTJDJTIwU3BlZWNoRW5jb2RlckRlY29kZXJNb2RlbCUwQSUwQWNvbmZpZ19lbmNvZGVyJTIwJTNEJTIwV2F2MlZlYzJDb25maWcoKSUwQWNvbmZpZ19kZWNvZGVyJTIwJTNEJTIwQmVydENvbmZpZygpJTBBJTBBY29uZmlnJTIwJTNEJTIwU3BlZWNoRW5jb2RlckRlY29kZXJDb25maWcuZnJvbV9lbmNvZGVyX2RlY29kZXJfY29uZmlncyhjb25maWdfZW5jb2RlciUyQyUyMGNvbmZpZ19kZWNvZGVyKSUwQW1vZGVsJTIwJTNEJTIwU3BlZWNoRW5jb2RlckRlY29kZXJNb2RlbChjb25maWclM0Rjb25maWcp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = Wav2Vec2Config()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(config=config)`,wrap:!1}}),te=new Q({props:{title:"Initialising SpeechEncoderDecoderModel from a pretrained encoder and a pretrained decoder.",local:"initialising-speechencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",headingTag:"h2"}}),ne=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyTW9kZWwlMEElMEFtb2RlbCUyMCUzRCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9lbmNvZGVyX2RlY29kZXJfcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJmYWNlYm9vayUyRmh1YmVydC1sYXJnZS1sbDYwayUyMiUyQyUyMCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIlMEEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/hubert-large-ll60k&quot;</span>, <span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)`,wrap:!1}}),ae=new Q({props:{title:"Loading an existing SpeechEncoderDecoderModel checkpoint and perform inference.",local:"loading-an-existing-speechencoderdecodermodel-checkpoint-and-perform-inference",headingTag:"h2"}}),de=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFdhdjJWZWMyUHJvY2Vzc29yJTJDJTIwU3BlZWNoRW5jb2RlckRlY29kZXJNb2RlbCUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBJTIzJTIwbG9hZCUyMGElMjBmaW5lLXR1bmVkJTIwc3BlZWNoJTIwdHJhbnNsYXRpb24lMjBtb2RlbCUyMGFuZCUyMGNvcnJlc3BvbmRpbmclMjBwcm9jZXNzb3IlMEFtb2RlbCUyMCUzRCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGd2F2MnZlYzIteGxzLXItMzAwbS1lbi10by0xNSUyMiklMEFwcm9jZXNzb3IlMjAlM0QlMjBXYXYyVmVjMlByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZ3YXYydmVjMi14bHMtci0zMDBtLWVuLXRvLTE1JTIyKSUwQSUwQSUyMyUyMGxldCdzJTIwcGVyZm9ybSUyMGluZmVyZW5jZSUyMG9uJTIwYSUyMHBpZWNlJTIwb2YlMjBFbmdsaXNoJTIwc3BlZWNoJTIwKHdoaWNoJTIwd2UnbGwlMjB0cmFuc2xhdGUlMjB0byUyMEdlcm1hbiklMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2R1bW15JTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBaW5wdXRfdmFsdWVzJTIwJTNEJTIwcHJvY2Vzc29yKGRzJTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF92YWx1ZXMlMEElMEElMjMlMjBhdXRvcmVncmVzc2l2ZWx5JTIwZ2VuZXJhdGUlMjB0cmFuc2NyaXB0aW9uJTIwKHVzZXMlMjBncmVlZHklMjBkZWNvZGluZyUyMGJ5JTIwZGVmYXVsdCklMEFnZW5lcmF0ZWRfaWRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRfdmFsdWVzKSUwQWdlbmVyYXRlZF90ZXh0JTIwJTNEJTIwcHJvY2Vzc29yLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfaWRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTVCMCU1RCUwQXByaW50KGdlbmVyYXRlZF90ZXh0KQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SpeechEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned speech translation model and corresponding processor</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-xls-r-300m-en-to-15&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s perform inference on a piece of English speech (which we&#x27;ll translate to German)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># autoregressively generate transcription (uses greedy decoding by default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated_text)
Mr. Quilter ist der Apostel der Mittelschicht und wir freuen uns, sein Evangelium willkommen heißen zu können.`,wrap:!1}}),ce=new Q({props:{title:"Training",local:"training",headingTag:"h2"}}),ie=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBdXRvRmVhdHVyZUV4dHJhY3RvciUyQyUyMFNwZWVjaEVuY29kZXJEZWNvZGVyTW9kZWwlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFlbmNvZGVyX2lkJTIwJTNEJTIwJTIyZmFjZWJvb2slMkZ3YXYydmVjMi1iYXNlLTk2MGglMjIlMjAlMjAlMjMlMjBhY291c3RpYyUyMG1vZGVsJTIwZW5jb2RlciUwQWRlY29kZXJfaWQlMjAlM0QlMjAlMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS11bmNhc2VkJTIyJTIwJTIwJTIzJTIwdGV4dCUyMGRlY29kZXIlMEElMEFmZWF0dXJlX2V4dHJhY3RvciUyMCUzRCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yLmZyb21fcHJldHJhaW5lZChlbmNvZGVyX2lkKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKGRlY29kZXJfaWQpJTBBJTIzJTIwQ29tYmluZSUyMHByZS10cmFpbmVkJTIwZW5jb2RlciUyMGFuZCUyMHByZS10cmFpbmVkJTIwZGVjb2RlciUyMHRvJTIwZm9ybSUyMGElMjBTZXEyU2VxJTIwbW9kZWwlMEFtb2RlbCUyMCUzRCUyMFNwZWVjaEVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9lbmNvZGVyX2RlY29kZXJfcHJldHJhaW5lZChlbmNvZGVyX2lkJTJDJTIwZGVjb2Rlcl9pZCklMEElMEFtb2RlbC5jb25maWcuZGVjb2Rlcl9zdGFydF90b2tlbl9pZCUyMCUzRCUyMHRva2VuaXplci5jbHNfdG9rZW5faWQlMEFtb2RlbC5jb25maWcucGFkX3Rva2VuX2lkJTIwJTNEJTIwdG9rZW5pemVyLnBhZF90b2tlbl9pZCUwQSUwQSUyMyUyMGxvYWQlMjBhbiUyMGF1ZGlvJTIwaW5wdXQlMjBhbmQlMjBwcmUtcHJvY2VzcyUyMChub3JtYWxpc2UlMjBtZWFuJTJGc3RkJTIwdG8lMjAwJTJGMSklMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2R1bW15JTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBaW5wdXRfdmFsdWVzJTIwJTNEJTIwZmVhdHVyZV9leHRyYWN0b3IoZHMlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X3ZhbHVlcyUwQSUwQSUyMyUyMGxvYWQlMjBpdHMlMjBjb3JyZXNwb25kaW5nJTIwdHJhbnNjcmlwdGlvbiUyMGFuZCUyMHRva2VuaXplJTIwdG8lMjBnZW5lcmF0ZSUyMGxhYmVscyUwQWxhYmVscyUyMCUzRCUyMHRva2VuaXplcihkcyU1QjAlNUQlNUIlMjJ0ZXh0JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBJTBBJTIzJTIwdGhlJTIwZm9yd2FyZCUyMGZ1bmN0aW9uJTIwYXV0b21hdGljYWxseSUyMGNyZWF0ZXMlMjB0aGUlMjBjb3JyZWN0JTIwZGVjb2Rlcl9pbnB1dF9pZHMlMEFsb3NzJTIwJTNEJTIwbW9kZWwoaW5wdXRfdmFsdWVzJTNEaW5wdXRfdmFsdWVzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzJTBBbG9zcy5iYWNrd2FyZCgp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoFeatureExtractor, SpeechEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_id = <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>  <span class="hljs-comment"># acoustic model encoder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_id = <span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>  <span class="hljs-comment"># text decoder</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(encoder_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(decoder_id)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Combine pre-trained encoder and pre-trained decoder to form a Seq2Seq model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(encoder_id, decoder_id)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load an audio input and pre-process (normalise mean/std to 0/1)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = feature_extractor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load its corresponding transcription and tokenize to generate labels</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values=input_values, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`,wrap:!1}}),pe=new Q({props:{title:"SpeechEncoderDecoderConfig",local:"transformers.SpeechEncoderDecoderConfig",headingTag:"h2"}}),me=new L({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L26"}}),z=new Le({props:{anchor:"transformers.SpeechEncoderDecoderConfig.example",$$slots:{default:[Co]},$$scope:{ctx:k}}}),he=new L({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L93",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>An instance of a configuration object</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),fe=new Q({props:{title:"SpeechEncoderDecoderModel",local:"transformers.SpeechEncoderDecoderModel",headingTag:"h2"}}),ue=new L({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": Optional = None"},{name:"encoder",val:": Optional = None"},{name:"decoder",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L172"}}),ge=new L({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"inputs",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"input_values",val:": Optional = None"},{name:"input_features",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs",description:`<strong>inputs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <code>.flac</code>
or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile
library (<code>pip install soundfile</code>). To prepare the array into <code>inputs</code>, either the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<code>torch.FloatTensor</code>.`,name:"inputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>, <em>optional</em>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>~utils.Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014; Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L434",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),Y=new Uo({props:{$$slots:{default:[Fo]},$$scope:{ctx:k}}}),X=new Le({props:{anchor:"transformers.SpeechEncoderDecoderModel.forward.example",$$slots:{default:[Go]},$$scope:{ctx:k}}}),_e=new L({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L283"}}),B=new Le({props:{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Io]},$$scope:{ctx:k}}}),ye=new Q({props:{title:"FlaxSpeechEncoderDecoderModel",local:"transformers.FlaxSpeechEncoderDecoderModel",headingTag:"h2"}}),be=new L({props:{name:"class transformers.FlaxSpeechEncoderDecoderModel",anchor:"transformers.FlaxSpeechEncoderDecoderModel",parameters:[{name:"config",val:": SpeechEncoderDecoderConfig"},{name:"input_shape",val:": Optional = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L328"}}),Me=new L({props:{name:"__call__",anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__",parameters:[{name:"inputs",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.inputs",description:`<strong>inputs</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <code>.flac</code>
or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile
library (<code>pip install soundfile</code>). To prepare the array into <code>inputs</code>, either the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<code>torch.FloatTensor</code>.`,name:"inputs"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For sequence to sequence training, <code>decoder_input_ids</code> should be provided. <code>decoder_input_ids</code> should be
created outside of the model by shifting the <code>labels</code> to the right, replacing -100 by the <code>pad_token_id</code>
and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>~utils.FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L660",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),D=new Uo({props:{$$slots:{default:[Ro]},$$scope:{ctx:k}}}),q=new Le({props:{anchor:"transformers.FlaxSpeechEncoderDecoderModel.__call__.example",$$slots:{default:[zo]},$$scope:{ctx:k}}}),we=new L({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": Union = None"},{name:"decoder_pretrained_model_name_or_path",val:": Union = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_encoder_decoder/modeling_flax_speech_encoder_decoder.py#L782"}}),H=new Le({props:{anchor:"transformers.FlaxSpeechEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[No]},$$scope:{ctx:k}}}),{c(){n=i("meta"),v=a(),m=i("p"),l=a(),u(f.$$.fragment),t=a(),w=i("p"),w.innerHTML=Ot,Qe=a(),P=i("p"),P.innerHTML=Kt,Pe=a(),A=i("p"),A.innerHTML=eo,Ae=a(),u(O.$$.fragment),Oe=a(),K=i("p"),K.innerHTML=to,Ke=a(),u(ee.$$.fragment),et=a(),u(te.$$.fragment),tt=a(),oe=i("p"),oe.innerHTML=oo,ot=a(),u(ne.$$.fragment),nt=a(),u(ae.$$.fragment),at=a(),se=i("p"),se.innerHTML=no,st=a(),re=i("p"),re.innerHTML=ao,rt=a(),u(de.$$.fragment),dt=a(),u(ce.$$.fragment),ct=a(),le=i("p"),le.innerHTML=so,lt=a(),u(ie.$$.fragment),it=a(),u(pe.$$.fragment),pt=a(),W=i("div"),u(me.$$.fragment),yt=a(),Ze=i("p"),Ze.innerHTML=ro,bt=a(),je=i("p"),je.innerHTML=co,Mt=a(),u(z.$$.fragment),wt=a(),N=i("div"),u(he.$$.fragment),vt=a(),Je=i("p"),Je.innerHTML=lo,mt=a(),u(fe.$$.fragment),ht=a(),T=i("div"),u(ue.$$.fragment),Tt=a(),ke=i("p"),ke.innerHTML=io,Zt=a(),We=i("p"),We.innerHTML=po,jt=a(),Ue=i("p"),Ue.innerHTML=mo,Jt=a(),xe=i("p"),xe.textContent=ho,kt=a(),Ve=i("p"),Ve.innerHTML=fo,Wt=a(),Ee=i("p"),Ee.innerHTML=uo,Ut=a(),$e=i("p"),$e.innerHTML=go,xt=a(),x=i("div"),u(ge.$$.fragment),Vt=a(),Se=i("p"),Se.innerHTML=_o,Et=a(),u(Y.$$.fragment),$t=a(),u(X.$$.fragment),St=a(),V=i("div"),u(_e.$$.fragment),Ct=a(),Ce=i("p"),Ce.textContent=yo,Ft=a(),Fe=i("p"),Fe.innerHTML=bo,Gt=a(),u(B.$$.fragment),ft=a(),u(ye.$$.fragment),ut=a(),Z=i("div"),u(be.$$.fragment),It=a(),Ge=i("p"),Ge.innerHTML=Mo,Rt=a(),Ie=i("p"),Ie.innerHTML=wo,zt=a(),Re=i("p"),Re.innerHTML=vo,Nt=a(),ze=i("p"),ze.textContent=To,Yt=a(),Ne=i("p"),Ne.innerHTML=Zo,Xt=a(),Ye=i("p"),Ye.innerHTML=jo,Bt=a(),Xe=i("p"),Xe.innerHTML=Jo,Dt=a(),E=i("div"),u(Me.$$.fragment),qt=a(),Be=i("p"),Be.innerHTML=ko,Ht=a(),u(D.$$.fragment),Lt=a(),u(q.$$.fragment),Qt=a(),F=i("div"),u(we.$$.fragment),Pt=a(),De=i("p"),De.textContent=Wo,At=a(),u(H.$$.fragment),gt=a(),He=i("p"),this.h()},l(e){const o=So("svelte-u9bgzb",document.head);n=p(o,"META",{name:!0,content:!0}),o.forEach(d),v=s(e),m=p(e,"P",{}),G(m).forEach(d),l=s(e),g(f.$$.fragment,e),t=s(e),w=p(e,"P",{"data-svelte-h":!0}),h(w)!=="svelte-1scow92"&&(w.innerHTML=Ot),Qe=s(e),P=p(e,"P",{"data-svelte-h":!0}),h(P)!=="svelte-1jxsacc"&&(P.innerHTML=Kt),Pe=s(e),A=p(e,"P",{"data-svelte-h":!0}),h(A)!=="svelte-ajdviw"&&(A.innerHTML=eo),Ae=s(e),g(O.$$.fragment,e),Oe=s(e),K=p(e,"P",{"data-svelte-h":!0}),h(K)!=="svelte-zmztt0"&&(K.innerHTML=to),Ke=s(e),g(ee.$$.fragment,e),et=s(e),g(te.$$.fragment,e),tt=s(e),oe=p(e,"P",{"data-svelte-h":!0}),h(oe)!=="svelte-gb0umw"&&(oe.innerHTML=oo),ot=s(e),g(ne.$$.fragment,e),nt=s(e),g(ae.$$.fragment,e),at=s(e),se=p(e,"P",{"data-svelte-h":!0}),h(se)!=="svelte-1deypkt"&&(se.innerHTML=no),st=s(e),re=p(e,"P",{"data-svelte-h":!0}),h(re)!=="svelte-otiwkm"&&(re.innerHTML=ao),rt=s(e),g(de.$$.fragment,e),dt=s(e),g(ce.$$.fragment,e),ct=s(e),le=p(e,"P",{"data-svelte-h":!0}),h(le)!=="svelte-1mtzhr7"&&(le.innerHTML=so),lt=s(e),g(ie.$$.fragment,e),it=s(e),g(pe.$$.fragment,e),pt=s(e),W=p(e,"DIV",{class:!0});var U=G(W);g(me.$$.fragment,U),yt=s(U),Ze=p(U,"P",{"data-svelte-h":!0}),h(Ze)!=="svelte-19pavco"&&(Ze.innerHTML=ro),bt=s(U),je=p(U,"P",{"data-svelte-h":!0}),h(je)!=="svelte-o55m63"&&(je.innerHTML=co),Mt=s(U),g(z.$$.fragment,U),wt=s(U),N=p(U,"DIV",{class:!0});var ve=G(N);g(he.$$.fragment,ve),vt=s(ve),Je=p(ve,"P",{"data-svelte-h":!0}),h(Je)!=="svelte-18e8szt"&&(Je.innerHTML=lo),ve.forEach(d),U.forEach(d),mt=s(e),g(fe.$$.fragment,e),ht=s(e),T=p(e,"DIV",{class:!0});var j=G(T);g(ue.$$.fragment,j),Tt=s(j),ke=p(j,"P",{"data-svelte-h":!0}),h(ke)!=="svelte-10wknrl"&&(ke.innerHTML=io),Zt=s(j),We=p(j,"P",{"data-svelte-h":!0}),h(We)!=="svelte-1faerbf"&&(We.innerHTML=po),jt=s(j),Ue=p(j,"P",{"data-svelte-h":!0}),h(Ue)!=="svelte-xu4z0z"&&(Ue.innerHTML=mo),Jt=s(j),xe=p(j,"P",{"data-svelte-h":!0}),h(xe)!=="svelte-1dsbzbd"&&(xe.textContent=ho),kt=s(j),Ve=p(j,"P",{"data-svelte-h":!0}),h(Ve)!=="svelte-6pahdo"&&(Ve.innerHTML=fo),Wt=s(j),Ee=p(j,"P",{"data-svelte-h":!0}),h(Ee)!=="svelte-hswkmf"&&(Ee.innerHTML=uo),Ut=s(j),$e=p(j,"P",{"data-svelte-h":!0}),h($e)!=="svelte-1ami5tb"&&($e.innerHTML=go),xt=s(j),x=p(j,"DIV",{class:!0});var $=G(x);g(ge.$$.fragment,$),Vt=s($),Se=p($,"P",{"data-svelte-h":!0}),h(Se)!=="svelte-c8pc75"&&(Se.innerHTML=_o),Et=s($),g(Y.$$.fragment,$),$t=s($),g(X.$$.fragment,$),$.forEach(d),St=s(j),V=p(j,"DIV",{class:!0});var S=G(V);g(_e.$$.fragment,S),Ct=s(S),Ce=p(S,"P",{"data-svelte-h":!0}),h(Ce)!=="svelte-n4p3zm"&&(Ce.textContent=yo),Ft=s(S),Fe=p(S,"P",{"data-svelte-h":!0}),h(Fe)!=="svelte-ce5sus"&&(Fe.innerHTML=bo),Gt=s(S),g(B.$$.fragment,S),S.forEach(d),j.forEach(d),ft=s(e),g(ye.$$.fragment,e),ut=s(e),Z=p(e,"DIV",{class:!0});var J=G(Z);g(be.$$.fragment,J),It=s(J),Ge=p(J,"P",{"data-svelte-h":!0}),h(Ge)!=="svelte-10wknrl"&&(Ge.innerHTML=Mo),Rt=s(J),Ie=p(J,"P",{"data-svelte-h":!0}),h(Ie)!=="svelte-1faerbf"&&(Ie.innerHTML=wo),zt=s(J),Re=p(J,"P",{"data-svelte-h":!0}),h(Re)!=="svelte-xu4z0z"&&(Re.innerHTML=vo),Nt=s(J),ze=p(J,"P",{"data-svelte-h":!0}),h(ze)!=="svelte-1dsbzbd"&&(ze.textContent=To),Yt=s(J),Ne=p(J,"P",{"data-svelte-h":!0}),h(Ne)!=="svelte-18ki9f4"&&(Ne.innerHTML=Zo),Xt=s(J),Ye=p(J,"P",{"data-svelte-h":!0}),h(Ye)!=="svelte-idybz1"&&(Ye.innerHTML=jo),Bt=s(J),Xe=p(J,"P",{"data-svelte-h":!0}),h(Xe)!=="svelte-b07hd7"&&(Xe.innerHTML=Jo),Dt=s(J),E=p(J,"DIV",{class:!0});var C=G(E);g(Me.$$.fragment,C),qt=s(C),Be=p(C,"P",{"data-svelte-h":!0}),h(Be)!=="svelte-2ydbot"&&(Be.innerHTML=ko),Ht=s(C),g(D.$$.fragment,C),Lt=s(C),g(q.$$.fragment,C),C.forEach(d),Qt=s(J),F=p(J,"DIV",{class:!0});var qe=G(F);g(we.$$.fragment,qe),Pt=s(qe),De=p(qe,"P",{"data-svelte-h":!0}),h(De)!=="svelte-n4p3zm"&&(De.textContent=Wo),At=s(qe),g(H.$$.fragment,qe),qe.forEach(d),J.forEach(d),gt=s(e),He=p(e,"P",{}),G(He).forEach(d),this.h()},h(){I(n,"name","hf:doc:metadata"),I(n,"content",Xo),I(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){r(document.head,n),c(e,v,o),c(e,m,o),c(e,l,o),_(f,e,o),c(e,t,o),c(e,w,o),c(e,Qe,o),c(e,P,o),c(e,Pe,o),c(e,A,o),c(e,Ae,o),_(O,e,o),c(e,Oe,o),c(e,K,o),c(e,Ke,o),_(ee,e,o),c(e,et,o),_(te,e,o),c(e,tt,o),c(e,oe,o),c(e,ot,o),_(ne,e,o),c(e,nt,o),_(ae,e,o),c(e,at,o),c(e,se,o),c(e,st,o),c(e,re,o),c(e,rt,o),_(de,e,o),c(e,dt,o),_(ce,e,o),c(e,ct,o),c(e,le,o),c(e,lt,o),_(ie,e,o),c(e,it,o),_(pe,e,o),c(e,pt,o),c(e,W,o),_(me,W,null),r(W,yt),r(W,Ze),r(W,bt),r(W,je),r(W,Mt),_(z,W,null),r(W,wt),r(W,N),_(he,N,null),r(N,vt),r(N,Je),c(e,mt,o),_(fe,e,o),c(e,ht,o),c(e,T,o),_(ue,T,null),r(T,Tt),r(T,ke),r(T,Zt),r(T,We),r(T,jt),r(T,Ue),r(T,Jt),r(T,xe),r(T,kt),r(T,Ve),r(T,Wt),r(T,Ee),r(T,Ut),r(T,$e),r(T,xt),r(T,x),_(ge,x,null),r(x,Vt),r(x,Se),r(x,Et),_(Y,x,null),r(x,$t),_(X,x,null),r(T,St),r(T,V),_(_e,V,null),r(V,Ct),r(V,Ce),r(V,Ft),r(V,Fe),r(V,Gt),_(B,V,null),c(e,ft,o),_(ye,e,o),c(e,ut,o),c(e,Z,o),_(be,Z,null),r(Z,It),r(Z,Ge),r(Z,Rt),r(Z,Ie),r(Z,zt),r(Z,Re),r(Z,Nt),r(Z,ze),r(Z,Yt),r(Z,Ne),r(Z,Xt),r(Z,Ye),r(Z,Bt),r(Z,Xe),r(Z,Dt),r(Z,E),_(Me,E,null),r(E,qt),r(E,Be),r(E,Ht),_(D,E,null),r(E,Lt),_(q,E,null),r(Z,Qt),r(Z,F),_(we,F,null),r(F,Pt),r(F,De),r(F,At),_(H,F,null),c(e,gt,o),c(e,He,o),_t=!0},p(e,[o]){const U={};o&2&&(U.$$scope={dirty:o,ctx:e}),z.$set(U);const ve={};o&2&&(ve.$$scope={dirty:o,ctx:e}),Y.$set(ve);const j={};o&2&&(j.$$scope={dirty:o,ctx:e}),X.$set(j);const $={};o&2&&($.$$scope={dirty:o,ctx:e}),B.$set($);const S={};o&2&&(S.$$scope={dirty:o,ctx:e}),D.$set(S);const J={};o&2&&(J.$$scope={dirty:o,ctx:e}),q.$set(J);const C={};o&2&&(C.$$scope={dirty:o,ctx:e}),H.$set(C)},i(e){_t||(y(f.$$.fragment,e),y(O.$$.fragment,e),y(ee.$$.fragment,e),y(te.$$.fragment,e),y(ne.$$.fragment,e),y(ae.$$.fragment,e),y(de.$$.fragment,e),y(ce.$$.fragment,e),y(ie.$$.fragment,e),y(pe.$$.fragment,e),y(me.$$.fragment,e),y(z.$$.fragment,e),y(he.$$.fragment,e),y(fe.$$.fragment,e),y(ue.$$.fragment,e),y(ge.$$.fragment,e),y(Y.$$.fragment,e),y(X.$$.fragment,e),y(_e.$$.fragment,e),y(B.$$.fragment,e),y(ye.$$.fragment,e),y(be.$$.fragment,e),y(Me.$$.fragment,e),y(D.$$.fragment,e),y(q.$$.fragment,e),y(we.$$.fragment,e),y(H.$$.fragment,e),_t=!0)},o(e){b(f.$$.fragment,e),b(O.$$.fragment,e),b(ee.$$.fragment,e),b(te.$$.fragment,e),b(ne.$$.fragment,e),b(ae.$$.fragment,e),b(de.$$.fragment,e),b(ce.$$.fragment,e),b(ie.$$.fragment,e),b(pe.$$.fragment,e),b(me.$$.fragment,e),b(z.$$.fragment,e),b(he.$$.fragment,e),b(fe.$$.fragment,e),b(ue.$$.fragment,e),b(ge.$$.fragment,e),b(Y.$$.fragment,e),b(X.$$.fragment,e),b(_e.$$.fragment,e),b(B.$$.fragment,e),b(ye.$$.fragment,e),b(be.$$.fragment,e),b(Me.$$.fragment,e),b(D.$$.fragment,e),b(q.$$.fragment,e),b(we.$$.fragment,e),b(H.$$.fragment,e),_t=!1},d(e){e&&(d(v),d(m),d(l),d(t),d(w),d(Qe),d(P),d(Pe),d(A),d(Ae),d(Oe),d(K),d(Ke),d(et),d(tt),d(oe),d(ot),d(nt),d(at),d(se),d(st),d(re),d(rt),d(dt),d(ct),d(le),d(lt),d(it),d(pt),d(W),d(mt),d(ht),d(T),d(ft),d(ut),d(Z),d(gt),d(He)),d(n),M(f,e),M(O,e),M(ee,e),M(te,e),M(ne,e),M(ae,e),M(de,e),M(ce,e),M(ie,e),M(pe,e),M(me),M(z),M(he),M(fe,e),M(ue),M(ge),M(Y),M(X),M(_e),M(B),M(ye,e),M(be),M(Me),M(D),M(q),M(we),M(H)}}}const Xo='{"title":"Speech Encoder Decoder Models","local":"speech-encoder-decoder-models","sections":[{"title":"Randomly initializing SpeechEncoderDecoderModel from model configurations.","local":"randomly-initializing-speechencoderdecodermodel-from-model-configurations","sections":[],"depth":2},{"title":"Initialising SpeechEncoderDecoderModel from a pretrained encoder and a pretrained decoder.","local":"initialising-speechencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder","sections":[],"depth":2},{"title":"Loading an existing SpeechEncoderDecoderModel checkpoint and perform inference.","local":"loading-an-existing-speechencoderdecodermodel-checkpoint-and-perform-inference","sections":[],"depth":2},{"title":"Training","local":"training","sections":[],"depth":2},{"title":"SpeechEncoderDecoderConfig","local":"transformers.SpeechEncoderDecoderConfig","sections":[],"depth":2},{"title":"SpeechEncoderDecoderModel","local":"transformers.SpeechEncoderDecoderModel","sections":[],"depth":2},{"title":"FlaxSpeechEncoderDecoderModel","local":"transformers.FlaxSpeechEncoderDecoderModel","sections":[],"depth":2}],"depth":1}';function Bo(k){return Vo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Oo extends Eo{constructor(n){super(),$o(this,n,Bo,Yo,xo,{})}}export{Oo as component};
