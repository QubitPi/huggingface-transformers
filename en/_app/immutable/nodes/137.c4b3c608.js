import{s as io,o as lo,n as We}from"../chunks/scheduler.9bc65507.js";import{S as co,i as mo,g as i,s,r as f,A as po,h as l,f as r,c as a,j as I,u as _,x as h,k as U,y as n,a as m,v as g,d as T,t as b,w as k}from"../chunks/index.707bf1b6.js";import{T as ro}from"../chunks/Tip.c2ecdbf4.js";import{D as V}from"../chunks/Docstring.17db21ae.js";import{C as st}from"../chunks/CodeBlock.54a9f38d.js";import{E as nt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ge}from"../chunks/Heading.342b1fa6.js";function ho(x){let o,v="Examples:",p,c,u;return c=new st({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEZTTVRDb25maWclMkMlMjBGU01UTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwRlNNVCUyMGZhY2Vib29rJTJGd210MTktZW4tcnUlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWclMjAlM0QlMjBGU01UQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMEZTTVRNb2RlbChjb25maWcpJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FSMTConfig, FSMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a FSMT facebook/wmt19-en-ru style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = FSMTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FSMTModel(config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){o=i("p"),o.textContent=v,p=s(),f(c.$$.fragment)},l(t){o=l(t,"P",{"data-svelte-h":!0}),h(o)!=="svelte-kvfsh7"&&(o.textContent=v),p=a(t),_(c.$$.fragment,t)},m(t,M){m(t,o,M),m(t,p,M),g(c,t,M),u=!0},p:We,i(t){u||(T(c.$$.fragment,t),u=!0)},o(t){b(c.$$.fragment,t),u=!1},d(t){t&&(r(o),r(p)),k(c,t)}}}function uo(x){let o,v="Transformer sequence pair mask has the following format:",p,c,u;return c=new st({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMEElN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTIwJTIwJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`,wrap:!1}}),{c(){o=i("p"),o.textContent=v,p=s(),f(c.$$.fragment)},l(t){o=l(t,"P",{"data-svelte-h":!0}),h(o)!=="svelte-12v5j2d"&&(o.textContent=v),p=a(t),_(c.$$.fragment,t)},m(t,M){m(t,o,M),m(t,p,M),g(c,t,M),u=!0},p:We,i(t){u||(T(c.$$.fragment,t),u=!0)},o(t){b(c.$$.fragment,t),u=!1},d(t){t&&(r(o),r(p)),k(c,t)}}}function fo(x){let o,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=i("p"),o.innerHTML=v},l(p){o=l(p,"P",{"data-svelte-h":!0}),h(o)!=="svelte-fincs2"&&(o.innerHTML=v)},m(p,c){m(p,o,c)},p:We,d(p){p&&r(o)}}}function _o(x){let o,v="Example:",p,c,u;return c=new st({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGU01UTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGd210MTktcnUtZW4lMjIpJTBBbW9kZWwlMjAlM0QlMjBGU01UTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGd210MTktcnUtZW4lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FSMTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/wmt19-ru-en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FSMTModel.from_pretrained(<span class="hljs-string">&quot;facebook/wmt19-ru-en&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){o=i("p"),o.textContent=v,p=s(),f(c.$$.fragment)},l(t){o=l(t,"P",{"data-svelte-h":!0}),h(o)!=="svelte-11lpom8"&&(o.textContent=v),p=a(t),_(c.$$.fragment,t)},m(t,M){m(t,o,M),m(t,p,M),g(c,t,M),u=!0},p:We,i(t){u||(T(c.$$.fragment,t),u=!0)},o(t){b(c.$$.fragment,t),u=!1},d(t){t&&(r(o),r(p)),k(c,t)}}}function go(x){let o,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=i("p"),o.innerHTML=v},l(p){o=l(p,"P",{"data-svelte-h":!0}),h(o)!=="svelte-fincs2"&&(o.innerHTML=v)},m(p,c){m(p,o,c)},p:We,d(p){p&&r(o)}}}function To(x){let o,v="Translation example::",p,c,u;return c=new st({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGU01URm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBJTBBbW5hbWUlMjAlM0QlMjAlMjJmYWNlYm9vayUyRndtdDE5LXJ1LWVuJTIyJTBBbW9kZWwlMjAlM0QlMjBGU01URm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZChtbmFtZSklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZChtbmFtZSklMEElMEFzcmNfdGV4dCUyMCUzRCUyMCUyMiVEMCU5QyVEMCVCMCVEMSU4OCVEMCVCOCVEMCVCRCVEMCVCRCVEMCVCRSVEMCVCNSUyMCVEMCVCRSVEMCVCMSVEMSU4MyVEMSU4NyVEMCVCNSVEMCVCRCVEMCVCOCVEMCVCNSUyMC0lMjAlRDElOEQlRDElODIlRDAlQkUlMjAlRDAlQjclRDAlQjQlRDAlQkUlRDElODAlRDAlQkUlRDAlQjIlRDAlQkUlMkMlMjAlRDAlQkQlRDAlQjUlMjAlRDElODIlRDAlQjAlRDAlQkElMjAlRDAlQkIlRDAlQjglM0YlMjIlMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoc3JjX3RleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRfaWRzJTJDJTIwbnVtX2JlYW1zJTNENSUyQyUyMG51bV9yZXR1cm5fc2VxdWVuY2VzJTNEMyklMEF0b2tlbml6ZXIuZGVjb2RlKG91dHB1dHMlNUIwJTVEJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FSMTForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/wmt19-ru-en&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FSMTForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(mname)

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot;Машинное обучение - это здорово, не так ли?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids, num_beams=<span class="hljs-number">5</span>, num_return_sequences=<span class="hljs-number">3</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Machine learning is great, isn&#x27;t it?&quot;</span>`,wrap:!1}}),{c(){o=i("p"),o.textContent=v,p=s(),f(c.$$.fragment)},l(t){o=l(t,"P",{"data-svelte-h":!0}),h(o)!=="svelte-1ezebad"&&(o.textContent=v),p=a(t),_(c.$$.fragment,t)},m(t,M){m(t,o,M),m(t,p,M),g(c,t,M),u=!0},p:We,i(t){u||(T(c.$$.fragment,t),u=!0)},o(t){b(c.$$.fragment,t),u=!1},d(t){t&&(r(o),r(p)),k(c,t)}}}function bo(x){let o,v,p,c,u,t,M,Je,Q,Et='FSMT (FairSeq MachineTranslation) models were introduced in <a href="https://arxiv.org/abs/1907.06616" rel="nofollow">Facebook FAIR’s WMT19 News Translation Task Submission</a> by Nathan Ng, Kyra Yee, Alexei Baevski, Myle Ott, Michael Auli, Sergey Edunov.',Ne,X,Dt="The abstract of the paper is the following:",Pe,Y,Wt=`<em>This paper describes Facebook FAIR’s submission to the WMT19 shared news translation task. We participate in two
language pairs and four language directions, English &lt;-&gt; German and English &lt;-&gt; Russian. Following our submission from
last year, our baseline systems are large BPE-based transformer models trained with the Fairseq sequence modeling
toolkit which rely on sampled back-translations. This year we experiment with different bitext data filtering schemes,
as well as with adding filtered back-translated data. We also ensemble and fine-tune our models on domain-specific
data, then decode using noisy channel model reranking. Our submissions are ranked first in all four directions of the
human evaluation campaign. On En-&gt;De, our system significantly outperforms other systems as well as human translations.
This system improves upon our WMT’18 submission by 4.5 BLEU points.</em>`,Re,K,Vt=`This model was contributed by <a href="https://huggingface.co/stas" rel="nofollow">stas</a>. The original code can be found
<a href="https://github.com/pytorch/fairseq/tree/master/examples/wmt19" rel="nofollow">here</a>.`,Ge,ee,He,te,At=`<li>FSMT uses source and target vocabulary pairs that aren’t combined into one. It doesn’t share embeddings tokens
either. Its tokenizer is very similar to <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a> and the main model is derived from
<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartModel">BartModel</a>.</li>`,Ze,oe,Oe,S,ne,at,Te,Jt=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/fsmt#transformers.FSMTModel">FSMTModel</a>. It is used to instantiate a FSMT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the FSMT
<a href="https://huggingface.co/facebook/wmt19-en-ru" rel="nofollow">facebook/wmt19-en-ru</a> architecture.`,rt,be,Nt=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,dt,J,Be,se,Qe,y,ae,it,ke,Pt="Construct an FAIRSEQ Transformer tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:",lt,Me,Rt=`<li>Moses preprocessing and tokenization.</li> <li>Normalizing all inputs text.</li> <li>The arguments <code>special_tokens</code> and the function <code>set_special_tokens</code>, can be used to add additional symbols (like
”<strong>classify</strong>”) to a vocabulary.</li> <li>The argument <code>langs</code> defines a pair of languages.</li>`,ct,ve,Gt=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,mt,E,re,pt,ye,Ht=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A FAIRSEQ Transformer sequence has the following format:`,ht,we,Zt="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt; B &lt;/s&gt;</code></li>",ut,N,de,ft,Fe,Ot=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,_t,C,ie,gt,$e,Bt="Create a mask from the two sequences passed to be used in a sequence-pair classification task. A FAIRSEQ",Tt,P,bt,xe,Qt="If <code>token_ids_1</code> is <code>None</code>, this method only returns the first portion of the mask (0s).",kt,Ce,Xt=`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An
FAIRSEQ_TRANSFORMER sequence pair mask has the following format:`,Mt,Se,le,Xe,ce,Ye,F,me,vt,ze,Yt="The bare FSMT Model outputting raw hidden-states without any specific head on top.",yt,qe,Kt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,wt,je,eo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ft,q,pe,$t,Ie,to='The <a href="/docs/transformers/main/en/model_doc/fsmt#transformers.FSMTModel">FSMTModel</a> forward method, overrides the <code>__call__</code> special method.',xt,R,Ct,G,Ke,he,et,$,ue,St,Ue,oo="The FSMT Model with a language modeling head. Can be used for summarization.",zt,Le,no=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,qt,Ee,so=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,jt,j,fe,It,De,ao='The <a href="/docs/transformers/main/en/model_doc/fsmt#transformers.FSMTForConditionalGeneration">FSMTForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',Ut,H,Lt,Z,tt,Ve,ot;return u=new ge({props:{title:"FSMT",local:"fsmt",headingTag:"h1"}}),M=new ge({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ee=new ge({props:{title:"Implementation Notes",local:"implementation-notes",headingTag:"h2"}}),oe=new ge({props:{title:"FSMTConfig",local:"transformers.FSMTConfig",headingTag:"h2"}}),ne=new V({props:{name:"class transformers.FSMTConfig",anchor:"transformers.FSMTConfig",parameters:[{name:"langs",val:" = ['en', 'de']"},{name:"src_vocab_size",val:" = 42024"},{name:"tgt_vocab_size",val:" = 42024"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"max_length",val:" = 200"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_layers",val:" = 12"},{name:"encoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_layers",val:" = 12"},{name:"decoder_attention_heads",val:" = 16"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"scale_embedding",val:" = True"},{name:"tie_word_embeddings",val:" = False"},{name:"num_beams",val:" = 5"},{name:"length_penalty",val:" = 1.0"},{name:"early_stopping",val:" = False"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**common_kwargs",val:""}],parametersDescription:[{anchor:"transformers.FSMTConfig.langs",description:`<strong>langs</strong> (<code>List[str]</code>) &#x2014;
A list with source language and target_language (e.g., [&#x2018;en&#x2019;, &#x2018;ru&#x2019;]).`,name:"langs"},{anchor:"transformers.FSMTConfig.src_vocab_size",description:`<strong>src_vocab_size</strong> (<code>int</code>) &#x2014;
Vocabulary size of the encoder. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed to the forward method in the encoder.`,name:"src_vocab_size"},{anchor:"transformers.FSMTConfig.tgt_vocab_size",description:`<strong>tgt_vocab_size</strong> (<code>int</code>) &#x2014;
Vocabulary size of the decoder. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed to the forward method in the decoder.`,name:"tgt_vocab_size"},{anchor:"transformers.FSMTConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.FSMTConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.FSMTConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.FSMTConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.FSMTConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.FSMTConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.FSMTConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.FSMTConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.FSMTConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.FSMTConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.FSMTConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.FSMTConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.FSMTConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.FSMTConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.FSMTConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Beginning of stream token id.`,name:"bos_token_id"},{anchor:"transformers.FSMTConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.FSMTConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
End of stream token id.`,name:"eos_token_id"},{anchor:"transformers.FSMTConfig.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
This model starts decoding with <code>eos_token_id</code>`,name:"decoder_start_token_id"},{anchor:"transformers.FSMTConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Google &#x201C;layerdrop arxiv&#x201D;, as its not explainable in one line.`,name:"encoder_layerdrop"},{anchor:"transformers.FSMTConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Google &#x201C;layerdrop arxiv&#x201D;, as its not explainable in one line.`,name:"decoder_layerdrop"},{anchor:"transformers.FSMTConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether this is an encoder/decoder model.`,name:"is_encoder_decoder"},{anchor:"transformers.FSMTConfig.tie_word_embeddings",description:`<strong>tie_word_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to tie input and output embeddings.`,name:"tie_word_embeddings"},{anchor:"transformers.FSMTConfig.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Number of beams for beam search that will be used by default in the <code>generate</code> method of the model. 1 means
no beam search.`,name:"num_beams"},{anchor:"transformers.FSMTConfig.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
Exponential penalty to the length that is used with beam-based generation. It is applied as an exponent to
the sequence length, which in turn is used to divide the score of the sequence. Since the score is the log
likelihood of the sequence (i.e. negative), <code>length_penalty</code> &gt; 0.0 promotes longer sequences, while
<code>length_penalty</code> &lt; 0.0 encourages shorter sequences.`,name:"length_penalty"},{anchor:"transformers.FSMTConfig.early_stopping",description:`<strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Flag that will be used by default in the <code>generate</code> method of the model. Whether to stop the beam search
when at least <code>num_beams</code> sentences are finished per batch or not.`,name:"early_stopping"},{anchor:"transformers.FSMTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.FSMTConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fsmt/configuration_fsmt.py#L40"}}),J=new nt({props:{anchor:"transformers.FSMTConfig.example",$$slots:{default:[ho]},$$scope:{ctx:x}}}),se=new ge({props:{title:"FSMTTokenizer",local:"transformers.FSMTTokenizer",headingTag:"h2"}}),ae=new V({props:{name:"class transformers.FSMTTokenizer",anchor:"transformers.FSMTTokenizer",parameters:[{name:"langs",val:" = None"},{name:"src_vocab_file",val:" = None"},{name:"tgt_vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FSMTTokenizer.langs",description:`<strong>langs</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
A list of two languages to translate from and to, for instance <code>[&quot;en&quot;, &quot;ru&quot;]</code>.`,name:"langs"},{anchor:"transformers.FSMTTokenizer.src_vocab_file",description:`<strong>src_vocab_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
File containing the vocabulary for the source language.`,name:"src_vocab_file"},{anchor:"transformers.FSMTTokenizer.tgt_vocab_file",description:`<strong>tgt_vocab_file</strong> (<code>st</code>, <em>optional</em>) &#x2014;
File containing the vocabulary for the target language.`,name:"tgt_vocab_file"},{anchor:"transformers.FSMTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
File containing the merges.`,name:"merges_file"},{anchor:"transformers.FSMTTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.FSMTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FSMTTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.FSMTTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.FSMTTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fsmt/tokenization_fsmt.py#L135"}}),re=new V({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FSMTTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FSMTTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FSMTTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fsmt/tokenization_fsmt.py#L403",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),de=new V({props:{name:"get_special_tokens_mask",anchor:"transformers.FSMTTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FSMTTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FSMTTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FSMTTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fsmt/tokenization_fsmt.py#L429",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ie=new V({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FSMTTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FSMTTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FSMTTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fsmt/tokenization_fsmt.py#L457",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),P=new nt({props:{anchor:"transformers.FSMTTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[uo]},$$scope:{ctx:x}}}),le=new V({props:{name:"save_vocabulary",anchor:"transformers.FSMTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fsmt/tokenization_fsmt.py#L490"}}),ce=new ge({props:{title:"FSMTModel",local:"transformers.FSMTModel",headingTag:"h2"}}),me=new V({props:{name:"class transformers.FSMTModel",anchor:"transformers.FSMTModel",parameters:[{name:"config",val:": FSMTConfig"}],parametersDescription:[{anchor:"transformers.FSMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fsmt#transformers.FSMTConfig">FSMTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fsmt/modeling_fsmt.py#L1028"}}),pe=new V({props:{name:"forward",anchor:"transformers.FSMTModel.forward",parameters:[{name:"input_ids",val:": LongTensor"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FSMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>FSTMTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FSMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FSMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>FSMT uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.FSMTModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FSMTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FSMTModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.FSMTModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.FSMTModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>Tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden-states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FSMTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.FSMTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FSMTModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.FSMTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.FSMTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FSMTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FSMTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fsmt/modeling_fsmt.py#L1059",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fsmt#transformers.FSMTConfig"
>FSMTConfig</a>) and inputs.</p>
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
`}}),R=new ro({props:{$$slots:{default:[fo]},$$scope:{ctx:x}}}),G=new nt({props:{anchor:"transformers.FSMTModel.forward.example",$$slots:{default:[_o]},$$scope:{ctx:x}}}),he=new ge({props:{title:"FSMTForConditionalGeneration",local:"transformers.FSMTForConditionalGeneration",headingTag:"h2"}}),ue=new V({props:{name:"class transformers.FSMTForConditionalGeneration",anchor:"transformers.FSMTForConditionalGeneration",parameters:[{name:"config",val:": FSMTConfig"}],parametersDescription:[{anchor:"transformers.FSMTForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fsmt#transformers.FSMTConfig">FSMTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fsmt/modeling_fsmt.py#L1170"}}),fe=new V({props:{name:"forward",anchor:"transformers.FSMTForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FSMTForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>FSTMTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FSMTForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>FSMT uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.FSMTForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>Tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden-states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FSMTForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.FSMTForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FSMTForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.FSMTForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.FSMTForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FSMTForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FSMTForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FSMTForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/fsmt/modeling_fsmt.py#L1185",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fsmt#transformers.FSMTConfig"
>FSMTConfig</a>) and inputs.</p>
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
`}}),H=new ro({props:{$$slots:{default:[go]},$$scope:{ctx:x}}}),Z=new nt({props:{anchor:"transformers.FSMTForConditionalGeneration.forward.example",$$slots:{default:[To]},$$scope:{ctx:x}}}),{c(){o=i("meta"),v=s(),p=i("p"),c=s(),f(u.$$.fragment),t=s(),f(M.$$.fragment),Je=s(),Q=i("p"),Q.innerHTML=Et,Ne=s(),X=i("p"),X.textContent=Dt,Pe=s(),Y=i("p"),Y.innerHTML=Wt,Re=s(),K=i("p"),K.innerHTML=Vt,Ge=s(),f(ee.$$.fragment),He=s(),te=i("ul"),te.innerHTML=At,Ze=s(),f(oe.$$.fragment),Oe=s(),S=i("div"),f(ne.$$.fragment),at=s(),Te=i("p"),Te.innerHTML=Jt,rt=s(),be=i("p"),be.innerHTML=Nt,dt=s(),f(J.$$.fragment),Be=s(),f(se.$$.fragment),Qe=s(),y=i("div"),f(ae.$$.fragment),it=s(),ke=i("p"),ke.textContent=Pt,lt=s(),Me=i("ul"),Me.innerHTML=Rt,ct=s(),ve=i("p"),ve.innerHTML=Gt,mt=s(),E=i("div"),f(re.$$.fragment),pt=s(),ye=i("p"),ye.textContent=Ht,ht=s(),we=i("ul"),we.innerHTML=Zt,ut=s(),N=i("div"),f(de.$$.fragment),ft=s(),Fe=i("p"),Fe.innerHTML=Ot,_t=s(),C=i("div"),f(ie.$$.fragment),gt=s(),$e=i("p"),$e.textContent=Bt,Tt=s(),f(P.$$.fragment),bt=s(),xe=i("p"),xe.innerHTML=Qt,kt=s(),Ce=i("p"),Ce.textContent=Xt,Mt=s(),Se=i("div"),f(le.$$.fragment),Xe=s(),f(ce.$$.fragment),Ye=s(),F=i("div"),f(me.$$.fragment),vt=s(),ze=i("p"),ze.textContent=Yt,yt=s(),qe=i("p"),qe.innerHTML=Kt,wt=s(),je=i("p"),je.innerHTML=eo,Ft=s(),q=i("div"),f(pe.$$.fragment),$t=s(),Ie=i("p"),Ie.innerHTML=to,xt=s(),f(R.$$.fragment),Ct=s(),f(G.$$.fragment),Ke=s(),f(he.$$.fragment),et=s(),$=i("div"),f(ue.$$.fragment),St=s(),Ue=i("p"),Ue.textContent=oo,zt=s(),Le=i("p"),Le.innerHTML=no,qt=s(),Ee=i("p"),Ee.innerHTML=so,jt=s(),j=i("div"),f(fe.$$.fragment),It=s(),De=i("p"),De.innerHTML=ao,Ut=s(),f(H.$$.fragment),Lt=s(),f(Z.$$.fragment),tt=s(),Ve=i("p"),this.h()},l(e){const d=po("svelte-u9bgzb",document.head);o=l(d,"META",{name:!0,content:!0}),d.forEach(r),v=a(e),p=l(e,"P",{}),I(p).forEach(r),c=a(e),_(u.$$.fragment,e),t=a(e),_(M.$$.fragment,e),Je=a(e),Q=l(e,"P",{"data-svelte-h":!0}),h(Q)!=="svelte-ppl3f1"&&(Q.innerHTML=Et),Ne=a(e),X=l(e,"P",{"data-svelte-h":!0}),h(X)!=="svelte-wu27l3"&&(X.textContent=Dt),Pe=a(e),Y=l(e,"P",{"data-svelte-h":!0}),h(Y)!=="svelte-75g4jk"&&(Y.innerHTML=Wt),Re=a(e),K=l(e,"P",{"data-svelte-h":!0}),h(K)!=="svelte-1uemjgo"&&(K.innerHTML=Vt),Ge=a(e),_(ee.$$.fragment,e),He=a(e),te=l(e,"UL",{"data-svelte-h":!0}),h(te)!=="svelte-f1493n"&&(te.innerHTML=At),Ze=a(e),_(oe.$$.fragment,e),Oe=a(e),S=l(e,"DIV",{class:!0});var L=I(S);_(ne.$$.fragment,L),at=a(L),Te=l(L,"P",{"data-svelte-h":!0}),h(Te)!=="svelte-1ist0jv"&&(Te.innerHTML=Jt),rt=a(L),be=l(L,"P",{"data-svelte-h":!0}),h(be)!=="svelte-o55m63"&&(be.innerHTML=Nt),dt=a(L),_(J.$$.fragment,L),L.forEach(r),Be=a(e),_(se.$$.fragment,e),Qe=a(e),y=l(e,"DIV",{class:!0});var w=I(y);_(ae.$$.fragment,w),it=a(w),ke=l(w,"P",{"data-svelte-h":!0}),h(ke)!=="svelte-5bbjru"&&(ke.textContent=Pt),lt=a(w),Me=l(w,"UL",{"data-svelte-h":!0}),h(Me)!=="svelte-stmybw"&&(Me.innerHTML=Rt),ct=a(w),ve=l(w,"P",{"data-svelte-h":!0}),h(ve)!=="svelte-1c3t5ty"&&(ve.innerHTML=Gt),mt=a(w),E=l(w,"DIV",{class:!0});var A=I(E);_(re.$$.fragment,A),pt=a(A),ye=l(A,"P",{"data-svelte-h":!0}),h(ye)!=="svelte-ym5sov"&&(ye.textContent=Ht),ht=a(A),we=l(A,"UL",{"data-svelte-h":!0}),h(we)!=="svelte-1w73b42"&&(we.innerHTML=Zt),A.forEach(r),ut=a(w),N=l(w,"DIV",{class:!0});var _e=I(N);_(de.$$.fragment,_e),ft=a(_e),Fe=l(_e,"P",{"data-svelte-h":!0}),h(Fe)!=="svelte-1f4f5kp"&&(Fe.innerHTML=Ot),_e.forEach(r),_t=a(w),C=l(w,"DIV",{class:!0});var z=I(C);_(ie.$$.fragment,z),gt=a(z),$e=l(z,"P",{"data-svelte-h":!0}),h($e)!=="svelte-13qcmkg"&&($e.textContent=Bt),Tt=a(z),_(P.$$.fragment,z),bt=a(z),xe=l(z,"P",{"data-svelte-h":!0}),h(xe)!=="svelte-owoxgn"&&(xe.innerHTML=Qt),kt=a(z),Ce=l(z,"P",{"data-svelte-h":!0}),h(Ce)!=="svelte-1fvbzf1"&&(Ce.textContent=Xt),z.forEach(r),Mt=a(w),Se=l(w,"DIV",{class:!0});var Ae=I(Se);_(le.$$.fragment,Ae),Ae.forEach(r),w.forEach(r),Xe=a(e),_(ce.$$.fragment,e),Ye=a(e),F=l(e,"DIV",{class:!0});var D=I(F);_(me.$$.fragment,D),vt=a(D),ze=l(D,"P",{"data-svelte-h":!0}),h(ze)!=="svelte-42ql7q"&&(ze.textContent=Yt),yt=a(D),qe=l(D,"P",{"data-svelte-h":!0}),h(qe)!=="svelte-6pahdo"&&(qe.innerHTML=Kt),wt=a(D),je=l(D,"P",{"data-svelte-h":!0}),h(je)!=="svelte-hswkmf"&&(je.innerHTML=eo),Ft=a(D),q=l(D,"DIV",{class:!0});var O=I(q);_(pe.$$.fragment,O),$t=a(O),Ie=l(O,"P",{"data-svelte-h":!0}),h(Ie)!=="svelte-115gdrt"&&(Ie.innerHTML=to),xt=a(O),_(R.$$.fragment,O),Ct=a(O),_(G.$$.fragment,O),O.forEach(r),D.forEach(r),Ke=a(e),_(he.$$.fragment,e),et=a(e),$=l(e,"DIV",{class:!0});var W=I($);_(ue.$$.fragment,W),St=a(W),Ue=l(W,"P",{"data-svelte-h":!0}),h(Ue)!=="svelte-1449fju"&&(Ue.textContent=oo),zt=a(W),Le=l(W,"P",{"data-svelte-h":!0}),h(Le)!=="svelte-6pahdo"&&(Le.innerHTML=no),qt=a(W),Ee=l(W,"P",{"data-svelte-h":!0}),h(Ee)!=="svelte-hswkmf"&&(Ee.innerHTML=so),jt=a(W),j=l(W,"DIV",{class:!0});var B=I(j);_(fe.$$.fragment,B),It=a(B),De=l(B,"P",{"data-svelte-h":!0}),h(De)!=="svelte-161a1sn"&&(De.innerHTML=ao),Ut=a(B),_(H.$$.fragment,B),Lt=a(B),_(Z.$$.fragment,B),B.forEach(r),W.forEach(r),tt=a(e),Ve=l(e,"P",{}),I(Ve).forEach(r),this.h()},h(){U(o,"name","hf:doc:metadata"),U(o,"content",ko),U(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,d){n(document.head,o),m(e,v,d),m(e,p,d),m(e,c,d),g(u,e,d),m(e,t,d),g(M,e,d),m(e,Je,d),m(e,Q,d),m(e,Ne,d),m(e,X,d),m(e,Pe,d),m(e,Y,d),m(e,Re,d),m(e,K,d),m(e,Ge,d),g(ee,e,d),m(e,He,d),m(e,te,d),m(e,Ze,d),g(oe,e,d),m(e,Oe,d),m(e,S,d),g(ne,S,null),n(S,at),n(S,Te),n(S,rt),n(S,be),n(S,dt),g(J,S,null),m(e,Be,d),g(se,e,d),m(e,Qe,d),m(e,y,d),g(ae,y,null),n(y,it),n(y,ke),n(y,lt),n(y,Me),n(y,ct),n(y,ve),n(y,mt),n(y,E),g(re,E,null),n(E,pt),n(E,ye),n(E,ht),n(E,we),n(y,ut),n(y,N),g(de,N,null),n(N,ft),n(N,Fe),n(y,_t),n(y,C),g(ie,C,null),n(C,gt),n(C,$e),n(C,Tt),g(P,C,null),n(C,bt),n(C,xe),n(C,kt),n(C,Ce),n(y,Mt),n(y,Se),g(le,Se,null),m(e,Xe,d),g(ce,e,d),m(e,Ye,d),m(e,F,d),g(me,F,null),n(F,vt),n(F,ze),n(F,yt),n(F,qe),n(F,wt),n(F,je),n(F,Ft),n(F,q),g(pe,q,null),n(q,$t),n(q,Ie),n(q,xt),g(R,q,null),n(q,Ct),g(G,q,null),m(e,Ke,d),g(he,e,d),m(e,et,d),m(e,$,d),g(ue,$,null),n($,St),n($,Ue),n($,zt),n($,Le),n($,qt),n($,Ee),n($,jt),n($,j),g(fe,j,null),n(j,It),n(j,De),n(j,Ut),g(H,j,null),n(j,Lt),g(Z,j,null),m(e,tt,d),m(e,Ve,d),ot=!0},p(e,[d]){const L={};d&2&&(L.$$scope={dirty:d,ctx:e}),J.$set(L);const w={};d&2&&(w.$$scope={dirty:d,ctx:e}),P.$set(w);const A={};d&2&&(A.$$scope={dirty:d,ctx:e}),R.$set(A);const _e={};d&2&&(_e.$$scope={dirty:d,ctx:e}),G.$set(_e);const z={};d&2&&(z.$$scope={dirty:d,ctx:e}),H.$set(z);const Ae={};d&2&&(Ae.$$scope={dirty:d,ctx:e}),Z.$set(Ae)},i(e){ot||(T(u.$$.fragment,e),T(M.$$.fragment,e),T(ee.$$.fragment,e),T(oe.$$.fragment,e),T(ne.$$.fragment,e),T(J.$$.fragment,e),T(se.$$.fragment,e),T(ae.$$.fragment,e),T(re.$$.fragment,e),T(de.$$.fragment,e),T(ie.$$.fragment,e),T(P.$$.fragment,e),T(le.$$.fragment,e),T(ce.$$.fragment,e),T(me.$$.fragment,e),T(pe.$$.fragment,e),T(R.$$.fragment,e),T(G.$$.fragment,e),T(he.$$.fragment,e),T(ue.$$.fragment,e),T(fe.$$.fragment,e),T(H.$$.fragment,e),T(Z.$$.fragment,e),ot=!0)},o(e){b(u.$$.fragment,e),b(M.$$.fragment,e),b(ee.$$.fragment,e),b(oe.$$.fragment,e),b(ne.$$.fragment,e),b(J.$$.fragment,e),b(se.$$.fragment,e),b(ae.$$.fragment,e),b(re.$$.fragment,e),b(de.$$.fragment,e),b(ie.$$.fragment,e),b(P.$$.fragment,e),b(le.$$.fragment,e),b(ce.$$.fragment,e),b(me.$$.fragment,e),b(pe.$$.fragment,e),b(R.$$.fragment,e),b(G.$$.fragment,e),b(he.$$.fragment,e),b(ue.$$.fragment,e),b(fe.$$.fragment,e),b(H.$$.fragment,e),b(Z.$$.fragment,e),ot=!1},d(e){e&&(r(v),r(p),r(c),r(t),r(Je),r(Q),r(Ne),r(X),r(Pe),r(Y),r(Re),r(K),r(Ge),r(He),r(te),r(Ze),r(Oe),r(S),r(Be),r(Qe),r(y),r(Xe),r(Ye),r(F),r(Ke),r(et),r($),r(tt),r(Ve)),r(o),k(u,e),k(M,e),k(ee,e),k(oe,e),k(ne),k(J),k(se,e),k(ae),k(re),k(de),k(ie),k(P),k(le),k(ce,e),k(me),k(pe),k(R),k(G),k(he,e),k(ue),k(fe),k(H),k(Z)}}}const ko='{"title":"FSMT","local":"fsmt","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Implementation Notes","local":"implementation-notes","sections":[],"depth":2},{"title":"FSMTConfig","local":"transformers.FSMTConfig","sections":[],"depth":2},{"title":"FSMTTokenizer","local":"transformers.FSMTTokenizer","sections":[],"depth":2},{"title":"FSMTModel","local":"transformers.FSMTModel","sections":[],"depth":2},{"title":"FSMTForConditionalGeneration","local":"transformers.FSMTForConditionalGeneration","sections":[],"depth":2}],"depth":1}';function Mo(x){return lo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class So extends co{constructor(o){super(),mo(this,o,Mo,bo,io,{})}}export{So as component};
