import{s as qa,o as ja,n as Q}from"../chunks/scheduler.9bc65507.js";import{S as Ua,i as Na,g as a,s as o,r as u,A as Ja,h as r,f as c,c as n,j as k,u as f,x as p,k as w,y as t,a as h,v as g,d as _,t as T,w as b}from"../chunks/index.707bf1b6.js";import{T as ko}from"../chunks/Tip.c2ecdbf4.js";import{D as x}from"../chunks/Docstring.17db21ae.js";import{C as xo}from"../chunks/CodeBlock.54a9f38d.js";import{E as wo}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as R}from"../chunks/Heading.342b1fa6.js";function Pa($){let s,v="Example:",l,m,y;return m=new xo({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFNwZWVjaFQ1TW9kZWwlMkMlMjBTcGVlY2hUNUNvbmZpZyUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjAlMjJtaWNyb3NvZnQlMkZzcGVlY2h0NV9hc3IlMjIlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwU3BlZWNoVDVDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMCh3aXRoJTIwcmFuZG9tJTIwd2VpZ2h0cyklMjBmcm9tJTIwdGhlJTIwJTIybWljcm9zb2Z0JTJGc3BlZWNodDVfYXNyJTIyJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBTcGVlY2hUNU1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechT5Model, SpeechT5Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a &quot;microsoft/speecht5_asr&quot; style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SpeechT5Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the &quot;microsoft/speecht5_asr&quot; style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechT5Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){s=a("p"),s.textContent=v,l=o(),u(m.$$.fragment)},l(i){s=r(i,"P",{"data-svelte-h":!0}),p(s)!=="svelte-11lpom8"&&(s.textContent=v),l=n(i),f(m.$$.fragment,i)},m(i,S){h(i,s,S),h(i,l,S),g(m,i,S),y=!0},p:Q,i(i){y||(_(m.$$.fragment,i),y=!0)},o(i){T(m.$$.fragment,i),y=!1},d(i){i&&(c(s),c(l)),b(m,i)}}}function Wa($){let s,v="Example:",l,m,y;return m=new xo({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFNwZWVjaFQ1SGlmaUdhbiUyQyUyMFNwZWVjaFQ1SGlmaUdhbkNvbmZpZyUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjAlMjJtaWNyb3NvZnQlMkZzcGVlY2h0NV9oaWZpZ2FuJTIyJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFNwZWVjaFQ1SGlmaUdhbkNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjAlMjJtaWNyb3NvZnQlMkZzcGVlY2h0NV9oaWZpZ2FuJTIyJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBTcGVlY2hUNUhpZmlHYW4oY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechT5HifiGan, SpeechT5HifiGanConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a &quot;microsoft/speecht5_hifigan&quot; style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SpeechT5HifiGanConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the &quot;microsoft/speecht5_hifigan&quot; style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechT5HifiGan(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){s=a("p"),s.textContent=v,l=o(),u(m.$$.fragment)},l(i){s=r(i,"P",{"data-svelte-h":!0}),p(s)!=="svelte-11lpom8"&&(s.textContent=v),l=n(i),f(m.$$.fragment,i)},m(i,S){h(i,s,S),h(i,l,S),g(m,i,S),y=!0},p:Q,i(i){y||(_(m.$$.fragment,i),y=!0)},o(i){T(m.$$.fragment,i),y=!1},d(i){i&&(c(s),c(l)),b(m,i)}}}function Ia($){let s,v=`This class method is simply calling the feature extractor
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a>, image processor
<a href="/docs/transformers/main/en/main_classes/image_processor#transformers.ImageProcessingMixin">ImageProcessingMixin</a> and the tokenizer
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code> methods. Please refer to the docstrings of the
methods above for more information.`;return{c(){s=a("p"),s.innerHTML=v},l(l){s=r(l,"P",{"data-svelte-h":!0}),p(s)!=="svelte-1ob8jsn"&&(s.innerHTML=v)},m(l,m){h(l,s,m)},p:Q,d(l){l&&c(s)}}}function Za($){let s,v=`This class method is simply calling <a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.save_pretrained">save_pretrained()</a>. Please refer to the docstrings of the
methods above for more information.`;return{c(){s=a("p"),s.innerHTML=v},l(l){s=r(l,"P",{"data-svelte-h":!0}),p(s)!=="svelte-1qvfzw2"&&(s.innerHTML=v)},m(l,m){h(l,s,m)},p:Q,d(l){l&&c(s)}}}function La($){let s,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){s=a("p"),s.innerHTML=v},l(l){s=r(l,"P",{"data-svelte-h":!0}),p(s)!=="svelte-fincs2"&&(s.innerHTML=v)},m(l,m){h(l,s,m)},p:Q,d(l){l&&c(s)}}}function Ga($){let s,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){s=a("p"),s.innerHTML=v},l(l){s=r(l,"P",{"data-svelte-h":!0}),p(s)!=="svelte-fincs2"&&(s.innerHTML=v)},m(l,m){h(l,s,m)},p:Q,d(l){l&&c(s)}}}function Ha($){let s,v="Example:",l,m,y;return m=new xo({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFNwZWVjaFQ1UHJvY2Vzc29yJTJDJTIwU3BlZWNoVDVGb3JTcGVlY2hUb1RleHQlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUwQSUyMCUyMCUyMCUyMCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZGVtbyUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyJTBBKSUyMCUyMCUyMyUyMGRvY3Rlc3QlM0ElMjAlMkJJR05PUkVfUkVTVUxUJTBBZGF0YXNldCUyMCUzRCUyMGRhdGFzZXQuc29ydCglMjJpZCUyMiklMEFzYW1wbGluZ19yYXRlJTIwJTNEJTIwZGF0YXNldC5mZWF0dXJlcyU1QiUyMmF1ZGlvJTIyJTVELnNhbXBsaW5nX3JhdGUlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBTcGVlY2hUNVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGc3BlZWNodDVfYXNyJTIyKSUwQW1vZGVsJTIwJTNEJTIwU3BlZWNoVDVGb3JTcGVlY2hUb1RleHQuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnNwZWVjaHQ1X2FzciUyMiklMEElMEElMjMlMjBhdWRpbyUyMGZpbGUlMjBpcyUyMGRlY29kZWQlMjBvbiUyMHRoZSUyMGZseSUwQWlucHV0cyUyMCUzRCUyMHByb2Nlc3NvcihhdWRpbyUzRGRhdGFzZXQlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHNhbXBsaW5nX3JhdGUlM0RzYW1wbGluZ19yYXRlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFwcmVkaWN0ZWRfaWRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoKippbnB1dHMlMkMlMjBtYXhfbGVuZ3RoJTNEMTAwKSUwQSUwQSUyMyUyMHRyYW5zY3JpYmUlMjBzcGVlY2glMEF0cmFuc2NyaXB0aW9uJTIwJTNEJTIwcHJvY2Vzc29yLmJhdGNoX2RlY29kZShwcmVkaWN0ZWRfaWRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTBBdHJhbnNjcmlwdGlvbiU1QjAlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechT5Processor, SpeechT5ForSpeechToText
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># doctest: +IGNORE_RESULT</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = SpeechT5Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/speecht5_asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechT5ForSpeechToText.from_pretrained(<span class="hljs-string">&quot;microsoft/speecht5_asr&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(audio=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = model.generate(**inputs, max_length=<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>`,wrap:!1}}),{c(){s=a("p"),s.textContent=v,l=o(),u(m.$$.fragment)},l(i){s=r(i,"P",{"data-svelte-h":!0}),p(s)!=="svelte-11lpom8"&&(s.textContent=v),l=n(i),f(m.$$.fragment,i)},m(i,S){h(i,s,S),h(i,l,S),g(m,i,S),y=!0},p:Q,i(i){y||(_(m.$$.fragment,i),y=!0)},o(i){T(m.$$.fragment,i),y=!1},d(i){i&&(c(s),c(l)),b(m,i)}}}function Va($){let s,v;return s=new xo({props:{code:"aW5wdXRzJTVCJTIybGFiZWxzJTIyJTVEJTIwJTNEJTIwcHJvY2Vzc29yKHRleHRfdGFyZ2V0JTNEZGF0YXNldCU1QjAlNUQlNUIlMjJ0ZXh0JTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBJTBBJTIzJTIwY29tcHV0ZSUyMGxvc3MlMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvc3MlMEFyb3VuZChsb3NzLml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text_target=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">19.68</span>`,wrap:!1}}),{c(){u(s.$$.fragment)},l(l){f(s.$$.fragment,l)},m(l,m){g(s,l,m),v=!0},p:Q,i(l){v||(_(s.$$.fragment,l),v=!0)},o(l){T(s.$$.fragment,l),v=!1},d(l){b(s,l)}}}function Ea($){let s,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){s=a("p"),s.innerHTML=v},l(l){s=r(l,"P",{"data-svelte-h":!0}),p(s)!=="svelte-fincs2"&&(s.innerHTML=v)},m(l,m){h(l,s,m)},p:Q,d(l){l&&c(s)}}}function Da($){let s,v="Example:",l,m,y;return m=new xo({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFNwZWVjaFQ1UHJvY2Vzc29yJTJDJTIwU3BlZWNoVDVGb3JUZXh0VG9TcGVlY2glMkMlMjBTcGVlY2hUNUhpZmlHYW4lMkMlMjBzZXRfc2VlZCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBcHJvY2Vzc29yJTIwJTNEJTIwU3BlZWNoVDVQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnNwZWVjaHQ1X3R0cyUyMiklMEFtb2RlbCUyMCUzRCUyMFNwZWVjaFQ1Rm9yVGV4dFRvU3BlZWNoLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZzcGVlY2h0NV90dHMlMjIpJTBBdm9jb2RlciUyMCUzRCUyMFNwZWVjaFQ1SGlmaUdhbi5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGc3BlZWNodDVfaGlmaWdhbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjBwcm9jZXNzb3IodGV4dCUzRCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXNwZWFrZXJfZW1iZWRkaW5ncyUyMCUzRCUyMHRvcmNoLnplcm9zKCgxJTJDJTIwNTEyKSklMjAlMjAlMjMlMjBvciUyMGxvYWQlMjB4dmVjdG9ycyUyMGZyb20lMjBhJTIwZmlsZSUwQSUwQXNldF9zZWVkKDU1NSklMjAlMjAlMjMlMjBtYWtlJTIwZGV0ZXJtaW5pc3RpYyUwQSUwQSUyMyUyMGdlbmVyYXRlJTIwc3BlZWNoJTBBc3BlZWNoJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTJDJTIwc3BlYWtlcl9lbWJlZGRpbmdzJTJDJTIwdm9jb2RlciUzRHZvY29kZXIpJTBBc3BlZWNoLnNoYXBl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechT5Processor, SpeechT5ForTextToSpeech, SpeechT5HifiGan, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = SpeechT5Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/speecht5_tts&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechT5ForTextToSpeech.from_pretrained(<span class="hljs-string">&quot;microsoft/speecht5_tts&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>vocoder = SpeechT5HifiGan.from_pretrained(<span class="hljs-string">&quot;microsoft/speecht5_hifigan&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(text=<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>speaker_embeddings = torch.zeros((<span class="hljs-number">1</span>, <span class="hljs-number">512</span>))  <span class="hljs-comment"># or load xvectors from a file</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">555</span>)  <span class="hljs-comment"># make deterministic</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>speech = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], speaker_embeddings, vocoder=vocoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>speech.shape
torch.Size([<span class="hljs-number">15872</span>])`,wrap:!1}}),{c(){s=a("p"),s.textContent=v,l=o(),u(m.$$.fragment)},l(i){s=r(i,"P",{"data-svelte-h":!0}),p(s)!=="svelte-11lpom8"&&(s.textContent=v),l=n(i),f(m.$$.fragment,i)},m(i,S){h(i,s,S),h(i,l,S),g(m,i,S),y=!0},p:Q,i(i){y||(_(m.$$.fragment,i),y=!0)},o(i){T(m.$$.fragment,i),y=!1},d(i){i&&(c(s),c(l)),b(m,i)}}}function Ba($){let s,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){s=a("p"),s.innerHTML=v},l(l){s=r(l,"P",{"data-svelte-h":!0}),p(s)!=="svelte-fincs2"&&(s.innerHTML=v)},m(l,m){h(l,s,m)},p:Q,d(l){l&&c(s)}}}function Ra($){let s,v="Example:",l,m,y;return m=new xo({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFNwZWVjaFQ1UHJvY2Vzc29yJTJDJTIwU3BlZWNoVDVGb3JTcGVlY2hUb1NwZWVjaCUyQyUyMFNwZWVjaFQ1SGlmaUdhbiUyQyUyMHNldF9zZWVkJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwdG9yY2glMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUwQSUyMCUyMCUyMCUyMCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZGVtbyUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyJTBBKSUyMCUyMCUyMyUyMGRvY3Rlc3QlM0ElMjAlMkJJR05PUkVfUkVTVUxUJTBBZGF0YXNldCUyMCUzRCUyMGRhdGFzZXQuc29ydCglMjJpZCUyMiklMEFzYW1wbGluZ19yYXRlJTIwJTNEJTIwZGF0YXNldC5mZWF0dXJlcyU1QiUyMmF1ZGlvJTIyJTVELnNhbXBsaW5nX3JhdGUlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBTcGVlY2hUNVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGc3BlZWNodDVfdmMlMjIpJTBBbW9kZWwlMjAlM0QlMjBTcGVlY2hUNUZvclNwZWVjaFRvU3BlZWNoLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZzcGVlY2h0NV92YyUyMiklMEF2b2NvZGVyJTIwJTNEJTIwU3BlZWNoVDVIaWZpR2FuLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZzcGVlY2h0NV9oaWZpZ2FuJTIyKSUwQSUwQSUyMyUyMGF1ZGlvJTIwZmlsZSUyMGlzJTIwZGVjb2RlZCUyMG9uJTIwdGhlJTIwZmx5JTBBaW5wdXRzJTIwJTNEJTIwcHJvY2Vzc29yKGF1ZGlvJTNEZGF0YXNldCU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRHNhbXBsaW5nX3JhdGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXNwZWFrZXJfZW1iZWRkaW5ncyUyMCUzRCUyMHRvcmNoLnplcm9zKCgxJTJDJTIwNTEyKSklMjAlMjAlMjMlMjBvciUyMGxvYWQlMjB4dmVjdG9ycyUyMGZyb20lMjBhJTIwZmlsZSUwQSUwQXNldF9zZWVkKDU1NSklMjAlMjAlMjMlMjBtYWtlJTIwZGV0ZXJtaW5pc3RpYyUwQSUwQSUyMyUyMGdlbmVyYXRlJTIwc3BlZWNoJTBBc3BlZWNoJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGVfc3BlZWNoKGlucHV0cyU1QiUyMmlucHV0X3ZhbHVlcyUyMiU1RCUyQyUyMHNwZWFrZXJfZW1iZWRkaW5ncyUyQyUyMHZvY29kZXIlM0R2b2NvZGVyKSUwQXNwZWVjaC5zaGFwZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechT5Processor, SpeechT5ForSpeechToSpeech, SpeechT5HifiGan, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># doctest: +IGNORE_RESULT</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = SpeechT5Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/speecht5_vc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechT5ForSpeechToSpeech.from_pretrained(<span class="hljs-string">&quot;microsoft/speecht5_vc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>vocoder = SpeechT5HifiGan.from_pretrained(<span class="hljs-string">&quot;microsoft/speecht5_hifigan&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(audio=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>speaker_embeddings = torch.zeros((<span class="hljs-number">1</span>, <span class="hljs-number">512</span>))  <span class="hljs-comment"># or load xvectors from a file</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">555</span>)  <span class="hljs-comment"># make deterministic</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>speech = model.generate_speech(inputs[<span class="hljs-string">&quot;input_values&quot;</span>], speaker_embeddings, vocoder=vocoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>speech.shape
torch.Size([<span class="hljs-number">77824</span>])`,wrap:!1}}),{c(){s=a("p"),s.textContent=v,l=o(),u(m.$$.fragment)},l(i){s=r(i,"P",{"data-svelte-h":!0}),p(s)!=="svelte-11lpom8"&&(s.textContent=v),l=n(i),f(m.$$.fragment,i)},m(i,S){h(i,s,S),h(i,l,S),g(m,i,S),y=!0},p:Q,i(i){y||(_(m.$$.fragment,i),y=!0)},o(i){T(m.$$.fragment,i),y=!1},d(i){i&&(c(s),c(l)),b(m,i)}}}function Qa($){let s,v,l,m,y,i,S,Mo,qe,qs='The SpeechT5 model was proposed in <a href="https://arxiv.org/abs/2110.07205" rel="nofollow">SpeechT5: Unified-Modal Encoder-Decoder Pre-Training for Spoken Language Processing</a> by Junyi Ao, Rui Wang, Long Zhou, Chengyi Wang, Shuo Ren, Yu Wu, Shujie Liu, Tom Ko, Qing Li, Yu Zhang, Zhihua Wei, Yao Qian, Jinyu Li, Furu Wei.',zo,je,js="The abstract from the paper is the following:",Fo,Ue,Us="<em>Motivated by the success of T5 (Text-To-Text Transfer Transformer) in pre-trained natural language processing models, we propose a unified-modal SpeechT5 framework that explores the encoder-decoder pre-training for self-supervised speech/text representation learning. The SpeechT5 framework consists of a shared encoder-decoder network and six modal-specific (speech/text) pre/post-nets. After preprocessing the input speech/text through the pre-nets, the shared encoder-decoder network models the sequence-to-sequence transformation, and then the post-nets generate the output in the speech/text modality based on the output of the decoder. Leveraging large-scale unlabeled speech and text data, we pre-train SpeechT5 to learn a unified-modal representation, hoping to improve the modeling capability for both speech and text. To align the textual and speech information into this unified semantic space, we propose a cross-modal vector quantization approach that randomly mixes up speech/text states with latent units as the interface between encoder and decoder. Extensive evaluations show the superiority of the proposed SpeechT5 framework on a wide variety of spoken language processing tasks, including automatic speech recognition, speech synthesis, speech translation, voice conversion, speech enhancement, and speaker identification.</em>",Co,Ne,Ns='This model was contributed by <a href="https://huggingface.co/Matthijs" rel="nofollow">Matthijs</a>. The original code can be found <a href="https://github.com/microsoft/SpeechT5" rel="nofollow">here</a>.',qo,Je,jo,L,Pe,sn,yt,Js=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Model">SpeechT5Model</a>. It is used to instantiate a
SpeechT5 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the SpeechT5
<a href="https://huggingface.co/microsoft/speecht5_asr" rel="nofollow">microsoft/speecht5_asr</a> architecture.`,an,kt,Ps=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,rn,ce,Uo,We,No,G,Ie,cn,wt,Ws=`This is the configuration class to store the configuration of a <code>SpeechT5HifiGanModel</code>. It is used to instantiate
a SpeechT5 HiFi-GAN vocoder model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the SpeechT5
<a href="https://huggingface.co/microsoft/speecht5_hifigan" rel="nofollow">microsoft/speecht5_hifigan</a> architecture.`,dn,xt,Is=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,ln,de,Jo,Ze,Po,F,Le,pn,St,Zs='Construct a SpeechT5 tokenizer. Based on <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.',hn,$t,Ls=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,mn,ie,Ge,un,Mt,Gs=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`,fn,zt,He,gn,Y,Ve,_n,Ft,Hs=`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`,Tn,Ct,Vs="Similar to doing <code>self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))</code>.",bn,le,Ee,vn,qt,Es="Convert a list of lists of token ids into a list of strings by calling decode.",Wo,De,Io,q,Be,yn,jt,Ds="Constructs a SpeechT5 feature extractor.",kn,Ut,Bs=`This class can pre-process a raw speech signal by (optionally) normalizing to zero-mean unit-variance, for use by
the SpeechT5 speech encoder prenet.`,wn,Nt,Rs=`This class can also extract log-mel filter bank features from raw speech, for use by the SpeechT5 speech decoder
prenet.`,xn,Jt,Qs=`This feature extractor inherits from <a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor">SequenceFeatureExtractor</a> which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`,Sn,A,Re,$n,Pt,Os="Main method to featurize and prepare for the model one or several sequence(s).",Mn,Wt,Xs=`Pass in a value for <code>audio</code> to extract waveform features. Pass in a value for <code>audio_target</code> to extract log-mel
spectrogram features.`,Zo,Qe,Lo,M,Oe,zn,It,Ys="Constructs a SpeechT5 processor which wraps a feature extractor and a tokenizer into a single processor.",Fn,Zt,As=`<a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor">SpeechT5Processor</a> offers all the functionalities of <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5FeatureExtractor">SpeechT5FeatureExtractor</a> and <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Tokenizer">SpeechT5Tokenizer</a>. See
the docstring of <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor.__call__"><strong>call</strong>()</a> and <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor.decode">decode()</a> for more information.`,Cn,C,Xe,qn,Lt,Ks="Processes audio and text input, as well as audio and text targets.",jn,Gt,ea=`You can process audio by using the argument <code>audio</code>, or process audio targets by using the argument
<code>audio_target</code>. This forwards the arguments to SpeechT5FeatureExtractor’s
<a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5FeatureExtractor.__call__"><strong>call</strong>()</a>.`,Un,Ht,ta=`You can process text by using the argument <code>text</code>, or process text labels by using the argument <code>text_target</code>.
This forwards the arguments to SpeechT5Tokenizer’s <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__"><strong>call</strong>()</a>.`,Nn,Vt,oa="Valid input combinations are:",Jn,Et,na="<li><code>text</code> only</li> <li><code>audio</code> only</li> <li><code>text_target</code> only</li> <li><code>audio_target</code> only</li> <li><code>text</code> and <code>audio_target</code></li> <li><code>audio</code> and <code>audio_target</code></li> <li><code>text</code> and <code>text_target</code></li> <li><code>audio</code> and <code>text_target</code></li>",Pn,Dt,sa="Please refer to the docstring of the above two methods for more information.",Wn,N,Ye,In,Bt,aa="Collates the audio and text inputs, as well as their targets, into a padded batch.",Zn,Rt,ra=`Audio inputs are padded by SpeechT5FeatureExtractor’s <a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad">pad()</a>. Text inputs are padded
by SpeechT5Tokenizer’s <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad">pad()</a>.`,Ln,Qt,ca="Valid input combinations are:",Gn,Ot,da="<li><code>input_ids</code> only</li> <li><code>input_values</code> only</li> <li><code>labels</code> only, either log-mel spectrograms or text tokens</li> <li><code>input_ids</code> and log-mel spectrogram <code>labels</code></li> <li><code>input_values</code> and text <code>labels</code></li>",Hn,Xt,ia="Please refer to the docstring of the above two methods for more information.",Vn,K,Ae,En,Yt,la="Instantiate a processor associated with a pretrained model.",Dn,pe,Bn,ee,Ke,Rn,At,pa=`Saves the attributes of this processor (feature extractor, tokenizer…) in the specified directory so that it
can be reloaded using the <a href="/docs/transformers/main/en/model_doc/mctct#transformers.MCTCTProcessor.from_pretrained">from_pretrained()</a> method.`,Qn,he,On,me,et,Xn,Kt,ha=`This method forwards all its arguments to SpeechT5Tokenizer’s <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.batch_decode">batch_decode()</a>. Please refer
to the docstring of this method for more information.`,Yn,ue,tt,An,eo,ma=`This method forwards all its arguments to SpeechT5Tokenizer’s <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Tokenizer.decode">decode()</a>. Please refer to
the docstring of this method for more information.`,Go,ot,Ho,H,nt,Kn,to,ua=`The bare SpeechT5 Encoder-Decoder Model outputting raw hidden-states without any specific pre- or post-nets.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,es,oo,fa=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ts,te,st,os,no,ga='The <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Model">SpeechT5Model</a> forward method, overrides the <code>__call__</code> special method.',ns,fe,Vo,at,Eo,V,rt,ss,so,_a=`SpeechT5 Model with a speech encoder and a text decoder.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,as,ao,Ta=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,rs,Z,ct,cs,ro,ba='The <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5ForSpeechToText">SpeechT5ForSpeechToText</a> forward method, overrides the <code>__call__</code> special method.',ds,ge,is,_e,ls,Te,Do,dt,Bo,J,it,ps,co,va=`SpeechT5 Model with a text encoder and a speech decoder.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,hs,io,ya=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ms,D,lt,us,lo,ka='The <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5ForTextToSpeech">SpeechT5ForTextToSpeech</a> forward method, overrides the <code>__call__</code> special method.',fs,be,gs,ve,_s,ye,pt,Ts,po,wa=`Converts a sequence of input tokens into a sequence of mel spectrograms, which are subsequently turned into a
speech waveform using a vocoder.`,Ro,ht,Qo,P,mt,bs,ho,xa=`SpeechT5 Model with a speech encoder and a speech decoder.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,vs,mo,Sa=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ys,B,ut,ks,uo,$a='The <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5ForSpeechToSpeech">SpeechT5ForSpeechToSpeech</a> forward method, overrides the <code>__call__</code> special method.',ws,ke,xs,we,Ss,xe,ft,$s,fo,Ma=`Converts a raw speech waveform into a sequence of mel spectrograms, which are subsequently turned back into a
speech waveform using a vocoder.`,Oo,gt,Xo,E,_t,Ms,go,za=`HiFi-GAN vocoder.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,zs,_o,Fa=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Fs,Se,Tt,Cs,To,Ca=`Converts a log-mel spectrogram into a speech waveform. Passing a batch of log-mel spectrograms returns a batch
of speech waveforms. Passing a single, un-batched log-mel spectrogram returns a single, un-batched speech
waveform.`,Yo,So,Ao;return y=new R({props:{title:"SpeechT5",local:"speecht5",headingTag:"h1"}}),S=new R({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Je=new R({props:{title:"SpeechT5Config",local:"transformers.SpeechT5Config",headingTag:"h2"}}),Pe=new x({props:{name:"class transformers.SpeechT5Config",anchor:"transformers.SpeechT5Config",parameters:[{name:"vocab_size",val:" = 81"},{name:"hidden_size",val:" = 768"},{name:"encoder_layers",val:" = 12"},{name:"encoder_attention_heads",val:" = 12"},{name:"encoder_ffn_dim",val:" = 3072"},{name:"encoder_layerdrop",val:" = 0.1"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 3072"},{name:"decoder_attention_heads",val:" = 12"},{name:"decoder_layerdrop",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"positional_dropout",val:" = 0.1"},{name:"hidden_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"scale_embedding",val:" = False"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"decoder_start_token_id",val:" = 2"},{name:"num_mel_bins",val:" = 80"},{name:"speech_decoder_prenet_layers",val:" = 2"},{name:"speech_decoder_prenet_units",val:" = 256"},{name:"speech_decoder_prenet_dropout",val:" = 0.5"},{name:"speaker_embedding_dim",val:" = 512"},{name:"speech_decoder_postnet_layers",val:" = 5"},{name:"speech_decoder_postnet_units",val:" = 256"},{name:"speech_decoder_postnet_kernel",val:" = 5"},{name:"speech_decoder_postnet_dropout",val:" = 0.5"},{name:"reduction_factor",val:" = 2"},{name:"max_speech_positions",val:" = 4000"},{name:"max_text_positions",val:" = 450"},{name:"encoder_max_relative_position",val:" = 160"},{name:"use_guided_attention_loss",val:" = True"},{name:"guided_attention_loss_num_heads",val:" = 2"},{name:"guided_attention_loss_sigma",val:" = 0.4"},{name:"guided_attention_loss_scale",val:" = 10.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 81) &#x2014;
Vocabulary size of the SpeechT5 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Model">SpeechT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.SpeechT5Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SpeechT5Config.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"encoder_layers"},{anchor:"transformers.SpeechT5Config.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.SpeechT5Config.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.SpeechT5Config.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.SpeechT5Config.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer decoder.`,name:"decoder_layers"},{anchor:"transformers.SpeechT5Config.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.SpeechT5Config.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.SpeechT5Config.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.SpeechT5Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SpeechT5Config.positional_dropout",description:`<strong>positional_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the text position encoding layers.`,name:"positional_dropout"},{anchor:"transformers.SpeechT5Config.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.SpeechT5Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.SpeechT5Config.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.SpeechT5Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SpeechT5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SpeechT5Config.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.SpeechT5Config.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in the speech encoder pre-net. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.SpeechT5Config.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the speech encoder pre-net.`,name:"feat_proj_dropout"},{anchor:"transformers.SpeechT5Config.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.SpeechT5Config.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
speech encoder pre-net. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.SpeechT5Config.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the speech encoder pre-net. The
length of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.SpeechT5Config.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the speech encoder pre-net.
The length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.SpeechT5Config.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.SpeechT5Config.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.SpeechT5Config.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.SpeechT5Config.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the speech encoder pre-net. For
reference see <a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.SpeechT5Config.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.SpeechT5Config.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.SpeechT5Config.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.SpeechT5Config.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.SpeechT5Config.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.SpeechT5Config.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.SpeechT5Config.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
Number of mel features used per input features. Used by the speech decoder pre-net. Should correspond to
the value used in the <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor">SpeechT5Processor</a> class.`,name:"num_mel_bins"},{anchor:"transformers.SpeechT5Config.speech_decoder_prenet_layers",description:`<strong>speech_decoder_prenet_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of layers in the speech decoder pre-net.`,name:"speech_decoder_prenet_layers"},{anchor:"transformers.SpeechT5Config.speech_decoder_prenet_units",description:`<strong>speech_decoder_prenet_units</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the layers in the speech decoder pre-net.`,name:"speech_decoder_prenet_units"},{anchor:"transformers.SpeechT5Config.speech_decoder_prenet_dropout",description:`<strong>speech_decoder_prenet_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
The dropout probability for the speech decoder pre-net layers.`,name:"speech_decoder_prenet_dropout"},{anchor:"transformers.SpeechT5Config.speaker_embedding_dim",description:`<strong>speaker_embedding_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"speaker_embedding_dim"},{anchor:"transformers.SpeechT5Config.speech_decoder_postnet_layers",description:`<strong>speech_decoder_postnet_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Number of layers in the speech decoder post-net.`,name:"speech_decoder_postnet_layers"},{anchor:"transformers.SpeechT5Config.speech_decoder_postnet_units",description:`<strong>speech_decoder_postnet_units</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the layers in the speech decoder post-net.`,name:"speech_decoder_postnet_units"},{anchor:"transformers.SpeechT5Config.speech_decoder_postnet_kernel",description:`<strong>speech_decoder_postnet_kernel</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Number of convolutional filter channels in the speech decoder post-net.`,name:"speech_decoder_postnet_kernel"},{anchor:"transformers.SpeechT5Config.speech_decoder_postnet_dropout",description:`<strong>speech_decoder_postnet_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
The dropout probability for the speech decoder post-net layers.`,name:"speech_decoder_postnet_dropout"},{anchor:"transformers.SpeechT5Config.reduction_factor",description:`<strong>reduction_factor</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Spectrogram length reduction factor for the speech decoder inputs.`,name:"reduction_factor"},{anchor:"transformers.SpeechT5Config.max_speech_positions",description:`<strong>max_speech_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 4000) &#x2014;
The maximum sequence length of speech features that this model might ever be used with.`,name:"max_speech_positions"},{anchor:"transformers.SpeechT5Config.max_text_positions",description:`<strong>max_text_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 450) &#x2014;
The maximum sequence length of text features that this model might ever be used with.`,name:"max_text_positions"},{anchor:"transformers.SpeechT5Config.encoder_max_relative_position",description:`<strong>encoder_max_relative_position</strong> (<code>int</code>, <em>optional</em>, defaults to 160) &#x2014;
Maximum distance for relative position embedding in the encoder.`,name:"encoder_max_relative_position"},{anchor:"transformers.SpeechT5Config.use_guided_attention_loss",description:`<strong>use_guided_attention_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply guided attention loss while training the TTS model.`,name:"use_guided_attention_loss"},{anchor:"transformers.SpeechT5Config.guided_attention_loss_num_heads",description:`<strong>guided_attention_loss_num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of attention heads the guided attention loss will be applied to. Use -1 to apply this loss to all
attention heads.`,name:"guided_attention_loss_num_heads"},{anchor:"transformers.SpeechT5Config.guided_attention_loss_sigma",description:`<strong>guided_attention_loss_sigma</strong> (<code>float</code>, <em>optional</em>, defaults to 0.4) &#x2014;
Standard deviation for guided attention loss.`,name:"guided_attention_loss_sigma"},{anchor:"transformers.SpeechT5Config.guided_attention_loss_scale",description:`<strong>guided_attention_loss_scale</strong> (<code>float</code>, <em>optional</em>, defaults to 10.0) &#x2014;
Scaling coefficient for guided attention loss (also known as lambda).`,name:"guided_attention_loss_scale"},{anchor:"transformers.SpeechT5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/configuration_speecht5.py#L37"}}),ce=new wo({props:{anchor:"transformers.SpeechT5Config.example",$$slots:{default:[Pa]},$$scope:{ctx:$}}}),We=new R({props:{title:"SpeechT5HifiGanConfig",local:"transformers.SpeechT5HifiGanConfig",headingTag:"h2"}}),Ie=new x({props:{name:"class transformers.SpeechT5HifiGanConfig",anchor:"transformers.SpeechT5HifiGanConfig",parameters:[{name:"model_in_dim",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"upsample_initial_channel",val:" = 512"},{name:"upsample_rates",val:" = [4, 4, 4, 4]"},{name:"upsample_kernel_sizes",val:" = [8, 8, 8, 8]"},{name:"resblock_kernel_sizes",val:" = [3, 7, 11]"},{name:"resblock_dilation_sizes",val:" = [[1, 3, 5], [1, 3, 5], [1, 3, 5]]"},{name:"initializer_range",val:" = 0.01"},{name:"leaky_relu_slope",val:" = 0.1"},{name:"normalize_before",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5HifiGanConfig.model_in_dim",description:`<strong>model_in_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
The number of frequency bins in the input log-mel spectrogram.`,name:"model_in_dim"},{anchor:"transformers.SpeechT5HifiGanConfig.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>, defaults to 16000) &#x2014;
The sampling rate at which the output audio will be generated, expressed in hertz (Hz).`,name:"sampling_rate"},{anchor:"transformers.SpeechT5HifiGanConfig.upsample_initial_channel",description:`<strong>upsample_initial_channel</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The number of input channels into the upsampling network.`,name:"upsample_initial_channel"},{anchor:"transformers.SpeechT5HifiGanConfig.upsample_rates",description:`<strong>upsample_rates</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 4, 4, 4]</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the upsampling network. The
length of <em>upsample_rates</em> defines the number of convolutional layers and has to match the length of
<em>upsample_kernel_sizes</em>.`,name:"upsample_rates"},{anchor:"transformers.SpeechT5HifiGanConfig.upsample_kernel_sizes",description:`<strong>upsample_kernel_sizes</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>[8, 8, 8, 8]</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the upsampling network. The
length of <em>upsample_kernel_sizes</em> defines the number of convolutional layers and has to match the length of
<em>upsample_rates</em>.`,name:"upsample_kernel_sizes"},{anchor:"transformers.SpeechT5HifiGanConfig.resblock_kernel_sizes",description:`<strong>resblock_kernel_sizes</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 7, 11]</code>) &#x2014;
A tuple of integers defining the kernel sizes of the 1D convolutional layers in the multi-receptive field
fusion (MRF) module.`,name:"resblock_kernel_sizes"},{anchor:"transformers.SpeechT5HifiGanConfig.resblock_dilation_sizes",description:`<strong>resblock_dilation_sizes</strong> (<code>Tuple[Tuple[int]]</code> or <code>List[List[int]]</code>, <em>optional</em>, defaults to <code>[[1, 3, 5], [1, 3, 5], [1, 3, 5]]</code>) &#x2014;
A nested tuple of integers defining the dilation rates of the dilated 1D convolutional layers in the
multi-receptive field fusion (MRF) module.`,name:"resblock_dilation_sizes"},{anchor:"transformers.SpeechT5HifiGanConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.01) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SpeechT5HifiGanConfig.leaky_relu_slope",description:`<strong>leaky_relu_slope</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The angle of the negative slope used by the leaky ReLU activation.`,name:"leaky_relu_slope"},{anchor:"transformers.SpeechT5HifiGanConfig.normalize_before",description:`<strong>normalize_before</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the spectrogram before vocoding using the vocoder&#x2019;s learned mean and variance.`,name:"normalize_before"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/configuration_speecht5.py#L350"}}),de=new wo({props:{anchor:"transformers.SpeechT5HifiGanConfig.example",$$slots:{default:[Wa]},$$scope:{ctx:$}}}),Ze=new R({props:{title:"SpeechT5Tokenizer",local:"transformers.SpeechT5Tokenizer",headingTag:"h2"}}),Le=new x({props:{name:"class transformers.SpeechT5Tokenizer",anchor:"transformers.SpeechT5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"normalize",val:" = False"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.SpeechT5Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The begin of sequence token.`,name:"bos_token"},{anchor:"transformers.SpeechT5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.SpeechT5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.SpeechT5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.SpeechT5Tokenizer.normalize",description:`<strong>normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to convert numeric quantities in the text to their spelt-out english counterparts.`,name:"normalize"},{anchor:"transformers.SpeechT5Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.SpeechT5Tokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/tokenization_speecht5.py#L48"}}),Ge=new x({props:{name:"__call__",anchor:"transformers.SpeechT5Tokenizer.__call__",parameters:[{name:"text",val:": Union = None"},{name:"text_pair",val:": Union = None"},{name:"text_target",val:": Union = None"},{name:"text_pair_target",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.SpeechT5Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.SpeechT5Tokenizer.__call__.text_target",description:`<strong>text_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_target"},{anchor:"transformers.SpeechT5Tokenizer.__call__.text_pair_target",description:`<strong>text_pair_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair_target"},{anchor:"transformers.SpeechT5Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.SpeechT5Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.SpeechT5Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.SpeechT5Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.SpeechT5Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.SpeechT5Tokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.SpeechT5Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. Requires <code>padding</code> to be activated.
This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.SpeechT5Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.SpeechT5Tokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.SpeechT5Tokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.SpeechT5Tokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.SpeechT5Tokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.SpeechT5Tokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.SpeechT5Tokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.SpeechT5Tokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L2755",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> — List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> — List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>“token_type_ids”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> — List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>“attention_mask”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>overflowing_tokens</strong> — List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> — Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> — List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> — The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),He=new x({props:{name:"save_vocabulary",anchor:"transformers.SpeechT5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/tokenization_speecht5.py#L220"}}),Ve=new x({props:{name:"decode",anchor:"transformers.SpeechT5Tokenizer.decode",parameters:[{name:"token_ids",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5Tokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.SpeechT5Tokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.SpeechT5Tokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.SpeechT5Tokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3752",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded sentence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code></p>
`}}),Ee=new x({props:{name:"batch_decode",anchor:"transformers.SpeechT5Tokenizer.batch_decode",parameters:[{name:"sequences",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5Tokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.SpeechT5Tokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.SpeechT5Tokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.SpeechT5Tokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3718",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of decoded sentences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),De=new R({props:{title:"SpeechT5FeatureExtractor",local:"transformers.SpeechT5FeatureExtractor",headingTag:"h2"}}),Be=new x({props:{name:"class transformers.SpeechT5FeatureExtractor",anchor:"transformers.SpeechT5FeatureExtractor",parameters:[{name:"feature_size",val:": int = 1"},{name:"sampling_rate",val:": int = 16000"},{name:"padding_value",val:": float = 0.0"},{name:"do_normalize",val:": bool = False"},{name:"num_mel_bins",val:": int = 80"},{name:"hop_length",val:": int = 16"},{name:"win_length",val:": int = 64"},{name:"win_function",val:": str = 'hann_window'"},{name:"frame_signal_scale",val:": float = 1.0"},{name:"fmin",val:": float = 80"},{name:"fmax",val:": float = 7600"},{name:"mel_floor",val:": float = 1e-10"},{name:"reduction_factor",val:": int = 2"},{name:"return_attention_mask",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5FeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.SpeechT5FeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in hertz (Hz).`,name:"sampling_rate"},{anchor:"transformers.SpeechT5FeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values.`,name:"padding_value"},{anchor:"transformers.SpeechT5FeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to zero-mean unit-variance normalize the input. Normalizing can help to significantly
improve the performance for some models.`,name:"do_normalize"},{anchor:"transformers.SpeechT5FeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
The number of mel-frequency bins in the extracted spectrogram features.`,name:"num_mel_bins"},{anchor:"transformers.SpeechT5FeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of ms between windows. Otherwise referred to as &#x201C;shift&#x201D; in many papers.`,name:"hop_length"},{anchor:"transformers.SpeechT5FeatureExtractor.win_length",description:`<strong>win_length</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of ms per window.`,name:"win_length"},{anchor:"transformers.SpeechT5FeatureExtractor.win_function",description:`<strong>win_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;hann_window&quot;</code>) &#x2014;
Name for the window function used for windowing, must be accessible via <code>torch.{win_function}</code>`,name:"win_function"},{anchor:"transformers.SpeechT5FeatureExtractor.frame_signal_scale",description:`<strong>frame_signal_scale</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Constant multiplied in creating the frames before applying DFT. This argument is deprecated.`,name:"frame_signal_scale"},{anchor:"transformers.SpeechT5FeatureExtractor.fmin",description:`<strong>fmin</strong> (<code>float</code>, <em>optional</em>, defaults to 80) &#x2014;
Minimum mel frequency in Hz.`,name:"fmin"},{anchor:"transformers.SpeechT5FeatureExtractor.fmax",description:`<strong>fmax</strong> (<code>float</code>, <em>optional</em>, defaults to 7600) &#x2014;
Maximum mel frequency in Hz.`,name:"fmax"},{anchor:"transformers.SpeechT5FeatureExtractor.mel_floor",description:`<strong>mel_floor</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-10) &#x2014;
Minimum value of mel frequency banks.`,name:"mel_floor"},{anchor:"transformers.SpeechT5FeatureExtractor.reduction_factor",description:`<strong>reduction_factor</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Spectrogram length reduction factor. This argument is deprecated.`,name:"reduction_factor"},{anchor:"transformers.SpeechT5FeatureExtractor.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5FeatureExtractor.__call__"><strong>call</strong>()</a> should return <code>attention_mask</code>.`,name:"return_attention_mask"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/feature_extraction_speecht5.py#L31"}}),Re=new x({props:{name:"__call__",anchor:"transformers.SpeechT5FeatureExtractor.__call__",parameters:[{name:"audio",val:": Union = None"},{name:"audio_target",val:": Union = None"},{name:"padding",val:": Union = False"},{name:"max_length",val:": Optional = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"sampling_rate",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5FeatureExtractor.__call__.audio",description:`<strong>audio</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be processed. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values. This outputs waveform features. Must
be mono channel audio, not stereo, i.e. single float per timestep.`,name:"audio"},{anchor:"transformers.SpeechT5FeatureExtractor.__call__.audio_target",description:`<strong>audio_target</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be processed as targets. Each sequence can be a numpy array, a
list of float values, a list of numpy arrays or a list of list of float values. This outputs log-mel
spectrogram features.`,name:"audio_target"},{anchor:"transformers.SpeechT5FeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.SpeechT5FeatureExtractor.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.SpeechT5FeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.SpeechT5FeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.`,name:"pad_to_multiple_of"},{anchor:"transformers.SpeechT5FeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.SpeechT5FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.SpeechT5FeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>audio</code> or <code>audio_target</code> input was sampled. It is strongly recommended
to pass <code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/feature_extraction_speecht5.py#L180"}}),Qe=new R({props:{title:"SpeechT5Processor",local:"transformers.SpeechT5Processor",headingTag:"h2"}}),Oe=new x({props:{name:"class transformers.SpeechT5Processor",anchor:"transformers.SpeechT5Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>SpeechT5FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5FeatureExtractor">SpeechT5FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.SpeechT5Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>SpeechT5Tokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Tokenizer">SpeechT5Tokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/processing_speecht5.py#L20"}}),Xe=new x({props:{name:"__call__",anchor:"transformers.SpeechT5Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/processing_speecht5.py#L40"}}),Ye=new x({props:{name:"pad",anchor:"transformers.SpeechT5Processor.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/processing_speecht5.py#L111"}}),Ae=new x({props:{name:"from_pretrained",anchor:"transformers.SpeechT5Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": Union"},{name:"cache_dir",val:": Union = None"},{name:"force_download",val:": bool = False"},{name:"local_files_only",val:": bool = False"},{name:"token",val:": Union = None"},{name:"revision",val:": str = 'main'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5Processor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/processing_utils.py#L406"}}),pe=new ko({props:{$$slots:{default:[Ia]},$$scope:{ctx:$}}}),Ke=new x({props:{name:"save_pretrained",anchor:"transformers.SpeechT5Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.SpeechT5Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).`,name:"push_to_hub"},{anchor:"transformers.SpeechT5Processor.save_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/processing_utils.py#L167"}}),he=new ko({props:{$$slots:{default:[Za]},$$scope:{ctx:$}}}),et=new x({props:{name:"batch_decode",anchor:"transformers.SpeechT5Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/processing_speecht5.py#L171"}}),tt=new x({props:{name:"decode",anchor:"transformers.SpeechT5Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/processing_speecht5.py#L178"}}),ot=new R({props:{title:"SpeechT5Model",local:"transformers.SpeechT5Model",headingTag:"h2"}}),nt=new x({props:{name:"class transformers.SpeechT5Model",anchor:"transformers.SpeechT5Model",parameters:[{name:"config",val:": SpeechT5Config"},{name:"encoder",val:": Optional = None"},{name:"decoder",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.SpeechT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Config">SpeechT5Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.SpeechT5Model.encoder",description:`<strong>encoder</strong> (<code>SpeechT5EncoderWithSpeechPrenet</code> or <code>SpeechT5EncoderWithTextPrenet</code> or <code>None</code>) &#x2014;
The Transformer encoder module that applies the appropiate speech or text encoder prenet. If <code>None</code>,
<code>SpeechT5EncoderWithoutPrenet</code> will be used and the <code>input_values</code> are assumed to be hidden states.`,name:"encoder"},{anchor:"transformers.SpeechT5Model.decoder",description:`<strong>decoder</strong> (<code>SpeechT5DecoderWithSpeechPrenet</code> or <code>SpeechT5DecoderWithTextPrenet</code> or <code>None</code>) &#x2014;
The Transformer decoder module that applies the appropiate speech or text decoder prenet. If <code>None</code>,
<code>SpeechT5DecoderWithoutPrenet</code> will be used and the <code>decoder_input_values</code> are assumed to be hidden
states.`,name:"decoder"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L2090"}}),st=new x({props:{name:"forward",anchor:"transformers.SpeechT5Model.forward",parameters:[{name:"input_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_values",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"speaker_embeddings",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.SpeechT5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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

					</div>`,name:"attention_mask"},{anchor:"transformers.SpeechT5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_values</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>SpeechT5Decoder._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.SpeechT5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SpeechT5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.SpeechT5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.SpeechT5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.SpeechT5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_values</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_values</code> of shape <code>(batch_size, sequence_length)</code>. decoder_inputs_embeds (<code>torch.FloatTensor</code>
of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing
<code>decoder_input_values</code> you can choose to directly pass an embedded representation. If <code>past_key_values</code> is
used, optionally only the last <code>decoder_inputs_embeds</code> have to be input (see <code>past_key_values</code>). This is
useful if you want more control over how to convert <code>decoder_input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.SpeechT5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.SpeechT5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SpeechT5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SpeechT5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SpeechT5Model.forward.input_values",description:`<strong>input_values</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Depending on which encoder is being used, the <code>input_values</code> are either: float values of the input raw
speech waveform, or indices of input sequence tokens in the vocabulary, or hidden states.`,name:"input_values"},{anchor:"transformers.SpeechT5Model.forward.decoder_input_values",description:`<strong>decoder_input_values</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Depending on which decoder is being used, the <code>decoder_input_values</code> are either: float values of log-mel
filterbank features extracted from the raw speech waveform, or indices of decoder input sequence tokens in
the vocabulary, or hidden states.`,name:"decoder_input_values"},{anchor:"transformers.SpeechT5Model.forward.speaker_embeddings",description:`<strong>speaker_embeddings</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.speaker_embedding_dim)</code>, <em>optional</em>) &#x2014;
Tensor containing the speaker embeddings.`,name:"speaker_embeddings"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L2136",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Config"
>SpeechT5Config</a>) and inputs.</p>
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
`}}),fe=new ko({props:{$$slots:{default:[La]},$$scope:{ctx:$}}}),at=new R({props:{title:"SpeechT5ForSpeechToText",local:"transformers.SpeechT5ForSpeechToText",headingTag:"h2"}}),rt=new x({props:{name:"class transformers.SpeechT5ForSpeechToText",anchor:"transformers.SpeechT5ForSpeechToText",parameters:[{name:"config",val:": SpeechT5Config"}],parametersDescription:[{anchor:"transformers.SpeechT5ForSpeechToText.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Config">SpeechT5Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L2238"}}),ct=new x({props:{name:"forward",anchor:"transformers.SpeechT5ForSpeechToText.forward",parameters:[{name:"input_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.SpeechT5ForSpeechToText.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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

					</div>`,name:"attention_mask"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_values</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>SpeechT5Decoder._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_values</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_values</code> of shape <code>(batch_size, sequence_length)</code>. decoder_inputs_embeds (<code>torch.FloatTensor</code>
of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing
<code>decoder_input_values</code> you can choose to directly pass an embedded representation. If <code>past_key_values</code> is
used, optionally only the last <code>decoder_inputs_embeds</code> have to be input (see <code>past_key_values</code>). This is
useful if you want more control over how to convert <code>decoder_input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor">SpeechT5Processor</a> should be used for padding
and conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor.__call__">SpeechT5Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Tokenizer">SpeechT5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechT5 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.SpeechT5ForSpeechToText.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.</p>
<p>Label indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Tokenizer">SpeechT5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L2284",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Config"
>SpeechT5Config</a>) and inputs.</p>
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
`}}),ge=new ko({props:{$$slots:{default:[Ga]},$$scope:{ctx:$}}}),_e=new wo({props:{anchor:"transformers.SpeechT5ForSpeechToText.forward.example",$$slots:{default:[Ha]},$$scope:{ctx:$}}}),Te=new wo({props:{anchor:"transformers.SpeechT5ForSpeechToText.forward.example-2",$$slots:{default:[Va]},$$scope:{ctx:$}}}),dt=new R({props:{title:"SpeechT5ForTextToSpeech",local:"transformers.SpeechT5ForTextToSpeech",headingTag:"h2"}}),it=new x({props:{name:"class transformers.SpeechT5ForTextToSpeech",anchor:"transformers.SpeechT5ForTextToSpeech",parameters:[{name:"config",val:": SpeechT5Config"}],parametersDescription:[{anchor:"transformers.SpeechT5ForTextToSpeech.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Config">SpeechT5Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L2602"}}),lt=new x({props:{name:"forward",anchor:"transformers.SpeechT5ForTextToSpeech.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_values",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"speaker_embeddings",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"stop_labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.SpeechT5ForTextToSpeech.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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

					</div>`,name:"attention_mask"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_values</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>SpeechT5Decoder._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_values</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_values</code> of shape <code>(batch_size, sequence_length)</code>. decoder_inputs_embeds (<code>torch.FloatTensor</code>
of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing
<code>decoder_input_values</code> you can choose to directly pass an embedded representation. If <code>past_key_values</code> is
used, optionally only the last <code>decoder_inputs_embeds</code> have to be input (see <code>past_key_values</code>). This is
useful if you want more control over how to convert <code>decoder_input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Tokenizer">SpeechT5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__"><strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.decoder_input_values",description:`<strong>decoder_input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_mel_bins)</code>) &#x2014;
Float values of input mel spectrogram.</p>
<p>SpeechT5 uses an all-zero spectrum as the starting token for <code>decoder_input_values</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_values</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_values"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.speaker_embeddings",description:`<strong>speaker_embeddings</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.speaker_embedding_dim)</code>, <em>optional</em>) &#x2014;
Tensor containing the speaker embeddings.`,name:"speaker_embeddings"},{anchor:"transformers.SpeechT5ForTextToSpeech.forward.labels",description:`<strong>labels</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_mel_bins)</code>, <em>optional</em>) &#x2014;
Float values of target mel spectrogram. Timesteps set to <code>-100.0</code> are ignored (masked) for the loss
computation. Spectrograms can be obtained using <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor">SpeechT5Processor</a>. See <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor.__call__">SpeechT5Processor.<strong>call</strong>()</a>
for details.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L2635",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSpectrogramOutput"
>transformers.modeling_outputs.Seq2SeqSpectrogramOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Config"
>SpeechT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Spectrogram generation loss.</p>
</li>
<li>
<p><strong>spectrogram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_bins)</code>) — The predicted spectrogram.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSpectrogramOutput"
>transformers.modeling_outputs.Seq2SeqSpectrogramOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),be=new ko({props:{$$slots:{default:[Ea]},$$scope:{ctx:$}}}),ve=new wo({props:{anchor:"transformers.SpeechT5ForTextToSpeech.forward.example",$$slots:{default:[Da]},$$scope:{ctx:$}}}),pt=new x({props:{name:"generate",anchor:"transformers.SpeechT5ForTextToSpeech.generate",parameters:[{name:"input_ids",val:": LongTensor"},{name:"attention_mask",val:": Optional = None"},{name:"speaker_embeddings",val:": Optional = None"},{name:"threshold",val:": float = 0.5"},{name:"minlenratio",val:": float = 0.0"},{name:"maxlenratio",val:": float = 20.0"},{name:"vocoder",val:": Optional = None"},{name:"output_cross_attentions",val:": bool = False"},{name:"return_output_lengths",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SpeechT5ForTextToSpeech.generate.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Tokenizer">SpeechT5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__"><strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SpeechT5ForTextToSpeech.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Attention mask from the tokenizer, required for batched inference to signal to the model where to
ignore padded tokens from the input_ids.`,name:"attention_mask"},{anchor:"transformers.SpeechT5ForTextToSpeech.generate.speaker_embeddings",description:`<strong>speaker_embeddings</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.speaker_embedding_dim)</code>, <em>optional</em>) &#x2014;
Tensor containing the speaker embeddings.`,name:"speaker_embeddings"},{anchor:"transformers.SpeechT5ForTextToSpeech.generate.threshold",description:`<strong>threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
The generated sequence ends when the predicted stop token probability exceeds this value.`,name:"threshold"},{anchor:"transformers.SpeechT5ForTextToSpeech.generate.minlenratio",description:`<strong>minlenratio</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Used to calculate the minimum required length for the output sequence.`,name:"minlenratio"},{anchor:"transformers.SpeechT5ForTextToSpeech.generate.maxlenratio",description:`<strong>maxlenratio</strong> (<code>float</code>, <em>optional</em>, defaults to 20.0) &#x2014;
Used to calculate the maximum allowed length for the output sequence.`,name:"maxlenratio"},{anchor:"transformers.SpeechT5ForTextToSpeech.generate.vocoder",description:`<strong>vocoder</strong> (<code>nn.Module</code>, <em>optional</em>) &#x2014;
The vocoder that converts the mel spectrogram into a speech waveform. If <code>None</code>, the output is the mel
spectrogram.`,name:"vocoder"},{anchor:"transformers.SpeechT5ForTextToSpeech.generate.output_cross_attentions",description:`<strong>output_cross_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of the decoder&#x2019;s cross-attention layers.`,name:"output_cross_attentions"},{anchor:"transformers.SpeechT5ForTextToSpeech.generate.return_output_lengths",description:`<strong>return_output_lengths</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the concrete spectrogram/waveform lengths.`,name:"return_output_lengths"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L2755",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<ul>
<li>when <code>return_output_lengths</code> is False<ul>
<li><strong>spectrogram</strong> (<em>optional</em>, returned when no <code>vocoder</code> is provided) <code>torch.FloatTensor</code> of shape
<code>(output_sequence_length, config.num_mel_bins)</code> — The predicted log-mel spectrogram.</li>
<li><strong>waveform</strong> (<em>optional</em>, returned when a <code>vocoder</code> is provided) <code>torch.FloatTensor</code> of shape
<code>(num_frames,)</code> — The predicted speech waveform.</li>
<li><strong>cross_attentions</strong> (<em>optional</em>, returned when <code>output_cross_attentions</code> is <code>True</code>)
<code>torch.FloatTensor</code> of shape <code>(config.decoder_layers, config.decoder_attention_heads, output_sequence_length, input_sequence_length)</code> — The outputs of the decoder’s cross-attention layers.</li>
</ul></li>
<li>when <code>return_output_lengths</code> is True<ul>
<li><strong>spectrograms</strong> (<em>optional</em>, returned when no <code>vocoder</code> is provided) <code>torch.FloatTensor</code> of shape
<code>(batch_size, output_sequence_length, config.num_mel_bins)</code> — The predicted log-mel spectrograms that
are padded to the maximum length.</li>
<li><strong>spectrogram_lengths</strong> (<em>optional</em>, returned when no <code>vocoder</code> is provided) <code>List[Int]</code> — A list of
all the concrete lengths for each spectrogram.</li>
<li><strong>waveforms</strong> (<em>optional</em>, returned when a <code>vocoder</code> is provided) <code>torch.FloatTensor</code> of shape
<code>(batch_size, num_frames)</code> — The predicted speech waveforms that are padded to the maximum length.</li>
<li><strong>waveform_lengths</strong> (<em>optional</em>, returned when a <code>vocoder</code> is provided) <code>List[Int]</code> — A list of all
the concrete lengths for each waveform.</li>
<li><strong>cross_attentions</strong> (<em>optional</em>, returned when <code>output_cross_attentions</code> is <code>True</code>)
<code>torch.FloatTensor</code> of shape <code>(batch_size, config.decoder_layers, config.decoder_attention_heads, output_sequence_length, input_sequence_length)</code> — The outputs of the decoder’s cross-attention layers.</li>
</ul></li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>tuple(torch.FloatTensor)</code> comprising various elements depending on the inputs</p>
`}}),ht=new R({props:{title:"SpeechT5ForSpeechToSpeech",local:"transformers.SpeechT5ForSpeechToSpeech",headingTag:"h2"}}),mt=new x({props:{name:"class transformers.SpeechT5ForSpeechToSpeech",anchor:"transformers.SpeechT5ForSpeechToSpeech",parameters:[{name:"config",val:": SpeechT5Config"}],parametersDescription:[{anchor:"transformers.SpeechT5ForSpeechToSpeech.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Config">SpeechT5Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L2944"}}),ut=new x({props:{name:"forward",anchor:"transformers.SpeechT5ForSpeechToSpeech.forward",parameters:[{name:"input_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_values",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"speaker_embeddings",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"stop_labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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

					</div>`,name:"attention_mask"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_values</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>SpeechT5Decoder._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_values</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_values</code> of shape <code>(batch_size, sequence_length)</code>. decoder_inputs_embeds (<code>torch.FloatTensor</code>
of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing
<code>decoder_input_values</code> you can choose to directly pass an embedded representation. If <code>past_key_values</code> is
used, optionally only the last <code>decoder_inputs_embeds</code> have to be input (see <code>past_key_values</code>). This is
useful if you want more control over how to convert <code>decoder_input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor">SpeechT5Processor</a> should be used for padding
and conversion into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor.__call__">SpeechT5Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.decoder_input_values",description:`<strong>decoder_input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_mel_bins)</code>) &#x2014;
Float values of input mel spectrogram.</p>
<p>SpeechT5 uses an all-zero spectrum as the starting token for <code>decoder_input_values</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_values</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_values"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.speaker_embeddings",description:`<strong>speaker_embeddings</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.speaker_embedding_dim)</code>, <em>optional</em>) &#x2014;
Tensor containing the speaker embeddings.`,name:"speaker_embeddings"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.labels",description:`<strong>labels</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_mel_bins)</code>, <em>optional</em>) &#x2014;
Float values of target mel spectrogram. Spectrograms can be obtained using <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor">SpeechT5Processor</a>. See
<a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor.__call__">SpeechT5Processor.<strong>call</strong>()</a> for details.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L2974",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSpectrogramOutput"
>transformers.modeling_outputs.Seq2SeqSpectrogramOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Config"
>SpeechT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Spectrogram generation loss.</p>
</li>
<li>
<p><strong>spectrogram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_bins)</code>) — The predicted spectrogram.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSpectrogramOutput"
>transformers.modeling_outputs.Seq2SeqSpectrogramOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ke=new ko({props:{$$slots:{default:[Ba]},$$scope:{ctx:$}}}),we=new wo({props:{anchor:"transformers.SpeechT5ForSpeechToSpeech.forward.example",$$slots:{default:[Ra]},$$scope:{ctx:$}}}),ft=new x({props:{name:"generate_speech",anchor:"transformers.SpeechT5ForSpeechToSpeech.generate_speech",parameters:[{name:"input_values",val:": FloatTensor"},{name:"speaker_embeddings",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"threshold",val:": float = 0.5"},{name:"minlenratio",val:": float = 0.0"},{name:"maxlenratio",val:": float = 20.0"},{name:"vocoder",val:": Optional = None"},{name:"output_cross_attentions",val:": bool = False"},{name:"return_output_lengths",val:": bool = False"}],parametersDescription:[{anchor:"transformers.SpeechT5ForSpeechToSpeech.generate_speech.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform.</p>
<p>Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file into an array of type <code>List[float]</code> or
a <code>numpy.ndarray</code>, <em>e.g.</em> via the soundfile library (<em>pip install soundfile</em>). To prepare the array
into <code>input_values</code>, the <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor">SpeechT5Processor</a> should be used for padding and conversion into a tensor
of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Processor.__call__">SpeechT5Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.generate_speech.speaker_embeddings",description:`<strong>speaker_embeddings</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.speaker_embedding_dim)</code>, <em>optional</em>) &#x2014;
Tensor containing the speaker embeddings.`,name:"speaker_embeddings"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.generate_speech.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.generate_speech.threshold",description:`<strong>threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
The generated sequence ends when the predicted stop token probability exceeds this value.`,name:"threshold"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.generate_speech.minlenratio",description:`<strong>minlenratio</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Used to calculate the minimum required length for the output sequence.`,name:"minlenratio"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.generate_speech.maxlenratio",description:`<strong>maxlenratio</strong> (<code>float</code>, <em>optional</em>, defaults to 20.0) &#x2014;
Used to calculate the maximum allowed length for the output sequence.`,name:"maxlenratio"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.generate_speech.vocoder",description:`<strong>vocoder</strong> (<code>nn.Module</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The vocoder that converts the mel spectrogram into a speech waveform. If <code>None</code>, the output is the mel
spectrogram.`,name:"vocoder"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.generate_speech.output_cross_attentions",description:`<strong>output_cross_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of the decoder&#x2019;s cross-attention layers.`,name:"output_cross_attentions"},{anchor:"transformers.SpeechT5ForSpeechToSpeech.generate_speech.return_output_lengths",description:`<strong>return_output_lengths</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the concrete spectrogram/waveform lengths.`,name:"return_output_lengths"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L3088",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<ul>
<li>when <code>return_output_lengths</code> is False<ul>
<li><strong>spectrogram</strong> (<em>optional</em>, returned when no <code>vocoder</code> is provided) <code>torch.FloatTensor</code> of shape
<code>(output_sequence_length, config.num_mel_bins)</code> — The predicted log-mel spectrogram.</li>
<li><strong>waveform</strong> (<em>optional</em>, returned when a <code>vocoder</code> is provided) <code>torch.FloatTensor</code> of shape
<code>(num_frames,)</code> — The predicted speech waveform.</li>
<li><strong>cross_attentions</strong> (<em>optional</em>, returned when <code>output_cross_attentions</code> is <code>True</code>)
<code>torch.FloatTensor</code> of shape <code>(config.decoder_layers, config.decoder_attention_heads, output_sequence_length, input_sequence_length)</code> — The outputs of the decoder’s cross-attention layers.</li>
</ul></li>
<li>when <code>return_output_lengths</code> is True<ul>
<li><strong>spectrograms</strong> (<em>optional</em>, returned when no <code>vocoder</code> is provided) <code>torch.FloatTensor</code> of shape
<code>(batch_size, output_sequence_length, config.num_mel_bins)</code> — The predicted log-mel spectrograms that
are padded to the maximum length.</li>
<li><strong>spectrogram_lengths</strong> (<em>optional</em>, returned when no <code>vocoder</code> is provided) <code>List[Int]</code> — A list of
all the concrete lengths for each spectrogram.</li>
<li><strong>waveforms</strong> (<em>optional</em>, returned when a <code>vocoder</code> is provided) <code>torch.FloatTensor</code> of shape
<code>(batch_size, num_frames)</code> — The predicted speech waveforms that are padded to the maximum length.</li>
<li><strong>waveform_lengths</strong> (<em>optional</em>, returned when a <code>vocoder</code> is provided) <code>List[Int]</code> — A list of all
the concrete lengths for each waveform.</li>
<li><strong>cross_attentions</strong> (<em>optional</em>, returned when <code>output_cross_attentions</code> is <code>True</code>)
<code>torch.FloatTensor</code> of shape <code>(batch_size, config.decoder_layers, config.decoder_attention_heads, output_sequence_length, input_sequence_length)</code> — The outputs of the decoder’s cross-attention layers.</li>
</ul></li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>tuple(torch.FloatTensor)</code> comprising various elements depending on the inputs</p>
`}}),gt=new R({props:{title:"SpeechT5HifiGan",local:"transformers.SpeechT5HifiGan",headingTag:"h2"}}),_t=new x({props:{name:"class transformers.SpeechT5HifiGan",anchor:"transformers.SpeechT5HifiGan",parameters:[{name:"config",val:": SpeechT5HifiGanConfig"}],parametersDescription:[{anchor:"transformers.SpeechT5HifiGan.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5HifiGanConfig">SpeechT5HifiGanConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L3253"}}),Tt=new x({props:{name:"forward",anchor:"transformers.SpeechT5HifiGan.forward",parameters:[{name:"spectrogram",val:": FloatTensor"}],parametersDescription:[{anchor:"transformers.SpeechT5HifiGan.forward.spectrogram",description:`<strong>spectrogram</strong> (<code>torch.FloatTensor</code>) &#x2014;
Tensor containing the log-mel spectrograms. Can be batched and of shape <code>(batch_size, sequence_length, config.model_in_dim)</code>, or un-batched and of shape <code>(sequence_length, config.model_in_dim)</code>.`,name:"spectrogram"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speecht5/modeling_speecht5.py#L3322",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Tensor containing the speech waveform. If the input spectrogram is batched, will be of
shape <code>(batch_size, num_frames,)</code>. If un-batched, will be of shape <code>(num_frames,)</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>torch.FloatTensor</code></p>
`}}),{c(){s=a("meta"),v=o(),l=a("p"),m=o(),u(y.$$.fragment),i=o(),u(S.$$.fragment),Mo=o(),qe=a("p"),qe.innerHTML=qs,zo=o(),je=a("p"),je.textContent=js,Fo=o(),Ue=a("p"),Ue.innerHTML=Us,Co=o(),Ne=a("p"),Ne.innerHTML=Ns,qo=o(),u(Je.$$.fragment),jo=o(),L=a("div"),u(Pe.$$.fragment),sn=o(),yt=a("p"),yt.innerHTML=Js,an=o(),kt=a("p"),kt.innerHTML=Ps,rn=o(),u(ce.$$.fragment),Uo=o(),u(We.$$.fragment),No=o(),G=a("div"),u(Ie.$$.fragment),cn=o(),wt=a("p"),wt.innerHTML=Ws,dn=o(),xt=a("p"),xt.innerHTML=Is,ln=o(),u(de.$$.fragment),Jo=o(),u(Ze.$$.fragment),Po=o(),F=a("div"),u(Le.$$.fragment),pn=o(),St=a("p"),St.innerHTML=Zs,hn=o(),$t=a("p"),$t.innerHTML=Ls,mn=o(),ie=a("div"),u(Ge.$$.fragment),un=o(),Mt=a("p"),Mt.textContent=Gs,fn=o(),zt=a("div"),u(He.$$.fragment),gn=o(),Y=a("div"),u(Ve.$$.fragment),_n=o(),Ft=a("p"),Ft.textContent=Hs,Tn=o(),Ct=a("p"),Ct.innerHTML=Vs,bn=o(),le=a("div"),u(Ee.$$.fragment),vn=o(),qt=a("p"),qt.textContent=Es,Wo=o(),u(De.$$.fragment),Io=o(),q=a("div"),u(Be.$$.fragment),yn=o(),jt=a("p"),jt.textContent=Ds,kn=o(),Ut=a("p"),Ut.textContent=Bs,wn=o(),Nt=a("p"),Nt.textContent=Rs,xn=o(),Jt=a("p"),Jt.innerHTML=Qs,Sn=o(),A=a("div"),u(Re.$$.fragment),$n=o(),Pt=a("p"),Pt.textContent=Os,Mn=o(),Wt=a("p"),Wt.innerHTML=Xs,Zo=o(),u(Qe.$$.fragment),Lo=o(),M=a("div"),u(Oe.$$.fragment),zn=o(),It=a("p"),It.textContent=Ys,Fn=o(),Zt=a("p"),Zt.innerHTML=As,Cn=o(),C=a("div"),u(Xe.$$.fragment),qn=o(),Lt=a("p"),Lt.textContent=Ks,jn=o(),Gt=a("p"),Gt.innerHTML=ea,Un=o(),Ht=a("p"),Ht.innerHTML=ta,Nn=o(),Vt=a("p"),Vt.textContent=oa,Jn=o(),Et=a("ul"),Et.innerHTML=na,Pn=o(),Dt=a("p"),Dt.textContent=sa,Wn=o(),N=a("div"),u(Ye.$$.fragment),In=o(),Bt=a("p"),Bt.textContent=aa,Zn=o(),Rt=a("p"),Rt.innerHTML=ra,Ln=o(),Qt=a("p"),Qt.textContent=ca,Gn=o(),Ot=a("ul"),Ot.innerHTML=da,Hn=o(),Xt=a("p"),Xt.textContent=ia,Vn=o(),K=a("div"),u(Ae.$$.fragment),En=o(),Yt=a("p"),Yt.textContent=la,Dn=o(),u(pe.$$.fragment),Bn=o(),ee=a("div"),u(Ke.$$.fragment),Rn=o(),At=a("p"),At.innerHTML=pa,Qn=o(),u(he.$$.fragment),On=o(),me=a("div"),u(et.$$.fragment),Xn=o(),Kt=a("p"),Kt.innerHTML=ha,Yn=o(),ue=a("div"),u(tt.$$.fragment),An=o(),eo=a("p"),eo.innerHTML=ma,Go=o(),u(ot.$$.fragment),Ho=o(),H=a("div"),u(nt.$$.fragment),Kn=o(),to=a("p"),to.innerHTML=ua,es=o(),oo=a("p"),oo.innerHTML=fa,ts=o(),te=a("div"),u(st.$$.fragment),os=o(),no=a("p"),no.innerHTML=ga,ns=o(),u(fe.$$.fragment),Vo=o(),u(at.$$.fragment),Eo=o(),V=a("div"),u(rt.$$.fragment),ss=o(),so=a("p"),so.innerHTML=_a,as=o(),ao=a("p"),ao.innerHTML=Ta,rs=o(),Z=a("div"),u(ct.$$.fragment),cs=o(),ro=a("p"),ro.innerHTML=ba,ds=o(),u(ge.$$.fragment),is=o(),u(_e.$$.fragment),ls=o(),u(Te.$$.fragment),Do=o(),u(dt.$$.fragment),Bo=o(),J=a("div"),u(it.$$.fragment),ps=o(),co=a("p"),co.innerHTML=va,hs=o(),io=a("p"),io.innerHTML=ya,ms=o(),D=a("div"),u(lt.$$.fragment),us=o(),lo=a("p"),lo.innerHTML=ka,fs=o(),u(be.$$.fragment),gs=o(),u(ve.$$.fragment),_s=o(),ye=a("div"),u(pt.$$.fragment),Ts=o(),po=a("p"),po.textContent=wa,Ro=o(),u(ht.$$.fragment),Qo=o(),P=a("div"),u(mt.$$.fragment),bs=o(),ho=a("p"),ho.innerHTML=xa,vs=o(),mo=a("p"),mo.innerHTML=Sa,ys=o(),B=a("div"),u(ut.$$.fragment),ks=o(),uo=a("p"),uo.innerHTML=$a,ws=o(),u(ke.$$.fragment),xs=o(),u(we.$$.fragment),Ss=o(),xe=a("div"),u(ft.$$.fragment),$s=o(),fo=a("p"),fo.textContent=Ma,Oo=o(),u(gt.$$.fragment),Xo=o(),E=a("div"),u(_t.$$.fragment),Ms=o(),go=a("p"),go.innerHTML=za,zs=o(),_o=a("p"),_o.innerHTML=Fa,Fs=o(),Se=a("div"),u(Tt.$$.fragment),Cs=o(),To=a("p"),To.textContent=Ca,Yo=o(),So=a("p"),this.h()},l(e){const d=Ja("svelte-u9bgzb",document.head);s=r(d,"META",{name:!0,content:!0}),d.forEach(c),v=n(e),l=r(e,"P",{}),k(l).forEach(c),m=n(e),f(y.$$.fragment,e),i=n(e),f(S.$$.fragment,e),Mo=n(e),qe=r(e,"P",{"data-svelte-h":!0}),p(qe)!=="svelte-17b0ned"&&(qe.innerHTML=qs),zo=n(e),je=r(e,"P",{"data-svelte-h":!0}),p(je)!=="svelte-vfdo9a"&&(je.textContent=js),Fo=n(e),Ue=r(e,"P",{"data-svelte-h":!0}),p(Ue)!=="svelte-y5xjl8"&&(Ue.innerHTML=Us),Co=n(e),Ne=r(e,"P",{"data-svelte-h":!0}),p(Ne)!=="svelte-th5lle"&&(Ne.innerHTML=Ns),qo=n(e),f(Je.$$.fragment,e),jo=n(e),L=r(e,"DIV",{class:!0});var O=k(L);f(Pe.$$.fragment,O),sn=n(O),yt=r(O,"P",{"data-svelte-h":!0}),p(yt)!=="svelte-1e78gbu"&&(yt.innerHTML=Js),an=n(O),kt=r(O,"P",{"data-svelte-h":!0}),p(kt)!=="svelte-o55m63"&&(kt.innerHTML=Ps),rn=n(O),f(ce.$$.fragment,O),O.forEach(c),Uo=n(e),f(We.$$.fragment,e),No=n(e),G=r(e,"DIV",{class:!0});var X=k(G);f(Ie.$$.fragment,X),cn=n(X),wt=r(X,"P",{"data-svelte-h":!0}),p(wt)!=="svelte-q7odiy"&&(wt.innerHTML=Ws),dn=n(X),xt=r(X,"P",{"data-svelte-h":!0}),p(xt)!=="svelte-o55m63"&&(xt.innerHTML=Is),ln=n(X),f(de.$$.fragment,X),X.forEach(c),Jo=n(e),f(Ze.$$.fragment,e),Po=n(e),F=r(e,"DIV",{class:!0});var j=k(F);f(Le.$$.fragment,j),pn=n(j),St=r(j,"P",{"data-svelte-h":!0}),p(St)!=="svelte-13guiap"&&(St.innerHTML=Zs),hn=n(j),$t=r(j,"P",{"data-svelte-h":!0}),p($t)!=="svelte-1c3t5ty"&&($t.innerHTML=Ls),mn=n(j),ie=r(j,"DIV",{class:!0});var bt=k(ie);f(Ge.$$.fragment,bt),un=n(bt),Mt=r(bt,"P",{"data-svelte-h":!0}),p(Mt)!=="svelte-kpxj0c"&&(Mt.textContent=Gs),bt.forEach(c),fn=n(j),zt=r(j,"DIV",{class:!0});var $o=k(zt);f(He.$$.fragment,$o),$o.forEach(c),gn=n(j),Y=r(j,"DIV",{class:!0});var ae=k(Y);f(Ve.$$.fragment,ae),_n=n(ae),Ft=r(ae,"P",{"data-svelte-h":!0}),p(Ft)!=="svelte-vbfkpu"&&(Ft.textContent=Hs),Tn=n(ae),Ct=r(ae,"P",{"data-svelte-h":!0}),p(Ct)!=="svelte-125uxon"&&(Ct.innerHTML=Vs),ae.forEach(c),bn=n(j),le=r(j,"DIV",{class:!0});var vt=k(le);f(Ee.$$.fragment,vt),vn=n(vt),qt=r(vt,"P",{"data-svelte-h":!0}),p(qt)!=="svelte-1deng2j"&&(qt.textContent=Es),vt.forEach(c),j.forEach(c),Wo=n(e),f(De.$$.fragment,e),Io=n(e),q=r(e,"DIV",{class:!0});var W=k(q);f(Be.$$.fragment,W),yn=n(W),jt=r(W,"P",{"data-svelte-h":!0}),p(jt)!=="svelte-hytttm"&&(jt.textContent=Ds),kn=n(W),Ut=r(W,"P",{"data-svelte-h":!0}),p(Ut)!=="svelte-9t836v"&&(Ut.textContent=Bs),wn=n(W),Nt=r(W,"P",{"data-svelte-h":!0}),p(Nt)!=="svelte-10431qd"&&(Nt.textContent=Rs),xn=n(W),Jt=r(W,"P",{"data-svelte-h":!0}),p(Jt)!=="svelte-3gz575"&&(Jt.innerHTML=Qs),Sn=n(W),A=r(W,"DIV",{class:!0});var re=k(A);f(Re.$$.fragment,re),$n=n(re),Pt=r(re,"P",{"data-svelte-h":!0}),p(Pt)!=="svelte-1a6wgfx"&&(Pt.textContent=Os),Mn=n(re),Wt=r(re,"P",{"data-svelte-h":!0}),p(Wt)!=="svelte-8yitl9"&&(Wt.innerHTML=Xs),re.forEach(c),W.forEach(c),Zo=n(e),f(Qe.$$.fragment,e),Lo=n(e),M=r(e,"DIV",{class:!0});var z=k(M);f(Oe.$$.fragment,z),zn=n(z),It=r(z,"P",{"data-svelte-h":!0}),p(It)!=="svelte-1b2vd31"&&(It.textContent=Ys),Fn=n(z),Zt=r(z,"P",{"data-svelte-h":!0}),p(Zt)!=="svelte-ow0o3c"&&(Zt.innerHTML=As),Cn=n(z),C=r(z,"DIV",{class:!0});var U=k(C);f(Xe.$$.fragment,U),qn=n(U),Lt=r(U,"P",{"data-svelte-h":!0}),p(Lt)!=="svelte-ocqtg9"&&(Lt.textContent=Ks),jn=n(U),Gt=r(U,"P",{"data-svelte-h":!0}),p(Gt)!=="svelte-145rmpy"&&(Gt.innerHTML=ea),Un=n(U),Ht=r(U,"P",{"data-svelte-h":!0}),p(Ht)!=="svelte-4myqog"&&(Ht.innerHTML=ta),Nn=n(U),Vt=r(U,"P",{"data-svelte-h":!0}),p(Vt)!=="svelte-bjsvki"&&(Vt.textContent=oa),Jn=n(U),Et=r(U,"UL",{"data-svelte-h":!0}),p(Et)!=="svelte-1gayspi"&&(Et.innerHTML=na),Pn=n(U),Dt=r(U,"P",{"data-svelte-h":!0}),p(Dt)!=="svelte-ws0hzs"&&(Dt.textContent=sa),U.forEach(c),Wn=n(z),N=r(z,"DIV",{class:!0});var I=k(N);f(Ye.$$.fragment,I),In=n(I),Bt=r(I,"P",{"data-svelte-h":!0}),p(Bt)!=="svelte-1n59xk4"&&(Bt.textContent=aa),Zn=n(I),Rt=r(I,"P",{"data-svelte-h":!0}),p(Rt)!=="svelte-1y0dk8c"&&(Rt.innerHTML=ra),Ln=n(I),Qt=r(I,"P",{"data-svelte-h":!0}),p(Qt)!=="svelte-bjsvki"&&(Qt.textContent=ca),Gn=n(I),Ot=r(I,"UL",{"data-svelte-h":!0}),p(Ot)!=="svelte-25scwy"&&(Ot.innerHTML=da),Hn=n(I),Xt=r(I,"P",{"data-svelte-h":!0}),p(Xt)!=="svelte-ws0hzs"&&(Xt.textContent=ia),I.forEach(c),Vn=n(z),K=r(z,"DIV",{class:!0});var bo=k(K);f(Ae.$$.fragment,bo),En=n(bo),Yt=r(bo,"P",{"data-svelte-h":!0}),p(Yt)!=="svelte-1cj8dcb"&&(Yt.textContent=la),Dn=n(bo),f(pe.$$.fragment,bo),bo.forEach(c),Bn=n(z),ee=r(z,"DIV",{class:!0});var vo=k(ee);f(Ke.$$.fragment,vo),Rn=n(vo),At=r(vo,"P",{"data-svelte-h":!0}),p(At)!=="svelte-pd1tp5"&&(At.innerHTML=pa),Qn=n(vo),f(he.$$.fragment,vo),vo.forEach(c),On=n(z),me=r(z,"DIV",{class:!0});var Ko=k(me);f(et.$$.fragment,Ko),Xn=n(Ko),Kt=r(Ko,"P",{"data-svelte-h":!0}),p(Kt)!=="svelte-x9xqwq"&&(Kt.innerHTML=ha),Ko.forEach(c),Yn=n(z),ue=r(z,"DIV",{class:!0});var en=k(ue);f(tt.$$.fragment,en),An=n(en),eo=r(en,"P",{"data-svelte-h":!0}),p(eo)!=="svelte-8c7sm7"&&(eo.innerHTML=ma),en.forEach(c),z.forEach(c),Go=n(e),f(ot.$$.fragment,e),Ho=n(e),H=r(e,"DIV",{class:!0});var $e=k(H);f(nt.$$.fragment,$e),Kn=n($e),to=r($e,"P",{"data-svelte-h":!0}),p(to)!=="svelte-f5g73a"&&(to.innerHTML=ua),es=n($e),oo=r($e,"P",{"data-svelte-h":!0}),p(oo)!=="svelte-hswkmf"&&(oo.innerHTML=fa),ts=n($e),te=r($e,"DIV",{class:!0});var yo=k(te);f(st.$$.fragment,yo),os=n(yo),no=r(yo,"P",{"data-svelte-h":!0}),p(no)!=="svelte-ai7ofs"&&(no.innerHTML=ga),ns=n(yo),f(fe.$$.fragment,yo),yo.forEach(c),$e.forEach(c),Vo=n(e),f(at.$$.fragment,e),Eo=n(e),V=r(e,"DIV",{class:!0});var Me=k(V);f(rt.$$.fragment,Me),ss=n(Me),so=r(Me,"P",{"data-svelte-h":!0}),p(so)!=="svelte-qgquhc"&&(so.innerHTML=_a),as=n(Me),ao=r(Me,"P",{"data-svelte-h":!0}),p(ao)!=="svelte-hswkmf"&&(ao.innerHTML=Ta),rs=n(Me),Z=r(Me,"DIV",{class:!0});var oe=k(Z);f(ct.$$.fragment,oe),cs=n(oe),ro=r(oe,"P",{"data-svelte-h":!0}),p(ro)!=="svelte-73wwko"&&(ro.innerHTML=ba),ds=n(oe),f(ge.$$.fragment,oe),is=n(oe),f(_e.$$.fragment,oe),ls=n(oe),f(Te.$$.fragment,oe),oe.forEach(c),Me.forEach(c),Do=n(e),f(dt.$$.fragment,e),Bo=n(e),J=r(e,"DIV",{class:!0});var ne=k(J);f(it.$$.fragment,ne),ps=n(ne),co=r(ne,"P",{"data-svelte-h":!0}),p(co)!=="svelte-1uct9eq"&&(co.innerHTML=va),hs=n(ne),io=r(ne,"P",{"data-svelte-h":!0}),p(io)!=="svelte-hswkmf"&&(io.innerHTML=ya),ms=n(ne),D=r(ne,"DIV",{class:!0});var ze=k(D);f(lt.$$.fragment,ze),us=n(ze),lo=r(ze,"P",{"data-svelte-h":!0}),p(lo)!=="svelte-1mjecuo"&&(lo.innerHTML=ka),fs=n(ze),f(be.$$.fragment,ze),gs=n(ze),f(ve.$$.fragment,ze),ze.forEach(c),_s=n(ne),ye=r(ne,"DIV",{class:!0});var tn=k(ye);f(pt.$$.fragment,tn),Ts=n(tn),po=r(tn,"P",{"data-svelte-h":!0}),p(po)!=="svelte-1bjnl76"&&(po.textContent=wa),tn.forEach(c),ne.forEach(c),Ro=n(e),f(ht.$$.fragment,e),Qo=n(e),P=r(e,"DIV",{class:!0});var se=k(P);f(mt.$$.fragment,se),bs=n(se),ho=r(se,"P",{"data-svelte-h":!0}),p(ho)!=="svelte-gybrgt"&&(ho.innerHTML=xa),vs=n(se),mo=r(se,"P",{"data-svelte-h":!0}),p(mo)!=="svelte-hswkmf"&&(mo.innerHTML=Sa),ys=n(se),B=r(se,"DIV",{class:!0});var Fe=k(B);f(ut.$$.fragment,Fe),ks=n(Fe),uo=r(Fe,"P",{"data-svelte-h":!0}),p(uo)!=="svelte-ksvpxc"&&(uo.innerHTML=$a),ws=n(Fe),f(ke.$$.fragment,Fe),xs=n(Fe),f(we.$$.fragment,Fe),Fe.forEach(c),Ss=n(se),xe=r(se,"DIV",{class:!0});var on=k(xe);f(ft.$$.fragment,on),$s=n(on),fo=r(on,"P",{"data-svelte-h":!0}),p(fo)!=="svelte-mx15yu"&&(fo.textContent=Ma),on.forEach(c),se.forEach(c),Oo=n(e),f(gt.$$.fragment,e),Xo=n(e),E=r(e,"DIV",{class:!0});var Ce=k(E);f(_t.$$.fragment,Ce),Ms=n(Ce),go=r(Ce,"P",{"data-svelte-h":!0}),p(go)!=="svelte-185meuv"&&(go.innerHTML=za),zs=n(Ce),_o=r(Ce,"P",{"data-svelte-h":!0}),p(_o)!=="svelte-hswkmf"&&(_o.innerHTML=Fa),Fs=n(Ce),Se=r(Ce,"DIV",{class:!0});var nn=k(Se);f(Tt.$$.fragment,nn),Cs=n(nn),To=r(nn,"P",{"data-svelte-h":!0}),p(To)!=="svelte-qef8w5"&&(To.textContent=Ca),nn.forEach(c),Ce.forEach(c),Yo=n(e),So=r(e,"P",{}),k(So).forEach(c),this.h()},h(){w(s,"name","hf:doc:metadata"),w(s,"content",Oa),w(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,d){t(document.head,s),h(e,v,d),h(e,l,d),h(e,m,d),g(y,e,d),h(e,i,d),g(S,e,d),h(e,Mo,d),h(e,qe,d),h(e,zo,d),h(e,je,d),h(e,Fo,d),h(e,Ue,d),h(e,Co,d),h(e,Ne,d),h(e,qo,d),g(Je,e,d),h(e,jo,d),h(e,L,d),g(Pe,L,null),t(L,sn),t(L,yt),t(L,an),t(L,kt),t(L,rn),g(ce,L,null),h(e,Uo,d),g(We,e,d),h(e,No,d),h(e,G,d),g(Ie,G,null),t(G,cn),t(G,wt),t(G,dn),t(G,xt),t(G,ln),g(de,G,null),h(e,Jo,d),g(Ze,e,d),h(e,Po,d),h(e,F,d),g(Le,F,null),t(F,pn),t(F,St),t(F,hn),t(F,$t),t(F,mn),t(F,ie),g(Ge,ie,null),t(ie,un),t(ie,Mt),t(F,fn),t(F,zt),g(He,zt,null),t(F,gn),t(F,Y),g(Ve,Y,null),t(Y,_n),t(Y,Ft),t(Y,Tn),t(Y,Ct),t(F,bn),t(F,le),g(Ee,le,null),t(le,vn),t(le,qt),h(e,Wo,d),g(De,e,d),h(e,Io,d),h(e,q,d),g(Be,q,null),t(q,yn),t(q,jt),t(q,kn),t(q,Ut),t(q,wn),t(q,Nt),t(q,xn),t(q,Jt),t(q,Sn),t(q,A),g(Re,A,null),t(A,$n),t(A,Pt),t(A,Mn),t(A,Wt),h(e,Zo,d),g(Qe,e,d),h(e,Lo,d),h(e,M,d),g(Oe,M,null),t(M,zn),t(M,It),t(M,Fn),t(M,Zt),t(M,Cn),t(M,C),g(Xe,C,null),t(C,qn),t(C,Lt),t(C,jn),t(C,Gt),t(C,Un),t(C,Ht),t(C,Nn),t(C,Vt),t(C,Jn),t(C,Et),t(C,Pn),t(C,Dt),t(M,Wn),t(M,N),g(Ye,N,null),t(N,In),t(N,Bt),t(N,Zn),t(N,Rt),t(N,Ln),t(N,Qt),t(N,Gn),t(N,Ot),t(N,Hn),t(N,Xt),t(M,Vn),t(M,K),g(Ae,K,null),t(K,En),t(K,Yt),t(K,Dn),g(pe,K,null),t(M,Bn),t(M,ee),g(Ke,ee,null),t(ee,Rn),t(ee,At),t(ee,Qn),g(he,ee,null),t(M,On),t(M,me),g(et,me,null),t(me,Xn),t(me,Kt),t(M,Yn),t(M,ue),g(tt,ue,null),t(ue,An),t(ue,eo),h(e,Go,d),g(ot,e,d),h(e,Ho,d),h(e,H,d),g(nt,H,null),t(H,Kn),t(H,to),t(H,es),t(H,oo),t(H,ts),t(H,te),g(st,te,null),t(te,os),t(te,no),t(te,ns),g(fe,te,null),h(e,Vo,d),g(at,e,d),h(e,Eo,d),h(e,V,d),g(rt,V,null),t(V,ss),t(V,so),t(V,as),t(V,ao),t(V,rs),t(V,Z),g(ct,Z,null),t(Z,cs),t(Z,ro),t(Z,ds),g(ge,Z,null),t(Z,is),g(_e,Z,null),t(Z,ls),g(Te,Z,null),h(e,Do,d),g(dt,e,d),h(e,Bo,d),h(e,J,d),g(it,J,null),t(J,ps),t(J,co),t(J,hs),t(J,io),t(J,ms),t(J,D),g(lt,D,null),t(D,us),t(D,lo),t(D,fs),g(be,D,null),t(D,gs),g(ve,D,null),t(J,_s),t(J,ye),g(pt,ye,null),t(ye,Ts),t(ye,po),h(e,Ro,d),g(ht,e,d),h(e,Qo,d),h(e,P,d),g(mt,P,null),t(P,bs),t(P,ho),t(P,vs),t(P,mo),t(P,ys),t(P,B),g(ut,B,null),t(B,ks),t(B,uo),t(B,ws),g(ke,B,null),t(B,xs),g(we,B,null),t(P,Ss),t(P,xe),g(ft,xe,null),t(xe,$s),t(xe,fo),h(e,Oo,d),g(gt,e,d),h(e,Xo,d),h(e,E,d),g(_t,E,null),t(E,Ms),t(E,go),t(E,zs),t(E,_o),t(E,Fs),t(E,Se),g(Tt,Se,null),t(Se,Cs),t(Se,To),h(e,Yo,d),h(e,So,d),Ao=!0},p(e,[d]){const O={};d&2&&(O.$$scope={dirty:d,ctx:e}),ce.$set(O);const X={};d&2&&(X.$$scope={dirty:d,ctx:e}),de.$set(X);const j={};d&2&&(j.$$scope={dirty:d,ctx:e}),pe.$set(j);const bt={};d&2&&(bt.$$scope={dirty:d,ctx:e}),he.$set(bt);const $o={};d&2&&($o.$$scope={dirty:d,ctx:e}),fe.$set($o);const ae={};d&2&&(ae.$$scope={dirty:d,ctx:e}),ge.$set(ae);const vt={};d&2&&(vt.$$scope={dirty:d,ctx:e}),_e.$set(vt);const W={};d&2&&(W.$$scope={dirty:d,ctx:e}),Te.$set(W);const re={};d&2&&(re.$$scope={dirty:d,ctx:e}),be.$set(re);const z={};d&2&&(z.$$scope={dirty:d,ctx:e}),ve.$set(z);const U={};d&2&&(U.$$scope={dirty:d,ctx:e}),ke.$set(U);const I={};d&2&&(I.$$scope={dirty:d,ctx:e}),we.$set(I)},i(e){Ao||(_(y.$$.fragment,e),_(S.$$.fragment,e),_(Je.$$.fragment,e),_(Pe.$$.fragment,e),_(ce.$$.fragment,e),_(We.$$.fragment,e),_(Ie.$$.fragment,e),_(de.$$.fragment,e),_(Ze.$$.fragment,e),_(Le.$$.fragment,e),_(Ge.$$.fragment,e),_(He.$$.fragment,e),_(Ve.$$.fragment,e),_(Ee.$$.fragment,e),_(De.$$.fragment,e),_(Be.$$.fragment,e),_(Re.$$.fragment,e),_(Qe.$$.fragment,e),_(Oe.$$.fragment,e),_(Xe.$$.fragment,e),_(Ye.$$.fragment,e),_(Ae.$$.fragment,e),_(pe.$$.fragment,e),_(Ke.$$.fragment,e),_(he.$$.fragment,e),_(et.$$.fragment,e),_(tt.$$.fragment,e),_(ot.$$.fragment,e),_(nt.$$.fragment,e),_(st.$$.fragment,e),_(fe.$$.fragment,e),_(at.$$.fragment,e),_(rt.$$.fragment,e),_(ct.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(Te.$$.fragment,e),_(dt.$$.fragment,e),_(it.$$.fragment,e),_(lt.$$.fragment,e),_(be.$$.fragment,e),_(ve.$$.fragment,e),_(pt.$$.fragment,e),_(ht.$$.fragment,e),_(mt.$$.fragment,e),_(ut.$$.fragment,e),_(ke.$$.fragment,e),_(we.$$.fragment,e),_(ft.$$.fragment,e),_(gt.$$.fragment,e),_(_t.$$.fragment,e),_(Tt.$$.fragment,e),Ao=!0)},o(e){T(y.$$.fragment,e),T(S.$$.fragment,e),T(Je.$$.fragment,e),T(Pe.$$.fragment,e),T(ce.$$.fragment,e),T(We.$$.fragment,e),T(Ie.$$.fragment,e),T(de.$$.fragment,e),T(Ze.$$.fragment,e),T(Le.$$.fragment,e),T(Ge.$$.fragment,e),T(He.$$.fragment,e),T(Ve.$$.fragment,e),T(Ee.$$.fragment,e),T(De.$$.fragment,e),T(Be.$$.fragment,e),T(Re.$$.fragment,e),T(Qe.$$.fragment,e),T(Oe.$$.fragment,e),T(Xe.$$.fragment,e),T(Ye.$$.fragment,e),T(Ae.$$.fragment,e),T(pe.$$.fragment,e),T(Ke.$$.fragment,e),T(he.$$.fragment,e),T(et.$$.fragment,e),T(tt.$$.fragment,e),T(ot.$$.fragment,e),T(nt.$$.fragment,e),T(st.$$.fragment,e),T(fe.$$.fragment,e),T(at.$$.fragment,e),T(rt.$$.fragment,e),T(ct.$$.fragment,e),T(ge.$$.fragment,e),T(_e.$$.fragment,e),T(Te.$$.fragment,e),T(dt.$$.fragment,e),T(it.$$.fragment,e),T(lt.$$.fragment,e),T(be.$$.fragment,e),T(ve.$$.fragment,e),T(pt.$$.fragment,e),T(ht.$$.fragment,e),T(mt.$$.fragment,e),T(ut.$$.fragment,e),T(ke.$$.fragment,e),T(we.$$.fragment,e),T(ft.$$.fragment,e),T(gt.$$.fragment,e),T(_t.$$.fragment,e),T(Tt.$$.fragment,e),Ao=!1},d(e){e&&(c(v),c(l),c(m),c(i),c(Mo),c(qe),c(zo),c(je),c(Fo),c(Ue),c(Co),c(Ne),c(qo),c(jo),c(L),c(Uo),c(No),c(G),c(Jo),c(Po),c(F),c(Wo),c(Io),c(q),c(Zo),c(Lo),c(M),c(Go),c(Ho),c(H),c(Vo),c(Eo),c(V),c(Do),c(Bo),c(J),c(Ro),c(Qo),c(P),c(Oo),c(Xo),c(E),c(Yo),c(So)),c(s),b(y,e),b(S,e),b(Je,e),b(Pe),b(ce),b(We,e),b(Ie),b(de),b(Ze,e),b(Le),b(Ge),b(He),b(Ve),b(Ee),b(De,e),b(Be),b(Re),b(Qe,e),b(Oe),b(Xe),b(Ye),b(Ae),b(pe),b(Ke),b(he),b(et),b(tt),b(ot,e),b(nt),b(st),b(fe),b(at,e),b(rt),b(ct),b(ge),b(_e),b(Te),b(dt,e),b(it),b(lt),b(be),b(ve),b(pt),b(ht,e),b(mt),b(ut),b(ke),b(we),b(ft),b(gt,e),b(_t),b(Tt)}}}const Oa='{"title":"SpeechT5","local":"speecht5","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"SpeechT5Config","local":"transformers.SpeechT5Config","sections":[],"depth":2},{"title":"SpeechT5HifiGanConfig","local":"transformers.SpeechT5HifiGanConfig","sections":[],"depth":2},{"title":"SpeechT5Tokenizer","local":"transformers.SpeechT5Tokenizer","sections":[],"depth":2},{"title":"SpeechT5FeatureExtractor","local":"transformers.SpeechT5FeatureExtractor","sections":[],"depth":2},{"title":"SpeechT5Processor","local":"transformers.SpeechT5Processor","sections":[],"depth":2},{"title":"SpeechT5Model","local":"transformers.SpeechT5Model","sections":[],"depth":2},{"title":"SpeechT5ForSpeechToText","local":"transformers.SpeechT5ForSpeechToText","sections":[],"depth":2},{"title":"SpeechT5ForTextToSpeech","local":"transformers.SpeechT5ForTextToSpeech","sections":[],"depth":2},{"title":"SpeechT5ForSpeechToSpeech","local":"transformers.SpeechT5ForSpeechToSpeech","sections":[],"depth":2},{"title":"SpeechT5HifiGan","local":"transformers.SpeechT5HifiGan","sections":[],"depth":2}],"depth":1}';function Xa($){return ja(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sr extends Ua{constructor(s){super(),Na(this,s,Xa,Qa,qa,{})}}export{sr as component};
