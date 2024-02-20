import{s as Xt,o as Ft,n as Xe}from"../chunks/scheduler.9bc65507.js";import{S as zt,i as qt,g as l,s as r,r as b,A as jt,h as c,f as d,c as i,j as ee,u as k,x as g,k as te,y as s,a as p,v as T,d as y,t as v,w}from"../chunks/index.707bf1b6.js";import{T as We}from"../chunks/Tip.c2ecdbf4.js";import{D as pe}from"../chunks/Docstring.17db21ae.js";import{C as Oe}from"../chunks/CodeBlock.54a9f38d.js";import{F as Pt,M as yt}from"../chunks/Markdown.fef84341.js";import{E as Ee}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Fe}from"../chunks/Heading.342b1fa6.js";function It(G){let e,m="Example:",t,o,f;return o=new Oe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFhHTE1Nb2RlbCUyQyUyMFhHTE1Db25maWclMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwWEdMTSUyMGZhY2Vib29rJTJGeGdsbS01NjRNJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFhHTE1Db25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMGZyb20lMjB0aGUlMjBmYWNlYm9vayUyRnhnbG0tNTY0TSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwWEdMTU1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMModel, XGLMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XGLM facebook/xglm-564M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XGLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/xglm-564M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XGLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=r(),b(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=m),t=i(n),k(o.$$.fragment,n)},m(n,M){p(n,e,M),p(n,t,M),T(o,n,M),f=!0},p:Xe,i(n){f||(y(o.$$.fragment,n),f=!0)},o(n){v(o.$$.fragment,n),f=!1},d(n){n&&(d(e),d(t)),w(o,n)}}}function Nt(G){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,o){p(t,e,o)},p:Xe,d(t){t&&d(e)}}}function Wt(G){let e,m="Example:",t,o,f;return o=new Oe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYR0xNTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGeGdsbS01NjRNJTIyKSUwQW1vZGVsJTIwJTNEJTIwWEdMTU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRnhnbG0tNTY0TSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XGLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=r(),b(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=m),t=i(n),k(o.$$.fragment,n)},m(n,M){p(n,e,M),p(n,t,M),T(o,n,M),f=!0},p:Xe,i(n){f||(y(o.$$.fragment,n),f=!0)},o(n){v(o.$$.fragment,n),f=!1},d(n){n&&(d(e),d(t)),w(o,n)}}}function Ht(G){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,o){p(t,e,o)},p:Xe,d(t){t&&d(e)}}}function Ut(G){let e,m="Example:",t,o,f;return o=new Oe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFhHTE1Gb3JDYXVzYWxMTSUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGeGdsbS01NjRNJTIyKSUwQW1vZGVsJTIwJTNEJTIwWEdMTUZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRnhnbG0tNTY0TSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XGLMForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XGLMForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=r(),b(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=m),t=i(n),k(o.$$.fragment,n)},m(n,M){p(n,e,M),p(n,t,M),T(o,n,M),f=!0},p:Xe,i(n){f||(y(o.$$.fragment,n),f=!0)},o(n){v(o.$$.fragment,n),f=!1},d(n){n&&(d(e),d(t)),w(o,n)}}}function Jt(G){let e,m,t,o,f,n,M=`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ne,z,E=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,oe,F,A="Transformer decoder consisting of <em>config.num_layers</em> layers. Each layer is a <code>XGLMDecoderLayer</code>",S,h,j,V,I,ye='The <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMModel">XGLMModel</a> forward method, overrides the <code>__call__</code> special method.',fe,O,Ge,Z,me,D,R,U,W,H,q,le=`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,ve,ue,Le=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,we,he,ke=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ge,B,_e,P,Q,se='The <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMForCausalLM">XGLMForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',ae,re,xe,ie,K;return e=new Fe({props:{title:"XGLMModel",local:"transformers.XGLMModel",headingTag:"h2"}}),o=new pe({props:{name:"class transformers.XGLMModel",anchor:"transformers.XGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"embed_tokens",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; XGLMConfig`,name:"config"},{anchor:"transformers.XGLMModel.embed_tokens",description:"<strong>embed_tokens</strong> (nn.Embedding) &#x2014; output embedding",name:"embed_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_xglm.py#L476"}}),j=new pe({props:{name:"forward",anchor:"transformers.XGLMModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XGLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XGLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XGLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XGLMModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XGLMModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, encoder_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing cross-attention on padding tokens indices of encoder input_ids. Mask values
selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.XGLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XGLMModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.XGLMModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XGLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XGLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XGLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XGLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_xglm.py#L520",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
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
`}}),O=new We({props:{$$slots:{default:[Nt]},$$scope:{ctx:G}}}),Z=new Ee({props:{anchor:"transformers.XGLMModel.forward.example",$$slots:{default:[Wt]},$$scope:{ctx:G}}}),D=new Fe({props:{title:"XGLMForCausalLM",local:"transformers.XGLMForCausalLM",headingTag:"h2"}}),W=new pe({props:{name:"class transformers.XGLMForCausalLM",anchor:"transformers.XGLMForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_xglm.py#L682"}}),_e=new pe({props:{name:"forward",anchor:"transformers.XGLMForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XGLMForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XGLMForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XGLMForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XGLMForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XGLMForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, encoder_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing cross-attention on padding tokens indices of encoder input_ids. Mask values
selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.XGLMForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XGLMForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.XGLMForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XGLMForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XGLMForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XGLMForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XGLMForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XGLMForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_xglm.py#L713",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
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
`}}),re=new We({props:{$$slots:{default:[Ht]},$$scope:{ctx:G}}}),ie=new Ee({props:{anchor:"transformers.XGLMForCausalLM.forward.example",$$slots:{default:[Ut]},$$scope:{ctx:G}}}),{c(){b(e.$$.fragment),m=r(),t=l("div"),b(o.$$.fragment),f=r(),n=l("p"),n.innerHTML=M,ne=r(),z=l("p"),z.innerHTML=E,oe=r(),F=l("p"),F.innerHTML=A,S=r(),h=l("div"),b(j.$$.fragment),V=r(),I=l("p"),I.innerHTML=ye,fe=r(),b(O.$$.fragment),Ge=r(),b(Z.$$.fragment),me=r(),b(D.$$.fragment),R=r(),U=l("div"),b(W.$$.fragment),H=r(),q=l("p"),q.textContent=le,ve=r(),ue=l("p"),ue.innerHTML=Le,we=r(),he=l("p"),he.innerHTML=ke,ge=r(),B=l("div"),b(_e.$$.fragment),P=r(),Q=l("p"),Q.innerHTML=se,ae=r(),b(re.$$.fragment),xe=r(),b(ie.$$.fragment),this.h()},l(_){k(e.$$.fragment,_),m=i(_),t=c(_,"DIV",{class:!0});var L=ee(t);k(o.$$.fragment,L),f=i(L),n=c(L,"P",{"data-svelte-h":!0}),g(n)!=="svelte-1g6yvln"&&(n.innerHTML=M),ne=i(L),z=c(L,"P",{"data-svelte-h":!0}),g(z)!=="svelte-hswkmf"&&(z.innerHTML=E),oe=i(L),F=c(L,"P",{"data-svelte-h":!0}),g(F)!=="svelte-1tiprja"&&(F.innerHTML=A),S=i(L),h=c(L,"DIV",{class:!0});var N=ee(h);k(j.$$.fragment,N),V=i(N),I=c(N,"P",{"data-svelte-h":!0}),g(I)!=="svelte-at3m71"&&(I.innerHTML=ye),fe=i(N),k(O.$$.fragment,N),Ge=i(N),k(Z.$$.fragment,N),N.forEach(d),L.forEach(d),me=i(_),k(D.$$.fragment,_),R=i(_),U=c(_,"DIV",{class:!0});var Y=ee(U);k(W.$$.fragment,Y),H=i(Y),q=c(Y,"P",{"data-svelte-h":!0}),g(q)!=="svelte-11br4fd"&&(q.textContent=le),ve=i(Y),ue=c(Y,"P",{"data-svelte-h":!0}),g(ue)!=="svelte-6pahdo"&&(ue.innerHTML=Le),we=i(Y),he=c(Y,"P",{"data-svelte-h":!0}),g(he)!=="svelte-hswkmf"&&(he.innerHTML=ke),ge=i(Y),B=c(Y,"DIV",{class:!0});var u=ee(B);k(_e.$$.fragment,u),P=i(u),Q=c(u,"P",{"data-svelte-h":!0}),g(Q)!=="svelte-pm1eix"&&(Q.innerHTML=se),ae=i(u),k(re.$$.fragment,u),xe=i(u),k(ie.$$.fragment,u),u.forEach(d),Y.forEach(d),this.h()},h(){te(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(_,L){T(e,_,L),p(_,m,L),p(_,t,L),T(o,t,null),s(t,f),s(t,n),s(t,ne),s(t,z),s(t,oe),s(t,F),s(t,S),s(t,h),T(j,h,null),s(h,V),s(h,I),s(h,fe),T(O,h,null),s(h,Ge),T(Z,h,null),p(_,me,L),T(D,_,L),p(_,R,L),p(_,U,L),T(W,U,null),s(U,H),s(U,q),s(U,ve),s(U,ue),s(U,we),s(U,he),s(U,ge),s(U,B),T(_e,B,null),s(B,P),s(B,Q),s(B,ae),T(re,B,null),s(B,xe),T(ie,B,null),K=!0},p(_,L){const N={};L&2&&(N.$$scope={dirty:L,ctx:_}),O.$set(N);const Y={};L&2&&(Y.$$scope={dirty:L,ctx:_}),Z.$set(Y);const u={};L&2&&(u.$$scope={dirty:L,ctx:_}),re.$set(u);const $={};L&2&&($.$$scope={dirty:L,ctx:_}),ie.$set($)},i(_){K||(y(e.$$.fragment,_),y(o.$$.fragment,_),y(j.$$.fragment,_),y(O.$$.fragment,_),y(Z.$$.fragment,_),y(D.$$.fragment,_),y(W.$$.fragment,_),y(_e.$$.fragment,_),y(re.$$.fragment,_),y(ie.$$.fragment,_),K=!0)},o(_){v(e.$$.fragment,_),v(o.$$.fragment,_),v(j.$$.fragment,_),v(O.$$.fragment,_),v(Z.$$.fragment,_),v(D.$$.fragment,_),v(W.$$.fragment,_),v(_e.$$.fragment,_),v(re.$$.fragment,_),v(ie.$$.fragment,_),K=!1},d(_){_&&(d(m),d(t),d(me),d(R),d(U)),w(e,_),w(o),w(j),w(O),w(Z),w(D,_),w(W),w(_e),w(re),w(ie)}}}function Bt(G){let e,m;return e=new yt({props:{$$slots:{default:[Jt]},$$scope:{ctx:G}}}),{c(){b(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){T(e,t,o),m=!0},p(t,o){const f={};o&2&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){m||(y(e.$$.fragment,t),m=!0)},o(t){v(e.$$.fragment,t),m=!1},d(t){w(e,t)}}}function Zt(G){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,f="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,M,ne=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,E,oe=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,F,A,S=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,t=r(),o=l("ul"),o.innerHTML=f,n=r(),M=l("p"),M.innerHTML=ne,z=r(),E=l("ul"),E.innerHTML=oe,F=r(),A=l("p"),A.innerHTML=S},l(h){e=c(h,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),t=i(h),o=c(h,"UL",{"data-svelte-h":!0}),g(o)!=="svelte-qm1t26"&&(o.innerHTML=f),n=i(h),M=c(h,"P",{"data-svelte-h":!0}),g(M)!=="svelte-1v9qsc5"&&(M.innerHTML=ne),z=i(h),E=c(h,"UL",{"data-svelte-h":!0}),g(E)!=="svelte-15scerc"&&(E.innerHTML=oe),F=i(h),A=c(h,"P",{"data-svelte-h":!0}),g(A)!=="svelte-1an3odd"&&(A.innerHTML=S)},m(h,j){p(h,e,j),p(h,t,j),p(h,o,j),p(h,n,j),p(h,M,j),p(h,z,j),p(h,E,j),p(h,F,j),p(h,A,j)},p:Xe,d(h){h&&(d(e),d(t),d(o),d(n),d(M),d(z),d(E),d(F),d(A))}}}function At(G){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,o){p(t,e,o)},p:Xe,d(t){t&&d(e)}}}function Et(G){let e,m="Example:",t,o,f;return o=new Oe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhHTE1Nb2RlbCUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZ4Z2xtLTU2NE0lMjIpJTBBbW9kZWwlMjAlM0QlMjBURlhHTE1Nb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZ4Z2xtLTU2NE0lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXGLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=r(),b(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=m),t=i(n),k(o.$$.fragment,n)},m(n,M){p(n,e,M),p(n,t,M),T(o,n,M),f=!0},p:Xe,i(n){f||(y(o.$$.fragment,n),f=!0)},o(n){v(o.$$.fragment,n),f=!1},d(n){n&&(d(e),d(t)),w(o,n)}}}function Ot(G){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,f="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,M,ne=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,E,oe=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,F,A,S=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,t=r(),o=l("ul"),o.innerHTML=f,n=r(),M=l("p"),M.innerHTML=ne,z=r(),E=l("ul"),E.innerHTML=oe,F=r(),A=l("p"),A.innerHTML=S},l(h){e=c(h,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),t=i(h),o=c(h,"UL",{"data-svelte-h":!0}),g(o)!=="svelte-qm1t26"&&(o.innerHTML=f),n=i(h),M=c(h,"P",{"data-svelte-h":!0}),g(M)!=="svelte-1v9qsc5"&&(M.innerHTML=ne),z=i(h),E=c(h,"UL",{"data-svelte-h":!0}),g(E)!=="svelte-15scerc"&&(E.innerHTML=oe),F=i(h),A=c(h,"P",{"data-svelte-h":!0}),g(A)!=="svelte-1an3odd"&&(A.innerHTML=S)},m(h,j){p(h,e,j),p(h,t,j),p(h,o,j),p(h,n,j),p(h,M,j),p(h,z,j),p(h,E,j),p(h,F,j),p(h,A,j)},p:Xe,d(h){h&&(d(e),d(t),d(o),d(n),d(M),d(z),d(E),d(F),d(A))}}}function Rt(G){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,o){p(t,e,o)},p:Xe,d(t){t&&d(e)}}}function St(G){let e,m="Example:",t,o,f;return o=new Oe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhHTE1Gb3JDYXVzYWxMTSUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZ4Z2xtLTU2NE0lMjIpJTBBbW9kZWwlMjAlM0QlMjBURlhHTE1Gb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZ4Z2xtLTU2NE0lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXGLMForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXGLMForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=r(),b(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=m),t=i(n),k(o.$$.fragment,n)},m(n,M){p(n,e,M),p(n,t,M),T(o,n,M),f=!0},p:Xe,i(n){f||(y(o.$$.fragment,n),f=!0)},o(n){v(o.$$.fragment,n),f=!1},d(n){n&&(d(e),d(t)),w(o,n)}}}function Vt(G){let e,m,t,o,f,n,M=`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ne,z,E=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,oe,F,A,S,h="Transformer decoder consisting of <em>config.num_layers</em> layers. Each layer is a <code>TFXGLMDecoderLayer</code>",j,V,I,ye,fe,O='The <a href="/docs/transformers/main/en/model_doc/xglm#transformers.TFXGLMModel">TFXGLMModel</a> forward method, overrides the <code>__call__</code> special method.',Ge,Z,me,D,R,U,W,H,q,le,ve,ue=`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,Le,we,he=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ke,ge,B=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,_e,P,Q,se,ae,re,xe,ie='The <a href="/docs/transformers/main/en/model_doc/xglm#transformers.TFXGLMForCausalLM">TFXGLMForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',K,_,L,N,Y;return e=new Fe({props:{title:"TFXGLMModel",local:"transformers.TFXGLMModel",headingTag:"h2"}}),o=new pe({props:{name:"class transformers.TFXGLMModel",anchor:"transformers.TFXGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"embed_tokens",val:": Optional[TFSharedEmbeddings] = None"},{name:"*inputs",val:": Any"},{name:"**kwargs",val:": Any"}],parametersDescription:[{anchor:"transformers.TFXGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; XGLMConfig
embed_tokens &#x2014; [TFSharedEmbeddings]: output embedding`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_tf_xglm.py#L792"}}),F=new We({props:{$$slots:{default:[Zt]},$$scope:{ctx:G}}}),I=new pe({props:{name:"call",anchor:"transformers.TFXGLMModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"},{name:"**kwargs",val:": Any"}],parametersDescription:[{anchor:"transformers.TFXGLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXGLMModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXGLMModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXGLMModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFXGLMModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing cross-attention on padding tokens indices of encoder input_ids. Mask values
selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.TFXGLMModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXGLMModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFXGLMModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFXGLMModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXGLMModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFXGLMModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXGLMModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXGLMModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXGLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_tf_xglm.py#L812",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Z=new We({props:{$$slots:{default:[At]},$$scope:{ctx:G}}}),D=new Ee({props:{anchor:"transformers.TFXGLMModel.call.example",$$slots:{default:[Et]},$$scope:{ctx:G}}}),U=new Fe({props:{title:"TFXGLMForCausalLM",local:"transformers.TFXGLMForCausalLM",headingTag:"h2"}}),q=new pe({props:{name:"class transformers.TFXGLMForCausalLM",anchor:"transformers.TFXGLMForCausalLM",parameters:[{name:"config",val:": XGLMConfig"},{name:"embed_tokens",val:": Optional[TFSharedEmbeddings] = None"},{name:"*inputs",val:": Any"},{name:"**kwargs",val:": Any"}],parametersDescription:[{anchor:"transformers.TFXGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_tf_xglm.py#L864"}}),P=new We({props:{$$slots:{default:[Ot]},$$scope:{ctx:G}}}),ae=new pe({props:{name:"call",anchor:"transformers.TFXGLMForCausalLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"},{name:"**kwargs",val:": Any"}],parametersDescription:[{anchor:"transformers.TFXGLMForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXGLMForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXGLMForCausalLM.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFXGLMForCausalLM.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing cross-attention on padding tokens indices of encoder input_ids. Mask values
selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFXGLMForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXGLMForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFXGLMForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXGLMForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXGLMForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXGLMForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXGLMForCausalLM.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_tf_xglm.py#L922",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) — Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code>: A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) — Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_=new We({props:{$$slots:{default:[Rt]},$$scope:{ctx:G}}}),N=new Ee({props:{anchor:"transformers.TFXGLMForCausalLM.call.example",$$slots:{default:[St]},$$scope:{ctx:G}}}),{c(){b(e.$$.fragment),m=r(),t=l("div"),b(o.$$.fragment),f=r(),n=l("p"),n.innerHTML=M,ne=r(),z=l("p"),z.innerHTML=E,oe=r(),b(F.$$.fragment),A=r(),S=l("p"),S.innerHTML=h,j=r(),V=l("div"),b(I.$$.fragment),ye=r(),fe=l("p"),fe.innerHTML=O,Ge=r(),b(Z.$$.fragment),me=r(),b(D.$$.fragment),R=r(),b(U.$$.fragment),W=r(),H=l("div"),b(q.$$.fragment),le=r(),ve=l("p"),ve.textContent=ue,Le=r(),we=l("p"),we.innerHTML=he,ke=r(),ge=l("p"),ge.innerHTML=B,_e=r(),b(P.$$.fragment),Q=r(),se=l("div"),b(ae.$$.fragment),re=r(),xe=l("p"),xe.innerHTML=ie,K=r(),b(_.$$.fragment),L=r(),b(N.$$.fragment),this.h()},l(u){k(e.$$.fragment,u),m=i(u),t=c(u,"DIV",{class:!0});var $=ee(t);k(o.$$.fragment,$),f=i($),n=c($,"P",{"data-svelte-h":!0}),g(n)!=="svelte-1doq5zv"&&(n.innerHTML=M),ne=i($),z=c($,"P",{"data-svelte-h":!0}),g(z)!=="svelte-1be7e3c"&&(z.innerHTML=E),oe=i($),k(F.$$.fragment,$),A=i($),S=c($,"P",{"data-svelte-h":!0}),g(S)!=="svelte-f8ft2s"&&(S.innerHTML=h),j=i($),V=c($,"DIV",{class:!0});var Me=ee(V);k(I.$$.fragment,Me),ye=i(Me),fe=c(Me,"P",{"data-svelte-h":!0}),g(fe)!=="svelte-1lnizux"&&(fe.innerHTML=O),Ge=i(Me),k(Z.$$.fragment,Me),me=i(Me),k(D.$$.fragment,Me),Me.forEach(d),$.forEach(d),R=i(u),k(U.$$.fragment,u),W=i(u),H=c(u,"DIV",{class:!0});var J=ee(H);k(q.$$.fragment,J),le=i(J),ve=c(J,"P",{"data-svelte-h":!0}),g(ve)!=="svelte-11br4fd"&&(ve.textContent=ue),Le=i(J),we=c(J,"P",{"data-svelte-h":!0}),g(we)!=="svelte-1qaxm70"&&(we.innerHTML=he),ke=i(J),ge=c(J,"P",{"data-svelte-h":!0}),g(ge)!=="svelte-1be7e3c"&&(ge.innerHTML=B),_e=i(J),k(P.$$.fragment,J),Q=i(J),se=c(J,"DIV",{class:!0});var be=ee(se);k(ae.$$.fragment,be),re=i(be),xe=c(be,"P",{"data-svelte-h":!0}),g(xe)!=="svelte-wfxahx"&&(xe.innerHTML=ie),K=i(be),k(_.$$.fragment,be),L=i(be),k(N.$$.fragment,be),be.forEach(d),J.forEach(d),this.h()},h(){te(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(u,$){T(e,u,$),p(u,m,$),p(u,t,$),T(o,t,null),s(t,f),s(t,n),s(t,ne),s(t,z),s(t,oe),T(F,t,null),s(t,A),s(t,S),s(t,j),s(t,V),T(I,V,null),s(V,ye),s(V,fe),s(V,Ge),T(Z,V,null),s(V,me),T(D,V,null),p(u,R,$),T(U,u,$),p(u,W,$),p(u,H,$),T(q,H,null),s(H,le),s(H,ve),s(H,Le),s(H,we),s(H,ke),s(H,ge),s(H,_e),T(P,H,null),s(H,Q),s(H,se),T(ae,se,null),s(se,re),s(se,xe),s(se,K),T(_,se,null),s(se,L),T(N,se,null),Y=!0},p(u,$){const Me={};$&2&&(Me.$$scope={dirty:$,ctx:u}),F.$set(Me);const J={};$&2&&(J.$$scope={dirty:$,ctx:u}),Z.$set(J);const be={};$&2&&(be.$$scope={dirty:$,ctx:u}),D.$set(be);const x={};$&2&&(x.$$scope={dirty:$,ctx:u}),P.$set(x);const X={};$&2&&(X.$$scope={dirty:$,ctx:u}),_.$set(X);const de={};$&2&&(de.$$scope={dirty:$,ctx:u}),N.$set(de)},i(u){Y||(y(e.$$.fragment,u),y(o.$$.fragment,u),y(F.$$.fragment,u),y(I.$$.fragment,u),y(Z.$$.fragment,u),y(D.$$.fragment,u),y(U.$$.fragment,u),y(q.$$.fragment,u),y(P.$$.fragment,u),y(ae.$$.fragment,u),y(_.$$.fragment,u),y(N.$$.fragment,u),Y=!0)},o(u){v(e.$$.fragment,u),v(o.$$.fragment,u),v(F.$$.fragment,u),v(I.$$.fragment,u),v(Z.$$.fragment,u),v(D.$$.fragment,u),v(U.$$.fragment,u),v(q.$$.fragment,u),v(P.$$.fragment,u),v(ae.$$.fragment,u),v(_.$$.fragment,u),v(N.$$.fragment,u),Y=!1},d(u){u&&(d(m),d(t),d(R),d(W),d(H)),w(e,u),w(o),w(F),w(I),w(Z),w(D),w(U,u),w(q),w(P),w(ae),w(_),w(N)}}}function Dt(G){let e,m;return e=new yt({props:{$$slots:{default:[Vt]},$$scope:{ctx:G}}}),{c(){b(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){T(e,t,o),m=!0},p(t,o){const f={};o&2&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){m||(y(e.$$.fragment,t),m=!0)},o(t){v(e.$$.fragment,t),m=!1},d(t){w(e,t)}}}function Qt(G){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,o){p(t,e,o)},p:Xe,d(t){t&&d(e)}}}function Yt(G){let e,m="Example:",t,o,f;return o=new Oe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4WEdMTU1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZ4Z2xtLTU2NE0lMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4WEdMTU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRnhnbG0tNTY0TSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxXGLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=r(),b(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=m),t=i(n),k(o.$$.fragment,n)},m(n,M){p(n,e,M),p(n,t,M),T(o,n,M),f=!0},p:Xe,i(n){f||(y(o.$$.fragment,n),f=!0)},o(n){v(o.$$.fragment,n),f=!1},d(n){n&&(d(e),d(t)),w(o,n)}}}function Kt(G){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=c(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,o){p(t,e,o)},p:Xe,d(t){t&&d(e)}}}function en(G){let e,m="Example:",t,o,f;return o=new Oe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4WEdMTUZvckNhdXNhbExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZ4Z2xtLTU2NE0lMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4WEdMTUZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRnhnbG0tNTY0TSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQSUyMyUyMHJldHJpZXZlJTIwbG9ndHMlMjBmb3IlMjBuZXh0JTIwdG9rZW4lMEFuZXh0X3Rva2VuX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRzJTVCJTNBJTJDJTIwLTElNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxXGLMForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXGLMForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=r(),b(o.$$.fragment)},l(n){e=c(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=m),t=i(n),k(o.$$.fragment,n)},m(n,M){p(n,e,M),p(n,t,M),T(o,n,M),f=!0},p:Xe,i(n){f||(y(o.$$.fragment,n),f=!0)},o(n){v(o.$$.fragment,n),f=!1},d(n){n&&(d(e),d(t)),w(o,n)}}}function tn(G){let e,m,t,o,f,n,M=`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ne,z,E=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,oe,F,A="Finally, this model supports inherent JAX features such as:",S,h,j='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',V,I,ye,fe,O,Ge="The <code>FlaxXGLMPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Z,me,D,R,U,W,H,q,le,ve,ue,Le=`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,we,he,ke=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ge,B,_e=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,P,Q,se="Finally, this model supports inherent JAX features such as:",ae,re,xe='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',ie,K,_,L,N,Y="The <code>FlaxXGLMPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",u,$,Me,J,be;return e=new Fe({props:{title:"FlaxXGLMModel",local:"transformers.FlaxXGLMModel",headingTag:"h2"}}),o=new pe({props:{name:"class transformers.FlaxXGLMModel",anchor:"transformers.FlaxXGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_flax_xglm.py#L685"}}),ye=new pe({props:{name:"__call__",anchor:"transformers.FlaxXGLMModel.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxXGLMModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXGLMModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXGLMModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXGLMModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxXGLMModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxXGLMModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_flax_xglm.py#L611",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new We({props:{$$slots:{default:[Qt]},$$scope:{ctx:G}}}),R=new Ee({props:{anchor:"transformers.FlaxXGLMModel.__call__.example",$$slots:{default:[Yt]},$$scope:{ctx:G}}}),W=new Fe({props:{title:"FlaxXGLMForCausalLM",local:"transformers.FlaxXGLMForCausalLM",headingTag:"h2"}}),le=new pe({props:{name:"class transformers.FlaxXGLMForCausalLM",anchor:"transformers.FlaxXGLMForCausalLM",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_flax_xglm.py#L759"}}),_=new pe({props:{name:"__call__",anchor:"transformers.FlaxXGLMForCausalLM.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/modeling_flax_xglm.py#L611",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$=new We({props:{$$slots:{default:[Kt]},$$scope:{ctx:G}}}),J=new Ee({props:{anchor:"transformers.FlaxXGLMForCausalLM.__call__.example",$$slots:{default:[en]},$$scope:{ctx:G}}}),{c(){b(e.$$.fragment),m=r(),t=l("div"),b(o.$$.fragment),f=r(),n=l("p"),n.innerHTML=M,ne=r(),z=l("p"),z.innerHTML=E,oe=r(),F=l("p"),F.textContent=A,S=r(),h=l("ul"),h.innerHTML=j,V=r(),I=l("div"),b(ye.$$.fragment),fe=r(),O=l("p"),O.innerHTML=Ge,Z=r(),b(me.$$.fragment),D=r(),b(R.$$.fragment),U=r(),b(W.$$.fragment),H=r(),q=l("div"),b(le.$$.fragment),ve=r(),ue=l("p"),ue.textContent=Le,we=r(),he=l("p"),he.innerHTML=ke,ge=r(),B=l("p"),B.innerHTML=_e,P=r(),Q=l("p"),Q.textContent=se,ae=r(),re=l("ul"),re.innerHTML=xe,ie=r(),K=l("div"),b(_.$$.fragment),L=r(),N=l("p"),N.innerHTML=Y,u=r(),b($.$$.fragment),Me=r(),b(J.$$.fragment),this.h()},l(x){k(e.$$.fragment,x),m=i(x),t=c(x,"DIV",{class:!0});var X=ee(t);k(o.$$.fragment,X),f=i(X),n=c(X,"P",{"data-svelte-h":!0}),g(n)!=="svelte-1uueepb"&&(n.innerHTML=M),ne=i(X),z=c(X,"P",{"data-svelte-h":!0}),g(z)!=="svelte-idybz1"&&(z.innerHTML=E),oe=i(X),F=c(X,"P",{"data-svelte-h":!0}),g(F)!=="svelte-1pplc4a"&&(F.textContent=A),S=i(X),h=c(X,"UL",{"data-svelte-h":!0}),g(h)!=="svelte-1w7z84m"&&(h.innerHTML=j),V=i(X),I=c(X,"DIV",{class:!0});var de=ee(I);k(ye.$$.fragment,de),fe=i(de),O=c(de,"P",{"data-svelte-h":!0}),g(O)!=="svelte-17axqe5"&&(O.innerHTML=Ge),Z=i(de),k(me.$$.fragment,de),D=i(de),k(R.$$.fragment,de),de.forEach(d),X.forEach(d),U=i(x),k(W.$$.fragment,x),H=i(x),q=c(x,"DIV",{class:!0});var ce=ee(q);k(le.$$.fragment,ce),ve=i(ce),ue=c(ce,"P",{"data-svelte-h":!0}),g(ue)!=="svelte-11br4fd"&&(ue.textContent=Le),we=i(ce),he=c(ce,"P",{"data-svelte-h":!0}),g(he)!=="svelte-18ki9f4"&&(he.innerHTML=ke),ge=i(ce),B=c(ce,"P",{"data-svelte-h":!0}),g(B)!=="svelte-idybz1"&&(B.innerHTML=_e),P=i(ce),Q=c(ce,"P",{"data-svelte-h":!0}),g(Q)!=="svelte-1pplc4a"&&(Q.textContent=se),ae=i(ce),re=c(ce,"UL",{"data-svelte-h":!0}),g(re)!=="svelte-1w7z84m"&&(re.innerHTML=xe),ie=i(ce),K=c(ce,"DIV",{class:!0});var Te=ee(K);k(_.$$.fragment,Te),L=i(Te),N=c(Te,"P",{"data-svelte-h":!0}),g(N)!=="svelte-17axqe5"&&(N.innerHTML=Y),u=i(Te),k($.$$.fragment,Te),Me=i(Te),k(J.$$.fragment,Te),Te.forEach(d),ce.forEach(d),this.h()},h(){te(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(x,X){T(e,x,X),p(x,m,X),p(x,t,X),T(o,t,null),s(t,f),s(t,n),s(t,ne),s(t,z),s(t,oe),s(t,F),s(t,S),s(t,h),s(t,V),s(t,I),T(ye,I,null),s(I,fe),s(I,O),s(I,Z),T(me,I,null),s(I,D),T(R,I,null),p(x,U,X),T(W,x,X),p(x,H,X),p(x,q,X),T(le,q,null),s(q,ve),s(q,ue),s(q,we),s(q,he),s(q,ge),s(q,B),s(q,P),s(q,Q),s(q,ae),s(q,re),s(q,ie),s(q,K),T(_,K,null),s(K,L),s(K,N),s(K,u),T($,K,null),s(K,Me),T(J,K,null),be=!0},p(x,X){const de={};X&2&&(de.$$scope={dirty:X,ctx:x}),me.$set(de);const ce={};X&2&&(ce.$$scope={dirty:X,ctx:x}),R.$set(ce);const Te={};X&2&&(Te.$$scope={dirty:X,ctx:x}),$.$set(Te);const nt={};X&2&&(nt.$$scope={dirty:X,ctx:x}),J.$set(nt)},i(x){be||(y(e.$$.fragment,x),y(o.$$.fragment,x),y(ye.$$.fragment,x),y(me.$$.fragment,x),y(R.$$.fragment,x),y(W.$$.fragment,x),y(le.$$.fragment,x),y(_.$$.fragment,x),y($.$$.fragment,x),y(J.$$.fragment,x),be=!0)},o(x){v(e.$$.fragment,x),v(o.$$.fragment,x),v(ye.$$.fragment,x),v(me.$$.fragment,x),v(R.$$.fragment,x),v(W.$$.fragment,x),v(le.$$.fragment,x),v(_.$$.fragment,x),v($.$$.fragment,x),v(J.$$.fragment,x),be=!1},d(x){x&&(d(m),d(t),d(U),d(H),d(q)),w(e,x),w(o),w(ye),w(me),w(R),w(W,x),w(le),w(_),w($),w(J)}}}function nn(G){let e,m;return e=new yt({props:{$$slots:{default:[tn]},$$scope:{ctx:G}}}),{c(){b(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){T(e,t,o),m=!0},p(t,o){const f={};o&2&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){m||(y(e.$$.fragment,t),m=!0)},o(t){v(e.$$.fragment,t),m=!1},d(t){w(e,t)}}}function on(G){let e,m,t,o,f,n,M,ne,z,E=`The XGLM model was proposed in <a href="https://arxiv.org/abs/2112.10668" rel="nofollow">Few-shot Learning with Multilingual Language Models</a>
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O’Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`,oe,F,A="The abstract from the paper is the following:",S,h,j=`<em>Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
tasks without fine-tuning. While these models are known to be able to jointly represent many different languages,
their training data is dominated by English, potentially limiting their cross-lingual generalization.
In this work, we train multilingual autoregressive language models on a balanced corpus covering a diverse set of languages,
and study their few- and zero-shot learning capabilities in a wide range of tasks. Our largest model with 7.5 billion parameters
sets new state of the art in few-shot learning in more than 20 representative languages, outperforming GPT-3 of comparable size
in multilingual commonsense reasoning (with +7.4% absolute accuracy improvement in 0-shot settings and +9.4% in 4-shot settings)
and natural language inference (+5.4% in each of 0-shot and 4-shot settings). On the FLORES-101 machine translation benchmark,
our model outperforms GPT-3 on 171 out of 182 translation directions with 32 training examples, while surpassing the
official supervised baseline in 45 directions. We present a detailed analysis of where the model succeeds and fails,
showing in particular that it enables cross-lingual in-context learning on some tasks, while there is still room for improvement
on surface form robustness and adaptation to tasks that do not have a natural cloze form. Finally, we evaluate our models
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.</em>`,V,I,ye='This model was contributed by <a href="https://huggingface.co/valhalla" rel="nofollow">Suraj</a>. The original code can be found <a href="https://github.com/pytorch/fairseq/tree/main/examples/xglm" rel="nofollow">here</a>.',fe,O,Ge,Z,me='<li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li>',D,R,U,W,H,q,le,ve=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMModel">XGLMModel</a>. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
<a href="https://huggingface.co/facebook/xglm-564M" rel="nofollow">facebook/xglm-564M</a> architecture.`,ue,Le,we=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,he,ke,ge,B,_e,P,Q,se,ae,re=`Adapted from <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a> and <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.`,xe,ie,K=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,_,L,N,Y,u,$=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`,Me,J,be="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",x,X,de,ce,Te,nt=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,mt,Pe,He,ut,Re,vt=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`,ht,Se,Ue,st,Je,at,Ce,Be,ft,Ve,wt=`Construct a “fast” XGLM tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Adapted from <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>
and <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. Based on
<a href="https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models" rel="nofollow">BPE</a>.`,gt,De,xt=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,_t,qe,Ze,Mt,Qe,$t=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`,bt,Ye,Lt="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",kt,Ie,Ae,Tt,Ke,Gt=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`,rt,Ne,it,ot,dt;return f=new Fe({props:{title:"XGLM",local:"xglm",headingTag:"h1"}}),M=new Fe({props:{title:"Overview",local:"overview",headingTag:"h2"}}),O=new Fe({props:{title:"Resources",local:"resources",headingTag:"h2"}}),R=new Fe({props:{title:"XGLMConfig",local:"transformers.XGLMConfig",headingTag:"h2"}}),H=new pe({props:{name:"class transformers.XGLMConfig",anchor:"transformers.XGLMConfig",parameters:[{name:"vocab_size",val:" = 256008"},{name:"max_position_embeddings",val:" = 2048"},{name:"d_model",val:" = 1024"},{name:"ffn_dim",val:" = 4096"},{name:"num_layers",val:" = 24"},{name:"attention_heads",val:" = 16"},{name:"activation_function",val:" = 'gelu'"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = True"},{name:"use_cache",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256008) &#x2014;
Vocabulary size of the XGLM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMModel">XGLMModel</a> or <a href="/docs/transformers/main/en/model_doc/xglm#transformers.FlaxXGLMModel">FlaxXGLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.XGLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XGLMConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimension of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.XGLMConfig.ffn_dim",description:`<strong>ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"ffn_dim"},{anchor:"transformers.XGLMConfig.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers Transformer decoder.`,name:"num_layers"},{anchor:"transformers.XGLMConfig.attention_heads",description:`<strong>attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"attention_heads"},{anchor:"transformers.XGLMConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.XGLMConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, dencoder, and pooler.`,name:"dropout"},{anchor:"transformers.XGLMConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.XGLMConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.XGLMConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"layerdrop"},{anchor:"transformers.XGLMConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.XGLMConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.XGLMConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/configuration_xglm.py#L29"}}),ke=new Ee({props:{anchor:"transformers.XGLMConfig.example",$$slots:{default:[It]},$$scope:{ctx:G}}}),B=new Fe({props:{title:"XGLMTokenizer",local:"transformers.XGLMTokenizer",headingTag:"h2"}}),Q=new pe({props:{name:"class transformers.XGLMTokenizer",anchor:"transformers.XGLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XGLMTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XGLMTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XGLMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XGLMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XGLMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XGLMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XGLMTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XGLMTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L43"}}),N=new pe({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L184",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),de=new pe({props:{name:"get_special_tokens_mask",anchor:"transformers.XGLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L209",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),He=new pe({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L237",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ue=new pe({props:{name:"save_vocabulary",anchor:"transformers.XGLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L293"}}),Je=new Fe({props:{title:"XGLMTokenizerFast",local:"transformers.XGLMTokenizerFast",headingTag:"h2"}}),Be=new pe({props:{name:"class transformers.XGLMTokenizerFast",anchor:"transformers.XGLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XGLMTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XGLMTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XGLMTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XGLMTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XGLMTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XGLMTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XGLMTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/tokenization_xglm_fast.py#L49"}}),Ze=new pe({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/tokenization_xglm_fast.py#L142",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ae=new pe({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xglm/tokenization_xglm_fast.py#L167",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ne=new Pt({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[nn],tensorflow:[Dt],pytorch:[Bt]},$$scope:{ctx:G}}}),{c(){e=l("meta"),m=r(),t=l("p"),o=r(),b(f.$$.fragment),n=r(),b(M.$$.fragment),ne=r(),z=l("p"),z.innerHTML=E,oe=r(),F=l("p"),F.textContent=A,S=r(),h=l("p"),h.innerHTML=j,V=r(),I=l("p"),I.innerHTML=ye,fe=r(),b(O.$$.fragment),Ge=r(),Z=l("ul"),Z.innerHTML=me,D=r(),b(R.$$.fragment),U=r(),W=l("div"),b(H.$$.fragment),q=r(),le=l("p"),le.innerHTML=ve,ue=r(),Le=l("p"),Le.innerHTML=we,he=r(),b(ke.$$.fragment),ge=r(),b(B.$$.fragment),_e=r(),P=l("div"),b(Q.$$.fragment),se=r(),ae=l("p"),ae.innerHTML=re,xe=r(),ie=l("p"),ie.innerHTML=K,_=r(),L=l("div"),b(N.$$.fragment),Y=r(),u=l("p"),u.textContent=$,Me=r(),J=l("ul"),J.innerHTML=be,x=r(),X=l("div"),b(de.$$.fragment),ce=r(),Te=l("p"),Te.innerHTML=nt,mt=r(),Pe=l("div"),b(He.$$.fragment),ut=r(),Re=l("p"),Re.textContent=vt,ht=r(),Se=l("div"),b(Ue.$$.fragment),st=r(),b(Je.$$.fragment),at=r(),Ce=l("div"),b(Be.$$.fragment),ft=r(),Ve=l("p"),Ve.innerHTML=wt,gt=r(),De=l("p"),De.innerHTML=xt,_t=r(),qe=l("div"),b(Ze.$$.fragment),Mt=r(),Qe=l("p"),Qe.textContent=$t,bt=r(),Ye=l("ul"),Ye.innerHTML=Lt,kt=r(),Ie=l("div"),b(Ae.$$.fragment),Tt=r(),Ke=l("p"),Ke.textContent=Gt,rt=r(),b(Ne.$$.fragment),it=r(),ot=l("p"),this.h()},l(a){const C=jt("svelte-u9bgzb",document.head);e=c(C,"META",{name:!0,content:!0}),C.forEach(d),m=i(a),t=c(a,"P",{}),ee(t).forEach(d),o=i(a),k(f.$$.fragment,a),n=i(a),k(M.$$.fragment,a),ne=i(a),z=c(a,"P",{"data-svelte-h":!0}),g(z)!=="svelte-16pkwmo"&&(z.innerHTML=E),oe=i(a),F=c(a,"P",{"data-svelte-h":!0}),g(F)!=="svelte-vfdo9a"&&(F.textContent=A),S=i(a),h=c(a,"P",{"data-svelte-h":!0}),g(h)!=="svelte-21oekg"&&(h.innerHTML=j),V=i(a),I=c(a,"P",{"data-svelte-h":!0}),g(I)!=="svelte-1c16k7b"&&(I.innerHTML=ye),fe=i(a),k(O.$$.fragment,a),Ge=i(a),Z=c(a,"UL",{"data-svelte-h":!0}),g(Z)!=="svelte-162aebv"&&(Z.innerHTML=me),D=i(a),k(R.$$.fragment,a),U=i(a),W=c(a,"DIV",{class:!0});var ze=ee(W);k(H.$$.fragment,ze),q=i(ze),le=c(ze,"P",{"data-svelte-h":!0}),g(le)!=="svelte-18k20rp"&&(le.innerHTML=ve),ue=i(ze),Le=c(ze,"P",{"data-svelte-h":!0}),g(Le)!=="svelte-o55m63"&&(Le.innerHTML=we),he=i(ze),k(ke.$$.fragment,ze),ze.forEach(d),ge=i(a),k(B.$$.fragment,a),_e=i(a),P=c(a,"DIV",{class:!0});var $e=ee(P);k(Q.$$.fragment,$e),se=i($e),ae=c($e,"P",{"data-svelte-h":!0}),g(ae)!=="svelte-1serjol"&&(ae.innerHTML=re),xe=i($e),ie=c($e,"P",{"data-svelte-h":!0}),g(ie)!=="svelte-1c3t5ty"&&(ie.innerHTML=K),_=i($e),L=c($e,"DIV",{class:!0});var et=ee(L);k(N.$$.fragment,et),Y=i(et),u=c(et,"P",{"data-svelte-h":!0}),g(u)!=="svelte-1ooxl9e"&&(u.textContent=$),Me=i(et),J=c(et,"UL",{"data-svelte-h":!0}),g(J)!=="svelte-rq8uot"&&(J.innerHTML=be),et.forEach(d),x=i($e),X=c($e,"DIV",{class:!0});var lt=ee(X);k(de.$$.fragment,lt),ce=i(lt),Te=c(lt,"P",{"data-svelte-h":!0}),g(Te)!=="svelte-1f4f5kp"&&(Te.innerHTML=nt),lt.forEach(d),mt=i($e),Pe=c($e,"DIV",{class:!0});var ct=ee(Pe);k(He.$$.fragment,ct),ut=i(ct),Re=c(ct,"P",{"data-svelte-h":!0}),g(Re)!=="svelte-bub0ru"&&(Re.textContent=vt),ct.forEach(d),ht=i($e),Se=c($e,"DIV",{class:!0});var Ct=ee(Se);k(Ue.$$.fragment,Ct),Ct.forEach(d),$e.forEach(d),st=i(a),k(Je.$$.fragment,a),at=i(a),Ce=c(a,"DIV",{class:!0});var je=ee(Ce);k(Be.$$.fragment,je),ft=i(je),Ve=c(je,"P",{"data-svelte-h":!0}),g(Ve)!=="svelte-t2zo0d"&&(Ve.innerHTML=wt),gt=i(je),De=c(je,"P",{"data-svelte-h":!0}),g(De)!=="svelte-fh0aq"&&(De.innerHTML=xt),_t=i(je),qe=c(je,"DIV",{class:!0});var tt=ee(qe);k(Ze.$$.fragment,tt),Mt=i(tt),Qe=c(tt,"P",{"data-svelte-h":!0}),g(Qe)!=="svelte-1ooxl9e"&&(Qe.textContent=$t),bt=i(tt),Ye=c(tt,"UL",{"data-svelte-h":!0}),g(Ye)!=="svelte-rq8uot"&&(Ye.innerHTML=Lt),tt.forEach(d),kt=i(je),Ie=c(je,"DIV",{class:!0});var pt=ee(Ie);k(Ae.$$.fragment,pt),Tt=i(pt),Ke=c(pt,"P",{"data-svelte-h":!0}),g(Ke)!=="svelte-bub0ru"&&(Ke.textContent=Gt),pt.forEach(d),je.forEach(d),rt=i(a),k(Ne.$$.fragment,a),it=i(a),ot=c(a,"P",{}),ee(ot).forEach(d),this.h()},h(){te(e,"name","hf:doc:metadata"),te(e,"content",sn),te(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),te(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(a,C){s(document.head,e),p(a,m,C),p(a,t,C),p(a,o,C),T(f,a,C),p(a,n,C),T(M,a,C),p(a,ne,C),p(a,z,C),p(a,oe,C),p(a,F,C),p(a,S,C),p(a,h,C),p(a,V,C),p(a,I,C),p(a,fe,C),T(O,a,C),p(a,Ge,C),p(a,Z,C),p(a,D,C),T(R,a,C),p(a,U,C),p(a,W,C),T(H,W,null),s(W,q),s(W,le),s(W,ue),s(W,Le),s(W,he),T(ke,W,null),p(a,ge,C),T(B,a,C),p(a,_e,C),p(a,P,C),T(Q,P,null),s(P,se),s(P,ae),s(P,xe),s(P,ie),s(P,_),s(P,L),T(N,L,null),s(L,Y),s(L,u),s(L,Me),s(L,J),s(P,x),s(P,X),T(de,X,null),s(X,ce),s(X,Te),s(P,mt),s(P,Pe),T(He,Pe,null),s(Pe,ut),s(Pe,Re),s(P,ht),s(P,Se),T(Ue,Se,null),p(a,st,C),T(Je,a,C),p(a,at,C),p(a,Ce,C),T(Be,Ce,null),s(Ce,ft),s(Ce,Ve),s(Ce,gt),s(Ce,De),s(Ce,_t),s(Ce,qe),T(Ze,qe,null),s(qe,Mt),s(qe,Qe),s(qe,bt),s(qe,Ye),s(Ce,kt),s(Ce,Ie),T(Ae,Ie,null),s(Ie,Tt),s(Ie,Ke),p(a,rt,C),T(Ne,a,C),p(a,it,C),p(a,ot,C),dt=!0},p(a,[C]){const ze={};C&2&&(ze.$$scope={dirty:C,ctx:a}),ke.$set(ze);const $e={};C&2&&($e.$$scope={dirty:C,ctx:a}),Ne.$set($e)},i(a){dt||(y(f.$$.fragment,a),y(M.$$.fragment,a),y(O.$$.fragment,a),y(R.$$.fragment,a),y(H.$$.fragment,a),y(ke.$$.fragment,a),y(B.$$.fragment,a),y(Q.$$.fragment,a),y(N.$$.fragment,a),y(de.$$.fragment,a),y(He.$$.fragment,a),y(Ue.$$.fragment,a),y(Je.$$.fragment,a),y(Be.$$.fragment,a),y(Ze.$$.fragment,a),y(Ae.$$.fragment,a),y(Ne.$$.fragment,a),dt=!0)},o(a){v(f.$$.fragment,a),v(M.$$.fragment,a),v(O.$$.fragment,a),v(R.$$.fragment,a),v(H.$$.fragment,a),v(ke.$$.fragment,a),v(B.$$.fragment,a),v(Q.$$.fragment,a),v(N.$$.fragment,a),v(de.$$.fragment,a),v(He.$$.fragment,a),v(Ue.$$.fragment,a),v(Je.$$.fragment,a),v(Be.$$.fragment,a),v(Ze.$$.fragment,a),v(Ae.$$.fragment,a),v(Ne.$$.fragment,a),dt=!1},d(a){a&&(d(m),d(t),d(o),d(n),d(ne),d(z),d(oe),d(F),d(S),d(h),d(V),d(I),d(fe),d(Ge),d(Z),d(D),d(U),d(W),d(ge),d(_e),d(P),d(st),d(at),d(Ce),d(rt),d(it),d(ot)),d(e),w(f,a),w(M,a),w(O,a),w(R,a),w(H),w(ke),w(B,a),w(Q),w(N),w(de),w(He),w(Ue),w(Je,a),w(Be),w(Ze),w(Ae),w(Ne,a)}}}const sn='{"title":"XGLM","local":"xglm","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"XGLMConfig","local":"transformers.XGLMConfig","sections":[],"depth":2},{"title":"XGLMTokenizer","local":"transformers.XGLMTokenizer","sections":[],"depth":2},{"title":"XGLMTokenizerFast","local":"transformers.XGLMTokenizerFast","sections":[],"depth":2},{"title":"XGLMModel","local":"transformers.XGLMModel","sections":[],"depth":2},{"title":"XGLMForCausalLM","local":"transformers.XGLMForCausalLM","sections":[],"depth":2},{"title":"TFXGLMModel","local":"transformers.TFXGLMModel","sections":[],"depth":2},{"title":"TFXGLMForCausalLM","local":"transformers.TFXGLMForCausalLM","sections":[],"depth":2},{"title":"FlaxXGLMModel","local":"transformers.FlaxXGLMModel","sections":[],"depth":2},{"title":"FlaxXGLMForCausalLM","local":"transformers.FlaxXGLMForCausalLM","sections":[],"depth":2}],"depth":1}';function an(G){return Ft(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fn extends zt{constructor(e){super(),qt(this,e,an,on,Xt,{})}}export{fn as component};
