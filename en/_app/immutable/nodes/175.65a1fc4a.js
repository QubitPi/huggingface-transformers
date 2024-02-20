import{s as bo,o as yo,n as Se}from"../chunks/scheduler.9bc65507.js";import{S as ko,i as vo,g as l,s,r as u,A as wo,h as c,f as o,c as a,j as q,u as f,x as h,k as Z,y as d,a as i,v as _,d as g,t as M,w as T}from"../chunks/index.707bf1b6.js";import{T as To}from"../chunks/Tip.c2ecdbf4.js";import{D as G}from"../chunks/Docstring.17db21ae.js";import{C as He}from"../chunks/CodeBlock.54a9f38d.js";import{E as gt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as P}from"../chunks/Heading.342b1fa6.js";function $o($){let r,k="Example:",p,m,b;return m=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME0yTTEwMENvbmZpZyUyQyUyME0yTTEwME1vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyME0yTTEwMCUyMGZhY2Vib29rJTJGbTJtMTAwXzQxOE0lMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwTTJNMTAwQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGZhY2Vib29rJTJGbTJtMTAwXzQxOE0lMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyME0yTTEwME1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Config, M2M100Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a M2M100 facebook/m2m100_418M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = M2M100Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the facebook/m2m100_418M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){r=l("p"),r.textContent=k,p=s(),u(m.$$.fragment)},l(n){r=c(n,"P",{"data-svelte-h":!0}),h(r)!=="svelte-11lpom8"&&(r.textContent=k),p=a(n),f(m.$$.fragment,n)},m(n,y){i(n,r,y),i(n,p,y),_(m,n,y),b=!0},p:Se,i(n){b||(g(m.$$.fragment,n),b=!0)},o(n){M(m.$$.fragment,n),b=!1},d(n){n&&(o(r),o(p)),T(m,n)}}}function zo($){let r,k="Examples:",p,m,b;return m=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME0yTTEwMEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUyQyUyME0yTTEwMFRva2VuaXplciUwQSUwQW1vZGVsJTIwJTNEJTIwTTJNMTAwRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm0ybTEwMF80MThNJTIyKSUwQXRva2VuaXplciUyMCUzRCUyME0yTTEwMFRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtMm0xMDBfNDE4TSUyMiUyQyUyMHNyY19sYW5nJTNEJTIyZW4lMjIlMkMlMjB0Z3RfbGFuZyUzRCUyMnJvJTIyKSUwQXNyY190ZXh0JTIwJTNEJTIwJTIyJTIwVU4lMjBDaGllZiUyMFNheXMlMjBUaGVyZSUyMElzJTIwTm8lMjBNaWxpdGFyeSUyMFNvbHV0aW9uJTIwaW4lMjBTeXJpYSUyMiUwQXRndF90ZXh0JTIwJTNEJTIwJTIyJUM1JTlFZWZ1bCUyME9OVSUyMGRlY2xhciVDNCU4MyUyMGMlQzQlODMlMjBudSUyMGV4aXN0JUM0JTgzJTIwbyUyMHNvbHUlQzUlQTNpZSUyMG1pbGl0YXIlQzQlODMlMjAlQzMlQUVuJTIwU2lyaWElMjIlMEFtb2RlbF9pbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoc3JjX3RleHQlMkMlMjB0ZXh0X3RhcmdldCUzRHRndF90ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiptb2RlbF9pbnB1dHMpJTIwJTIwJTIzJTIwc2hvdWxkJTIwd29yaw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100ForConditionalGeneration, M2M100Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;Şeful ONU declară că nu există o soluţie militară în Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**model_inputs)  <span class="hljs-comment"># should work</span>`,wrap:!1}}),{c(){r=l("p"),r.textContent=k,p=s(),u(m.$$.fragment)},l(n){r=c(n,"P",{"data-svelte-h":!0}),h(r)!=="svelte-kvfsh7"&&(r.textContent=k),p=a(n),f(m.$$.fragment,n)},m(n,y){i(n,r,y),i(n,p,y),_(m,n,y),b=!0},p:Se,i(n){b||(g(m.$$.fragment,n),b=!0)},o(n){M(m.$$.fragment,n),b=!1},d(n){n&&(o(r),o(p)),T(m,n)}}}function xo($){let r,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){r=l("p"),r.innerHTML=k},l(p){r=c(p,"P",{"data-svelte-h":!0}),h(r)!=="svelte-fincs2"&&(r.innerHTML=k)},m(p,m){i(p,r,m)},p:Se,d(p){p&&o(r)}}}function Jo($){let r,k="Example:",p,m,b;return m=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNMk0xMDBNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtMm0xMDBfNDE4TSUyMiklMEFtb2RlbCUyMCUzRCUyME0yTTEwME1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm0ybTEwMF80MThNJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, M2M100Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){r=l("p"),r.textContent=k,p=s(),u(m.$$.fragment)},l(n){r=c(n,"P",{"data-svelte-h":!0}),h(r)!=="svelte-11lpom8"&&(r.textContent=k),p=a(n),f(m.$$.fragment,n)},m(n,y){i(n,r,y),i(n,p,y),_(m,n,y),b=!0},p:Se,i(n){b||(g(m.$$.fragment,n),b=!0)},o(n){M(m.$$.fragment,n),b=!1},d(n){n&&(o(r),o(p)),T(m,n)}}}function Co($){let r,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){r=l("p"),r.innerHTML=k},l(p){r=c(p,"P",{"data-svelte-h":!0}),h(r)!=="svelte-fincs2"&&(r.innerHTML=k)},m(p,m){i(p,r,m)},p:Se,d(p){p&&o(r)}}}function Uo($){let r,k="Translation example:",p,m,b;return m=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNMk0xMDBGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEFtb2RlbCUyMCUzRCUyME0yTTEwMEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtMm0xMDBfNDE4TSUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm0ybTEwMF80MThNJTIyKSUwQSUwQXRleHRfdG9fdHJhbnNsYXRlJTIwJTNEJTIwJTIyTGlmZSUyMGlzJTIwbGlrZSUyMGElMjBib3glMjBvZiUyMGNob2NvbGF0ZXMlMjIlMEFtb2RlbF9pbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIodGV4dF90b190cmFuc2xhdGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQSUyMyUyMHRyYW5zbGF0ZSUyMHRvJTIwRnJlbmNoJTBBZ2VuX3Rva2VucyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCoqbW9kZWxfaW5wdXRzJTJDJTIwZm9yY2VkX2Jvc190b2tlbl9pZCUzRHRva2VuaXplci5nZXRfbGFuZ19pZCglMjJmciUyMikpJTBBcHJpbnQodG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW5fdG9rZW5zJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, M2M100ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text_to_translate = <span class="hljs-string">&quot;Life is like a box of chocolates&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(text_to_translate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`,wrap:!1}}),{c(){r=l("p"),r.textContent=k,p=s(),u(m.$$.fragment)},l(n){r=c(n,"P",{"data-svelte-h":!0}),h(r)!=="svelte-g2jatv"&&(r.textContent=k),p=a(n),f(m.$$.fragment,n)},m(n,y){i(n,r,y),i(n,p,y),_(m,n,y),b=!0},p:Se,i(n){b||(g(m.$$.fragment,n),b=!0)},o(n){M(m.$$.fragment,n),b=!1},d(n){n&&(o(r),o(p)),T(m,n)}}}function jo($){let r,k,p,m,b,n,y,Ve,D,Bt=`The M2M100 model was proposed in <a href="https://arxiv.org/abs/2010.11125" rel="nofollow">Beyond English-Centric Multilingual Machine Translation</a> by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`,Oe,Y,Vt="The abstract from the paper is the following:",Ae,K,Ot=`<em>Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.</em>`,Pe,ee,At='This model was contributed by <a href="https://huggingface.co/valhalla" rel="nofollow">valhalla</a>.',De,te,Ye,oe,Pt=`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is <code>[lang_code] X [eos]</code>, where <code>lang_code</code> is source language
id for source text and target language id for target text, with <code>X</code> being the source or target text.`,Ke,ne,Dt=`The <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a> depends on <code>sentencepiece</code> so be sure to install it before running the
examples. To install <code>sentencepiece</code> run <code>pip install sentencepiece</code>.`,et,se,Yt="<strong>Supervised Training</strong>",tt,ae,ot,re,Kt="<strong>Generation</strong>",nt,ie,eo=`M2M100 uses the <code>eos_token_id</code> as the <code>decoder_start_token_id</code> for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
<em>forced_bos_token_id</em> parameter to the <em>generate</em> method. The following example shows how to translate between
Hindi to French and Chinese to English using the <em>facebook/m2m100_418M</em> checkpoint.`,st,de,at,le,rt,ce,to='<li><a href="../tasks/translation">Translation task guide</a></li> <li><a href="../tasks/summarization">Summarization task guide</a></li>',it,me,dt,z,pe,Mt,ze,oo=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a>. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
<a href="https://huggingface.co/facebook/m2m100_418M" rel="nofollow">facebook/m2m100_418M</a> architecture.`,Tt,xe,no=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,bt,W,lt,he,ct,v,ue,yt,Je,so='Construct an M2M100 tokenizer. Based on <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.',kt,Ce,ao=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,vt,E,wt,C,fe,$t,Ue,ro=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where <code>X</code> represents the sequence:`,zt,je,io="<li><code>input_ids</code> (for encoder) <code>X [eos, src_lang_code]</code></li> <li><code>decoder_input_ids</code>: (for decoder) <code>X [eos, tgt_lang_code]</code></li>",xt,qe,lo=`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`,Jt,N,_e,Ct,Ze,co=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,Ut,F,ge,jt,Re,mo=`Create the token type IDs corresponding to the sequences passed. <a href="../glossary#token-type-ids">What are token type
IDs?</a>`,qt,Ie,po="Should be overridden in a subclass if the model has a special way of building those.",Zt,Fe,Me,mt,Te,pt,x,be,Rt,Ge,ho=`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,It,Qe,uo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ft,U,ye,Gt,We,fo='The <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a> forward method, overrides the <code>__call__</code> special method.',Qt,X,Wt,H,ht,ke,ut,J,ve,Et,Ee,_o=`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Nt,Ne,go=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Xt,j,we,Ht,Xe,Mo='The <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100ForConditionalGeneration">M2M100ForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',St,S,Lt,L,ft,Le,_t;return b=new P({props:{title:"M2M100",local:"m2m100",headingTag:"h1"}}),y=new P({props:{title:"Overview",local:"overview",headingTag:"h2"}}),te=new P({props:{title:"Usage tips and examples",local:"usage-tips-and-examples",headingTag:"h2"}}),ae=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME0yTTEwMENvbmZpZyUyQyUyME0yTTEwMEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUyQyUyME0yTTEwMFRva2VuaXplciUwQSUwQW1vZGVsJTIwJTNEJTIwTTJNMTAwRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm0ybTEwMF80MThNJTIyKSUwQXRva2VuaXplciUyMCUzRCUyME0yTTEwMFRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtMm0xMDBfNDE4TSUyMiUyQyUyMHNyY19sYW5nJTNEJTIyZW4lMjIlMkMlMjB0Z3RfbGFuZyUzRCUyMmZyJTIyKSUwQSUwQXNyY190ZXh0JTIwJTNEJTIwJTIyTGlmZSUyMGlzJTIwbGlrZSUyMGElMjBib3glMjBvZiUyMGNob2NvbGF0ZXMuJTIyJTBBdGd0X3RleHQlMjAlM0QlMjAlMjJMYSUyMHZpZSUyMGVzdCUyMGNvbW1lJTIwdW5lJTIwYm8lQzMlQUV0ZSUyMGRlJTIwY2hvY29sYXQuJTIyJTBBJTBBbW9kZWxfaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHNyY190ZXh0JTJDJTIwdGV4dF90YXJnZXQlM0R0Z3RfdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqbW9kZWxfaW5wdXRzKS5sb3NzJTIwJTIwJTIzJTIwZm9yd2FyZCUyMHBhc3M=",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;fr&quot;</span>)

src_text = <span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>
tgt_text = <span class="hljs-string">&quot;La vie est comme une boîte de chocolat.&quot;</span>

model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(**model_inputs).loss  <span class="hljs-comment"># forward pass</span>`,wrap:!1}}),de=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME0yTTEwMEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUyQyUyME0yTTEwMFRva2VuaXplciUwQSUwQWhpX3RleHQlMjAlM0QlMjAlMjIlRTAlQTQlOUMlRTAlQTUlODAlRTAlQTQlQjUlRTAlQTQlQTglMjAlRTAlQTQlOEYlRTAlQTQlOTUlMjAlRTAlQTQlOUElRTAlQTUlODklRTAlQTQlOTUlRTAlQTQlQjIlRTAlQTUlODclRTAlQTQlOUYlMjAlRTAlQTQlQUMlRTAlQTUlODklRTAlQTQlOTUlRTAlQTUlOEQlRTAlQTQlQjglMjAlRTAlQTQlOTUlRTAlQTUlODAlMjAlRTAlQTQlQTQlRTAlQTQlQjAlRTAlQTQlQjklMjAlRTAlQTQlQjklRTAlQTUlODglRTAlQTUlQTQlMjIlMEFjaGluZXNlX3RleHQlMjAlM0QlMjAlMjIlRTclOTQlOUYlRTYlQjQlQkIlRTUlQjAlQjElRTUlODMlOEYlRTQlQjglODAlRTclOUIlOTIlRTUlQjclQTclRTUlODUlOEIlRTUlOEElOUIlRTMlODAlODIlMjIlMEElMEFtb2RlbCUyMCUzRCUyME0yTTEwMEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtMm0xMDBfNDE4TSUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBNMk0xMDBUb2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGbTJtMTAwXzQxOE0lMjIpJTBBJTBBJTIzJTIwdHJhbnNsYXRlJTIwSGluZGklMjB0byUyMEZyZW5jaCUwQXRva2VuaXplci5zcmNfbGFuZyUyMCUzRCUyMCUyMmhpJTIyJTBBZW5jb2RlZF9oaSUyMCUzRCUyMHRva2VuaXplcihoaV90ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFnZW5lcmF0ZWRfdG9rZW5zJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoKiplbmNvZGVkX2hpJTJDJTIwZm9yY2VkX2Jvc190b2tlbl9pZCUzRHRva2VuaXplci5nZXRfbGFuZ19pZCglMjJmciUyMikpJTBBdG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfdG9rZW5zJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTBBJTBBJTIzJTIwdHJhbnNsYXRlJTIwQ2hpbmVzZSUyMHRvJTIwRW5nbGlzaCUwQXRva2VuaXplci5zcmNfbGFuZyUyMCUzRCUyMCUyMnpoJTIyJTBBZW5jb2RlZF96aCUyMCUzRCUyMHRva2VuaXplcihjaGluZXNlX3RleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQWdlbmVyYXRlZF90b2tlbnMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSgqKmVuY29kZWRfemglMkMlMjBmb3JjZWRfYm9zX3Rva2VuX2lkJTNEdG9rZW5pemVyLmdldF9sYW5nX2lkKCUyMmVuJTIyKSklMEF0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZF90b2tlbnMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100ForConditionalGeneration, M2M100Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>hi_text = <span class="hljs-string">&quot;जीवन एक चॉकलेट बॉक्स की तरह है।&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>chinese_text = <span class="hljs-string">&quot;生活就像一盒巧克力。&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate Hindi to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.src_lang = <span class="hljs-string">&quot;hi&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_hi = tokenizer(hi_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;La vie est comme une boîte de chocolat.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate Chinese to English</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.src_lang = <span class="hljs-string">&quot;zh&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_zh = tokenizer(chinese_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;en&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Life is like a box of chocolate.&quot;</span>`,wrap:!1}}),le=new P({props:{title:"Resources",local:"resources",headingTag:"h2"}}),me=new P({props:{title:"M2M100Config",local:"transformers.M2M100Config",headingTag:"h2"}}),pe=new G({props:{name:"class transformers.M2M100Config",anchor:"transformers.M2M100Config",parameters:[{name:"vocab_size",val:" = 128112"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.05"},{name:"decoder_layerdrop",val:" = 0.05"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.M2M100Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the M2M100 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a> or`,name:"vocab_size"},{anchor:"transformers.M2M100Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.M2M100Config.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.M2M100Config.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.M2M100Config.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.M2M100Config.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.M2M100Config.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.M2M100Config.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.M2M100Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.M2M100Config.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.M2M100Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.M2M100Config.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.M2M100Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.M2M100Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.M2M100Config.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.M2M100Config.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.M2M100Config.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.M2M100Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/m2m_100/configuration_m2m_100.py#L34"}}),W=new gt({props:{anchor:"transformers.M2M100Config.example",$$slots:{default:[$o]},$$scope:{ctx:$}}}),he=new P({props:{title:"M2M100Tokenizer",local:"transformers.M2M100Tokenizer",headingTag:"h2"}}),ue=new G({props:{name:"class transformers.M2M100Tokenizer",anchor:"transformers.M2M100Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"language_codes",val:" = 'm2m100'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"num_madeup_words",val:" = 8"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.M2M100Tokenizer.spm_file",description:`<strong>spm_file</strong> (<code>str</code>) &#x2014;
Path to <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary.`,name:"spm_file"},{anchor:"transformers.M2M100Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.M2M100Tokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.M2M100Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.M2M100Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.M2M100Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.M2M100Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.M2M100Tokenizer.language_codes",description:`<strong>language_codes</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;m2m100&quot;</code>) &#x2014;
What language codes to use. Should be one of <code>&quot;m2m100&quot;</code> or <code>&quot;wmt21&quot;</code>.`,name:"language_codes"},{anchor:"transformers.M2M100Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L64"}}),E=new gt({props:{anchor:"transformers.M2M100Tokenizer.example",$$slots:{default:[zo]},$$scope:{ctx:$}}}),fe=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L271",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),_e=new G({props:{name:"get_special_tokens_mask",anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L241",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ge=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3328",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token type ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Me=new G({props:{name:"save_vocabulary",anchor:"transformers.M2M100Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L312"}}),Te=new P({props:{title:"M2M100Model",local:"transformers.M2M100Model",headingTag:"h2"}}),be=new G({props:{name:"class transformers.M2M100Model",anchor:"transformers.M2M100Model",parameters:[{name:"config",val:": M2M100Config"}],parametersDescription:[{anchor:"transformers.M2M100Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1092"}}),ye=new G({props:{name:"forward",anchor:"transformers.M2M100Model.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.M2M100Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>M2M100 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.M2M100Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.M2M100Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.M2M100Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.M2M100Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.M2M100Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.M2M100Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.M2M100Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.M2M100Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.M2M100Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.M2M100Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.M2M100Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.M2M100Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1130",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config"
>M2M100Config</a>) and inputs.</p>
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
`}}),X=new To({props:{$$slots:{default:[xo]},$$scope:{ctx:$}}}),H=new gt({props:{anchor:"transformers.M2M100Model.forward.example",$$slots:{default:[Jo]},$$scope:{ctx:$}}}),ke=new P({props:{title:"M2M100ForConditionalGeneration",local:"transformers.M2M100ForConditionalGeneration",headingTag:"h2"}}),ve=new G({props:{name:"class transformers.M2M100ForConditionalGeneration",anchor:"transformers.M2M100ForConditionalGeneration",parameters:[{name:"config",val:": M2M100Config"}],parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1210"}}),we=new G({props:{name:"forward",anchor:"transformers.M2M100ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>M2M100 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1237",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config"
>M2M100Config</a>) and inputs.</p>
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
`}}),S=new To({props:{$$slots:{default:[Co]},$$scope:{ctx:$}}}),L=new gt({props:{anchor:"transformers.M2M100ForConditionalGeneration.forward.example",$$slots:{default:[Uo]},$$scope:{ctx:$}}}),{c(){r=l("meta"),k=s(),p=l("p"),m=s(),u(b.$$.fragment),n=s(),u(y.$$.fragment),Ve=s(),D=l("p"),D.innerHTML=Bt,Oe=s(),Y=l("p"),Y.textContent=Vt,Ae=s(),K=l("p"),K.innerHTML=Ot,Pe=s(),ee=l("p"),ee.innerHTML=At,De=s(),u(te.$$.fragment),Ye=s(),oe=l("p"),oe.innerHTML=Pt,Ke=s(),ne=l("p"),ne.innerHTML=Dt,et=s(),se=l("p"),se.innerHTML=Yt,tt=s(),u(ae.$$.fragment),ot=s(),re=l("p"),re.innerHTML=Kt,nt=s(),ie=l("p"),ie.innerHTML=eo,st=s(),u(de.$$.fragment),at=s(),u(le.$$.fragment),rt=s(),ce=l("ul"),ce.innerHTML=to,it=s(),u(me.$$.fragment),dt=s(),z=l("div"),u(pe.$$.fragment),Mt=s(),ze=l("p"),ze.innerHTML=oo,Tt=s(),xe=l("p"),xe.innerHTML=no,bt=s(),u(W.$$.fragment),lt=s(),u(he.$$.fragment),ct=s(),v=l("div"),u(ue.$$.fragment),yt=s(),Je=l("p"),Je.innerHTML=so,kt=s(),Ce=l("p"),Ce.innerHTML=ao,vt=s(),u(E.$$.fragment),wt=s(),C=l("div"),u(fe.$$.fragment),$t=s(),Ue=l("p"),Ue.innerHTML=ro,zt=s(),je=l("ul"),je.innerHTML=io,xt=s(),qe=l("p"),qe.textContent=lo,Jt=s(),N=l("div"),u(_e.$$.fragment),Ct=s(),Ze=l("p"),Ze.innerHTML=co,Ut=s(),F=l("div"),u(ge.$$.fragment),jt=s(),Re=l("p"),Re.innerHTML=mo,qt=s(),Ie=l("p"),Ie.textContent=po,Zt=s(),Fe=l("div"),u(Me.$$.fragment),mt=s(),u(Te.$$.fragment),pt=s(),x=l("div"),u(be.$$.fragment),Rt=s(),Ge=l("p"),Ge.innerHTML=ho,It=s(),Qe=l("p"),Qe.innerHTML=uo,Ft=s(),U=l("div"),u(ye.$$.fragment),Gt=s(),We=l("p"),We.innerHTML=fo,Qt=s(),u(X.$$.fragment),Wt=s(),u(H.$$.fragment),ht=s(),u(ke.$$.fragment),ut=s(),J=l("div"),u(ve.$$.fragment),Et=s(),Ee=l("p"),Ee.innerHTML=_o,Nt=s(),Ne=l("p"),Ne.innerHTML=go,Xt=s(),j=l("div"),u(we.$$.fragment),Ht=s(),Xe=l("p"),Xe.innerHTML=Mo,St=s(),u(S.$$.fragment),Lt=s(),u(L.$$.fragment),ft=s(),Le=l("p"),this.h()},l(e){const t=wo("svelte-u9bgzb",document.head);r=c(t,"META",{name:!0,content:!0}),t.forEach(o),k=a(e),p=c(e,"P",{}),q(p).forEach(o),m=a(e),f(b.$$.fragment,e),n=a(e),f(y.$$.fragment,e),Ve=a(e),D=c(e,"P",{"data-svelte-h":!0}),h(D)!=="svelte-7r6jqb"&&(D.innerHTML=Bt),Oe=a(e),Y=c(e,"P",{"data-svelte-h":!0}),h(Y)!=="svelte-vfdo9a"&&(Y.textContent=Vt),Ae=a(e),K=c(e,"P",{"data-svelte-h":!0}),h(K)!=="svelte-1f24upw"&&(K.innerHTML=Ot),Pe=a(e),ee=c(e,"P",{"data-svelte-h":!0}),h(ee)!=="svelte-z2se1l"&&(ee.innerHTML=At),De=a(e),f(te.$$.fragment,e),Ye=a(e),oe=c(e,"P",{"data-svelte-h":!0}),h(oe)!=="svelte-1qdnyi5"&&(oe.innerHTML=Pt),Ke=a(e),ne=c(e,"P",{"data-svelte-h":!0}),h(ne)!=="svelte-1232ef8"&&(ne.innerHTML=Dt),et=a(e),se=c(e,"P",{"data-svelte-h":!0}),h(se)!=="svelte-1x4x2vx"&&(se.innerHTML=Yt),tt=a(e),f(ae.$$.fragment,e),ot=a(e),re=c(e,"P",{"data-svelte-h":!0}),h(re)!=="svelte-1ya12af"&&(re.innerHTML=Kt),nt=a(e),ie=c(e,"P",{"data-svelte-h":!0}),h(ie)!=="svelte-fuvkzx"&&(ie.innerHTML=eo),st=a(e),f(de.$$.fragment,e),at=a(e),f(le.$$.fragment,e),rt=a(e),ce=c(e,"UL",{"data-svelte-h":!0}),h(ce)!=="svelte-6ej6p2"&&(ce.innerHTML=to),it=a(e),f(me.$$.fragment,e),dt=a(e),z=c(e,"DIV",{class:!0});var R=q(z);f(pe.$$.fragment,R),Mt=a(R),ze=c(R,"P",{"data-svelte-h":!0}),h(ze)!=="svelte-pja7zz"&&(ze.innerHTML=oo),Tt=a(R),xe=c(R,"P",{"data-svelte-h":!0}),h(xe)!=="svelte-o55m63"&&(xe.innerHTML=no),bt=a(R),f(W.$$.fragment,R),R.forEach(o),lt=a(e),f(he.$$.fragment,e),ct=a(e),v=c(e,"DIV",{class:!0});var w=q(v);f(ue.$$.fragment,w),yt=a(w),Je=c(w,"P",{"data-svelte-h":!0}),h(Je)!=="svelte-kzv33x"&&(Je.innerHTML=so),kt=a(w),Ce=c(w,"P",{"data-svelte-h":!0}),h(Ce)!=="svelte-1c3t5ty"&&(Ce.innerHTML=ao),vt=a(w),f(E.$$.fragment,w),wt=a(w),C=c(w,"DIV",{class:!0});var I=q(C);f(fe.$$.fragment,I),$t=a(I),Ue=c(I,"P",{"data-svelte-h":!0}),h(Ue)!=="svelte-1homupa"&&(Ue.innerHTML=ro),zt=a(I),je=c(I,"UL",{"data-svelte-h":!0}),h(je)!=="svelte-mlrsks"&&(je.innerHTML=io),xt=a(I),qe=c(I,"P",{"data-svelte-h":!0}),h(qe)!=="svelte-46aam0"&&(qe.textContent=lo),I.forEach(o),Jt=a(w),N=c(w,"DIV",{class:!0});var $e=q(N);f(_e.$$.fragment,$e),Ct=a($e),Ze=c($e,"P",{"data-svelte-h":!0}),h(Ze)!=="svelte-1f4f5kp"&&(Ze.innerHTML=co),$e.forEach(o),Ut=a(w),F=c(w,"DIV",{class:!0});var Q=q(F);f(ge.$$.fragment,Q),jt=a(Q),Re=c(Q,"P",{"data-svelte-h":!0}),h(Re)!=="svelte-zj1vf1"&&(Re.innerHTML=mo),qt=a(Q),Ie=c(Q,"P",{"data-svelte-h":!0}),h(Ie)!=="svelte-9vptpw"&&(Ie.textContent=po),Q.forEach(o),Zt=a(w),Fe=c(w,"DIV",{class:!0});var Be=q(Fe);f(Me.$$.fragment,Be),Be.forEach(o),w.forEach(o),mt=a(e),f(Te.$$.fragment,e),pt=a(e),x=c(e,"DIV",{class:!0});var B=q(x);f(be.$$.fragment,B),Rt=a(B),Ge=c(B,"P",{"data-svelte-h":!0}),h(Ge)!=="svelte-pd4btv"&&(Ge.innerHTML=ho),It=a(B),Qe=c(B,"P",{"data-svelte-h":!0}),h(Qe)!=="svelte-hswkmf"&&(Qe.innerHTML=uo),Ft=a(B),U=c(B,"DIV",{class:!0});var V=q(U);f(ye.$$.fragment,V),Gt=a(V),We=c(V,"P",{"data-svelte-h":!0}),h(We)!=="svelte-1jixg71"&&(We.innerHTML=fo),Qt=a(V),f(X.$$.fragment,V),Wt=a(V),f(H.$$.fragment,V),V.forEach(o),B.forEach(o),ht=a(e),f(ke.$$.fragment,e),ut=a(e),J=c(e,"DIV",{class:!0});var O=q(J);f(ve.$$.fragment,O),Et=a(O),Ee=c(O,"P",{"data-svelte-h":!0}),h(Ee)!=="svelte-1guyyvh"&&(Ee.innerHTML=_o),Nt=a(O),Ne=c(O,"P",{"data-svelte-h":!0}),h(Ne)!=="svelte-hswkmf"&&(Ne.innerHTML=go),Xt=a(O),j=c(O,"DIV",{class:!0});var A=q(j);f(we.$$.fragment,A),Ht=a(A),Xe=c(A,"P",{"data-svelte-h":!0}),h(Xe)!=="svelte-1q0fsx5"&&(Xe.innerHTML=Mo),St=a(A),f(S.$$.fragment,A),Lt=a(A),f(L.$$.fragment,A),A.forEach(o),O.forEach(o),ft=a(e),Le=c(e,"P",{}),q(Le).forEach(o),this.h()},h(){Z(r,"name","hf:doc:metadata"),Z(r,"content",qo),Z(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Z(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){d(document.head,r),i(e,k,t),i(e,p,t),i(e,m,t),_(b,e,t),i(e,n,t),_(y,e,t),i(e,Ve,t),i(e,D,t),i(e,Oe,t),i(e,Y,t),i(e,Ae,t),i(e,K,t),i(e,Pe,t),i(e,ee,t),i(e,De,t),_(te,e,t),i(e,Ye,t),i(e,oe,t),i(e,Ke,t),i(e,ne,t),i(e,et,t),i(e,se,t),i(e,tt,t),_(ae,e,t),i(e,ot,t),i(e,re,t),i(e,nt,t),i(e,ie,t),i(e,st,t),_(de,e,t),i(e,at,t),_(le,e,t),i(e,rt,t),i(e,ce,t),i(e,it,t),_(me,e,t),i(e,dt,t),i(e,z,t),_(pe,z,null),d(z,Mt),d(z,ze),d(z,Tt),d(z,xe),d(z,bt),_(W,z,null),i(e,lt,t),_(he,e,t),i(e,ct,t),i(e,v,t),_(ue,v,null),d(v,yt),d(v,Je),d(v,kt),d(v,Ce),d(v,vt),_(E,v,null),d(v,wt),d(v,C),_(fe,C,null),d(C,$t),d(C,Ue),d(C,zt),d(C,je),d(C,xt),d(C,qe),d(v,Jt),d(v,N),_(_e,N,null),d(N,Ct),d(N,Ze),d(v,Ut),d(v,F),_(ge,F,null),d(F,jt),d(F,Re),d(F,qt),d(F,Ie),d(v,Zt),d(v,Fe),_(Me,Fe,null),i(e,mt,t),_(Te,e,t),i(e,pt,t),i(e,x,t),_(be,x,null),d(x,Rt),d(x,Ge),d(x,It),d(x,Qe),d(x,Ft),d(x,U),_(ye,U,null),d(U,Gt),d(U,We),d(U,Qt),_(X,U,null),d(U,Wt),_(H,U,null),i(e,ht,t),_(ke,e,t),i(e,ut,t),i(e,J,t),_(ve,J,null),d(J,Et),d(J,Ee),d(J,Nt),d(J,Ne),d(J,Xt),d(J,j),_(we,j,null),d(j,Ht),d(j,Xe),d(j,St),_(S,j,null),d(j,Lt),_(L,j,null),i(e,ft,t),i(e,Le,t),_t=!0},p(e,[t]){const R={};t&2&&(R.$$scope={dirty:t,ctx:e}),W.$set(R);const w={};t&2&&(w.$$scope={dirty:t,ctx:e}),E.$set(w);const I={};t&2&&(I.$$scope={dirty:t,ctx:e}),X.$set(I);const $e={};t&2&&($e.$$scope={dirty:t,ctx:e}),H.$set($e);const Q={};t&2&&(Q.$$scope={dirty:t,ctx:e}),S.$set(Q);const Be={};t&2&&(Be.$$scope={dirty:t,ctx:e}),L.$set(Be)},i(e){_t||(g(b.$$.fragment,e),g(y.$$.fragment,e),g(te.$$.fragment,e),g(ae.$$.fragment,e),g(de.$$.fragment,e),g(le.$$.fragment,e),g(me.$$.fragment,e),g(pe.$$.fragment,e),g(W.$$.fragment,e),g(he.$$.fragment,e),g(ue.$$.fragment,e),g(E.$$.fragment,e),g(fe.$$.fragment,e),g(_e.$$.fragment,e),g(ge.$$.fragment,e),g(Me.$$.fragment,e),g(Te.$$.fragment,e),g(be.$$.fragment,e),g(ye.$$.fragment,e),g(X.$$.fragment,e),g(H.$$.fragment,e),g(ke.$$.fragment,e),g(ve.$$.fragment,e),g(we.$$.fragment,e),g(S.$$.fragment,e),g(L.$$.fragment,e),_t=!0)},o(e){M(b.$$.fragment,e),M(y.$$.fragment,e),M(te.$$.fragment,e),M(ae.$$.fragment,e),M(de.$$.fragment,e),M(le.$$.fragment,e),M(me.$$.fragment,e),M(pe.$$.fragment,e),M(W.$$.fragment,e),M(he.$$.fragment,e),M(ue.$$.fragment,e),M(E.$$.fragment,e),M(fe.$$.fragment,e),M(_e.$$.fragment,e),M(ge.$$.fragment,e),M(Me.$$.fragment,e),M(Te.$$.fragment,e),M(be.$$.fragment,e),M(ye.$$.fragment,e),M(X.$$.fragment,e),M(H.$$.fragment,e),M(ke.$$.fragment,e),M(ve.$$.fragment,e),M(we.$$.fragment,e),M(S.$$.fragment,e),M(L.$$.fragment,e),_t=!1},d(e){e&&(o(k),o(p),o(m),o(n),o(Ve),o(D),o(Oe),o(Y),o(Ae),o(K),o(Pe),o(ee),o(De),o(Ye),o(oe),o(Ke),o(ne),o(et),o(se),o(tt),o(ot),o(re),o(nt),o(ie),o(st),o(at),o(rt),o(ce),o(it),o(dt),o(z),o(lt),o(ct),o(v),o(mt),o(pt),o(x),o(ht),o(ut),o(J),o(ft),o(Le)),o(r),T(b,e),T(y,e),T(te,e),T(ae,e),T(de,e),T(le,e),T(me,e),T(pe),T(W),T(he,e),T(ue),T(E),T(fe),T(_e),T(ge),T(Me),T(Te,e),T(be),T(ye),T(X),T(H),T(ke,e),T(ve),T(we),T(S),T(L)}}}const qo='{"title":"M2M100","local":"m2m100","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips and examples","local":"usage-tips-and-examples","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"M2M100Config","local":"transformers.M2M100Config","sections":[],"depth":2},{"title":"M2M100Tokenizer","local":"transformers.M2M100Tokenizer","sections":[],"depth":2},{"title":"M2M100Model","local":"transformers.M2M100Model","sections":[],"depth":2},{"title":"M2M100ForConditionalGeneration","local":"transformers.M2M100ForConditionalGeneration","sections":[],"depth":2}],"depth":1}';function Zo($){return yo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class No extends ko{constructor(r){super(),vo(this,r,Zo,jo,bo,{})}}export{No as component};
