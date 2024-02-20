import{s as Dt,o as Qt,n as Ze}from"../chunks/scheduler.9bc65507.js";import{S as At,i as Yt,g as l,s as a,r as u,A as Ot,h as c,f as n,c as r,j as q,u as f,x as h,k as R,y as d,a as i,v as g,d as _,t as b,w as y}from"../chunks/index.707bf1b6.js";import{T as St}from"../chunks/Tip.c2ecdbf4.js";import{D as pe}from"../chunks/Docstring.17db21ae.js";import{C as xe}from"../chunks/CodeBlock.54a9f38d.js";import{E as vt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as me}from"../chunks/Heading.342b1fa6.js";function Kt(j){let o,k="Examples:",p,m,T;return m=new xe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEJlcnRHZW5lcmF0aW9uQ29uZmlnJTJDJTIwQmVydEdlbmVyYXRpb25FbmNvZGVyJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMEJlcnRHZW5lcmF0aW9uJTIwY29uZmlnJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMEJlcnRHZW5lcmF0aW9uQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGNvbmZpZyUwQW1vZGVsJTIwJTNEJTIwQmVydEdlbmVyYXRpb25FbmNvZGVyKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationConfig, BertGenerationEncoder

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BertGeneration config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BertGenerationConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationEncoder(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){o=l("p"),o.textContent=k,p=a(),u(m.$$.fragment)},l(s){o=c(s,"P",{"data-svelte-h":!0}),h(o)!=="svelte-kvfsh7"&&(o.textContent=k),p=r(s),f(m.$$.fragment,s)},m(s,v){i(s,o,v),i(s,p,v),g(m,s,v),T=!0},p:Ze,i(s){T||(_(m.$$.fragment,s),T=!0)},o(s){b(m.$$.fragment,s),T=!1},d(s){s&&(n(o),n(p)),y(m,s)}}}function en(j){let o,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=l("p"),o.innerHTML=k},l(p){o=c(p,"P",{"data-svelte-h":!0}),h(o)!=="svelte-fincs2"&&(o.innerHTML=k)},m(p,m){i(p,o,m)},p:Ze,d(p){p&&n(o)}}}function tn(j){let o,k="Example:",p,m,T;return m=new xe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBCZXJ0R2VuZXJhdGlvbkVuY29kZXIlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmJlcnRfZm9yX3NlcV9nZW5lcmF0aW9uX0wtMjRfYmJjX2VuY29kZXIlMjIpJTBBbW9kZWwlMjAlM0QlMjBCZXJ0R2VuZXJhdGlvbkVuY29kZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmJlcnRfZm9yX3NlcV9nZW5lcmF0aW9uX0wtMjRfYmJjX2VuY29kZXIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BertGenerationEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationEncoder.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){o=l("p"),o.textContent=k,p=a(),u(m.$$.fragment)},l(s){o=c(s,"P",{"data-svelte-h":!0}),h(o)!=="svelte-11lpom8"&&(o.textContent=k),p=r(s),f(m.$$.fragment,s)},m(s,v){i(s,o,v),i(s,p,v),g(m,s,v),T=!0},p:Ze,i(s){T||(_(m.$$.fragment,s),T=!0)},o(s){b(m.$$.fragment,s),T=!1},d(s){s&&(n(o),n(p)),y(m,s)}}}function nn(j){let o,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=l("p"),o.innerHTML=k},l(p){o=c(p,"P",{"data-svelte-h":!0}),h(o)!=="svelte-fincs2"&&(o.innerHTML=k)},m(p,m){i(p,o,m)},p:Ze,d(p){p&&n(o)}}}function on(j){let o,k="Example:",p,m,T;return m=new xe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBCZXJ0R2VuZXJhdGlvbkRlY29kZXIlMkMlMjBCZXJ0R2VuZXJhdGlvbkNvbmZpZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGYmVydF9mb3Jfc2VxX2dlbmVyYXRpb25fTC0yNF9iYmNfZW5jb2RlciUyMiklMEFjb25maWclMjAlM0QlMjBCZXJ0R2VuZXJhdGlvbkNvbmZpZy5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGYmVydF9mb3Jfc2VxX2dlbmVyYXRpb25fTC0yNF9iYmNfZW5jb2RlciUyMiklMEFjb25maWcuaXNfZGVjb2RlciUyMCUzRCUyMFRydWUlMEFtb2RlbCUyMCUzRCUyMEJlcnRHZW5lcmF0aW9uRGVjb2Rlci5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZ29vZ2xlJTJGYmVydF9mb3Jfc2VxX2dlbmVyYXRpb25fTC0yNF9iYmNfZW5jb2RlciUyMiUyQyUyMGNvbmZpZyUzRGNvbmZpZyUwQSklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90b2tlbl90eXBlX2lkcyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBcHJlZGljdGlvbl9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BertGenerationDecoder, BertGenerationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = BertGenerationConfig.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>, config=config
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_token_type_ids=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`,wrap:!1}}),{c(){o=l("p"),o.textContent=k,p=a(),u(m.$$.fragment)},l(s){o=c(s,"P",{"data-svelte-h":!0}),h(o)!=="svelte-11lpom8"&&(o.textContent=k),p=r(s),f(m.$$.fragment,s)},m(s,v){i(s,o,v),i(s,p,v),g(m,s,v),T=!0},p:Ze,i(s){T||(_(m.$$.fragment,s),T=!0)},o(s){b(m.$$.fragment,s),T=!1},d(s){s&&(n(o),n(p)),y(m,s)}}}function sn(j){let o,k,p,m,T,s,v,Ce,N,wt=`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel">EncoderDecoderModel</a> as proposed in <a href="https://arxiv.org/abs/1907.12461" rel="nofollow">Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks</a> by Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`,Ue,H,Bt="The abstract from the paper is the following:",qe,L,Gt=`<em>Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.</em>`,Re,P,$t=`This model was contributed by <a href="https://huggingface.co/patrickvonplaten" rel="nofollow">patrickvonplaten</a>. The original code can be
found <a href="https://tfhub.dev/s?module-type=text-generation&amp;subtype=module,placeholder" rel="nofollow">here</a>.`,Ee,S,We,D,jt=`The model can be used in combination with the <a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel">EncoderDecoderModel</a> to leverage two pretrained BERT checkpoints for
subsequent fine-tuning:`,Ie,Q,Xe,A,Jt='Pretrained <a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel">EncoderDecoderModel</a> are also directly available in the model hub, e.g.:',Ve,Y,Fe,O,zt="Tips:",Ne,K,xt=`<li><a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationEncoder">BertGenerationEncoder</a> and <a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationDecoder">BertGenerationDecoder</a> should be used in
combination with <code>EncoderDecoder</code>.</li> <li>For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.</li>`,He,ee,Le,G,te,et,he,Zt=`This is the configuration class to store the configuration of a <code>BertGenerationPreTrainedModel</code>. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BertGeneration
<a href="https://huggingface.co/google/bert_for_seq_generation_L-24_bbc_encoder" rel="nofollow">google/bert_for_seq_generation_L-24_bbc_encoder</a>
architecture.`,tt,ue,Ct=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,nt,E,Pe,ne,Se,$,oe,ot,fe,Ut='Construct a BertGeneration tokenizer. Based on <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.',st,ge,qt=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,at,_e,se,De,ae,Qe,M,re,rt,be,Rt="The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top.",it,ye,Et=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,dt,Te,Wt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,lt,Me,It=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">Attention is
all you need</a> by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`,ct,ke,Xt=`This model should be used when leveraging Bert or Roberta checkpoints for the <a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel">EncoderDecoderModel</a> class as
described in <a href="https://arxiv.org/abs/1907.12461" rel="nofollow">Leveraging Pre-trained Checkpoints for Sequence Generation Tasks</a>
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`,pt,ve,Vt=`To behave as an decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set
to <code>True</code>. To be used in a Seq2Seq model, the model needs to initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,mt,J,ie,ht,we,Ft='The <a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationEncoder">BertGenerationEncoder</a> forward method, overrides the <code>__call__</code> special method.',ut,W,ft,I,Ae,de,Ye,B,le,gt,Be,Nt="BertGeneration Model with a <code>language modeling</code> head on top for CLM fine-tuning.",_t,Ge,Ht=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,bt,$e,Lt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,yt,z,ce,Tt,je,Pt='The <a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationDecoder">BertGenerationDecoder</a> forward method, overrides the <code>__call__</code> special method.',Mt,X,kt,V,Oe,Je,Ke;return T=new me({props:{title:"BertGeneration",local:"bertgeneration",headingTag:"h1"}}),v=new me({props:{title:"Overview",local:"overview",headingTag:"h2"}}),S=new me({props:{title:"Usage examples and tips",local:"usage-examples-and-tips",headingTag:"h2"}}),Q=new xe({props:{code:"JTIzJTIwbGV2ZXJhZ2UlMjBjaGVja3BvaW50cyUyMGZvciUyMEJlcnQyQmVydCUyMG1vZGVsLi4uJTBBJTIzJTIwdXNlJTIwQkVSVCdzJTIwY2xzJTIwdG9rZW4lMjBhcyUyMEJPUyUyMHRva2VuJTIwYW5kJTIwc2VwJTIwdG9rZW4lMjBhcyUyMEVPUyUyMHRva2VuJTBBZW5jb2RlciUyMCUzRCUyMEJlcnRHZW5lcmF0aW9uRW5jb2Rlci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWxhcmdlLXVuY2FzZWQlMjIlMkMlMjBib3NfdG9rZW5faWQlM0QxMDElMkMlMjBlb3NfdG9rZW5faWQlM0QxMDIpJTBBJTIzJTIwYWRkJTIwY3Jvc3MlMjBhdHRlbnRpb24lMjBsYXllcnMlMjBhbmQlMjB1c2UlMjBCRVJUJ3MlMjBjbHMlMjB0b2tlbiUyMGFzJTIwQk9TJTIwdG9rZW4lMjBhbmQlMjBzZXAlMjB0b2tlbiUyMGFzJTIwRU9TJTIwdG9rZW4lMEFkZWNvZGVyJTIwJTNEJTIwQmVydEdlbmVyYXRpb25EZWNvZGVyLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJnb29nbGUtYmVydCUyRmJlcnQtbGFyZ2UtdW5jYXNlZCUyMiUyQyUyMGFkZF9jcm9zc19hdHRlbnRpb24lM0RUcnVlJTJDJTIwaXNfZGVjb2RlciUzRFRydWUlMkMlMjBib3NfdG9rZW5faWQlM0QxMDElMkMlMjBlb3NfdG9rZW5faWQlM0QxMDIlMEEpJTBBYmVydDJiZXJ0JTIwJTNEJTIwRW5jb2RlckRlY29kZXJNb2RlbChlbmNvZGVyJTNEZW5jb2RlciUyQyUyMGRlY29kZXIlM0RkZWNvZGVyKSUwQSUwQSUyMyUyMGNyZWF0ZSUyMHRva2VuaXplci4uLiUwQXRva2VuaXplciUyMCUzRCUyMEJlcnRUb2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1sYXJnZS11bmNhc2VkJTIyKSUwQSUwQWlucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJUaGlzJTIwaXMlMjBhJTIwbG9uZyUyMGFydGljbGUlMjB0byUyMHN1bW1hcml6ZSUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSkuaW5wdXRfaWRzJTBBbGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoaXMlMjBpcyUyMGElMjBzaG9ydCUyMHN1bW1hcnklMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMEElMEElMjMlMjB0cmFpbi4uLiUwQWxvc3MlMjAlM0QlMjBiZXJ0MmJlcnQoaW5wdXRfaWRzJTNEaW5wdXRfaWRzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RsYWJlbHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3MlMEFsb3NzLmJhY2t3YXJkKCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># leverage checkpoints for Bert2Bert model...</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use BERT&#x27;s cls token as BOS token and sep token as EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder = BertGenerationEncoder.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-large-uncased&quot;</span>, bos_token_id=<span class="hljs-number">101</span>, eos_token_id=<span class="hljs-number">102</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add cross attention layers and use BERT&#x27;s cls token as BOS token and sep token as EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder = BertGenerationDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google-bert/bert-large-uncased&quot;</span>, add_cross_attention=<span class="hljs-literal">True</span>, is_decoder=<span class="hljs-literal">True</span>, bos_token_id=<span class="hljs-number">101</span>, eos_token_id=<span class="hljs-number">102</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>bert2bert = EncoderDecoderModel(encoder=encoder, decoder=decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create tokenizer...</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-large-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;This is a long article to summarize&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;This is a short summary&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># train...</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = bert2bert(input_ids=input_ids, decoder_input_ids=labels, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`,wrap:!1}}),Y=new xe({props:{code:"JTIzJTIwaW5zdGFudGlhdGUlMjBzZW50ZW5jZSUyMGZ1c2lvbiUyMG1vZGVsJTBBc2VudGVuY2VfZnVzZXIlMjAlM0QlMjBFbmNvZGVyRGVjb2Rlck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZyb2JlcnRhMnJvYmVydGFfTC0yNF9kaXNjb2Z1c2UlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGcm9iZXJ0YTJyb2JlcnRhX0wtMjRfZGlzY29mdXNlJTIyKSUwQSUwQWlucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJUaGlzJTIwaXMlMjB0aGUlMjBmaXJzdCUyMHNlbnRlbmNlLiUyMFRoaXMlMjBpcyUyMHRoZSUyMHNlY29uZCUyMHNlbnRlbmNlLiUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSkuaW5wdXRfaWRzJTBBJTBBb3V0cHV0cyUyMCUzRCUyMHNlbnRlbmNlX2Z1c2VyLmdlbmVyYXRlKGlucHV0X2lkcyklMEElMEFwcmludCh0b2tlbml6ZXIuZGVjb2RlKG91dHB1dHMlNUIwJTVEKSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate sentence fusion model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sentence_fuser = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;google/roberta2roberta_L-24_discofuse&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/roberta2roberta_L-24_discofuse&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;This is the first sentence. This is the second sentence.&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = sentence_fuser.generate(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))`,wrap:!1}}),ee=new me({props:{title:"BertGenerationConfig",local:"transformers.BertGenerationConfig",headingTag:"h2"}}),te=new pe({props:{name:"class transformers.BertGenerationConfig",anchor:"transformers.BertGenerationConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>BertGeneration</code>.`,name:"vocab_size"},{anchor:"transformers.BertGenerationConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BertGenerationConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BertGenerationConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BertGenerationConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often called feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BertGenerationConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BertGenerationConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BertGenerationConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BertGenerationConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BertGenerationConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertGenerationConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertGenerationConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.BertGenerationConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Beginning of stream token id.`,name:"bos_token_id"},{anchor:"transformers.BertGenerationConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
End of stream token id.`,name:"eos_token_id"},{anchor:"transformers.BertGenerationConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertGenerationConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bert_generation/configuration_bert_generation.py#L20"}}),E=new vt({props:{anchor:"transformers.BertGenerationConfig.example",$$slots:{default:[Kt]},$$scope:{ctx:j}}}),ne=new me({props:{title:"BertGenerationTokenizer",local:"transformers.BertGenerationTokenizer",headingTag:"h2"}}),oe=new pe({props:{name:"class transformers.BertGenerationTokenizer",anchor:"transformers.BertGenerationTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '<::::>'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BertGenerationTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The begin of sequence token.`,name:"bos_token"},{anchor:"transformers.BertGenerationTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BertGenerationTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertGenerationTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertGenerationTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt; --:::&gt;&quot;</code>):
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertGenerationTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bert_generation/tokenization_bert_generation.py#L43"}}),se=new pe({props:{name:"save_vocabulary",anchor:"transformers.BertGenerationTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bert_generation/tokenization_bert_generation.py#L170"}}),ae=new me({props:{title:"BertGenerationEncoder",local:"transformers.BertGenerationEncoder",headingTag:"h2"}}),re=new pe({props:{name:"class transformers.BertGenerationEncoder",anchor:"transformers.BertGenerationEncoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L664"}}),ie=new pe({props:{name:"forward",anchor:"transformers.BertGenerationEncoder.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertGenerationEncoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertGenerationEncoder.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertGenerationEncoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertGenerationEncoder.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertGenerationEncoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertGenerationEncoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertGenerationEncoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.`,name:"encoder_attention_mask"},{anchor:"transformers.BertGenerationEncoder.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertGenerationEncoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L709",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig"
>BertGenerationConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),W=new St({props:{$$slots:{default:[en]},$$scope:{ctx:j}}}),I=new vt({props:{anchor:"transformers.BertGenerationEncoder.forward.example",$$slots:{default:[tn]},$$scope:{ctx:j}}}),de=new me({props:{title:"BertGenerationDecoder",local:"transformers.BertGenerationDecoder",headingTag:"h2"}}),le=new pe({props:{name:"class transformers.BertGenerationDecoder",anchor:"transformers.BertGenerationDecoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L851"}}),ce=new pe({props:{name:"forward",anchor:"transformers.BertGenerationDecoder.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertGenerationDecoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertGenerationDecoder.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertGenerationDecoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertGenerationDecoder.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertGenerationDecoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertGenerationDecoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertGenerationDecoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertGenerationDecoder.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BertGenerationDecoder.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BertGenerationDecoder.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertGenerationDecoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L876",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig"
>BertGenerationConfig</a>) and inputs.</p>
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
`}}),X=new St({props:{$$slots:{default:[nn]},$$scope:{ctx:j}}}),V=new vt({props:{anchor:"transformers.BertGenerationDecoder.forward.example",$$slots:{default:[on]},$$scope:{ctx:j}}}),{c(){o=l("meta"),k=a(),p=l("p"),m=a(),u(T.$$.fragment),s=a(),u(v.$$.fragment),Ce=a(),N=l("p"),N.innerHTML=wt,Ue=a(),H=l("p"),H.textContent=Bt,qe=a(),L=l("p"),L.innerHTML=Gt,Re=a(),P=l("p"),P.innerHTML=$t,Ee=a(),u(S.$$.fragment),We=a(),D=l("p"),D.innerHTML=jt,Ie=a(),u(Q.$$.fragment),Xe=a(),A=l("p"),A.innerHTML=Jt,Ve=a(),u(Y.$$.fragment),Fe=a(),O=l("p"),O.textContent=zt,Ne=a(),K=l("ul"),K.innerHTML=xt,He=a(),u(ee.$$.fragment),Le=a(),G=l("div"),u(te.$$.fragment),et=a(),he=l("p"),he.innerHTML=Zt,tt=a(),ue=l("p"),ue.innerHTML=Ct,nt=a(),u(E.$$.fragment),Pe=a(),u(ne.$$.fragment),Se=a(),$=l("div"),u(oe.$$.fragment),ot=a(),fe=l("p"),fe.innerHTML=Ut,st=a(),ge=l("p"),ge.innerHTML=qt,at=a(),_e=l("div"),u(se.$$.fragment),De=a(),u(ae.$$.fragment),Qe=a(),M=l("div"),u(re.$$.fragment),rt=a(),be=l("p"),be.textContent=Rt,it=a(),ye=l("p"),ye.innerHTML=Et,dt=a(),Te=l("p"),Te.innerHTML=Wt,lt=a(),Me=l("p"),Me.innerHTML=It,ct=a(),ke=l("p"),ke.innerHTML=Xt,pt=a(),ve=l("p"),ve.innerHTML=Vt,mt=a(),J=l("div"),u(ie.$$.fragment),ht=a(),we=l("p"),we.innerHTML=Ft,ut=a(),u(W.$$.fragment),ft=a(),u(I.$$.fragment),Ae=a(),u(de.$$.fragment),Ye=a(),B=l("div"),u(le.$$.fragment),gt=a(),Be=l("p"),Be.innerHTML=Nt,_t=a(),Ge=l("p"),Ge.innerHTML=Ht,bt=a(),$e=l("p"),$e.innerHTML=Lt,yt=a(),z=l("div"),u(ce.$$.fragment),Tt=a(),je=l("p"),je.innerHTML=Pt,Mt=a(),u(X.$$.fragment),kt=a(),u(V.$$.fragment),Oe=a(),Je=l("p"),this.h()},l(e){const t=Ot("svelte-u9bgzb",document.head);o=c(t,"META",{name:!0,content:!0}),t.forEach(n),k=r(e),p=c(e,"P",{}),q(p).forEach(n),m=r(e),f(T.$$.fragment,e),s=r(e),f(v.$$.fragment,e),Ce=r(e),N=c(e,"P",{"data-svelte-h":!0}),h(N)!=="svelte-qb9cia"&&(N.innerHTML=wt),Ue=r(e),H=c(e,"P",{"data-svelte-h":!0}),h(H)!=="svelte-vfdo9a"&&(H.textContent=Bt),qe=r(e),L=c(e,"P",{"data-svelte-h":!0}),h(L)!=="svelte-15bi2vw"&&(L.innerHTML=Gt),Re=r(e),P=c(e,"P",{"data-svelte-h":!0}),h(P)!=="svelte-dprat4"&&(P.innerHTML=$t),Ee=r(e),f(S.$$.fragment,e),We=r(e),D=c(e,"P",{"data-svelte-h":!0}),h(D)!=="svelte-1c2a8uh"&&(D.innerHTML=jt),Ie=r(e),f(Q.$$.fragment,e),Xe=r(e),A=c(e,"P",{"data-svelte-h":!0}),h(A)!=="svelte-mxtzso"&&(A.innerHTML=Jt),Ve=r(e),f(Y.$$.fragment,e),Fe=r(e),O=c(e,"P",{"data-svelte-h":!0}),h(O)!=="svelte-axv494"&&(O.textContent=zt),Ne=r(e),K=c(e,"UL",{"data-svelte-h":!0}),h(K)!=="svelte-bgh1j6"&&(K.innerHTML=xt),He=r(e),f(ee.$$.fragment,e),Le=r(e),G=c(e,"DIV",{class:!0});var x=q(G);f(te.$$.fragment,x),et=r(x),he=c(x,"P",{"data-svelte-h":!0}),h(he)!=="svelte-1664b7p"&&(he.innerHTML=Zt),tt=r(x),ue=c(x,"P",{"data-svelte-h":!0}),h(ue)!=="svelte-o55m63"&&(ue.innerHTML=Ct),nt=r(x),f(E.$$.fragment,x),x.forEach(n),Pe=r(e),f(ne.$$.fragment,e),Se=r(e),$=c(e,"DIV",{class:!0});var Z=q($);f(oe.$$.fragment,Z),ot=r(Z),fe=c(Z,"P",{"data-svelte-h":!0}),h(fe)!=="svelte-qeg36l"&&(fe.innerHTML=Ut),st=r(Z),ge=c(Z,"P",{"data-svelte-h":!0}),h(ge)!=="svelte-1c3t5ty"&&(ge.innerHTML=qt),at=r(Z),_e=c(Z,"DIV",{class:!0});var ze=q(_e);f(se.$$.fragment,ze),ze.forEach(n),Z.forEach(n),De=r(e),f(ae.$$.fragment,e),Qe=r(e),M=c(e,"DIV",{class:!0});var w=q(M);f(re.$$.fragment,w),rt=r(w),be=c(w,"P",{"data-svelte-h":!0}),h(be)!=="svelte-1g5c0ym"&&(be.textContent=Rt),it=r(w),ye=c(w,"P",{"data-svelte-h":!0}),h(ye)!=="svelte-6pahdo"&&(ye.innerHTML=Et),dt=r(w),Te=c(w,"P",{"data-svelte-h":!0}),h(Te)!=="svelte-hswkmf"&&(Te.innerHTML=Wt),lt=r(w),Me=c(w,"P",{"data-svelte-h":!0}),h(Me)!=="svelte-1du13oj"&&(Me.innerHTML=It),ct=r(w),ke=c(w,"P",{"data-svelte-h":!0}),h(ke)!=="svelte-16xottd"&&(ke.innerHTML=Xt),pt=r(w),ve=c(w,"P",{"data-svelte-h":!0}),h(ve)!=="svelte-174erte"&&(ve.innerHTML=Vt),mt=r(w),J=c(w,"DIV",{class:!0});var C=q(J);f(ie.$$.fragment,C),ht=r(C),we=c(C,"P",{"data-svelte-h":!0}),h(we)!=="svelte-1ku2ayb"&&(we.innerHTML=Ft),ut=r(C),f(W.$$.fragment,C),ft=r(C),f(I.$$.fragment,C),C.forEach(n),w.forEach(n),Ae=r(e),f(de.$$.fragment,e),Ye=r(e),B=c(e,"DIV",{class:!0});var U=q(B);f(le.$$.fragment,U),gt=r(U),Be=c(U,"P",{"data-svelte-h":!0}),h(Be)!=="svelte-1avzda8"&&(Be.innerHTML=Nt),_t=r(U),Ge=c(U,"P",{"data-svelte-h":!0}),h(Ge)!=="svelte-6pahdo"&&(Ge.innerHTML=Ht),bt=r(U),$e=c(U,"P",{"data-svelte-h":!0}),h($e)!=="svelte-hswkmf"&&($e.innerHTML=Lt),yt=r(U),z=c(U,"DIV",{class:!0});var F=q(z);f(ce.$$.fragment,F),Tt=r(F),je=c(F,"P",{"data-svelte-h":!0}),h(je)!=="svelte-kze9rj"&&(je.innerHTML=Pt),Mt=r(F),f(X.$$.fragment,F),kt=r(F),f(V.$$.fragment,F),F.forEach(n),U.forEach(n),Oe=r(e),Je=c(e,"P",{}),q(Je).forEach(n),this.h()},h(){R(o,"name","hf:doc:metadata"),R(o,"content",an),R(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){d(document.head,o),i(e,k,t),i(e,p,t),i(e,m,t),g(T,e,t),i(e,s,t),g(v,e,t),i(e,Ce,t),i(e,N,t),i(e,Ue,t),i(e,H,t),i(e,qe,t),i(e,L,t),i(e,Re,t),i(e,P,t),i(e,Ee,t),g(S,e,t),i(e,We,t),i(e,D,t),i(e,Ie,t),g(Q,e,t),i(e,Xe,t),i(e,A,t),i(e,Ve,t),g(Y,e,t),i(e,Fe,t),i(e,O,t),i(e,Ne,t),i(e,K,t),i(e,He,t),g(ee,e,t),i(e,Le,t),i(e,G,t),g(te,G,null),d(G,et),d(G,he),d(G,tt),d(G,ue),d(G,nt),g(E,G,null),i(e,Pe,t),g(ne,e,t),i(e,Se,t),i(e,$,t),g(oe,$,null),d($,ot),d($,fe),d($,st),d($,ge),d($,at),d($,_e),g(se,_e,null),i(e,De,t),g(ae,e,t),i(e,Qe,t),i(e,M,t),g(re,M,null),d(M,rt),d(M,be),d(M,it),d(M,ye),d(M,dt),d(M,Te),d(M,lt),d(M,Me),d(M,ct),d(M,ke),d(M,pt),d(M,ve),d(M,mt),d(M,J),g(ie,J,null),d(J,ht),d(J,we),d(J,ut),g(W,J,null),d(J,ft),g(I,J,null),i(e,Ae,t),g(de,e,t),i(e,Ye,t),i(e,B,t),g(le,B,null),d(B,gt),d(B,Be),d(B,_t),d(B,Ge),d(B,bt),d(B,$e),d(B,yt),d(B,z),g(ce,z,null),d(z,Tt),d(z,je),d(z,Mt),g(X,z,null),d(z,kt),g(V,z,null),i(e,Oe,t),i(e,Je,t),Ke=!0},p(e,[t]){const x={};t&2&&(x.$$scope={dirty:t,ctx:e}),E.$set(x);const Z={};t&2&&(Z.$$scope={dirty:t,ctx:e}),W.$set(Z);const ze={};t&2&&(ze.$$scope={dirty:t,ctx:e}),I.$set(ze);const w={};t&2&&(w.$$scope={dirty:t,ctx:e}),X.$set(w);const C={};t&2&&(C.$$scope={dirty:t,ctx:e}),V.$set(C)},i(e){Ke||(_(T.$$.fragment,e),_(v.$$.fragment,e),_(S.$$.fragment,e),_(Q.$$.fragment,e),_(Y.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(E.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(se.$$.fragment,e),_(ae.$$.fragment,e),_(re.$$.fragment,e),_(ie.$$.fragment,e),_(W.$$.fragment,e),_(I.$$.fragment,e),_(de.$$.fragment,e),_(le.$$.fragment,e),_(ce.$$.fragment,e),_(X.$$.fragment,e),_(V.$$.fragment,e),Ke=!0)},o(e){b(T.$$.fragment,e),b(v.$$.fragment,e),b(S.$$.fragment,e),b(Q.$$.fragment,e),b(Y.$$.fragment,e),b(ee.$$.fragment,e),b(te.$$.fragment,e),b(E.$$.fragment,e),b(ne.$$.fragment,e),b(oe.$$.fragment,e),b(se.$$.fragment,e),b(ae.$$.fragment,e),b(re.$$.fragment,e),b(ie.$$.fragment,e),b(W.$$.fragment,e),b(I.$$.fragment,e),b(de.$$.fragment,e),b(le.$$.fragment,e),b(ce.$$.fragment,e),b(X.$$.fragment,e),b(V.$$.fragment,e),Ke=!1},d(e){e&&(n(k),n(p),n(m),n(s),n(Ce),n(N),n(Ue),n(H),n(qe),n(L),n(Re),n(P),n(Ee),n(We),n(D),n(Ie),n(Xe),n(A),n(Ve),n(Fe),n(O),n(Ne),n(K),n(He),n(Le),n(G),n(Pe),n(Se),n($),n(De),n(Qe),n(M),n(Ae),n(Ye),n(B),n(Oe),n(Je)),n(o),y(T,e),y(v,e),y(S,e),y(Q,e),y(Y,e),y(ee,e),y(te),y(E),y(ne,e),y(oe),y(se),y(ae,e),y(re),y(ie),y(W),y(I),y(de,e),y(le),y(ce),y(X),y(V)}}}const an='{"title":"BertGeneration","local":"bertgeneration","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage examples and tips","local":"usage-examples-and-tips","sections":[],"depth":2},{"title":"BertGenerationConfig","local":"transformers.BertGenerationConfig","sections":[],"depth":2},{"title":"BertGenerationTokenizer","local":"transformers.BertGenerationTokenizer","sections":[],"depth":2},{"title":"BertGenerationEncoder","local":"transformers.BertGenerationEncoder","sections":[],"depth":2},{"title":"BertGenerationDecoder","local":"transformers.BertGenerationDecoder","sections":[],"depth":2}],"depth":1}';function rn(j){return Qt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fn extends At{constructor(o){super(),Yt(this,o,rn,sn,Dt,{})}}export{fn as component};
