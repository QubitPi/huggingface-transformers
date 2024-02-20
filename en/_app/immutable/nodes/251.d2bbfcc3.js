import{s as Io,o as Uo,n as be}from"../chunks/scheduler.9bc65507.js";import{S as No,i as Zo,g as c,s as r,r as T,A as Go,h as l,f as n,c as d,j as W,u as b,x as _,k as R,y as s,a as p,v as y,d as x,t as v,w as k}from"../chunks/index.707bf1b6.js";import{T as We}from"../chunks/Tip.c2ecdbf4.js";import{D as E}from"../chunks/Docstring.17db21ae.js";import{C as st}from"../chunks/CodeBlock.54a9f38d.js";import{F as Wo,M as qo}from"../chunks/Markdown.fef84341.js";import{E as St}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as we}from"../chunks/Heading.342b1fa6.js";function Ro(F){let t,u="Example:",o,i,w;return i=new st({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFNwZWVjaDJUZXh0Q29uZmlnJTJDJTIwU3BlZWNoMlRleHRNb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBTcGVlY2gyVGV4dCUyMHMydF90cmFuc2Zvcm1lcl9zJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFNwZWVjaDJUZXh0Q29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMHMydF90cmFuc2Zvcm1lcl9zJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBTcGVlY2gyVGV4dE1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextConfig, Speech2TextModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Speech2Text s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Speech2TextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=c("p"),t.textContent=u,o=r(),T(i.$$.fragment)},l(a){t=l(a,"P",{"data-svelte-h":!0}),_(t)!=="svelte-11lpom8"&&(t.textContent=u),o=d(a),b(i.$$.fragment,a)},m(a,M){p(a,t,M),p(a,o,M),y(i,a,M),w=!0},p:be,i(a){w||(x(i.$$.fragment,a),w=!0)},o(a){v(i.$$.fragment,a),w=!1},d(a){a&&(n(t),n(o)),k(i,a)}}}function Vo(F){let t,u=`This class method is simply calling the feature extractor
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a>, image processor
<a href="/docs/transformers/main/en/main_classes/image_processor#transformers.ImageProcessingMixin">ImageProcessingMixin</a> and the tokenizer
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code> methods. Please refer to the docstrings of the
methods above for more information.`;return{c(){t=c("p"),t.innerHTML=u},l(o){t=l(o,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1ob8jsn"&&(t.innerHTML=u)},m(o,i){p(o,t,i)},p:be,d(o){o&&n(t)}}}function Ho(F){let t,u=`This class method is simply calling <a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.save_pretrained">save_pretrained()</a>. Please refer to the docstrings of the
methods above for more information.`;return{c(){t=c("p"),t.innerHTML=u},l(o){t=l(o,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1qvfzw2"&&(t.innerHTML=u)},m(o,i){p(o,t,i)},p:be,d(o){o&&n(t)}}}function Lo(F){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=u},l(o){t=l(o,"P",{"data-svelte-h":!0}),_(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(o,i){p(o,t,i)},p:be,d(o){o&&n(t)}}}function Eo(F){let t,u="Example:",o,i,w;return i=new st({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwU3BlZWNoMlRleHRNb2RlbCUyQyUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBbW9kZWwlMjAlM0QlMjBTcGVlY2gyVGV4dE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRnMydC1zbWFsbC1saWJyaXNwZWVjaC1hc3IlMjIpJTBBZmVhdHVyZV9leHRyYWN0b3IlMjAlM0QlMjBBdXRvRmVhdHVyZUV4dHJhY3Rvci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZzMnQtc21hbGwtbGlicmlzcGVlY2gtYXNyJTIyKSUwQWRzJTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZHVtbXklMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEFpbnB1dHMlMjAlM0QlMjBmZWF0dXJlX2V4dHJhY3RvciglMEElMjAlMjAlMjAlMjBkcyU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRGRzJTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyc2FtcGxpbmdfcmF0ZSUyMiU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpJTBBaW5wdXRfZmVhdHVyZXMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfZmVhdHVyZXMlMEFkZWNvZGVyX2lucHV0X2lkcyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIlNUIxJTJDJTIwMSU1RCU1RCklMjAqJTIwbW9kZWwuY29uZmlnLmRlY29kZXJfc3RhcnRfdG9rZW5faWQlMEFsYXN0X2hpZGRlbl9zdGF0ZSUyMCUzRCUyMG1vZGVsKGlucHV0X2ZlYXR1cmVzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RkZWNvZGVyX2lucHV0X2lkcykubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlLnNoYXBlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextModel, AutoFeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]) * model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_state.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">256</span>]`,wrap:!1}}),{c(){t=c("p"),t.textContent=u,o=r(),T(i.$$.fragment)},l(a){t=l(a,"P",{"data-svelte-h":!0}),_(t)!=="svelte-11lpom8"&&(t.textContent=u),o=d(a),b(i.$$.fragment,a)},m(a,M){p(a,t,M),p(a,o,M),y(i,a,M),w=!0},p:be,i(a){w||(x(i.$$.fragment,a),w=!0)},o(a){v(i.$$.fragment,a),w=!1},d(a){a&&(n(t),n(o)),k(i,a)}}}function Xo(F){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=u},l(o){t=l(o,"P",{"data-svelte-h":!0}),_(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(o,i){p(o,t,i)},p:be,d(o){o&&n(t)}}}function Po(F){let t,u="Example:",o,i,w;return i=new st({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwU3BlZWNoMlRleHRQcm9jZXNzb3IlMkMlMjBTcGVlY2gyVGV4dEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQW1vZGVsJTIwJTNEJTIwU3BlZWNoMlRleHRGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGczJ0LXNtYWxsLWxpYnJpc3BlZWNoLWFzciUyMiklMEFwcm9jZXNzb3IlMjAlM0QlMjBTcGVlY2gyVGV4dFByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZzMnQtc21hbGwtbGlicmlzcGVlY2gtYXNyJTIyKSUwQSUwQSUwQWRzJTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZHVtbXklMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjBwcm9jZXNzb3IoJTBBJTIwJTIwJTIwJTIwZHMlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHNhbXBsaW5nX3JhdGUlM0RkcyU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMnNhbXBsaW5nX3JhdGUlMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQWlucHV0X2ZlYXR1cmVzJTIwJTNEJTIwaW5wdXRzLmlucHV0X2ZlYXR1cmVzJTBBJTBBZ2VuZXJhdGVkX2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKGlucHV0cyUzRGlucHV0X2ZlYXR1cmVzKSUwQSUwQXRyYW5zY3JpcHRpb24lMjAlM0QlMjBwcm9jZXNzb3IuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZF9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklNUIwJTVEJTBBdHJhbnNjcmlwdGlvbg==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=u,o=r(),T(i.$$.fragment)},l(a){t=l(a,"P",{"data-svelte-h":!0}),_(t)!=="svelte-11lpom8"&&(t.textContent=u),o=d(a),b(i.$$.fragment,a)},m(a,M){p(a,t,M),p(a,o,M),y(i,a,M),w=!0},p:be,i(a){w||(x(i.$$.fragment,a),w=!0)},o(a){v(i.$$.fragment,a),w=!1},d(a){a&&(n(t),n(o)),k(i,a)}}}function Bo(F){let t,u,o,i,w,a,M=`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,A,z,Z=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,O,$,C,q,m,j='The <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a> forward method, overrides the <code>__call__</code> special method.',K,fe,ye,U,xe,X,ne,G,se,I,ae,ve=`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ee,_e,ge=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Te,B,D,re,te,oe='The <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration">Speech2TextForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',ie,Y,he,N,ce;return t=new we({props:{title:"Speech2TextModel",local:"transformers.Speech2TextModel",headingTag:"h2"}}),i=new E({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1081"}}),C=new E({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.Speech2TextModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_speech_to_text._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.Speech2TextModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.Speech2TextModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.Speech2TextModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.Speech2TextModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2TextModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.Speech2TextModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.Speech2TextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2TextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2TextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1107",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
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
`}}),fe=new We({props:{$$slots:{default:[Lo]},$$scope:{ctx:F}}}),U=new St({props:{anchor:"transformers.Speech2TextModel.forward.example",$$slots:{default:[Eo]},$$scope:{ctx:F}}}),X=new we({props:{title:"Speech2TextForConditionalGeneration",local:"transformers.Speech2TextForConditionalGeneration",headingTag:"h2"}}),se=new E({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1212"}}),D=new E({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_speech_to_text._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1240",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
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
`}}),Y=new We({props:{$$slots:{default:[Xo]},$$scope:{ctx:F}}}),N=new St({props:{anchor:"transformers.Speech2TextForConditionalGeneration.forward.example",$$slots:{default:[Po]},$$scope:{ctx:F}}}),{c(){T(t.$$.fragment),u=r(),o=c("div"),T(i.$$.fragment),w=r(),a=c("p"),a.innerHTML=M,A=r(),z=c("p"),z.innerHTML=Z,O=r(),$=c("div"),T(C.$$.fragment),q=r(),m=c("p"),m.innerHTML=j,K=r(),T(fe.$$.fragment),ye=r(),T(U.$$.fragment),xe=r(),T(X.$$.fragment),ne=r(),G=c("div"),T(se.$$.fragment),I=r(),ae=c("p"),ae.innerHTML=ve,ee=r(),_e=c("p"),_e.innerHTML=ge,Te=r(),B=c("div"),T(D.$$.fragment),re=r(),te=c("p"),te.innerHTML=oe,ie=r(),T(Y.$$.fragment),he=r(),T(N.$$.fragment),this.h()},l(g){b(t.$$.fragment,g),u=d(g),o=l(g,"DIV",{class:!0});var J=W(o);b(i.$$.fragment,J),w=d(J),a=l(J,"P",{"data-svelte-h":!0}),_(a)!=="svelte-qxy23t"&&(a.innerHTML=M),A=d(J),z=l(J,"P",{"data-svelte-h":!0}),_(z)!=="svelte-hswkmf"&&(z.innerHTML=Z),O=d(J),$=l(J,"DIV",{class:!0});var V=W($);b(C.$$.fragment,V),q=d(V),m=l(V,"P",{"data-svelte-h":!0}),_(m)!=="svelte-1imquuf"&&(m.innerHTML=j),K=d(V),b(fe.$$.fragment,V),ye=d(V),b(U.$$.fragment,V),V.forEach(n),J.forEach(n),xe=d(g),b(X.$$.fragment,g),ne=d(g),G=l(g,"DIV",{class:!0});var Q=W(G);b(se.$$.fragment,Q),I=d(Q),ae=l(Q,"P",{"data-svelte-h":!0}),_(ae)!=="svelte-1kz8m5n"&&(ae.innerHTML=ve),ee=d(Q),_e=l(Q,"P",{"data-svelte-h":!0}),_(_e)!=="svelte-hswkmf"&&(_e.innerHTML=ge),Te=d(Q),B=l(Q,"DIV",{class:!0});var h=W(B);b(D.$$.fragment,h),re=d(h),te=l(h,"P",{"data-svelte-h":!0}),_(te)!=="svelte-pc5rjb"&&(te.innerHTML=oe),ie=d(h),b(Y.$$.fragment,h),he=d(h),b(N.$$.fragment,h),h.forEach(n),Q.forEach(n),this.h()},h(){R($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(g,J){y(t,g,J),p(g,u,J),p(g,o,J),y(i,o,null),s(o,w),s(o,a),s(o,A),s(o,z),s(o,O),s(o,$),y(C,$,null),s($,q),s($,m),s($,K),y(fe,$,null),s($,ye),y(U,$,null),p(g,xe,J),y(X,g,J),p(g,ne,J),p(g,G,J),y(se,G,null),s(G,I),s(G,ae),s(G,ee),s(G,_e),s(G,Te),s(G,B),y(D,B,null),s(B,re),s(B,te),s(B,ie),y(Y,B,null),s(B,he),y(N,B,null),ce=!0},p(g,J){const V={};J&2&&(V.$$scope={dirty:J,ctx:g}),fe.$set(V);const Q={};J&2&&(Q.$$scope={dirty:J,ctx:g}),U.$set(Q);const h={};J&2&&(h.$$scope={dirty:J,ctx:g}),Y.$set(h);const S={};J&2&&(S.$$scope={dirty:J,ctx:g}),N.$set(S)},i(g){ce||(x(t.$$.fragment,g),x(i.$$.fragment,g),x(C.$$.fragment,g),x(fe.$$.fragment,g),x(U.$$.fragment,g),x(X.$$.fragment,g),x(se.$$.fragment,g),x(D.$$.fragment,g),x(Y.$$.fragment,g),x(N.$$.fragment,g),ce=!0)},o(g){v(t.$$.fragment,g),v(i.$$.fragment,g),v(C.$$.fragment,g),v(fe.$$.fragment,g),v(U.$$.fragment,g),v(X.$$.fragment,g),v(se.$$.fragment,g),v(D.$$.fragment,g),v(Y.$$.fragment,g),v(N.$$.fragment,g),ce=!1},d(g){g&&(n(u),n(o),n(xe),n(ne),n(G)),k(t,g),k(i),k(C),k(fe),k(U),k(X,g),k(se),k(D),k(Y),k(N)}}}function Yo(F){let t,u;return t=new qo({props:{$$slots:{default:[Bo]},$$scope:{ctx:F}}}),{c(){T(t.$$.fragment)},l(o){b(t.$$.fragment,o)},m(o,i){y(t,o,i),u=!0},p(o,i){const w={};i&2&&(w.$$scope={dirty:i,ctx:o}),t.$set(w)},i(o){u||(x(t.$$.fragment,o),u=!0)},o(o){v(t.$$.fragment,o),u=!1},d(o){k(t,o)}}}function Qo(F){let t,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,i,w="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",a,M,A=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,Z,O=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,$,C,q=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=c("p"),t.innerHTML=u,o=r(),i=c("ul"),i.innerHTML=w,a=r(),M=c("p"),M.innerHTML=A,z=r(),Z=c("ul"),Z.innerHTML=O,$=r(),C=c("p"),C.innerHTML=q},l(m){t=l(m,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1ajbfxg"&&(t.innerHTML=u),o=d(m),i=l(m,"UL",{"data-svelte-h":!0}),_(i)!=="svelte-qm1t26"&&(i.innerHTML=w),a=d(m),M=l(m,"P",{"data-svelte-h":!0}),_(M)!=="svelte-1v9qsc5"&&(M.innerHTML=A),z=d(m),Z=l(m,"UL",{"data-svelte-h":!0}),_(Z)!=="svelte-15scerc"&&(Z.innerHTML=O),$=d(m),C=l(m,"P",{"data-svelte-h":!0}),_(C)!=="svelte-1an3odd"&&(C.innerHTML=q)},m(m,j){p(m,t,j),p(m,o,j),p(m,i,j),p(m,a,j),p(m,M,j),p(m,z,j),p(m,Z,j),p(m,$,j),p(m,C,j)},p:be,d(m){m&&(n(t),n(o),n(i),n(a),n(M),n(z),n(Z),n($),n(C))}}}function Do(F){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=u},l(o){t=l(o,"P",{"data-svelte-h":!0}),_(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(o,i){p(o,t,i)},p:be,d(o){o&&n(t)}}}function Ao(F){let t,u="Example:",o,i,w;return i=new st({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlNwZWVjaDJUZXh0TW9kZWwlMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGczJ0LXNtYWxsLWxpYnJpc3BlZWNoLWFzciUyMiklMEFtb2RlbCUyMCUzRCUyMFRGU3BlZWNoMlRleHRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZzMnQtc21hbGwtbGlicmlzcGVlY2gtYXNyJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFSpeech2TextModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSpeech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=u,o=r(),T(i.$$.fragment)},l(a){t=l(a,"P",{"data-svelte-h":!0}),_(t)!=="svelte-11lpom8"&&(t.textContent=u),o=d(a),b(i.$$.fragment,a)},m(a,M){p(a,t,M),p(a,o,M),y(i,a,M),w=!0},p:be,i(a){w||(x(i.$$.fragment,a),w=!0)},o(a){v(i.$$.fragment,a),w=!1},d(a){a&&(n(t),n(o)),k(i,a)}}}function Oo(F){let t,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,i,w="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",a,M,A=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,Z,O=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,$,C,q=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=c("p"),t.innerHTML=u,o=r(),i=c("ul"),i.innerHTML=w,a=r(),M=c("p"),M.innerHTML=A,z=r(),Z=c("ul"),Z.innerHTML=O,$=r(),C=c("p"),C.innerHTML=q},l(m){t=l(m,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1ajbfxg"&&(t.innerHTML=u),o=d(m),i=l(m,"UL",{"data-svelte-h":!0}),_(i)!=="svelte-qm1t26"&&(i.innerHTML=w),a=d(m),M=l(m,"P",{"data-svelte-h":!0}),_(M)!=="svelte-1v9qsc5"&&(M.innerHTML=A),z=d(m),Z=l(m,"UL",{"data-svelte-h":!0}),_(Z)!=="svelte-15scerc"&&(Z.innerHTML=O),$=d(m),C=l(m,"P",{"data-svelte-h":!0}),_(C)!=="svelte-1an3odd"&&(C.innerHTML=q)},m(m,j){p(m,t,j),p(m,o,j),p(m,i,j),p(m,a,j),p(m,M,j),p(m,z,j),p(m,Z,j),p(m,$,j),p(m,C,j)},p:be,d(m){m&&(n(t),n(o),n(i),n(a),n(M),n(z),n(Z),n($),n(C))}}}function Ko(F){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=u},l(o){t=l(o,"P",{"data-svelte-h":!0}),_(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(o,i){p(o,t,i)},p:be,d(o){o&&n(t)}}}function en(F){let t,u="Example:",o,i,w;return i=new st({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwU3BlZWNoMlRleHRQcm9jZXNzb3IlMkMlMjBURlNwZWVjaDJUZXh0Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwc291bmRmaWxlJTIwYXMlMjBzZiUwQSUwQW1vZGVsJTIwJTNEJTIwVEZTcGVlY2gyVGV4dEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZmFjZWJvb2slMkZzMnQtc21hbGwtbGlicmlzcGVlY2gtYXNyJTIyJTJDJTIwZnJvbV9wdCUzRFRydWUlMEEpJTBBcHJvY2Vzc29yJTIwJTNEJTIwU3BlZWNoMlRleHRQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGczJ0LXNtYWxsLWxpYnJpc3BlZWNoLWFzciUyMiklMEElMEElMEFkZWYlMjBtYXBfdG9fYXJyYXkoYmF0Y2gpJTNBJTBBJTIwJTIwJTIwJTIwc3BlZWNoJTJDJTIwXyUyMCUzRCUyMHNmLnJlYWQoYmF0Y2glNUIlMjJmaWxlJTIyJTVEKSUwQSUyMCUyMCUyMCUyMGJhdGNoJTVCJTIyc3BlZWNoJTIyJTVEJTIwJTNEJTIwc3BlZWNoJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwYmF0Y2glMEElMEElMEFkcyUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2R1bW15JTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBZHMlMjAlM0QlMjBkcy5tYXAobWFwX3RvX2FycmF5KSUwQWRzLnNldF9mb3JtYXQodHlwZSUzRCUyMnRmJTIyKSUwQSUwQWlucHV0X2ZlYXR1cmVzJTIwJTNEJTIwcHJvY2Vzc29yKCUwQSUyMCUyMCUyMCUyMGRzJTVCJTIyc3BlZWNoJTIyJTVEJTVCMCU1RCUyQyUyMHNhbXBsaW5nX3JhdGUlM0QxNjAwMCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIlMEEpLmlucHV0X2ZlYXR1cmVzJTIwJTIwJTIzJTIwQmF0Y2glMjBzaXplJTIwMSUwQWdlbmVyYXRlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dF9mZWF0dXJlcyklMEElMEF0cmFuc2NyaXB0aW9uJTIwJTNEJTIwcHJvY2Vzc29yLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfaWRzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, TFSpeech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSpeech2TextForConditionalGeneration.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>, from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds.set_format(<span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16000</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>).input_features  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`,wrap:!1}}),{c(){t=c("p"),t.textContent=u,o=r(),T(i.$$.fragment)},l(a){t=l(a,"P",{"data-svelte-h":!0}),_(t)!=="svelte-11lpom8"&&(t.textContent=u),o=d(a),b(i.$$.fragment,a)},m(a,M){p(a,t,M),p(a,o,M),y(i,a,M),w=!0},p:be,i(a){w||(x(i.$$.fragment,a),w=!0)},o(a){v(i.$$.fragment,a),w=!1},d(a){a&&(n(t),n(o)),k(i,a)}}}function tn(F){let t,u,o,i,w,a,M=`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,A,z,Z=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,O,$,C,q,m,j,K,fe='The <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel">TFSpeech2TextModel</a> forward method, overrides the <code>__call__</code> special method.',ye,U,xe,X,ne,G,se,I,ae,ve,ee,_e=`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ge,Te,B=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,D,re,te,oe,ie,Y,he,N='The <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration">TFSpeech2TextForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',ce,g,J,V,Q;return t=new we({props:{title:"TFSpeech2TextModel",local:"transformers.TFSpeech2TextModel",headingTag:"h2"}}),i=new E({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1323"}}),$=new We({props:{$$slots:{default:[Qo]},$$scope:{ctx:F}}}),m=new E({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"decoder_inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFSpeech2TextModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFSpeech2TextModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFSpeech2TextModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFSpeech2TextModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFSpeech2TextModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1339",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
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
`}}),U=new We({props:{$$slots:{default:[Do]},$$scope:{ctx:F}}}),X=new St({props:{anchor:"transformers.TFSpeech2TextModel.call.example",$$slots:{default:[Ao]},$$scope:{ctx:F}}}),G=new we({props:{title:"TFSpeech2TextForConditionalGeneration",local:"transformers.TFSpeech2TextForConditionalGeneration",headingTag:"h2"}}),ae=new E({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1413"}}),re=new We({props:{$$slots:{default:[Oo]},$$scope:{ctx:F}}}),ie=new E({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"decoder_inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1442",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
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
`}}),g=new We({props:{$$slots:{default:[Ko]},$$scope:{ctx:F}}}),V=new St({props:{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.example",$$slots:{default:[en]},$$scope:{ctx:F}}}),{c(){T(t.$$.fragment),u=r(),o=c("div"),T(i.$$.fragment),w=r(),a=c("p"),a.innerHTML=M,A=r(),z=c("p"),z.innerHTML=Z,O=r(),T($.$$.fragment),C=r(),q=c("div"),T(m.$$.fragment),j=r(),K=c("p"),K.innerHTML=fe,ye=r(),T(U.$$.fragment),xe=r(),T(X.$$.fragment),ne=r(),T(G.$$.fragment),se=r(),I=c("div"),T(ae.$$.fragment),ve=r(),ee=c("p"),ee.innerHTML=_e,ge=r(),Te=c("p"),Te.innerHTML=B,D=r(),T(re.$$.fragment),te=r(),oe=c("div"),T(ie.$$.fragment),Y=r(),he=c("p"),he.innerHTML=N,ce=r(),T(g.$$.fragment),J=r(),T(V.$$.fragment),this.h()},l(h){b(t.$$.fragment,h),u=d(h),o=l(h,"DIV",{class:!0});var S=W(o);b(i.$$.fragment,S),w=d(S),a=l(S,"P",{"data-svelte-h":!0}),_(a)!=="svelte-tm9c7d"&&(a.innerHTML=M),A=d(S),z=l(S,"P",{"data-svelte-h":!0}),_(z)!=="svelte-1be7e3c"&&(z.innerHTML=Z),O=d(S),b($.$$.fragment,S),C=d(S),q=l(S,"DIV",{class:!0});var me=W(q);b(m.$$.fragment,me),j=d(me),K=l(me,"P",{"data-svelte-h":!0}),_(K)!=="svelte-1aiiyvr"&&(K.innerHTML=fe),ye=d(me),b(U.$$.fragment,me),xe=d(me),b(X.$$.fragment,me),me.forEach(n),S.forEach(n),ne=d(h),b(G.$$.fragment,h),se=d(h),I=l(h,"DIV",{class:!0});var H=W(I);b(ae.$$.fragment,H),ve=d(H),ee=l(H,"P",{"data-svelte-h":!0}),_(ee)!=="svelte-sl8pcb"&&(ee.innerHTML=_e),ge=d(H),Te=l(H,"P",{"data-svelte-h":!0}),_(Te)!=="svelte-1be7e3c"&&(Te.innerHTML=B),D=d(H),b(re.$$.fragment,H),te=d(H),oe=l(H,"DIV",{class:!0});var le=W(oe);b(ie.$$.fragment,le),Y=d(le),he=l(le,"P",{"data-svelte-h":!0}),_(he)!=="svelte-vy3qpr"&&(he.innerHTML=N),ce=d(le),b(g.$$.fragment,le),J=d(le),b(V.$$.fragment,le),le.forEach(n),H.forEach(n),this.h()},h(){R(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(h,S){y(t,h,S),p(h,u,S),p(h,o,S),y(i,o,null),s(o,w),s(o,a),s(o,A),s(o,z),s(o,O),y($,o,null),s(o,C),s(o,q),y(m,q,null),s(q,j),s(q,K),s(q,ye),y(U,q,null),s(q,xe),y(X,q,null),p(h,ne,S),y(G,h,S),p(h,se,S),p(h,I,S),y(ae,I,null),s(I,ve),s(I,ee),s(I,ge),s(I,Te),s(I,D),y(re,I,null),s(I,te),s(I,oe),y(ie,oe,null),s(oe,Y),s(oe,he),s(oe,ce),y(g,oe,null),s(oe,J),y(V,oe,null),Q=!0},p(h,S){const me={};S&2&&(me.$$scope={dirty:S,ctx:h}),$.$set(me);const H={};S&2&&(H.$$scope={dirty:S,ctx:h}),U.$set(H);const le={};S&2&&(le.$$scope={dirty:S,ctx:h}),X.$set(le);const Me={};S&2&&(Me.$$scope={dirty:S,ctx:h}),re.$set(Me);const Re={};S&2&&(Re.$$scope={dirty:S,ctx:h}),g.$set(Re);const L={};S&2&&(L.$$scope={dirty:S,ctx:h}),V.$set(L)},i(h){Q||(x(t.$$.fragment,h),x(i.$$.fragment,h),x($.$$.fragment,h),x(m.$$.fragment,h),x(U.$$.fragment,h),x(X.$$.fragment,h),x(G.$$.fragment,h),x(ae.$$.fragment,h),x(re.$$.fragment,h),x(ie.$$.fragment,h),x(g.$$.fragment,h),x(V.$$.fragment,h),Q=!0)},o(h){v(t.$$.fragment,h),v(i.$$.fragment,h),v($.$$.fragment,h),v(m.$$.fragment,h),v(U.$$.fragment,h),v(X.$$.fragment,h),v(G.$$.fragment,h),v(ae.$$.fragment,h),v(re.$$.fragment,h),v(ie.$$.fragment,h),v(g.$$.fragment,h),v(V.$$.fragment,h),Q=!1},d(h){h&&(n(u),n(o),n(ne),n(se),n(I)),k(t,h),k(i),k($),k(m),k(U),k(X),k(G,h),k(ae),k(re),k(ie),k(g),k(V)}}}function on(F){let t,u;return t=new qo({props:{$$slots:{default:[tn]},$$scope:{ctx:F}}}),{c(){T(t.$$.fragment)},l(o){b(t.$$.fragment,o)},m(o,i){y(t,o,i),u=!0},p(o,i){const w={};i&2&&(w.$$scope={dirty:i,ctx:o}),t.$set(w)},i(o){u||(x(t.$$.fragment,o),u=!0)},o(o){v(t.$$.fragment,o),u=!1},d(o){k(t,o)}}}function nn(F){let t,u,o,i,w,a,M,A,z,Z=`The Speech2Text model was proposed in <a href="https://arxiv.org/abs/2010.05171" rel="nofollow">fairseq S2T: Fast Speech-to-Text Modeling with fairseq</a> by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It’s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
<a href="http://www.openslr.org/12" rel="nofollow">LibriSpeech</a>, <a href="https://github.com/facebookresearch/covost" rel="nofollow">CoVoST 2</a>, <a href="https://ict.fbk.eu/must-c/" rel="nofollow">MuST-C</a>.`,O,$,C='This model was contributed by <a href="https://huggingface.co/valhalla" rel="nofollow">valhalla</a>. The original code can be found <a href="https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text" rel="nofollow">here</a>.',q,m,j,K,fe=`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It’s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
<code>generate()</code> method can be used for inference.`,ye,U,xe=`The <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> class is responsible for extracting the log-mel filter-bank
features. The <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> wraps <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> and
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> into a single instance to both extract the input features and decode the
predicted token ids.`,X,ne,G=`The feature extractor depends on <code>torchaudio</code> and the tokenizer depends on <code>sentencepiece</code> so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
<code>pip install transformers&quot;[speech, sentencepiece]&quot;</code> or install the packages separately with <code>pip install torchaudio sentencepiece</code>. Also <code>torchaudio</code> requires the development version of the <a href="http://www.mega-nerd.com/libsndfile/" rel="nofollow">libsndfile</a> package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: <code>apt install libsndfile1-dev</code>`,se,I,ae="<li>ASR and Speech Translation</li>",ve,ee,_e,ge,Te=`<li><p>Multilingual speech translation</p> <p>For multilingual speech translation models, <code>eos_token_id</code> is used as the <code>decoder_start_token_id</code> and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the <code>forced_bos_token_id</code> parameter to the <code>generate()</code> method. The following
example shows how to transate English speech to French text using the <em>facebook/s2t-medium-mustc-multilingual-st</em>
checkpoint.</p></li>`,B,D,re,te,oe='See the <a href="https://huggingface.co/models?filter=speech_to_text" rel="nofollow">model hub</a> to look for Speech2Text checkpoints.',ie,Y,he,N,ce,g,J,V=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>. It is used to instantiate a
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
<a href="https://huggingface.co/facebook/s2t-small-librispeech-asr" rel="nofollow">facebook/s2t-small-librispeech-asr</a> architecture.`,Q,h,S=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,me,H,le,Me,Re,L,Ve,Wt,at,fo="Construct an Speech2Text tokenizer.",Rt,rt,_o=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`,Vt,ze,He,Ht,dt,go="Build model inputs from a sequence by appending eos_token_id.",Lt,je,Le,Et,it,To=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,Xt,$e,Ee,Pt,ct,bo=`Create the token type IDs corresponding to the sequences passed. <a href="../glossary#token-type-ids">What are token type
IDs?</a>`,Bt,lt,yo="Should be overridden in a subclass if the model has a special way of building those.",Yt,pt,Xe,Jt,Pe,Ft,ue,Be,Qt,ht,xo="Constructs a Speech2Text feature extractor.",Dt,mt,vo=`This feature extractor inherits from <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`,At,ut,ko=`This class extracts mel-filter bank features from raw speech using TorchAudio if installed or using numpy
otherwise, and applies utterance-level cepstral mean and variance normalization to the extracted features.`,Ot,Ce,Ye,Kt,ft,wo="Main method to featurize and prepare for the model one or several sequence(s).",zt,Qe,jt,P,De,eo,_t,Mo=`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`,to,gt,$o=`<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> offers all the functionalities of <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> and
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See the <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"><strong>call</strong>()</a> and <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode">decode()</a> for more
information.`,oo,qe,Ae,no,Tt,So=`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor’s
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a> and returns its output. If used in the context
<code>as_target_processor()</code> this method forwards all its arguments to Speech2TextTokenizer’s
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__"><strong>call</strong>()</a>. Please refer to the doctsring of the above two methods for more
information.`,so,Se,Oe,ao,bt,Jo="Instantiate a processor associated with a pretrained model.",ro,Ie,io,Je,Ke,co,yt,Fo=`Saves the attributes of this processor (feature extractor, tokenizer…) in the specified directory so that it
can be reloaded using the <a href="/docs/transformers/main/en/model_doc/mctct#transformers.MCTCTProcessor.from_pretrained">from_pretrained()</a> method.`,lo,Ue,po,Ne,et,ho,xt,zo=`This method forwards all its arguments to Speech2TextTokenizer’s <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.batch_decode">batch_decode()</a>. Please
refer to the docstring of this method for more information.`,mo,Ze,tt,uo,vt,jo=`This method forwards all its arguments to Speech2TextTokenizer’s <a href="/docs/transformers/main/en/model_doc/speecht5#transformers.SpeechT5Tokenizer.decode">decode()</a>. Please refer
to the docstring of this method for more information.`,Ct,Ge,qt,$t,It;return w=new we({props:{title:"Speech2Text",local:"speech2text",headingTag:"h1"}}),M=new we({props:{title:"Overview",local:"overview",headingTag:"h2"}}),m=new we({props:{title:"Inference",local:"inference",headingTag:"h2"}}),ee=new st({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwU3BlZWNoMlRleHRQcm9jZXNzb3IlMkMlMjBTcGVlY2gyVGV4dEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQW1vZGVsJTIwJTNEJTIwU3BlZWNoMlRleHRGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGczJ0LXNtYWxsLWxpYnJpc3BlZWNoLWFzciUyMiklMEFwcm9jZXNzb3IlMjAlM0QlMjBTcGVlY2gyVGV4dFByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZzMnQtc21hbGwtbGlicmlzcGVlY2gtYXNyJTIyKSUwQSUwQSUwQWRzJTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZGVtbyUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHByb2Nlc3NvcihkcyU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRGRzJTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyc2FtcGxpbmdfcmF0ZSUyMiU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBZ2VuZXJhdGVkX2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKGlucHV0cyU1QiUyMmlucHV0X2ZlYXR1cmVzJTIyJTVEJTJDJTIwYXR0ZW50aW9uX21hc2slM0RpbnB1dHMlNUIlMjJhdHRlbnRpb25fbWFzayUyMiU1RCklMEElMEF0cmFuc2NyaXB0aW9uJTIwJTNEJTIwcHJvY2Vzc29yLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfaWRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTBBdHJhbnNjcmlwdGlvbg==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs[<span class="hljs-string">&quot;input_features&quot;</span>], attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
[<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>]`,wrap:!1}}),D=new st({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwU3BlZWNoMlRleHRQcm9jZXNzb3IlMkMlMjBTcGVlY2gyVGV4dEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQW1vZGVsJTIwJTNEJTIwU3BlZWNoMlRleHRGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGczJ0LW1lZGl1bS1tdXN0Yy1tdWx0aWxpbmd1YWwtc3QlMjIpJTBBcHJvY2Vzc29yJTIwJTNEJTIwU3BlZWNoMlRleHRQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGczJ0LW1lZGl1bS1tdXN0Yy1tdWx0aWxpbmd1YWwtc3QlMjIpJTBBJTBBZHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kZW1vJTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwcHJvY2Vzc29yKGRzJTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjBzYW1wbGluZ19yYXRlJTNEZHMlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJzYW1wbGluZ19yYXRlJTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFnZW5lcmF0ZWRfaWRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoJTBBJTIwJTIwJTIwJTIwaW5wdXRzJTVCJTIyaW5wdXRfZmVhdHVyZXMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBhdHRlbnRpb25fbWFzayUzRGlucHV0cyU1QiUyMmF0dGVudGlvbl9tYXNrJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwZm9yY2VkX2Jvc190b2tlbl9pZCUzRHByb2Nlc3Nvci50b2tlbml6ZXIubGFuZ19jb2RlX3RvX2lkJTVCJTIyZnIlMjIlNUQlMkMlMEEpJTBBJTBBdHJhbnNsYXRpb24lMjAlM0QlMjBwcm9jZXNzb3IuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZF9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklMEF0cmFuc2xhdGlvbg==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-medium-mustc-multilingual-st&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-medium-mustc-multilingual-st&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;input_features&quot;</span>],
<span class="hljs-meta">... </span>    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    forced_bos_token_id=processor.tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translation
[<span class="hljs-string">&quot;(Vidéo) Si M. Kilder est l&#x27;apossible des classes moyennes, et nous sommes heureux d&#x27;être accueillis dans son évangile.&quot;</span>]`,wrap:!1}}),Y=new we({props:{title:"Speech2TextConfig",local:"transformers.Speech2TextConfig",headingTag:"h2"}}),ce=new E({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 10000) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2TextConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.Speech2TextConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in encoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.Speech2TextConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.Speech2TextConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.Speech2TextConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.Speech2TextConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.Speech2TextConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">LayerDrop paper</a> for
more details.`,name:"encoder_layerdrop"},{anchor:"transformers.Speech2TextConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">LayerDrop paper</a> for
more details.`,name:"decoder_layerdrop"},{anchor:"transformers.Speech2TextConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.Speech2TextConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the model is set up as an encoder-decoder architecture for sequence-to-sequence tasks.`,name:"is_encoder_decoder"},{anchor:"transformers.Speech2TextConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.Speech2TextConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.Speech2TextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.Speech2TextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Speech2TextConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.Speech2TextConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.Speech2TextConfig.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The initial token ID of the decoder when decoding sequences.`,name:"decoder_start_token_id"},{anchor:"transformers.Speech2TextConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the embeddings are scaled by the square root of <code>d_model</code>.`,name:"scale_embedding"},{anchor:"transformers.Speech2TextConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.Speech2TextConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The id of the beginning-of-sequence token.`,name:"bos_token_id"},{anchor:"transformers.Speech2TextConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the end-of-sequence token.`,name:"eos_token_id"},{anchor:"transformers.Speech2TextConfig.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 6000) &#x2014;
The maximum sequence length of log-mel filter-bank features that this model might ever be used with.`,name:"max_source_positions"},{anchor:"transformers.Speech2TextConfig.max_target_positions",description:`<strong>max_target_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically, set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_target_positions"},{anchor:"transformers.Speech2TextConfig.num_conv_layers",description:`<strong>num_conv_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of 1D convolutional layers in the conv module.`,name:"num_conv_layers"},{anchor:"transformers.Speech2TextConfig.conv_kernel_sizes",description:`<strong>conv_kernel_sizes</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 5)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the conv module. The length
of <code>conv_kernel_sizes</code> has to match <code>num_conv_layers</code>.`,name:"conv_kernel_sizes"},{anchor:"transformers.Speech2TextConfig.conv_channels",description:`<strong>conv_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
An integer defining the number of output channels of each convolution layers except the final one in the
conv module.`,name:"conv_channels"},{anchor:"transformers.Speech2TextConfig.input_feat_per_channel",description:`<strong>input_feat_per_channel</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
An integer specifying the size of feature vector. This is also the dimensions of log-mel filter-bank
features.`,name:"input_feat_per_channel"},{anchor:"transformers.Speech2TextConfig.input_channels",description:`<strong>input_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
An integer specifying number of input channels of the input feature vector.`,name:"input_channels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L31"}}),H=new St({props:{anchor:"transformers.Speech2TextConfig.example",$$slots:{default:[Ro]},$$scope:{ctx:F}}}),Me=new we({props:{title:"Speech2TextTokenizer",local:"transformers.Speech2TextTokenizer",headingTag:"h2"}}),Ve=new E({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2TextTokenizer.spm_file",description:`<strong>spm_file</strong> (<code>str</code>) &#x2014;
Path to the <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> model file`,name:"spm_file"},{anchor:"transformers.Speech2TextTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2TextTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2TextTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2TextTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Speech2TextTokenizer.do_upper_case",description:`<strong>do_upper_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to uppercase the output when decoding.`,name:"do_upper_case"},{anchor:"transformers.Speech2TextTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.Speech2TextTokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.Speech2TextTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"sp_model_kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L59"}}),He=new E({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L217"}}),Le=new E({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L224",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ee=new E({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3328",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token type ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Xe=new E({props:{name:"save_vocabulary",anchor:"transformers.Speech2TextTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L268"}}),Pe=new we({props:{title:"Speech2TextFeatureExtractor",local:"transformers.Speech2TextFeatureExtractor",headingTag:"h2"}}),Be=new E({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in hertz (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L36"}}),Ye=new E({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": Union"},{name:"padding",val:": Union = False"},{name:"max_length",val:": Optional = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"sampling_rate",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values. Must be mono channel audio, not
stereo, i.e. single float per timestep.`,name:"raw_speech"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.`,name:"pad_to_multiple_of"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>For Speech2TextTransformer models, <code>attention_mask</code> should always be passed for batched inference, to
avoid subtle bugs.</p>

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L162"}}),Qe=new we({props:{title:"Speech2TextProcessor",local:"transformers.Speech2TextProcessor",headingTag:"h2"}}),De=new E({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L24"}}),Ae=new E({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L48"}}),Oe=new E({props:{name:"from_pretrained",anchor:"transformers.Speech2TextProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": Union"},{name:"cache_dir",val:": Union = None"},{name:"force_download",val:": bool = False"},{name:"local_files_only",val:": bool = False"},{name:"token",val:": Union = None"},{name:"revision",val:": str = 'main'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/processing_utils.py#L406"}}),Ie=new We({props:{$$slots:{default:[Vo]},$$scope:{ctx:F}}}),Ke=new E({props:{name:"save_pretrained",anchor:"transformers.Speech2TextProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2TextProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).`,name:"push_to_hub"},{anchor:"transformers.Speech2TextProcessor.save_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/processing_utils.py#L167"}}),Ue=new We({props:{$$slots:{default:[Ho]},$$scope:{ctx:F}}}),et=new E({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L87"}}),tt=new E({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L94"}}),Ge=new Wo({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[on],pytorch:[Yo]},$$scope:{ctx:F}}}),{c(){t=c("meta"),u=r(),o=c("p"),i=r(),T(w.$$.fragment),a=r(),T(M.$$.fragment),A=r(),z=c("p"),z.innerHTML=Z,O=r(),$=c("p"),$.innerHTML=C,q=r(),T(m.$$.fragment),j=r(),K=c("p"),K.innerHTML=fe,ye=r(),U=c("p"),U.innerHTML=xe,X=r(),ne=c("p"),ne.innerHTML=G,se=r(),I=c("ul"),I.innerHTML=ae,ve=r(),T(ee.$$.fragment),_e=r(),ge=c("ul"),ge.innerHTML=Te,B=r(),T(D.$$.fragment),re=r(),te=c("p"),te.innerHTML=oe,ie=r(),T(Y.$$.fragment),he=r(),N=c("div"),T(ce.$$.fragment),g=r(),J=c("p"),J.innerHTML=V,Q=r(),h=c("p"),h.innerHTML=S,me=r(),T(H.$$.fragment),le=r(),T(Me.$$.fragment),Re=r(),L=c("div"),T(Ve.$$.fragment),Wt=r(),at=c("p"),at.textContent=fo,Rt=r(),rt=c("p"),rt.innerHTML=_o,Vt=r(),ze=c("div"),T(He.$$.fragment),Ht=r(),dt=c("p"),dt.textContent=go,Lt=r(),je=c("div"),T(Le.$$.fragment),Et=r(),it=c("p"),it.innerHTML=To,Xt=r(),$e=c("div"),T(Ee.$$.fragment),Pt=r(),ct=c("p"),ct.innerHTML=bo,Bt=r(),lt=c("p"),lt.textContent=yo,Yt=r(),pt=c("div"),T(Xe.$$.fragment),Jt=r(),T(Pe.$$.fragment),Ft=r(),ue=c("div"),T(Be.$$.fragment),Qt=r(),ht=c("p"),ht.textContent=xo,Dt=r(),mt=c("p"),mt.innerHTML=vo,At=r(),ut=c("p"),ut.textContent=ko,Ot=r(),Ce=c("div"),T(Ye.$$.fragment),Kt=r(),ft=c("p"),ft.textContent=wo,zt=r(),T(Qe.$$.fragment),jt=r(),P=c("div"),T(De.$$.fragment),eo=r(),_t=c("p"),_t.textContent=Mo,to=r(),gt=c("p"),gt.innerHTML=$o,oo=r(),qe=c("div"),T(Ae.$$.fragment),no=r(),Tt=c("p"),Tt.innerHTML=So,so=r(),Se=c("div"),T(Oe.$$.fragment),ao=r(),bt=c("p"),bt.textContent=Jo,ro=r(),T(Ie.$$.fragment),io=r(),Je=c("div"),T(Ke.$$.fragment),co=r(),yt=c("p"),yt.innerHTML=Fo,lo=r(),T(Ue.$$.fragment),po=r(),Ne=c("div"),T(et.$$.fragment),ho=r(),xt=c("p"),xt.innerHTML=zo,mo=r(),Ze=c("div"),T(tt.$$.fragment),uo=r(),vt=c("p"),vt.innerHTML=jo,Ct=r(),T(Ge.$$.fragment),qt=r(),$t=c("p"),this.h()},l(e){const f=Go("svelte-u9bgzb",document.head);t=l(f,"META",{name:!0,content:!0}),f.forEach(n),u=d(e),o=l(e,"P",{}),W(o).forEach(n),i=d(e),b(w.$$.fragment,e),a=d(e),b(M.$$.fragment,e),A=d(e),z=l(e,"P",{"data-svelte-h":!0}),_(z)!=="svelte-a64r9y"&&(z.innerHTML=Z),O=d(e),$=l(e,"P",{"data-svelte-h":!0}),_($)!=="svelte-c3vz80"&&($.innerHTML=C),q=d(e),b(m.$$.fragment,e),j=d(e),K=l(e,"P",{"data-svelte-h":!0}),_(K)!=="svelte-1tca3lq"&&(K.innerHTML=fe),ye=d(e),U=l(e,"P",{"data-svelte-h":!0}),_(U)!=="svelte-n9cxtu"&&(U.innerHTML=xe),X=d(e),ne=l(e,"P",{"data-svelte-h":!0}),_(ne)!=="svelte-zfs8mx"&&(ne.innerHTML=G),se=d(e),I=l(e,"UL",{"data-svelte-h":!0}),_(I)!=="svelte-12e1ozr"&&(I.innerHTML=ae),ve=d(e),b(ee.$$.fragment,e),_e=d(e),ge=l(e,"UL",{"data-svelte-h":!0}),_(ge)!=="svelte-1bzsg6q"&&(ge.innerHTML=Te),B=d(e),b(D.$$.fragment,e),re=d(e),te=l(e,"P",{"data-svelte-h":!0}),_(te)!=="svelte-gg6xre"&&(te.innerHTML=oe),ie=d(e),b(Y.$$.fragment,e),he=d(e),N=l(e,"DIV",{class:!0});var ke=W(N);b(ce.$$.fragment,ke),g=d(ke),J=l(ke,"P",{"data-svelte-h":!0}),_(J)!=="svelte-1wbs6ur"&&(J.innerHTML=V),Q=d(ke),h=l(ke,"P",{"data-svelte-h":!0}),_(h)!=="svelte-o55m63"&&(h.innerHTML=S),me=d(ke),b(H.$$.fragment,ke),ke.forEach(n),le=d(e),b(Me.$$.fragment,e),Re=d(e),L=l(e,"DIV",{class:!0});var de=W(L);b(Ve.$$.fragment,de),Wt=d(de),at=l(de,"P",{"data-svelte-h":!0}),_(at)!=="svelte-1uwljt8"&&(at.textContent=fo),Rt=d(de),rt=l(de,"P",{"data-svelte-h":!0}),_(rt)!=="svelte-1tlp8g2"&&(rt.innerHTML=_o),Vt=d(de),ze=l(de,"DIV",{class:!0});var ot=W(ze);b(He.$$.fragment,ot),Ht=d(ot),dt=l(ot,"P",{"data-svelte-h":!0}),_(dt)!=="svelte-wv4s2m"&&(dt.textContent=go),ot.forEach(n),Lt=d(de),je=l(de,"DIV",{class:!0});var nt=W(je);b(Le.$$.fragment,nt),Et=d(nt),it=l(nt,"P",{"data-svelte-h":!0}),_(it)!=="svelte-1f4f5kp"&&(it.innerHTML=To),nt.forEach(n),Xt=d(de),$e=l(de,"DIV",{class:!0});var kt=W($e);b(Ee.$$.fragment,kt),Pt=d(kt),ct=l(kt,"P",{"data-svelte-h":!0}),_(ct)!=="svelte-zj1vf1"&&(ct.innerHTML=bo),Bt=d(kt),lt=l(kt,"P",{"data-svelte-h":!0}),_(lt)!=="svelte-9vptpw"&&(lt.textContent=yo),kt.forEach(n),Yt=d(de),pt=l(de,"DIV",{class:!0});var Co=W(pt);b(Xe.$$.fragment,Co),Co.forEach(n),de.forEach(n),Jt=d(e),b(Pe.$$.fragment,e),Ft=d(e),ue=l(e,"DIV",{class:!0});var Fe=W(ue);b(Be.$$.fragment,Fe),Qt=d(Fe),ht=l(Fe,"P",{"data-svelte-h":!0}),_(ht)!=="svelte-g548i2"&&(ht.textContent=xo),Dt=d(Fe),mt=l(Fe,"P",{"data-svelte-h":!0}),_(mt)!=="svelte-k4j7si"&&(mt.innerHTML=vo),At=d(Fe),ut=l(Fe,"P",{"data-svelte-h":!0}),_(ut)!=="svelte-8c2aax"&&(ut.textContent=ko),Ot=d(Fe),Ce=l(Fe,"DIV",{class:!0});var Ut=W(Ce);b(Ye.$$.fragment,Ut),Kt=d(Ut),ft=l(Ut,"P",{"data-svelte-h":!0}),_(ft)!=="svelte-1a6wgfx"&&(ft.textContent=wo),Ut.forEach(n),Fe.forEach(n),zt=d(e),b(Qe.$$.fragment,e),jt=d(e),P=l(e,"DIV",{class:!0});var pe=W(P);b(De.$$.fragment,pe),eo=d(pe),_t=l(pe,"P",{"data-svelte-h":!0}),_(_t)!=="svelte-7a0qbh"&&(_t.textContent=Mo),to=d(pe),gt=l(pe,"P",{"data-svelte-h":!0}),_(gt)!=="svelte-6ypbi5"&&(gt.innerHTML=$o),oo=d(pe),qe=l(pe,"DIV",{class:!0});var Nt=W(qe);b(Ae.$$.fragment,Nt),no=d(Nt),Tt=l(Nt,"P",{"data-svelte-h":!0}),_(Tt)!=="svelte-1ny29lz"&&(Tt.innerHTML=So),Nt.forEach(n),so=d(pe),Se=l(pe,"DIV",{class:!0});var wt=W(Se);b(Oe.$$.fragment,wt),ao=d(wt),bt=l(wt,"P",{"data-svelte-h":!0}),_(bt)!=="svelte-1cj8dcb"&&(bt.textContent=Jo),ro=d(wt),b(Ie.$$.fragment,wt),wt.forEach(n),io=d(pe),Je=l(pe,"DIV",{class:!0});var Mt=W(Je);b(Ke.$$.fragment,Mt),co=d(Mt),yt=l(Mt,"P",{"data-svelte-h":!0}),_(yt)!=="svelte-pd1tp5"&&(yt.innerHTML=Fo),lo=d(Mt),b(Ue.$$.fragment,Mt),Mt.forEach(n),po=d(pe),Ne=l(pe,"DIV",{class:!0});var Zt=W(Ne);b(et.$$.fragment,Zt),ho=d(Zt),xt=l(Zt,"P",{"data-svelte-h":!0}),_(xt)!=="svelte-aq3h4a"&&(xt.innerHTML=zo),Zt.forEach(n),mo=d(pe),Ze=l(pe,"DIV",{class:!0});var Gt=W(Ze);b(tt.$$.fragment,Gt),uo=d(Gt),vt=l(Gt,"P",{"data-svelte-h":!0}),_(vt)!=="svelte-17cz8rt"&&(vt.innerHTML=jo),Gt.forEach(n),pe.forEach(n),Ct=d(e),b(Ge.$$.fragment,e),qt=d(e),$t=l(e,"P",{}),W($t).forEach(n),this.h()},h(){R(t,"name","hf:doc:metadata"),R(t,"content",sn),R(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,f){s(document.head,t),p(e,u,f),p(e,o,f),p(e,i,f),y(w,e,f),p(e,a,f),y(M,e,f),p(e,A,f),p(e,z,f),p(e,O,f),p(e,$,f),p(e,q,f),y(m,e,f),p(e,j,f),p(e,K,f),p(e,ye,f),p(e,U,f),p(e,X,f),p(e,ne,f),p(e,se,f),p(e,I,f),p(e,ve,f),y(ee,e,f),p(e,_e,f),p(e,ge,f),p(e,B,f),y(D,e,f),p(e,re,f),p(e,te,f),p(e,ie,f),y(Y,e,f),p(e,he,f),p(e,N,f),y(ce,N,null),s(N,g),s(N,J),s(N,Q),s(N,h),s(N,me),y(H,N,null),p(e,le,f),y(Me,e,f),p(e,Re,f),p(e,L,f),y(Ve,L,null),s(L,Wt),s(L,at),s(L,Rt),s(L,rt),s(L,Vt),s(L,ze),y(He,ze,null),s(ze,Ht),s(ze,dt),s(L,Lt),s(L,je),y(Le,je,null),s(je,Et),s(je,it),s(L,Xt),s(L,$e),y(Ee,$e,null),s($e,Pt),s($e,ct),s($e,Bt),s($e,lt),s(L,Yt),s(L,pt),y(Xe,pt,null),p(e,Jt,f),y(Pe,e,f),p(e,Ft,f),p(e,ue,f),y(Be,ue,null),s(ue,Qt),s(ue,ht),s(ue,Dt),s(ue,mt),s(ue,At),s(ue,ut),s(ue,Ot),s(ue,Ce),y(Ye,Ce,null),s(Ce,Kt),s(Ce,ft),p(e,zt,f),y(Qe,e,f),p(e,jt,f),p(e,P,f),y(De,P,null),s(P,eo),s(P,_t),s(P,to),s(P,gt),s(P,oo),s(P,qe),y(Ae,qe,null),s(qe,no),s(qe,Tt),s(P,so),s(P,Se),y(Oe,Se,null),s(Se,ao),s(Se,bt),s(Se,ro),y(Ie,Se,null),s(P,io),s(P,Je),y(Ke,Je,null),s(Je,co),s(Je,yt),s(Je,lo),y(Ue,Je,null),s(P,po),s(P,Ne),y(et,Ne,null),s(Ne,ho),s(Ne,xt),s(P,mo),s(P,Ze),y(tt,Ze,null),s(Ze,uo),s(Ze,vt),p(e,Ct,f),y(Ge,e,f),p(e,qt,f),p(e,$t,f),It=!0},p(e,[f]){const ke={};f&2&&(ke.$$scope={dirty:f,ctx:e}),H.$set(ke);const de={};f&2&&(de.$$scope={dirty:f,ctx:e}),Ie.$set(de);const ot={};f&2&&(ot.$$scope={dirty:f,ctx:e}),Ue.$set(ot);const nt={};f&2&&(nt.$$scope={dirty:f,ctx:e}),Ge.$set(nt)},i(e){It||(x(w.$$.fragment,e),x(M.$$.fragment,e),x(m.$$.fragment,e),x(ee.$$.fragment,e),x(D.$$.fragment,e),x(Y.$$.fragment,e),x(ce.$$.fragment,e),x(H.$$.fragment,e),x(Me.$$.fragment,e),x(Ve.$$.fragment,e),x(He.$$.fragment,e),x(Le.$$.fragment,e),x(Ee.$$.fragment,e),x(Xe.$$.fragment,e),x(Pe.$$.fragment,e),x(Be.$$.fragment,e),x(Ye.$$.fragment,e),x(Qe.$$.fragment,e),x(De.$$.fragment,e),x(Ae.$$.fragment,e),x(Oe.$$.fragment,e),x(Ie.$$.fragment,e),x(Ke.$$.fragment,e),x(Ue.$$.fragment,e),x(et.$$.fragment,e),x(tt.$$.fragment,e),x(Ge.$$.fragment,e),It=!0)},o(e){v(w.$$.fragment,e),v(M.$$.fragment,e),v(m.$$.fragment,e),v(ee.$$.fragment,e),v(D.$$.fragment,e),v(Y.$$.fragment,e),v(ce.$$.fragment,e),v(H.$$.fragment,e),v(Me.$$.fragment,e),v(Ve.$$.fragment,e),v(He.$$.fragment,e),v(Le.$$.fragment,e),v(Ee.$$.fragment,e),v(Xe.$$.fragment,e),v(Pe.$$.fragment,e),v(Be.$$.fragment,e),v(Ye.$$.fragment,e),v(Qe.$$.fragment,e),v(De.$$.fragment,e),v(Ae.$$.fragment,e),v(Oe.$$.fragment,e),v(Ie.$$.fragment,e),v(Ke.$$.fragment,e),v(Ue.$$.fragment,e),v(et.$$.fragment,e),v(tt.$$.fragment,e),v(Ge.$$.fragment,e),It=!1},d(e){e&&(n(u),n(o),n(i),n(a),n(A),n(z),n(O),n($),n(q),n(j),n(K),n(ye),n(U),n(X),n(ne),n(se),n(I),n(ve),n(_e),n(ge),n(B),n(re),n(te),n(ie),n(he),n(N),n(le),n(Re),n(L),n(Jt),n(Ft),n(ue),n(zt),n(jt),n(P),n(Ct),n(qt),n($t)),n(t),k(w,e),k(M,e),k(m,e),k(ee,e),k(D,e),k(Y,e),k(ce),k(H),k(Me,e),k(Ve),k(He),k(Le),k(Ee),k(Xe),k(Pe,e),k(Be),k(Ye),k(Qe,e),k(De),k(Ae),k(Oe),k(Ie),k(Ke),k(Ue),k(et),k(tt),k(Ge,e)}}}const sn='{"title":"Speech2Text","local":"speech2text","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Inference","local":"inference","sections":[],"depth":2},{"title":"Speech2TextConfig","local":"transformers.Speech2TextConfig","sections":[],"depth":2},{"title":"Speech2TextTokenizer","local":"transformers.Speech2TextTokenizer","sections":[],"depth":2},{"title":"Speech2TextFeatureExtractor","local":"transformers.Speech2TextFeatureExtractor","sections":[],"depth":2},{"title":"Speech2TextProcessor","local":"transformers.Speech2TextProcessor","sections":[],"depth":2},{"title":"Speech2TextModel","local":"transformers.Speech2TextModel","sections":[],"depth":2},{"title":"Speech2TextForConditionalGeneration","local":"transformers.Speech2TextForConditionalGeneration","sections":[],"depth":2},{"title":"TFSpeech2TextModel","local":"transformers.TFSpeech2TextModel","sections":[],"depth":2},{"title":"TFSpeech2TextForConditionalGeneration","local":"transformers.TFSpeech2TextForConditionalGeneration","sections":[],"depth":2}],"depth":1}';function an(F){return Uo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fn extends No{constructor(t){super(),Zo(this,t,an,nn,Io,{})}}export{fn as component};
