import{s as ct,o as ut,n as pe}from"../chunks/scheduler.9bc65507.js";import{S as pt,i as mt,g as c,s as d,r as f,A as ht,h as u,f as s,c as i,j as te,u as g,x as v,k as oe,y as p,a as r,v as _,d as b,t as y,w as T}from"../chunks/index.707bf1b6.js";import{T as Be}from"../chunks/Tip.c2ecdbf4.js";import{D as he}from"../chunks/Docstring.17db21ae.js";import{C as Ae}from"../chunks/CodeBlock.54a9f38d.js";import{E as Le}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ue}from"../chunks/Heading.342b1fa6.js";function ft(M){let t,m='PEGASUS-X uses the same tokenizer as <a href="pegasus">PEGASUS</a>.';return{c(){t=c("p"),t.innerHTML=m},l(a){t=u(a,"P",{"data-svelte-h":!0}),v(t)!=="svelte-15wolpi"&&(t.innerHTML=m)},m(a,l){r(a,t,l)},p:pe,d(a){a&&s(t)}}}function gt(M){let t,m="Example:",a,l,h;return l=new Ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFBlZ2FzdXNYQ29uZmlnJTJDJTIwUGVnYXN1c1hNb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBQRUdBU1VTJTIwZ29vZ2xlJTJGcGVnYXN1cy14LWxhcmdlJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFBlZ2FzdXNYQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGdvb2dsZSUyRnBlZ2FzdXMteC1sYXJnZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwUGVnYXN1c1hNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusXConfig, PegasusXModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PEGASUS google/pegasus-x-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PegasusXConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the google/pegasus-x-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusXModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=c("p"),t.textContent=m,a=d(),f(l.$$.fragment)},l(n){t=u(n,"P",{"data-svelte-h":!0}),v(t)!=="svelte-11lpom8"&&(t.textContent=m),a=i(n),g(l.$$.fragment,n)},m(n,w){r(n,t,w),r(n,a,w),_(l,n,w),h=!0},p:pe,i(n){h||(b(l.$$.fragment,n),h=!0)},o(n){y(l.$$.fragment,n),h=!1},d(n){n&&(s(t),s(a)),T(l,n)}}}function _t(M){let t,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=m},l(a){t=u(a,"P",{"data-svelte-h":!0}),v(t)!=="svelte-fincs2"&&(t.innerHTML=m)},m(a,l){r(a,t,l)},p:pe,d(a){a&&s(t)}}}function bt(M){let t,m="Example:",a,l,h;return l=new Ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBQZWdhc3VzTW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZwZWdhc3VzLXgtbGFyZ2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBQZWdhc3VzTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRnBlZ2FzdXMteC1sYXJnZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyU3R1ZGllcyUyMGhhdmUlMjBiZWVuJTIwc2hvd24lMjB0aGF0JTIwb3duaW5nJTIwYSUyMGRvZyUyMGlzJTIwZ29vZCUyMGZvciUyMHlvdSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBZGVjb2Rlcl9pbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyU3R1ZGllcyUyMHNob3clMjB0aGF0JTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEaW5wdXRzLmlucHV0X2lkcyUyQyUyMGRlY29kZXJfaW5wdXRfaWRzJTNEZGVjb2Rlcl9pbnB1dHMuaW5wdXRfaWRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlcy5zaGFwZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, PegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-x-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-x-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">1024</span>]`,wrap:!1}}),{c(){t=c("p"),t.textContent=m,a=d(),f(l.$$.fragment)},l(n){t=u(n,"P",{"data-svelte-h":!0}),v(t)!=="svelte-11lpom8"&&(t.textContent=m),a=i(n),g(l.$$.fragment,n)},m(n,w){r(n,t,w),r(n,a,w),_(l,n,w),h=!0},p:pe,i(n){h||(b(l.$$.fragment,n),h=!0)},o(n){y(l.$$.fragment,n),h=!1},d(n){n&&(s(t),s(a)),T(l,n)}}}function yt(M){let t,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=m},l(a){t=u(a,"P",{"data-svelte-h":!0}),v(t)!=="svelte-fincs2"&&(t.innerHTML=m)},m(a,l){r(a,t,l)},p:pe,d(a){a&&s(t)}}}function Tt(M){let t,m="Summarization example:",a,l,h;return l=new Ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBQZWdhc3VzWEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQSUwQW1vZGVsJTIwJTNEJTIwUGVnYXN1c1hGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRnBlZ2FzdXMteC1iYXNlJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRnBlZ2FzdXMteC1sYXJnZSUyMiklMEElMEFBUlRJQ0xFX1RPX1NVTU1BUklaRSUyMCUzRCUyMCglMEElMjAlMjAlMjAlMjAlMjJQRyUyNkUlMjBzdGF0ZWQlMjBpdCUyMHNjaGVkdWxlZCUyMHRoZSUyMGJsYWNrb3V0cyUyMGluJTIwcmVzcG9uc2UlMjB0byUyMGZvcmVjYXN0cyUyMGZvciUyMGhpZ2glMjB3aW5kcyUyMCUyMiUwQSUyMCUyMCUyMCUyMCUyMmFtaWQlMjBkcnklMjBjb25kaXRpb25zLiUyMFRoZSUyMGFpbSUyMGlzJTIwdG8lMjByZWR1Y2UlMjB0aGUlMjByaXNrJTIwb2YlMjB3aWxkZmlyZXMuJTIwTmVhcmx5JTIwODAwJTIwdGhvdXNhbmQlMjBjdXN0b21lcnMlMjB3ZXJlJTIwJTIyJTBBJTIwJTIwJTIwJTIwJTIyc2NoZWR1bGVkJTIwdG8lMjBiZSUyMGFmZmVjdGVkJTIwYnklMjB0aGUlMjBzaHV0b2ZmcyUyMHdoaWNoJTIwd2VyZSUyMGV4cGVjdGVkJTIwdG8lMjBsYXN0JTIwdGhyb3VnaCUyMGF0JTIwbGVhc3QlMjBtaWRkYXklMjB0b21vcnJvdy4lMjIlMEEpJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKEFSVElDTEVfVE9fU1VNTUFSSVpFJTJDJTIwbWF4X2xlbmd0aCUzRDEwMjQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQSUyMyUyMEdlbmVyYXRlJTIwU3VtbWFyeSUwQXN1bW1hcnlfaWRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEKSUwQXRva2VuaXplci5iYXRjaF9kZWNvZGUoc3VtbWFyeV9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSUyQyUyMGNsZWFuX3VwX3Rva2VuaXphdGlvbl9zcGFjZXMlM0RGYWxzZSklNUIwJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, PegasusXForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusXForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-x-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-x-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=m,a=d(),f(l.$$.fragment)},l(n){t=u(n,"P",{"data-svelte-h":!0}),v(t)!=="svelte-4eu60v"&&(t.textContent=m),a=i(n),g(l.$$.fragment,n)},m(n,w){r(n,t,w),r(n,a,w),_(l,n,w),h=!0},p:pe,i(n){h||(b(l.$$.fragment,n),h=!0)},o(n){y(l.$$.fragment,n),h=!1},d(n){n&&(s(t),s(a)),T(l,n)}}}function vt(M){let t,m,a,l,h,n,w,fe,W,Oe='The PEGASUS-X model was proposed in <a href="https://arxiv.org/abs/2208.04347" rel="nofollow">Investigating Efficiently Extending Transformers for Long Input Summarization</a>  by Jason Phang, Yao Zhao and Peter J. Liu.',ge,E,Qe="PEGASUS-X (PEGASUS eXtended) extends the PEGASUS models for long input summarization through additional long input pretraining and using staggered block-local attention with global tokens in the encoder.",_e,V,De="The abstract from the paper is the following:",be,R,Ye="<em>While large pretrained Transformer models have proven highly capable at tackling natural language tasks, handling long sequence inputs continues to be a significant challenge. One such task is long input summarization, where inputs are longer than the maximum input context of most pretrained models. Through an extensive set of experiments, we investigate what model architectural changes and pretraining paradigms can most efficiently adapt a pretrained Transformer for long input summarization. We find that a staggered, block-local Transformer with global encoder tokens strikes a good balance of performance and efficiency, and that an additional pretraining phase on long sequences meaningfully improves downstream summarization performance. Based on our findings, we introduce PEGASUS-X, an extension of the PEGASUS model with additional long input pretraining to handle inputs of up to 16K tokens. PEGASUS-X achieves strong performance on long input summarization tasks comparable with much larger models while adding few additional parameters and not requiring model parallelism to train.</em>",ye,N,Ke='This model was contributed by <a href="https://huggingface.co/zphang" rel="nofollow">zphang</a>. The original code can be found <a href="https://github.com/google-research/pegasus" rel="nofollow">here</a>.',Te,H,ve,B,et='<li><a href="../tasks/translation">Translation task guide</a></li> <li><a href="../tasks/summarization">Summarization task guide</a></li>',we,j,Me,L,ke,k,A,Ue,ne,tt=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/pegasus_x#transformers.PegasusXModel">PegasusXModel</a>. It is used to instantiate a
PEGASUS-X model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the PEGASUS-X
<a href="https://huggingface.co/google/pegasus-x-large" rel="nofollow">google/pegasus-x-large</a> architecture.`,Ge,se,ot=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Fe,S,$e,O,xe,$,Q,je,ae,nt=`The bare PEGASUS-X Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Se,re,st=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,qe,z,D,Je,de,at='The <a href="/docs/transformers/main/en/model_doc/pegasus_x#transformers.PegasusXModel">PegasusXModel</a> forward method, overrides the <code>__call__</code> special method.',Ze,q,Ie,J,ze,Y,Xe,x,K,We,ie,rt=`The PEGASUS-X for conditional generation (e.g. summarization).
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ee,le,dt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ve,X,ee,Re,ce,it='The <a href="/docs/transformers/main/en/model_doc/pegasus_x#transformers.PegasusXForConditionalGeneration">PegasusXForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',Ne,Z,He,I,Pe,me,Ce;return h=new ue({props:{title:"PEGASUS-X",local:"pegasus-x",headingTag:"h1"}}),w=new ue({props:{title:"Overview",local:"overview",headingTag:"h2"}}),H=new ue({props:{title:"Documentation resources",local:"documentation-resources",headingTag:"h2"}}),j=new Be({props:{$$slots:{default:[ft]},$$scope:{ctx:M}}}),L=new ue({props:{title:"PegasusXConfig",local:"transformers.PegasusXConfig",headingTag:"h2"}}),A=new he({props:{name:"class transformers.PegasusXConfig",anchor:"transformers.PegasusXConfig",parameters:[{name:"vocab_size",val:" = 96103"},{name:"max_position_embeddings",val:" = 16384"},{name:"encoder_layers",val:" = 16"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"forced_eos_token_id",val:" = 1"},{name:"num_global_tokens",val:" = 32"},{name:"block_size",val:" = 512"},{name:"stagger_local_blocks",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PegasusXConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 96103) &#x2014;
Vocabulary size of the PEGASUS-X model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/pegasus_x#transformers.PegasusXModel">PegasusXModel</a>.`,name:"vocab_size"},{anchor:"transformers.PegasusXConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimension of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.PegasusXConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.PegasusXConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.PegasusXConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.PegasusXConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.PegasusXConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.PegasusXConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.PegasusXConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.PegasusXConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.PegasusXConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.PegasusXConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.PegasusXConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.PegasusXConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.PegasusXConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.PegasusXConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.PegasusXConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.PegasusXConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"},{anchor:"transformers.PegasusXConfig.num_global_tokens",description:`<strong>num_global_tokens</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of global tokens to use for the encoder`,name:"num_global_tokens"},{anchor:"transformers.PegasusXConfig.block_size",description:`<strong>block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Block size for encoder local attention. Sequence length should be an exact multiple of block size.
block_size must be a multiple of 2 if stagger_local_block is True`,name:"block_size"},{anchor:"transformers.PegasusXConfig.stagger_local_block",description:`<strong>stagger_local_block</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to stagger every other local attention by half a block`,name:"stagger_local_block"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/pegasus_x/configuration_pegasus_x.py#L30"}}),S=new Le({props:{anchor:"transformers.PegasusXConfig.example",$$slots:{default:[gt]},$$scope:{ctx:M}}}),O=new ue({props:{title:"PegasusXModel",local:"transformers.PegasusXModel",headingTag:"h2"}}),Q=new he({props:{name:"class transformers.PegasusXModel",anchor:"transformers.PegasusXModel",parameters:[{name:"config",val:": PegasusXConfig"}],parametersDescription:[{anchor:"transformers.PegasusXModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus_x#transformers.PegasusXConfig">PegasusXConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/pegasus_x/modeling_pegasus_x.py#L1303"}}),D=new he({props:{name:"forward",anchor:"transformers.PegasusXModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.PegasusXModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusXModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.`,name:"inputs_embeds"},{anchor:"transformers.PegasusXModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusXModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PEGASUS-X uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusXModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusXModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusXModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PegasusXModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PegasusXModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusXModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusXModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusXModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusXModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/pegasus_x/modeling_pegasus_x.py#L1359",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus_x#transformers.PegasusXConfig"
>PegasusXConfig</a>) and inputs.</p>
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
`}}),q=new Be({props:{$$slots:{default:[_t]},$$scope:{ctx:M}}}),J=new Le({props:{anchor:"transformers.PegasusXModel.forward.example",$$slots:{default:[bt]},$$scope:{ctx:M}}}),Y=new ue({props:{title:"PegasusXForConditionalGeneration",local:"transformers.PegasusXForConditionalGeneration",headingTag:"h2"}}),K=new he({props:{name:"class transformers.PegasusXForConditionalGeneration",anchor:"transformers.PegasusXForConditionalGeneration",parameters:[{name:"config",val:": PegasusXConfig"}],parametersDescription:[{anchor:"transformers.PegasusXForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus_x#transformers.PegasusXConfig">PegasusXConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/pegasus_x/modeling_pegasus_x.py#L1449"}}),ee=new he({props:{name:"forward",anchor:"transformers.PegasusXForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.PegasusXForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.`,name:"inputs_embeds"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PEGASUS-X uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PegasusXForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/pegasus_x/modeling_pegasus_x.py#L1497",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus_x#transformers.PegasusXConfig"
>PegasusXConfig</a>) and inputs.</p>
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
`}}),Z=new Be({props:{$$slots:{default:[yt]},$$scope:{ctx:M}}}),I=new Le({props:{anchor:"transformers.PegasusXForConditionalGeneration.forward.example",$$slots:{default:[Tt]},$$scope:{ctx:M}}}),{c(){t=c("meta"),m=d(),a=c("p"),l=d(),f(h.$$.fragment),n=d(),f(w.$$.fragment),fe=d(),W=c("p"),W.innerHTML=Oe,ge=d(),E=c("p"),E.textContent=Qe,_e=d(),V=c("p"),V.textContent=De,be=d(),R=c("p"),R.innerHTML=Ye,ye=d(),N=c("p"),N.innerHTML=Ke,Te=d(),f(H.$$.fragment),ve=d(),B=c("ul"),B.innerHTML=et,we=d(),f(j.$$.fragment),Me=d(),f(L.$$.fragment),ke=d(),k=c("div"),f(A.$$.fragment),Ue=d(),ne=c("p"),ne.innerHTML=tt,Ge=d(),se=c("p"),se.innerHTML=ot,Fe=d(),f(S.$$.fragment),$e=d(),f(O.$$.fragment),xe=d(),$=c("div"),f(Q.$$.fragment),je=d(),ae=c("p"),ae.innerHTML=nt,Se=d(),re=c("p"),re.innerHTML=st,qe=d(),z=c("div"),f(D.$$.fragment),Je=d(),de=c("p"),de.innerHTML=at,Ze=d(),f(q.$$.fragment),Ie=d(),f(J.$$.fragment),ze=d(),f(Y.$$.fragment),Xe=d(),x=c("div"),f(K.$$.fragment),We=d(),ie=c("p"),ie.innerHTML=rt,Ee=d(),le=c("p"),le.innerHTML=dt,Ve=d(),X=c("div"),f(ee.$$.fragment),Re=d(),ce=c("p"),ce.innerHTML=it,Ne=d(),f(Z.$$.fragment),He=d(),f(I.$$.fragment),Pe=d(),me=c("p"),this.h()},l(e){const o=ht("svelte-u9bgzb",document.head);t=u(o,"META",{name:!0,content:!0}),o.forEach(s),m=i(e),a=u(e,"P",{}),te(a).forEach(s),l=i(e),g(h.$$.fragment,e),n=i(e),g(w.$$.fragment,e),fe=i(e),W=u(e,"P",{"data-svelte-h":!0}),v(W)!=="svelte-1cf9a4l"&&(W.innerHTML=Oe),ge=i(e),E=u(e,"P",{"data-svelte-h":!0}),v(E)!=="svelte-1ca7lvv"&&(E.textContent=Qe),_e=i(e),V=u(e,"P",{"data-svelte-h":!0}),v(V)!=="svelte-vfdo9a"&&(V.textContent=De),be=i(e),R=u(e,"P",{"data-svelte-h":!0}),v(R)!=="svelte-1l56tf7"&&(R.innerHTML=Ye),ye=i(e),N=u(e,"P",{"data-svelte-h":!0}),v(N)!=="svelte-1jl4kfe"&&(N.innerHTML=Ke),Te=i(e),g(H.$$.fragment,e),ve=i(e),B=u(e,"UL",{"data-svelte-h":!0}),v(B)!=="svelte-6ej6p2"&&(B.innerHTML=et),we=i(e),g(j.$$.fragment,e),Me=i(e),g(L.$$.fragment,e),ke=i(e),k=u(e,"DIV",{class:!0});var P=te(k);g(A.$$.fragment,P),Ue=i(P),ne=u(P,"P",{"data-svelte-h":!0}),v(ne)!=="svelte-8xivau"&&(ne.innerHTML=tt),Ge=i(P),se=u(P,"P",{"data-svelte-h":!0}),v(se)!=="svelte-o55m63"&&(se.innerHTML=ot),Fe=i(P),g(S.$$.fragment,P),P.forEach(s),$e=i(e),g(O.$$.fragment,e),xe=i(e),$=u(e,"DIV",{class:!0});var C=te($);g(Q.$$.fragment,C),je=i(C),ae=u(C,"P",{"data-svelte-h":!0}),v(ae)!=="svelte-h13hr7"&&(ae.innerHTML=nt),Se=i(C),re=u(C,"P",{"data-svelte-h":!0}),v(re)!=="svelte-hswkmf"&&(re.innerHTML=st),qe=i(C),z=u(C,"DIV",{class:!0});var U=te(z);g(D.$$.fragment,U),Je=i(U),de=u(U,"P",{"data-svelte-h":!0}),v(de)!=="svelte-1a1wp7s"&&(de.innerHTML=at),Ze=i(U),g(q.$$.fragment,U),Ie=i(U),g(J.$$.fragment,U),U.forEach(s),C.forEach(s),ze=i(e),g(Y.$$.fragment,e),Xe=i(e),x=u(e,"DIV",{class:!0});var G=te(x);g(K.$$.fragment,G),We=i(G),ie=u(G,"P",{"data-svelte-h":!0}),v(ie)!=="svelte-8x4avn"&&(ie.innerHTML=rt),Ee=i(G),le=u(G,"P",{"data-svelte-h":!0}),v(le)!=="svelte-hswkmf"&&(le.innerHTML=dt),Ve=i(G),X=u(G,"DIV",{class:!0});var F=te(X);g(ee.$$.fragment,F),Re=i(F),ce=u(F,"P",{"data-svelte-h":!0}),v(ce)!=="svelte-mbnexy"&&(ce.innerHTML=it),Ne=i(F),g(Z.$$.fragment,F),He=i(F),g(I.$$.fragment,F),F.forEach(s),G.forEach(s),Pe=i(e),me=u(e,"P",{}),te(me).forEach(s),this.h()},h(){oe(t,"name","hf:doc:metadata"),oe(t,"content",wt),oe(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),oe(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){p(document.head,t),r(e,m,o),r(e,a,o),r(e,l,o),_(h,e,o),r(e,n,o),_(w,e,o),r(e,fe,o),r(e,W,o),r(e,ge,o),r(e,E,o),r(e,_e,o),r(e,V,o),r(e,be,o),r(e,R,o),r(e,ye,o),r(e,N,o),r(e,Te,o),_(H,e,o),r(e,ve,o),r(e,B,o),r(e,we,o),_(j,e,o),r(e,Me,o),_(L,e,o),r(e,ke,o),r(e,k,o),_(A,k,null),p(k,Ue),p(k,ne),p(k,Ge),p(k,se),p(k,Fe),_(S,k,null),r(e,$e,o),_(O,e,o),r(e,xe,o),r(e,$,o),_(Q,$,null),p($,je),p($,ae),p($,Se),p($,re),p($,qe),p($,z),_(D,z,null),p(z,Je),p(z,de),p(z,Ze),_(q,z,null),p(z,Ie),_(J,z,null),r(e,ze,o),_(Y,e,o),r(e,Xe,o),r(e,x,o),_(K,x,null),p(x,We),p(x,ie),p(x,Ee),p(x,le),p(x,Ve),p(x,X),_(ee,X,null),p(X,Re),p(X,ce),p(X,Ne),_(Z,X,null),p(X,He),_(I,X,null),r(e,Pe,o),r(e,me,o),Ce=!0},p(e,[o]){const P={};o&2&&(P.$$scope={dirty:o,ctx:e}),j.$set(P);const C={};o&2&&(C.$$scope={dirty:o,ctx:e}),S.$set(C);const U={};o&2&&(U.$$scope={dirty:o,ctx:e}),q.$set(U);const G={};o&2&&(G.$$scope={dirty:o,ctx:e}),J.$set(G);const F={};o&2&&(F.$$scope={dirty:o,ctx:e}),Z.$set(F);const lt={};o&2&&(lt.$$scope={dirty:o,ctx:e}),I.$set(lt)},i(e){Ce||(b(h.$$.fragment,e),b(w.$$.fragment,e),b(H.$$.fragment,e),b(j.$$.fragment,e),b(L.$$.fragment,e),b(A.$$.fragment,e),b(S.$$.fragment,e),b(O.$$.fragment,e),b(Q.$$.fragment,e),b(D.$$.fragment,e),b(q.$$.fragment,e),b(J.$$.fragment,e),b(Y.$$.fragment,e),b(K.$$.fragment,e),b(ee.$$.fragment,e),b(Z.$$.fragment,e),b(I.$$.fragment,e),Ce=!0)},o(e){y(h.$$.fragment,e),y(w.$$.fragment,e),y(H.$$.fragment,e),y(j.$$.fragment,e),y(L.$$.fragment,e),y(A.$$.fragment,e),y(S.$$.fragment,e),y(O.$$.fragment,e),y(Q.$$.fragment,e),y(D.$$.fragment,e),y(q.$$.fragment,e),y(J.$$.fragment,e),y(Y.$$.fragment,e),y(K.$$.fragment,e),y(ee.$$.fragment,e),y(Z.$$.fragment,e),y(I.$$.fragment,e),Ce=!1},d(e){e&&(s(m),s(a),s(l),s(n),s(fe),s(W),s(ge),s(E),s(_e),s(V),s(be),s(R),s(ye),s(N),s(Te),s(ve),s(B),s(we),s(Me),s(ke),s(k),s($e),s(xe),s($),s(ze),s(Xe),s(x),s(Pe),s(me)),s(t),T(h,e),T(w,e),T(H,e),T(j,e),T(L,e),T(A),T(S),T(O,e),T(Q),T(D),T(q),T(J),T(Y,e),T(K),T(ee),T(Z),T(I)}}}const wt='{"title":"PEGASUS-X","local":"pegasus-x","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Documentation resources","local":"documentation-resources","sections":[],"depth":2},{"title":"PegasusXConfig","local":"transformers.PegasusXConfig","sections":[],"depth":2},{"title":"PegasusXModel","local":"transformers.PegasusXModel","sections":[],"depth":2},{"title":"PegasusXForConditionalGeneration","local":"transformers.PegasusXForConditionalGeneration","sections":[],"depth":2}],"depth":1}';function Mt(M){return ut(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ut extends pt{constructor(t){super(),mt(this,t,Mt,vt,ct,{})}}export{Ut as component};
