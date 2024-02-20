import{s as so,o as ao,n as ve}from"../chunks/scheduler.9bc65507.js";import{S as ro,i as lo,g as m,s as r,r as y,A as io,h as p,f as l,c as d,j as ce,u as b,x as M,k as me,y as a,a as h,v as T,d as v,t as w,w as Z}from"../chunks/index.707bf1b6.js";import{T as Ae}from"../chunks/Tip.c2ecdbf4.js";import{D as be}from"../chunks/Docstring.17db21ae.js";import{C as pe}from"../chunks/CodeBlock.54a9f38d.js";import{F as co,M as Oe}from"../chunks/Markdown.fef84341.js";import{E as Ee}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ye}from"../chunks/Heading.342b1fa6.js";function mo(x){let n,u="Examples:",e,s,g;return s=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEJlcnRDb25maWclMkMlMjBWaVRDb25maWclMkMlMjBWaXNpb25FbmNvZGVyRGVjb2RlckNvbmZpZyUyQyUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwVmlUJTIwJTI2JTIwQkVSVCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ19lbmNvZGVyJTIwJTNEJTIwVmlUQ29uZmlnKCklMEFjb25maWdfZGVjb2RlciUyMCUzRCUyMEJlcnRDb25maWcoKSUwQSUwQWNvbmZpZyUyMCUzRCUyMFZpc2lvbkVuY29kZXJEZWNvZGVyQ29uZmlnLmZyb21fZW5jb2Rlcl9kZWNvZGVyX2NvbmZpZ3MoY29uZmlnX2VuY29kZXIlMkMlMjBjb25maWdfZGVjb2RlciklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwVmlUQmVydCUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjBhJTIwVmlUJTIwJTI2JTIwZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbnMlMEFtb2RlbCUyMCUzRCUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwoY29uZmlnJTNEY29uZmlnKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ19lbmNvZGVyJTIwJTNEJTIwbW9kZWwuY29uZmlnLmVuY29kZXIlMEFjb25maWdfZGVjb2RlciUyMCUzRCUyMG1vZGVsLmNvbmZpZy5kZWNvZGVyJTBBJTIzJTIwc2V0JTIwZGVjb2RlciUyMGNvbmZpZyUyMHRvJTIwY2F1c2FsJTIwbG0lMEFjb25maWdfZGVjb2Rlci5pc19kZWNvZGVyJTIwJTNEJTIwVHJ1ZSUwQWNvbmZpZ19kZWNvZGVyLmFkZF9jcm9zc19hdHRlbnRpb24lMjAlM0QlMjBUcnVlJTBBJTBBJTIzJTIwU2F2aW5nJTIwdGhlJTIwbW9kZWwlMkMlMjBpbmNsdWRpbmclMjBpdHMlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwuc2F2ZV9wcmV0cmFpbmVkKCUyMm15LW1vZGVsJTIyKSUwQSUwQSUyMyUyMGxvYWRpbmclMjBtb2RlbCUyMGFuZCUyMGNvbmZpZyUyMGZyb20lMjBwcmV0cmFpbmVkJTIwZm9sZGVyJTBBZW5jb2Rlcl9kZWNvZGVyX2NvbmZpZyUyMCUzRCUyMFZpc2lvbkVuY29kZXJEZWNvZGVyQ29uZmlnLmZyb21fcHJldHJhaW5lZCglMjJteS1tb2RlbCUyMiklMEFtb2RlbCUyMCUzRCUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm15LW1vZGVsJTIyJTJDJTIwY29uZmlnJTNEZW5jb2Rlcl9kZWNvZGVyX2NvbmZpZyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViTBert model (with random weights) from a ViT &amp; google-bert/bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`,wrap:!1}}),{c(){n=m("p"),n.textContent=u,e=r(),y(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),M(n)!=="svelte-kvfsh7"&&(n.textContent=u),e=d(t),b(s.$$.fragment,t)},m(t,j){h(t,n,j),h(t,e,j),T(s,t,j),g=!0},p:ve,i(t){g||(v(s.$$.fragment,t),g=!0)},o(t){w(s.$$.fragment,t),g=!1},d(t){t&&(l(n),l(e)),Z(s,t)}}}function po(x){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=m("p"),n.innerHTML=u},l(e){n=p(e,"P",{"data-svelte-h":!0}),M(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(e,s){h(e,n,s)},p:ve,d(e){e&&l(n)}}}function ho(x){let n,u="Examples:",e,s,g;return s=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBWaXNpb25FbmNvZGVyRGVjb2Rlck1vZGVsJTBBaW1wb3J0JTIwcmVxdWVzdHMlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnRyb2NyLWJhc2UtaGFuZHdyaXR0ZW4lMjIpJTBBbW9kZWwlMjAlM0QlMjBWaXNpb25FbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZ0cm9jci1iYXNlLWhhbmR3cml0dGVuJTIyKSUwQSUwQSUyMyUyMGxvYWQlMjBpbWFnZSUyMGZyb20lMjB0aGUlMjBJQU0lMjBkYXRhc2V0JTBBdXJsJTIwJTNEJTIwJTIyaHR0cHMlM0ElMkYlMkZma2kudGljLmhlaWEtZnIuY2glMkZzdGF0aWMlMkZpbWclMkZhMDEtMTIyLTAyLmpwZyUyMiUwQWltYWdlJTIwJTNEJTIwSW1hZ2Uub3BlbihyZXF1ZXN0cy5nZXQodXJsJTJDJTIwc3RyZWFtJTNEVHJ1ZSkucmF3KS5jb252ZXJ0KCUyMlJHQiUyMiklMEElMEElMjMlMjB0cmFpbmluZyUwQW1vZGVsLmNvbmZpZy5kZWNvZGVyX3N0YXJ0X3Rva2VuX2lkJTIwJTNEJTIwcHJvY2Vzc29yLnRva2VuaXplci5jbHNfdG9rZW5faWQlMEFtb2RlbC5jb25maWcucGFkX3Rva2VuX2lkJTIwJTNEJTIwcHJvY2Vzc29yLnRva2VuaXplci5wYWRfdG9rZW5faWQlMEFtb2RlbC5jb25maWcudm9jYWJfc2l6ZSUyMCUzRCUyMG1vZGVsLmNvbmZpZy5kZWNvZGVyLnZvY2FiX3NpemUlMEElMEFwaXhlbF92YWx1ZXMlMjAlM0QlMjBwcm9jZXNzb3IoaW1hZ2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5waXhlbF92YWx1ZXMlMEF0ZXh0JTIwJTNEJTIwJTIyaGVsbG8lMjB3b3JsZCUyMiUwQWxhYmVscyUyMCUzRCUyMHByb2Nlc3Nvci50b2tlbml6ZXIodGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChwaXhlbF92YWx1ZXMlM0RwaXhlbF92YWx1ZXMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQSUwQSUyMyUyMGluZmVyZW5jZSUyMChnZW5lcmF0aW9uKSUwQWdlbmVyYXRlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShwaXhlbF92YWx1ZXMpJTBBZ2VuZXJhdGVkX3RleHQlMjAlM0QlMjBwcm9jZXNzb3IuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZF9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklNUIwJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = processor.tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;hello world&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor.tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference (generation)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]`,wrap:!1}}),{c(){n=m("p"),n.textContent=u,e=r(),y(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),M(n)!=="svelte-kvfsh7"&&(n.textContent=u),e=d(t),b(s.$$.fragment,t)},m(t,j){h(t,n,j),h(t,e,j),T(s,t,j),g=!0},p:ve,i(t){g||(v(s.$$.fragment,t),g=!0)},o(t){w(s.$$.fragment,t),g=!1},d(t){t&&(l(n),l(e)),Z(s,t)}}}function uo(x){let n,u="Example:",e,s,g;return s=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwlMEElMEElMjMlMjBpbml0aWFsaXplJTIwYSUyMHZpdC1iZXJ0JTIwZnJvbSUyMGElMjBwcmV0cmFpbmVkJTIwVmlUJTIwYW5kJTIwYSUyMHByZXRyYWluZWQlMjBCRVJUJTIwbW9kZWwuJTIwTm90ZSUyMHRoYXQlMjB0aGUlMjBjcm9zcy1hdHRlbnRpb24lMjBsYXllcnMlMjB3aWxsJTIwYmUlMjByYW5kb21seSUyMGluaXRpYWxpemVkJTBBbW9kZWwlMjAlM0QlMjBWaXNpb25FbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fZW5jb2Rlcl9kZWNvZGVyX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZ29vZ2xlJTJGdml0LWJhc2UtcGF0Y2gxNi0yMjQtaW4yMWslMjIlMkMlMjAlMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS11bmNhc2VkJTIyJTBBKSUwQSUyMyUyMHNhdmluZyUyMG1vZGVsJTIwYWZ0ZXIlMjBmaW5lLXR1bmluZyUwQW1vZGVsLnNhdmVfcHJldHJhaW5lZCglMjIuJTJGdml0LWJlcnQlMjIpJTBBJTIzJTIwbG9hZCUyMGZpbmUtdHVuZWQlMjBtb2RlbCUwQW1vZGVsJTIwJTNEJTIwVmlzaW9uRW5jb2RlckRlY29kZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyLiUyRnZpdC1iZXJ0JTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`,wrap:!1}}),{c(){n=m("p"),n.textContent=u,e=r(),y(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),M(n)!=="svelte-11lpom8"&&(n.textContent=u),e=d(t),b(s.$$.fragment,t)},m(t,j){h(t,n,j),h(t,e,j),T(s,t,j),g=!0},p:ve,i(t){g||(v(s.$$.fragment,t),g=!0)},o(t){w(s.$$.fragment,t),g=!1},d(t){t&&(l(n),l(e)),Z(s,t)}}}function fo(x){let n,u,e,s,g,t,j=`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
<a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a> function and the decoder is loaded via <a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a>
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`,Q,I,he=`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in <a href="https://arxiv.org/abs/1907.12461" rel="nofollow">Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks</a> by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`,S,C,ue=`Additionally, in <a href="https://arxiv.org/abs/2109.10282" rel="nofollow">TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models</a> it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`,P,G,fe=`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`,A,R,ge=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,O,B,de=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,q,D,le=`<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel">VisionEncoderDecoderModel</a> is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth<em>~transformers.AutoModel.from_pretrained</em> class method for the encoder and
:meth<em>~transformers.AutoModelForCausalLM.from_pretrained</em> class method for the decoder.`,H,J,F,K,X,_e='The <a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel">VisionEncoderDecoderModel</a> forward method, overrides the <code>__call__</code> special method.',ee,$,oe,U,ne,k,N,te,z,Me=`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`,se,E,L=`The model is set in evaluation mode by default using <code>model.eval()</code> (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with <code>model.train()</code>.`,c,i,W;return n=new ye({props:{title:"VisionEncoderDecoderModel",local:"transformers.VisionEncoderDecoderModel",headingTag:"h2"}}),s=new be({props:{name:"class transformers.VisionEncoderDecoderModel",anchor:"transformers.VisionEncoderDecoderModel",parameters:[{name:"config",val:": Optional = None"},{name:"encoder",val:": Optional = None"},{name:"decoder",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L150"}}),F=new be({props:{name:"forward",anchor:"transformers.VisionEncoderDecoderModel.forward",parameters:[{name:"pixel_values",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using an image processor (e.g. if you use ViT as the encoder,
you should use <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>). See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViTImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.VisionEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.VisionEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.VisionEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisionEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>~utils.Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisionEncoderDecoderModel.forward.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014; Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L513",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),$=new Ae({props:{$$slots:{default:[po]},$$scope:{ctx:x}}}),U=new Ee({props:{anchor:"transformers.VisionEncoderDecoderModel.forward.example",$$slots:{default:[ho]},$$scope:{ctx:x}}}),N=new be({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the image encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the text decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L361"}}),i=new Ee({props:{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[uo]},$$scope:{ctx:x}}}),{c(){y(n.$$.fragment),u=r(),e=m("div"),y(s.$$.fragment),g=r(),t=m("p"),t.innerHTML=j,Q=r(),I=m("p"),I.innerHTML=he,S=r(),C=m("p"),C.innerHTML=ue,P=r(),G=m("p"),G.textContent=fe,A=r(),R=m("p"),R.innerHTML=ge,O=r(),B=m("p"),B.innerHTML=de,q=r(),D=m("p"),D.innerHTML=le,H=r(),J=m("div"),y(F.$$.fragment),K=r(),X=m("p"),X.innerHTML=_e,ee=r(),y($.$$.fragment),oe=r(),y(U.$$.fragment),ne=r(),k=m("div"),y(N.$$.fragment),te=r(),z=m("p"),z.textContent=Me,se=r(),E=m("p"),E.innerHTML=L,c=r(),y(i.$$.fragment),this.h()},l(_){b(n.$$.fragment,_),u=d(_),e=p(_,"DIV",{class:!0});var V=ce(e);b(s.$$.fragment,V),g=d(V),t=p(V,"P",{"data-svelte-h":!0}),M(t)!=="svelte-eb2kp6"&&(t.innerHTML=j),Q=d(V),I=p(V,"P",{"data-svelte-h":!0}),M(I)!=="svelte-1faerbf"&&(I.innerHTML=he),S=d(V),C=p(V,"P",{"data-svelte-h":!0}),M(C)!=="svelte-yi0xwh"&&(C.innerHTML=ue),P=d(V),G=p(V,"P",{"data-svelte-h":!0}),M(G)!=="svelte-1q35eh4"&&(G.textContent=fe),A=d(V),R=p(V,"P",{"data-svelte-h":!0}),M(R)!=="svelte-6pahdo"&&(R.innerHTML=ge),O=d(V),B=p(V,"P",{"data-svelte-h":!0}),M(B)!=="svelte-hswkmf"&&(B.innerHTML=de),q=d(V),D=p(V,"P",{"data-svelte-h":!0}),M(D)!=="svelte-11tok3b"&&(D.innerHTML=le),H=d(V),J=p(V,"DIV",{class:!0});var Y=ce(J);b(F.$$.fragment,Y),K=d(Y),X=p(Y,"P",{"data-svelte-h":!0}),M(X)!=="svelte-xh9dp3"&&(X.innerHTML=_e),ee=d(Y),b($.$$.fragment,Y),oe=d(Y),b(U.$$.fragment,Y),Y.forEach(l),ne=d(V),k=p(V,"DIV",{class:!0});var ae=ce(k);b(N.$$.fragment,ae),te=d(ae),z=p(ae,"P",{"data-svelte-h":!0}),M(z)!=="svelte-n4p3zm"&&(z.textContent=Me),se=d(ae),E=p(ae,"P",{"data-svelte-h":!0}),M(E)!=="svelte-ce5sus"&&(E.innerHTML=L),c=d(ae),b(i.$$.fragment,ae),ae.forEach(l),V.forEach(l),this.h()},h(){me(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),me(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),me(e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(_,V){T(n,_,V),h(_,u,V),h(_,e,V),T(s,e,null),a(e,g),a(e,t),a(e,Q),a(e,I),a(e,S),a(e,C),a(e,P),a(e,G),a(e,A),a(e,R),a(e,O),a(e,B),a(e,q),a(e,D),a(e,H),a(e,J),T(F,J,null),a(J,K),a(J,X),a(J,ee),T($,J,null),a(J,oe),T(U,J,null),a(e,ne),a(e,k),T(N,k,null),a(k,te),a(k,z),a(k,se),a(k,E),a(k,c),T(i,k,null),W=!0},p(_,V){const Y={};V&2&&(Y.$$scope={dirty:V,ctx:_}),$.$set(Y);const ae={};V&2&&(ae.$$scope={dirty:V,ctx:_}),U.$set(ae);const Te={};V&2&&(Te.$$scope={dirty:V,ctx:_}),i.$set(Te)},i(_){W||(v(n.$$.fragment,_),v(s.$$.fragment,_),v(F.$$.fragment,_),v($.$$.fragment,_),v(U.$$.fragment,_),v(N.$$.fragment,_),v(i.$$.fragment,_),W=!0)},o(_){w(n.$$.fragment,_),w(s.$$.fragment,_),w(F.$$.fragment,_),w($.$$.fragment,_),w(U.$$.fragment,_),w(N.$$.fragment,_),w(i.$$.fragment,_),W=!1},d(_){_&&(l(u),l(e)),Z(n,_),Z(s),Z(F),Z($),Z(U),Z(N),Z(i)}}}function go(x){let n,u;return n=new Oe({props:{$$slots:{default:[fo]},$$scope:{ctx:x}}}),{c(){y(n.$$.fragment)},l(e){b(n.$$.fragment,e)},m(e,s){T(n,e,s),u=!0},p(e,s){const g={};s&2&&(g.$$scope={dirty:s,ctx:e}),n.$set(g)},i(e){u||(v(n.$$.fragment,e),u=!0)},o(e){w(n.$$.fragment,e),u=!1},d(e){Z(n,e)}}}function _o(x){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=m("p"),n.innerHTML=u},l(e){n=p(e,"P",{"data-svelte-h":!0}),M(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(e,s){h(e,n,s)},p:ve,d(e){e&&l(n)}}}function Mo(x){let n,u="Examples:",e,s,g;return s=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEFpbXBvcnQlMjByZXF1ZXN0cyUwQSUwQWltYWdlX3Byb2Nlc3NvciUyMCUzRCUyMEF1dG9JbWFnZVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGdml0LWJhc2UtcGF0Y2gxNi0yMjQtaW4yMWslMjIpJTBBZGVjb2Rlcl90b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEElMEElMjMlMjBpbml0aWFsaXplJTIwYSUyMGJlcnQyZ3B0MiUyMGZyb20lMjBhJTIwcHJldHJhaW5lZCUyMEJFUlQlMjBhbmQlMjBHUFQyJTIwbW9kZWxzLiUyME5vdGUlMjB0aGF0JTIwdGhlJTIwY3Jvc3MtYXR0ZW50aW9uJTIwbGF5ZXJzJTIwd2lsbCUyMGJlJTIwcmFuZG9tbHklMjBpbml0aWFsaXplZCUwQW1vZGVsJTIwJTNEJTIwVEZWaXNpb25FbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fZW5jb2Rlcl9kZWNvZGVyX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZ29vZ2xlJTJGdml0LWJhc2UtcGF0Y2gxNi0yMjQtaW4yMWslMjIlMkMlMjAlMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiUwQSklMEElMEF1cmwlMjAlM0QlMjAlMjJodHRwJTNBJTJGJTJGaW1hZ2VzLmNvY29kYXRhc2V0Lm9yZyUyRnZhbDIwMTclMkYwMDAwMDAwMzk3NjkuanBnJTIyJTBBaW1nJTIwJTNEJTIwSW1hZ2Uub3BlbihyZXF1ZXN0cy5nZXQodXJsJTJDJTIwc3RyZWFtJTNEVHJ1ZSkucmF3KSUwQSUwQSUyMyUyMGZvcndhcmQlMEFwaXhlbF92YWx1ZXMlMjAlM0QlMjBpbWFnZV9wcm9jZXNzb3IoaW1hZ2VzJTNEaW1nJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMikucGl4ZWxfdmFsdWVzJTIwJTIwJTIzJTIwQmF0Y2glMjBzaXplJTIwMSUwQWRlY29kZXJfaW5wdXRfaWRzJTIwJTNEJTIwZGVjb2Rlcl90b2tlbml6ZXIoJTIyTGluZGElMjBEYXZpcyUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpLmlucHV0X2lkcyUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUyMDElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwocGl4ZWxfdmFsdWVzJTNEcGl4ZWxfdmFsdWVzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RkZWNvZGVyX2lucHV0X2lkcyklMEElMEElMjMlMjB0cmFpbmluZyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChwaXhlbF92YWx1ZXMlM0RwaXhlbF92YWx1ZXMlMkMlMjBkZWNvZGVyX2lucHV0X2lkcyUzRGRlY29kZXJfaW5wdXRfaWRzJTJDJTIwbGFiZWxzJTNEZGVjb2Rlcl9pbnB1dF9pZHMpJTBBbG9zcyUyQyUyMGxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9zcyUyQyUyMG91dHB1dHMubG9naXRzJTBBJTBBJTIzJTIwc2F2ZSUyMGFuZCUyMGxvYWQlMjBmcm9tJTIwcHJldHJhaW5lZCUwQW1vZGVsLnNhdmVfcHJldHJhaW5lZCglMjJ2aXQtZ3B0MiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGVmlzaW9uRW5jb2RlckRlY29kZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIydml0LWdwdDIlMjIpJTBBJTBBJTIzJTIwZ2VuZXJhdGlvbiUwQWdlbmVyYXRlZCUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKHBpeGVsX3ZhbHVlcyUyQyUyMGRlY29kZXJfc3RhcnRfdG9rZW5faWQlM0Rtb2RlbC5jb25maWcuZGVjb2Rlci5ib3NfdG9rZW5faWQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, AutoTokenizer, TFVisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;openai-community/gpt2&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>img = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = image_processor(images=img, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).pixel_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = decoder_tokenizer(<span class="hljs-string">&quot;Linda Davis&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids, labels=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;vit-gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(pixel_values, decoder_start_token_id=model.config.decoder.bos_token_id)`,wrap:!1}}),{c(){n=m("p"),n.textContent=u,e=r(),y(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),M(n)!=="svelte-kvfsh7"&&(n.textContent=u),e=d(t),b(s.$$.fragment,t)},m(t,j){h(t,n,j),h(t,e,j),T(s,t,j),g=!0},p:ve,i(t){g||(v(s.$$.fragment,t),g=!0)},o(t){w(s.$$.fragment,t),g=!1},d(t){t&&(l(n),l(e)),Z(s,t)}}}function yo(x){let n,u="Example:",e,s,g;return s=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRGVmlzaW9uRW5jb2RlckRlY29kZXJNb2RlbCUwQSUwQSUyMyUyMGluaXRpYWxpemUlMjBhJTIwdml0LWJlcnQlMjBmcm9tJTIwYSUyMHByZXRyYWluZWQlMjBWaVQlMjBhbmQlMjBhJTIwcHJldHJhaW5lZCUyMEJFUlQlMjBtb2RlbC4lMjBOb3RlJTIwdGhhdCUyMHRoZSUyMGNyb3NzLWF0dGVudGlvbiUyMGxheWVycyUyMHdpbGwlMjBiZSUyMHJhbmRvbWx5JTIwaW5pdGlhbGl6ZWQlMEFtb2RlbCUyMCUzRCUyMFRGVmlzaW9uRW5jb2RlckRlY29kZXJNb2RlbC5mcm9tX2VuY29kZXJfZGVjb2Rlcl9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMmdvb2dsZSUyRnZpdC1iYXNlLXBhdGNoMTYtMjI0LWluMjFrJTIyJTJDJTIwJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiUwQSklMEElMjMlMjBzYXZpbmclMjBtb2RlbCUyMGFmdGVyJTIwZmluZS10dW5pbmclMEFtb2RlbC5zYXZlX3ByZXRyYWluZWQoJTIyLiUyRnZpdC1iZXJ0JTIyKSUwQSUyMyUyMGxvYWQlMjBmaW5lLXR1bmVkJTIwbW9kZWwlMEFtb2RlbCUyMCUzRCUyMFRGVmlzaW9uRW5jb2RlckRlY29kZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyLiUyRnZpdC1iZXJ0JTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`,wrap:!1}}),{c(){n=m("p"),n.textContent=u,e=r(),y(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),M(n)!=="svelte-11lpom8"&&(n.textContent=u),e=d(t),b(s.$$.fragment,t)},m(t,j){h(t,n,j),h(t,e,j),T(s,t,j),g=!0},p:ve,i(t){g||(v(s.$$.fragment,t),g=!0)},o(t){w(s.$$.fragment,t),g=!1},d(t){t&&(l(n),l(e)),Z(s,t)}}}function bo(x){let n,u,e,s,g,t,j=`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
<a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a> function and the decoder is loaded via <a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a>
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`,Q,I,he=`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in <a href="https://arxiv.org/abs/1907.12461" rel="nofollow">Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks</a> by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`,S,C,ue=`Additionally, in <a href="https://arxiv.org/abs/2109.10282" rel="nofollow">TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models</a> it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`,P,G,fe=`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`,A,R,ge=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,O,B,de=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,q,D,le=`<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel">TFVisionEncoderDecoderModel</a> is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the <a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a> class method for the encoder and
<a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a> class method for the decoder.`,H,J,F,K,X,_e='The <a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel">TFVisionEncoderDecoderModel</a> forward method, overrides the <code>__call__</code> special method.',ee,$,oe,U,ne,k,N,te,z,Me=`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`,se,E,L;return n=new ye({props:{title:"TFVisionEncoderDecoderModel",local:"transformers.TFVisionEncoderDecoderModel",headingTag:"h2"}}),s=new be({props:{name:"class transformers.TFVisionEncoderDecoderModel",anchor:"transformers.TFVisionEncoderDecoderModel",parameters:[{name:"config",val:": Optional[PretrainedConfig] = None"},{name:"encoder",val:": Optional[TFPreTrainedModel] = None"},{name:"decoder",val:": Optional[TFPreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L175"}}),F=new be({props:{name:"call",anchor:"transformers.TFVisionEncoderDecoderModel.call",parameters:[{name:"pixel_values",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": Optional[Union[Tuple, TFBaseModelOutput]] = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"decoder_inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision&#x2019;s model&#x2019;s image processor. For example, using
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViTImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.`,name:"decoder_input_ids"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output
of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>~utils.Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014; Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L456",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),$=new Ae({props:{$$slots:{default:[_o]},$$scope:{ctx:x}}}),U=new Ee({props:{anchor:"transformers.TFVisionEncoderDecoderModel.call.example",$$slots:{default:[Mo]},$$scope:{ctx:x}}}),N=new be({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>decoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L310"}}),E=new Ee({props:{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[yo]},$$scope:{ctx:x}}}),{c(){y(n.$$.fragment),u=r(),e=m("div"),y(s.$$.fragment),g=r(),t=m("p"),t.innerHTML=j,Q=r(),I=m("p"),I.innerHTML=he,S=r(),C=m("p"),C.innerHTML=ue,P=r(),G=m("p"),G.textContent=fe,A=r(),R=m("p"),R.innerHTML=ge,O=r(),B=m("p"),B.innerHTML=de,q=r(),D=m("p"),D.innerHTML=le,H=r(),J=m("div"),y(F.$$.fragment),K=r(),X=m("p"),X.innerHTML=_e,ee=r(),y($.$$.fragment),oe=r(),y(U.$$.fragment),ne=r(),k=m("div"),y(N.$$.fragment),te=r(),z=m("p"),z.textContent=Me,se=r(),y(E.$$.fragment),this.h()},l(c){b(n.$$.fragment,c),u=d(c),e=p(c,"DIV",{class:!0});var i=ce(e);b(s.$$.fragment,i),g=d(i),t=p(i,"P",{"data-svelte-h":!0}),M(t)!=="svelte-eb2kp6"&&(t.innerHTML=j),Q=d(i),I=p(i,"P",{"data-svelte-h":!0}),M(I)!=="svelte-1faerbf"&&(I.innerHTML=he),S=d(i),C=p(i,"P",{"data-svelte-h":!0}),M(C)!=="svelte-yi0xwh"&&(C.innerHTML=ue),P=d(i),G=p(i,"P",{"data-svelte-h":!0}),M(G)!=="svelte-1q35eh4"&&(G.textContent=fe),A=d(i),R=p(i,"P",{"data-svelte-h":!0}),M(R)!=="svelte-1qaxm70"&&(R.innerHTML=ge),O=d(i),B=p(i,"P",{"data-svelte-h":!0}),M(B)!=="svelte-1be7e3c"&&(B.innerHTML=de),q=d(i),D=p(i,"P",{"data-svelte-h":!0}),M(D)!=="svelte-1xbkq2s"&&(D.innerHTML=le),H=d(i),J=p(i,"DIV",{class:!0});var W=ce(J);b(F.$$.fragment,W),K=d(W),X=p(W,"P",{"data-svelte-h":!0}),M(X)!=="svelte-165cwwf"&&(X.innerHTML=_e),ee=d(W),b($.$$.fragment,W),oe=d(W),b(U.$$.fragment,W),W.forEach(l),ne=d(i),k=p(i,"DIV",{class:!0});var _=ce(k);b(N.$$.fragment,_),te=d(_),z=p(_,"P",{"data-svelte-h":!0}),M(z)!=="svelte-n4p3zm"&&(z.textContent=Me),se=d(_),b(E.$$.fragment,_),_.forEach(l),i.forEach(l),this.h()},h(){me(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),me(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),me(e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(c,i){T(n,c,i),h(c,u,i),h(c,e,i),T(s,e,null),a(e,g),a(e,t),a(e,Q),a(e,I),a(e,S),a(e,C),a(e,P),a(e,G),a(e,A),a(e,R),a(e,O),a(e,B),a(e,q),a(e,D),a(e,H),a(e,J),T(F,J,null),a(J,K),a(J,X),a(J,ee),T($,J,null),a(J,oe),T(U,J,null),a(e,ne),a(e,k),T(N,k,null),a(k,te),a(k,z),a(k,se),T(E,k,null),L=!0},p(c,i){const W={};i&2&&(W.$$scope={dirty:i,ctx:c}),$.$set(W);const _={};i&2&&(_.$$scope={dirty:i,ctx:c}),U.$set(_);const V={};i&2&&(V.$$scope={dirty:i,ctx:c}),E.$set(V)},i(c){L||(v(n.$$.fragment,c),v(s.$$.fragment,c),v(F.$$.fragment,c),v($.$$.fragment,c),v(U.$$.fragment,c),v(N.$$.fragment,c),v(E.$$.fragment,c),L=!0)},o(c){w(n.$$.fragment,c),w(s.$$.fragment,c),w(F.$$.fragment,c),w($.$$.fragment,c),w(U.$$.fragment,c),w(N.$$.fragment,c),w(E.$$.fragment,c),L=!1},d(c){c&&(l(u),l(e)),Z(n,c),Z(s),Z(F),Z($),Z(U),Z(N),Z(E)}}}function To(x){let n,u;return n=new Oe({props:{$$slots:{default:[bo]},$$scope:{ctx:x}}}),{c(){y(n.$$.fragment)},l(e){b(n.$$.fragment,e)},m(e,s){T(n,e,s),u=!0},p(e,s){const g={};s&2&&(g.$$scope={dirty:s,ctx:e}),n.$set(g)},i(e){u||(v(n.$$.fragment,e),u=!0)},o(e){w(n.$$.fragment,e),u=!1},d(e){Z(n,e)}}}function vo(x){let n,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){n=m("p"),n.innerHTML=u},l(e){n=p(e,"P",{"data-svelte-h":!0}),M(n)!=="svelte-fincs2"&&(n.innerHTML=u)},m(e,s){h(e,n,s)},p:ve,d(e){e&&l(n)}}}function wo(x){let n,u="Examples:",e,s,g;return s=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEZsYXhWaXNpb25FbmNvZGVyRGVjb2Rlck1vZGVsJTJDJTIwQXV0b0ltYWdlUHJvY2Vzc29yJTJDJTIwQXV0b1Rva2VuaXplciUwQWZyb20lMjBQSUwlMjBpbXBvcnQlMjBJbWFnZSUwQWltcG9ydCUyMHJlcXVlc3RzJTBBJTBBdXJsJTIwJTNEJTIwJTIyaHR0cCUzQSUyRiUyRmltYWdlcy5jb2NvZGF0YXNldC5vcmclMkZ2YWwyMDE3JTJGMDAwMDAwMDM5NzY5LmpwZyUyMiUwQWltYWdlJTIwJTNEJTIwSW1hZ2Uub3BlbihyZXF1ZXN0cy5nZXQodXJsJTJDJTIwc3RyZWFtJTNEVHJ1ZSkucmF3KSUwQSUwQWltYWdlX3Byb2Nlc3NvciUyMCUzRCUyMEF1dG9JbWFnZVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGdml0LWJhc2UtcGF0Y2gxNi0yMjQtaW4yMWslMjIpJTBBJTBBJTIzJTIwbG9hZCUyMG91dHB1dCUyMHRva2VuaXplciUwQXRva2VuaXplcl9vdXRwdXQlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEElMEElMjMlMjBpbml0aWFsaXplJTIwYSUyMHZpdC1ncHQyJTIwZnJvbSUyMHByZXRyYWluZWQlMjBWaVQlMjBhbmQlMjBHUFQyJTIwbW9kZWxzLiUyME5vdGUlMjB0aGF0JTIwdGhlJTIwY3Jvc3MtYXR0ZW50aW9uJTIwbGF5ZXJzJTIwd2lsbCUyMGJlJTIwcmFuZG9tbHklMjBpbml0aWFsaXplZCUwQW1vZGVsJTIwJTNEJTIwRmxheFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9lbmNvZGVyX2RlY29kZXJfcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJnb29nbGUlMkZ2aXQtYmFzZS1wYXRjaDE2LTIyNC1pbjIxayUyMiUyQyUyMCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyJTBBKSUwQSUwQXBpeGVsX3ZhbHVlcyUyMCUzRCUyMGltYWdlX3Byb2Nlc3NvcihpbWFnZXMlM0RpbWFnZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpLnBpeGVsX3ZhbHVlcyUwQSUwQSUyMyUyMHVzZSUyMEdQVDIncyUyMGVvc190b2tlbiUyMGFzJTIwdGhlJTIwcGFkJTIwYXMlMjB3ZWxsJTIwYXMlMjBlb3MlMjB0b2tlbiUwQW1vZGVsLmNvbmZpZy5lb3NfdG9rZW5faWQlMjAlM0QlMjBtb2RlbC5jb25maWcuZGVjb2Rlci5lb3NfdG9rZW5faWQlMEFtb2RlbC5jb25maWcucGFkX3Rva2VuX2lkJTIwJTNEJTIwbW9kZWwuY29uZmlnLmVvc190b2tlbl9pZCUwQSUwQSUyMyUyMGdlbmVyYXRpb24lMEFzZXF1ZW5jZXMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShwaXhlbF92YWx1ZXMlMkMlMjBudW1fYmVhbXMlM0Q0JTJDJTIwbWF4X2xlbmd0aCUzRDEyKS5zZXF1ZW5jZXMlMEElMEFjYXB0aW9ucyUyMCUzRCUyMHRva2VuaXplcl9vdXRwdXQuYmF0Y2hfZGVjb2RlKHNlcXVlbmNlcyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel, AutoImageProcessor, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;openai-community/gpt2&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = image_processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(pixel_values, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)`,wrap:!1}}),{c(){n=m("p"),n.textContent=u,e=r(),y(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),M(n)!=="svelte-kvfsh7"&&(n.textContent=u),e=d(t),b(s.$$.fragment,t)},m(t,j){h(t,n,j),h(t,e,j),T(s,t,j),g=!0},p:ve,i(t){g||(v(s.$$.fragment,t),g=!0)},o(t){w(s.$$.fragment,t),g=!1},d(t){t&&(l(n),l(e)),Z(s,t)}}}function Zo(x){let n,u="Example:",e,s,g;return s=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEZsYXhWaXNpb25FbmNvZGVyRGVjb2Rlck1vZGVsJTBBJTBBJTIzJTIwaW5pdGlhbGl6ZSUyMGElMjB2aXQtZ3B0MiUyMGZyb20lMjBhJTIwcHJldHJhaW5lZCUyMFZpVCUyMGFuZCUyMGElMjBwcmV0cmFpbmVkJTIwR1BUMiUyMG1vZGVsLiUyME5vdGUlMjB0aGF0JTIwdGhlJTIwY3Jvc3MtYXR0ZW50aW9uJTIwbGF5ZXJzJTIwd2lsbCUyMGJlJTIwcmFuZG9tbHklMjBpbml0aWFsaXplZCUwQW1vZGVsJTIwJTNEJTIwRmxheFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9lbmNvZGVyX2RlY29kZXJfcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJnb29nbGUlMkZ2aXQtYmFzZS1wYXRjaDE2LTIyNC1pbjIxayUyMiUyQyUyMCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyJTBBKSUwQSUyMyUyMHNhdmluZyUyMG1vZGVsJTIwYWZ0ZXIlMjBmaW5lLXR1bmluZyUwQW1vZGVsLnNhdmVfcHJldHJhaW5lZCglMjIuJTJGdml0LWdwdDIlMjIpJTBBJTIzJTIwbG9hZCUyMGZpbmUtdHVuZWQlMjBtb2RlbCUwQW1vZGVsJTIwJTNEJTIwRmxheFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMi4lMkZ2aXQtZ3B0MiUyMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;openai-community/gpt2&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)`,wrap:!1}}),{c(){n=m("p"),n.textContent=u,e=r(),y(s.$$.fragment)},l(t){n=p(t,"P",{"data-svelte-h":!0}),M(n)!=="svelte-11lpom8"&&(n.textContent=u),e=d(t),b(s.$$.fragment,t)},m(t,j){h(t,n,j),h(t,e,j),T(s,t,j),g=!0},p:ve,i(t){g||(v(s.$$.fragment,t),g=!0)},o(t){w(s.$$.fragment,t),g=!1},d(t){t&&(l(n),l(e)),Z(s,t)}}}function jo(x){let n,u,e,s,g,t,j=`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
<a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a> function and the decoder is loaded via <a href="/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained">from_pretrained()</a>
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`,Q,I,he=`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in <a href="https://arxiv.org/abs/1907.12461" rel="nofollow">Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks</a> by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`,S,C,ue=`Additionally, in <a href="https://arxiv.org/abs/2109.10282" rel="nofollow">TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models</a> it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`,P,G,fe=`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`,A,R,ge=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,O,B,de=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,q,D,le=`<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel">FlaxVisionEncoderDecoderModel</a> is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth<em>~transformers.FlaxAutoModel.from_pretrained</em> class method
for the encoder and :meth<em>~transformers.FlaxAutoModelForCausalLM.from_pretrained</em> class method for the decoder.`,H,J,F,K,X,_e='The <a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel">FlaxVisionEncoderDecoderModel</a> forward method, overrides the <code>__call__</code> special method.',ee,$,oe,U,ne,k,N,te,z,Me=`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`,se,E,L;return n=new ye({props:{title:"FlaxVisionEncoderDecoderModel",local:"transformers.FlaxVisionEncoderDecoderModel",headingTag:"h2"}}),s=new be({props:{name:"class transformers.FlaxVisionEncoderDecoderModel",anchor:"transformers.FlaxVisionEncoderDecoderModel",parameters:[{name:"config",val:": VisionEncoderDecoderConfig"},{name:"input_shape",val:": Optional = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L267"}}),F=new be({props:{name:"__call__",anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__",parameters:[{name:"pixel_values",val:": Array"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision model&#x2019;s image processor. For example, using
<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViTImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>~utils.FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L599",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
`}}),$=new Ae({props:{$$slots:{default:[vo]},$$scope:{ctx:x}}}),U=new Ee({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.example",$$slots:{default:[wo]},$$scope:{ctx:x}}}),N=new be({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": Union = None"},{name:"decoder_pretrained_model_name_or_path",val:": Union = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L724"}}),E=new Ee({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Zo]},$$scope:{ctx:x}}}),{c(){y(n.$$.fragment),u=r(),e=m("div"),y(s.$$.fragment),g=r(),t=m("p"),t.innerHTML=j,Q=r(),I=m("p"),I.innerHTML=he,S=r(),C=m("p"),C.innerHTML=ue,P=r(),G=m("p"),G.textContent=fe,A=r(),R=m("p"),R.innerHTML=ge,O=r(),B=m("p"),B.innerHTML=de,q=r(),D=m("p"),D.innerHTML=le,H=r(),J=m("div"),y(F.$$.fragment),K=r(),X=m("p"),X.innerHTML=_e,ee=r(),y($.$$.fragment),oe=r(),y(U.$$.fragment),ne=r(),k=m("div"),y(N.$$.fragment),te=r(),z=m("p"),z.textContent=Me,se=r(),y(E.$$.fragment),this.h()},l(c){b(n.$$.fragment,c),u=d(c),e=p(c,"DIV",{class:!0});var i=ce(e);b(s.$$.fragment,i),g=d(i),t=p(i,"P",{"data-svelte-h":!0}),M(t)!=="svelte-eb2kp6"&&(t.innerHTML=j),Q=d(i),I=p(i,"P",{"data-svelte-h":!0}),M(I)!=="svelte-1faerbf"&&(I.innerHTML=he),S=d(i),C=p(i,"P",{"data-svelte-h":!0}),M(C)!=="svelte-yi0xwh"&&(C.innerHTML=ue),P=d(i),G=p(i,"P",{"data-svelte-h":!0}),M(G)!=="svelte-1q35eh4"&&(G.textContent=fe),A=d(i),R=p(i,"P",{"data-svelte-h":!0}),M(R)!=="svelte-18ki9f4"&&(R.innerHTML=ge),O=d(i),B=p(i,"P",{"data-svelte-h":!0}),M(B)!=="svelte-idybz1"&&(B.innerHTML=de),q=d(i),D=p(i,"P",{"data-svelte-h":!0}),M(D)!=="svelte-ijuyf3"&&(D.innerHTML=le),H=d(i),J=p(i,"DIV",{class:!0});var W=ce(J);b(F.$$.fragment,W),K=d(W),X=p(W,"P",{"data-svelte-h":!0}),M(X)!=="svelte-5ggsxr"&&(X.innerHTML=_e),ee=d(W),b($.$$.fragment,W),oe=d(W),b(U.$$.fragment,W),W.forEach(l),ne=d(i),k=p(i,"DIV",{class:!0});var _=ce(k);b(N.$$.fragment,_),te=d(_),z=p(_,"P",{"data-svelte-h":!0}),M(z)!=="svelte-n4p3zm"&&(z.textContent=Me),se=d(_),b(E.$$.fragment,_),_.forEach(l),i.forEach(l),this.h()},h(){me(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),me(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),me(e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(c,i){T(n,c,i),h(c,u,i),h(c,e,i),T(s,e,null),a(e,g),a(e,t),a(e,Q),a(e,I),a(e,S),a(e,C),a(e,P),a(e,G),a(e,A),a(e,R),a(e,O),a(e,B),a(e,q),a(e,D),a(e,H),a(e,J),T(F,J,null),a(J,K),a(J,X),a(J,ee),T($,J,null),a(J,oe),T(U,J,null),a(e,ne),a(e,k),T(N,k,null),a(k,te),a(k,z),a(k,se),T(E,k,null),L=!0},p(c,i){const W={};i&2&&(W.$$scope={dirty:i,ctx:c}),$.$set(W);const _={};i&2&&(_.$$scope={dirty:i,ctx:c}),U.$set(_);const V={};i&2&&(V.$$scope={dirty:i,ctx:c}),E.$set(V)},i(c){L||(v(n.$$.fragment,c),v(s.$$.fragment,c),v(F.$$.fragment,c),v($.$$.fragment,c),v(U.$$.fragment,c),v(N.$$.fragment,c),v(E.$$.fragment,c),L=!0)},o(c){w(n.$$.fragment,c),w(s.$$.fragment,c),w(F.$$.fragment,c),w($.$$.fragment,c),w(U.$$.fragment,c),w(N.$$.fragment,c),w(E.$$.fragment,c),L=!1},d(c){c&&(l(u),l(e)),Z(n,c),Z(s),Z(F),Z($),Z(U),Z(N),Z(E)}}}function Jo(x){let n,u;return n=new Oe({props:{$$slots:{default:[jo]},$$scope:{ctx:x}}}),{c(){y(n.$$.fragment)},l(e){b(n.$$.fragment,e)},m(e,s){T(n,e,s),u=!0},p(e,s){const g={};s&2&&(g.$$scope={dirty:s,ctx:e}),n.$set(g)},i(e){u||(v(n.$$.fragment,e),u=!0)},o(e){w(n.$$.fragment,e),u=!1},d(e){Z(n,e)}}}function ko(x){let n,u,e,s,g,t,j,Q,I,he=`The <a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel">VisionEncoderDecoderModel</a> can be used to initialize an image-to-text model with any
pretrained Transformer-based vision model as the encoder (<em>e.g.</em> <a href="vit">ViT</a>, <a href="beit">BEiT</a>, <a href="deit">DeiT</a>, <a href="swin">Swin</a>)
and any pretrained language model as the decoder (<em>e.g.</em> <a href="roberta">RoBERTa</a>, <a href="gpt2">GPT2</a>, <a href="bert">BERT</a>, <a href="distilbert">DistilBERT</a>).`,S,C,ue=`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) <a href="https://arxiv.org/abs/2109.10282" rel="nofollow">TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models</a> by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`,P,G,fe=`After such a <a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel">VisionEncoderDecoderModel</a> has been trained/fine-tuned, it can be saved/loaded just like any other models (see the examples below
for more information).`,A,R,ge=`An example application is image captioning, in which the encoder is used to encode the image, after which an autoregressive language model generates
the caption. Another example is optical character recognition. Refer to <a href="trocr">TrOCR</a>, which is an instance of <a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel">VisionEncoderDecoderModel</a>.`,O,B,de,q,D=`<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel">VisionEncoderDecoderModel</a> can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTModel">ViTModel</a> configuration for the encoder
and the default <code>BertForCausalLM</code> configuration for the decoder.`,le,H,J,F,K,X,_e=`<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel">VisionEncoderDecoderModel</a> can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based vision model, <em>e.g.</em> <a href="swin">Swin</a>, can serve as the encoder and both pretrained auto-encoding models, <em>e.g.</em> BERT, pretrained causal language models, <em>e.g.</em> GPT2, as well as the pretrained decoder part of sequence-to-sequence models, <em>e.g.</em> decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing <a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel">VisionEncoderDecoderModel</a> from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in <a href="https://huggingface.co/blog/warm-starting-encoder-decoder" rel="nofollow">the <em>Warm-starting-encoder-decoder blog post</em></a>.
To do so, the <code>VisionEncoderDecoderModel</code> class provides a <a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained">VisionEncoderDecoderModel.from_encoder_decoder_pretrained()</a> method.`,ee,$,oe,U,ne,k,N='To load fine-tuned checkpoints of the <code>VisionEncoderDecoderModel</code> class, <a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel">VisionEncoderDecoderModel</a> provides the <code>from_pretrained(...)</code> method just like any other model architecture in Transformers.',te,z,Me="To perform inference, one uses the <code>generate</code> method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling.",se,E,L,c,i,W,_=`<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">TFVisionEncoderDecoderModel.from_pretrained()</a> currently doesn’t support initializing the model from a
PyTorch checkpoint. Passing <code>from_pt=True</code> to this method will throw an exception. If there are only PyTorch
checkpoints for a particular vision encoder-decoder model, a workaround is:`,V,Y,ae,Te,Re,Je,Ke=`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (image, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: <code>pixel_values</code> (which are the
images) and <code>labels</code> (which are the <code>input_ids</code> of the encoded target sequence).`,Be,ke,Xe,Ve,eo=`This model was contributed by <a href="https://github.com/nielsrogge" rel="nofollow">nielsr</a>. This model’s TensorFlow and Flax versions
were contributed by <a href="https://github.com/ydshieh" rel="nofollow">ydshieh</a>.`,ze,We,Ne,re,$e,Ye,Fe,oo=`<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a> is the configuration class to store the configuration of a
<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel">VisionEncoderDecoderModel</a>. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`,Le,Ie,no=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Qe,we,Se,Ze,Ue,Pe,Ce,to=`Instantiate a <a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a> (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`,De,je,qe,Ge,He;return g=new ye({props:{title:"Vision Encoder Decoder Models",local:"vision-encoder-decoder-models",headingTag:"h1"}}),j=new ye({props:{title:"Overview",local:"overview",headingTag:"h2"}}),B=new ye({props:{title:"Randomly initializing VisionEncoderDecoderModel from model configurations.",local:"randomly-initializing-visionencoderdecodermodel-from-model-configurations",headingTag:"h2"}}),H=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEJlcnRDb25maWclMkMlMjBWaVRDb25maWclMkMlMjBWaXNpb25FbmNvZGVyRGVjb2RlckNvbmZpZyUyQyUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwlMEElMEFjb25maWdfZW5jb2RlciUyMCUzRCUyMFZpVENvbmZpZygpJTBBY29uZmlnX2RlY29kZXIlMjAlM0QlMjBCZXJ0Q29uZmlnKCklMEElMEFjb25maWclMjAlM0QlMjBWaXNpb25FbmNvZGVyRGVjb2RlckNvbmZpZy5mcm9tX2VuY29kZXJfZGVjb2Rlcl9jb25maWdzKGNvbmZpZ19lbmNvZGVyJTJDJTIwY29uZmlnX2RlY29kZXIpJTBBbW9kZWwlMjAlM0QlMjBWaXNpb25FbmNvZGVyRGVjb2Rlck1vZGVsKGNvbmZpZyUzRGNvbmZpZyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(config=config)`,wrap:!1}}),F=new ye({props:{title:"Initialising VisionEncoderDecoderModel from a pretrained encoder and a pretrained decoder.",local:"initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",headingTag:"h2"}}),$=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwlMEElMEFtb2RlbCUyMCUzRCUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9lbmNvZGVyX2RlY29kZXJfcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJtaWNyb3NvZnQlMkZzd2luLWJhc2UtcGF0Y2g0LXdpbmRvdzctMjI0LWluMjJrJTIyJTJDJTIwJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiUwQSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/swin-base-patch4-window7-224-in22k&quot;</span>, <span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)`,wrap:!1}}),U=new ye({props:{title:"Loading an existing VisionEncoderDecoderModel checkpoint and perform inference.",local:"loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference",headingTag:"h2"}}),E=new pe({props:{code:"aW1wb3J0JTIwcmVxdWVzdHMlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEElMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwR1BUMlRva2VuaXplckZhc3QlMkMlMjBWaVRJbWFnZVByb2Nlc3NvciUyQyUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwlMEElMEElMjMlMjBsb2FkJTIwYSUyMGZpbmUtdHVuZWQlMjBpbWFnZSUyMGNhcHRpb25pbmclMjBtb2RlbCUyMGFuZCUyMGNvcnJlc3BvbmRpbmclMjB0b2tlbml6ZXIlMjBhbmQlMjBpbWFnZSUyMHByb2Nlc3NvciUwQW1vZGVsJTIwJTNEJTIwVmlzaW9uRW5jb2RlckRlY29kZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIybmxwY29ubmVjdCUyRnZpdC1ncHQyLWltYWdlLWNhcHRpb25pbmclMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwR1BUMlRva2VuaXplckZhc3QuZnJvbV9wcmV0cmFpbmVkKCUyMm5scGNvbm5lY3QlMkZ2aXQtZ3B0Mi1pbWFnZS1jYXB0aW9uaW5nJTIyKSUwQWltYWdlX3Byb2Nlc3NvciUyMCUzRCUyMFZpVEltYWdlUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJubHBjb25uZWN0JTJGdml0LWdwdDItaW1hZ2UtY2FwdGlvbmluZyUyMiklMEElMEElMjMlMjBsZXQncyUyMHBlcmZvcm0lMjBpbmZlcmVuY2UlMjBvbiUyMGFuJTIwaW1hZ2UlMEF1cmwlMjAlM0QlMjAlMjJodHRwJTNBJTJGJTJGaW1hZ2VzLmNvY29kYXRhc2V0Lm9yZyUyRnZhbDIwMTclMkYwMDAwMDAwMzk3NjkuanBnJTIyJTBBaW1hZ2UlMjAlM0QlMjBJbWFnZS5vcGVuKHJlcXVlc3RzLmdldCh1cmwlMkMlMjBzdHJlYW0lM0RUcnVlKS5yYXcpJTBBcGl4ZWxfdmFsdWVzJTIwJTNEJTIwaW1hZ2VfcHJvY2Vzc29yKGltYWdlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikucGl4ZWxfdmFsdWVzJTBBJTBBJTIzJTIwYXV0b3JlZ3Jlc3NpdmVseSUyMGdlbmVyYXRlJTIwY2FwdGlvbiUyMCh1c2VzJTIwZ3JlZWR5JTIwZGVjb2RpbmclMjBieSUyMGRlZmF1bHQpJTBBZ2VuZXJhdGVkX2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKHBpeGVsX3ZhbHVlcyklMEFnZW5lcmF0ZWRfdGV4dCUyMCUzRCUyMHRva2VuaXplci5iYXRjaF9kZWNvZGUoZ2VuZXJhdGVkX2lkcyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSU1QjAlNUQlMEFwcmludChnZW5lcmF0ZWRfdGV4dCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast, ViTImageProcessor, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned image captioning model and corresponding tokenizer and image processor</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = ViTImageProcessor.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s perform inference on an image</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = image_processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># autoregressively generate caption (uses greedy decoding by default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated_text)
a cat laying on a blanket <span class="hljs-built_in">next</span> to a cat laying on a bed`,wrap:!1}}),c=new ye({props:{title:"Loading a PyTorch checkpoint into TFVisionEncoderDecoderModel .",local:"loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel-",headingTag:"h2"}}),Y=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwlMkMlMjBURlZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwlMEElMEFfbW9kZWwlMjAlM0QlMjBWaXNpb25FbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJubHBjb25uZWN0JTJGdml0LWdwdDItaW1hZ2UtY2FwdGlvbmluZyUyMiklMEElMEFfbW9kZWwuZW5jb2Rlci5zYXZlX3ByZXRyYWluZWQoJTIyLiUyRmVuY29kZXIlMjIpJTBBX21vZGVsLmRlY29kZXIuc2F2ZV9wcmV0cmFpbmVkKCUyMi4lMkZkZWNvZGVyJTIyKSUwQSUwQW1vZGVsJTIwJTNEJTIwVEZWaXNpb25FbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fZW5jb2Rlcl9kZWNvZGVyX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyLiUyRmVuY29kZXIlMjIlMkMlMjAlMjIuJTJGZGVjb2RlciUyMiUyQyUyMGVuY29kZXJfZnJvbV9wdCUzRFRydWUlMkMlMjBkZWNvZGVyX2Zyb21fcHQlM0RUcnVlJTBBKSUwQSUyMyUyMFRoaXMlMjBpcyUyMG9ubHklMjBmb3IlMjBjb3B5aW5nJTIwc29tZSUyMHNwZWNpZmljJTIwYXR0cmlidXRlcyUyMG9mJTIwdGhpcyUyMHBhcnRpY3VsYXIlMjBtb2RlbC4lMEFtb2RlbC5jb25maWclMjAlM0QlMjBfbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel, TFVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>_model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`,wrap:!1}}),Te=new ye({props:{title:"Training",local:"training",headingTag:"h2"}}),ke=new pe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpVEltYWdlUHJvY2Vzc29yJTJDJTIwQmVydFRva2VuaXplciUyQyUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFpbWFnZV9wcm9jZXNzb3IlMjAlM0QlMjBWaVRJbWFnZVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGdml0LWJhc2UtcGF0Y2gxNi0yMjQtaW4yMWslMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQmVydFRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFZpc2lvbkVuY29kZXJEZWNvZGVyTW9kZWwuZnJvbV9lbmNvZGVyX2RlY29kZXJfcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJnb29nbGUlMkZ2aXQtYmFzZS1wYXRjaDE2LTIyNC1pbjIxayUyMiUyQyUyMCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIlMEEpJTBBJTBBbW9kZWwuY29uZmlnLmRlY29kZXJfc3RhcnRfdG9rZW5faWQlMjAlM0QlMjB0b2tlbml6ZXIuY2xzX3Rva2VuX2lkJTBBbW9kZWwuY29uZmlnLnBhZF90b2tlbl9pZCUyMCUzRCUyMHRva2VuaXplci5wYWRfdG9rZW5faWQlMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmh1Z2dpbmdmYWNlJTJGY2F0cy1pbWFnZSUyMiklMEFpbWFnZSUyMCUzRCUyMGRhdGFzZXQlNUIlMjJ0ZXN0JTIyJTVEJTVCJTIyaW1hZ2UlMjIlNUQlNUIwJTVEJTBBcGl4ZWxfdmFsdWVzJTIwJTNEJTIwaW1hZ2VfcHJvY2Vzc29yKGltYWdlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikucGl4ZWxfdmFsdWVzJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMmFuJTIwaW1hZ2UlMjBvZiUyMHR3byUyMGNhdHMlMjBjaGlsbGluZyUyMG9uJTIwYSUyMGNvdWNoJTIyJTJDJTBBJTIwJTIwJTIwJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUwQSkuaW5wdXRfaWRzJTBBJTBBJTIzJTIwdGhlJTIwZm9yd2FyZCUyMGZ1bmN0aW9uJTIwYXV0b21hdGljYWxseSUyMGNyZWF0ZXMlMjB0aGUlMjBjb3JyZWN0JTIwZGVjb2Rlcl9pbnB1dF9pZHMlMEFsb3NzJTIwJTNEJTIwbW9kZWwocGl4ZWxfdmFsdWVzJTNEcGl4ZWxfdmFsdWVzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTImageProcessor, BertTokenizer, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = ViTImageProcessor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = image_processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;an image of two cats chilling on a couch&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(pixel_values=pixel_values, labels=labels).loss`,wrap:!1}}),We=new ye({props:{title:"VisionEncoderDecoderConfig",local:"transformers.VisionEncoderDecoderConfig",headingTag:"h2"}}),$e=new be({props:{name:"class transformers.VisionEncoderDecoderConfig",anchor:"transformers.VisionEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L33"}}),we=new Ee({props:{anchor:"transformers.VisionEncoderDecoderConfig.example",$$slots:{default:[mo]},$$scope:{ctx:x}}}),Ue=new be({props:{name:"from_encoder_decoder_configs",anchor:"transformers.VisionEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L100",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>An instance of a configuration object</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a></p>
`}}),je=new co({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Jo],tensorflow:[To],pytorch:[go]},$$scope:{ctx:x}}}),{c(){n=m("meta"),u=r(),e=m("p"),s=r(),y(g.$$.fragment),t=r(),y(j.$$.fragment),Q=r(),I=m("p"),I.innerHTML=he,S=r(),C=m("p"),C.innerHTML=ue,P=r(),G=m("p"),G.innerHTML=fe,A=r(),R=m("p"),R.innerHTML=ge,O=r(),y(B.$$.fragment),de=r(),q=m("p"),q.innerHTML=D,le=r(),y(H.$$.fragment),J=r(),y(F.$$.fragment),K=r(),X=m("p"),X.innerHTML=_e,ee=r(),y($.$$.fragment),oe=r(),y(U.$$.fragment),ne=r(),k=m("p"),k.innerHTML=N,te=r(),z=m("p"),z.innerHTML=Me,se=r(),y(E.$$.fragment),L=r(),y(c.$$.fragment),i=r(),W=m("p"),W.innerHTML=_,V=r(),y(Y.$$.fragment),ae=r(),y(Te.$$.fragment),Re=r(),Je=m("p"),Je.innerHTML=Ke,Be=r(),y(ke.$$.fragment),Xe=r(),Ve=m("p"),Ve.innerHTML=eo,ze=r(),y(We.$$.fragment),Ne=r(),re=m("div"),y($e.$$.fragment),Ye=r(),Fe=m("p"),Fe.innerHTML=oo,Le=r(),Ie=m("p"),Ie.innerHTML=no,Qe=r(),y(we.$$.fragment),Se=r(),Ze=m("div"),y(Ue.$$.fragment),Pe=r(),Ce=m("p"),Ce.innerHTML=to,De=r(),y(je.$$.fragment),qe=r(),Ge=m("p"),this.h()},l(o){const f=io("svelte-u9bgzb",document.head);n=p(f,"META",{name:!0,content:!0}),f.forEach(l),u=d(o),e=p(o,"P",{}),ce(e).forEach(l),s=d(o),b(g.$$.fragment,o),t=d(o),b(j.$$.fragment,o),Q=d(o),I=p(o,"P",{"data-svelte-h":!0}),M(I)!=="svelte-trm98s"&&(I.innerHTML=he),S=d(o),C=p(o,"P",{"data-svelte-h":!0}),M(C)!=="svelte-3c28cv"&&(C.innerHTML=ue),P=d(o),G=p(o,"P",{"data-svelte-h":!0}),M(G)!=="svelte-12birw5"&&(G.innerHTML=fe),A=d(o),R=p(o,"P",{"data-svelte-h":!0}),M(R)!=="svelte-v7atvx"&&(R.innerHTML=ge),O=d(o),b(B.$$.fragment,o),de=d(o),q=p(o,"P",{"data-svelte-h":!0}),M(q)!=="svelte-74aj7l"&&(q.innerHTML=D),le=d(o),b(H.$$.fragment,o),J=d(o),b(F.$$.fragment,o),K=d(o),X=p(o,"P",{"data-svelte-h":!0}),M(X)!=="svelte-5csy9"&&(X.innerHTML=_e),ee=d(o),b($.$$.fragment,o),oe=d(o),b(U.$$.fragment,o),ne=d(o),k=p(o,"P",{"data-svelte-h":!0}),M(k)!=="svelte-1qqs6zl"&&(k.innerHTML=N),te=d(o),z=p(o,"P",{"data-svelte-h":!0}),M(z)!=="svelte-otiwkm"&&(z.innerHTML=Me),se=d(o),b(E.$$.fragment,o),L=d(o),b(c.$$.fragment,o),i=d(o),W=p(o,"P",{"data-svelte-h":!0}),M(W)!=="svelte-o0vx3g"&&(W.innerHTML=_),V=d(o),b(Y.$$.fragment,o),ae=d(o),b(Te.$$.fragment,o),Re=d(o),Je=p(o,"P",{"data-svelte-h":!0}),M(Je)!=="svelte-f1ugst"&&(Je.innerHTML=Ke),Be=d(o),b(ke.$$.fragment,o),Xe=d(o),Ve=p(o,"P",{"data-svelte-h":!0}),M(Ve)!=="svelte-52yqis"&&(Ve.innerHTML=eo),ze=d(o),b(We.$$.fragment,o),Ne=d(o),re=p(o,"DIV",{class:!0});var ie=ce(re);b($e.$$.fragment,ie),Ye=d(ie),Fe=p(ie,"P",{"data-svelte-h":!0}),M(Fe)!=="svelte-1k2ifrs"&&(Fe.innerHTML=oo),Le=d(ie),Ie=p(ie,"P",{"data-svelte-h":!0}),M(Ie)!=="svelte-o55m63"&&(Ie.innerHTML=no),Qe=d(ie),b(we.$$.fragment,ie),Se=d(ie),Ze=p(ie,"DIV",{class:!0});var xe=ce(Ze);b(Ue.$$.fragment,xe),Pe=d(xe),Ce=p(xe,"P",{"data-svelte-h":!0}),M(Ce)!=="svelte-1kuqsfz"&&(Ce.innerHTML=to),xe.forEach(l),ie.forEach(l),De=d(o),b(je.$$.fragment,o),qe=d(o),Ge=p(o,"P",{}),ce(Ge).forEach(l),this.h()},h(){me(n,"name","hf:doc:metadata"),me(n,"content",Vo),me(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),me(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){a(document.head,n),h(o,u,f),h(o,e,f),h(o,s,f),T(g,o,f),h(o,t,f),T(j,o,f),h(o,Q,f),h(o,I,f),h(o,S,f),h(o,C,f),h(o,P,f),h(o,G,f),h(o,A,f),h(o,R,f),h(o,O,f),T(B,o,f),h(o,de,f),h(o,q,f),h(o,le,f),T(H,o,f),h(o,J,f),T(F,o,f),h(o,K,f),h(o,X,f),h(o,ee,f),T($,o,f),h(o,oe,f),T(U,o,f),h(o,ne,f),h(o,k,f),h(o,te,f),h(o,z,f),h(o,se,f),T(E,o,f),h(o,L,f),T(c,o,f),h(o,i,f),h(o,W,f),h(o,V,f),T(Y,o,f),h(o,ae,f),T(Te,o,f),h(o,Re,f),h(o,Je,f),h(o,Be,f),T(ke,o,f),h(o,Xe,f),h(o,Ve,f),h(o,ze,f),T(We,o,f),h(o,Ne,f),h(o,re,f),T($e,re,null),a(re,Ye),a(re,Fe),a(re,Le),a(re,Ie),a(re,Qe),T(we,re,null),a(re,Se),a(re,Ze),T(Ue,Ze,null),a(Ze,Pe),a(Ze,Ce),h(o,De,f),T(je,o,f),h(o,qe,f),h(o,Ge,f),He=!0},p(o,[f]){const ie={};f&2&&(ie.$$scope={dirty:f,ctx:o}),we.$set(ie);const xe={};f&2&&(xe.$$scope={dirty:f,ctx:o}),je.$set(xe)},i(o){He||(v(g.$$.fragment,o),v(j.$$.fragment,o),v(B.$$.fragment,o),v(H.$$.fragment,o),v(F.$$.fragment,o),v($.$$.fragment,o),v(U.$$.fragment,o),v(E.$$.fragment,o),v(c.$$.fragment,o),v(Y.$$.fragment,o),v(Te.$$.fragment,o),v(ke.$$.fragment,o),v(We.$$.fragment,o),v($e.$$.fragment,o),v(we.$$.fragment,o),v(Ue.$$.fragment,o),v(je.$$.fragment,o),He=!0)},o(o){w(g.$$.fragment,o),w(j.$$.fragment,o),w(B.$$.fragment,o),w(H.$$.fragment,o),w(F.$$.fragment,o),w($.$$.fragment,o),w(U.$$.fragment,o),w(E.$$.fragment,o),w(c.$$.fragment,o),w(Y.$$.fragment,o),w(Te.$$.fragment,o),w(ke.$$.fragment,o),w(We.$$.fragment,o),w($e.$$.fragment,o),w(we.$$.fragment,o),w(Ue.$$.fragment,o),w(je.$$.fragment,o),He=!1},d(o){o&&(l(u),l(e),l(s),l(t),l(Q),l(I),l(S),l(C),l(P),l(G),l(A),l(R),l(O),l(de),l(q),l(le),l(J),l(K),l(X),l(ee),l(oe),l(ne),l(k),l(te),l(z),l(se),l(L),l(i),l(W),l(V),l(ae),l(Re),l(Je),l(Be),l(Xe),l(Ve),l(ze),l(Ne),l(re),l(De),l(qe),l(Ge)),l(n),Z(g,o),Z(j,o),Z(B,o),Z(H,o),Z(F,o),Z($,o),Z(U,o),Z(E,o),Z(c,o),Z(Y,o),Z(Te,o),Z(ke,o),Z(We,o),Z($e),Z(we),Z(Ue),Z(je,o)}}}const Vo='{"title":"Vision Encoder Decoder Models","local":"vision-encoder-decoder-models","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Randomly initializing VisionEncoderDecoderModel from model configurations.","local":"randomly-initializing-visionencoderdecodermodel-from-model-configurations","sections":[],"depth":2},{"title":"Initialising VisionEncoderDecoderModel from a pretrained encoder and a pretrained decoder.","local":"initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder","sections":[],"depth":2},{"title":"Loading an existing VisionEncoderDecoderModel checkpoint and perform inference.","local":"loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference","sections":[],"depth":2},{"title":"Loading a PyTorch checkpoint into TFVisionEncoderDecoderModel .","local":"loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel-","sections":[],"depth":2},{"title":"Training","local":"training","sections":[],"depth":2},{"title":"VisionEncoderDecoderConfig","local":"transformers.VisionEncoderDecoderConfig","sections":[],"depth":2},{"title":"VisionEncoderDecoderModel","local":"transformers.VisionEncoderDecoderModel","sections":[],"depth":2},{"title":"TFVisionEncoderDecoderModel","local":"transformers.TFVisionEncoderDecoderModel","sections":[],"depth":2},{"title":"FlaxVisionEncoderDecoderModel","local":"transformers.FlaxVisionEncoderDecoderModel","sections":[],"depth":2}],"depth":1}';function Wo(x){return ao(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ro extends ro{constructor(n){super(),lo(this,n,Wo,ko,so,{})}}export{Ro as component};
