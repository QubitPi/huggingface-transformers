import{s as Mt,o as vt,n as Ne}from"../chunks/scheduler.9bc65507.js";import{S as kt,i as $t,g as p,s as l,r as _,A as Ct,h as m,f as n,c as d,j as de,u as b,x as u,k as ce,l as Pt,y as h,a as r,v as y,d as T,t as w,w as M}from"../chunks/index.707bf1b6.js";import{T as gt}from"../chunks/Tip.c2ecdbf4.js";import{D as Fe}from"../chunks/Docstring.17db21ae.js";import{C as it}from"../chunks/CodeBlock.54a9f38d.js";import{F as xt,M as jt}from"../chunks/Markdown.fef84341.js";import{E as wt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ee}from"../chunks/Heading.342b1fa6.js";function zt($){let t,f="Phi-2 has been integrated in the development version (4.37.0.dev) of <code>transformers</code>. Until the official version is released through <code>pip</code>, ensure that you are doing one of the following:",a,c,v="<li><p>When loading the model, ensure that <code>trust_remote_code=True</code> is passed as an argument of the <code>from_pretrained()</code> function.</p></li> <li><p>Update your local <code>transformers</code> to the development version: <code>pip uninstall -y transformers &amp;&amp; pip install git+https://github.com/huggingface/transformers</code>. The previous command is an alternative to cloning and installing from the source.</p></li>";return{c(){t=p("p"),t.innerHTML=f,a=l(),c=p("ul"),c.innerHTML=v},l(i){t=m(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-o2znv2"&&(t.innerHTML=f),a=d(i),c=m(i,"UL",{"data-svelte-h":!0}),u(c)!=="svelte-1ysocqo"&&(c.innerHTML=v)},m(i,k){r(i,t,k),r(i,a,k),r(i,c,k)},p:Ne,d(i){i&&(n(t),n(a),n(c))}}}function Jt($){let t,f="Example:",a,c,v;return c=new it({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFBoaU1vZGVsJTJDJTIwUGhpQ29uZmlnJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMFBoaS0xJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFBoaUNvbmZpZy5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGcGhpLTElMjIpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwZnJvbSUyMHRoZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMFBoaU1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PhiModel, PhiConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Phi-1 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PhiConfig.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-1&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PhiModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=p("p"),t.textContent=f,a=l(),_(c.$$.fragment)},l(i){t=m(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=f),a=d(i),b(c.$$.fragment,i)},m(i,k){r(i,t,k),r(i,a,k),y(c,i,k),v=!0},p:Ne,i(i){v||(T(c.$$.fragment,i),v=!0)},o(i){w(c.$$.fragment,i),v=!1},d(i){i&&(n(t),n(a)),M(c,i)}}}function Ut($){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=f},l(a){t=m(a,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(a,c){r(a,t,c)},p:Ne,d(a){a&&n(t)}}}function Ft($){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=f},l(a){t=m(a,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(a,c){r(a,t,c)},p:Ne,d(a){a&&n(t)}}}function It($){let t,f="Example:",a,c,v;return c=new it({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBQaGlGb3JDYXVzYWxMTSUwQSUwQW1vZGVsJTIwJTNEJTIwUGhpRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnBoaS0xJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnBoaS0xJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMlRoaXMlMjBpcyUyMGFuJTIwZXhhbXBsZSUyMHNjcmlwdCUyMC4lMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocHJvbXB0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEElMjMlMjBHZW5lcmF0ZSUwQWdlbmVyYXRlX2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKGlucHV0cy5pbnB1dF9pZHMlMkMlMjBtYXhfbGVuZ3RoJTNEMzApJTBBdG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW5lcmF0ZV9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSUyQyUyMGNsZWFuX3VwX3Rva2VuaXphdGlvbl9zcGFjZXMlM0RGYWxzZSklNUIwJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, PhiForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = PhiForCausalLM.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-1&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;This is an example script .&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generate_ids = model.generate(inputs.input_ids, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generate_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;This is an example script .\\n\\n\\n\\nfrom typing import List\\n\\ndef find_most_common_letter(words: List[str&#x27;</span>`,wrap:!1}}),{c(){t=p("p"),t.textContent=f,a=l(),_(c.$$.fragment)},l(i){t=m(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=f),a=d(i),b(c.$$.fragment,i)},m(i,k){r(i,t,k),r(i,a,k),y(c,i,k),v=!0},p:Ne,i(i){v||(T(c.$$.fragment,i),v=!0)},o(i){w(c.$$.fragment,i),v=!1},d(i){i&&(n(t),n(a)),M(c,i)}}}function Zt($){let t,f=`Most generation-controlling parameters are set in <code>generation_config</code> which, if not passed, will be set to the
model’s default generation configuration. You can override any <code>generation_config</code> by passing the corresponding
parameters to generate(), e.g. <code>.generate(inputs, num_beams=4, do_sample=True)</code>.`,a,c,v=`For an overview of generation strategies and code examples, check out the <a href="../generation_strategies">following
guide</a>.`;return{c(){t=p("p"),t.innerHTML=f,a=l(),c=p("p"),c.innerHTML=v},l(i){t=m(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-1c5u34l"&&(t.innerHTML=f),a=d(i),c=m(i,"P",{"data-svelte-h":!0}),u(c)!=="svelte-fvlq1g"&&(c.innerHTML=v)},m(i,k){r(i,t,k),r(i,a,k),r(i,c,k)},p:Ne,d(i){i&&(n(t),n(a),n(c))}}}function Gt($){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=f},l(a){t=m(a,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(a,c){r(a,t,c)},p:Ne,d(a){a&&n(t)}}}function Lt($){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=f},l(a){t=m(a,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(a,c){r(a,t,c)},p:Ne,d(a){a&&n(t)}}}function Bt($){let t,f="Example:",a,c,v;return c=new it({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBQaGlGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZwaGktMSUyMiklMEFtb2RlbCUyMCUzRCUyMFBoaUZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnBoaS0xJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, PhiForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PhiForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-1&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=p("p"),t.textContent=f,a=l(),_(c.$$.fragment)},l(i){t=m(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=f),a=d(i),b(c.$$.fragment,i)},m(i,k){r(i,t,k),r(i,a,k),y(c,i,k),v=!0},p:Ne,i(i){v||(T(c.$$.fragment,i),v=!0)},o(i){w(c.$$.fragment,i),v=!1},d(i){i&&(n(t),n(a)),M(c,i)}}}function Wt($){let t,f,a,c,v,i,k=`The bare Phi Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Re,V,_t=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Xe,H,bt="Transformer decoder consisting of <em>config.num_hidden_layers</em> layers. Each layer is a <code>PhiDecoderLayer</code>",Ee,x,te,pe,Ie,tt='The <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiModel">PhiModel</a> forward method, overrides the <code>__call__</code> special method.',me,he,Ze,L,nt,Z,B,lt,J,W,dt,ue,Ce='The <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM">PhiForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',ct,A,fe,ge,Ae,j,ne,_e,Ge,ot="Generates sequences of token ids for models with a language modeling head.",be,Q,O,oe,se,C,S,Qe,N,st="The PhiModel with a sequence classification head on top (linear layer).",ye,Te,Pe=`<a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForSequenceClassification">PhiForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`,pt,we,xe=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,Oe,R,yt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ye,X,Tt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,De,z,ae,Me,ve,je='The <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForSequenceClassification">PhiForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',mt,Y,D,ze,Le,P,re,U,E,ht=`PhiModel with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Je,Be,ut=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ue,We,ft=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ie,F,G,Ke,le,at='The <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForTokenClassification">PhiForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',e,s,q,ke,rt;return t=new ee({props:{title:"PhiModel",local:"transformers.PhiModel",headingTag:"h2"}}),c=new Fe({props:{name:"class transformers.PhiModel",anchor:"transformers.PhiModel",parameters:[{name:"config",val:": PhiConfig"}],parametersDescription:[{anchor:"transformers.PhiModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiConfig">PhiConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; PhiConfig`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/phi/modeling_phi.py#L801"}}),te=new Fe({props:{name:"forward",anchor:"transformers.PhiModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.PhiModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PhiModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"attention_mask"},{anchor:"transformers.PhiModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.PhiModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Cache</code> or <code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>) &#x2014;
Pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used to speed up sequential decoding. This typically consists in the <code>past_key_values</code>
returned by the model at a previous stage of decoding, when <code>use_cache=True</code> or <code>config.use_cache=True</code>.</p>
<p>Two formats are allowed:</p>
<ul>
<li>a <a href="/docs/transformers/main/en/internal/generation_utils#transformers.Cache">Cache</a> instance;</li>
<li>Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>). This is also known as the legacy
cache format.</li>
</ul>
<p>The model will output the same cache format that is fed as input. If no <code>past_key_values</code> are passed, the
legacy cache format will be returned.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that don&#x2019;t
have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all <code>input_ids</code>
of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PhiModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PhiModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PhiModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PhiModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PhiModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/phi/modeling_phi.py#L836"}}),he=new gt({props:{$$slots:{default:[Ut]},$$scope:{ctx:$}}}),L=new ee({props:{title:"PhiForCausalLM",local:"transformers.PhiForCausalLM",headingTag:"h2"}}),B=new Fe({props:{name:"class transformers.PhiForCausalLM",anchor:"transformers.PhiForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/phi/modeling_phi.py#L961"}}),W=new Fe({props:{name:"forward",anchor:"transformers.PhiForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.PhiForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PhiForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"attention_mask"},{anchor:"transformers.PhiForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.PhiForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Cache</code> or <code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>) &#x2014;
Pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used to speed up sequential decoding. This typically consists in the <code>past_key_values</code>
returned by the model at a previous stage of decoding, when <code>use_cache=True</code> or <code>config.use_cache=True</code>.</p>
<p>Two formats are allowed:</p>
<ul>
<li>a <a href="/docs/transformers/main/en/internal/generation_utils#transformers.Cache">Cache</a> instance;</li>
<li>Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>). This is also known as the legacy
cache format.</li>
</ul>
<p>The model will output the same cache format that is fed as input. If no <code>past_key_values</code> are passed, the
legacy cache format will be returned.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that don&#x2019;t
have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all <code>input_ids</code>
of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PhiForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PhiForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PhiForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PhiForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PhiForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>Args &#x2014;
labels (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/phi/modeling_phi.py#L998",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/phi#transformers.PhiConfig"
>PhiConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),A=new gt({props:{$$slots:{default:[Ft]},$$scope:{ctx:$}}}),ge=new wt({props:{anchor:"transformers.PhiForCausalLM.forward.example",$$slots:{default:[It]},$$scope:{ctx:$}}}),ne=new Fe({props:{name:"generate",anchor:"transformers.PhiForCausalLM.generate",parameters:[{name:"inputs",val:": Optional = None"},{name:"generation_config",val:": Optional = None"},{name:"logits_processor",val:": Optional = None"},{name:"stopping_criteria",val:": Optional = None"},{name:"prefix_allowed_tokens_fn",val:": Optional = None"},{name:"synced_gpus",val:": Optional = None"},{name:"assistant_model",val:": Optional = None"},{name:"streamer",val:": Optional = None"},{name:"negative_prompt_ids",val:": Optional = None"},{name:"negative_prompt_attention_mask",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PhiForCausalLM.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation or as model inputs to the encoder. If <code>None</code> the
method initializes it with <code>bos_token_id</code> and a batch size of 1. For decoder-only models <code>inputs</code>
should of in the format of <code>input_ids</code>. For encoder-decoder models <em>inputs</em> can represent any of
<code>input_ids</code>, <code>input_values</code>, <code>input_features</code>, or <code>pixel_values</code>.`,name:"inputs"},{anchor:"transformers.PhiForCausalLM.generate.generation_config",description:`<strong>generation_config</strong> (<code>~generation.GenerationConfig</code>, <em>optional</em>) &#x2014;
The generation configuration to be used as base parametrization for the generation call. <code>**kwargs</code>
passed to generate matching the attributes of <code>generation_config</code> will override them. If
<code>generation_config</code> is not provided, the default will be used, which had the following loading
priority: 1) from the <code>generation_config.json</code> model file, if it exists; 2) from the model
configuration. Please note that unspecified parameters will inherit <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a>&#x2019;s
default values, whose documentation should be checked to parameterize generation.`,name:"generation_config"},{anchor:"transformers.PhiForCausalLM.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and
generation config. If a logit processor is passed that is already created with the arguments or a
generation config an error is thrown. This feature is intended for advanced users.`,name:"logits_processor"},{anchor:"transformers.PhiForCausalLM.generate.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
Custom stopping criteria that complement the default stopping criteria built from arguments and a
generation config. If a stopping criteria is passed that is already created with the arguments or a
generation config an error is thrown. If your stopping criteria depends on the <code>scores</code> input, make
sure you pass <code>return_dict_in_generate=True, output_scores=True</code> to <code>generate</code>. This feature is
intended for advanced users.`,name:"stopping_criteria"},{anchor:"transformers.PhiForCausalLM.generate.prefix_allowed_tokens_fn",description:`<strong>prefix_allowed_tokens_fn</strong> (<code>Callable[[int, torch.Tensor], List[int]]</code>, <em>optional</em>) &#x2014;
If provided, this function constraints the beam search to allowed tokens only at each step. If not
provided no constraint is applied. This function takes 2 arguments: the batch ID <code>batch_id</code> and
<code>input_ids</code>. It has to return a list with the allowed tokens for the next generation step conditioned
on the batch ID <code>batch_id</code> and the previously generated tokens <code>inputs_ids</code>. This argument is useful
for constrained generation conditioned on the prefix, as described in <a href="https://arxiv.org/abs/2010.00904" rel="nofollow">Autoregressive Entity
Retrieval</a>.`,name:"prefix_allowed_tokens_fn"},{anchor:"transformers.PhiForCausalLM.generate.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to continue running the while loop until max_length. Unless overridden this flag will be set to
<code>True</code> under DeepSpeed ZeRO Stage 3 multiple GPUs environment to avoid hanging if one GPU finished
generating before other GPUs. Otherwise it&#x2019;ll be set to <code>False</code>.`,name:"synced_gpus"},{anchor:"transformers.PhiForCausalLM.generate.assistant_model",description:`<strong>assistant_model</strong> (<code>PreTrainedModel</code>, <em>optional</em>) &#x2014;
An assistant model that can be used to accelerate generation. The assistant model must have the exact
same tokenizer. The acceleration is achieved when forecasting candidate tokens with the assistent model
is much faster than running generation with the model you&#x2019;re calling generate from. As such, the
assistant model should be much smaller.`,name:"assistant_model"},{anchor:"transformers.PhiForCausalLM.generate.streamer",description:`<strong>streamer</strong> (<code>BaseStreamer</code>, <em>optional</em>) &#x2014;
Streamer object that will be used to stream the generated sequences. Generated tokens are passed
through <code>streamer.put(token_ids)</code> and the streamer is responsible for any further processing.`,name:"streamer"},{anchor:"transformers.PhiForCausalLM.generate.negative_prompt_ids",description:`<strong>negative_prompt_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The negative prompt needed for some processors such as CFG. The batch size must match the input batch
size. This is an experimental feature, subject to breaking API changes in future versions.`,name:"negative_prompt_ids"},{anchor:"transformers.PhiForCausalLM.generate.negative_prompt_attention_mask",description:`<strong>negative_prompt_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Attention_mask for <code>negative_prompt_ids</code>.`,name:"negative_prompt_attention_mask"},{anchor:"transformers.PhiForCausalLM.generate.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Ad hoc parametrization of <code>generate_config</code> and/or additional model-specific kwargs that will be
forwarded to the <code>forward</code> function of the model. If the model is an encoder-decoder model, encoder
specific kwargs should not be prefixed and decoder specific kwargs should be prefixed with <em>decoder_</em>.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L1197",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if <code>return_dict_in_generate=True</code>
or when <code>config.return_dict_in_generate=True</code>) or a <code>torch.FloatTensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateDecoderOnlyOutput"
>GenerateDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamDecoderOnlyOutput"
>GenerateBeamDecoderOnlyOutput</a></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
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
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>torch.LongTensor</code></p>
`}}),Q=new gt({props:{warning:!0,$$slots:{default:[Zt]},$$scope:{ctx:$}}}),oe=new ee({props:{title:"PhiForSequenceClassification",local:"transformers.PhiForSequenceClassification",headingTag:"h2"}}),S=new Fe({props:{name:"class transformers.PhiForSequenceClassification",anchor:"transformers.PhiForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.PhiForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiConfig">PhiConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/phi/modeling_phi.py#L1155"}}),ae=new Fe({props:{name:"forward",anchor:"transformers.PhiForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.PhiForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PhiForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"attention_mask"},{anchor:"transformers.PhiForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.PhiForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Cache</code> or <code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>) &#x2014;
Pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used to speed up sequential decoding. This typically consists in the <code>past_key_values</code>
returned by the model at a previous stage of decoding, when <code>use_cache=True</code> or <code>config.use_cache=True</code>.</p>
<p>Two formats are allowed:</p>
<ul>
<li>a <a href="/docs/transformers/main/en/internal/generation_utils#transformers.Cache">Cache</a> instance;</li>
<li>Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>). This is also known as the legacy
cache format.</li>
</ul>
<p>The model will output the same cache format that is fed as input. If no <code>past_key_values</code> are passed, the
legacy cache format will be returned.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that don&#x2019;t
have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all <code>input_ids</code>
of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PhiForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PhiForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PhiForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PhiForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PhiForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PhiForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/phi/modeling_phi.py#L1187"}}),Y=new gt({props:{$$slots:{default:[Gt]},$$scope:{ctx:$}}}),ze=new ee({props:{title:"PhiForTokenClassification",local:"transformers.PhiForTokenClassification",headingTag:"h2"}}),re=new Fe({props:{name:"class transformers.PhiForTokenClassification",anchor:"transformers.PhiForTokenClassification",parameters:[{name:"config",val:": PhiConfig"}],parametersDescription:[{anchor:"transformers.PhiForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiConfig">PhiConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/phi/modeling_phi.py#L1279"}}),G=new Fe({props:{name:"forward",anchor:"transformers.PhiForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.PhiForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PhiForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"attention_mask"},{anchor:"transformers.PhiForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.PhiForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Cache</code> or <code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>) &#x2014;
Pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used to speed up sequential decoding. This typically consists in the <code>past_key_values</code>
returned by the model at a previous stage of decoding, when <code>use_cache=True</code> or <code>config.use_cache=True</code>.</p>
<p>Two formats are allowed:</p>
<ul>
<li>a <a href="/docs/transformers/main/en/internal/generation_utils#transformers.Cache">Cache</a> instance;</li>
<li>Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>). This is also known as the legacy
cache format.</li>
</ul>
<p>The model will output the same cache format that is fed as input. If no <code>past_key_values</code> are passed, the
legacy cache format will be returned.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that don&#x2019;t
have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all <code>input_ids</code>
of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PhiForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PhiForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PhiForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PhiForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PhiForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PhiForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/phi/modeling_phi.py#L1305",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/phi#transformers.PhiConfig"
>PhiConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) — Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),s=new gt({props:{$$slots:{default:[Lt]},$$scope:{ctx:$}}}),ke=new wt({props:{anchor:"transformers.PhiForTokenClassification.forward.example",$$slots:{default:[Bt]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment),f=l(),a=p("div"),_(c.$$.fragment),v=l(),i=p("p"),i.innerHTML=k,Re=l(),V=p("p"),V.innerHTML=_t,Xe=l(),H=p("p"),H.innerHTML=bt,Ee=l(),x=p("div"),_(te.$$.fragment),pe=l(),Ie=p("p"),Ie.innerHTML=tt,me=l(),_(he.$$.fragment),Ze=l(),_(L.$$.fragment),nt=l(),Z=p("div"),_(B.$$.fragment),lt=l(),J=p("div"),_(W.$$.fragment),dt=l(),ue=p("p"),ue.innerHTML=Ce,ct=l(),_(A.$$.fragment),fe=l(),_(ge.$$.fragment),Ae=l(),j=p("div"),_(ne.$$.fragment),_e=l(),Ge=p("p"),Ge.textContent=ot,be=l(),_(Q.$$.fragment),O=l(),_(oe.$$.fragment),se=l(),C=p("div"),_(S.$$.fragment),Qe=l(),N=p("p"),N.textContent=st,ye=l(),Te=p("p"),Te.innerHTML=Pe,pt=l(),we=p("p"),we.innerHTML=xe,Oe=l(),R=p("p"),R.innerHTML=yt,Ye=l(),X=p("p"),X.innerHTML=Tt,De=l(),z=p("div"),_(ae.$$.fragment),Me=l(),ve=p("p"),ve.innerHTML=je,mt=l(),_(Y.$$.fragment),D=l(),_(ze.$$.fragment),Le=l(),P=p("div"),_(re.$$.fragment),U=l(),E=p("p"),E.textContent=ht,Je=l(),Be=p("p"),Be.innerHTML=ut,Ue=l(),We=p("p"),We.innerHTML=ft,ie=l(),F=p("div"),_(G.$$.fragment),Ke=l(),le=p("p"),le.innerHTML=at,e=l(),_(s.$$.fragment),q=l(),_(ke.$$.fragment),this.h()},l(o){b(t.$$.fragment,o),f=d(o),a=m(o,"DIV",{class:!0});var g=de(a);b(c.$$.fragment,g),v=d(g),i=m(g,"P",{"data-svelte-h":!0}),u(i)!=="svelte-1g9ll2t"&&(i.innerHTML=k),Re=d(g),V=m(g,"P",{"data-svelte-h":!0}),u(V)!=="svelte-hswkmf"&&(V.innerHTML=_t),Xe=d(g),H=m(g,"P",{"data-svelte-h":!0}),u(H)!=="svelte-9ccchq"&&(H.innerHTML=bt),Ee=d(g),x=m(g,"DIV",{class:!0});var Se=de(x);b(te.$$.fragment,Se),pe=d(Se),Ie=m(Se,"P",{"data-svelte-h":!0}),u(Ie)!=="svelte-nn35ak"&&(Ie.innerHTML=tt),me=d(Se),b(he.$$.fragment,Se),Se.forEach(n),g.forEach(n),Ze=d(o),b(L.$$.fragment,o),nt=d(o),Z=m(o,"DIV",{class:!0});var qe=de(Z);b(B.$$.fragment,qe),lt=d(qe),J=m(qe,"DIV",{class:!0});var $e=de(J);b(W.$$.fragment,$e),dt=d($e),ue=m($e,"P",{"data-svelte-h":!0}),u(ue)!=="svelte-n3wos4"&&(ue.innerHTML=Ce),ct=d($e),b(A.$$.fragment,$e),fe=d($e),b(ge.$$.fragment,$e),$e.forEach(n),Ae=d(qe),j=m(qe,"DIV",{class:!0});var Ve=de(j);b(ne.$$.fragment,Ve),_e=d(Ve),Ge=m(Ve,"P",{"data-svelte-h":!0}),u(Ge)!=="svelte-s5ko3x"&&(Ge.textContent=ot),be=d(Ve),b(Q.$$.fragment,Ve),Ve.forEach(n),qe.forEach(n),O=d(o),b(oe.$$.fragment,o),se=d(o),C=m(o,"DIV",{class:!0});var I=de(C);b(S.$$.fragment,I),Qe=d(I),N=m(I,"P",{"data-svelte-h":!0}),u(N)!=="svelte-1ei5ef0"&&(N.textContent=st),ye=d(I),Te=m(I,"P",{"data-svelte-h":!0}),u(Te)!=="svelte-1vadz63"&&(Te.innerHTML=Pe),pt=d(I),we=m(I,"P",{"data-svelte-h":!0}),u(we)!=="svelte-10ugs3m"&&(we.innerHTML=xe),Oe=d(I),R=m(I,"P",{"data-svelte-h":!0}),u(R)!=="svelte-6pahdo"&&(R.innerHTML=yt),Ye=d(I),X=m(I,"P",{"data-svelte-h":!0}),u(X)!=="svelte-hswkmf"&&(X.innerHTML=Tt),De=d(I),z=m(I,"DIV",{class:!0});var He=de(z);b(ae.$$.fragment,He),Me=d(He),ve=m(He,"P",{"data-svelte-h":!0}),u(ve)!=="svelte-h9u1c6"&&(ve.innerHTML=je),mt=d(He),b(Y.$$.fragment,He),He.forEach(n),I.forEach(n),D=d(o),b(ze.$$.fragment,o),Le=d(o),P=m(o,"DIV",{class:!0});var K=de(P);b(re.$$.fragment,K),U=d(K),E=m(K,"P",{"data-svelte-h":!0}),u(E)!=="svelte-mycuhq"&&(E.textContent=ht),Je=d(K),Be=m(K,"P",{"data-svelte-h":!0}),u(Be)!=="svelte-6pahdo"&&(Be.innerHTML=ut),Ue=d(K),We=m(K,"P",{"data-svelte-h":!0}),u(We)!=="svelte-hswkmf"&&(We.innerHTML=ft),ie=d(K),F=m(K,"DIV",{class:!0});var et=de(F);b(G.$$.fragment,et),Ke=d(et),le=m(et,"P",{"data-svelte-h":!0}),u(le)!=="svelte-1etzxpw"&&(le.innerHTML=at),e=d(et),b(s.$$.fragment,et),q=d(et),b(ke.$$.fragment,et),et.forEach(n),K.forEach(n),this.h()},h(){ce(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ce(a,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ce(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ce(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ce(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ce(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ce(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ce(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ce(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){y(t,o,g),r(o,f,g),r(o,a,g),y(c,a,null),h(a,v),h(a,i),h(a,Re),h(a,V),h(a,Xe),h(a,H),h(a,Ee),h(a,x),y(te,x,null),h(x,pe),h(x,Ie),h(x,me),y(he,x,null),r(o,Ze,g),y(L,o,g),r(o,nt,g),r(o,Z,g),y(B,Z,null),h(Z,lt),h(Z,J),y(W,J,null),h(J,dt),h(J,ue),h(J,ct),y(A,J,null),h(J,fe),y(ge,J,null),h(Z,Ae),h(Z,j),y(ne,j,null),h(j,_e),h(j,Ge),h(j,be),y(Q,j,null),r(o,O,g),y(oe,o,g),r(o,se,g),r(o,C,g),y(S,C,null),h(C,Qe),h(C,N),h(C,ye),h(C,Te),h(C,pt),h(C,we),h(C,Oe),h(C,R),h(C,Ye),h(C,X),h(C,De),h(C,z),y(ae,z,null),h(z,Me),h(z,ve),h(z,mt),y(Y,z,null),r(o,D,g),y(ze,o,g),r(o,Le,g),r(o,P,g),y(re,P,null),h(P,U),h(P,E),h(P,Je),h(P,Be),h(P,Ue),h(P,We),h(P,ie),h(P,F),y(G,F,null),h(F,Ke),h(F,le),h(F,e),y(s,F,null),h(F,q),y(ke,F,null),rt=!0},p(o,g){const Se={};g&2&&(Se.$$scope={dirty:g,ctx:o}),he.$set(Se);const qe={};g&2&&(qe.$$scope={dirty:g,ctx:o}),A.$set(qe);const $e={};g&2&&($e.$$scope={dirty:g,ctx:o}),ge.$set($e);const Ve={};g&2&&(Ve.$$scope={dirty:g,ctx:o}),Q.$set(Ve);const I={};g&2&&(I.$$scope={dirty:g,ctx:o}),Y.$set(I);const He={};g&2&&(He.$$scope={dirty:g,ctx:o}),s.$set(He);const K={};g&2&&(K.$$scope={dirty:g,ctx:o}),ke.$set(K)},i(o){rt||(T(t.$$.fragment,o),T(c.$$.fragment,o),T(te.$$.fragment,o),T(he.$$.fragment,o),T(L.$$.fragment,o),T(B.$$.fragment,o),T(W.$$.fragment,o),T(A.$$.fragment,o),T(ge.$$.fragment,o),T(ne.$$.fragment,o),T(Q.$$.fragment,o),T(oe.$$.fragment,o),T(S.$$.fragment,o),T(ae.$$.fragment,o),T(Y.$$.fragment,o),T(ze.$$.fragment,o),T(re.$$.fragment,o),T(G.$$.fragment,o),T(s.$$.fragment,o),T(ke.$$.fragment,o),rt=!0)},o(o){w(t.$$.fragment,o),w(c.$$.fragment,o),w(te.$$.fragment,o),w(he.$$.fragment,o),w(L.$$.fragment,o),w(B.$$.fragment,o),w(W.$$.fragment,o),w(A.$$.fragment,o),w(ge.$$.fragment,o),w(ne.$$.fragment,o),w(Q.$$.fragment,o),w(oe.$$.fragment,o),w(S.$$.fragment,o),w(ae.$$.fragment,o),w(Y.$$.fragment,o),w(ze.$$.fragment,o),w(re.$$.fragment,o),w(G.$$.fragment,o),w(s.$$.fragment,o),w(ke.$$.fragment,o),rt=!1},d(o){o&&(n(f),n(a),n(Ze),n(nt),n(Z),n(O),n(se),n(C),n(D),n(Le),n(P)),M(t,o),M(c),M(te),M(he),M(L,o),M(B),M(W),M(A),M(ge),M(ne),M(Q),M(oe,o),M(S),M(ae),M(Y),M(ze,o),M(re),M(G),M(s),M(ke)}}}function St($){let t,f;return t=new jt({props:{$$slots:{default:[Wt]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment)},l(a){b(t.$$.fragment,a)},m(a,c){y(t,a,c),f=!0},p(a,c){const v={};c&2&&(v.$$scope={dirty:c,ctx:a}),t.$set(v)},i(a){f||(T(t.$$.fragment,a),f=!0)},o(a){w(t.$$.fragment,a),f=!1},d(a){M(t,a)}}}function qt($){let t,f,a,c,v,i,k,Re,V,_t='The Phi-1 model was proposed in <a href="https://arxiv.org/abs/2306.11644" rel="nofollow">Textbooks Are All You Need</a> by Suriya Gunasekar, Yi Zhang, Jyoti Aneja, Caio César Teodoro Mendes, Allie Del Giorno, Sivakanth Gopi, Mojan Javaheripi, Piero Kauffmann, Gustavo de Rosa, Olli Saarikivi, Adil Salim, Shital Shah, Harkirat Singh Behl, Xin Wang, Sébastien Bubeck, Ronen Eldan, Adam Tauman Kalai, Yin Tat Lee and Yuanzhi Li.',Xe,H,bt='The Phi-1.5 model was proposed in <a href="https://arxiv.org/abs/2309.05463" rel="nofollow">Textbooks Are All You Need II: phi-1.5 technical report</a> by Yuanzhi Li, Sébastien Bubeck, Ronen Eldan, Allie Del Giorno, Suriya Gunasekar and Yin Tat Lee.',Ee,x,te,pe,Ie=`In Phi-1 and Phi-1.5 papers, the authors showed how important the quality of the data is in training relative to the model size.
They selected high quality “textbook” data alongside with synthetically generated data for training their small sized Transformer
based model Phi-1 with 1.3B parameters. Despite this small scale, phi-1 attains pass@1 accuracy 50.6% on HumanEval and 55.5% on MBPP.
They follow the same strategy for Phi-1.5 and created another 1.3B parameter model with performance on natural language tasks comparable
to models 5x larger, and surpassing most non-frontier LLMs. Phi-1.5 exhibits many of the traits of much larger LLMs such as the ability
to “think step by step” or perform some rudimentary in-context learning.
With these two experiments the authors successfully showed the huge impact of quality of training data when training machine learning models.`,tt,me,he="The abstract from the Phi-1 paper is the following:",Ze,L,nt=`<em>We introduce phi-1, a new large language model for code, with significantly smaller size than
competing models: phi-1 is a Transformer-based model with 1.3B parameters, trained for 4 days on
8 A100s, using a selection of “textbook quality” data from the web (6B tokens) and synthetically
generated textbooks and exercises with GPT-3.5 (1B tokens). Despite this small scale, phi-1 attains
pass@1 accuracy 50.6% on HumanEval and 55.5% on MBPP. It also displays surprising emergent
properties compared to phi-1-base, our model before our finetuning stage on a dataset of coding
exercises, and phi-1-small, a smaller model with 350M parameters trained with the same pipeline as
phi-1 that still achieves 45% on HumanEval.</em>`,Z,B,lt="The abstract from the Phi-1.5 paper is the following:",J,W,dt=`<em>We continue the investigation into the power of smaller Transformer-based language models as
initiated by TinyStories – a 10 million parameter model that can produce coherent English – and
the follow-up work on phi-1, a 1.3 billion parameter model with Python coding performance close
to the state-of-the-art. The latter work proposed to use existing Large Language Models (LLMs) to
generate “textbook quality” data as a way to enhance the learning process compared to traditional
web data. We follow the “Textbooks Are All You Need” approach, focusing this time on common
sense reasoning in natural language, and create a new 1.3 billion parameter model named phi-1.5,
with performance on natural language tasks comparable to models 5x larger, and surpassing most
non-frontier LLMs on more complex reasoning tasks such as grade-school mathematics and basic
coding. More generally, phi-1.5 exhibits many of the traits of much larger LLMs, both good –such
as the ability to “think step by step” or perform some rudimentary in-context learning– and bad,
including hallucinations and the potential for toxic and biased generations –encouragingly though, we
are seeing improvement on that front thanks to the absence of web data. We open-source phi-1.5 to
promote further research on these urgent topics.</em>`,ue,Ce,ct='This model was contributed by <a href="https://huggingface.co/susnato" rel="nofollow">Susnato Dhar</a>.',A,fe,ge='The original code for Phi-1, Phi-1.5 and Phi-2 can be found <a href="https://huggingface.co/microsoft/phi-1" rel="nofollow">here</a>, <a href="https://huggingface.co/microsoft/phi-1_5" rel="nofollow">here</a> and <a href="https://huggingface.co/microsoft/phi-2" rel="nofollow">here</a>, respectively.',Ae,j,ne,_e,Ge='<li>This model is quite similar to <code>Llama</code> with the main difference in <code>PhiDecoderLayer</code>, where they used <code>PhiAttention</code> and <code>PhiMLP</code> layers in parallel configuration.</li> <li>The tokenizer used for this model is identical to the <a href="/docs/transformers/main/en/model_doc/codegen#transformers.CodeGenTokenizer">CodeGenTokenizer</a>.</li>',ot,be,Q,O,oe,se,C,S,Qe,N,st,ye,Te,Pe,pt="First, make sure to install the latest version of Flash Attention 2 to include the sliding window attention feature.",we,xe,Oe,R,yt="Make also sure that you have a hardware that is compatible with Flash-Attention 2. Read more about it in the official documentation of flash-attn repository. Make also sure to load your model in half-precision (e.g. `torch.float16“)",Ye,X,Tt="To load and run a model using Flash Attention 2, refer to the snippet below:",De,z,ae,Me,ve,je,mt="Below is an expected speedup diagram that compares pure inference time between the native implementation in transformers using <code>microsoft/phi-1</code> checkpoint and the Flash Attention 2 version of the model using a sequence length of 2048.",Y,D,ze='<img src="https://huggingface.co/datasets/ybelkada/documentation-images/resolve/main/phi_1_speedup_plot.jpg"/>',Le,P,re,U,E,ht,Je,Be=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiModel">PhiModel</a>. It is used to instantiate an Phi
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Phi
<a href="https://huggingface.co/microsoft/phi-1" rel="nofollow">microsoft/phi-1</a>.`,ut,Ue,We=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,ft,ie,F,G,Ke,le,at;return v=new ee({props:{title:"Phi",local:"phi",headingTag:"h1"}}),k=new ee({props:{title:"Overview",local:"overview",headingTag:"h2"}}),x=new ee({props:{title:"Summary",local:"summary",headingTag:"h3"}}),j=new ee({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),be=new ee({props:{title:"How to use Phi-2",local:"how-to-use-phi-2",headingTag:"h2"}}),O=new gt({props:{warning:!0,$$slots:{default:[zt]},$$scope:{ctx:$}}}),se=new it({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Nb2RlbEZvckNhdXNhbExNJTJDJTIwQXV0b1Rva2VuaXplciUwQSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnBoaS0yJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnBoaS0yJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcignQ2FuJTIweW91JTIwaGVscCUyMG1lJTIwd3JpdGUlMjBhJTIwZm9ybWFsJTIwZW1haWwlMjB0byUyMGElMjBwb3RlbnRpYWwlMjBidXNpbmVzcyUyMHBhcnRuZXIlMjBwcm9wb3NpbmclMjBhJTIwam9pbnQlMjB2ZW50dXJlJTNGJyUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMkMlMjByZXR1cm5fYXR0ZW50aW9uX21hc2slM0RGYWxzZSklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoKippbnB1dHMlMkMlMjBtYXhfbGVuZ3RoJTNEMzApJTBBdGV4dCUyMCUzRCUyMHRva2VuaXplci5iYXRjaF9kZWNvZGUob3V0cHV0cyklNUIwJTVEJTBBcHJpbnQodGV4dCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&#x27;Can you help me write a formal email to a potential business partner proposing a joint venture?&#x27;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, return_attention_mask=<span class="hljs-literal">False</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(**inputs, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = tokenizer.batch_decode(outputs)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(text)
<span class="hljs-string">&#x27;Can you help me write a formal email to a potential business partner proposing a joint venture?\\nInput: Company A: ABC Inc.\\nCompany B: XYZ Ltd.\\nJoint Venture: A new online platform for e-commerce&#x27;</span>`,wrap:!1}}),S=new ee({props:{title:"Example :",local:"example-",headingTag:"h3"}}),N=new it({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFBoaUZvckNhdXNhbExNJTJDJTIwQXV0b1Rva2VuaXplciUwQSUwQSUyMyUyMGRlZmluZSUyMHRoZSUyMG1vZGVsJTIwYW5kJTIwdG9rZW5pemVyLiUwQW1vZGVsJTIwJTNEJTIwUGhpRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnBoaS0xXzUlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGcGhpLTFfNSUyMiklMEElMEElMjMlMjBmZWVsJTIwZnJlZSUyMHRvJTIwY2hhbmdlJTIwdGhlJTIwcHJvbXB0JTIwdG8lMjB5b3VyJTIwbGlraW5nLiUwQXByb21wdCUyMCUzRCUyMCUyMklmJTIwSSUyMHdlcmUlMjBhbiUyMEFJJTIwdGhhdCUyMGhhZCUyMGp1c3QlMjBhY2hpZXZlZCUyMiUwQSUwQSUyMyUyMGFwcGx5JTIwdGhlJTIwdG9rZW5pemVyLiUwQXRva2VucyUyMCUzRCUyMHRva2VuaXplcihwcm9tcHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQSUyMyUyMHVzZSUyMHRoZSUyMG1vZGVsJTIwdG8lMjBnZW5lcmF0ZSUyMG5ldyUyMHRva2Vucy4lMEFnZW5lcmF0ZWRfb3V0cHV0JTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoKip0b2tlbnMlMkMlMjB1c2VfY2FjaGUlM0RUcnVlJTJDJTIwbWF4X25ld190b2tlbnMlM0QxMCklMEElMEF0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZF9vdXRwdXQpJTVCMCU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PhiForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define the model and tokenizer.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PhiForCausalLM.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-1_5&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-1_5&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># feel free to change the prompt to your liking.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;If I were an AI that had just achieved&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># apply the tokenizer.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokens = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use the model to generate new tokens.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_output = model.generate(**tokens, use_cache=<span class="hljs-literal">True</span>, max_new_tokens=<span class="hljs-number">10</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_output)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;If I were an AI that had just achieved a breakthrough in machine learning, I would be thrilled&#x27;</span>`,wrap:!1}}),ye=new ee({props:{title:"Combining Phi and Flash Attention 2",local:"combining-phi-and-flash-attention-2",headingTag:"h2"}}),xe=new it({props:{code:"cGlwJTIwaW5zdGFsbCUyMC1VJTIwZmxhc2gtYXR0biUyMC0tbm8tYnVpbGQtaXNvbGF0aW9u",highlighted:"pip install -U flash-attn --no-build-isolation",wrap:!1}}),z=new it({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwUGhpRm9yQ2F1c2FsTE0lMkMlMjBBdXRvVG9rZW5pemVyJTBBJTBBJTIzJTIwZGVmaW5lJTIwdGhlJTIwbW9kZWwlMjBhbmQlMjB0b2tlbml6ZXIlMjBhbmQlMjBwdXNoJTIwdGhlJTIwbW9kZWwlMjBhbmQlMjB0b2tlbnMlMjB0byUyMHRoZSUyMEdQVS4lMEFtb2RlbCUyMCUzRCUyMFBoaUZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZwaGktMV81JTIyJTJDJTIwdG9yY2hfZHR5cGUlM0R0b3JjaC5mbG9hdDE2JTJDJTIwYXR0bl9pbXBsZW1lbnRhdGlvbiUzRCUyMmZsYXNoX2F0dGVudGlvbl8yJTIyKS50byglMjJjdWRhJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnBoaS0xXzUlMjIpJTBBJTBBJTIzJTIwZmVlbCUyMGZyZWUlMjB0byUyMGNoYW5nZSUyMHRoZSUyMHByb21wdCUyMHRvJTIweW91ciUyMGxpa2luZy4lMEFwcm9tcHQlMjAlM0QlMjAlMjJJZiUyMEklMjB3ZXJlJTIwYW4lMjBBSSUyMHRoYXQlMjBoYWQlMjBqdXN0JTIwYWNoaWV2ZWQlMjIlMEElMEElMjMlMjBhcHBseSUyMHRoZSUyMHRva2VuaXplci4lMEF0b2tlbnMlMjAlM0QlMjB0b2tlbml6ZXIocHJvbXB0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikudG8oJTIyY3VkYSUyMiklMEElMEElMjMlMjB1c2UlMjB0aGUlMjBtb2RlbCUyMHRvJTIwZ2VuZXJhdGUlMjBuZXclMjB0b2tlbnMuJTBBZ2VuZXJhdGVkX291dHB1dCUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCoqdG9rZW5zJTJDJTIwdXNlX2NhY2hlJTNEVHJ1ZSUyQyUyMG1heF9uZXdfdG9rZW5zJTNEMTApJTBBJTBBdG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfb3V0cHV0KSU1QjAlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PhiForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define the model and tokenizer and push the model and tokens to the GPU.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PhiForCausalLM.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-1_5&quot;</span>, torch_dtype=torch.float16, attn_implementation=<span class="hljs-string">&quot;flash_attention_2&quot;</span>).to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/phi-1_5&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># feel free to change the prompt to your liking.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;If I were an AI that had just achieved&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># apply the tokenizer.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokens = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(<span class="hljs-string">&quot;cuda&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use the model to generate new tokens.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_output = model.generate(**tokens, use_cache=<span class="hljs-literal">True</span>, max_new_tokens=<span class="hljs-number">10</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_output)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;If I were an AI that had just achieved a breakthrough in machine learning, I would be thrilled&#x27;</span>`,wrap:!1}}),Me=new ee({props:{title:"Expected speedups",local:"expected-speedups",headingTag:"h3"}}),P=new ee({props:{title:"PhiConfig",local:"transformers.PhiConfig",headingTag:"h2"}}),E=new Fe({props:{name:"class transformers.PhiConfig",anchor:"transformers.PhiConfig",parameters:[{name:"vocab_size",val:" = 51200"},{name:"hidden_size",val:" = 2048"},{name:"intermediate_size",val:" = 8192"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 32"},{name:"num_key_value_heads",val:" = None"},{name:"resid_pdrop",val:" = 0.0"},{name:"embd_pdrop",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"max_position_embeddings",val:" = 2048"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"use_cache",val:" = True"},{name:"tie_word_embeddings",val:" = False"},{name:"rope_theta",val:" = 10000.0"},{name:"rope_scaling",val:" = None"},{name:"partial_rotary_factor",val:" = 0.5"},{name:"qk_layernorm",val:" = False"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PhiConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 51200) &#x2014;
Vocabulary size of the Phi model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiModel">PhiModel</a>.`,name:"vocab_size"},{anchor:"transformers.PhiConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimension of the hidden representations.`,name:"hidden_size"},{anchor:"transformers.PhiConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8192) &#x2014;
Dimension of the MLP representations.`,name:"intermediate_size"},{anchor:"transformers.PhiConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer decoder.`,name:"num_hidden_layers"},{anchor:"transformers.PhiConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"num_attention_heads"},{anchor:"transformers.PhiConfig.num_key_value_heads",description:`<strong>num_key_value_heads</strong> (<code>int</code>, <em>optional</em>) &#x2014;
This is the number of key_value heads that should be used to implement Grouped Query Attention. If
<code>num_key_value_heads=num_attention_heads</code>, the model will use Multi Head Attention (MHA), if
<code>num_key_value_heads=1 the model will use Multi Query Attention (MQA) otherwise GQA is used. When converting a multi-head checkpoint to a GQA checkpoint, each group key and value head should be constructed by meanpooling all the original heads within that group. For more details checkout [this paper](https://arxiv.org/pdf/2305.13245.pdf). If it is not specified, will default to </code>num_attention_heads\`.`,name:"num_key_value_heads"},{anchor:"transformers.PhiConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Dropout probability for mlp outputs.`,name:"resid_pdrop"},{anchor:"transformers.PhiConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.PhiConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio after computing the attention scores.`,name:"attention_dropout"},{anchor:"transformers.PhiConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the decoder.`,name:"hidden_act"},{anchor:"transformers.PhiConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Phi-1 and Phi-1.5 supports up to 2048
tokens.`,name:"max_position_embeddings"},{anchor:"transformers.PhiConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.PhiConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-05) &#x2014;
The epsilon used by the rms normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.PhiConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>. Whether to tie weight embeddings or not.`,name:"use_cache"},{anchor:"transformers.PhiConfig.tie_word_embeddings",description:`<strong>tie_word_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to tie weight embeddings`,name:"tie_word_embeddings"},{anchor:"transformers.PhiConfig.rope_theta",description:`<strong>rope_theta</strong> (<code>float</code>, <em>optional</em>, defaults to 10000.0) &#x2014;
The base period of the RoPE embeddings.`,name:"rope_theta"},{anchor:"transformers.PhiConfig.rope_scaling",description:`<strong>rope_scaling</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Dictionary containing the scaling configuration for the RoPE embeddings. Currently supports two scaling
strategies: linear and dynamic. Their scaling factor must be an float greater than 1. The expected format
is <code>{&quot;type&quot;: strategy name, &quot;factor&quot;: scaling factor}</code>. When using this flag, don&#x2019;t update
<code>max_position_embeddings</code> to the expected new maximum. See the following thread for more information on how
these scaling strategies behave:
<a href="https://www.reddit.com/r/LocalPersimmon/comments/14mrgpr/dynamically_scaled_rope_further_increases/" rel="nofollow">https://www.reddit.com/r/LocalPersimmon/comments/14mrgpr/dynamically_scaled_rope_further_increases/</a>. This
is an experimental feature, subject to breaking API changes in future versions.`,name:"rope_scaling"},{anchor:"transformers.PhiConfig.partial_rotary_factor",description:`<strong>partial_rotary_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Percentage of the query and keys which will have rotary embedding.`,name:"partial_rotary_factor"},{anchor:"transformers.PhiConfig.qk_layernorm",description:`<strong>qk_layernorm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to normalize the Queries and Keys after projecting the hidden states.`,name:"qk_layernorm"},{anchor:"transformers.PhiConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Denotes beginning of sequences token id.`,name:"bos_token_id"},{anchor:"transformers.PhiConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Denotes end of sequences token id.`,name:"eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/phi/configuration_phi.py#L32"}}),ie=new wt({props:{anchor:"transformers.PhiConfig.example",$$slots:{default:[Jt]},$$scope:{ctx:$}}}),G=new xt({props:{pytorch:!0,tensorflow:!1,jax:!1,$$slots:{pytorch:[St]},$$scope:{ctx:$}}}),{c(){t=p("meta"),f=l(),a=p("p"),c=l(),_(v.$$.fragment),i=l(),_(k.$$.fragment),Re=l(),V=p("p"),V.innerHTML=_t,Xe=l(),H=p("p"),H.innerHTML=bt,Ee=l(),_(x.$$.fragment),te=l(),pe=p("p"),pe.textContent=Ie,tt=l(),me=p("p"),me.textContent=he,Ze=l(),L=p("p"),L.innerHTML=nt,Z=l(),B=p("p"),B.textContent=lt,J=l(),W=p("p"),W.innerHTML=dt,ue=l(),Ce=p("p"),Ce.innerHTML=ct,A=l(),fe=p("p"),fe.innerHTML=ge,Ae=l(),_(j.$$.fragment),ne=l(),_e=p("ul"),_e.innerHTML=Ge,ot=l(),_(be.$$.fragment),Q=l(),_(O.$$.fragment),oe=l(),_(se.$$.fragment),C=l(),_(S.$$.fragment),Qe=l(),_(N.$$.fragment),st=l(),_(ye.$$.fragment),Te=l(),Pe=p("p"),Pe.textContent=pt,we=l(),_(xe.$$.fragment),Oe=l(),R=p("p"),R.textContent=yt,Ye=l(),X=p("p"),X.textContent=Tt,De=l(),_(z.$$.fragment),ae=l(),_(Me.$$.fragment),ve=l(),je=p("p"),je.innerHTML=mt,Y=l(),D=p("div"),D.innerHTML=ze,Le=l(),_(P.$$.fragment),re=l(),U=p("div"),_(E.$$.fragment),ht=l(),Je=p("p"),Je.innerHTML=Be,ut=l(),Ue=p("p"),Ue.innerHTML=We,ft=l(),_(ie.$$.fragment),F=l(),_(G.$$.fragment),Ke=l(),le=p("p"),this.h()},l(e){const s=Ct("svelte-u9bgzb",document.head);t=m(s,"META",{name:!0,content:!0}),s.forEach(n),f=d(e),a=m(e,"P",{}),de(a).forEach(n),c=d(e),b(v.$$.fragment,e),i=d(e),b(k.$$.fragment,e),Re=d(e),V=m(e,"P",{"data-svelte-h":!0}),u(V)!=="svelte-1yhjn85"&&(V.innerHTML=_t),Xe=d(e),H=m(e,"P",{"data-svelte-h":!0}),u(H)!=="svelte-1fvv6h4"&&(H.innerHTML=bt),Ee=d(e),b(x.$$.fragment,e),te=d(e),pe=m(e,"P",{"data-svelte-h":!0}),u(pe)!=="svelte-x3eyc9"&&(pe.textContent=Ie),tt=d(e),me=m(e,"P",{"data-svelte-h":!0}),u(me)!=="svelte-tgcdxr"&&(me.textContent=he),Ze=d(e),L=m(e,"P",{"data-svelte-h":!0}),u(L)!=="svelte-187tpcl"&&(L.innerHTML=nt),Z=d(e),B=m(e,"P",{"data-svelte-h":!0}),u(B)!=="svelte-10n16wm"&&(B.textContent=lt),J=d(e),W=m(e,"P",{"data-svelte-h":!0}),u(W)!=="svelte-1wjkxlu"&&(W.innerHTML=dt),ue=d(e),Ce=m(e,"P",{"data-svelte-h":!0}),u(Ce)!=="svelte-1xwsyyw"&&(Ce.innerHTML=ct),A=d(e),fe=m(e,"P",{"data-svelte-h":!0}),u(fe)!=="svelte-n44v4x"&&(fe.innerHTML=ge),Ae=d(e),b(j.$$.fragment,e),ne=d(e),_e=m(e,"UL",{"data-svelte-h":!0}),u(_e)!=="svelte-kasjqy"&&(_e.innerHTML=Ge),ot=d(e),b(be.$$.fragment,e),Q=d(e),b(O.$$.fragment,e),oe=d(e),b(se.$$.fragment,e),C=d(e),b(S.$$.fragment,e),Qe=d(e),b(N.$$.fragment,e),st=d(e),b(ye.$$.fragment,e),Te=d(e),Pe=m(e,"P",{"data-svelte-h":!0}),u(Pe)!=="svelte-o3pzzu"&&(Pe.textContent=pt),we=d(e),b(xe.$$.fragment,e),Oe=d(e),R=m(e,"P",{"data-svelte-h":!0}),u(R)!=="svelte-enej3y"&&(R.textContent=yt),Ye=d(e),X=m(e,"P",{"data-svelte-h":!0}),u(X)!=="svelte-14hchid"&&(X.textContent=Tt),De=d(e),b(z.$$.fragment,e),ae=d(e),b(Me.$$.fragment,e),ve=d(e),je=m(e,"P",{"data-svelte-h":!0}),u(je)!=="svelte-myov30"&&(je.innerHTML=mt),Y=d(e),D=m(e,"DIV",{style:!0,"data-svelte-h":!0}),u(D)!=="svelte-1kvqy0w"&&(D.innerHTML=ze),Le=d(e),b(P.$$.fragment,e),re=d(e),U=m(e,"DIV",{class:!0});var q=de(U);b(E.$$.fragment,q),ht=d(q),Je=m(q,"P",{"data-svelte-h":!0}),u(Je)!=="svelte-18zesgb"&&(Je.innerHTML=Be),ut=d(q),Ue=m(q,"P",{"data-svelte-h":!0}),u(Ue)!=="svelte-o55m63"&&(Ue.innerHTML=We),ft=d(q),b(ie.$$.fragment,q),q.forEach(n),F=d(e),b(G.$$.fragment,e),Ke=d(e),le=m(e,"P",{}),de(le).forEach(n),this.h()},h(){ce(t,"name","hf:doc:metadata"),ce(t,"content",Vt),Pt(D,"text-align","center"),ce(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){h(document.head,t),r(e,f,s),r(e,a,s),r(e,c,s),y(v,e,s),r(e,i,s),y(k,e,s),r(e,Re,s),r(e,V,s),r(e,Xe,s),r(e,H,s),r(e,Ee,s),y(x,e,s),r(e,te,s),r(e,pe,s),r(e,tt,s),r(e,me,s),r(e,Ze,s),r(e,L,s),r(e,Z,s),r(e,B,s),r(e,J,s),r(e,W,s),r(e,ue,s),r(e,Ce,s),r(e,A,s),r(e,fe,s),r(e,Ae,s),y(j,e,s),r(e,ne,s),r(e,_e,s),r(e,ot,s),y(be,e,s),r(e,Q,s),y(O,e,s),r(e,oe,s),y(se,e,s),r(e,C,s),y(S,e,s),r(e,Qe,s),y(N,e,s),r(e,st,s),y(ye,e,s),r(e,Te,s),r(e,Pe,s),r(e,we,s),y(xe,e,s),r(e,Oe,s),r(e,R,s),r(e,Ye,s),r(e,X,s),r(e,De,s),y(z,e,s),r(e,ae,s),y(Me,e,s),r(e,ve,s),r(e,je,s),r(e,Y,s),r(e,D,s),r(e,Le,s),y(P,e,s),r(e,re,s),r(e,U,s),y(E,U,null),h(U,ht),h(U,Je),h(U,ut),h(U,Ue),h(U,ft),y(ie,U,null),r(e,F,s),y(G,e,s),r(e,Ke,s),r(e,le,s),at=!0},p(e,[s]){const q={};s&2&&(q.$$scope={dirty:s,ctx:e}),O.$set(q);const ke={};s&2&&(ke.$$scope={dirty:s,ctx:e}),ie.$set(ke);const rt={};s&2&&(rt.$$scope={dirty:s,ctx:e}),G.$set(rt)},i(e){at||(T(v.$$.fragment,e),T(k.$$.fragment,e),T(x.$$.fragment,e),T(j.$$.fragment,e),T(be.$$.fragment,e),T(O.$$.fragment,e),T(se.$$.fragment,e),T(S.$$.fragment,e),T(N.$$.fragment,e),T(ye.$$.fragment,e),T(xe.$$.fragment,e),T(z.$$.fragment,e),T(Me.$$.fragment,e),T(P.$$.fragment,e),T(E.$$.fragment,e),T(ie.$$.fragment,e),T(G.$$.fragment,e),at=!0)},o(e){w(v.$$.fragment,e),w(k.$$.fragment,e),w(x.$$.fragment,e),w(j.$$.fragment,e),w(be.$$.fragment,e),w(O.$$.fragment,e),w(se.$$.fragment,e),w(S.$$.fragment,e),w(N.$$.fragment,e),w(ye.$$.fragment,e),w(xe.$$.fragment,e),w(z.$$.fragment,e),w(Me.$$.fragment,e),w(P.$$.fragment,e),w(E.$$.fragment,e),w(ie.$$.fragment,e),w(G.$$.fragment,e),at=!1},d(e){e&&(n(f),n(a),n(c),n(i),n(Re),n(V),n(Xe),n(H),n(Ee),n(te),n(pe),n(tt),n(me),n(Ze),n(L),n(Z),n(B),n(J),n(W),n(ue),n(Ce),n(A),n(fe),n(Ae),n(ne),n(_e),n(ot),n(Q),n(oe),n(C),n(Qe),n(st),n(Te),n(Pe),n(we),n(Oe),n(R),n(Ye),n(X),n(De),n(ae),n(ve),n(je),n(Y),n(D),n(Le),n(re),n(U),n(F),n(Ke),n(le)),n(t),M(v,e),M(k,e),M(x,e),M(j,e),M(be,e),M(O,e),M(se,e),M(S,e),M(N,e),M(ye,e),M(xe,e),M(z,e),M(Me,e),M(P,e),M(E),M(ie),M(G,e)}}}const Vt='{"title":"Phi","local":"phi","sections":[{"title":"Overview","local":"overview","sections":[{"title":"Summary","local":"summary","sections":[],"depth":3}],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"How to use Phi-2","local":"how-to-use-phi-2","sections":[{"title":"Example :","local":"example-","sections":[],"depth":3}],"depth":2},{"title":"Combining Phi and Flash Attention 2","local":"combining-phi-and-flash-attention-2","sections":[{"title":"Expected speedups","local":"expected-speedups","sections":[],"depth":3}],"depth":2},{"title":"PhiConfig","local":"transformers.PhiConfig","sections":[],"depth":2},{"title":"PhiModel","local":"transformers.PhiModel","sections":[],"depth":2},{"title":"PhiForCausalLM","local":"transformers.PhiForCausalLM","sections":[],"depth":2},{"title":"PhiForSequenceClassification","local":"transformers.PhiForSequenceClassification","sections":[],"depth":2},{"title":"PhiForTokenClassification","local":"transformers.PhiForTokenClassification","sections":[],"depth":2}],"depth":1}';function Ht($){return vt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dt extends kt{constructor(t){super(),$t(this,t,Ht,qt,Mt,{})}}export{Dt as component};
