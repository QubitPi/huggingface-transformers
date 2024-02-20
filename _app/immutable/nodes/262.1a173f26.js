import{s as ps,o as us,n as de}from"../chunks/scheduler.9bc65507.js";import{S as ms,i as hs,g as c,s as a,r as g,A as fs,h as p,f as n,c as r,j as B,u as _,x as m,k as I,y as d,a as i,v as T,d as b,t as y,w as k}from"../chunks/index.707bf1b6.js";import{T as zt}from"../chunks/Tip.c2ecdbf4.js";import{D as R}from"../chunks/Docstring.17db21ae.js";import{C as dt}from"../chunks/CodeBlock.54a9f38d.js";import{F as gs,M as Do}from"../chunks/Markdown.fef84341.js";import{E as Nt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as Kn}from"../chunks/PipelineTag.44585822.js";import{H as Ue}from"../chunks/Heading.342b1fa6.js";function _s(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function Ts(z){let t,f="Example:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBUNU1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBbW9kZWwlMjAlM0QlMjBUNU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEElMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIyU3R1ZGllcyUyMGhhdmUlMjBiZWVuJTIwc2hvd24lMjB0aGF0JTIwb3duaW5nJTIwYSUyMGRvZyUyMGlzJTIwZ29vZCUyMGZvciUyMHlvdSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpLmlucHV0X2lkcyUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUyMDElMEFkZWNvZGVyX2lucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplciglMjJTdHVkaWVzJTIwc2hvdyUyMHRoYXQlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBJTBBJTIzJTIwcHJlcHJvY2VzcyUzQSUyMFByZXBlbmQlMjBkZWNvZGVyX2lucHV0X2lkcyUyMHdpdGglMjBzdGFydCUyMHRva2VuJTIwd2hpY2glMjBpcyUyMHBhZCUyMHRva2VuJTIwZm9yJTIwVDVNb2RlbC4lMEElMjMlMjBUaGlzJTIwaXMlMjBub3QlMjBuZWVkZWQlMjBmb3IlMjB0b3JjaCdzJTIwVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMjBhcyUyMGl0JTIwZG9lcyUyMHRoaXMlMjBpbnRlcm5hbGx5JTIwdXNpbmclMjBsYWJlbHMlMjBhcmcuJTBBZGVjb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjBtb2RlbC5fc2hpZnRfcmlnaHQoZGVjb2Rlcl9pbnB1dF9pZHMpJTBBJTBBJTIzJTIwZm9yd2FyZCUyMHBhc3MlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEaW5wdXRfaWRzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RkZWNvZGVyX2lucHV0X2lkcyklMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, T5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5Model.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># preprocess: Prepend decoder_input_ids with start token which is pad token for T5Model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is not needed for torch&#x27;s T5ForConditionalGeneration as it does this internally using labels arg.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = model._shift_right(decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-11lpom8"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function bs(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function ys(z){let t,f="Examples:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBUNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS10NSUyRnQ1LXNtYWxsJTIyKSUwQW1vZGVsJTIwJTNEJTIwVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS10NSUyRnQ1LXNtYWxsJTIyKSUwQSUwQSUyMyUyMHRyYWluaW5nJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMCUzQ2V4dHJhX2lkXzAlM0UlMjB3YWxrcyUyMGluJTIwJTNDZXh0cmFfaWRfMSUzRSUyMHBhcmslMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyJTNDZXh0cmFfaWRfMCUzRSUyMGN1dGUlMjBkb2clMjAlM0NleHRyYV9pZF8xJTNFJTIwdGhlJTIwJTNDZXh0cmFfaWRfMiUzRSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlM0RpbnB1dF9pZHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRzJTBBJTBBJTIzJTIwaW5mZXJlbmNlJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMnN1bW1hcml6ZSUzQSUyMHN0dWRpZXMlMjBoYXZlJTIwc2hvd24lMjB0aGF0JTIwb3duaW5nJTIwYSUyMGRvZyUyMGlzJTIwZ29vZCUyMGZvciUyMHlvdSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpLmlucHV0X2lkcyUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUyMDElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRfaWRzKSUwQXByaW50KHRva2VuaXplci5kZWNvZGUob3V0cHV0cyU1QjAlNUQlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSkpJTBBJTIzJTIwc3R1ZGllcyUyMGhhdmUlMjBzaG93biUyMHRoYXQlMjBvd25pbmclMjBhJTIwZG9nJTIwaXMlMjBnb29kJTIwZm9yJTIweW91Lg==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-kvfsh7"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function ks(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function Ms(z){let t,f="Example:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBUNUVuY29kZXJNb2RlbCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS10NSUyRnQ1LXNtYWxsJTIyKSUwQW1vZGVsJTIwJTNEJTIwVDVFbmNvZGVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS10NSUyRnQ1LXNtYWxsJTIyKSUwQWlucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJTdHVkaWVzJTIwaGF2ZSUyMGJlZW4lMjBzaG93biUyMHRoYXQlMjBvd25pbmclMjBhJTIwZG9nJTIwaXMlMjBnb29kJTIwZm9yJTIweW91JTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSkuaW5wdXRfaWRzJTIwJTIwJTIzJTIwQmF0Y2glMjBzaXplJTIwMSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlM0RpbnB1dF9pZHMpJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, T5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5EncoderModel.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-11lpom8"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function ws(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function vs(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function xs(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function $s(z){let t,f,o,l,M,s,v="The bare T5 Model transformer outputting raw hidden-states without any specific head on top.",ke,q,Z=`The T5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,le,U,H=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,A,x,J=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Re,V,Me,ce,P,lt='The <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Model">T5Model</a> forward method, overrides the <code>__call__</code> special method.',Ee,te,_t,D,qe,N,pe,L,O,G,Ze,tt="T5 Model with a <code>language modeling</code> head on top.",Ie,pt,He=`The T5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,je,Ge,Tt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ae,Ne,bt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,re,fe,ne,we,Pe,S='The <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration">T5ForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',Qe,ue,ve,ge,We,oe,Fe,W,_e,Be,Ae,X="The bare T5 Model transformer outputting encoder’s raw hidden-states without any specific head on top.",me,xe,w=`The T5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,C,Y,Xe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,De,K,Te=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Oe,E,ie,be,Rt,ut='The <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5EncoderModel">T5EncoderModel</a> forward method, overrides the <code>__call__</code> special method.',yt,ye,mt,Ve,jt,kt,ht,Q,Ye,Mt,ft,$=`T5 model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`,F,$e,se=`The T5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,nt,ee,Ce=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,gn,Ft,Ht=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Xt,ot,sn,wn,Ct,In='The <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5ForSequenceClassification">T5ForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Vt,Lt,_n,wt,Gn,Je,vt,vn,Jt,bo=`T5 Encoder Model with a token classification head on top (a linear layer on top of the hidden-states output)
e.g. for Named-Entity-Recognition (NER) tasks.`,xn,Ut,Wn=`The T5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,St,Et,an=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,eo,Pt,rn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,$n,st,dn,zn,qt,Bn='The <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5ForTokenClassification">T5ForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Qt,At,Tn,xt,bn,he,ln,jn,Zt,Rn=`T5 Model with a span classification head on top for extractive question-answering tasks like SQuAD (linear layers
on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Dt,yn,Hn=`The T5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,Ot,Yt,cn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,to,Kt,pn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Fn,at,un,Cn,It,Nn='The <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5ForQuestionAnswering">T5ForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',en,tn,kn;return t=new Ue({props:{title:"T5Model",local:"transformers.T5Model",headingTag:"h2"}}),l=new R({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1345"}}),Me=new R({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1438",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
`}}),te=new zt({props:{$$slots:{default:[_s]},$$scope:{ctx:z}}}),D=new Nt({props:{anchor:"transformers.T5Model.forward.example",$$slots:{default:[Ts]},$$scope:{ctx:z}}}),N=new Ue({props:{title:"T5ForConditionalGeneration",local:"transformers.T5ForConditionalGeneration",headingTag:"h2"}}),O=new R({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1553"}}),ne=new R({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1647",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
`}}),ue=new zt({props:{$$slots:{default:[bs]},$$scope:{ctx:z}}}),ge=new Nt({props:{anchor:"transformers.T5ForConditionalGeneration.forward.example",$$slots:{default:[ys]},$$scope:{ctx:z}}}),oe=new Ue({props:{title:"T5EncoderModel",local:"transformers.T5EncoderModel",headingTag:"h2"}}),_e=new R({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1874"}}),ie=new R({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5EncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5EncoderModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5EncoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1950",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new zt({props:{$$slots:{default:[ks]},$$scope:{ctx:z}}}),Ve=new Nt({props:{anchor:"transformers.T5EncoderModel.forward.example",$$slots:{default:[Ms]},$$scope:{ctx:z}}}),kt=new Ue({props:{title:"T5ForSequenceClassification",local:"transformers.T5ForSequenceClassification",headingTag:"h2"}}),Ye=new R({props:{name:"class transformers.T5ForSequenceClassification",anchor:"transformers.T5ForSequenceClassification",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1993"}}),sn=new R({props:{name:"forward",anchor:"transformers.T5ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5ForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5ForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5ForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5ForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5ForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5ForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5ForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L2014",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lt=new zt({props:{$$slots:{default:[ws]},$$scope:{ctx:z}}}),wt=new Ue({props:{title:"T5ForTokenClassification",local:"transformers.T5ForTokenClassification",headingTag:"h2"}}),vt=new R({props:{name:"class transformers.T5ForTokenClassification",anchor:"transformers.T5ForTokenClassification",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L2126"}}),dn=new R({props:{name:"forward",anchor:"transformers.T5ForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForTokenClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5ForTokenClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5ForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5ForTokenClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5ForTokenClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5ForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5ForTokenClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5ForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L2147",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
`}}),At=new zt({props:{$$slots:{default:[vs]},$$scope:{ctx:z}}}),xt=new Ue({props:{title:"T5ForQuestionAnswering",local:"transformers.T5ForQuestionAnswering",headingTag:"h2"}}),ln=new R({props:{name:"class transformers.T5ForQuestionAnswering",anchor:"transformers.T5ForQuestionAnswering",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L2198"}}),un=new R({props:{name:"forward",anchor:"transformers.T5ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5ForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5ForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5ForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5ForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5ForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5ForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5ForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.T5ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L2254",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) — Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) — Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new zt({props:{$$slots:{default:[xs]},$$scope:{ctx:z}}}),{c(){g(t.$$.fragment),f=a(),o=c("div"),g(l.$$.fragment),M=a(),s=c("p"),s.textContent=v,ke=a(),q=c("p"),q.innerHTML=Z,le=a(),U=c("p"),U.innerHTML=H,A=a(),x=c("p"),x.innerHTML=J,Re=a(),V=c("div"),g(Me.$$.fragment),ce=a(),P=c("p"),P.innerHTML=lt,Ee=a(),g(te.$$.fragment),_t=a(),g(D.$$.fragment),qe=a(),g(N.$$.fragment),pe=a(),L=c("div"),g(O.$$.fragment),G=a(),Ze=c("p"),Ze.innerHTML=tt,Ie=a(),pt=c("p"),pt.innerHTML=He,je=a(),Ge=c("p"),Ge.innerHTML=Tt,ae=a(),Ne=c("p"),Ne.innerHTML=bt,re=a(),fe=c("div"),g(ne.$$.fragment),we=a(),Pe=c("p"),Pe.innerHTML=S,Qe=a(),g(ue.$$.fragment),ve=a(),g(ge.$$.fragment),We=a(),g(oe.$$.fragment),Fe=a(),W=c("div"),g(_e.$$.fragment),Be=a(),Ae=c("p"),Ae.textContent=X,me=a(),xe=c("p"),xe.innerHTML=w,C=a(),Y=c("p"),Y.innerHTML=Xe,De=a(),K=c("p"),K.innerHTML=Te,Oe=a(),E=c("div"),g(ie.$$.fragment),be=a(),Rt=c("p"),Rt.innerHTML=ut,yt=a(),g(ye.$$.fragment),mt=a(),g(Ve.$$.fragment),jt=a(),g(kt.$$.fragment),ht=a(),Q=c("div"),g(Ye.$$.fragment),Mt=a(),ft=c("p"),ft.textContent=$,F=a(),$e=c("p"),$e.innerHTML=se,nt=a(),ee=c("p"),ee.innerHTML=Ce,gn=a(),Ft=c("p"),Ft.innerHTML=Ht,Xt=a(),ot=c("div"),g(sn.$$.fragment),wn=a(),Ct=c("p"),Ct.innerHTML=In,Vt=a(),g(Lt.$$.fragment),_n=a(),g(wt.$$.fragment),Gn=a(),Je=c("div"),g(vt.$$.fragment),vn=a(),Jt=c("p"),Jt.textContent=bo,xn=a(),Ut=c("p"),Ut.innerHTML=Wn,St=a(),Et=c("p"),Et.innerHTML=an,eo=a(),Pt=c("p"),Pt.innerHTML=rn,$n=a(),st=c("div"),g(dn.$$.fragment),zn=a(),qt=c("p"),qt.innerHTML=Bn,Qt=a(),g(At.$$.fragment),Tn=a(),g(xt.$$.fragment),bn=a(),he=c("div"),g(ln.$$.fragment),jn=a(),Zt=c("p"),Zt.innerHTML=Rn,Dt=a(),yn=c("p"),yn.innerHTML=Hn,Ot=a(),Yt=c("p"),Yt.innerHTML=cn,to=a(),Kt=c("p"),Kt.innerHTML=pn,Fn=a(),at=c("div"),g(un.$$.fragment),Cn=a(),It=c("p"),It.innerHTML=Nn,en=a(),g(tn.$$.fragment),this.h()},l(h){_(t.$$.fragment,h),f=r(h),o=p(h,"DIV",{class:!0});var j=B(o);_(l.$$.fragment,j),M=r(j),s=p(j,"P",{"data-svelte-h":!0}),m(s)!=="svelte-s4dp18"&&(s.textContent=v),ke=r(j),q=p(j,"P",{"data-svelte-h":!0}),m(q)!=="svelte-x400g0"&&(q.innerHTML=Z),le=r(j),U=p(j,"P",{"data-svelte-h":!0}),m(U)!=="svelte-6pahdo"&&(U.innerHTML=H),A=r(j),x=p(j,"P",{"data-svelte-h":!0}),m(x)!=="svelte-hswkmf"&&(x.innerHTML=J),Re=r(j),V=p(j,"DIV",{class:!0});var Ke=B(V);_(Me.$$.fragment,Ke),ce=r(Ke),P=p(Ke,"P",{"data-svelte-h":!0}),m(P)!=="svelte-1djl3jq"&&(P.innerHTML=lt),Ee=r(Ke),_(te.$$.fragment,Ke),_t=r(Ke),_(D.$$.fragment,Ke),Ke.forEach(n),j.forEach(n),qe=r(h),_(N.$$.fragment,h),pe=r(h),L=p(h,"DIV",{class:!0});var rt=B(L);_(O.$$.fragment,rt),G=r(rt),Ze=p(rt,"P",{"data-svelte-h":!0}),m(Ze)!=="svelte-6hhvcz"&&(Ze.innerHTML=tt),Ie=r(rt),pt=p(rt,"P",{"data-svelte-h":!0}),m(pt)!=="svelte-x400g0"&&(pt.innerHTML=He),je=r(rt),Ge=p(rt,"P",{"data-svelte-h":!0}),m(Ge)!=="svelte-6pahdo"&&(Ge.innerHTML=Tt),ae=r(rt),Ne=p(rt,"P",{"data-svelte-h":!0}),m(Ne)!=="svelte-hswkmf"&&(Ne.innerHTML=bt),re=r(rt),fe=p(rt,"DIV",{class:!0});var gt=B(fe);_(ne.$$.fragment,gt),we=r(gt),Pe=p(gt,"P",{"data-svelte-h":!0}),m(Pe)!=="svelte-5juqky"&&(Pe.innerHTML=S),Qe=r(gt),_(ue.$$.fragment,gt),ve=r(gt),_(ge.$$.fragment,gt),gt.forEach(n),rt.forEach(n),We=r(h),_(oe.$$.fragment,h),Fe=r(h),W=p(h,"DIV",{class:!0});var ze=B(W);_(_e.$$.fragment,ze),Be=r(ze),Ae=p(ze,"P",{"data-svelte-h":!0}),m(Ae)!=="svelte-d9ghfc"&&(Ae.textContent=X),me=r(ze),xe=p(ze,"P",{"data-svelte-h":!0}),m(xe)!=="svelte-x400g0"&&(xe.innerHTML=w),C=r(ze),Y=p(ze,"P",{"data-svelte-h":!0}),m(Y)!=="svelte-6pahdo"&&(Y.innerHTML=Xe),De=r(ze),K=p(ze,"P",{"data-svelte-h":!0}),m(K)!=="svelte-hswkmf"&&(K.innerHTML=Te),Oe=r(ze),E=p(ze,"DIV",{class:!0});var Gt=B(E);_(ie.$$.fragment,Gt),be=r(Gt),Rt=p(Gt,"P",{"data-svelte-h":!0}),m(Rt)!=="svelte-hb2hu2"&&(Rt.innerHTML=ut),yt=r(Gt),_(ye.$$.fragment,Gt),mt=r(Gt),_(Ve.$$.fragment,Gt),Gt.forEach(n),ze.forEach(n),jt=r(h),_(kt.$$.fragment,h),ht=r(h),Q=p(h,"DIV",{class:!0});var Le=B(Q);_(Ye.$$.fragment,Le),Mt=r(Le),ft=p(Le,"P",{"data-svelte-h":!0}),m(ft)!=="svelte-14cghox"&&(ft.textContent=$),F=r(Le),$e=p(Le,"P",{"data-svelte-h":!0}),m($e)!=="svelte-x400g0"&&($e.innerHTML=se),nt=r(Le),ee=p(Le,"P",{"data-svelte-h":!0}),m(ee)!=="svelte-6pahdo"&&(ee.innerHTML=Ce),gn=r(Le),Ft=p(Le,"P",{"data-svelte-h":!0}),m(Ft)!=="svelte-hswkmf"&&(Ft.innerHTML=Ht),Xt=r(Le),ot=p(Le,"DIV",{class:!0});var ct=B(ot);_(sn.$$.fragment,ct),wn=r(ct),Ct=p(ct,"P",{"data-svelte-h":!0}),m(Ct)!=="svelte-7bl7p6"&&(Ct.innerHTML=In),Vt=r(ct),_(Lt.$$.fragment,ct),ct.forEach(n),Le.forEach(n),_n=r(h),_(wt.$$.fragment,h),Gn=r(h),Je=p(h,"DIV",{class:!0});var it=B(Je);_(vt.$$.fragment,it),vn=r(it),Jt=p(it,"P",{"data-svelte-h":!0}),m(Jt)!=="svelte-1nkqnzw"&&(Jt.textContent=bo),xn=r(it),Ut=p(it,"P",{"data-svelte-h":!0}),m(Ut)!=="svelte-x400g0"&&(Ut.innerHTML=Wn),St=r(it),Et=p(it,"P",{"data-svelte-h":!0}),m(Et)!=="svelte-6pahdo"&&(Et.innerHTML=an),eo=r(it),Pt=p(it,"P",{"data-svelte-h":!0}),m(Pt)!=="svelte-hswkmf"&&(Pt.innerHTML=rn),$n=r(it),st=p(it,"DIV",{class:!0});var Wt=B(st);_(dn.$$.fragment,Wt),zn=r(Wt),qt=p(Wt,"P",{"data-svelte-h":!0}),m(qt)!=="svelte-1smbshc"&&(qt.innerHTML=Bn),Qt=r(Wt),_(At.$$.fragment,Wt),Wt.forEach(n),it.forEach(n),Tn=r(h),_(xt.$$.fragment,h),bn=r(h),he=p(h,"DIV",{class:!0});var Se=B(he);_(ln.$$.fragment,Se),jn=r(Se),Zt=p(Se,"P",{"data-svelte-h":!0}),m(Zt)!=="svelte-khvqt1"&&(Zt.innerHTML=Rn),Dt=r(Se),yn=p(Se,"P",{"data-svelte-h":!0}),m(yn)!=="svelte-x400g0"&&(yn.innerHTML=Hn),Ot=r(Se),Yt=p(Se,"P",{"data-svelte-h":!0}),m(Yt)!=="svelte-6pahdo"&&(Yt.innerHTML=cn),to=r(Se),Kt=p(Se,"P",{"data-svelte-h":!0}),m(Kt)!=="svelte-hswkmf"&&(Kt.innerHTML=pn),Fn=r(Se),at=p(Se,"DIV",{class:!0});var nn=B(at);_(un.$$.fragment,nn),Cn=r(nn),It=p(nn,"P",{"data-svelte-h":!0}),m(It)!=="svelte-1avraci"&&(It.innerHTML=Nn),en=r(nn),_(tn.$$.fragment,nn),nn.forEach(n),Se.forEach(n),this.h()},h(){I(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(h,j){T(t,h,j),i(h,f,j),i(h,o,j),T(l,o,null),d(o,M),d(o,s),d(o,ke),d(o,q),d(o,le),d(o,U),d(o,A),d(o,x),d(o,Re),d(o,V),T(Me,V,null),d(V,ce),d(V,P),d(V,Ee),T(te,V,null),d(V,_t),T(D,V,null),i(h,qe,j),T(N,h,j),i(h,pe,j),i(h,L,j),T(O,L,null),d(L,G),d(L,Ze),d(L,Ie),d(L,pt),d(L,je),d(L,Ge),d(L,ae),d(L,Ne),d(L,re),d(L,fe),T(ne,fe,null),d(fe,we),d(fe,Pe),d(fe,Qe),T(ue,fe,null),d(fe,ve),T(ge,fe,null),i(h,We,j),T(oe,h,j),i(h,Fe,j),i(h,W,j),T(_e,W,null),d(W,Be),d(W,Ae),d(W,me),d(W,xe),d(W,C),d(W,Y),d(W,De),d(W,K),d(W,Oe),d(W,E),T(ie,E,null),d(E,be),d(E,Rt),d(E,yt),T(ye,E,null),d(E,mt),T(Ve,E,null),i(h,jt,j),T(kt,h,j),i(h,ht,j),i(h,Q,j),T(Ye,Q,null),d(Q,Mt),d(Q,ft),d(Q,F),d(Q,$e),d(Q,nt),d(Q,ee),d(Q,gn),d(Q,Ft),d(Q,Xt),d(Q,ot),T(sn,ot,null),d(ot,wn),d(ot,Ct),d(ot,Vt),T(Lt,ot,null),i(h,_n,j),T(wt,h,j),i(h,Gn,j),i(h,Je,j),T(vt,Je,null),d(Je,vn),d(Je,Jt),d(Je,xn),d(Je,Ut),d(Je,St),d(Je,Et),d(Je,eo),d(Je,Pt),d(Je,$n),d(Je,st),T(dn,st,null),d(st,zn),d(st,qt),d(st,Qt),T(At,st,null),i(h,Tn,j),T(xt,h,j),i(h,bn,j),i(h,he,j),T(ln,he,null),d(he,jn),d(he,Zt),d(he,Dt),d(he,yn),d(he,Ot),d(he,Yt),d(he,to),d(he,Kt),d(he,Fn),d(he,at),T(un,at,null),d(at,Cn),d(at,It),d(at,en),T(tn,at,null),kn=!0},p(h,j){const Ke={};j&2&&(Ke.$$scope={dirty:j,ctx:h}),te.$set(Ke);const rt={};j&2&&(rt.$$scope={dirty:j,ctx:h}),D.$set(rt);const gt={};j&2&&(gt.$$scope={dirty:j,ctx:h}),ue.$set(gt);const ze={};j&2&&(ze.$$scope={dirty:j,ctx:h}),ge.$set(ze);const Gt={};j&2&&(Gt.$$scope={dirty:j,ctx:h}),ye.$set(Gt);const Le={};j&2&&(Le.$$scope={dirty:j,ctx:h}),Ve.$set(Le);const ct={};j&2&&(ct.$$scope={dirty:j,ctx:h}),Lt.$set(ct);const it={};j&2&&(it.$$scope={dirty:j,ctx:h}),At.$set(it);const Wt={};j&2&&(Wt.$$scope={dirty:j,ctx:h}),tn.$set(Wt)},i(h){kn||(b(t.$$.fragment,h),b(l.$$.fragment,h),b(Me.$$.fragment,h),b(te.$$.fragment,h),b(D.$$.fragment,h),b(N.$$.fragment,h),b(O.$$.fragment,h),b(ne.$$.fragment,h),b(ue.$$.fragment,h),b(ge.$$.fragment,h),b(oe.$$.fragment,h),b(_e.$$.fragment,h),b(ie.$$.fragment,h),b(ye.$$.fragment,h),b(Ve.$$.fragment,h),b(kt.$$.fragment,h),b(Ye.$$.fragment,h),b(sn.$$.fragment,h),b(Lt.$$.fragment,h),b(wt.$$.fragment,h),b(vt.$$.fragment,h),b(dn.$$.fragment,h),b(At.$$.fragment,h),b(xt.$$.fragment,h),b(ln.$$.fragment,h),b(un.$$.fragment,h),b(tn.$$.fragment,h),kn=!0)},o(h){y(t.$$.fragment,h),y(l.$$.fragment,h),y(Me.$$.fragment,h),y(te.$$.fragment,h),y(D.$$.fragment,h),y(N.$$.fragment,h),y(O.$$.fragment,h),y(ne.$$.fragment,h),y(ue.$$.fragment,h),y(ge.$$.fragment,h),y(oe.$$.fragment,h),y(_e.$$.fragment,h),y(ie.$$.fragment,h),y(ye.$$.fragment,h),y(Ve.$$.fragment,h),y(kt.$$.fragment,h),y(Ye.$$.fragment,h),y(sn.$$.fragment,h),y(Lt.$$.fragment,h),y(wt.$$.fragment,h),y(vt.$$.fragment,h),y(dn.$$.fragment,h),y(At.$$.fragment,h),y(xt.$$.fragment,h),y(ln.$$.fragment,h),y(un.$$.fragment,h),y(tn.$$.fragment,h),kn=!1},d(h){h&&(n(f),n(o),n(qe),n(pe),n(L),n(We),n(Fe),n(W),n(jt),n(ht),n(Q),n(_n),n(Gn),n(Je),n(Tn),n(bn),n(he)),k(t,h),k(l),k(Me),k(te),k(D),k(N,h),k(O),k(ne),k(ue),k(ge),k(oe,h),k(_e),k(ie),k(ye),k(Ve),k(kt,h),k(Ye),k(sn),k(Lt),k(wt,h),k(vt),k(dn),k(At),k(xt,h),k(ln),k(un),k(tn)}}}function zs(z){let t,f;return t=new Do({props:{$$slots:{default:[$s]},$$scope:{ctx:z}}}),{c(){g(t.$$.fragment)},l(o){_(t.$$.fragment,o)},m(o,l){T(t,o,l),f=!0},p(o,l){const M={};l&2&&(M.$$scope={dirty:l,ctx:o}),t.$set(M)},i(o){f||(b(t.$$.fragment,o),f=!0)},o(o){y(t.$$.fragment,o),f=!1},d(o){k(t,o)}}}function js(z){let t,f="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,l,M="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",s,v,ke=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,q,Z,le=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,H,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=c("p"),t.innerHTML=f,o=a(),l=c("ul"),l.innerHTML=M,s=a(),v=c("p"),v.innerHTML=ke,q=a(),Z=c("ul"),Z.innerHTML=le,U=a(),H=c("p"),H.innerHTML=A},l(x){t=p(x,"P",{"data-svelte-h":!0}),m(t)!=="svelte-1ajbfxg"&&(t.innerHTML=f),o=r(x),l=p(x,"UL",{"data-svelte-h":!0}),m(l)!=="svelte-qm1t26"&&(l.innerHTML=M),s=r(x),v=p(x,"P",{"data-svelte-h":!0}),m(v)!=="svelte-1v9qsc5"&&(v.innerHTML=ke),q=r(x),Z=p(x,"UL",{"data-svelte-h":!0}),m(Z)!=="svelte-15scerc"&&(Z.innerHTML=le),U=r(x),H=p(x,"P",{"data-svelte-h":!0}),m(H)!=="svelte-1an3odd"&&(H.innerHTML=A)},m(x,J){i(x,t,J),i(x,o,J),i(x,l,J),i(x,s,J),i(x,v,J),i(x,q,J),i(x,Z,J),i(x,U,J),i(x,H,J)},p:de,d(x){x&&(n(t),n(o),n(l),n(s),n(v),n(q),n(Z),n(U),n(H))}}}function Fs(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function Cs(z){let t,f="Examples:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlQ1TW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGVDVNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMlN0dWRpZXMlMjBoYXZlJTIwYmVlbiUyMHNob3duJTIwdGhhdCUyMG93bmluZyUyMGElMjBkb2clMjBpcyUyMGdvb2QlMjBmb3IlMjB5b3UlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTBBKS5pbnB1dF9pZHMlMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBZGVjb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyU3R1ZGllcyUyMHNob3clMjB0aGF0JTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMikuaW5wdXRfaWRzJTIwJTIwJTIzJTIwQmF0Y2glMjBzaXplJTIwMSUwQSUwQSUyMyUyMHByZXByb2Nlc3MlM0ElMjBQcmVwZW5kJTIwZGVjb2Rlcl9pbnB1dF9pZHMlMjB3aXRoJTIwc3RhcnQlMjB0b2tlbiUyMHdoaWNoJTIwaXMlMjBwYWQlMjB0b2tlbiUyMGZvciUyMFQ1TW9kZWwuJTBBJTIzJTIwVGhpcyUyMGlzJTIwbm90JTIwbmVlZGVkJTIwZm9yJTIwdG9yY2gncyUyMFQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTIwYXMlMjBpdCUyMGRvZXMlMjB0aGlzJTIwaW50ZXJuYWxseSUyMHVzaW5nJTIwbGFiZWxzJTIwYXJnLiUwQWRlY29kZXJfaW5wdXRfaWRzJTIwJTNEJTIwbW9kZWwuX3NoaWZ0X3JpZ2h0KGRlY29kZXJfaW5wdXRfaWRzKSUwQSUwQSUyMyUyMGZvcndhcmQlMjBwYXNzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUyQyUyMGRlY29kZXJfaW5wdXRfaWRzJTNEZGVjb2Rlcl9pbnB1dF9pZHMpJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5Model.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># preprocess: Prepend decoder_input_ids with start token which is pad token for T5Model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is not needed for torch&#x27;s T5ForConditionalGeneration as it does this internally using labels arg.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = model._shift_right(decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-kvfsh7"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function Js(z){let t,f="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,l,M="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",s,v,ke=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,q,Z,le=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,H,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=c("p"),t.innerHTML=f,o=a(),l=c("ul"),l.innerHTML=M,s=a(),v=c("p"),v.innerHTML=ke,q=a(),Z=c("ul"),Z.innerHTML=le,U=a(),H=c("p"),H.innerHTML=A},l(x){t=p(x,"P",{"data-svelte-h":!0}),m(t)!=="svelte-1ajbfxg"&&(t.innerHTML=f),o=r(x),l=p(x,"UL",{"data-svelte-h":!0}),m(l)!=="svelte-qm1t26"&&(l.innerHTML=M),s=r(x),v=p(x,"P",{"data-svelte-h":!0}),m(v)!=="svelte-1v9qsc5"&&(v.innerHTML=ke),q=r(x),Z=p(x,"UL",{"data-svelte-h":!0}),m(Z)!=="svelte-15scerc"&&(Z.innerHTML=le),U=r(x),H=p(x,"P",{"data-svelte-h":!0}),m(H)!=="svelte-1an3odd"&&(H.innerHTML=A)},m(x,J){i(x,t,J),i(x,o,J),i(x,l,J),i(x,s,J),i(x,v,J),i(x,q,J),i(x,Z,J),i(x,U,J),i(x,H,J)},p:de,d(x){x&&(n(t),n(o),n(l),n(s),n(v),n(q),n(Z),n(U),n(H))}}}function Us(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function qs(z){let t,f="Examples:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEElMEElMjMlMjB0cmFpbmluZyUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjAlM0NleHRyYV9pZF8wJTNFJTIwd2Fsa3MlMjBpbiUyMCUzQ2V4dHJhX2lkXzElM0UlMjBwYXJrJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMikuaW5wdXRfaWRzJTBBbGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMiUzQ2V4dHJhX2lkXzAlM0UlMjBjdXRlJTIwZG9nJTIwJTNDZXh0cmFfaWRfMSUzRSUyMHRoZSUyMCUzQ2V4dHJhX2lkXzIlM0UlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKS5pbnB1dF9pZHMlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyUwQSUwQSUyMyUyMGluZmVyZW5jZSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJzdW1tYXJpemUlM0ElMjBzdHVkaWVzJTIwaGF2ZSUyMHNob3duJTIwdGhhdCUyMG93bmluZyUyMGElMjBkb2clMjBpcyUyMGdvb2QlMjBmb3IlMjB5b3UlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTBBKS5pbnB1dF9pZHMlMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKGlucHV0cyklMEFwcmludCh0b2tlbml6ZXIuZGVjb2RlKG91dHB1dHMlNUIwJTVEJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpKSUwQSUyMyUyMHN0dWRpZXMlMjBoYXZlJTIwc2hvd24lMjB0aGF0JTIwb3duaW5nJTIwYSUyMGRvZyUyMGlzJTIwZ29vZCUyMGZvciUyMHlvdQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-kvfsh7"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function Zs(z){let t,f="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,l,M="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",s,v,ke=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,q,Z,le=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,H,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=c("p"),t.innerHTML=f,o=a(),l=c("ul"),l.innerHTML=M,s=a(),v=c("p"),v.innerHTML=ke,q=a(),Z=c("ul"),Z.innerHTML=le,U=a(),H=c("p"),H.innerHTML=A},l(x){t=p(x,"P",{"data-svelte-h":!0}),m(t)!=="svelte-1ajbfxg"&&(t.innerHTML=f),o=r(x),l=p(x,"UL",{"data-svelte-h":!0}),m(l)!=="svelte-qm1t26"&&(l.innerHTML=M),s=r(x),v=p(x,"P",{"data-svelte-h":!0}),m(v)!=="svelte-1v9qsc5"&&(v.innerHTML=ke),q=r(x),Z=p(x,"UL",{"data-svelte-h":!0}),m(Z)!=="svelte-15scerc"&&(Z.innerHTML=le),U=r(x),H=p(x,"P",{"data-svelte-h":!0}),m(H)!=="svelte-1an3odd"&&(H.innerHTML=A)},m(x,J){i(x,t,J),i(x,o,J),i(x,l,J),i(x,s,J),i(x,v,J),i(x,q,J),i(x,Z,J),i(x,U,J),i(x,H,J)},p:de,d(x){x&&(n(t),n(o),n(l),n(s),n(v),n(q),n(Z),n(U),n(H))}}}function Is(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function Gs(z){let t,f="Examples:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlQ1RW5jb2Rlck1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlQ1RW5jb2Rlck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEElMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIyU3R1ZGllcyUyMGhhdmUlMjBiZWVuJTIwc2hvd24lMjB0aGF0JTIwb3duaW5nJTIwYSUyMGRvZyUyMGlzJTIwZ29vZCUyMGZvciUyMHlvdSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIlMEEpLmlucHV0X2lkcyUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUyMDElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-kvfsh7"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function Ws(z){let t,f,o,l,M,s,v="The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top.",ke,q,Z=`The T5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,le,U,H=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,A,x,J=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Re,V,Me,ce,P,lt,Ee,te='The <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a> forward method, overrides the <code>__call__</code> special method.',_t,D,qe,N,pe,L,O,G,Ze,tt,Ie,pt="T5 Model with a <code>language modeling</code> head on top.",He,je,Ge=`The T5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,Tt,ae,Ne=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,bt,re,fe=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,ne,we,Pe,S,Qe,ue,ve,ge='The <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration">TFT5ForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',We,oe,Fe,W,_e,Be,Ae,X,me,xe,w,C="The bare T5 Model transformer outputting encoder’s raw hidden-stateswithout any specific head on top.",Y,Xe,De=`The T5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,K,Te,Oe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,E,ie,be=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Rt,ut,yt,ye,mt,Ve,jt,kt='The <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5EncoderModel">TFT5EncoderModel</a> forward method, overrides the <code>__call__</code> special method.',ht,Q,Ye,Mt,ft;return t=new Ue({props:{title:"TFT5Model",local:"transformers.TFT5Model",headingTag:"h2"}}),l=new R({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1178"}}),V=new zt({props:{$$slots:{default:[js]},$$scope:{ctx:z}}}),P=new R({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5Model.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5Model.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5Model.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFT5Model.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFT5Model.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFT5Model.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFT5Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5Model.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFT5Model.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFT5Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFT5Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFT5Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1210",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
`}}),D=new zt({props:{$$slots:{default:[Fs]},$$scope:{ctx:z}}}),N=new Nt({props:{anchor:"transformers.TFT5Model.call.example",$$slots:{default:[Cs]},$$scope:{ctx:z}}}),L=new Ue({props:{title:"TFT5ForConditionalGeneration",local:"transformers.TFT5ForConditionalGeneration",headingTag:"h2"}}),Ze=new R({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1330"}}),we=new zt({props:{$$slots:{default:[Js]},$$scope:{ctx:z}}}),Qe=new R({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFT5ForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFT5ForConditionalGeneration.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFT5ForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFT5ForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFT5ForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFT5ForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5ForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFT5ForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1387",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
`}}),oe=new zt({props:{$$slots:{default:[Us]},$$scope:{ctx:z}}}),W=new Nt({props:{anchor:"transformers.TFT5ForConditionalGeneration.call.example",$$slots:{default:[qs]},$$scope:{ctx:z}}}),Be=new Ue({props:{title:"TFT5EncoderModel",local:"transformers.TFT5EncoderModel",headingTag:"h2"}}),me=new R({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1600"}}),ut=new zt({props:{$$slots:{default:[Zs]},$$scope:{ctx:z}}}),mt=new R({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p>To know more on how to prepare <code>inputs</code> for pre-training take a look at <a href="./t5#training">T5 Training</a>.`,name:"inputs"},{anchor:"transformers.TFT5EncoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5EncoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5EncoderModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFT5EncoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFT5EncoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFT5EncoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1623",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Q=new zt({props:{$$slots:{default:[Is]},$$scope:{ctx:z}}}),Mt=new Nt({props:{anchor:"transformers.TFT5EncoderModel.call.example",$$slots:{default:[Gs]},$$scope:{ctx:z}}}),{c(){g(t.$$.fragment),f=a(),o=c("div"),g(l.$$.fragment),M=a(),s=c("p"),s.textContent=v,ke=a(),q=c("p"),q.innerHTML=Z,le=a(),U=c("p"),U.innerHTML=H,A=a(),x=c("p"),x.innerHTML=J,Re=a(),g(V.$$.fragment),Me=a(),ce=c("div"),g(P.$$.fragment),lt=a(),Ee=c("p"),Ee.innerHTML=te,_t=a(),g(D.$$.fragment),qe=a(),g(N.$$.fragment),pe=a(),g(L.$$.fragment),O=a(),G=c("div"),g(Ze.$$.fragment),tt=a(),Ie=c("p"),Ie.innerHTML=pt,He=a(),je=c("p"),je.innerHTML=Ge,Tt=a(),ae=c("p"),ae.innerHTML=Ne,bt=a(),re=c("p"),re.innerHTML=fe,ne=a(),g(we.$$.fragment),Pe=a(),S=c("div"),g(Qe.$$.fragment),ue=a(),ve=c("p"),ve.innerHTML=ge,We=a(),g(oe.$$.fragment),Fe=a(),g(W.$$.fragment),_e=a(),g(Be.$$.fragment),Ae=a(),X=c("div"),g(me.$$.fragment),xe=a(),w=c("p"),w.textContent=C,Y=a(),Xe=c("p"),Xe.innerHTML=De,K=a(),Te=c("p"),Te.innerHTML=Oe,E=a(),ie=c("p"),ie.innerHTML=be,Rt=a(),g(ut.$$.fragment),yt=a(),ye=c("div"),g(mt.$$.fragment),Ve=a(),jt=c("p"),jt.innerHTML=kt,ht=a(),g(Q.$$.fragment),Ye=a(),g(Mt.$$.fragment),this.h()},l($){_(t.$$.fragment,$),f=r($),o=p($,"DIV",{class:!0});var F=B(o);_(l.$$.fragment,F),M=r(F),s=p(F,"P",{"data-svelte-h":!0}),m(s)!=="svelte-2jd6xc"&&(s.textContent=v),ke=r(F),q=p(F,"P",{"data-svelte-h":!0}),m(q)!=="svelte-x400g0"&&(q.innerHTML=Z),le=r(F),U=p(F,"P",{"data-svelte-h":!0}),m(U)!=="svelte-1qaxm70"&&(U.innerHTML=H),A=r(F),x=p(F,"P",{"data-svelte-h":!0}),m(x)!=="svelte-1be7e3c"&&(x.innerHTML=J),Re=r(F),_(V.$$.fragment,F),Me=r(F),ce=p(F,"DIV",{class:!0});var $e=B(ce);_(P.$$.fragment,$e),lt=r($e),Ee=p($e,"P",{"data-svelte-h":!0}),m(Ee)!=="svelte-9cdagi"&&(Ee.innerHTML=te),_t=r($e),_(D.$$.fragment,$e),qe=r($e),_(N.$$.fragment,$e),$e.forEach(n),F.forEach(n),pe=r($),_(L.$$.fragment,$),O=r($),G=p($,"DIV",{class:!0});var se=B(G);_(Ze.$$.fragment,se),tt=r(se),Ie=p(se,"P",{"data-svelte-h":!0}),m(Ie)!=="svelte-6hhvcz"&&(Ie.innerHTML=pt),He=r(se),je=p(se,"P",{"data-svelte-h":!0}),m(je)!=="svelte-x400g0"&&(je.innerHTML=Ge),Tt=r(se),ae=p(se,"P",{"data-svelte-h":!0}),m(ae)!=="svelte-1qaxm70"&&(ae.innerHTML=Ne),bt=r(se),re=p(se,"P",{"data-svelte-h":!0}),m(re)!=="svelte-1be7e3c"&&(re.innerHTML=fe),ne=r(se),_(we.$$.fragment,se),Pe=r(se),S=p(se,"DIV",{class:!0});var nt=B(S);_(Qe.$$.fragment,nt),ue=r(nt),ve=p(nt,"P",{"data-svelte-h":!0}),m(ve)!=="svelte-ymgwpy"&&(ve.innerHTML=ge),We=r(nt),_(oe.$$.fragment,nt),Fe=r(nt),_(W.$$.fragment,nt),nt.forEach(n),se.forEach(n),_e=r($),_(Be.$$.fragment,$),Ae=r($),X=p($,"DIV",{class:!0});var ee=B(X);_(me.$$.fragment,ee),xe=r(ee),w=p(ee,"P",{"data-svelte-h":!0}),m(w)!=="svelte-hvu8fo"&&(w.textContent=C),Y=r(ee),Xe=p(ee,"P",{"data-svelte-h":!0}),m(Xe)!=="svelte-x400g0"&&(Xe.innerHTML=De),K=r(ee),Te=p(ee,"P",{"data-svelte-h":!0}),m(Te)!=="svelte-1qaxm70"&&(Te.innerHTML=Oe),E=r(ee),ie=p(ee,"P",{"data-svelte-h":!0}),m(ie)!=="svelte-1be7e3c"&&(ie.innerHTML=be),Rt=r(ee),_(ut.$$.fragment,ee),yt=r(ee),ye=p(ee,"DIV",{class:!0});var Ce=B(ye);_(mt.$$.fragment,Ce),Ve=r(Ce),jt=p(Ce,"P",{"data-svelte-h":!0}),m(jt)!=="svelte-48kau2"&&(jt.innerHTML=kt),ht=r(Ce),_(Q.$$.fragment,Ce),Ye=r(Ce),_(Mt.$$.fragment,Ce),Ce.forEach(n),ee.forEach(n),this.h()},h(){I(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m($,F){T(t,$,F),i($,f,F),i($,o,F),T(l,o,null),d(o,M),d(o,s),d(o,ke),d(o,q),d(o,le),d(o,U),d(o,A),d(o,x),d(o,Re),T(V,o,null),d(o,Me),d(o,ce),T(P,ce,null),d(ce,lt),d(ce,Ee),d(ce,_t),T(D,ce,null),d(ce,qe),T(N,ce,null),i($,pe,F),T(L,$,F),i($,O,F),i($,G,F),T(Ze,G,null),d(G,tt),d(G,Ie),d(G,He),d(G,je),d(G,Tt),d(G,ae),d(G,bt),d(G,re),d(G,ne),T(we,G,null),d(G,Pe),d(G,S),T(Qe,S,null),d(S,ue),d(S,ve),d(S,We),T(oe,S,null),d(S,Fe),T(W,S,null),i($,_e,F),T(Be,$,F),i($,Ae,F),i($,X,F),T(me,X,null),d(X,xe),d(X,w),d(X,Y),d(X,Xe),d(X,K),d(X,Te),d(X,E),d(X,ie),d(X,Rt),T(ut,X,null),d(X,yt),d(X,ye),T(mt,ye,null),d(ye,Ve),d(ye,jt),d(ye,ht),T(Q,ye,null),d(ye,Ye),T(Mt,ye,null),ft=!0},p($,F){const $e={};F&2&&($e.$$scope={dirty:F,ctx:$}),V.$set($e);const se={};F&2&&(se.$$scope={dirty:F,ctx:$}),D.$set(se);const nt={};F&2&&(nt.$$scope={dirty:F,ctx:$}),N.$set(nt);const ee={};F&2&&(ee.$$scope={dirty:F,ctx:$}),we.$set(ee);const Ce={};F&2&&(Ce.$$scope={dirty:F,ctx:$}),oe.$set(Ce);const gn={};F&2&&(gn.$$scope={dirty:F,ctx:$}),W.$set(gn);const Ft={};F&2&&(Ft.$$scope={dirty:F,ctx:$}),ut.$set(Ft);const Ht={};F&2&&(Ht.$$scope={dirty:F,ctx:$}),Q.$set(Ht);const Xt={};F&2&&(Xt.$$scope={dirty:F,ctx:$}),Mt.$set(Xt)},i($){ft||(b(t.$$.fragment,$),b(l.$$.fragment,$),b(V.$$.fragment,$),b(P.$$.fragment,$),b(D.$$.fragment,$),b(N.$$.fragment,$),b(L.$$.fragment,$),b(Ze.$$.fragment,$),b(we.$$.fragment,$),b(Qe.$$.fragment,$),b(oe.$$.fragment,$),b(W.$$.fragment,$),b(Be.$$.fragment,$),b(me.$$.fragment,$),b(ut.$$.fragment,$),b(mt.$$.fragment,$),b(Q.$$.fragment,$),b(Mt.$$.fragment,$),ft=!0)},o($){y(t.$$.fragment,$),y(l.$$.fragment,$),y(V.$$.fragment,$),y(P.$$.fragment,$),y(D.$$.fragment,$),y(N.$$.fragment,$),y(L.$$.fragment,$),y(Ze.$$.fragment,$),y(we.$$.fragment,$),y(Qe.$$.fragment,$),y(oe.$$.fragment,$),y(W.$$.fragment,$),y(Be.$$.fragment,$),y(me.$$.fragment,$),y(ut.$$.fragment,$),y(mt.$$.fragment,$),y(Q.$$.fragment,$),y(Mt.$$.fragment,$),ft=!1},d($){$&&(n(f),n(o),n(pe),n(O),n(G),n(_e),n(Ae),n(X)),k(t,$),k(l),k(V),k(P),k(D),k(N),k(L,$),k(Ze),k(we),k(Qe),k(oe),k(W),k(Be,$),k(me),k(ut),k(mt),k(Q),k(Mt)}}}function Bs(z){let t,f;return t=new Do({props:{$$slots:{default:[Ws]},$$scope:{ctx:z}}}),{c(){g(t.$$.fragment)},l(o){_(t.$$.fragment,o)},m(o,l){T(t,o,l),f=!0},p(o,l){const M={};l&2&&(M.$$scope={dirty:l,ctx:o}),t.$set(M)},i(o){f||(b(t.$$.fragment,o),f=!0)},o(o){y(t.$$.fragment,o),f=!1},d(o){k(t,o)}}}function Rs(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function Hs(z){let t,f="Example:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4VDVNb2RlbCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS10NSUyRnQ1LXNtYWxsJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheFQ1TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS10NSUyRnQ1LXNtYWxsJTIyKSUwQSUwQWlucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJTdHVkaWVzJTIwaGF2ZSUyMGJlZW4lMjBzaG93biUyMHRoYXQlMjBvd25pbmclMjBhJTIwZG9nJTIwaXMlMjBnb29kJTIwZm9yJTIweW91JTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMiUwQSkuaW5wdXRfaWRzJTBBZGVjb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyU3R1ZGllcyUyMHNob3clMjB0aGF0JTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMikuaW5wdXRfaWRzJTBBJTBBJTIzJTIwcHJlcHJvY2VzcyUzQSUyMFByZXBlbmQlMjBkZWNvZGVyX2lucHV0X2lkcyUyMHdpdGglMjBzdGFydCUyMHRva2VuJTIwd2hpY2glMjBpcyUyMHBhZCUyMHRva2VuJTIwZm9yJTIwVDVNb2RlbC4lMEElMjMlMjBUaGlzJTIwaXMlMjBub3QlMjBuZWVkZWQlMjBmb3IlMjB0b3JjaCdzJTIwVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMjBhcyUyMGl0JTIwZG9lcyUyMHRoaXMlMjBpbnRlcm5hbGx5JTIwdXNpbmclMjBsYWJlbHMlMjBhcmcuJTBBZGVjb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjBtb2RlbC5fc2hpZnRfcmlnaHQoZGVjb2Rlcl9pbnB1dF9pZHMpJTBBJTBBJTIzJTIwZm9yd2FyZCUyMHBhc3MlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEaW5wdXRfaWRzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RkZWNvZGVyX2lucHV0X2lkcyklMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5Model.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># preprocess: Prepend decoder_input_ids with start token which is pad token for T5Model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is not needed for torch&#x27;s T5ForConditionalGeneration as it does this internally using labels arg.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = model._shift_right(decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-11lpom8"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function Ns(z){let t,f="Example:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4VDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhUNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBJTBBdGV4dCUyMCUzRCUyMCUyMk15JTIwZnJpZW5kcyUyMGFyZSUyMGNvb2wlMjBidXQlMjB0aGV5JTIwZWF0JTIwdG9vJTIwbWFueSUyMGNhcmJzLiUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcih0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMiklMEFlbmNvZGVyX291dHB1dHMlMjAlM0QlMjBtb2RlbC5lbmNvZGUoKippbnB1dHMp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-11lpom8"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function Xs(z){let t,f="Example:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4VDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEFpbXBvcnQlMjBqYXgubnVtcHklMjBhcyUyMGpucCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS10NSUyRnQ1LXNtYWxsJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheFQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEElMEF0ZXh0JTIwJTNEJTIwJTIyTXklMjBmcmllbmRzJTIwYXJlJTIwY29vbCUyMGJ1dCUyMHRoZXklMjBlYXQlMjB0b28lMjBtYW55JTIwY2FyYnMuJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQWVuY29kZXJfb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmVuY29kZSgqKmlucHV0cyklMEElMEFkZWNvZGVyX3N0YXJ0X3Rva2VuX2lkJTIwJTNEJTIwbW9kZWwuY29uZmlnLmRlY29kZXJfc3RhcnRfdG9rZW5faWQlMEFkZWNvZGVyX2lucHV0X2lkcyUyMCUzRCUyMGpucC5vbmVzKChpbnB1dHMuaW5wdXRfaWRzLnNoYXBlJTVCMCU1RCUyQyUyMDEpJTJDJTIwZHR5cGUlM0QlMjJpNCUyMiklMjAqJTIwZGVjb2Rlcl9zdGFydF90b2tlbl9pZCUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbC5kZWNvZGUoZGVjb2Rlcl9pbnB1dF9pZHMlMkMlMjBlbmNvZGVyX291dHB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-11lpom8"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function Vs(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function Ls(z){let t,f="Example:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4VDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhUNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBJTBBQVJUSUNMRV9UT19TVU1NQVJJWkUlMjAlM0QlMjAlMjJzdW1tYXJpemUlM0ElMjBNeSUyMGZyaWVuZHMlMjBhcmUlMjBjb29sJTIwYnV0JTIwdGhleSUyMGVhdCUyMHRvbyUyMG1hbnklMjBjYXJicy4lMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTVCQVJUSUNMRV9UT19TVU1NQVJJWkUlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQSUwQSUyMyUyMEdlbmVyYXRlJTIwU3VtbWFyeSUwQXN1bW1hcnlfaWRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEKS5zZXF1ZW5jZXMlMEFwcmludCh0b2tlbml6ZXIuZGVjb2RlKHN1bW1hcnlfaWRzJTVCMCU1RCUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlJTJDJTIwY2xlYW5fdXBfdG9rZW5pemF0aW9uX3NwYWNlcyUzREZhbHNlKSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-11lpom8"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function Ss(z){let t,f="Example:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4VDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhUNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBJTBBdGV4dCUyMCUzRCUyMCUyMk15JTIwZnJpZW5kcyUyMGFyZSUyMGNvb2wlMjBidXQlMjB0aGV5JTIwZWF0JTIwdG9vJTIwbWFueSUyMGNhcmJzLiUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcih0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMiklMEFlbmNvZGVyX291dHB1dHMlMjAlM0QlMjBtb2RlbC5lbmNvZGUoKippbnB1dHMp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-11lpom8"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function Es(z){let t,f="Example:",o,l,M;return l=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4VDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEFpbXBvcnQlMjBqYXgubnVtcHklMjBhcyUyMGpucCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS10NSUyRnQ1LXNtYWxsJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheFQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEElMEF0ZXh0JTIwJTNEJTIwJTIyc3VtbWFyaXplJTNBJTIwTXklMjBmcmllbmRzJTIwYXJlJTIwY29vbCUyMGJ1dCUyMHRoZXklMjBlYXQlMjB0b28lMjBtYW55JTIwY2FyYnMuJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQWVuY29kZXJfb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmVuY29kZSgqKmlucHV0cyklMEElMEFkZWNvZGVyX3N0YXJ0X3Rva2VuX2lkJTIwJTNEJTIwbW9kZWwuY29uZmlnLmRlY29kZXJfc3RhcnRfdG9rZW5faWQlMEFkZWNvZGVyX2lucHV0X2lkcyUyMCUzRCUyMGpucC5vbmVzKChpbnB1dHMuaW5wdXRfaWRzLnNoYXBlJTVCMCU1RCUyQyUyMDEpJTJDJTIwZHR5cGUlM0QlMjJpNCUyMiklMjAqJTIwZGVjb2Rlcl9zdGFydF90b2tlbl9pZCUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbC5kZWNvZGUoZGVjb2Rlcl9pbnB1dF9pZHMlMkMlMjBlbmNvZGVyX291dHB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,o=a(),g(l.$$.fragment)},l(s){t=p(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-11lpom8"&&(t.textContent=f),o=r(s),_(l.$$.fragment,s)},m(s,v){i(s,t,v),i(s,o,v),T(l,s,v),M=!0},p:de,i(s){M||(b(l.$$.fragment,s),M=!0)},o(s){y(l.$$.fragment,s),M=!1},d(s){s&&(n(t),n(o)),k(l,s)}}}function Ps(z){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(o){t=p(o,"P",{"data-svelte-h":!0}),m(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(o,l){i(o,t,l)},p:de,d(o){o&&n(t)}}}function Qs(z){let t,f,o,l,M,s,v,ke,q,Z="The <code>FlaxT5PreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",le,U,H,A,x,J,Re,V,Me,ce,P,lt,Ee,te,_t,D,qe,N,pe,L,O,G,Ze,tt,Ie="The <code>FlaxT5PreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",pt,He,je,Ge,Tt,ae,Ne,bt,re,fe,ne,we,Pe,S,Qe,ue,ve,ge,We,oe,Fe,W,_e,Be,Ae='The <a href="/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5EncoderModel">FlaxT5EncoderModel</a> forward method, overrides the <code>__call__</code> special method.',X,me,xe;return t=new Ue({props:{title:"FlaxT5Model",local:"transformers.FlaxT5Model",headingTag:"h2"}}),l=new R({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1367"}}),v=new R({props:{name:"__call__",anchor:"transformers.FlaxT5Model.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Array = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5Model.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5Model.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L986",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
`}}),U=new zt({props:{$$slots:{default:[Rs]},$$scope:{ctx:z}}}),A=new Nt({props:{anchor:"transformers.FlaxT5Model.__call__.example",$$slots:{default:[Hs]},$$scope:{ctx:z}}}),Re=new R({props:{name:"encode",anchor:"transformers.FlaxT5Model.encode",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5Model.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5Model.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1072",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new Nt({props:{anchor:"transformers.FlaxT5Model.encode.example",$$slots:{default:[Ns]},$$scope:{ctx:z}}}),lt=new R({props:{name:"decode",anchor:"transformers.FlaxT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5Model.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5Model.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5Model.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5Model.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5Model.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5Model.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5Model.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1130",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
`}}),te=new Nt({props:{anchor:"transformers.FlaxT5Model.decode.example",$$slots:{default:[Xs]},$$scope:{ctx:z}}}),D=new Ue({props:{title:"FlaxT5ForConditionalGeneration",local:"transformers.FlaxT5ForConditionalGeneration",headingTag:"h2"}}),pe=new R({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1605"}}),G=new R({props:{name:"__call__",anchor:"transformers.FlaxT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Array = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L986",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
`}}),He=new zt({props:{$$slots:{default:[Vs]},$$scope:{ctx:z}}}),Ge=new Nt({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.example",$$slots:{default:[Ls]},$$scope:{ctx:z}}}),Ne=new R({props:{name:"encode",anchor:"transformers.FlaxT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1072",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new Nt({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.example",$$slots:{default:[Ss]},$$scope:{ctx:z}}}),we=new R({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1608",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
`}}),S=new Nt({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.example",$$slots:{default:[Es]},$$scope:{ctx:z}}}),ue=new Ue({props:{title:"FlaxT5EncoderModel",local:"transformers.FlaxT5EncoderModel",headingTag:"h2"}}),We=new R({props:{name:"class transformers.FlaxT5EncoderModel",anchor:"transformers.FlaxT5EncoderModel",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1454"}}),W=new R({props:{name:"__call__",anchor:"transformers.FlaxT5EncoderModel.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5EncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5EncoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5EncoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5EncoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5EncoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1457"}}),me=new zt({props:{$$slots:{default:[Ps]},$$scope:{ctx:z}}}),{c(){g(t.$$.fragment),f=a(),o=c("div"),g(l.$$.fragment),M=a(),s=c("div"),g(v.$$.fragment),ke=a(),q=c("p"),q.innerHTML=Z,le=a(),g(U.$$.fragment),H=a(),g(A.$$.fragment),x=a(),J=c("div"),g(Re.$$.fragment),V=a(),g(Me.$$.fragment),ce=a(),P=c("div"),g(lt.$$.fragment),Ee=a(),g(te.$$.fragment),_t=a(),g(D.$$.fragment),qe=a(),N=c("div"),g(pe.$$.fragment),L=a(),O=c("div"),g(G.$$.fragment),Ze=a(),tt=c("p"),tt.innerHTML=Ie,pt=a(),g(He.$$.fragment),je=a(),g(Ge.$$.fragment),Tt=a(),ae=c("div"),g(Ne.$$.fragment),bt=a(),g(re.$$.fragment),fe=a(),ne=c("div"),g(we.$$.fragment),Pe=a(),g(S.$$.fragment),Qe=a(),g(ue.$$.fragment),ve=a(),ge=c("div"),g(We.$$.fragment),oe=a(),Fe=c("div"),g(W.$$.fragment),_e=a(),Be=c("p"),Be.innerHTML=Ae,X=a(),g(me.$$.fragment),this.h()},l(w){_(t.$$.fragment,w),f=r(w),o=p(w,"DIV",{class:!0});var C=B(o);_(l.$$.fragment,C),M=r(C),s=p(C,"DIV",{class:!0});var Y=B(s);_(v.$$.fragment,Y),ke=r(Y),q=p(Y,"P",{"data-svelte-h":!0}),m(q)!=="svelte-w4u0pe"&&(q.innerHTML=Z),le=r(Y),_(U.$$.fragment,Y),H=r(Y),_(A.$$.fragment,Y),Y.forEach(n),x=r(C),J=p(C,"DIV",{class:!0});var Xe=B(J);_(Re.$$.fragment,Xe),V=r(Xe),_(Me.$$.fragment,Xe),Xe.forEach(n),ce=r(C),P=p(C,"DIV",{class:!0});var De=B(P);_(lt.$$.fragment,De),Ee=r(De),_(te.$$.fragment,De),De.forEach(n),C.forEach(n),_t=r(w),_(D.$$.fragment,w),qe=r(w),N=p(w,"DIV",{class:!0});var K=B(N);_(pe.$$.fragment,K),L=r(K),O=p(K,"DIV",{class:!0});var Te=B(O);_(G.$$.fragment,Te),Ze=r(Te),tt=p(Te,"P",{"data-svelte-h":!0}),m(tt)!=="svelte-w4u0pe"&&(tt.innerHTML=Ie),pt=r(Te),_(He.$$.fragment,Te),je=r(Te),_(Ge.$$.fragment,Te),Te.forEach(n),Tt=r(K),ae=p(K,"DIV",{class:!0});var Oe=B(ae);_(Ne.$$.fragment,Oe),bt=r(Oe),_(re.$$.fragment,Oe),Oe.forEach(n),fe=r(K),ne=p(K,"DIV",{class:!0});var E=B(ne);_(we.$$.fragment,E),Pe=r(E),_(S.$$.fragment,E),E.forEach(n),K.forEach(n),Qe=r(w),_(ue.$$.fragment,w),ve=r(w),ge=p(w,"DIV",{class:!0});var ie=B(ge);_(We.$$.fragment,ie),oe=r(ie),Fe=p(ie,"DIV",{class:!0});var be=B(Fe);_(W.$$.fragment,be),_e=r(be),Be=p(be,"P",{"data-svelte-h":!0}),m(Be)!=="svelte-wun2eg"&&(Be.innerHTML=Ae),X=r(be),_(me.$$.fragment,be),be.forEach(n),ie.forEach(n),this.h()},h(){I(s,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(w,C){T(t,w,C),i(w,f,C),i(w,o,C),T(l,o,null),d(o,M),d(o,s),T(v,s,null),d(s,ke),d(s,q),d(s,le),T(U,s,null),d(s,H),T(A,s,null),d(o,x),d(o,J),T(Re,J,null),d(J,V),T(Me,J,null),d(o,ce),d(o,P),T(lt,P,null),d(P,Ee),T(te,P,null),i(w,_t,C),T(D,w,C),i(w,qe,C),i(w,N,C),T(pe,N,null),d(N,L),d(N,O),T(G,O,null),d(O,Ze),d(O,tt),d(O,pt),T(He,O,null),d(O,je),T(Ge,O,null),d(N,Tt),d(N,ae),T(Ne,ae,null),d(ae,bt),T(re,ae,null),d(N,fe),d(N,ne),T(we,ne,null),d(ne,Pe),T(S,ne,null),i(w,Qe,C),T(ue,w,C),i(w,ve,C),i(w,ge,C),T(We,ge,null),d(ge,oe),d(ge,Fe),T(W,Fe,null),d(Fe,_e),d(Fe,Be),d(Fe,X),T(me,Fe,null),xe=!0},p(w,C){const Y={};C&2&&(Y.$$scope={dirty:C,ctx:w}),U.$set(Y);const Xe={};C&2&&(Xe.$$scope={dirty:C,ctx:w}),A.$set(Xe);const De={};C&2&&(De.$$scope={dirty:C,ctx:w}),Me.$set(De);const K={};C&2&&(K.$$scope={dirty:C,ctx:w}),te.$set(K);const Te={};C&2&&(Te.$$scope={dirty:C,ctx:w}),He.$set(Te);const Oe={};C&2&&(Oe.$$scope={dirty:C,ctx:w}),Ge.$set(Oe);const E={};C&2&&(E.$$scope={dirty:C,ctx:w}),re.$set(E);const ie={};C&2&&(ie.$$scope={dirty:C,ctx:w}),S.$set(ie);const be={};C&2&&(be.$$scope={dirty:C,ctx:w}),me.$set(be)},i(w){xe||(b(t.$$.fragment,w),b(l.$$.fragment,w),b(v.$$.fragment,w),b(U.$$.fragment,w),b(A.$$.fragment,w),b(Re.$$.fragment,w),b(Me.$$.fragment,w),b(lt.$$.fragment,w),b(te.$$.fragment,w),b(D.$$.fragment,w),b(pe.$$.fragment,w),b(G.$$.fragment,w),b(He.$$.fragment,w),b(Ge.$$.fragment,w),b(Ne.$$.fragment,w),b(re.$$.fragment,w),b(we.$$.fragment,w),b(S.$$.fragment,w),b(ue.$$.fragment,w),b(We.$$.fragment,w),b(W.$$.fragment,w),b(me.$$.fragment,w),xe=!0)},o(w){y(t.$$.fragment,w),y(l.$$.fragment,w),y(v.$$.fragment,w),y(U.$$.fragment,w),y(A.$$.fragment,w),y(Re.$$.fragment,w),y(Me.$$.fragment,w),y(lt.$$.fragment,w),y(te.$$.fragment,w),y(D.$$.fragment,w),y(pe.$$.fragment,w),y(G.$$.fragment,w),y(He.$$.fragment,w),y(Ge.$$.fragment,w),y(Ne.$$.fragment,w),y(re.$$.fragment,w),y(we.$$.fragment,w),y(S.$$.fragment,w),y(ue.$$.fragment,w),y(We.$$.fragment,w),y(W.$$.fragment,w),y(me.$$.fragment,w),xe=!1},d(w){w&&(n(f),n(o),n(_t),n(qe),n(N),n(Qe),n(ve),n(ge)),k(t,w),k(l),k(v),k(U),k(A),k(Re),k(Me),k(lt),k(te),k(D,w),k(pe),k(G),k(He),k(Ge),k(Ne),k(re),k(we),k(S),k(ue,w),k(We),k(W),k(me)}}}function As(z){let t,f;return t=new Do({props:{$$slots:{default:[Qs]},$$scope:{ctx:z}}}),{c(){g(t.$$.fragment)},l(o){_(t.$$.fragment,o)},m(o,l){T(t,o,l),f=!0},p(o,l){const M={};l&2&&(M.$$scope={dirty:l,ctx:o}),t.$set(M)},i(o){f||(b(t.$$.fragment,o),f=!0)},o(o){y(t.$$.fragment,o),f=!1},d(o){k(t,o)}}}function Ds(z){let t,f,o,l,M,s,v,ke='<a href="https://huggingface.co/models?filter=t5"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-t5-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/t5-base"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a> <a href="https://huggingface.co/papers/1910.10683"><img alt="Paper page" src="https://img.shields.io/badge/Paper%20page-1910.10683-green"/></a>',q,Z,le,U,H=`The T5 model was presented in <a href="https://arxiv.org/pdf/1910.10683.pdf" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer</a> by <a href="https://huggingface.co/craffel" rel="nofollow">Colin Raffel</a>, Noam Shazeer, <a href="https://huggingface.co/adarob" rel="nofollow">Adam Roberts</a>, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, <a href="https://huggingface.co/peterjliu" rel="nofollow">Peter J. Liu</a>.`,A,x,J="The abstract from the paper is the following:",Re,V,Me=`<em>Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new “Colossal Clean Crawled Corpus”, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.</em>`,ce,P,lt='All checkpoints can be found on the <a href="https://huggingface.co/models?search=t5" rel="nofollow">hub</a>.',Ee,te,_t='This model was contributed by <a href="https://huggingface.co/thomwolf" rel="nofollow">thomwolf</a>. The original code can be found <a href="https://github.com/google-research/text-to-text-transfer-transformer" rel="nofollow">here</a>.',D,qe,N,pe,L=`<li><p>T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: <em>translate English to German: …</em>,
for summarization: <em>summarize: …</em>.</p></li> <li><p>The pretraining includes both supervised and self-supervised training. Supervised training is conducted on downstream tasks provided by the GLUE and SuperGLUE benchmarks (converting them into text-to-text tasks as explained above).</p></li> <li><p>Self-supervised training uses corrupted tokens, by randomly removing 15% of the tokens and replacing them with individual sentinel tokens (if several consecutive tokens are marked for removal, the whole group is replaced with a single sentinel token). The input of the encoder is the corrupted sentence, the input of the decoder is the original sentence and the target is then the dropped out tokens delimited by their sentinel tokens.</p></li> <li><p>T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right.</p></li> <li><p>See the <a href="#training">training</a>, <a href="#inference">inference</a> and <a href="#resources">resources</a> sections below for all details regarding usage.</p></li>`,O,G,Ze="T5 comes in different sizes:",tt,Ie,pt='<li><p><a href="https://huggingface.co/google-t5/t5-small" rel="nofollow">google-t5/t5-small</a></p></li> <li><p><a href="https://huggingface.co/google-t5/t5-base" rel="nofollow">google-t5/t5-base</a></p></li> <li><p><a href="https://huggingface.co/google-t5/t5-large" rel="nofollow">google-t5/t5-large</a></p></li> <li><p><a href="https://huggingface.co/google-t5/t5-3b" rel="nofollow">google-t5/t5-3b</a></p></li> <li><p><a href="https://huggingface.co/google-t5/t5-11b" rel="nofollow">google-t5/t5-11b</a>.</p></li>',He,je,Ge="Based on the original T5 model, Google has released some follow-up works:",Tt,ae,Ne=`<li><p><strong>T5v1.1</strong>: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found <a href="t5v1.1">here</a>.</p></li> <li><p><strong>mT5</strong>: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found <a href="mt5">here</a>.</p></li> <li><p><strong>byT5</strong>: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found <a href="byt5">here</a>.</p></li> <li><p><strong>UL2</strong>: UL2 is a T5 like model pretrained on various denoising objectives</p></li> <li><p><strong>Flan-T5</strong>: Flan is a pretraining methods that is based on prompting. The Flan-T5 are T5 models trained on the Flan collection of
datasets which include: <code>taskmaster2</code>, <code>djaym7/wiki_dialog</code>, <code>deepmind/code_contests</code>, <code>lambada</code>, <code>gsm8k</code>, <code>aqua_rat</code>, <code>esnli</code>, <code>quasc</code> and <code>qed</code>.</p></li> <li><p><strong>FLan-UL2</strong> : the UL2 model finetuned using the “Flan” prompt tuning and dataset collection.</p></li> <li><p><strong>UMT5</strong>: UmT5 is a multilingual T5 model trained on an improved and refreshed mC4 multilingual corpus,  29 trillion characters across 107 language, using a new sampling method, UniMax. Refer to
the documentation of mT5 which can be found <a href="umt5">here</a>.</p></li>`,bt,re,fe,ne,we=`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using <code>input_ids</code>. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the <code>decoder_input_ids</code>. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the <code>labels</code>. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`,Pe,S,Qe=`One can use <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration">T5ForConditionalGeneration</a> (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`,ue,ve,ge="<li>Unsupervised denoising training</li>",We,oe,Fe=`In this setup, spans of the input sequence are masked by so-called sentinel tokens (<em>a.k.a</em> unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the <em>real</em> masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with <code>&lt;extra_id_0&gt;</code>,
<code>&lt;extra_id_1&gt;</code>, … up to <code>&lt;extra_id_99&gt;</code>. As a default, 100 sentinel tokens are available in
<a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>.`,W,_e,Be=`For instance, the sentence “The cute dog walks in the park” with the masks put on “cute dog” and “the” should be
processed as follows:`,Ae,X,me,xe,w=`If you’re interested in pre-training T5 on a new corpus, check out the <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling" rel="nofollow">run_t5_mlm_flax.py</a> script in the Examples
directory.`,C,Y,Xe="<li>Supervised training</li>",De,K,Te=`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence “The house is wonderful.” and output sequence “Das Haus ist wunderbar.”, then they should be prepared for
the model as follows:`,Oe,E,ie,be,Rt=`As you can see, only 2 inputs are required for the model in order to compute a loss: <code>input_ids</code> (which are the
<code>input_ids</code> of the encoded input sequence) and <code>labels</code> (which are the <code>input_ids</code> of the encoded
target sequence). The model will automatically create the <code>decoder_input_ids</code> based on the <code>labels</code>, by
shifting them one position to the right and prepending the <code>config.decoder_start_token_id</code>, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with ‘translate
English to German: ’ before encoding it. This will help in improving the performance, as this task prefix was used
during T5’s pre-training.`,ut,yt,ye=`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a <code>max_source_length</code> and <code>max_target_length</code>, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`,mt,Ve,jt=`In addition, we must make sure that padding token id’s of the <code>labels</code> are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the <code>ignore_index</code>
of the <code>CrossEntropyLoss</code>. In Flax, one can use the <code>decoder_attention_mask</code> to ignore padded tokens from
the loss (see the <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/summarization" rel="nofollow">Flax summarization script</a> for details). We also pass
<code>attention_mask</code> as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`,kt,ht,Q,Ye,Mt="Additional training tips:",ft,$,F=`<li>T5 models need a slightly higher learning rate than the default one set in the <code>Trainer</code> when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.</li>`,$e,se,nt=`According to <a href="https://discuss.huggingface.co/t/t5-finetuning-tips/684" rel="nofollow">this forum post</a>, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5’s
pre-training mixture (see Appendix D of the <a href="https://arxiv.org/pdf/1910.10683.pdf" rel="nofollow">paper</a> for the task prefixes
used).`,ee,Ce,gn=`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
<em>pad_to_multiple_of</em> to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`,Ft,Ht,Xt,ot,sn=`At inference time, it is recommended to use <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate">generate()</a>. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out <a href="https://huggingface.co/blog/how-to-generate" rel="nofollow">this blog post</a> to know all the details about generating text with Transformers.
There’s also <a href="https://huggingface.co/blog/encoder-decoder#encoder-decoder" rel="nofollow">this blog post</a> which explains how
generation works in general in encoder-decoder models.`,wn,Ct,In,Vt,Lt=`Note that T5 uses the <code>pad_token_id</code> as the <code>decoder_start_token_id</code>, so when doing generation without using
<a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate">generate()</a>, make sure you start it with the <code>pad_token_id</code>.`,_n,wt,Gn="The example above only shows a single example. You can also do batched inference, like so:",Je,vt,vn,Jt,bo=`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`,xn,Ut,Wn,St,Et,an,eo='If you’d like a faster training and inference performance, install <a href="https://github.com/NVIDIA/apex#quick-start" rel="nofollow">NVIDIA APEX</a> for NVIDIA GPUs, or <a href="https://github.com/ROCmSoftwarePlatform/apex" rel="nofollow">ROCm APEX</a> for AMD GPUs and then the model will automatically use <code>apex.normalization.FusedRMSNorm</code> instead of <code>T5LayerNorm</code>. The former uses an optimized fused kernel which is several times faster than the latter.',Pt,rn,$n,st,dn="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started with T5. If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",zn,qt,Bn,Qt,At='<li>A notebook for how to <a href="https://colab.research.google.com/github/patil-suraj/exploring-T5/blob/master/t5_fine_tuning.ipynb" rel="nofollow">finetune T5 for classification and multiple choice</a>.</li> <li>A notebook for how to <a href="https://colab.research.google.com/github/enzoampil/t5-intro/blob/master/t5_qa_training_pytorch_span_extraction.ipynb" rel="nofollow">finetune T5 for sentiment span extraction</a>. 🌎</li>',Tn,xt,bn,he,ln='<li>A notebook for how to <a href="https://colab.research.google.com/drive/1obr78FY_cBmWY5ODViCmzdY6O1KB65Vc?usp=sharing" rel="nofollow">finetune T5 for named entity recognition</a>. 🌎</li>',jn,Zt,Rn,Dt,yn='<li>A notebook for <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/T5/Fine_tune_CodeT5_for_generating_docstrings_from_Ruby_code.ipynb" rel="nofollow">Finetuning CodeT5 for generating docstrings from Ruby code</a>.</li>',Hn,Ot,Yt,cn,to='<li>A notebook to <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/T5/Fine_tuning_Dutch_T5_base_on_CNN_Daily_Mail_for_summarization_(on_TPU_using_HuggingFace_Accelerate).ipynb" rel="nofollow">Finetune T5-base-dutch to perform Dutch abstractive summarization on a TPU</a>.</li> <li>A notebook for how to <a href="https://colab.research.google.com/github/abhimishra91/transformers-tutorials/blob/master/transformers_summarization_wandb.ipynb#scrollTo=OKRpFvYhBauC" rel="nofollow">finetune T5 for summarization in PyTorch and track experiments with WandB</a>. 🌎</li> <li>A blog post on <a href="https://huggingface.co/blog/sagemaker-distributed-training-seq2seq" rel="nofollow">Distributed Training: Train BART/T5 for Summarization using 🤗 Transformers and Amazon SageMaker</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration">T5ForConditionalGeneration</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/summarization.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration">TFT5ForConditionalGeneration</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/summarization-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5ForConditionalGeneration">FlaxT5ForConditionalGeneration</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/summarization" rel="nofollow">example script</a>.</li> <li><a href="https://huggingface.co/course/chapter7/5?fw=pt#summarization" rel="nofollow">Summarization</a> chapter of the 🤗 Hugging Face course.</li> <li><a href="../tasks/summarization">Summarization task guide</a></li>',Kt,pn,Fn,at,un='<li><a href="/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5ForConditionalGeneration">FlaxT5ForConditionalGeneration</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#t5-like-span-masked-language-modeling" rel="nofollow">example script</a> for training T5 with a span-masked language model objective. The script also shows how to train a T5 tokenizer. <a href="/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5ForConditionalGeneration">FlaxT5ForConditionalGeneration</a> is also supported by this <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/masked_language_modeling_flax.ipynb" rel="nofollow">notebook</a>.</li>',Cn,It,Nn,en,tn='<li><a href="/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration">T5ForConditionalGeneration</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration">TFT5ForConditionalGeneration</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="../tasks/translation">Translation task guide</a></li>',kn,h,j,Ke,rt='<li>A notebook on how to <a href="https://colab.research.google.com/github/snapthat/TF-T5-text-to-text/blob/master/snapthatT5/notebooks/TF-T5-Datasets%20Training.ipynb" rel="nofollow">finetune T5 for question answering with TensorFlow 2</a>. 🌎</li> <li>A notebook on how to <a href="https://colab.research.google.com/github/patil-suraj/exploring-T5/blob/master/T5_on_TPU.ipynb#scrollTo=QLGiFCDqvuil" rel="nofollow">finetune T5 for question answering on a TPU</a>.</li>',gt,ze,Gt="🚀 <strong>Deploy</strong>",Le,ct,it='<li>A blog post on how to deploy <a href="https://www.philschmid.de/deploy-t5-11b" rel="nofollow">T5 11B for inference for less than $500</a>.</li>',Wt,Se,nn,on,Xn,Jo,no,Oo=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Model">T5Model</a> or a <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
<a href="https://huggingface.co/google-t5/t5-small" rel="nofollow">google-t5/t5-small</a> architecture.`,Uo,oo,Yo=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,ko,Vn,Mo,et,Ln,qo,so,Ko='Construct a T5 tokenizer. Based on <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.',Zo,ao,es=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Io,mn,Sn,Go,ro,ts=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`,Wo,io,ns="<li>single sequence: <code>X &lt;/s&gt;</code></li> <li>pair of sequences: <code>A &lt;/s&gt; B &lt;/s&gt;</code></li>",Bo,Jn,En,Ro,lo,os=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,Ho,Un,Pn,No,co,ss=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`,Xo,po,Qn,wo,An,vo,$t,Dn,Vo,uo,as=`Construct a “fast” T5 tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on
<a href="https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models" rel="nofollow">Unigram</a>.`,Lo,mo,rs=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,So,hn,On,Eo,ho,is=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`,Po,fo,ds="<li>single sequence: <code>X &lt;/s&gt;</code></li> <li>pair of sequences: <code>A &lt;/s&gt; B &lt;/s&gt;</code></li>",Qo,qn,Yn,Ao,go,ls=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`,xo,Zn,$o,yo,zo;return M=new Ue({props:{title:"T5",local:"t5",headingTag:"h1"}}),Z=new Ue({props:{title:"Overview",local:"overview",headingTag:"h2"}}),qe=new Ue({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),re=new Ue({props:{title:"Training",local:"training",headingTag:"h2"}}),X=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFQ1VG9rZW5pemVyJTJDJTIwVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBUNVRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBbW9kZWwlMjAlM0QlMjBUNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMCUzQ2V4dHJhX2lkXzAlM0UlMjB3YWxrcyUyMGluJTIwJTNDZXh0cmFfaWRfMSUzRSUyMHBhcmslMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyJTNDZXh0cmFfaWRfMCUzRSUyMGN1dGUlMjBkb2clMjAlM0NleHRyYV9pZF8xJTNFJTIwdGhlJTIwJTNDZXh0cmFfaWRfMiUzRSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQSUwQSUyMyUyMHRoZSUyMGZvcndhcmQlMjBmdW5jdGlvbiUyMGF1dG9tYXRpY2FsbHklMjBjcmVhdGVzJTIwdGhlJTIwY29ycmVjdCUyMGRlY29kZXJfaW5wdXRfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUzRGlucHV0X2lkcyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQWxvc3MuaXRlbSgp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">3.7837</span>`,wrap:!1}}),E=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFQ1VG9rZW5pemVyJTJDJTIwVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBUNVRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBbW9kZWwlMjAlM0QlMjBUNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMnRyYW5zbGF0ZSUyMEVuZ2xpc2glMjB0byUyMEdlcm1hbiUzQSUyMFRoZSUyMGhvdXNlJTIwaXMlMjB3b25kZXJmdWwuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBbGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkRhcyUyMEhhdXMlMjBpc3QlMjB3dW5kZXJiYXIuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBJTBBJTIzJTIwdGhlJTIwZm9yd2FyZCUyMGZ1bmN0aW9uJTIwYXV0b21hdGljYWxseSUyMGNyZWF0ZXMlMjB0aGUlMjBjb3JyZWN0JTIwZGVjb2Rlcl9pbnB1dF9pZHMlMEFsb3NzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEaW5wdXRfaWRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzJTBBbG9zcy5pdGVtKCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Das Haus ist wunderbar.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">0.2542</span>`,wrap:!1}}),ht=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFQ1VG9rZW5pemVyJTJDJTIwVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMFQ1VG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEFtb2RlbCUyMCUzRCUyMFQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMiklMEElMEElMjMlMjB0aGUlMjBmb2xsb3dpbmclMjAyJTIwaHlwZXJwYXJhbWV0ZXJzJTIwYXJlJTIwdGFzay1zcGVjaWZpYyUwQW1heF9zb3VyY2VfbGVuZ3RoJTIwJTNEJTIwNTEyJTBBbWF4X3RhcmdldF9sZW5ndGglMjAlM0QlMjAxMjglMEElMEElMjMlMjBTdXBwb3NlJTIwd2UlMjBoYXZlJTIwdGhlJTIwZm9sbG93aW5nJTIwMiUyMHRyYWluaW5nJTIwZXhhbXBsZXMlM0ElMEFpbnB1dF9zZXF1ZW5jZV8xJTIwJTNEJTIwJTIyV2VsY29tZSUyMHRvJTIwTllDJTIyJTBBb3V0cHV0X3NlcXVlbmNlXzElMjAlM0QlMjAlMjJCaWVudmVudWUlMjAlQzMlQTAlMjBOWUMlMjIlMEElMEFpbnB1dF9zZXF1ZW5jZV8yJTIwJTNEJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIyJTBBb3V0cHV0X3NlcXVlbmNlXzIlMjAlM0QlMjAlMjJIdWdnaW5nRmFjZSUyMGVzdCUyMHVuZSUyMGVudHJlcHJpc2UlMjIlMEElMEElMjMlMjBlbmNvZGUlMjB0aGUlMjBpbnB1dHMlMEF0YXNrX3ByZWZpeCUyMCUzRCUyMCUyMnRyYW5zbGF0ZSUyMEVuZ2xpc2glMjB0byUyMEZyZW5jaCUzQSUyMCUyMiUwQWlucHV0X3NlcXVlbmNlcyUyMCUzRCUyMCU1QmlucHV0X3NlcXVlbmNlXzElMkMlMjBpbnB1dF9zZXF1ZW5jZV8yJTVEJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTVCdGFza19wcmVmaXglMjAlMkIlMjBzZXF1ZW5jZSUyMGZvciUyMHNlcXVlbmNlJTIwaW4lMjBpbnB1dF9zZXF1ZW5jZXMlNUQlMkMlMEElMjAlMjAlMjAlMjBwYWRkaW5nJTNEJTIybG9uZ2VzdCUyMiUyQyUwQSUyMCUyMCUyMCUyMG1heF9sZW5ndGglM0RtYXhfc291cmNlX2xlbmd0aCUyQyUwQSUyMCUyMCUyMCUyMHRydW5jYXRpb24lM0RUcnVlJTJDJTBBJTIwJTIwJTIwJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUwQSklMEElMEFpbnB1dF9pZHMlMkMlMjBhdHRlbnRpb25fbWFzayUyMCUzRCUyMGVuY29kaW5nLmlucHV0X2lkcyUyQyUyMGVuY29kaW5nLmF0dGVudGlvbl9tYXNrJTBBJTBBJTIzJTIwZW5jb2RlJTIwdGhlJTIwdGFyZ2V0cyUwQXRhcmdldF9lbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlNUJvdXRwdXRfc2VxdWVuY2VfMSUyQyUyMG91dHB1dF9zZXF1ZW5jZV8yJTVEJTJDJTBBJTIwJTIwJTIwJTIwcGFkZGluZyUzRCUyMmxvbmdlc3QlMjIlMkMlMEElMjAlMjAlMjAlMjBtYXhfbGVuZ3RoJTNEbWF4X3RhcmdldF9sZW5ndGglMkMlMEElMjAlMjAlMjAlMjB0cnVuY2F0aW9uJTNEVHJ1ZSUyQyUwQSUyMCUyMCUyMCUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMkMlMEEpJTBBbGFiZWxzJTIwJTNEJTIwdGFyZ2V0X2VuY29kaW5nLmlucHV0X2lkcyUwQSUwQSUyMyUyMHJlcGxhY2UlMjBwYWRkaW5nJTIwdG9rZW4lMjBpZCdzJTIwb2YlMjB0aGUlMjBsYWJlbHMlMjBieSUyMC0xMDAlMjBzbyUyMGl0J3MlMjBpZ25vcmVkJTIwYnklMjB0aGUlMjBsb3NzJTBBbGFiZWxzJTVCbGFiZWxzJTIwJTNEJTNEJTIwdG9rZW5pemVyLnBhZF90b2tlbl9pZCU1RCUyMCUzRCUyMC0xMDAlMEElMEElMjMlMjBmb3J3YXJkJTIwcGFzcyUwQWxvc3MlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlM0RpbnB1dF9pZHMlMkMlMjBhdHRlbnRpb25fbWFzayUzRGF0dGVudGlvbl9tYXNrJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzJTBBbG9zcy5pdGVtKCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the following 2 hyperparameters are task-specific</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>max_source_length = <span class="hljs-number">512</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>max_target_length = <span class="hljs-number">128</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Suppose we have the following 2 training examples:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_sequence_1 = <span class="hljs-string">&quot;Welcome to NYC&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_sequence_1 = <span class="hljs-string">&quot;Bienvenue à NYC&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_sequence_2 = <span class="hljs-string">&quot;HuggingFace is a company&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_sequence_2 = <span class="hljs-string">&quot;HuggingFace est une entreprise&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode the inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>task_prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_sequences = [input_sequence_1, input_sequence_2]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(
<span class="hljs-meta">... </span>    [task_prefix + sequence <span class="hljs-keyword">for</span> sequence <span class="hljs-keyword">in</span> input_sequences],
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;longest&quot;</span>,
<span class="hljs-meta">... </span>    max_length=max_source_length,
<span class="hljs-meta">... </span>    truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode the targets</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_encoding = tokenizer(
<span class="hljs-meta">... </span>    [output_sequence_1, output_sequence_2],
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;longest&quot;</span>,
<span class="hljs-meta">... </span>    max_length=max_target_length,
<span class="hljs-meta">... </span>    truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = target_encoding.input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># replace padding token id&#x27;s of the labels by -100 so it&#x27;s ignored by the loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[labels == tokenizer.pad_token_id] = -<span class="hljs-number">100</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">0.188</span>`,wrap:!1}}),Ht=new Ue({props:{title:"Inference",local:"inference",headingTag:"h2"}}),Ct=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFQ1VG9rZW5pemVyJTJDJTIwVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBUNVRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBbW9kZWwlMjAlM0QlMjBUNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMnRyYW5zbGF0ZSUyMEVuZ2xpc2glMjB0byUyMEdlcm1hbiUzQSUyMFRoZSUyMGhvdXNlJTIwaXMlMjB3b25kZXJmdWwuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKGlucHV0X2lkcyklMEFwcmludCh0b2tlbml6ZXIuZGVjb2RlKG91dHB1dHMlNUIwJTVEJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
Das Haus ist wunderbar.`,wrap:!1}}),vt=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFQ1VG9rZW5pemVyJTJDJTIwVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBUNVRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBbW9kZWwlMjAlM0QlMjBUNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBJTBBdGFza19wcmVmaXglMjAlM0QlMjAlMjJ0cmFuc2xhdGUlMjBFbmdsaXNoJTIwdG8lMjBHZXJtYW4lM0ElMjAlMjIlMEElMjMlMjB1c2UlMjBkaWZmZXJlbnQlMjBsZW5ndGglMjBzZW50ZW5jZXMlMjB0byUyMHRlc3QlMjBiYXRjaGluZyUwQXNlbnRlbmNlcyUyMCUzRCUyMCU1QiUyMlRoZSUyMGhvdXNlJTIwaXMlMjB3b25kZXJmdWwuJTIyJTJDJTIwJTIySSUyMGxpa2UlMjB0byUyMHdvcmslMjBpbiUyME5ZQy4lMjIlNUQlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTVCdGFza19wcmVmaXglMjAlMkIlMjBzZW50ZW5jZSUyMGZvciUyMHNlbnRlbmNlJTIwaW4lMjBzZW50ZW5jZXMlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBJTBBb3V0cHV0X3NlcXVlbmNlcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCUwQSUyMCUyMCUyMCUyMGlucHV0X2lkcyUzRGlucHV0cyU1QiUyMmlucHV0X2lkcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGF0dGVudGlvbl9tYXNrJTNEaW5wdXRzJTVCJTIyYXR0ZW50aW9uX21hc2slMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBkb19zYW1wbGUlM0RGYWxzZSUyQyUyMCUyMCUyMyUyMGRpc2FibGUlMjBzYW1wbGluZyUyMHRvJTIwdGVzdCUyMGlmJTIwYmF0Y2hpbmclMjBhZmZlY3RzJTIwb3V0cHV0JTBBKSUwQSUwQXByaW50KHRva2VuaXplci5iYXRjaF9kZWNvZGUob3V0cHV0X3NlcXVlbmNlcyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>task_prefix = <span class="hljs-string">&quot;translate English to German: &quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use different length sentences to test batching</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sentences = [<span class="hljs-string">&quot;The house is wonderful.&quot;</span>, <span class="hljs-string">&quot;I like to work in NYC.&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([task_prefix + sentence <span class="hljs-keyword">for</span> sentence <span class="hljs-keyword">in</span> sentences], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>output_sequences = model.generate(
<span class="hljs-meta">... </span>    input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>],
<span class="hljs-meta">... </span>    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">False</span>,  <span class="hljs-comment"># disable sampling to test if batching affects output</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(output_sequences, skip_special_tokens=<span class="hljs-literal">True</span>))
[<span class="hljs-string">&#x27;Das Haus ist wunderbar.&#x27;</span>, <span class="hljs-string">&#x27;Ich arbeite gerne in NYC.&#x27;</span>]`,wrap:!1}}),Ut=new dt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFQ1VG9rZW5pemVyJTJDJTIwVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBUNVRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBbW9kZWwlMjAlM0QlMjBUNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIpJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMCUzQ2V4dHJhX2lkXzAlM0UlMjB3YWxrcyUyMGluJTIwJTNDZXh0cmFfaWRfMSUzRSUyMHBhcmslMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMEElMEFzZXF1ZW5jZV9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dF9pZHMpJTBBc2VxdWVuY2VzJTIwJTNEJTIwdG9rZW5pemVyLmJhdGNoX2RlY29kZShzZXF1ZW5jZV9pZHMpJTBBc2VxdWVuY2Vz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_ids = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = tokenizer.batch_decode(sequence_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences
[<span class="hljs-string">&#x27;&lt;pad&gt;&lt;extra_id_0&gt; park offers&lt;extra_id_1&gt; the&lt;extra_id_2&gt; park.&lt;/s&gt;&#x27;</span>]`,wrap:!1}}),St=new Ue({props:{title:"Performance",local:"performance",headingTag:"h2"}}),rn=new Ue({props:{title:"Resources",local:"resources",headingTag:"h2"}}),qt=new Kn({props:{pipeline:"text-classification"}}),xt=new Kn({props:{pipeline:"token-classification"}}),Zt=new Kn({props:{pipeline:"text-generation"}}),Ot=new Kn({props:{pipeline:"summarization"}}),pn=new Kn({props:{pipeline:"fill-mask"}}),It=new Kn({props:{pipeline:"translation"}}),h=new Kn({props:{pipeline:"question-answering"}}),Se=new Ue({props:{title:"T5Config",local:"transformers.T5Config",headingTag:"h2"}}),Xn=new R({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.T5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. The <code>inner_dim</code> of the projection layer will
be defined as <code>num_heads * d_kv</code>.`,name:"d_kv"},{anchor:"transformers.T5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>T5Block</code>.`,name:"d_ff"},{anchor:"transformers.T5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.T5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.T5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.T5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.T5Config.relative_attention_max_distance",description:`<strong>relative_attention_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum distance of the longer sequences for the bucket separation.`,name:"relative_attention_max_distance"},{anchor:"transformers.T5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.T5Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.T5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.T5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.T5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. T5v1.1 uses the
<code>&quot;gated-gelu&quot;</code> feed forward projection. Original T5 uses <code>&quot;relu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.T5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/configuration_t5.py#L34"}}),Vn=new Ue({props:{title:"T5Tokenizer",local:"transformers.T5Tokenizer",headingTag:"h2"}}),Ln=new R({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"legacy",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. These tokens can be
retrieved by calling get_sentinel_tokens method and token ids can be by calling get_sentinel_token_ids
method
additional_special_tokens (<code>List[str]</code>, <em>optional</em>):
Additional special tokens used by the tokenizer.</extra<em>`,name:"extra_ids"},{anchor:"transformers.T5Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.T5Tokenizer.legacy",description:`<strong>legacy</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the <code>legacy</code> behaviour of the tokenizer should be used. Legacy is before the merge of #24622
and #25224 which includes fixes to properly handle tokens that appear after special tokens. A simple
example:</p>
<ul>
<li><code>legacy=True</code>:</li>
</ul>`,name:"legacy"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L63"}}),Sn=new R({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L333",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),En=new R({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L264",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Pn=new R({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L311",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Qn=new R({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L442"}}),An=new Ue({props:{title:"T5TokenizerFast",local:"transformers.T5TokenizerFast",headingTag:"h2"}}),Dn=new R({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5TokenizerFast.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the vocabulary for use as sentinels. These tokens are accessible as
&#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. These tokens can be retrieved by
calling get_sentinel_tokens method and token ids can be by calling get_sentinel_token_ids method</extra<em>`,name:"extra_ids"},{anchor:"transformers.T5TokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L66"}}),On=new R({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L195",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Yn=new R({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L221",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Zn=new gs({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[As],tensorflow:[Bs],pytorch:[zs]},$$scope:{ctx:z}}}),{c(){t=c("meta"),f=a(),o=c("p"),l=a(),g(M.$$.fragment),s=a(),v=c("div"),v.innerHTML=ke,q=a(),g(Z.$$.fragment),le=a(),U=c("p"),U.innerHTML=H,A=a(),x=c("p"),x.textContent=J,Re=a(),V=c("p"),V.innerHTML=Me,ce=a(),P=c("p"),P.innerHTML=lt,Ee=a(),te=c("p"),te.innerHTML=_t,D=a(),g(qe.$$.fragment),N=a(),pe=c("ul"),pe.innerHTML=L,O=a(),G=c("p"),G.textContent=Ze,tt=a(),Ie=c("ul"),Ie.innerHTML=pt,He=a(),je=c("p"),je.textContent=Ge,Tt=a(),ae=c("ul"),ae.innerHTML=Ne,bt=a(),g(re.$$.fragment),fe=a(),ne=c("p"),ne.innerHTML=we,Pe=a(),S=c("p"),S.innerHTML=Qe,ue=a(),ve=c("ul"),ve.innerHTML=ge,We=a(),oe=c("p"),oe.innerHTML=Fe,W=a(),_e=c("p"),_e.textContent=Be,Ae=a(),g(X.$$.fragment),me=a(),xe=c("p"),xe.innerHTML=w,C=a(),Y=c("ul"),Y.innerHTML=Xe,De=a(),K=c("p"),K.textContent=Te,Oe=a(),g(E.$$.fragment),ie=a(),be=c("p"),be.innerHTML=Rt,ut=a(),yt=c("p"),yt.innerHTML=ye,mt=a(),Ve=c("p"),Ve.innerHTML=jt,kt=a(),g(ht.$$.fragment),Q=a(),Ye=c("p"),Ye.textContent=Mt,ft=a(),$=c("ul"),$.innerHTML=F,$e=a(),se=c("p"),se.innerHTML=nt,ee=a(),Ce=c("p"),Ce.innerHTML=gn,Ft=a(),g(Ht.$$.fragment),Xt=a(),ot=c("p"),ot.innerHTML=sn,wn=a(),g(Ct.$$.fragment),In=a(),Vt=c("p"),Vt.innerHTML=Lt,_n=a(),wt=c("p"),wt.textContent=Gn,Je=a(),g(vt.$$.fragment),vn=a(),Jt=c("p"),Jt.textContent=bo,xn=a(),g(Ut.$$.fragment),Wn=a(),g(St.$$.fragment),Et=a(),an=c("p"),an.innerHTML=eo,Pt=a(),g(rn.$$.fragment),$n=a(),st=c("p"),st.textContent=dn,zn=a(),g(qt.$$.fragment),Bn=a(),Qt=c("ul"),Qt.innerHTML=At,Tn=a(),g(xt.$$.fragment),bn=a(),he=c("ul"),he.innerHTML=ln,jn=a(),g(Zt.$$.fragment),Rn=a(),Dt=c("ul"),Dt.innerHTML=yn,Hn=a(),g(Ot.$$.fragment),Yt=a(),cn=c("ul"),cn.innerHTML=to,Kt=a(),g(pn.$$.fragment),Fn=a(),at=c("ul"),at.innerHTML=un,Cn=a(),g(It.$$.fragment),Nn=a(),en=c("ul"),en.innerHTML=tn,kn=a(),g(h.$$.fragment),j=a(),Ke=c("ul"),Ke.innerHTML=rt,gt=a(),ze=c("p"),ze.innerHTML=Gt,Le=a(),ct=c("ul"),ct.innerHTML=it,Wt=a(),g(Se.$$.fragment),nn=a(),on=c("div"),g(Xn.$$.fragment),Jo=a(),no=c("p"),no.innerHTML=Oo,Uo=a(),oo=c("p"),oo.innerHTML=Yo,ko=a(),g(Vn.$$.fragment),Mo=a(),et=c("div"),g(Ln.$$.fragment),qo=a(),so=c("p"),so.innerHTML=Ko,Zo=a(),ao=c("p"),ao.innerHTML=es,Io=a(),mn=c("div"),g(Sn.$$.fragment),Go=a(),ro=c("p"),ro.textContent=ts,Wo=a(),io=c("ul"),io.innerHTML=ns,Bo=a(),Jn=c("div"),g(En.$$.fragment),Ro=a(),lo=c("p"),lo.innerHTML=os,Ho=a(),Un=c("div"),g(Pn.$$.fragment),No=a(),co=c("p"),co.textContent=ss,Xo=a(),po=c("div"),g(Qn.$$.fragment),wo=a(),g(An.$$.fragment),vo=a(),$t=c("div"),g(Dn.$$.fragment),Vo=a(),uo=c("p"),uo.innerHTML=as,Lo=a(),mo=c("p"),mo.innerHTML=rs,So=a(),hn=c("div"),g(On.$$.fragment),Eo=a(),ho=c("p"),ho.textContent=is,Po=a(),fo=c("ul"),fo.innerHTML=ds,Qo=a(),qn=c("div"),g(Yn.$$.fragment),Ao=a(),go=c("p"),go.textContent=ls,xo=a(),g(Zn.$$.fragment),$o=a(),yo=c("p"),this.h()},l(e){const u=fs("svelte-u9bgzb",document.head);t=p(u,"META",{name:!0,content:!0}),u.forEach(n),f=r(e),o=p(e,"P",{}),B(o).forEach(n),l=r(e),_(M.$$.fragment,e),s=r(e),v=p(e,"DIV",{class:!0,"data-svelte-h":!0}),m(v)!=="svelte-1xazft8"&&(v.innerHTML=ke),q=r(e),_(Z.$$.fragment,e),le=r(e),U=p(e,"P",{"data-svelte-h":!0}),m(U)!=="svelte-bjrdaa"&&(U.innerHTML=H),A=r(e),x=p(e,"P",{"data-svelte-h":!0}),m(x)!=="svelte-vfdo9a"&&(x.textContent=J),Re=r(e),V=p(e,"P",{"data-svelte-h":!0}),m(V)!=="svelte-nquw4g"&&(V.innerHTML=Me),ce=r(e),P=p(e,"P",{"data-svelte-h":!0}),m(P)!=="svelte-1rpnkj8"&&(P.innerHTML=lt),Ee=r(e),te=p(e,"P",{"data-svelte-h":!0}),m(te)!=="svelte-iid9rh"&&(te.innerHTML=_t),D=r(e),_(qe.$$.fragment,e),N=r(e),pe=p(e,"UL",{"data-svelte-h":!0}),m(pe)!=="svelte-ujhsff"&&(pe.innerHTML=L),O=r(e),G=p(e,"P",{"data-svelte-h":!0}),m(G)!=="svelte-14r6d38"&&(G.textContent=Ze),tt=r(e),Ie=p(e,"UL",{"data-svelte-h":!0}),m(Ie)!=="svelte-1kdi5xz"&&(Ie.innerHTML=pt),He=r(e),je=p(e,"P",{"data-svelte-h":!0}),m(je)!=="svelte-1rxnqmp"&&(je.textContent=Ge),Tt=r(e),ae=p(e,"UL",{"data-svelte-h":!0}),m(ae)!=="svelte-bdi512"&&(ae.innerHTML=Ne),bt=r(e),_(re.$$.fragment,e),fe=r(e),ne=p(e,"P",{"data-svelte-h":!0}),m(ne)!=="svelte-1mcyrt7"&&(ne.innerHTML=we),Pe=r(e),S=p(e,"P",{"data-svelte-h":!0}),m(S)!=="svelte-wgx386"&&(S.innerHTML=Qe),ue=r(e),ve=p(e,"UL",{"data-svelte-h":!0}),m(ve)!=="svelte-1r0ku0c"&&(ve.innerHTML=ge),We=r(e),oe=p(e,"P",{"data-svelte-h":!0}),m(oe)!=="svelte-3o37ce"&&(oe.innerHTML=Fe),W=r(e),_e=p(e,"P",{"data-svelte-h":!0}),m(_e)!=="svelte-3jfjj8"&&(_e.textContent=Be),Ae=r(e),_(X.$$.fragment,e),me=r(e),xe=p(e,"P",{"data-svelte-h":!0}),m(xe)!=="svelte-7vo35o"&&(xe.innerHTML=w),C=r(e),Y=p(e,"UL",{"data-svelte-h":!0}),m(Y)!=="svelte-o4kvwt"&&(Y.innerHTML=Xe),De=r(e),K=p(e,"P",{"data-svelte-h":!0}),m(K)!=="svelte-y0j04t"&&(K.textContent=Te),Oe=r(e),_(E.$$.fragment,e),ie=r(e),be=p(e,"P",{"data-svelte-h":!0}),m(be)!=="svelte-1hbtvtu"&&(be.innerHTML=Rt),ut=r(e),yt=p(e,"P",{"data-svelte-h":!0}),m(yt)!=="svelte-9qtpt3"&&(yt.innerHTML=ye),mt=r(e),Ve=p(e,"P",{"data-svelte-h":!0}),m(Ve)!=="svelte-1iwna4s"&&(Ve.innerHTML=jt),kt=r(e),_(ht.$$.fragment,e),Q=r(e),Ye=p(e,"P",{"data-svelte-h":!0}),m(Ye)!=="svelte-1sumld1"&&(Ye.textContent=Mt),ft=r(e),$=p(e,"UL",{"data-svelte-h":!0}),m($)!=="svelte-1yho768"&&($.innerHTML=F),$e=r(e),se=p(e,"P",{"data-svelte-h":!0}),m(se)!=="svelte-q085d3"&&(se.innerHTML=nt),ee=r(e),Ce=p(e,"P",{"data-svelte-h":!0}),m(Ce)!=="svelte-1ydonn7"&&(Ce.innerHTML=gn),Ft=r(e),_(Ht.$$.fragment,e),Xt=r(e),ot=p(e,"P",{"data-svelte-h":!0}),m(ot)!=="svelte-19zalt1"&&(ot.innerHTML=sn),wn=r(e),_(Ct.$$.fragment,e),In=r(e),Vt=p(e,"P",{"data-svelte-h":!0}),m(Vt)!=="svelte-1va4ns6"&&(Vt.innerHTML=Lt),_n=r(e),wt=p(e,"P",{"data-svelte-h":!0}),m(wt)!=="svelte-1pyapz5"&&(wt.textContent=Gn),Je=r(e),_(vt.$$.fragment,e),vn=r(e),Jt=p(e,"P",{"data-svelte-h":!0}),m(Jt)!=="svelte-11xwy2d"&&(Jt.textContent=bo),xn=r(e),_(Ut.$$.fragment,e),Wn=r(e),_(St.$$.fragment,e),Et=r(e),an=p(e,"P",{"data-svelte-h":!0}),m(an)!=="svelte-nwzj41"&&(an.innerHTML=eo),Pt=r(e),_(rn.$$.fragment,e),$n=r(e),st=p(e,"P",{"data-svelte-h":!0}),m(st)!=="svelte-pncau2"&&(st.textContent=dn),zn=r(e),_(qt.$$.fragment,e),Bn=r(e),Qt=p(e,"UL",{"data-svelte-h":!0}),m(Qt)!=="svelte-1jp8pm9"&&(Qt.innerHTML=At),Tn=r(e),_(xt.$$.fragment,e),bn=r(e),he=p(e,"UL",{"data-svelte-h":!0}),m(he)!=="svelte-gl9m62"&&(he.innerHTML=ln),jn=r(e),_(Zt.$$.fragment,e),Rn=r(e),Dt=p(e,"UL",{"data-svelte-h":!0}),m(Dt)!=="svelte-1rhxjua"&&(Dt.innerHTML=yn),Hn=r(e),_(Ot.$$.fragment,e),Yt=r(e),cn=p(e,"UL",{"data-svelte-h":!0}),m(cn)!=="svelte-mnpiwk"&&(cn.innerHTML=to),Kt=r(e),_(pn.$$.fragment,e),Fn=r(e),at=p(e,"UL",{"data-svelte-h":!0}),m(at)!=="svelte-zaitud"&&(at.innerHTML=un),Cn=r(e),_(It.$$.fragment,e),Nn=r(e),en=p(e,"UL",{"data-svelte-h":!0}),m(en)!=="svelte-82sh4k"&&(en.innerHTML=tn),kn=r(e),_(h.$$.fragment,e),j=r(e),Ke=p(e,"UL",{"data-svelte-h":!0}),m(Ke)!=="svelte-w8a5q6"&&(Ke.innerHTML=rt),gt=r(e),ze=p(e,"P",{"data-svelte-h":!0}),m(ze)!=="svelte-1ov63r3"&&(ze.innerHTML=Gt),Le=r(e),ct=p(e,"UL",{"data-svelte-h":!0}),m(ct)!=="svelte-10l9pbe"&&(ct.innerHTML=it),Wt=r(e),_(Se.$$.fragment,e),nn=r(e),on=p(e,"DIV",{class:!0});var Mn=B(on);_(Xn.$$.fragment,Mn),Jo=r(Mn),no=p(Mn,"P",{"data-svelte-h":!0}),m(no)!=="svelte-1ntef0"&&(no.innerHTML=Oo),Uo=r(Mn),oo=p(Mn,"P",{"data-svelte-h":!0}),m(oo)!=="svelte-o55m63"&&(oo.innerHTML=Yo),Mn.forEach(n),ko=r(e),_(Vn.$$.fragment,e),Mo=r(e),et=p(e,"DIV",{class:!0});var Bt=B(et);_(Ln.$$.fragment,Bt),qo=r(Bt),so=p(Bt,"P",{"data-svelte-h":!0}),m(so)!=="svelte-pdnetr"&&(so.innerHTML=Ko),Zo=r(Bt),ao=p(Bt,"P",{"data-svelte-h":!0}),m(ao)!=="svelte-1c3t5ty"&&(ao.innerHTML=es),Io=r(Bt),mn=p(Bt,"DIV",{class:!0});var _o=B(mn);_(Sn.$$.fragment,_o),Go=r(_o),ro=p(_o,"P",{"data-svelte-h":!0}),m(ro)!=="svelte-1wjq39d"&&(ro.textContent=ts),Wo=r(_o),io=p(_o,"UL",{"data-svelte-h":!0}),m(io)!=="svelte-8gh3n2"&&(io.innerHTML=ns),_o.forEach(n),Bo=r(Bt),Jn=p(Bt,"DIV",{class:!0});var jo=B(Jn);_(En.$$.fragment,jo),Ro=r(jo),lo=p(jo,"P",{"data-svelte-h":!0}),m(lo)!=="svelte-1f4f5kp"&&(lo.innerHTML=os),jo.forEach(n),Ho=r(Bt),Un=p(Bt,"DIV",{class:!0});var Fo=B(Un);_(Pn.$$.fragment,Fo),No=r(Fo),co=p(Fo,"P",{"data-svelte-h":!0}),m(co)!=="svelte-fl5ab0"&&(co.textContent=ss),Fo.forEach(n),Xo=r(Bt),po=p(Bt,"DIV",{class:!0});var cs=B(po);_(Qn.$$.fragment,cs),cs.forEach(n),Bt.forEach(n),wo=r(e),_(An.$$.fragment,e),vo=r(e),$t=p(e,"DIV",{class:!0});var fn=B($t);_(Dn.$$.fragment,fn),Vo=r(fn),uo=p(fn,"P",{"data-svelte-h":!0}),m(uo)!=="svelte-gc3mz8"&&(uo.innerHTML=as),Lo=r(fn),mo=p(fn,"P",{"data-svelte-h":!0}),m(mo)!=="svelte-fh0aq"&&(mo.innerHTML=rs),So=r(fn),hn=p(fn,"DIV",{class:!0});var To=B(hn);_(On.$$.fragment,To),Eo=r(To),ho=p(To,"P",{"data-svelte-h":!0}),m(ho)!=="svelte-1wjq39d"&&(ho.textContent=is),Po=r(To),fo=p(To,"UL",{"data-svelte-h":!0}),m(fo)!=="svelte-8gh3n2"&&(fo.innerHTML=ds),To.forEach(n),Qo=r(fn),qn=p(fn,"DIV",{class:!0});var Co=B(qn);_(Yn.$$.fragment,Co),Ao=r(Co),go=p(Co,"P",{"data-svelte-h":!0}),m(go)!=="svelte-fl5ab0"&&(go.textContent=ls),Co.forEach(n),fn.forEach(n),xo=r(e),_(Zn.$$.fragment,e),$o=r(e),yo=p(e,"P",{}),B(yo).forEach(n),this.h()},h(){I(t,"name","hf:doc:metadata"),I(t,"content",Os),I(v,"class","flex flex-wrap space-x-1"),I(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),I($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,u){d(document.head,t),i(e,f,u),i(e,o,u),i(e,l,u),T(M,e,u),i(e,s,u),i(e,v,u),i(e,q,u),T(Z,e,u),i(e,le,u),i(e,U,u),i(e,A,u),i(e,x,u),i(e,Re,u),i(e,V,u),i(e,ce,u),i(e,P,u),i(e,Ee,u),i(e,te,u),i(e,D,u),T(qe,e,u),i(e,N,u),i(e,pe,u),i(e,O,u),i(e,G,u),i(e,tt,u),i(e,Ie,u),i(e,He,u),i(e,je,u),i(e,Tt,u),i(e,ae,u),i(e,bt,u),T(re,e,u),i(e,fe,u),i(e,ne,u),i(e,Pe,u),i(e,S,u),i(e,ue,u),i(e,ve,u),i(e,We,u),i(e,oe,u),i(e,W,u),i(e,_e,u),i(e,Ae,u),T(X,e,u),i(e,me,u),i(e,xe,u),i(e,C,u),i(e,Y,u),i(e,De,u),i(e,K,u),i(e,Oe,u),T(E,e,u),i(e,ie,u),i(e,be,u),i(e,ut,u),i(e,yt,u),i(e,mt,u),i(e,Ve,u),i(e,kt,u),T(ht,e,u),i(e,Q,u),i(e,Ye,u),i(e,ft,u),i(e,$,u),i(e,$e,u),i(e,se,u),i(e,ee,u),i(e,Ce,u),i(e,Ft,u),T(Ht,e,u),i(e,Xt,u),i(e,ot,u),i(e,wn,u),T(Ct,e,u),i(e,In,u),i(e,Vt,u),i(e,_n,u),i(e,wt,u),i(e,Je,u),T(vt,e,u),i(e,vn,u),i(e,Jt,u),i(e,xn,u),T(Ut,e,u),i(e,Wn,u),T(St,e,u),i(e,Et,u),i(e,an,u),i(e,Pt,u),T(rn,e,u),i(e,$n,u),i(e,st,u),i(e,zn,u),T(qt,e,u),i(e,Bn,u),i(e,Qt,u),i(e,Tn,u),T(xt,e,u),i(e,bn,u),i(e,he,u),i(e,jn,u),T(Zt,e,u),i(e,Rn,u),i(e,Dt,u),i(e,Hn,u),T(Ot,e,u),i(e,Yt,u),i(e,cn,u),i(e,Kt,u),T(pn,e,u),i(e,Fn,u),i(e,at,u),i(e,Cn,u),T(It,e,u),i(e,Nn,u),i(e,en,u),i(e,kn,u),T(h,e,u),i(e,j,u),i(e,Ke,u),i(e,gt,u),i(e,ze,u),i(e,Le,u),i(e,ct,u),i(e,Wt,u),T(Se,e,u),i(e,nn,u),i(e,on,u),T(Xn,on,null),d(on,Jo),d(on,no),d(on,Uo),d(on,oo),i(e,ko,u),T(Vn,e,u),i(e,Mo,u),i(e,et,u),T(Ln,et,null),d(et,qo),d(et,so),d(et,Zo),d(et,ao),d(et,Io),d(et,mn),T(Sn,mn,null),d(mn,Go),d(mn,ro),d(mn,Wo),d(mn,io),d(et,Bo),d(et,Jn),T(En,Jn,null),d(Jn,Ro),d(Jn,lo),d(et,Ho),d(et,Un),T(Pn,Un,null),d(Un,No),d(Un,co),d(et,Xo),d(et,po),T(Qn,po,null),i(e,wo,u),T(An,e,u),i(e,vo,u),i(e,$t,u),T(Dn,$t,null),d($t,Vo),d($t,uo),d($t,Lo),d($t,mo),d($t,So),d($t,hn),T(On,hn,null),d(hn,Eo),d(hn,ho),d(hn,Po),d(hn,fo),d($t,Qo),d($t,qn),T(Yn,qn,null),d(qn,Ao),d(qn,go),i(e,xo,u),T(Zn,e,u),i(e,$o,u),i(e,yo,u),zo=!0},p(e,[u]){const Mn={};u&2&&(Mn.$$scope={dirty:u,ctx:e}),Zn.$set(Mn)},i(e){zo||(b(M.$$.fragment,e),b(Z.$$.fragment,e),b(qe.$$.fragment,e),b(re.$$.fragment,e),b(X.$$.fragment,e),b(E.$$.fragment,e),b(ht.$$.fragment,e),b(Ht.$$.fragment,e),b(Ct.$$.fragment,e),b(vt.$$.fragment,e),b(Ut.$$.fragment,e),b(St.$$.fragment,e),b(rn.$$.fragment,e),b(qt.$$.fragment,e),b(xt.$$.fragment,e),b(Zt.$$.fragment,e),b(Ot.$$.fragment,e),b(pn.$$.fragment,e),b(It.$$.fragment,e),b(h.$$.fragment,e),b(Se.$$.fragment,e),b(Xn.$$.fragment,e),b(Vn.$$.fragment,e),b(Ln.$$.fragment,e),b(Sn.$$.fragment,e),b(En.$$.fragment,e),b(Pn.$$.fragment,e),b(Qn.$$.fragment,e),b(An.$$.fragment,e),b(Dn.$$.fragment,e),b(On.$$.fragment,e),b(Yn.$$.fragment,e),b(Zn.$$.fragment,e),zo=!0)},o(e){y(M.$$.fragment,e),y(Z.$$.fragment,e),y(qe.$$.fragment,e),y(re.$$.fragment,e),y(X.$$.fragment,e),y(E.$$.fragment,e),y(ht.$$.fragment,e),y(Ht.$$.fragment,e),y(Ct.$$.fragment,e),y(vt.$$.fragment,e),y(Ut.$$.fragment,e),y(St.$$.fragment,e),y(rn.$$.fragment,e),y(qt.$$.fragment,e),y(xt.$$.fragment,e),y(Zt.$$.fragment,e),y(Ot.$$.fragment,e),y(pn.$$.fragment,e),y(It.$$.fragment,e),y(h.$$.fragment,e),y(Se.$$.fragment,e),y(Xn.$$.fragment,e),y(Vn.$$.fragment,e),y(Ln.$$.fragment,e),y(Sn.$$.fragment,e),y(En.$$.fragment,e),y(Pn.$$.fragment,e),y(Qn.$$.fragment,e),y(An.$$.fragment,e),y(Dn.$$.fragment,e),y(On.$$.fragment,e),y(Yn.$$.fragment,e),y(Zn.$$.fragment,e),zo=!1},d(e){e&&(n(f),n(o),n(l),n(s),n(v),n(q),n(le),n(U),n(A),n(x),n(Re),n(V),n(ce),n(P),n(Ee),n(te),n(D),n(N),n(pe),n(O),n(G),n(tt),n(Ie),n(He),n(je),n(Tt),n(ae),n(bt),n(fe),n(ne),n(Pe),n(S),n(ue),n(ve),n(We),n(oe),n(W),n(_e),n(Ae),n(me),n(xe),n(C),n(Y),n(De),n(K),n(Oe),n(ie),n(be),n(ut),n(yt),n(mt),n(Ve),n(kt),n(Q),n(Ye),n(ft),n($),n($e),n(se),n(ee),n(Ce),n(Ft),n(Xt),n(ot),n(wn),n(In),n(Vt),n(_n),n(wt),n(Je),n(vn),n(Jt),n(xn),n(Wn),n(Et),n(an),n(Pt),n($n),n(st),n(zn),n(Bn),n(Qt),n(Tn),n(bn),n(he),n(jn),n(Rn),n(Dt),n(Hn),n(Yt),n(cn),n(Kt),n(Fn),n(at),n(Cn),n(Nn),n(en),n(kn),n(j),n(Ke),n(gt),n(ze),n(Le),n(ct),n(Wt),n(nn),n(on),n(ko),n(Mo),n(et),n(wo),n(vo),n($t),n(xo),n($o),n(yo)),n(t),k(M,e),k(Z,e),k(qe,e),k(re,e),k(X,e),k(E,e),k(ht,e),k(Ht,e),k(Ct,e),k(vt,e),k(Ut,e),k(St,e),k(rn,e),k(qt,e),k(xt,e),k(Zt,e),k(Ot,e),k(pn,e),k(It,e),k(h,e),k(Se,e),k(Xn),k(Vn,e),k(Ln),k(Sn),k(En),k(Pn),k(Qn),k(An,e),k(Dn),k(On),k(Yn),k(Zn,e)}}}const Os='{"title":"T5","local":"t5","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Training","local":"training","sections":[],"depth":2},{"title":"Inference","local":"inference","sections":[],"depth":2},{"title":"Performance","local":"performance","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"T5Config","local":"transformers.T5Config","sections":[],"depth":2},{"title":"T5Tokenizer","local":"transformers.T5Tokenizer","sections":[],"depth":2},{"title":"T5TokenizerFast","local":"transformers.T5TokenizerFast","sections":[],"depth":2},{"title":"T5Model","local":"transformers.T5Model","sections":[],"depth":2},{"title":"T5ForConditionalGeneration","local":"transformers.T5ForConditionalGeneration","sections":[],"depth":2},{"title":"T5EncoderModel","local":"transformers.T5EncoderModel","sections":[],"depth":2},{"title":"T5ForSequenceClassification","local":"transformers.T5ForSequenceClassification","sections":[],"depth":2},{"title":"T5ForTokenClassification","local":"transformers.T5ForTokenClassification","sections":[],"depth":2},{"title":"T5ForQuestionAnswering","local":"transformers.T5ForQuestionAnswering","sections":[],"depth":2},{"title":"TFT5Model","local":"transformers.TFT5Model","sections":[],"depth":2},{"title":"TFT5ForConditionalGeneration","local":"transformers.TFT5ForConditionalGeneration","sections":[],"depth":2},{"title":"TFT5EncoderModel","local":"transformers.TFT5EncoderModel","sections":[],"depth":2},{"title":"FlaxT5Model","local":"transformers.FlaxT5Model","sections":[],"depth":2},{"title":"FlaxT5ForConditionalGeneration","local":"transformers.FlaxT5ForConditionalGeneration","sections":[],"depth":2},{"title":"FlaxT5EncoderModel","local":"transformers.FlaxT5EncoderModel","sections":[],"depth":2}],"depth":1}';function Ys(z){return us(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class da extends ms{constructor(t){super(),hs(this,t,Ys,Ds,ps,{})}}export{da as component};
